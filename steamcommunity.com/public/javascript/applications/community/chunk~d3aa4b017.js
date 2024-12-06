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
          BroadcastEmbeddablePopoutHeader: () => he,
          default: () => ce,
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
        p = a(55263),
        _ = a(18654),
        u = a(94095),
        h = a(37076),
        E = a(60014),
        S = a(22797),
        b = a(52038),
        v = a(78327),
        g = a(43087),
        C = a.n(g);
      const f = (0, o.PA)((e) => {
        const { appid: t } = e,
          a = (0, E.n9)(),
          r = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, s] = (0, p.t7)(t, r.current);
        let o = (0, b.A)(
            C().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          i = C().StoreSaleWidgetImage_mini,
          c = C().StoreSaleImage_mini;
        if (!n && 2 != s)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(S.t, { size: "medium" }),
          );
        if (2 == s || !n.GetName())
          return l.createElement("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const d = 8 != n.GetAppType(),
          g = (0, m.wJ)(n.GetStorePageURL(!0), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "div",
            { className: _.Actions },
            l.createElement(
              "a",
              { href: g, target: v.TS.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                h.j,
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
            { className: _.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "div",
              { className: _.Actions },
              l.createElement(
                "a",
                { href: g, target: v.TS.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  h.j,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, b.A)(
                        _.StoreSaleWidgetTitle,
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
              { className: _.StoreSaleWidgetRelease },
              n.GetFormattedSteamReleaseDate(),
            ),
            Boolean(d) &&
              l.createElement(u.wD, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              }),
          ),
        );
      });
      var N = a(22837);
      function A() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var I = a(60727),
        w = a(54728),
        y = a(34010),
        B = a(69300),
        P = a(13952),
        G = a(94011),
        T = a(26296),
        D = a(96236),
        k = a(12155),
        O = a(32754),
        x = a(6502),
        L = a(61859),
        R = a(82227),
        U = a(73745),
        j = a(17720),
        V = a(67165),
        W = a(53120),
        F = a.n(W);
      const M = (0, o.PA)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = (0, l.useRef)(null),
          [o, i] = (0, l.useState)(
            t ? V.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            n.current = e.cancel;
            return (
              (async () => {
                const t = j.b.InitFromClanID(a),
                  r = await V.pF.LoadCreatorHome(t, e);
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
          v.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: F().item_drop_ctn },
          l.createElement(
            "div",
            null,
            (0, L.we)(
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
                { href: c, target: v.TS.IN_CLIENT ? "" : "_blank" },
                (0, L.we)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var H = a(95695),
        Y = a.n(H),
        q = a(96715),
        z = a(10886),
        X = a(19654),
        K = a(3209),
        Q = a(9154),
        Z = a(51272),
        J = a(3919),
        $ = a(14256),
        ee = a.n($);
      function te(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          Q.o0,
          {
            strDescription: "",
            strTitle: (0, L.we)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(ae, { steamid: t }),
          l.createElement(re, { steamid: t }),
        );
      }
      function ae(e) {
        const { steamid: t } = e;
        return l.createElement(
          "div",
          {
            className: (0, b.A)(Y().FlexRowContainer, ee().share_controls_ctn),
          },
          l.createElement(
            O.he,
            { toolTipContent: (0, L.we)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              Z.uU,
              { href: ne(t, J._.k_eFacebook), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, b.A)(Y().Button),
                src: z.A,
              }),
            ),
          ),
          l.createElement(
            O.he,
            { toolTipContent: (0, L.we)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              Z.uU,
              { href: ne(t, J._.k_eTwitter), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, b.A)(Y().Button),
                src: K.A,
              }),
            ),
          ),
          l.createElement(
            O.he,
            { toolTipContent: (0, L.we)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              Z.uU,
              { href: ne(t, J._.k_eReddit), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, b.A)(Y().Button),
                src: X.A,
              }),
            ),
          ),
        );
      }
      function re(e) {
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
                    n((0, L.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, L.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          i = v.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, b.A)(Y().FlexRowContainer, ee().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: ee().LinkInputLabel },
              (0, L.we)("#EventDisplay_Share_Link"),
            ),
            l.createElement("textarea", {
              className: ee().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                O.he,
                { toolTipContent: (0, L.we)("#ToolTip_CopyLinkToClipboard") },
                l.createElement(
                  "div",
                  {
                    className: (0, b.A)(Y().Button, Y().Icon, ee().LinkButton),
                  },
                  l.createElement("img", {
                    className: ee().ClipboardIcon,
                    src: q.A,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: s, className: ee().ClipboardText }, r),
        );
      }
      function ne(e, t) {
        return v.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t;
      }
      var se = a(56011),
        oe = a(738),
        ie = a(29268);
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
            broadcasterAccountID: 155466124,
          },
        ],
      };
      function ce(e) {
        return (function () {
          const e = (0, v.Qn)();
          return !(0, v.Y2)() && !e;
        })()
          ? l.createElement(de, { ...e })
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
        async componentDidMount() {
          await y.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !y.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: y.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? y.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : y.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              y.j
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
          let e = y.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = w.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, y.U7)(a, t ? 2 : 3, e.snr),
            t && A() && A().AddEvent(1005),
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
                y.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              y.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            y.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await y.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = y.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await y.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const r = y.j.Get().GetConcurrentStreams(this.props) > 1;
          let n = w.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(
              "div",
              { className: F().rightPanel },
              l.createElement(ue, { key: "right" + n, ImgUrl: e.right_panel }),
            ),
            o = l.createElement(ue, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = I.l.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = l.createElement(f, {
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
                  (a.rightPanel = l.createElement(ge, {
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
            ((this.m_bMarkedUsabilitySeen = !0), A() && A().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = y.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === y.j.Get().GetChatVisibility();
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
                  r || (0, N.sf)(v.TS.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  r || (0, N.sf)(v.TS.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(r || (0, N.sf)(v.TS.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              });
            let s = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = y.j.Get().GetConcurrentStreams(this.props) > 1;
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
                    className: (0, b.A)({
                      [F().bordered_container]: !0,
                      [F().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, b.A)(
                        F().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(G.K, null),
                    l.createElement("div", { className: F().streamTitle }, o),
                    l.createElement(
                      "div",
                      { className: F().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement(
                          O.he,
                          {
                            toolTipContent: (0, L.we)(
                              "#StoreBroadcast_Change_store_Broadcast_settings",
                            ),
                          },
                          l.createElement("div", {
                            className: F().broadcast_settings_icon,
                            onClick: () =>
                              window.open(
                                `${v.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                              ),
                          }),
                        ),
                      l.createElement(
                        O.he,
                        {
                          toolTipContent: (0, L.we)(
                            "#StoreBroadcast_Hide_Tooltip",
                          ),
                        },
                        l.createElement("div", {
                          className: this.state.bExpanded
                            ? F().bordered_corner_expanded
                            : F().bordered_corner_shrinked,
                          onClick: this.ToggleBroadcastExpandShrink,
                        }),
                      ),
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: F().bordered_subtitle },
                        e.gamedata_subtitle,
                      ),
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, b.A)({
                          [F().container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: i,
                          broadcast_right_panel_simple:
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: { ...this.state.innerStyle },
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
                ) && l.createElement(M, { event: a }),
                l.createElement("div", { className: F().clear_div }),
              ),
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.Cg)([U.oI], de.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.Cg)([U.oI], de.prototype, "OnShrinkTransitionEnd", null),
        (0, r.Cg)([U.oI], de.prototype, "onStreamSelect", null),
        (0, r.Cg)([U.oI], de.prototype, "PlayNextNonVOD", null),
        (de = (0, r.Cg)([o.PA], de));
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
          const e = w.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, y.U7)(e, 7, this.props.stream.snr),
            A() && A().AddEvent(1006),
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
            { className: F().wrapper },
            l.createElement(
              x.Y,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, b.A)({
                    [F().video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [F().WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                l.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? F().broadcast_floating
                      : F().video_container,
                  },
                  this.state.bPopout &&
                    l.createElement(he, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  l.createElement(
                    "div",
                    { className: F().BroadcastPlayerContainer },
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
            ),
          );
        }
      }
      function pe(e) {
        const { stream: t } = e,
          [a] = (0, i.q3)(() => [t.steamid]),
          r = w.es.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = le.list.find(
            (e) =>
              e.appid == r &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (v.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            l.createElement(
              "a",
              { href: e },
              (0, L.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const e = v.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            O.he,
            {
              toolTipContent: (0, L.we)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: F().external_link },
              l.createElement(k.GrD, null),
            ),
          );
        }
      }
      (0, r.Cg)([U.oI], me.prototype, "CloseBroadcastPopup", null),
        (0, r.Cg)([U.oI], me.prototype, "OnEnter", null),
        (0, r.Cg)([U.oI], me.prototype, "OnLeave", null);
      let _e = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = w.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, y.U7)(
            t,
            "show" === y.j.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr,
          ),
            y.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = w.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, y.U7)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != y.j.Get().GetChatVisibility(),
            t = "hide" === y.j.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            r = a;
          Number.parseInt(
            "" +
              w.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, b.A)(F().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, b.A)(F().viewer_count, "viewer_count") },
              " ",
            ),
            l.createElement(
              "div",
              { className: (0, b.A)(F().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: F().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: F().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, L.we)("#sale_three_section_show_streams"),
                  ),
                ),
              e &&
                l.createElement(
                  "div",
                  { className: F().chat_link },
                  l.createElement(k.ROZ, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: F().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, L.we)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat",
                    ),
                  ),
                ),
              r &&
                l.createElement(
                  "div",
                  { className: F().chat_link },
                  l.createElement(k.SYj, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: F().ChatToggle,
                      onClick: (e) =>
                        (0, oe.pg)(
                          l.createElement(te, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, se.uX)(e),
                        ),
                    },
                    (0, L.we)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                O.he,
                {
                  toolTipContent: (0, L.we)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      v.TS.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: v.TS.IN_CLIENT ? void 0 : "_blank",
                    className: F().settings_link,
                  },
                  l.createElement(k.wB_, null),
                ),
              ),
              a && l.createElement(pe, { ...this.props }),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(ie.V, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, r.Cg)([U.oI], _e.prototype, "OnToggleChat", null),
        (0, r.Cg)([U.oI], _e.prototype, "onWatchBroadcastPage", null),
        (_e = (0, r.Cg)([o.PA], _e));
      class ue extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement("img", {
                className: F().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: F().side_panels }),
          );
        }
      }
      const he = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let a = w.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        a = a != w.fO ? a : 0;
        const [r] = (0, p.t7)(a, {});
        return l.createElement(
          "div",
          { className: [F().PopOutVideoTitleBar, F().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                h.u,
                { type: "app", id: a, className: F().PopOutVideoTitleText },
                (0, L.we)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: F().PopOutVideoTitleText },
                (0, L.we)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            O.he,
            {
              toolTipContent: (0, L.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
            },
            l.createElement(
              "button",
              {
                className: F().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
              },
              l.createElement(k.X, null),
            ),
          ),
        );
      });
      function Ee(e, t) {
        var a;
        const r = w.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = P.A.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(F().strStreamIconCapsuleArtHeight)
          : parseInt(F().strStreamIconScreenshotArtHeight);
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
            const e = y.j
              .Get()
              .GetStreams(s)
              .filter((e) => !r || r(e));
            return (0, y.MU)(e), e;
          }, [s, r]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => w.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              P.A.Get()
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
              className: (0, b.A)({
                [F().side_panels]: !0,
                side_panels: !0,
                [F().multistream]: !0,
                [F().scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var r;
              return l.createElement(be, {
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
      function be(e) {
        var t;
        const {
          onStreamSelect: a,
          bSelected: r,
          stream: n,
          bShowCapsuleArt: s,
        } = e;
        let o = (0, i.q3)(
          () => w.es.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
        );
        o = o != w.fO ? o : 0;
        const [c] = (0, p.t7)(
          null !== (t = n.nAppIDVOD) && void 0 !== t ? t : o,
          { include_assets: !0 },
        );
        if (!(0, y.fn)(n)) return null;
        const d = s && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          _ = !Number.isNaN(m),
          u = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, b.A)({
              [F().stream_icon_and_viewer_container]: !0,
              [F().stream_featured]:
                n.current_selection_priority == B.mY.k_eFeatured,
              [F().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            h.j,
            { type: "app", id: o },
            l.createElement(
              D.K,
              {
                className: F().stream_icon_container,
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(ve, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
              r && l.createElement("div", { className: F().stream_icon_arrow }),
            ),
          ),
          l.createElement(
            "div",
            { className: (0, b.A)(F().viewer_count, !_ && F().vod_title) },
            _
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(k.y_e, null),
                  " ",
                  (0, R.Dq)(m),
                )
              : u,
          ),
        );
      }
      function ve(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          n = r ? F().stream_icon_selected : F().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, b.A)(n, F().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(T.o, {
              className: (0, b.A)(n, F().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function ge(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          [n, s] = (0, i.q3)(() => {
            var e;
            return [
              w.es.GetBroadcast(t.steamid),
              null === (e = w.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.q3)(() => t.steamid);
        return n
          ? l.createElement(
              "div",
              {
                className: (0, b.A)({
                  [F().chat_below_container]: r,
                  [F().chat_rightside_container]: !r,
                  [F().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: F().ChatContainer },
                l.createElement(c.I, {
                  emoticonStore: y.MX,
                  watchLocation: 6,
                  steamID: o,
                  broadcastID: s,
                }),
              ),
            )
          : null;
      }
    },
    6502: (e, t, a) => {
      "use strict";
      a.d(t, { Y: () => s });
      var r = a(90626),
        n = a(94607);
      const s = (e) => {
        const { onPositionChange: t, onLeave: a } = e,
          s = r.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === n.Y.above &&
                a &&
                a(e),
              t && t(e)
            ),
            [t, a],
          );
        return r.createElement(n.Y, { ...e, onPositionChange: s });
      };
    },
  },
]);

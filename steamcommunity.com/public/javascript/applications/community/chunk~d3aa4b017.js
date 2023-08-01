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
          BroadcastEmbeddablePopoutHeader: () => ue,
          default: () => le,
        });
      var n = a(33940),
        r = a(52868),
        s = a.n(r),
        o = a(88464),
        i = a(25125),
        l = a(89526),
        c = a(55844),
        d = a(28388),
        m = a(98009),
        p = a(25871),
        _ = a(1631),
        u = a(44865),
        h = a(98389),
        b = a(71161),
        E = a(3301),
        g = a(19304),
        S = a(32765),
        v = a(72051),
        f = a.n(v);
      const C = (0, o.Pi)((e) => {
        const { appid: t } = e,
          a = (0, b.bJ)(),
          n = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [r, s] = (0, p.vs)(t, n.current);
        let o = (0, g.Z)(
            f().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          i = f().StoreSaleWidgetImage_mini,
          c = f().StoreSaleImage_mini;
        if (!r && 2 != s)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(E.V, { size: "medium" }),
            ";",
          );
        if (2 == s || !r.GetName())
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
              { href: v, target: S.De.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                h.W,
                { type: "app", id: t },
                l.createElement(
                  "div",
                  { className: i },
                  l.createElement("img", {
                    className: c,
                    src: r.GetAssets().GetSmallCapsuleURL(),
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
                { href: v, target: S.De.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  h.W,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, g.Z)(
                        _.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                    },
                    r.GetName(),
                  ),
                ),
              ),
            ),
            l.createElement(
              "div",
              { className: _.StoreSaleWidgetRelease },
              r.GetFormattedSteamReleaseDate(),
            ),
            Boolean(d) &&
              l.createElement(u.x1, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              }),
          ),
        );
      });
      var N = a(46132);
      function y() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var B = a(52002),
        D = a(45475),
        I = a(98889),
        P = a(43707),
        G = a(20144),
        w = a(54297),
        x = a(46294),
        A = a(701),
        k = a(84343),
        O = a(52550),
        T = a(14826),
        L = a(88443),
        R = a(4306),
        V = a(47165),
        W = a(74831),
        H = a(29291),
        M = a.n(H);
      const U = (0, o.Pi)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          o = (0, l.useRef)(null),
          [i, c] = (0, l.useState)(
            t ? W.bq.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            o.current = e.cancel;
            return (
              (0, n.mG)(void 0, void 0, void 0, function* () {
                const t = V.K.InitFromClanID(a),
                  n = yield W.bq.LoadCreatorHome(t, e);
                e.token.reason || c(n);
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
          S.De.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: M().item_drop_ctn },
          l.createElement(
            "div",
            null,
            (0, T.Xx)(
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
                { href: d, target: S.De.IN_CLIENT ? "" : "_blank" },
                (0, T.Xx)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var Z = a(52629),
        j = a.n(Z),
        F = a(76672),
        X = a(6726),
        Y = a(7787),
        q = a(16947),
        z = a(99307),
        $ = a(75962),
        J = a(20790),
        K = a(38695),
        Q = a.n(K);
      function ee(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          z.uH,
          {
            strDescription: "",
            strTitle: (0, T.Xx)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(te, { steamid: t }),
          l.createElement(ae, { steamid: t }),
        );
      }
      function te(e) {
        const { steamid: t } = e;
        return l.createElement(
          "div",
          { className: (0, g.Z)(j().FlexRowContainer, Q().share_controls_ctn) },
          l.createElement(
            k.HP,
            { toolTipContent: (0, T.Xx)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              $.ns,
              { href: ne(t, J.u_.k_eFacebook), className: Q().ShareBtn },
              l.createElement("img", {
                className: (0, g.Z)(j().Button),
                src: X.Z,
              }),
            ),
          ),
          l.createElement(
            k.HP,
            { toolTipContent: (0, T.Xx)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              $.ns,
              { href: ne(t, J.u_.k_eTwitter), className: Q().ShareBtn },
              l.createElement("img", {
                className: (0, g.Z)(j().Button),
                src: q.Z,
              }),
            ),
          ),
          l.createElement(
            k.HP,
            { toolTipContent: (0, T.Xx)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              $.ns,
              { href: ne(t, J.u_.k_eReddit), className: Q().ShareBtn },
              l.createElement("img", {
                className: (0, g.Z)(j().Button),
                src: Y.Z,
              }),
            ),
          ),
        );
      }
      function ae(e) {
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
                    r((0, T.Xx)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    r((0, T.Xx)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          i = S.De.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, g.Z)(j().FlexRowContainer, Q().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: Q().LinkInputLabel },
              (0, T.Xx)("#EventDisplay_Share_Link"),
            ),
            l.createElement("textarea", {
              className: Q().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                k.HP,
                { toolTipContent: (0, T.Xx)("#ToolTip_CopyLinkToClipboard") },
                l.createElement(
                  "div",
                  { className: (0, g.Z)(j().Button, j().Icon, Q().LinkButton) },
                  l.createElement("img", {
                    className: Q().ClipboardIcon,
                    src: F.Z,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: s, className: Q().ClipboardText }, n),
        );
      }
      function ne(e, t) {
        return S.De.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t;
      }
      var re = a(60161),
        se = a(57742),
        oe = a(50295);
      const ie = {
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
      function le(e) {
        return (function () {
          const e = (0, S.id)();
          return !(0, S.h4)() && !e;
        })()
          ? l.createElement(ce, Object.assign({}, e))
          : null;
      }
      let ce = class extends l.Component {
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            yield I.ai
              .Get()
              .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !I.ai
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: I.ai
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
                ? I.ai.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : I.ai.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                I.ai
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
          let e = I.ai.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = D.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, I.wx)(a, t ? 2 : 3, e.snr),
            t && y() && y().AddEvent(1005),
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
                I.ai.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              I.ai.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        onStreamSelect(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              I.ai.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield I.ai.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayNextNonVOD() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = I.ai
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
              );
            yield I.ai.Get().PlayFromAvailableStreams(this.props, e, !0);
          });
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const n = I.ai.Get().GetConcurrentStreams(this.props) > 1;
          let r = D.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(
              "div",
              { className: M().rightPanel },
              l.createElement(_e, { key: "right" + r, ImgUrl: e.right_panel }),
            ),
            o = l.createElement(_e, { key: "left" + r, ImgUrl: e.left_panel });
          if (r < 11) {
            const t = B.C.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = l.createElement(C, {
                key: "mini" + e.accountid,
                appid: r,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            n && !t
              ? ((a.leftPanel = l.createElement(be, {
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
                (a.rightPanel = l.createElement(Se, {
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
            ((this.m_bMarkedUsabilitySeen = !0), y() && y().AddEvent(1004));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = I.ai.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === I.ai.Get().GetChatVisibility();
            const {
              event: a,
              language: n,
              fnRenderBroadcastContext: r,
            } = this.props;
            a &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  n || (0, N.jM)(S.De.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  n || (0, N.jM)(S.De.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(n || (0, N.jM)(S.De.LANGUAGE)),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = I.ai.Get().GetConcurrentStreams(this.props) > 1;
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
                      [M().bordered_container]: !0,
                      [M().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, g.Z)(
                        M().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(G.xP, null),
                    o,
                    l.createElement(
                      "div",
                      { className: M().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement("div", {
                          className: M().broadcast_settings_icon,
                          "data-tooltip-text": (0, T.Xx)(
                            "#StoreBroadcast_Change_store_Broadcast_settings",
                          ),
                          onClick: () =>
                            window.open(
                              `${S.De.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                            ),
                        }),
                      l.createElement("div", {
                        className: this.state.bExpanded
                          ? M().bordered_corner_expanded
                          : M().bordered_corner_shrinked,
                        "data-tooltip-text": (0, T.Xx)(
                          "#StoreBroadcast_Hide_Tooltip",
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      }),
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: M().bordered_subtitle },
                        e.gamedata_subtitle,
                      ),
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, g.Z)({
                          [M().container]: !0,
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
                      l.createElement(de, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: r,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      Boolean(this.state.bExpanded) &&
                        l.createElement(pe, {
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
                ) && l.createElement(U, { event: a }),
                l.createElement("div", { className: M().clear_div }),
              ),
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, n.gn)([R.ak], ce.prototype, "ToggleBroadcastExpandShrink", null),
        (0, n.gn)([R.ak], ce.prototype, "OnShrinkTransitionEnd", null),
        (0, n.gn)([R.ak], ce.prototype, "onStreamSelect", null),
        (0, n.gn)([R.ak], ce.prototype, "PlayNextNonVOD", null),
        (ce = (0, n.gn)([o.Pi], ce));
      class de extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = D.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, I.wx)(e, 7, this.props.stream.snr),
            y() && y().AddEvent(1006),
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
            { className: M().wrapper },
            l.createElement(
              O.h,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, g.Z)({
                    [M().video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [M().WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                l.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? M().broadcast_floating
                      : M().video_container,
                  },
                  this.state.bPopout &&
                    l.createElement(ue, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  l.createElement(
                    "div",
                    { className: M().BroadcastPlayerContainer },
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
      function me(e) {
        const { stream: t } = e,
          [a] = (0, i.SZ)(() => [t.steamid]),
          n = D.c9.GetOrCreateBroadcastInfo(a).m_nAppID,
          r = ie.list.find(
            (e) =>
              e.appid == n &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (r) {
          let e = r.url;
          return (
            (S.De.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            l.createElement(
              "a",
              { href: e },
              (0, T.Xx)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const e = S.De.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            k.HP,
            {
              toolTipContent: (0, T.Xx)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: M().external_link },
              l.createElement(A.dLw, null),
            ),
          );
        }
      }
      (0, n.gn)([R.ak], de.prototype, "CloseBroadcastPopup", null),
        (0, n.gn)([R.ak], de.prototype, "OnEnter", null),
        (0, n.gn)([R.ak], de.prototype, "OnLeave", null);
      let pe = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = D.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, I.wx)(
            t,
            "show" === I.ai.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr,
          ),
            I.ai.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = D.c9.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, I.wx)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != I.ai.Get().GetChatVisibility(),
            t = "hide" === I.ai.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            n = a;
          Number.parseInt(
            "" +
              D.c9.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, g.Z)(M().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, g.Z)(M().viewer_count, "viewer_count") },
              " ",
            ),
            l.createElement(
              "div",
              { className: (0, g.Z)(M().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: M().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: M().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, T.Xx)("#sale_three_section_show_streams"),
                  ),
                ),
              e &&
                l.createElement(
                  "div",
                  { className: M().chat_link },
                  l.createElement(A.IWH, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: M().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, T.Xx)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat",
                    ),
                  ),
                ),
              n &&
                l.createElement(
                  "div",
                  { className: M().chat_link },
                  l.createElement(A.mBz, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: M().ChatToggle,
                      onClick: (e) =>
                        (0, se.AM)(
                          l.createElement(ee, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, re.RA)(e),
                        ),
                    },
                    (0, T.Xx)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                k.HP,
                {
                  toolTipContent: (0, T.Xx)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      S.De.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: S.De.IN_CLIENT ? void 0 : "_blank",
                    className: M().settings_link,
                  },
                  l.createElement(A.Zrf, null),
                ),
              ),
              a && l.createElement(me, Object.assign({}, this.props)),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(oe.U, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, n.gn)([R.ak], pe.prototype, "OnToggleChat", null),
        (0, n.gn)([R.ak], pe.prototype, "onWatchBroadcastPage", null),
        (pe = (0, n.gn)([o.Pi], pe));
      class _e extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement("img", {
                className: M().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: M().side_panels }),
          );
        }
      }
      const ue = (0, o.Pi)((e) => {
        const { steamIDBroadcast: t } = e,
          a = D.c9.GetOrCreateBroadcastInfo(t).m_nAppID,
          [n] = (0, p.vs)(a, {});
        return l.createElement(
          "div",
          { className: [M().PopOutVideoTitleBar, M().NoSeslect].join(" ") },
          Boolean(n)
            ? l.createElement(
                h._,
                { type: "app", id: a, className: M().PopOutVideoTitleText },
                (0, T.Xx)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: M().PopOutVideoTitleText },
                (0, T.Xx)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            "button",
            {
              className: M().PopOutVideoCloseButton,
              "data-tooltip-text": (0, T.Xx)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              onClick: e.OnPreventPopup,
            },
            l.createElement(A.X, null),
          ),
        );
      });
      function he(e, t) {
        var a;
        const n = D.c9.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          r = P.Z.Get().GetApp(n);
        return e &&
          (null === (a = null == r ? void 0 : r.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(M().strStreamIconCapsuleArtHeight)
          : parseInt(M().strStreamIconScreenshotArtHeight);
      }
      function be(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: n,
            bShowCapsuleArt: r,
            broadcastEmbedContext: s,
          } = e,
          o = (0, l.useRef)(),
          i = (0, l.useMemo)(() => {
            const e = I.ai
              .Get()
              .GetStreams(s)
              .filter((e) => !n || n(e));
            return (0, I.rg)(e), e;
          }, [s, n]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => D.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              P.Z.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += he(r, a);
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
              className: (0, g.Z)({
                [M().side_panels]: !0,
                side_panels: !0,
                [M().multistream]: !0,
                [M().scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var n;
              return l.createElement(Ee, {
                key: null !== (n = e.accountid) && void 0 !== n ? n : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: a,
                bShowCapsuleArt: r,
              });
            }),
          )
        );
      }
      function Ee(e) {
        var t;
        const {
            onStreamSelect: a,
            bSelected: n,
            stream: r,
            bShowCapsuleArt: s,
          } = e,
          o = (0, i.SZ)(
            () => D.c9.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
          ),
          [c] = (0, p.vs)(null !== (t = r.nAppIDVOD) && void 0 !== t ? t : o, {
            include_assets: !0,
          });
        if (!(0, I.A$)(r)) return null;
        const d = s && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + r.viewer_count),
          _ = !Number.isNaN(m),
          u = !!r.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, g.Z)({
              [M().stream_icon_and_viewer_container]: !0,
              [M().stream_featured]:
                r.current_selection_priority == I.VA.k_eFeatured,
              [M().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            h.W,
            { type: "app", id: o },
            l.createElement(
              x.Y,
              {
                className: M().stream_icon_container,
                onClick: () => a && a(r),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(ge, {
                strThumbnail: r.thumbnail_http_address,
                bSelected: n,
                strCapsuleArtURL: d,
              }),
              n && l.createElement("div", { className: M().stream_icon_arrow }),
            ),
          ),
          l.createElement(
            "div",
            { className: (0, g.Z)(M().viewer_count, !_ && M().vod_title) },
            _
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(A.lsH, null),
                  " ",
                  (0, L.AV)(m),
                )
              : u,
          ),
        );
      }
      function ge(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: n } = e,
          r = n ? M().stream_icon_selected : M().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, g.Z)(r, M().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(w.J, {
              className: (0, g.Z)(r, M().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: r, src: a });
      }
      function Se(e) {
        const { stream: t, orientation: a } = e,
          n = "below" == a,
          [r, s] = (0, i.SZ)(() => {
            var e;
            return [
              D.c9.GetBroadcast(t.steamid),
              null === (e = D.c9.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.SZ)(() => t.steamid);
        return r
          ? l.createElement(
              "div",
              {
                className: (0, g.Z)({
                  [M().chat_below_container]: n,
                  [M().chat_rightside_container]: !n,
                  [M().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: M().ChatContainer },
                l.createElement(c.c, {
                  emoticonStore: I.D$,
                  watchLocation: 6,
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
      var n = a(89526),
        r = a(74802);
      const s = (e) => {
        const { onPositionChange: t, onLeave: a } = e,
          s = n.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === r.h.above &&
                a &&
                a(e),
              t && t(e)
            ),
            [t, a],
          );
        return n.createElement(
          r.h,
          Object.assign({}, e, { onPositionChange: s }),
        );
      };
    },
  },
]);

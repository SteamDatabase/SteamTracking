/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2832],
  {
    2339: (e) => {
      e.exports = {
        StoreSaleWidgetContainer_mini: "_1Vz-yEPmrIFjVgrvAjzgo_",
        Action: "_1ZA3FopUEhMMvyZ-fA5xuj",
        WishList: "_20tgRTqhxj3y8bA3Bf4y-t",
        StoreSaleWidgetImage_mini: "_1Ep8o_7i3AZ-qGEwBcJTYb",
        StoreSaleImage_mini: "_26Hh70xBc_Vsw5R08xLBVi",
        StoreSaleWidgetShortDesc_mini: "DvDV2PUfwy-fcw_ke3_h_",
      };
    },
    3438: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => he,
          default: () => ce,
        });
      var r = a(85556),
        n = a(80751),
        s = a.n(n),
        o = a(27605),
        i = a(30750),
        l = a(47427),
        c = a(6399),
        d = a(58331),
        m = a(31421),
        p = a(80886),
        _ = a(7769),
        u = a(92797),
        h = a(34913),
        E = a(25006),
        b = a(46882),
        S = a(13129),
        v = a(37563),
        g = a(2339),
        f = a.n(g);
      const C = (0, o.Pi)((e) => {
        const { appid: t } = e,
          a = (0, E.bJ)(),
          r = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, s] = (0, p.vs)(t, r.current);
        let o = (0, S.Z)(
            f().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          i = f().StoreSaleWidgetImage_mini,
          c = f().StoreSaleImage_mini;
        if (!n && 2 != s)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(b.V, { size: "medium" }),
          );
        if (2 == s || !n.GetName())
          return l.createElement("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const d = 8 != n.GetAppType(),
          g = (0, m.Hf)(n.GetStorePageURL(), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "div",
            { className: _.Actions },
            l.createElement(
              "a",
              { href: g, target: v.De.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                h.W,
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
                { href: g, target: v.De.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  h.W,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.Z)(
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
              l.createElement(u.x1, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              }),
          ),
        );
      });
      var N = a(77936);
      function y() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var B = a(87699),
        D = a(64730),
        I = a(36453),
        P = a(35134),
        x = a(34310),
        w = a(58129),
        G = a(31659),
        A = a(47242),
        k = a(62613),
        T = a(59728),
        O = a(31028),
        L = a(31846),
        R = a(24549),
        V = a(20417),
        M = a(35427),
        U = a(58670),
        Z = a(84426),
        H = a.n(Z);
      const W = (0, o.Pi)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          r = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = (0, l.useRef)(null),
          [o, i] = (0, l.useState)(
            t ? U.bq.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            n.current = e.cancel;
            return (
              (async () => {
                const t = M.K.InitFromClanID(a),
                  r = await U.bq.LoadCreatorHome(t, e);
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
          v.De.COMMUNITY_BASE_URL +
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
            (0, L.Xx)(
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
                { href: c, target: v.De.IN_CLIENT ? "" : "_blank" },
                (0, L.Xx)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var F = a(71741),
        X = a.n(F),
        j = a(99839),
        q = a(71738),
        Y = a(91120),
        z = a(80289),
        J = a(50898),
        $ = a(14609),
        K = a(81913),
        Q = a(45557),
        ee = a.n(Q);
      function te(e) {
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
          l.createElement(ae, { steamid: t }),
          l.createElement(re, { steamid: t }),
        );
      }
      function ae(e) {
        const { steamid: t } = e;
        return l.createElement(
          "div",
          {
            className: (0, S.Z)(X().FlexRowContainer, ee().share_controls_ctn),
          },
          l.createElement(
            T.HP,
            { toolTipContent: (0, L.Xx)("#EventDisplay_Share_OnFaceBook") },
            l.createElement(
              $.ns,
              { href: ne(t, K.u_.k_eFacebook), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, S.Z)(X().Button),
                src: q.Z,
              }),
            ),
          ),
          l.createElement(
            T.HP,
            { toolTipContent: (0, L.Xx)("#EventDisplay_Share_OnTwitter") },
            l.createElement(
              $.ns,
              { href: ne(t, K.u_.k_eTwitter), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, S.Z)(X().Button),
                src: z.Z,
              }),
            ),
          ),
          l.createElement(
            T.HP,
            { toolTipContent: (0, L.Xx)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              $.ns,
              { href: ne(t, K.u_.k_eReddit), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, S.Z)(X().Button),
                src: Y.Z,
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
                    n((0, L.Xx)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n((0, L.Xx)("#EventDisplay_Share_FailedToCopyToClipboard")),
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
              className: (0, S.Z)(X().FlexRowContainer, ee().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: ee().LinkInputLabel },
              (0, L.Xx)("#EventDisplay_Share_Link"),
            ),
            l.createElement("textarea", {
              className: ee().LinkInput,
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
                    className: (0, S.Z)(X().Button, X().Icon, ee().LinkButton),
                  },
                  l.createElement("img", {
                    className: ee().ClipboardIcon,
                    src: j.Z,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: s, className: ee().ClipboardText }, r),
        );
      }
      function ne(e, t) {
        return v.De.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t;
      }
      var se = a(50423),
        oe = a(90069),
        ie = a(10994);
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
          const e = (0, v.id)();
          return !(0, v.h4)() && !e;
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
          await I.ai.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !I.ai
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: I.ai
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? I.ai.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : I.ai.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              I.ai
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
          let e = I.ai.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = D.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, I.wx)(a, t ? 2 : 3, e.snr),
            t && y() && y().AddEvent(1005),
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
                I.ai.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              I.ai.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            I.ai.Get().GetPlayReadyStream(this.props).accountid !=
              e.accountid &&
              (await I.ai.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = I.ai
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await I.ai.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const r = I.ai.Get().GetConcurrentStreams(this.props) > 1;
          let n = D.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = l.createElement(
              "div",
              { className: H().rightPanel },
              l.createElement(ue, { key: "right" + n, ImgUrl: e.right_panel }),
            ),
            o = l.createElement(ue, { key: "left" + n, ImgUrl: e.left_panel });
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
              language: r,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = {
                ...e,
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
              });
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
                    className: (0, S.Z)({
                      [H().bordered_container]: !0,
                      [H().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.Z)(
                        H().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(w.x, null),
                    l.createElement("div", { className: H().streamTitle }, o),
                    l.createElement(
                      "div",
                      { className: H().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement("div", {
                          className: H().broadcast_settings_icon,
                          "data-tooltip-text": (0, L.Xx)(
                            "#StoreBroadcast_Change_store_Broadcast_settings",
                          ),
                          onClick: () =>
                            window.open(
                              `${v.De.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                            ),
                        }),
                      l.createElement("div", {
                        className: this.state.bExpanded
                          ? H().bordered_corner_expanded
                          : H().bordered_corner_shrinked,
                        "data-tooltip-text": (0, L.Xx)(
                          "#StoreBroadcast_Hide_Tooltip",
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      }),
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
                        className: (0, S.Z)({
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
                ) && l.createElement(W, { event: a }),
                l.createElement("div", { className: H().clear_div }),
              ),
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.gn)([V.ak], de.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.gn)([V.ak], de.prototype, "OnShrinkTransitionEnd", null),
        (0, r.gn)([V.ak], de.prototype, "onStreamSelect", null),
        (0, r.gn)([V.ak], de.prototype, "PlayNextNonVOD", null),
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
            { className: H().wrapper },
            l.createElement(
              O.h,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, S.Z)({
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
                    l.createElement(he, {
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
            ),
          );
        }
      }
      function pe(e) {
        const { stream: t } = e,
          [a] = (0, i.SZ)(() => [t.steamid]),
          r = D.c9.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = le.list.find(
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
              (0, L.Xx)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const e = v.De.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            T.HP,
            {
              toolTipContent: (0, L.Xx)("#BroadcastWatch_View_Broadcast_Page"),
            },
            l.createElement(
              "a",
              { href: e, className: H().external_link },
              l.createElement(k.dLw, null),
            ),
          );
        }
      }
      (0, r.gn)([V.ak], me.prototype, "CloseBroadcastPopup", null),
        (0, r.gn)([V.ak], me.prototype, "OnEnter", null),
        (0, r.gn)([V.ak], me.prototype, "OnLeave", null);
      let _e = class extends l.Component {
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
            r = a;
          Number.parseInt(
            "" +
              D.c9.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, S.Z)(H().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, S.Z)(H().viewer_count, "viewer_count") },
              " ",
            ),
            l.createElement(
              "div",
              { className: (0, S.Z)(H().viewer_links, "viewer_links") },
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
                    (0, L.Xx)("#sale_three_section_show_streams"),
                  ),
                ),
              e &&
                l.createElement(
                  "div",
                  { className: H().chat_link },
                  l.createElement(k.IWH, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: H().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, L.Xx)(
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
                  l.createElement(k.mBz, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: H().ChatToggle,
                      onClick: (e) =>
                        (0, oe.AM)(
                          l.createElement(te, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, se.RA)(e),
                        ),
                    },
                    (0, L.Xx)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                T.HP,
                {
                  toolTipContent: (0, L.Xx)(
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
                    className: H().settings_link,
                  },
                  l.createElement(k.Zrf, null),
                ),
              ),
              a && l.createElement(pe, { ...this.props }),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(ie.U, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, r.gn)([V.ak], _e.prototype, "OnToggleChat", null),
        (0, r.gn)([V.ak], _e.prototype, "onWatchBroadcastPage", null),
        (_e = (0, r.gn)([o.Pi], _e));
      class ue extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement("img", {
                className: H().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: H().side_panels }),
          );
        }
      }
      const he = (0, o.Pi)((e) => {
        const { steamIDBroadcast: t } = e,
          a = D.c9.GetOrCreateBroadcastInfo(t).m_nAppID,
          [r] = (0, p.vs)(a, {});
        return l.createElement(
          "div",
          { className: [H().PopOutVideoTitleBar, H().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                h._,
                { type: "app", id: a, className: H().PopOutVideoTitleText },
                (0, L.Xx)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: H().PopOutVideoTitleText },
                (0, L.Xx)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            "button",
            {
              className: H().PopOutVideoCloseButton,
              "data-tooltip-text": (0, L.Xx)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              onClick: e.OnPreventPopup,
            },
            l.createElement(k.X, null),
          ),
        );
      });
      function Ee(e, t) {
        var a;
        const r = D.c9.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = x.Z.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(H().strStreamIconCapsuleArtHeight)
          : parseInt(H().strStreamIconScreenshotArtHeight);
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
            const e = I.ai
              .Get()
              .GetStreams(s)
              .filter((e) => !r || r(e));
            return (0, I.rg)(e), e;
          }, [s, r]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => D.c9.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              x.Z.Get()
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
                [H().side_panels]: !0,
                side_panels: !0,
                [H().multistream]: !0,
                [H().scrollingstreams]: i.length > 3,
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
            }),
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
            () => D.c9.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
          ),
          [c] = (0, p.vs)(null !== (t = n.nAppIDVOD) && void 0 !== t ? t : o, {
            include_assets: !0,
          });
        if (!(0, I.A$)(n)) return null;
        const d = s && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          _ = !Number.isNaN(m),
          u = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, S.Z)({
              [H().stream_icon_and_viewer_container]: !0,
              [H().stream_featured]:
                n.current_selection_priority == P.VA.k_eFeatured,
              [H().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            h.W,
            { type: "app", id: o },
            l.createElement(
              A.Y,
              {
                className: H().stream_icon_container,
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(ve, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
              r && l.createElement("div", { className: H().stream_icon_arrow }),
            ),
          ),
          l.createElement(
            "div",
            { className: (0, S.Z)(H().viewer_count, !_ && H().vod_title) },
            _
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(k.lsH, null),
                  " ",
                  (0, R.AV)(m),
                )
              : u,
          ),
        );
      }
      function ve(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          n = r ? H().stream_icon_selected : H().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, S.Z)(n, H().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(G.J, {
              className: (0, S.Z)(n, H().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function ge(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          [n, s] = (0, i.SZ)(() => {
            var e;
            return [
              D.c9.GetBroadcast(t.steamid),
              null === (e = D.c9.GetBroadcast(t.steamid)) || void 0 === e
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
                  [H().chat_below_container]: r,
                  [H().chat_rightside_container]: !r,
                  [H().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: H().ChatContainer },
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
    31028: (e, t, a) => {
      "use strict";
      a.d(t, { h: () => s });
      var r = a(47427),
        n = a(58112);
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
        return r.createElement(n.h, { ...e, onPositionChange: s });
      };
    },
  },
]);

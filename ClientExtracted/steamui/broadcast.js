(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [4601],
  {
    17157: (e) => {
      e.exports = {
        strStreamIconCapsuleArtHeight: "90px",
        strStreamIconScreenshotArtHeight: "90px",
        bordered_container: "broadcast_embeddable_bordered_container_3cQe7",
        video_placeholder: "broadcast_embeddable_video_placeholder_3AO8B",
        embedded_player: "broadcast_embeddable_embedded_player_2Y3Pd",
        WidePlayer: "broadcast_embeddable_WidePlayer_3DYQa",
        store_chat_ctn: "broadcast_embeddable_store_chat_ctn_2nZVP",
        item_drop_ctn: "broadcast_embeddable_item_drop_ctn_1ynmZ",
        BorderedContainerPromotion:
          "broadcast_embeddable_BorderedContainerPromotion_6w9mo",
        bordered_title: "broadcast_embeddable_bordered_title_1X5ll",
        streamTitle: "broadcast_embeddable_streamTitle_2_cAT",
        bordered_subtitle: "broadcast_embeddable_bordered_subtitle_2-kGj",
        bordered_corner_container:
          "broadcast_embeddable_bordered_corner_container_38qcY",
        bordered_corner_expanded:
          "broadcast_embeddable_bordered_corner_expanded_1f-oL",
        bordered_corner_shrinked:
          "broadcast_embeddable_bordered_corner_shrinked__mdbD",
        broadcast_settings_icon:
          "broadcast_embeddable_broadcast_settings_icon_2fD_x",
        container: "broadcast_embeddable_container_2t2rR",
        side_panels: "broadcast_embeddable_side_panels_52TmM",
        multistream: "broadcast_embeddable_multistream_2ZEx4",
        wrapper: "broadcast_embeddable_wrapper_1gWJA",
        NoChat: "broadcast_embeddable_NoChat_12cS_",
        video_container: "broadcast_embeddable_video_container_10bUz",
        viewer_bar: "broadcast_embeddable_viewer_bar_2t4Yv",
        viewer_links: "broadcast_embeddable_viewer_links_15u7W",
        chat_link: "broadcast_embeddable_chat_link_2sm6H",
        settings_link: "broadcast_embeddable_settings_link_1m1Dz",
        external_link: "broadcast_embeddable_external_link_3mFZG",
        viewer_count: "broadcast_embeddable_viewer_count_2D9lH",
        vod_title: "broadcast_embeddable_vod_title_2Rb6f",
        stream_icon_and_viewer_container:
          "broadcast_embeddable_stream_icon_and_viewer_container_3yOFf",
        display_capsule_art: "broadcast_embeddable_display_capsule_art_1jFRs",
        stream_icon_container:
          "broadcast_embeddable_stream_icon_container_1wWar",
        stream_icon_hide_on_hover:
          "broadcast_embeddable_stream_icon_hide_on_hover_lpU7M",
        stream_icon_show_on_hover:
          "broadcast_embeddable_stream_icon_show_on_hover_2y2_x",
        stream_icon: "broadcast_embeddable_stream_icon_11057",
        stream_icon_selected: "broadcast_embeddable_stream_icon_selected_2xRVt",
        scrollingstreams: "broadcast_embeddable_scrollingstreams_1hfOY",
        stream_icon_arrow: "broadcast_embeddable_stream_icon_arrow_3mivE",
        clear_div: "broadcast_embeddable_clear_div_1Mwf2",
        NoSelect: "broadcast_embeddable_NoSelect_I9nF5",
        broadcast_floating: "broadcast_embeddable_broadcast_floating_3Sg16",
        PopOutVideoTitleBar: "broadcast_embeddable_PopOutVideoTitleBar_1vT_0",
        PopOutVideoTitleText: "broadcast_embeddable_PopOutVideoTitleText_27rIe",
        PopOutVideoCloseButton:
          "broadcast_embeddable_PopOutVideoCloseButton_W4fRn",
        BroadcastPlayerContainer:
          "broadcast_embeddable_BroadcastPlayerContainer_1pDmt",
        ChatContainer: "broadcast_embeddable_ChatContainer_2X2rQ",
        BroadcastAndChat: "broadcast_embeddable_BroadcastAndChat_2PrUG",
        detail_chat_ctn: "broadcast_embeddable_detail_chat_ctn_3yNwz",
        ChatEntry: "broadcast_embeddable_ChatEntry_p7wUc",
        Event: "broadcast_embeddable_Event_1YaET",
        rightPanel: "broadcast_embeddable_rightPanel_2Xp5Y",
      };
    },
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
    61931: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          BroadcastEmbeddablePopoutHeader: () => Ee,
          default: () => be,
        });
      var r = a(70655),
        n = a(9669),
        o = a.n(n),
        s = a(29323),
        i = a(13271),
        l = a(67294),
        c = a(91148),
        d = a(4687),
        m = a(73185),
        _ = a(96452),
        p = a(17297),
        b = a(88335),
        h = a(71367),
        u = a(83631),
        S = a(12633),
        g = a(85660),
        v = a(51878),
        E = a(81673),
        f = a(56052),
        C = a.n(f);
      const B = (0, s.observer)((e) => {
        const { appid: t } = e,
          a = (0, S.bJ)(),
          r = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, o] = (0, p.vs)(t, r.current);
        let s = (0, v.default)(
            C().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          i = C().StoreSaleWidgetImage_mini,
          c = C().StoreSaleImage_mini;
        if (!n && o != p.Y0.k_EStoreItemCacheState_Unavailable)
          return l.createElement(
            "div",
            { className: s },
            l.createElement(g.Throbber, { size: "medium" }),
            ";",
          );
        if (o == p.Y0.k_EStoreItemCacheState_Unavailable || !n.GetName())
          return l.createElement("div", {
            className: b.StoreSaleWidgetEmptyContainer,
          });
        const d = n.GetAppType() != _.Ac.k_EStoreAppType_Series,
          f = (0, m.NavLinkFallback)(n.GetStorePageURL(), a);
        return l.createElement(
          "div",
          { className: s },
          l.createElement(
            "div",
            { className: b.Actions },
            l.createElement(
              "a",
              { href: f, target: E.Config.IN_CLIENT ? void 0 : "_blank" },
              l.createElement(
                u.W,
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
            { className: b.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "div",
              { className: b.Actions },
              l.createElement(
                "a",
                { href: f, target: E.Config.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  u.W,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, v.default)(
                        b.StoreSaleWidgetTitle,
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
              { className: b.StoreSaleWidgetRelease },
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
      var y = a(66458);
      function P() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var w = a(27701),
        A = a(39292),
        N = a(68829),
        I = a(8164),
        G = a(38180),
        k = a(58959),
        D = a(81082),
        O = a(55660),
        T = a(44742),
        L = a(66249),
        x = a(38973),
        R = a(90437),
        W = a(76023),
        V = a(80533);
      const U = (e) => {
        const { onPositionChange: t, onLeave: a } = e,
          r = l.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === V.Waypoint.above &&
                a &&
                a(e),
              t && t(e)
            ),
            [t, a],
          );
        return l.createElement(
          V.Waypoint,
          Object.assign({}, e, { onPositionChange: r }),
        );
      };
      var M = a(92312),
        F = a(24934),
        H = a(48287),
        j = a(41353),
        z = a(13416),
        Z = a(17157),
        Y = a.n(Z);
      const q = (0, s.observer)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          s = (0, l.useRef)(null),
          [i, c] = (0, l.useState)(
            t ? z.bq.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = o().CancelToken.source();
            s.current = e.cancel;
            return (
              (0, r.mG)(void 0, void 0, void 0, function* () {
                const t = j.CSteamID.InitFromClanID(a),
                  r = yield z.bq.LoadCreatorHome(t, e);
                e.token.reason || c(r);
              }),
              () => {
                s.current && s.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          n || !i || !i.BIsLoaded())
        )
          return null;
        const d =
          E.Config.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.createElement(
          "div",
          { className: Y().item_drop_ctn },
          l.createElement(
            "div",
            null,
            (0, M.Localize)(
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
                { href: d, target: E.Config.IN_CLIENT ? "" : "_blank" },
                (0, M.Localize)("#SalePage_WatchForDrop_LearnMore"),
              ),
          ),
        );
      });
      var K = a(34133),
        Q = a.n(K),
        X = a(92377),
        $ = a(99212),
        J = a(88393),
        ee = a(51751),
        te = a(57542),
        ae = a(68503),
        re = a(8410),
        ne = a(55285),
        oe = a.n(ne);
      function se(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          te.GenericConfirmDialog,
          {
            strDescription: "",
            strTitle: (0, M.Localize)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(ie, { steamid: t }),
          l.createElement(le, { steamid: t }),
        );
      }
      function ie(e) {
        const { steamid: t } = e;
        return l.createElement(
          "div",
          {
            className: (0, v.default)(
              Q().FlexRowContainer,
              oe().share_controls_ctn,
            ),
          },
          l.createElement(
            W.HP,
            {
              toolTipContent: (0, M.Localize)("#EventDisplay_Share_OnFaceBook"),
            },
            l.createElement(
              ae.LinkInNewWindow,
              { href: ce(t, re.u_.k_eFacebook), className: oe().ShareBtn },
              l.createElement("img", {
                className: (0, v.default)(Q().Button),
                src: $.Z,
              }),
            ),
          ),
          l.createElement(
            W.HP,
            {
              toolTipContent: (0, M.Localize)("#EventDisplay_Share_OnTwitter"),
            },
            l.createElement(
              ae.LinkInNewWindow,
              { href: ce(t, re.u_.k_eTwitter), className: oe().ShareBtn },
              l.createElement("img", {
                className: (0, v.default)(Q().Button),
                src: ee.Z,
              }),
            ),
          ),
          l.createElement(
            W.HP,
            { toolTipContent: (0, M.Localize)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              ae.LinkInNewWindow,
              { href: ce(t, re.u_.k_eReddit), className: oe().ShareBtn },
              l.createElement("img", {
                className: (0, v.default)(Q().Button),
                src: J.Z,
              }),
            ),
          ),
        );
      }
      function le(e) {
        const { steamid: t } = e,
          a = l.createRef(),
          [r, n] = l.useState(""),
          o = l.createRef(),
          s = l.useCallback(
            (e) => {
              a.current &&
                a.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(a.current.value)
                  .then((e) => {
                    n((0, M.Localize)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n(
                      (0, M.Localize)(
                        "#EventDisplay_Share_FailedToCopyToClipboard",
                      ),
                    ),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a],
          ),
          i = E.Config.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, v.default)(Q().FlexRowContainer, oe().linkField),
              onClick: s,
            },
            l.createElement(
              "span",
              { className: oe().LinkInputLabel },
              (0, M.Localize)("#EventDisplay_Share_Link"),
            ),
            l.createElement("textarea", {
              className: oe().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                W.HP,
                {
                  toolTipContent: (0, M.Localize)(
                    "#ToolTip_CopyLinkToClipboard",
                  ),
                },
                l.createElement(
                  "div",
                  {
                    className: (0, v.default)(
                      Q().Button,
                      Q().Icon,
                      oe().LinkButton,
                    ),
                  },
                  l.createElement("img", {
                    className: oe().ClipboardIcon,
                    src: X.Z,
                  }),
                ),
              ),
          ),
          l.createElement("div", { ref: o, className: oe().ClipboardText }, r),
        );
      }
      function ce(e, t) {
        return (
          E.Config.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t
        );
      }
      var de = a(49358),
        me = a(23512),
        _e = a(38078);
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
      function be(e) {
        return (function () {
          const e = (0, E.useInGamepadUI)();
          return !(0, E.IsSteamChina)() && !e;
        })()
          ? l.createElement(he, Object.assign({}, e))
          : null;
      }
      let he = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = o().CancelToken.source()),
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
            yield k.ai
              .Get()
              .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !k.ai
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: k.ai
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
                ? k.ai.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : k.ai.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                k.ai
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
          let e = k.ai.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(
              e.steamid,
            ).m_nAppID;
          (0, k.wx)(
            a,
            t
              ? A.d2.k_EProductActionHideBroadcast
              : A.d2.k_EProductActionShowBroadcast,
            e.snr,
          ),
            t &&
              P() &&
              P().AddEvent(N.VK.k_EStoreUsabilityEvent_App_BroadcastHidden),
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
                k.ai.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              k.ai.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        onStreamSelect(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              k.ai.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield k.ai.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayNextNonVOD() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = k.ai
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
              );
            yield k.ai.Get().PlayFromAvailableStreams(this.props, e, !0);
          });
        }
        ConstructSidePanels(e, t) {
          let a = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return a;
          const r = k.ai.Get().GetConcurrentStreams(this.props) > 1;
          let n = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(
              e.steamid,
            ).m_nAppID,
            o = l.createElement(
              "div",
              { className: Y().rightPanel },
              l.createElement(ve, { key: "right" + n, ImgUrl: e.right_panel }),
            ),
            s = l.createElement(ve, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = I.C.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((o = l.createElement(B, {
                key: "mini" + e.accountid,
                appid: n,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            r && !t
              ? ((a.leftPanel = l.createElement(Ce, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + n,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (a.rightPanel = o))
              : t
              ? ((a.leftPanel = l.createElement("div", null)),
                (a.rightPanel = l.createElement(Pe, {
                  stream: e,
                  orientation: "rightside",
                })),
                (a.bRightPanelArtworkOrEmpty = !1))
              : ((a.leftPanel = s), (a.rightPanel = o)),
            a
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0),
            P() &&
              P().AddEvent(N.VK.k_EStoreUsabilityEvent_App_BroadcastPlayed));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = k.ai.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === k.ai.Get().GetChatVisibility();
            const {
              event: a,
              language: r,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  r || (0, y.jM)(E.Config.LANGUAGE),
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  r || (0, y.jM)(E.Config.LANGUAGE),
                ),
                store_title: a.GetBroadcastTitle(
                  r || (0, y.jM)(E.Config.LANGUAGE),
                ),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              }));
            let o = this.ConstructSidePanels(e, t),
              s = e.store_title ? e.store_title : e.title,
              i = k.ai.Get().GetConcurrentStreams(this.props) > 1;
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
                    className: (0, v.default)({
                      [Y().bordered_container]: !0,
                      [Y().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, v.default)(
                        Y().bordered_title,
                        "bordered_title_trgt",
                      ),
                    },
                    l.createElement(T.xP, null),
                    l.createElement("div", { className: Y().streamTitle }, s),
                    l.createElement(
                      "div",
                      { className: Y().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement("div", {
                          className: Y().broadcast_settings_icon,
                          "data-tooltip-text": (0, M.Localize)(
                            "#StoreBroadcast_Change_store_Broadcast_settings",
                          ),
                          onClick: () =>
                            window.open(
                              `${E.Config.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                            ),
                        }),
                      l.createElement("div", {
                        className: this.state.bExpanded
                          ? Y().bordered_corner_expanded
                          : Y().bordered_corner_shrinked,
                        "data-tooltip-text": (0, M.Localize)(
                          "#StoreBroadcast_Hide_Tooltip",
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      }),
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: Y().bordered_subtitle },
                        e.gamedata_subtitle,
                      ),
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, v.default)({
                          [Y().container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: i,
                          broadcast_right_panel_simple:
                            o.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      o.leftPanel,
                      l.createElement(ue, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: n,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      o.rightPanel,
                      Boolean(this.state.bExpanded) &&
                        l.createElement(ge, {
                          stream: e,
                          bMultistream: i,
                          chatAnnouncementGivewayGID: o.rightPanel
                            ? void 0
                            : this.props.chat_announcement_giveaway,
                        }),
                    ),
                ),
                Boolean(
                  a && a.jsondata && a.jsondata.broadcast_item_drops_enabled,
                ) && l.createElement(q, { event: a }),
                l.createElement("div", { className: Y().clear_div }),
              ),
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.gn)([H.bind], he.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.gn)([H.bind], he.prototype, "OnShrinkTransitionEnd", null),
        (0, r.gn)([H.bind], he.prototype, "onStreamSelect", null),
        (0, r.gn)([H.bind], he.prototype, "PlayNextNonVOD", null),
        (he = (0, r.gn)([s.observer], he));
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
          const e = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.wx)(
            e,
            A.d2.k_EProductActionCloseBroadcastSmallPopup,
            this.props.stream.snr,
          ),
            P() &&
              P().AddEvent(N.VK.k_EStoreUsabilityEvent_App_BroadcastMiniClosed),
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
            { className: Y().wrapper },
            l.createElement(
              U,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, v.default)({
                    [Y().video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [Y().WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                l.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? Y().broadcast_floating
                      : Y().video_container,
                  },
                  this.state.bPopout &&
                    l.createElement(Ee, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  l.createElement(
                    "div",
                    { className: Y().BroadcastPlayerContainer },
                    l.createElement(d.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation:
                        w.q2.k_EBroadcastWatchLocation_StoreAppPage,
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
      function Se(e) {
        const { stream: t } = e,
          [a] = (0, i.SZ)(() => [t.steamid]),
          r = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = pe.list.find(
            (e) =>
              e.appid == r &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (n) {
          let e = n.url;
          return (
            (E.Config.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            l.createElement(
              "a",
              { href: e },
              (0, M.Localize)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            )
          );
        }
        {
          const e = E.Config.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            W.HP,
            {
              toolTipContent: (0, M.Localize)(
                "#BroadcastWatch_View_Broadcast_Page",
              ),
            },
            l.createElement(
              "a",
              { href: e, className: Y().external_link },
              l.createElement(R.ExternalLink, null),
            ),
          );
        }
      }
      (0, r.gn)([H.bind], ue.prototype, "CloseBroadcastPopup", null),
        (0, r.gn)([H.bind], ue.prototype, "OnEnter", null),
        (0, r.gn)([H.bind], ue.prototype, "OnLeave", null);
      let ge = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.wx)(
            t,
            "show" === k.ai.Get().GetChatVisibility()
              ? A.d2.k_EProductActionHideBroadcastChat
              : A.d2.k_EProductActionShowBroadcastChat,
            this.props.stream.snr,
          ),
            k.ai.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.wx)(
            e,
            A.d2.k_EProductActionOpenBroadcastWatchPage,
            this.props.stream.snr,
          );
        }
        render() {
          const e = "remove" != k.ai.Get().GetChatVisibility(),
            t = "hide" === k.ai.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            r = a;
          let n = Number.parseInt(
            "" +
              G.BroadcastWatchStore.GetOrCreateBroadcastInfo(
                this.props.stream.steamid,
              ).m_nViewerCount,
          );
          return l.createElement(
            "div",
            { className: (0, v.default)(Y().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, v.default)(Y().viewer_count, "viewer_count") },
              l.createElement(R.Viewers, null),
              (0, F.AV)(n),
            ),
            l.createElement(
              "div",
              { className: (0, v.default)(Y().viewer_links, "viewer_links") },
              Boolean(e && !t && this.props.bMultistream) &&
                l.createElement(
                  "div",
                  { className: Y().chat_link },
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: Y().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, M.Localize)("#sale_three_section_show_streams"),
                  ),
                ),
              e &&
                l.createElement(
                  "div",
                  { className: Y().chat_link },
                  l.createElement(R.ChatBubble, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: Y().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, M.Localize)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat",
                    ),
                  ),
                ),
              r &&
                l.createElement(
                  "div",
                  { className: Y().chat_link },
                  l.createElement(R.Share, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: Y().ChatToggle,
                      onClick: (e) =>
                        (0, me.ShowModalDialog)(
                          l.createElement(se, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, de.GetOwningWindowForEvent)(e),
                        ),
                    },
                    (0, M.Localize)("#Broadcast_ShareBroadcast"),
                  ),
                ),
              l.createElement(
                W.HP,
                {
                  toolTipContent: (0, M.Localize)(
                    "#StoreBroadcast_Change_store_Broadcast_settings",
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      E.Config.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: E.Config.IN_CLIENT ? void 0 : "_blank",
                    className: Y().settings_link,
                  },
                  l.createElement(R.Settings, null),
                ),
              ),
              a && l.createElement(Se, Object.assign({}, this.props)),
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(_e.U, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              }),
          );
        }
      };
      (0, r.gn)([H.bind], ge.prototype, "OnToggleChat", null),
        (0, r.gn)([H.bind], ge.prototype, "onWatchBroadcastPage", null),
        (ge = (0, r.gn)([s.observer], ge));
      class ve extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.createElement(
            l.Fragment,
            null,
            e &&
              l.createElement("img", {
                className: Y().side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.createElement("div", { className: Y().side_panels }),
          );
        }
      }
      const Ee = (0, s.observer)((e) => {
        const { steamIDBroadcast: t } = e,
          a = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(t).m_nAppID,
          [r] = (0, p.vs)(a, {});
        return l.createElement(
          "div",
          { className: [Y().PopOutVideoTitleBar, Y().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                u._,
                { type: "app", id: a, className: Y().PopOutVideoTitleText },
                (0, M.Localize)("#StoreBroadcast_Detault_popout_Title"),
              )
            : l.createElement(
                "div",
                { className: Y().PopOutVideoTitleText },
                (0, M.Localize)("#StoreBroadcast_Detault_popout_Title"),
              ),
          l.createElement(
            "button",
            {
              className: Y().PopOutVideoCloseButton,
              "data-tooltip-text": (0, M.Localize)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              onClick: e.OnPreventPopup,
            },
            l.createElement(R.X, null),
          ),
        );
      });
      function fe(e, t) {
        var a;
        const r = G.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            t.steamid,
          ).m_nAppID,
          n = O.Z.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(Y().strStreamIconCapsuleArtHeight)
          : parseInt(Y().strStreamIconScreenshotArtHeight);
      }
      function Ce(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: r,
            bShowCapsuleArt: n,
            broadcastEmbedContext: o,
          } = e,
          s = (0, l.useRef)(),
          i = (0, l.useMemo)(() => {
            const e = k.ai
              .Get()
              .GetStreams(o)
              .filter((e) => !r || r(e));
            return (0, k.rg)(e), e;
          }, [o, r]);
        return (
          (0, l.useEffect)(() => {
            if (s && s.current) {
              const e = i
                .map(
                  (e) =>
                    G.BroadcastWatchStore.GetOrCreateBroadcastInfo(e.steamid)
                      .m_nAppID,
                )
                .filter(Boolean);
              O.Z.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (s.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += fe(n, a);
                    }
                    s.current.scrollTop = e;
                  }
                });
            }
          }, [i, n, t.accountid, s]),
          l.createElement(
            "div",
            {
              ref: s,
              className: (0, v.default)({
                [Y().side_panels]: !0,
                side_panels: !0,
                [Y().multistream]: !0,
                [Y().scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var r;
              return l.createElement(Be, {
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
      function Be(e) {
        var t;
        const {
            onStreamSelect: a,
            bSelected: r,
            stream: n,
            bShowCapsuleArt: o,
          } = e,
          s = (0, i.SZ)(
            () =>
              G.BroadcastWatchStore.GetOrCreateBroadcastInfo(n.steamid)
                .m_nAppID,
          ),
          [c] = (0, p.vs)(null !== (t = n.nAppIDVOD) && void 0 !== t ? t : s, {
            include_assets: !0,
          });
        if (!(0, k.A$)(n)) return null;
        const d = o && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          _ = !Number.isNaN(m),
          b = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, v.default)({
              [Y().stream_icon_and_viewer_container]: !0,
              [Y().stream_featured]:
                n.current_selection_priority == D.VA.k_eFeatured,
              [Y().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            u.W,
            { type: "app", id: s },
            l.createElement(
              x.Y,
              {
                className: Y().stream_icon_container,
                onClick: () => a && a(n),
                rootMargin: "100px 0px 100px 0px",
              },
              l.createElement(ye, {
                strThumbnail: n.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
              r && l.createElement("div", { className: Y().stream_icon_arrow }),
            ),
          ),
          l.createElement(
            "div",
            {
              className: (0, v.default)(Y().viewer_count, !_ && Y().vod_title),
            },
            _
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(R.Viewers, null),
                  " ",
                  (0, F.AV)(m),
                )
              : b,
          ),
        );
      }
      function ye(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          n = r ? Y().stream_icon_selected : Y().stream_icon;
        if (t) {
          const e = [t];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement("img", {
              className: (0, v.default)(n, Y().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(L.J, {
              className: (0, v.default)(n, Y().stream_icon_show_on_hover),
              srcs: e,
            }),
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function Pe(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          [n, o] = (0, i.SZ)(() => {
            var e;
            return [
              G.BroadcastWatchStore.GetBroadcast(t.steamid),
              null === (e = G.BroadcastWatchStore.GetBroadcast(t.steamid)) ||
              void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          s = (0, i.SZ)(() => t.steamid);
        return n
          ? l.createElement(
              "div",
              {
                className: (0, v.default)({
                  [Y().chat_below_container]: r,
                  [Y().chat_rightside_container]: !r,
                  [Y().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: Y().ChatContainer },
                l.createElement(c.BroadcastChat, {
                  emoticonStore: k.D$,
                  watchLocation: w.q2.k_EBroadcastWatchLocation_StoreAppPage,
                  steamID: s,
                  broadcastID: o,
                }),
              ),
            )
          : null;
      }
    },
    79927: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => v });
      var r = a(70655),
        n = a(67294),
        o = a(90437),
        s = a(29323),
        i = a(22188),
        l = a(81761),
        c = a(92312),
        d = a(41353),
        m = a(48287),
        _ = a(27701),
        p = a(17257),
        b = a(95379),
        h = a.n(b),
        u = a(4687),
        S = a(51878);
      let g = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_playerRef = n.createRef()),
            (this.m_hRegisterForGameActionStart = null),
            (this.m_hRegisterForGameActionStart =
              SteamClient.Apps.RegisterForGameActionStart(
                this.onGameActionStart,
              )),
            SteamClient.Apps.GetGameActionForApp(
              this.props.overview.GetGameID(),
              this.onGameActionStart,
            ),
            (this.state = { broadcast: null, bPlaying: !1 });
        }
        componentDidMount() {
          this.RefreshAndSelectBroadcast();
        }
        RefreshAndSelectBroadcast() {
          this.m_dispose ||
            (this.m_dispose = (0, i.autorun)(() => {
              let e =
                  l.m.GetBroadcastList(this.props.overview.appid).broadcasts ||
                  [],
                t = this.state.broadcast;
              t && (t = e.find((e) => e.unAccountId == t.unAccountId)),
                !t && e.length > 0 && (t = e[0]),
                this.state.broadcast != t && this.setState({ broadcast: t });
            }));
        }
        componentDidUpdate(e) {
          e.overview.appid != this.props.overview.appid &&
            (this.setState({ broadcast: null, bPlaying: !1 }),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null)),
            this.RefreshAndSelectBroadcast());
        }
        componentWillUnmount() {
          this.m_hRegisterForGameActionStart &&
            this.m_hRegisterForGameActionStart.unregister(),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null));
        }
        onGameActionStart(e, t, a) {
          t == this.props.overview.GetGameID() &&
            0 != e &&
            "LaunchApp" == a &&
            this.m_playerRef.current &&
            this.m_playerRef.current.StopPlaybackTillUserInput();
        }
        GetBroadcastURL(e) {
          return (
            `steam://openurl_external/${p.de.GetCommunityURL()}broadcast/watch/` +
            e
          );
        }
        OnClickPlay() {
          this.setState({ bPlaying: !0 });
        }
        render() {
          let e = this.state.broadcast;
          if (!e) return null;
          let t = d.CSteamID.InitFromAccountID(e.unAccountId),
            a = this.state.bPlaying,
            r = "GameDetailsPlayer";
          return (
            this.props.isTheaterMode && (r += " TheaterMode"),
            n.createElement(
              "div",
              { className: h().BroadcastBox },
              !a &&
                n.createElement(E, {
                  img: e.strThumbnailURL,
                  onClick: this.OnClickPlay,
                }),
              a &&
                n.createElement(
                  "div",
                  { className: h().BroadcastPlayer },
                  n.createElement(u.default, {
                    ref: this.m_playerRef,
                    steamIDBroadcast: t.ConvertTo64BitString(),
                    watchLocation: _.q2.k_EBroadcastWatchLocation_StoreAppPage,
                    onTheaterMode: this.props.onTheaterMode,
                    bStartMuted: !1,
                    bStartPaused: !1,
                    classes: r,
                  }),
                ),
              !this.props.isTheaterMode &&
                n.createElement(
                  "a",
                  {
                    href: this.GetBroadcastURL(t.ConvertTo64BitString()),
                    className: h().ViewBroadcastOnWeb,
                  },
                  (0, c.Localize)("#AppDetails_Broadcast_ViewOnWeb"),
                ),
            )
          );
        }
      };
      (0, r.gn)([m.bind], g.prototype, "onGameActionStart", null),
        (0, r.gn)([m.bind], g.prototype, "GetBroadcastURL", null),
        (0, r.gn)([m.bind], g.prototype, "OnClickPlay", null),
        (g = (0, r.gn)([s.observer], g));
      const v = g;
      function E(e) {
        let t = (0, S.default)(
          "BroadcastVideoUserInputNeeded",
          h().PlayButtonWrapper,
        );
        return n.createElement(
          "div",
          { className: h().BroadcastThumbnail, onClick: e.onClick },
          n.createElement("img", { src: e.img }),
          n.createElement(
            "div",
            { className: t },
            n.createElement(o.Play, null),
            n.createElement(
              "span",
              null,
              (0, c.Localize)("#DASHPlayerControls_ClickToPlay"),
            ),
          ),
        );
      }
    },
  },
]);
//# sourceMappingURL=sourcemaps\broadcast.js.map

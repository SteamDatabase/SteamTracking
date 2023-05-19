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
        viewer_bar: "broadcast_embeddable_viewer_bar_2t4Yv",
        side_panels: "broadcast_embeddable_side_panels_52TmM",
        multistream: "broadcast_embeddable_multistream_2ZEx4",
        wrapper: "broadcast_embeddable_wrapper_1gWJA",
        NoChat: "broadcast_embeddable_NoChat_12cS_",
        video_container: "broadcast_embeddable_video_container_10bUz",
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
    91163: (e, t, a) => {
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
        c = a(91148),
        d = a(4687),
        m = a(73185),
        _ = (a(92355), a(17297)),
        p = a(88335),
        b = a(71367),
        h = a(83631),
        u = a(12633),
        g = a(85660),
        S = a(51878),
        v = a(81673),
        E = (a(27427), a(56052)),
        f = a.n(E);
      const C = (0, o.observer)((e) => {
        const { appid: t } = e,
          a = (0, u.bJ)(),
          r = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          [n, s] = (0, _.vs)(t, r.current);
        let o = f().StoreSaleWidgetContainer_mini,
          i = f().StoreSaleWidgetImage_mini,
          c = f().StoreSaleImage_mini;
        if (!n && 2 != s)
          return l.createElement(
            "div",
            { className: o },
            l.createElement(g.Throbber, { size: "medium" }),
            ";"
          );
        if (2 == s || !n.GetName())
          return l.createElement("div", {
            className: p.StoreSaleWidgetEmptyContainer,
          });
        const d = 8 != n.GetAppType(),
          E = (0, m.NavLinkFallback)(n.GetStorePageURL(), a);
        return l.createElement(
          "div",
          { className: o },
          l.createElement(
            "div",
            { className: p.Actions },
            l.createElement(
              "a",
              { href: E, target: v.Config.IN_CLIENT ? void 0 : "_blank" },
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
            { className: p.StoreSaleBroadcastWidgetRight },
            l.createElement(
              "div",
              { className: p.Actions },
              l.createElement(
                "a",
                { href: E, target: v.Config.IN_CLIENT ? void 0 : "_blank" },
                l.createElement(
                  h.W,
                  { type: "app", id: t },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.default)(
                        p.StoreSaleWidgetTitle,
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
              { className: p.StoreSaleWidgetRelease },
              n.GetFormattedSteamReleaseDate()
            ),
            Boolean(d) &&
              l.createElement(b.x1, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      var B = a(14200),
        y = (a(85106), a(34558)),
        P = (a(70839), a(82767), a(36890), a(8164)),
        w = a(82911),
        N = a(58959),
        I = (a(81082), a(81264)),
        G = a(44742),
        A = a(66249),
        D = a(38973),
        T = a(90437),
        O = a(76023),
        k = a(80533);
      const L = (e) => {
        const { onPositionChange: t, onLeave: a } = e,
          r = l.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === k.Waypoint.above &&
                a &&
                a(e),
              t && t(e)
            ),
            [t, a]
          );
        return l.createElement(
          k.Waypoint,
          Object.assign({}, e, { onPositionChange: r })
        );
      };
      var x = a(92312),
        R = a(24934),
        W = a(48287),
        V = (a(70640), a(41353)),
        U = (a(40706), a(74780)),
        M = a(17157),
        F = a.n(M);
      const H = (0, o.observer)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          n = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          o = (0, l.useRef)(null),
          [i, c] = (0, l.useState)(
            t ? U.bq.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          ((0, l.useEffect)(() => {
            const e = s().CancelToken.source();
            o.current = e.cancel;
            return (
              (0, r.mG)(void 0, void 0, void 0, function* () {
                const t = V.CSteamID.InitFromClanID(a),
                  r = yield U.bq.LoadCreatorHome(t, e);
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
          v.Config.COMMUNITY_BASE_URL +
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
            (0, x.Localize)(
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
                { href: d, target: v.Config.IN_CLIENT ? "" : "_blank" },
                (0, x.Localize)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var j = a(34133),
        z = a.n(j),
        Z = a(92377),
        Y = a(99212),
        X = a(88393),
        q = a(51751),
        $ = a(57542),
        Q = a(68503),
        J = a(8410),
        K = a(55285),
        ee = a.n(K);
      function te(e) {
        const { steamid: t, closeModal: a } = e;
        return l.createElement(
          $.GenericConfirmDialog,
          {
            strDescription: "",
            strTitle: (0, x.Localize)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
          },
          l.createElement(ae, { steamid: t }),
          l.createElement(re, { steamid: t })
        );
      }
      function ae(e) {
        const { steamid: t } = e;
        return l.createElement(
          "div",
          {
            className: (0, S.default)(
              z().FlexRowContainer,
              ee().share_controls_ctn
            ),
          },
          l.createElement(
            O.HP,
            {
              toolTipContent: (0, x.Localize)("#EventDisplay_Share_OnFaceBook"),
            },
            l.createElement(
              Q.LinkInNewWindow,
              { href: ne(t, J.u_.k_eFacebook), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, S.default)(z().Button),
                src: Y.Z,
              })
            )
          ),
          l.createElement(
            O.HP,
            {
              toolTipContent: (0, x.Localize)("#EventDisplay_Share_OnTwitter"),
            },
            l.createElement(
              Q.LinkInNewWindow,
              { href: ne(t, J.u_.k_eTwitter), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, S.default)(z().Button),
                src: q.Z,
              })
            )
          ),
          l.createElement(
            O.HP,
            { toolTipContent: (0, x.Localize)("#EventDisplay_Share_OnReddit") },
            l.createElement(
              Q.LinkInNewWindow,
              { href: ne(t, J.u_.k_eReddit), className: ee().ShareBtn },
              l.createElement("img", {
                className: (0, S.default)(z().Button),
                src: X.Z,
              })
            )
          )
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
                    n((0, x.Localize)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    n(
                      (0, x.Localize)(
                        "#EventDisplay_Share_FailedToCopyToClipboard"
                      )
                    ),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [a]
          ),
          i = v.Config.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return l.createElement(
          "div",
          null,
          l.createElement(
            "div",
            {
              className: (0, S.default)(z().FlexRowContainer, ee().linkField),
              onClick: o,
            },
            l.createElement(
              "span",
              { className: ee().LinkInputLabel },
              (0, x.Localize)("#EventDisplay_Share_Link")
            ),
            l.createElement("textarea", {
              className: ee().LinkInput,
              ref: a,
              value: i,
              readOnly: !0,
            }),
            Boolean(document.queryCommandSupported("copy")) &&
              l.createElement(
                O.HP,
                {
                  toolTipContent: (0, x.Localize)(
                    "#ToolTip_CopyLinkToClipboard"
                  ),
                },
                l.createElement(
                  "div",
                  {
                    className: (0, S.default)(
                      z().Button,
                      z().Icon,
                      ee().LinkButton
                    ),
                  },
                  l.createElement("img", {
                    className: ee().ClipboardIcon,
                    src: Z.Z,
                  })
                )
              )
          ),
          l.createElement("div", { ref: s, className: ee().ClipboardText }, r)
        );
      }
      function ne(e, t) {
        return (
          v.Config.COMMUNITY_BASE_URL + "broadcast/share/" + e + "?site=" + t
        );
      }
      var se = a(49358),
        oe = a(23512),
        ie = a(38078);
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
            broadcasterAccountID: 1532096361,
          },
        ],
      };
      function ce(e) {
        return (function () {
          const e = (0, v.useInGamepadUI)();
          return !(0, v.IsSteamChina)() && !e;
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
            yield N.ai
              .Get()
              .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !N.ai
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: N.ai
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
                ? N.ai.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : N.ai.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (N.ai
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
          let e = N.ai.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(
              e.steamid
            ).m_nAppID;
          (0, N.wx)(a, t ? 2 : 3, e.snr),
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
                N.ai.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              N.ai.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              N.ai.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield N.ai.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = N.ai
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            (0, N.rg)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield N.ai
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
          const r = N.ai.Get().GetConcurrentStreams(this.props) > 1;
          let n = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(
              e.steamid
            ).m_nAppID,
            s = l.createElement(
              "div",
              { className: F().rightPanel },
              l.createElement(be, { key: "right" + n, ImgUrl: e.right_panel })
            ),
            o = l.createElement(be, { key: "left" + n, ImgUrl: e.left_panel });
          if (n < 11) {
            const t = P.C.GetAppIDListForBroadcasterSteamID(e.steamid);
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
                (a.rightPanel = l.createElement(Ee, {
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
          let e = N.ai.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === N.ai.Get().GetChatVisibility();
            const {
              event: a,
              language: r,
              fnRenderBroadcastContext: n,
            } = this.props;
            a &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  r || (0, B.PchLanguageToELanguage)(v.Config.LANGUAGE)
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  r || (0, B.PchLanguageToELanguage)(v.Config.LANGUAGE)
                ),
                store_title: a.GetBroadcastTitle(
                  r || (0, B.PchLanguageToELanguage)(v.Config.LANGUAGE)
                ),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = N.ai.Get().GetConcurrentStreams(this.props) > 1;
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
                    className: (0, S.default)({
                      [F().bordered_container]: !0,
                      [F().Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.createElement(
                    "div",
                    {
                      className: (0, S.default)(
                        F().bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    l.createElement(G.xP, null),
                    o,
                    l.createElement(
                      "div",
                      { className: F().bordered_corner_container },
                      Boolean(!this.state.bExpanded) &&
                        l.createElement("div", {
                          className: F().broadcast_settings_icon,
                          "data-tooltip-text": (0, x.Localize)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${v.Config.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      l.createElement("div", {
                        className: this.state.bExpanded
                          ? F().bordered_corner_expanded
                          : F().bordered_corner_shrinked,
                        "data-tooltip-text": (0, x.Localize)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.createElement(
                        "div",
                        { className: F().bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  Boolean(this.state.bExpanded) &&
                    l.createElement(
                      "div",
                      {
                        className: (0, S.default)({
                          [F().container]: !0,
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
                      Boolean(this.state.bExpanded) &&
                        l.createElement(pe, {
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
                ) && l.createElement(H, { event: a }),
                Boolean(this.state.bExpanded) &&
                  l.createElement(
                    "div",
                    { className: `${a ? F().Event : ""}` },
                    l.createElement(pe, { stream: e, bMultistream: i })
                  ),
                l.createElement("div", { className: F().clear_div })
              )
            );
          }
          return l.createElement("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, r.gn)([W.bind], de.prototype, "ToggleBroadcastExpandShrink", null),
        (0, r.gn)([W.bind], de.prototype, "OnShrinkTransitionEnd", null),
        (0, r.gn)([W.bind], de.prototype, "onStreamSelect", null),
        (0, r.gn)([W.bind], de.prototype, "PlayTopNonVOD", null),
        (de = (0, r.gn)([o.observer], de));
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
          const e = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, N.wx)(e, 7, this.props.stream.snr),
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
            { className: F().wrapper },
            l.createElement(
              L,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.createElement(
                "div",
                {
                  className: (0, S.default)({
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
          r = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(a).m_nAppID,
          n = le.list.find(
            (e) =>
              e.appid == r &&
              (!e.broadcasterAccountID || e.broadcasterAccountID == t.accountid)
          );
        if (n) {
          let e = n.url;
          return (
            (v.Config.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            l.createElement(
              "a",
              { href: e },
              (0, x.Localize)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
            )
          );
        }
        {
          const e = v.Config.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
          return l.createElement(
            O.HP,
            {
              toolTipContent: (0, x.Localize)(
                "#BroadcastWatch_View_Broadcast_Page"
              ),
            },
            l.createElement(
              "a",
              { href: e, className: F().external_link },
              l.createElement(T.ExternalLink, null)
            )
          );
        }
      }
      (0, r.gn)([W.bind], me.prototype, "CloseBroadcastPopup", null),
        (0, r.gn)([W.bind], me.prototype, "OnEnter", null),
        (0, r.gn)([W.bind], me.prototype, "OnLeave", null);
      let pe = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, N.wx)(
            t,
            "show" === N.ai.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            N.ai.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          (0, N.wx)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = "remove" != N.ai.Get().GetChatVisibility(),
            t = "hide" === N.ai.Get().GetChatVisibility(),
            a = !this.props.stream.nAppIDVOD,
            r = a;
          let n = Number.parseInt(
            "" +
              w.BroadcastWatchStore.GetOrCreateBroadcastInfo(
                this.props.stream.steamid
              ).m_nViewerCount
          );
          return l.createElement(
            "div",
            { className: (0, S.default)(F().viewer_bar, "viewer_bar") },
            l.createElement(
              "div",
              { className: (0, S.default)(F().viewer_count, "viewer_count") },
              l.createElement(T.Viewers, null),
              (0, R.AV)(n)
            ),
            l.createElement(
              "div",
              { className: (0, S.default)(F().viewer_links, "viewer_links") },
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
                    (0, x.Localize)("#sale_three_section_show_streams")
                  )
                ),
              e &&
                l.createElement(
                  "div",
                  { className: F().chat_link },
                  l.createElement(T.ChatBubble, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: F().ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    (0, x.Localize)(
                      t
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              r &&
                l.createElement(
                  "div",
                  { className: F().chat_link },
                  l.createElement(T.Share, null),
                  l.createElement(
                    "a",
                    {
                      href: "#",
                      className: F().ChatToggle,
                      onClick: (e) =>
                        (0, oe.ShowModalDialog)(
                          l.createElement(te, {
                            steamid: this.props.stream.steamid,
                          }),
                          (0, se.GetOwningWindowForEvent)(e)
                        ),
                    },
                    (0, x.Localize)("#Broadcast_ShareBroadcast")
                  )
                ),
              l.createElement(
                O.HP,
                {
                  toolTipContent: (0, x.Localize)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                l.createElement(
                  "a",
                  {
                    href:
                      v.Config.STORE_BASE_URL +
                      "account/preferences/#store_broadcast_settings",
                    target: v.Config.IN_CLIENT ? void 0 : "_blank",
                    className: F().settings_link,
                  },
                  l.createElement(T.Settings, null)
                )
              ),
              a && l.createElement(_e, Object.assign({}, this.props))
            ),
            Boolean(this.props.chatAnnouncementGivewayGID) &&
              l.createElement(ie.U, {
                gidGiveaway: this.props.chatAnnouncementGivewayGID,
                stream: this.props.stream,
              })
          );
        }
      };
      (0, r.gn)([W.bind], pe.prototype, "OnToggleChat", null),
        (0, r.gn)([W.bind], pe.prototype, "onWatchBroadcastPage", null),
        (pe = (0, r.gn)([o.observer], pe));
      class be extends l.Component {
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
            !e && l.createElement("div", { className: F().side_panels })
          );
        }
      }
      const he = (0, o.observer)((e) => {
        const { steamIDBroadcast: t } = e,
          a = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(t).m_nAppID,
          [r] = (0, _.vs)(a, {});
        return l.createElement(
          "div",
          { className: [F().PopOutVideoTitleBar, F().NoSeslect].join(" ") },
          Boolean(r)
            ? l.createElement(
                h._,
                { type: "app", id: a, className: F().PopOutVideoTitleText },
                (0, x.Localize)("#StoreBroadcast_Detault_popout_Title")
              )
            : l.createElement(
                "div",
                { className: F().PopOutVideoTitleText },
                (0, x.Localize)("#StoreBroadcast_Detault_popout_Title")
              ),
          l.createElement(
            "button",
            {
              className: F().PopOutVideoCloseButton,
              "data-tooltip-text": (0, x.Localize)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            l.createElement(T.X, null)
          )
        );
      });
      function ue(e, t) {
        var a;
        const r = w.BroadcastWatchStore.GetOrCreateBroadcastInfo(
            t.steamid
          ).m_nAppID,
          n = I.Z.Get().GetApp(r);
        return e &&
          (null === (a = null == n ? void 0 : n.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(F().strStreamIconCapsuleArtHeight)
          : parseInt(F().strStreamIconScreenshotArtHeight);
      }
      function ge(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: r,
            bShowCapsuleArt: n,
            broadcastEmbedContext: s,
          } = e,
          o = (0, l.useRef)(),
          i = (0, l.useMemo)(() => {
            const e = N.ai
              .Get()
              .GetStreams(s)
              .filter((e) => !r || r(e));
            return (0, N.rg)(e), e;
          }, [s, r]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map(
                  (e) =>
                    w.BroadcastWatchStore.GetOrCreateBroadcastInfo(e.steamid)
                      .m_nAppID
                )
                .filter(Boolean);
              I.Z.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += ue(n, a);
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
              className: (0, S.default)({
                [F().side_panels]: !0,
                side_panels: !0,
                [F().multistream]: !0,
                [F().scrollingstreams]: i.length > 3,
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
            () =>
              w.BroadcastWatchStore.GetOrCreateBroadcastInfo(n.steamid).m_nAppID
          ),
          [c] = (0, _.vs)(null !== (t = n.nAppIDVOD) && void 0 !== t ? t : o, {
            include_assets: !0,
          });
        if (!(0, N.A$)(n)) return null;
        const d = s && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + n.viewer_count),
          p = !Number.isNaN(m),
          b = !!n.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.createElement(
          "div",
          {
            className: (0, S.default)({
              [F().stream_icon_and_viewer_container]: !0,
              [F().stream_featured]:
                n.current_selection_priority == N.VA.k_eFeatured,
              [F().display_capsule_art]: Boolean(d),
            }),
          },
          l.createElement(
            h.W,
            { type: "app", id: o },
            l.createElement(
              D.Y,
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
              r && l.createElement("div", { className: F().stream_icon_arrow })
            )
          ),
          l.createElement(
            "div",
            {
              className: (0, S.default)(F().viewer_count, !p && F().vod_title),
            },
            p
              ? l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(T.Viewers, null),
                  " ",
                  (0, R.AV)(m)
                )
              : b
          )
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
              className: (0, S.default)(n, F().stream_icon_hide_on_hover),
              src: t,
            }),
            l.createElement(A.J, {
              className: (0, S.default)(n, F().stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return l.createElement("img", { className: n, src: a });
      }
      function Ee(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          [n, s] = (0, i.SZ)(() => {
            var e;
            return [
              w.BroadcastWatchStore.GetBroadcast(t.steamid),
              null === (e = w.BroadcastWatchStore.GetBroadcast(t.steamid)) ||
              void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, i.SZ)(() => t.steamid);
        return n
          ? l.createElement(
              "div",
              {
                className: (0, S.default)({
                  [F().chat_below_container]: r,
                  [F().chat_rightside_container]: !r,
                  [F().store_chat_ctn]: !0,
                }),
              },
              l.createElement(
                "div",
                { className: F().ChatContainer },
                l.createElement(c.BroadcastChat, {
                  emoticonStore: N.D$,
                  watchLocation: 6,
                  steamID: o,
                  broadcastID: s,
                })
              )
            )
          : null;
      }
    },
    79927: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => S });
      var r = a(70655),
        n = a(67294),
        s = a(90437),
        o = (a(27427), a(29323)),
        i = a(22188),
        l = a(81761),
        c = a(92312),
        d = a(41353),
        m = a(48287),
        _ = (a(70839), a(17257)),
        p = a(95379),
        b = a.n(p),
        h = (a(43074), a(4687)),
        u = a(51878);
      let g = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_playerRef = n.createRef()),
            (this.m_hRegisterForGameActionStart = null),
            (this.m_hRegisterForGameActionStart =
              SteamClient.Apps.RegisterForGameActionStart(
                this.onGameActionStart
              )),
            SteamClient.Apps.GetGameActionForApp(
              this.props.overview.GetGameID(),
              this.onGameActionStart
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
            `steam://openurl_external/${_.de.GetCommunityURL()}broadcast/watch/` +
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
              { className: b().BroadcastBox },
              !a &&
                n.createElement(v, {
                  img: e.strThumbnailURL,
                  onClick: this.OnClickPlay,
                }),
              a &&
                n.createElement(
                  "div",
                  { className: b().BroadcastPlayer },
                  n.createElement(h.default, {
                    ref: this.m_playerRef,
                    steamIDBroadcast: t.ConvertTo64BitString(),
                    watchLocation: 6,
                    onTheaterMode: this.props.onTheaterMode,
                    bStartMuted: !1,
                    bStartPaused: !1,
                    classes: r,
                  })
                ),
              !this.props.isTheaterMode &&
                n.createElement(
                  "a",
                  {
                    href: this.GetBroadcastURL(t.ConvertTo64BitString()),
                    className: b().ViewBroadcastOnWeb,
                  },
                  (0, c.Localize)("#AppDetails_Broadcast_ViewOnWeb")
                )
            )
          );
        }
      };
      (0, r.gn)([m.bind], g.prototype, "onGameActionStart", null),
        (0, r.gn)([m.bind], g.prototype, "GetBroadcastURL", null),
        (0, r.gn)([m.bind], g.prototype, "OnClickPlay", null),
        (g = (0, r.gn)([o.observer], g));
      const S = g;
      function v(e) {
        let t = (0, u.default)(
          "BroadcastVideoUserInputNeeded",
          b().PlayButtonWrapper
        );
        return n.createElement(
          "div",
          { className: b().BroadcastThumbnail, onClick: e.onClick },
          n.createElement("img", { src: e.img }),
          n.createElement(
            "div",
            { className: t },
            n.createElement(s.Play, null),
            n.createElement(
              "span",
              null,
              (0, c.Localize)("#DASHPlayerControls_ClickToPlay")
            )
          )
        );
      }
    },
  },
]);
//# sourceMappingURL=sourcemaps\broadcast.js.map

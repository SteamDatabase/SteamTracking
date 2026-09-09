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
    45476: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, {
          BroadcastEmbeddablePopoutHeader: () => Ce,
          default: () => je,
        });
      var a = s(34629),
        n = s(7850),
        r = s(41735),
        i = s.n(r),
        o = s(75844),
        c = s(65946),
        l = s(90626),
        d = s(39606),
        p = s(67397),
        m = s(55963),
        h = s(30570),
        u = s(55263),
        A = s(18654),
        _ = s(94095),
        j = s(20433),
        N = s(60014),
        g = s(22797),
        S = s(52038),
        x = s(78327),
        b = s(43087),
        C = s.n(b),
        I = s(14987),
        w = s(39777),
        D = s(71420),
        M = s(42834),
        v = s(5309);
      const y = (0, o.PA)((e) => {
        const { appid: t } = e,
          s = (0, N.n9)(),
          a = (0, l.useRef)({ include_assets: !0, include_release: !0 }),
          r = (0, I.$5)(t),
          { data: i } = (0, w.J$)(r),
          { data: o } = (0, w.lv)(r),
          { data: c } = (0, w.by)(r),
          [d, p] = (0, u.t7)(t, a.current);
        let b = (0, S.A)(
            C().StoreSaleWidgetContainer_mini,
            "StoreSaleWidgetContainer_mini",
          ),
          y = C().StoreSaleWidgetImage_mini,
          T = C().StoreSaleImage_mini;
        if (null == i)
          return (0, n.jsx)("div", {
            className: b,
            children: (0, n.jsx)(g.t, { size: "medium" }),
          });
        if (null == i || !i.name)
          return (0, n.jsx)("div", {
            className: A.StoreSaleWidgetEmptyContainer,
          });
        const B = i.type != h.uE.gQ,
          E = (0, m.wJ)((0, D._)(i), s);
        return (0, n.jsxs)("div", {
          className: b,
          children: [
            (0, n.jsx)("a", {
              href: E,
              target: x.TS.IN_CLIENT ? void 0 : "_blank",
              children: (0, n.jsx)(j.j, {
                id: r,
                children: (0, n.jsx)("div", {
                  className: y,
                  children:
                    o &&
                    (0, n.jsx)("img", {
                      className: T,
                      src: (0, M.b0)(o, "small_capsule"),
                      alt: i.name,
                    }),
                }),
              }),
            }),
            (0, n.jsxs)("div", {
              className: A.StoreSaleBroadcastWidgetRight,
              children: [
                (0, n.jsx)("a", {
                  href: E,
                  target: x.TS.IN_CLIENT ? void 0 : "_blank",
                  children: (0, n.jsx)(j.j, {
                    id: r,
                    children: (0, n.jsx)("div", {
                      className: (0, S.A)(
                        A.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle",
                      ),
                      children: i.name,
                    }),
                  }),
                }),
                c &&
                  (0, n.jsx)("div", {
                    className: A.StoreSaleWidgetRelease,
                    children: (0, v.CC)(c),
                  }),
                Boolean(B) && (0, n.jsx)(_.w, { id: r, bShowDemoButton: !0 }),
              ],
            }),
          ],
        });
      });
      var T = s(22837);
      function B() {
        let e = window.GetUsabilityTracker;
        if (e) return e();
      }
      var E = s(55815),
        L = s(45285),
        f = s(39302),
        U = s(60727),
        P = s(54728),
        k = s(34010),
        G = s(16021),
        O = s(94011),
        z = s(26296),
        R = s(96236),
        V = s(12155),
        F = s(32754),
        W = s(61859),
        H = s(82227),
        Q = s(73745),
        J = s(17720),
        Y = s(67165),
        Z = s(53120),
        X = s.n(Z);
      const K = (0, o.PA)((e) => {
        const { event: t } = e,
          s = t.clanSteamID.GetAccountID(),
          a = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          r = (0, l.useRef)(null),
          [o, c] = (0, l.useState)(
            t ? Y.pF.GetCreatorHome(t.clanSteamID) : null,
          );
        if (
          ((0, l.useEffect)(() => {
            const e = i().CancelToken.source();
            r.current = e.cancel;
            return (
              (async () => {
                const t = J.b.InitFromClanID(s),
                  a = await Y.pF.LoadCreatorHome(t, !1, e);
                e.token.reason || c(a);
              })(),
              () => {
                r.current && r.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [s]),
          a || !o || !o.BIsLoaded())
        )
          return null;
        const d =
          x.TS.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return (0, n.jsx)("div", {
          className: X().item_drop_ctn,
          children: (0, n.jsxs)("div", {
            children: [
              (0, W.we)(
                o.GetName().length > 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                    ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                    : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                    ? "#SalePage_WatchForDrop_Hours_Developer"
                    : "#SalePage_WatchForDrop_Minutes_Developer",
                t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
                o.GetName(),
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                (0, n.jsx)("a", {
                  href: d,
                  target: x.TS.IN_CLIENT ? "" : "_blank",
                  children: (0, W.we)("#SalePage_WatchForDrop_LearnMore"),
                }),
            ],
          }),
        });
      });
      var q = s(95695),
        $ = s.n(q),
        ee = s(96715),
        te = s(10886),
        se = s(19654),
        ae = s(3209),
        ne = s(9154),
        re = s(51272),
        ie = s(14256),
        oe = s.n(ie);
      function ce(e) {
        const { steamid: t, closeModal: s } = e;
        return (0, n.jsxs)(ne.o0, {
          strDescription: "",
          strTitle: (0, W.we)("#Button_Share"),
          onCancel: s,
          onOK: s,
          bAlertDialog: !0,
          modalClassName: "EventDisplay_Share_Dialog",
          children: [
            (0, n.jsx)(le, { steamid: t }),
            (0, n.jsx)(de, { steamid: t }),
          ],
        });
      }
      function le(e) {
        const { steamid: t } = e,
          s = (function (e) {
            const t = x.TS.COMMUNITY_BASE_URL + "broadcast/share/" + e;
            return {
              strFacebookUrl: t + "?site=facebook&t=" + Math.random(),
              strTwitterUrl: t + "?site=twitter",
              strRedditUrl: t + "?site=reddit",
            };
          })(t);
        return (0, n.jsxs)("div", {
          className: (0, S.A)($().FlexRowContainer, oe().share_controls_ctn),
          children: [
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)("#EventDisplay_Share_OnFaceBook"),
              children: (0, n.jsx)(re.uU, {
                href: s.strFacebookUrl,
                className: oe().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, S.A)($().Button),
                  src: te.A,
                }),
              }),
            }),
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)("#EventDisplay_Share_OnTwitter"),
              children: (0, n.jsx)(re.uU, {
                href: s.strTwitterUrl,
                className: oe().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, S.A)($().Button),
                  src: ae.A,
                }),
              }),
            }),
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)("#EventDisplay_Share_OnReddit"),
              children: (0, n.jsx)(re.uU, {
                href: s.strRedditUrl,
                className: oe().ShareBtn,
                children: (0, n.jsx)("img", {
                  className: (0, S.A)($().Button),
                  src: se.A,
                }),
              }),
            }),
          ],
        });
      }
      function de(e) {
        const { steamid: t } = e,
          s = l.createRef(),
          [a, r] = l.useState(""),
          i = l.createRef(),
          o = l.useCallback(
            (e) => {
              s.current &&
                s.current.ownerDocument.defaultView.navigator.clipboard
                  .writeText(s.current.value)
                  .then((e) => {
                    r((0, W.we)("#EventDisplay_Share_CopiedToClipboard"));
                  })
                  .catch((e) => {
                    r((0, W.we)("#EventDisplay_Share_FailedToCopyToClipboard")),
                      console.error("Failed to copy link to clipboard:", e);
                  });
            },
            [s],
          ),
          c = x.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + t;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: (0, S.A)($().FlexRowContainer, oe().linkField),
              onClick: o,
              children: [
                (0, n.jsx)("span", {
                  className: oe().LinkInputLabel,
                  children: (0, W.we)("#EventDisplay_Share_Link"),
                }),
                (0, n.jsx)("textarea", {
                  className: oe().LinkInput,
                  ref: s,
                  value: c,
                  readOnly: !0,
                }),
                Boolean(document.queryCommandSupported("copy")) &&
                  (0, n.jsx)(F.he, {
                    toolTipContent: (0, W.we)("#ToolTip_CopyLinkToClipboard"),
                    children: (0, n.jsx)("div", {
                      className: (0, S.A)(
                        $().Button,
                        $().Icon,
                        oe().LinkButton,
                      ),
                      children: (0, n.jsx)("img", {
                        className: oe().ClipboardIcon,
                        src: ee.A,
                      }),
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              ref: i,
              className: oe().ClipboardText,
              children: a,
            }),
          ],
        });
      }
      var pe = s(56011),
        me = s(738),
        he = s(29268),
        ue = s(23338),
        Ae = s(75515);
      const _e = {
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
      function je(e) {
        return (function () {
          const e = (0, x.Qn)();
          return !(0, x.Y2)() && !e;
        })()
          ? (0, n.jsx)(Ne, { ...e })
          : null;
      }
      let Ne = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = i().CancelToken.source()),
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
          await k.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
            this.m_cancelSignal.token.reason ||
              this.setState({
                bLoadingPreference: !1,
                bExpanded: !k.j
                  .Get()
                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                innerStyle: {
                  ...this.state.innerStyle,
                  maxHeight: k.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                    ? "0vh"
                    : "100vh",
                },
              }),
            await (this.props.bIsPreview &&
            this.props.accountIDs &&
            !this.props.event.BUsesContentHubForItemSource()
              ? k.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
              : k.j.Get().HintLoadEmbeddableStreams(this.props)),
            this.props.nAppIDVOD &&
              k.j
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
          let e = k.j.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            s = P.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          (0, k.U7)(s, t ? L.Mc.U6 : L.Mc.B_, e.snr),
            t && B() && B().AddEvent(f.Xm.d),
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
                k.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              k.j.Get().SetEmbeddedStreamCollapsed(!0),
            );
        }
        async onStreamSelect(e) {
          this.setState({ bStartMuted: !1 }),
            k.j.Get().GetPlayReadyStream(this.props).accountid != e.accountid &&
              (await k.j.Get().AttemptToPlayStream(this.props, e));
        }
        async PlayNextNonVOD() {
          this.setState({ bStartMuted: !1 });
          const e = k.j
            .Get()
            .GetStreams(this.props)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
          await k.j.Get().PlayFromAvailableStreams(this.props, e, !0);
        }
        ConstructSidePanels(e, t) {
          let s = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return s;
          const a = k.j.Get().GetConcurrentStreams(this.props) > 1;
          let r = P.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            i = (0, n.jsx)(be, { ImgUrl: e.right_panel }, "right" + r),
            o = (0, n.jsx)(be, { ImgUrl: e.left_panel }, "left" + r);
          if (r < 11) {
            const t = U.l.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((i = (0, n.jsx)(y, { appid: r }, "mini" + e.accountid)),
              (s.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((s.leftPanel = (0, n.jsx)(
                  we,
                  {
                    broadcastEmbedContext: this.props,
                    curStream: e,
                    onStreamSelect: this.onStreamSelect,
                    fnFilterStreams: this.props.fnFilterStreams,
                    bShowCapsuleArt: this.props.bShowCapsuleArt,
                  },
                  "selector" + r,
                )),
                (s.rightPanel = i))
              : t
                ? ((s.leftPanel = (0, n.jsx)("div", {})),
                  (s.rightPanel = (0, n.jsx)(ve, {
                    stream: e,
                    orientation: "rightside",
                  })),
                  (s.bRightPanelArtworkOrEmpty = !1))
                : ((s.leftPanel = o), (s.rightPanel = i)),
            s
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0), B() && B().AddEvent(f.Xm.ex));
        }
        render() {
          if (this.state.bLoadingPreference) return null;
          let e = k.j.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === k.j.Get().GetChatVisibility();
            const {
              event: s,
              language: a,
              fnRenderBroadcastContext: r,
            } = this.props;
            s &&
              (e = {
                ...e,
                left_panel: s.GetImageURL(
                  "broadcast_left",
                  a || (0, T.sfN)(x.TS.LANGUAGE),
                ),
                right_panel: s.GetImageURL(
                  "broadcast_right",
                  a || (0, T.sfN)(x.TS.LANGUAGE),
                ),
                store_title: s.GetBroadcastTitle(
                  a || (0, T.sfN)(x.TS.LANGUAGE),
                ),
                broadcast_chat_visibility: s.GetBroadcastChatVisibility(),
              });
            let i = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              c = k.j.Get().GetConcurrentStreams(this.props) > 1;
            const d = () => {
              var t, s;
              e.nAppIDVOD && this.PlayNextNonVOD(),
                null === (s = (t = this.props).fnOnVideoEnd) ||
                  void 0 === s ||
                  s.call(t);
            };
            return (0, n.jsx)(l.Fragment, {
              children: (0, n.jsxs)("div", {
                className: "broadcast_embed_top_ctn_trgt",
                style: this.state.style,
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, S.A)({
                      [X().bordered_container]: !0,
                      [X().Event]: Boolean(s),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, S.A)(
                          X().bordered_title,
                          "bordered_title_trgt",
                        ),
                        children: [
                          (0, n.jsx)(O.K, {}),
                          (0, n.jsx)("div", {
                            className: X().streamTitle,
                            children: o,
                          }),
                          (0, n.jsxs)("div", {
                            className: X().bordered_corner_container,
                            children: [
                              Boolean(!this.state.bExpanded) &&
                                (0, n.jsx)(F.he, {
                                  toolTipContent: (0, W.we)(
                                    "#StoreBroadcast_Change_store_Broadcast_settings",
                                  ),
                                  children: (0, n.jsx)("div", {
                                    className: X().broadcast_settings_icon,
                                    onClick: () =>
                                      window.open(
                                        `${x.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                      ),
                                  }),
                                }),
                              (0, n.jsx)(F.he, {
                                toolTipContent: (0, W.we)(
                                  "#StoreBroadcast_Hide_Tooltip",
                                ),
                                children: (0, n.jsx)("div", {
                                  className: this.state.bExpanded
                                    ? X().bordered_corner_expanded
                                    : X().bordered_corner_shrinked,
                                  onClick: this.ToggleBroadcastExpandShrink,
                                }),
                              }),
                            ],
                          }),
                          Boolean(e.gamedata_subtitle) &&
                            (0, n.jsx)("div", {
                              className: X().bordered_subtitle,
                              children: e.gamedata_subtitle,
                            }),
                        ],
                      }),
                      Boolean(this.state.bExpanded) &&
                        (0, n.jsxs)("div", {
                          className: (0, S.A)({
                            [X().container]: !0,
                            embeddable_ctn_trgt: !0,
                            multistream: c,
                            broadcast_right_panel_simple:
                              i.bRightPanelArtworkOrEmpty,
                            broadcast_chat_expanded: t,
                          }),
                          style: { ...this.state.innerStyle },
                          onTransitionEnd: this.OnShrinkTransitionEnd,
                          children: [
                            (0, n.jsx)("div", {
                              className: X().LeftPanelCtn,
                              children: i.leftPanel,
                            }),
                            (0, n.jsx)(ge, {
                              stream: e,
                              bStartMuted: this.state.bStartMuted,
                              fnRenderBroadcastContext: r,
                              fnOnVideoEnd: d,
                              bWidePlayer: this.props.bWidePlayer,
                            }),
                            (0, n.jsx)("div", {
                              className: X().RightPanelCtn,
                              children: i.rightPanel,
                            }),
                            Boolean(this.state.bExpanded) &&
                              (0, n.jsx)(xe, {
                                stream: e,
                                bMultistream: c,
                                chatAnnouncementGivewayGID: i.rightPanel
                                  ? void 0
                                  : this.props.chat_announcement_giveaway,
                              }),
                          ],
                        }),
                    ],
                  }),
                  Boolean(
                    s && s.jsondata && s.jsondata.broadcast_item_drops_enabled,
                  ) && (0, n.jsx)(K, { event: s }),
                  (0, n.jsx)("div", { className: X().clear_div }),
                ],
              }),
            });
          }
          return (0, n.jsx)("div", { className: "NoBroadcastAvailable" });
        }
      };
      (0, a.Cg)([Q.oI], Ne.prototype, "ToggleBroadcastExpandShrink", null),
        (0, a.Cg)([Q.oI], Ne.prototype, "OnShrinkTransitionEnd", null),
        (0, a.Cg)([Q.oI], Ne.prototype, "onStreamSelect", null),
        (0, a.Cg)([Q.oI], Ne.prototype, "PlayNextNonVOD", null),
        (Ne = (0, a.Cg)([o.PA], Ne));
      class ge extends l.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = P.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.U7)(e, L.Mc.n6, this.props.stream.snr),
            B() && B().AddEvent(f.Xm.ok),
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
          return (0, n.jsx)("div", {
            className: X().wrapper,
            children: (0, n.jsx)(ue.j, {
              onEnter: this.OnEnter,
              onLeave: this.OnLeave,
              onIntersectionChange: (e) => {
                e.isIntersecting || this.OnLeave();
              },
              className: (0, S.A)({
                [X().video_placeholder]: !0,
                video_placeholder_trgt: !0,
                [X().WidePlayer]: this.props.bWidePlayer,
              }),
              ref: this.m_iVideoContainerRef,
              children: (0, n.jsxs)("div", {
                className: this.state.bPopout
                  ? X().broadcast_floating
                  : X().video_container,
                children: [
                  this.state.bPopout &&
                    (0, n.jsx)(Ce, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  (0, n.jsx)("div", {
                    className: X().BroadcastPlayerContainer,
                    children: (0, n.jsx)(p.default, {
                      steamIDBroadcast: this.props.stream.steamid,
                      watchLocation: E.nn.fe,
                      bStartMuted: this.props.bStartMuted,
                      fnRenderBroadcastContext:
                        this.props.fnRenderBroadcastContext,
                      fnOnVideoEnd: this.props.fnOnVideoEnd,
                      nAppIDVOD: this.props.stream.nAppIDVOD,
                    }),
                  }),
                ],
              }),
            }),
          });
        }
      }
      function Se(e) {
        const { stream: t } = e,
          [s] = (0, c.q3)(() => [t.steamid]),
          a = P.es.GetOrCreateBroadcastInfo(s).m_nAppID,
          r = _e.list.find(
            (e) =>
              e.appid == a &&
              (!e.broadcasterAccountID ||
                e.broadcasterAccountID == t.accountid),
          );
        if (r) {
          let e = r.url;
          return (
            (x.TS.IN_CLIENT ||
              navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
              navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
              (e = "steam://openurl/" + e),
            (0, n.jsx)("a", {
              href: e,
              children: (0, W.we)("#Broadcast_Embed_Watch_With_Frieds_SteamTV"),
            })
          );
        }
        {
          const e = x.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + s;
          return (0, n.jsx)(F.he, {
            toolTipContent: (0, W.we)("#BroadcastWatch_View_Broadcast_Page"),
            children: (0, n.jsx)("a", {
              href: e,
              className: X().external_link,
              children: (0, n.jsx)(V.GrD, {}),
            }),
          });
        }
      }
      (0, a.Cg)([Q.oI], ge.prototype, "CloseBroadcastPopup", null),
        (0, a.Cg)([Q.oI], ge.prototype, "OnEnter", null),
        (0, a.Cg)([Q.oI], ge.prototype, "OnLeave", null);
      let xe = class extends l.Component {
        OnToggleChat(e) {
          e.preventDefault();
          const t = P.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.U7)(
            t,
            "show" === k.j.Get().GetChatVisibility() ? L.Mc.kz : L.Mc.bW,
            this.props.stream.snr,
          ),
            k.j.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = P.es.GetOrCreateBroadcastInfo(
            this.props.stream.steamid,
          ).m_nAppID;
          (0, k.U7)(e, L.Mc.Is, this.props.stream.snr);
        }
        render() {
          const e = "remove" != k.j.Get().GetChatVisibility(),
            t = "hide" === k.j.Get().GetChatVisibility(),
            s = !this.props.stream.nAppIDVOD,
            a = s;
          let r = Number.parseInt(
            "" +
              P.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount,
          );
          return (0, n.jsxs)("div", {
            className: (0, S.A)(X().viewer_bar, "viewer_bar"),
            children: [
              (0, n.jsxs)("div", {
                className: (0, S.A)(X().viewer_count, "viewer_count"),
                children: [(0, n.jsx)(V.y_e, {}), (0, H.Dq)(r)],
              }),
              (0, n.jsxs)("div", {
                className: (0, S.A)(X().viewer_links, "viewer_links"),
                children: [
                  Boolean(e && !t && this.props.bMultistream) &&
                    (0, n.jsx)("div", {
                      className: X().chat_link,
                      children: (0, n.jsx)("a", {
                        href: "#",
                        className: X().ChatToggle,
                        onClick: this.OnToggleChat,
                        children: (0, W.we)("#sale_three_section_show_streams"),
                      }),
                    }),
                  e &&
                    (0, n.jsxs)("div", {
                      className: X().chat_link,
                      children: [
                        (0, n.jsx)(V.ROZ, {}),
                        (0, n.jsx)("a", {
                          href: "#",
                          className: X().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, W.we)(
                            t
                              ? "#sale_three_section_show_chat"
                              : "#sale_three_section_hide_chat",
                          ),
                        }),
                      ],
                    }),
                  a &&
                    (0, n.jsxs)("div", {
                      className: X().chat_link,
                      children: [
                        (0, n.jsx)(V.SYj, {}),
                        (0, n.jsx)("a", {
                          href: "#",
                          className: X().ChatToggle,
                          onClick: (e) =>
                            (0, me.pg)(
                              (0, n.jsx)(ce, {
                                steamid: this.props.stream.steamid,
                              }),
                              (0, pe.uX)(e),
                            ),
                          children: (0, W.we)("#Broadcast_ShareBroadcast"),
                        }),
                      ],
                    }),
                  (0, n.jsx)(F.he, {
                    toolTipContent: (0, W.we)(
                      "#StoreBroadcast_Change_store_Broadcast_settings",
                    ),
                    children: (0, n.jsx)("a", {
                      href:
                        x.TS.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: x.TS.IN_CLIENT ? void 0 : "_blank",
                      className: X().settings_link,
                      children: (0, n.jsx)(V.wB_, {}),
                    }),
                  }),
                  s && (0, n.jsx)(Se, { ...this.props }),
                ],
              }),
              Boolean(this.props.chatAnnouncementGivewayGID) &&
                (0, n.jsx)(he.V, {
                  gidGiveaway: this.props.chatAnnouncementGivewayGID,
                  stream: this.props.stream,
                }),
            ],
          });
        }
      };
      (0, a.Cg)([Q.oI], xe.prototype, "OnToggleChat", null),
        (0, a.Cg)([Q.oI], xe.prototype, "onWatchBroadcastPage", null),
        (xe = (0, a.Cg)([o.PA], xe));
      class be extends l.Component {
        render() {
          let e = this.props.ImgUrl;
          return (0, n.jsxs)("div", {
            className: X().SidePanelBackground,
            children: [
              e &&
                (0, n.jsx)("img", {
                  className: X().side_panels,
                  src: this.props.ImgUrl,
                }),
              !e && (0, n.jsx)("div", { className: X().side_panels }),
            ],
          });
        }
      }
      const Ce = (0, o.PA)((e) => {
        const { steamIDBroadcast: t } = e;
        let s = P.es.GetOrCreateBroadcastInfo(t).m_nAppID;
        s = s != P.fO ? s : 0;
        const a = (0, I.$5)(s),
          { data: r } = (0, w.J$)(a);
        return (0, n.jsxs)("div", {
          className: [X().PopOutVideoTitleBar, X().NoSeslect].join(" "),
          children: [
            Boolean(r)
              ? (0, n.jsx)(j.u, {
                  id: a,
                  className: X().PopOutVideoTitleText,
                  children: (0, W.we)("#StoreBroadcast_Detault_popout_Title"),
                })
              : (0, n.jsx)("div", {
                  className: X().PopOutVideoTitleText,
                  children: (0, W.we)("#StoreBroadcast_Detault_popout_Title"),
                }),
            (0, n.jsx)(F.he, {
              toolTipContent: (0, W.we)(
                "#StoreBroadcast_close_broadcast_popup",
              ),
              children: (0, n.jsx)("button", {
                className: X().PopOutVideoCloseButton,
                onClick: e.OnPreventPopup,
                children: (0, n.jsx)(V.X, {}),
              }),
            }),
          ],
        });
      });
      function Ie(e, t) {
        var s;
        const a = P.es.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          n = G.A.Get().GetApp(a);
        return e &&
          (null === (s = null == n ? void 0 : n.GetAssets()) || void 0 === s
            ? void 0
            : s.GetHeaderURL())
          ? parseInt(X().strStreamIconCapsuleArtHeight)
          : parseInt(X().strStreamIconScreenshotArtHeight);
      }
      function we(e) {
        const {
            curStream: t,
            onStreamSelect: s,
            fnFilterStreams: a,
            bShowCapsuleArt: r,
            broadcastEmbedContext: i,
          } = e,
          o = (0, l.useRef)(void 0),
          c = (0, l.useMemo)(() => {
            const e = k.j
              .Get()
              .GetStreams(i)
              .filter((e) => !a || a(e));
            return (0, k.MU)(e), e;
          }, [i, a]);
        return (
          (0, l.useEffect)(() => {
            if (o && o.current) {
              const e = c
                .map((e) => P.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              G.A.Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const s of c) {
                      if (t.accountid == s.accountid) break;
                      e += Ie(r, s);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [c, r, t.accountid, o]),
          (0, n.jsx)("div", {
            ref: o,
            className: (0, S.A)({
              [X().side_panels]: !0,
              side_panels: !0,
              [X().multistream]: !0,
              [X().scrollingstreams]: c.length > 3,
            }),
            children: (0, n.jsx)("div", {
              className: X().MultiStreamCtn,
              children: c.map((e) => {
                var a;
                return (0, n.jsx)(
                  De,
                  {
                    stream: e,
                    bSelected: t.accountid == e.accountid,
                    onStreamSelect: s,
                    bShowCapsuleArt: r,
                  },
                  null !== (a = e.accountid) && void 0 !== a ? a : e.steamid,
                );
              }),
            }),
          })
        );
      }
      function De(e) {
        const {
          onStreamSelect: t,
          bSelected: s,
          stream: a,
          bShowCapsuleArt: r,
        } = e;
        let i = (0, c.q3)(
          () => P.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID,
        );
        i = i != P.fO ? i : 0;
        const o = (0, I.$5)(i),
          { data: l } = (0, w.J$)(o),
          { data: d } = (0, w.lv)(o);
        if (!(0, k.fn)(a)) return null;
        const p = r && d && (0, M.b0)(d, "header"),
          m = Number.parseInt("" + a.viewer_count),
          h = !Number.isNaN(m),
          u = !!a.nAppIDVOD && (null == l ? void 0 : l.name);
        return (0, n.jsxs)("div", {
          className: (0, S.A)({
            [X().stream_icon_and_viewer_container]: !0,
            [X().stream_featured]:
              a.current_selection_priority == Ae.mY.k_eFeatured,
            [X().display_capsule_art]: Boolean(p),
          }),
          children: [
            (0, n.jsx)(j.j, {
              id: o,
              hoverClassName: X().StreamCapsule,
              children: (0, n.jsx)(R.K, {
                className: (0, S.A)(
                  X().stream_icon_container,
                  s && X().stream_selected,
                ),
                onClick: () => t && t(a),
                rootMargin: "100px 0px 100px 0px",
                children: (0, n.jsx)(Me, {
                  strThumbnail: a.thumbnail_http_address,
                  bSelected: s,
                  strCapsuleArtURL: p,
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className: (0, S.A)(X().viewer_count, !h && X().vod_title),
              children: h
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(V.y_e, {}),
                      (0, n.jsx)("div", {
                        className: X().ViewerNum,
                        children: (0, H.Dq)(m),
                      }),
                    ],
                  })
                : u,
            }),
          ],
        });
      }
      function Me(e) {
        const { strCapsuleArtURL: t, strThumbnail: s, bSelected: a } = e,
          r = a ? X().stream_icon_selected : X().stream_icon;
        if (t) {
          const e = [t];
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("img", {
                className: (0, S.A)(r, X().stream_icon_hide_on_hover),
                src: t,
              }),
              (0, n.jsx)(z.o, {
                className: (0, S.A)(r, X().stream_icon_show_on_hover),
                srcs: e,
              }),
            ],
          });
        }
        return (0, n.jsx)("img", { className: r, src: s });
      }
      function ve(e) {
        const { stream: t, orientation: s } = e,
          a = "below" == s,
          [r, i] = (0, c.q3)(() => {
            var e;
            return [
              P.es.GetBroadcast(t.steamid),
              null === (e = P.es.GetBroadcast(t.steamid)) || void 0 === e
                ? void 0
                : e.m_ulBroadcastID,
            ];
          }),
          o = (0, c.q3)(() => t.steamid);
        return r
          ? (0, n.jsx)("div", {
              className: (0, S.A)({
                [X().chat_below_container]: a,
                [X().chat_rightside_container]: !a,
                [X().store_chat_ctn]: !0,
              }),
              children: (0, n.jsx)("div", {
                className: X().ChatContainer,
                children: (0, n.jsx)(d.I, {
                  emoticonStore: k.MX,
                  watchLocation: E.nn.fe,
                  steamID: o,
                  broadcastID: i,
                }),
              }),
            })
          : null;
      }
    },
    96715: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        s.p +
        "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
    59913: (e, t, s) => {
      "use strict";
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      s.d(t, { A: () => a });
    },
  },
]);

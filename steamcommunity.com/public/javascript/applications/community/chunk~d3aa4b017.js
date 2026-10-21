/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [99517],
    {
      54089: (L, C, s) => {
        "use strict";
        s.r(C),
          s.d(C, {
            BroadcastEmbeddablePopoutHeader: () => q,
            default: () => Wt,
          });
        var t = s(7850),
          O = s(41735),
          Y = s.n(O),
          w = s(75844),
          U = s(65946),
          v = s(90626),
          et = s(9398),
          st = s(23240),
          at = s(83482),
          rt = s(3367),
          nt = s(84676),
          G = s(76532),
          z = s(95414),
          ot = s(4705),
          it = s(72865),
          lt = s(85599),
          h = s(36707),
          j = s(3166),
          dt = s(43087),
          W = s.n(dt),
          V = s(29522),
          T = s(40358),
          ct = s(47875),
          _ = s(21721),
          mt = s(3348);
        const ht = (0, w.PA)((a) => {
          const { appid: e } = a,
            r = (0, it.n9)(),
            l = (0, v.useRef)({ include_assets: !0, include_release: !0 }),
            i = (0, V.$5)(e),
            { data: o } = (0, T.J$)(i),
            { data: d } = (0, T.lv)(i),
            { data: p } = (0, T.by)(i),
            [m, S] = (0, nt.t7)(e, l.current);
          let f = (0, h.A)(
              W().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            E = W().StoreSaleWidgetImage_mini,
            P = W().StoreSaleImage_mini;
          if (o == null)
            return (0, t.jsx)("div", {
              className: f,
              children: (0, t.jsx)(lt.t, { size: "medium" }),
            });
          if (o == null || !o.name)
            return (0, t.jsx)("div", {
              className: G.StoreSaleWidgetEmptyContainer,
            });
          const _t = o.type != rt.uE.gQ,
            tt = (0, at.wJ)((0, ct._)(o), r);
          return (0, t.jsxs)("div", {
            className: f,
            children: [
              (0, t.jsx)("a", {
                href: tt,
                target: j.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, t.jsx)(z.j, {
                  id: i,
                  children: (0, t.jsx)("div", {
                    className: E,
                    children:
                      d &&
                      (0, t.jsx)("img", {
                        className: P,
                        src: (0, _.b0)(d, "small_capsule"),
                        alt: o.name,
                      }),
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: G.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, t.jsx)("a", {
                    href: tt,
                    target: j.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, t.jsx)(z.j, {
                      id: i,
                      children: (0, t.jsx)("div", {
                        className: (0, h.A)(
                          G.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: o.name,
                      }),
                    }),
                  }),
                  p &&
                    (0, t.jsx)("div", {
                      className: G.StoreSaleWidgetRelease,
                      children: (0, mt.CC)(p),
                    }),
                  !!_t && (0, t.jsx)(ot.w, { id: i, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        var H = s(99412);
        function k() {
          let a = window.GetUsabilityTracker;
          if (a) return a();
        }
        var Z = s(90711),
          A = s(61639),
          F = s(83963),
          pt = s(18614),
          x = s(22950),
          c = s(25317),
          J = s(10142),
          ut = s(23627),
          St = s(39239),
          vt = s(90405),
          D = s(36118),
          b = s(71421),
          u = s(18210),
          X = s(19730),
          I = s(54963),
          jt = s(76559),
          K = s(60480),
          xt = s(53120),
          n = s.n(xt);
        const gt = (0, w.PA)((a) => {
          const { event: e } = a,
            r = e.clanSteamID.GetAccountID(),
            l = !e || !e.jsondata || !e.jsondata.broadcast_item_drops_enabled,
            i = (0, v.useRef)(null),
            [o, d] = (0, v.useState)(
              e ? K.pF.GetCreatorHome(e.clanSteamID) : void 0,
            );
          if (
            ((0, v.useEffect)(() => {
              const S = Y().CancelToken.source();
              return (
                (i.current = S.cancel),
                (async () => {
                  const E = jt.b.InitFromClanID(r),
                    P = await K.pF.LoadCreatorHome(E, !1, S);
                  S.token.reason || d(P);
                })(),
                () => {
                  i.current && i.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [r]),
            l || !o || !o.BIsLoaded())
          )
            return null;
          const p =
              j.TS.COMMUNITY_BASE_URL +
              "gid/" +
              e.jsondata.broadcast_item_drops_details_clan_accountid +
              "/partnerevents/view/" +
              e.jsondata.broadcast_item_drops_details_event_gid,
            m = e.jsondata.broadcast_item_drops_min_watch_time_minutes ?? 0;
          return (0, t.jsx)("div", {
            className: n().item_drop_ctn,
            children: (0, t.jsxs)("div", {
              children: [
                (0, u.we)(
                  o.GetName().length > 0
                    ? m % 60 == 0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : m % 60 == 0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  m % 60 == 0 ? m / 60 : m,
                  o.GetName(),
                ),
                !!e.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, t.jsx)("a", {
                    href: p,
                    target: j.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, u.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var Nt = s(95695),
          M = s.n(Nt),
          bt = s(96715),
          It = s(10886),
          ft = s(19654),
          Ct = s(3209),
          Dt = s(2801),
          Q = s(53107),
          Mt = s(14256),
          N = s.n(Mt);
        function yt(a) {
          const { steamid: e, closeModal: r } = a;
          return (0, t.jsxs)(Dt.o0, {
            strDescription: "",
            strTitle: (0, u.we)("#Button_Share"),
            onCancel: r,
            onOK: r,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, t.jsx)(Tt, { steamid: e }),
              (0, t.jsx)(At, { steamid: e }),
            ],
          });
        }
        function Tt(a) {
          const { steamid: e } = a,
            r = Et(e);
          return (0, t.jsxs)("div", {
            className: (0, h.A)(M().FlexRowContainer, N().share_controls_ctn),
            children: [
              (0, t.jsx)(b.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, t.jsx)(Q.uU, {
                  href: r.strFacebookUrl,
                  className: N().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, h.A)(M().Button),
                    src: It.A,
                  }),
                }),
              }),
              (0, t.jsx)(b.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, t.jsx)(Q.uU, {
                  href: r.strTwitterUrl,
                  className: N().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, h.A)(M().Button),
                    src: Ct.A,
                  }),
                }),
              }),
              (0, t.jsx)(b.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnReddit"),
                children: (0, t.jsx)(Q.uU, {
                  href: r.strRedditUrl,
                  className: N().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, h.A)(M().Button),
                    src: ft.A,
                  }),
                }),
              }),
            ],
          });
        }
        function At(a) {
          const { steamid: e } = a,
            r = v.createRef(),
            [l, i] = v.useState(""),
            o = v.createRef(),
            d = v.useCallback(
              (m) => {
                r.current &&
                  r.current.ownerDocument.defaultView?.navigator.clipboard
                    .writeText(r.current.value)
                    .then((S) => {
                      i((0, u.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((S) => {
                      i(
                        (0, u.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", S);
                    });
              },
              [r],
            ),
            p = j.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)("div", {
                className: (0, h.A)(M().FlexRowContainer, N().linkField),
                onClick: d,
                children: [
                  (0, t.jsx)("span", {
                    className: N().LinkInputLabel,
                    children: (0, u.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, t.jsx)("textarea", {
                    className: N().LinkInput,
                    ref: r,
                    value: p,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, t.jsx)(b.he, {
                      toolTipContent: (0, u.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, t.jsx)("div", {
                        className: (0, h.A)(
                          M().Button,
                          M().Icon,
                          N().LinkButton,
                        ),
                        children: (0, t.jsx)("img", {
                          className: N().ClipboardIcon,
                          src: bt.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                ref: o,
                className: N().ClipboardText,
                children: l,
              }),
            ],
          });
        }
        function Et(a) {
          const e = j.TS.COMMUNITY_BASE_URL + "broadcast/share/" + a;
          return {
            strFacebookUrl: e + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: e + "?site=twitter",
            strRedditUrl: e + "?site=reddit",
          };
        }
        var Lt = s(82734),
          wt = s(88003),
          Bt = s(29125),
          Pt = s(37589),
          Ot = s(34032),
          Ut = Object.defineProperty,
          Gt = Object.getOwnPropertyDescriptor,
          g = (a, e, r, l) => {
            for (
              var i = l > 1 ? void 0 : l ? Gt(e, r) : e, o = a.length - 1, d;
              o >= 0;
              o--
            )
              (d = a[o]) && (i = (l ? d(e, r, i) : d(i)) || i);
            return l && i && Ut(e, r, i), i;
          };
        const zt = {
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
        function Rt() {
          const a = (0, j.Qn)();
          return !(0, j.Y2)() && !a;
        }
        function Wt(a) {
          return Rt() ? (0, t.jsx)(y, { ...a }) : null;
        }
        let y = class extends v.Component {
          m_cancelSignal = Y().CancelToken.source();
          m_bMarkedUsabilitySeen = !1;
          state = {
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
          };
          async componentDidMount() {
            await c.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !c.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: c.j
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event?.BUsesContentHubForItemSource()
                ? c.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : c.j.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                c.j
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
            this.m_cancelSignal.cancel(
              "BroadcastEmbeddable component unmounted",
            );
          }
          ToggleBroadcastExpandShrink() {
            let a = c.j.Get().GetPlayReadyStream(this.props);
            if (!a) return;
            const e = this.state.bExpanded,
              r = x.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID;
            (0, c.U7)(r, e ? A.Mc.U6 : A.Mc.B_, a.snr),
              e && k()?.AddEvent(F.Xm.d),
              window.setTimeout(
                () =>
                  this.setState({
                    innerStyle: {
                      ...this.state.innerStyle,
                      maxHeight: e ? "0vh" : "100vh",
                    },
                  }),
                10,
              ),
              e ||
                this.setState({ bExpanded: !this.state.bExpanded }, () =>
                  c.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                c.j.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(a) {
            this.setState({ bStartMuted: !1 }),
              c.j.Get().GetPlayReadyStream(this.props)?.accountid !=
                a.accountid &&
                (await c.j.Get().AttemptToPlayStream(this.props, a));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const a = (c.j.Get().GetStreams(this.props) ?? []).filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
            );
            await c.j.Get().PlayFromAvailableStreams(this.props, a, !0);
          }
          ConstructSidePanels(a, e) {
            let r = { bRightPanelArtworkOrEmpty: !0 };
            if (this.props.bWidePlayer) return r;
            const l = c.j.Get().GetConcurrentStreams(this.props) > 1;
            let i = x.es.GetOrCreateBroadcastInfo(a.steamid).m_nAppID,
              o = (0, t.jsx)($, { ImgUrl: a.right_panel }, "right" + i),
              d = (0, t.jsx)($, { ImgUrl: a.left_panel }, "left" + i);
            const p = 11;
            if (i < p) {
              const m = a.steamid
                ? pt.l.GetAppIDListForBroadcasterSteamID(a.steamid)
                : void 0;
              m && m.length === 1 && (i = m[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                i >= p &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((o = (0, t.jsx)(ht, { appid: i }, "mini" + a.accountid)),
                (r.bRightPanelArtworkOrEmpty = !1)),
              l && !e
                ? ((r.leftPanel = (0, t.jsx)(
                    kt,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: a,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + i,
                  )),
                  (r.rightPanel = o))
                : e
                  ? ((r.leftPanel = (0, t.jsx)("div", {})),
                    (r.rightPanel = (0, t.jsx)(Yt, {
                      stream: a,
                      orientation: "rightside",
                    })),
                    (r.bRightPanelArtworkOrEmpty = !1))
                  : ((r.leftPanel = d), (r.rightPanel = o)),
              r
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0), k()?.AddEvent(F.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            const a = c.j.Get().GetPlayReadyStream(this.props);
            if (a) {
              this.MarkBroadcastSeen();
              let e = c.j.Get().GetChatVisibility() === "show";
              const {
                  event: r,
                  language: l,
                  fnRenderBroadcastContext: i,
                } = this.props,
                o = r
                  ? {
                      ...a,
                      left_panel: r.GetImageURL(
                        "broadcast_left",
                        l || (0, H.sfN)(j.TS.LANGUAGE),
                      ),
                      right_panel: r.GetImageURL(
                        "broadcast_right",
                        l || (0, H.sfN)(j.TS.LANGUAGE),
                      ),
                      store_title: r.GetBroadcastTitle(
                        l || (0, H.sfN)(j.TS.LANGUAGE),
                      ),
                      broadcast_chat_visibility: r.GetBroadcastChatVisibility(),
                    }
                  : a;
              let d = this.ConstructSidePanels(o, e),
                p = o.store_title ? o.store_title : o.title,
                m = c.j.Get().GetConcurrentStreams(this.props) > 1;
              const S = () => {
                o.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, t.jsx)(v.Fragment, {
                children: (0, t.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, t.jsxs)("div", {
                      className: (0, h.A)({
                        [n().bordered_container]: !0,
                        [n().Event]: !!r,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, t.jsxs)("div", {
                          className: (0, h.A)(
                            n().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, t.jsx)(ut.K, {}),
                            (0, t.jsx)("div", {
                              className: n().streamTitle,
                              children: p,
                            }),
                            (0, t.jsxs)("div", {
                              className: n().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, t.jsx)(b.he, {
                                    toolTipContent: (0, u.we)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, t.jsx)("div", {
                                      className: n().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${j.TS.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, t.jsx)(b.he, {
                                  toolTipContent: (0, u.we)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, t.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? n().bordered_corner_expanded
                                      : n().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!o.gamedata_subtitle &&
                              (0, t.jsx)("div", {
                                className: n().bordered_subtitle,
                                children: o.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, t.jsxs)("div", {
                            className: (0, h.A)({
                              [n().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: m,
                              broadcast_right_panel_simple:
                                d.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: e,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, t.jsx)("div", {
                                className: n().LeftPanelCtn,
                                children: d.leftPanel,
                              }),
                              (0, t.jsx)(R, {
                                stream: o,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: i,
                                fnOnVideoEnd: S,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, t.jsx)("div", {
                                className: n().RightPanelCtn,
                                children: d.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, t.jsx)(B, {
                                  stream: o,
                                  bMultistream: m,
                                  chatAnnouncementGivewayGID: d.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!r &&
                      !!(
                        r.jsondata && r.jsondata.broadcast_item_drops_enabled
                      ) &&
                      (0, t.jsx)(gt, { event: r }),
                    (0, t.jsx)("div", { className: n().clear_div }),
                  ],
                }),
              });
            } else
              return (0, t.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        g([I.oI], y.prototype, "ToggleBroadcastExpandShrink", 1),
          g([I.oI], y.prototype, "OnShrinkTransitionEnd", 1),
          g([I.oI], y.prototype, "onStreamSelect", 1),
          g([I.oI], y.prototype, "PlayNextNonVOD", 1),
          (y = g([w.PA], y));
        class R extends v.Component {
          m_iVideoContainerRef = v.createRef();
          constructor(e) {
            super(e),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const e = x.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, c.U7)(e, A.Mc.n6, this.props.stream.snr),
              k()?.AddEvent(F.Xm.ok),
              this.setState({ bPopout: !1, bPreventPopup: !0 });
          }
          OnEnter() {
            !this.state.bPreventPopup &&
              this.state.bPopout &&
              this.setState({ bPopout: !1 });
          }
          OnLeave() {
            !this.state.bPreventPopup &&
              !this.state.bPopout &&
              this.setState({ bPopout: !0 });
          }
          render() {
            return (0, t.jsx)("div", {
              className: n().wrapper,
              children: (0, t.jsx)(Pt.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (e) => {
                  e.isIntersecting || this.OnLeave();
                },
                className: (0, h.A)({
                  [n().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [n().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, t.jsxs)("div", {
                  className: this.state.bPopout
                    ? n().broadcast_floating
                    : n().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, t.jsx)(q, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, t.jsx)("div", {
                      className: n().BroadcastPlayerContainer,
                      children: (0, t.jsx)(st.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: Z.nn.fe,
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
        g([I.oI], R.prototype, "CloseBroadcastPopup", 1),
          g([I.oI], R.prototype, "OnEnter", 1),
          g([I.oI], R.prototype, "OnLeave", 1);
        function Vt(a) {
          const { stream: e } = a,
            [r] = (0, U.q3)(() => [e.steamid]),
            l = x.es.GetOrCreateBroadcastInfo(r).m_nAppID,
            i = zt.list.find(
              (o) =>
                o.appid == l &&
                (!o.broadcasterAccountID ||
                  o.broadcasterAccountID == e.accountid),
            );
          if (i) {
            let o = i.url;
            return (
              (j.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (o = "steam://openurl/" + o),
              (0, t.jsx)("a", {
                href: o,
                children: (0, u.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const o = j.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + r;
            return (0, t.jsx)(b.he, {
              toolTipContent: (0, u.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, t.jsx)("a", {
                href: o,
                className: n().external_link,
                children: (0, t.jsx)(D.GrD, {}),
              }),
            });
          }
        }
        let B = class extends v.Component {
          OnToggleChat(a) {
            a.preventDefault();
            const e = x.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, c.U7)(
              e,
              c.j.Get().GetChatVisibility() === "show" ? A.Mc.kz : A.Mc.bW,
              this.props.stream.snr,
            ),
              c.j.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const a = x.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, c.U7)(a, A.Mc.Is, this.props.stream.snr);
          }
          render() {
            const a = c.j.Get().GetChatVisibility() != "remove",
              e = c.j.Get().GetChatVisibility() === "hide",
              r = !this.props.stream.nAppIDVOD,
              l = r;
            let i = Number.parseInt(
              "" +
                x.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, t.jsxs)("div", {
              className: (0, h.A)(n().viewer_bar, "viewer_bar"),
              children: [
                (0, t.jsxs)("div", {
                  className: (0, h.A)(n().viewer_count, "viewer_count"),
                  children: [(0, t.jsx)(D.y_e, {}), (0, X.Dq)(i)],
                }),
                (0, t.jsxs)("div", {
                  className: (0, h.A)(n().viewer_links, "viewer_links"),
                  children: [
                    !!(a && !e && this.props.bMultistream) &&
                      (0, t.jsx)("div", {
                        className: n().chat_link,
                        children: (0, t.jsx)("a", {
                          href: "#",
                          className: n().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, u.we)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    a &&
                      (0, t.jsxs)("div", {
                        className: n().chat_link,
                        children: [
                          (0, t.jsx)(D.ROZ, {}),
                          (0, t.jsx)("a", {
                            href: "#",
                            className: n().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, u.we)(
                              e
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    l &&
                      (0, t.jsxs)("div", {
                        className: n().chat_link,
                        children: [
                          (0, t.jsx)(D.SYj, {}),
                          (0, t.jsx)("a", {
                            href: "#",
                            className: n().ChatToggle,
                            onClick: (o) => {
                              const d = (0, Lt.uX)(o);
                              d &&
                                (0, wt.pg)(
                                  (0, t.jsx)(yt, {
                                    steamid: this.props.stream.steamid ?? "",
                                  }),
                                  d,
                                );
                            },
                            children: (0, u.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, t.jsx)(b.he, {
                      toolTipContent: (0, u.we)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, t.jsx)("a", {
                        href:
                          j.TS.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: j.TS.IN_CLIENT ? void 0 : "_blank",
                        className: n().settings_link,
                        children: (0, t.jsx)(D.wB_, {}),
                      }),
                    }),
                    r && (0, t.jsx)(Vt, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, t.jsx)(Bt.V, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        g([I.oI], B.prototype, "OnToggleChat", 1),
          g([I.oI], B.prototype, "onWatchBroadcastPage", 1),
          (B = g([w.PA], B));
        class $ extends v.Component {
          render() {
            let e = this.props.ImgUrl;
            return (0, t.jsxs)("div", {
              className: n().SidePanelBackground,
              children: [
                e &&
                  (0, t.jsx)("img", {
                    className: n().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && (0, t.jsx)("div", { className: n().side_panels }),
              ],
            });
          }
        }
        const q = (0, w.PA)((a) => {
          const { steamIDBroadcast: e } = a;
          let r = x.es.GetOrCreateBroadcastInfo(e).m_nAppID;
          r = r != x.fO ? r : 0;
          const l = (0, V.$5)(r),
            { data: i } = (0, T.J$)(l);
          return (0, t.jsxs)("div", {
            className: [n().PopOutVideoTitleBar, n().NoSeslect].join(" "),
            children: [
              i
                ? (0, t.jsx)(z.u, {
                    id: l,
                    className: n().PopOutVideoTitleText,
                    children: (0, u.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, t.jsx)("div", {
                    className: n().PopOutVideoTitleText,
                    children: (0, u.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, t.jsx)(b.he, {
                toolTipContent: (0, u.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, t.jsx)("button", {
                  className: n().PopOutVideoCloseButton,
                  onClick: a.OnPreventPopup,
                  children: (0, t.jsx)(D.X, {}),
                }),
              }),
            ],
          });
        });
        function Ht(a, e) {
          const r = x.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            l = J.A.Get().GetApp(r),
            i = a && l?.GetAssets()?.GetHeaderURL();
          return parseInt(
            i
              ? n().strStreamIconCapsuleArtHeight
              : n().strStreamIconScreenshotArtHeight,
          );
        }
        function kt(a) {
          const {
              curStream: e,
              onStreamSelect: r,
              fnFilterStreams: l,
              bShowCapsuleArt: i,
              broadcastEmbedContext: o,
            } = a,
            d = (0, v.useRef)(null),
            p = (0, v.useMemo)(() => {
              const m = (c.j.Get().GetStreams(o) ?? []).filter(
                (S) => !l || l(S),
              );
              return (0, c.MU)(m), m;
            }, [o, l]);
          return (
            (0, v.useEffect)(() => {
              if (d && d.current) {
                const m = p
                  .map((S) => x.es.GetOrCreateBroadcastInfo(S.steamid).m_nAppID)
                  .filter(Boolean);
                J.A.Get()
                  .QueueMultipleAppRequests(m, { include_assets: !0 })
                  .then(() => {
                    if (d.current) {
                      let S = 0;
                      for (const f of p) {
                        if (e.accountid == f.accountid) break;
                        S += Ht(i, f);
                      }
                      d.current.scrollTop = S;
                    }
                  });
              }
            }, [p, i, e.accountid, d]),
            (0, t.jsx)("div", {
              ref: d,
              className: (0, h.A)({
                [n().side_panels]: !0,
                side_panels: !0,
                [n().multistream]: !0,
                [n().scrollingstreams]: p.length > 3,
              }),
              children: (0, t.jsx)("div", {
                className: n().MultiStreamCtn,
                children: p.map((m) =>
                  (0, t.jsx)(
                    Ft,
                    {
                      stream: m,
                      bSelected: e.accountid == m.accountid,
                      onStreamSelect: r,
                      bShowCapsuleArt: i,
                    },
                    m.accountid ?? m.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function Ft(a) {
          const {
            onStreamSelect: e,
            bSelected: r,
            stream: l,
            bShowCapsuleArt: i,
          } = a;
          let o = (0, U.q3)(
            () => x.es.GetOrCreateBroadcastInfo(l.steamid).m_nAppID,
          );
          o = o != x.fO ? o : 0;
          const d = (0, V.$5)(o),
            { data: p } = (0, T.J$)(d),
            { data: m } = (0, T.lv)(d);
          if (!(0, c.fn)(l)) return null;
          const S = i && m ? (0, _.b0)(m, "header") : void 0,
            f = Number.parseInt("" + l.viewer_count),
            E = !Number.isNaN(f),
            P = !!l.nAppIDVOD && p?.name;
          return (0, t.jsxs)("div", {
            className: (0, h.A)({
              [n().stream_icon_and_viewer_container]: !0,
              [n().stream_featured]:
                l.current_selection_priority == Ot.mY.k_eFeatured,
              [n().display_capsule_art]: !!S,
            }),
            children: [
              (0, t.jsx)(z.j, {
                id: d,
                hoverClassName: n().StreamCapsule,
                children: (0, t.jsx)(vt.K, {
                  className: (0, h.A)(
                    n().stream_icon_container,
                    r && n().stream_selected,
                  ),
                  onClick: () => e && e(l),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, t.jsx)(Qt, {
                    strThumbnail: l.thumbnail_http_address,
                    bSelected: r,
                    strCapsuleArtURL: S,
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, h.A)(n().viewer_count, !E && n().vod_title),
                children: E
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(D.y_e, {}),
                        (0, t.jsx)("div", {
                          className: n().ViewerNum,
                          children: (0, X.Dq)(f),
                        }),
                      ],
                    })
                  : P,
              }),
            ],
          });
        }
        function Qt(a) {
          const { strCapsuleArtURL: e, strThumbnail: r, bSelected: l } = a,
            i = l ? n().stream_icon_selected : n().stream_icon;
          if (e) {
            const o = [e];
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("img", {
                  className: (0, h.A)(i, n().stream_icon_hide_on_hover),
                  src: e,
                }),
                (0, t.jsx)(St.o, {
                  className: (0, h.A)(i, n().stream_icon_show_on_hover),
                  srcs: o,
                }),
              ],
            });
          } else return (0, t.jsx)("img", { className: i, src: r });
        }
        function Yt(a) {
          const { stream: e, orientation: r } = a,
            l = r == "below",
            [i, o] = (0, U.q3)(() => {
              const p = e.steamid ? x.es.GetBroadcast(e.steamid) : void 0;
              return [p, p?.m_ulBroadcastID];
            }),
            d = (0, U.q3)(() => e.steamid);
          return i
            ? (0, t.jsx)("div", {
                className: (0, h.A)({
                  [n().chat_below_container]: l,
                  [n().chat_rightside_container]: !l,
                  [n().store_chat_ctn]: !0,
                }),
                children: (0, t.jsx)("div", {
                  className: n().ChatContainer,
                  children: (0, t.jsx)(et.I, {
                    emoticonStore: c.MX,
                    watchLocation: Z.nn.fe,
                    steamID: d,
                    broadcastID: o,
                  }),
                }),
              })
            : null;
        }
      },
      43087: (L) => {
        L.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      96715: (L, C, s) => {
        "use strict";
        s.d(C, { A: () => t });
        const t =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      19654: (L, C, s) => {
        "use strict";
        s.d(C, { A: () => t });
        const t =
          s.p +
          "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
      },
      59913: (L, C, s) => {
        "use strict";
        s.d(C, { A: () => t });
        function t(O) {
          if (O === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return O;
        }
      },
    },
  ]);
})();

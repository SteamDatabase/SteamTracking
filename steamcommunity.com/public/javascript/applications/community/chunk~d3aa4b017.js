/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [99517],
    {
      54089: (w, C, r) => {
        "use strict";
        r.r(C),
          r.d(C, {
            BroadcastEmbeddablePopoutHeader: () => et,
            default: () => Vt,
          });
        var t = r(7850),
          O = r(41735),
          Y = r.n(O),
          B = r(75844),
          U = r(65946),
          S = r(90626),
          at = r(9398),
          rt = r(23240),
          nt = r(83482),
          ot = r(3367),
          it = r(84676),
          G = r(76532),
          z = r(95414),
          lt = r(4705),
          dt = r(72865),
          ct = r(85599),
          p = r(36707),
          j = r(3166),
          mt = r(43087),
          W = r.n(mt),
          V = r(29522),
          T = r(40358),
          ht = r(47875),
          Z = r(21721),
          pt = r(3348);
        const ut = (0, B.PA)((s) => {
          const { appid: e } = s,
            a = (0, dt.n9)(),
            l = (0, S.useRef)({ include_assets: !0, include_release: !0 }),
            o = (0, V.$5)(e),
            { data: i } = (0, T.J$)(o),
            { data: c } = (0, T.lv)(o),
            { data: m } = (0, T.by)(o),
            [h, v] = (0, it.t7)(e, l.current);
          let g = (0, p.A)(
              W().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            L = W().StoreSaleWidgetImage_mini,
            Q = W().StoreSaleImage_mini;
          if (i == null)
            return (0, t.jsx)("div", {
              className: g,
              children: (0, t.jsx)(ct.t, { size: "medium" }),
            });
          if (i == null || !i.name)
            return (0, t.jsx)("div", {
              className: G.StoreSaleWidgetEmptyContainer,
            });
          const Jt = i.type != ot.uE.gQ,
            st = (0, nt.wJ)((0, ht._)(i), a);
          return (0, t.jsxs)("div", {
            className: g,
            children: [
              (0, t.jsx)("a", {
                href: st,
                target: j.TS.IN_CLIENT ? void 0 : "_blank",
                children: (0, t.jsx)(z.j, {
                  id: o,
                  children: (0, t.jsx)("div", {
                    className: L,
                    children:
                      c &&
                      (0, t.jsx)("img", {
                        className: Q,
                        src: (0, Z.b0)(c, "small_capsule"),
                        alt: i.name,
                      }),
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: G.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, t.jsx)("a", {
                    href: st,
                    target: j.TS.IN_CLIENT ? void 0 : "_blank",
                    children: (0, t.jsx)(z.j, {
                      id: o,
                      children: (0, t.jsx)("div", {
                        className: (0, p.A)(
                          G.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: i.name,
                      }),
                    }),
                  }),
                  m &&
                    (0, t.jsx)("div", {
                      className: G.StoreSaleWidgetRelease,
                      children: (0, pt.CC)(m),
                    }),
                  !!Jt && (0, t.jsx)(lt.w, { id: o, bShowDemoButton: !0 }),
                ],
              }),
            ],
          });
        });
        var H = r(99412);
        function A() {
          let s = window.GetUsabilityTracker;
          if (s) return s();
        }
        var J = r(90711),
          E = r(61639),
          F = r(83963),
          vt = r(18614),
          x = r(22950),
          d = r(25317),
          X = r(10142),
          St = r(23627),
          jt = r(39239),
          xt = r(90405),
          D = r(36118),
          I = r(71421),
          u = r(18210),
          K = r(19730),
          f = r(54963),
          gt = r(76559),
          $ = r(60480),
          bt = r(53120),
          n = r.n(bt);
        const Nt = (0, B.PA)((s) => {
          const { event: e } = s,
            a = e.clanSteamID.GetAccountID(),
            l = !e || !e.jsondata || !e.jsondata.broadcast_item_drops_enabled,
            o = (0, S.useRef)(null),
            [i, c] = (0, S.useState)(
              e ? $.pF.GetCreatorHome(e.clanSteamID) : null,
            );
          if (
            ((0, S.useEffect)(() => {
              const h = Y().CancelToken.source();
              return (
                (o.current = h.cancel),
                (async () => {
                  const g = gt.b.InitFromClanID(a),
                    L = await $.pF.LoadCreatorHome(g, !1, h);
                  h.token.reason || c(L);
                })(),
                () => {
                  o.current && o.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [a]),
            l || !i || !i.BIsLoaded())
          )
            return null;
          const m =
            j.TS.COMMUNITY_BASE_URL +
            "gid/" +
            e.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            e.jsondata.broadcast_item_drops_details_event_gid;
          return (0, t.jsx)("div", {
            className: n().item_drop_ctn,
            children: (0, t.jsxs)("div", {
              children: [
                (0, u.we)(
                  i.GetName().length > 0
                    ? e.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : e.jsondata.broadcast_item_drops_min_watch_time_minutes %
                          60 ==
                        0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  e.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                    ? e.jsondata.broadcast_item_drops_min_watch_time_minutes /
                        60
                    : e.jsondata.broadcast_item_drops_min_watch_time_minutes,
                  i.GetName(),
                ),
                !!e.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, t.jsx)("a", {
                    href: m,
                    target: j.TS.IN_CLIENT ? "" : "_blank",
                    children: (0, u.we)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var It = r(95695),
          M = r.n(It),
          ft = r(96715),
          Ct = r(10886),
          Dt = r(19654),
          Mt = r(3209),
          yt = r(2801),
          k = r(53107),
          Tt = r(14256),
          N = r.n(Tt);
        function At(s) {
          const { steamid: e, closeModal: a } = s;
          return (0, t.jsxs)(yt.o0, {
            strDescription: "",
            strTitle: (0, u.we)("#Button_Share"),
            onCancel: a,
            onOK: a,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, t.jsx)(Et, { steamid: e }),
              (0, t.jsx)(Lt, { steamid: e }),
            ],
          });
        }
        function Et(s) {
          const { steamid: e } = s,
            a = wt(e);
          return (0, t.jsxs)("div", {
            className: (0, p.A)(M().FlexRowContainer, N().share_controls_ctn),
            children: [
              (0, t.jsx)(I.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnFaceBook"),
                children: (0, t.jsx)(k.uU, {
                  href: a.strFacebookUrl,
                  className: N().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, p.A)(M().Button),
                    src: Ct.A,
                  }),
                }),
              }),
              (0, t.jsx)(I.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnTwitter"),
                children: (0, t.jsx)(k.uU, {
                  href: a.strTwitterUrl,
                  className: N().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, p.A)(M().Button),
                    src: Mt.A,
                  }),
                }),
              }),
              (0, t.jsx)(I.he, {
                toolTipContent: (0, u.we)("#EventDisplay_Share_OnReddit"),
                children: (0, t.jsx)(k.uU, {
                  href: a.strRedditUrl,
                  className: N().ShareBtn,
                  children: (0, t.jsx)("img", {
                    className: (0, p.A)(M().Button),
                    src: Dt.A,
                  }),
                }),
              }),
            ],
          });
        }
        function Lt(s) {
          const { steamid: e } = s,
            a = S.createRef(),
            [l, o] = S.useState(""),
            i = S.createRef(),
            c = S.useCallback(
              (h) => {
                a.current &&
                  a.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(a.current.value)
                    .then((v) => {
                      o((0, u.we)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((v) => {
                      o(
                        (0, u.we)(
                          "#EventDisplay_Share_FailedToCopyToClipboard",
                        ),
                      ),
                        console.error("Failed to copy link to clipboard:", v);
                    });
              },
              [a],
            ),
            m = j.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
          return (0, t.jsxs)("div", {
            children: [
              (0, t.jsxs)("div", {
                className: (0, p.A)(M().FlexRowContainer, N().linkField),
                onClick: c,
                children: [
                  (0, t.jsx)("span", {
                    className: N().LinkInputLabel,
                    children: (0, u.we)("#EventDisplay_Share_Link"),
                  }),
                  (0, t.jsx)("textarea", {
                    className: N().LinkInput,
                    ref: a,
                    value: m,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, t.jsx)(I.he, {
                      toolTipContent: (0, u.we)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, t.jsx)("div", {
                        className: (0, p.A)(
                          M().Button,
                          M().Icon,
                          N().LinkButton,
                        ),
                        children: (0, t.jsx)("img", {
                          className: N().ClipboardIcon,
                          src: ft.A,
                        }),
                      }),
                    }),
                ],
              }),
              (0, t.jsx)("div", {
                ref: i,
                className: N().ClipboardText,
                children: l,
              }),
            ],
          });
        }
        function wt(s) {
          const e = j.TS.COMMUNITY_BASE_URL + "broadcast/share/" + s;
          return {
            strFacebookUrl: e + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: e + "?site=twitter",
            strRedditUrl: e + "?site=reddit",
          };
        }
        var Bt = r(82734),
          Pt = r(88003),
          Ot = r(29125),
          Ut = r(37589),
          Gt = r(34032),
          q = Object.defineProperty,
          zt = Object.getOwnPropertyDescriptor,
          Rt = (s, e, a) =>
            e in s
              ? q(s, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: a,
                })
              : (s[e] = a),
          b = (s, e, a, l) => {
            for (
              var o = l > 1 ? void 0 : l ? zt(e, a) : e, i = s.length - 1, c;
              i >= 0;
              i--
            )
              (c = s[i]) && (o = (l ? c(e, a, o) : c(o)) || o);
            return l && o && q(e, a, o), o;
          },
          R = (s, e, a) => Rt(s, typeof e != "symbol" ? e + "" : e, a);
        const _t = {
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
        function Wt() {
          const s = (0, j.Qn)();
          return !(0, j.Y2)() && !s;
        }
        function Vt(s) {
          return Wt() ? (0, t.jsx)(y, { ...s }) : null;
        }
        let y = class extends S.Component {
          constructor() {
            super(...arguments),
              R(this, "m_cancelSignal", Y().CancelToken.source()),
              R(this, "m_bMarkedUsabilitySeen", !1),
              R(this, "state", {
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
            await d.j.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !d.j
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight: d.j
                      .Get()
                      .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                      ? "0vh"
                      : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? d.j.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : d.j.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                d.j
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
            let s = d.j.Get().GetPlayReadyStream(this.props);
            const e = this.state.bExpanded,
              a = x.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID;
            (0, d.U7)(a, e ? E.Mc.U6 : E.Mc.B_, s.snr),
              e && A() && A().AddEvent(F.Xm.d),
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
                  d.j.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState({ bExpanded: !1 }, () =>
                d.j.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(s) {
            this.setState({ bStartMuted: !1 }),
              d.j.Get().GetPlayReadyStream(this.props).accountid !=
                s.accountid &&
                (await d.j.Get().AttemptToPlayStream(this.props, s));
          }
          async PlayNextNonVOD() {
            this.setState({ bStartMuted: !1 });
            const s = d.j
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e),
              );
            await d.j.Get().PlayFromAvailableStreams(this.props, s, !0);
          }
          ConstructSidePanels(s, e) {
            let a = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return a;
            const l = d.j.Get().GetConcurrentStreams(this.props) > 1;
            let o = x.es.GetOrCreateBroadcastInfo(s.steamid).m_nAppID,
              i = (0, t.jsx)(tt, { ImgUrl: s.right_panel }, "right" + o),
              c = (0, t.jsx)(tt, { ImgUrl: s.left_panel }, "left" + o);
            const m = 11;
            if (o < m) {
              const h = vt.l.GetAppIDListForBroadcasterSteamID(s.steamid);
              h && h.length === 1 && (o = h[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                o >= m &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((i = (0, t.jsx)(ut, { appid: o }, "mini" + s.accountid)),
                (a.bRightPanelArtworkOrEmpty = !1)),
              l && !e
                ? ((a.leftPanel = (0, t.jsx)(
                    kt,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: s,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + o,
                  )),
                  (a.rightPanel = i))
                : e
                  ? ((a.leftPanel = (0, t.jsx)("div", {})),
                    (a.rightPanel = (0, t.jsx)(Zt, {
                      stream: s,
                      orientation: "rightside",
                    })),
                    (a.bRightPanelArtworkOrEmpty = !1))
                  : ((a.leftPanel = c), (a.rightPanel = i)),
              a
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              A() && A().AddEvent(F.Xm.ex));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let s = d.j.Get().GetPlayReadyStream(this.props);
            if (s) {
              this.MarkBroadcastSeen();
              let e = d.j.Get().GetChatVisibility() === "show";
              const {
                event: a,
                language: l,
                fnRenderBroadcastContext: o,
              } = this.props;
              a &&
                (s = {
                  ...s,
                  left_panel: a.GetImageURL(
                    "broadcast_left",
                    l || (0, H.sfN)(j.TS.LANGUAGE),
                  ),
                  right_panel: a.GetImageURL(
                    "broadcast_right",
                    l || (0, H.sfN)(j.TS.LANGUAGE),
                  ),
                  store_title: a.GetBroadcastTitle(
                    l || (0, H.sfN)(j.TS.LANGUAGE),
                  ),
                  broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
                });
              let i = this.ConstructSidePanels(s, e),
                c = s.store_title ? s.store_title : s.title,
                m = d.j.Get().GetConcurrentStreams(this.props) > 1;
              const h = () => {
                var v, g;
                s.nAppIDVOD && this.PlayNextNonVOD(),
                  (g = (v = this.props).fnOnVideoEnd) == null || g.call(v);
              };
              return (0, t.jsx)(S.Fragment, {
                children: (0, t.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, t.jsxs)("div", {
                      className: (0, p.A)({
                        [n().bordered_container]: !0,
                        [n().Event]: !!a,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, t.jsxs)("div", {
                          className: (0, p.A)(
                            n().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, t.jsx)(St.K, {}),
                            (0, t.jsx)("div", {
                              className: n().streamTitle,
                              children: c,
                            }),
                            (0, t.jsxs)("div", {
                              className: n().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, t.jsx)(I.he, {
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
                                (0, t.jsx)(I.he, {
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
                            !!s.gamedata_subtitle &&
                              (0, t.jsx)("div", {
                                className: n().bordered_subtitle,
                                children: s.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, t.jsxs)("div", {
                            className: (0, p.A)({
                              [n().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: m,
                              broadcast_right_panel_simple:
                                i.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: e,
                            }),
                            style: { ...this.state.innerStyle },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, t.jsx)("div", {
                                className: n().LeftPanelCtn,
                                children: i.leftPanel,
                              }),
                              (0, t.jsx)(_, {
                                stream: s,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: o,
                                fnOnVideoEnd: h,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, t.jsx)("div", {
                                className: n().RightPanelCtn,
                                children: i.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, t.jsx)(P, {
                                  stream: s,
                                  bMultistream: m,
                                  chatAnnouncementGivewayGID: i.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!(
                      a &&
                      a.jsondata &&
                      a.jsondata.broadcast_item_drops_enabled
                    ) && (0, t.jsx)(Nt, { event: a }),
                    (0, t.jsx)("div", { className: n().clear_div }),
                  ],
                }),
              });
            } else
              return (0, t.jsx)("div", { className: "NoBroadcastAvailable" });
          }
        };
        b([f.oI], y.prototype, "ToggleBroadcastExpandShrink", 1),
          b([f.oI], y.prototype, "OnShrinkTransitionEnd", 1),
          b([f.oI], y.prototype, "onStreamSelect", 1),
          b([f.oI], y.prototype, "PlayNextNonVOD", 1),
          (y = b([B.PA], y));
        class _ extends S.Component {
          constructor(e) {
            super(e),
              R(this, "m_iVideoContainerRef", S.createRef()),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const e = x.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, d.U7)(e, E.Mc.n6, this.props.stream.snr),
              A() && A().AddEvent(F.Xm.ok),
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
              children: (0, t.jsx)(Ut.j, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (e) => {
                  e.isIntersecting || this.OnLeave();
                },
                className: (0, p.A)({
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
                      (0, t.jsx)(et, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, t.jsx)("div", {
                      className: n().BroadcastPlayerContainer,
                      children: (0, t.jsx)(rt.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: J.nn.fe,
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
        b([f.oI], _.prototype, "CloseBroadcastPopup", 1),
          b([f.oI], _.prototype, "OnEnter", 1),
          b([f.oI], _.prototype, "OnLeave", 1);
        function Ht(s) {
          const { stream: e } = s,
            [a] = (0, U.q3)(() => [e.steamid]),
            l = x.es.GetOrCreateBroadcastInfo(a).m_nAppID,
            o = _t.list.find(
              (i) =>
                i.appid == l &&
                (!i.broadcasterAccountID ||
                  i.broadcasterAccountID == e.accountid),
            );
          if (o) {
            let i = o.url;
            return (
              (j.TS.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (i = "steam://openurl/" + i),
              (0, t.jsx)("a", {
                href: i,
                children: (0, u.we)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const i = j.TS.COMMUNITY_BASE_URL + "broadcast/watch/" + a;
            return (0, t.jsx)(I.he, {
              toolTipContent: (0, u.we)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, t.jsx)("a", {
                href: i,
                className: n().external_link,
                children: (0, t.jsx)(D.GrD, {}),
              }),
            });
          }
        }
        let P = class extends S.Component {
          OnToggleChat(s) {
            s.preventDefault();
            const e = x.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, d.U7)(
              e,
              d.j.Get().GetChatVisibility() === "show" ? E.Mc.kz : E.Mc.bW,
              this.props.stream.snr,
            ),
              d.j.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const s = x.es.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, d.U7)(s, E.Mc.Is, this.props.stream.snr);
          }
          render() {
            const s = d.j.Get().GetChatVisibility() != "remove",
              e = d.j.Get().GetChatVisibility() === "hide",
              a = !this.props.stream.nAppIDVOD,
              l = a;
            let o = Number.parseInt(
              "" +
                x.es.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, t.jsxs)("div", {
              className: (0, p.A)(n().viewer_bar, "viewer_bar"),
              children: [
                (0, t.jsxs)("div", {
                  className: (0, p.A)(n().viewer_count, "viewer_count"),
                  children: [(0, t.jsx)(D.y_e, {}), (0, K.Dq)(o)],
                }),
                (0, t.jsxs)("div", {
                  className: (0, p.A)(n().viewer_links, "viewer_links"),
                  children: [
                    !!(s && !e && this.props.bMultistream) &&
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
                    s &&
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
                            onClick: (i) =>
                              (0, Pt.pg)(
                                (0, t.jsx)(At, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, Bt.uX)(i),
                              ),
                            children: (0, u.we)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, t.jsx)(I.he, {
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
                    a && (0, t.jsx)(Ht, { ...this.props }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, t.jsx)(Ot.V, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        b([f.oI], P.prototype, "OnToggleChat", 1),
          b([f.oI], P.prototype, "onWatchBroadcastPage", 1),
          (P = b([B.PA], P));
        class tt extends S.Component {
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
        const et = (0, B.PA)((s) => {
          const { steamIDBroadcast: e } = s;
          let a = x.es.GetOrCreateBroadcastInfo(e).m_nAppID;
          a = a != x.fO ? a : 0;
          const l = (0, V.$5)(a),
            { data: o } = (0, T.J$)(l);
          return (0, t.jsxs)("div", {
            className: [n().PopOutVideoTitleBar, n().NoSeslect].join(" "),
            children: [
              o
                ? (0, t.jsx)(z.u, {
                    id: l,
                    className: n().PopOutVideoTitleText,
                    children: (0, u.we)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, t.jsx)("div", {
                    className: n().PopOutVideoTitleText,
                    children: (0, u.we)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, t.jsx)(I.he, {
                toolTipContent: (0, u.we)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, t.jsx)("button", {
                  className: n().PopOutVideoCloseButton,
                  onClick: s.OnPreventPopup,
                  children: (0, t.jsx)(D.X, {}),
                }),
              }),
            ],
          });
        });
        function Ft(s, e) {
          var a;
          const l = x.es.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            o = X.A.Get().GetApp(l),
            i =
              s &&
              ((a = o == null ? void 0 : o.GetAssets()) == null
                ? void 0
                : a.GetHeaderURL());
          return parseInt(
            i
              ? n().strStreamIconCapsuleArtHeight
              : n().strStreamIconScreenshotArtHeight,
          );
        }
        function kt(s) {
          const {
              curStream: e,
              onStreamSelect: a,
              fnFilterStreams: l,
              bShowCapsuleArt: o,
              broadcastEmbedContext: i,
            } = s,
            c = (0, S.useRef)(void 0),
            m = (0, S.useMemo)(() => {
              const h = d.j
                .Get()
                .GetStreams(i)
                .filter((v) => !l || l(v));
              return (0, d.MU)(h), h;
            }, [i, l]);
          return (
            (0, S.useEffect)(() => {
              if (c && c.current) {
                const h = m
                  .map((v) => x.es.GetOrCreateBroadcastInfo(v.steamid).m_nAppID)
                  .filter(Boolean);
                X.A.Get()
                  .QueueMultipleAppRequests(h, { include_assets: !0 })
                  .then(() => {
                    if (c.current) {
                      let v = 0;
                      for (const g of m) {
                        if (e.accountid == g.accountid) break;
                        v += Ft(o, g);
                      }
                      c.current.scrollTop = v;
                    }
                  });
              }
            }, [m, o, e.accountid, c]),
            (0, t.jsx)("div", {
              ref: c,
              className: (0, p.A)({
                [n().side_panels]: !0,
                side_panels: !0,
                [n().multistream]: !0,
                [n().scrollingstreams]: m.length > 3,
              }),
              children: (0, t.jsx)("div", {
                className: n().MultiStreamCtn,
                children: m.map((h) => {
                  var v;
                  return (0, t.jsx)(
                    Qt,
                    {
                      stream: h,
                      bSelected: e.accountid == h.accountid,
                      onStreamSelect: a,
                      bShowCapsuleArt: o,
                    },
                    (v = h.accountid) != null ? v : h.steamid,
                  );
                }),
              }),
            })
          );
        }
        function Qt(s) {
          const {
            onStreamSelect: e,
            bSelected: a,
            stream: l,
            bShowCapsuleArt: o,
          } = s;
          let i = (0, U.q3)(
            () => x.es.GetOrCreateBroadcastInfo(l.steamid).m_nAppID,
          );
          i = i != x.fO ? i : 0;
          const c = (0, V.$5)(i),
            { data: m } = (0, T.J$)(c),
            { data: h } = (0, T.lv)(c);
          if (!(0, d.fn)(l)) return null;
          const v = o && h && (0, Z.b0)(h, "header"),
            g = Number.parseInt("" + l.viewer_count),
            L = !Number.isNaN(g),
            Q = !!l.nAppIDVOD && (m == null ? void 0 : m.name);
          return (0, t.jsxs)("div", {
            className: (0, p.A)({
              [n().stream_icon_and_viewer_container]: !0,
              [n().stream_featured]:
                l.current_selection_priority == Gt.mY.k_eFeatured,
              [n().display_capsule_art]: !!v,
            }),
            children: [
              (0, t.jsx)(z.j, {
                id: c,
                hoverClassName: n().StreamCapsule,
                children: (0, t.jsx)(xt.K, {
                  className: (0, p.A)(
                    n().stream_icon_container,
                    a && n().stream_selected,
                  ),
                  onClick: () => e && e(l),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, t.jsx)(Yt, {
                    strThumbnail: l.thumbnail_http_address,
                    bSelected: a,
                    strCapsuleArtURL: v,
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: (0, p.A)(n().viewer_count, !L && n().vod_title),
                children: L
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)(D.y_e, {}),
                        (0, t.jsx)("div", {
                          className: n().ViewerNum,
                          children: (0, K.Dq)(g),
                        }),
                      ],
                    })
                  : Q,
              }),
            ],
          });
        }
        function Yt(s) {
          const { strCapsuleArtURL: e, strThumbnail: a, bSelected: l } = s,
            o = l ? n().stream_icon_selected : n().stream_icon;
          if (e) {
            const i = [e];
            return (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)("img", {
                  className: (0, p.A)(o, n().stream_icon_hide_on_hover),
                  src: e,
                }),
                (0, t.jsx)(jt.o, {
                  className: (0, p.A)(o, n().stream_icon_show_on_hover),
                  srcs: i,
                }),
              ],
            });
          } else return (0, t.jsx)("img", { className: o, src: a });
        }
        function Zt(s) {
          const { stream: e, orientation: a } = s,
            l = a == "below",
            [o, i] = (0, U.q3)(() => {
              var m;
              return [
                x.es.GetBroadcast(e.steamid),
                (m = x.es.GetBroadcast(e.steamid)) == null
                  ? void 0
                  : m.m_ulBroadcastID,
              ];
            }),
            c = (0, U.q3)(() => e.steamid);
          return o
            ? (0, t.jsx)("div", {
                className: (0, p.A)({
                  [n().chat_below_container]: l,
                  [n().chat_rightside_container]: !l,
                  [n().store_chat_ctn]: !0,
                }),
                children: (0, t.jsx)("div", {
                  className: n().ChatContainer,
                  children: (0, t.jsx)(at.I, {
                    emoticonStore: d.MX,
                    watchLocation: J.nn.fe,
                    steamID: c,
                    broadcastID: i,
                  }),
                }),
              })
            : null;
        }
      },
      43087: (w) => {
        w.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      96715: (w, C, r) => {
        "use strict";
        r.d(C, { A: () => t });
        const t =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      19654: (w, C, r) => {
        "use strict";
        r.d(C, { A: () => t });
        const t =
          r.p +
          "images/applications/community/reddit_large.png?v=valveisgoodatcaching";
      },
      59913: (w, C, r) => {
        "use strict";
        r.d(C, { A: () => t });
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

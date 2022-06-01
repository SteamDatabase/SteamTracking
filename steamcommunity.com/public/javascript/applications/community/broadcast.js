/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    NIbt: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "BroadcastEmbeddablePopoutHeader", function () {
          return Y;
        });
      var r = a("mrSG"),
        s = a("vDqi"),
        n = a.n(s),
        o = a("TyAF"),
        i = a("aoTL"),
        c = a("q1tI"),
        l = a.n(c),
        d = a("eN6m"),
        m = a("trWU"),
        p = a("VQ2A"),
        b = (a("sRB7"), a("b3LC")),
        _ = a("NKJh"),
        u = a("zjj+"),
        h = a("RQmk"),
        S = a("dfs5"),
        g = a("0OaU"),
        E = a("exH9"),
        v = a("lkRc"),
        O = (a("65aj"), a("dLk7")),
        f = a.n(O);
      const j = Object(o.a)((e) => {
        const { appid: t } = e,
          a = Object(S.c)(),
          r = Object(c.useRef)({ include_assets: !0, include_release: !0 }),
          [s, n] = Object(b.b)(t, r.current);
        let o = f.a.StoreSaleWidgetContainer_mini,
          i = f.a.StoreSaleWidgetImage_mini,
          d = f.a.StoreSaleImage_mini;
        if (!s && 2 != n)
          return l.a.createElement(
            "div",
            { className: o },
            l.a.createElement(g.a, { size: "medium" }),
            ";"
          );
        if (2 == n || !s.GetName())
          return l.a.createElement("div", {
            className: _.StoreSaleWidgetEmptyContainer,
          });
        const m = 8 != s.GetAppType(),
          O = Object(p.b)(s.GetStorePageURL(), a);
        return l.a.createElement(
          "div",
          { className: o },
          l.a.createElement(
            "div",
            { className: _.Actions },
            l.a.createElement(
              "a",
              { href: O, target: v.c.IN_CLIENT ? void 0 : "_blank" },
              l.a.createElement(
                h.b,
                { type: "app", id: t },
                l.a.createElement(
                  "div",
                  { className: i },
                  l.a.createElement("img", {
                    className: d,
                    src: s.GetAssets().GetSmallCapsuleURL(),
                  })
                )
              )
            )
          ),
          l.a.createElement(
            "div",
            { className: _.StoreSaleBroadcastWidgetRight },
            l.a.createElement(
              "div",
              { className: _.Actions },
              l.a.createElement(
                "a",
                { href: O, target: v.c.IN_CLIENT ? void 0 : "_blank" },
                l.a.createElement(
                  h.b,
                  { type: "app", id: t },
                  l.a.createElement(
                    "div",
                    {
                      className: Object(E.a)(
                        _.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle"
                      ),
                    },
                    s.GetName()
                  )
                )
              )
            ),
            l.a.createElement(
              "div",
              { className: _.StoreSaleWidgetRelease },
              s.GetFormattedSteamReleaseDate()
            ),
            Boolean(m) &&
              l.a.createElement(u.c, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      var C = a("ROjt"),
        I = (a("kdZy"), a("wogL"), a("1BdX")),
        N = a("boaH"),
        B = a("nWbB"),
        P = (a("Bniq"), a("5L1o")),
        y = a("02Wr"),
        G = a("MnIK"),
        A = a("6Y59"),
        w = a("d+Me"),
        D = a("TLQK"),
        k = a("opsS"),
        L = (a("pKbv"), a("kLLr")),
        T = (a("3+zv"), a("uIWk")),
        x = a("rKv1"),
        R = a.n(x);
      const W = Object(o.a)((e) => {
        const { event: t } = e,
          a = t.clanSteamID.GetAccountID(),
          s = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          o = Object(c.useRef)(null),
          [i, d] = Object(c.useState)(
            t ? T.a.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          (Object(c.useEffect)(() => {
            const e = n.a.CancelToken.source();
            o.current = e.cancel;
            return (
              Object(r.a)(void 0, void 0, void 0, function* () {
                const t = L.a.InitFromClanID(a),
                  r = yield T.a.LoadCreatorHome(t, e);
                e.token.reason || d(r);
              }),
              () => {
                o.current && o.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [a]),
          s || !i || !i.BIsLoaded())
        )
          return null;
        const m =
          v.c.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.a.createElement(
          "div",
          { className: R.a.item_drop_ctn },
          l.a.createElement(
            "div",
            null,
            Object(D.f)(
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
              l.a.createElement(
                "a",
                { href: m, target: v.c.IN_CLIENT ? "" : "_blank" },
                Object(D.f)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var V,
        U = a("C4Nl"),
        M = a("hKFG"),
        H = a("S6U1"),
        F = (a("3u1e"), a("mgoM"));
      const K = {
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
            broadcasterAccountID: 161065804,
          },
        ],
      };
      let q = (V = class extends l.a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = n.a.CancelToken.source()),
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
        static IsBroadcastAllowed() {
          return v.c.EREALM != C.b.k_ESteamRealmChina && !v.c.IN_GAMEPADUI;
        }
        componentDidMount() {
          return Object(r.a)(this, void 0, void 0, function* () {
            V.IsBroadcastAllowed() &&
              (Object(M.a)(null),
              yield B.a
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !B.a
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: B.a
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
                ? B.a.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : B.a.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (B.a
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
              }, 10));
          });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = B.a.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            a = N.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          Object(B.e)(a, t ? 2 : 3, e.snr),
            t && Object(H.a)() && Object(H.a)().AddEvent(1005),
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
                B.a.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              B.a.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              B.a.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield B.a.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return Object(r.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = B.a
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            Object(B.f)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield B.a
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
          const r = B.a.Get().GetConcurrentStreams(this.props) > 1;
          let s = N.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            n = l.a.createElement(
              "div",
              { className: R.a.rightPanel },
              l.a.createElement(J, { key: "right" + s, ImgUrl: e.right_panel })
            ),
            o = l.a.createElement(J, { key: "left" + s, ImgUrl: e.left_panel });
          if (s < 11) {
            const t = I.b.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (s = t[0]);
          }
          return (
            !(
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
              s >= 11
            ) ||
              (this.props.event &&
                this.props.event.jsondata.broadcast_force_banner) ||
              ((n = l.a.createElement(j, {
                key: "mini" + e.accountid,
                appid: s,
              })),
              (a.bRightPanelArtworkOrEmpty = !1)),
            r && !t
              ? ((a.leftPanel = l.a.createElement(Z, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + s,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (a.rightPanel = n))
              : t
              ? ((a.leftPanel = l.a.createElement("div", null)),
                (a.rightPanel = l.a.createElement(te, {
                  stream: e,
                  orientation: "rightside",
                })),
                (a.bRightPanelArtworkOrEmpty = !1))
              : ((a.leftPanel = o), (a.rightPanel = n)),
            a
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0),
            Object(H.a)() && Object(H.a)().AddEvent(1004));
        }
        render() {
          if (!V.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = B.a.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === B.a.Get().GetChatVisibility();
            const {
              event: a,
              language: r,
              fnRenderBroadcastContext: s,
            } = this.props;
            a &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: a.GetImageURL(
                  "broadcast_left",
                  r || Object(F.d)(v.c.LANGUAGE)
                ),
                right_panel: a.GetImageURL(
                  "broadcast_right",
                  r || Object(F.d)(v.c.LANGUAGE)
                ),
                store_title: a.GetBroadcastTitle(
                  r || Object(F.d)(v.c.LANGUAGE)
                ),
                broadcast_chat_visibility: a.GetBroadcastChatVisibility(),
              }));
            let n = this.ConstructSidePanels(e, t),
              o = e.store_title ? e.store_title : e.title,
              i = B.a.Get().GetConcurrentStreams(this.props) > 1;
            const c = () => {
              var t, a;
              e.nAppIDVOD && this.PlayTopNonVOD(),
                null === (a = (t = this.props).fnOnVideoEnd) ||
                  void 0 === a ||
                  a.call(t);
            };
            a && a.jsondata && a.jsondata.broadcast_gradient_inner_color,
              a && a.jsondata && a.jsondata.broadcast_gradient_outer_color;
            return l.a.createElement(
              l.a.Fragment,
              null,
              l.a.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                l.a.createElement(
                  "div",
                  {
                    className: Object(E.a)({
                      [R.a.bordered_container]: !0,
                      [R.a.Event]: Boolean(a),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  l.a.createElement(
                    "div",
                    {
                      className: Object(E.a)(
                        R.a.bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    l.a.createElement(P.h, null),
                    o,
                    l.a.createElement(
                      "div",
                      { className: R.a.bordered_corner_container },
                      !this.state.bExpanded &&
                        l.a.createElement("div", {
                          className: R.a.broadcast_settings_icon,
                          "data-tooltip-text": Object(D.f)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${v.c.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      l.a.createElement("div", {
                        className: this.state.bExpanded
                          ? R.a.bordered_corner_expanded
                          : R.a.bordered_corner_shrinked,
                        "data-tooltip-text": Object(D.f)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      l.a.createElement(
                        "div",
                        { className: R.a.bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    l.a.createElement(
                      "div",
                      {
                        className: Object(E.a)({
                          [R.a.container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: i,
                          broadcast_right_panel_simple:
                            n.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      n.leftPanel,
                      l.a.createElement(z, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: s,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      n.rightPanel,
                      this.state.bExpanded &&
                        l.a.createElement(Q, { stream: e, bMultistream: i })
                    )
                ),
                Boolean(
                  a && a.jsondata && a.jsondata.broadcast_item_drops_enabled
                ) && l.a.createElement(W, { event: a }),
                this.state.bExpanded &&
                  l.a.createElement(
                    "div",
                    { className: `${a ? R.a.Event : ""}` },
                    l.a.createElement(Q, { stream: e, bMultistream: i })
                  ),
                l.a.createElement("div", { className: R.a.clear_div })
              )
            );
          }
          return l.a.createElement("div", {
            className: "NoBroadcastAvailable",
          });
        }
      });
      Object(r.b)([k.b], q.prototype, "ToggleBroadcastExpandShrink", null),
        Object(r.b)([k.b], q.prototype, "OnShrinkTransitionEnd", null),
        Object(r.b)([k.b], q.prototype, "onStreamSelect", null),
        Object(r.b)([k.b], q.prototype, "PlayTopNonVOD", null),
        (q = V = Object(r.b)([o.a], q));
      t.default = q;
      class z extends l.a.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = l.a.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = N.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          Object(B.e)(e, 7, this.props.stream.snr),
            Object(H.a)() && Object(H.a)().AddEvent(1006),
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
          return l.a.createElement(
            "div",
            { className: R.a.wrapper },
            l.a.createElement(
              w.a,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              l.a.createElement(
                "div",
                {
                  className: Object(E.a)({
                    [R.a.video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [R.a.WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                l.a.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? R.a.broadcast_floating
                      : R.a.video_container,
                  },
                  this.state.bPopout &&
                    l.a.createElement(Y, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  l.a.createElement(
                    "div",
                    { className: R.a.BroadcastPlayerContainer },
                    l.a.createElement(m.default, {
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
      Object(r.b)([k.b], z.prototype, "CloseBroadcastPopup", null),
        Object(r.b)([k.b], z.prototype, "OnEnter", null),
        Object(r.b)([k.b], z.prototype, "OnLeave", null);
      let Q = class extends l.a.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = N.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          let a = K.list.find(
            (a) =>
              a.appid == t &&
              (!a.broadcasterAccountID || a.broadcasterAccountID == e.accountid)
          );
          if (a) {
            let e = a.url;
            return (
              (v.c.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (e = "steam://openurl/" + e),
              l.a.createElement(
                "a",
                { href: e },
                Object(D.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
              )
            );
          }
          {
            let e = this.props.stream.steamid,
              t = v.c.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return l.a.createElement(
              "a",
              {
                href: t,
                className: R.a.external_link,
                "data-tooltip-text": Object(D.f)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              l.a.createElement(A.z, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = N.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          Object(B.e)(
            t,
            "show" === B.a.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            B.a.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = N.a.GetOrCreateBroadcastInfo(
            this.props.stream.steamid
          ).m_nAppID;
          Object(B.e)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != B.a.Get().GetChatVisibility(),
            a = "hide" === B.a.Get().GetChatVisibility();
          let r = Number.parseInt(
            "" +
              N.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return l.a.createElement(
            "div",
            { className: Object(E.a)(R.a.viewer_bar, "viewer_bar") },
            l.a.createElement(
              "div",
              { className: Object(E.a)(R.a.viewer_count, "viewer_count") },
              l.a.createElement(A.wb, null),
              r.toLocaleString(D.e.GetPreferredLocales())
            ),
            l.a.createElement(
              "div",
              { className: Object(E.a)(R.a.viewer_links, "viewer_links") },
              Boolean(t && !a && this.props.bMultistream) &&
                l.a.createElement(
                  "div",
                  { className: R.a.chat_link },
                  l.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: R.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(D.f)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                l.a.createElement(
                  "div",
                  { className: R.a.chat_link },
                  l.a.createElement(A.l, null),
                  l.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: R.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(D.f)(
                      a
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && l.a.createElement("span", { className: R.a.ChatToggle }),
              l.a.createElement(
                "a",
                {
                  href:
                    v.c.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: v.c.IN_CLIENT ? void 0 : "_blank",
                  className: R.a.settings_link,
                  "data-tooltip-text": Object(D.f)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                l.a.createElement(A.bb, null)
              ),
              e
            )
          );
        }
      };
      Object(r.b)([k.b], Q.prototype, "OnToggleChat", null),
        Object(r.b)([k.b], Q.prototype, "onWatchBroadcastPage", null),
        (Q = Object(r.b)([o.a], Q));
      class J extends l.a.Component {
        render() {
          let e = this.props.ImgUrl;
          return l.a.createElement(
            l.a.Fragment,
            null,
            e &&
              l.a.createElement("img", {
                className: R.a.side_panels,
                src: this.props.ImgUrl,
              }),
            !e && l.a.createElement("div", { className: R.a.side_panels })
          );
        }
      }
      const Y = Object(o.a)((e) => {
        const { steamIDBroadcast: t } = e,
          a = N.a.GetOrCreateBroadcastInfo(t).m_nAppID,
          [r] = Object(b.b)(a, {});
        return l.a.createElement(
          "div",
          { className: [R.a.PopOutVideoTitleBar, R.a.NoSeslect].join(" ") },
          Boolean(r)
            ? l.a.createElement(
                h.a,
                { type: "app", id: a, className: R.a.PopOutVideoTitleText },
                Object(D.f)("#StoreBroadcast_Detault_popout_Title")
              )
            : l.a.createElement(
                "div",
                { className: R.a.PopOutVideoTitleText },
                Object(D.f)("#StoreBroadcast_Detault_popout_Title")
              ),
          l.a.createElement(
            "button",
            {
              className: R.a.PopOutVideoCloseButton,
              "data-tooltip-text": Object(D.f)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            l.a.createElement(A.Ab, null)
          )
        );
      });
      function X(e, t) {
        var a;
        const r = N.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          s = U.a.Get().GetApp(r);
        return e &&
          (null === (a = null == s ? void 0 : s.GetAssets()) || void 0 === a
            ? void 0
            : a.GetHeaderURL())
          ? parseInt(R.a.strStreamIconCapsuleArtHeight)
          : parseInt(R.a.strStreamIconScreenshotArtHeight);
      }
      function Z(e) {
        const {
            curStream: t,
            onStreamSelect: a,
            fnFilterStreams: r,
            bShowCapsuleArt: s,
            broadcastEmbedContext: n,
          } = e,
          o = Object(c.useRef)(),
          i = Object(c.useMemo)(() => {
            const e = B.a
              .Get()
              .GetStreams(n)
              .filter((e) => !r || r(e));
            return Object(B.f)(e), e;
          }, [n, r]);
        return (
          Object(c.useEffect)(() => {
            if (o && o.current) {
              const e = i
                .map((e) => N.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              U.a
                .Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (o.current) {
                    let e = 0;
                    for (const a of i) {
                      if (t.accountid == a.accountid) break;
                      e += X(s, a);
                    }
                    o.current.scrollTop = e;
                  }
                });
            }
          }, [i, s, t.accountid, o]),
          l.a.createElement(
            "div",
            {
              ref: o,
              className: Object(E.a)({
                [R.a.side_panels]: !0,
                side_panels: !0,
                [R.a.multistream]: !0,
                [R.a.scrollingstreams]: i.length > 3,
              }),
            },
            i.map((e) => {
              var r;
              return l.a.createElement($, {
                key: null !== (r = e.accountid) && void 0 !== r ? r : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: a,
                bShowCapsuleArt: s,
              });
            })
          )
        );
      }
      function $(e) {
        var t;
        const {
            onStreamSelect: a,
            bSelected: r,
            stream: s,
            bShowCapsuleArt: n,
          } = e,
          o = Object(i.d)(
            () => N.a.GetOrCreateBroadcastInfo(s.steamid).m_nAppID
          ),
          [c] = Object(b.b)(
            null !== (t = s.nAppIDVOD) && void 0 !== t ? t : o,
            { include_assets: !0 }
          );
        if (!Object(B.d)(s)) return null;
        const d = n && (null == c ? void 0 : c.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + s.viewer_count),
          p = !Number.isNaN(m),
          _ = !!s.nAppIDVOD && (null == c ? void 0 : c.GetName());
        return l.a.createElement(
          "div",
          {
            className: Object(E.a)({
              [R.a.stream_icon_and_viewer_container]: !0,
              [R.a.stream_featured]:
                s.current_selection_priority == B.b.k_eFeatured,
              [R.a.display_capsule_art]: Boolean(d),
            }),
          },
          l.a.createElement(
            h.b,
            { type: "app", id: o },
            l.a.createElement(
              G.a,
              {
                className: R.a.stream_icon_container,
                onClick: () => a && a(s),
                rootMargin: "100px 0px 100px 0px",
              },
              l.a.createElement(ee, {
                strThumbnail: s.thumbnail_http_address,
                bSelected: r,
                strCapsuleArtURL: d,
              }),
              r &&
                l.a.createElement("div", { className: R.a.stream_icon_arrow })
            )
          ),
          l.a.createElement(
            "div",
            { className: Object(E.a)(R.a.viewer_count, !p && R.a.vod_title) },
            p
              ? l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(A.wb, null),
                  " ",
                  m.toLocaleString(D.e.GetPreferredLocales())
                )
              : _
          )
        );
      }
      function ee(e) {
        const { strCapsuleArtURL: t, strThumbnail: a, bSelected: r } = e,
          s = r ? R.a.stream_icon_selected : R.a.stream_icon;
        if (t) {
          const e = [t];
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement("img", {
              className: Object(E.a)(s, R.a.stream_icon_hide_on_hover),
              src: t,
            }),
            l.a.createElement(y.b, {
              className: Object(E.a)(s, R.a.stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return l.a.createElement("img", { className: s, src: a });
      }
      function te(e) {
        const { stream: t, orientation: a } = e,
          r = "below" == a,
          s = Object(i.d)(() => N.a.GetBroadcast(t.steamid));
        return s
          ? l.a.createElement(
              "div",
              {
                className: Object(E.a)({
                  [R.a.chat_below_container]: r,
                  [R.a.chat_rightside_container]: !r,
                  [R.a.store_chat_ctn]: !0,
                }),
              },
              l.a.createElement(
                "div",
                { className: R.a.ChatContainer },
                l.a.createElement(d.a, {
                  emoticonStore: B.g,
                  watchLocation: 6,
                  steamID: t.steamid,
                  broadcastID: s.m_ulBroadcastID,
                })
              )
            )
          : null;
      }
    },
    "d+Me": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var r = a("q1tI"),
        s = a("uuth");
      const n = (e) => {
        const { onPositionChange: t, onLeave: a } = e,
          n = r.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === s.a.above &&
                a &&
                a(e),
              t && t(e)
            ),
            [t, a]
          );
        return r.createElement(
          s.a,
          Object.assign({}, e, { onPositionChange: n })
        );
      };
    },
    dLk7: function (e, t, a) {
      e.exports = {
        StoreSaleWidgetContainer_mini:
          "broadcastwidgets_StoreSaleWidgetContainer_mini_nacWp",
        Action: "broadcastwidgets_Action_2Xpw9",
        WishList: "broadcastwidgets_WishList_3mTSE",
        StoreSaleWidgetImage_mini:
          "broadcastwidgets_StoreSaleWidgetImage_mini_yvW2h",
        StoreSaleImage_mini: "broadcastwidgets_StoreSaleImage_mini_1zSsm",
        StoreSaleWidgetShortDesc_mini:
          "broadcastwidgets_StoreSaleWidgetShortDesc_mini_2ZkfU",
      };
    },
  },
]);

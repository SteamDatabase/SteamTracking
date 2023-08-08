/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9349],
  {
    93515: (e) => {
      e.exports = {
        countdownCtn: "giveawaynextdraw_countdownCtn_awreX",
        Closed: "giveawaynextdraw_Closed_26nqf",
        CountDownCtn: "giveawaynextdraw_CountDownCtn_7do5R",
        CountDownTime: "giveawaynextdraw_CountDownTime_3wwxF",
        CountDownText: "giveawaynextdraw_CountDownText_6MmR7",
        LearnMore: "giveawaynextdraw_LearnMore_kL9GF",
        Throbber: "giveawaynextdraw_Throbber_318nd",
        WinnerInfo: "giveawaynextdraw_WinnerInfo_2iyxC",
        WinnerCount: "giveawaynextdraw_WinnerCount_2cdse",
        WinnerText: "giveawaynextdraw_WinnerText_2s2hb",
      };
    },
    99499: (e) => {
      e.exports = { DialogCtn: "partnereventstatsexport_DialogCtn_2LwQU" };
    },
    43239: (e) => {
      e.exports = {
        DisplaySectionHeaderContainer:
          "partnereventdashboard_DisplaySectionHeaderContainer_1xnIX",
        DisplaySectionHeader:
          "partnereventdashboard_DisplaySectionHeader_34f0c",
        DisplaySectionSubHeader:
          "partnereventdashboard_DisplaySectionSubHeader_23nhJ",
        DisplaySectionEmpty: "partnereventdashboard_DisplaySectionEmpty_2BmSN",
        EventDashboardDataCtn:
          "partnereventdashboard_EventDashboardDataCtn_1uPNG",
        LoadMoreEventsCtn: "partnereventdashboard_LoadMoreEventsCtn_2asU2",
        EventDashboardCtn: "partnereventdashboard_EventDashboardCtn_2WqPr",
        EventDashAdminToolsCtn:
          "partnereventdashboard_EventDashAdminToolsCtn_1OMO4",
        EventDashboardSearchCtn:
          "partnereventdashboard_EventDashboardSearchCtn_2Xt1O",
        MainLists: "partnereventdashboard_MainLists_2Yhqn",
        ManageButton: "partnereventdashboard_ManageButton_230VZ",
        Edit: "partnereventdashboard_Edit_pvLmX",
        Delete: "partnereventdashboard_Delete_9SG7g",
        Clone: "partnereventdashboard_Clone_21_l8",
        View: "partnereventdashboard_View_3xhNU",
        Publish: "partnereventdashboard_Publish_2ewSq",
        Section: "partnereventdashboard_Section_16BNV",
        Unpublished: "partnereventdashboard_Unpublished_2MUzv",
      };
    },
    95837: (e) => {
      e.exports = {
        TileContainer: "partnereventtile_TileContainer_1eeyC",
        ShowEventMetaDataSizes: "partnereventtile_ShowEventMetaDataSizes_EU0bQ",
        EventStateUpcoming: "partnereventtile_EventStateUpcoming_qfpNt",
        EventStateActive: "partnereventtile_EventStateActive_3F1Bj",
        EventStateRecent: "partnereventtile_EventStateRecent_2ge3p",
        TileStats: "partnereventtile_TileStats_GZhwe",
        Spacer: "partnereventtile_Spacer_Lux3q",
        TileImageCtn: "partnereventtile_TileImageCtn_1vi2y",
        TileImage: "partnereventtile_TileImage_5NjHV",
        TileTextContainer: "partnereventtile_TileTextContainer_31yes",
        TileTextAppName: "partnereventtile_TileTextAppName_3x6bH",
        TileTextEventType: "partnereventtile_TileTextEventType_2DMSl",
        TileHasSale: "partnereventtile_TileHasSale_1trq1",
        TileTextStartsIn: "partnereventtile_TileTextStartsIn_3jRSO",
        TileTextSubTitle: "partnereventtile_TileTextSubTitle_3Sc1E",
        TileDescriptionContainer:
          "partnereventtile_TileDescriptionContainer_2yxWD",
        TileButtonContainer: "partnereventtile_TileButtonContainer_1JNbD",
        TileAgeNotAppropriate: "partnereventtile_TileAgeNotAppropriate_1EyzX",
        ManageButton: "partnereventtile_ManageButton_60Iyt",
        Edit: "partnereventtile_Edit_2h3Yf",
        Delete: "partnereventtile_Delete_8zmLU",
        Clone: "partnereventtile_Clone_1QJ8I",
        View: "partnereventtile_View_1IvY3",
        Publish: "partnereventtile_Publish_1szIu",
        CloneLangAlert: "partnereventtile_CloneLangAlert_2U-5y",
        CloneLangListCtn: "partnereventtile_CloneLangListCtn_3Nj5x",
        CloneCheckBox: "partnereventtile_CloneCheckBox_28WRJ",
        MetaDataCtn: "partnereventtile_MetaDataCtn_3EXNJ",
      };
    },
    61557: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => D, q: () => b });
      var a = n(33940),
        r = n(89526),
        i = n(88464),
        l = n(32765),
        o = n(46132),
        s = n(47165),
        c = n(14482),
        d = n(13394),
        m = n(73846),
        u = n(51059),
        v = n(96798),
        E = n(49234),
        p = n(52316),
        _ = n(17547),
        h = n(91970),
        g = n(74314);
      let S = class extends r.Component {
        constructor() {
          super(...arguments), (this.m_clanSteamID = new s.K(l.JA.CLANSTEAMID));
        }
        componentDidMount() {
          d.wk.GetEditModel() &&
            "view" === this.props.mode &&
            d.wk.GetEditModel().ClearDirty();
        }
        componentDidUpdate(e) {
          d.wk.GetEditModel() &&
            "view" === this.props.mode &&
            d.wk.GetEditModel().ClearDirty();
        }
        render() {
          const { mode: e } = this.props;
          if ("view" === e) {
            let e = d.wk.GetEditModel().GetEventModel(),
              t = (0, o.jM)(l.De.LANGUAGE);
            return e.BHasSaleEnabled()
              ? r.createElement(
                  _.SV,
                  null,
                  r.createElement(h.oS, {
                    eventModel: e,
                    bIsPreview: !0,
                    language: t,
                  }),
                )
              : r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(c.TY, {
                    event: e,
                    lang: t,
                    partnerEventStore: d.wk,
                    emoticonStore: p.F,
                    adminPanel: r.createElement(v.H, {
                      eventModel: e,
                      partnerEventStore: d.wk,
                    }),
                    otherEventRow: r.createElement(E._G, {
                      clanAccountID: e.clanSteamID.GetAccountID(),
                      trackingLocation: 6,
                      gidAnnouncement: e.AnnouncementGID,
                      partnerEventStore: d.wk,
                      bViewAllShowInfiniteScroll: !e.BIsOGGEvent(),
                    }),
                  }),
                );
          }
          return r.createElement(m.H, {
            editModel: d.wk.GetEditModel(),
            appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
            gid: this.props.match.params.gid,
            bDisplaySale: "previewsale" === e,
          });
        }
      };
      S = (0, a.gn)([i.Pi], S);
      const b = (0, u.M)(S),
        D = (e) =>
          r.createElement(
            g.R0,
            Object.assign({}, e, {
              key: e.match.params.oldAnnouncementGID,
              bClearDirty: !0,
              bPreview: !1,
              bPreventRedirect: !0,
            }),
          );
    },
    59365: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => vt });
      var a = n(96927),
        r = n(13394),
        i = n(59978),
        l = n(33940),
        o = n(52868),
        s = n.n(o),
        c = n(88464),
        d = n(89526),
        m = n(565),
        u = n(36611),
        v = n(81245),
        E = n(47165),
        p = n(82079),
        _ = n(6172),
        h = n(72449),
        g = n(52629),
        S = n.n(g),
        b = n(10340),
        D = n(99307),
        C = n(57742),
        y = n(3301),
        w = n(23801),
        I = n(19304),
        T = n(14826),
        x = n(23217),
        k = n(4306),
        A = n(32765),
        f = n(51059),
        M = n(43239),
        L = n.n(M),
        N = n(97567),
        G = n(46132),
        P = n(57605),
        B = n(95837);
      function O(e) {
        const { eventModel: t, fnOnGotoPage: n } = e;
        return t.bOldAnnouncement
          ? null
          : d.createElement(
              "div",
              {
                className: (0, I.Z)(B.ManageButton, B.Clone),
                onClick: (e) =>
                  (function (e, t, n) {
                    t.stopPropagation(),
                      r.wk
                        .LoadEditorModel(e.clanSteamID, e.GID)
                        .then((e) => {
                          const t = (0, N.HJ)(e, !0, !0, !0),
                            a = t.GetLanguagesWithTokens();
                          a.length > 1
                            ? (a.sort((e, t) =>
                                (0, T.Xx)(
                                  "#Language_" + (0, G.j_)(e),
                                ).localeCompare(
                                  (0, T.Xx)("#Language_" + (0, G.j_)(t)),
                                ),
                              ),
                              (0, C.AM)(
                                d.createElement(U, {
                                  langs: a,
                                  locData: t,
                                  fnOnGotoPage: n,
                                }),
                                window,
                              ))
                            : X(n, t);
                        })
                        .catch((e) => {
                          let t = (0, x.l)(e);
                          (0, C.AM)(
                            d.createElement(D.JX, {
                              strTitle: (0, T.Xx)("#EventEditor_CloneError"),
                              bAlertDialog: !0,
                              bDestructiveWarning: !0,
                              strDescription: (0, T.Xx)(
                                "#EventEditor_CloneError_Desc",
                                t.strErrorMsg,
                              ),
                            }),
                            window,
                            { strTitle: (0, T.Xx)("#EventEditor_CloneError") },
                          );
                        });
                  })(t, e, n),
              },
              (0, T.Xx)("#Button_Clone"),
            );
      }
      function X(e, t, n) {
        const a = r.wk.CreateClone();
        if (n && n.length > 0) {
          const e = t.GetLanguagesWithTokens();
          t.ClearLanguagesTokens(n),
            (a.GetEventModel().jsondata.bSaleEnabled = !0),
            (0, N.XS)(a, t, e),
            (a.GetEventModel().jsondata.bSaleEnabled = !1);
        }
        e(null, "clone");
      }
      function U(e) {
        const { langs: t, locData: n, closeModal: a, fnOnGotoPage: r } = e,
          i = (0, G.jM)(A.De.LANGUAGE),
          [l, o] = d.useState(new Set(t.filter((e) => e != i)));
        return d.createElement(
          D.uH,
          {
            strTitle: (0, T.Xx)("#Button_Clone"),
            onOK: () => X(r, n, Array.from(l)),
            strDescription: (0, T.Xx)("#EventEditor_Clone_MultiLanguages"),
            closeModal: a,
          },
          d.createElement(
            "div",
            { className: B.CloneLangAlert },
            (0, T.Xx)("#EventEditor_Clone_Alert"),
          ),
          d.createElement(
            "div",
            { className: B.CloneLangListCtn },
            t.map((e) =>
              d.createElement(P.ji, {
                key: e,
                className: B.CloneCheckBox,
                onChange: (t) => {
                  const n = new Set(l);
                  t ? n.delete(e) : n.add(e), o(n);
                },
                label: (0, T.Xx)("#Language_" + (0, G.j_)(e)),
                checked: !l.has(e),
              }),
            ),
          ),
          d.createElement(
            P.zx,
            { onClick: () => o(new Set()) },
            (0, T.Xx)("#EventEditor_Clone_SelectAll"),
          ),
          d.createElement(
            P.zx,
            { onClick: () => o(new Set(t)) },
            (0, T.Xx)("#EventEditor_Clone_DeSelectAll"),
          ),
        );
      }
      var W = n(35809),
        V = n(59934),
        R = n(85651),
        j = n(43707),
        H = n(17547),
        F = n(52932),
        z = n(20790),
        q = n(54297),
        Q = n(21904),
        J = n(9943),
        Z = n(60161),
        K = n(73406),
        Y = n(16785);
      let $ = class extends d.Component {
        constructor(e) {
          super(e),
            (this.bRedirectUsed = !1),
            (this.state = { redirectTarget: null, bDeleting: !1 });
        }
        OnFallbackClick(e) {
          e.target instanceof HTMLButtonElement ||
            e.target instanceof HTMLAnchorElement ||
            this.OnGotoPage(e, "edit");
        }
        OnGotoPage(e, t) {
          (this.bRedirectUsed = !1),
            this.setState({ redirectTarget: t }),
            e && e.stopPropagation();
        }
        OnIgnoreFallbackClick(e) {
          e.stopPropagation();
        }
        render() {
          var e;
          const {
            eventModel: t,
            appid_or_vanity_str: n,
            bShowGameName: r,
            bShowEventMetaDataSizes: i,
          } = this.props;
          let l = t.GID,
            o = t.bOldAnnouncement;
          if (this.state.redirectTarget && !this.bRedirectUsed)
            switch (((this.bRedirectUsed = !0), this.state.redirectTarget)) {
              case "clone":
                return d.createElement(V.l_, {
                  push: !0,
                  to: a.rQ.Edit(n, ""),
                });
              case "edit":
                return (0, z.Ij)(this.props.eventModel, z.Ue.k_eCommunityEdit);
              case "view":
                return t.BIsVisibleEvent()
                  ? (0, z.Ij)(this.props.eventModel, z.Ue.k_eView)
                  : (0, z.Ij)(this.props.eventModel, z.Ue.k_eCommunityPreview);
              default:
                console.log(
                  "EventDisplayTile - Unexpected Case - " +
                    this.state.redirectTarget,
                );
            }
          let s = (0, G.jM)(A.De.LANGUAGE);
          t.BIsLanguageValidForRealms(s) || (s = t.BInRealmGlobal() ? 0 : 29);
          let c,
            m,
            u = [t.GetImageURLWithFallback("capsule", s)],
            E = t.GetNameWithFallback(s),
            h = t.BHasSubTitle(s),
            S = t.BHasSaleEnabled(),
            b = t.visibility_state != v.ac.k_EEventStateUnpublished,
            D = t.visibility_state != v.ac.k_EEventStateVisible;
          if (
            (D &&
              b &&
              (c =
                t.visibilityStartTime == t.startTime
                  ? d.createElement(
                      "div",
                      { className: B.TileTextStartsIn },
                      (0, T.Xx)("#EventEditor_Status_WillBeVisible_EventStart"),
                    )
                  : d.createElement(
                      "div",
                      { className: B.TileTextStartsIn },
                      (0, T.kQ)(
                        "#EventEditor_Status_WillBeVisible_At",
                        d.createElement(Q.H6, {
                          dateAndTime:
                            t.GetVisibilityStartTimeAndDateUnixSeconds(),
                          bSingleLine: !0,
                        }),
                      ),
                    )),
            !D && b)
          ) {
            let e = R.JW.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: B.EventStateUpcoming },
                  (0, T.Xx)("#EventDisplay_Upcoming"),
                ))
              : (0, K.G1)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: B.EventStateActive },
                  (0, T.Xx)("#EventDisplay_Active"),
                ))
              : t.GetStartTimeAndDateUnixSeconds() > e + 3600 &&
                (m = d.createElement(
                  "span",
                  { className: B.EventStateRecent },
                  (0, T.Xx)("#EventDisplay_RecentlyActive"),
                ));
          }
          r &&
            (E =
              ((null === (e = j.Z.Get().GetApp(t.appid)) || void 0 === e
                ? void 0
                : e.GetName()) || "") +
              ": " +
              E);
          let C =
              t.BIsPartnerEvent() &&
              t.BIsVisibleEvent() &&
              _.h.GetStatsFor(t.clanSteamID, l),
            y = p.sV.GetOGGClanInfo(t.appid),
            w = Boolean(
              o &&
                y &&
                y.is_ogg &&
                y.clanAccountID != t.announcementClanSteamID.GetAccountID(),
            );
          return d.createElement(
            H.SV,
            null,
            d.createElement(
              "div",
              {
                className: (0, I.Z)({
                  [B.TileContainer]: !0,
                  [B.TileAgeAppropriate]: true,
                  [B.TileAgeNotAppropriate]: !1,
                  [B.ShowEventMetaDataSizes]: i,
                }),
              },
              d.createElement(
                "div",
                {
                  className: B.TileImageCtn,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(q.J, { className: B.TileImage, srcs: u }),
              ),
              d.createElement(
                "div",
                {
                  className: B.TileTextContainer,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(
                  "div",
                  { className: B.TileDescriptionContainer },
                  d.createElement(
                    "div",
                    { style: { display: "flex" } },
                    d.createElement("div", { className: B.TileTextAppName }, E),
                    d.createElement(
                      "div",
                      { className: B.TileTextEventType },
                      t.GetCategoryAsString(),
                      S &&
                        d.createElement(
                          "span",
                          { className: B.TileHasSale },
                          " | ",
                          (0, T.Xx)("#EventEditor_Status_HasSale"),
                        ),
                    ),
                  ),
                  h && !1,
                  d.createElement(
                    "div",
                    { className: g.ContainerSpaceBetween },
                    d.createElement(
                      "div",
                      { className: B.TileTextStartsIn },
                      d.createElement(Q.H6, {
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        bSingleLine: !0,
                      }),
                      m,
                      t.BHasTag("auto_rssfeed") &&
                        d.createElement(
                          d.Fragment,
                          null,
                          d.createElement("br", null),
                          d.createElement(
                            "a",
                            {
                              href:
                                A.De.STORE_BASE_URL +
                                "curator/" +
                                t.clanSteamID.GetAccountID() +
                                "/admin/manage_rss/",
                            },
                            " " + (0, T.Xx)("#EventEditor_Status_FromRSSFeed"),
                          ),
                        ),
                      d.createElement(Y.bv, {
                        eventModel: t,
                        bAllowUpdate: !1,
                      }),
                    ),
                    Boolean(C) &&
                      d.createElement(
                        "div",
                        { className: B.TileStats },
                        (0, T.kQ)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            C.m_stats.total_showm.toLocaleString(),
                          ),
                        ),
                        d.createElement("br", null),
                        (0, T.kQ)(
                          "#EventDashBoard_Summary_Tile_Read",
                          d.createElement(
                            "span",
                            null,
                            C.m_stats.total_read.toLocaleString(),
                          ),
                        ),
                      ),
                  ),
                  c,
                  w
                    ? d.createElement(
                        "div",
                        {
                          className: B.TileButtonContainer,
                          onClick: (e) => this.OnIgnoreFallbackClick(e),
                        },
                        d.createElement(
                          "div",
                          null,
                          (0, T.Xx)("#EventEditor_DataFromConnectAnnouncement"),
                        ),
                        d.createElement(
                          z.JW,
                          {
                            className: (0, I.Z)(B.ManageButton, B.Edit),
                            eventModel: t,
                            route: z.Ue.k_eView,
                          },
                          (0, T.Xx)("#Button_ViewPage"),
                        ),
                      )
                    : d.createElement(
                        ee,
                        Object.assign(
                          { fnOnGotoPage: this.OnGotoPage },
                          this.props,
                        ),
                      ),
                  i &&
                    d.createElement(
                      J.s,
                      { requireAdmin: !0, clanSteamID: t.clanSteamID },
                      d.createElement(ne, { eventModel: t }),
                    ),
                ),
              ),
            ),
          );
        }
      };
      (0, l.gn)([k.ak], $.prototype, "OnFallbackClick", null),
        (0, l.gn)([k.ak], $.prototype, "OnGotoPage", null),
        (0, l.gn)([k.ak], $.prototype, "OnIgnoreFallbackClick", null),
        ($ = (0, l.gn)([c.Pi], $));
      let ee = class extends d.Component {
        OnIgnoreFallbackClick(e) {
          e.stopPropagation();
        }
        OnPublishEvent(e) {
          e.stopPropagation();
          const { eventModel: t } = this.props;
          r.wk
            .LoadEditorModel(t.clanSteamID, t.GID)
            .then(() => {
              (0, C.AM)(
                d.createElement(W.b, {
                  editModel: r.wk.GetEditModel(),
                  OnPublishSuccess: this.OnPublishSuccess,
                }),
                window,
              );
            })
            .catch((e) => {
              let t = (0, x.l)(e);
              (0, C.AM)(
                d.createElement(D.JX, {
                  strTitle: (0, T.Xx)("#EventEditor_PublishingError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: (0, T.Xx)(
                    "#EventEditor_PublishingError_Desc",
                    t.strErrorMsg,
                  ),
                }),
                window,
                { strTitle: (0, T.Xx)("#EventEditor_PublishingError") },
              );
            });
        }
        OnPublishSuccess() {
          this.setState({ redirectTarget: "view" });
        }
        StopPropagation(e) {
          e.stopPropagation();
        }
        OnDeleteClickAndVerify(e) {
          e.stopPropagation(),
            (0, C.AM)(
              d.createElement(F.n, {
                eventModel: this.props.eventModel,
                partnerEventStore: r.wk,
              }),
              (0, Z.RA)(e),
            );
        }
        render() {
          const { eventModel: e, fnOnGotoPage: t } = this.props;
          let n = e.bOldAnnouncement,
            a = e.visibility_state != v.ac.k_EEventStateVisible,
            r = e.visibility_state != v.ac.k_EEventStateUnpublished;
          return d.createElement(
            "div",
            {
              className: B.TileButtonContainer,
              onClick: (e) => this.OnIgnoreFallbackClick(e),
            },
            !n &&
              d.createElement(
                z.JW,
                {
                  className: (0, I.Z)(B.ManageButton, B.Edit),
                  eventModel: e,
                  route: z.Ue.k_eCommunityEdit,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#Button_Edit"),
              ),
            n &&
              d.createElement(
                z.JW,
                {
                  className: (0, I.Z)(B.ManageButton, B.Edit),
                  "data-tooltip-text": (0, T.Xx)(
                    "#EventEditor_Button_MigrateAndEdit_Announcement_ttip",
                  ),
                  eventModel: e,
                  route: z.Ue.k_eCommunityMigrate,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#EventEditor_Button_MigrateAndEdit"),
              ),
            a &&
              d.createElement(
                z.JW,
                {
                  className: (0, I.Z)(B.ManageButton, B.View),
                  "data-tooltip-text": (0, T.Xx)(
                    "#EventEditor_Button_PreviewButton_ttip",
                  ),
                  eventModel: e,
                  route: z.Ue.k_eCommunityPreview,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#EventDisplay_Preview"),
              ),
            !a &&
              d.createElement(
                z.JW,
                {
                  className: (0, I.Z)(B.ManageButton, B.View),
                  eventModel: e,
                  route: z.Ue.k_eView,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#EventDisplay_View"),
              ),
            !r &&
              !n &&
              d.createElement(
                "div",
                {
                  className: (0, I.Z)(B.ManageButton, B.Publish),
                  onClick: this.OnPublishEvent,
                },
                (0, T.Xx)("#EventDisplay_Publish"),
              ),
            d.createElement("div", { className: B.Spacer }, " "),
            d.createElement(O, { eventModel: e, fnOnGotoPage: t }),
            d.createElement(
              "div",
              {
                className: (0, I.Z)(B.ManageButton, B.Delete),
                "data-tooltip-text": (0, T.Xx)(
                  "#EventEditor_Button_DeleteButton_ttip",
                ),
                onClick: this.OnDeleteClickAndVerify,
              },
              (0, T.Xx)("#Button_Delete"),
            ),
          );
        }
      };
      function te(e, t) {
        if (!e || t <= 0) return [];
        const n = new Array();
        return (
          Object.keys(e).forEach((a) => {
            var r;
            const i = e[a],
              l =
                (null === (r = JSON.stringify(i)) || void 0 === r
                  ? void 0
                  : r.length) || 0;
            n.push({ key: a, size: l }),
              i &&
                "object" == typeof i &&
                l > 100 &&
                te(i, t - 1).forEach((e) => {
                  n.push({ key: a + ":" + e.key, size: e.size });
                });
          }),
          n
        );
      }
      (0, l.gn)([k.ak], ee.prototype, "OnIgnoreFallbackClick", null),
        (0, l.gn)([k.ak], ee.prototype, "OnPublishEvent", null),
        (0, l.gn)([k.ak], ee.prototype, "OnPublishSuccess", null),
        (0, l.gn)([k.ak], ee.prototype, "StopPropagation", null),
        (0, l.gn)([k.ak], ee.prototype, "OnDeleteClickAndVerify", null),
        (ee = (0, l.gn)([c.Pi], ee));
      const ne = (e) => {
        var t, n;
        const { eventModel: a } = e;
        if (!(null == a ? void 0 : a.jsondata)) return null;
        const r = te(a.jsondata, 3);
        r.sort((e, t) => t.size - e.size);
        return d.createElement(
          "div",
          { className: B.MetaDataCtn },
          d.createElement(
            "div",
            null,
            "Total Size: ",
            null ===
              (n =
                null === (t = JSON.stringify(a.jsondata)) || void 0 === t
                  ? void 0
                  : t.length) || void 0 === n
              ? void 0
              : n.toLocaleString(),
          ),
          r
            .slice(0, 10)
            .map((e) =>
              d.createElement(
                "div",
                { key: e.key },
                e.key,
                ": ",
                e.size.toLocaleString(),
              ),
            ),
        );
      };
      var ae = n(91666),
        re = n(57681);
      const ie = (e) => {
          const { closeModal: t } = e,
            n = (0, ae.V)(A.JA.CLANACCOUNTID);
          return d.createElement(
            D.uH,
            {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
            },
            Boolean(null == n)
              ? d.createElement(y.V, {
                  string: (0, T.Xx)("#Loading"),
                  position: "center",
                  size: "medium",
                })
              : Boolean(0 == n.length)
              ? d.createElement("div", null, "No Publishing History available")
              : n.map((e) =>
                  d.createElement(le, { key: e.clan_event_gid, record: e }),
                ),
          );
        },
        le = (e) => {
          var t;
          const { record: n } = e;
          return d.createElement(
            "div",
            null,
            d.createElement("div", null, "Clan Event GID: ", n.clan_event_gid),
            d.createElement("div", null, "Type: ", (0, K.Sq)(n.event_type)),
            d.createElement(
              "div",
              null,
              "Publish Time: ",
              d.createElement(Q.H6, {
                dateAndTime: n.publish_time,
                bSingleLine: !0,
              }),
            ),
            d.createElement(
              "div",
              null,
              d.createElement(re.K, {
                accountID: n.publish_account_id,
                locToken: "#EventDashbard_PublishingAccount",
              }),
            ),
            d.createElement(
              "div",
              null,
              "tags: ",
              null === (t = n.tags) || void 0 === t ? void 0 : t.join(", "),
            ),
            d.createElement("hr", null),
          );
        };
      var oe = n(10412),
        se = n(82971),
        ce = n(15254),
        de = n(25508),
        me = n(99499),
        ue = n.n(me);
      function ve(e) {
        const { clanInfo: t, closeModal: n } = e,
          [a, r] = d.useState(!0),
          [i, o] = d.useState(!0),
          c = 1063339200,
          m = R.JW.GetTimeNowWithOverride(),
          [u, v] = d.useState(m - de._H.PerMonth),
          [E, p] = d.useState(m),
          [h, g] = d.useState(-1),
          S = h >= 0;
        return d.createElement(
          D.uH,
          {
            strTitle: (0, T.Xx)("#EventDashboard_Stats_title"),
            strDescription: (0, T.Xx)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: S,
            onOK: () =>
              (function (e, t, n, a) {
                return (0, l.mG)(this, void 0, void 0, function* () {
                  const r = new Array(),
                    i = s().CancelToken.source();
                  let l = 0;
                  a(l);
                  const o = 100;
                  let c,
                    d = 0,
                    m = new Array();
                  const u = (0, G.jM)(A.De.LANGUAGE);
                  do {
                    if (
                      ((d += 1),
                      (m = yield oe.j1.LoadAdjacentPartnerEvents(
                        c,
                        e.clanSteamID,
                        void 0,
                        0,
                        o,
                        { rtime_oldestevent: t },
                        i,
                      )),
                      (null == m ? void 0 : m.length) > 0)
                    ) {
                      (l += m.length), a(l), (c = m[m.length - 1].GID);
                      const t = m
                        .filter((e) => e.startTime <= n && e.BIsVisibleEvent())
                        .map((e) => e.GID);
                      t.length > 0 &&
                        (yield _.h.LoadStatsForEvents(e.clanSteamID, t, i),
                        (l += t.length),
                        a(l),
                        t.forEach((t) => {
                          const n = _.h.GetStatsFor(e.clanSteamID, t),
                            a = oe.j1.GetClanEventModel(t);
                          r.push(
                            Object.assign(
                              Object.assign(
                                { event_name: a.GetNameWithFallback(u) },
                                n.m_stats,
                              ),
                              { event_gid: "'" + t },
                            ),
                          );
                        }));
                    }
                  } while (m.length == o && d < 100);
                  return (
                    ce.K.WriteCSVToFile(
                      r,
                      "event_stats_" +
                        e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                        ".csv",
                    ),
                    !0
                  );
                });
              })(t, a ? c : u, i ? Number.MAX_SAFE_INTEGER : E, g).then(() =>
                n(),
              ),
          },
          d.createElement(
            "div",
            { className: ue().DialogCtn },
            d.createElement(
              "div",
              { className: "DialogLabel" },
              (0, T.Xx)("#EventDashboard_Stats_Oldest_Title"),
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(P.ji, {
                label: (0, T.Xx)("#EventDashboard_Stats_Oldest"),
                onChange: r,
                checked: a,
                disabled: S,
              }),
              !a &&
                d.createElement(
                  "div",
                  null,
                  (0, T.Xx)("#EventDashboard_Stats_Oldest_Override"),
                  d.createElement(se.A, {
                    nEarliestTime: c,
                    nLatestTime: i ? void 0 : E,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => u,
                    fnSetTimeToUpdate: v,
                    disabled: S,
                  }),
                ),
            ),
            d.createElement(
              "div",
              { className: "DialogLabel" },
              (0, T.Xx)("#EventDashboard_Stats_Newest_Title"),
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(P.ji, {
                label: (0, T.Xx)("#EventDashboard_Stats_Newest"),
                onChange: o,
                checked: i,
                disabled: S,
              }),
              !i &&
                d.createElement(
                  "div",
                  null,
                  (0, T.Xx)("#EventDashboard_Stats_Newest_Override"),
                  d.createElement(se.A, {
                    nEarliestTime: a ? c : u,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => E,
                    fnSetTimeToUpdate: p,
                    disabled: S,
                  }),
                ),
            ),
            S &&
              d.createElement(y.V, {
                position: "center",
                size: "medium",
                string: (0, T.Xx)("#EventDashboard_Stats_Progress", h),
              }),
          ),
        );
      }
      var Ee = n(85246);
      let pe = class extends d.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bInitialLoadComplete: !1,
              bInfiniteScrollLoading: !1,
              bExhaustedEventList: !1,
              bErrorOnInfiniteScrollRequest: !1,
              nLastFetchRequestedMS: 0,
              bShowEventMetaDataSizes: !1,
              strSearch: "",
              strSearchQuery: "",
            }),
            (this.m_refScroll = d.createRef()),
            (this.m_cancelSignal = s().CancelToken.source()),
            (this.m_clanSteamID = new E.K(A.JA.CLANSTEAMID)),
            (this.k_nMaxPerDirection = 10),
            (this.m_IntervalTimer = void 0),
            (this.m_searchTimer = new Ee.Ar()),
            A.JA.CLANACCOUNTID == v.sq && (this.k_nMaxPerDirection = 2);
        }
        EnsureEventsAreLoaded() {
          r.wk
            .LoadClanEventsForPartnerDashboard(
              this.m_clanSteamID,
              this.m_cancelSignal,
            )
            .then((e) => {
              this.EventLoaded(), this.setState({ bInitialLoadComplete: !0 });
            })
            .catch(this.HandleErrorWithDialog);
        }
        EventLoaded() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            let e = r.wk.GetClanEventGIDs(this.m_clanSteamID).filter((e) => {
              let t = r.wk.GetClanEventModel(e);
              return Boolean(t && t.BIsVisibleEvent() && t.BIsPartnerEvent());
            });
            e.length > 0 &&
              _.h.LoadStatsForEvents(
                this.m_clanSteamID,
                e,
                this.m_cancelSignal,
              );
          });
        }
        HandleErrorWithDialog(e) {
          let t = (0, x.l)(e);
          (0, C.AM)(
            d.createElement(
              D.JX,
              null,
              (0, T.Xx)("#Error_Description", t.errorCode, t.strErrorMsg),
            ),
            window,
          );
        }
        componentDidMount() {
          this.EnsureEventsAreLoaded(),
            r.wk.GetEditModel() && r.wk.ResetModel(),
            window.addEventListener("scroll", this.OnScroll, !0);
        }
        componentDidUpdate(e) {
          this.props.match.params.appid_or_vanity_str !=
            e.match.params.appid_or_vanity_str && this.EnsureEventsAreLoaded(),
            this.m_refScroll && this.m_refScroll.current && this.OnScroll();
        }
        componentWillUnmount() {
          window.removeEventListener("scroll", this.OnScroll),
            this.m_cancelSignal.cancel("EventListView to unload"),
            this.ClearTimer();
        }
        ClearTimer() {
          this.m_IntervalTimer &&
            (window.clearInterval(this.m_IntervalTimer),
            (this.m_IntervalTimer = void 0));
        }
        CreateTiles(e, t) {
          let n = [],
            a = r.wk.GetClanEventGIDs(e);
          if ((null == a ? void 0 : a.length) > 0) {
            (a = a.slice().filter((e) => {
              var n;
              const a = r.wk.GetClanEventModel(e);
              return (
                !!a &&
                a.visibility_state === t &&
                !(
                  Boolean(this.state.strSearchQuery) &&
                  !(null ===
                    (n = a.GetNameWithFallback((0, u.jM)(A.De.LANGUAGE))) ||
                  void 0 === n
                    ? void 0
                    : n.toLocaleLowerCase().includes(this.state.strSearchQuery))
                )
              );
            })),
              (a = a.sort((e, t) => {
                (0, w.X)(
                  e !== t,
                  `Unexpected duplicates in the list: ${e} ${t}`,
                );
                const n = r.wk.GetClanEventModel(e);
                return r.wk.GetClanEventModel(t).startTime - n.startTime;
              }));
            for (const e of a) {
              const t = r.wk.GetClanEventModel(e);
              n.push(
                d.createElement($, {
                  key: e,
                  appid_or_vanity_str:
                    this.props.match.params.appid_or_vanity_str,
                  gid: e,
                  eventModel: t,
                  bShowEventMetaDataSizes: this.state.bShowEventMetaDataSizes,
                }),
              );
            }
          }
          return n;
        }
        OnScroll() {
          if (!this.m_refScroll || !this.m_refScroll.current) return;
          let e = this.m_refScroll.current;
          e &&
            (this.state.bExhaustedEventList ||
              this.state.bErrorOnInfiniteScrollRequest ||
              this.state.bInfiniteScrollLoading ||
              (e.getBoundingClientRect().bottom <= window.innerHeight + 50 &&
                (this.state.nLastFetchRequestedMS > 0 &&
                this.state.nLastFetchRequestedMS + 500 < Date.now()
                  ? this.setState(
                      {
                        bInfiniteScrollLoading: !0,
                        nLastFetchRequestedMS: Date.now(),
                      },
                      this.LoadMorePublicEvents,
                    )
                  : this.setState(
                      {
                        bInfiniteScrollLoading: !0,
                        nLastFetchRequestedMS: Date.now(),
                      },
                      this.LoadMorePublicEventWithDelay,
                    ))));
        }
        LoadMorePublicEventWithDelay() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMorePublicEvents,
              500,
            );
          });
        }
        LoadMorePublicEvents() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            if ((this.ClearTimer(), !this.state.bInfiniteScrollLoading)) return;
            let e = null;
            r.wk.GetAllClanEvents(this.m_clanSteamID).forEach((t) => {
              t.BIsVisibleEvent() &&
                (!e || t.startTime <= e.startTime) &&
                (e = t);
            });
            let t = !1,
              n = !1;
            try {
              let n;
              (n =
                e && e.bOldAnnouncement
                  ? yield r.wk.LoadAdjacentPartnerEventsByAnnouncement(
                      e.AnnouncementGID,
                      this.m_clanSteamID,
                      void 0,
                      0,
                      this.k_nMaxPerDirection,
                    )
                  : yield r.wk.LoadAdjacentPartnerEvents(
                      e ? e.GID : void 0,
                      this.m_clanSteamID,
                      void 0,
                      0,
                      this.k_nMaxPerDirection,
                    )),
                (t = n.length < this.k_nMaxPerDirection);
            } catch (e) {
              console.log("EventListView: " + (0, x.l)(e).strErrorMsg),
                (n = !0);
            }
            this.setState(
              {
                bExhaustedEventList: t,
                bInfiniteScrollLoading: !1,
                bErrorOnInfiniteScrollRequest: n,
              },
              this.EventLoaded,
            );
          });
        }
        UpdateShowEventMetaDataSizes(e) {
          this.setState({ bShowEventMetaDataSizes: e });
        }
        ApplySearch(e) {
          this.setState({ strSearchQuery: e });
        }
        OnUpdateSearch(e) {
          this.setState({ strSearch: e });
          this.m_searchTimer.Schedule(200, () =>
            this.ApplySearch(null == e ? void 0 : e.trim().toLocaleLowerCase()),
          );
        }
        render() {
          const e = new E.K(A.JA.CLANSTEAMID);
          let t = this.CreateTiles(
              this.m_clanSteamID,
              v.ac.k_EEventStateUnpublished,
            ),
            n = this.CreateTiles(this.m_clanSteamID, v.ac.k_EEventStateStaged),
            a = this.CreateTiles(this.m_clanSteamID, v.ac.k_EEventStateVisible),
            r =
              !this.state.bInitialLoadComplete ||
              this.state.bInfiniteScrollLoading;
          return d.createElement(
            "div",
            { ref: this.m_refScroll },
            d.createElement(
              "div",
              { className: (0, I.Z)("maincontent", L().EventDashboardCtn) },
              d.createElement(_e, {
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
              }),
              d.createElement(
                J.s,
                { requireAdmin: !0, clanSteamID: e },
                d.createElement(
                  "div",
                  {
                    className: (0, I.Z)(
                      "maincontent",
                      L().EventDashboardCtn,
                      L().EventDashAdminToolsCtn,
                      S().FlexRowContainer,
                    ),
                  },
                  d.createElement(P.ji, {
                    label: "Show Event Metadata Size",
                    tooltip:
                      "Surfaces the size of the biggest sections in the event's metadata",
                    onChange: this.UpdateShowEventMetaDataSizes,
                    checked: this.state.bShowEventMetaDataSizes,
                  }),
                  d.createElement(
                    P.zx,
                    {
                      onClick: (e) => {
                        (0, C.AM)(d.createElement(ie, null), (0, Z.RA)(e));
                      },
                    },
                    "Show Publishing Audit History",
                  ),
                ),
                d.createElement(
                  "div",
                  {
                    className: (0, I.Z)(
                      L().EventDashboardCtn,
                      L().EventDashAdminToolsCtn,
                      L().EventDashboardSearchCtn,
                    ),
                  },
                  d.createElement(P.II, {
                    type: "text",
                    label: "Search",
                    value: this.state.strSearch,
                    onChange: (e) => this.OnUpdateSearch(e.target.value),
                  }),
                ),
              ),
            ),
            d.createElement(
              "div",
              { className: L().MainLists },
              t.length > 0 &&
                d.createElement(
                  "div",
                  { className: (0, I.Z)(L().Section, L().Unpublished) },
                  d.createElement(
                    "div",
                    {
                      className: (0, I.Z)(
                        "maincontent",
                        "eventlist",
                        L().EventDashboardCtn,
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: L().DisplaySectionHeader },
                      (0, T.Xx)("#EventDisplay_Unpublished_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": (0, T.Xx)(
                            "#EventDisplay_Unpublished_SubTitle",
                          ),
                        },
                        " (?)",
                      ),
                    ),
                    t.length > 0 && t,
                  ),
                ),
              n.length > 0 &&
                d.createElement(
                  "div",
                  { className: (0, I.Z)(L().Section, L().Staged) },
                  d.createElement(
                    "div",
                    {
                      className: (0, I.Z)(
                        "maincontent",
                        "eventlist",
                        L().EventDashboardCtn,
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: L().DisplaySectionHeader },
                      (0, T.Xx)("#EventDisplay_Stage_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": (0, T.Xx)(
                            "#EventDisplay_Stage_SubTitle",
                          ),
                        },
                        " (?)",
                      ),
                    ),
                    n.length > 0 && n,
                  ),
                ),
              d.createElement(
                "div",
                {
                  className: (0, I.Z)(
                    L().Section,
                    L().DisplaySectionHeaderContainer,
                    L().Visible,
                  ),
                },
                d.createElement(
                  "div",
                  {
                    className: (0, I.Z)(
                      "maincontent",
                      "eventlist",
                      L().EventDashboardCtn,
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: L().DisplaySectionHeader },
                    (0, T.Xx)("#EventDisplay_Visible_Title"),
                  ),
                  d.createElement(
                    "div",
                    { className: L().DisplaySectionSubHeader },
                    (0, T.Xx)("#EventDisplay_Visible_Title_WithRange"),
                  ),
                  a && a,
                  !r &&
                    !a &&
                    d.createElement(
                      "div",
                      null,
                      (0, T.Xx)("#EventDisplay_NoPublic"),
                    ),
                  r &&
                    d.createElement(y.V, {
                      position: "center",
                      string: (0, T.Xx)("#Loading"),
                    }),
                  this.state.bExhaustedEventList &&
                    d.createElement(
                      "div",
                      null,
                      (0, T.Xx)("#EventDisplay_AllPublicShown"),
                    ),
                  this.state.bErrorOnInfiniteScrollRequest &&
                    d.createElement(
                      "div",
                      null,
                      (0, T.Xx)("#EventDisplay_HitErrorInfiniteScroll"),
                    ),
                ),
              ),
            ),
          );
        }
      };
      (0, l.gn)([k.ak], pe.prototype, "OnScroll", null),
        (0, l.gn)([k.ak], pe.prototype, "LoadMorePublicEventWithDelay", null),
        (0, l.gn)([k.ak], pe.prototype, "LoadMorePublicEvents", null),
        (0, l.gn)([k.ak], pe.prototype, "UpdateShowEventMetaDataSizes", null),
        (0, l.gn)([k.ak], pe.prototype, "ApplySearch", null),
        (0, l.gn)([k.ak], pe.prototype, "OnUpdateSearch", null),
        (pe = (0, l.gn)([c.Pi], pe));
      const _e = (0, c.Pi)((e) => {
          const t = new E.K(A.JA.CLANSTEAMID),
            n = p.sV.GetClanInfoByClanAccountID(t.GetAccountID()),
            { appid_or_vanity_str: i } = e;
          let l = _.h.GetTotalStats(t);
          return d.createElement(
            "div",
            { className: S().EventDashboardHeader },
            d.createElement(h.Cu, { identifier: i, partnerEventStore: r.wk }),
            d.createElement(
              "div",
              { className: S().EventDashboardTitles },
              d.createElement(
                "div",
                { className: S().maintitle },
                (0, T.Xx)("#EventDisplay_Events"),
                d.createElement(
                  "div",
                  { className: S().subtitle },
                  (0, T.Xx)("#EventDisplay_Edit_Desc"),
                ),
              ),
              d.createElement(
                "div",
                { className: S().EventDashboardActions },
                d.createElement(
                  m.rU,
                  {
                    className: (0, I.Z)(S().Button, S().Primary),
                    to: a.rQ.Create(i),
                    onClick: () => r.wk.ResetModel(),
                  },
                  (0, T.Xx)("#EventDisplay_CreateNewEvent"),
                ),
                d.createElement(
                  P.zx,
                  {
                    onClick: (e) =>
                      (0, C.AM)(
                        d.createElement(ve, { clanInfo: n }),
                        (0, Z.RA)(e),
                      ),
                  },
                  (0, T.Xx)("#EventDashboard_Stats_export"),
                ),
              ),
            ),
            d.createElement(
              "div",
              { className: S().EventDashboardStatsCtn },
              d.createElement(b.y, {
                summary: l.m_stats,
                bIsAllowedInLibrary: null == n ? void 0 : n.is_ogg,
                bIncludeDescription: !0,
              }),
            ),
          );
        }),
        he = (0, f.M)(pe);
      var ge = n(61557),
        Se = n(15607),
        be = n(74314),
        De = n(19094),
        Ce = n(58961),
        ye = n(56368),
        we = n(14288);
      class Ie {
        GetCounts() {
          return this.m_counts;
        }
        LoadCounts() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            return Boolean(this.m_counts)
              ? this.m_counts
              : (this.m_promise || (this.m_promise = this.LoadInternalCount()),
                this.m_promise);
          });
        }
        LoadInternalCount() {
          var e, t;
          return (0, l.mG)(this, void 0, void 0, function* () {
            let n = null;
            try {
              const a =
                  A.De.STORE_BASE_URL +
                  "saleaction/ajaxgetuserdeckcompatcounts",
                r = yield s().get(a, {});
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (e = r.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                (null === (t = r.data) || void 0 === t ? void 0 : t.counts)
              )
                return (this.m_counts = r.data.counts), this.m_counts;
              n = (0, x.l)(r);
            } catch (e) {
              n = (0, x.l)(e);
            }
            return (
              console.error(
                "CDeckCompCountStore.LoadInternalCount failed: " +
                  (null == n ? void 0 : n.strErrorMsg),
                n,
              ),
              null
            );
          });
        }
        static Get() {
          return (
            Ie.s_globalSingletonStore ||
              ((Ie.s_globalSingletonStore = new Ie()),
              ("dev" != A.De.WEB_UNIVERSE && "beta" != A.De.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = Ie.s_globalSingletonStore)),
            Ie.s_globalSingletonStore
          );
        }
        constructor() {
          if (
            ((this.m_counts = null),
            document.getElementById("application_config"))
          ) {
            let e = (0, A.kQ)("deckcompatcount", "application_config");
            Ie.ValidateListCompat(e) && (this.m_counts = e);
          }
        }
        static ValidateListCompat(e) {
          const t = e;
          return (
            t &&
            "number" == typeof t.verified &&
            "number" == typeof t.unsupported &&
            "number" == typeof t.playable
          );
        }
      }
      var Te = n(72709),
        xe = n(8894),
        ke = n(74710),
        Ae = n(34714),
        fe = n(99472),
        Me = n(93883),
        Le = n(93515);
      function Ne(e) {
        return e < 10 ? "0" + e : e;
      }
      function Ge(e) {
        const { giveawayid: t } = e,
          n = (0, Me.J)(t),
          {
            bLoadingGiveawayInfo: a,
            winner_count: r,
            closed: i,
            seconds_until_drawing: l,
          } = n;
        return a
          ? null
          : d.createElement(
              "div",
              { className: Le.countdownCtn },
              Boolean(i) &&
                d.createElement(
                  "div",
                  { className: Le.Closed },
                  r > 0
                    ? (0, T.Xx)("#Giveaway_Closed", r.toLocaleString())
                    : (0, T.Xx)("#Giveaway_Closed_NoWinnerInfo"),
                ),
              Boolean(!i) &&
                d.createElement(
                  d.Fragment,
                  null,
                  Boolean(l <= 0)
                    ? d.createElement(
                        "div",
                        { className: Le.Throbber },
                        d.createElement(y.V, { size: "small" }),
                        d.createElement(
                          "div",
                          null,
                          (0, T.Xx)("#Giveaway_RandomDraw"),
                        ),
                      )
                    : d.createElement(
                        "div",
                        { className: Le.CountDownCtn },
                        d.createElement(
                          "div",
                          { className: Le.CountDownTime },
                          Ne(Math.floor(l / 60)) + ":" + Ne(l % 60),
                        ),
                        d.createElement(
                          "div",
                          { className: Le.CountDownText },
                          (0, T.Xx)("#Giveaway_CountDown2"),
                          " ",
                          (0, T.Xx)("#Giveaway_KeepWatching"),
                        ),
                      ),
                  Boolean(r > 0) &&
                    d.createElement(
                      "div",
                      { className: Le.WinnerInfo },
                      d.createElement(
                        "div",
                        { className: Le.WinnerCount },
                        r.toLocaleString(),
                      ),
                      d.createElement(
                        "div",
                        { className: Le.WinnerText },
                        (0, T.Xx)("#Giveaway_Congratulation"),
                      ),
                    ),
                ),
            );
      }
      var Pe = n(61963),
        Be = n(32870),
        Oe = n(701),
        Xe = n(32905),
        Ue = n(91970),
        We = n(4102),
        Ve = n(81362),
        Re = n(4170),
        je = n(82588);
      function He(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          a = (0, Be.oS)(n);
        if ((null == a ? void 0 : a.level) > 0) {
          let e = a.level;
          if (null == t ? void 0 : t.BHasSaleEnabled()) {
            const a = t.GetSaleSectionsByType("badge_progress");
            if (1 == (null == a ? void 0 : a.length)) {
              const r = a[0].badge_progress;
              if (
                (null == r ? void 0 : r.event_badgeid) == n &&
                (null == r ? void 0 : r.granted_by_discovery_queue)
              ) {
                const n = r.levels[r.levels.length - 1].level;
                return d.createElement(Fe, {
                  eventModel: t,
                  nBadgeLevel: e,
                  nMaxLevel: n,
                });
              }
            }
          }
          return d.createElement(
            "span",
            { className: "DisplayBadgeProgress" },
            e.toLocaleString(),
          );
        }
        return null;
      }
      function Fe(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: a } = e,
          r = d.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return (null == e ? void 0 : e.length) > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: i, eStoreDiscoveryQueueType: l } = d.useMemo(
            () => (0, Re.N)(t, r),
            [t, r],
          ),
          o = (0, je.GD)(l, i),
          s = Math.min(n + o, a);
        return d.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          s.toLocaleString(),
        );
      }
      function ze(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, we.im)(e.args, "eventid"));
        return A.L7.logged_in && n
          ? d.createElement(He, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function qe(e) {
        const { nDoorIndex: t, children: n } = e,
          a = (0, ke._4)(t),
          { fnOpenDoor: r } = (0, ke.Qr)(),
          [i, l] = d.useState(!1),
          [o, s] = d.useState(!1);
        return d.createElement(
          P.zx,
          {
            disabled: a,
            onClick: (e) => {
              i ||
                (A.L7.logged_in
                  ? (l(!0),
                    r(t, !0, null, !1)
                      .then((e) => {
                        e || s(!0), l(!1);
                      })
                      .catch(() => {
                        s(!0), l(!1);
                      }))
                  : (0, Xe.X)());
            },
          },
          Boolean(o)
            ? d.createElement("div", null, (0, T.Xx)("#GrantAwardError_Busy"))
            : d.createElement(
                d.Fragment,
                null,
                Boolean(i) && d.createElement(y.V, { size: "small" }),
                Boolean(a) && d.createElement(Oe.JrY, null),
                n,
              ),
        );
      }
      function Qe(e) {
        const t = Number.parseInt((0, we.im)(e.args)) || 0;
        return t >= 0 && t < 32
          ? d.createElement(qe, { nDoorIndex: t }, e.children)
          : null;
      }
      const Je = (0, V.EN)(Ue.CZ);
      function Ze(e) {
        var t, n;
        const a = Number.parseInt((0, we.im)(e.args)),
          { event: r, showErrorInfo: i } = e.context;
        if (a) {
          const l =
            null ===
              (n =
                null === (t = null == r ? void 0 : r.jsondata) || void 0 === t
                  ? void 0
                  : t.sale_sections) || void 0 === n
              ? void 0
              : n.findIndex((e) => e.unique_id == a);
          if (l >= 0) {
            const t = r.GetDayIndexFromEventStart();
            return d.createElement(Je, {
              event: r,
              section: r.jsondata.sale_sections[l],
              activeTab: new Ve.u(null, t),
              language: e.language,
              bIsPreview: i,
              nSaleDayIndex: t,
              promotionName: "",
              appVisibilityTracker: null,
            });
          }
          if (i)
            return d.createElement(
              "div",
              { className: We.ErrorDiv },
              "Error could not find sale section ",
              a,
            );
        }
        return null;
      }
      var Ke = n(81586);
      let Ye = null;
      function $e(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, we.im)(e.args, "appid")),
          a = Number.parseInt((0, we.im)(e.args, "itemdefid")),
          r = Number.parseInt((0, we.im)(e.args, "maxquantity")),
          i = (0, we.im)(e.args, "calltoaction");
        return (0, xe.$4)(n, a)
          ? d.createElement(Ae.t, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: r },
              strCallToAction: i,
            })
          : d.createElement(y.V, {
              size: "small",
              position: "center",
              string: (0, T.Xx)("#Loading"),
            });
      }
      function et(e) {
        const t = (function () {
          const [e, t] = d.useState(Ie.Get().GetCounts());
          return (
            d.useEffect(() => {
              e || Ie.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return d.createElement(y.V, { size: "small" });
        const n = Number.parseInt((0, we.im)(e.args));
        let a = t.verified;
        switch (n) {
          case 2:
            a = t.playable;
            break;
          case 1:
            a = t.unsupported;
        }
        return d.createElement("span", null, Number(a).toLocaleString());
      }
      function tt(e) {
        var t, n, a, r;
        const i = (0, Te.V)("library");
        if (!i) return d.createElement(y.V, { size: "small" });
        const l = Number.parseInt((0, we.im)(e.args));
        let o =
          (null === (t = i.verifiedList) || void 0 === t ? void 0 : t.length) ||
          0;
        switch (l) {
          case 2:
            o =
              (null === (n = i.playableList) || void 0 === n
                ? void 0
                : n.length) || 0;
            break;
          case 1:
            o =
              (null === (a = i.unsupportedList) || void 0 === a
                ? void 0
                : a.length) || 0;
            break;
          case 0:
            o =
              (null === (r = i.unknownList) || void 0 === r
                ? void 0
                : r.length) || 0;
        }
        return d.createElement("span", null, Number(o).toLocaleString());
      }
      function nt(e) {
        const t = Number.parseInt((0, we.im)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, we.im)(e.args, "hide")));
        return t >= 0
          ? d.createElement(at, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function at(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          r = (0, ke._4)(t);
        return null == r
          ? null
          : (r && !n) || (!r && n)
          ? d.createElement(d.Fragment, null, e.children)
          : null;
      }
      function rt(e) {
        if (A.L7.logged_in) {
          const t = Number.parseInt((0, we.im)(e.args)),
            n = Number.parseInt((0, we.im)(e.args, "mod"));
          if (n > 0 && t < n && A.L7.accountid % n == t) return e.children;
        }
        return null;
      }
      function it(e) {
        const t = (0, we.im)(e.args);
        return (null == t ? void 0 : t.trim().length) > 0
          ? d.createElement("div", { className: t.trim() }, e.children)
          : d.createElement(d.Fragment, null, e.children);
      }
      function lt(e) {
        return d.createElement(
          "span",
          { className: fe.LocalizeBlock },
          (0, T.yu)(
            e.children,
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
          ),
        );
      }
      function ot(e) {
        let t = (0, we.im)(e.args);
        return t
          ? d.createElement(Ge, { giveawayid: t })
          : d.createElement(d.Fragment, null);
      }
      function st(e) {
        const t = Number.parseInt((0, we.im)(e.args));
        if (t) {
          const n = Number.parseInt((0, we.im)(e.args, "depositpackageid"));
          return d.createElement(Ke.Y, {
            reservationPackageID: t,
            depositPackageID: n,
          });
        }
        return d.createElement(d.Fragment, null);
      }
      var ct = n(92307),
        dt = (n(35266), n(88026), n(78443)),
        mt = n(71209),
        ut = n(95408);
      function vt(e) {
        const [t, n] = d.useState(!0),
          { data: l } = (0, ut.NH)("english");
        return (
          d.useEffect(() => {
            Ce.Q8.Init(new De.J(A.De.WEBAPI_BASE_URL)),
              oe.j1.Init(),
              r.wk.Init(),
              ct.d.AddDictionary(
                (null == Ye &&
                  (Ye = new Map([
                    [
                      "itemdef",
                      {
                        Constructor: $e,
                        autocloses: !1,
                        skipInternalNewline: !0,
                        allowWrapTextForCopying: !0,
                      },
                    ],
                    ["wishlist", { Constructor: Pe.gq, autocloses: !1 }],
                    ["deckcompatcount", { Constructor: et, autocloses: !1 }],
                    [
                      "deckcompatuserlibrarycount",
                      { Constructor: tt, autocloses: !1 },
                    ],
                    ["giveawayinfo", { Constructor: ot, autocloses: !1 }],
                    ["price", { Constructor: Pe.J8, autocloses: !1 }],
                    ["pricesavings", { Constructor: Pe.Eu, autocloses: !1 }],
                    [
                      "eventdoorvisibility",
                      { Constructor: nt, autocloses: !1 },
                    ],
                    ["chooseaccount", { Constructor: rt, autocloses: !1 }],
                    ["badgecurrentlevel", { Constructor: ze, autocloses: !1 }],
                    ["optindoorquest", { Constructor: Qe, autocloses: !1 }],
                    ["classname", { Constructor: it, autocloses: !1 }],
                    ["localize", { Constructor: lt, autocloses: !1 }],
                    ["salesection", { Constructor: Ze, autocloses: !1 }],
                    ["reservationbutton", { Constructor: st, autocloses: !1 }],
                  ])),
                Ye),
              ),
              Promise.all([ye.cb.InitGlobal()]).then(() => n(!1));
          }, []),
          t || !l
            ? d.createElement(y.V, {
                position: "center",
                size: "medium",
                string: (0, T.Xx)("#Loading"),
              })
            : d.createElement(
                z.uX.Provider,
                { value: { bCanUseLink: !0 } },
                d.createElement(dt.bE, null),
                d.createElement(
                  V.rs,
                  null,
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Home(":appid_or_vanity_str"),
                    component: he,
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.List(":appid_or_vanity_str"),
                    component: he,
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Create(":appid_or_vanity_str"),
                    component: i.k,
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Category(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        i.k,
                        Object.assign({}, e, { key: e.match.params.gid }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.EditRedirectToCategory(":appid_or_vanity_str"),
                    render: (e) => d.createElement(Se.Kz, Object.assign({}, e)),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        Se.IE,
                        Object.assign({}, e, { key: e.match.params.gid }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Publish(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        Se.IE,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          bInitiatePublishDialog: !0,
                        }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.PreviewSale(
                      ":appid_or_vanity_str",
                      ":gid(\\d+)?",
                    ),
                    render: (e) =>
                      d.createElement(
                        ge.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "previewsale",
                        }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Preview(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        ge.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "preview",
                        }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.View(":appid_or_vanity_str", ":gid(\\d+)"),
                    render: (e) =>
                      d.createElement(
                        ge.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "view",
                        }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Migrate(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (e) =>
                      d.createElement(
                        be.Lc,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.MigrateCategory(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (e) =>
                      d.createElement(
                        be.QU,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.ViewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (e) =>
                      d.createElement(
                        be.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !1,
                        }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.PreviewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)",
                    ),
                    render: (e) =>
                      d.createElement(
                        be.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        }),
                      ),
                  }),
                  d.createElement(V.AW, { component: mt.R }),
                ),
              )
        );
      }
    },
  },
]);

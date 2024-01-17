/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9349],
  {
    1761: (e) => {
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
    29229: (e) => {
      e.exports = { DialogCtn: "partnereventstatsexport_DialogCtn_2LwQU" };
    },
    32364: (e) => {
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
        AuditInfoItem: "partnereventdashboard_AuditInfoItem_3zF56",
        AuditItemStatsCtn: "partnereventdashboard_AuditItemStatsCtn_2is7F",
      };
    },
    1323: (e) => {
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
    82227: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => D, q: () => b });
      var a = n(85556),
        r = n(47427),
        i = n(27605),
        l = n(37563),
        o = n(77936),
        s = n(35427),
        c = n(31959),
        d = n(74257),
        m = n(94621),
        u = n(18538),
        v = n(49513),
        E = n(32144),
        p = n(45167),
        _ = n(10162),
        h = n(91494),
        g = n(73941);
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
    76552: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => ht });
      var a = n(760),
        r = n(74257),
        i = n(47527),
        l = n(85556),
        o = n(80751),
        s = n.n(o),
        c = n(27605),
        d = n(47427),
        m = n(28017),
        u = n(77936),
        v = n(86878),
        E = n(35427),
        p = n(93243),
        _ = n(88397),
        h = n(84400),
        g = n(71741),
        S = n.n(g),
        b = n(91830),
        D = n(50898),
        C = n(90069),
        y = n(46882),
        w = n(62210),
        I = n(13129),
        T = n(31846),
        x = n(16649),
        k = n(20417),
        A = n(37563),
        f = n(18538),
        M = n(32364),
        N = n.n(M),
        L = n(49162),
        G = n(1485),
        P = n(1323);
      function B(e) {
        const { eventModel: t, fnOnGotoPage: n } = e;
        return t.bOldAnnouncement
          ? null
          : d.createElement(
              "div",
              {
                className: (0, I.Z)(P.ManageButton, P.Clone),
                onClick: (e) =>
                  (function (e, t, n) {
                    t.stopPropagation(),
                      r.wk
                        .LoadEditorModel(e.clanSteamID, e.GID)
                        .then((e) => {
                          const t = (0, L.HJ)(e, !0, !0, !0),
                            a = t.GetLanguagesWithTokens();
                          a.length > 1
                            ? (a.sort((e, t) =>
                                (0, T.Xx)(
                                  "#Language_" + (0, u.j_)(e),
                                ).localeCompare(
                                  (0, T.Xx)("#Language_" + (0, u.j_)(t)),
                                ),
                              ),
                              (0, C.AM)(
                                d.createElement(X, {
                                  langs: a,
                                  locData: t,
                                  fnOnGotoPage: n,
                                }),
                                window,
                              ))
                            : O(n, t);
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
      function O(e, t, n) {
        const a = r.wk.CreateClone();
        if (n && n.length > 0) {
          const e = t.GetLanguagesWithTokens();
          t.ClearLanguagesTokens(n),
            (a.GetEventModel().jsondata.bSaleEnabled = !0),
            (0, L.XS)(a, t, e),
            (a.GetEventModel().jsondata.bSaleEnabled = !1);
        }
        e(null, "clone");
      }
      function X(e) {
        const { langs: t, locData: n, closeModal: a, fnOnGotoPage: r } = e,
          i = (0, u.jM)(A.De.LANGUAGE),
          [l, o] = d.useState(new Set(t.filter((e) => e != i)));
        return d.createElement(
          D.uH,
          {
            strTitle: (0, T.Xx)("#Button_Clone"),
            onOK: () => O(r, n, Array.from(l)),
            strDescription: (0, T.Xx)("#EventEditor_Clone_MultiLanguages"),
            closeModal: a,
          },
          d.createElement(
            "div",
            { className: P.CloneLangAlert },
            (0, T.Xx)("#EventEditor_Clone_Alert"),
          ),
          d.createElement(
            "div",
            { className: P.CloneLangListCtn },
            t.map((e) =>
              d.createElement(G.ji, {
                key: e,
                className: P.CloneCheckBox,
                onChange: (t) => {
                  const n = new Set(l);
                  t ? n.delete(e) : n.add(e), o(n);
                },
                label: (0, T.Xx)("#Language_" + (0, u.j_)(e)),
                checked: !l.has(e),
              }),
            ),
          ),
          d.createElement(
            G.zx,
            { onClick: () => o(new Set()) },
            (0, T.Xx)("#EventEditor_Clone_SelectAll"),
          ),
          d.createElement(
            G.zx,
            { onClick: () => o(new Set(t)) },
            (0, T.Xx)("#EventEditor_Clone_DeSelectAll"),
          ),
        );
      }
      var U = n(45118),
        V = n(8285),
        W = n(64936),
        R = n(34310),
        j = n(10162),
        F = n(4151),
        H = n(81913),
        z = n(31659),
        q = n(24827),
        J = n(83421),
        Q = n(50423),
        Z = n(80445),
        K = n(65015);
      let Y = class extends d.Component {
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
                return (0, H.Ij)(this.props.eventModel, H.Ue.k_eCommunityEdit);
              case "view":
                return t.BIsVisibleEvent()
                  ? (0, H.Ij)(this.props.eventModel, H.Ue.k_eView)
                  : (0, H.Ij)(this.props.eventModel, H.Ue.k_eCommunityPreview);
              default:
                console.log(
                  "EventDisplayTile - Unexpected Case - " +
                    this.state.redirectTarget,
                );
            }
          let s = (0, u.jM)(A.De.LANGUAGE);
          t.BIsLanguageValidForRealms(s) || (s = t.BInRealmGlobal() ? 0 : 29);
          let c,
            m,
            E = [t.GetImageURLWithFallback("capsule", s)],
            h = t.GetNameWithFallback(s),
            S = t.BHasSubTitle(s),
            b = t.BHasSaleEnabled(),
            D = t.visibility_state != v.ac.k_EEventStateUnpublished,
            C = t.visibility_state != v.ac.k_EEventStateVisible;
          if (
            (C &&
              D &&
              (c =
                t.visibilityStartTime == t.startTime
                  ? d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      (0, T.Xx)("#EventEditor_Status_WillBeVisible_EventStart"),
                    )
                  : d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      (0, T.kQ)(
                        "#EventEditor_Status_WillBeVisible_At",
                        d.createElement(q.H6, {
                          dateAndTime:
                            t.GetVisibilityStartTimeAndDateUnixSeconds(),
                          bSingleLine: !0,
                        }),
                      ),
                    )),
            !C && D)
          ) {
            let e = W.JW.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateUpcoming },
                  (0, T.Xx)("#EventDisplay_Upcoming"),
                ))
              : (0, Z.G1)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateActive },
                  (0, T.Xx)("#EventDisplay_Active"),
                ))
              : t.GetStartTimeAndDateUnixSeconds() > e + 3600 &&
                (m = d.createElement(
                  "span",
                  { className: P.EventStateRecent },
                  (0, T.Xx)("#EventDisplay_RecentlyActive"),
                ));
          }
          r &&
            (h =
              ((null === (e = R.Z.Get().GetApp(t.appid)) || void 0 === e
                ? void 0
                : e.GetName()) || "") +
              ": " +
              h);
          let y =
              t.BIsPartnerEvent() &&
              t.BIsVisibleEvent() &&
              _.h4.GetStatsFor(t.clanSteamID, l),
            w = p.sV.GetOGGClanInfo(t.appid),
            x = Boolean(
              o &&
                w &&
                w.is_ogg &&
                w.clanAccountID != t.announcementClanSteamID.GetAccountID(),
            );
          return d.createElement(
            j.SV,
            null,
            d.createElement(
              "div",
              {
                className: (0, I.Z)({
                  [P.TileContainer]: !0,
                  [P.TileAgeAppropriate]: true,
                  [P.TileAgeNotAppropriate]: !1,
                  [P.ShowEventMetaDataSizes]: i,
                }),
              },
              d.createElement(
                "div",
                {
                  className: P.TileImageCtn,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(z.J, { className: P.TileImage, srcs: E }),
              ),
              d.createElement(
                "div",
                {
                  className: P.TileTextContainer,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(
                  "div",
                  { className: P.TileDescriptionContainer },
                  d.createElement(
                    "div",
                    { style: { display: "flex" } },
                    d.createElement("div", { className: P.TileTextAppName }, h),
                    d.createElement(
                      "div",
                      { className: P.TileTextEventType },
                      t.GetCategoryAsString(),
                      b &&
                        d.createElement(
                          "span",
                          { className: P.TileHasSale },
                          " | ",
                          (0, T.Xx)("#EventEditor_Status_HasSale"),
                        ),
                    ),
                  ),
                  S && !1,
                  d.createElement(
                    "div",
                    { className: g.ContainerSpaceBetween },
                    d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      d.createElement(q.H6, {
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
                      d.createElement(K.bv, {
                        eventModel: t,
                        bAllowUpdate: !1,
                      }),
                    ),
                    Boolean(y) &&
                      d.createElement(
                        "div",
                        { className: P.TileStats },
                        (0, T.kQ)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            y.m_stats.total_showm.toLocaleString(),
                          ),
                        ),
                        d.createElement("br", null),
                        (0, T.kQ)(
                          "#EventDashBoard_Summary_Tile_Read",
                          d.createElement(
                            "span",
                            null,
                            y.m_stats.total_read.toLocaleString(),
                          ),
                        ),
                      ),
                  ),
                  c,
                  x
                    ? d.createElement(
                        "div",
                        {
                          className: P.TileButtonContainer,
                          onClick: (e) => this.OnIgnoreFallbackClick(e),
                        },
                        d.createElement(
                          "div",
                          null,
                          (0, T.Xx)("#EventEditor_DataFromConnectAnnouncement"),
                        ),
                        d.createElement(
                          H.JW,
                          {
                            className: (0, I.Z)(P.ManageButton, P.Edit),
                            eventModel: t,
                            route: H.Ue.k_eView,
                          },
                          (0, T.Xx)("#Button_ViewPage"),
                        ),
                      )
                    : d.createElement(
                        $,
                        Object.assign(
                          { fnOnGotoPage: this.OnGotoPage },
                          this.props,
                        ),
                      ),
                  i &&
                    d.createElement(
                      J.s,
                      { requireAdmin: !0, clanSteamID: t.clanSteamID },
                      d.createElement(te, { eventModel: t }),
                    ),
                ),
              ),
            ),
          );
        }
      };
      (0, l.gn)([k.ak], Y.prototype, "OnFallbackClick", null),
        (0, l.gn)([k.ak], Y.prototype, "OnGotoPage", null),
        (0, l.gn)([k.ak], Y.prototype, "OnIgnoreFallbackClick", null),
        (Y = (0, l.gn)([c.Pi], Y));
      let $ = class extends d.Component {
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
                d.createElement(U.b, {
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
              (0, Q.RA)(e),
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
              className: P.TileButtonContainer,
              onClick: (e) => this.OnIgnoreFallbackClick(e),
            },
            !n &&
              d.createElement(
                H.JW,
                {
                  className: (0, I.Z)(P.ManageButton, P.Edit),
                  eventModel: e,
                  route: H.Ue.k_eCommunityEdit,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#Button_Edit"),
              ),
            n &&
              d.createElement(
                H.JW,
                {
                  className: (0, I.Z)(P.ManageButton, P.Edit),
                  "data-tooltip-text": (0, T.Xx)(
                    "#EventEditor_Button_MigrateAndEdit_Announcement_ttip",
                  ),
                  eventModel: e,
                  route: H.Ue.k_eCommunityMigrate,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#EventEditor_Button_MigrateAndEdit"),
              ),
            a &&
              d.createElement(
                H.JW,
                {
                  className: (0, I.Z)(P.ManageButton, P.View),
                  "data-tooltip-text": (0, T.Xx)(
                    "#EventEditor_Button_PreviewButton_ttip",
                  ),
                  eventModel: e,
                  route: H.Ue.k_eCommunityPreview,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#EventDisplay_Preview"),
              ),
            !a &&
              d.createElement(
                H.JW,
                {
                  className: (0, I.Z)(P.ManageButton, P.View),
                  eventModel: e,
                  route: H.Ue.k_eView,
                  onClick: this.StopPropagation,
                },
                (0, T.Xx)("#EventDisplay_View"),
              ),
            !r &&
              !n &&
              d.createElement(
                "div",
                {
                  className: (0, I.Z)(P.ManageButton, P.Publish),
                  onClick: this.OnPublishEvent,
                },
                (0, T.Xx)("#EventDisplay_Publish"),
              ),
            d.createElement("div", { className: P.Spacer }, " "),
            d.createElement(B, { eventModel: e, fnOnGotoPage: t }),
            d.createElement(
              "div",
              {
                className: (0, I.Z)(P.ManageButton, P.Delete),
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
      function ee(e, t) {
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
                ee(i, t - 1).forEach((e) => {
                  n.push({ key: a + ":" + e.key, size: e.size });
                });
          }),
          n
        );
      }
      (0, l.gn)([k.ak], $.prototype, "OnIgnoreFallbackClick", null),
        (0, l.gn)([k.ak], $.prototype, "OnPublishEvent", null),
        (0, l.gn)([k.ak], $.prototype, "OnPublishSuccess", null),
        (0, l.gn)([k.ak], $.prototype, "StopPropagation", null),
        (0, l.gn)([k.ak], $.prototype, "OnDeleteClickAndVerify", null),
        ($ = (0, l.gn)([c.Pi], $));
      const te = (e) => {
        var t, n;
        const { eventModel: a } = e;
        if (!(null == a ? void 0 : a.jsondata)) return null;
        const r = ee(a.jsondata, 3);
        r.sort((e, t) => t.size - e.size);
        return d.createElement(
          "div",
          { className: P.MetaDataCtn },
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
      var ne = n(68085),
        ae = n(86617),
        re = n(56164);
      const ie = (e) => {
          const { closeModal: t } = e,
            n = (0, ne.V)(A.JA.CLANACCOUNTID);
          return d.createElement(
            D.uH,
            {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              className: "auditContents",
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
          const { record: n } = e,
            a = d.useMemo(() => E.K.InitFromClanID(A.JA.CLANACCOUNTID), []);
          return d.createElement(
            "div",
            { className: M.AuditInfoItem },
            d.createElement(
              "div",
              null,
              "Clan Event GID:",
              d.createElement(
                "a",
                {
                  href: `${
                    A.De.COMMUNITY_BASE_URL
                  }gid/${a.ConvertTo64BitString()}/partnerevents/edit/${
                    n.clan_event_gid
                  }`,
                  target: "_blank",
                },
                n.clan_event_gid,
              ),
            ),
            d.createElement("div", null, "Type: ", (0, Z.Sq)(n.event_type)),
            d.createElement(
              "div",
              null,
              "Publish Time: ",
              d.createElement(q.H6, {
                dateAndTime: n.publish_time,
                bSingleLine: !0,
              }),
            ),
            d.createElement(
              "div",
              null,
              d.createElement(ae.K, {
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
            d.createElement(
              "div",
              { className: M.AuditItemStatsCtn },
              d.createElement(
                re.ug,
                { title: "Show Event Stats", bStartMinimized: !0 },
                d.createElement(oe, { clanSteamID: a, record: n }),
              ),
            ),
            d.createElement("hr", null),
          );
        };
      function oe(e) {
        const { clanSteamID: t, record: n } = e,
          a = (0, _.yt)(t, n.clan_event_gid);
        return d.createElement(
          "div",
          null,
          null == a &&
            d.createElement(y.V, {
              string: "loading",
              position: "center",
              size: "medium",
            }),
          null == a &&
            d.createElement("div", null, "Failed to load events stats"),
          Boolean(a) && d.createElement(b.y, { summary: a }),
        );
      }
      var se = n(82071),
        ce = n(92012),
        de = n(88408),
        me = n(46984),
        ue = n(29229),
        ve = n.n(ue);
      function Ee(e) {
        const { clanInfo: t, closeModal: n } = e,
          [a, r] = d.useState(!0),
          [i, o] = d.useState(!0),
          c = 1063339200,
          m = W.JW.GetTimeNowWithOverride(),
          [v, E] = d.useState(m - me._H.PerMonth),
          [p, h] = d.useState(m),
          [g, S] = d.useState(-1),
          b = g >= 0;
        return d.createElement(
          D.uH,
          {
            strTitle: (0, T.Xx)("#EventDashboard_Stats_title"),
            strDescription: (0, T.Xx)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: b,
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
                  const v = (0, u.jM)(A.De.LANGUAGE);
                  do {
                    if (
                      ((d += 1),
                      (m = yield se.j1.LoadAdjacentPartnerEvents(
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
                        (yield _.h4.LoadStatsForEvents(e.clanSteamID, t, i),
                        (l += t.length),
                        a(l),
                        t.forEach((t) => {
                          const n = _.h4.GetStatsFor(e.clanSteamID, t),
                            a = se.j1.GetClanEventModel(t);
                          r.push(
                            Object.assign(
                              Object.assign(
                                { event_name: a.GetNameWithFallback(v) },
                                n.m_stats,
                              ),
                              { event_gid: "'" + t },
                            ),
                          );
                        }));
                    }
                  } while (m.length == o && d < 100);
                  return (
                    de.K.WriteCSVToFile(
                      r,
                      "event_stats_" +
                        e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                        ".csv",
                    ),
                    !0
                  );
                });
              })(t, a ? c : v, i ? Number.MAX_SAFE_INTEGER : p, S).then(() =>
                n(),
              ),
          },
          d.createElement(
            "div",
            { className: ve().DialogCtn },
            d.createElement(
              "div",
              { className: "DialogLabel" },
              (0, T.Xx)("#EventDashboard_Stats_Oldest_Title"),
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(G.ji, {
                label: (0, T.Xx)("#EventDashboard_Stats_Oldest"),
                onChange: r,
                checked: a,
                disabled: b,
              }),
              !a &&
                d.createElement(
                  "div",
                  null,
                  (0, T.Xx)("#EventDashboard_Stats_Oldest_Override"),
                  d.createElement(ce.A, {
                    nEarliestTime: c,
                    nLatestTime: i ? void 0 : p,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => v,
                    fnSetTimeToUpdate: E,
                    disabled: b,
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
              d.createElement(G.ji, {
                label: (0, T.Xx)("#EventDashboard_Stats_Newest"),
                onChange: o,
                checked: i,
                disabled: b,
              }),
              !i &&
                d.createElement(
                  "div",
                  null,
                  (0, T.Xx)("#EventDashboard_Stats_Newest_Override"),
                  d.createElement(ce.A, {
                    nEarliestTime: a ? c : v,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => p,
                    fnSetTimeToUpdate: h,
                    disabled: b,
                  }),
                ),
            ),
            b &&
              d.createElement(y.V, {
                position: "center",
                size: "medium",
                string: (0, T.Xx)("#EventDashboard_Stats_Progress", g),
              }),
          ),
        );
      }
      var pe = n(45492);
      let _e = class extends d.Component {
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
            (this.m_searchTimer = new pe.Ar()),
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
              _.h4.LoadStatsForEvents(
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
                d.createElement(Y, {
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
              { className: (0, I.Z)("maincontent", N().EventDashboardCtn) },
              d.createElement(he, {
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
                      N().EventDashboardCtn,
                      N().EventDashAdminToolsCtn,
                      S().FlexRowContainer,
                    ),
                  },
                  d.createElement(G.ji, {
                    label: "Show Event Metadata Size",
                    tooltip:
                      "Surfaces the size of the biggest sections in the event's metadata",
                    onChange: this.UpdateShowEventMetaDataSizes,
                    checked: this.state.bShowEventMetaDataSizes,
                  }),
                  d.createElement(
                    G.zx,
                    {
                      onClick: (e) => {
                        (0, C.AM)(d.createElement(ie, null), (0, Q.RA)(e));
                      },
                    },
                    "Show Publishing Audit History",
                  ),
                ),
                d.createElement(
                  "div",
                  {
                    className: (0, I.Z)(
                      N().EventDashboardCtn,
                      N().EventDashAdminToolsCtn,
                      N().EventDashboardSearchCtn,
                    ),
                  },
                  d.createElement(G.II, {
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
              { className: N().MainLists },
              t.length > 0 &&
                d.createElement(
                  "div",
                  { className: (0, I.Z)(N().Section, N().Unpublished) },
                  d.createElement(
                    "div",
                    {
                      className: (0, I.Z)(
                        "maincontent",
                        "eventlist",
                        N().EventDashboardCtn,
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: N().DisplaySectionHeader },
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
                  { className: (0, I.Z)(N().Section, N().Staged) },
                  d.createElement(
                    "div",
                    {
                      className: (0, I.Z)(
                        "maincontent",
                        "eventlist",
                        N().EventDashboardCtn,
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: N().DisplaySectionHeader },
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
                    N().Section,
                    N().DisplaySectionHeaderContainer,
                    N().Visible,
                  ),
                },
                d.createElement(
                  "div",
                  {
                    className: (0, I.Z)(
                      "maincontent",
                      "eventlist",
                      N().EventDashboardCtn,
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: N().DisplaySectionHeader },
                    (0, T.Xx)("#EventDisplay_Visible_Title"),
                  ),
                  d.createElement(
                    "div",
                    { className: N().DisplaySectionSubHeader },
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
      (0, l.gn)([k.ak], _e.prototype, "OnScroll", null),
        (0, l.gn)([k.ak], _e.prototype, "LoadMorePublicEventWithDelay", null),
        (0, l.gn)([k.ak], _e.prototype, "LoadMorePublicEvents", null),
        (0, l.gn)([k.ak], _e.prototype, "UpdateShowEventMetaDataSizes", null),
        (0, l.gn)([k.ak], _e.prototype, "ApplySearch", null),
        (0, l.gn)([k.ak], _e.prototype, "OnUpdateSearch", null),
        (_e = (0, l.gn)([c.Pi], _e));
      const he = (0, c.Pi)((e) => {
          const t = new E.K(A.JA.CLANSTEAMID),
            n = p.sV.GetClanInfoByClanAccountID(t.GetAccountID()),
            { appid_or_vanity_str: i } = e;
          let l = _.h4.GetTotalStats(t);
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
                  G.zx,
                  {
                    onClick: (e) =>
                      (0, C.AM)(
                        d.createElement(Ee, { clanInfo: n }),
                        (0, Q.RA)(e),
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
        ge = (0, f.M)(_e);
      var Se = n(82227),
        be = n(26911),
        De = n(73941),
        Ce = n(77581),
        ye = n(45944),
        we = n(42855),
        Ie = n(29525);
      class Te {
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
            Te.s_globalSingletonStore ||
              ((Te.s_globalSingletonStore = new Te()),
              ("dev" != A.De.WEB_UNIVERSE && "beta" != A.De.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = Te.s_globalSingletonStore)),
            Te.s_globalSingletonStore
          );
        }
        constructor() {
          if (
            ((this.m_counts = null),
            document.getElementById("application_config"))
          ) {
            let e = (0, A.kQ)("deckcompatcount", "application_config");
            Te.ValidateListCompat(e) && (this.m_counts = e);
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
      var xe = n(59777),
        ke = n(17634),
        Ae = n(7081),
        fe = n(87635),
        Me = n(11448),
        Ne = n(54154),
        Le = n(1761);
      function Ge(e) {
        return e < 10 ? "0" + e : e;
      }
      function Pe(e) {
        const { giveawayid: t } = e,
          n = (0, Ne.J)(t),
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
                          Ge(Math.floor(l / 60)) + ":" + Ge(l % 60),
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
      var Be = n(84823),
        Oe = n(88276),
        Xe = n(62613),
        Ue = n(80212),
        Ve = n(91494),
        We = n(63493),
        Re = n(49026),
        je = n(94005),
        Fe = n(74840);
      function He(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          a = (0, Oe.oS)(n);
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
                return d.createElement(ze, {
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
      function ze(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: a } = e,
          r = d.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return (null == e ? void 0 : e.length) > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: i, eStoreDiscoveryQueueType: l } = d.useMemo(
            () => (0, je.N)(t, r),
            [t, r],
          ),
          o = (0, Fe.GD)(l, i),
          s = Math.min(n + o, a);
        return d.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          s.toLocaleString(),
        );
      }
      function qe(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ie.im)(e.args, "eventid"));
        return A.L7.logged_in && n
          ? d.createElement(He, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function Je(e) {
        const { nDoorIndex: t, children: n } = e,
          a = (0, Ae._4)(t),
          { fnOpenDoor: r } = (0, Ae.Qr)(),
          [i, l] = d.useState(!1),
          [o, s] = d.useState(!1);
        return d.createElement(
          G.zx,
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
                  : (0, Ue.X)());
            },
          },
          Boolean(o)
            ? d.createElement("div", null, (0, T.Xx)("#GrantAwardError_Busy"))
            : d.createElement(
                d.Fragment,
                null,
                Boolean(i) && d.createElement(y.V, { size: "small" }),
                Boolean(a) && d.createElement(Xe.JrY, null),
                n,
              ),
        );
      }
      function Qe(e) {
        const t = Number.parseInt((0, Ie.im)(e.args)) || 0;
        return t >= 0 && t < 32
          ? d.createElement(Je, { nDoorIndex: t }, e.children)
          : null;
      }
      const Ze = (0, V.EN)(Ve.CZ);
      function Ke(e) {
        var t, n;
        const a = Number.parseInt((0, Ie.im)(e.args)),
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
            return d.createElement(Ze, {
              event: r,
              section: r.jsondata.sale_sections[l],
              activeTab: new Re.u(null, t),
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
      var Ye = n(77557),
        $e = n(79873);
      const et = d.Fragment;
      function tt(e) {
        const {
            reservationPackageID: t,
            depositPackageID: n,
            bIsPreview: a,
          } = e,
          r = (0, $e.Jv)(t),
          i = (0, d.useMemo)(
            () => [
              {
                unique_id: "reservation_bbcode_" + t,
                reservation_package: t,
                deposit_package: n,
                localized_reservation_desc: [],
              },
            ],
            [n, t],
          );
        return r
          ? d.createElement(
              j.SV,
              null,
              d.createElement(
                d.Suspense,
                { fallback: null },
                d.createElement(et, { bIsPreview: a, rgReservationDef: i }),
              ),
              Boolean(r.allow_purchase_in_country) &&
                d.createElement(
                  "div",
                  { className: i[0].unique_id },
                  d.createElement(Ye.TN, {
                    reservationDef: i[0],
                    hardwareDetail: r,
                  }),
                  d.createElement(Ye.EU, {
                    reservationDef: i[0],
                    hardwareDetail: r,
                  }),
                ),
            )
          : d.createElement(y.V, {
              string: (0, T.Xx)("#Loading"),
              size: "small",
              position: "center",
            });
      }
      let nt = null;
      function at(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ie.im)(e.args, "appid")),
          a = Number.parseInt((0, Ie.im)(e.args, "itemdefid")),
          r = Number.parseInt((0, Ie.im)(e.args, "maxquantity")),
          i = (0, Ie.im)(e.args, "calltoaction");
        return (0, ke.$4)(n, a)
          ? d.createElement(fe.t, {
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
      function rt(e) {
        const t = (function () {
          const [e, t] = d.useState(Te.Get().GetCounts());
          return (
            d.useEffect(() => {
              e || Te.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return d.createElement(y.V, { size: "small" });
        const n = Number.parseInt((0, Ie.im)(e.args));
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
      function it(e) {
        var t, n, a, r;
        const i = (0, xe.V)("library");
        if (!i) return d.createElement(y.V, { size: "small" });
        const l = Number.parseInt((0, Ie.im)(e.args));
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
      function lt(e) {
        const t = Number.parseInt((0, Ie.im)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, Ie.im)(e.args, "hide")));
        return t >= 0
          ? d.createElement(ot, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function ot(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          r = (0, Ae._4)(t);
        return null == r
          ? null
          : (r && !n) || (!r && n)
          ? d.createElement(d.Fragment, null, e.children)
          : null;
      }
      function st(e) {
        if (A.L7.logged_in) {
          const t = Number.parseInt((0, Ie.im)(e.args)),
            n = Number.parseInt((0, Ie.im)(e.args, "mod"));
          if (n > 0 && t < n && A.L7.accountid % n == t) return e.children;
        }
        return null;
      }
      function ct(e) {
        const t = (0, Ie.im)(e.args);
        return (null == t ? void 0 : t.trim().length) > 0
          ? d.createElement("div", { className: t.trim() }, e.children)
          : d.createElement(d.Fragment, null, e.children);
      }
      function dt(e) {
        return d.createElement(
          "span",
          { className: Me.LocalizeBlock },
          (0, T.yu)(
            e.children,
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
          ),
        );
      }
      function mt(e) {
        let t = (0, Ie.im)(e.args);
        return t
          ? d.createElement(Pe, { giveawayid: t })
          : d.createElement(d.Fragment, null);
      }
      function ut(e) {
        const t = Number.parseInt((0, Ie.im)(e.args));
        if (t) {
          const n = Number.parseInt((0, Ie.im)(e.args, "depositpackageid"));
          return d.createElement(tt, {
            reservationPackageID: t,
            depositPackageID: n,
          });
        }
        return d.createElement(d.Fragment, null);
      }
      var vt = n(78356),
        Et = (n(7765), n(34345), n(53512)),
        pt = n(69406),
        _t = n(74031);
      function ht(e) {
        const [t, n] = d.useState(!0),
          { data: l } = (0, _t.NH)("english");
        return (
          d.useEffect(() => {
            ye.Q8.Init(new Ce.J(A.De.WEBAPI_BASE_URL)),
              se.j1.Init(),
              r.wk.Init(),
              vt.d.AddDictionary(
                (null == nt &&
                  (nt = new Map([
                    [
                      "itemdef",
                      {
                        Constructor: at,
                        autocloses: !1,
                        skipInternalNewline: !0,
                        allowWrapTextForCopying: !0,
                      },
                    ],
                    ["wishlist", { Constructor: Be.gq, autocloses: !1 }],
                    ["deckcompatcount", { Constructor: rt, autocloses: !1 }],
                    [
                      "deckcompatuserlibrarycount",
                      { Constructor: it, autocloses: !1 },
                    ],
                    ["giveawayinfo", { Constructor: mt, autocloses: !1 }],
                    ["price", { Constructor: Be.J8, autocloses: !1 }],
                    ["pricesavings", { Constructor: Be.Eu, autocloses: !1 }],
                    [
                      "eventdoorvisibility",
                      { Constructor: lt, autocloses: !1 },
                    ],
                    ["chooseaccount", { Constructor: st, autocloses: !1 }],
                    ["badgecurrentlevel", { Constructor: qe, autocloses: !1 }],
                    ["optindoorquest", { Constructor: Qe, autocloses: !1 }],
                    ["classname", { Constructor: ct, autocloses: !1 }],
                    ["localize", { Constructor: dt, autocloses: !1 }],
                    ["salesection", { Constructor: Ke, autocloses: !1 }],
                    ["reservationbutton", { Constructor: ut, autocloses: !1 }],
                  ])),
                nt),
              ),
              Promise.all([we.cb.InitGlobal()]).then(() => n(!1));
          }, []),
          t || !l
            ? d.createElement(y.V, {
                position: "center",
                size: "medium",
                string: (0, T.Xx)("#Loading"),
              })
            : d.createElement(
                H.uX.Provider,
                { value: { bCanUseLink: !0 } },
                d.createElement(Et.bE, null),
                d.createElement(
                  V.rs,
                  null,
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Home(":appid_or_vanity_str"),
                    component: ge,
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.List(":appid_or_vanity_str"),
                    component: ge,
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
                    render: (e) => d.createElement(be.Kz, Object.assign({}, e)),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        be.IE,
                        Object.assign({}, e, { key: e.match.params.gid }),
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Publish(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        be.IE,
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
                        Se.q,
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
                        Se.q,
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
                        Se.q,
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
                        De.Lc,
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
                        De.QU,
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
                        De.R0,
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
                        De.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        }),
                      ),
                  }),
                  d.createElement(V.AW, { component: pt.R }),
                ),
              )
        );
      }
    },
  },
]);

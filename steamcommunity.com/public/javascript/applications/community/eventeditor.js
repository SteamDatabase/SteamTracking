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
        AuditInfoItem: "partnereventdashboard_AuditInfoItem_3zF56",
        AuditItemStatsCtn: "partnereventdashboard_AuditItemStatsCtn_2is7F",
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
      n.d(t, { M: () => C, q: () => D });
      var a = n(33940),
        r = n(89526),
        i = n(88464),
        l = n(32765),
        o = n(75457),
        s = n(47165),
        c = n(14482),
        d = n(13394),
        m = n(73846),
        u = n(51059),
        v = n(96798),
        E = n(49234),
        p = n(52316),
        _ = n(12623),
        h = n(17547),
        g = n(63821),
        S = n(74314);
      let b = class extends r.Component {
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
                  h.SV,
                  null,
                  r.createElement(g.oS, {
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
                      trackingLocation:
                        _.Sz.k_EPartnerEventDisplayLocation_CommunityHub,
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
      b = (0, a.gn)([i.Pi], b);
      const D = (0, u.M)(b),
        C = (e) =>
          r.createElement(
            S.R0,
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
      n.r(t), n.d(t, { default: () => _t });
      var a = n(96927),
        r = n(13394),
        i = n(59978),
        l = n(33940),
        o = n(52868),
        s = n.n(o),
        c = n(88464),
        d = n(89526),
        m = n(565),
        u = n(75457),
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
        k = n(14826),
        T = n(23217),
        x = n(4306),
        A = n(32765),
        f = n(51059),
        M = n(43239),
        L = n.n(M),
        N = n(97567),
        G = n(57605),
        P = n(95837);
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
                          const t = (0, N.HJ)(e, !0, !0, !0),
                            a = t.GetLanguagesWithTokens();
                          a.length > 1
                            ? (a.sort((e, t) =>
                                (0, k.Xx)(
                                  "#Language_" + (0, u.j_)(e),
                                ).localeCompare(
                                  (0, k.Xx)("#Language_" + (0, u.j_)(t)),
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
                          let t = (0, T.l)(e);
                          (0, C.AM)(
                            d.createElement(D.JX, {
                              strTitle: (0, k.Xx)("#EventEditor_CloneError"),
                              bAlertDialog: !0,
                              bDestructiveWarning: !0,
                              strDescription: (0, k.Xx)(
                                "#EventEditor_CloneError_Desc",
                                t.strErrorMsg,
                              ),
                            }),
                            window,
                            { strTitle: (0, k.Xx)("#EventEditor_CloneError") },
                          );
                        });
                  })(t, e, n),
              },
              (0, k.Xx)("#Button_Clone"),
            );
      }
      function O(e, t, n) {
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
      function X(e) {
        const { langs: t, locData: n, closeModal: a, fnOnGotoPage: r } = e,
          i = (0, u.jM)(A.De.LANGUAGE),
          [l, o] = d.useState(new Set(t.filter((e) => e != i)));
        return d.createElement(
          D.uH,
          {
            strTitle: (0, k.Xx)("#Button_Clone"),
            onOK: () => O(r, n, Array.from(l)),
            strDescription: (0, k.Xx)("#EventEditor_Clone_MultiLanguages"),
            closeModal: a,
          },
          d.createElement(
            "div",
            { className: P.CloneLangAlert },
            (0, k.Xx)("#EventEditor_Clone_Alert"),
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
                label: (0, k.Xx)("#Language_" + (0, u.j_)(e)),
                checked: !l.has(e),
              }),
            ),
          ),
          d.createElement(
            G.zx,
            { onClick: () => o(new Set()) },
            (0, k.Xx)("#EventEditor_Clone_SelectAll"),
          ),
          d.createElement(
            G.zx,
            { onClick: () => o(new Set(t)) },
            (0, k.Xx)("#EventEditor_Clone_DeSelectAll"),
          ),
        );
      }
      var U = n(35809),
        W = n(59934),
        V = n(85651),
        R = n(69485),
        j = n(17547),
        F = n(52932),
        H = n(20790),
        z = n(54297),
        q = n(21904),
        J = n(9943),
        Q = n(60161),
        Z = n(73406),
        K = n(16785);
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
                return d.createElement(W.l_, {
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
          t.BIsLanguageValidForRealms(s) ||
            (s = t.BInRealmGlobal()
              ? u.Df.k_Lang_English
              : u.Df.k_Lang_SteamChina_SChinese);
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
                      (0, k.Xx)("#EventEditor_Status_WillBeVisible_EventStart"),
                    )
                  : d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      (0, k.kQ)(
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
            let e = V.JW.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateUpcoming },
                  (0, k.Xx)("#EventDisplay_Upcoming"),
                ))
              : (0, Z.G1)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateActive },
                  (0, k.Xx)("#EventDisplay_Active"),
                ))
              : t.GetStartTimeAndDateUnixSeconds() > e + 3600 &&
                (m = d.createElement(
                  "span",
                  { className: P.EventStateRecent },
                  (0, k.Xx)("#EventDisplay_RecentlyActive"),
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
            T = Boolean(
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
                          (0, k.Xx)("#EventEditor_Status_HasSale"),
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
                            " " + (0, k.Xx)("#EventEditor_Status_FromRSSFeed"),
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
                        (0, k.kQ)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            y.m_stats.total_showm.toLocaleString(),
                          ),
                        ),
                        d.createElement("br", null),
                        (0, k.kQ)(
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
                  T
                    ? d.createElement(
                        "div",
                        {
                          className: P.TileButtonContainer,
                          onClick: (e) => this.OnIgnoreFallbackClick(e),
                        },
                        d.createElement(
                          "div",
                          null,
                          (0, k.Xx)("#EventEditor_DataFromConnectAnnouncement"),
                        ),
                        d.createElement(
                          H.JW,
                          {
                            className: (0, I.Z)(P.ManageButton, P.Edit),
                            eventModel: t,
                            route: H.Ue.k_eView,
                          },
                          (0, k.Xx)("#Button_ViewPage"),
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
      (0, l.gn)([x.ak], Y.prototype, "OnFallbackClick", null),
        (0, l.gn)([x.ak], Y.prototype, "OnGotoPage", null),
        (0, l.gn)([x.ak], Y.prototype, "OnIgnoreFallbackClick", null),
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
              let t = (0, T.l)(e);
              (0, C.AM)(
                d.createElement(D.JX, {
                  strTitle: (0, k.Xx)("#EventEditor_PublishingError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: (0, k.Xx)(
                    "#EventEditor_PublishingError_Desc",
                    t.strErrorMsg,
                  ),
                }),
                window,
                { strTitle: (0, k.Xx)("#EventEditor_PublishingError") },
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
                (0, k.Xx)("#Button_Edit"),
              ),
            n &&
              d.createElement(
                H.JW,
                {
                  className: (0, I.Z)(P.ManageButton, P.Edit),
                  "data-tooltip-text": (0, k.Xx)(
                    "#EventEditor_Button_MigrateAndEdit_Announcement_ttip",
                  ),
                  eventModel: e,
                  route: H.Ue.k_eCommunityMigrate,
                  onClick: this.StopPropagation,
                },
                (0, k.Xx)("#EventEditor_Button_MigrateAndEdit"),
              ),
            a &&
              d.createElement(
                H.JW,
                {
                  className: (0, I.Z)(P.ManageButton, P.View),
                  "data-tooltip-text": (0, k.Xx)(
                    "#EventEditor_Button_PreviewButton_ttip",
                  ),
                  eventModel: e,
                  route: H.Ue.k_eCommunityPreview,
                  onClick: this.StopPropagation,
                },
                (0, k.Xx)("#EventDisplay_Preview"),
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
                (0, k.Xx)("#EventDisplay_View"),
              ),
            !r &&
              !n &&
              d.createElement(
                "div",
                {
                  className: (0, I.Z)(P.ManageButton, P.Publish),
                  onClick: this.OnPublishEvent,
                },
                (0, k.Xx)("#EventDisplay_Publish"),
              ),
            d.createElement("div", { className: P.Spacer }, " "),
            d.createElement(B, { eventModel: e, fnOnGotoPage: t }),
            d.createElement(
              "div",
              {
                className: (0, I.Z)(P.ManageButton, P.Delete),
                "data-tooltip-text": (0, k.Xx)(
                  "#EventEditor_Button_DeleteButton_ttip",
                ),
                onClick: this.OnDeleteClickAndVerify,
              },
              (0, k.Xx)("#Button_Delete"),
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
      (0, l.gn)([x.ak], $.prototype, "OnIgnoreFallbackClick", null),
        (0, l.gn)([x.ak], $.prototype, "OnPublishEvent", null),
        (0, l.gn)([x.ak], $.prototype, "OnPublishSuccess", null),
        (0, l.gn)([x.ak], $.prototype, "StopPropagation", null),
        (0, l.gn)([x.ak], $.prototype, "OnDeleteClickAndVerify", null),
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
      var ne = n(91666),
        ae = n(57681),
        re = n(24166);
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
                  string: (0, k.Xx)("#Loading"),
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
      var se = n(10412),
        ce = n(82971),
        de = n(15254),
        me = n(25508),
        ue = n(99499),
        ve = n.n(ue);
      function Ee(e) {
        const { clanInfo: t, closeModal: n } = e,
          [a, r] = d.useState(!0),
          [i, o] = d.useState(!0),
          c = 1063339200,
          m = V.JW.GetTimeNowWithOverride(),
          [v, E] = d.useState(m - me._H.PerMonth),
          [p, h] = d.useState(m),
          [g, S] = d.useState(-1),
          b = g >= 0;
        return d.createElement(
          D.uH,
          {
            strTitle: (0, k.Xx)("#EventDashboard_Stats_title"),
            strDescription: (0, k.Xx)("#EventDashboard_Stats_desc"),
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
              (0, k.Xx)("#EventDashboard_Stats_Oldest_Title"),
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(G.ji, {
                label: (0, k.Xx)("#EventDashboard_Stats_Oldest"),
                onChange: r,
                checked: a,
                disabled: b,
              }),
              !a &&
                d.createElement(
                  "div",
                  null,
                  (0, k.Xx)("#EventDashboard_Stats_Oldest_Override"),
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
              (0, k.Xx)("#EventDashboard_Stats_Newest_Title"),
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(G.ji, {
                label: (0, k.Xx)("#EventDashboard_Stats_Newest"),
                onChange: o,
                checked: i,
                disabled: b,
              }),
              !i &&
                d.createElement(
                  "div",
                  null,
                  (0, k.Xx)("#EventDashboard_Stats_Newest_Override"),
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
                string: (0, k.Xx)("#EventDashboard_Stats_Progress", g),
              }),
          ),
        );
      }
      var pe = n(85246);
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
          let t = (0, T.l)(e);
          (0, C.AM)(
            d.createElement(
              D.JX,
              null,
              (0, k.Xx)("#Error_Description", t.errorCode, t.strErrorMsg),
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
              console.log("EventListView: " + (0, T.l)(e).strErrorMsg),
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
                      L().EventDashboardCtn,
                      L().EventDashAdminToolsCtn,
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
                      L().EventDashboardCtn,
                      L().EventDashAdminToolsCtn,
                      L().EventDashboardSearchCtn,
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
                      (0, k.Xx)("#EventDisplay_Unpublished_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": (0, k.Xx)(
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
                      (0, k.Xx)("#EventDisplay_Stage_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": (0, k.Xx)(
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
                    (0, k.Xx)("#EventDisplay_Visible_Title"),
                  ),
                  d.createElement(
                    "div",
                    { className: L().DisplaySectionSubHeader },
                    (0, k.Xx)("#EventDisplay_Visible_Title_WithRange"),
                  ),
                  a && a,
                  !r &&
                    !a &&
                    d.createElement(
                      "div",
                      null,
                      (0, k.Xx)("#EventDisplay_NoPublic"),
                    ),
                  r &&
                    d.createElement(y.V, {
                      position: "center",
                      string: (0, k.Xx)("#Loading"),
                    }),
                  this.state.bExhaustedEventList &&
                    d.createElement(
                      "div",
                      null,
                      (0, k.Xx)("#EventDisplay_AllPublicShown"),
                    ),
                  this.state.bErrorOnInfiniteScrollRequest &&
                    d.createElement(
                      "div",
                      null,
                      (0, k.Xx)("#EventDisplay_HitErrorInfiniteScroll"),
                    ),
                ),
              ),
            ),
          );
        }
      };
      (0, l.gn)([x.ak], _e.prototype, "OnScroll", null),
        (0, l.gn)([x.ak], _e.prototype, "LoadMorePublicEventWithDelay", null),
        (0, l.gn)([x.ak], _e.prototype, "LoadMorePublicEvents", null),
        (0, l.gn)([x.ak], _e.prototype, "UpdateShowEventMetaDataSizes", null),
        (0, l.gn)([x.ak], _e.prototype, "ApplySearch", null),
        (0, l.gn)([x.ak], _e.prototype, "OnUpdateSearch", null),
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
                (0, k.Xx)("#EventDisplay_Events"),
                d.createElement(
                  "div",
                  { className: S().subtitle },
                  (0, k.Xx)("#EventDisplay_Edit_Desc"),
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
                  (0, k.Xx)("#EventDisplay_CreateNewEvent"),
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
                  (0, k.Xx)("#EventDashboard_Stats_export"),
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
      var Se = n(61557),
        be = n(50286),
        De = n(74314),
        Ce = n(19094),
        ye = n(58961),
        we = n(56368),
        Ie = n(14288),
        ke = n(21907),
        Te = n(42735);
      class xe {
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
                (null === (e = r.data) || void 0 === e ? void 0 : e.success) ==
                  Te.s.k_EResultOK &&
                (null === (t = r.data) || void 0 === t ? void 0 : t.counts)
              )
                return (this.m_counts = r.data.counts), this.m_counts;
              n = (0, T.l)(r);
            } catch (e) {
              n = (0, T.l)(e);
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
            xe.s_globalSingletonStore ||
              ((xe.s_globalSingletonStore = new xe()),
              ("dev" != A.De.WEB_UNIVERSE && "beta" != A.De.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = xe.s_globalSingletonStore)),
            xe.s_globalSingletonStore
          );
        }
        constructor() {
          if (
            ((this.m_counts = null),
            document.getElementById("application_config"))
          ) {
            let e = (0, A.kQ)("deckcompatcount", "application_config");
            xe.ValidateListCompat(e) && (this.m_counts = e);
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
      var Ae = n(72709),
        fe = n(8894),
        Me = n(74710),
        Le = n(34714),
        Ne = n(99472),
        Ge = n(93883),
        Pe = n(93515);
      function Be(e) {
        return e < 10 ? "0" + e : e;
      }
      function Oe(e) {
        const { giveawayid: t } = e,
          n = (0, Ge.J)(t),
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
              { className: Pe.countdownCtn },
              Boolean(i) &&
                d.createElement(
                  "div",
                  { className: Pe.Closed },
                  r > 0
                    ? (0, k.Xx)("#Giveaway_Closed", r.toLocaleString())
                    : (0, k.Xx)("#Giveaway_Closed_NoWinnerInfo"),
                ),
              Boolean(!i) &&
                d.createElement(
                  d.Fragment,
                  null,
                  Boolean(l <= 0)
                    ? d.createElement(
                        "div",
                        { className: Pe.Throbber },
                        d.createElement(y.V, { size: "small" }),
                        d.createElement(
                          "div",
                          null,
                          (0, k.Xx)("#Giveaway_RandomDraw"),
                        ),
                      )
                    : d.createElement(
                        "div",
                        { className: Pe.CountDownCtn },
                        d.createElement(
                          "div",
                          { className: Pe.CountDownTime },
                          Be(Math.floor(l / 60)) + ":" + Be(l % 60),
                        ),
                        d.createElement(
                          "div",
                          { className: Pe.CountDownText },
                          (0, k.Xx)("#Giveaway_CountDown2"),
                          " ",
                          (0, k.Xx)("#Giveaway_KeepWatching"),
                        ),
                      ),
                  Boolean(r > 0) &&
                    d.createElement(
                      "div",
                      { className: Pe.WinnerInfo },
                      d.createElement(
                        "div",
                        { className: Pe.WinnerCount },
                        r.toLocaleString(),
                      ),
                      d.createElement(
                        "div",
                        { className: Pe.WinnerText },
                        (0, k.Xx)("#Giveaway_Congratulation"),
                      ),
                    ),
                ),
            );
      }
      var Xe = n(61963),
        Ue = n(32870),
        We = n(701),
        Ve = n(32905),
        Re = n(63821),
        je = n(4102),
        Fe = n(81362),
        He = n(4170),
        ze = n(82588);
      function qe(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          a = (0, Ue.oS)(n);
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
                return d.createElement(Je, {
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
      function Je(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: a } = e,
          r = d.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return (null == e ? void 0 : e.length) > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: i, eStoreDiscoveryQueueType: l } = d.useMemo(
            () => (0, He.N)(t, r),
            [t, r],
          ),
          o = (0, ze.GD)(l, i),
          s = Math.min(n + o, a);
        return d.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          s.toLocaleString(),
        );
      }
      function Qe(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ie.im)(e.args, "eventid"));
        return A.L7.logged_in && n
          ? d.createElement(qe, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function Ze(e) {
        const { nDoorIndex: t, children: n } = e,
          a = (0, Me._4)(t),
          { fnOpenDoor: r } = (0, Me.Qr)(),
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
                  : (0, Ve.X)());
            },
          },
          Boolean(o)
            ? d.createElement("div", null, (0, k.Xx)("#GrantAwardError_Busy"))
            : d.createElement(
                d.Fragment,
                null,
                Boolean(i) && d.createElement(y.V, { size: "small" }),
                Boolean(a) && d.createElement(We.JrY, null),
                n,
              ),
        );
      }
      function Ke(e) {
        const t = Number.parseInt((0, Ie.im)(e.args)) || 0;
        return t >= 0 && t < 32
          ? d.createElement(Ze, { nDoorIndex: t }, e.children)
          : null;
      }
      const Ye = (0, W.EN)(Re.CZ);
      function $e(e) {
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
            return d.createElement(Ye, {
              event: r,
              section: r.jsondata.sale_sections[l],
              activeTab: new Fe.u(null, t),
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
              { className: je.ErrorDiv },
              "Error could not find sale section ",
              a,
            );
        }
        return null;
      }
      var et = n(81586);
      let tt = null;
      function nt(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ie.im)(e.args, "appid")),
          a = Number.parseInt((0, Ie.im)(e.args, "itemdefid")),
          r = Number.parseInt((0, Ie.im)(e.args, "maxquantity")),
          i = (0, Ie.im)(e.args, "calltoaction");
        return (0, fe.$4)(n, a)
          ? d.createElement(Le.t, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: r },
              strCallToAction: i,
            })
          : d.createElement(y.V, {
              size: "small",
              position: "center",
              string: (0, k.Xx)("#Loading"),
            });
      }
      function at(e) {
        const t = (function () {
          const [e, t] = d.useState(xe.Get().GetCounts());
          return (
            d.useEffect(() => {
              e || xe.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return d.createElement(y.V, { size: "small" });
        const n = Number.parseInt((0, Ie.im)(e.args));
        let a = t.verified;
        switch (n) {
          case ke.Xh.k_ESteamDeckCompatibilityCategory_Playable:
            a = t.playable;
            break;
          case ke.Xh.k_ESteamDeckCompatibilityCategory_Unsupported:
            a = t.unsupported;
        }
        return d.createElement("span", null, Number(a).toLocaleString());
      }
      function rt(e) {
        var t, n, a, r;
        const i = (0, Ae.V)("library");
        if (!i) return d.createElement(y.V, { size: "small" });
        const l = Number.parseInt((0, Ie.im)(e.args));
        let o =
          (null === (t = i.verifiedList) || void 0 === t ? void 0 : t.length) ||
          0;
        switch (l) {
          case ke.Xh.k_ESteamDeckCompatibilityCategory_Playable:
            o =
              (null === (n = i.playableList) || void 0 === n
                ? void 0
                : n.length) || 0;
            break;
          case ke.Xh.k_ESteamDeckCompatibilityCategory_Unsupported:
            o =
              (null === (a = i.unsupportedList) || void 0 === a
                ? void 0
                : a.length) || 0;
            break;
          case ke.Xh.k_ESteamDeckCompatibilityCategory_Unknown:
            o =
              (null === (r = i.unknownList) || void 0 === r
                ? void 0
                : r.length) || 0;
        }
        return d.createElement("span", null, Number(o).toLocaleString());
      }
      function it(e) {
        const t = Number.parseInt((0, Ie.im)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, Ie.im)(e.args, "hide")));
        return t >= 0
          ? d.createElement(lt, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function lt(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          r = (0, Me._4)(t);
        return null == r
          ? null
          : (r && !n) || (!r && n)
          ? d.createElement(d.Fragment, null, e.children)
          : null;
      }
      function ot(e) {
        if (A.L7.logged_in) {
          const t = Number.parseInt((0, Ie.im)(e.args)),
            n = Number.parseInt((0, Ie.im)(e.args, "mod"));
          if (n > 0 && t < n && A.L7.accountid % n == t) return e.children;
        }
        return null;
      }
      function st(e) {
        const t = (0, Ie.im)(e.args);
        return (null == t ? void 0 : t.trim().length) > 0
          ? d.createElement("div", { className: t.trim() }, e.children)
          : d.createElement(d.Fragment, null, e.children);
      }
      function ct(e) {
        return d.createElement(
          "span",
          { className: Ne.LocalizeBlock },
          (0, k.yu)(
            e.children,
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
          ),
        );
      }
      function dt(e) {
        let t = (0, Ie.im)(e.args);
        return t
          ? d.createElement(Oe, { giveawayid: t })
          : d.createElement(d.Fragment, null);
      }
      function mt(e) {
        const t = Number.parseInt((0, Ie.im)(e.args));
        if (t) {
          const n = Number.parseInt((0, Ie.im)(e.args, "depositpackageid"));
          return d.createElement(et.Y, {
            reservationPackageID: t,
            depositPackageID: n,
          });
        }
        return d.createElement(d.Fragment, null);
      }
      var ut = n(92307),
        vt = (n(35266), n(88026), n(78443)),
        Et = n(71209),
        pt = n(95408);
      function _t(e) {
        const [t, n] = d.useState(!0),
          { data: l } = (0, pt.NH)("english");
        return (
          d.useEffect(() => {
            ye.Q8.Init(new Ce.J(A.De.WEBAPI_BASE_URL)),
              se.j1.Init(),
              r.wk.Init(),
              ut.d.AddDictionary(
                (null == tt &&
                  (tt = new Map([
                    [
                      "itemdef",
                      {
                        Constructor: nt,
                        autocloses: !1,
                        skipInternalNewline: !0,
                        allowWrapTextForCopying: !0,
                      },
                    ],
                    ["wishlist", { Constructor: Xe.gq, autocloses: !1 }],
                    ["deckcompatcount", { Constructor: at, autocloses: !1 }],
                    [
                      "deckcompatuserlibrarycount",
                      { Constructor: rt, autocloses: !1 },
                    ],
                    ["giveawayinfo", { Constructor: dt, autocloses: !1 }],
                    ["price", { Constructor: Xe.J8, autocloses: !1 }],
                    ["pricesavings", { Constructor: Xe.Eu, autocloses: !1 }],
                    [
                      "eventdoorvisibility",
                      { Constructor: it, autocloses: !1 },
                    ],
                    ["chooseaccount", { Constructor: ot, autocloses: !1 }],
                    ["badgecurrentlevel", { Constructor: Qe, autocloses: !1 }],
                    ["optindoorquest", { Constructor: Ke, autocloses: !1 }],
                    ["classname", { Constructor: st, autocloses: !1 }],
                    ["localize", { Constructor: ct, autocloses: !1 }],
                    ["salesection", { Constructor: $e, autocloses: !1 }],
                    ["reservationbutton", { Constructor: mt, autocloses: !1 }],
                  ])),
                tt),
              ),
              Promise.all([we.cb.InitGlobal()]).then(() => n(!1));
          }, []),
          t || !l
            ? d.createElement(y.V, {
                position: "center",
                size: "medium",
                string: (0, k.Xx)("#Loading"),
              })
            : d.createElement(
                H.uX.Provider,
                { value: { bCanUseLink: !0 } },
                d.createElement(vt.bE, null),
                d.createElement(
                  W.rs,
                  null,
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Home(":appid_or_vanity_str"),
                    component: ge,
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.List(":appid_or_vanity_str"),
                    component: ge,
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Create(":appid_or_vanity_str"),
                    component: i.k,
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Category(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        i.k,
                        Object.assign({}, e, { key: e.match.params.gid }),
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.EditRedirectToCategory(":appid_or_vanity_str"),
                    render: (e) => d.createElement(be.Kz, Object.assign({}, e)),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        be.IE,
                        Object.assign({}, e, { key: e.match.params.gid }),
                      ),
                  }),
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, { component: Et.R }),
                ),
              )
        );
      }
    },
  },
]);

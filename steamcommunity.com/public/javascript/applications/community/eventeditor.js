/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9349],
  {
    53861: (e) => {
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
    15986: (e) => {
      e.exports = { ErrorDiv: "saleeventbbcodeparser_ErrorDiv_1Vj6H" };
    },
    76786: (e) => {
      e.exports = { DialogCtn: "partnereventstatsexport_DialogCtn_2LwQU" };
    },
    70216: (e) => {
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
    28645: (e) => {
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
    91799: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => w, q: () => D });
      var a = n(70655),
        i = n(67294),
        r = n(29323),
        l = n(90666),
        o = n(26149),
        s = n(3389),
        c = (n(9355), n(14627)),
        d = n(10669),
        m = n(74449),
        u = n(36067),
        v = n(67754),
        p = n(70350),
        _ = n(89694),
        E = (n(68002), n(32548)),
        h = n(55310),
        g = n(70882);
      let S = class extends i.Component {
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
              ? i.createElement(
                  E.S,
                  null,
                  i.createElement(h.o, {
                    eventModel: e,
                    bIsPreview: !0,
                    language: t,
                  })
                )
              : i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(c.TY, {
                    event: e,
                    lang: t,
                    partnerEventStore: d.wk,
                    emoticonStore: _.F,
                    adminPanel: i.createElement(v.H, {
                      eventModel: e,
                      partnerEventStore: d.wk,
                    }),
                    otherEventRow: i.createElement(p._G, {
                      clanAccountID: e.clanSteamID.GetAccountID(),
                      trackingLocation: 6,
                      gidAnnouncement: e.AnnouncementGID,
                      partnerEventStore: d.wk,
                      bViewAllShowInfiniteScroll: !e.BIsOGGEvent(),
                    }),
                  })
                );
          }
          return i.createElement(m.H, {
            editModel: d.wk.GetEditModel(),
            appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
            gid: this.props.match.params.gid,
            bDisplaySale: "previewsale" === e,
          });
        }
      };
      S = (0, a.gn)([r.Pi], S);
      const D = (0, u.M)(S),
        w = (e) =>
          i.createElement(
            g.R0,
            Object.assign({}, e, {
              key: e.match.params.oldAnnouncementGID,
              bClearDirty: !0,
              bPreview: !1,
              bPreventRedirect: !0,
            })
          );
    },
    88569: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => pt });
      var a = n(9355),
        i = n(10669),
        r = n(13748),
        l = n(70655),
        o = n(9669),
        s = n.n(o),
        c = n(29323),
        d = n(67294),
        m = n(73727),
        u = (n(54698), n(49186)),
        v = n(3389),
        p = n(76776),
        _ = n(47593),
        E = n(28578),
        h = n(34133),
        g = n.n(h),
        S = n(58687),
        D = n(69472),
        w = n(59650),
        b = n(13596),
        y = n(77520),
        C = n(7573),
        I = n(41311),
        T = n(93976),
        f = n(64839),
        x = n(90666),
        k = n(36067),
        A = n(70216),
        L = n.n(A),
        M = n(97914),
        N = n(27775),
        G = n(26149),
        P = n(48341),
        B = (n(98650), n(28645));
      function O(e) {
        const { eventModel: t, fnOnGotoPage: n } = e;
        return t.bOldAnnouncement
          ? null
          : d.createElement(
              "div",
              {
                className: (0, C.Z)(B.ManageButton, B.Clone),
                onClick: (e) =>
                  (function (e, t, n) {
                    t.stopPropagation(),
                      i.wk
                        .LoadEditorModel(e.clanSteamID, e.GID)
                        .then((e) => {
                          const t = (0, N.HJ)(e, !0, !0, !0),
                            a = t.GetLanguagesWithTokens();
                          a.length > 1
                            ? (a.sort((e, t) =>
                                (0, I.Xx)(
                                  "#Language_" + (0, G.j_)(e)
                                ).localeCompare(
                                  (0, I.Xx)("#Language_" + (0, G.j_)(t))
                                )
                              ),
                              (0, w.AM)(
                                d.createElement(R, {
                                  langs: a,
                                  locData: t,
                                  fnOnGotoPage: n,
                                }),
                                window
                              ))
                            : X(n, t);
                        })
                        .catch((e) => {
                          let t = (0, T.l)(e);
                          (0, w.AM)(
                            d.createElement(D.JX, {
                              strTitle: (0, I.Xx)("#EventEditor_CloneError"),
                              bAlertDialog: !0,
                              bDestructiveWarning: !0,
                              strDescription: (0, I.Xx)(
                                "#EventEditor_CloneError_Desc",
                                t.strErrorMsg
                              ),
                            }),
                            window,
                            { strTitle: (0, I.Xx)("#EventEditor_CloneError") }
                          );
                        });
                  })(t, e, n),
              },
              (0, I.Xx)("#Button_Clone")
            );
      }
      function X(e, t, n) {
        const a = i.wk.CreateClone();
        if (n && n.length > 0) {
          const e = t.GetLanguagesWithTokens();
          t.ClearLanguagesTokens(n),
            (a.GetEventModel().jsondata.bSaleEnabled = !0),
            (0, N.XS)(a, t, e),
            (a.GetEventModel().jsondata.bSaleEnabled = !1);
        }
        e(null, "clone");
      }
      function R(e) {
        const { langs: t, locData: n, closeModal: a, fnOnGotoPage: i } = e,
          r = (0, G.jM)(x.De.LANGUAGE),
          [l, o] = d.useState(new Set(t.filter((e) => e != r)));
        return d.createElement(
          D.uH,
          {
            strTitle: (0, I.Xx)("#Button_Clone"),
            onOK: () => X(i, n, Array.from(l)),
            strDescription: (0, I.Xx)("#EventEditor_Clone_MultiLanguages"),
            closeModal: a,
          },
          d.createElement(
            "div",
            { className: B.CloneLangAlert },
            (0, I.Xx)("#EventEditor_Clone_Alert")
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
                label: (0, I.Xx)("#Language_" + (0, G.j_)(e)),
                checked: !l.has(e),
              })
            )
          ),
          d.createElement(
            P.zx,
            { onClick: () => o(new Set()) },
            (0, I.Xx)("#EventEditor_Clone_SelectAll")
          ),
          d.createElement(
            P.zx,
            { onClick: () => o(new Set(t)) },
            (0, I.Xx)("#EventEditor_Clone_DeSelectAll")
          )
        );
      }
      var U = n(72710),
        V = n(78587),
        W = n(5525),
        j = n(159),
        F = n(32548),
        H = n(6205),
        z = n(23937),
        q = n(96187),
        J = n(96602),
        Q = n(6456),
        Z = n(53622),
        K = n(86278),
        Y = n(60573);
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
            bShowGameName: i,
            bShowEventMetaDataSizes: r,
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
                    this.state.redirectTarget
                );
            }
          let s = (0, G.jM)(x.De.LANGUAGE);
          t.BIsLanguageValidForRealms(s) || (s = t.BInRealmGlobal() ? 0 : 29);
          let c,
            m,
            v = [t.GetImageURLWithFallback("capsule", s)],
            E = t.GetNameWithFallback(s),
            g = t.BHasSubTitle(s),
            S = t.BHasSaleEnabled(),
            D = t.visibility_state != u.ac.k_EEventStateUnpublished,
            w = t.visibility_state != u.ac.k_EEventStateVisible;
          if (
            (w &&
              D &&
              (c =
                t.visibilityStartTime == t.startTime
                  ? d.createElement(
                      "div",
                      { className: B.TileTextStartsIn },
                      (0, I.Xx)("#EventEditor_Status_WillBeVisible_EventStart")
                    )
                  : d.createElement(
                      "div",
                      { className: B.TileTextStartsIn },
                      (0, I.kQ)(
                        "#EventEditor_Status_WillBeVisible_At",
                        d.createElement(J.H6, {
                          dateAndTime:
                            t.GetVisibilityStartTimeAndDateUnixSeconds(),
                          bSingleLine: !0,
                        })
                      )
                    )),
            !w && D)
          ) {
            let e = W.JW.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: B.EventStateUpcoming },
                  (0, I.Xx)("#EventDisplay_Upcoming")
                ))
              : (0, K.G1)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: B.EventStateActive },
                  (0, I.Xx)("#EventDisplay_Active")
                ))
              : t.GetStartTimeAndDateUnixSeconds() > e + 3600 &&
                (m = d.createElement(
                  "span",
                  { className: B.EventStateRecent },
                  (0, I.Xx)("#EventDisplay_RecentlyActive")
                ));
          }
          i &&
            (E =
              ((null === (e = j.Z.Get().GetApp(t.appid)) || void 0 === e
                ? void 0
                : e.GetName()) || "") +
              ": " +
              E);
          let b =
              t.BIsPartnerEvent() &&
              t.BIsVisibleEvent() &&
              _.h.GetStatsFor(t.clanSteamID, l),
            y = p.sV.GetOGGClanInfo(t.appid),
            T = Boolean(
              o &&
                y &&
                y.is_ogg &&
                y.clanAccountID != t.announcementClanSteamID.GetAccountID()
            );
          return d.createElement(
            F.S,
            null,
            d.createElement(
              "div",
              {
                className: (0, C.Z)({
                  [B.TileContainer]: !0,
                  [B.TileAgeAppropriate]: true,
                  [B.TileAgeNotAppropriate]: !1,
                  [B.ShowEventMetaDataSizes]: r,
                }),
              },
              d.createElement(
                "div",
                {
                  className: B.TileImageCtn,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(q.J, { className: B.TileImage, srcs: v })
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
                          (0, I.Xx)("#EventEditor_Status_HasSale")
                        )
                    )
                  ),
                  g && !1,
                  d.createElement(
                    "div",
                    { className: h.ContainerSpaceBetween },
                    d.createElement(
                      "div",
                      { className: B.TileTextStartsIn },
                      d.createElement(J.H6, {
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
                                x.De.STORE_BASE_URL +
                                "curator/" +
                                t.clanSteamID.GetAccountID() +
                                "/admin/manage_rss/",
                            },
                            " " + (0, I.Xx)("#EventEditor_Status_FromRSSFeed")
                          )
                        ),
                      d.createElement(Y.bv, { eventModel: t, bAllowUpdate: !1 })
                    ),
                    Boolean(b) &&
                      d.createElement(
                        "div",
                        { className: B.TileStats },
                        (0, I.kQ)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            b.m_stats.total_showm.toLocaleString()
                          )
                        ),
                        d.createElement("br", null),
                        (0, I.kQ)(
                          "#EventDashBoard_Summary_Tile_Read",
                          d.createElement(
                            "span",
                            null,
                            b.m_stats.total_read.toLocaleString()
                          )
                        )
                      )
                  ),
                  c,
                  T
                    ? d.createElement(
                        "div",
                        {
                          className: B.TileButtonContainer,
                          onClick: (e) => this.OnIgnoreFallbackClick(e),
                        },
                        d.createElement(
                          "div",
                          null,
                          (0, I.Xx)("#EventEditor_DataFromConnectAnnouncement")
                        ),
                        d.createElement(
                          z.JW,
                          {
                            className: (0, C.Z)(B.ManageButton, B.Edit),
                            eventModel: t,
                            route: z.Ue.k_eView,
                          },
                          (0, I.Xx)("#Button_ViewPage")
                        )
                      )
                    : d.createElement(
                        ee,
                        Object.assign(
                          { fnOnGotoPage: this.OnGotoPage },
                          this.props
                        )
                      ),
                  r &&
                    d.createElement(
                      Q.s,
                      { requireAdmin: !0, clanSteamID: t.clanSteamID },
                      d.createElement(ne, { eventModel: t })
                    )
                )
              )
            )
          );
        }
      };
      (0, l.gn)([f.ak], $.prototype, "OnFallbackClick", null),
        (0, l.gn)([f.ak], $.prototype, "OnGotoPage", null),
        (0, l.gn)([f.ak], $.prototype, "OnIgnoreFallbackClick", null),
        ($ = (0, l.gn)([c.Pi], $));
      let ee = class extends d.Component {
        OnIgnoreFallbackClick(e) {
          e.stopPropagation();
        }
        OnPublishEvent(e) {
          e.stopPropagation();
          const { eventModel: t } = this.props;
          i.wk
            .LoadEditorModel(t.clanSteamID, t.GID)
            .then(() => {
              (0, w.AM)(
                d.createElement(U.b, {
                  editModel: i.wk.GetEditModel(),
                  OnPublishSuccess: this.OnPublishSuccess,
                }),
                window
              );
            })
            .catch((e) => {
              let t = (0, T.l)(e);
              (0, w.AM)(
                d.createElement(D.JX, {
                  strTitle: (0, I.Xx)("#EventEditor_PublishingError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: (0, I.Xx)(
                    "#EventEditor_PublishingError_Desc",
                    t.strErrorMsg
                  ),
                }),
                window,
                { strTitle: (0, I.Xx)("#EventEditor_PublishingError") }
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
            (0, w.AM)(
              d.createElement(H.n, {
                eventModel: this.props.eventModel,
                partnerEventStore: i.wk,
              }),
              (0, Z.RA)(e)
            );
        }
        render() {
          const { eventModel: e, fnOnGotoPage: t } = this.props;
          let n = e.bOldAnnouncement,
            a = e.visibility_state != u.ac.k_EEventStateVisible,
            i = e.visibility_state != u.ac.k_EEventStateUnpublished;
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
                  className: (0, C.Z)(B.ManageButton, B.Edit),
                  eventModel: e,
                  route: z.Ue.k_eCommunityEdit,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#Button_Edit")
              ),
            n &&
              d.createElement(
                z.JW,
                {
                  className: (0, C.Z)(B.ManageButton, B.Edit),
                  "data-tooltip-text": (0, I.Xx)(
                    "#EventEditor_Button_MigrateAndEdit_Announcement_ttip"
                  ),
                  eventModel: e,
                  route: z.Ue.k_eCommunityMigrate,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#EventEditor_Button_MigrateAndEdit")
              ),
            a &&
              d.createElement(
                z.JW,
                {
                  className: (0, C.Z)(B.ManageButton, B.View),
                  "data-tooltip-text": (0, I.Xx)(
                    "#EventEditor_Button_PreviewButton_ttip"
                  ),
                  eventModel: e,
                  route: z.Ue.k_eCommunityPreview,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#EventDisplay_Preview")
              ),
            !a &&
              d.createElement(
                z.JW,
                {
                  className: (0, C.Z)(B.ManageButton, B.View),
                  eventModel: e,
                  route: z.Ue.k_eView,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#EventDisplay_View")
              ),
            !i &&
              !n &&
              d.createElement(
                "div",
                {
                  className: (0, C.Z)(B.ManageButton, B.Publish),
                  onClick: this.OnPublishEvent,
                },
                (0, I.Xx)("#EventDisplay_Publish")
              ),
            d.createElement("div", { className: B.Spacer }, " "),
            d.createElement(O, { eventModel: e, fnOnGotoPage: t }),
            d.createElement(
              "div",
              {
                className: (0, C.Z)(B.ManageButton, B.Delete),
                "data-tooltip-text": (0, I.Xx)(
                  "#EventEditor_Button_DeleteButton_ttip"
                ),
                onClick: this.OnDeleteClickAndVerify,
              },
              (0, I.Xx)("#Button_Delete")
            )
          );
        }
      };
      function te(e, t) {
        if (!e || t <= 0) return [];
        const n = new Array();
        return (
          Object.keys(e).forEach((a) => {
            var i;
            const r = e[a],
              l =
                (null === (i = JSON.stringify(r)) || void 0 === i
                  ? void 0
                  : i.length) || 0;
            n.push({ key: a, size: l }),
              r &&
                "object" == typeof r &&
                l > 100 &&
                te(r, t - 1).forEach((e) => {
                  n.push({ key: a + ":" + e.key, size: e.size });
                });
          }),
          n
        );
      }
      (0, l.gn)([f.ak], ee.prototype, "OnIgnoreFallbackClick", null),
        (0, l.gn)([f.ak], ee.prototype, "OnPublishEvent", null),
        (0, l.gn)([f.ak], ee.prototype, "OnPublishSuccess", null),
        (0, l.gn)([f.ak], ee.prototype, "StopPropagation", null),
        (0, l.gn)([f.ak], ee.prototype, "OnDeleteClickAndVerify", null),
        (ee = (0, l.gn)([c.Pi], ee));
      const ne = (e) => {
        var t, n;
        const { eventModel: a } = e;
        if (!(null == a ? void 0 : a.jsondata)) return null;
        const i = te(a.jsondata, 3);
        i.sort((e, t) => t.size - e.size);
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
              : n.toLocaleString()
          ),
          i
            .slice(0, 10)
            .map((e) =>
              d.createElement(
                "div",
                { key: e.key },
                e.key,
                ": ",
                e.size.toLocaleString()
              )
            )
        );
      };
      var ae = n(32556),
        ie = n(21698);
      const re = (e) => {
          const { closeModal: t } = e,
            n = (0, ae.V)(x.JA.CLANACCOUNTID);
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
              ? d.createElement(b.V, {
                  string: (0, I.Xx)("#Loading"),
                  position: "center",
                  size: "medium",
                })
              : Boolean(0 == n.length)
              ? d.createElement("div", null, "No Publishing History available")
              : n.map((e) =>
                  d.createElement(le, { key: e.clan_event_gid, record: e })
                )
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
              d.createElement(J.H6, {
                dateAndTime: n.publish_time,
                bSingleLine: !0,
              })
            ),
            d.createElement(
              "div",
              null,
              d.createElement(ie.K, {
                accountID: n.publish_account_id,
                locToken: "#EventDashbard_PublishingAccount",
              })
            ),
            d.createElement(
              "div",
              null,
              "tags: ",
              null === (t = n.tags) || void 0 === t ? void 0 : t.join(", ")
            ),
            d.createElement("hr", null)
          );
        };
      var oe = n(7200),
        se = n(25333),
        ce = n(50489),
        de = n(30600),
        me = n(76786),
        ue = n.n(me);
      function ve(e) {
        const { clanInfo: t, closeModal: n } = e,
          [a, i] = d.useState(!0),
          [r, o] = d.useState(!0),
          c = 1063339200,
          m = W.JW.GetTimeNowWithOverride(),
          [u, v] = d.useState(m - de._H.PerMonth),
          [p, E] = d.useState(m),
          [h, g] = d.useState(-1),
          S = h >= 0;
        return d.createElement(
          D.uH,
          {
            strTitle: (0, I.Xx)("#EventDashboard_Stats_title"),
            strDescription: (0, I.Xx)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: S,
            onOK: () =>
              (function (e, t, n, a) {
                return (0, l.mG)(this, void 0, void 0, function* () {
                  const i = new Array(),
                    r = s().CancelToken.source();
                  let l = 0;
                  a(l);
                  const o = 100;
                  let c,
                    d = 0,
                    m = new Array();
                  const u = (0, G.jM)(x.De.LANGUAGE);
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
                        r
                      )),
                      (null == m ? void 0 : m.length) > 0)
                    ) {
                      (l += m.length), a(l), (c = m[m.length - 1].GID);
                      const t = m
                        .filter((e) => e.startTime <= n && e.BIsVisibleEvent())
                        .map((e) => e.GID);
                      t.length > 0 &&
                        (yield _.h.LoadStatsForEvents(e.clanSteamID, t, r),
                        (l += t.length),
                        a(l),
                        t.forEach((t) => {
                          const n = _.h.GetStatsFor(e.clanSteamID, t),
                            a = oe.j1.GetClanEventModel(t);
                          i.push(
                            Object.assign(
                              Object.assign(
                                { event_name: a.GetNameWithFallback(u) },
                                n.m_stats
                              ),
                              { event_gid: "'" + t }
                            )
                          );
                        }));
                    }
                  } while (m.length == o && d < 100);
                  return (
                    ce.K.WriteCSVToFile(
                      i,
                      "event_stats_" +
                        e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                        ".csv"
                    ),
                    !0
                  );
                });
              })(t, a ? c : u, r ? Number.MAX_SAFE_INTEGER : p, g).then(() =>
                n()
              ),
          },
          d.createElement(
            "div",
            { className: ue().DialogCtn },
            d.createElement(
              "div",
              { className: "DialogLabel" },
              (0, I.Xx)("#EventDashboard_Stats_Oldest_Title")
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(P.ji, {
                label: (0, I.Xx)("#EventDashboard_Stats_Oldest"),
                onChange: i,
                checked: a,
                disabled: S,
              }),
              !a &&
                d.createElement(
                  "div",
                  null,
                  (0, I.Xx)("#EventDashboard_Stats_Oldest_Override"),
                  d.createElement(se.A, {
                    nEarliestTime: c,
                    nLatestTime: r ? void 0 : p,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => u,
                    fnSetTimeToUpdate: v,
                    disabled: S,
                  })
                )
            ),
            d.createElement(
              "div",
              { className: "DialogLabel" },
              (0, I.Xx)("#EventDashboard_Stats_Newest_Title")
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(P.ji, {
                label: (0, I.Xx)("#EventDashboard_Stats_Newest"),
                onChange: o,
                checked: r,
                disabled: S,
              }),
              !r &&
                d.createElement(
                  "div",
                  null,
                  (0, I.Xx)("#EventDashboard_Stats_Newest_Override"),
                  d.createElement(se.A, {
                    nEarliestTime: a ? c : u,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => p,
                    fnSetTimeToUpdate: E,
                    disabled: S,
                  })
                )
            ),
            S &&
              d.createElement(b.V, {
                position: "center",
                size: "medium",
                string: (0, I.Xx)("#EventDashboard_Stats_Progress", h),
              })
          )
        );
      }
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
            }),
            (this.m_refScroll = d.createRef()),
            (this.m_cancelSignal = s().CancelToken.source()),
            (this.m_clanSteamID = new v.K(x.JA.CLANSTEAMID)),
            (this.k_nMaxPerDirection = 10),
            (this.m_IntervalTimer = void 0),
            x.JA.CLANACCOUNTID == u.sq && (this.k_nMaxPerDirection = 2);
        }
        EnsureEventsAreLoaded() {
          i.wk
            .LoadClanEventsForPartnerDashboard(
              this.m_clanSteamID,
              this.m_cancelSignal
            )
            .then((e) => {
              this.EventLoaded(), this.setState({ bInitialLoadComplete: !0 });
            })
            .catch(this.HandleErrorWithDialog);
        }
        EventLoaded() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            let e = i.wk.GetClanEventGIDs(this.m_clanSteamID).filter((e) => {
              let t = i.wk.GetClanEventModel(e);
              return Boolean(t && t.BIsVisibleEvent() && t.BIsPartnerEvent());
            });
            e.length > 0 &&
              _.h.LoadStatsForEvents(
                this.m_clanSteamID,
                e,
                this.m_cancelSignal
              );
          });
        }
        HandleErrorWithDialog(e) {
          let t = (0, T.l)(e);
          (0, w.AM)(
            d.createElement(
              D.JX,
              null,
              (0, I.Xx)("#Error_Description", t.errorCode, t.strErrorMsg)
            ),
            window
          );
        }
        componentDidMount() {
          this.EnsureEventsAreLoaded(),
            i.wk.GetEditModel() && i.wk.ResetModel(),
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
            a = i.wk.GetClanEventGIDs(e);
          if ((null == a ? void 0 : a.length) > 0) {
            (a = a.slice().filter((e) => {
              const n = i.wk.GetClanEventModel(e);
              return (null == n ? void 0 : n.visibility_state) === t;
            })),
              (a = a.sort((e, t) => {
                (0, y.X)(
                  e !== t,
                  `Unexpected duplicates in the list: ${e} ${t}`
                );
                const n = i.wk.GetClanEventModel(e);
                return i.wk.GetClanEventModel(t).startTime - n.startTime;
              }));
            for (const e of a) {
              const t = i.wk.GetClanEventModel(e);
              n.push(
                d.createElement($, {
                  key: e,
                  appid_or_vanity_str:
                    this.props.match.params.appid_or_vanity_str,
                  gid: e,
                  eventModel: t,
                  bShowEventMetaDataSizes: this.state.bShowEventMetaDataSizes,
                })
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
                      this.LoadMorePublicEvents
                    )
                  : this.setState(
                      {
                        bInfiniteScrollLoading: !0,
                        nLastFetchRequestedMS: Date.now(),
                      },
                      this.LoadMorePublicEventWithDelay
                    ))));
        }
        LoadMorePublicEventWithDelay() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMorePublicEvents,
              500
            );
          });
        }
        LoadMorePublicEvents() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            if ((this.ClearTimer(), !this.state.bInfiniteScrollLoading)) return;
            let e = null;
            i.wk.GetAllClanEvents(this.m_clanSteamID).forEach((t) => {
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
                  ? yield i.wk.LoadAdjacentPartnerEventsByAnnouncement(
                      e.AnnouncementGID,
                      this.m_clanSteamID,
                      void 0,
                      0,
                      this.k_nMaxPerDirection
                    )
                  : yield i.wk.LoadAdjacentPartnerEvents(
                      e ? e.GID : void 0,
                      this.m_clanSteamID,
                      void 0,
                      0,
                      this.k_nMaxPerDirection
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
              this.EventLoaded
            );
          });
        }
        UpdateShowEventMetaDataSizes(e) {
          this.setState({ bShowEventMetaDataSizes: e });
        }
        render() {
          const e = new v.K(x.JA.CLANSTEAMID);
          let t = this.CreateTiles(
              this.m_clanSteamID,
              u.ac.k_EEventStateUnpublished
            ),
            n = this.CreateTiles(this.m_clanSteamID, u.ac.k_EEventStateStaged),
            a = this.CreateTiles(this.m_clanSteamID, u.ac.k_EEventStateVisible),
            i =
              !this.state.bInitialLoadComplete ||
              this.state.bInfiniteScrollLoading;
          return d.createElement(
            "div",
            { ref: this.m_refScroll },
            d.createElement(M.YC, null),
            d.createElement(
              "div",
              { className: (0, C.Z)("maincontent", L().EventDashboardCtn) },
              d.createElement(_e, {
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
              }),
              d.createElement(
                Q.s,
                { requireAdmin: !0, clanSteamID: e },
                d.createElement(
                  "div",
                  {
                    className: (0, C.Z)(
                      "maincontent",
                      L().EventDashboardCtn,
                      L().EventDashAdminToolsCtn,
                      g().FlexRowContainer
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
                        (0, w.AM)(d.createElement(re, null), (0, Z.RA)(e));
                      },
                    },
                    "Show Publishing Audit History"
                  )
                )
              )
            ),
            d.createElement(
              "div",
              { className: L().MainLists },
              t.length > 0 &&
                d.createElement(
                  "div",
                  { className: (0, C.Z)(L().Section, L().Unpublished) },
                  d.createElement(
                    "div",
                    {
                      className: (0, C.Z)(
                        "maincontent",
                        "eventlist",
                        L().EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: L().DisplaySectionHeader },
                      (0, I.Xx)("#EventDisplay_Unpublished_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": (0, I.Xx)(
                            "#EventDisplay_Unpublished_SubTitle"
                          ),
                        },
                        " (?)"
                      )
                    ),
                    t.length > 0 && t
                  )
                ),
              n.length > 0 &&
                d.createElement(
                  "div",
                  { className: (0, C.Z)(L().Section, L().Staged) },
                  d.createElement(
                    "div",
                    {
                      className: (0, C.Z)(
                        "maincontent",
                        "eventlist",
                        L().EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: L().DisplaySectionHeader },
                      (0, I.Xx)("#EventDisplay_Stage_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": (0, I.Xx)(
                            "#EventDisplay_Stage_SubTitle"
                          ),
                        },
                        " (?)"
                      )
                    ),
                    n.length > 0 && n
                  )
                ),
              d.createElement(
                "div",
                {
                  className: (0, C.Z)(
                    L().Section,
                    L().DisplaySectionHeaderContainer,
                    L().Visible
                  ),
                },
                d.createElement(
                  "div",
                  {
                    className: (0, C.Z)(
                      "maincontent",
                      "eventlist",
                      L().EventDashboardCtn
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: L().DisplaySectionHeader },
                    (0, I.Xx)("#EventDisplay_Visible_Title")
                  ),
                  d.createElement(
                    "div",
                    { className: L().DisplaySectionSubHeader },
                    (0, I.Xx)("#EventDisplay_Visible_Title_WithRange")
                  ),
                  a && a,
                  !i &&
                    !a &&
                    d.createElement(
                      "div",
                      null,
                      (0, I.Xx)("#EventDisplay_NoPublic")
                    ),
                  i &&
                    d.createElement(b.V, {
                      position: "center",
                      string: (0, I.Xx)("#Loading"),
                    }),
                  this.state.bExhaustedEventList &&
                    d.createElement(
                      "div",
                      null,
                      (0, I.Xx)("#EventDisplay_AllPublicShown")
                    ),
                  this.state.bErrorOnInfiniteScrollRequest &&
                    d.createElement(
                      "div",
                      null,
                      (0, I.Xx)("#EventDisplay_HitErrorInfiniteScroll")
                    )
                )
              )
            )
          );
        }
      };
      (0, l.gn)([f.ak], pe.prototype, "OnScroll", null),
        (0, l.gn)([f.ak], pe.prototype, "LoadMorePublicEventWithDelay", null),
        (0, l.gn)([f.ak], pe.prototype, "LoadMorePublicEvents", null),
        (0, l.gn)([f.ak], pe.prototype, "UpdateShowEventMetaDataSizes", null),
        (pe = (0, l.gn)([c.Pi], pe));
      const _e = (0, c.Pi)((e) => {
          const t = new v.K(x.JA.CLANSTEAMID),
            n = p.sV.GetClanInfoByClanAccountID(t.GetAccountID()),
            { appid_or_vanity_str: r } = e;
          let l = _.h.GetTotalStats(t);
          return d.createElement(
            "div",
            { className: g().EventDashboardHeader },
            d.createElement(E.Cu, { identifier: r, partnerEventStore: i.wk }),
            d.createElement(
              "div",
              { className: g().EventDashboardTitles },
              d.createElement(
                "div",
                { className: g().maintitle },
                (0, I.Xx)("#EventDisplay_Events"),
                d.createElement(
                  "div",
                  { className: g().subtitle },
                  (0, I.Xx)("#EventDisplay_Edit_Desc")
                )
              ),
              d.createElement(
                "div",
                { className: g().EventDashboardActions },
                d.createElement(
                  m.rU,
                  {
                    className: (0, C.Z)(g().Button, g().Primary),
                    to: a.rQ.Create(r),
                    onClick: () => i.wk.ResetModel(),
                  },
                  (0, I.Xx)("#EventDisplay_CreateNewEvent")
                ),
                d.createElement(
                  P.zx,
                  {
                    onClick: (e) =>
                      (0, w.AM)(
                        d.createElement(ve, { clanInfo: n }),
                        (0, Z.RA)(e)
                      ),
                  },
                  (0, I.Xx)("#EventDashboard_Stats_export")
                )
              )
            ),
            d.createElement(
              "div",
              { className: g().EventDashboardStatsCtn },
              d.createElement(S.y, {
                summary: l.m_stats,
                bIsAllowedInLibrary: null == n ? void 0 : n.is_ogg,
                bIncludeDescription: !0,
              })
            )
          );
        }),
        Ee = (0, k.M)(pe);
      var he = n(91799),
        ge = n(21077),
        Se = n(70882),
        De = n(65902),
        we = n(86605),
        be = n(9915),
        ye = n(27991),
        Ce = (n(49727), n(63473));
      n(21205), n(82946);
      class Ie {
        constructor() {
          if (
            ((this.m_counts = null),
            document.getElementById("application_config"))
          ) {
            let e = (0, x.kQ)("deckcompatcount", "application_config");
            Ie.ValidateListCompat(e) && (this.m_counts = e);
          }
        }
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
                  x.De.STORE_BASE_URL +
                  "saleaction/ajaxgetuserdeckcompatcounts",
                i = yield s().get(a, {});
              if (
                200 == (null == i ? void 0 : i.status) &&
                1 ==
                  (null === (e = i.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                (null === (t = i.data) || void 0 === t ? void 0 : t.counts)
              )
                return (this.m_counts = i.data.counts), this.m_counts;
              n = (0, T.l)(i);
            } catch (e) {
              n = (0, T.l)(e);
            }
            return (
              console.error(
                "CDeckCompCountStore.LoadInternalCount failed: " +
                  (null == n ? void 0 : n.strErrorMsg),
                n
              ),
              null
            );
          });
        }
        static Get() {
          return (
            Ie.s_globalSingletonStore ||
              ((Ie.s_globalSingletonStore = new Ie()),
              ("dev" != x.De.WEB_UNIVERSE && "beta" != x.De.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = Ie.s_globalSingletonStore)),
            Ie.s_globalSingletonStore
          );
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
      var Te = n(38045),
        fe = n(43521),
        xe = n(99646),
        ke = n(16104),
        Ae = n(77569),
        Le = n(22188);
      class Me {
        BIsValid() {
          return void 0 !== this.giveaway_id && null !== this.giveaway_id;
        }
        BStarted() {
          return (
            this.BIsValid() &&
            (this.seconds_until_drawing >= 0 || this.winner_count > 0)
          );
        }
      }
      (0, l.gn)([Le.LO], Me.prototype, "giveaway_id", void 0),
        (0, l.gn)([Le.LO], Me.prototype, "seconds_until_drawing", void 0),
        (0, l.gn)([Le.LO], Me.prototype, "rtime_start", void 0),
        (0, l.gn)([Le.LO], Me.prototype, "rtime_end", void 0),
        (0, l.gn)([Le.LO], Me.prototype, "closed", void 0),
        (0, l.gn)([Le.LO], Me.prototype, "winner_count", void 0);
      class Ne {
        constructor() {
          (this.m_mapGiveawayIDToNextDrawInfo = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, x.kQ)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let t = new Me();
              this.CopyToGiveaway(e, t),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
        CopyToGiveaway(e, t) {
          t.closed != e.closed && (t.closed = e.closed),
            t.giveaway_id != e.giveaway_id && (t.giveaway_id = e.giveaway_id),
            t.rtime_start != e.rtime_start && (t.rtime_start = e.rtime_start),
            t.rtime_end != e.rtime_end && (t.rtime_end = e.rtime_end),
            t.winner_count != e.winner_count &&
              (t.winner_count = e.winner_count),
            t.seconds_until_drawing != e.seconds_until_drawing &&
              (t.seconds_until_drawing = e.seconds_until_drawing);
        }
        FirstTimeLoadGiveaway(e, t) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            return (
              this.LazyInit(),
              this.m_mapGiveawayIDToNextDrawInfo.has(e)
                ? this.m_mapGiveawayIDToNextDrawInfo.get(e)
                : this.ReloadGiveaway(e, t)
            );
          });
        }
        ReloadGiveaway(e, t) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            let n = x.De.STORE_BASE_URL + "prizes/nextdraw/" + e,
              a = null,
              i = { origin: self.origin };
            return (
              (a = yield s().get(n, { params: i, cancelToken: t.token })),
              this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                this.m_mapGiveawayIDToNextDrawInfo.set(e, new Me()),
              this.CopyToGiveaway(
                a.data,
                this.m_mapGiveawayIDToNextDrawInfo.get(e)
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(e)
            );
          });
        }
      }
      (0, l.gn)([Le.LO], Ne.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, l.gn)([Le.aD], Ne.prototype, "CopyToGiveaway", null);
      const Ge = new Ne();
      window.g_GiveawayStore = Ge;
      var Pe = n(53861),
        Be = n(72258);
      let Oe = class extends d.Component {
        constructor() {
          super(...arguments),
            (this.state = { info: void 0 }),
            (this.m_cancelSignal = s().CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("GiveawayNextDraw component unmounted"),
            this.ClearRefreshInterval(),
            this.ClearCountDown();
        }
        componentDidMount() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            let e = yield Ge.FirstTimeLoadGiveaway(
              this.props.giveawayid,
              this.m_cancelSignal
            );
            this.setState({ info: e }),
              this.SetupRefreshDataInterval(),
              this.SetupCountDown();
          });
        }
        SetupRefreshDataInterval() {
          this.ClearRefreshInterval();
          const { info: e } = this.state;
          if (!e.closed) {
            let t =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(this.RefreshData, t);
          }
        }
        ClearRefreshInterval() {
          this.m_intervalID &&
            (window.clearInterval(this.m_intervalID),
            (this.m_intervalID = void 0));
        }
        RefreshData() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const { info: e } = this.state;
            e.BIsValid() &&
              e.seconds_until_drawing <= 0 &&
              !e.closed &&
              (this.ClearCountDown(),
              yield Ge.ReloadGiveaway(
                this.props.giveawayid,
                this.m_cancelSignal
              ),
              this.SetupCountDown());
          });
        }
        SetupCountDown() {
          this.state.info.seconds_until_drawing > 0 &&
            (this.m_intervalCountDownID = window.setInterval(
              this.UpdateTimer,
              1e3
            ));
        }
        ClearCountDown() {
          this.m_intervalCountDownID &&
            (window.clearInterval(this.m_intervalCountDownID),
            (this.m_intervalCountDownID = void 0));
        }
        UpdateTimer() {
          return (0, l.mG)(this, void 0, void 0, function* () {
            (this.state.info.seconds_until_drawing -= 1),
              0 == this.state.info.seconds_until_drawing &&
                this.ClearCountDown();
          });
        }
        PrintTwoDigits(e) {
          return e < 10 ? "0" + e : e;
        }
        render() {
          const { info: e } = this.state;
          if (!e || null == e.giveaway_id || !e.BStarted()) return null;
          let t =
            x.De.STORE_BASE_URL +
            "prizes/view/" +
            e.giveaway_id +
            (x.De.SNR ? "?snr=" + x.De.SNR : "");
          return d.createElement(
            "div",
            { className: Pe.countdownCtn },
            Boolean(e.closed) &&
              d.createElement(
                "div",
                { className: Pe.Closed },
                e.winner_count > 0
                  ? (0, I.Xx)(
                      "#Giveaway_Closed",
                      e.winner_count.toLocaleString()
                    )
                  : (0, I.Xx)("#Giveaway_Closed_NoWinnerInfo")
              ),
            Boolean(!e.closed) &&
              d.createElement(
                d.Fragment,
                null,
                Boolean(e.seconds_until_drawing <= 0)
                  ? d.createElement(
                      "div",
                      { className: Pe.Throbber },
                      d.createElement(b.V, { size: "small" }),
                      d.createElement(
                        "div",
                        null,
                        (0, I.Xx)("#Giveaway_RandomDraw")
                      )
                    )
                  : d.createElement(
                      "div",
                      { className: Pe.CountDownCtn },
                      d.createElement(
                        "div",
                        { className: Pe.CountDownTime },
                        this.PrintTwoDigits(
                          Math.floor(e.seconds_until_drawing / 60)
                        ) +
                          ":" +
                          this.PrintTwoDigits(e.seconds_until_drawing % 60)
                      ),
                      d.createElement(
                        "div",
                        { className: Pe.CountDownText },
                        (0, I.Xx)("#Giveaway_CountDown2"),
                        " ",
                        (0, I.Xx)("#Giveaway_KeepWatching")
                      )
                    ),
                Boolean(e.winner_count > 0) &&
                  d.createElement(
                    "div",
                    { className: Pe.WinnerInfo },
                    d.createElement(
                      "div",
                      { className: Pe.WinnerCount },
                      e.winner_count.toLocaleString()
                    ),
                    d.createElement(
                      "div",
                      { className: Pe.WinnerText },
                      (0, I.Xx)("#Giveaway_Congratulation")
                    )
                  )
              ),
            d.createElement(
              Be.ns,
              { className: Pe.LearnMore, href: t },
              (0, I.Xx)("#Giveaway_LearnMore")
            )
          );
        }
      };
      (0, l.gn)([f.ak], Oe.prototype, "SetupRefreshDataInterval", null),
        (0, l.gn)([f.ak], Oe.prototype, "ClearRefreshInterval", null),
        (0, l.gn)([f.ak], Oe.prototype, "RefreshData", null),
        (0, l.gn)([f.ak], Oe.prototype, "SetupCountDown", null),
        (0, l.gn)([f.ak], Oe.prototype, "UpdateTimer", null),
        (Oe = (0, l.gn)([c.Pi], Oe));
      var Xe = n(68941),
        Re = n(11108),
        Ue = n(95598),
        Ve = n(9410),
        We = n(55310),
        je = n(15986),
        Fe = n(46713),
        He = n(1329),
        ze = n(6843);
      function qe(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          a = (0, Re.oS)(n);
        if ((null == a ? void 0 : a.level) > 0) {
          let e = a.level;
          if (null == t ? void 0 : t.BHasSaleEnabled()) {
            const a = t.GetSaleSectionsByType("badge_progress");
            if (1 == (null == a ? void 0 : a.length)) {
              const i = a[0].badge_progress;
              if (
                (null == i ? void 0 : i.event_badgeid) == n &&
                (null == i ? void 0 : i.granted_by_discovery_queue)
              ) {
                const n = i.levels[i.levels.length - 1].level;
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
            e.toLocaleString()
          );
        }
        return null;
      }
      function Je(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: a } = e,
          i = d.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return (null == e ? void 0 : e.length) > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: r, eStoreDiscoveryQueueType: l } = d.useMemo(
            () => (0, He.N)(t, i),
            [t, i]
          ),
          o = (0, ze.GD)(l, r),
          s = Math.min(n + o, a);
        return d.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          s.toLocaleString()
        );
      }
      function Qe(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ce.im)(e.args, "eventid"));
        return x.L7.logged_in && n
          ? d.createElement(qe, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function Ze(e) {
        const { nDoorIndex: t, children: n } = e,
          a = (0, xe._4)(t),
          { fnOpenDoor: i } = (0, xe.Qr)(),
          [r, l] = d.useState(!1),
          [o, s] = d.useState(!1);
        return d.createElement(
          P.zx,
          {
            disabled: a,
            onClick: (e) => {
              r ||
                (x.L7.logged_in
                  ? (l(!0),
                    i(t, !0, null, !1)
                      .then((e) => {
                        e || s(!0), l(!1);
                      })
                      .catch(() => {
                        s(!0), l(!1);
                      }))
                  : (0, Ve.Xt)());
            },
          },
          Boolean(o)
            ? d.createElement("div", null, (0, I.Xx)("#GrantAwardError_Busy"))
            : d.createElement(
                d.Fragment,
                null,
                Boolean(r) && d.createElement(b.V, { size: "small" }),
                Boolean(a) && d.createElement(Ue.JrY, null),
                n
              )
        );
      }
      function Ke(e) {
        const t = Number.parseInt((0, Ce.im)(e.args)) || 0;
        return t >= 0 && t < 32
          ? d.createElement(Ze, { nDoorIndex: t }, e.children)
          : null;
      }
      const Ye = (0, V.EN)(We.C);
      function $e(e) {
        var t, n;
        const a = Number.parseInt((0, Ce.im)(e.args)),
          { event: i, showErrorInfo: r } = e.context;
        if (a) {
          const l =
            null ===
              (n =
                null === (t = null == i ? void 0 : i.jsondata) || void 0 === t
                  ? void 0
                  : t.sale_sections) || void 0 === n
              ? void 0
              : n.findIndex((e) => e.unique_id == a);
          if (l >= 0) {
            const t = i.GetDayIndexFromEventStart();
            return d.createElement(Ye, {
              event: i,
              section: i.jsondata.sale_sections[l],
              activeTab: new Fe.u(null, t),
              language: e.language,
              bIsPreview: r,
              nSaleDayIndex: t,
              promotionName: "",
              appVisibilityTracker: null,
            });
          }
          if (r)
            return d.createElement(
              "div",
              { className: je.ErrorDiv },
              "Error could not find sale section ",
              a
            );
        }
        return null;
      }
      var et = n(34531);
      let tt = null;
      function nt(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ce.im)(e.args, "appid")),
          a = Number.parseInt((0, Ce.im)(e.args, "itemdefid")),
          i = Number.parseInt((0, Ce.im)(e.args, "maxquantity")),
          r = (0, Ce.im)(e.args, "calltoaction");
        return (0, fe.$4)(n, a)
          ? d.createElement(ke.t, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: i },
              strCallToAction: r,
            })
          : d.createElement(b.V, {
              size: "small",
              position: "center",
              string: (0, I.Xx)("#Loading"),
            });
      }
      function at(e) {
        const t = (function () {
          const [e, t] = d.useState(Ie.Get().GetCounts());
          return (
            d.useEffect(() => {
              e || Ie.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return d.createElement(b.V, { size: "small" });
        const n = Number.parseInt((0, Ce.im)(e.args));
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
        var t, n, a, i;
        const r = (0, Te.V)("library");
        if (!r) return d.createElement(b.V, { size: "small" });
        const l = Number.parseInt((0, Ce.im)(e.args));
        let o =
          (null === (t = r.verifiedList) || void 0 === t ? void 0 : t.length) ||
          0;
        switch (l) {
          case 2:
            o =
              (null === (n = r.playableList) || void 0 === n
                ? void 0
                : n.length) || 0;
            break;
          case 1:
            o =
              (null === (a = r.unsupportedList) || void 0 === a
                ? void 0
                : a.length) || 0;
            break;
          case 0:
            o =
              (null === (i = r.unknownList) || void 0 === i
                ? void 0
                : i.length) || 0;
        }
        return d.createElement("span", null, Number(o).toLocaleString());
      }
      function rt(e) {
        const t = Number.parseInt((0, Ce.im)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, Ce.im)(e.args, "hide")));
        return t >= 0
          ? d.createElement(lt, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function lt(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          i = (0, xe._4)(t);
        return null == i
          ? null
          : (i && !n) || (!i && n)
          ? d.createElement(d.Fragment, null, e.children)
          : null;
      }
      function ot(e) {
        if (x.L7.logged_in) {
          const t = Number.parseInt((0, Ce.im)(e.args)),
            n = Number.parseInt((0, Ce.im)(e.args, "mod"));
          if (n > 0 && t < n && x.L7.accountid % n == t) return e.children;
        }
        return null;
      }
      function st(e) {
        const t = (0, Ce.im)(e.args);
        return (null == t ? void 0 : t.trim().length) > 0
          ? d.createElement("div", { className: t.trim() }, e.children)
          : d.createElement(d.Fragment, null, e.children);
      }
      function ct(e) {
        return d.createElement(
          "span",
          { className: Ae.LocalizeBlock },
          (0, I.yu)(
            e.children,
            d.createElement("i", null),
            d.createElement("i", null),
            d.createElement("i", null),
            d.createElement("i", null)
          )
        );
      }
      function dt(e) {
        let t = (0, Ce.im)(e.args);
        return t
          ? d.createElement(Oe, { giveawayid: t })
          : d.createElement(d.Fragment, null);
      }
      function mt(e) {
        const t = Number.parseInt((0, Ce.im)(e.args));
        if (t) {
          const n = Number.parseInt((0, Ce.im)(e.args, "depositpackageid"));
          return d.createElement(et.Y, {
            reservationPackageID: t,
            depositPackageID: n,
          });
        }
        return d.createElement(d.Fragment, null);
      }
      var ut = n(26111),
        vt = (n(69491), n(55038), n(92244));
      function pt(e) {
        const [t, n] = d.useState(!0);
        return (
          d.useEffect(() => {
            we.Q8.Init(new De.J(x.De.WEBAPI_BASE_URL)),
              oe.j1.Init(),
              i.wk.Init(),
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
                      { Constructor: it, autocloses: !1 },
                    ],
                    ["giveawayinfo", { Constructor: dt, autocloses: !1 }],
                    ["price", { Constructor: Xe.J8, autocloses: !1 }],
                    ["pricesavings", { Constructor: Xe.Eu, autocloses: !1 }],
                    [
                      "eventdoorvisibility",
                      { Constructor: rt, autocloses: !1 },
                    ],
                    ["chooseaccount", { Constructor: ot, autocloses: !1 }],
                    ["badgecurrentlevel", { Constructor: Qe, autocloses: !1 }],
                    ["optindoorquest", { Constructor: Ke, autocloses: !1 }],
                    ["classname", { Constructor: st, autocloses: !1 }],
                    ["localize", { Constructor: ct, autocloses: !1 }],
                    ["salesection", { Constructor: $e, autocloses: !1 }],
                    ["reservationbutton", { Constructor: mt, autocloses: !1 }],
                  ])),
                tt)
              ),
              Promise.all([be.cb.InitGlobal(), (0, ye.nf)(null)]).then(() =>
                n(!1)
              );
          }, []),
          t
            ? d.createElement(b.V, {
                position: "center",
                size: "medium",
                string: (0, I.Xx)("#Loading"),
              })
            : d.createElement(
                z.uX.Provider,
                { value: { bCanUseLink: !0 } },
                d.createElement(M.bE, null),
                d.createElement(
                  V.rs,
                  null,
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Home(":appid_or_vanity_str"),
                    component: Ee,
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.List(":appid_or_vanity_str"),
                    component: Ee,
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Create(":appid_or_vanity_str"),
                    component: r.k,
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Category(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        r.k,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.EditRedirectToCategory(":appid_or_vanity_str"),
                    render: (e) => d.createElement(ge.Kz, Object.assign({}, e)),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        ge.IE,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Publish(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        ge.IE,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          bInitiatePublishDialog: !0,
                        })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.PreviewSale(
                      ":appid_or_vanity_str",
                      ":gid(\\d+)?"
                    ),
                    render: (e) =>
                      d.createElement(
                        he.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "previewsale",
                        })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Preview(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        he.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "preview",
                        })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.View(":appid_or_vanity_str", ":gid(\\d+)"),
                    render: (e) =>
                      d.createElement(
                        he.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "view",
                        })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.Migrate(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        Se.Lc,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.MigrateCategory(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        Se.QU,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.ViewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        Se.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !1,
                        })
                      ),
                  }),
                  d.createElement(V.AW, {
                    exact: !0,
                    path: a.rQ.PreviewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        Se.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        })
                      ),
                  }),
                  d.createElement(V.AW, { component: vt.R })
                )
              )
        );
      }
    },
  },
]);

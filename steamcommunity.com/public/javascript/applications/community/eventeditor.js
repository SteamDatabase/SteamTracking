/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9349],
  {
    16947: (e) => {
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
    48835: (e) => {
      e.exports = { DialogCtn: "partnereventstatsexport_DialogCtn_2LwQU" };
    },
    80537: (e) => {
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
    61555: (e) => {
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
      n.d(t, { M: () => D, q: () => S });
      var a = n(33940),
        i = n(89526),
        r = n(88464),
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
      let b = class extends i.Component {
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
                  _.SV,
                  null,
                  i.createElement(h.oS, {
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
                    emoticonStore: p.F,
                    adminPanel: i.createElement(v.H, {
                      eventModel: e,
                      partnerEventStore: d.wk,
                    }),
                    otherEventRow: i.createElement(E._G, {
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
      b = (0, a.gn)([r.Pi], b);
      const S = (0, u.M)(b),
        D = (e) =>
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
    59365: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => mt });
      var a = n(96927),
        i = n(13394),
        r = n(59978),
        l = n(33940),
        o = n(52868),
        s = n.n(o),
        c = n(88464),
        d = n(89526),
        m = n(565),
        u = n(81245),
        v = n(47165),
        E = n(82079),
        p = n(6172),
        _ = n(72449),
        h = n(17318),
        g = n.n(h),
        b = n(10340),
        S = n(99307),
        D = n(57742),
        C = n(69338),
        y = n(23801),
        w = n(19304),
        I = n(14826),
        x = n(23217),
        T = n(4306),
        k = n(32765),
        A = n(51059),
        f = n(80537),
        M = n.n(f),
        L = n(97567),
        N = n(46132),
        G = n(57605),
        P = n(61555);
      function B(e) {
        const { eventModel: t, fnOnGotoPage: n } = e;
        return t.bOldAnnouncement
          ? null
          : d.createElement(
              "div",
              {
                className: (0, w.Z)(P.ManageButton, P.Clone),
                onClick: (e) =>
                  (function (e, t, n) {
                    t.stopPropagation(),
                      i.wk
                        .LoadEditorModel(e.clanSteamID, e.GID)
                        .then((e) => {
                          const t = (0, L.HJ)(e, !0, !0, !0),
                            a = t.GetLanguagesWithTokens();
                          a.length > 1
                            ? (a.sort((e, t) =>
                                (0, I.Xx)(
                                  "#Language_" + (0, N.j_)(e)
                                ).localeCompare(
                                  (0, I.Xx)("#Language_" + (0, N.j_)(t))
                                )
                              ),
                              (0, D.AM)(
                                d.createElement(X, {
                                  langs: a,
                                  locData: t,
                                  fnOnGotoPage: n,
                                }),
                                window
                              ))
                            : O(n, t);
                        })
                        .catch((e) => {
                          let t = (0, x.l)(e);
                          (0, D.AM)(
                            d.createElement(S.JX, {
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
      function O(e, t, n) {
        const a = i.wk.CreateClone();
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
        const { langs: t, locData: n, closeModal: a, fnOnGotoPage: i } = e,
          r = (0, N.jM)(k.De.LANGUAGE),
          [l, o] = d.useState(new Set(t.filter((e) => e != r)));
        return d.createElement(
          S.uH,
          {
            strTitle: (0, I.Xx)("#Button_Clone"),
            onOK: () => O(i, n, Array.from(l)),
            strDescription: (0, I.Xx)("#EventEditor_Clone_MultiLanguages"),
            closeModal: a,
          },
          d.createElement(
            "div",
            { className: P.CloneLangAlert },
            (0, I.Xx)("#EventEditor_Clone_Alert")
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
                label: (0, I.Xx)("#Language_" + (0, N.j_)(e)),
                checked: !l.has(e),
              })
            )
          ),
          d.createElement(
            G.zx,
            { onClick: () => o(new Set()) },
            (0, I.Xx)("#EventEditor_Clone_SelectAll")
          ),
          d.createElement(
            G.zx,
            { onClick: () => o(new Set(t)) },
            (0, I.Xx)("#EventEditor_Clone_DeSelectAll")
          )
        );
      }
      var U = n(35809),
        W = n(59934),
        V = n(85651),
        R = n(43707),
        j = n(17547),
        H = n(52932),
        F = n(20790),
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
            bShowGameName: i,
            bShowEventMetaDataSizes: r,
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
                return (0, F.Ij)(this.props.eventModel, F.Ue.k_eCommunityEdit);
              case "view":
                return t.BIsVisibleEvent()
                  ? (0, F.Ij)(this.props.eventModel, F.Ue.k_eView)
                  : (0, F.Ij)(this.props.eventModel, F.Ue.k_eCommunityPreview);
              default:
                console.log(
                  "EventDisplayTile - Unexpected Case - " +
                    this.state.redirectTarget
                );
            }
          let s = (0, N.jM)(k.De.LANGUAGE);
          t.BIsLanguageValidForRealms(s) || (s = t.BInRealmGlobal() ? 0 : 29);
          let c,
            m,
            v = [t.GetImageURLWithFallback("capsule", s)],
            _ = t.GetNameWithFallback(s),
            g = t.BHasSubTitle(s),
            b = t.BHasSaleEnabled(),
            S = t.visibility_state != u.ac.k_EEventStateUnpublished,
            D = t.visibility_state != u.ac.k_EEventStateVisible;
          if (
            (D &&
              S &&
              (c =
                t.visibilityStartTime == t.startTime
                  ? d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      (0, I.Xx)("#EventEditor_Status_WillBeVisible_EventStart")
                    )
                  : d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      (0, I.kQ)(
                        "#EventEditor_Status_WillBeVisible_At",
                        d.createElement(q.H6, {
                          dateAndTime:
                            t.GetVisibilityStartTimeAndDateUnixSeconds(),
                          bSingleLine: !0,
                        })
                      )
                    )),
            !D && S)
          ) {
            let e = V.JW.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateUpcoming },
                  (0, I.Xx)("#EventDisplay_Upcoming")
                ))
              : (0, Z.G1)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateActive },
                  (0, I.Xx)("#EventDisplay_Active")
                ))
              : t.GetStartTimeAndDateUnixSeconds() > e + 3600 &&
                (m = d.createElement(
                  "span",
                  { className: P.EventStateRecent },
                  (0, I.Xx)("#EventDisplay_RecentlyActive")
                ));
          }
          i &&
            (_ =
              ((null === (e = R.Z.Get().GetApp(t.appid)) || void 0 === e
                ? void 0
                : e.GetName()) || "") +
              ": " +
              _);
          let C =
              t.BIsPartnerEvent() &&
              t.BIsVisibleEvent() &&
              p.h.GetStatsFor(t.clanSteamID, l),
            y = E.sV.GetOGGClanInfo(t.appid),
            x = Boolean(
              o &&
                y &&
                y.is_ogg &&
                y.clanAccountID != t.announcementClanSteamID.GetAccountID()
            );
          return d.createElement(
            j.SV,
            null,
            d.createElement(
              "div",
              {
                className: (0, w.Z)({
                  [P.TileContainer]: !0,
                  [P.TileAgeAppropriate]: true,
                  [P.TileAgeNotAppropriate]: !1,
                  [P.ShowEventMetaDataSizes]: r,
                }),
              },
              d.createElement(
                "div",
                {
                  className: P.TileImageCtn,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(z.J, { className: P.TileImage, srcs: v })
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
                    d.createElement("div", { className: P.TileTextAppName }, _),
                    d.createElement(
                      "div",
                      { className: P.TileTextEventType },
                      t.GetCategoryAsString(),
                      b &&
                        d.createElement(
                          "span",
                          { className: P.TileHasSale },
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
                                k.De.STORE_BASE_URL +
                                "curator/" +
                                t.clanSteamID.GetAccountID() +
                                "/admin/manage_rss/",
                            },
                            " " + (0, I.Xx)("#EventEditor_Status_FromRSSFeed")
                          )
                        ),
                      d.createElement(K.bv, { eventModel: t, bAllowUpdate: !1 })
                    ),
                    Boolean(C) &&
                      d.createElement(
                        "div",
                        { className: P.TileStats },
                        (0, I.kQ)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            C.m_stats.total_showm.toLocaleString()
                          )
                        ),
                        d.createElement("br", null),
                        (0, I.kQ)(
                          "#EventDashBoard_Summary_Tile_Read",
                          d.createElement(
                            "span",
                            null,
                            C.m_stats.total_read.toLocaleString()
                          )
                        )
                      )
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
                          (0, I.Xx)("#EventEditor_DataFromConnectAnnouncement")
                        ),
                        d.createElement(
                          F.JW,
                          {
                            className: (0, w.Z)(P.ManageButton, P.Edit),
                            eventModel: t,
                            route: F.Ue.k_eView,
                          },
                          (0, I.Xx)("#Button_ViewPage")
                        )
                      )
                    : d.createElement(
                        $,
                        Object.assign(
                          { fnOnGotoPage: this.OnGotoPage },
                          this.props
                        )
                      ),
                  r &&
                    d.createElement(
                      J.s,
                      { requireAdmin: !0, clanSteamID: t.clanSteamID },
                      d.createElement(te, { eventModel: t })
                    )
                )
              )
            )
          );
        }
      };
      (0, l.gn)([T.ak], Y.prototype, "OnFallbackClick", null),
        (0, l.gn)([T.ak], Y.prototype, "OnGotoPage", null),
        (0, l.gn)([T.ak], Y.prototype, "OnIgnoreFallbackClick", null),
        (Y = (0, l.gn)([c.Pi], Y));
      let $ = class extends d.Component {
        OnIgnoreFallbackClick(e) {
          e.stopPropagation();
        }
        OnPublishEvent(e) {
          e.stopPropagation();
          const { eventModel: t } = this.props;
          i.wk
            .LoadEditorModel(t.clanSteamID, t.GID)
            .then(() => {
              (0, D.AM)(
                d.createElement(U.b, {
                  editModel: i.wk.GetEditModel(),
                  OnPublishSuccess: this.OnPublishSuccess,
                }),
                window
              );
            })
            .catch((e) => {
              let t = (0, x.l)(e);
              (0, D.AM)(
                d.createElement(S.JX, {
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
            (0, D.AM)(
              d.createElement(H.n, {
                eventModel: this.props.eventModel,
                partnerEventStore: i.wk,
              }),
              (0, Q.RA)(e)
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
              className: P.TileButtonContainer,
              onClick: (e) => this.OnIgnoreFallbackClick(e),
            },
            !n &&
              d.createElement(
                F.JW,
                {
                  className: (0, w.Z)(P.ManageButton, P.Edit),
                  eventModel: e,
                  route: F.Ue.k_eCommunityEdit,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#Button_Edit")
              ),
            n &&
              d.createElement(
                F.JW,
                {
                  className: (0, w.Z)(P.ManageButton, P.Edit),
                  "data-tooltip-text": (0, I.Xx)(
                    "#EventEditor_Button_MigrateAndEdit_Announcement_ttip"
                  ),
                  eventModel: e,
                  route: F.Ue.k_eCommunityMigrate,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#EventEditor_Button_MigrateAndEdit")
              ),
            a &&
              d.createElement(
                F.JW,
                {
                  className: (0, w.Z)(P.ManageButton, P.View),
                  "data-tooltip-text": (0, I.Xx)(
                    "#EventEditor_Button_PreviewButton_ttip"
                  ),
                  eventModel: e,
                  route: F.Ue.k_eCommunityPreview,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#EventDisplay_Preview")
              ),
            !a &&
              d.createElement(
                F.JW,
                {
                  className: (0, w.Z)(P.ManageButton, P.View),
                  eventModel: e,
                  route: F.Ue.k_eView,
                  onClick: this.StopPropagation,
                },
                (0, I.Xx)("#EventDisplay_View")
              ),
            !i &&
              !n &&
              d.createElement(
                "div",
                {
                  className: (0, w.Z)(P.ManageButton, P.Publish),
                  onClick: this.OnPublishEvent,
                },
                (0, I.Xx)("#EventDisplay_Publish")
              ),
            d.createElement("div", { className: P.Spacer }, " "),
            d.createElement(B, { eventModel: e, fnOnGotoPage: t }),
            d.createElement(
              "div",
              {
                className: (0, w.Z)(P.ManageButton, P.Delete),
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
      function ee(e, t) {
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
                ee(r, t - 1).forEach((e) => {
                  n.push({ key: a + ":" + e.key, size: e.size });
                });
          }),
          n
        );
      }
      (0, l.gn)([T.ak], $.prototype, "OnIgnoreFallbackClick", null),
        (0, l.gn)([T.ak], $.prototype, "OnPublishEvent", null),
        (0, l.gn)([T.ak], $.prototype, "OnPublishSuccess", null),
        (0, l.gn)([T.ak], $.prototype, "StopPropagation", null),
        (0, l.gn)([T.ak], $.prototype, "OnDeleteClickAndVerify", null),
        ($ = (0, l.gn)([c.Pi], $));
      const te = (e) => {
        var t, n;
        const { eventModel: a } = e;
        if (!(null == a ? void 0 : a.jsondata)) return null;
        const i = ee(a.jsondata, 3);
        i.sort((e, t) => t.size - e.size);
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
      var ne = n(91666),
        ae = n(57681);
      const ie = (e) => {
          const { closeModal: t } = e,
            n = (0, ne.V)(k.JA.CLANACCOUNTID);
          return d.createElement(
            S.uH,
            {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
            },
            Boolean(null == n)
              ? d.createElement(C.V, {
                  string: (0, I.Xx)("#Loading"),
                  position: "center",
                  size: "medium",
                })
              : Boolean(0 == n.length)
              ? d.createElement("div", null, "No Publishing History available")
              : n.map((e) =>
                  d.createElement(re, { key: e.clan_event_gid, record: e })
                )
          );
        },
        re = (e) => {
          var t;
          const { record: n } = e;
          return d.createElement(
            "div",
            null,
            d.createElement("div", null, "Clan Event GID: ", n.clan_event_gid),
            d.createElement("div", null, "Type: ", (0, Z.Sq)(n.event_type)),
            d.createElement(
              "div",
              null,
              "Publish Time: ",
              d.createElement(q.H6, {
                dateAndTime: n.publish_time,
                bSingleLine: !0,
              })
            ),
            d.createElement(
              "div",
              null,
              d.createElement(ae.K, {
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
      var le = n(10412),
        oe = n(82971),
        se = n(15254),
        ce = n(25508),
        de = n(48835),
        me = n.n(de);
      function ue(e) {
        const { clanInfo: t, closeModal: n } = e,
          [a, i] = d.useState(!0),
          [r, o] = d.useState(!0),
          c = 1063339200,
          m = V.JW.GetTimeNowWithOverride(),
          [u, v] = d.useState(m - ce._H.PerMonth),
          [E, _] = d.useState(m),
          [h, g] = d.useState(-1),
          b = h >= 0;
        return d.createElement(
          S.uH,
          {
            strTitle: (0, I.Xx)("#EventDashboard_Stats_title"),
            strDescription: (0, I.Xx)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: b,
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
                  const u = (0, N.jM)(k.De.LANGUAGE);
                  do {
                    if (
                      ((d += 1),
                      (m = yield le.j1.LoadAdjacentPartnerEvents(
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
                        (yield p.h.LoadStatsForEvents(e.clanSteamID, t, r),
                        (l += t.length),
                        a(l),
                        t.forEach((t) => {
                          const n = p.h.GetStatsFor(e.clanSteamID, t),
                            a = le.j1.GetClanEventModel(t);
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
                    se.K.WriteCSVToFile(
                      i,
                      "event_stats_" +
                        e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                        ".csv"
                    ),
                    !0
                  );
                });
              })(t, a ? c : u, r ? Number.MAX_SAFE_INTEGER : E, g).then(() =>
                n()
              ),
          },
          d.createElement(
            "div",
            { className: me().DialogCtn },
            d.createElement(
              "div",
              { className: "DialogLabel" },
              (0, I.Xx)("#EventDashboard_Stats_Oldest_Title")
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(G.ji, {
                label: (0, I.Xx)("#EventDashboard_Stats_Oldest"),
                onChange: i,
                checked: a,
                disabled: b,
              }),
              !a &&
                d.createElement(
                  "div",
                  null,
                  (0, I.Xx)("#EventDashboard_Stats_Oldest_Override"),
                  d.createElement(oe.A, {
                    nEarliestTime: c,
                    nLatestTime: r ? void 0 : E,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => u,
                    fnSetTimeToUpdate: v,
                    disabled: b,
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
              d.createElement(G.ji, {
                label: (0, I.Xx)("#EventDashboard_Stats_Newest"),
                onChange: o,
                checked: r,
                disabled: b,
              }),
              !r &&
                d.createElement(
                  "div",
                  null,
                  (0, I.Xx)("#EventDashboard_Stats_Newest_Override"),
                  d.createElement(oe.A, {
                    nEarliestTime: a ? c : u,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => E,
                    fnSetTimeToUpdate: _,
                    disabled: b,
                  })
                )
            ),
            b &&
              d.createElement(C.V, {
                position: "center",
                size: "medium",
                string: (0, I.Xx)("#EventDashboard_Stats_Progress", h),
              })
          )
        );
      }
      let ve = class extends d.Component {
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
            (this.m_clanSteamID = new v.K(k.JA.CLANSTEAMID)),
            (this.k_nMaxPerDirection = 10),
            (this.m_IntervalTimer = void 0),
            k.JA.CLANACCOUNTID == u.sq && (this.k_nMaxPerDirection = 2);
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
              p.h.LoadStatsForEvents(
                this.m_clanSteamID,
                e,
                this.m_cancelSignal
              );
          });
        }
        HandleErrorWithDialog(e) {
          let t = (0, x.l)(e);
          (0, D.AM)(
            d.createElement(
              S.JX,
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
                d.createElement(Y, {
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
              console.log("EventListView: " + (0, x.l)(e).strErrorMsg),
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
          const e = new v.K(k.JA.CLANSTEAMID);
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
            d.createElement(
              "div",
              { className: (0, w.Z)("maincontent", M().EventDashboardCtn) },
              d.createElement(Ee, {
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
              }),
              d.createElement(
                J.s,
                { requireAdmin: !0, clanSteamID: e },
                d.createElement(
                  "div",
                  {
                    className: (0, w.Z)(
                      "maincontent",
                      M().EventDashboardCtn,
                      M().EventDashAdminToolsCtn,
                      g().FlexRowContainer
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
                        (0, D.AM)(d.createElement(ie, null), (0, Q.RA)(e));
                      },
                    },
                    "Show Publishing Audit History"
                  )
                )
              )
            ),
            d.createElement(
              "div",
              { className: M().MainLists },
              t.length > 0 &&
                d.createElement(
                  "div",
                  { className: (0, w.Z)(M().Section, M().Unpublished) },
                  d.createElement(
                    "div",
                    {
                      className: (0, w.Z)(
                        "maincontent",
                        "eventlist",
                        M().EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: M().DisplaySectionHeader },
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
                  { className: (0, w.Z)(M().Section, M().Staged) },
                  d.createElement(
                    "div",
                    {
                      className: (0, w.Z)(
                        "maincontent",
                        "eventlist",
                        M().EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: M().DisplaySectionHeader },
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
                  className: (0, w.Z)(
                    M().Section,
                    M().DisplaySectionHeaderContainer,
                    M().Visible
                  ),
                },
                d.createElement(
                  "div",
                  {
                    className: (0, w.Z)(
                      "maincontent",
                      "eventlist",
                      M().EventDashboardCtn
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: M().DisplaySectionHeader },
                    (0, I.Xx)("#EventDisplay_Visible_Title")
                  ),
                  d.createElement(
                    "div",
                    { className: M().DisplaySectionSubHeader },
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
                    d.createElement(C.V, {
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
      (0, l.gn)([T.ak], ve.prototype, "OnScroll", null),
        (0, l.gn)([T.ak], ve.prototype, "LoadMorePublicEventWithDelay", null),
        (0, l.gn)([T.ak], ve.prototype, "LoadMorePublicEvents", null),
        (0, l.gn)([T.ak], ve.prototype, "UpdateShowEventMetaDataSizes", null),
        (ve = (0, l.gn)([c.Pi], ve));
      const Ee = (0, c.Pi)((e) => {
          const t = new v.K(k.JA.CLANSTEAMID),
            n = E.sV.GetClanInfoByClanAccountID(t.GetAccountID()),
            { appid_or_vanity_str: r } = e;
          let l = p.h.GetTotalStats(t);
          return d.createElement(
            "div",
            { className: g().EventDashboardHeader },
            d.createElement(_.Cu, { identifier: r, partnerEventStore: i.wk }),
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
                    className: (0, w.Z)(g().Button, g().Primary),
                    to: a.rQ.Create(r),
                    onClick: () => i.wk.ResetModel(),
                  },
                  (0, I.Xx)("#EventDisplay_CreateNewEvent")
                ),
                d.createElement(
                  G.zx,
                  {
                    onClick: (e) =>
                      (0, D.AM)(
                        d.createElement(ue, { clanInfo: n }),
                        (0, Q.RA)(e)
                      ),
                  },
                  (0, I.Xx)("#EventDashboard_Stats_export")
                )
              )
            ),
            d.createElement(
              "div",
              { className: g().EventDashboardStatsCtn },
              d.createElement(b.y, {
                summary: l.m_stats,
                bIsAllowedInLibrary: null == n ? void 0 : n.is_ogg,
                bIncludeDescription: !0,
              })
            )
          );
        }),
        pe = (0, A.M)(ve);
      var _e = n(61557),
        he = n(4114),
        ge = n(74314),
        be = n(19094),
        Se = n(58961),
        De = n(56368),
        Ce = n(14288);
      class ye {
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
                  k.De.STORE_BASE_URL +
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
              n = (0, x.l)(i);
            } catch (e) {
              n = (0, x.l)(e);
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
            ye.s_globalSingletonStore ||
              ((ye.s_globalSingletonStore = new ye()),
              ("dev" != k.De.WEB_UNIVERSE && "beta" != k.De.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = ye.s_globalSingletonStore)),
            ye.s_globalSingletonStore
          );
        }
        constructor() {
          if (
            ((this.m_counts = null),
            document.getElementById("application_config"))
          ) {
            let e = (0, k.kQ)("deckcompatcount", "application_config");
            ye.ValidateListCompat(e) && (this.m_counts = e);
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
      var we = n(72709),
        Ie = n(8894),
        xe = n(74710),
        Te = n(34714),
        ke = n(29054),
        Ae = n(93883),
        fe = n(16947);
      function Me(e) {
        return e < 10 ? "0" + e : e;
      }
      function Le(e) {
        const { giveawayid: t } = e,
          n = (0, Ae.J)(t),
          {
            bLoadingGiveawayInfo: a,
            winner_count: i,
            closed: r,
            seconds_until_drawing: l,
          } = n;
        return a
          ? null
          : d.createElement(
              "div",
              { className: fe.countdownCtn },
              Boolean(r) &&
                d.createElement(
                  "div",
                  { className: fe.Closed },
                  i > 0
                    ? (0, I.Xx)("#Giveaway_Closed", i.toLocaleString())
                    : (0, I.Xx)("#Giveaway_Closed_NoWinnerInfo")
                ),
              Boolean(!r) &&
                d.createElement(
                  d.Fragment,
                  null,
                  Boolean(l <= 0)
                    ? d.createElement(
                        "div",
                        { className: fe.Throbber },
                        d.createElement(C.V, { size: "small" }),
                        d.createElement(
                          "div",
                          null,
                          (0, I.Xx)("#Giveaway_RandomDraw")
                        )
                      )
                    : d.createElement(
                        "div",
                        { className: fe.CountDownCtn },
                        d.createElement(
                          "div",
                          { className: fe.CountDownTime },
                          Me(Math.floor(l / 60)) + ":" + Me(l % 60)
                        ),
                        d.createElement(
                          "div",
                          { className: fe.CountDownText },
                          (0, I.Xx)("#Giveaway_CountDown2"),
                          " ",
                          (0, I.Xx)("#Giveaway_KeepWatching")
                        )
                      ),
                  Boolean(i > 0) &&
                    d.createElement(
                      "div",
                      { className: fe.WinnerInfo },
                      d.createElement(
                        "div",
                        { className: fe.WinnerCount },
                        i.toLocaleString()
                      ),
                      d.createElement(
                        "div",
                        { className: fe.WinnerText },
                        (0, I.Xx)("#Giveaway_Congratulation")
                      )
                    )
                )
            );
      }
      var Ne = n(61963),
        Ge = n(32870),
        Pe = n(701),
        Be = n(32905),
        Oe = n(91970),
        Xe = n(20993),
        Ue = n(81362),
        We = n(4170),
        Ve = n(82588);
      function Re(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          a = (0, Ge.oS)(n);
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
                return d.createElement(je, {
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
      function je(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: a } = e,
          i = d.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return (null == e ? void 0 : e.length) > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: r, eStoreDiscoveryQueueType: l } = d.useMemo(
            () => (0, We.N)(t, i),
            [t, i]
          ),
          o = (0, Ve.GD)(l, r),
          s = Math.min(n + o, a);
        return d.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          s.toLocaleString()
        );
      }
      function He(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ce.im)(e.args, "eventid"));
        return k.L7.logged_in && n
          ? d.createElement(Re, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function Fe(e) {
        const { nDoorIndex: t, children: n } = e,
          a = (0, xe._4)(t),
          { fnOpenDoor: i } = (0, xe.Qr)(),
          [r, l] = d.useState(!1),
          [o, s] = d.useState(!1);
        return d.createElement(
          G.zx,
          {
            disabled: a,
            onClick: (e) => {
              r ||
                (k.L7.logged_in
                  ? (l(!0),
                    i(t, !0, null, !1)
                      .then((e) => {
                        e || s(!0), l(!1);
                      })
                      .catch(() => {
                        s(!0), l(!1);
                      }))
                  : (0, Be.X)());
            },
          },
          Boolean(o)
            ? d.createElement("div", null, (0, I.Xx)("#GrantAwardError_Busy"))
            : d.createElement(
                d.Fragment,
                null,
                Boolean(r) && d.createElement(C.V, { size: "small" }),
                Boolean(a) && d.createElement(Pe.JrY, null),
                n
              )
        );
      }
      function ze(e) {
        const t = Number.parseInt((0, Ce.im)(e.args)) || 0;
        return t >= 0 && t < 32
          ? d.createElement(Fe, { nDoorIndex: t }, e.children)
          : null;
      }
      const qe = (0, W.EN)(Oe.CZ);
      function Je(e) {
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
            return d.createElement(qe, {
              event: i,
              section: i.jsondata.sale_sections[l],
              activeTab: new Ue.u(null, t),
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
              { className: Xe.ErrorDiv },
              "Error could not find sale section ",
              a
            );
        }
        return null;
      }
      var Qe = n(81586);
      let Ze = null;
      function Ke(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ce.im)(e.args, "appid")),
          a = Number.parseInt((0, Ce.im)(e.args, "itemdefid")),
          i = Number.parseInt((0, Ce.im)(e.args, "maxquantity")),
          r = (0, Ce.im)(e.args, "calltoaction");
        return (0, Ie.$4)(n, a)
          ? d.createElement(Te.t, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: i },
              strCallToAction: r,
            })
          : d.createElement(C.V, {
              size: "small",
              position: "center",
              string: (0, I.Xx)("#Loading"),
            });
      }
      function Ye(e) {
        const t = (function () {
          const [e, t] = d.useState(ye.Get().GetCounts());
          return (
            d.useEffect(() => {
              e || ye.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return d.createElement(C.V, { size: "small" });
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
      function $e(e) {
        var t, n, a, i;
        const r = (0, we.V)("library");
        if (!r) return d.createElement(C.V, { size: "small" });
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
      function et(e) {
        const t = Number.parseInt((0, Ce.im)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, Ce.im)(e.args, "hide")));
        return t >= 0
          ? d.createElement(tt, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function tt(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          i = (0, xe._4)(t);
        return null == i
          ? null
          : (i && !n) || (!i && n)
          ? d.createElement(d.Fragment, null, e.children)
          : null;
      }
      function nt(e) {
        if (k.L7.logged_in) {
          const t = Number.parseInt((0, Ce.im)(e.args)),
            n = Number.parseInt((0, Ce.im)(e.args, "mod"));
          if (n > 0 && t < n && k.L7.accountid % n == t) return e.children;
        }
        return null;
      }
      function at(e) {
        const t = (0, Ce.im)(e.args);
        return (null == t ? void 0 : t.trim().length) > 0
          ? d.createElement("div", { className: t.trim() }, e.children)
          : d.createElement(d.Fragment, null, e.children);
      }
      function it(e) {
        return d.createElement(
          "span",
          { className: ke.LocalizeBlock },
          (0, I.yu)(
            e.children,
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null)
          )
        );
      }
      function rt(e) {
        let t = (0, Ce.im)(e.args);
        return t
          ? d.createElement(Le, { giveawayid: t })
          : d.createElement(d.Fragment, null);
      }
      function lt(e) {
        const t = Number.parseInt((0, Ce.im)(e.args));
        if (t) {
          const n = Number.parseInt((0, Ce.im)(e.args, "depositpackageid"));
          return d.createElement(Qe.Y, {
            reservationPackageID: t,
            depositPackageID: n,
          });
        }
        return d.createElement(d.Fragment, null);
      }
      var ot = n(92307),
        st = (n(1721), n(88026), n(78443)),
        ct = n(71209),
        dt = n(95408);
      function mt(e) {
        const [t, n] = d.useState(!0),
          { data: l } = (0, dt.NH)("english");
        return (
          d.useEffect(() => {
            Se.Q8.Init(new be.J(k.De.WEBAPI_BASE_URL)),
              le.j1.Init(),
              i.wk.Init(),
              ot.d.AddDictionary(
                (null == Ze &&
                  (Ze = new Map([
                    [
                      "itemdef",
                      {
                        Constructor: Ke,
                        autocloses: !1,
                        skipInternalNewline: !0,
                        allowWrapTextForCopying: !0,
                      },
                    ],
                    ["wishlist", { Constructor: Ne.gq, autocloses: !1 }],
                    ["deckcompatcount", { Constructor: Ye, autocloses: !1 }],
                    [
                      "deckcompatuserlibrarycount",
                      { Constructor: $e, autocloses: !1 },
                    ],
                    ["giveawayinfo", { Constructor: rt, autocloses: !1 }],
                    ["price", { Constructor: Ne.J8, autocloses: !1 }],
                    ["pricesavings", { Constructor: Ne.Eu, autocloses: !1 }],
                    [
                      "eventdoorvisibility",
                      { Constructor: et, autocloses: !1 },
                    ],
                    ["chooseaccount", { Constructor: nt, autocloses: !1 }],
                    ["badgecurrentlevel", { Constructor: He, autocloses: !1 }],
                    ["optindoorquest", { Constructor: ze, autocloses: !1 }],
                    ["classname", { Constructor: at, autocloses: !1 }],
                    ["localize", { Constructor: it, autocloses: !1 }],
                    ["salesection", { Constructor: Je, autocloses: !1 }],
                    ["reservationbutton", { Constructor: lt, autocloses: !1 }],
                  ])),
                Ze)
              ),
              Promise.all([De.cb.InitGlobal()]).then(() => n(!1));
          }, []),
          t || !l
            ? d.createElement(C.V, {
                position: "center",
                size: "medium",
                string: (0, I.Xx)("#Loading"),
              })
            : d.createElement(
                F.uX.Provider,
                { value: { bCanUseLink: !0 } },
                d.createElement(st.bE, null),
                d.createElement(
                  W.rs,
                  null,
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Home(":appid_or_vanity_str"),
                    component: pe,
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.List(":appid_or_vanity_str"),
                    component: pe,
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Create(":appid_or_vanity_str"),
                    component: r.k,
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Category(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        r.k,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.EditRedirectToCategory(":appid_or_vanity_str"),
                    render: (e) => d.createElement(he.Kz, Object.assign({}, e)),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        he.IE,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Publish(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        he.IE,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          bInitiatePublishDialog: !0,
                        })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.PreviewSale(
                      ":appid_or_vanity_str",
                      ":gid(\\d+)?"
                    ),
                    render: (e) =>
                      d.createElement(
                        _e.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "previewsale",
                        })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Preview(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        _e.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "preview",
                        })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.View(":appid_or_vanity_str", ":gid(\\d+)"),
                    render: (e) =>
                      d.createElement(
                        _e.q,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "view",
                        })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Migrate(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        ge.Lc,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.MigrateCategory(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        ge.QU,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.ViewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        ge.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !1,
                        })
                      ),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.PreviewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        ge.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        })
                      ),
                  }),
                  d.createElement(W.AW, { component: ct.R })
                )
              )
        );
      }
    },
  },
]);

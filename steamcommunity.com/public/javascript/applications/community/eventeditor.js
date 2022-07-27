/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    "0XOM": function (e, t, n) {
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
    CY4d: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return S;
      }),
        n.d(t, "b", function () {
          return D;
        });
      var a = n("mrSG"),
        i = n("q1tI"),
        r = n("TyAF"),
        o = n("lkRc"),
        l = n("mgoM"),
        s = n("kLLr"),
        c = (n("1fPh"), n("YNty")),
        d = n("t0uJ"),
        m = n("buwe"),
        u = n("FRkE"),
        v = n("YWVM"),
        b = n("SdTr"),
        p = n("UWWC"),
        E = (n("MUT6"), n("IjL/")),
        _ = n("6AJf"),
        h = n("EGVG");
      let g = class extends i.Component {
        constructor() {
          super(...arguments), (this.m_clanSteamID = new s.a(o.b.CLANSTEAMID));
        }
        componentDidMount() {
          d.c.GetEditModel() &&
            "view" === this.props.mode &&
            d.c.GetEditModel().ClearDirty();
        }
        componentDidUpdate(e) {
          d.c.GetEditModel() &&
            "view" === this.props.mode &&
            d.c.GetEditModel().ClearDirty();
        }
        render() {
          const { mode: e } = this.props;
          if ("view" === e) {
            let e = d.c.GetEditModel().GetEventModel(),
              t = Object(l.f)(o.c.LANGUAGE);
            return e.BHasSaleEnabled()
              ? i.createElement(
                  E.a,
                  null,
                  i.createElement(_.b, {
                    eventModel: e,
                    bIsPreview: !0,
                    language: t,
                  })
                )
              : i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(c.a, {
                    event: e,
                    lang: t,
                    partnerEventStore: d.c,
                    emoticonStore: p.b,
                    adminPanel: i.createElement(v.a, {
                      eventModel: e,
                      partnerEventStore: d.c,
                    }),
                    otherEventRow: i.createElement(b.a, {
                      clanAccountID: e.clanSteamID.GetAccountID(),
                      trackingLocation: 6,
                      gidAnnouncement: e.AnnouncementGID,
                      partnerEventStore: d.c,
                      bViewAllShowInfiniteScroll: !e.BIsOGGEvent(),
                    }),
                  })
                );
          }
          return i.createElement(m.a, {
            editModel: d.c.GetEditModel(),
            appid_or_vanity_str: this.props.match.params.appid_or_vanity_str,
            gid: this.props.match.params.gid,
            bDisplaySale: "previewsale" === e,
          });
        }
      };
      g = Object(a.b)([r.a], g);
      const S = Object(u.a)(g),
        D = (e) =>
          i.createElement(
            h.c,
            Object.assign({}, e, {
              key: e.match.params.oldAnnouncementGID,
              bClearDirty: !0,
              bPreview: !1,
              bPreventRedirect: !0,
            })
          );
    },
    EOKZ: function (e, t, n) {
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
    FwLc: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return ct;
        });
      var a = n("1fPh"),
        i = (n("jZUi"), n("t0uJ")),
        r = n("E/mv"),
        o = n("mrSG"),
        l = n("vDqi"),
        s = n.n(l),
        c = n("TyAF"),
        d = n("q1tI"),
        m = n.n(d),
        u = n("55Ip"),
        v = (n("65aj"), n("3+zv")),
        b = n("kLLr"),
        p = n("TQGK"),
        E = n("WFIl"),
        _ = n("VZMZ"),
        h = n("fpVW"),
        g = n.n(h),
        S = n("KzMr"),
        D = n("7Q8g"),
        f = n("ka0M"),
        O = n("0OaU"),
        C = n("r64O"),
        w = n("exH9"),
        y = n("TLQK"),
        j = n("OS6B"),
        I = n("opsS"),
        T = n("lkRc"),
        L = n("FRkE"),
        N = n("EOKZ"),
        M = n.n(N),
        G = n("EA3E"),
        A = n("Mnbl"),
        k = n("mgoM"),
        x = n("Mgs7"),
        P = (n("P2lf"), n("0XOM"));
      function B(e) {
        const { eventModel: t, fnOnGotoPage: n } = e;
        return t.bOldAnnouncement
          ? null
          : d.createElement(
              "div",
              {
                className: Object(w.a)(P.ManageButton, P.Clone),
                onClick: (e) =>
                  (function (e, t, n) {
                    t.stopPropagation(),
                      i.c
                        .LoadEditorModel(e.clanSteamID, e.GID)
                        .then((e) => {
                          const t = Object(A.a)(e, !0, !0, !0),
                            a = t.GetLanguagesWithTokens();
                          a.length > 1
                            ? (a.sort((e, t) =>
                                Object(y.f)(
                                  "#Language_" + Object(k.c)(e)
                                ).localeCompare(
                                  Object(y.f)("#Language_" + Object(k.c)(t))
                                )
                              ),
                              Object(f.d)(
                                d.createElement(U, {
                                  langs: a,
                                  locData: t,
                                  fnOnGotoPage: n,
                                }),
                                window
                              ))
                            : R(n, t);
                        })
                        .catch((e) => {
                          let t = Object(j.a)(e);
                          Object(f.d)(
                            d.createElement(D.g, {
                              strTitle: Object(y.f)("#EventEditor_CloneError"),
                              bAlertDialog: !0,
                              bDestructiveWarning: !0,
                              strDescription: Object(y.f)(
                                "#EventEditor_CloneError_Desc",
                                t.strErrorMsg
                              ),
                            }),
                            window,
                            { strTitle: Object(y.f)("#EventEditor_CloneError") }
                          );
                        });
                  })(t, e, n),
              },
              Object(y.f)("#Button_Clone")
            );
      }
      function R(e, t, n) {
        const a = i.c.CreateClone();
        n &&
          n.length > 0 &&
          (t.ClearLanguagesTokens(n),
          (a.GetEventModel().jsondata.bSaleEnabled = !0),
          Object(A.b)(a, t, y.b.GetLanguageListForRealms([T.c.EREALM])),
          (a.GetEventModel().jsondata.bSaleEnabled = !1)),
          e(null, "clone");
      }
      function U(e) {
        const { langs: t, locData: n, closeModal: a, fnOnGotoPage: i } = e,
          r = Object(k.f)(T.c.LANGUAGE),
          [o, l] = d.useState(new Set(t.filter((e) => e != r)));
        return d.createElement(
          D.e,
          {
            strTitle: Object(y.f)("#Button_Clone"),
            onOK: () => R(i, n, Array.from(o)),
            strDescription: Object(y.f)("#EventEditor_Clone_MultiLanguages"),
            closeModal: a,
          },
          d.createElement(
            "div",
            { className: P.CloneLangAlert },
            Object(y.f)("#EventEditor_Clone_Alert")
          ),
          d.createElement(
            "div",
            { className: P.CloneLangListCtn },
            t.map((e) =>
              d.createElement(x.f, {
                key: e,
                className: P.CloneCheckBox,
                onChange: (t) => {
                  const n = new Set(o);
                  t ? n.delete(e) : n.add(e), l(n);
                },
                label: Object(y.f)("#Language_" + Object(k.c)(e)),
                checked: !o.has(e),
              })
            )
          ),
          d.createElement(
            x.e,
            { onClick: () => l(new Set()) },
            Object(y.f)("#EventEditor_Clone_SelectAll")
          ),
          d.createElement(
            x.e,
            { onClick: () => l(new Set(t)) },
            Object(y.f)("#EventEditor_Clone_DeSelectAll")
          )
        );
      }
      var F = n("jG1S"),
        V = n("EC67"),
        W = n("5izx"),
        z = n("C4Nl"),
        H = n("IjL/"),
        q = n("Z7M3"),
        J = n("mB/g"),
        Z = n("02Wr"),
        K = n("YLyR"),
        X = n("UvY0"),
        Y = n("X3Ds"),
        Q = n("N0Ye"),
        $ = n("S/ye");
      let ee = class extends d.Component {
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
          let o = t.GID,
            l = t.bOldAnnouncement;
          if (this.state.redirectTarget && !this.bRedirectUsed)
            switch (((this.bRedirectUsed = !0), this.state.redirectTarget)) {
              case "clone":
                return d.createElement(V.b, { push: !0, to: a.a.Edit(n, "") });
              case "edit":
                return Object(J.j)(this.props.eventModel, J.a.k_eCommunityEdit);
              case "view":
                return t.BIsVisibleEvent()
                  ? Object(J.j)(this.props.eventModel, J.a.k_eView)
                  : Object(J.j)(this.props.eventModel, J.a.k_eCommunityPreview);
              default:
                console.log(
                  "EventDisplayTile - Unexpected Case - " +
                    this.state.redirectTarget
                );
            }
          let s = Object(k.f)(T.c.LANGUAGE);
          t.BIsLanguageValidForRealms(s) || (s = t.BInRealmGlobal() ? 0 : 29);
          let c,
            m,
            u = [t.GetImageURLWithFallback("capsule", s)],
            b = t.GetNameWithFallback(s),
            _ = t.BHasSubTitle(s),
            g = t.BHasSaleEnabled(),
            S = t.visibility_state != v.j.k_EEventStateUnpublished,
            D = t.visibility_state != v.j.k_EEventStateVisible;
          if (
            (D &&
              S &&
              (c =
                t.visibilityStartTime == t.startTime
                  ? d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      Object(y.f)(
                        "#EventEditor_Status_WillBeVisible_EventStart"
                      )
                    )
                  : d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      Object(y.o)(
                        "#EventEditor_Status_WillBeVisible_At",
                        d.createElement(K.a, {
                          dateAndTime:
                            t.GetVisibilityStartTimeAndDateUnixSeconds(),
                          bSingleLine: !0,
                        })
                      )
                    )),
            !D && S)
          ) {
            let e = W.a.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateUpcoming },
                  Object(y.f)("#EventDisplay_Upcoming")
                ))
              : Object(Q.a)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateActive },
                  Object(y.f)("#EventDisplay_Active")
                ))
              : t.GetStartTimeAndDateUnixSeconds() > e + 3600 &&
                (m = d.createElement(
                  "span",
                  { className: P.EventStateRecent },
                  Object(y.f)("#EventDisplay_RecentlyActive")
                ));
          }
          i &&
            (b =
              ((null === (e = z.a.Get().GetApp(t.appid)) || void 0 === e
                ? void 0
                : e.GetName()) || "") +
              ": " +
              b);
          let f =
              t.BIsPartnerEvent() &&
              t.BIsVisibleEvent() &&
              E.a.GetStatsFor(t.clanSteamID, o),
            O = p.a.GetOGGClanInfo(t.appid),
            C = Boolean(
              l &&
                O &&
                O.is_ogg &&
                O.clanAccountID != t.announcementClanSteamID.GetAccountID()
            );
          return d.createElement(
            H.a,
            null,
            d.createElement(
              "div",
              {
                className: Object(w.a)({
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
                d.createElement(Z.b, { className: P.TileImage, srcs: u })
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
                    d.createElement("div", { className: P.TileTextAppName }, b),
                    d.createElement(
                      "div",
                      { className: P.TileTextEventType },
                      t.GetCategoryAsString(),
                      g &&
                        d.createElement(
                          "span",
                          { className: P.TileHasSale },
                          " | ",
                          Object(y.f)("#EventEditor_Status_HasSale")
                        )
                    )
                  ),
                  _ && !1,
                  d.createElement(
                    "div",
                    { className: h.ContainerSpaceBetween },
                    d.createElement(
                      "div",
                      { className: P.TileTextStartsIn },
                      d.createElement(K.a, {
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
                                T.c.STORE_BASE_URL +
                                "curator/" +
                                t.clanSteamID.GetAccountID() +
                                "/admin/manage_rss/",
                            },
                            " " + Object(y.f)("#EventEditor_Status_FromRSSFeed")
                          )
                        ),
                      d.createElement($.b, { eventModel: t, bAllowUpdate: !1 })
                    ),
                    Boolean(f) &&
                      d.createElement(
                        "div",
                        { className: P.TileStats },
                        Object(y.o)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            f.m_stats.total_showm.toLocaleString()
                          )
                        ),
                        d.createElement("br", null),
                        Object(y.o)(
                          "#EventDashBoard_Summary_Tile_Read",
                          d.createElement(
                            "span",
                            null,
                            f.m_stats.total_read.toLocaleString()
                          )
                        )
                      )
                  ),
                  c,
                  C
                    ? d.createElement(
                        "div",
                        {
                          className: P.TileButtonContainer,
                          onClick: (e) => this.OnIgnoreFallbackClick(e),
                        },
                        d.createElement(
                          "div",
                          null,
                          Object(y.f)(
                            "#EventEditor_DataFromConnectAnnouncement"
                          )
                        ),
                        d.createElement(
                          J.c,
                          {
                            className: Object(w.a)(P.ManageButton, P.Edit),
                            eventModel: t,
                            route: J.a.k_eView,
                          },
                          Object(y.f)("#Button_ViewPage")
                        )
                      )
                    : d.createElement(
                        te,
                        Object.assign(
                          { fnOnGotoPage: this.OnGotoPage },
                          this.props
                        )
                      ),
                  r &&
                    d.createElement(
                      X.b,
                      { requireAdmin: !0, clanSteamID: t.clanSteamID },
                      d.createElement(ae, { eventModel: t })
                    )
                )
              )
            )
          );
        }
      };
      Object(o.b)([I.b], ee.prototype, "OnFallbackClick", null),
        Object(o.b)([I.b], ee.prototype, "OnGotoPage", null),
        Object(o.b)([I.b], ee.prototype, "OnIgnoreFallbackClick", null),
        (ee = Object(o.b)([c.a], ee));
      let te = class extends d.Component {
        OnIgnoreFallbackClick(e) {
          e.stopPropagation();
        }
        OnPublishEvent(e) {
          e.stopPropagation();
          const { eventModel: t } = this.props;
          i.c
            .LoadEditorModel(t.clanSteamID, t.GID)
            .then(() => {
              Object(f.d)(
                d.createElement(F.a, {
                  editModel: i.c.GetEditModel(),
                  OnPublishSuccess: this.OnPublishSuccess,
                }),
                window
              );
            })
            .catch((e) => {
              let t = Object(j.a)(e);
              Object(f.d)(
                d.createElement(D.g, {
                  strTitle: Object(y.f)("#EventEditor_PublishingError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: Object(y.f)(
                    "#EventEditor_PublishingError_Desc",
                    t.strErrorMsg
                  ),
                }),
                window,
                { strTitle: Object(y.f)("#EventEditor_PublishingError") }
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
            Object(f.d)(
              d.createElement(q.a, {
                eventModel: this.props.eventModel,
                partnerEventStore: i.c,
              }),
              Object(Y.o)(e)
            );
        }
        render() {
          const { eventModel: e, fnOnGotoPage: t } = this.props;
          let n = e.bOldAnnouncement,
            a = e.visibility_state != v.j.k_EEventStateVisible,
            i = e.visibility_state != v.j.k_EEventStateUnpublished;
          return d.createElement(
            "div",
            {
              className: P.TileButtonContainer,
              onClick: (e) => this.OnIgnoreFallbackClick(e),
            },
            !n &&
              d.createElement(
                J.c,
                {
                  className: Object(w.a)(P.ManageButton, P.Edit),
                  eventModel: e,
                  route: J.a.k_eCommunityEdit,
                  onClick: this.StopPropagation,
                },
                Object(y.f)("#Button_Edit")
              ),
            n &&
              d.createElement(
                J.c,
                {
                  className: Object(w.a)(P.ManageButton, P.Edit),
                  "data-tooltip-text": Object(y.f)(
                    "#EventEditor_Button_MigrateAndEdit_Announcement_ttip"
                  ),
                  eventModel: e,
                  route: J.a.k_eCommunityMigrate,
                  onClick: this.StopPropagation,
                },
                Object(y.f)("#EventEditor_Button_MigrateAndEdit")
              ),
            a &&
              d.createElement(
                J.c,
                {
                  className: Object(w.a)(P.ManageButton, P.View),
                  "data-tooltip-text": Object(y.f)(
                    "#EventEditor_Button_PreviewButton_ttip"
                  ),
                  eventModel: e,
                  route: J.a.k_eCommunityPreview,
                  onClick: this.StopPropagation,
                },
                Object(y.f)("#EventDisplay_Preview")
              ),
            !a &&
              d.createElement(
                J.c,
                {
                  className: Object(w.a)(P.ManageButton, P.View),
                  eventModel: e,
                  route: J.a.k_eView,
                  onClick: this.StopPropagation,
                },
                Object(y.f)("#EventDisplay_View")
              ),
            !i &&
              !n &&
              d.createElement(
                "div",
                {
                  className: Object(w.a)(P.ManageButton, P.Publish),
                  onClick: this.OnPublishEvent,
                },
                Object(y.f)("#EventDisplay_Publish")
              ),
            d.createElement("div", { className: P.Spacer }, " "),
            d.createElement(B, { eventModel: e, fnOnGotoPage: t }),
            d.createElement(
              "div",
              {
                className: Object(w.a)(P.ManageButton, P.Delete),
                "data-tooltip-text": Object(y.f)(
                  "#EventEditor_Button_DeleteButton_ttip"
                ),
                onClick: this.OnDeleteClickAndVerify,
              },
              Object(y.f)("#Button_Delete")
            )
          );
        }
      };
      function ne(e, t) {
        if (!e || t <= 0) return [];
        const n = new Array();
        return (
          Object.keys(e).forEach((a) => {
            var i;
            const r = e[a],
              o =
                (null === (i = JSON.stringify(r)) || void 0 === i
                  ? void 0
                  : i.length) || 0;
            n.push({ key: a, size: o }),
              r &&
                "object" == typeof r &&
                o > 100 &&
                ne(r, t - 1).forEach((e) => {
                  n.push({ key: a + ":" + e.key, size: e.size });
                });
          }),
          n
        );
      }
      Object(o.b)([I.b], te.prototype, "OnIgnoreFallbackClick", null),
        Object(o.b)([I.b], te.prototype, "OnPublishEvent", null),
        Object(o.b)([I.b], te.prototype, "OnPublishSuccess", null),
        Object(o.b)([I.b], te.prototype, "StopPropagation", null),
        Object(o.b)([I.b], te.prototype, "OnDeleteClickAndVerify", null),
        (te = Object(o.b)([c.a], te));
      const ae = (e) => {
        var t, n;
        const { eventModel: a } = e;
        if (!(null == a ? void 0 : a.jsondata)) return null;
        const i = ne(a.jsondata, 3);
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
      var ie = n("tP3u"),
        re = n("N038");
      const oe = (e) => {
          const { closeModal: t } = e,
            n = Object(ie.a)(T.b.CLANACCOUNTID);
          return d.createElement(
            D.e,
            {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
            },
            Boolean(null == n)
              ? d.createElement(O.a, {
                  string: Object(y.f)("#Loading"),
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
            d.createElement("div", null, "Type: ", Object(Q.e)(n.event_type)),
            d.createElement(
              "div",
              null,
              "Publish Time: ",
              d.createElement(K.a, {
                dateAndTime: n.publish_time,
                bSingleLine: !0,
              })
            ),
            d.createElement(
              "div",
              null,
              d.createElement(re.b, {
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
      var se = n("6oCP"),
        ce = n("f1ZV"),
        de = n("qmbg"),
        me = n("CdLH"),
        ue = n("dQ8J"),
        ve = n.n(ue);
      function be(e) {
        const { clanInfo: t, closeModal: n } = e,
          [a, i] = d.useState(!0),
          [r, l] = d.useState(!0),
          c = 1063339200,
          m = W.a.GetTimeNowWithOverride(),
          [u, v] = d.useState(m - me.f.PerMonth),
          [b, p] = d.useState(m),
          [_, h] = d.useState(-1),
          g = _ >= 0;
        return d.createElement(
          D.e,
          {
            strTitle: Object(y.f)("#EventDashboard_Stats_title"),
            strDescription: Object(y.f)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: g,
            onOK: () =>
              (function (e, t, n, a) {
                return Object(o.a)(this, void 0, void 0, function* () {
                  const i = new Array(),
                    r = s.a.CancelToken.source();
                  let o = 0;
                  a(o);
                  const l = 100;
                  let c,
                    d = 0,
                    m = new Array();
                  const u = Object(k.f)(T.c.LANGUAGE);
                  do {
                    if (
                      ((d += 1),
                      (m = yield se.b.LoadAdjacentPartnerEvents(
                        c,
                        e.clanSteamID,
                        void 0,
                        0,
                        l,
                        { rtime_oldestevent: t },
                        r
                      )),
                      (null == m ? void 0 : m.length) > 0)
                    ) {
                      (o += m.length), a(o), (c = m[m.length - 1].GID);
                      const t = m
                        .filter((e) => e.startTime <= n && e.BIsVisibleEvent())
                        .map((e) => e.GID);
                      t.length > 0 &&
                        (yield E.a.LoadStatsForEvents(e.clanSteamID, t, r),
                        (o += t.length),
                        a(o),
                        t.forEach((t) => {
                          const n = E.a.GetStatsFor(e.clanSteamID, t),
                            a = se.b.GetClanEventModel(t);
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
                  } while (m.length == l && d < 100);
                  return (
                    de.a.WriteCSVToFile(
                      i,
                      "event_stats_" +
                        e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                        ".csv"
                    ),
                    !0
                  );
                });
              })(t, a ? c : u, r ? Number.MAX_SAFE_INTEGER : b, h).then(() =>
                n()
              ),
          },
          d.createElement(
            "div",
            { className: ve.a.DialogCtn },
            d.createElement(
              "div",
              { className: "DialogLabel" },
              Object(y.f)("#EventDashboard_Stats_Oldest_Title")
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(x.f, {
                label: Object(y.f)("#EventDashboard_Stats_Oldest"),
                onChange: i,
                checked: a,
                disabled: g,
              }),
              !a &&
                d.createElement(
                  "div",
                  null,
                  Object(y.f)("#EventDashboard_Stats_Oldest_Override"),
                  d.createElement(ce.a, {
                    nEarliestTime: c,
                    nLatestTime: r ? void 0 : b,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => u,
                    fnSetTimeToUpdate: v,
                    disabled: g,
                  })
                )
            ),
            d.createElement(
              "div",
              { className: "DialogLabel" },
              Object(y.f)("#EventDashboard_Stats_Newest_Title")
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(x.f, {
                label: Object(y.f)("#EventDashboard_Stats_Newest"),
                onChange: l,
                checked: r,
                disabled: g,
              }),
              !r &&
                d.createElement(
                  "div",
                  null,
                  Object(y.f)("#EventDashboard_Stats_Newest_Override"),
                  d.createElement(ce.a, {
                    nEarliestTime: a ? c : u,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => b,
                    fnSetTimeToUpdate: p,
                    disabled: g,
                  })
                )
            ),
            g &&
              d.createElement(O.a, {
                position: "center",
                size: "medium",
                string: Object(y.f)("#EventDashboard_Stats_Progress", _),
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
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.m_clanSteamID = new b.a(T.b.CLANSTEAMID)),
            (this.k_nMaxPerDirection = 10),
            (this.m_IntervalTimer = void 0),
            T.b.CLANACCOUNTID == v.H && (this.k_nMaxPerDirection = 2);
        }
        EnsureEventsAreLoaded() {
          i.c
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
          return Object(o.a)(this, void 0, void 0, function* () {
            let e = i.c.GetClanEventGIDs(this.m_clanSteamID).filter((e) => {
              let t = i.c.GetClanEventModel(e);
              return Boolean(t && t.BIsVisibleEvent() && t.BIsPartnerEvent());
            });
            e.length > 0 &&
              E.a.LoadStatsForEvents(
                this.m_clanSteamID,
                e,
                this.m_cancelSignal
              );
          });
        }
        HandleErrorWithDialog(e) {
          let t = Object(j.a)(e);
          Object(f.d)(
            d.createElement(
              D.g,
              null,
              Object(y.f)("#Error_Description", t.errorCode, t.strErrorMsg)
            ),
            window
          );
        }
        componentDidMount() {
          this.EnsureEventsAreLoaded(),
            i.c.GetEditModel() && i.c.ResetModel(),
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
            a = i.c.GetClanEventGIDs(e);
          if ((null == a ? void 0 : a.length) > 0) {
            (a = a.slice().filter((e) => {
              const n = i.c.GetClanEventModel(e);
              return (null == n ? void 0 : n.visibility_state) === t;
            })),
              (a = a.sort((e, t) => {
                Object(C.a)(
                  e !== t,
                  `Unexpected duplicates in the list: ${e} ${t}`
                );
                const n = i.c.GetClanEventModel(e);
                return i.c.GetClanEventModel(t).startTime - n.startTime;
              }));
            for (const e of a) {
              const t = i.c.GetClanEventModel(e);
              n.push(
                d.createElement(ee, {
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
          return Object(o.a)(this, void 0, void 0, function* () {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMorePublicEvents,
              500
            );
          });
        }
        LoadMorePublicEvents() {
          return Object(o.a)(this, void 0, void 0, function* () {
            if ((this.ClearTimer(), !this.state.bInfiniteScrollLoading)) return;
            let e = null;
            i.c.GetAllClanEvents(this.m_clanSteamID).forEach((t) => {
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
                  ? yield i.c.LoadAdjacentPartnerEventsByAnnouncement(
                      e.AnnouncementGID,
                      this.m_clanSteamID,
                      void 0,
                      0,
                      this.k_nMaxPerDirection
                    )
                  : yield i.c.LoadAdjacentPartnerEvents(
                      e ? e.GID : void 0,
                      this.m_clanSteamID,
                      void 0,
                      0,
                      this.k_nMaxPerDirection
                    )),
                (t = n.length < this.k_nMaxPerDirection);
            } catch (e) {
              console.log("EventListView: " + Object(j.a)(e).strErrorMsg),
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
          const e = new b.a(T.b.CLANSTEAMID);
          let t = this.CreateTiles(
              this.m_clanSteamID,
              v.j.k_EEventStateUnpublished
            ),
            n = this.CreateTiles(this.m_clanSteamID, v.j.k_EEventStateStaged),
            a = this.CreateTiles(this.m_clanSteamID, v.j.k_EEventStateVisible),
            i =
              !this.state.bInitialLoadComplete ||
              this.state.bInfiniteScrollLoading;
          return d.createElement(
            "div",
            { ref: this.m_refScroll },
            d.createElement(G.e, null),
            d.createElement(
              "div",
              { className: Object(w.a)("maincontent", M.a.EventDashboardCtn) },
              d.createElement(Ee, {
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
              }),
              d.createElement(
                X.b,
                { requireAdmin: !0, clanSteamID: e },
                d.createElement(
                  "div",
                  {
                    className: Object(w.a)(
                      "maincontent",
                      M.a.EventDashboardCtn,
                      M.a.EventDashAdminToolsCtn,
                      g.a.FlexRowContainer
                    ),
                  },
                  d.createElement(x.f, {
                    label: "Show Event Metadata Size",
                    tooltip:
                      "Surfaces the size of the biggest sections in the event's metadata",
                    onChange: this.UpdateShowEventMetaDataSizes,
                    checked: this.state.bShowEventMetaDataSizes,
                  }),
                  d.createElement(
                    x.e,
                    {
                      onClick: (e) => {
                        Object(f.d)(d.createElement(oe, null), Object(Y.o)(e));
                      },
                    },
                    "Show Publishing Audit History"
                  )
                )
              )
            ),
            d.createElement(
              "div",
              { className: M.a.MainLists },
              t.length > 0 &&
                d.createElement(
                  "div",
                  { className: Object(w.a)(M.a.Section, M.a.Unpublished) },
                  d.createElement(
                    "div",
                    {
                      className: Object(w.a)(
                        "maincontent",
                        "eventlist",
                        M.a.EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: M.a.DisplaySectionHeader },
                      Object(y.f)("#EventDisplay_Unpublished_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": Object(y.f)(
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
                  { className: Object(w.a)(M.a.Section, M.a.Staged) },
                  d.createElement(
                    "div",
                    {
                      className: Object(w.a)(
                        "maincontent",
                        "eventlist",
                        M.a.EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: M.a.DisplaySectionHeader },
                      Object(y.f)("#EventDisplay_Stage_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": Object(y.f)(
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
                  className: Object(w.a)(
                    M.a.Section,
                    M.a.DisplaySectionHeaderContainer,
                    M.a.Visible
                  ),
                },
                d.createElement(
                  "div",
                  {
                    className: Object(w.a)(
                      "maincontent",
                      "eventlist",
                      M.a.EventDashboardCtn
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: M.a.DisplaySectionHeader },
                    Object(y.f)("#EventDisplay_Visible_Title")
                  ),
                  d.createElement(
                    "div",
                    { className: M.a.DisplaySectionSubHeader },
                    Object(y.f)("#EventDisplay_Visible_Title_WithRange")
                  ),
                  a && a,
                  !i &&
                    !a &&
                    d.createElement(
                      "div",
                      null,
                      Object(y.f)("#EventDisplay_NoPublic")
                    ),
                  i &&
                    d.createElement(O.a, {
                      position: "center",
                      string: Object(y.f)("#Loading"),
                    }),
                  this.state.bExhaustedEventList &&
                    d.createElement(
                      "div",
                      null,
                      Object(y.f)("#EventDisplay_AllPublicShown")
                    ),
                  this.state.bErrorOnInfiniteScrollRequest &&
                    d.createElement(
                      "div",
                      null,
                      Object(y.f)("#EventDisplay_HitErrorInfiniteScroll")
                    )
                )
              )
            )
          );
        }
      };
      Object(o.b)([I.b], pe.prototype, "OnScroll", null),
        Object(o.b)([I.b], pe.prototype, "LoadMorePublicEventWithDelay", null),
        Object(o.b)([I.b], pe.prototype, "LoadMorePublicEvents", null),
        Object(o.b)([I.b], pe.prototype, "UpdateShowEventMetaDataSizes", null),
        (pe = Object(o.b)([c.a], pe));
      const Ee = Object(c.a)((e) => {
          const t = new b.a(T.b.CLANSTEAMID),
            n = p.a.GetClanInfoByClanAccountID(t.GetAccountID()),
            { appid_or_vanity_str: r } = e;
          let o = E.a.GetTotalStats(t);
          return d.createElement(
            "div",
            { className: g.a.EventDashboardHeader },
            d.createElement(_.c, { identifier: r, partnerEventStore: i.c }),
            d.createElement(
              "div",
              { className: g.a.EventDashboardTitles },
              d.createElement(
                "div",
                { className: g.a.maintitle },
                Object(y.f)("#EventDisplay_Events"),
                d.createElement(
                  "div",
                  { className: g.a.subtitle },
                  Object(y.f)("#EventDisplay_Edit_Desc")
                )
              ),
              d.createElement(
                "div",
                { className: g.a.EventDashboardActions },
                d.createElement(
                  u.b,
                  {
                    className: Object(w.a)(g.a.Button, g.a.Primary),
                    to: a.a.Create(r),
                    onClick: () => i.c.ResetModel(),
                  },
                  Object(y.f)("#EventDisplay_CreateNewEvent")
                ),
                d.createElement(
                  x.e,
                  {
                    onClick: (e) =>
                      Object(f.d)(
                        d.createElement(be, { clanInfo: n }),
                        Object(Y.o)(e)
                      ),
                  },
                  Object(y.f)("#EventDashboard_Stats_export")
                )
              )
            ),
            d.createElement(
              "div",
              { className: g.a.EventDashboardStatsCtn },
              d.createElement(S.a, {
                summary: o.m_stats,
                bIsAllowedInLibrary: null == n ? void 0 : n.is_ogg,
                bIncludeDescription: !0,
              })
            )
          );
        }),
        _e = Object(L.a)(pe);
      var he = n("CY4d"),
        ge = n("NCIP"),
        Se = n("EGVG"),
        De = (n("M1X1"), n("Y9L4"), n("WBba")),
        fe = n("qD+2"),
        Oe = n("9w6b"),
        Ce = n("hKFG"),
        we = (n("ZeAL"), n("rcjX"));
      n("li7h"), n("AiWL");
      class ye {
        constructor() {
          if (
            ((this.m_counts = null),
            document.getElementById("application_config"))
          ) {
            let e = Object(T.g)("deckcompatcount", "application_config");
            ye.ValidateListCompat(e) && (this.m_counts = e);
          }
        }
        GetCounts() {
          return this.m_counts;
        }
        LoadCounts() {
          return Object(o.a)(this, void 0, void 0, function* () {
            return Boolean(this.m_counts)
              ? this.m_counts
              : (this.m_promise || (this.m_promise = this.LoadInternalCount()),
                this.m_promise);
          });
        }
        LoadInternalCount() {
          var e, t;
          return Object(o.a)(this, void 0, void 0, function* () {
            let n = null;
            try {
              const a =
                  T.c.STORE_BASE_URL + "saleaction/ajaxgetuserdeckcompatcounts",
                i = yield s.a.get(a, {});
              if (
                200 == (null == i ? void 0 : i.status) &&
                1 ==
                  (null === (e = i.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                (null === (t = i.data) || void 0 === t ? void 0 : t.counts)
              )
                return (this.m_counts = i.data.counts), this.m_counts;
              n = Object(j.a)(i);
            } catch (e) {
              n = Object(j.a)(e);
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
              ("dev" != T.c.WEB_UNIVERSE && "beta" != T.c.WEB_UNIVERSE) ||
                (window.g_DeckCompatCountStores = ye.s_globalSingletonStore)),
            ye.s_globalSingletonStore
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
      var je = n("a7S1"),
        Ie = n("ZC8J"),
        Te = n("Aa6l"),
        Le = n("uaM7"),
        Ne = n("bWts"),
        Me = n("2vnA");
      class Ge {
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
      Object(o.b)([Me.C], Ge.prototype, "giveaway_id", void 0),
        Object(o.b)([Me.C], Ge.prototype, "seconds_until_drawing", void 0),
        Object(o.b)([Me.C], Ge.prototype, "rtime_start", void 0),
        Object(o.b)([Me.C], Ge.prototype, "rtime_end", void 0),
        Object(o.b)([Me.C], Ge.prototype, "closed", void 0),
        Object(o.b)([Me.C], Ge.prototype, "winner_count", void 0);
      class Ae {
        constructor() {
          (this.m_mapGiveawayIDToNextDrawInfo = new Map()),
            (this.m_bLoadedFromConfig = !1);
        }
        LazyInit() {
          if (!this.m_bLoadedFromConfig) {
            let e = Object(T.g)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let t = new Ge();
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
          return Object(o.a)(this, void 0, void 0, function* () {
            return (
              this.LazyInit(),
              this.m_mapGiveawayIDToNextDrawInfo.has(e)
                ? this.m_mapGiveawayIDToNextDrawInfo.get(e)
                : this.ReloadGiveaway(e, t)
            );
          });
        }
        ReloadGiveaway(e, t) {
          return Object(o.a)(this, void 0, void 0, function* () {
            let n = T.c.STORE_BASE_URL + "prizes/nextdraw/" + e,
              a = null,
              i = { origin: self.origin };
            return (
              (a = yield s.a.get(n, { params: i, cancelToken: t.token })),
              this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                this.m_mapGiveawayIDToNextDrawInfo.set(e, new Ge()),
              this.CopyToGiveaway(
                a.data,
                this.m_mapGiveawayIDToNextDrawInfo.get(e)
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(e)
            );
          });
        }
      }
      Object(o.b)(
        [Me.C],
        Ae.prototype,
        "m_mapGiveawayIDToNextDrawInfo",
        void 0
      ),
        Object(o.b)([Me.k], Ae.prototype, "CopyToGiveaway", null);
      const ke = new Ae();
      window.g_GiveawayStore = ke;
      var xe = n("uEKC"),
        Pe = n("+d9t");
      let Be = class extends d.Component {
        constructor() {
          super(...arguments),
            (this.state = { info: void 0 }),
            (this.m_cancelSignal = s.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("GiveawayNextDraw component unmounted"),
            this.ClearRefreshInterval(),
            this.ClearCountDown();
        }
        componentDidMount() {
          return Object(o.a)(this, void 0, void 0, function* () {
            let e = yield ke.FirstTimeLoadGiveaway(
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
          return Object(o.a)(this, void 0, void 0, function* () {
            const { info: e } = this.state;
            e.BIsValid() &&
              e.seconds_until_drawing <= 0 &&
              !e.closed &&
              (this.ClearCountDown(),
              yield ke.ReloadGiveaway(
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
          return Object(o.a)(this, void 0, void 0, function* () {
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
            T.c.STORE_BASE_URL +
            "prizes/view/" +
            e.giveaway_id +
            (T.c.SNR ? "?snr=" + T.c.SNR : "");
          return d.createElement(
            "div",
            { className: xe.countdownCtn },
            Boolean(e.closed) &&
              d.createElement(
                "div",
                { className: xe.Closed },
                e.winner_count > 0
                  ? Object(y.f)(
                      "#Giveaway_Closed",
                      e.winner_count.toLocaleString()
                    )
                  : Object(y.f)("#Giveaway_Closed_NoWinnerInfo")
              ),
            Boolean(!e.closed) &&
              d.createElement(
                d.Fragment,
                null,
                Boolean(e.seconds_until_drawing <= 0)
                  ? d.createElement(
                      "div",
                      { className: xe.Throbber },
                      d.createElement(O.a, { size: "small" }),
                      d.createElement(
                        "div",
                        null,
                        Object(y.f)("#Giveaway_RandomDraw")
                      )
                    )
                  : d.createElement(
                      "div",
                      { className: xe.CountDownCtn },
                      d.createElement(
                        "div",
                        { className: xe.CountDownTime },
                        this.PrintTwoDigits(
                          Math.floor(e.seconds_until_drawing / 60)
                        ) +
                          ":" +
                          this.PrintTwoDigits(e.seconds_until_drawing % 60)
                      ),
                      d.createElement(
                        "div",
                        { className: xe.CountDownText },
                        Object(y.f)("#Giveaway_CountDown2"),
                        " ",
                        Object(y.f)("#Giveaway_KeepWatching")
                      )
                    ),
                Boolean(e.winner_count > 0) &&
                  d.createElement(
                    "div",
                    { className: xe.WinnerInfo },
                    d.createElement(
                      "div",
                      { className: xe.WinnerCount },
                      e.winner_count.toLocaleString()
                    ),
                    d.createElement(
                      "div",
                      { className: xe.WinnerText },
                      Object(y.f)("#Giveaway_Congratulation")
                    )
                  )
              ),
            d.createElement(
              Pe.c,
              { className: xe.LearnMore, href: t },
              Object(y.f)("#Giveaway_LearnMore")
            )
          );
        }
      };
      Object(o.b)([I.b], Be.prototype, "SetupRefreshDataInterval", null),
        Object(o.b)([I.b], Be.prototype, "ClearRefreshInterval", null),
        Object(o.b)([I.b], Be.prototype, "RefreshData", null),
        Object(o.b)([I.b], Be.prototype, "SetupCountDown", null),
        Object(o.b)([I.b], Be.prototype, "UpdateTimer", null),
        (Be = Object(o.b)([c.a], Be));
      var Re = n("l2mU"),
        Ue = n("CIgE"),
        Fe = n("6Y59"),
        Ve = n("BFsE"),
        We = n("6AJf"),
        ze = n("OiDl"),
        He = n("z672");
      function qe(e) {
        var t;
        const n = Object(Ue.b)(e.nEventBadgeID);
        return (null == n ? void 0 : n.level) > 0
          ? d.createElement(
              "span",
              null,
              null === (t = n.level) || void 0 === t
                ? void 0
                : t.toLocaleString()
            )
          : null;
      }
      function Je(e) {
        const t = Number.parseInt(Object(we.f)(e.args, "eventid"));
        return T.j.logged_in && t
          ? d.createElement(qe, { nEventBadgeID: t })
          : null;
      }
      function Ze(e) {
        const { nDoorIndex: t, children: n } = e,
          a = Object(Te.f)(t),
          { fnOpenDoor: i } = Object(Te.h)(),
          [r, o] = d.useState(!1),
          [l, s] = d.useState(!1);
        return d.createElement(
          x.e,
          {
            disabled: a,
            onClick: (e) => {
              r ||
                (T.j.logged_in
                  ? (o(!0),
                    i(t, !0, null, !1)
                      .then((e) => {
                        e || s(!0), o(!1);
                      })
                      .catch(() => {
                        s(!0), o(!1);
                      }))
                  : Object(Ve.a)());
            },
          },
          Boolean(l)
            ? d.createElement("div", null, Object(y.f)("#GrantAwardError_Busy"))
            : d.createElement(
                d.Fragment,
                null,
                Boolean(r) && d.createElement(O.a, { size: "small" }),
                Boolean(a) && d.createElement(Fe.m, null),
                n
              )
        );
      }
      function Ke(e) {
        const t = Number.parseInt(Object(we.f)(e.args)) || 0;
        return t >= 0 && t < 32
          ? d.createElement(Ze, { nDoorIndex: t }, e.children)
          : null;
      }
      const Xe = Object(V.j)(We.a);
      function Ye(e) {
        var t, n;
        const a = Number.parseInt(Object(we.f)(e.args)),
          { event: i, showErrorInfo: r } = e.context;
        if (a) {
          const o =
            null ===
              (n =
                null === (t = null == i ? void 0 : i.jsondata) || void 0 === t
                  ? void 0
                  : t.sale_sections) || void 0 === n
              ? void 0
              : n.findIndex((e) => e.unique_id == a);
          if (o >= 0) {
            const t = i.GetDayIndexFromEventStart();
            return d.createElement(Xe, {
              event: i,
              section: i.jsondata.sale_sections[o],
              activeTab: new He.a(null, t),
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
              { className: ze.ErrorDiv },
              "Error could not find sale section ",
              a
            );
        }
        return null;
      }
      let Qe = null;
      function $e(e) {
        const { event: t } = e.context,
          n = Number.parseInt(Object(we.f)(e.args, "appid")),
          a = Number.parseInt(Object(we.f)(e.args, "itemdefid")),
          i = Number.parseInt(Object(we.f)(e.args, "maxquantity")),
          r = Object(we.f)(e.args, "calltoaction");
        return Object(Ie.a)(n, a)
          ? d.createElement(Le.a, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: i },
              strCallToAction: r,
            })
          : d.createElement(O.a, {
              size: "small",
              position: "center",
              string: Object(y.f)("#Loading"),
            });
      }
      function et(e) {
        const t = (function () {
          const [e, t] = m.a.useState(ye.Get().GetCounts());
          return (
            m.a.useEffect(() => {
              e || ye.Get().LoadCounts().then(t);
            }, []),
            e
          );
        })();
        if (!t) return d.createElement(O.a, { size: "small" });
        const n = Number.parseInt(Object(we.f)(e.args));
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
        var t, n, a, i;
        const r = Object(je.b)("library");
        if (!r) return d.createElement(O.a, { size: "small" });
        const o = Number.parseInt(Object(we.f)(e.args));
        let l =
          (null === (t = r.verifiedList) || void 0 === t ? void 0 : t.length) ||
          0;
        switch (o) {
          case 2:
            l =
              (null === (n = r.playableList) || void 0 === n
                ? void 0
                : n.length) || 0;
            break;
          case 1:
            l =
              (null === (a = r.unsupportedList) || void 0 === a
                ? void 0
                : a.length) || 0;
            break;
          case 0:
            l =
              (null === (i = r.unknownList) || void 0 === i
                ? void 0
                : i.length) || 0;
        }
        return d.createElement("span", null, Number(l).toLocaleString());
      }
      function nt(e) {
        const t = Number.parseInt(Object(we.f)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt(Object(we.f)(e.args, "hide")));
        return t >= 0
          ? d.createElement(at, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function at(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          i = Object(Te.f)(t);
        return null == i
          ? null
          : (i && !n) || (!i && n)
          ? d.createElement(d.Fragment, null, e.children)
          : null;
      }
      function it(e) {
        if (T.j.logged_in) {
          const t = Number.parseInt(Object(we.f)(e.args)),
            n = Number.parseInt(Object(we.f)(e.args, "mod"));
          if (n > 0 && t < n && T.j.accountid % n == t) return e.children;
        }
        return null;
      }
      function rt(e) {
        const t = Object(we.f)(e.args);
        return (null == t ? void 0 : t.trim().length) > 0
          ? d.createElement("div", { className: t.trim() }, e.children)
          : d.createElement(d.Fragment, null, e.children);
      }
      function ot(e) {
        return d.createElement(
          "span",
          { className: Ne.LocalizeBlock },
          Object(y.l)(
            e.children,
            d.createElement("i", null),
            d.createElement("i", null),
            d.createElement("i", null),
            d.createElement("i", null)
          )
        );
      }
      function lt(e) {
        let t = Object(we.f)(e.args);
        return t
          ? d.createElement(Be, { giveawayid: t })
          : d.createElement(d.Fragment, null);
      }
      var st = n("TOXn");
      n("xnZ7"), n("idvb"), n("mRR+");
      function ct(e) {
        const [t, n] = m.a.useState(!0);
        return (
          m.a.useEffect(() => {
            fe.a.Init(new De.a(T.c.WEBAPI_BASE_URL)),
              se.b.Init(),
              i.c.Init(),
              st.a.AddDictionary(
                (null == Qe &&
                  (Qe = new Map([
                    [
                      "itemdef",
                      {
                        Constructor: $e,
                        autocloses: !1,
                        skipInternalNewline: !0,
                        allowWrapTextForCopying: !0,
                      },
                    ],
                    ["wishlist", { Constructor: Re.d, autocloses: !1 }],
                    ["deckcompatcount", { Constructor: et, autocloses: !1 }],
                    [
                      "deckcompatuserlibrarycount",
                      { Constructor: tt, autocloses: !1 },
                    ],
                    ["giveawayinfo", { Constructor: lt, autocloses: !1 }],
                    ["price", { Constructor: Re.a, autocloses: !1 }],
                    ["pricesavings", { Constructor: Re.b, autocloses: !1 }],
                    [
                      "eventdoorvisibility",
                      { Constructor: nt, autocloses: !1 },
                    ],
                    ["chooseaccount", { Constructor: it, autocloses: !1 }],
                    ["badgecurrentlevel", { Constructor: Je, autocloses: !1 }],
                    ["optindoorquest", { Constructor: Ke, autocloses: !1 }],
                    ["classname", { Constructor: rt, autocloses: !1 }],
                    ["localize", { Constructor: ot, autocloses: !1 }],
                    ["salesection", { Constructor: Ye, autocloses: !1 }],
                  ])),
                Qe)
              ),
              Promise.all([Oe.a.InitGlobal(), Object(Ce.a)(null)]).then(() =>
                n(!1)
              );
          }, []),
          t
            ? m.a.createElement(O.a, {
                position: "center",
                size: "medium",
                string: Object(y.f)("#Loading"),
              })
            : m.a.createElement(
                J.d.Provider,
                { value: { bCanUseLink: !0 } },
                m.a.createElement(G.a, null),
                m.a.createElement(
                  V.e,
                  null,
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.Home(":appid_or_vanity_str"),
                    component: _e,
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.List(":appid_or_vanity_str"),
                    component: _e,
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.Create(":appid_or_vanity_str"),
                    component: r.b,
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.Category(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        r.b,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.EditRedirectToCategory(":appid_or_vanity_str"),
                    render: (e) =>
                      m.a.createElement(ge.c, Object.assign({}, e)),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        ge.a,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.Publish(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        ge.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          bInitiatePublishDialog: !0,
                        })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.PreviewSale(
                      ":appid_or_vanity_str",
                      ":gid(\\d+)?"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        he.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "previewsale",
                        })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.Preview(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        he.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "preview",
                        })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.View(":appid_or_vanity_str", ":gid(\\d+)"),
                    render: (e) =>
                      m.a.createElement(
                        he.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "view",
                        })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.Migrate(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        Se.d,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.MigrateCategory(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        Se.b,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.ViewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        Se.c,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !1,
                        })
                      ),
                  }),
                  m.a.createElement(V.c, {
                    exact: !0,
                    path: a.a.PreviewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        Se.c,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        })
                      ),
                  }),
                  m.a.createElement(V.c, { component: dt })
                )
              )
        );
      }
      function dt(e) {
        return "dev" !== T.c.WEB_UNIVERSE
          ? m.a.createElement(V.b, { push: !0, to: "/" })
          : m.a.createElement("div", null, "Unknown route");
      }
    },
    OiDl: function (e, t, n) {
      e.exports = { ErrorDiv: "saleeventbbcodeparser_ErrorDiv_XeZEx" };
    },
    dQ8J: function (e, t, n) {
      e.exports = { DialogCtn: "partnereventstatsexport_DialogCtn_2LwQU" };
    },
    uEKC: function (e, t, n) {
      e.exports = {
        countdownCtn: "giveawaynextdraw_countdownCtn_GWWac",
        Closed: "giveawaynextdraw_Closed_ATX_x",
        CountDownCtn: "giveawaynextdraw_CountDownCtn_11RwP",
        CountDownTime: "giveawaynextdraw_CountDownTime_eh0pM",
        CountDownText: "giveawaynextdraw_CountDownText_3VKQ3",
        LearnMore: "giveawaynextdraw_LearnMore_1q98m",
        Throbber: "giveawaynextdraw_Throbber_bEkRt",
        WinnerInfo: "giveawaynextdraw_WinnerInfo_2LTFl",
        WinnerCount: "giveawaynextdraw_WinnerCount_Z7ScP",
        WinnerText: "giveawaynextdraw_WinnerText_chkuq",
      };
    },
  },
]);

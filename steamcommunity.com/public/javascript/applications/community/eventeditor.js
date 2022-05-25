/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    "0XOM": function (e, t, a) {
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
    CY4d: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return g;
      }),
        a.d(t, "b", function () {
          return O;
        });
      var n = a("mrSG"),
        i = a("q1tI"),
        l = a("TyAF"),
        r = a("lkRc"),
        o = a("mgoM"),
        s = a("kLLr"),
        c = (a("1fPh"), a("YNty")),
        d = a("t0uJ"),
        m = a("buwe"),
        E = a("FRkE"),
        b = a("YWVM"),
        v = a("SdTr"),
        p = a("UWWC"),
        _ = (a("MUT6"), a("IjL/")),
        h = a("6AJf"),
        u = a("EGVG");
      let S = class extends i.Component {
        constructor() {
          super(...arguments), (this.m_clanSteamID = new s.a(r.b.CLANSTEAMID));
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
              t = Object(o.d)(r.c.LANGUAGE);
            return e.BHasSaleEnabled()
              ? i.createElement(
                  _.a,
                  null,
                  i.createElement(h.c, {
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
                    adminPanel: i.createElement(b.a, {
                      eventModel: e,
                      partnerEventStore: d.c,
                    }),
                    otherEventRow: i.createElement(v.a, {
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
      S = Object(n.b)([l.a], S);
      const g = Object(E.a)(S),
        O = (e) =>
          i.createElement(
            u.c,
            Object.assign({}, e, {
              key: e.match.params.oldAnnouncementGID,
              bClearDirty: !0,
              bPreview: !1,
              bPreventRedirect: !0,
            })
          );
    },
    EOKZ: function (e, t, a) {
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
    FwLc: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return Ce;
        });
      var n = a("1fPh"),
        i = (a("jZUi"), a("t0uJ")),
        l = a("E/mv"),
        r = a("mrSG"),
        o = a("vDqi"),
        s = a.n(o),
        c = a("TyAF"),
        d = a("q1tI"),
        m = a.n(d),
        E = a("55Ip"),
        b = (a("65aj"), a("3+zv")),
        v = a("kLLr"),
        p = a("TQGK"),
        _ = a("WFIl"),
        h = a("VZMZ"),
        u = a("fpVW"),
        S = a.n(u),
        g = a("KzMr"),
        O = a("7Q8g"),
        D = a("ka0M"),
        C = a("0OaU"),
        j = a("r64O"),
        y = a("exH9"),
        f = a("TLQK"),
        T = a("OS6B"),
        I = a("opsS"),
        M = a("lkRc"),
        A = a("FRkE"),
        L = a("EOKZ"),
        w = a.n(L),
        k = a("EA3E"),
        N = a("jG1S"),
        G = a("EC67"),
        P = a("mgoM"),
        x = a("5izx"),
        B = a("C4Nl"),
        U = a("Mgs7"),
        R = a("IjL/"),
        V = a("Z7M3"),
        F = a("mB/g"),
        H = a("02Wr"),
        z = a("YLyR"),
        W = a("UvY0"),
        q = a("X3Ds"),
        J = (a("P2lf"), a("N0Ye")),
        Z = a("Mnbl"),
        Y = a("S/ye"),
        K = a("0XOM");
      a("2vnA");
      a("f0Wu");
      let X = class extends d.Component {
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
            appid_or_vanity_str: a,
            bShowGameName: i,
            bShowEventMetaDataSizes: l,
          } = this.props;
          let r = t.GID,
            o = t.bOldAnnouncement;
          if (this.state.redirectTarget && !this.bRedirectUsed)
            switch (((this.bRedirectUsed = !0), this.state.redirectTarget)) {
              case "clone":
                return d.createElement(G.b, { push: !0, to: n.a.Edit(a, "") });
              case "edit":
                return Object(F.j)(this.props.eventModel, F.a.k_eCommunityEdit);
              case "view":
                return t.BIsVisibleEvent()
                  ? Object(F.j)(this.props.eventModel, F.a.k_eView)
                  : Object(F.j)(this.props.eventModel, F.a.k_eCommunityPreview);
              default:
                console.log(
                  "EventDisplayTile - Unexpected Case - " +
                    this.state.redirectTarget
                );
            }
          let s = Object(P.d)(M.c.LANGUAGE);
          t.BIsLanguageValidForRealms(s) || (s = t.BInRealmGlobal() ? 0 : 29);
          let c,
            m,
            E = [t.GetImageURLWithFallback("capsule", s)],
            v = t.GetNameWithFallback(s),
            h = t.BHasSubTitle(s),
            S = t.BHasSaleEnabled(),
            g = t.visibility_state != b.j.k_EEventStateUnpublished,
            O = t.visibility_state != b.j.k_EEventStateVisible;
          if (
            (O &&
              g &&
              (c =
                t.visibilityStartTime == t.startTime
                  ? d.createElement(
                      "div",
                      { className: K.TileTextStartsIn },
                      Object(f.f)(
                        "#EventEditor_Status_WillBeVisible_EventStart"
                      )
                    )
                  : d.createElement(
                      "div",
                      { className: K.TileTextStartsIn },
                      Object(f.n)(
                        "#EventEditor_Status_WillBeVisible_At",
                        d.createElement(z.a, {
                          dateAndTime:
                            t.GetVisibilityStartTimeAndDateUnixSeconds(),
                          bSingleLine: !0,
                        })
                      )
                    )),
            !O && g)
          ) {
            let e = x.a.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: K.EventStateUpcoming },
                  Object(f.f)("#EventDisplay_Upcoming")
                ))
              : Object(J.a)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: K.EventStateActive },
                  Object(f.f)("#EventDisplay_Active")
                ))
              : t.GetStartTimeAndDateUnixSeconds() > e + 3600 &&
                (m = d.createElement(
                  "span",
                  { className: K.EventStateRecent },
                  Object(f.f)("#EventDisplay_RecentlyActive")
                ));
          }
          i &&
            (v =
              ((null === (e = B.a.Get().GetApp(t.appid)) || void 0 === e
                ? void 0
                : e.GetName()) || "") +
              ": " +
              v);
          let D =
              t.BIsPartnerEvent() &&
              t.BIsVisibleEvent() &&
              _.a.GetStatsFor(t.clanSteamID, r),
            C = p.a.GetOGGClanInfo(t.appid),
            j = Boolean(
              o &&
                C &&
                C.is_ogg &&
                C.clanAccountID != t.announcementClanSteamID.GetAccountID()
            );
          return d.createElement(
            R.a,
            null,
            d.createElement(
              "div",
              {
                className: Object(y.a)({
                  [K.TileContainer]: !0,
                  [K.TileAgeAppropriate]: true,
                  [K.TileAgeNotAppropriate]: !1,
                  [K.ShowEventMetaDataSizes]: l,
                }),
              },
              d.createElement(
                "div",
                {
                  className: K.TileImageCtn,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(H.b, { className: K.TileImage, srcs: E })
              ),
              d.createElement(
                "div",
                {
                  className: K.TileTextContainer,
                  onClick: (e) => this.OnFallbackClick(e),
                },
                d.createElement(
                  "div",
                  { className: K.TileDescriptionContainer },
                  d.createElement(
                    "div",
                    { style: { display: "flex" } },
                    d.createElement("div", { className: K.TileTextAppName }, v),
                    d.createElement(
                      "div",
                      { className: K.TileTextEventType },
                      t.GetCategoryAsString(),
                      S &&
                        d.createElement(
                          "span",
                          { className: K.TileHasSale },
                          " | ",
                          Object(f.f)("#EventEditor_Status_HasSale")
                        )
                    )
                  ),
                  h && !1,
                  d.createElement(
                    "div",
                    { className: u.ContainerSpaceBetween },
                    d.createElement(
                      "div",
                      { className: K.TileTextStartsIn },
                      d.createElement(z.a, {
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
                                M.c.STORE_BASE_URL +
                                "curator/" +
                                t.clanSteamID.GetAccountID() +
                                "/admin/manage_rss/",
                            },
                            " " + Object(f.f)("#EventEditor_Status_FromRSSFeed")
                          )
                        ),
                      d.createElement(Y.b, { eventModel: t, bAllowUpdate: !1 })
                    ),
                    Boolean(D) &&
                      d.createElement(
                        "div",
                        { className: K.TileStats },
                        Object(f.n)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            D.m_stats.total_showm.toLocaleString()
                          )
                        ),
                        d.createElement("br", null),
                        Object(f.n)(
                          "#EventDashBoard_Summary_Tile_Read",
                          d.createElement(
                            "span",
                            null,
                            D.m_stats.total_read.toLocaleString()
                          )
                        )
                      )
                  ),
                  c,
                  j
                    ? d.createElement(
                        "div",
                        {
                          className: K.TileButtonContainer,
                          onClick: (e) => this.OnIgnoreFallbackClick(e),
                        },
                        d.createElement(
                          "div",
                          null,
                          Object(f.f)(
                            "#EventEditor_DataFromConnectAnnouncement"
                          )
                        ),
                        d.createElement(
                          F.c,
                          {
                            className: Object(y.a)(K.ManageButton, K.Edit),
                            eventModel: t,
                            route: F.a.k_eView,
                          },
                          Object(f.f)("#Button_ViewPage")
                        )
                      )
                    : d.createElement(
                        Q,
                        Object.assign(
                          { fnOnGotoPage: this.OnGotoPage },
                          this.props
                        )
                      ),
                  l &&
                    d.createElement(
                      W.b,
                      { requireAdmin: !0, clanSteamID: t.clanSteamID },
                      d.createElement(ee, { eventModel: t })
                    )
                )
              )
            )
          );
        }
      };
      Object(r.b)([I.b], X.prototype, "OnFallbackClick", null),
        Object(r.b)([I.b], X.prototype, "OnGotoPage", null),
        Object(r.b)([I.b], X.prototype, "OnIgnoreFallbackClick", null),
        (X = Object(r.b)([c.a], X));
      let Q = class extends d.Component {
        OnIgnoreFallbackClick(e) {
          e.stopPropagation();
        }
        OnClone(e) {
          e.stopPropagation();
          let { eventModel: t } = this.props;
          i.c
            .LoadEditorModel(t.clanSteamID, t.GID)
            .then((e) => {
              const t = Object(Z.a)(e, !0, !0, !0),
                a = t.GetLanguagesWithTokens();
              a.length > 1
                ? (a.sort((e, t) =>
                    Object(f.f)("#Language_" + Object(P.a)(e)).localeCompare(
                      Object(f.f)("#Language_" + Object(P.a)(t))
                    )
                  ),
                  Object(D.d)(
                    d.createElement(te, {
                      langs: a,
                      locData: t,
                      fnDoCloneAction: this.DoCloneAction,
                    }),
                    window
                  ))
                : this.DoCloneAction(t);
            })
            .catch((e) => {
              let t = Object(T.a)(e);
              Object(D.d)(
                d.createElement(O.g, {
                  strTitle: Object(f.f)("#EventEditor_CloneError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: Object(f.f)(
                    "#EventEditor_CloneError_Desc",
                    t.strErrorMsg
                  ),
                }),
                window,
                { strTitle: Object(f.f)("#EventEditor_CloneError") }
              );
            });
        }
        DoCloneAction(e, t) {
          const a = i.c.CreateClone();
          t &&
            t.length > 0 &&
            (e.ClearLanguagesTokens(t),
            (a.GetEventModel().jsondata.bSaleEnabled = !0),
            Object(Z.b)(a, e, f.b.GetLanguageListForRealms([M.c.EREALM])),
            (a.GetEventModel().jsondata.bSaleEnabled = !1)),
            this.props.fnOnGotoPage(null, "clone");
        }
        OnPublishEvent(e) {
          e.stopPropagation();
          const { eventModel: t } = this.props;
          i.c
            .LoadEditorModel(t.clanSteamID, t.GID)
            .then(() => {
              Object(D.d)(
                d.createElement(N.a, {
                  editModel: i.c.GetEditModel(),
                  OnPublishSuccess: this.OnPublishSuccess,
                }),
                Object(q.o)(e)
              );
            })
            .catch((e) => {
              let t = Object(T.a)(e);
              Object(D.d)(
                d.createElement(O.g, {
                  strTitle: Object(f.f)("#EventEditor_PublishingError"),
                  bAlertDialog: !0,
                  bDestructiveWarning: !0,
                  strDescription: Object(f.f)(
                    "#EventEditor_PublishingError_Desc",
                    t.strErrorMsg
                  ),
                }),
                window,
                { strTitle: Object(f.f)("#EventEditor_PublishingError") }
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
            Object(D.d)(
              d.createElement(V.a, {
                eventModel: this.props.eventModel,
                partnerEventStore: i.c,
              }),
              Object(q.o)(e)
            );
        }
        render() {
          const { eventModel: e, appid_or_vanity_str: t } = this.props;
          let a = e.bOldAnnouncement,
            n = e.visibility_state != b.j.k_EEventStateVisible,
            i = e.visibility_state != b.j.k_EEventStateUnpublished;
          return d.createElement(
            "div",
            {
              className: K.TileButtonContainer,
              onClick: (e) => this.OnIgnoreFallbackClick(e),
            },
            !a &&
              d.createElement(
                F.c,
                {
                  className: Object(y.a)(K.ManageButton, K.Edit),
                  eventModel: e,
                  route: F.a.k_eCommunityEdit,
                  onClick: this.StopPropagation,
                },
                Object(f.f)("#Button_Edit")
              ),
            a &&
              d.createElement(
                F.c,
                {
                  className: Object(y.a)(K.ManageButton, K.Edit),
                  "data-tooltip-text": Object(f.f)(
                    "#EventEditor_Button_MigrateAndEdit_Announcement_ttip"
                  ),
                  eventModel: e,
                  route: F.a.k_eCommunityMigrate,
                  onClick: this.StopPropagation,
                },
                Object(f.f)("#EventEditor_Button_MigrateAndEdit")
              ),
            n &&
              d.createElement(
                F.c,
                {
                  className: Object(y.a)(K.ManageButton, K.View),
                  "data-tooltip-text": Object(f.f)(
                    "#EventEditor_Button_PreviewButton_ttip"
                  ),
                  eventModel: e,
                  route: F.a.k_eCommunityPreview,
                  onClick: this.StopPropagation,
                },
                Object(f.f)("#EventDisplay_Preview")
              ),
            !n &&
              d.createElement(
                F.c,
                {
                  className: Object(y.a)(K.ManageButton, K.View),
                  eventModel: e,
                  route: F.a.k_eView,
                  onClick: this.StopPropagation,
                },
                Object(f.f)("#EventDisplay_View")
              ),
            !i &&
              !a &&
              d.createElement(
                "div",
                {
                  className: Object(y.a)(K.ManageButton, K.Publish),
                  onClick: this.OnPublishEvent,
                },
                Object(f.f)("#EventDisplay_Publish")
              ),
            d.createElement("div", { className: K.Spacer }, " "),
            !a &&
              d.createElement(
                "div",
                {
                  className: Object(y.a)(K.ManageButton, K.Clone),
                  onClick: this.OnClone,
                },
                Object(f.f)("#Button_Clone")
              ),
            d.createElement(
              "div",
              {
                className: Object(y.a)(K.ManageButton, K.Delete),
                "data-tooltip-text": Object(f.f)(
                  "#EventEditor_Button_DeleteButton_ttip"
                ),
                onClick: this.OnDeleteClickAndVerify,
              },
              Object(f.f)("#Button_Delete")
            )
          );
        }
      };
      function $(e, t) {
        if (!e || t <= 0) return [];
        const a = new Array();
        return (
          Object.keys(e).forEach((n) => {
            var i;
            const l = e[n],
              r =
                (null === (i = JSON.stringify(l)) || void 0 === i
                  ? void 0
                  : i.length) || 0;
            a.push({ key: n, size: r }),
              l &&
                "object" == typeof l &&
                r > 100 &&
                $(l, t - 1).forEach((e) => {
                  a.push({ key: n + ":" + e.key, size: e.size });
                });
          }),
          a
        );
      }
      Object(r.b)([I.b], Q.prototype, "OnIgnoreFallbackClick", null),
        Object(r.b)([I.b], Q.prototype, "OnClone", null),
        Object(r.b)([I.b], Q.prototype, "DoCloneAction", null),
        Object(r.b)([I.b], Q.prototype, "OnPublishEvent", null),
        Object(r.b)([I.b], Q.prototype, "OnPublishSuccess", null),
        Object(r.b)([I.b], Q.prototype, "StopPropagation", null),
        Object(r.b)([I.b], Q.prototype, "OnDeleteClickAndVerify", null),
        (Q = Object(r.b)([c.a], Q));
      const ee = (e) => {
        var t, a;
        const { eventModel: n } = e;
        if (!(null == n ? void 0 : n.jsondata)) return null;
        const i = $(n.jsondata, 3);
        i.sort((e, t) => t.size - e.size);
        return d.createElement(
          "div",
          { className: K.MetaDataCtn },
          d.createElement(
            "div",
            null,
            "Total Size: ",
            null ===
              (a =
                null === (t = JSON.stringify(n.jsondata)) || void 0 === t
                  ? void 0
                  : t.length) || void 0 === a
              ? void 0
              : a.toLocaleString()
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
      function te(e) {
        const { langs: t, locData: a, fnDoCloneAction: n, closeModal: i } = e,
          l = Object(P.d)(M.c.LANGUAGE),
          [r, o] = d.useState(new Set(t.filter((e) => e != l)));
        return d.createElement(
          O.e,
          {
            strTitle: Object(f.f)("#Button_Clone"),
            onOK: () => n(a, Array.from(r)),
            strDescription: Object(f.f)("#EventEditor_Clone_MultiLanguages"),
            closeModal: i,
          },
          d.createElement(
            "div",
            { className: K.CloneLangAlert },
            Object(f.f)("#EventEditor_Clone_Alert")
          ),
          d.createElement(
            "div",
            { className: K.CloneLangListCtn },
            t.map((e) =>
              d.createElement(U.g, {
                key: e,
                className: K.CloneCheckBox,
                onChange: (t) => {
                  const a = new Set(r);
                  t ? a.delete(e) : a.add(e), o(a);
                },
                label: Object(f.f)("#Language_" + Object(P.a)(e)),
                checked: !r.has(e),
              })
            )
          ),
          d.createElement(
            U.f,
            { onClick: () => o(new Set()) },
            Object(f.f)("#EventEditor_Clone_SelectAll")
          ),
          d.createElement(
            U.f,
            { onClick: () => o(new Set(t)) },
            Object(f.f)("#EventEditor_Clone_DeSelectAll")
          )
        );
      }
      var ae = a("tP3u"),
        ne = a("N038");
      const ie = (e) => {
          const { closeModal: t } = e,
            a = Object(ae.a)(M.b.CLANACCOUNTID);
          return d.createElement(
            O.e,
            {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
            },
            Boolean(null == a)
              ? d.createElement(C.a, {
                  string: Object(f.f)("#Loading"),
                  position: "center",
                  size: "medium",
                })
              : Boolean(0 == a.length)
              ? d.createElement("div", null, "No Publishing History available")
              : a.map((e) =>
                  d.createElement(le, { key: e.clan_event_gid, record: e })
                )
          );
        },
        le = (e) => {
          var t;
          const { record: a } = e;
          return d.createElement(
            "div",
            null,
            d.createElement("div", null, "Clan Event GID: ", a.clan_event_gid),
            d.createElement("div", null, "Type: ", Object(J.e)(a.event_type)),
            d.createElement(
              "div",
              null,
              "Publish Time: ",
              d.createElement(z.a, {
                dateAndTime: a.publish_time,
                bSingleLine: !0,
              })
            ),
            d.createElement(
              "div",
              null,
              d.createElement(ne.b, {
                accountID: a.publish_account_id,
                locToken: "#EventDashbard_PublishingAccount",
              })
            ),
            d.createElement(
              "div",
              null,
              "tags: ",
              null === (t = a.tags) || void 0 === t ? void 0 : t.join(", ")
            ),
            d.createElement("hr", null)
          );
        };
      var re = a("6oCP"),
        oe = a("f1ZV"),
        se = a("qmbg"),
        ce = a("CdLH"),
        de = a("dQ8J"),
        me = a.n(de);
      function Ee(e) {
        const { clanInfo: t, closeModal: a } = e,
          [n, i] = d.useState(!0),
          [l, o] = d.useState(!0),
          c = 1063339200,
          m = x.a.GetTimeNowWithOverride(),
          [E, b] = d.useState(m - ce.f.PerMonth),
          [v, p] = d.useState(m),
          [h, u] = d.useState(-1),
          S = h >= 0;
        return d.createElement(
          O.e,
          {
            strTitle: Object(f.f)("#EventDashboard_Stats_title"),
            strDescription: Object(f.f)("#EventDashboard_Stats_desc"),
            closeModal: a,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: S,
            onOK: () =>
              (function (e, t, a, n) {
                return Object(r.a)(this, void 0, void 0, function* () {
                  const i = new Array(),
                    l = s.a.CancelToken.source();
                  let r = 0;
                  n(r);
                  const o = 100;
                  let c,
                    d = 0,
                    m = new Array();
                  const E = Object(P.d)(M.c.LANGUAGE);
                  do {
                    if (
                      ((d += 1),
                      (m = yield re.b.LoadAdjacentPartnerEvents(
                        c,
                        e.clanSteamID,
                        void 0,
                        0,
                        o,
                        { rtime_oldestevent: t },
                        l
                      )),
                      (null == m ? void 0 : m.length) > 0)
                    ) {
                      (r += m.length), n(r), (c = m[m.length - 1].GID);
                      const t = m
                        .filter((e) => e.startTime <= a && e.BIsVisibleEvent())
                        .map((e) => e.GID);
                      t.length > 0 &&
                        (yield _.a.LoadStatsForEvents(e.clanSteamID, t, l),
                        (r += t.length),
                        n(r),
                        t.forEach((t) => {
                          const a = _.a.GetStatsFor(e.clanSteamID, t),
                            n = re.b.GetClanEventModel(t);
                          i.push(
                            Object.assign(
                              Object.assign(
                                { event_name: n.GetNameWithFallback(E) },
                                a.m_stats
                              ),
                              { event_gid: "'" + t }
                            )
                          );
                        }));
                    }
                  } while (m.length == o && d < 100);
                  return (
                    se.a.WriteCSVToFile(
                      i,
                      "event_stats_" +
                        e.group_name.toLocaleLowerCase().replace(/\s/g, "_") +
                        ".csv"
                    ),
                    !0
                  );
                });
              })(t, n ? c : E, l ? Number.MAX_SAFE_INTEGER : v, u).then(() =>
                a()
              ),
          },
          d.createElement(
            "div",
            { className: me.a.DialogCtn },
            d.createElement(
              "div",
              { className: "DialogLabel" },
              Object(f.f)("#EventDashboard_Stats_Oldest_Title")
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(U.g, {
                label: Object(f.f)("#EventDashboard_Stats_Oldest"),
                onChange: i,
                checked: n,
                disabled: S,
              }),
              !n &&
                d.createElement(
                  "div",
                  null,
                  Object(f.f)("#EventDashboard_Stats_Oldest_Override"),
                  d.createElement(oe.a, {
                    nEarliestTime: c,
                    nLatestTime: l ? void 0 : v,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => E,
                    fnSetTimeToUpdate: b,
                    disabled: S,
                  })
                )
            ),
            d.createElement(
              "div",
              { className: "DialogLabel" },
              Object(f.f)("#EventDashboard_Stats_Newest_Title")
            ),
            d.createElement(
              "div",
              { className: "_DialogInputContainer _DialogLayout" },
              d.createElement(U.g, {
                label: Object(f.f)("#EventDashboard_Stats_Newest"),
                onChange: o,
                checked: l,
                disabled: S,
              }),
              !l &&
                d.createElement(
                  "div",
                  null,
                  Object(f.f)("#EventDashboard_Stats_Newest_Override"),
                  d.createElement(oe.a, {
                    nEarliestTime: n ? c : E,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => v,
                    fnSetTimeToUpdate: p,
                    disabled: S,
                  })
                )
            ),
            S &&
              d.createElement(C.a, {
                position: "center",
                size: "medium",
                string: Object(f.f)("#EventDashboard_Stats_Progress", h),
              })
          )
        );
      }
      let be = class extends d.Component {
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
            (this.m_clanSteamID = new v.a(M.b.CLANSTEAMID)),
            (this.k_nMaxPerDirection = 10),
            (this.m_IntervalTimer = void 0),
            M.b.CLANACCOUNTID == b.E && (this.k_nMaxPerDirection = 2);
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
          return Object(r.a)(this, void 0, void 0, function* () {
            let e = i.c.GetClanEventGIDs(this.m_clanSteamID).filter((e) => {
              let t = i.c.GetClanEventModel(e);
              return Boolean(t && t.BIsVisibleEvent() && t.BIsPartnerEvent());
            });
            e.length > 0 &&
              _.a.LoadStatsForEvents(
                this.m_clanSteamID,
                e,
                this.m_cancelSignal
              );
          });
        }
        HandleErrorWithDialog(e) {
          let t = Object(T.a)(e);
          Object(D.d)(
            d.createElement(
              O.g,
              null,
              Object(f.f)("#Error_Description", t.errorCode, t.strErrorMsg)
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
          let a = [],
            n = i.c.GetClanEventGIDs(e);
          if ((null == n ? void 0 : n.length) > 0) {
            (n = n.slice().filter((e) => {
              const a = i.c.GetClanEventModel(e);
              return (null == a ? void 0 : a.visibility_state) === t;
            })),
              (n = n.sort((e, t) => {
                Object(j.a)(
                  e !== t,
                  `Unexpected duplicates in the list: ${e} ${t}`
                );
                const a = i.c.GetClanEventModel(e);
                return i.c.GetClanEventModel(t).startTime - a.startTime;
              }));
            for (const e of n) {
              const t = i.c.GetClanEventModel(e);
              a.push(
                d.createElement(X, {
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
          return a;
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
          return Object(r.a)(this, void 0, void 0, function* () {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMorePublicEvents,
              500
            );
          });
        }
        LoadMorePublicEvents() {
          return Object(r.a)(this, void 0, void 0, function* () {
            if ((this.ClearTimer(), !this.state.bInfiniteScrollLoading)) return;
            let e = null;
            i.c.GetAllClanEvents(this.m_clanSteamID).forEach((t) => {
              t.BIsVisibleEvent() &&
                (!e || t.startTime <= e.startTime) &&
                (e = t);
            });
            let t = !1,
              a = !1;
            try {
              let a;
              (a =
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
                (t = a.length < this.k_nMaxPerDirection);
            } catch (e) {
              console.log("EventListView: " + Object(T.a)(e).strErrorMsg),
                (a = !0);
            }
            this.setState(
              {
                bExhaustedEventList: t,
                bInfiniteScrollLoading: !1,
                bErrorOnInfiniteScrollRequest: a,
              },
              this.EventLoaded
            );
          });
        }
        UpdateShowEventMetaDataSizes(e) {
          this.setState({ bShowEventMetaDataSizes: e });
        }
        render() {
          const e = new v.a(M.b.CLANSTEAMID);
          let t = this.CreateTiles(
              this.m_clanSteamID,
              b.j.k_EEventStateUnpublished
            ),
            a = this.CreateTiles(this.m_clanSteamID, b.j.k_EEventStateStaged),
            n = this.CreateTiles(this.m_clanSteamID, b.j.k_EEventStateVisible),
            i =
              !this.state.bInitialLoadComplete ||
              this.state.bInfiniteScrollLoading;
          return d.createElement(
            "div",
            { ref: this.m_refScroll },
            d.createElement(k.e, null),
            d.createElement(
              "div",
              { className: Object(y.a)("maincontent", w.a.EventDashboardCtn) },
              d.createElement(ve, {
                appid_or_vanity_str:
                  this.props.match.params.appid_or_vanity_str,
              }),
              d.createElement(
                W.b,
                { requireAdmin: !0, clanSteamID: e },
                d.createElement(
                  "div",
                  {
                    className: Object(y.a)(
                      "maincontent",
                      w.a.EventDashboardCtn,
                      w.a.EventDashAdminToolsCtn,
                      S.a.FlexRowContainer
                    ),
                  },
                  d.createElement(U.g, {
                    label: "Show Event Metadata Size",
                    tooltip:
                      "Surfaces the size of the biggest sections in the event's metadata",
                    onChange: this.UpdateShowEventMetaDataSizes,
                    checked: this.state.bShowEventMetaDataSizes,
                  }),
                  d.createElement(
                    U.f,
                    {
                      onClick: (e) => {
                        Object(D.d)(d.createElement(ie, null), Object(q.o)(e));
                      },
                    },
                    "Show Publishing Audit History"
                  )
                )
              )
            ),
            d.createElement(
              "div",
              { className: w.a.MainLists },
              t.length > 0 &&
                d.createElement(
                  "div",
                  { className: Object(y.a)(w.a.Section, w.a.Unpublished) },
                  d.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        "maincontent",
                        "eventlist",
                        w.a.EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: w.a.DisplaySectionHeader },
                      Object(f.f)("#EventDisplay_Unpublished_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": Object(f.f)(
                            "#EventDisplay_Unpublished_SubTitle"
                          ),
                        },
                        " (?)"
                      )
                    ),
                    t.length > 0 && t
                  )
                ),
              a.length > 0 &&
                d.createElement(
                  "div",
                  { className: Object(y.a)(w.a.Section, w.a.Staged) },
                  d.createElement(
                    "div",
                    {
                      className: Object(y.a)(
                        "maincontent",
                        "eventlist",
                        w.a.EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: w.a.DisplaySectionHeader },
                      Object(f.f)("#EventDisplay_Stage_Title"),
                      " ",
                      d.createElement(
                        "span",
                        {
                          "data-tooltip-text": Object(f.f)(
                            "#EventDisplay_Stage_SubTitle"
                          ),
                        },
                        " (?)"
                      )
                    ),
                    a.length > 0 && a
                  )
                ),
              d.createElement(
                "div",
                {
                  className: Object(y.a)(
                    w.a.Section,
                    w.a.DisplaySectionHeaderContainer,
                    w.a.Visible
                  ),
                },
                d.createElement(
                  "div",
                  {
                    className: Object(y.a)(
                      "maincontent",
                      "eventlist",
                      w.a.EventDashboardCtn
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: w.a.DisplaySectionHeader },
                    Object(f.f)("#EventDisplay_Visible_Title")
                  ),
                  d.createElement(
                    "div",
                    { className: w.a.DisplaySectionSubHeader },
                    Object(f.f)("#EventDisplay_Visible_Title_WithRange")
                  ),
                  n && n,
                  !i &&
                    !n &&
                    d.createElement(
                      "div",
                      null,
                      Object(f.f)("#EventDisplay_NoPublic")
                    ),
                  i &&
                    d.createElement(C.a, {
                      position: "center",
                      string: Object(f.f)("#Loading"),
                    }),
                  this.state.bExhaustedEventList &&
                    d.createElement(
                      "div",
                      null,
                      Object(f.f)("#EventDisplay_AllPublicShown")
                    ),
                  this.state.bErrorOnInfiniteScrollRequest &&
                    d.createElement(
                      "div",
                      null,
                      Object(f.f)("#EventDisplay_HitErrorInfiniteScroll")
                    )
                )
              )
            )
          );
        }
      };
      Object(r.b)([I.b], be.prototype, "OnScroll", null),
        Object(r.b)([I.b], be.prototype, "LoadMorePublicEventWithDelay", null),
        Object(r.b)([I.b], be.prototype, "LoadMorePublicEvents", null),
        Object(r.b)([I.b], be.prototype, "UpdateShowEventMetaDataSizes", null),
        (be = Object(r.b)([c.a], be));
      const ve = Object(c.a)((e) => {
          const t = new v.a(M.b.CLANSTEAMID),
            a = p.a.GetClanInfoByClanAccountID(t.GetAccountID()),
            { appid_or_vanity_str: l } = e;
          let r = _.a.GetTotalStats(t);
          return d.createElement(
            "div",
            { className: S.a.EventDashboardHeader },
            d.createElement(h.c, { identifier: l, partnerEventStore: i.c }),
            d.createElement(
              "div",
              { className: S.a.EventDashboardTitles },
              d.createElement(
                "div",
                { className: S.a.maintitle },
                Object(f.f)("#EventDisplay_Events"),
                d.createElement(
                  "div",
                  { className: S.a.subtitle },
                  Object(f.f)("#EventDisplay_Edit_Desc")
                )
              ),
              d.createElement(
                "div",
                { className: S.a.EventDashboardActions },
                d.createElement(
                  E.b,
                  {
                    className: Object(y.a)(S.a.Button, S.a.Primary),
                    to: n.a.Create(l),
                    onClick: () => i.c.ResetModel(),
                  },
                  Object(f.f)("#EventDisplay_CreateNewEvent")
                ),
                d.createElement(
                  U.f,
                  {
                    onClick: (e) =>
                      Object(D.d)(
                        d.createElement(Ee, { clanInfo: a }),
                        Object(q.o)(e)
                      ),
                  },
                  Object(f.f)("#EventDashboard_Stats_export")
                )
              )
            ),
            d.createElement(
              "div",
              { className: S.a.EventDashboardStatsCtn },
              d.createElement(g.a, {
                summary: r.m_stats,
                bIsAllowedInLibrary: null == a ? void 0 : a.is_ogg,
                bIncludeDescription: !0,
              })
            )
          );
        }),
        pe = Object(A.a)(be);
      var _e = a("CY4d"),
        he = a("NCIP"),
        ue = a("EGVG"),
        Se = (a("M1X1"), a("Y9L4"), a("WBba")),
        ge = a("qD+2"),
        Oe = a("9w6b"),
        De = a("hKFG");
      a("xnZ7"), a("idvb"), a("mRR+");
      function Ce(e) {
        const [t, a] = m.a.useState(!0);
        return (
          m.a.useEffect(() => {
            ge.a.Init(new Se.a(M.c.WEBAPI_BASE_URL)),
              re.b.Init(),
              i.c.Init(),
              Promise.all([Oe.a.InitGlobal(), Object(De.a)(null)]).then(() =>
                a(!1)
              );
          }, []),
          t
            ? m.a.createElement(C.a, {
                position: "center",
                size: "medium",
                string: Object(f.f)("#Loading"),
              })
            : m.a.createElement(
                F.d.Provider,
                { value: { bCanUseLink: !0 } },
                m.a.createElement(k.a, null),
                m.a.createElement(
                  G.e,
                  null,
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.Home(":appid_or_vanity_str"),
                    component: pe,
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.List(":appid_or_vanity_str"),
                    component: pe,
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.Create(":appid_or_vanity_str"),
                    component: l.b,
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.Category(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        l.b,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.EditRedirectToCategory(":appid_or_vanity_str"),
                    render: (e) =>
                      m.a.createElement(he.c, Object.assign({}, e)),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        he.a,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.Publish(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        he.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          bInitiatePublishDialog: !0,
                        })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.PreviewSale(
                      ":appid_or_vanity_str",
                      ":gid(\\d+)?"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        _e.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "previewsale",
                        })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.Preview(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      m.a.createElement(
                        _e.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "preview",
                        })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.View(":appid_or_vanity_str", ":gid(\\d+)"),
                    render: (e) =>
                      m.a.createElement(
                        _e.a,
                        Object.assign({}, e, {
                          key: e.match.params.gid,
                          mode: "view",
                        })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.Migrate(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        ue.d,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.MigrateCategory(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        ue.b,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                        })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.ViewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        ue.c,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !1,
                        })
                      ),
                  }),
                  m.a.createElement(G.c, {
                    exact: !0,
                    path: n.a.PreviewOldAnnouncement(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      m.a.createElement(
                        ue.c,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        })
                      ),
                  }),
                  m.a.createElement(G.c, { component: je })
                )
              )
        );
      }
      function je(e) {
        return "dev" !== M.c.WEB_UNIVERSE
          ? m.a.createElement(G.b, { push: !0, to: "/" })
          : m.a.createElement("div", null, "Unknown route");
      }
    },
    dQ8J: function (e, t, a) {
      e.exports = { DialogCtn: "partnereventstatsexport_DialogCtn_2LwQU" };
    },
  },
]);

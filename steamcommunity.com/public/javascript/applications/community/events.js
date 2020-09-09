/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "0XOM": function(e, t, n) {
      e.exports = {
        TileContainer: "partnereventtile_TileContainer_1eeyC",
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
        CloneLangCtn: "partnereventtile_CloneLangCtn_2EoxS",
        CloneCheckBox: "partnereventtile_CloneCheckBox_28WRJ"
      };
    },
    EOKZ: function(e, t, n) {
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
        MainLists: "partnereventdashboard_MainLists_2Yhqn",
        ManageButton: "partnereventdashboard_ManageButton_230VZ",
        Edit: "partnereventdashboard_Edit_pvLmX",
        Delete: "partnereventdashboard_Delete_9SG7g",
        Clone: "partnereventdashboard_Clone_21_l8",
        View: "partnereventdashboard_View_3xhNU",
        Publish: "partnereventdashboard_Publish_2ewSq",
        Section: "partnereventdashboard_Section_16BNV",
        Unpublished: "partnereventdashboard_Unpublished_2MUzv"
      };
    },
    "IY+y": function(e, t, n) {
      "use strict";
      n.r(t);
      function a(e) {
        return O.createElement(
          se.c,
          Object(S.a)({}, e, {
            key: e.match.params.oldAnnouncementGID,
            bClearDirty: !0,
            bPreview: !1,
            bPreventRedirect: !0
          })
        );
      }
      var S = n("mrSG"),
        r = (n("jZUi"), n("M1X1"), n("Y9L4"), n("xnZ7")),
        l = n.n(r),
        y = (n("idvb"), n("1fPh")),
        s = n("t0uJ"),
        i = n("xZdw"),
        O = n("q1tI"),
        d = n.n(O),
        o = n("TyAF"),
        D = n("TLQK"),
        f = n("6oCP"),
        g = n("lkRc"),
        c = n("bxiW"),
        p = n("kLLr"),
        u = n("EOKZ"),
        m = n.n(u),
        v = n("55Ip"),
        b = n("EA3E"),
        C = n("fpVW"),
        E = n.n(C),
        h = n("0OaU"),
        j = n("mgoM"),
        I = n("Ty5D"),
        _ = n("ka0M"),
        w = n("X3Ds"),
        M = n("XBHn"),
        T = n("Jqb/"),
        L = n("YLyR"),
        A = n("N0Ye"),
        k = n("Z7M3"),
        G = n("exH9"),
        P = n("ir+G"),
        N = n("bDQf"),
        B = n("02Wr"),
        x = n("WFIl"),
        V = n("0XOM"),
        H = n("IjL/"),
        U = n("TQGK"),
        R = n("mB/g"),
        F = n("5izx"),
        W = n("Mnbl"),
        q = n("P2lf"),
        Y = n("Mgs7"),
        Z = (n("f0Wu"),
        (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (
              (t.bRedirectUsed = !1),
              (t.state = { redirectTarget: null, bDeleting: !1 }),
              t
            );
          }
          return (
            Object(S.d)(e, n),
            (e.prototype.OnFallbackClick = function(e) {
              e.target instanceof HTMLButtonElement ||
                e.target instanceof HTMLAnchorElement ||
                this.OnGotoPage(e, "edit");
            }),
            (e.prototype.OnGotoPage = function(e, t) {
              (this.bRedirectUsed = !1),
                this.setState({ redirectTarget: t }),
                e && e.stopPropagation();
            }),
            (e.prototype.OnIgnoreFallbackClick = function(e) {
              e.stopPropagation();
            }),
            (e.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.eventModel,
                a = e.appid_or_vanity_str,
                r = e.bShowGameName,
                i = (n.AnnouncementGID, n.GID),
                o = n.bOldAnnouncement;
              if (this.state.redirectTarget && !this.bRedirectUsed)
                switch (
                  ((this.bRedirectUsed = !0), this.state.redirectTarget)
                ) {
                  case "clone":
                    return O.createElement(I.b, {
                      push: !0,
                      to: y.a.Edit(a, "")
                    });
                  case "edit":
                    return Object(R.i)(
                      this.props.eventModel,
                      R.a.k_eCommunityEdit,
                      this.props.appid_or_vanity_str
                    );
                  case "view":
                    return n.BIsVisibleEvent()
                      ? Object(R.i)(
                          this.props.eventModel,
                          R.a.k_eView,
                          this.props.appid_or_vanity_str
                        )
                      : Object(R.i)(
                          this.props.eventModel,
                          R.a.k_eCommunityPreview,
                          this.props.appid_or_vanity_str
                        );
                  default:
                    console.log(
                      "EventDisplayTile - Unexpected Case - " +
                        this.state.redirectTarget
                    );
                }
              var c = Object(j.d)(g.b.LANGUAGE),
                l = [n.GetImageURLWithFallback("capsule", c)],
                s = n.GetNameWithFallback(c),
                d = n.BHasSubTitle(c),
                p = n.visibility_state != f.b.k_EEventStateUnpublished,
                u = n.visibility_state != f.b.k_EEventStateVisible,
                m = void 0;
              u &&
                p &&
                (m =
                  n.visibilityStartTime == n.startTime
                    ? O.createElement(
                        "div",
                        { className: V.TileTextStartsIn },
                        Object(D.d)(
                          "#EventEditor_Status_WillBeVisible_EventStart"
                        )
                      )
                    : O.createElement(
                        "div",
                        { className: V.TileTextStartsIn },
                        Object(D.k)(
                          "#EventEditor_Status_WillBeVisible_At",
                          O.createElement(L.a, {
                            dateAndTime: n.GetVisibilityStartTimeAndDateUnixSeconds(),
                            bSingleLine: !0
                          })
                        )
                      ));
              var v,
                b = void 0;
              !u &&
                p &&
                ((v = F.a.GetTimeNowWithOverride()),
                n.GetStartTimeAndDateUnixSeconds() > v
                  ? (b = O.createElement(
                      "span",
                      { className: V.EventStateUpcoming },
                      Object(D.d)("#EventDisplay_Upcoming")
                    ))
                  : Object(A.a)(n.type) && n.GetEndTimeAndDateUnixSeconds() > v
                  ? (b = O.createElement(
                      "span",
                      { className: V.EventStateActive },
                      Object(D.d)("#EventDisplay_Active")
                    ))
                  : n.GetStartTimeAndDateUnixSeconds() > v + 3600 &&
                    (b = O.createElement(
                      "span",
                      { className: V.EventStateRecent },
                      Object(D.d)("#EventDisplay_RecentlyActive")
                    ))),
                r &&
                  (s =
                    P.a.GetStoreCapsuleInfo(n.appid).GetAppStoreData().title +
                    ": " +
                    s);
              var E =
                  n.BIsPartnerEvent() &&
                  n.BIsVisibleEvent() &&
                  x.a.GetStatsFor(n.clanSteamID, i),
                h = U.a.GetOGGClanInfo(n.appid),
                _ = Boolean(
                  o &&
                    h &&
                    h.is_ogg &&
                    h.clanAccountID != n.announcementClanSteamID.GetAccountID()
                );
              return O.createElement(
                H.a,
                null,
                O.createElement(
                  "div",
                  {
                    className: Object(G.a)(
                      V.TileContainer,
                      V.TileAgeAppropriate
                    )
                  },
                  O.createElement(
                    "div",
                    {
                      className: V.TileImageCtn,
                      onClick: function(e) {
                        return t.OnFallbackClick(e);
                      }
                    },
                    O.createElement(B.b, { className: V.TileImage, srcs: l })
                  ),
                  O.createElement(
                    "div",
                    {
                      className: V.TileTextContainer,
                      onClick: function(e) {
                        return t.OnFallbackClick(e);
                      }
                    },
                    O.createElement(
                      "div",
                      { className: V.TileDescriptionContainer },
                      O.createElement(
                        "div",
                        { style: { display: "flex" } },
                        O.createElement(
                          "div",
                          { className: V.TileTextAppName },
                          s
                        ),
                        O.createElement(
                          "div",
                          { className: V.TileTextEventType },
                          n.GetCategoryAsString()
                        )
                      ),
                      d && !1,
                      O.createElement(
                        "div",
                        { className: C.ContainerSpaceBetween },
                        O.createElement(
                          "div",
                          { className: V.TileTextStartsIn },
                          O.createElement(L.a, {
                            dateAndTime: n.GetStartTimeAndDateUnixSeconds(),
                            bSingleLine: !0
                          }),
                          b,
                          n.BHasTag("auto_rssfeed") &&
                            O.createElement(
                              "a",
                              {
                                href:
                                  g.b.STORE_BASE_URL +
                                  "curator/" +
                                  n.clanSteamID.GetAccountID() +
                                  "/admin/manage_rss/"
                              },
                              Object(D.d)("#EventEditor_Status_FromRSSFeed")
                            )
                        ),
                        Boolean(E) &&
                          O.createElement(
                            "div",
                            { className: V.TileStats },
                            Object(D.k)(
                              "#EventDashBoard_Summary_Tile_Impressions",
                              O.createElement(
                                "span",
                                null,
                                E.m_stats.total_showm.toLocaleString()
                              )
                            ),
                            O.createElement("br", null),
                            Object(D.k)(
                              "#EventDashBoard_Summary_Tile_Read",
                              O.createElement(
                                "span",
                                null,
                                E.m_stats.total_read.toLocaleString()
                              )
                            )
                          )
                      ),
                      m,
                      _
                        ? O.createElement(
                            "div",
                            {
                              className: V.TileButtonContainer,
                              onClick: function(e) {
                                return t.OnIgnoreFallbackClick(e);
                              }
                            },
                            O.createElement(
                              "div",
                              null,
                              Object(D.d)(
                                "#EventEditor_DataFromConnectAnnouncement"
                              )
                            ),
                            O.createElement(
                              R.c,
                              {
                                className: Object(G.a)(V.ManageButton, V.Edit),
                                eventModel: n,
                                route: R.a.k_eView,
                                openNewWindow: !0
                              },
                              Object(D.d)("#Button_ViewPage")
                            )
                          )
                        : O.createElement(
                            z,
                            Object(S.a)(
                              { fnOnGotoPage: this.OnGotoPage },
                              this.props
                            )
                          )
                    )
                  )
                )
              );
            }),
            Object(S.c)([c.a], e.prototype, "OnFallbackClick", null),
            Object(S.c)([c.a], e.prototype, "OnGotoPage", null),
            Object(S.c)([c.a], e.prototype, "OnIgnoreFallbackClick", null),
            (e = Object(S.c)([o.a], e))
          );
        })(O.Component)),
        z = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(S.d)(t, e),
            (t.prototype.OnIgnoreFallbackClick = function(e) {
              e.stopPropagation();
            }),
            (t.prototype.OnClone = function(e) {
              var i = this;
              e.stopPropagation();
              var t = this.props.eventModel;
              s.c
                .LoadEditorModel(t.clanSteamID, t.GID, !0)
                .then(function(e) {
                  var n,
                    a,
                    t = Object(W.a)(e, !0, !0, !0),
                    r = t.GetLanguagesWithTokens();
                  1 < r.length
                    ? (r.sort(function(e, t) {
                        return Object(D.d)(
                          "#Language_" + Object(j.b)(e)
                        ).localeCompare(
                          Object(D.d)("#Language_" + Object(j.b)(t))
                        );
                      }),
                      (n = new Array()),
                      (a = new Array()),
                      r.forEach(function(t) {
                        n.push(
                          O.createElement(Y.e, {
                            key: t,
                            classname: V.CloneCheckBox,
                            onChange: function(e) {
                              e ? a.splice(r.indexOf(t), 1) : a.push(t);
                            },
                            label: Object(D.d)("#Language_" + Object(j.b)(t)),
                            checked: !0
                          })
                        );
                      }),
                      Object(_.d)(
                        O.createElement(
                          T.c,
                          {
                            strTitle: Object(D.d)("#Button_Clone"),
                            onOK: function() {
                              return i.DoCloneAction(t, a);
                            },
                            strDescription: Object(D.d)(
                              "#EventEditor_Clone_MultiLanguages"
                            )
                          },
                          O.createElement(
                            "div",
                            { className: V.CloneLangCtn },
                            n
                          )
                        ),
                        window
                      ))
                    : i.DoCloneAction(t);
                })
                .catch(function(e) {
                  var t = Object(N.a)(e);
                  Object(
                    _.d
                  )(O.createElement(T.e, { strTitle: Object(D.d)("#EventEditor_CloneError"), bAlertDialog: !0, bDestructiveWarning: !0, strDescription: Object(D.d)("#EventEditor_CloneError_Desc", t.strErrorMsg) }), window, Object(D.d)("#EventEditor_CloneError"));
                });
            }),
            (t.prototype.DoCloneAction = function(e, t) {
              var n = s.c.CreateClone();
              t &&
                0 < t.length &&
                (e.ClearLanguagesTokens(t), Object(W.b)(n, e, Object(q.b)())),
                this.props.fnOnGotoPage(null, "clone");
            }),
            (t.prototype.OnPublishEvent = function(e) {
              var t = this;
              e.stopPropagation();
              var n = this.props.eventModel;
              s.c
                .LoadEditorModel(n.clanSteamID, n.GID, !0)
                .then(function() {
                  Object(
                    _.c
                  )(O.createElement(M.a, { editModel: s.c.GetEditModel(), OnPublishSuccess: t.OnPublishSuccess }), window);
                })
                .catch(function(e) {
                  var t = Object(N.a)(e);
                  Object(
                    _.d
                  )(O.createElement(T.e, { strTitle: Object(D.d)("#EventEditor_PublishingError"), bAlertDialog: !0, bDestructiveWarning: !0, strDescription: Object(D.d)("#EventEditor_PublishingError_Desc", t.strErrorMsg) }), window, Object(D.d)("#EventEditor_PublishingError"));
                });
            }),
            (t.prototype.OnPublishSuccess = function() {
              this.setState({ redirectTarget: "view" });
            }),
            (t.prototype.StopPropagation = function(e) {
              e.stopPropagation();
            }),
            (t.prototype.OnDeleteClickAndVerify = function(e) {
              e.stopPropagation(),
                Object(_.c)(
                  O.createElement(k.a, {
                    eventModel: this.props.eventModel,
                    partnerEventStore: s.c
                  }),
                  Object(w.m)(e)
                );
            }),
            (t.prototype.render = function() {
              var t = this,
                e = this.props,
                n = e.eventModel,
                a = e.appid_or_vanity_str,
                r = n.bOldAnnouncement,
                i = n.visibility_state != f.b.k_EEventStateVisible,
                o = n.visibility_state != f.b.k_EEventStateUnpublished;
              return O.createElement(
                "div",
                {
                  className: V.TileButtonContainer,
                  onClick: function(e) {
                    return t.OnIgnoreFallbackClick(e);
                  }
                },
                !r &&
                  O.createElement(
                    R.c,
                    {
                      className: Object(G.a)(V.ManageButton, V.Edit),
                      eventModel: n,
                      route: R.a.k_eCommunityEdit,
                      onClick: this.StopPropagation,
                      vanityID: a
                    },
                    Object(D.d)("#Button_Edit")
                  ),
                r &&
                  O.createElement(
                    R.c,
                    {
                      className: Object(G.a)(V.ManageButton, V.Edit),
                      "data-tooltip-text": Object(D.d)(
                        "#EventEditor_Button_MigrateAndEdit_Announcement_ttip"
                      ),
                      eventModel: n,
                      route: R.a.k_eCommunityMigrate,
                      onClick: this.StopPropagation,
                      vanityID: a
                    },
                    Object(D.d)("#EventEditor_Button_MigrateAndEdit")
                  ),
                i &&
                  O.createElement(
                    R.c,
                    {
                      className: Object(G.a)(V.ManageButton, V.View),
                      "data-tooltip-text": Object(D.d)(
                        "#EventEditor_Button_PreviewButton_ttip"
                      ),
                      eventModel: n,
                      route: R.a.k_eCommunityPreview,
                      onClick: this.StopPropagation,
                      vanityID: a
                    },
                    Object(D.d)("#EventDisplay_Preview")
                  ),
                !i &&
                  O.createElement(
                    R.c,
                    {
                      className: Object(G.a)(V.ManageButton, V.View),
                      eventModel: n,
                      route: R.a.k_eView,
                      onClick: this.StopPropagation,
                      vanityID: a
                    },
                    Object(D.d)("#EventDisplay_View")
                  ),
                !o &&
                  !r &&
                  O.createElement(
                    "div",
                    {
                      className: Object(G.a)(V.ManageButton, V.Publish),
                      onClick: this.OnPublishEvent
                    },
                    Object(D.d)("#EventDisplay_Publish")
                  ),
                O.createElement("div", { className: V.Spacer }, " "),
                !r &&
                  O.createElement(
                    "div",
                    {
                      className: Object(G.a)(V.ManageButton, V.Clone),
                      onClick: this.OnClone
                    },
                    Object(D.d)("#Button_Clone")
                  ),
                O.createElement(
                  "div",
                  {
                    className: Object(G.a)(V.ManageButton, V.Delete),
                    "data-tooltip-text": Object(D.d)(
                      "#EventEditor_Button_DeleteButton_ttip"
                    ),
                    onClick: this.OnDeleteClickAndVerify
                  },
                  Object(D.d)("#Button_Delete")
                )
              );
            }),
            Object(S.c)([c.a], t.prototype, "OnIgnoreFallbackClick", null),
            Object(S.c)([c.a], t.prototype, "OnClone", null),
            Object(S.c)([c.a], t.prototype, "DoCloneAction", null),
            Object(S.c)([c.a], t.prototype, "OnPublishEvent", null),
            Object(S.c)([c.a], t.prototype, "OnPublishSuccess", null),
            Object(S.c)([c.a], t.prototype, "StopPropagation", null),
            Object(S.c)([c.a], t.prototype, "OnDeleteClickAndVerify", null),
            (t = Object(S.c)([o.a], t))
          );
        })(O.Component),
        J = n("FRkE"),
        X = n("VZMZ"),
        K = n("vDqi"),
        Q = n.n(K),
        $ = n("KzMr"),
        ee = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !1,
                bErrorOnInfiniteScrollRequest: !1,
                nLastFetchCompletedMS: 0
              }),
              (e.m_refScroll = O.createRef()),
              (e.m_cancelSignal = Q.a.CancelToken.source()),
              (e.m_clanSteamID = new p.a(g.a.CLANSTEAMID)),
              (e.k_nMaxPerDirection = 10),
              (e.m_IntervalTimer = void 0),
              e
            );
          }
          return (
            Object(S.d)(e, t),
            (e.prototype.EnsureEventsAreLoaded = function() {
              var t = this;
              s.c
                .LoadClanEventsForPartnerDashboard(
                  this.m_clanSteamID,
                  !1,
                  void 0,
                  2147483647,
                  this.m_cancelSignal
                )
                .then(function(e) {
                  return t.EventLoaded();
                })
                .catch(this.HandleErrorWithDialog);
            }),
            (e.prototype.EventLoaded = function() {
              return Object(S.b)(this, void 0, void 0, function() {
                var t;
                return Object(S.e)(this, function(e) {
                  return (
                    0 <
                      (t = s.c
                        .GetClanEventGIDs(this.m_clanSteamID)
                        .filter(function(e) {
                          var t = s.c.GetClanEventModel(e);
                          return Boolean(
                            t && t.BIsVisibleEvent() && t.BIsPartnerEvent()
                          );
                        })).length &&
                      x.a.LoadStatsForEvents(
                        this.m_clanSteamID,
                        t,
                        this.m_cancelSignal
                      ),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.HandleErrorWithDialog = function(e) {
              var t = Object(N.a)(e);
              Object(_.d)(
                O.createElement(
                  T.e,
                  null,
                  Object(D.d)("#Error_Description", t.errorCode, t.strErrorMsg)
                ),
                window,
                "Error"
              );
            }),
            (e.prototype.componentDidMount = function() {
              this.EnsureEventsAreLoaded(),
                s.c.GetEditModel() && s.c.ResetModel(),
                window.addEventListener("scroll", this.OnScroll, !0);
            }),
            (e.prototype.componentDidUpdate = function(e) {
              this.props.match.params.appid_or_vanity_str !=
                e.match.params.appid_or_vanity_str &&
                this.EnsureEventsAreLoaded(),
                this.m_refScroll && this.m_refScroll.current && this.OnScroll();
            }),
            (e.prototype.componentWillUnmount = function() {
              window.removeEventListener("scroll", this.OnScroll),
                this.m_cancelSignal.cancel("EventListView to unload"),
                this.ClearTimer();
            }),
            (e.prototype.ClearTimer = function() {
              this.m_IntervalTimer &&
                (window.clearInterval(this.m_IntervalTimer),
                (this.m_IntervalTimer = void 0));
            }),
            (e.prototype.CreateTiles = function(e, t) {
              var n = [],
                a = s.c.GetClanEventGIDs(e);
              if (a)
                for (
                  var r = 0,
                    i = (a = (a = a.slice().filter(function(e) {
                      return null != s.c.GetClanEventModel(e);
                    })).sort(function(e, t) {
                      var n = s.c.GetClanEventModel(e),
                        a = s.c.GetClanEventModel(t);
                      return n.visibility_state == f.b.k_EEventStateVisible
                        ? a.postTime - n.postTime
                        : a.startTime - n.startTime;
                    }));
                  r < i.length;
                  r++
                ) {
                  var o = i[r],
                    c = s.c.GetClanEventModel(o);
                  c &&
                    c.visibility_state == t &&
                    n.push(
                      O.createElement(Z, {
                        key: o,
                        appid_or_vanity_str: this.props.match.params
                          .appid_or_vanity_str,
                        gid: o,
                        eventModel: c
                      })
                    );
                }
              return n;
            }),
            (e.prototype.OnScroll = function() {
              var e;
              this.m_refScroll &&
                this.m_refScroll.current &&
                ((e = this.m_refScroll.current) &&
                  (this.state.bExhaustedEventList ||
                    this.state.bErrorOnInfiniteScrollRequest ||
                    this.state.bInfiniteScrollLoading ||
                    (e.getBoundingClientRect().bottom <=
                      window.innerHeight + 50 &&
                      (this.state.nLastFetchCompletedMS + 500 < Date.now()
                        ? this.setState(
                            { bInfiniteScrollLoading: !0 },
                            this.LoadMorePublicEventWithDelay
                          )
                        : this.setState(
                            { bInfiniteScrollLoading: !0 },
                            this.LoadMorePublicEvents
                          )))));
            }),
            (e.prototype.LoadMorePublicEventWithDelay = function() {
              return Object(S.b)(this, void 0, void 0, function() {
                return Object(S.e)(this, function(e) {
                  return (
                    (this.m_IntervalTimer = window.setInterval(
                      this.LoadMorePublicEvents,
                      500
                    )),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.LoadMorePublicEvents = function() {
              return Object(S.b)(this, void 0, void 0, function() {
                var t, n, a, r, i;
                return Object(S.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      this.ClearTimer(),
                        (t = null),
                        s.c
                          .GetAllClanEvents(this.m_clanSteamID)
                          .forEach(function(e) {
                            e.BIsVisibleEvent() &&
                              (!t || e.postTime < t.postTime) &&
                              (t = e);
                          }),
                        (a = n = !1),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 6, , 7]),
                        (r = void 0),
                        t && t.bOldAnnouncement
                          ? [
                              4,
                              s.c.LoadAdjacentPartnerEventsByAnnouncement(
                                t.AnnouncementGID,
                                this.m_clanSteamID,
                                void 0,
                                0,
                                this.k_nMaxPerDirection
                              )
                            ]
                          : [3, 3]
                      );
                    case 2:
                      return (r = e.sent()), [3, 5];
                    case 3:
                      return [
                        4,
                        s.c.LoadAdjacentPartnerEvents(
                          t ? t.GID : void 0,
                          this.m_clanSteamID,
                          void 0,
                          0,
                          this.k_nMaxPerDirection
                        )
                      ];
                    case 4:
                      (r = e.sent()), (e.label = 5);
                    case 5:
                      return (n = r.length < this.k_nMaxPerDirection), [3, 7];
                    case 6:
                      return (
                        (i = e.sent()),
                        console.log(
                          "EventListView: " + Object(N.a)(i).strErrorMsg
                        ),
                        (a = !0),
                        [3, 7]
                      );
                    case 7:
                      return (
                        this.setState(
                          {
                            bExhaustedEventList: n,
                            bInfiniteScrollLoading: !1,
                            nLastFetchCompletedMS: Date.now(),
                            bErrorOnInfiniteScrollRequest: a
                          },
                          this.EventLoaded
                        ),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              var e = this.CreateTiles(
                  this.m_clanSteamID,
                  f.b.k_EEventStateUnpublished
                ),
                t = this.CreateTiles(
                  this.m_clanSteamID,
                  f.b.k_EEventStateStaged
                ),
                n = this.CreateTiles(
                  this.m_clanSteamID,
                  f.b.k_EEventStateVisible
                ),
                a = s.c.GetClanEventLoadState(this.m_clanSteamID),
                r =
                  null == a ||
                  a.m_inflight ||
                  this.state.bInfiniteScrollLoading;
              return O.createElement(
                "div",
                { ref: this.m_refScroll },
                O.createElement(b.e, null),
                O.createElement(
                  "div",
                  {
                    className: Object(G.a)("maincontent", m.a.EventDashboardCtn)
                  },
                  O.createElement(te, {
                    appid_or_vanity_str: this.props.match.params
                      .appid_or_vanity_str
                  })
                ),
                O.createElement(
                  "div",
                  { className: m.a.MainLists },
                  0 < e.length &&
                    O.createElement(
                      "div",
                      { className: Object(G.a)(m.a.Section, m.a.Unpublished) },
                      O.createElement(
                        "div",
                        {
                          className: Object(G.a)(
                            "maincontent",
                            "eventlist",
                            m.a.EventDashboardCtn
                          )
                        },
                        O.createElement(
                          "div",
                          { className: m.a.DisplaySectionHeader },
                          Object(D.d)("#EventDisplay_Unpublished_Title"),
                          " ",
                          O.createElement(
                            "span",
                            {
                              "data-tooltip-text": Object(D.d)(
                                "#EventDisplay_Unpublished_SubTitle"
                              )
                            },
                            " (?)"
                          )
                        ),
                        0 < e.length && e
                      )
                    ),
                  0 < t.length &&
                    O.createElement(
                      "div",
                      { className: Object(G.a)(m.a.Section, m.a.Staged) },
                      O.createElement(
                        "div",
                        {
                          className: Object(G.a)(
                            "maincontent",
                            "eventlist",
                            m.a.EventDashboardCtn
                          )
                        },
                        O.createElement(
                          "div",
                          { className: m.a.DisplaySectionHeader },
                          Object(D.d)("#EventDisplay_Stage_Title"),
                          " ",
                          O.createElement(
                            "span",
                            {
                              "data-tooltip-text": Object(D.d)(
                                "#EventDisplay_Stage_SubTitle"
                              )
                            },
                            " (?)"
                          )
                        ),
                        0 < t.length && t
                      )
                    ),
                  O.createElement(
                    "div",
                    {
                      className: Object(G.a)(
                        m.a.Section,
                        m.a.DisplaySectionHeaderContainer,
                        m.a.Visible
                      )
                    },
                    O.createElement(
                      "div",
                      {
                        className: Object(G.a)(
                          "maincontent",
                          "eventlist",
                          m.a.EventDashboardCtn
                        )
                      },
                      O.createElement(
                        "div",
                        { className: m.a.DisplaySectionHeader },
                        Object(D.d)("#EventDisplay_Visible_Title")
                      ),
                      O.createElement(
                        "div",
                        { className: m.a.DisplaySectionSubHeader },
                        Object(D.d)("#EventDisplay_Visible_Title_WithRange")
                      ),
                      n && n,
                      !r &&
                        !n &&
                        O.createElement(
                          "div",
                          null,
                          Object(D.d)("#EventDisplay_NoPublic")
                        ),
                      r &&
                        O.createElement(h.a, {
                          position: "center",
                          string: Object(D.d)("#Loading")
                        }),
                      this.state.bExhaustedEventList &&
                        O.createElement(
                          "div",
                          null,
                          Object(D.d)("#EventDisplay_AllPublicShown")
                        ),
                      this.state.bErrorOnInfiniteScrollRequest &&
                        O.createElement(
                          "div",
                          null,
                          Object(D.d)("#EventDisplay_HitErrorInfiniteScroll")
                        )
                    )
                  )
                )
              );
            }),
            Object(S.c)([c.a], e.prototype, "OnScroll", null),
            Object(S.c)(
              [c.a],
              e.prototype,
              "LoadMorePublicEventWithDelay",
              null
            ),
            Object(S.c)([c.a], e.prototype, "LoadMorePublicEvents", null),
            (e = Object(S.c)([o.a], e))
          );
        })(O.Component),
        te = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_clanSteamID = new p.a(g.a.CLANSTEAMID)), e;
          }
          return (
            Object(S.d)(e, t),
            (e.prototype.onCreateButtonPress = function() {
              s.c.ResetModel();
            }),
            (e.prototype.render = function() {
              var e = this.props.appid_or_vanity_str,
                t = x.a.GetTotalStats(this.m_clanSteamID);
              return O.createElement(
                "div",
                { className: E.a.EventDashboardHeader },
                O.createElement(X.b, { identifier: e, partnerEventStore: s.c }),
                O.createElement(
                  "div",
                  { className: E.a.EventDashboardTitles },
                  O.createElement(
                    "div",
                    { className: E.a.maintitle },
                    Object(D.d)("#EventDisplay_Events"),
                    O.createElement(
                      "div",
                      { className: E.a.subtitle },
                      Object(D.d)("#EventDisplay_Edit_Desc")
                    )
                  ),
                  O.createElement(
                    "div",
                    { className: E.a.EventDashboardActions },
                    O.createElement(
                      v.b,
                      {
                        className: Object(G.a)(E.a.Button, E.a.Primary),
                        to: y.a.Create(e),
                        onClick: this.onCreateButtonPress
                      },
                      Object(D.d)("#EventDisplay_CreateNewEvent")
                    )
                  )
                ),
                O.createElement(
                  "div",
                  { className: E.a.EventDashboardStatsCtn },
                  O.createElement($.a, {
                    summary: t.m_stats,
                    bIncludeDescription: !0
                  })
                )
              );
            }),
            Object(S.c)([c.a], e.prototype, "onCreateButtonPress", null),
            (e = Object(S.c)([o.a], e))
          );
        })(O.Component),
        ne = Object(J.a)(ee),
        ae = n("YNty"),
        re = n("buwe"),
        ie = n("YWVM"),
        oe = n("SdTr"),
        ce = n("UWWC"),
        le = n("6AJf"),
        se = n("EGVG"),
        de = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.m_clanSteamID = new p.a(g.a.CLANSTEAMID)), e;
          }
          return (
            Object(S.d)(e, t),
            (e.prototype.componentDidMount = function() {
              s.c.GetEditModel() &&
                "view" === this.props.mode &&
                s.c.GetEditModel().ClearDirty();
            }),
            (e.prototype.componentDidUpdate = function(e) {
              s.c.GetEditModel() &&
                "view" === this.props.mode &&
                s.c.GetEditModel().ClearDirty();
            }),
            (e.prototype.render = function() {
              var e = this.props.mode;
              if ("view" !== e)
                return O.createElement(re.a, {
                  editModel: s.c.GetEditModel(),
                  appid_or_vanity_str: this.props.match.params
                    .appid_or_vanity_str,
                  gid: this.props.match.params.gid,
                  bDisplaySale: "previewsale" === e
                });
              var t = s.c.GetEditModel().GetEventModel(),
                n = Object(j.d)(g.b.LANGUAGE);
              return t.BHasSaleEnabled()
                ? O.createElement(
                    H.a,
                    null,
                    O.createElement(le.c, {
                      eventModel: t,
                      bIsPreview: !0,
                      language: n
                    })
                  )
                : O.createElement(
                    O.Fragment,
                    null,
                    O.createElement(ae.a, {
                      event: t,
                      lang: n,
                      partnerEventStore: s.c,
                      emoticonStore: ce.b,
                      adminPanel: O.createElement(ie.a, {
                        eventModel: t,
                        partnerEventStore: s.c
                      }),
                      otherEventRow: O.createElement(oe.a, {
                        appid: t.appid,
                        trackingLocation: 6,
                        eventModel: t,
                        partnerEventStore: s.c,
                        bViewAllShowInfiniteScroll: !t.BIsOGGEvent()
                      })
                    })
                  );
            }),
            (e = Object(S.c)([o.a], e))
          );
        })(O.Component),
        pe = Object(J.a)(de),
        ue = n("NCIP"),
        me = n("WBba"),
        ve = n("qD+2"),
        be = n("9w6b"),
        Ee = n("r64O"),
        he = (n("mRR+"), n("r3N9")),
        _e = n("LrH2"),
        Se = n.n(_e),
        ye = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
              (e.state = {
                bShowModal: !1,
                bLoadedLandingState: e.props.bPreventDismiss
              }),
              e
            );
          }
          return (
            Object(S.d)(e, t),
            (e.prototype.componentDidMount = function() {
              var n = this;
              this.props.bPreventDismiss
                ? this.LoadAppAndFirstEvent()
                : (window.fnPartnerEvent_ShowInfiniteScroll = function(e, t) {
                    n.setState({
                      bShowModal: !0,
                      appid: e,
                      announcementGID: t
                    });
                  });
            }),
            (e.prototype.LoadAppAndFirstEvent = function() {
              return Object(S.b)(this, void 0, void 0, function() {
                var t, n, a, r;
                return Object(S.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Object(g.e)(
                          "eventinfinitescrolllanding",
                          "application_config"
                        )),
                        (n = t && "string" == typeof t ? t : void 0),
                        [
                          4,
                          U.a.LoadOGGClanInfoForIdentifier(
                            this.props.match.params.appid_or_vanity_str
                          )
                        ]
                      );
                    case 1:
                      return (
                        (a = e.sent()),
                        [
                          4,
                          f.d.LoadAdjacentPartnerEventsByAnnouncement(
                            n,
                            a.clanSteamID,
                            a.appid,
                            3,
                            3
                          )
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()) && 0 < r.length
                          ? this.setState({
                              bLoadedLandingState: !1,
                              bShowModal: !0,
                              appid: a.appid,
                              clanSteamID: a.clanSteamID,
                              announcementGID: r[0].AnnouncementGID
                            })
                          : this.setState({ bLoadedLandingState: !1 }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.HideModal = function() {
              this.props.bPreventDismiss || this.setState({ bShowModal: !1 });
            }),
            (e.prototype.render = function() {
              var e = this.props.bPreventDismiss;
              return this.state.bShowModal
                ? O.createElement(he.a, {
                    appid: this.state.appid,
                    announcementGID: this.state.announcementGID,
                    clanSteamID: this.state.clanSteamID,
                    closeModal: this.HideModal,
                    classname: Se.a.StoreHeaderAdjust,
                    partnerEventStore: f.d,
                    trackingLocation: this.props.trackingLocation,
                    showAppHeader: !0,
                    bPrimaryPageFeature: e
                  })
                : this.state.bLoadedLandingState
                ? O.createElement(h.a, { string: Object(D.d)("#Loading") })
                : O.createElement("div", null);
            }),
            Object(S.c)([c.a], e.prototype, "HideModal", null),
            (e = Object(S.c)([o.a], e))
          );
        })(O.Component),
        Oe = n("r+ba"),
        De = n("apHd"),
        fe = (function(a) {
          function e(e) {
            var n = a.call(this, e) || this;
            n.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: []
            };
            var t = Object(De.a)("EventWebRowEmbed");
            return (
              n.ValidateStoreDefault(t) &&
                ((n.state.bPreLoaded = t.bPreLoaded),
                (n.state.announcementGIDList = t.announcementGIDList),
                (n.state.events = []),
                n.state.announcementGIDList.forEach(function(e) {
                  var t = f.d.GetClanEventFromAnnouncementGID(e);
                  t && n.state.events.push(t);
                })),
              n
            );
          }
          return (
            Object(S.d)(e, a),
            (e.prototype.componentDidMount = function() {
              return Object(S.b)(this, void 0, void 0, function() {
                var t,
                  n,
                  a,
                  r,
                  i,
                  o,
                  c,
                  l = this;
                return Object(S.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.props),
                        (n = t.appid),
                        (a = t.event_customization),
                        (r = t.partnerEventStore),
                        (i = t.trackingLocation),
                        this.state.bPreLoaded
                          ? [3, 2]
                          : [
                              4,
                              r.LoadAdjacentPartnerEvents(
                                null,
                                null,
                                n,
                                0,
                                2,
                                a
                              )
                            ]
                      );
                    case 1:
                      (o = e.sent()),
                        this.setState({ events: o }),
                        i &&
                          o &&
                          0 < o.length &&
                          ((c = be.a.Get().GetTracker()),
                          this.state.events
                            .filter(function(e) {
                              return e.BIsPartnerEvent();
                            })
                            .forEach(function(e) {
                              return c.MarkEventShown(
                                e.GID,
                                e.clanSteamID.GetAccountID(),
                                i
                              );
                            }),
                          c.Flush()),
                        (e.label = 2);
                    case 2:
                      return (
                        (window.fnPartnerEvent_ShowInfiniteScroll = function(
                          e,
                          t
                        ) {
                          console.log("appid: " + e + " gid: " + t),
                            l.setState({
                              bShowModal: !0,
                              announcementGID: t,
                              modalInitialEvent: void 0
                            });
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.ValidateStoreDefault = function(e) {
              return (
                !(!e || "object" != typeof e) &&
                (void 0 !== e.bPreLoaded &&
                  "boolean" == typeof e.bPreLoaded &&
                  Array.isArray(e.announcementGIDList))
              );
            }),
            (e.prototype.ShowModal = function(e) {
              var t = this.props.trackingLocation;
              this.setState({
                bShowModal: !0,
                modalInitialEvent: e,
                announcementGID: void 0
              });
              var n = be.a.Get().GetTracker();
              e.BIsPartnerEvent() &&
                n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
                n.Flush();
            }),
            (e.prototype.CloseModal = function() {
              this.setState({ bShowModal: !1, modalInitialEvent: null });
            }),
            (e.prototype.render = function() {
              var n = this,
                a = this.state.events;
              if (!a)
                return d.a.createElement(
                  "div",
                  { className: l.a.FlexCenter },
                  d.a.createElement(h.a, { size: "medium", position: "center" })
                );
              if (a && 0 === a.length) return null;
              var e = window.screen.width <= 500 ? 1 : 2,
                t = this.props,
                r = t.partnerEventStore,
                i = t.strClassName,
                o = t.appid,
                c = t.trackingLocation;
              return d.a.createElement(
                "div",
                { className: i },
                this.state.bShowModal &&
                  d.a.createElement(he.a, {
                    classname: Oe.StoreHeaderAdjust,
                    appid: o,
                    trackingLocation: c,
                    announcementGID: this.state.announcementGID
                      ? this.state.announcementGID
                      : this.state.modalInitialEvent.AnnouncementGID,
                    partnerEventStore: r,
                    eventModel: this.state.modalInitialEvent,
                    closeModal: this.CloseModal
                  }),
                d.a.createElement(
                  "h2",
                  null,
                  Object(D.d)("#EventBrowse_RecentEvents")
                ),
                d.a.createElement(
                  "div",
                  { className: Oe.SectionButtonCtn },
                  this.props.bViewAllShowInfiniteScroll
                    ? d.a.createElement(
                        "div",
                        {
                          className: Oe.SectionButton,
                          onClick: function() {
                            return n.ShowModal(a[0]);
                          }
                        },
                        Object(D.d)("#EventBrowse_MoreEventsBtn")
                      )
                    : d.a.createElement(
                        R.c,
                        {
                          eventModel: a[0],
                          route: R.a.k_eViewWebSiteHub,
                          forceAnchor: !0,
                          className: Oe.SectionButton
                        },
                        Object(D.d)("#EventBrowse_MoreEventsBtn")
                      )
                ),
                d.a.createElement(
                  "div",
                  { className: Oe.EventsSummariesCtn },
                  a.slice(0, e).map(function(t) {
                    var e =
                      1 === a.length && 500 < window.screen.width ? oe.c : oe.b;
                    return d.a.createElement(e, {
                      key: t.GID,
                      event: t,
                      onClick: function(e) {
                        n.ShowModal(t), e.stopPropagation(), e.preventDefault();
                      }
                    });
                  })
                )
              );
            }),
            Object(S.c)([c.a], e.prototype, "ShowModal", null),
            Object(S.c)([c.a], e.prototype, "CloseModal", null),
            e
          );
        })(d.a.Component),
        ge = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(S.d)(t, e),
            (t.prototype.render = function() {
              var e = this.props.appid;
              return d.a.createElement(
                "div",
                {
                  className:
                    "detailBox altFooter greenlight_home_box section announcements_row"
                },
                d.a.createElement(fe, {
                  appid: e,
                  partnerEventStore: s.c,
                  event_customization: { require_tags: ["workshop"] },
                  strClassName: Oe.Container,
                  trackingLocation: 6,
                  bViewAllShowInfiniteScroll: !0
                })
              );
            }),
            t
          );
        })(d.a.Component),
        Ce = (function(t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { bIsLoading: !0 }), e;
          }
          return (
            Object(S.d)(e, t),
            (e.prototype.componentDidMount = function() {
              return Object(S.b)(this, void 0, void 0, function() {
                return Object(S.e)(this, function(e) {
                  switch (e.label) {
                    case 0:
                      return (
                        ve.a.Init(new me.a(g.b.WEBAPI_BASE_URL)),
                        f.d.Init(),
                        s.c.Init(),
                        [4, Promise.all([be.a.InitGlobal()])]
                      );
                    case 1:
                      return e.sent(), this.setState({ bIsLoading: !1 }), [2];
                  }
                });
              });
            }),
            (e.prototype.render = function() {
              return (
                Object(Ee.a)(
                  null == window.Prototype,
                  "Should not include prototypejs."
                ),
                this.state.bIsLoading
                  ? null
                  : d.a.createElement(
                      d.a.Fragment,
                      null,
                      d.a.createElement(b.a, null),
                      d.a.createElement(
                        I.e,
                        null,
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Home(":appid_or_vanity_str"),
                          component: ne
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.List(":appid_or_vanity_str"),
                          component: ne
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Create(":appid_or_vanity_str"),
                          component: i.b
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Category(
                            ":appid_or_vanity_str",
                            ":gid(\\d+)?"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              i.b,
                              Object(S.a)({}, e, { key: e.match.params.gid })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.EditRedirectToCategory(
                            ":appid_or_vanity_str"
                          ),
                          render: function(e) {
                            return d.a.createElement(ue.c, Object(S.a)({}, e));
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                          render: function(e) {
                            return d.a.createElement(
                              ue.a,
                              Object(S.a)({}, e, { key: e.match.params.gid })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Publish(
                            ":appid_or_vanity_str",
                            ":gid(\\d+)?"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              ue.a,
                              Object(S.a)({}, e, {
                                key: e.match.params.gid,
                                bInitiatePublishDialog: !0
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.PreviewSale(
                            ":appid_or_vanity_str",
                            ":gid(\\d+)?"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              pe,
                              Object(S.a)({}, e, {
                                key: e.match.params.gid,
                                mode: "previewsale"
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Preview(
                            ":appid_or_vanity_str",
                            ":gid(\\d+)?"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              pe,
                              Object(S.a)({}, e, {
                                key: e.match.params.gid,
                                mode: "preview"
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.View(":appid_or_vanity_str", ":gid(\\d+)"),
                          render: function(e) {
                            return d.a.createElement(
                              pe,
                              Object(S.a)({}, e, {
                                key: e.match.params.gid,
                                mode: "view"
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.ViewEventDetails(
                            ":appid_or_vanity_str",
                            ":oldAnnouncementGID(\\d+)"
                          ),
                          render: function(e) {
                            return d.a.createElement(a, Object(S.a)({}, e));
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Listing(":appid_or_vanity_str"),
                          render: function(e) {
                            return d.a.createElement(
                              ye,
                              Object(S.a)(
                                {
                                  key:
                                    "InfScroll_NoDismissApp_" +
                                    e.match.params.appid
                                },
                                e,
                                { bPreventDismiss: !0, trackingLocation: 6 }
                              )
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.Migrate(
                            ":appid_or_vanity_str",
                            ":oldAnnouncementGID(\\d+)"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              se.d,
                              Object(S.a)({}, e, {
                                key: e.match.params.oldAnnouncementGID
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.MigrateCategory(
                            ":appid_or_vanity_str",
                            ":oldAnnouncementGID(\\d+)"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              se.b,
                              Object(S.a)({}, e, {
                                key: e.match.params.oldAnnouncementGID
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.ViewOldAnnouncement(
                            ":appid_or_vanity_str",
                            ":oldAnnouncementGID(\\d+)"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              se.c,
                              Object(S.a)({}, e, {
                                key: e.match.params.oldAnnouncementGID,
                                bClearDirty: !0,
                                bPreview: !1
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.PreviewOldAnnouncement(
                            ":appid_or_vanity_str",
                            ":oldAnnouncementGID(\\d+)"
                          ),
                          render: function(e) {
                            return d.a.createElement(
                              se.c,
                              Object(S.a)({}, e, {
                                key: e.match.params.oldAnnouncementGID,
                                bClearDirty: !0,
                                bPreview: !0
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          exact: !0,
                          path: y.a.WorkshopHub(":appid(\\d+)"),
                          render: function(e) {
                            return d.a.createElement(
                              ge,
                              Object(S.a)({}, e, {
                                appid: +e.match.params.appid,
                                key: "Workshop" + e.match.params.appid
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, {
                          path: y.a.AppHub(":appid"),
                          render: function(e) {
                            return d.a.createElement(
                              ye,
                              Object(S.a)({}, e, {
                                key: "InfScroll_App_" + e.match.params.appid,
                                trackingLocation: 6
                              })
                            );
                          }
                        }),
                        d.a.createElement(I.c, { component: je })
                      )
                    )
              );
            }),
            e
          );
        })(d.a.Component);
      t.default = Ce;
      function je(e) {
        return "dev" !== g.b.WEB_UNIVERSE
          ? d.a.createElement(I.b, { push: !0, to: g.b.COMMUNITY_BASE_URL })
          : d.a.createElement("div", null, "Unknown route");
      }
    },
    LrH2: function(e, t, n) {
      e.exports = {
        StoreHeaderAdjust: "partnereventinfinitescroll_StoreHeaderAdjust_2bdcZ",
        SectionButton: "partnereventinfinitescroll_SectionButton_3zeLN"
      };
    },
    M1X1: function(e, t, n) {},
    Y9L4: function(e, t, n) {},
    jZUi: function(e, t, n) {},
    "r+ba": function(e, t, n) {
      e.exports = {
        Container: "partnereventwebrowembed_Container_2Jd3M",
        StoreHeaderAdjust: "partnereventwebrowembed_StoreHeaderAdjust_3YyCp",
        SectionButtonCtn: "partnereventwebrowembed_SectionButtonCtn_1HP0y",
        SectionButton: "partnereventwebrowembed_SectionButton_3n8sw",
        EventsSummariesCtn: "partnereventwebrowembed_EventsSummariesCtn_1snIw"
      };
    }
  }
]);

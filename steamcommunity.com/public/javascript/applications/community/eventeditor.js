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
    54798: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => h });
      var a = n(70655),
        i = n(9669),
        r = n.n(i),
        l = n(22188),
        o = n(13271),
        s = n(67294),
        c = (n(92398), n(82946), n(81130)),
        d = n(99533),
        m = n(64839),
        u = n(90666);
      class v {
        BIsValid() {
          return void 0 !== this.giveaway_id && null !== this.giveaway_id;
        }
        BStarted() {
          return (
            this.BIsValid() &&
            (this.seconds_until_drawing >= 0 || this.winner_count > 0)
          );
        }
        clone() {
          const e = new v();
          return (
            (e.giveaway_id = this.giveaway_id),
            (e.seconds_until_drawing = this.seconds_until_drawing),
            (e.rtime_start = this.rtime_start),
            (e.rtime_end = this.rtime_end),
            (e.closed = this.closed),
            (e.winner_count = this.winner_count),
            e
          );
        }
      }
      (0, a.gn)([l.LO], v.prototype, "giveaway_id", void 0),
        (0, a.gn)([l.LO], v.prototype, "seconds_until_drawing", void 0),
        (0, a.gn)([l.LO], v.prototype, "rtime_start", void 0),
        (0, a.gn)([l.LO], v.prototype, "rtime_end", void 0),
        (0, a.gn)([l.LO], v.prototype, "closed", void 0),
        (0, a.gn)([l.LO], v.prototype, "winner_count", void 0);
      class _ {
        constructor() {
          (this.m_mapGiveawayIDToNextDrawInfo = new Map()),
            (this.m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map()),
            (this.m_bLoadedFromConfig = !1),
            (this.m_mapNextDrawChangeCallback = new Map());
        }
        GetKey(e, t) {
          return e + "_" + t;
        }
        GetInfoByInstance(e, t) {
          return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
            this.GetKey(e, t)
          );
        }
        GetNextDrawChangeCallback(e) {
          return (
            this.m_mapNextDrawChangeCallback.has(e) ||
              this.m_mapNextDrawChangeCallback.set(e, new d.pB()),
            this.m_mapNextDrawChangeCallback.get(e)
          );
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
        ReloadGiveaway(e, t) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (!e) return null;
            let n = u.De.STORE_BASE_URL + "prizes/nextdraw/" + e,
              a = null,
              i = { origin: self.origin };
            return (
              (a = yield r().get(n, { params: i })),
              (0, l.z)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(e) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(e, new v()),
                  this.CopyToGiveaway(
                    a.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(e)
                  ),
                  void 0 !== t)
                ) {
                  const n = this.GetKey(e, t);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(n) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      n,
                      new v()
                    ),
                    this.CopyToGiveaway(
                      a.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(n)
                    );
                }
              }),
              this.GetNextDrawChangeCallback(e).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(e)
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(e)
            );
          });
        }
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == u.De.WEB_UNIVERSE &&
                (window.g_GiveawayStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        Init() {
          if (!this.m_bLoadedFromConfig) {
            let e = (0, u.kQ)("giveawaynextdraw", "application_config");
            if (e && e.giveaway_id) {
              let t = new v();
              this.CopyToGiveaway(e, t),
                this.m_mapGiveawayIDToNextDrawInfo.set(e.giveaway_id, t);
            }
            this.m_bLoadedFromConfig = !0;
          }
        }
      }
      (0, a.gn)([l.LO], _.prototype, "m_mapGiveawayIDToNextDrawInfo", void 0),
        (0, a.gn)([l.aD], _.prototype, "CopyToGiveaway", null);
      class p {
        constructor() {
          (this.m_myInstanceNumber = 0),
            (this.m_myInstanceNumber = p.s_GlobalInstance),
            (p.s_GlobalInstance += 1);
        }
        ClearRefreshInterval() {
          this.m_intervalID &&
            (window.clearInterval(this.m_intervalID),
            (this.m_intervalID = void 0));
        }
        ClearCountDown() {
          this.m_intervalCountDownID &&
            (window.clearInterval(this.m_intervalCountDownID),
            (this.m_intervalCountDownID = void 0));
        }
        SetupRefreshDataInterval(e, t) {
          if ((this.ClearRefreshInterval(), !e.closed)) {
            let n =
              e.seconds_until_drawing <= 0 && 0 == e.winner_count ? 6e4 : 5e3;
            this.m_intervalID = window.setInterval(t, n);
          }
        }
        SetupCountDown(e, t) {
          e > 0 && (this.m_intervalCountDownID = window.setInterval(t, 1e3));
        }
      }
      function E(e, t) {
        const n = _.Get().GetInfoByInstance(e, t.m_myInstanceNumber);
        (n.seconds_until_drawing -= 1),
          0 == n.seconds_until_drawing && t.ClearCountDown();
      }
      function h(e) {
        const [t] = (0, s.useState)(new p()),
          n = (0, m.NW)();
        (0, s.useEffect)(
          () => (
            _.Get()
              .ReloadGiveaway(e, t.m_myInstanceNumber)
              .then((a) => {
                t.SetupRefreshDataInterval(a, () =>
                  (function (e, t) {
                    const n = _.Get().GetInfoByInstance(
                      e,
                      t.m_myInstanceNumber
                    );
                    n &&
                      n.BIsValid() &&
                      n.seconds_until_drawing <= 0 &&
                      !n.closed &&
                      (t.ClearCountDown(),
                      _.Get()
                        .ReloadGiveaway(e, t.m_myInstanceNumber)
                        .then((n) => {
                          t.SetupCountDown(n.seconds_until_drawing, () =>
                            E(e, t)
                          );
                        }));
                  })(e, t)
                ),
                  t.SetupCountDown(a.seconds_until_drawing, () => E(e, t)),
                  n();
              }),
            () => {
              t.ClearRefreshInterval(), t.ClearCountDown();
            }
          ),
          [t, e, n]
        );
        const a = _.Get().GetInfoByInstance(e, t.m_myInstanceNumber),
          [i, r, l] = (0, o.SZ)(() => [
            null == a ? void 0 : a.winner_count,
            null == a ? void 0 : a.closed,
            null == a ? void 0 : a.seconds_until_drawing,
          ]);
        return {
          bLoadingGiveawayInfo:
            !a || null == a.giveaway_id || !a.BStarted() || void 0 === i,
          winner_count: i,
          closed: r,
          seconds_until_drawing: l,
        };
      }
      (p.s_GlobalInstance = 0),
        (0, a.gn)([c.a], p.prototype, "ClearRefreshInterval", null),
        (0, a.gn)([c.a], p.prototype, "ClearCountDown", null),
        (0, a.gn)([c.a], p.prototype, "SetupRefreshDataInterval", null),
        (0, a.gn)([c.a], p.prototype, "SetupCountDown", null);
    },
    91799: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => D, q: () => b });
      var a = n(70655),
        i = n(67294),
        r = n(29323),
        l = n(90666),
        o = n(26149),
        s = n(3389),
        c = (n(9355), n(14627)),
        d = n(10669),
        m = n(72327),
        u = n(36067),
        v = n(67754),
        _ = n(70350),
        p = n(89694),
        E = (n(68002), n(32548)),
        h = n(53896),
        g = n(70882);
      let w = class extends i.Component {
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
                    emoticonStore: p.F,
                    adminPanel: i.createElement(v.H, {
                      eventModel: e,
                      partnerEventStore: d.wk,
                    }),
                    otherEventRow: i.createElement(_._G, {
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
      w = (0, a.gn)([r.Pi], w);
      const b = (0, u.M)(w),
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
    1196: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => mt });
      var a = n(9355),
        i = n(10669),
        r = n(13748),
        l = n(70655),
        o = n(9669),
        s = n.n(o),
        c = n(29323),
        d = n(67294),
        m = n(73727),
        u = (n(92398), n(49186)),
        v = n(3389),
        _ = n(76776),
        p = n(47593),
        E = n(28578),
        h = n(34133),
        g = n.n(h),
        w = n(58687),
        b = n(37699),
        D = n(41414),
        S = n(13596),
        y = n(77520),
        C = n(7573),
        I = n(41311),
        f = n(93976),
        x = n(64839),
        T = n(90666),
        k = n(36067),
        A = n(70216),
        G = n.n(A),
        N = n(97914),
        M = n(27775),
        L = n(26149),
        B = n(48341),
        P = (n(98650), n(28645));
      function O(e) {
        const { eventModel: t, fnOnGotoPage: n } = e;
        return t.bOldAnnouncement
          ? null
          : d.createElement(
              "div",
              {
                className: (0, C.Z)(P.ManageButton, P.Clone),
                onClick: (e) =>
                  (function (e, t, n) {
                    t.stopPropagation(),
                      i.wk
                        .LoadEditorModel(e.clanSteamID, e.GID)
                        .then((e) => {
                          const t = (0, M.HJ)(e, !0, !0, !0),
                            a = t.GetLanguagesWithTokens();
                          a.length > 1
                            ? (a.sort((e, t) =>
                                (0, I.Xx)(
                                  "#Language_" + (0, L.j_)(e)
                                ).localeCompare(
                                  (0, I.Xx)("#Language_" + (0, L.j_)(t))
                                )
                              ),
                              (0, D.AM)(
                                d.createElement(U, {
                                  langs: a,
                                  locData: t,
                                  fnOnGotoPage: n,
                                }),
                                window
                              ))
                            : X(n, t);
                        })
                        .catch((e) => {
                          let t = (0, f.l)(e);
                          (0, D.AM)(
                            d.createElement(b.JX, {
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
            (0, M.XS)(a, t, e),
            (a.GetEventModel().jsondata.bSaleEnabled = !1);
        }
        e(null, "clone");
      }
      function U(e) {
        const { langs: t, locData: n, closeModal: a, fnOnGotoPage: i } = e,
          r = (0, L.jM)(T.De.LANGUAGE),
          [l, o] = d.useState(new Set(t.filter((e) => e != r)));
        return d.createElement(
          b.uH,
          {
            strTitle: (0, I.Xx)("#Button_Clone"),
            onOK: () => X(i, n, Array.from(l)),
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
              d.createElement(B.ji, {
                key: e,
                className: P.CloneCheckBox,
                onChange: (t) => {
                  const n = new Set(l);
                  t ? n.delete(e) : n.add(e), o(n);
                },
                label: (0, I.Xx)("#Language_" + (0, L.j_)(e)),
                checked: !l.has(e),
              })
            )
          ),
          d.createElement(
            B.zx,
            { onClick: () => o(new Set()) },
            (0, I.Xx)("#EventEditor_Clone_SelectAll")
          ),
          d.createElement(
            B.zx,
            { onClick: () => o(new Set(t)) },
            (0, I.Xx)("#EventEditor_Clone_DeSelectAll")
          )
        );
      }
      var R = n(72710),
        W = n(78587),
        V = n(5525),
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
                return d.createElement(W.l_, {
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
          let s = (0, L.jM)(T.De.LANGUAGE);
          t.BIsLanguageValidForRealms(s) || (s = t.BInRealmGlobal() ? 0 : 29);
          let c,
            m,
            v = [t.GetImageURLWithFallback("capsule", s)],
            E = t.GetNameWithFallback(s),
            g = t.BHasSubTitle(s),
            w = t.BHasSaleEnabled(),
            b = t.visibility_state != u.ac.k_EEventStateUnpublished,
            D = t.visibility_state != u.ac.k_EEventStateVisible;
          if (
            (D &&
              b &&
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
                        d.createElement(J.H6, {
                          dateAndTime:
                            t.GetVisibilityStartTimeAndDateUnixSeconds(),
                          bSingleLine: !0,
                        })
                      )
                    )),
            !D && b)
          ) {
            let e = V.JW.GetTimeNowWithOverride();
            t.GetStartTimeAndDateUnixSeconds() > e
              ? (m = d.createElement(
                  "span",
                  { className: P.EventStateUpcoming },
                  (0, I.Xx)("#EventDisplay_Upcoming")
                ))
              : (0, K.G1)(t.type) && t.GetEndTimeAndDateUnixSeconds() > e
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
            (E =
              ((null === (e = j.Z.Get().GetApp(t.appid)) || void 0 === e
                ? void 0
                : e.GetName()) || "") +
              ": " +
              E);
          let S =
              t.BIsPartnerEvent() &&
              t.BIsVisibleEvent() &&
              p.h.GetStatsFor(t.clanSteamID, l),
            y = _.sV.GetOGGClanInfo(t.appid),
            f = Boolean(
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
                d.createElement(q.J, { className: P.TileImage, srcs: v })
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
                    d.createElement("div", { className: P.TileTextAppName }, E),
                    d.createElement(
                      "div",
                      { className: P.TileTextEventType },
                      t.GetCategoryAsString(),
                      w &&
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
                                T.De.STORE_BASE_URL +
                                "curator/" +
                                t.clanSteamID.GetAccountID() +
                                "/admin/manage_rss/",
                            },
                            " " + (0, I.Xx)("#EventEditor_Status_FromRSSFeed")
                          )
                        ),
                      d.createElement(Y.bv, { eventModel: t, bAllowUpdate: !1 })
                    ),
                    Boolean(S) &&
                      d.createElement(
                        "div",
                        { className: P.TileStats },
                        (0, I.kQ)(
                          "#EventDashBoard_Summary_Tile_Impressions",
                          d.createElement(
                            "span",
                            null,
                            S.m_stats.total_showm.toLocaleString()
                          )
                        ),
                        d.createElement("br", null),
                        (0, I.kQ)(
                          "#EventDashBoard_Summary_Tile_Read",
                          d.createElement(
                            "span",
                            null,
                            S.m_stats.total_read.toLocaleString()
                          )
                        )
                      )
                  ),
                  c,
                  f
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
                          z.JW,
                          {
                            className: (0, C.Z)(P.ManageButton, P.Edit),
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
      (0, l.gn)([x.ak], $.prototype, "OnFallbackClick", null),
        (0, l.gn)([x.ak], $.prototype, "OnGotoPage", null),
        (0, l.gn)([x.ak], $.prototype, "OnIgnoreFallbackClick", null),
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
              (0, D.AM)(
                d.createElement(R.b, {
                  editModel: i.wk.GetEditModel(),
                  OnPublishSuccess: this.OnPublishSuccess,
                }),
                window
              );
            })
            .catch((e) => {
              let t = (0, f.l)(e);
              (0, D.AM)(
                d.createElement(b.JX, {
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
              className: P.TileButtonContainer,
              onClick: (e) => this.OnIgnoreFallbackClick(e),
            },
            !n &&
              d.createElement(
                z.JW,
                {
                  className: (0, C.Z)(P.ManageButton, P.Edit),
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
                  className: (0, C.Z)(P.ManageButton, P.Edit),
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
                  className: (0, C.Z)(P.ManageButton, P.View),
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
                  className: (0, C.Z)(P.ManageButton, P.View),
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
                  className: (0, C.Z)(P.ManageButton, P.Publish),
                  onClick: this.OnPublishEvent,
                },
                (0, I.Xx)("#EventDisplay_Publish")
              ),
            d.createElement("div", { className: P.Spacer }, " "),
            d.createElement(O, { eventModel: e, fnOnGotoPage: t }),
            d.createElement(
              "div",
              {
                className: (0, C.Z)(P.ManageButton, P.Delete),
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
      (0, l.gn)([x.ak], ee.prototype, "OnIgnoreFallbackClick", null),
        (0, l.gn)([x.ak], ee.prototype, "OnPublishEvent", null),
        (0, l.gn)([x.ak], ee.prototype, "OnPublishSuccess", null),
        (0, l.gn)([x.ak], ee.prototype, "StopPropagation", null),
        (0, l.gn)([x.ak], ee.prototype, "OnDeleteClickAndVerify", null),
        (ee = (0, l.gn)([c.Pi], ee));
      const ne = (e) => {
        var t, n;
        const { eventModel: a } = e;
        if (!(null == a ? void 0 : a.jsondata)) return null;
        const i = te(a.jsondata, 3);
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
      var ae = n(32556),
        ie = n(21698);
      const re = (e) => {
          const { closeModal: t } = e,
            n = (0, ae.V)(T.JA.CLANACCOUNTID);
          return d.createElement(
            b.uH,
            {
              strTitle: "Publishing Audit History",
              bAlertDialog: !0,
              onOK: t,
              onCancel: t,
              strDescription:
                "Here are the publishing audit history. Recorded starting from mid-June 2021",
            },
            Boolean(null == n)
              ? d.createElement(S.V, {
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
          m = V.JW.GetTimeNowWithOverride(),
          [u, v] = d.useState(m - de._H.PerMonth),
          [_, E] = d.useState(m),
          [h, g] = d.useState(-1),
          w = h >= 0;
        return d.createElement(
          b.uH,
          {
            strTitle: (0, I.Xx)("#EventDashboard_Stats_title"),
            strDescription: (0, I.Xx)("#EventDashboard_Stats_desc"),
            closeModal: n,
            bDisableBackgroundDismiss: !0,
            bOKDisabled: w,
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
                  const u = (0, L.jM)(T.De.LANGUAGE);
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
                        (yield p.h.LoadStatsForEvents(e.clanSteamID, t, r),
                        (l += t.length),
                        a(l),
                        t.forEach((t) => {
                          const n = p.h.GetStatsFor(e.clanSteamID, t),
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
              })(t, a ? c : u, r ? Number.MAX_SAFE_INTEGER : _, g).then(() =>
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
              d.createElement(B.ji, {
                label: (0, I.Xx)("#EventDashboard_Stats_Oldest"),
                onChange: i,
                checked: a,
                disabled: w,
              }),
              !a &&
                d.createElement(
                  "div",
                  null,
                  (0, I.Xx)("#EventDashboard_Stats_Oldest_Override"),
                  d.createElement(se.A, {
                    nEarliestTime: c,
                    nLatestTime: r ? void 0 : _,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => u,
                    fnSetTimeToUpdate: v,
                    disabled: w,
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
              d.createElement(B.ji, {
                label: (0, I.Xx)("#EventDashboard_Stats_Newest"),
                onChange: o,
                checked: r,
                disabled: w,
              }),
              !r &&
                d.createElement(
                  "div",
                  null,
                  (0, I.Xx)("#EventDashboard_Stats_Newest_Override"),
                  d.createElement(se.A, {
                    nEarliestTime: a ? c : u,
                    bShowTimeZone: !0,
                    fnGetTimeToUpdate: () => _,
                    fnSetTimeToUpdate: E,
                    disabled: w,
                  })
                )
            ),
            w &&
              d.createElement(S.V, {
                position: "center",
                size: "medium",
                string: (0, I.Xx)("#EventDashboard_Stats_Progress", h),
              })
          )
        );
      }
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
            }),
            (this.m_refScroll = d.createRef()),
            (this.m_cancelSignal = s().CancelToken.source()),
            (this.m_clanSteamID = new v.K(T.JA.CLANSTEAMID)),
            (this.k_nMaxPerDirection = 10),
            (this.m_IntervalTimer = void 0),
            T.JA.CLANACCOUNTID == u.sq && (this.k_nMaxPerDirection = 2);
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
          let t = (0, f.l)(e);
          (0, D.AM)(
            d.createElement(
              b.JX,
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
              console.log("EventListView: " + (0, f.l)(e).strErrorMsg),
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
          const e = new v.K(T.JA.CLANSTEAMID);
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
            d.createElement(N.YC, null),
            d.createElement(
              "div",
              { className: (0, C.Z)("maincontent", G().EventDashboardCtn) },
              d.createElement(pe, {
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
                      G().EventDashboardCtn,
                      G().EventDashAdminToolsCtn,
                      g().FlexRowContainer
                    ),
                  },
                  d.createElement(B.ji, {
                    label: "Show Event Metadata Size",
                    tooltip:
                      "Surfaces the size of the biggest sections in the event's metadata",
                    onChange: this.UpdateShowEventMetaDataSizes,
                    checked: this.state.bShowEventMetaDataSizes,
                  }),
                  d.createElement(
                    B.zx,
                    {
                      onClick: (e) => {
                        (0, D.AM)(d.createElement(re, null), (0, Z.RA)(e));
                      },
                    },
                    "Show Publishing Audit History"
                  )
                )
              )
            ),
            d.createElement(
              "div",
              { className: G().MainLists },
              t.length > 0 &&
                d.createElement(
                  "div",
                  { className: (0, C.Z)(G().Section, G().Unpublished) },
                  d.createElement(
                    "div",
                    {
                      className: (0, C.Z)(
                        "maincontent",
                        "eventlist",
                        G().EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: G().DisplaySectionHeader },
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
                  { className: (0, C.Z)(G().Section, G().Staged) },
                  d.createElement(
                    "div",
                    {
                      className: (0, C.Z)(
                        "maincontent",
                        "eventlist",
                        G().EventDashboardCtn
                      ),
                    },
                    d.createElement(
                      "div",
                      { className: G().DisplaySectionHeader },
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
                    G().Section,
                    G().DisplaySectionHeaderContainer,
                    G().Visible
                  ),
                },
                d.createElement(
                  "div",
                  {
                    className: (0, C.Z)(
                      "maincontent",
                      "eventlist",
                      G().EventDashboardCtn
                    ),
                  },
                  d.createElement(
                    "div",
                    { className: G().DisplaySectionHeader },
                    (0, I.Xx)("#EventDisplay_Visible_Title")
                  ),
                  d.createElement(
                    "div",
                    { className: G().DisplaySectionSubHeader },
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
                    d.createElement(S.V, {
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
      (0, l.gn)([x.ak], _e.prototype, "OnScroll", null),
        (0, l.gn)([x.ak], _e.prototype, "LoadMorePublicEventWithDelay", null),
        (0, l.gn)([x.ak], _e.prototype, "LoadMorePublicEvents", null),
        (0, l.gn)([x.ak], _e.prototype, "UpdateShowEventMetaDataSizes", null),
        (_e = (0, l.gn)([c.Pi], _e));
      const pe = (0, c.Pi)((e) => {
          const t = new v.K(T.JA.CLANSTEAMID),
            n = _.sV.GetClanInfoByClanAccountID(t.GetAccountID()),
            { appid_or_vanity_str: r } = e;
          let l = p.h.GetTotalStats(t);
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
                  B.zx,
                  {
                    onClick: (e) =>
                      (0, D.AM)(
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
              d.createElement(w.y, {
                summary: l.m_stats,
                bIsAllowedInLibrary: null == n ? void 0 : n.is_ogg,
                bIncludeDescription: !0,
              })
            )
          );
        }),
        Ee = (0, k.M)(_e);
      var he = n(91799),
        ge = n(14767),
        we = n(70882),
        be = n(65902),
        De = n(86605),
        Se = n(9915),
        ye = n(27991),
        Ce = (n(49727), n(63473));
      n(21205), n(82946);
      class Ie {
        constructor() {
          if (
            ((this.m_counts = null),
            document.getElementById("application_config"))
          ) {
            let e = (0, T.kQ)("deckcompatcount", "application_config");
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
                  T.De.STORE_BASE_URL +
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
              n = (0, f.l)(i);
            } catch (e) {
              n = (0, f.l)(e);
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
              ("dev" != T.De.WEB_UNIVERSE && "beta" != T.De.WEB_UNIVERSE) ||
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
      var fe = n(38045),
        xe = n(43521),
        Te = n(99646),
        ke = n(16104),
        Ae = n(77569),
        Ge = n(54798),
        Ne = n(53861);
      function Me(e) {
        return e < 10 ? "0" + e : e;
      }
      function Le(e) {
        const { giveawayid: t } = e,
          n = (0, Ge.J)(t),
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
              { className: Ne.countdownCtn },
              Boolean(r) &&
                d.createElement(
                  "div",
                  { className: Ne.Closed },
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
                        { className: Ne.Throbber },
                        d.createElement(S.V, { size: "small" }),
                        d.createElement(
                          "div",
                          null,
                          (0, I.Xx)("#Giveaway_RandomDraw")
                        )
                      )
                    : d.createElement(
                        "div",
                        { className: Ne.CountDownCtn },
                        d.createElement(
                          "div",
                          { className: Ne.CountDownTime },
                          Me(Math.floor(l / 60)) + ":" + Me(l % 60)
                        ),
                        d.createElement(
                          "div",
                          { className: Ne.CountDownText },
                          (0, I.Xx)("#Giveaway_CountDown2"),
                          " ",
                          (0, I.Xx)("#Giveaway_KeepWatching")
                        )
                      ),
                  Boolean(i > 0) &&
                    d.createElement(
                      "div",
                      { className: Ne.WinnerInfo },
                      d.createElement(
                        "div",
                        { className: Ne.WinnerCount },
                        i.toLocaleString()
                      ),
                      d.createElement(
                        "div",
                        { className: Ne.WinnerText },
                        (0, I.Xx)("#Giveaway_Congratulation")
                      )
                    )
                )
            );
      }
      var Be = n(68941),
        Pe = n(11108),
        Oe = n(95598),
        Xe = n(23211),
        Ue = n(53896),
        Re = n(15986),
        We = n(46713),
        Ve = n(1329),
        je = n(6843);
      function Fe(e) {
        const { eventModel: t, nEventBadgeID: n } = e,
          a = (0, Pe.oS)(n);
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
                return d.createElement(He, {
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
      function He(e) {
        const { eventModel: t, nBadgeLevel: n, nMaxLevel: a } = e,
          i = d.useMemo(() => {
            const e = t
              .GetSaleSections()
              .filter((e) => "discoveryqueue" == e.section_type);
            return (null == e ? void 0 : e.length) > 0 ? e[0] : null;
          }, [t]),
          { storePageFilter: r, eStoreDiscoveryQueueType: l } = d.useMemo(
            () => (0, Ve.N)(t, i),
            [t, i]
          ),
          o = (0, je.GD)(l, r),
          s = Math.min(n + o, a);
        return d.createElement(
          "span",
          { className: "DisplayBadgeProgress" },
          s.toLocaleString()
        );
      }
      function ze(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ce.im)(e.args, "eventid"));
        return T.L7.logged_in && n
          ? d.createElement(Fe, { nEventBadgeID: n, eventModel: t })
          : null;
      }
      function qe(e) {
        const { nDoorIndex: t, children: n } = e,
          a = (0, Te._4)(t),
          { fnOpenDoor: i } = (0, Te.Qr)(),
          [r, l] = d.useState(!1),
          [o, s] = d.useState(!1);
        return d.createElement(
          B.zx,
          {
            disabled: a,
            onClick: (e) => {
              r ||
                (T.L7.logged_in
                  ? (l(!0),
                    i(t, !0, null, !1)
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
            ? d.createElement("div", null, (0, I.Xx)("#GrantAwardError_Busy"))
            : d.createElement(
                d.Fragment,
                null,
                Boolean(r) && d.createElement(S.V, { size: "small" }),
                Boolean(a) && d.createElement(Oe.JrY, null),
                n
              )
        );
      }
      function Je(e) {
        const t = Number.parseInt((0, Ce.im)(e.args)) || 0;
        return t >= 0 && t < 32
          ? d.createElement(qe, { nDoorIndex: t }, e.children)
          : null;
      }
      const Qe = (0, W.EN)(Ue.C);
      function Ze(e) {
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
            return d.createElement(Qe, {
              event: i,
              section: i.jsondata.sale_sections[l],
              activeTab: new We.u(null, t),
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
              { className: Re.ErrorDiv },
              "Error could not find sale section ",
              a
            );
        }
        return null;
      }
      var Ke = n(34531);
      let Ye = null;
      function $e(e) {
        const { event: t } = e.context,
          n = Number.parseInt((0, Ce.im)(e.args, "appid")),
          a = Number.parseInt((0, Ce.im)(e.args, "itemdefid")),
          i = Number.parseInt((0, Ce.im)(e.args, "maxquantity")),
          r = (0, Ce.im)(e.args, "calltoaction");
        return (0, xe.$4)(n, a)
          ? d.createElement(ke.t, {
              language: e.language,
              clanAccountID: t.clanSteamID.GetAccountID(),
              itemDefSetting: { nAppID: n, nItemDefID: a, max_quantity: i },
              strCallToAction: r,
            })
          : d.createElement(S.V, {
              size: "small",
              position: "center",
              string: (0, I.Xx)("#Loading"),
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
        if (!t) return d.createElement(S.V, { size: "small" });
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
      function tt(e) {
        var t, n, a, i;
        const r = (0, fe.V)("library");
        if (!r) return d.createElement(S.V, { size: "small" });
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
      function nt(e) {
        const t = Number.parseInt((0, Ce.im)(e.args)),
          n =
            "hide" in e.args &&
            Boolean(Number.parseInt((0, Ce.im)(e.args, "hide")));
        return t >= 0
          ? d.createElement(at, { nDoorIndex: t, bHide: n }, e.children)
          : null;
      }
      function at(e) {
        const { nDoorIndex: t, bHide: n, children: a } = e,
          i = (0, Te._4)(t);
        return null == i
          ? null
          : (i && !n) || (!i && n)
          ? d.createElement(d.Fragment, null, e.children)
          : null;
      }
      function it(e) {
        if (T.L7.logged_in) {
          const t = Number.parseInt((0, Ce.im)(e.args)),
            n = Number.parseInt((0, Ce.im)(e.args, "mod"));
          if (n > 0 && t < n && T.L7.accountid % n == t) return e.children;
        }
        return null;
      }
      function rt(e) {
        const t = (0, Ce.im)(e.args);
        return (null == t ? void 0 : t.trim().length) > 0
          ? d.createElement("div", { className: t.trim() }, e.children)
          : d.createElement(d.Fragment, null, e.children);
      }
      function lt(e) {
        return d.createElement(
          "span",
          { className: Ae.LocalizeBlock },
          (0, I.yu)(
            e.children,
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null),
            d.createElement("b", null)
          )
        );
      }
      function ot(e) {
        let t = (0, Ce.im)(e.args);
        return t
          ? d.createElement(Le, { giveawayid: t })
          : d.createElement(d.Fragment, null);
      }
      function st(e) {
        const t = Number.parseInt((0, Ce.im)(e.args));
        if (t) {
          const n = Number.parseInt((0, Ce.im)(e.args, "depositpackageid"));
          return d.createElement(Ke.Y, {
            reservationPackageID: t,
            depositPackageID: n,
          });
        }
        return d.createElement(d.Fragment, null);
      }
      var ct = n(81664),
        dt = (n(69491), n(55038), n(92244));
      function mt(e) {
        const [t, n] = d.useState(!0);
        return (
          d.useEffect(() => {
            De.Q8.Init(new be.J(T.De.WEBAPI_BASE_URL)),
              oe.j1.Init(),
              i.wk.Init(),
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
                    ["wishlist", { Constructor: Be.gq, autocloses: !1 }],
                    ["deckcompatcount", { Constructor: et, autocloses: !1 }],
                    [
                      "deckcompatuserlibrarycount",
                      { Constructor: tt, autocloses: !1 },
                    ],
                    ["giveawayinfo", { Constructor: ot, autocloses: !1 }],
                    ["price", { Constructor: Be.J8, autocloses: !1 }],
                    ["pricesavings", { Constructor: Be.Eu, autocloses: !1 }],
                    [
                      "eventdoorvisibility",
                      { Constructor: nt, autocloses: !1 },
                    ],
                    ["chooseaccount", { Constructor: it, autocloses: !1 }],
                    ["badgecurrentlevel", { Constructor: ze, autocloses: !1 }],
                    ["optindoorquest", { Constructor: Je, autocloses: !1 }],
                    ["classname", { Constructor: rt, autocloses: !1 }],
                    ["localize", { Constructor: lt, autocloses: !1 }],
                    ["salesection", { Constructor: Ze, autocloses: !1 }],
                    ["reservationbutton", { Constructor: st, autocloses: !1 }],
                  ])),
                Ye)
              ),
              Promise.all([Se.cb.InitGlobal(), (0, ye.nf)(null)]).then(() =>
                n(!1)
              );
          }, []),
          t
            ? d.createElement(S.V, {
                position: "center",
                size: "medium",
                string: (0, I.Xx)("#Loading"),
              })
            : d.createElement(
                z.uX.Provider,
                { value: { bCanUseLink: !0 } },
                d.createElement(N.bE, null),
                d.createElement(
                  W.rs,
                  null,
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Home(":appid_or_vanity_str"),
                    component: Ee,
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.List(":appid_or_vanity_str"),
                    component: Ee,
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
                    render: (e) => d.createElement(ge.Kz, Object.assign({}, e)),
                  }),
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Edit(":appid_or_vanity_str", ":gid(\\d+)?"),
                    render: (e) =>
                      d.createElement(
                        ge.IE,
                        Object.assign({}, e, { key: e.match.params.gid })
                      ),
                  }),
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
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
                  d.createElement(W.AW, {
                    exact: !0,
                    path: a.rQ.Migrate(
                      ":appid_or_vanity_str",
                      ":oldAnnouncementGID(\\d+)"
                    ),
                    render: (e) =>
                      d.createElement(
                        we.Lc,
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
                        we.QU,
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
                        we.R0,
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
                        we.R0,
                        Object.assign({}, e, {
                          key: e.match.params.oldAnnouncementGID,
                          bClearDirty: !0,
                          bPreview: !0,
                        })
                      ),
                  }),
                  d.createElement(W.AW, { component: dt.R })
                )
              )
        );
      }
    },
  },
]);

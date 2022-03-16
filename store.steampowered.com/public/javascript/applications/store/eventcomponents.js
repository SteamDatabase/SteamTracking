/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    A8Lc: function (e, t, n) {
      e.exports = { ErrorMsg: "eventdetailview_ErrorMsg_1ZEL9" };
    },
    E9gz: function (e, t, n) {
      e.exports = {
        AnalysisCtn: "eventmoderation_AnalysisCtn_1YGfW",
        AnalysisMissing: "eventmoderation_AnalysisMissing_rH1Dt",
        ModerationContainer: "eventmoderation_ModerationContainer_4HRKp",
        FilterContainer: "eventmoderation_FilterContainer_qY07T",
        Tile: "eventmoderation_Tile_3oU1y",
        DetailsMiddle: "eventmoderation_DetailsMiddle_VcJpZ",
        EventModerateMarkReview:
          "eventmoderation_EventModerateMarkReview_1RqKA",
        EventModerateMarkReReview:
          "eventmoderation_EventModerateMarkReReview_qd-K7",
        TileEventOtherType: "eventmoderation_TileEventOtherType_3LUrW",
        TileCapsule: "eventmoderation_TileCapsule_36tP8",
        NoCapsuleFallback: "eventmoderation_NoCapsuleFallback_16oQL",
        NoCapsule: "eventmoderation_NoCapsule_1onVF",
        TileDetails: "eventmoderation_TileDetails_2mRup",
        DetailsLeft: "eventmoderation_DetailsLeft_1O0y5",
        EventTitle: "eventmoderation_EventTitle_3ahHd",
        DetailsRight: "eventmoderation_DetailsRight_2BaxW",
        ArtHeader: "eventmoderation_ArtHeader_38IkF",
        ArtSpotlight: "eventmoderation_ArtSpotlight_2oUPY",
        ModeratedFlagCtn: "eventmoderation_ModeratedFlagCtn_2JGGc",
        TitleLink: "eventmoderation_TitleLink_1OG__",
        TileAppInfo: "eventmoderation_TileAppInfo_2IJ__",
        TileAppInfoTitle: "eventmoderation_TileAppInfoTitle_2X75q",
        TileAppInfoImage: "eventmoderation_TileAppInfoImage_1rVmL",
        TileSplit: "eventmoderation_TileSplit_aaFuC",
        TileTitle: "eventmoderation_TileTitle_yJw1i",
        TimeWidth: "eventmoderation_TimeWidth_xSOgV",
        CategoryChangeDialog: "eventmoderation_CategoryChangeDialog_1VSAj",
        Button: "eventmoderation_Button_wu9Kr",
        RightSideTitles: "eventmoderation_RightSideTitles_XDAwD",
        DateAndTime: "eventmoderation_DateAndTime_2cW9N",
        StoreHeaderAdjust: "eventmoderation_StoreHeaderAdjust_3U7ja",
        LastUpdateTime: "eventmoderation_LastUpdateTime_2x7zH",
        EventTimingBlock: "eventmoderation_EventTimingBlock_31d_R",
        TileEventType: "eventmoderation_TileEventType_1z1xt",
        ChannelInfo: "eventmoderation_ChannelInfo_H__RK",
        HasAdultContent: "eventmoderation_HasAdultContent_2PcmC",
      };
    },
    WGPV: function (e, t, n) {
      e.exports = {
        SectionContainer: "rss_moderation_SectionContainer_3P-ff",
        ModSectionTitle: "rss_moderation_ModSectionTitle_2lc8m",
        ResizeButton: "rss_moderation_ResizeButton_29RNN",
        TileContainer: "rss_moderation_TileContainer_2D4XH",
        CreatorCtn: "rss_moderation_CreatorCtn_GKust",
        TileSpread: "rss_moderation_TileSpread_1s_El",
      };
    },
    Wym2: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "EventModerationLanding", function () {
          return Dt;
        }),
        n.d(t, "EventBackfillLanding", function () {
          return kt;
        }),
        n.d(t, "EventSaleDisplay", function () {
          return wt;
        }),
        n.d(t, "EventCalendar", function () {
          return Gt;
        }),
        n.d(t, "EventDetailView", function () {
          return Lt;
        }),
        n.d(t, "Events", function () {
          return Rt;
        }),
        n.d(t, "EventSteamGameFestivalDebug", function () {
          return Bt;
        }),
        n.d(t, "RssEnabledAccountDashboard", function () {
          return Pt;
        }),
        n.d(t, "StoreSaleDisplay", function () {
          return Nt;
        });
      var a = n("q1tI"),
        o = n.n(a),
        l = n("daJ/"),
        i = n("mrSG"),
        r = n("vDqi"),
        s = n.n(r),
        c = n("2vnA"),
        d = n("TyAF"),
        m = (n("wd/R"), n("s4NR")),
        u = n.n(m),
        v = n("y2g3"),
        p = n.n(v),
        E = n("EC67"),
        h = n("Cs6D"),
        _ = n("kyHq"),
        b = n("3+zv"),
        g = n("kLLr"),
        S = n("U+Q5"),
        f = n("TQGK"),
        A = n("N0Ye");
      const C = n("f0Wu"),
        T = ["mod_reviewed", "auto_migrated"];
      class O {
        constructor() {
          (this.selectedTags = void 0),
            (this.excludedTags = void 0),
            (this.filterDate = void 0),
            (this.eventsToLoadPerPaging = 20),
            (this.filterEventTypes = void 0),
            (this.bOrderByVisibilityStartTime = !1),
            (this.bUseCustomQuery = !1);
        }
        static Get() {
          return O.s_Singleton || (O.s_Singleton = new O()), O.s_Singleton;
        }
        Init(e) {
          const t = u.a.parse(e.substring(1));
          let n;
          "string" == typeof t.selectedTags
            ? t.selectedTags.length > 0 &&
              (n = [{ label: t.selectedTags, value: t.selectedTags }])
            : t.selectedTags &&
              ((n = []),
              t.selectedTags.forEach((e) => n.push({ label: e, value: e })));
          let a,
            o,
            l = !1,
            i = T.map((e) => ({ label: e, value: e }));
          if (
            ("string" == typeof t.excludedTags
              ? t.excludedTags.length > 0 &&
                ((l = !0),
                (i = [{ label: t.excludedTags, value: t.excludedTags }]))
              : t.excludedTags &&
                ((i = []),
                t.excludedTags.forEach((e) => i.push({ label: e, value: e })),
                (l = i && i.length > 0)),
            "string" == typeof t.eventtype)
          ) {
            if (t.eventtype.length > 0) {
              let e = Number.parseInt(t.eventtype);
              a = [{ label: Object(A.b)(e), value: e }];
            }
          } else
            t.eventtype &&
              ((a = []),
              t.eventtype.forEach((e) => {
                let t = Number.parseInt(e);
                a.push({ label: Object(A.b)(t), value: t });
              }));
          "string" == typeof t.filterDate &&
            t.filterDate.length > 0 &&
            (o = C.unix(Number(t.filterDate)));
          let r = !1;
          "string" == typeof t.orderByVisibility &&
            t.orderByVisibility.length > 0 &&
            (r = Boolean(t.orderByVisibility)),
            Object(c.G)(() => {
              (this.selectedTags = n),
                (this.excludedTags = i),
                (this.filterEventTypes = a),
                (this.filterDate = o),
                (this.bOrderByVisibilityStartTime = r),
                (this.bUseCustomQuery =
                  (n && n.length > 0) || l || (a && a.length > 0));
            });
        }
      }
      Object(i.b)([c.C], O.prototype, "selectedTags", void 0),
        Object(i.b)([c.C], O.prototype, "excludedTags", void 0),
        Object(i.b)([c.C], O.prototype, "filterDate", void 0),
        Object(i.b)([c.C], O.prototype, "filterDateAsString", void 0),
        Object(i.b)([c.C], O.prototype, "eventsToLoadPerPaging", void 0),
        Object(i.b)([c.C], O.prototype, "filterEventTypes", void 0),
        Object(i.b)([c.C], O.prototype, "bOrderByVisibilityStartTime", void 0),
        Object(i.b)([c.C], O.prototype, "bUseCustomQuery", void 0);
      var y,
        j = n("mgoM"),
        M = (n("AiWL"), n("OS6B")),
        I = n("lkRc");
      class D {
        constructor() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        BHasSolrEvent(e) {
          return this.m_mapEventGIDToSolrData.has(e);
        }
        GetAllSolrEvents() {
          return this.m_listEvents;
        }
        static Get() {
          return D.s_Singleton || (D.s_Singleton = new D()), D.s_Singleton;
        }
        ClearAllSolrEvents() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        LoadPartnerEventForQueryIncremental(
          e,
          t = 0,
          n = 10,
          a,
          o,
          l,
          r,
          s,
          d
        ) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const i = yield this.GetLatestPartnerEvents(
              e,
              t,
              n,
              a,
              o,
              l,
              r,
              s,
              d
            );
            let m = new Array();
            return (
              Object(c.G)(() => {
                i.forEach((e) => {
                  this.m_mapEventGIDToSolrData.has(e.unique_id) ||
                    (m.push(e),
                    this.m_mapEventGIDToSolrData.set(e.unique_id, e),
                    this.m_listEvents.push(e));
                });
              }),
              m
            );
          });
        }
        GetLatestPartnerEvents(e, t = 0, n = 10, a, o, l, r, c, d, m, u, v) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const i =
                I.d.STORE_BASE_URL + "events_admin/ajaxgetlatestpartnerevents",
              p = {
                page: t,
                count: n,
                date: r,
                appids: void 0 === a ? void 0 : a.join(","),
                required_tags: void 0 === o ? void 0 : o.join(","),
                exclude_tags: void 0 === l ? void 0 : l.join(","),
                eventtypefilter: void 0 === c ? void 0 : c.join(","),
                orderByVisibility: d || void 0,
                creator_home_clan_id: void 0 === m ? void 0 : m.join(","),
                showUnpublished: void 0 === v ? void 0 : v,
                term: void 0 === u ? void 0 : u,
              },
              E = yield s.a.get(i, {
                params: p,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
            return E.data ? E.data.docs : [];
          });
        }
      }
      Object(i.b)([c.C], D.prototype, "m_mapEventGIDToSolrData", void 0),
        Object(i.b)([c.C], D.prototype, "m_listEvents", void 0),
        Object(i.b)([c.k], D.prototype, "ClearAllSolrEvents", null),
        (function (e) {
          (e[(e.k_ModReviewed = 0)] = "k_ModReviewed"),
            (e[(e.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
            (e[(e.k_ChangeEventType = 2)] = "k_ChangeEventType"),
            (e[(e.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
            (e[(e.k_ModReReviewed = 4)] = "k_ModReReviewed"),
            (e[(e.k_ModRemovedFromSteamChina = 5)] =
              "k_ModRemovedFromSteamChina"),
            (e[(e.k_ModFlagAdultOnlyContent = 6)] =
              "k_ModFlagAdultOnlyContent"),
            (e[(e.k_ModRemoveAdultOnlyContent = 7)] =
              "k_ModRemoveAdultOnlyContent");
        })(y || (y = {}));
      const k = "ModAct";
      class w {
        ToModString() {
          let e =
            "ModAct_" +
            this.m_moderator +
            "_" +
            Math.floor(this.m_rtWhen) +
            "_" +
            this.m_action;
          switch (this.m_action) {
            case y.k_ChangeEventType:
              e += "_" + this.m_newEventType;
              break;
            case y.k_UpdateSeasonTags:
              e += "_" + this.m_newTagAdded;
          }
          return e;
        }
        FromString(e) {
          let t = e.split("_");
          if (!t || t[0] !== k) return !1;
          switch (
            ((this.m_moderator = Number(t[1])),
            (this.m_rtWhen = Number(t[2])),
            (this.m_action = Number(t[3])),
            this.m_action)
          ) {
            case y.k_ChangeEventType:
              this.m_newEventType = Number(t[4]);
              break;
            case y.k_UpdateSeasonTags:
              this.m_newTagAdded = t.slice(4).join("_");
          }
          return !0;
        }
        SetActionChangeEvent(e) {
          return (
            (this.m_moderator = I.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = y.k_ChangeEventType),
            (this.m_newEventType = e),
            this
          );
        }
        SetReviewAction(e) {
          return (
            (this.m_moderator = I.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = e ? y.k_ModReviewed : y.k_ModUnreviewed),
            this
          );
        }
        SetAdultOnlyContentAction(e) {
          return (
            (this.m_moderator = I.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = e
              ? y.k_ModFlagAdultOnlyContent
              : y.k_ModRemoveAdultOnlyContent),
            this
          );
        }
        SetReReviewAction(e) {
          return (
            (this.m_moderator = I.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = e ? y.k_ModReReviewed : y.k_ModUnreviewed),
            this
          );
        }
        static IsAuditAction(e) {
          return e.startsWith(k);
        }
        SetUpdateSeasonalTags(e) {
          return (
            (this.m_moderator = I.k.accountid),
            (this.m_rtWhen = Date.now() / 1e3),
            (this.m_action = y.k_UpdateSeasonTags),
            (this.m_newTagAdded = e),
            this
          );
        }
      }
      class G {
        constructor() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        BHasSolrEvent(e) {
          return this.m_mapEventGIDToSolrData.has(e);
        }
        GetAllSolrEvents() {
          return this.m_listEvents;
        }
        static Get() {
          return G.s_Singleton || (G.s_Singleton = new G()), G.s_Singleton;
        }
        ClearAllSolrEvents() {
          (this.m_mapEventGIDToSolrData = new Map()),
            (this.m_listEvents = new Array());
        }
        LoadPartnerEventForModerationIncremental(e, t = 30) {
          var n;
          return Object(i.a)(this, void 0, void 0, function* () {
            const a =
              I.d.STORE_BASE_URL +
              "events_admin/ajaxgetmoderationspecificpartnerevents";
            let o = 0;
            if (
              null === (n = this.m_listEvents) || void 0 === n
                ? void 0
                : n.length
            ) {
              this.m_listEvents.forEach(
                (e) =>
                  (o = Math.max(
                    o,
                    Math.floor(Date.parse(e.last_modified_date) / 1e3)
                  ))
              );
              this.m_listEvents.filter(
                (e) => Math.floor(Date.parse(e.last_modified_date) / 1e3) == o
              ).length >= t && o++;
            }
            const l = { start_time: o, count: t };
            try {
              const t = yield s.a.get(a, {
                params: l,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return [];
              if (t && t.data) {
                let e = new Array();
                return (
                  Object(c.G)(() => {
                    t.data.docs.forEach((t) => {
                      this.m_mapEventGIDToSolrData.has(t.unique_id) ||
                        (e.push(t),
                        this.m_mapEventGIDToSolrData.set(t.unique_id, t),
                        this.m_listEvents.push(t));
                    });
                  }),
                  e
                );
              }
            } catch (e) {
              const t = Object(M.a)(e);
              console.error(
                "LoadPartnerEventForModerationIncremental failed:" +
                  t.strErrorMsg,
                t
              );
            }
            return [];
          });
        }
        UpdateTagsOnPartnerEvent(e, t, n, a, o, l) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const i = I.d.STORE_BASE_URL + "events_admin/ajaxupdatetags";
            let r = a.join(",");
            l && (a.length > 0 && (r += ","), (r += l.ToModString()));
            const c = new FormData();
            c.append("sessionid", I.d.SESSIONID),
              c.append("clan_accountid", "" + t.GetAccountID()),
              c.append("gid_announcement", n),
              c.append("add_tags", r),
              c.append("remove_tags", o.join(","));
            return (yield s.a.post(i, c, {
              withCredentials: !0,
              cancelToken: e.token,
            })).data.tags;
          });
        }
        UpdatePartnerEventType(e, t, n, a) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const o = I.d.STORE_BASE_URL + "events_admin/ajaxupdateeventtype",
              l = new FormData();
            l.append("sessionid", I.d.SESSIONID),
              l.append("clan_accountid", "" + t.GetAccountID()),
              l.append("gid_event", n),
              l.append("new_event_type", "" + a),
              yield s.a.post(o, l, {
                withCredentials: !0,
                cancelToken: e.token,
              });
          });
        }
      }
      Object(i.b)([c.C], G.prototype, "m_mapEventGIDToSolrData", void 0),
        Object(i.b)([c.C], G.prototype, "m_listEvents", void 0),
        Object(i.b)([c.k], G.prototype, "ClearAllSolrEvents", null);
      var L = n("6oCP"),
        R = n("C4Nl"),
        B = n("Mgs7"),
        P = n("IjL/"),
        N = n("T27q"),
        F = n("Qcoi"),
        U = n("TLQK"),
        H = n("Z1oF"),
        x = n("zrk3");
      function z(e) {
        const { accountID: t, locToken: n } = e,
          o = a.useMemo(() => g.a.InitFromAccountID(t), [t]),
          [l, i] = Object(F.b)(o);
        let r =
          "https://steamsupport.valvesoftware.com/account/overview/" +
          o.ConvertTo64BitString();
        return a.createElement(
          "div",
          null,
          Object(U.m)(
            n,
            a.createElement(
              "a",
              { href: r, target: I.d.IN_CLIENT ? void 0 : "_blank" },
              Boolean(!l && i)
                ? a.createElement(a.Fragment, null, i.persona_name)
                : a.createElement(
                    a.Fragment,
                    null,
                    a.createElement("span", null, t)
                  )
            )
          )
        );
      }
      function W(e) {
        const { modAction: t } = e,
          n =
            Object(U.k)(t.m_rtWhen) +
            " @ " +
            Object(H.f)(t.m_rtWhen, { bForce24HourClock: !1 }),
          o = a.createElement(z, {
            locToken: "#EventModTile_Moderator",
            accountID: t.m_moderator,
          });
        switch (t.m_action) {
          case y.k_ModReviewed:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_Reviewed",
                a.createElement("span", null, n),
                o
              )
            );
          case y.k_ModUnreviewed:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_UnReviewed",
                a.createElement("span", null, n),
                o
              )
            );
          case y.k_ChangeEventType:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_NewEventType",
                a.createElement("span", null, n),
                o,
                Object(A.b)(t.m_newEventType)
              )
            );
          case y.k_UpdateSeasonTags:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_SeasonTagUpdate",
                a.createElement("span", null, n),
                o,
                t.m_newTagAdded
              )
            );
          case y.k_ModReReviewed:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_ReReviewed",
                a.createElement("span", null, n),
                o
              )
            );
          case y.k_ModRemovedFromSteamChina:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_RemoveFromSC",
                a.createElement("span", null, n),
                o
              )
            );
          case y.k_ModFlagAdultOnlyContent:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_FlagAdultContent",
                a.createElement("span", null, n),
                o
              )
            );
          case y.k_ModRemoveAdultOnlyContent:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              Object(U.m)(
                "#EventModTile_Action_RemoveAdultContent",
                a.createElement("span", null, n),
                o
              )
            );
          default:
            return a.createElement(
              "div",
              { className: x.ModeratorAuditActionCtn },
              t.ToModString
            );
        }
      }
      function V(e) {
        const [t, n] = a.useState(!0),
          { eventModel: o } = e;
        let l = o
          .GetAllTags()
          .filter((e) => w.IsAuditAction(e))
          .reverse();
        const i = l.length,
          r = l.length > 3 && t;
        return 0 == l.length
          ? null
          : (r && (l = l.splice(0, 3)),
            a.createElement(
              "div",
              null,
              a.createElement(
                "h4",
                null,
                Object(U.f)("#EventModTile_Action_Title")
              ),
              ((t) => {
                const { eventModel: n } = e;
                return t.map((e) => {
                  const t = new w();
                  return (
                    t.FromString(e),
                    a.createElement(W, { key: n.GID + e, modAction: t })
                  );
                });
              })(l),
              r &&
                a.createElement(
                  "a",
                  { onClick: () => n(!1), className: x.ExpandModActions },
                  Object(U.f)("#EventModTile_Action_More", i - 3)
                ),
              Boolean(!r && i > 3) &&
                a.createElement(
                  "a",
                  { onClick: () => n(!0), className: x.ExpandModActions },
                  Object(U.f)("#EventModTile_Action_Hide")
                )
            ));
      }
      var q = n("BpzF"),
        Q = n("fpVW"),
        K = n.n(Q),
        Y = n("RQmk"),
        J = n("Jqb/"),
        $ = n("UxvL"),
        X = n("ka0M"),
        Z = n("0OaU"),
        ee = n("5E+2"),
        te = n("+d9t"),
        ne = n("exH9"),
        ae = n("X3Ds"),
        oe = n("opsS"),
        le = n("IzPI"),
        ie = n("E9gz");
      const re = n("f0Wu"),
        se = {
          bExhaustedEventList: !1,
          bInfiniteScrollLoading: !0,
          nLastFetchCompletedMS: 0,
        };
      let ce = class extends o.a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.m_refScroll = o.a.createRef()),
            (this.m_IntervalTimer = void 0),
            (this.state = {
              bInfiniteScrollLoading: !1,
              bExhaustedEventList: !1,
              nLastFetchCompletedMS: 0,
            }),
            (this.m_nPage = 0);
        }
        componentDidMount() {
          this.setState(
            { bInfiniteScrollLoading: !0 },
            this.LoadMoreModerationEvents
          ),
            window.addEventListener("scroll", this.OnScroll, !0),
            O.Get().Init(this.props.history.location.search);
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventModerationLanding component unmounted"
          ),
            window.removeEventListener("scroll", this.OnScroll),
            this.ClearTimer();
        }
        HandleUpdateQueryParameter() {
          const e = O.Get();
          if (e.bUseCustomQuery && this.props.history) {
            const {
              selectedTags: t,
              excludedTags: n,
              filterEventTypes: a,
              filterDate: o,
              bOrderByVisibilityStartTime: l,
            } = e;
            t || n || a || o || l
              ? this.props.history.push(
                  `?${u.a.stringify({
                    selectedTags:
                      t && t.length > 0 ? t.map((e) => e.value) : null,
                    excludedTags:
                      n && n.length > 0 ? n.map((e) => e.value) : null,
                    eventtype:
                      a && a.length > 0 ? a.map((e) => "" + e.value) : null,
                    filterDate: o && o.unix() > 0 ? "" + o.unix() : null,
                    orderByVisibility: l ? "1" : null,
                  })}`
                )
              : this.props.history.push("?");
          }
        }
        ClearTimer() {
          this.m_IntervalTimer &&
            (window.clearInterval(this.m_IntervalTimer),
            (this.m_IntervalTimer = void 0));
        }
        HandleError(e) {
          let t = Object(M.a)(e);
          console.error("EventModerationLanding error: " + t.strErrorMsg, t),
            this.setState({
              bInfiniteScrollLoading: !1,
              bExhaustedEventList: !0,
              nLastFetchCompletedMS: Date.now(),
            });
        }
        LoadMorePublicEventWithDelay() {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMoreModerationEvents,
              500
            );
          });
        }
        LoadMoreModerationEvents() {
          if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
            let e;
            const t = O.Get();
            if (t.bUseCustomQuery) {
              let n = t.filterEventTypes
                  ? t.filterEventTypes.map((e) => e.value)
                  : void 0,
                a = t.selectedTags
                  ? t.selectedTags.map((e) => e.value)
                  : void 0,
                o = t.excludedTags
                  ? t.excludedTags.map((e) => e.value)
                  : void 0;
              e = D.Get().LoadPartnerEventForQueryIncremental(
                this.m_cancelSignal,
                this.m_nPage,
                t.eventsToLoadPerPaging,
                [this.props.appid],
                a,
                o,
                t.filterDate,
                n,
                t.bOrderByVisibilityStartTime
              );
            } else
              e = G.Get().LoadPartnerEventForModerationIncremental(
                this.m_cancelSignal,
                t.eventsToLoadPerPaging
              );
            e.then((e) => {
              (this.m_nPage += t.eventsToLoadPerPaging),
                this.setState({
                  bInfiniteScrollLoading: !1,
                  bExhaustedEventList: 0 == e.length,
                  nLastFetchCompletedMS: Date.now(),
                });
            }).catch((e) => this.HandleError(e));
          }
        }
        UpdateQueryParametersAndLoadMoreEvents() {
          this.HandleUpdateQueryParameter(), this.LoadMoreModerationEvents();
        }
        RenderTiles() {
          let e = new Array();
          return (
            (O.Get().bUseCustomQuery
              ? D.Get().GetAllSolrEvents()
              : G.Get().GetAllSolrEvents()
            ).forEach((t) => {
              e.push(o.a.createElement(Ee, { solrData: t, key: t.unique_id }));
            }),
            e
          );
        }
        OnScroll() {
          if (!this.m_refScroll || !this.m_refScroll.current) return;
          let e = this.m_refScroll.current;
          e &&
            (this.state.bExhaustedEventList ||
              this.state.bInfiniteScrollLoading ||
              (e.getBoundingClientRect().bottom <= window.innerHeight + 50 &&
                (this.state.nLastFetchCompletedMS + 500 < Date.now()
                  ? this.setState(
                      { bInfiniteScrollLoading: !0 },
                      this.LoadMorePublicEventWithDelay
                    )
                  : this.setState(
                      { bInfiniteScrollLoading: !0 },
                      this.LoadMoreModerationEvents
                    ))));
        }
        RefetchAllEventTiles() {
          (this.m_nPage = 0),
            G.Get().ClearAllSolrEvents(),
            D.Get().ClearAllSolrEvents(),
            this.setState(
              Object.assign({}, se),
              this.UpdateQueryParametersAndLoadMoreEvents
            );
        }
        render() {
          let e = this.RenderTiles();
          const t = O.Get();
          return o.a.createElement(
            "div",
            { className: ie.ModerationContainer, ref: this.m_refScroll },
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "h2",
                null,
                Object(U.f)("#EventModeration_Title")
              ),
              o.a.createElement(
                P.a,
                null,
                o.a.createElement(
                  "div",
                  { className: Object(ne.a)(K.a.FlexRowContainer) },
                  o.a.createElement(me, {
                    fnRequireRefetchEvents: this.RefetchAllEventTiles,
                  }),
                  Boolean(t.bUseCustomQuery) &&
                    o.a.createElement(ue, {
                      fnRequireRefetchEvents: this.RefetchAllEventTiles,
                    })
                )
              )
            ),
            o.a.createElement(P.a, null, e),
            this.state.bInfiniteScrollLoading &&
              o.a.createElement(Z.a, {
                position: "center",
                size: "medium",
                string: Object(U.f)("#Loading"),
              })
          );
        }
      };
      Object(i.b)([oe.a], ce.prototype, "HandleError", null),
        Object(i.b)([oe.a], ce.prototype, "LoadMorePublicEventWithDelay", null),
        Object(i.b)([oe.a], ce.prototype, "LoadMoreModerationEvents", null),
        Object(i.b)(
          [oe.a],
          ce.prototype,
          "UpdateQueryParametersAndLoadMoreEvents",
          null
        ),
        Object(i.b)([oe.a], ce.prototype, "OnScroll", null),
        Object(i.b)([oe.a], ce.prototype, "RefetchAllEventTiles", null),
        (ce = Object(i.b)([d.a], ce));
      const de = Object(E.j)(ce),
        me = Object(d.a)((e) => {
          const t = O.Get(),
            { fnRequireRefetchEvents: n } = e;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                ee.a,
                {
                  toolTipContent: Object(U.f)(
                    "#EventModeration_ShowCustomFilter_ttip"
                  ),
                },
                o.a.createElement(B.e, {
                  label: Object(U.f)("#EventModeration_ShowCustomFilter"),
                  checked: t.bUseCustomQuery,
                  onChange: (e) => {
                    (t.bUseCustomQuery = e), n();
                  },
                })
              )
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "label",
                { htmlFor: "EventPerLoad" },
                Object(U.f)("#EventModeration_PerPageLoad")
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("input", {
                  type: "number",
                  id: "EventPerLoad",
                  min: "10",
                  max: "200",
                  value: t.eventsToLoadPerPaging,
                  onChange: (e) => {
                    let n = Number.parseInt(e.currentTarget.value);
                    n &&
                      n > 0 &&
                      n != t.eventsToLoadPerPaging &&
                      (t.eventsToLoadPerPaging = n);
                  },
                })
              )
            )
          );
        }),
        ue = Object(d.a)((e) => {
          const t = O.Get(),
            { fnRequireRefetchEvents: n } = e,
            a = _.e
              .map((e) => ({ value: e, label: Object(A.b)(e) }))
              .sort((e, t) => e.label.localeCompare(t.label)),
            l = b.a
              .map((e) => ({ value: e, label: e }))
              .sort((e, t) => e.label.localeCompare(t.label)),
            i = {
              option: (e) =>
                Object.assign(Object.assign({}, e), { color: "#444444" }),
            };
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterByTag")
              ),
              o.a.createElement(h.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: (e) => {
                  (t.selectedTags = e), n();
                },
                value: t.selectedTags,
                options: l,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterExcludeByTag")
              ),
              o.a.createElement(h.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: (e) => {
                  (t.excludedTags = e), n();
                },
                value: t.excludedTags,
                options: l,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterToType")
              ),
              o.a.createElement(h.a, {
                isSearchable: !0,
                isMulti: !0,
                onChange: (e) => {
                  (t.filterEventTypes = e), n();
                },
                value: t.filterEventTypes,
                options: a,
                styles: i,
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement(
                "span",
                null,
                Object(U.f)("#EventModeration_FilterToDate")
              ),
              o.a.createElement(p.a, {
                timeFormat: !1,
                onChange: (e) => {
                  if ("string" == typeof e) {
                    let n = re(e, "M/D/YYYY", !0);
                    if (!n.isValid()) return void (t.filterDateAsString = e);
                    e = n;
                  }
                  t.filterDate != e &&
                    ((t.filterDateAsString = void 0), (t.filterDate = e), n());
                },
                value: t.filterDate,
                isValidDate: (e) => {
                  let t = new Date();
                  return (
                    e.unix() <
                    re
                      .unix(t.getTime() / 1e3 + 86400)
                      .hour(0)
                      .seconds(0)
                      .minute(0)
                      .unix()
                  );
                },
                inputProps: {
                  placeholder: Object(U.f)("#EventModeration_PickDatee"),
                  className: ie.TimeWidth,
                },
              })
            ),
            o.a.createElement(
              "div",
              { className: ie.FilterContainer },
              o.a.createElement("input", {
                type: "checkbox",
                id: "VisibilityStart",
                checked: t.bOrderByVisibilityStartTime,
                onChange: (e) => {
                  (t.bOrderByVisibilityStartTime = e.currentTarget.checked),
                    n();
                },
              }),
              o.a.createElement(
                "label",
                { htmlFor: "VisibilityStart" },
                Object(U.f)("#EventModeration_OrderByFirstVisible")
              )
            )
          );
        }),
        ve = Object(d.a)((e) => {
          const { onClick: t, event: n, bSaving: a } = e;
          let l = Object(U.f)("#EventModTile_Moderate_ClearReviewed"),
            i = ie.EventModerateClearReview,
            r = !1;
          return (
            Object(b.g)(n) ||
              ((l = Object(U.f)("#EventModTile_Moderate_MarkReviewed")),
              (i = ie.EventModerateMarkReview),
              (r = !0)),
            a &&
              ((l = Object(U.f)("#EventModTile_Moderate_Saving")),
              (i = ie.EventModerateSaving)),
            o.a.createElement(
              "button",
              {
                className: Object(ne.a)(K.a.Button, ie.Button, i),
                onClick: () => t(r),
                disabled: a,
              },
              a && o.a.createElement(Z.a, { size: "small" }),
              l
            )
          );
        }),
        pe = Object(d.a)((e) => {
          const { onClick: t, event: n, bSaving: a } = e,
            l = n.BHasTag("adult_only_content");
          let i = Object(U.f)(
            l
              ? "#EventModTile_Moderate_RemoveAdultContent"
              : "#EventModTile_Moderate_FlagAdultContent"
          );
          return (
            a && (i = Object(U.f)("#EventModTile_Moderate_Saving")),
            o.a.createElement(
              "button",
              {
                className: Object(ne.a)(K.a.Button, ie.Button),
                onClick: () => t(!l),
                disabled: a,
              },
              a && o.a.createElement(Z.a, { size: "small" }),
              i
            )
          );
        });
      let Ee = class extends o.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bLoadingEvent: !L.b.BHasClanEventModel(
                this.props.solrData.unique_id
              ),
              bShowAsModal: !1,
              bSavingModeration: !1,
            }),
            (this.m_cancelSignal = s.a.CancelToken.source());
        }
        componentDidMount() {
          const { solrData: e } = this.props,
            t = e.unique_id;
          L.b.BHasClanEventModel(t) ||
            L.b
              .LoadHiddenPartnerEvent(new g.a(e.clan_steamid), t)
              .then(() => this.setState({ bLoadingEvent: !1 }))
              .catch((e) => {
                const t = Object(M.a)(e);
                console.error(
                  "EventModerationTile: Event Load: " + t.strErrorMsg,
                  t
                ),
                  this.setState({ bLoadingEvent: !1 });
              });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("EventModerationTile component unmounted");
        }
        ShowModalEvent(e) {
          const { solrData: t } = this.props,
            n = t.unique_id;
          !this.state.bLoadingEvent &&
            L.b.BHasClanEventModel(n) &&
            this.setState({ bShowAsModal: !0 }),
            e.preventDefault(),
            e.stopPropagation();
        }
        HideModalEvent() {
          this.state.bShowAsModal && this.setState({ bShowAsModal: !1 });
        }
        SetAdultContentState(e) {
          if (this.state.bSavingModeration) return;
          const { solrData: t } = this.props,
            n = t.unique_id,
            a = L.b.GetClanEventModel(n);
          if (!a) return;
          if (e === a.BHasTag("adult_only_content")) return;
          const o = new Array(),
            l = new Array();
          let i = new w().SetAdultOnlyContentAction(e);
          e ? o.push("adult_only_content") : l.push("adult_only_content"),
            this.UpdateTagsOnEvent(n, o, l, i);
        }
        SetModeratedState(e) {
          if (this.state.bSavingModeration) return;
          const { solrData: t } = this.props,
            n = t.unique_id,
            a = L.b.GetClanEventModel(n);
          if (!a) return;
          if (e === Object(b.g)(a)) return;
          const o = new Array(),
            l = new Array();
          let i = new w().SetReviewAction(e);
          e
            ? (o.push("mod_reviewed"),
              l.push("mod_require_rereview"),
              a.BHasTag("mod_require_rereview") && i.SetReReviewAction(e))
            : o.push("mod_require_rereview"),
            this.UpdateTagsOnEvent(n, o, l, i);
        }
        UpdateTagsOnEvent(e, t, n, a) {
          this.state.bSavingModeration ||
            this.setState({ bSavingModeration: !0 }, () =>
              Object(i.a)(this, void 0, void 0, function* () {
                let o = L.b.GetClanEventModel(e);
                try {
                  let e = yield G.Get().UpdateTagsOnPartnerEvent(
                    this.m_cancelSignal,
                    o.clanSteamID,
                    o.AnnouncementGID,
                    t,
                    n,
                    a
                  );
                  o.vecTags = e;
                } catch (e) {
                  let t = Object(M.a)(e);
                  console.error("UpdateTagsOnPartnerEvent " + t.strErrorMsg, t);
                }
                this.setState({ bSavingModeration: !1 });
              })
            );
        }
        OnChangeCategory(e) {
          const { solrData: t } = this.props;
          let n = L.b.GetClanEventModel(t.unique_id);
          Object(X.d)(
            o.a.createElement(ge, { eventModel: n }),
            Object(ae.o)(e)
          );
        }
        OnUpdateSeasonalTag(e) {
          const { solrData: t } = this.props;
          let n = L.b.GetClanEventModel(t.unique_id);
          Object(X.d)(
            o.a.createElement(Se, { eventModel: n }),
            Object(ae.o)(e)
          );
        }
        render() {
          const { solrData: e } = this.props,
            t = e.unique_id,
            n = Number(e.appid);
          let a,
            l = Object(_.l)(I.d.LANGUAGE),
            i = L.b.GetClanEventModel(t),
            r = null;
          if (i) {
            this.state.bShowAsModal &&
              (r = o.a.createElement(
                J.k,
                { className: ie.StoreHeaderAdjust },
                o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(N.b, {
                    event: i,
                    fnClose: this.HideModalEvent,
                  })
                )
              ));
            const e = i.GetImageForSizeAsArrayWithFallback(
                "capsule",
                l,
                S.c.capsule_main
              ),
              t = i.BImageNeedScreenshotFallback("capsule", l);
            a =
              e.length > 0
                ? o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement($.a, { rgSources: e }),
                    t &&
                      o.a.createElement(
                        "div",
                        { className: ie.NoCapsuleFallback },
                        Object(U.f)("#EventModTile_FallbackImageText")
                      )
                  )
                : o.a.createElement(
                    "div",
                    { className: ie.NoCapsule },
                    Object(U.f)("#EventModTile_NoCapsule")
                  );
          } else a = Object(U.f)("#Loading");
          const s = e.last_modified_date
              ? Date.parse(e.last_modified_date) / 1e3
              : 0,
            c = i ? i.type : Number(e.event_type),
            d = new g.a(e.clan_steamid),
            m = n ? `app/${n}` : `group/${d.GetAccountID()}`,
            u = `${I.d.STORE_BASE_URL}news/${m}/view/${e.announcement_gid}`,
            v = Boolean(i && i.BHasTag("adult_only_content"));
          return o.a.createElement(
            P.a,
            null,
            r,
            o.a.createElement(
              "div",
              { className: ie.Tile },
              o.a.createElement(
                "a",
                {
                  href: u,
                  className: ie.TileCapsule,
                  onClick: this.ShowModalEvent,
                },
                a
              ),
              o.a.createElement(
                "div",
                { className: ie.TileDetails },
                o.a.createElement(
                  "div",
                  { className: ie.DetailsLeft },
                  o.a.createElement(
                    "a",
                    {
                      className: ie.EventTitle,
                      href: u,
                      onClick: this.ShowModalEvent,
                    },
                    e.event_name
                  ),
                  o.a.createElement(
                    "div",
                    {
                      className: Object(ne.a)(
                        ie.TileEventType,
                        1 == c ? ie.TileEventOtherType : ""
                      ),
                    },
                    i ? i.GetCategoryAsString() : e.event_type
                  ),
                  v &&
                    o.a.createElement(
                      "div",
                      { className: ie.HasAdultContent },
                      Object(U.f)("#EventModTile_HasAdultContent")
                    ),
                  this.state.bLoadingEvent &&
                    o.a.createElement(Z.a, {
                      size: "small",
                      string: Object(U.f)("#Loading"),
                    }),
                  o.a.createElement(
                    "div",
                    { className: ie.ChannelInfo },
                    o.a.createElement(_e, {
                      appid: n,
                      clanSteamID: new g.a(e.clan_steamid),
                    })
                  )
                ),
                o.a.createElement(
                  "div",
                  { className: ie.DetailsMiddle },
                  i &&
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(ve, {
                        onClick: this.SetModeratedState,
                        bSaving: this.state.bSavingModeration,
                        event: i,
                      }),
                      o.a.createElement(
                        "button",
                        {
                          className: Object(ne.a)(K.a.Button, ie.Button),
                          onClick: this.OnChangeCategory,
                        },
                        Object(U.f)("#EventModTile_ChangeEventType")
                      ),
                      o.a.createElement(pe, {
                        onClick: this.SetAdultContentState,
                        bSaving: this.state.bSavingModeration,
                        event: i,
                      }),
                      Boolean(i.BHasTag("halloween2019candidate")) &&
                        o.a.createElement(
                          "button",
                          {
                            className: Object(ne.a)(K.a.Button),
                            onClick: this.OnUpdateSeasonalTag,
                          },
                          Object(U.f)("#EventModTile_SeasonalTag")
                        ),
                      o.a.createElement(V, { eventModel: i })
                    )
                ),
                o.a.createElement(
                  "div",
                  { className: ie.DetailsRight },
                  o.a.createElement(
                    "div",
                    { className: ie.EventTimingBlock },
                    Boolean(s) &&
                      o.a.createElement(
                        "div",
                        { className: ie.LastUpdateTime },
                        Object(U.f)(
                          "#EventModTile_LastModified",
                          Object(U.k)(s) +
                            "@" +
                            Object(H.f)(s, { bForce24HourClock: !1 })
                        )
                      ),
                    i &&
                      o.a.createElement(q.b, {
                        event: i,
                        stylesmodule: ie,
                        nOverrideEndTime: i.GetEndTimeAndDateUnixSeconds(),
                        nOverrideStartTime: i.GetStartTimeAndDateUnixSeconds(),
                      })
                  ),
                  i &&
                    o.a.createElement(be, {
                      event: i,
                      hidden: e.hidden,
                      published: e.published,
                    })
                )
              )
            )
          );
        }
      };
      Object(i.b)([oe.a], Ee.prototype, "ShowModalEvent", null),
        Object(i.b)([oe.a], Ee.prototype, "HideModalEvent", null),
        Object(i.b)([oe.a], Ee.prototype, "SetAdultContentState", null),
        Object(i.b)([oe.a], Ee.prototype, "SetModeratedState", null),
        Object(i.b)([oe.a], Ee.prototype, "OnChangeCategory", null),
        Object(i.b)([oe.a], Ee.prototype, "OnUpdateSeasonalTag", null),
        (Ee = Object(i.b)([d.a], Ee));
      let he = class extends o.a.Component {
        constructor() {
          super(...arguments),
            (this.state = { bDownloadingImages: !1, nLocLanguages: 0 }),
            (this.m_cancelSignal = s.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "ChangeEventTypeDialog component unmounted"
          );
        }
        CountLanguages(e) {
          let t = 0;
          if (e && e.length > 0)
            for (let n = 0; n < e.length && n < 30; ++n)
              e[n] && e[n].length > 0 && (t += 1);
          return t;
        }
        componentDidMount() {
          const { event: e } = this.props;
          L.b
            .LoadClanEventLocalizationFromAnnouncementGID(
              e.clanSteamID,
              e.AnnouncementGID
            )
            .then((e) => {
              this.m_cancelSignal.token.reason ||
                this.setState({ nLocLanguages: e.length });
            })
            .catch((e) => {
              let t = Object(M.a)(e);
              console.error(
                "EventInspection.LoadLoc : error " + t.strErrorMsg,
                t
              ),
                this.m_cancelSignal.token.reason ||
                  this.setState({ nLocLanguages: -1 });
            });
        }
        render() {
          const { event: e } = this.props;
          let t = this.CountLanguages(e.jsondata.localized_title_image),
            n = this.CountLanguages(e.jsondata.localized_capsule_image),
            a = this.CountLanguages(e.jsondata.localized_spotlight_image),
            l = Math.max(
              this.CountLanguages(e.jsondata.localized_broadcast_left_image),
              this.CountLanguages(e.jsondata.localized_broadcast_right_image)
            ),
            i = t + n + a + l,
            r = this.CountLanguages(e.jsondata.localized_summary),
            s = this.CountLanguages(e.jsondata.localized_subtitle);
          return o.a.createElement(
            "div",
            { className: ie.AnalysisCtn },
            o.a.createElement(
              "div",
              { className: ie.TileTitle },
              Object(U.f)("#EventModTile_Analysis")
            ),
            o.a.createElement(
              "div",
              null,
              Object(U.f)("#EventModTile_Stats_Comments", e.nCommentCount)
            ),
            o.a.createElement(
              "div",
              null,
              Object(U.f)("#EventModTile_Stats_VoteUp", e.nVotesUp)
            ),
            o.a.createElement(
              "div",
              null,
              Object(U.f)("#EventModTile_Stats_VoteDown", e.nVotesDown)
            ),
            Boolean(t) &&
              o.a.createElement(
                "div",
                { className: ie.ArtHeader },
                Object(U.f)("#EventModTile_ImageAnalysis_Header", t),
                " "
              ),
            Boolean(n) &&
              o.a.createElement(
                "div",
                null,
                Object(U.f)("#EventModTile_ImageAnalysis_Capsule", n),
                " "
              ),
            Boolean(a) &&
              o.a.createElement(
                "div",
                { className: ie.ArtSpotlight },
                Object(U.f)("#EventModTile_ImageAnalysis_Spotlight", a),
                " "
              ),
            Boolean(l) &&
              o.a.createElement(
                "div",
                null,
                Object(U.f)("#EventModTile_ImageAnalysis_Broadcast", l),
                " "
              ),
            0 == i &&
              o.a.createElement(
                "div",
                { className: ie.AnalysisMissing },
                Object(U.f)("#EventModTile_ImageAnalysis_None"),
                " "
              ),
            0 == this.state.nLocLanguages &&
              o.a.createElement(Z.a, {
                size: "small",
                string: Object(U.f)("#EventModTile_LoadingLocs"),
              }),
            this.state.nLocLanguages > 0 &&
              o.a.createElement(
                "div",
                null,
                Object(U.f)("#EventModTile_Languages", this.state.nLocLanguages)
              ),
            Boolean(r) &&
              o.a.createElement(
                "div",
                null,
                Object(U.f)("#EventModTile_Languages_Summary", r),
                " "
              ),
            Boolean(s) &&
              o.a.createElement(
                "div",
                null,
                Object(U.f)("#EventModTile_Languages_Subtitle", s),
                " "
              )
          );
        }
      };
      he = Object(i.b)([d.a], he);
      const _e = Object(d.a)((e) => {
        const [t, n] = Object(a.useState)(!R.a.Get().BHasApp(e.appid)),
          l = o.a.useRef(s.a.CancelToken.source());
        if (
          (Object(a.useEffect)(
            () => () =>
              l.current.cancel(
                "EventModerationChannelInfo component unmounted"
              ),
            []
          ),
          Object(a.useEffect)(() => {
            const { appid: t, clanSteamID: a } = e;
            if (
              (t && !R.a.Get().BHasApp(t)) ||
              (a && !f.a.BHasClanInfoLoaded(a))
            ) {
              (() =>
                Object(i.a)(void 0, void 0, void 0, function* () {
                  try {
                    yield Promise.all([
                      R.a
                        .Get()
                        .QueueAppRequest(t, {
                          include_assets: !0,
                          include_release: !0,
                          include_screenshots: !0,
                        }),
                      a ? f.a.LoadClanInfoForClanSteamID(a) : void 0,
                    ]);
                  } catch (e) {
                    const t = Object(M.a)(e);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + t.strErrorMsg,
                      t
                    );
                  } finally {
                    l.current.token.reason || n(!1);
                  }
                }))();
            }
          }, [e]),
          t)
        )
          return o.a.createElement(Z.a, {
            size: "small",
            string: Object(U.f)("#EventModTile_AppInfoLoading"),
          });
        const { appid: r, clanSteamID: c } = e;
        if (r) {
          const e = R.a.Get().GetApp(r);
          return e
            ? o.a.createElement(
                "div",
                { className: ie.TileAppInfo },
                o.a.createElement(
                  "div",
                  { className: ie.TileAppInfoTitle },
                  o.a.createElement(
                    Y.b,
                    { type: "app", id: e.GetAppID() },
                    o.a.createElement(
                      te.a,
                      { href: Object(le.h)(e.GetStorePageURL()) },
                      o.a.createElement("img", {
                        className: ie.TileAppInfoImage,
                        src: e.GetAssets().GetMainCapsuleURL(),
                      })
                    )
                  ),
                  o.a.createElement(
                    Y.b,
                    { type: "app", id: e.GetAppID() },
                    o.a.createElement(
                      te.a,
                      { href: Object(le.h)(e.GetStorePageURL()) },
                      o.a.createElement("div", null, e.GetName())
                    )
                  )
                )
              )
            : null;
        }
        if (c) {
          const e = c.GetAccountID(),
            t = f.a.GetClanInfoByClanAccountID(e);
          if (t && t.is_curator)
            return o.a.createElement(
              "div",
              { className: ie.TileAppInfo },
              o.a.createElement(
                "div",
                { className: ie.TileAppInfoTitle },
                o.a.createElement(
                  te.a,
                  {
                    href: Object(le.h)(
                      I.d.STORE_BASE_URL + "/curator/" + e + "/"
                    ),
                  },
                  o.a.createElement("img", {
                    className: ie.TileAppInfoImage,
                    src: t.avatar_full_url,
                  }),
                  o.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#EventModTile_CuratorName", t.group_name)
                  )
                )
              )
            );
        }
        return null;
      });
      let be = class extends o.a.Component {
        render() {
          const { event: e, hidden: t, published: n } = this.props,
            a = t
              ? n
                ? Object(U.f)("#EVentModTile_State_Staged")
                : Object(U.f)("#EVentModTile_State_Draft")
              : Object(U.f)("#EVentModTile_State_Published"),
            l = Object(b.c)(e),
            i = Object(b.b)(e),
            r = Object(b.d)(e);
          let s = r && !e.BHasTag("hide_store") && !e.BHasTag("mod_hide_store"),
            c =
              l &&
              !e.BHasTag("hide_library_overview") &&
              !e.BHasTag("mod_hide_library_overview"),
            d =
              i &&
              !e.BHasTag("hide_library_detail") &&
              !e.BHasTag("mod_hide_library_detail");
          return o.a.createElement(
            "div",
            { className: ie.VisibiltyCtn },
            o.a.createElement("div", { className: ie.TileTitle }, a),
            o.a.createElement(
              "div",
              null,
              Object(U.f)(
                "#EventModTile_Store_Visibility",
                s
                  ? Object(U.f)("#WriteReview_Dialog_Yes")
                  : Object(U.f)("#WriteReview_Dialog_No"),
                s
                  ? ""
                  : r
                  ? Object(U.f)(
                      "#EventModTime_Hidden_EventType",
                      e.GetEventTypeAsString()
                    )
                  : e.BHasTag("hide_store")
                  ? Object(U.f)("#EventModTime_Hidden_OptOut")
                  : Object(U.f)("#EventModTime_Hidden_Moderator")
              )
            ),
            o.a.createElement(
              "div",
              null,
              Object(U.f)(
                "#EventModTile_LibraryHome_Visibility",
                c
                  ? Object(U.f)("#WriteReview_Dialog_Yes")
                  : Object(U.f)("#WriteReview_Dialog_No"),
                c
                  ? ""
                  : r
                  ? Object(U.f)(
                      "#EventModTime_Hidden_EventType",
                      e.GetEventTypeAsString()
                    )
                  : e.BHasTag("hide_library_overview")
                  ? Object(U.f)("#EventModTime_Hidden_OptOut")
                  : Object(U.f)("#EventModTime_Hidden_Moderator")
              )
            ),
            o.a.createElement(
              "div",
              null,
              Object(U.f)(
                "#EventModTile_LibraryDetail_Visibility",
                d
                  ? Object(U.f)("#WriteReview_Dialog_Yes")
                  : Object(U.f)("#WriteReview_Dialog_No"),
                d
                  ? ""
                  : r
                  ? Object(U.f)(
                      "#EventModTime_Hidden_EventType",
                      e.GetEventTypeAsString()
                    )
                  : e.BHasTag("hide_library_detail")
                  ? Object(U.f)("#EventModTime_Hidden_OptOut")
                  : Object(U.f)("#EventModTime_Hidden_Moderator")
              )
            ),
            e.BHasTag("enable_steam_china") &&
              o.a.createElement(
                "div",
                null,
                Object(U.f)("#EventModTile_SteamChina_Visibility")
              ),
            e.BHasTag("disable_steam_global") &&
              o.a.createElement(
                "div",
                null,
                Object(U.f)("#EventModTile_SteamGlobal_Hidden")
              )
          );
        }
      };
      be = Object(i.b)([d.a], be);
      let ge = class extends o.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bUpdating: !1,
              newCategoryOption: {
                label: Object(A.b)(34),
                value: { eventType: 34 },
              },
            }),
            (this.m_cancelSignal = s.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "ChangeEventTypeDialog component unmounted"
          );
        }
        ChangeCategoryForEvent() {
          return Object(i.a)(this, void 0, void 0, function* () {
            const { eventModel: e, closeModal: t } = this.props;
            try {
              const n = this.state.newCategoryOption,
                a = n.value.eventType;
              yield G.Get().UpdatePartnerEventType(
                this.m_cancelSignal,
                e.clanSteamID,
                e.GID,
                a
              );
              const o = b.p,
                l = [];
              n.value.tags &&
                n.value.tags.forEach((e) => {
                  l.push(e);
                  const t = new w().SetUpdateSeasonalTags(e).ToModString();
                  l.push(t);
                });
              const i = yield G.Get().UpdateTagsOnPartnerEvent(
                this.m_cancelSignal,
                e.clanSteamID,
                e.GetAnnouncementGID(),
                l,
                o,
                new w().SetActionChangeEvent(a)
              );
              Object(c.G)(() => {
                (e.type = a), (e.vecTags = i);
              }),
                this.setState({ bUpdating: !1 }, t);
            } catch (e) {
              const t = Object(M.a)(e);
              console.error("ChangeEventTypeDialog error " + t.strErrorMsg, t),
                this.setState({ bUpdating: !1, strErrorMsg: t.strErrorMsg });
            }
          });
        }
        OnChangeSelection(e) {
          this.setState({ newCategoryOption: e });
        }
        render() {
          const { eventModel: e, closeModal: t } = this.props,
            n = _.e
              .filter((e) => 1 == e || 4 == e || e >= 9)
              .map((e) => {
                const t = { eventType: e };
                return (
                  12 == e && (t.tags = ["patchnotes"]),
                  { label: Object(A.b)(e), value: t }
                );
              });
          return (
            n.push({
              label: Object(U.f)("#PartnerEvent_Curator_Group_Members"),
              value: {
                eventType: 28,
                tags: ["curator", "curator_group_members"],
              },
            }),
            n.push({
              label: Object(U.f)("#PartnerEvent_Curator_Public"),
              value: { eventType: 28, tags: ["curator", "curator_public"] },
            }),
            n.push({
              label: Object(U.f)("#PartnerEvent_SteamAwardNominations"),
              value: {
                eventType: 28,
                tags: [
                  "steam_award_nomination_request",
                  "mod_hide_library_overview",
                ],
              },
            }),
            n.push({
              label: Object(U.f)("#PartnerEvent_SteamAwardVoteRequest"),
              value: {
                eventType: 28,
                tags: ["steam_award_vote_request", "mod_hide_library_overview"],
              },
            }),
            n.unshift({
              value: { eventType: 15, tags: ["halloween"] },
              label: Object(U.f)("#PartnerEvent_15"),
            }),
            n.unshift({
              value: { eventType: 22, tags: ["halloween"] },
              label: Object(U.f)("#PartnerEvent_22"),
            }),
            n.unshift({
              value: { eventType: 23, tags: ["halloween"] },
              label: Object(U.f)("#PartnerEvent_23"),
            }),
            n.unshift({
              value: { eventType: 24, tags: ["halloween"] },
              label: Object(U.f)("#PartnerEvent_24"),
            }),
            n.unshift({
              value: { eventType: 35, tags: ["halloween"] },
              label: Object(U.f)("#PartnerEvent_35"),
            }),
            o.a.createElement(
              J.e,
              {
                strTitle: Object(U.f)("#EventModTile_ChangeEventType"),
                strDescription: Object(U.f)(
                  "#EventModTile_ChangeEventType_Desc",
                  e.GetEventTypeAsString()
                ),
                onCancel: t,
                onOK: () =>
                  this.setState({ bUpdating: !0 }, this.ChangeCategoryForEvent),
              },
              o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  "div",
                  { className: ie.CategoryChangeDialog },
                  o.a.createElement("br", null),
                  this.state.bUpdating &&
                    o.a.createElement(Z.a, { size: "small" }),
                  this.state.strErrorMsg &&
                    o.a.createElement(
                      "div",
                      null,
                      Object(U.f)("#Chat_Settings_Error_ServerError"),
                      o.a.createElement("br", null),
                      this.state.strErrorMsg
                    ),
                  o.a.createElement(h.a, {
                    isSearchable: !0,
                    onChange: this.OnChangeSelection,
                    value: this.state.newCategoryOption,
                    options: n,
                  })
                )
              )
            )
          );
        }
      };
      Object(i.b)([oe.a], ge.prototype, "ChangeCategoryForEvent", null),
        Object(i.b)([oe.a], ge.prototype, "OnChangeSelection", null),
        (ge = Object(i.b)([d.a], ge));
      class Se extends o.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {
              bUpdating: !1,
              bAccept: this.props.eventModel.BHasTag("halloween2019"),
              bHorror: this.props.eventModel.BHasTag("horror"),
              bCute: this.props.eventModel.BHasTag("cute"),
            }),
            (this.m_cancelSignal = s.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "UpdateSeasonalTagDialog component unmounted"
          );
        }
        ChangeAcceptance() {
          this.setState({ bAccept: !this.state.bAccept });
        }
        ChangeHorror() {
          this.setState({ bHorror: !this.state.bHorror });
        }
        ChangeCute() {
          this.setState({ bCute: !this.state.bCute });
        }
        ApplyAction() {
          return Object(i.a)(this, void 0, void 0, function* () {
            let e = new Array(),
              t = new Array();
            this.state.bAccept
              ? (e.push("halloween2019"), t.push("halloween2019reviewed"))
              : (t.push("halloween2019"), e.push("halloween2019reviewed")),
              this.state.bCute ? e.push("cute") : t.push("cute"),
              this.state.bHorror ? e.push("horror") : t.push("horror");
            try {
              const { eventModel: n } = this.props;
              let a = yield G.Get().UpdateTagsOnPartnerEvent(
                this.m_cancelSignal,
                n.clanSteamID,
                n.AnnouncementGID,
                e,
                t,
                new w().SetUpdateSeasonalTags(
                  this.state.bAccept ? "halloween2019" : "halloween2019reviewed"
                )
              );
              (n.vecTags = a), this.props.closeModal();
            } catch (e) {
              let t = Object(M.a)(e);
              console.error("EventModerationTile " + t.strErrorMsg, t),
                this.setState({ strErrorMsg: t.strErrorMsg });
            }
          });
        }
        render() {
          const { eventModel: e, closeModal: t } = this.props;
          return o.a.createElement(
            J.e,
            {
              strTitle: Object(U.f)("#EventModTile_SeasonalTag"),
              onCancel: t,
              onOK: () => this.setState({ bUpdating: !0 }, this.ApplyAction),
            },
            o.a.createElement(
              o.a.Fragment,
              null,
              o.a.createElement(
                "div",
                { className: ie.CategoryChangeDialog },
                o.a.createElement("input", {
                  id: "Acceptance",
                  type: "checkbox",
                  checked: this.state.bAccept,
                  onChange: this.ChangeAcceptance,
                }),
                o.a.createElement(
                  "label",
                  { htmlFor: "Acceptance" },
                  Object(U.f)("#EventModTile_SeasonalTag_Desc")
                ),
                o.a.createElement(
                  "div",
                  null,
                  Object(U.f)("#EventModTile_SeasonalTag_Desc_Secondary")
                ),
                o.a.createElement("input", {
                  id: "Horror",
                  type: "checkbox",
                  checked: this.state.bHorror,
                  onChange: this.ChangeHorror,
                }),
                o.a.createElement("label", { htmlFor: "Horror" }, "Horror Tag"),
                o.a.createElement("input", {
                  id: "Cute",
                  type: "checkbox",
                  checked: this.state.bCute,
                  onChange: this.ChangeCute,
                }),
                o.a.createElement("label", { htmlFor: "Cute" }, "Cute Tag"),
                this.state.bUpdating &&
                  o.a.createElement(Z.a, { size: "small" }),
                this.state.strErrorMsg &&
                  o.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#Chat_Settings_Error_ServerError"),
                    o.a.createElement("br", null),
                    this.state.strErrorMsg
                  )
              )
            )
          );
        }
      }
      Object(i.b)([oe.a], Se.prototype, "ChangeAcceptance", null),
        Object(i.b)([oe.a], Se.prototype, "ChangeHorror", null),
        Object(i.b)([oe.a], Se.prototype, "ChangeCute", null),
        Object(i.b)([oe.a], Se.prototype, "ApplyAction", null);
      n("sRB7");
      var fe = n("gOcu");
      let Ae = class extends a.Component {
        constructor() {
          super(...arguments),
            (this.state = { bLoadingEvent: !0 }),
            (this.m_cancelSignal = s.a.CancelToken.source());
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("SteamGameFestivalStoreDebug to unload ");
        }
        componentDidMount() {
          return Object(i.a)(this, void 0, void 0, function* () {
            const { clanEventGID: e, clanAccountID: t } = this.props;
            if (
              (console.log(e, t, typeof e, typeof t),
              e && !L.b.BHasClanEventModel(e))
            ) {
              let n = g.a.InitFromClanID(Number.parseInt(t)),
                a = yield L.b.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  n,
                  e,
                  0
                ),
                o = new Array(),
                l = new Array();
              if (a.BHasSaleEnabled()) {
                this.setState({
                  event: a,
                  bLoadingEvent: !1,
                  bLoadingApps: !0,
                  bLoadingDemos: !0,
                  bLoadingAssociatedDemoInfo: !0,
                });
                let e = new Map();
                a.jsondata.sale_sections.forEach((t) => {
                  "tabs" == t.section_type &&
                    t.tabs.forEach((t) => {
                      t.capsules.forEach((t) => {
                        "game" == t.type ||
                        "application" == t.type ||
                        "software" == t.type
                          ? e.has(t.id) || (e.set(t.id, !0), o.push(t.id))
                          : e.has(t.id) || (e.set(t.id, !0), l.push(t.id));
                      });
                    });
                });
                const t = {
                  include_assets: !0,
                  include_screenshots: !0,
                  include_release: !0,
                };
                yield R.a.Get().QueueMultipleAppRequests(o, t),
                  this.setState({
                    rgAppIDs: o,
                    rgUnknownTypeAppIDs: l,
                    bLoadingApps: !1,
                  }),
                  yield R.a.Get().QueueMultipleAppRequests(o, t),
                  this.setState({ bLoadingAssociatedDemoInfo: !1 }),
                  yield fe.a.Get().LoadAppIDsBatch(o, this.m_cancelSignal);
                let n = new Array();
                fe.a
                  .Get()
                  .GetAllDemoInfo()
                  .forEach((e) => n.push(e.demo_appid)),
                  yield R.a.Get().QueueMultipleAppRequests(n, t),
                  this.setState({ bLoadingDemos: !1, rgDemoIDs: n });
              } else this.setState({ bLoadingEvent: !1, rgAppIDs: o });
            } else this.setState({ bLoadingEvent: !1 });
          });
        }
        render() {
          if (
            this.state.bLoadingEvent ||
            this.state.bLoadingDemos ||
            this.state.bLoadingApps ||
            this.state.bLoadingAssociatedDemoInfo
          )
            return a.createElement(Z.a, {
              string:
                Object(U.f)("#Loading") +
                (this.state.bLoadingEvent
                  ? " Events"
                  : this.state.bLoadingApps
                  ? " Apps"
                  : this.state.bLoadingAssociatedDemoInfo
                  ? " Associated Demo Info"
                  : this.state.bLoadingDemos
                  ? " Demos"
                  : "done"),
              position: "center",
            });
          if (!this.state.event)
            return a.createElement("div", null, " Failed to load event");
          const { event: e } = this.state;
          if (!e.jsondata.bSaleEnabled)
            return a.createElement("div", null, "Not a sale event");
          let t = new Map();
          this.state.rgDemoIDs.forEach((e) => t.set(e, !0));
          let n = new Array(),
            o = new Array();
          this.state.rgAppIDs
            .filter((e) => !R.a.Get().GetApp(e))
            .forEach((e) => {
              n.push(
                a.createElement(
                  "div",
                  { key: "missing: " + e },
                  a.createElement(
                    "a",
                    {
                      href: I.d.STORE_BASE_URL + "app/" + e + "/?beta=1",
                      target: "_blank",
                    },
                    e
                  )
                )
              ),
                o.push(e);
            });
          let l = new Array();
          this.state.rgAppIDs
            .filter((e) => R.a.Get().GetApp(e))
            .forEach((e) => {
              if (!t.has(e) && !fe.a.Get().BHasDemoAppID(e)) {
                let t = R.a.Get().GetApp(e);
                l.push(
                  a.createElement(
                    "div",
                    { key: "missingdemo_" + e },
                    1 == (null == t ? void 0 : t.GetAppType()) &&
                      a.createElement(
                        "b",
                        null,
                        "--Error: Sale Page has Demo AppID, based game -- "
                      ),
                    null == t ? void 0 : t.GetName(),
                    " (",
                    e,
                    ")",
                    a.createElement(
                      "a",
                      {
                        href: Object(le.h)(t.GetStorePageURL() + "?beta=0"),
                        target: "_blank",
                      },
                      "Store Page"
                    ),
                    " ",
                    a.createElement(
                      "a",
                      {
                        href: I.d.PARTNER_BASE_URL + "apps/landing/" + e,
                        target: "_blank",
                      },
                      "App Landing Page"
                    )
                  )
                );
              }
            });
          let i = 0,
            r = 0;
          this.state.rgAppIDs.forEach((e) => {
            let t = !1;
            if (R.a.Get().GetApp(e) && fe.a.Get().BHasDemoAppID(e)) {
              let n = fe.a.Get().GetDemoEventInfo(e);
              R.a.Get().GetApp(n.demo_appid).BIsComingSoon()
                ? ((i += 1), (t = !0))
                : (r += 1);
            }
          });
          let s = new Array(),
            c = 0;
          return (
            this.state.rgAppIDs.forEach((e) => {
              const t = R.a.Get().GetApp(e);
              1 != (null == t ? void 0 : t.GetAppType()) && (c += 1);
            }),
            a.createElement(
              P.a,
              null,
              a.createElement(
                "h1",
                null,
                e.GetNameWithFallback(Object(_.l)(I.d.LANGUAGE))
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "Unique AppIDs:"),
                " ",
                this.state.rgAppIDs.length,
                " "
              ),
              a.createElement(
                "div",
                null,
                a.createElement(
                  "b",
                  null,
                  "Visible Apps in ",
                  I.d.COUNTRY,
                  ":"
                ),
                " ",
                c
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "Unknown AppID types:"),
                " ",
                this.state.rgUnknownTypeAppIDs.length
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "Missing AppIDs:"),
                " ",
                " "
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "Demo via DemoStore:"),
                " ",
                fe.a.Get().GetNumDemos()
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "Visible apps missing demo store:"),
                " ",
                l.length
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "CApplications Loaded:"),
                " ",
                " "
              ),
              a.createElement(
                "div",
                null,
                a.createElement(
                  "b",
                  null,
                  "CApplication with Associated Demos:"
                ),
                " ",
                0
              ),
              a.createElement(
                "div",
                null,
                a.createElement(
                  "b",
                  null,
                  "  Associated with store page but not released: "
                ),
                " ",
                0
              ),
              a.createElement(
                "div",
                null,
                a.createElement(
                  "b",
                  null,
                  "CApplication with demo without association:"
                ),
                " ",
                0
              ),
              a.createElement(
                "div",
                null,
                a.createElement(
                  "b",
                  null,
                  "  Released but not associated with store page: "
                ),
                " ",
                0
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "CApplication missing:"),
                " "
              ),
              a.createElement(
                "div",
                null,
                a.createElement(
                  "b",
                  null,
                  "CApplication without demo store and demo associations:"
                ),
                " "
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "Released Demo: "),
                r
              ),
              a.createElement(
                "div",
                null,
                a.createElement("b", null, "Unreleased Demo: "),
                i
              ),
              a.createElement("hr", null),
              a.createElement("h2", null, "Missing Appids:"),
              n,
              a.createElement(
                "h2",
                null,
                "Missing BOTH demo list and associated demo on product page:"
              ),
              s,
              a.createElement(
                "h2",
                null,
                "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):"
              ),
              l
            )
          );
        }
      };
      Ae = Object(i.b)([d.a], Ae);
      class Ce {
        constructor() {
          (this.m_backfill = void 0),
            (this.m_mapEventGIDProcessed = new Map()),
            (this.m_vecEventGID = new Array()),
            (this.m_bBackfillInProgress = !1),
            (this.m_nProcessed = 0),
            (this.m_nSuccesses = 0),
            (this.m_nFailures = 0),
            (this.m_nWarning = 0),
            (this.m_nSkipped = 0);
        }
        GetBackfill() {
          return this.m_backfill;
        }
        SetBackfill(e) {
          this.m_backfill = e;
        }
        StartBackfill(e) {
          (this.m_backfill = e), (this.m_bBackfillInProgress = !0);
        }
        CompleteBackfill(e) {
          (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
        }
        BIsBackkFillInProgress() {
          return this.m_bBackfillInProgress;
        }
        GetEventBackfillProgress() {
          return this.m_mapEventGIDProcessed;
        }
        CreateOrGetBackfillProgess(e) {
          return (
            this.m_mapEventGIDProcessed.has(e) ||
              (this.m_mapEventGIDProcessed.set(e, { bProcessing: !1 }),
              this.m_vecEventGID.push(e)),
            this.m_mapEventGIDProcessed.get(e)
          );
        }
        BHasProgress(e) {
          return this.m_mapEventGIDProcessed.has(e);
        }
        GetBackfillGIDs() {
          return this.m_vecEventGID;
        }
        CloseProgress(e, t) {
          (this.m_nProcessed += 1),
            t.bAlreadyProcessed || t.bSkipped
              ? (this.m_nSkipped += 1)
              : t.bSucceeded
              ? (this.m_nSuccesses += 1)
              : t.bFailed && (this.m_nFailures += 1),
            t.bWarning && (this.m_nWarning += 1),
            this.m_mapEventGIDProcessed.set(e, t);
        }
      }
      Object(i.b)([c.C], Ce.prototype, "m_backfill", void 0),
        Object(i.b)([c.C], Ce.prototype, "m_mapEventGIDProcessed", void 0),
        Object(i.b)([c.C], Ce.prototype, "m_bBackfillInProgress", void 0),
        Object(i.b)([c.C], Ce.prototype, "m_nProcessed", void 0),
        Object(i.b)([c.C], Ce.prototype, "m_nSuccesses", void 0),
        Object(i.b)([c.C], Ce.prototype, "m_nFailures", void 0),
        Object(i.b)([c.C], Ce.prototype, "m_nWarning", void 0),
        Object(i.b)([c.C], Ce.prototype, "m_nSkipped", void 0),
        Object(i.b)([c.k], Ce.prototype, "StartBackfill", null),
        Object(i.b)([c.k], Ce.prototype, "CompleteBackfill", null),
        Object(i.b)([c.k], Ce.prototype, "CloseProgress", null);
      const Te = new Ce();
      var Oe = n("vNkc"),
        ye = n("Nsq5"),
        je = n("mB/g");
      let Me = class extends a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.m_nImageID = 0),
            (this.m_mapArtworkResizeSuccess = new Map()),
            (this.state = { eBackfillState: void 0 });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel(
            "EventBackfillLanding component unmounted"
          );
        }
        OnArtworkResizeBackfill() {
          null == this.state.eBackfillState &&
            this.setState(
              { eBackfillState: "started" },
              this.BeginArtworkResize
            );
        }
        BeginArtworkResize() {
          this.m_mapArtworkResizeSuccess.set("capsule", 0),
            this.m_mapArtworkResizeSuccess.set("spotlight", 0),
            this.m_mapArtworkResizeSuccess.set("background", 0),
            this.RunArtworkResizeBackfill()
              .then(() => this.setState({ eBackfillState: "success" }))
              .catch((e) => {
                let t = Object(M.a)(e);
                console.error(
                  "EventBackfillLanding: error " + t.strErrorMsg,
                  t
                ),
                  this.setState({ eBackfillState: "error" });
              });
        }
        GetImageInfo(e, t, n = "") {
          return Object(i.a)(this, void 0, void 0, function* () {
            const a = S.a.GetExtensionTypeFromURL(t),
              o = S.a.GetHashFromHashAndExt(t) + n;
            return S.e.AsyncGetImageResolution(
              e,
              o,
              a,
              this.m_cancelSignal,
              !0
            );
          });
        }
        HandleErrorFatal(e, t, n, a) {
          let o = Object(M.a)(t),
            l =
              "EventBackfillLanding: " +
              n +
              " on GID " +
              e +
              " : " +
              o.strErrorMsg;
          console.error(l, o),
            a
              ? ((a.bFailed = !0), (a.strMessage = l), Te.CloseProgress(e, a))
              : Te.CompleteBackfill("resize_image");
        }
        HandleResizeForImageType(e, t, n, a, o) {
          return Object(i.a)(this, void 0, void 0, function* () {
            for (let l = 0; l < e.length && l < 30; ++l)
              if (e[l] && e[l].length > 0) {
                let i = e[l],
                  r = S.a.GetExtensionTypeFromURL(i);
                const s = new g.a(t.clan_steamid);
                if (r) {
                  let e = yield this.GetImageInfo(s, i).catch(
                    (e) => (
                      this.HandleErrorFatal(
                        null,
                        e,
                        "GetImageInfo Original",
                        n
                      ),
                      { height: 0, width: 0, success: 2 }
                    )
                  );
                  if (1 == e.success && Object(ye.d)(e.width, e.height, a)) {
                    if (
                      1 ==
                      (yield this.GetImageInfo(s, i, o).catch(
                        (e) => (
                          this.HandleErrorFatal(
                            null,
                            e,
                            "GetImageInfo Resize",
                            n
                          ),
                          { height: 0, width: 0, success: 2 }
                        )
                      )).success
                    )
                      n.bAlreadyProcessed = !0;
                    else {
                      n.bProcessing = !0;
                      let e = S.a.GetHashFromHashAndExt(i),
                        t = S.a.GetExtensionStringFromHashAndExt(i),
                        o = S.d.GetResizeDimension(a);
                      yield S.b
                        .SendResizeRequest(this.m_cancelSignal, s, e, t, o)
                        .then((e) => {
                          console.log("success on the resize request"),
                            e == o.length
                              ? ((n.bSucceeded = !0),
                                this.m_mapArtworkResizeSuccess.set(
                                  a,
                                  this.m_mapArtworkResizeSuccess.get(a) + 1
                                ))
                              : ((n.bFailed = !0),
                                (n.strMessage =
                                  "Did not resize all: " +
                                  a +
                                  " " +
                                  e +
                                  " / " +
                                  o.length));
                        })
                        .catch((e) => {
                          n.bFailed = !0;
                          let t = Object(M.a)(e);
                          (n.strMessage = t.strErrorMsg),
                            console.error("Resize: " + t.strErrorMsg, t);
                        });
                    }
                  } else n.bSkipped = !0;
                } else n.bSkipped = !0;
              }
          });
        }
        RunArtworkResizeBackfill() {
          return Object(i.a)(this, void 0, void 0, function* () {
            Te.StartBackfill("resize_image");
            let e = 0;
            for (; Te.BIsBackkFillInProgress(); ) {
              let t = yield D.Get()
                .LoadPartnerEventForQueryIncremental(this.m_cancelSignal, e, 25)
                .catch((e) =>
                  this.HandleErrorFatal(
                    null,
                    e,
                    "LoadPartnerEventForQueryIncremental"
                  )
                );
              if (!t || 0 == t.length) {
                Te.CompleteBackfill("resize_image"),
                  console.log("Compelted the backfill");
                break;
              }
              e += t.length;
              for (let e = 0; e < t.length; ++e) {
                let n = t[e],
                  a = Te.CreateOrGetBackfillProgess(n.unique_id);
                if (!n.announcement_gid || 0 == n.announcement_gid.length) {
                  (a.bSkipped = !0),
                    (a.bWarning = !0),
                    Te.CloseProgress(n.unique_id, a);
                  continue;
                }
                if (
                  (yield L.b
                    .LoadPartnerEventFromAnnoucementGID(
                      Number(n.appid),
                      n.announcement_gid,
                      100
                    )
                    .catch((e) => {
                      this.HandleErrorFatal(
                        n.announcement_gid,
                        e,
                        "LoadPartnerEventFromAnnoucementGID",
                        a
                      );
                    }),
                  a.bFailed)
                )
                  continue;
                let o = L.b.GetClanEventFromAnnouncementGID(n.announcement_gid);
                if (o)
                  if (a.bSucceeded || a.bFailed || a.bAlreadyProcessed)
                    (a.bAlreadyProcessed = !0),
                      Te.CloseProgress(n.unique_id, a);
                  else {
                    if (
                      ((a.bAnalysing = !0),
                      this.setState({
                        strInfo:
                          "Processing " +
                          Te.GetBackfillGIDs().length +
                          " Appid: " +
                          o.appid +
                          " Event " +
                          o.GID +
                          " Title: " +
                          o.GetNameWithFallback(0),
                      }),
                      o.jsondata && o.jsondata.localized_capsule_image)
                    ) {
                      let e = o.jsondata.localized_capsule_image;
                      yield this.HandleResizeForImageType(
                        e,
                        n,
                        a,
                        "capsule",
                        S.c.capsule_main
                      ).catch((e) =>
                        this.HandleErrorFatal(
                          null,
                          e,
                          "HandleResizeForImageType capsule",
                          a
                        )
                      );
                    }
                    if (o.jsondata && o.jsondata.localized_title_image) {
                      let e = o.jsondata.localized_title_image;
                      yield this.HandleResizeForImageType(
                        e,
                        n,
                        a,
                        "background",
                        S.c.background_mini
                      ).catch((e) =>
                        this.HandleErrorFatal(
                          null,
                          e,
                          "HandleResizeForImageType background",
                          a
                        )
                      );
                    }
                    if (o.jsondata && o.jsondata.localized_spotlight_image) {
                      let e = o.jsondata.localized_spotlight_image;
                      yield this.HandleResizeForImageType(
                        e,
                        n,
                        a,
                        "spotlight",
                        S.c.spotlight_main
                      ).catch((e) =>
                        this.HandleErrorFatal(
                          null,
                          e,
                          "HandleResizeForImageType spotlight",
                          a
                        )
                      );
                    }
                    if (
                      (Te.CloseProgress(n.unique_id, a),
                      !Te.BIsBackkFillInProgress())
                    )
                      break;
                  }
                else
                  (a.bFailed = !0),
                    (a.strMessage = "Failed to load the event: " + n.unique_id),
                    Te.CloseProgress(n.unique_id, a);
              }
              if (Te.m_nFailures > 5e3) {
                console.log("Hit too many errors, stoppinng the backfill");
                break;
              }
            }
          });
        }
        RenderFailure() {
          let e = new Array();
          return (
            Te.m_nFailures > 0 &&
              Te.GetBackfillGIDs().forEach((t) => {
                let n = Te.GetEventBackfillProgress().get(t);
                if (n && n.bFailed) {
                  let o = L.b.GetClanEventModel(t);
                  o &&
                    e.push(
                      a.createElement(
                        "div",
                        { key: t },
                        a.createElement(
                          je.c,
                          { eventModel: o, route: je.a.k_eView },
                          o.GetNameWithFallback(0)
                        ),
                        a.createElement(
                          "div",
                          { className: Oe.Error },
                          n.strMessage
                        )
                      )
                    );
                }
              }),
            e
          );
        }
        RenderResizeProgress() {
          let e = new Array();
          return (
            e.push(
              a.createElement(
                "div",
                { key: "res_capsule" },
                "Capsule Resized: ",
                this.m_mapArtworkResizeSuccess.get("capsule"),
                " "
              )
            ),
            e.push(
              a.createElement(
                "div",
                { key: "res_header" },
                "Header Resized: ",
                this.m_mapArtworkResizeSuccess.get("background"),
                " "
              )
            ),
            e.push(
              a.createElement(
                "div",
                { key: "res_spotlightr" },
                "Spotlight Resized: ",
                this.m_mapArtworkResizeSuccess.get("spotlight"),
                " "
              )
            ),
            e
          );
        }
        render() {
          let e = this.RenderFailure(),
            t = this.m_mapArtworkResizeSuccess.has("capsule")
              ? this.RenderResizeProgress()
              : void 0;
          return a.createElement(
            "div",
            null,
            a.createElement(
              "h2",
              null,
              "Partner Events Backfill Processing Page"
            ),
            null == this.state.eBackfillState &&
              a.createElement(
                "div",
                null,
                a.createElement(
                  "button",
                  { onClick: this.OnArtworkResizeBackfill },
                  "Begin Artwork Resize Backfill"
                )
              ),
            a.createElement(
              "div",
              null,
              a.createElement(
                "button",
                { onClick: () => Te.CompleteBackfill("resize_image") },
                "Stop Backfill"
              )
            ),
            this.state.strInfo &&
              a.createElement("div", null, "Processing: ", this.state.strInfo),
            a.createElement("div", null, "Events Processed: ", Te.m_nProcessed),
            a.createElement("div", null, "Events Succeeded: ", Te.m_nSuccesses),
            a.createElement("div", null, "Events Warning: ", Te.m_nWarning),
            a.createElement("div", null, "Events Failed: ", Te.m_nFailures),
            a.createElement("div", null, "Events Skipped: ", Te.m_nSkipped),
            e.length > 0 &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement("h2", null, "Failure Info"),
                e
              ),
            Boolean(t) &&
              a.createElement(
                "div",
                null,
                a.createElement("h2", null, "Resizing Actions"),
                t
              ),
            "started" == this.state.eBackfillState &&
              a.createElement(Z.a, {
                size: "medium",
                position: "center",
                string: "Backfill In Progress",
              })
          );
        }
      };
      Object(i.b)([oe.a], Me.prototype, "OnArtworkResizeBackfill", null),
        Object(i.b)([oe.a], Me.prototype, "BeginArtworkResize", null),
        (Me = Object(i.b)([d.a], Me));
      var Ie = n("6AJf"),
        De = n("9w6b"),
        ke = (n("MUT6"), n("BVKn")),
        we = n("YWVM"),
        Ge = n("r3N9"),
        Le = n("SdTr"),
        Re = n("YNty"),
        Be = n("6eA3"),
        Pe = n.n(Be),
        Ne = n("A8Lc"),
        Fe = n.n(Ne);
      class Ue {
        constructor() {
          (this.m_objApprovalPriviledge = null),
            (this.m_LoadingPriviledgePromise = null);
          let e = Object(I.h)("sc_app_privildge", "application_config");
          this.ValidateStoreDefault(e)
            ? ("dev" === I.d.WEB_UNIVERSE &&
                console.log(
                  "DEV_DEBUG: CSteamChinaStore: Loading payload from data-*, bHasAccess: " +
                    e.bHasAccess
                ),
              (this.m_objApprovalPriviledge = e),
              (this.m_LoadingPriviledgePromise = null))
            : (I.k.logged_in && I.d.EREALM === _.h.k_ESteamRealmChina) ||
              (this.m_objApprovalPriviledge = { bHasAccess: !1 });
        }
        BHasSteamChinaAppApprovalPriviledge() {
          var e;
          return null === (e = this.m_objApprovalPriviledge) || void 0 === e
            ? void 0
            : e.bHasAccess;
        }
        HintLoadAppApprovalPriviledge() {
          return Object(i.a)(this, void 0, void 0, function* () {
            return this.m_objApprovalPriviledge
              ? this.m_objApprovalPriviledge
              : (this.m_LoadingPriviledgePromise ||
                  (this.m_LoadingPriviledgePromise = this.InternalLoadAppApprovalPriviledge()),
                this.m_LoadingPriviledgePromise);
          });
        }
        InternalLoadAppApprovalPriviledge() {
          var e;
          return Object(i.a)(this, void 0, void 0, function* () {
            const t =
              I.d.STORE_BASE_URL + "events_admin/ajaxgetscapprovalpriviledge";
            try {
              const n = yield s.a.get(t, { withCredentials: !0 });
              if (
                1 ==
                (null === (e = null == n ? void 0 : n.data) || void 0 === e
                  ? void 0
                  : e.success)
              )
                return (
                  (this.m_objApprovalPriviledge = {
                    bHasAccess: n.data.bHasAccess,
                  }),
                  this.m_objApprovalPriviledge
                );
            } catch (e) {
              const t = Object(M.a)(e);
              console.error(
                "CCuratorListStore.InternalLoadAppApprovalPriviledge: error on load: " +
                  t.strErrorMsg,
                t
              );
            }
            return { bHasAccess: !1 };
          });
        }
        static Get() {
          return Ue.s_Singleton || (Ue.s_Singleton = new Ue()), Ue.s_Singleton;
        }
        ValidateStoreDefault(e) {
          return e && "object" == typeof e && "boolean" == typeof e.bHasAccess;
        }
      }
      Object(i.b)([c.C], Ue.prototype, "m_objApprovalPriviledge", void 0);
      const He = Object(d.a)((e) => {
          const [t, n] = a.useState(null),
            { eventModel: o } = e;
          let l = o.clanSteamID.GetAccountID();
          a.useEffect(() => {
            const e = s.a.CancelToken.source();
            return (
              Object(i.a)(void 0, void 0, void 0, function* () {
                const t = g.a.InitFromClanID(l),
                  a = yield De.a.Get().LoadSingleAppEventPermissions(t),
                  o = yield Ue.Get().HintLoadAppApprovalPriviledge();
                e.token.reason ||
                  n(I.k.is_support || a.can_edit || o.bHasAccess);
              }),
              () => e.cancel("SteamChinaAdminPanel is unmounting")
            );
          }, [l]);
          const r = g.a.InitFromClanID(l);
          return I.k.is_support ||
            De.a.Get().GetPartnerEventPermissions(r).can_edit
            ? a.createElement(we.a, {
                eventModel: o,
                partnerEventStore: e.partnerEventStore,
                addtionalAdminButtons: t
                  ? [
                      a.createElement(xe, {
                        key: "removesteamchina",
                        eventModel: o,
                      }),
                    ]
                  : void 0,
              })
            : Ue.Get().BHasSteamChinaAppApprovalPriviledge()
            ? a.createElement(
                "div",
                { className: Be.DisplayAdminPanel },
                a.createElement(
                  "span",
                  { className: Be.DisplayAdminPanel_Title },
                  Object(U.f)("#EventDisplay_Admin_Title")
                ),
                a.createElement(xe, { key: "removesteamchina", eventModel: o })
              )
            : null;
        }),
        xe = (e) => {
          const { eventModel: t } = e;
          return a.createElement(
            "div",
            {
              className: Object(ne.a)(
                Q.Button,
                Be.AdminButton,
                Q.ValveOnlyBackground
              ),
              onClick: (n) => {
                let o = !1;
                Object(X.d)(
                  a.createElement(
                    J.e,
                    {
                      strTitle: Object(U.f)(
                        "#EventAdmin_Moderation_HideEventInSC"
                      ),
                      strDescription: Object(U.f)(
                        "#EventAdmin_Moderation_HideEventInSC_Desc"
                      ),
                      bDestructiveWarning: !0,
                      closeModal: e.closeModal,
                      onOK: () => {
                        (o = !0),
                          Object(i.a)(void 0, void 0, void 0, function* () {
                            var n, o, l, i;
                            let r = new URLSearchParams();
                            r.append("sessionid", I.d.SESSIONID),
                              r.append(
                                "clan_accountid",
                                "" + t.clanSteamID.GetAccountID()
                              ),
                              r.append("gid_clan_event", "" + t.GID);
                            let c = !1,
                              d = 0;
                            try {
                              const e = `${I.d.STORE_BASE_URL}/events_admin/ajaxhidefromsteamchina`,
                                a = yield s.a.post(e, r, {
                                  withCredentials: !0,
                                });
                              (c =
                                1 ==
                                  (null === (n = null == a ? void 0 : a.data) ||
                                  void 0 === n
                                    ? void 0
                                    : n.success) ||
                                29 ==
                                  (null === (o = null == a ? void 0 : a.data) ||
                                  void 0 === o
                                    ? void 0
                                    : o.success)),
                                29 ==
                                  (null === (l = null == a ? void 0 : a.data) ||
                                  void 0 === l
                                    ? void 0
                                    : l.success) &&
                                  console.warn(
                                    `RemoveEventFromSteamChinaButton: we receive duplicate request ${t.clanSteamID.GetAccountID()} : ${
                                      t.GID
                                    }; event is still removed from SC`
                                  ),
                                (d =
                                  null === (i = null == a ? void 0 : a.data) ||
                                  void 0 === i
                                    ? void 0
                                    : i.success);
                            } catch (e) {
                              const t = Object(M.a)(e);
                              (d = t.errorCode),
                                console.error(
                                  "RemoveEventFromSteamChinaButton: error " +
                                    t.strErrorMsg,
                                  t
                                );
                            }
                            e.closeModal && e.closeModal(),
                              Object(X.d)(
                                c
                                  ? a.createElement(
                                      J.e,
                                      { bAlertDialog: !0 },
                                      Object(U.f)("#EventDisplay_Share_Success")
                                    )
                                  : a.createElement(
                                      J.g,
                                      null,
                                      Object(U.f)(
                                        "#EventDisplay_Share_Failure"
                                      ) +
                                        " " +
                                        d
                                    ),
                                window
                              );
                          });
                      },
                    },
                    o &&
                      a.createElement(Z.a, {
                        size: "medium",
                        position: "center",
                      })
                  ),
                  Object(ae.o)(n)
                );
              },
            },
            Object(U.f)("#EventAdmin_Moderation_HideEventInSC")
          );
        };
      var ze = n("b3LC");
      const We = ke.a.Get();
      function Ve() {
        document.body.classList.contains("events_hub") &&
          document.body.classList.remove("events_hub");
      }
      const qe = Object(d.a)((e) => {
        const {
            bInfiniteScroll: t,
            event_gid: n,
            announcement_gid: l,
            clansteamid: i,
            appid: r,
          } = e,
          [c, d] = Object(a.useState)(n ? We.GetClanEventModel(n) : void 0),
          [m] = Object(ze.b)(null == c ? void 0 : c.appid, {
            include_assets: !0,
            include_release: !0,
            include_platforms: !0,
          }),
          [u, v] = Object(a.useState)(!1),
          p = (e, t) => {
            t.token.reason ||
              (d(e),
              (function (e) {
                var t;
                let n;
                if (e && e.appid)
                  n =
                    null === (t = R.a.Get().GetApp(e.appid)) || void 0 === t
                      ? void 0
                      : t.GetName();
                else if (e && e.clanSteamID) {
                  const t = f.a.GetClanInfoByClanAccountID(
                    e.clanSteamID.GetAccountID()
                  );
                  n = t && t.group_name;
                }
                const a = e && e.GetNameWithFallback(Object(j.g)(I.d.LANGUAGE));
                if (e && n && a) {
                  const e = Object(U.f)(
                    "#EventCalendar_TabTitle_GroupNameAndEventDetail",
                    n,
                    a
                  );
                  document.title != e && (document.title = e);
                }
              })(e));
          },
          E = (e) => {
            const t = Object(M.a)(e);
            console.error("StoreEventDetailView failed " + t.strErrorMsg, t),
              v(!0);
          };
        if (
          (Object(a.useEffect)(Ve, []),
          Object(a.useEffect)(() => {
            const e = s.a.CancelToken.source();
            return (
              c ||
                (n && !We.GetClanEventModel(n)
                  ? We.LoadPartnerEventGeneric(i, r, n, void 0, 0)
                      .then((t) => p(t, e))
                      .catch(() => {
                        e.token.reason ||
                          We.LoadPartnerEventGeneric(i, r, void 0, n, 0)
                            .then((t) => p(t, e))
                            .catch(E);
                      })
                  : l &&
                    !We.GetClanEventGIDFromAnnouncementGID(l) &&
                    We.LoadPartnerEventGeneric(i, r, void 0, l, 0)
                      .then((t) => p(t, e))
                      .catch(E)),
              () => {
                e.cancel("StoreEventDetailView: unmounting");
              }
            );
          }, [n, i, r, l, c]),
          u || !c || ((null == c ? void 0 : c.appid) && !m))
        ) {
          const e = "lang_" + Object(j.e)(Object(j.g)(I.d.LANGUAGE)),
            t = "";
          return o.a.createElement(
            "div",
            {
              className: Object(ne.a)(
                Pe.a.EventDetailsPageContainer,
                e,
                K.a.PartnerEventFont,
                Pe.a.NoTitleArtwork
              ),
            },
            o.a.createElement("div", { style: { height: "100px" } }),
            o.a.createElement(Re.a, { strImageURL: t }),
            o.a.createElement(Re.b, {
              strImageURL: t,
              body: u
                ? o.a.createElement(
                    "div",
                    { className: Fe.a.ErrorMsg },
                    Object(U.m)(
                      "#Events_FailedToFind",
                      o.a.createElement(
                        "a",
                        { href: I.d.STORE_BASE_URL + "news/" },
                        Object(U.f)("#EventDisplay_NewsHubSubtitle")
                      )
                    )
                  )
                : o.a.createElement(Z.a, {
                    string: Object(U.f)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
              postbody: Boolean(u && i)
                ? o.a.createElement(Le.a, {
                    clanAccountID: i.GetAccountID(),
                    partnerEventStore: We,
                  })
                : void 0,
            })
          );
        }
        return t
          ? o.a.createElement(
              P.a,
              null,
              o.a.createElement(Ge.a, {
                appid: c.appid,
                trackingLocation: 7,
                announcementGID: c.GetAnnouncementGID(),
                partnerEventStore: We,
                eventModel: c,
                showAppHeader: !0,
                closeModal: () =>
                  e.history.push(
                    Object(je.e)(c, je.a.k_eStoreNewsHub, "allowRelative")
                  ),
              })
            )
          : o.a.createElement(
              P.a,
              null,
              o.a.createElement(Re.c, {
                lang: Object(j.g)(I.d.LANGUAGE),
                partnerEventStore: We,
                event: c,
                adminPanel:
                  I.d.EREALM === _.h.k_ESteamRealmChina
                    ? o.a.createElement(He, { eventModel: c })
                    : o.a.createElement(we.a, {
                        eventModel: c,
                        partnerEventStore: We,
                      }),
                otherEventRow: o.a.createElement(Le.a, {
                  clanAccountID: c.clanSteamID.GetAccountID(),
                  gidAnnouncement: c.AnnouncementGID,
                  partnerEventStore: We,
                }),
              })
            );
      });
      var Qe = Object(E.j)(qe),
        Ke = n("WBba"),
        Ye = n("qD+2"),
        Je = (n("RD/U"), n("5izx")),
        $e = n("ykc/"),
        Xe = n("av+R"),
        Ze = n("qDk6"),
        et = n("j+5p"),
        tt = (n("kKgT"), n("hwrv")),
        nt = n("apHd"),
        at = n("xnZ7"),
        ot = n.n(at),
        lt = n("6Y59"),
        it = n("r+ba");
      class rt extends o.a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              events: null,
              bShowModal: !1,
              modalInitialEvent: null,
              bPreLoaded: !1,
              announcementGIDList: [],
              last_update_event: null,
            });
          const t = Object(nt.a)("EventWebRowEmbed");
          this.ValidateStoreDefault(t) &&
            ((this.state.bPreLoaded = t.bPreLoaded),
            (this.state.announcementGIDList = t.announcementGIDList),
            (this.state.last_update_event = t.last_update_event),
            (this.state.events = []),
            this.state.announcementGIDList.forEach((e) => {
              const t = L.b.GetClanEventFromAnnouncementGID(e);
              t && this.state.events.push(t);
            }));
        }
        componentDidMount() {
          return Object(i.a)(this, void 0, void 0, function* () {
            const {
              appid: e,
              event_customization: t,
              partnerEventStore: n,
              trackingLocation: a,
            } = this.props;
            if (!this.state.bPreLoaded) {
              const o = yield n.LoadAdjacentPartnerEvents(
                null,
                null,
                e,
                0,
                2,
                t
              );
              if ((this.setState({ events: o }), a && o && o.length > 0)) {
                const e = De.a.Get().GetTracker();
                this.state.events
                  .filter((e) => e.BIsPartnerEvent())
                  .forEach((t) =>
                    e.MarkEventShown(t.GID, t.clanSteamID.GetAccountID(), a)
                  ),
                  e.Flush();
              }
            }
            window.fnPartnerEvent_ShowInfiniteScroll = (e, t) => {
              this.setState({
                bShowModal: !0,
                announcementGID: t,
                modalInitialEvent: void 0,
              });
            };
          });
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !(!t || "object" != typeof t) &&
            void 0 !== t.bPreLoaded &&
            "boolean" == typeof t.bPreLoaded &&
            Array.isArray(t.announcementGIDList)
          );
        }
        ShowModal(e) {
          const { trackingLocation: t } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: e,
            announcementGID: void 0,
          });
          const n = De.a.Get().GetTracker();
          e &&
            e.BIsPartnerEvent() &&
            n.MarkEventRead(e.GID, e.clanSteamID.GetAccountID(), t) &&
            n.Flush();
        }
        ShowLatestUpdateModal() {
          const {
              event_gid: e,
              announcement_gid: t,
              clan_account_id: n,
            } = this.state.last_update_event,
            { trackingLocation: a } = this.props;
          this.setState({
            bShowModal: !0,
            modalInitialEvent: void 0,
            announcementGID: t,
          });
          const o = De.a.Get().GetTracker();
          e && o.MarkEventRead(e, n, a) && o.Flush();
        }
        CloseModal() {
          this.setState({ bShowModal: !1, modalInitialEvent: null });
        }
        BHasLastUpdateEvent() {
          var e;
          return Boolean(
            null === (e = this.state.last_update_event) || void 0 === e
              ? void 0
              : e.rtime
          );
        }
        BShouldShowLastUpdateEvent() {
          const { last_update_event: e, events: t } = this.state;
          return (
            !(
              !this.BHasLastUpdateEvent() ||
              !(null == e ? void 0 : e.announcement_gid)
            ) && !(null == t ? void 0 : t.length)
          );
        }
        render() {
          var e;
          const t = this.state.events;
          if (!t)
            return o.a.createElement(
              "div",
              { className: ot.a.FlexCenter },
              o.a.createElement(Z.a, { size: "medium", position: "center" })
            );
          const n = window.screen.width <= 500 ? 1 : 2,
            a = Boolean(null == t ? void 0 : t.length),
            l = this.BHasLastUpdateEvent(),
            i = this.BShouldShowLastUpdateEvent()
              ? this.state.last_update_event.announcement_gid
              : void 0,
            { strClassName: r } = this.props;
          return o.a.createElement(
            Xe.e,
            { className: r },
            this.state.bShowModal &&
              o.a.createElement(
                st,
                Object.assign({}, this.props, {
                  announcementGID:
                    this.state.announcementGID ||
                    (null === (e = this.state.modalInitialEvent) || void 0 === e
                      ? void 0
                      : e.AnnouncementGID),
                  eventModel: this.state.modalInitialEvent,
                  closeModal: this.CloseModal,
                })
              ),
            a &&
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "h2",
                  null,
                  Object(U.f)("#EventBrowse_RecentEvents")
                ),
                !I.d.IN_GAMEPADUI &&
                  o.a.createElement(
                    "div",
                    { className: it.SectionButtonCtn },
                    this.props.bViewAllShowInfiniteScroll
                      ? o.a.createElement(
                          Xe.e,
                          {
                            className: it.SectionButton,
                            onClick: () => this.ShowModal(t[0]),
                          },
                          Object(U.f)("#EventBrowse_MoreEventsBtn")
                        )
                      : o.a.createElement(
                          je.c,
                          {
                            eventModel: t[0],
                            route: je.a.k_eViewWebSiteHub,
                            className: it.SectionButton,
                          },
                          Object(U.f)("#EventBrowse_MoreEventsBtn")
                        )
                  ),
                o.a.createElement(
                  "div",
                  { className: it.EventsSummariesCtn },
                  t.slice(0, n).map((e) => {
                    const n =
                      1 === t.length && window.screen.width > 500 ? Le.c : Le.b;
                    return o.a.createElement(n, {
                      key: e.GID,
                      event: e,
                      onClick: (t) => {
                        this.ShowModal(e),
                          t.stopPropagation(),
                          t.preventDefault();
                      },
                    });
                  })
                )
              ),
            Boolean(l && i) &&
              o.a.createElement(dt, {
                nUpdateTime: this.state.last_update_event.rtime,
                announcementGID: i,
                onClick: this.ShowLatestUpdateModal,
              }),
            Boolean(l && !i && !I.d.IN_GAMEPADUI) &&
              o.a.createElement(ct, {
                nUpdateTime: this.state.last_update_event.rtime,
                onClick: this.ShowLatestUpdateModal,
              })
          );
        }
      }
      function st(e) {
        const {
          appid: t,
          partnerEventStore: n,
          trackingLocation: a,
          announcementGID: l,
          eventModel: i,
          closeModal: r,
        } = e;
        return o.a.createElement(Ge.a, {
          classname: I.d.IN_GAMEPADUI ? void 0 : it.StoreHeaderAdjust,
          eventClassName: I.d.IN_GAMEPADUI ? it.GamePadUIWidthAdjust : void 0,
          appid: t,
          trackingLocation: a,
          announcementGID: l,
          partnerEventStore: n,
          eventModel: i,
          closeModal: r,
        });
      }
      function ct(e) {
        return o.a.createElement(
          "div",
          { className: it.LatestUpdateButtonCtn },
          o.a.createElement(
            "div",
            { className: it.LatestUpdateIcon },
            o.a.createElement(lt.wb, null)
          ),
          o.a.createElement(
            Xe.e,
            { className: it.LatestUpdateButton, onClick: e.onClick },
            Object(U.f)(
              "#EventBrowse_LatestUpdateTime_Button",
              Object(U.o)(e.nUpdateTime)
            )
          )
        );
      }
      function dt(e) {
        const { nUpdateTime: t, announcementGID: n, onClick: a } = e,
          l = n ? L.b.GetClanEventFromAnnouncementGID(n) : null,
          i = (e) => {
            null == a || a(), e.stopPropagation(), e.preventDefault();
          };
        return o.a.createElement(
          "div",
          null,
          o.a.createElement(
            "h2",
            null,
            Object(U.f)("#EventBrowse_LastUpdateDate", Object(U.o)(t))
          ),
          o.a.createElement(
            "div",
            { className: it.SectionButtonCtn },
            o.a.createElement(
              "div",
              { className: it.SectionButton, onClick: i },
              Object(U.f)("#EventBrowse_ViewLatestUpdate")
            )
          ),
          Boolean(l) &&
            o.a.createElement(
              Ze.a,
              {
                className: it.EventsSummariesCtn,
                "flow-children": "column",
                navEntryPreferPosition: et.d.PREFERRED_CHILD,
              },
              o.a.createElement(Le.c, { event: l, onClick: i })
            )
        );
      }
      Object(i.b)([oe.a], rt.prototype, "ShowModal", null),
        Object(i.b)([oe.a], rt.prototype, "ShowLatestUpdateModal", null),
        Object(i.b)([oe.a], rt.prototype, "CloseModal", null);
      var mt = n("2l+k");
      class ut {
        constructor() {
          this.m_rgRSSEnabledClans = [];
        }
        GetAllRSSEnabledClans() {
          return this.m_rgRSSEnabledClans;
        }
        GetTrustedEnabledClans(e) {
          return this.m_rgRSSEnabledClans
            .filter((t) => t.is_trusted_press == e)
            .map((e) => e.clan_accoundid);
        }
        static Get() {
          return (
            ut.s_Singleton ||
              ((ut.s_Singleton = new ut()), ut.s_Singleton.Init()),
            ut.s_Singleton
          );
        }
        Init() {
          let e = Object(I.h)("rssaccountinfo", "application_config");
          this.ValidateRSSAccountConfig(e) && (this.m_rgRSSEnabledClans = e);
        }
        ValidateRSSAccountConfig(e) {
          const t = e;
          return (
            t &&
            Array.isArray(t) &&
            t.length > 0 &&
            "object" == typeof t[0] &&
            "number" == typeof t[0].clan_accoundid
          );
        }
        LoadKnownAllRSSInfo() {
          return Object(i.a)(this, void 0, void 0, function* () {
            const e = new Array(),
              t = mt.a.Get();
            this.m_rgRSSEnabledClans.forEach((n) => {
              t.BHasClanIDLoaded(n.clan_accoundid) ||
                e.push(t.QueueCuratorAdminInfoLoad(n.clan_accoundid));
            }),
              yield Promise.all(e);
          });
        }
        ExtractWithoutRSSAutomation() {
          const e = [],
            t = mt.a.Get();
          return (
            this.m_rgRSSEnabledClans.forEach((n) => {
              const a = t.GetRSSAdminForClanAccountID(n.clan_accoundid);
              a && !a.BIsAutomationEnabled() && e.push(n.clan_accoundid);
            }),
            e
          );
        }
        HintLoadAccounts() {
          return Object(i.a)(this, void 0, void 0, function* () {});
        }
        ReindexClanEventsAndReloadAccount(e) {
          var t;
          return Object(i.a)(this, void 0, void 0, function* () {
            const n =
                I.d.STORE_BASE_URL + "events_admin/ajaxflushandreindexrss",
              a = new FormData();
            a.set("sessionid", I.d.SESSIONID), a.append("clanids", "" + e);
            try {
              let e = yield s.a.post(n, a, { withCredentials: !0 });
              if (
                1 ==
                (null === (t = null == e ? void 0 : e.data) || void 0 === t
                  ? void 0
                  : t.success)
              )
                return !0;
            } catch (e) {
              const t = Object(M.a)(e);
              console.error(
                "Failed to ReindexClanEventsAndReloadAccount: " + t.strErrorMsg,
                t
              );
            }
            return !1;
          });
        }
      }
      var vt = n("wjMc"),
        pt = n("BRUS"),
        Et = n("uuth"),
        ht = n("WGPV"),
        _t = n.n(ht);
      n("uobO");
      const bt = Object(E.j)((e) => {
          const [t, n] = Object(a.useState)(!0);
          if (
            (Object(a.useEffect)(() => {
              Object(i.a)(void 0, void 0, void 0, function* () {
                f.a.Init(), yield ut.Get().HintLoadAccounts(), n(!1);
              });
            }, []),
            t)
          )
            return o.a.createElement(Z.a, {
              string: Object(U.f)("#Loading"),
              size: "medium",
            });
          const l = ut.Get().GetTrustedEnabledClans(!0),
            r = ut.Get().GetTrustedEnabledClans(!1);
          return o.a.createElement(
            "div",
            null,
            o.a.createElement(
              P.a,
              null,
              o.a.createElement(
                "h1",
                null,
                Object(U.f)("#RSSModeration_Title")
              ),
              o.a.createElement(gt, null),
              o.a.createElement(Tt, {
                rgClanIDs: ut
                  .Get()
                  .GetAllRSSEnabledClans()
                  .map((e) => e.clan_accoundid),
              }),
              o.a.createElement(St, {
                rgClanIDs: l,
                strTitle: Object(U.f)("#RSSModeration_TrustTitle"),
              }),
              o.a.createElement(St, {
                rgClanIDs: r,
                strTitle: Object(U.f)("#RSSModeration_RestTitle"),
              })
            )
          );
        }),
        gt = Object(d.a)((e) => {
          const [t, n] = Object(a.useState)(!1),
            [l, r] = Object(a.useState)(void 0);
          return t
            ? o.a.createElement(Z.a, {
                string: Object(U.f)("#Loading"),
                size: "medium",
              })
            : void 0 !== l
            ? Boolean(l.length > 0)
              ? o.a.createElement(St, {
                  rgClanIDs: l,
                  strTitle: Object(U.f)("#RSSModeration_InactiveAutomation"),
                })
              : o.a.createElement(
                  "div",
                  null,
                  Object(U.f)("#RSSModreation_AllAutomationEnabled")
                )
            : o.a.createElement(
                B.d,
                {
                  onClick: () =>
                    Object(i.a)(void 0, void 0, void 0, function* () {
                      n(!0),
                        yield ut.Get().LoadKnownAllRSSInfo(),
                        r(ut.Get().ExtractWithoutRSSAutomation()),
                        n(!1);
                    }),
                },
                Object(U.f)("#RSSModeration_FindInActive"),
                " "
              );
        }),
        St = (e) => {
          const { rgClanIDs: t, strTitle: n } = e,
            [l, i] = Object(a.useState)(!1);
          let r = null;
          return (
            l ||
              (r = t.map((e) =>
                o.a.createElement(ft, { key: e, clanAccountID: e })
              )),
            o.a.createElement(
              "div",
              { className: Object(ne.a)(_t.a.SectionContainer) },
              o.a.createElement(
                "h2",
                {
                  className: Object(ne.a)(_t.a.ModSectionTitle),
                  onDoubleClick: () => i(!l),
                },
                n,
                o.a.createElement("span", null, " "),
                o.a.createElement(
                  B.d,
                  { className: _t.a.ResizeButton, onClick: () => i(!l) },
                  l
                    ? o.a.createElement(lt.Q, null)
                    : o.a.createElement(lt.T, null)
                )
              ),
              l &&
                o.a.createElement(
                  B.d,
                  { onClick: () => i(!1) },
                  Object(U.f)("#Sale_ShowContents")
                ),
              r
            )
          );
        },
        ft = Object(d.a)((e) => {
          const { clanAccountID: t } = e;
          return f.a.BHasClanInfoLoadedByAccountID(t) &&
            mt.a.Get().BHasClanIDLoaded(t)
            ? o.a.createElement(Ct, {
                clanInfo: f.a.GetClanInfoByClanAccountID(t),
                rssAdminInfo: mt.a.Get().GetRSSAdminForClanAccountID(t),
              })
            : o.a.createElement(At, { clanAccountID: t });
        }),
        At = (e) => {
          const { clanAccountID: t } = e,
            n = "-500px";
          return o.a.createElement(
            Et.a,
            {
              onEnter: () =>
                Object(i.a)(void 0, void 0, void 0, function* () {
                  const e = g.a.InitFromClanID(t);
                  yield Promise.all([
                    f.a.LoadClanInfoForClanSteamID(e),
                    mt.a.Get().QueueCuratorAdminInfoLoad(t),
                  ]);
                }),
              topOffset: n,
              bottomOffset: n,
            },
            o.a.createElement(
              "div",
              { className: _t.a.TileContainer },
              o.a.createElement("div", null, Object(U.f)("#Loading"), " - ", t)
            )
          );
        },
        Ct = (e) => {
          const { clanInfo: t, rssAdminInfo: n } = e,
            [l, i] = Object(a.useState)(!1),
            r = I.d.STORE_BASE_URL + "newshub/group/" + t.clanAccountID,
            s =
              I.d.STORE_BASE_URL +
              "curator/" +
              t.clanAccountID +
              "/admin/manage_rss",
            c = I.d.COMMUNITY_BASE_URL + "group/" + t.clanAccountID,
            d =
              "https://steamsupport.valvesoftware.com/clan/overview/" +
              g.a.InitFromClanID(t.clanAccountID).ConvertTo64BitString(),
            m = mt.a.Get().GetRSSAdminStats(t.clanAccountID);
          return o.a.createElement(
            "div",
            { className: Object(ne.a)(_t.a.TileContainer) },
            o.a.createElement(
              "div",
              { className: Object(ne.a)(_t.a.TileSpread) },
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "div",
                  null,
                  t.group_name,
                  " - ",
                  t.clanAccountID
                ),
                o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(
                    "div",
                    null,
                    Object(U.f)("#CuratorAdmin_RSSFeed"),
                    ":"
                  ),
                  o.a.createElement("a", { href: n.GetRSSUrl() }, n.GetRSSUrl())
                ),
                Boolean(m) &&
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "div",
                      null,
                      Object(U.f)(
                        "#RSSModeration_TotalEvents",
                        m.total_event_count.toLocaleString()
                      )
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      Object(U.f)(
                        "#RSSModeration_RSSEvents",
                        m.rss_event_count.toLocaleString()
                      )
                    )
                  ),
                o.a.createElement(
                  B.d,
                  { onClick: () => i(!l) },
                  Object(U.f)(
                    l
                      ? "#Bbcode_Expand_Details_Expanded"
                      : "#Bbcode_Expand_Details_Collapsed"
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: r },
                      Object(U.f)("#EventDisplay_NewsHubSubtitle")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: s },
                      Object(U.f)("#CuratorAdmin_RSSFeed_title")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: c },
                      Object(U.f)("#RSSModeration_GroupPage")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      "a",
                      { href: d },
                      Object(U.f)("#RSSModeration_SupportPage")
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(Tt, { rgClanIDs: [t.clanAccountID] })
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: _t.a.CreatorCtn },
                o.a.createElement(pt.a, {
                  bHideCreatorType: !0,
                  creatorID: {
                    name: null,
                    clan_account_id: t.clanAccountID,
                    type: "developer",
                  },
                  bSmallFormat: !0,
                })
              )
            ),
            Boolean(l) &&
              o.a.createElement(
                o.a.Fragment,
                null,
                Boolean(n.BHasSavedRSSURL())
                  ? o.a.createElement(vt.a, {
                      strRssURL: n.GetRSSUrl(),
                      admin: n,
                    })
                  : o.a.createElement(
                      "div",
                      null,
                      Object(U.f)("#RSSModeration_NoRSSFeed")
                    )
              )
          );
        },
        Tt = (e) =>
          o.a.createElement(
            ee.a,
            {
              toolTipContent: Object(U.f)(
                "#RSSModeration_ReindexAndReload_ttip"
              ),
            },
            o.a.createElement(
              B.d,
              {
                onClick: (t) => {
                  Object(X.d)(
                    o.a.createElement(Ot, Object.assign({}, e)),
                    Object(ae.o)(t)
                  );
                },
              },
              Object(U.f)("#RSSModeration_ReindexAndReload")
            )
          ),
        Ot = (e) => {
          const [t, n] = Object(a.useState)(void 0),
            [l, r] = Object(a.useState)(!1),
            [s, c] = Object(a.useState)(void 0),
            d = () => e.closeModal && e.closeModal();
          return o.a.createElement(
            J.i,
            { onEscKeypress: d },
            o.a.createElement(
              B.f,
              null,
              o.a.createElement(
                B.k,
                null,
                " ",
                Object(U.f)("#RSSModeration_ReindexAndReload"),
                " "
              ),
              o.a.createElement(
                B.b,
                null,
                o.a.createElement(
                  B.c,
                  null,
                  void 0 === t
                    ? o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          "span",
                          null,
                          Object(U.f)(
                            "#RSSModeration_Reindex_Verify",
                            e.rgClanIDs.length
                          )
                        ),
                        o.a.createElement(
                          B.q,
                          {
                            onClick: () =>
                              Object(i.a)(void 0, void 0, void 0, function* () {
                                let t = 0;
                                n(t);
                                for (let a = 0; a < e.rgClanIDs.length; ++a) {
                                  let o = e.rgClanIDs[a];
                                  if (
                                    !(yield ut
                                      .Get()
                                      .ReindexClanEventsAndReloadAccount(o))
                                  ) {
                                    c(Object(U.f)("#Error_Generic_Label"));
                                    break;
                                  }
                                  (t += 1), n(t);
                                }
                                r(!0);
                              }),
                          },
                          Object(U.f)("#Button_Continue")
                        )
                      )
                    : o.a.createElement(
                        o.a.Fragment,
                        null,
                        o.a.createElement(
                          "span",
                          null,
                          Object(U.f)(
                            "#RSSModeration_Reindex_Action",
                            t,
                            e.rgClanIDs.length
                          )
                        ),
                        l
                          ? o.a.createElement(
                              "span",
                              null,
                              Object(U.f)(
                                "#EventEditor_ImportFromHTML_ConvertFinished"
                              )
                            )
                          : o.a.createElement(Z.a, {
                              size: "small",
                              string: Object(U.f)("#Updating"),
                            })
                      ),
                  Boolean(s) && o.a.createElement("span", null, s, " ")
                ),
                o.a.createElement(
                  B.j,
                  null,
                  o.a.createElement(
                    B.d,
                    { onClick: d },
                    Object(U.f)(l ? "#Button_OK" : "#Button_Cancel")
                  )
                )
              )
            )
          );
        };
      var yt = n("4spj"),
        jt = n("iO5U");
      Ye.a.Init(new Ke.a(I.d.WEBAPI_BASE_URL)), L.b.Init();
      const Mt = ({ children: e }) => {
        const [t, n] = Object(a.useState)(De.a.IsInitialized());
        return t
          ? o.a.createElement(o.a.Fragment, null, e)
          : (De.a.InitGlobal().then(() => n(!0)), null);
      };
      function It(e) {
        return (t) => o.a.createElement(Mt, null, o.a.createElement(e, t));
      }
      const Dt = It(de),
        kt = It(Me),
        wt = It(Ie.b),
        Gt = It(l.c),
        Lt = It(Qe),
        Rt = It(function (e) {
          const t = Object(Je.b)(),
            n = new Date(t.setUTCHours(0, 0, 0, 0) - 15552e6),
            a = Math.floor(n.getTime() / 1e3),
            { appid: l } = e;
          return o.a.createElement(rt, {
            appid: l,
            partnerEventStore: ke.a.Get(),
            event_customization: {
              rtime_oldestevent: a,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [34],
            },
            strClassName: "early_access_announcements",
            trackingLocation: 3,
          });
        }),
        Bt = It(Ae),
        Pt = It(bt),
        Nt = It(function (e) {
          const { promotionName: t, language: n } = e,
            [a, l] = o.a.useState(
              L.b.GetClanEventFromAnnouncementGID(I.e.ANNOUNCEMENT_GID)
            ),
            i = Object(tt.a)();
          if (
            (o.a.useEffect(() => {
              if (
                (null == a ? void 0 : a.AnnouncementGID) != I.e.ANNOUNCEMENT_GID
              ) {
                const e = new g.a(I.c.CLANSTEAMID);
                L.b
                  .LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                    e,
                    I.e.ANNOUNCEMENT_GID,
                    null
                  )
                  .then(l);
              }
              Object(jt.b)(null);
            }, [a]),
            !a)
          )
            return o.a.createElement(
              "div",
              { className: ot.a.FlexCenter, style: { height: "500px" } },
              o.a.createElement(Z.a, {
                size: "medium",
                string: Object(U.f)("#Loading"),
              })
            );
          const r = a.visibility_state !== b.j.k_EEventStateVisible;
          return o.a.createElement(
            $e.a,
            { navID: "StoreSalePageRoot", NavigationManager: i },
            o.a.createElement(yt.h, {
              promotionName: t,
              language: n,
              eventModel: a,
              bIsPreview: r,
            })
          );
        });
    },
    vNkc: function (e, t, n) {
      e.exports = { Error: "eventbackfill_Error_1eWgI" };
    },
    "ykc/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a = n("mrSG"),
        o = n("q1tI"),
        l = n.n(o),
        i = n("av+R"),
        r = n("yLGM"),
        s = n("opsS"),
        c = n("lkRc");
      function d(e) {
        const { children: t, navTreeRef: n } = e,
          o = Object(a.c)(e, ["children", "navTreeRef"]),
          d = l.a.useRef(),
          m = Object(s.f)(d, n);
        if (c.d.IN_GAMEPADUI) {
          const e = window.__nav_tree_root;
          return l.a.createElement(
            i.b,
            Object.assign({}, o, {
              navTreeRef: m,
              secondary: !0,
              parentEmbeddedNavTree: e,
            }),
            l.a.createElement(r.a, null, t)
          );
        }
        return l.a.createElement(l.a.Fragment, null, t);
      }
    },
    zrk3: function (e, t, n) {
      e.exports = {
        ModeratorAuditActionCtn:
          "eventmoderationaudit_ModeratorAuditActionCtn_f6z__",
        ExpandModActions: "eventmoderationaudit_ExpandModActions_3nNMe",
      };
    },
  },
]);

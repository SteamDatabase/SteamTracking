/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5875],
  {
    55215: (t) => {
      t.exports = {
        DashboardPage: "discountdashboard_DashboardPage_353rn",
        DashTitleBar: "discountdashboard_DashTitleBar_2m-_V",
        DashTitle: "discountdashboard_DashTitle_1FK58",
        ConfidentialBanner: "discountdashboard_ConfidentialBanner_2H9Kz",
        Throbber: "discountdashboard_Throbber_21Esx",
        ErrorMessage: "discountdashboard_ErrorMessage_190ux",
        ButtonGroup: "discountdashboard_ButtonGroup_2peTi",
      };
    },
    69727: (t) => {
      t.exports = {
        EventDetails: "discountgridheaders_EventDetails_3LMXj",
        Active: "discountgridheaders_Active_2BLec",
        RestrictedEligibility:
          "discountgridheaders_RestrictedEligibility_2lxTi",
        CollisionFreeDiscountEvent:
          "discountgridheaders_CollisionFreeDiscountEvent_15fBc",
        EventName: "discountgridheaders_EventName_2bJFF",
        EditEventLink: "discountgridheaders_EditEventLink_1XHd3",
        EventDates: "discountgridheaders_EventDates_2kY09",
        EventDateRange: "discountgridheaders_EventDateRange_312ig",
        EventNumDays: "discountgridheaders_EventNumDays_OAAVW",
        EventLink: "discountgridheaders_EventLink_VZ3pV",
        EventParticipationCtn:
          "discountgridheaders_EventParticipationCtn_2iuUu",
        ParticipationDetails: "discountgridheaders_ParticipationDetails_2tr5X",
        Title: "discountgridheaders_Title_3mO71",
        Count: "discountgridheaders_Count_1pDZ1",
        Selected: "discountgridheaders_Selected_36G76",
        ParticipationToolTip: "discountgridheaders_ParticipationToolTip_36hxa",
        AppLink: "discountgridheaders_AppLink_3RF-6",
        DiscountGridDataColumn:
          "discountgridheaders_DiscountGridDataColumn_1yW70",
        RelatedDiscount: "discountgridheaders_RelatedDiscount_12zwK",
        BasePrice: "discountgridheaders_BasePrice_1a_Lw",
        GridRowLoadingThrobber:
          "discountgridheaders_GridRowLoadingThrobber_r2FLR",
        CurrencyPicker: "discountgridheaders_CurrencyPicker_2Z65K",
        RelatedInfoPicker: "discountgridheaders_RelatedInfoPicker_O-95g",
        RelatedInfoPickerCtn: "discountgridheaders_RelatedInfoPickerCtn_2nnB1",
        CurrencyDropDown: "discountgridheaders_CurrencyDropDown_2gGuz",
        RelatedInfoDropDown: "discountgridheaders_RelatedInfoDropDown_1jj2u",
        CurrencyDropDownItem: "discountgridheaders_CurrencyDropDownItem_3wPHx",
        RelatedInfoDropDownItem:
          "discountgridheaders_RelatedInfoDropDownItem_1ORam",
      };
    },
    9953: (t) => {
      t.exports = {
        UnknownValue: "gridcomponents_UnknownValue_3ovtf",
        PackageName: "gridcomponents_PackageName_t8fSj",
        PackageType: "gridcomponents_PackageType_3LZvj",
        LastRow: "gridcomponents_LastRow_18dUc",
        AppCount: "gridcomponents_AppCount_2J3kN",
        PackageID: "gridcomponents_PackageID_1E3TV",
        PackageNameColumn: "gridcomponents_PackageNameColumn_2pjx8",
        PackagePricesBelowMin: "gridcomponents_PackagePricesBelowMin_2x4be",
      };
    },
    14694: (t, e, n) => {
      "use strict";
      n.d(e, {
        BS: () => E,
        K$: () => I,
        Lr: () => P,
        Q: () => G,
        fH: () => f,
        i4: () => _,
        o: () => h,
        vc: () => k,
        z8: () => S,
      });
      var i = n(85556),
        a = n(80751),
        s = n.n(a),
        o = n(47427),
        r = n(64936),
        c = n(16649),
        l = n(16997),
        u = n(45492),
        d = n(20417),
        p = n(37563);
      const g = "1",
        D = "SaleEvent_DurationDiscount_Tooltip",
        m = "discount";
      class v {
        GetFutureDiscountEvents() {
          const t = (0, r.kl)();
          return Array.from(v.Get().m_mapDiscountEvents.values()).filter(
            (e) => e.end_date > t,
          );
        }
        GetAllDiscountEvents() {
          return Array.from(v.Get().m_mapDiscountEvents.values());
        }
        GetFutureDiscountEventListCallback() {
          return this.m_discountEventsListCallback;
        }
        BLoadedViaInitOrFullLoad() {
          return this.m_bLoadedViaInitOrFullLoad;
        }
        GetDiscountEvent(t) {
          return this.m_mapDiscountEvents.get(t);
        }
        GetAppList(t) {
          return this.m_mapAppList.get(t);
        }
        GetDiscountEventCallback(t) {
          return (
            this.m_mapDiscountEventCallback.has(t) ||
              this.m_mapDiscountEventCallback.set(t, new u.pB()),
            this.m_mapDiscountEventCallback.get(t)
          );
        }
        GetAppListCallback(t) {
          return (
            this.m_mapAppListCallback.has(t) ||
              this.m_mapAppListCallback.set(t, new u.pB()),
            this.m_mapAppListCallback.get(t)
          );
        }
        LoadAllDiscountEvents(t, e) {
          var n, a, o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_bLoadEventsRequestInFlight) return 29;
            const i =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetalldiscountevents/" +
                t,
              l = {};
            let u = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const t = yield s().get(i, {
                params: l,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                ((this.m_bLoadEventsRequestInFlight = !1),
                200 == (null == t ? void 0 : t.status) &&
                  1 ==
                    (null === (n = t.data) || void 0 === n
                      ? void 0
                      : n.success) &&
                  t.data.events)
              ) {
                for (const e of t.data.events)
                  this.m_mapDiscountEvents.set(e.id, e);
                return (
                  (this.m_bLoadedViaInitOrFullLoad = !0),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  1
                );
              }
              u = { response: t };
            } catch (t) {
              u = t;
            }
            const d = (0, c.l)(u);
            return (
              console.error("Could not load Discount Events", d.strErrorMsg, d),
              null !==
                (r =
                  null ===
                    (o =
                      null === (a = null == u ? void 0 : u.response) ||
                      void 0 === a
                        ? void 0
                        : a.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== r
                ? r
                : 2
            );
          });
        }
        CreateDiscountEvent(t, e, n, a, o, r, l, u) {
          var d;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              v = new FormData();
            v.append("sessionid", p.De.SESSIONID),
              v.append("name", n),
              v.append("start_time", t.toString()),
              v.append("end_time", e.toString()),
              v.append("strJSONDiscountInfo", G(n, a, o, r, l));
            let h = null;
            try {
              const c = yield s().post(i, v, {
                withCredentials: !0,
                cancelToken: null == u ? void 0 : u.token,
              });
              if (
                200 == (null == c ? void 0 : c.status) &&
                1 ==
                  (null === (d = c.data) || void 0 === d
                    ? void 0
                    : d.success) &&
                c.data.eventid
              ) {
                const i = {
                  id: c.data.eventid,
                  name: n,
                  start_date: t,
                  end_date: e,
                  appids: l,
                  publisherids: r,
                  description: o,
                  collision_type: "proximity",
                  event: g,
                  header: a,
                  tooltip: D,
                  type: m,
                  prevent_weeklong: "",
                };
                return (
                  this.m_mapDiscountEvents.set(i.id, i),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  i
                );
              }
              h = { response: c };
            } catch (t) {
              h = t;
            }
            const _ = (0, c.l)(h);
            return (
              console.error(
                "CDiscountEventStore.CreateDiscountEvent: failed",
                _.strErrorMsg,
                _,
              ),
              null
            );
          });
        }
        UpdateDiscountEventPublisherAndAppList(t, e, n, a) {
          var o;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.m_mapDiscountEvents.get(t);
            if (!i)
              return (
                console.error(
                  "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                  t,
                ),
                null
              );
            const r =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              l = new FormData();
            l.append("sessionid", p.De.SESSIONID),
              l.append("start_time", i.start_date.toString()),
              l.append("end_time", i.end_date.toString()),
              l.append(
                "strJSONDiscountInfo",
                (function (t, e, n, i) {
                  return JSON.stringify({
                    discount_event: {
                      eventid: t,
                      name: e.name,
                      header: e.header,
                      allowed_appids: i.join(","),
                      allowed_publisherids: n.join(","),
                      description: e.description,
                      collision_type: e.collision_type,
                      event: e.event,
                      tooltip: e.tooltip,
                      type: e.type,
                      prevent_weeklong: e.prevent_weeklong,
                    },
                  });
                })(t, i, e, n),
              );
            let u = null;
            try {
              const t = yield s().post(r, l, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (o = t.data) || void 0 === o
                    ? void 0
                    : o.success) &&
                t.data.eventid
              ) {
                const t = Object.assign(Object.assign({}, i), {
                  appids: n,
                  publisherids: e,
                });
                return (
                  this.m_mapDiscountEvents.set(t.id, t),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  t
                );
              }
              u = { response: t };
            } catch (t) {
              u = t;
            }
            const d = (0, c.l)(u);
            return (
              console.error(
                "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
                d.strErrorMsg,
                d,
              ),
              null
            );
          });
        }
        LoadSingleDiscountEvent(t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.m_mapDiscountEvents.has(t)
              ? this.m_mapDiscountEvents.get(t)
              : (this.m_mapInflightDiscountLoadRequest.has(t) ||
                  this.m_mapInflightDiscountLoadRequest.set(
                    t,
                    this.InternalLoadSingleDiscountEvent(t),
                  ),
                this.m_mapInflightDiscountLoadRequest.get(t));
          });
        }
        InternalLoadSingleDiscountEvent(t) {
          var e, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            if (!t || 0 == t.length || "0" == t) return null;
            try {
              const a =
                  p.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventbyid",
                o = { sessionid: p.De.SESSIONID, discountid: t },
                r = yield s().get(a, { params: o, withCredentials: !0 });
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (e = null == r ? void 0 : r.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                (null === (n = null == r ? void 0 : r.data) || void 0 === n
                  ? void 0
                  : n.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(t, r.data.discount_event),
                  this.GetDiscountEventCallback(t).Dispatch(
                    r.data.discount_event,
                  ),
                  r.data.discount_event
                );
              i = (0, c.l)(r);
            } catch (t) {
              i = (0, c.l)(t);
            }
            return (
              console.error(
                "CPromotionInviteStore.InternalLoadSingleDiscountEvent failed: " +
                  (null == i ? void 0 : i.strErrorMsg),
                i,
              ),
              null
            );
          });
        }
        LoadSingleDiscountEventsAppList(t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.m_mapAppList.has(t)
              ? {
                  oDiscountEvent: this.m_mapDiscountEvents.get(t),
                  rgAppList: this.m_mapAppList.get(t),
                }
              : (this.m_mapInflightDiscountAndAppListLoadRequest.has(t) ||
                  this.m_mapInflightDiscountAndAppListLoadRequest.set(
                    t,
                    this.InternalLoadSingleDiscountEventsAppList(t),
                  ),
                this.m_mapInflightDiscountAndAppListLoadRequest.get(t));
          });
        }
        InternalLoadSingleDiscountEventsAppList(t) {
          var e, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            if (!t || 0 == t.length) return null;
            try {
              const a =
                  p.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventapplist",
                o = { sessionid: p.De.SESSIONID, discountid: t },
                r = yield s().get(a, { params: o, withCredentials: !0 });
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (e = null == r ? void 0 : r.data) || void 0 === e
                    ? void 0
                    : e.success) &&
                (null === (n = null == r ? void 0 : r.data) || void 0 === n
                  ? void 0
                  : n.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(t, r.data.discount_event),
                  this.m_mapAppList.set(t, r.data.appid_list),
                  this.GetDiscountEventCallback(t).Dispatch(
                    r.data.discount_event,
                  ),
                  this.GetAppListCallback(t).Dispatch(r.data.appid_list),
                  {
                    oDiscountEvent: r.data.discount_event,
                    rgAppList: r.data.appid_list,
                  }
                );
              i = (0, c.l)(r);
            } catch (t) {
              i = (0, c.l)(t);
            }
            return (
              console.error(
                "CPromotionInviteStore.InternalLoadSingleDiscountEventsAppList failed: " +
                  (null == i ? void 0 : i.strErrorMsg),
                i,
              ),
              null
            );
          });
        }
        static Get() {
          return (
            v.s_Singleton || ((v.s_Singleton = new v()), v.s_Singleton.Init()),
            v.s_Singleton
          );
        }
        constructor() {
          (this.m_mapDiscountEvents = new Map()),
            (this.m_discountEventsListCallback = new u.pB()),
            (this.m_mapDiscountEventCallback = new Map()),
            (this.m_mapAppList = new Map()),
            (this.m_mapAppListCallback = new Map()),
            (this.m_bLoadedViaInitOrFullLoad = !1),
            (this.m_bLoadEventsRequestInFlight = !1),
            (this.m_mapInflightDiscountLoadRequest = new Map()),
            (this.m_mapInflightDiscountAndAppListLoadRequest = new Map()),
            "dev" == p.De.WEB_UNIVERSE && (window.g_DiscountEventStore = this);
        }
        Init() {
          const t = (0, p.kQ)("discount_events", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountEventStore loading payload: ",
                t,
              ),
            this.BIsConfigValid(t))
          ) {
            for (const e of t) this.m_mapDiscountEvents.set(e.id, e);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == p.De.WEB_UNIVERSE &&
              t &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(t) {
          const e = t;
          return !(!e || !Array.isArray(e));
        }
      }
      function h() {
        return v.Get().GetFutureDiscountEvents();
      }
      function _() {
        return v.Get().GetFutureDiscountEventListCallback();
      }
      function E(t, e) {
        const n = v.Get().BLoadedViaInitOrFullLoad(),
          [i, a] = o.useState(
            n
              ? e
                ? v.Get().GetAllDiscountEvents()
                : v.Get().GetFutureDiscountEvents()
              : null,
          ),
          [s, r] = o.useState(null),
          c =
            t ||
            Number.parseInt((0, p.kQ)("publisherid", "application_config"));
        (0, d.Qg)(v.Get().GetFutureDiscountEventListCallback(), a),
          o.useEffect(() => {
            v.Get().BLoadedViaInitOrFullLoad() ||
              v.Get().LoadAllDiscountEvents(c).then(r);
          }, [i, c]);
        const l = null != s ? s : (null == i ? void 0 : i.length) ? 1 : null;
        return o.useMemo(() => ({ rgDiscountEvents: i, eResult: l }), [i, l]);
      }
      function f(t) {
        return v.Get().GetDiscountEvent(t);
      }
      function k(t) {
        const [e, n] = (0, o.useState)(v.Get().GetDiscountEvent(t));
        return (
          o.useEffect(() => {
            ((!e && t) || ((null == e ? void 0 : e.id) != t && t)) &&
              v
                .Get()
                .LoadSingleDiscountEvent(t)
                .then((t) => {
                  t && n(t);
                });
          }, [t, e]),
          (0, d.Qg)(v.Get().GetDiscountEventCallback(t), n),
          e
        );
      }
      function I(t) {
        const [e, n] = (0, o.useState)(v.Get().GetDiscountEvent(t)),
          [i, a] = (0, o.useState)(v.Get().GetAppList(t));
        return (
          (0, o.useEffect)(() => {
            ((!i && t) || ((null == e ? void 0 : e.id) != t && t)) &&
              v
                .Get()
                .LoadSingleDiscountEventsAppList(t)
                .then((t) => {
                  t && (n(t.oDiscountEvent), a(t.rgAppList));
                });
          }, [null == e ? void 0 : e.id, i, t]),
          (0, d.Qg)(v.Get().GetDiscountEventCallback(t), n),
          (0, d.Qg)(v.Get().GetAppListCallback(t), a),
          i ? { oDiscountEvent: e, rgAppList: i } : null
        );
      }
      function G(t, e, n, i, a) {
        return JSON.stringify({
          discount_event: {
            name: t,
            publisherids: i.join(","),
            appids: a.join(","),
            description: n,
            event: g,
            collision_type: "proximity",
            header: e,
            tooltip: D,
            type: m,
          },
        });
      }
      function S() {
        return { fnCreateDiscountEvent: v.Get().CreateDiscountEvent };
      }
      function P() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            v.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, i.gn)([l.a], v.prototype, "GetDiscountEvent", null),
        (0, i.gn)([l.a], v.prototype, "GetAppList", null),
        (0, i.gn)([l.a], v.prototype, "CreateDiscountEvent", null),
        (0, i.gn)(
          [l.a],
          v.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
    10095: (t, e, n) => {
      "use strict";
      n.d(e, {
        A0: () => _,
        Cy: () => G,
        PV: () => E,
        QQ: () => f,
        Rz: () => C,
        V7: () => I,
        ZW: () => k,
        _l: () => b,
        dS: () => R,
        du: () => L,
        lQ: () => A,
        nw: () => S,
        py: () => P,
        qh: () => h,
      });
      var i = n(85556),
        a = n(80751),
        s = n.n(a),
        o = n(54842),
        r = n(47427),
        c = n(42718),
        l = n(83999),
        u = n(62210),
        d = n(16649),
        p = n(16997),
        g = n(45492),
        D = n(20417),
        m = n(37563),
        v = n(29480);
      class h {
        constructor() {
          (this.m_mapRegistrations = new Map()),
            (this.m_mapRequestedAppIDs = new Map()),
            (this.m_mapOptInNameCallback = new Map()),
            (this.m_mapSingleAppRegistrationChange = new Map()),
            (this.m_loadCountChangeCallback = new g.pB()),
            (0, o.rC)(this);
        }
        BHasOptInRegistration(t, e) {
          var n;
          return Boolean(
            null === (n = this.m_mapRegistrations.get(t)) || void 0 === n
              ? void 0
              : n.has(e),
          );
        }
        GetOptInRegistrationPromise(t, e) {
          var n;
          return null === (n = this.m_mapRequestedAppIDs.get(e)) || void 0 === n
            ? void 0
            : n.get(t);
        }
        GetOptInRegistrationAndEligibilityForApp(t) {
          return this.m_mapRegistrations.get(t);
        }
        GetSingleAppRegistrationKey(t, e) {
          return `single_${t}_${e}`;
        }
        GetSingleAppRegistrationChange(t, e) {
          const n = this.GetSingleAppRegistrationKey(t, e);
          return (
            this.m_mapSingleAppRegistrationChange.has(n) ||
              this.m_mapSingleAppRegistrationChange.set(n, new g.pB()),
            this.m_mapSingleAppRegistrationChange.get(n)
          );
        }
        GetExistingOptInRegistartion(t, e) {
          return this.m_mapRegistrations.has(t)
            ? this.m_mapRegistrations.get(t).get(e)
            : null;
        }
        GetLoadCountChange() {
          return this.m_loadCountChangeCallback;
        }
        GetLoadCount() {
          return this.m_mapRegistrations.size;
        }
        GetOptInRegistrationAndEligibilityForApps(t) {
          if (0 == t.length) return null;
          let e = new Map();
          for (let n of t) {
            let t = this.m_mapRegistrations.get(n);
            if (t)
              for (let n of t.keys()) {
                let t = e.get(n);
                t || (t = 0), e.set(n, t + 1);
              }
          }
          let n = new Map(),
            i = t[0];
          return (
            e.forEach((e, a) => {
              if (e == t.length) {
                let t = this.m_mapRegistrations.get(i).get(a);
                (0, u.X)(t, "Missing OptIn Restration"), n.set(a, t);
              }
            }),
            n.size > 0 ? n : null
          );
        }
        BHasOptionOnRegistration(t, e, n) {
          var i, a;
          const s = this.GetRegistration(t, e);
          return (
            !(!s || !s.opt_in) &&
            (!n ||
              (null ===
                (a =
                  null === (i = null == s ? void 0 : s.jsondata) || void 0 === i
                    ? void 0
                    : i.dynamic_selection) || void 0 === a
                ? void 0
                : a.some((t) => {
                    var e;
                    return (
                      t &&
                      t.section_id == n.section_id &&
                      (null === (e = t.list_selection) || void 0 === e
                        ? void 0
                        : e.some((t) => {
                            var e;
                            return (
                              t &&
                              t.list_id == n.list_id &&
                              (null === (e = t.selected_item_id) || void 0 === e
                                ? void 0
                                : e.includes(n.option_id))
                            );
                          }))
                    );
                  })))
          );
        }
        BHasOptInTrailer(t, e) {
          var n;
          const i = this.GetRegistration(t, e);
          return Boolean(
            i &&
              i.opt_in &&
              (null === (n = i.jsondata) || void 0 === n
                ? void 0
                : n.trailer_permission) &&
              i.jsondata.rtime_granting_trailer,
          );
        }
        BHasOptInDemo(t, e) {
          var n;
          const i = this.GetRegistration(t, e);
          return Boolean(
            i &&
              i.opt_in &&
              (null === (n = i.jsondata) || void 0 === n
                ? void 0
                : n.demo_permission) &&
              i.jsondata.rtime_granting_demo,
          );
        }
        BHasOptInGameProfile(t, e) {
          var n;
          const i = this.GetRegistration(t, e);
          return Boolean(
            i &&
              i.opt_in &&
              (null === (n = i.jsondata) || void 0 === n
                ? void 0
                : n.game_profile_intent) &&
              i.jsondata.rtime_granting_profile,
          );
        }
        CreateRegistrationNotSaved(t, e) {
          console.log("CreateOrGetRegistration: Creating new registration");
          return {
            opt_in_name: e,
            opt_in: !1,
            appid: t,
            jsondata: { opt_in_name: e, opt_in: !1 },
          };
        }
        CreateOrGetRegistration(t, e) {
          let n = this.m_mapRegistrations.get(t);
          n ||
            ((n = new Map()),
            this.m_mapRegistrations.set(t, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let i = n.get(e);
          return (
            i
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  i,
                )
              : (i = this.CreateRegistrationNotSaved(t, e)),
            i
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(t, e) {
          let n = this.m_mapRegistrations.get(t);
          n ||
            ((n = new Map()),
            this.m_mapRegistrations.set(t, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let i = n.get(e);
          return (
            i
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  i,
                )
              : ((i = this.CreateRegistrationNotSaved(t, e)), n.set(e, i)),
            i
          );
        }
        GetRegistration(t, e) {
          return this.m_mapRegistrations.has(t) &&
            this.m_mapRegistrations.get(t).has(e)
            ? this.m_mapRegistrations.get(t).get(e)
            : null;
        }
        GetAllOptInRegistrations(t) {
          const e = this.m_mapRequestedAppIDs.get(t) || new Map();
          return Array.from(e.keys())
            .map((e) => {
              var n;
              return null === (n = this.m_mapRegistrations.get(e)) ||
                void 0 === n
                ? void 0
                : n.get(t);
            })
            .filter(Boolean);
        }
        GetOptInNameRegistrationsCallbackList(t) {
          return t
            ? (this.m_mapOptInNameCallback.has(t) ||
                this.m_mapOptInNameCallback.set(t, new g.pB()),
              this.m_mapOptInNameCallback.get(t))
            : null;
        }
        UpdateRegAndTrackInStore(t, e) {
          const n = e.map((e) =>
            e.jsondata && "" !== e.jsondata
              ? Object.assign(Object.assign({}, e), {
                  jsondata: JSON.parse(e.jsondata),
                })
              : Object.assign(Object.assign({}, e), {
                  jsondata: { opt_in_name: t },
                }),
          );
          return (
            n.forEach((e) => {
              this.m_mapRegistrations.has(e.appid) ||
                (this.m_mapRegistrations.set(e.appid, new Map()),
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                )),
                this.m_mapRegistrations.get(e.appid).set(t, e);
            }),
            n
          );
        }
        FetchOptInRegistrationForOptIn(t, e) {
          var n, a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                m.De.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              o = { sessionid: m.De.SESSIONID, opt_in_name: t, opt_in_only: e },
              r = yield s().get(i, { params: o, withCredentials: !0 });
            return (
              null === (n = null == r ? void 0 : r.data) || void 0 === n
                ? void 0
                : n.data
            )
              ? this.UpdateRegAndTrackInStore(t, r.data.data)
              : null === (a = null == r ? void 0 : r.data) || void 0 === a
              ? void 0
              : a.data;
          });
        }
        FetchPendingReviewOptInRegistrationn(t) {
          var e, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                m.De.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              a = { sessionid: m.De.SESSIONID, opt_in_name: t },
              o = yield s().get(i, { params: a, withCredentials: !0 });
            return (
              null === (e = null == o ? void 0 : o.data) || void 0 === e
                ? void 0
                : e.data
            )
              ? this.UpdateRegAndTrackInStore(t, o.data.data)
              : null === (n = null == o ? void 0 : o.data) || void 0 === n
              ? void 0
              : n.data;
          });
        }
        LoadOptInRegistration(t, e, n) {
          var a, o;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.GetRegistration(e, t)) return !0;
            const i =
              null === (a = this.m_mapRequestedAppIDs.get(t)) || void 0 === a
                ? void 0
                : a.get(e);
            if (i) return i;
            try {
              const i = m.De.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                a = { sessionid: m.De.SESSIONID, appid: e, opt_in_name: t },
                r = yield s().get(i, {
                  params: a,
                  withCredentials: !0,
                  cancelToken: null == n ? void 0 : n.token,
                });
              if (
                1 ==
                  (null === (o = null == r ? void 0 : r.data) || void 0 === o
                    ? void 0
                    : o.success) &&
                r.data.optin_registration
              ) {
                if (
                  ("string" == typeof r.data.optin_registration.jsondata &&
                    (r.data.optin_registration.jsondata = JSON.parse(
                      r.data.optin_registration.jsondata,
                    )),
                  this.m_mapRegistrations.has(e))
                )
                  this.m_mapRegistrations
                    .get(e)
                    .set(t, r.data.optin_registration);
                else {
                  const n = new Map();
                  n.set(t, r.data.optin_registration),
                    this.m_mapRegistrations.set(e, n),
                    this.GetLoadCountChange().Dispatch(
                      this.m_mapRegistrations.size,
                    );
                }
                return !0;
              }
              {
                const t = (0, d.l)(r);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    t.strErrorMsg,
                  t,
                );
              }
            } catch (t) {
              const e = (0, d.l)(t);
              console.error(
                "LoadOptInRegistration : failed with " + e.strErrorMsg,
                e,
              );
            }
            return !1;
          });
        }
        LoadMultiOptInRegistration(t, e, n, a) {
          var o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (0 == e.length || 0 == t.length) return !1;
            let i = null;
            const c = new Promise((t, e) => {
              i = t;
            });
            (t = l.kp(t).sort()),
              (e = l.kp(e).sort()),
              t.forEach((t) => {
                this.m_mapRequestedAppIDs.has(t) ||
                  this.m_mapRequestedAppIDs.set(t, new Map());
              });
            let u = new Array();
            if (
              (e.forEach((e) => {
                t.some(
                  (t) =>
                    !this.BHasOptInRegistration(e, t) &&
                    !this.GetOptInRegistrationPromise(e, t),
                ) &&
                  (u.push(e),
                  t.forEach((t) => this.m_mapRequestedAppIDs.get(t).set(e, c)));
              }),
              0 == u.length)
            )
              return !0;
            const p =
              m.De.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
            let g = null;
            try {
              for (; u.length > 0; ) {
                let e = 0;
                const i = [];
                for (; u.length > 0 && e < 5; ) {
                  const a = u.splice(0, 50),
                    o = {
                      rgOptInNames: t.join(","),
                      rgAppIDs: a.join(","),
                      origin: self.origin,
                    };
                  i.push(
                    s().get(p, {
                      params: o,
                      withCredentials: !0,
                      cancelToken: null == n ? void 0 : n.token,
                    }),
                  ),
                    (e += 1);
                }
                const c = yield Promise.all(i);
                for (const t of c) {
                  if (
                    200 != (null == t ? void 0 : t.status) ||
                    1 !=
                      (null === (o = t.data) || void 0 === o
                        ? void 0
                        : o.success) ||
                    !(null === (r = t.data.optin_registrations) || void 0 === r
                      ? void 0
                      : r.length)
                  ) {
                    g = { response: t };
                    break;
                  }
                  this.InternalAddRegistrations(t.data.optin_registrations, a);
                }
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                );
              }
            } catch (t) {
              g = t;
            }
            if (null == g) i(!0);
            else {
              const n = (0, d.l)(g);
              console.error(
                "Could not load OptIn for Apps",
                e,
                t,
                n.strErrorMsg,
                n,
              ),
                i(!1);
            }
            return c;
          });
        }
        RegisterAppForOptIn(t, e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const n = {
              opt_in_name: e.startsWith("sale_") ? e : "sale_" + e,
              opt_in: !0,
            };
            return this.UpdateOptInRegistration(t, n);
          });
        }
        UpdateOptInRegistration(t, e) {
          var n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const a = new FormData();
              a.append("sessionid", m.De.SESSIONID),
                Object.keys(e).forEach((t) => a.append(t, e[t]));
              const o =
                  m.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistration/" +
                  t,
                r = yield s().post(o, a, { withCredentials: !0 });
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (n = r.data) || void 0 === n ? void 0 : n.success)
              )
                return null;
              i = (0, d.l)(r);
            } catch (t) {
              i = (0, d.l)(t);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistration error " +
                  i.strErrorMsg,
                i,
              ),
              i.strErrorMsg
            );
          });
        }
        UpdateOptInRegistrationJson(t, e, n = !1) {
          var a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const o = new FormData();
              o.append("sessionid", m.De.SESSIONID),
                o.append("appid", "" + t),
                o.append("opt_in_name", e.opt_in_name),
                o.append("jsondata", JSON.stringify(e)),
                n && o.append("bCreatePendingInvite", "true");
              const r =
                  m.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  t,
                c = yield s().post(r, o, { withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                1 ==
                  (null === (a = c.data) || void 0 === a ? void 0 : a.success)
              ) {
                const n = e.opt_in_name.startsWith("sale_")
                    ? e.opt_in_name
                    : "sale_" + e.opt_in_name,
                  i = this.m_mapRegistrations.get(t).get(n);
                i.jsondata = e;
                const a = Object.assign({}, i);
                return (
                  this.m_mapRegistrations.get(t).set(e.opt_in_name, a),
                  this.GetSingleAppRegistrationChange(
                    t,
                    e.opt_in_name,
                  ).Dispatch(a),
                  null
                );
              }
              i = (0, d.l)(c);
            } catch (t) {
              i = (0, d.l)(t);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistrationJson error " +
                  i.strErrorMsg,
                i,
              ),
              i.strErrorMsg
            );
          });
        }
        UpdateAppealState(t, e, n) {
          var a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const o = e.jsondata.opt_in_name,
                r = new FormData();
              r.append("sessionid", m.De.SESSIONID),
                r.append("appid", "" + t),
                r.append("opt_in_name", o),
                r.append("approved", "" + n);
              const c =
                  m.De.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
                l = yield s().post(c, r, { withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (a = l.data) || void 0 === a ? void 0 : a.success)
              ) {
                const e = Object.assign(
                  {},
                  this.m_mapRegistrations.get(t).get(o),
                );
                return (
                  (e.accountid_appeal = m.L7.accountid),
                  (e.appeal_state = n ? 1 : 2),
                  this.m_mapRegistrations.get(t).set(o, e),
                  this.GetSingleAppRegistrationChange(t, o).Dispatch(e),
                  !0
                );
              }
              i = (0, d.l)(l);
            } catch (t) {
              i = (0, d.l)(t);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateAppealState error " + i.strErrorMsg,
                i,
              ),
              !1
            );
          });
        }
        static Get() {
          return (
            h.s_OptInRegs ||
              ((h.s_OptInRegs = new h()),
              (window.COptInRegistrations = h.s_OptInRegs),
              h.s_OptInRegs.Init()),
            h.s_OptInRegs
          );
        }
        InternalAddRegistrations(t, e) {
          const n = new Set();
          t.forEach((t) => {
            if (!Number.isNaN(t.appid)) {
              let i = this.m_mapRegistrations.get(t.appid);
              if (
                (i ||
                  ((i = new Map()), this.m_mapRegistrations.set(t.appid, i)),
                t.jsondata && "string" == typeof t.jsondata)
              ) {
                const e = t.jsondata;
                0 == e.trim().length
                  ? (t.jsondata = {})
                  : (t.jsondata = JSON.parse(e));
              }
              i.set(t.opt_in_name, t), e && e.Increment(), n.add(t.opt_in_name);
            }
          }),
            Array.from(n).forEach((t) => {
              this.GetOptInNameRegistrationsCallbackList(t).Dispatch(
                this.GetAllOptInRegistrations(t),
              );
            });
        }
        Init() {
          let t = JSON.parse(
            JSON.stringify(
              (0, m.kQ)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(t) &&
            (this.InternalAddRegistrations(t),
            "dev" == m.De.WEB_UNIVERSE &&
              console.log("COptInRegistrations: " + t.length, t));
        }
        ValidateStoreDefault(t) {
          const e = t;
          return (
            !!(
              e &&
              Array.isArray(e) &&
              e.length > 0 &&
              "object" == typeof e[0]
            ) &&
            "number" == typeof e[0].appid &&
            "string" == typeof e[0].opt_in_name
          );
        }
      }
      function _(t, e) {
        var n;
        const i =
          null === (n = t.jsondata) || void 0 === n
            ? void 0
            : n.dynamic_selection;
        try {
          if (i) {
            const t = i
              .filter((t) => t.section_id == e.section_id)
              .map((t) => t.list_selection);
            if (t.length > 0 && t[0]) {
              const n = t[0]
                .filter((t) => t.list_id == e.list_id)
                .map((t) => t.selected_item_id);
              if (n.length > 0) return n[0];
            }
          }
        } catch (e) {
          console.log("error: dynamic section", i, t, e);
        }
        return [];
      }
      function E() {
        return r.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: h.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function f(t, e, n) {
        const [i, a] = r.useState(null),
          s = (0, v.T)("useMultiLoadOptInAppReg");
        return (
          (0, r.useEffect)(() => {
            const i = e.filter(Boolean);
            i.length > 0
              ? h
                  .Get()
                  .LoadMultiOptInRegistration(
                    i.map(() => t),
                    i,
                    s,
                    n,
                  )
                  .then(() => {
                    const e = new Map();
                    i.forEach((n) => {
                      const i = h.Get().GetRegistration(n, t);
                      i && e.set(n, i);
                    }),
                      a(e);
                  })
              : a(new Map());
          }, [t, e, s, n]),
          i
        );
      }
      function k(t) {
        const [e, n] = r.useState(h.Get().GetAllOptInRegistrations(t));
        return (
          (0, D.Qg)(h.Get().GetOptInNameRegistrationsCallbackList(t), n), e
        );
      }
      function I(t) {
        const e = k(t),
          [n, i] = r.useState({
            nAppOptedIn: 0,
            nAppEligible: 0,
            nAppOptedOut: 0,
            nAppIneligible: 0,
          });
        return (
          r.useEffect(() => {
            if ((null == e ? void 0 : e.length) > 0) {
              const t = {
                nAppOptedIn: 0,
                nAppEligible: 0,
                nAppOptedOut: 0,
                nAppIneligible: 0,
              };
              e.forEach((e) => {
                e.restricted || e.pruned
                  ? (t.nAppIneligible += 1)
                  : e.opt_in
                  ? ((t.nAppOptedIn += 1), (t.nAppEligible += 1))
                  : !e.time_opted_in || e.invited
                  ? (t.nAppEligible += 1)
                  : (t.nAppOptedOut += 1);
              }),
                JSON.stringify(t) != JSON.stringify(n) && i(t);
            }
          }, [e, n]),
          n
        );
      }
      function G(t, e) {
        const n = (0, c.useQuery)(
          ["useAllOptInRegistrationByName", t, Boolean(e)],
          () => h.Get().FetchOptInRegistrationForOptIn(t, e),
          { staleTime: 36e5 },
        );
        return n.isLoading ? null : n.data;
      }
      function S(t) {
        const e = (0, c.useQuery)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", t],
          queryFn: () => h.Get().FetchPendingReviewOptInRegistrationn(t),
          retry: !1,
          staleTime: 36e5,
          enabled: (null == t ? void 0 : t.length) > 0,
        });
        return {
          rgPendingReviewRegistrations: e.isLoading ? null : e.data,
          bIsInError: e.isError,
        };
      }
      function P(t, e) {
        const n = G(t, !1),
          [i, a] = (0, r.useState)(
            null == n ? void 0 : n.find((t) => t.appid == e),
          );
        return (0, D.Qg)(h.Get().GetSingleAppRegistrationChange(e, t), a), i;
      }
      function C(t, e) {
        const [n, i] = (0, r.useState)(
          h.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e),
        );
        return (0, D.Qg)(h.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function b(t, e) {
        const [n, i] = (0, r.useState)(
          h.Get().GetExistingOptInRegistartion(t, e),
        );
        return (0, D.Qg)(h.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function R() {
        return {
          fnUpdateOptInRegistrationJson: h.Get().UpdateOptInRegistrationJson,
        };
      }
      function L() {
        return { fnUpdateAppealState: h.Get().UpdateAppealState };
      }
      function A() {
        const [t, e] = (0, r.useState)(h.Get().GetLoadCount());
        return (
          (0, D.Qg)(h.Get().GetLoadCountChange(), e), h.Get().GetLoadCount()
        );
      }
      (0, i.gn)(
        [p.a],
        h.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, i.gn)(
          [p.a],
          h.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, i.gn)([p.a], h.prototype, "LoadMultiOptInRegistration", null),
        (0, i.gn)([p.a], h.prototype, "UpdateOptInRegistrationJson", null),
        (0, i.gn)([p.a], h.prototype, "UpdateAppealState", null),
        (0, i.gn)([o.aD], h.prototype, "Init", null);
    },
    7073: (t, e, n) => {
      "use strict";
      n.d(e, {
        EV: () => L,
        Fi: () => S,
        ID: () => G,
        LT: () => h,
        Qy: () => R,
        Su: () => f,
        XM: () => E,
        Xj: () => A,
        _J: () => v,
        b2: () => P,
        co: () => _,
        hd: () => b,
        k1: () => C,
        kk: () => m,
        v6: () => k,
        yI: () => I,
      });
      var i = n(85556),
        a = n(80751),
        s = n.n(a),
        o = n(47427),
        r = n(64936),
        c = n(16649),
        l = n(45492),
        u = n(20417),
        d = n(45284),
        p = n(37563);
      class g {
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackageDiscountsById = new Map()),
            (this.m_mapDiscountCallbackList = new Map()),
            (this.m_mapPackageDiscountsByPackageId = new Map()),
            (this.m_mapPackageCallbackList = new Map()),
            (this.m_mapPackageDiscountsByDiscountEventId = new Map()),
            (this.m_mapDiscountEventCallbackList = new Map()),
            (this.m_allDiscountCallbackList = new l.pB()),
            (this.m_mapMaxDiscountPercentageByPackageId = new Map()),
            "dev" == p.De.WEB_UNIVERSE &&
              (window.g_PackageDiscountStore = this);
        }
        Init() {
          const t = (0, p.kQ)("package_discounts", "application_config");
          ("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackageDiscountStore loading discount payload: ",
              t,
            ),
            this.BIsDiscountPayloadValid(t)
              ? this.InternalAddDiscounts(t)
              : "dev" == p.De.WEB_UNIVERSE &&
                t &&
                console.error("Invalid discount payload");
          const e = (0, p.kQ)("max_discount_percentages", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountGridStore loading max-discount-% payload: ",
                e,
              ),
            this.BIsMaxDiscountPayloadValid(e))
          )
            for (let t in e)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(t), e[t]);
          else
            "dev" == p.De.WEB_UNIVERSE &&
              e &&
              console.error("Invalid max-discount-% payload");
        }
        InternalAddDiscounts(t, e) {
          var n;
          const i = new Set(),
            a = new Set();
          for (const e of t)
            (null === (n = e.discountEventID) || void 0 === n
              ? void 0
              : n.length) || (e.discountEventID = D(e)),
              this.m_mapPackageDiscountsById.set(e.nDiscountID, e),
              this.GetCallbackListForDiscount(e.nDiscountID).Dispatch(e),
              this.m_mapPackageDiscountsByPackageId.has(e.packageID) ||
                this.m_mapPackageDiscountsByPackageId.set(
                  e.packageID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByPackageId
                .get(e.packageID)
                .set(e.nDiscountID, e),
              i.add(e.packageID),
              this.m_mapPackageDiscountsByDiscountEventId.has(
                e.discountEventID,
              ) ||
                this.m_mapPackageDiscountsByDiscountEventId.set(
                  e.discountEventID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByDiscountEventId
                .get(e.discountEventID)
                .set(e.nDiscountID, e),
              a.add(e.discountEventID);
          for (const t of null != e ? e : [])
            this.m_mapPackageDiscountsByPackageId.has(t) ||
              this.m_mapPackageDiscountsByPackageId.set(t, new Map()),
              i.add(t);
          i.forEach((t) =>
            this.GetCallbackListForPackage(t).Dispatch(
              this.GetAllDiscountsForPackage(t),
            ),
          ),
            a.forEach((t) =>
              this.GetCallbackListForDiscountEvent(t).Dispatch(
                this.GetAllDiscountsForDiscountEvent(t),
              ),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        InternalDeleteDiscount(t, e, n) {
          var i, a;
          this.m_mapPackageDiscountsById.delete(t),
            null === (i = this.m_mapPackageDiscountsByPackageId.get(e)) ||
              void 0 === i ||
              i.delete(t),
            null === (a = this.m_mapPackageDiscountsByDiscountEventId.get(n)) ||
              void 0 === a ||
              a.delete(t),
            this.GetCallbackListForDiscount(t).Dispatch(null),
            this.GetCallbackListForPackage(e).Dispatch(
              this.GetAllDiscountsForPackage(e),
            ),
            this.GetCallbackListForDiscountEvent(n).Dispatch(
              this.GetAllDiscountsForDiscountEvent(n),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        BIsDiscountPayloadValid(t) {
          const e = t;
          if (e && Array.isArray(e)) {
            if (0 == e.length) return !0;
            const t = e[0];
            if (
              t.nDiscountID &&
              "number" == typeof t.nDiscountID &&
              t.packageID &&
              "number" == typeof t.packageID
            )
              return !0;
          }
          return !1;
        }
        BIsMaxDiscountPayloadValid(t) {
          const e = t;
          if (e && "object" == typeof e) {
            for (let t in e)
              if (
                isNaN(parseInt(t)) ||
                (null !== e[t] && "number" != typeof e[t])
              )
                return !1;
            return !0;
          }
          return !1;
        }
        LoadPackageDiscounts(t, e, n = 0) {
          var a, o, r, l;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            const u = new Promise((t, e) => {
                i = t;
              }),
              d = new Set();
            for (const e of t)
              this.m_mapPackageDiscountsByPackageId.has(e) || d.add(e);
            const g = Array.from(d).sort();
            if (0 == g.length) return 1;
            const D = (0, p.kQ)("publisherid", "application_config"),
              m =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                D;
            let v = null,
              h = null;
            try {
              const t = [],
                i = new Array();
              for (; g.length > 0; ) {
                const a = g.splice(0, 50);
                i.push(a);
                const o = { packageids: a.join(","), origin: self.origin };
                t.push(
                  s().get(m, {
                    params: o,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                    timeout: n,
                  }),
                );
              }
              const o = yield Promise.all(t),
                r = [];
              for (const t of o) {
                if (
                  ((h = i.unshift()),
                  200 != (null == t ? void 0 : t.status) ||
                    1 !=
                      (null === (a = t.data) || void 0 === a
                        ? void 0
                        : a.success) ||
                    !t.data.discounts)
                ) {
                  v = { response: t };
                  break;
                }
                t.data.discounts.forEach((t) => r.push(t));
              }
              null == v && this.InternalAddDiscounts(r, Array.from(d));
            } catch (t) {
              v = t;
            }
            if (null == v) i(1);
            else {
              const t = (0, c.l)(v);
              console.error(
                "Could not load Discounts for packages",
                h,
                t.strErrorMsg,
                t,
              ),
                i(
                  null !==
                    (l =
                      null ===
                        (r =
                          null === (o = null == v ? void 0 : v.response) ||
                          void 0 === o
                            ? void 0
                            : o.data) || void 0 === r
                        ? void 0
                        : r.success) && void 0 !== l
                    ? l
                    : 2,
                );
            }
            return u;
          });
        }
        SaveDiscountToServer(t, e) {
          var n, a, o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                p.De.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                t.packageID,
              l = new FormData();
            l.append("sessionid", p.De.SESSIONID),
              t.nDiscountID && l.append("id", t.nDiscountID.toString()),
              l.append("name", t.strDiscountName),
              l.append("description", t.strDiscountDescription),
              t.discountEventID &&
                !m(t.discountEventID) &&
                l.append("type", t.discountEventID),
              l.append("percent", t.nDiscountPct.toString()),
              l.append(
                "start_date",
                new Date(1e3 * t.rtStartDate).toISOString(),
              ),
              l.append("end_date", new Date(1e3 * t.rtEndDate).toISOString());
            let u = null;
            try {
              const o = yield s().post(i, l, {
                withCredentials: !0,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                ((o.data.msg =
                  null !== (n = o.data.msg) && void 0 !== n
                    ? n
                    : o.data.message),
                200 == (null == o ? void 0 : o.status) &&
                  1 ==
                    (null === (a = o.data) || void 0 === a
                      ? void 0
                      : a.success) &&
                  o.data.discountid)
              )
                return (
                  (t.bChangedLocally = !1),
                  (t.nDiscountID = o.data.discountid),
                  (t.nDiscountPct = o.data.percentage),
                  this.InternalAddDiscounts([t]),
                  o.data
                );
              u = { response: o };
            } catch (t) {
              u = t;
            }
            const d = (0, c.l)(u);
            return (
              console.error(
                "CPackageDiscountStore.SaveDiscountToServer: failed",
                d.strErrorMsg,
                d,
              ),
              null !==
                (r =
                  null === (o = null == u ? void 0 : u.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== r
                ? r
                : { success: 2 }
            );
          });
        }
        DeleteDiscountOnServer(t, e, n, a) {
          var o, r, l;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                p.De.PARTNER_BASE_URL + "packages/removepackagediscount/" + e,
              u = new FormData();
            u.append("sessionid", p.De.SESSIONID),
              u.append("discountid", t.toString());
            let d = null;
            try {
              const r = yield s().post(i, u, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == r ? void 0 : r.status) &&
                1 ==
                  (null === (o = r.data) || void 0 === o ? void 0 : o.success)
              )
                return this.InternalDeleteDiscount(t, e, n), r.data;
              d = { response: r };
            } catch (t) {
              d = t;
            }
            const g = (0, c.l)(d);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                g.strErrorMsg,
                g,
              ),
              null !==
                (l =
                  null === (r = null == d ? void 0 : d.response) || void 0 === r
                    ? void 0
                    : r.data) && void 0 !== l
                ? l
                : { success: 2 }
            );
          });
        }
        GetCallbackListForDiscount(t) {
          return (
            this.m_mapDiscountCallbackList.has(t) ||
              this.m_mapDiscountCallbackList.set(t, new l.pB()),
            this.m_mapDiscountCallbackList.get(t)
          );
        }
        GetCallbackListForPackage(t) {
          return (
            this.m_mapPackageCallbackList.has(t) ||
              this.m_mapPackageCallbackList.set(t, new l.pB()),
            this.m_mapPackageCallbackList.get(t)
          );
        }
        GetCallbackListForDiscountEvent(t) {
          return (
            this.m_mapDiscountEventCallbackList.has(t) ||
              this.m_mapDiscountEventCallbackList.set(t, new l.pB()),
            this.m_mapDiscountEventCallbackList.get(t)
          );
        }
        GetGlobalCallbackList() {
          return this.m_allDiscountCallbackList;
        }
        GetDiscountByID(t) {
          return this.m_mapPackageDiscountsById.get(t);
        }
        GetAllDiscountsForPackage(t) {
          var e, n;
          return this.m_mapPackageDiscountsByPackageId.has(t)
            ? Array.from(
                null !==
                  (n =
                    null ===
                      (e = this.m_mapPackageDiscountsByPackageId.get(t)) ||
                    void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== n
                  ? n
                  : [],
              )
            : null;
        }
        GetAllDiscountsForAllPackages() {
          return Array.from(this.m_mapPackageDiscountsById.values());
        }
        GetAllDiscountsForDiscountEvent(t) {
          var e, n;
          return Array.from(
            null !==
              (n =
                null ===
                  (e = this.m_mapPackageDiscountsByDiscountEventId.get(t)) ||
                void 0 === e
                  ? void 0
                  : e.values()) && void 0 !== n
              ? n
              : [],
          );
        }
        GetMaxDiscountPercentage(t) {
          var e;
          return null !==
            (e = this.m_mapMaxDiscountPercentageByPackageId.get(t)) &&
            void 0 !== e
            ? e
            : 90;
        }
        GetMaxDiscountPercentageForGroup(t) {
          const e = t.map((t) => this.GetMaxDiscountPercentage(t));
          return Math.min(...e);
        }
      }
      function D(t) {
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, d.JD)(
          t.strDiscountName,
        )}`;
      }
      function m(t) {
        return t.startsWith("custom-event-");
      }
      function v(t) {
        return g.Get().GetDiscountByID(t);
      }
      function h(t) {
        return g.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function _(t) {
        return g.Get().GetAllDiscountsForPackage(t);
      }
      function E(t) {
        return g.Get().GetCallbackListForPackage(t);
      }
      function f() {
        return g.Get().GetAllDiscountsForAllPackages();
      }
      function k() {
        return g.Get().GetGlobalCallbackList();
      }
      function I() {
        return o.useCallback(
          (t, e, n) => g.Get().LoadPackageDiscounts(t, e, n),
          [],
        );
      }
      function G() {
        const t = (t) => g.Get().SaveDiscountToServer(t),
          e = (t, e, n) => g.Get().DeleteDiscountOnServer(t, e, n);
        return o.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          [],
        );
      }
      function S(t) {
        return new Map(
          Array.from(t.map((t) => [t, g.Get().GetDiscountByID(t)])),
        );
      }
      function P(t) {
        const e = (0, r.zD)(),
          [n, i] = o.useState(g.Get().GetAllDiscountsForPackage(t));
        return (
          (0, u.Qg)(g.Get().GetCallbackListForPackage(t), i),
          o.useMemo(() => {
            let t = null;
            if (null == n) return { deepestDiscount: t, bLoading: !0 };
            if ((null == n ? void 0 : n.length) > 0)
              for (const i of n)
                i.rtEndDate > e ||
                  i.nDiscountPct <= 0 ||
                  ((null == t ||
                    i.nDiscountPct > t.nDiscountPct ||
                    (i.nDiscountPct == t.nDiscountPct &&
                      i.rtEndDate > t.rtEndDate)) &&
                    (t = i));
            return { deepestDiscount: t, bLoading: !1 };
          }, [t, e, n])
        );
      }
      function C(t) {
        const e = (0, r.zD)(),
          [n, i] = o.useState(g.Get().GetAllDiscountsForAllPackages());
        return (
          (0, u.Qg)(g.Get().GetGlobalCallbackList(), i),
          o.useMemo(() => {
            var i;
            let a = null;
            if (null == n) return { mostRecentDiscount: a, bLoading: !0 };
            for (const n of t) {
              const t =
                null !== (i = g.Get().GetAllDiscountsForPackage(n)) &&
                void 0 !== i
                  ? i
                  : [];
              for (const n of t)
                n.rtStartDate < e &&
                  (!a || a.rtEndDate < n.rtEndDate) &&
                  (a = n);
            }
            return { mostRecentDiscount: a, bLoading: !1 };
          }, [e, t, n])
        );
      }
      function b(t) {
        const [e, n] = o.useState(g.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, u.Qg)(g.Get().GetCallbackListForDiscountEvent(t), n), e;
      }
      function R(t) {
        return g.Get().GetMaxDiscountPercentage(t);
      }
      function L(t) {
        return t.some(
          (t) => t.nDiscountPct > g.Get().GetMaxDiscountPercentage(t.packageID),
        );
      }
      function A(t) {
        return g.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    95518: (t, e, n) => {
      "use strict";
      n.d(e, {
        B6: () => A,
        E5: () => T,
        E_: () => F,
        Eh: () => f,
        HU: () => B,
        JW: () => M,
        LX: () => k,
        TB: () => O,
        _9: () => y,
        dy: () => V,
        ho: () => Q,
        hr: () => R,
        k: () => x,
        pl: () => L,
        s$: () => w,
        yn: () => N,
        z$: () => j,
      });
      var i = n(14694),
        a = n(10095),
        s = n(7073),
        o = n(98061),
        r = n(87813),
        c = n(37047),
        l = n(47427),
        u = n(64936),
        d = n(15690),
        p = n(45492),
        g = n(20417),
        D = n(45284),
        m = n(46984),
        v = n(37563),
        h = n(70044);
      function _(t, e) {
        var n, i;
        return (
          !!t == !!e &&
          (null == t ? void 0 : t.packageID) ==
            (null == e ? void 0 : e.packageID) &&
          (null == t ? void 0 : t.discountEventID) ==
            (null == e ? void 0 : e.discountEventID) &&
          (null == t ? void 0 : t.eState) == (null == e ? void 0 : e.eState) &&
          (null === (n = null == t ? void 0 : t.rgConflictDetails) ||
          void 0 === n
            ? void 0
            : n.length) ==
            (null === (i = null == e ? void 0 : e.rgConflictDetails) ||
            void 0 === i
              ? void 0
              : i.length) &&
          (null == t ? void 0 : t.optInReg) ==
            (null == e ? void 0 : e.optInReg) &&
          E(null == t ? void 0 : t.discount, null == e ? void 0 : e.discount) &&
          (null == t ? void 0 : t.nBaseAppID) ==
            (null == e ? void 0 : e.nBaseAppID) &&
          (null == t ? void 0 : t.bChangedLocally) ==
            (null == e ? void 0 : e.bChangedLocally)
        );
      }
      function E(t, e) {
        var n;
        return (
          (!e &&
            0 ==
              (null !== (n = null == t ? void 0 : t.nDiscountPct) &&
              void 0 !== n
                ? n
                : 0)) ||
          (!!e && e.nDiscountPct == (null == t ? void 0 : t.nDiscountPct))
        );
      }
      const f = 30,
        k = f * m._H.PerDay - 1.5 * m._H.PerHour,
        I = 10 * m._H.PerMinute;
      class G {
        static Get() {
          return (
            G.s_Singleton || ((G.s_Singleton = new G()), G.s_Singleton.Init()),
            G.s_Singleton
          );
        }
        static IsInitialized() {
          return !!G.s_Singleton;
        }
        constructor() {
          (this.m_mapPackageStateForDiscountEvents = new Map()),
            (this.m_mapLocalPackageDiscountOverrides = new Map()),
            (this.m_mapDiscountPackageCallbackList = new Map()),
            (this.m_mapDiscountGridCellCallbackList = new Map()),
            (this.m_mapDiscountEventColumnCallbackList = new Map()),
            (this.m_localPackageDiscountOverrideCallbackList = new p.pB()),
            "dev" == v.De.WEB_UNIVERSE &&
              (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const t of (0, o.MQ)())
            G.Get().ComputePackageState(t),
              (0, s.XM)(t).Register(() => {
                G.Get().ComputePackageState(t);
              });
          (0, h.ix)().Register(() => {
            for (const t of (0, o.MQ)()) G.Get().ComputePackageState(t, !0);
          }),
            G.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(t, e, n) {
          var i;
          const a =
            null === (i = G.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === i
              ? void 0
              : i.get(e);
          if (1 != (null == a ? void 0 : a.eState))
            return (
              console.error(
                "Cannot change discount in current state:",
                a.eState,
              ),
              null
            );
          const s = a.discount,
            o = (0, h.f0)(e),
            r = {
              nDiscountID: null == s ? void 0 : s.nDiscountID,
              packageID: t,
              nDiscountPct: n,
              strDiscountName: o.name,
              strDiscountDescription: o.description,
              rtStartDate: o.start_date,
              rtEndDate: o.end_date,
              discountEventID: o.id,
              bChangedLocally: !0,
            };
          return E(r, s)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(t) ||
                this.m_mapLocalPackageDiscountOverrides.set(t, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(t).set(e, r),
              this.ComputePackageState(t),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              ),
              r);
        }
        GetHighestPackageDiscount(t) {
          let e = this.m_mapPackageStateForDiscountEvents.get(t);
          if (!e) return 0;
          let n = 0;
          return (
            e.forEach((t, e) => {
              var i;
              1 == t.eState &&
                (n = Math.max(
                  n,
                  (null === (i = t.discount) || void 0 === i
                    ? void 0
                    : i.nDiscountPct) || 0,
                ));
            }),
            n
          );
        }
        GetLocalPackageDiscountOverrides() {
          const t = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((e) =>
              e.forEach((e) => {
                E(e, e.nDiscountID && (0, s._J)(e.nDiscountID)) || t.push(e);
              }),
            ),
            t.sort(b),
            t
          );
        }
        DiscardAllLocalPackageDiscountOverrides(t) {
          this.m_mapLocalPackageDiscountOverrides.clear();
          for (const e of t) this.ComputePackageState(e);
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
        }
        DiscardLocalPackageDiscountOverride(t, e) {
          var n;
          null === (n = this.m_mapLocalPackageDiscountOverrides.get(t)) ||
            void 0 === n ||
            n.delete(e),
            this.ComputePackageState(t),
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
              this.GetLocalPackageDiscountOverrides(),
            );
        }
        OptInRegistrationUpdatedForApp(t, e) {
          const n = Array.from(this.m_mapPackageStateForDiscountEvents.values())
            .map((t) => t.get(e))
            .filter((e) => (null == e ? void 0 : e.nBaseAppID) == t)
            .map((t) => t.packageID);
          null == n || n.forEach((t) => this.ComputePackageState(t));
        }
        GetPackageDiscountsIncludingOverrides(t) {
          var e;
          const n = (0, u.kl)() - k,
            i = (0, s.co)(t);
          if (!i) return null;
          const a = new Map(
            i.filter((t) => t.rtEndDate > n).map((t) => [t.discountEventID, t]),
          );
          return (
            null === (e = this.m_mapLocalPackageDiscountOverrides.get(t)) ||
              void 0 === e ||
              e.forEach((t, e) => {
                E(t, a.get(e)) || a.set(e, t);
              }),
            a
          );
        }
        GetDiscountGridCellCallbackList(t, e) {
          if (!t || !e) return null;
          this.m_mapDiscountGridCellCallbackList.has(t) ||
            this.m_mapDiscountGridCellCallbackList.set(t, new Map());
          const n = this.m_mapDiscountGridCellCallbackList.get(t);
          return n.has(e) || n.set(e, new p.pB()), n.get(e);
        }
        GetDiscountPackageCallbackList(t) {
          if (!t) return null;
          let e = this.m_mapDiscountPackageCallbackList.get(t);
          return (
            e ||
              ((e = new p.pB()),
              this.m_mapDiscountPackageCallbackList.set(t, e)),
            e
          );
        }
        GetDiscountEventColumnCallbackList(t) {
          return t
            ? (this.m_mapDiscountEventColumnCallbackList.has(t) ||
                this.m_mapDiscountEventColumnCallbackList.set(t, new p.pB()),
              this.m_mapDiscountEventColumnCallbackList.get(t))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(t) {
          const e = [];
          return (
            G.Get().m_mapPackageStateForDiscountEvents.forEach((n, i) =>
              e.push(n.get(t)),
            ),
            e
          );
        }
        ComputePackageState(t, e) {
          var n, s;
          const o = d.Z.Get().GetPackage(t);
          if (!o) return;
          const c = (0, h.wQ)(),
            l = (0, r.R1)(o),
            u = l.nBaseAppID;
          let p = u && a.qh.Get().GetOptInRegistrationAndEligibilityForApp(u);
          u ||
            p ||
            (p = a.qh
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                o.GetIncludedAppIDs(),
              ));
          const g = this.GetPackageDiscountsIncludingOverrides(t),
            D = !g,
            m = D
              ? null
              : Array.from(g.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const v = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const a of c) {
            if (e && v.has(a.id)) continue;
            const r = { packageID: t, discountEventID: a.id, nBaseAppID: u };
            if (
              ((r.discount = null == g ? void 0 : g.get(a.id)),
              (r.bChangedLocally = !!(null === (n = r.discount) || void 0 === n
                ? void 0
                : n.bChangedLocally)),
              D)
            )
              r.eState = 0;
            else if (
              (null === (s = r.discount) || void 0 === s
                ? void 0
                : s.nDiscountPct) > 0
            ) {
              r.eState = 1;
              const t =
                a.opt_in_name && (null == p ? void 0 : p.get(a.opt_in_name));
              t && (r.optInReg = t);
            } else {
              if (((r.eState = 1), C(a, o))) r.eState = 10;
              else if (a.opt_in_name) {
                const { ePackageDiscountState: t, optInRegistration: e } = P(
                  a.opt_in_name,
                  p,
                  o,
                  l,
                  a,
                );
                (r.eState = t), (r.optInReg = e);
              }
              if (10 != r.eState && 4 != r.eState && 5 != r.eState) {
                const e = S(t, a, m);
                1 != e.ePackageDiscountState &&
                  ((r.eState = e.ePackageDiscountState),
                  (r.rgConflictDetails = e.rgConflictingDiscounts.map((t) => {
                    var e, n;
                    return null !==
                      (n =
                        null === (e = (0, i.fH)(t.discountEventID)) ||
                        void 0 === e
                          ? void 0
                          : e.name) && void 0 !== n
                      ? n
                      : t.strDiscountName;
                  })));
              }
            }
            _(r, v.get(a.id)) ||
              (v.set(a.id, r),
              this.GetDiscountPackageCallbackList(t).Dispatch(),
              this.GetDiscountGridCellCallbackList(t, a.id).Dispatch(r),
              this.GetDiscountEventColumnCallbackList(a.id).Dispatch(
                this.GetAllPackageStatesForDiscountEvent(a.id),
              ));
          }
        }
        GetAvailableDiscountEventsInRange(t, e, n) {
          const i = this.m_mapPackageStateForDiscountEvents.get(t),
            a = new Set([1, 11, 2, 3]);
          return (0, h.wQ)()
            .filter(
              (t) =>
                e <= t.start_date &&
                t.end_date <= n &&
                a.has(i.get(t.id).eState),
            )
            .map((t) => t.id);
        }
        GetFutureDiscountRanges(t) {
          const e = d.Z.Get().GetPackage(t),
            n = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !n) return [];
          const a = Array.from(n.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate,
            ),
            s = (0, u.kl)(),
            o = Math.max(s, e.GetReleaseDateRTime() + k, (0, h.QM)(t) + k),
            r = [],
            l = new Set();
          let p = o;
          for (let e = 0; e < a.length; e++) {
            const n = a[e];
            if (0 == n.nDiscountPct) continue;
            const s = (0, i.fH)(n.discountEventID);
            let o = n.rtStartDate - k;
            const u = "unique" == (null == s ? void 0 : s.collision_type);
            if (u && ((o = n.rtStartDate + I), e + 1 < a.length)) {
              const t = a[e + 1],
                n = (0, h.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (o = Math.min(o, t.rtStartDate - k));
            }
            if (p + m._H.PerDay < o) {
              const e = {
                bIsAvailable: !0,
                rtStartDate: p,
                rtEndDate: o,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  t,
                  p,
                  o,
                ),
              };
              r.push(e), e.rgDiscountEventIDs.forEach((t) => l.add(t));
            }
            const d = {
              bIsAvailable: !1,
              rtStartDate: n.rtStartDate,
              rtEndDate: n.rtEndDate,
              discount: n,
              rgDiscountEventIDs: [n.discountEventID],
            };
            if (
              (r.push(d),
              l.add(n.discountEventID),
              (p = n.rtEndDate + k),
              u && ((p = n.rtEndDate - I), e - 1 >= 0))
            ) {
              const t = a[e - 1],
                n = (0, h.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (p = Math.max(p, t.rtEndDate + k));
            }
            const g = (0, c._)(p);
            g - p <= 2 * m._H.PerHour && (p = g);
          }
          const g = (0, c._)(s + m._H.PerYear / 2);
          if (p + m._H.PerDay < g) {
            const e = {
              bIsAvailable: !0,
              rtStartDate: p,
              rtEndDate: g,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                t,
                p,
                g,
              ),
            };
            r.push(e), e.rgDiscountEventIDs.forEach((t) => l.add(t));
          }
          const D = (0, h.wQ)().filter(
            (e) =>
              "unique" == e.collision_type &&
              !l.has(e.id) &&
              1 ==
                this.m_mapPackageStateForDiscountEvents.get(t).get(e.id).eState,
          );
          for (const t of D)
            for (let e = 0; e < r.length; e++)
              if (
                r[e].rtStartDate <= t.start_date &&
                (e == r.length - 1 || t.start_date < r[e + 1].rtStartDate)
              ) {
                const n = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: t.start_date,
                  rtEndDate: t.end_date,
                  rgDiscountEventIDs: [t.id],
                };
                r.splice(e + 1, 0, n);
                break;
              }
          return r;
        }
      }
      function S(t, e, n) {
        let a = 1;
        const s = [];
        let o = !1;
        const r = d.Z.Get().GetPackage(t);
        if ((null == r ? void 0 : r.GetReleaseDateRTime()) > e.start_date - k)
          return (
            (a = 6),
            {
              ePackageDiscountState: a,
              rgConflictingDiscounts: s,
              bChangedLocally: o,
            }
          );
        if ((0, h.QM)(t) > e.start_date - k)
          return (
            (a = 7),
            {
              ePackageDiscountState: a,
              rgConflictingDiscounts: s,
              bChangedLocally: o,
            }
          );
        for (const t of n) {
          if (e.id == t.discountEventID) continue;
          const n = (0, i.fH)(t.discountEventID),
            r =
              "unique" == e.collision_type ||
              "unique" == (null == n ? void 0 : n.collision_type),
            c = r ? e.start_date + I : e.start_date - k,
            l = r ? e.end_date - I : e.end_date + k;
          if (t.rtEndDate > c && l > t.rtStartDate) {
            if (((o = o || t.bChangedLocally), 0 == t.nDiscountPct)) continue;
            s.push(t), (a = r ? 9 : 8);
          }
        }
        return {
          ePackageDiscountState: a,
          rgConflictingDiscounts: s,
          bChangedLocally: o,
        };
      }
      function P(t, e, n, i, s) {
        let o,
          r = 5;
        if (e)
          (o = e.get(t)),
            !o || o.restricted || o.pruned
              ? ((r = 4), (o = { restricted: !0 }))
              : (r = o.opt_in ? 1 : o.invited || !o.time_opted_in ? 2 : 3);
        else if (!i.nBaseAppID) {
          const t = n
            .GetIncludedAppIDs()
            .map((t) => {
              var e;
              return null ===
                (e = a.qh.Get().GetOptInRegistrationAndEligibilityForApp(t)) ||
                void 0 === e
                ? void 0
                : e.get(s.opt_in_name);
            })
            .filter(Boolean);
          t.some((t) => t.opt_in)
            ? (r = 1)
            : t.some((t) => !t.restricted && !t.pruned) && (r = 11);
        }
        return { ePackageDiscountState: r, optInRegistration: o };
      }
      function C(t, e) {
        var n, i, a;
        if ((null === (n = t.appids) || void 0 === n ? void 0 : n.length) > 0) {
          if (
            null === (i = null == e ? void 0 : e.GetIncludedAppIDs()) ||
            void 0 === i
              ? void 0
              : i.length
          ) {
            const n = new Set(t.appids);
            for (const t of e.GetIncludedAppIDs()) {
              if (n.has(t)) return !1;
              const e =
                null === (a = d.Z.Get().GetApp(t)) || void 0 === a
                  ? void 0
                  : a.GetParentAppID();
              if (e && n.has(e)) return !1;
            }
          }
          return !0;
        }
        return !1;
      }
      function b(t, e) {
        var n, i;
        if (t.packageID != e.packageID) {
          const a =
              null === (n = d.Z.Get().GetPackage(t.packageID)) || void 0 === n
                ? void 0
                : n.GetName(),
            s =
              null === (i = d.Z.Get().GetPackage(e.packageID)) || void 0 === i
                ? void 0
                : i.GetName();
          return (0, D.eT)(a, s);
        }
        {
          const n = 0 == t.nDiscountPct;
          return n != (0 == e.nDiscountPct)
            ? n
              ? -1
              : 1
            : t.rtStartDate - e.rtStartDate;
        }
      }
      function R() {
        return l.useCallback(() => {
          G.Get();
        }, []);
      }
      function L() {
        const [t, e] = l.useState(G.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, g.Qg)(G.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function A() {
        return l.useCallback(() => {
          var t;
          return (
            (null === (t = G.Get().GetLocalPackageDiscountOverrides()) ||
            void 0 === t
              ? void 0
              : t.length) > 0
          );
        }, []);
      }
      function y() {
        return l.useCallback(
          (t) => G.Get().DiscardAllLocalPackageDiscountOverrides(t),
          [],
        );
      }
      function w() {
        return l.useCallback(
          (t, e) => G.Get().OptInRegistrationUpdatedForApp(t, e),
          [],
        );
      }
      function O() {
        return l.useCallback(
          (t, e) => G.Get().DiscardLocalPackageDiscountOverride(t, e),
          [],
        );
      }
      function B(t, e) {
        var n, i, a;
        const s =
          null === (n = G.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
          void 0 === n
            ? void 0
            : n.get(e);
        return 1 == (null == s ? void 0 : s.eState)
          ? null !==
              (a =
                null === (i = null == s ? void 0 : s.discount) || void 0 === i
                  ? void 0
                  : i.nDiscountPct) && void 0 !== a
            ? a
            : 0
          : null;
      }
      function N(t, e) {
        const [n, i] = l.useState(() => {
          var n;
          return null ===
            (n = G.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === n
            ? void 0
            : n.get(e);
        });
        (0, g.Qg)(G.Get().GetDiscountGridCellCallbackList(t, e), i);
        return {
          packageState: n,
          fnSetDiscountPct: l.useCallback(
            (n) => {
              G.Get().OverridePackageDiscountPct(t, e, n);
            },
            [t, e],
          ),
        };
      }
      function F() {
        return l.useCallback((t, e, n) => {
          const i = [];
          for (const a of n) {
            const n = G.Get().OverridePackageDiscountPct(a, e, t);
            n && i.push(n);
          }
          return i;
        }, []);
      }
      function M(t) {
        const e = T(t);
        return l.useMemo(
          () => ({
            nAlreadySet: e.alreadySet.size,
            nAvailable: e.available.size,
            nConflicts: e.conflicts.size,
            nNeedRegistration: e.needRegistration.size,
            nIneligibile: e.ineligibile.size,
          }),
          [e],
        );
      }
      function T(t) {
        const [e, n] = l.useState(() => U(t)),
          i = l.useCallback(() => {
            n(U(t));
          }, [t]);
        return (
          l.useEffect(i, [t, i]),
          (0, g.Qg)(G.Get().GetDiscountEventColumnCallbackList(t), i),
          e
        );
      }
      function U(t) {
        var e, n;
        const i = G.Get().GetAllPackageStatesForDiscountEvent(t),
          a = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const t of i)
          switch (null == t ? void 0 : t.eState) {
            case 0:
              break;
            case 1:
              (null !==
                (n =
                  null === (e = t.discount) || void 0 === e
                    ? void 0
                    : e.nDiscountPct) && void 0 !== n
                ? n
                : 0) > 0
                ? a.alreadySet.add(t.packageID)
                : a.available.add(t.packageID);
              break;
            case 6:
            case 7:
            case 8:
            case 9:
              a.conflicts.add(t.packageID);
              break;
            case 2:
            case 3:
              a.needRegistration.add(t.packageID);
              break;
            case 4:
            case 5:
            case 10:
              a.ineligibile.add(t.packageID);
          }
        return a;
      }
      function V(t) {
        return (
          !!(0, s.LT)(t).some((t) => t.nDiscountPct > 0) ||
          !(
            !G.IsInitialized() ||
            !G.Get()
              .GetAllPackageStatesForDiscountEvent(t)
              .some((t) => {
                var e, n;
                return (
                  (null !==
                    (n =
                      null === (e = t.discount) || void 0 === e
                        ? void 0
                        : e.nDiscountPct) && void 0 !== n
                    ? n
                    : 0) > 0
                );
              })
          )
        );
      }
      function x(t) {
        if ((0, s.kk)(t)) return !0;
        const e = (0, i.fH)(t);
        if (!(null == e ? void 0 : e.opt_in_name)) return !0;
        const n = a.qh.Get().GetAllOptInRegistrations(e.opt_in_name);
        return (
          !!(null == n ? void 0 : n.length) &&
          n.some((t) => !t.restricted && !t.pruned)
        );
      }
      function j(t) {
        const e = (function () {
            const [t, e] = l.useState(G.IsInitialized());
            return (0, g.Qg)(G.s_initializationCallbackList, e), t;
          })(),
          [n, i] = l.useState(e ? G.Get().GetFutureDiscountRanges(t) : []),
          a = l.useCallback(
            () => i(e ? G.Get().GetFutureDiscountRanges(t) : []),
            [t, e],
          );
        return (
          (0, g.Qg)(
            e && G.Get().GetLocalPackageDiscountOverrideCallbackList(),
            a,
          ),
          (0, g.Qg)(e && (0, s.XM)(t), a),
          l.useEffect(a, [t, e, a]),
          n
        );
      }
      function Q(t) {
        let [e, n] = l.useState(() => G.Get().GetHighestPackageDiscount(t)),
          i = l.useCallback(() => {
            n(G.Get().GetHighestPackageDiscount(t));
          }, [t, n]);
        return (0, g.Qg)(G.Get().GetDiscountPackageCallbackList(t), i), e;
      }
      G.s_initializationCallbackList = new p.pB();
    },
    70044: (t, e, n) => {
      "use strict";
      n.d(e, {
        $f: () => E,
        D_: () => G,
        P6: () => I,
        QM: () => g,
        Zq: () => f,
        f0: () => m,
        im: () => h,
        ix: () => v,
        wQ: () => D,
        x9: () => _,
        y4: () => k,
      });
      var i = n(47427),
        a = n(64936),
        s = n(45492),
        o = n(20417),
        r = n(37563),
        c = n(14694),
        l = n(7073),
        u = n(95518);
      const d = "related-discount-view";
      class p {
        static Get() {
          return (
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
          );
        }
        constructor() {
          (this.m_mapDiscountEventsByID = new Map()),
            (this.m_discountEventsCallbackList = new s.pB()),
            (this.m_mapLastTimeRaisedPrices = new Map()),
            (this.m_strSelectedDiscountEventID = null),
            (this.m_bIncludeWeeklongEvents = !1),
            (this.m_bIncludeCustomEvents = !0),
            (this.m_bIncludeIneligibleEvents = !1),
            (this.m_bIncludeConflictsInSingleEventView = !0),
            (this.m_bEditingDailyDealDiscount = !1),
            (this.m_eRelatedDiscountView = "deepest-past"),
            (this.m_RelatedDiscountViewCallbackList = new s.pB()),
            (this.m_gridEventSelectionParametersCallbackList = new s.pB()),
            (this.m_setVisibleDiscountEventIDs = new Set()),
            (this.m_visibleDiscountEventIDsCallbackList = new s.pB()),
            "dev" == r.De.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        Init() {
          var t;
          const e = (0, r.kQ)("price_increase_times", "application_config");
          if (
            (("dev" != r.De.WEB_UNIVERSE && "beta" != r.De.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", e),
            this.BIsPriceIncreasePayloadValid(e))
          )
            for (let t in e)
              this.m_mapLastTimeRaisedPrices.set(Number(t), e[t]);
          else
            "dev" == r.De.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            null !== (t = window.localStorage.getItem(d)) && void 0 !== t
              ? t
              : "deepest-past"),
            this.UpdateDiscountEventsForGrid(),
            (0, c.i4)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, l.v6)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const t = (0, c.o)(),
            e = (0, l.Su)(),
            n = new Set(t.map((t) => t.id)),
            i = [],
            s = (0, a.kl)();
          for (const t of e)
            t.rtEndDate > s &&
              (n.has(t.discountEventID) ||
                (i.push({
                  id: t.discountEventID,
                  name: t.strDiscountName,
                  start_date: t.rtStartDate,
                  end_date: t.rtEndDate,
                  description: t.strDiscountDescription,
                }),
                n.add(t.discountEventID)));
          (this.m_rgDiscountEvents &&
            n.size == this.m_rgDiscountEvents.length &&
            !this.m_rgDiscountEvents.some((t) => !n.has(t.id))) ||
            ((this.m_rgDiscountEvents = i.concat(t)),
            this.m_rgDiscountEvents.sort((t, e) =>
              t.start_date == e.start_date
                ? t.end_date - e.end_date
                : t.start_date - e.start_date,
            ),
            (this.m_mapDiscountEventsByID = new Map(
              this.m_rgDiscountEvents.map((t) => [t.id, t]),
            )),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_discountEventsCallbackList.Dispatch(
              this.m_rgDiscountEvents,
            ));
        }
        UpdateVisibleDiscountEventIDs() {
          this.SetEventSelectionParametersFromURL(),
            (this.m_setVisibleDiscountEventIDs = new Set());
          for (const t of this.m_rgDiscountEvents) {
            let e = null == this.m_strSelectedDiscountEventID;
            e && !this.m_bIncludeCustomEvents && (0, l.kk)(t.id) && (e = !1),
              e &&
                !this.m_bIncludeWeeklongEvents &&
                t.id.startsWith("weeklongdeal_") &&
                !(0, u.dy)(t.id) &&
                (e = !1),
              !e ||
                this.m_bIncludeIneligibleEvents ||
                (0, u.k)(t.id) ||
                (e = !1),
              this.m_strSelectedDiscountEventID == t.id && (e = !0),
              e && this.m_setVisibleDiscountEventIDs.add(t.id);
          }
          this.m_visibleDiscountEventIDsCallbackList.Dispatch(
            this.m_setVisibleDiscountEventIDs,
          );
        }
        BIsPriceIncreasePayloadValid(t) {
          const e = t;
          if (e && "object" == typeof e) {
            for (let t in e)
              if (isNaN(parseInt(t)) || "number" != typeof e[t]) return !1;
            return !0;
          }
          return !1;
        }
        SetEventSelectionParametersFromURL() {
          const t = new URLSearchParams(window.location.search);
          if (t.has("de")) {
            const e = decodeURIComponent(t.get("de"));
            this.m_mapDiscountEventsByID.has(e) &&
              (this.m_strSelectedDiscountEventID = e);
          }
          if (t.has("wd")) {
            const e = t.get("wd");
            this.m_bIncludeWeeklongEvents = "0" != e;
          }
          if (t.has("cd")) {
            const e = t.get("cd");
            this.m_bIncludeCustomEvents = "0" != e;
          }
          if (t.has("cf")) {
            const e = t.get("cf");
            this.m_bIncludeConflictsInSingleEventView = "0" != e;
          }
          if (t.has("dd")) {
            const e = t.get("dd");
            this.m_bEditingDailyDealDiscount = "0" != e;
          }
        }
        HandleEventSelectionChangeAndNotifyListeners() {
          const t = new URL(window.location.href);
          this.m_strSelectedDiscountEventID
            ? t.searchParams.set(
                "de",
                encodeURIComponent(this.m_strSelectedDiscountEventID),
              )
            : t.searchParams.delete("de"),
            this.m_bIncludeWeeklongEvents
              ? t.searchParams.set("wd", "1")
              : t.searchParams.delete("wd"),
            this.m_bIncludeCustomEvents
              ? t.searchParams.delete("cd")
              : t.searchParams.set("cd", "0"),
            this.m_bIncludeConflictsInSingleEventView
              ? t.searchParams.delete("cf")
              : t.searchParams.set("cf", "0"),
            this.m_bEditingDailyDealDiscount &&
              ((this.m_bEditingDailyDealDiscount = !1),
              t.searchParams.delete("dd")),
            window.history.replaceState({}, "", t.toString()),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_gridEventSelectionParametersCallbackList.Dispatch(
              this.GetEventSelectionParameters(),
            );
        }
        GetEventSelectionParameters() {
          return {
            bSingleDiscountEventView: null != this.m_strSelectedDiscountEventID,
            strSelectedEvent: this.m_strSelectedDiscountEventID,
            bEditingDailyDealDiscount: this.m_bEditingDailyDealDiscount,
            fnSelectEvent: (t) => {
              (this.m_strSelectedDiscountEventID = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
            fnSetIncludeWeeklongEvents: (t) => {
              (this.m_bIncludeWeeklongEvents = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeCustomEvents: this.m_bIncludeCustomEvents,
            fnSetIncludeCustomEvents: (t) => {
              (this.m_bIncludeCustomEvents = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeConflictsInSingleEventView:
              this.m_bIncludeConflictsInSingleEventView,
            fnSetIncludeConflictsInSingleEventView: (t) => {
              (this.m_bIncludeConflictsInSingleEventView = t),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
          };
        }
      }
      function g(t) {
        var e;
        return null !== (e = p.Get().m_mapLastTimeRaisedPrices.get(t)) &&
          void 0 !== e
          ? e
          : 0;
      }
      function D() {
        return p.Get().m_rgDiscountEvents;
      }
      function m(t) {
        return p.Get().m_mapDiscountEventsByID.get(t);
      }
      function v() {
        return p.Get().m_discountEventsCallbackList;
      }
      function h() {
        const [t, e] = i.useState(p.Get().m_rgDiscountEvents);
        return (0, o.Qg)(p.Get().m_discountEventsCallbackList, e), t;
      }
      function _() {
        const [t, e] = i.useState(p.Get().m_setVisibleDiscountEventIDs);
        return (0, o.Qg)(p.Get().m_visibleDiscountEventIDsCallbackList, e), t;
      }
      function E(t = !0) {
        return p.Get().m_setVisibleDiscountEventIDs;
      }
      function f(t) {
        const [e, n] = i.useState(p.Get().m_mapDiscountEventsByID.get(t)),
          a = i.useCallback(
            () => n(p.Get().m_mapDiscountEventsByID.get(t)),
            [t],
          );
        return (
          (0, o.Qg)(p.Get().m_discountEventsCallbackList, a),
          i.useEffect(a, [t, a]),
          e
        );
      }
      function k(t = !0) {
        const [e, n] = i.useState(p.Get().GetEventSelectionParameters()),
          a = t ? p.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, o.Qg)(a, n), e;
      }
      function I() {
        const [t, e] = i.useState(p.Get().m_eRelatedDiscountView);
        (0, o.Qg)(p.Get().m_RelatedDiscountViewCallbackList, e);
        return [
          t,
          i.useCallback((t) => {
            (p.Get().m_eRelatedDiscountView = t),
              window.localStorage.setItem(d, t),
              p.Get().m_RelatedDiscountViewCallbackList.Dispatch(t);
          }, []),
        ];
      }
      function G() {
        return i.useCallback(() => {
          p.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    23121: (t, e, n) => {
      "use strict";
      n.d(e, {
        A$: () => S,
        Eg: () => R,
        Ii: () => C,
        JP: () => b,
        O7: () => G,
        UA: () => k,
        zQ: () => E,
        zV: () => I,
      });
      var i = n(47427),
        a = n(59728),
        s = n(37563),
        o = n(31846),
        r = n(9953),
        c = n.n(r),
        l = n(6683),
        u = n(42006),
        d = n(66263),
        p = n(30500),
        g = n.n(p),
        D = n(7073),
        m = n(95518);
      function v(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          a = (0, m.ho)(n);
        let s = (0, D.Qy)(n) < a,
          r = g()(c().PackageNameColumn, s && c().PackagePricesBelowMin),
          l = s
            ? (0, o.Xx)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return i.createElement(
          _,
          Object.assign({ className: r, toolTip: l }, t),
        );
      }
      function h(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          a = (0, d.qH)(n);
        let s = g()(c().PackageNameColumn, a && c().PackagePricesBelowMin),
          r = a
            ? (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return i.createElement(
          _,
          Object.assign({ className: s, toolTip: r }, t),
        );
      }
      function _(t) {
        var e;
        const {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            cell: r,
            className: l,
            toolTip: u,
          } = t,
          d = r.getRow().getData().packageID,
          p =
            null !== (e = r.getValue()) && void 0 !== e
              ? e
              : i.createElement(
                  "span",
                  { className: c().UnknownValue },
                  (0, o.Xx)("#PackageGrid_PackageID", d),
                );
        return i.createElement(
          R,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${d}`,
            strToolTip: u,
            strClassName: l,
          },
          p,
        );
      }
      function E(t) {
        return i.useMemo(
          () => ({
            visible: !0,
            title: (0, o.Xx)("#PackageGrid_Column_PackageID"),
            field: "packageID",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              i.createElement(_, Object.assign({}, t)),
            ),
            cssClass: c().PackageID,
            hozAlign: "right",
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageID_ttip"),
          }),
          [t],
        );
      }
      function f(t, e, n, i) {
        return (
          !!(
            /^\d+$/.test(t) &&
            n.packageID &&
            n.packageID.toString().startsWith(t)
          ) || e.toLowerCase().includes(t.toLowerCase())
        );
      }
      function k(t, e) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_PackageName"),
            field: "packageName",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              e
                ? i.createElement(v, Object.assign({}, t))
                : i.createElement(h, Object.assign({}, t)),
            ),
            cssClass: c().PackageName,
            width: 300,
            frozen: !0,
            variableHeight: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageName_ttip"),
            headerFilter: "input",
            headerFilterPlaceholder: (0, o.Xx)(
              "#PackageGrid_PackageNameFilterInputPrompt",
            ),
            headerFilterFunc: f,
          }),
          [t, e],
        );
      }
      function I(t) {
        return i.useMemo(
          () => ({
            visible: !1,
            title: "App IDs - hidden column",
            field: "appids",
            headerSort: !1,
            frozen: !0,
          }),
          [],
        );
      }
      function G(t) {
        return i.useMemo(
          () => ({
            visible: !1,
            title: (0, o.Xx)("#PackageGrid_Column_PackageType"),
            field: "packageType",
            headerSort: !1,
            cssClass: c().PackageType,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageType_ttip"),
            frozen: !0,
          }),
          [],
        );
      }
      function S(t) {
        const e = t.getCell("packageType"),
          n = e && "function" == typeof e.getValue && e.getValue();
        n && t.getElement().classList.add(n),
          t.getNextRow() || t.getElement().classList.add(c().LastRow);
      }
      function P(t) {
        var e;
        const { fnBLocalChangesExist: n, fnWarnUser: a, cell: r } = t,
          c = r.getRow().getData().appids,
          l =
            null !== (e = null == c ? void 0 : c.length) && void 0 !== e
              ? e
              : 0,
          u = r.getRow().getData().packageID;
        return i.createElement(
          R,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${u}`,
            strToolTip: (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == l ? "1 appid" : l + " appids",
        );
      }
      function C(t) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_AppName"),
            field: "appName",
            sorter: u.yh,
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              i.createElement(P, Object.assign({}, t)),
            ),
            cssClass: c().AppCount,
            width: 80,
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_AppName_ttip"),
          }),
          [t],
        );
      }
      function b(t, e, n, i) {
        return t == (0, o.Xx)("#PackageGrid_NoBaseGameFoundForPackage")
          ? `<div title='${(0, o.Xx)(
              "#PackageGrid_NoBaseGameExplanation",
            )}' >${t} (?) <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              e,
            )})</span></div>`
          : `<div>${t} <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              e,
            )})</span></div>`;
      }
      function R(t) {
        const {
          fnBLocalChangesExist: e,
          fnWarnUser: n,
          href: s,
          children: o,
          strToolTip: r,
          strClassName: c,
        } = t;
        return i.createElement(
          a.HP,
          { toolTipContent: r, className: c },
          i.createElement(
            "a",
            {
              onClick: (t) => {
                e() && (t.preventDefault(), n(t, s));
              },
              href: s,
            },
            o,
          ),
        );
      }
    },
    82416: (t, e, n) => {
      "use strict";
      n.d(e, { j: () => s });
      var i = n(47427),
        a = n(31846);
      function s(t) {
        const e = i.useCallback(
          (e) => {
            if (t())
              return (
                e.preventDefault(),
                (e.returnValue = (0, a.Xx)(
                  "#PackageGrid_NavigationWarning_Title",
                )),
                e.returnValue
              );
          },
          [t],
        );
        i.useEffect(
          () => (
            window.addEventListener("beforeunload", e),
            () => window.removeEventListener("beforeunload", e)
          ),
          [e],
        );
      }
    },
    87813: (t, e, n) => {
      "use strict";
      n.d(e, { R1: () => c, Sx: () => o, xs: () => u });
      var i = n(85556),
        a = n(15690),
        s = n(31846);
      const o = new Set([0, 2, 6, 13]),
        r = new Set([4, 7, 11]);
      function c(t) {
        var e, n;
        let i,
          c = !1,
          l = !1;
        const u = new Set();
        for (const n of null !==
          (e = null == t ? void 0 : t.GetIncludedAppIDs()) && void 0 !== e
          ? e
          : []) {
          const t = a.Z.Get().GetApp(n);
          if (t && o.has(t.GetAppType())) (c = !0), u.add(t.GetID());
          else if (t && r.has(t.GetAppType())) {
            l = !0;
            const e = t.GetParentAppID();
            e && u.add(e);
          }
        }
        let d = null;
        1 == u.size
          ? ((i = Array.from(u)[0]),
            (d =
              null === (n = a.Z.Get().GetApp(i)) || void 0 === n
                ? void 0
                : n.GetName()))
          : u.size > 1 &&
            (d = (0, s.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          d || (d = (0, s.Xx)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: d,
          contents: c && l ? "BOTH" : c ? "GAME" : l ? "DLC" : null,
          nBaseAppID: i,
        };
      }
      const l = { include_release: !0 };
      function u(t, e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (
            1 != (yield a.Z.Get().HintLoadStorePackages(t, l)) ||
            e.token.reason
          )
            return null;
          const n = [];
          t.map((t) => a.Z.Get().GetPackage(t))
            .filter((t) => !!t)
            .forEach((t) => n.push(...t.GetIncludedAppIDs()));
          const i = Array.from(new Set(n));
          if (1 != (yield a.Z.Get().HintLoadStoreApps(i, l)) || e.token.reason)
            return null;
          const s = i
              .map((t) => a.Z.Get().GetApp(t))
              .filter((t) => !!(null == t ? void 0 : t.GetParentAppID()))
              .map((t) => t.GetParentAppID()),
            o = Array.from(new Set(s));
          if (1 != (yield a.Z.Get().HintLoadStoreApps(o, l)) || e.token.reason)
            return null;
          return Array.from(new Set(i.concat(o)));
        });
      }
    },
  },
]);

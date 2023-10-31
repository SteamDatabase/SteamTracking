/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5875],
  {
    22798: (t) => {
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
    95568: (t) => {
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
    7851: (t) => {
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
    65395: (t, e, n) => {
      "use strict";
      n.d(e, {
        J7: () => f,
        K$: () => S,
        Lr: () => R,
        dH: () => m,
        fH: () => I,
        i4: () => k,
        o: () => E,
        vc: () => G,
        z8: () => P,
      });
      var i = n(33940),
        s = n(52868),
        a = n.n(s),
        o = n(89526),
        r = n(42735),
        l = n(85651),
        c = n(23217),
        u = n(26464),
        d = n(85246),
        p = n(4306),
        g = n(32765);
      const _ = "SaleEvent_DurationDiscount_Tooltip",
        D = "discount";
      var m, v;
      !(function (t) {
        (t.k_EDiscountCollisionType_Normal = "proximity"),
          (t.k_EDiscountCollisionType_MajorSales = "unique");
      })(m || (m = {})),
        (function (t) {
          (t.k_EDiscountPreventWeeklong_Normal = ""),
            (t.k_EDiscountPreventWeeklong_MajorSales = "on");
        })(v || (v = {}));
      class h {
        GetFutureDiscountEvents() {
          const t = (0, l.kl)();
          return Array.from(h.Get().m_mapDiscountEvents.values()).filter(
            (e) => e.end_date > t,
          );
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
              this.m_mapDiscountEventCallback.set(t, new d.pB()),
            this.m_mapDiscountEventCallback.get(t)
          );
        }
        GetAppListCallback(t) {
          return (
            this.m_mapAppListCallback.has(t) ||
              this.m_mapAppListCallback.set(t, new d.pB()),
            this.m_mapAppListCallback.get(t)
          );
        }
        LoadAllDiscountEvents(t, e) {
          var n, s, o, l;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_bLoadEventsRequestInFlight)
              return r.s.k_EResultDuplicateRequest;
            const i =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetalldiscountevents/" +
                t,
              u = {};
            let d = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const t = yield a().get(i, {
                params: u,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                ((this.m_bLoadEventsRequestInFlight = !1),
                200 == (null == t ? void 0 : t.status) &&
                  (null === (n = t.data) || void 0 === n
                    ? void 0
                    : n.success) == r.s.k_EResultOK &&
                  t.data.events)
              ) {
                for (const e of t.data.events)
                  this.m_mapDiscountEvents.set(e.id, e);
                return (
                  (this.m_bLoadedViaInitOrFullLoad = !0),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  r.s.k_EResultOK
                );
              }
              d = { response: t };
            } catch (t) {
              d = t;
            }
            const p = (0, c.l)(d);
            return (
              console.error("Could not load Discount Events", p.strErrorMsg, p),
              null !==
                (l =
                  null ===
                    (o =
                      null === (s = null == d ? void 0 : d.response) ||
                      void 0 === s
                        ? void 0
                        : s.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== l
                ? l
                : r.s.k_EResultFail
            );
          });
        }
        CreateDiscountEvent(t, e, n, s, o, l, u, d) {
          var p;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              h = new FormData();
            h.append("sessionid", g.De.SESSIONID),
              h.append("name", n),
              h.append("start_time", t.toString()),
              h.append("end_time", e.toString()),
              h.append("allowed_appids", u.join(",")),
              h.append("allowed_publisherids", l.join(",")),
              h.append("description", o),
              h.append("collision_type", m.k_EDiscountCollisionType_Normal),
              h.append("event", "1"),
              h.append("header", s),
              h.append("tooltip", _),
              h.append("type", D),
              h.append("prevent_weeklong", v.k_EDiscountPreventWeeklong_Normal);
            let E = null;
            try {
              const c = yield a().post(i, h, {
                withCredentials: !0,
                cancelToken: null == d ? void 0 : d.token,
              });
              if (
                200 == (null == c ? void 0 : c.status) &&
                (null === (p = c.data) || void 0 === p ? void 0 : p.success) ==
                  r.s.k_EResultOK &&
                c.data.eventid
              ) {
                const i = {
                  id: c.data.eventid,
                  name: n,
                  start_date: t,
                  end_date: e,
                  appids: u,
                  publisherids: l,
                  description: o,
                  collision_type: m.k_EDiscountCollisionType_Normal,
                  event: "1",
                  header: s,
                  tooltip: _,
                  type: D,
                  prevent_weeklong: v.k_EDiscountPreventWeeklong_Normal,
                };
                return (
                  this.m_mapDiscountEvents.set(i.id, i),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  i
                );
              }
              E = { response: c };
            } catch (t) {
              E = t;
            }
            const k = (0, c.l)(E);
            return (
              console.error(
                "CDiscountEventStore.CreateDiscountEvent: failed",
                k.strErrorMsg,
                k,
              ),
              null
            );
          });
        }
        UpdateDiscountEventPublisherAndAppList(t, e, n, s) {
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
            const l =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              u = new FormData();
            u.append("sessionid", g.De.SESSIONID),
              u.append("eventid", t),
              u.append("name", i.name),
              u.append("start_time", i.start_date.toString()),
              u.append("end_time", i.end_date.toString()),
              u.append("allowed_appids", n.join(",")),
              u.append("allowed_publisherids", e.join(",")),
              u.append("description", i.description),
              u.append("collision_type", i.collision_type),
              u.append("event", i.event),
              u.append("header", i.header),
              u.append("tooltip", i.tooltip),
              u.append("type", i.type),
              u.append("prevent_weeklong", i.prevent_weeklong);
            let d = null;
            try {
              const t = yield a().post(l, u, {
                withCredentials: !0,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                (null === (o = t.data) || void 0 === o ? void 0 : o.success) ==
                  r.s.k_EResultOK &&
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
              d = { response: t };
            } catch (t) {
              d = t;
            }
            const p = (0, c.l)(d);
            return (
              console.error(
                "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
                p.strErrorMsg,
                p,
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
            if (!t || 0 == t.length) return null;
            try {
              const s =
                  g.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventbyid",
                o = { sessionid: g.De.SESSIONID, discountid: t },
                l = yield a().get(s, { params: o, withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                (null === (e = null == l ? void 0 : l.data) || void 0 === e
                  ? void 0
                  : e.success) == r.s.k_EResultOK &&
                (null === (n = null == l ? void 0 : l.data) || void 0 === n
                  ? void 0
                  : n.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(t, l.data.discount_event),
                  this.GetDiscountEventCallback(t).Dispatch(
                    l.data.discount_event,
                  ),
                  l.data.discount_event
                );
              i = (0, c.l)(l);
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
              const s =
                  g.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventapplist",
                o = { sessionid: g.De.SESSIONID, discountid: t },
                l = yield a().get(s, { params: o, withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                (null === (e = null == l ? void 0 : l.data) || void 0 === e
                  ? void 0
                  : e.success) == r.s.k_EResultOK &&
                (null === (n = null == l ? void 0 : l.data) || void 0 === n
                  ? void 0
                  : n.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(t, l.data.discount_event),
                  this.m_mapAppList.set(t, l.data.appid_list),
                  this.GetDiscountEventCallback(t).Dispatch(
                    l.data.discount_event,
                  ),
                  this.GetAppListCallback(t).Dispatch(l.data.appid_list),
                  {
                    oDiscountEvent: l.data.discount_event,
                    rgAppList: l.data.appid_list,
                  }
                );
              i = (0, c.l)(l);
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
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
          );
        }
        constructor() {
          (this.m_mapDiscountEvents = new Map()),
            (this.m_discountEventsListCallback = new d.pB()),
            (this.m_mapDiscountEventCallback = new Map()),
            (this.m_mapAppList = new Map()),
            (this.m_mapAppListCallback = new Map()),
            (this.m_bLoadedViaInitOrFullLoad = !1),
            (this.m_bLoadEventsRequestInFlight = !1),
            (this.m_mapInflightDiscountLoadRequest = new Map()),
            (this.m_mapInflightDiscountAndAppListLoadRequest = new Map()),
            "dev" == g.De.WEB_UNIVERSE && (window.g_DiscountEventStore = this);
        }
        Init() {
          const t = (0, g.kQ)("discount_events", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountEventStore loading payload: ",
                t,
              ),
            this.BIsConfigValid(t))
          ) {
            for (const e of t) this.m_mapDiscountEvents.set(e.id, e);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == g.De.WEB_UNIVERSE &&
              t &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(t) {
          const e = t;
          return !(!e || !Array.isArray(e));
        }
      }
      function E() {
        return h.Get().GetFutureDiscountEvents();
      }
      function k() {
        return h.Get().GetFutureDiscountEventListCallback();
      }
      function f(t) {
        const e = h.Get().BLoadedViaInitOrFullLoad(),
          [n, i] = o.useState(e ? h.Get().GetFutureDiscountEvents() : null),
          [s, a] = o.useState(null),
          l =
            t ||
            Number.parseInt((0, g.kQ)("publisherid", "application_config"));
        (0, p.Qg)(h.Get().GetFutureDiscountEventListCallback(), i),
          o.useEffect(() => {
            h.Get().BLoadedViaInitOrFullLoad() ||
              h.Get().LoadAllDiscountEvents(l).then(a);
          }, [n, l]);
        const c =
          null != s
            ? s
            : (null == n ? void 0 : n.length)
            ? r.s.k_EResultOK
            : null;
        return o.useMemo(() => ({ rgDiscountEvents: n, eResult: c }), [n, c]);
      }
      function I(t) {
        return h.Get().GetDiscountEvent(t);
      }
      function G(t) {
        const [e, n] = (0, o.useState)(h.Get().GetDiscountEvent(t));
        return (
          o.useEffect(() => {
            ((!e && t) || ((null == e ? void 0 : e.id) != t && t)) &&
              h
                .Get()
                .LoadSingleDiscountEvent(t)
                .then((t) => {
                  t && n(t);
                });
          }, [t, e]),
          (0, p.Qg)(h.Get().GetDiscountEventCallback(t), n),
          e
        );
      }
      function S(t) {
        const [e, n] = (0, o.useState)(h.Get().GetDiscountEvent(t)),
          [i, s] = (0, o.useState)(h.Get().GetAppList(t));
        return (
          (0, o.useEffect)(() => {
            ((!i && t) || ((null == e ? void 0 : e.id) != t && t)) &&
              h
                .Get()
                .LoadSingleDiscountEventsAppList(t)
                .then((t) => {
                  t && (n(t.oDiscountEvent), s(t.rgAppList));
                });
          }, [null == e ? void 0 : e.id, i, t]),
          (0, p.Qg)(h.Get().GetDiscountEventCallback(t), n),
          (0, p.Qg)(h.Get().GetAppListCallback(t), s),
          i ? { oDiscountEvent: e, rgAppList: i } : null
        );
      }
      function P() {
        return { fnCreateDiscountEvent: h.Get().CreateDiscountEvent };
      }
      function R() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            h.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, i.gn)([u.a], h.prototype, "GetDiscountEvent", null),
        (0, i.gn)([u.a], h.prototype, "GetAppList", null),
        (0, i.gn)([u.a], h.prototype, "CreateDiscountEvent", null),
        (0, i.gn)(
          [u.a],
          h.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
    16586: (t, e, n) => {
      "use strict";
      n.d(e, {
        A0: () => k,
        Cy: () => P,
        PV: () => f,
        QQ: () => I,
        Rz: () => b,
        V7: () => S,
        ZW: () => G,
        _l: () => A,
        dS: () => L,
        du: () => O,
        lQ: () => y,
        nw: () => R,
        py: () => C,
        qh: () => E,
      });
      var i = n(33940),
        s = n(52868),
        a = n.n(s),
        o = n(50265),
        r = n(89526),
        l = n(5615),
        c = n(42735),
        u = n(51194),
        d = n(11837),
        p = n(23801),
        g = n(23217),
        _ = n(26464),
        D = n(85246),
        m = n(4306),
        v = n(32765),
        h = n(58218);
      class E {
        constructor() {
          (this.m_mapRegistrations = new Map()),
            (this.m_mapRequestedAppIDs = new Map()),
            (this.m_mapOptInNameCallback = new Map()),
            (this.m_mapSingleAppRegistrationChange = new Map()),
            (this.m_loadCountChangeCallback = new D.pB());
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
              this.m_mapSingleAppRegistrationChange.set(n, new D.pB()),
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
            e.forEach((e, s) => {
              if (e == t.length) {
                let t = this.m_mapRegistrations.get(i).get(s);
                (0, p.X)(t, "Missing OptIn Restration"), n.set(s, t);
              }
            }),
            n.size > 0 ? n : null
          );
        }
        BHasOptionOnRegistration(t, e, n) {
          var i, s;
          const a = this.GetRegistration(t, e);
          return (
            !(!a || !a.opt_in) &&
            (!n ||
              (null ===
                (s =
                  null === (i = null == a ? void 0 : a.jsondata) || void 0 === i
                    ? void 0
                    : i.dynamic_selection) || void 0 === s
                ? void 0
                : s.some((t) => {
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
                this.m_mapOptInNameCallback.set(t, new D.pB()),
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
          var n, s;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                v.De.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              o = { sessionid: v.De.SESSIONID, opt_in_name: t, opt_in_only: e },
              r = yield a().get(i, { params: o, withCredentials: !0 });
            return (
              null === (n = null == r ? void 0 : r.data) || void 0 === n
                ? void 0
                : n.data
            )
              ? this.UpdateRegAndTrackInStore(t, r.data.data)
              : null === (s = null == r ? void 0 : r.data) || void 0 === s
              ? void 0
              : s.data;
          });
        }
        FetchPendingReviewOptInRegistrationn(t) {
          var e, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                v.De.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              s = { sessionid: v.De.SESSIONID, opt_in_name: t },
              o = yield a().get(i, { params: s, withCredentials: !0 });
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
          var s, o;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.GetRegistration(e, t)) return !0;
            const i =
              null === (s = this.m_mapRequestedAppIDs.get(t)) || void 0 === s
                ? void 0
                : s.get(e);
            if (i) return i;
            try {
              const i = v.De.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                s = { sessionid: v.De.SESSIONID, appid: e, opt_in_name: t },
                r = yield a().get(i, {
                  params: s,
                  withCredentials: !0,
                  cancelToken: null == n ? void 0 : n.token,
                });
              if (
                (null === (o = null == r ? void 0 : r.data) || void 0 === o
                  ? void 0
                  : o.success) == c.s.k_EResultOK &&
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
                const t = (0, g.l)(r);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    t.strErrorMsg,
                  t,
                );
              }
            } catch (t) {
              const e = (0, g.l)(t);
              console.error(
                "LoadOptInRegistration : failed with " + e.strErrorMsg,
                e,
              );
            }
            return !1;
          });
        }
        LoadMultiOptInRegistration(t, e, n, s) {
          var o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (0 == e.length || 0 == t.length) return !1;
            let i = null;
            const l = new Promise((t, e) => {
              i = t;
            });
            (t = d.kp(t).sort()),
              (e = d.kp(e).sort()),
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
                  t.forEach((t) => this.m_mapRequestedAppIDs.get(t).set(e, l)));
              }),
              0 == u.length)
            )
              return !0;
            const p =
              v.De.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
            let _ = null;
            try {
              for (; u.length > 0; ) {
                let e = 0;
                const i = [];
                for (; u.length > 0 && e < 5; ) {
                  const s = u.splice(0, 50),
                    o = {
                      rgOptInNames: t.join(","),
                      rgAppIDs: s.join(","),
                      origin: self.origin,
                    };
                  i.push(
                    a().get(p, {
                      params: o,
                      withCredentials: !0,
                      cancelToken: null == n ? void 0 : n.token,
                    }),
                  ),
                    (e += 1);
                }
                const l = yield Promise.all(i);
                for (const t of l) {
                  if (
                    200 != (null == t ? void 0 : t.status) ||
                    (null === (o = t.data) || void 0 === o
                      ? void 0
                      : o.success) != c.s.k_EResultOK ||
                    !(null === (r = t.data.optin_registrations) || void 0 === r
                      ? void 0
                      : r.length)
                  ) {
                    _ = { response: t };
                    break;
                  }
                  this.InternalAddRegistrations(t.data.optin_registrations, s);
                }
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                );
              }
            } catch (t) {
              _ = t;
            }
            if (null == _) i(!0);
            else {
              const n = (0, g.l)(_);
              console.error(
                "Could not load OptIn for Apps",
                e,
                t,
                n.strErrorMsg,
                n,
              ),
                i(!1);
            }
            return l;
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
              const s = new FormData();
              s.append("sessionid", v.De.SESSIONID),
                Object.keys(e).forEach((t) => s.append(t, e[t]));
              const o =
                  v.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistration/" +
                  t,
                r = yield a().post(o, s, { withCredentials: !0 });
              if (
                200 == (null == r ? void 0 : r.status) &&
                (null === (n = r.data) || void 0 === n ? void 0 : n.success) ==
                  c.s.k_EResultOK
              )
                return null;
              i = (0, g.l)(r);
            } catch (t) {
              i = (0, g.l)(t);
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
          var s;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const o = new FormData();
              o.append("sessionid", v.De.SESSIONID),
                o.append("appid", "" + t),
                o.append("opt_in_name", e.opt_in_name),
                o.append("jsondata", JSON.stringify(e)),
                n && o.append("bCreatePendingInvite", "true");
              const r =
                  v.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  t,
                l = yield a().post(r, o, { withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                (null === (s = l.data) || void 0 === s ? void 0 : s.success) ==
                  c.s.k_EResultOK
              ) {
                const n = e.opt_in_name.startsWith("sale_")
                    ? e.opt_in_name
                    : "sale_" + e.opt_in_name,
                  i = this.m_mapRegistrations.get(t).get(n);
                i.jsondata = e;
                const s = Object.assign({}, i);
                return (
                  this.m_mapRegistrations.get(t).set(e.opt_in_name, s),
                  this.GetSingleAppRegistrationChange(
                    t,
                    e.opt_in_name,
                  ).Dispatch(s),
                  null
                );
              }
              i = (0, g.l)(l);
            } catch (t) {
              i = (0, g.l)(t);
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
          var s;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const o = e.jsondata.opt_in_name,
                r = new FormData();
              r.append("sessionid", v.De.SESSIONID),
                r.append("appid", "" + t),
                r.append("opt_in_name", o),
                r.append("approved", "" + n);
              const l =
                  v.De.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
                d = yield a().post(l, r, { withCredentials: !0 });
              if (
                200 == (null == d ? void 0 : d.status) &&
                (null === (s = d.data) || void 0 === s ? void 0 : s.success) ==
                  c.s.k_EResultOK
              ) {
                const e = Object.assign(
                  {},
                  this.m_mapRegistrations.get(t).get(o),
                );
                return (
                  (e.accountid_appeal = v.L7.accountid),
                  (e.appeal_state = n
                    ? u.JL.k_EPartnerAppOptInAppealState_Approved
                    : u.JL.k_EPartnerAppOptInAppealState_Denied),
                  this.m_mapRegistrations.get(t).set(o, e),
                  this.GetSingleAppRegistrationChange(t, o).Dispatch(e),
                  !0
                );
              }
              i = (0, g.l)(d);
            } catch (t) {
              i = (0, g.l)(t);
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
            E.s_OptInRegs ||
              ((E.s_OptInRegs = new E()),
              (window.COptInRegistrations = E.s_OptInRegs),
              E.s_OptInRegs.Init()),
            E.s_OptInRegs
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
              (0, v.kQ)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(t) &&
            (this.InternalAddRegistrations(t),
            "dev" == v.De.WEB_UNIVERSE &&
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
      function k(t, e) {
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
      function f() {
        return r.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: E.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function I(t, e, n) {
        const [i, s] = r.useState(null),
          a = (0, h.T)("useMultiLoadOptInAppReg");
        return (
          (0, r.useEffect)(() => {
            const i = e.filter(Boolean);
            i.length > 0
              ? E.Get()
                  .LoadMultiOptInRegistration(
                    i.map(() => t),
                    i,
                    a,
                    n,
                  )
                  .then(() => {
                    const e = new Map();
                    i.forEach((n) => {
                      const i = E.Get().GetRegistration(n, t);
                      i && e.set(n, i);
                    }),
                      s(e);
                  })
              : s(new Map());
          }, [t, e, a, n]),
          i
        );
      }
      function G(t) {
        const [e, n] = r.useState(E.Get().GetAllOptInRegistrations(t));
        return (
          (0, m.Qg)(E.Get().GetOptInNameRegistrationsCallbackList(t), n), e
        );
      }
      function S(t) {
        const e = G(t),
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
      function P(t, e) {
        const n = (0, l.useQuery)(
          ["useAllOptInRegistrationByName", t, Boolean(e)],
          () => E.Get().FetchOptInRegistrationForOptIn(t, e),
          { staleTime: 36e5 },
        );
        return n.isLoading ? null : n.data;
      }
      function R(t) {
        const e = (0, l.useQuery)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", t],
          queryFn: () => E.Get().FetchPendingReviewOptInRegistrationn(t),
          retry: !1,
          staleTime: 36e5,
          enabled: (null == t ? void 0 : t.length) > 0,
        });
        return {
          rgPendingReviewRegistrations: e.isLoading ? null : e.data,
          bIsInError: e.isError,
        };
      }
      function C(t, e) {
        const n = P(t, !1),
          [i, s] = (0, r.useState)(
            null == n ? void 0 : n.find((t) => t.appid == e),
          );
        return (0, m.Qg)(E.Get().GetSingleAppRegistrationChange(e, t), s), i;
      }
      function b(t, e) {
        const [n, i] = (0, r.useState)(
          E.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e),
        );
        return (0, m.Qg)(E.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function A(t, e) {
        const [n, i] = (0, r.useState)(
          E.Get().GetExistingOptInRegistartion(t, e),
        );
        return (0, m.Qg)(E.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function L() {
        return {
          fnUpdateOptInRegistrationJson: E.Get().UpdateOptInRegistrationJson,
        };
      }
      function O() {
        return { fnUpdateAppealState: E.Get().UpdateAppealState };
      }
      function y() {
        const [t, e] = (0, r.useState)(E.Get().GetLoadCount());
        return (
          (0, m.Qg)(E.Get().GetLoadCountChange(), e), E.Get().GetLoadCount()
        );
      }
      (0, i.gn)(
        [_.a],
        E.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, i.gn)(
          [_.a],
          E.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, i.gn)([_.a], E.prototype, "LoadMultiOptInRegistration", null),
        (0, i.gn)([_.a], E.prototype, "UpdateOptInRegistrationJson", null),
        (0, i.gn)([_.a], E.prototype, "UpdateAppealState", null),
        (0, i.gn)([o.aD], E.prototype, "Init", null);
    },
    36998: (t, e, n) => {
      "use strict";
      n.d(e, {
        EV: () => L,
        Fi: () => P,
        ID: () => S,
        LT: () => h,
        Qy: () => A,
        Su: () => f,
        XM: () => k,
        Xj: () => O,
        _J: () => v,
        b2: () => R,
        co: () => E,
        hd: () => b,
        k1: () => C,
        kk: () => m,
        v6: () => I,
        yI: () => G,
      });
      var i = n(33940),
        s = n(52868),
        a = n.n(s),
        o = n(89526),
        r = n(42735),
        l = n(85651),
        c = n(23217),
        u = n(85246),
        d = n(4306),
        p = n(81349),
        g = n(32765);
      class _ {
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackageDiscountsById = new Map()),
            (this.m_mapDiscountCallbackList = new Map()),
            (this.m_mapPackageDiscountsByPackageId = new Map()),
            (this.m_mapPackageCallbackList = new Map()),
            (this.m_mapPackageDiscountsByDiscountEventId = new Map()),
            (this.m_mapDiscountEventCallbackList = new Map()),
            (this.m_allDiscountCallbackList = new u.pB()),
            (this.m_mapMaxDiscountPercentageByPackageId = new Map()),
            "dev" == g.De.WEB_UNIVERSE &&
              (window.g_PackageDiscountStore = this);
        }
        Init() {
          const t = (0, g.kQ)("package_discounts", "application_config");
          ("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackageDiscountStore loading discount payload: ",
              t,
            ),
            this.BIsDiscountPayloadValid(t)
              ? this.InternalAddDiscounts(t)
              : "dev" == g.De.WEB_UNIVERSE &&
                t &&
                console.error("Invalid discount payload");
          const e = (0, g.kQ)("max_discount_percentages", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountGridStore loading max-discount-% payload: ",
                e,
              ),
            this.BIsMaxDiscountPayloadValid(e))
          )
            for (let t in e)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(t), e[t]);
          else
            "dev" == g.De.WEB_UNIVERSE &&
              e &&
              console.error("Invalid max-discount-% payload");
        }
        InternalAddDiscounts(t, e) {
          var n;
          const i = new Set(),
            s = new Set();
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
              s.add(e.discountEventID);
          for (const t of null != e ? e : [])
            this.m_mapPackageDiscountsByPackageId.has(t) ||
              this.m_mapPackageDiscountsByPackageId.set(t, new Map()),
              i.add(t);
          i.forEach((t) =>
            this.GetCallbackListForPackage(t).Dispatch(
              this.GetAllDiscountsForPackage(t),
            ),
          ),
            s.forEach((t) =>
              this.GetCallbackListForDiscountEvent(t).Dispatch(
                this.GetAllDiscountsForDiscountEvent(t),
              ),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        InternalDeleteDiscount(t, e, n) {
          var i, s;
          this.m_mapPackageDiscountsById.delete(t),
            null === (i = this.m_mapPackageDiscountsByPackageId.get(e)) ||
              void 0 === i ||
              i.delete(t),
            null === (s = this.m_mapPackageDiscountsByDiscountEventId.get(n)) ||
              void 0 === s ||
              s.delete(t),
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
          var s, o, l, u;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            const d = new Promise((t, e) => {
                i = t;
              }),
              p = new Set();
            for (const e of t)
              this.m_mapPackageDiscountsByPackageId.has(e) || p.add(e);
            const _ = Array.from(p).sort();
            if (0 == _.length) return r.s.k_EResultOK;
            const D = (0, g.kQ)("publisherid", "application_config"),
              m =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                D;
            let v = null,
              h = null;
            try {
              const t = [],
                i = new Array();
              for (; _.length > 0; ) {
                const s = _.splice(0, 50);
                i.push(s);
                const o = { packageids: s.join(","), origin: self.origin };
                t.push(
                  a().get(m, {
                    params: o,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                    timeout: n,
                  }),
                );
              }
              const o = yield Promise.all(t),
                l = [];
              for (const t of o) {
                if (
                  ((h = i.unshift()),
                  200 != (null == t ? void 0 : t.status) ||
                    (null === (s = t.data) || void 0 === s
                      ? void 0
                      : s.success) != r.s.k_EResultOK ||
                    !t.data.discounts)
                ) {
                  v = { response: t };
                  break;
                }
                t.data.discounts.forEach((t) => l.push(t));
              }
              null == v && this.InternalAddDiscounts(l, Array.from(p));
            } catch (t) {
              v = t;
            }
            if (null == v) i(r.s.k_EResultOK);
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
                    (u =
                      null ===
                        (l =
                          null === (o = null == v ? void 0 : v.response) ||
                          void 0 === o
                            ? void 0
                            : o.data) || void 0 === l
                        ? void 0
                        : l.success) && void 0 !== u
                    ? u
                    : r.s.k_EResultFail,
                );
            }
            return d;
          });
        }
        SaveDiscountToServer(t, e) {
          var n, s, o, l;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                g.De.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                t.packageID,
              u = new FormData();
            u.append("sessionid", g.De.SESSIONID),
              t.nDiscountID && u.append("id", t.nDiscountID.toString()),
              u.append("name", t.strDiscountName),
              u.append("description", t.strDiscountDescription),
              t.discountEventID &&
                !m(t.discountEventID) &&
                u.append("type", t.discountEventID),
              u.append("percent", t.nDiscountPct.toString()),
              u.append(
                "start_date",
                new Date(1e3 * t.rtStartDate).toISOString(),
              ),
              u.append("end_date", new Date(1e3 * t.rtEndDate).toISOString());
            let d = null;
            try {
              const o = yield a().post(i, u, {
                withCredentials: !0,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                ((o.data.msg =
                  null !== (n = o.data.msg) && void 0 !== n
                    ? n
                    : o.data.message),
                200 == (null == o ? void 0 : o.status) &&
                  (null === (s = o.data) || void 0 === s
                    ? void 0
                    : s.success) == r.s.k_EResultOK &&
                  o.data.discountid)
              )
                return (
                  (t.bChangedLocally = !1),
                  (t.nDiscountID = o.data.discountid),
                  (t.nDiscountPct = o.data.percentage),
                  this.InternalAddDiscounts([t]),
                  o.data
                );
              d = { response: o };
            } catch (t) {
              d = t;
            }
            const p = (0, c.l)(d);
            return (
              console.error(
                "CPackageDiscountStore.SaveDiscountToServer: failed",
                p.strErrorMsg,
                p,
              ),
              null !==
                (l =
                  null === (o = null == d ? void 0 : d.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== l
                ? l
                : { success: r.s.k_EResultFail }
            );
          });
        }
        DeleteDiscountOnServer(t, e, n, s) {
          var o, l, u;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                g.De.PARTNER_BASE_URL + "packages/removepackagediscount/" + e,
              d = new FormData();
            d.append("sessionid", g.De.SESSIONID),
              d.append("discountid", t.toString());
            let p = null;
            try {
              const l = yield a().post(i, d, {
                withCredentials: !0,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                200 == (null == l ? void 0 : l.status) &&
                (null === (o = l.data) || void 0 === o ? void 0 : o.success) ==
                  r.s.k_EResultOK
              )
                return this.InternalDeleteDiscount(t, e, n), l.data;
              p = { response: l };
            } catch (t) {
              p = t;
            }
            const _ = (0, c.l)(p);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                _.strErrorMsg,
                _,
              ),
              null !==
                (u =
                  null === (l = null == p ? void 0 : p.response) || void 0 === l
                    ? void 0
                    : l.data) && void 0 !== u
                ? u
                : { success: r.s.k_EResultFail }
            );
          });
        }
        GetCallbackListForDiscount(t) {
          return (
            this.m_mapDiscountCallbackList.has(t) ||
              this.m_mapDiscountCallbackList.set(t, new u.pB()),
            this.m_mapDiscountCallbackList.get(t)
          );
        }
        GetCallbackListForPackage(t) {
          return (
            this.m_mapPackageCallbackList.has(t) ||
              this.m_mapPackageCallbackList.set(t, new u.pB()),
            this.m_mapPackageCallbackList.get(t)
          );
        }
        GetCallbackListForDiscountEvent(t) {
          return (
            this.m_mapDiscountEventCallbackList.has(t) ||
              this.m_mapDiscountEventCallbackList.set(t, new u.pB()),
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
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, p.JD)(
          t.strDiscountName,
        )}`;
      }
      function m(t) {
        return t.startsWith("custom-event-");
      }
      function v(t) {
        return _.Get().GetDiscountByID(t);
      }
      function h(t) {
        return _.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function E(t) {
        return _.Get().GetAllDiscountsForPackage(t);
      }
      function k(t) {
        return _.Get().GetCallbackListForPackage(t);
      }
      function f() {
        return _.Get().GetAllDiscountsForAllPackages();
      }
      function I() {
        return _.Get().GetGlobalCallbackList();
      }
      function G() {
        return o.useCallback(
          (t, e, n) => _.Get().LoadPackageDiscounts(t, e, n),
          [],
        );
      }
      function S() {
        const t = (t) => _.Get().SaveDiscountToServer(t),
          e = (t, e, n) => _.Get().DeleteDiscountOnServer(t, e, n);
        return o.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          [],
        );
      }
      function P(t) {
        return new Map(
          Array.from(t.map((t) => [t, _.Get().GetDiscountByID(t)])),
        );
      }
      function R(t) {
        const e = (0, l.zD)(),
          [n, i] = o.useState(_.Get().GetAllDiscountsForPackage(t));
        return (
          (0, d.Qg)(_.Get().GetCallbackListForPackage(t), i),
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
        const e = (0, l.zD)(),
          [n, i] = o.useState(_.Get().GetAllDiscountsForAllPackages());
        return (
          (0, d.Qg)(_.Get().GetGlobalCallbackList(), i),
          o.useMemo(() => {
            var i;
            let s = null;
            if (null == n) return { mostRecentDiscount: s, bLoading: !0 };
            for (const n of t) {
              const t =
                null !== (i = _.Get().GetAllDiscountsForPackage(n)) &&
                void 0 !== i
                  ? i
                  : [];
              for (const n of t)
                n.rtEndDate < e && (!s || s.rtEndDate < n.rtEndDate) && (s = n);
            }
            return { mostRecentDiscount: s, bLoading: !1 };
          }, [e, t, n])
        );
      }
      function b(t) {
        const [e, n] = o.useState(_.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, d.Qg)(_.Get().GetCallbackListForDiscountEvent(t), n), e;
      }
      function A(t) {
        return _.Get().GetMaxDiscountPercentage(t);
      }
      function L(t) {
        return t.some(
          (t) => t.nDiscountPct > _.Get().GetMaxDiscountPercentage(t.packageID),
        );
      }
      function O(t) {
        return _.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    16169: (t, e, n) => {
      "use strict";
      n.d(e, {
        B6: () => O,
        E5: () => U,
        E_: () => F,
        Eh: () => f,
        HU: () => N,
        JW: () => M,
        LX: () => I,
        TB: () => B,
        _9: () => y,
        dy: () => x,
        ho: () => W,
        hr: () => A,
        k: () => j,
        pl: () => L,
        s$: () => w,
        w6: () => i,
        yn: () => T,
        z$: () => Q,
      });
      var i,
        s = n(65395),
        a = n(16586),
        o = n(36998),
        r = n(19533),
        l = n(2220),
        c = n(7164),
        u = n(89526),
        d = n(85651),
        p = n(92616),
        g = n(85246),
        _ = n(4306),
        D = n(81349),
        m = n(25508),
        v = n(32765),
        h = n(86873);
      function E(t, e) {
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
          k(null == t ? void 0 : t.discount, null == e ? void 0 : e.discount) &&
          (null == t ? void 0 : t.nBaseAppID) ==
            (null == e ? void 0 : e.nBaseAppID) &&
          (null == t ? void 0 : t.bChangedLocally) ==
            (null == e ? void 0 : e.bChangedLocally)
        );
      }
      function k(t, e) {
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
      !(function (t) {
        (t[(t.k_ELoading = 0)] = "k_ELoading"),
          (t[(t.k_EOkToDiscount = 1)] = "k_EOkToDiscount"),
          (t[(t.k_ENeedsOptIn = 2)] = "k_ENeedsOptIn"),
          (t[(t.k_EOptInOptedOut = 3)] = "k_EOptInOptedOut"),
          (t[(t.k_EOptInRestricted = 4)] = "k_EOptInRestricted"),
          (t[(t.k_EOptInNoBaseAppToRegister = 5)] =
            "k_EOptInNoBaseAppToRegister"),
          (t[(t.k_EJustReleased = 6)] = "k_EJustReleased"),
          (t[(t.k_EPriceIncreased = 7)] = "k_EPriceIncreased"),
          (t[(t.k_ECooldownWindow = 8)] = "k_ECooldownWindow"),
          (t[(t.k_EOverlapsExisting = 9)] = "k_EOverlapsExisting"),
          (t[(t.k_ENoAppInRequiredList = 10)] = "k_ENoAppInRequiredList"),
          (t[(t.k_EOptInMultiAppPackageRegisterSomeGame = 11)] =
            "k_EOptInMultiAppPackageRegisterSomeGame");
      })(i || (i = {}));
      const f = 30,
        I = f * m._H.PerDay - 1.5 * m._H.PerHour,
        G = 10 * m._H.PerMinute;
      class S {
        static Get() {
          return (
            S.s_Singleton || ((S.s_Singleton = new S()), S.s_Singleton.Init()),
            S.s_Singleton
          );
        }
        static IsInitialized() {
          return !!S.s_Singleton;
        }
        constructor() {
          (this.m_mapPackageStateForDiscountEvents = new Map()),
            (this.m_mapLocalPackageDiscountOverrides = new Map()),
            (this.m_mapDiscountPackageCallbackList = new Map()),
            (this.m_mapDiscountGridCellCallbackList = new Map()),
            (this.m_mapDiscountEventColumnCallbackList = new Map()),
            (this.m_localPackageDiscountOverrideCallbackList = new g.pB()),
            "dev" == v.De.WEB_UNIVERSE &&
              (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const t of (0, r.MQ)())
            S.Get().ComputePackageState(t),
              (0, o.XM)(t).Register(() => {
                S.Get().ComputePackageState(t);
              });
          (0, h.ix)().Register(() => {
            for (const t of (0, r.MQ)()) S.Get().ComputePackageState(t, !0);
          }),
            S.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(t, e, n) {
          var s;
          const a =
            null === (s = S.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === s
              ? void 0
              : s.get(e);
          if ((null == a ? void 0 : a.eState) != i.k_EOkToDiscount)
            return (
              console.error(
                "Cannot change discount in current state:",
                a.eState,
              ),
              null
            );
          const o = a.discount,
            r = (0, h.f0)(e),
            l = {
              nDiscountID: null == o ? void 0 : o.nDiscountID,
              packageID: t,
              nDiscountPct: n,
              strDiscountName: r.name,
              strDiscountDescription: r.description,
              rtStartDate: r.start_date,
              rtEndDate: r.end_date,
              discountEventID: r.id,
              bChangedLocally: !0,
            };
          return k(l, o)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(t) ||
                this.m_mapLocalPackageDiscountOverrides.set(t, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(t).set(e, l),
              this.ComputePackageState(t),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              ),
              l);
        }
        GetHighestPackageDiscount(t) {
          let e = this.m_mapPackageStateForDiscountEvents.get(t);
          if (!e) return 0;
          let n = 0;
          return (
            e.forEach((t, e) => {
              var s;
              t.eState == i.k_EOkToDiscount &&
                (n = Math.max(
                  n,
                  (null === (s = t.discount) || void 0 === s
                    ? void 0
                    : s.nDiscountPct) || 0,
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
                k(e, e.nDiscountID && (0, o._J)(e.nDiscountID)) || t.push(e);
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
          const n = (0, d.kl)() - I,
            i = (0, o.co)(t);
          if (!i) return null;
          const s = new Map(
            i.filter((t) => t.rtEndDate > n).map((t) => [t.discountEventID, t]),
          );
          return (
            null === (e = this.m_mapLocalPackageDiscountOverrides.get(t)) ||
              void 0 === e ||
              e.forEach((t, e) => {
                k(t, s.get(e)) || s.set(e, t);
              }),
            s
          );
        }
        GetDiscountGridCellCallbackList(t, e) {
          if (!t || !e) return null;
          this.m_mapDiscountGridCellCallbackList.has(t) ||
            this.m_mapDiscountGridCellCallbackList.set(t, new Map());
          const n = this.m_mapDiscountGridCellCallbackList.get(t);
          return n.has(e) || n.set(e, new g.pB()), n.get(e);
        }
        GetDiscountPackageCallbackList(t) {
          if (!t) return null;
          let e = this.m_mapDiscountPackageCallbackList.get(t);
          return (
            e ||
              ((e = new g.pB()),
              this.m_mapDiscountPackageCallbackList.set(t, e)),
            e
          );
        }
        GetDiscountEventColumnCallbackList(t) {
          return t
            ? (this.m_mapDiscountEventColumnCallbackList.has(t) ||
                this.m_mapDiscountEventColumnCallbackList.set(t, new g.pB()),
              this.m_mapDiscountEventColumnCallbackList.get(t))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(t) {
          const e = [];
          return (
            S.Get().m_mapPackageStateForDiscountEvents.forEach((n, i) =>
              e.push(n.get(t)),
            ),
            e
          );
        }
        ComputePackageState(t, e) {
          var n, o;
          const r = p.Z.Get().GetPackage(t);
          if (!r) return;
          const c = (0, h.wQ)(),
            u = (0, l.R1)(r),
            d = u.nBaseAppID;
          let g = d && a.qh.Get().GetOptInRegistrationAndEligibilityForApp(d);
          d ||
            g ||
            (g = a.qh
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                r.GetIncludedAppIDs(),
              ));
          const _ = this.GetPackageDiscountsIncludingOverrides(t),
            D = !_,
            m = D
              ? null
              : Array.from(_.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const v = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const a of c) {
            if (e && v.has(a.id)) continue;
            const l = { packageID: t, discountEventID: a.id, nBaseAppID: d };
            if (
              ((l.discount = null == _ ? void 0 : _.get(a.id)),
              (l.bChangedLocally = !!(null === (n = l.discount) || void 0 === n
                ? void 0
                : n.bChangedLocally)),
              D)
            )
              l.eState = i.k_ELoading;
            else if (
              (null === (o = l.discount) || void 0 === o
                ? void 0
                : o.nDiscountPct) > 0
            ) {
              l.eState = i.k_EOkToDiscount;
              const t =
                a.opt_in_name && (null == g ? void 0 : g.get(a.opt_in_name));
              t && (l.optInReg = t);
            } else {
              if (((l.eState = i.k_EOkToDiscount), C(a, r)))
                l.eState = i.k_ENoAppInRequiredList;
              else if (a.opt_in_name) {
                const { ePackageDiscountState: t, optInRegistration: e } = R(
                  a.opt_in_name,
                  g,
                  r,
                  u,
                  a,
                );
                (l.eState = t), (l.optInReg = e);
              }
              if (
                l.eState != i.k_ENoAppInRequiredList &&
                l.eState != i.k_EOptInRestricted &&
                l.eState != i.k_EOptInNoBaseAppToRegister
              ) {
                const e = P(t, a, m);
                e.ePackageDiscountState != i.k_EOkToDiscount &&
                  ((l.eState = e.ePackageDiscountState),
                  (l.rgConflictDetails = e.rgConflictingDiscounts.map((t) => {
                    var e, n;
                    return null !==
                      (n =
                        null === (e = (0, s.fH)(t.discountEventID)) ||
                        void 0 === e
                          ? void 0
                          : e.name) && void 0 !== n
                      ? n
                      : t.strDiscountName;
                  })));
              }
            }
            E(l, v.get(a.id)) ||
              (v.set(a.id, l),
              this.GetDiscountPackageCallbackList(t).Dispatch(),
              this.GetDiscountGridCellCallbackList(t, a.id).Dispatch(l),
              this.GetDiscountEventColumnCallbackList(a.id).Dispatch(
                this.GetAllPackageStatesForDiscountEvent(a.id),
              ));
          }
        }
        GetAvailableDiscountEventsInRange(t, e, n) {
          const s = this.m_mapPackageStateForDiscountEvents.get(t),
            a = new Set([
              i.k_EOkToDiscount,
              i.k_EOptInMultiAppPackageRegisterSomeGame,
              i.k_ENeedsOptIn,
              i.k_EOptInOptedOut,
            ]);
          return (0, h.wQ)()
            .filter(
              (t) =>
                e <= t.start_date &&
                t.end_date <= n &&
                a.has(s.get(t.id).eState),
            )
            .map((t) => t.id);
        }
        GetFutureDiscountRanges(t) {
          const e = p.Z.Get().GetPackage(t),
            n = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !n) return [];
          const a = Array.from(n.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate,
            ),
            o = (0, d.kl)(),
            r = Math.max(o, e.GetReleaseDateRTime() + I, (0, h.QM)(t) + I),
            l = [],
            u = new Set();
          let g = r;
          for (let e = 0; e < a.length; e++) {
            const n = a[e];
            if (0 == n.nDiscountPct) continue;
            const i = (0, s.fH)(n.discountEventID);
            let o = n.rtStartDate - I;
            const r =
              (null == i ? void 0 : i.collision_type) ==
              s.dH.k_EDiscountCollisionType_MajorSales;
            if (r && ((o = n.rtStartDate + G), e + 1 < a.length)) {
              const t = a[e + 1],
                n = (0, h.f0)(t.discountEventID);
              (null == n ? void 0 : n.collision_type) !=
                s.dH.k_EDiscountCollisionType_MajorSales &&
                (o = Math.min(o, t.rtStartDate - I));
            }
            if (g + m._H.PerDay < o) {
              const e = {
                bIsAvailable: !0,
                rtStartDate: g,
                rtEndDate: o,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  t,
                  g,
                  o,
                ),
              };
              l.push(e), e.rgDiscountEventIDs.forEach((t) => u.add(t));
            }
            const d = {
              bIsAvailable: !1,
              rtStartDate: n.rtStartDate,
              rtEndDate: n.rtEndDate,
              discount: n,
              rgDiscountEventIDs: [n.discountEventID],
            };
            if (
              (l.push(d),
              u.add(n.discountEventID),
              (g = n.rtEndDate + I),
              r && ((g = n.rtEndDate - G), e - 1 >= 0))
            ) {
              const t = a[e - 1],
                n = (0, h.f0)(t.discountEventID);
              (null == n ? void 0 : n.collision_type) !=
                s.dH.k_EDiscountCollisionType_MajorSales &&
                (g = Math.max(g, t.rtEndDate + I));
            }
            const p = (0, c._)(g);
            p - g <= 2 * m._H.PerHour && (g = p);
          }
          const _ = (0, c._)(o + m._H.PerYear / 2);
          if (g + m._H.PerDay < _) {
            const e = {
              bIsAvailable: !0,
              rtStartDate: g,
              rtEndDate: _,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                t,
                g,
                _,
              ),
            };
            l.push(e), e.rgDiscountEventIDs.forEach((t) => u.add(t));
          }
          const D = (0, h.wQ)().filter(
            (e) =>
              e.collision_type == s.dH.k_EDiscountCollisionType_MajorSales &&
              !u.has(e.id) &&
              this.m_mapPackageStateForDiscountEvents.get(t).get(e.id).eState ==
                i.k_EOkToDiscount,
          );
          for (const t of D)
            for (let e = 0; e < l.length; e++)
              if (
                l[e].rtStartDate <= t.start_date &&
                (e == l.length - 1 || t.start_date < l[e + 1].rtStartDate)
              ) {
                const n = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: t.start_date,
                  rtEndDate: t.end_date,
                  rgDiscountEventIDs: [t.id],
                };
                l.splice(e + 1, 0, n);
                break;
              }
          return l;
        }
      }
      function P(t, e, n) {
        let a = i.k_EOkToDiscount;
        const o = [];
        let r = !1;
        const l = p.Z.Get().GetPackage(t);
        if ((null == l ? void 0 : l.GetReleaseDateRTime()) > e.start_date - I)
          return (
            (a = i.k_EJustReleased),
            {
              ePackageDiscountState: a,
              rgConflictingDiscounts: o,
              bChangedLocally: r,
            }
          );
        if ((0, h.QM)(t) > e.start_date - I)
          return (
            (a = i.k_EPriceIncreased),
            {
              ePackageDiscountState: a,
              rgConflictingDiscounts: o,
              bChangedLocally: r,
            }
          );
        for (const t of n) {
          if (e.id == t.discountEventID) continue;
          const n = (0, s.fH)(t.discountEventID),
            l =
              e.collision_type == s.dH.k_EDiscountCollisionType_MajorSales ||
              (null == n ? void 0 : n.collision_type) ==
                s.dH.k_EDiscountCollisionType_MajorSales,
            c = l ? e.start_date + G : e.start_date - I,
            u = l ? e.end_date - G : e.end_date + I;
          if (t.rtEndDate > c && u > t.rtStartDate) {
            if (((r = r || t.bChangedLocally), 0 == t.nDiscountPct)) continue;
            o.push(t), (a = l ? i.k_EOverlapsExisting : i.k_ECooldownWindow);
          }
        }
        return {
          ePackageDiscountState: a,
          rgConflictingDiscounts: o,
          bChangedLocally: r,
        };
      }
      function R(t, e, n, s, o) {
        let r,
          l = i.k_EOptInNoBaseAppToRegister;
        if (e)
          (r = e.get(t)),
            !r || r.restricted || r.pruned
              ? ((l = i.k_EOptInRestricted), (r = { restricted: !0 }))
              : (l = r.opt_in
                  ? i.k_EOkToDiscount
                  : r.invited || !r.time_opted_in
                  ? i.k_ENeedsOptIn
                  : i.k_EOptInOptedOut);
        else if (!s.nBaseAppID) {
          const t = n
            .GetIncludedAppIDs()
            .map((t) => {
              var e;
              return null ===
                (e = a.qh.Get().GetOptInRegistrationAndEligibilityForApp(t)) ||
                void 0 === e
                ? void 0
                : e.get(o.opt_in_name);
            })
            .filter(Boolean);
          t.some((t) => t.opt_in)
            ? (l = i.k_EOkToDiscount)
            : t.some((t) => !t.restricted && !t.pruned) &&
              (l = i.k_EOptInMultiAppPackageRegisterSomeGame);
        }
        return { ePackageDiscountState: l, optInRegistration: r };
      }
      function C(t, e) {
        var n, i, s;
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
                null === (s = p.Z.Get().GetApp(t)) || void 0 === s
                  ? void 0
                  : s.GetParentAppID();
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
          const s =
              null === (n = p.Z.Get().GetPackage(t.packageID)) || void 0 === n
                ? void 0
                : n.GetName(),
            a =
              null === (i = p.Z.Get().GetPackage(e.packageID)) || void 0 === i
                ? void 0
                : i.GetName();
          return (0, D.eT)(s, a);
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
      function A() {
        return u.useCallback(() => {
          S.Get();
        }, []);
      }
      function L() {
        const [t, e] = u.useState(S.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, _.Qg)(S.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function O() {
        return u.useCallback(() => {
          var t;
          return (
            (null === (t = S.Get().GetLocalPackageDiscountOverrides()) ||
            void 0 === t
              ? void 0
              : t.length) > 0
          );
        }, []);
      }
      function y() {
        return u.useCallback(
          (t) => S.Get().DiscardAllLocalPackageDiscountOverrides(t),
          [],
        );
      }
      function w() {
        return u.useCallback(
          (t, e) => S.Get().OptInRegistrationUpdatedForApp(t, e),
          [],
        );
      }
      function B() {
        return u.useCallback(
          (t, e) => S.Get().DiscardLocalPackageDiscountOverride(t, e),
          [],
        );
      }
      function N(t, e) {
        var n, s, a;
        const o =
          null === (n = S.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
          void 0 === n
            ? void 0
            : n.get(e);
        return (null == o ? void 0 : o.eState) == i.k_EOkToDiscount
          ? null !==
              (a =
                null === (s = null == o ? void 0 : o.discount) || void 0 === s
                  ? void 0
                  : s.nDiscountPct) && void 0 !== a
            ? a
            : 0
          : null;
      }
      function T(t, e) {
        const [n, i] = u.useState(() => {
          var n;
          return null ===
            (n = S.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === n
            ? void 0
            : n.get(e);
        });
        (0, _.Qg)(S.Get().GetDiscountGridCellCallbackList(t, e), i);
        return {
          packageState: n,
          fnSetDiscountPct: u.useCallback(
            (n) => {
              S.Get().OverridePackageDiscountPct(t, e, n);
            },
            [t, e],
          ),
        };
      }
      function F() {
        return u.useCallback((t, e, n) => {
          const i = [];
          for (const s of n) {
            const n = S.Get().OverridePackageDiscountPct(s, e, t);
            n && i.push(n);
          }
          return i;
        }, []);
      }
      function M(t) {
        const e = U(t);
        return u.useMemo(
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
      function U(t) {
        const [e, n] = u.useState(() => V(t)),
          i = u.useCallback(() => {
            n(V(t));
          }, [t]);
        return (
          u.useEffect(i, [t, i]),
          (0, _.Qg)(S.Get().GetDiscountEventColumnCallbackList(t), i),
          e
        );
      }
      function V(t) {
        var e, n;
        const s = S.Get().GetAllPackageStatesForDiscountEvent(t),
          a = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const t of s)
          switch (null == t ? void 0 : t.eState) {
            case i.k_ELoading:
              break;
            case i.k_EOkToDiscount:
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
            case i.k_EJustReleased:
            case i.k_EPriceIncreased:
            case i.k_ECooldownWindow:
            case i.k_EOverlapsExisting:
              a.conflicts.add(t.packageID);
              break;
            case i.k_ENeedsOptIn:
            case i.k_EOptInOptedOut:
              a.needRegistration.add(t.packageID);
              break;
            case i.k_EOptInRestricted:
            case i.k_EOptInNoBaseAppToRegister:
            case i.k_ENoAppInRequiredList:
              a.ineligibile.add(t.packageID);
          }
        return a;
      }
      function x(t) {
        return (
          !!(0, o.LT)(t).some((t) => t.nDiscountPct > 0) ||
          !(
            !S.IsInitialized() ||
            !S.Get()
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
      function j(t) {
        if ((0, o.kk)(t)) return !0;
        const e = (0, s.fH)(t);
        if (!(null == e ? void 0 : e.opt_in_name)) return !0;
        const n = a.qh.Get().GetAllOptInRegistrations(e.opt_in_name);
        return (
          !!(null == n ? void 0 : n.length) &&
          n.some((t) => !t.restricted && !t.pruned)
        );
      }
      function Q(t) {
        const e = (function () {
            const [t, e] = u.useState(S.IsInitialized());
            return (0, _.Qg)(S.s_initializationCallbackList, e), t;
          })(),
          [n, i] = u.useState(e ? S.Get().GetFutureDiscountRanges(t) : []),
          s = u.useCallback(
            () => i(e ? S.Get().GetFutureDiscountRanges(t) : []),
            [t, e],
          );
        return (
          (0, _.Qg)(
            e && S.Get().GetLocalPackageDiscountOverrideCallbackList(),
            s,
          ),
          (0, _.Qg)(e && (0, o.XM)(t), s),
          u.useEffect(s, [t, e, s]),
          n
        );
      }
      function W(t) {
        let [e, n] = u.useState(() => S.Get().GetHighestPackageDiscount(t)),
          i = u.useCallback(() => {
            n(S.Get().GetHighestPackageDiscount(t));
          }, [t, n]);
        return (0, _.Qg)(S.Get().GetDiscountPackageCallbackList(t), i), e;
      }
      S.s_initializationCallbackList = new g.pB();
    },
    86873: (t, e, n) => {
      "use strict";
      n.d(e, {
        $f: () => k,
        D_: () => S,
        P6: () => G,
        QB: () => i,
        QM: () => _,
        Zq: () => f,
        f0: () => m,
        im: () => h,
        ix: () => v,
        wQ: () => D,
        x9: () => E,
        y4: () => I,
      });
      var i,
        s = n(89526),
        a = n(85651),
        o = n(85246),
        r = n(4306),
        l = n(32765),
        c = n(65395),
        u = n(36998),
        d = n(16169);
      !(function (t) {
        (t.k_OptionDeepest = "deepest-past"),
          (t.k_OptionMostRecent = "most-recent"),
          (t.k_OptionNextAvailable = "next-available");
      })(i || (i = {}));
      const p = "related-discount-view";
      class g {
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        constructor() {
          (this.m_mapDiscountEventsByID = new Map()),
            (this.m_discountEventsCallbackList = new o.pB()),
            (this.m_mapLastTimeRaisedPrices = new Map()),
            (this.m_strSelectedDiscountEventID = null),
            (this.m_bIncludeWeeklongEvents = !1),
            (this.m_bIncludeCustomEvents = !0),
            (this.m_bIncludeIneligibleEvents = !1),
            (this.m_bIncludeConflictsInSingleEventView = !0),
            (this.m_eRelatedDiscountView = i.k_OptionDeepest),
            (this.m_RelatedDiscountViewCallbackList = new o.pB()),
            (this.m_gridEventSelectionParametersCallbackList = new o.pB()),
            (this.m_setVisibleDiscountEventIDs = new Set()),
            (this.m_visibleDiscountEventIDsCallbackList = new o.pB()),
            "dev" == l.De.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        Init() {
          var t;
          const e = (0, l.kQ)("price_increase_times", "application_config");
          if (
            (("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", e),
            this.BIsPriceIncreasePayloadValid(e))
          )
            for (let t in e)
              this.m_mapLastTimeRaisedPrices.set(Number(t), e[t]);
          else
            "dev" == l.De.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            null !== (t = window.localStorage.getItem(p)) && void 0 !== t
              ? t
              : i.k_OptionDeepest),
            this.UpdateDiscountEventsForGrid(),
            (0, c.i4)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, u.v6)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const t = (0, c.o)(),
            e = (0, u.Su)(),
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
            e && !this.m_bIncludeCustomEvents && (0, u.kk)(t.id) && (e = !1),
              e &&
                !this.m_bIncludeWeeklongEvents &&
                t.id.startsWith("weeklongdeal_") &&
                !(0, d.dy)(t.id) &&
                (e = !1),
              !e ||
                this.m_bIncludeIneligibleEvents ||
                (0, d.k)(t.id) ||
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
      function _(t) {
        var e;
        return null !== (e = g.Get().m_mapLastTimeRaisedPrices.get(t)) &&
          void 0 !== e
          ? e
          : 0;
      }
      function D() {
        return g.Get().m_rgDiscountEvents;
      }
      function m(t) {
        return g.Get().m_mapDiscountEventsByID.get(t);
      }
      function v() {
        return g.Get().m_discountEventsCallbackList;
      }
      function h() {
        const [t, e] = s.useState(g.Get().m_rgDiscountEvents);
        return (0, r.Qg)(g.Get().m_discountEventsCallbackList, e), t;
      }
      function E() {
        const [t, e] = s.useState(g.Get().m_setVisibleDiscountEventIDs);
        return (0, r.Qg)(g.Get().m_visibleDiscountEventIDsCallbackList, e), t;
      }
      function k(t = !0) {
        return g.Get().m_setVisibleDiscountEventIDs;
      }
      function f(t) {
        const [e, n] = s.useState(g.Get().m_mapDiscountEventsByID.get(t)),
          i = s.useCallback(
            () => n(g.Get().m_mapDiscountEventsByID.get(t)),
            [t],
          );
        return (
          (0, r.Qg)(g.Get().m_discountEventsCallbackList, i),
          s.useEffect(i, [t, i]),
          e
        );
      }
      function I(t = !0) {
        const [e, n] = s.useState(g.Get().GetEventSelectionParameters()),
          i = t ? g.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, r.Qg)(i, n), e;
      }
      function G() {
        const [t, e] = s.useState(g.Get().m_eRelatedDiscountView);
        (0, r.Qg)(g.Get().m_RelatedDiscountViewCallbackList, e);
        return [
          t,
          s.useCallback((t) => {
            (g.Get().m_eRelatedDiscountView = t),
              window.localStorage.setItem(p, t),
              g.Get().m_RelatedDiscountViewCallbackList.Dispatch(t);
          }, []),
        ];
      }
      function S() {
        return s.useCallback(() => {
          g.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    93923: (t, e, n) => {
      "use strict";
      n.d(e, {
        A$: () => S,
        Eg: () => b,
        Ii: () => R,
        JP: () => C,
        O7: () => G,
        UA: () => f,
        zQ: () => E,
        zV: () => I,
      });
      var i = n(89526),
        s = n(84343),
        a = n(32765),
        o = n(14826),
        r = n(7851),
        l = n.n(r),
        c = n(20614),
        u = n(61785),
        d = n(66104),
        p = n(64403),
        g = n.n(p),
        _ = n(36998),
        D = n(16169);
      function m(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          s = (0, D.ho)(n);
        let a = (0, _.Qy)(n) < s,
          r = g()(l().PackageNameColumn, a && l().PackagePricesBelowMin),
          c = a
            ? (0, o.Xx)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return i.createElement(
          h,
          Object.assign({ className: r, toolTip: c }, t),
        );
      }
      function v(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          s = (0, d.qH)(n);
        let a = g()(l().PackageNameColumn, s && l().PackagePricesBelowMin),
          r = s
            ? (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return i.createElement(
          h,
          Object.assign({ className: a, toolTip: r }, t),
        );
      }
      function h(t) {
        var e;
        const {
            fnBLocalChangesExist: n,
            fnWarnUser: s,
            cell: r,
            className: c,
            toolTip: u,
          } = t,
          d = r.getRow().getData().packageID,
          p =
            null !== (e = r.getValue()) && void 0 !== e
              ? e
              : i.createElement(
                  "span",
                  { className: l().UnknownValue },
                  (0, o.Xx)("#PackageGrid_PackageID", d),
                );
        return i.createElement(
          b,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: s,
            href: `${a.De.PARTNER_BASE_URL}store/packagelanding/${d}`,
            strToolTip: u,
            strClassName: c,
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
            formatter: (0, c.reactFormatter)(
              i.createElement(h, Object.assign({}, t)),
            ),
            cssClass: l().PackageID,
            hozAlign: "right",
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageID_ttip"),
          }),
          [t],
        );
      }
      function k(t, e, n, i) {
        return (
          !!(
            /^\d+$/.test(t) &&
            n.packageID &&
            n.packageID.toString().startsWith(t)
          ) || e.toLowerCase().includes(t.toLowerCase())
        );
      }
      function f(t, e) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_PackageName"),
            field: "packageName",
            headerSort: !1,
            formatter: (0, c.reactFormatter)(
              e
                ? i.createElement(m, Object.assign({}, t))
                : i.createElement(v, Object.assign({}, t)),
            ),
            cssClass: l().PackageName,
            width: 300,
            frozen: !0,
            variableHeight: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageName_ttip"),
            headerFilter: "input",
            headerFilterPlaceholder: (0, o.Xx)(
              "#PackageGrid_PackageNameFilterInputPrompt",
            ),
            headerFilterFunc: k,
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
            cssClass: l().PackageType,
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
          t.getNextRow() || t.getElement().classList.add(l().LastRow);
      }
      function P(t) {
        var e;
        const { fnBLocalChangesExist: n, fnWarnUser: s, cell: r } = t,
          l = r.getRow().getData().appids,
          c =
            null !== (e = null == l ? void 0 : l.length) && void 0 !== e
              ? e
              : 0,
          u = r.getRow().getData().packageID;
        return i.createElement(
          b,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: s,
            href: `${a.De.PARTNER_BASE_URL}store/packagelanding/${u}`,
            strToolTip: (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == c ? "1 appid" : c + " appids",
        );
      }
      function R(t) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_AppName"),
            field: "appName",
            sorter: u.yh,
            headerSort: !1,
            formatter: (0, c.reactFormatter)(
              i.createElement(P, Object.assign({}, t)),
            ),
            cssClass: l().AppCount,
            width: 80,
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_AppName_ttip"),
          }),
          [t],
        );
      }
      function C(t, e, n, i) {
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
      function b(t) {
        const {
          fnBLocalChangesExist: e,
          fnWarnUser: n,
          href: a,
          children: o,
          strToolTip: r,
          strClassName: l,
        } = t;
        return i.createElement(
          s.HP,
          { toolTipContent: r, className: l },
          i.createElement(
            "a",
            {
              onClick: (t) => {
                e() && (t.preventDefault(), n(t, a));
              },
              href: a,
            },
            o,
          ),
        );
      }
    },
    62176: (t, e, n) => {
      "use strict";
      n.d(e, { j: () => a });
      var i = n(89526),
        s = n(14826);
      function a(t) {
        const e = i.useCallback(
          (e) => {
            if (t())
              return (
                e.preventDefault(),
                (e.returnValue = (0, s.Xx)(
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
    2220: (t, e, n) => {
      "use strict";
      n.d(e, { R1: () => u, Sx: () => l, xs: () => p });
      var i = n(33940),
        s = n(42735),
        a = n(68562),
        o = n(92616),
        r = n(14826);
      const l = new Set([
          a.Ac.k_EStoreAppType_Game,
          a.Ac.k_EStoreAppType_Mod,
          a.Ac.k_EStoreAppType_Software,
          a.Ac.k_EStoreAppType_Tool,
        ]),
        c = new Set([
          a.Ac.k_EStoreAppType_DLC,
          a.Ac.k_EStoreAppType_Video,
          a.Ac.k_EStoreAppType_Music,
        ]);
      function u(t) {
        var e, n;
        let i,
          s = !1,
          a = !1;
        const u = new Set();
        for (const n of null !==
          (e = null == t ? void 0 : t.GetIncludedAppIDs()) && void 0 !== e
          ? e
          : []) {
          const t = o.Z.Get().GetApp(n);
          if (t && l.has(t.GetAppType())) (s = !0), u.add(t.GetID());
          else if (t && c.has(t.GetAppType())) {
            a = !0;
            const e = t.GetParentAppID();
            e && u.add(e);
          }
        }
        let d = null;
        1 == u.size
          ? ((i = Array.from(u)[0]),
            (d =
              null === (n = o.Z.Get().GetApp(i)) || void 0 === n
                ? void 0
                : n.GetName()))
          : u.size > 1 &&
            (d = (0, r.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          d || (d = (0, r.Xx)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: d,
          contents: s && a ? "BOTH" : s ? "GAME" : a ? "DLC" : null,
          nBaseAppID: i,
        };
      }
      const d = { include_release: !0 };
      function p(t, e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (
            (yield o.Z.Get().HintLoadStorePackages(t, d)) != s.s.k_EResultOK ||
            e.token.reason
          )
            return null;
          const n = [];
          t.map((t) => o.Z.Get().GetPackage(t))
            .filter((t) => !!t)
            .forEach((t) => n.push(...t.GetIncludedAppIDs()));
          const i = Array.from(new Set(n));
          if (
            (yield o.Z.Get().HintLoadStoreApps(i, d)) != s.s.k_EResultOK ||
            e.token.reason
          )
            return null;
          const a = i
              .map((t) => o.Z.Get().GetApp(t))
              .filter((t) => !!(null == t ? void 0 : t.GetParentAppID()))
              .map((t) => t.GetParentAppID()),
            r = Array.from(new Set(a));
          if (
            (yield o.Z.Get().HintLoadStoreApps(r, d)) != s.s.k_EResultOK ||
            e.token.reason
          )
            return null;
          return Array.from(new Set(i.concat(r)));
        });
      }
    },
  },
]);

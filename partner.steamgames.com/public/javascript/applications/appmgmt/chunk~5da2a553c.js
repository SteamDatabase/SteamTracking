/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8995],
  {
    42691: (t) => {
      t.exports = {
        DashboardPage: "_353rnPLVzyQBQhakxhkl7u",
        DashTitleBar: "_2m-_VofgoRb-uGQMrewYq3",
        DashTitle: "_1FK58fndqHlADYEX-58V0C",
        ConfidentialBanner: "_2H9KzQ8SQGvqGhbWidWzf4",
        Throbber: "_21EsxksQjCwl-Xz3TNuoPc",
        ErrorMessage: "_190uxu3FVS6Fx-IbDsfCyd",
        ButtonGroup: "_2peTiEFo27_zkZA0TzjnD4",
      };
    },
    40441: (t) => {
      t.exports = {
        EventDetails: "_3LMXjfy-EuA2ZWoW660vuc",
        Active: "_2BLece8YI3va6GD9JEUxjL",
        RestrictedEligibility: "_2lxTisamKtJUowDlNKSrzG",
        CollisionFreeDiscountEvent: "_15fBcZwmM-nap1QbkpRc2G",
        EventName: "_2bJFFj7RfHL_P4P-MJlzK4",
        EditEventLink: "_1XHd3t0XU1SfpsraST5Ovy",
        EventDates: "_2kY09NU8R-tjOVYmIwZ98B",
        EventDateRange: "_312igBJXB0MifodN4IBq1i",
        EventNumDays: "OAAVWKvssJLy0QM6mVcw6",
        EventLink: "VZ3pVxXbvFNzdGOkOrNGU",
        EventParticipationCtn: "_2iuUu1K5b1e71DnJKkBtHH",
        ParticipationDetails: "_2tr5XTQIvHNQiu4IZKMi7Z",
        Title: "_3mO71T0Q_migmtLfYRFb-6",
        Count: "_1pDZ1lHiN5RohGZxcDAyCK",
        Selected: "_36G76FOe3fZ8csab26PcL8",
        ParticipationToolTip: "_36hxaHrRvc7ct9bb0Aeza3",
        AppLink: "_3RF-6YnSS_2OpJmOo0BV6_",
        BasePrice: "_1a_LwvXaB11PNusz9GPz98",
        RelatedDiscount: "_12zwKFzckK0AkG-lS95iTK",
        DiscountGridDataColumn: "_1yW70vcAdwnrMIrVE8y03S",
        GridRowLoadingThrobber: "r2FLR3ukmK3cVbBV-j8Aa",
        CurrencyPicker: "_2Z65Kc_3FxlP0E15rMFuVC",
        RelatedInfoPicker: "O-95g3EzyTgFwNJ8ATC-e",
        RelatedInfoPickerCtn: "_2nnB1eMYflFLLmMAi7_jJV",
        CurrencyDropDown: "_2gGuz_TA8axLQOqAtwurFU",
        RelatedInfoDropDown: "_1jj2uEuCns_K_cIfGZcKl6",
        CurrencyDropDownItem: "_3wPHxQWhohHATqjvN6B2l3",
        RelatedInfoDropDownItem: "_1ORamDcYtEN8wS1voTsWE",
      };
    },
    61010: (t) => {
      t.exports = {
        UnknownValue: "_3ovtfYPeggcsA44NZPuTAh",
        PackageNameColumn: "_2pjx8S7EGnMJcmc9CzX9UK",
        PackagePricesBelowMin: "_2x4be2ySvHHrfL_FaOtZPm",
        PackageNameHeader: "_3nw5HtkrUNuyUyfkPUToSG",
        AppCount: "_2J3kNbz7o9Fd161kGxFARG",
        PackageID: "_1E3TVBOn6hjLXBLwqCPV4J",
        PackageName: "t8fSjo20nSXqky8aCgQwm",
        PackageType: "_3LZvjdGD8NF2mke6oav-MK",
        RowItemCount: "_1r2Rcks7aQ0Yf7SLUPQrGn",
      };
    },
    30168: (t, e, i) => {
      "use strict";
      i.d(e, {
        Cz: () => n,
        G2: () => r,
        Ld: () => o,
        Zs: () => s,
        j1: () => a,
      });
      const n = "1",
        a = "SaleEvent_DurationDiscount_Tooltip",
        r = "discount";
      var s, o;
      !(function (t) {
        (t.k_EDiscountCollisionType_Normal = "proximity"),
          (t.k_EDiscountCollisionType_MajorSales = "unique");
      })(s || (s = {})),
        (function (t) {
          (t.k_EDiscountPreventWeeklong_Normal = ""),
            (t.k_EDiscountPreventWeeklong_MajorSales = "on");
        })(o || (o = {}));
    },
    258: (t, e, i) => {
      "use strict";
      i.d(e, {
        BG: () => I,
        E7: () => h,
        cR: () => B,
        p6: () => D,
        sU: () => S,
        tW: () => E,
        ur: () => y,
        vV: () => k,
        wn: () => b,
        yB: () => f,
      });
      var n = i(34629),
        a = i(41735),
        r = i.n(a),
        s = i(90626),
        o = i(37085),
        c = i(44165),
        l = i(68797),
        u = i(6419),
        p = i(6144),
        d = i(73745),
        m = i(78327),
        _ = i(30168);
      class g {
        m_mapDiscountEvents = new Map();
        m_discountEventsListCallback = new p.lu();
        m_mapDiscountEventCallback = new Map();
        m_mapAppList = new Map();
        m_mapAppListCallback = new Map();
        m_bLoadedViaInitOrFullLoad = !1;
        m_bLoadEventsRequestInFlight = !1;
        m_mapInflightDiscountLoadRequest = new Map();
        m_mapInflightDiscountAndAppListLoadRequest = new Map();
        GetFutureDiscountEvents() {
          const t = (0, c.sB)();
          return Array.from(g.Get().m_mapDiscountEvents.values()).filter(
            (e) => e.end_date > t,
          );
        }
        GetAllDiscountEvents() {
          return Array.from(g.Get().m_mapDiscountEvents.values());
        }
        GetDiscountEventListCallback() {
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
              this.m_mapDiscountEventCallback.set(t, new p.lu()),
            this.m_mapDiscountEventCallback.get(t)
          );
        }
        GetAppListCallback(t) {
          return (
            this.m_mapAppListCallback.has(t) ||
              this.m_mapAppListCallback.set(t, new p.lu()),
            this.m_mapAppListCallback.get(t)
          );
        }
        async LoadAllDiscountEvents(t, e) {
          if (this.m_bLoadEventsRequestInFlight)
            return o.d.k_EResultDuplicateRequest;
          const i =
              m.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetalldiscountevents/" +
              t,
            n = {};
          let a = null;
          try {
            this.m_bLoadEventsRequestInFlight = !0;
            const t = await r().get(i, { params: n, cancelToken: e?.token });
            if (
              ((this.m_bLoadEventsRequestInFlight = !1),
              200 == t?.status &&
                t.data?.success == o.d.k_EResultOK &&
                t.data.events)
            ) {
              for (const e of t.data.events)
                this.m_mapDiscountEvents.set(e.id, e);
              return (
                (this.m_bLoadedViaInitOrFullLoad = !0),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                o.d.k_EResultOK
              );
            }
            a = { response: t };
          } catch (t) {
            a = t;
          }
          const s = (0, l.H)(a);
          return (
            console.error("Could not load Discount Events", s.strErrorMsg, s),
            a?.response?.data?.success ?? o.d.k_EResultFail
          );
        }
        async CreateDiscountEvent(t, e, i, n, a, s, c, u) {
          const p =
              m.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            d = new FormData();
          d.append("sessionid", m.TS.SESSIONID),
            d.append("name", i),
            d.append("start_time", t.toString()),
            d.append("end_time", e.toString()),
            d.append("strJSONDiscountInfo", B(i, n, a, s, c));
          let g = null;
          try {
            const l = await r().post(p, d, {
              withCredentials: !0,
              cancelToken: u?.token,
            });
            if (
              200 == l?.status &&
              l.data?.success == o.d.k_EResultOK &&
              l.data.eventid
            ) {
              const r = {
                id: l.data.eventid,
                name: i,
                start_date: t,
                end_date: e,
                appids: c,
                publisherids: s,
                description: a,
                collision_type: _.Zs.k_EDiscountCollisionType_Normal,
                event: _.Cz,
                header: n,
                tooltip: _.j1,
                type: _.G2,
                prevent_weeklong: _.Ld.k_EDiscountPreventWeeklong_Normal,
              };
              return (
                this.m_mapDiscountEvents.set(r.id, r),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                r
              );
            }
            g = { response: l };
          } catch (t) {
            g = t;
          }
          const E = (0, l.H)(g);
          return (
            console.error(
              "CDiscountEventStore.CreateDiscountEvent: failed",
              E.strErrorMsg,
              E,
            ),
            null
          );
        }
        async UpdateDiscountEventPublisherAndAppList(t, e, i, n) {
          const a = this.m_mapDiscountEvents.get(t);
          if (!a)
            return (
              console.error(
                "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                t,
              ),
              null
            );
          const s =
              m.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            c = new FormData();
          c.append("sessionid", m.TS.SESSIONID),
            c.append("start_time", a.start_date.toString()),
            c.append("end_time", a.end_date.toString()),
            c.append(
              "strJSONDiscountInfo",
              (function (t, e, i, n) {
                return JSON.stringify({
                  discount_event: {
                    eventid: t,
                    name: e.name,
                    header: e.header,
                    allowed_appids: n.join(","),
                    allowed_publisherids: i.join(","),
                    description: e.description,
                    collision_type: e.collision_type,
                    event: e.event,
                    tooltip: e.tooltip,
                    type: e.type,
                    prevent_weeklong: e.prevent_weeklong,
                  },
                });
              })(t, a, e, i),
            );
          let u = null;
          try {
            const t = await r().post(s, c, {
              withCredentials: !0,
              cancelToken: n?.token,
            });
            if (
              200 == t?.status &&
              t.data?.success == o.d.k_EResultOK &&
              t.data.eventid
            ) {
              const t = { ...a, appids: i, publisherids: e };
              return (
                this.m_mapDiscountEvents.set(t.id, t),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                t
              );
            }
            u = { response: t };
          } catch (t) {
            u = t;
          }
          const p = (0, l.H)(u);
          return (
            console.error(
              "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
              p.strErrorMsg,
              p,
            ),
            null
          );
        }
        async LoadSingleDiscountEvent(t) {
          return this.m_mapDiscountEvents.has(t)
            ? this.m_mapDiscountEvents.get(t)
            : (this.m_mapInflightDiscountLoadRequest.has(t) ||
                this.m_mapInflightDiscountLoadRequest.set(
                  t,
                  this.InternalLoadSingleDiscountEvent(t),
                ),
              this.m_mapInflightDiscountLoadRequest.get(t));
        }
        async InternalLoadSingleDiscountEvent(t) {
          let e = null;
          if (!t || 0 == t.length || "0" == t) return null;
          try {
            const i =
                m.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventbyid",
              n = { sessionid: m.TS.SESSIONID, discountid: t },
              a = await r().get(i, { params: n, withCredentials: !0 });
            if (
              200 == a?.status &&
              a?.data?.success == o.d.k_EResultOK &&
              a?.data?.discount_event
            )
              return (
                this.m_mapDiscountEvents.set(t, a.data.discount_event),
                this.GetDiscountEventCallback(t).Dispatch(
                  a.data.discount_event,
                ),
                a.data.discount_event
              );
            e = (0, l.H)(a);
          } catch (t) {
            e = (0, l.H)(t);
          }
          return (
            console.error(
              "CDiscountEventStore.InternalLoadSingleDiscountEvent failed: " +
                e?.strErrorMsg,
              e,
            ),
            null
          );
        }
        async LoadSingleDiscountEventsAppList(t) {
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
        }
        async InternalLoadSingleDiscountEventsAppList(t) {
          let e = null;
          if (!t || 0 == t.length) return null;
          try {
            const i =
                m.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventapplist",
              n = { sessionid: m.TS.SESSIONID, discountid: t },
              a = await r().get(i, { params: n, withCredentials: !0 });
            if (
              200 == a?.status &&
              a?.data?.success == o.d.k_EResultOK &&
              a?.data?.discount_event
            )
              return (
                this.m_mapDiscountEvents.set(t, a.data.discount_event),
                this.m_mapAppList.set(t, a.data.appid_list),
                this.GetDiscountEventCallback(t).Dispatch(
                  a.data.discount_event,
                ),
                this.GetAppListCallback(t).Dispatch(a.data.appid_list),
                {
                  oDiscountEvent: a.data.discount_event,
                  rgAppList: a.data.appid_list,
                }
              );
            e = (0, l.H)(a);
          } catch (t) {
            e = (0, l.H)(t);
          }
          return (
            console.error(
              "CDiscountEventStore.InternalLoadSingleDiscountEventsAppList failed: " +
                e?.strErrorMsg,
              e,
            ),
            null
          );
        }
        static s_Singleton;
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        constructor() {
          "dev" == m.TS.WEB_UNIVERSE && (window.g_DiscountEventStore = this);
        }
        Init() {
          const t = (0, m.Tc)("discount_events", "application_config");
          if (
            (("dev" != m.TS.WEB_UNIVERSE && "beta" != m.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountEventStore loading payload: ",
                t,
              ),
            this.BIsConfigValid(t))
          ) {
            for (const e of t) this.m_mapDiscountEvents.set(e.id, e);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == m.TS.WEB_UNIVERSE &&
              t &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(t) {
          const e = t;
          return !(!e || !Array.isArray(e));
        }
      }
      function E() {
        return g.Get().GetFutureDiscountEvents();
      }
      function f() {
        return g.Get().GetDiscountEventListCallback();
      }
      function b(t) {
        const { rgDiscountEvents: e, eResult: i } = S(0, t);
        let n = [];
        return (
          e?.forEach((t) => {
            t.collision_type == _.Zs.k_EDiscountCollisionType_MajorSales &&
              (n = n.concat(t));
          }),
          { rgMajorSaleDiscountEvents: n, eResult: i }
        );
      }
      function S(t, e) {
        const i = g.Get().BLoadedViaInitOrFullLoad(),
          [n, a] = s.useState(i ? g.Get().GetAllDiscountEvents() : null),
          [r, c] = s.useState(null),
          l =
            t ||
            Number.parseInt((0, m.Tc)("publisherid", "application_config"));
        (0, d.hL)(g.Get().GetDiscountEventListCallback(), a),
          s.useEffect(() => {
            g.Get().BLoadedViaInitOrFullLoad() ||
              g.Get().LoadAllDiscountEvents(l).then(c);
          }, [n, l]);
        const u = r ?? (n?.length ? o.d.k_EResultOK : null);
        return s.useMemo(
          () => ({
            rgDiscountEvents: e ? n : g.Get().GetFutureDiscountEvents(),
            eResult: u,
          }),
          [n, u, e],
        );
      }
      function h(t) {
        return g.Get().GetDiscountEvent(t);
      }
      function k(t) {
        const { data: e } = (function (t) {
          const [e, i] = (0, s.useState)(g.Get().GetDiscountEvent(t)),
            [n, a] = s.useState(!!t);
          return (
            s.useEffect(() => {
              if ((!e && t) || (e?.id != t && t)) {
                (async () => {
                  try {
                    const e = await g.Get().LoadSingleDiscountEvent(t);
                    e && i(e);
                  } finally {
                    a(!1);
                  }
                })();
              } else a(!1);
            }, [t, e]),
            (0, d.hL)(g.Get().GetDiscountEventCallback(t), i),
            { data: e, isLoading: n }
          );
        })(t);
        return e;
      }
      function D(t) {
        const [e, i] = (0, s.useState)(g.Get().GetDiscountEvent(t)),
          [n, a] = (0, s.useState)(g.Get().GetAppList(t));
        return (
          (0, s.useEffect)(() => {
            ((!n && t) || (e?.id != t && t)) &&
              g
                .Get()
                .LoadSingleDiscountEventsAppList(t)
                .then((t) => {
                  t && (i(t.oDiscountEvent), a(t.rgAppList));
                });
          }, [e?.id, n, t]),
          (0, d.hL)(g.Get().GetDiscountEventCallback(t), i),
          (0, d.hL)(g.Get().GetAppListCallback(t), a),
          n ? { oDiscountEvent: e, rgAppList: n } : null
        );
      }
      function B(t, e, i, n, a) {
        return JSON.stringify({
          discount_event: {
            name: t,
            publisherids: n?.join(","),
            appids: a?.join(","),
            description: i,
            event: _.Cz,
            collision_type: _.Zs.k_EDiscountCollisionType_Normal,
            header: e,
            tooltip: _.j1,
            type: _.G2,
          },
        });
      }
      function y() {
        return { fnCreateDiscountEvent: g.Get().CreateDiscountEvent };
      }
      function I() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            g.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, n.Cg)([u.o], g.prototype, "GetDiscountEvent", null),
        (0, n.Cg)([u.o], g.prototype, "GetAppList", null),
        (0, n.Cg)([u.o], g.prototype, "CreateDiscountEvent", null),
        (0, n.Cg)(
          [u.o],
          g.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
    6319: (t, e, i) => {
      "use strict";
      i.d(e, {
        D6: () => y,
        DC: () => M,
        EF: () => k,
        G7: () => h,
        Iy: () => D,
        O4: () => v,
        _q: () => P,
        dN: () => w,
        es: () => R,
        fw: () => A,
        k: () => B,
        kJ: () => I,
        ms: () => C,
        uL: () => S,
      });
      var n = i(34629),
        a = i(41735),
        r = i.n(a),
        s = i(14947),
        o = i(90626),
        c = i(20194),
        l = i(37085),
        u = i(76115),
        p = i(62490),
        d = i(81393),
        m = i(68797),
        _ = i(6419),
        g = i(6144),
        E = i(73745),
        f = i(78327),
        b = i(4434);
      class S {
        constructor() {
          (0, s.Gn)(this);
        }
        static s_OptInRegs;
        m_mapRegistrations = new Map();
        m_mapRequestedAppIDs = new Map();
        m_mapOptInNameCallback = new Map();
        m_mapSingleAppRegistrationChange = new Map();
        m_loadCountChangeCallback = new g.lu();
        BHasOptInRegistration(t, e) {
          return Boolean(this.m_mapRegistrations.get(t)?.has(e));
        }
        GetOptInRegistrationPromise(t, e) {
          return this.m_mapRequestedAppIDs.get(e)?.get(t);
        }
        GetOptInRegistrationAndEligibilityForApp(t) {
          return this.m_mapRegistrations.get(t);
        }
        GetSingleAppRegistrationKey(t, e) {
          return `single_${t}_${e}`;
        }
        GetSingleAppRegistrationChange(t, e) {
          const i = this.GetSingleAppRegistrationKey(t, e);
          return (
            this.m_mapSingleAppRegistrationChange.has(i) ||
              this.m_mapSingleAppRegistrationChange.set(i, new g.lu()),
            this.m_mapSingleAppRegistrationChange.get(i)
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
          for (let i of t) {
            let t = this.m_mapRegistrations.get(i);
            if (t)
              for (let i of t.keys()) {
                let t = e.get(i);
                t || (t = 0), e.set(i, t + 1);
              }
          }
          let i = new Map(),
            n = t[0];
          return (
            e.forEach((e, a) => {
              if (e == t.length) {
                let t = this.m_mapRegistrations.get(n).get(a);
                (0, d.wT)(t, "Missing OptIn Restration"), i.set(a, t);
              }
            }),
            i.size > 0 ? i : null
          );
        }
        BHasOptionOnRegistration(t, e, i) {
          const n = this.GetRegistration(t, e);
          return (
            !(!n || !n.opt_in) &&
            (!i ||
              n?.jsondata?.dynamic_selection?.some(
                (t) =>
                  t &&
                  t.section_id == i.section_id &&
                  t.list_selection?.some(
                    (t) =>
                      t &&
                      t.list_id == i.list_id &&
                      t.selected_item_id?.includes(i.option_id),
                  ),
              ))
          );
        }
        BHasOptInTrailer(t, e) {
          const i = this.GetRegistration(t, e);
          return Boolean(
            i &&
              i.opt_in &&
              i.jsondata?.trailer_permission &&
              i.jsondata.rtime_granting_trailer,
          );
        }
        BHasOptInDemo(t, e) {
          const i = this.GetRegistration(t, e);
          return Boolean(
            i &&
              i.opt_in &&
              i.jsondata?.demo_permission &&
              i.jsondata.rtime_granting_demo,
          );
        }
        BHasOptInGameProfile(t, e) {
          const i = this.GetRegistration(t, e);
          return Boolean(
            i &&
              i.opt_in &&
              i.jsondata?.game_profile_intent &&
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
          let i = this.m_mapRegistrations.get(t);
          i ||
            ((i = new Map()),
            this.m_mapRegistrations.set(t, i),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let n = i.get(e);
          return (
            n
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  n,
                )
              : (n = this.CreateRegistrationNotSaved(t, e)),
            n
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(t, e) {
          let i = this.m_mapRegistrations.get(t);
          i ||
            ((i = new Map()),
            this.m_mapRegistrations.set(t, i),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let n = i.get(e);
          return (
            n
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  n,
                )
              : ((n = this.CreateRegistrationNotSaved(t, e)), i.set(e, n)),
            n
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
            .map((e) => this.m_mapRegistrations.get(e)?.get(t))
            .filter(Boolean);
        }
        GetOptInNameRegistrationsCallbackList(t) {
          return t
            ? (this.m_mapOptInNameCallback.has(t) ||
                this.m_mapOptInNameCallback.set(t, new g.lu()),
              this.m_mapOptInNameCallback.get(t))
            : null;
        }
        UpdateRegAndTrackInStore(t, e) {
          const i = e.map((e) =>
            e.jsondata && "" !== e.jsondata
              ? { ...e, jsondata: JSON.parse(e.jsondata) }
              : { ...e, jsondata: { opt_in_name: t } },
          );
          return (
            i.forEach((e) => {
              this.m_mapRegistrations.has(e.appid) ||
                (this.m_mapRegistrations.set(e.appid, new Map()),
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                )),
                this.m_mapRegistrations.get(e.appid).set(t, e);
            }),
            i
          );
        }
        async FetchOptInRegistrationForOptIn(t, e) {
          const i =
              f.TS.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
            n = { sessionid: f.TS.SESSIONID, opt_in_name: t, opt_in_only: e },
            a = await r().get(i, { params: n, withCredentials: !0 });
          return a?.data?.data
            ? this.UpdateRegAndTrackInStore(t, a.data.data)
            : a?.data?.data;
        }
        async FetchPendingReviewOptInRegistrationn(t) {
          const e =
              f.TS.PARTNER_BASE_URL + "optin/ajaxgetpendingreviewregistrations",
            i = { sessionid: f.TS.SESSIONID, opt_in_name: t },
            n = await r().get(e, { params: i, withCredentials: !0 });
          return n?.data?.data
            ? this.UpdateRegAndTrackInStore(t, n.data.data)
            : n?.data?.data;
        }
        async LoadOptInRegistration(t, e, i) {
          if (this.GetRegistration(e, t)) return !0;
          const n = this.m_mapRequestedAppIDs.get(t)?.get(e);
          if (n) return n;
          try {
            const n = f.TS.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
              a = { sessionid: f.TS.SESSIONID, appid: e, opt_in_name: t },
              s = await r().get(n, {
                params: a,
                withCredentials: !0,
                cancelToken: i?.token,
              });
            if (
              s?.data?.success == l.d.k_EResultOK &&
              s.data.optin_registration
            ) {
              if (
                ("string" == typeof s.data.optin_registration.jsondata &&
                  (s.data.optin_registration.jsondata = JSON.parse(
                    s.data.optin_registration.jsondata,
                  )),
                this.m_mapRegistrations.has(e))
              )
                this.m_mapRegistrations
                  .get(e)
                  .set(t, s.data.optin_registration);
              else {
                const i = new Map();
                i.set(t, s.data.optin_registration),
                  this.m_mapRegistrations.set(e, i),
                  this.GetLoadCountChange().Dispatch(
                    this.m_mapRegistrations.size,
                  );
              }
              return !0;
            }
            {
              const t = (0, m.H)(s);
              console.error(
                "LoadOptInRegistration : failed with a response and: " +
                  t.strErrorMsg,
                t,
              );
            }
          } catch (t) {
            const e = (0, m.H)(t);
            console.error(
              "LoadOptInRegistration : failed with " + e.strErrorMsg,
              e,
            );
          }
          return !1;
        }
        async LoadMultiOptInRegistration(t, e, i, n) {
          if (0 == e.length || 0 == t.length) return !1;
          let a = null;
          const s = new Promise((t, e) => {
            a = t;
          });
          (t = p.Ew(t).sort()),
            (e = p.Ew(e).sort()),
            t.forEach((t) => {
              this.m_mapRequestedAppIDs.has(t) ||
                this.m_mapRequestedAppIDs.set(t, new Map());
            });
          let o = new Array();
          if (
            (e.forEach((e) => {
              t.some(
                (t) =>
                  !this.BHasOptInRegistration(e, t) &&
                  !this.GetOptInRegistrationPromise(e, t),
              ) &&
                (o.push(e),
                t.forEach((t) => this.m_mapRequestedAppIDs.get(t).set(e, s)));
            }),
            0 == o.length)
          )
            return !0;
          const c =
            f.TS.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
          let u = null;
          try {
            for (; o.length > 0; ) {
              let e = 0;
              const a = [];
              for (; o.length > 0 && e < 5; ) {
                const n = o.splice(0, 50),
                  s = {
                    rgOptInNames: t.join(","),
                    rgAppIDs: n.join(","),
                    origin: self.origin,
                  };
                a.push(
                  r().get(c, {
                    params: s,
                    withCredentials: !0,
                    cancelToken: i?.token,
                  }),
                ),
                  (e += 1);
              }
              const s = await Promise.all(a);
              for (const t of s) {
                if (
                  200 != t?.status ||
                  t.data?.success != l.d.k_EResultOK ||
                  !t.data.optin_registrations?.length
                ) {
                  u = { response: t };
                  break;
                }
                this.InternalAddRegistrations(t.data.optin_registrations, n);
              }
              this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size);
            }
          } catch (t) {
            u = t;
          }
          if (null == u) a(!0);
          else {
            const i = (0, m.H)(u);
            console.error(
              "Could not load OptIn for Apps",
              e,
              t,
              i.strErrorMsg,
              i,
            ),
              a(!1);
          }
          return s;
        }
        async RegisterAppForOptIn(t, e) {
          const i = {
            opt_in_name: e.startsWith("sale_") ? e : "sale_" + e,
            opt_in: !0,
          };
          return this.UpdateOptInRegistration(t, i);
        }
        async UpdateOptInRegistration(t, e) {
          let i = null;
          try {
            const n = new FormData();
            n.append("sessionid", f.TS.SESSIONID),
              Object.keys(e).forEach((t) => n.append(t, e[t]));
            const a =
                f.TS.PARTNER_BASE_URL +
                "optin/ajaxupdateoptinregistration/" +
                t,
              s = await r().post(a, n, { withCredentials: !0 });
            if (200 == s?.status && s.data?.success == l.d.k_EResultOK)
              return null;
            i = (0, m.H)(s);
          } catch (t) {
            i = (0, m.H)(t);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateOptInRegistration error " +
                i.strErrorMsg,
              i,
            ),
            i.strErrorMsg
          );
        }
        async UpdateOptInRegistrationJson(t, e, i = !1) {
          let n = null;
          try {
            const a = new FormData();
            a.append("sessionid", f.TS.SESSIONID),
              a.append("appid", "" + t),
              a.append("opt_in_name", e.opt_in_name),
              a.append("jsondata", JSON.stringify(e)),
              i && a.append("bCreatePendingInvite", "true");
            const s =
                f.TS.PARTNER_BASE_URL +
                "optin/ajaxupdateoptinregistrationpayload/" +
                t,
              o = await r().post(s, a, { withCredentials: !0 });
            if (200 == o?.status && o.data?.success == l.d.k_EResultOK) {
              const i = e.opt_in_name.startsWith("sale_")
                  ? e.opt_in_name
                  : "sale_" + e.opt_in_name,
                n = this.m_mapRegistrations.get(t).get(i);
              n.jsondata = e;
              const a = { ...n };
              return (
                this.m_mapRegistrations.get(t).set(e.opt_in_name, a),
                this.GetSingleAppRegistrationChange(t, e.opt_in_name).Dispatch(
                  a,
                ),
                null
              );
            }
            n = (0, m.H)(o);
          } catch (t) {
            n = (0, m.H)(t);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateOptInRegistrationJson error " +
                n.strErrorMsg,
              n,
            ),
            n.strErrorMsg
          );
        }
        async UpdateAppealState(t, e, i) {
          let n = null;
          try {
            const a = e.opt_in_name || e.jsondata.opt_in_name,
              s = new FormData();
            s.append("sessionid", f.TS.SESSIONID),
              s.append("appid", "" + t),
              s.append("opt_in_name", a),
              s.append("approved", "" + i);
            const o =
                f.TS.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
              c = await r().post(o, s, { withCredentials: !0 });
            if (200 == c?.status && c.data?.success == l.d.k_EResultOK) {
              const e = { ...this.m_mapRegistrations.get(t).get(a) };
              return (
                (e.accountid_appeal = f.iA.accountid),
                (e.appeal_state = i
                  ? u.vm.k_EPartnerAppOptInAppealState_Approved
                  : u.vm.k_EPartnerAppOptInAppealState_Denied),
                this.m_mapRegistrations.get(t).set(a, e),
                this.GetSingleAppRegistrationChange(t, a).Dispatch(e),
                !0
              );
            }
            n = (0, m.H)(c);
          } catch (t) {
            n = (0, m.H)(t);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateAppealState error " + n.strErrorMsg,
              n,
            ),
            !1
          );
        }
        static Get() {
          return (
            S.s_OptInRegs ||
              ((S.s_OptInRegs = new S()),
              (window.COptInRegistrations = S.s_OptInRegs),
              S.s_OptInRegs.Init()),
            S.s_OptInRegs
          );
        }
        InternalAddRegistrations(t, e) {
          const i = new Set();
          t.forEach((t) => {
            if (!Number.isNaN(t.appid)) {
              let n = this.m_mapRegistrations.get(t.appid);
              if (
                (n ||
                  ((n = new Map()), this.m_mapRegistrations.set(t.appid, n)),
                t.jsondata && "string" == typeof t.jsondata)
              ) {
                const e = t.jsondata;
                0 == e.trim().length
                  ? (t.jsondata = {})
                  : (t.jsondata = JSON.parse(e));
              }
              n.set(t.opt_in_name, t), e && e.Increment(), i.add(t.opt_in_name);
            }
          }),
            Array.from(i).forEach((t) => {
              this.GetOptInNameRegistrationsCallbackList(t).Dispatch(
                this.GetAllOptInRegistrations(t),
              );
            });
        }
        Init() {
          let t = JSON.parse(
            JSON.stringify(
              (0, f.Tc)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(t) &&
            (this.InternalAddRegistrations(t),
            "dev" == f.TS.WEB_UNIVERSE &&
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
      function h(t, e) {
        const i = t.jsondata?.dynamic_selection;
        try {
          if (i) {
            const t = i
              .filter((t) => t.section_id == e.section_id)
              .map((t) => t.list_selection);
            if (t.length > 0 && t[0]) {
              const i = t[0]
                .filter((t) => t.list_id == e.list_id)
                .map((t) => t.selected_item_id);
              if (i.length > 0) return i[0];
            }
          }
        } catch (e) {
          console.log("error: dynamic section", i, t, e);
        }
        return [];
      }
      function k() {
        return o.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: S.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function D(t, e, i) {
        const [n, a] = o.useState(null),
          r = (0, b.m)("useMultiLoadOptInAppReg");
        return (
          (0, o.useEffect)(() => {
            const n = e?.filter(Boolean);
            n?.length > 0 && t?.length > 0
              ? S.Get()
                  .LoadMultiOptInRegistration(
                    n.map(() => t),
                    n,
                    r,
                    i,
                  )
                  .then(() => {
                    const e = new Map();
                    n.forEach((i) => {
                      const n = S.Get().GetRegistration(i, t);
                      n && e.set(i, n);
                    }),
                      a(e);
                  })
              : a(new Map());
          }, [t, e, r, i]),
          n
        );
      }
      function B(t) {
        const [e, i] = o.useState(S.Get().GetAllOptInRegistrations(t));
        return (
          (0, E.hL)(S.Get().GetOptInNameRegistrationsCallbackList(t), i), e
        );
      }
      function y(t) {
        const e = B(t),
          [i, n] = o.useState({
            nAppOptedIn: 0,
            nAppEligible: 0,
            nAppOptedOut: 0,
            nAppIneligible: 0,
          });
        return (
          o.useEffect(() => {
            if (e?.length > 0) {
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
                JSON.stringify(t) != JSON.stringify(i) && n(t);
            }
          }, [e, i]),
          i
        );
      }
      function I(t, e) {
        const i = (0, c.I)({
          queryKey: ["useAllOptInRegistrationByName", t, Boolean(e)],
          queryFn: () => S.Get().FetchOptInRegistrationForOptIn(t, e),
          staleTime: 36e5,
        });
        return i.isLoading ? null : i.data;
      }
      function w(t) {
        const e = (0, c.I)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", t],
          queryFn: () => S.Get().FetchPendingReviewOptInRegistrationn(t),
          retry: !1,
          staleTime: 36e5,
          enabled: t?.length > 0,
        });
        return {
          rgPendingReviewRegistrations: e.isLoading ? null : e.data,
          bIsInError: e.isError,
        };
      }
      function v(t, e) {
        const i = I(t, !1),
          [n, a] = (0, o.useState)(i?.find((t) => t.appid == e));
        return (0, E.hL)(S.Get().GetSingleAppRegistrationChange(e, t), a), n;
      }
      function M(t, e) {
        const [i, n] = (0, o.useState)(
          S.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e),
        );
        return (0, E.hL)(S.Get().GetSingleAppRegistrationChange(t, e), n), i;
      }
      function P(t, e) {
        const [i, n] = (0, o.useState)(
          S.Get().GetExistingOptInRegistartion(t, e),
        );
        return (0, E.hL)(S.Get().GetSingleAppRegistrationChange(t, e), n), i;
      }
      function R() {
        return {
          fnUpdateOptInRegistrationJson: S.Get().UpdateOptInRegistrationJson,
        };
      }
      function A() {
        return { fnUpdateAppealState: S.Get().UpdateAppealState };
      }
      function C() {
        const [t, e] = (0, o.useState)(S.Get().GetLoadCount());
        return (
          (0, E.hL)(S.Get().GetLoadCountChange(), e), S.Get().GetLoadCount()
        );
      }
      (0, n.Cg)(
        [_.o],
        S.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, n.Cg)(
          [_.o],
          S.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, n.Cg)([_.o], S.prototype, "LoadMultiOptInRegistration", null),
        (0, n.Cg)([_.o], S.prototype, "UpdateOptInRegistrationJson", null),
        (0, n.Cg)([_.o], S.prototype, "UpdateAppealState", null),
        (0, n.Cg)([s.XI], S.prototype, "Init", null);
    },
    48996: (t, e, i) => {
      "use strict";
      i.d(e, {
        $U: () => k,
        $p: () => G,
        CW: () => T,
        Fk: () => A,
        Ko: () => S,
        Lj: () => h,
        Mh: () => y,
        XA: () => C,
        XL: () => z,
        a8: () => M,
        aU: () => R,
        gr: () => v,
        hC: () => P,
        iI: () => B,
        qN: () => D,
        qT: () => g,
        sZ: () => E,
        sk: () => O,
        w8: () => I,
        zq: () => w,
        zy: () => F,
      });
      var n = i(41735),
        a = i.n(n),
        r = i(90626),
        s = i(37085),
        o = i(44165),
        c = i(68797),
        l = i(6144),
        u = i(73745),
        p = i(41338),
        d = i(78327),
        m = i(62490),
        _ = i(14771);
      const g = 95,
        E = 10;
      class f {
        m_mapPackageDiscountsById = new Map();
        m_mapDiscountCallbackList = new Map();
        m_mapPackageDiscountsByPackageId = new Map();
        m_mapPackageCallbackList = new Map();
        m_mapPackageDiscountsByDiscountEventId = new Map();
        m_mapDiscountEventCallbackList = new Map();
        m_allDiscountCallbackList = new l.lu();
        m_mapMaxDiscountPercentageByPackageId = new Map();
        m_mapExistingPackageRequests = new Map();
        static s_Singleton;
        static Get() {
          return (
            f.s_Singleton || ((f.s_Singleton = new f()), f.s_Singleton.Init()),
            f.s_Singleton
          );
        }
        constructor() {
          "dev" == d.TS.WEB_UNIVERSE && (window.g_PackageDiscountStore = this);
        }
        Init() {
          const t = (0, d.Tc)("package_discounts", "application_config");
          ("dev" != d.TS.WEB_UNIVERSE && "beta" != d.TS.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackageDiscountStore loading discount payload: ",
              t,
            ),
            this.BIsDiscountPayloadValid(t)
              ? this.InternalAddDiscounts(t)
              : "dev" == d.TS.WEB_UNIVERSE &&
                t &&
                console.error("Invalid discount payload");
          const e = (0, d.Tc)("max_discount_percentages", "application_config");
          if (
            (("dev" != d.TS.WEB_UNIVERSE && "beta" != d.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountGridStore loading max-discount-% payload: ",
                e,
              ),
            this.BIsMaxDiscountPayloadValid(e))
          )
            for (let t in e)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(t), e[t]);
          else
            "dev" == d.TS.WEB_UNIVERSE &&
              e &&
              console.error("Invalid max-discount-% payload");
        }
        InternalAddDiscounts(t, e) {
          const i = new Set(),
            n = new Set();
          for (const e of t)
            e.discountEventID?.length || (e.discountEventID = b(e)),
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
              n.add(e.discountEventID);
          for (const t of e ?? [])
            this.m_mapPackageDiscountsByPackageId.has(t) ||
              this.m_mapPackageDiscountsByPackageId.set(t, new Map()),
              i.add(t);
          i.forEach((t) =>
            this.GetCallbackListForPackage(t).Dispatch(
              this.GetAllDiscountsForPackage(t),
            ),
          ),
            n.forEach((t) =>
              this.GetCallbackListForDiscountEvent(t).Dispatch(
                this.GetAllDiscountsForDiscountEvent(t),
              ),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        InternalDeleteDiscount(t, e, i) {
          this.m_mapPackageDiscountsById.delete(t),
            this.m_mapPackageDiscountsByPackageId.get(e)?.delete(t),
            this.m_mapPackageDiscountsByDiscountEventId.get(i)?.delete(t),
            this.GetCallbackListForDiscount(t).Dispatch(null),
            this.GetCallbackListForPackage(e).Dispatch(
              this.GetAllDiscountsForPackage(e),
            ),
            this.GetCallbackListForDiscountEvent(i).Dispatch(
              this.GetAllDiscountsForDiscountEvent(i),
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
        async LoadPackageDiscounts(t, e, i = 0) {
          const n = m.Ew(t).sort().join(",");
          return (
            this.m_mapExistingPackageRequests.has(n) ||
              this.m_mapExistingPackageRequests.set(
                n,
                this.InternalLoadPackageDiscounts(t, e, i),
              ),
            this.m_mapExistingPackageRequests.get(n)
          );
        }
        async InternalLoadPackageDiscounts(t, e, i = 0) {
          const n = new Set();
          for (const e of t)
            this.m_mapPackageDiscountsByPackageId.has(e) || 0 == e || n.add(e);
          const a = Array.from(n).sort();
          if (0 == a.length) return s.d.k_EResultOK;
          let r = null;
          const o = new Promise((t, e) => {
              r = t;
            }),
            l = (0, d.Tc)("publisherid", "application_config");
          let u = null,
            p = null;
          try {
            const t = [],
              r = new Array();
            for (; a.length > 0; ) {
              const n = a.splice(0, 50);
              r.push(n), t.push(this.LoadPackageDiscountsFromPHP(l, n, e, i));
            }
            const o = await Promise.all(t),
              c = [];
            for (const t of o) {
              if (
                ((p = r.unshift()),
                200 != t?.status ||
                  t.data?.success != s.d.k_EResultOK ||
                  !t.data.discounts)
              ) {
                u = { response: t };
                break;
              }
              t.data.discounts.forEach((t) => c.push(t));
            }
            null == u && this.InternalAddDiscounts(c, Array.from(n));
          } catch (t) {
            u = t;
          }
          if (null == u) r(s.d.k_EResultOK);
          else {
            const t = (0, c.H)(u);
            console.error(
              "Could not load Discounts for packages",
              p,
              t.strErrorMsg,
              t,
            ),
              r(u?.response?.data?.success ?? s.d.k_EResultFail);
          }
          return o;
        }
        async LoadPackageDiscountsFromPHP(t, e, i, n = 0) {
          const r = { packageids: e.join(","), origin: self.origin },
            o =
              d.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetpackagediscounts/" +
              t;
          let c,
            l = 3;
          for (; l-- > 0; )
            try {
              if (
                ((c = await a().get(o, {
                  params: r,
                  withCredentials: !0,
                  cancelToken: i?.token,
                  timeout: n,
                })),
                200 == c?.status &&
                  c.data?.success == s.d.k_EResultOK &&
                  c.data.discounts)
              )
                return c;
            } catch (t) {
              if (0 == l) throw t;
              console.error(t);
            }
          return c;
        }
        async SaveDiscountToServer(t, e) {
          const i =
              d.TS.PARTNER_BASE_URL +
              "packages/createoreditdiscount/" +
              t.packageID,
            n = new FormData();
          n.append("sessionid", d.TS.SESSIONID),
            t.nDiscountID && n.append("id", t.nDiscountID.toString()),
            n.append("name", t.strDiscountName),
            n.append("description", t.strDiscountDescription),
            t.discountEventID &&
              !S(t.discountEventID) &&
              n.append("type", t.discountEventID),
            n.append("percent", t.nDiscountPct.toString()),
            n.append("start_date", new Date(1e3 * t.rtStartDate).toISOString()),
            n.append("end_date", new Date(1e3 * t.rtEndDate).toISOString());
          let r = null;
          try {
            const o = await a().post(i, n, {
              withCredentials: !0,
              cancelToken: e?.token,
            });
            if (
              ((o.data.msg = o.data.msg ?? o.data.message),
              200 == o?.status &&
                o.data?.success == s.d.k_EResultOK &&
                o.data.discountid)
            )
              return (
                (t.bChangedLocally = !1),
                (t.nDiscountID = o.data.discountid),
                (t.nDiscountPct = o.data.percentage),
                this.InternalAddDiscounts([t]),
                o.data
              );
            r = { response: o };
          } catch (t) {
            r = t;
          }
          const o = (0, c.H)(r);
          return (
            console.error(
              "CPackageDiscountStore.SaveDiscountToServer: failed",
              o.strErrorMsg,
              o,
            ),
            r?.response?.data ?? { success: s.d.k_EResultFail }
          );
        }
        async DeleteDiscountOnServer(t, e, i, n) {
          const r =
              d.TS.PARTNER_BASE_URL + "packages/removepackagediscount/" + e,
            o = new FormData();
          o.append("sessionid", d.TS.SESSIONID),
            o.append("discountid", t.toString());
          let l = null;
          try {
            const c = await a().post(r, o, {
              withCredentials: !0,
              cancelToken: n?.token,
            });
            if (200 == c?.status && c.data?.success == s.d.k_EResultOK)
              return this.InternalDeleteDiscount(t, e, i), c.data;
            l = { response: c };
          } catch (t) {
            l = t;
          }
          const u = (0, c.H)(l);
          return (
            console.error(
              "CPackageDiscountStore.DeleteDiscountOnServer: failed",
              u.strErrorMsg,
              u,
            ),
            l?.response?.data ?? { success: s.d.k_EResultFail }
          );
        }
        GetCallbackListForDiscount(t) {
          return (
            this.m_mapDiscountCallbackList.has(t) ||
              this.m_mapDiscountCallbackList.set(t, new l.lu()),
            this.m_mapDiscountCallbackList.get(t)
          );
        }
        GetCallbackListForPackage(t) {
          return (
            this.m_mapPackageCallbackList.has(t) ||
              this.m_mapPackageCallbackList.set(t, new l.lu()),
            this.m_mapPackageCallbackList.get(t)
          );
        }
        GetCallbackListForDiscountEvent(t) {
          return (
            this.m_mapDiscountEventCallbackList.has(t) ||
              this.m_mapDiscountEventCallbackList.set(t, new l.lu()),
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
          return this.m_mapPackageDiscountsByPackageId.has(t)
            ? Array.from(
                this.m_mapPackageDiscountsByPackageId.get(t)?.values() ?? [],
              )
            : null;
        }
        GetAllDiscountsForAllPackages() {
          return Array.from(this.m_mapPackageDiscountsById.values());
        }
        GetAllDiscountsForDiscountEvent(t) {
          return Array.from(
            this.m_mapPackageDiscountsByDiscountEventId.get(t)?.values() ?? [],
          );
        }
        GetMaxDiscountPercentage(t) {
          const e = g;
          return this.m_mapMaxDiscountPercentageByPackageId.get(t) ?? e;
        }
        GetMaxDiscountPercentageForGroup(t) {
          const e = t.map((t) => this.GetMaxDiscountPercentage(t));
          return Math.min(...e);
        }
      }
      function b(t) {
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, p.Yz)(t.strDiscountName)}`;
      }
      function S(t) {
        return t.startsWith("custom-event-");
      }
      function h(t) {
        return f.Get().GetDiscountByID(t);
      }
      function k(t) {
        return f.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function D(t) {
        return f.Get().GetAllDiscountsForPackage(t);
      }
      function B(t) {
        return f.Get().GetCallbackListForPackage(t);
      }
      function y() {
        return f.Get().GetAllDiscountsForAllPackages();
      }
      function I() {
        return f.Get().GetGlobalCallbackList();
      }
      function w() {
        return r.useCallback(
          (t, e, i) => f.Get().LoadPackageDiscounts(t, e, i),
          [],
        );
      }
      function v() {
        const t = (t) => f.Get().SaveDiscountToServer(t),
          e = (t, e, i) => f.Get().DeleteDiscountOnServer(t, e, i);
        return r.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          [],
        );
      }
      function M(t) {
        return new Map(
          Array.from(t.map((t) => [t, f.Get().GetDiscountByID(t)])),
        );
      }
      function P(t) {
        const e = (0, o.f1)(),
          [i, n] = r.useState(f.Get().GetAllDiscountsForPackage(t));
        return (
          (0, u.hL)(f.Get().GetCallbackListForPackage(t), n),
          r.useMemo(() => {
            let t = null;
            if (null == i) return { deepestDiscount: t, bLoading: !0 };
            if (i?.length > 0)
              for (const n of i)
                n.rtEndDate > e ||
                  n.nDiscountPct <= 0 ||
                  ((null == t ||
                    n.nDiscountPct > t.nDiscountPct ||
                    (n.nDiscountPct == t.nDiscountPct &&
                      n.rtEndDate > t.rtEndDate)) &&
                    (t = n));
            return { deepestDiscount: t, bLoading: !1 };
          }, [t, e, i])
        );
      }
      function R(t) {
        const e = (0, o.f1)();
        if (!t) return null;
        let i = null;
        return (
          t.forEach((t) => {
            const n = f.Get().GetAllDiscountsForPackage(t);
            if (n?.length > 0)
              for (const t of n)
                t.rtEndDate > e ||
                  t.nDiscountPct <= 0 ||
                  ((null == i ||
                    t.nDiscountPct > i.nDiscountPct ||
                    (t.nDiscountPct == i.nDiscountPct &&
                      t.rtEndDate > i.rtEndDate)) &&
                    (i = t));
          }),
          i
        );
      }
      function A(t, e, i) {
        const [n, a] = (0, r.useState)(),
          [s, o] = (0, r.useState)([]);
        return (
          (0, r.useEffect)(() => {
            if (e < i && t?.length > 0) {
              let n = new Array(),
                r = new Array(),
                s = new Array();
              for (let t = e; t < i; t += _.Kp.PerDay) n.push(t), r.push(!1);
              t.forEach((t) => {
                const a = f.Get().GetAllDiscountsForPackage(t);
                if (a?.length > 0)
                  for (const t of a)
                    t.rtStartDate > i ||
                      t.rtEndDate < e ||
                      (s.push(t),
                      n.forEach((e, i) => {
                        e < t.rtEndDate &&
                          t.rtStartDate < e + _.Kp.PerDay &&
                          (r[i] = !0);
                      }));
              }),
                o(s),
                a(r.filter((t) => !0 === t).length);
            } else a(0);
          }, [t, e, i]),
          { nDaysInDiscount: n, rgDiscountWithOverlap: s }
        );
      }
      function C(t) {
        const e = (0, o.f1)(),
          [i, n] = r.useState(f.Get().GetAllDiscountsForAllPackages());
        return (
          (0, u.hL)(f.Get().GetGlobalCallbackList(), n),
          r.useMemo(() => {
            let n = null;
            if (null == i) return { mostRecentDiscount: n, bLoading: !0 };
            for (const i of t) {
              const t = f.Get().GetAllDiscountsForPackage(i) ?? [];
              for (const i of t)
                i.rtStartDate &&
                  i.rtEndDate &&
                  i.nDiscountPct &&
                  i.rtStartDate < e &&
                  (!n || n.rtEndDate < i.rtEndDate) &&
                  (n = i);
            }
            return { mostRecentDiscount: n, bLoading: !1 };
          }, [e, t, i])
        );
      }
      function O(t) {
        const [e, i] = r.useState(f.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, u.hL)(f.Get().GetCallbackListForDiscountEvent(t), i), e;
      }
      function T(t) {
        const [e, i] = r.useState(f.Get().GetAllDiscountsForPackage(t));
        (0, u.hL)(f.Get().GetCallbackListForPackage(t), i);
        const [n, s] = r.useState(!1),
          o = w();
        return (
          r.useEffect(() => {
            if (!e && t) {
              if (!n && o) {
                const e = a().CancelToken.source();
                o([t]).then(() => {
                  e.token.reason || s(!0);
                });
              }
            } else n || s(!0);
          }, [e, n, s, t, o]),
          e
        );
      }
      function G(t) {
        return f.Get().GetMaxDiscountPercentage(t);
      }
      function z(t) {
        return t.some(
          (t) => t.nDiscountPct > f.Get().GetMaxDiscountPercentage(t.packageID),
        );
      }
      function F(t) {
        return f.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    87924: (t, e, i) => {
      "use strict";
      i.d(e, {
        C5: () => x,
        Gq: () => N,
        QD: () => O,
        T1: () => k,
        WV: () => R,
        ZM: () => A,
        _9: () => q,
        bA: () => P,
        ew: () => T,
        gr: () => L,
        i3: () => G,
        l4: () => C,
        nu: () => D,
        ve: () => F,
        wF: () => U,
        wT: () => n,
        wk: () => W,
        zP: () => z,
      });
      var n,
        a = i(30168),
        r = i(258),
        s = i(6319),
        o = i(48996),
        c = i(96745),
        l = i(7247),
        u = i(70986),
        p = i(90626),
        d = i(44165),
        m = i(82097),
        _ = i(6144),
        g = i(73745),
        E = i(41338),
        f = i(14771),
        b = i(78327),
        S = i(43552);
      function h(t, e) {
        return (
          (!e && 0 == (t?.nDiscountPct ?? 0)) ||
          (!!e && e.nDiscountPct == t?.nDiscountPct)
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
      })(n || (n = {}));
      const k = 30,
        D = k * f.Kp.PerDay - 1.5 * f.Kp.PerHour,
        B = 10 * f.Kp.PerMinute;
      class y {
        m_mapPackageStateForDiscountEvents = new Map();
        m_mapLocalPackageDiscountOverrides = new Map();
        m_mapDiscountPackageCallbackList = new Map();
        m_mapDiscountGridCellCallbackList = new Map();
        m_mapDiscountEventColumnCallbackList = new Map();
        m_localPackageDiscountOverrideCallbackList = new _.lu();
        static s_Singleton;
        static s_initializationCallbackList = new _.lu();
        static Get() {
          return (
            y.s_Singleton || ((y.s_Singleton = new y()), y.s_Singleton.Init()),
            y.s_Singleton
          );
        }
        static IsInitialized() {
          return !!y.s_Singleton;
        }
        constructor() {
          "dev" == b.TS.WEB_UNIVERSE && (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const t of (0, c.OM)())
            y.Get().ComputePackageState(t),
              (0, o.iI)(t).Register(() => {
                y.Get().ComputePackageState(t);
              });
          (0, S.ou)().Register(() => {
            for (const t of (0, c.OM)()) y.Get().ComputePackageState(t, !0);
          }),
            y.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(t, e, i) {
          const a = y.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e);
          if (a?.eState != n.k_EOkToDiscount)
            return (
              console.error(
                "Cannot change discount in current state:",
                a.eState,
              ),
              null
            );
          const r = a.discount,
            s = (0, S.Z6)(e),
            o = {
              nDiscountID: r?.nDiscountID,
              packageID: t,
              nDiscountPct: i,
              strDiscountName: s.name,
              strDiscountDescription: s.description,
              rtStartDate: s.start_date,
              rtEndDate: s.end_date,
              discountEventID: s.id,
              bChangedLocally: !0,
            };
          return h(o, r)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(t) ||
                this.m_mapLocalPackageDiscountOverrides.set(t, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(t).set(e, o),
              this.ComputePackageState(t),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              ),
              o);
        }
        GetHighestPackageDiscount(t) {
          let e = this.m_mapPackageStateForDiscountEvents.get(t);
          if (!e) return 0;
          let i = 0;
          return (
            e.forEach((t, e) => {
              t.eState == n.k_EOkToDiscount &&
                (i = Math.max(i, t.discount?.nDiscountPct || 0));
            }),
            i
          );
        }
        GetLocalPackageDiscountOverrides() {
          const t = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((e) =>
              e.forEach((e) => {
                h(e, e.nDiscountID && (0, o.Lj)(e.nDiscountID)) || t.push(e);
              }),
            ),
            t.sort(M),
            t
          );
        }
        DiscardAllLocalPackageDiscountOverrides(t) {
          this.m_mapLocalPackageDiscountOverrides.clear();
          for (const e of t) this.ComputePackageState(e);
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
        }
        DiscardLocalPackageDiscountOverride(t, e) {
          this.m_mapLocalPackageDiscountOverrides.get(t)?.delete(e),
            this.ComputePackageState(t),
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
              this.GetLocalPackageDiscountOverrides(),
            );
        }
        OptInRegistrationUpdatedForApp(t, e) {
          const i = Array.from(this.m_mapPackageStateForDiscountEvents.values())
            .map((t) => t.get(e))
            .filter((e) => e?.nBaseAppID == t)
            .map((t) => t.packageID);
          i?.forEach((t) => this.ComputePackageState(t));
        }
        GetPackageDiscountsIncludingOverrides(t) {
          const e = (0, d.sB)() - D,
            i = (0, o.qN)(t);
          if (!i) return null;
          const n = new Map(
            i.filter((t) => t.rtEndDate > e).map((t) => [t.discountEventID, t]),
          );
          return (
            this.m_mapLocalPackageDiscountOverrides.get(t)?.forEach((t, e) => {
              h(t, n.get(e)) || n.set(e, t);
            }),
            n
          );
        }
        GetDiscountGridCellCallbackList(t, e) {
          if (!t || !e) return null;
          this.m_mapDiscountGridCellCallbackList.has(t) ||
            this.m_mapDiscountGridCellCallbackList.set(t, new Map());
          const i = this.m_mapDiscountGridCellCallbackList.get(t);
          return i.has(e) || i.set(e, new _.lu()), i.get(e);
        }
        GetDiscountPackageCallbackList(t) {
          if (!t) return null;
          let e = this.m_mapDiscountPackageCallbackList.get(t);
          return (
            e ||
              ((e = new _.lu()),
              this.m_mapDiscountPackageCallbackList.set(t, e)),
            e
          );
        }
        GetDiscountEventColumnCallbackList(t) {
          return t
            ? (this.m_mapDiscountEventColumnCallbackList.has(t) ||
                this.m_mapDiscountEventColumnCallbackList.set(t, new _.lu()),
              this.m_mapDiscountEventColumnCallbackList.get(t))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(t) {
          const e = [];
          return (
            y
              .Get()
              .m_mapPackageStateForDiscountEvents.forEach((i, n) =>
                e.push(i.get(t)),
              ),
            e
          );
        }
        ComputePackageState(t, e) {
          const i = m.A.Get().GetPackage(t);
          if (!i) return;
          const a = (0, S.E1)(),
            o = (0, l.i$)(i),
            c = o.nBaseAppID;
          let u = c && s.uL.Get().GetOptInRegistrationAndEligibilityForApp(c);
          c ||
            u ||
            (u = s.uL
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                i.GetIncludedAppIDs(),
              ));
          const p = this.GetPackageDiscountsIncludingOverrides(t),
            d = !p,
            _ = d
              ? null
              : Array.from(p.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const g = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const s of a) {
            if (e && g.has(s.id)) continue;
            const a = { packageID: t, discountEventID: s.id, nBaseAppID: c };
            if (
              ((a.discount = p?.get(s.id)),
              (a.bChangedLocally = !!a.discount?.bChangedLocally),
              d)
            )
              a.eState = n.k_ELoading;
            else if (a.discount?.nDiscountPct > 0) {
              a.eState = n.k_EOkToDiscount;
              const t = s.opt_in_name && u?.get(s.opt_in_name);
              t && (a.optInReg = t);
            } else {
              if (((a.eState = n.k_EOkToDiscount), v(s, i)))
                a.eState = n.k_ENoAppInRequiredList;
              else if (s.opt_in_name) {
                const { ePackageDiscountState: t, optInRegistration: e } = w(
                  s.opt_in_name,
                  u,
                  i,
                  o,
                  s,
                );
                (a.eState = t), (a.optInReg = e);
              }
              if (
                a.eState != n.k_ENoAppInRequiredList &&
                a.eState != n.k_EOptInRestricted &&
                a.eState != n.k_EOptInNoBaseAppToRegister
              ) {
                const e = I(t, s, _);
                e.ePackageDiscountState != n.k_EOkToDiscount &&
                  ((a.eState = e.ePackageDiscountState),
                  (a.rgConflictDetails = e.rgConflictingDiscounts.map(
                    (t) =>
                      (0, r.E7)(t.discountEventID)?.name ?? t.strDiscountName,
                  )));
              }
            }
            (E = a),
              (f = g.get(s.id)),
              (!!E == !!f &&
                E?.packageID == f?.packageID &&
                E?.discountEventID == f?.discountEventID &&
                E?.eState == f?.eState &&
                E?.rgConflictDetails?.length == f?.rgConflictDetails?.length &&
                E?.optInReg == f?.optInReg &&
                h(E?.discount, f?.discount) &&
                E?.nBaseAppID == f?.nBaseAppID &&
                E?.bChangedLocally == f?.bChangedLocally) ||
                (g.set(s.id, a),
                this.GetDiscountPackageCallbackList(t).Dispatch(),
                this.GetDiscountGridCellCallbackList(t, s.id).Dispatch(a),
                this.GetDiscountEventColumnCallbackList(s.id).Dispatch(
                  this.GetAllPackageStatesForDiscountEvent(s.id),
                ));
          }
          var E, f;
        }
        GetAvailableDiscountEventsInRange(t, e, i) {
          const a = this.m_mapPackageStateForDiscountEvents.get(t),
            r = new Set([
              n.k_EOkToDiscount,
              n.k_EOptInMultiAppPackageRegisterSomeGame,
              n.k_ENeedsOptIn,
              n.k_EOptInOptedOut,
            ]);
          return (0, S.E1)()
            .filter(
              (t) =>
                e <= t.start_date &&
                t.end_date <= i &&
                r.has(a.get(t.id).eState),
            )
            .map((t) => t.id);
        }
        GetFurthestCooldownFromPastDiscounts(t) {
          const e = (0, d.sB)();
          let i = e;
          return (
            t
              .filter((t) => t.rtStartDate < e)
              .filter((t) => {
                const e = (0, r.E7)(t.discountEventID);
                return (
                  e?.collision_type != a.Zs.k_EDiscountCollisionType_MajorSales
                );
              })
              .forEach((t) => {
                t.rtEndDate + D < i && (i = t.rtEndDate + D);
              }),
            i
          );
        }
        GetFutureDiscountRanges(t) {
          const e = m.A.Get().GetPackage(t),
            i = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !i) return [];
          const s = Array.from(i.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate,
            ),
            o = (0, d.sB)(),
            c = Math.max(
              o,
              e.GetReleaseDateRTime() + D,
              (0, S.zL)(t) + D,
              this.GetFurthestCooldownFromPastDiscounts(s),
            ),
            l = [],
            p = new Set();
          let _ = c;
          for (let e = 0; e < s.length; e++) {
            const i = s[e];
            if (0 == i.nDiscountPct) continue;
            if (i.rtStartDate < c) continue;
            const n = (0, r.E7)(i.discountEventID);
            let o = i.rtStartDate - D;
            const d =
              n?.collision_type == a.Zs.k_EDiscountCollisionType_MajorSales;
            if (d && ((o = i.rtStartDate + B), e + 1 < s.length)) {
              const t = s[e + 1],
                i = (0, S.Z6)(t.discountEventID);
              i?.collision_type != a.Zs.k_EDiscountCollisionType_MajorSales &&
                (o = Math.min(o, t.rtStartDate - D));
            }
            if (_ + f.Kp.PerDay < o) {
              const e = {
                bIsAvailable: !0,
                rtStartDate: _,
                rtEndDate: o,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  t,
                  _,
                  o,
                ),
              };
              l.push(e), e.rgDiscountEventIDs.forEach((t) => p.add(t));
            }
            const m = {
              bIsAvailable: !1,
              rtStartDate: i.rtStartDate,
              rtEndDate: i.rtEndDate,
              discount: i,
              rgDiscountEventIDs: [i.discountEventID],
            };
            if (
              (l.push(m),
              p.add(i.discountEventID),
              (_ = i.rtEndDate + D),
              d && ((_ = i.rtEndDate - B), e - 1 >= 0))
            ) {
              const t = s[e - 1],
                i = (0, S.Z6)(t.discountEventID);
              i?.collision_type != a.Zs.k_EDiscountCollisionType_MajorSales &&
                (_ = Math.max(_, t.rtEndDate + D));
            }
            const g = (0, u.M)(_);
            g - _ <= 2 * f.Kp.PerHour && (_ = g);
          }
          const g = (0, u.M)(o + f.Kp.PerYear / 2);
          if (_ + f.Kp.PerDay < g) {
            const e = {
              bIsAvailable: !0,
              rtStartDate: _,
              rtEndDate: g,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                t,
                _,
                g,
              ),
            };
            l.push(e), e.rgDiscountEventIDs.forEach((t) => p.add(t));
          }
          const E = (0, S.E1)().filter(
            (e) =>
              e.collision_type == a.Zs.k_EDiscountCollisionType_MajorSales &&
              !p.has(e.id) &&
              this.m_mapPackageStateForDiscountEvents.get(t).get(e.id).eState ==
                n.k_EOkToDiscount,
          );
          for (const t of E)
            for (let e = 0; e < l.length; e++)
              if (
                l[e].rtStartDate <= t.start_date &&
                (e == l.length - 1 || t.start_date < l[e + 1].rtStartDate)
              ) {
                const i = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: t.start_date,
                  rtEndDate: t.end_date,
                  rgDiscountEventIDs: [t.id],
                };
                l.splice(e + 1, 0, i);
                break;
              }
          return l;
        }
      }
      function I(t, e, i) {
        let s = n.k_EOkToDiscount;
        const o = [];
        let c = !1;
        const l = m.A.Get().GetPackage(t);
        if (l?.GetReleaseDateRTime() > e.start_date - D)
          return (
            (s = n.k_EJustReleased),
            {
              ePackageDiscountState: s,
              rgConflictingDiscounts: o,
              bChangedLocally: c,
            }
          );
        if ((0, S.zL)(t) > e.start_date - D)
          return (
            (s = n.k_EPriceIncreased),
            {
              ePackageDiscountState: s,
              rgConflictingDiscounts: o,
              bChangedLocally: c,
            }
          );
        for (const t of i) {
          if (e.id == t.discountEventID) continue;
          const i = (0, r.E7)(t.discountEventID),
            l =
              e.collision_type == a.Zs.k_EDiscountCollisionType_MajorSales ||
              i?.collision_type == a.Zs.k_EDiscountCollisionType_MajorSales,
            u = l ? e.start_date + B : e.start_date - D,
            p = l ? e.end_date - B : e.end_date + D;
          if (t.rtEndDate > u && p > t.rtStartDate) {
            if (((c = c || t.bChangedLocally), 0 == t.nDiscountPct)) continue;
            o.push(t), (s = l ? n.k_EOverlapsExisting : n.k_ECooldownWindow);
          }
        }
        return {
          ePackageDiscountState: s,
          rgConflictingDiscounts: o,
          bChangedLocally: c,
        };
      }
      function w(t, e, i, a, r) {
        let o,
          c = n.k_EOptInNoBaseAppToRegister;
        if (e)
          (o = e.get(t)),
            !o || o.restricted || o.pruned
              ? ((c = n.k_EOptInRestricted), (o = { restricted: !0 }))
              : (c = o.opt_in
                  ? n.k_EOkToDiscount
                  : o.invited || !o.time_opted_in
                    ? n.k_ENeedsOptIn
                    : n.k_EOptInOptedOut);
        else if (!a.nBaseAppID) {
          const t = i
            .GetIncludedAppIDs()
            .map((t) =>
              s.uL
                .Get()
                .GetOptInRegistrationAndEligibilityForApp(t)
                ?.get(r.opt_in_name),
            )
            .filter(Boolean);
          t.some((t) => t.opt_in)
            ? (c = n.k_EOkToDiscount)
            : t.some((t) => !t.restricted && !t.pruned) &&
              (c = n.k_EOptInMultiAppPackageRegisterSomeGame);
        }
        return { ePackageDiscountState: c, optInRegistration: o };
      }
      function v(t, e) {
        if (t.appids?.length > 0) {
          if (e?.GetIncludedAppIDs()?.length) {
            const i = new Set(t.appids);
            for (const t of e.GetIncludedAppIDs()) {
              if (i.has(t)) return !1;
              const e = m.A.Get().GetApp(t)?.GetParentAppID();
              if (e && i.has(e)) return !1;
            }
          }
          return !0;
        }
        return !1;
      }
      function M(t, e) {
        if (t.packageID != e.packageID) {
          const i = m.A.Get().GetPackage(t.packageID)?.GetName(),
            n = m.A.Get().GetPackage(e.packageID)?.GetName();
          return (0, E.kd)(i, n);
        }
        {
          const i = 0 == t.nDiscountPct;
          return i != (0 == e.nDiscountPct)
            ? i
              ? -1
              : 1
            : t.rtStartDate - e.rtStartDate;
        }
      }
      function P() {
        return p.useCallback(() => {
          y.Get();
        }, []);
      }
      function R() {
        const [t, e] = p.useState(y.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, g.hL)(y.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function A() {
        return p.useCallback(
          () => y.Get().GetLocalPackageDiscountOverrides()?.length > 0,
          [],
        );
      }
      function C() {
        return p.useCallback(
          (t) => y.Get().DiscardAllLocalPackageDiscountOverrides(t),
          [],
        );
      }
      function O() {
        return p.useCallback(
          (t, e) => y.Get().OptInRegistrationUpdatedForApp(t, e),
          [],
        );
      }
      function T() {
        return p.useCallback(
          (t, e) => y.Get().DiscardLocalPackageDiscountOverride(t, e),
          [],
        );
      }
      function G(t, e) {
        const i = y.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e);
        return i?.eState == n.k_EOkToDiscount
          ? (i?.discount?.nDiscountPct ?? 0)
          : null;
      }
      function z(t, e) {
        const [i, n] = p.useState(() =>
          y.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e),
        );
        (0, g.hL)(y.Get().GetDiscountGridCellCallbackList(t, e), n);
        return {
          packageState: i,
          fnSetDiscountPct: p.useCallback(
            (i) => {
              y.Get().OverridePackageDiscountPct(t, e, i);
            },
            [t, e],
          ),
        };
      }
      function F() {
        return p.useCallback((t, e, i) => {
          const n = [];
          for (const a of i) {
            const i = y.Get().OverridePackageDiscountPct(a, e, t);
            i && n.push(i);
          }
          return n;
        }, []);
      }
      function L(t) {
        const e = U(t);
        return p.useMemo(
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
        const [e, i] = p.useState(() => j(t)),
          n = p.useCallback(() => {
            i(j(t));
          }, [t]);
        return (
          p.useEffect(n, [t, n]),
          (0, g.hL)(y.Get().GetDiscountEventColumnCallbackList(t), n),
          e
        );
      }
      function j(t) {
        const e = y.Get().GetAllPackageStatesForDiscountEvent(t),
          i = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const t of e)
          switch (t?.eState) {
            case n.k_ELoading:
              break;
            case n.k_EOkToDiscount:
              (t.discount?.nDiscountPct ?? 0) > 0
                ? i.alreadySet.add(t.packageID)
                : i.available.add(t.packageID);
              break;
            case n.k_EJustReleased:
            case n.k_EPriceIncreased:
            case n.k_ECooldownWindow:
            case n.k_EOverlapsExisting:
              i.conflicts.add(t.packageID);
              break;
            case n.k_ENeedsOptIn:
            case n.k_EOptInOptedOut:
              i.needRegistration.add(t.packageID);
              break;
            case n.k_EOptInRestricted:
            case n.k_EOptInNoBaseAppToRegister:
            case n.k_ENoAppInRequiredList:
              i.ineligibile.add(t.packageID);
          }
        return i;
      }
      function q(t) {
        return (
          !!(0, o.$U)(t).some((t) => t.nDiscountPct > 0) ||
          !(
            !y.IsInitialized() ||
            !y
              .Get()
              .GetAllPackageStatesForDiscountEvent(t)
              .some((t) => (t.discount?.nDiscountPct ?? 0) > 0)
          )
        );
      }
      function W(t, e = !0) {
        if ((0, o.Ko)(t)) return !0;
        if (!e && t.startsWith("weeklongdeal_")) return !1;
        const i = (0, r.E7)(t);
        if (!i?.opt_in_name) return !0;
        const n = s.uL.Get().GetAllOptInRegistrations(i.opt_in_name);
        return !!n?.length && n.some((t) => !t.restricted && !t.pruned);
      }
      function N(t) {
        const e = (function () {
            const [t, e] = p.useState(y.IsInitialized());
            return (0, g.hL)(y.s_initializationCallbackList, e), t;
          })(),
          [i, n] = p.useState(e ? y.Get().GetFutureDiscountRanges(t) : []),
          a = p.useCallback(
            () => n(e ? y.Get().GetFutureDiscountRanges(t) : []),
            [t, e],
          );
        return (
          (0, g.hL)(
            e && y.Get().GetLocalPackageDiscountOverrideCallbackList(),
            a,
          ),
          (0, g.hL)(e && (0, o.iI)(t), a),
          p.useEffect(a, [t, e, a]),
          i
        );
      }
      function x(t) {
        let [e, i] = p.useState(() => y.Get().GetHighestPackageDiscount(t)),
          n = p.useCallback(() => {
            i(y.Get().GetHighestPackageDiscount(t));
          }, [t, i]);
        return (0, g.hL)(y.Get().GetDiscountPackageCallbackList(t), n), e;
      }
    },
    43552: (t, e, i) => {
      "use strict";
      i.d(e, {
        Ad: () => h,
        E1: () => g,
        Fs: () => D,
        Ix: () => b,
        Jn: () => B,
        Lx: () => n,
        Z6: () => E,
        dp: () => S,
        ou: () => f,
        u7: () => k,
        zL: () => _,
      });
      var n,
        a = i(90626),
        r = i(44165),
        s = i(6144),
        o = i(73745),
        c = i(78327),
        l = i(258),
        u = i(48996),
        p = i(87924);
      !(function (t) {
        (t.k_OptionDeepest = "deepest-past"),
          (t.k_OptionMostRecent = "most-recent"),
          (t.k_OptionNextAvailable = "next-available");
      })(n || (n = {}));
      const d = "related-discount-view";
      class m {
        m_rgDiscountEvents;
        m_mapDiscountEventsByID = new Map();
        m_discountEventsCallbackList = new s.lu();
        m_mapLastTimeRaisedPrices = new Map();
        m_strSelectedDiscountEventID = null;
        m_bIncludeWeeklongEvents = !1;
        m_bIncludeCustomEvents = !0;
        m_bIncludeIneligibleEvents = !1;
        m_bIncludeConflictsInSingleEventView = !0;
        m_bEditingDailyDealDiscount = !1;
        m_eRelatedDiscountView = n.k_OptionDeepest;
        m_RelatedDiscountViewCallbackList = new s.lu();
        m_gridEventSelectionParametersCallbackList = new s.lu();
        m_setVisibleDiscountEventIDs = new Set();
        m_visibleDiscountEventIDsCallbackList = new s.lu();
        static s_Singleton;
        static Get() {
          return (
            m.s_Singleton || ((m.s_Singleton = new m()), m.s_Singleton.Init()),
            m.s_Singleton
          );
        }
        constructor() {
          "dev" == c.TS.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        Init() {
          const t = (0, c.Tc)("price_increase_times", "application_config");
          if (
            (("dev" != c.TS.WEB_UNIVERSE && "beta" != c.TS.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", t),
            this.BIsPriceIncreasePayloadValid(t))
          )
            for (let e in t)
              this.m_mapLastTimeRaisedPrices.set(Number(e), t[e]);
          else
            "dev" == c.TS.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            window.localStorage.getItem(d) ?? n.k_OptionDeepest),
            this.UpdateDiscountEventsForGrid(),
            (0, l.yB)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, u.w8)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const t = (0, l.tW)(),
            e = (0, u.Mh)(),
            i = new Set(t.map((t) => t.id)),
            n = [],
            a = (0, r.sB)();
          for (const t of e)
            t.rtEndDate > a &&
              (i.has(t.discountEventID) ||
                (n.push({
                  id: t.discountEventID,
                  name: t.strDiscountName,
                  start_date: t.rtStartDate,
                  end_date: t.rtEndDate,
                  description: t.strDiscountDescription,
                }),
                i.add(t.discountEventID)));
          (this.m_rgDiscountEvents &&
            i.size == this.m_rgDiscountEvents.length &&
            !this.m_rgDiscountEvents.some((t) => !i.has(t.id))) ||
            ((this.m_rgDiscountEvents = n.concat(t)),
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
            e && !this.m_bIncludeCustomEvents && (0, u.Ko)(t.id) && (e = !1),
              e &&
                !this.m_bIncludeWeeklongEvents &&
                t.id.startsWith("weeklongdeal_") &&
                !(0, p._9)(t.id) &&
                (e = !1),
              !e ||
                this.m_bIncludeIneligibleEvents ||
                (0, p.wk)(t.id) ||
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
      function _(t) {
        return m.Get().m_mapLastTimeRaisedPrices.get(t) ?? 0;
      }
      function g() {
        return m.Get().m_rgDiscountEvents;
      }
      function E(t) {
        return m.Get().m_mapDiscountEventsByID.get(t);
      }
      function f() {
        return m.Get().m_discountEventsCallbackList;
      }
      function b() {
        const [t, e] = a.useState(m.Get().m_rgDiscountEvents);
        return (0, o.hL)(m.Get().m_discountEventsCallbackList, e), t;
      }
      function S() {
        const [t, e] = a.useState(m.Get().m_setVisibleDiscountEventIDs);
        return (0, o.hL)(m.Get().m_visibleDiscountEventIDsCallbackList, e), t;
      }
      function h(t) {
        const [e, i] = a.useState(m.Get().m_mapDiscountEventsByID.get(t)),
          n = a.useCallback(
            () => i(m.Get().m_mapDiscountEventsByID.get(t)),
            [t],
          );
        return (
          (0, o.hL)(m.Get().m_discountEventsCallbackList, n),
          a.useEffect(n, [t, n]),
          e
        );
      }
      function k(t = !0) {
        const [e, i] = a.useState(m.Get().GetEventSelectionParameters()),
          n = t ? m.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, o.hL)(n, i), e;
      }
      function D() {
        const [t, e] = a.useState(m.Get().m_eRelatedDiscountView);
        (0, o.hL)(m.Get().m_RelatedDiscountViewCallbackList, e);
        return [
          t,
          a.useCallback((t) => {
            (m.Get().m_eRelatedDiscountView = t),
              window.localStorage.setItem(d, t),
              m.Get().m_RelatedDiscountViewCallbackList.Dispatch(t);
          }, []),
        ];
      }
      function B() {
        return a.useCallback(() => {
          m.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    33299: (t, e, i) => {
      "use strict";
      i.d(e, {
        HA: () => b,
        IR: () => A,
        NP: () => M,
        Xr: () => C,
        ZN: () => R,
        mE: () => w,
        rK: () => S,
        sF: () => v,
        uv: () => y,
      });
      var n = i(90626),
        a = i(32754),
        r = i(78327),
        s = i(61859),
        o = i(61010),
        c = i.n(o),
        l = i(75233),
        u = i(69423),
        p = i(64238),
        d = i.n(p),
        m = i(48996),
        _ = i(87924),
        g = i(60395),
        E = i(9554);
      const f = (0, n.createContext)(void 0);
      function b() {
        const t = (0, n.useContext)(f);
        if (!t) throw new Error("Missing GridRowContextProvider");
        return t;
      }
      function S(t) {
        const { children: e, fnBLocalChangesExist: i, fnWarnUser: a } = t,
          r = (0, l.jE)(),
          s = n.useMemo(
            () => ({ client: r, fnBLocalChangesExist: i, fnWarnUser: a }),
            [i, a, r],
          );
        return n.createElement(f.Provider, { value: s }, e);
      }
      function h(t) {
        const { row: e } = t,
          i = e.original.packageID || 0,
          a = (0, _.C5)(i);
        let r = (0, m.$p)(i) < a,
          o = d()(
            c().PackageNameColumn,
            r && c().PackagePricesBelowMin,
            e.original.packageType,
          ),
          l = r
            ? (0, s.we)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, s.we)("#PackageGrid_VisitPackagePricing_Tooltip");
        return n.createElement(B, { className: o, toolTip: l, ...t });
      }
      function k(t) {
        const { row: e } = t,
          i = e.original.packageID || 0,
          a = (0, u.nT)(i);
        let r = d()(
            c().PackageNameColumn,
            a && c().PackagePricesBelowMin,
            e.original.packageType,
          ),
          o = a
            ? (0, s.we)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, s.we)("#PackageGrid_VisitPackagePricing_Tooltip");
        return n.createElement(B, {
          className: r,
          toolTip: o,
          showUnreleased: !0,
          ...t,
        });
      }
      function D(t) {
        const { column: e } = t,
          [i, a] = (0, n.useState)(e.getFilterValue() ?? "");
        return n.createElement(
          "div",
          { className: c().PackageNameHeader },
          (0, s.we)("#PackageGrid_Column_PackageName"),
          n.createElement("input", {
            placeholder: (0, s.we)("#PackageGrid_PackageNameFilterInputPrompt"),
            value: i,
            onChange: (e) => {
              a(e.target.value.toString()),
                (0, n.startTransition)(() =>
                  t.column.setFilterValue(e.target.value.toString()),
                );
            },
          }),
        );
      }
      function B(t) {
        const { fnBLocalChangesExist: e, fnWarnUser: i } = b(),
          { cell: o, row: l, className: u, toolTip: p } = t,
          d = l.original.packageID,
          m =
            o.getValue() ??
            n.createElement(
              "span",
              { className: c().UnknownValue },
              " ",
              (0, s.we)("#PackageGrid_PackageID", d),
            );
        return n.createElement(
          C,
          {
            fnBLocalChangesExist: e,
            fnWarnUser: i,
            href: `${r.TS.PARTNER_BASE_URL}store/packagelanding/${d}`,
            strToolTip: p,
            strClassName: u,
          },
          t.showUnreleased &&
            !("released" in l.original && l.original.released) &&
            n.createElement(
              n.Fragment,
              null,
              n.createElement(
                a.Gq,
                {
                  toolTipContent: (0, s.we)(
                    "#PackageGrid_PackageUnpublishedTooltip",
                  ),
                },
                n.createElement(g.ZyV, { width: "14px", height: "14px" }),
              ),
              "  ",
            ),
          " ",
          m,
        );
      }
      function y() {
        return n.useMemo(
          () => ({
            accessorKey: "packageID",
            header: (0, s.we)("#PackageGrid_Column_PackageID"),
            enableSorting: !1,
            size: 90,
            cell: (t) =>
              n.createElement(B, {
                ...t,
                toolTip: (0, s.we)("#PackageGrid_Column_PackageID_ttip"),
              }),
            meta: { cellClassname: c().PackageID },
          }),
          [],
        );
      }
      function I(t, e, i) {
        let n = /^\d+$/.test(i);
        const a = t.original.packageID;
        return (
          !!(n && a && a.toString().startsWith(i)) ||
          t.getValue(e).toLowerCase().includes(i.toLowerCase())
        );
      }
      function w(t) {
        return n.useMemo(
          () => ({
            accessorKey: "packageName",
            header: D,
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, s.we)(
                "#PackageGrid_Column_PackageName_ttip",
              ),
              cellClassname: c().PackageName,
            },
            filterFn: I,
            cell: t ? h : k,
            size: 300,
          }),
          [t],
        );
      }
      function v() {
        return n.useMemo(() => ({ accessorKey: "appids" }), []);
      }
      function M() {
        return n.useMemo(
          () => ({
            accessorKey: "packageType",
            header: (0, s.we)("#PackageGrid_Column_PackageType"),
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, s.we)(
                "#PackageGrid_Column_PackageType_ttip",
              ),
              cellClassname: c().PackageType,
            },
          }),
          [],
        );
      }
      function P(t) {
        const { row: e } = t,
          { fnBLocalChangesExist: i, fnWarnUser: a } = b(),
          o = e.original.appids,
          c = o?.length ?? 0,
          l = e.original.packageID;
        return n.createElement(
          C,
          {
            fnBLocalChangesExist: i,
            fnWarnUser: a,
            href: `${r.TS.PARTNER_BASE_URL}store/packagelanding/${l}`,
            strToolTip: (0, s.we)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == c ? "1 appid" : c + " appids",
        );
      }
      function R() {
        return n.useMemo(
          () => ({
            accessorKey: "appName",
            header: (0, s.we)("#PackageGrid_Column_AppName"),
            cell: P,
            size: 80,
            sortingFn: E.es,
            meta: {
              strHeaderTooltip: (0, s.we)("#PackageGrid_Column_AppName_ttip"),
              bDisableSortButton: !0,
              cellClassname: c().AppCount,
            },
          }),
          [],
        );
      }
      function A(t) {
        const e = t.groupingValue,
          i = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage");
        return n.createElement(
          n.Fragment,
          null,
          e === i
            ? n.createElement(
                "span",
                { title: (0, s.we)("#PackageGrid_NoBaseGameExplanation") },
                e,
                " (?)",
              )
            : e,
          n.createElement(
            "span",
            { className: c().RowItemCount },
            "(",
            (0, s.Yp)("#PackageGrid_PackageCount", t.subRows.length),
            ")",
          ),
        );
      }
      function C(t) {
        const {
          fnBLocalChangesExist: e,
          fnWarnUser: i,
          href: r,
          children: s,
          strToolTip: o,
          strClassName: c,
        } = t;
        return n.createElement(
          a.he,
          { toolTipContent: o, className: c },
          n.createElement(
            "a",
            {
              onClick: (t) => {
                e() && (t.preventDefault(), i(t, r));
              },
              href: r,
            },
            s,
          ),
        );
      }
    },
    87641: (t, e, i) => {
      "use strict";
      i.d(e, { h: () => r });
      var n = i(90626),
        a = i(61859);
      function r(t) {
        const e = n.useCallback(
          (e) => {
            if (t())
              return (
                e.preventDefault(),
                (e.returnValue = (0, a.we)(
                  "#PackageGrid_NavigationWarning_Title",
                )),
                e.returnValue
              );
          },
          [t],
        );
        n.useEffect(
          () => (
            window.addEventListener("beforeunload", e),
            () => window.removeEventListener("beforeunload", e)
          ),
          [e],
        );
      }
    },
    7247: (t, e, i) => {
      "use strict";
      i.d(e, { Hf: () => p, i$: () => l, qP: () => o });
      var n = i(37085),
        a = i(15161),
        r = i(82097),
        s = i(61859);
      const o = new Set([
          a.uE.k_EStoreAppType_Game,
          a.uE.k_EStoreAppType_Mod,
          a.uE.k_EStoreAppType_Software,
          a.uE.k_EStoreAppType_Tool,
        ]),
        c = new Set([
          a.uE.k_EStoreAppType_DLC,
          a.uE.k_EStoreAppType_Video,
          a.uE.k_EStoreAppType_Music,
        ]);
      function l(t) {
        let e,
          i = !1,
          n = !1;
        const a = new Set();
        for (const e of t?.GetIncludedAppIDs() ?? []) {
          const t = r.A.Get().GetApp(e);
          if (t && o.has(t.GetAppType())) (i = !0), a.add(t.GetID());
          else if (t && c.has(t.GetAppType())) {
            n = !0;
            const e = t.GetParentAppID();
            e && a.add(e);
          }
        }
        let l = null;
        1 == a.size
          ? ((e = Array.from(a)[0]), (l = r.A.Get().GetApp(e)?.GetName()))
          : a.size > 1 &&
            (l = (0, s.we)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          l || (l = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: l,
          contents: i && n ? "BOTH" : i ? "GAME" : n ? "DLC" : null,
          nBaseAppID: e,
        };
      }
      const u = { include_release: !0 };
      async function p(t, e) {
        if (
          (await r.A.Get().HintLoadStorePackages(t, u)) != n.d.k_EResultOK ||
          e.token.reason
        )
          return null;
        const i = [];
        t.map((t) => r.A.Get().GetPackage(t))
          .filter((t) => !!t)
          .forEach((t) => i.push(...t.GetIncludedAppIDs()));
        const a = Array.from(new Set(i));
        if (
          (await r.A.Get().HintLoadStoreApps(a, u)) != n.d.k_EResultOK ||
          e.token.reason
        )
          return null;
        const s = a
            .map((t) => r.A.Get().GetApp(t))
            .filter((t) => !!t?.GetParentAppID())
            .map((t) => t.GetParentAppID()),
          o = Array.from(new Set(s));
        if (
          (await r.A.Get().HintLoadStoreApps(o, u)) != n.d.k_EResultOK ||
          e.token.reason
        )
          return null;
        return Array.from(new Set(a.concat(o)));
      }
    },
    76115: (t, e, i) => {
      "use strict";
      i.d(e, {
        DX: () => z,
        Ho: () => H,
        K1: () => k,
        KQ: () => L,
        Tj: () => f,
        Y2: () => h,
        hp: () => lt,
        lr: () => it,
        mQ: () => x,
        nY: () => v,
        tY: () => J,
        vm: () => S,
        vt: () => q,
        xE: () => Q,
      });
      var n,
        a,
        r,
        s,
        o,
        c,
        l,
        u,
        p,
        d,
        m,
        _,
        g,
        E,
        f,
        b,
        S,
        h,
        k,
        D,
        B,
        y,
        I,
        w,
        v,
        M,
        P = i(80613),
        R = i.n(P),
        A = i(89068),
        C = i(56545);
      !(function (t) {
        (t[(t.k_EPartnerEmailNotifcationType_Invalid = 0)] =
          "k_EPartnerEmailNotifcationType_Invalid"),
          (t[(t.k_EPartnerEmailNotifcationType_PartnerReminderPreRelease = 1)] =
            "k_EPartnerEmailNotifcationType_PartnerReminderPreRelease");
      })(n || (n = {})),
        (function (t) {
          (t[(t.k_EMembershipEvent_Invalid = 0)] =
            "k_EMembershipEvent_Invalid"),
            (t[(t.k_EMembershipEvent_AccountAddedToPartner = 1)] =
              "k_EMembershipEvent_AccountAddedToPartner"),
            (t[(t.k_EMembershipEvent_AccountRemovedFromPartner = 2)] =
              "k_EMembershipEvent_AccountRemovedFromPartner"),
            (t[(t.k_EMembershipEvent_GroupRightsModified = 3)] =
              "k_EMembershipEvent_GroupRightsModified"),
            (t[(t.k_EMembershipEvent_AddedToGroup = 4)] =
              "k_EMembershipEvent_AddedToGroup"),
            (t[(t.k_EMembershipEvent_RemovedFromGroup = 5)] =
              "k_EMembershipEvent_RemovedFromGroup"),
            (t[(t.k_EMembershipEvent_PublisherRightsModified = 6)] =
              "k_EMembershipEvent_PublisherRightsModified");
        })(a || (a = {})),
        (function (t) {
          (t[(t.k_EBetaProgram_Invalid = 0)] = "k_EBetaProgram_Invalid"),
            (t[(t.k_EBetaProgram_PartnerUTMStats = 1)] =
              "k_EBetaProgram_PartnerUTMStats"),
            (t[(t.k_EBetaProgram_SteamStatsAPI = 2)] =
              "k_EBetaProgram_SteamStatsAPI"),
            (t[(t.k_EBetaProgram_SteamLearn = 3)] =
              "k_EBetaProgram_SteamLearn");
        })(r || (r = {})),
        (function (t) {
          (t[(t.k_ENavigationDeviceType_Unknown = 0)] =
            "k_ENavigationDeviceType_Unknown"),
            (t[(t.k_ENavigationDeviceType_PC = 1)] =
              "k_ENavigationDeviceType_PC"),
            (t[(t.k_ENavigationDeviceType_Mobile = 2)] =
              "k_ENavigationDeviceType_Mobile");
        })(s || (s = {})),
        (function (t) {
          (t[(t.k_EAppCreationCreditStatus_Available = 0)] =
            "k_EAppCreationCreditStatus_Available"),
            (t[(t.k_EAppCreationCreditStatus_Redeemed = 1)] =
              "k_EAppCreationCreditStatus_Redeemed"),
            (t[(t.k_EAppCreationCreditStatus_Revoked = 2)] =
              "k_EAppCreationCreditStatus_Revoked"),
            (t[(t.k_EAppCreationCreditStatus_Pending = 3)] =
              "k_EAppCreationCreditStatus_Pending");
        })(o || (o = {})),
        (function (t) {
          (t[(t.k_EAppCreationCreditType_Standard = 0)] =
            "k_EAppCreationCreditType_Standard"),
            (t[(t.k_EAppCreationCreditType_Granted = 1)] =
              "k_EAppCreationCreditType_Granted"),
            (t[(t.k_EAppCreationCreditType_Complimentary = 2)] =
              "k_EAppCreationCreditType_Complimentary");
        })(c || (c = {})),
        (function (t) {
          (t[(t.k_EAppReportingPlatform_All = 0)] =
            "k_EAppReportingPlatform_All"),
            (t[(t.k_EAppReportingPlatform_Windows = 1)] =
              "k_EAppReportingPlatform_Windows"),
            (t[(t.k_EAppReportingPlatform_Mac = 2)] =
              "k_EAppReportingPlatform_Mac"),
            (t[(t.k_EAppReportingPlatform_Linux = 4)] =
              "k_EAppReportingPlatform_Linux");
        })(l || (l = {})),
        (function (t) {
          (t[(t.k_EReleaseRequestStateAny = 0)] = "k_EReleaseRequestStateAny"),
            (t[(t.k_EReleaseRequestStateNotReady = 1)] =
              "k_EReleaseRequestStateNotReady"),
            (t[(t.k_EReleaseRequestStatePending = 2)] =
              "k_EReleaseRequestStatePending"),
            (t[(t.k_EReleaseRequestStateApproved = 3)] =
              "k_EReleaseRequestStateApproved");
        })(u || (u = {})),
        (function (t) {
          (t[(t.k_EPartnerNotesType_Misc = 0)] = "k_EPartnerNotesType_Misc"),
            (t[(t.k_EPartnerNotesType_SetStatus_Active = 1)] =
              "k_EPartnerNotesType_SetStatus_Active"),
            (t[(t.k_EPartnerNotesType_SetStatus_Archived = 2)] =
              "k_EPartnerNotesType_SetStatus_Archived"),
            (t[(t.k_EPartnerNotesType_SetStatus_Banned = 3)] =
              "k_EPartnerNotesType_SetStatus_Banned"),
            (t[(t.k_EPartnerNotesType_Warning = 4)] =
              "k_EPartnerNotesType_Warning"),
            (t[(t.k_EPartnerNotesType_Legacy = 5)] =
              "k_EPartnerNotesType_Legacy"),
            (t[(t.k_EPartnerNotesType_SetStatus_Retired = 6)] =
              "k_EPartnerNotesType_SetStatus_Retired");
        })(p || (p = {})),
        (function (t) {
          (t[(t.k_EDocumentationFileType_Invalid = 0)] =
            "k_EDocumentationFileType_Invalid"),
            (t[(t.k_EDocumentationFileType_Download = 1)] =
              "k_EDocumentationFileType_Download"),
            (t[(t.k_EDocumentationFileType_Image = 2)] =
              "k_EDocumentationFileType_Image");
        })(d || (d = {})),
        (function (t) {
          t[(t.k_EPartnerProjectSurveyType_SteamClientDistribution = 1)] =
            "k_EPartnerProjectSurveyType_SteamClientDistribution";
        })(m || (m = {})),
        (function (t) {
          (t[(t.k_EAppCapabilityNone = 0)] = "k_EAppCapabilityNone"),
            (t[(t.k_EAppCapabilityCommunityItems = 1)] =
              "k_EAppCapabilityCommunityItems"),
            (t[(t.k_EAppCapabilityJumboKeyRequests = 2)] =
              "k_EAppCapabilityJumboKeyRequests"),
            (t[(t.k_EAppCapabilityKeyRequests = 3)] =
              "k_EAppCapabilityKeyRequests"),
            (t[(t.k_EAppCapabilityVetted = 4)] = "k_EAppCapabilityVetted"),
            (t[(t.k_EAppCapabilityEligibleForUpcomingList = 5)] =
              "k_EAppCapabilityEligibleForUpcomingList"),
            (t[(t.k_EAppCapabilityVettedForShowcaseItems = 6)] =
              "k_EAppCapabilityVettedForShowcaseItems"),
            (t[(t.k_EAppCapabilityFishy = 7)] = "k_EAppCapabilityFishy");
        })(_ || (_ = {})),
        (function (t) {
          (t[(t.k_EAppTransferState_Invalid = 0)] =
            "k_EAppTransferState_Invalid"),
            (t[(t.k_EAppTransferState_PendingConfirmationFrom_Receiver = 1)] =
              "k_EAppTransferState_PendingConfirmationFrom_Receiver"),
            (t[(t.k_EAppTransferState_PendingConfirmationFrom_Sender = 2)] =
              "k_EAppTransferState_PendingConfirmationFrom_Sender"),
            (t[(t.k_EAppTransferState_PendingApproval = 3)] =
              "k_EAppTransferState_PendingApproval"),
            (t[(t.k_EAppTransferState_Approved = 4)] =
              "k_EAppTransferState_Approved"),
            (t[(t.k_EAppTransferState_CanceledByReceiver = 5)] =
              "k_EAppTransferState_CanceledByReceiver"),
            (t[(t.k_EAppTransferState_CanceledBySender = 6)] =
              "k_EAppTransferState_CanceledBySender"),
            (t[(t.k_EAppTransferState_Declined = 7)] =
              "k_EAppTransferState_Declined"),
            (t[(t.k_EAppTransferState_RequiresEscalation = 8)] =
              "k_EAppTransferState_RequiresEscalation"),
            (t[(t.k_EAppTransferState_ApprovedPendingScheduledTransfer = 9)] =
              "k_EAppTransferState_ApprovedPendingScheduledTransfer"),
            (t[(t.k_EAppTransferState_Expired = 10)] =
              "k_EAppTransferState_Expired");
        })(g || (g = {})),
        (function (t) {
          (t[(t.k_ETF2BlogPostType_Blog = 0)] = "k_ETF2BlogPostType_Blog"),
            (t[(t.k_ETF2BlogPostType_News = 1)] = "k_ETF2BlogPostType_News"),
            (t[(t.k_ETF2BlogPostType_Updates = 2)] =
              "k_ETF2BlogPostType_Updates"),
            (t[(t.k_ETF2BlogPostType_PostID = 3)] =
              "k_ETF2BlogPostType_PostID"),
            (t[(t.k_ETF2BlogPostType_RSS = 4)] = "k_ETF2BlogPostType_RSS");
        })(E || (E = {})),
        (function (t) {
          (t[(t.k_EPartnerAppOptInType_PartnerEvent = 0)] =
            "k_EPartnerAppOptInType_PartnerEvent"),
            (t[(t.k_EPartnerAppOptInType_FeatureAccess = 1)] =
              "k_EPartnerAppOptInType_FeatureAccess");
        })(f || (f = {})),
        (function (t) {
          (t[(t.k_EPartnerOptInVisibility_Public = 0)] =
            "k_EPartnerOptInVisibility_Public"),
            (t[(t.k_EPartnerOptInVisibility_InviteOnly = 1)] =
              "k_EPartnerOptInVisibility_InviteOnly");
        })(b || (b = {})),
        (function (t) {
          (t[(t.k_EPartnerAppOptInAppealState_Invalid = 0)] =
            "k_EPartnerAppOptInAppealState_Invalid"),
            (t[(t.k_EPartnerAppOptInAppealState_Approved = 1)] =
              "k_EPartnerAppOptInAppealState_Approved"),
            (t[(t.k_EPartnerAppOptInAppealState_Denied = 2)] =
              "k_EPartnerAppOptInAppealState_Denied");
        })(S || (S = {})),
        (function (t) {
          (t[(t.k_EOptInEmailTarget_ActivatingUser = 1)] =
            "k_EOptInEmailTarget_ActivatingUser"),
            (t[(t.k_EOptInEmailTarget_DemoNotLive = 2)] =
              "k_EOptInEmailTarget_DemoNotLive"),
            (t[(t.k_EOptInEmailTarget_DiscountMissing = 4)] =
              "k_EOptInEmailTarget_DiscountMissing"),
            (t[(t.k_EOptInEmailTarget_DEPRECATED_InvitedPartners = 8)] =
              "k_EOptInEmailTarget_DEPRECATED_InvitedPartners"),
            (t[(t.k_EOptInEmailTarget_InvitedApps = 16)] =
              "k_EOptInEmailTarget_InvitedApps"),
            (t[(t.k_EOptInEmailTarget_EligibleApps = 32)] =
              "k_EOptInEmailTarget_EligibleApps"),
            (t[(t.k_EOptInEmailTarget_FeaturedApps = 64)] =
              "k_EOptInEmailTarget_FeaturedApps"),
            (t[(t.k_EOptInEmailTarget_FeaturedAppsMissingDate = 128)] =
              "k_EOptInEmailTarget_FeaturedAppsMissingDate"),
            (t[(t.k_EOptInEmailTarget_FeaturedAppsNotContacted = 256)] =
              "k_EOptInEmailTarget_FeaturedAppsNotContacted"),
            (t[(t.k_EOptInEmailTarget_CustomAppList = 512)] =
              "k_EOptInEmailTarget_CustomAppList");
        })(h || (h = {})),
        (function (t) {
          (t[(t.k_EOptInEmailSetting_None = 0)] = "k_EOptInEmailSetting_None"),
            (t[(t.k_EOptInEmailSetting_AssetKit = 1)] =
              "k_EOptInEmailSetting_AssetKit"),
            (t[(t.k_EOptInEmailSetting_PressPreview = 2)] =
              "k_EOptInEmailSetting_PressPreview"),
            (t[(t.k_EOptInEmailSetting_ScheduleWidget = 4)] =
              "k_EOptInEmailSetting_ScheduleWidget"),
            (t[(t.k_EOptInEmailSetting_OptOut = 8)] =
              "k_EOptInEmailSetting_OptOut"),
            (t[(t.k_EOptInEmailSetting_OptOutDemo = 16)] =
              "k_EOptInEmailSetting_OptOutDemo"),
            (t[(t.k_EOptInEmailSetting_EnterDiscount = 32)] =
              "k_EOptInEmailSetting_EnterDiscount"),
            (t[(t.k_EOptInEmailSetting_ActivateDemo = 64)] =
              "k_EOptInEmailSetting_ActivateDemo"),
            (t[(t.k_EOptInEmailSetting_ReviewCategorization = 128)] =
              "k_EOptInEmailSetting_ReviewCategorization"),
            (t[(t.k_EOptInEmailSetting_DemoReview = 256)] =
              "k_EOptInEmailSetting_DemoReview"),
            (t[(t.k_EOptInEmailSetting_PressPreviewDetails = 512)] =
              "k_EOptInEmailSetting_PressPreviewDetails"),
            (t[(t.k_EOptInEmailSetting_StatsSummary = 1024)] =
              "k_EOptInEmailSetting_StatsSummary"),
            (t[(t.k_EOptInEmailSetting_SurveyButton = 2048)] =
              "k_EOptInEmailSetting_SurveyButton"),
            (t[(t.k_EOptInEmailSetting_DemoLaunch = 4096)] =
              "k_EOptInEmailSetting_DemoLaunch"),
            (t[(t.k_EOptInEmailSetting_CallForRegistration = 8192)] =
              "k_EOptInEmailSetting_CallForRegistration"),
            (t[(t.k_EOptInEmailSetting_SteamAwardCategories = 16384)] =
              "k_EOptInEmailSetting_SteamAwardCategories"),
            (t[(t.k_EOptInEmailSetting_SeasonalFeatureRequest = 32768)] =
              "k_EOptInEmailSetting_SeasonalFeatureRequest");
        })(k || (k = {})),
        (function (t) {
          (t[(t.k_EAppTestType_BuildReview = 0)] =
            "k_EAppTestType_BuildReview"),
            (t[(t.k_EAppTestType_StorePageReview = 1)] =
              "k_EAppTestType_StorePageReview"),
            (t[(t.k_EAppTestType_SteamChina_BuildReview = 2)] =
              "k_EAppTestType_SteamChina_BuildReview"),
            (t[(t.k_EAppTestType_SteamChina_StorePageReview = 3)] =
              "k_EAppTestType_SteamChina_StorePageReview"),
            (t[
              (t.k_EAppTestType_SteamChinaPlatformOperator_StorePageReview = 4)
            ] = "k_EAppTestType_SteamChinaPlatformOperator_StorePageReview"),
            (t[(t.k_EAppTestType_SteamChinaPlatformOperator_BuildReview = 5)] =
              "k_EAppTestType_SteamChinaPlatformOperator_BuildReview"),
            (t[(t.k_EAppTestType_SteamDeckCompatibilityReview = 6)] =
              "k_EAppTestType_SteamDeckCompatibilityReview");
        })(D || (D = {})),
        (function (t) {
          (t[(t.k_EAppTrafficStatAttribution_Store = 0)] =
            "k_EAppTrafficStatAttribution_Store"),
            (t[(t.k_EAppTrafficStatAttribution_SteamPlatform = 1)] =
              "k_EAppTrafficStatAttribution_SteamPlatform"),
            (t[(t.k_EAppTrafficStatAttribution_External = 2)] =
              "k_EAppTrafficStatAttribution_External");
        })(B || (B = {})),
        (function (t) {
          (t[(t.k_EPartnerMembershipInviteState_Invalid = 0)] =
            "k_EPartnerMembershipInviteState_Invalid"),
            (t[(t.k_EPartnerMembershipInviteState_Sent = 1)] =
              "k_EPartnerMembershipInviteState_Sent"),
            (t[(t.k_EPartnerMembershipInviteState_ReceiverAccepted = 2)] =
              "k_EPartnerMembershipInviteState_ReceiverAccepted"),
            (t[(t.k_EPartnerMembershipInviteState_ReceiverDeclined = 3)] =
              "k_EPartnerMembershipInviteState_ReceiverDeclined"),
            (t[(t.k_EPartnerMembershipInviteState_PartnerAccepted = 4)] =
              "k_EPartnerMembershipInviteState_PartnerAccepted"),
            (t[(t.k_EPartnerMembershipInviteState_PartnerDeclined = 5)] =
              "k_EPartnerMembershipInviteState_PartnerDeclined"),
            (t[(t.k_EPartnerMembershipInviteState_Canceled = 6)] =
              "k_EPartnerMembershipInviteState_Canceled"),
            (t[(t.k_EPartnerMembershipInviteState_Expired = 7)] =
              "k_EPartnerMembershipInviteState_Expired"),
            (t[(t.k_EPartnerMembershipInviteState_MAX = 8)] =
              "k_EPartnerMembershipInviteState_MAX");
        })(y || (y = {})),
        (function (t) {
          (t[(t.k_EAppShareState_Invalid = 0)] = "k_EAppShareState_Invalid"),
            (t[(t.k_EAppShareState_Created = 1)] = "k_EAppShareState_Created"),
            (t[(t.k_EAppShareState_AwaitingConfirmation = 2)] =
              "k_EAppShareState_AwaitingConfirmation"),
            (t[(t.k_EAppShareState_Declined = 3)] =
              "k_EAppShareState_Declined"),
            (t[(t.k_EAppShareState_Active = 4)] = "k_EAppShareState_Active"),
            (t[(t.k_EAppShareState_Canceled = 5)] =
              "k_EAppShareState_Canceled"),
            (t[(t.k_EAppShareState_Expired = 6)] = "k_EAppShareState_Expired"),
            (t[(t.k_EAppShareState_Revoked = 7)] = "k_EAppShareState_Revoked"),
            (t[(t.k_EAppShareState_CanceledForAppTransfer = 8)] =
              "k_EAppShareState_CanceledForAppTransfer"),
            (t[(t.k_EAppShareState_MAX = 9)] = "k_EAppShareState_MAX");
        })(I || (I = {})),
        (function (t) {
          (t[(t.k_ECommunicationInviteState_Invalid = 0)] =
            "k_ECommunicationInviteState_Invalid"),
            (t[(t.k_ECommunicationInviteState_Pending = 1)] =
              "k_ECommunicationInviteState_Pending"),
            (t[(t.k_ECommunicationInviteState_Accepted = 2)] =
              "k_ECommunicationInviteState_Accepted"),
            (t[(t.k_ECommunicationInviteState_Removed = 4)] =
              "k_ECommunicationInviteState_Removed");
        })(w || (w = {}));
      class O extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            O.prototype.packageids || A.Sg(O.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  packageids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: A.qM.readUint32,
                    pbr: A.qM.readPackedUint32,
                    bw: A.gp.writeRepeatedUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = A.w0(O.M())), O.sm_mbf;
        }
        toObject(t = !1) {
          return O.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(O.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(O.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new O();
          return O.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(O.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return O.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(O.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return O.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Request";
        }
      }
      class T extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            T.prototype.paid || A.Sg(T.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { paid: { n: 1, c: G, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = A.w0(T.M())), T.sm_mbf;
        }
        toObject(t = !1) {
          return T.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(T.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(T.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new T();
          return T.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(T.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(T.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return T.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Response";
        }
      }
      class G extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            G.prototype.partnerid || A.Sg(G.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  partnerid: {
                    n: 1,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  packageid: {
                    n: 2,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = A.w0(G.M())), G.sm_mbf;
        }
        toObject(t = !1) {
          return G.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(G.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(G.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new G();
          return G.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(G.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(G.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return G.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair";
        }
      }
      class z extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            z.prototype.opt_in_name || A.Sg(z.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = A.w0(z.M())), z.sm_mbf;
        }
        toObject(t = !1) {
          return z.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(z.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(z.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new z();
          return z.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(z.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return z.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(z.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return z.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Request";
        }
      }
      class F extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            F.prototype.email_def_id || A.Sg(F.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = A.w0(F.M())), F.sm_mbf;
        }
        toObject(t = !1) {
          return F.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(F.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(F.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new F();
          return F.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(F.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return F.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(F.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return F.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Response";
        }
      }
      class L extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            L.prototype.email_def_id || A.Sg(L.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  targeting_flag: {
                    n: 2,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  reviewed: {
                    n: 7,
                    d: !1,
                    br: A.qM.readBool,
                    bw: A.gp.writeBool,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = A.w0(L.M())), L.sm_mbf;
        }
        toObject(t = !1) {
          return L.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(L.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(L.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new L();
          return L.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(L.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return L.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(L.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return L.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Request";
        }
      }
      class U extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(), P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        toObject(t = !1) {
          return U.toObject(t, this);
        }
        static toObject(t, e) {
          return t ? { $jspbMessageInstance: e } : {};
        }
        static fromObject(t) {
          return new U();
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new U();
          return U.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return t;
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {}
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return U.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Response";
        }
      }
      class j extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            j.prototype.accounts_examined || A.Sg(j.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  accounts_examined: {
                    n: 1,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accounts_emailed: {
                    n: 2,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accounts_not_emailed_opted_out: {
                    n: 3,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accounts_email_failed: {
                    n: 4,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  completed: { n: 5, br: A.qM.readBool, bw: A.gp.writeBool },
                  rt_last_updated: {
                    n: 6,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = A.w0(j.M())), j.sm_mbf;
        }
        toObject(t = !1) {
          return j.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(j.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(j.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new j();
          return j.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(j.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return j.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(j.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return j.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailStats";
        }
      }
      class q extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            q.prototype.email_def_id || A.Sg(q.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  force_resend: { n: 2, br: A.qM.readBool, bw: A.gp.writeBool },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = A.w0(q.M())), q.sm_mbf;
        }
        toObject(t = !1) {
          return q.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(q.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(q.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new q();
          return q.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(q.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(q.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return q.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
        }
      }
      class W extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            W.prototype.results || A.Sg(W.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = { proto: W, fields: { results: { n: 1, c: j } } }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = A.w0(W.M())), W.sm_mbf;
        }
        toObject(t = !1) {
          return W.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(W.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(W.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new W();
          return W.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(W.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(W.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return W.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
        }
      }
      class N extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            N.prototype.opt_in_name || A.Sg(N.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  stats: { n: 7, c: j },
                  creator_accountid: {
                    n: 8,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  create_time: {
                    n: 9,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  last_update_time: {
                    n: 10,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  email_def_id: {
                    n: 11,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  completed: { n: 12, br: A.qM.readBool, bw: A.gp.writeBool },
                  aborted: { n: 13, br: A.qM.readBool, bw: A.gp.writeBool },
                  deleted: { n: 14, br: A.qM.readBool, bw: A.gp.writeBool },
                  reviewed: { n: 15, br: A.qM.readBool, bw: A.gp.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = A.w0(N.M())), N.sm_mbf;
        }
        toObject(t = !1) {
          return N.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(N.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(N.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new N();
          return N.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(N.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(N.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return N.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailDef";
        }
      }
      class x extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            x.prototype.opt_in_name || A.Sg(x.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = A.w0(x.M())), x.sm_mbf;
        }
        toObject(t = !1) {
          return x.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(x.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(x.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new x();
          return x.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(x.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(x.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return x.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
        }
      }
      class V extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            V.prototype.defs || A.Sg(V.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { defs: { n: 1, c: N, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = A.w0(V.M())), V.sm_mbf;
        }
        toObject(t = !1) {
          return V.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(V.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(V.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new V();
          return V.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(V.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(V.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return V.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
        }
      }
      class H extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            H.prototype.email_def_id || A.Sg(H.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = A.w0(H.M())), H.sm_mbf;
        }
        toObject(t = !1) {
          return H.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(H.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(H.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new H();
          return H.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(H.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(H.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return H.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
        }
      }
      class K extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            K.prototype.stats || A.Sg(K.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = { proto: K, fields: { stats: { n: 1, c: j } } }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = A.w0(K.M())), K.sm_mbf;
        }
        toObject(t = !1) {
          return K.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(K.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(K.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new K();
          return K.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(K.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(K.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return K.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
        }
      }
      class J extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            J.prototype.email_def_id || A.Sg(J.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: A.qM.readUint32, bw: A.gp.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  language_override: {
                    n: 4,
                    d: 0,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = A.w0(J.M())), J.sm_mbf;
        }
        toObject(t = !1) {
          return J.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(J.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(J.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new J();
          return J.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(J.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(J.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return J.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Request";
        }
      }
      class Z extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(), P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        toObject(t = !1) {
          return Z.toObject(t, this);
        }
        static toObject(t, e) {
          return t ? { $jspbMessageInstance: e } : {};
        }
        static fromObject(t) {
          return new Z();
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new Z();
          return Z.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return t;
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {}
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Response";
        }
      }
      class X extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            X.prototype.accountid || A.Sg(X.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  accountid: {
                    n: 1,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  appid: { n: 2, br: A.qM.readUint32, bw: A.gp.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  rtime_notified: {
                    n: 4,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  ignored_unverified_email: {
                    n: 5,
                    br: A.qM.readBool,
                    bw: A.gp.writeBool,
                  },
                  ignored_email_optout: {
                    n: 6,
                    br: A.qM.readBool,
                    bw: A.gp.writeBool,
                  },
                  status: { n: 7, br: A.qM.readUint32, bw: A.gp.writeUint32 },
                  send_rtime: {
                    n: 8,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = A.w0(X.M())), X.sm_mbf;
        }
        toObject(t = !1) {
          return X.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(X.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(X.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new X();
          return X.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(X.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(X.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return X.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerOptInEmailTracking";
        }
      }
      class Q extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            Q.prototype.email_def_id || A.Sg(Q.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = A.w0(Q.M())), Q.sm_mbf;
        }
        toObject(t = !1) {
          return Q.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(Q.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(Q.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new Q();
          return Q.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(Q.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(Q.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Request";
        }
      }
      class Y extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            Y.prototype.email_def_id || A.Sg(Y.M()),
            P.Message.initialize(this, t, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: A.qM.readFixed64String,
                    bw: A.gp.writeFixed64String,
                  },
                  results: { n: 2, c: X, r: !0, q: !0 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = A.w0(Y.M())), Y.sm_mbf;
        }
        toObject(t = !1) {
          return Y.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(Y.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(Y.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new Y();
          return Y.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(Y.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(Y.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Response";
        }
      }
      class $ extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            $.prototype.appid || A.Sg($.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appid: { n: 1, br: A.qM.readUint32, bw: A.gp.writeUint32 },
                  opt_in: { n: 2, br: A.qM.readBool, bw: A.gp.writeBool },
                  opt_in_name: {
                    n: 3,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  jsondata: { n: 4, br: A.qM.readString, bw: A.gp.writeString },
                  type: { n: 5, br: A.qM.readEnum, bw: A.gp.writeEnum },
                  accountid_add: {
                    n: 6,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  time_opted_in: {
                    n: 7,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accountid_lastmod: {
                    n: 9,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  invited: { n: 10, br: A.qM.readBool, bw: A.gp.writeBool },
                  accountid_remove: {
                    n: 11,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  time_opted_out: {
                    n: 12,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  pruned: { n: 13, br: A.qM.readBool, bw: A.gp.writeBool },
                  accountid_prune: {
                    n: 14,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  time_pruned: {
                    n: 15,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  additional_featuring: {
                    n: 16,
                    br: A.qM.readBool,
                    bw: A.gp.writeBool,
                  },
                  feature_day: {
                    n: 17,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accountid_invited: {
                    n: 18,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  no_planned_discount: {
                    n: 19,
                    br: A.qM.readBool,
                    bw: A.gp.writeBool,
                  },
                  pending_review: {
                    n: 20,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  appeal_state: {
                    n: 21,
                    br: A.qM.readEnum,
                    bw: A.gp.writeEnum,
                  },
                  accountid_appeal: {
                    n: 22,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  time_appeal_decision: {
                    n: 23,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = A.w0($.M())), $.sm_mbf;
        }
        toObject(t = !1) {
          return $.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT($.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq($.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new $();
          return $.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj($.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0($.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return $.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInData";
        }
      }
      class tt extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            tt.prototype.appid || A.Sg(tt.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  appid: { n: 1, br: A.qM.readUint32, bw: A.gp.writeUint32 },
                  opt_in_name: {
                    n: 2,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = A.w0(tt.M())), tt.sm_mbf;
        }
        toObject(t = !1) {
          return tt.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(tt.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(tt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new tt();
          return tt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(tt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(tt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Request";
        }
      }
      class et extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            et.prototype.data || A.Sg(et.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: { data: { n: 1, c: $, r: !0, q: !0 } },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = A.w0(et.M())), et.sm_mbf;
        }
        toObject(t = !1) {
          return et.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(et.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(et.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new et();
          return et.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(et.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(et.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return et.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Response";
        }
      }
      class it extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            it.prototype.appids || A.Sg(it.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: A.qM.readUint32,
                    pbr: A.qM.readPackedUint32,
                    bw: A.gp.writeRepeatedUint32,
                  },
                  additional_featuring: {
                    n: 2,
                    d: !0,
                    br: A.qM.readBool,
                    bw: A.gp.writeBool,
                  },
                  opt_in_name: {
                    n: 3,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = A.w0(it.M())), it.sm_mbf;
        }
        toObject(t = !1) {
          return it.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(it.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(it.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new it();
          return it.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(it.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(it.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return it.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
        }
      }
      class nt extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            nt.prototype.appids || A.Sg(nt.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: A.qM.readUint32,
                    pbr: A.qM.readPackedUint32,
                    bw: A.gp.writeRepeatedUint32,
                  },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = A.w0(nt.M())), nt.sm_mbf;
        }
        toObject(t = !1) {
          return nt.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(nt.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(nt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new nt();
          return nt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(nt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(nt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
        }
      }
      class at extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            at.prototype.opt_in_id || A.Sg(at.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  opt_in_id: {
                    n: 7,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  opt_in_name: {
                    n: 1,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  type: { n: 2, br: A.qM.readEnum, bw: A.gp.writeEnum },
                  active: { n: 3, br: A.qM.readBool, bw: A.gp.writeBool },
                  start_date: {
                    n: 4,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  end_date: { n: 5, br: A.qM.readUint32, bw: A.gp.writeUint32 },
                  jsondata: { n: 6, br: A.qM.readString, bw: A.gp.writeString },
                  last_modified_time: {
                    n: 8,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  last_modifier_accountid: {
                    n: 9,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = A.w0(at.M())), at.sm_mbf;
        }
        toObject(t = !1) {
          return at.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(at.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(at.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new at();
          return at.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(at.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(at.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return at.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "COptInDef";
        }
      }
      class rt extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            rt.prototype.opt_in_name || A.Sg(rt.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  start: {
                    n: 2,
                    d: 0,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  count: {
                    n: 3,
                    d: 20,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  include_json: { n: 4, br: A.qM.readBool, bw: A.gp.writeBool },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = A.w0(rt.M())), rt.sm_mbf;
        }
        toObject(t = !1) {
          return rt.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(rt.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(rt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new rt();
          return rt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(rt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(rt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInHistoryInternal_Request";
        }
      }
      class st extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            st.prototype.opt_ins || A.Sg(st.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: { opt_ins: { n: 1, c: at, r: !0, q: !0 } },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = A.w0(st.M())), st.sm_mbf;
        }
        toObject(t = !1) {
          return st.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(st.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(st.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new st();
          return st.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(st.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(st.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return st.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInHistoryInternal_Response";
        }
      }
      class ot extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ot.prototype.opt_in_name || A.Sg(ot.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = A.w0(ot.M())), ot.sm_mbf;
        }
        toObject(t = !1) {
          return ot.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(ot.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(ot.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new ot();
          return ot.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(ot.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(ot.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInsIDs_Request";
        }
      }
      class ct extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ct.prototype.opted_in_appids || A.Sg(ct.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  opted_in_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: A.qM.readUint32,
                    pbr: A.qM.readPackedUint32,
                    bw: A.gp.writeRepeatedUint32,
                  },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = A.w0(ct.M())), ct.sm_mbf;
        }
        toObject(t = !1) {
          return ct.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(ct.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(ct.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new ct();
          return ct.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(ct.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(ct.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInsIDs_Response";
        }
      }
      class lt extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            lt.prototype.opt_in_names || A.Sg(lt.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  opt_in_names: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: A.qM.readString,
                    bw: A.gp.writeRepeatedString,
                  },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = A.w0(lt.M())), lt.sm_mbf;
        }
        toObject(t = !1) {
          return lt.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(lt.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(lt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new lt();
          return lt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(lt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(lt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInAppealsSummaryStats_Request";
        }
      }
      class ut extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ut.prototype.summary || A.Sg(ut.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: { summary: { n: 1, c: pt, r: !0, q: !0 } },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = A.w0(ut.M())), ut.sm_mbf;
        }
        toObject(t = !1) {
          return ut.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(ut.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(ut.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new ut();
          return ut.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(ut.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(ut.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInAppealsSummaryStats_Response";
        }
      }
      class pt extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            pt.prototype.opt_in_name || A.Sg(pt.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  open_appeals: {
                    n: 2,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  reject_appeals: {
                    n: 3,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accepted_appeals: {
                    n: 4,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  appeal_account_id: {
                    n: 5,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = A.w0(pt.M())), pt.sm_mbf;
        }
        toObject(t = !1) {
          return pt.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(pt.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(pt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new pt();
          return pt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(pt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(pt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInAppealsSummaryStats_Response_CSummary";
        }
      }
      class dt extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            dt.prototype.inviteid || A.Sg(dt.M()),
            P.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: {
                  inviteid: {
                    n: 1,
                    br: A.qM.readUint64String,
                    bw: A.gp.writeUint64String,
                  },
                  accountid_sender: {
                    n: 2,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  email: { n: 3, br: A.qM.readString, bw: A.gp.writeString },
                  real_name: {
                    n: 4,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                  note: { n: 5, br: A.qM.readString, bw: A.gp.writeString },
                  time_sent: {
                    n: 6,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  current_state: {
                    n: 7,
                    br: A.qM.readEnum,
                    bw: A.gp.writeEnum,
                  },
                  pub_rights: {
                    n: 8,
                    br: A.qM.readUint64String,
                    bw: A.gp.writeUint64String,
                  },
                  app_rights: {
                    n: 9,
                    br: A.qM.readUint64String,
                    bw: A.gp.writeUint64String,
                  },
                  time_receiver_responded: {
                    n: 10,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accountid: {
                    n: 11,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  time_partner_responded: {
                    n: 12,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  accountid_partner: {
                    n: 13,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  partnerid: {
                    n: 14,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  time_last_updated: {
                    n: 15,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  sender_ip: {
                    n: 16,
                    br: A.qM.readString,
                    bw: A.gp.writeString,
                  },
                },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = A.w0(dt.M())), dt.sm_mbf;
        }
        toObject(t = !1) {
          return dt.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(dt.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(dt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new dt();
          return dt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(dt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(dt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "MembershipInvite";
        }
      }
      class mt extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            mt.prototype.partnerid || A.Sg(mt.M()),
            P.Message.initialize(this, t, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: {
                  partnerid: {
                    n: 1,
                    br: A.qM.readUint32,
                    bw: A.gp.writeUint32,
                  },
                  filter_states: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: A.qM.readEnum,
                    pbr: A.qM.readPackedEnum,
                    bw: A.gp.writeRepeatedEnum,
                  },
                },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = A.w0(mt.M())), mt.sm_mbf;
        }
        toObject(t = !1) {
          return mt.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(mt.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(mt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new mt();
          return mt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(mt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(mt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Request";
        }
      }
      class _t extends P.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            _t.prototype.invites || A.Sg(_t.M()),
            P.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: { invites: { n: 1, c: dt, r: !0, q: !0 } },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = A.w0(_t.M())), _t.sm_mbf;
        }
        toObject(t = !1) {
          return _t.toObject(t, this);
        }
        static toObject(t, e) {
          return A.BT(_t.M(), t, e);
        }
        static fromObject(t) {
          return A.Uq(_t.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (R().BinaryReader)(t),
            i = new _t();
          return _t.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return A.zj(_t.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (R().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          A.i0(_t.M(), t, e);
        }
        serializeBase64String() {
          var t = new (R().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Response";
        }
      }
      !(function (t) {
        (t.GetSinglePartnerAppOptIn = function (t, e) {
          return t.SendMsg(
            "Publishing.GetSinglePartnerAppOptIn#1",
            (0, C.I8)(tt, e),
            et,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (t.SetFeaturingOnPartnerAppOptIn = function (t, e) {
            return t.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              (0, C.I8)(it, e),
              nt,
              { ePrivilege: 1 },
            );
          }),
          (t.GetOptInHistoryInternal = function (t, e) {
            return t.SendMsg(
              "Publishing.GetOptInHistoryInternal#1",
              (0, C.I8)(rt, e),
              st,
              { ePrivilege: 4 },
            );
          }),
          (t.GetPartnerAppOptInsIDs = function (t, e) {
            return t.SendMsg(
              "Publishing.GetPartnerAppOptInsIDs#1",
              (0, C.I8)(ot, e),
              ct,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (t.GetOptInAppealsSummaryStats = function (t, e) {
            return t.SendMsg(
              "Publishing.GetOptInAppealsSummaryStats#1",
              (0, C.I8)(lt, e),
              ut,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (t.CreatePartnerAppOptInEmails = function (t, e) {
            return t.SendMsg(
              "Publishing.CreatePartnerAppOptInEmails#1",
              (0, C.I8)(z, e),
              F,
              { ePrivilege: 1 },
            );
          }),
          (t.UpdatePartnerAppOptInEmails = function (t, e) {
            return t.SendMsg(
              "Publishing.UpdatePartnerAppOptInEmails#1",
              (0, C.I8)(L, e),
              U,
              { ePrivilege: 1 },
            );
          }),
          (t.SendPartnerOptInEmailAndWait = function (t, e) {
            return t.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              (0, C.I8)(q, e),
              W,
              { ePrivilege: 1 },
            );
          }),
          (t.GetPartnerAppOptInEmailDefAndStats = function (t, e) {
            return t.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              (0, C.I8)(x, e),
              V,
              { ePrivilege: 1 },
            );
          }),
          (t.GetEstimatePartnerAppOptInEmail = function (t, e) {
            return t.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              (0, C.I8)(H, e),
              K,
              { ePrivilege: 1 },
            );
          }),
          (t.TestFirePartnerAppOptInEmail = function (t, e) {
            return t.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              (0, C.I8)(J, e),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (t.GetOptInEmailTracking = function (t, e) {
            return t.SendMsg(
              "Publishing.GetOptInEmailTracking#1",
              (0, C.I8)(Q, e),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (t.GetPartnerPaidGivenPackageList = function (t, e) {
            return t.SendMsg(
              "Publishing.GetPartnerPaidGivenPackageList#1",
              (0, C.I8)(O, e),
              T,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(v || (v = {})),
        (function (t) {
          t.GetInvites = function (t, e) {
            return t.SendMsg(
              "PartnerMembershipInvite.GetInvites#1",
              (0, C.I8)(mt, e),
              _t,
              { bConstMethod: !0, ePrivilege: 11 },
            );
          };
        })(M || (M = {}));
    },
    41103: (t, e, i) => {
      "use strict";
      i.d(e, { Hl: () => g, dQ: () => _ });
      var n = i(34629),
        a = i(41735),
        r = i.n(a),
        s = i(14947),
        o = i(90626),
        c = i(85044),
        l = i(17720),
        u = i(81393),
        p = i(68797),
        d = i(78327);
      class m {
        constructor() {
          (0, s.Gn)(this);
        }
        m_mapProfiles = new Map();
        m_mapProfilesLoading = new Map();
        async LoadProfiles(t, e) {
          (0, u.wT)(
            t.length <= 500,
            "Check LoadProfiles, requesting too many steam IDs",
          );
          let i = t.filter(
            (t) =>
              !this.m_mapProfiles.has(t) && !this.m_mapProfilesLoading.has(t),
          );
          if (0 == i.length) return this.m_mapProfilesLoading.get(t[0]);
          let n = d.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            a = r().get(n, {
              params: { steamids: i.join(",") },
              withCredentials: !0,
              cancelToken: e?.token,
            });
          i.forEach((t) => this.m_mapProfilesLoading.set(t, a));
          let s = await a;
          s.data &&
            200 == s.status &&
            s.data.forEach((t) => {
              (t.avatar_hash = t.avatar_url),
                (t.avatar_url_medium = (0, c.t)(t.avatar_url, "medium")),
                (t.avatar_url_full = (0, c.t)(t.avatar_url, "full")),
                (t.avatar_url = (0, c.t)(t.avatar_url)),
                this.m_mapProfiles.set(t.steamid, t),
                this.m_mapProfilesLoading.delete(t.steamid);
            });
        }
        GetProfile(t) {
          return this.m_mapProfiles.get(t);
        }
        GetProfileByAccountID(t) {
          return this.m_mapProfiles.get(
            l.b.InitFromAccountID(t).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(t) {
          return this.m_mapProfiles.get(t.ConvertTo64BitString());
        }
        BHasProfile(t) {
          return this.m_mapProfiles.has(t);
        }
        BHasProfileByAccountID(t) {
          return this.m_mapProfiles.has(
            l.b.InitFromAccountID(t).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(t) {
          return this.m_mapProfiles.has(t.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(t) {
          return !t.some((t) => !this.BHasProfileBySteamID(t));
        }
        GetProfileURLBySteamID(t) {
          const e = this.GetProfileBySteamID(t);
          return e && e.profile_url
            ? d.TS.COMMUNITY_BASE_URL + "id/" + e.profile_url
            : d.TS.COMMUNITY_BASE_URL + "profiles/" + t.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(t) {
          const e = this.GetProfileBySteamID(t);
          return e && e.persona_name ? e.persona_name : "";
        }
      }
      (0, n.Cg)([s.sH], m.prototype, "m_mapProfiles", void 0);
      const _ = new m();
      function g(t) {
        return (function (t) {
          const e = o.useMemo(
              () => (t ? ("string" == typeof t ? new l.b(t) : t) : null),
              [t],
            ),
            [i, n] = (0, o.useState)(!!e && !_.BHasProfileBySteamID(e));
          return (
            (0, o.useEffect)(() => {
              const t = r().CancelToken.source();
              return (
                e &&
                  !_.BHasProfileBySteamID(e) &&
                  _.LoadProfiles([e.ConvertTo64BitString()])
                    .catch((t) => {
                      const i = (0, p.H)(t);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          e.ConvertTo64BitString() +
                          ": " +
                          i.strErrorMsg,
                        i,
                      );
                    })
                    .finally(() => {
                      t.token.reason || n(!1);
                    }),
                () => t.cancel("unmounting useUserProfile")
              );
            }, [t]),
            [i, !!e && _.GetProfileBySteamID(e)]
          );
        })(o.useMemo(() => (t ? l.b.InitFromAccountID(t) : null), [t]));
      }
    },
  },
]);

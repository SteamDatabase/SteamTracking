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
    31718: (t) => {
      t.exports = {
        FancyTableRow: "_36QJs1BZ3so19Xl2es3ihH",
        ExpandableRow: "g86xV6xEGOZ54uRvK3oQ4",
        FancyTableHeader: "_2mHaS291U0AFO1q99AVdLy",
        StickyHeader: "_4y4yrbyr89wNqTGLp049k",
        FancyTableCell: "_3m5AH2HSnsvjImS7uUpvxv",
        SortButton: "_2xr81ssapVQO5aalcANmCk",
        ColumnHeader: "_2XdcqH-eLWVp_qatDebc6J",
        ResizeHandle: "USh_UNRX22s8Wml0mCY3M",
        PrevResizeHandle: "_3wzyEuMO8BdQHAkXnneNRR",
        SortIndicator: "_6z0ftV9RCqbZFmC4EOzYZ",
        GroupExpandIndicator: "_3I86V1lT4xbDJ6FDjMIaMq",
        RowGroup: "_uckWydn-lyPGWjFKZ4Tm",
      };
    },
    33428: (t, e, n) => {
      "use strict";
      n.d(e, {
        cR: () => C,
        E7: () => S,
        yB: () => f,
        tW: () => _,
        vV: () => I,
        p6: () => k,
        sU: () => v,
        BG: () => P,
        ur: () => G,
        wn: () => E,
      });
      var a = n(34629),
        s = n(41735),
        i = n.n(s),
        o = n(90626),
        r = n(44165),
        c = n(68797),
        l = n(6419),
        u = n(6144),
        d = n(73745),
        p = n(78327);
      const g = "1",
        m = "SaleEvent_DurationDiscount_Tooltip",
        D = "discount";
      class h {
        m_mapDiscountEvents = new Map();
        m_discountEventsListCallback = new u.lu();
        m_mapDiscountEventCallback = new Map();
        m_mapAppList = new Map();
        m_mapAppListCallback = new Map();
        m_bLoadedViaInitOrFullLoad = !1;
        m_bLoadEventsRequestInFlight = !1;
        m_mapInflightDiscountLoadRequest = new Map();
        m_mapInflightDiscountAndAppListLoadRequest = new Map();
        GetFutureDiscountEvents() {
          const t = (0, r.sB)();
          return Array.from(h.Get().m_mapDiscountEvents.values()).filter(
            (e) => e.end_date > t,
          );
        }
        GetAllDiscountEvents() {
          return Array.from(h.Get().m_mapDiscountEvents.values());
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
              this.m_mapDiscountEventCallback.set(t, new u.lu()),
            this.m_mapDiscountEventCallback.get(t)
          );
        }
        GetAppListCallback(t) {
          return (
            this.m_mapAppListCallback.has(t) ||
              this.m_mapAppListCallback.set(t, new u.lu()),
            this.m_mapAppListCallback.get(t)
          );
        }
        async LoadAllDiscountEvents(t, e) {
          if (this.m_bLoadEventsRequestInFlight) return 29;
          const n =
              p.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetalldiscountevents/" +
              t,
            a = {};
          let s = null;
          try {
            this.m_bLoadEventsRequestInFlight = !0;
            const t = await i().get(n, { params: a, cancelToken: e?.token });
            if (
              ((this.m_bLoadEventsRequestInFlight = !1),
              200 == t?.status && 1 == t.data?.success && t.data.events)
            ) {
              for (const e of t.data.events)
                this.m_mapDiscountEvents.set(e.id, e);
              return (
                (this.m_bLoadedViaInitOrFullLoad = !0),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                1
              );
            }
            s = { response: t };
          } catch (t) {
            s = t;
          }
          const o = (0, c.H)(s);
          return (
            console.error("Could not load Discount Events", o.strErrorMsg, o),
            s?.response?.data?.success ?? 2
          );
        }
        async CreateDiscountEvent(t, e, n, a, s, o, r, l) {
          const u =
              p.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            d = new FormData();
          d.append("sessionid", p.TS.SESSIONID),
            d.append("name", n),
            d.append("start_time", t.toString()),
            d.append("end_time", e.toString()),
            d.append("strJSONDiscountInfo", C(n, a, s, o, r));
          let h = null;
          try {
            const c = await i().post(u, d, {
              withCredentials: !0,
              cancelToken: l?.token,
            });
            if (200 == c?.status && 1 == c.data?.success && c.data.eventid) {
              const i = {
                id: c.data.eventid,
                name: n,
                start_date: t,
                end_date: e,
                appids: r,
                publisherids: o,
                description: s,
                collision_type: "proximity",
                event: g,
                header: a,
                tooltip: m,
                type: D,
                prevent_weeklong: "",
              };
              return (
                this.m_mapDiscountEvents.set(i.id, i),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                i
              );
            }
            h = { response: c };
          } catch (t) {
            h = t;
          }
          const _ = (0, c.H)(h);
          return (
            console.error(
              "CDiscountEventStore.CreateDiscountEvent: failed",
              _.strErrorMsg,
              _,
            ),
            null
          );
        }
        async UpdateDiscountEventPublisherAndAppList(t, e, n, a) {
          const s = this.m_mapDiscountEvents.get(t);
          if (!s)
            return (
              console.error(
                "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                t,
              ),
              null
            );
          const o =
              p.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            r = new FormData();
          r.append("sessionid", p.TS.SESSIONID),
            r.append("start_time", s.start_date.toString()),
            r.append("end_time", s.end_date.toString()),
            r.append(
              "strJSONDiscountInfo",
              (function (t, e, n, a) {
                return JSON.stringify({
                  discount_event: {
                    eventid: t,
                    name: e.name,
                    header: e.header,
                    allowed_appids: a.join(","),
                    allowed_publisherids: n.join(","),
                    description: e.description,
                    collision_type: e.collision_type,
                    event: e.event,
                    tooltip: e.tooltip,
                    type: e.type,
                    prevent_weeklong: e.prevent_weeklong,
                  },
                });
              })(t, s, e, n),
            );
          let l = null;
          try {
            const t = await i().post(o, r, {
              withCredentials: !0,
              cancelToken: a?.token,
            });
            if (200 == t?.status && 1 == t.data?.success && t.data.eventid) {
              const t = { ...s, appids: n, publisherids: e };
              return (
                this.m_mapDiscountEvents.set(t.id, t),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                t
              );
            }
            l = { response: t };
          } catch (t) {
            l = t;
          }
          const u = (0, c.H)(l);
          return (
            console.error(
              "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
              u.strErrorMsg,
              u,
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
            const n =
                p.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventbyid",
              a = { sessionid: p.TS.SESSIONID, discountid: t },
              s = await i().get(n, { params: a, withCredentials: !0 });
            if (
              200 == s?.status &&
              1 == s?.data?.success &&
              s?.data?.discount_event
            )
              return (
                this.m_mapDiscountEvents.set(t, s.data.discount_event),
                this.GetDiscountEventCallback(t).Dispatch(
                  s.data.discount_event,
                ),
                s.data.discount_event
              );
            e = (0, c.H)(s);
          } catch (t) {
            e = (0, c.H)(t);
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
            const n =
                p.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventapplist",
              a = { sessionid: p.TS.SESSIONID, discountid: t },
              s = await i().get(n, { params: a, withCredentials: !0 });
            if (
              200 == s?.status &&
              1 == s?.data?.success &&
              s?.data?.discount_event
            )
              return (
                this.m_mapDiscountEvents.set(t, s.data.discount_event),
                this.m_mapAppList.set(t, s.data.appid_list),
                this.GetDiscountEventCallback(t).Dispatch(
                  s.data.discount_event,
                ),
                this.GetAppListCallback(t).Dispatch(s.data.appid_list),
                {
                  oDiscountEvent: s.data.discount_event,
                  rgAppList: s.data.appid_list,
                }
              );
            e = (0, c.H)(s);
          } catch (t) {
            e = (0, c.H)(t);
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
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
          );
        }
        constructor() {
          "dev" == p.TS.WEB_UNIVERSE && (window.g_DiscountEventStore = this);
        }
        Init() {
          const t = (0, p.Tc)("discount_events", "application_config");
          if (
            (("dev" != p.TS.WEB_UNIVERSE && "beta" != p.TS.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountEventStore loading payload: ",
                t,
              ),
            this.BIsConfigValid(t))
          ) {
            for (const e of t) this.m_mapDiscountEvents.set(e.id, e);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == p.TS.WEB_UNIVERSE &&
              t &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(t) {
          const e = t;
          return !(!e || !Array.isArray(e));
        }
      }
      function _() {
        return h.Get().GetFutureDiscountEvents();
      }
      function f() {
        return h.Get().GetDiscountEventListCallback();
      }
      function E(t) {
        const { rgDiscountEvents: e, eResult: n } = v(0, t);
        let a = [];
        return (
          e?.forEach((t) => {
            "unique" == t.collision_type && (a = a.concat(t));
          }),
          { rgMajorSaleDiscountEvents: a, eResult: n }
        );
      }
      function v(t, e) {
        const n = h.Get().BLoadedViaInitOrFullLoad(),
          [a, s] = o.useState(n ? h.Get().GetAllDiscountEvents() : null),
          [i, r] = o.useState(null),
          c =
            t ||
            Number.parseInt((0, p.Tc)("publisherid", "application_config"));
        (0, d.hL)(h.Get().GetDiscountEventListCallback(), s),
          o.useEffect(() => {
            h.Get().BLoadedViaInitOrFullLoad() ||
              h.Get().LoadAllDiscountEvents(c).then(r);
          }, [a, c]);
        const l = i ?? (a?.length ? 1 : null);
        return o.useMemo(
          () => ({
            rgDiscountEvents: e ? a : h.Get().GetFutureDiscountEvents(),
            eResult: l,
          }),
          [a, l, e],
        );
      }
      function S(t) {
        return h.Get().GetDiscountEvent(t);
      }
      function I(t) {
        const { data: e } = (function (t) {
          const [e, n] = (0, o.useState)(h.Get().GetDiscountEvent(t)),
            [a, s] = o.useState(!!t);
          return (
            o.useEffect(() => {
              if ((!e && t) || (e?.id != t && t)) {
                (async () => {
                  try {
                    const e = await h.Get().LoadSingleDiscountEvent(t);
                    e && n(e);
                  } finally {
                    s(!1);
                  }
                })();
              } else s(!1);
            }, [t, e]),
            (0, d.hL)(h.Get().GetDiscountEventCallback(t), n),
            { data: e, isLoading: a }
          );
        })(t);
        return e;
      }
      function k(t) {
        const [e, n] = (0, o.useState)(h.Get().GetDiscountEvent(t)),
          [a, s] = (0, o.useState)(h.Get().GetAppList(t));
        return (
          (0, o.useEffect)(() => {
            ((!a && t) || (e?.id != t && t)) &&
              h
                .Get()
                .LoadSingleDiscountEventsAppList(t)
                .then((t) => {
                  t && (n(t.oDiscountEvent), s(t.rgAppList));
                });
          }, [e?.id, a, t]),
          (0, d.hL)(h.Get().GetDiscountEventCallback(t), n),
          (0, d.hL)(h.Get().GetAppListCallback(t), s),
          a ? { oDiscountEvent: e, rgAppList: a } : null
        );
      }
      function C(t, e, n, a, s) {
        return JSON.stringify({
          discount_event: {
            name: t,
            publisherids: a?.join(","),
            appids: s?.join(","),
            description: n,
            event: g,
            collision_type: "proximity",
            header: e,
            tooltip: m,
            type: D,
          },
        });
      }
      function G() {
        return { fnCreateDiscountEvent: h.Get().CreateDiscountEvent };
      }
      function P() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            h.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, a.Cg)([l.o], h.prototype, "GetDiscountEvent", null),
        (0, a.Cg)([l.o], h.prototype, "GetAppList", null),
        (0, a.Cg)([l.o], h.prototype, "CreateDiscountEvent", null),
        (0, a.Cg)(
          [l.o],
          h.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
    6319: (t, e, n) => {
      "use strict";
      n.d(e, {
        D6: () => I,
        DC: () => P,
        EF: () => E,
        G7: () => f,
        Iy: () => v,
        O4: () => G,
        _q: () => b,
        dN: () => C,
        es: () => w,
        fw: () => R,
        k: () => S,
        kJ: () => k,
        ms: () => L,
        uL: () => _,
      });
      var a = n(34629),
        s = n(41735),
        i = n.n(s),
        o = n(14947),
        r = n(90626),
        c = n(20194),
        l = n(62490),
        u = n(44332),
        d = n(68797),
        p = n(6419),
        g = n(6144),
        m = n(73745),
        D = n(78327),
        h = n(4434);
      class _ {
        constructor() {
          (0, o.Gn)(this);
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
          const n = this.GetSingleAppRegistrationKey(t, e);
          return (
            this.m_mapSingleAppRegistrationChange.has(n) ||
              this.m_mapSingleAppRegistrationChange.set(n, new g.lu()),
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
            a = t[0];
          return (
            e.forEach((e, s) => {
              if (e == t.length) {
                let t = this.m_mapRegistrations.get(a).get(s);
                (0, u.w)(t, "Missing OptIn Restration"), n.set(s, t);
              }
            }),
            n.size > 0 ? n : null
          );
        }
        BHasOptionOnRegistration(t, e, n) {
          const a = this.GetRegistration(t, e);
          return (
            !(!a || !a.opt_in) &&
            (!n ||
              a?.jsondata?.dynamic_selection?.some(
                (t) =>
                  t &&
                  t.section_id == n.section_id &&
                  t.list_selection?.some(
                    (t) =>
                      t &&
                      t.list_id == n.list_id &&
                      t.selected_item_id?.includes(n.option_id),
                  ),
              ))
          );
        }
        BHasOptInTrailer(t, e) {
          const n = this.GetRegistration(t, e);
          return Boolean(
            n &&
              n.opt_in &&
              n.jsondata?.trailer_permission &&
              n.jsondata.rtime_granting_trailer,
          );
        }
        BHasOptInDemo(t, e) {
          const n = this.GetRegistration(t, e);
          return Boolean(
            n &&
              n.opt_in &&
              n.jsondata?.demo_permission &&
              n.jsondata.rtime_granting_demo,
          );
        }
        BHasOptInGameProfile(t, e) {
          const n = this.GetRegistration(t, e);
          return Boolean(
            n &&
              n.opt_in &&
              n.jsondata?.game_profile_intent &&
              n.jsondata.rtime_granting_profile,
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
          let a = n.get(e);
          return (
            a
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  a,
                )
              : (a = this.CreateRegistrationNotSaved(t, e)),
            a
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(t, e) {
          let n = this.m_mapRegistrations.get(t);
          n ||
            ((n = new Map()),
            this.m_mapRegistrations.set(t, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let a = n.get(e);
          return (
            a
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  a,
                )
              : ((a = this.CreateRegistrationNotSaved(t, e)), n.set(e, a)),
            a
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
          const n = e.map((e) =>
            e.jsondata && "" !== e.jsondata
              ? { ...e, jsondata: JSON.parse(e.jsondata) }
              : { ...e, jsondata: { opt_in_name: t } },
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
        async FetchOptInRegistrationForOptIn(t, e) {
          const n =
              D.TS.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
            a = { sessionid: D.TS.SESSIONID, opt_in_name: t, opt_in_only: e },
            s = await i().get(n, { params: a, withCredentials: !0 });
          return s?.data?.data
            ? this.UpdateRegAndTrackInStore(t, s.data.data)
            : s?.data?.data;
        }
        async FetchPendingReviewOptInRegistrationn(t) {
          const e =
              D.TS.PARTNER_BASE_URL + "optin/ajaxgetpendingreviewregistrations",
            n = { sessionid: D.TS.SESSIONID, opt_in_name: t },
            a = await i().get(e, { params: n, withCredentials: !0 });
          return a?.data?.data
            ? this.UpdateRegAndTrackInStore(t, a.data.data)
            : a?.data?.data;
        }
        async LoadOptInRegistration(t, e, n) {
          if (this.GetRegistration(e, t)) return !0;
          const a = this.m_mapRequestedAppIDs.get(t)?.get(e);
          if (a) return a;
          try {
            const a = D.TS.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
              s = { sessionid: D.TS.SESSIONID, appid: e, opt_in_name: t },
              o = await i().get(a, {
                params: s,
                withCredentials: !0,
                cancelToken: n?.token,
              });
            if (1 == o?.data?.success && o.data.optin_registration) {
              if (
                ("string" == typeof o.data.optin_registration.jsondata &&
                  (o.data.optin_registration.jsondata = JSON.parse(
                    o.data.optin_registration.jsondata,
                  )),
                this.m_mapRegistrations.has(e))
              )
                this.m_mapRegistrations
                  .get(e)
                  .set(t, o.data.optin_registration);
              else {
                const n = new Map();
                n.set(t, o.data.optin_registration),
                  this.m_mapRegistrations.set(e, n),
                  this.GetLoadCountChange().Dispatch(
                    this.m_mapRegistrations.size,
                  );
              }
              return !0;
            }
            {
              const t = (0, d.H)(o);
              console.error(
                "LoadOptInRegistration : failed with a response and: " +
                  t.strErrorMsg,
                t,
              );
            }
          } catch (t) {
            const e = (0, d.H)(t);
            console.error(
              "LoadOptInRegistration : failed with " + e.strErrorMsg,
              e,
            );
          }
          return !1;
        }
        async LoadMultiOptInRegistration(t, e, n, a) {
          if (0 == e.length || 0 == t.length) return !1;
          let s = null;
          const o = new Promise((t, e) => {
            s = t;
          });
          (t = l.Ew(t).sort()),
            (e = l.Ew(e).sort()),
            t.forEach((t) => {
              this.m_mapRequestedAppIDs.has(t) ||
                this.m_mapRequestedAppIDs.set(t, new Map());
            });
          let r = new Array();
          if (
            (e.forEach((e) => {
              t.some(
                (t) =>
                  !this.BHasOptInRegistration(e, t) &&
                  !this.GetOptInRegistrationPromise(e, t),
              ) &&
                (r.push(e),
                t.forEach((t) => this.m_mapRequestedAppIDs.get(t).set(e, o)));
            }),
            0 == r.length)
          )
            return !0;
          const c =
            D.TS.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
          let u = null;
          try {
            for (; r.length > 0; ) {
              let e = 0;
              const s = [];
              for (; r.length > 0 && e < 5; ) {
                const a = r.splice(0, 50),
                  o = {
                    rgOptInNames: t.join(","),
                    rgAppIDs: a.join(","),
                    origin: self.origin,
                  };
                s.push(
                  i().get(c, {
                    params: o,
                    withCredentials: !0,
                    cancelToken: n?.token,
                  }),
                ),
                  (e += 1);
              }
              const o = await Promise.all(s);
              for (const t of o) {
                if (
                  200 != t?.status ||
                  1 != t.data?.success ||
                  !t.data.optin_registrations?.length
                ) {
                  u = { response: t };
                  break;
                }
                this.InternalAddRegistrations(t.data.optin_registrations, a);
              }
              this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size);
            }
          } catch (t) {
            u = t;
          }
          if (null == u) s(!0);
          else {
            const n = (0, d.H)(u);
            console.error(
              "Could not load OptIn for Apps",
              e,
              t,
              n.strErrorMsg,
              n,
            ),
              s(!1);
          }
          return o;
        }
        async RegisterAppForOptIn(t, e) {
          const n = {
            opt_in_name: e.startsWith("sale_") ? e : "sale_" + e,
            opt_in: !0,
          };
          return this.UpdateOptInRegistration(t, n);
        }
        async UpdateOptInRegistration(t, e) {
          let n = null;
          try {
            const a = new FormData();
            a.append("sessionid", D.TS.SESSIONID),
              Object.keys(e).forEach((t) => a.append(t, e[t]));
            const s =
                D.TS.PARTNER_BASE_URL +
                "optin/ajaxupdateoptinregistration/" +
                t,
              o = await i().post(s, a, { withCredentials: !0 });
            if (200 == o?.status && 1 == o.data?.success) return null;
            n = (0, d.H)(o);
          } catch (t) {
            n = (0, d.H)(t);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateOptInRegistration error " +
                n.strErrorMsg,
              n,
            ),
            n.strErrorMsg
          );
        }
        async UpdateOptInRegistrationJson(t, e, n = !1) {
          let a = null;
          try {
            const s = new FormData();
            s.append("sessionid", D.TS.SESSIONID),
              s.append("appid", "" + t),
              s.append("opt_in_name", e.opt_in_name),
              s.append("jsondata", JSON.stringify(e)),
              n && s.append("bCreatePendingInvite", "true");
            const o =
                D.TS.PARTNER_BASE_URL +
                "optin/ajaxupdateoptinregistrationpayload/" +
                t,
              r = await i().post(o, s, { withCredentials: !0 });
            if (200 == r?.status && 1 == r.data?.success) {
              const n = e.opt_in_name.startsWith("sale_")
                  ? e.opt_in_name
                  : "sale_" + e.opt_in_name,
                a = this.m_mapRegistrations.get(t).get(n);
              a.jsondata = e;
              const s = { ...a };
              return (
                this.m_mapRegistrations.get(t).set(e.opt_in_name, s),
                this.GetSingleAppRegistrationChange(t, e.opt_in_name).Dispatch(
                  s,
                ),
                null
              );
            }
            a = (0, d.H)(r);
          } catch (t) {
            a = (0, d.H)(t);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateOptInRegistrationJson error " +
                a.strErrorMsg,
              a,
            ),
            a.strErrorMsg
          );
        }
        async UpdateAppealState(t, e, n) {
          let a = null;
          try {
            const s = e.opt_in_name || e.jsondata.opt_in_name,
              o = new FormData();
            o.append("sessionid", D.TS.SESSIONID),
              o.append("appid", "" + t),
              o.append("opt_in_name", s),
              o.append("approved", "" + n);
            const r =
                D.TS.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
              c = await i().post(r, o, { withCredentials: !0 });
            if (200 == c?.status && 1 == c.data?.success) {
              const e = { ...this.m_mapRegistrations.get(t).get(s) };
              return (
                (e.accountid_appeal = D.iA.accountid),
                (e.appeal_state = n ? 1 : 2),
                this.m_mapRegistrations.get(t).set(s, e),
                this.GetSingleAppRegistrationChange(t, s).Dispatch(e),
                !0
              );
            }
            a = (0, d.H)(c);
          } catch (t) {
            a = (0, d.H)(t);
          }
          return (
            console.error(
              "COptInRegistrations::UpdateAppealState error " + a.strErrorMsg,
              a,
            ),
            !1
          );
        }
        static Get() {
          return (
            _.s_OptInRegs ||
              ((_.s_OptInRegs = new _()),
              (window.COptInRegistrations = _.s_OptInRegs),
              _.s_OptInRegs.Init()),
            _.s_OptInRegs
          );
        }
        InternalAddRegistrations(t, e) {
          const n = new Set();
          t.forEach((t) => {
            if (!Number.isNaN(t.appid)) {
              let a = this.m_mapRegistrations.get(t.appid);
              if (
                (a ||
                  ((a = new Map()), this.m_mapRegistrations.set(t.appid, a)),
                t.jsondata && "string" == typeof t.jsondata)
              ) {
                const e = t.jsondata;
                0 == e.trim().length
                  ? (t.jsondata = {})
                  : (t.jsondata = JSON.parse(e));
              }
              a.set(t.opt_in_name, t), e && e.Increment(), n.add(t.opt_in_name);
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
              (0, D.Tc)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(t) &&
            (this.InternalAddRegistrations(t),
            "dev" == D.TS.WEB_UNIVERSE &&
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
      function f(t, e) {
        const n = t.jsondata?.dynamic_selection;
        try {
          if (n) {
            const t = n
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
          console.log("error: dynamic section", n, t, e);
        }
        return [];
      }
      function E() {
        return r.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: _.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function v(t, e, n) {
        const [a, s] = r.useState(null),
          i = (0, h.m)("useMultiLoadOptInAppReg");
        return (
          (0, r.useEffect)(() => {
            const a = e?.filter(Boolean);
            a?.length > 0 && t?.length > 0
              ? _.Get()
                  .LoadMultiOptInRegistration(
                    a.map(() => t),
                    a,
                    i,
                    n,
                  )
                  .then(() => {
                    const e = new Map();
                    a.forEach((n) => {
                      const a = _.Get().GetRegistration(n, t);
                      a && e.set(n, a);
                    }),
                      s(e);
                  })
              : s(new Map());
          }, [t, e, i, n]),
          a
        );
      }
      function S(t) {
        const [e, n] = r.useState(_.Get().GetAllOptInRegistrations(t));
        return (
          (0, m.hL)(_.Get().GetOptInNameRegistrationsCallbackList(t), n), e
        );
      }
      function I(t) {
        const e = S(t),
          [n, a] = r.useState({
            nAppOptedIn: 0,
            nAppEligible: 0,
            nAppOptedOut: 0,
            nAppIneligible: 0,
          });
        return (
          r.useEffect(() => {
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
                JSON.stringify(t) != JSON.stringify(n) && a(t);
            }
          }, [e, n]),
          n
        );
      }
      function k(t, e) {
        const n = (0, c.I)({
          queryKey: ["useAllOptInRegistrationByName", t, Boolean(e)],
          queryFn: () => _.Get().FetchOptInRegistrationForOptIn(t, e),
          staleTime: 36e5,
        });
        return n.isLoading ? null : n.data;
      }
      function C(t) {
        const e = (0, c.I)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", t],
          queryFn: () => _.Get().FetchPendingReviewOptInRegistrationn(t),
          retry: !1,
          staleTime: 36e5,
          enabled: t?.length > 0,
        });
        return {
          rgPendingReviewRegistrations: e.isLoading ? null : e.data,
          bIsInError: e.isError,
        };
      }
      function G(t, e) {
        const n = k(t, !1),
          [a, s] = (0, r.useState)(n?.find((t) => t.appid == e));
        return (0, m.hL)(_.Get().GetSingleAppRegistrationChange(e, t), s), a;
      }
      function P(t, e) {
        const [n, a] = (0, r.useState)(
          _.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e),
        );
        return (0, m.hL)(_.Get().GetSingleAppRegistrationChange(t, e), a), n;
      }
      function b(t, e) {
        const [n, a] = (0, r.useState)(
          _.Get().GetExistingOptInRegistartion(t, e),
        );
        return (0, m.hL)(_.Get().GetSingleAppRegistrationChange(t, e), a), n;
      }
      function w() {
        return {
          fnUpdateOptInRegistrationJson: _.Get().UpdateOptInRegistrationJson,
        };
      }
      function R() {
        return { fnUpdateAppealState: _.Get().UpdateAppealState };
      }
      function L() {
        const [t, e] = (0, r.useState)(_.Get().GetLoadCount());
        return (
          (0, m.hL)(_.Get().GetLoadCountChange(), e), _.Get().GetLoadCount()
        );
      }
      (0, a.Cg)(
        [p.o],
        _.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, a.Cg)(
          [p.o],
          _.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, a.Cg)([p.o], _.prototype, "LoadMultiOptInRegistration", null),
        (0, a.Cg)([p.o], _.prototype, "UpdateOptInRegistrationJson", null),
        (0, a.Cg)([p.o], _.prototype, "UpdateAppealState", null),
        (0, a.Cg)([o.XI], _.prototype, "Init", null);
    },
    48996: (t, e, n) => {
      "use strict";
      n.d(e, {
        $U: () => v,
        $p: () => O,
        CW: () => T,
        Fk: () => L,
        Ko: () => f,
        Lj: () => E,
        Mh: () => k,
        XA: () => y,
        XL: () => B,
        a8: () => b,
        aU: () => R,
        gr: () => P,
        hC: () => w,
        iI: () => I,
        qN: () => S,
        qT: () => m,
        sZ: () => D,
        sk: () => A,
        w8: () => C,
        zq: () => G,
        zy: () => F,
      });
      var a = n(41735),
        s = n.n(a),
        i = n(90626),
        o = n(44165),
        r = n(68797),
        c = n(6144),
        l = n(73745),
        u = n(41338),
        d = n(78327),
        p = n(62490),
        g = n(14771);
      const m = 95,
        D = 10;
      class h {
        m_mapPackageDiscountsById = new Map();
        m_mapDiscountCallbackList = new Map();
        m_mapPackageDiscountsByPackageId = new Map();
        m_mapPackageCallbackList = new Map();
        m_mapPackageDiscountsByDiscountEventId = new Map();
        m_mapDiscountEventCallbackList = new Map();
        m_allDiscountCallbackList = new c.lu();
        m_mapMaxDiscountPercentageByPackageId = new Map();
        m_mapExistingPackageRequests = new Map();
        static s_Singleton;
        static Get() {
          return (
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
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
          const n = new Set(),
            a = new Set();
          for (const e of t)
            e.discountEventID?.length || (e.discountEventID = _(e)),
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
              n.add(e.packageID),
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
          for (const t of e ?? [])
            this.m_mapPackageDiscountsByPackageId.has(t) ||
              this.m_mapPackageDiscountsByPackageId.set(t, new Map()),
              n.add(t);
          n.forEach((t) =>
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
          this.m_mapPackageDiscountsById.delete(t),
            this.m_mapPackageDiscountsByPackageId.get(e)?.delete(t),
            this.m_mapPackageDiscountsByDiscountEventId.get(n)?.delete(t),
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
        async LoadPackageDiscounts(t, e, n = 0) {
          const a = p.Ew(t).sort().join(",");
          return (
            this.m_mapExistingPackageRequests.has(a) ||
              this.m_mapExistingPackageRequests.set(
                a,
                this.InternalLoadPackageDiscounts(t, e, n),
              ),
            this.m_mapExistingPackageRequests.get(a)
          );
        }
        async InternalLoadPackageDiscounts(t, e, n = 0) {
          const a = new Set();
          for (const e of t)
            this.m_mapPackageDiscountsByPackageId.has(e) || 0 == e || a.add(e);
          const i = Array.from(a).sort();
          if (0 == i.length) return 1;
          let o = null;
          const c = new Promise((t, e) => {
              o = t;
            }),
            l = (0, d.Tc)("publisherid", "application_config"),
            u =
              d.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetpackagediscounts/" +
              l;
          let p = null,
            g = null;
          try {
            const t = [],
              o = new Array();
            for (; i.length > 0; ) {
              const a = i.splice(0, 50);
              o.push(a);
              const r = { packageids: a.join(","), origin: self.origin };
              t.push(
                s().get(u, {
                  params: r,
                  withCredentials: !0,
                  cancelToken: e?.token,
                  timeout: n,
                }),
              );
            }
            const r = await Promise.all(t),
              c = [];
            for (const t of r) {
              if (
                ((g = o.unshift()),
                200 != t?.status || 1 != t.data?.success || !t.data.discounts)
              ) {
                p = { response: t };
                break;
              }
              t.data.discounts.forEach((t) => c.push(t));
            }
            null == p && this.InternalAddDiscounts(c, Array.from(a));
          } catch (t) {
            p = t;
          }
          if (null == p) o(1);
          else {
            const t = (0, r.H)(p);
            console.error(
              "Could not load Discounts for packages",
              g,
              t.strErrorMsg,
              t,
            ),
              o(p?.response?.data?.success ?? 2);
          }
          return c;
        }
        async SaveDiscountToServer(t, e) {
          const n =
              d.TS.PARTNER_BASE_URL +
              "packages/createoreditdiscount/" +
              t.packageID,
            a = new FormData();
          a.append("sessionid", d.TS.SESSIONID),
            t.nDiscountID && a.append("id", t.nDiscountID.toString()),
            a.append("name", t.strDiscountName),
            a.append("description", t.strDiscountDescription),
            t.discountEventID &&
              !f(t.discountEventID) &&
              a.append("type", t.discountEventID),
            a.append("percent", t.nDiscountPct.toString()),
            a.append("start_date", new Date(1e3 * t.rtStartDate).toISOString()),
            a.append("end_date", new Date(1e3 * t.rtEndDate).toISOString());
          let i = null;
          try {
            const o = await s().post(n, a, {
              withCredentials: !0,
              cancelToken: e?.token,
            });
            if (
              ((o.data.msg = o.data.msg ?? o.data.message),
              200 == o?.status && 1 == o.data?.success && o.data.discountid)
            )
              return (
                (t.bChangedLocally = !1),
                (t.nDiscountID = o.data.discountid),
                (t.nDiscountPct = o.data.percentage),
                this.InternalAddDiscounts([t]),
                o.data
              );
            i = { response: o };
          } catch (t) {
            i = t;
          }
          const o = (0, r.H)(i);
          return (
            console.error(
              "CPackageDiscountStore.SaveDiscountToServer: failed",
              o.strErrorMsg,
              o,
            ),
            i?.response?.data ?? { success: 2 }
          );
        }
        async DeleteDiscountOnServer(t, e, n, a) {
          const i =
              d.TS.PARTNER_BASE_URL + "packages/removepackagediscount/" + e,
            o = new FormData();
          o.append("sessionid", d.TS.SESSIONID),
            o.append("discountid", t.toString());
          let c = null;
          try {
            const r = await s().post(i, o, {
              withCredentials: !0,
              cancelToken: a?.token,
            });
            if (200 == r?.status && 1 == r.data?.success)
              return this.InternalDeleteDiscount(t, e, n), r.data;
            c = { response: r };
          } catch (t) {
            c = t;
          }
          const l = (0, r.H)(c);
          return (
            console.error(
              "CPackageDiscountStore.DeleteDiscountOnServer: failed",
              l.strErrorMsg,
              l,
            ),
            c?.response?.data ?? { success: 2 }
          );
        }
        GetCallbackListForDiscount(t) {
          return (
            this.m_mapDiscountCallbackList.has(t) ||
              this.m_mapDiscountCallbackList.set(t, new c.lu()),
            this.m_mapDiscountCallbackList.get(t)
          );
        }
        GetCallbackListForPackage(t) {
          return (
            this.m_mapPackageCallbackList.has(t) ||
              this.m_mapPackageCallbackList.set(t, new c.lu()),
            this.m_mapPackageCallbackList.get(t)
          );
        }
        GetCallbackListForDiscountEvent(t) {
          return (
            this.m_mapDiscountEventCallbackList.has(t) ||
              this.m_mapDiscountEventCallbackList.set(t, new c.lu()),
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
          const e = m;
          return this.m_mapMaxDiscountPercentageByPackageId.get(t) ?? e;
        }
        GetMaxDiscountPercentageForGroup(t) {
          const e = t.map((t) => this.GetMaxDiscountPercentage(t));
          return Math.min(...e);
        }
      }
      function _(t) {
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, u.Yz)(t.strDiscountName)}`;
      }
      function f(t) {
        return t.startsWith("custom-event-");
      }
      function E(t) {
        return h.Get().GetDiscountByID(t);
      }
      function v(t) {
        return h.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function S(t) {
        return h.Get().GetAllDiscountsForPackage(t);
      }
      function I(t) {
        return h.Get().GetCallbackListForPackage(t);
      }
      function k() {
        return h.Get().GetAllDiscountsForAllPackages();
      }
      function C() {
        return h.Get().GetGlobalCallbackList();
      }
      function G() {
        return i.useCallback(
          (t, e, n) => h.Get().LoadPackageDiscounts(t, e, n),
          [],
        );
      }
      function P() {
        const t = (t) => h.Get().SaveDiscountToServer(t),
          e = (t, e, n) => h.Get().DeleteDiscountOnServer(t, e, n);
        return i.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          [],
        );
      }
      function b(t) {
        return new Map(
          Array.from(t.map((t) => [t, h.Get().GetDiscountByID(t)])),
        );
      }
      function w(t) {
        const e = (0, o.f1)(),
          [n, a] = i.useState(h.Get().GetAllDiscountsForPackage(t));
        return (
          (0, l.hL)(h.Get().GetCallbackListForPackage(t), a),
          i.useMemo(() => {
            let t = null;
            if (null == n) return { deepestDiscount: t, bLoading: !0 };
            if (n?.length > 0)
              for (const a of n)
                a.rtEndDate > e ||
                  a.nDiscountPct <= 0 ||
                  ((null == t ||
                    a.nDiscountPct > t.nDiscountPct ||
                    (a.nDiscountPct == t.nDiscountPct &&
                      a.rtEndDate > t.rtEndDate)) &&
                    (t = a));
            return { deepestDiscount: t, bLoading: !1 };
          }, [t, e, n])
        );
      }
      function R(t) {
        const e = (0, o.f1)();
        if (!t) return null;
        let n = null;
        return (
          t.forEach((t) => {
            const a = h.Get().GetAllDiscountsForPackage(t);
            if (a?.length > 0)
              for (const t of a)
                t.rtEndDate > e ||
                  t.nDiscountPct <= 0 ||
                  ((null == n ||
                    t.nDiscountPct > n.nDiscountPct ||
                    (t.nDiscountPct == n.nDiscountPct &&
                      t.rtEndDate > n.rtEndDate)) &&
                    (n = t));
          }),
          n
        );
      }
      function L(t, e, n) {
        const [a, s] = (0, i.useState)(),
          [o, r] = (0, i.useState)([]);
        return (
          (0, i.useEffect)(() => {
            if (e < n && t?.length > 0) {
              let a = new Array(),
                i = new Array(),
                o = new Array();
              for (let t = e; t < n; t += g.Kp.PerDay) a.push(t), i.push(!1);
              t.forEach((t) => {
                const s = h.Get().GetAllDiscountsForPackage(t);
                if (s?.length > 0)
                  for (const t of s)
                    t.rtStartDate > n ||
                      t.rtEndDate < e ||
                      (o.push(t),
                      a.forEach((e, n) => {
                        e < t.rtEndDate &&
                          t.rtStartDate < e + g.Kp.PerDay &&
                          (i[n] = !0);
                      }));
              }),
                r(o),
                s(i.filter((t) => !0 === t).length);
            } else s(0);
          }, [t, e, n]),
          { nDaysInDiscount: a, rgDiscountWithOverlap: o }
        );
      }
      function y(t) {
        const e = (0, o.f1)(),
          [n, a] = i.useState(h.Get().GetAllDiscountsForAllPackages());
        return (
          (0, l.hL)(h.Get().GetGlobalCallbackList(), a),
          i.useMemo(() => {
            let a = null;
            if (null == n) return { mostRecentDiscount: a, bLoading: !0 };
            for (const n of t) {
              const t = h.Get().GetAllDiscountsForPackage(n) ?? [];
              for (const n of t)
                n.rtStartDate &&
                  n.rtEndDate &&
                  n.nDiscountPct &&
                  n.rtStartDate < e &&
                  (!a || a.rtEndDate < n.rtEndDate) &&
                  (a = n);
            }
            return { mostRecentDiscount: a, bLoading: !1 };
          }, [e, t, n])
        );
      }
      function A(t) {
        const [e, n] = i.useState(h.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, l.hL)(h.Get().GetCallbackListForDiscountEvent(t), n), e;
      }
      function T(t) {
        const [e, n] = i.useState(h.Get().GetAllDiscountsForPackage(t));
        (0, l.hL)(h.Get().GetCallbackListForPackage(t), n);
        const [a, o] = i.useState(!1),
          r = G();
        return (
          i.useEffect(() => {
            if (!e && t) {
              if (!a && r) {
                const e = s().CancelToken.source();
                r([t]).then(() => {
                  e.token.reason || o(!0);
                });
              }
            } else a || o(!0);
          }, [e, a, o, t, r]),
          e
        );
      }
      function O(t) {
        return h.Get().GetMaxDiscountPercentage(t);
      }
      function B(t) {
        return t.some(
          (t) => t.nDiscountPct > h.Get().GetMaxDiscountPercentage(t.packageID),
        );
      }
      function F(t) {
        return h.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    87924: (t, e, n) => {
      "use strict";
      n.d(e, {
        C5: () => H,
        Gq: () => U,
        QD: () => y,
        T1: () => E,
        WV: () => w,
        ZM: () => R,
        _9: () => x,
        bA: () => b,
        ew: () => A,
        gr: () => F,
        i3: () => T,
        l4: () => L,
        nu: () => v,
        ve: () => B,
        wF: () => N,
        wk: () => V,
        zP: () => O,
      });
      var a = n(33428),
        s = n(6319),
        i = n(48996),
        o = n(96745),
        r = n(7247),
        c = n(70986),
        l = n(90626),
        u = n(44165),
        d = n(82097),
        p = n(6144),
        g = n(73745),
        m = n(41338),
        D = n(14771),
        h = n(78327),
        _ = n(43552);
      function f(t, e) {
        return (
          (!e && 0 == (t?.nDiscountPct ?? 0)) ||
          (!!e && e.nDiscountPct == t?.nDiscountPct)
        );
      }
      const E = 30,
        v = E * D.Kp.PerDay - 1.5 * D.Kp.PerHour,
        S = 10 * D.Kp.PerMinute;
      class I {
        m_mapPackageStateForDiscountEvents = new Map();
        m_mapLocalPackageDiscountOverrides = new Map();
        m_mapDiscountPackageCallbackList = new Map();
        m_mapDiscountGridCellCallbackList = new Map();
        m_mapDiscountEventColumnCallbackList = new Map();
        m_localPackageDiscountOverrideCallbackList = new p.lu();
        static s_Singleton;
        static s_initializationCallbackList = new p.lu();
        static Get() {
          return (
            I.s_Singleton || ((I.s_Singleton = new I()), I.s_Singleton.Init()),
            I.s_Singleton
          );
        }
        static IsInitialized() {
          return !!I.s_Singleton;
        }
        constructor() {
          "dev" == h.TS.WEB_UNIVERSE && (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const t of (0, o.OM)())
            I.Get().ComputePackageState(t),
              (0, i.iI)(t).Register(() => {
                I.Get().ComputePackageState(t);
              });
          (0, _.ou)().Register(() => {
            for (const t of (0, o.OM)()) I.Get().ComputePackageState(t, !0);
          }),
            I.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(t, e, n) {
          const a = I.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e);
          if (1 != a?.eState)
            return (
              console.error(
                "Cannot change discount in current state:",
                a.eState,
              ),
              null
            );
          const s = a.discount,
            i = (0, _.Z6)(e),
            o = {
              nDiscountID: s?.nDiscountID,
              packageID: t,
              nDiscountPct: n,
              strDiscountName: i.name,
              strDiscountDescription: i.description,
              rtStartDate: i.start_date,
              rtEndDate: i.end_date,
              discountEventID: i.id,
              bChangedLocally: !0,
            };
          return f(o, s)
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
          let n = 0;
          return (
            e.forEach((t, e) => {
              1 == t.eState && (n = Math.max(n, t.discount?.nDiscountPct || 0));
            }),
            n
          );
        }
        GetLocalPackageDiscountOverrides() {
          const t = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((e) =>
              e.forEach((e) => {
                f(e, e.nDiscountID && (0, i.Lj)(e.nDiscountID)) || t.push(e);
              }),
            ),
            t.sort(P),
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
          const n = Array.from(this.m_mapPackageStateForDiscountEvents.values())
            .map((t) => t.get(e))
            .filter((e) => e?.nBaseAppID == t)
            .map((t) => t.packageID);
          n?.forEach((t) => this.ComputePackageState(t));
        }
        GetPackageDiscountsIncludingOverrides(t) {
          const e = (0, u.sB)() - v,
            n = (0, i.qN)(t);
          if (!n) return null;
          const a = new Map(
            n.filter((t) => t.rtEndDate > e).map((t) => [t.discountEventID, t]),
          );
          return (
            this.m_mapLocalPackageDiscountOverrides.get(t)?.forEach((t, e) => {
              f(t, a.get(e)) || a.set(e, t);
            }),
            a
          );
        }
        GetDiscountGridCellCallbackList(t, e) {
          if (!t || !e) return null;
          this.m_mapDiscountGridCellCallbackList.has(t) ||
            this.m_mapDiscountGridCellCallbackList.set(t, new Map());
          const n = this.m_mapDiscountGridCellCallbackList.get(t);
          return n.has(e) || n.set(e, new p.lu()), n.get(e);
        }
        GetDiscountPackageCallbackList(t) {
          if (!t) return null;
          let e = this.m_mapDiscountPackageCallbackList.get(t);
          return (
            e ||
              ((e = new p.lu()),
              this.m_mapDiscountPackageCallbackList.set(t, e)),
            e
          );
        }
        GetDiscountEventColumnCallbackList(t) {
          return t
            ? (this.m_mapDiscountEventColumnCallbackList.has(t) ||
                this.m_mapDiscountEventColumnCallbackList.set(t, new p.lu()),
              this.m_mapDiscountEventColumnCallbackList.get(t))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(t) {
          const e = [];
          return (
            I.Get().m_mapPackageStateForDiscountEvents.forEach((n, a) =>
              e.push(n.get(t)),
            ),
            e
          );
        }
        ComputePackageState(t, e) {
          const n = d.A.Get().GetPackage(t);
          if (!n) return;
          const i = (0, _.E1)(),
            o = (0, r.i$)(n),
            c = o.nBaseAppID;
          let l = c && s.uL.Get().GetOptInRegistrationAndEligibilityForApp(c);
          c ||
            l ||
            (l = s.uL
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                n.GetIncludedAppIDs(),
              ));
          const u = this.GetPackageDiscountsIncludingOverrides(t),
            p = !u,
            g = p
              ? null
              : Array.from(u.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const m = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const s of i) {
            if (e && m.has(s.id)) continue;
            const i = { packageID: t, discountEventID: s.id, nBaseAppID: c };
            if (
              ((i.discount = u?.get(s.id)),
              (i.bChangedLocally = !!i.discount?.bChangedLocally),
              p)
            )
              i.eState = 0;
            else if (i.discount?.nDiscountPct > 0) {
              i.eState = 1;
              const t = s.opt_in_name && l?.get(s.opt_in_name);
              t && (i.optInReg = t);
            } else {
              if (((i.eState = 1), G(s, n))) i.eState = 10;
              else if (s.opt_in_name) {
                const { ePackageDiscountState: t, optInRegistration: e } = C(
                  s.opt_in_name,
                  l,
                  n,
                  o,
                  s,
                );
                (i.eState = t), (i.optInReg = e);
              }
              if (10 != i.eState && 4 != i.eState && 5 != i.eState) {
                const e = k(t, s, g);
                1 != e.ePackageDiscountState &&
                  ((i.eState = e.ePackageDiscountState),
                  (i.rgConflictDetails = e.rgConflictingDiscounts.map(
                    (t) =>
                      (0, a.E7)(t.discountEventID)?.name ?? t.strDiscountName,
                  )));
              }
            }
            (D = i),
              (h = m.get(s.id)),
              (!!D == !!h &&
                D?.packageID == h?.packageID &&
                D?.discountEventID == h?.discountEventID &&
                D?.eState == h?.eState &&
                D?.rgConflictDetails?.length == h?.rgConflictDetails?.length &&
                D?.optInReg == h?.optInReg &&
                f(D?.discount, h?.discount) &&
                D?.nBaseAppID == h?.nBaseAppID &&
                D?.bChangedLocally == h?.bChangedLocally) ||
                (m.set(s.id, i),
                this.GetDiscountPackageCallbackList(t).Dispatch(),
                this.GetDiscountGridCellCallbackList(t, s.id).Dispatch(i),
                this.GetDiscountEventColumnCallbackList(s.id).Dispatch(
                  this.GetAllPackageStatesForDiscountEvent(s.id),
                ));
          }
          var D, h;
        }
        GetAvailableDiscountEventsInRange(t, e, n) {
          const a = this.m_mapPackageStateForDiscountEvents.get(t),
            s = new Set([1, 11, 2, 3]);
          return (0, _.E1)()
            .filter(
              (t) =>
                e <= t.start_date &&
                t.end_date <= n &&
                s.has(a.get(t.id).eState),
            )
            .map((t) => t.id);
        }
        GetFurthestCooldownFromPastDiscounts(t) {
          const e = (0, u.sB)();
          let n = e;
          return (
            t
              .filter((t) => t.rtStartDate < e)
              .filter((t) => {
                const e = (0, a.E7)(t.discountEventID);
                return "unique" != e?.collision_type;
              })
              .forEach((t) => {
                t.rtEndDate + v < n && (n = t.rtEndDate + v);
              }),
            n
          );
        }
        GetFutureDiscountRanges(t) {
          const e = d.A.Get().GetPackage(t),
            n = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !n) return [];
          const s = Array.from(n.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate,
            ),
            i = (0, u.sB)(),
            o = Math.max(
              i,
              e.GetReleaseDateRTime() + v,
              (0, _.zL)(t) + v,
              this.GetFurthestCooldownFromPastDiscounts(s),
            ),
            r = [],
            l = new Set();
          let p = o;
          for (let e = 0; e < s.length; e++) {
            const n = s[e];
            if (0 == n.nDiscountPct) continue;
            if (n.rtStartDate < o) continue;
            const i = (0, a.E7)(n.discountEventID);
            let u = n.rtStartDate - v;
            const d = "unique" == i?.collision_type;
            if (d && ((u = n.rtStartDate + S), e + 1 < s.length)) {
              const t = s[e + 1],
                n = (0, _.Z6)(t.discountEventID);
              "unique" != n?.collision_type &&
                (u = Math.min(u, t.rtStartDate - v));
            }
            if (p + D.Kp.PerDay < u) {
              const e = {
                bIsAvailable: !0,
                rtStartDate: p,
                rtEndDate: u,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  t,
                  p,
                  u,
                ),
              };
              r.push(e), e.rgDiscountEventIDs.forEach((t) => l.add(t));
            }
            const g = {
              bIsAvailable: !1,
              rtStartDate: n.rtStartDate,
              rtEndDate: n.rtEndDate,
              discount: n,
              rgDiscountEventIDs: [n.discountEventID],
            };
            if (
              (r.push(g),
              l.add(n.discountEventID),
              (p = n.rtEndDate + v),
              d && ((p = n.rtEndDate - S), e - 1 >= 0))
            ) {
              const t = s[e - 1],
                n = (0, _.Z6)(t.discountEventID);
              "unique" != n?.collision_type &&
                (p = Math.max(p, t.rtEndDate + v));
            }
            const m = (0, c.M)(p);
            m - p <= 2 * D.Kp.PerHour && (p = m);
          }
          const g = (0, c.M)(i + D.Kp.PerYear / 2);
          if (p + D.Kp.PerDay < g) {
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
          const m = (0, _.E1)().filter(
            (e) =>
              "unique" == e.collision_type &&
              !l.has(e.id) &&
              1 ==
                this.m_mapPackageStateForDiscountEvents.get(t).get(e.id).eState,
          );
          for (const t of m)
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
      function k(t, e, n) {
        let s = 1;
        const i = [];
        let o = !1;
        const r = d.A.Get().GetPackage(t);
        if (r?.GetReleaseDateRTime() > e.start_date - v)
          return (
            (s = 6),
            {
              ePackageDiscountState: s,
              rgConflictingDiscounts: i,
              bChangedLocally: o,
            }
          );
        if ((0, _.zL)(t) > e.start_date - v)
          return (
            (s = 7),
            {
              ePackageDiscountState: s,
              rgConflictingDiscounts: i,
              bChangedLocally: o,
            }
          );
        for (const t of n) {
          if (e.id == t.discountEventID) continue;
          const n = (0, a.E7)(t.discountEventID),
            r = "unique" == e.collision_type || "unique" == n?.collision_type,
            c = r ? e.start_date + S : e.start_date - v,
            l = r ? e.end_date - S : e.end_date + v;
          if (t.rtEndDate > c && l > t.rtStartDate) {
            if (((o = o || t.bChangedLocally), 0 == t.nDiscountPct)) continue;
            i.push(t), (s = r ? 9 : 8);
          }
        }
        return {
          ePackageDiscountState: s,
          rgConflictingDiscounts: i,
          bChangedLocally: o,
        };
      }
      function C(t, e, n, a, i) {
        let o,
          r = 5;
        if (e)
          (o = e.get(t)),
            !o || o.restricted || o.pruned
              ? ((r = 4), (o = { restricted: !0 }))
              : (r = o.opt_in ? 1 : o.invited || !o.time_opted_in ? 2 : 3);
        else if (!a.nBaseAppID) {
          const t = n
            .GetIncludedAppIDs()
            .map((t) =>
              s.uL
                .Get()
                .GetOptInRegistrationAndEligibilityForApp(t)
                ?.get(i.opt_in_name),
            )
            .filter(Boolean);
          t.some((t) => t.opt_in)
            ? (r = 1)
            : t.some((t) => !t.restricted && !t.pruned) && (r = 11);
        }
        return { ePackageDiscountState: r, optInRegistration: o };
      }
      function G(t, e) {
        if (t.appids?.length > 0) {
          if (e?.GetIncludedAppIDs()?.length) {
            const n = new Set(t.appids);
            for (const t of e.GetIncludedAppIDs()) {
              if (n.has(t)) return !1;
              const e = d.A.Get().GetApp(t)?.GetParentAppID();
              if (e && n.has(e)) return !1;
            }
          }
          return !0;
        }
        return !1;
      }
      function P(t, e) {
        if (t.packageID != e.packageID) {
          const n = d.A.Get().GetPackage(t.packageID)?.GetName(),
            a = d.A.Get().GetPackage(e.packageID)?.GetName();
          return (0, m.kd)(n, a);
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
      function b() {
        return l.useCallback(() => {
          I.Get();
        }, []);
      }
      function w() {
        const [t, e] = l.useState(I.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, g.hL)(I.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function R() {
        return l.useCallback(
          () => I.Get().GetLocalPackageDiscountOverrides()?.length > 0,
          [],
        );
      }
      function L() {
        return l.useCallback(
          (t) => I.Get().DiscardAllLocalPackageDiscountOverrides(t),
          [],
        );
      }
      function y() {
        return l.useCallback(
          (t, e) => I.Get().OptInRegistrationUpdatedForApp(t, e),
          [],
        );
      }
      function A() {
        return l.useCallback(
          (t, e) => I.Get().DiscardLocalPackageDiscountOverride(t, e),
          [],
        );
      }
      function T(t, e) {
        const n = I.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e);
        return 1 == n?.eState ? (n?.discount?.nDiscountPct ?? 0) : null;
      }
      function O(t, e) {
        const [n, a] = l.useState(() =>
          I.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e),
        );
        (0, g.hL)(I.Get().GetDiscountGridCellCallbackList(t, e), a);
        return {
          packageState: n,
          fnSetDiscountPct: l.useCallback(
            (n) => {
              I.Get().OverridePackageDiscountPct(t, e, n);
            },
            [t, e],
          ),
        };
      }
      function B() {
        return l.useCallback((t, e, n) => {
          const a = [];
          for (const s of n) {
            const n = I.Get().OverridePackageDiscountPct(s, e, t);
            n && a.push(n);
          }
          return a;
        }, []);
      }
      function F(t) {
        const e = N(t);
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
      function N(t) {
        const [e, n] = l.useState(() => M(t)),
          a = l.useCallback(() => {
            n(M(t));
          }, [t]);
        return (
          l.useEffect(a, [t, a]),
          (0, g.hL)(I.Get().GetDiscountEventColumnCallbackList(t), a),
          e
        );
      }
      function M(t) {
        const e = I.Get().GetAllPackageStatesForDiscountEvent(t),
          n = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const t of e)
          switch (t?.eState) {
            case 0:
              break;
            case 1:
              (t.discount?.nDiscountPct ?? 0) > 0
                ? n.alreadySet.add(t.packageID)
                : n.available.add(t.packageID);
              break;
            case 6:
            case 7:
            case 8:
            case 9:
              n.conflicts.add(t.packageID);
              break;
            case 2:
            case 3:
              n.needRegistration.add(t.packageID);
              break;
            case 4:
            case 5:
            case 10:
              n.ineligibile.add(t.packageID);
          }
        return n;
      }
      function x(t) {
        return (
          !!(0, i.$U)(t).some((t) => t.nDiscountPct > 0) ||
          !(
            !I.IsInitialized() ||
            !I.Get()
              .GetAllPackageStatesForDiscountEvent(t)
              .some((t) => (t.discount?.nDiscountPct ?? 0) > 0)
          )
        );
      }
      function V(t, e = !0) {
        if ((0, i.Ko)(t)) return !0;
        if (!e && t.startsWith("weeklongdeal_")) return !1;
        const n = (0, a.E7)(t);
        if (!n?.opt_in_name) return !0;
        const o = s.uL.Get().GetAllOptInRegistrations(n.opt_in_name);
        return !!o?.length && o.some((t) => !t.restricted && !t.pruned);
      }
      function U(t) {
        const e = (function () {
            const [t, e] = l.useState(I.IsInitialized());
            return (0, g.hL)(I.s_initializationCallbackList, e), t;
          })(),
          [n, a] = l.useState(e ? I.Get().GetFutureDiscountRanges(t) : []),
          s = l.useCallback(
            () => a(e ? I.Get().GetFutureDiscountRanges(t) : []),
            [t, e],
          );
        return (
          (0, g.hL)(
            e && I.Get().GetLocalPackageDiscountOverrideCallbackList(),
            s,
          ),
          (0, g.hL)(e && (0, i.iI)(t), s),
          l.useEffect(s, [t, e, s]),
          n
        );
      }
      function H(t) {
        let [e, n] = l.useState(() => I.Get().GetHighestPackageDiscount(t)),
          a = l.useCallback(() => {
            n(I.Get().GetHighestPackageDiscount(t));
          }, [t, n]);
        return (0, g.hL)(I.Get().GetDiscountPackageCallbackList(t), a), e;
      }
    },
    43552: (t, e, n) => {
      "use strict";
      n.d(e, {
        Ad: () => E,
        E1: () => m,
        Fs: () => S,
        Ix: () => _,
        Jn: () => I,
        Z6: () => D,
        dp: () => f,
        ou: () => h,
        u7: () => v,
        zL: () => g,
      });
      var a = n(90626),
        s = n(44165),
        i = n(6144),
        o = n(73745),
        r = n(78327),
        c = n(33428),
        l = n(48996),
        u = n(87924);
      const d = "related-discount-view";
      class p {
        m_rgDiscountEvents;
        m_mapDiscountEventsByID = new Map();
        m_discountEventsCallbackList = new i.lu();
        m_mapLastTimeRaisedPrices = new Map();
        m_strSelectedDiscountEventID = null;
        m_bIncludeWeeklongEvents = !1;
        m_bIncludeCustomEvents = !0;
        m_bIncludeIneligibleEvents = !1;
        m_bIncludeConflictsInSingleEventView = !0;
        m_bEditingDailyDealDiscount = !1;
        m_eRelatedDiscountView = "deepest-past";
        m_RelatedDiscountViewCallbackList = new i.lu();
        m_gridEventSelectionParametersCallbackList = new i.lu();
        m_setVisibleDiscountEventIDs = new Set();
        m_visibleDiscountEventIDsCallbackList = new i.lu();
        static s_Singleton;
        static Get() {
          return (
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
          );
        }
        constructor() {
          "dev" == r.TS.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        Init() {
          const t = (0, r.Tc)("price_increase_times", "application_config");
          if (
            (("dev" != r.TS.WEB_UNIVERSE && "beta" != r.TS.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", t),
            this.BIsPriceIncreasePayloadValid(t))
          )
            for (let e in t)
              this.m_mapLastTimeRaisedPrices.set(Number(e), t[e]);
          else
            "dev" == r.TS.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            window.localStorage.getItem(d) ?? "deepest-past"),
            this.UpdateDiscountEventsForGrid(),
            (0, c.yB)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, l.w8)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const t = (0, c.tW)(),
            e = (0, l.Mh)(),
            n = new Set(t.map((t) => t.id)),
            a = [],
            i = (0, s.sB)();
          for (const t of e)
            t.rtEndDate > i &&
              (n.has(t.discountEventID) ||
                (a.push({
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
            ((this.m_rgDiscountEvents = a.concat(t)),
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
            e && !this.m_bIncludeCustomEvents && (0, l.Ko)(t.id) && (e = !1),
              e &&
                !this.m_bIncludeWeeklongEvents &&
                t.id.startsWith("weeklongdeal_") &&
                !(0, u._9)(t.id) &&
                (e = !1),
              !e ||
                this.m_bIncludeIneligibleEvents ||
                (0, u.wk)(t.id) ||
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
        return p.Get().m_mapLastTimeRaisedPrices.get(t) ?? 0;
      }
      function m() {
        return p.Get().m_rgDiscountEvents;
      }
      function D(t) {
        return p.Get().m_mapDiscountEventsByID.get(t);
      }
      function h() {
        return p.Get().m_discountEventsCallbackList;
      }
      function _() {
        const [t, e] = a.useState(p.Get().m_rgDiscountEvents);
        return (0, o.hL)(p.Get().m_discountEventsCallbackList, e), t;
      }
      function f() {
        const [t, e] = a.useState(p.Get().m_setVisibleDiscountEventIDs);
        return (0, o.hL)(p.Get().m_visibleDiscountEventIDsCallbackList, e), t;
      }
      function E(t) {
        const [e, n] = a.useState(p.Get().m_mapDiscountEventsByID.get(t)),
          s = a.useCallback(
            () => n(p.Get().m_mapDiscountEventsByID.get(t)),
            [t],
          );
        return (
          (0, o.hL)(p.Get().m_discountEventsCallbackList, s),
          a.useEffect(s, [t, s]),
          e
        );
      }
      function v(t = !0) {
        const [e, n] = a.useState(p.Get().GetEventSelectionParameters()),
          s = t ? p.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, o.hL)(s, n), e;
      }
      function S() {
        const [t, e] = a.useState(p.Get().m_eRelatedDiscountView);
        (0, o.hL)(p.Get().m_RelatedDiscountViewCallbackList, e);
        return [
          t,
          a.useCallback((t) => {
            (p.Get().m_eRelatedDiscountView = t),
              window.localStorage.setItem(d, t),
              p.Get().m_RelatedDiscountViewCallbackList.Dispatch(t);
          }, []),
        ];
      }
      function I() {
        return a.useCallback(() => {
          p.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    33299: (t, e, n) => {
      "use strict";
      n.d(e, {
        HA: () => f,
        IR: () => y,
        NP: () => w,
        Xr: () => A,
        ZN: () => L,
        mE: () => P,
        rK: () => E,
        sF: () => b,
        uv: () => C,
      });
      var a = n(90626),
        s = n(32754),
        i = n(78327),
        o = n(61859),
        r = n(61010),
        c = n.n(r),
        l = n(75233),
        u = n(69423),
        d = n(64238),
        p = n.n(d),
        g = n(48996),
        m = n(87924),
        D = n(4869),
        h = n(9554);
      const _ = (0, a.createContext)(void 0);
      function f() {
        const t = (0, a.useContext)(_);
        if (!t) throw new Error("Missing GridRowContextProvider");
        return t;
      }
      function E(t) {
        const { children: e, fnBLocalChangesExist: n, fnWarnUser: s } = t,
          i = (0, l.jE)(),
          o = a.useMemo(
            () => ({ client: i, fnBLocalChangesExist: n, fnWarnUser: s }),
            [n, s, i],
          );
        return a.createElement(_.Provider, { value: o }, e);
      }
      function v(t) {
        const { row: e } = t,
          n = e.original.packageID || 0,
          s = (0, m.C5)(n);
        let i = (0, g.$p)(n) < s,
          r = p()(
            c().PackageNameColumn,
            i && c().PackagePricesBelowMin,
            e.original.packageType,
          ),
          l = i
            ? (0, o.we)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip");
        return a.createElement(k, { className: r, toolTip: l, ...t });
      }
      function S(t) {
        const { row: e } = t,
          n = e.original.packageID || 0,
          s = (0, u.nT)(n);
        let i = p()(
            c().PackageNameColumn,
            s && c().PackagePricesBelowMin,
            e.original.packageType,
          ),
          r = s
            ? (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip");
        return a.createElement(k, {
          className: i,
          toolTip: r,
          showUnreleased: !0,
          ...t,
        });
      }
      function I(t) {
        const { column: e } = t,
          [n, s] = (0, a.useState)(e.getFilterValue() ?? "");
        return a.createElement(
          "div",
          { className: c().PackageNameHeader },
          (0, o.we)("#PackageGrid_Column_PackageName"),
          a.createElement("input", {
            placeholder: (0, o.we)("#PackageGrid_PackageNameFilterInputPrompt"),
            value: n,
            onChange: (e) => {
              s(e.target.value.toString()),
                (0, a.startTransition)(() =>
                  t.column.setFilterValue(e.target.value.toString()),
                );
            },
          }),
        );
      }
      function k(t) {
        const { fnBLocalChangesExist: e, fnWarnUser: n } = f(),
          { cell: r, row: l, className: u, toolTip: d } = t,
          p = l.original.packageID,
          g =
            r.getValue() ??
            a.createElement(
              "span",
              { className: c().UnknownValue },
              " ",
              (0, o.we)("#PackageGrid_PackageID", p),
            );
        return a.createElement(
          A,
          {
            fnBLocalChangesExist: e,
            fnWarnUser: n,
            href: `${i.TS.PARTNER_BASE_URL}store/packagelanding/${p}`,
            strToolTip: d,
            strClassName: u,
          },
          t.showUnreleased &&
            !("released" in l.original && l.original.released) &&
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                s.Gq,
                {
                  toolTipContent: (0, o.we)(
                    "#PackageGrid_PackageUnpublishedTooltip",
                  ),
                },
                a.createElement(D.ZyV, { width: "14px", height: "14px" }),
              ),
              "  ",
            ),
          " ",
          g,
        );
      }
      function C() {
        return a.useMemo(
          () => ({
            accessorKey: "packageID",
            header: (0, o.we)("#PackageGrid_Column_PackageID"),
            enableSorting: !1,
            size: 90,
            cell: (t) =>
              a.createElement(k, {
                ...t,
                toolTip: (0, o.we)("#PackageGrid_Column_PackageID_ttip"),
              }),
            meta: { cellClassname: c().PackageID },
          }),
          [],
        );
      }
      function G(t, e, n) {
        let a = /^\d+$/.test(n);
        const s = t.original.packageID;
        return (
          !!(a && s && s.toString().startsWith(n)) ||
          t.getValue(e).toLowerCase().includes(n.toLowerCase())
        );
      }
      function P(t) {
        return a.useMemo(
          () => ({
            accessorKey: "packageName",
            header: I,
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, o.we)(
                "#PackageGrid_Column_PackageName_ttip",
              ),
              cellClassname: c().PackageName,
            },
            filterFn: G,
            cell: t ? v : S,
            size: 300,
          }),
          [t],
        );
      }
      function b() {
        return a.useMemo(() => ({ accessorKey: "appids" }), []);
      }
      function w() {
        return a.useMemo(
          () => ({
            accessorKey: "packageType",
            header: (0, o.we)("#PackageGrid_Column_PackageType"),
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, o.we)(
                "#PackageGrid_Column_PackageType_ttip",
              ),
              cellClassname: c().PackageType,
            },
          }),
          [],
        );
      }
      function R(t) {
        const { row: e } = t,
          { fnBLocalChangesExist: n, fnWarnUser: s } = f(),
          r = e.original.appids,
          c = r?.length ?? 0,
          l = e.original.packageID;
        return a.createElement(
          A,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: s,
            href: `${i.TS.PARTNER_BASE_URL}store/packagelanding/${l}`,
            strToolTip: (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == c ? "1 appid" : c + " appids",
        );
      }
      function L() {
        return a.useMemo(
          () => ({
            accessorKey: "appName",
            header: (0, o.we)("#PackageGrid_Column_AppName"),
            cell: R,
            size: 80,
            sortingFn: h.es,
            meta: {
              strHeaderTooltip: (0, o.we)("#PackageGrid_Column_AppName_ttip"),
              bDisableSortButton: !0,
              cellClassname: c().AppCount,
            },
          }),
          [],
        );
      }
      function y(t) {
        const e = t.groupingValue,
          n = (0, o.we)("#PackageGrid_NoBaseGameFoundForPackage");
        return a.createElement(
          a.Fragment,
          null,
          e === n
            ? a.createElement(
                "span",
                { title: (0, o.we)("#PackageGrid_NoBaseGameExplanation") },
                e,
                " (?)",
              )
            : e,
          a.createElement(
            "span",
            { className: c().RowItemCount },
            "(",
            (0, o.Yp)("#PackageGrid_PackageCount", t.subRows.length),
            ")",
          ),
        );
      }
      function A(t) {
        const {
          fnBLocalChangesExist: e,
          fnWarnUser: n,
          href: i,
          children: o,
          strToolTip: r,
          strClassName: c,
        } = t;
        return a.createElement(
          s.he,
          { toolTipContent: r, className: c },
          a.createElement(
            "a",
            {
              onClick: (t) => {
                e() && (t.preventDefault(), n(t, i));
              },
              href: i,
            },
            o,
          ),
        );
      }
    },
    87641: (t, e, n) => {
      "use strict";
      n.d(e, { h: () => i });
      var a = n(90626),
        s = n(61859);
      function i(t) {
        const e = a.useCallback(
          (e) => {
            if (t())
              return (
                e.preventDefault(),
                (e.returnValue = (0, s.we)(
                  "#PackageGrid_NavigationWarning_Title",
                )),
                e.returnValue
              );
          },
          [t],
        );
        a.useEffect(
          () => (
            window.addEventListener("beforeunload", e),
            () => window.removeEventListener("beforeunload", e)
          ),
          [e],
        );
      }
    },
    7247: (t, e, n) => {
      "use strict";
      n.d(e, { Hf: () => l, i$: () => r, qP: () => i });
      var a = n(82097),
        s = n(61859);
      const i = new Set([0, 2, 6, 13]),
        o = new Set([4, 7, 11]);
      function r(t) {
        let e,
          n = !1,
          r = !1;
        const c = new Set();
        for (const e of t?.GetIncludedAppIDs() ?? []) {
          const t = a.A.Get().GetApp(e);
          if (t && i.has(t.GetAppType())) (n = !0), c.add(t.GetID());
          else if (t && o.has(t.GetAppType())) {
            r = !0;
            const e = t.GetParentAppID();
            e && c.add(e);
          }
        }
        let l = null;
        1 == c.size
          ? ((e = Array.from(c)[0]), (l = a.A.Get().GetApp(e)?.GetName()))
          : c.size > 1 &&
            (l = (0, s.we)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          l || (l = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: l,
          contents: n && r ? "BOTH" : n ? "GAME" : r ? "DLC" : null,
          nBaseAppID: e,
        };
      }
      const c = { include_release: !0 };
      async function l(t, e) {
        if (
          1 != (await a.A.Get().HintLoadStorePackages(t, c)) ||
          e.token.reason
        )
          return null;
        const n = [];
        t.map((t) => a.A.Get().GetPackage(t))
          .filter((t) => !!t)
          .forEach((t) => n.push(...t.GetIncludedAppIDs()));
        const s = Array.from(new Set(n));
        if (1 != (await a.A.Get().HintLoadStoreApps(s, c)) || e.token.reason)
          return null;
        const i = s
            .map((t) => a.A.Get().GetApp(t))
            .filter((t) => !!t?.GetParentAppID())
            .map((t) => t.GetParentAppID()),
          o = Array.from(new Set(i));
        if (1 != (await a.A.Get().HintLoadStoreApps(o, c)) || e.token.reason)
          return null;
        return Array.from(new Set(s.concat(o)));
      }
    },
    66051: (t, e, n) => {
      "use strict";
      n.d(e, { k: () => C });
      var a = n(67796),
        s = n(16666),
        i = n(92148),
        o = n(59366),
        r = n(64238),
        c = n.n(r),
        l = n(90626),
        u = n(31718),
        d = n.n(u),
        p = n(76217),
        g = n(97907),
        m = n(8871),
        D = n(94104);
      const h = l.memo(function (t) {
        const {
            virtualizer: e,
            bDynamic: n,
            idx: a,
            rowGap: s,
            renderItem: i,
          } = t,
          o = l.useCallback(
            (t, n, s) => (e.scrollToIndex(a, { align: "center" }), !0),
            [e, a],
          );
        return l.createElement(
          p.Z,
          {
            ref: n ? e.measureElement : void 0,
            "data-index": a,
            fnScrollIntoViewHandler: o,
            scrollIntoViewWhenChildFocused: "force",
            style: { width: "100%", paddingBottom: s },
          },
          i(a),
        );
      });
      l.forwardRef(function (t, e) {
        const {
            nRows: n,
            nItemHeight: a,
            nRowGap: s,
            overscan: i,
            renderItem: o,
            bDynamic: r,
            className: c,
            forceVirtualizeType: u,
            initialOffset: d,
            onOffsetChange: g,
            ...h
          } = t,
          [E, v] = (0, l.useState)(u),
          [S, I] = l.useState(),
          [k, C] = l.useState(),
          G = l.useCallback(
            (t) => {
              if (!t || "window" == u) return;
              const e = (0, D._f)(t, "y");
              (0, l.startTransition)(() => {
                I(e || void 0),
                  C(t.offsetTop),
                  u || v(e ? "element" : "window");
              });
            },
            [u],
          ),
          P = (0, m.Ue)(G, e),
          b = {
            nRows: n,
            nItemHeight: a,
            nRowGap: s,
            overscan: i,
            renderItem: o,
            bDynamic: r,
            forceVirtualizeType: u,
            initialOffset: d,
            onOffsetChange: g,
          };
        return l.createElement(
          p.Z,
          { className: c, ref: P, ...h },
          l.createElement(
            l.Suspense,
            null,
            "element" === E &&
              l.createElement(f, {
                ...b,
                nScrollMargin: k || 0,
                elScrollable: S,
              }),
            "window" === E && l.createElement(_, { ...b, nScrollMargin: k }),
          ),
        );
      });
      function _(t) {
        const {
            nScrollMargin: e,
            nRows: n,
            nItemHeight: a,
            nRowGap: s = 10,
            overscan: o = 6,
            initialOffset: r,
            onOffsetChange: c,
          } = t,
          u = a + s,
          d = (0, i.XW)({
            count: n,
            scrollMargin: e,
            estimateSize: l.useCallback(() => u, [u]),
            overscan: o,
            initialOffset: r,
            initialRect: void 0,
            observeElementOffset: S,
            observeElementRect: I,
            onChange(t, e) {
              c?.(t.scrollOffset);
            },
          });
        return (
          l.useEffect(() => {
            (0, l.startTransition)(() => {
              d.measure();
            });
          }, [d, u]),
          l.createElement(E, { ...t, virtualizer: d })
        );
      }
      function f(t) {
        const {
            nRows: e,
            nScrollMargin: n,
            elScrollable: a,
            nItemHeight: s,
            nRowGap: o = 10,
            overscan: r = 6,
            initialOffset: c,
            onOffsetChange: u,
          } = t,
          d = s + o,
          p = (0, i.Te)({
            count: e,
            scrollMargin: n - (a?.offsetTop || 0),
            getScrollElement: () => a,
            estimateSize: l.useCallback(() => d, [d]),
            overscan: r,
            initialRect: a ? void 0 : { height: 1e3, width: 1e3 },
            initialOffset: c,
            observeElementOffset: S,
            observeElementRect: k,
            onChange(t, e) {
              u?.(t.scrollOffset);
            },
          });
        return (
          l.useEffect(() => {
            (0, l.startTransition)(() => {
              p.measure();
            });
          }, [p, d]),
          l.createElement(E, { ...t, virtualizer: p })
        );
      }
      function E(t) {
        const { virtualizer: e, nRowGap: n, renderItem: a, bDynamic: s } = t,
          i = e.getVirtualItems(),
          o = i.length ? i[0].start - e.options.scrollMargin : 0,
          r = Math.max(0, e.getTotalSize());
        return l.createElement(
          p.Z,
          {
            "flow-children": "column",
            navEntryPreferPosition: g.iU.MAINTAIN_Y,
            style: { height: `${r}px`, width: "100%", position: "relative" },
          },
          l.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY( ${o}px )`,
              },
            },
            i.map((t) =>
              l.createElement(h, {
                key: t.key,
                virtualizer: e,
                bDynamic: s,
                idx: t.index,
                rowGap: n,
                renderItem: a,
              }),
            ),
          ),
        );
      }
      function v(t) {
        return (...e) => {
          queueMicrotask(() => {
            (0, l.startTransition)(() => {
              t(...e);
            });
          });
        };
      }
      function S(t, e) {
        const n = t.scrollElement;
        if (!n) return;
        let a;
        a = v(
          "scrollX" in n
            ? (a) => e(n[t.options.horizontal ? "scrollX" : "scrollY"], a)
            : (a) => e(n[t.options.horizontal ? "scrollLeft" : "scrollTop"], a),
        );
        const s = () => a(!0),
          i = () => a(!1);
        return (
          i(),
          n.addEventListener("scroll", s, { passive: !0 }),
          n.addEventListener("scrollend", i, { passive: !0 }),
          () => {
            n.removeEventListener("scroll", s),
              n.removeEventListener("scrollend", i);
          }
        );
      }
      function I(t, e) {
        const n = t.scrollElement;
        if (!n) return;
        const a = v(() => e({ width: n.innerWidth, height: n.innerHeight }));
        return (
          a(),
          n.addEventListener("resize", a, { passive: !0 }),
          () => {
            n.removeEventListener("resize", a);
          }
        );
      }
      function k(t, e) {
        const n = t.scrollElement;
        if (!n) return;
        const a = v((t) =>
          e({ width: Math.round(t.width), height: Math.round(t.height) }),
        );
        a(n.getBoundingClientRect());
        const s = n.ownerDocument.defaultView;
        if (!s?.ResizeObserver) return () => {};
        const i = new s.ResizeObserver((t) => {
          t[0]?.borderBoxSize[0]
            ? a({
                width: t[0].borderBoxSize[0].inlineSize,
                height: t[0].borderBoxSize[0].blockSize,
              })
            : a(n.getBoundingClientRect());
        });
        return (
          i.observe(n, { box: "border-box" }),
          () => {
            i.unobserve(n);
          }
        );
      }
      const C = l.forwardRef(function (t, e) {
        const {
            data: n,
            columns: r,
            className: c,
            width: u,
            height: d,
            nScrollMargin: p,
            nItemHeight: g,
            nHeaderHeight: m,
            overscan: D = 6,
            stickyHeader: h,
            initialSorting: _,
            initialColumnFilters: f,
            initialGrouping: E,
            initialExpanded: v,
            initialColumnPinning: I,
            initialColumnVisibility: C,
            onGroupingChange: G,
            onVisibleRowsChange: w,
            renderGroup: R,
          } = t,
          L = (0, l.useRef)(null),
          [y, A] = (0, l.useState)({}),
          T = r.map((t) =>
            "accessorKey" in t
              ? { ...t, filterFn: y[t.accessorKey] ?? t.filterFn }
              : t,
          ),
          O = (0, a.N4)({
            data: n,
            columns: T,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: _,
              grouping: E ?? [],
              expanded: v,
              columnPinning: I ?? {},
              columnFilters: f,
              columnVisibility: C,
            },
            getCoreRowModel: (0, s.HT)(),
            getSortedRowModel: (0, s.h5)(),
            getFilteredRowModel: (0, s.hM)(),
            getGroupedRowModel: (0, s.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: B, flatRows: F } = O.getRowModel(),
          N = B.flatMap((t) => (t.getIsExpanded() ? [t, ...t.subRows] : t)),
          M = O.getState().grouping;
        (0, l.useEffect)(() => {
          G?.(M);
        }, [G, M]),
          (0, l.useEffect)(() => {
            w?.(N);
          }, [w, N.length]);
        const x = (0, i.Te)({
            count: N.length,
            scrollMargin: p,
            getScrollElement: l.useCallback(() => q.current, []),
            estimateSize: l.useCallback(() => g, [g]),
            overscan: D,
            initialRect: void 0,
            observeElementOffset: S,
            observeElementRect: k,
          }),
          V = (0, l.useRef)(0),
          U = l.useMemo(() => {
            const t = O.getFlatHeaders(),
              e = {};
            for (let n = 0; n < t.length; n++) {
              const a = t[n];
              (e[`--header-${a.id}-size`] = `${a.getSize()}px`),
                (e[`--col-${a.column.id}-size`] = `${a.column.getSize()}px`);
            }
            return (V.current += 1), e;
          }, [O.getState().columnSizingInfo, O.getState().columnSizing, r]);
        l.useEffect(() => {
          (0, l.startTransition)(() => {
            x.measure();
          });
        }, [x, g]);
        const H = x.getVirtualItems(),
          z = H[0]?.start ?? 0,
          j = x.getTotalSize(),
          W = (0, i.Te)({
            estimateSize: (t) =>
              N[0]?.getVisibleCells()[t].column.getSize() ?? 0,
            count: N[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: () => q.current,
            rangeExtractor(t) {
              const e = N[0]?.getVisibleCells() ?? [],
                n = new Set((0, o.vp)(t));
              return (
                e.forEach((t, e) => {
                  t.column.getIsPinned() && n.add(e);
                }),
                Array.from(n).sort((t, e) => t - e)
              );
            },
            observeElementOffset: S,
            observeElementRect: k,
          });
        (0, l.useEffect)(() => {
          W.measure();
        }, [V.current]),
          (0, l.useImperativeHandle)(
            e,
            () => ({
              getData: () => F.map((t) => t.original),
              getVisibleRows: () => N,
              getState: O.getState,
              getColumns: O.getAllColumns,
              getColumnDefs: () => T,
              setColumnFilters: O.setColumnFilters,
              resetColumnFilters: O.resetColumnFilters,
              setColumnFilterFnOverride: A,
              getColumnFilterFnOverride: () => y,
              getContainerElement: () => q.current,
              getTableElement: () => L.current,
              scrollToColumn(t, e) {
                W.scrollToIndex(t.getIndex(), e);
              },
            }),
            [
              F,
              N,
              O.setColumnFilters,
              O.resetColumnFilters,
              O.getState,
              O.getAllColumns,
              y,
              T,
              W,
            ],
          );
        const q = (0, l.useRef)(null),
          K = h ? m : 0;
        let J = 0;
        const $ = N[0]?.getVisibleCells(),
          Z = W.getVirtualItems(),
          X = Z[Z.length - 1]?.end;
        for (const t of Z) {
          const e = $[t.index];
          e?.column.getIsPinned() && (J += t.size);
        }
        return l.createElement(
          "div",
          {
            className: c,
            ref: q,
            style: {
              width: u,
              height: d,
              overflow: "auto",
              maxWidth: "fit-content",
              scrollPadding: `${K}px 0 0 ${J}px`,
            },
          },
          l.createElement(
            "div",
            {
              role: "table",
              ref: L,
              "aria-rowcount": n.length,
              style: {
                minHeight: j,
                width: O.getTotalSize(),
                "--virtualPos": `${z}px`,
                ...U,
              },
            },
            O.getHeaderGroups().map((t) =>
              l.createElement(P, {
                key: t.id,
                group: t,
                sticky: h,
                nHeaderHeight: m,
              }),
            ),
            H.map((t) =>
              l.createElement(b, {
                key: t.key,
                row: N[t.index],
                size: t.size,
                rowVirtualizer: W,
                index: t.index,
                measureRef: x.measureElement,
                scrollContainerRef: q,
                nItemHeight: g,
                renderGroup: R,
                rowEnd: X,
              }),
            ),
          ),
        );
      });
      function G(t) {
        const e = t.getIsPinned();
        return {
          borderRight:
            "left" === e && t.getIsLastColumn("left")
              ? "var(--fancy-table-last-pinned-border, var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          borderLeft:
            "right" === e && t.getIsFirstColumn("right")
              ? "var(--fancy-table-last-pinned-border,var(--fancy-table-cell-border, 1px solid #aaa))"
              : void 0,
          left: "left" === e ? `${t.getStart("left")}px` : void 0,
          right: "right" === e ? `${t.getAfter("right")}px` : void 0,
          position: e ? "sticky" : "relative",
          width: t.getSize(),
          zIndex: e ? 1 : 0,
        };
      }
      function P(t) {
        const { group: e, sticky: n, nHeaderHeight: s } = t;
        return l.createElement(
          "div",
          {
            role: "row",
            className: c()(
              d().FancyTableRow,
              d().FancyTableHeader,
              n && d().StickyHeader,
            ),
          },
          e.headers.map((t, n) => {
            const i = e.headers[n - 1],
              o = {},
              r = t.column.getIsSorted();
            r &&
              !t.column.columnDef.meta?.bDisableSortButton &&
              (o["aria-sort"] = "asc" === r ? "ascending" : "descending");
            let u = "div";
            return (
              t.column.getCanSort() &&
                !t.column.columnDef.meta?.bDisableSortButton &&
                ((u = "button"),
                (o.onClick = t.column.getToggleSortingHandler())),
              t.column.columnDef.meta?.strHeaderTooltip &&
                (o.title = t.column.columnDef.meta?.strHeaderTooltip),
              l.createElement(
                u,
                {
                  role: "columnheader",
                  key: t.id,
                  "data-pinned": !!t.column.getIsPinned(),
                  className: c()(
                    d().ColumnHeader,
                    "button" === u && d().SortButton,
                    t.column.columnDef.meta?.headerClassname,
                  ),
                  style: {
                    width: `var(--header-${t.id}-size)`,
                    height: void 0 !== s ? `${s}px` : void 0,
                    ...G(t.column),
                  },
                  ...o,
                },
                i?.column.getCanResize() &&
                  l.createElement("div", {
                    role: "presentation",
                    onDoubleClick: () => i.column.resetSize(),
                    onMouseDown: i.getResizeHandler(),
                    onTouchStart: i.getResizeHandler(),
                    onClick: (t) => t.stopPropagation(),
                    className: c()(d().ResizeHandle, d().PrevResizeHandle),
                  }),
                t.isPlaceholder
                  ? null
                  : (0, a.Kv)(t.column.columnDef.header, t.getContext()),
                r &&
                  !t.column.columnDef.meta?.bDisableSortButton &&
                  l.createElement("div", { className: d().SortIndicator }),
                t.column.getCanResize() &&
                  l.createElement("div", {
                    role: "presentation",
                    onDoubleClick: () => t.column.resetSize(),
                    onMouseDown: t.getResizeHandler(),
                    onTouchStart: t.getResizeHandler(),
                    onClick: (t) => t.stopPropagation(),
                    className: c()(
                      d().ResizeHandle,
                      t.column.getIsResizing() && d().IsResizing,
                    ),
                  }),
              )
            );
          }),
        );
      }
      const b = l.memo(function (t) {
        const {
          row: e,
          size: n,
          rowVirtualizer: a,
          measureRef: s,
          index: i,
          nItemHeight: o,
          renderGroup: r,
        } = t;
        return l.createElement(
          "div",
          {
            role: "row",
            className: c()(
              d().FancyTableRow,
              e.getCanExpand() && d().ExpandableRow,
            ),
            style: {
              minHeight: e.getCanExpand() ? void 0 : `${n}px`,
              transform: "translateY(var(--virtualPos))",
            },
            "data-even": i % 2 == 0,
            "data-index": i,
            ref: s,
          },
          l.createElement(w, {
            row: e,
            rowVirtualizer: a,
            nItemHeight: o,
            renderGroup: r,
          }),
        );
      });
      function w(t) {
        const { row: e, rowVirtualizer: n, renderGroup: a } = t;
        if (e.getCanExpand()) {
          const t = a ?? (() => e.groupingValue);
          return l.createElement(
            "button",
            {
              className: d().RowGroup,
              "aria-expanded": e.getIsExpanded(),
              onClick: e.getToggleExpandedHandler(),
            },
            l.createElement("div", { className: d().GroupExpandIndicator }),
            t(e),
          );
        }
        const s = n.getVirtualItems(),
          i = e.getVisibleCells();
        let o,
          r = 0;
        return l.createElement(
          l.Fragment,
          null,
          s.map((t) => {
            const e = i[t.index],
              a = e.column.getIsPinned();
            return (
              a ? (r += t.size) : void 0 === o && (o = t.start),
              l.createElement(
                "div",
                {
                  className: c()(
                    d().FancyTableCell,
                    e.column.columnDef.meta?.cellClassname,
                  ),
                  key: e.id,
                  "data-index": t.index,
                  "data-table-column-id": e.column.id,
                  ref: n.measureElement,
                  style: {
                    width: `var(--col-${e.column.id}-size)`,
                    transform: a ? void 0 : `translateX(${o - r}px)`,
                    ...G(e.column),
                  },
                },
                l.createElement(R, {
                  CellComponent: e.column.columnDef.cell,
                  context: e.getContext(),
                }),
              )
            );
          }),
        );
      }
      const R = l.memo(
        function (t) {
          return (0, a.Kv)(t.CellComponent, t.context);
        },
        (t, e) => t.context.getValue() === e.context.getValue(),
      );
    },
    41103: (t, e, n) => {
      "use strict";
      n.d(e, { Hl: () => D, dQ: () => m });
      var a = n(34629),
        s = n(41735),
        i = n.n(s),
        o = n(14947),
        r = n(90626),
        c = n(85044),
        l = n(17720),
        u = n(44332),
        d = n(68797),
        p = n(78327);
      class g {
        constructor() {
          (0, o.Gn)(this);
        }
        m_mapProfiles = new Map();
        m_mapProfilesLoading = new Map();
        async LoadProfiles(t, e) {
          (0, u.w)(
            t.length <= 500,
            "Check LoadProfiles, requesting too many steam IDs",
          );
          let n = t.filter(
            (t) =>
              !this.m_mapProfiles.has(t) && !this.m_mapProfilesLoading.has(t),
          );
          if (0 == n.length) return this.m_mapProfilesLoading.get(t[0]);
          let a = p.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            s = i().get(a, {
              params: { steamids: n.join(",") },
              withCredentials: !0,
              cancelToken: e?.token,
            });
          n.forEach((t) => this.m_mapProfilesLoading.set(t, s));
          let o = await s;
          o.data &&
            200 == o.status &&
            o.data.forEach((t) => {
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
            ? p.TS.COMMUNITY_BASE_URL + "id/" + e.profile_url
            : p.TS.COMMUNITY_BASE_URL + "profiles/" + t.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(t) {
          const e = this.GetProfileBySteamID(t);
          return e && e.persona_name ? e.persona_name : "";
        }
      }
      (0, a.Cg)([o.sH], g.prototype, "m_mapProfiles", void 0);
      const m = new g();
      function D(t) {
        return (function (t) {
          const e = r.useMemo(
              () => (t ? ("string" == typeof t ? new l.b(t) : t) : null),
              [t],
            ),
            [n, a] = (0, r.useState)(!!e && !m.BHasProfileBySteamID(e));
          return (
            (0, r.useEffect)(() => {
              const t = i().CancelToken.source();
              return (
                e &&
                  !m.BHasProfileBySteamID(e) &&
                  m
                    .LoadProfiles([e.ConvertTo64BitString()])
                    .catch((t) => {
                      const n = (0, d.H)(t);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          e.ConvertTo64BitString() +
                          ": " +
                          n.strErrorMsg,
                        n,
                      );
                    })
                    .finally(() => {
                      t.token.reason || a(!1);
                    }),
                () => t.cancel("unmounting useUserProfile")
              );
            }, [t]),
            [n, !!e && m.GetProfileBySteamID(e)]
          );
        })(r.useMemo(() => (t ? l.b.InitFromAccountID(t) : null), [t]));
      }
    },
    9161: (t, e, n) => {
      "use strict";
      n.d(e, { g: () => i });
      var a = n(40323),
        s = n.n(a);
      class i {
        static ParseCSVFile(t) {
          return new Promise((e, n) => {
            const a = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: e,
              error: (t) => n({ errors: [t] }),
            };
            s().parse(t, a);
          });
        }
        static ReadFile(t) {
          return new Promise((e, n) => {
            const a = new FileReader();
            (a.onload = (t) => e(a.result)), a.readAsText(t);
          });
        }
        static WriteFile(t, e) {
          let n = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(t, e);
          else {
            const e = window.URL.createObjectURL(t);
            n.href = e;
          }
          n.setAttribute("download", e), n.click();
          try {
            document.removeChild(n);
          } catch (t) {}
        }
        static WriteCSVToFile(t, e) {
          const n = s().unparse(t, { header: !0 });
          i.WriteFile(new Blob([n], { type: "text/csv:charset=utf-8;" }), e);
        }
        static m_DummyValueForQuestionHack = 0;
        static WriteXMLToFile(t, e) {
          const n = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let a =
            "<" + n() + 'xml version="1.0" encoding="UTF-8" ' + n() + ">\n";
          (a += new XMLSerializer().serializeToString(t)),
            i.WriteFile(
              new Blob([a], { type: "application/xml:charset=utf-8;" }),
              e,
            );
        }
      }
    },
  },
]);

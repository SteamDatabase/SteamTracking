/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7022],
  {
    61010: (t) => {
      t.exports = {
        UnknownValue: "_3ovtfYPeggcsA44NZPuTAh",
        PriceWarningBad: "BbLG6W4EvK_nbprBmSSuQ",
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
    30168: (t, e, i) => {
      "use strict";
      i.d(e, {
        $e: () => l,
        Cz: () => n,
        G2: () => a,
        Lg: () => o,
        NX: () => s,
        j1: () => r,
        l5: () => c,
      });
      const n = "1",
        r = "SaleEvent_DurationDiscount_Tooltip",
        a = "discount",
        s = "proximity",
        o = "unique",
        c = "",
        l = "on";
    },
    258: (t, e, i) => {
      "use strict";
      i.d(e, {
        BG: () => M,
        E7: () => B,
        cR: () => S,
        p6: () => y,
        sU: () => w,
        tW: () => f,
        ur: () => v,
        vV: () => D,
        wn: () => b,
        yB: () => h,
      });
      var n = i(34629),
        r = i(41735),
        a = i.n(r),
        s = i(90626),
        o = i(37085),
        c = i(44165),
        l = i(68797),
        u = i(6419),
        d = i(6144),
        m = i(73745),
        p = i(78327),
        g = i(30168);
      class _ {
        m_mapDiscountEvents = new Map();
        m_discountEventsListCallback = new d.lu();
        m_mapDiscountEventCallback = new Map();
        m_mapAppList = new Map();
        m_mapAppListCallback = new Map();
        m_bLoadedViaInitOrFullLoad = !1;
        m_bLoadEventsRequestInFlight = !1;
        m_mapInflightDiscountLoadRequest = new Map();
        m_mapInflightDiscountAndAppListLoadRequest = new Map();
        GetFutureDiscountEvents() {
          const t = (0, c.sB)();
          return Array.from(_.Get().m_mapDiscountEvents.values()).filter(
            (e) => e.end_date > t,
          );
        }
        GetAllDiscountEvents() {
          return Array.from(_.Get().m_mapDiscountEvents.values());
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
              this.m_mapDiscountEventCallback.set(t, new d.lu()),
            this.m_mapDiscountEventCallback.get(t)
          );
        }
        GetAppListCallback(t) {
          return (
            this.m_mapAppListCallback.has(t) ||
              this.m_mapAppListCallback.set(t, new d.lu()),
            this.m_mapAppListCallback.get(t)
          );
        }
        async LoadAllDiscountEvents(t, e) {
          if (this.m_bLoadEventsRequestInFlight) return o.Ze;
          const i =
              p.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetalldiscountevents/" +
              t,
            n = {};
          let r = null;
          try {
            this.m_bLoadEventsRequestInFlight = !0;
            const t = await a().get(i, { params: n, cancelToken: e?.token });
            if (
              ((this.m_bLoadEventsRequestInFlight = !1),
              200 == t?.status && t.data?.success == o.R && t.data.events)
            ) {
              for (const e of t.data.events)
                this.m_mapDiscountEvents.set(e.id, e);
              return (
                (this.m_bLoadedViaInitOrFullLoad = !0),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                o.R
              );
            }
            r = { response: t };
          } catch (t) {
            r = t;
          }
          const s = (0, l.H)(r);
          return (
            console.error("Could not load Discount Events", s.strErrorMsg, s),
            r?.response?.data?.success ?? o.zi
          );
        }
        async CreateDiscountEvent(t, e, i, n, r, s, c, u) {
          const d =
              p.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            m = new FormData();
          m.append("sessionid", (0, p.KC)()),
            m.append("name", i),
            m.append("start_time", t.toString()),
            m.append("end_time", e.toString()),
            m.append("strJSONDiscountInfo", S(i, n, r, s, c));
          let _ = null;
          try {
            const l = await a().post(d, m, {
              withCredentials: !0,
              cancelToken: u?.token,
            });
            if (200 == l?.status && l.data?.success == o.R && l.data.eventid) {
              const a = {
                id: l.data.eventid,
                name: i,
                start_date: t,
                end_date: e,
                appids: c,
                publisherids: s,
                description: r,
                collision_type: g.NX,
                event: g.Cz,
                header: n,
                tooltip: g.j1,
                type: g.G2,
                prevent_weeklong: g.l5,
              };
              return (
                this.m_mapDiscountEvents.set(a.id, a),
                this.m_discountEventsListCallback.Dispatch(
                  this.GetAllDiscountEvents(),
                ),
                a
              );
            }
            _ = { response: l };
          } catch (t) {
            _ = t;
          }
          const f = (0, l.H)(_);
          return (
            console.error(
              "CDiscountEventStore.CreateDiscountEvent: failed",
              f.strErrorMsg,
              f,
            ),
            null
          );
        }
        async UpdateDiscountEventPublisherAndAppList(t, e, i, n) {
          const r = this.m_mapDiscountEvents.get(t);
          if (!r)
            return (
              console.error(
                "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                t,
              ),
              null
            );
          const s =
              p.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxupdatediscountevent",
            c = new FormData();
          c.append("sessionid", (0, p.KC)()),
            c.append("start_time", r.start_date.toString()),
            c.append("end_time", r.end_date.toString()),
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
              })(t, r, e, i),
            );
          let u = null;
          try {
            const t = await a().post(s, c, {
              withCredentials: !0,
              cancelToken: n?.token,
            });
            if (200 == t?.status && t.data?.success == o.R && t.data.eventid) {
              const t = { ...r, appids: i, publisherids: e };
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
          const d = (0, l.H)(u);
          return (
            console.error(
              "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
              d.strErrorMsg,
              d,
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
                p.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventbyid",
              n = { sessionid: (0, p.KC)(), discountid: t },
              r = await a().get(i, { params: n, withCredentials: !0 });
            if (
              200 == r?.status &&
              r?.data?.success == o.R &&
              r?.data?.discount_event
            )
              return (
                this.m_mapDiscountEvents.set(t, r.data.discount_event),
                this.GetDiscountEventCallback(t).Dispatch(
                  r.data.discount_event,
                ),
                r.data.discount_event
              );
            e = (0, l.H)(r);
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
                p.TS.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetdiscounteventapplist",
              n = { sessionid: (0, p.KC)(), discountid: t },
              r = await a().get(i, { params: n, withCredentials: !0 });
            if (
              200 == r?.status &&
              r?.data?.success == o.R &&
              r?.data?.discount_event
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
            e = (0, l.H)(r);
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
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          0;
        }
        Init() {
          const t = (0, p.Tc)("discount_events", "application_config");
          if (this.BIsConfigValid(t)) {
            for (const e of t) this.m_mapDiscountEvents.set(e.id, e);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else 0;
        }
        BIsConfigValid(t) {
          const e = t;
          return !(!e || !Array.isArray(e));
        }
      }
      function f() {
        return _.Get().GetFutureDiscountEvents();
      }
      function h() {
        return _.Get().GetDiscountEventListCallback();
      }
      function b(t) {
        const { rgDiscountEvents: e, eResult: i } = w(0, t);
        let n = [];
        return (
          e?.forEach((t) => {
            t.collision_type == g.Lg && (n = n.concat(t));
          }),
          { rgMajorSaleDiscountEvents: n, eResult: i }
        );
      }
      function w(t, e) {
        const i = _.Get().BLoadedViaInitOrFullLoad(),
          [n, r] = s.useState(i ? _.Get().GetAllDiscountEvents() : null),
          [a, c] = s.useState(null),
          l =
            t ||
            Number.parseInt((0, p.Tc)("publisherid", "application_config"));
        (0, m.hL)(_.Get().GetDiscountEventListCallback(), r),
          s.useEffect(() => {
            _.Get().BLoadedViaInitOrFullLoad() ||
              _.Get().LoadAllDiscountEvents(l).then(c);
          }, [n, l]);
        const u = a ?? (n?.length ? o.R : null);
        return s.useMemo(
          () => ({
            rgDiscountEvents: e ? n : _.Get().GetFutureDiscountEvents(),
            eResult: u,
          }),
          [n, u, e],
        );
      }
      function B(t) {
        return _.Get().GetDiscountEvent(t);
      }
      function D(t) {
        const { data: e } = (function (t) {
          const [e, i] = (0, s.useState)(_.Get().GetDiscountEvent(t)),
            [n, r] = s.useState(!!t);
          return (
            s.useEffect(() => {
              if ((!e && t) || (e?.id != t && t)) {
                (async () => {
                  try {
                    const e = await _.Get().LoadSingleDiscountEvent(t);
                    e && i(e);
                  } finally {
                    r(!1);
                  }
                })();
              } else r(!1);
            }, [t, e]),
            (0, m.hL)(_.Get().GetDiscountEventCallback(t), i),
            { data: e, isLoading: n }
          );
        })(t);
        return e;
      }
      function y(t) {
        const [e, i] = (0, s.useState)(_.Get().GetDiscountEvent(t)),
          [n, r] = (0, s.useState)(_.Get().GetAppList(t));
        return (
          (0, s.useEffect)(() => {
            ((!n && t) || (e?.id != t && t)) &&
              _.Get()
                .LoadSingleDiscountEventsAppList(t)
                .then((t) => {
                  t && (i(t.oDiscountEvent), r(t.rgAppList));
                });
          }, [e?.id, n, t]),
          (0, m.hL)(_.Get().GetDiscountEventCallback(t), i),
          (0, m.hL)(_.Get().GetAppListCallback(t), r),
          n ? { oDiscountEvent: e, rgAppList: n } : null
        );
      }
      function S(t, e, i, n, r) {
        return JSON.stringify({
          discount_event: {
            name: t,
            publisherids: n?.join(","),
            appids: r?.join(","),
            description: i,
            event: g.Cz,
            collision_type: g.NX,
            header: e,
            tooltip: g.j1,
            type: g.G2,
          },
        });
      }
      function v() {
        return { fnCreateDiscountEvent: _.Get().CreateDiscountEvent };
      }
      function M() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            _.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, n.Cg)([u.o], _.prototype, "GetDiscountEvent", null),
        (0, n.Cg)([u.o], _.prototype, "GetAppList", null),
        (0, n.Cg)([u.o], _.prototype, "CreateDiscountEvent", null),
        (0, n.Cg)(
          [u.o],
          _.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
    6319: (t, e, i) => {
      "use strict";
      i.d(e, {
        D6: () => v,
        DC: () => E,
        EF: () => D,
        G7: () => B,
        Iy: () => y,
        O4: () => R,
        _q: () => P,
        dN: () => I,
        es: () => C,
        fw: () => k,
        k: () => S,
        kJ: () => M,
        ms: () => z,
        uL: () => w,
      });
      var n = i(34629),
        r = i(41735),
        a = i.n(r),
        s = i(14947),
        o = i(90626),
        c = i(20194),
        l = i(37085),
        u = i(61975),
        d = i(62490),
        m = i(81393),
        p = i(68797),
        g = i(6419),
        _ = i(6144),
        f = i(73745),
        h = i(78327),
        b = i(4434);
      class w {
        constructor() {
          (0, s.Gn)(this);
        }
        static s_OptInRegs;
        m_mapRegistrations = new Map();
        m_mapRequestedAppIDs = new Map();
        m_mapOptInNameCallback = new Map();
        m_mapSingleAppRegistrationChange = new Map();
        m_loadCountChangeCallback = new _.lu();
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
              this.m_mapSingleAppRegistrationChange.set(i, new _.lu()),
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
            e.forEach((e, r) => {
              if (e == t.length) {
                let t = this.m_mapRegistrations.get(n).get(r);
                (0, m.wT)(t, "Missing OptIn Restration"), i.set(r, t);
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
                this.m_mapOptInNameCallback.set(t, new _.lu()),
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
              h.TS.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
            n = { sessionid: (0, h.KC)(), opt_in_name: t, opt_in_only: e },
            r = await a().get(i, { params: n, withCredentials: !0 });
          return r?.data?.data
            ? this.UpdateRegAndTrackInStore(t, r.data.data)
            : r?.data?.data;
        }
        async FetchPendingReviewOptInRegistrationn(t) {
          const e =
              h.TS.PARTNER_BASE_URL + "optin/ajaxgetpendingreviewregistrations",
            i = { sessionid: (0, h.KC)(), opt_in_name: t },
            n = await a().get(e, { params: i, withCredentials: !0 });
          return n?.data?.data
            ? this.UpdateRegAndTrackInStore(t, n.data.data)
            : n?.data?.data;
        }
        async LoadOptInRegistration(t, e, i) {
          if (this.GetRegistration(e, t)) return !0;
          const n = this.m_mapRequestedAppIDs.get(t)?.get(e);
          if (n) return n;
          try {
            const n = h.TS.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
              r = { sessionid: (0, h.KC)(), appid: e, opt_in_name: t },
              s = await a().get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: i?.token,
              });
            if (s?.data?.success == l.R && s.data.optin_registration) {
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
              const t = (0, p.H)(s);
              console.error(
                "LoadOptInRegistration : failed with a response and: " +
                  t.strErrorMsg,
                t,
              );
            }
          } catch (t) {
            const e = (0, p.H)(t);
            console.error(
              "LoadOptInRegistration : failed with " + e.strErrorMsg,
              e,
            );
          }
          return !1;
        }
        async LoadMultiOptInRegistration(t, e, i, n) {
          if (0 == e.length || 0 == t.length) return !1;
          let r = null;
          const s = new Promise((t, e) => {
            r = t;
          });
          (t = d.Ew(t).sort()),
            (e = d.Ew(e).sort()),
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
            h.TS.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
          let u = null;
          try {
            for (; o.length > 0; ) {
              let e = 0;
              const r = [];
              for (; o.length > 0 && e < 5; ) {
                const n = o.splice(0, 50),
                  s = {
                    rgOptInNames: t.join(","),
                    rgAppIDs: n.join(","),
                    origin: self.origin,
                  };
                r.push(
                  a().get(c, {
                    params: s,
                    withCredentials: !0,
                    cancelToken: i?.token,
                  }),
                ),
                  (e += 1);
              }
              const s = await Promise.all(r);
              for (const t of s) {
                if (
                  200 != t?.status ||
                  t.data?.success != l.R ||
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
          if (null == u) r(!0);
          else {
            const i = (0, p.H)(u);
            console.error(
              "Could not load OptIn for Apps",
              e,
              t,
              i.strErrorMsg,
              i,
            ),
              r(!1);
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
            n.append("sessionid", (0, h.KC)()),
              Object.keys(e).forEach((t) => n.append(t, e[t]));
            const r =
                h.TS.PARTNER_BASE_URL +
                "optin/ajaxupdateoptinregistration/" +
                t,
              s = await a().post(r, n, { withCredentials: !0 });
            if (200 == s?.status && s.data?.success == l.R) return null;
            i = (0, p.H)(s);
          } catch (t) {
            i = (0, p.H)(t);
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
            const r = new FormData();
            r.append("sessionid", (0, h.KC)()),
              r.append("appid", "" + t),
              r.append("opt_in_name", e.opt_in_name),
              r.append("jsondata", JSON.stringify(e)),
              i && r.append("bCreatePendingInvite", "true");
            const s =
                h.TS.PARTNER_BASE_URL +
                "optin/ajaxupdateoptinregistrationpayload/" +
                t,
              o = await a().post(s, r, { withCredentials: !0 });
            if (200 == o?.status && o.data?.success == l.R) {
              const i = e.opt_in_name.startsWith("sale_")
                  ? e.opt_in_name
                  : "sale_" + e.opt_in_name,
                n = this.m_mapRegistrations.get(t).get(i);
              n.jsondata = e;
              const r = { ...n };
              return (
                this.m_mapRegistrations.get(t).set(e.opt_in_name, r),
                this.GetSingleAppRegistrationChange(t, e.opt_in_name).Dispatch(
                  r,
                ),
                null
              );
            }
            n = (0, p.H)(o);
          } catch (t) {
            n = (0, p.H)(t);
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
            const r = e.opt_in_name || e.jsondata.opt_in_name,
              s = new FormData();
            s.append("sessionid", (0, h.KC)()),
              s.append("appid", "" + t),
              s.append("opt_in_name", r),
              s.append("approved", "" + i);
            const o =
                h.TS.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
              c = await a().post(o, s, { withCredentials: !0 });
            if (200 == c?.status && c.data?.success == l.R) {
              const e = { ...this.m_mapRegistrations.get(t).get(r) };
              return (
                (e.accountid_appeal = h.iA.accountid),
                (e.appeal_state = i ? u.vm.Tn : u.vm.n$),
                this.m_mapRegistrations.get(t).set(r, e),
                this.GetSingleAppRegistrationChange(t, r).Dispatch(e),
                !0
              );
            }
            n = (0, p.H)(c);
          } catch (t) {
            n = (0, p.H)(t);
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
            w.s_OptInRegs ||
              ((w.s_OptInRegs = new w()),
              (window.COptInRegistrations = w.s_OptInRegs),
              w.s_OptInRegs.Init()),
            w.s_OptInRegs
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
              (0, h.Tc)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(t) && this.InternalAddRegistrations(t);
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
      function B(t, e) {
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
      function D() {
        return o.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: w.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function y(t, e, i) {
        const [n, r] = o.useState(null),
          a = (0, b.m)("useMultiLoadOptInAppReg");
        return (
          (0, o.useEffect)(() => {
            const n = e?.filter(Boolean);
            n?.length > 0 && t?.length > 0
              ? w
                  .Get()
                  .LoadMultiOptInRegistration(
                    n.map(() => t),
                    n,
                    a,
                    i,
                  )
                  .then(() => {
                    const e = new Map();
                    n.forEach((i) => {
                      const n = w.Get().GetRegistration(i, t);
                      n && e.set(i, n);
                    }),
                      r(e);
                  })
              : r(new Map());
          }, [t, e, a, i]),
          n
        );
      }
      function S(t) {
        const [e, i] = o.useState(w.Get().GetAllOptInRegistrations(t));
        return (
          (0, f.hL)(w.Get().GetOptInNameRegistrationsCallbackList(t), i), e
        );
      }
      function v(t) {
        const e = S(t),
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
      function M(t, e) {
        const i = (0, c.I)({
          queryKey: ["useAllOptInRegistrationByName", t, Boolean(e)],
          queryFn: () => w.Get().FetchOptInRegistrationForOptIn(t, e),
          staleTime: 36e5,
        });
        return i.isLoading ? null : i.data;
      }
      function I(t) {
        const e = (0, c.I)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", t],
          queryFn: () => w.Get().FetchPendingReviewOptInRegistrationn(t),
          retry: !1,
          staleTime: 36e5,
          enabled: t?.length > 0,
        });
        return {
          rgPendingReviewRegistrations: e.isLoading ? null : e.data,
          bIsInError: e.isError,
        };
      }
      function R(t, e) {
        const i = M(t, !1),
          [n, r] = (0, o.useState)(i?.find((t) => t.appid == e));
        return (0, f.hL)(w.Get().GetSingleAppRegistrationChange(e, t), r), n;
      }
      function E(t, e) {
        const [i, n] = (0, o.useState)(
          w.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e),
        );
        return (0, f.hL)(w.Get().GetSingleAppRegistrationChange(t, e), n), i;
      }
      function P(t, e) {
        const [i, n] = (0, o.useState)(
          w.Get().GetExistingOptInRegistartion(t, e),
        );
        return (0, f.hL)(w.Get().GetSingleAppRegistrationChange(t, e), n), i;
      }
      function C() {
        return {
          fnUpdateOptInRegistrationJson: w.Get().UpdateOptInRegistrationJson,
        };
      }
      function k() {
        return { fnUpdateAppealState: w.Get().UpdateAppealState };
      }
      function z() {
        const [t, e] = (0, o.useState)(w.Get().GetLoadCount());
        return (
          (0, f.hL)(w.Get().GetLoadCountChange(), e), w.Get().GetLoadCount()
        );
      }
      (0, n.Cg)(
        [g.o],
        w.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, n.Cg)(
          [g.o],
          w.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, n.Cg)([g.o], w.prototype, "LoadMultiOptInRegistration", null),
        (0, n.Cg)([g.o], w.prototype, "UpdateOptInRegistrationJson", null),
        (0, n.Cg)([g.o], w.prototype, "UpdateAppealState", null),
        (0, n.Cg)([s.XI], w.prototype, "Init", null);
    },
    48996: (t, e, i) => {
      "use strict";
      i.d(e, {
        $U: () => D,
        $p: () => A,
        CW: () => O,
        Fk: () => k,
        Ko: () => w,
        Lj: () => B,
        Mh: () => v,
        XA: () => z,
        XL: () => L,
        a8: () => E,
        aU: () => C,
        gr: () => R,
        hC: () => P,
        iI: () => S,
        qN: () => y,
        qT: () => _,
        sZ: () => f,
        sk: () => G,
        w8: () => M,
        zq: () => I,
        zy: () => F,
      });
      var n = i(41735),
        r = i.n(n),
        a = i(90626),
        s = i(37085),
        o = i(44165),
        c = i(68797),
        l = i(6144),
        u = i(73745),
        d = i(41338),
        m = i(78327),
        p = i(62490),
        g = i(14771);
      const _ = 95,
        f = 10;
      class h {
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
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
          );
        }
        constructor() {
          0;
        }
        Init() {
          const t = (0, m.Tc)("package_discounts", "application_config");
          this.BIsDiscountPayloadValid(t) && this.InternalAddDiscounts(t);
          const e = (0, m.Tc)("max_discount_percentages", "application_config");
          if (this.BIsMaxDiscountPayloadValid(e))
            for (let t in e)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(t), e[t]);
          else 0;
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
          const n = p.Ew(t).sort().join(",");
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
          const r = Array.from(n).sort();
          if (0 == r.length) return s.R;
          let a = null;
          const o = new Promise((t, e) => {
              a = t;
            }),
            l = (0, m.Tc)("publisherid", "application_config");
          let u = null,
            d = null;
          try {
            const t = [],
              a = new Array();
            for (; r.length > 0; ) {
              const n = r.splice(0, 50);
              a.push(n), t.push(this.LoadPackageDiscountsFromPHP(l, n, e, i));
            }
            const o = await Promise.all(t),
              c = [];
            for (const t of o) {
              if (
                ((d = a.unshift()),
                200 != t?.status || t.data?.success != s.R || !t.data.discounts)
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
          if (null == u) a(s.R);
          else {
            const t = (0, c.H)(u);
            console.error(
              "Could not load Discounts for packages",
              d,
              t.strErrorMsg,
              t,
            ),
              a(u?.response?.data?.success ?? s.zi);
          }
          return o;
        }
        async LoadPackageDiscountsFromPHP(t, e, i, n = 0) {
          const a = { packageids: e.join(","), origin: self.origin },
            o =
              m.TS.PARTNER_BASE_URL +
              "promotion/discounts/ajaxgetpackagediscounts/" +
              t;
          let c,
            l = 3;
          for (; l-- > 0; )
            try {
              if (
                ((c = await r().get(o, {
                  params: a,
                  withCredentials: !0,
                  cancelToken: i?.token,
                  timeout: n,
                })),
                200 == c?.status && c.data?.success == s.R && c.data.discounts)
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
              m.TS.PARTNER_BASE_URL +
              "packages/createoreditdiscount/" +
              t.packageID,
            n = new FormData();
          n.append("sessionid", (0, m.KC)()),
            t.nDiscountID && n.append("id", t.nDiscountID.toString()),
            n.append("name", t.strDiscountName),
            n.append("description", t.strDiscountDescription),
            t.discountEventID &&
              !w(t.discountEventID) &&
              n.append("type", t.discountEventID),
            n.append("percent", t.nDiscountPct.toString()),
            n.append("start_date", new Date(1e3 * t.rtStartDate).toISOString()),
            n.append("end_date", new Date(1e3 * t.rtEndDate).toISOString());
          let a = null;
          try {
            const o = await r().post(i, n, {
              withCredentials: !0,
              cancelToken: e?.token,
            });
            if (
              ((o.data.msg = o.data.msg ?? o.data.message),
              200 == o?.status && o.data?.success == s.R && o.data.discountid)
            )
              return (
                (t.bChangedLocally = !1),
                (t.nDiscountID = o.data.discountid),
                (t.nDiscountPct = o.data.percentage),
                this.InternalAddDiscounts([t]),
                o.data
              );
            a = { response: o };
          } catch (t) {
            a = t;
          }
          const o = (0, c.H)(a);
          return (
            console.error(
              "CPackageDiscountStore.SaveDiscountToServer: failed",
              o.strErrorMsg,
              o,
            ),
            a?.response?.data ?? { success: s.zi }
          );
        }
        async DeleteDiscountOnServer(t, e, i, n) {
          const a =
              m.TS.PARTNER_BASE_URL + "packages/removepackagediscount/" + e,
            o = new FormData();
          o.append("sessionid", (0, m.KC)()),
            o.append("discountid", t.toString());
          let l = null;
          try {
            const c = await r().post(a, o, {
              withCredentials: !0,
              cancelToken: n?.token,
            });
            if (200 == c?.status && c.data?.success == s.R)
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
            l?.response?.data ?? { success: s.zi }
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
          const e = _;
          return this.m_mapMaxDiscountPercentageByPackageId.get(t) ?? e;
        }
        GetMaxDiscountPercentageForGroup(t) {
          const e = t.map((t) => this.GetMaxDiscountPercentage(t));
          return Math.min(...e);
        }
      }
      function b(t) {
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, d.Yz)(t.strDiscountName)}`;
      }
      function w(t) {
        return t.startsWith("custom-event-");
      }
      function B(t) {
        return h.Get().GetDiscountByID(t);
      }
      function D(t) {
        return h.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function y(t) {
        return h.Get().GetAllDiscountsForPackage(t);
      }
      function S(t) {
        return h.Get().GetCallbackListForPackage(t);
      }
      function v() {
        return h.Get().GetAllDiscountsForAllPackages();
      }
      function M() {
        return h.Get().GetGlobalCallbackList();
      }
      function I() {
        return a.useCallback(
          (t, e, i) => h.Get().LoadPackageDiscounts(t, e, i),
          [],
        );
      }
      function R() {
        const t = (t) => h.Get().SaveDiscountToServer(t),
          e = (t, e, i) => h.Get().DeleteDiscountOnServer(t, e, i);
        return a.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          [],
        );
      }
      function E(t) {
        return new Map(
          Array.from(t.map((t) => [t, h.Get().GetDiscountByID(t)])),
        );
      }
      function P(t) {
        const e = (0, o.f1)(),
          [i, n] = a.useState(h.Get().GetAllDiscountsForPackage(t));
        return (
          (0, u.hL)(h.Get().GetCallbackListForPackage(t), n),
          a.useMemo(() => {
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
      function C(t) {
        const e = (0, o.f1)();
        if (!t) return null;
        let i = null;
        return (
          t.forEach((t) => {
            const n = h.Get().GetAllDiscountsForPackage(t);
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
      function k(t, e, i) {
        const [n, r] = (0, a.useState)(),
          [s, o] = (0, a.useState)([]);
        return (
          (0, a.useEffect)(() => {
            if (e < i && t?.length > 0) {
              let n = new Array(),
                a = new Array(),
                s = new Array();
              for (let t = e; t < i; t += g.Kp.PerDay) n.push(t), a.push(!1);
              t.forEach((t) => {
                const r = h.Get().GetAllDiscountsForPackage(t);
                if (r?.length > 0)
                  for (const t of r)
                    t.rtStartDate > i ||
                      t.rtEndDate < e ||
                      (s.push(t),
                      n.forEach((e, i) => {
                        e < t.rtEndDate &&
                          t.rtStartDate < e + g.Kp.PerDay &&
                          (a[i] = !0);
                      }));
              }),
                o(s),
                r(a.filter((t) => !0 === t).length);
            } else r(0);
          }, [t, e, i]),
          { nDaysInDiscount: n, rgDiscountWithOverlap: s }
        );
      }
      function z(t) {
        const e = (0, o.f1)(),
          [i, n] = a.useState(h.Get().GetAllDiscountsForAllPackages());
        return (
          (0, u.hL)(h.Get().GetGlobalCallbackList(), n),
          a.useMemo(() => {
            let n = null;
            if (null == i) return { mostRecentDiscount: n, bLoading: !0 };
            for (const i of t) {
              const t = h.Get().GetAllDiscountsForPackage(i) ?? [];
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
      function G(t) {
        const [e, i] = a.useState(h.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, u.hL)(h.Get().GetCallbackListForDiscountEvent(t), i), e;
      }
      function O(t) {
        const [e, i] = a.useState(h.Get().GetAllDiscountsForPackage(t));
        (0, u.hL)(h.Get().GetCallbackListForPackage(t), i);
        const [n, s] = a.useState(!1),
          o = I();
        return (
          a.useEffect(() => {
            if (!e && t) {
              if (!n && o) {
                const e = r().CancelToken.source();
                o([t]).then(() => {
                  e.token.reason || s(!0);
                });
              }
            } else n || s(!0);
          }, [e, n, s, t, o]),
          e
        );
      }
      function A(t) {
        return h.Get().GetMaxDiscountPercentage(t);
      }
      function L(t) {
        return t.some(
          (t) => t.nDiscountPct > h.Get().GetMaxDiscountPercentage(t.packageID),
        );
      }
      function F(t) {
        return h.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    87924: (t, e, i) => {
      "use strict";
      i.d(e, {
        Be: () => R,
        C5: () => et,
        Gq: () => tt,
        NK: () => P,
        QD: () => N,
        T1: () => z,
        UZ: () => b,
        WV: () => x,
        ZM: () => q,
        _9: () => Y,
        bA: () => U,
        ew: () => H,
        gr: () => J,
        h5: () => M,
        hk: () => B,
        hu: () => I,
        i3: () => V,
        jM: () => S,
        jf: () => v,
        l4: () => W,
        nu: () => G,
        s3: () => w,
        ve: () => $,
        wF: () => Z,
        we: () => D,
        wk: () => Q,
        wn: () => E,
        zP: () => K,
        zU: () => y,
      });
      var n = i(30168),
        r = i(258),
        a = i(6319),
        s = i(48996),
        o = i(96745),
        c = i(7247),
        l = i(70986),
        u = i(90626),
        d = i(44165),
        m = i(16021),
        p = i(6144),
        g = i(73745),
        _ = i(41338),
        f = i(14771),
        h = i(43552);
      const b = 0,
        w = 1,
        B = 2,
        D = 3,
        y = 4,
        S = 5,
        v = 6,
        M = 7,
        I = 8,
        R = 9,
        E = 10,
        P = 11;
      function C(t, e) {
        return (
          !!t == !!e &&
          t?.packageID == e?.packageID &&
          t?.discountEventID == e?.discountEventID &&
          t?.eState == e?.eState &&
          t?.rgConflictDetails?.length == e?.rgConflictDetails?.length &&
          t?.optInReg == e?.optInReg &&
          k(t?.discount, e?.discount) &&
          t?.nBaseAppID == e?.nBaseAppID &&
          t?.bChangedLocally == e?.bChangedLocally
        );
      }
      function k(t, e) {
        return (
          (!e && 0 == (t?.nDiscountPct ?? 0)) ||
          (!!e && e.nDiscountPct == t?.nDiscountPct)
        );
      }
      const z = 30,
        G = z * f.Kp.PerDay - 1.5 * f.Kp.PerHour,
        O = 10 * f.Kp.PerMinute;
      class A {
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
            A.s_Singleton || ((A.s_Singleton = new A()), A.s_Singleton.Init()),
            A.s_Singleton
          );
        }
        static IsInitialized() {
          return !!A.s_Singleton;
        }
        constructor() {
          0;
        }
        Init() {
          for (const t of (0, o.OM)())
            A.Get().ComputePackageState(t),
              (0, s.iI)(t).Register(() => {
                A.Get().ComputePackageState(t);
              });
          (0, h.ou)().Register(() => {
            for (const t of (0, o.OM)()) A.Get().ComputePackageState(t, !0);
          }),
            A.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(t, e, i) {
          const n = A.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e);
          if (n?.eState != w)
            return (
              console.error(
                "Cannot change discount in current state:",
                n.eState,
              ),
              null
            );
          const r = n.discount,
            a = (0, h.Z6)(e),
            s = {
              nDiscountID: r?.nDiscountID,
              packageID: t,
              nDiscountPct: i,
              strDiscountName: a.name,
              strDiscountDescription: a.description,
              rtStartDate: a.start_date,
              rtEndDate: a.end_date,
              discountEventID: a.id,
              bChangedLocally: !0,
            };
          return k(s, r)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(t) ||
                this.m_mapLocalPackageDiscountOverrides.set(t, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(t).set(e, s),
              this.ComputePackageState(t),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              ),
              s);
        }
        GetHighestPackageDiscount(t) {
          let e = this.m_mapPackageStateForDiscountEvents.get(t);
          if (!e) return 0;
          let i = 0;
          return (
            e.forEach((t, e) => {
              t.eState == w && (i = Math.max(i, t.discount?.nDiscountPct || 0));
            }),
            i
          );
        }
        GetLocalPackageDiscountOverrides() {
          const t = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((e) =>
              e.forEach((e) => {
                k(e, e.nDiscountID && (0, s.Lj)(e.nDiscountID)) || t.push(e);
              }),
            ),
            t.sort(j),
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
          const e = (0, d.sB)() - G,
            i = (0, s.qN)(t);
          if (!i) return null;
          const n = new Map(
            i.filter((t) => t.rtEndDate > e).map((t) => [t.discountEventID, t]),
          );
          return (
            this.m_mapLocalPackageDiscountOverrides.get(t)?.forEach((t, e) => {
              k(t, n.get(e)) || n.set(e, t);
            }),
            n
          );
        }
        GetDiscountGridCellCallbackList(t, e) {
          if (!t || !e) return null;
          this.m_mapDiscountGridCellCallbackList.has(t) ||
            this.m_mapDiscountGridCellCallbackList.set(t, new Map());
          const i = this.m_mapDiscountGridCellCallbackList.get(t);
          return i.has(e) || i.set(e, new p.lu()), i.get(e);
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
            A.Get().m_mapPackageStateForDiscountEvents.forEach((i, n) =>
              e.push(i.get(t)),
            ),
            e
          );
        }
        ComputePackageState(t, e) {
          const i = m.A.Get().GetPackage(t);
          if (!i) return;
          const n = (0, h.E1)(),
            s = (0, c.i$)(i),
            o = s.nBaseAppID;
          let l = o && a.uL.Get().GetOptInRegistrationAndEligibilityForApp(o);
          o ||
            l ||
            (l = a.uL
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                i.GetIncludedAppIDs(),
              ));
          const u = this.GetPackageDiscountsIncludingOverrides(t),
            d = !u,
            p = d
              ? null
              : Array.from(u.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const g = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const a of n) {
            if (e && g.has(a.id)) continue;
            const n = { packageID: t, discountEventID: a.id, nBaseAppID: o };
            if (
              ((n.discount = u?.get(a.id)),
              (n.bChangedLocally = !!n.discount?.bChangedLocally),
              d)
            )
              n.eState = b;
            else if (n.discount?.nDiscountPct > 0) {
              n.eState = w;
              const t = a.opt_in_name && l?.get(a.opt_in_name);
              t && (n.optInReg = t);
            } else {
              if (((n.eState = w), T(a, i))) n.eState = E;
              else if (a.opt_in_name) {
                const { ePackageDiscountState: t, optInRegistration: e } = F(
                  a.opt_in_name,
                  l,
                  i,
                  s,
                  a,
                );
                (n.eState = t), (n.optInReg = e);
              }
              if (n.eState != E && n.eState != y && n.eState != S) {
                const e = L(t, a, p);
                e.ePackageDiscountState != w &&
                  ((n.eState = e.ePackageDiscountState),
                  (n.rgConflictDetails = e.rgConflictingDiscounts.map(
                    (t) =>
                      (0, r.E7)(t.discountEventID)?.name ?? t.strDiscountName,
                  )));
              }
            }
            C(n, g.get(a.id)) ||
              (g.set(a.id, n),
              this.GetDiscountPackageCallbackList(t).Dispatch(),
              this.GetDiscountGridCellCallbackList(t, a.id).Dispatch(n),
              this.GetDiscountEventColumnCallbackList(a.id).Dispatch(
                this.GetAllPackageStatesForDiscountEvent(a.id),
              ));
          }
        }
        GetAvailableDiscountEventsInRange(t, e, i) {
          const n = this.m_mapPackageStateForDiscountEvents.get(t),
            r = new Set([w, P, B, D]);
          return (0, h.E1)()
            .filter(
              (t) =>
                e <= t.start_date &&
                t.end_date <= i &&
                r.has(n.get(t.id).eState),
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
                return e?.collision_type != n.Lg;
              })
              .forEach((t) => {
                t.rtEndDate + G < i && (i = t.rtEndDate + G);
              }),
            i
          );
        }
        GetFutureDiscountRanges(t) {
          const e = m.A.Get().GetPackage(t),
            i = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !i) return [];
          const a = Array.from(i.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate,
            ),
            s = (0, d.sB)(),
            o = e.GetReleaseDateRTime(),
            c = (0, h.zL)(t),
            u = this.GetFurthestCooldownFromPastDiscounts(a),
            p = Math.max(s, (o ?? 0) + G, c + G, u),
            g = [],
            _ = new Set();
          let b = p;
          for (let e = 0; e < a.length; e++) {
            const i = a[e];
            if (0 == i.nDiscountPct) continue;
            if (i.rtStartDate < p) continue;
            const s = (0, r.E7)(i.discountEventID);
            let o = i.rtStartDate - G;
            const c = s?.collision_type == n.Lg;
            if (c && ((o = i.rtStartDate + O), e + 1 < a.length)) {
              const t = a[e + 1],
                i = (0, h.Z6)(t.discountEventID);
              i?.collision_type != n.Lg && (o = Math.min(o, t.rtStartDate - G));
            }
            if (b + f.Kp.PerDay < o) {
              const e = {
                bIsAvailable: !0,
                rtStartDate: b,
                rtEndDate: o,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  t,
                  b,
                  o,
                ),
              };
              g.push(e), e.rgDiscountEventIDs.forEach((t) => _.add(t));
            }
            const u = {
              bIsAvailable: !1,
              rtStartDate: i.rtStartDate,
              rtEndDate: i.rtEndDate,
              discount: i,
              rgDiscountEventIDs: [i.discountEventID],
            };
            if (
              (g.push(u),
              _.add(i.discountEventID),
              (b = i.rtEndDate + G),
              c && ((b = i.rtEndDate - O), e - 1 >= 0))
            ) {
              const t = a[e - 1],
                i = (0, h.Z6)(t.discountEventID);
              i?.collision_type != n.Lg && (b = Math.max(b, t.rtEndDate + G));
            }
            const d = (0, l.M)(b);
            d - b <= 2 * f.Kp.PerHour && (b = d);
          }
          const B = (0, l.M)(s + f.Kp.PerYear / 2);
          if (b + f.Kp.PerDay < B) {
            const e = {
              bIsAvailable: !0,
              rtStartDate: b,
              rtEndDate: B,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                t,
                b,
                B,
              ),
            };
            g.push(e), e.rgDiscountEventIDs.forEach((t) => _.add(t));
          }
          const D = (0, h.E1)().filter(
            (e) =>
              e.collision_type == n.Lg &&
              !_.has(e.id) &&
              this.m_mapPackageStateForDiscountEvents.get(t).get(e.id).eState ==
                w,
          );
          for (const t of D)
            for (let e = 0; e < g.length; e++)
              if (
                g[e].rtStartDate <= t.start_date &&
                (e == g.length - 1 || t.start_date < g[e + 1].rtStartDate)
              ) {
                const i = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: t.start_date,
                  rtEndDate: t.end_date,
                  rgDiscountEventIDs: [t.id],
                };
                g.splice(e + 1, 0, i);
                break;
              }
          return g;
        }
      }
      function L(t, e, i) {
        let a = w;
        const s = [];
        let o = !1;
        const c = m.A.Get().GetPackage(t);
        if (c?.GetReleaseDateRTime() > e.start_date - G)
          return (
            (a = v),
            {
              ePackageDiscountState: a,
              rgConflictingDiscounts: s,
              bChangedLocally: o,
            }
          );
        if ((0, h.zL)(t) > e.start_date - G)
          return (
            (a = M),
            {
              ePackageDiscountState: a,
              rgConflictingDiscounts: s,
              bChangedLocally: o,
            }
          );
        for (const t of i) {
          if (e.id == t.discountEventID) continue;
          const i = (0, r.E7)(t.discountEventID),
            c = e.collision_type == n.Lg || i?.collision_type == n.Lg,
            l = c ? e.start_date + O : e.start_date - G,
            u = c ? e.end_date - O : e.end_date + G;
          if (t.rtEndDate > l && u > t.rtStartDate) {
            if (((o = o || t.bChangedLocally), 0 == t.nDiscountPct)) continue;
            s.push(t), (a = c ? R : I);
          }
        }
        return {
          ePackageDiscountState: a,
          rgConflictingDiscounts: s,
          bChangedLocally: o,
        };
      }
      function F(t, e, i, n, r) {
        let s,
          o = S;
        if (e)
          (s = e.get(t)),
            !s || s.restricted || s.pruned
              ? ((o = y), (s = { restricted: !0 }))
              : (o = s.opt_in ? w : s.invited || !s.time_opted_in ? B : D);
        else if (!n.nBaseAppID) {
          const t = i
            .GetIncludedAppIDs()
            .map((t) =>
              a.uL
                .Get()
                .GetOptInRegistrationAndEligibilityForApp(t)
                ?.get(r.opt_in_name),
            )
            .filter(Boolean);
          t.some((t) => t.opt_in)
            ? (o = w)
            : t.some((t) => !t.restricted && !t.pruned) && (o = P);
        }
        return { ePackageDiscountState: o, optInRegistration: s };
      }
      function T(t, e) {
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
      function j(t, e) {
        if (t.packageID != e.packageID) {
          const i = m.A.Get().GetPackage(t.packageID)?.GetName(),
            n = m.A.Get().GetPackage(e.packageID)?.GetName();
          return (0, _.kd)(i, n);
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
      function U() {
        return u.useCallback(() => {
          A.Get();
        }, []);
      }
      function x() {
        const [t, e] = u.useState(A.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, g.hL)(A.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function q() {
        return u.useCallback(
          () => A.Get().GetLocalPackageDiscountOverrides()?.length > 0,
          [],
        );
      }
      function W() {
        return u.useCallback(
          (t) => A.Get().DiscardAllLocalPackageDiscountOverrides(t),
          [],
        );
      }
      function N() {
        return u.useCallback(
          (t, e) => A.Get().OptInRegistrationUpdatedForApp(t, e),
          [],
        );
      }
      function H() {
        return u.useCallback(
          (t, e) => A.Get().DiscardLocalPackageDiscountOverride(t, e),
          [],
        );
      }
      function V(t, e) {
        const i = A.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e);
        return i?.eState == w ? (i?.discount?.nDiscountPct ?? 0) : null;
      }
      function K(t, e) {
        const [i, n] = u.useState(() =>
          A.Get().m_mapPackageStateForDiscountEvents.get(t)?.get(e),
        );
        (0, g.hL)(A.Get().GetDiscountGridCellCallbackList(t, e), n);
        return {
          packageState: i,
          fnSetDiscountPct: u.useCallback(
            (i) => {
              A.Get().OverridePackageDiscountPct(t, e, i);
            },
            [t, e],
          ),
        };
      }
      function $() {
        return u.useCallback((t, e, i) => {
          const n = [];
          for (const r of i) {
            const i = A.Get().OverridePackageDiscountPct(r, e, t);
            i && n.push(i);
          }
          return n;
        }, []);
      }
      function J(t) {
        const e = Z(t);
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
      function Z(t) {
        const [e, i] = u.useState(() => X(t)),
          n = u.useCallback(() => {
            i(X(t));
          }, [t]);
        return (
          u.useEffect(n, [t, n]),
          (0, g.hL)(A.Get().GetDiscountEventColumnCallbackList(t), n),
          e
        );
      }
      function X(t) {
        const e = A.Get().GetAllPackageStatesForDiscountEvent(t),
          i = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const t of e)
          switch (t?.eState) {
            case b:
              break;
            case w:
              (t.discount?.nDiscountPct ?? 0) > 0
                ? i.alreadySet.add(t.packageID)
                : i.available.add(t.packageID);
              break;
            case v:
            case M:
            case I:
            case R:
              i.conflicts.add(t.packageID);
              break;
            case B:
            case D:
              i.needRegistration.add(t.packageID);
              break;
            case y:
            case S:
            case E:
              i.ineligibile.add(t.packageID);
          }
        return i;
      }
      function Y(t) {
        return (
          !!(0, s.$U)(t).some((t) => t.nDiscountPct > 0) ||
          !(
            !A.IsInitialized() ||
            !A.Get()
              .GetAllPackageStatesForDiscountEvent(t)
              .some((t) => (t.discount?.nDiscountPct ?? 0) > 0)
          )
        );
      }
      function Q(t, e = !0) {
        if ((0, s.Ko)(t)) return !0;
        if (!e && t.startsWith("weeklongdeal_")) return !1;
        const i = (0, r.E7)(t);
        if (!i?.opt_in_name) return !0;
        const n = a.uL.Get().GetAllOptInRegistrations(i.opt_in_name);
        return !!n?.length && n.some((t) => !t.restricted && !t.pruned);
      }
      function tt(t) {
        const e = (function () {
            const [t, e] = u.useState(A.IsInitialized());
            return (0, g.hL)(A.s_initializationCallbackList, e), t;
          })(),
          [i, n] = u.useState(e ? A.Get().GetFutureDiscountRanges(t) : []),
          r = u.useCallback(
            () => n(e ? A.Get().GetFutureDiscountRanges(t) : []),
            [t, e],
          );
        return (
          (0, g.hL)(
            e && A.Get().GetLocalPackageDiscountOverrideCallbackList(),
            r,
          ),
          (0, g.hL)(e && (0, s.iI)(t), r),
          u.useEffect(r, [t, e, r]),
          i
        );
      }
      function et(t) {
        let [e, i] = u.useState(() => A.Get().GetHighestPackageDiscount(t)),
          n = u.useCallback(() => {
            i(A.Get().GetHighestPackageDiscount(t));
          }, [t, i]);
        return (0, g.hL)(A.Get().GetDiscountPackageCallbackList(t), n), e;
      }
    },
    43552: (t, e, i) => {
      "use strict";
      i.d(e, {
        Ad: () => y,
        E1: () => h,
        Fs: () => v,
        Ix: () => B,
        Jn: () => M,
        Vk: () => p,
        Z6: () => b,
        dp: () => D,
        ou: () => w,
        ry: () => m,
        u7: () => S,
        v8: () => d,
        zL: () => f,
      });
      var n = i(90626),
        r = i(44165),
        a = i(6144),
        s = i(73745),
        o = i(78327),
        c = i(258),
        l = i(48996),
        u = i(87924);
      const d = "deepest-past",
        m = "most-recent",
        p = "next-available",
        g = "related-discount-view";
      class _ {
        m_rgDiscountEvents;
        m_mapDiscountEventsByID = new Map();
        m_discountEventsCallbackList = new a.lu();
        m_mapLastTimeRaisedPrices = new Map();
        m_strSelectedDiscountEventID = null;
        m_bIncludeWeeklongEvents = !1;
        m_bIncludeCustomEvents = !0;
        m_bIncludeIneligibleEvents = !1;
        m_bIncludeConflictsInSingleEventView = !0;
        m_bEditingDailyDealDiscount = !1;
        m_eRelatedDiscountView = d;
        m_RelatedDiscountViewCallbackList = new a.lu();
        m_gridEventSelectionParametersCallbackList = new a.lu();
        m_setVisibleDiscountEventIDs = new Set();
        m_visibleDiscountEventIDsCallbackList = new a.lu();
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        constructor() {
          0;
        }
        Init() {
          const t = (0, o.Tc)("price_increase_times", "application_config");
          if (this.BIsPriceIncreasePayloadValid(t))
            for (let e in t)
              this.m_mapLastTimeRaisedPrices.set(Number(e), t[e]);
          else 0;
          (this.m_eRelatedDiscountView = window.localStorage.getItem(g) ?? d),
            this.UpdateDiscountEventsForGrid(),
            (0, c.yB)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, l.w8)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const t = (0, c.tW)(),
            e = (0, l.Mh)(),
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
      function f(t) {
        return _.Get().m_mapLastTimeRaisedPrices.get(t) ?? 0;
      }
      function h() {
        return _.Get().m_rgDiscountEvents;
      }
      function b(t) {
        return _.Get().m_mapDiscountEventsByID.get(t);
      }
      function w() {
        return _.Get().m_discountEventsCallbackList;
      }
      function B() {
        const [t, e] = n.useState(_.Get().m_rgDiscountEvents);
        return (0, s.hL)(_.Get().m_discountEventsCallbackList, e), t;
      }
      function D() {
        const [t, e] = n.useState(_.Get().m_setVisibleDiscountEventIDs);
        return (0, s.hL)(_.Get().m_visibleDiscountEventIDsCallbackList, e), t;
      }
      function y(t) {
        const [e, i] = n.useState(_.Get().m_mapDiscountEventsByID.get(t)),
          r = n.useCallback(
            () => i(_.Get().m_mapDiscountEventsByID.get(t)),
            [t],
          );
        return (
          (0, s.hL)(_.Get().m_discountEventsCallbackList, r),
          n.useEffect(r, [t, r]),
          e
        );
      }
      function S(t = !0) {
        const [e, i] = n.useState(_.Get().GetEventSelectionParameters()),
          r = t ? _.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, s.hL)(r, i), e;
      }
      function v() {
        const [t, e] = n.useState(_.Get().m_eRelatedDiscountView);
        (0, s.hL)(_.Get().m_RelatedDiscountViewCallbackList, e);
        return [
          t,
          n.useCallback((t) => {
            (_.Get().m_eRelatedDiscountView = t),
              window.localStorage.setItem(g, t),
              _.Get().m_RelatedDiscountViewCallbackList.Dispatch(t);
          }, []),
        ];
      }
      function M() {
        return n.useCallback(() => {
          _.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    33299: (t, e, i) => {
      "use strict";
      i.d(e, {
        HA: () => B,
        IR: () => G,
        NP: () => C,
        Xr: () => O,
        ZN: () => z,
        mE: () => E,
        rK: () => D,
        sF: () => P,
        uv: () => I,
      });
      var n = i(7850),
        r = i(90626),
        a = i(32754),
        s = i(78327),
        o = i(61859),
        c = i(61010),
        l = i.n(c),
        u = i(75233),
        d = i(69423),
        m = i(64238),
        p = i.n(m),
        g = i(48996),
        _ = i(87924),
        f = i(10435),
        h = i(12155),
        b = i(9554);
      const w = (0, r.createContext)(void 0);
      function B() {
        const t = (0, r.useContext)(w);
        if (!t) throw new Error("Missing GridRowContextProvider");
        return t;
      }
      function D(t) {
        const { children: e, fnBLocalChangesExist: i, fnWarnUser: a } = t,
          s = (0, u.jE)(),
          o = r.useMemo(
            () => ({ client: s, fnBLocalChangesExist: i, fnWarnUser: a }),
            [i, a, s],
          );
        return (0, n.jsx)(w.Provider, { value: o, children: e });
      }
      function y(t) {
        const { row: e } = t,
          i = e.original.packageID || 0,
          r = (0, _.C5)(i);
        let a = (0, g.$p)(i) < r,
          s = p()(
            l().PackageNameColumn,
            a && l().PackagePricesBelowMin,
            e.original.packageType,
          ),
          c = a
            ? (0, o.we)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip");
        return (0, n.jsx)(M, { className: s, toolTip: c, ...t });
      }
      function S(t) {
        const { row: e } = t,
          i = e.original.packageID || 0,
          r = (0, d.nT)(i);
        let a = p()(
            l().PackageNameColumn,
            r && l().PackagePricesBelowMin,
            e.original.packageType,
          ),
          s = r
            ? (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip");
        return (0, n.jsx)(M, {
          className: a,
          toolTip: s,
          showUnreleased: !0,
          ...t,
        });
      }
      function v(t) {
        const { column: e } = t,
          [i, a] = (0, r.useState)(e.getFilterValue() ?? "");
        return (0, n.jsxs)("div", {
          className: l().PackageNameHeader,
          children: [
            (0, o.we)("#PackageGrid_Column_PackageName"),
            (0, n.jsx)("input", {
              placeholder: (0, o.we)(
                "#PackageGrid_PackageNameFilterInputPrompt",
              ),
              value: i,
              onChange: (e) => {
                a(e.target.value.toString()),
                  (0, r.startTransition)(() =>
                    t.column.setFilterValue(e.target.value.toString()),
                  );
              },
            }),
          ],
        });
      }
      function M(t) {
        const { fnBLocalChangesExist: e, fnWarnUser: i } = B(),
          { cell: r, row: c, className: u, toolTip: d } = t,
          m = c.original.packageID,
          p =
            r.getValue() ??
            (0, n.jsxs)("span", {
              className: l().UnknownValue,
              children: [" ", (0, o.we)("#PackageGrid_PackageID", m)],
            });
        return (0, n.jsxs)(O, {
          fnBLocalChangesExist: e,
          fnWarnUser: i,
          href: `${s.TS.PARTNER_BASE_URL}store/packagelanding/${m}`,
          strToolTip: d,
          strClassName: u,
          children: [
            (0, n.jsx)(h.eTF, {
              color: "rgb(194, 45, 0)",
              className: l().PriceWarningBad,
            }),
            t.showUnreleased &&
              !("released" in c.original && c.original.released) &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(a.Gq, {
                    toolTipContent: (0, o.we)(
                      "#PackageGrid_PackageUnpublishedTooltip",
                    ),
                    children: (0, n.jsx)(f.ZyV, {
                      width: "14px",
                      height: "14px",
                    }),
                  }),
                  "  ",
                ],
              }),
            " ",
            p,
          ],
        });
      }
      function I() {
        return r.useMemo(
          () => ({
            accessorKey: "packageID",
            header: (0, o.we)("#PackageGrid_Column_PackageID"),
            enableSorting: !1,
            size: 90,
            cell: (t) =>
              (0, n.jsx)(M, {
                ...t,
                toolTip: (0, o.we)("#PackageGrid_Column_PackageID_ttip"),
              }),
            meta: { cellClassname: l().PackageID },
          }),
          [],
        );
      }
      function R(t, e, i) {
        let n = /^\d+$/.test(i);
        const r = t.original.packageID;
        return (
          !!(n && r && r.toString().startsWith(i)) ||
          t.getValue(e).toLowerCase().includes(i.toLowerCase())
        );
      }
      function E(t) {
        return r.useMemo(
          () => ({
            accessorKey: "packageName",
            header: v,
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, o.we)(
                "#PackageGrid_Column_PackageName_ttip",
              ),
              cellClassname: l().PackageName,
            },
            filterFn: R,
            cell: t ? y : S,
            size: 300,
          }),
          [t],
        );
      }
      function P() {
        return r.useMemo(() => ({ accessorKey: "appids" }), []);
      }
      function C() {
        return r.useMemo(
          () => ({
            accessorKey: "packageType",
            header: (0, o.we)("#PackageGrid_Column_PackageType"),
            enableSorting: !1,
            meta: {
              strHeaderTooltip: (0, o.we)(
                "#PackageGrid_Column_PackageType_ttip",
              ),
              cellClassname: l().PackageType,
            },
          }),
          [],
        );
      }
      function k(t) {
        const { row: e } = t,
          { fnBLocalChangesExist: i, fnWarnUser: r } = B(),
          a = e.original.appids,
          c = a?.length ?? 0,
          l = e.original.packageID;
        return (0, n.jsx)(O, {
          fnBLocalChangesExist: i,
          fnWarnUser: r,
          href: `${s.TS.PARTNER_BASE_URL}store/packagelanding/${l}`,
          strToolTip: (0, o.we)("#PackageGrid_VisitPackagePricing_Tooltip"),
          children: 1 == c ? "1 appid" : c + " appids",
        });
      }
      function z() {
        return r.useMemo(
          () => ({
            accessorKey: "appName",
            header: (0, o.we)("#PackageGrid_Column_AppName"),
            cell: k,
            size: 80,
            sortingFn: b.es,
            meta: {
              strHeaderTooltip: (0, o.we)("#PackageGrid_Column_AppName_ttip"),
              bDisableSortButton: !0,
              cellClassname: l().AppCount,
            },
          }),
          [],
        );
      }
      function G(t) {
        const e = t.groupingValue,
          i = (0, o.we)("#PackageGrid_NoBaseGameFoundForPackage");
        return (0, n.jsxs)(n.Fragment, {
          children: [
            e === i
              ? (0, n.jsxs)("span", {
                  title: (0, o.we)("#PackageGrid_NoBaseGameExplanation"),
                  children: [e, " (?)"],
                })
              : e,
            (0, n.jsxs)("span", {
              className: l().RowItemCount,
              children: [
                "(",
                (0, o.Yp)("#PackageGrid_PackageCount", t.subRows.length),
                ")",
              ],
            }),
          ],
        });
      }
      function O(t) {
        const {
          fnBLocalChangesExist: e,
          fnWarnUser: i,
          href: r,
          children: s,
          strToolTip: o,
          strClassName: c,
        } = t;
        return (0, n.jsx)(a.he, {
          toolTipContent: o,
          className: c,
          children: (0, n.jsx)("a", {
            onClick: (t) => {
              e() && (t.preventDefault(), i(t, r));
            },
            href: r,
            children: s,
          }),
        });
      }
    },
    87641: (t, e, i) => {
      "use strict";
      i.d(e, { h: () => a });
      var n = i(90626),
        r = i(61859);
      function a(t) {
        const e = n.useCallback(
          (e) => {
            if (t())
              return (
                e.preventDefault(),
                (e.returnValue = (0, r.we)(
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
      i.d(e, { Hf: () => d, i$: () => l, qP: () => o });
      var n = i(37085),
        r = i(30570),
        a = i(16021),
        s = i(61859);
      const o = new Set([r.uE.HT, r.uE.RA, r.uE.Sv, r.uE.Lj]),
        c = new Set([r.uE._i, r.uE.Wz, r.uE.Ov]);
      function l(t) {
        let e,
          i = !1,
          n = !1;
        const r = new Set();
        for (const e of t?.GetIncludedAppIDs() ?? []) {
          const t = a.A.Get().GetApp(e);
          if (t && o.has(t.GetAppType())) (i = !0), r.add(t.GetID());
          else if (t && c.has(t.GetAppType())) {
            n = !0;
            const e = t.GetParentAppID();
            e && r.add(e);
          }
        }
        let l = null;
        1 == r.size
          ? ((e = Array.from(r)[0]), (l = a.A.Get().GetApp(e)?.GetName()))
          : r.size > 1 &&
            (l = (0, s.we)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          l || (l = (0, s.we)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: l,
          contents: i && n ? "BOTH" : i ? "GAME" : n ? "DLC" : null,
          nBaseAppID: e,
        };
      }
      const u = { include_release: !0 };
      async function d(t, e) {
        if (
          (await a.A.Get().HintLoadStorePackages(t, u)) != n.R ||
          e.token.reason
        )
          return null;
        const i = [];
        t.map((t) => a.A.Get().GetPackage(t))
          .filter((t) => !!t)
          .forEach((t) => i.push(...t.GetIncludedAppIDs()));
        const r = Array.from(new Set(i));
        if ((await a.A.Get().HintLoadStoreApps(r, u)) != n.R || e.token.reason)
          return null;
        const s = r
            .map((t) => a.A.Get().GetApp(t))
            .filter((t) => !!t?.GetParentAppID())
            .map((t) => t.GetParentAppID()),
          o = Array.from(new Set(s));
        if ((await a.A.Get().HintLoadStoreApps(o, u)) != n.R || e.token.reason)
          return null;
        return Array.from(new Set(r.concat(o)));
      }
    },
    66051: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => k });
      var n = i(7850),
        r = i(8871),
        a = i(67796),
        s = i(16666),
        o = i(92148),
        c = i(59366),
        l = i(64238),
        u = i.n(l),
        d = i(90626),
        m = i(31718),
        p = i.n(m),
        g = i(76217),
        _ = i(23310),
        f = i(94104),
        h = i(9646);
      const b = d.memo(function (t) {
        const {
            virtualizer: e,
            bDynamic: i,
            scrollAlign: r,
            bNativeScrollIntoView: a,
            idx: s,
            rowGap: o,
            renderItem: c,
          } = t,
          l = d.useCallback(
            (t, i, n) => (e.scrollToIndex(s, { align: r }), !0),
            [e, s, r],
          );
        return (0, n.jsx)(g.Z, {
          ref: i ? e.measureElement : void 0,
          navKey: `VirtualizedListIndex-${s}`,
          "data-index": s,
          fnScrollIntoViewHandler: a ? void 0 : l,
          scrollIntoViewWhenChildFocused: "force",
          style: { width: "100%", paddingBottom: o },
          children: c(s),
        });
      });
      function w(t, e) {
        const i = t.getBoundingClientRect().top;
        return e
          ? i - e.getBoundingClientRect().top - e.clientTop + e.scrollTop
          : i + (t.ownerDocument.defaultView?.scrollY ?? 0);
      }
      d.forwardRef(function (t, e) {
        const {
            nRows: i,
            nItemHeight: a,
            nRowGap: s,
            overscan: o,
            renderItem: c,
            bDynamic: l,
            measureElement: u,
            className: m,
            forceVirtualizeType: p,
            hintVirtualizeType: _,
            scrollAlign: h,
            bNativeScrollIntoView: b,
            initialOffset: B,
            onOffsetChange: S,
            ...v
          } = t,
          [M, I] = (0, d.useState)(p ?? _),
          [R, E] = d.useState(),
          [P, C] = d.useState(),
          k = d.useRef(null),
          z = d.useCallback(
            (t) => {
              if (!t) return;
              const e = (0, f._f)(t, "y"),
                i = w(t, "window" == p ? null : e);
              (0, d.startTransition)(() => {
                "window" != p && E(e || void 0),
                  C(i),
                  p || I(e ? "element" : "window");
              });
            },
            [p],
          ),
          G =
            ((O = (t) => {
              if (!k.current) return;
              const e = w(k.current, R);
              (0, d.startTransition)(() => {
                C(e);
              });
            }),
            (0, r.QS)(
              (t) => {
                if (!t) return;
                const e = new t.ownerDocument.defaultView.ResizeObserver(
                  (t) => {
                    O(t[0]);
                  },
                );
                let i = [],
                  n = t;
                for (; n && null != n; )
                  e.observe(n), i.push(n), (n = n.parentElement);
                return () => {
                  i.forEach((t) => e.unobserve(t));
                };
              },
              [O],
            ));
        var O;
        const A = (0, r.Ue)(z, k, G, e),
          L = {
            nRows: i,
            nItemHeight: a,
            nRowGap: s,
            overscan: o,
            renderItem: c,
            bDynamic: l,
            measureElement: u,
            forceVirtualizeType: p,
            hintVirtualizeType: _,
            scrollAlign: h,
            bNativeScrollIntoView: b,
            initialOffset: B,
            onOffsetChange: S,
          };
        return (0, n.jsx)(g.Z, {
          className: m,
          ref: A,
          ...v,
          children: (0, n.jsxs)(d.Suspense, {
            children: [
              "element" === M &&
                (0, n.jsx)(y, { ...L, nScrollMargin: P || 0, elScrollable: R }),
              "window" === M && (0, n.jsx)(D, { ...L, nScrollMargin: P }),
            ],
          }),
        });
      });
      function B(t, e, i) {
        d.useEffect(() => {
          i ||
            (0, d.startTransition)(() => {
              t.measure();
            });
        }, [t, e, i]);
      }
      function D(t) {
        const {
            nScrollMargin: e,
            nRows: i,
            nItemHeight: r,
            nRowGap: a = 10,
            overscan: s = 6,
            initialOffset: c,
            onOffsetChange: l,
            measureElement: u,
            bDynamic: m,
          } = t,
          p = ((0, h.d)(), r + a),
          g = (0, o.XW)({
            count: i,
            scrollMargin: e,
            estimateSize: d.useCallback(() => p, [p]),
            measureElement: u,
            overscan: s,
            initialOffset: c ?? (() => window.scrollY),
            initialRect: void 0,
            observeElementOffset: M,
            observeElementRect: I,
            onChange(t, e) {
              l?.(t.scrollOffset);
            },
          });
        return (
          (g.shouldAdjustScrollPositionOnItemSizeChange = (t) =>
            void 0 !== e && t.start < (g.scrollOffset ?? 0)),
          B(g, p, m),
          (0, n.jsx)(S, { ...t, virtualizer: g })
        );
      }
      function y(t) {
        const {
            nRows: e,
            nScrollMargin: i,
            elScrollable: r,
            nItemHeight: a,
            nRowGap: s = 10,
            overscan: c = 6,
            initialOffset: l,
            onOffsetChange: u,
            measureElement: m,
            bDynamic: p,
          } = t,
          g = a + s,
          _ = (0, h.d)(),
          f = (0, o.Te)({
            count: e,
            scrollMargin: i,
            getScrollElement: () => (
              r &&
                f.scrollElement !== r &&
                void 0 === l &&
                (f.scrollOffset = r.scrollTop),
              r ?? null
            ),
            estimateSize: d.useCallback(() => g, [g]),
            measureElement: m,
            overscan: c,
            initialRect: r
              ? void 0
              : {
                  height: _.viewportHeight?.value ?? 1e3,
                  width: _.viewportWidth?.value ?? 1e3,
                },
            initialOffset: l,
            observeElementOffset: M,
            observeElementRect: R,
            onChange(t, e) {
              u?.(t.scrollOffset);
            },
          });
        return (
          (f.shouldAdjustScrollPositionOnItemSizeChange = (t) =>
            void 0 !== r && t.start < (f.scrollOffset ?? 0)),
          B(f, g, p),
          (0, n.jsx)(S, { ...t, virtualizer: f })
        );
      }
      function S(t) {
        const {
            virtualizer: e,
            nRowGap: i,
            renderItem: r,
            bDynamic: a,
            scrollAlign: s = "center",
            bNativeScrollIntoView: o,
          } = t,
          c = e.getVirtualItems(),
          l = c.length ? c[0].start - e.options.scrollMargin : 0,
          u = Math.max(0, e.getTotalSize());
        return (0, n.jsx)(g.Z, {
          "flow-children": "column",
          navEntryPreferPosition: _.iU.MAINTAIN_Y,
          style: { height: `${u}px`, width: "100%", position: "relative" },
          children: (0, n.jsx)("div", {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY( ${l}px )`,
            },
            children: c.map((t) =>
              (0, n.jsx)(
                b,
                {
                  virtualizer: e,
                  bDynamic: a,
                  scrollAlign: s,
                  bNativeScrollIntoView: o,
                  idx: t.index,
                  rowGap: i,
                  renderItem: r,
                },
                t.key,
              ),
            ),
          }),
        });
      }
      function v(t) {
        return (...e) => {
          queueMicrotask(() => {
            (0, d.startTransition)(() => {
              t(...e);
            });
          });
        };
      }
      function M(t, e) {
        const i = t.scrollElement;
        if (!i) return;
        let n;
        n = v(
          "scrollX" in i
            ? (n) => e(i[t.options.horizontal ? "scrollX" : "scrollY"], n)
            : (n) => e(i[t.options.horizontal ? "scrollLeft" : "scrollTop"], n),
        );
        const r = () => n(!0),
          a = () => n(!1);
        return (
          a(),
          i.addEventListener("scroll", r, { passive: !0 }),
          i.addEventListener("scrollend", a, { passive: !0 }),
          () => {
            i.removeEventListener("scroll", r),
              i.removeEventListener("scrollend", a);
          }
        );
      }
      function I(t, e) {
        const i = t.scrollElement;
        if (!i) return;
        const n = v(() => e({ width: i.innerWidth, height: i.innerHeight }));
        return (
          n(),
          i.addEventListener("resize", n, { passive: !0 }),
          () => {
            i.removeEventListener("resize", n);
          }
        );
      }
      function R(t, e) {
        const i = t.scrollElement;
        if (!i) return;
        const n = v((t) =>
          e({ width: Math.round(t.width), height: Math.round(t.height) }),
        );
        n(i.getBoundingClientRect());
        const r = i.ownerDocument.defaultView;
        if (!r?.ResizeObserver) return () => {};
        const a = new r.ResizeObserver((t) => {
          t[0]?.borderBoxSize[0]
            ? n({
                width: t[0].borderBoxSize[0].inlineSize,
                height: t[0].borderBoxSize[0].blockSize,
              })
            : n(i.getBoundingClientRect());
        });
        return (
          a.observe(i, { box: "border-box" }),
          () => {
            a.unobserve(i);
          }
        );
      }
      var E = i(26408);
      const P = d.createContext(void 0);
      function C(t) {
        const { table: e, setColumnSizeOverride: i } = t,
          r = (0, d.useRef)(e);
        r.current = e;
        const a = (0, d.useMemo)(
          () => ({ table: r.current, setColumnSizeOverride: i }),
          [i],
        );
        return (0, n.jsx)(P.Provider, { value: a, children: t.children });
      }
      const k = d.forwardRef(function (t, e) {
        const {
            data: i,
            columns: r,
            className: l,
            width: u,
            height: m,
            nScrollMargin: p,
            nItemHeight: g,
            nHeaderHeight: _,
            overscan: f = 6,
            stickyHeader: h,
            getRowKey: b,
            initialSorting: w,
            initialColumnFilters: B,
            initialGrouping: D,
            initialExpanded: y,
            initialColumnPinning: S,
            initialColumnVisibility: v,
            onGroupingChange: E,
            onVisibleRowsChange: P,
            renderGroup: k,
            virtualizeType: z = "element",
          } = t,
          A = (0, d.useRef)(null),
          [L, F] = (0, d.useState)({}),
          [T, j] = (0, d.useState)({}),
          U = r.map((t) =>
            "accessorKey" in t
              ? { ...t, filterFn: L[t.accessorKey] ?? t.filterFn }
              : t,
          ),
          x = U.map((t) => {
            let e = T[t.id];
            return (
              void 0 === e && "accessorKey" in t && (e = T[t.accessorKey]),
              (e ??= t.size),
              { ...t, size: e }
            );
          }),
          q = (0, a.N4)({
            data: i,
            columns: x,
            defaultColumn: { minSize: 60, maxSize: 800 },
            initialState: {
              sorting: w,
              grouping: D ?? [],
              expanded: y,
              columnPinning: S ?? {},
              columnFilters: B,
              columnVisibility: v,
            },
            getCoreRowModel: (0, s.HT)(),
            getSortedRowModel: (0, s.h5)(),
            getFilteredRowModel: (0, s.hM)(),
            getGroupedRowModel: (0, s.cU)(),
            columnResizeMode: "onChange",
          }),
          { rows: W, flatRows: N } = q.getRowModel(),
          H = W.flatMap((t) => (t.getIsExpanded() ? [t, ...t.subRows] : t)),
          V = q.getState().grouping;
        (0, d.useEffect)(() => {
          E?.(V);
        }, [E, V]),
          (0, d.useEffect)(() => {
            P?.(H);
          }, [P, H.length]);
        const K = (0, o.Te)({
            count: H.length,
            scrollMargin: p,
            getScrollElement: d.useCallback(
              () => ("element" === z ? tt.current : window),
              [z],
            ),
            scrollToFn: (t, e, i) =>
              "window" === z ? (0, c.e8)(t, e, i) : (0, c.Ox)(t, e, i),
            estimateSize: d.useCallback(() => g, [g]),
            overscan: f,
            initialRect: void 0,
            observeElementOffset: M,
            observeElementRect: (t, e) => ("window" === z ? I(t, e) : R(t, e)),
            getItemKey(t) {
              const e = H[t];
              return `${e.parentId ?? ""}${b(t, e.original)}`;
            },
          }),
          $ = (0, d.useRef)(0),
          J = d.useMemo(() => {
            const t = q.getFlatHeaders(),
              e = {};
            for (let i = 0; i < t.length; i++) {
              const n = t[i];
              (e[`--header-${n.id}-size`] = `${n.getSize()}px`),
                (e[`--col-${n.column.id}-size`] = `${n.column.getSize()}px`);
            }
            return ($.current += 1), e;
          }, [q.getState().columnSizingInfo, q.getState().columnSizing, r]);
        d.useEffect(() => {
          (0, d.startTransition)(() => {
            K.measure();
          });
        }, [K, g]);
        const Z = K.getVirtualItems(),
          X = Z[0]?.start ?? 0,
          Y = K.getTotalSize(),
          Q = (0, o.Te)({
            estimateSize: (t) =>
              H[0]?.getVisibleCells()[t].column.getSize() ?? 0,
            count: H[0]?.getVisibleCells().length ?? 0,
            overscan: 6,
            horizontal: !0,
            getScrollElement: d.useCallback(
              () => ("element" === z ? tt.current : window),
              [z],
            ),
            scrollToFn: (t, e, i) =>
              "window" === z ? (0, c.e8)(t, e, i) : (0, c.Ox)(t, e, i),
            rangeExtractor(t) {
              const e = H[0]?.getVisibleCells() ?? [],
                i = new Set((0, c.vp)(t));
              return (
                e.forEach((t, e) => {
                  t.column.getIsPinned() && i.add(e);
                }),
                Array.from(i).sort((t, e) => t - e)
              );
            },
            observeElementOffset: M,
            observeElementRect: (t, e) => ("window" === z ? I(t, e) : R(t, e)),
          });
        (0, d.useEffect)(() => {
          Q.measure();
        }, [$.current]),
          (0, d.useImperativeHandle)(
            e,
            () => ({
              getData: () => N.map((t) => t.original),
              getVisibleRows: () => H,
              getState: q.getState,
              getColumns: q.getAllColumns,
              getColumnDefs: () => U,
              setColumnFilters: q.setColumnFilters,
              resetColumnFilters: q.resetColumnFilters,
              setColumnFilterFnOverride: F,
              getColumnFilterFnOverride: () => L,
              getContainerElement: () => tt.current,
              getTableElement: () => A.current,
              scrollToColumn(t, e) {
                Q.scrollToIndex(t.getIndex(), e);
              },
            }),
            [
              N,
              H,
              q.setColumnFilters,
              q.resetColumnFilters,
              q.getState,
              q.getAllColumns,
              L,
              U,
              Q,
            ],
          );
        const tt = (0, d.useRef)(null),
          et = h ? (_ ?? 0) : 0;
        let it = 0;
        const nt = H[0]?.getVisibleCells(),
          rt = Q.getVirtualItems(),
          at = rt[rt.length - 1]?.end;
        for (const t of rt) {
          const e = nt[t.index];
          e?.column.getIsPinned() && (it += t.size);
        }
        return (0, n.jsx)(C, {
          table: q,
          setColumnSizeOverride: j,
          children: (0, n.jsx)("div", {
            className: l,
            ref: tt,
            style: {
              width: u,
              height: m,
              overflow: "element" === z ? "auto" : void 0,
              maxWidth: "fit-content",
              scrollPadding: `${et}px 0 0 ${it}px`,
            },
            children: (0, n.jsxs)("div", {
              role: "table",
              ref: A,
              "aria-rowcount": i.length,
              style: {
                minHeight: Y,
                width: q.getTotalSize(),
                "--virtualPos": `${X}px`,
                ...J,
              },
              children: [
                q
                  .getHeaderGroups()
                  .map((t) =>
                    (0, n.jsx)(
                      G,
                      { group: t, sticky: h, nHeaderHeight: _ },
                      t.id,
                    ),
                  ),
                Z.map((t) =>
                  (0, n.jsx)(
                    O,
                    {
                      row: H[t.index],
                      size: t.size,
                      rowVirtualizer: Q,
                      index: t.index,
                      measureRef: K.measureElement,
                      scrollContainerRef: tt,
                      nItemHeight: g,
                      renderGroup: k,
                      rowEnd: at,
                    },
                    t.key,
                  ),
                ),
              ],
            }),
          }),
        });
      });
      function z(t) {
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
          minWidth: t.getSize(),
          zIndex: e ? 1 : 0,
        };
      }
      function G(t) {
        const { group: e, sticky: i, nHeaderHeight: r } = t;
        return (0, n.jsx)("div", {
          role: "row",
          className: u()(
            p().FancyTableRow,
            p().FancyTableHeader,
            i && p().StickyHeader,
          ),
          children: e.headers.map((t, i) => {
            const a = e.headers[i - 1],
              s = {},
              o = t.column.getIsSorted();
            o &&
              !t.column.columnDef.meta?.bDisableSortButton &&
              (s["aria-sort"] = "asc" === o ? "ascending" : "descending");
            let c = "div";
            return (
              t.column.getCanSort() &&
                !t.column.columnDef.meta?.bDisableSortButton &&
                ((c = "button"),
                (s.onClick = t.column.getToggleSortingHandler())),
              (0, n.jsx)(
                F,
                {
                  header: t,
                  prevHeader: a,
                  HeaderElement: c,
                  nHeaderHeight: r,
                  sortDirection: o,
                  strTooltip: t.column.columnDef.meta?.strHeaderTooltip,
                  conditionalProps: s,
                },
                t.id,
              )
            );
          }),
        });
      }
      const O = d.memo(function (t) {
        const {
          row: e,
          size: i,
          rowVirtualizer: r,
          measureRef: a,
          index: s,
          nItemHeight: o,
          renderGroup: c,
        } = t;
        return (0, n.jsx)("div", {
          role: "row",
          className: u()(
            p().FancyTableRow,
            e.getCanExpand() && p().ExpandableRow,
          ),
          style: {
            minHeight: e.getCanExpand() ? void 0 : `${i}px`,
            transform: "translateY(var(--virtualPos))",
          },
          "data-even": s % 2 == 0,
          "data-index": s,
          ref: a,
          children: (0, n.jsx)(A, {
            row: e,
            rowVirtualizer: r,
            nItemHeight: o,
            renderGroup: c,
          }),
        });
      });
      function A(t) {
        const { row: e, rowVirtualizer: i, renderGroup: r } = t;
        if (e.getCanExpand()) {
          const t = r ?? (() => e.groupingValue);
          return (0, n.jsxs)("button", {
            className: p().RowGroup,
            "aria-expanded": e.getIsExpanded(),
            onClick: e.getToggleExpandedHandler(),
            children: [
              (0, n.jsx)("div", { className: p().GroupExpandIndicator }),
              t(e),
            ],
          });
        }
        const a = i.getVirtualItems(),
          s = e.getVisibleCells();
        let o,
          c = 0;
        return (0, n.jsx)(n.Fragment, {
          children: a.map((t) => {
            const e = s[t.index],
              r = e.column.getIsPinned();
            return (
              r ? (c += t.size) : void 0 === o && (o = t.start),
              (0, n.jsx)(
                T,
                {
                  cell: e,
                  rowVirtualizer: i,
                  index: t.index,
                  transform: r ? void 0 : `translateX(${o - c}px)`,
                },
                e.id,
              )
            );
          }),
        });
      }
      function L(t, e) {
        const i = (0, d.useContext)(P),
          n = t.columnDef.meta?.bGrowToFit,
          r = t.id,
          a = n ? t.getSize() : 0,
          s = t.getIsSorted();
        (0, d.useLayoutEffect)(() => {
          if (!n) return;
          if (!e.current) return;
          const t = e.current?.scrollWidth;
          if (!t) return;
          const s = e.current.getBoundingClientRect().width,
            o = window.getComputedStyle(e.current);
          let c = t;
          if (t > s) {
            if (o.paddingLeft) {
              let t = parseInt(o.paddingLeft);
              isNaN(t) || (c += t);
            }
            if (o.paddingRight) {
              let t = parseInt(o.paddingRight);
              isNaN(t) || (c += t);
            }
          }
          c > a &&
            i.setColumnSizeOverride((t) => (t[r] > c ? t : { ...t, [r]: c }));
        }, [n, r, i, a, e, s]);
      }
      function F(t) {
        const {
            header: e,
            prevHeader: i,
            HeaderElement: r,
            nHeaderHeight: s,
            sortDirection: o,
            strTooltip: c,
            conditionalProps: l,
          } = t,
          m = (0, d.useRef)(null);
        return (
          L(e.column, m),
          (0, n.jsxs)(
            r,
            {
              role: "columnheader",
              ref: m,
              "data-pinned": !!e.column.getIsPinned(),
              className: u()(
                p().ColumnHeader,
                "button" === r && p().SortButton,
                e.column.columnDef.meta?.headerClassname,
              ),
              style: {
                width: `var(--header-${e.id}-size)`,
                height: void 0 !== s ? `${s}px` : void 0,
                ...z(e.column),
              },
              ...l,
              children: [
                i?.column.getCanResize() &&
                  (0, n.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => i.column.resetSize(),
                    onMouseDown: i.getResizeHandler(),
                    onTouchStart: i.getResizeHandler(),
                    onClick: (t) => t.stopPropagation(),
                    className: u()(p().ResizeHandle, p().PrevResizeHandle),
                  }),
                e.isPlaceholder
                  ? null
                  : (0, a.Kv)(e.column.columnDef.header, e.getContext()),
                c && (0, n.jsx)(E.o, { tooltip: c }),
                o &&
                  !e.column.columnDef.meta?.bDisableSortButton &&
                  (0, n.jsx)("div", { className: p().SortIndicator }),
                e.column.getCanResize() &&
                  (0, n.jsx)("div", {
                    role: "presentation",
                    onDoubleClick: () => e.column.resetSize(),
                    onMouseDown: e.getResizeHandler(),
                    onTouchStart: e.getResizeHandler(),
                    onClick: (t) => t.stopPropagation(),
                    className: u()(
                      p().ResizeHandle,
                      e.column.getIsResizing() && p().IsResizing,
                    ),
                  }),
              ],
            },
            e.id,
          )
        );
      }
      function T(t) {
        const { cell: e, rowVirtualizer: i, index: a, transform: s } = t,
          o = d.useRef(null),
          c = (0, r.XB)(o, i.measure);
        return (
          L(e.column, o),
          (0, n.jsx)("div", {
            className: u()(
              p().FancyTableCell,
              e.column.columnDef.meta?.cellClassname,
            ),
            "data-index": a,
            "data-table-column-id": e.column.id,
            ref: c,
            style: {
              width: `var(--col-${e.column.id}-size)`,
              transform: s,
              ...z(e.column),
            },
            children: (0, n.jsx)(j, {
              CellComponent: e.column.columnDef.cell,
              context: e.getContext(),
            }),
          })
        );
      }
      const j = d.memo(
        function (t) {
          return (0, a.Kv)(t.CellComponent, t.context);
        },
        (t, e) => t.context.getValue() === e.context.getValue(),
      );
    },
    61975: (t, e, i) => {
      "use strict";
      i.d(e, {
        DX: () => x,
        Ho: () => X,
        hp: () => gt,
        xE: () => it,
        mQ: () => J,
        vt: () => V,
        lr: () => ot,
        tY: () => Q,
        KQ: () => W,
        vm: () => r,
        K1: () => s,
        Y2: () => a,
        Tj: () => n,
        nY: () => Bt,
      });
      var n = {};
      i.r(n), i.d(n, { _: () => d });
      var r = {};
      i.r(r), i.d(r, { Tn: () => m, n$: () => p });
      var a = {};
      i.r(a),
        i.d(a, {
          ru: () => g,
          mC: () => y,
          cJ: () => _,
          J5: () => f,
          tx: () => b,
          ao: () => w,
          _g: () => B,
          y5: () => D,
          nH: () => h,
        });
      var s = {};
      i.r(s),
        i.d(s, {
          RM: () => v,
          dk: () => A,
          Ng: () => O,
          Mc: () => C,
          pF: () => S,
          EE: () => R,
          nT: () => E,
          CI: () => M,
          _j: () => k,
          UM: () => P,
          K2: () => I,
          E0: () => F,
          iY: () => z,
          sR: () => L,
          rQ: () => G,
        });
      var o = i(80613),
        c = i.n(o),
        l = i(89068),
        u = i(56545);
      const d = 0,
        m = 1,
        p = 2,
        g = 1,
        _ = 2,
        f = 4,
        h = 16,
        b = 32,
        w = 64,
        B = 128,
        D = 256,
        y = 512,
        S = 0,
        v = 1,
        M = 2,
        I = 4,
        R = 8,
        E = 16,
        P = 128,
        C = 256,
        k = 512,
        z = 1024,
        G = 2048,
        O = 4096,
        A = 8192,
        L = 16384,
        F = 32768;
      class T extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            T.prototype.packageids || l.Sg(T.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  packageids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(t = !1) {
          return T.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(T.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(T.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new T();
          return T.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(T.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(T.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return T.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Request";
        }
      }
      class j extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            j.prototype.paid || l.Sg(j.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { paid: { n: 1, c: U, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(t = !1) {
          return j.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(j.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(j.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new j();
          return j.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(j.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return j.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(j.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return j.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Response";
        }
      }
      class U extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            U.prototype.partnerid || l.Sg(U.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  partnerid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  packageid: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = l.w0(U.M())), U.sm_mbf;
        }
        toObject(t = !1) {
          return U.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(U.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(U.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new U();
          return U.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(U.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(U.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return U.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerPaidGivenPackageList_Response_CPackageAndPartnerPair";
        }
      }
      class x extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            x.prototype.opt_in_name || l.Sg(x.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
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
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = l.w0(x.M())), x.sm_mbf;
        }
        toObject(t = !1) {
          return x.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(x.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(x.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new x();
          return x.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(x.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return x.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(x.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return x.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Request";
        }
      }
      class q extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            q.prototype.email_def_id || l.Sg(q.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = l.w0(q.M())), q.sm_mbf;
        }
        toObject(t = !1) {
          return q.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(q.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(q.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new q();
          return q.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(q.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(q.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return q.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Response";
        }
      }
      class W extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            W.prototype.email_def_id || l.Sg(W.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  targeting_flag: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  reviewed: {
                    n: 7,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = l.w0(W.M())), W.sm_mbf;
        }
        toObject(t = !1) {
          return W.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(W.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(W.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new W();
          return W.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(W.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return W.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(W.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return W.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Request";
        }
      }
      class N extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(), o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        toObject(t = !1) {
          return N.toObject(t, this);
        }
        static toObject(t, e) {
          return t ? { $jspbMessageInstance: e } : {};
        }
        static fromObject(t) {
          return new N();
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new N();
          return N.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return t;
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {}
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return N.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Response";
        }
      }
      class H extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            H.prototype.accounts_examined || l.Sg(H.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  accounts_examined: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accounts_emailed: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accounts_not_emailed_opted_out: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accounts_email_failed: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  completed: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  rt_last_updated: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = l.w0(H.M())), H.sm_mbf;
        }
        toObject(t = !1) {
          return H.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(H.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(H.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new H();
          return H.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(H.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(H.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return H.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailStats";
        }
      }
      class V extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            V.prototype.email_def_id || l.Sg(V.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  force_resend: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = l.w0(V.M())), V.sm_mbf;
        }
        toObject(t = !1) {
          return V.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(V.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(V.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new V();
          return V.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(V.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(V.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return V.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
        }
      }
      class K extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            K.prototype.results || l.Sg(K.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = { proto: K, fields: { results: { n: 1, c: H } } }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = l.w0(K.M())), K.sm_mbf;
        }
        toObject(t = !1) {
          return K.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(K.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(K.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new K();
          return K.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(K.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return K.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(K.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return K.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
        }
      }
      class $ extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            $.prototype.opt_in_name || l.Sg($.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  stats: { n: 7, c: H },
                  creator_accountid: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  create_time: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_update_time: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  email_def_id: {
                    n: 11,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  completed: { n: 12, br: l.qM.readBool, bw: l.gp.writeBool },
                  aborted: { n: 13, br: l.qM.readBool, bw: l.gp.writeBool },
                  deleted: { n: 14, br: l.qM.readBool, bw: l.gp.writeBool },
                  reviewed: { n: 15, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = l.w0($.M())), $.sm_mbf;
        }
        toObject(t = !1) {
          return $.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT($.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq($.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new $();
          return $.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj($.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0($.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return $.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailDef";
        }
      }
      class J extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            J.prototype.opt_in_name || l.Sg(J.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = l.w0(J.M())), J.sm_mbf;
        }
        toObject(t = !1) {
          return J.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(J.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(J.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new J();
          return J.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(J.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(J.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return J.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
        }
      }
      class Z extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            Z.prototype.defs || l.Sg(Z.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { defs: { n: 1, c: $, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = l.w0(Z.M())), Z.sm_mbf;
        }
        toObject(t = !1) {
          return Z.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(Z.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(Z.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new Z();
          return Z.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(Z.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(Z.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
        }
      }
      class X extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            X.prototype.email_def_id || l.Sg(X.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = l.w0(X.M())), X.sm_mbf;
        }
        toObject(t = !1) {
          return X.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(X.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(X.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new X();
          return X.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(X.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(X.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return X.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
        }
      }
      class Y extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            Y.prototype.stats || l.Sg(Y.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = { proto: Y, fields: { stats: { n: 1, c: H } } }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = l.w0(Y.M())), Y.sm_mbf;
        }
        toObject(t = !1) {
          return Y.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(Y.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(Y.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new Y();
          return Y.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(Y.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(Y.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
        }
      }
      class Q extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            Q.prototype.email_def_id || l.Sg(Q.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  language_override: {
                    n: 4,
                    d: 0,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = l.w0(Q.M())), Q.sm_mbf;
        }
        toObject(t = !1) {
          return Q.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(Q.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(Q.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new Q();
          return Q.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(Q.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(Q.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Request";
        }
      }
      class tt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(), o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        toObject(t = !1) {
          return tt.toObject(t, this);
        }
        static toObject(t, e) {
          return t ? { $jspbMessageInstance: e } : {};
        }
        static fromObject(t) {
          return new tt();
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new tt();
          return tt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return t;
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {}
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Response";
        }
      }
      class et extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            et.prototype.accountid || l.Sg(et.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  rtime_notified: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  ignored_unverified_email: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  ignored_email_optout: {
                    n: 6,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  status: { n: 7, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  send_rtime: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = l.w0(et.M())), et.sm_mbf;
        }
        toObject(t = !1) {
          return et.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(et.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(et.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new et();
          return et.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(et.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(et.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return et.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerOptInEmailTracking";
        }
      }
      class it extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            it.prototype.email_def_id || l.Sg(it.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = l.w0(it.M())), it.sm_mbf;
        }
        toObject(t = !1) {
          return it.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(it.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(it.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new it();
          return it.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(it.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return it.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(it.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return it.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Request";
        }
      }
      class nt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            nt.prototype.email_def_id || l.Sg(nt.M()),
            o.Message.initialize(this, t, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  results: { n: 2, c: et, r: !0, q: !0 },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = l.w0(nt.M())), nt.sm_mbf;
        }
        toObject(t = !1) {
          return nt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(nt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(nt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new nt();
          return nt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(nt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(nt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Response";
        }
      }
      class rt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            rt.prototype.appid || l.Sg(rt.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  opt_in: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  opt_in_name: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  jsondata: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  type: { n: 5, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  accountid_add: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_opted_in: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid_lastmod: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  invited: { n: 10, br: l.qM.readBool, bw: l.gp.writeBool },
                  accountid_remove: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_opted_out: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  pruned: { n: 13, br: l.qM.readBool, bw: l.gp.writeBool },
                  accountid_prune: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_pruned: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  additional_featuring: {
                    n: 16,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  feature_day: {
                    n: 17,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid_invited: {
                    n: 18,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  no_planned_discount: {
                    n: 19,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  pending_review: {
                    n: 20,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appeal_state: {
                    n: 21,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  accountid_appeal: {
                    n: 22,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_appeal_decision: {
                    n: 23,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = l.w0(rt.M())), rt.sm_mbf;
        }
        toObject(t = !1) {
          return rt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(rt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(rt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new rt();
          return rt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(rt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(rt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInData";
        }
      }
      class at extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            at.prototype.appid || l.Sg(at.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  opt_in_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = l.w0(at.M())), at.sm_mbf;
        }
        toObject(t = !1) {
          return at.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(at.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(at.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new at();
          return at.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(at.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(at.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return at.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Request";
        }
      }
      class st extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            st.prototype.data || l.Sg(st.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = {
                proto: st,
                fields: { data: { n: 1, c: rt, r: !0, q: !0 } },
              }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = l.w0(st.M())), st.sm_mbf;
        }
        toObject(t = !1) {
          return st.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(st.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(st.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new st();
          return st.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(st.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(st.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return st.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Response";
        }
      }
      class ot extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ot.prototype.appids || l.Sg(ot.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ot.sm_m ||
              (ot.sm_m = {
                proto: ot,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  additional_featuring: {
                    n: 2,
                    d: !0,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  opt_in_name: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            ot.sm_m
          );
        }
        static MBF() {
          return ot.sm_mbf || (ot.sm_mbf = l.w0(ot.M())), ot.sm_mbf;
        }
        toObject(t = !1) {
          return ot.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(ot.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(ot.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new ot();
          return ot.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(ot.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(ot.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return ot.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
        }
      }
      class ct extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ct.prototype.appids || l.Sg(ct.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ct.sm_m ||
              (ct.sm_m = {
                proto: ct,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            ct.sm_m
          );
        }
        static MBF() {
          return ct.sm_mbf || (ct.sm_mbf = l.w0(ct.M())), ct.sm_mbf;
        }
        toObject(t = !1) {
          return ct.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(ct.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(ct.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new ct();
          return ct.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(ct.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(ct.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return ct.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
        }
      }
      class lt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            lt.prototype.opt_in_id || l.Sg(lt.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: {
                  opt_in_id: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  opt_in_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  type: { n: 2, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  active: { n: 3, br: l.qM.readBool, bw: l.gp.writeBool },
                  start_date: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  end_date: { n: 5, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  jsondata: { n: 6, br: l.qM.readString, bw: l.gp.writeString },
                  last_modified_time: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_modifier_accountid: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = l.w0(lt.M())), lt.sm_mbf;
        }
        toObject(t = !1) {
          return lt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(lt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(lt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new lt();
          return lt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(lt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(lt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "COptInDef";
        }
      }
      class ut extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ut.prototype.opt_in_name || l.Sg(ut.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ut.sm_m ||
              (ut.sm_m = {
                proto: ut,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  start: {
                    n: 2,
                    d: 0,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  count: {
                    n: 3,
                    d: 20,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  include_json: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            ut.sm_m
          );
        }
        static MBF() {
          return ut.sm_mbf || (ut.sm_mbf = l.w0(ut.M())), ut.sm_mbf;
        }
        toObject(t = !1) {
          return ut.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(ut.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(ut.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new ut();
          return ut.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(ut.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(ut.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return ut.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInHistoryInternal_Request";
        }
      }
      class dt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            dt.prototype.opt_ins || l.Sg(dt.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dt.sm_m ||
              (dt.sm_m = {
                proto: dt,
                fields: { opt_ins: { n: 1, c: lt, r: !0, q: !0 } },
              }),
            dt.sm_m
          );
        }
        static MBF() {
          return dt.sm_mbf || (dt.sm_mbf = l.w0(dt.M())), dt.sm_mbf;
        }
        toObject(t = !1) {
          return dt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(dt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(dt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new dt();
          return dt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(dt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(dt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return dt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInHistoryInternal_Response";
        }
      }
      class mt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            mt.prototype.opt_in_name || l.Sg(mt.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mt.sm_m ||
              (mt.sm_m = {
                proto: mt,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            mt.sm_m
          );
        }
        static MBF() {
          return mt.sm_mbf || (mt.sm_mbf = l.w0(mt.M())), mt.sm_mbf;
        }
        toObject(t = !1) {
          return mt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(mt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(mt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new mt();
          return mt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(mt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(mt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return mt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInsIDs_Request";
        }
      }
      class pt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            pt.prototype.opted_in_appids || l.Sg(pt.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pt.sm_m ||
              (pt.sm_m = {
                proto: pt,
                fields: {
                  opted_in_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            pt.sm_m
          );
        }
        static MBF() {
          return pt.sm_mbf || (pt.sm_mbf = l.w0(pt.M())), pt.sm_mbf;
        }
        toObject(t = !1) {
          return pt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(pt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(pt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new pt();
          return pt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(pt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(pt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return pt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInsIDs_Response";
        }
      }
      class gt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            gt.prototype.opt_in_names || l.Sg(gt.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gt.sm_m ||
              (gt.sm_m = {
                proto: gt,
                fields: {
                  opt_in_names: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                },
              }),
            gt.sm_m
          );
        }
        static MBF() {
          return gt.sm_mbf || (gt.sm_mbf = l.w0(gt.M())), gt.sm_mbf;
        }
        toObject(t = !1) {
          return gt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(gt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(gt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new gt();
          return gt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(gt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(gt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return gt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInAppealsSummaryStats_Request";
        }
      }
      class _t extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            _t.prototype.summary || l.Sg(_t.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _t.sm_m ||
              (_t.sm_m = {
                proto: _t,
                fields: { summary: { n: 1, c: ft, r: !0, q: !0 } },
              }),
            _t.sm_m
          );
        }
        static MBF() {
          return _t.sm_mbf || (_t.sm_mbf = l.w0(_t.M())), _t.sm_mbf;
        }
        toObject(t = !1) {
          return _t.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(_t.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(_t.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new _t();
          return _t.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(_t.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(_t.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return _t.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInAppealsSummaryStats_Response";
        }
      }
      class ft extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ft.prototype.opt_in_name || l.Sg(ft.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ft.sm_m ||
              (ft.sm_m = {
                proto: ft,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  open_appeals: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  reject_appeals: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accepted_appeals: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appeal_account_id: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            ft.sm_m
          );
        }
        static MBF() {
          return ft.sm_mbf || (ft.sm_mbf = l.w0(ft.M())), ft.sm_mbf;
        }
        toObject(t = !1) {
          return ft.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(ft.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(ft.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new ft();
          return ft.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(ft.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(ft.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return ft.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInAppealsSummaryStats_Response_CSummary";
        }
      }
      class ht extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            ht.prototype.inviteid || l.Sg(ht.M()),
            o.Message.initialize(this, t, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ht.sm_m ||
              (ht.sm_m = {
                proto: ht,
                fields: {
                  inviteid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  accountid_sender: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  email: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  real_name: {
                    n: 4,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  note: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                  time_sent: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  current_state: {
                    n: 7,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  pub_rights: {
                    n: 8,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  app_rights: {
                    n: 9,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  time_receiver_responded: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_partner_responded: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  accountid_partner: {
                    n: 13,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  partnerid: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_last_updated: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  sender_ip: {
                    n: 16,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            ht.sm_m
          );
        }
        static MBF() {
          return ht.sm_mbf || (ht.sm_mbf = l.w0(ht.M())), ht.sm_mbf;
        }
        toObject(t = !1) {
          return ht.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(ht.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(ht.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new ht();
          return ht.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(ht.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(ht.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return ht.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "MembershipInvite";
        }
      }
      class bt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            bt.prototype.partnerid || l.Sg(bt.M()),
            o.Message.initialize(this, t, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            bt.sm_m ||
              (bt.sm_m = {
                proto: bt,
                fields: {
                  partnerid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  filter_states: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readEnum,
                    pbr: l.qM.readPackedEnum,
                    bw: l.gp.writeRepeatedEnum,
                  },
                },
              }),
            bt.sm_m
          );
        }
        static MBF() {
          return bt.sm_mbf || (bt.sm_mbf = l.w0(bt.M())), bt.sm_mbf;
        }
        toObject(t = !1) {
          return bt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(bt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(bt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new bt();
          return bt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(bt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(bt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return bt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Request";
        }
      }
      class wt extends o.Message {
        static ImplementsStaticInterface() {}
        constructor(t = null) {
          super(),
            wt.prototype.invites || l.Sg(wt.M()),
            o.Message.initialize(this, t, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wt.sm_m ||
              (wt.sm_m = {
                proto: wt,
                fields: { invites: { n: 1, c: ht, r: !0, q: !0 } },
              }),
            wt.sm_m
          );
        }
        static MBF() {
          return wt.sm_mbf || (wt.sm_mbf = l.w0(wt.M())), wt.sm_mbf;
        }
        toObject(t = !1) {
          return wt.toObject(t, this);
        }
        static toObject(t, e) {
          return l.BT(wt.M(), t, e);
        }
        static fromObject(t) {
          return l.Uq(wt.M(), t);
        }
        static deserializeBinary(t) {
          let e = new (c().BinaryReader)(t),
            i = new wt();
          return wt.deserializeBinaryFromReader(i, e);
        }
        static deserializeBinaryFromReader(t, e) {
          return l.zj(wt.MBF(), t, e);
        }
        serializeBinary() {
          var t = new (c().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
        }
        static serializeBinaryToWriter(t, e) {
          l.i0(wt.M(), t, e);
        }
        serializeBase64String() {
          var t = new (c().BinaryWriter)();
          return wt.serializeBinaryToWriter(this, t), t.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Response";
        }
      }
      var Bt, Dt;
      !(function (t) {
        (t.GetSinglePartnerAppOptIn = function (t, e, i) {
          return t.SendMsg(
            "Publishing.GetSinglePartnerAppOptIn#1",
            (0, u.I8)(at, e, i),
            st,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (t.SetFeaturingOnPartnerAppOptIn = function (t, e, i) {
            return t.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              (0, u.I8)(ot, e, i),
              ct,
              { ePrivilege: 1 },
            );
          }),
          (t.GetOptInHistoryInternal = function (t, e, i) {
            return t.SendMsg(
              "Publishing.GetOptInHistoryInternal#1",
              (0, u.I8)(ut, e, i),
              dt,
              { ePrivilege: 4 },
            );
          }),
          (t.GetPartnerAppOptInsIDs = function (t, e, i) {
            return t.SendMsg(
              "Publishing.GetPartnerAppOptInsIDs#1",
              (0, u.I8)(mt, e, i),
              pt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (t.GetOptInAppealsSummaryStats = function (t, e, i) {
            return t.SendMsg(
              "Publishing.GetOptInAppealsSummaryStats#1",
              (0, u.I8)(gt, e, i),
              _t,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (t.CreatePartnerAppOptInEmails = function (t, e, i) {
            return t.SendMsg(
              "Publishing.CreatePartnerAppOptInEmails#1",
              (0, u.I8)(x, e, i),
              q,
              { ePrivilege: 1 },
            );
          }),
          (t.UpdatePartnerAppOptInEmails = function (t, e, i) {
            return t.SendMsg(
              "Publishing.UpdatePartnerAppOptInEmails#1",
              (0, u.I8)(W, e, i),
              N,
              { ePrivilege: 1 },
            );
          }),
          (t.SendPartnerOptInEmailAndWait = function (t, e, i) {
            return t.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              (0, u.I8)(V, e, i),
              K,
              { ePrivilege: 1 },
            );
          }),
          (t.GetPartnerAppOptInEmailDefAndStats = function (t, e, i) {
            return t.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              (0, u.I8)(J, e, i),
              Z,
              { ePrivilege: 1 },
            );
          }),
          (t.GetEstimatePartnerAppOptInEmail = function (t, e, i) {
            return t.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              (0, u.I8)(X, e, i),
              Y,
              { ePrivilege: 1 },
            );
          }),
          (t.TestFirePartnerAppOptInEmail = function (t, e, i) {
            return t.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              (0, u.I8)(Q, e, i),
              tt,
              { ePrivilege: 1 },
            );
          }),
          (t.GetOptInEmailTracking = function (t, e, i) {
            return t.SendMsg(
              "Publishing.GetOptInEmailTracking#1",
              (0, u.I8)(it, e, i),
              nt,
              { ePrivilege: 1 },
            );
          }),
          (t.GetPartnerPaidGivenPackageList = function (t, e, i) {
            return t.SendMsg(
              "Publishing.GetPartnerPaidGivenPackageList#1",
              (0, u.I8)(T, e, i),
              j,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(Bt || (Bt = {})),
        (function (t) {
          t.GetInvites = function (t, e, i) {
            return t.SendMsg(
              "PartnerMembershipInvite.GetInvites#1",
              (0, u.I8)(bt, e, i),
              wt,
              { bConstMethod: !0, ePrivilege: 11 },
            );
          };
        })(Dt || (Dt = {}));
    },
    41103: (t, e, i) => {
      "use strict";
      i.d(e, { Hl: () => _, dQ: () => g });
      var n = i(34629),
        r = i(41735),
        a = i.n(r),
        s = i(14947),
        o = i(90626),
        c = i(85044),
        l = i(17720),
        u = i(81393),
        d = i(68797),
        m = i(78327);
      class p {
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
          let n = m.TS.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
            r = a().get(n, {
              params: { steamids: i.join(",") },
              withCredentials: !0,
              cancelToken: e?.token,
            });
          i.forEach((t) => this.m_mapProfilesLoading.set(t, r));
          let s = await r;
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
            ? m.TS.COMMUNITY_BASE_URL + "id/" + e.profile_url
            : m.TS.COMMUNITY_BASE_URL + "profiles/" + t.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(t) {
          const e = this.GetProfileBySteamID(t);
          return e && e.persona_name ? e.persona_name : "";
        }
      }
      (0, n.Cg)([s.sH], p.prototype, "m_mapProfiles", void 0);
      const g = new p();
      function _(t) {
        return (function (t) {
          const e = o.useMemo(
              () => (t ? ("string" == typeof t ? new l.b(t) : t) : null),
              [t],
            ),
            [i, n] = (0, o.useState)(!!e && !g.BHasProfileBySteamID(e));
          return (
            (0, o.useEffect)(() => {
              const t = a().CancelToken.source();
              return (
                e &&
                  !g.BHasProfileBySteamID(e) &&
                  g
                    .LoadProfiles([e.ConvertTo64BitString()])
                    .catch((t) => {
                      const i = (0, d.H)(t);
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
            [i, !!e && g.GetProfileBySteamID(e)]
          );
        })(o.useMemo(() => (t ? l.b.InitFromAccountID(t) : null), [t]));
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2715],
  {
    55215: (t) => {
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
    69727: (t) => {
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
        DiscountGridDataColumn: "_1yW70vcAdwnrMIrVE8y03S",
        RelatedDiscount: "_12zwKFzckK0AkG-lS95iTK",
        BasePrice: "_1a_LwvXaB11PNusz9GPz98",
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
    9953: (t) => {
      t.exports = {
        UnknownValue: "_3ovtfYPeggcsA44NZPuTAh",
        PackageName: "t8fSjo20nSXqky8aCgQwm",
        PackageType: "_3LZvjdGD8NF2mke6oav-MK",
        LastRow: "_18dUcjzcI8gjV1xagLSWI6",
        AppCount: "_2J3kNbz7o9Fd161kGxFARG",
        PackageID: "_1E3TVBOn6hjLXBLwqCPV4J",
        PackageNameColumn: "_2pjx8S7EGnMJcmc9CzX9UK",
        PackagePricesBelowMin: "_2x4be2ySvHHrfL_FaOtZPm",
      };
    },
    28738: (t, e, n) => {
      "use strict";
      n.d(e, { Jq: () => D, y$: () => m });
      var i = n(85556),
        a = n(80751),
        s = n.n(a),
        o = n(54842),
        r = n(47427),
        l = n(48760),
        c = n(35427),
        u = n(62210),
        d = n(16649),
        p = n(37563);
      class g {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map()),
            (0, o.rC)(this);
        }
        LoadProfiles(t, e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, u.X)(
              t.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let n = t.filter(
              (t) =>
                !this.m_mapProfiles.has(t) && !this.m_mapProfilesLoading.has(t),
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(t[0]);
            let i = p.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              a = s().get(i, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == e ? void 0 : e.token,
              });
            n.forEach((t) => this.m_mapProfilesLoading.set(t, a));
            let o = yield a;
            o.data &&
              200 == o.status &&
              o.data.forEach((t) => {
                (t.avatar_hash = t.avatar_url),
                  (t.avatar_url_medium = (0, l.U)(t.avatar_url, "medium")),
                  (t.avatar_url_full = (0, l.U)(t.avatar_url, "full")),
                  (t.avatar_url = (0, l.U)(t.avatar_url)),
                  this.m_mapProfiles.set(t.steamid, t),
                  this.m_mapProfilesLoading.delete(t.steamid);
              });
          });
        }
        GetProfile(t) {
          return this.m_mapProfiles.get(t);
        }
        GetProfileByAccountID(t) {
          return this.m_mapProfiles.get(
            c.K.InitFromAccountID(t).ConvertTo64BitString(),
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
            c.K.InitFromAccountID(t).ConvertTo64BitString(),
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
            ? p.De.COMMUNITY_BASE_URL + "id/" + e.profile_url
            : p.De.COMMUNITY_BASE_URL + "profiles/" + t.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(t) {
          const e = this.GetProfileBySteamID(t);
          return e && e.persona_name ? e.persona_name : "";
        }
      }
      (0, i.gn)([o.LO], g.prototype, "m_mapProfiles", void 0);
      const m = new g();
      function D(t) {
        return (function (t) {
          const e = r.useMemo(
              () => (t ? ("string" == typeof t ? new c.K(t) : t) : null),
              [t],
            ),
            [n, i] = (0, r.useState)(!!e && !m.BHasProfileBySteamID(e));
          return (
            (0, r.useEffect)(() => {
              const t = s().CancelToken.source();
              return (
                e &&
                  !m.BHasProfileBySteamID(e) &&
                  m
                    .LoadProfiles([e.ConvertTo64BitString()])
                    .catch((t) => {
                      const n = (0, d.l)(t);
                      console.error(
                        "useUserProfile failed to load profile for " +
                          e.ConvertTo64BitString() +
                          ": " +
                          n.strErrorMsg,
                        n,
                      );
                    })
                    .finally(() => {
                      t.token.reason || i(!1);
                    }),
                () => t.cancel("unmounting useUserProfile")
              );
            }, [t]),
            [n, !!e && m.GetProfileBySteamID(e)]
          );
        })(r.useMemo(() => (t ? c.K.InitFromAccountID(t) : null), [t]));
      }
    },
    81033: (t, e, n) => {
      "use strict";
      n.d(e, {
        Q: () => S,
        fH: () => k,
        U8: () => _,
        o: () => h,
        vc: () => I,
        K$: () => G,
        BS: () => E,
        Lr: () => C,
        z8: () => P,
        zp: () => f,
      });
      var i = n(85556),
        a = n(80751),
        s = n.n(a),
        o = n(47427),
        r = n(64936),
        l = n(16649),
        c = n(16997),
        u = n(45492),
        d = n(20417),
        p = n(37563);
      const g = "1",
        m = "SaleEvent_DurationDiscount_Tooltip",
        D = "discount";
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
              c = {};
            let u = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const t = yield s().get(i, {
                params: c,
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
                    this.GetAllDiscountEvents(),
                  ),
                  1
                );
              }
              u = { response: t };
            } catch (t) {
              u = t;
            }
            const d = (0, l.l)(u);
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
        CreateDiscountEvent(t, e, n, a, o, r, c, u) {
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
              v.append("strJSONDiscountInfo", S(n, a, o, r, c));
            let h = null;
            try {
              const l = yield s().post(i, v, {
                withCredentials: !0,
                cancelToken: null == u ? void 0 : u.token,
              });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (d = l.data) || void 0 === d
                    ? void 0
                    : d.success) &&
                l.data.eventid
              ) {
                const i = {
                  id: l.data.eventid,
                  name: n,
                  start_date: t,
                  end_date: e,
                  appids: c,
                  publisherids: r,
                  description: o,
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
              h = { response: l };
            } catch (t) {
              h = t;
            }
            const _ = (0, l.l)(h);
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
              c = new FormData();
            c.append("sessionid", p.De.SESSIONID),
              c.append("start_time", i.start_date.toString()),
              c.append("end_time", i.end_date.toString()),
              c.append(
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
              const t = yield s().post(r, c, {
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
                    this.GetAllDiscountEvents(),
                  ),
                  t
                );
              }
              u = { response: t };
            } catch (t) {
              u = t;
            }
            const d = (0, l.l)(u);
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
              i = (0, l.l)(r);
            } catch (t) {
              i = (0, l.l)(t);
            }
            return (
              console.error(
                "CDiscountEventStore.InternalLoadSingleDiscountEvent failed: " +
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
              i = (0, l.l)(r);
            } catch (t) {
              i = (0, l.l)(t);
            }
            return (
              console.error(
                "CDiscountEventStore.InternalLoadSingleDiscountEventsAppList failed: " +
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
        return v.Get().GetDiscountEventListCallback();
      }
      function f(t) {
        const { rgDiscountEvents: e, eResult: n } = E(0, t);
        let i = [];
        return (
          null == e ||
            e.forEach((t) => {
              "unique" == t.collision_type && (i = i.concat(t));
            }),
          { rgMajorSaleDiscountEvents: i, eResult: n }
        );
      }
      function E(t, e) {
        const n = v.Get().BLoadedViaInitOrFullLoad(),
          [i, a] = o.useState(n ? v.Get().GetAllDiscountEvents() : null),
          [s, r] = o.useState(null),
          l =
            t ||
            Number.parseInt((0, p.kQ)("publisherid", "application_config"));
        (0, d.Qg)(v.Get().GetDiscountEventListCallback(), a),
          o.useEffect(() => {
            v.Get().BLoadedViaInitOrFullLoad() ||
              v.Get().LoadAllDiscountEvents(l).then(r);
          }, [i, l]);
        const c = null != s ? s : (null == i ? void 0 : i.length) ? 1 : null;
        return o.useMemo(
          () => ({
            rgDiscountEvents: e ? i : v.Get().GetFutureDiscountEvents(),
            eResult: c,
          }),
          [i, c, e],
        );
      }
      function k(t) {
        return v.Get().GetDiscountEvent(t);
      }
      function I(t) {
        const { data: e } = (function (t) {
          const [e, n] = (0, o.useState)(v.Get().GetDiscountEvent(t)),
            [a, s] = o.useState(!!t);
          return (
            o.useEffect(() => {
              if ((!e && t) || ((null == e ? void 0 : e.id) != t && t)) {
                (() =>
                  (0, i.mG)(this, void 0, void 0, function* () {
                    try {
                      const e = yield v.Get().LoadSingleDiscountEvent(t);
                      e && n(e);
                    } finally {
                      s(!1);
                    }
                  }))();
              } else s(!1);
            }, [t, e]),
            (0, d.Qg)(v.Get().GetDiscountEventCallback(t), n),
            { data: e, isLoading: a }
          );
        })(t);
        return e;
      }
      function G(t) {
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
      function S(t, e, n, i, a) {
        return JSON.stringify({
          discount_event: {
            name: t,
            publisherids: i.join(","),
            appids: a.join(","),
            description: n,
            event: g,
            collision_type: "proximity",
            header: e,
            tooltip: m,
            type: D,
          },
        });
      }
      function P() {
        return { fnCreateDiscountEvent: v.Get().CreateDiscountEvent };
      }
      function C() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            v.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, i.gn)([c.a], v.prototype, "GetDiscountEvent", null),
        (0, i.gn)([c.a], v.prototype, "GetAppList", null),
        (0, i.gn)([c.a], v.prototype, "CreateDiscountEvent", null),
        (0, i.gn)(
          [c.a],
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
        PV: () => f,
        QQ: () => E,
        Rz: () => C,
        V7: () => I,
        ZW: () => k,
        _l: () => b,
        dS: () => L,
        du: () => R,
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
        l = n(42718),
        c = n(83999),
        u = n(62210),
        d = n(16649),
        p = n(16997),
        g = n(45492),
        m = n(20417),
        D = n(37563),
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
                D.De.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              o = { sessionid: D.De.SESSIONID, opt_in_name: t, opt_in_only: e },
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
                D.De.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              a = { sessionid: D.De.SESSIONID, opt_in_name: t },
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
              const i = D.De.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                a = { sessionid: D.De.SESSIONID, appid: e, opt_in_name: t },
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
            const l = new Promise((t, e) => {
              i = t;
            });
            (t = c.kp(t).sort()),
              (e = c.kp(e).sort()),
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
              D.De.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
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
                const l = yield Promise.all(i);
                for (const t of l) {
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
              const a = new FormData();
              a.append("sessionid", D.De.SESSIONID),
                Object.keys(e).forEach((t) => a.append(t, e[t]));
              const o =
                  D.De.PARTNER_BASE_URL +
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
              o.append("sessionid", D.De.SESSIONID),
                o.append("appid", "" + t),
                o.append("opt_in_name", e.opt_in_name),
                o.append("jsondata", JSON.stringify(e)),
                n && o.append("bCreatePendingInvite", "true");
              const r =
                  D.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  t,
                l = yield s().post(r, o, { withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (a = l.data) || void 0 === a ? void 0 : a.success)
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
              i = (0, d.l)(l);
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
              const o = e.opt_in_name || e.jsondata.opt_in_name,
                r = new FormData();
              r.append("sessionid", D.De.SESSIONID),
                r.append("appid", "" + t),
                r.append("opt_in_name", o),
                r.append("approved", "" + n);
              const l =
                  D.De.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
                c = yield s().post(l, r, { withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                1 ==
                  (null === (a = c.data) || void 0 === a ? void 0 : a.success)
              ) {
                const e = Object.assign(
                  {},
                  this.m_mapRegistrations.get(t).get(o),
                );
                return (
                  (e.accountid_appeal = D.L7.accountid),
                  (e.appeal_state = n ? 1 : 2),
                  this.m_mapRegistrations.get(t).set(o, e),
                  this.GetSingleAppRegistrationChange(t, o).Dispatch(e),
                  !0
                );
              }
              i = (0, d.l)(c);
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
              (0, D.kQ)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(t) &&
            (this.InternalAddRegistrations(t),
            "dev" == D.De.WEB_UNIVERSE &&
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
      function f() {
        return r.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: h.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function E(t, e, n) {
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
          (0, m.Qg)(h.Get().GetOptInNameRegistrationsCallbackList(t), n), e
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
        const n = (0, l.useQuery)(
          ["useAllOptInRegistrationByName", t, Boolean(e)],
          () => h.Get().FetchOptInRegistrationForOptIn(t, e),
          { staleTime: 36e5 },
        );
        return n.isLoading ? null : n.data;
      }
      function S(t) {
        const e = (0, l.useQuery)({
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
        return (0, m.Qg)(h.Get().GetSingleAppRegistrationChange(e, t), a), i;
      }
      function C(t, e) {
        const [n, i] = (0, r.useState)(
          h.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e),
        );
        return (0, m.Qg)(h.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function b(t, e) {
        const [n, i] = (0, r.useState)(
          h.Get().GetExistingOptInRegistartion(t, e),
        );
        return (0, m.Qg)(h.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function L() {
        return {
          fnUpdateOptInRegistrationJson: h.Get().UpdateOptInRegistrationJson,
        };
      }
      function R() {
        return { fnUpdateAppealState: h.Get().UpdateAppealState };
      }
      function A() {
        const [t, e] = (0, r.useState)(h.Get().GetLoadCount());
        return (
          (0, m.Qg)(h.Get().GetLoadCountChange(), e), h.Get().GetLoadCount()
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
        EV: () => N,
        Fi: () => L,
        ID: () => b,
        L1: () => y,
        LT: () => k,
        Qy: () => F,
        Su: () => S,
        U8: () => D,
        XM: () => G,
        Xj: () => M,
        _J: () => E,
        b2: () => R,
        co: () => I,
        dE: () => v,
        hd: () => O,
        k1: () => w,
        kk: () => f,
        ls: () => A,
        u3: () => B,
        v6: () => P,
        yI: () => C,
      });
      var i = n(85556),
        a = n(80751),
        s = n.n(a),
        o = n(47427),
        r = n(64936),
        l = n(16649),
        c = n(45492),
        u = n(20417),
        d = n(45284),
        p = n(37563),
        g = n(83999),
        m = n(46984);
      const D = 95,
        v = 10;
      class h {
        static Get() {
          return (
            h.s_Singleton || ((h.s_Singleton = new h()), h.s_Singleton.Init()),
            h.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackageDiscountsById = new Map()),
            (this.m_mapDiscountCallbackList = new Map()),
            (this.m_mapPackageDiscountsByPackageId = new Map()),
            (this.m_mapPackageCallbackList = new Map()),
            (this.m_mapPackageDiscountsByDiscountEventId = new Map()),
            (this.m_mapDiscountEventCallbackList = new Map()),
            (this.m_allDiscountCallbackList = new c.pB()),
            (this.m_mapMaxDiscountPercentageByPackageId = new Map()),
            (this.m_mapExistingPackageRequests = new Map()),
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
              : n.length) || (e.discountEventID = _(e)),
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
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = g.kp(t).sort().join(",");
            return (
              this.m_mapExistingPackageRequests.has(i) ||
                this.m_mapExistingPackageRequests.set(
                  i,
                  this.InternalLoadPackageDiscounts(t, e, n),
                ),
              this.m_mapExistingPackageRequests.get(i)
            );
          });
        }
        InternalLoadPackageDiscounts(t, e, n = 0) {
          var a, o, r, c;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = new Set();
            for (const e of t)
              this.m_mapPackageDiscountsByPackageId.has(e) ||
                0 == e ||
                i.add(e);
            const u = Array.from(i).sort();
            if (0 == u.length) return 1;
            let d = null;
            const g = new Promise((t, e) => {
                d = t;
              }),
              m = (0, p.kQ)("publisherid", "application_config"),
              D =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                m;
            let v = null,
              h = null;
            try {
              const t = [],
                o = new Array();
              for (; u.length > 0; ) {
                const i = u.splice(0, 50);
                o.push(i);
                const a = { packageids: i.join(","), origin: self.origin };
                t.push(
                  s().get(D, {
                    params: a,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                    timeout: n,
                  }),
                );
              }
              const r = yield Promise.all(t),
                l = [];
              for (const t of r) {
                if (
                  ((h = o.unshift()),
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
                t.data.discounts.forEach((t) => l.push(t));
              }
              null == v && this.InternalAddDiscounts(l, Array.from(i));
            } catch (t) {
              v = t;
            }
            if (null == v) d(1);
            else {
              const t = (0, l.l)(v);
              console.error(
                "Could not load Discounts for packages",
                h,
                t.strErrorMsg,
                t,
              ),
                d(
                  null !==
                    (c =
                      null ===
                        (r =
                          null === (o = null == v ? void 0 : v.response) ||
                          void 0 === o
                            ? void 0
                            : o.data) || void 0 === r
                        ? void 0
                        : r.success) && void 0 !== c
                    ? c
                    : 2,
                );
            }
            return g;
          });
        }
        SaveDiscountToServer(t, e) {
          var n, a, o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                p.De.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                t.packageID,
              c = new FormData();
            c.append("sessionid", p.De.SESSIONID),
              t.nDiscountID && c.append("id", t.nDiscountID.toString()),
              c.append("name", t.strDiscountName),
              c.append("description", t.strDiscountDescription),
              t.discountEventID &&
                !f(t.discountEventID) &&
                c.append("type", t.discountEventID),
              c.append("percent", t.nDiscountPct.toString()),
              c.append(
                "start_date",
                new Date(1e3 * t.rtStartDate).toISOString(),
              ),
              c.append("end_date", new Date(1e3 * t.rtEndDate).toISOString());
            let u = null;
            try {
              const o = yield s().post(i, c, {
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
            const d = (0, l.l)(u);
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
          var o, r, c;
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
            const g = (0, l.l)(d);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                g.strErrorMsg,
                g,
              ),
              null !==
                (c =
                  null === (r = null == d ? void 0 : d.response) || void 0 === r
                    ? void 0
                    : r.data) && void 0 !== c
                ? c
                : { success: 2 }
            );
          });
        }
        GetCallbackListForDiscount(t) {
          return (
            this.m_mapDiscountCallbackList.has(t) ||
              this.m_mapDiscountCallbackList.set(t, new c.pB()),
            this.m_mapDiscountCallbackList.get(t)
          );
        }
        GetCallbackListForPackage(t) {
          return (
            this.m_mapPackageCallbackList.has(t) ||
              this.m_mapPackageCallbackList.set(t, new c.pB()),
            this.m_mapPackageCallbackList.get(t)
          );
        }
        GetCallbackListForDiscountEvent(t) {
          return (
            this.m_mapDiscountEventCallbackList.has(t) ||
              this.m_mapDiscountEventCallbackList.set(t, new c.pB()),
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
          const n = D;
          return null !==
            (e = this.m_mapMaxDiscountPercentageByPackageId.get(t)) &&
            void 0 !== e
            ? e
            : n;
        }
        GetMaxDiscountPercentageForGroup(t) {
          const e = t.map((t) => this.GetMaxDiscountPercentage(t));
          return Math.min(...e);
        }
      }
      function _(t) {
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, d.JD)(t.strDiscountName)}`;
      }
      function f(t) {
        return t.startsWith("custom-event-");
      }
      function E(t) {
        return h.Get().GetDiscountByID(t);
      }
      function k(t) {
        return h.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function I(t) {
        return h.Get().GetAllDiscountsForPackage(t);
      }
      function G(t) {
        return h.Get().GetCallbackListForPackage(t);
      }
      function S() {
        return h.Get().GetAllDiscountsForAllPackages();
      }
      function P() {
        return h.Get().GetGlobalCallbackList();
      }
      function C() {
        return o.useCallback(
          (t, e, n) => h.Get().LoadPackageDiscounts(t, e, n),
          [],
        );
      }
      function b() {
        const t = (t) => h.Get().SaveDiscountToServer(t),
          e = (t, e, n) => h.Get().DeleteDiscountOnServer(t, e, n);
        return o.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          [],
        );
      }
      function L(t) {
        return new Map(
          Array.from(t.map((t) => [t, h.Get().GetDiscountByID(t)])),
        );
      }
      function R(t) {
        const e = (0, r.zD)(),
          [n, i] = o.useState(h.Get().GetAllDiscountsForPackage(t));
        return (
          (0, u.Qg)(h.Get().GetCallbackListForPackage(t), i),
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
      function A(t) {
        const e = (0, r.zD)();
        if (!t) return null;
        let n = null;
        return (
          t.forEach((t) => {
            const i = h.Get().GetAllDiscountsForPackage(t);
            if ((null == i ? void 0 : i.length) > 0)
              for (const t of i)
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
      function y(t, e, n) {
        const [i, a] = (0, o.useState)(),
          [s, r] = (0, o.useState)([]);
        return (
          (0, o.useEffect)(() => {
            if (e < n && (null == t ? void 0 : t.length) > 0) {
              let i = new Array(),
                s = new Array(),
                o = new Array();
              for (let t = e; t < n; t += m._H.PerDay) i.push(t), s.push(!1);
              t.forEach((t) => {
                const a = h.Get().GetAllDiscountsForPackage(t);
                if ((null == a ? void 0 : a.length) > 0)
                  for (const t of a)
                    t.rtStartDate > n ||
                      t.rtEndDate < e ||
                      (o.push(t),
                      i.forEach((e, n) => {
                        e < t.rtEndDate &&
                          t.rtStartDate < e + m._H.PerDay &&
                          (s[n] = !0);
                      }));
              }),
                r(o),
                a(s.filter((t) => !0 === t).length);
            } else a(0);
          }, [t, e, n]),
          { nDaysInDiscount: i, rgDiscountWithOverlap: s }
        );
      }
      function w(t) {
        const e = (0, r.zD)(),
          [n, i] = o.useState(h.Get().GetAllDiscountsForAllPackages());
        return (
          (0, u.Qg)(h.Get().GetGlobalCallbackList(), i),
          o.useMemo(() => {
            var i;
            let a = null;
            if (null == n) return { mostRecentDiscount: a, bLoading: !0 };
            for (const n of t) {
              const t =
                null !== (i = h.Get().GetAllDiscountsForPackage(n)) &&
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
      function O(t) {
        const [e, n] = o.useState(h.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, u.Qg)(h.Get().GetCallbackListForDiscountEvent(t), n), e;
      }
      function B(t) {
        const [e, n] = o.useState(h.Get().GetAllDiscountsForPackage(t));
        (0, u.Qg)(h.Get().GetCallbackListForPackage(t), n);
        const [i, a] = o.useState(!1),
          r = C();
        return (
          o.useEffect(() => {
            if (e) i || a(!0);
            else if (!i && r) {
              const e = s().CancelToken.source();
              r([t]).then(() => {
                e.token.reason || a(!0);
              });
            }
          }, [e, i, a, t, r]),
          e
        );
      }
      function F(t) {
        return h.Get().GetMaxDiscountPercentage(t);
      }
      function N(t) {
        return t.some(
          (t) => t.nDiscountPct > h.Get().GetMaxDiscountPercentage(t.packageID),
        );
      }
      function M(t) {
        return h.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    95518: (t, e, n) => {
      "use strict";
      n.d(e, {
        B6: () => A,
        E5: () => U,
        E_: () => N,
        Eh: () => E,
        HU: () => B,
        JW: () => M,
        LX: () => k,
        TB: () => O,
        _9: () => y,
        dy: () => V,
        ho: () => Q,
        hr: () => L,
        k: () => x,
        pl: () => R,
        s$: () => w,
        yn: () => F,
        z$: () => j,
      });
      var i = n(81033),
        a = n(10095),
        s = n(7073),
        o = n(98061),
        r = n(87813),
        l = n(37047),
        c = n(47427),
        u = n(64936),
        d = n(15690),
        p = n(45492),
        g = n(20417),
        m = n(45284),
        D = n(46984),
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
          f(null == t ? void 0 : t.discount, null == e ? void 0 : e.discount) &&
          (null == t ? void 0 : t.nBaseAppID) ==
            (null == e ? void 0 : e.nBaseAppID) &&
          (null == t ? void 0 : t.bChangedLocally) ==
            (null == e ? void 0 : e.bChangedLocally)
        );
      }
      function f(t, e) {
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
      const E = 30,
        k = E * D._H.PerDay - 1.5 * D._H.PerHour,
        I = 10 * D._H.PerMinute;
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
          return f(r, s)
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
                f(e, e.nDiscountID && (0, s._J)(e.nDiscountID)) || t.push(e);
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
          const l = (0, h.wQ)(),
            c = (0, r.R1)(o),
            u = c.nBaseAppID;
          let p = u && a.qh.Get().GetOptInRegistrationAndEligibilityForApp(u);
          u ||
            p ||
            (p = a.qh
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                o.GetIncludedAppIDs(),
              ));
          const g = this.GetPackageDiscountsIncludingOverrides(t),
            m = !g,
            D = m
              ? null
              : Array.from(g.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const v = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const a of l) {
            if (e && v.has(a.id)) continue;
            const r = { packageID: t, discountEventID: a.id, nBaseAppID: u };
            if (
              ((r.discount = null == g ? void 0 : g.get(a.id)),
              (r.bChangedLocally = !!(null === (n = r.discount) || void 0 === n
                ? void 0
                : n.bChangedLocally)),
              m)
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
                  c,
                  a,
                );
                (r.eState = t), (r.optInReg = e);
              }
              if (10 != r.eState && 4 != r.eState && 5 != r.eState) {
                const e = S(t, a, D);
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
        GetFurthestCooldownFromPastDiscounts(t) {
          const e = (0, u.kl)();
          let n = e;
          return (
            t
              .filter((t) => t.rtStartDate < e)
              .filter((t) => {
                const e = (0, i.fH)(t.discountEventID);
                return "unique" != (null == e ? void 0 : e.collision_type);
              })
              .forEach((t) => {
                t.rtEndDate + k < n && (n = t.rtEndDate + k);
              }),
            n
          );
        }
        GetFutureDiscountRanges(t) {
          const e = d.Z.Get().GetPackage(t),
            n = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !n) return [];
          const a = Array.from(n.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate,
            ),
            s = (0, u.kl)(),
            o = Math.max(
              s,
              e.GetReleaseDateRTime() + k,
              (0, h.QM)(t) + k,
              this.GetFurthestCooldownFromPastDiscounts(a),
            ),
            r = [],
            c = new Set();
          let p = o;
          for (let e = 0; e < a.length; e++) {
            const n = a[e];
            if (0 == n.nDiscountPct) continue;
            if (n.rtStartDate < o) continue;
            const s = (0, i.fH)(n.discountEventID);
            let u = n.rtStartDate - k;
            const d = "unique" == (null == s ? void 0 : s.collision_type);
            if (d && ((u = n.rtStartDate + I), e + 1 < a.length)) {
              const t = a[e + 1],
                n = (0, h.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (u = Math.min(u, t.rtStartDate - k));
            }
            if (p + D._H.PerDay < u) {
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
              r.push(e), e.rgDiscountEventIDs.forEach((t) => c.add(t));
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
              c.add(n.discountEventID),
              (p = n.rtEndDate + k),
              d && ((p = n.rtEndDate - I), e - 1 >= 0))
            ) {
              const t = a[e - 1],
                n = (0, h.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (p = Math.max(p, t.rtEndDate + k));
            }
            const m = (0, l._)(p);
            m - p <= 2 * D._H.PerHour && (p = m);
          }
          const g = (0, l._)(s + D._H.PerYear / 2);
          if (p + D._H.PerDay < g) {
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
            r.push(e), e.rgDiscountEventIDs.forEach((t) => c.add(t));
          }
          const m = (0, h.wQ)().filter(
            (e) =>
              "unique" == e.collision_type &&
              !c.has(e.id) &&
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
            l = r ? e.start_date + I : e.start_date - k,
            c = r ? e.end_date - I : e.end_date + k;
          if (t.rtEndDate > l && c > t.rtStartDate) {
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
          return (0, m.eT)(a, s);
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
      function L() {
        return c.useCallback(() => {
          G.Get();
        }, []);
      }
      function R() {
        const [t, e] = c.useState(G.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, g.Qg)(G.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function A() {
        return c.useCallback(() => {
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
        return c.useCallback(
          (t) => G.Get().DiscardAllLocalPackageDiscountOverrides(t),
          [],
        );
      }
      function w() {
        return c.useCallback(
          (t, e) => G.Get().OptInRegistrationUpdatedForApp(t, e),
          [],
        );
      }
      function O() {
        return c.useCallback(
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
      function F(t, e) {
        const [n, i] = c.useState(() => {
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
          fnSetDiscountPct: c.useCallback(
            (n) => {
              G.Get().OverridePackageDiscountPct(t, e, n);
            },
            [t, e],
          ),
        };
      }
      function N() {
        return c.useCallback((t, e, n) => {
          const i = [];
          for (const a of n) {
            const n = G.Get().OverridePackageDiscountPct(a, e, t);
            n && i.push(n);
          }
          return i;
        }, []);
      }
      function M(t) {
        const e = U(t);
        return c.useMemo(
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
        const [e, n] = c.useState(() => T(t)),
          i = c.useCallback(() => {
            n(T(t));
          }, [t]);
        return (
          c.useEffect(i, [t, i]),
          (0, g.Qg)(G.Get().GetDiscountEventColumnCallbackList(t), i),
          e
        );
      }
      function T(t) {
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
            const [t, e] = c.useState(G.IsInitialized());
            return (0, g.Qg)(G.s_initializationCallbackList, e), t;
          })(),
          [n, i] = c.useState(e ? G.Get().GetFutureDiscountRanges(t) : []),
          a = c.useCallback(
            () => i(e ? G.Get().GetFutureDiscountRanges(t) : []),
            [t, e],
          );
        return (
          (0, g.Qg)(
            e && G.Get().GetLocalPackageDiscountOverrideCallbackList(),
            a,
          ),
          (0, g.Qg)(e && (0, s.XM)(t), a),
          c.useEffect(a, [t, e, a]),
          n
        );
      }
      function Q(t) {
        let [e, n] = c.useState(() => G.Get().GetHighestPackageDiscount(t)),
          i = c.useCallback(() => {
            n(G.Get().GetHighestPackageDiscount(t));
          }, [t, n]);
        return (0, g.Qg)(G.Get().GetDiscountPackageCallbackList(t), i), e;
      }
      G.s_initializationCallbackList = new p.pB();
    },
    70044: (t, e, n) => {
      "use strict";
      n.d(e, {
        $f: () => f,
        D_: () => G,
        P6: () => I,
        QM: () => g,
        Zq: () => E,
        f0: () => D,
        im: () => h,
        ix: () => v,
        wQ: () => m,
        x9: () => _,
        y4: () => k,
      });
      var i = n(47427),
        a = n(64936),
        s = n(45492),
        o = n(20417),
        r = n(37563),
        l = n(81033),
        c = n(7073),
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
            (0, l.U8)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, c.v6)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const t = (0, l.o)(),
            e = (0, c.Su)(),
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
            e && !this.m_bIncludeCustomEvents && (0, c.kk)(t.id) && (e = !1),
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
      function m() {
        return p.Get().m_rgDiscountEvents;
      }
      function D(t) {
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
      function f(t = !0) {
        return p.Get().m_setVisibleDiscountEventIDs;
      }
      function E(t) {
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
        Eg: () => L,
        Ii: () => C,
        JP: () => b,
        O7: () => G,
        UA: () => k,
        zQ: () => f,
        zV: () => I,
      });
      var i = n(47427),
        a = n(59728),
        s = n(37563),
        o = n(31846),
        r = n(9953),
        l = n.n(r),
        c = n(6683),
        u = n(42006),
        d = n(66263),
        p = n(47316),
        g = n.n(p),
        m = n(7073),
        D = n(95518);
      function v(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          a = (0, D.ho)(n);
        let s = (0, m.Qy)(n) < a,
          r = g()(l().PackageNameColumn, s && l().PackagePricesBelowMin),
          c = s
            ? (0, o.Xx)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return i.createElement(
          _,
          Object.assign({ className: r, toolTip: c }, t),
        );
      }
      function h(t) {
        const { cell: e } = t,
          n = e.getRow().getData().packageID || 0,
          a = (0, d.qH)(n);
        let s = g()(l().PackageNameColumn, a && l().PackagePricesBelowMin),
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
          L,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${d}`,
            strToolTip: u,
            strClassName: c,
          },
          p,
        );
      }
      function f(t) {
        return i.useMemo(
          () => ({
            visible: !0,
            title: (0, o.Xx)("#PackageGrid_Column_PackageID"),
            field: "packageID",
            headerSort: !1,
            formatter: (0, c.reactFormatter)(
              i.createElement(_, Object.assign({}, t)),
            ),
            cssClass: l().PackageID,
            hozAlign: "right",
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageID_ttip"),
          }),
          [t],
        );
      }
      function E(t, e, n, i) {
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
            formatter: (0, c.reactFormatter)(
              e
                ? i.createElement(v, Object.assign({}, t))
                : i.createElement(h, Object.assign({}, t)),
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
            headerFilterFunc: E,
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
        const { fnBLocalChangesExist: n, fnWarnUser: a, cell: r } = t,
          l = r.getRow().getData().appids,
          c =
            null !== (e = null == l ? void 0 : l.length) && void 0 !== e
              ? e
              : 0,
          u = r.getRow().getData().packageID;
        return i.createElement(
          L,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${u}`,
            strToolTip: (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == c ? "1 appid" : c + " appids",
        );
      }
      function C(t) {
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
      function b(t, e, n, i) {
        return t == (0, o.Xx)("#PackageGrid_NoBaseGameFoundForPackage")
          ? `<div title='${(0, o.Xx)("#PackageGrid_NoBaseGameExplanation")}' >${t} (?) <span>(${(0, o.kb)("#PackageGrid_PackageCount", e)})</span></div>`
          : `<div>${t} <span>(${(0, o.kb)("#PackageGrid_PackageCount", e)})</span></div>`;
      }
      function L(t) {
        const {
          fnBLocalChangesExist: e,
          fnWarnUser: n,
          href: s,
          children: o,
          strToolTip: r,
          strClassName: l,
        } = t;
        return i.createElement(
          a.HP,
          { toolTipContent: r, className: l },
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
      n.d(e, { R1: () => l, Sx: () => o, xs: () => u });
      var i = n(85556),
        a = n(15690),
        s = n(31846);
      const o = new Set([0, 2, 6, 13]),
        r = new Set([4, 7, 11]);
      function l(t) {
        var e, n;
        let i,
          l = !1,
          c = !1;
        const u = new Set();
        for (const n of null !==
          (e = null == t ? void 0 : t.GetIncludedAppIDs()) && void 0 !== e
          ? e
          : []) {
          const t = a.Z.Get().GetApp(n);
          if (t && o.has(t.GetAppType())) (l = !0), u.add(t.GetID());
          else if (t && r.has(t.GetAppType())) {
            c = !0;
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
          contents: l && c ? "BOTH" : l ? "GAME" : c ? "DLC" : null,
          nBaseAppID: i,
        };
      }
      const c = { include_release: !0 };
      function u(t, e) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (
            1 != (yield a.Z.Get().HintLoadStorePackages(t, c)) ||
            e.token.reason
          )
            return null;
          const n = [];
          t.map((t) => a.Z.Get().GetPackage(t))
            .filter((t) => !!t)
            .forEach((t) => n.push(...t.GetIncludedAppIDs()));
          const i = Array.from(new Set(n));
          if (1 != (yield a.Z.Get().HintLoadStoreApps(i, c)) || e.token.reason)
            return null;
          const s = i
              .map((t) => a.Z.Get().GetApp(t))
              .filter((t) => !!(null == t ? void 0 : t.GetParentAppID()))
              .map((t) => t.GetParentAppID()),
            o = Array.from(new Set(s));
          if (1 != (yield a.Z.Get().HintLoadStoreApps(o, c)) || e.token.reason)
            return null;
          return Array.from(new Set(i.concat(o)));
        });
      }
    },
  },
]);

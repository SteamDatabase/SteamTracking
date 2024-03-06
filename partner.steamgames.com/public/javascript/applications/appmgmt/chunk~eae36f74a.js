/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2715],
  {
    81033: (t, n, e) => {
      e.d(n, {
        Q: () => b,
        fH: () => f,
        U8: () => _,
        o: () => D,
        vc: () => A,
        K$: () => G,
        n$: () => S,
        BS: () => L,
        Lr: () => C,
        z8: () => I,
        zp: () => g,
      });
      var i = e(85556),
        s = e(80751),
        o = e.n(s),
        a = e(47427),
        l = e(64936),
        u = e(16649),
        d = e(16997),
        c = e(45492),
        r = e(20417),
        p = e(37563);
      const v = "1",
        E = "SaleEvent_DurationDiscount_Tooltip",
        h = "discount";
      class m {
        GetFutureDiscountEvents() {
          const t = (0, l.kl)();
          return Array.from(m.Get().m_mapDiscountEvents.values()).filter(
            (n) => n.end_date > t,
          );
        }
        GetAllDiscountEvents() {
          return Array.from(m.Get().m_mapDiscountEvents.values());
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
              this.m_mapDiscountEventCallback.set(t, new c.pB()),
            this.m_mapDiscountEventCallback.get(t)
          );
        }
        GetAppListCallback(t) {
          return (
            this.m_mapAppListCallback.has(t) ||
              this.m_mapAppListCallback.set(t, new c.pB()),
            this.m_mapAppListCallback.get(t)
          );
        }
        LoadAllDiscountEvents(t, n) {
          var e, s, a, l;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_bLoadEventsRequestInFlight) return 29;
            const i =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetalldiscountevents/" +
                t,
              d = {};
            let c = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const t = yield o().get(i, {
                params: d,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                ((this.m_bLoadEventsRequestInFlight = !1),
                200 == (null == t ? void 0 : t.status) &&
                  1 ==
                    (null === (e = t.data) || void 0 === e
                      ? void 0
                      : e.success) &&
                  t.data.events)
              ) {
                for (const n of t.data.events)
                  this.m_mapDiscountEvents.set(n.id, n);
                return (
                  (this.m_bLoadedViaInitOrFullLoad = !0),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  1
                );
              }
              c = { response: t };
            } catch (t) {
              c = t;
            }
            const r = (0, u.l)(c);
            return (
              console.error("Could not load Discount Events", r.strErrorMsg, r),
              null !==
                (l =
                  null ===
                    (a =
                      null === (s = null == c ? void 0 : c.response) ||
                      void 0 === s
                        ? void 0
                        : s.data) || void 0 === a
                    ? void 0
                    : a.success) && void 0 !== l
                ? l
                : 2
            );
          });
        }
        CreateDiscountEvent(t, n, e, s, a, l, d, c) {
          var r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              m = new FormData();
            m.append("sessionid", p.De.SESSIONID),
              m.append("name", e),
              m.append("start_time", t.toString()),
              m.append("end_time", n.toString()),
              m.append("strJSONDiscountInfo", b(e, s, a, l, d));
            let D = null;
            try {
              const u = yield o().post(i, m, {
                withCredentials: !0,
                cancelToken: null == c ? void 0 : c.token,
              });
              if (
                200 == (null == u ? void 0 : u.status) &&
                1 ==
                  (null === (r = u.data) || void 0 === r
                    ? void 0
                    : r.success) &&
                u.data.eventid
              ) {
                const i = {
                  id: u.data.eventid,
                  name: e,
                  start_date: t,
                  end_date: n,
                  appids: d,
                  publisherids: l,
                  description: a,
                  collision_type: "proximity",
                  event: v,
                  header: s,
                  tooltip: E,
                  type: h,
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
              D = { response: u };
            } catch (t) {
              D = t;
            }
            const _ = (0, u.l)(D);
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
        UpdateDiscountEventPublisherAndAppList(t, n, e, s) {
          var a;
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
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              d = new FormData();
            d.append("sessionid", p.De.SESSIONID),
              d.append("start_time", i.start_date.toString()),
              d.append("end_time", i.end_date.toString()),
              d.append(
                "strJSONDiscountInfo",
                (function (t, n, e, i) {
                  return JSON.stringify({
                    discount_event: {
                      eventid: t,
                      name: n.name,
                      header: n.header,
                      allowed_appids: i.join(","),
                      allowed_publisherids: e.join(","),
                      description: n.description,
                      collision_type: n.collision_type,
                      event: n.event,
                      tooltip: n.tooltip,
                      type: n.type,
                      prevent_weeklong: n.prevent_weeklong,
                    },
                  });
                })(t, i, n, e),
              );
            let c = null;
            try {
              const t = yield o().post(l, d, {
                withCredentials: !0,
                cancelToken: null == s ? void 0 : s.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (a = t.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                t.data.eventid
              ) {
                const t = Object.assign(Object.assign({}, i), {
                  appids: e,
                  publisherids: n,
                });
                return (
                  this.m_mapDiscountEvents.set(t.id, t),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetAllDiscountEvents(),
                  ),
                  t
                );
              }
              c = { response: t };
            } catch (t) {
              c = t;
            }
            const r = (0, u.l)(c);
            return (
              console.error(
                "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
                r.strErrorMsg,
                r,
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
          var n, e;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            if (!t || 0 == t.length || "0" == t) return null;
            try {
              const s =
                  p.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventbyid",
                a = { sessionid: p.De.SESSIONID, discountid: t },
                l = yield o().get(s, { params: a, withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (n = null == l ? void 0 : l.data) || void 0 === n
                    ? void 0
                    : n.success) &&
                (null === (e = null == l ? void 0 : l.data) || void 0 === e
                  ? void 0
                  : e.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(t, l.data.discount_event),
                  this.GetDiscountEventCallback(t).Dispatch(
                    l.data.discount_event,
                  ),
                  l.data.discount_event
                );
              i = (0, u.l)(l);
            } catch (t) {
              i = (0, u.l)(t);
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
          var n, e;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            if (!t || 0 == t.length) return null;
            try {
              const s =
                  p.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventapplist",
                a = { sessionid: p.De.SESSIONID, discountid: t },
                l = yield o().get(s, { params: a, withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (n = null == l ? void 0 : l.data) || void 0 === n
                    ? void 0
                    : n.success) &&
                (null === (e = null == l ? void 0 : l.data) || void 0 === e
                  ? void 0
                  : e.discount_event)
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
              i = (0, u.l)(l);
            } catch (t) {
              i = (0, u.l)(t);
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
            m.s_Singleton || ((m.s_Singleton = new m()), m.s_Singleton.Init()),
            m.s_Singleton
          );
        }
        constructor() {
          (this.m_mapDiscountEvents = new Map()),
            (this.m_discountEventsListCallback = new c.pB()),
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
            for (const n of t) this.m_mapDiscountEvents.set(n.id, n);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == p.De.WEB_UNIVERSE &&
              t &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(t) {
          const n = t;
          return !(!n || !Array.isArray(n));
        }
      }
      function D() {
        return m.Get().GetFutureDiscountEvents();
      }
      function _() {
        return m.Get().GetDiscountEventListCallback();
      }
      function g(t) {
        const { rgDiscountEvents: n, eResult: e } = L(0, t);
        let i = [];
        return (
          null == n ||
            n.forEach((t) => {
              "unique" == t.collision_type && (i = i.concat(t));
            }),
          { rgMajorSaleDiscountEvents: i, eResult: e }
        );
      }
      function L(t, n) {
        const e = m.Get().BLoadedViaInitOrFullLoad(),
          [i, s] = a.useState(e ? m.Get().GetAllDiscountEvents() : null),
          [o, l] = a.useState(null),
          u =
            t ||
            Number.parseInt((0, p.kQ)("publisherid", "application_config"));
        (0, r.Qg)(m.Get().GetDiscountEventListCallback(), s),
          a.useEffect(() => {
            m.Get().BLoadedViaInitOrFullLoad() ||
              m.Get().LoadAllDiscountEvents(u).then(l);
          }, [i, u]);
        const d = null != o ? o : (null == i ? void 0 : i.length) ? 1 : null;
        return a.useMemo(
          () => ({
            rgDiscountEvents: n ? i : m.Get().GetFutureDiscountEvents(),
            eResult: d,
          }),
          [i, d, n],
        );
      }
      function f(t) {
        return m.Get().GetDiscountEvent(t);
      }
      function A(t) {
        const { data: n } = S(t);
        return n;
      }
      function S(t) {
        const [n, e] = (0, a.useState)(m.Get().GetDiscountEvent(t)),
          [s, o] = a.useState(!!t);
        return (
          a.useEffect(() => {
            if ((!n && t) || ((null == n ? void 0 : n.id) != t && t)) {
              (() =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  try {
                    const n = yield m.Get().LoadSingleDiscountEvent(t);
                    n && e(n);
                  } finally {
                    o(!1);
                  }
                }))();
            } else o(!1);
          }, [t, n]),
          (0, r.Qg)(m.Get().GetDiscountEventCallback(t), e),
          { data: n, isLoading: s }
        );
      }
      function G(t) {
        const [n, e] = (0, a.useState)(m.Get().GetDiscountEvent(t)),
          [i, s] = (0, a.useState)(m.Get().GetAppList(t));
        return (
          (0, a.useEffect)(() => {
            ((!i && t) || ((null == n ? void 0 : n.id) != t && t)) &&
              m
                .Get()
                .LoadSingleDiscountEventsAppList(t)
                .then((t) => {
                  t && (e(t.oDiscountEvent), s(t.rgAppList));
                });
          }, [null == n ? void 0 : n.id, i, t]),
          (0, r.Qg)(m.Get().GetDiscountEventCallback(t), e),
          (0, r.Qg)(m.Get().GetAppListCallback(t), s),
          i ? { oDiscountEvent: n, rgAppList: i } : null
        );
      }
      function b(t, n, e, i, s) {
        return JSON.stringify({
          discount_event: {
            name: t,
            publisherids: i.join(","),
            appids: s.join(","),
            description: e,
            event: v,
            collision_type: "proximity",
            header: n,
            tooltip: E,
            type: h,
          },
        });
      }
      function I() {
        return { fnCreateDiscountEvent: m.Get().CreateDiscountEvent };
      }
      function C() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            m.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, i.gn)([d.a], m.prototype, "GetDiscountEvent", null),
        (0, i.gn)([d.a], m.prototype, "GetAppList", null),
        (0, i.gn)([d.a], m.prototype, "CreateDiscountEvent", null),
        (0, i.gn)(
          [d.a],
          m.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
  },
]);

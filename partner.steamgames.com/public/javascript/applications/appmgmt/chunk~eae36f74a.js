/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [2715],
  {
    81033: (t, n, e) => {
      e.d(n, {
        Q: () => S,
        fH: () => g,
        U8: () => _,
        o: () => D,
        vc: () => f,
        K$: () => G,
        n$: () => A,
        BS: () => L,
        Lr: () => I,
        z8: () => b,
      });
      var i = e(85556),
        s = e(80751),
        o = e.n(s),
        a = e(47427),
        l = e(64936),
        u = e(16649),
        d = e(16997),
        r = e(45492),
        c = e(20417),
        p = e(37563);
      const v = "1",
        h = "SaleEvent_DurationDiscount_Tooltip",
        m = "discount";
      class E {
        GetFutureDiscountEvents() {
          const t = (0, l.kl)();
          return Array.from(E.Get().m_mapDiscountEvents.values()).filter(
            (n) => n.end_date > t,
          );
        }
        GetAllDiscountEvents() {
          return Array.from(E.Get().m_mapDiscountEvents.values());
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
              this.m_mapDiscountEventCallback.set(t, new r.pB()),
            this.m_mapDiscountEventCallback.get(t)
          );
        }
        GetAppListCallback(t) {
          return (
            this.m_mapAppListCallback.has(t) ||
              this.m_mapAppListCallback.set(t, new r.pB()),
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
            let r = null;
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
              r = { response: t };
            } catch (t) {
              r = t;
            }
            const c = (0, u.l)(r);
            return (
              console.error("Could not load Discount Events", c.strErrorMsg, c),
              null !==
                (l =
                  null ===
                    (a =
                      null === (s = null == r ? void 0 : r.response) ||
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
        CreateDiscountEvent(t, n, e, s, a, l, d, r) {
          var c;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              E = new FormData();
            E.append("sessionid", p.De.SESSIONID),
              E.append("name", e),
              E.append("start_time", t.toString()),
              E.append("end_time", n.toString()),
              E.append("strJSONDiscountInfo", S(e, s, a, l, d));
            let D = null;
            try {
              const u = yield o().post(i, E, {
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
              if (
                200 == (null == u ? void 0 : u.status) &&
                1 ==
                  (null === (c = u.data) || void 0 === c
                    ? void 0
                    : c.success) &&
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
                  tooltip: h,
                  type: m,
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
            let r = null;
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
              r = { response: t };
            } catch (t) {
              r = t;
            }
            const c = (0, u.l)(r);
            return (
              console.error(
                "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
                c.strErrorMsg,
                c,
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
            E.s_Singleton || ((E.s_Singleton = new E()), E.s_Singleton.Init()),
            E.s_Singleton
          );
        }
        constructor() {
          (this.m_mapDiscountEvents = new Map()),
            (this.m_discountEventsListCallback = new r.pB()),
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
        return E.Get().GetFutureDiscountEvents();
      }
      function _() {
        return E.Get().GetDiscountEventListCallback();
      }
      function L(t, n) {
        const e = E.Get().BLoadedViaInitOrFullLoad(),
          [i, s] = a.useState(e ? E.Get().GetAllDiscountEvents() : null),
          [o, l] = a.useState(null),
          u =
            t ||
            Number.parseInt((0, p.kQ)("publisherid", "application_config"));
        (0, c.Qg)(E.Get().GetDiscountEventListCallback(), s),
          a.useEffect(() => {
            E.Get().BLoadedViaInitOrFullLoad() ||
              E.Get().LoadAllDiscountEvents(u).then(l);
          }, [i, u]);
        const d = null != o ? o : (null == i ? void 0 : i.length) ? 1 : null;
        return a.useMemo(
          () => ({
            rgDiscountEvents: n ? i : E.Get().GetFutureDiscountEvents(),
            eResult: d,
          }),
          [i, d, n],
        );
      }
      function g(t) {
        return E.Get().GetDiscountEvent(t);
      }
      function f(t) {
        const { data: n } = A(t);
        return n;
      }
      function A(t) {
        const [n, e] = (0, a.useState)(E.Get().GetDiscountEvent(t)),
          [s, o] = a.useState(!0);
        return (
          a.useEffect(() => {
            if ((!n && t) || ((null == n ? void 0 : n.id) != t && t)) {
              (() =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  try {
                    const n = yield E.Get().LoadSingleDiscountEvent(t);
                    n && e(n);
                  } finally {
                    o(!1);
                  }
                }))();
            } else o(!1);
          }, [t, n]),
          (0, c.Qg)(E.Get().GetDiscountEventCallback(t), e),
          { data: n, isLoading: s }
        );
      }
      function G(t) {
        const [n, e] = (0, a.useState)(E.Get().GetDiscountEvent(t)),
          [i, s] = (0, a.useState)(E.Get().GetAppList(t));
        return (
          (0, a.useEffect)(() => {
            ((!i && t) || ((null == n ? void 0 : n.id) != t && t)) &&
              E.Get()
                .LoadSingleDiscountEventsAppList(t)
                .then((t) => {
                  t && (e(t.oDiscountEvent), s(t.rgAppList));
                });
          }, [null == n ? void 0 : n.id, i, t]),
          (0, c.Qg)(E.Get().GetDiscountEventCallback(t), e),
          (0, c.Qg)(E.Get().GetAppListCallback(t), s),
          i ? { oDiscountEvent: n, rgAppList: i } : null
        );
      }
      function S(t, n, e, i, s) {
        return JSON.stringify({
          discount_event: {
            name: t,
            publisherids: i.join(","),
            appids: s.join(","),
            description: e,
            event: v,
            collision_type: "proximity",
            header: n,
            tooltip: h,
            type: m,
          },
        });
      }
      function b() {
        return { fnCreateDiscountEvent: E.Get().CreateDiscountEvent };
      }
      function I() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            E.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, i.gn)([d.a], E.prototype, "GetDiscountEvent", null),
        (0, i.gn)([d.a], E.prototype, "GetAppList", null),
        (0, i.gn)([d.a], E.prototype, "CreateDiscountEvent", null),
        (0, i.gn)(
          [d.a],
          E.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
  },
]);

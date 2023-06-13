/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7334],
  {
    65131: (t) => {
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
    17661: (t) => {
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
    91849: (t) => {
      t.exports = {
        UnknownValue: "gridcomponents_UnknownValue_3ovtf",
        PackageName: "gridcomponents_PackageName_t8fSj",
        PackageType: "gridcomponents_PackageType_3LZvj",
        LastRow: "gridcomponents_LastRow_18dUc",
        AppCount: "gridcomponents_AppCount_2J3kN",
        PackageID: "gridcomponents_PackageID_1E3TV",
      };
    },
    24448: (t, e, n) => {
      "use strict";
      n.d(e, { Gr: () => v, Jq: () => h, si: () => D, y$: () => m });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(50265),
        r = n(89526),
        c = n(4556),
        l = n(47165),
        u = n(23801),
        d = n(23217),
        p = n(32765);
      class g {
        constructor() {
          (this.m_mapProfiles = new Map()),
            (this.m_mapProfilesLoading = new Map());
        }
        LoadProfiles(t, e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0,
            u.X)(t.length <= 500, "Check LoadProfiles, requesting too many steam IDs");
            let n = t.filter(
              (t) =>
                !this.m_mapProfiles.has(t) && !this.m_mapProfilesLoading.has(t)
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
                  (t.avatar_url_medium = (0, c.U)(t.avatar_url, "medium")),
                  (t.avatar_url_full = (0, c.U)(t.avatar_url, "full")),
                  (t.avatar_url = (0, c.U)(t.avatar_url)),
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
            l.K.InitFromAccountID(t).ConvertTo64BitString()
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
            l.K.InitFromAccountID(t).ConvertTo64BitString()
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
      function v(t) {
        const e = r.useMemo(
            () => (t ? ("string" == typeof t ? new l.K(t) : t) : null),
            [t]
          ),
          [n, i] = (0, r.useState)(!!e && !m.BHasProfileBySteamID(e));
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
                    n
                  );
                })
                .finally(() => {
                  t.token.reason || i(!1);
                }),
            () => t.cancel("unmounting useUserProfile")
          );
        }, [t]);
        return [n, !!e && m.GetProfileBySteamID(e)];
      }
      function h(t) {
        return v(r.useMemo(() => l.K.InitFromAccountID(t), [t]));
      }
      function D(t) {
        return (function (t) {
          const e = r.useMemo(
              () =>
                t
                  ? t.map((t) => ("string" == typeof t ? new l.K(t) : t))
                  : null,
              [t]
            ),
            [n, i] = (0, r.useState)(!!e && !m.BHasAllProfilesBySteamID(e));
          return (
            (0, r.useEffect)(() => {
              const t = s().CancelToken.source();
              return (
                e &&
                  !m.BHasAllProfilesBySteamID(e) &&
                  m
                    .LoadProfiles(e.map((t) => t.ConvertTo64BitString()))
                    .catch((t) => {
                      const n = (0, d.l)(t);
                      console.error(
                        "useUserProfile failed to load profile for list: " +
                          n.strErrorMsg,
                        (0, o.ZN)(e),
                        n
                      );
                    })
                    .finally(() => {
                      t.token.reason || i(!1);
                    }),
                () => t.cancel("unmounting useAllUserProfile")
              );
            }, [e]),
            [n, !!e && e.map((t) => m.GetProfileBySteamID(t))]
          );
        })(r.useMemo(() => t.map((t) => l.K.InitFromAccountID(t)), [t]));
      }
      window.g_ProfileStore = m;
    },
    70903: (t, e, n) => {
      "use strict";
      n.d(e, { N: () => d, a: () => u });
      var i = n(33940),
        a = n(89526),
        s = n(19094),
        o = n(57858),
        r = n(58218),
        c = n(23801),
        l = n(32765);
      function u(t = !1) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (t && o.Z.BIsInitialized()) return;
          const e = (0, l.kQ)(
            "partnerbrowse_webapi_token",
            "application_config"
          );
          (0, c.X)(Boolean(e), "require partnerbrowse_webapi_token");
          const n = new s.J(l.De.WEBAPI_BASE_URL, e);
          return (
            ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: Initializing CStoreItemCache with access token",
                e
              ),
            o.Z.Initialize(n, l.L7.is_partner_member)
          );
        });
      }
      function d() {
        const t = (0, r.T)("usePartnerStoreBrowseAPI"),
          [e, n] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            u().then(() => {
              var e;
              (null === (e = null == t ? void 0 : t.token) || void 0 === e
                ? void 0
                : e.reason) || n(!0);
            });
          }, []),
          e
        );
      }
    },
    65395: (t, e, n) => {
      "use strict";
      n.d(e, {
        J7: () => _,
        K$: () => E,
        Lr: () => I,
        fH: () => f,
        i4: () => D,
        o: () => h,
        vc: () => P,
        z8: () => k,
      });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(89526),
        r = n(85651),
        c = n(23217),
        l = n(26464),
        u = n(85246),
        d = n(4306),
        p = n(32765);
      const g = "SaleEvent_DurationDiscount_Tooltip",
        m = "discount";
      class v {
        GetFutureDiscountEvents() {
          const t = (0, r.kl)();
          return Array.from(v.Get().m_mapDiscountEvents.values()).filter(
            (e) => e.end_date > t
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
                    this.GetFutureDiscountEvents()
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
              v.append("allowed_appids", l.join(",")),
              v.append("allowed_publisherids", r.join(",")),
              v.append("description", o),
              v.append("collision_type", "proximity"),
              v.append("event", "1"),
              v.append("header", a),
              v.append("tooltip", g),
              v.append("type", m),
              v.append("prevent_weeklong", "");
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
                  event: "1",
                  header: a,
                  tooltip: g,
                  type: m,
                  prevent_weeklong: "",
                };
                return (
                  this.m_mapDiscountEvents.set(i.id, i),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents()
                  ),
                  i
                );
              }
              h = { response: c };
            } catch (t) {
              h = t;
            }
            const D = (0, c.l)(h);
            return (
              console.error(
                "CDiscountEventStore.CreateDiscountEvent: failed",
                D.strErrorMsg,
                D
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
                  t
                ),
                null
              );
            const r =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              l = new FormData();
            l.append("sessionid", p.De.SESSIONID),
              l.append("eventid", t),
              l.append("name", i.name),
              l.append("start_time", i.start_date.toString()),
              l.append("end_time", i.end_date.toString()),
              l.append("allowed_appids", n.join(",")),
              l.append("allowed_publisherids", e.join(",")),
              l.append("description", i.description),
              l.append("collision_type", i.collision_type),
              l.append("event", i.event),
              l.append("header", i.header),
              l.append("tooltip", i.tooltip),
              l.append("type", i.type),
              l.append("prevent_weeklong", i.prevent_weeklong);
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
                    this.GetFutureDiscountEvents()
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
                d
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
                    this.InternalLoadSingleDiscountEvent(t)
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
                    r.data.discount_event
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
                i
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
                    this.InternalLoadSingleDiscountEventsAppList(t)
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
                    r.data.discount_event
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
                i
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
                t
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
      function D() {
        return v.Get().GetFutureDiscountEventListCallback();
      }
      function _(t) {
        const e = v.Get().BLoadedViaInitOrFullLoad(),
          [n, i] = o.useState(e ? v.Get().GetFutureDiscountEvents() : null),
          [a, s] = o.useState(null),
          r =
            t ||
            Number.parseInt((0, p.kQ)("publisherid", "application_config"));
        (0, d.Qg)(v.Get().GetFutureDiscountEventListCallback(), i),
          o.useEffect(() => {
            v.Get().BLoadedViaInitOrFullLoad() ||
              v.Get().LoadAllDiscountEvents(r).then(s);
          }, [n, r]);
        const c = null != a ? a : (null == n ? void 0 : n.length) ? 1 : null;
        return o.useMemo(() => ({ rgDiscountEvents: n, eResult: c }), [n, c]);
      }
      function f(t) {
        return v.Get().GetDiscountEvent(t);
      }
      function P(t) {
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
      function E(t) {
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
      function k() {
        return { fnCreateDiscountEvent: v.Get().CreateDiscountEvent };
      }
      function I() {
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
          null
        );
    },
    16586: (t, e, n) => {
      "use strict";
      n.d(e, {
        A0: () => D,
        Cy: () => k,
        PV: () => _,
        QQ: () => f,
        Rz: () => S,
        V7: () => E,
        ZW: () => P,
        _l: () => b,
        dS: () => C,
        du: () => y,
        nw: () => I,
        py: () => G,
        qh: () => h,
      });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(50265),
        r = n(89526),
        c = n(5615),
        l = n(11837),
        u = n(23801),
        d = n(23217),
        p = n(26464),
        g = n(85246),
        m = n(4306),
        v = n(32765);
      class h {
        constructor() {
          (this.m_mapRegistrations = new Map()),
            (this.m_mapRequestedAppIDs = new Map()),
            (this.m_mapOptInNameCallback = new Map()),
            (this.m_mapSingleAppRegistrationChange = new Map());
        }
        BHasOptInRegistration(t, e) {
          var n;
          return Boolean(
            null === (n = this.m_mapRegistrations.get(t)) || void 0 === n
              ? void 0
              : n.has(e)
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
              i.jsondata.rtime_granting_trailer
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
              i.jsondata.rtime_granting_demo
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
              i.jsondata.rtime_granting_profile
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
          n || ((n = new Map()), this.m_mapRegistrations.set(t, n));
          let i = n.get(e);
          return (
            i
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  i
                )
              : (i = this.CreateRegistrationNotSaved(t, e)),
            i
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(t, e) {
          let n = this.m_mapRegistrations.get(t);
          n || ((n = new Map()), this.m_mapRegistrations.set(t, n));
          let i = n.get(e);
          return (
            i
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  i
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
                })
          );
          return (
            n.forEach((e) => {
              this.m_mapRegistrations.has(e.appid) ||
                this.m_mapRegistrations.set(e.appid, new Map()),
                this.m_mapRegistrations.get(e.appid).set(t, e);
            }),
            n
          );
        }
        FetchOptInRegistrationForOptIn(t, e) {
          var n, a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                v.De.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              o = { sessionid: v.De.SESSIONID, opt_in_name: t, opt_in_only: e },
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
                v.De.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              a = { sessionid: v.De.SESSIONID, opt_in_name: t },
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
              const i = v.De.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                a = { sessionid: v.De.SESSIONID, appid: e, opt_in_name: t },
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
                      r.data.optin_registration.jsondata
                    )),
                  this.m_mapRegistrations.has(e))
                )
                  this.m_mapRegistrations
                    .get(e)
                    .set(t, r.data.optin_registration);
                else {
                  const n = new Map();
                  n.set(t, r.data.optin_registration),
                    this.m_mapRegistrations.set(e, n);
                }
                return !0;
              }
              {
                const t = (0, d.l)(r);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    t.strErrorMsg,
                  t
                );
              }
            } catch (t) {
              const e = (0, d.l)(t);
              console.error(
                "LoadOptInRegistration : failed with " + e.strErrorMsg,
                e
              );
            }
            return !1;
          });
        }
        LoadMultiOptInRegistration(t, e, n) {
          var a, o;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (0 == e.length || 0 == t.length) return !1;
            let i = null;
            const r = new Promise((t, e) => {
              i = t;
            });
            (t = l.kp(t).sort()),
              (e = l.kp(e).sort()),
              t.forEach((t) => {
                this.m_mapRequestedAppIDs.has(t) ||
                  this.m_mapRequestedAppIDs.set(t, new Map());
              });
            let c = new Array();
            if (
              (e.forEach((e) => {
                t.some(
                  (t) =>
                    !this.BHasOptInRegistration(e, t) &&
                    !this.GetOptInRegistrationPromise(e, t)
                ) &&
                  (c.push(e),
                  t.forEach((t) => this.m_mapRequestedAppIDs.get(t).set(e, r)));
              }),
              0 == c.length)
            )
              return !0;
            const u =
              v.De.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
            let p = null;
            try {
              const e = [];
              for (; c.length > 0; ) {
                const i = c.splice(0, 50),
                  a = {
                    rgOptInNames: t.join(","),
                    rgAppIDs: i.join(","),
                    origin: self.origin,
                  };
                e.push(
                  s().get(u, {
                    params: a,
                    withCredentials: !0,
                    cancelToken: null == n ? void 0 : n.token,
                  })
                );
              }
              const i = yield Promise.all(e);
              for (const t of i) {
                if (
                  200 != (null == t ? void 0 : t.status) ||
                  1 !=
                    (null === (a = t.data) || void 0 === a
                      ? void 0
                      : a.success) ||
                  !(null === (o = t.data.optin_registrations) || void 0 === o
                    ? void 0
                    : o.length)
                ) {
                  p = { response: t };
                  break;
                }
                this.InternalAddRegistrations(t.data.optin_registrations);
              }
            } catch (t) {
              p = t;
            }
            if (null == p) i(!0);
            else {
              const n = (0, d.l)(p);
              console.error(
                "Could not load OptIn for Apps",
                e,
                t,
                n.strErrorMsg,
                n
              ),
                i(!1);
            }
            return r;
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
              a.append("sessionid", v.De.SESSIONID),
                Object.keys(e).forEach((t) => a.append(t, e[t]));
              const o =
                  v.De.PARTNER_BASE_URL +
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
                i
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
              o.append("sessionid", v.De.SESSIONID),
                o.append("appid", "" + t),
                o.append("opt_in_name", e.opt_in_name),
                o.append("jsondata", JSON.stringify(e)),
                n && o.append("bCreatePendingInvite", "true");
              const r =
                  v.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  t,
                c = yield s().post(r, o, { withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                1 ==
                  (null === (a = c.data) || void 0 === a ? void 0 : a.success)
              ) {
                const n = this.m_mapRegistrations.get(t).get(e.opt_in_name);
                n.jsondata = e;
                const i = Object.assign({}, n);
                return (
                  this.m_mapRegistrations.get(t).set(e.opt_in_name, i),
                  this.GetSingleAppRegistrationChange(
                    t,
                    e.opt_in_name
                  ).Dispatch(i),
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
                i
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
              r.append("sessionid", v.De.SESSIONID),
                r.append("appid", "" + t),
                r.append("opt_in_name", o),
                r.append("approved", "" + n);
              const c =
                  v.De.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + t,
                l = yield s().post(c, r, { withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (a = l.data) || void 0 === a ? void 0 : a.success)
              ) {
                const e = Object.assign(
                  {},
                  this.m_mapRegistrations.get(t).get(o)
                );
                return (
                  (e.accountid_appeal = v.L7.accountid),
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
                i
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
        InternalAddRegistrations(t) {
          const e = new Set();
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
              n.set(t.opt_in_name, t), e.add(t.opt_in_name);
            }
          }),
            Array.from(e).forEach((t) => {
              this.GetOptInNameRegistrationsCallbackList(t).Dispatch(
                this.GetAllOptInRegistrations(t)
              );
            });
        }
        Init() {
          let t = JSON.parse(
            JSON.stringify(
              (0, v.kQ)("optin_registrations", "application_config")
            )
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
      function D(t, e) {
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
      function _() {
        return r.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: h.Get().LoadMultiOptInRegistration,
          }),
          []
        );
      }
      function f(t, e) {
        const [n, i] = r.useState(null);
        return (
          (0, r.useEffect)(() => {
            const n = e.filter(Boolean);
            n.length > 0
              ? h
                  .Get()
                  .LoadMultiOptInRegistration(
                    n.map(() => t),
                    n
                  )
                  .then(() => {
                    const e = new Map();
                    n.forEach((n) => {
                      const i = h.Get().GetRegistration(n, t);
                      i && e.set(n, i);
                    }),
                      i(e);
                  })
              : i(new Map());
          }, [t, e]),
          n
        );
      }
      function P(t) {
        const [e, n] = r.useState(h.Get().GetAllOptInRegistrations(t));
        return (
          (0, m.Qg)(h.Get().GetOptInNameRegistrationsCallbackList(t), n), e
        );
      }
      function E(t) {
        const e = P(t),
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
      function k(t, e) {
        const n = (0, c.useQuery)(
          ["useAllOptInRegistrationByName", t, Boolean(e)],
          () => h.Get().FetchOptInRegistrationForOptIn(t, e),
          { staleTime: 36e5 }
        );
        return n.isLoading ? null : n.data;
      }
      function I(t) {
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
      function G(t, e) {
        const n = k(t, !1),
          [i, a] = (0, r.useState)(
            null == n ? void 0 : n.find((t) => t.appid == e)
          );
        return (0, m.Qg)(h.Get().GetSingleAppRegistrationChange(e, t), a), i;
      }
      function S(t, e) {
        const [n, i] = (0, r.useState)(
          h.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(t, e)
        );
        return (0, m.Qg)(h.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function b(t, e) {
        const [n, i] = (0, r.useState)(
          h.Get().GetExistingOptInRegistartion(t, e)
        );
        return (0, m.Qg)(h.Get().GetSingleAppRegistrationChange(t, e), i), n;
      }
      function C() {
        return {
          fnUpdateOptInRegistrationJson: h.Get().UpdateOptInRegistrationJson,
        };
      }
      function y() {
        return { fnUpdateAppealState: h.Get().UpdateAppealState };
      }
      (0, i.gn)(
        [p.a],
        h.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null
      ),
        (0, i.gn)(
          [p.a],
          h.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null
        ),
        (0, i.gn)([p.a], h.prototype, "LoadMultiOptInRegistration", null),
        (0, i.gn)([p.a], h.prototype, "UpdateOptInRegistrationJson", null),
        (0, i.gn)([p.a], h.prototype, "UpdateAppealState", null),
        (0, i.gn)([o.aD], h.prototype, "Init", null);
    },
    36998: (t, e, n) => {
      "use strict";
      n.d(e, {
        EV: () => L,
        Fi: () => G,
        ID: () => I,
        LT: () => D,
        Qy: () => y,
        Su: () => P,
        XM: () => f,
        Xj: () => R,
        _J: () => h,
        b2: () => S,
        co: () => _,
        hd: () => C,
        k1: () => b,
        kk: () => v,
        v6: () => E,
        yI: () => k,
      });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(89526),
        r = n(85651),
        c = n(23217),
        l = n(85246),
        u = n(4306),
        d = n(81349),
        p = n(32765);
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
              t
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
                e
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
              : n.length) || (e.discountEventID = m(e)),
              this.m_mapPackageDiscountsById.set(e.nDiscountID, e),
              this.GetCallbackListForDiscount(e.nDiscountID).Dispatch(e),
              this.m_mapPackageDiscountsByPackageId.has(e.packageID) ||
                this.m_mapPackageDiscountsByPackageId.set(
                  e.packageID,
                  new Map()
                ),
              this.m_mapPackageDiscountsByPackageId
                .get(e.packageID)
                .set(e.nDiscountID, e),
              i.add(e.packageID),
              this.m_mapPackageDiscountsByDiscountEventId.has(
                e.discountEventID
              ) ||
                this.m_mapPackageDiscountsByDiscountEventId.set(
                  e.discountEventID,
                  new Map()
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
              this.GetAllDiscountsForPackage(t)
            )
          ),
            a.forEach((t) =>
              this.GetCallbackListForDiscountEvent(t).Dispatch(
                this.GetAllDiscountsForDiscountEvent(t)
              )
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages()
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
              this.GetAllDiscountsForPackage(e)
            ),
            this.GetCallbackListForDiscountEvent(n).Dispatch(
              this.GetAllDiscountsForDiscountEvent(n)
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages()
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
            const m = (0, p.kQ)("publisherid", "application_config"),
              v =
                p.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                m;
            let h = null,
              D = null;
            try {
              const t = [],
                i = new Array();
              for (; g.length > 0; ) {
                const a = g.splice(0, 50);
                i.push(a);
                const o = { packageids: a.join(","), origin: self.origin };
                t.push(
                  s().get(v, {
                    params: o,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                    timeout: n,
                  })
                );
              }
              const o = yield Promise.all(t),
                r = [];
              for (const t of o) {
                if (
                  ((D = i.unshift()),
                  200 != (null == t ? void 0 : t.status) ||
                    1 !=
                      (null === (a = t.data) || void 0 === a
                        ? void 0
                        : a.success) ||
                    !t.data.discounts)
                ) {
                  h = { response: t };
                  break;
                }
                t.data.discounts.forEach((t) => r.push(t));
              }
              null == h && this.InternalAddDiscounts(r, Array.from(d));
            } catch (t) {
              h = t;
            }
            if (null == h) i(1);
            else {
              const t = (0, c.l)(h);
              console.error(
                "Could not load Discounts for packages",
                D,
                t.strErrorMsg,
                t
              ),
                i(
                  null !==
                    (l =
                      null ===
                        (r =
                          null === (o = null == h ? void 0 : h.response) ||
                          void 0 === o
                            ? void 0
                            : o.data) || void 0 === r
                        ? void 0
                        : r.success) && void 0 !== l
                    ? l
                    : 2
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
                !v(t.discountEventID) &&
                l.append("type", t.discountEventID),
              l.append("percent", t.nDiscountPct.toString()),
              l.append(
                "start_date",
                new Date(1e3 * t.rtStartDate).toISOString()
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
                d
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
                g
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
                  : []
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
              : []
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
      function m(t) {
        return `custom-event-${t.rtStartDate}-${t.rtEndDate}-${(0, d.JD)(
          t.strDiscountName
        )}`;
      }
      function v(t) {
        return t.startsWith("custom-event-");
      }
      function h(t) {
        return g.Get().GetDiscountByID(t);
      }
      function D(t) {
        return g.Get().GetAllDiscountsForDiscountEvent(t);
      }
      function _(t) {
        return g.Get().GetAllDiscountsForPackage(t);
      }
      function f(t) {
        return g.Get().GetCallbackListForPackage(t);
      }
      function P() {
        return g.Get().GetAllDiscountsForAllPackages();
      }
      function E() {
        return g.Get().GetGlobalCallbackList();
      }
      function k() {
        return o.useCallback(
          (t, e, n) => g.Get().LoadPackageDiscounts(t, e, n),
          []
        );
      }
      function I() {
        const t = (t) => g.Get().SaveDiscountToServer(t),
          e = (t, e, n) => g.Get().DeleteDiscountOnServer(t, e, n);
        return o.useMemo(
          () => ({ fnSaveDiscount: t, fnDeleteDiscount: e }),
          []
        );
      }
      function G(t) {
        return new Map(
          Array.from(t.map((t) => [t, g.Get().GetDiscountByID(t)]))
        );
      }
      function S(t) {
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
      function b(t) {
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
                n.rtEndDate < e && (!a || a.rtEndDate < n.rtEndDate) && (a = n);
            }
            return { mostRecentDiscount: a, bLoading: !1 };
          }, [e, t, n])
        );
      }
      function C(t) {
        const [e, n] = o.useState(g.Get().GetAllDiscountsForDiscountEvent(t));
        return (0, u.Qg)(g.Get().GetCallbackListForDiscountEvent(t), n), e;
      }
      function y(t) {
        return g.Get().GetMaxDiscountPercentage(t);
      }
      function L(t) {
        return t.some(
          (t) => t.nDiscountPct > g.Get().GetMaxDiscountPercentage(t.packageID)
        );
      }
      function R(t) {
        return g.Get().GetMaxDiscountPercentageForGroup(t);
      }
    },
    19533: (t, e, n) => {
      "use strict";
      n.d(e, {
        $D: () => v,
        AM: () => m,
        Gd: () => g,
        MQ: () => l,
        NR: () => d,
        ew: () => r,
        vB: () => p,
        z: () => u,
      });
      var i = n(89526),
        a = n(85246),
        s = n(4306),
        o = n(32765);
      const r = "pn";
      class c {
        static Get() {
          return (
            c.s_Singleton || ((c.s_Singleton = new c()), c.s_Singleton.Init()),
            c.s_Singleton
          );
        }
        constructor() {
          (this.m_rgVisiblePackageIDs = []),
            (this.m_visiblePackageIDsCallbackList = new a.pB()),
            "dev" == o.De.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        Init() {
          let t = (0, o.kQ)("package_data", "application_config");
          t
            ? ((this.m_rgPackageIDs = t.map((t) => t.packageid)),
              (this.m_rgPackageData = t),
              (this.m_mapPackageData = new Map(t.map((t) => [t.packageid, t]))))
            : ((this.m_rgPackageIDs = (0, o.kQ)(
                "package_ids",
                "application_config"
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != o.De.WEB_UNIVERSE && "beta" != o.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs
              ),
            "dev" != o.De.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(t) {
          const e = t.getHeaderFilterValue("packageName"),
            n = new URL(window.location.href);
          e != decodeURIComponent(n.searchParams.get(r)) &&
            (e
              ? n.searchParams.set(r, encodeURIComponent(e))
              : n.searchParams.delete(r),
            window.history.replaceState({}, "", n.toString()));
        }
        UpdateVisiblePackageList(t) {
          const e = t.getGroups("visible").filter((t) => t.isVisible());
          (this.m_rgVisiblePackageIDs = []),
            e.forEach((t) =>
              t
                .getRows()
                .forEach((t) =>
                  this.m_rgVisiblePackageIDs.push(t.getData().packageID)
                )
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs
            ),
            this.UpdatePackageNameSearchState(t);
        }
      }
      function l() {
        return c.Get().m_rgPackageIDs;
      }
      function u() {
        return c.Get().m_rgPackageIDs;
      }
      function d() {
        return c.Get().m_rgPackageData;
      }
      function p(t) {
        let e = c.Get().m_mapPackageData.get(t);
        return e ? e.package_name : t.toString();
      }
      function g() {
        return i.useCallback((t) => c.Get().UpdateVisiblePackageList(t), []);
      }
      function m() {
        const [t, e] = i.useState(c.Get().m_rgVisiblePackageIDs);
        return (0, s.Qg)(c.Get().m_visiblePackageIDsCallbackList, e), t;
      }
      function v() {
        return i.useMemo(
          () => (0, o.kQ)("publisherid", "application_config"),
          []
        );
      }
    },
    66104: (t, e, n) => {
      "use strict";
      n.d(e, {
        $w: () => w,
        AN: () => Q,
        FR: () => E,
        HV: () => _,
        HX: () => T,
        OB: () => F,
        OG: () => j,
        Ol: () => S,
        PP: () => I,
        R2: () => O,
        Rs: () => U,
        Tj: () => k,
        We: () => K,
        X1: () => y,
        _w: () => D,
        bS: () => M,
        dU: () => b,
        df: () => V,
        j_: () => W,
        ju: () => R,
        np: () => q,
        on: () => B,
        ps: () => L,
        rX: () => C,
        sN: () => H,
        uT: () => x,
        xm: () => z,
        yh: () => N,
      });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(89526),
        r = n(50265),
        c = n(23217),
        l = n(85246),
        u = n(4306),
        d = n(81349),
        p = n(32765),
        g = n(19533),
        m = n(25125);
      class v {
        static Get() {
          return (
            v.s_Singleton || ((v.s_Singleton = new v()), v.s_Singleton.Init()),
            v.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackagePrice = new Map()),
            (this.m_setRecurringSubscriptions = new Set()),
            (this.m_mapPriceProposals = new Map()),
            (this.m_mapLocalPackagePriceOverrides = new Map()),
            (this.m_mapPriceGridCellCallbackList = new Map()),
            (this.m_allPriceOverridesCallbackList = new l.pB()),
            (this.m_mapOverridesPerPriceKey = new Map()),
            (this.m_mapCurrencyData = new Map()),
            (this.m_mapPriceKeyDescriptions = new Map()),
            (this.m_mapPriceGuidelines = new Map()),
            (this.m_rgPriceLevels = []),
            (this.m_mapMinPrices = new Map()),
            (this.m_mapMinDiscountedPrices = new Map()),
            (this.m_strDisplayPriceKey = "USD"),
            (this.m_displayPriceKeyCallbackList = new l.pB()),
            "dev" == p.De.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          var t, e, n, i, a, s, o, r, c, l;
          const u = new Set(),
            g = (0, p.kQ)("base_prices", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                g
              ),
            g)
          )
            if (this.BIsPricePayloadValid(g))
              for (let t in g) {
                const e = g[t],
                  n = parseInt(t),
                  i = new Map();
                this.m_mapPackagePrice.set(n, i);
                for (let t in e) u.add(t.toUpperCase()), i.set(t, e[t]);
              }
            else
              "dev" == p.De.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const m = (0, p.kQ)("recurring_subs", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                m
              ),
            m)
          )
            if (Array.isArray(m))
              for (const t of m) this.m_setRecurringSubscriptions.add(t);
            else
              "dev" == p.De.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const v = (0, p.kQ)("pending_proposals", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                v
              ),
            v)
          )
            if (this.BIsPendingPricePayloadValid(v))
              for (let t in v) {
                const e = v[t],
                  n = parseInt(t);
                this.m_mapPriceProposals.set(n, e);
              }
            else
              "dev" == p.De.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const h = (0, p.kQ)("pricing_guidelines", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                h
              ),
            h)
          )
            if (this.BIsGuidelinesPayloadValid(h)) {
              for (let t in h) {
                const e = h[t],
                  n = new Map(),
                  i = 100 * parseInt(t.substring(3));
                this.m_rgPriceLevels.push(i),
                  this.m_mapPriceGuidelines.set(i, n);
                for (let t in e)
                  u.add(t.toUpperCase()),
                    n.set(t.toUpperCase(), parseInt(e[t]));
              }
              this.m_rgPriceLevels.sort((t, e) => t - e);
            } else
              "dev" == p.De.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(u).sort((t, e) =>
            (0, d.eT)(P(t), P(e))
          );
          for (const u of this.m_rgKnownPriceKeys) {
            const d =
                null !==
                  (e =
                    null === (t = this.m_mapPriceGuidelines.get(100)) ||
                    void 0 === t
                      ? void 0
                      : t.get(u)) && void 0 !== e
                  ? e
                  : 0,
              p =
                null !==
                  (i =
                    null === (n = this.m_mapPriceGuidelines.get(200)) ||
                    void 0 === n
                      ? void 0
                      : n.get(u)) && void 0 !== i
                  ? i
                  : 0,
              g =
                null !==
                  (s =
                    null === (a = this.m_mapPriceGuidelines.get(300)) ||
                    void 0 === a
                      ? void 0
                      : a.get(u)) && void 0 !== s
                  ? s
                  : 0,
              m =
                null !==
                  (r =
                    null === (o = this.m_mapPriceGuidelines.get(400)) ||
                    void 0 === o
                      ? void 0
                      : o.get(u)) && void 0 !== r
                  ? r
                  : 0,
              v =
                null !==
                  (l =
                    null === (c = this.m_mapPriceGuidelines.get(500)) ||
                    void 0 === c
                      ? void 0
                      : c.get(u)) && void 0 !== l
                  ? l
                  : 0;
            this.m_mapMinPrices.set(u, Math.ceil(0.9 * d));
            const h = Math.floor(Math.min(d / 2, p / 4, g / 6, m / 8, v / 10));
            this.m_mapMinDiscountedPrices.set(u, h);
          }
          const D = (0, p.kQ)("currency_data", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                D
              ),
            D)
          )
            if (this.BIsCurrencyPayloadValid(D))
              for (let t in D) {
                const e = D[t];
                this.m_mapCurrencyData.set(t, e);
              }
            else
              "dev" == p.De.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const _ = (0, p.kQ)("currency_descriptions", "application_config");
          if (
            (("dev" != p.De.WEB_UNIVERSE && "beta" != p.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                D
              ),
            _)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(_))
              for (let t in _) {
                const e = _[t];
                this.m_mapPriceKeyDescriptions.set(t, e);
              }
            else
              "dev" == p.De.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(t) {
          const e = t;
          if (!e || "object" != typeof e) return !1;
          for (let t in e) {
            if (isNaN(parseInt(t))) return !1;
            const n = e[t];
            if (!n || "object" != typeof n) return !1;
            for (let t in n)
              if ("string" != typeof t || "number" != typeof n[t]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(t) {
          const e = t;
          if (!e || "object" != typeof e) return !1;
          for (let t in e) {
            if (isNaN(parseInt(t))) return !1;
            const n = e[t];
            if (
              !n ||
              "object" != typeof n ||
              n.packageID !== parseInt(t) ||
              "object" != typeof n.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(t) {
          const e = t;
          if (!e || "object" != typeof e) return !1;
          for (let t in e) {
            const n = e[t];
            if (!n || "object" != typeof n) return !1;
            for (let t in n)
              if ("string" != typeof t || isNaN(parseInt(n[t]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(t) {
          const e = t;
          if (!e || "object" != typeof e) return !1;
          for (let t in e) {
            const n = e[t];
            if (!n || "object" != typeof n || n.strCode != t) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(t) {
          const e = t;
          if (!e || "object" != typeof e) return !1;
          for (let t in e) {
            const n = e[t];
            if (
              !n ||
              "object" != typeof n ||
              void 0 === n.bRequired ||
              void 0 === n.strDescription
            )
              return !1;
          }
          return !0;
        }
        BPriceKeyRequired(t) {
          var e, n;
          return (
            null !==
              (n =
                null === (e = this.m_mapPriceKeyDescriptions.get(t)) ||
                void 0 === e
                  ? void 0
                  : e.bRequired) &&
            void 0 !== n &&
            n
          );
        }
        GetPublishedPrice(t, e) {
          var n;
          return null === (n = this.m_mapPackagePrice.get(t)) || void 0 === n
            ? void 0
            : n.get(e);
        }
        GetProposedPrice(t, e) {
          var n;
          return null === (n = this.m_mapPriceProposals.get(t)) || void 0 === n
            ? void 0
            : n.prices[e];
        }
        GetSavedPrice(t, e) {
          var n;
          return null !== (n = this.GetProposedPrice(t, e)) && void 0 !== n
            ? n
            : this.GetPublishedPrice(t, e);
        }
        GetPrice(t, e) {
          var n, i;
          return null !==
            (i =
              null === (n = this.m_mapLocalPackagePriceOverrides.get(t)) ||
              void 0 === n
                ? void 0
                : n.get(e)) && void 0 !== i
            ? i
            : this.GetSavedPrice(t, e);
        }
        GetPriceGridCellCallbackList(t, e) {
          if (!t || !e) return null;
          this.m_mapPriceGridCellCallbackList.has(t) ||
            this.m_mapPriceGridCellCallbackList.set(t, new Map());
          const n = this.m_mapPriceGridCellCallbackList.get(t);
          return n.has(e) || n.set(e, new l.pB()), n.get(e);
        }
        OverridePrice(t, e, n) {
          n != this.GetPrice(t, e) &&
            (this.m_mapLocalPackagePriceOverrides.has(t) ||
              this.m_mapLocalPackagePriceOverrides.set(t, new Map()),
            n == this.GetSavedPrice(t, e)
              ? this.m_mapLocalPackagePriceOverrides.get(t).delete(e)
              : this.m_mapLocalPackagePriceOverrides.get(t).set(e, n),
            this.GetPriceGridCellCallbackList(t, e).Dispatch(n),
            this.DispatchPriceOverridesCallbacks());
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides()
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(t) {
          var e;
          return (
            (null === (e = this.m_mapLocalPackagePriceOverrides.get(t)) ||
            void 0 === e
              ? void 0
              : e.size) > 0
          );
        }
        GetAllLocalPriceOverrides() {
          const t = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((e, n) =>
              e.forEach((e, i) => {
                const a = this.GetSavedPrice(n, i);
                t.push({
                  packageID: n,
                  strPriceKey: i,
                  nPriceInCents: e,
                  nOldPriceInCents: a,
                });
              })
            ),
            t.sort(h),
            t
          );
        }
        BHasLocalPriceOverride(t, e) {
          let n = this.m_mapLocalPackagePriceOverrides.get(t);
          return !!n && n.has(e);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((t, e) => {
              t.forEach((t, e) => {
                let n = this.m_mapOverridesPerPriceKey.get(e);
                n || (n = 0), n++, this.m_mapOverridesPerPriceKey.set(e, n);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const t = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          for (const e of t) {
            const { packageID: t, strPriceKey: n } = e;
            this.GetPriceGridCellCallbackList(t, n).Dispatch(
              this.GetPrice(t, n)
            );
          }
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(t) {
          let e = !1;
          this.m_mapLocalPackagePriceOverrides.forEach((n, i) => {
            this.m_mapPriceKeyDescriptions.has(t) &&
              ((e = !0),
              this.m_mapLocalPackagePriceOverrides.get(i).delete(t),
              this.GetPriceGridCellCallbackList(i, t).Dispatch(
                this.GetPrice(i, t)
              ));
          }),
            e && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(t) {
          var e;
          null === (e = this.m_mapLocalPackagePriceOverrides.get(t)) ||
            void 0 === e ||
            e.forEach((e, n) => {
              this.GetPriceGridCellCallbackList(t, n).Dispatch(
                this.GetSavedPrice(t, n)
              );
            }),
            this.m_mapLocalPackagePriceOverrides.delete(t),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(t, e) {
          const n = {
            packageID: t,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: p.L7.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: e,
          };
          for (const e of this.m_rgKnownPriceKeys)
            n.prices[e] = this.GetPrice(t, e);
          return n;
        }
        SubmitProposalToServer(t, e, n) {
          var a, o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.BuildNewPricingProposal(t, e),
              l = JSON.stringify(i.prices),
              u = (0, p.kQ)("publisherid", "application_config"),
              d =
                p.De.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                u +
                "/" +
                t,
              g = new FormData();
            g.append("sessionid", p.De.SESSIONID),
              g.append("partner_will_publish", e ? "1" : "0"),
              g.append("prices", l);
            let m = null;
            try {
              const e = yield s().post(d, g, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                0 != e.data.eState
              ) {
                if (3 == e.data.eState) {
                  this.m_mapPriceProposals.delete(t);
                  for (const e of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.get(t).set(e, i.prices[e]);
                } else
                  (i.eState = e.data.eState),
                    (i.proposalKey = e.data.proposalKey),
                    this.m_mapPriceProposals.set(t, i);
                return this.DiscardLocalPriceOverridesForPackage(t), e.data;
              }
            } catch (t) {
              m = t;
            }
            const v = (0, c.l)(m);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                v.strErrorMsg,
                v
              ),
              null !==
                (r =
                  null === (o = null == m ? void 0 : m.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== r
                ? r
                : { success: 2 }
            );
          });
        }
        PublishApprovedProposal(t, e, n = 0) {
          var a, o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.m_mapPriceProposals.get(t);
            if (
              4 != (null == i ? void 0 : i.eState) ||
              !(null == i ? void 0 : i.proposalKey)
            )
              return { success: 8 };
            const l = (0, p.kQ)("publisherid", "application_config"),
              u =
                p.De.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                l +
                "/" +
                t,
              d = new FormData();
            d.append("sessionid", p.De.SESSIONID),
              d.append("proposal_key", i.proposalKey);
            let g = null;
            try {
              const o = yield s().post(u, d, {
                withCredentials: !0,
                cancelToken: null == e ? void 0 : e.token,
                timeout: n,
              });
              if (
                200 == (null == o ? void 0 : o.status) &&
                1 ==
                  (null === (a = o.data) || void 0 === a ? void 0 : a.success)
              ) {
                this.m_mapPriceProposals.delete(t);
                for (const e of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(t).set(e, i.prices[e]),
                    this.GetPriceGridCellCallbackList(t, e).Dispatch(
                      this.GetSavedPrice(t, e)
                    );
                return this.DispatchPriceOverridesCallbacks(), o.data;
              }
            } catch (t) {
              g = t;
            }
            const m = (0, c.l)(g);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                m.strErrorMsg,
                m
              ),
              null !==
                (r =
                  null === (o = null == g ? void 0 : g.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== r
                ? r
                : { success: 2 }
            );
          });
        }
        CancelProposal(t, e) {
          var n, a, o;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.m_mapPriceProposals.get(t);
            if (!(null == i ? void 0 : i.proposalKey)) return { success: 8 };
            const r = (0, p.kQ)("publisherid", "application_config"),
              l =
                p.De.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                r +
                "/" +
                t,
              u = new FormData();
            u.append("sessionid", p.De.SESSIONID),
              u.append("proposal_key", i.proposalKey);
            let d = null;
            try {
              const i = yield s().post(l, u, {
                withCredentials: !0,
                cancelToken: null == e ? void 0 : e.token,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                1 ==
                  (null === (n = i.data) || void 0 === n ? void 0 : n.success)
              ) {
                this.m_mapPriceProposals.delete(t);
                for (const e of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(t, e).Dispatch(
                    this.GetSavedPrice(t, e)
                  );
                return this.DispatchPriceOverridesCallbacks(), i.data;
              }
            } catch (t) {
              d = t;
            }
            const g = (0, c.l)(d);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                g.strErrorMsg,
                g
              ),
              null !==
                (o =
                  null === (a = null == d ? void 0 : d.response) || void 0 === a
                    ? void 0
                    : a.data) && void 0 !== o
                ? o
                : { success: 2 }
            );
          });
        }
        GetLocalOverrideCountForPriceKey(t) {
          var e;
          return null !== (e = this.m_mapOverridesPerPriceKey.get(t)) &&
            void 0 !== e
            ? e
            : 0;
        }
      }
      function h(t, e) {
        if (t.strPriceKey == e.strPriceKey) {
          const n = (0, g.vB)(t.packageID),
            i = (0, g.vB)(e.packageID);
          return (0, d.eT)(n, i);
        }
        return (0, d.eT)(P(t.strPriceKey), P(e.strPriceKey));
      }
      function D(t) {
        const e = t.split("_")[0];
        return v.Get().m_mapCurrencyData.get(e);
      }
      function _(t, e) {
        var n;
        if (void 0 === e) return ["", "", ""];
        const i = null !== (n = D(e)) && void 0 !== n ? n : D("USD");
        let a = "";
        if ("number" == typeof t) {
          let e = t.toString();
          e.length < 3 && (e = (1 == e.length ? "0" : "") + "0" + e);
          const n = e.length - 2;
          for (let t = 0; t < n; t++) {
            const s = e.charAt(t);
            (a += s),
              t < n - 1 &&
                (n - t - 1) % 3 == 0 &&
                "-" != s &&
                (a += i.strThousandsSeparator);
          }
          i.bWholeUnitsOnly ||
            ((a += i.strDecimalSymbol), (a += e.substr(e.length - 2)));
        }
        return i.bSymbolIsPrefix
          ? [i.strSymbol + i.strSymbolAndNumberSeparator, a, ""]
          : ["", a, i.strSymbolAndNumberSeparator + i.strSymbol];
      }
      (0, i.gn)([r.LO], v.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, i.gn)([r.aD], v.prototype, "UpdateOverridesPerPriceKey", null);
      const f = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function P(t) {
        return f.has(t) ? f.get(t) : t.indexOf("_") > 0 ? "ZZZ" + t : t;
      }
      function E(t, e) {
        return v.Get().GetPrice(t, e);
      }
      function k(t) {
        const e = v.Get().m_strDisplayPriceKey;
        return _(v.Get().GetPrice(t, e), e).join("");
      }
      function I(t) {
        const [e, n] = o.useState(v.Get().m_strDisplayPriceKey);
        return (
          (0, u.Qg)(v.Get().m_displayPriceKeyCallbackList, n),
          (function (t, e) {
            const [n, i] = o.useState(v.Get().GetPrice(t, e));
            return (
              (0, u.Qg)(v.Get().GetPriceGridCellCallbackList(t, e), i),
              o.useEffect(() => i(v.Get().GetPrice(t, e)), [t, e]),
              _(n, e).join("")
            );
          })(t, e)
        );
      }
      function G(t, e) {
        const n = v.Get().GetPrice(t, "USD");
        let i = null;
        for (let t of v.Get().m_rgPriceLevels)
          if (t > n) {
            i = t;
            break;
          }
        if ("USD" == e || !i)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = v.Get().m_mapPriceGuidelines.get(i).get(e);
        const s = v.Get().m_mapPriceGuidelines.get(i).get("USD");
        if (s != n) {
          const t = n / s;
          (i *= t), (a = Math.ceil(a * t));
        }
        return { nSuggestedPriceInCents: a, nGuidelinesLevel: i };
      }
      function S() {
        const t = (0, g.AM)();
        return o.useCallback(
          () =>
            (function (t) {
              for (const e of t)
                for (const t of v.Get().m_rgKnownPriceKeys) {
                  if ("USD" == t) continue;
                  const { nSuggestedPriceInCents: n, nGuidelinesLevel: i } = G(
                    e,
                    t
                  );
                  v.Get().OverridePrice(e, t, n);
                }
            })(t),
          [t]
        );
      }
      function b(t, e) {
        var n;
        const i = (0, u.NW)();
        (0, u.Qg)(v.Get().GetPriceGridCellCallbackList(t, e), i);
        const a = v.Get().GetPrice(t, e);
        (0, u.Qg)(v.Get().GetPriceGridCellCallbackList(t, "USD"), i);
        const { nSuggestedPriceInCents: s, nGuidelinesLevel: r } = G(t, e),
          c = o.useCallback((n) => v.Get().OverridePrice(t, e, n), [t, e]),
          l = v.Get().GetPublishedPrice(t, e),
          d = v.Get().GetProposedPrice(t, e),
          { nMinPriceInCents: p, nMaxPriceInCents: g } = C(t, e),
          m =
            null !== (n = v.Get().m_mapMinDiscountedPrices.get(e)) &&
            void 0 !== n
              ? n
              : 0,
          h = a ? Math.floor((100 * (a - m)) / a) : 90,
          D = h < Math.min(90, Math.floor((100 * (r - 50)) / r)) ? h : null;
        return o.useMemo(
          () => ({
            nPriceInCents: a,
            nProposedPriceInCents: d,
            nPublishedPriceInCents: l,
            nMinPriceInCents: p,
            nMaxPriceInCents: g,
            nMaxDiscountPercentage: D,
            nSuggestedPriceInCents: s,
            fnSetPrice: c,
          }),
          [a, d, l, p, g, D, s, c]
        );
      }
      function C(t, e) {
        var n;
        return {
          nMinPriceInCents:
            null !== (n = v.Get().m_mapMinPrices.get(e)) && void 0 !== n
              ? n
              : 0,
          nMaxPriceInCents: v.Get().m_setRecurringSubscriptions.has(t)
            ? v.Get().GetPublishedPrice(t, e)
            : null,
        };
      }
      function y() {
        return o.useCallback((t, e, n) => {
          const i = v.Get().GetPrice(t, e);
          return (
            v.Get().OverridePrice(t, e, n),
            i == n
              ? null
              : {
                  packageID: t,
                  strPriceKey: e,
                  nPriceInCents: n,
                  nOldPriceInCents: i,
                }
          );
        }, []);
      }
      function L(t) {
        return v.Get().m_mapPriceProposals.get(t);
      }
      function R(t) {
        return v.Get().m_mapPriceProposals.get(t);
      }
      function A(t) {
        let e = !1;
        for (const n of v.Get().m_rgKnownPriceKeys) {
          let i = v.Get().GetPublishedPrice(t, n);
          e = e || (0 != i && void 0 !== i);
        }
        return e;
      }
      function w(t) {
        const e = L(t),
          n = [];
        for (const i of v.Get().m_rgKnownPriceKeys) {
          const a = e.prices[i],
            s = v.Get().GetPublishedPrice(t, i);
          a != s &&
            n.push({
              packageID: t,
              strPriceKey: i,
              nPriceInCents: a,
              nOldPriceInCents: s,
            });
        }
        return n;
      }
      function B() {
        return v.Get().m_rgKnownPriceKeys;
      }
      function O(t) {
        let e = v.Get().m_mapPriceKeyDescriptions.get(t);
        return e ? e.strDescription : "";
      }
      function N(t) {
        return o.useCallback(() => {
          v.Get().DiscardAllLocalPriceOverridesForKey(t);
        }, [t]);
      }
      function M(t) {
        return o.useCallback(() => {
          v.Get().DiscardLocalPriceOverridesForPackage(t);
        }, [t]);
      }
      function U(t) {
        return o.useCallback(() => {
          v.Get().CancelProposal(t);
        }, [t]);
      }
      function F() {
        const [t, e] = o.useState(v.Get().m_strDisplayPriceKey),
          n = v.Get().m_rgKnownPriceKeys,
          i = o.useCallback((t) => {
            e(t),
              (v.Get().m_strDisplayPriceKey = t),
              v.Get().m_displayPriceKeyCallbackList.Dispatch(t);
          }, []);
        return { strPriceKey: t, rgSupportedPriceKeys: n, fnSetPriceKey: i };
      }
      function V(t) {
        const e = (0, u.NW)();
        return (
          (0, u.Qg)(v.Get().m_allPriceOverridesCallbackList, e),
          v.Get().BHasLocalPriceOverrides(t)
        );
      }
      function T(t) {
        return v.Get().BHasLocalPriceOverrides(t);
      }
      function j() {
        const [t, e] = o.useState(() => v.Get().GetAllLocalPriceOverrides());
        return (0, u.Qg)(v.Get().m_allPriceOverridesCallbackList, e), t;
      }
      function x(t) {
        return (0, m.SZ)(() => v.Get().GetLocalOverrideCountForPriceKey(t));
      }
      function K() {
        return o.useCallback(() => {
          var t;
          return (
            (null === (t = v.Get().GetAllLocalPriceOverrides()) || void 0 === t
              ? void 0
              : t.length) > 0
          );
        }, []);
      }
      function W() {
        return o.useCallback(() => v.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function Q() {
        const t = [],
          e = o.useRef(new Map());
        v.Get().m_mapPriceGuidelines.forEach((n, i) => {
          const a = n.get("USD");
          t.push(a), e.current.set(a, i);
        }),
          t.sort((t, e) => t - e);
        const n = o.useCallback((t, n) => {
          const i = e.current.get(n);
          v.Get()
            .m_mapPriceGuidelines.get(i)
            .forEach((e, n) => v.Get().OverridePrice(t, n, e));
        }, []);
        return { rgUSDPricesInCents: t, fnApplyGuidelines: n };
      }
      function H() {
        return o.useCallback(
          (t, e, n) => v.Get().SubmitProposalToServer(t, e, n),
          []
        );
      }
      function q() {
        return o.useCallback(
          (t, e) => v.Get().PublishApprovedProposal(t, e, 6e4),
          []
        );
      }
      function z(t) {
        let e = [];
        const n = v.Get().m_rgKnownPriceKeys;
        for (let i of t) {
          if (A(i)) continue;
          let t = !1;
          for (const e of n) {
            if (!v.Get().BPriceKeyRequired(e)) continue;
            if (!v.Get().GetPrice(i, e)) {
              t = !0;
              break;
            }
          }
          t && e.push(i);
        }
        return e;
      }
    },
    16169: (t, e, n) => {
      "use strict";
      n.d(e, {
        B6: () => R,
        E5: () => F,
        E_: () => M,
        Eh: () => P,
        HU: () => O,
        JW: () => U,
        LX: () => E,
        TB: () => B,
        _9: () => A,
        dy: () => T,
        hr: () => y,
        k: () => j,
        pl: () => L,
        s$: () => w,
        yn: () => N,
        z$: () => x,
      });
      var i = n(65395),
        a = n(16586),
        s = n(36998),
        o = n(19533),
        r = n(2220),
        c = n(7164),
        l = n(89526),
        u = n(85651),
        d = n(57858),
        p = n(85246),
        g = n(4306),
        m = n(81349),
        v = n(25508),
        h = n(32765),
        D = n(86873);
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
      const P = 30,
        E = P * v._H.PerDay - 1.5 * v._H.PerHour,
        k = 10 * v._H.PerMinute;
      class I {
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
          (this.m_mapPackageStateForDiscountEvents = new Map()),
            (this.m_mapLocalPackageDiscountOverrides = new Map()),
            (this.m_mapDiscountGridCellCallbackList = new Map()),
            (this.m_mapDiscountEventColumnCallbackList = new Map()),
            (this.m_localPackageDiscountOverrideCallbackList = new p.pB()),
            "dev" == h.De.WEB_UNIVERSE &&
              (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const t of (0, o.MQ)())
            I.Get().ComputePackageState(t),
              (0, s.XM)(t).Register(() => {
                I.Get().ComputePackageState(t);
              });
          (0, D.ix)().Register(() => {
            for (const t of (0, o.MQ)()) I.Get().ComputePackageState(t, !0);
          }),
            I.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(t, e, n) {
          var i;
          const a =
            null === (i = I.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === i
              ? void 0
              : i.get(e);
          if (1 != (null == a ? void 0 : a.eState))
            return (
              console.error(
                "Cannot change discount in current state:",
                a.eState
              ),
              null
            );
          const s = a.discount,
            o = (0, D.f0)(e),
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
                this.GetLocalPackageDiscountOverrides()
              ),
              r);
        }
        GetLocalPackageDiscountOverrides() {
          const t = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((e) =>
              e.forEach((e) => {
                f(e, e.nDiscountID && (0, s._J)(e.nDiscountID)) || t.push(e);
              })
            ),
            t.sort(C),
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
              this.GetLocalPackageDiscountOverrides()
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
          const n = (0, u.kl)() - E,
            i = (0, s.co)(t);
          if (!i) return null;
          const a = new Map(
            i.filter((t) => t.rtEndDate > n).map((t) => [t.discountEventID, t])
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
            I.Get().m_mapPackageStateForDiscountEvents.forEach((n, i) =>
              e.push(n.get(t))
            ),
            e
          );
        }
        ComputePackageState(t, e) {
          var n, s;
          const o = d.Z.Get().GetPackage(t);
          if (!o) return;
          const c = (0, D.wQ)(),
            l = (0, r.R1)(o),
            u = l.nBaseAppID;
          let p = u && a.qh.Get().GetOptInRegistrationAndEligibilityForApp(u);
          u ||
            p ||
            (p = a.qh
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                o.GetIncludedAppIDs()
              ));
          const g = this.GetPackageDiscountsIncludingOverrides(t),
            m = !g,
            v = m
              ? null
              : Array.from(g.values()).sort(
                  (t, e) => t.rtStartDate - e.rtStartDate
                );
          this.m_mapPackageStateForDiscountEvents.has(t) ||
            this.m_mapPackageStateForDiscountEvents.set(t, new Map());
          const h = this.m_mapPackageStateForDiscountEvents.get(t);
          for (const a of c) {
            if (e && h.has(a.id)) continue;
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
              if (((r.eState = 1), b(a, o))) r.eState = 10;
              else if (a.opt_in_name) {
                const { ePackageDiscountState: t, optInRegistration: e } = S(
                  a.opt_in_name,
                  p,
                  o,
                  l,
                  a
                );
                (r.eState = t), (r.optInReg = e);
              }
              if (10 != r.eState && 4 != r.eState && 5 != r.eState) {
                const e = G(t, a, v);
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
            _(r, h.get(a.id)) ||
              (h.set(a.id, r),
              this.GetDiscountGridCellCallbackList(t, a.id).Dispatch(r),
              this.GetDiscountEventColumnCallbackList(a.id).Dispatch(
                this.GetAllPackageStatesForDiscountEvent(a.id)
              ));
          }
        }
        GetAvailableDiscountEventsInRange(t, e, n) {
          const i = this.m_mapPackageStateForDiscountEvents.get(t),
            a = new Set([1, 11, 2, 3]);
          return (0, D.wQ)()
            .filter(
              (t) =>
                e <= t.start_date &&
                t.end_date <= n &&
                a.has(i.get(t.id).eState)
            )
            .map((t) => t.id);
        }
        GetFutureDiscountRanges(t) {
          const e = d.Z.Get().GetPackage(t),
            n = this.GetPackageDiscountsIncludingOverrides(t);
          if (!e || !n) return [];
          const a = Array.from(n.values()).sort(
              (t, e) => t.rtStartDate - e.rtStartDate
            ),
            s = (0, u.kl)(),
            o = Math.max(s, e.GetReleaseDateRTime() + E, (0, D.QM)(t) + E),
            r = [],
            l = new Set();
          let p = o;
          for (let e = 0; e < a.length; e++) {
            const n = a[e];
            if (0 == n.nDiscountPct) continue;
            const s = (0, i.fH)(n.discountEventID);
            let o = n.rtStartDate - E;
            const u = "unique" == (null == s ? void 0 : s.collision_type);
            if (u && ((o = n.rtStartDate + k), e + 1 < a.length)) {
              const t = a[e + 1],
                n = (0, D.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (o = Math.min(o, t.rtStartDate - E));
            }
            if (p + v._H.PerDay < o) {
              const e = {
                bIsAvailable: !0,
                rtStartDate: p,
                rtEndDate: o,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  t,
                  p,
                  o
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
              (p = n.rtEndDate + E),
              u && ((p = n.rtEndDate - k), e - 1 >= 0))
            ) {
              const t = a[e - 1],
                n = (0, D.f0)(t.discountEventID);
              "unique" != (null == n ? void 0 : n.collision_type) &&
                (p = Math.max(p, t.rtEndDate + E));
            }
            const g = (0, c._)(p);
            g - p <= 2 * v._H.PerHour && (p = g);
          }
          const g = (0, c._)(s + v._H.PerYear / 2);
          if (p + v._H.PerDay < g) {
            const e = {
              bIsAvailable: !0,
              rtStartDate: p,
              rtEndDate: g,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                t,
                p,
                g
              ),
            };
            r.push(e), e.rgDiscountEventIDs.forEach((t) => l.add(t));
          }
          const m = (0, D.wQ)().filter(
            (e) =>
              "unique" == e.collision_type &&
              !l.has(e.id) &&
              1 ==
                this.m_mapPackageStateForDiscountEvents.get(t).get(e.id).eState
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
      function G(t, e, n) {
        let a = 1;
        const s = [];
        let o = !1;
        const r = d.Z.Get().GetPackage(t);
        if ((null == r ? void 0 : r.GetReleaseDateRTime()) > e.start_date - E)
          return (
            (a = 6),
            {
              ePackageDiscountState: a,
              rgConflictingDiscounts: s,
              bChangedLocally: o,
            }
          );
        if ((0, D.QM)(t) > e.start_date - E)
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
            c = r ? e.start_date + k : e.start_date - E,
            l = r ? e.end_date - k : e.end_date + E;
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
      function S(t, e, n, i, s) {
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
      function b(t, e) {
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
      function C(t, e) {
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
      function y() {
        return l.useCallback(() => {
          I.Get();
        }, []);
      }
      function L() {
        const [t, e] = l.useState(I.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, g.Qg)(I.Get().GetLocalPackageDiscountOverrideCallbackList(), e), t
        );
      }
      function R() {
        return l.useCallback(() => {
          var t;
          return (
            (null === (t = I.Get().GetLocalPackageDiscountOverrides()) ||
            void 0 === t
              ? void 0
              : t.length) > 0
          );
        }, []);
      }
      function A() {
        return l.useCallback(
          (t) => I.Get().DiscardAllLocalPackageDiscountOverrides(t),
          []
        );
      }
      function w() {
        return l.useCallback(
          (t, e) => I.Get().OptInRegistrationUpdatedForApp(t, e),
          []
        );
      }
      function B() {
        return l.useCallback(
          (t, e) => I.Get().DiscardLocalPackageDiscountOverride(t, e),
          []
        );
      }
      function O(t, e) {
        var n, i, a;
        const s =
          null === (n = I.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
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
            (n = I.Get().m_mapPackageStateForDiscountEvents.get(t)) ||
            void 0 === n
            ? void 0
            : n.get(e);
        });
        (0, g.Qg)(I.Get().GetDiscountGridCellCallbackList(t, e), i);
        return {
          packageState: n,
          fnSetDiscountPct: l.useCallback(
            (n) => {
              I.Get().OverridePackageDiscountPct(t, e, n);
            },
            [t, e]
          ),
        };
      }
      function M() {
        return l.useCallback((t, e, n) => {
          const i = [];
          for (const a of n) {
            const n = I.Get().OverridePackageDiscountPct(a, e, t);
            n && i.push(n);
          }
          return i;
        }, []);
      }
      function U(t) {
        const e = F(t);
        return l.useMemo(
          () => ({
            nAlreadySet: e.alreadySet.size,
            nAvailable: e.available.size,
            nConflicts: e.conflicts.size,
            nNeedRegistration: e.needRegistration.size,
            nIneligibile: e.ineligibile.size,
          }),
          [e]
        );
      }
      function F(t) {
        const [e, n] = l.useState(() => V(t)),
          i = l.useCallback(() => {
            n(V(t));
          }, [t]);
        return (
          l.useEffect(i, [t, i]),
          (0, g.Qg)(I.Get().GetDiscountEventColumnCallbackList(t), i),
          e
        );
      }
      function V(t) {
        var e, n;
        const i = I.Get().GetAllPackageStatesForDiscountEvent(t),
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
      function T(t) {
        return (
          !!(0, s.LT)(t).some((t) => t.nDiscountPct > 0) ||
          !(
            !I.IsInitialized() ||
            !I.Get()
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
        if ((0, s.kk)(t)) return !0;
        const e = (0, i.fH)(t);
        if (!(null == e ? void 0 : e.opt_in_name)) return !0;
        const n = a.qh.Get().GetAllOptInRegistrations(e.opt_in_name);
        return (
          !!(null == n ? void 0 : n.length) &&
          n.some((t) => !t.restricted && !t.pruned)
        );
      }
      function x(t) {
        const e = (function () {
            const [t, e] = l.useState(I.IsInitialized());
            return (0, g.Qg)(I.s_initializationCallbackList, e), t;
          })(),
          [n, i] = l.useState(e ? I.Get().GetFutureDiscountRanges(t) : []),
          a = l.useCallback(
            () => i(e ? I.Get().GetFutureDiscountRanges(t) : []),
            [t, e]
          );
        return (
          (0, g.Qg)(
            e && I.Get().GetLocalPackageDiscountOverrideCallbackList(),
            a
          ),
          (0, g.Qg)(e && (0, s.XM)(t), a),
          l.useEffect(a, [t, e, a]),
          n
        );
      }
      I.s_initializationCallbackList = new p.pB();
    },
    86873: (t, e, n) => {
      "use strict";
      n.d(e, {
        $f: () => f,
        D_: () => I,
        P6: () => k,
        QM: () => g,
        Zq: () => P,
        f0: () => v,
        im: () => D,
        ix: () => h,
        wQ: () => m,
        x9: () => _,
        y4: () => E,
      });
      var i = n(89526),
        a = n(85651),
        s = n(85246),
        o = n(4306),
        r = n(32765),
        c = n(65395),
        l = n(36998),
        u = n(16169);
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
                : t.start_date - e.start_date
            ),
            (this.m_mapDiscountEventsByID = new Map(
              this.m_rgDiscountEvents.map((t) => [t.id, t])
            )),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_discountEventsCallbackList.Dispatch(
              this.m_rgDiscountEvents
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
            this.m_setVisibleDiscountEventIDs
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
                encodeURIComponent(this.m_strSelectedDiscountEventID)
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
              this.GetEventSelectionParameters()
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
      function v(t) {
        return p.Get().m_mapDiscountEventsByID.get(t);
      }
      function h() {
        return p.Get().m_discountEventsCallbackList;
      }
      function D() {
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
      function P(t) {
        const [e, n] = i.useState(p.Get().m_mapDiscountEventsByID.get(t)),
          a = i.useCallback(
            () => n(p.Get().m_mapDiscountEventsByID.get(t)),
            [t]
          );
        return (
          (0, o.Qg)(p.Get().m_discountEventsCallbackList, a),
          i.useEffect(a, [t, a]),
          e
        );
      }
      function E(t = !0) {
        const [e, n] = i.useState(p.Get().GetEventSelectionParameters()),
          a = t ? p.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, o.Qg)(a, n), e;
      }
      function k() {
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
      function I() {
        return i.useCallback(() => {
          p.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    93923: (t, e, n) => {
      "use strict";
      n.d(e, {
        A$: () => D,
        Eg: () => E,
        Ii: () => f,
        JP: () => P,
        O7: () => h,
        UA: () => m,
        zQ: () => p,
        zV: () => v,
      });
      var i = n(89526),
        a = n(84343),
        s = n(32765),
        o = n(14826),
        r = n(91849),
        c = n.n(r),
        l = n(20614),
        u = n(61785);
      function d(t) {
        var e;
        const { fnBLocalChangesExist: n, fnWarnUser: a, cell: r } = t,
          l = r.getRow().getData().packageID,
          u =
            null !== (e = r.getValue()) && void 0 !== e
              ? e
              : i.createElement(
                  "span",
                  { className: c().UnknownValue },
                  (0, o.Xx)("#PackageGrid_PackageID", l)
                );
        return i.createElement(
          E,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${l}`,
            strToolTip: (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          u
        );
      }
      function p(t) {
        return i.useMemo(
          () => ({
            visible: !0,
            title: (0, o.Xx)("#PackageGrid_Column_PackageID"),
            field: "packageID",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              i.createElement(d, Object.assign({}, t))
            ),
            cssClass: c().PackageID,
            hozAlign: "right",
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageID_ttip"),
          }),
          [t]
        );
      }
      function g(t, e, n, i) {
        return (
          !!(
            /^\d+$/.test(t) &&
            n.packageID &&
            n.packageID.toString().startsWith(t)
          ) || e.toLowerCase().includes(t.toLowerCase())
        );
      }
      function m(t) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_PackageName"),
            field: "packageName",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              i.createElement(d, Object.assign({}, t))
            ),
            cssClass: c().PackageName,
            width: 300,
            frozen: !0,
            variableHeight: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageName_ttip"),
            headerFilter: "input",
            headerFilterPlaceholder: (0, o.Xx)(
              "#PackageGrid_PackageNameFilterInputPrompt"
            ),
            headerFilterFunc: g,
          }),
          [t]
        );
      }
      function v(t) {
        return i.useMemo(
          () => ({
            visible: !1,
            title: "App IDs - hidden column",
            field: "appids",
            headerSort: !1,
            frozen: !0,
          }),
          []
        );
      }
      function h(t) {
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
          []
        );
      }
      function D(t) {
        const e = t.getCell("packageType"),
          n = e && "function" == typeof e.getValue && e.getValue();
        n && t.getElement().classList.add(n),
          t.getNextRow() || t.getElement().classList.add(c().LastRow);
      }
      function _(t) {
        var e;
        const { fnBLocalChangesExist: n, fnWarnUser: a, cell: r } = t,
          c = r.getRow().getData().appids,
          l =
            null !== (e = null == c ? void 0 : c.length) && void 0 !== e
              ? e
              : 0,
          u = r.getRow().getData().packageID;
        return i.createElement(
          E,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${u}`,
            strToolTip: (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == l ? "1 appid" : l + " appids"
        );
      }
      function f(t) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_AppName"),
            field: "appName",
            sorter: u.yh,
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              i.createElement(_, Object.assign({}, t))
            ),
            cssClass: c().AppCount,
            width: 80,
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_AppName_ttip"),
          }),
          [t]
        );
      }
      function P(t, e, n, i) {
        return t == (0, o.Xx)("#PackageGrid_NoBaseGameFoundForPackage")
          ? `<div title='${(0, o.Xx)(
              "#PackageGrid_NoBaseGameExplanation"
            )}' >${t} (?) <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              e
            )})</span></div>`
          : `<div>${t} <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              e
            )})</span></div>`;
      }
      function E(t) {
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
            o
          )
        );
      }
    },
    62176: (t, e, n) => {
      "use strict";
      n.d(e, { j: () => s });
      var i = n(89526),
        a = n(14826);
      function s(t) {
        const e = i.useCallback(
          (e) => {
            if (t())
              return (
                e.preventDefault(),
                (e.returnValue = (0, a.Xx)(
                  "#PackageGrid_NavigationWarning_Title"
                )),
                e.returnValue
              );
          },
          [t]
        );
        i.useEffect(
          () => (
            window.addEventListener("beforeunload", e),
            () => window.removeEventListener("beforeunload", e)
          ),
          [e]
        );
      }
    },
    61785: (t, e, n) => {
      "use strict";
      n.d(e, { $k: () => p, yh: () => s });
      var i = n(60161),
        a = n(14826);
      function s(t, e, n, i) {
        const s = (0, a.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          o = (0, a.Xx)("#PackageGrid_NoBaseGameFoundForPackage"),
          r = t == s,
          c = t == o,
          l = !r && !c,
          u = e == s,
          d = e == o,
          p = !u && !d;
        if (l && p) return t.localeCompare(e);
        if (l || p) return l ? -1 : 1;
        if (r == u && c == d) {
          const t = n.getData().packageName,
            e = i.getData().packageName;
          return t && e
            ? t.localeCompare(e)
            : t || e
            ? t
              ? -1
              : 1
            : n.getData().packageID - i.getData().packageID;
        }
        return r ? -1 : 1;
      }
      const o = (t) => t.nextElementSibling,
        r = (t) => t.previousElementSibling,
        c = (t, e) => {
          const n = t.getAttribute("tabulator-field"),
            i = t.parentElement;
          let a = i && e(i);
          for (; n && a; ) {
            for (const t of Array.from(a.children))
              if (n == t.getAttribute("tabulator-field")) return t;
            a = e(a);
          }
          return null;
        },
        l = new Map([
          [38, (t) => c(t, r)],
          [39, o],
          [40, (t) => c(t, o)],
          [37, r],
          [9, (t) => c(t, o)],
          [13, (t) => c(t, o)],
        ]);
      function u(t) {
        return (0, i.Jk)(t, (t) => t.classList.contains("tabulator-cell"));
      }
      function d(t) {
        const e = Array.prototype.slice.call(t.children).reverse();
        for (; e.length > 0; ) {
          const t = e.pop();
          if ("input" === t.tagName.toLowerCase()) return t;
          e.push(...Array.prototype.slice.call(t.children).reverse());
        }
        return null;
      }
      function p(t, e) {
        var n;
        const i = l.get(t.keyCode);
        if (!i) return;
        let a = i(u(t.currentTarget));
        for (; a; ) {
          if (
            "none" !=
              (null === (n = a.style) || void 0 === n ? void 0 : n.display) &&
            !a.classList.contains("tabulator-frozen")
          ) {
            const n = d(a);
            if (n) {
              return g(e, u(n)), n.focus(), void t.preventDefault();
            }
          }
          a = i(a);
        }
      }
      function g(t, e) {
        const n = t.columnManager.scrollLeft,
          i = e.offsetWidth,
          a = e.offsetLeft,
          s = a + i,
          o = t.columnManager.element.clientWidth,
          r = t.columnManager.headersElement.clientWidth,
          c = n + o;
        if (a >= c - r && s <= c) return;
        const l = (a + s) / 2 - (o - r / 2),
          u = (r - i) / 4,
          d = l + (l > n ? u : -1 * u);
        t.columnManager.scrollHorizontal(d), t.rowManager.scrollHorizontal(d);
      }
    },
    2220: (t, e, n) => {
      "use strict";
      n.d(e, { R1: () => c, Sx: () => o, xs: () => u });
      var i = n(33940),
        a = n(57858),
        s = n(14826);
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
    7164: (t, e, n) => {
      "use strict";
      n.d(e, { $: () => i, _: () => a });
      const i = "America/Los_Angeles";
      function a(t) {
        const e = n(47812).unix(t).tz(i);
        return (
          e.seconds(0),
          e.minutes(0),
          e.hours(10),
          e.unix() < t && e.hours(34),
          e.unix()
        );
      }
    },
  },
]);

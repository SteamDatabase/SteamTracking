/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5875],
  {
    22798: (e) => {
      e.exports = {
        DashboardPage: "discountdashboard_DashboardPage_353rn",
        DashTitleBar: "discountdashboard_DashTitleBar_2m-_V",
        DashTitle: "discountdashboard_DashTitle_1FK58",
        ConfidentialBanner: "discountdashboard_ConfidentialBanner_2H9Kz",
        Throbber: "discountdashboard_Throbber_21Esx",
        ErrorMessage: "discountdashboard_ErrorMessage_190ux",
        ButtonGroup: "discountdashboard_ButtonGroup_2peTi",
      };
    },
    95568: (e) => {
      e.exports = {
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
    7851: (e) => {
      e.exports = {
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
    24448: (e, t, n) => {
      "use strict";
      n.d(t, { Gr: () => _, Jq: () => v, si: () => h, y$: () => m });
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
        LoadProfiles(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, u.X)(
              e.length <= 500,
              "Check LoadProfiles, requesting too many steam IDs",
            );
            let n = e.filter(
              (e) =>
                !this.m_mapProfiles.has(e) && !this.m_mapProfilesLoading.has(e),
            );
            if (0 == n.length) return this.m_mapProfilesLoading.get(e[0]);
            let i = p.De.COMMUNITY_BASE_URL + "actions/ajaxresolveusers",
              a = s().get(i, {
                params: { steamids: n.join(",") },
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
            n.forEach((e) => this.m_mapProfilesLoading.set(e, a));
            let o = yield a;
            o.data &&
              200 == o.status &&
              o.data.forEach((e) => {
                (e.avatar_hash = e.avatar_url),
                  (e.avatar_url_medium = (0, c.U)(e.avatar_url, "medium")),
                  (e.avatar_url_full = (0, c.U)(e.avatar_url, "full")),
                  (e.avatar_url = (0, c.U)(e.avatar_url)),
                  this.m_mapProfiles.set(e.steamid, e),
                  this.m_mapProfilesLoading.delete(e.steamid);
              });
          });
        }
        GetProfile(e) {
          return this.m_mapProfiles.get(e);
        }
        GetProfileByAccountID(e) {
          return this.m_mapProfiles.get(
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        GetProfileBySteamID(e) {
          return this.m_mapProfiles.get(e.ConvertTo64BitString());
        }
        BHasProfile(e) {
          return this.m_mapProfiles.has(e);
        }
        BHasProfileByAccountID(e) {
          return this.m_mapProfiles.has(
            l.K.InitFromAccountID(e).ConvertTo64BitString(),
          );
        }
        BHasProfileBySteamID(e) {
          return this.m_mapProfiles.has(e.ConvertTo64BitString());
        }
        BHasAllProfilesBySteamID(e) {
          return !e.some((e) => !this.BHasProfileBySteamID(e));
        }
        GetProfileURLBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.profile_url
            ? p.De.COMMUNITY_BASE_URL + "id/" + t.profile_url
            : p.De.COMMUNITY_BASE_URL + "profiles/" + e.ConvertTo64BitString();
        }
        GetPersonaNameBySteamID(e) {
          const t = this.GetProfileBySteamID(e);
          return t && t.persona_name ? t.persona_name : "";
        }
      }
      (0, i.gn)([o.LO], g.prototype, "m_mapProfiles", void 0);
      const m = new g();
      function _(e) {
        const t = r.useMemo(
            () => (e ? ("string" == typeof e ? new l.K(e) : e) : null),
            [e],
          ),
          [n, i] = (0, r.useState)(!!t && !m.BHasProfileBySteamID(t));
        (0, r.useEffect)(() => {
          const e = s().CancelToken.source();
          return (
            t &&
              !m.BHasProfileBySteamID(t) &&
              m
                .LoadProfiles([t.ConvertTo64BitString()])
                .catch((e) => {
                  const n = (0, d.l)(e);
                  console.error(
                    "useUserProfile failed to load profile for " +
                      t.ConvertTo64BitString() +
                      ": " +
                      n.strErrorMsg,
                    n,
                  );
                })
                .finally(() => {
                  e.token.reason || i(!1);
                }),
            () => e.cancel("unmounting useUserProfile")
          );
        }, [e]);
        return [n, !!t && m.GetProfileBySteamID(t)];
      }
      function v(e) {
        return _(r.useMemo(() => l.K.InitFromAccountID(e), [e]));
      }
      function h(e) {
        return (function (e) {
          const t = r.useMemo(
              () =>
                e
                  ? e.map((e) => ("string" == typeof e ? new l.K(e) : e))
                  : null,
              [e],
            ),
            [n, i] = (0, r.useState)(!!t && !m.BHasAllProfilesBySteamID(t));
          return (
            (0, r.useEffect)(() => {
              const e = s().CancelToken.source();
              return (
                t &&
                  !m.BHasAllProfilesBySteamID(t) &&
                  m
                    .LoadProfiles(t.map((e) => e.ConvertTo64BitString()))
                    .catch((e) => {
                      const n = (0, d.l)(e);
                      console.error(
                        "useUserProfile failed to load profile for list: " +
                          n.strErrorMsg,
                        (0, o.ZN)(t),
                        n,
                      );
                    })
                    .finally(() => {
                      e.token.reason || i(!1);
                    }),
                () => e.cancel("unmounting useAllUserProfile")
              );
            }, [t]),
            [n, !!t && t.map((e) => m.GetProfileBySteamID(e))]
          );
        })(r.useMemo(() => e.map((e) => l.K.InitFromAccountID(e)), [e]));
      }
      window.g_ProfileStore = m;
    },
    70903: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => d, a: () => u });
      var i = n(33940),
        a = n(89526),
        s = n(19094),
        o = n(92616),
        r = n(58218),
        c = n(23801),
        l = n(32765);
      function u(e = !1) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (e && o.Z.BIsInitialized()) return;
          const t = (0, l.kQ)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          (0, c.X)(Boolean(t), "require partnerbrowse_webapi_token");
          const n = new s.J(l.De.WEBAPI_BASE_URL, t);
          return (
            ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: Initializing CStoreItemCache with access token",
                t,
              ),
            o.Z.Initialize(n, l.L7.is_partner_member)
          );
        });
      }
      function d() {
        const e = (0, r.T)("usePartnerStoreBrowseAPI"),
          [t, n] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            u().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || n(!0);
            });
          }, []),
          t
        );
      }
    },
    5029: (e, t, n) => {
      "use strict";
      n.d(t, { Ar: () => c, Wo: () => l, i9: () => r, ks: () => s });
      var i = n(89526),
        a = n(59934);
      function s(e, t) {
        let n;
        "string" == typeof e
          ? (n = e)
          : "location" in e
          ? (n = e.location.search)
          : "search" in e && (n = e.search);
        const i = new URLSearchParams(n.substring(1));
        if (i.has(t)) {
          const e = i.getAll(t);
          return e[e.length - 1];
        }
      }
      const o = (e) => null != e;
      function r(e, t, n, i = !1) {
        const a = new URLSearchParams(e.location.search.substring(1));
        a.delete(t),
          o(n) && a.append(t, n),
          i
            ? e.replace(`?${a.toString()}`, Object.assign({}, e.location.state))
            : e.push(`?${a.toString()}`);
      }
      function c(e, t) {
        const n = (0, a.k6)(),
          c = (0, a.TH)(),
          l = (0, i.useMemo)(() => {
            const n = s(c.search, e);
            return o(n)
              ? o(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== n)
                  : t.constructor(n)
                : n
              : t;
          }, [c.search, e, t]),
          u = (0, i.useCallback)(
            (t) => {
              r(n, e, o(t) ? String(t) : null);
            },
            [n, e],
          );
        return [l, u];
      }
      function l(e, t, n = !1) {
        const i = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const n = t[e];
            i.delete(e), o(n) && i.append(e, n);
          }
        n
          ? e.replace(`?${i.toString()}`, Object.assign({}, e.location.state))
          : e.push(`?${i.toString()}`);
      }
    },
    65395: (e, t, n) => {
      "use strict";
      n.d(t, {
        J7: () => f,
        K$: () => G,
        Lr: () => C,
        dH: () => v,
        fH: () => E,
        i4: () => P,
        o: () => k,
        vc: () => I,
        z8: () => S,
      });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(89526),
        r = n(42735),
        c = n(85651),
        l = n(23217),
        u = n(26464),
        d = n(85246),
        p = n(4306),
        g = n(32765);
      const m = "SaleEvent_DurationDiscount_Tooltip",
        _ = "discount";
      var v, h;
      !(function (e) {
        (e.k_EDiscountCollisionType_Normal = "proximity"),
          (e.k_EDiscountCollisionType_MajorSales = "unique");
      })(v || (v = {})),
        (function (e) {
          (e.k_EDiscountPreventWeeklong_Normal = ""),
            (e.k_EDiscountPreventWeeklong_MajorSales = "on");
        })(h || (h = {}));
      class D {
        GetFutureDiscountEvents() {
          const e = (0, c.kl)();
          return Array.from(D.Get().m_mapDiscountEvents.values()).filter(
            (t) => t.end_date > e,
          );
        }
        GetFutureDiscountEventListCallback() {
          return this.m_discountEventsListCallback;
        }
        BLoadedViaInitOrFullLoad() {
          return this.m_bLoadedViaInitOrFullLoad;
        }
        GetDiscountEvent(e) {
          return this.m_mapDiscountEvents.get(e);
        }
        GetAppList(e) {
          return this.m_mapAppList.get(e);
        }
        GetDiscountEventCallback(e) {
          return (
            this.m_mapDiscountEventCallback.has(e) ||
              this.m_mapDiscountEventCallback.set(e, new d.pB()),
            this.m_mapDiscountEventCallback.get(e)
          );
        }
        GetAppListCallback(e) {
          return (
            this.m_mapAppListCallback.has(e) ||
              this.m_mapAppListCallback.set(e, new d.pB()),
            this.m_mapAppListCallback.get(e)
          );
        }
        LoadAllDiscountEvents(e, t) {
          var n, a, o, c;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.m_bLoadEventsRequestInFlight)
              return r.s.k_EResultDuplicateRequest;
            const i =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetalldiscountevents/" +
                e,
              u = {};
            let d = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const e = yield s().get(i, {
                params: u,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                ((this.m_bLoadEventsRequestInFlight = !1),
                200 == (null == e ? void 0 : e.status) &&
                  (null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.success) == r.s.k_EResultOK &&
                  e.data.events)
              ) {
                for (const t of e.data.events)
                  this.m_mapDiscountEvents.set(t.id, t);
                return (
                  (this.m_bLoadedViaInitOrFullLoad = !0),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  r.s.k_EResultOK
                );
              }
              d = { response: e };
            } catch (e) {
              d = e;
            }
            const p = (0, l.l)(d);
            return (
              console.error("Could not load Discount Events", p.strErrorMsg, p),
              null !==
                (c =
                  null ===
                    (o =
                      null === (a = null == d ? void 0 : d.response) ||
                      void 0 === a
                        ? void 0
                        : a.data) || void 0 === o
                    ? void 0
                    : o.success) && void 0 !== c
                ? c
                : r.s.k_EResultFail
            );
          });
        }
        CreateDiscountEvent(e, t, n, a, o, c, u, d) {
          var p;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              D = new FormData();
            D.append("sessionid", g.De.SESSIONID),
              D.append("name", n),
              D.append("start_time", e.toString()),
              D.append("end_time", t.toString()),
              D.append("allowed_appids", u.join(",")),
              D.append("allowed_publisherids", c.join(",")),
              D.append("description", o),
              D.append("collision_type", v.k_EDiscountCollisionType_Normal),
              D.append("event", "1"),
              D.append("header", a),
              D.append("tooltip", m),
              D.append("type", _),
              D.append("prevent_weeklong", h.k_EDiscountPreventWeeklong_Normal);
            let k = null;
            try {
              const l = yield s().post(i, D, {
                withCredentials: !0,
                cancelToken: null == d ? void 0 : d.token,
              });
              if (
                200 == (null == l ? void 0 : l.status) &&
                (null === (p = l.data) || void 0 === p ? void 0 : p.success) ==
                  r.s.k_EResultOK &&
                l.data.eventid
              ) {
                const i = {
                  id: l.data.eventid,
                  name: n,
                  start_date: e,
                  end_date: t,
                  appids: u,
                  publisherids: c,
                  description: o,
                  collision_type: v.k_EDiscountCollisionType_Normal,
                  event: "1",
                  header: a,
                  tooltip: m,
                  type: _,
                  prevent_weeklong: h.k_EDiscountPreventWeeklong_Normal,
                };
                return (
                  this.m_mapDiscountEvents.set(i.id, i),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  i
                );
              }
              k = { response: l };
            } catch (e) {
              k = e;
            }
            const P = (0, l.l)(k);
            return (
              console.error(
                "CDiscountEventStore.CreateDiscountEvent: failed",
                P.strErrorMsg,
                P,
              ),
              null
            );
          });
        }
        UpdateDiscountEventPublisherAndAppList(e, t, n, a) {
          var o;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i = this.m_mapDiscountEvents.get(e);
            if (!i)
              return (
                console.error(
                  "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                  e,
                ),
                null
              );
            const c =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              u = new FormData();
            u.append("sessionid", g.De.SESSIONID),
              u.append("eventid", e),
              u.append("name", i.name),
              u.append("start_time", i.start_date.toString()),
              u.append("end_time", i.end_date.toString()),
              u.append("allowed_appids", n.join(",")),
              u.append("allowed_publisherids", t.join(",")),
              u.append("description", i.description),
              u.append("collision_type", i.collision_type),
              u.append("event", i.event),
              u.append("header", i.header),
              u.append("tooltip", i.tooltip),
              u.append("type", i.type),
              u.append("prevent_weeklong", i.prevent_weeklong);
            let d = null;
            try {
              const e = yield s().post(c, u, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                (null === (o = e.data) || void 0 === o ? void 0 : o.success) ==
                  r.s.k_EResultOK &&
                e.data.eventid
              ) {
                const e = Object.assign(Object.assign({}, i), {
                  appids: n,
                  publisherids: t,
                });
                return (
                  this.m_mapDiscountEvents.set(e.id, e),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents(),
                  ),
                  e
                );
              }
              d = { response: e };
            } catch (e) {
              d = e;
            }
            const p = (0, l.l)(d);
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
        LoadSingleDiscountEvent(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.m_mapDiscountEvents.has(e)
              ? this.m_mapDiscountEvents.get(e)
              : (this.m_mapInflightDiscountLoadRequest.has(e) ||
                  this.m_mapInflightDiscountLoadRequest.set(
                    e,
                    this.InternalLoadSingleDiscountEvent(e),
                  ),
                this.m_mapInflightDiscountLoadRequest.get(e));
          });
        }
        InternalLoadSingleDiscountEvent(e) {
          var t, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            if (!e || 0 == e.length) return null;
            try {
              const a =
                  g.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventbyid",
                o = { sessionid: g.De.SESSIONID, discountid: e },
                c = yield s().get(a, { params: o, withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                (null === (t = null == c ? void 0 : c.data) || void 0 === t
                  ? void 0
                  : t.success) == r.s.k_EResultOK &&
                (null === (n = null == c ? void 0 : c.data) || void 0 === n
                  ? void 0
                  : n.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(e, c.data.discount_event),
                  this.GetDiscountEventCallback(e).Dispatch(
                    c.data.discount_event,
                  ),
                  c.data.discount_event
                );
              i = (0, l.l)(c);
            } catch (e) {
              i = (0, l.l)(e);
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
        LoadSingleDiscountEventsAppList(e) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.m_mapAppList.has(e)
              ? {
                  oDiscountEvent: this.m_mapDiscountEvents.get(e),
                  rgAppList: this.m_mapAppList.get(e),
                }
              : (this.m_mapInflightDiscountAndAppListLoadRequest.has(e) ||
                  this.m_mapInflightDiscountAndAppListLoadRequest.set(
                    e,
                    this.InternalLoadSingleDiscountEventsAppList(e),
                  ),
                this.m_mapInflightDiscountAndAppListLoadRequest.get(e));
          });
        }
        InternalLoadSingleDiscountEventsAppList(e) {
          var t, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            if (!e || 0 == e.length) return null;
            try {
              const a =
                  g.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventapplist",
                o = { sessionid: g.De.SESSIONID, discountid: e },
                c = yield s().get(a, { params: o, withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                (null === (t = null == c ? void 0 : c.data) || void 0 === t
                  ? void 0
                  : t.success) == r.s.k_EResultOK &&
                (null === (n = null == c ? void 0 : c.data) || void 0 === n
                  ? void 0
                  : n.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(e, c.data.discount_event),
                  this.m_mapAppList.set(e, c.data.appid_list),
                  this.GetDiscountEventCallback(e).Dispatch(
                    c.data.discount_event,
                  ),
                  this.GetAppListCallback(e).Dispatch(c.data.appid_list),
                  {
                    oDiscountEvent: c.data.discount_event,
                    rgAppList: c.data.appid_list,
                  }
                );
              i = (0, l.l)(c);
            } catch (e) {
              i = (0, l.l)(e);
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
            D.s_Singleton || ((D.s_Singleton = new D()), D.s_Singleton.Init()),
            D.s_Singleton
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
          const e = (0, g.kQ)("discount_events", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountEventStore loading payload: ",
                e,
              ),
            this.BIsConfigValid(e))
          ) {
            for (const t of e) this.m_mapDiscountEvents.set(t.id, t);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == g.De.WEB_UNIVERSE &&
              e &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(e) {
          const t = e;
          return !(!t || !Array.isArray(t));
        }
      }
      function k() {
        return D.Get().GetFutureDiscountEvents();
      }
      function P() {
        return D.Get().GetFutureDiscountEventListCallback();
      }
      function f(e) {
        const t = D.Get().BLoadedViaInitOrFullLoad(),
          [n, i] = o.useState(t ? D.Get().GetFutureDiscountEvents() : null),
          [a, s] = o.useState(null),
          c =
            e ||
            Number.parseInt((0, g.kQ)("publisherid", "application_config"));
        (0, p.Qg)(D.Get().GetFutureDiscountEventListCallback(), i),
          o.useEffect(() => {
            D.Get().BLoadedViaInitOrFullLoad() ||
              D.Get().LoadAllDiscountEvents(c).then(s);
          }, [n, c]);
        const l =
          null != a
            ? a
            : (null == n ? void 0 : n.length)
            ? r.s.k_EResultOK
            : null;
        return o.useMemo(() => ({ rgDiscountEvents: n, eResult: l }), [n, l]);
      }
      function E(e) {
        return D.Get().GetDiscountEvent(e);
      }
      function I(e) {
        const [t, n] = (0, o.useState)(D.Get().GetDiscountEvent(e));
        return (
          o.useEffect(() => {
            ((!t && e) || ((null == t ? void 0 : t.id) != e && e)) &&
              D.Get()
                .LoadSingleDiscountEvent(e)
                .then((e) => {
                  e && n(e);
                });
          }, [e, t]),
          (0, p.Qg)(D.Get().GetDiscountEventCallback(e), n),
          t
        );
      }
      function G(e) {
        const [t, n] = (0, o.useState)(D.Get().GetDiscountEvent(e)),
          [i, a] = (0, o.useState)(D.Get().GetAppList(e));
        return (
          (0, o.useEffect)(() => {
            ((!i && e) || ((null == t ? void 0 : t.id) != e && e)) &&
              D.Get()
                .LoadSingleDiscountEventsAppList(e)
                .then((e) => {
                  e && (n(e.oDiscountEvent), a(e.rgAppList));
                });
          }, [null == t ? void 0 : t.id, i, e]),
          (0, p.Qg)(D.Get().GetDiscountEventCallback(e), n),
          (0, p.Qg)(D.Get().GetAppListCallback(e), a),
          i ? { oDiscountEvent: t, rgAppList: i } : null
        );
      }
      function S() {
        return { fnCreateDiscountEvent: D.Get().CreateDiscountEvent };
      }
      function C() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            D.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, i.gn)([u.a], D.prototype, "GetDiscountEvent", null),
        (0, i.gn)([u.a], D.prototype, "GetAppList", null),
        (0, i.gn)([u.a], D.prototype, "CreateDiscountEvent", null),
        (0, i.gn)(
          [u.a],
          D.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null,
        );
    },
    16586: (e, t, n) => {
      "use strict";
      n.d(t, {
        A0: () => P,
        Cy: () => S,
        PV: () => f,
        QQ: () => E,
        Rz: () => y,
        V7: () => G,
        ZW: () => I,
        _l: () => R,
        dS: () => L,
        du: () => A,
        lQ: () => O,
        nw: () => C,
        py: () => b,
        qh: () => k,
      });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(50265),
        r = n(89526),
        c = n(5615),
        l = n(42735),
        u = n(51194),
        d = n(11837),
        p = n(23801),
        g = n(23217),
        m = n(26464),
        _ = n(85246),
        v = n(4306),
        h = n(32765),
        D = n(58218);
      class k {
        constructor() {
          (this.m_mapRegistrations = new Map()),
            (this.m_mapRequestedAppIDs = new Map()),
            (this.m_mapOptInNameCallback = new Map()),
            (this.m_mapSingleAppRegistrationChange = new Map()),
            (this.m_loadCountChangeCallback = new _.pB());
        }
        BHasOptInRegistration(e, t) {
          var n;
          return Boolean(
            null === (n = this.m_mapRegistrations.get(e)) || void 0 === n
              ? void 0
              : n.has(t),
          );
        }
        GetOptInRegistrationPromise(e, t) {
          var n;
          return null === (n = this.m_mapRequestedAppIDs.get(t)) || void 0 === n
            ? void 0
            : n.get(e);
        }
        GetOptInRegistrationAndEligibilityForApp(e) {
          return this.m_mapRegistrations.get(e);
        }
        GetSingleAppRegistrationKey(e, t) {
          return `single_${e}_${t}`;
        }
        GetSingleAppRegistrationChange(e, t) {
          const n = this.GetSingleAppRegistrationKey(e, t);
          return (
            this.m_mapSingleAppRegistrationChange.has(n) ||
              this.m_mapSingleAppRegistrationChange.set(n, new _.pB()),
            this.m_mapSingleAppRegistrationChange.get(n)
          );
        }
        GetExistingOptInRegistartion(e, t) {
          return this.m_mapRegistrations.has(e)
            ? this.m_mapRegistrations.get(e).get(t)
            : null;
        }
        GetLoadCountChange() {
          return this.m_loadCountChangeCallback;
        }
        GetLoadCount() {
          return this.m_mapRegistrations.size;
        }
        GetOptInRegistrationAndEligibilityForApps(e) {
          if (0 == e.length) return null;
          let t = new Map();
          for (let n of e) {
            let e = this.m_mapRegistrations.get(n);
            if (e)
              for (let n of e.keys()) {
                let e = t.get(n);
                e || (e = 0), t.set(n, e + 1);
              }
          }
          let n = new Map(),
            i = e[0];
          return (
            t.forEach((t, a) => {
              if (t == e.length) {
                let e = this.m_mapRegistrations.get(i).get(a);
                (0, p.X)(e, "Missing OptIn Restration"), n.set(a, e);
              }
            }),
            n.size > 0 ? n : null
          );
        }
        BHasOptionOnRegistration(e, t, n) {
          var i, a;
          const s = this.GetRegistration(e, t);
          return (
            !(!s || !s.opt_in) &&
            (!n ||
              (null ===
                (a =
                  null === (i = null == s ? void 0 : s.jsondata) || void 0 === i
                    ? void 0
                    : i.dynamic_selection) || void 0 === a
                ? void 0
                : a.some((e) => {
                    var t;
                    return (
                      e &&
                      e.section_id == n.section_id &&
                      (null === (t = e.list_selection) || void 0 === t
                        ? void 0
                        : t.some((e) => {
                            var t;
                            return (
                              e &&
                              e.list_id == n.list_id &&
                              (null === (t = e.selected_item_id) || void 0 === t
                                ? void 0
                                : t.includes(n.option_id))
                            );
                          }))
                    );
                  })))
          );
        }
        BHasOptInTrailer(e, t) {
          var n;
          const i = this.GetRegistration(e, t);
          return Boolean(
            i &&
              i.opt_in &&
              (null === (n = i.jsondata) || void 0 === n
                ? void 0
                : n.trailer_permission) &&
              i.jsondata.rtime_granting_trailer,
          );
        }
        BHasOptInDemo(e, t) {
          var n;
          const i = this.GetRegistration(e, t);
          return Boolean(
            i &&
              i.opt_in &&
              (null === (n = i.jsondata) || void 0 === n
                ? void 0
                : n.demo_permission) &&
              i.jsondata.rtime_granting_demo,
          );
        }
        BHasOptInGameProfile(e, t) {
          var n;
          const i = this.GetRegistration(e, t);
          return Boolean(
            i &&
              i.opt_in &&
              (null === (n = i.jsondata) || void 0 === n
                ? void 0
                : n.game_profile_intent) &&
              i.jsondata.rtime_granting_profile,
          );
        }
        CreateRegistrationNotSaved(e, t) {
          console.log("CreateOrGetRegistration: Creating new registration");
          return {
            opt_in_name: t,
            opt_in: !1,
            appid: e,
            jsondata: { opt_in_name: t, opt_in: !1 },
          };
        }
        CreateOrGetRegistration(e, t) {
          let n = this.m_mapRegistrations.get(e);
          n ||
            ((n = new Map()),
            this.m_mapRegistrations.set(e, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let i = n.get(t);
          return (
            i
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  i,
                )
              : (i = this.CreateRegistrationNotSaved(e, t)),
            i
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(e, t) {
          let n = this.m_mapRegistrations.get(e);
          n ||
            ((n = new Map()),
            this.m_mapRegistrations.set(e, n),
            this.GetLoadCountChange().Dispatch(this.m_mapRegistrations.size));
          let i = n.get(t);
          return (
            i
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  i,
                )
              : ((i = this.CreateRegistrationNotSaved(e, t)), n.set(t, i)),
            i
          );
        }
        GetRegistration(e, t) {
          return this.m_mapRegistrations.has(e) &&
            this.m_mapRegistrations.get(e).has(t)
            ? this.m_mapRegistrations.get(e).get(t)
            : null;
        }
        GetAllOptInRegistrations(e) {
          const t = this.m_mapRequestedAppIDs.get(e) || new Map();
          return Array.from(t.keys())
            .map((t) => {
              var n;
              return null === (n = this.m_mapRegistrations.get(t)) ||
                void 0 === n
                ? void 0
                : n.get(e);
            })
            .filter(Boolean);
        }
        GetOptInNameRegistrationsCallbackList(e) {
          return e
            ? (this.m_mapOptInNameCallback.has(e) ||
                this.m_mapOptInNameCallback.set(e, new _.pB()),
              this.m_mapOptInNameCallback.get(e))
            : null;
        }
        UpdateRegAndTrackInStore(e, t) {
          const n = t.map((t) =>
            t.jsondata && "" !== t.jsondata
              ? Object.assign(Object.assign({}, t), {
                  jsondata: JSON.parse(t.jsondata),
                })
              : Object.assign(Object.assign({}, t), {
                  jsondata: { opt_in_name: e },
                }),
          );
          return (
            n.forEach((t) => {
              this.m_mapRegistrations.has(t.appid) ||
                (this.m_mapRegistrations.set(t.appid, new Map()),
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                )),
                this.m_mapRegistrations.get(t.appid).set(e, t);
            }),
            n
          );
        }
        FetchOptInRegistrationForOptIn(e, t) {
          var n, a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                h.De.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              o = { sessionid: h.De.SESSIONID, opt_in_name: e, opt_in_only: t },
              r = yield s().get(i, { params: o, withCredentials: !0 });
            return (
              null === (n = null == r ? void 0 : r.data) || void 0 === n
                ? void 0
                : n.data
            )
              ? this.UpdateRegAndTrackInStore(e, r.data.data)
              : null === (a = null == r ? void 0 : r.data) || void 0 === a
              ? void 0
              : a.data;
          });
        }
        FetchPendingReviewOptInRegistrationn(e) {
          var t, n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                h.De.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              a = { sessionid: h.De.SESSIONID, opt_in_name: e },
              o = yield s().get(i, { params: a, withCredentials: !0 });
            return (
              null === (t = null == o ? void 0 : o.data) || void 0 === t
                ? void 0
                : t.data
            )
              ? this.UpdateRegAndTrackInStore(e, o.data.data)
              : null === (n = null == o ? void 0 : o.data) || void 0 === n
              ? void 0
              : n.data;
          });
        }
        LoadOptInRegistration(e, t, n) {
          var a, o;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (this.GetRegistration(t, e)) return !0;
            const i =
              null === (a = this.m_mapRequestedAppIDs.get(e)) || void 0 === a
                ? void 0
                : a.get(t);
            if (i) return i;
            try {
              const i = h.De.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                a = { sessionid: h.De.SESSIONID, appid: t, opt_in_name: e },
                r = yield s().get(i, {
                  params: a,
                  withCredentials: !0,
                  cancelToken: null == n ? void 0 : n.token,
                });
              if (
                (null === (o = null == r ? void 0 : r.data) || void 0 === o
                  ? void 0
                  : o.success) == l.s.k_EResultOK &&
                r.data.optin_registration
              ) {
                if (
                  ("string" == typeof r.data.optin_registration.jsondata &&
                    (r.data.optin_registration.jsondata = JSON.parse(
                      r.data.optin_registration.jsondata,
                    )),
                  this.m_mapRegistrations.has(t))
                )
                  this.m_mapRegistrations
                    .get(t)
                    .set(e, r.data.optin_registration);
                else {
                  const n = new Map();
                  n.set(e, r.data.optin_registration),
                    this.m_mapRegistrations.set(t, n),
                    this.GetLoadCountChange().Dispatch(
                      this.m_mapRegistrations.size,
                    );
                }
                return !0;
              }
              {
                const e = (0, g.l)(r);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    e.strErrorMsg,
                  e,
                );
              }
            } catch (e) {
              const t = (0, g.l)(e);
              console.error(
                "LoadOptInRegistration : failed with " + t.strErrorMsg,
                t,
              );
            }
            return !1;
          });
        }
        LoadMultiOptInRegistration(e, t, n, a) {
          var o, r;
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (0 == t.length || 0 == e.length) return !1;
            let i = null;
            const c = new Promise((e, t) => {
              i = e;
            });
            (e = d.kp(e).sort()),
              (t = d.kp(t).sort()),
              e.forEach((e) => {
                this.m_mapRequestedAppIDs.has(e) ||
                  this.m_mapRequestedAppIDs.set(e, new Map());
              });
            let u = new Array();
            if (
              (t.forEach((t) => {
                e.some(
                  (e) =>
                    !this.BHasOptInRegistration(t, e) &&
                    !this.GetOptInRegistrationPromise(t, e),
                ) &&
                  (u.push(t),
                  e.forEach((e) => this.m_mapRequestedAppIDs.get(e).set(t, c)));
              }),
              0 == u.length)
            )
              return !0;
            const p =
              h.De.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
            let m = null;
            try {
              for (; u.length > 0; ) {
                let t = 0;
                const i = [];
                for (; u.length > 0 && t < 5; ) {
                  const a = u.splice(0, 50),
                    o = {
                      rgOptInNames: e.join(","),
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
                    (t += 1);
                }
                const c = yield Promise.all(i);
                for (const e of c) {
                  if (
                    200 != (null == e ? void 0 : e.status) ||
                    (null === (o = e.data) || void 0 === o
                      ? void 0
                      : o.success) != l.s.k_EResultOK ||
                    !(null === (r = e.data.optin_registrations) || void 0 === r
                      ? void 0
                      : r.length)
                  ) {
                    m = { response: e };
                    break;
                  }
                  this.InternalAddRegistrations(e.data.optin_registrations, a);
                }
                this.GetLoadCountChange().Dispatch(
                  this.m_mapRegistrations.size,
                );
              }
            } catch (e) {
              m = e;
            }
            if (null == m) i(!0);
            else {
              const n = (0, g.l)(m);
              console.error(
                "Could not load OptIn for Apps",
                t,
                e,
                n.strErrorMsg,
                n,
              ),
                i(!1);
            }
            return c;
          });
        }
        RegisterAppForOptIn(e, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            const n = {
              opt_in_name: t.startsWith("sale_") ? t : "sale_" + t,
              opt_in: !0,
            };
            return this.UpdateOptInRegistration(e, n);
          });
        }
        UpdateOptInRegistration(e, t) {
          var n;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const a = new FormData();
              a.append("sessionid", h.De.SESSIONID),
                Object.keys(t).forEach((e) => a.append(e, t[e]));
              const o =
                  h.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistration/" +
                  e,
                r = yield s().post(o, a, { withCredentials: !0 });
              if (
                200 == (null == r ? void 0 : r.status) &&
                (null === (n = r.data) || void 0 === n ? void 0 : n.success) ==
                  l.s.k_EResultOK
              )
                return null;
              i = (0, g.l)(r);
            } catch (e) {
              i = (0, g.l)(e);
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
        UpdateOptInRegistrationJson(e, t, n = !1) {
          var a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const o = new FormData();
              o.append("sessionid", h.De.SESSIONID),
                o.append("appid", "" + e),
                o.append("opt_in_name", t.opt_in_name),
                o.append("jsondata", JSON.stringify(t)),
                n && o.append("bCreatePendingInvite", "true");
              const r =
                  h.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  e,
                c = yield s().post(r, o, { withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                (null === (a = c.data) || void 0 === a ? void 0 : a.success) ==
                  l.s.k_EResultOK
              ) {
                const n = t.opt_in_name.startsWith("sale_")
                    ? t.opt_in_name
                    : "sale_" + t.opt_in_name,
                  i = this.m_mapRegistrations.get(e).get(n);
                i.jsondata = t;
                const a = Object.assign({}, i);
                return (
                  this.m_mapRegistrations.get(e).set(t.opt_in_name, a),
                  this.GetSingleAppRegistrationChange(
                    e,
                    t.opt_in_name,
                  ).Dispatch(a),
                  null
                );
              }
              i = (0, g.l)(c);
            } catch (e) {
              i = (0, g.l)(e);
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
        UpdateAppealState(e, t, n) {
          var a;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            try {
              const o = t.jsondata.opt_in_name,
                r = new FormData();
              r.append("sessionid", h.De.SESSIONID),
                r.append("appid", "" + e),
                r.append("opt_in_name", o),
                r.append("approved", "" + n);
              const c =
                  h.De.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + e,
                d = yield s().post(c, r, { withCredentials: !0 });
              if (
                200 == (null == d ? void 0 : d.status) &&
                (null === (a = d.data) || void 0 === a ? void 0 : a.success) ==
                  l.s.k_EResultOK
              ) {
                const t = Object.assign(
                  {},
                  this.m_mapRegistrations.get(e).get(o),
                );
                return (
                  (t.accountid_appeal = h.L7.accountid),
                  (t.appeal_state = n
                    ? u.JL.k_EPartnerAppOptInAppealState_Approved
                    : u.JL.k_EPartnerAppOptInAppealState_Denied),
                  this.m_mapRegistrations.get(e).set(o, t),
                  this.GetSingleAppRegistrationChange(e, o).Dispatch(t),
                  !0
                );
              }
              i = (0, g.l)(d);
            } catch (e) {
              i = (0, g.l)(e);
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
            k.s_OptInRegs ||
              ((k.s_OptInRegs = new k()),
              (window.COptInRegistrations = k.s_OptInRegs),
              k.s_OptInRegs.Init()),
            k.s_OptInRegs
          );
        }
        InternalAddRegistrations(e, t) {
          const n = new Set();
          e.forEach((e) => {
            if (!Number.isNaN(e.appid)) {
              let i = this.m_mapRegistrations.get(e.appid);
              if (
                (i ||
                  ((i = new Map()), this.m_mapRegistrations.set(e.appid, i)),
                e.jsondata && "string" == typeof e.jsondata)
              ) {
                const t = e.jsondata;
                0 == t.trim().length
                  ? (e.jsondata = {})
                  : (e.jsondata = JSON.parse(t));
              }
              i.set(e.opt_in_name, e), t && t.Increment(), n.add(e.opt_in_name);
            }
          }),
            Array.from(n).forEach((e) => {
              this.GetOptInNameRegistrationsCallbackList(e).Dispatch(
                this.GetAllOptInRegistrations(e),
              );
            });
        }
        Init() {
          let e = JSON.parse(
            JSON.stringify(
              (0, h.kQ)("optin_registrations", "application_config"),
            ),
          );
          this.ValidateStoreDefault(e) &&
            (this.InternalAddRegistrations(e),
            "dev" == h.De.WEB_UNIVERSE &&
              console.log("COptInRegistrations: " + e.length, e));
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) &&
            "number" == typeof t[0].appid &&
            "string" == typeof t[0].opt_in_name
          );
        }
      }
      function P(e, t) {
        var n;
        const i =
          null === (n = e.jsondata) || void 0 === n
            ? void 0
            : n.dynamic_selection;
        try {
          if (i) {
            const e = i
              .filter((e) => e.section_id == t.section_id)
              .map((e) => e.list_selection);
            if (e.length > 0 && e[0]) {
              const n = e[0]
                .filter((e) => e.list_id == t.list_id)
                .map((e) => e.selected_item_id);
              if (n.length > 0) return n[0];
            }
          }
        } catch (t) {
          console.log("error: dynamic section", i, e, t);
        }
        return [];
      }
      function f() {
        return r.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: k.Get().LoadMultiOptInRegistration,
          }),
          [],
        );
      }
      function E(e, t, n) {
        const [i, a] = r.useState(null),
          s = (0, D.T)("useMultiLoadOptInAppReg");
        return (
          (0, r.useEffect)(() => {
            const i = t.filter(Boolean);
            i.length > 0
              ? k
                  .Get()
                  .LoadMultiOptInRegistration(
                    i.map(() => e),
                    i,
                    s,
                    n,
                  )
                  .then(() => {
                    const t = new Map();
                    i.forEach((n) => {
                      const i = k.Get().GetRegistration(n, e);
                      i && t.set(n, i);
                    }),
                      a(t);
                  })
              : a(new Map());
          }, [e, t, s, n]),
          i
        );
      }
      function I(e) {
        const [t, n] = r.useState(k.Get().GetAllOptInRegistrations(e));
        return (
          (0, v.Qg)(k.Get().GetOptInNameRegistrationsCallbackList(e), n), t
        );
      }
      function G(e) {
        const t = I(e),
          [n, i] = r.useState({
            nAppOptedIn: 0,
            nAppEligible: 0,
            nAppOptedOut: 0,
            nAppIneligible: 0,
          });
        return (
          r.useEffect(() => {
            if ((null == t ? void 0 : t.length) > 0) {
              const e = {
                nAppOptedIn: 0,
                nAppEligible: 0,
                nAppOptedOut: 0,
                nAppIneligible: 0,
              };
              t.forEach((t) => {
                t.restricted || t.pruned
                  ? (e.nAppIneligible += 1)
                  : t.opt_in
                  ? ((e.nAppOptedIn += 1), (e.nAppEligible += 1))
                  : !t.time_opted_in || t.invited
                  ? (e.nAppEligible += 1)
                  : (e.nAppOptedOut += 1);
              }),
                JSON.stringify(e) != JSON.stringify(n) && i(e);
            }
          }, [t, n]),
          n
        );
      }
      function S(e, t) {
        const n = (0, c.useQuery)(
          ["useAllOptInRegistrationByName", e, Boolean(t)],
          () => k.Get().FetchOptInRegistrationForOptIn(e, t),
          { staleTime: 36e5 },
        );
        return n.isLoading ? null : n.data;
      }
      function C(e) {
        const t = (0, c.useQuery)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", e],
          queryFn: () => k.Get().FetchPendingReviewOptInRegistrationn(e),
          retry: !1,
          staleTime: 36e5,
          enabled: (null == e ? void 0 : e.length) > 0,
        });
        return {
          rgPendingReviewRegistrations: t.isLoading ? null : t.data,
          bIsInError: t.isError,
        };
      }
      function b(e, t) {
        const n = S(e, !1),
          [i, a] = (0, r.useState)(
            null == n ? void 0 : n.find((e) => e.appid == t),
          );
        return (0, v.Qg)(k.Get().GetSingleAppRegistrationChange(t, e), a), i;
      }
      function y(e, t) {
        const [n, i] = (0, r.useState)(
          k.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(e, t),
        );
        return (0, v.Qg)(k.Get().GetSingleAppRegistrationChange(e, t), i), n;
      }
      function R(e, t) {
        const [n, i] = (0, r.useState)(
          k.Get().GetExistingOptInRegistartion(e, t),
        );
        return (0, v.Qg)(k.Get().GetSingleAppRegistrationChange(e, t), i), n;
      }
      function L() {
        return {
          fnUpdateOptInRegistrationJson: k.Get().UpdateOptInRegistrationJson,
        };
      }
      function A() {
        return { fnUpdateAppealState: k.Get().UpdateAppealState };
      }
      function O() {
        const [e, t] = (0, r.useState)(k.Get().GetLoadCount());
        return (
          (0, v.Qg)(k.Get().GetLoadCountChange(), t), k.Get().GetLoadCount()
        );
      }
      (0, i.gn)(
        [m.a],
        k.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null,
      ),
        (0, i.gn)(
          [m.a],
          k.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null,
        ),
        (0, i.gn)([m.a], k.prototype, "LoadMultiOptInRegistration", null),
        (0, i.gn)([m.a], k.prototype, "UpdateOptInRegistrationJson", null),
        (0, i.gn)([m.a], k.prototype, "UpdateAppealState", null),
        (0, i.gn)([o.aD], k.prototype, "Init", null);
    },
    36998: (e, t, n) => {
      "use strict";
      n.d(t, {
        EV: () => L,
        Fi: () => S,
        ID: () => G,
        LT: () => D,
        Qy: () => R,
        Su: () => f,
        XM: () => P,
        Xj: () => A,
        _J: () => h,
        b2: () => C,
        co: () => k,
        hd: () => y,
        k1: () => b,
        kk: () => v,
        v6: () => E,
        yI: () => I,
      });
      var i = n(33940),
        a = n(52868),
        s = n.n(a),
        o = n(89526),
        r = n(42735),
        c = n(85651),
        l = n(23217),
        u = n(85246),
        d = n(4306),
        p = n(81349),
        g = n(32765);
      class m {
        static Get() {
          return (
            m.s_Singleton || ((m.s_Singleton = new m()), m.s_Singleton.Init()),
            m.s_Singleton
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
          const e = (0, g.kQ)("package_discounts", "application_config");
          ("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackageDiscountStore loading discount payload: ",
              e,
            ),
            this.BIsDiscountPayloadValid(e)
              ? this.InternalAddDiscounts(e)
              : "dev" == g.De.WEB_UNIVERSE &&
                e &&
                console.error("Invalid discount payload");
          const t = (0, g.kQ)("max_discount_percentages", "application_config");
          if (
            (("dev" != g.De.WEB_UNIVERSE && "beta" != g.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountGridStore loading max-discount-% payload: ",
                t,
              ),
            this.BIsMaxDiscountPayloadValid(t))
          )
            for (let e in t)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(e), t[e]);
          else
            "dev" == g.De.WEB_UNIVERSE &&
              t &&
              console.error("Invalid max-discount-% payload");
        }
        InternalAddDiscounts(e, t) {
          var n;
          const i = new Set(),
            a = new Set();
          for (const t of e)
            (null === (n = t.discountEventID) || void 0 === n
              ? void 0
              : n.length) || (t.discountEventID = _(t)),
              this.m_mapPackageDiscountsById.set(t.nDiscountID, t),
              this.GetCallbackListForDiscount(t.nDiscountID).Dispatch(t),
              this.m_mapPackageDiscountsByPackageId.has(t.packageID) ||
                this.m_mapPackageDiscountsByPackageId.set(
                  t.packageID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByPackageId
                .get(t.packageID)
                .set(t.nDiscountID, t),
              i.add(t.packageID),
              this.m_mapPackageDiscountsByDiscountEventId.has(
                t.discountEventID,
              ) ||
                this.m_mapPackageDiscountsByDiscountEventId.set(
                  t.discountEventID,
                  new Map(),
                ),
              this.m_mapPackageDiscountsByDiscountEventId
                .get(t.discountEventID)
                .set(t.nDiscountID, t),
              a.add(t.discountEventID);
          for (const e of null != t ? t : [])
            this.m_mapPackageDiscountsByPackageId.has(e) ||
              this.m_mapPackageDiscountsByPackageId.set(e, new Map()),
              i.add(e);
          i.forEach((e) =>
            this.GetCallbackListForPackage(e).Dispatch(
              this.GetAllDiscountsForPackage(e),
            ),
          ),
            a.forEach((e) =>
              this.GetCallbackListForDiscountEvent(e).Dispatch(
                this.GetAllDiscountsForDiscountEvent(e),
              ),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        InternalDeleteDiscount(e, t, n) {
          var i, a;
          this.m_mapPackageDiscountsById.delete(e),
            null === (i = this.m_mapPackageDiscountsByPackageId.get(t)) ||
              void 0 === i ||
              i.delete(e),
            null === (a = this.m_mapPackageDiscountsByDiscountEventId.get(n)) ||
              void 0 === a ||
              a.delete(e),
            this.GetCallbackListForDiscount(e).Dispatch(null),
            this.GetCallbackListForPackage(t).Dispatch(
              this.GetAllDiscountsForPackage(t),
            ),
            this.GetCallbackListForDiscountEvent(n).Dispatch(
              this.GetAllDiscountsForDiscountEvent(n),
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages(),
            );
        }
        BIsDiscountPayloadValid(e) {
          const t = e;
          if (t && Array.isArray(t)) {
            if (0 == t.length) return !0;
            const e = t[0];
            if (
              e.nDiscountID &&
              "number" == typeof e.nDiscountID &&
              e.packageID &&
              "number" == typeof e.packageID
            )
              return !0;
          }
          return !1;
        }
        BIsMaxDiscountPayloadValid(e) {
          const t = e;
          if (t && "object" == typeof t) {
            for (let e in t)
              if (
                isNaN(parseInt(e)) ||
                (null !== t[e] && "number" != typeof t[e])
              )
                return !1;
            return !0;
          }
          return !1;
        }
        LoadPackageDiscounts(e, t, n = 0) {
          var a, o, c, u;
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            const d = new Promise((e, t) => {
                i = e;
              }),
              p = new Set();
            for (const t of e)
              this.m_mapPackageDiscountsByPackageId.has(t) || p.add(t);
            const m = Array.from(p).sort();
            if (0 == m.length) return r.s.k_EResultOK;
            const _ = (0, g.kQ)("publisherid", "application_config"),
              v =
                g.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                _;
            let h = null,
              D = null;
            try {
              const e = [],
                i = new Array();
              for (; m.length > 0; ) {
                const a = m.splice(0, 50);
                i.push(a);
                const o = { packageids: a.join(","), origin: self.origin };
                e.push(
                  s().get(v, {
                    params: o,
                    withCredentials: !0,
                    cancelToken: null == t ? void 0 : t.token,
                    timeout: n,
                  }),
                );
              }
              const o = yield Promise.all(e),
                c = [];
              for (const e of o) {
                if (
                  ((D = i.unshift()),
                  200 != (null == e ? void 0 : e.status) ||
                    (null === (a = e.data) || void 0 === a
                      ? void 0
                      : a.success) != r.s.k_EResultOK ||
                    !e.data.discounts)
                ) {
                  h = { response: e };
                  break;
                }
                e.data.discounts.forEach((e) => c.push(e));
              }
              null == h && this.InternalAddDiscounts(c, Array.from(p));
            } catch (e) {
              h = e;
            }
            if (null == h) i(r.s.k_EResultOK);
            else {
              const e = (0, l.l)(h);
              console.error(
                "Could not load Discounts for packages",
                D,
                e.strErrorMsg,
                e,
              ),
                i(
                  null !==
                    (u =
                      null ===
                        (c =
                          null === (o = null == h ? void 0 : h.response) ||
                          void 0 === o
                            ? void 0
                            : o.data) || void 0 === c
                        ? void 0
                        : c.success) && void 0 !== u
                    ? u
                    : r.s.k_EResultFail,
                );
            }
            return d;
          });
        }
        SaveDiscountToServer(e, t) {
          var n, a, o, c;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                g.De.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                e.packageID,
              u = new FormData();
            u.append("sessionid", g.De.SESSIONID),
              e.nDiscountID && u.append("id", e.nDiscountID.toString()),
              u.append("name", e.strDiscountName),
              u.append("description", e.strDiscountDescription),
              e.discountEventID &&
                !v(e.discountEventID) &&
                u.append("type", e.discountEventID),
              u.append("percent", e.nDiscountPct.toString()),
              u.append(
                "start_date",
                new Date(1e3 * e.rtStartDate).toISOString(),
              ),
              u.append("end_date", new Date(1e3 * e.rtEndDate).toISOString());
            let d = null;
            try {
              const o = yield s().post(i, u, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                ((o.data.msg =
                  null !== (n = o.data.msg) && void 0 !== n
                    ? n
                    : o.data.message),
                200 == (null == o ? void 0 : o.status) &&
                  (null === (a = o.data) || void 0 === a
                    ? void 0
                    : a.success) == r.s.k_EResultOK &&
                  o.data.discountid)
              )
                return (
                  (e.bChangedLocally = !1),
                  (e.nDiscountID = o.data.discountid),
                  (e.nDiscountPct = o.data.percentage),
                  this.InternalAddDiscounts([e]),
                  o.data
                );
              d = { response: o };
            } catch (e) {
              d = e;
            }
            const p = (0, l.l)(d);
            return (
              console.error(
                "CPackageDiscountStore.SaveDiscountToServer: failed",
                p.strErrorMsg,
                p,
              ),
              null !==
                (c =
                  null === (o = null == d ? void 0 : d.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== c
                ? c
                : { success: r.s.k_EResultFail }
            );
          });
        }
        DeleteDiscountOnServer(e, t, n, a) {
          var o, c, u;
          return (0, i.mG)(this, void 0, void 0, function* () {
            const i =
                g.De.PARTNER_BASE_URL + "packages/removepackagediscount/" + t,
              d = new FormData();
            d.append("sessionid", g.De.SESSIONID),
              d.append("discountid", e.toString());
            let p = null;
            try {
              const c = yield s().post(i, d, {
                withCredentials: !0,
                cancelToken: null == a ? void 0 : a.token,
              });
              if (
                200 == (null == c ? void 0 : c.status) &&
                (null === (o = c.data) || void 0 === o ? void 0 : o.success) ==
                  r.s.k_EResultOK
              )
                return this.InternalDeleteDiscount(e, t, n), c.data;
              p = { response: c };
            } catch (e) {
              p = e;
            }
            const m = (0, l.l)(p);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                m.strErrorMsg,
                m,
              ),
              null !==
                (u =
                  null === (c = null == p ? void 0 : p.response) || void 0 === c
                    ? void 0
                    : c.data) && void 0 !== u
                ? u
                : { success: r.s.k_EResultFail }
            );
          });
        }
        GetCallbackListForDiscount(e) {
          return (
            this.m_mapDiscountCallbackList.has(e) ||
              this.m_mapDiscountCallbackList.set(e, new u.pB()),
            this.m_mapDiscountCallbackList.get(e)
          );
        }
        GetCallbackListForPackage(e) {
          return (
            this.m_mapPackageCallbackList.has(e) ||
              this.m_mapPackageCallbackList.set(e, new u.pB()),
            this.m_mapPackageCallbackList.get(e)
          );
        }
        GetCallbackListForDiscountEvent(e) {
          return (
            this.m_mapDiscountEventCallbackList.has(e) ||
              this.m_mapDiscountEventCallbackList.set(e, new u.pB()),
            this.m_mapDiscountEventCallbackList.get(e)
          );
        }
        GetGlobalCallbackList() {
          return this.m_allDiscountCallbackList;
        }
        GetDiscountByID(e) {
          return this.m_mapPackageDiscountsById.get(e);
        }
        GetAllDiscountsForPackage(e) {
          var t, n;
          return this.m_mapPackageDiscountsByPackageId.has(e)
            ? Array.from(
                null !==
                  (n =
                    null ===
                      (t = this.m_mapPackageDiscountsByPackageId.get(e)) ||
                    void 0 === t
                      ? void 0
                      : t.values()) && void 0 !== n
                  ? n
                  : [],
              )
            : null;
        }
        GetAllDiscountsForAllPackages() {
          return Array.from(this.m_mapPackageDiscountsById.values());
        }
        GetAllDiscountsForDiscountEvent(e) {
          var t, n;
          return Array.from(
            null !==
              (n =
                null ===
                  (t = this.m_mapPackageDiscountsByDiscountEventId.get(e)) ||
                void 0 === t
                  ? void 0
                  : t.values()) && void 0 !== n
              ? n
              : [],
          );
        }
        GetMaxDiscountPercentage(e) {
          var t;
          return null !==
            (t = this.m_mapMaxDiscountPercentageByPackageId.get(e)) &&
            void 0 !== t
            ? t
            : 90;
        }
        GetMaxDiscountPercentageForGroup(e) {
          const t = e.map((e) => this.GetMaxDiscountPercentage(e));
          return Math.min(...t);
        }
      }
      function _(e) {
        return `custom-event-${e.rtStartDate}-${e.rtEndDate}-${(0, p.JD)(
          e.strDiscountName,
        )}`;
      }
      function v(e) {
        return e.startsWith("custom-event-");
      }
      function h(e) {
        return m.Get().GetDiscountByID(e);
      }
      function D(e) {
        return m.Get().GetAllDiscountsForDiscountEvent(e);
      }
      function k(e) {
        return m.Get().GetAllDiscountsForPackage(e);
      }
      function P(e) {
        return m.Get().GetCallbackListForPackage(e);
      }
      function f() {
        return m.Get().GetAllDiscountsForAllPackages();
      }
      function E() {
        return m.Get().GetGlobalCallbackList();
      }
      function I() {
        return o.useCallback(
          (e, t, n) => m.Get().LoadPackageDiscounts(e, t, n),
          [],
        );
      }
      function G() {
        const e = (e) => m.Get().SaveDiscountToServer(e),
          t = (e, t, n) => m.Get().DeleteDiscountOnServer(e, t, n);
        return o.useMemo(
          () => ({ fnSaveDiscount: e, fnDeleteDiscount: t }),
          [],
        );
      }
      function S(e) {
        return new Map(
          Array.from(e.map((e) => [e, m.Get().GetDiscountByID(e)])),
        );
      }
      function C(e) {
        const t = (0, c.zD)(),
          [n, i] = o.useState(m.Get().GetAllDiscountsForPackage(e));
        return (
          (0, d.Qg)(m.Get().GetCallbackListForPackage(e), i),
          o.useMemo(() => {
            let e = null;
            if (null == n) return { deepestDiscount: e, bLoading: !0 };
            if ((null == n ? void 0 : n.length) > 0)
              for (const i of n)
                i.rtEndDate > t ||
                  i.nDiscountPct <= 0 ||
                  ((null == e ||
                    i.nDiscountPct > e.nDiscountPct ||
                    (i.nDiscountPct == e.nDiscountPct &&
                      i.rtEndDate > e.rtEndDate)) &&
                    (e = i));
            return { deepestDiscount: e, bLoading: !1 };
          }, [e, t, n])
        );
      }
      function b(e) {
        const t = (0, c.zD)(),
          [n, i] = o.useState(m.Get().GetAllDiscountsForAllPackages());
        return (
          (0, d.Qg)(m.Get().GetGlobalCallbackList(), i),
          o.useMemo(() => {
            var i;
            let a = null;
            if (null == n) return { mostRecentDiscount: a, bLoading: !0 };
            for (const n of e) {
              const e =
                null !== (i = m.Get().GetAllDiscountsForPackage(n)) &&
                void 0 !== i
                  ? i
                  : [];
              for (const n of e)
                n.rtEndDate < t && (!a || a.rtEndDate < n.rtEndDate) && (a = n);
            }
            return { mostRecentDiscount: a, bLoading: !1 };
          }, [t, e, n])
        );
      }
      function y(e) {
        const [t, n] = o.useState(m.Get().GetAllDiscountsForDiscountEvent(e));
        return (0, d.Qg)(m.Get().GetCallbackListForDiscountEvent(e), n), t;
      }
      function R(e) {
        return m.Get().GetMaxDiscountPercentage(e);
      }
      function L(e) {
        return e.some(
          (e) => e.nDiscountPct > m.Get().GetMaxDiscountPercentage(e.packageID),
        );
      }
      function A(e) {
        return m.Get().GetMaxDiscountPercentageForGroup(e);
      }
    },
    19533: (e, t, n) => {
      "use strict";
      n.d(t, {
        $D: () => _,
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
          let e = (0, o.kQ)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, o.kQ)(
                "package_ids",
                "application_config",
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != o.De.WEB_UNIVERSE && "beta" != o.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs,
              ),
            "dev" != o.De.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const t = e.getHeaderFilterValue("packageName"),
            n = new URL(window.location.href);
          t != decodeURIComponent(n.searchParams.get(r)) &&
            (t
              ? n.searchParams.set(r, encodeURIComponent(t))
              : n.searchParams.delete(r),
            window.history.replaceState({}, "", n.toString()));
        }
        UpdateVisiblePackageList(e) {
          const t = e.getGroups("visible").filter((e) => e.isVisible());
          (this.m_rgVisiblePackageIDs = []),
            t.forEach((e) =>
              e
                .getRows()
                .forEach((e) =>
                  this.m_rgVisiblePackageIDs.push(e.getData().packageID),
                ),
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs,
            ),
            this.UpdatePackageNameSearchState(e);
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
      function p(e) {
        let t = c.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function g() {
        return i.useCallback((e) => c.Get().UpdateVisiblePackageList(e), []);
      }
      function m() {
        const [e, t] = i.useState(c.Get().m_rgVisiblePackageIDs);
        return (0, s.Qg)(c.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function _() {
        return i.useMemo(
          () => (0, o.kQ)("publisherid", "application_config"),
          [],
        );
      }
    },
    66104: (e, t, n) => {
      "use strict";
      n.d(t, {
        $w: () => U,
        AN: () => X,
        FR: () => G,
        HV: () => f,
        HX: () => Q,
        OB: () => x,
        OG: () => H,
        Ol: () => y,
        PP: () => C,
        R2: () => F,
        Rs: () => j,
        Tj: () => S,
        We: () => q,
        X1: () => w,
        Xx: () => i,
        _w: () => P,
        bS: () => K,
        dU: () => R,
        df: () => W,
        j_: () => J,
        ju: () => N,
        np: () => Z,
        on: () => T,
        ps: () => B,
        qH: () => L,
        rX: () => O,
        sN: () => $,
        tu: () => A,
        uT: () => z,
        xm: () => Y,
        yh: () => V,
      });
      var i,
        a = n(33940),
        s = n(52868),
        o = n.n(s),
        r = n(89526),
        c = n(50265),
        l = n(42735),
        u = n(23217),
        d = n(85246),
        p = n(4306),
        g = n(81349),
        m = n(32765),
        _ = n(19533),
        v = n(25125),
        h = n(23801);
      !(function (e) {
        (e[(e.k_EPriceProposalStateInvalid = 0)] =
          "k_EPriceProposalStateInvalid"),
          (e[(e.k_EPriceProposalStateActive = 1)] =
            "k_EPriceProposalStateActive"),
          (e[(e.k_EPriceProposalStateCanceled = 2)] =
            "k_EPriceProposalStateCanceled"),
          (e[(e.k_EPriceProposalStateApplied = 3)] =
            "k_EPriceProposalStateApplied"),
          (e[(e.k_EPriceProposalStateApproved = 4)] =
            "k_EPriceProposalStateApproved");
      })(i || (i = {}));
      class D {
        static Get() {
          return (
            D.s_Singleton || ((D.s_Singleton = new D()), D.s_Singleton.Init()),
            D.s_Singleton
          );
        }
        constructor() {
          (this.m_mapPackagePrice = new Map()),
            (this.m_setRecurringSubscriptions = new Set()),
            (this.m_mapPriceProposals = new Map()),
            (this.m_mapLocalPackagePriceOverrides = new Map()),
            (this.m_mapPriceGridCellCallbackList = new Map()),
            (this.m_mapPackageOverridesCallbackList = new Map()),
            (this.m_allPriceOverridesCallbackList = new d.pB()),
            (this.m_mapOverridesPerPriceKey = new Map()),
            (this.m_mapCurrencyData = new Map()),
            (this.m_mapPriceKeyDescriptions = new Map()),
            (this.m_mapPriceGuidelines = new Map()),
            (this.m_rgPriceLevels = []),
            (this.m_strDisplayPriceKey = "USD"),
            (this.m_displayPriceKeyCallbackList = new d.pB()),
            "dev" == m.De.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        Init() {
          const e = new Set(),
            t = (0, m.kQ)("base_prices", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                t,
              ),
            t)
          )
            if (this.BIsPricePayloadValid(t))
              for (let n in t) {
                const i = t[n],
                  a = parseInt(n),
                  s = new Map();
                this.m_mapPackagePrice.set(a, s);
                for (let t in i) e.add(t.toUpperCase()), s.set(t, i[t]);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const n = (0, m.kQ)("recurring_subs", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                n,
              ),
            n)
          )
            if (Array.isArray(n))
              for (const e of n) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const i = (0, m.kQ)("pending_proposals", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                i,
              ),
            i)
          )
            if (this.BIsPendingPricePayloadValid(i))
              for (let e in i) {
                const t = i[e],
                  n = parseInt(e);
                this.m_mapPriceProposals.set(n, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const a = (0, m.kQ)("pricing_guidelines", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                a,
              ),
            a)
          )
            if (this.BIsGuidelinesPayloadValid(a)) {
              for (let t in a) {
                const n = a[t],
                  i = new Map(),
                  s = 100 * parseInt(t.substring(3));
                this.m_rgPriceLevels.push(s),
                  this.m_mapPriceGuidelines.set(s, i);
                for (let t in n)
                  e.add(t.toUpperCase()),
                    i.set(t.toUpperCase(), parseInt(n[t]));
              }
              this.m_rgPriceLevels.sort((e, t) => e - t);
            } else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(e).sort((e, t) =>
            (0, g.eT)(I(e), I(t)),
          );
          const s = (0, m.kQ)("currency_data", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                s,
              ),
            s)
          )
            if (this.BIsCurrencyPayloadValid(s))
              for (let e in s) {
                const t = s[e];
                this.m_mapCurrencyData.set(e, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const o = (0, m.kQ)("currency_descriptions", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                o,
              ),
            o)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(o))
              for (let e in o) {
                const t = o[e];
                this.m_mapPriceKeyDescriptions.set(e, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const n = t[e];
            if (!n || "object" != typeof n) return !1;
            for (let e in n)
              if ("string" != typeof e || "number" != typeof n[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const n = t[e];
            if (
              !n ||
              "object" != typeof n ||
              n.packageID !== parseInt(e) ||
              "object" != typeof n.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const n = t[e];
            if (!n || "object" != typeof n) return !1;
            for (let e in n)
              if ("string" != typeof e || isNaN(parseInt(n[e]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const n = t[e];
            if (!n || "object" != typeof n || n.strCode != e) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const n = t[e];
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
        BPriceKeyRequired(e) {
          var t, n;
          return (
            null !==
              (n =
                null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
                void 0 === t
                  ? void 0
                  : t.bRequired) &&
            void 0 !== n &&
            n
          );
        }
        GetMinimumBasePrice(e) {
          var t;
          return (
            (null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
            void 0 === t
              ? void 0
              : t.nLowestBase) || 0
          );
        }
        GetMinimumDiscountPrice(e) {
          var t;
          return (
            (null === (t = this.m_mapPriceKeyDescriptions.get(e)) ||
            void 0 === t
              ? void 0
              : t.nLowestDiscount) || 0
          );
        }
        GetPublishedPrice(e, t) {
          var n;
          return null === (n = this.m_mapPackagePrice.get(e)) || void 0 === n
            ? void 0
            : n.get(t);
        }
        GetProposedPrice(e, t) {
          var n;
          return null === (n = this.m_mapPriceProposals.get(e)) || void 0 === n
            ? void 0
            : n.prices[t];
        }
        GetSavedPrice(e, t) {
          var n;
          return null !== (n = this.GetProposedPrice(e, t)) && void 0 !== n
            ? n
            : this.GetPublishedPrice(e, t);
        }
        GetPrice(e, t) {
          var n, i;
          return null !==
            (i =
              null === (n = this.m_mapLocalPackagePriceOverrides.get(e)) ||
              void 0 === n
                ? void 0
                : n.get(t)) && void 0 !== i
            ? i
            : this.GetSavedPrice(e, t);
        }
        GetPriceGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const n = this.m_mapPriceGridCellCallbackList.get(e);
          return n.has(t) || n.set(t, new d.pB()), n.get(t);
        }
        GetPackageOverridesCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapPackageOverridesCallbackList.get(e);
          return (
            t ||
              ((t = new d.pB()),
              this.m_mapPackageOverridesCallbackList.set(e, t)),
            t
          );
        }
        OverridePrice(e, t, n) {
          n != this.GetPrice(e, t) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            n == this.GetSavedPrice(e, t)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(t, n),
            this.GetPriceGridCellCallbackList(e, t).Dispatch(n),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks());
        }
        OverridePricesForPackage(e, t, n, i) {
          (0, h.X)(
            t.length == n.length,
            `price list size doesn't match ${t.length} != ${n.length}`,
          );
          for (let i = 0; i < t.length; ++i) {
            const a = t[i],
              s = n[i];
            this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
              s == this.GetSavedPrice(e, a)
                ? this.m_mapLocalPackagePriceOverrides.get(e).delete(a)
                : this.m_mapLocalPackagePriceOverrides.get(e).set(a, s),
              this.GetPriceGridCellCallbackList(e, a).Dispatch(s);
          }
          this.GetPackageOverridesCallbackList(e).Dispatch(),
            i && this.DispatchPriceOverridesCallbacks();
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides(),
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(e) {
          var t;
          return (
            (null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t
              ? void 0
              : t.size) > 0
          );
        }
        GetAllLocalPriceOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((t, n) =>
              t.forEach((t, i) => {
                const a = this.GetSavedPrice(n, i);
                e.push({
                  packageID: n,
                  strPriceKey: i,
                  nPriceInCents: t,
                  nOldPriceInCents: a,
                });
              }),
            ),
            e.sort(k),
            e
          );
        }
        BHasLocalPriceOverride(e, t) {
          let n = this.m_mapLocalPackagePriceOverrides.get(e);
          return !!n && n.has(t);
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, t) => {
              e.forEach((e, t) => {
                let n = this.m_mapOverridesPerPriceKey.get(t);
                n || (n = 0), n++, this.m_mapOverridesPerPriceKey.set(t, n);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          let t = new Set();
          for (const n of e) {
            const { packageID: e, strPriceKey: i } = n;
            this.GetPriceGridCellCallbackList(e, i).Dispatch(
              this.GetPrice(e, i),
            ),
              t.add(e);
          }
          for (const e of t) this.GetPackageOverridesCallbackList(e).Dispatch();
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let t = !1,
            n = new Set();
          this.m_mapLocalPackagePriceOverrides.forEach((i, a) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((t = !0),
              this.m_mapLocalPackagePriceOverrides.get(a).delete(e),
              this.GetPriceGridCellCallbackList(a, e).Dispatch(
                this.GetPrice(a, e),
              ),
              n.add(a));
          });
          for (const e of n) this.GetPackageOverridesCallbackList(e).Dispatch();
          t && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          var t;
          null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t ||
            t.forEach((t, n) => {
              this.GetPriceGridCellCallbackList(e, n).Dispatch(
                this.GetSavedPrice(e, n),
              );
            }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.GetPackageOverridesCallbackList(e).Dispatch(),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, t) {
          const n = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: m.L7.accountid,
            prices: {},
            eState: i.k_EPriceProposalStateActive,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            n.prices[t] = this.GetPrice(e, t);
          return n;
        }
        SubmitProposalToServer(e, t, n) {
          var s, r, c;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = this.BuildNewPricingProposal(e, t),
              d = JSON.stringify(a.prices),
              p = (0, m.kQ)("publisherid", "application_config"),
              g =
                m.De.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                p +
                "/" +
                e,
              _ = new FormData();
            _.append("sessionid", m.De.SESSIONID),
              _.append("partner_will_publish", t ? "1" : "0"),
              _.append("prices", d);
            let v = null;
            try {
              const t = yield o().post(g, _, {
                withCredentials: !0,
                cancelToken: null == n ? void 0 : n.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                (null === (s = t.data) || void 0 === s ? void 0 : s.success) ==
                  l.s.k_EResultOK &&
                t.data.eState != i.k_EPriceProposalStateInvalid
              ) {
                if (t.data.eState == i.k_EPriceProposalStateApplied) {
                  this.m_mapPriceProposals.delete(e);
                  for (const t of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.get(e).set(t, a.prices[t]);
                } else
                  (a.eState = t.data.eState),
                    (a.proposalKey = t.data.proposalKey),
                    this.m_mapPriceProposals.set(e, a);
                return this.DiscardLocalPriceOverridesForPackage(e), t.data;
              }
            } catch (e) {
              v = e;
            }
            const h = (0, u.l)(v);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                h.strErrorMsg,
                h,
              ),
              null !==
                (c =
                  null === (r = null == v ? void 0 : v.response) || void 0 === r
                    ? void 0
                    : r.data) && void 0 !== c
                ? c
                : { success: l.s.k_EResultFail }
            );
          });
        }
        PublishApprovedProposal(e, t, n = 0) {
          var s, r, c;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = this.m_mapPriceProposals.get(e);
            if (
              (null == a ? void 0 : a.eState) !=
                i.k_EPriceProposalStateApproved ||
              !(null == a ? void 0 : a.proposalKey)
            )
              return { success: l.s.k_EResultInvalidParam };
            const d = (0, m.kQ)("publisherid", "application_config"),
              p =
                m.De.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                d +
                "/" +
                e,
              g = new FormData();
            g.append("sessionid", m.De.SESSIONID),
              g.append("proposal_key", a.proposalKey);
            let _ = null;
            try {
              const i = yield o().post(p, g, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
                timeout: n,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                (null === (s = i.data) || void 0 === s ? void 0 : s.success) ==
                  l.s.k_EResultOK
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(t, a.prices[t]),
                    this.GetPriceGridCellCallbackList(e, t).Dispatch(
                      this.GetSavedPrice(e, t),
                    );
                return (
                  this.GetPackageOverridesCallbackList(e).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  i.data
                );
              }
            } catch (e) {
              _ = e;
            }
            const v = (0, u.l)(_);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                v.strErrorMsg,
                v,
              ),
              null !==
                (c =
                  null === (r = null == _ ? void 0 : _.response) || void 0 === r
                    ? void 0
                    : r.data) && void 0 !== c
                ? c
                : { success: l.s.k_EResultFail }
            );
          });
        }
        CancelProposal(e, t) {
          var n, i, s;
          return (0, a.mG)(this, void 0, void 0, function* () {
            const a = this.m_mapPriceProposals.get(e);
            if (!(null == a ? void 0 : a.proposalKey))
              return { success: l.s.k_EResultInvalidParam };
            const r = (0, m.kQ)("publisherid", "application_config"),
              c =
                m.De.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                r +
                "/" +
                e,
              d = new FormData();
            d.append("sessionid", m.De.SESSIONID),
              d.append("proposal_key", a.proposalKey);
            let p = null;
            try {
              const i = yield o().post(c, d, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == i ? void 0 : i.status) &&
                (null === (n = i.data) || void 0 === n ? void 0 : n.success) ==
                  l.s.k_EResultOK
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(e, t).Dispatch(
                    this.GetSavedPrice(e, t),
                  );
                return (
                  this.GetPackageOverridesCallbackList(e).Dispatch(),
                  this.DispatchPriceOverridesCallbacks(),
                  i.data
                );
              }
            } catch (e) {
              p = e;
            }
            const g = (0, u.l)(p);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                g.strErrorMsg,
                g,
              ),
              null !==
                (s =
                  null === (i = null == p ? void 0 : p.response) || void 0 === i
                    ? void 0
                    : i.data) && void 0 !== s
                ? s
                : { success: l.s.k_EResultFail }
            );
          });
        }
        GetLocalOverrideCountForPriceKey(e) {
          var t;
          return null !== (t = this.m_mapOverridesPerPriceKey.get(e)) &&
            void 0 !== t
            ? t
            : 0;
        }
        BAnyPackagePriceBelowMin(e) {
          if (!e) return !1;
          for (let t of this.m_rgKnownPriceKeys) {
            let n = this.GetPrice(e, t);
            if (void 0 === n) continue;
            let { nMinPriceInCents: i, nMaxPriceInCents: a } = O(e, t);
            if (n < i) return !0;
          }
          return !1;
        }
      }
      function k(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const n = (0, _.vB)(e.packageID),
            i = (0, _.vB)(t.packageID);
          return (0, g.eT)(n, i);
        }
        return (0, g.eT)(I(e.strPriceKey), I(t.strPriceKey));
      }
      function P(e) {
        const t = e.split("_")[0];
        return D.Get().m_mapCurrencyData.get(t);
      }
      function f(e, t) {
        var n;
        if (void 0 === t) return ["", "", ""];
        const i = null !== (n = P(t)) && void 0 !== n ? n : P("USD");
        let a = "";
        if ("number" == typeof e) {
          let t = e.toString();
          t.length < 3 && (t = (1 == t.length ? "0" : "") + "0" + t);
          const n = t.length - 2;
          for (let e = 0; e < n; e++) {
            const s = t.charAt(e);
            (a += s),
              e < n - 1 &&
                (n - e - 1) % 3 == 0 &&
                "-" != s &&
                (a += i.strThousandsSeparator);
          }
          i.bWholeUnitsOnly ||
            ((a += i.strDecimalSymbol), (a += t.substr(t.length - 2)));
        }
        return i.bSymbolIsPrefix
          ? [i.strSymbol + i.strSymbolAndNumberSeparator, a, ""]
          : ["", a, i.strSymbolAndNumberSeparator + i.strSymbol];
      }
      (0, a.gn)([c.LO], D.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, a.gn)([c.aD], D.prototype, "UpdateOverridesPerPriceKey", null);
      const E = new Map([
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
      function I(e) {
        return E.has(e) ? E.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function G(e, t) {
        return D.Get().GetPrice(e, t);
      }
      function S(e) {
        const t = D.Get().m_strDisplayPriceKey;
        return f(D.Get().GetPrice(e, t), t).join("");
      }
      function C(e) {
        const [t, n] = r.useState(D.Get().m_strDisplayPriceKey);
        return (
          (0, p.Qg)(D.Get().m_displayPriceKeyCallbackList, n),
          (function (e, t) {
            const [n, i] = r.useState(D.Get().GetPrice(e, t));
            return (
              (0, p.Qg)(D.Get().GetPriceGridCellCallbackList(e, t), i),
              r.useEffect(() => i(D.Get().GetPrice(e, t)), [e, t]),
              f(n, t).join("")
            );
          })(e, t)
        );
      }
      function b(e, t) {
        const n = D.Get().GetPrice(e, "USD");
        let i = null;
        for (let e of D.Get().m_rgPriceLevels)
          if (e > n) {
            i = e;
            break;
          }
        if ("USD" == t || !i)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let a = D.Get().m_mapPriceGuidelines.get(i).get(t);
        const s = D.Get().m_mapPriceGuidelines.get(i).get("USD");
        if (s != n) {
          const e = n / s;
          (i *= e), (a = Math.ceil(a * e));
        }
        return { nSuggestedPriceInCents: a, nGuidelinesLevel: i };
      }
      function y() {
        const e = (0, _.AM)();
        return r.useCallback(
          () =>
            (function (e) {
              let t = 0;
              for (const n of e) {
                const e = new Array(),
                  i = new Array(),
                  a = D.Get().GetPrice(n, "USD");
                if (a && !(a <= 0)) {
                  for (const t of D.Get().m_rgKnownPriceKeys) {
                    if ("USD" == t) continue;
                    const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } =
                      b(n, t);
                    null !== s &&
                      D.Get().GetPrice(n, t) != a &&
                      (e.push(t), i.push(a));
                  }
                  e.length > 0 &&
                    (D.Get().OverridePricesForPackage(n, e, i), (t += 1));
                }
              }
              t > 0 && D.Get().DispatchPriceOverridesCallbacks();
            })(e),
          [e],
        );
      }
      function R(e, t) {
        const n = (0, p.NW)();
        (0, p.Qg)(D.Get().GetPriceGridCellCallbackList(e, t), n);
        const i = D.Get().GetPrice(e, t);
        (0, p.Qg)(D.Get().GetPriceGridCellCallbackList(e, "USD"), n);
        const { nSuggestedPriceInCents: a, nGuidelinesLevel: s } = b(e, t),
          o = r.useCallback((n) => D.Get().OverridePrice(e, t, n), [e, t]),
          c = D.Get().GetPublishedPrice(e, t),
          l = D.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: u, nMaxPriceInCents: d } = O(e, t),
          g = D.Get().GetMinimumDiscountPrice(t),
          m = i ? Math.floor((100 * (i - g)) / i) : 90,
          _ = m < Math.min(90, Math.floor((100 * (s - 50)) / s)) ? m : null;
        return r.useMemo(
          () => ({
            nPriceInCents: i,
            nProposedPriceInCents: l,
            nPublishedPriceInCents: c,
            nMinPriceInCents: u,
            nMaxPriceInCents: d,
            nMaxDiscountPercentage: _,
            nSuggestedPriceInCents: a,
            fnSetPrice: o,
          }),
          [i, l, c, u, d, _, a, o],
        );
      }
      function L(e) {
        let [t, n] = r.useState(() => D.Get().BAnyPackagePriceBelowMin(e)),
          i = r.useCallback(() => {
            let t = D.Get().BAnyPackagePriceBelowMin(e);
            n(t);
          }, [e, n]);
        return (0, p.Qg)(D.Get().GetPackageOverridesCallbackList(e), i), t;
      }
      function A(e) {
        return D.Get().BAnyPackagePriceBelowMin(e);
      }
      function O(e, t) {
        let n = D.Get();
        return {
          nMinPriceInCents: n.GetMinimumBasePrice(t),
          nMaxPriceInCents: n.m_setRecurringSubscriptions.has(e)
            ? n.GetPublishedPrice(e, t)
            : null,
        };
      }
      function w() {
        return r.useCallback((e, t, n) => {
          const i = D.Get().GetPrice(e, t);
          return (
            D.Get().OverridePrice(e, t, n),
            i == n
              ? null
              : {
                  packageID: e,
                  strPriceKey: t,
                  nPriceInCents: n,
                  nOldPriceInCents: i,
                }
          );
        }, []);
      }
      function B(e) {
        return D.Get().m_mapPriceProposals.get(e);
      }
      function N(e) {
        return D.Get().m_mapPriceProposals.get(e);
      }
      function M(e) {
        let t = !1;
        for (const n of D.Get().m_rgKnownPriceKeys) {
          let i = D.Get().GetPublishedPrice(e, n);
          t = t || (0 != i && void 0 !== i);
        }
        return t;
      }
      function U(e) {
        const t = B(e),
          n = [];
        for (const i of D.Get().m_rgKnownPriceKeys) {
          const a = t.prices[i],
            s = D.Get().GetPublishedPrice(e, i);
          a != s &&
            n.push({
              packageID: e,
              strPriceKey: i,
              nPriceInCents: a,
              nOldPriceInCents: s,
            });
        }
        return n;
      }
      function T() {
        return D.Get().m_rgKnownPriceKeys;
      }
      function F(e) {
        let t = D.Get().m_mapPriceKeyDescriptions.get(e);
        return t ? t.strDescription : "";
      }
      function V(e) {
        return r.useCallback(() => {
          D.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function K(e) {
        return r.useCallback(() => {
          D.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function j(e) {
        return r.useCallback(() => {
          D.Get().CancelProposal(e);
        }, [e]);
      }
      function x() {
        const [e, t] = r.useState(D.Get().m_strDisplayPriceKey),
          n = D.Get().m_rgKnownPriceKeys,
          i = r.useCallback((e) => {
            t(e),
              (D.Get().m_strDisplayPriceKey = e),
              D.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: n, fnSetPriceKey: i };
      }
      function W(e) {
        const t = (0, p.NW)();
        return (
          (0, p.Qg)(D.Get().m_allPriceOverridesCallbackList, t),
          D.Get().BHasLocalPriceOverrides(e)
        );
      }
      function Q(e) {
        return D.Get().BHasLocalPriceOverrides(e);
      }
      function H() {
        const [e, t] = r.useState(() => D.Get().GetAllLocalPriceOverrides());
        return (0, p.Qg)(D.Get().m_allPriceOverridesCallbackList, t), e;
      }
      function z(e) {
        return (0, v.SZ)(() => D.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function q() {
        return r.useCallback(() => {
          var e;
          return (
            (null === (e = D.Get().GetAllLocalPriceOverrides()) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }, []);
      }
      function J() {
        return r.useCallback(() => D.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function X() {
        const e = [],
          t = r.useRef(new Map());
        D.Get().m_mapPriceGuidelines.forEach((n, i) => {
          const a = n.get("USD");
          e.push(a), t.current.set(a, i);
        }),
          e.sort((e, t) => e - t);
        const n = r.useCallback((e, n) => {
          const i = t.current.get(n);
          D.Get()
            .m_mapPriceGuidelines.get(i)
            .forEach((t, n) => D.Get().OverridePrice(e, n, t));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: n };
      }
      function $() {
        return r.useCallback(
          (e, t, n) => D.Get().SubmitProposalToServer(e, t, n),
          [],
        );
      }
      function Z() {
        return r.useCallback(
          (e, t) => D.Get().PublishApprovedProposal(e, t, 6e4),
          [],
        );
      }
      function Y(e) {
        let t = [];
        const n = D.Get().m_rgKnownPriceKeys;
        for (let i of e) {
          if (M(i)) continue;
          let e = !1;
          for (const t of n) {
            if (!D.Get().BPriceKeyRequired(t)) continue;
            if (!D.Get().GetPrice(i, t)) {
              e = !0;
              break;
            }
          }
          e && t.push(i);
        }
        return t;
      }
    },
    16169: (e, t, n) => {
      "use strict";
      n.d(t, {
        B6: () => A,
        E5: () => F,
        E_: () => U,
        Eh: () => f,
        HU: () => N,
        JW: () => T,
        LX: () => E,
        TB: () => B,
        _9: () => O,
        dy: () => K,
        ho: () => W,
        hr: () => R,
        k: () => j,
        pl: () => L,
        s$: () => w,
        w6: () => i,
        yn: () => M,
        z$: () => x,
      });
      var i,
        a = n(65395),
        s = n(16586),
        o = n(36998),
        r = n(19533),
        c = n(2220),
        l = n(7164),
        u = n(89526),
        d = n(85651),
        p = n(92616),
        g = n(85246),
        m = n(4306),
        _ = n(81349),
        v = n(25508),
        h = n(32765),
        D = n(86873);
      function k(e, t) {
        var n, i;
        return (
          !!e == !!t &&
          (null == e ? void 0 : e.packageID) ==
            (null == t ? void 0 : t.packageID) &&
          (null == e ? void 0 : e.discountEventID) ==
            (null == t ? void 0 : t.discountEventID) &&
          (null == e ? void 0 : e.eState) == (null == t ? void 0 : t.eState) &&
          (null === (n = null == e ? void 0 : e.rgConflictDetails) ||
          void 0 === n
            ? void 0
            : n.length) ==
            (null === (i = null == t ? void 0 : t.rgConflictDetails) ||
            void 0 === i
              ? void 0
              : i.length) &&
          (null == e ? void 0 : e.optInReg) ==
            (null == t ? void 0 : t.optInReg) &&
          P(null == e ? void 0 : e.discount, null == t ? void 0 : t.discount) &&
          (null == e ? void 0 : e.nBaseAppID) ==
            (null == t ? void 0 : t.nBaseAppID) &&
          (null == e ? void 0 : e.bChangedLocally) ==
            (null == t ? void 0 : t.bChangedLocally)
        );
      }
      function P(e, t) {
        var n;
        return (
          (!t &&
            0 ==
              (null !== (n = null == e ? void 0 : e.nDiscountPct) &&
              void 0 !== n
                ? n
                : 0)) ||
          (!!t && t.nDiscountPct == (null == e ? void 0 : e.nDiscountPct))
        );
      }
      !(function (e) {
        (e[(e.k_ELoading = 0)] = "k_ELoading"),
          (e[(e.k_EOkToDiscount = 1)] = "k_EOkToDiscount"),
          (e[(e.k_ENeedsOptIn = 2)] = "k_ENeedsOptIn"),
          (e[(e.k_EOptInOptedOut = 3)] = "k_EOptInOptedOut"),
          (e[(e.k_EOptInRestricted = 4)] = "k_EOptInRestricted"),
          (e[(e.k_EOptInNoBaseAppToRegister = 5)] =
            "k_EOptInNoBaseAppToRegister"),
          (e[(e.k_EJustReleased = 6)] = "k_EJustReleased"),
          (e[(e.k_EPriceIncreased = 7)] = "k_EPriceIncreased"),
          (e[(e.k_ECooldownWindow = 8)] = "k_ECooldownWindow"),
          (e[(e.k_EOverlapsExisting = 9)] = "k_EOverlapsExisting"),
          (e[(e.k_ENoAppInRequiredList = 10)] = "k_ENoAppInRequiredList"),
          (e[(e.k_EOptInMultiAppPackageRegisterSomeGame = 11)] =
            "k_EOptInMultiAppPackageRegisterSomeGame");
      })(i || (i = {}));
      const f = 30,
        E = f * v._H.PerDay - 1.5 * v._H.PerHour,
        I = 10 * v._H.PerMinute;
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
            (this.m_localPackageDiscountOverrideCallbackList = new g.pB()),
            "dev" == h.De.WEB_UNIVERSE &&
              (window.g_DiscountGridEditStore = this);
        }
        Init() {
          for (const e of (0, r.MQ)())
            G.Get().ComputePackageState(e),
              (0, o.XM)(e).Register(() => {
                G.Get().ComputePackageState(e);
              });
          (0, D.ix)().Register(() => {
            for (const e of (0, r.MQ)()) G.Get().ComputePackageState(e, !0);
          }),
            G.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(e, t, n) {
          var a;
          const s =
            null === (a = G.Get().m_mapPackageStateForDiscountEvents.get(e)) ||
            void 0 === a
              ? void 0
              : a.get(t);
          if ((null == s ? void 0 : s.eState) != i.k_EOkToDiscount)
            return (
              console.error(
                "Cannot change discount in current state:",
                s.eState,
              ),
              null
            );
          const o = s.discount,
            r = (0, D.f0)(t),
            c = {
              nDiscountID: null == o ? void 0 : o.nDiscountID,
              packageID: e,
              nDiscountPct: n,
              strDiscountName: r.name,
              strDiscountDescription: r.description,
              rtStartDate: r.start_date,
              rtEndDate: r.end_date,
              discountEventID: r.id,
              bChangedLocally: !0,
            };
          return P(c, o)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(e) ||
                this.m_mapLocalPackageDiscountOverrides.set(e, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(e).set(t, c),
              this.ComputePackageState(e),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides(),
              ),
              c);
        }
        GetHighestPackageDiscount(e) {
          let t = this.m_mapPackageStateForDiscountEvents.get(e);
          if (!t) return 0;
          let n = 0;
          return (
            t.forEach((e, t) => {
              var a;
              e.eState == i.k_EOkToDiscount &&
                (n = Math.max(
                  n,
                  (null === (a = e.discount) || void 0 === a
                    ? void 0
                    : a.nDiscountPct) || 0,
                ));
            }),
            n
          );
        }
        GetLocalPackageDiscountOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((t) =>
              t.forEach((t) => {
                P(t, t.nDiscountID && (0, o._J)(t.nDiscountID)) || e.push(t);
              }),
            ),
            e.sort(y),
            e
          );
        }
        DiscardAllLocalPackageDiscountOverrides(e) {
          this.m_mapLocalPackageDiscountOverrides.clear();
          for (const t of e) this.ComputePackageState(t);
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
        }
        DiscardLocalPackageDiscountOverride(e, t) {
          var n;
          null === (n = this.m_mapLocalPackageDiscountOverrides.get(e)) ||
            void 0 === n ||
            n.delete(t),
            this.ComputePackageState(e),
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
              this.GetLocalPackageDiscountOverrides(),
            );
        }
        OptInRegistrationUpdatedForApp(e, t) {
          const n = Array.from(this.m_mapPackageStateForDiscountEvents.values())
            .map((e) => e.get(t))
            .filter((t) => (null == t ? void 0 : t.nBaseAppID) == e)
            .map((e) => e.packageID);
          null == n || n.forEach((e) => this.ComputePackageState(e));
        }
        GetPackageDiscountsIncludingOverrides(e) {
          var t;
          const n = (0, d.kl)() - E,
            i = (0, o.co)(e);
          if (!i) return null;
          const a = new Map(
            i.filter((e) => e.rtEndDate > n).map((e) => [e.discountEventID, e]),
          );
          return (
            null === (t = this.m_mapLocalPackageDiscountOverrides.get(e)) ||
              void 0 === t ||
              t.forEach((e, t) => {
                P(e, a.get(t)) || a.set(t, e);
              }),
            a
          );
        }
        GetDiscountGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapDiscountGridCellCallbackList.has(e) ||
            this.m_mapDiscountGridCellCallbackList.set(e, new Map());
          const n = this.m_mapDiscountGridCellCallbackList.get(e);
          return n.has(t) || n.set(t, new g.pB()), n.get(t);
        }
        GetDiscountPackageCallbackList(e) {
          if (!e) return null;
          let t = this.m_mapDiscountPackageCallbackList.get(e);
          return (
            t ||
              ((t = new g.pB()),
              this.m_mapDiscountPackageCallbackList.set(e, t)),
            t
          );
        }
        GetDiscountEventColumnCallbackList(e) {
          return e
            ? (this.m_mapDiscountEventColumnCallbackList.has(e) ||
                this.m_mapDiscountEventColumnCallbackList.set(e, new g.pB()),
              this.m_mapDiscountEventColumnCallbackList.get(e))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(e) {
          const t = [];
          return (
            G.Get().m_mapPackageStateForDiscountEvents.forEach((n, i) =>
              t.push(n.get(e)),
            ),
            t
          );
        }
        ComputePackageState(e, t) {
          var n, o;
          const r = p.Z.Get().GetPackage(e);
          if (!r) return;
          const l = (0, D.wQ)(),
            u = (0, c.R1)(r),
            d = u.nBaseAppID;
          let g = d && s.qh.Get().GetOptInRegistrationAndEligibilityForApp(d);
          d ||
            g ||
            (g = s.qh
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                r.GetIncludedAppIDs(),
              ));
          const m = this.GetPackageDiscountsIncludingOverrides(e),
            _ = !m,
            v = _
              ? null
              : Array.from(m.values()).sort(
                  (e, t) => e.rtStartDate - t.rtStartDate,
                );
          this.m_mapPackageStateForDiscountEvents.has(e) ||
            this.m_mapPackageStateForDiscountEvents.set(e, new Map());
          const h = this.m_mapPackageStateForDiscountEvents.get(e);
          for (const s of l) {
            if (t && h.has(s.id)) continue;
            const c = { packageID: e, discountEventID: s.id, nBaseAppID: d };
            if (
              ((c.discount = null == m ? void 0 : m.get(s.id)),
              (c.bChangedLocally = !!(null === (n = c.discount) || void 0 === n
                ? void 0
                : n.bChangedLocally)),
              _)
            )
              c.eState = i.k_ELoading;
            else if (
              (null === (o = c.discount) || void 0 === o
                ? void 0
                : o.nDiscountPct) > 0
            ) {
              c.eState = i.k_EOkToDiscount;
              const e =
                s.opt_in_name && (null == g ? void 0 : g.get(s.opt_in_name));
              e && (c.optInReg = e);
            } else {
              if (((c.eState = i.k_EOkToDiscount), b(s, r)))
                c.eState = i.k_ENoAppInRequiredList;
              else if (s.opt_in_name) {
                const { ePackageDiscountState: e, optInRegistration: t } = C(
                  s.opt_in_name,
                  g,
                  r,
                  u,
                  s,
                );
                (c.eState = e), (c.optInReg = t);
              }
              if (
                c.eState != i.k_ENoAppInRequiredList &&
                c.eState != i.k_EOptInRestricted &&
                c.eState != i.k_EOptInNoBaseAppToRegister
              ) {
                const t = S(e, s, v);
                t.ePackageDiscountState != i.k_EOkToDiscount &&
                  ((c.eState = t.ePackageDiscountState),
                  (c.rgConflictDetails = t.rgConflictingDiscounts.map((e) => {
                    var t, n;
                    return null !==
                      (n =
                        null === (t = (0, a.fH)(e.discountEventID)) ||
                        void 0 === t
                          ? void 0
                          : t.name) && void 0 !== n
                      ? n
                      : e.strDiscountName;
                  })));
              }
            }
            k(c, h.get(s.id)) ||
              (h.set(s.id, c),
              this.GetDiscountPackageCallbackList(e).Dispatch(),
              this.GetDiscountGridCellCallbackList(e, s.id).Dispatch(c),
              this.GetDiscountEventColumnCallbackList(s.id).Dispatch(
                this.GetAllPackageStatesForDiscountEvent(s.id),
              ));
          }
        }
        GetAvailableDiscountEventsInRange(e, t, n) {
          const a = this.m_mapPackageStateForDiscountEvents.get(e),
            s = new Set([
              i.k_EOkToDiscount,
              i.k_EOptInMultiAppPackageRegisterSomeGame,
              i.k_ENeedsOptIn,
              i.k_EOptInOptedOut,
            ]);
          return (0, D.wQ)()
            .filter(
              (e) =>
                t <= e.start_date &&
                e.end_date <= n &&
                s.has(a.get(e.id).eState),
            )
            .map((e) => e.id);
        }
        GetFutureDiscountRanges(e) {
          const t = p.Z.Get().GetPackage(e),
            n = this.GetPackageDiscountsIncludingOverrides(e);
          if (!t || !n) return [];
          const s = Array.from(n.values()).sort(
              (e, t) => e.rtStartDate - t.rtStartDate,
            ),
            o = (0, d.kl)(),
            r = Math.max(o, t.GetReleaseDateRTime() + E, (0, D.QM)(e) + E),
            c = [],
            u = new Set();
          let g = r;
          for (let t = 0; t < s.length; t++) {
            const n = s[t];
            if (0 == n.nDiscountPct) continue;
            const i = (0, a.fH)(n.discountEventID);
            let o = n.rtStartDate - E;
            const r =
              (null == i ? void 0 : i.collision_type) ==
              a.dH.k_EDiscountCollisionType_MajorSales;
            if (r && ((o = n.rtStartDate + I), t + 1 < s.length)) {
              const e = s[t + 1],
                n = (0, D.f0)(e.discountEventID);
              (null == n ? void 0 : n.collision_type) !=
                a.dH.k_EDiscountCollisionType_MajorSales &&
                (o = Math.min(o, e.rtStartDate - E));
            }
            if (g + v._H.PerDay < o) {
              const t = {
                bIsAvailable: !0,
                rtStartDate: g,
                rtEndDate: o,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  e,
                  g,
                  o,
                ),
              };
              c.push(t), t.rgDiscountEventIDs.forEach((e) => u.add(e));
            }
            const d = {
              bIsAvailable: !1,
              rtStartDate: n.rtStartDate,
              rtEndDate: n.rtEndDate,
              discount: n,
              rgDiscountEventIDs: [n.discountEventID],
            };
            if (
              (c.push(d),
              u.add(n.discountEventID),
              (g = n.rtEndDate + E),
              r && ((g = n.rtEndDate - I), t - 1 >= 0))
            ) {
              const e = s[t - 1],
                n = (0, D.f0)(e.discountEventID);
              (null == n ? void 0 : n.collision_type) !=
                a.dH.k_EDiscountCollisionType_MajorSales &&
                (g = Math.max(g, e.rtEndDate + E));
            }
            const p = (0, l._)(g);
            p - g <= 2 * v._H.PerHour && (g = p);
          }
          const m = (0, l._)(o + v._H.PerYear / 2);
          if (g + v._H.PerDay < m) {
            const t = {
              bIsAvailable: !0,
              rtStartDate: g,
              rtEndDate: m,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                e,
                g,
                m,
              ),
            };
            c.push(t), t.rgDiscountEventIDs.forEach((e) => u.add(e));
          }
          const _ = (0, D.wQ)().filter(
            (t) =>
              t.collision_type == a.dH.k_EDiscountCollisionType_MajorSales &&
              !u.has(t.id) &&
              this.m_mapPackageStateForDiscountEvents.get(e).get(t.id).eState ==
                i.k_EOkToDiscount,
          );
          for (const e of _)
            for (let t = 0; t < c.length; t++)
              if (
                c[t].rtStartDate <= e.start_date &&
                (t == c.length - 1 || e.start_date < c[t + 1].rtStartDate)
              ) {
                const n = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: e.start_date,
                  rtEndDate: e.end_date,
                  rgDiscountEventIDs: [e.id],
                };
                c.splice(t + 1, 0, n);
                break;
              }
          return c;
        }
      }
      function S(e, t, n) {
        let s = i.k_EOkToDiscount;
        const o = [];
        let r = !1;
        const c = p.Z.Get().GetPackage(e);
        if ((null == c ? void 0 : c.GetReleaseDateRTime()) > t.start_date - E)
          return (
            (s = i.k_EJustReleased),
            {
              ePackageDiscountState: s,
              rgConflictingDiscounts: o,
              bChangedLocally: r,
            }
          );
        if ((0, D.QM)(e) > t.start_date - E)
          return (
            (s = i.k_EPriceIncreased),
            {
              ePackageDiscountState: s,
              rgConflictingDiscounts: o,
              bChangedLocally: r,
            }
          );
        for (const e of n) {
          if (t.id == e.discountEventID) continue;
          const n = (0, a.fH)(e.discountEventID),
            c =
              t.collision_type == a.dH.k_EDiscountCollisionType_MajorSales ||
              (null == n ? void 0 : n.collision_type) ==
                a.dH.k_EDiscountCollisionType_MajorSales,
            l = c ? t.start_date + I : t.start_date - E,
            u = c ? t.end_date - I : t.end_date + E;
          if (e.rtEndDate > l && u > e.rtStartDate) {
            if (((r = r || e.bChangedLocally), 0 == e.nDiscountPct)) continue;
            o.push(e), (s = c ? i.k_EOverlapsExisting : i.k_ECooldownWindow);
          }
        }
        return {
          ePackageDiscountState: s,
          rgConflictingDiscounts: o,
          bChangedLocally: r,
        };
      }
      function C(e, t, n, a, o) {
        let r,
          c = i.k_EOptInNoBaseAppToRegister;
        if (t)
          (r = t.get(e)),
            !r || r.restricted || r.pruned
              ? ((c = i.k_EOptInRestricted), (r = { restricted: !0 }))
              : (c = r.opt_in
                  ? i.k_EOkToDiscount
                  : r.invited || !r.time_opted_in
                  ? i.k_ENeedsOptIn
                  : i.k_EOptInOptedOut);
        else if (!a.nBaseAppID) {
          const e = n
            .GetIncludedAppIDs()
            .map((e) => {
              var t;
              return null ===
                (t = s.qh.Get().GetOptInRegistrationAndEligibilityForApp(e)) ||
                void 0 === t
                ? void 0
                : t.get(o.opt_in_name);
            })
            .filter(Boolean);
          e.some((e) => e.opt_in)
            ? (c = i.k_EOkToDiscount)
            : e.some((e) => !e.restricted && !e.pruned) &&
              (c = i.k_EOptInMultiAppPackageRegisterSomeGame);
        }
        return { ePackageDiscountState: c, optInRegistration: r };
      }
      function b(e, t) {
        var n, i, a;
        if ((null === (n = e.appids) || void 0 === n ? void 0 : n.length) > 0) {
          if (
            null === (i = null == t ? void 0 : t.GetIncludedAppIDs()) ||
            void 0 === i
              ? void 0
              : i.length
          ) {
            const n = new Set(e.appids);
            for (const e of t.GetIncludedAppIDs()) {
              if (n.has(e)) return !1;
              const t =
                null === (a = p.Z.Get().GetApp(e)) || void 0 === a
                  ? void 0
                  : a.GetParentAppID();
              if (t && n.has(t)) return !1;
            }
          }
          return !0;
        }
        return !1;
      }
      function y(e, t) {
        var n, i;
        if (e.packageID != t.packageID) {
          const a =
              null === (n = p.Z.Get().GetPackage(e.packageID)) || void 0 === n
                ? void 0
                : n.GetName(),
            s =
              null === (i = p.Z.Get().GetPackage(t.packageID)) || void 0 === i
                ? void 0
                : i.GetName();
          return (0, _.eT)(a, s);
        }
        {
          const n = 0 == e.nDiscountPct;
          return n != (0 == t.nDiscountPct)
            ? n
              ? -1
              : 1
            : e.rtStartDate - t.rtStartDate;
        }
      }
      function R() {
        return u.useCallback(() => {
          G.Get();
        }, []);
      }
      function L() {
        const [e, t] = u.useState(G.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, m.Qg)(G.Get().GetLocalPackageDiscountOverrideCallbackList(), t), e
        );
      }
      function A() {
        return u.useCallback(() => {
          var e;
          return (
            (null === (e = G.Get().GetLocalPackageDiscountOverrides()) ||
            void 0 === e
              ? void 0
              : e.length) > 0
          );
        }, []);
      }
      function O() {
        return u.useCallback(
          (e) => G.Get().DiscardAllLocalPackageDiscountOverrides(e),
          [],
        );
      }
      function w() {
        return u.useCallback(
          (e, t) => G.Get().OptInRegistrationUpdatedForApp(e, t),
          [],
        );
      }
      function B() {
        return u.useCallback(
          (e, t) => G.Get().DiscardLocalPackageDiscountOverride(e, t),
          [],
        );
      }
      function N(e, t) {
        var n, a, s;
        const o =
          null === (n = G.Get().m_mapPackageStateForDiscountEvents.get(e)) ||
          void 0 === n
            ? void 0
            : n.get(t);
        return (null == o ? void 0 : o.eState) == i.k_EOkToDiscount
          ? null !==
              (s =
                null === (a = null == o ? void 0 : o.discount) || void 0 === a
                  ? void 0
                  : a.nDiscountPct) && void 0 !== s
            ? s
            : 0
          : null;
      }
      function M(e, t) {
        const [n, i] = u.useState(() => {
          var n;
          return null ===
            (n = G.Get().m_mapPackageStateForDiscountEvents.get(e)) ||
            void 0 === n
            ? void 0
            : n.get(t);
        });
        (0, m.Qg)(G.Get().GetDiscountGridCellCallbackList(e, t), i);
        return {
          packageState: n,
          fnSetDiscountPct: u.useCallback(
            (n) => {
              G.Get().OverridePackageDiscountPct(e, t, n);
            },
            [e, t],
          ),
        };
      }
      function U() {
        return u.useCallback((e, t, n) => {
          const i = [];
          for (const a of n) {
            const n = G.Get().OverridePackageDiscountPct(a, t, e);
            n && i.push(n);
          }
          return i;
        }, []);
      }
      function T(e) {
        const t = F(e);
        return u.useMemo(
          () => ({
            nAlreadySet: t.alreadySet.size,
            nAvailable: t.available.size,
            nConflicts: t.conflicts.size,
            nNeedRegistration: t.needRegistration.size,
            nIneligibile: t.ineligibile.size,
          }),
          [t],
        );
      }
      function F(e) {
        const [t, n] = u.useState(() => V(e)),
          i = u.useCallback(() => {
            n(V(e));
          }, [e]);
        return (
          u.useEffect(i, [e, i]),
          (0, m.Qg)(G.Get().GetDiscountEventColumnCallbackList(e), i),
          t
        );
      }
      function V(e) {
        var t, n;
        const a = G.Get().GetAllPackageStatesForDiscountEvent(e),
          s = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const e of a)
          switch (null == e ? void 0 : e.eState) {
            case i.k_ELoading:
              break;
            case i.k_EOkToDiscount:
              (null !==
                (n =
                  null === (t = e.discount) || void 0 === t
                    ? void 0
                    : t.nDiscountPct) && void 0 !== n
                ? n
                : 0) > 0
                ? s.alreadySet.add(e.packageID)
                : s.available.add(e.packageID);
              break;
            case i.k_EJustReleased:
            case i.k_EPriceIncreased:
            case i.k_ECooldownWindow:
            case i.k_EOverlapsExisting:
              s.conflicts.add(e.packageID);
              break;
            case i.k_ENeedsOptIn:
            case i.k_EOptInOptedOut:
              s.needRegistration.add(e.packageID);
              break;
            case i.k_EOptInRestricted:
            case i.k_EOptInNoBaseAppToRegister:
            case i.k_ENoAppInRequiredList:
              s.ineligibile.add(e.packageID);
          }
        return s;
      }
      function K(e) {
        return (
          !!(0, o.LT)(e).some((e) => e.nDiscountPct > 0) ||
          !(
            !G.IsInitialized() ||
            !G.Get()
              .GetAllPackageStatesForDiscountEvent(e)
              .some((e) => {
                var t, n;
                return (
                  (null !==
                    (n =
                      null === (t = e.discount) || void 0 === t
                        ? void 0
                        : t.nDiscountPct) && void 0 !== n
                    ? n
                    : 0) > 0
                );
              })
          )
        );
      }
      function j(e) {
        if ((0, o.kk)(e)) return !0;
        const t = (0, a.fH)(e);
        if (!(null == t ? void 0 : t.opt_in_name)) return !0;
        const n = s.qh.Get().GetAllOptInRegistrations(t.opt_in_name);
        return (
          !!(null == n ? void 0 : n.length) &&
          n.some((e) => !e.restricted && !e.pruned)
        );
      }
      function x(e) {
        const t = (function () {
            const [e, t] = u.useState(G.IsInitialized());
            return (0, m.Qg)(G.s_initializationCallbackList, t), e;
          })(),
          [n, i] = u.useState(t ? G.Get().GetFutureDiscountRanges(e) : []),
          a = u.useCallback(
            () => i(t ? G.Get().GetFutureDiscountRanges(e) : []),
            [e, t],
          );
        return (
          (0, m.Qg)(
            t && G.Get().GetLocalPackageDiscountOverrideCallbackList(),
            a,
          ),
          (0, m.Qg)(t && (0, o.XM)(e), a),
          u.useEffect(a, [e, t, a]),
          n
        );
      }
      function W(e) {
        let [t, n] = u.useState(() => G.Get().GetHighestPackageDiscount(e)),
          i = u.useCallback(() => {
            n(G.Get().GetHighestPackageDiscount(e));
          }, [e, n]);
        return (0, m.Qg)(G.Get().GetDiscountPackageCallbackList(e), i), t;
      }
      G.s_initializationCallbackList = new g.pB();
    },
    86873: (e, t, n) => {
      "use strict";
      n.d(t, {
        $f: () => P,
        D_: () => G,
        P6: () => I,
        QB: () => i,
        QM: () => m,
        Zq: () => f,
        f0: () => v,
        im: () => D,
        ix: () => h,
        wQ: () => _,
        x9: () => k,
        y4: () => E,
      });
      var i,
        a = n(89526),
        s = n(85651),
        o = n(85246),
        r = n(4306),
        c = n(32765),
        l = n(65395),
        u = n(36998),
        d = n(16169);
      !(function (e) {
        (e.k_OptionDeepest = "deepest-past"),
          (e.k_OptionMostRecent = "most-recent"),
          (e.k_OptionNextAvailable = "next-available");
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
            "dev" == c.De.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        Init() {
          var e;
          const t = (0, c.kQ)("price_increase_times", "application_config");
          if (
            (("dev" != c.De.WEB_UNIVERSE && "beta" != c.De.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", t),
            this.BIsPriceIncreasePayloadValid(t))
          )
            for (let e in t)
              this.m_mapLastTimeRaisedPrices.set(Number(e), t[e]);
          else
            "dev" == c.De.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            null !== (e = window.localStorage.getItem(p)) && void 0 !== e
              ? e
              : i.k_OptionDeepest),
            this.UpdateDiscountEventsForGrid(),
            (0, l.i4)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, u.v6)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const e = (0, l.o)(),
            t = (0, u.Su)(),
            n = new Set(e.map((e) => e.id)),
            i = [],
            a = (0, s.kl)();
          for (const e of t)
            e.rtEndDate > a &&
              (n.has(e.discountEventID) ||
                (i.push({
                  id: e.discountEventID,
                  name: e.strDiscountName,
                  start_date: e.rtStartDate,
                  end_date: e.rtEndDate,
                  description: e.strDiscountDescription,
                }),
                n.add(e.discountEventID)));
          (this.m_rgDiscountEvents &&
            n.size == this.m_rgDiscountEvents.length &&
            !this.m_rgDiscountEvents.some((e) => !n.has(e.id))) ||
            ((this.m_rgDiscountEvents = i.concat(e)),
            this.m_rgDiscountEvents.sort((e, t) =>
              e.start_date == t.start_date
                ? e.end_date - t.end_date
                : e.start_date - t.start_date,
            ),
            (this.m_mapDiscountEventsByID = new Map(
              this.m_rgDiscountEvents.map((e) => [e.id, e]),
            )),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_discountEventsCallbackList.Dispatch(
              this.m_rgDiscountEvents,
            ));
        }
        UpdateVisibleDiscountEventIDs() {
          this.SetEventSelectionParametersFromURL(),
            (this.m_setVisibleDiscountEventIDs = new Set());
          for (const e of this.m_rgDiscountEvents) {
            let t = null == this.m_strSelectedDiscountEventID;
            t && !this.m_bIncludeCustomEvents && (0, u.kk)(e.id) && (t = !1),
              t &&
                !this.m_bIncludeWeeklongEvents &&
                e.id.startsWith("weeklongdeal_") &&
                !(0, d.dy)(e.id) &&
                (t = !1),
              !t ||
                this.m_bIncludeIneligibleEvents ||
                (0, d.k)(e.id) ||
                (t = !1),
              this.m_strSelectedDiscountEventID == e.id && (t = !0),
              t && this.m_setVisibleDiscountEventIDs.add(e.id);
          }
          this.m_visibleDiscountEventIDsCallbackList.Dispatch(
            this.m_setVisibleDiscountEventIDs,
          );
        }
        BIsPriceIncreasePayloadValid(e) {
          const t = e;
          if (t && "object" == typeof t) {
            for (let e in t)
              if (isNaN(parseInt(e)) || "number" != typeof t[e]) return !1;
            return !0;
          }
          return !1;
        }
        SetEventSelectionParametersFromURL() {
          const e = new URLSearchParams(window.location.search);
          if (e.has("de")) {
            const t = decodeURIComponent(e.get("de"));
            this.m_mapDiscountEventsByID.has(t) &&
              (this.m_strSelectedDiscountEventID = t);
          }
          if (e.has("wd")) {
            const t = e.get("wd");
            this.m_bIncludeWeeklongEvents = "0" != t;
          }
          if (e.has("cd")) {
            const t = e.get("cd");
            this.m_bIncludeCustomEvents = "0" != t;
          }
          if (e.has("cf")) {
            const t = e.get("cf");
            this.m_bIncludeConflictsInSingleEventView = "0" != t;
          }
        }
        HandleEventSelectionChangeAndNotifyListeners() {
          const e = new URL(window.location.href);
          this.m_strSelectedDiscountEventID
            ? e.searchParams.set(
                "de",
                encodeURIComponent(this.m_strSelectedDiscountEventID),
              )
            : e.searchParams.delete("de"),
            this.m_bIncludeWeeklongEvents
              ? e.searchParams.set("wd", "1")
              : e.searchParams.delete("wd"),
            this.m_bIncludeCustomEvents
              ? e.searchParams.delete("cd")
              : e.searchParams.set("cd", "0"),
            this.m_bIncludeConflictsInSingleEventView
              ? e.searchParams.delete("cf")
              : e.searchParams.set("cf", "0"),
            window.history.replaceState({}, "", e.toString()),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_gridEventSelectionParametersCallbackList.Dispatch(
              this.GetEventSelectionParameters(),
            );
        }
        GetEventSelectionParameters() {
          return {
            bSingleDiscountEventView: null != this.m_strSelectedDiscountEventID,
            strSelectedEvent: this.m_strSelectedDiscountEventID,
            fnSelectEvent: (e) => {
              (this.m_strSelectedDiscountEventID = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
            fnSetIncludeWeeklongEvents: (e) => {
              (this.m_bIncludeWeeklongEvents = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeCustomEvents: this.m_bIncludeCustomEvents,
            fnSetIncludeCustomEvents: (e) => {
              (this.m_bIncludeCustomEvents = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeConflictsInSingleEventView:
              this.m_bIncludeConflictsInSingleEventView,
            fnSetIncludeConflictsInSingleEventView: (e) => {
              (this.m_bIncludeConflictsInSingleEventView = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
          };
        }
      }
      function m(e) {
        var t;
        return null !== (t = g.Get().m_mapLastTimeRaisedPrices.get(e)) &&
          void 0 !== t
          ? t
          : 0;
      }
      function _() {
        return g.Get().m_rgDiscountEvents;
      }
      function v(e) {
        return g.Get().m_mapDiscountEventsByID.get(e);
      }
      function h() {
        return g.Get().m_discountEventsCallbackList;
      }
      function D() {
        const [e, t] = a.useState(g.Get().m_rgDiscountEvents);
        return (0, r.Qg)(g.Get().m_discountEventsCallbackList, t), e;
      }
      function k() {
        const [e, t] = a.useState(g.Get().m_setVisibleDiscountEventIDs);
        return (0, r.Qg)(g.Get().m_visibleDiscountEventIDsCallbackList, t), e;
      }
      function P(e = !0) {
        return g.Get().m_setVisibleDiscountEventIDs;
      }
      function f(e) {
        const [t, n] = a.useState(g.Get().m_mapDiscountEventsByID.get(e)),
          i = a.useCallback(
            () => n(g.Get().m_mapDiscountEventsByID.get(e)),
            [e],
          );
        return (
          (0, r.Qg)(g.Get().m_discountEventsCallbackList, i),
          a.useEffect(i, [e, i]),
          t
        );
      }
      function E(e = !0) {
        const [t, n] = a.useState(g.Get().GetEventSelectionParameters()),
          i = e ? g.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, r.Qg)(i, n), t;
      }
      function I() {
        const [e, t] = a.useState(g.Get().m_eRelatedDiscountView);
        (0, r.Qg)(g.Get().m_RelatedDiscountViewCallbackList, t);
        return [
          e,
          a.useCallback((e) => {
            (g.Get().m_eRelatedDiscountView = e),
              window.localStorage.setItem(p, e),
              g.Get().m_RelatedDiscountViewCallbackList.Dispatch(e);
          }, []),
        ];
      }
      function G() {
        return a.useCallback(() => {
          g.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    93923: (e, t, n) => {
      "use strict";
      n.d(t, {
        A$: () => G,
        Eg: () => y,
        Ii: () => C,
        JP: () => b,
        O7: () => I,
        UA: () => f,
        zQ: () => k,
        zV: () => E,
      });
      var i = n(89526),
        a = n(84343),
        s = n(32765),
        o = n(14826),
        r = n(7851),
        c = n.n(r),
        l = n(20614),
        u = n(61785),
        d = n(66104),
        p = n(64403),
        g = n.n(p),
        m = n(36998),
        _ = n(16169);
      function v(e) {
        const { cell: t } = e,
          n = t.getRow().getData().packageID || 0,
          a = (0, _.ho)(n);
        let s = (0, m.Qy)(n) < a,
          r = g()(c().PackageNameColumn, s && c().PackagePricesBelowMin),
          l = s
            ? (0, o.Xx)("#PackageGrid_VisitPackageDiscount_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return i.createElement(
          D,
          Object.assign({ className: r, toolTip: l }, e),
        );
      }
      function h(e) {
        const { cell: t } = e,
          n = t.getRow().getData().packageID || 0,
          a = (0, d.qH)(n);
        let s = g()(c().PackageNameColumn, a && c().PackagePricesBelowMin),
          r = a
            ? (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip_Error")
            : (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip");
        return i.createElement(
          D,
          Object.assign({ className: s, toolTip: r }, e),
        );
      }
      function D(e) {
        var t;
        const {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            cell: r,
            className: l,
            toolTip: u,
          } = e,
          d = r.getRow().getData().packageID,
          p =
            null !== (t = r.getValue()) && void 0 !== t
              ? t
              : i.createElement(
                  "span",
                  { className: c().UnknownValue },
                  (0, o.Xx)("#PackageGrid_PackageID", d),
                );
        return i.createElement(
          y,
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
      function k(e) {
        return i.useMemo(
          () => ({
            visible: !0,
            title: (0, o.Xx)("#PackageGrid_Column_PackageID"),
            field: "packageID",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              i.createElement(D, Object.assign({}, e)),
            ),
            cssClass: c().PackageID,
            hozAlign: "right",
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_PackageID_ttip"),
          }),
          [e],
        );
      }
      function P(e, t, n, i) {
        return (
          !!(
            /^\d+$/.test(e) &&
            n.packageID &&
            n.packageID.toString().startsWith(e)
          ) || t.toLowerCase().includes(e.toLowerCase())
        );
      }
      function f(e, t) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_PackageName"),
            field: "packageName",
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              t
                ? i.createElement(v, Object.assign({}, e))
                : i.createElement(h, Object.assign({}, e)),
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
            headerFilterFunc: P,
          }),
          [e, t],
        );
      }
      function E(e) {
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
      function I(e) {
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
      function G(e) {
        const t = e.getCell("packageType"),
          n = t && "function" == typeof t.getValue && t.getValue();
        n && e.getElement().classList.add(n),
          e.getNextRow() || e.getElement().classList.add(c().LastRow);
      }
      function S(e) {
        var t;
        const { fnBLocalChangesExist: n, fnWarnUser: a, cell: r } = e,
          c = r.getRow().getData().appids,
          l =
            null !== (t = null == c ? void 0 : c.length) && void 0 !== t
              ? t
              : 0,
          u = r.getRow().getData().packageID;
        return i.createElement(
          y,
          {
            fnBLocalChangesExist: n,
            fnWarnUser: a,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${u}`,
            strToolTip: (0, o.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == l ? "1 appid" : l + " appids",
        );
      }
      function C(e) {
        return i.useMemo(
          () => ({
            title: (0, o.Xx)("#PackageGrid_Column_AppName"),
            field: "appName",
            sorter: u.yh,
            headerSort: !1,
            formatter: (0, l.reactFormatter)(
              i.createElement(S, Object.assign({}, e)),
            ),
            cssClass: c().AppCount,
            width: 80,
            frozen: !0,
            headerTooltip: (0, o.Xx)("#PackageGrid_Column_AppName_ttip"),
          }),
          [e],
        );
      }
      function b(e, t, n, i) {
        return e == (0, o.Xx)("#PackageGrid_NoBaseGameFoundForPackage")
          ? `<div title='${(0, o.Xx)(
              "#PackageGrid_NoBaseGameExplanation",
            )}' >${e} (?) <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              t,
            )})</span></div>`
          : `<div>${e} <span>(${(0, o.kb)(
              "#PackageGrid_PackageCount",
              t,
            )})</span></div>`;
      }
      function y(e) {
        const {
          fnBLocalChangesExist: t,
          fnWarnUser: n,
          href: s,
          children: o,
          strToolTip: r,
          strClassName: c,
        } = e;
        return i.createElement(
          a.HP,
          { toolTipContent: r, className: c },
          i.createElement(
            "a",
            {
              onClick: (e) => {
                t() && (e.preventDefault(), n(e, s));
              },
              href: s,
            },
            o,
          ),
        );
      }
    },
    62176: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => s });
      var i = n(89526),
        a = n(14826);
      function s(e) {
        const t = i.useCallback(
          (t) => {
            if (e())
              return (
                t.preventDefault(),
                (t.returnValue = (0, a.Xx)(
                  "#PackageGrid_NavigationWarning_Title",
                )),
                t.returnValue
              );
          },
          [e],
        );
        i.useEffect(
          () => (
            window.addEventListener("beforeunload", t),
            () => window.removeEventListener("beforeunload", t)
          ),
          [t],
        );
      }
    },
    61785: (e, t, n) => {
      "use strict";
      n.d(t, { $k: () => g, yh: () => o });
      var i = n(77435),
        a = n(60161),
        s = n(14826);
      function o(e, t, n, i) {
        const a = (0, s.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          o = (0, s.Xx)("#PackageGrid_NoBaseGameFoundForPackage"),
          r = e == a,
          c = e == o,
          l = !r && !c,
          u = t == a,
          d = t == o,
          p = !u && !d;
        if (l && p) return e.localeCompare(t);
        if (l || p) return l ? -1 : 1;
        if (r == u && c == d) {
          const e = n.getData().packageName,
            t = i.getData().packageName;
          return e && t
            ? e.localeCompare(t)
            : e || t
            ? e
              ? -1
              : 1
            : n.getData().packageID - i.getData().packageID;
        }
        return r ? -1 : 1;
      }
      const r = (e) => e.nextElementSibling,
        c = (e) => e.previousElementSibling,
        l = (e, t) => {
          const n = e.getAttribute("tabulator-field"),
            i = e.parentElement;
          let a = i && t(i);
          for (; n && a; ) {
            for (const e of Array.from(a.children))
              if (n == e.getAttribute("tabulator-field")) return e;
            a = t(a);
          }
          return null;
        },
        u = new Map([
          [i.J.UpArrow, (e) => l(e, c)],
          [i.J.RightArrow, r],
          [i.J.DownArrow, (e) => l(e, r)],
          [i.J.LeftArrow, c],
          [i.J.Tab, (e) => l(e, r)],
          [i.J.Enter, (e) => l(e, r)],
        ]);
      function d(e) {
        return (0, a.Jk)(e, (e) => e.classList.contains("tabulator-cell"));
      }
      function p(e) {
        const t = Array.prototype.slice.call(e.children).reverse();
        for (; t.length > 0; ) {
          const e = t.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          t.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function g(e, t) {
        var n;
        const i = u.get(e.keyCode);
        if (!i) return;
        let a = i(d(e.currentTarget));
        for (; a; ) {
          if (
            "none" !=
              (null === (n = a.style) || void 0 === n ? void 0 : n.display) &&
            !a.classList.contains("tabulator-frozen")
          ) {
            const n = p(a);
            if (n) {
              return m(t, d(n)), n.focus(), void e.preventDefault();
            }
          }
          a = i(a);
        }
      }
      function m(e, t) {
        const n = e.columnManager.scrollLeft,
          i = t.offsetWidth,
          a = t.offsetLeft,
          s = a + i,
          o = e.columnManager.element.clientWidth,
          r = e.columnManager.headersElement.clientWidth,
          c = n + o;
        if (a >= c - r && s <= c) return;
        const l = (a + s) / 2 - (o - r / 2),
          u = (r - i) / 4,
          d = l + (l > n ? u : -1 * u);
        e.columnManager.scrollHorizontal(d), e.rowManager.scrollHorizontal(d);
      }
    },
    2220: (e, t, n) => {
      "use strict";
      n.d(t, { R1: () => u, Sx: () => c, xs: () => p });
      var i = n(33940),
        a = n(42735),
        s = n(68562),
        o = n(92616),
        r = n(14826);
      const c = new Set([
          s.Ac.k_EStoreAppType_Game,
          s.Ac.k_EStoreAppType_Mod,
          s.Ac.k_EStoreAppType_Software,
          s.Ac.k_EStoreAppType_Tool,
        ]),
        l = new Set([
          s.Ac.k_EStoreAppType_DLC,
          s.Ac.k_EStoreAppType_Video,
          s.Ac.k_EStoreAppType_Music,
        ]);
      function u(e) {
        var t, n;
        let i,
          a = !1,
          s = !1;
        const u = new Set();
        for (const n of null !==
          (t = null == e ? void 0 : e.GetIncludedAppIDs()) && void 0 !== t
          ? t
          : []) {
          const e = o.Z.Get().GetApp(n);
          if (e && c.has(e.GetAppType())) (a = !0), u.add(e.GetID());
          else if (e && l.has(e.GetAppType())) {
            s = !0;
            const t = e.GetParentAppID();
            t && u.add(t);
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
          contents: a && s ? "BOTH" : a ? "GAME" : s ? "DLC" : null,
          nBaseAppID: i,
        };
      }
      const d = { include_release: !0 };
      function p(e, t) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          if (
            (yield o.Z.Get().HintLoadStorePackages(e, d)) != a.s.k_EResultOK ||
            t.token.reason
          )
            return null;
          const n = [];
          e.map((e) => o.Z.Get().GetPackage(e))
            .filter((e) => !!e)
            .forEach((e) => n.push(...e.GetIncludedAppIDs()));
          const i = Array.from(new Set(n));
          if (
            (yield o.Z.Get().HintLoadStoreApps(i, d)) != a.s.k_EResultOK ||
            t.token.reason
          )
            return null;
          const s = i
              .map((e) => o.Z.Get().GetApp(e))
              .filter((e) => !!(null == e ? void 0 : e.GetParentAppID()))
              .map((e) => e.GetParentAppID()),
            r = Array.from(new Set(s));
          if (
            (yield o.Z.Get().HintLoadStoreApps(r, d)) != a.s.k_EResultOK ||
            t.token.reason
          )
            return null;
          return Array.from(new Set(i.concat(r)));
        });
      }
    },
    7164: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => i, _: () => a });
      const i = "America/Los_Angeles";
      function a(e) {
        const t = n(47812).unix(e).tz(i);
        return (
          t.seconds(0),
          t.minutes(0),
          t.hours(10),
          t.unix() < e && t.hours(34),
          t.unix()
        );
      }
    },
  },
]);

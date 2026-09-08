/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6129],
  {
    72839: (e, t, s) => {
      s.d(t, { Bn: () => l, hS: () => r, rV: () => n });
      var a = s(30570),
        i = s(78327);
      s(38516);
      function n(e, t) {
        e.Body().set_context(r(t));
      }
      function r(e) {
        let t = new a.TS();
        return (
          e || t.set_country_code(i.TS.COUNTRY),
          t.set_language(i.TS.LANGUAGE),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(a.gn.fromObject(t));
      }
    },
    16021: (e, t, s) => {
      s.d(t, { A: () => b });
      var a = s(34629),
        i = s(14947),
        n = s(37085),
        r = s(22837),
        l = s(56545),
        o = s(96059),
        u = s(59411),
        c = s(30570),
        m = s(81393),
        d = s(68797),
        h = s(78327),
        _ = s(72839),
        p = s(75279),
        g = s(6419),
        I = s(63340);
      function f(e, t) {
        if (!e) return t;
        if (!t) return e;
        return {
          include_assets: e.include_assets || t.include_assets,
          include_release: e.include_release || t.include_release,
          include_platforms: e.include_platforms || t.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || t.include_all_purchase_options,
          include_screenshots: e.include_screenshots || t.include_screenshots,
          include_trailers: e.include_trailers || t.include_trailers,
          include_ratings: e.include_ratings || t.include_ratings,
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
          include_full_description:
            e.include_full_description || t.include_full_description,
          include_included_items:
            e.include_included_items || t.include_included_items,
          include_assets_without_overrides:
            e.include_assets_without_overrides ||
            t.include_assets_without_overrides,
          apply_user_filters: e.apply_user_filters || t.apply_user_filters,
          include_links: e.include_links || t.include_links,
          include_extra_details:
            e.include_extra_details || t.include_extra_details,
        };
      }
      async function R(e, t) {
        const s = await e,
          a = await t;
        return s != n.R ? s : a;
      }
      class b {
        k_QueueWaitUntilRequestMS = 5;
        k_nMaxBatchSize = 250;
        m_bReturnUnavailableItems = !1;
        m_mapApps = new Map();
        m_mapPackages = new Map();
        m_mapBundles = new Map();
        m_mapTags = new Map();
        m_mapCreators = new Map();
        m_mapHubCategories = new Map();
        m_setUnavailableApps = new Set();
        m_setUnavailablePackages = new Set();
        m_setUnavailableBundles = new Set();
        m_setUnavailableTags = new Set();
        m_setUnavailableCreators = new Set();
        m_setUnavailableHubCategories = new Set();
        m_setUnavailableDueToCountryRestrictionApps = new Set();
        m_setUnavailableDueToCountryRestrictionPackages = new Set();
        m_setUnavailableDueToCountryRestrictionBundles = new Set();
        m_mapAppsInFlight = new Map();
        m_mapPackageInFlight = new Map();
        m_mapBundleInFlight = new Map();
        m_mapTagsInFlight = new Map();
        m_mapCreatorsInFlight = new Map();
        m_mapHubCategoriesInFlight = new Map();
        m_serviceTransport;
        m_bUsePartnerAPI = !1;
        m_bInitialized = !1;
        m_bActivelyResettingCache = !1;
        m_setPendingAppInfo = new Set();
        m_setPendingBundleInfo = new Set();
        m_setPendingPackageInfo = new Set();
        m_setPendingTagInfo = new Set();
        m_setPendingCreatorInfo = new Set();
        m_setPendingHubCategoryInfo = new Set();
        m_setPendingDataRequest = {};
        m_PendingInfoPromise;
        m_PendingInfoResolve = void 0;
        m_PendingTimer = void 0;
        k_AlreadyResolvedOK = Promise.resolve(n.R);
        k_AlreadyResolvedInvalid = Promise.resolve(n.nO);
        k_AlreadyResolvedBusy = Promise.resolve(n.S7);
        static sm_instance;
        static Get() {
          return (
            b.sm_instance ||
              ((b.sm_instance = new b()),
              (0, I.V)("StoreItemCache", b.sm_instance)),
            b.sm_instance
          );
        }
        static Initialize(e, t) {
          const s = b.Get();
          return (
            (0, m.wT)(
              !s.m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once.",
            ),
            (s.m_serviceTransport = e),
            (s.m_bUsePartnerAPI = !!t),
            (s.m_bInitialized = !0),
            () => {
              (s.m_serviceTransport = void 0),
                (s.m_bUsePartnerAPI = !1),
                (s.m_bInitialized = !1);
            }
          );
        }
        SetSteamInterface(e) {
          this.SetServiceTransport(e.GetServiceTransport());
        }
        SetServiceTransport(e) {
          this.m_serviceTransport = e;
        }
        SetReturnUnavailableItems(e) {
          this.m_bReturnUnavailableItems = e;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        async ResetCache() {
          (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
          let e = [];
          this.m_mapAppsInFlight.forEach((t) => {
            e.push(t.promise);
          }),
            this.m_mapBundleInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapPackageInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapTagsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapCreatorsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapHubCategoriesInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            await Promise.all(e),
            this.m_mapApps.clear(),
            this.m_mapBundles.clear(),
            this.m_mapPackages.clear(),
            this.m_mapTagsInFlight.clear(),
            this.m_mapCreatorsInFlight.clear(),
            this.m_mapHubCategoriesInFlight.clear(),
            (this.m_bActivelyResettingCache = !1);
        }
        static BIsInitialized() {
          return b.Get().m_bInitialized;
        }
        static k_DataRequest_CommonOnly = {};
        static k_DataRequest_BasicInfo = { include_basic_info: !0 };
        static k_DataRequest_Assets = { include_assets: !0 };
        static k_DataRequest_IncludeAll = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_all_purchase_options: !0,
          include_screenshots: !0,
          include_trailers: !0,
          include_ratings: !0,
          include_tag_count: 20,
          include_reviews: !0,
          include_basic_info: !0,
          include_supported_languages: !0,
          include_full_description: !0,
          include_links: !0,
        };
        async QueueAppRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.qI, t);
        }
        async QueuePackageRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.RD, t);
        }
        async QueueBundleRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.xO, t);
        }
        async QueueTagRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.je, t);
        }
        async QueueCreatorRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.tp, t);
        }
        async QueueHubCategoryRequest(e, t) {
          return this.QueueStoreItemRequest(e, c.c6.wn, t);
        }
        static ValidateDataRequest(e) {
          const t = [
            e.include_assets,
            e.include_release,
            e.include_platforms,
            e.include_all_purchase_options,
            e.include_screenshots,
            e.include_trailers,
            e.include_ratings,
            e.include_reviews,
            e.include_basic_info,
            e.include_supported_languages,
            e.include_full_description,
            e.include_links,
          ];
          for (const e of t) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        async QueueMultipleAppRequests(e, t) {
          if (!e || 0 == e.length) return n.R;
          const s = (
            await Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, c.c6.qI, t)),
            )
          ).filter((e) => e != n.R);
          return s.length > 0 ? s[0] : n.R;
        }
        async QueueMultiplePackageRequests(e, t) {
          if (!e || 0 == e.length) return n.R;
          const s = (
            await Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, c.c6.RD, t)),
            )
          ).filter((e) => e != n.R);
          return s.length > 0 ? s[0] : n.R;
        }
        async QueueMultipleBundleRequests(e, t) {
          if (!e || 0 == e.length) return n.R;
          const s = (
            await Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, c.c6.xO, t)),
            )
          ).filter((e) => e != n.R);
          return s.length > 0 ? s[0] : n.R;
        }
        async QueueMultipleTagRequests(e, t) {
          if (!e || 0 == e.length) return n.R;
          const s = (
            await Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, c.c6.je, t)),
            )
          ).filter((e) => e != n.R);
          return s.length > 0 ? s[0] : n.R;
        }
        async QueueMultipleCreatorRequests(e, t) {
          if (!e || 0 == e.length) return n.R;
          const s = (
            await Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, c.c6.tp, t)),
            )
          ).filter((e) => e != n.R);
          return s.length > 0 ? s[0] : n.R;
        }
        async QueueMultipleHubCategoryRequests(e, t) {
          if (!e || 0 == e.length) return n.R;
          const s = (
            await Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, c.c6.wn, t)),
            )
          ).filter((e) => e != n.R);
          return s.length > 0 ? s[0] : n.R;
        }
        async QueueMultipleStoreItemRequests(e, t, s) {
          if (!e || 0 == e.length) return n.R;
          const a = (
            await Promise.all(
              e.map((e, a) => this.QueueStoreItemRequest(e, t[a], s)),
            )
          ).filter((e) => e != n.R);
          return a.length > 0 ? a[0] : n.R;
        }
        async QueueStoreItemRequest(e, t, s) {
          if (
            ((0, m.wT)(
              b.ValidateDataRequest(s),
              "Invalid Data Request: " + JSON.stringify(s),
            ),
            "string" == typeof e && (e = parseInt(e)),
            this.m_bActivelyResettingCache)
          )
            return (
              console.log(
                "Rejecting store item request due to currently clearing the cache",
              ),
              this.k_AlreadyResolvedBusy
            );
          if (!e)
            return (
              (0, m.wT)(
                !e,
                `unexpected id ${e} of zero or undefined for type ${t}`,
              ),
              this.k_AlreadyResolvedInvalid
            );
          const a = this.GetPreviousSupersetLoadPromise(e, t, s);
          if (a) return a;
          switch (
            (this.m_PendingInfoPromise ||
              ((this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              )),
              (this.m_PendingTimer = window.setTimeout(
                () => this.FlushPendingInfo(),
                this.k_QueueWaitUntilRequestMS,
              ))),
            (this.m_setPendingDataRequest = f(this.m_setPendingDataRequest, s)),
            t)
          ) {
            case c.c6.qI:
              this.m_setPendingAppInfo.add(e);
              break;
            case c.c6.xO:
              this.m_setPendingBundleInfo.add(e);
              break;
            case c.c6.RD:
              this.m_setPendingPackageInfo.add(e);
              break;
            case c.c6.je:
              this.m_setPendingTagInfo.add(e);
              break;
            case c.c6.tp:
              this.m_setPendingCreatorInfo.add(e);
              break;
            case c.c6.wn:
              this.m_setPendingHubCategoryInfo.add(e);
              break;
            default:
              (0, m.wT)(!1, `Unexpected Type ${t}`);
          }
          const i = this.m_PendingInfoPromise;
          return (
            this.m_setPendingAppInfo.size +
              this.m_setPendingPackageInfo.size +
              this.m_setPendingBundleInfo.size >=
              this.k_nMaxBatchSize &&
              (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
              this.FlushPendingInfo()),
            i
          );
        }
        async FlushPendingInfo() {
          if (void 0 === this.m_PendingInfoResolve) return;
          const e = this.m_PendingInfoResolve,
            t = Array.from(this.m_setPendingAppInfo),
            s = Array.from(this.m_setPendingPackageInfo),
            a = Array.from(this.m_setPendingBundleInfo),
            i = Array.from(this.m_setPendingTagInfo),
            n = Array.from(this.m_setPendingCreatorInfo),
            r = Array.from(this.m_setPendingHubCategoryInfo),
            l = this.m_setPendingDataRequest;
          (this.m_PendingInfoPromise = void 0),
            (this.m_PendingInfoResolve = void 0),
            this.m_setPendingAppInfo.clear(),
            this.m_setPendingBundleInfo.clear(),
            this.m_setPendingPackageInfo.clear(),
            this.m_setPendingTagInfo.clear(),
            this.m_setPendingCreatorInfo.clear(),
            this.m_setPendingHubCategoryInfo.clear(),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingTimer = void 0),
            this.HintLoadStoreItems(t, s, a, i, n, r, l).then((t) => e(t));
        }
        async HintLoadStoreApps(e, t) {
          return this.HintLoadStoreItems(e, null, null, null, null, null, t);
        }
        async HintLoadStorePackages(e, t) {
          return this.HintLoadStoreItems(null, e, null, null, null, null, t);
        }
        async HintLoadStoreBundles(e, t) {
          return this.HintLoadStoreItems(null, null, e, null, null, null, t);
        }
        GetPreviousSupersetLoadPromise(e, t, s) {
          if (this.BHasStoreItem(e, t, s) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let a = null;
          switch (t) {
            case c.c6.qI:
              a = this.m_mapAppsInFlight.get(e);
              break;
            case c.c6.RD:
              a = this.m_mapPackageInFlight.get(e);
              break;
            case c.c6.xO:
              a = this.m_mapBundleInFlight.get(e);
              break;
            case c.c6.je:
              a = this.m_mapTagsInFlight.get(e);
              break;
            case c.c6.tp:
              a = this.m_mapCreatorsInFlight.get(e);
              break;
            case c.c6.wn:
              a = this.m_mapHubCategoriesInFlight.get(e);
          }
          return a &&
            p.Ay.BDataRequestContainsOtherDataRequest(a.dataRequest, s)
            ? a.promise
            : null;
        }
        async HintLoadStoreItems(e, t, s, a, i, r, l) {
          let o = null;
          const u = new Promise((e) => (o = e));
          let m = [],
            d = [];
          (e || []).forEach((e) => {
            const t = this.GetPreviousSupersetLoadPromise(e, c.c6.qI, l);
            if (t) d.push(t);
            else {
              m.push(c.O4.fromObject({ appid: e }));
              let t = f(this.GetStoreItemDataRequest(e, c.c6.qI), l);
              const s = this.m_mapAppsInFlight.get(e);
              (t = f(s?.dataRequest, t)),
                s && d.push(s.promise),
                this.m_mapAppsInFlight.set(e, {
                  promise: s ? R(s.promise, u) : u,
                  dataRequest: t,
                });
            }
          }),
            (t || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, c.c6.RD, l);
              if (t) d.push(t);
              else {
                m.push(c.O4.fromObject({ packageid: e }));
                let t = f(this.GetStoreItemDataRequest(e, c.c6.RD), l);
                const s = this.m_mapPackageInFlight.get(e);
                (t = f(s?.dataRequest, t)),
                  s && d.push(s.promise),
                  this.m_mapPackageInFlight.set(e, {
                    promise: s ? R(s.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (s || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, c.c6.xO, l);
              if (t) d.push(t);
              else {
                m.push(c.O4.fromObject({ bundleid: e }));
                let t = f(this.GetStoreItemDataRequest(e, c.c6.xO), l);
                const s = this.m_mapBundleInFlight.get(e);
                (t = f(s?.dataRequest, t)),
                  s && d.push(s.promise),
                  this.m_mapBundleInFlight.set(e, {
                    promise: s ? R(s.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (a || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, c.c6.je, l);
              if (t) d.push(t);
              else {
                m.push(c.O4.fromObject({ tagid: e }));
                let t = f(this.GetStoreItemDataRequest(e, c.c6.je), l);
                const s = this.m_mapTagsInFlight.get(e);
                (t = f(s?.dataRequest, t)),
                  s && d.push(s.promise),
                  this.m_mapTagsInFlight.set(e, {
                    promise: s ? R(s.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (i || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, c.c6.tp, l);
              if (t) d.push(t);
              else {
                m.push(c.O4.fromObject({ creatorid: e }));
                let t = f(this.GetStoreItemDataRequest(e, c.c6.tp), l);
                const s = this.m_mapCreatorsInFlight.get(e);
                (t = f(s?.dataRequest, t)),
                  s && d.push(s.promise),
                  this.m_mapCreatorsInFlight.set(e, {
                    promise: s ? R(s.promise, u) : u,
                    dataRequest: t,
                  });
              }
            }),
            (r || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, c.c6.wn, l);
              if (t) d.push(t);
              else {
                m.push(c.O4.fromObject({ hubcategoryid: e }));
                let t = f(this.GetStoreItemDataRequest(e, c.c6.wn), l);
                const s = this.m_mapHubCategoriesInFlight.get(e);
                (t = f(s?.dataRequest, t)),
                  s && d.push(s.promise),
                  this.m_mapHubCategoriesInFlight.set(e, {
                    promise: s ? R(s.promise, u) : u,
                    dataRequest: t,
                  });
              }
            });
          let h = n.R;
          if (
            (m.length > 0 &&
              (h = await this.InternalHandleLoadStoreItems(m, l)),
            o(h),
            d.length > 0)
          ) {
            const e = await Promise.all(d);
            for (const t of e) t != n.R && h == n.R && (h = t);
          }
          return (
            (e || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
            (t || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
            (s || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
            (a || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
            (i || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
            (r || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e)),
            h
          );
        }
        MarkStoreItemIDUnavailable(e) {
          (e || []).forEach((e) => {
            e.appid()
              ? (this.m_setUnavailableApps.add(e.appid()),
                this.m_mapApps.delete(e.appid()))
              : e.packageid()
                ? (this.m_setUnavailablePackages.add(e.packageid()),
                  this.m_mapPackages.delete(e.packageid()))
                : e.bundleid()
                  ? (this.m_setUnavailableBundles.add(e.bundleid()),
                    this.m_mapBundles.delete(e.bundleid()))
                  : e.tagid()
                    ? (this.m_setUnavailableTags.add(e.tagid()),
                      this.m_mapTags.delete(e.tagid()))
                    : e.creatorid()
                      ? (this.m_setUnavailableCreators.add(e.creatorid()),
                        this.m_mapCreators.delete(e.creatorid()))
                      : e.hubcategoryid() &&
                        (this.m_setUnavailableHubCategories.add(
                          e.hubcategoryid(),
                        ),
                        this.m_mapHubCategories.delete(e.hubcategoryid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              let s = e.appid() ?? 0,
                a = t.appid() ?? 0;
              if (s != a) return s - a;
              let i = e.packageid() ?? 0,
                n = t.packageid() ?? 0;
              if (i != n) return i - n;
              let r = e.bundleid() ?? 0,
                l = t.bundleid() ?? 0;
              if (r != l) return r - l;
              let o = e.tagid() ?? 0,
                u = t.tagid() ?? 0;
              if (o != u) return o - u;
              let c = e.creatorid() ?? 0,
                m = t.creatorid() ?? 0;
              if (c != m) return c - m;
              let d = e.hubcategoryid() ?? 0,
                h = t.hubcategoryid() ?? 0;
              return d != h ? d - h : 0;
            }),
            t
          );
        }
        GetServiceTransport() {
          return (
            this.m_serviceTransport ||
              (console.warn(
                "Service transport not initialized for StoreItemCache",
              ),
              (this.m_serviceTransport = new o.D(
                h.TS.WEBAPI_BASE_URL,
              ).GetAnonymousServiceTransport())),
            this.m_serviceTransport
          );
        }
        async InternalHandleLoadStoreItems(e, t) {
          let s = n.R;
          (e = this.SortStoreItems(e)),
            t.include_included_items &&
              (t = {
                ...t,
                included_item_data_request: {
                  ...t,
                  include_included_items: !1,
                },
              });
          const a = new Array();
          try {
            const o = [];
            for (; e.length > 0; ) {
              const s = e.splice(0, this.k_nMaxBatchSize);
              if ((a.push(s), this.m_bUsePartnerAPI)) {
                const e = l.w.Init(u.St);
                e.Body().set_include_unpublished(!1);
                const a = e.Body().getitems_request(!0);
                a.set_context((0, _.hS)(this.m_bUsePartnerAPI)),
                  a.set_data_request(c.gn.fromObject(t)),
                  a.set_ids(s),
                  o.push(u.BT.GetItems(this.GetServiceTransport(), e));
              } else {
                const e = l.w.Init(c.eE);
                (0, _.rV)(e, this.m_bUsePartnerAPI),
                  (0, _.Bn)(e, t),
                  e.Body().set_ids(s),
                  o.push(c.$4.GetItems(this.GetServiceTransport(), e));
              }
            }
            (await Promise.all(o)).forEach((l, o) => {
              l.GetEResult() == n.R
                ? l
                    .Body()
                    .store_items()
                    .forEach((s) => {
                      const a = s.id(),
                        r = s.item_type();
                      let o =
                          this.m_bReturnUnavailableItems && s.success() == n.sW,
                        u =
                          s.success() == n.R && !this.BIsStoreItemMissing(a, r);
                      if (o || u) this.ReadItem(s, t);
                      else {
                        switch (r) {
                          case c.c6.qI:
                            this.m_setUnavailableApps.add(a),
                              this.m_mapApps.delete(a);
                            break;
                          case c.c6.RD:
                            this.m_setUnavailablePackages.add(a),
                              this.m_mapPackages.delete(a);
                            break;
                          case c.c6.xO:
                            this.m_setUnavailableBundles.add(a),
                              this.m_mapBundles.delete(a);
                            break;
                          case c.c6.je:
                            this.m_setUnavailableTags.add(a),
                              this.m_mapTags.delete(a);
                            break;
                          case c.c6.tp:
                            this.m_setUnavailableCreators.add(a),
                              this.m_mapCreators.delete(a);
                            break;
                          case c.c6.wn:
                            this.m_setUnavailableHubCategories.add(a),
                              this.m_mapHubCategories.delete(a);
                            break;
                          default:
                            console.error(
                              "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                r +
                                " " +
                                a,
                            );
                        }
                        if (s.unvailable_for_country_restriction())
                          switch (r) {
                            case c.c6.qI:
                              this.m_setUnavailableDueToCountryRestrictionApps.add(
                                a,
                              );
                              break;
                            case c.c6.RD:
                              this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                a,
                              );
                              break;
                            case c.c6.xO:
                              this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                a,
                              );
                              break;
                            case c.c6.je:
                            case c.c6.tp:
                            case c.c6.wn:
                              console.error(
                                "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                  l.GetEResult() +
                                  " message: " +
                                  l.Hdr().error_message(),
                                (0, i.HO)(e),
                              );
                          }
                      }
                    })
                : (console.warn(
                    "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                      l.GetEResult() +
                      " message: " +
                      l.Hdr().error_message(),
                    (0, i.HO)(e),
                  ),
                  (l.Hdr().transport_error() == r.sC || h.TS.FROM_WEB) &&
                    this.MarkStoreItemIDUnavailable(a[o]),
                  s == n.R && (s = l.GetEResult()));
            });
          } catch (e) {
            const t = (0, d.H)(e);
            return (
              console.error(
                "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                  t.strErrorMsg,
                t,
              ),
              a.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
              n.eH
            );
          }
          return s;
        }
        GetMapForType(e) {
          let t;
          switch (e) {
            case c.c6.qI:
              t = this.m_mapApps;
              break;
            case c.c6.xO:
              t = this.m_mapBundles;
              break;
            case c.c6.RD:
              t = this.m_mapPackages;
              break;
            case c.c6.je:
              t = this.m_mapTags;
              break;
            case c.c6.tp:
              t = this.m_mapCreators;
              break;
            case c.c6.wn:
              t = this.m_mapHubCategories;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, s) {
          let a = this.GetMapForType(t);
          return Boolean(
            a && a.has(e) && (!s || a.get(e).BContainDataRequest(s)),
          );
        }
        GetStoreItem(e, t) {
          if (t == c.c6.Ep || t == c.c6.Eb) return;
          const s = this.GetMapForType(t);
          return s?.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, t) {
          const s = this.GetStoreItem(e, t);
          return s && (this.m_bReturnUnavailableItems || s.BIsVisible())
            ? s
            : void 0;
        }
        GetStoreItemDataRequest(e, t) {
          return this.GetMapForType(t)?.get(e)?.GetDataRequest() || null;
        }
        BHasApp(e, t) {
          return this.BHasStoreItem(e, c.c6.qI, t);
        }
        GetApp(e) {
          return this.GetStoreItem(e, c.c6.qI);
        }
        BHasPackage(e, t) {
          return this.BHasStoreItem(e, c.c6.RD, t);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, c.c6.RD);
        }
        BHasBundle(e, t) {
          return this.BHasStoreItem(e, c.c6.xO, t);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, c.c6.xO);
        }
        BHasTag(e, t) {
          return this.BHasStoreItem(e, c.c6.je, t);
        }
        GetTag(e) {
          return this.GetStoreItem(e, c.c6.je);
        }
        BHasCreator(e, t) {
          return this.BHasStoreItem(e, c.c6.tp, t);
        }
        GetCreator(e) {
          return this.GetStoreItem(e, c.c6.tp);
        }
        BHasHubCategory(e, t) {
          return this.BHasStoreItem(e, c.c6.wn, t);
        }
        GetHubCategory(e) {
          return this.GetStoreItem(e, c.c6.wn);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case c.c6.qI:
              return this.BIsAppMissing(e);
            case c.c6.RD:
              return this.BIsPackageMissing(e);
            case c.c6.xO:
              return this.BIsBundleMissing(e);
            case c.c6.je:
              return this.BIsTagMissing(e);
            case c.c6.tp:
              return this.BIsCreatorMissing(e);
            case c.c6.wn:
              return this.BIsHubCategoryMissing(e);
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppMissing(e) {
          return this.m_setUnavailableApps.has(e);
        }
        BIsPackageMissing(e) {
          return this.m_setUnavailablePackages.has(e);
        }
        BIsBundleMissing(e) {
          return this.m_setUnavailableBundles.has(e);
        }
        BIsTagMissing(e) {
          return this.m_setUnavailableTags.has(e);
        }
        BIsCreatorMissing(e) {
          return this.m_setUnavailableCreators.has(e);
        }
        BIsHubCategoryMissing(e) {
          return this.m_setUnavailableHubCategories.has(e);
        }
        BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
          switch (t) {
            case c.c6.qI:
              return this.BIsAppUnavailableDueToCountryRestriction(e);
            case c.c6.RD:
              return this.BIsPackageUnavailableDueToCountryRestriction(e);
            case c.c6.xO:
              return this.BIsBundleUnavailableDueToCountryRestriction(e);
            case c.c6.je:
            case c.c6.tp:
            case c.c6.wn:
              return (
                console.error(
                  "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
                  t,
                ),
                !0
              );
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
        }
        BIsPackageUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
        }
        BIsBundleUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
        }
        ReadResults(e, t) {
          let s = [];
          for (const a of e) s.push(this.ReadItem(a, t));
          return s;
        }
        ReadItem(e, t) {
          const s = e.item_type();
          let a = null;
          if (void 0 === s)
            return (
              console.warn(`Failed to load item data: ${e.success()}`), null
            );
          switch (s) {
            case c.c6.qI:
              a = this.m_mapApps;
              break;
            case c.c6.RD:
              a = this.m_mapPackages;
              break;
            case c.c6.xO:
              a = this.m_mapBundles;
              break;
            case c.c6.je:
              a = this.m_mapTags;
              break;
            case c.c6.tp:
              a = this.m_mapCreators;
              break;
            case c.c6.wn:
              a = this.m_mapHubCategories;
              break;
            default:
              return console.error(`Invalid item type: ${s}`), null;
          }
          let i = a.get(e.id());
          if (
            (i ? i.MergeData(e, t) : ((i = new p.Ay(e, t)), a.set(e.id(), i)),
            t.include_included_items && e.included_items(!1))
          ) {
            for (const s of e.included_items().included_apps())
              this.ReadItem(s, t.included_item_data_request);
            for (const s of e.included_items().included_packages())
              this.ReadItem(s, t.included_item_data_request);
          }
          return i;
        }
      }
      (0, a.Cg)([g.o], b.prototype, "ReadItem", null);
    },
    63340: (e, t, s) => {
      function a(e, t) {
        "undefined" != typeof window && (window[e] = t);
      }
      s.d(t, { V: () => a });
    },
  },
]);

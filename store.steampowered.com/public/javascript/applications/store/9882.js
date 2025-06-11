/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9882],
  {
    17690: (e, t, n) => {
      n.d(t, { IU: () => p, by: () => c, sc: () => r });
      var i = n(78327),
        s = n(85044),
        o = n(44332);
      const r = 0,
        a = "061818254b2c99ac49e6626adb128ed1282a392f",
        p = 120;
      class c {
        m_unAppID;
        m_bInitialized = !1;
        m_strName;
        m_strIconURL;
        m_dtUpdatedFromServer;
        m_eAppType;
        constructor(e) {
          this.m_unAppID = e;
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, a);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, a);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? i.TS.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, s.t)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch {}
        }
        SerializeToCacheObject() {
          return (
            (0, o.w)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!",
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    51006: (e, t, n) => {
      n.d(t, { Vw: () => g });
      var i = n(34629),
        s = n(14947),
        o = n(22837),
        r = n(56545),
        a = n(17690),
        p = n(78327);
      class c {
        m_nLastUpdated = 0;
        m_mapLanguages = s.sH.map();
        m_appid;
        m_fetching = null;
        constructor(e) {
          this.m_appid = e;
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let n = p.TS.LANGUAGE;
          return l(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = p.TS.LANGUAGE;
          return u(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function l(e, t, n, i, s) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              i,
              "tokens",
              t,
            ),
            ""
          );
        let o = e;
        e = e.toLowerCase();
        let r = "";
        if (
          (t && t.has(e) && (r = t.get(e)),
          !r && n && n.has(e) && (r = n.get(e)),
          r)
        )
          r = u(r, t, n, i, s);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              i,
              o,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && 1 != p.TS.EUNIVERSE)
        )
          return e;
        return r;
      }
      function u(e, t, n, i, s) {
        let o = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (o)
          for (let r of o) {
            let o = l(_(r.slice(1, -1), s), t, n, i, s);
            if (!o) return "";
            e = e.replace(r, o);
          }
        return (e = _(e, s));
      }
      function _(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let i of n) {
            let n = i.slice(1, -1).toLowerCase(),
              s = t.get(n);
            null == s
              ? console.log("No rich presence found for", n)
              : (e = e.replace(i, s));
          }
        return e;
      }
      var d = n(37403),
        h = n(44332),
        m = n(6144);
      class f {
        m_CMInterface;
        m_mapAppInfo = s.sH.map();
        m_mapRichPresenceLoc = s.sH.map();
        m_cAppInfoRequestsInFlight = 0;
        m_setPendingAppInfo = new Set();
        m_PendingAppInfoPromise;
        m_PendingAppInfoResolve;
        m_CacheStorage = null;
        m_fnCallbackOnAppInfoLoaded = new m.lu();
        constructor() {
          (0, s.Gn)(this);
        }
        Init(e) {
          this.m_CMInterface = e;
        }
        BHavePendingAppInfoRequests() {
          return (
            this.m_setPendingAppInfo.size > 0 ||
            this.m_cAppInfoRequestsInFlight > 0
          );
        }
        get CMInterface() {
          return this.m_CMInterface;
        }
        RegisterCallbackOnLoad(e) {
          if (!this.BHavePendingAppInfoRequests())
            return (
              (0, h.w)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
              void e()
            );
          this.m_fnCallbackOnAppInfoLoaded.Register(e);
        }
        IsLoadingAppID(e) {
          return this.m_setPendingAppInfo.has(e);
        }
        GetAppInfo(e) {
          if (
            ((0, h.w)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new a.by(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e),
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        async FlushPendingAppInfo() {
          const e = this.m_PendingAppInfoResolve,
            t = Array.from(this.m_setPendingAppInfo);
          (this.m_PendingAppInfoPromise = void 0),
            (this.m_PendingAppInfoResolve = void 0),
            this.m_setPendingAppInfo.clear(),
            await this.LoadAppInfoBatch(t),
            e?.();
        }
        async LoadAppInfoBatch(e) {
          this.m_cAppInfoRequestsInFlight++;
          let t = await this.LoadAppInfoBatchFromLocalCache(e);
          if (t.length) {
            console.log("Loading batch of App Info from Steam: ", t),
              await this.m_CMInterface?.WaitUntilLoggedOn();
            let e = r.w.Init(d._z);
            e.Body().set_language((0, o.sf)(p.TS.LANGUAGE));
            const n = 50;
            for (; t.length > 0; ) {
              const i = Math.min(n, t.length),
                s = t.slice(0, i);
              (t = t.slice(i)), e.Body().set_appids(s);
              const o = await d.BE.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                e,
              );
              1 == o.GetEResult()
                ? this.OnGetAppsResponse(o)
                : console.error(
                    `Error when calling CommunityService.GetApps: EResult=${o.GetEResult()}, AppIDs:`,
                    s,
                  );
            }
          }
          0 == --this.m_cAppInfoRequestsInFlight &&
            0 == this.m_setPendingAppInfo.size &&
            (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
            this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let n of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(n.appid());
            (0, h.w)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new a.by(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new a.by(t.appid());
            e.DeserializeFromAppOverview(t),
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        async EnsureAppInfoForAppIDs(e) {
          let t = !1;
          return (
            e.forEach((e) => {
              let n = this.m_mapAppInfo.get(e);
              n
                ? n.is_valid || (t = !0)
                : ((n = new a.by(e)),
                  this.m_mapAppInfo.set(e, n),
                  this.QueueAppInfoRequest(e),
                  (t = !0));
            }),
            t && void 0 !== this.m_PendingAppInfoPromise
              ? this.m_PendingAppInfoPromise
              : Promise.resolve()
          );
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        async LoadAppInfoBatchFromLocalCache(e) {
          if (!this.m_CacheStorage) return e;
          console.log("Loading batch of App Info from Local Cache: ", e);
          const t = new Date(new Date().getTime() - 12096e5),
            n = async (e) => {
              const n = await this.m_CacheStorage?.GetObject(
                this.GetCacheKeyForAppID(e),
              );
              if (!n) return e;
              let i = this.m_mapAppInfo.get(e);
              return (
                (0, h.w)(
                  i,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                i
                  ? ((i = new a.by(e)),
                    i.DeserializeFromCacheObject(n),
                    i.is_initialized
                      ? (this.m_mapAppInfo.set(e, i),
                        i.time_updated_from_server < t ? e : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          e,
                          n,
                        ),
                        e))
                  : e
              );
            };
          let i = e.map((e) => n(e));
          return (await Promise.all(i)).filter((e) => null !== e);
        }
        async SaveAppInfoBatchToLocalCache(e) {
          if (this.m_CacheStorage) {
            console.log(
              "Saving batch of App Info to Local Cache: ",
              e.map((e) => e.appid),
            );
            for (const t of e) {
              const e = t.SerializeToCacheObject();
              e &&
                this.m_CacheStorage.StoreObject(
                  this.GetCacheKeyForAppID(t.appid),
                  e,
                );
            }
          }
        }
        Localize(e, t, n) {
          const i = this.GetRichPresenceLoc(e);
          return i
            ? i.Localize(t, n)
            : 1 != p.TS.EUNIVERSE
              ? (console.log(
                  `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
                ),
                t)
              : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * a.IU < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new c(e);
          return (
            this.m_mapRichPresenceLoc.set(e.toString(), t),
            this.QueueRichPresenceLocRequest(t),
            t
          );
        }
        GetRichPresenceLocAsync(e) {
          let t = this.GetRichPresenceLoc(e);
          return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
        }
        OnRichPresenceLocUpdate(e, t) {
          e.m_nLastUpdated = Date.now();
          for (let n of t) {
            let t = n.language(),
              i = e.m_mapLanguages.get(t);
            i
              ? i.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (i = e.m_mapLanguages.get(t)));
            for (let e of n.tokens()) i?.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = r.w.Init(d.zQ);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(p.TS.LANGUAGE),
                    d.BE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t,
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    1 != t.GetEResult()
                      ? Promise.reject()
                      : (this.OnRichPresenceLocUpdate(
                          e,
                          t.Body().token_lists(),
                        ),
                        Promise.resolve(e))
                  ),
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      (0, i.Cg)([s.XI], f.prototype, "OnGetAppsResponse", null),
        (0, i.Cg)([s.XI], f.prototype, "OnRichPresenceLocUpdate", null);
      const g = new f();
    },
    85044: (e, t, n) => {
      n.d(t, { d: () => s, t: () => o });
      var i = n(78327);
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function o(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let o = i.TS.AVATAR_BASE_URL;
        return (
          o ||
            ((o = i.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (o += e.substr(0, 2) + "/")),
          (o += e),
          t && "small" != t && (o += "_" + t),
          (o += n),
          o
        );
      }
    },
    55263: (e, t, n) => {
      n.d(t, {
        G6: () => p,
        Gg: () => u,
        Ow: () => l,
        YM: () => m,
        mZ: () => _,
        t7: () => c,
        zX: () => h,
      });
      var i = n(41735),
        s = n.n(i),
        o = n(90626),
        r = n(84933),
        a = n(82097);
      function p(e, t, n, i) {
        const p = (0, o.useRef)(),
          c = (0, o.useRef)(void 0),
          l = (0, r.CH)();
        p.current = e;
        const [u, _] = (0, o.useState)(void 0),
          {
            include_assets: d,
            include_release: h,
            include_platforms: m,
            include_all_purchase_options: f,
            include_screenshots: g,
            include_trailers: I,
            include_ratings: A,
            include_tag_count: L,
            include_reviews: R,
            include_basic_info: v,
            include_supported_languages: S,
            include_full_description: G,
            include_included_items: C,
            include_assets_without_overrides: b,
            apply_user_filters: w,
            include_links: y,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            const n = {
              include_assets: d,
              include_release: h,
              include_platforms: m,
              include_all_purchase_options: f,
              include_screenshots: g,
              include_trailers: I,
              include_ratings: A,
              include_tag_count: L,
              include_reviews: R,
              include_basic_info: v,
              include_supported_languages: S,
              include_full_description: G,
              include_included_items: C,
              include_assets_without_overrides: b,
              apply_user_filters: w,
              include_links: y,
            };
            let o = null;
            return (
              !e ||
                e < 0 ||
                a.A.Get().BHasStoreItem(e, t, n) ||
                (void 0 !== u && i && i == c.current) ||
                (i !== c.current && (_(void 0), (c.current = i)),
                (o = s().CancelToken.source()),
                a.A.Get()
                  .QueueStoreItemRequest(e, t, n)
                  .then((t) => {
                    o?.token.reason || p.current !== e || _(1 == t), l();
                  })),
              () => o?.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, u, d, h, m, f, g, I, A, L, R, v, S, G, C, b, w, y, l]),
          !e)
        )
          return [null, 2];
        if (!1 === u) return [void 0, 2];
        if (a.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!a.A.Get().BHasStoreItem(e, t, n)) return [void 0, 1];
        const P = a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return P ? [P, 3] : [null, 2];
      }
      function c(e, t, n) {
        return p(e, 0, t, n);
      }
      function l(e, t, n) {
        return p(e, 2, t, n);
      }
      function u(e, t, n) {
        return p(e, 1, t, n);
      }
      function _(e, t, n) {
        const [i, s] = p(e, t, n);
        let o;
        1 != i?.GetStoreItemType() ||
          i.GetAssets()?.GetHeaderURL() ||
          1 != i?.GetIncludedAppIDs().length ||
          (o = i.GetIncludedAppIDs()[0]);
        const [r, a] = c(o, n);
        return o && r?.BIsVisible() ? [r, a] : [i, s];
      }
      function d(e, t, n, i) {
        const p = (0, r.CH)(),
          {
            include_assets: c,
            include_release: l,
            include_platforms: u,
            include_all_purchase_options: _,
            include_screenshots: d,
            include_trailers: h,
            include_ratings: m,
            include_tag_count: f,
            include_reviews: g,
            include_basic_info: I,
            include_supported_languages: A,
            include_full_description: L,
            include_included_items: R,
            include_assets_without_overrides: v,
            apply_user_filters: S,
            include_links: G,
          } = n;
        if (
          ((0, o.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const n = {
                include_assets: c,
                include_release: l,
                include_platforms: u,
                include_all_purchase_options: _,
                include_screenshots: d,
                include_trailers: h,
                include_ratings: m,
                include_tag_count: f,
                include_reviews: g,
                include_basic_info: I,
                include_supported_languages: A,
                include_full_description: L,
                include_included_items: R,
                include_assets_without_overrides: v,
                apply_user_filters: S,
                include_links: G,
              },
              i = e.filter(
                (e) =>
                  !(
                    a.A.Get().BHasStoreItem(e, t, n) ||
                    a.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const o = s().CancelToken.source(),
              r = i.map((e) => a.A.Get().QueueStoreItemRequest(e, t, n));
            return (
              Promise.all(r).then(() => {
                o.token.reason || p();
              }),
              () => o.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, p, c, l, u, _, d, h, m, f, g, I, A, L, R, v, S, G]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              a.A.Get().BHasStoreItem(e, t, n) ||
              a.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          a.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function h(e, t, n) {
        return d(e, 0, t, n);
      }
      function m() {
        o.useEffect(
          () => (
            a.A.Get().SetReturnUnavailableItems(!0),
            () => a.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
  },
]);

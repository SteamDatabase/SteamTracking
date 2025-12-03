/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9436],
  {
    17690: (e, t, n) => {
      n.d(t, { IU: () => h, by: () => c, sc: () => p });
      var i = n(78327),
        s = n(85044),
        a = n(81393),
        o = n(95679);
      const p = 0,
        r = "061818254b2c99ac49e6626adb128ed1282a392f",
        h = 120;
      class c {
        constructor(e) {
          (this.m_bInitialized = !1), (this.m_unAppID = e);
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
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, r);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, r);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return (
            this.apptype == o.Td.k_EAppTypeTool ||
            this.apptype == o.Td.k_EAppTypeApplication
          );
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
          e.icon_hash() && e.app_type() != o.Td.k_EAppTypeShortcut
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
            (0, a.wT)(
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
      n.d(t, { Vw: () => I, Mi: () => g });
      var i = n(34629),
        s = n(14947),
        a = n(22837),
        o = n(37085),
        p = n(56545),
        r = n(17690),
        h = n(78327);
      class c {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = s.sH.map()),
            (this.m_fetching = null),
            (this.m_appid = e);
        }
        GetAppID() {
          return this.m_appid;
        }
        GetTokenList(e) {
          return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
        }
        Localize(e, t) {
          let n = h.TS.LANGUAGE;
          return l(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = h.TS.LANGUAGE;
          return m(
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
        let p = "";
        if (
          (t && t.has(e) && (p = t.get(e)),
          !p && n && n.has(e) && (p = n.get(e)),
          p)
        )
          p = m(p, t, n, i, s);
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
          t && h.TS.EUNIVERSE != a.Bn.k_EUniversePublic)
        )
          return e;
        return p;
      }
      function m(e, t, n, i, s) {
        let a = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (a)
          for (let o of a) {
            let a = l(d(o.slice(1, -1), s), t, n, i, s);
            if (!a) return "";
            e = e.replace(o, a);
          }
        return (e = d(e, s));
      }
      function d(e, t) {
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
      var _ = n(37403),
        f = n(81393),
        u = n(6144);
      class g {
        constructor() {
          (this.m_mapAppInfo = s.sH.map()),
            (this.m_mapRichPresenceLoc = s.sH.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new u.lu()),
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
              (0, f.wT)(
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
            ((0, f.wT)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new r.by(e);
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
            null == e || e();
        }
        async LoadAppInfoBatch(e) {
          var t;
          this.m_cAppInfoRequestsInFlight++;
          let n = await this.LoadAppInfoBatchFromLocalCache(e);
          if (n.length) {
            console.log("Loading batch of App Info from Steam: ", n),
              await (null === (t = this.m_CMInterface) || void 0 === t
                ? void 0
                : t.WaitUntilLoggedOn());
            let e = p.w.Init(_._z);
            e.Body().set_language((0, a.sf)(h.TS.LANGUAGE));
            const i = 50;
            for (; n.length > 0; ) {
              const t = Math.min(i, n.length),
                s = n.slice(0, t);
              (n = n.slice(t)), e.Body().set_appids(s);
              const a = await _.BE.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                e,
              );
              a.GetEResult() == o.d.k_EResultOK
                ? this.OnGetAppsResponse(a)
                : console.error(
                    `Error when calling CommunityService.GetApps: EResult=${a.GetEResult()}, AppIDs:`,
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
            (0, f.wT)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new r.by(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new r.by(t.appid());
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
                : ((n = new r.by(e)),
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
              var n;
              const i = await (null === (n = this.m_CacheStorage) ||
              void 0 === n
                ? void 0
                : n.GetObject(this.GetCacheKeyForAppID(e)));
              if (!i) return e;
              let s = this.m_mapAppInfo.get(e);
              return (
                (0, f.wT)(
                  s,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                s
                  ? ((s = new r.by(e)),
                    s.DeserializeFromCacheObject(i),
                    s.is_initialized
                      ? (this.m_mapAppInfo.set(e, s),
                        s.time_updated_from_server < t ? e : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          e,
                          i,
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
            : h.TS.EUNIVERSE != a.Bn.k_EUniversePublic
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
              t.m_nLastUpdated + 6e4 * r.IU < Date.now() &&
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
            for (let e of n.tokens())
              null == i || i.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = p.w.Init(_.zQ);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(h.TS.LANGUAGE),
                    _.BE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t,
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    t.GetEResult() != o.d.k_EResultOK
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
      (0, i.Cg)([s.XI], g.prototype, "OnGetAppsResponse", null),
        (0, i.Cg)([s.XI], g.prototype, "OnRichPresenceLocUpdate", null);
      const I = new g();
    },
    85044: (e, t, n) => {
      n.d(t, { d: () => s, t: () => a });
      var i = n(78327);
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let a = i.TS.AVATAR_BASE_URL;
        return (
          a ||
            ((a = i.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          t && "small" != t && (a += "_" + t),
          (a += n),
          a
        );
      }
    },
  },
]);

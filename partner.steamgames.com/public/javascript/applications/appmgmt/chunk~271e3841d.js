/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8713],
  {
    51006: (e, t, n) => {
      n.d(t, { Vw: () => I });
      var s = n(34629),
        o = n(14947),
        i = n(22837),
        a = n(37085),
        p = n(56545),
        r = n(17690),
        c = n(78327);
      class l {
        m_nLastUpdated = 0;
        m_mapLanguages = o.sH.map();
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
          let n = c.TS.LANGUAGE;
          return h(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = c.TS.LANGUAGE;
          return m(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function h(e, t, n, s, o) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              s,
              "tokens",
              t,
            ),
            ""
          );
        let a = e;
        e = e.toLowerCase();
        let p = "";
        if (
          (t && t.has(e) && (p = t.get(e)),
          !p && n && n.has(e) && (p = n.get(e)),
          p)
        )
          p = m(p, t, n, s, o);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              s,
              a,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && c.TS.EUNIVERSE != i.Bn.k_EUniversePublic)
        )
          return e;
        return p;
      }
      function m(e, t, n, s, o) {
        let i = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (i)
          for (let a of i) {
            let i = h(f(a.slice(1, -1), o), t, n, s, o);
            if (!i) return "";
            e = e.replace(a, i);
          }
        return (e = f(e, o));
      }
      function f(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let s of n) {
            let n = s.slice(1, -1).toLowerCase(),
              o = t.get(n);
            null == o
              ? console.log("No rich presence found for", n)
              : (e = e.replace(s, o));
          }
        return e;
      }
      var g = n(37403),
        u = n(81393),
        d = n(6144);
      class _ {
        m_CMInterface;
        m_mapAppInfo = o.sH.map();
        m_mapRichPresenceLoc = o.sH.map();
        m_cAppInfoRequestsInFlight = 0;
        m_setPendingAppInfo = new Set();
        m_PendingAppInfoPromise;
        m_PendingAppInfoResolve;
        m_CacheStorage = null;
        m_fnCallbackOnAppInfoLoaded = new d.lu();
        constructor() {
          (0, o.Gn)(this);
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
              (0, u.wT)(
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
            ((0, u.wT)(
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
            e?.();
        }
        async LoadAppInfoBatch(e) {
          this.m_cAppInfoRequestsInFlight++;
          let t = await this.LoadAppInfoBatchFromLocalCache(e);
          if (t.length) {
            console.log("Loading batch of App Info from Steam: ", t),
              await this.m_CMInterface?.WaitUntilLoggedOn();
            let e = p.w.Init(g._z);
            e.Body().set_language((0, i.sf)(c.TS.LANGUAGE));
            const n = 50;
            for (; t.length > 0; ) {
              const s = Math.min(n, t.length),
                o = t.slice(0, s);
              (t = t.slice(s)), e.Body().set_appids(o);
              const i = await g.BE.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                e,
              );
              i.GetEResult() == a.d.k_EResultOK
                ? this.OnGetAppsResponse(i)
                : console.error(
                    `Error when calling CommunityService.GetApps: EResult=${i.GetEResult()}, AppIDs:`,
                    o,
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
            (0, u.wT)(
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
              const n = await this.m_CacheStorage?.GetObject(
                this.GetCacheKeyForAppID(e),
              );
              if (!n) return e;
              let s = this.m_mapAppInfo.get(e);
              return (
                (0, u.wT)(
                  s,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                s
                  ? ((s = new r.by(e)),
                    s.DeserializeFromCacheObject(n),
                    s.is_initialized
                      ? (this.m_mapAppInfo.set(e, s),
                        s.time_updated_from_server < t ? e : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          e,
                          n,
                        ),
                        e))
                  : e
              );
            };
          let s = e.map((e) => n(e));
          return (await Promise.all(s)).filter((e) => null !== e);
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
          const s = this.GetRichPresenceLoc(e);
          return s
            ? s.Localize(t, n)
            : c.TS.EUNIVERSE != i.Bn.k_EUniversePublic
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
          let t = new l(e);
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
              s = e.m_mapLanguages.get(t);
            s
              ? s.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (s = e.m_mapLanguages.get(t)));
            for (let e of n.tokens()) s?.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = p.w.Init(g.zQ);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(c.TS.LANGUAGE),
                    g.BE.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t,
                    )
                  );
                })
                .then(
                  (t) => (
                    (e.m_fetching = null),
                    t.GetEResult() != a.d.k_EResultOK
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
      (0, s.Cg)([o.XI], _.prototype, "OnGetAppsResponse", null),
        (0, s.Cg)([o.XI], _.prototype, "OnRichPresenceLocUpdate", null);
      const I = new _();
    },
  },
]);

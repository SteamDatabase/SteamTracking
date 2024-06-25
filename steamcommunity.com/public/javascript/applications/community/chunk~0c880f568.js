/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6680],
  {
    45944: (e, t, n) => {
      n.d(t, { Q8: () => A, md: () => d });
      var o = n(85556),
        s = n(54842),
        i = n(77936),
        a = n(79545),
        p = n(22520),
        r = n(37563);
      class c {
        m_nLastUpdated = 0;
        m_mapLanguages = s.LO.map();
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
          let n = r.De.LANGUAGE;
          return h(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = r.De.LANGUAGE;
          return l(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
      }
      function h(e, t, n, o, s) {
        if (!e.startsWith("#"))
          return (
            console.log(
              "Token doesn't start with #:",
              e,
              "appid",
              o,
              "tokens",
              t,
            ),
            ""
          );
        let i = e;
        e = e.toLowerCase();
        let a = "";
        if (
          (t && t.has(e) && (a = t.get(e)),
          !a && n && n.has(e) && (a = n.get(e)),
          a)
        )
          a = l(a, t, n, o, s);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              o,
              i,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && 1 != r.De.EUNIVERSE)
        )
          return e;
        return a;
      }
      function l(e, t, n, o, s) {
        let i = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (i)
          for (let a of i) {
            let i = h(m(a.slice(1, -1), s), t, n, o, s);
            if (!i) return "";
            e = e.replace(a, i);
          }
        return (e = m(e, s));
      }
      function m(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let o of n) {
            let n = o.slice(1, -1).toLowerCase(),
              s = t.get(n);
            null == s
              ? console.log("No rich presence found for", n)
              : (e = e.replace(o, s));
          }
        return e;
      }
      var f = n(18015),
        u = n(62210),
        g = n(45492);
      class d {
        m_CMInterface;
        m_mapAppInfo = s.LO.map();
        m_mapRichPresenceLoc = s.LO.map();
        m_cAppInfoRequestsInFlight = 0;
        m_setPendingAppInfo = new Set();
        m_PendingAppInfoPromise;
        m_PendingAppInfoResolve;
        m_CacheStorage = null;
        m_fnCallbackOnAppInfoLoaded = new g.pB();
        constructor() {
          (0, s.rC)(this);
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
              (0, u.X)(
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
            ((0, u.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new p.Am(e);
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
            let e = a.gA.Init(f.Fi);
            e.Body().set_language((0, i.jM)(r.De.LANGUAGE));
            const n = 50;
            for (; t.length > 0; ) {
              const o = Math.min(n, t.length),
                s = t.slice(0, o);
              (t = t.slice(o)), e.Body().set_appids(s);
              const i = await f.AE.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                e,
              );
              1 == i.GetEResult()
                ? this.OnGetAppsResponse(i)
                : console.error(
                    `Error when calling CommunityService.GetApps: EResult=${i.GetEResult()}, AppIDs:`,
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
            (0, u.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new p.Am(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new p.Am(t.appid());
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
                : ((n = new p.Am(e)),
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
              let o = this.m_mapAppInfo.get(e);
              return (
                (0, u.X)(
                  o,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                o
                  ? ((o = new p.Am(e)),
                    o.DeserializeFromCacheObject(n),
                    o.is_initialized
                      ? (this.m_mapAppInfo.set(e, o),
                        o.time_updated_from_server < t ? e : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          e,
                          n,
                        ),
                        e))
                  : e
              );
            };
          let o = e.map((e) => n(e));
          return (await Promise.all(o)).filter((e) => null !== e);
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
          const o = this.GetRichPresenceLoc(e);
          return o
            ? o.Localize(t, n)
            : 1 != r.De.EUNIVERSE
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
              t.m_nLastUpdated + 6e4 * p.x3 < Date.now() &&
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
              o = e.m_mapLanguages.get(t);
            o
              ? o.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (o = e.m_mapLanguages.get(t)));
            for (let e of n.tokens()) o?.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = a.gA.Init(f.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(r.De.LANGUAGE),
                    f.AE.GetAppRichPresenceLocalization(
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
      (0, o.gn)([s.aD], d.prototype, "OnGetAppsResponse", null),
        (0, o.gn)([s.aD], d.prototype, "OnRichPresenceLocUpdate", null);
      const A = new d();
    },
    29480: (e, t, n) => {
      n.d(t, { T: () => a });
      var o = n(80751),
        s = n.n(o),
        i = n(47427);
      function a(e) {
        const t = i.useRef(s().CancelToken.source());
        return (
          i.useEffect(() => {
            const n = t.current;
            return () => n.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          t.current
        );
      }
    },
  },
]);

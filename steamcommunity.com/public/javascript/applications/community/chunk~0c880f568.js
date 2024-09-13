/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9436],
  {
    51006: (e, t, n) => {
      n.d(t, { Vw: () => I, Mi: () => d });
      var s = n(34629),
        o = n(14947),
        i = n(22837),
        a = n(56545),
        p = n(17690),
        r = n(78327);
      class c {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = o.sH.map()),
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
          let n = r.TS.LANGUAGE;
          return h(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t,
          );
        }
        SubstituteParams(e, t) {
          let n = r.TS.LANGUAGE;
          return l(
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
        let i = e;
        e = e.toLowerCase();
        let a = "";
        if (
          (t && t.has(e) && (a = t.get(e)),
          !a && n && n.has(e) && (a = n.get(e)),
          a)
        )
          a = l(a, t, n, s, o);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              s,
              i,
              "Tokens:",
              t,
              "Fallback:",
              n,
            ),
          t && 1 != r.TS.EUNIVERSE)
        )
          return e;
        return a;
      }
      function l(e, t, n, s, o) {
        let i = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (i)
          for (let a of i) {
            let i = h(m(a.slice(1, -1), o), t, n, s, o);
            if (!i) return "";
            e = e.replace(a, i);
          }
        return (e = m(e, o));
      }
      function m(e, t) {
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
      var f = n(37403),
        u = n(44332),
        g = n(51240);
      class d {
        constructor() {
          (this.m_mapAppInfo = o.sH.map()),
            (this.m_mapRichPresenceLoc = o.sH.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new g.lu()),
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
              (0, u.w)(
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
            ((0, u.w)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init",
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new p.by(e);
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
            let e = a.w.Init(f._z);
            e.Body().set_language((0, i.sf)(r.TS.LANGUAGE));
            const s = 50;
            for (; n.length > 0; ) {
              const t = Math.min(s, n.length),
                o = n.slice(0, t);
              (n = n.slice(t)), e.Body().set_appids(o);
              const i = await f.BE.GetApps(
                this.m_CMInterface.GetServiceTransport(),
                e,
              );
              1 == i.GetEResult()
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
            (0, u.w)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`,
            ),
              e &&
                ((e = new p.by(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new p.by(t.appid());
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
                : ((n = new p.by(e)),
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
              const s = await (null === (n = this.m_CacheStorage) ||
              void 0 === n
                ? void 0
                : n.GetObject(this.GetCacheKeyForAppID(e)));
              if (!s) return e;
              let o = this.m_mapAppInfo.get(e);
              return (
                (0, u.w)(
                  o,
                  "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                ),
                o
                  ? ((o = new p.by(e)),
                    o.DeserializeFromCacheObject(s),
                    o.is_initialized
                      ? (this.m_mapAppInfo.set(e, o),
                        o.time_updated_from_server < t ? e : null)
                      : (console.warn(
                          "Failed to deserialize cached App Info: ",
                          e,
                          s,
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
            : 1 != r.TS.EUNIVERSE
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
              t.m_nLastUpdated + 6e4 * p.IU < Date.now() &&
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
              s = e.m_mapLanguages.get(t);
            s
              ? s.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (s = e.m_mapLanguages.get(t)));
            for (let e of n.tokens())
              null == s || s.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = a.w.Init(f.zQ);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(r.TS.LANGUAGE),
                    f.BE.GetAppRichPresenceLocalization(
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
      (0, s.Cg)([o.XI], d.prototype, "OnGetAppsResponse", null),
        (0, s.Cg)([o.XI], d.prototype, "OnRichPresenceLocUpdate", null);
      const I = new d();
    },
  },
]);

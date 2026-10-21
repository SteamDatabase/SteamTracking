/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [79436],
    {
      24525: (S, A, a) => {
        a.d(A, { $e: () => d, B7: () => l, Pe: () => U, Pv: () => g });
        const h = 0,
          d = 1,
          g = 2,
          l = 4,
          m = 8,
          f = 16,
          _ = 32,
          T = 64,
          P = 128,
          R = 256,
          L = 512,
          I = 1024,
          r = 2048,
          C = 4096,
          G = 8192,
          v = 16384,
          w = 32768,
          M = 65536,
          U = 1073741824,
          y = null;
      },
      67529: (S, A, a) => {
        a.d(A, { IU: () => P, by: () => R, sc: () => m });
        var h = a(3166),
          d = a(35413),
          g = a(71742),
          l = a(24525);
        const m = 0,
          f = "061818254b2c99ac49e6626adb128ed1282a392f",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          T = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          P = 120;
        class R {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(r) {
            this.m_unAppID = r;
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
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, f);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, f);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == l.B7 || this.apptype == l.Pv;
          }
          BuildAppURL(r, C) {
            return r
              ? h.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  r +
                  ".jpg"
              : (0, d.t)(C);
          }
          DeserializeFromMessage(r) {
            (this.m_bInitialized = !0),
              (this.m_strName = r.name()),
              (this.m_strIconURL = r.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = r.app_type());
          }
          DeserializeFromAppOverview(r) {
            r.icon_hash() && r.app_type() != l.Pe
              ? ((this.m_bInitialized = !0),
                (this.m_strName = r.display_name()),
                (this.m_strIconURL = r.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = r.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(r) {
            try {
              (this.m_strName = r.strName),
                (this.m_strIconURL = r.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(r.strUpdatedFromServer)),
                (this.m_eAppType = r.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, g.wT)(
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
        class L {}
      },
      85528: (S, A, a) => {
        a.d(A, { Vw: () => b, Mi: () => y });
        var h = a(14947),
          d = a(99412),
          g = a(72604),
          l = a(35038),
          m = a(67529),
          f = a(3166);
        class _ {
          m_nLastUpdated = 0;
          m_mapLanguages = h.sH.map();
          m_appid;
          m_fetching = null;
          constructor(e) {
            this.m_appid = e;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(e) {
            return this.m_mapLanguages.has(e)
              ? this.m_mapLanguages.get(e)
              : null;
          }
          Localize(e, t) {
            let n = f.TS.LANGUAGE,
              s = this.GetTokenList(n),
              p = n != "english" ? this.GetTokenList("english") : null;
            return T(e, s, p, this.m_appid, t);
          }
          SubstituteParams(e, t) {
            let n = f.TS.LANGUAGE,
              s = this.GetTokenList(n),
              p = n != "english" ? this.GetTokenList("english") : null;
            return P(e, s, p, this.m_appid, t);
          }
        }
        function T(i, e, t, n, s) {
          if (!i.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                i,
                "appid",
                n,
                "tokens",
                e,
              ),
              ""
            );
          let p = i;
          i = i.toLowerCase();
          let o = "";
          if (
            (e && e.has(i) && (o = e.get(i)),
            !o && t && t.has(i) && (o = t.get(i)),
            o)
          )
            o = P(o, e, t, n, s);
          else if (
            ((e || t) &&
              console.log(
                "No loc found for appid",
                n,
                p,
                "Tokens:",
                e,
                "Fallback:",
                t,
              ),
            e && f.TS.EUNIVERSE != d.wLO)
          )
            return i;
          return o;
        }
        function P(i, e, t, n, s) {
          let p = /{[A-za-z0-9_%#:]+}/g,
            o = i.match(p);
          if (o)
            for (let c of o) {
              let E = c.slice(1, -1),
                u = R(E, s),
                O = T(u, e, t, n, s);
              if (!O) return "";
              i = i.replace(c, O);
            }
          return (i = R(i, s)), i;
        }
        function R(i, e) {
          let t = /%[A-Za-z0-9_:]+%/g,
            n = i.match(t);
          if (n)
            for (let s of n) {
              let p = s.slice(1, -1).toLowerCase(),
                o = e.get(p);
              o == null
                ? console.log("No rich presence found for", p)
                : (i = i.replace(s, o));
            }
          return i;
        }
        var L = a(98112),
          I = a(71742),
          r = a(8323),
          C = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          v = (i, e, t, n) => {
            for (
              var s = n > 1 ? void 0 : n ? G(e, t) : e, p = i.length - 1, o;
              p >= 0;
              p--
            )
              (o = i[p]) && (s = (n ? o(e, t, s) : o(s)) || s);
            return n && s && C(e, t, s), s;
          };
        function w(i) {
          return useObserver(() => b.GetAppInfo(i));
        }
        function M(i) {
          return useObserver(() => i.map((e) => b.GetAppInfo(e)));
        }
        const U = 3600 * 24 * 7 * 2;
        class y {
          m_CMInterface;
          m_mapAppInfo = h.sH.map();
          m_mapRichPresenceLoc = h.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new r.lu();
          constructor() {
            (0, h.Gn)(this);
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
            if (!this.BHavePendingAppInfoRequests()) {
              (0, I.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                e();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(e);
          }
          IsLoadingAppID(e) {
            return this.m_setPendingAppInfo.has(e);
          }
          GetAppInfo(e) {
            if (
              ((0, I.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(e))
            ) {
              let t = new m.by(e);
              this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
            }
            return this.m_mapAppInfo.get(e);
          }
          QueueAppInfoRequest(e) {
            return e
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (t) => (this.m_PendingAppInfoResolve = t),
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
              let n = l.w.Init(L._z);
              n.Body().set_language((0, d.sfN)(f.TS.LANGUAGE));
              const s = 50;
              for (; t.length > 0; ) {
                const p = Math.min(s, t.length),
                  o = t.slice(0, p);
                (t = t.slice(p)), n.Body().set_appids(o);
                const c = await L.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  n,
                );
                c.GetEResult() == g.R
                  ? this.OnGetAppsResponse(c)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${c.GetEResult()}, AppIDs:`,
                      o,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(e) {
            let t = [];
            for (let n of e.Body().apps()) {
              let s = this.m_mapAppInfo.get(n.appid());
              (0, I.wT)(
                s,
                `Got AppInfo response for unrequested AppID: ${n.appid()}`,
              ),
                s &&
                  ((s = new m.by(n.appid())),
                  s.DeserializeFromMessage(n),
                  this.m_mapAppInfo.set(n.appid(), s),
                  t.push(s));
            }
            this.SaveAppInfoBatchToLocalCache(t);
          }
          OnAppOverviewChange(e) {
            for (let t of e) {
              const n = new m.by(t.appid());
              n.DeserializeFromAppOverview(t),
                n.is_initialized && this.m_mapAppInfo.set(t.appid(), n);
            }
          }
          async EnsureAppInfoForAppIDs(e) {
            let t = !1;
            return (
              e.forEach((n) => {
                let s = this.m_mapAppInfo.get(n);
                if (s) {
                  s.is_valid || (t = !0);
                  return;
                }
                (s = new m.by(n)),
                  this.m_mapAppInfo.set(n, s),
                  this.QueueAppInfoRequest(n),
                  (t = !0);
              }),
              t && this.m_PendingAppInfoPromise !== void 0
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
            const t = new Date(new Date().getTime() - U * 1e3),
              n = async (c) => {
                const E = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(c),
                );
                if (!E) return c;
                let u = this.m_mapAppInfo.get(c);
                return (
                  (0, I.wT)(
                    u,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  u
                    ? ((u = new m.by(c)),
                      u.DeserializeFromCacheObject(E),
                      u.is_initialized
                        ? (this.m_mapAppInfo.set(c, u),
                          u.time_updated_from_server < t ? c : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            c,
                            E,
                          ),
                          c))
                    : c
                );
              };
            let s = e.map((c) => n(c));
            return (await Promise.all(s)).filter((c) => c !== null);
          }
          async SaveAppInfoBatchToLocalCache(e) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((t) => t.appid),
              );
              for (const t of e) {
                const n = t.SerializeToCacheObject();
                n &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    n,
                  );
              }
            }
          }
          Localize(e, t, n) {
            const s = this.GetRichPresenceLoc(e);
            return s
              ? s.Localize(t, n)
              : f.TS.EUNIVERSE != d.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
                  ),
                  t)
                : "";
          }
          GetRichPresenceLoc(e) {
            if (this.m_mapRichPresenceLoc.has(e.toString())) {
              let n = this.m_mapRichPresenceLoc.get(e.toString());
              return (
                n.m_nLastUpdated + 1e3 * 60 * m.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(n),
                n
              );
            }
            let t = new _(e);
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
              let s = n.language(),
                p = e.m_mapLanguages.get(s);
              p
                ? p.clear()
                : (e.m_mapLanguages.set(s, new Map()),
                  (p = e.m_mapLanguages.get(s)));
              for (let o of n.tokens())
                p?.set(o.name().toLowerCase(), o.value());
            }
          }
          QueueRichPresenceLocRequest(e) {
            return (
              e.m_fetching ||
                ((e.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let t = l.w.Init(L.zQ);
                    return (
                      t.Body().set_appid(e.GetAppID()),
                      t.Body().set_language(f.TS.LANGUAGE),
                      L.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        t,
                      )
                    );
                  })
                  .then(
                    (t) => (
                      (e.m_fetching = null),
                      t.GetEResult() != g.R
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
        v([h.XI], y.prototype, "OnGetAppsResponse", 1),
          v([h.XI], y.prototype, "OnRichPresenceLocUpdate", 1);
        const b = new y();
      },
      35413: (S, A, a) => {
        a.d(A, { d: () => d, t: () => g });
        var h = a(3166);
        const d = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function g(l, m) {
          let f = ".jpg";
          (!l || l === "0000000000000000000000000000000000000000") && (l = d),
            l.length == 44 && ((f = l.substr(-4)), (l = l.substr(0, 40)));
          let _ = h.TS.AVATAR_BASE_URL;
          return (
            _ ||
              ((_ = h.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += l.substr(0, 2) + "/")),
            (_ += l),
            m && m != "small" && (_ += "_" + m),
            (_ += f),
            _
          );
        }
      },
    },
  ]);
})();

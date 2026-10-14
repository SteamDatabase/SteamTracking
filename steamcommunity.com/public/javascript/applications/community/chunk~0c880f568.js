/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [9436],
    {
      24525: (O, v, a) => {
        a.d(v, { $e: () => d, B7: () => l, Pe: () => w, Pv: () => L });
        const _ = 0,
          d = 1,
          L = 2,
          l = 4,
          h = 8,
          u = 16,
          m = 32,
          C = 64,
          P = 128,
          G = 256,
          S = 512,
          y = 1024,
          E = 2048,
          b = 4096,
          f = 8192,
          o = 16384,
          g = 32768,
          B = 65536,
          w = 1073741824,
          M = null;
      },
      67529: (O, v, a) => {
        a.d(v, { IU: () => y, by: () => E, sc: () => C });
        var _ = a(3166),
          d = a(35413),
          L = a(71742),
          l = a(24525),
          h = Object.defineProperty,
          u = (f, o, g) =>
            o in f
              ? h(f, o, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: g,
                })
              : (f[o] = g),
          m = (f, o, g) => u(f, typeof o != "symbol" ? o + "" : o, g);
        const C = 0,
          P = "061818254b2c99ac49e6626adb128ed1282a392f",
          G = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          S = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          y = 120;
        class E {
          constructor(o) {
            m(this, "m_unAppID"),
              m(this, "m_bInitialized", !1),
              m(this, "m_strName"),
              m(this, "m_strIconURL"),
              m(this, "m_dtUpdatedFromServer"),
              m(this, "m_eAppType"),
              (this.m_unAppID = o);
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
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, P);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, P);
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
          BuildAppURL(o, g) {
            return o
              ? _.TS.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  o +
                  ".jpg"
              : (0, d.t)(g);
          }
          DeserializeFromMessage(o) {
            (this.m_bInitialized = !0),
              (this.m_strName = o.name()),
              (this.m_strIconURL = o.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = o.app_type());
          }
          DeserializeFromAppOverview(o) {
            o.icon_hash() && o.app_type() != l.Pe
              ? ((this.m_bInitialized = !0),
                (this.m_strName = o.display_name()),
                (this.m_strIconURL = o.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = o.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(o) {
            try {
              (this.m_strName = o.strName),
                (this.m_strIconURL = o.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(o.strUpdatedFromServer)),
                (this.m_eAppType = o.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, L.wT)(
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
        class b {}
      },
      85528: (O, v, a) => {
        a.d(v, { Vw: () => F, Mi: () => U });
        var _ = a(14947),
          d = a(99412),
          L = a(72604),
          l = a(35038),
          h = a(67529),
          u = a(3166),
          m = Object.defineProperty,
          C = (i, e, t) =>
            e in i
              ? m(i, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (i[e] = t),
          P = (i, e, t) => C(i, typeof e != "symbol" ? e + "" : e, t);
        class G {
          constructor(e) {
            P(this, "m_nLastUpdated", 0),
              P(this, "m_mapLanguages", _.sH.map()),
              P(this, "m_appid"),
              P(this, "m_fetching", null),
              (this.m_appid = e);
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
            let n = u.TS.LANGUAGE,
              s = this.GetTokenList(n),
              r = n != "english" ? this.GetTokenList("english") : null;
            return S(e, s, r, this.m_appid, t);
          }
          SubstituteParams(e, t) {
            let n = u.TS.LANGUAGE,
              s = this.GetTokenList(n),
              r = n != "english" ? this.GetTokenList("english") : null;
            return y(e, s, r, this.m_appid, t);
          }
        }
        function S(i, e, t, n, s) {
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
          let r = i;
          i = i.toLowerCase();
          let p = "";
          if (
            (e && e.has(i) && (p = e.get(i)),
            !p && t && t.has(i) && (p = t.get(i)),
            p)
          )
            p = y(p, e, t, n, s);
          else if (
            ((e || t) &&
              console.log(
                "No loc found for appid",
                n,
                r,
                "Tokens:",
                e,
                "Fallback:",
                t,
              ),
            e && u.TS.EUNIVERSE != d.wLO)
          )
            return i;
          return p;
        }
        function y(i, e, t, n, s) {
          let r = /{[A-za-z0-9_%#:]+}/g,
            p = i.match(r);
          if (p)
            for (let c of p) {
              let R = c.slice(1, -1),
                T = E(R, s),
                A = S(T, e, t, n, s);
              if (!A) return "";
              i = i.replace(c, A);
            }
          return (i = E(i, s)), i;
        }
        function E(i, e) {
          let t = /%[A-Za-z0-9_:]+%/g,
            n = i.match(t);
          if (n)
            for (let s of n) {
              let r = s.slice(1, -1).toLowerCase(),
                p = e.get(r);
              p == null
                ? console.log("No rich presence found for", r)
                : (i = i.replace(s, p));
            }
          return i;
        }
        var b = a(98112),
          f = a(71742),
          o = a(8323),
          g = Object.defineProperty,
          B = Object.getOwnPropertyDescriptor,
          w = (i, e, t) =>
            e in i
              ? g(i, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (i[e] = t),
          M = (i, e, t, n) => {
            for (
              var s = n > 1 ? void 0 : n ? B(e, t) : e, r = i.length - 1, p;
              r >= 0;
              r--
            )
              (p = i[r]) && (s = (n ? p(e, t, s) : p(s)) || s);
            return n && s && g(e, t, s), s;
          },
          I = (i, e, t) => w(i, typeof e != "symbol" ? e + "" : e, t);
        function D(i) {
          return useObserver(() => F.GetAppInfo(i));
        }
        function N(i) {
          return useObserver(() => i.map((e) => F.GetAppInfo(e)));
        }
        const z = 3600 * 24 * 7 * 2;
        class U {
          constructor() {
            I(this, "m_CMInterface"),
              I(this, "m_mapAppInfo", _.sH.map()),
              I(this, "m_mapRichPresenceLoc", _.sH.map()),
              I(this, "m_cAppInfoRequestsInFlight", 0),
              I(this, "m_setPendingAppInfo", new Set()),
              I(this, "m_PendingAppInfoPromise"),
              I(this, "m_PendingAppInfoResolve"),
              I(this, "m_CacheStorage", null),
              I(this, "m_fnCallbackOnAppInfoLoaded", new o.lu()),
              (0, _.Gn)(this);
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
              (0, f.wT)(
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
              ((0, f.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(e))
            ) {
              let t = new h.by(e);
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
              e == null || e();
          }
          async LoadAppInfoBatch(e) {
            var t;
            this.m_cAppInfoRequestsInFlight++;
            let n = await this.LoadAppInfoBatchFromLocalCache(e);
            if (n.length) {
              console.log("Loading batch of App Info from Steam: ", n),
                await ((t = this.m_CMInterface) == null
                  ? void 0
                  : t.WaitUntilLoggedOn());
              let s = l.w.Init(b._z);
              s.Body().set_language((0, d.sfN)(u.TS.LANGUAGE));
              const r = 50;
              for (; n.length > 0; ) {
                const p = Math.min(r, n.length),
                  c = n.slice(0, p);
                (n = n.slice(p)), s.Body().set_appids(c);
                const R = await b.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  s,
                );
                R.GetEResult() == L.R
                  ? this.OnGetAppsResponse(R)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${R.GetEResult()}, AppIDs:`,
                      c,
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
              (0, f.wT)(
                s,
                `Got AppInfo response for unrequested AppID: ${n.appid()}`,
              ),
                s &&
                  ((s = new h.by(n.appid())),
                  s.DeserializeFromMessage(n),
                  this.m_mapAppInfo.set(n.appid(), s),
                  t.push(s));
            }
            this.SaveAppInfoBatchToLocalCache(t);
          }
          OnAppOverviewChange(e) {
            for (let t of e) {
              const n = new h.by(t.appid());
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
                (s = new h.by(n)),
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
            const t = new Date(new Date().getTime() - z * 1e3),
              n = async (c) => {
                var R;
                const T = await ((R = this.m_CacheStorage) == null
                  ? void 0
                  : R.GetObject(this.GetCacheKeyForAppID(c)));
                if (!T) return c;
                let A = this.m_mapAppInfo.get(c);
                return (
                  (0, f.wT)(
                    A,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  A
                    ? ((A = new h.by(c)),
                      A.DeserializeFromCacheObject(T),
                      A.is_initialized
                        ? (this.m_mapAppInfo.set(c, A),
                          A.time_updated_from_server < t ? c : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            c,
                            T,
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
              : u.TS.EUNIVERSE != d.wLO
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
                n.m_nLastUpdated + 1e3 * 60 * h.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(n),
                n
              );
            }
            let t = new G(e);
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
                r = e.m_mapLanguages.get(s);
              r
                ? r.clear()
                : (e.m_mapLanguages.set(s, new Map()),
                  (r = e.m_mapLanguages.get(s)));
              for (let p of n.tokens())
                r == null || r.set(p.name().toLowerCase(), p.value());
            }
          }
          QueueRichPresenceLocRequest(e) {
            return (
              e.m_fetching ||
                ((e.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let t = l.w.Init(b.zQ);
                    return (
                      t.Body().set_appid(e.GetAppID()),
                      t.Body().set_language(u.TS.LANGUAGE),
                      b.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        t,
                      )
                    );
                  })
                  .then(
                    (t) => (
                      (e.m_fetching = null),
                      t.GetEResult() != L.R
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
        M([_.XI], U.prototype, "OnGetAppsResponse", 1),
          M([_.XI], U.prototype, "OnRichPresenceLocUpdate", 1);
        const F = new U();
      },
      35413: (O, v, a) => {
        a.d(v, { d: () => d, t: () => L });
        var _ = a(3166);
        const d = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function L(l, h) {
          let u = ".jpg";
          (!l || l === "0000000000000000000000000000000000000000") && (l = d),
            l.length == 44 && ((u = l.substr(-4)), (l = l.substr(0, 40)));
          let m = _.TS.AVATAR_BASE_URL;
          return (
            m ||
              ((m = _.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (m += l.substr(0, 2) + "/")),
            (m += l),
            h && h != "small" && (m += "_" + h),
            (m += u),
            m
          );
        }
      },
    },
  ]);
})();

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9236],
    {
      71698: (P, ge, a) => {
        "use strict";
        a.d(ge, { H: () => ie, s: () => z });
        var e = a(90626),
          F = a(41623);
        let R = 0;
        function ie(q, ee) {
          (0, e.useEffect)(() => {
            if (!(q || ee))
              return (
                R++,
                () => {
                  --R == 0 && (0, F.s)();
                }
              );
          }, [q, ee]);
        }
        function z(q) {
          const [ee, M] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const c = window.setTimeout(() => M(!0), q);
            return () => window.clearTimeout(c);
          }, [q]),
            ie(ee);
        }
      },
      85528: (P, ge, a) => {
        "use strict";
        a.d(ge, { Vw: () => U });
        var e = a(14947),
          F = a(99412),
          R = a(72604),
          ie = a(35038),
          z = a(67529),
          q = a(3166);
        class ee {
          m_nLastUpdated = 0;
          m_mapLanguages = e.sH.map();
          m_appid;
          m_fetching = null;
          constructor(l) {
            this.m_appid = l;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(l) {
            return this.m_mapLanguages.has(l)
              ? this.m_mapLanguages.get(l)
              : null;
          }
          Localize(l, g) {
            let f = q.TS.LANGUAGE,
              y = this.GetTokenList(f),
              Y = f != "english" ? this.GetTokenList("english") : null;
            return M(l, y, Y, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let f = q.TS.LANGUAGE,
              y = this.GetTokenList(f),
              Y = f != "english" ? this.GetTokenList("english") : null;
            return c(l, y, Y, this.m_appid, g);
          }
        }
        function M(E, l, g, f, y) {
          if (!E.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                E,
                "appid",
                f,
                "tokens",
                l,
              ),
              ""
            );
          let Y = E;
          E = E.toLowerCase();
          let T = "";
          if (
            (l && l.has(E) && (T = l.get(E)),
            !T && g && g.has(E) && (T = g.get(E)),
            T)
          )
            T = c(T, l, g, f, y);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                f,
                Y,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && q.TS.EUNIVERSE != F.wLO)
          )
            return E;
          return T;
        }
        function c(E, l, g, f, y) {
          let Y = /{[A-za-z0-9_%#:]+}/g,
            T = E.match(Y);
          if (T)
            for (let K of T) {
              let re = K.slice(1, -1),
                me = O(re, y),
                Fe = M(me, l, g, f, y);
              if (!Fe) return "";
              E = E.replace(K, Fe);
            }
          return (E = O(E, y)), E;
        }
        function O(E, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            f = E.match(g);
          if (f)
            for (let y of f) {
              let Y = y.slice(1, -1).toLowerCase(),
                T = l.get(Y);
              T == null
                ? console.log("No rich presence found for", Y)
                : (E = E.replace(y, T));
            }
          return E;
        }
        var ae = a(72849),
          te = a(71742),
          de = a(8323),
          oe = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          X = (E, l, g, f) => {
            for (
              var y = f > 1 ? void 0 : f ? W(l, g) : l, Y = E.length - 1, T;
              Y >= 0;
              Y--
            )
              (T = E[Y]) && (y = (f ? T(l, g, y) : T(y)) || y);
            return f && y && oe(l, g, y), y;
          };
        function Q(E) {
          return useObserver(() => U.GetAppInfo(E));
        }
        function A(E) {
          return useObserver(() => E.map((l) => U.GetAppInfo(l)));
        }
        const m = 3600 * 24 * 7 * 2;
        class L {
          m_CMInterface;
          m_mapAppInfo = e.sH.map();
          m_mapRichPresenceLoc = e.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new de.lu();
          constructor() {
            (0, e.Gn)(this);
          }
          Init(l) {
            this.m_CMInterface = l;
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
          RegisterCallbackOnLoad(l) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, te.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                l();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(l);
          }
          IsLoadingAppID(l) {
            return this.m_setPendingAppInfo.has(l);
          }
          GetAppInfo(l) {
            if (
              ((0, te.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(l))
            ) {
              let g = new z.by(l);
              this.m_mapAppInfo.set(l, g), this.QueueAppInfoRequest(l);
            }
            return this.m_mapAppInfo.get(l);
          }
          QueueAppInfoRequest(l) {
            return l
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (g) => (this.m_PendingAppInfoResolve = g),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(l),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const l = this.m_PendingAppInfoResolve,
              g = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(g),
              l?.();
          }
          async LoadAppInfoBatch(l) {
            this.m_cAppInfoRequestsInFlight++;
            let g = await this.LoadAppInfoBatchFromLocalCache(l);
            if (g.length) {
              console.log("Loading batch of App Info from Steam: ", g),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let f = ie.w.Init(ae._z);
              f.Body().set_language((0, F.sfN)(q.TS.LANGUAGE));
              const y = 50;
              for (; g.length > 0; ) {
                const Y = Math.min(y, g.length),
                  T = g.slice(0, Y);
                (g = g.slice(Y)), f.Body().set_appids(T);
                const K = await ae.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  f,
                );
                K.GetEResult() == R.R
                  ? this.OnGetAppsResponse(K)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${K.GetEResult()}, AppIDs:`,
                      T,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(l) {
            let g = [];
            for (let f of l.Body().apps()) {
              let y = this.m_mapAppInfo.get(f.appid());
              (0, te.wT)(
                y,
                `Got AppInfo response for unrequested AppID: ${f.appid()}`,
              ),
                y &&
                  ((y = new z.by(f.appid())),
                  y.DeserializeFromMessage(f),
                  this.m_mapAppInfo.set(f.appid(), y),
                  g.push(y));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const f = new z.by(g.appid());
              f.DeserializeFromAppOverview(g),
                f.is_initialized && this.m_mapAppInfo.set(g.appid(), f);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((f) => {
                let y = this.m_mapAppInfo.get(f);
                if (y) {
                  y.is_valid || (g = !0);
                  return;
                }
                (y = new z.by(f)),
                  this.m_mapAppInfo.set(f, y),
                  this.QueueAppInfoRequest(f),
                  (g = !0);
              }),
              g && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(l) {
            this.m_CacheStorage = l;
          }
          GetCacheKeyForAppID(l) {
            return "APPINFO_" + l;
          }
          async LoadAppInfoBatchFromLocalCache(l) {
            if (!this.m_CacheStorage) return l;
            console.log("Loading batch of App Info from Local Cache: ", l);
            const g = new Date(new Date().getTime() - m * 1e3),
              f = async (K) => {
                const re = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(K),
                );
                if (!re) return K;
                let me = this.m_mapAppInfo.get(K);
                return (
                  (0, te.wT)(
                    me,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  me
                    ? ((me = new z.by(K)),
                      me.DeserializeFromCacheObject(re),
                      me.is_initialized
                        ? (this.m_mapAppInfo.set(K, me),
                          me.time_updated_from_server < g ? K : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            K,
                            re,
                          ),
                          K))
                    : K
                );
              };
            let y = l.map((K) => f(K));
            return (await Promise.all(y)).filter((K) => K !== null);
          }
          async SaveAppInfoBatchToLocalCache(l) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                l.map((g) => g.appid),
              );
              for (const g of l) {
                const f = g.SerializeToCacheObject();
                f &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    f,
                  );
              }
            }
          }
          Localize(l, g, f) {
            const y = this.GetRichPresenceLoc(l);
            return y
              ? y.Localize(g, f)
              : q.TS.EUNIVERSE != F.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${l} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(l) {
            if (this.m_mapRichPresenceLoc.has(l.toString())) {
              let f = this.m_mapRichPresenceLoc.get(l.toString());
              return (
                f.m_nLastUpdated + 1e3 * 60 * z.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(f),
                f
              );
            }
            let g = new ee(l);
            return (
              this.m_mapRichPresenceLoc.set(l.toString(), g),
              this.QueueRichPresenceLocRequest(g),
              g
            );
          }
          GetRichPresenceLocAsync(l) {
            let g = this.GetRichPresenceLoc(l);
            return g.m_nLastUpdated ? Promise.resolve(g) : g.m_fetching;
          }
          OnRichPresenceLocUpdate(l, g) {
            l.m_nLastUpdated = Date.now();
            for (let f of g) {
              let y = f.language(),
                Y = l.m_mapLanguages.get(y);
              Y
                ? Y.clear()
                : (l.m_mapLanguages.set(y, new Map()),
                  (Y = l.m_mapLanguages.get(y)));
              for (let T of f.tokens())
                Y?.set(T.name().toLowerCase(), T.value());
            }
          }
          QueueRichPresenceLocRequest(l) {
            return (
              l.m_fetching ||
                ((l.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = ie.w.Init(ae.zQ);
                    return (
                      g.Body().set_appid(l.GetAppID()),
                      g.Body().set_language(q.TS.LANGUAGE),
                      ae.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (l.m_fetching = null),
                      g.GetEResult() != R.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            l,
                            g.Body().token_lists(),
                          ),
                          Promise.resolve(l))
                    ),
                  )),
                l.m_fetching.catch(() => {
                  l.m_fetching = null;
                })),
              l.m_fetching
            );
          }
        }
        X([e.XI], L.prototype, "OnGetAppsResponse", 1),
          X([e.XI], L.prototype, "OnRichPresenceLocUpdate", 1);
        const U = new L();
      },
      50109: (P, ge, a) => {
        "use strict";
        a.d(ge, { E: () => de, O: () => te });
        var e = a(14947),
          F = a(65946),
          R = a(99412),
          ie = a(41635),
          z = a(27066),
          q = a(3166),
          ee = a(38585),
          M = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          O = (oe, W, X, Q) => {
            for (
              var A = Q > 1 ? void 0 : Q ? c(W, X) : W, m = oe.length - 1, L;
              m >= 0;
              m--
            )
              (L = oe[m]) && (A = (Q ? L(W, X, A) : L(A)) || A);
            return Q && A && M(W, X, A), A;
          };
        const ae = class Et {
          m_eCurLang = (0, R.sfN)(q.TS.LANGUAGE);
          m_rgHasData = (0, ie.$Y)([], R.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new ee.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(W) {
            return this.m_eCurLang != W
              ? ((this.m_eCurLang = W), this.GetCallback().Dispatch(W), !0)
              : !1;
          }
          SetHasLanguage(W) {
            W.forEach((X, Q) => {
              this.m_rgHasData[Q] != X && (this.m_rgHasData[Q] = X);
            });
          }
          BHasLanguageData(W) {
            return this.m_rgHasData[W];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(W) {
            W != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = W);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              Et.s_globalSingletonStore ||
                (Et.s_globalSingletonStore = new Et()),
              Et.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        O([e.sH], ae.prototype, "m_eCurLang", 2),
          O([e.sH], ae.prototype, "m_rgHasData", 2),
          O([e.sH], ae.prototype, "m_bHasLocalizationContext", 2),
          O([z.o], ae.prototype, "GetCurEditLanguage", 1),
          O([z.o], ae.prototype, "SetCurEditLanguage", 1),
          O([e.XI.bound], ae.prototype, "SetHasLanguage", 1),
          O([z.o], ae.prototype, "BHasLanguageData", 1);
        let te = ae;
        function de() {
          return (0, F.q3)(() => te.Get().GetCurEditLanguage());
        }
      },
      37656: (P, ge, a) => {
        "use strict";
        a.d(ge, { w: () => U });
        var e = a(41735),
          F = a.n(e),
          R = a(14947),
          ie = a(65946),
          z = a(90626),
          q = a(27066),
          ee = a(8323),
          M = a(30096),
          c = a(3166),
          O = Object.defineProperty,
          ae = Object.getOwnPropertyDescriptor,
          te = (E, l, g, f) => {
            for (
              var y = f > 1 ? void 0 : f ? ae(l, g) : l, Y = E.length - 1, T;
              Y >= 0;
              Y--
            )
              (T = E[Y]) && (y = (f ? T(l, g, y) : T(y)) || y);
            return f && y && O(l, g, y), y;
          };
        const de = class Fn {
          constructor() {
            (0, R.Gn)(this);
          }
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
          }
          clone() {
            const l = new Fn();
            return (
              (l.giveaway_id = this.giveaway_id),
              (l.seconds_until_drawing = this.seconds_until_drawing),
              (l.rtime_start = this.rtime_start),
              (l.rtime_end = this.rtime_end),
              (l.closed = this.closed),
              (l.winner_count = this.winner_count),
              l
            );
          }
        };
        te([R.sH], de.prototype, "giveaway_id", 2),
          te([R.sH], de.prototype, "seconds_until_drawing", 2),
          te([R.sH], de.prototype, "rtime_start", 2),
          te([R.sH], de.prototype, "rtime_end", 2),
          te([R.sH], de.prototype, "closed", 2),
          te([R.sH], de.prototype, "winner_count", 2);
        let oe = de;
        const W = class ot {
          constructor() {
            (0, R.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(l, g) {
            return l + "_" + g;
          }
          GetInfoByInstance(l, g) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(l, g),
            );
          }
          GetNextDrawChangeCallback(l) {
            let g = this.m_mapNextDrawChangeCallback.get(l);
            return (
              g ||
                ((g = new ee.lu()), this.m_mapNextDrawChangeCallback.set(l, g)),
              g
            );
          }
          CopyToGiveaway(l, g) {
            g.closed != l.closed && (g.closed = l.closed),
              g.giveaway_id != l.giveaway_id && (g.giveaway_id = l.giveaway_id),
              g.rtime_start != l.rtime_start && (g.rtime_start = l.rtime_start),
              g.rtime_end != l.rtime_end && (g.rtime_end = l.rtime_end),
              g.winner_count != l.winner_count &&
                (g.winner_count = l.winner_count),
              g.seconds_until_drawing != l.seconds_until_drawing &&
                (g.seconds_until_drawing = l.seconds_until_drawing);
          }
          async ReloadGiveaway(l, g) {
            if (!l) return null;
            let f = c.TS.STORE_BASE_URL + "prizes/nextdraw/" + l,
              y = { origin: self.origin };
            const Y = await F().get(f, { params: y }),
              T = (0, R.h5)(() => {
                let K = this.m_mapGiveawayIDToNextDrawInfo.get(l);
                if (
                  (K ||
                    ((K = new oe()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, K)),
                  this.CopyToGiveaway(Y.data, K),
                  g !== void 0)
                ) {
                  const re = this.GetKey(l, g);
                  let me =
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(re);
                  me ||
                    ((me = new oe()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(re, me)),
                    this.CopyToGiveaway(Y.data, me);
                }
                return K;
              });
            return this.GetNextDrawChangeCallback(l).Dispatch(T), T;
          }
          static s_Singleton;
          static Get() {
            return (
              ot.s_Singleton ||
                ((ot.s_Singleton = new ot()), ot.s_Singleton.Init()),
              ot.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let l = (0, c.Tc)("giveawaynextdraw", "application_config");
              if (l && l.giveaway_id) {
                let g = new oe();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        te([R.sH], W.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          te([R.XI], W.prototype, "CopyToGiveaway", 1);
        let X = W;
        const Q = class Dn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Dn.s_GlobalInstance),
              (Dn.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(l, g) {
            if ((this.ClearRefreshInterval(), !l.closed)) {
              let y =
                l.seconds_until_drawing !== void 0 &&
                l.seconds_until_drawing <= 0 &&
                l.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(g, y);
            }
          }
          SetupCountDown(l, g) {
            l !== void 0 &&
              l > 0 &&
              (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        te([q.o], Q.prototype, "ClearRefreshInterval", 1),
          te([q.o], Q.prototype, "ClearCountDown", 1),
          te([q.o], Q.prototype, "SetupRefreshDataInterval", 1),
          te([q.o], Q.prototype, "SetupCountDown", 1);
        let A = Q;
        function m(E, l) {
          const g = X.Get().GetInfoByInstance(E, l.m_myInstanceNumber);
          !g ||
            g.seconds_until_drawing === void 0 ||
            ((g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown());
        }
        function L(E, l) {
          const g = X.Get().GetInfoByInstance(E, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing !== void 0 &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            X.Get()
              .ReloadGiveaway(E, l.m_myInstanceNumber)
              .then((f) => {
                f && l.SetupCountDown(f.seconds_until_drawing, () => m(E, l));
              }));
        }
        function U(E) {
          const [l] = (0, z.useState)(new A()),
            g = (0, M.CH)();
          (0, z.useEffect)(
            () => (
              X.Get()
                .ReloadGiveaway(E, l.m_myInstanceNumber)
                .then((K) => {
                  K &&
                    (l.SetupRefreshDataInterval(K, () => L(E, l)),
                    l.SetupCountDown(K.seconds_until_drawing, () => m(E, l)),
                    g());
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, E, g],
          );
          const f = X.Get().GetInfoByInstance(E, l.m_myInstanceNumber),
            [y, Y, T] = (0, ie.q3)(() => [
              f?.winner_count,
              f?.closed,
              f?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !f || f.giveaway_id == null || !f.BStarted() || y === void 0,
            winner_count: y,
            closed: Y,
            seconds_until_drawing: T,
          };
        }
      },
      55436: (P, ge, a) => {
        "use strict";
        a.d(ge, { r: () => de, z: () => ae });
        var e = a(7850),
          F = a(90626),
          R = a(16412),
          ie = a(25792),
          z = a(96538),
          q = a(18210),
          ee = a(85599),
          M = a(17618),
          c = a.n(M),
          O = a(53424);
        const ae = (oe) => {
            const { clanSteamID: W, fnImageSelectCallBack: X } = oe,
              [Q, A] = (0, F.useState)(""),
              m = (0, O.mr)(oe.clanSteamID.GetAccountID()),
              L = () => oe.closeModal && oe.closeModal(),
              U = O.pU.GetFilteredClanImages(W, Q),
              E = (l) => {
                X(l), L();
              };
            return (0, e.jsx)(ie.tH, {
              children: (0, e.jsx)(z.x_, {
                onEscKeypress: L,
                children: (0, e.jsxs)(R.UC, {
                  children: [
                    (0, e.jsx)(R.Y9, {
                      children: (0, q.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(R.nB, {
                      children: (0, e.jsxs)(R.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, q.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(R.pd, {
                            placeholder: (0, q.we)("#ClanImageChooser_Search"),
                            value: Q,
                            onChange: (l) => A(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: M.ImagesOuterContainer,
                            children: m
                              ? (0, e.jsx)(ee.t, {
                                  size: "medium",
                                  string: (0, q.we)("#Loading"),
                                })
                              : U.length > 0
                                ? U.map((l) =>
                                    (0, e.jsx)(
                                      te,
                                      {
                                        clanImage: l,
                                        searchStringHilight: Q,
                                        fnImageClick: E,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : Q.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, q.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, q.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(R.wi, {
                      children: (0, e.jsx)(R.$n, {
                        onClick: L,
                        children: (0, q.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          te = (oe) => {
            const {
              clanImage: W,
              searchStringHilight: X,
              fnImageClick: Q,
            } = oe;
            let A = W.file_name ? W.file_name : "",
              m = de(X, A, String(W.imageid), M.Hilight);
            return (0, e.jsxs)("div", {
              className: M.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: M.Image,
                  style: { backgroundImage: `url( '${W.thumb_url}' )` },
                  onDoubleClick: () => Q(W),
                }),
                (0, e.jsx)("div", {
                  className: M.ImageFilename,
                  title: A,
                  children: m,
                }),
              ],
            });
          };
        function de(oe, W, X, Q) {
          let A = [];
          if (oe.length > 0) {
            let m = W.toLocaleLowerCase();
            for (let L = 0; L < W.length; ) {
              let U = m.indexOf(oe, L);
              if (U < 0) {
                A.push(
                  (0, e.jsx)(
                    "span",
                    { children: W.substring(L) },
                    X + "_" + String(L),
                  ),
                );
                break;
              } else
                L < U &&
                  A.push(
                    (0, e.jsx)(
                      "span",
                      { children: W.substring(L, U) },
                      X + "_" + String(L),
                    ),
                  ),
                  A.push(
                    (0, e.jsx)(
                      "span",
                      { className: Q, children: W.substr(U, oe.length) },
                      X + "_" + String(L),
                    ),
                  ),
                  (L = U + oe.length);
            }
          } else A.push((0, e.jsx)("span", { children: W }, X + "_null"));
          return A;
        }
      },
      24806: (P, ge, a) => {
        "use strict";
        a.d(ge, { Ng: () => Q });
        var e = a(7850),
          F = a(75844),
          R = a(90626),
          ie = a(99412),
          z = a(32093),
          q = a(50109),
          ee = a(95695),
          M = a.n(ee),
          c = a(36707),
          O = a(18210),
          ae = a(92264),
          te = a(30096),
          de = a(71421),
          oe = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          X = (L, U, E, l) => {
            for (
              var g = l > 1 ? void 0 : l ? W(U, E) : U, f = L.length - 1, y;
              f >= 0;
              f--
            )
              (y = L[f]) && (g = (l ? y(U, E, g) : y(g)) || g);
            return l && g && oe(U, E, g), g;
          };
        let Q = class extends R.Component {
          GenerateLanguageOptions() {
            let L = [];
            const {
              fnFilterLanguage: U,
              fnLangHasData: E,
              fnLastUpdateRTime: l,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              L.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: ie.xPp,
                    children: (0, O.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let f = new Array();
            const y = this.props.realms || [z.TU.k_ESteamRealmGlobal];
            for (const T of O.A0.GetLanguageListForRealms(y)) {
              if (U && !U(T)) continue;
              const K = (0, ie.LgB)(T),
                re = (0, O.we)("#Language_" + K),
                me = !!(g && g(T));
              f.push({ eLang: T, sLocName: re, bSupported: me });
            }
            f.sort((T, K) =>
              T.bSupported != K.bSupported
                ? T.bSupported
                  ? -1
                  : 1
                : T.sLocName.localeCompare(K.sLocName),
            );
            let Y = !1;
            for (const T of f) {
              T.bSupported != Y &&
                (L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: M().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, O.we)(
                        T.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    T.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Y = T.bSupported));
              const K = E && E(T.eLang),
                re = l && l(T.eLang);
              let me = T.sLocName;
              re &&
                re !== 0 &&
                ((me += " "),
                (me += (0, O.we)(
                  "#Language_Last_Update",
                  (0, O.$z)(re) +
                    " @ " +
                    (0, ae.KC)(re, { bForce24HourClock: !1 }),
                ))),
                L.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: T.eLang,
                      className: (0, c.A)(
                        { [M().LanguageWithContent]: K },
                        T.bSupported
                          ? M().SupportedLanguage
                          : M().UnsupportedLanguage,
                      ),
                      children: me,
                    },
                    "langpicker" + T.eLang + (K ? "_hasdata" : ""),
                  ),
                );
            }
            return L;
          }
          OnLanguageChange(L) {
            const { fnOnLanguageChanged: U, selectedLang: E } = this.props;
            let l = Number.parseInt(L.currentTarget.value);
            l != E && U && U(l);
          }
          render() {
            const { selectedLang: L, bDisabled: U, strTooltip: E } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(de.he, {
              toolTipContent: E,
              children: (0, e.jsx)("select", {
                value: L,
                onChange: this.OnLanguageChange,
                disabled: U,
                children: l,
              }),
            });
          }
        };
        X([te.oI], Q.prototype, "OnLanguageChange", 1), (Q = X([F.PA], Q));
        function A(L) {
          const [U, E] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(Q, {
            selectedLang: E,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !U,
            strTooltip: U ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function m(L) {
          const { fnLangHasData: U } = L;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const E = useObserver(() => {
            const l = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              l[g] = !!(U && U(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(E), [E]),
            jsx(Fragment, {})
          );
        }
      },
      14069: (P, ge, a) => {
        "use strict";
        a.d(ge, { _: () => fo });
        var e = a(7850),
          F = a(99412),
          R = a(19298),
          ie = a(20169),
          z = a(65946),
          q = a(76789),
          ee = a.n(q),
          M = a(36707),
          c = a(18210),
          O = a(3166),
          ae = a(68266);
        function te(o) {
          return o.jsondata.sale_logo_cross_promo_only
            ? !1
            : (o.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0;
        }
        function de(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, z.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: ee().SalePageLogoCtn,
                  href: O.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(oe, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, M.A)(ee().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(oe, { ...o }),
                })
            : null;
        }
        function oe(o) {
          const { eventModel: t, language: n } = o,
            s = (0, ae.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var W = a(28604),
          X = a(36631),
          Q = a(64387);
        function A(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: Q.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var m = a(90626),
          L = a(73259),
          U = a(25792),
          E = a(52393),
          l = a.n(E),
          g = a(95695),
          f = a.n(g),
          y = a(82054);
        function Y(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(U.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, M.A)(
                    l().SaleBackground,
                    l()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    l().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !O.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function T(o) {
          const {
              event: t,
              language: n,
              children: s,
              bIsPreview: r,
              personalizedCarousels: i,
            } = o,
            d = m.useRef(null),
            h = (0, ae.m0)(t, "sale_header", n),
            [u] = (0, z.q3)(() => [t.jsondata.sale_sub_menu]);
          m.useEffect(() => {
            if (!h) return;
            const C = new Image();
            (C.onload = () => {
              const w = (100 * C.width) / 950 + "%";
              d.current && d.current.style.setProperty("--background-scale", w);
            }),
              (C.src = h);
          }, [h]);
          const p = t.jsondata.sale_sections?.some(
              (C) => C.section_type === "contenthubmaincarousel",
            ),
            v =
              t.jsondata.item_source_type === L.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                p),
            x = h ? `url(${h})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              u
                ? (0, e.jsx)(y.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: u,
                    styleVariation: y.g.k_SubMenu,
                    personalizedCarousels: i,
                  })
                : (0, e.jsx)(A, { strURL: h }),
              (0, e.jsx)("div", {
                className: (0, M.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: v,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, M.A)(
                    l()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    l().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: d,
                  children: [
                    h && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, M.A)(
                            f().SalePageBackground,
                            f().BackgroundImage,
                            f().Blur,
                          ),
                          src: h,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, M.A)(
                            f().SalePageBackground,
                            f().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: x,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(Y, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var K = a(26589),
          re = a(39905),
          me = a(50909),
          Fe = a.n(me);
        function _t(o) {
          const { eventModel: t } = o,
            { data: n } = (0, K.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, O.yK)() == "community"
          )
            return;
          const s = t.GetAllTags(),
            r = [];
          if (
            (s.includes("hide_store") &&
              r.push(
                re.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            s.includes("mod_hide_store") &&
              n.support_user &&
              r.push(re.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              s.includes("contenthub") &&
              r.push(
                re.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && r.length == 0))
          )
            return (0, e.jsx)("div", {
              className: Fe().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: Fe().WarningText,
                      children: re.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: Fe().WarningText,
                      children: [
                        re.Z.LocalizePlural(
                          "#Sale_SaleEventIsHidden_Reason",
                          r.length,
                        ),
                        (0, e.jsx)("ul", {
                          children: r.map((i) =>
                            (0, e.jsx)("li", { children: i }, i),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
            });
        }
        var Ft = a(72865),
          st = a(71347),
          Re = a.n(st),
          He = a(53107);
        function Ht(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, F.sfN)(O.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, M.A)(
                  Re().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: re.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(rt, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, M.A)(
                  Re().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: re.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((s, r) =>
                      (0, e.jsxs)(
                        m.Fragment,
                        {
                          children: [
                            (0, e.jsx)(rt, { presentor: s, lang: n }),
                            t.length > 2 && ", ",
                          ],
                        },
                        s.url,
                      ),
                    ),
                  (0, e.jsx)(rt, { presentor: t[t.length - 1], lang: n }),
                ),
              });
        }
        function rt(o) {
          const { presentor: t, lang: n } = o,
            s = (0, Ft.aL)(t.url);
          return (0, e.jsx)(He.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: Re().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var zt = a(60480),
          bt = a(92757),
          Ue = a(18994),
          ze = a(56412),
          yt = a(86515),
          wt = a(32279),
          Wt = a(39153),
          it = a(61478);
        function Vt(o) {
          const { event: t, broadcastEmbedContext: n } = o,
            s = !!t?.jsondata?.broadcast_display_wide_player,
            r = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(it.B, {
                event: t,
                broadcastEmbedContext: n,
                bWideBroadcastDisplay: s,
                bWideBroadcastPermitChat: r,
              }),
          });
        }
        var Kt = a(85671),
          Qt = a(24660),
          lt = a(71157),
          ct = a(15181),
          Yt = a(24805),
          Zt = a(10142),
          dt = a(84676),
          Lt = a(14560),
          gt = a(9807),
          Jt = a(20860),
          xe = a.n(Jt);
        function Xt(o, t) {
          return o
            ? t
              ? !!o.valve_admin
              : !!(o.valve_admin || o.support_user)
            : !1;
        }
        function At(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, K.hM)(n ? o.GetAccountID() : 0);
          return n && Xt(s, t);
        }
        function Bt(o) {
          const { clanSteamID: t, id: n } = o;
          return At(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, M.A)(
                  o.className,
                  o.requireAdmin
                    ? g.ValveOnlyAdminBackground
                    : g.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var $ = a(16412);
        const Je = 12,
          Gt = 240;
        function $t(o) {
          const { event: t } = o,
            [n] = (0, lt.Q)(Ue.QS, void 0),
            [s, r] = m.useState(!1),
            i = (0, O.Tc)("rgMLRecommenderWishlist", "application_config"),
            d = Array.isArray(i) && i.length > 0 && Number.isInteger(i[0]);
          return !t.BIsNextFest() || !d || n == Ue.sQ.Random || (0, L.UR)(t) > 0
            ? null
            : (0, e.jsxs)(Bt, {
                clanSteamID: t.clanSteamID,
                className: xe().Ctn,
                children: [
                  (0, e.jsxs)(Qt.ml, {
                    className: xe().Header,
                    onClick: () => r(!s),
                    children: [
                      s ? "\u25BC" : "\u25B6",
                      " Next Fest personalized order (VO)",
                    ],
                  }),
                  s && (0, e.jsx)(ut, { event: t, rgRecommendedAppIDs: i }),
                ],
              });
        }
        function ut(o) {
          const { event: t, rgRecommendedAppIDs: n } = o,
            [s, r] = m.useState(void 0);
          (0, dt.zX)(n, Yt.Xh);
          const [i, d] = m.useState(void 0),
            [h, u] = m.useState(""),
            p = t.jsondata.sale_ml_recommender_weight_exponent || L.ld,
            v = parseFloat(h),
            x = i ?? (0, Lt.JE)(t),
            C = v || p,
            S = m.useMemo(() => (0, gt.a0)(n, n, (_) => _, x, C), [n, x, C]),
            w = m.useMemo(() => new Map(n.map((_, J) => [_, J])), [n]),
            B = m.useMemo(() => new Map(S.map((_, J) => [_, J])), [S]),
            b = n.length,
            D = (_) => Zt.A.Get().GetApp(_)?.GetName() ?? `App ${_}`,
            N = (_) => `hsl(${Math.round((240 * w.get(_)) / b)}, 80%, 65%)`,
            G = (_, J) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, M.A)(xe().Row, s == _ && xe().Highlighted),
                  style: { height: Je, color: N(_) },
                  title: `${D(_)} (${_}): recommended #${w.get(_) + 1}, shuffled to #${B.get(_) + 1}`,
                  onMouseEnter: () => r(_),
                  children: J,
                },
                _,
              ),
            V = (_, J) =>
              (0, e.jsx)(
                "line",
                {
                  x1: 0,
                  y1: (w.get(_) + 0.5) * Je,
                  x2: Gt,
                  y2: (B.get(_) + 0.5) * Je,
                  stroke: J ? "white" : N(_),
                  strokeWidth: J ? 2 : 1,
                  strokeOpacity: J ? 1 : s === void 0 ? 0.6 : 0.15,
                },
                _,
              );
          return (0, e.jsxs)("div", {
            className: xe().Body,
            children: [
              (0, e.jsxs)("div", {
                className: xe().Summary,
                children: [
                  b,
                  " recommendations, exponent ",
                  C,
                  C < 0 && " (shuffle disabled)",
                  ", seed ",
                  x,
                  ". Apps that aren't recommended are placed after these in a uniform random order. Each section shows the apps it contains in this same relative order. Hover a row to highlight it.",
                ],
              }),
              (0, e.jsxs)("div", {
                className: xe().Controls,
                children: [
                  (0, e.jsx)($.$n, {
                    className: xe().ControlButton,
                    onClick: () => d(ct.m()),
                    children: "Reshuffle",
                  }),
                  (0, e.jsxs)("label", {
                    children: [
                      "Exponent",
                      " ",
                      (0, e.jsx)("input", {
                        type: "number",
                        min: -1,
                        step: 0.1,
                        className: xe().ExponentInput,
                        placeholder: String(p),
                        value: h,
                        onChange: (_) => u(_.target.value),
                      }),
                    ],
                  }),
                  (i !== void 0 || h != "") &&
                    (0, e.jsx)($.$n, {
                      className: xe().ControlButton,
                      onClick: () => {
                        d(void 0), u("");
                      },
                      children: "Reset to page's order",
                    }),
                  (0, e.jsx)("span", {
                    children: "Only affects this chart, not the page",
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: xe().Chart,
                onMouseLeave: () => r(void 0),
                children: [
                  (0, e.jsxs)("div", {
                    className: xe().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: xe().ColumnTitle,
                        children: "Recommended order",
                      }),
                      n.map((_, J) => G(_, `#${J + 1} ${D(_)}`)),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: xe().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: xe().ColumnTitle,
                        children: "\xA0",
                      }),
                      (0, e.jsxs)("svg", {
                        width: Gt,
                        height: b * Je,
                        children: [
                          n.filter((_) => _ != s).map((_) => V(_, !1)),
                          s !== void 0 && w.has(s) && V(s, !0),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: xe().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: xe().ColumnTitle,
                        children: "Shuffled order",
                      }),
                      S.map((_) => G(_, `#${w.get(_) + 1} ${D(_)}`)),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function qt(o) {
          const {
            event: t,
            fnOnChangeDayIndex: n,
            addtionalAdminButtons: s,
          } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($t, { event: t }),
              (0, e.jsx)(Kt.g, {
                eventModel: t,
                fnOnUpdateSaleDayIndex: n,
                addtionalAdminButtons: s,
                bSupportsSticky: !0,
              }),
            ],
          });
        }
        var Ke = a(179),
          Se = a(50109),
          be = a(30096),
          mt = a(98609),
          Xe = a(57673);
        const ht = new Map();
        function en(o, t) {
          const n = o.findIndex((s) => s.section_type === "tabs");
          if (n >= 0 && t !== void 0) {
            const s = o[n],
              r = s.tabs?.findIndex((i) => i.unique_id === t);
            if (r !== void 0 && r >= 0 && s.tabs)
              return {
                selectedTabBackgroundDef: s.tabs[r].tab_background_img_groups,
                nTabSaleSectionIndex: n,
              };
          }
          return {
            selectedTabBackgroundDef: void 0,
            nTabSaleSectionIndex: void 0,
          };
        }
        function tn(o, t, n) {
          const s = new Map(),
            r = new Map(),
            i = new Map();
          let d,
            h,
            u = 0;
          const { selectedTabBackgroundDef: p, nTabSaleSectionIndex: v } = en(
            t,
            n,
          );
          if (o?.enabled) {
            const x = o.groups?.length;
            if (
              (o.groups?.forEach((C, S) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const w = new Array();
                for (
                  let b = 0;
                  b < (C?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++b, ++u
                ) {
                  const N = t[u].unique_id;
                  w.push(N),
                    r.set(N, C.background_id),
                    b === 0 && i.set(N, C.background_id);
                }
                if (
                  (s.set(C.background_id, {
                    nBackgroundGroupID: C.background_id,
                    sectionUniqueIDs: w,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (v === void 0 || u < v)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  S + 1 == x && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let b = u;
                    b < t.length &&
                    (!p || !p.enabled || b < v) &&
                    !(t[b].section_type == "tabs" && p?.enabled);
                    ++b
                  ) {
                    const N = t[b].unique_id;
                    r.set(N, C.background_id);
                  }
              }),
              u < t.length && (v === void 0 || u < v) && (d = t[u].unique_id),
              p?.enabled && v !== void 0)
            ) {
              let C = v;
              const S = p.groups.length;
              for (
                p.groups.forEach((w, B) => {
                  if (C >= t.length) return;
                  const b = new Array();
                  for (
                    let G = 0;
                    G < w.num_sections && C < t.length;
                    ++G, ++C
                  ) {
                    const V = t[C],
                      _ = V.unique_id;
                    (0, Xe.bF)(n, V)
                      ? (b.push(_),
                        r.set(_, w.background_id),
                        G === 0 && i.set(_, w.background_id))
                      : --G;
                  }
                  let D = C;
                  for (; D < t.length && !(0, Xe.bF)(n, t[D]); ) D += 1;
                  if (
                    (s.set(w.background_id, {
                      nBackgroundGroupID: w.background_id,
                      sectionUniqueIDs: b,
                      nSaleSectionLastIndex: C - 1,
                      nUniqueIDNextSaleSection:
                        D < t.length ? t[D].unique_id : void 0,
                    }),
                    B + 1 == S && p.last_group_until_cover_section_until_end)
                  )
                    for (let G = C; G < t.length; ++G) {
                      const V = t[G];
                      if (V.section_type == "tabs" && p?.enabled) break;
                      (0, Xe.bF)(n, V) && r.set(V.unique_id, w.background_id);
                    }
                });
                C < t.length && !(0, Xe.bF)(n, t[C]);
              )
                C++;
              C < t.length && (h = t[C].unique_id);
            }
          } else t?.length > 0 && (d = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: d,
            mapSectionToGroup: r,
            mapFirstSectionToGroup: i,
            selectedTabBackgroundDef: p,
            nTabSaleSectionIndex: v,
            nFirstTabSectionIDWithoutGroup: h,
          };
        }
        var ve = a(29630),
          nn = a(68434),
          pt = a(41635),
          Te = a(81416);
        function Pt(o, t, n, s) {
          let i = o.jsondata.sale_background_img_groups.groups.find(
            (d) => d.background_id === t.groupID,
          );
          return (
            !i &&
              s >= 0 &&
              (i = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.find((u) => u.unique_id == s)
                ?.tab_background_img_groups?.groups?.find(
                  (u) => u.background_id == t.groupID,
                )),
            (0, e.jsx)(
              an,
              {
                eventModel: o,
                displayDef: i,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  i &&
                  i.randomize_section_order &&
                  n !== Te.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(vt, {
                        clanEventGID: o.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function vt(o) {
          const { clanEventGID: t, elSaleSections: n } = o,
            [s, r] = (0, nn.M)(`sale_section_seed_${t}`, (0, ct.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, ct.A)(s);
            return (0, e.jsx)(e.Fragment, { children: pt.fW(n, 0, i) });
          }
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function an(o) {
          const {
              displayDef: t,
              children: n,
              eventModel: s,
              derivedGroupInfo: r,
            } = o,
            i = (0, Se.E)(),
            d = m.useCallback(
              (S, w) => {
                ht.set(r.nBackgroundGroupID, w);
              },
              [r],
            ),
            h = (0, be.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const S = (0, F.LgB)(i),
              w =
                S in t.localized_background_art
                  ? S
                  : c.A0.GetLanguageFallback(mt.TS.LANGUAGE),
              B = t.localized_background_art[w];
            B && (u = ve.zU.GenerateURLFromHashAndExt(s.clanSteamID, B));
          }
          let p = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              p += "to bottom,";
              break;
            case "left-to-right":
              p += "to right,";
              break;
            case "top-left-to-bottom-right":
              p += "to bottom right,";
              break;
            case "single-color":
              p = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((p += " " + t.background_color1),
              (p += ", " + t.background_color2),
              (p += ")"))
            : (p = null);
          const v =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            x = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            C = {
              backgroundImage: p ? `url(${u}), ${p}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: x ? t.position_setting : void 0,
              backgroundColor: v ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: h,
            style: C,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var $e = a(4720),
          on = a(64641),
          Tt = a.n(on),
          Qe = a(85599);
        function sn(o) {
          return typeof o == "string" || typeof o == "number"
            ? o
            : JSON.stringify(o);
        }
        class rn {
          Keyify = (t) => sn(t);
          m_mapVisible = new Map();
          m_mapOwners = new Map();
          IsAlreadyVisible(t) {
            return this.m_mapVisible.has(this.Keyify(t));
          }
          SortKey(t, n) {
            const s = this.m_mapVisible.get(this.Keyify(t)) || 0,
              r = this.m_mapVisible.get(this.Keyify(n)) || 0;
            return s - r;
          }
          BMarkAppVisibile(t, n) {
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return (
              s.add(r),
              this.IsAlreadyVisible(n)
                ? (this.m_mapVisible.set(
                    r,
                    (this.m_mapVisible.get(r) ?? 0) + 1,
                  ),
                  !1)
                : (this.m_mapVisible.set(r, 1), !0)
            );
          }
          BMarkAppNotVisible(t, n) {
            if (!this.IsAlreadyVisible(n)) return !1;
            const s = this.EnsureOwnerSetExists(t),
              r = this.Keyify(n);
            return s.has(r) ? (this.DecrementAppVisibility(r), !0) : !1;
          }
          MarkAllAppsNotVisible(t) {
            this.m_mapOwners.has(t) &&
              (this.m_mapOwners
                .get(t)
                .forEach(this.DecrementAppVisibility.bind(this)),
              this.m_mapOwners.delete(t));
          }
          EnsureOwnerSetExists(t) {
            let n = this.m_mapOwners.get(t);
            return (
              n ||
                (this.m_mapOwners.set(t, new Set()),
                (n = this.m_mapOwners.get(t))),
              n
            );
          }
          DecrementAppVisibility(t) {
            const n = (this.m_mapVisible.get(t) ?? 0) - 1;
            n > 0 ? this.m_mapVisible.set(t, n) : this.m_mapVisible.delete(t);
          }
        }
        var Ye = a(71742),
          ln = a(53113),
          qe = a(90405),
          he = a(96538),
          ye = a(88003),
          cn = a(12932),
          ft = a(46777),
          dn = a(77495),
          gn = a(16346),
          un = a(61257),
          mn = a(56718),
          We = a(71421),
          hn = a(27828),
          et = a.n(hn);
        function pn(o) {
          return `rgba(${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}, ${o.rgb.a})`;
        }
        function vn(o) {
          const t = parseInt(o.slice(1), 16),
            n = (t >> 16) & 255,
            s = (t >> 8) & 255,
            r = t & 255;
          return `rgba(${n}, ${s}, ${r}, 1)`;
        }
        function I(o) {
          const { color: t, onChange: n, strTitle: s, disableAlpha: r } = o,
            [i, d] = (0, m.useState)(() => t || "rgba(255, 255, 255, 1)"),
            h = (0, m.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(re.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const v = (await new window.EyeDropper().open()).sRGBHex,
                  x = vn(v);
                d(x), n(x);
              } catch (u) {
                console.warn(re.Z.Localize("#Sale_EyeDropperFailed"), u);
              }
            }, [n]);
          return (0, e.jsxs)("div", {
            className: et().ColorPickerDialog,
            children: [
              !!s && (0, e.jsx)($.JU, { children: s }),
              (0, e.jsx)(un.xk, {
                onChange: (u) => {
                  const p = pn(u);
                  d(p), n(p);
                },
                color: i,
                disableAlpha: r,
                className: et().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: et().EyeDropperCtn,
                children: (0, e.jsx)(We.Gq, {
                  toolTipContent: re.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)($.$n, {
                    className: et().EyeDropperBtn,
                    onClick: h,
                    children: (0, e.jsx)(mn.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function j(o) {
          const {
              color: t,
              onChange: n,
              onRequestClose: s,
              disableAlpha: r,
              strTitle: i,
            } = o,
            d = (0, m.useRef)(null);
          return (
            (0, m.useEffect)(() => {
              const h = d.current?.ownerDocument ?? document,
                u = (v) => {
                  d.current && !d.current.contains(v.target) && s();
                },
                p = (v) => {
                  v.key === "Escape" && s();
                };
              return (
                h.addEventListener("pointerdown", u, !0),
                h.addEventListener("keydown", p, !0),
                () => {
                  h.removeEventListener("pointerdown", u, !0),
                    h.removeEventListener("keydown", p, !0);
                }
              );
            }, [s]),
            (0, e.jsx)("div", {
              ref: d,
              children: (0, e.jsx)(I, {
                color: t,
                disableAlpha: r,
                strTitle: i ?? re.Z.Localize("#Button_Color"),
                onChange: n,
              }),
            })
          );
        }
        function k() {
          return {
            openColorPicker: (0, m.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, gn.lX)(
                (0, e.jsx)(j, {
                  color: n.color,
                  disableAlpha: n.disableAlpha,
                  strTitle: n.strTitle,
                  onChange: n.onChange,
                  onRequestClose: r,
                }),
                t,
                { bDisablePopTop: !0 },
              );
            }, []),
          };
        }
        var Z = a(13447),
          H = a.n(Z),
          se = a(32190),
          ce = a.n(se),
          fe = a(76559),
          we = a(75909),
          pe = a(53424),
          je = a(72604),
          ke = a(41735),
          Be = a.n(ke),
          tt = a(14947),
          Pe = a(9046),
          En = Object.defineProperty,
          zn = Object.getOwnPropertyDescriptor,
          Wn = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? zn(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && En(t, n, r), r;
          };
        const _n = class Hn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, tt.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                O.TS.COMMUNITY_BASE_URL +
                "gid/" +
                n.ConvertTo64BitString() +
                "/hasclanimagefile",
              d = { image_hash_and_ext: s, lang: "" + r };
            return (
              (await Be().get(i, { params: d, cancelToken: t && t.token })).data
                .success == je.R
            );
          }
          SetPrimaryImageForImageGroup(t, n) {
            (!this.m_curLocImageGroup ||
              this.m_curLocImageGroup.primaryImage.imageid != t.imageid ||
              n != this.m_curLocImageGroupType) &&
              ((this.m_curLocImageGroup = {
                primaryImage: t,
                localized_images: [],
              }),
              (this.m_curLocImageGroupType = n),
              (this.m_curLocImageGroup.localized_images = (0, pt.$Y)(
                this.m_curLocImageGroup.localized_images,
                F.bP9,
                null,
              )));
          }
          GetPrimaryImageForImageGroup() {
            return this.m_curLocImageGroup?.primaryImage;
          }
          ClearImageGroup() {
            (this.m_curLocImageGroup = null),
              (this.m_curLocImageGroupType = null);
          }
          GetLocalizedImageGroupForEdit() {
            return this.m_curLocImageGroup;
          }
          GetLocalizedImageGroupForEditAsURL(t, n) {
            if (this.m_curLocImageGroup) {
              let s = this.m_curLocImageGroup.primaryImage;
              return this.m_curLocImageGroup.localized_images[n]
                ? this.m_curLocImageGroup.localized_images[n]
                : ve.zU.GenerateURLFromHashAndExt(
                    t,
                    ve.zU.GetHashAndExt(s) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const n = this.m_curLocImageGroup.primaryImage,
              s = fe.b.InitFromClanID(n.clanAccountID),
              r = ve.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let h = F.Bhc; h < F.bP9; ++h)
              i.push(Hn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, h));
            const d = await Promise.all(i);
            (0, tt.h5)(() => {
              for (let h = F.Bhc; h < F.bP9; ++h)
                d[h] &&
                  (this.m_curLocImageGroup.localized_images[h] =
                    ve.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Pe.wI.full,
                      h,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, n, s) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = s
                ? ve.zU.GenerateURLFromHashAndExtAndLang(
                    n,
                    s,
                    Pe.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, n) {
            if (!this.m_curLocImageGroup) return;
            let s = this.m_curLocImageGroup.primaryImage;
            if (s?.image_hash == t) {
              const r = fe.b.InitFromClanID(s.clanAccountID),
                i = ve.zU.GetHashAndExt(s);
              i &&
                (this.m_curLocImageGroup.localized_images[n] =
                  ve.zU.GenerateURLFromHashAndExtAndLang(
                    r,
                    i,
                    Pe.wI.full,
                    n,
                    this.m_curLocImageGroupType ?? void 0,
                  ));
            }
          }
          GetAllLocalizedGroupImages() {
            return (
              (this.m_curLocImageGroup &&
                this.m_curLocImageGroup.localized_images) ||
              []
            );
          }
          GetAllLocalizedGroupImageHashAndExts() {
            return this.GetAllLocalizedGroupImages()
              .filter(Boolean)
              .map((s) => ve.zU.GetHashAndExtFromURL(s));
          }
        };
        Wn([tt.sH], _n.prototype, "m_curLocImageGroup", 2);
        let Vn = _n;
        const Ae = new Vn();
        var nt = a(38410),
          Ot = a(34592),
          bn = a(75844),
          fn = a(32093),
          In = a(72849),
          Kn = a(64),
          Qn = a(72739),
          It = a(82734);
        function Yn(o, t) {
          const n = m.useRef(void 0),
            s = m.useCallback(
              (d) => {
                d.currentTarget.files.length > 0 &&
                  (o(d.currentTarget.files), (d.currentTarget.value = ""));
              },
              [o],
            ),
            r = m.useCallback(() => n.current.click(), []);
          return [
            Qn.createPortal(
              (0, e.jsx)("form", {
                onSubmit: yn,
                style: { display: "none" },
                children: (0, e.jsx)("input", {
                  ...t,
                  type: "file",
                  ref: n,
                  onChange: s,
                }),
              }),
              window.document.body,
            ),
            r,
          ];
        }
        function Zn(o) {
          const [t, n] = m.useState(!1),
            s = m.useCallback((u) => {
              ((u.dataTransfer.files && u.dataTransfer.files[0]) ||
                (u.dataTransfer.types && u.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = m.useCallback((u) => {
              It.NO(u) && n(!1);
            }, []),
            i = m.useCallback(() => n(!1), []),
            d = t ? yn : void 0,
            h = m.useCallback(
              (u) => {
                u.dataTransfer.files?.length &&
                  (o(u.dataTransfer.files, u),
                  u.preventDefault(),
                  u.stopPropagation()),
                  n(!1);
              },
              [o],
            );
          return [
            {
              onDragEnter: s,
              onDragLeave: r,
              onDragEnd: i,
              onDragOver: d,
              onDrop: h,
            },
            t,
          ];
        }
        async function bo(o, t = 1e3) {
          return await new Promise((n, s) => {
            const r = new Image();
            (r.src = o),
              (r.onload = () => n("success")),
              (r.onerror = () => n("error")),
              t > 0 && window.setTimeout(() => n("timeout"), t);
          });
        }
        function yn(o) {
          o.preventDefault();
        }
        function yo(o) {
          switch (o.type) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            default:
              const t = o.name.match(/(?<=\.)[^.]+$/);
              return t ? t[0] : void 0;
          }
        }
        var Jn = a(71647),
          at = a.n(Jn);
        function Xn(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = Zn(t),
            [h, u] = Yn(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, M.A)(
              d ? at().DragAndDropContainerDragging : at().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: at().ImageUploadBar,
                children: [
                  h,
                  (0, e.jsxs)("label", {
                    onClick: u,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: at().SelectImageButton,
                        children: (0, c.we)("#selectimage_select_file"),
                      }),
                    ],
                  }),
                ],
              }),
              s,
              o.children,
            ],
          });
        }
        var xt = a(36118),
          $n = a(21254),
          qn = a(27344),
          De = a.n(qn),
          ea = a(9472);
        function ta(o) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: d,
            } = o,
            [h, u] = (0, z.q3)(() => [
              t.GetUploadImages(),
              Se.O.Get().GetCurEditLanguage(),
            ]),
            p = m.useCallback(
              async (C) => {
                let S = Array.from(C),
                  w = !0;
                for (let B = 0; B < S.length; B++) {
                  const b = S[B],
                    { language: D } = (0, nt.jj)(b?.name, u);
                  try {
                    const N = (0, nt.PD)(D, u, d);
                    (w = await t.AddImageForLanguage(b, N)),
                      w ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            B +
                            " file=" +
                            b.name,
                        ),
                        (0, ye.pg)(
                          (0, e.jsx)(he.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              b.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (N) {
                    let G = (0, Ot.H)(N);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + G.strErrorMsg,
                      G,
                    ),
                      (0, ye.pg)(
                        (0, e.jsx)(he.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            G.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return w;
              },
              [u, t, d],
            ),
            v = m.useMemo(
              () =>
                i instanceof Array
                  ? i
                  : [
                      (0, e.jsx)(
                        m.Fragment,
                        { children: i },
                        "elAdditonalButtons",
                      ),
                    ],
              [i],
            );
          (0, z.q3)(() =>
            h.map((C) => ({ a: C.GetCurrentImageOption(), b: C.language })),
          );
          const x = async () => {
            const C = await t.UploadAllImages(r);
            n?.(C);
          };
          return (0, e.jsxs)(Xn, {
            onDropFiles: p,
            elAdditonalButtons: v,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: De().UploadPreviewCtn,
                  children: h.map((C) =>
                    (0, e.jsx)(
                      wn,
                      {
                        asset: C,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(C),
                        languageRealms: d,
                      },
                      "arttabupload_" + C.filename + "_" + C.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(na, { imageUploader: t, fnOnUploadImageRequested: x }),
            ],
          });
        }
        function na(o) {
          const { imageUploader: t, fnOnUploadImageRequested: n } = o,
            [s] = (0, z.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: De().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)($.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)($.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function wo(o, t, n, s, r) {
          let i = new Array();
          return (
            o.GetUploadImages().forEach((d) => {
              i.push(
                jsx(
                  wn,
                  {
                    asset: d,
                    forceResolution: n,
                    forceFileType: s,
                    fnOnRemove: () => o.DeleteUploadImage(d),
                    languageRealms: r,
                  },
                  t + d.file + "_" + d.uploadTime,
                ),
              );
            }),
            i
          );
        }
        const wn = (0, bn.PA)(aa);
        function aa(o) {
          const t = (S) => {
              if (S instanceof Kn.M7) {
                S.ResetImage();
                const w = window,
                  B = (0, e.jsx)($n.q, {
                    ownerWin: w,
                    uploadFile: S,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || In.bg.dU,
                  });
                (0, ye.HT)(B, w, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  S.fileType,
                  JSON.stringify(S.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = o,
            i = n.ImageOptions?.map((S) => {
              let w = S?.fnGetLabelText(),
                B;
              S.bEnforceDimensions && (w += ` - ${S.width}x${S.height}`),
                S.bDeprecated &&
                  ((w += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (B = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let b;
              return (
                (n.BIsOriginalMinimumDimensions(S) &&
                  n.FileTypeMatchesImageTypes(S)) ||
                  (b = De().ImageDimensionTooSmall),
                { label: w, data: S, strOptionClass: b, tooltip: B }
              );
            }).filter((S) => !S.data.bHiddenFromDropdown),
            d = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            h = n.BSupportsLanguages()
              ? ra(
                  c.A0.GetLanguageListForRealms(
                    r ?? [fn.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            u = n.IsValidAssetType(o.forceResolution, o.forceFileType),
            p = n.status == "pending";
          let v = d[n.status];
          n.status == "pending" &&
            (u.needsCrop
              ? (v = (0, c.we)("#ImageUpload_NeedsCrop"))
              : u.error && (v = (0, c.we)("#ImageUpload_Invalid")));
          let x;
          const C = n.GetCurrentImageOption();
          return (
            C && (x = i?.find((S) => S.data.sKey == C.sKey)?.data),
            x || (x = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: De().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: De().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(xt.sED, {}),
                }),
                (0, e.jsx)(oa, { asset: n }),
                h &&
                  (0, e.jsx)($.m, {
                    strDropDownClassName: f().DropDownScroll,
                    rgOptions: h,
                    selectedOption: n.language,
                    onChange: (S) => (n.language = S.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)($.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: x,
                    onChange: (S) => n.SetCurrentImageOption(S.data),
                    disabled: !p,
                  }),
                p &&
                  u.warnings?.map((S, w) =>
                    (0, e.jsx)(
                      "div",
                      { className: De().UploadPreviewWarning, children: S },
                      `warning${w}`,
                    ),
                  ),
                p &&
                  u.messages?.map((S, w) =>
                    (0, e.jsx)(
                      "div",
                      { className: De().UploadPreviewMessage, children: S },
                      `message${w}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, M.A)({
                    [f().FlexColumnContainer]: !0,
                    [De().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    v,
                    (0, ea.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: Tt().FlexCenter,
                        children: (0, e.jsx)(Qe.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: De().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: De().UploadPreviewError,
                    children: u.error,
                  }),
                p &&
                  u.needsCrop &&
                  (0, e.jsx)($.jn, {
                    onClick: () => t(n),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function oa(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: De().PreviewImgCtn,
                onClick: (n) =>
                  (0, ye.pg)((0, e.jsx)(sa, { asset: t }), (0, It.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: De().PreviewImgInfo,
                    children: [t.width, " x ", t.height],
                  }),
                  (0, e.jsx)("video", {
                    height: 120,
                    controls: !1,
                    autoPlay: !0,
                    loop: !0,
                    muted: !0,
                    children: (0, e.jsx)("source", { src: t.dataUrl }),
                  }),
                ],
              })
            : (0, e.jsx)("div", {
                className: De().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: De().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function sa(o) {
          const { asset: t, closeModal: n } = o;
          return (0, e.jsx)(he.o0, {
            bAlertDialog: !0,
            closeModal: n,
            bAllowFullSize: !0,
            children: (0, e.jsx)("video", {
              controls: !0,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              children: (0, e.jsx)("source", { src: t.dataUrl }),
            }),
          });
        }
        function ra(o) {
          const t = [],
            n = new Array();
          for (const s of o) {
            if (s == F.X51) continue;
            const r = (0, c.we)("#Language_" + (0, F.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Mt = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Mt || {});
        function Ln(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function Lo(o, t, n) {
          let s = "";
          const r = Ln(t);
          if (n == 4)
            (s = "[video webm="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_WEBM &&
                (s += r),
              (s += " mp4="),
              t.file_type == EClanImageFileType.k_EClanImageFileType_MP4 &&
                (s += r),
              (s += " autoplay=true controls=false][/video]");
          else if (n == 2) s = "[img]" + r + "[/img]";
          else {
            const i = Ln(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var ia = a(55436),
          la = a(53732),
          Ee = a.n(la),
          An = a(49460);
        function ca(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, m.useRef)(null);
          return (0, e.jsx)("div", {
            className: An.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: An.SearchInput,
              type: "text",
              placeholder: (0, c.we)("#ImagePicker_Search"),
              onChange: (s) => t(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (t(""), n.current && (n.current.value = ""));
              },
            }),
          });
        }
        const da = m.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: d = !0,
            InternalOpenLocalizeImageGroup: h,
          } = t;
          return (0, e.jsx)(Bn, {
            clanAccountID: s,
            fileNameSearch: n,
            children: (u, p) =>
              u.map((v) =>
                (0, e.jsx)(
                  ga,
                  {
                    clanImage: v,
                    searchStringHilight: p,
                    imageInsertCallBack: r,
                    showImageActions: d,
                    fnOnOpenLocalizedImageGroup: h,
                    OnImageClick: i,
                  },
                  v.imageid,
                ),
              ),
          });
        });
        function Bn(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, pe.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = pe.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const h = fe.b.InitFromClanID(t);
            let u = pe.pU.GetLoadState(h);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: Ee().ResultNotification,
                    children:
                      i.length > 0
                        ? (0, c.we)("#ImagePicker_EmptySearch")
                        : (0, c.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : u && u.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: Ee().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: Ee().ResultNotification,
                      children: (0, c.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return s(d, i);
        }
        function Ao(o) {
          const {
            clanAccountID: t,
            fileNameSearch: n,
            onImageSelected: s,
            selectedItem: r,
          } = o;
          return jsx(Bn, {
            clanAccountID: t,
            fileNameSearch: n,
            children: (i) =>
              jsx("div", {
                className: styles.ClanImageGrid,
                children: i.map((d) =>
                  jsx(
                    ma,
                    { clanImage: d, selected: d == r, onImageSelected: s },
                    d.imageid,
                  ),
                ),
              }),
          });
        }
        function ga(o) {
          const {
              clanImage: t,
              searchStringHilight: n,
              imageInsertCallBack: s,
              OnImageClick: r,
              showImageActions: i,
              fnOnOpenLocalizedImageGroup: d,
            } = o,
            [h, u] = m.useState(!1),
            p = () => s(t, Mt.k_eInsertFullImage),
            v = () => s(t, Mt.k_eInsertVideo),
            x = () => s(t, Mt.k_eInsertThumbnail),
            C = (ne) => {
              t.url &&
                (ne.dataTransfer.setData("text", t.url),
                pe.pU.GetClanImageDragListener().forEach((le) => {
                  let Le = fe.b.InitFromClanID(t.clanAccountID);
                  le(Le, !0);
                }));
            },
            S = (ne) => {
              t.url &&
                pe.pU.GetClanImageDragListener().forEach((le) => {
                  let Le = fe.b.InitFromClanID(t.clanAccountID);
                  le(Le, !1);
                });
            },
            w = (ne) => {
              (0, ye.pg)(
                (0, e.jsx)(he.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: b,
                  onCancel: D,
                  closeModal: D,
                  children: (0, e.jsxs)(m.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, c.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, c.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, It.uX)(ne) ?? window,
              );
            },
            B = (ne) => {
              console.log("ClanImageWrapper on delete error: " + ne),
                (0, ye.pg)(
                  (0, e.jsx)(he.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ne }),
                  }),
                  window,
                );
            },
            b = () => {
              u(!0);
              let ne = fe.b.InitFromClanID(t.clanAccountID);
              pe.pU
                .DeleteClanImage(ne, t)
                .then((le) => {
                  le.success != je.R && B((0, Ot.H)(le).strErrorMsg), u(!1);
                })
                .catch((le) => {
                  B((0, Ot.H)(le).strErrorMsg), u(!1);
                }),
                D();
            },
            D = () => {},
            N = () => {
              r && r(t);
            },
            G = t.file_name ? t.file_name : "",
            V = (0, ia.r)(n, G, String(t.imageid), Ee().Hilight),
            _ = ve.zU.BIsClanImageVideo(t),
            J = i && !h && !_,
            ue = i && !h && !_,
            Oe = i && !h && _,
            Ge = i && !h && !_;
          return (0, e.jsx)(qe.K, {
            placeholderHeight: "100vh",
            className: Ee().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: Ee().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: Ee().ImageWrapper,
                  style: {
                    backgroundImage: _ ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: C,
                  onDragEnd: S,
                  onDoubleClick: p,
                  onClick: N,
                  children: (0, e.jsx)(Gn, {
                    clanImage: t,
                    className: Ee().VideoBackground,
                  }),
                }),
                J &&
                  (0, e.jsx)("span", {
                    className: Ee().Full,
                    onClick: p,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                h &&
                  (0, e.jsx)(Qe.t, {
                    size: "medium",
                    className: Ee().FloatingThrobber,
                  }),
                ue &&
                  (0, e.jsx)("span", {
                    className: Ee().Thumb,
                    onClick: x,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                Ge &&
                  d &&
                  (0, e.jsx)(ua, {
                    bDeleting: h,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                Oe &&
                  (0, e.jsx)("span", {
                    className: Ee().Full,
                    onClick: v,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !h &&
                  (0, e.jsx)("span", {
                    className: Ee().Delete,
                    onClick: w,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: Ee().ImageWrapperFilename,
                  title: G,
                  children: V,
                }),
              ],
            }),
          });
        }
        function ua(o) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: n,
              bDeleting: s,
            } = o,
            { data: r } = (0, K.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, M.A)(Ee().Localized, f().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function Gn(o) {
          const { clanImage: t, className: n } = o;
          return ve.zU.BIsClanImageVideo(t)
            ? (0, e.jsx)("video", {
                autoPlay: !0,
                loop: !0,
                muted: !0,
                className: n,
                children: (0, e.jsx)("source", {
                  src: t.url,
                  type: "video/" + (t.file_type == In.bg.nn ? "mp4" : "webm"),
                }),
              })
            : null;
        }
        function ma(o) {
          const { clanImage: t, onImageSelected: n, selected: s } = o;
          return jsxs("div", {
            className: classnames(
              styles.ClanImageGridItem,
              s && styles.Selected,
            ),
            onClick: () => n(t, !1),
            onDoubleClick: () => n(t, !0),
            title: t.file_name,
            children: [
              jsx("div", {
                className: styles.ImgCtn,
                children: ClanImageUtils.BIsClanImageVideo(t)
                  ? jsx(Gn, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function ha(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = m.useCallback(
              (h, u) => {
                s?.(h, u), n?.();
              },
              [s, n],
            ),
            [i, d] = m.useState("");
          return (0, e.jsxs)(he.o0, {
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: n,
            onCancel: n,
            children: [
              (0, e.jsx)(ca, { fnSetImageSearch: d }),
              (0, e.jsx)(da, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: i,
                imageInsertCallBack: r,
                showImageActions: !1,
              }),
            ],
          });
        }
        function pa(o) {
          const { clanSteamID: t, OnClanImageSelected: n } = o;
          return (0, e.jsxs)("div", {
            className: at().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: at().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (s) => {
                  (0, ye.pg)(
                    (0, e.jsx)(ha, { clanSteamID: t, OnClanImageSelected: n }),
                    (0, It.uX)(s) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function va(o) {
          const {
              clanSteamID: t,
              rgSupportArtwork: n,
              localizedPrimaryImage: s,
              bAllowPreviousClanImageSelection: r,
              fnSetImageURL: i,
              rgRealmList: d,
            } = o,
            [h] = (0, z.q3)(() => [Se.O.Get().GetCurEditLanguage()]),
            u = (0, we.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [v, x] = m.useState(!1),
            C = m.useCallback(
              async (B, b) => {
                if (!v) {
                  x(!0);
                  try {
                    const { language: D } = (0, nt.jj)(B.file_name ?? "", h),
                      N = (0, nt.PD)(D, h, d);
                    await p.AddExistingClanImage(B, N);
                  } catch (D) {
                    let N = (0, Ot.H)(D);
                    console.error("AddExistingClanImage: " + N.strErrorMsg, N),
                      (0, ye.pg)(
                        (0, e.jsx)(he.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            N.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  x(!1);
                }
              },
              [v, p, h, d],
            ),
            S = m.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          pa,
                          { clanSteamID: t, OnClanImageSelected: C },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [C, r, t],
            ),
            w = (B) => {
              for (const b of B) {
                const D = b.uploadResult;
                if (D?.origimagehash) {
                  const N = (0, nt.PD)(D.language, h, d);
                  Ae.AddLocalizeImageUploaded(D.origimagehash, N);
                } else {
                  const N = pe.pU.GetClanImageByImageHash(
                      t,
                      D?.image_hash ?? "",
                    ),
                    G = b.image.GetCurrentImageOption();
                  if (N && G) {
                    const V = (0, nt.PD)(b.image.language, h, d);
                    i(G.artworkType, N, V);
                  }
                }
              }
            };
          return (0, e.jsx)(ta, {
            ...o,
            imageUploader: p,
            rgRealmList: d,
            elAdditonalButtons: v
              ? [
                  (0, e.jsx)(
                    Qe.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, c.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : S,
            fnUploadComplete: w,
          });
        }
        var Ct = a(87498),
          fa = a(25359),
          Ie = a.n(fa),
          Ia = a(24806);
        function Pn(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [h, u] = (0, m.useState)(s),
            p = fe.b.InitFromClanID(t.clanAccountID),
            v = (0, z.q3)(() =>
              ve.zU.GenerateURLFromHashAndExt(p, ve.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(he.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, h),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, M.A)(f().FlexColumnContainer, Ie().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: Ie().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: Ie().ArtworkPreview,
                    src: v,
                  }),
                }),
                (0, e.jsx)(Ia.Ng, {
                  selectedLang: h,
                  fnLangHasData: d,
                  fnOnLanguageChanged: u,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var Nt = a(56330);
        function xn(o) {
          if (!o) return o;
          const t = o.lastIndexOf(".");
          return t === -1 ? o : o.substring(0, t);
        }
        var xa = a(58483),
          Ca = a(82385),
          Sa = a(94520),
          ja = a(95174),
          Da = a(9709),
          Cn = a(64868),
          Ea = a(44894);
        const _a =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var ba = a(11243);
        function ya(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, pe.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let p = new Array();
              const v = c.A0.GetLanguageListForRealms([
                fn.TU.k_ESteamRealmGlobal,
                fn.TU.k_ESteamRealmChina,
              ]);
              for (const x of v) {
                const C = n(x);
                if (C) {
                  const S = (0, F.LgB)(x),
                    w = (0, c.we)("#Language_" + S);
                  p.push({ lang: x, strLang: S, locLang: w, imgHash: C });
                }
              }
              return (
                (p = p.sort((x, C) =>
                  x.locLang > C.locLang ? 1 : x.locLang < C.locLang ? -1 : 0,
                )),
                p
              );
            }, [n]),
            [d, h, u] = (0, Cn.uD)();
          return (0, e.jsxs)("div", {
            className: Ie().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: Ie().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: Ie().LanguageListContainer,
                children: i.map((p) =>
                  (0, e.jsx)(
                    wa,
                    { langData: p, ...o },
                    "lang_select_" + t.GetAccountID() + " " + p.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)($.$n, {
                  onClick: h,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(ba.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(he.EN, {
                active: d,
                children: (0, e.jsx)(he.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: u,
                  onOK: () => {
                    for (let p = 0; p < F.bP9; p++) s && r && s(p) && r(p);
                  },
                }),
              }),
            ],
          });
        }
        function wa(o) {
          const {
              clanSteamID: t,
              langData: n,
              langOverride: s,
              fnOnLanguagePreviewChange: r,
              fnOnArtworkLangChange: i,
              fnOnRemoveImage: d,
            } = o,
            [h, u] = (0, z.q3)(() => {
              const p = pe.pU.GetClanImageByImageHash(t, n.imgHash);
              let v = "";
              p &&
                (v = ve.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  ve.zU.GetHashAndExt(p),
                  Pe.wI.full,
                  n.lang,
                ));
              let x = Ie().LanguageSelectorSelected;
              return (
                s != n.lang &&
                  (x = n.imgHash
                    ? Ie().LanguageSelector
                    : Ie().LanguageSelectorNoData),
                [v, x]
              );
            });
          return (0, e.jsxs)("div", {
            id: n.strLang,
            className: Ie().LanguageContainer,
            onClick: (p) => {
              let v = (0, F.sfN)(p.currentTarget.id);
              r(v);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: Ie().LanguageOptions,
                children: [
                  !!h &&
                    (0, e.jsx)("a", {
                      href: h,
                      target: "_blank",
                      children: (0, e.jsx)(We.he, {
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: xt.YNO(),
                      }),
                    }),
                  !!i && (0, e.jsx)(La, { ...o }),
                  !!d && (0, e.jsx)(Aa, { fnOnRemoveImage: d, langData: n }),
                ],
              }),
            ],
          });
        }
        function La(o) {
          const {
              clanSteamID: t,
              langData: n,
              fnOnArtworkLangChange: s,
              fnGetImageHash: r,
              fnLangHasData: i,
              realms: d,
            } = o,
            [h, u, p] = (0, Cn.uD)(),
            v = (0, z.q3)(() => {
              const x = r(n.lang);
              return (
                (0, Ye.wT)(
                  !x || !x.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + x,
                ),
                pe.pU.GetClanImageByImageHash(t, x)
              );
            });
          if (!v) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(We.he, {
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: _a,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)(U.tH, {
                children: (0, e.jsx)(he.EN, {
                  active: h,
                  children: (0, e.jsx)(Pn, {
                    clanImage: v,
                    lang: n.lang,
                    fnOnArtworkLangChange: s,
                    fnLangHasData: i,
                    realms: d,
                    closeModal: p,
                  }),
                }),
              }),
            ],
          });
        }
        function Aa(o) {
          const { fnOnRemoveImage: t, langData: n } = o,
            [s, r, i] = (0, Cn.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(We.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: Ea.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(U.tH, {
                children: (0, e.jsx)(he.EN, {
                  active: s,
                  children: (0, e.jsx)(he.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, F.LgB)(n.lang)),
                    ),
                    onOK: () => {
                      t(n.lang);
                    },
                    closeModal: i,
                  }),
                }),
              }),
            ],
          });
        }
        var Sn = a(13465),
          Ba = a(21659),
          Ga = a(15496),
          _e = a.n(Ga),
          Pa = a(88812);
        function Ta(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            h = (0, Ba.c5)(),
            u = m.useCallback(
              (D) => {
                D.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, F.sfN)(O.TS.LANGUAGE),
            [v, x, C] = (0, z.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let S = "spotlight",
            w = Pe.wI.spotlight_main;
          (t.appid == 2434320 || O.TS.EUNIVERSE == F.Rv) &&
            ((S = h
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (w = Pe.wI.full));
          let B =
            (0, Pa.WC)(n !== void 0 ? void 0 : t, S, p, w) ??
            (n !== void 0 ? [n] : []);
          i && B && (B = i(B));
          const b = v.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: _e().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(R.Z, {
                className: (0, M.A)(
                  _e().AppDetailsSpotlightContainer,
                  _e().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: _e().MajorEventBackground,
                    children: (0, e.jsx)(Sn.c, {
                      className: _e().MajorEventImageBackgroundBlur,
                      rgSources: B,
                      onIncrementalError: (D, N, G) => r && r(N),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: _e().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(Sn.c, {
                        className: _e().MajorEventImage,
                        rgSources: B,
                        onIncrementalError: (D, N, G) => r && r(N),
                      }),
                      (0, e.jsx)("div", {
                        className: _e().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: _e().MajoreEventImageContentContainer,
                        children:
                          C &&
                          (0, e.jsxs)("div", {
                            className: _e().MajorEventContent,
                            children: [
                              (0, e.jsx)(Sn.c, {
                                className: _e().MajorEventSpotlightBackground,
                                rgSources: B,
                                onIncrementalError: (D, N, G) => r && r(N),
                              }),
                              (0, e.jsxs)("div", {
                                className: _e().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: _e().MajorEventTitle,
                                    children: x,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: _e().MajorEventSummary,
                                    children: b,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: _e().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Oa = a(79949),
          Ce = a.n(Oa);
        function Ma(o) {
          const {
              langOverride: t,
              artworkType: n,
              fnOnLanguagePreviewChange: s,
              clanSteamID: r,
              eventModel: i,
              partnerEventStore: d,
              fnOnRemoveImage: h,
              fnOnArtworkLangChange: u,
              realms: p,
              fnLangHasData: v,
              fnGetImageHashAndExt: x,
            } = o,
            C = x(n, t),
            S = C
              ? ve.zU.GenerateURLFromHashAndExtAndLang(r, C, Pe.wI.full, t)
              : "",
            [w] = (0, z.q3)(() => [Ha(n, x)]);
          return w == 0
            ? (0, e.jsxs)("div", {
                className: Ie().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(Tn, {
                      imgURL:
                        O.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(On, {
                      imgURL:
                        O.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Na, {
                      langOverride: t,
                      artworkType: n,
                      eventModel: i,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, c.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: Ie().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(Tn, {
                      imgURL: S,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(On, {
                      imgURL: S,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Rt, { imgURL: S, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Rt, { imgURL: S, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Rt, { imgURL: S, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(Ua, {
                      imgURL: S,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(ka, { imgURL: S }),
                  n === "sale_overlay" && (0, e.jsx)(Fa, { imgURL: S }),
                  Pe.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: Da.PreviewImg,
                      src:
                        Ae.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(St, { imgURL: S }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(St, { imgURL: S }),
                  n === "sale_logo" && (0, e.jsx)(St, { imgURL: S }),
                  n === "bestofyear_banner" && (0, e.jsx)(St, { imgURL: S }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(St, { imgURL: S }),
                  (0, e.jsx)(ya, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: h,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: v,
                    fnGetImageHash: (B) => xn(x(n, B) ?? ""),
                  }),
                ],
              });
        }
        function Bo(o) {
          const { artworkType: t } = o,
            n = ArtworkTypeMap[t];
          return jsxs("div", {
            className: previewstyles.SpotlightImage,
            children: [
              jsx("h1", {
                className: previewstyles.SpotImgTitle,
                children: Localize("#EventEditor_ArtworkType_" + t),
              }),
              jsxs("p", {
                className: previewstyles.SpotImgSubtitle,
                children: [n.width, " X ", n.height],
              }),
            ],
          });
        }
        function Na(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = Ct.Fj[t],
            i = m.useMemo(
              () =>
                Ra(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Rt, { lang: n, imgURL: i, event: s });
        }
        function Ra(o, t) {
          const r = document.createElement("canvas");
          (r.width = 780), (r.height = 200);
          const i = r.getContext("2d"),
            d = 20;
          for (let p = 0; p < 200; p += d)
            for (let v = 0; v < 780; v += d)
              (i.fillStyle =
                (v / d + p / d) % 2 === 0 ? "#a405e3ff" : "#000000"),
                i.fillRect(v, p, d, d);
          const h = i.createLinearGradient(0, 0, 780, 0);
          h.addColorStop(0, "rgba(32,32,32,0.8)"),
            h.addColorStop(1, "rgba(60,60,60,0.8)"),
            (i.fillStyle = h),
            i.fillRect(0, 0, 780, 200);
          const u = i.createRadialGradient(
            780 / 2,
            200 / 2,
            0,
            780 / 2,
            200 / 2,
            Math.max(780, 200) / 1.2,
          );
          return (
            u.addColorStop(0, "rgba(0,0,0,0)"),
            u.addColorStop(1, "rgba(0,0,0,0.6)"),
            (i.fillStyle = u),
            i.fillRect(0, 0, 780, 200),
            (i.fillStyle = "#fff"),
            (i.font = "32px Arial"),
            (i.textAlign = "center"),
            (i.textBaseline = "middle"),
            i.fillText(o, 780 / 2, 200 / 2 - 20),
            t &&
              ((i.font = "18px Arial"), i.fillText(t, 780 / 2, 200 / 2 + 25)),
            r.toDataURL("image/png")
          );
        }
        function Tn(o) {
          const { imgURL: t, eventModel: n, langOverride: s } = o,
            r = (0, Se.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(ja.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function On(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, xa.LJ)(),
            [i, d, h, u, p] = (0, z.q3)(() => [
              n.GetNameWithFallback(t),
              n.GetDescriptionWithFallback(t),
              n.GetSubTitleWithLanguageFallback(t),
              n.type,
              n.AnnouncementGID,
            ]);
          let v = d
            ? (0, e.jsx)(Sa.fh, {
                text: d || "",
                showErrorInfo: !1,
                event: n,
                languageOverride: Se.O.Get().GetCurEditLanguage(),
              })
            : (0, c.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Ce().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Ce().ExampleSectionTitle,
                children: (0, c.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, M.A)(
                  Ce().DetailPageExample,
                  "DetailPageExample",
                ),
                children: (0, e.jsxs)("div", {
                  className: Ce().DetailExample,
                  children: [
                    (0, e.jsx)("div", {
                      className: Ce().MainImageCtn,
                      children: (0, e.jsx)("img", { src: o.imgURL }),
                    }),
                    (0, e.jsx)("div", {
                      className: Ce().ExampleBodyPosition,
                      children: (0, e.jsxs)("div", {
                        className: Ce().ExampleContentCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ce().TextTitle,
                            children:
                              i ||
                              (0, c.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ce().TextSubTitle,
                            children:
                              h ||
                              (0, c.we)("#selectimage_display_event_subtitle"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ce().TextBody,
                            children: v,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              u != F.Fwr &&
                (0, e.jsxs)(m.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Ce().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Ce().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, M.A)(
                        Ce().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Ce().DetailExample2,
                        children: (0, e.jsx)(
                          Ca.He,
                          {
                            event: n,
                            emoticonStore: r,
                            partnerEventStore: s,
                            headerClassnames: "editor",
                            langOverride: t,
                            bDisableBroadcastPlayer: !0,
                          },
                          p,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Rt = (o) => {
            const [t] = (0, dt.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Ce().SpotlightExample,
              children: (0, e.jsx)(Ta, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          Ua = (o) => {
            const t = [
              (0, e.jsx)("img", { src: o.imgURL }, "img"),
              (0, e.jsx)("div", { className: Ie().BroadcastPreview }, "video"),
            ];
            return (
              o.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Ce().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          ka = (o) =>
            (0, e.jsx)("div", {
              className: Ce().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          Fa = (o) =>
            (0, e.jsx)("div", {
              className: Ce().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          St = (o) =>
            (0, e.jsx)("div", {
              className: Ce().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            });
        function Ha(o, t) {
          let n = 0;
          for (let s = F.Bhc; s < F.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var za = Object.defineProperty,
          Wa = Object.getOwnPropertyDescriptor,
          Mn = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Wa(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && za(t, n, r), r;
          };
        const Va =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Ka = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Ka || {});
        function Qa(o) {
          const {
              artworkType: t,
              headerHint: n,
              appid: s,
              fnToggleMinimize: r,
              realms: i,
              eventModel: d,
              fnLangHasData: h,
              fnGetImageHashAndExt: u,
              fnSetImageURL: p,
              partnerEventStore: v,
            } = o,
            [x] = (0, dt.t7)(s, { include_assets: !0 }),
            [C, S] = (0, z.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            w = C == F.ajI;
          let B = null;
          n === 2
            ? (B = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (B = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (B = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let b = null;
          t === "capsule"
            ? w
              ? (b = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (b = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!S &&
                      (0, e.jsxs)("div", {
                        className: Ie().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${O.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, c.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (b = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, c.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, c.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (b = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, c.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, c.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (b = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, c.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, c.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (b = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, c.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (b = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: f().EventElementRequired,
                              children: (0, c.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, c.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, c.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, c.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, c.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? x &&
                          (b = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !x.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Nt.ErrorStylesBackground,
                                  children: (0, c.we)(
                                    "#EventEdtior_ArtworkType_hero_warning",
                                  ),
                                }),
                            ],
                          }))
                        : t === "localized_image_group" ||
                            t === "link_capsule" ||
                            t === "sale_section_title" ||
                            t === "schedule_track_art" ||
                            t === "localized_background_art"
                          ? (b = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, c.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, c.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Va,
                                      target: O.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, c.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (b = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: f().EventElementOptional,
                                    children: (0, c.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, c.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, c.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (b = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: f().EventElementOptional,
                                      children: (0, c.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, c.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, c.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, c.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (b = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, c.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, c.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (b = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: f().EventElementOptional,
                                          children: (0, c.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (b = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: f().EventElementRequired,
                                          children: (0, c.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, c.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, c.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const D = Ct.Fj[o.artworkType].width,
            N = Ct.Fj[o.artworkType].height;
          return (0, e.jsxs)("div", {
            id: o.id,
            className: Ie().ArtworkSelectorContainer,
            children: [
              !!o.title &&
                (0, e.jsxs)("div", {
                  className: Ie().Title,
                  onDoubleClick: r,
                  children: [
                    o.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    B,
                    r &&
                      (0, e.jsx)($.$n, {
                        onClick: r,
                        children: (0, e.jsx)(We.he, {
                          toolTipContent: (0, c.we)(
                            o.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: o.bIsMinimized
                            ? (0, e.jsx)(xt.hz4, {})
                            : (0, e.jsx)(xt.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, M.A)(Ie().SelectImageBlock, Ie().Tips),
                  children: [
                    b,
                    !!(D && N) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, c.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, c.PP)(
                            "#selectimage_tip1",
                            (0, Ct.qj)(D),
                            (0, Ct.qj)(N),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Nt.WarningStylesWithIcon,
                          children: o.strWarning,
                        }),
                      }),
                    o.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    o.elAdditionalControls,
                    !!o.fnRemoveAllArtwork &&
                      (0, e.jsx)($.$n, {
                        onClick: (G) => {
                          (0, ye.pg)(
                            (0, e.jsx)(Ya, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, It.uX)(G) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsx)(Za, {
                  clanSteamID: o.clanSteamID,
                  title: o.title ?? "",
                  eventModel: d,
                  artworkType: o.artworkType,
                  realms: i,
                  appid: s,
                  fnGetImageHashAndExt: u,
                  fnSetImageURL: p,
                  fnLangHasData: h,
                  partnerEventStore: v,
                }),
            ],
          });
        }
        function Ya(o) {
          const { fnRemoveAllArtwork: t, closeModal: n } = o;
          return (0, e.jsx)(he.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), n?.();
            },
            onCancel: n,
          });
        }
        function Za(o) {
          const {
              artworkType: t,
              realms: n,
              clanSteamID: s,
              fnLangHasData: r,
              fnGetImageHashAndExt: i,
              fnSetImageURL: d,
              eventModel: h,
              appid: u,
              partnerEventStore: p,
            } = o,
            v = t === "localized_image_group",
            [x, C] = m.useState((0, Se.E)()),
            [S, w] = m.useState(new Array()),
            B = m.useCallback(
              (D, N, G) => {
                let V = [];
                S.find((J) => J.clanImage.imageid == D.imageid)
                  ? (V = S.map((J) =>
                      J.clanImage.imageid == D.imageid
                        ? { clanImage: D, lang: N }
                        : J,
                    ))
                  : G && (V = S.concat({ clanImage: D, lang: N })),
                  w(V);
              },
              [S],
            ),
            b = m.useCallback(
              (D, N, G) => {
                (0, tt.h5)(() => {
                  xn(i(t, N) ?? "") == D.image_hash && d(t, null, N),
                    d(t, D, G),
                    B(D, G, !1);
                });
              },
              [i, t, d, B],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)($.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${O.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Ut, {
                    list: S,
                    fnOnArtworkLanguageChange: b,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, M.A)(
                        Ie().SelectImageBlock,
                        Ie().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Ma, {
                        eventModel: h,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (D) => {
                          D != x && C(D);
                        },
                        langOverride: x,
                        fnOnArtworkLangChange: v ? null : b,
                        artworkType: t,
                        fnOnRemoveImage: v ? null : (D) => d(t, null, D),
                        realms: n,
                        fnLangHasData: r,
                        fnGetImageHashAndExt: i,
                        partnerEventStore: p,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Ut = class extends m.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, ye.pg)(
              (0, e.jsx)(Pn, {
                clanImage: o,
                lang: t,
                fnOnArtworkLangChange: n,
                fnLangHasData: r,
                realms: s,
              }),
              window,
            );
          }
          GenerateImageMappings() {
            let o = new Array();
            const { list: t } = this.props;
            return (
              t.forEach((n) => {
                const { clanImage: s, lang: r } = n;
                let i = (0, c.we)("#Language_" + (0, F.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: f().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping",
                            s.file_name ?? "",
                            i,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(s, r),
                          children: (0, c.we)(
                            "#ImageUpload_Success_Mapping_Change",
                          ),
                        }),
                      ],
                    },
                    "img_lang_" + n.clanImage.imageid + "_" + r,
                  ),
                );
              }),
              o
            );
          }
          render() {
            const { list: o } = this.props;
            if (!o || o.length == 0) return (0, e.jsx)("div", {});
            let t = this.GenerateImageMappings();
            return (0, e.jsx)("div", {
              className: Ie().UploadSuccess,
              children: t,
            });
          }
        };
        Mn([be.oI], Ut.prototype, "ShowLangChangeDialog", 1),
          (Ut = Mn([bn.PA], Ut));
        var Ja = a(6658);
        function Xa(o) {
          const {
              clanSteamID: t,
              appid: n,
              eventModel: s,
              realms: r,
              loc_images: i,
              artworkType: d,
              fnLangHasData: h,
              closeModal: u,
              fnSetImageURL: p,
              partnerEventStore: v,
            } = o,
            [x, C] = (0, m.useState)(!1),
            S = (0, we.zO)(t, d),
            w = t.GetAccountID(),
            [B] = (0, z.q3)(() => [
              S.GetFilesToUpload().length - S.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            C(!1),
              Ae.ClearImageGroup(),
              i?.forEach((G, V) => {
                const _ = fe.b.InitFromClanID(w);
                if (Ae.GetAllLocalizedGroupImages().length == 0) {
                  const J = G && ve.zU.GetHashFromHashAndExt(G),
                    ue = J && pe.pU.GetClanImageByImageHash(_, J);
                  ue && Ae.SetPrimaryImageForImageGroup(ue, d);
                }
                Ae.SetLocalizedImageGroupAtLang(V, _, G ?? null);
              }),
              C(!0);
          }, [i, w, d]);
          const b = (0, m.useCallback)(
              (G, V, _ = F.Bhc) => {
                const J = fe.b.InitFromClanID(w),
                  ue = ve.zU.GetHashAndExt(V ?? null);
                if (Ae.GetAllLocalizedGroupImages().length == 0) {
                  const Oe = ue && ve.zU.GetHashFromHashAndExt(ue),
                    Ge = Oe && pe.pU.GetClanImageByImageHash(J, Oe);
                  Ge && Ae.SetPrimaryImageForImageGroup(Ge, G);
                }
                Ae.SetLocalizedImageGroupAtLang(_, J, ue);
              },
              [w],
            ),
            D = (0, m.useCallback)((G, V) => {
              const J = Ae.GetLocalizedImageGroupForEdit()?.localized_images[V];
              return J && J.split("/").pop();
            }, []),
            N = () => {
              const G = Ae.GetLocalizedImageGroupForEdit();
              for (let V = F.Bhc; V < F.bP9; ++V) {
                const _ = G?.localized_images[V];
                if (_) {
                  const J = _.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: xn(J),
                      clanAccountID: w,
                      file_type: (0, Ja.yh)(J) ?? In.bg.w3,
                      imageid: 0,
                    },
                    V,
                  );
                } else p(d, null, V);
              }
              Ae.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(he.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, M.A)(Nt.NotTooWideModal, Nt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: B > 0,
            onOK: N,
            strOKButtonText:
              B > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              x
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(va, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: b,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: S,
                      }),
                      (0, e.jsx)(Qa, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => Ae.ClearImageGroup(),
                        fnSetImageURL: b,
                        fnGetImageHashAndExt: D,
                        fnLangHasData: h,
                        partnerEventStore: v,
                      }),
                    ],
                  })
                : (0, e.jsx)(Qe.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
                  }),
              o.children,
            ],
          });
        }
        function $a(o) {
          const { setting: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                i.push({
                  label: (0, c.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: g.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "no-repeat",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var qa = a(94381);
        function eo(o) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = o,
            { openColorPicker: i } = k(),
            [d, h] = (0, m.useState)(() => n),
            [u, p, v, x, C, S, w, B] = (0, z.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [b] = (0, m.useState)(() => to(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Xa, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: dn.O3,
            artworkType: "localized_background_art",
            realms: w,
            loc_images: b,
            fnLangHasData: (D) => !!b[D],
            fnGetImageHash: (D, N) => b[N],
            fnSetImageURL: async (D, N, G) => {
              h((V) => {
                const _ = { ...V.localized_background_art },
                  J = ve.zU.GetHashAndExt(N);
                return (
                  J ? (_[(0, F.LgB)(G)] = J) : delete _[(0, F.LgB)(G)],
                  { ...V, localized_background_art: _ }
                );
              });
            },
            onOK: () => {
              h((D) => (s(D), t && setTimeout(t, 1), { ...D }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: H().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: H().ImageOptions,
                    children: [
                      (0, e.jsx)($a, {
                        setting: u,
                        fnUpdateSetting: (D) => {
                          h(
                            D !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: D,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: D },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(no, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (D) => h({ ...d, scaling_setting: D }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(oo, {
                          position_settings: S,
                          fnUpdateSetting: (D) =>
                            h({ ...d, position_setting: D }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: H().ColorOptions,
                    children: [
                      (0, e.jsx)($.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: ce().ColorCtn,
                        children: [
                          (0, e.jsx)($.$n, {
                            style: { backgroundColor: v },
                            onClick: (D) =>
                              i(D, {
                                color: v ?? "",
                                onChange: (N) =>
                                  h({ ...d, background_color1: N }),
                              }),
                            children: (0, c.we)(
                              v === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)($.$n, {
                            onClick: () =>
                              h({ ...d, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: H().SwapColorsCtn,
                        children: (0, e.jsx)($.$n, {
                          onClick: () =>
                            h({
                              ...d,
                              background_color1: x,
                              background_color2: v,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      C !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: ce().ColorCtn,
                          children: [
                            (0, e.jsx)($.$n, {
                              style: { backgroundColor: x },
                              onClick: (D) =>
                                i(D, {
                                  color: x ?? "",
                                  onChange: (N) =>
                                    h({ ...d, background_color2: N }),
                                }),
                              children: (0, c.we)(
                                x === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)($.$n, {
                              onClick: () =>
                                h({ ...d, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(ao, {
                        gradient: C ?? "top-to-bottom",
                        fnUpdateSetting: (D) =>
                          h({ ...d, gradient_setting: D }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(Bt, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(qa.S, {
                  checked: !!B,
                  onChange: (D) => {
                    d.randomize_section_order = D;
                  },
                  children: (0, c.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function to(o) {
          const t = pt.$Y([], F.bP9, null);
          for (const n in o) {
            const s = (0, F.sfN)(n);
            s != F.xPp && (t[s] = o[n]);
          }
          return t;
        }
        function no(o) {
          const {
              scaling_setting: t,
              fnUpdateSetting: n,
              label: s,
              disable: r,
            } = o,
            i = m.useMemo(() => {
              const d = [];
              return (
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                d.push({
                  label: (0, c.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                d
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: g.DropDownScroll,
                disabled: r,
                rgOptions: i,
                selectedOption: t || "cover",
                onChange: (d) => n(d.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function ao(o) {
          const { gradient: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: g.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "top-to-bottom",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function oo(o) {
          const { position_settings: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                i.push({
                  label: (0, c.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: g.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "unset",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function so(o) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: n,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: r,
            } = o,
            [i, d] = (0, m.useState)(t.BIsBackgroundImageEnabled()),
            [h, u, p] = (0, be.uD)(),
            v = (0, z.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, M.A)(H().Ctn, r && g.ValveOnlyBackground),
            children: (0, e.jsxs)(U.tH, {
              children: [
                (0, e.jsx)($.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (x) => {
                    d(x), t.SetBackgroundImageEnabled(x);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)($.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)($.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: v,
                          onChange: (x) =>
                            t.SetSalePageLastCoverSectionUntilEnd(x),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)($.$n, {
                          onClick: u,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(he.EN, {
                          active: h,
                          children: (0, e.jsx)(he.o0, {
                            strTitle: (0, c.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, c.we)(
                              "#BackgroundGroups_ClearAllSettings_Desc",
                            ),
                            bDestructiveWarning: !0,
                            onOK: () => {
                              t.ClearAllBackgroundImageGroupSettings(), d(!1);
                            },
                            closeModal: p,
                          }),
                        }),
                      ],
                    })
                  : (0, e.jsx)("p", {
                      children: (0, c.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${mt.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const jn = m.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: h,
              nTabIndex: u,
            } = t,
            p = (0, Se.E)(),
            [v, x, C, S] = (0, z.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            w = C && i + 1 === S,
            [B, b, D] = (0, be.uD)(),
            [N, G, V] = (0, be.uD)();
          let _;
          v?.nUniqueIDNextSaleSection &&
            (_ = (0, ft.h_)(
              X.HY,
              r.GetSaleSectionByID(v?.nUniqueIDNextSaleSection),
              p,
              h,
              v.nSaleSectionLastIndex + 1,
            ));
          let J;
          if (v && x?.length > 1) {
            const ue = x[x.length - 1];
            J = (0, ft.h_)(
              X.HY,
              r?.GetSaleSectionByID(ue),
              p,
              h,
              v.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(cn.qx, {
            bStartMinimized: !1,
            title: (0, c.we)(
              u != null
                ? "#BackgroundGroups_Sale_Tab_GroupNum"
                : "#BackgroundGroups_Sale_GroupNum",
              i + 1,
            ),
            className: t.classNameHeader,
            children: (0, e.jsxs)("div", {
              ref: n,
              children: [
                (0, e.jsx)($.$n, {
                  onClick: b,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(he.EN, {
                  active: B,
                  children: (0, e.jsx)(eo, {
                    imgGroup: d,
                    closeModal: D,
                    eventModel: h,
                    fnUpdateImageGroup: (ue) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, ue)
                        : r.SetSalePageBackgroundGroup(i, ue),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: H().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    x.map((ue) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, ft.h_)(
                            X.W3,
                            r.GetSaleSectionByID(ue),
                            p,
                            h,
                            r.GetSaleSectionIndexByID(ue, !0),
                          ),
                        },
                        "li_" + ue,
                      ),
                    ),
                    !!w &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!J &&
                  (0, e.jsx)($.$n, {
                    onClick: () =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, {
                            ...d,
                            num_sections: d.num_sections - 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...d,
                            num_sections: d.num_sections - 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Reduce", J),
                  }),
                !!_ &&
                  (0, e.jsx)($.$n, {
                    onClick: () =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, {
                            ...d,
                            num_sections: d.num_sections + 1,
                          })
                        : r.SetSalePageBackgroundGroup(i, {
                            ...d,
                            num_sections: d.num_sections + 1,
                          }),
                    children: (0, c.we)("#BackgroundGroups_Extend", _),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)($.$n, {
                        onClick: G,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(he.EN, {
                        active: N,
                        children: (0, e.jsx)(he.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            u != null
                              ? r.RemoveTabBackgroundGroup(u, i)
                              : r.RemoveSalePageBackgroundGroup(i),
                          closeModal: V,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function ro(o) {
          const { backgroundImageEditModel: t, nTabID: n } = o;
          return (0, e.jsx)("div", {
            className: H().CtnEditor,
            children: (0, e.jsx)($.$n, {
              onClick: (s) =>
                n !== void 0 && n >= 0
                  ? t?.AddTabBackgroundGroup(n)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, c.we)(
                n !== void 0 && n >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function io(o) {
          const {
              nTabID: t,
              nSectionUniqueID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i = s.mapFirstSectionToGroup.get(n);
          return n == s.nFirstSaleSectionIDWithoutGroup ||
            n == s.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(ro, { backgroundImageEditModel: r, nTabID: t })
            : i
              ? (0, e.jsx)(lo, { ...o, groupID: i })
              : null;
        }
        function lo(o) {
          const {
              groupID: t,
              nTabID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i =
              n && n >= 0
                ? s.selectedTabBackgroundDef.groups
                : r.GetSalePageGroupDefinition().groups,
            d = i.findIndex((B) => B.background_id === t),
            h = i[d],
            [u, p] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!u) return;
            const B = (0, ye.pg)(
              (0, e.jsx)(he.o0, {
                bAlertDialog: !0,
                closeModal: () => p(!1),
                children: (0, e.jsx)(jn, {
                  backgroundImageEditModel: r,
                  groupIndex: d,
                  imgGroup: h,
                  imgGroupDerivedMapping: s,
                  eventModel: r.GetEventModel(),
                  nTabIndex: n,
                }),
              }),
              window,
            );
            return () => {
              B.then((b) => b.Close());
            };
          }, [u, r, h, d, n, s]);
          const v = (0, z.q3)(() => ht.get(t)),
            [x, C] = (0, m.useState)(null),
            S = m.useCallback((B, b) => {
              C(b);
            }, []),
            w = (0, be.w6)(S);
          return (0, e.jsxs)("div", {
            className: H().CtnEditor,
            ref: w,
            children: [
              !!(v && x && x > v) &&
                (0, e.jsx)($.$n, {
                  onClick: (B) => p(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(jn, {
                backgroundImageEditModel: r,
                groupIndex: d,
                imgGroup: h,
                imgGroupDerivedMapping: s,
                eventModel: r.GetEventModel(),
                nTabIndex: n,
              }),
            ],
          });
        }
        var co = a(81557),
          Nn = a.n(co);
        function go(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!n) return;
            const v = (0, ye.pg)(
              (0, e.jsx)(he.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Rn, { ...o }),
              }),
              window,
            );
            return () => {
              v.then((x) => x.Close());
            };
          }, [n, o]);
          const r = (0, z.q3)(() => {
              const v = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (v) {
                const x = t.mapGroupToSections.get(v);
                if (x) return ht.get(x?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, m.useState)(null),
            h = m.useCallback((v, x) => {
              d(x);
            }, []),
            u = (0, be.w6)(h),
            p = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, M.A)(H().CtnEditor, Nn().TabCtn),
            ref: u,
            children: [
              p &&
                (0, e.jsx)($.$n, {
                  onClick: (v) => s(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Rn, { ...o }),
            ],
          });
        }
        function Rn(o) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: n,
              nTabID: s,
            } = o,
            [r, i] = (0, m.useState)(null),
            [d, h, u, p] = (0, z.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(U.tH, {
            children: [
              (0, e.jsx)($.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: h,
                onChange: (v) => {
                  if (
                    ((0, Ye.wT)(t, "edit model mising"),
                    (0, Ye.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const x = t.SetTabEnabled(s, v);
                    (0, Ye.wT)(
                      !!x,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      i(x);
                  } else
                    console.error(
                      `Failed to enable table group, edit mode: ${!!t}, TabID: ${s}.`,
                    );
                },
              }),
              !!h &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)($.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: d,
                      onChange: (v) => t.SetTabLastCoverSectionUntilEnd(s, v),
                    }),
                    (0, e.jsx)(jn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (u || r)?.groups[0],
                      imgGroupDerivedMapping: n,
                      eventModel: p,
                      nTabIndex: s,
                      classNameHeader: Nn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var jt = a(85692);
        function uo(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = m.useState(!1),
            [i, d] = m.useState(!1);
          m.useEffect(() => {
            jt.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const h = (0, z.q3)(() => jt.TU.Get().GetMouseOverSectionID()),
            u = t && t == h,
            p = () => jt.TU.Get().JumpToSection(t),
            v = m.useRef(null);
          return (
            (0, jt.lM)((x) =>
              t != x ? !1 : (v.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: v,
              className: (0, M.A)({
                [l().SaleSectionLivePreview]: !0,
                [l().Hover]: !!u,
                [l().JumpedTo]: !!i,
              }),
              onAnimationEnd: () => d(!1),
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              children: [
                s &&
                  (0, e.jsx)(We.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: l().JumpToButton,
                      onClick: p,
                      children: (0, e.jsx)(xt.ffu, {}),
                    }),
                  }),
                n,
              ],
            })
          );
        }
        var mo = a(76281),
          ho = a(20557),
          po = a(64286),
          vo = a(16574);
        function fo(o) {
          const {
              promotionName: t,
              eventModel: n,
              bIsPreview: s,
              language: r,
              backgroundImageEditModel: i,
              addtionalAdminButtons: d,
              bDynamicallyCreatedSale: h,
            } = o,
            [u, p] = m.useState(n?.GetDayIndexFromEventStart()),
            [v, x] = m.useState(null),
            C = (0, z.q3)(() => n.jsondata.sale_header_disable_top_margin),
            S = (0, vo.P)(n, !!(0, wt.Yu)(n)),
            w = Io(n, u, (0, ho.TC)(!!s)),
            [B, b] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !v &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, O.yK)() == "community"
            ) {
              const J = document.getElementsByTagName("HEAD")[0],
                ue = document.createElement("style");
              (ue.innerText = (0, ln.L$)(n.jsondata.sale_custom_css)),
                x(ue),
                J.appendChild(ue);
            }
            const _ = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Ye.wT)(
                _.length <= 1,
                "Must have at most one react_landing_background",
              ),
              _.length >= 1 && (_[0].style.backgroundImage = ""),
              () => {
                v && (v.remove(), x(null));
              }
            );
          }, [n, v, s]);
          const D = n?.jsondata,
            N = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(O.UF.CLANACCOUNTID),
                nAppIDVOD: Number(D?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? D?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  D?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, D, r, t],
            ),
            G = (0, z.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            V = At(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: Tt().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Qe.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const _ = te(n),
              J = n.BUsesContentHubForItemSource(),
              ue = n
                .GetSaleSections()
                .some((Ne) => Ne.section_type === "contenthubtitle"),
              Oe = J && ue;
            let Ge,
              ne = !0;
            _
              ? (Ge = 0)
              : n.BUsesContentHubForItemSource()
                ? (Ge = 20)
                : n.GetEventType() == F.ajI
                  ? ((Ge = 0), (ne = !1))
                  : (Ge = n.jsondata.sale_header_offset || 0);
            const le = ne && n.jsondata.sale_header_offset === 530,
              Ve = !yt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              Ze = s
                ? !B && i?.BIsBackgroundImageEnabled()
                  ? Te.S.EPreviewMode_EditBackground
                  : Te.S.EPreviewMode_Enabled
                : Te.S.EPreviewMode_Disabled,
              Me = G || n.GetEventType() != F.ajI,
              Dt = J ? ie.Yo.NoTransform : ie.Yo.NoTransformSparseContent,
              kt = (0, M.A)(
                l().SaleOuterContainer,
                C && l().SaleOuterTopMargin,
                le && l().SaleNewSizing,
                l()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                _ && l().SalePageLogoSet,
                Oe && l().ContentHub,
              );
            return (0, e.jsx)(U.tH, {
              children: (0, e.jsx)(W.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(X.Cs, {
                  location: s ? X.HY : X.bs,
                  children: (0, e.jsxs)(T, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    personalizedCarousels: S,
                    children: [
                      Ve && (0, e.jsx)(W.Sn, {}),
                      (0, e.jsx)(_t, { eventModel: n }),
                      !!i &&
                        (Me || V) &&
                        (0, e.jsx)(so, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: B,
                          fnSetBackgroundImgGroupEditMode: b,
                          bShowAsValveOnly: !Me,
                        }),
                      (0, e.jsxs)(R.Z, {
                        style: Oe ? void 0 : { marginTop: `${Ge || 0}px` },
                        className: kt,
                        scrollIntoViewType: Dt,
                        children: [
                          _ && (0, e.jsx)(de, { eventModel: n, language: r }),
                          (0, e.jsx)(Ht, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Vt, {
                            event: n,
                            broadcastEmbedContext: N,
                          }),
                          (0, e.jsx)(Co, {
                            ePreviewMode: Ze,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: N,
                            selectedTab: w,
                            tagSelection: w?.GetTagSelection(),
                          }),
                          !h &&
                            (0, e.jsx)(qt, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Ne) => {
                                Ne != u &&
                                  ((n.m_overrideCurrentDay = Ne), p(Ne));
                              },
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            });
          }
        }
        function Io(o, t, n) {
          const [s] = (0, Ke.QD)(Ue.jD, void 0),
            [r] = (0, Ke.QD)(ze.dk, void 0),
            [i] = (0, Ke.QD)(ze.NV, void 0),
            d = m.useMemo(() => {
              const x = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((C) => !C.hide);
              if (x && x.length > 0) {
                let C = s > 0 ? x.find((w) => w.unique_id == s) : void 0;
                C || (C = x[0]);
                const S = C === x[0];
                return { selTab: C, bIsDefaultTab: S };
              }
            }, [o, s]),
            h = (0, ze.U9)((0, ze.XL)(r, i), d?.selTab.tab_tag_filter, n),
            u = h?.strParentKey,
            p = h?.strChildKey;
          return m.useMemo(() => {
            if (!d) return;
            let v;
            u && (v = { strParentKey: u, strChildKey: p });
            const x =
              o.jsondata.sale_opt_in_page_name ||
              o.jsondata.prune_list_optin_name;
            return new $e.y(d.selTab, t, d.bIsDefaultTab, v, x);
          }, [o, t, d, u, p]);
        }
        function Un() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function xo(o) {
          const {
              event: t,
              language: n,
              nSaleDayIndex: s,
              ePreviewMode: r,
              selectedTab: i,
              backgroundImageEditModel: d,
            } = o,
            [h, u] = m.useState((0, Ue.rp)()),
            p = m.useMemo(() => new rn(), []),
            v = m.useCallback(() => u((0, Ue.rp)()), []);
          m.useEffect(
            () => (
              window.addEventListener("resize", v),
              () => window.removeEventListener("resize", v)
            ),
            [v],
          ),
            m.useEffect(() => {
              let ne = "";
              const le = () => {
                  const Ve = Un();
                  if (Ve && Ve != ne) {
                    const Ze = document.getElementById(Ve);
                    Ze && ((ne = Ve), Ze.scrollIntoView({ block: "start" }));
                  }
                },
                Le = setTimeout(() => le(), 150);
              return (
                window.addEventListener("hashchange", le),
                () => {
                  clearTimeout(Le),
                    window.removeEventListener("hashchange", le);
                }
              );
            }, []);
          const x = (0, bt.W6)(),
            C = (ne, le) => {
              (0, Ke.ip)(x, { ...(le || {}), [Ue.jD]: ne.toString() });
            },
            [S, w] = (0, Ke.QD)("controller"),
            [B, b] = (0, z.q3)(() => {
              const ne =
                  zt.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                le = t.GetSaleSectionIncludingFooterSections(ne);
              return [
                tn(
                  t.jsondata.sale_background_img_groups,
                  le,
                  i && i.GetActiveTabUniqueID(),
                ),
                le,
              ];
            });
          let D = !1;
          const N = new $e.y(void 0, s),
            G = [{ elements: [], activeTab: N }];
          let V = null;
          const _ = (0, O.Qn)(),
            J = (0, jt.ty)(),
            ue = (0, po.h)(t),
            Oe = m.useMemo(() => {
              const ne = Un();
              if (!ne) return;
              const le = b.findIndex((Le) => Le.section_anchor === ne);
              return le > -1 ? le : void 0;
            }, [b]);
          b.forEach((ne, le) => {
            const Le = G[G.length - 1].activeTab;
            if (Le && !Le.ShouldShowSection(ne)) return;
            const Ve = yt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Ze = h && !Ve && !t.jsondata.content_hub_restricted_width;
            let Me = (0, Te.I)(ne, r, t, n, _, ue);
            if (Me === void 0) return;
            if (!Me)
              if ((0, gt.su)(ne) && !O.iA.logged_in)
                D ||
                  ((Me = (0, e.jsx)(gt.CC, {
                    section: ne,
                    event: t,
                    language: n,
                  })),
                  (D = !0));
              else {
                const Eo = ne.diable_tab_id_filtering
                  ? new $e.y(void 0, Le && Le.GetSaleDay())
                  : Le;
                ne.section_type == "tabs" &&
                  ne.tabs?.some(
                    (_o) => _o.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  G.push({ activeTab: i, elements: [] }),
                  (Me = (0, e.jsx)(mo.H, {
                    ...o,
                    section: ne,
                    activeTab: Eo,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: C,
                    expanded: Ze,
                    controllerCategory: S,
                    setControllerCategory: w,
                  }));
              }
            J &&
              (Me = (0, e.jsx)(uo, { nSectionID: ne.unique_id, children: Me }));
            const Dt = G && G.length && G[G.length - 1];
            let kt = (0, e.jsx)(
              Do,
              {
                section: ne,
                nActiveTabID:
                  Dt && Dt.activeTab && Dt.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: le,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: B,
                backgroundImageEditModel: d,
                bExpanded: Ze,
                children: (0, e.jsx)(qe._, {
                  enabled: !Oe || le > Oe,
                  children: Me,
                }),
              },
              "SaleSectionIndex_" + ne.unique_id + "_" + le,
            );
            const Ne = B.mapSectionToGroup.get(ne.unique_id);
            V &&
              V.groupID != Ne &&
              (G[G.length - 1].elements.push(
                Pt(t, V, r, i && i?.GetActiveTabUniqueID()),
              ),
              (V = null)),
              Ne
                ? (V ||
                    (V = {
                      groupID: Ne,
                      elSaleSections: [],
                      derivedGroupInfo: B.mapGroupToSections.get(Ne),
                    }),
                  V.elSaleSections.push(kt))
                : G[G.length - 1].elements.push(kt);
          }),
            V &&
              (G[G.length - 1].elements.push(
                Pt(t, V, r, i && i?.GetActiveTabUniqueID()),
              ),
              (V = null));
          const Ge = G.map((ne, le) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, M.A)(
                  l().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: ne.elements,
              },
              "TabSection_" + le,
            ),
          );
          return (0, e.jsx)(R.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Ge,
          });
        }
        const Co = (0, bt.y)(xo);
        function So(o) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: n,
            children: s,
          } = o;
          return t && n != null
            ? (0, e.jsx)(jo, {
                visibility_by_door_index_state: t,
                door_index_visibility: n,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function jo(o) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: n,
              children: s,
            } = o,
            r = (0, Wt.OM)(n);
          return (t == "hide_when_open_door_index" && r) ||
            (t == "show_when_open_door_index" && !r)
            ? null
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function kn({ children: o, onChange: t }) {
          const n = m.useRef(null);
          return (
            (0, m.useEffect)(() => {
              t(!!m.Children.toArray(o).filter(Boolean).length);
            }, [o, t]),
            o
          );
        }
        function Do(o) {
          const {
              section: t,
              saleSectionIndex: n,
              nActiveTabID: s,
              ePreviewMode: r,
              salePageBackgroundDerivedConfig: i,
              backgroundImageEditModel: d,
              bExpanded: h,
              children: u,
            } = o,
            p = t.section_anchor
              ? t.section_anchor
              : Ue.mj + (t.unique_id || n),
            v = t.section_type != "tabs",
            [x, C] = (0, m.useState)(!0);
          return x
            ? (0, e.jsx)(U.tH, {
                children: (0, e.jsx)(So, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: v
                    ? (0, e.jsx)(R.Z, {
                        navKey: p,
                        id: p,
                        className: (0, M.A)({
                          [l().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: h,
                          [t.single_item_style || ""]: !0,
                          [l().SaleSectionBackgroundImageGroupEdit]:
                            r == Te.S.EPreviewMode_EditBackground,
                          [l().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  u,
                                  (0, e.jsx)(io, {
                                    nSectionUniqueID: t.unique_id || n,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: i,
                                    backgroundImageEditModel: d,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(kn, { onChange: C, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, M.A)({
                                  [l().SaleSectionCtn]: !0,
                                  [l().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [l().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  u,
                                  (0, e.jsx)(go, {
                                    backgroundImageEditModel: d,
                                    nTabID: s,
                                    imgGroupDerivedMapping: i,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(kn, { onChange: C, children: u }),
                      }),
                }),
              })
            : null;
        }
      },
      12932: (P, ge, a) => {
        "use strict";
        a.d(ge, { qx: () => W });
        var e = a(7850),
          F = a(16412),
          R = a(18210),
          ie = a(36118),
          z = a(90626),
          q = a(36707),
          ee = a(95695),
          M = a.n(ee),
          c = a(25792),
          O = a(64734),
          ae = a.n(O),
          te = a(65946),
          de = a(11243);
        function oe(Q) {
          const {
              title: A,
              tooltip: m,
              getMinimized: L,
              toggleMinimized: U,
              className: E,
              children: l,
              elAdditionalButtons: g,
            } = Q,
            f = (0, te.q3)(() => L());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, q.A)(
                  E,
                  O.SectionTitleHeader,
                  O.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, q.A)(
                      ee.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [A, !!m && (0, e.jsx)(de.o, { tooltip: m })],
                  }),
                  (0, e.jsxs)("div", {
                    className: O.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(X, { bIsMinimized: f, fnToggleMinimize: U }),
                    ],
                  }),
                ],
              }),
              !f && (0, e.jsx)(c.tH, { children: l }),
            ],
          });
        }
        function W(Q) {
          const [A, m] = z.useState(!!Q.bStartMinimized);
          return (0, e.jsx)(oe, {
            ...Q,
            getMinimized: () => A,
            toggleMinimized: () => m(!A),
            children: Q.children,
          });
        }
        function X(Q) {
          const { bIsMinimized: A, fnToggleMinimize: m } = Q,
            L = A ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(F.$n, {
            "data-tooltip-text": (0, R.we)(L),
            onClick: m,
            children: Q.bIsMinimized
              ? (0, e.jsx)(ie.hz4, {})
              : (0, e.jsx)(ie.Xjb, {}),
          });
        }
      },
      46636: (P, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => Q });
        var e = a(7850),
          F = a(90626),
          R = a(24660),
          ie = a(19298),
          z = a(7967),
          q = a(20169),
          ee = a(90405),
          M = a(36707),
          c = a(3166),
          O = a(51239);
        class ae {
          m_rgSections;
          GetSections() {
            return this.m_rgSections;
          }
          static s_singleton;
          static Get() {
            return (
              ae.s_singleton || (ae.s_singleton = new ae()), ae.s_singleton
            );
          }
          constructor() {
            this.m_rgSections = (0, c.Tc)("categories", "application_config");
          }
        }
        function te() {
          const A = ae.Get(),
            [m, L] = (0, F.useState)(A.GetSections());
          return { sections: m };
        }
        function de() {
          const { sections: A } = te(),
            m = F.useRef(null);
          return (
            F.useEffect(() => {
              m.current && m.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(ie.Z, {
              className: O.CategorySectionsCtn,
              navRef: m,
              children: A.map((L, U) =>
                (0, e.jsx)(
                  oe,
                  { section: L, autoFocus: U == 0 },
                  "section" + L.name,
                ),
              ),
            })
          );
        }
        function oe(A) {
          const { section: m, autoFocus: L } = A,
            U = (0, c.Qn)(),
            E = (0, e.jsxs)("div", {
              className: O.CategorySection,
              children: [
                (0, e.jsx)("span", {
                  className: O.CategorySectionName,
                  children: m.name,
                }),
                (0, e.jsx)(z.MS, {
                  className: O.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: q.iU.MAINTAIN_X,
                  navKey: "cat_section" + m.name,
                  children: m.categories.map((l, g) =>
                    (0, e.jsx)(
                      W,
                      { category: l, autoFocus: L && g === 0 },
                      "category" + l.name,
                    ),
                  ),
                }),
              ],
            });
          return U
            ? E
            : (0, e.jsx)(ee.K, { placeholderHeight: "150px", children: E });
        }
        function W(A) {
          const { category: m, autoFocus: L } = A;
          return (0, e.jsx)(ie.Z, {
            focusableIfEmpty: !0,
            autoFocus: L,
            navKey: "cat_panel" + m.name,
            children: (0, e.jsxs)(R.Ii, {
              href: c.TS.STORE_BASE_URL + m.url,
              className: (0, M.A)({
                [O.Category]: !0,
                [O.TopLevelCategory]: m.is_toplevel_genre,
              }),
              children: [
                (0, e.jsx)(X, { ...A }),
                (0, e.jsx)("div", { className: O.CategoryGradient }),
                (0, e.jsx)("span", {
                  className: O.CategoryName,
                  children: (0, e.jsx)("span", { children: m.name }),
                }),
              ],
            }),
          });
        }
        function X(A) {
          let { category: m } = A;
          return (0, e.jsx)("div", {
            className: O.GridOuter,
            children: (0, e.jsx)("div", {
              className: O.Grid,
              children: (0, e.jsx)("img", {
                src: c.TS.STORE_BASE_URL + m.image_url,
              }),
            }),
          });
        }
        const Q = de;
      },
      59970: (P, ge, a) => {
        "use strict";
        a.d(ge, { d: () => vn });
        var e = a(7850),
          F = a(19367),
          R = a(90626),
          ie = a(3685),
          z = a(85528),
          q = a(77495),
          ee = a(18210),
          M = a(3166),
          c = a(75779),
          O = a(80902),
          ae = a(30454);
        async function te() {
          const I = await (0, ae.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!I.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return I.counts;
        }
        const de = 300 * 1e3;
        function oe() {
          return ["DeckCompatCounts"];
        }
        function W() {
          return {
            queryKey: oe(),
            queryFn: () => te(),
            staleTime: de,
            retry: !1,
          };
        }
        function X() {
          const { data: I } = (0, O.I)(W());
          return I;
        }
        function Q(I, j) {
          switch (j) {
            case c.sd:
              return I?.playable;
            case c.V8:
              return I?.unsupported;
            default:
              return I?.verified;
          }
        }
        var A = a(70187),
          m = a(36549),
          L = a(39153),
          U = a(99412),
          E = a(72609),
          l = a(25792),
          g = a(85599),
          f = a(41635),
          y = a(47610),
          Y = a(18860),
          T = a(87805);
        function K(I) {
          const { event: j } = I.context,
            k = Number.parseInt((0, A.j$)(I.args)),
            Z = R.useMemo(() => {
              if (j)
                return j.jsondata.sale_sections?.find(
                  (H) =>
                    H.section_type == "vo_internal" &&
                    (H.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      H.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [j]);
          if (k && Z) {
            const H = Number.parseInt((0, A.j$)(I.args, "depositpackageid")),
              se = Number.parseInt((0, A.j$)(I.args, "psulesspackageid")),
              ce = (0, A.j$)(I.args, "out_of_stock_override"),
              fe = (0, A.j$)(I.args, "delivery_override"),
              we = (0, A.j$)(I.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(re, {
              section: Z,
              reservationPackageID: k,
              depositPackageID: H,
              psuLessPackageID: se,
              strOutOfStockOverride: ce,
              strDeliveryOverride: we || fe,
              bDeliveryOverrideOnlyIfOutOfStock: !!we,
              PreviewActions: I.PreviewActions,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        function re(I) {
          const {
              reservationPackageID: j,
              depositPackageID: k,
              bIsPreview: Z,
              psuLessPackageID: H,
              strOutOfStockOverride: se,
              strDeliveryOverride: ce,
              bDeliveryOverrideOnlyIfOutOfStock: fe,
              section: we,
              PreviewActions: pe,
            } = I,
            { data: je } = (0, y.DR)(j),
            { data: ke } = (0, y.DR)(H),
            Be = (0, R.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + j,
                  reservation_package: j,
                  deposit_package: k,
                  localized_reservation_desc: (0, f.$Y)([], U.bP9, null),
                  localized_out_of_stock_override: (0, f.$Y)(
                    [se || null],
                    U.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, f.$Y)(
                    [ce || null],
                    U.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!fe,
                  psu_less_package: H,
                },
              ],
              [j, k, se, ce, fe, H],
            );
          if (!je || (H && !ke))
            return (0, e.jsx)(g.t, {
              string: (0, ee.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const tt = !E.iA.logged_in || !je.account_restricted_from_purchasing,
            Pe =
              je.reservation_state == Y.G.k_EPurchaseReservationState_Reserved
                ? je
                : void 0;
          return (0, e.jsxs)(l.tH, {
            children: [
              pe &&
                (0, e.jsx)(R.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(pe, {
                    bIsPreview: !!Z,
                    rgReservationDef: Be,
                  }),
                }),
              !!je.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Be[0].unique_id,
                  children: [
                    (0, e.jsx)(T.b, {
                      reservationDef: Be[0],
                      hardwareDetail: je,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Pe,
                    }),
                    tt &&
                      (0, e.jsx)(T.p, {
                        section: we,
                        reservationDef: Be[0],
                        hardwareDetail: je,
                        reservedHardwareDetail: Pe,
                      }),
                    ke &&
                      ke?.allow_purchase_in_country &&
                      (0, e.jsx)(T.b, {
                        reservationDef: Be[0],
                        hardwareDetail: ke,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var me = a(6878),
          Fe = a(21035),
          _t = a(72865),
          Ft = a(38081),
          st = a.n(Ft),
          Re = a(36707),
          He = a(69596),
          Ht = a(10026),
          rt = a.n(Ht),
          zt = a(19298),
          bt = a(11996),
          Ue = a(19047),
          ze = a(36118),
          yt = a(47689),
          wt = a(89926),
          Wt = a(32545),
          it = a.n(Wt);
        function Vt(I) {
          const { appID: j, classOverride: k, styleOverride: Z } = I,
            [H, se] = (0, R.useState)(!1),
            ce = (0, yt.m)("GameHoverFollowButton"),
            { elDialogElement: fe, fnShowLogonDialog: we } = (0, wt.l)(),
            pe = (0, bt.Fh)(j),
            { mutateAsync: je } = (0, Ue.L)(j, !pe, void 0),
            ke = async (Be) => {
              Be.preventDefault(),
                Be.stopPropagation(),
                M.iA.logged_in
                  ? (se(!0), await je(), ce.token.reason || se(!1))
                  : we();
            };
          return (0, e.jsxs)(zt.Z, {
            className: (0, Re.A)(it().FollowButton, k),
            onClick: ke,
            style: Z,
            children: [
              pe ? (0, e.jsx)(ze.pPV, {}) : (0, e.jsx)(ze.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Re.A)(
                  it().FollowButtonText,
                  H && it().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, ee.we)(
                  pe ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              fe,
            ],
          });
        }
        function Kt(I) {
          const { appid: j, color: k, bgcolor: Z } = I,
            H = (0, _t.n9)();
          return (0, e.jsx)(Vt, {
            appID: j,
            classOverride: (0, Re.A)(
              st().FollowGameButtonNotTop,
              rt().BBCodeFollowButton,
            ),
            styleOverride: { color: k, backgroundColor: Z },
          });
        }
        function Qt(I) {
          const j = Number(I.args.appid);
          if (!j) return null;
          const k = (0, He.O)(I.args.color, "black"),
            Z = (0, He.O)(I.args.bgcolor, "white");
          return (0, e.jsx)(Kt, { appid: j, color: k, bgcolor: Z });
        }
        var lt = a(57646);
        function ct(I) {
          const j = Number(I.args.packageid);
          return j
            ? (0, e.jsx)(lt.eF, {
                packageID: j,
                display_style: (0, lt._w)(I.args.display),
              })
            : null;
        }
        function Yt(I) {
          const j = Number(I.args.packageid),
            k = Number(I.args.compareid);
          return !j || !k
            ? null
            : (0, e.jsx)(lt.hJ, { packageID: j, compareID: k });
        }
        function Zt(I) {
          const j = I.args[""]?.trim();
          return j
            ? (0, e.jsx)("div", { className: j, children: I.children })
            : (0, e.jsx)(e.Fragment, { children: I.children });
        }
        var dt = a(18657),
          Lt = a.n(dt),
          gt = a(63026);
        function Jt(I) {
          const { clanAccountID: j, color: k, bgcolor: Z } = I,
            [H, se] = R.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Re.A)(Lt().BBCodeFollowButton, H && Lt().isHovered),
            onMouseEnter: () => se(!0),
            onMouseLeave: () => se(!1),
            children: (0, e.jsx)(gt.Q, {
              nCreatorAccountID: j,
              classOverride: st().FollowGameButtonNotTop,
              styleOverride: { color: k, backgroundColor: Z },
              followType: "group",
            }),
          });
        }
        function xe(I) {
          const { event: j } = I.context,
            k = Number(I.args.groupid) || j?.clanSteamID.GetAccountID();
          if (!k) return null;
          const Z = (0, He.O)(I.args.color, "black"),
            H = (0, He.O)(I.args.bgcolor, "white");
          return (0, e.jsx)(Jt, { clanAccountID: k, color: Z, bgcolor: H });
        }
        var Xt = a(83482),
          At = a(44267),
          Bt = a(9202),
          $ = a.n(Bt),
          Je = a(29522);
        function Gt(I) {
          const { appid: j, color: k, bgcolor: Z } = I,
            H = (0, _t.n9)(),
            se = (0, Je.$5)(j),
            ce = (0, Xt.L3)(H);
          return (0, e.jsx)("div", {
            className: $().WishlistHoverCtn,
            children: (0, e.jsx)(At.E, {
              snr: ce,
              id: se,
              classOverride: (0, Re.A)(
                st().WishlistButtonNotTop,
                $().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: k, backgroundColor: Z },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function $t(I) {
          const j = Number(I.args.appid);
          if (!j) return null;
          const k = (0, He.O)(I.args.color, "black"),
            Z = (0, He.O)(I.args.bgcolor, "white");
          return (0, e.jsx)(Gt, { appid: j, color: k, bgcolor: Z });
        }
        let ut = null;
        function qt() {
          return (
            ut == null &&
              (ut = new Map([
                ["wishlist", { Constructor: $t, autocloses: !1 }],
                ["followgroup", { Constructor: xe, autocloses: !1 }],
                ["classname", { Constructor: Zt, autocloses: !1 }],
                ["price", { Constructor: ct, autocloses: !1 }],
                ["pricesavings", { Constructor: Yt, autocloses: !1 }],
                ["reservationbutton", { Constructor: K, autocloses: !1 }],
              ])),
            ut
          );
        }
        var Ke = a(37656),
          Se = a(29868),
          be = a(24642);
        function mt(I) {
          return I < 10 ? "0" + I : I;
        }
        function Xe(I) {
          const { giveawayid: j } = I,
            k = (0, Ke.w)(j),
            {
              bLoadingGiveawayInfo: Z,
              winner_count: H,
              closed: se,
              seconds_until_drawing: ce,
            } = k;
          return Z
            ? null
            : (0, e.jsxs)("div", {
                className: Se.countdownCtn,
                children: [
                  !!se &&
                    (0, e.jsx)("div", {
                      className: Se.Closed,
                      children:
                        H > 0
                          ? (0, ee.we)("#Giveaway_Closed", (0, be.D)(H))
                          : (0, ee.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !se &&
                    (0, e.jsxs)(R.Fragment, {
                      children: [
                        ce <= 0
                          ? (0, e.jsxs)("div", {
                              className: Se.Throbber,
                              children: [
                                (0, e.jsx)(g.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, ee.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Se.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Se.CountDownTime,
                                  children:
                                    mt(Math.floor(ce / 60)) + ":" + mt(ce % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Se.CountDownText,
                                  children: [
                                    (0, ee.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, ee.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        H > 0 &&
                          (0, e.jsxs)("div", {
                            className: Se.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Se.WinnerCount,
                                children: (0, be.D)(H),
                              }),
                              (0, e.jsx)("div", {
                                className: Se.WinnerText,
                                children: (0, ee.we)(
                                  "#Giveaway_Congratulation",
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
        }
        var ht = a(88245),
          en = a(35702),
          tn = a(16412),
          ve = a(92757),
          nn = a(39256),
          pt = a(4720),
          Te = a(75110),
          Pt = a(57810),
          vt = a(36631),
          an = a(76281),
          $e = a(81416);
        function on(I) {
          const { eventModel: j, nEventBadgeID: k } = I,
            Z = (0, en.fy)(k);
          if (Z?.level > 0) {
            let H = Z.level;
            if (j?.BHasSaleEnabled()) {
              const se = j.GetSaleSectionsByType("badge_progress");
              if (se?.length == 1) {
                const ce = se[0].badge_progress;
                if (ce?.event_badgeid == k && ce?.granted_by_discovery_queue) {
                  const fe = ce.levels[ce.levels.length - 1].level;
                  return (0, e.jsx)(Tt, {
                    eventModel: j,
                    nBadgeLevel: H,
                    nMaxLevel: fe,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, be.D)(H),
            });
          }
          return null;
        }
        function Tt(I) {
          const { eventModel: j, nBadgeLevel: k, nMaxLevel: Z } = I,
            H = R.useMemo(() => {
              const pe = j
                .GetSaleSections()
                .filter((je) => je.section_type == "discoveryqueue");
              return pe?.length > 0 ? pe[0] : null;
            }, [j]),
            { storePageFilter: se, eStoreDiscoveryQueueType: ce } = R.useMemo(
              () => (0, Te.lx)(j, H),
              [j, H],
            ),
            fe = (0, Pt.Uf)(ce, se),
            we = Math.min(k + fe, Z);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, be.D)(we),
          });
        }
        function Qe(I) {
          const { event: j } = I.context,
            k = Number.parseInt((0, A.j$)(I.args, "eventid"));
          return M.iA.logged_in && k
            ? (0, e.jsx)(on, { nEventBadgeID: k, eventModel: j })
            : null;
        }
        function sn(I) {
          const { nDoorIndex: j, children: k } = I,
            Z = (0, L.OM)(j),
            H = (0, L.gP)(),
            [se, ce] = R.useState(!1),
            [fe, we] = R.useState(!1),
            { elDialogElement: pe, fnShowLogonDialog: je } = (0, wt.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(tn.$n, {
                disabled: Z,
                onClick: (ke) => {
                  se ||
                    (M.iA.logged_in
                      ? (ce(!0),
                        H({ iDoorIndex: j })
                          .then((Be) => {
                            Be || we(!0), ce(!1);
                          })
                          .catch(() => {
                            we(!0), ce(!1);
                          }))
                      : je());
                },
                children: fe
                  ? (0, e.jsx)("div", {
                      children: (0, ee.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!se && (0, e.jsx)(g.t, { size: "small" }),
                        !!Z && (0, e.jsx)(ze.Jlk, {}),
                        k,
                      ],
                    }),
              }),
              pe,
            ],
          });
        }
        function rn(I) {
          const j = Number.parseInt((0, A.j$)(I.args)) || 0;
          return j >= 0 && j < 32
            ? (0, e.jsx)(sn, { nDoorIndex: j, children: I.children })
            : null;
        }
        const Ye = (0, ve.y)(an.H);
        function ln(I) {
          const j = Number.parseInt((0, A.j$)(I.args)),
            { event: k, showErrorInfo: Z } = I.context;
          if (j) {
            const H = k?.jsondata?.sale_sections?.findIndex(
              (se) => se.unique_id == j,
            );
            if (H >= 0) {
              const se = k.GetDayIndexFromEventStart();
              return (0, e.jsx)(vt.Cs, {
                location: Z ? vt.HY : vt.bs,
                children: (0, e.jsx)(Ye, {
                  event: k,
                  section: k.jsondata.sale_sections[H],
                  activeTab: new pt.y(null, se),
                  language: I.language,
                  nSaleDayIndex: se,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: Z
                    ? $e.S.EPreviewMode_Enabled
                    : $e.S.EPreviewMode_Disabled,
                }),
              });
            } else if (Z)
              return (0, e.jsxs)("div", {
                className: nn.ErrorDiv,
                children: ["Error could not find sale section ", j],
              });
          }
          return null;
        }
        let qe = null;
        function he() {
          return (
            qe == null &&
              (qe = new Map([
                ...Array.from(qt().entries()),
                [
                  "itemdef",
                  {
                    Constructor: ye,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: Qt, autocloses: !1 }],
                ["deckcompatcount", { Constructor: cn, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: ft, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: mn, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: dn, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: Qe, autocloses: !1 }],
                ["optindoorquest", { Constructor: rn, autocloses: !1 }],
                ["localize", { Constructor: un, autocloses: !1 }],
                ["salesection", { Constructor: ln, autocloses: !1 }],
                ["reservationbutton", { Constructor: hn, autocloses: !1 }],
              ])),
            qe
          );
        }
        function ye(I) {
          const { event: j } = I.context,
            k = Number.parseInt((0, A.j$)(I.args, "appid")),
            Z = Number.parseInt((0, A.j$)(I.args, "itemdefid")),
            H = Number.parseInt((0, A.j$)(I.args, "maxquantity")),
            se = (0, A.j$)(I.args, "calltoaction");
          return !(0, ht.gS)(k, Z, !1) || !j
            ? (0, e.jsx)(g.t, {
                size: "small",
                position: "center",
                string: (0, ee.we)("#Loading"),
              })
            : (0, e.jsx)(Fe.f, {
                language: I.language,
                clanAccountID: j.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: k, nItemDefID: Z, max_quantity: H },
                strCallToAction: se,
              });
        }
        function cn(I) {
          const j = X();
          if (!j) return (0, e.jsx)(g.t, { size: "small" });
          const k = Number.parseInt((0, A.j$)(I.args));
          return (0, e.jsx)("span", { children: (0, be.D)(Number(Q(j, k))) });
        }
        function ft(I) {
          const j = (0, m.jR)(M.iA.accountid, "library");
          if (!j) return (0, e.jsx)(g.t, { size: "small" });
          const k = Number.parseInt((0, A.j$)(I.args));
          let Z = j.verifiedList?.length || 0;
          switch (k) {
            case c.sd:
              Z = j.playableList?.length || 0;
              break;
            case c.V8:
              Z = j.unsupportedList?.length || 0;
              break;
            case c.YX:
              Z = j.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, be.D)(Number(Z)) });
        }
        function dn(I) {
          const j = Number.parseInt((0, A.j$)(I.args)),
            k =
              "hide" in I.args && !!Number.parseInt((0, A.j$)(I.args, "hide"));
          return j >= 0
            ? (0, e.jsx)(gn, { nDoorIndex: j, bHide: k, children: I.children })
            : null;
        }
        function gn(I) {
          const { nDoorIndex: j, bHide: k, children: Z } = I,
            H = (0, L.OM)(j);
          return H == null
            ? null
            : (H && !k) || (!H && k)
              ? (0, e.jsx)(e.Fragment, { children: I.children })
              : null;
        }
        function un(I) {
          return (0, e.jsx)("span", {
            className: me.LocalizeBlock,
            children: (0, ee.oW)(
              I.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function mn(I) {
          let j = (0, A.j$)(I.args);
          return j
            ? (0, e.jsx)(Xe, { giveawayid: j })
            : (0, e.jsx)(R.Fragment, {});
        }
        const We = void 0;
        function hn(I) {
          return (0, e.jsx)(K, { ...I, PreviewActions: We });
        }
        var et = a(71698),
          pn = a(94520);
        function vn(I) {
          const { bSalePage: j } = I,
            [k, Z] = R.useState(!1);
          return (
            (0, et.H)(k, j),
            R.useEffect(() => {
              z.Vw.Init(new ie.D(M.TS.WEBAPI_BASE_URL)), q.O3.Init(), Z(!0);
            }, []),
            R.useEffect(() => {
              const H = (0, ee.l4)();
              H && F.locale(H);
            }, []),
            k
              ? j
                ? (0, e.jsx)(pn.d3, { dictionary: he(), children: I.children })
                : I.children
              : null
          );
        }
      },
      11811: (P, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => Q });
        var e = a(7850),
          F = a(71698),
          R = a(90626),
          ie = a(73259),
          z = a(76559),
          q = a(77495),
          ee = a(14069),
          M = a(64641),
          c = a.n(M),
          O = a(85599),
          ae = a(18210),
          te = a(3166),
          de = a(59970),
          oe = a(85692),
          W = a(41032),
          X = a(51079);
        function Q(L) {
          const { eventModel: U } = L;
          return (0, e.jsx)(de.d, {
            bSalePage: !0,
            children: (0, e.jsx)(A, { ...L, overrideEventModel: U }),
          });
        }
        function A(L) {
          const { promotionName: U, language: E, overrideEventModel: l } = L,
            [g, f] = R.useState(
              l ?? q.O3.GetClanEventFromAnnouncementGID(te.P9.ANNOUNCEMENT_GID),
            );
          R.useEffect(() => {
            if (!l && g?.AnnouncementGID != te.P9.ANNOUNCEMENT_GID) {
              const re = new z.b(te.UF.CLANSTEAMID);
              q.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                re,
                te.P9.ANNOUNCEMENT_GID,
                null,
              ).then(f);
            }
          }, [g, l]);
          const Y = (0, oe.D2)() ?? g,
            T = (0, oe.ty)();
          if (((0, F.s)(1500), !Y))
            return (0, e.jsx)("div", {
              className: c().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(O.t, {
                size: "medium",
                string: (0, ae.we)("#Loading"),
              }),
            });
          const K =
            (Y.visibility_state !== ie.zv.k_EEventStateVisible &&
              Y.visibility_state !== ie.zv.k_EEventStateUnlisted) ||
            T;
          return (0, e.jsx)(m, {
            eventModel: Y,
            children: (0, e.jsx)(X.oJ, {
              children: (0, e.jsx)(X.Ay, {
                curator_clanid: Y?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(ee._, {
                  promotionName: U,
                  language: E,
                  eventModel: Y,
                  bIsPreview: K,
                }),
              }),
            }),
          });
        }
        function m(L) {
          const { eventModel: U, children: E } = L,
            l = U.GetContentHubType() == "adultonly";
          return (0, e.jsx)(W.QA, {
            eAdultOnlyMediaBehavior: l ? "allowed" : "masked",
            children: E,
          });
        }
      },
      32545: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
      50909: (P) => {
        P.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
        };
      },
      71347: (P) => {
        P.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (P) => {
        P.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (P) => {
        P.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      17618: (P) => {
        P.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      10026: (P) => {
        P.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (P) => {
        P.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (P) => {
        P.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      32190: (P) => {
        P.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (P) => {
        P.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (P) => {
        P.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (P) => {
        P.exports = {
          ImageWrapperContainer: "_2or51Nzh1oEwvdNjKQ1XsS",
          ImageWrapper: "_34WcpEIVKr8Z72GaesGoR4",
          VideoBackground: "_3IizOeZqT1lZaoPEmdVxG",
          ImageWrapperFilename: "_3_vYFjDjTuDvhsL10XO9BU",
          ResultNotification: "_1X95b1CVvEsEa5dfoR5Pfv",
          ErrorCode: "_-7Alg3skQ6oFTYIpKTHsI",
          Hilight: "_3lBJMYeg4_hihNl0QTX1Qi",
          ImageButton: "_2MUWDtjaZWaMDdJaQr4o5a",
          Thumb: "_3M02zvAfoMwX5XlzlvFkc3",
          Full: "_1RN-YKVciU9zYHOYX6OV0",
          Delete: "_1X87fLS_CT0g2Vu5-fClUZ",
          FloatingThrobber: "_2EHZ15YQSAK_T5SCxVobtG",
          Localized: "_3FFrtt5Of4jP9unTFjYiHs",
          ClanImageGrid: "_3J5Yc20Wkz7gjSxxWcHst",
          ClanImageGridItem: "_1vXdD6QZTKcjYoRTOAuOeX",
          Selected: "_3JVN2Ta1MlQnuMnqPo0XR8",
          ImgCtn: "_248ADrw9QzPyhcxjqlaykT",
          Name: "TzsVI0_4scOG258SCeyqz",
        };
      },
      9709: (P) => {
        P.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (P) => {
        P.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (P) => {
        P.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (P) => {
        P.exports = {
          ImageDimensionTooSmall: "_1A6oRywbsuzGxawqTexX6G",
          UploadPreviewCtn: "_1x7wvgGW08t0c2auyfWyAs",
          UploadPreviewButtonsCtn: "_2Vsz0Teq375iSLvbdoaCw0",
          UploadPreviewDelete: "_1898rmbQKDsZukkFbEda-H",
          UploadPreviewButton: "wUyDKp6qikfxWISsHWYI5",
          UploadPreviewError: "_2sh7mSiQmyBdLyJPYPva2L",
          UploadPreviewWarning: "-khhIHR9pWYus_nTScWdO",
          UploadPreviewMessage: "_3kt_NxdtRh4OR_iFeApvM9",
          UploadPreview: "_3dSNtZdgIHIa6P9ZODRBJs",
          PreviewImgCtn: "a4db1xuziijkLJ6HQXeEs",
          PreviewImgInfo: "ddYEDOKiU6ZFhNI4sb_eQ",
        };
      },
      25359: (P) => {
        P.exports = {
          EventEditorArtworkCtn: "_3etoSeNgIJIJoQjVvKBkdK",
          ArtworkPreview: "_1fBG8S7L5v1-Ll8UMASqW5",
          EventEditorArtworkBarContainer: "TLT1tvLtG6-1EdFGwToo1",
          EventEditorButton: "_2EbfH5kGhG6VdMYM0aSFsw",
          EventEditorInputPaneTopRow: "_3loSsH7QVVzJW4dbA_k8pH",
          EventCoverImageCtn: "vcULy1uwr1V-xetzQ3t5_",
          DragTarget: "_2qaqHaHt0FsJ5g6E50Rpbn",
          DragOnTopOfMe: "_1-0mEm0at-4Czr10kmQ82K",
          EventEditorArtworkTextCtn: "wbzVx6PSPvY3jxjmybwT7",
          EventEditorDragTargetArea: "_352Z7ynHHExwu7pbLG0mi3",
          EventEditorArtworkTitle: "_1BtkzIs3COLhdqubhPqTJa",
          EventEditorArtworkSubTitle: "_3NsjbDpfSxc8ZHhYE5TuTv",
          EventEditorArtworkResolution: "pScoegXLiCfPTrVdDHgRc",
          ReassignCtn: "_2kzxUHYwRnfLZc2qUJp54m",
          ImagePreviewContainer: "_4M__i4jyU9-VJE6K30Rat",
          NoneSet: "csDC3rD7ooQ8gGXZhh594",
          TitleSafePreview: "_2Gel5eBC4smzhCMPJN4poX",
          TitleSafeCaption: "_2oU3ulhvWy8BrTtr-wLTHL",
          LanguageSelector: "_33sdnBObDSgcIemY_8d188",
          LanguageSelectorSelected: "_35iac6gVYl3NbfLM5oGhAp",
          LanguageSelectorNoData: "_2MrExNFgrVVmzV4_XxWk7m",
          LanguageContainer: "_1GqYxNpFolOmvCXZZ5SqS9",
          LanguageOptions: "_1OF4inXEccSHpEi-94BNyB",
          LanguageListContainer: "_2NKwVWWJzUopyzUpm5K8PU",
          SelectImageContainerTopRow: "_33RDQ6gt9hW0N3baDbAfnl",
          SelectImageContainerBottomRow: "_3Mstp8zLfqhPc0yqJGve2N",
          TextTitle: "_1b_OxtjP85MZc-IlQfnnHR",
          TextSubTitle: "EqzVNygGbzsiBalSQOtWy",
          SelectImageEqualColumns: "Qz0mmjcnBMcs99N6fgVCv",
          SelectImageBlock: "X_wtWeV0nNEF-9Rz0wZRL",
          MainPreviewBlock: "_3kAV8hXf4G70C4tDE8HDjI",
          Tips: "_2jAkKq9D5KKOH2cgMu59yN",
          ExamplesCtn: "WiG3FOkzY58mDmTzVy40z",
          SelectImageExampleImg: "_3Lcquzc_EacniSS2QxdUHx",
          SelectImageLanguagesCtn: "_27huHYrHSwivfUIglfRube",
          SelectImageTitle: "lJEQ6yKHtjwXClD4NVqUY",
          ArtworkSelectorContainer: "_2dxWXru9IFUHuJgzC9_WwQ",
          Title: "_2HiqsrLG8k4zf4raXVygUP",
          SaleHeaderExampleCtn: "_2Nwi2WWTWdc4JkMEiHDFFK",
          SaleHeaderExampleCol: "_2s4zAjRHJabF47kK9uxCY6",
          BroadcastPreview: "_3NxzN3dNq98rjVdkyQ9QIH",
          AssetExampleSpotlightCtn: "_29B1UOzVRMVZSd22IyP43x",
          BackgroundConfigCtn: "_3SVRvFP-sXikNXmksKkDQ7",
          OptionCtn: "_2XnObldRTEs5T4Sswyv5Fo",
          ButtonRow: "_2W9rAanKV4V6A7Exx4sWGF",
          BackgroundColorBtn: "_2YD-avez2pqO4MJHAO5_v0",
          BackgroundColorResetBtn: "baRhk4ouyxcNfo_um5C76",
          UploadSuccess: "inXVzuN-asDe-A5jnsvvV",
          HighlightBox: "_3qTodEPOW76BNBFtgX0AUa",
        };
      },
      79949: (P) => {
        P.exports = {
          MultipleExampleContainer: "_3HrpHSdcqC7wp8s07bOS2l",
          ExampleSectionTitle: "MxxIR01BbdH_tAWmTbjoz",
          DetailPageExample: "_3Mi3a8sT7hZn6-L_TPm3gr",
          DetailExample: "TYQJH_hhcEuSRvl75g6GA",
          DetailExample2: "HQAziOChjZK2M_cKTNA8",
          MainImageCtn: "_1mRJSs13tWFRJ55fG6WrK8",
          ExampleBodyPosition: "_2wNW_eWECTcvaYU7AYXXY2",
          ExampleContentCtn: "_2bAs9Bkh1K8PYVhcLLerfA",
          TextTitle: "_3fulSVNkgCeQyqxT0FjHOp",
          TextSubTitle: "_3ThX6fPp7MJY_TrTP_RCRY",
          TextBody: "_2nG13rbAd05OnozWt7nQWL",
          SpotlightExample: "_3KsBV1q-e0ZnxgK9GdUiON",
          ExampleSpacer: "oAEZygc5smKi6PjD-981",
          BroadcastPreviewContainer: "_3aLcrZxS4I4KVtUF0BdHds",
          SaleHeaderPreviewContainer: "GORXZE3lrdjE-QiVxXceW",
        };
      },
      20860: (P) => {
        P.exports = {
          Ctn: "_1fmjHmozlsZ8ZXlDnql4Pe",
          Header: "_1gKvHUxWanEHu-0GbjB4KV",
          Body: "_3tPVeOGZDIVgS7KGdpTsXB",
          Summary: "_3hyLqEQDWP9Sck6GY2mO9_",
          Controls: "_2GkioR72RQBbHku00uxt47",
          ControlButton: "_3ObP_u1dEak3ra2LLM7GVb",
          ExponentInput: "_3a0Hx5NOSuPBHi9gp7kT2I",
          Chart: "_2F7VrAMPKV6N4hhdOm4v6B",
          Column: "FhDnO3NBSjZkWQv3No3N3",
          ColumnTitle: "_2SG3j7hLVHdpo3WooeBJiv",
          Row: "_2-m8vjFf_-iwN09EHqQm7c",
          Highlighted: "kWJDRycQPH53McjlfFjQ-",
        };
      },
      15496: (P) => {
        P.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          ReadMoreLink: "_2mvgc6dpEDHRJlTWhGDz7h",
          MajorEventContainer: "dVJB2r43CGIAgr-Xtt4P3",
          MajorEventImageContainer: "_1PkTBeZJVs3WI8US0zffEx",
          MajorEventImage: "_25fL1JQcG1kh_9L5danMxc",
          BottomShadow: "_1ueE9cjv0hzERo311Gr6qL",
          MajoreEventImageContentContainer: "_3mREW5LJ_7jyeol7BtXcym",
          MajorEventImageTemplate: "lQR9_4nAXfydIY7zwOzSF",
          MajorEventBackground: "_388IuJImOHcpIL9kvqJdet",
          MajorEventImageBackgroundBlur: "_3sVs6YBElnuTON_cY_6ne5",
          MajorEventHeader: "_1HL2nt3zhHJo3RkMzmD-Gb",
          PartnerEventLargeImage_Title: "bYwbk-ycz_n2JnQgyrgDx",
          EventType: "_3zVyXPaFJl95Q5qnxtDpuB",
          GameIconAndName: "IltgR1LrH0neRnKq0TLxy",
          GameIcon: "_3Dkj3XaiQV2I1d2m-RRA_L",
          MajorEventSpotlightBackground: "_1ahePoGx6gPXhapzZw2L21",
          MajorEventContent: "_2nr7NuawYs9NhC8OUkY0fK",
          MajorEventTextCtn: "Ojdg2vBD3O1oroxYVU2zB",
          MajorEventTitle: "nEBZT02OOnxIbyIl9Dk44",
          MajorEventSummary: "HPngOFPPykmeXFSxcC1Zv",
          MajorEvent_Ctn: "_2_kU7nUB6wwDu-LsbQZmNc",
          AppDetailsSpotlightContainer: "_1zDJ1bfFg-UkuAluUAoGKj",
        };
      },
      9202: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
      64734: (P) => {
        P.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      51239: (P) => {
        P.exports = {
          "duration-app-launch": "800ms",
          CategorySectionsCtn: "YuXdszLjIFoat_EbTkm8U",
          CategorySection: "_2MUQ8QBrMaSxsdhqhiN6tG",
          CategorySectionName: "_2VnsyILlZj23L2UgP3ZsMm",
          CategoriesCtn: "_3yuPyNw3DpZ_ICakOPcu4u",
          Category: "_1uwcZwdwT2vRgumGDlZbtk",
          Grid: "_3anY0OeVUh2enLVFNx50N1",
          CategoryGradient: "_27LrTrejiaFAMHuA0df3qP",
          CategoryName: "_3VNsED3Ez-vqDraw_8QWsp",
          TopLevelCategory: "_2ZYjRLgkQLHW5_cstUffIp",
        };
      },
      44894: (P, ge, a) => {
        "use strict";
        a.d(ge, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

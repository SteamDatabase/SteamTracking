/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [83276],
    {
      71698: (R, ce, a) => {
        "use strict";
        a.d(ce, { H: () => ie, s: () => se });
        var e = a(90626),
          F = a(41623);
        let G = 0;
        function ie(K, te) {
          (0, e.useEffect)(() => {
            if (!(K || te))
              return (
                G++,
                () => {
                  --G == 0 && (0, F.s)();
                }
              );
          }, [K, te]);
        }
        function se(K) {
          const [te, ae] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const W = window.setTimeout(() => ae(!0), K);
            return () => window.clearTimeout(W);
          }, [K]),
            ie(te);
        }
      },
      85528: (R, ce, a) => {
        "use strict";
        a.d(ce, { Vw: () => V });
        var e = a(14947),
          F = a(99412),
          G = a(72604),
          ie = a(35038),
          se = a(67529),
          K = a(3166);
        class te {
          m_nLastUpdated = 0;
          m_mapLanguages = e.sH.map();
          m_appid;
          m_fetching = null;
          constructor(c) {
            this.m_appid = c;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(c) {
            return this.m_mapLanguages.has(c)
              ? this.m_mapLanguages.get(c)
              : null;
          }
          Localize(c, g) {
            let C = K.TS.LANGUAGE,
              y = this.GetTokenList(C),
              J = C != "english" ? this.GetTokenList("english") : null;
            return ae(c, y, J, this.m_appid, g);
          }
          SubstituteParams(c, g) {
            let C = K.TS.LANGUAGE,
              y = this.GetTokenList(C),
              J = C != "english" ? this.GetTokenList("english") : null;
            return W(c, y, J, this.m_appid, g);
          }
        }
        function ae(j, c, g, C, y) {
          if (!j.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                j,
                "appid",
                C,
                "tokens",
                c,
              ),
              ""
            );
          let J = j;
          j = j.toLowerCase();
          let T = "";
          if (
            (c && c.has(j) && (T = c.get(j)),
            !T && g && g.has(j) && (T = g.get(j)),
            T)
          )
            T = W(T, c, g, C, y);
          else if (
            ((c || g) &&
              console.log(
                "No loc found for appid",
                C,
                J,
                "Tokens:",
                c,
                "Fallback:",
                g,
              ),
            c && K.TS.EUNIVERSE != F.wLO)
          )
            return j;
          return T;
        }
        function W(j, c, g, C, y) {
          let J = /{[A-za-z0-9_%#:]+}/g,
            T = j.match(J);
          if (T)
            for (let ee of T) {
              let l = ee.slice(1, -1),
                fe = m(l, y),
                Ve = ae(fe, c, g, C, y);
              if (!Ve) return "";
              j = j.replace(ee, Ve);
            }
          return (j = m(j, y)), j;
        }
        function m(j, c) {
          let g = /%[A-Za-z0-9_:]+%/g,
            C = j.match(g);
          if (C)
            for (let y of C) {
              let J = y.slice(1, -1).toLowerCase(),
                T = c.get(J);
              T == null
                ? console.log("No rich presence found for", J)
                : (j = j.replace(y, T));
            }
          return j;
        }
        var oe = a(72849),
          Y = a(71742),
          le = a(8323),
          B = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          z = (j, c, g, C) => {
            for (
              var y = C > 1 ? void 0 : C ? N(c, g) : c, J = j.length - 1, T;
              J >= 0;
              J--
            )
              (T = j[J]) && (y = (C ? T(c, g, y) : T(y)) || y);
            return C && y && B(c, g, y), y;
          };
        function b(j) {
          return useObserver(() => V.GetAppInfo(j));
        }
        function A(j) {
          return useObserver(() => j.map((c) => V.GetAppInfo(c)));
        }
        const re = 3600 * 24 * 7 * 2;
        class k {
          m_CMInterface;
          m_mapAppInfo = e.sH.map();
          m_mapRichPresenceLoc = e.sH.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new le.lu();
          constructor() {
            (0, e.Gn)(this);
          }
          Init(c) {
            this.m_CMInterface = c;
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
          RegisterCallbackOnLoad(c) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, Y.wT)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                c();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(c);
          }
          IsLoadingAppID(c) {
            return this.m_setPendingAppInfo.has(c);
          }
          GetAppInfo(c) {
            if (
              ((0, Y.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(c))
            ) {
              let g = new se.by(c);
              this.m_mapAppInfo.set(c, g), this.QueueAppInfoRequest(c);
            }
            return this.m_mapAppInfo.get(c);
          }
          QueueAppInfoRequest(c) {
            return c
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (g) => (this.m_PendingAppInfoResolve = g),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(c),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const c = this.m_PendingAppInfoResolve,
              g = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(g),
              c?.();
          }
          async LoadAppInfoBatch(c) {
            this.m_cAppInfoRequestsInFlight++;
            let g = await this.LoadAppInfoBatchFromLocalCache(c);
            if (g.length) {
              console.log("Loading batch of App Info from Steam: ", g),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let C = ie.w.Init(oe._z);
              C.Body().set_language((0, F.sfN)(K.TS.LANGUAGE));
              const y = 50;
              for (; g.length > 0; ) {
                const J = Math.min(y, g.length),
                  T = g.slice(0, J);
                (g = g.slice(J)), C.Body().set_appids(T);
                const ee = await oe.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  C,
                );
                ee.GetEResult() == G.R
                  ? this.OnGetAppsResponse(ee)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${ee.GetEResult()}, AppIDs:`,
                      T,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(c) {
            let g = [];
            for (let C of c.Body().apps()) {
              let y = this.m_mapAppInfo.get(C.appid());
              (0, Y.wT)(
                y,
                `Got AppInfo response for unrequested AppID: ${C.appid()}`,
              ),
                y &&
                  ((y = new se.by(C.appid())),
                  y.DeserializeFromMessage(C),
                  this.m_mapAppInfo.set(C.appid(), y),
                  g.push(y));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(c) {
            for (let g of c) {
              const C = new se.by(g.appid());
              C.DeserializeFromAppOverview(g),
                C.is_initialized && this.m_mapAppInfo.set(g.appid(), C);
            }
          }
          async EnsureAppInfoForAppIDs(c) {
            let g = !1;
            return (
              c.forEach((C) => {
                let y = this.m_mapAppInfo.get(C);
                if (y) {
                  y.is_valid || (g = !0);
                  return;
                }
                (y = new se.by(C)),
                  this.m_mapAppInfo.set(C, y),
                  this.QueueAppInfoRequest(C),
                  (g = !0);
              }),
              g && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(c) {
            this.m_CacheStorage = c;
          }
          GetCacheKeyForAppID(c) {
            return "APPINFO_" + c;
          }
          async LoadAppInfoBatchFromLocalCache(c) {
            if (!this.m_CacheStorage) return c;
            console.log("Loading batch of App Info from Local Cache: ", c);
            const g = new Date(new Date().getTime() - re * 1e3),
              C = async (ee) => {
                const l = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(ee),
                );
                if (!l) return ee;
                let fe = this.m_mapAppInfo.get(ee);
                return (
                  (0, Y.wT)(
                    fe,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  fe
                    ? ((fe = new se.by(ee)),
                      fe.DeserializeFromCacheObject(l),
                      fe.is_initialized
                        ? (this.m_mapAppInfo.set(ee, fe),
                          fe.time_updated_from_server < g ? ee : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            ee,
                            l,
                          ),
                          ee))
                    : ee
                );
              };
            let y = c.map((ee) => C(ee));
            return (await Promise.all(y)).filter((ee) => ee !== null);
          }
          async SaveAppInfoBatchToLocalCache(c) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                c.map((g) => g.appid),
              );
              for (const g of c) {
                const C = g.SerializeToCacheObject();
                C &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    C,
                  );
              }
            }
          }
          Localize(c, g, C) {
            const y = this.GetRichPresenceLoc(c);
            return y
              ? y.Localize(g, C)
              : K.TS.EUNIVERSE != F.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${c} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(c) {
            if (this.m_mapRichPresenceLoc.has(c.toString())) {
              let C = this.m_mapRichPresenceLoc.get(c.toString());
              return (
                C.m_nLastUpdated + 1e3 * 60 * se.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(C),
                C
              );
            }
            let g = new te(c);
            return (
              this.m_mapRichPresenceLoc.set(c.toString(), g),
              this.QueueRichPresenceLocRequest(g),
              g
            );
          }
          GetRichPresenceLocAsync(c) {
            let g = this.GetRichPresenceLoc(c);
            return g.m_nLastUpdated ? Promise.resolve(g) : g.m_fetching;
          }
          OnRichPresenceLocUpdate(c, g) {
            c.m_nLastUpdated = Date.now();
            for (let C of g) {
              let y = C.language(),
                J = c.m_mapLanguages.get(y);
              J
                ? J.clear()
                : (c.m_mapLanguages.set(y, new Map()),
                  (J = c.m_mapLanguages.get(y)));
              for (let T of C.tokens())
                J?.set(T.name().toLowerCase(), T.value());
            }
          }
          QueueRichPresenceLocRequest(c) {
            return (
              c.m_fetching ||
                ((c.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = ie.w.Init(oe.zQ);
                    return (
                      g.Body().set_appid(c.GetAppID()),
                      g.Body().set_language(K.TS.LANGUAGE),
                      oe.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (c.m_fetching = null),
                      g.GetEResult() != G.R
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            c,
                            g.Body().token_lists(),
                          ),
                          Promise.resolve(c))
                    ),
                  )),
                c.m_fetching.catch(() => {
                  c.m_fetching = null;
                })),
              c.m_fetching
            );
          }
        }
        z([e.XI], k.prototype, "OnGetAppsResponse", 1),
          z([e.XI], k.prototype, "OnRichPresenceLocUpdate", 1);
        const V = new k();
      },
      50109: (R, ce, a) => {
        "use strict";
        a.d(ce, { E: () => le, O: () => Y });
        var e = a(14947),
          F = a(65946),
          G = a(99412),
          ie = a(41635),
          se = a(27066),
          K = a(3166),
          te = a(38585),
          ae = Object.defineProperty,
          W = Object.getOwnPropertyDescriptor,
          m = (B, N, z, b) => {
            for (
              var A = b > 1 ? void 0 : b ? W(N, z) : N, re = B.length - 1, k;
              re >= 0;
              re--
            )
              (k = B[re]) && (A = (b ? k(N, z, A) : k(A)) || A);
            return b && A && ae(N, z, A), A;
          };
        const oe = class Dt {
          m_eCurLang = (0, G.sfN)(K.TS.LANGUAGE);
          m_rgHasData = (0, ie.$Y)([], G.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new te.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(N) {
            return this.m_eCurLang != N
              ? ((this.m_eCurLang = N), this.GetCallback().Dispatch(N), !0)
              : !1;
          }
          SetHasLanguage(N) {
            N.forEach((z, b) => {
              this.m_rgHasData[b] != z && (this.m_rgHasData[b] = z);
            });
          }
          BHasLanguageData(N) {
            return this.m_rgHasData[N];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(N) {
            N != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = N);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              Dt.s_globalSingletonStore ||
                (Dt.s_globalSingletonStore = new Dt()),
              Dt.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        m([e.sH], oe.prototype, "m_eCurLang", 2),
          m([e.sH], oe.prototype, "m_rgHasData", 2),
          m([e.sH], oe.prototype, "m_bHasLocalizationContext", 2),
          m([se.o], oe.prototype, "GetCurEditLanguage", 1),
          m([se.o], oe.prototype, "SetCurEditLanguage", 1),
          m([e.XI.bound], oe.prototype, "SetHasLanguage", 1),
          m([se.o], oe.prototype, "BHasLanguageData", 1);
        let Y = oe;
        function le() {
          return (0, F.q3)(() => Y.Get().GetCurEditLanguage());
        }
      },
      37656: (R, ce, a) => {
        "use strict";
        a.d(ce, { w: () => V });
        var e = a(41735),
          F = a.n(e),
          G = a(14947),
          ie = a(65946),
          se = a(90626),
          K = a(27066),
          te = a(8323),
          ae = a(30096),
          W = a(3166),
          m = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          Y = (j, c, g, C) => {
            for (
              var y = C > 1 ? void 0 : C ? oe(c, g) : c, J = j.length - 1, T;
              J >= 0;
              J--
            )
              (T = j[J]) && (y = (C ? T(c, g, y) : T(y)) || y);
            return C && y && m(c, g, y), y;
          };
        const le = class Fn {
          constructor() {
            (0, G.Gn)(this);
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
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const c = new Fn();
            return (
              (c.giveaway_id = this.giveaway_id),
              (c.seconds_until_drawing = this.seconds_until_drawing),
              (c.rtime_start = this.rtime_start),
              (c.rtime_end = this.rtime_end),
              (c.closed = this.closed),
              (c.winner_count = this.winner_count),
              c
            );
          }
        };
        Y([G.sH], le.prototype, "giveaway_id", 2),
          Y([G.sH], le.prototype, "seconds_until_drawing", 2),
          Y([G.sH], le.prototype, "rtime_start", 2),
          Y([G.sH], le.prototype, "rtime_end", 2),
          Y([G.sH], le.prototype, "closed", 2),
          Y([G.sH], le.prototype, "winner_count", 2);
        let B = le;
        const N = class st {
          constructor() {
            (0, G.Gn)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(c, g) {
            return c + "_" + g;
          }
          GetInfoByInstance(c, g) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(c, g),
            );
          }
          GetNextDrawChangeCallback(c) {
            return (
              this.m_mapNextDrawChangeCallback.has(c) ||
                this.m_mapNextDrawChangeCallback.set(c, new te.lu()),
              this.m_mapNextDrawChangeCallback.get(c)
            );
          }
          CopyToGiveaway(c, g) {
            g.closed != c.closed && (g.closed = c.closed),
              g.giveaway_id != c.giveaway_id && (g.giveaway_id = c.giveaway_id),
              g.rtime_start != c.rtime_start && (g.rtime_start = c.rtime_start),
              g.rtime_end != c.rtime_end && (g.rtime_end = c.rtime_end),
              g.winner_count != c.winner_count &&
                (g.winner_count = c.winner_count),
              g.seconds_until_drawing != c.seconds_until_drawing &&
                (g.seconds_until_drawing = c.seconds_until_drawing);
          }
          async ReloadGiveaway(c, g) {
            if (!c) return null;
            let C = W.TS.STORE_BASE_URL + "prizes/nextdraw/" + c,
              y = null,
              J = { origin: self.origin };
            return (
              (y = await F().get(C, { params: J })),
              (0, G.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(c) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(c, new B()),
                  this.CopyToGiveaway(
                    y.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(c),
                  ),
                  g !== void 0)
                ) {
                  const T = this.GetKey(c, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(T) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      T,
                      new B(),
                    ),
                    this.CopyToGiveaway(
                      y.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(T),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(c).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(c),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(c)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              st.s_Singleton ||
                ((st.s_Singleton = new st()), st.s_Singleton.Init()),
              st.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let c = (0, W.Tc)("giveawaynextdraw", "application_config");
              if (c && c.giveaway_id) {
                let g = new B();
                this.CopyToGiveaway(c, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(c.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        Y([G.sH], N.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          Y([G.XI], N.prototype, "CopyToGiveaway", 1);
        let z = N;
        const b = class En {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = En.s_GlobalInstance),
              (En.s_GlobalInstance += 1);
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
          SetupRefreshDataInterval(c, g) {
            if ((this.ClearRefreshInterval(), !c.closed)) {
              let C =
                c.seconds_until_drawing <= 0 && c.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, C);
            }
          }
          SetupCountDown(c, g) {
            c > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        Y([K.o], b.prototype, "ClearRefreshInterval", 1),
          Y([K.o], b.prototype, "ClearCountDown", 1),
          Y([K.o], b.prototype, "SetupRefreshDataInterval", 1),
          Y([K.o], b.prototype, "SetupCountDown", 1);
        let A = b;
        function re(j, c) {
          const g = z.Get().GetInfoByInstance(j, c.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && c.ClearCountDown();
        }
        function k(j, c) {
          const g = z.Get().GetInfoByInstance(j, c.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (c.ClearCountDown(),
            z
              .Get()
              .ReloadGiveaway(j, c.m_myInstanceNumber)
              .then((C) => {
                c.SetupCountDown(C.seconds_until_drawing, () => re(j, c));
              }));
        }
        function V(j) {
          const [c] = (0, se.useState)(new A()),
            g = (0, ae.CH)();
          (0, se.useEffect)(
            () => (
              z
                .Get()
                .ReloadGiveaway(j, c.m_myInstanceNumber)
                .then((ee) => {
                  c.SetupRefreshDataInterval(ee, () => k(j, c)),
                    c.SetupCountDown(ee.seconds_until_drawing, () => re(j, c)),
                    g();
                }),
              () => {
                c.ClearRefreshInterval(), c.ClearCountDown();
              }
            ),
            [c, j, g],
          );
          const C = z.Get().GetInfoByInstance(j, c.m_myInstanceNumber),
            [y, J, T] = (0, ie.q3)(() => [
              C?.winner_count,
              C?.closed,
              C?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !C || C.giveaway_id == null || !C.BStarted() || y === void 0,
            winner_count: y,
            closed: J,
            seconds_until_drawing: T,
          };
        }
      },
      21042: (R, ce, a) => {
        "use strict";
        a.d(ce, { Sm: () => te, U: () => se, r3: () => W });
        var e = a(99412),
          F = a(72609),
          G = a(73259),
          ie = a(76559);
        function se(m, oe, Y, le) {
          const B = new G.lh();
          return (
            (B.type = oe),
            (B.clanSteamID = new ie.b(m, F.TS.EUNIVERSE, e.P3F, 0)),
            (B.GID = "fakeevent_" + K++),
            (B.visibility_state = G.zv.k_EEventStateUnlisted),
            (B.visibilityStartTime = le - 1),
            (B.jsondata.bSaleEnabled = !0),
            (B.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (B.jsondata.sale_vanity_id = Y),
            (B.jsondata.sale_header_offset = 0),
            (B.jsondata.sale_header_disable_top_margin = !1),
            B
          );
        }
        let K = 1234;
        function te(m, oe) {
          return {
            unique_id: K++,
            capsules: [],
            events: [],
            links: [],
            section_type: m,
            localized_label: [],
            default_label: oe,
          };
        }
        const ae = "socialcontent_";
        function W() {
          return {
            platforms: [
              { label: G.Zf.Steam, checked: !0 },
              { label: G.Zf.Facebook, checked: !0 },
              { label: G.Zf.Twitter, checked: !0 },
              { label: G.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: ae + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: G.jR.SummaryLargeImage,
                localized_option_fields: {
                  localized_header: [],
                  title: [],
                  description: [],
                  image: [],
                },
              },
            ],
          };
        }
      },
      55436: (R, ce, a) => {
        "use strict";
        a.d(ce, { r: () => le, z: () => oe });
        var e = a(7850),
          F = a(90626),
          G = a(16412),
          ie = a(25792),
          se = a(96538),
          K = a(18210),
          te = a(85599),
          ae = a(17618),
          W = a.n(ae),
          m = a(53424);
        const oe = (B) => {
            const { clanSteamID: N, fnImageSelectCallBack: z } = B,
              [b, A] = (0, F.useState)(""),
              re = (0, m.mr)(B.clanSteamID.GetAccountID()),
              k = () => B.closeModal && B.closeModal(),
              V = m.pU.GetFilteredClanImages(N, b),
              j = (c) => {
                z(c), k();
              };
            return (0, e.jsx)(ie.tH, {
              children: (0, e.jsx)(se.x_, {
                onEscKeypress: k,
                children: (0, e.jsxs)(G.UC, {
                  children: [
                    (0, e.jsx)(G.Y9, {
                      children: (0, K.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(G.nB, {
                      children: (0, e.jsxs)(G.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, K.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(G.pd, {
                            placeholder: (0, K.we)("#ClanImageChooser_Search"),
                            value: b,
                            onChange: (c) => A(c.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: ae.ImagesOuterContainer,
                            children: re
                              ? (0, e.jsx)(te.t, {
                                  size: "medium",
                                  string: (0, K.we)("#Loading"),
                                })
                              : V.length > 0
                                ? V.map((c) =>
                                    (0, e.jsx)(
                                      Y,
                                      {
                                        clanImage: c,
                                        searchStringHilight: b,
                                        fnImageClick: j,
                                      },
                                      "ci" + c.image_hash,
                                    ),
                                  )
                                : b.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, K.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, K.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(G.wi, {
                      children: (0, e.jsx)(G.$n, {
                        onClick: k,
                        children: (0, K.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          Y = (B) => {
            const { clanImage: N, searchStringHilight: z, fnImageClick: b } = B;
            let A = N.file_name ? N.file_name : "",
              re = le(z, A, String(N.imageid), ae.Hilight);
            return (0, e.jsxs)("div", {
              className: ae.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: ae.Image,
                  style: { backgroundImage: `url( '${N.thumb_url}' )` },
                  onDoubleClick: () => b(N),
                }),
                (0, e.jsx)("div", {
                  className: ae.ImageFilename,
                  title: A,
                  children: re,
                }),
              ],
            });
          };
        function le(B, N, z, b) {
          let A = [];
          if (B.length > 0) {
            let re = N.toLocaleLowerCase();
            for (let k = 0; k < N.length; ) {
              let V = re.indexOf(B, k);
              if (V < 0) {
                A.push(
                  (0, e.jsx)(
                    "span",
                    { children: N.substring(k) },
                    z + "_" + String(k),
                  ),
                );
                break;
              } else
                k < V &&
                  A.push(
                    (0, e.jsx)(
                      "span",
                      { children: N.substring(k, V) },
                      z + "_" + String(k),
                    ),
                  ),
                  A.push(
                    (0, e.jsx)(
                      "span",
                      { className: b, children: N.substr(V, B.length) },
                      z + "_" + String(k),
                    ),
                  ),
                  (k = V + B.length);
            }
          } else A.push((0, e.jsx)("span", { children: N }, z + "_null"));
          return A;
        }
      },
      24806: (R, ce, a) => {
        "use strict";
        a.d(ce, { Ng: () => b });
        var e = a(7850),
          F = a(75844),
          G = a(90626),
          ie = a(99412),
          se = a(32093),
          K = a(50109),
          te = a(95695),
          ae = a.n(te),
          W = a(36707),
          m = a(18210),
          oe = a(92264),
          Y = a(30096),
          le = a(71421),
          B = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          z = (k, V, j, c) => {
            for (
              var g = c > 1 ? void 0 : c ? N(V, j) : V, C = k.length - 1, y;
              C >= 0;
              C--
            )
              (y = k[C]) && (g = (c ? y(V, j, g) : y(g)) || g);
            return c && g && B(V, j, g), g;
          };
        let b = class extends G.Component {
          GenerateLanguageOptions() {
            let k = [];
            const {
              fnFilterLanguage: V,
              fnLangHasData: j,
              fnLastUpdateRTime: c,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              k.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: ie.xPp,
                    children: (0, m.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let C = new Array();
            const y = this.props.realms || [se.TU.k_ESteamRealmGlobal];
            for (const T of m.A0.GetLanguageListForRealms(y)) {
              if (V && !V(T)) continue;
              const ee = (0, ie.LgB)(T),
                l = (0, m.we)("#Language_" + ee),
                fe = !!(g && g(T));
              C.push({ eLang: T, sLocName: l, bSupported: fe });
            }
            C.sort((T, ee) =>
              T.bSupported != ee.bSupported
                ? T.bSupported
                  ? -1
                  : 1
                : T.sLocName.localeCompare(ee.sLocName),
            );
            let J = !1;
            for (const T of C) {
              T.bSupported != J &&
                (k.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: ae().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, m.we)(
                        T.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    T.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (J = T.bSupported));
              const ee = j && j(T.eLang),
                l = c && c(T.eLang);
              let fe = T.sLocName;
              l &&
                l !== 0 &&
                ((fe += " "),
                (fe += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(l) +
                    " @ " +
                    (0, oe.KC)(l, { bForce24HourClock: !1 }),
                ))),
                k.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: T.eLang,
                      className: (0, W.A)(
                        { [ae().LanguageWithContent]: ee },
                        T.bSupported
                          ? ae().SupportedLanguage
                          : ae().UnsupportedLanguage,
                      ),
                      children: fe,
                    },
                    "langpicker" + T.eLang + (ee ? "_hasdata" : ""),
                  ),
                );
            }
            return k;
          }
          OnLanguageChange(k) {
            const { fnOnLanguageChanged: V, selectedLang: j } = this.props;
            let c = Number.parseInt(k.currentTarget.value);
            c != j && V && V(c);
          }
          render() {
            const { selectedLang: k, bDisabled: V, strTooltip: j } = this.props;
            let c = this.GenerateLanguageOptions();
            return (0, e.jsx)(le.he, {
              toolTipContent: j,
              children: (0, e.jsx)("select", {
                value: k,
                onChange: this.OnLanguageChange,
                disabled: V,
                children: c,
              }),
            });
          }
        };
        z([Y.oI], b.prototype, "OnLanguageChange", 1), (b = z([F.PA], b));
        function A(k) {
          const [V, j] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(b, {
            selectedLang: j,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !V,
            strTooltip: V ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function re(k) {
          const { fnLangHasData: V } = k;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const j = useObserver(() => {
            const c = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              c[g] = !!(V && V(g));
            return c;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(j), [j]),
            jsx(Fragment, {})
          );
        }
      },
      14069: (R, ce, a) => {
        "use strict";
        a.d(ce, { _: () => ho });
        var e = a(7850),
          F = a(99412),
          G = a(19298),
          ie = a(20169),
          se = a(28604),
          K = a(36631),
          te = a(64387);
        function ae(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: te.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var W = a(65946),
          m = a(90626),
          oe = a(73259),
          Y = a(25792),
          le = a(52393),
          B = a.n(le),
          N = a(95695),
          z = a.n(N),
          b = a(36707),
          A = a(3166),
          re = a(82054),
          k = a(68266);
        function V(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(Y.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, b.A)(
                    B().SaleBackground,
                    B()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    B().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !A.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function j(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = m.useRef(null),
            d = (0, k.m0)(t, "sale_header", n),
            [h] = (0, W.q3)(() => [t.jsondata.sale_sub_menu]);
          m.useEffect(() => {
            if (!d) return;
            const I = new Image();
            (I.onload = () => {
              const x = (100 * I.width) / 950 + "%";
              i.current && i.current.style.setProperty("--background-scale", x);
            }),
              (I.src = d);
          }, [d]);
          const u = t.jsondata.sale_sections?.some(
              (I) => I.section_type === "contenthubmaincarousel",
            ),
            p =
              t.jsondata.item_source_type === oe.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                u),
            v = d ? `url(${d})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              h
                ? (0, e.jsx)(re.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: h,
                    styleVariation: re.g.k_SubMenu,
                  })
                : (0, e.jsx)(ae, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, b.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: p,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, b.A)(
                    B()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    B().SaleBackground,
                    "SaleBackground",
                  ),
                  style: {
                    display: "flex",
                    position: "relative",
                    flexDirection: "column",
                    backgroundColor: t.jsondata.sale_background_color,
                  },
                  ref: i,
                  children: [
                    d && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, b.A)(
                            z().SalePageBackground,
                            z().BackgroundImage,
                            z().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, b.A)(
                            z().SalePageBackground,
                            z().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: v,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(V, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var c = a(26589),
          g = a(39905),
          C = a(50909),
          y = a.n(C);
        function J(o) {
          const { eventModel: t } = o,
            { data: n } = (0, c.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, A.yK)() == "community"
          )
            return;
          const s = t.GetAllTags(),
            r = [];
          if (
            (s.includes("hide_store") &&
              r.push(
                g.Z.Localize("#Sale_SaleEventIsHidden_Reason_ProductHide"),
              ),
            s.includes("mod_hide_store") &&
              n.support_user &&
              r.push(g.Z.Localize("#Sale_SaleEventIsHidden_Reason_Mod")),
            !t.BIsVisibleEvent() &&
              s.includes("contenthub") &&
              r.push(
                g.Z.Localize("#Sale_SaleEventIsHidden_ContentHub_Preview"),
              ),
            !(t.BIsVisibleEvent() && r.length == 0))
          )
            return (0, e.jsx)("div", {
              className: y().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: y().WarningText,
                      children: g.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: y().WarningText,
                      children: [
                        g.Z.LocalizePlural(
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
        var T = a(76789),
          ee = a.n(T),
          l = a(18210);
        function fe(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, W.q3)(() => [
              t.jsondata.sale_logo_url,
              l.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: ee().SalePageLogoCtn,
                  href: A.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(Ve, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, b.A)(ee().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(Ve, { ...o }),
                })
            : null;
        }
        function Ve(o) {
          const { eventModel: t, language: n } = o,
            s = (0, k.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var Et = a(72865),
          Nt = a(71347),
          Qe = a.n(Nt),
          Ze = a(53107);
        function Fe(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, F.sfN)(A.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, b.A)(
                  Qe().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(rt, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, b.A)(
                  Qe().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
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
            s = (0, Et.aL)(t.url);
          return (0, e.jsx)(Ze.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: Qe().PresenterLabel,
            children: l.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var Ut = a(60480),
          St = a(92757),
          Me = a(18994),
          $e = a(56412),
          qe = a(86515),
          kt = a(39153),
          jt = a(61478);
        function Ft(o) {
          const { event: t, broadcastEmbedContext: n } = o,
            s = !!t?.jsondata?.broadcast_display_wide_player,
            r = !!t?.jsondata?.broadcast_dispaly_wide_player_allow_chat;
          return (0, e.jsx)(e.Fragment, {
            children:
              !!(
                t.BEventCanShowBroadcastWidget() &&
                t.BSaleShowBroadcastAtTopOfPage()
              ) &&
              (0, e.jsx)(jt.B, {
                event: t,
                broadcastEmbedContext: n,
                bWideBroadcastDisplay: s,
                bWideBroadcastPermitChat: r,
              }),
          });
        }
        var it = a(85671),
          zt = a(24660),
          Ht = a(71157),
          lt = a(15181),
          ct = a(24805),
          Wt = a(10142),
          dt = a(84676),
          Kt = a(14560),
          gt = a(9807),
          bt = a(20860),
          Ie = a.n(bt);
        function Vt(o, t) {
          return o
            ? t
              ? !!o.valve_admin
              : !!(o.valve_admin || o.support_user)
            : !1;
        }
        function yt(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, c.hM)(n ? o.GetAccountID() : 0);
          return n && Vt(s, t);
        }
        function wt(o) {
          const { clanSteamID: t, id: n } = o;
          return yt(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, b.A)(
                  o.className,
                  o.requireAdmin
                    ? N.ValveOnlyAdminBackground
                    : N.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var $ = a(16412);
        const et = 12,
          ut = 240;
        function Qt(o) {
          const { event: t } = o,
            [n] = (0, Ht.Q)(Me.QS, void 0),
            [s, r] = m.useState(!1),
            i = (0, A.Tc)("rgMLRecommenderWishlist", "application_config"),
            d = Array.isArray(i) && i.length > 0 && Number.isInteger(i[0]);
          return !t.BIsNextFest() ||
            !d ||
            n == Me.sQ.Random ||
            (0, oe.UR)(t) > 0
            ? null
            : (0, e.jsxs)(wt, {
                clanSteamID: t.clanSteamID,
                className: Ie().Ctn,
                children: [
                  (0, e.jsxs)(zt.ml, {
                    className: Ie().Header,
                    onClick: () => r(!s),
                    children: [
                      s ? "\u25BC" : "\u25B6",
                      " Next Fest personalized order (VO)",
                    ],
                  }),
                  s && (0, e.jsx)(Zt, { event: t, rgRecommendedAppIDs: i }),
                ],
              });
        }
        function Zt(o) {
          const { event: t, rgRecommendedAppIDs: n } = o,
            [s, r] = m.useState(void 0);
          (0, dt.zX)(n, ct.Xh);
          const [i, d] = m.useState(void 0),
            [h, u] = m.useState(""),
            p = t.jsondata.sale_ml_recommender_weight_exponent || oe.ld,
            v = parseFloat(h),
            I = i ?? (0, Kt.JE)(t),
            _ = v || p,
            x = m.useMemo(() => (0, gt.a0)(n, n, (w) => w, I, _), [n, I, _]),
            L = m.useMemo(() => new Map(n.map((w, Z) => [w, Z])), [n]),
            M = m.useMemo(() => new Map(x.map((w, Z) => [w, Z])), [x]),
            S = n.length,
            E = (w) => Wt.A.Get().GetApp(w)?.GetName() ?? `App ${w}`,
            U = (w) => `hsl(${Math.round((240 * L.get(w)) / S)}, 80%, 65%)`,
            O = (w, Z) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, b.A)(Ie().Row, s == w && Ie().Highlighted),
                  style: { height: et, color: U(w) },
                  title: `${E(w)} (${w}): recommended #${L.get(w) + 1}, shuffled to #${M.get(w) + 1}`,
                  onMouseEnter: () => r(w),
                  children: Z,
                },
                w,
              ),
            H = (w, Z) =>
              (0, e.jsx)(
                "line",
                {
                  x1: 0,
                  y1: (L.get(w) + 0.5) * et,
                  x2: ut,
                  y2: (M.get(w) + 0.5) * et,
                  stroke: Z ? "white" : U(w),
                  strokeWidth: Z ? 2 : 1,
                  strokeOpacity: Z ? 1 : s === void 0 ? 0.6 : 0.15,
                },
                w,
              );
          return (0, e.jsxs)("div", {
            className: Ie().Body,
            children: [
              (0, e.jsxs)("div", {
                className: Ie().Summary,
                children: [
                  S,
                  " recommendations, exponent ",
                  _,
                  _ < 0 && " (shuffle disabled)",
                  ", seed ",
                  I,
                  ". Apps that aren't recommended are placed after these in a uniform random order. Each section shows the apps it contains in this same relative order. Hover a row to highlight it.",
                ],
              }),
              (0, e.jsxs)("div", {
                className: Ie().Controls,
                children: [
                  (0, e.jsx)($.$n, {
                    className: Ie().ControlButton,
                    onClick: () => d(lt.m()),
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
                        className: Ie().ExponentInput,
                        placeholder: String(p),
                        value: h,
                        onChange: (w) => u(w.target.value),
                      }),
                    ],
                  }),
                  (i !== void 0 || h != "") &&
                    (0, e.jsx)($.$n, {
                      className: Ie().ControlButton,
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
                className: Ie().Chart,
                onMouseLeave: () => r(void 0),
                children: [
                  (0, e.jsxs)("div", {
                    className: Ie().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie().ColumnTitle,
                        children: "Recommended order",
                      }),
                      n.map((w, Z) => O(w, `#${Z + 1} ${E(w)}`)),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Ie().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie().ColumnTitle,
                        children: "\xA0",
                      }),
                      (0, e.jsxs)("svg", {
                        width: ut,
                        height: S * et,
                        children: [
                          n.filter((w) => w != s).map((w) => H(w, !1)),
                          s !== void 0 && L.has(s) && H(s, !0),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Ie().Column,
                    children: [
                      (0, e.jsx)("div", {
                        className: Ie().ColumnTitle,
                        children: "Shuffled order",
                      }),
                      x.map((w) => O(w, `#${L.get(w) + 1} ${E(w)}`)),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Yt(o) {
          const {
            event: t,
            fnOnChangeDayIndex: n,
            addtionalAdminButtons: s,
          } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Qt, { event: t }),
              (0, e.jsx)(it.g, {
                eventModel: t,
                fnOnUpdateSaleDayIndex: n,
                addtionalAdminButtons: s,
                bSupportsSticky: !0,
              }),
            ],
          });
        }
        var Oe = a(179),
          Re = a(50109),
          Ne = a(30096),
          Be = a(98609),
          Pe = a(57673);
        const tt = new Map();
        function Jt(o, t) {
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
        function Xt(o, t, n) {
          const s = new Map(),
            r = new Map(),
            i = new Map();
          let d,
            h,
            u = 0;
          const { selectedTabBackgroundDef: p, nTabSaleSectionIndex: v } = Jt(
            t,
            n,
          );
          if (o?.enabled) {
            const I = o.groups?.length;
            if (
              (o.groups?.forEach((_, x) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const L = new Array();
                for (
                  let S = 0;
                  S < (_?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++S, ++u
                ) {
                  const U = t[u].unique_id;
                  L.push(U),
                    r.set(U, _.background_id),
                    S === 0 && i.set(U, _.background_id);
                }
                if (
                  (s.set(_.background_id, {
                    nBackgroundGroupID: _.background_id,
                    sectionUniqueIDs: L,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (v === void 0 || u < v)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  x + 1 == I && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let S = u;
                    S < t.length &&
                    (!p || !p.enabled || S < v) &&
                    !(t[S].section_type == "tabs" && p?.enabled);
                    ++S
                  ) {
                    const U = t[S].unique_id;
                    r.set(U, _.background_id);
                  }
              }),
              u < t.length && (v === void 0 || u < v) && (d = t[u].unique_id),
              p?.enabled && v !== void 0)
            ) {
              let _ = v;
              const x = p.groups.length;
              for (
                p.groups.forEach((L, M) => {
                  if (_ >= t.length) return;
                  const S = new Array();
                  for (
                    let O = 0;
                    O < L.num_sections && _ < t.length;
                    ++O, ++_
                  ) {
                    const H = t[_],
                      w = H.unique_id;
                    (0, Pe.bF)(n, H)
                      ? (S.push(w),
                        r.set(w, L.background_id),
                        O === 0 && i.set(w, L.background_id))
                      : --O;
                  }
                  let E = _;
                  for (; E < t.length && !(0, Pe.bF)(n, t[E]); ) E += 1;
                  if (
                    (s.set(L.background_id, {
                      nBackgroundGroupID: L.background_id,
                      sectionUniqueIDs: S,
                      nSaleSectionLastIndex: _ - 1,
                      nUniqueIDNextSaleSection:
                        E < t.length ? t[E].unique_id : void 0,
                    }),
                    M + 1 == x && p.last_group_until_cover_section_until_end)
                  )
                    for (let O = _; O < t.length; ++O) {
                      const H = t[O];
                      if (H.section_type == "tabs" && p?.enabled) break;
                      (0, Pe.bF)(n, H) && r.set(H.unique_id, L.background_id);
                    }
                });
                _ < t.length && !(0, Pe.bF)(n, t[_]);
              )
                _++;
              _ < t.length && (h = t[_].unique_id);
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
        var he = a(29630),
          $t = a(68434),
          mt = a(41635),
          Te = a(81416);
        function At(o, t, n, s) {
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
              en,
              {
                eventModel: o,
                displayDef: i,
                derivedGroupInfo: t.derivedGroupInfo,
                children:
                  i &&
                  i.randomize_section_order &&
                  n !== Te.S.EPreviewMode_EditBackground
                    ? (0, e.jsx)(qt, {
                        clanEventGID: o.GID,
                        elSaleSections: t.elSaleSections,
                      })
                    : t.elSaleSections,
              },
              "background_group_" + t.groupID,
            )
          );
        }
        function qt(o) {
          const { clanEventGID: t, elSaleSections: n } = o,
            [s, r] = (0, $t.M)(`sale_section_seed_${t}`, (0, lt.m)());
          if (!n || n.length === 0) return null;
          if (n.length > 1 && s !== void 0) {
            const i = (0, lt.A)(s);
            return (0, e.jsx)(e.Fragment, { children: mt.fW(n, 0, i) });
          }
          return (0, e.jsx)(e.Fragment, { children: n });
        }
        function en(o) {
          const {
              displayDef: t,
              children: n,
              eventModel: s,
              derivedGroupInfo: r,
            } = o,
            i = (0, Re.E)(),
            d = m.useCallback(
              (x, L) => {
                tt.set(r.nBackgroundGroupID, L);
              },
              [r],
            ),
            h = (0, Ne.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const x = (0, F.LgB)(i),
              L =
                x in t.localized_background_art
                  ? x
                  : l.A0.GetLanguageFallback(Be.TS.LANGUAGE),
              M = t.localized_background_art[L];
            M && (u = he.zU.GenerateURLFromHashAndExt(s.clanSteamID, M));
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
            I = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            _ = {
              backgroundImage: p ? `url(${u}), ${p}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: I ? t.position_setting : void 0,
              backgroundColor: v ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: h,
            style: _,
            id: "background_group_" + t.background_id,
            children: n,
          });
        }
        var Ye = a(4720),
          tn = a(64641),
          ht = a.n(tn),
          Je = a(85599);
        function nn(o) {
          return typeof o == "string" || typeof o == "number"
            ? o
            : JSON.stringify(o);
        }
        class an {
          Keyify = (t) => nn(t);
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
        var Xe = a(71742),
          on = a(53113),
          Lt = a(90405),
          me = a(96538),
          _e = a(88003),
          sn = a(12932),
          pt = a(46777),
          rn = a(77495),
          ln = a(16346),
          cn = a(61257),
          dn = a(56718),
          ze = a(71421),
          gn = a(27828),
          nt = a.n(gn);
        function un(o) {
          return `rgba(${o.rgb.r}, ${o.rgb.g}, ${o.rgb.b}, ${o.rgb.a})`;
        }
        function mn(o) {
          const t = parseInt(o.slice(1), 16),
            n = (t >> 16) & 255,
            s = (t >> 8) & 255,
            r = t & 255;
          return `rgba(${n}, ${s}, ${r}, 1)`;
        }
        function hn(o) {
          const { color: t, onChange: n, strTitle: s, disableAlpha: r } = o,
            [i, d] = (0, m.useState)(() => t || "rgba(255, 255, 255, 1)"),
            h = (0, m.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(g.Z.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const v = (await new window.EyeDropper().open()).sRGBHex,
                  I = mn(v);
                d(I), n(I);
              } catch (u) {
                console.warn(g.Z.Localize("#Sale_EyeDropperFailed"), u);
              }
            }, [n]);
          return (0, e.jsxs)("div", {
            className: nt().ColorPickerDialog,
            children: [
              !!s && (0, e.jsx)($.JU, { children: s }),
              (0, e.jsx)(cn.xk, {
                onChange: (u) => {
                  const p = un(u);
                  d(p), n(p);
                },
                color: i,
                disableAlpha: r,
                className: nt().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: nt().EyeDropperCtn,
                children: (0, e.jsx)(ze.Gq, {
                  toolTipContent: g.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)($.$n, {
                    className: nt().EyeDropperBtn,
                    onClick: h,
                    children: (0, e.jsx)(dn.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function pn(o) {
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
              children: (0, e.jsx)(hn, {
                color: t,
                disableAlpha: r,
                strTitle: i ?? g.Z.Localize("#Button_Color"),
                onChange: n,
              }),
            })
          );
        }
        function f() {
          return {
            openColorPicker: (0, m.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, ln.lX)(
                (0, e.jsx)(pn, {
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
        var D = a(13447),
          P = a.n(D),
          X = a(32190),
          Q = a.n(X),
          q = a(76559),
          de = a(75909),
          ue = a(53424),
          ye = a(72604),
          we = a(41735),
          De = a.n(we),
          Ge = a(14947),
          xe = a(9046),
          vn = Object.defineProperty,
          Bt = Object.getOwnPropertyDescriptor,
          Sn = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Bt(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && vn(t, n, r), r;
          };
        const jn = class zn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, Ge.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                A.TS.COMMUNITY_BASE_URL +
                "gid/" +
                n.ConvertTo64BitString() +
                "/hasclanimagefile",
              d = { image_hash_and_ext: s, lang: "" + r };
            return (
              (await De().get(i, { params: d, cancelToken: t && t.token })).data
                .success == ye.R
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
              (this.m_curLocImageGroup.localized_images = (0, mt.$Y)(
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
                : he.zU.GenerateURLFromHashAndExt(
                    t,
                    he.zU.GetHashAndExt(s) ?? "",
                  );
            }
            return null;
          }
          async DetermineAvailableLocalizationForGroup(t) {
            if (!this.m_curLocImageGroup) return;
            const n = this.m_curLocImageGroup.primaryImage,
              s = q.b.InitFromClanID(n.clanAccountID),
              r = he.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let h = F.Bhc; h < F.bP9; ++h)
              i.push(zn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, h));
            const d = await Promise.all(i);
            (0, Ge.h5)(() => {
              for (let h = F.Bhc; h < F.bP9; ++h)
                d[h] &&
                  (this.m_curLocImageGroup.localized_images[h] =
                    he.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      xe.wI.full,
                      h,
                      this.m_curLocImageGroupType ?? void 0,
                    ));
            });
          }
          SetLocalizedImageGroupAtLang(t, n, s) {
            this.m_curLocImageGroup &&
              (this.m_curLocImageGroup.localized_images[t] = s
                ? he.zU.GenerateURLFromHashAndExtAndLang(
                    n,
                    s,
                    xe.wI.full,
                    t,
                    this.m_curLocImageGroupType ?? void 0,
                  )
                : null);
          }
          AddLocalizeImageUploaded(t, n) {
            if (!this.m_curLocImageGroup) return;
            let s = this.m_curLocImageGroup.primaryImage;
            if (s?.image_hash == t) {
              const r = q.b.InitFromClanID(s.clanAccountID),
                i = he.zU.GetHashAndExt(s);
              i &&
                (this.m_curLocImageGroup.localized_images[n] =
                  he.zU.GenerateURLFromHashAndExtAndLang(
                    r,
                    i,
                    xe.wI.full,
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
              .map((s) => he.zU.GetHashAndExtFromURL(s));
          }
        };
        Sn([Ge.sH], jn.prototype, "m_curLocImageGroup", 2);
        let Hn = jn;
        const Ae = new Hn();
        var at = a(38410),
          Gt = a(34592),
          bn = a(75844),
          fn = a(32093),
          In = a(72849),
          Wn = a(64),
          Kn = a(72739),
          vt = a(82734);
        function Vn(o, t) {
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
            Kn.createPortal(
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
        function Qn(o) {
          const [t, n] = m.useState(!1),
            s = m.useCallback((u) => {
              ((u.dataTransfer.files && u.dataTransfer.files[0]) ||
                (u.dataTransfer.types && u.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = m.useCallback((u) => {
              vt.NO(u) && n(!1);
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
        async function Eo(o, t = 1e3) {
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
        function So(o) {
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
        var Zn = a(71647),
          ot = a.n(Zn);
        function Yn(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = Qn(t),
            [h, u] = Vn(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, b.A)(
              d ? ot().DragAndDropContainerDragging : ot().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, l.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: ot().ImageUploadBar,
                children: [
                  h,
                  (0, e.jsxs)("label", {
                    onClick: u,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, l.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: ot().SelectImageButton,
                        children: (0, l.we)("#selectimage_select_file"),
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
        var ft = a(36118),
          Jn = a(21254),
          Xn = a(27344),
          Ee = a.n(Xn),
          $n = a(9472);
        function qn(o) {
          const {
              imageUploader: t,
              fnUploadComplete: n,
              elOverrideDragAndDropText: s,
              forceResolution: r,
              elAdditonalButtons: i,
              rgRealmList: d,
            } = o,
            [h, u] = (0, W.q3)(() => [
              t.GetUploadImages(),
              Re.O.Get().GetCurEditLanguage(),
            ]),
            p = m.useCallback(
              async (_) => {
                let x = Array.from(_),
                  L = !0;
                for (let M = 0; M < x.length; M++) {
                  const S = x[M],
                    { language: E } = (0, at.jj)(S?.name, u);
                  try {
                    const U = (0, at.PD)(E, u, d);
                    (L = await t.AddImageForLanguage(S, U)),
                      L ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            M +
                            " file=" +
                            S.name,
                        ),
                        (0, _e.pg)(
                          (0, e.jsx)(me.KG, {
                            strDescription: (0, l.we)(
                              "#ImagePicker_Error",
                              S.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (U) {
                    let O = (0, Gt.H)(U);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + O.strErrorMsg,
                      O,
                    ),
                      (0, _e.pg)(
                        (0, e.jsx)(me.KG, {
                          strDescription: (0, l.we)(
                            "#EventError_Code",
                            O.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return L;
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
          (0, W.q3)(() =>
            h.map((_) => ({ a: _.GetCurrentImageOption(), b: _.language })),
          );
          const I = async () => {
            const _ = await t.UploadAllImages(r);
            n?.(_);
          };
          return (0, e.jsxs)(Yn, {
            onDropFiles: p,
            elAdditonalButtons: v,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Ee().UploadPreviewCtn,
                  children: h.map((_) =>
                    (0, e.jsx)(
                      wn,
                      {
                        asset: _,
                        forceResolution: r,
                        fnOnRemove: () => t.DeleteUploadImage(_),
                        languageRealms: d,
                      },
                      "arttabupload_" + _.filename + "_" + _.uploadTime,
                    ),
                  ),
                }),
              }),
              (0, e.jsx)(ea, { imageUploader: t, fnOnUploadImageRequested: I }),
            ],
          });
        }
        function ea(o) {
          const { imageUploader: t, fnOnUploadImageRequested: n } = o,
            [s] = (0, W.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Ee().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)($.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, l.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)($.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, l.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function jo(o, t, n, s, r) {
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
        const wn = (0, bn.PA)(ta);
        function ta(o) {
          const t = (x) => {
              if (x instanceof Wn.M7) {
                x.ResetImage();
                const L = window,
                  M = (0, e.jsx)(Jn.q, {
                    ownerWin: L,
                    uploadFile: x,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || In.bg.dU,
                  });
                (0, _e.HT)(M, L, "CropModal", {
                  strTitle: (0, l.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  x.fileType,
                  JSON.stringify(x.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = o,
            i = n.ImageOptions?.map((x) => {
              let L = x?.fnGetLabelText(),
                M;
              x.bEnforceDimensions && (L += ` - ${x.width}x${x.height}`),
                x.bDeprecated &&
                  ((L += ` ${(0, l.we)("#ImageUpload_Deprecated")}`),
                  (M = (0, l.we)("#ImageUpload_Deprecated_ttip")));
              let S;
              return (
                (n.BIsOriginalMinimumDimensions(x) &&
                  n.FileTypeMatchesImageTypes(x)) ||
                  (S = Ee().ImageDimensionTooSmall),
                { label: L, data: x, strOptionClass: S, tooltip: M }
              );
            }).filter((x) => !x.data.bHiddenFromDropdown),
            d = {
              pending: (0, l.we)("#ImageUpload_Pending"),
              waiting: (0, l.we)("#ImageUpload_Waiting"),
              uploading: (0, l.we)("#ImageUpload_Uploading"),
              processing: (0, l.we)("#ImageUpload_Processing"),
              success: (0, l.we)("#ImageUpload_SuccessCard"),
              failed: (0, l.we)("#ImageUpload_Failed"),
            },
            h = n.BSupportsLanguages()
              ? oa(
                  l.A0.GetLanguageListForRealms(
                    r ?? [fn.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            u = n.IsValidAssetType(o.forceResolution, o.forceFileType),
            p = n.status == "pending";
          let v = d[n.status];
          n.status == "pending" &&
            (u.needsCrop
              ? (v = (0, l.we)("#ImageUpload_NeedsCrop"))
              : u.error && (v = (0, l.we)("#ImageUpload_Invalid")));
          let I;
          const _ = n.GetCurrentImageOption();
          return (
            _ && (I = i?.find((x) => x.data.sKey == _.sKey)?.data),
            I || (I = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Ee().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Ee().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(ft.sED, {}),
                }),
                (0, e.jsx)(na, { asset: n }),
                h &&
                  (0, e.jsx)($.m, {
                    strDropDownClassName: z().DropDownScroll,
                    rgOptions: h,
                    selectedOption: n.language,
                    onChange: (x) => (n.language = x.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)($.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: I,
                    onChange: (x) => n.SetCurrentImageOption(x.data),
                    disabled: !p,
                  }),
                p &&
                  u.warnings?.map((x, L) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ee().UploadPreviewWarning, children: x },
                      `warning${L}`,
                    ),
                  ),
                p &&
                  u.messages?.map((x, L) =>
                    (0, e.jsx)(
                      "div",
                      { className: Ee().UploadPreviewMessage, children: x },
                      `message${L}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, b.A)({
                    [z().FlexColumnContainer]: !0,
                    [Ee().UploadPreviewError]: n.status == "failed",
                  }),
                  children: [
                    v,
                    (0, $n.o)(n.status) &&
                      (0, e.jsx)("div", {
                        className: ht().FlexCenter,
                        children: (0, e.jsx)(Je.t, { size: "small" }),
                      }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: Ee().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: Ee().UploadPreviewError,
                    children: u.error,
                  }),
                p &&
                  u.needsCrop &&
                  (0, e.jsx)($.jn, {
                    onClick: () => t(n),
                    children: (0, l.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function na(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: Ee().PreviewImgCtn,
                onClick: (n) =>
                  (0, _e.pg)((0, e.jsx)(aa, { asset: t }), (0, vt.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Ee().PreviewImgInfo,
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
                className: Ee().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Ee().PreviewImgInfo,
                  children: [t.width, " x ", t.height],
                }),
              });
        }
        function aa(o) {
          const { asset: t, closeModal: n } = o;
          return (0, e.jsx)(me.o0, {
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
        function oa(o) {
          const t = [],
            n = new Array();
          for (const s of o) {
            if (s == F.X51) continue;
            const r = (0, l.we)("#Language_" + (0, F.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Pt = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Pt || {});
        function An(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function bo(o, t, n) {
          let s = "";
          const r = An(t);
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
            const i = An(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var sa = a(55436),
          ra = a(53732),
          Se = a.n(ra),
          Ln = a(49460);
        function ia(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, m.useRef)(null);
          return (0, e.jsx)("div", {
            className: Ln.PickerTitle,
            children: (0, e.jsx)("input", {
              ref: n,
              className: Ln.SearchInput,
              type: "text",
              placeholder: (0, l.we)("#ImagePicker_Search"),
              onChange: (s) => t(s.currentTarget.value),
              onKeyDown: (s) => {
                s.key == "Escape" &&
                  (t(""), n.current && (n.current.value = ""));
              },
            }),
          });
        }
        const la = m.memo(function (t) {
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
                  ca,
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
            r = (0, ue.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = ue.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const h = q.b.InitFromClanID(t);
            let u = ue.pU.GetLoadState(h);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: Se().ResultNotification,
                    children:
                      i.length > 0
                        ? (0, l.we)("#ImagePicker_EmptySearch")
                        : (0, l.we)("#ImagePicker_Empty"),
                  },
                  "ImagePicker_Result",
                )
              : u && u.errMsg
                ? (0, e.jsx)(
                    "div",
                    {
                      className: Se().ErrorCode,
                      children: (0, l.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: Se().ResultNotification,
                      children: (0, l.we)("#Loading"),
                    },
                    "ImagePicker_Result",
                  );
          } else return s(d, i);
        }
        function yo(o) {
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
                    ga,
                    { clanImage: d, selected: d == r, onImageSelected: s },
                    d.imageid,
                  ),
                ),
              }),
          });
        }
        function ca(o) {
          const {
              clanImage: t,
              searchStringHilight: n,
              imageInsertCallBack: s,
              OnImageClick: r,
              showImageActions: i,
              fnOnOpenLocalizedImageGroup: d,
            } = o,
            [h, u] = m.useState(!1),
            p = () => s(t, Pt.k_eInsertFullImage),
            v = () => s(t, Pt.k_eInsertVideo),
            I = () => s(t, Pt.k_eInsertThumbnail),
            _ = (ne) => {
              t.url &&
                (ne.dataTransfer.setData("text", t.url),
                ue.pU.GetClanImageDragListener().forEach((ge) => {
                  let be = q.b.InitFromClanID(t.clanAccountID);
                  ge(be, !0);
                }));
            },
            x = (ne) => {
              t.url &&
                ue.pU.GetClanImageDragListener().forEach((ge) => {
                  let be = q.b.InitFromClanID(t.clanAccountID);
                  ge(be, !1);
                });
            },
            L = (ne) => {
              (0, _e.pg)(
                (0, e.jsx)(me.o0, {
                  strTitle: (0, l.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: S,
                  onCancel: E,
                  closeModal: E,
                  children: (0, e.jsxs)(m.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, l.we)(
                          "#ImagePicker_DeleteAreYouSure",
                          t.file_name ?? "",
                        ),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        children: (0, l.we)("#ImagePicker_DeleteWarning"),
                      }),
                    ],
                  }),
                }),
                (0, vt.uX)(ne) ?? window,
              );
            },
            M = (ne) => {
              console.log("ClanImageWrapper on delete error: " + ne),
                (0, _e.pg)(
                  (0, e.jsx)(me.KG, {
                    strTitle: (0, l.we)("#Error_FailureNotice"),
                    strDescription: (0, l.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ne }),
                  }),
                  window,
                );
            },
            S = () => {
              u(!0);
              let ne = q.b.InitFromClanID(t.clanAccountID);
              ue.pU
                .DeleteClanImage(ne, t)
                .then((ge) => {
                  ge.success != ye.R && M((0, Gt.H)(ge).strErrorMsg), u(!1);
                })
                .catch((ge) => {
                  M((0, Gt.H)(ge).strErrorMsg), u(!1);
                }),
                E();
            },
            E = () => {},
            U = () => {
              r && r(t);
            },
            O = t.file_name ? t.file_name : "",
            H = (0, sa.r)(n, O, String(t.imageid), Se().Hilight),
            w = he.zU.BIsClanImageVideo(t),
            Z = i && !h && !w,
            ve = i && !h && !w,
            Le = i && !h && w,
            Ue = i && !h && !w;
          return (0, e.jsx)(Lt.K, {
            placeholderHeight: "100vh",
            className: Se().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: Se().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: Se().ImageWrapper,
                  style: {
                    backgroundImage: w ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: _,
                  onDragEnd: x,
                  onDoubleClick: p,
                  onClick: U,
                  children: (0, e.jsx)(Gn, {
                    clanImage: t,
                    className: Se().VideoBackground,
                  }),
                }),
                Z &&
                  (0, e.jsx)("span", {
                    className: Se().Full,
                    onClick: p,
                    children: (0, l.we)("#ImagePicker_FullSize"),
                  }),
                h &&
                  (0, e.jsx)(Je.t, {
                    size: "medium",
                    className: Se().FloatingThrobber,
                  }),
                ve &&
                  (0, e.jsx)("span", {
                    className: Se().Thumb,
                    onClick: I,
                    children: (0, l.we)("#ImagePicker_Thumbnail"),
                  }),
                Ue &&
                  d &&
                  (0, e.jsx)(da, {
                    bDeleting: h,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                Le &&
                  (0, e.jsx)("span", {
                    className: Se().Full,
                    onClick: v,
                    children: (0, l.we)("#ImagePicker_Video"),
                  }),
                !h &&
                  (0, e.jsx)("span", {
                    className: Se().Delete,
                    onClick: L,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: Se().ImageWrapperFilename,
                  title: O,
                  children: H,
                }),
              ],
            }),
          });
        }
        function da(o) {
          const {
              clanImage: t,
              fnOnOpenLocalizedImageGroup: n,
              bDeleting: s,
            } = o,
            { data: r } = (0, c.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, b.A)(Se().Localized, z().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, l.we)("#ImagePicker_Localized"),
              });
        }
        function Gn(o) {
          const { clanImage: t, className: n } = o;
          return he.zU.BIsClanImageVideo(t)
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
        function ga(o) {
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
        function ua(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = m.useCallback(
              (h, u) => {
                s?.(h, u), n?.();
              },
              [s, n],
            ),
            [i, d] = m.useState("");
          return (0, e.jsxs)(me.o0, {
            strTitle: (0, l.we)("#ImagePicker_Images"),
            strDescription: (0, l.we)("#ImagePicker_DoubleClickToSelect"),
            bAlertDialog: !0,
            onOK: n,
            onCancel: n,
            children: [
              (0, e.jsx)(ia, { fnSetImageSearch: d }),
              (0, e.jsx)(la, {
                clanAccountID: t.GetAccountID(),
                fileNameSearch: i,
                imageInsertCallBack: r,
                showImageActions: !1,
              }),
            ],
          });
        }
        function ma(o) {
          const { clanSteamID: t, OnClanImageSelected: n } = o;
          return (0, e.jsxs)("div", {
            className: ot().ImageUploadBar,
            children: [
              (0, e.jsxs)("label", {
                htmlFor: "clanimagedialog",
                children: [
                  (0, e.jsxs)("span", {
                    children: [(0, l.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: ot().SelectImageButton,
                    children: (0, l.we)("#ImagePicker_PreviousImages2"),
                  }),
                ],
              }),
              (0, e.jsx)("input", {
                style: { display: "none" },
                id: "clanimagedialog",
                type: "button",
                onClick: (s) => {
                  (0, _e.pg)(
                    (0, e.jsx)(ua, { clanSteamID: t, OnClanImageSelected: n }),
                    (0, vt.uX)(s) ?? window,
                  );
                },
              }),
            ],
          });
        }
        function ha(o) {
          const {
              clanSteamID: t,
              rgSupportArtwork: n,
              localizedPrimaryImage: s,
              bAllowPreviousClanImageSelection: r,
              fnSetImageURL: i,
              rgRealmList: d,
            } = o,
            [h] = (0, W.q3)(() => [Re.O.Get().GetCurEditLanguage()]),
            u = (0, de.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [v, I] = m.useState(!1),
            _ = m.useCallback(
              async (M, S) => {
                if (!v) {
                  I(!0);
                  try {
                    const { language: E } = (0, at.jj)(M.file_name ?? "", h),
                      U = (0, at.PD)(E, h, d);
                    await p.AddExistingClanImage(M, U);
                  } catch (E) {
                    let U = (0, Gt.H)(E);
                    console.error("AddExistingClanImage: " + U.strErrorMsg, U),
                      (0, _e.pg)(
                        (0, e.jsx)(me.KG, {
                          strDescription: (0, l.we)(
                            "#EventError_Code",
                            U.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  I(!1);
                }
              },
              [v, p, h, d],
            ),
            x = m.useMemo(
              () =>
                r
                  ? [
                      [
                        (0, e.jsx)(
                          ma,
                          { clanSteamID: t, OnClanImageSelected: _ },
                          "clanartworkpicker",
                        ),
                      ],
                    ]
                  : null,
              [_, r, t],
            ),
            L = (M) => {
              for (const S of M) {
                const E = S.uploadResult;
                if (E?.origimagehash) {
                  const U = (0, at.PD)(E.language, h, d);
                  Ae.AddLocalizeImageUploaded(E.origimagehash, U);
                } else {
                  const U = ue.pU.GetClanImageByImageHash(
                      t,
                      E?.image_hash ?? "",
                    ),
                    O = S.image.GetCurrentImageOption();
                  if (U && O) {
                    const H = (0, at.PD)(S.image.language, h, d);
                    i(O.artworkType, U, H);
                  }
                }
              }
            };
          return (0, e.jsx)(qn, {
            ...o,
            imageUploader: p,
            rgRealmList: d,
            elAdditonalButtons: v
              ? [
                  (0, e.jsx)(
                    Je.t,
                    {
                      position: "center",
                      size: "medium",
                      string: (0, l.we)("#Loading"),
                    },
                    "throbbing",
                  ),
                ]
              : x,
            fnUploadComplete: L,
          });
        }
        var It = a(25279),
          pa = a(25359),
          pe = a.n(pa),
          va = a(24806);
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
            p = q.b.InitFromClanID(t.clanAccountID),
            v = (0, W.q3)(() =>
              he.zU.GenerateURLFromHashAndExt(p, he.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(me.o0, {
            strTitle: (0, l.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, l.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, h),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, b.A)(z().FlexColumnContainer, pe().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: pe().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: pe().ArtworkPreview,
                    src: v,
                  }),
                }),
                (0, e.jsx)(va.Ng, {
                  selectedLang: h,
                  fnLangHasData: d,
                  fnOnLanguageChanged: u,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var Tt = a(56330);
        function xn(o) {
          if (!o) return o;
          const t = o.lastIndexOf(".");
          return t === -1 ? o : o.substring(0, t);
        }
        var fa = a(58483),
          Ia = a(82385),
          xa = a(94520),
          Ca = a(95174),
          _a = a(9709),
          Cn = a(64868),
          Da = a(44894);
        const Ea =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var Sa = a(11243);
        function ja(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, ue.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let p = new Array();
              const v = l.A0.GetLanguageListForRealms([
                fn.TU.k_ESteamRealmGlobal,
                fn.TU.k_ESteamRealmChina,
              ]);
              for (const I of v) {
                const _ = n(I);
                if (_) {
                  const x = (0, F.LgB)(I),
                    L = (0, l.we)("#Language_" + x);
                  p.push({ lang: I, strLang: x, locLang: L, imgHash: _ });
                }
              }
              return (
                (p = p.sort((I, _) =>
                  I.locLang > _.locLang ? 1 : I.locLang < _.locLang ? -1 : 0,
                )),
                p
              );
            }, [n]),
            [d, h, u] = (0, Cn.uD)();
          return (0, e.jsxs)("div", {
            className: pe().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: pe().SelectImageTitle,
                children: (0, l.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: pe().LanguageListContainer,
                children: i.map((p) =>
                  (0, e.jsx)(
                    ba,
                    { langData: p, ...o },
                    "lang_select_" + t.GetAccountID() + " " + p.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)($.$n, {
                  onClick: h,
                  children: [
                    (0, l.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(Sa.o, {
                      tooltip: (0, l.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(me.EN, {
                active: d,
                children: (0, e.jsx)(me.o0, {
                  strTitle: (0, l.we)("#Dialog_AreYouSure"),
                  strDescription: (0, l.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: u,
                  onOK: () => {
                    for (let p = 0; p < F.bP9; p++) s && r && s(p) && r(p);
                  },
                }),
              }),
            ],
          });
        }
        function ba(o) {
          const {
              clanSteamID: t,
              langData: n,
              langOverride: s,
              fnOnLanguagePreviewChange: r,
              fnOnArtworkLangChange: i,
              fnOnRemoveImage: d,
            } = o,
            [h, u] = (0, W.q3)(() => {
              const p = ue.pU.GetClanImageByImageHash(t, n.imgHash);
              let v = "";
              p &&
                (v = he.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  he.zU.GetHashAndExt(p),
                  xe.wI.full,
                  n.lang,
                ));
              let I = pe().LanguageSelectorSelected;
              return (
                s != n.lang &&
                  (I = n.imgHash
                    ? pe().LanguageSelector
                    : pe().LanguageSelectorNoData),
                [v, I]
              );
            });
          return (0, e.jsxs)("div", {
            id: n.strLang,
            className: pe().LanguageContainer,
            onClick: (p) => {
              let v = (0, F.sfN)(p.currentTarget.id);
              r(v);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: pe().LanguageOptions,
                children: [
                  !!h &&
                    (0, e.jsx)("a", {
                      href: h,
                      target: "_blank",
                      children: (0, e.jsx)(ze.he, {
                        toolTipContent: (0, l.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: ft.YNO(),
                      }),
                    }),
                  !!i && (0, e.jsx)(ya, { ...o }),
                  !!d && (0, e.jsx)(wa, { fnOnRemoveImage: d, langData: n }),
                ],
              }),
            ],
          });
        }
        function ya(o) {
          const {
              clanSteamID: t,
              langData: n,
              fnOnArtworkLangChange: s,
              fnGetImageHash: r,
              fnLangHasData: i,
              realms: d,
            } = o,
            [h, u, p] = (0, Cn.uD)(),
            v = (0, W.q3)(() => {
              const I = r(n.lang);
              return (
                (0, Xe.wT)(
                  !I || !I.includes("."),
                  "ChangeLanguageButton: Unexpected File Extension: " + I,
                ),
                ue.pU.GetClanImageByImageHash(t, I)
              );
            });
          if (!v) {
            console.error("image does not exists on server");
            return;
          }
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ze.he, {
                toolTipContent: (0, l.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: Ea,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)(Y.tH, {
                children: (0, e.jsx)(me.EN, {
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
        function wa(o) {
          const { fnOnRemoveImage: t, langData: n } = o,
            [s, r, i] = (0, Cn.uD)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(ze.he, {
                toolTipContent: (0, l.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: Da.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(Y.tH, {
                children: (0, e.jsx)(me.EN, {
                  active: s,
                  children: (0, e.jsx)(me.o0, {
                    strTitle: (0, l.we)("#selectimage_remove_image"),
                    strDescription: (0, l.we)(
                      "#selectimage_remove_details",
                      (0, l.we)("#Language_" + (0, F.LgB)(n.lang)),
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
        var _n = a(13465),
          Aa = a(21659),
          La = a(15496),
          je = a.n(La),
          Ba = a(88812);
        function Ga(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            h = (0, Aa.c5)(),
            u = m.useCallback(
              (E) => {
                E.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, F.sfN)(A.TS.LANGUAGE),
            [v, I, _] = (0, W.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let x = "spotlight",
            L = xe.wI.spotlight_main;
          (t.appid == 2434320 || A.TS.EUNIVERSE == F.Rv) &&
            ((x = h
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (L = xe.wI.full));
          let M =
            (0, Ba.WC)(n !== void 0 ? void 0 : t, x, p, L) ??
            (n !== void 0 ? [n] : []);
          i && M && (M = i(M));
          const S = v.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: je().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(G.Z, {
                className: (0, b.A)(
                  je().AppDetailsSpotlightContainer,
                  je().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: je().MajorEventBackground,
                    children: (0, e.jsx)(_n.c, {
                      className: je().MajorEventImageBackgroundBlur,
                      rgSources: M,
                      onIncrementalError: (E, U, O) => r && r(U),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: je().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(_n.c, {
                        className: je().MajorEventImage,
                        rgSources: M,
                        onIncrementalError: (E, U, O) => r && r(U),
                      }),
                      (0, e.jsx)("div", {
                        className: je().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: je().MajoreEventImageContentContainer,
                        children:
                          _ &&
                          (0, e.jsxs)("div", {
                            className: je().MajorEventContent,
                            children: [
                              (0, e.jsx)(_n.c, {
                                className: je().MajorEventSpotlightBackground,
                                rgSources: M,
                                onIncrementalError: (E, U, O) => r && r(U),
                              }),
                              (0, e.jsxs)("div", {
                                className: je().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: je().MajorEventTitle,
                                    children: I,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: je().MajorEventSummary,
                                    children: S,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: je().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Pa = a(79949),
          Ce = a.n(Pa);
        function Ta(o) {
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
              fnGetImageHashAndExt: I,
            } = o,
            _ = I(n, t),
            x = _
              ? he.zU.GenerateURLFromHashAndExtAndLang(r, _, xe.wI.full, t)
              : "",
            [L] = (0, W.q3)(() => [ka(n, I)]);
          return L == 0
            ? (0, e.jsxs)("div", {
                className: pe().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(Tn, {
                      imgURL:
                        A.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(Mn, {
                      imgURL:
                        A.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Ma, {
                      langOverride: t,
                      artworkType: n,
                      eventModel: i,
                    }),
                  (0, e.jsx)("div", {
                    children: (0, l.we)("#EventEditor_ArtworkMissing"),
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                className: pe().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(Tn, {
                      imgURL: x,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(Mn, {
                      imgURL: x,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Mt, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Mt, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Mt, { imgURL: x, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(Ra, {
                      imgURL: x,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(Na, { imgURL: x }),
                  n === "sale_overlay" && (0, e.jsx)(Ua, { imgURL: x }),
                  xe.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: _a.PreviewImg,
                      src:
                        Ae.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(xt, { imgURL: x }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(xt, { imgURL: x }),
                  n === "sale_logo" && (0, e.jsx)(xt, { imgURL: x }),
                  n === "bestofyear_banner" && (0, e.jsx)(xt, { imgURL: x }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(xt, { imgURL: x }),
                  (0, e.jsx)(ja, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: h,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: v,
                    fnGetImageHash: (M) => xn(I(n, M) ?? ""),
                  }),
                ],
              });
        }
        function wo(o) {
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
        function Ma(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = It.Fj[t],
            i = m.useMemo(
              () =>
                Oa(
                  (0, l.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Mt, { lang: n, imgURL: i, event: s });
        }
        function Oa(o, t) {
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
            r = (0, Re.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(Ca.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function Mn(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, fa.LJ)(),
            [i, d, h, u, p] = (0, W.q3)(() => [
              n.GetNameWithFallback(t),
              n.GetDescriptionWithFallback(t),
              n.GetSubTitleWithLanguageFallback(t),
              n.type,
              n.AnnouncementGID,
            ]);
          let v = d
            ? (0, e.jsx)(xa.fh, {
                text: d || "",
                showErrorInfo: !1,
                event: n,
                languageOverride: Re.O.Get().GetCurEditLanguage(),
              })
            : (0, l.we)("#selectimage_display_event_body");
          return (0, e.jsxs)("div", {
            className: Ce().MultipleExampleContainer,
            children: [
              (0, e.jsx)("div", {
                className: Ce().ExampleSectionTitle,
                children: (0, l.we)("#selectimage_preview_title_1"),
              }),
              (0, e.jsx)("div", {
                className: (0, b.A)(
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
                              (0, l.we)("#selectimage_display_event_title"),
                          }),
                          (0, e.jsx)("div", {
                            className: Ce().TextSubTitle,
                            children:
                              h ||
                              (0, l.we)("#selectimage_display_event_subtitle"),
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
                      children: (0, l.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, b.A)(
                        Ce().DetailPageExample,
                        "DetailPageExample",
                      ),
                      children: (0, e.jsx)("div", {
                        className: Ce().DetailExample2,
                        children: (0, e.jsx)(
                          Ia.He,
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
        const Mt = (o) => {
            const [t] = (0, dt.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Ce().SpotlightExample,
              children: (0, e.jsx)(Ga, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          Ra = (o) => {
            const t = [
              (0, e.jsx)("img", { src: o.imgURL }, "img"),
              (0, e.jsx)("div", { className: pe().BroadcastPreview }, "video"),
            ];
            return (
              o.side === "right" && t.reverse(),
              (0, e.jsx)("div", {
                className: Ce().BroadcastPreviewContainer,
                children: t,
              })
            );
          },
          Na = (o) =>
            (0, e.jsx)("div", {
              className: Ce().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          Ua = (o) =>
            (0, e.jsx)("div", {
              className: Ce().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            }),
          xt = (o) =>
            (0, e.jsx)("div", {
              className: Ce().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            });
        function ka(o, t) {
          let n = 0;
          for (let s = F.Bhc; s < F.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var Fa = Object.defineProperty,
          za = Object.getOwnPropertyDescriptor,
          On = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? za(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && Fa(t, n, r), r;
          };
        const Ha =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Wa = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Wa || {});
        function Ka(o) {
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
            [I] = (0, dt.t7)(s, { include_assets: !0 }),
            [_, x] = (0, W.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            L = _ == F.ajI;
          let M = null;
          n === 2
            ? (M = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, l.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (M = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, l.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (M = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, l.we)("#EventEditor_Requested"),
                }));
          let S = null;
          t === "capsule"
            ? L
              ? (S = (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_creatorhome_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_creatorhome_2"),
                      ],
                    }),
                  ],
                }))
              : (S = (0, e.jsxs)(e.Fragment, {
                  children: [
                    !!x &&
                      (0, e.jsxs)("div", {
                        className: pe().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, l.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${A.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
                              children: (0, l.we)("#PartnerEvent_MM_LearnMore"),
                            }),
                          }),
                        ],
                      }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_design_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_1"),
                      ],
                    }),
                    (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_capsule_2"),
                      ],
                    }),
                  ],
                }))
            : t === "background"
              ? (S = (0, e.jsx)(e.Fragment, {
                  children: (0, e.jsxs)("p", {
                    children: [
                      (0, e.jsx)("strong", {
                        children: (0, l.we)("#selectimage_tip_design_title"),
                      }),
                      ": ",
                      (0, l.we)("#selectimage_tip_background_1"),
                    ],
                  }),
                }))
              : t === "spotlight" || t === "localized_store_app_spotlight"
                ? (S = (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("p", {
                      children: [
                        (0, e.jsx)("strong", {
                          children: (0, l.we)("#selectimage_tip_usage_title"),
                        }),
                        ": ",
                        (0, l.we)("#selectimage_tip_store_spotlight_1"),
                      ],
                    }),
                  }))
                : t === "localized_store_app_spotlight_mobile"
                  ? (S = (0, e.jsx)(e.Fragment, {
                      children: (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("strong", {
                            children: (0, l.we)("#selectimage_tip_usage_title"),
                          }),
                          ": ",
                          (0, l.we)("#selectimage_tip_store_mobile_spotlight"),
                        ],
                      }),
                    }))
                  : t === "broadcast_left" || t === "broadcast_right"
                    ? (S = (0, e.jsx)(e.Fragment, {
                        children: (0, e.jsx)("p", {
                          children: (0, l.we)("#selectimage_tip_broadcast_1"),
                        }),
                      }))
                    : t === "sale_header"
                      ? (S = (0, e.jsxs)(e.Fragment, {
                          children: [
                            (0, e.jsx)("div", {
                              className: z().EventElementRequired,
                              children: (0, l.we)(
                                "#selectimage_tip_required_title",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_usage_title",
                                  ),
                                }),
                                ": ",
                                (0, l.we)("#selectimage_tip_sale_header_1"),
                              ],
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_design_title",
                                  ),
                                }),
                                ": ",
                                (0, l.we)("#selectimage_tip_sale_header_2"),
                              ],
                            }),
                            (0, e.jsx)("p", {
                              children: (0, l.we)(
                                "#selectimage_tip_sale_header_4",
                              ),
                            }),
                            (0, e.jsxs)("p", {
                              children: [
                                (0, e.jsx)("b", {
                                  children: (0, l.we)(
                                    "#selectimage_tip_template_title",
                                  ),
                                }),
                                ": ",
                                (0, e.jsx)("a", {
                                  href: "https://www.dropbox.com/scl/fo/mhf604o6bdbcfr1scq7bx/h?rlkey=9bk0ggiwuvs4o1jdnej4xsy0c&dl=0",
                                  children: (0, l.we)(
                                    "#selectimage_tip_sale_header_3",
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)("br", {}),
                          ],
                        }))
                      : t === "hero"
                        ? I &&
                          (S = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, l.we)("#selectimage_tip_hero_1"),
                              }),
                              !I.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Tt.ErrorStylesBackground,
                                  children: (0, l.we)(
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
                          ? (S = (0, e.jsxs)(e.Fragment, {
                              children: [
                                (0, e.jsx)("p", {
                                  children: (0, l.we)("#ImagePickerLoc_Desc"),
                                }),
                                (0, e.jsx)("p", {
                                  children: (0, l.PP)(
                                    "#ImagePickerLoc_Files",
                                    (0, e.jsx)("a", {
                                      href: Ha,
                                      target: A.TS.IN_CLIENT
                                        ? void 0
                                        : "_blank",
                                      children: (0, l.we)(
                                        "#ImagePickerLoc_URL",
                                      ),
                                    }),
                                  ),
                                }),
                              ],
                            }))
                          : t === "product_banner"
                            ? (S = (0, e.jsxs)(e.Fragment, {
                                children: [
                                  (0, e.jsx)("div", {
                                    className: z().EventElementOptional,
                                    children: (0, l.we)(
                                      "#selectimage_tip_optional_title",
                                    ),
                                  }),
                                  (0, e.jsxs)("p", {
                                    children: [
                                      (0, e.jsx)("b", {
                                        children: (0, l.we)(
                                          "#selectimage_tip_usage_title",
                                        ),
                                      }),
                                      ": ",
                                      (0, l.we)(
                                        "#selectimage_tip_sale_product_banner",
                                      ),
                                    ],
                                  }),
                                ],
                              }))
                            : t === "product_mobile_banner" ||
                                t === "product_banner_override" ||
                                t === "product_mobile_banner_override"
                              ? (S = (0, e.jsxs)(e.Fragment, {
                                  children: [
                                    (0, e.jsx)("div", {
                                      className: z().EventElementOptional,
                                      children: (0, l.we)(
                                        "#selectimage_tip_optional_title",
                                      ),
                                    }),
                                    (0, e.jsxs)("p", {
                                      children: [
                                        (0, e.jsx)("b", {
                                          children: (0, l.we)(
                                            "#selectimage_tip_usage_title",
                                          ),
                                        }),
                                        ": ",
                                        (0, l.we)(
                                          "#selectimage_tip_sale_product_banner",
                                        ),
                                        t === "product_mobile_banner" &&
                                          (0, e.jsxs)("span", {
                                            children: [
                                              "  ",
                                              (0, l.we)(
                                                "#selectimage_tip_sale_product_banner_mobile",
                                              ),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }))
                              : t === "tab_bar_background"
                                ? (S = (0, e.jsxs)(e.Fragment, {
                                    children: [
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, l.we)(
                                              "#selectimage_tip_design_title",
                                            ),
                                          }),
                                          ":",
                                          (0, l.we)(
                                            "#Sale_Tabs_Background_Design",
                                          ),
                                        ],
                                      }),
                                      (0, e.jsxs)("p", {
                                        children: [
                                          (0, e.jsx)("strong", {
                                            children: (0, l.we)(
                                              "#selectimage_tip_usage_title",
                                            ),
                                          }),
                                          ":",
                                          (0, l.we)(
                                            "#Sale_Tabs_Background_Usage",
                                          ),
                                        ],
                                      }),
                                    ],
                                  }))
                                : t === "sale_logo"
                                  ? (S = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: z().EventElementOptional,
                                          children: (0, l.we)(
                                            "#selectimage_tip_optional_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, l.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, l.we)(
                                              "#selectimage_tip_pageLogo",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }))
                                  : (S = (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: z().EventElementRequired,
                                          children: (0, l.we)(
                                            "#selectimage_tip_required_title",
                                          ),
                                        }),
                                        (0, e.jsxs)("p", {
                                          children: [
                                            (0, e.jsx)("b", {
                                              children: (0, l.we)(
                                                "#selectimage_tip_usage_title",
                                              ),
                                            }),
                                            ": ",
                                            (0, l.we)(
                                              "#selectimage_tip_bestofyear",
                                            ),
                                          ],
                                        }),
                                      ],
                                    }));
          const E = It.Fj[o.artworkType].width,
            U = It.Fj[o.artworkType].height;
          return (0, e.jsxs)("div", {
            id: o.id,
            className: pe().ArtworkSelectorContainer,
            children: [
              !!o.title &&
                (0, e.jsxs)("div", {
                  className: pe().Title,
                  onDoubleClick: r,
                  children: [
                    o.title,
                    (0, e.jsx)("span", { children: "\xA0" }),
                    M,
                    r &&
                      (0, e.jsx)($.$n, {
                        onClick: r,
                        children: (0, e.jsx)(ze.he, {
                          toolTipContent: (0, l.we)(
                            o.bIsMinimized
                              ? "#Sale_Section_Maximize_Tooltip"
                              : "#Sale_Section_Minimize_Tooltip",
                          ),
                          children: o.bIsMinimized
                            ? (0, e.jsx)(ft.hz4, {})
                            : (0, e.jsx)(ft.Xjb, {}),
                        }),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsxs)("div", {
                  className: (0, b.A)(pe().SelectImageBlock, pe().Tips),
                  children: [
                    S,
                    !!(E && U) &&
                      (0, e.jsxs)("p", {
                        children: [
                          (0, e.jsx)("b", {
                            children: (0, l.we)(
                              "#selectimage_tip_dimensions_title",
                            ),
                          }),
                          ":\xA0",
                          (0, l.PP)(
                            "#selectimage_tip1",
                            (0, It.qj)(E),
                            (0, It.qj)(U),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Tt.WarningStylesWithIcon,
                          children: o.strWarning,
                        }),
                      }),
                    o.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    o.elAdditionalControls,
                    !!o.fnRemoveAllArtwork &&
                      (0, e.jsx)($.$n, {
                        onClick: (O) => {
                          (0, _e.pg)(
                            (0, e.jsx)(Va, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, vt.uX)(O) ?? window,
                          );
                        },
                        children: (0, l.we)("#Sale_RemoveAll"),
                      }),
                  ],
                }),
              !o.bIsMinimized &&
                (0, e.jsx)(Qa, {
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
        function Va(o) {
          const { fnRemoveAllArtwork: t, closeModal: n } = o;
          return (0, e.jsx)(me.o0, {
            strTitle: (0, l.we)("#Sale_RemoveAll"),
            strDescription: (0, l.we)("#ImageUpload_DeleteAll_Confirm"),
            onOK: () => {
              t?.(), n?.();
            },
            onCancel: n,
          });
        }
        function Qa(o) {
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
            [I, _] = m.useState((0, Re.E)()),
            [x, L] = m.useState(new Array()),
            M = m.useCallback(
              (E, U, O) => {
                let H = [];
                x.find((Z) => Z.clanImage.imageid == E.imageid)
                  ? (H = x.map((Z) =>
                      Z.clanImage.imageid == E.imageid
                        ? { clanImage: E, lang: U }
                        : Z,
                    ))
                  : O && (H = x.concat({ clanImage: E, lang: U })),
                  L(H);
              },
              [x],
            ),
            S = m.useCallback(
              (E, U, O) => {
                (0, Ge.h5)(() => {
                  xn(i(t, U) ?? "") == E.image_hash && d(t, null, U),
                    d(t, E, O),
                    M(E, O, !1);
                });
              },
              [i, t, d, M],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)($.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${A.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, l.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Ot, {
                    list: x,
                    fnOnArtworkLanguageChange: S,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, b.A)(
                        pe().SelectImageBlock,
                        pe().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Ta, {
                        eventModel: h,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (E) => {
                          E != I && _(E);
                        },
                        langOverride: I,
                        fnOnArtworkLangChange: v ? null : S,
                        artworkType: t,
                        fnOnRemoveImage: v ? null : (E) => d(t, null, E),
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
        let Ot = class extends m.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, _e.pg)(
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
                let i = (0, l.we)("#Language_" + (0, F.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: z().FlexRowContainer,
                      children: [
                        (0, e.jsx)("span", {
                          children: (0, l.we)(
                            "#ImageUpload_Success_Mapping",
                            s.file_name ?? "",
                            i,
                          ),
                        }),
                        (0, e.jsx)("a", {
                          onClick: () => this.ShowLangChangeDialog(s, r),
                          children: (0, l.we)(
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
              className: pe().UploadSuccess,
              children: t,
            });
          }
        };
        On([Ne.oI], Ot.prototype, "ShowLangChangeDialog", 1),
          (Ot = On([bn.PA], Ot));
        var Za = a(6658);
        function Ya(o) {
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
            [I, _] = (0, m.useState)(!1),
            x = (0, de.zO)(t, d),
            L = t.GetAccountID(),
            [M] = (0, W.q3)(() => [
              x.GetFilesToUpload().length - x.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            _(!1),
              Ae.ClearImageGroup(),
              i?.forEach((O, H) => {
                const w = q.b.InitFromClanID(L);
                if (Ae.GetAllLocalizedGroupImages().length == 0) {
                  const Z = O && he.zU.GetHashFromHashAndExt(O),
                    ve = Z && ue.pU.GetClanImageByImageHash(w, Z);
                  ve && Ae.SetPrimaryImageForImageGroup(ve, d);
                }
                Ae.SetLocalizedImageGroupAtLang(H, w, O ?? null);
              }),
              _(!0);
          }, [i, L, d]);
          const S = (0, m.useCallback)(
              (O, H, w = F.Bhc) => {
                const Z = q.b.InitFromClanID(L),
                  ve = he.zU.GetHashAndExt(H ?? null);
                if (Ae.GetAllLocalizedGroupImages().length == 0) {
                  const Le = ve && he.zU.GetHashFromHashAndExt(ve),
                    Ue = Le && ue.pU.GetClanImageByImageHash(Z, Le);
                  Ue && Ae.SetPrimaryImageForImageGroup(Ue, O);
                }
                Ae.SetLocalizedImageGroupAtLang(w, Z, ve);
              },
              [L],
            ),
            E = (0, m.useCallback)((O, H) => {
              const Z = Ae.GetLocalizedImageGroupForEdit()?.localized_images[H];
              return Z && Z.split("/").pop();
            }, []),
            U = () => {
              const O = Ae.GetLocalizedImageGroupForEdit();
              for (let H = F.Bhc; H < F.bP9; ++H) {
                const w = O?.localized_images[H];
                if (w) {
                  const Z = w.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: xn(Z),
                      clanAccountID: L,
                      file_type: (0, Za.yh)(Z) ?? In.bg.w3,
                      imageid: 0,
                    },
                    H,
                  );
                } else p(d, null, H);
              }
              Ae.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(me.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, b.A)(Tt.NotTooWideModal, Tt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, l.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: M > 0,
            onOK: U,
            strOKButtonText:
              M > 0 ? (0, l.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              I
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(ha, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: S,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: x,
                      }),
                      (0, e.jsx)(Ka, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => Ae.ClearImageGroup(),
                        fnSetImageURL: S,
                        fnGetImageHashAndExt: E,
                        fnLangHasData: h,
                        partnerEventStore: v,
                      }),
                    ],
                  })
                : (0, e.jsx)(Je.t, {
                    size: "medium",
                    position: "center",
                    string: (0, l.we)("#Loading"),
                  }),
              o.children,
            ],
          });
        }
        function Ja(o) {
          const { setting: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_NoRepeat"),
                  data: "no-repeat",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_RepeatX"),
                  data: "repeat-x",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_RepeatY"),
                  data: "repeat-y",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_Repeat"),
                  data: "repeat",
                }),
                i.push({
                  label: (0, l.we)("#EventEditor_Tile_NoRepeatAndBlur"),
                  data: "coverBlur",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "no-repeat",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        var Xa = a(94381);
        function $a(o) {
          const {
              closeModal: t,
              imgGroup: n,
              fnUpdateImageGroup: s,
              eventModel: r,
            } = o,
            { openColorPicker: i } = f(),
            [d, h] = (0, m.useState)(() => n),
            [u, p, v, I, _, x, L, M] = (0, W.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [S] = (0, m.useState)(() => qa(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Ya, {
            strLocalizedTitle: (0, l.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, l.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: rn.O3,
            artworkType: "localized_background_art",
            realms: L,
            loc_images: S,
            fnLangHasData: (E) => !!S[E],
            fnGetImageHash: (E, U) => S[U],
            fnSetImageURL: async (E, U, O) => {
              h((H) => {
                const w = { ...H.localized_background_art },
                  Z = he.zU.GetHashAndExt(U);
                return (
                  Z ? (w[(0, F.LgB)(O)] = Z) : delete w[(0, F.LgB)(O)],
                  { ...H, localized_background_art: w }
                );
              });
            },
            onOK: () => {
              h((E) => (s(E), t && setTimeout(t, 1), { ...E }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: P().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: P().ImageOptions,
                    children: [
                      (0, e.jsx)(Ja, {
                        setting: u,
                        fnUpdateSetting: (E) => {
                          h(
                            E !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: E,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: E },
                          );
                        },
                        label: (0, l.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(eo, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (E) => h({ ...d, scaling_setting: E }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(no, {
                          position_settings: x,
                          fnUpdateSetting: (E) =>
                            h({ ...d, position_setting: E }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: P().ColorOptions,
                    children: [
                      (0, e.jsx)($.JU, {
                        children: (0, l.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: Q().ColorCtn,
                        children: [
                          (0, e.jsx)($.$n, {
                            style: { backgroundColor: v },
                            onClick: (E) =>
                              i(E, {
                                color: v ?? "",
                                onChange: (U) =>
                                  h({ ...d, background_color1: U }),
                              }),
                            children: (0, l.we)(
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
                            children: (0, l.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: P().SwapColorsCtn,
                        children: (0, e.jsx)($.$n, {
                          onClick: () =>
                            h({
                              ...d,
                              background_color1: I,
                              background_color2: v,
                            }),
                          children: (0, l.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      _ !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: Q().ColorCtn,
                          children: [
                            (0, e.jsx)($.$n, {
                              style: { backgroundColor: I },
                              onClick: (E) =>
                                i(E, {
                                  color: I ?? "",
                                  onChange: (U) =>
                                    h({ ...d, background_color2: U }),
                                }),
                              children: (0, l.we)(
                                I === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)($.$n, {
                              onClick: () =>
                                h({ ...d, background_color2: void 0 }),
                              children: (0, l.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(to, {
                        gradient: _ ?? "top-to-bottom",
                        fnUpdateSetting: (E) =>
                          h({ ...d, gradient_setting: E }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(wt, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Xa.S, {
                  checked: !!M,
                  onChange: (E) => {
                    d.randomize_section_order = E;
                  },
                  children: (0, l.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function qa(o) {
          const t = mt.$Y([], F.bP9, null);
          for (const n in o) {
            const s = (0, F.sfN)(n);
            s != F.xPp && (t[s] = o[n]);
          }
          return t;
        }
        function eo(o) {
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
                  label: (0, l.we)("#BackgroundGroups_Scaling_cover"),
                  data: "cover",
                }),
                d.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_contain"),
                  data: "contain",
                }),
                d.push({
                  label: (0, l.we)("#BackgroundGroups_Scaling_fixed"),
                  data: "auto",
                }),
                d
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: N.DropDownScroll,
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
        function to(o) {
          const { gradient: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_Top"),
                  data: "top-to-bottom",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_Left"),
                  data: "left-to-right",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Gradient_TopLeft"),
                  data: "top-left-to-bottom-right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "top-to-bottom",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function no(o) {
          const { position_settings: t, fnUpdateSetting: n, label: s } = o,
            r = m.useMemo(() => {
              const i = [];
              return (
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_Unset"),
                  data: "unset",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_Centered"),
                  data: "center",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_CenteredTop"),
                  data: "top center",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_TopLeft"),
                  data: "top left",
                }),
                i.push({
                  label: (0, l.we)("#BackgroundGroups_Position_BottomRight"),
                  data: "bottom right",
                }),
                i
              );
            }, []);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($.JU, {
                children: s || (0, l.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)($.m, {
                strDropDownClassName: N.DropDownScroll,
                rgOptions: r,
                selectedOption: t || "unset",
                onChange: (i) => n(i.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
            ],
          });
        }
        function ao(o) {
          const {
              backgroundImageEditModel: t,
              bBackgroundImgGroupEditMode: n,
              fnSetBackgroundImgGroupEditMode: s,
              bShowAsValveOnly: r,
            } = o,
            [i, d] = (0, m.useState)(t.BIsBackgroundImageEnabled()),
            [h, u, p] = (0, Ne.uD)(),
            v = (0, W.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, b.A)(P().Ctn, r && N.ValveOnlyBackground),
            children: (0, e.jsxs)(Y.tH, {
              children: [
                (0, e.jsx)($.Yh, {
                  label: (0, l.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (I) => {
                    d(I), t.SetBackgroundImageEnabled(I);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)($.Yh, {
                          label: (0, l.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, l.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)($.Yh, {
                          label: (0, l.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, l.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: v,
                          onChange: (I) =>
                            t.SetSalePageLastCoverSectionUntilEnd(I),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)($.$n, {
                          onClick: u,
                          children: (0, l.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(me.EN, {
                          active: h,
                          children: (0, e.jsx)(me.o0, {
                            strTitle: (0, l.we)(
                              "#EventEditor_GenericAreYouSure",
                            ),
                            strDescription: (0, l.we)(
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
                      children: (0, l.we)("#BackgroundGroups_Desc"),
                    }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("a", {
                  href: `${Be.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, l.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const Dn = m.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: h,
              nTabIndex: u,
            } = t,
            p = (0, Re.E)(),
            [v, I, _, x] = (0, W.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            L = _ && i + 1 === x,
            [M, S, E] = (0, Ne.uD)(),
            [U, O, H] = (0, Ne.uD)();
          let w;
          v?.nUniqueIDNextSaleSection &&
            (w = (0, pt.h_)(
              K.HY,
              r.GetSaleSectionByID(v?.nUniqueIDNextSaleSection),
              p,
              h,
              v.nSaleSectionLastIndex + 1,
            ));
          let Z;
          if (v && I?.length > 1) {
            const ve = I[I.length - 1];
            Z = (0, pt.h_)(
              K.HY,
              r?.GetSaleSectionByID(ve),
              p,
              h,
              v.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(sn.qx, {
            bStartMinimized: !1,
            title: (0, l.we)(
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
                  onClick: S,
                  children: (0, l.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(me.EN, {
                  active: M,
                  children: (0, e.jsx)($a, {
                    imgGroup: d,
                    closeModal: E,
                    eventModel: h,
                    fnUpdateImageGroup: (ve) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, ve)
                        : r.SetSalePageBackgroundGroup(i, ve),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: P().EditorTitle,
                  children: (0, l.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    I.map((ve) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, pt.h_)(
                            K.W3,
                            r.GetSaleSectionByID(ve),
                            p,
                            h,
                            r.GetSaleSectionIndexByID(ve, !0),
                          ),
                        },
                        "li_" + ve,
                      ),
                    ),
                    !!L &&
                      (0, e.jsx)("li", {
                        children: (0, l.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!Z &&
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
                    children: (0, l.we)("#BackgroundGroups_Reduce", Z),
                  }),
                !!w &&
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
                    children: (0, l.we)("#BackgroundGroups_Extend", w),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)($.$n, {
                        onClick: O,
                        children: (0, l.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(me.EN, {
                        active: U,
                        children: (0, e.jsx)(me.o0, {
                          strTitle: (0, l.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, l.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            u != null
                              ? r.RemoveTabBackgroundGroup(u, i)
                              : r.RemoveSalePageBackgroundGroup(i),
                          closeModal: H,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          });
        });
        function oo(o) {
          const { backgroundImageEditModel: t, nTabID: n } = o;
          return (0, e.jsx)("div", {
            className: P().CtnEditor,
            children: (0, e.jsx)($.$n, {
              onClick: (s) =>
                n !== void 0 && n >= 0
                  ? t?.AddTabBackgroundGroup(n)
                  : t?.AddSalePageBackgroundGroup(),
              children: (0, l.we)(
                n !== void 0 && n >= 0
                  ? "#BackgroundGroups_AddNewGroupTab"
                  : "#BackgroundGroups_AddNewGroup",
              ),
            }),
          });
        }
        function so(o) {
          const {
              nTabID: t,
              nSectionUniqueID: n,
              salePageBackgroundDerivedConfig: s,
              backgroundImageEditModel: r,
            } = o,
            i = s.mapFirstSectionToGroup.get(n);
          return n == s.nFirstSaleSectionIDWithoutGroup ||
            n == s.nFirstTabSectionIDWithoutGroup
            ? (0, e.jsx)(oo, { backgroundImageEditModel: r, nTabID: t })
            : i
              ? (0, e.jsx)(ro, { ...o, groupID: i })
              : null;
        }
        function ro(o) {
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
            d = i.findIndex((M) => M.background_id === t),
            h = i[d],
            [u, p] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!u) return;
            const M = (0, _e.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => p(!1),
                children: (0, e.jsx)(Dn, {
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
              M.then((S) => S.Close());
            };
          }, [u, r, h, d, n, s]);
          const v = (0, W.q3)(() => tt.get(t)),
            [I, _] = (0, m.useState)(null),
            x = m.useCallback((M, S) => {
              _(S);
            }, []),
            L = (0, Ne.w6)(x);
          return (0, e.jsxs)("div", {
            className: P().CtnEditor,
            ref: L,
            children: [
              !!(v && I && I > v) &&
                (0, e.jsx)($.$n, {
                  onClick: (M) => p(!0),
                  children: (0, l.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Dn, {
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
        var io = a(81557),
          Rn = a.n(io);
        function lo(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!n) return;
            const v = (0, _e.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Nn, { ...o }),
              }),
              window,
            );
            return () => {
              v.then((I) => I.Close());
            };
          }, [n, o]);
          const r = (0, W.q3)(() => {
              const v = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (v) {
                const I = t.mapGroupToSections.get(v);
                if (I) return tt.get(I?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, m.useState)(null),
            h = m.useCallback((v, I) => {
              d(I);
            }, []),
            u = (0, Ne.w6)(h),
            p = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, b.A)(P().CtnEditor, Rn().TabCtn),
            ref: u,
            children: [
              p &&
                (0, e.jsx)($.$n, {
                  onClick: (v) => s(!0),
                  children: (0, l.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Nn, { ...o }),
            ],
          });
        }
        function Nn(o) {
          const {
              backgroundImageEditModel: t,
              imgGroupDerivedMapping: n,
              nTabID: s,
            } = o,
            [r, i] = (0, m.useState)(null),
            [d, h, u, p] = (0, W.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(Y.tH, {
            children: [
              (0, e.jsx)($.Yh, {
                label: (0, l.we)("#BackgroundGroups_TaSetting"),
                checked: h,
                onChange: (v) => {
                  if (
                    ((0, Xe.wT)(t, "edit model mising"),
                    (0, Xe.wT)(s !== void 0, "tab setting missing"),
                    s !== void 0 && t)
                  ) {
                    const I = t.SetTabEnabled(s, v);
                    (0, Xe.wT)(
                      !!I,
                      `Failed to create model TabID ${s}backgroundModel`,
                    ),
                      i(I);
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
                      label: (0, l.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, l.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: d,
                      onChange: (v) => t.SetTabLastCoverSectionUntilEnd(s, v),
                    }),
                    (0, e.jsx)(Dn, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (u || r)?.groups[0],
                      imgGroupDerivedMapping: n,
                      eventModel: p,
                      nTabIndex: s,
                      classNameHeader: Rn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var Ct = a(85692);
        function co(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = m.useState(!1),
            [i, d] = m.useState(!1);
          m.useEffect(() => {
            Ct.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const h = (0, W.q3)(() => Ct.TU.Get().GetMouseOverSectionID()),
            u = t && t == h,
            p = () => Ct.TU.Get().JumpToSection(t),
            v = m.useRef(null);
          return (
            (0, Ct.lM)((I) =>
              t != I ? !1 : (v.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: v,
              className: (0, b.A)({
                [B().SaleSectionLivePreview]: !0,
                [B().Hover]: !!u,
                [B().JumpedTo]: !!i,
              }),
              onAnimationEnd: () => d(!1),
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              children: [
                s &&
                  (0, e.jsx)(ze.Gq, {
                    toolTipContent: (0, l.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: B().JumpToButton,
                      onClick: p,
                      children: (0, e.jsx)(ft.ffu, {}),
                    }),
                  }),
                n,
              ],
            })
          );
        }
        var go = a(76281),
          uo = a(20557),
          mo = a(64286);
        function ho(o) {
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
            [v, I] = m.useState(null),
            _ = (0, W.q3)(() => n.jsondata.sale_header_disable_top_margin),
            x = po(n, u, (0, uo.TC)(!!s)),
            [L, M] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !v &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, A.yK)() == "community"
            ) {
              const w = document.getElementsByTagName("HEAD")[0],
                Z = document.createElement("style");
              (Z.innerText = (0, on.L$)(n.jsondata.sale_custom_css)),
                I(Z),
                w.appendChild(Z);
            }
            const H = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Xe.wT)(
                H.length <= 1,
                "Must have at most one react_landing_background",
              ),
              H.length >= 1 && (H[0].style.backgroundImage = ""),
              () => {
                v && (v.remove(), I(null));
              }
            );
          }, [n, v, s]);
          const S = n?.jsondata,
            E = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(A.UF.CLANACCOUNTID),
                nAppIDVOD: Number(S?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? S?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  S?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, S, r, t],
            ),
            U = (0, W.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            O = yt(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: ht().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Je.t, {
                size: "medium",
                string: (0, l.we)("#Loading"),
              }),
            });
          {
            const H =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              w = n.BUsesContentHubForItemSource(),
              Z = n
                .GetSaleSections()
                .some((Ke) => Ke.section_type === "contenthubtitle"),
              ve = w && Z;
            let Le,
              Ue = !0;
            H
              ? (Le = 0)
              : n.BUsesContentHubForItemSource()
                ? (Le = 20)
                : n.GetEventType() == F.ajI
                  ? ((Le = 0), (Ue = !1))
                  : (Le = n.jsondata.sale_header_offset || 0);
            const ne = Ue && n.jsondata.sale_header_offset === 530,
              be = !qe.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              He = s
                ? !L && i?.BIsBackgroundImageEnabled()
                  ? Te.S.EPreviewMode_EditBackground
                  : Te.S.EPreviewMode_Enabled
                : Te.S.EPreviewMode_Disabled,
              We = U || n.GetEventType() != F.ajI,
              ke = w ? ie.Yo.NoTransform : ie.Yo.NoTransformSparseContent,
              _t = (0, b.A)(
                B().SaleOuterContainer,
                _ && B().SaleOuterTopMargin,
                ne && B().SaleNewSizing,
                B()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                H && B().SalePageLogoSet,
                ve && B().ContentHub,
              );
            return (0, e.jsx)(Y.tH, {
              children: (0, e.jsx)(se.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(K.Cs, {
                  location: s ? K.HY : K.bs,
                  children: (0, e.jsxs)(j, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      be && (0, e.jsx)(se.Sn, {}),
                      (0, e.jsx)(J, { eventModel: n }),
                      !!i &&
                        (We || O) &&
                        (0, e.jsx)(ao, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: L,
                          fnSetBackgroundImgGroupEditMode: M,
                          bShowAsValveOnly: !We,
                        }),
                      (0, e.jsxs)(G.Z, {
                        style: ve ? void 0 : { marginTop: `${Le || 0}px` },
                        className: _t,
                        scrollIntoViewType: ke,
                        children: [
                          (0, e.jsx)(fe, { eventModel: n, language: r }),
                          (0, e.jsx)(Fe, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Ft, {
                            event: n,
                            broadcastEmbedContext: E,
                          }),
                          (0, e.jsx)(fo, {
                            ePreviewMode: He,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: E,
                            selectedTab: x,
                            tagSelection: x?.GetTagSelection(),
                          }),
                          !h &&
                            (0, e.jsx)(Yt, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Ke) => {
                                Ke != u &&
                                  ((n.m_overrideCurrentDay = Ke), p(Ke));
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
        function po(o, t, n) {
          const [s] = (0, Oe.QD)(Me.jD, void 0),
            [r] = (0, Oe.QD)($e.dk, void 0),
            [i] = (0, Oe.QD)($e.NV, void 0),
            d = m.useMemo(() => {
              const I = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((_) => !_.hide);
              if (I && I.length > 0) {
                let _ = s > 0 ? I.find((L) => L.unique_id == s) : void 0;
                _ || (_ = I[0]);
                const x = _ === I[0];
                return { selTab: _, bIsDefaultTab: x };
              }
            }, [o, s]),
            h = (0, $e.U9)((0, $e.XL)(r, i), d?.selTab.tab_tag_filter, n),
            u = h?.strParentKey,
            p = h?.strChildKey;
          return m.useMemo(() => {
            if (!d) return;
            let v;
            u && (v = { strParentKey: u, strChildKey: p });
            const I =
              o.jsondata.sale_opt_in_page_name ||
              o.jsondata.prune_list_optin_name;
            return new Ye.y(d.selTab, t, d.bIsDefaultTab, v, I);
          }, [o, t, d, u, p]);
        }
        function Un() {
          if (window?.location?.hash)
            return decodeURIComponent(
              window.location.hash.substring(1).toLowerCase(),
            );
        }
        function vo(o) {
          const {
              event: t,
              language: n,
              nSaleDayIndex: s,
              ePreviewMode: r,
              selectedTab: i,
              backgroundImageEditModel: d,
            } = o,
            [h, u] = m.useState((0, Me.rp)()),
            p = m.useMemo(() => new an(), []),
            v = m.useCallback(() => u((0, Me.rp)()), []);
          m.useEffect(
            () => (
              window.addEventListener("resize", v),
              () => window.removeEventListener("resize", v)
            ),
            [v],
          ),
            m.useEffect(() => {
              let ne = "";
              const ge = () => {
                  const He = Un();
                  if (He && He != ne) {
                    const We = document.getElementById(He);
                    We && ((ne = He), We.scrollIntoView({ block: "start" }));
                  }
                },
                be = setTimeout(() => ge(), 150);
              return (
                window.addEventListener("hashchange", ge),
                () => {
                  clearTimeout(be),
                    window.removeEventListener("hashchange", ge);
                }
              );
            }, []);
          const I = (0, St.W6)(),
            _ = (ne, ge) => {
              (0, Oe.ip)(I, { ...(ge || {}), [Me.jD]: ne.toString() });
            },
            [x, L] = (0, Oe.QD)("controller"),
            [M, S] = (0, W.q3)(() => {
              const ne =
                  Ut.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                ge = t.GetSaleSectionIncludingFooterSections(ne);
              return [
                Xt(
                  t.jsondata.sale_background_img_groups,
                  ge,
                  i && i.GetActiveTabUniqueID(),
                ),
                ge,
              ];
            });
          let E = !1;
          const U = new Ye.y(void 0, s),
            O = [{ elements: [], activeTab: U }];
          let H = null;
          const w = (0, A.Qn)(),
            Z = (0, Ct.ty)(),
            ve = (0, mo.h)(t),
            Le = m.useMemo(() => {
              const ne = Un();
              if (!ne) return;
              const ge = S.findIndex((be) => be.section_anchor === ne);
              return ge > -1 ? ge : void 0;
            }, [S]);
          S.forEach((ne, ge) => {
            const be = O[O.length - 1].activeTab;
            if (be && !be.ShouldShowSection(ne)) return;
            const He = qe.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              We = h && !He && !t.jsondata.content_hub_restricted_width;
            let ke = (0, Te.I)(ne, r, t, n, w, ve);
            if (ke === void 0) return;
            if (!ke)
              if ((0, gt.su)(ne) && !A.iA.logged_in)
                E ||
                  ((ke = (0, e.jsx)(gt.CC, {
                    section: ne,
                    event: t,
                    language: n,
                  })),
                  (E = !0));
              else {
                const _o = ne.diable_tab_id_filtering
                  ? new Ye.y(void 0, be && be.GetSaleDay())
                  : be;
                ne.section_type == "tabs" &&
                  ne.tabs?.some(
                    (Do) => Do.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  O.push({ activeTab: i, elements: [] }),
                  (ke = (0, e.jsx)(go.H, {
                    ...o,
                    section: ne,
                    activeTab: _o,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: _,
                    expanded: We,
                    controllerCategory: x,
                    setControllerCategory: L,
                  }));
              }
            Z &&
              (ke = (0, e.jsx)(co, { nSectionID: ne.unique_id, children: ke }));
            const _t = O && O.length && O[O.length - 1];
            let Ke = (0, e.jsx)(
              Co,
              {
                section: ne,
                nActiveTabID:
                  _t && _t.activeTab && _t.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ge,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: M,
                backgroundImageEditModel: d,
                bExpanded: We,
                children: (0, e.jsx)(Lt._, {
                  enabled: !Le || ge > Le,
                  children: ke,
                }),
              },
              "SaleSectionIndex_" + ne.unique_id + "_" + ge,
            );
            const Rt = M.mapSectionToGroup.get(ne.unique_id);
            H &&
              H.groupID != Rt &&
              (O[O.length - 1].elements.push(
                At(t, H, r, i && i?.GetActiveTabUniqueID()),
              ),
              (H = null)),
              Rt
                ? (H ||
                    (H = {
                      groupID: Rt,
                      elSaleSections: [],
                      derivedGroupInfo: M.mapGroupToSections.get(Rt),
                    }),
                  H.elSaleSections.push(Ke))
                : O[O.length - 1].elements.push(Ke);
          }),
            H &&
              (O[O.length - 1].elements.push(
                At(t, H, r, i && i?.GetActiveTabUniqueID()),
              ),
              (H = null));
          const Ue = O.map((ne, ge) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, b.A)(
                  B().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: ne.elements,
              },
              "TabSection_" + ge,
            ),
          );
          return (0, e.jsx)(G.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Ue,
          });
        }
        const fo = (0, St.y)(vo);
        function Io(o) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: n,
            children: s,
          } = o;
          return t && n != null
            ? (0, e.jsx)(xo, {
                visibility_by_door_index_state: t,
                door_index_visibility: n,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function xo(o) {
          const {
              visibility_by_door_index_state: t,
              door_index_visibility: n,
              children: s,
            } = o,
            r = (0, kt.OM)(n);
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
        function Co(o) {
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
              : Me.mj + (t.unique_id || n),
            v = t.section_type != "tabs",
            [I, _] = (0, m.useState)(!0);
          return I
            ? (0, e.jsx)(Y.tH, {
                children: (0, e.jsx)(Io, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: v
                    ? (0, e.jsx)(G.Z, {
                        navKey: p,
                        id: p,
                        className: (0, b.A)({
                          [B().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: h,
                          [t.single_item_style || ""]: !0,
                          [B().SaleSectionBackgroundImageGroupEdit]:
                            r == Te.S.EPreviewMode_EditBackground,
                          [B().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)(e.Fragment, {
                                children: [
                                  u,
                                  (0, e.jsx)(so, {
                                    nSectionUniqueID: t.unique_id || n,
                                    nTabID: s,
                                    salePageBackgroundDerivedConfig: i,
                                    backgroundImageEditModel: d,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(kn, { onChange: _, children: u }),
                      })
                    : (0, e.jsx)(e.Fragment, {
                        children:
                          r === Te.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, b.A)({
                                  [B().SaleSectionCtn]: !0,
                                  [B().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [B().NoTopPadding]: t.collapse_header_space,
                                }),
                                children: [
                                  u,
                                  (0, e.jsx)(lo, {
                                    backgroundImageEditModel: d,
                                    nTabID: s,
                                    imgGroupDerivedMapping: i,
                                  }),
                                ],
                              })
                            : (0, e.jsx)(kn, { onChange: _, children: u }),
                      }),
                }),
              })
            : null;
        }
      },
      12932: (R, ce, a) => {
        "use strict";
        a.d(ce, { qx: () => N });
        var e = a(7850),
          F = a(16412),
          G = a(18210),
          ie = a(36118),
          se = a(90626),
          K = a(36707),
          te = a(95695),
          ae = a.n(te),
          W = a(25792),
          m = a(64734),
          oe = a.n(m),
          Y = a(65946),
          le = a(11243);
        function B(b) {
          const {
              title: A,
              tooltip: re,
              getMinimized: k,
              toggleMinimized: V,
              className: j,
              children: c,
              elAdditionalButtons: g,
            } = b,
            C = (0, Y.q3)(() => k());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, K.A)(
                  j,
                  m.SectionTitleHeader,
                  m.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, K.A)(
                      te.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [A, !!re && (0, e.jsx)(le.o, { tooltip: re })],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(z, { bIsMinimized: C, fnToggleMinimize: V }),
                    ],
                  }),
                ],
              }),
              !C && (0, e.jsx)(W.tH, { children: c }),
            ],
          });
        }
        function N(b) {
          const [A, re] = se.useState(!!b.bStartMinimized);
          return (0, e.jsx)(B, {
            ...b,
            getMinimized: () => A,
            toggleMinimized: () => re(!A),
            children: b.children,
          });
        }
        function z(b) {
          const { bIsMinimized: A, fnToggleMinimize: re } = b,
            k = A ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(F.$n, {
            "data-tooltip-text": (0, G.we)(k),
            onClick: re,
            children: b.bIsMinimized
              ? (0, e.jsx)(ie.hz4, {})
              : (0, e.jsx)(ie.Xjb, {}),
          });
        }
      },
      29462: (R, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => oe });
        var e = a(7850),
          F = a(90626),
          G = a(3166),
          ie = a(99412),
          se = a(77495),
          K = a(85599),
          te = a(11811),
          ae = a(179),
          W = a(7582),
          m = a(21042);
        function oe(Y) {
          const { clanAccountID: le, gidEvent: B } = Y;
          let { eventModel: N, bLoading: z } = (0, se.dB)(le, B);
          const b = (0, ie.sfN)(G.TS.LANGUAGE),
            [A] = (0, ae.QD)("livepreview");
          return (
            A && (N = (0, m.U)(le, ie.ajI, "creatorhome_fake", (0, W.sB)())),
            F.useEffect(() => {
              if (!z && !N) {
                const re = new URL(window.location.href);
                re.searchParams.set("v1", "1"),
                  window.location.replace(re.toString());
              }
            }, [z, N]),
            N
              ? (0, e.jsx)(te.default, {
                  eventModel: N,
                  promotionName: `creatorhome_${B}`,
                  language: b,
                })
              : (0, e.jsx)(K.t, {})
          );
        }
      },
      59970: (R, ce, a) => {
        "use strict";
        a.d(ce, { d: () => pn });
        var e = a(7850),
          F = a(19367),
          G = a(90626),
          ie = a(3685),
          se = a(85528),
          K = a(77495),
          te = a(18210),
          ae = a(3166),
          W = a(75779),
          m = a(80902),
          oe = a(30454);
        async function Y() {
          const f = await (0, oe.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!f.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return f.counts;
        }
        const le = 300 * 1e3;
        function B() {
          return ["DeckCompatCounts"];
        }
        function N() {
          return {
            queryKey: B(),
            queryFn: () => Y(),
            staleTime: le,
            retry: !1,
          };
        }
        function z() {
          const { data: f } = (0, m.I)(N());
          return f;
        }
        function b(f, D) {
          switch (D) {
            case W.sd:
              return f?.playable;
            case W.V8:
              return f?.unsupported;
            default:
              return f?.verified;
          }
        }
        var A = a(70187),
          re = a(36549),
          k = a(39153),
          V = a(99412),
          j = a(72609),
          c = a(25792),
          g = a(85599),
          C = a(41635),
          y = a(47610),
          J = a(18860),
          T = a(87805);
        function ee(f) {
          const { event: D } = f.context,
            P = Number.parseInt((0, A.j$)(f.args)),
            X = G.useMemo(() => {
              if (D)
                return D.jsondata.sale_sections?.find(
                  (Q) =>
                    Q.section_type == "vo_internal" &&
                    (Q.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      Q.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [D]);
          if (P && X) {
            const Q = Number.parseInt((0, A.j$)(f.args, "depositpackageid")),
              q = Number.parseInt((0, A.j$)(f.args, "psulesspackageid")),
              de = (0, A.j$)(f.args, "out_of_stock_override"),
              ue = (0, A.j$)(f.args, "delivery_override"),
              ye = (0, A.j$)(f.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(l, {
              section: X,
              reservationPackageID: P,
              depositPackageID: Q,
              psuLessPackageID: q,
              strOutOfStockOverride: de,
              strDeliveryOverride: ye || ue,
              bDeliveryOverrideOnlyIfOutOfStock: !!ye,
              PreviewActions: f.PreviewActions,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        function l(f) {
          const {
              reservationPackageID: D,
              depositPackageID: P,
              bIsPreview: X,
              psuLessPackageID: Q,
              strOutOfStockOverride: q,
              strDeliveryOverride: de,
              bDeliveryOverrideOnlyIfOutOfStock: ue,
              section: ye,
              PreviewActions: we,
            } = f,
            { data: De } = (0, y.DR)(D),
            { data: Ge } = (0, y.DR)(Q),
            xe = (0, G.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + D,
                  reservation_package: D,
                  deposit_package: P,
                  localized_reservation_desc: (0, C.$Y)([], V.bP9, null),
                  localized_out_of_stock_override: (0, C.$Y)(
                    [q || null],
                    V.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, C.$Y)(
                    [de || null],
                    V.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!ue,
                  psu_less_package: Q,
                },
              ],
              [D, P, q, de, ue, Q],
            );
          if (!De || (Q && !Ge))
            return (0, e.jsx)(g.t, {
              string: (0, te.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const vn = !j.iA.logged_in || !De.account_restricted_from_purchasing,
            Bt =
              De.reservation_state == J.G.k_EPurchaseReservationState_Reserved
                ? De
                : void 0;
          return (0, e.jsxs)(c.tH, {
            children: [
              we &&
                (0, e.jsx)(G.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(we, {
                    bIsPreview: !!X,
                    rgReservationDef: xe,
                  }),
                }),
              !!De.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: xe[0].unique_id,
                  children: [
                    (0, e.jsx)(T.b, {
                      reservationDef: xe[0],
                      hardwareDetail: De,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Bt,
                    }),
                    vn &&
                      (0, e.jsx)(T.p, {
                        section: ye,
                        reservationDef: xe[0],
                        hardwareDetail: De,
                        reservedHardwareDetail: Bt,
                      }),
                    Ge &&
                      Ge?.allow_purchase_in_country &&
                      (0, e.jsx)(T.b, {
                        reservationDef: xe[0],
                        hardwareDetail: Ge,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var fe = a(6878),
          Ve = a(21035),
          Et = a(72865),
          Nt = a(38081),
          Qe = a.n(Nt),
          Ze = a(36707),
          Fe = a(69596),
          rt = a(10026),
          Ut = a.n(rt),
          St = a(19298),
          Me = a(11996),
          $e = a(19047),
          qe = a(36118),
          kt = a(47689),
          jt = a(89926),
          Ft = a(32545),
          it = a.n(Ft);
        function zt(f) {
          const { appID: D, classOverride: P, styleOverride: X } = f,
            [Q, q] = (0, G.useState)(!1),
            de = (0, kt.m)("GameHoverFollowButton"),
            { elDialogElement: ue, fnShowLogonDialog: ye } = (0, jt.l)(),
            we = (0, Me.Fh)(D),
            { mutateAsync: De } = (0, $e.L)(D, !we, void 0),
            Ge = async (xe) => {
              xe.preventDefault(),
                xe.stopPropagation(),
                ae.iA.logged_in
                  ? (q(!0), await De(), de.token.reason || q(!1))
                  : ye();
            };
          return (0, e.jsxs)(St.Z, {
            className: (0, Ze.A)(it().FollowButton, P),
            onClick: Ge,
            style: X,
            children: [
              we ? (0, e.jsx)(qe.pPV, {}) : (0, e.jsx)(qe.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ze.A)(
                  it().FollowButtonText,
                  Q && it().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, te.we)(
                  we ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              ue,
            ],
          });
        }
        function Ht(f) {
          const { appid: D, color: P, bgcolor: X } = f,
            Q = (0, Et.n9)();
          return (0, e.jsx)(zt, {
            appID: D,
            classOverride: (0, Ze.A)(
              Qe().FollowGameButtonNotTop,
              Ut().BBCodeFollowButton,
            ),
            styleOverride: { color: P, backgroundColor: X },
          });
        }
        function lt(f) {
          const D = Number(f.args.appid);
          if (!D) return null;
          const P = (0, Fe.O)(f.args.color, "black"),
            X = (0, Fe.O)(f.args.bgcolor, "white");
          return (0, e.jsx)(Ht, { appid: D, color: P, bgcolor: X });
        }
        var ct = a(57646);
        function Wt(f) {
          const D = Number(f.args.packageid);
          return D
            ? (0, e.jsx)(ct.eF, {
                packageID: D,
                display_style: (0, ct._w)(f.args.display),
              })
            : null;
        }
        function dt(f) {
          const D = Number(f.args.packageid),
            P = Number(f.args.compareid);
          return !D || !P
            ? null
            : (0, e.jsx)(ct.hJ, { packageID: D, compareID: P });
        }
        function Kt(f) {
          const D = f.args[""]?.trim();
          return D
            ? (0, e.jsx)("div", { className: D, children: f.children })
            : (0, e.jsx)(e.Fragment, { children: f.children });
        }
        var gt = a(18657),
          bt = a.n(gt),
          Ie = a(63026);
        function Vt(f) {
          const { clanAccountID: D, color: P, bgcolor: X } = f,
            [Q, q] = G.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ze.A)(bt().BBCodeFollowButton, Q && bt().isHovered),
            onMouseEnter: () => q(!0),
            onMouseLeave: () => q(!1),
            children: (0, e.jsx)(Ie.Q, {
              nCreatorAccountID: D,
              classOverride: Qe().FollowGameButtonNotTop,
              styleOverride: { color: P, backgroundColor: X },
              followType: "group",
            }),
          });
        }
        function yt(f) {
          const { event: D } = f.context,
            P = Number(f.args.groupid) || D?.clanSteamID.GetAccountID();
          if (!P) return null;
          const X = (0, Fe.O)(f.args.color, "black"),
            Q = (0, Fe.O)(f.args.bgcolor, "white");
          return (0, e.jsx)(Vt, { clanAccountID: P, color: X, bgcolor: Q });
        }
        var wt = a(83482),
          $ = a(44267),
          et = a(9202),
          ut = a.n(et),
          Qt = a(29522);
        function Zt(f) {
          const { appid: D, color: P, bgcolor: X } = f,
            Q = (0, Et.n9)(),
            q = (0, Qt.$5)(D),
            de = (0, wt.L3)(Q);
          return (0, e.jsx)("div", {
            className: ut().WishlistHoverCtn,
            children: (0, e.jsx)($.E, {
              snr: de,
              id: q,
              classOverride: (0, Ze.A)(
                Qe().WishlistButtonNotTop,
                ut().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: P, backgroundColor: X },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Yt(f) {
          const D = Number(f.args.appid);
          if (!D) return null;
          const P = (0, Fe.O)(f.args.color, "black"),
            X = (0, Fe.O)(f.args.bgcolor, "white");
          return (0, e.jsx)(Zt, { appid: D, color: P, bgcolor: X });
        }
        let Oe = null;
        function Re() {
          return (
            Oe == null &&
              (Oe = new Map([
                ["wishlist", { Constructor: Yt, autocloses: !1 }],
                ["followgroup", { Constructor: yt, autocloses: !1 }],
                ["classname", { Constructor: Kt, autocloses: !1 }],
                ["price", { Constructor: Wt, autocloses: !1 }],
                ["pricesavings", { Constructor: dt, autocloses: !1 }],
                ["reservationbutton", { Constructor: ee, autocloses: !1 }],
              ])),
            Oe
          );
        }
        var Ne = a(37656),
          Be = a(29868),
          Pe = a(24642);
        function tt(f) {
          return f < 10 ? "0" + f : f;
        }
        function Jt(f) {
          const { giveawayid: D } = f,
            P = (0, Ne.w)(D),
            {
              bLoadingGiveawayInfo: X,
              winner_count: Q,
              closed: q,
              seconds_until_drawing: de,
            } = P;
          return X
            ? null
            : (0, e.jsxs)("div", {
                className: Be.countdownCtn,
                children: [
                  !!q &&
                    (0, e.jsx)("div", {
                      className: Be.Closed,
                      children:
                        Q > 0
                          ? (0, te.we)("#Giveaway_Closed", (0, Pe.D)(Q))
                          : (0, te.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !q &&
                    (0, e.jsxs)(G.Fragment, {
                      children: [
                        de <= 0
                          ? (0, e.jsxs)("div", {
                              className: Be.Throbber,
                              children: [
                                (0, e.jsx)(g.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, te.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Be.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Be.CountDownTime,
                                  children:
                                    tt(Math.floor(de / 60)) + ":" + tt(de % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Be.CountDownText,
                                  children: [
                                    (0, te.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, te.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        Q > 0 &&
                          (0, e.jsxs)("div", {
                            className: Be.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Be.WinnerCount,
                                children: (0, Pe.D)(Q),
                              }),
                              (0, e.jsx)("div", {
                                className: Be.WinnerText,
                                children: (0, te.we)(
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
        var Xt = a(88245),
          he = a(35702),
          $t = a(16412),
          mt = a(92757),
          Te = a(39256),
          At = a(4720),
          qt = a(37375),
          en = a(57810),
          Ye = a(36631),
          tn = a(76281),
          ht = a(81416);
        function Je(f) {
          const { eventModel: D, nEventBadgeID: P } = f,
            X = (0, he.fy)(P);
          if (X?.level > 0) {
            let Q = X.level;
            if (D?.BHasSaleEnabled()) {
              const q = D.GetSaleSectionsByType("badge_progress");
              if (q?.length == 1) {
                const de = q[0].badge_progress;
                if (de?.event_badgeid == P && de?.granted_by_discovery_queue) {
                  const ue = de.levels[de.levels.length - 1].level;
                  return (0, e.jsx)(nn, {
                    eventModel: D,
                    nBadgeLevel: Q,
                    nMaxLevel: ue,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Pe.D)(Q),
            });
          }
          return null;
        }
        function nn(f) {
          const { eventModel: D, nBadgeLevel: P, nMaxLevel: X } = f,
            Q = G.useMemo(() => {
              const we = D.GetSaleSections().filter(
                (De) => De.section_type == "discoveryqueue",
              );
              return we?.length > 0 ? we[0] : null;
            }, [D]),
            { storePageFilter: q, eStoreDiscoveryQueueType: de } = G.useMemo(
              () => (0, qt.lx)(D, Q),
              [D, Q],
            ),
            ue = (0, en.Uf)(de, q),
            ye = Math.min(P + ue, X);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Pe.D)(ye),
          });
        }
        function an(f) {
          const { event: D } = f.context,
            P = Number.parseInt((0, A.j$)(f.args, "eventid"));
          return ae.iA.logged_in && P
            ? (0, e.jsx)(Je, { nEventBadgeID: P, eventModel: D })
            : null;
        }
        function Xe(f) {
          const { nDoorIndex: D, children: P } = f,
            X = (0, k.OM)(D),
            Q = (0, k.gP)(),
            [q, de] = G.useState(!1),
            [ue, ye] = G.useState(!1),
            { elDialogElement: we, fnShowLogonDialog: De } = (0, jt.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($t.$n, {
                disabled: X,
                onClick: (Ge) => {
                  q ||
                    (ae.iA.logged_in
                      ? (de(!0),
                        Q({ iDoorIndex: D })
                          .then((xe) => {
                            xe || ye(!0), de(!1);
                          })
                          .catch(() => {
                            ye(!0), de(!1);
                          }))
                      : De());
                },
                children: ue
                  ? (0, e.jsx)("div", {
                      children: (0, te.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!q && (0, e.jsx)(g.t, { size: "small" }),
                        !!X && (0, e.jsx)(qe.Jlk, {}),
                        P,
                      ],
                    }),
              }),
              we,
            ],
          });
        }
        function on(f) {
          const D = Number.parseInt((0, A.j$)(f.args)) || 0;
          return D >= 0 && D < 32
            ? (0, e.jsx)(Xe, { nDoorIndex: D, children: f.children })
            : null;
        }
        const Lt = (0, mt.y)(tn.H);
        function me(f) {
          const D = Number.parseInt((0, A.j$)(f.args)),
            { event: P, showErrorInfo: X } = f.context;
          if (D) {
            const Q = P?.jsondata?.sale_sections?.findIndex(
              (q) => q.unique_id == D,
            );
            if (Q >= 0) {
              const q = P.GetDayIndexFromEventStart();
              return (0, e.jsx)(Ye.Cs, {
                location: X ? Ye.HY : Ye.bs,
                children: (0, e.jsx)(Lt, {
                  event: P,
                  section: P.jsondata.sale_sections[Q],
                  activeTab: new At.y(null, q),
                  language: f.language,
                  nSaleDayIndex: q,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: X
                    ? ht.S.EPreviewMode_Enabled
                    : ht.S.EPreviewMode_Disabled,
                }),
              });
            } else if (X)
              return (0, e.jsxs)("div", {
                className: Te.ErrorDiv,
                children: ["Error could not find sale section ", D],
              });
          }
          return null;
        }
        let _e = null;
        function sn() {
          return (
            _e == null &&
              (_e = new Map([
                ...Array.from(Re().entries()),
                [
                  "itemdef",
                  {
                    Constructor: pt,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["followgame", { Constructor: lt, autocloses: !1 }],
                ["deckcompatcount", { Constructor: rn, autocloses: !1 }],
                [
                  "deckcompatuserlibrarycount",
                  { Constructor: ln, autocloses: !1 },
                ],
                ["giveawayinfo", { Constructor: gn, autocloses: !1 }],
                ["eventdoorvisibility", { Constructor: cn, autocloses: !1 }],
                ["badgecurrentlevel", { Constructor: an, autocloses: !1 }],
                ["optindoorquest", { Constructor: on, autocloses: !1 }],
                ["localize", { Constructor: ze, autocloses: !1 }],
                ["salesection", { Constructor: me, autocloses: !1 }],
                ["reservationbutton", { Constructor: un, autocloses: !1 }],
              ])),
            _e
          );
        }
        function pt(f) {
          const { event: D } = f.context,
            P = Number.parseInt((0, A.j$)(f.args, "appid")),
            X = Number.parseInt((0, A.j$)(f.args, "itemdefid")),
            Q = Number.parseInt((0, A.j$)(f.args, "maxquantity")),
            q = (0, A.j$)(f.args, "calltoaction");
          return !(0, Xt.gS)(P, X, !1) || !D
            ? (0, e.jsx)(g.t, {
                size: "small",
                position: "center",
                string: (0, te.we)("#Loading"),
              })
            : (0, e.jsx)(Ve.f, {
                language: f.language,
                clanAccountID: D.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: P, nItemDefID: X, max_quantity: Q },
                strCallToAction: q,
              });
        }
        function rn(f) {
          const D = z();
          if (!D) return (0, e.jsx)(g.t, { size: "small" });
          const P = Number.parseInt((0, A.j$)(f.args));
          return (0, e.jsx)("span", { children: (0, Pe.D)(Number(b(D, P))) });
        }
        function ln(f) {
          const D = (0, re.jR)(ae.iA.accountid, "library");
          if (!D) return (0, e.jsx)(g.t, { size: "small" });
          const P = Number.parseInt((0, A.j$)(f.args));
          let X = D.verifiedList?.length || 0;
          switch (P) {
            case W.sd:
              X = D.playableList?.length || 0;
              break;
            case W.V8:
              X = D.unsupportedList?.length || 0;
              break;
            case W.YX:
              X = D.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Pe.D)(Number(X)) });
        }
        function cn(f) {
          const D = Number.parseInt((0, A.j$)(f.args)),
            P =
              "hide" in f.args && !!Number.parseInt((0, A.j$)(f.args, "hide"));
          return D >= 0
            ? (0, e.jsx)(dn, { nDoorIndex: D, bHide: P, children: f.children })
            : null;
        }
        function dn(f) {
          const { nDoorIndex: D, bHide: P, children: X } = f,
            Q = (0, k.OM)(D);
          return Q == null
            ? null
            : (Q && !P) || (!Q && P)
              ? (0, e.jsx)(e.Fragment, { children: f.children })
              : null;
        }
        function ze(f) {
          return (0, e.jsx)("span", {
            className: fe.LocalizeBlock,
            children: (0, te.oW)(
              f.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function gn(f) {
          let D = (0, A.j$)(f.args);
          return D
            ? (0, e.jsx)(Jt, { giveawayid: D })
            : (0, e.jsx)(G.Fragment, {});
        }
        const nt = void 0;
        function un(f) {
          return (0, e.jsx)(ee, { ...f, PreviewActions: nt });
        }
        var mn = a(71698),
          hn = a(94520);
        function pn(f) {
          const { bSalePage: D } = f,
            [P, X] = G.useState(!1);
          return (
            (0, mn.H)(P, D),
            G.useEffect(() => {
              se.Vw.Init(new ie.D(ae.TS.WEBAPI_BASE_URL)), K.O3.Init(), X(!0);
            }, []),
            G.useEffect(() => {
              const Q = (0, te.l4)();
              Q && F.locale(Q);
            }, []),
            P
              ? D
                ? (0, e.jsx)(hn.d3, { dictionary: sn(), children: f.children })
                : f.children
              : null
          );
        }
      },
      11811: (R, ce, a) => {
        "use strict";
        a.r(ce), a.d(ce, { default: () => b });
        var e = a(7850),
          F = a(71698),
          G = a(90626),
          ie = a(73259),
          se = a(76559),
          K = a(77495),
          te = a(14069),
          ae = a(64641),
          W = a.n(ae),
          m = a(85599),
          oe = a(18210),
          Y = a(3166),
          le = a(59970),
          B = a(85692),
          N = a(41032),
          z = a(51079);
        function b(k) {
          const { eventModel: V } = k;
          return (0, e.jsx)(le.d, {
            bSalePage: !0,
            children: (0, e.jsx)(A, { ...k, overrideEventModel: V }),
          });
        }
        function A(k) {
          const { promotionName: V, language: j, overrideEventModel: c } = k,
            [g, C] = G.useState(
              c ?? K.O3.GetClanEventFromAnnouncementGID(Y.P9.ANNOUNCEMENT_GID),
            );
          G.useEffect(() => {
            if (!c && g?.AnnouncementGID != Y.P9.ANNOUNCEMENT_GID) {
              const l = new se.b(Y.UF.CLANSTEAMID);
              K.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                l,
                Y.P9.ANNOUNCEMENT_GID,
                null,
              ).then(C);
            }
          }, [g, c]);
          const J = (0, B.D2)() ?? g,
            T = (0, B.ty)();
          if (((0, F.s)(1500), !J))
            return (0, e.jsx)("div", {
              className: W().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(m.t, {
                size: "medium",
                string: (0, oe.we)("#Loading"),
              }),
            });
          const ee =
            (J.visibility_state !== ie.zv.k_EEventStateVisible &&
              J.visibility_state !== ie.zv.k_EEventStateUnlisted) ||
            T;
          return (0, e.jsx)(re, {
            eventModel: J,
            children: (0, e.jsx)(z.oJ, {
              children: (0, e.jsx)(z.Ay, {
                curator_clanid: J?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(te._, {
                  promotionName: V,
                  language: j,
                  eventModel: J,
                  bIsPreview: ee,
                }),
              }),
            }),
          });
        }
        function re(k) {
          const { eventModel: V, children: j } = k,
            c = V.GetContentHubType() == "adultonly";
          return (0, e.jsx)(N.QA, {
            eAdultOnlyMediaBehavior: c ? "allowed" : "masked",
            children: j,
          });
        }
      },
      32545: (R) => {
        R.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
          BackgroundAnimation: "uyy8KyiiqaQ8u9bMDwblz",
          "ItemFocusAnim-darkerGrey-nocolor": "_1ZwgsD1DzopaHZlXaaWS7B",
          "ItemFocusAnim-darkerGrey": "_1sm-Ag9q7YyfjTirEAUKbD",
          "ItemFocusAnim-darkGreySettings": "Y4bvEiSraTDYjd2Nd9Mwc",
          "ItemFocusAnim-darkGrey": "J6U-QgbF3DbDkS-3DeQdU",
          "ItemFocusAnim-grey": "_377hQ8s9afH681BN_ZEsfJ",
          "ItemFocusAnim-translucent-white-10": "_3ztC4gHbTuhtfBA2YmQnsW",
          "ItemFocusAnim-translucent-white-20": "pjQnWETBI391eZg-gLCoU",
          "ItemFocusAnimBorder-darkGrey": "_35tkELTOnZffhYZXF6IM5p",
          "ItemFocusAnim-green": "ubgODmIok4_aHDeaT6Dpl",
          focusAnimation: "_3hPkc-RJEDgRJ0ItWpPsP9",
          hoverAnimation: "_3cu-nLm0UDnrFRy4HkVrO8",
        };
      },
      50909: (R) => {
        R.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (R) => {
        R.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
          BackgroundAnimation: "_1xc_h6g1jbrfqXQXHDA2eY",
          "ItemFocusAnim-darkerGrey-nocolor": "_32Qiunpe7Bq8tRMP7zANIV",
          "ItemFocusAnim-darkerGrey": "_1jLvKsCp-1NNukUKFcJBiF",
          "ItemFocusAnim-darkGreySettings": "_2oonpIg6GiNC1fFwAuTeY1",
          "ItemFocusAnim-darkGrey": "_25MzDFkbrWeDNWxcpYDDqL",
          "ItemFocusAnim-grey": "_24xCtEhvscRzLJyaNWLeUa",
          "ItemFocusAnim-translucent-white-10": "_191r_XeIDZJjVtYMrw4vZN",
          "ItemFocusAnim-translucent-white-20": "_3PT6d0B4zsV60BfrKuIA1r",
          "ItemFocusAnimBorder-darkGrey": "_1Z9KMCmIY9huHpqwfwRypj",
          "ItemFocusAnim-green": "_1WZWN5W96O7pMURRF2eleh",
          focusAnimation: "_2hRoGMM5UsM8oeV-txHPNu",
          hoverAnimation: "_1YMbPvrOkuzyOJDFmv_N8s",
        };
      },
      71347: (R) => {
        R.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (R) => {
        R.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (R) => {
        R.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      17618: (R) => {
        R.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      10026: (R) => {
        R.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (R) => {
        R.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (R) => {
        R.exports = {
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
      32190: (R) => {
        R.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (R) => {
        R.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (R) => {
        R.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (R) => {
        R.exports = {
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
      9709: (R) => {
        R.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (R) => {
        R.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (R) => {
        R.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (R) => {
        R.exports = {
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
      25359: (R) => {
        R.exports = {
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
      79949: (R) => {
        R.exports = {
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
      20860: (R) => {
        R.exports = {
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
      15496: (R) => {
        R.exports = {
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
          BackgroundAnimation: "_2zmvTGYcnxB2bhgSNFXnSi",
          "ItemFocusAnim-darkerGrey-nocolor": "_2DCLV3hUeBViGvq3yTsiQE",
          "ItemFocusAnim-darkerGrey": "_1iMoXsAEHqrsXXcoaw1SIy",
          "ItemFocusAnim-darkGreySettings": "_23bSFoV4nDLAGl_G32zEdY",
          "ItemFocusAnim-darkGrey": "_1_Uo-zxJJlBTZyvRjgeG4_",
          "ItemFocusAnim-grey": "_3AjpDoqzZuBj6F7fMiO2Q-",
          "ItemFocusAnim-translucent-white-10": "_3PpKBwmAjZpmyTB-ooDvNd",
          "ItemFocusAnim-translucent-white-20": "_2k5z_bdbdZRy3o_pIFzFBF",
          "ItemFocusAnimBorder-darkGrey": "DuzyT2w758OaPfDpfQkO6",
          "ItemFocusAnim-green": "kF7es13166bQnCHSRaw6l",
          focusAnimation: "_3lfKCkcI6nWWMWFgLOGbyh",
          hoverAnimation: "_24fZDwdgB8kUq2hGCnbx88",
        };
      },
      9202: (R) => {
        R.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
          BackgroundAnimation: "Auhol3RHXIE3fQUoyOoWR",
          "ItemFocusAnim-darkerGrey-nocolor": "_2b6SJAbnZzhfHFRjTpAhNy",
          "ItemFocusAnim-darkerGrey": "XywxBIK9eHokhhsZGNBan",
          "ItemFocusAnim-darkGreySettings": "_2kXRPMPgy0P9b0CoapcXw7",
          "ItemFocusAnim-darkGrey": "_3eSI5prhRv2g28mH4BvfI1",
          "ItemFocusAnim-grey": "SwPqPFwuEkTnSchUdaYfU",
          "ItemFocusAnim-translucent-white-10": "oXUFMy_wfkldK82-xV12m",
          "ItemFocusAnim-translucent-white-20": "_3s81IjXe5IWP8-T018RCQq",
          "ItemFocusAnimBorder-darkGrey": "_1Zq30UmvKFxqjOzEaqp0l",
          "ItemFocusAnim-green": "_3G3OfrZkx3Nt3Q_A9oFTkP",
          focusAnimation: "N5bN0xQL6oj7EZSzAeJ-B",
          hoverAnimation: "_2MUmffXlPUO3g7xxum02Qa",
        };
      },
      64734: (R) => {
        R.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      44894: (R, ce, a) => {
        "use strict";
        a.d(ce, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

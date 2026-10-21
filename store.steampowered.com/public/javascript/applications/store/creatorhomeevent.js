/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [83276],
    {
      71698: (T, de, a) => {
        "use strict";
        a.d(de, { H: () => ie, s: () => k });
        var e = a(90626),
          U = a(41623);
        let L = 0;
        function ie(q, te) {
          (0, e.useEffect)(() => {
            if (!(q || te))
              return (
                L++,
                () => {
                  --L == 0 && (0, U.s)();
                }
              );
          }, [q, te]);
        }
        function k(q) {
          const [te, P] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const c = window.setTimeout(() => P(!0), q);
            return () => window.clearTimeout(c);
          }, [q]),
            ie(te);
        }
      },
      85528: (T, de, a) => {
        "use strict";
        a.d(de, { Vw: () => W });
        var e = a(14947),
          U = a(99412),
          L = a(72604),
          ie = a(35038),
          k = a(67529),
          q = a(3166);
        class te {
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
              w = this.GetTokenList(f),
              Z = f != "english" ? this.GetTokenList("english") : null;
            return P(l, w, Z, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let f = q.TS.LANGUAGE,
              w = this.GetTokenList(f),
              Z = f != "english" ? this.GetTokenList("english") : null;
            return c(l, w, Z, this.m_appid, g);
          }
        }
        function P(j, l, g, f, w) {
          if (!j.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                j,
                "appid",
                f,
                "tokens",
                l,
              ),
              ""
            );
          let Z = j;
          j = j.toLowerCase();
          let G = "";
          if (
            (l && l.has(j) && (G = l.get(j)),
            !G && g && g.has(j) && (G = g.get(j)),
            G)
          )
            G = c(G, l, g, f, w);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                f,
                Z,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && q.TS.EUNIVERSE != U.wLO)
          )
            return j;
          return G;
        }
        function c(j, l, g, f, w) {
          let Z = /{[A-za-z0-9_%#:]+}/g,
            G = j.match(Z);
          if (G)
            for (let Q of G) {
              let re = Q.slice(1, -1),
                me = N(re, w),
                Fe = P(me, l, g, f, w);
              if (!Fe) return "";
              j = j.replace(Q, Fe);
            }
          return (j = N(j, w)), j;
        }
        function N(j, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            f = j.match(g);
          if (f)
            for (let w of f) {
              let Z = w.slice(1, -1).toLowerCase(),
                G = l.get(Z);
              G == null
                ? console.log("No rich presence found for", Z)
                : (j = j.replace(w, G));
            }
          return j;
        }
        var oe = a(72849),
          ne = a(71742),
          le = a(8323),
          V = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          $ = (j, l, g, f) => {
            for (
              var w = f > 1 ? void 0 : f ? H(l, g) : l, Z = j.length - 1, G;
              Z >= 0;
              Z--
            )
              (G = j[Z]) && (w = (f ? G(l, g, w) : G(w)) || w);
            return f && w && V(l, g, w), w;
          };
        function Y(j) {
          return useObserver(() => W.GetAppInfo(j));
        }
        function F(j) {
          return useObserver(() => j.map((l) => W.GetAppInfo(l)));
        }
        const p = 3600 * 24 * 7 * 2;
        class O {
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
              (0, ne.wT)(
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
              ((0, ne.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(l))
            ) {
              let g = new k.by(l);
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
              let f = ie.w.Init(oe._z);
              f.Body().set_language((0, U.sfN)(q.TS.LANGUAGE));
              const w = 50;
              for (; g.length > 0; ) {
                const Z = Math.min(w, g.length),
                  G = g.slice(0, Z);
                (g = g.slice(Z)), f.Body().set_appids(G);
                const Q = await oe.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  f,
                );
                Q.GetEResult() == L.R
                  ? this.OnGetAppsResponse(Q)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${Q.GetEResult()}, AppIDs:`,
                      G,
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
              let w = this.m_mapAppInfo.get(f.appid());
              (0, ne.wT)(
                w,
                `Got AppInfo response for unrequested AppID: ${f.appid()}`,
              ),
                w &&
                  ((w = new k.by(f.appid())),
                  w.DeserializeFromMessage(f),
                  this.m_mapAppInfo.set(f.appid(), w),
                  g.push(w));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const f = new k.by(g.appid());
              f.DeserializeFromAppOverview(g),
                f.is_initialized && this.m_mapAppInfo.set(g.appid(), f);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((f) => {
                let w = this.m_mapAppInfo.get(f);
                if (w) {
                  w.is_valid || (g = !0);
                  return;
                }
                (w = new k.by(f)),
                  this.m_mapAppInfo.set(f, w),
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
            const g = new Date(new Date().getTime() - p * 1e3),
              f = async (Q) => {
                const re = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(Q),
                );
                if (!re) return Q;
                let me = this.m_mapAppInfo.get(Q);
                return (
                  (0, ne.wT)(
                    me,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  me
                    ? ((me = new k.by(Q)),
                      me.DeserializeFromCacheObject(re),
                      me.is_initialized
                        ? (this.m_mapAppInfo.set(Q, me),
                          me.time_updated_from_server < g ? Q : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            Q,
                            re,
                          ),
                          Q))
                    : Q
                );
              };
            let w = l.map((Q) => f(Q));
            return (await Promise.all(w)).filter((Q) => Q !== null);
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
            const w = this.GetRichPresenceLoc(l);
            return w
              ? w.Localize(g, f)
              : q.TS.EUNIVERSE != U.wLO
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
                f.m_nLastUpdated + 1e3 * 60 * k.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(f),
                f
              );
            }
            let g = new te(l);
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
              let w = f.language(),
                Z = l.m_mapLanguages.get(w);
              Z
                ? Z.clear()
                : (l.m_mapLanguages.set(w, new Map()),
                  (Z = l.m_mapLanguages.get(w)));
              for (let G of f.tokens())
                Z?.set(G.name().toLowerCase(), G.value());
            }
          }
          QueueRichPresenceLocRequest(l) {
            return (
              l.m_fetching ||
                ((l.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let g = ie.w.Init(oe.zQ);
                    return (
                      g.Body().set_appid(l.GetAppID()),
                      g.Body().set_language(q.TS.LANGUAGE),
                      oe.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (l.m_fetching = null),
                      g.GetEResult() != L.R
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
        $([e.XI], O.prototype, "OnGetAppsResponse", 1),
          $([e.XI], O.prototype, "OnRichPresenceLocUpdate", 1);
        const W = new O();
      },
      50109: (T, de, a) => {
        "use strict";
        a.d(de, { E: () => le, O: () => ne });
        var e = a(14947),
          U = a(65946),
          L = a(99412),
          ie = a(41635),
          k = a(27066),
          q = a(3166),
          te = a(38585),
          P = Object.defineProperty,
          c = Object.getOwnPropertyDescriptor,
          N = (V, H, $, Y) => {
            for (
              var F = Y > 1 ? void 0 : Y ? c(H, $) : H, p = V.length - 1, O;
              p >= 0;
              p--
            )
              (O = V[p]) && (F = (Y ? O(H, $, F) : O(F)) || F);
            return Y && F && P(H, $, F), F;
          };
        const oe = class Dt {
          m_eCurLang = (0, L.sfN)(q.TS.LANGUAGE);
          m_rgHasData = (0, ie.$Y)([], L.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new te.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(H) {
            return this.m_eCurLang != H
              ? ((this.m_eCurLang = H), this.GetCallback().Dispatch(H), !0)
              : !1;
          }
          SetHasLanguage(H) {
            H.forEach(($, Y) => {
              this.m_rgHasData[Y] != $ && (this.m_rgHasData[Y] = $);
            });
          }
          BHasLanguageData(H) {
            return this.m_rgHasData[H];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(H) {
            H != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = H);
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
        N([e.sH], oe.prototype, "m_eCurLang", 2),
          N([e.sH], oe.prototype, "m_rgHasData", 2),
          N([e.sH], oe.prototype, "m_bHasLocalizationContext", 2),
          N([k.o], oe.prototype, "GetCurEditLanguage", 1),
          N([k.o], oe.prototype, "SetCurEditLanguage", 1),
          N([e.XI.bound], oe.prototype, "SetHasLanguage", 1),
          N([k.o], oe.prototype, "BHasLanguageData", 1);
        let ne = oe;
        function le() {
          return (0, U.q3)(() => ne.Get().GetCurEditLanguage());
        }
      },
      37656: (T, de, a) => {
        "use strict";
        a.d(de, { w: () => W });
        var e = a(41735),
          U = a.n(e),
          L = a(14947),
          ie = a(65946),
          k = a(90626),
          q = a(27066),
          te = a(8323),
          P = a(30096),
          c = a(3166),
          N = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          ne = (j, l, g, f) => {
            for (
              var w = f > 1 ? void 0 : f ? oe(l, g) : l, Z = j.length - 1, G;
              Z >= 0;
              Z--
            )
              (G = j[Z]) && (w = (f ? G(l, g, w) : G(w)) || w);
            return f && w && N(l, g, w), w;
          };
        const le = class Fn {
          constructor() {
            (0, L.Gn)(this);
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
        ne([L.sH], le.prototype, "giveaway_id", 2),
          ne([L.sH], le.prototype, "seconds_until_drawing", 2),
          ne([L.sH], le.prototype, "rtime_start", 2),
          ne([L.sH], le.prototype, "rtime_end", 2),
          ne([L.sH], le.prototype, "closed", 2),
          ne([L.sH], le.prototype, "winner_count", 2);
        let V = le;
        const H = class ot {
          constructor() {
            (0, L.Gn)(this);
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
                ((g = new te.lu()), this.m_mapNextDrawChangeCallback.set(l, g)),
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
              w = { origin: self.origin };
            const Z = await U().get(f, { params: w }),
              G = (0, L.h5)(() => {
                let Q = this.m_mapGiveawayIDToNextDrawInfo.get(l);
                if (
                  (Q ||
                    ((Q = new V()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, Q)),
                  this.CopyToGiveaway(Z.data, Q),
                  g !== void 0)
                ) {
                  const re = this.GetKey(l, g);
                  let me =
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(re);
                  me ||
                    ((me = new V()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(re, me)),
                    this.CopyToGiveaway(Z.data, me);
                }
                return Q;
              });
            return this.GetNextDrawChangeCallback(l).Dispatch(G), G;
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
                let g = new V();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        ne([L.sH], H.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          ne([L.XI], H.prototype, "CopyToGiveaway", 1);
        let $ = H;
        const Y = class Sn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = Sn.s_GlobalInstance),
              (Sn.s_GlobalInstance += 1);
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
              let w =
                l.seconds_until_drawing !== void 0 &&
                l.seconds_until_drawing <= 0 &&
                l.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(g, w);
            }
          }
          SetupCountDown(l, g) {
            l !== void 0 &&
              l > 0 &&
              (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        ne([q.o], Y.prototype, "ClearRefreshInterval", 1),
          ne([q.o], Y.prototype, "ClearCountDown", 1),
          ne([q.o], Y.prototype, "SetupRefreshDataInterval", 1),
          ne([q.o], Y.prototype, "SetupCountDown", 1);
        let F = Y;
        function p(j, l) {
          const g = $.Get().GetInfoByInstance(j, l.m_myInstanceNumber);
          !g ||
            g.seconds_until_drawing === void 0 ||
            ((g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown());
        }
        function O(j, l) {
          const g = $.Get().GetInfoByInstance(j, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing !== void 0 &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            $.Get()
              .ReloadGiveaway(j, l.m_myInstanceNumber)
              .then((f) => {
                f && l.SetupCountDown(f.seconds_until_drawing, () => p(j, l));
              }));
        }
        function W(j) {
          const [l] = (0, k.useState)(new F()),
            g = (0, P.CH)();
          (0, k.useEffect)(
            () => (
              $.Get()
                .ReloadGiveaway(j, l.m_myInstanceNumber)
                .then((Q) => {
                  Q &&
                    (l.SetupRefreshDataInterval(Q, () => O(j, l)),
                    l.SetupCountDown(Q.seconds_until_drawing, () => p(j, l)),
                    g());
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, j, g],
          );
          const f = $.Get().GetInfoByInstance(j, l.m_myInstanceNumber),
            [w, Z, G] = (0, ie.q3)(() => [
              f?.winner_count,
              f?.closed,
              f?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !f || f.giveaway_id == null || !f.BStarted() || w === void 0,
            winner_count: w,
            closed: Z,
            seconds_until_drawing: G,
          };
        }
      },
      21042: (T, de, a) => {
        "use strict";
        a.d(de, { Sm: () => te, U: () => k, r3: () => c });
        var e = a(99412),
          U = a(72609),
          L = a(73259),
          ie = a(76559);
        function k(N, oe, ne, le) {
          const V = new L.lh();
          return (
            (V.type = oe),
            (V.clanSteamID = new ie.b(N, U.TS.EUNIVERSE, e.P3F, 0)),
            (V.GID = "fakeevent_" + q++),
            (V.visibility_state = L.zv.k_EEventStateUnlisted),
            (V.visibilityStartTime = le - 1),
            (V.jsondata.bSaleEnabled = !0),
            (V.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
            (V.jsondata.sale_vanity_id = ne),
            (V.jsondata.sale_header_offset = 0),
            (V.jsondata.sale_header_disable_top_margin = !1),
            V
          );
        }
        let q = 1234;
        function te(N, oe) {
          return {
            unique_id: q++,
            capsules: [],
            events: [],
            links: [],
            section_type: N,
            localized_label: [],
            default_label: oe,
          };
        }
        const P = "socialcontent_";
        function c() {
          return {
            platforms: [
              { label: L.Zf.Steam, checked: !0 },
              { label: L.Zf.Facebook, checked: !0 },
              { label: L.Zf.Twitter, checked: !0 },
              { label: L.Zf.Reddit, checked: !0 },
            ],
            doorsEnabled: !1,
            content_options: [
              {
                unique_id: P + Math.floor(Math.random() * 1e6),
                door: void 0,
                twitter_card: L.jR.SummaryLargeImage,
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
      55436: (T, de, a) => {
        "use strict";
        a.d(de, { r: () => le, z: () => oe });
        var e = a(7850),
          U = a(90626),
          L = a(16412),
          ie = a(25792),
          k = a(96538),
          q = a(18210),
          te = a(85599),
          P = a(17618),
          c = a.n(P),
          N = a(53424);
        const oe = (V) => {
            const { clanSteamID: H, fnImageSelectCallBack: $ } = V,
              [Y, F] = (0, U.useState)(""),
              p = (0, N.mr)(V.clanSteamID.GetAccountID()),
              O = () => V.closeModal && V.closeModal(),
              W = N.pU.GetFilteredClanImages(H, Y),
              j = (l) => {
                $(l), O();
              };
            return (0, e.jsx)(ie.tH, {
              children: (0, e.jsx)(k.x_, {
                onEscKeypress: O,
                children: (0, e.jsxs)(L.UC, {
                  children: [
                    (0, e.jsx)(L.Y9, {
                      children: (0, q.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(L.nB, {
                      children: (0, e.jsxs)(L.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, q.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(L.pd, {
                            placeholder: (0, q.we)("#ClanImageChooser_Search"),
                            value: Y,
                            onChange: (l) => F(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: P.ImagesOuterContainer,
                            children: p
                              ? (0, e.jsx)(te.t, {
                                  size: "medium",
                                  string: (0, q.we)("#Loading"),
                                })
                              : W.length > 0
                                ? W.map((l) =>
                                    (0, e.jsx)(
                                      ne,
                                      {
                                        clanImage: l,
                                        searchStringHilight: Y,
                                        fnImageClick: j,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : Y.trim().length == 0
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
                    (0, e.jsx)(L.wi, {
                      children: (0, e.jsx)(L.$n, {
                        onClick: O,
                        children: (0, q.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          ne = (V) => {
            const { clanImage: H, searchStringHilight: $, fnImageClick: Y } = V;
            let F = H.file_name ? H.file_name : "",
              p = le($, F, String(H.imageid), P.Hilight);
            return (0, e.jsxs)("div", {
              className: P.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: P.Image,
                  style: { backgroundImage: `url( '${H.thumb_url}' )` },
                  onDoubleClick: () => Y(H),
                }),
                (0, e.jsx)("div", {
                  className: P.ImageFilename,
                  title: F,
                  children: p,
                }),
              ],
            });
          };
        function le(V, H, $, Y) {
          let F = [];
          if (V.length > 0) {
            let p = H.toLocaleLowerCase();
            for (let O = 0; O < H.length; ) {
              let W = p.indexOf(V, O);
              if (W < 0) {
                F.push(
                  (0, e.jsx)(
                    "span",
                    { children: H.substring(O) },
                    $ + "_" + String(O),
                  ),
                );
                break;
              } else
                O < W &&
                  F.push(
                    (0, e.jsx)(
                      "span",
                      { children: H.substring(O, W) },
                      $ + "_" + String(O),
                    ),
                  ),
                  F.push(
                    (0, e.jsx)(
                      "span",
                      { className: Y, children: H.substr(W, V.length) },
                      $ + "_" + String(O),
                    ),
                  ),
                  (O = W + V.length);
            }
          } else F.push((0, e.jsx)("span", { children: H }, $ + "_null"));
          return F;
        }
      },
      24806: (T, de, a) => {
        "use strict";
        a.d(de, { Ng: () => Y });
        var e = a(7850),
          U = a(75844),
          L = a(90626),
          ie = a(99412),
          k = a(32093),
          q = a(50109),
          te = a(95695),
          P = a.n(te),
          c = a(36707),
          N = a(18210),
          oe = a(92264),
          ne = a(30096),
          le = a(71421),
          V = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          $ = (O, W, j, l) => {
            for (
              var g = l > 1 ? void 0 : l ? H(W, j) : W, f = O.length - 1, w;
              f >= 0;
              f--
            )
              (w = O[f]) && (g = (l ? w(W, j, g) : w(g)) || g);
            return l && g && V(W, j, g), g;
          };
        let Y = class extends L.Component {
          GenerateLanguageOptions() {
            let O = [];
            const {
              fnFilterLanguage: W,
              fnLangHasData: j,
              fnLastUpdateRTime: l,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              O.push(
                (0, e.jsx)(
                  "option",
                  {
                    value: ie.xPp,
                    children: (0, N.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let f = new Array();
            const w = this.props.realms || [k.TU.k_ESteamRealmGlobal];
            for (const G of N.A0.GetLanguageListForRealms(w)) {
              if (W && !W(G)) continue;
              const Q = (0, ie.LgB)(G),
                re = (0, N.we)("#Language_" + Q),
                me = !!(g && g(G));
              f.push({ eLang: G, sLocName: re, bSupported: me });
            }
            f.sort((G, Q) =>
              G.bSupported != Q.bSupported
                ? G.bSupported
                  ? -1
                  : 1
                : G.sLocName.localeCompare(Q.sLocName),
            );
            let Z = !1;
            for (const G of f) {
              G.bSupported != Z &&
                (O.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: P().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, N.we)(
                        G.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    G.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Z = G.bSupported));
              const Q = j && j(G.eLang),
                re = l && l(G.eLang);
              let me = G.sLocName;
              re &&
                re !== 0 &&
                ((me += " "),
                (me += (0, N.we)(
                  "#Language_Last_Update",
                  (0, N.$z)(re) +
                    " @ " +
                    (0, oe.KC)(re, { bForce24HourClock: !1 }),
                ))),
                O.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: G.eLang,
                      className: (0, c.A)(
                        { [P().LanguageWithContent]: Q },
                        G.bSupported
                          ? P().SupportedLanguage
                          : P().UnsupportedLanguage,
                      ),
                      children: me,
                    },
                    "langpicker" + G.eLang + (Q ? "_hasdata" : ""),
                  ),
                );
            }
            return O;
          }
          OnLanguageChange(O) {
            const { fnOnLanguageChanged: W, selectedLang: j } = this.props;
            let l = Number.parseInt(O.currentTarget.value);
            l != j && W && W(l);
          }
          render() {
            const { selectedLang: O, bDisabled: W, strTooltip: j } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(le.he, {
              toolTipContent: j,
              children: (0, e.jsx)("select", {
                value: O,
                onChange: this.OnLanguageChange,
                disabled: W,
                children: l,
              }),
            });
          }
        };
        $([ne.oI], Y.prototype, "OnLanguageChange", 1), (Y = $([U.PA], Y));
        function F(O) {
          const [W, j] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(Y, {
            selectedLang: j,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !W,
            strTooltip: W ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function p(O) {
          const { fnLangHasData: W } = O;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const j = useObserver(() => {
            const l = [];
            for (let g = k_ELanguage_English; g < k_ELanguage_MAX; ++g)
              l[g] = !!(W && W(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(j), [j]),
            jsx(Fragment, {})
          );
        }
      },
      14069: (T, de, a) => {
        "use strict";
        a.d(de, { _: () => fo });
        var e = a(7850),
          U = a(99412),
          L = a(19298),
          ie = a(20169),
          k = a(65946),
          q = a(76789),
          te = a.n(q),
          P = a(36707),
          c = a(18210),
          N = a(3166),
          oe = a(68266);
        function ne(o) {
          return o.jsondata.sale_logo_cross_promo_only
            ? !1
            : (o.jsondata.localized_sale_logo?.filter(Boolean).length ?? 0) > 0;
        }
        function le(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, k.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: te().SalePageLogoCtn,
                  href: N.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(V, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, P.A)(te().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(V, { ...o }),
                })
            : null;
        }
        function V(o) {
          const { eventModel: t, language: n } = o,
            s = (0, oe.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var H = a(28604),
          $ = a(36631),
          Y = a(64387);
        function F(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: Y.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var p = a(90626),
          O = a(73259),
          W = a(25792),
          j = a(52393),
          l = a.n(j),
          g = a(95695),
          f = a.n(g),
          w = a(82054);
        function Z(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)(W.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, P.A)(
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
                      !N.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function G(o) {
          const {
              event: t,
              language: n,
              children: s,
              bIsPreview: r,
              personalizedCarousels: i,
            } = o,
            d = p.useRef(null),
            m = (0, oe.m0)(t, "sale_header", n),
            [u] = (0, k.q3)(() => [t.jsondata.sale_sub_menu]);
          p.useEffect(() => {
            if (!m) return;
            const C = new Image();
            (C.onload = () => {
              const y = (100 * C.width) / 950 + "%";
              d.current && d.current.style.setProperty("--background-scale", y);
            }),
              (C.src = m);
          }, [m]);
          const h = t.jsondata.sale_sections?.some(
              (C) => C.section_type === "contenthubmaincarousel",
            ),
            v =
              t.jsondata.item_source_type === O.w.k_EContentHub &&
              ((t.jsondata.sale_vanity_id &&
                t.jsondata.sale_vanity_id.includes("contenthubsalepage_")) ||
                h),
            x = m ? `url(${m})` : "none";
          return (0, e.jsxs)(e.Fragment, {
            children: [
              u
                ? (0, e.jsx)(w.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: u,
                    styleVariation: w.g.k_SubMenu,
                    personalizedCarousels: i,
                  })
                : (0, e.jsx)(F, { strURL: m }),
              (0, e.jsx)("div", {
                className: (0, P.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: v,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, P.A)(
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
                    m && t.jsondata.sale_background_repeat == "coverBlur"
                      ? (0, e.jsx)("img", {
                          className: (0, P.A)(
                            f().SalePageBackground,
                            f().BackgroundImage,
                            f().Blur,
                          ),
                          src: m,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, P.A)(
                            f().SalePageBackground,
                            f().BackgroundImage,
                          ),
                          style: {
                            backgroundImage: x,
                            backgroundRepeat: t.jsondata.sale_background_repeat,
                          },
                        }),
                    (0, e.jsx)(Z, { event: t, bIsPreview: r }),
                    (0, e.jsx)(e.Fragment, { children: s }),
                  ],
                }),
              }),
            ],
          });
        }
        var Q = a(26589),
          re = a(39905),
          me = a(50909),
          Fe = a.n(me);
        function jt(o) {
          const { eventModel: t } = o,
            { data: n } = (0, Q.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, N.yK)() == "community"
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
          Ne = a.n(st),
          ze = a(53107);
        function zt(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, U.sfN)(N.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, P.A)(
                  Ne().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: re.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(rt, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, P.A)(
                  Ne().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: re.Z.LocalizeReact(
                  "#SalePresented_By_Multi",
                  t
                    .slice(0, t.length - 1)
                    .map((s, r) =>
                      (0, e.jsxs)(
                        p.Fragment,
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
          return (0, e.jsx)(ze.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: Ne().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var Ht = a(60480),
          bt = a(92757),
          Ue = a(18994),
          He = a(56412),
          wt = a(86515),
          yt = a(32279),
          Wt = a(39153),
          it = a(61478);
        function Kt(o) {
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
        var Vt = a(85671),
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
            { data: s } = (0, Q.hM)(n ? o.GetAccountID() : 0);
          return n && Xt(s, t);
        }
        function Bt(o) {
          const { clanSteamID: t, id: n } = o;
          return At(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, P.A)(
                  o.className,
                  o.requireAdmin
                    ? g.ValveOnlyAdminBackground
                    : g.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var ee = a(16412);
        const Je = 12,
          Pt = 240;
        function $t(o) {
          const { event: t } = o,
            [n] = (0, lt.Q)(Ue.QS, void 0),
            [s, r] = p.useState(!1),
            i = (0, N.Tc)("rgMLRecommenderWishlist", "application_config"),
            d = Array.isArray(i) && i.length > 0 && Number.isInteger(i[0]);
          return !t.BIsNextFest() || !d || n == Ue.sQ.Random || (0, O.UR)(t) > 0
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
            [s, r] = p.useState(void 0);
          (0, dt.zX)(n, Yt.Xh);
          const [i, d] = p.useState(void 0),
            [m, u] = p.useState(""),
            h = t.jsondata.sale_ml_recommender_weight_exponent || O.ld,
            v = parseFloat(m),
            x = i ?? (0, Lt.JE)(t),
            C = v || h,
            _ = p.useMemo(() => (0, gt.a0)(n, n, (D) => D, x, C), [n, x, C]),
            y = p.useMemo(() => new Map(n.map((D, X) => [D, X])), [n]),
            A = p.useMemo(() => new Map(_.map((D, X) => [D, X])), [_]),
            b = n.length,
            S = (D) => Zt.A.Get().GetApp(D)?.GetName() ?? `App ${D}`,
            M = (D) => `hsl(${Math.round((240 * y.get(D)) / b)}, 80%, 65%)`,
            B = (D, X) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, P.A)(xe().Row, s == D && xe().Highlighted),
                  style: { height: Je, color: M(D) },
                  title: `${S(D)} (${D}): recommended #${y.get(D) + 1}, shuffled to #${A.get(D) + 1}`,
                  onMouseEnter: () => r(D),
                  children: X,
                },
                D,
              ),
            K = (D, X) =>
              (0, e.jsx)(
                "line",
                {
                  x1: 0,
                  y1: (y.get(D) + 0.5) * Je,
                  x2: Pt,
                  y2: (A.get(D) + 0.5) * Je,
                  stroke: X ? "white" : M(D),
                  strokeWidth: X ? 2 : 1,
                  strokeOpacity: X ? 1 : s === void 0 ? 0.6 : 0.15,
                },
                D,
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
                  (0, e.jsx)(ee.$n, {
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
                        placeholder: String(h),
                        value: m,
                        onChange: (D) => u(D.target.value),
                      }),
                    ],
                  }),
                  (i !== void 0 || m != "") &&
                    (0, e.jsx)(ee.$n, {
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
                      n.map((D, X) => B(D, `#${X + 1} ${S(D)}`)),
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
                        width: Pt,
                        height: b * Je,
                        children: [
                          n.filter((D) => D != s).map((D) => K(D, !1)),
                          s !== void 0 && y.has(s) && K(s, !0),
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
                      _.map((D) => B(D, `#${y.get(D) + 1} ${S(D)}`)),
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
              (0, e.jsx)(Vt.g, {
                eventModel: t,
                fnOnUpdateSaleDayIndex: n,
                addtionalAdminButtons: s,
                bSupportsSticky: !0,
              }),
            ],
          });
        }
        var Ve = a(179),
          _e = a(50109),
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
            m,
            u = 0;
          const { selectedTabBackgroundDef: h, nTabSaleSectionIndex: v } = en(
            t,
            n,
          );
          if (o?.enabled) {
            const x = o.groups?.length;
            if (
              (o.groups?.forEach((C, _) => {
                if (u >= t.length || t[u].section_type == "tabs") return;
                const y = new Array();
                for (
                  let b = 0;
                  b < (C?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++b, ++u
                ) {
                  const M = t[u].unique_id;
                  y.push(M),
                    r.set(M, C.background_id),
                    b === 0 && i.set(M, C.background_id);
                }
                if (
                  (s.set(C.background_id, {
                    nBackgroundGroupID: C.background_id,
                    sectionUniqueIDs: y,
                    nSaleSectionLastIndex: u - 1,
                    nUniqueIDNextSaleSection:
                      u < t.length && (v === void 0 || u < v)
                        ? t[u].unique_id
                        : void 0,
                  }),
                  _ + 1 == x && o.last_group_until_cover_section_until_end)
                )
                  for (
                    let b = u;
                    b < t.length &&
                    (!h || !h.enabled || b < v) &&
                    !(t[b].section_type == "tabs" && h?.enabled);
                    ++b
                  ) {
                    const M = t[b].unique_id;
                    r.set(M, C.background_id);
                  }
              }),
              u < t.length && (v === void 0 || u < v) && (d = t[u].unique_id),
              h?.enabled && v !== void 0)
            ) {
              let C = v;
              const _ = h.groups.length;
              for (
                h.groups.forEach((y, A) => {
                  if (C >= t.length) return;
                  const b = new Array();
                  for (
                    let B = 0;
                    B < y.num_sections && C < t.length;
                    ++B, ++C
                  ) {
                    const K = t[C],
                      D = K.unique_id;
                    (0, Xe.bF)(n, K)
                      ? (b.push(D),
                        r.set(D, y.background_id),
                        B === 0 && i.set(D, y.background_id))
                      : --B;
                  }
                  let S = C;
                  for (; S < t.length && !(0, Xe.bF)(n, t[S]); ) S += 1;
                  if (
                    (s.set(y.background_id, {
                      nBackgroundGroupID: y.background_id,
                      sectionUniqueIDs: b,
                      nSaleSectionLastIndex: C - 1,
                      nUniqueIDNextSaleSection:
                        S < t.length ? t[S].unique_id : void 0,
                    }),
                    A + 1 == _ && h.last_group_until_cover_section_until_end)
                  )
                    for (let B = C; B < t.length; ++B) {
                      const K = t[B];
                      if (K.section_type == "tabs" && h?.enabled) break;
                      (0, Xe.bF)(n, K) && r.set(K.unique_id, y.background_id);
                    }
                });
                C < t.length && !(0, Xe.bF)(n, t[C]);
              )
                C++;
              C < t.length && (m = t[C].unique_id);
            }
          } else t?.length > 0 && (d = t[0].unique_id);
          return {
            mapGroupToSections: s,
            nFirstSaleSectionIDWithoutGroup: d,
            mapSectionToGroup: r,
            mapFirstSectionToGroup: i,
            selectedTabBackgroundDef: h,
            nTabSaleSectionIndex: v,
            nFirstTabSectionIDWithoutGroup: m,
          };
        }
        var ve = a(29630),
          nn = a(68434),
          pt = a(41635),
          Te = a(81416);
        function Gt(o, t, n, s) {
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
            i = (0, _e.E)(),
            d = p.useCallback(
              (_, y) => {
                ht.set(r.nBackgroundGroupID, y);
              },
              [r],
            ),
            m = (0, be.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const _ = (0, U.LgB)(i),
              y =
                _ in t.localized_background_art
                  ? _
                  : c.A0.GetLanguageFallback(mt.TS.LANGUAGE),
              A = t.localized_background_art[y];
            A && (u = ve.zU.GenerateURLFromHashAndExt(s.clanSteamID, A));
          }
          let h = "linear-gradient(";
          switch (t.gradient_setting) {
            case "top-to-bottom":
              h += "to bottom,";
              break;
            case "left-to-right":
              h += "to right,";
              break;
            case "top-left-to-bottom-right":
              h += "to bottom right,";
              break;
            case "single-color":
              h = void 0;
              break;
          }
          t.background_color1 &&
          t.background_color2 &&
          t.background_color1 != t.background_color2
            ? ((h += " " + t.background_color1),
              (h += ", " + t.background_color2),
              (h += ")"))
            : (h = null);
          const v =
              t.background_color1 &&
              (!t.background_color2 ||
                t.gradient_setting == "single-color" ||
                t.background_color1 == t.background_color2),
            x = t.scaling_setting !== "cover" && t.position_setting !== "unset",
            C = {
              backgroundImage: h ? `url(${u}), ${h}` : `url(${u})`,
              backgroundSize: t.scaling_setting,
              backgroundRepeat: t.repeat_setting,
              backgroundPosition: x ? t.position_setting : void 0,
              backgroundColor: v ? t.background_color1 : void 0,
              overflowY: "hidden",
            };
          return (0, e.jsx)("div", {
            ref: m,
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
          we = a(88003),
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
            [i, d] = (0, p.useState)(() => t || "rgba(255, 255, 255, 1)"),
            m = (0, p.useCallback)(async () => {
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
              !!s && (0, e.jsx)(ee.JU, { children: s }),
              (0, e.jsx)(un.xk, {
                onChange: (u) => {
                  const h = pn(u);
                  d(h), n(h);
                },
                color: i,
                disableAlpha: r,
                className: et().ColorPickerCtn,
              }),
              (0, e.jsx)("div", {
                className: et().EyeDropperCtn,
                children: (0, e.jsx)(We.Gq, {
                  toolTipContent: re.Z.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, e.jsx)(ee.$n, {
                    className: et().EyeDropperBtn,
                    onClick: m,
                    children: (0, e.jsx)(mn.O7b, {}),
                  }),
                }),
              }),
            ],
          });
        }
        function E(o) {
          const {
              color: t,
              onChange: n,
              onRequestClose: s,
              disableAlpha: r,
              strTitle: i,
            } = o,
            d = (0, p.useRef)(null);
          return (
            (0, p.useEffect)(() => {
              const m = d.current?.ownerDocument ?? document,
                u = (v) => {
                  d.current && !d.current.contains(v.target) && s();
                },
                h = (v) => {
                  v.key === "Escape" && s();
                };
              return (
                m.addEventListener("pointerdown", u, !0),
                m.addEventListener("keydown", h, !0),
                () => {
                  m.removeEventListener("pointerdown", u, !0),
                    m.removeEventListener("keydown", h, !0);
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
        function R() {
          return {
            openColorPicker: (0, p.useCallback)((t, n) => {
              let s = null;
              const r = () => s?.Hide();
              s = (0, gn.lX)(
                (0, e.jsx)(E, {
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
        var J = a(13447),
          z = a.n(J),
          se = a(32190),
          ge = a.n(se),
          fe = a(76559),
          ye = a(75909),
          pe = a(53424),
          Ee = a(72604),
          ke = a(41735),
          Be = a.n(ke),
          tt = a(14947),
          Ge = a(9046),
          Dn = Object.defineProperty,
          Hn = Object.getOwnPropertyDescriptor,
          Wn = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Hn(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && Dn(t, n, r), r;
          };
        const jn = class zn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, tt.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                N.TS.COMMUNITY_BASE_URL +
                "gid/" +
                n.ConvertTo64BitString() +
                "/hasclanimagefile",
              d = { image_hash_and_ext: s, lang: "" + r };
            return (
              (await Be().get(i, { params: d, cancelToken: t && t.token })).data
                .success == Ee.R
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
                U.bP9,
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
            for (let m = U.Bhc; m < U.bP9; ++m)
              i.push(zn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, m));
            const d = await Promise.all(i);
            (0, tt.h5)(() => {
              for (let m = U.Bhc; m < U.bP9; ++m)
                d[m] &&
                  (this.m_curLocImageGroup.localized_images[m] =
                    ve.zU.GenerateURLFromHashAndExtAndLang(
                      s,
                      r,
                      Ge.wI.full,
                      m,
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
                    Ge.wI.full,
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
                    Ge.wI.full,
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
        Wn([tt.sH], jn.prototype, "m_curLocImageGroup", 2);
        let Kn = jn;
        const Ae = new Kn();
        var nt = a(38410),
          Mt = a(34592),
          bn = a(75844),
          fn = a(32093),
          In = a(72849),
          Vn = a(64),
          Qn = a(72739),
          It = a(82734);
        function Yn(o, t) {
          const n = p.useRef(void 0),
            s = p.useCallback(
              (d) => {
                d.currentTarget.files.length > 0 &&
                  (o(d.currentTarget.files), (d.currentTarget.value = ""));
              },
              [o],
            ),
            r = p.useCallback(() => n.current.click(), []);
          return [
            Qn.createPortal(
              (0, e.jsx)("form", {
                onSubmit: wn,
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
          const [t, n] = p.useState(!1),
            s = p.useCallback((u) => {
              ((u.dataTransfer.files && u.dataTransfer.files[0]) ||
                (u.dataTransfer.types && u.dataTransfer.types[0] == "Files")) &&
                n(!0);
            }, []),
            r = p.useCallback((u) => {
              It.NO(u) && n(!1);
            }, []),
            i = p.useCallback(() => n(!1), []),
            d = t ? wn : void 0,
            m = p.useCallback(
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
              onDrop: m,
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
        function wn(o) {
          o.preventDefault();
        }
        function wo(o) {
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
            [m, u] = Yn(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, P.A)(
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
                  m,
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
          Se = a.n(qn),
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
            [m, u] = (0, k.q3)(() => [
              t.GetUploadImages(),
              _e.O.Get().GetCurEditLanguage(),
            ]),
            h = p.useCallback(
              async (C) => {
                let _ = Array.from(C),
                  y = !0;
                for (let A = 0; A < _.length; A++) {
                  const b = _[A],
                    { language: S } = (0, nt.jj)(b?.name, u);
                  try {
                    const M = (0, nt.PD)(S, u, d);
                    (y = await t.AddImageForLanguage(b, M)),
                      y ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            A +
                            " file=" +
                            b.name,
                        ),
                        (0, we.pg)(
                          (0, e.jsx)(he.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              b.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (M) {
                    let B = (0, Mt.H)(M);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + B.strErrorMsg,
                      B,
                    ),
                      (0, we.pg)(
                        (0, e.jsx)(he.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            B.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                }
                return y;
              },
              [u, t, d],
            ),
            v = p.useMemo(
              () =>
                i instanceof Array
                  ? i
                  : [
                      (0, e.jsx)(
                        p.Fragment,
                        { children: i },
                        "elAdditonalButtons",
                      ),
                    ],
              [i],
            );
          (0, k.q3)(() =>
            m.map((C) => ({ a: C.GetCurrentImageOption(), b: C.language })),
          );
          const x = async () => {
            const C = await t.UploadAllImages(r);
            n?.(C);
          };
          return (0, e.jsxs)(Xn, {
            onDropFiles: h,
            elAdditonalButtons: v,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(p.Fragment, {
                children: (0, e.jsx)("div", {
                  className: Se().UploadPreviewCtn,
                  children: m.map((C) =>
                    (0, e.jsx)(
                      yn,
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
            [s] = (0, k.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: Se().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)(ee.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)(ee.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function yo(o, t, n, s, r) {
          let i = new Array();
          return (
            o.GetUploadImages().forEach((d) => {
              i.push(
                jsx(
                  yn,
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
        const yn = (0, bn.PA)(aa);
        function aa(o) {
          const t = (_) => {
              if (_ instanceof Vn.M7) {
                _.ResetImage();
                const y = window,
                  A = (0, e.jsx)($n.q, {
                    ownerWin: y,
                    uploadFile: _,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || In.bg.dU,
                  });
                (0, we.HT)(A, y, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
                });
              } else
                console.log(
                  "ImageUploadEmbeddedDialog trying to crop non image",
                  _.fileType,
                  JSON.stringify(_.GetCurrentImageOption()),
                );
            },
            { asset: n, fnOnRemove: s, languageRealms: r } = o,
            i = n.ImageOptions?.map((_) => {
              let y = _?.fnGetLabelText(),
                A;
              _.bEnforceDimensions && (y += ` - ${_.width}x${_.height}`),
                _.bDeprecated &&
                  ((y += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (A = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let b;
              return (
                (n.BIsOriginalMinimumDimensions(_) &&
                  n.FileTypeMatchesImageTypes(_)) ||
                  (b = Se().ImageDimensionTooSmall),
                { label: y, data: _, strOptionClass: b, tooltip: A }
              );
            }).filter((_) => !_.data.bHiddenFromDropdown),
            d = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            m = n.BSupportsLanguages()
              ? ra(
                  c.A0.GetLanguageListForRealms(
                    r ?? [fn.TU.k_ESteamRealmGlobal],
                  ),
                )
              : null,
            u = n.IsValidAssetType(o.forceResolution, o.forceFileType),
            h = n.status == "pending";
          let v = d[n.status];
          n.status == "pending" &&
            (u.needsCrop
              ? (v = (0, c.we)("#ImageUpload_NeedsCrop"))
              : u.error && (v = (0, c.we)("#ImageUpload_Invalid")));
          let x;
          const C = n.GetCurrentImageOption();
          return (
            C && (x = i?.find((_) => _.data.sKey == C.sKey)?.data),
            x || (x = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: Se().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: Se().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(xt.sED, {}),
                }),
                (0, e.jsx)(oa, { asset: n }),
                m &&
                  (0, e.jsx)(ee.m, {
                    strDropDownClassName: f().DropDownScroll,
                    rgOptions: m,
                    selectedOption: n.language,
                    onChange: (_) => (n.language = _.data),
                    disabled: !h,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(ee.m, {
                    label: n.GetImageOptionLabel(),
                    rgOptions: i,
                    selectedOption: x,
                    onChange: (_) => n.SetCurrentImageOption(_.data),
                    disabled: !h,
                  }),
                h &&
                  u.warnings?.map((_, y) =>
                    (0, e.jsx)(
                      "div",
                      { className: Se().UploadPreviewWarning, children: _ },
                      `warning${y}`,
                    ),
                  ),
                h &&
                  u.messages?.map((_, y) =>
                    (0, e.jsx)(
                      "div",
                      { className: Se().UploadPreviewMessage, children: _ },
                      `message${y}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, P.A)({
                    [f().FlexColumnContainer]: !0,
                    [Se().UploadPreviewError]: n.status == "failed",
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
                  className: Se().UploadPreviewError,
                  children: n.message,
                }),
                h &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: Se().UploadPreviewError,
                    children: u.error,
                  }),
                h &&
                  u.needsCrop &&
                  (0, e.jsx)(ee.jn, {
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
                className: Se().PreviewImgCtn,
                onClick: (n) =>
                  (0, we.pg)((0, e.jsx)(sa, { asset: t }), (0, It.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: Se().PreviewImgInfo,
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
                className: Se().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: Se().PreviewImgInfo,
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
            if (s == U.X51) continue;
            const r = (0, c.we)("#Language_" + (0, U.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Ot = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Ot || {});
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
          De = a.n(la),
          An = a(49460);
        function ca(o) {
          const { fnSetImageSearch: t } = o,
            n = (0, p.useRef)(null);
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
        const da = p.memo(function (t) {
          const {
            fileNameSearch: n,
            clanAccountID: s,
            imageInsertCallBack: r,
            fnOnExpandImage: i,
            showImageActions: d = !0,
            InternalOpenLocalizeImageGroup: m,
          } = t;
          return (0, e.jsx)(Bn, {
            clanAccountID: s,
            fileNameSearch: n,
            children: (u, h) =>
              u.map((v) =>
                (0, e.jsx)(
                  ga,
                  {
                    clanImage: v,
                    searchStringHilight: h,
                    imageInsertCallBack: r,
                    showImageActions: d,
                    fnOnOpenLocalizedImageGroup: m,
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
            const m = fe.b.InitFromClanID(t);
            let u = pe.pU.GetLoadState(m);
            return u && u.loaded
              ? (0, e.jsx)(
                  "div",
                  {
                    className: De().ResultNotification,
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
                      className: De().ErrorCode,
                      children: (0, c.we)("#ImagePicker_Error", u.errMsg),
                    },
                    "ImagePicker_Result",
                  )
                : (0, e.jsx)(
                    "div",
                    {
                      className: De().ResultNotification,
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
            [m, u] = p.useState(!1),
            h = () => s(t, Ot.k_eInsertFullImage),
            v = () => s(t, Ot.k_eInsertVideo),
            x = () => s(t, Ot.k_eInsertThumbnail),
            C = (ae) => {
              t.url &&
                (ae.dataTransfer.setData("text", t.url),
                pe.pU.GetClanImageDragListener().forEach((ce) => {
                  let Le = fe.b.InitFromClanID(t.clanAccountID);
                  ce(Le, !0);
                }));
            },
            _ = (ae) => {
              t.url &&
                pe.pU.GetClanImageDragListener().forEach((ce) => {
                  let Le = fe.b.InitFromClanID(t.clanAccountID);
                  ce(Le, !1);
                });
            },
            y = (ae) => {
              (0, we.pg)(
                (0, e.jsx)(he.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: b,
                  onCancel: S,
                  closeModal: S,
                  children: (0, e.jsxs)(p.Fragment, {
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
                (0, It.uX)(ae) ?? window,
              );
            },
            A = (ae) => {
              console.log("ClanImageWrapper on delete error: " + ae),
                (0, we.pg)(
                  (0, e.jsx)(he.KG, {
                    strTitle: (0, c.we)("#Error_FailureNotice"),
                    strDescription: (0, c.we)(
                      "#EventDisplay_DeleteEvent_Error",
                    ),
                    children: (0, e.jsx)("p", { children: ae }),
                  }),
                  window,
                );
            },
            b = () => {
              u(!0);
              let ae = fe.b.InitFromClanID(t.clanAccountID);
              pe.pU
                .DeleteClanImage(ae, t)
                .then((ce) => {
                  ce.success != Ee.R && A((0, Mt.H)(ce).strErrorMsg), u(!1);
                })
                .catch((ce) => {
                  A((0, Mt.H)(ce).strErrorMsg), u(!1);
                }),
                S();
            },
            S = () => {},
            M = () => {
              r && r(t);
            },
            B = t.file_name ? t.file_name : "",
            K = (0, ia.r)(n, B, String(t.imageid), De().Hilight),
            D = ve.zU.BIsClanImageVideo(t),
            X = i && !m && !D,
            ue = i && !m && !D,
            Me = i && !m && D,
            Pe = i && !m && !D;
          return (0, e.jsx)(qe.K, {
            placeholderHeight: "100vh",
            className: De().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: De().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: De().ImageWrapper,
                  style: {
                    backgroundImage: D ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: C,
                  onDragEnd: _,
                  onDoubleClick: h,
                  onClick: M,
                  children: (0, e.jsx)(Pn, {
                    clanImage: t,
                    className: De().VideoBackground,
                  }),
                }),
                X &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: h,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                m &&
                  (0, e.jsx)(Qe.t, {
                    size: "medium",
                    className: De().FloatingThrobber,
                  }),
                ue &&
                  (0, e.jsx)("span", {
                    className: De().Thumb,
                    onClick: x,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
                  }),
                Pe &&
                  d &&
                  (0, e.jsx)(ua, {
                    bDeleting: m,
                    clanImage: t,
                    fnOnOpenLocalizedImageGroup: d,
                  }),
                Me &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: v,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !m &&
                  (0, e.jsx)("span", {
                    className: De().Delete,
                    onClick: y,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: De().ImageWrapperFilename,
                  title: B,
                  children: K,
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
            { data: r } = (0, Q.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, P.A)(De().Localized, f().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function Pn(o) {
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
                  ? jsx(Pn, { clanImage: t })
                  : jsx("img", { src: t.url, loading: "lazy" }),
              }),
              jsx("div", { className: styles.Name, children: t.file_name }),
            ],
          });
        }
        function ha(o) {
          const { clanSteamID: t, closeModal: n, OnClanImageSelected: s } = o,
            r = p.useCallback(
              (m, u) => {
                s?.(m, u), n?.();
              },
              [s, n],
            ),
            [i, d] = p.useState("");
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
                  (0, we.pg)(
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
            [m] = (0, k.q3)(() => [_e.O.Get().GetCurEditLanguage()]),
            u = (0, ye.zO)(t, n, s),
            h = o.uploaderOverride || u,
            [v, x] = p.useState(!1),
            C = p.useCallback(
              async (A, b) => {
                if (!v) {
                  x(!0);
                  try {
                    const { language: S } = (0, nt.jj)(A.file_name ?? "", m),
                      M = (0, nt.PD)(S, m, d);
                    await h.AddExistingClanImage(A, M);
                  } catch (S) {
                    let M = (0, Mt.H)(S);
                    console.error("AddExistingClanImage: " + M.strErrorMsg, M),
                      (0, we.pg)(
                        (0, e.jsx)(he.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            M.strErrorMsg ?? "",
                          ),
                        }),
                        window,
                      );
                  }
                  x(!1);
                }
              },
              [v, h, m, d],
            ),
            _ = p.useMemo(
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
            y = (A) => {
              for (const b of A) {
                const S = b.uploadResult;
                if (S?.origimagehash) {
                  const M = (0, nt.PD)(S.language, m, d);
                  Ae.AddLocalizeImageUploaded(S.origimagehash, M);
                } else {
                  const M = pe.pU.GetClanImageByImageHash(
                      t,
                      S?.image_hash ?? "",
                    ),
                    B = b.image.GetCurrentImageOption();
                  if (M && B) {
                    const K = (0, nt.PD)(b.image.language, m, d);
                    i(B.artworkType, M, K);
                  }
                }
              }
            };
          return (0, e.jsx)(ta, {
            ...o,
            imageUploader: h,
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
              : _,
            fnUploadComplete: y,
          });
        }
        var Ct = a(87498),
          fa = a(25359),
          Ie = a.n(fa),
          Ia = a(24806);
        function Gn(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [m, u] = (0, p.useState)(s),
            h = fe.b.InitFromClanID(t.clanAccountID),
            v = (0, k.q3)(() =>
              ve.zU.GenerateURLFromHashAndExt(h, ve.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(he.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, m),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, P.A)(f().FlexColumnContainer, Ie().ReassignCtn),
              children: [
                (0, e.jsx)("div", {
                  className: Ie().ImagePreviewContainer,
                  children: (0, e.jsx)("img", {
                    className: Ie().ArtworkPreview,
                    src: v,
                  }),
                }),
                (0, e.jsx)(Ia.Ng, {
                  selectedLang: m,
                  fnLangHasData: d,
                  fnOnLanguageChanged: u,
                  realms: i,
                }),
              ],
            }),
          });
        }
        var Rt = a(56330);
        function xn(o) {
          if (!o) return o;
          const t = o.lastIndexOf(".");
          return t === -1 ? o : o.substring(0, t);
        }
        var xa = a(58483),
          Ca = a(82385),
          _a = a(94520),
          Ea = a(95174),
          Sa = a(9709),
          Cn = a(64868),
          Da = a(44894);
        const ja =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var ba = a(11243);
        function wa(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, pe.mr)(t.GetAccountID());
          const i = p.useMemo(() => {
              let h = new Array();
              const v = c.A0.GetLanguageListForRealms([
                fn.TU.k_ESteamRealmGlobal,
                fn.TU.k_ESteamRealmChina,
              ]);
              for (const x of v) {
                const C = n(x);
                if (C) {
                  const _ = (0, U.LgB)(x),
                    y = (0, c.we)("#Language_" + _);
                  h.push({ lang: x, strLang: _, locLang: y, imgHash: C });
                }
              }
              return (
                (h = h.sort((x, C) =>
                  x.locLang > C.locLang ? 1 : x.locLang < C.locLang ? -1 : 0,
                )),
                h
              );
            }, [n]),
            [d, m, u] = (0, Cn.uD)();
          return (0, e.jsxs)("div", {
            className: Ie().SelectImageLanguagesCtn,
            children: [
              (0, e.jsx)("div", {
                className: Ie().SelectImageTitle,
                children: (0, c.we)("#selectimage_uploaded_languages"),
              }),
              (0, e.jsx)("div", {
                className: Ie().LanguageListContainer,
                children: i.map((h) =>
                  (0, e.jsx)(
                    ya,
                    { langData: h, ...o },
                    "lang_select_" + t.GetAccountID() + " " + h.strLang,
                  ),
                ),
              }),
              !!r &&
                (0, e.jsxs)(ee.$n, {
                  onClick: m,
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
                    for (let h = 0; h < U.bP9; h++) s && r && s(h) && r(h);
                  },
                }),
              }),
            ],
          });
        }
        function ya(o) {
          const {
              clanSteamID: t,
              langData: n,
              langOverride: s,
              fnOnLanguagePreviewChange: r,
              fnOnArtworkLangChange: i,
              fnOnRemoveImage: d,
            } = o,
            [m, u] = (0, k.q3)(() => {
              const h = pe.pU.GetClanImageByImageHash(t, n.imgHash);
              let v = "";
              h &&
                (v = ve.zU.GenerateURLFromHashAndExtAndLang(
                  t,
                  ve.zU.GetHashAndExt(h),
                  Ge.wI.full,
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
            onClick: (h) => {
              let v = (0, U.sfN)(h.currentTarget.id);
              r(v);
            },
            children: [
              (0, e.jsx)("div", { className: u, children: n.locLang }),
              (0, e.jsxs)("span", {
                className: Ie().LanguageOptions,
                children: [
                  !!m &&
                    (0, e.jsx)("a", {
                      href: m,
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
            [m, u, h] = (0, Cn.uD)(),
            v = (0, k.q3)(() => {
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
                  src: ja,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)(W.tH, {
                children: (0, e.jsx)(he.EN, {
                  active: m,
                  children: (0, e.jsx)(Gn, {
                    clanImage: v,
                    lang: n.lang,
                    fnOnArtworkLangChange: s,
                    fnLangHasData: i,
                    realms: d,
                    closeModal: h,
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
                  src: Da.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)(W.tH, {
                children: (0, e.jsx)(he.EN, {
                  active: s,
                  children: (0, e.jsx)(he.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, U.LgB)(n.lang)),
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
          Ba = a(21659),
          Pa = a(15496),
          je = a.n(Pa),
          Ga = a(88812);
        function Ta(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            m = (0, Ba.c5)(),
            u = p.useCallback(
              (S) => {
                S.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            h = d || (0, U.sfN)(N.TS.LANGUAGE),
            [v, x, C] = (0, k.q3)(() => [
              t.GetSummaryWithFallback(h),
              t.GetNameWithFallback(h),
              t.BShowLibrarySpotlightText(),
            ]);
          let _ = "spotlight",
            y = Ge.wI.spotlight_main;
          (t.appid == 2434320 || N.TS.EUNIVERSE == U.Rv) &&
            ((_ = m
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (y = Ge.wI.full));
          let A =
            (0, Ga.WC)(n !== void 0 ? void 0 : t, _, h, y) ??
            (n !== void 0 ? [n] : []);
          i && A && (A = i(A));
          const b = v.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(p.Fragment, {
            children: (0, e.jsx)("div", {
              className: je().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(L.Z, {
                className: (0, P.A)(
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
                      rgSources: A,
                      onIncrementalError: (S, M, B) => r && r(M),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: je().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(_n.c, {
                        className: je().MajorEventImage,
                        rgSources: A,
                        onIncrementalError: (S, M, B) => r && r(M),
                      }),
                      (0, e.jsx)("div", {
                        className: je().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: je().MajoreEventImageContentContainer,
                        children:
                          C &&
                          (0, e.jsxs)("div", {
                            className: je().MajorEventContent,
                            children: [
                              (0, e.jsx)(_n.c, {
                                className: je().MajorEventSpotlightBackground,
                                rgSources: A,
                                onIncrementalError: (S, M, B) => r && r(M),
                              }),
                              (0, e.jsxs)("div", {
                                className: je().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: je().MajorEventTitle,
                                    children: x,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: je().MajorEventSummary,
                                    children: b,
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
        var Ma = a(79949),
          Ce = a.n(Ma);
        function Oa(o) {
          const {
              langOverride: t,
              artworkType: n,
              fnOnLanguagePreviewChange: s,
              clanSteamID: r,
              eventModel: i,
              partnerEventStore: d,
              fnOnRemoveImage: m,
              fnOnArtworkLangChange: u,
              realms: h,
              fnLangHasData: v,
              fnGetImageHashAndExt: x,
            } = o,
            C = x(n, t),
            _ = C
              ? ve.zU.GenerateURLFromHashAndExtAndLang(r, C, Ge.wI.full, t)
              : "",
            [y] = (0, k.q3)(() => [za(n, x)]);
          return y == 0
            ? (0, e.jsxs)("div", {
                className: Ie().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(Tn, {
                      imgURL:
                        N.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(Mn, {
                      imgURL:
                        N.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Ra, {
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
                      imgURL: _,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(Mn, {
                      imgURL: _,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Nt, { imgURL: _, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Nt, { imgURL: _, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Nt, { imgURL: _, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(Ua, {
                      imgURL: _,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(ka, { imgURL: _ }),
                  n === "sale_overlay" && (0, e.jsx)(Fa, { imgURL: _ }),
                  Ge.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: Sa.PreviewImg,
                      src:
                        Ae.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(_t, { imgURL: _ }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(_t, { imgURL: _ }),
                  n === "sale_logo" && (0, e.jsx)(_t, { imgURL: _ }),
                  n === "bestofyear_banner" && (0, e.jsx)(_t, { imgURL: _ }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(_t, { imgURL: _ }),
                  (0, e.jsx)(wa, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: m,
                    fnOnArtworkLangChange: u,
                    realms: h,
                    fnLangHasData: v,
                    fnGetImageHash: (A) => xn(x(n, A) ?? ""),
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
        function Ra(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = Ct.Fj[t],
            i = p.useMemo(
              () =>
                Na(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Nt, { lang: n, imgURL: i, event: s });
        }
        function Na(o, t) {
          const r = document.createElement("canvas");
          (r.width = 780), (r.height = 200);
          const i = r.getContext("2d"),
            d = 20;
          for (let h = 0; h < 200; h += d)
            for (let v = 0; v < 780; v += d)
              (i.fillStyle =
                (v / d + h / d) % 2 === 0 ? "#a405e3ff" : "#000000"),
                i.fillRect(v, h, d, d);
          const m = i.createLinearGradient(0, 0, 780, 0);
          m.addColorStop(0, "rgba(32,32,32,0.8)"),
            m.addColorStop(1, "rgba(60,60,60,0.8)"),
            (i.fillStyle = m),
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
            r = (0, _e.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(Ea.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function Mn(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, xa.LJ)(),
            [i, d, m, u, h] = (0, k.q3)(() => [
              n.GetNameWithFallback(t),
              n.GetDescriptionWithFallback(t),
              n.GetSubTitleWithLanguageFallback(t),
              n.type,
              n.AnnouncementGID,
            ]);
          let v = d
            ? (0, e.jsx)(_a.fh, {
                text: d || "",
                showErrorInfo: !1,
                event: n,
                languageOverride: _e.O.Get().GetCurEditLanguage(),
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
                className: (0, P.A)(
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
                              m ||
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
              u != U.Fwr &&
                (0, e.jsxs)(p.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Ce().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Ce().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, P.A)(
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
                          h,
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        const Nt = (o) => {
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
          _t = (o) =>
            (0, e.jsx)("div", {
              className: Ce().SaleHeaderPreviewContainer,
              children: (0, e.jsx)("img", {
                style: { width: "100%" },
                src: o.imgURL,
              }),
            });
        function za(o, t) {
          let n = 0;
          for (let s = U.Bhc; s < U.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var Ha = Object.defineProperty,
          Wa = Object.getOwnPropertyDescriptor,
          On = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Wa(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && Ha(t, n, r), r;
          };
        const Ka =
          "https://partner.steamgames.com/doc/store/localization#supported_languages";
        var Va = ((o) => (
          (o[(o.k_None = 0)] = "k_None"),
          (o[(o.k_Suggested = 1)] = "k_Suggested"),
          (o[(o.k_Required = 2)] = "k_Required"),
          (o[(o.k_Requested = 3)] = "k_Requested"),
          o
        ))(Va || {});
        function Qa(o) {
          const {
              artworkType: t,
              headerHint: n,
              appid: s,
              fnToggleMinimize: r,
              realms: i,
              eventModel: d,
              fnLangHasData: m,
              fnGetImageHashAndExt: u,
              fnSetImageURL: h,
              partnerEventStore: v,
            } = o,
            [x] = (0, dt.t7)(s, { include_assets: !0 }),
            [C, _] = (0, k.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            y = C == U.ajI;
          let A = null;
          n === 2
            ? (A = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (A = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (A = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let b = null;
          t === "capsule"
            ? y
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
                    !!_ &&
                      (0, e.jsxs)("div", {
                        className: Ie().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${N.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
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
                                  className: Rt.ErrorStylesBackground,
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
                                      href: Ka,
                                      target: N.TS.IN_CLIENT
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
          const S = Ct.Fj[o.artworkType].width,
            M = Ct.Fj[o.artworkType].height;
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
                    A,
                    r &&
                      (0, e.jsx)(ee.$n, {
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
                  className: (0, P.A)(Ie().SelectImageBlock, Ie().Tips),
                  children: [
                    b,
                    !!(S && M) &&
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
                            (0, Ct.qj)(S),
                            (0, Ct.qj)(M),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Rt.WarningStylesWithIcon,
                          children: o.strWarning,
                        }),
                      }),
                    o.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    o.elAdditionalControls,
                    !!o.fnRemoveAllArtwork &&
                      (0, e.jsx)(ee.$n, {
                        onClick: (B) => {
                          (0, we.pg)(
                            (0, e.jsx)(Ya, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, It.uX)(B) ?? window,
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
                  fnSetImageURL: h,
                  fnLangHasData: m,
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
              eventModel: m,
              appid: u,
              partnerEventStore: h,
            } = o,
            v = t === "localized_image_group",
            [x, C] = p.useState((0, _e.E)()),
            [_, y] = p.useState(new Array()),
            A = p.useCallback(
              (S, M, B) => {
                let K = [];
                _.find((X) => X.clanImage.imageid == S.imageid)
                  ? (K = _.map((X) =>
                      X.clanImage.imageid == S.imageid
                        ? { clanImage: S, lang: M }
                        : X,
                    ))
                  : B && (K = _.concat({ clanImage: S, lang: M })),
                  y(K);
              },
              [_],
            ),
            b = p.useCallback(
              (S, M, B) => {
                (0, tt.h5)(() => {
                  xn(i(t, M) ?? "") == S.image_hash && d(t, null, M),
                    d(t, S, B),
                    A(S, B, !1);
                });
              },
              [i, t, d, A],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(ee.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${N.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Ut, {
                    list: _,
                    fnOnArtworkLanguageChange: b,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, P.A)(
                        Ie().SelectImageBlock,
                        Ie().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Oa, {
                        eventModel: m,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (S) => {
                          S != x && C(S);
                        },
                        langOverride: x,
                        fnOnArtworkLangChange: v ? null : b,
                        artworkType: t,
                        fnOnRemoveImage: v ? null : (S) => d(t, null, S),
                        realms: n,
                        fnLangHasData: r,
                        fnGetImageHashAndExt: i,
                        partnerEventStore: h,
                      }),
                    }),
                  }),
                ],
              });
        }
        let Ut = class extends p.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, we.pg)(
              (0, e.jsx)(Gn, {
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
                let i = (0, c.we)("#Language_" + (0, U.LgB)(r));
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
        On([be.oI], Ut.prototype, "ShowLangChangeDialog", 1),
          (Ut = On([bn.PA], Ut));
        var Ja = a(6658);
        function Xa(o) {
          const {
              clanSteamID: t,
              appid: n,
              eventModel: s,
              realms: r,
              loc_images: i,
              artworkType: d,
              fnLangHasData: m,
              closeModal: u,
              fnSetImageURL: h,
              partnerEventStore: v,
            } = o,
            [x, C] = (0, p.useState)(!1),
            _ = (0, ye.zO)(t, d),
            y = t.GetAccountID(),
            [A] = (0, k.q3)(() => [
              _.GetFilesToUpload().length - _.GetCompletedFiles(),
            ]);
          (0, p.useEffect)(() => {
            C(!1),
              Ae.ClearImageGroup(),
              i?.forEach((B, K) => {
                const D = fe.b.InitFromClanID(y);
                if (Ae.GetAllLocalizedGroupImages().length == 0) {
                  const X = B && ve.zU.GetHashFromHashAndExt(B),
                    ue = X && pe.pU.GetClanImageByImageHash(D, X);
                  ue && Ae.SetPrimaryImageForImageGroup(ue, d);
                }
                Ae.SetLocalizedImageGroupAtLang(K, D, B ?? null);
              }),
              C(!0);
          }, [i, y, d]);
          const b = (0, p.useCallback)(
              (B, K, D = U.Bhc) => {
                const X = fe.b.InitFromClanID(y),
                  ue = ve.zU.GetHashAndExt(K ?? null);
                if (Ae.GetAllLocalizedGroupImages().length == 0) {
                  const Me = ue && ve.zU.GetHashFromHashAndExt(ue),
                    Pe = Me && pe.pU.GetClanImageByImageHash(X, Me);
                  Pe && Ae.SetPrimaryImageForImageGroup(Pe, B);
                }
                Ae.SetLocalizedImageGroupAtLang(D, X, ue);
              },
              [y],
            ),
            S = (0, p.useCallback)((B, K) => {
              const X = Ae.GetLocalizedImageGroupForEdit()?.localized_images[K];
              return X && X.split("/").pop();
            }, []),
            M = () => {
              const B = Ae.GetLocalizedImageGroupForEdit();
              for (let K = U.Bhc; K < U.bP9; ++K) {
                const D = B?.localized_images[K];
                if (D) {
                  const X = D.split("/").pop() || "";
                  h(
                    d,
                    {
                      image_hash: xn(X),
                      clanAccountID: y,
                      file_type: (0, Ja.yh)(X) ?? In.bg.w3,
                      imageid: 0,
                    },
                    K,
                  );
                } else h(d, null, K);
              }
              Ae.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(he.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, P.A)(Rt.NotTooWideModal, Rt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: A > 0,
            onOK: M,
            strOKButtonText:
              A > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
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
                        uploaderOverride: _,
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
                        fnGetImageHashAndExt: S,
                        fnLangHasData: m,
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
            r = p.useMemo(() => {
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
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(ee.m, {
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
            { openColorPicker: i } = R(),
            [d, m] = (0, p.useState)(() => n),
            [u, h, v, x, C, _, y, A] = (0, k.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [b] = (0, p.useState)(() => to(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Xa, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: dn.O3,
            artworkType: "localized_background_art",
            realms: y,
            loc_images: b,
            fnLangHasData: (S) => !!b[S],
            fnGetImageHash: (S, M) => b[M],
            fnSetImageURL: async (S, M, B) => {
              m((K) => {
                const D = { ...K.localized_background_art },
                  X = ve.zU.GetHashAndExt(M);
                return (
                  X ? (D[(0, U.LgB)(B)] = X) : delete D[(0, U.LgB)(B)],
                  { ...K, localized_background_art: D }
                );
              });
            },
            onOK: () => {
              m((S) => (s(S), t && setTimeout(t, 1), { ...S }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: z().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: z().ImageOptions,
                    children: [
                      (0, e.jsx)($a, {
                        setting: u,
                        fnUpdateSetting: (S) => {
                          m(
                            S !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: S,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: S },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(no, {
                        scaling_setting: h ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (S) => m({ ...d, scaling_setting: S }),
                      }),
                      h != "cover" &&
                        (0, e.jsx)(oo, {
                          position_settings: _,
                          fnUpdateSetting: (S) =>
                            m({ ...d, position_setting: S }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: z().ColorOptions,
                    children: [
                      (0, e.jsx)(ee.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: ge().ColorCtn,
                        children: [
                          (0, e.jsx)(ee.$n, {
                            style: { backgroundColor: v },
                            onClick: (S) =>
                              i(S, {
                                color: v ?? "",
                                onChange: (M) =>
                                  m({ ...d, background_color1: M }),
                              }),
                            children: (0, c.we)(
                              v === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(ee.$n, {
                            onClick: () =>
                              m({ ...d, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: z().SwapColorsCtn,
                        children: (0, e.jsx)(ee.$n, {
                          onClick: () =>
                            m({
                              ...d,
                              background_color1: x,
                              background_color2: v,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      C !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: ge().ColorCtn,
                          children: [
                            (0, e.jsx)(ee.$n, {
                              style: { backgroundColor: x },
                              onClick: (S) =>
                                i(S, {
                                  color: x ?? "",
                                  onChange: (M) =>
                                    m({ ...d, background_color2: M }),
                                }),
                              children: (0, c.we)(
                                x === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(ee.$n, {
                              onClick: () =>
                                m({ ...d, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(ao, {
                        gradient: C ?? "top-to-bottom",
                        fnUpdateSetting: (S) =>
                          m({ ...d, gradient_setting: S }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(Bt, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(qa.S, {
                  checked: !!A,
                  onChange: (S) => {
                    d.randomize_section_order = S;
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
          const t = pt.$Y([], U.bP9, null);
          for (const n in o) {
            const s = (0, U.sfN)(n);
            s != U.xPp && (t[s] = o[n]);
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
            i = p.useMemo(() => {
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
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(ee.m, {
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
            r = p.useMemo(() => {
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
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(ee.m, {
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
            r = p.useMemo(() => {
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
              (0, e.jsx)(ee.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(ee.m, {
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
            [i, d] = (0, p.useState)(t.BIsBackgroundImageEnabled()),
            [m, u, h] = (0, be.uD)(),
            v = (0, k.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, P.A)(z().Ctn, r && g.ValveOnlyBackground),
            children: (0, e.jsxs)(W.tH, {
              children: [
                (0, e.jsx)(ee.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (x) => {
                    d(x), t.SetBackgroundImageEnabled(x);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(ee.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)(ee.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: v,
                          onChange: (x) =>
                            t.SetSalePageLastCoverSectionUntilEnd(x),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(ee.$n, {
                          onClick: u,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(he.EN, {
                          active: m,
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
                            closeModal: h,
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
        const En = p.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: m,
              nTabIndex: u,
            } = t,
            h = (0, _e.E)(),
            [v, x, C, _] = (0, k.q3)(() => [
              d && s.mapGroupToSections.get(d.background_id),
              (d &&
                s.mapGroupToSections.get(d.background_id)?.sectionUniqueIDs) ??
                [],
              u != null
                ? r?.GetTabLastCoverSectionUntilEnd(u)
                : r?.GetSalePageLastCoverSectionUntilEnd(),
              u != null ? r?.GetTabGroupCount(u) : r?.GetSalePageGroupCount(),
            ]),
            y = C && i + 1 === _,
            [A, b, S] = (0, be.uD)(),
            [M, B, K] = (0, be.uD)();
          let D;
          v?.nUniqueIDNextSaleSection &&
            (D = (0, ft.h_)(
              $.HY,
              r.GetSaleSectionByID(v?.nUniqueIDNextSaleSection),
              h,
              m,
              v.nSaleSectionLastIndex + 1,
            ));
          let X;
          if (v && x?.length > 1) {
            const ue = x[x.length - 1];
            X = (0, ft.h_)(
              $.HY,
              r?.GetSaleSectionByID(ue),
              h,
              m,
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
                (0, e.jsx)(ee.$n, {
                  onClick: b,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(he.EN, {
                  active: A,
                  children: (0, e.jsx)(eo, {
                    imgGroup: d,
                    closeModal: S,
                    eventModel: m,
                    fnUpdateImageGroup: (ue) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, ue)
                        : r.SetSalePageBackgroundGroup(i, ue),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: z().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    x.map((ue) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, ft.h_)(
                            $.W3,
                            r.GetSaleSectionByID(ue),
                            h,
                            m,
                            r.GetSaleSectionIndexByID(ue, !0),
                          ),
                        },
                        "li_" + ue,
                      ),
                    ),
                    !!y &&
                      (0, e.jsx)("li", {
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!X &&
                  (0, e.jsx)(ee.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Reduce", X),
                  }),
                !!D &&
                  (0, e.jsx)(ee.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Extend", D),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(ee.$n, {
                        onClick: B,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(he.EN, {
                        active: M,
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
                          closeModal: K,
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
            className: z().CtnEditor,
            children: (0, e.jsx)(ee.$n, {
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
            d = i.findIndex((A) => A.background_id === t),
            m = i[d],
            [u, h] = (0, p.useState)(!1);
          (0, p.useEffect)(() => {
            if (!u) return;
            const A = (0, we.pg)(
              (0, e.jsx)(he.o0, {
                bAlertDialog: !0,
                closeModal: () => h(!1),
                children: (0, e.jsx)(En, {
                  backgroundImageEditModel: r,
                  groupIndex: d,
                  imgGroup: m,
                  imgGroupDerivedMapping: s,
                  eventModel: r.GetEventModel(),
                  nTabIndex: n,
                }),
              }),
              window,
            );
            return () => {
              A.then((b) => b.Close());
            };
          }, [u, r, m, d, n, s]);
          const v = (0, k.q3)(() => ht.get(t)),
            [x, C] = (0, p.useState)(null),
            _ = p.useCallback((A, b) => {
              C(b);
            }, []),
            y = (0, be.w6)(_);
          return (0, e.jsxs)("div", {
            className: z().CtnEditor,
            ref: y,
            children: [
              !!(v && x && x > v) &&
                (0, e.jsx)(ee.$n, {
                  onClick: (A) => h(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(En, {
                backgroundImageEditModel: r,
                groupIndex: d,
                imgGroup: m,
                imgGroupDerivedMapping: s,
                eventModel: r.GetEventModel(),
                nTabIndex: n,
              }),
            ],
          });
        }
        var co = a(81557),
          Rn = a.n(co);
        function go(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, p.useState)(!1);
          (0, p.useEffect)(() => {
            if (!n) return;
            const v = (0, we.pg)(
              (0, e.jsx)(he.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Nn, { ...o }),
              }),
              window,
            );
            return () => {
              v.then((x) => x.Close());
            };
          }, [n, o]);
          const r = (0, k.q3)(() => {
              const v = t.selectedTabBackgroundDef?.groups?.[0].background_id;
              if (v) {
                const x = t.mapGroupToSections.get(v);
                if (x) return ht.get(x?.nBackgroundGroupID) ?? 0;
              }
              return 0;
            }),
            [i, d] = (0, p.useState)(null),
            m = p.useCallback((v, x) => {
              d(x);
            }, []),
            u = (0, be.w6)(m),
            h = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, P.A)(z().CtnEditor, Rn().TabCtn),
            ref: u,
            children: [
              h &&
                (0, e.jsx)(ee.$n, {
                  onClick: (v) => s(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
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
            [r, i] = (0, p.useState)(null),
            [d, m, u, h] = (0, k.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)(W.tH, {
            children: [
              (0, e.jsx)(ee.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
                checked: m,
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
              !!m &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ee.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: d,
                      onChange: (v) => t.SetTabLastCoverSectionUntilEnd(s, v),
                    }),
                    (0, e.jsx)(En, {
                      backgroundImageEditModel: t,
                      groupIndex: 0,
                      imgGroup: (u || r)?.groups[0],
                      imgGroupDerivedMapping: n,
                      eventModel: h,
                      nTabIndex: s,
                      classNameHeader: Rn().TabHeader,
                    }),
                  ],
                }),
            ],
          });
        }
        var Et = a(85692);
        function uo(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = p.useState(!1),
            [i, d] = p.useState(!1);
          p.useEffect(() => {
            Et.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const m = (0, k.q3)(() => Et.TU.Get().GetMouseOverSectionID()),
            u = t && t == m,
            h = () => Et.TU.Get().JumpToSection(t),
            v = p.useRef(null);
          return (
            (0, Et.lM)((x) =>
              t != x ? !1 : (v.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: v,
              className: (0, P.A)({
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
                      onClick: h,
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
              bDynamicallyCreatedSale: m,
            } = o,
            [u, h] = p.useState(n?.GetDayIndexFromEventStart()),
            [v, x] = p.useState(null),
            C = (0, k.q3)(() => n.jsondata.sale_header_disable_top_margin),
            _ = (0, vo.P)(n, !!(0, yt.Yu)(n)),
            y = Io(n, u, (0, ho.TC)(!!s)),
            [A, b] = (0, p.useState)(!1);
          p.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !v &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, N.yK)() == "community"
            ) {
              const X = document.getElementsByTagName("HEAD")[0],
                ue = document.createElement("style");
              (ue.innerText = (0, ln.L$)(n.jsondata.sale_custom_css)),
                x(ue),
                X.appendChild(ue);
            }
            const D = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Ye.wT)(
                D.length <= 1,
                "Must have at most one react_landing_background",
              ),
              D.length >= 1 && (D[0].style.backgroundImage = ""),
              () => {
                v && (v.remove(), x(null));
              }
            );
          }, [n, v, s]);
          const S = n?.jsondata,
            M = p.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(N.UF.CLANACCOUNTID),
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
            B = (0, k.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            K = At(n?.clanSteamID);
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
            const D = ne(n),
              X = n.BUsesContentHubForItemSource(),
              ue = n
                .GetSaleSections()
                .some((Re) => Re.section_type === "contenthubtitle"),
              Me = X && ue;
            let Pe,
              ae = !0;
            D
              ? (Pe = 0)
              : n.BUsesContentHubForItemSource()
                ? (Pe = 20)
                : n.GetEventType() == U.ajI
                  ? ((Pe = 0), (ae = !1))
                  : (Pe = n.jsondata.sale_header_offset || 0);
            const ce = ae && n.jsondata.sale_header_offset === 530,
              Ke = !wt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              Ze = s
                ? !A && i?.BIsBackgroundImageEnabled()
                  ? Te.S.EPreviewMode_EditBackground
                  : Te.S.EPreviewMode_Enabled
                : Te.S.EPreviewMode_Disabled,
              Oe = B || n.GetEventType() != U.ajI,
              St = X ? ie.Yo.NoTransform : ie.Yo.NoTransformSparseContent,
              kt = (0, P.A)(
                l().SaleOuterContainer,
                C && l().SaleOuterTopMargin,
                ce && l().SaleNewSizing,
                l()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                D && l().SalePageLogoSet,
                Me && l().ContentHub,
              );
            return (0, e.jsx)(W.tH, {
              children: (0, e.jsx)(H.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)($.Cs, {
                  location: s ? $.HY : $.bs,
                  children: (0, e.jsxs)(G, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    personalizedCarousels: _,
                    children: [
                      Ke && (0, e.jsx)(H.Sn, {}),
                      (0, e.jsx)(jt, { eventModel: n }),
                      !!i &&
                        (Oe || K) &&
                        (0, e.jsx)(so, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: A,
                          fnSetBackgroundImgGroupEditMode: b,
                          bShowAsValveOnly: !Oe,
                        }),
                      (0, e.jsxs)(L.Z, {
                        style: Me ? void 0 : { marginTop: `${Pe || 0}px` },
                        className: kt,
                        scrollIntoViewType: St,
                        children: [
                          D && (0, e.jsx)(le, { eventModel: n, language: r }),
                          (0, e.jsx)(zt, {
                            rgPresenters: n.jsondata.sale_presenters,
                          }),
                          (0, e.jsx)(Kt, {
                            event: n,
                            broadcastEmbedContext: M,
                          }),
                          (0, e.jsx)(Co, {
                            ePreviewMode: Ze,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: M,
                            selectedTab: y,
                            tagSelection: y?.GetTagSelection(),
                          }),
                          !m &&
                            (0, e.jsx)(qt, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Re) => {
                                Re != u &&
                                  ((n.m_overrideCurrentDay = Re), h(Re));
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
          const [s] = (0, Ve.QD)(Ue.jD, void 0),
            [r] = (0, Ve.QD)(He.dk, void 0),
            [i] = (0, Ve.QD)(He.NV, void 0),
            d = p.useMemo(() => {
              const x = o
                .GetSaleSectionFirstMatchByType("tabs")
                ?.tabs?.filter((C) => !C.hide);
              if (x && x.length > 0) {
                let C = s > 0 ? x.find((y) => y.unique_id == s) : void 0;
                C || (C = x[0]);
                const _ = C === x[0];
                return { selTab: C, bIsDefaultTab: _ };
              }
            }, [o, s]),
            m = (0, He.U9)((0, He.XL)(r, i), d?.selTab.tab_tag_filter, n),
            u = m?.strParentKey,
            h = m?.strChildKey;
          return p.useMemo(() => {
            if (!d) return;
            let v;
            u && (v = { strParentKey: u, strChildKey: h });
            const x =
              o.jsondata.sale_opt_in_page_name ||
              o.jsondata.prune_list_optin_name;
            return new $e.y(d.selTab, t, d.bIsDefaultTab, v, x);
          }, [o, t, d, u, h]);
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
            [m, u] = p.useState((0, Ue.rp)()),
            h = p.useMemo(() => new rn(), []),
            v = p.useCallback(() => u((0, Ue.rp)()), []);
          p.useEffect(
            () => (
              window.addEventListener("resize", v),
              () => window.removeEventListener("resize", v)
            ),
            [v],
          ),
            p.useEffect(() => {
              let ae = "";
              const ce = () => {
                  const Ke = Un();
                  if (Ke && Ke != ae) {
                    const Ze = document.getElementById(Ke);
                    Ze && ((ae = Ke), Ze.scrollIntoView({ block: "start" }));
                  }
                },
                Le = setTimeout(() => ce(), 150);
              return (
                window.addEventListener("hashchange", ce),
                () => {
                  clearTimeout(Le),
                    window.removeEventListener("hashchange", ce);
                }
              );
            }, []);
          const x = (0, bt.W6)(),
            C = (ae, ce) => {
              (0, Ve.ip)(x, { ...(ce || {}), [Ue.jD]: ae.toString() });
            },
            [_, y] = (0, Ve.QD)("controller"),
            [A, b] = (0, k.q3)(() => {
              const ae =
                  Ht.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                ce = t.GetSaleSectionIncludingFooterSections(ae);
              return [
                tn(
                  t.jsondata.sale_background_img_groups,
                  ce,
                  i && i.GetActiveTabUniqueID(),
                ),
                ce,
              ];
            });
          let S = !1;
          const M = new $e.y(void 0, s),
            B = [{ elements: [], activeTab: M }];
          let K = null;
          const D = (0, N.Qn)(),
            X = (0, Et.ty)(),
            ue = (0, po.h)(t),
            Me = p.useMemo(() => {
              const ae = Un();
              if (!ae) return;
              const ce = b.findIndex((Le) => Le.section_anchor === ae);
              return ce > -1 ? ce : void 0;
            }, [b]);
          b.forEach((ae, ce) => {
            const Le = B[B.length - 1].activeTab;
            if (Le && !Le.ShouldShowSection(ae)) return;
            const Ke = wt.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              Ze = m && !Ke && !t.jsondata.content_hub_restricted_width;
            let Oe = (0, Te.I)(ae, r, t, n, D, ue);
            if (Oe === void 0) return;
            if (!Oe)
              if ((0, gt.su)(ae) && !N.iA.logged_in)
                S ||
                  ((Oe = (0, e.jsx)(gt.CC, {
                    section: ae,
                    event: t,
                    language: n,
                  })),
                  (S = !0));
              else {
                const Do = ae.diable_tab_id_filtering
                  ? new $e.y(void 0, Le && Le.GetSaleDay())
                  : Le;
                ae.section_type == "tabs" &&
                  ae.tabs?.some(
                    (jo) => jo.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  B.push({ activeTab: i, elements: [] }),
                  (Oe = (0, e.jsx)(mo.H, {
                    ...o,
                    section: ae,
                    activeTab: Do,
                    appVisibilityTracker: h,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: C,
                    expanded: Ze,
                    controllerCategory: _,
                    setControllerCategory: y,
                  }));
              }
            X &&
              (Oe = (0, e.jsx)(uo, { nSectionID: ae.unique_id, children: Oe }));
            const St = B && B.length && B[B.length - 1];
            let kt = (0, e.jsx)(
              So,
              {
                section: ae,
                nActiveTabID:
                  St && St.activeTab && St.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ce,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: A,
                backgroundImageEditModel: d,
                bExpanded: Ze,
                children: (0, e.jsx)(qe._, {
                  enabled: !Me || ce > Me,
                  children: Oe,
                }),
              },
              "SaleSectionIndex_" + ae.unique_id + "_" + ce,
            );
            const Re = A.mapSectionToGroup.get(ae.unique_id);
            K &&
              K.groupID != Re &&
              (B[B.length - 1].elements.push(
                Gt(t, K, r, i && i?.GetActiveTabUniqueID()),
              ),
              (K = null)),
              Re
                ? (K ||
                    (K = {
                      groupID: Re,
                      elSaleSections: [],
                      derivedGroupInfo: A.mapGroupToSections.get(Re),
                    }),
                  K.elSaleSections.push(kt))
                : B[B.length - 1].elements.push(kt);
          }),
            K &&
              (B[B.length - 1].elements.push(
                Gt(t, K, r, i && i?.GetActiveTabUniqueID()),
              ),
              (K = null));
          const Pe = B.map((ae, ce) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, P.A)(
                  l().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: ae.elements,
              },
              "TabSection_" + ce,
            ),
          );
          return (0, e.jsx)(L.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Pe,
          });
        }
        const Co = (0, bt.y)(xo);
        function _o(o) {
          const {
            visibility_by_door_index_state: t,
            door_index_visibility: n,
            children: s,
          } = o;
          return t && n != null
            ? (0, e.jsx)(Eo, {
                visibility_by_door_index_state: t,
                door_index_visibility: n,
                children: s,
              })
            : (0, e.jsx)(e.Fragment, { children: s });
        }
        function Eo(o) {
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
          const n = p.useRef(null);
          return (
            (0, p.useEffect)(() => {
              t(!!p.Children.toArray(o).filter(Boolean).length);
            }, [o, t]),
            o
          );
        }
        function So(o) {
          const {
              section: t,
              saleSectionIndex: n,
              nActiveTabID: s,
              ePreviewMode: r,
              salePageBackgroundDerivedConfig: i,
              backgroundImageEditModel: d,
              bExpanded: m,
              children: u,
            } = o,
            h = t.section_anchor
              ? t.section_anchor
              : Ue.mj + (t.unique_id || n),
            v = t.section_type != "tabs",
            [x, C] = (0, p.useState)(!0);
          return x
            ? (0, e.jsx)(W.tH, {
                children: (0, e.jsx)(_o, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: v
                    ? (0, e.jsx)(L.Z, {
                        navKey: h,
                        id: h,
                        className: (0, P.A)({
                          [l().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: m,
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
                                id: h,
                                className: (0, P.A)({
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
      12932: (T, de, a) => {
        "use strict";
        a.d(de, { qx: () => H });
        var e = a(7850),
          U = a(16412),
          L = a(18210),
          ie = a(36118),
          k = a(90626),
          q = a(36707),
          te = a(95695),
          P = a.n(te),
          c = a(25792),
          N = a(64734),
          oe = a.n(N),
          ne = a(65946),
          le = a(11243);
        function V(Y) {
          const {
              title: F,
              tooltip: p,
              getMinimized: O,
              toggleMinimized: W,
              className: j,
              children: l,
              elAdditionalButtons: g,
            } = Y,
            f = (0, ne.q3)(() => O());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, q.A)(
                  j,
                  N.SectionTitleHeader,
                  N.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, q.A)(
                      te.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [F, !!p && (0, e.jsx)(le.o, { tooltip: p })],
                  }),
                  (0, e.jsxs)("div", {
                    className: N.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)($, { bIsMinimized: f, fnToggleMinimize: W }),
                    ],
                  }),
                ],
              }),
              !f && (0, e.jsx)(c.tH, { children: l }),
            ],
          });
        }
        function H(Y) {
          const [F, p] = k.useState(!!Y.bStartMinimized);
          return (0, e.jsx)(V, {
            ...Y,
            getMinimized: () => F,
            toggleMinimized: () => p(!F),
            children: Y.children,
          });
        }
        function $(Y) {
          const { bIsMinimized: F, fnToggleMinimize: p } = Y,
            O = F ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(U.$n, {
            "data-tooltip-text": (0, L.we)(O),
            onClick: p,
            children: Y.bIsMinimized
              ? (0, e.jsx)(ie.hz4, {})
              : (0, e.jsx)(ie.Xjb, {}),
          });
        }
      },
      29462: (T, de, a) => {
        "use strict";
        a.r(de), a.d(de, { default: () => oe });
        var e = a(7850),
          U = a(90626),
          L = a(3166),
          ie = a(99412),
          k = a(77495),
          q = a(85599),
          te = a(11811),
          P = a(179),
          c = a(7582),
          N = a(21042);
        function oe(ne) {
          const { clanAccountID: le, gidEvent: V } = ne;
          let { eventModel: H, bLoading: $ } = (0, k.dB)(le, V);
          const Y = (0, ie.sfN)(L.TS.LANGUAGE),
            [F] = (0, P.QD)("livepreview");
          return (
            F && (H = (0, N.U)(le, ie.ajI, "creatorhome_fake", (0, c.sB)())),
            U.useEffect(() => {
              if (!$ && !H) {
                const p = new URL(window.location.href);
                p.searchParams.set("v1", "1"),
                  window.location.replace(p.toString());
              }
            }, [$, H]),
            H
              ? (0, e.jsx)(te.default, {
                  eventModel: H,
                  promotionName: `creatorhome_${V}`,
                  language: Y,
                })
              : (0, e.jsx)(q.t, {})
          );
        }
      },
      59970: (T, de, a) => {
        "use strict";
        a.d(de, { d: () => vn });
        var e = a(7850),
          U = a(19367),
          L = a(90626),
          ie = a(3685),
          k = a(85528),
          q = a(77495),
          te = a(18210),
          P = a(3166),
          c = a(75779),
          N = a(80902),
          oe = a(30454);
        async function ne() {
          const I = await (0, oe.d)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!I.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return I.counts;
        }
        const le = 300 * 1e3;
        function V() {
          return ["DeckCompatCounts"];
        }
        function H() {
          return {
            queryKey: V(),
            queryFn: () => ne(),
            staleTime: le,
            retry: !1,
          };
        }
        function $() {
          const { data: I } = (0, N.I)(H());
          return I;
        }
        function Y(I, E) {
          switch (E) {
            case c.sd:
              return I?.playable;
            case c.V8:
              return I?.unsupported;
            default:
              return I?.verified;
          }
        }
        var F = a(70187),
          p = a(36549),
          O = a(39153),
          W = a(99412),
          j = a(72609),
          l = a(25792),
          g = a(85599),
          f = a(41635),
          w = a(47610),
          Z = a(18860),
          G = a(87805);
        function Q(I) {
          const { event: E } = I.context,
            R = Number.parseInt((0, F.j$)(I.args)),
            J = L.useMemo(() => {
              if (E)
                return E.jsondata.sale_sections?.find(
                  (z) =>
                    z.section_type == "vo_internal" &&
                    (z.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      z.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [E]);
          if (R && J) {
            const z = Number.parseInt((0, F.j$)(I.args, "depositpackageid")),
              se = Number.parseInt((0, F.j$)(I.args, "psulesspackageid")),
              ge = (0, F.j$)(I.args, "out_of_stock_override"),
              fe = (0, F.j$)(I.args, "delivery_override"),
              ye = (0, F.j$)(I.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(re, {
              section: J,
              reservationPackageID: R,
              depositPackageID: z,
              psuLessPackageID: se,
              strOutOfStockOverride: ge,
              strDeliveryOverride: ye || fe,
              bDeliveryOverrideOnlyIfOutOfStock: !!ye,
              PreviewActions: I.PreviewActions,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        function re(I) {
          const {
              reservationPackageID: E,
              depositPackageID: R,
              bIsPreview: J,
              psuLessPackageID: z,
              strOutOfStockOverride: se,
              strDeliveryOverride: ge,
              bDeliveryOverrideOnlyIfOutOfStock: fe,
              section: ye,
              PreviewActions: pe,
            } = I,
            { data: Ee } = (0, w.DR)(E),
            { data: ke } = (0, w.DR)(z),
            Be = (0, L.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + E,
                  reservation_package: E,
                  deposit_package: R,
                  localized_reservation_desc: (0, f.$Y)([], W.bP9, null),
                  localized_out_of_stock_override: (0, f.$Y)(
                    [se || null],
                    W.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, f.$Y)(
                    [ge || null],
                    W.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!fe,
                  psu_less_package: z,
                },
              ],
              [E, R, se, ge, fe, z],
            );
          if (!Ee || (z && !ke))
            return (0, e.jsx)(g.t, {
              string: (0, te.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const tt = !j.iA.logged_in || !Ee.account_restricted_from_purchasing,
            Ge =
              Ee.reservation_state == Z.G.k_EPurchaseReservationState_Reserved
                ? Ee
                : void 0;
          return (0, e.jsxs)(l.tH, {
            children: [
              pe &&
                (0, e.jsx)(L.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(pe, {
                    bIsPreview: !!J,
                    rgReservationDef: Be,
                  }),
                }),
              !!Ee.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: Be[0].unique_id,
                  children: [
                    (0, e.jsx)(G.b, {
                      reservationDef: Be[0],
                      hardwareDetail: Ee,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Ge,
                    }),
                    tt &&
                      (0, e.jsx)(G.p, {
                        section: ye,
                        reservationDef: Be[0],
                        hardwareDetail: Ee,
                        reservedHardwareDetail: Ge,
                      }),
                    ke &&
                      ke?.allow_purchase_in_country &&
                      (0, e.jsx)(G.b, {
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
          jt = a(72865),
          Ft = a(38081),
          st = a.n(Ft),
          Ne = a(36707),
          ze = a(69596),
          zt = a(10026),
          rt = a.n(zt),
          Ht = a(19298),
          bt = a(11996),
          Ue = a(19047),
          He = a(36118),
          wt = a(47689),
          yt = a(89926),
          Wt = a(32545),
          it = a.n(Wt);
        function Kt(I) {
          const { appID: E, classOverride: R, styleOverride: J } = I,
            [z, se] = (0, L.useState)(!1),
            ge = (0, wt.m)("GameHoverFollowButton"),
            { elDialogElement: fe, fnShowLogonDialog: ye } = (0, yt.l)(),
            pe = (0, bt.Fh)(E),
            { mutateAsync: Ee } = (0, Ue.L)(E, !pe, void 0),
            ke = async (Be) => {
              Be.preventDefault(),
                Be.stopPropagation(),
                P.iA.logged_in
                  ? (se(!0), await Ee(), ge.token.reason || se(!1))
                  : ye();
            };
          return (0, e.jsxs)(Ht.Z, {
            className: (0, Ne.A)(it().FollowButton, R),
            onClick: ke,
            style: J,
            children: [
              pe ? (0, e.jsx)(He.pPV, {}) : (0, e.jsx)(He.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ne.A)(
                  it().FollowButtonText,
                  z && it().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, te.we)(
                  pe ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              fe,
            ],
          });
        }
        function Vt(I) {
          const { appid: E, color: R, bgcolor: J } = I,
            z = (0, jt.n9)();
          return (0, e.jsx)(Kt, {
            appID: E,
            classOverride: (0, Ne.A)(
              st().FollowGameButtonNotTop,
              rt().BBCodeFollowButton,
            ),
            styleOverride: { color: R, backgroundColor: J },
          });
        }
        function Qt(I) {
          const E = Number(I.args.appid);
          if (!E) return null;
          const R = (0, ze.O)(I.args.color, "black"),
            J = (0, ze.O)(I.args.bgcolor, "white");
          return (0, e.jsx)(Vt, { appid: E, color: R, bgcolor: J });
        }
        var lt = a(57646);
        function ct(I) {
          const E = Number(I.args.packageid);
          return E
            ? (0, e.jsx)(lt.eF, {
                packageID: E,
                display_style: (0, lt._w)(I.args.display),
              })
            : null;
        }
        function Yt(I) {
          const E = Number(I.args.packageid),
            R = Number(I.args.compareid);
          return !E || !R
            ? null
            : (0, e.jsx)(lt.hJ, { packageID: E, compareID: R });
        }
        function Zt(I) {
          const E = I.args[""]?.trim();
          return E
            ? (0, e.jsx)("div", { className: E, children: I.children })
            : (0, e.jsx)(e.Fragment, { children: I.children });
        }
        var dt = a(18657),
          Lt = a.n(dt),
          gt = a(63026);
        function Jt(I) {
          const { clanAccountID: E, color: R, bgcolor: J } = I,
            [z, se] = L.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ne.A)(Lt().BBCodeFollowButton, z && Lt().isHovered),
            onMouseEnter: () => se(!0),
            onMouseLeave: () => se(!1),
            children: (0, e.jsx)(gt.Q, {
              nCreatorAccountID: E,
              classOverride: st().FollowGameButtonNotTop,
              styleOverride: { color: R, backgroundColor: J },
              followType: "group",
            }),
          });
        }
        function xe(I) {
          const { event: E } = I.context,
            R = Number(I.args.groupid) || E?.clanSteamID.GetAccountID();
          if (!R) return null;
          const J = (0, ze.O)(I.args.color, "black"),
            z = (0, ze.O)(I.args.bgcolor, "white");
          return (0, e.jsx)(Jt, { clanAccountID: R, color: J, bgcolor: z });
        }
        var Xt = a(83482),
          At = a(44267),
          Bt = a(9202),
          ee = a.n(Bt),
          Je = a(29522);
        function Pt(I) {
          const { appid: E, color: R, bgcolor: J } = I,
            z = (0, jt.n9)(),
            se = (0, Je.$5)(E),
            ge = (0, Xt.L3)(z);
          return (0, e.jsx)("div", {
            className: ee().WishlistHoverCtn,
            children: (0, e.jsx)(At.E, {
              snr: ge,
              id: se,
              classOverride: (0, Ne.A)(
                st().WishlistButtonNotTop,
                ee().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: R, backgroundColor: J },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function $t(I) {
          const E = Number(I.args.appid);
          if (!E) return null;
          const R = (0, ze.O)(I.args.color, "black"),
            J = (0, ze.O)(I.args.bgcolor, "white");
          return (0, e.jsx)(Pt, { appid: E, color: R, bgcolor: J });
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
                ["reservationbutton", { Constructor: Q, autocloses: !1 }],
              ])),
            ut
          );
        }
        var Ve = a(37656),
          _e = a(29868),
          be = a(24642);
        function mt(I) {
          return I < 10 ? "0" + I : I;
        }
        function Xe(I) {
          const { giveawayid: E } = I,
            R = (0, Ve.w)(E),
            {
              bLoadingGiveawayInfo: J,
              winner_count: z,
              closed: se,
              seconds_until_drawing: ge,
            } = R;
          return J
            ? null
            : (0, e.jsxs)("div", {
                className: _e.countdownCtn,
                children: [
                  !!se &&
                    (0, e.jsx)("div", {
                      className: _e.Closed,
                      children:
                        z > 0
                          ? (0, te.we)("#Giveaway_Closed", (0, be.D)(z))
                          : (0, te.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !se &&
                    (0, e.jsxs)(L.Fragment, {
                      children: [
                        ge <= 0
                          ? (0, e.jsxs)("div", {
                              className: _e.Throbber,
                              children: [
                                (0, e.jsx)(g.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, te.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: _e.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: _e.CountDownTime,
                                  children:
                                    mt(Math.floor(ge / 60)) + ":" + mt(ge % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: _e.CountDownText,
                                  children: [
                                    (0, te.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, te.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        z > 0 &&
                          (0, e.jsxs)("div", {
                            className: _e.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: _e.WinnerCount,
                                children: (0, be.D)(z),
                              }),
                              (0, e.jsx)("div", {
                                className: _e.WinnerText,
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
        var ht = a(88245),
          en = a(35702),
          tn = a(16412),
          ve = a(92757),
          nn = a(39256),
          pt = a(4720),
          Te = a(75110),
          Gt = a(57810),
          vt = a(36631),
          an = a(76281),
          $e = a(81416);
        function on(I) {
          const { eventModel: E, nEventBadgeID: R } = I,
            J = (0, en.fy)(R);
          if (J?.level > 0) {
            let z = J.level;
            if (E?.BHasSaleEnabled()) {
              const se = E.GetSaleSectionsByType("badge_progress");
              if (se?.length == 1) {
                const ge = se[0].badge_progress;
                if (ge?.event_badgeid == R && ge?.granted_by_discovery_queue) {
                  const fe = ge.levels[ge.levels.length - 1].level;
                  return (0, e.jsx)(Tt, {
                    eventModel: E,
                    nBadgeLevel: z,
                    nMaxLevel: fe,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, be.D)(z),
            });
          }
          return null;
        }
        function Tt(I) {
          const { eventModel: E, nBadgeLevel: R, nMaxLevel: J } = I,
            z = L.useMemo(() => {
              const pe = E.GetSaleSections().filter(
                (Ee) => Ee.section_type == "discoveryqueue",
              );
              return pe?.length > 0 ? pe[0] : null;
            }, [E]),
            { storePageFilter: se, eStoreDiscoveryQueueType: ge } = L.useMemo(
              () => (0, Te.lx)(E, z),
              [E, z],
            ),
            fe = (0, Gt.Uf)(ge, se),
            ye = Math.min(R + fe, J);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, be.D)(ye),
          });
        }
        function Qe(I) {
          const { event: E } = I.context,
            R = Number.parseInt((0, F.j$)(I.args, "eventid"));
          return P.iA.logged_in && R
            ? (0, e.jsx)(on, { nEventBadgeID: R, eventModel: E })
            : null;
        }
        function sn(I) {
          const { nDoorIndex: E, children: R } = I,
            J = (0, O.OM)(E),
            z = (0, O.gP)(),
            [se, ge] = L.useState(!1),
            [fe, ye] = L.useState(!1),
            { elDialogElement: pe, fnShowLogonDialog: Ee } = (0, yt.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(tn.$n, {
                disabled: J,
                onClick: (ke) => {
                  se ||
                    (P.iA.logged_in
                      ? (ge(!0),
                        z({ iDoorIndex: E })
                          .then((Be) => {
                            Be || ye(!0), ge(!1);
                          })
                          .catch(() => {
                            ye(!0), ge(!1);
                          }))
                      : Ee());
                },
                children: fe
                  ? (0, e.jsx)("div", {
                      children: (0, te.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!se && (0, e.jsx)(g.t, { size: "small" }),
                        !!J && (0, e.jsx)(He.Jlk, {}),
                        R,
                      ],
                    }),
              }),
              pe,
            ],
          });
        }
        function rn(I) {
          const E = Number.parseInt((0, F.j$)(I.args)) || 0;
          return E >= 0 && E < 32
            ? (0, e.jsx)(sn, { nDoorIndex: E, children: I.children })
            : null;
        }
        const Ye = (0, ve.y)(an.H);
        function ln(I) {
          const E = Number.parseInt((0, F.j$)(I.args)),
            { event: R, showErrorInfo: J } = I.context;
          if (E) {
            const z = R?.jsondata?.sale_sections?.findIndex(
              (se) => se.unique_id == E,
            );
            if (z >= 0) {
              const se = R.GetDayIndexFromEventStart();
              return (0, e.jsx)(vt.Cs, {
                location: J ? vt.HY : vt.bs,
                children: (0, e.jsx)(Ye, {
                  event: R,
                  section: R.jsondata.sale_sections[z],
                  activeTab: new pt.y(null, se),
                  language: I.language,
                  nSaleDayIndex: se,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: J
                    ? $e.S.EPreviewMode_Enabled
                    : $e.S.EPreviewMode_Disabled,
                }),
              });
            } else if (J)
              return (0, e.jsxs)("div", {
                className: nn.ErrorDiv,
                children: ["Error could not find sale section ", E],
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
                    Constructor: we,
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
        function we(I) {
          const { event: E } = I.context,
            R = Number.parseInt((0, F.j$)(I.args, "appid")),
            J = Number.parseInt((0, F.j$)(I.args, "itemdefid")),
            z = Number.parseInt((0, F.j$)(I.args, "maxquantity")),
            se = (0, F.j$)(I.args, "calltoaction");
          return !(0, ht.gS)(R, J, !1) || !E
            ? (0, e.jsx)(g.t, {
                size: "small",
                position: "center",
                string: (0, te.we)("#Loading"),
              })
            : (0, e.jsx)(Fe.f, {
                language: I.language,
                clanAccountID: E.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: R, nItemDefID: J, max_quantity: z },
                strCallToAction: se,
              });
        }
        function cn(I) {
          const E = $();
          if (!E) return (0, e.jsx)(g.t, { size: "small" });
          const R = Number.parseInt((0, F.j$)(I.args));
          return (0, e.jsx)("span", { children: (0, be.D)(Number(Y(E, R))) });
        }
        function ft(I) {
          const E = (0, p.jR)(P.iA.accountid, "library");
          if (!E) return (0, e.jsx)(g.t, { size: "small" });
          const R = Number.parseInt((0, F.j$)(I.args));
          let J = E.verifiedList?.length || 0;
          switch (R) {
            case c.sd:
              J = E.playableList?.length || 0;
              break;
            case c.V8:
              J = E.unsupportedList?.length || 0;
              break;
            case c.YX:
              J = E.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, be.D)(Number(J)) });
        }
        function dn(I) {
          const E = Number.parseInt((0, F.j$)(I.args)),
            R =
              "hide" in I.args && !!Number.parseInt((0, F.j$)(I.args, "hide"));
          return E >= 0
            ? (0, e.jsx)(gn, { nDoorIndex: E, bHide: R, children: I.children })
            : null;
        }
        function gn(I) {
          const { nDoorIndex: E, bHide: R, children: J } = I,
            z = (0, O.OM)(E);
          return z == null
            ? null
            : (z && !R) || (!z && R)
              ? (0, e.jsx)(e.Fragment, { children: I.children })
              : null;
        }
        function un(I) {
          return (0, e.jsx)("span", {
            className: me.LocalizeBlock,
            children: (0, te.oW)(
              I.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function mn(I) {
          let E = (0, F.j$)(I.args);
          return E
            ? (0, e.jsx)(Xe, { giveawayid: E })
            : (0, e.jsx)(L.Fragment, {});
        }
        const We = void 0;
        function hn(I) {
          return (0, e.jsx)(Q, { ...I, PreviewActions: We });
        }
        var et = a(71698),
          pn = a(94520);
        function vn(I) {
          const { bSalePage: E } = I,
            [R, J] = L.useState(!1);
          return (
            (0, et.H)(R, E),
            L.useEffect(() => {
              k.Vw.Init(new ie.D(P.TS.WEBAPI_BASE_URL)), q.O3.Init(), J(!0);
            }, []),
            L.useEffect(() => {
              const z = (0, te.l4)();
              z && U.locale(z);
            }, []),
            R
              ? E
                ? (0, e.jsx)(pn.d3, { dictionary: he(), children: I.children })
                : I.children
              : null
          );
        }
      },
      11811: (T, de, a) => {
        "use strict";
        a.r(de), a.d(de, { default: () => Y });
        var e = a(7850),
          U = a(71698),
          L = a(90626),
          ie = a(73259),
          k = a(76559),
          q = a(77495),
          te = a(14069),
          P = a(64641),
          c = a.n(P),
          N = a(85599),
          oe = a(18210),
          ne = a(3166),
          le = a(59970),
          V = a(85692),
          H = a(41032),
          $ = a(51079);
        function Y(O) {
          const { eventModel: W } = O;
          return (0, e.jsx)(le.d, {
            bSalePage: !0,
            children: (0, e.jsx)(F, { ...O, overrideEventModel: W }),
          });
        }
        function F(O) {
          const { promotionName: W, language: j, overrideEventModel: l } = O,
            [g, f] = L.useState(
              l ?? q.O3.GetClanEventFromAnnouncementGID(ne.P9.ANNOUNCEMENT_GID),
            );
          L.useEffect(() => {
            if (!l && g?.AnnouncementGID != ne.P9.ANNOUNCEMENT_GID) {
              const re = new k.b(ne.UF.CLANSTEAMID);
              q.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                re,
                ne.P9.ANNOUNCEMENT_GID,
                null,
              ).then(f);
            }
          }, [g, l]);
          const Z = (0, V.D2)() ?? g,
            G = (0, V.ty)();
          if (((0, U.s)(1500), !Z))
            return (0, e.jsx)("div", {
              className: c().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(N.t, {
                size: "medium",
                string: (0, oe.we)("#Loading"),
              }),
            });
          const Q =
            (Z.visibility_state !== ie.zv.k_EEventStateVisible &&
              Z.visibility_state !== ie.zv.k_EEventStateUnlisted) ||
            G;
          return (0, e.jsx)(p, {
            eventModel: Z,
            children: (0, e.jsx)($.oJ, {
              children: (0, e.jsx)($.Ay, {
                curator_clanid: Z?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(te._, {
                  promotionName: W,
                  language: j,
                  eventModel: Z,
                  bIsPreview: Q,
                }),
              }),
            }),
          });
        }
        function p(O) {
          const { eventModel: W, children: j } = O,
            l = W.GetContentHubType() == "adultonly";
          return (0, e.jsx)(H.QA, {
            eAdultOnlyMediaBehavior: l ? "allowed" : "masked",
            children: j,
          });
        }
      },
      32545: (T) => {
        T.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
      50909: (T) => {
        T.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (T) => {
        T.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SalePageLogoCtn: "_3Rukhd1HqXzPiBrK5hwPT-",
        };
      },
      71347: (T) => {
        T.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (T) => {
        T.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (T) => {
        T.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      17618: (T) => {
        T.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      10026: (T) => {
        T.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (T) => {
        T.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (T) => {
        T.exports = {
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
      32190: (T) => {
        T.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (T) => {
        T.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (T) => {
        T.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (T) => {
        T.exports = {
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
      9709: (T) => {
        T.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (T) => {
        T.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (T) => {
        T.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (T) => {
        T.exports = {
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
      25359: (T) => {
        T.exports = {
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
      79949: (T) => {
        T.exports = {
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
      20860: (T) => {
        T.exports = {
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
      15496: (T) => {
        T.exports = {
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
      9202: (T) => {
        T.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
      64734: (T) => {
        T.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      44894: (T, de, a) => {
        "use strict";
        a.d(de, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

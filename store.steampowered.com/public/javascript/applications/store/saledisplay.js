/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9236],
    {
      71698: (M, ge, a) => {
        "use strict";
        a.d(ge, { H: () => ie, s: () => re });
        var e = a(90626),
          k = a(41623);
        let N = 0;
        function ie(Z, ne) {
          (0, e.useEffect)(() => {
            if (!(Z || ne))
              return (
                N++,
                () => {
                  --N == 0 && (0, k.s)();
                }
              );
          }, [Z, ne]);
        }
        function re(Z) {
          const [ne, se] = (0, e.useState)(!1);
          (0, e.useEffect)(() => {
            const H = window.setTimeout(() => se(!0), Z);
            return () => window.clearTimeout(H);
          }, [Z]),
            ie(ne);
        }
      },
      85528: (M, ge, a) => {
        "use strict";
        a.d(ge, { Vw: () => V });
        var e = a(14947),
          k = a(99412),
          N = a(72604),
          ie = a(35038),
          re = a(67529),
          Z = a(3166);
        class ne {
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
            let C = Z.TS.LANGUAGE,
              A = this.GetTokenList(C),
              J = C != "english" ? this.GetTokenList("english") : null;
            return se(l, A, J, this.m_appid, g);
          }
          SubstituteParams(l, g) {
            let C = Z.TS.LANGUAGE,
              A = this.GetTokenList(C),
              J = C != "english" ? this.GetTokenList("english") : null;
            return H(l, A, J, this.m_appid, g);
          }
        }
        function se(E, l, g, C, A) {
          if (!E.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                E,
                "appid",
                C,
                "tokens",
                l,
              ),
              ""
            );
          let J = E;
          E = E.toLowerCase();
          let T = "";
          if (
            (l && l.has(E) && (T = l.get(E)),
            !T && g && g.has(E) && (T = g.get(E)),
            T)
          )
            T = H(T, l, g, C, A);
          else if (
            ((l || g) &&
              console.log(
                "No loc found for appid",
                C,
                J,
                "Tokens:",
                l,
                "Fallback:",
                g,
              ),
            l && Z.TS.EUNIVERSE != k.wLO)
          )
            return E;
          return T;
        }
        function H(E, l, g, C, A) {
          let J = /{[A-za-z0-9_%#:]+}/g,
            T = E.match(J);
          if (T)
            for (let te of T) {
              let c = te.slice(1, -1),
                fe = m(c, A),
                Ke = se(fe, l, g, C, A);
              if (!Ke) return "";
              E = E.replace(te, Ke);
            }
          return (E = m(E, A)), E;
        }
        function m(E, l) {
          let g = /%[A-Za-z0-9_:]+%/g,
            C = E.match(g);
          if (C)
            for (let A of C) {
              let J = A.slice(1, -1).toLowerCase(),
                T = l.get(J);
              T == null
                ? console.log("No rich presence found for", J)
                : (E = E.replace(A, T));
            }
          return E;
        }
        var oe = a(72849),
          $ = a(71742),
          de = a(8323),
          F = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          W = (E, l, g, C) => {
            for (
              var A = C > 1 ? void 0 : C ? U(l, g) : l, J = E.length - 1, T;
              J >= 0;
              J--
            )
              (T = E[J]) && (A = (C ? T(l, g, A) : T(A)) || A);
            return C && A && F(l, g, A), A;
          };
        function y(E) {
          return useObserver(() => V.GetAppInfo(E));
        }
        function D(E) {
          return useObserver(() => E.map((l) => V.GetAppInfo(l)));
        }
        const Q = 3600 * 24 * 7 * 2;
        class B {
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
              (0, $.wT)(
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
              ((0, $.wT)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(l))
            ) {
              let g = new re.by(l);
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
              let C = ie.w.Init(oe._z);
              C.Body().set_language((0, k.sfN)(Z.TS.LANGUAGE));
              const A = 50;
              for (; g.length > 0; ) {
                const J = Math.min(A, g.length),
                  T = g.slice(0, J);
                (g = g.slice(J)), C.Body().set_appids(T);
                const te = await oe.BE.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  C,
                );
                te.GetEResult() == N.R
                  ? this.OnGetAppsResponse(te)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${te.GetEResult()}, AppIDs:`,
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
            for (let C of l.Body().apps()) {
              let A = this.m_mapAppInfo.get(C.appid());
              (0, $.wT)(
                A,
                `Got AppInfo response for unrequested AppID: ${C.appid()}`,
              ),
                A &&
                  ((A = new re.by(C.appid())),
                  A.DeserializeFromMessage(C),
                  this.m_mapAppInfo.set(C.appid(), A),
                  g.push(A));
            }
            this.SaveAppInfoBatchToLocalCache(g);
          }
          OnAppOverviewChange(l) {
            for (let g of l) {
              const C = new re.by(g.appid());
              C.DeserializeFromAppOverview(g),
                C.is_initialized && this.m_mapAppInfo.set(g.appid(), C);
            }
          }
          async EnsureAppInfoForAppIDs(l) {
            let g = !1;
            return (
              l.forEach((C) => {
                let A = this.m_mapAppInfo.get(C);
                if (A) {
                  A.is_valid || (g = !0);
                  return;
                }
                (A = new re.by(C)),
                  this.m_mapAppInfo.set(C, A),
                  this.QueueAppInfoRequest(C),
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
            const g = new Date(new Date().getTime() - Q * 1e3),
              C = async (te) => {
                const c = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(te),
                );
                if (!c) return te;
                let fe = this.m_mapAppInfo.get(te);
                return (
                  (0, $.wT)(
                    fe,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  fe
                    ? ((fe = new re.by(te)),
                      fe.DeserializeFromCacheObject(c),
                      fe.is_initialized
                        ? (this.m_mapAppInfo.set(te, fe),
                          fe.time_updated_from_server < g ? te : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            te,
                            c,
                          ),
                          te))
                    : te
                );
              };
            let A = l.map((te) => C(te));
            return (await Promise.all(A)).filter((te) => te !== null);
          }
          async SaveAppInfoBatchToLocalCache(l) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                l.map((g) => g.appid),
              );
              for (const g of l) {
                const C = g.SerializeToCacheObject();
                C &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(g.appid),
                    C,
                  );
              }
            }
          }
          Localize(l, g, C) {
            const A = this.GetRichPresenceLoc(l);
            return A
              ? A.Localize(g, C)
              : Z.TS.EUNIVERSE != k.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${l} token ${g}, this may not have had a chance to load yet`,
                  ),
                  g)
                : "";
          }
          GetRichPresenceLoc(l) {
            if (this.m_mapRichPresenceLoc.has(l.toString())) {
              let C = this.m_mapRichPresenceLoc.get(l.toString());
              return (
                C.m_nLastUpdated + 1e3 * 60 * re.IU < Date.now() &&
                  this.QueueRichPresenceLocRequest(C),
                C
              );
            }
            let g = new ne(l);
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
            for (let C of g) {
              let A = C.language(),
                J = l.m_mapLanguages.get(A);
              J
                ? J.clear()
                : (l.m_mapLanguages.set(A, new Map()),
                  (J = l.m_mapLanguages.get(A)));
              for (let T of C.tokens())
                J?.set(T.name().toLowerCase(), T.value());
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
                      g.Body().set_language(Z.TS.LANGUAGE),
                      oe.BE.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        g,
                      )
                    );
                  })
                  .then(
                    (g) => (
                      (l.m_fetching = null),
                      g.GetEResult() != N.R
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
        W([e.XI], B.prototype, "OnGetAppsResponse", 1),
          W([e.XI], B.prototype, "OnRichPresenceLocUpdate", 1);
        const V = new B();
      },
      50109: (M, ge, a) => {
        "use strict";
        a.d(ge, { E: () => de, O: () => $ });
        var e = a(14947),
          k = a(65946),
          N = a(99412),
          ie = a(41635),
          re = a(27066),
          Z = a(3166),
          ne = a(38585),
          se = Object.defineProperty,
          H = Object.getOwnPropertyDescriptor,
          m = (F, U, W, y) => {
            for (
              var D = y > 1 ? void 0 : y ? H(U, W) : U, Q = F.length - 1, B;
              Q >= 0;
              Q--
            )
              (B = F[Q]) && (D = (y ? B(U, W, D) : B(D)) || D);
            return y && D && se(U, W, D), D;
          };
        const oe = class St {
          m_eCurLang = (0, N.sfN)(Z.TS.LANGUAGE);
          m_rgHasData = (0, ie.$Y)([], N.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new ne.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(U) {
            return this.m_eCurLang != U
              ? ((this.m_eCurLang = U), this.GetCallback().Dispatch(U), !0)
              : !1;
          }
          SetHasLanguage(U) {
            U.forEach((W, y) => {
              this.m_rgHasData[y] != W && (this.m_rgHasData[y] = W);
            });
          }
          BHasLanguageData(U) {
            return this.m_rgHasData[U];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(U) {
            U != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = U);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              St.s_globalSingletonStore ||
                (St.s_globalSingletonStore = new St()),
              St.s_globalSingletonStore
            );
          }
          constructor() {
            (0, e.Gn)(this);
          }
        };
        m([e.sH], oe.prototype, "m_eCurLang", 2),
          m([e.sH], oe.prototype, "m_rgHasData", 2),
          m([e.sH], oe.prototype, "m_bHasLocalizationContext", 2),
          m([re.o], oe.prototype, "GetCurEditLanguage", 1),
          m([re.o], oe.prototype, "SetCurEditLanguage", 1),
          m([e.XI.bound], oe.prototype, "SetHasLanguage", 1),
          m([re.o], oe.prototype, "BHasLanguageData", 1);
        let $ = oe;
        function de() {
          return (0, k.q3)(() => $.Get().GetCurEditLanguage());
        }
      },
      37656: (M, ge, a) => {
        "use strict";
        a.d(ge, { w: () => V });
        var e = a(41735),
          k = a.n(e),
          N = a(14947),
          ie = a(65946),
          re = a(90626),
          Z = a(27066),
          ne = a(8323),
          se = a(30096),
          H = a(3166),
          m = Object.defineProperty,
          oe = Object.getOwnPropertyDescriptor,
          $ = (E, l, g, C) => {
            for (
              var A = C > 1 ? void 0 : C ? oe(l, g) : l, J = E.length - 1, T;
              J >= 0;
              J--
            )
              (T = E[J]) && (A = (C ? T(l, g, A) : T(A)) || A);
            return C && A && m(l, g, A), A;
          };
        const de = class Fn {
          constructor() {
            (0, N.Gn)(this);
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
        $([N.sH], de.prototype, "giveaway_id", 2),
          $([N.sH], de.prototype, "seconds_until_drawing", 2),
          $([N.sH], de.prototype, "rtime_start", 2),
          $([N.sH], de.prototype, "rtime_end", 2),
          $([N.sH], de.prototype, "closed", 2),
          $([N.sH], de.prototype, "winner_count", 2);
        let F = de;
        const U = class st {
          constructor() {
            (0, N.Gn)(this);
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
            return (
              this.m_mapNextDrawChangeCallback.has(l) ||
                this.m_mapNextDrawChangeCallback.set(l, new ne.lu()),
              this.m_mapNextDrawChangeCallback.get(l)
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
            let C = H.TS.STORE_BASE_URL + "prizes/nextdraw/" + l,
              A = null,
              J = { origin: self.origin };
            return (
              (A = await k().get(C, { params: J })),
              (0, N.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(l) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(l, new F()),
                  this.CopyToGiveaway(
                    A.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(l),
                  ),
                  g !== void 0)
                ) {
                  const T = this.GetKey(l, g);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(T) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      T,
                      new F(),
                    ),
                    this.CopyToGiveaway(
                      A.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(T),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(l).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(l),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(l)
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
              let l = (0, H.Tc)("giveawaynextdraw", "application_config");
              if (l && l.giveaway_id) {
                let g = new F();
                this.CopyToGiveaway(l, g),
                  this.m_mapGiveawayIDToNextDrawInfo.set(l.giveaway_id, g);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        $([N.sH], U.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          $([N.XI], U.prototype, "CopyToGiveaway", 1);
        let W = U;
        const y = class jn {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = jn.s_GlobalInstance),
              (jn.s_GlobalInstance += 1);
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
              let C =
                l.seconds_until_drawing <= 0 && l.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(g, C);
            }
          }
          SetupCountDown(l, g) {
            l > 0 && (this.m_intervalCountDownID = window.setInterval(g, 1e3));
          }
        };
        $([Z.o], y.prototype, "ClearRefreshInterval", 1),
          $([Z.o], y.prototype, "ClearCountDown", 1),
          $([Z.o], y.prototype, "SetupRefreshDataInterval", 1),
          $([Z.o], y.prototype, "SetupCountDown", 1);
        let D = y;
        function Q(E, l) {
          const g = W.Get().GetInfoByInstance(E, l.m_myInstanceNumber);
          (g.seconds_until_drawing -= 1),
            g.seconds_until_drawing == 0 && l.ClearCountDown();
        }
        function B(E, l) {
          const g = W.Get().GetInfoByInstance(E, l.m_myInstanceNumber);
          g &&
            g.BIsValid() &&
            g.seconds_until_drawing <= 0 &&
            !g.closed &&
            (l.ClearCountDown(),
            W.Get()
              .ReloadGiveaway(E, l.m_myInstanceNumber)
              .then((C) => {
                l.SetupCountDown(C.seconds_until_drawing, () => Q(E, l));
              }));
        }
        function V(E) {
          const [l] = (0, re.useState)(new D()),
            g = (0, se.CH)();
          (0, re.useEffect)(
            () => (
              W.Get()
                .ReloadGiveaway(E, l.m_myInstanceNumber)
                .then((te) => {
                  l.SetupRefreshDataInterval(te, () => B(E, l)),
                    l.SetupCountDown(te.seconds_until_drawing, () => Q(E, l)),
                    g();
                }),
              () => {
                l.ClearRefreshInterval(), l.ClearCountDown();
              }
            ),
            [l, E, g],
          );
          const C = W.Get().GetInfoByInstance(E, l.m_myInstanceNumber),
            [A, J, T] = (0, ie.q3)(() => [
              C?.winner_count,
              C?.closed,
              C?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !C || C.giveaway_id == null || !C.BStarted() || A === void 0,
            winner_count: A,
            closed: J,
            seconds_until_drawing: T,
          };
        }
      },
      55436: (M, ge, a) => {
        "use strict";
        a.d(ge, { r: () => de, z: () => oe });
        var e = a(7850),
          k = a(90626),
          N = a(16412),
          ie = a(25792),
          re = a(96538),
          Z = a(18210),
          ne = a(85599),
          se = a(17618),
          H = a.n(se),
          m = a(53424);
        const oe = (F) => {
            const { clanSteamID: U, fnImageSelectCallBack: W } = F,
              [y, D] = (0, k.useState)(""),
              Q = (0, m.mr)(F.clanSteamID.GetAccountID()),
              B = () => F.closeModal && F.closeModal(),
              V = m.pU.GetFilteredClanImages(U, y),
              E = (l) => {
                W(l), B();
              };
            return (0, e.jsx)(ie.tH, {
              children: (0, e.jsx)(re.x_, {
                onEscKeypress: B,
                children: (0, e.jsxs)(N.UC, {
                  children: [
                    (0, e.jsx)(N.Y9, {
                      children: (0, Z.we)("#ClanImageChooser_Title"),
                    }),
                    (0, e.jsx)(N.nB, {
                      children: (0, e.jsxs)(N.a3, {
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, Z.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, e.jsx)(N.pd, {
                            placeholder: (0, Z.we)("#ClanImageChooser_Search"),
                            value: y,
                            onChange: (l) => D(l.currentTarget.value),
                          }),
                          (0, e.jsx)("div", {
                            className: se.ImagesOuterContainer,
                            children: Q
                              ? (0, e.jsx)(ne.t, {
                                  size: "medium",
                                  string: (0, Z.we)("#Loading"),
                                })
                              : V.length > 0
                                ? V.map((l) =>
                                    (0, e.jsx)(
                                      $,
                                      {
                                        clanImage: l,
                                        searchStringHilight: y,
                                        fnImageClick: E,
                                      },
                                      "ci" + l.image_hash,
                                    ),
                                  )
                                : y.trim().length == 0
                                  ? (0, e.jsx)("div", {
                                      children: (0, Z.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, e.jsx)("div", {
                                      children: (0, Z.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsx)(N.wi, {
                      children: (0, e.jsx)(N.$n, {
                        onClick: B,
                        children: (0, Z.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          $ = (F) => {
            const { clanImage: U, searchStringHilight: W, fnImageClick: y } = F;
            let D = U.file_name ? U.file_name : "",
              Q = de(W, D, String(U.imageid), se.Hilight);
            return (0, e.jsxs)("div", {
              className: se.ImageContainer,
              children: [
                (0, e.jsx)("div", {
                  className: se.Image,
                  style: { backgroundImage: `url( '${U.thumb_url}' )` },
                  onDoubleClick: () => y(U),
                }),
                (0, e.jsx)("div", {
                  className: se.ImageFilename,
                  title: D,
                  children: Q,
                }),
              ],
            });
          };
        function de(F, U, W, y) {
          let D = [];
          if (F.length > 0) {
            let Q = U.toLocaleLowerCase();
            for (let B = 0; B < U.length; ) {
              let V = Q.indexOf(F, B);
              if (V < 0) {
                D.push(
                  (0, e.jsx)(
                    "span",
                    { children: U.substring(B) },
                    W + "_" + String(B),
                  ),
                );
                break;
              } else
                B < V &&
                  D.push(
                    (0, e.jsx)(
                      "span",
                      { children: U.substring(B, V) },
                      W + "_" + String(B),
                    ),
                  ),
                  D.push(
                    (0, e.jsx)(
                      "span",
                      { className: y, children: U.substr(V, F.length) },
                      W + "_" + String(B),
                    ),
                  ),
                  (B = V + F.length);
            }
          } else D.push((0, e.jsx)("span", { children: U }, W + "_null"));
          return D;
        }
      },
      24806: (M, ge, a) => {
        "use strict";
        a.d(ge, { Ng: () => y });
        var e = a(7850),
          k = a(75844),
          N = a(90626),
          ie = a(99412),
          re = a(32093),
          Z = a(50109),
          ne = a(95695),
          se = a.n(ne),
          H = a(36707),
          m = a(18210),
          oe = a(92264),
          $ = a(30096),
          de = a(71421),
          F = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          W = (B, V, E, l) => {
            for (
              var g = l > 1 ? void 0 : l ? U(V, E) : V, C = B.length - 1, A;
              C >= 0;
              C--
            )
              (A = B[C]) && (g = (l ? A(V, E, g) : A(g)) || g);
            return l && g && F(V, E, g), g;
          };
        let y = class extends N.Component {
          GenerateLanguageOptions() {
            let B = [];
            const {
              fnFilterLanguage: V,
              fnLangHasData: E,
              fnLastUpdateRTime: l,
              fnIsLangSupported: g,
            } = this.props;
            this.props.bAllowUnsetOption &&
              B.push(
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
            const A = this.props.realms || [re.TU.k_ESteamRealmGlobal];
            for (const T of m.A0.GetLanguageListForRealms(A)) {
              if (V && !V(T)) continue;
              const te = (0, ie.LgB)(T),
                c = (0, m.we)("#Language_" + te),
                fe = !!(g && g(T));
              C.push({ eLang: T, sLocName: c, bSupported: fe });
            }
            C.sort((T, te) =>
              T.bSupported != te.bSupported
                ? T.bSupported
                  ? -1
                  : 1
                : T.sLocName.localeCompare(te.sLocName),
            );
            let J = !1;
            for (const T of C) {
              T.bSupported != J &&
                (B.push(
                  (0, e.jsx)(
                    "option",
                    {
                      className: se().SupportedGroupLabel,
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
              const te = E && E(T.eLang),
                c = l && l(T.eLang);
              let fe = T.sLocName;
              c &&
                c !== 0 &&
                ((fe += " "),
                (fe += (0, m.we)(
                  "#Language_Last_Update",
                  (0, m.$z)(c) +
                    " @ " +
                    (0, oe.KC)(c, { bForce24HourClock: !1 }),
                ))),
                B.push(
                  (0, e.jsx)(
                    "option",
                    {
                      value: T.eLang,
                      className: (0, H.A)(
                        { [se().LanguageWithContent]: te },
                        T.bSupported
                          ? se().SupportedLanguage
                          : se().UnsupportedLanguage,
                      ),
                      children: fe,
                    },
                    "langpicker" + T.eLang + (te ? "_hasdata" : ""),
                  ),
                );
            }
            return B;
          }
          OnLanguageChange(B) {
            const { fnOnLanguageChanged: V, selectedLang: E } = this.props;
            let l = Number.parseInt(B.currentTarget.value);
            l != E && V && V(l);
          }
          render() {
            const { selectedLang: B, bDisabled: V, strTooltip: E } = this.props;
            let l = this.GenerateLanguageOptions();
            return (0, e.jsx)(de.he, {
              toolTipContent: E,
              children: (0, e.jsx)("select", {
                value: B,
                onChange: this.OnLanguageChange,
                disabled: V,
                children: l,
              }),
            });
          }
        };
        W([$.oI], y.prototype, "OnLanguageChange", 1), (y = W([k.PA], y));
        function D(B) {
          const [V, E] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(y, {
            selectedLang: E,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !V,
            strTooltip: V ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function Q(B) {
          const { fnLangHasData: V } = B;
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
              l[g] = !!(V && V(g));
            return l;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(E), [E]),
            jsx(Fragment, {})
          );
        }
      },
      14069: (M, ge, a) => {
        "use strict";
        a.d(ge, { _: () => ho });
        var e = a(7850),
          k = a(99412),
          N = a(19298),
          ie = a(20169),
          re = a(28604),
          Z = a(36631),
          ne = a(64387);
        function se(o) {
          const { strURL: t } = o;
          return t
            ? (0, e.jsx)("div", {
                className: ne.MenuBackgroundReflection,
                children: (0, e.jsx)("img", { alt: "", src: t }),
              })
            : null;
        }
        var H = a(65946),
          m = a(90626),
          oe = a(73259),
          $ = a(25792),
          de = a(52393),
          F = a.n(de),
          U = a(95695),
          W = a.n(U),
          y = a(36707),
          D = a(3166),
          Q = a(82054),
          B = a(68266);
        function V(o) {
          const { event: t, bIsPreview: n } = o;
          let s = t.jsondata.sale_background_video_webm,
            r = t.jsondata.sale_background_video_mp4;
          return r || s
            ? (0, e.jsx)($.tH, {
                children: (0, e.jsxs)("video", {
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  playsInline: !0,
                  className: (0, y.A)(
                    F().SaleBackground,
                    F()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleBackground",
                    F().fullscreen_bg_video,
                  ),
                  style: {
                    backgroundColor: n
                      ? t.jsondata.sale_background_color
                      : void 0,
                  },
                  children: [
                    s && (0, e.jsx)("source", { src: s, type: "video/webm" }),
                    r &&
                      !D.TS.IN_CLIENT &&
                      (0, e.jsx)("source", { src: r, type: "video/mp4" }),
                  ],
                }),
              })
            : null;
        }
        function E(o) {
          const { event: t, language: n, children: s, bIsPreview: r } = o,
            i = m.useRef(null),
            d = (0, B.m0)(t, "sale_header", n),
            [h] = (0, H.q3)(() => [t.jsondata.sale_sub_menu]);
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
                ? (0, e.jsx)(Q.j, {
                    event: t,
                    language: n,
                    bIsPreview: r,
                    subMenu: h,
                    styleVariation: Q.g.k_SubMenu,
                  })
                : (0, e.jsx)(se, { strURL: d }),
              (0, e.jsx)("div", {
                className: (0, y.A)({
                  SaleBackgroundCtn: !0,
                  ContentHubSalePage: p,
                }),
                children: (0, e.jsxs)("div", {
                  className: (0, y.A)(
                    F()[`CustomStyle_${t.jsondata.sale_vanity_id}`],
                    "SaleCustomCSS",
                    F().SaleBackground,
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
                          className: (0, y.A)(
                            W().SalePageBackground,
                            W().BackgroundImage,
                            W().Blur,
                          ),
                          src: d,
                          alt: "Header",
                        })
                      : (0, e.jsx)("div", {
                          className: (0, y.A)(
                            W().SalePageBackground,
                            W().BackgroundImage,
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
        var l = a(26589),
          g = a(39905),
          C = a(50909),
          A = a.n(C);
        function J(o) {
          const { eventModel: t } = o,
            { data: n } = (0, l.hM)(t.clanSteamID.GetAccountID());
          if (
            !n ||
            (!n.can_edit && !n.support_user) ||
            (0, D.yK)() == "community"
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
              className: A().SalePageHiddenWarning,
              children: (0, e.jsxs)("div", {
                children: [
                  !t.BIsVisibleEvent() &&
                    (0, e.jsx)("div", {
                      className: A().WarningText,
                      children: g.Z.Localize("#Sale_SaleEventIsHidden"),
                    }),
                  r.length > 0 &&
                    (0, e.jsxs)("div", {
                      className: A().WarningText,
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
          te = a.n(T),
          c = a(18210);
        function fe(o) {
          const { eventModel: t, language: n } = o,
            [s, r] = (0, H.q3)(() => [
              t.jsondata.sale_logo_url,
              c.NT.GetWithFallback(t.jsondata.localized_sale_logo, n),
            ]);
          return r && r?.length > 0
            ? s
              ? (0, e.jsx)("a", {
                  className: te().SalePageLogoCtn,
                  href: D.TS.STORE_BASE_URL + s,
                  children: (0, e.jsx)(Ke, { ...o }),
                })
              : (0, e.jsx)("div", {
                  className: (0, y.A)(te().SalePageLogoCtn, "SalePageLogoCtn"),
                  children: (0, e.jsx)(Ke, { ...o }),
                })
            : null;
        }
        function Ke(o) {
          const { eventModel: t, language: n } = o,
            s = (0, B.m0)(t, "sale_logo", n);
          return (0, e.jsx)("img", { src: s, alt: "logo" });
        }
        var jt = a(72865),
          Rt = a(71347),
          Qe = a.n(Rt),
          Ye = a(53107);
        function Fe(o) {
          const { rgPresenters: t } = o;
          if (!t || t.length == 0) return null;
          const n = (0, k.sfN)(D.TS.LANGUAGE);
          return t.length == 1
            ? (0, e.jsx)("div", {
                className: (0, y.A)(
                  Qe().PresenterDisclaimer,
                  "PresenterDisclaimer",
                ),
                children: g.Z.LocalizeReact(
                  "#SalePresented_By",
                  (0, e.jsx)(rt, { presentor: t[0], lang: n }),
                ),
              })
            : (0, e.jsx)("div", {
                className: (0, y.A)(
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
            s = (0, jt.aL)(t.url);
          return (0, e.jsx)(Ye.uU, {
            href: s,
            bUseLinkFilter: !0,
            className: Qe().PresenterLabel,
            children: c.NT.GetWithFallback(t.localized_presenter_name, n),
          });
        }
        var Ut = a(60480),
          Dt = a(92757),
          Oe = a(18994),
          $e = a(56412),
          qe = a(86515),
          kt = a(39153),
          Et = a(61478);
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
              (0, e.jsx)(Et.B, {
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
          Vt = a(14560),
          gt = a(9807),
          bt = a(20860),
          Ie = a.n(bt);
        function Kt(o, t) {
          return o
            ? t
              ? !!o.valve_admin
              : !!(o.valve_admin || o.support_user)
            : !1;
        }
        function yt(o, t) {
          const n = !!(o && o.BIsClanAccount()),
            { data: s } = (0, l.hM)(n ? o.GetAccountID() : 0);
          return n && Kt(s, t);
        }
        function At(o) {
          const { clanSteamID: t, id: n } = o;
          return yt(t, o.requireAdmin)
            ? (0, e.jsx)("div", {
                id: n,
                className: (0, y.A)(
                  o.className,
                  o.requireAdmin
                    ? U.ValveOnlyAdminBackground
                    : U.ValveOnlyBackground,
                ),
                children: o.children,
              })
            : null;
        }
        var q = a(16412);
        const et = 12,
          ut = 240;
        function Qt(o) {
          const { event: t } = o,
            [n] = (0, Ht.Q)(Oe.QS, void 0),
            [s, r] = m.useState(!1),
            i = (0, D.Tc)("rgMLRecommenderWishlist", "application_config"),
            d = Array.isArray(i) && i.length > 0 && Number.isInteger(i[0]);
          return !t.BIsNextFest() ||
            !d ||
            n == Oe.sQ.Random ||
            (0, oe.UR)(t) > 0
            ? null
            : (0, e.jsxs)(At, {
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
                  s && (0, e.jsx)(Yt, { event: t, rgRecommendedAppIDs: i }),
                ],
              });
        }
        function Yt(o) {
          const { event: t, rgRecommendedAppIDs: n } = o,
            [s, r] = m.useState(void 0);
          (0, dt.zX)(n, ct.Xh);
          const [i, d] = m.useState(void 0),
            [h, u] = m.useState(""),
            p = t.jsondata.sale_ml_recommender_weight_exponent || oe.ld,
            v = parseFloat(h),
            I = i ?? (0, Vt.JE)(t),
            _ = v || p,
            x = m.useMemo(() => (0, gt.a0)(n, n, (w) => w, I, _), [n, I, _]),
            L = m.useMemo(() => new Map(n.map((w, Y) => [w, Y])), [n]),
            P = m.useMemo(() => new Map(x.map((w, Y) => [w, Y])), [x]),
            b = n.length,
            j = (w) => Wt.A.Get().GetApp(w)?.GetName() ?? `App ${w}`,
            R = (w) => `hsl(${Math.round((240 * L.get(w)) / b)}, 80%, 65%)`,
            O = (w, Y) =>
              (0, e.jsx)(
                "div",
                {
                  className: (0, y.A)(Ie().Row, s == w && Ie().Highlighted),
                  style: { height: et, color: R(w) },
                  title: `${j(w)} (${w}): recommended #${L.get(w) + 1}, shuffled to #${P.get(w) + 1}`,
                  onMouseEnter: () => r(w),
                  children: Y,
                },
                w,
              ),
            z = (w, Y) =>
              (0, e.jsx)(
                "line",
                {
                  x1: 0,
                  y1: (L.get(w) + 0.5) * et,
                  x2: ut,
                  y2: (P.get(w) + 0.5) * et,
                  stroke: Y ? "white" : R(w),
                  strokeWidth: Y ? 2 : 1,
                  strokeOpacity: Y ? 1 : s === void 0 ? 0.6 : 0.15,
                },
                w,
              );
          return (0, e.jsxs)("div", {
            className: Ie().Body,
            children: [
              (0, e.jsxs)("div", {
                className: Ie().Summary,
                children: [
                  b,
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
                  (0, e.jsx)(q.$n, {
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
                    (0, e.jsx)(q.$n, {
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
                      n.map((w, Y) => O(w, `#${Y + 1} ${j(w)}`)),
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
                        height: b * et,
                        children: [
                          n.filter((w) => w != s).map((w) => z(w, !1)),
                          s !== void 0 && L.has(s) && z(s, !0),
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
                      x.map((w) => O(w, `#${L.get(w) + 1} ${j(w)}`)),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Zt(o) {
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
        var Me = a(179),
          Ne = a(50109),
          Re = a(30096),
          Ge = a(98609),
          Te = a(57673);
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
                  let b = 0;
                  b < (_?.num_sections || 0) &&
                  u < t.length &&
                  t[u].section_type != "tabs";
                  ++b, ++u
                ) {
                  const R = t[u].unique_id;
                  L.push(R),
                    r.set(R, _.background_id),
                    b === 0 && i.set(R, _.background_id);
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
                    let b = u;
                    b < t.length &&
                    (!p || !p.enabled || b < v) &&
                    !(t[b].section_type == "tabs" && p?.enabled);
                    ++b
                  ) {
                    const R = t[b].unique_id;
                    r.set(R, _.background_id);
                  }
              }),
              u < t.length && (v === void 0 || u < v) && (d = t[u].unique_id),
              p?.enabled && v !== void 0)
            ) {
              let _ = v;
              const x = p.groups.length;
              for (
                p.groups.forEach((L, P) => {
                  if (_ >= t.length) return;
                  const b = new Array();
                  for (
                    let O = 0;
                    O < L.num_sections && _ < t.length;
                    ++O, ++_
                  ) {
                    const z = t[_],
                      w = z.unique_id;
                    (0, Te.bF)(n, z)
                      ? (b.push(w),
                        r.set(w, L.background_id),
                        O === 0 && i.set(w, L.background_id))
                      : --O;
                  }
                  let j = _;
                  for (; j < t.length && !(0, Te.bF)(n, t[j]); ) j += 1;
                  if (
                    (s.set(L.background_id, {
                      nBackgroundGroupID: L.background_id,
                      sectionUniqueIDs: b,
                      nSaleSectionLastIndex: _ - 1,
                      nUniqueIDNextSaleSection:
                        j < t.length ? t[j].unique_id : void 0,
                    }),
                    P + 1 == x && p.last_group_until_cover_section_until_end)
                  )
                    for (let O = _; O < t.length; ++O) {
                      const z = t[O];
                      if (z.section_type == "tabs" && p?.enabled) break;
                      (0, Te.bF)(n, z) && r.set(z.unique_id, L.background_id);
                    }
                });
                _ < t.length && !(0, Te.bF)(n, t[_]);
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
          Pe = a(81416);
        function wt(o, t, n, s) {
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
                  n !== Pe.S.EPreviewMode_EditBackground
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
            i = (0, Ne.E)(),
            d = m.useCallback(
              (x, L) => {
                tt.set(r.nBackgroundGroupID, L);
              },
              [r],
            ),
            h = (0, Re.w6)(d);
          if (!n || (Array.isArray(n) && n.length == 0)) return null;
          if (!t) return (0, e.jsx)(e.Fragment, { children: n });
          let u;
          if (t.localized_background_art) {
            const x = (0, k.LgB)(i),
              L =
                x in t.localized_background_art
                  ? x
                  : c.A0.GetLanguageFallback(Ge.TS.LANGUAGE),
              P = t.localized_background_art[L];
            P && (u = he.zU.GenerateURLFromHashAndExt(s.clanSteamID, P));
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
        var Ze = a(4720),
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
              !!s && (0, e.jsx)(q.JU, { children: s }),
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
                  children: (0, e.jsx)(q.$n, {
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
        var S = a(13447),
          G = a.n(S),
          X = a(32190),
          K = a.n(X),
          ee = a(76559),
          le = a(75909),
          ue = a(53424),
          ye = a(72604),
          Ae = a(41735),
          Se = a.n(Ae),
          Be = a(14947),
          xe = a(9046),
          vn = Object.defineProperty,
          Gt = Object.getOwnPropertyDescriptor,
          Dn = (o, t, n, s) => {
            for (
              var r = s > 1 ? void 0 : s ? Gt(t, n) : t, i = o.length - 1, d;
              i >= 0;
              i--
            )
              (d = o[i]) && (r = (s ? d(t, n, r) : d(r)) || r);
            return s && r && vn(t, n, r), r;
          };
        const En = class zn {
          m_curLocImageGroup = null;
          m_curLocImageGroupType = null;
          constructor() {
            (0, Be.Gn)(this);
          }
          static async BDoesClanImageFileExistsOnCDNOrOrigin(t, n, s, r) {
            let i =
                D.TS.COMMUNITY_BASE_URL +
                "gid/" +
                n.ConvertTo64BitString() +
                "/hasclanimagefile",
              d = { image_hash_and_ext: s, lang: "" + r };
            return (
              (await Se().get(i, { params: d, cancelToken: t && t.token })).data
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
                k.bP9,
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
              s = ee.b.InitFromClanID(n.clanAccountID),
              r = he.zU.GetHashAndExt(n) ?? "",
              i = [];
            for (let h = k.Bhc; h < k.bP9; ++h)
              i.push(zn.BDoesClanImageFileExistsOnCDNOrOrigin(t, s, r, h));
            const d = await Promise.all(i);
            (0, Be.h5)(() => {
              for (let h = k.Bhc; h < k.bP9; ++h)
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
              const r = ee.b.InitFromClanID(s.clanAccountID),
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
        Dn([Be.sH], En.prototype, "m_curLocImageGroup", 2);
        let Hn = En;
        const we = new Hn();
        var at = a(38410),
          Bt = a(34592),
          bn = a(75844),
          fn = a(32093),
          In = a(72849),
          Wn = a(64),
          Vn = a(72739),
          vt = a(82734);
        function Kn(o, t) {
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
            Vn.createPortal(
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
        async function jo(o, t = 1e3) {
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
        function Do(o) {
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
        var Yn = a(71647),
          ot = a.n(Yn);
        function Zn(o) {
          const {
              onDropFiles: t,
              renderDesciption: n,
              elAdditonalButtons: s,
              elOverrideDragAndDropText: r,
            } = o,
            [i, d] = Qn(t),
            [h, u] = Kn(t, {
              accept: "image/png, image/jpeg, image/gif, image/webp",
              multiple: !0,
            });
          return (0, e.jsxs)("div", {
            ...i,
            className: (0, y.A)(
              d ? ot().DragAndDropContainerDragging : ot().DragAndDropContainer,
              "DragAndDropContainer",
            ),
            children: [
              !!n && n(),
              (0, e.jsx)("div", {
                children: r || (0, c.we)("#ImagePicker_DragAndDrop"),
              }),
              (0, e.jsxs)("div", {
                className: ot().ImageUploadBar,
                children: [
                  h,
                  (0, e.jsxs)("label", {
                    onClick: u,
                    children: [
                      (0, e.jsxs)("span", {
                        children: [(0, c.we)("#ImagePicker_OrBrowse"), " "],
                      }),
                      (0, e.jsx)("span", {
                        className: ot().SelectImageButton,
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
        var ft = a(36118),
          Jn = a(21254),
          Xn = a(27344),
          je = a.n(Xn),
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
            [h, u] = (0, H.q3)(() => [
              t.GetUploadImages(),
              Ne.O.Get().GetCurEditLanguage(),
            ]),
            p = m.useCallback(
              async (_) => {
                let x = Array.from(_),
                  L = !0;
                for (let P = 0; P < x.length; P++) {
                  const b = x[P],
                    { language: j } = (0, at.jj)(b?.name, u);
                  try {
                    const R = (0, at.PD)(j, u, d);
                    (L = await t.AddImageForLanguage(b, R)),
                      L ||
                        (console.error(
                          "ImageUploaderPanel.OnDropFiles: failed on i=" +
                            P +
                            " file=" +
                            b.name,
                        ),
                        (0, _e.pg)(
                          (0, e.jsx)(me.KG, {
                            strDescription: (0, c.we)(
                              "#ImagePicker_Error",
                              b.name,
                            ),
                          }),
                          window,
                        ));
                  } catch (R) {
                    let O = (0, Bt.H)(R);
                    console.error(
                      "ImageUploaderPanel.OnDropFiles: " + O.strErrorMsg,
                      O,
                    ),
                      (0, _e.pg)(
                        (0, e.jsx)(me.KG, {
                          strDescription: (0, c.we)(
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
          (0, H.q3)(() =>
            h.map((_) => ({ a: _.GetCurrentImageOption(), b: _.language })),
          );
          const I = async () => {
            const _ = await t.UploadAllImages(r);
            n?.(_);
          };
          return (0, e.jsxs)(Zn, {
            onDropFiles: p,
            elAdditonalButtons: v,
            elOverrideDragAndDropText: s,
            children: [
              (0, e.jsx)(m.Fragment, {
                children: (0, e.jsx)("div", {
                  className: je().UploadPreviewCtn,
                  children: h.map((_) =>
                    (0, e.jsx)(
                      An,
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
            [s] = (0, H.q3)(() => [t.GetUploadImages()]),
            r = s.some((d) => d.status == "pending"),
            i = s.some(
              (d) =>
                d.status == "waiting" ||
                d.status == "uploading" ||
                d.status == "processing",
            );
          return (0, e.jsxs)("div", {
            style: { display: "flex" },
            className: je().UploadPreviewButtonsCtn,
            children: [
              !!s.length &&
                (0, e.jsx)(q.$n, {
                  style: { margin: "8px" },
                  onClick: n,
                  disabled: !r,
                  children: (0, c.we)("#ImageUpload_Upload"),
                }),
              !!s.length &&
                (0, e.jsx)(q.$n, {
                  style: { margin: "8px" },
                  onClick: t.ClearImages,
                  disabled: i,
                  children: (0, c.we)("#ImageUpload_Clear"),
                }),
            ],
          });
        }
        function Eo(o, t, n, s, r) {
          let i = new Array();
          return (
            o.GetUploadImages().forEach((d) => {
              i.push(
                jsx(
                  An,
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
        const An = (0, bn.PA)(ta);
        function ta(o) {
          const t = (x) => {
              if (x instanceof Wn.M7) {
                x.ResetImage();
                const L = window,
                  P = (0, e.jsx)(Jn.q, {
                    ownerWin: L,
                    uploadFile: x,
                    forceResolution: o.forceResolution,
                    fileType: o.forceFileType || In.bg.dU,
                  });
                (0, _e.HT)(P, L, "CropModal", {
                  strTitle: (0, c.we)("#ImageUpload_CropModalTitle"),
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
                P;
              x.bEnforceDimensions && (L += ` - ${x.width}x${x.height}`),
                x.bDeprecated &&
                  ((L += ` ${(0, c.we)("#ImageUpload_Deprecated")}`),
                  (P = (0, c.we)("#ImageUpload_Deprecated_ttip")));
              let b;
              return (
                (n.BIsOriginalMinimumDimensions(x) &&
                  n.FileTypeMatchesImageTypes(x)) ||
                  (b = je().ImageDimensionTooSmall),
                { label: L, data: x, strOptionClass: b, tooltip: P }
              );
            }).filter((x) => !x.data.bHiddenFromDropdown),
            d = {
              pending: (0, c.we)("#ImageUpload_Pending"),
              waiting: (0, c.we)("#ImageUpload_Waiting"),
              uploading: (0, c.we)("#ImageUpload_Uploading"),
              processing: (0, c.we)("#ImageUpload_Processing"),
              success: (0, c.we)("#ImageUpload_SuccessCard"),
              failed: (0, c.we)("#ImageUpload_Failed"),
            },
            h = n.BSupportsLanguages()
              ? oa(
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
          let I;
          const _ = n.GetCurrentImageOption();
          return (
            _ && (I = i?.find((x) => x.data.sKey == _.sKey)?.data),
            I || (I = i?.[0]?.data),
            (0, e.jsxs)("div", {
              className: je().UploadPreview,
              children: [
                (0, e.jsx)("div", {
                  className: je().UploadPreviewDelete,
                  onClick: () => s(n),
                  children: (0, e.jsx)(ft.sED, {}),
                }),
                (0, e.jsx)(na, { asset: n }),
                h &&
                  (0, e.jsx)(q.m, {
                    strDropDownClassName: W().DropDownScroll,
                    rgOptions: h,
                    selectedOption: n.language,
                    onChange: (x) => (n.language = x.data),
                    disabled: !p,
                  }),
                i &&
                  i?.length > 1 &&
                  (0, e.jsx)(q.m, {
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
                      { className: je().UploadPreviewWarning, children: x },
                      `warning${L}`,
                    ),
                  ),
                p &&
                  u.messages?.map((x, L) =>
                    (0, e.jsx)(
                      "div",
                      { className: je().UploadPreviewMessage, children: x },
                      `message${L}`,
                    ),
                  ),
                (0, e.jsxs)("div", {
                  className: (0, y.A)({
                    [W().FlexColumnContainer]: !0,
                    [je().UploadPreviewError]: n.status == "failed",
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
                  className: je().UploadPreviewError,
                  children: n.message,
                }),
                p &&
                  u.error &&
                  (0, e.jsx)("div", {
                    className: je().UploadPreviewError,
                    children: u.error,
                  }),
                p &&
                  u.needsCrop &&
                  (0, e.jsx)(q.jn, {
                    onClick: () => t(n),
                    children: (0, c.we)("#ImageUpload_OpenEditor"),
                  }),
              ],
            })
          );
        }
        function na(o) {
          const { asset: t } = o;
          return t.BIsVideo()
            ? (0, e.jsxs)("div", {
                className: je().PreviewImgCtn,
                onClick: (n) =>
                  (0, _e.pg)((0, e.jsx)(aa, { asset: t }), (0, vt.uX)(n)),
                children: [
                  (0, e.jsxs)("span", {
                    className: je().PreviewImgInfo,
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
                className: je().PreviewImgCtn,
                style: { backgroundImage: `url(${t.dataUrl})` },
                children: (0, e.jsxs)("span", {
                  className: je().PreviewImgInfo,
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
            if (s == k.X51) continue;
            const r = (0, c.we)("#Language_" + (0, k.LgB)(s));
            n.push({ label: r, data: s });
          }
          return (
            n.sort((s, r) => s.label.localeCompare(r.label)),
            n.forEach((s) => t.push({ label: s.label, data: s.data })),
            n
          );
        }
        var Tt = ((o) => (
          (o[(o.k_eInsertThumbnail = 1)] = "k_eInsertThumbnail"),
          (o[(o.k_eInsertFullImage = 2)] = "k_eInsertFullImage"),
          (o[(o.k_eShowImageGroup = 3)] = "k_eShowImageGroup"),
          (o[(o.k_eInsertVideo = 4)] = "k_eInsertVideo"),
          o
        ))(Tt || {});
        function wn(o, t = !1) {
          return t
            ? `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetThumbHashAndExt(o)}`
            : `${k_ClanImageReplacementToken}/${o.clanAccountID}/${ClanImageUtils.GetHashAndExt(o)}`;
        }
        function bo(o, t, n) {
          let s = "";
          const r = wn(t);
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
            const i = wn(t, !0);
            s = "[url=" + r + "][img]" + i + "[/img][/url]";
          }
          o.InsertText(s);
        }
        var sa = a(55436),
          ra = a(53732),
          De = a.n(ra),
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
              placeholder: (0, c.we)("#ImagePicker_Search"),
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
          return (0, e.jsx)(Gn, {
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
        function Gn(o) {
          const { clanAccountID: t, fileNameSearch: n, children: s } = o,
            r = (0, ue.n9)(t),
            i = n.trim().toLowerCase() || "",
            d = ue.pU.GetFilteredClanImagesList(r, i);
          if (d.length == 0) {
            const h = ee.b.InitFromClanID(t);
            let u = ue.pU.GetLoadState(h);
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
        function yo(o) {
          const {
            clanAccountID: t,
            fileNameSearch: n,
            onImageSelected: s,
            selectedItem: r,
          } = o;
          return jsx(Gn, {
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
            p = () => s(t, Tt.k_eInsertFullImage),
            v = () => s(t, Tt.k_eInsertVideo),
            I = () => s(t, Tt.k_eInsertThumbnail),
            _ = (ae) => {
              t.url &&
                (ae.dataTransfer.setData("text", t.url),
                ue.pU.GetClanImageDragListener().forEach((ce) => {
                  let be = ee.b.InitFromClanID(t.clanAccountID);
                  ce(be, !0);
                }));
            },
            x = (ae) => {
              t.url &&
                ue.pU.GetClanImageDragListener().forEach((ce) => {
                  let be = ee.b.InitFromClanID(t.clanAccountID);
                  ce(be, !1);
                });
            },
            L = (ae) => {
              (0, _e.pg)(
                (0, e.jsx)(me.o0, {
                  strTitle: (0, c.we)("#ImagePicker_DeleteImageTitle"),
                  strDescription: "",
                  onOK: b,
                  onCancel: j,
                  closeModal: j,
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
                (0, vt.uX)(ae) ?? window,
              );
            },
            P = (ae) => {
              console.log("ClanImageWrapper on delete error: " + ae),
                (0, _e.pg)(
                  (0, e.jsx)(me.KG, {
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
              let ae = ee.b.InitFromClanID(t.clanAccountID);
              ue.pU
                .DeleteClanImage(ae, t)
                .then((ce) => {
                  ce.success != ye.R && P((0, Bt.H)(ce).strErrorMsg), u(!1);
                })
                .catch((ce) => {
                  P((0, Bt.H)(ce).strErrorMsg), u(!1);
                }),
                j();
            },
            j = () => {},
            R = () => {
              r && r(t);
            },
            O = t.file_name ? t.file_name : "",
            z = (0, sa.r)(n, O, String(t.imageid), De().Hilight),
            w = he.zU.BIsClanImageVideo(t),
            Y = i && !h && !w,
            ve = i && !h && !w,
            Le = i && !h && w,
            Ue = i && !h && !w;
          return (0, e.jsx)(Lt.K, {
            placeholderHeight: "100vh",
            className: De().ImageWrapperContainer,
            rootMargin: "0px 0px 100% 0px",
            children: (0, e.jsxs)("div", {
              className: De().ImageButton,
              children: [
                (0, e.jsx)("div", {
                  className: De().ImageWrapper,
                  style: {
                    backgroundImage: w ? "" : `url( '${t.thumb_url}' )`,
                  },
                  draggable: !0,
                  onDragStart: _,
                  onDragEnd: x,
                  onDoubleClick: p,
                  onClick: R,
                  children: (0, e.jsx)(Bn, {
                    clanImage: t,
                    className: De().VideoBackground,
                  }),
                }),
                Y &&
                  (0, e.jsx)("span", {
                    className: De().Full,
                    onClick: p,
                    children: (0, c.we)("#ImagePicker_FullSize"),
                  }),
                h &&
                  (0, e.jsx)(Je.t, {
                    size: "medium",
                    className: De().FloatingThrobber,
                  }),
                ve &&
                  (0, e.jsx)("span", {
                    className: De().Thumb,
                    onClick: I,
                    children: (0, c.we)("#ImagePicker_Thumbnail"),
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
                    className: De().Full,
                    onClick: v,
                    children: (0, c.we)("#ImagePicker_Video"),
                  }),
                !h &&
                  (0, e.jsx)("span", {
                    className: De().Delete,
                    onClick: L,
                    children: (0, e.jsx)("img", {}),
                  }),
                (0, e.jsx)("div", {
                  className: De().ImageWrapperFilename,
                  title: O,
                  children: z,
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
            { data: r } = (0, l.hM)(t.clanAccountID);
          return s || !r?.valve_admin
            ? null
            : (0, e.jsx)("span", {
                className: (0, y.A)(De().Localized, W().ValveOnlyBackground),
                onClick: () => n?.(t),
                children: "(VO) " + (0, c.we)("#ImagePicker_Localized"),
              });
        }
        function Bn(o) {
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
                  ? jsx(Bn, { clanImage: t })
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
            strTitle: (0, c.we)("#ImagePicker_Images"),
            strDescription: (0, c.we)("#ImagePicker_DoubleClickToSelect"),
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
                    children: [(0, c.we)("#ImagePicker_PreviousImages"), " "],
                  }),
                  (0, e.jsx)("span", {
                    className: ot().SelectImageButton,
                    children: (0, c.we)("#ImagePicker_PreviousImages2"),
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
            [h] = (0, H.q3)(() => [Ne.O.Get().GetCurEditLanguage()]),
            u = (0, le.zO)(t, n, s),
            p = o.uploaderOverride || u,
            [v, I] = m.useState(!1),
            _ = m.useCallback(
              async (P, b) => {
                if (!v) {
                  I(!0);
                  try {
                    const { language: j } = (0, at.jj)(P.file_name ?? "", h),
                      R = (0, at.PD)(j, h, d);
                    await p.AddExistingClanImage(P, R);
                  } catch (j) {
                    let R = (0, Bt.H)(j);
                    console.error("AddExistingClanImage: " + R.strErrorMsg, R),
                      (0, _e.pg)(
                        (0, e.jsx)(me.KG, {
                          strDescription: (0, c.we)(
                            "#EventError_Code",
                            R.strErrorMsg ?? "",
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
            L = (P) => {
              for (const b of P) {
                const j = b.uploadResult;
                if (j?.origimagehash) {
                  const R = (0, at.PD)(j.language, h, d);
                  we.AddLocalizeImageUploaded(j.origimagehash, R);
                } else {
                  const R = ue.pU.GetClanImageByImageHash(
                      t,
                      j?.image_hash ?? "",
                    ),
                    O = b.image.GetCurrentImageOption();
                  if (R && O) {
                    const z = (0, at.PD)(b.image.language, h, d);
                    i(O.artworkType, R, z);
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
                      string: (0, c.we)("#Loading"),
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
        function Tn(o) {
          const {
              clanImage: t,
              closeModal: n,
              lang: s,
              fnOnArtworkLangChange: r,
              realms: i,
              fnLangHasData: d,
            } = o,
            [h, u] = (0, m.useState)(s),
            p = ee.b.InitFromClanID(t.clanAccountID),
            v = (0, H.q3)(() =>
              he.zU.GenerateURLFromHashAndExt(p, he.zU.GetHashAndExt(t) ?? ""),
            );
          return (0, e.jsx)(me.o0, {
            strTitle: (0, c.we)("#selectimage_change_artwork_lang_title"),
            strDescription: (0, c.we)("#selectimage_change_artworl_lang_desc"),
            onOK: () => r?.(t, s, h),
            onCancel: n,
            closeModal: n,
            children: (0, e.jsxs)("div", {
              className: (0, y.A)(W().FlexColumnContainer, pe().ReassignCtn),
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
        var Pt = a(56330);
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
          Sa = a(44894);
        const ja =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzcyREYxMUExREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzcyREYxMUIxREVBMTFFOUJFQTREQjZGQTJEQ0UzOTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NzJERjExODFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NzJERjExOTFERUExMUU5QkVBNERCNkZBMkRDRTM5MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmk/vzIAAAFiSURBVHjaYnz79i0DCDAB8X8gVgUIIEaoSBmIIQRkvAMIIBADJMUIxBVArI0sAAYAAQTTAwNlTEgcXZDpLFDOHCC+A8Sd6FoEAAIIJBAOZKxAEoTZmAPEKSxQSZitFVCz10D5O1iQdE4AYgsouwOKBUBWvAEyRKF+RQa+QLwFIIDQHYUM/gAxC8hfb6C6QTgLKvkaiGtAikBuUAHiD0g6QZJzob5gYUEz9jXUPU+AWAYWETDwG+o9mGQGLLAFoFbcBGJFIGaDagDHCrIV6ti8ArLCFoc3wf4HCDB84YANVEC9HwPEU4B4EiycQKEqgAUjx+F3INYHYkOoZh6YC0CeEUQLS2Qbi4HYCYgvQ8P8AhC3QOMaJRjRNf4C4m3QcP8ODd4QqM0dyIGEDgKgCtmgUf8dypeBamSERoEALi8sAuUnID4AxIegbHQA18OCRTKOlGgBeSECmuH+E4nfQPWAXQwAHbJ3VkYR2TIAAAAASUVORK5CYII=";
        var Da = a(11243);
        function Ea(o) {
          const {
            clanSteamID: t,
            fnGetImageHash: n,
            fnLangHasData: s,
            fnOnRemoveImage: r,
          } = o;
          (0, ue.mr)(t.GetAccountID());
          const i = m.useMemo(() => {
              let p = new Array();
              const v = c.A0.GetLanguageListForRealms([
                fn.TU.k_ESteamRealmGlobal,
                fn.TU.k_ESteamRealmChina,
              ]);
              for (const I of v) {
                const _ = n(I);
                if (_) {
                  const x = (0, k.LgB)(I),
                    L = (0, c.we)("#Language_" + x);
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
                children: (0, c.we)("#selectimage_uploaded_languages"),
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
                (0, e.jsxs)(q.$n, {
                  onClick: h,
                  children: [
                    (0, c.we)("#Sale_RemoveAll"),
                    (0, e.jsx)(Da.o, {
                      tooltip: (0, c.we)("#Sale_RemoveAll_Tooltip"),
                    }),
                  ],
                }),
              (0, e.jsx)(me.EN, {
                active: d,
                children: (0, e.jsx)(me.o0, {
                  strTitle: (0, c.we)("#Dialog_AreYouSure"),
                  strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
                  closeModal: u,
                  onOK: () => {
                    for (let p = 0; p < k.bP9; p++) s && r && s(p) && r(p);
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
            [h, u] = (0, H.q3)(() => {
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
              let v = (0, k.sfN)(p.currentTarget.id);
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
                        toolTipContent: (0, c.we)(
                          "#selectimage_viewimage_ttip",
                        ),
                        children: ft.YNO(),
                      }),
                    }),
                  !!i && (0, e.jsx)(ya, { ...o }),
                  !!d && (0, e.jsx)(Aa, { fnOnRemoveImage: d, langData: n }),
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
            v = (0, H.q3)(() => {
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
                toolTipContent: (0, c.we)("#selectimage_reassign_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: ja,
                  onClick: () => u(),
                }),
              }),
              (0, e.jsx)($.tH, {
                children: (0, e.jsx)(me.EN, {
                  active: h,
                  children: (0, e.jsx)(Tn, {
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
              (0, e.jsx)(ze.he, {
                toolTipContent: (0, c.we)("#selectimage_delete_image_ttip"),
                children: (0, e.jsx)("img", {
                  "data-lang": n.lang,
                  src: Sa.A,
                  onClick: r,
                }),
              }),
              (0, e.jsx)($.tH, {
                children: (0, e.jsx)(me.EN, {
                  active: s,
                  children: (0, e.jsx)(me.o0, {
                    strTitle: (0, c.we)("#selectimage_remove_image"),
                    strDescription: (0, c.we)(
                      "#selectimage_remove_details",
                      (0, c.we)("#Language_" + (0, k.LgB)(n.lang)),
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
          wa = a(21659),
          La = a(15496),
          Ee = a.n(La),
          Ga = a(88812);
        function Ba(o) {
          const {
              event: t,
              spotlightURLOverride: n,
              fnHandleOpenEvent: s,
              fnImageFailureCallback: r,
              fnFilterImageURLsForKnownFailures: i,
              langOverride: d,
            } = o,
            h = (0, wa.c5)(),
            u = m.useCallback(
              (j) => {
                j.preventDefault(), s && s(t);
              },
              [t, s],
            ),
            p = d || (0, k.sfN)(D.TS.LANGUAGE),
            [v, I, _] = (0, H.q3)(() => [
              t.GetSummaryWithFallback(p),
              t.GetNameWithFallback(p),
              t.BShowLibrarySpotlightText(),
            ]);
          let x = "spotlight",
            L = xe.wI.spotlight_main;
          (t.appid == 2434320 || D.TS.EUNIVERSE == k.Rv) &&
            ((x = h
              ? "localized_store_app_spotlight_mobile"
              : "localized_store_app_spotlight"),
            (L = xe.wI.full));
          let P =
            (0, Ga.WC)(n !== void 0 ? void 0 : t, x, p, L) ??
            (n !== void 0 ? [n] : []);
          i && P && (P = i(P));
          const b = v.replace(/https:\/\/[^ ]*/gi, "").trimLeft();
          return (0, e.jsx)(m.Fragment, {
            children: (0, e.jsx)("div", {
              className: Ee().MajorEvent_Ctn,
              ref: o.containerRef,
              children: (0, e.jsxs)(N.Z, {
                className: (0, y.A)(
                  Ee().AppDetailsSpotlightContainer,
                  Ee().MajorEventContainer,
                ),
                onActivate: u,
                focusable: !0,
                children: [
                  (0, e.jsx)("div", {
                    className: Ee().MajorEventBackground,
                    children: (0, e.jsx)(_n.c, {
                      className: Ee().MajorEventImageBackgroundBlur,
                      rgSources: P,
                      onIncrementalError: (j, R, O) => r && r(R),
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    className: Ee().MajorEventImageContainer,
                    children: [
                      (0, e.jsx)(_n.c, {
                        className: Ee().MajorEventImage,
                        rgSources: P,
                        onIncrementalError: (j, R, O) => r && r(R),
                      }),
                      (0, e.jsx)("div", {
                        className: Ee().MajorEventImageTemplate,
                      }),
                      (0, e.jsx)("div", {
                        className: Ee().MajoreEventImageContentContainer,
                        children:
                          _ &&
                          (0, e.jsxs)("div", {
                            className: Ee().MajorEventContent,
                            children: [
                              (0, e.jsx)(_n.c, {
                                className: Ee().MajorEventSpotlightBackground,
                                rgSources: P,
                                onIncrementalError: (j, R, O) => r && r(R),
                              }),
                              (0, e.jsxs)("div", {
                                className: Ee().MajorEventTextCtn,
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Ee().MajorEventTitle,
                                    children: I,
                                  }),
                                  (0, e.jsx)("div", {
                                    className: Ee().MajorEventSummary,
                                    children: b,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, e.jsx)("div", { className: Ee().BottomShadow }),
                ],
              }),
            }),
          });
        }
        var Ta = a(79949),
          Ce = a.n(Ta);
        function Pa(o) {
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
            [L] = (0, H.q3)(() => [ka(n, I)]);
          return L == 0
            ? (0, e.jsxs)("div", {
                className: pe().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(Pn, {
                      imgURL:
                        D.TS.IMG_URL + "events/defaults/default_img_cover.jpg",
                      eventModel: i,
                    }),
                  n === "background" &&
                    (0, e.jsx)(On, {
                      imgURL:
                        D.TS.IMG_URL + "events/defaults/default_img_header.jpg",
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  !![
                    "spotlight",
                    "localized_store_app_spotlight",
                    "localized_store_app_spotlight_mobile",
                  ].includes(n) &&
                    (0, e.jsx)(Oa, {
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
                className: pe().ImagePreviewContainer,
                children: [
                  n === "capsule" &&
                    (0, e.jsx)(Pn, {
                      imgURL: x,
                      eventModel: i,
                      langOverride: t,
                    }),
                  n === "background" &&
                    (0, e.jsx)(On, {
                      imgURL: x,
                      lang: t,
                      eventModel: i,
                      partnerEventStore: d,
                    }),
                  n === "spotlight" &&
                    (0, e.jsx)(Ot, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight" &&
                    (0, e.jsx)(Ot, { imgURL: x, event: i, lang: t }),
                  n === "localized_store_app_spotlight_mobile" &&
                    (0, e.jsx)(Ot, { imgURL: x, event: i, lang: t }),
                  (n === "broadcast_left" || n === "broadcast_right") &&
                    (0, e.jsx)(Na, {
                      imgURL: x,
                      side: n === "broadcast_right" ? "right" : "left",
                    }),
                  n === "sale_header" && (0, e.jsx)(Ra, { imgURL: x }),
                  n === "sale_overlay" && (0, e.jsx)(Ua, { imgURL: x }),
                  xe.pb.includes(n) &&
                    (0, e.jsx)("img", {
                      className: _a.PreviewImg,
                      src:
                        we.GetLocalizedImageGroupForEditAsURL(r, t) ?? void 0,
                    }),
                  n === "product_banner" && (0, e.jsx)(xt, { imgURL: x }),
                  n === "product_mobile_banner" &&
                    (0, e.jsx)(xt, { imgURL: x }),
                  n === "sale_logo" && (0, e.jsx)(xt, { imgURL: x }),
                  n === "bestofyear_banner" && (0, e.jsx)(xt, { imgURL: x }),
                  n === "bestofyear_banner_mobile" &&
                    (0, e.jsx)(xt, { imgURL: x }),
                  (0, e.jsx)(Ea, {
                    langOverride: t,
                    clanSteamID: r,
                    fnOnLanguagePreviewChange: s,
                    fnOnRemoveImage: h,
                    fnOnArtworkLangChange: u,
                    realms: p,
                    fnLangHasData: v,
                    fnGetImageHash: (P) => xn(I(n, P) ?? ""),
                  }),
                ],
              });
        }
        function Ao(o) {
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
        function Oa(o) {
          const { artworkType: t, langOverride: n, eventModel: s } = o,
            r = It.Fj[t],
            i = m.useMemo(
              () =>
                Ma(
                  (0, c.we)("#EventEditor_ArtworkType_" + t),
                  `${r.width} X ${r.height}`,
                ),
              [r.height, r.width, t],
            );
          return (0, e.jsx)(Ot, { lang: n, imgURL: i, event: s });
        }
        function Ma(o, t) {
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
        function Pn(o) {
          const { imgURL: t, eventModel: n, langOverride: s } = o,
            r = (0, Ne.E)();
          return (0, e.jsx)("div", {
            style: { display: "flex", width: "304px" },
            children: (0, e.jsx)(Ca.u, {
              event: n,
              imageURLOverride: t,
              langOverride: s ?? r,
            }),
          });
        }
        function On(o) {
          const { lang: t, eventModel: n, partnerEventStore: s } = o,
            r = (0, fa.LJ)(),
            [i, d, h, u, p] = (0, H.q3)(() => [
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
                languageOverride: Ne.O.Get().GetCurEditLanguage(),
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
                className: (0, y.A)(
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
              u != k.Fwr &&
                (0, e.jsxs)(m.Fragment, {
                  children: [
                    (0, e.jsx)("div", { className: Ce().ExampleSpacer }),
                    (0, e.jsx)("div", {
                      className: Ce().ExampleSectionTitle,
                      children: (0, c.we)("#selectimage_preview_title_2"),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, y.A)(
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
        const Ot = (o) => {
            const [t] = (0, dt.t7)(o.event.appid, { include_assets: !0 });
            if (!t) return null;
            const n = t.GetName(),
              s = t.GetAssets()?.GetCommunityIconURL();
            return (0, e.jsx)("div", {
              className: Ce().SpotlightExample,
              children: (0, e.jsx)(Ba, {
                event: o.event,
                strDisplayName: n ?? "",
                gameIconUrl: s,
                spotlightURLOverride: o.imgURL,
                langOverride: o.lang,
              }),
            });
          },
          Na = (o) => {
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
          Ra = (o) =>
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
          for (let s = k.Bhc; s < k.bP9; ++s)
            (t(o, s)?.length ?? 0) > 0 && (n += 1);
          return n;
        }
        var Fa = Object.defineProperty,
          za = Object.getOwnPropertyDescriptor,
          Mn = (o, t, n, s) => {
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
        function Va(o) {
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
            [_, x] = (0, H.q3)(() => [
              d?.GetEventType(),
              d?.BHasTag("vo_marketing_message"),
            ]),
            L = _ == k.ajI;
          let P = null;
          n === 2
            ? (P = (0, e.jsx)("span", {
                style: { color: "#C6512B" },
                children: (0, c.we)("#EventEditor_Required"),
              }))
            : n === 1
              ? (P = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Suggested"),
                }))
              : n === 3 &&
                (P = (0, e.jsx)("span", {
                  style: { color: "#D7BC86" },
                  children: (0, c.we)("#EventEditor_Requested"),
                }));
          let b = null;
          t === "capsule"
            ? L
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
                    !!x &&
                      (0, e.jsxs)("div", {
                        className: pe().HighlightBox,
                        children: [
                          (0, e.jsx)("p", {
                            children: (0, c.we)("#PartnerEvent_MM_ArtworkTip"),
                          }),
                          (0, e.jsx)("p", {
                            children: (0, e.jsx)("a", {
                              href: `${D.TS.PARTNER_BASE_URL}doc/store/assets/promos#popup_update`,
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
                              className: W().EventElementRequired,
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
                        ? I &&
                          (b = (0, e.jsxs)(e.Fragment, {
                            children: [
                              (0, e.jsx)("p", {
                                children: (0, c.we)("#selectimage_tip_hero_1"),
                              }),
                              !I.GetAssets()?.GetLibraryHeroURL() &&
                                (0, e.jsx)("p", {
                                  className: Pt.ErrorStylesBackground,
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
                                      href: Ha,
                                      target: D.TS.IN_CLIENT
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
                                    className: W().EventElementOptional,
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
                                      className: W().EventElementOptional,
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
                                          className: W().EventElementOptional,
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
                                          className: W().EventElementRequired,
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
          const j = It.Fj[o.artworkType].width,
            R = It.Fj[o.artworkType].height;
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
                    P,
                    r &&
                      (0, e.jsx)(q.$n, {
                        onClick: r,
                        children: (0, e.jsx)(ze.he, {
                          toolTipContent: (0, c.we)(
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
                  className: (0, y.A)(pe().SelectImageBlock, pe().Tips),
                  children: [
                    b,
                    !!(j && R) &&
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
                            (0, It.qj)(j),
                            (0, It.qj)(R),
                          ),
                        ],
                      }),
                    !!o.strWarning &&
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("p", {
                          className: Pt.WarningStylesWithIcon,
                          children: o.strWarning,
                        }),
                      }),
                    o.elEventArtworkExample,
                    "\xA0",
                    (0, e.jsx)("br", {}),
                    o.elAdditionalControls,
                    !!o.fnRemoveAllArtwork &&
                      (0, e.jsx)(q.$n, {
                        onClick: (O) => {
                          (0, _e.pg)(
                            (0, e.jsx)(Ka, {
                              fnRemoveAllArtwork: o.fnRemoveAllArtwork,
                            }),
                            (0, vt.uX)(O) ?? window,
                          );
                        },
                        children: (0, c.we)("#Sale_RemoveAll"),
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
        function Ka(o) {
          const { fnRemoveAllArtwork: t, closeModal: n } = o;
          return (0, e.jsx)(me.o0, {
            strTitle: (0, c.we)("#Sale_RemoveAll"),
            strDescription: (0, c.we)("#ImageUpload_DeleteAll_Confirm"),
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
            [I, _] = m.useState((0, Ne.E)()),
            [x, L] = m.useState(new Array()),
            P = m.useCallback(
              (j, R, O) => {
                let z = [];
                x.find((Y) => Y.clanImage.imageid == j.imageid)
                  ? (z = x.map((Y) =>
                      Y.clanImage.imageid == j.imageid
                        ? { clanImage: j, lang: R }
                        : Y,
                    ))
                  : O && (z = x.concat({ clanImage: j, lang: R })),
                  L(z);
              },
              [x],
            ),
            b = m.useCallback(
              (j, R, O) => {
                (0, Be.h5)(() => {
                  xn(i(t, R) ?? "") == j.image_hash && d(t, null, R),
                    d(t, j, O),
                    P(j, O, !1);
                });
              },
              [i, t, d, P],
            );
          return t === "hero"
            ? (0, e.jsx)("div", {
                style: { padding: "16px" },
                children: (0, e.jsx)(q.$n, {
                  style: { textTransform: "uppercase", width: "200px" },
                  onClick: () =>
                    window.open(
                      `${D.TS.PARTNER_BASE_URL}admin/game/editbyappid/${u}?activetab=tab_graphicalassets`,
                    ),
                  children: (0, c.we)("#ImageUpload_EditHeroImage"),
                }),
              })
            : (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)(Mt, {
                    list: x,
                    fnOnArtworkLanguageChange: b,
                    realms: n,
                    fnLangHasData: r,
                  }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("div", {
                      className: (0, y.A)(
                        pe().SelectImageBlock,
                        pe().MainPreviewBlock,
                      ),
                      children: (0, e.jsx)(Pa, {
                        eventModel: h,
                        clanSteamID: s,
                        fnOnLanguagePreviewChange: (j) => {
                          j != I && _(j);
                        },
                        langOverride: I,
                        fnOnArtworkLangChange: v ? null : b,
                        artworkType: t,
                        fnOnRemoveImage: v ? null : (j) => d(t, null, j),
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
        let Mt = class extends m.Component {
          ShowLangChangeDialog(o, t) {
            const {
              fnOnArtworkLanguageChange: n,
              realms: s,
              fnLangHasData: r,
            } = this.props;
            (0, _e.pg)(
              (0, e.jsx)(Tn, {
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
                let i = (0, c.we)("#Language_" + (0, k.LgB)(r));
                o.push(
                  (0, e.jsxs)(
                    "div",
                    {
                      className: W().FlexRowContainer,
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
              className: pe().UploadSuccess,
              children: t,
            });
          }
        };
        Mn([Re.oI], Mt.prototype, "ShowLangChangeDialog", 1),
          (Mt = Mn([bn.PA], Mt));
        var Ya = a(6658);
        function Za(o) {
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
            x = (0, le.zO)(t, d),
            L = t.GetAccountID(),
            [P] = (0, H.q3)(() => [
              x.GetFilesToUpload().length - x.GetCompletedFiles(),
            ]);
          (0, m.useEffect)(() => {
            _(!1),
              we.ClearImageGroup(),
              i?.forEach((O, z) => {
                const w = ee.b.InitFromClanID(L);
                if (we.GetAllLocalizedGroupImages().length == 0) {
                  const Y = O && he.zU.GetHashFromHashAndExt(O),
                    ve = Y && ue.pU.GetClanImageByImageHash(w, Y);
                  ve && we.SetPrimaryImageForImageGroup(ve, d);
                }
                we.SetLocalizedImageGroupAtLang(z, w, O ?? null);
              }),
              _(!0);
          }, [i, L, d]);
          const b = (0, m.useCallback)(
              (O, z, w = k.Bhc) => {
                const Y = ee.b.InitFromClanID(L),
                  ve = he.zU.GetHashAndExt(z ?? null);
                if (we.GetAllLocalizedGroupImages().length == 0) {
                  const Le = ve && he.zU.GetHashFromHashAndExt(ve),
                    Ue = Le && ue.pU.GetClanImageByImageHash(Y, Le);
                  Ue && we.SetPrimaryImageForImageGroup(Ue, O);
                }
                we.SetLocalizedImageGroupAtLang(w, Y, ve);
              },
              [L],
            ),
            j = (0, m.useCallback)((O, z) => {
              const Y = we.GetLocalizedImageGroupForEdit()?.localized_images[z];
              return Y && Y.split("/").pop();
            }, []),
            R = () => {
              const O = we.GetLocalizedImageGroupForEdit();
              for (let z = k.Bhc; z < k.bP9; ++z) {
                const w = O?.localized_images[z];
                if (w) {
                  const Y = w.split("/").pop() || "";
                  p(
                    d,
                    {
                      image_hash: xn(Y),
                      clanAccountID: L,
                      file_type: (0, Ya.yh)(Y) ?? In.bg.w3,
                      imageid: 0,
                    },
                    z,
                  );
                } else p(d, null, z);
              }
              we.ClearImageGroup(), o.onOK ? o.onOK() : u?.();
            };
          return (0, e.jsxs)(me.o0, {
            onCancel: u,
            closeModal: u,
            bDisableBackgroundDismiss: !0,
            bAllowFullSize: !0,
            className: (0, y.A)(Pt.NotTooWideModal, Pt.ImageManageDialog),
            strTitle: o.strLocalizedTitle || (0, c.we)("#ImagePickerLoc_Title"),
            strDescription: o.strLocalizedDescription,
            bOKDisabled: P > 0,
            onOK: R,
            strOKButtonText:
              P > 0 ? (0, c.we)("#ImagePickerLoc_DismissWarning") : void 0,
            children: [
              I
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(ha, {
                        clanSteamID: t,
                        rgSupportArtwork: [d],
                        fnSetImageURL: b,
                        bAllowPreviousClanImageSelection: !1,
                        rgRealmList: r ?? [],
                        uploaderOverride: x,
                      }),
                      (0, e.jsx)(Va, {
                        clanSteamID: t,
                        eventModel: s,
                        artworkType: d,
                        title: null,
                        appid: n,
                        realms: r,
                        fnRemoveAllArtwork: () => we.ClearImageGroup(),
                        fnSetImageURL: b,
                        fnGetImageHashAndExt: j,
                        fnLangHasData: h,
                        partnerEventStore: v,
                      }),
                    ],
                  })
                : (0, e.jsx)(Je.t, {
                    size: "medium",
                    position: "center",
                    string: (0, c.we)("#Loading"),
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
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#EventEditor_Tile_Title"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: U.DropDownScroll,
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
            [u, p, v, I, _, x, L, P] = (0, H.q3)(() => [
              d.repeat_setting,
              d.scaling_setting,
              d.background_color1,
              d.background_color2,
              d.gradient_setting,
              d.position_setting,
              r.GetIncludedRealmList(),
              d.randomize_section_order,
            ]),
            [b] = (0, m.useState)(() => qa(d.localized_background_art ?? {}));
          return (0, e.jsxs)(Za, {
            strLocalizedTitle: (0, c.we)("#BackgroundGroups_Configure"),
            strLocalizedDescription: (0, c.we)("#BackgroundGroups_DialogDesc"),
            appid: r.appid,
            eventModel: r,
            clanSteamID: r.clanSteamID,
            closeModal: t,
            partnerEventStore: rn.O3,
            artworkType: "localized_background_art",
            realms: L,
            loc_images: b,
            fnLangHasData: (j) => !!b[j],
            fnGetImageHash: (j, R) => b[R],
            fnSetImageURL: async (j, R, O) => {
              h((z) => {
                const w = { ...z.localized_background_art },
                  Y = he.zU.GetHashAndExt(R);
                return (
                  Y ? (w[(0, k.LgB)(O)] = Y) : delete w[(0, k.LgB)(O)],
                  { ...z, localized_background_art: w }
                );
              });
            },
            onOK: () => {
              h((j) => (s(j), t && setTimeout(t, 1), { ...j }));
            },
            children: [
              (0, e.jsxs)("div", {
                className: G().ConfDialogOptions,
                children: [
                  (0, e.jsxs)("div", {
                    className: G().ImageOptions,
                    children: [
                      (0, e.jsx)(Ja, {
                        setting: u,
                        fnUpdateSetting: (j) => {
                          h(
                            j !== "no-repeat"
                              ? {
                                  ...d,
                                  repeat_setting: j,
                                  scaling_setting: "auto",
                                }
                              : { ...d, repeat_setting: j },
                          );
                        },
                        label: (0, c.we)("#BackgroundGroups_Repeating"),
                      }),
                      (0, e.jsx)(eo, {
                        scaling_setting: p ?? "contain",
                        disable: u !== "no-repeat",
                        fnUpdateSetting: (j) => h({ ...d, scaling_setting: j }),
                      }),
                      p != "cover" &&
                        (0, e.jsx)(no, {
                          position_settings: x,
                          fnUpdateSetting: (j) =>
                            h({ ...d, position_setting: j }),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: G().ColorOptions,
                    children: [
                      (0, e.jsx)(q.JU, {
                        children: (0, c.we)("#BackgroundGroups_Color"),
                      }),
                      (0, e.jsxs)("div", {
                        className: K().ColorCtn,
                        children: [
                          (0, e.jsx)(q.$n, {
                            style: { backgroundColor: v },
                            onClick: (j) =>
                              i(j, {
                                color: v ?? "",
                                onChange: (R) =>
                                  h({ ...d, background_color1: R }),
                              }),
                            children: (0, c.we)(
                              v === void 0
                                ? "#BackgroundGroups_ColorNum_unset"
                                : "#BackgroundGroups_ColorNum",
                              1,
                            ),
                          }),
                          "\xA0",
                          (0, e.jsx)(q.$n, {
                            onClick: () =>
                              h({ ...d, background_color1: void 0 }),
                            children: (0, c.we)(
                              "#BackgroundGroups_Color_Clear",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        className: G().SwapColorsCtn,
                        children: (0, e.jsx)(q.$n, {
                          onClick: () =>
                            h({
                              ...d,
                              background_color1: I,
                              background_color2: v,
                            }),
                          children: (0, c.we)("#BackgroundGroups_Color_Swap"),
                        }),
                      }),
                      _ !== "single-color" &&
                        (0, e.jsxs)("div", {
                          className: K().ColorCtn,
                          children: [
                            (0, e.jsx)(q.$n, {
                              style: { backgroundColor: I },
                              onClick: (j) =>
                                i(j, {
                                  color: I ?? "",
                                  onChange: (R) =>
                                    h({ ...d, background_color2: R }),
                                }),
                              children: (0, c.we)(
                                I === void 0
                                  ? "#BackgroundGroups_ColorNum_unset"
                                  : "#BackgroundGroups_ColorNum",
                                2,
                              ),
                            }),
                            "\xA0",
                            (0, e.jsx)(q.$n, {
                              onClick: () =>
                                h({ ...d, background_color2: void 0 }),
                              children: (0, c.we)(
                                "#BackgroundGroups_Color_Clear",
                              ),
                            }),
                          ],
                        }),
                      (0, e.jsx)(to, {
                        gradient: _ ?? "top-to-bottom",
                        fnUpdateSetting: (j) =>
                          h({ ...d, gradient_setting: j }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)(At, {
                clanSteamID: r.clanSteamID,
                children: (0, e.jsx)(Xa.S, {
                  checked: !!P,
                  onChange: (j) => {
                    d.randomize_section_order = j;
                  },
                  children: (0, c.we)(
                    "#BackgroundGroups_RandomizeSectionOrder",
                  ),
                }),
              }),
            ],
          });
        }
        function qa(o) {
          const t = mt.$Y([], k.bP9, null);
          for (const n in o) {
            const s = (0, k.sfN)(n);
            s != k.xPp && (t[s] = o[n]);
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
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Scaling"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: U.DropDownScroll,
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
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#EventEditor_ColorSetting_Title"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: U.DropDownScroll,
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
              (0, e.jsx)(q.JU, {
                children: s || (0, c.we)("#BackgroundGroups_Position"),
              }),
              (0, e.jsx)(q.m, {
                strDropDownClassName: U.DropDownScroll,
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
            [h, u, p] = (0, Re.uD)(),
            v = (0, H.q3)(() => t.GetSalePageLastCoverSectionUntilEnd());
          return (0, e.jsx)("div", {
            className: (0, y.A)(G().Ctn, r && U.ValveOnlyBackground),
            children: (0, e.jsxs)($.tH, {
              children: [
                (0, e.jsx)(q.Yh, {
                  label: (0, c.we)("#BackgroundGroups_Setting"),
                  checked: i,
                  onChange: (I) => {
                    d(I), t.SetBackgroundImageEnabled(I);
                  },
                }),
                i
                  ? (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)(q.Yh, {
                          label: (0, c.we)("#BackgroundGroups_EditMode"),
                          tooltip: (0, c.we)("#BackgroundGroups_EditMode_ttip"),
                          checked: n,
                          onChange: s,
                        }),
                        (0, e.jsx)(q.Yh, {
                          label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                          tooltip: (0, c.we)(
                            "#BackgroundGroups_ExtendToEnd_ttip",
                          ),
                          checked: v,
                          onChange: (I) =>
                            t.SetSalePageLastCoverSectionUntilEnd(I),
                        }),
                        (0, e.jsx)("hr", {}),
                        (0, e.jsx)(q.$n, {
                          onClick: u,
                          children: (0, c.we)(
                            "#BackgroundGroups_ClearAllSettings",
                          ),
                        }),
                        (0, e.jsx)(me.EN, {
                          active: h,
                          children: (0, e.jsx)(me.o0, {
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
                  href: `${Ge.TS.PARTNER_BASE_URL}doc/marketing/event_tools/sales/groups`,
                  target: "_blank",
                  children: (0, c.we)("#EventGeneric_SeeDocs"),
                }),
              ],
            }),
          });
        }
        const Sn = m.forwardRef(function (t, n) {
          const {
              imgGroupDerivedMapping: s,
              backgroundImageEditModel: r,
              groupIndex: i,
              imgGroup: d,
              eventModel: h,
              nTabIndex: u,
            } = t,
            p = (0, Ne.E)(),
            [v, I, _, x] = (0, H.q3)(() => [
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
            [P, b, j] = (0, Re.uD)(),
            [R, O, z] = (0, Re.uD)();
          let w;
          v?.nUniqueIDNextSaleSection &&
            (w = (0, pt.h_)(
              Z.HY,
              r.GetSaleSectionByID(v?.nUniqueIDNextSaleSection),
              p,
              h,
              v.nSaleSectionLastIndex + 1,
            ));
          let Y;
          if (v && I?.length > 1) {
            const ve = I[I.length - 1];
            Y = (0, pt.h_)(
              Z.HY,
              r?.GetSaleSectionByID(ve),
              p,
              h,
              v.nSaleSectionLastIndex,
            );
          }
          return (0, e.jsx)(sn.qx, {
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
                (0, e.jsx)(q.$n, {
                  onClick: b,
                  children: (0, c.we)("#BackgroundGroups_Configure"),
                }),
                (0, e.jsx)(me.EN, {
                  active: P,
                  children: (0, e.jsx)($a, {
                    imgGroup: d,
                    closeModal: j,
                    eventModel: h,
                    fnUpdateImageGroup: (ve) =>
                      u != null
                        ? r.SetTabBackgroundGroup(u, i, ve)
                        : r.SetSalePageBackgroundGroup(i, ve),
                  }),
                }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  className: G().EditorTitle,
                  children: (0, c.we)("#BackgroundGroups_ContentTitle"),
                }),
                (0, e.jsxs)("ul", {
                  children: [
                    I.map((ve) =>
                      (0, e.jsx)(
                        "li",
                        {
                          children: (0, pt.h_)(
                            Z.W3,
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
                        children: (0, c.we)("#BackgroundGroups_EndOfList"),
                      }),
                  ],
                }),
                !!Y &&
                  (0, e.jsx)(q.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Reduce", Y),
                  }),
                !!w &&
                  (0, e.jsx)(q.$n, {
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
                    children: (0, c.we)("#BackgroundGroups_Extend", w),
                  }),
                i > 0 &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("hr", {}),
                      (0, e.jsx)(q.$n, {
                        onClick: O,
                        children: (0, c.we)(
                          "#BackgroundGroups_RemoveThisGroup",
                        ),
                      }),
                      (0, e.jsx)(me.EN, {
                        active: R,
                        children: (0, e.jsx)(me.o0, {
                          strTitle: (0, c.we)("#Dialog_AreYouSure"),
                          bDestructiveWarning: !0,
                          strDescription: (0, c.we)(
                            "#BackgroundGroups_RemoveThisGroup_Desc",
                          ),
                          onOK: () =>
                            u != null
                              ? r.RemoveTabBackgroundGroup(u, i)
                              : r.RemoveSalePageBackgroundGroup(i),
                          closeModal: z,
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
            className: G().CtnEditor,
            children: (0, e.jsx)(q.$n, {
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
            d = i.findIndex((P) => P.background_id === t),
            h = i[d],
            [u, p] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!u) return;
            const P = (0, _e.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => p(!1),
                children: (0, e.jsx)(Sn, {
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
              P.then((b) => b.Close());
            };
          }, [u, r, h, d, n, s]);
          const v = (0, H.q3)(() => tt.get(t)),
            [I, _] = (0, m.useState)(null),
            x = m.useCallback((P, b) => {
              _(b);
            }, []),
            L = (0, Re.w6)(x);
          return (0, e.jsxs)("div", {
            className: G().CtnEditor,
            ref: L,
            children: [
              !!(v && I && I > v) &&
                (0, e.jsx)(q.$n, {
                  onClick: (P) => p(!0),
                  children: (0, c.we)("#BackgroundGroups_EditBackgroundGroup"),
                }),
              (0, e.jsx)(Sn, {
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
          Nn = a.n(io);
        function lo(o) {
          const { imgGroupDerivedMapping: t } = o,
            [n, s] = (0, m.useState)(!1);
          (0, m.useEffect)(() => {
            if (!n) return;
            const v = (0, _e.pg)(
              (0, e.jsx)(me.o0, {
                bAlertDialog: !0,
                closeModal: () => s(!1),
                children: (0, e.jsx)(Rn, { ...o }),
              }),
              window,
            );
            return () => {
              v.then((I) => I.Close());
            };
          }, [n, o]);
          const r = (0, H.q3)(() => {
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
            u = (0, Re.w6)(h),
            p = !!(r >= 0 && i && i > r);
          return (0, e.jsxs)("div", {
            className: (0, y.A)(G().CtnEditor, Nn().TabCtn),
            ref: u,
            children: [
              p &&
                (0, e.jsx)(q.$n, {
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
            [d, h, u, p] = (0, H.q3)(() => [
              t?.GetTabLastCoverSectionUntilEnd(s),
              t?.BIsTabEnabled(s),
              n.selectedTabBackgroundDef,
              t?.GetEventModel(),
            ]);
          return (0, e.jsxs)($.tH, {
            children: [
              (0, e.jsx)(q.Yh, {
                label: (0, c.we)("#BackgroundGroups_TaSetting"),
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
                    (0, e.jsx)(q.Yh, {
                      label: (0, c.we)("#BackgroundGroups_ExtendToEnd"),
                      tooltip: (0, c.we)(
                        "#BackgroundGroups_ExtendToEnd_Tab_ttip",
                      ),
                      checked: d,
                      onChange: (v) => t.SetTabLastCoverSectionUntilEnd(s, v),
                    }),
                    (0, e.jsx)(Sn, {
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
        var Ct = a(85692);
        function co(o) {
          const { nSectionID: t, children: n } = o,
            [s, r] = m.useState(!1),
            [i, d] = m.useState(!1);
          m.useEffect(() => {
            Ct.TU.Get().SetMouseOverSection(t, s);
          }, [t, s]);
          const h = (0, H.q3)(() => Ct.TU.Get().GetMouseOverSectionID()),
            u = t && t == h,
            p = () => Ct.TU.Get().JumpToSection(t),
            v = m.useRef(null);
          return (
            (0, Ct.lM)((I) =>
              t != I ? !1 : (v.current?.scrollIntoView(), d(!0), !0),
            ),
            (0, e.jsxs)("div", {
              ref: v,
              className: (0, y.A)({
                [F().SaleSectionLivePreview]: !0,
                [F().Hover]: !!u,
                [F().JumpedTo]: !!i,
              }),
              onAnimationEnd: () => d(!1),
              onMouseEnter: () => r(!0),
              onMouseLeave: () => r(!1),
              children: [
                s &&
                  (0, e.jsx)(ze.Gq, {
                    toolTipContent: (0, c.we)("#Sale_SaleEditor_JumpTo_ttip"),
                    direction: "top",
                    children: (0, e.jsx)("button", {
                      className: F().JumpToButton,
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
            _ = (0, H.q3)(() => n.jsondata.sale_header_disable_top_margin),
            x = po(n, u, (0, uo.TC)(!!s)),
            [L, P] = (0, m.useState)(!1);
          m.useEffect(() => {
            if (
              n.jsondata.sale_custom_css &&
              !v &&
              s &&
              n.jsondata.sale_vanity_id_valve_approved_for_sale_subpath &&
              (0, D.yK)() == "community"
            ) {
              const w = document.getElementsByTagName("HEAD")[0],
                Y = document.createElement("style");
              (Y.innerText = (0, on.L$)(n.jsondata.sale_custom_css)),
                I(Y),
                w.appendChild(Y);
            }
            const z = document.getElementsByClassName(
              "react_landing_background",
            );
            return (
              (0, Xe.wT)(
                z.length <= 1,
                "Must have at most one react_landing_background",
              ),
              z.length >= 1 && (z[0].style.backgroundImage = ""),
              () => {
                v && (v.remove(), I(null));
              }
            );
          }, [n, v, s]);
          const b = n?.jsondata,
            j = m.useMemo(
              () => ({
                promotionName: t,
                clanid: Number(D.UF.CLANACCOUNTID),
                nAppIDVOD: Number(b?.broadcast_preroll_vod_appid),
                event: n,
                bIsPreview: s,
                language: r,
                accountIDs: s ? b?.broadcast_whitelist : void 0,
                chat_announcement_giveaway:
                  b?.broadcast_chat_announcement_giveaway,
              }),
              [s, n, b, r, t],
            ),
            R = (0, H.q3)(() => i?.BIsBackgroundImageEnabled() ?? !1),
            O = yt(n?.clanSteamID);
          if (!n || u === void 0)
            return (0, e.jsx)("div", {
              className: ht().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(Je.t, {
                size: "medium",
                string: (0, c.we)("#Loading"),
              }),
            });
          {
            const z =
                n.jsondata.localized_sale_logo &&
                n.jsondata.localized_sale_logo?.filter(Boolean).length > 0,
              w = n.BUsesContentHubForItemSource(),
              Y = n
                .GetSaleSections()
                .some((Ve) => Ve.section_type === "contenthubtitle"),
              ve = w && Y;
            let Le,
              Ue = !0;
            z
              ? (Le = 0)
              : n.BUsesContentHubForItemSource()
                ? (Le = 20)
                : n.GetEventType() == k.ajI
                  ? ((Le = 0), (Ue = !1))
                  : (Le = n.jsondata.sale_header_offset || 0);
            const ae = Ue && n.jsondata.sale_header_offset === 530,
              be = !qe.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  n.GetContentHubType(),
                  n.GetContentHubCategory(),
                  n.GetContentHubTag(),
                ),
              He = s
                ? !L && i?.BIsBackgroundImageEnabled()
                  ? Pe.S.EPreviewMode_EditBackground
                  : Pe.S.EPreviewMode_Enabled
                : Pe.S.EPreviewMode_Disabled,
              We = R || n.GetEventType() != k.ajI,
              ke = w ? ie.Yo.NoTransform : ie.Yo.NoTransformSparseContent,
              _t = (0, y.A)(
                F().SaleOuterContainer,
                _ && F().SaleOuterTopMargin,
                ae && F().SaleNewSizing,
                F()[`CustomStyle_${n.jsondata.sale_vanity_id}`],
                "SaleOuterContainer",
                z && F().SalePageLogoSet,
                ve && F().ContentHub,
              );
            return (0, e.jsx)($.tH, {
              children: (0, e.jsx)(re.EU, {
                eventModel: n,
                language: r,
                children: (0, e.jsx)(Z.Cs, {
                  location: s ? Z.HY : Z.bs,
                  children: (0, e.jsxs)(E, {
                    event: n,
                    language: r,
                    bIsPreview: !!s,
                    children: [
                      be && (0, e.jsx)(re.Sn, {}),
                      (0, e.jsx)(J, { eventModel: n }),
                      !!i &&
                        (We || O) &&
                        (0, e.jsx)(ao, {
                          backgroundImageEditModel: i,
                          bBackgroundImgGroupEditMode: L,
                          fnSetBackgroundImgGroupEditMode: P,
                          bShowAsValveOnly: !We,
                        }),
                      (0, e.jsxs)(N.Z, {
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
                            broadcastEmbedContext: j,
                          }),
                          (0, e.jsx)(fo, {
                            ePreviewMode: He,
                            event: n,
                            backgroundImageEditModel: i,
                            language: r,
                            promotionName: t,
                            nSaleDayIndex: u,
                            broadcastEmbedContext: j,
                            selectedTab: x,
                            tagSelection: x?.GetTagSelection(),
                          }),
                          !h &&
                            (0, e.jsx)(Zt, {
                              event: n,
                              addtionalAdminButtons: d,
                              fnOnChangeDayIndex: (Ve) => {
                                Ve != u &&
                                  ((n.m_overrideCurrentDay = Ve), p(Ve));
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
          const [s] = (0, Me.QD)(Oe.jD, void 0),
            [r] = (0, Me.QD)($e.dk, void 0),
            [i] = (0, Me.QD)($e.NV, void 0),
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
            return new Ze.y(d.selTab, t, d.bIsDefaultTab, v, I);
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
            [h, u] = m.useState((0, Oe.rp)()),
            p = m.useMemo(() => new an(), []),
            v = m.useCallback(() => u((0, Oe.rp)()), []);
          m.useEffect(
            () => (
              window.addEventListener("resize", v),
              () => window.removeEventListener("resize", v)
            ),
            [v],
          ),
            m.useEffect(() => {
              let ae = "";
              const ce = () => {
                  const He = Un();
                  if (He && He != ae) {
                    const We = document.getElementById(He);
                    We && ((ae = He), We.scrollIntoView({ block: "start" }));
                  }
                },
                be = setTimeout(() => ce(), 150);
              return (
                window.addEventListener("hashchange", ce),
                () => {
                  clearTimeout(be),
                    window.removeEventListener("hashchange", ce);
                }
              );
            }, []);
          const I = (0, Dt.W6)(),
            _ = (ae, ce) => {
              (0, Me.ip)(I, { ...(ce || {}), [Oe.jD]: ae.toString() });
            },
            [x, L] = (0, Me.QD)("controller"),
            [P, b] = (0, H.q3)(() => {
              const ae =
                  Ut.pF.GetCreatorHome(t.clanSteamID)?.GetAppIDList().length ??
                  0,
                ce = t.GetSaleSectionIncludingFooterSections(ae);
              return [
                Xt(
                  t.jsondata.sale_background_img_groups,
                  ce,
                  i && i.GetActiveTabUniqueID(),
                ),
                ce,
              ];
            });
          let j = !1;
          const R = new Ze.y(void 0, s),
            O = [{ elements: [], activeTab: R }];
          let z = null;
          const w = (0, D.Qn)(),
            Y = (0, Ct.ty)(),
            ve = (0, mo.h)(t),
            Le = m.useMemo(() => {
              const ae = Un();
              if (!ae) return;
              const ce = b.findIndex((be) => be.section_anchor === ae);
              return ce > -1 ? ce : void 0;
            }, [b]);
          b.forEach((ae, ce) => {
            const be = O[O.length - 1].activeTab;
            if (be && !be.ShouldShowSection(ae)) return;
            const He = qe.nY
                .Get()
                .BIsPartnerTakeoverActive(
                  t.GetContentHubType(),
                  t.GetContentHubCategory(),
                  t.GetContentHubTag(),
                ),
              We = h && !He && !t.jsondata.content_hub_restricted_width;
            let ke = (0, Pe.I)(ae, r, t, n, w, ve);
            if (ke === void 0) return;
            if (!ke)
              if ((0, gt.su)(ae) && !D.iA.logged_in)
                j ||
                  ((ke = (0, e.jsx)(gt.CC, {
                    section: ae,
                    event: t,
                    language: n,
                  })),
                  (j = !0));
              else {
                const _o = ae.diable_tab_id_filtering
                  ? new Ze.y(void 0, be && be.GetSaleDay())
                  : be;
                ae.section_type == "tabs" &&
                  ae.tabs?.some(
                    (So) => So.unique_id == i?.GetActiveTabUniqueID(),
                  ) &&
                  O.push({ activeTab: i, elements: [] }),
                  (ke = (0, e.jsx)(go.H, {
                    ...o,
                    section: ae,
                    activeTab: _o,
                    appVisibilityTracker: p,
                    selectedTab: i,
                    setTabUniqueIDQueryParam: _,
                    expanded: We,
                    controllerCategory: x,
                    setControllerCategory: L,
                  }));
              }
            Y &&
              (ke = (0, e.jsx)(co, { nSectionID: ae.unique_id, children: ke }));
            const _t = O && O.length && O[O.length - 1];
            let Ve = (0, e.jsx)(
              Co,
              {
                section: ae,
                nActiveTabID:
                  _t && _t.activeTab && _t.activeTab.GetActiveTabUniqueID(),
                saleSectionIndex: ce,
                ePreviewMode: r,
                salePageBackgroundDerivedConfig: P,
                backgroundImageEditModel: d,
                bExpanded: We,
                children: (0, e.jsx)(Lt._, {
                  enabled: !Le || ce > Le,
                  children: ke,
                }),
              },
              "SaleSectionIndex_" + ae.unique_id + "_" + ce,
            );
            const Nt = P.mapSectionToGroup.get(ae.unique_id);
            z &&
              z.groupID != Nt &&
              (O[O.length - 1].elements.push(
                wt(t, z, r, i && i?.GetActiveTabUniqueID()),
              ),
              (z = null)),
              Nt
                ? (z ||
                    (z = {
                      groupID: Nt,
                      elSaleSections: [],
                      derivedGroupInfo: P.mapGroupToSections.get(Nt),
                    }),
                  z.elSaleSections.push(Ve))
                : O[O.length - 1].elements.push(Ve);
          }),
            z &&
              (O[O.length - 1].elements.push(
                wt(t, z, r, i && i?.GetActiveTabUniqueID()),
              ),
              (z = null));
          const Ue = O.map((ae, ce) =>
            (0, e.jsx)(
              "div",
              {
                className: (0, y.A)(
                  F().SaleSectionTabListContainer,
                  "SaleSectionTabListContainer",
                ),
                children: ae.elements,
              },
              "TabSection_" + ce,
            ),
          );
          return (0, e.jsx)(N.Z, {
            focusable: !1,
            focusableIfEmpty: !0,
            navKey: "SaleSectionListContainer",
            children: Ue,
          });
        }
        const fo = (0, Dt.y)(vo);
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
              : Oe.mj + (t.unique_id || n),
            v = t.section_type != "tabs",
            [I, _] = (0, m.useState)(!0);
          return I
            ? (0, e.jsx)($.tH, {
                children: (0, e.jsx)(Io, {
                  visibility_by_door_index_state:
                    t.visibility_by_door_index_state,
                  door_index_visibility: t.door_index_visibility,
                  children: v
                    ? (0, e.jsx)(N.Z, {
                        navKey: p,
                        id: p,
                        className: (0, y.A)({
                          [F().SaleSectionCtn]: !0,
                          SaleSectionCtn: !0,
                          [t.section_type]: !0,
                          [t.internal_section_data?.internal_type || ""]: !0,
                          expanded: h,
                          [t.single_item_style || ""]: !0,
                          [F().SaleSectionBackgroundImageGroupEdit]:
                            r == Pe.S.EPreviewMode_EditBackground,
                          [F().NoTopPadding]: t.collapse_header_space,
                        }),
                        children:
                          r === Pe.S.EPreviewMode_EditBackground
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
                          r === Pe.S.EPreviewMode_EditBackground
                            ? (0, e.jsxs)("div", {
                                id: p,
                                className: (0, y.A)({
                                  [F().SaleSectionCtn]: !0,
                                  [F().SaleSectionBackgroundImageGroupEdit]: !0,
                                  [F().NoTopPadding]: t.collapse_header_space,
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
      12932: (M, ge, a) => {
        "use strict";
        a.d(ge, { qx: () => U });
        var e = a(7850),
          k = a(16412),
          N = a(18210),
          ie = a(36118),
          re = a(90626),
          Z = a(36707),
          ne = a(95695),
          se = a.n(ne),
          H = a(25792),
          m = a(64734),
          oe = a.n(m),
          $ = a(65946),
          de = a(11243);
        function F(y) {
          const {
              title: D,
              tooltip: Q,
              getMinimized: B,
              toggleMinimized: V,
              className: E,
              children: l,
              elAdditionalButtons: g,
            } = y,
            C = (0, $.q3)(() => B());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, Z.A)(
                  E,
                  m.SectionTitleHeader,
                  m.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, Z.A)(
                      ne.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [D, !!Q && (0, e.jsx)(de.o, { tooltip: Q })],
                  }),
                  (0, e.jsxs)("div", {
                    className: m.SectionTitleButtons,
                    children: [
                      g,
                      (0, e.jsx)(W, { bIsMinimized: C, fnToggleMinimize: V }),
                    ],
                  }),
                ],
              }),
              !C && (0, e.jsx)(H.tH, { children: l }),
            ],
          });
        }
        function U(y) {
          const [D, Q] = re.useState(!!y.bStartMinimized);
          return (0, e.jsx)(F, {
            ...y,
            getMinimized: () => D,
            toggleMinimized: () => Q(!D),
            children: y.children,
          });
        }
        function W(y) {
          const { bIsMinimized: D, fnToggleMinimize: Q } = y,
            B = D ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(k.$n, {
            "data-tooltip-text": (0, N.we)(B),
            onClick: Q,
            children: y.bIsMinimized
              ? (0, e.jsx)(ie.hz4, {})
              : (0, e.jsx)(ie.Xjb, {}),
          });
        }
      },
      46636: (M, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => y });
        var e = a(7850),
          k = a(90626),
          N = a(24660),
          ie = a(19298),
          re = a(7967),
          Z = a(20169),
          ne = a(90405),
          se = a(36707),
          H = a(3166),
          m = a(51239);
        class oe {
          m_rgSections;
          GetSections() {
            return this.m_rgSections;
          }
          static s_singleton;
          static Get() {
            return (
              oe.s_singleton || (oe.s_singleton = new oe()), oe.s_singleton
            );
          }
          constructor() {
            this.m_rgSections = (0, H.Tc)("categories", "application_config");
          }
        }
        function $() {
          const D = oe.Get(),
            [Q, B] = (0, k.useState)(D.GetSections());
          return { sections: Q };
        }
        function de() {
          const { sections: D } = $(),
            Q = k.useRef(null);
          return (
            k.useEffect(() => {
              Q.current && Q.current.NavTree()?.Activate(!0);
            }, []),
            (0, e.jsx)(ie.Z, {
              className: m.CategorySectionsCtn,
              navRef: Q,
              children: D.map((B, V) =>
                (0, e.jsx)(
                  F,
                  { section: B, autoFocus: V == 0 },
                  "section" + B.name,
                ),
              ),
            })
          );
        }
        function F(D) {
          const { section: Q, autoFocus: B } = D,
            V = (0, H.Qn)(),
            E = (0, e.jsxs)("div", {
              className: m.CategorySection,
              children: [
                (0, e.jsx)("span", {
                  className: m.CategorySectionName,
                  children: Q.name,
                }),
                (0, e.jsx)(re.MS, {
                  className: m.CategoriesCtn,
                  scrollDirection: "x",
                  navEntryPreferPosition: Z.iU.MAINTAIN_X,
                  navKey: "cat_section" + Q.name,
                  children: Q.categories.map((l, g) =>
                    (0, e.jsx)(
                      U,
                      { category: l, autoFocus: B && g === 0 },
                      "category" + l.name,
                    ),
                  ),
                }),
              ],
            });
          return V
            ? E
            : (0, e.jsx)(ne.K, { placeholderHeight: "150px", children: E });
        }
        function U(D) {
          const { category: Q, autoFocus: B } = D;
          return (0, e.jsx)(ie.Z, {
            focusableIfEmpty: !0,
            autoFocus: B,
            navKey: "cat_panel" + Q.name,
            children: (0, e.jsxs)(N.Ii, {
              href: H.TS.STORE_BASE_URL + Q.url,
              className: (0, se.A)({
                [m.Category]: !0,
                [m.TopLevelCategory]: Q.is_toplevel_genre,
              }),
              children: [
                (0, e.jsx)(W, { ...D }),
                (0, e.jsx)("div", { className: m.CategoryGradient }),
                (0, e.jsx)("span", {
                  className: m.CategoryName,
                  children: (0, e.jsx)("span", { children: Q.name }),
                }),
              ],
            }),
          });
        }
        function W(D) {
          let { category: Q } = D;
          return (0, e.jsx)("div", {
            className: m.GridOuter,
            children: (0, e.jsx)("div", {
              className: m.Grid,
              children: (0, e.jsx)("img", {
                src: H.TS.STORE_BASE_URL + Q.image_url,
              }),
            }),
          });
        }
        const y = de;
      },
      59970: (M, ge, a) => {
        "use strict";
        a.d(ge, { d: () => pn });
        var e = a(7850),
          k = a(19367),
          N = a(90626),
          ie = a(3685),
          re = a(85528),
          Z = a(77495),
          ne = a(18210),
          se = a(3166),
          H = a(75779),
          m = a(80902),
          oe = a(30454);
        async function $() {
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
        const de = 300 * 1e3;
        function F() {
          return ["DeckCompatCounts"];
        }
        function U() {
          return {
            queryKey: F(),
            queryFn: () => $(),
            staleTime: de,
            retry: !1,
          };
        }
        function W() {
          const { data: f } = (0, m.I)(U());
          return f;
        }
        function y(f, S) {
          switch (S) {
            case H.sd:
              return f?.playable;
            case H.V8:
              return f?.unsupported;
            default:
              return f?.verified;
          }
        }
        var D = a(70187),
          Q = a(36549),
          B = a(39153),
          V = a(99412),
          E = a(72609),
          l = a(25792),
          g = a(85599),
          C = a(41635),
          A = a(47610),
          J = a(18860),
          T = a(87805);
        function te(f) {
          const { event: S } = f.context,
            G = Number.parseInt((0, D.j$)(f.args)),
            X = N.useMemo(() => {
              if (S)
                return S.jsondata.sale_sections?.find(
                  (K) =>
                    K.section_type == "vo_internal" &&
                    (K.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      K.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [S]);
          if (G && X) {
            const K = Number.parseInt((0, D.j$)(f.args, "depositpackageid")),
              ee = Number.parseInt((0, D.j$)(f.args, "psulesspackageid")),
              le = (0, D.j$)(f.args, "out_of_stock_override"),
              ue = (0, D.j$)(f.args, "delivery_override"),
              ye = (0, D.j$)(f.args, "delivery_override_out_of_stock");
            return (0, e.jsx)(c, {
              section: X,
              reservationPackageID: G,
              depositPackageID: K,
              psuLessPackageID: ee,
              strOutOfStockOverride: le,
              strDeliveryOverride: ye || ue,
              bDeliveryOverrideOnlyIfOutOfStock: !!ye,
              PreviewActions: f.PreviewActions,
            });
          }
          return (0, e.jsx)(e.Fragment, {});
        }
        function c(f) {
          const {
              reservationPackageID: S,
              depositPackageID: G,
              bIsPreview: X,
              psuLessPackageID: K,
              strOutOfStockOverride: ee,
              strDeliveryOverride: le,
              bDeliveryOverrideOnlyIfOutOfStock: ue,
              section: ye,
              PreviewActions: Ae,
            } = f,
            { data: Se } = (0, A.DR)(S),
            { data: Be } = (0, A.DR)(K),
            xe = (0, N.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + S,
                  reservation_package: S,
                  deposit_package: G,
                  localized_reservation_desc: (0, C.$Y)([], V.bP9, null),
                  localized_out_of_stock_override: (0, C.$Y)(
                    [ee || null],
                    V.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, C.$Y)(
                    [le || null],
                    V.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!ue,
                  psu_less_package: K,
                },
              ],
              [S, G, ee, le, ue, K],
            );
          if (!Se || (K && !Be))
            return (0, e.jsx)(g.t, {
              string: (0, ne.we)("#Loading"),
              size: "small",
              position: "center",
            });
          const vn = !E.iA.logged_in || !Se.account_restricted_from_purchasing,
            Gt =
              Se.reservation_state == J.G.k_EPurchaseReservationState_Reserved
                ? Se
                : void 0;
          return (0, e.jsxs)(l.tH, {
            children: [
              Ae &&
                (0, e.jsx)(N.Suspense, {
                  fallback: null,
                  children: (0, e.jsx)(Ae, {
                    bIsPreview: !!X,
                    rgReservationDef: xe,
                  }),
                }),
              !!Se.allow_purchase_in_country &&
                (0, e.jsxs)("div", {
                  className: xe[0].unique_id,
                  children: [
                    (0, e.jsx)(T.b, {
                      reservationDef: xe[0],
                      hardwareDetail: Se,
                      bPSULessModel: !1,
                      reservedHardwareDetail: Gt,
                    }),
                    vn &&
                      (0, e.jsx)(T.p, {
                        section: ye,
                        reservationDef: xe[0],
                        hardwareDetail: Se,
                        reservedHardwareDetail: Gt,
                      }),
                    Be &&
                      Be?.allow_purchase_in_country &&
                      (0, e.jsx)(T.b, {
                        reservationDef: xe[0],
                        hardwareDetail: Be,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var fe = a(6878),
          Ke = a(21035),
          jt = a(72865),
          Rt = a(38081),
          Qe = a.n(Rt),
          Ye = a(36707),
          Fe = a(69596),
          rt = a(10026),
          Ut = a.n(rt),
          Dt = a(19298),
          Oe = a(11996),
          $e = a(19047),
          qe = a(36118),
          kt = a(47689),
          Et = a(89926),
          Ft = a(32545),
          it = a.n(Ft);
        function zt(f) {
          const { appID: S, classOverride: G, styleOverride: X } = f,
            [K, ee] = (0, N.useState)(!1),
            le = (0, kt.m)("GameHoverFollowButton"),
            { elDialogElement: ue, fnShowLogonDialog: ye } = (0, Et.l)(),
            Ae = (0, Oe.Fh)(S),
            { mutateAsync: Se } = (0, $e.L)(S, !Ae, void 0),
            Be = async (xe) => {
              xe.preventDefault(),
                xe.stopPropagation(),
                se.iA.logged_in
                  ? (ee(!0), await Se(), le.token.reason || ee(!1))
                  : ye();
            };
          return (0, e.jsxs)(Dt.Z, {
            className: (0, Ye.A)(it().FollowButton, G),
            onClick: Be,
            style: X,
            children: [
              Ae ? (0, e.jsx)(qe.pPV, {}) : (0, e.jsx)(qe.c9e, {}),
              (0, e.jsx)("div", {
                className: (0, Ye.A)(
                  it().FollowButtonText,
                  K && it().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, ne.we)(
                  Ae ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              ue,
            ],
          });
        }
        function Ht(f) {
          const { appid: S, color: G, bgcolor: X } = f,
            K = (0, jt.n9)();
          return (0, e.jsx)(zt, {
            appID: S,
            classOverride: (0, Ye.A)(
              Qe().FollowGameButtonNotTop,
              Ut().BBCodeFollowButton,
            ),
            styleOverride: { color: G, backgroundColor: X },
          });
        }
        function lt(f) {
          const S = Number(f.args.appid);
          if (!S) return null;
          const G = (0, Fe.O)(f.args.color, "black"),
            X = (0, Fe.O)(f.args.bgcolor, "white");
          return (0, e.jsx)(Ht, { appid: S, color: G, bgcolor: X });
        }
        var ct = a(57646);
        function Wt(f) {
          const S = Number(f.args.packageid);
          return S
            ? (0, e.jsx)(ct.eF, {
                packageID: S,
                display_style: (0, ct._w)(f.args.display),
              })
            : null;
        }
        function dt(f) {
          const S = Number(f.args.packageid),
            G = Number(f.args.compareid);
          return !S || !G
            ? null
            : (0, e.jsx)(ct.hJ, { packageID: S, compareID: G });
        }
        function Vt(f) {
          const S = f.args[""]?.trim();
          return S
            ? (0, e.jsx)("div", { className: S, children: f.children })
            : (0, e.jsx)(e.Fragment, { children: f.children });
        }
        var gt = a(18657),
          bt = a.n(gt),
          Ie = a(63026);
        function Kt(f) {
          const { clanAccountID: S, color: G, bgcolor: X } = f,
            [K, ee] = N.useState(!1);
          return (0, e.jsx)("div", {
            className: (0, Ye.A)(bt().BBCodeFollowButton, K && bt().isHovered),
            onMouseEnter: () => ee(!0),
            onMouseLeave: () => ee(!1),
            children: (0, e.jsx)(Ie.Q, {
              nCreatorAccountID: S,
              classOverride: Qe().FollowGameButtonNotTop,
              styleOverride: { color: G, backgroundColor: X },
              followType: "group",
            }),
          });
        }
        function yt(f) {
          const { event: S } = f.context,
            G = Number(f.args.groupid) || S?.clanSteamID.GetAccountID();
          if (!G) return null;
          const X = (0, Fe.O)(f.args.color, "black"),
            K = (0, Fe.O)(f.args.bgcolor, "white");
          return (0, e.jsx)(Kt, { clanAccountID: G, color: X, bgcolor: K });
        }
        var At = a(83482),
          q = a(44267),
          et = a(9202),
          ut = a.n(et),
          Qt = a(29522);
        function Yt(f) {
          const { appid: S, color: G, bgcolor: X } = f,
            K = (0, jt.n9)(),
            ee = (0, Qt.$5)(S),
            le = (0, At.L3)(K);
          return (0, e.jsx)("div", {
            className: ut().WishlistHoverCtn,
            children: (0, e.jsx)(q.E, {
              snr: le,
              id: ee,
              classOverride: (0, Ye.A)(
                Qe().WishlistButtonNotTop,
                ut().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: { color: G, backgroundColor: X },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function Zt(f) {
          const S = Number(f.args.appid);
          if (!S) return null;
          const G = (0, Fe.O)(f.args.color, "black"),
            X = (0, Fe.O)(f.args.bgcolor, "white");
          return (0, e.jsx)(Yt, { appid: S, color: G, bgcolor: X });
        }
        let Me = null;
        function Ne() {
          return (
            Me == null &&
              (Me = new Map([
                ["wishlist", { Constructor: Zt, autocloses: !1 }],
                ["followgroup", { Constructor: yt, autocloses: !1 }],
                ["classname", { Constructor: Vt, autocloses: !1 }],
                ["price", { Constructor: Wt, autocloses: !1 }],
                ["pricesavings", { Constructor: dt, autocloses: !1 }],
                ["reservationbutton", { Constructor: te, autocloses: !1 }],
              ])),
            Me
          );
        }
        var Re = a(37656),
          Ge = a(29868),
          Te = a(24642);
        function tt(f) {
          return f < 10 ? "0" + f : f;
        }
        function Jt(f) {
          const { giveawayid: S } = f,
            G = (0, Re.w)(S),
            {
              bLoadingGiveawayInfo: X,
              winner_count: K,
              closed: ee,
              seconds_until_drawing: le,
            } = G;
          return X
            ? null
            : (0, e.jsxs)("div", {
                className: Ge.countdownCtn,
                children: [
                  !!ee &&
                    (0, e.jsx)("div", {
                      className: Ge.Closed,
                      children:
                        K > 0
                          ? (0, ne.we)("#Giveaway_Closed", (0, Te.D)(K))
                          : (0, ne.we)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !ee &&
                    (0, e.jsxs)(N.Fragment, {
                      children: [
                        le <= 0
                          ? (0, e.jsxs)("div", {
                              className: Ge.Throbber,
                              children: [
                                (0, e.jsx)(g.t, { size: "small" }),
                                (0, e.jsx)("div", {
                                  children: (0, ne.we)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, e.jsxs)("div", {
                              className: Ge.CountDownCtn,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Ge.CountDownTime,
                                  children:
                                    tt(Math.floor(le / 60)) + ":" + tt(le % 60),
                                }),
                                (0, e.jsxs)("div", {
                                  className: Ge.CountDownText,
                                  children: [
                                    (0, ne.we)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, ne.we)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        K > 0 &&
                          (0, e.jsxs)("div", {
                            className: Ge.WinnerInfo,
                            children: [
                              (0, e.jsx)("div", {
                                className: Ge.WinnerCount,
                                children: (0, Te.D)(K),
                              }),
                              (0, e.jsx)("div", {
                                className: Ge.WinnerText,
                                children: (0, ne.we)(
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
          Pe = a(39256),
          wt = a(4720),
          qt = a(37375),
          en = a(57810),
          Ze = a(36631),
          tn = a(76281),
          ht = a(81416);
        function Je(f) {
          const { eventModel: S, nEventBadgeID: G } = f,
            X = (0, he.fy)(G);
          if (X?.level > 0) {
            let K = X.level;
            if (S?.BHasSaleEnabled()) {
              const ee = S.GetSaleSectionsByType("badge_progress");
              if (ee?.length == 1) {
                const le = ee[0].badge_progress;
                if (le?.event_badgeid == G && le?.granted_by_discovery_queue) {
                  const ue = le.levels[le.levels.length - 1].level;
                  return (0, e.jsx)(nn, {
                    eventModel: S,
                    nBadgeLevel: K,
                    nMaxLevel: ue,
                  });
                }
              }
            }
            return (0, e.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, Te.D)(K),
            });
          }
          return null;
        }
        function nn(f) {
          const { eventModel: S, nBadgeLevel: G, nMaxLevel: X } = f,
            K = N.useMemo(() => {
              const Ae = S.GetSaleSections().filter(
                (Se) => Se.section_type == "discoveryqueue",
              );
              return Ae?.length > 0 ? Ae[0] : null;
            }, [S]),
            { storePageFilter: ee, eStoreDiscoveryQueueType: le } = N.useMemo(
              () => (0, qt.lx)(S, K),
              [S, K],
            ),
            ue = (0, en.Uf)(le, ee),
            ye = Math.min(G + ue, X);
          return (0, e.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, Te.D)(ye),
          });
        }
        function an(f) {
          const { event: S } = f.context,
            G = Number.parseInt((0, D.j$)(f.args, "eventid"));
          return se.iA.logged_in && G
            ? (0, e.jsx)(Je, { nEventBadgeID: G, eventModel: S })
            : null;
        }
        function Xe(f) {
          const { nDoorIndex: S, children: G } = f,
            X = (0, B.OM)(S),
            K = (0, B.gP)(),
            [ee, le] = N.useState(!1),
            [ue, ye] = N.useState(!1),
            { elDialogElement: Ae, fnShowLogonDialog: Se } = (0, Et.l)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)($t.$n, {
                disabled: X,
                onClick: (Be) => {
                  ee ||
                    (se.iA.logged_in
                      ? (le(!0),
                        K({ iDoorIndex: S })
                          .then((xe) => {
                            xe || ye(!0), le(!1);
                          })
                          .catch(() => {
                            ye(!0), le(!1);
                          }))
                      : Se());
                },
                children: ue
                  ? (0, e.jsx)("div", {
                      children: (0, ne.we)("#GrantAwardError_Busy"),
                    })
                  : (0, e.jsxs)(e.Fragment, {
                      children: [
                        !!ee && (0, e.jsx)(g.t, { size: "small" }),
                        !!X && (0, e.jsx)(qe.Jlk, {}),
                        G,
                      ],
                    }),
              }),
              Ae,
            ],
          });
        }
        function on(f) {
          const S = Number.parseInt((0, D.j$)(f.args)) || 0;
          return S >= 0 && S < 32
            ? (0, e.jsx)(Xe, { nDoorIndex: S, children: f.children })
            : null;
        }
        const Lt = (0, mt.y)(tn.H);
        function me(f) {
          const S = Number.parseInt((0, D.j$)(f.args)),
            { event: G, showErrorInfo: X } = f.context;
          if (S) {
            const K = G?.jsondata?.sale_sections?.findIndex(
              (ee) => ee.unique_id == S,
            );
            if (K >= 0) {
              const ee = G.GetDayIndexFromEventStart();
              return (0, e.jsx)(Ze.Cs, {
                location: X ? Ze.HY : Ze.bs,
                children: (0, e.jsx)(Lt, {
                  event: G,
                  section: G.jsondata.sale_sections[K],
                  activeTab: new wt.y(null, ee),
                  language: f.language,
                  nSaleDayIndex: ee,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: X
                    ? ht.S.EPreviewMode_Enabled
                    : ht.S.EPreviewMode_Disabled,
                }),
              });
            } else if (X)
              return (0, e.jsxs)("div", {
                className: Pe.ErrorDiv,
                children: ["Error could not find sale section ", S],
              });
          }
          return null;
        }
        let _e = null;
        function sn() {
          return (
            _e == null &&
              (_e = new Map([
                ...Array.from(Ne().entries()),
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
          const { event: S } = f.context,
            G = Number.parseInt((0, D.j$)(f.args, "appid")),
            X = Number.parseInt((0, D.j$)(f.args, "itemdefid")),
            K = Number.parseInt((0, D.j$)(f.args, "maxquantity")),
            ee = (0, D.j$)(f.args, "calltoaction");
          return !(0, Xt.gS)(G, X, !1) || !S
            ? (0, e.jsx)(g.t, {
                size: "small",
                position: "center",
                string: (0, ne.we)("#Loading"),
              })
            : (0, e.jsx)(Ke.f, {
                language: f.language,
                clanAccountID: S.clanSteamID.GetAccountID(),
                itemDefSetting: { nAppID: G, nItemDefID: X, max_quantity: K },
                strCallToAction: ee,
              });
        }
        function rn(f) {
          const S = W();
          if (!S) return (0, e.jsx)(g.t, { size: "small" });
          const G = Number.parseInt((0, D.j$)(f.args));
          return (0, e.jsx)("span", { children: (0, Te.D)(Number(y(S, G))) });
        }
        function ln(f) {
          const S = (0, Q.jR)(se.iA.accountid, "library");
          if (!S) return (0, e.jsx)(g.t, { size: "small" });
          const G = Number.parseInt((0, D.j$)(f.args));
          let X = S.verifiedList?.length || 0;
          switch (G) {
            case H.sd:
              X = S.playableList?.length || 0;
              break;
            case H.V8:
              X = S.unsupportedList?.length || 0;
              break;
            case H.YX:
              X = S.unknownList?.length || 0;
              break;
          }
          return (0, e.jsx)("span", { children: (0, Te.D)(Number(X)) });
        }
        function cn(f) {
          const S = Number.parseInt((0, D.j$)(f.args)),
            G =
              "hide" in f.args && !!Number.parseInt((0, D.j$)(f.args, "hide"));
          return S >= 0
            ? (0, e.jsx)(dn, { nDoorIndex: S, bHide: G, children: f.children })
            : null;
        }
        function dn(f) {
          const { nDoorIndex: S, bHide: G, children: X } = f,
            K = (0, B.OM)(S);
          return K == null
            ? null
            : (K && !G) || (!K && G)
              ? (0, e.jsx)(e.Fragment, { children: f.children })
              : null;
        }
        function ze(f) {
          return (0, e.jsx)("span", {
            className: fe.LocalizeBlock,
            children: (0, ne.oW)(
              f.children,
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
              (0, e.jsx)("b", {}),
            ),
          });
        }
        function gn(f) {
          let S = (0, D.j$)(f.args);
          return S
            ? (0, e.jsx)(Jt, { giveawayid: S })
            : (0, e.jsx)(N.Fragment, {});
        }
        const nt = void 0;
        function un(f) {
          return (0, e.jsx)(te, { ...f, PreviewActions: nt });
        }
        var mn = a(71698),
          hn = a(94520);
        function pn(f) {
          const { bSalePage: S } = f,
            [G, X] = N.useState(!1);
          return (
            (0, mn.H)(G, S),
            N.useEffect(() => {
              re.Vw.Init(new ie.D(se.TS.WEBAPI_BASE_URL)), Z.O3.Init(), X(!0);
            }, []),
            N.useEffect(() => {
              const K = (0, ne.l4)();
              K && k.locale(K);
            }, []),
            G
              ? S
                ? (0, e.jsx)(hn.d3, { dictionary: sn(), children: f.children })
                : f.children
              : null
          );
        }
      },
      11811: (M, ge, a) => {
        "use strict";
        a.r(ge), a.d(ge, { default: () => y });
        var e = a(7850),
          k = a(71698),
          N = a(90626),
          ie = a(73259),
          re = a(76559),
          Z = a(77495),
          ne = a(14069),
          se = a(64641),
          H = a.n(se),
          m = a(85599),
          oe = a(18210),
          $ = a(3166),
          de = a(59970),
          F = a(85692),
          U = a(41032),
          W = a(51079);
        function y(B) {
          const { eventModel: V } = B;
          return (0, e.jsx)(de.d, {
            bSalePage: !0,
            children: (0, e.jsx)(D, { ...B, overrideEventModel: V }),
          });
        }
        function D(B) {
          const { promotionName: V, language: E, overrideEventModel: l } = B,
            [g, C] = N.useState(
              l ?? Z.O3.GetClanEventFromAnnouncementGID($.P9.ANNOUNCEMENT_GID),
            );
          N.useEffect(() => {
            if (!l && g?.AnnouncementGID != $.P9.ANNOUNCEMENT_GID) {
              const c = new re.b($.UF.CLANSTEAMID);
              Z.O3.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
                c,
                $.P9.ANNOUNCEMENT_GID,
                null,
              ).then(C);
            }
          }, [g, l]);
          const J = (0, F.D2)() ?? g,
            T = (0, F.ty)();
          if (((0, k.s)(1500), !J))
            return (0, e.jsx)("div", {
              className: H().FlexCenter,
              style: { height: "500px" },
              children: (0, e.jsx)(m.t, {
                size: "medium",
                string: (0, oe.we)("#Loading"),
              }),
            });
          const te =
            (J.visibility_state !== ie.zv.k_EEventStateVisible &&
              J.visibility_state !== ie.zv.k_EEventStateUnlisted) ||
            T;
          return (0, e.jsx)(Q, {
            eventModel: J,
            children: (0, e.jsx)(W.oJ, {
              children: (0, e.jsx)(W.Ay, {
                curator_clanid: J?.clanSteamID?.GetAccountID(),
                children: (0, e.jsx)(ne._, {
                  promotionName: V,
                  language: E,
                  eventModel: J,
                  bIsPreview: te,
                }),
              }),
            }),
          });
        }
        function Q(B) {
          const { eventModel: V, children: E } = B,
            l = V.GetContentHubType() == "adultonly";
          return (0, e.jsx)(U.QA, {
            eAdultOnlyMediaBehavior: l ? "allowed" : "masked",
            children: E,
          });
        }
      },
      32545: (M) => {
        M.exports = {
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
      50909: (M) => {
        M.exports = {
          SalePageHiddenWarning: "_2h9U3L_8MxvbQ6TGGaeBYa",
          WarningText: "_2iB5yR1rkdynH8-UFCwUty",
        };
      },
      76789: (M) => {
        M.exports = {
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
      71347: (M) => {
        M.exports = {
          PresenterDisclaimer: "_3t5Ysy42auAhLs-ZV5jwdF",
          PresenterLabel: "_2FnM_Y63_Jnu_t6cnt-4se",
        };
      },
      27828: (M) => {
        M.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      64387: (M) => {
        M.exports = { MenuBackgroundReflection: "_1vclHrINn0CO_nGkxoDkKy" };
      },
      17618: (M) => {
        M.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      10026: (M) => {
        M.exports = { BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk" };
      },
      18657: (M) => {
        M.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      29868: (M) => {
        M.exports = {
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
      32190: (M) => {
        M.exports = { ColorCtn: "Sf6uEgb-RsQVL8-DaDtRl" };
      },
      13447: (M) => {
        M.exports = {
          Ctn: "_2Un11RfkRCG1ypLwtwMzrI",
          CtnEditor: "_1_IJ41Ffm67VU1UXLllw1C",
          SwapColorsCtn: "_2n77ZzDS9tVkdreDY75XWS",
          EditorTitle: "SxztzVEl1Jvth4-DhCzea",
          ConfDialogOptions: "_1SQN7pP2X-HClw-EOdtut1",
          ImageOptions: "_3pRF8ln193eBQJlbd8WJih",
          ColorOptions: "_2zPsCFzA78zGnQWaKhLIr9",
        };
      },
      81557: (M) => {
        M.exports = {
          TabCtn: "d43sj0ExWatSivXsOo2Qx",
          TabHeader: "_2CnSAWQAuZ56_k9CtX6wvO",
        };
      },
      53732: (M) => {
        M.exports = {
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
      9709: (M) => {
        M.exports = {
          TitleImg: "_3E4IFPQP4lnTaJ8fo462Br",
          PreviewImg: "_2COOlV_DzUDN3N0P3ToybN",
          ArtworkBar: "_3OWH-tupjKqql_tcQsLYIp",
        };
      },
      71647: (M) => {
        M.exports = {
          DragAndDropContainer: "_2RL1a79W53-tCW7090DcUp",
          DragAndDropContainerDragging: "wn604fTvW5SH1o852jAnI",
          ImageUploadBar: "_2Zk7b2c_FLMvZPqYvzTzt5",
          SelectImageButton: "_3Cd9cpywFS-01PilCrgOQo",
        };
      },
      49460: (M) => {
        M.exports = {
          SearchInput: "z7qI4Gjuleb-g6osRQpw2",
          PickerTitle: "_1yPqhNpX8e1HgnrarYmsZg",
        };
      },
      27344: (M) => {
        M.exports = {
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
      25359: (M) => {
        M.exports = {
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
      79949: (M) => {
        M.exports = {
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
      20860: (M) => {
        M.exports = {
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
      15496: (M) => {
        M.exports = {
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
      9202: (M) => {
        M.exports = {
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
      64734: (M) => {
        M.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      51239: (M) => {
        M.exports = {
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
          BackgroundAnimation: "_10Bfh_1KHpFNk8qNyewY_F",
          "ItemFocusAnim-darkerGrey-nocolor": "_3LFS9sVPAAjvuyGeJ1peaT",
          "ItemFocusAnim-darkerGrey": "_1S59zff-jnAxDy8rr0hHlS",
          "ItemFocusAnim-darkGreySettings": "_34Uv5_hzQOvOrw1Unrblim",
          "ItemFocusAnim-darkGrey": "Hh_85_Fjw1YP9H4vzXEu_",
          "ItemFocusAnim-grey": "_2-9pWSpKgjrjUj71iLnJo7",
          "ItemFocusAnim-translucent-white-10": "W_bdqnE_ztejA8mOAYb6D",
          "ItemFocusAnim-translucent-white-20": "_2rFvANRdudDnTxPKgIBcZd",
          "ItemFocusAnimBorder-darkGrey": "_2b9hABAip8cwkuxxNVwPSw",
          "ItemFocusAnim-green": "_3Jf28OMYy3a68jmK-GOBsc",
          focusAnimation: "MlTzZ1Co7fkjpq6p2zQ0",
          hoverAnimation: "_19RLtomnrOIiHhk5GWSMdR",
        };
      },
      44894: (M, ge, a) => {
        "use strict";
        a.d(ge, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

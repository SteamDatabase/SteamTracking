/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "3y2B": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var s = n("mrSG"),
        i = (n("q1tI"), n("2vnA"));
      class r {
        constructor(e, t) {
          if (!t.hasOwnProperty(e))
            throw new Error("Room effect " + e + " is not defined.");
          (this.name = e),
            (this.timestamp = Date.now()),
            (this.settings = t[e]),
            (this.expires = this.timestamp + this.settings.timeout);
        }
        static QueueFor(e) {
          return r.k_QueueForEffect[e];
        }
        Queue() {
          return r.k_QueueForEffect[this.name];
        }
        bIsExpired() {
          return Date.now() > this.expires;
        }
        bIsActive() {
          const e = Date.now();
          return this.timestamp <= e && this.expires > e;
        }
        iTimeToExpiry() {
          return this.expires - Date.now();
        }
        render() {
          return this.bIsActive() ? this.settings.render(this) : null;
        }
      }
      r.k_QueueForEffect = {
        snowball: "snowball",
        snow: "confetti_snow",
        confetti: "confetti_snow",
        goldfetti: "confetti_snow",
        firework: "festive",
        balloons: "festive",
        lny2020_lanterns: "festive",
        lny2020_firework: "festive",
        lny2020_confetti: "confetti_snow",
      };
      class o {
        constructor(e) {
          (this.m_mapRoomEffectQueue = {
            default: [],
            snowball: [],
            confetti_snow: [],
            festive: [],
          }),
            (this.m_rgRunningEffects = []),
            (this.m_effectSettings = e);
        }
        AddRoomEffect(e) {
          this.QueueRoomEffect(e), this.UpdateRunningRoomEffects();
        }
        QueueRoomEffect(e) {
          this.m_mapRoomEffectQueue[r.QueueFor(e)].push(e);
        }
        ActivateRoomEffect(e) {
          try {
            const t = new r(e, this.m_effectSettings);
            this.m_rgRunningEffects.push(t),
              window.setTimeout(() => {
                this.UpdateRunningRoomEffects();
              }, t.iTimeToExpiry() + 100);
          } catch (e) {
            console.log(e);
          }
        }
        BIsQueueFull(e) {
          return (
            this.m_rgRunningEffects.filter((t) => t.Queue() == e).length >=
            o.k_MaxRoomEffectRunning[e]
          );
        }
        UpdateRunningRoomEffects() {
          this.m_rgRunningEffects = this.m_rgRunningEffects.filter(
            (e) => !e.bIsExpired()
          );
          for (let e in this.m_mapRoomEffectQueue) {
            const t = e;
            for (
              ;
              this.m_mapRoomEffectQueue[t].length > 0 && !this.BIsQueueFull(t);

            )
              this.ActivateRoomEffect(this.m_mapRoomEffectQueue[t].shift());
          }
        }
      }
      (o.k_MaxRoomEffectRunning = {
        default: 1,
        snowball: 10,
        confetti_snow: 3,
        festive: 10,
      }),
        Object(s.b)([i.C], o.prototype, "m_rgRunningEffects", void 0);
    },
    "6iBs": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var s = n("/Q1a"),
        i = (n("msu0"), n("2vnA"));
      class r {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = i.C.map()),
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
          let n = s.d.LANGUAGE;
          return o(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let n = s.d.LANGUAGE;
          return a(
            e,
            this.GetTokenList(n),
            "english" != n ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function o(e, t, n, i, r) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let o = e;
        e = e.toLowerCase();
        let p = "";
        if (
          (t && t.has(e) && (p = t.get(e)),
          !p && n && n.has(e) && (p = n.get(e)),
          p)
        )
          p = a(p, t, n, i, r);
        else if (
          ((t || n) &&
            console.log(
              "No loc found for appid",
              i,
              o,
              "Tokens:",
              t,
              "Fallback:",
              n
            ),
          t && 1 != s.d.EUNIVERSE)
        )
          return e;
        return p;
      }
      function a(e, t, n, s, i) {
        let r = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (r)
          for (let a of r) {
            let r = o(p(a.slice(1, -1), i), t, n, s, i);
            if (!r) return "";
            e = e.replace(a, r);
          }
        return (e = p(e, i));
      }
      function p(e, t) {
        let n = e.match(/%[A-Za-z0-9_:]+%/g);
        if (n)
          for (let s of n) {
            let n = s.slice(1, -1).toLowerCase(),
              i = t.get(n);
            null == i
              ? console.log("No rich presence found for", n)
              : (e = e.replace(s, i));
          }
        return e;
      }
    },
    AYtk: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return o;
        });
      var s = n("q1tI"),
        i = n("e356");
      n("R5YR"), n("/Q1a");
      function r() {
        return s.createElement(i.U, null);
      }
      function o() {
        return s.createElement(i.B, null);
      }
    },
    FKEV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var s = n("mrSG"),
        i = n("2vnA"),
        r = (n("aoTL"), n("msu0")),
        o = n("9XWO"),
        a = n("d4Nf"),
        p = n("6iBs"),
        c = (n("8G9o"), n("KjDl")),
        h = n("f5iL"),
        l = n("3u1o"),
        m = n("/Q1a");
      class u {
        constructor() {
          (this.m_mapAppInfo = i.C.map()),
            (this.m_mapRichPresenceLoc = i.C.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new l.a());
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
              Object(h.a)(
                !1,
                "Registering for callback on appinfo load, but nothing queued"
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
            (Object(h.a)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init"
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new a.a(e);
            this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
          }
          return this.m_mapAppInfo.get(e);
        }
        QueueAppInfoRequest(e) {
          return e
            ? (this.m_setPendingAppInfo.size ||
                ((this.m_PendingAppInfoPromise = new Promise(
                  (e) => (this.m_PendingAppInfoResolve = e)
                )),
                window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
              this.m_setPendingAppInfo.add(e),
              this.m_PendingAppInfoPromise)
            : Promise.resolve();
        }
        FlushPendingAppInfo() {
          return Object(s.a)(this, void 0, void 0, function* () {
            const e = this.m_PendingAppInfoResolve,
              t = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              yield this.LoadAppInfoBatch(t),
              e();
          });
        }
        LoadAppInfoBatch(e) {
          return Object(s.a)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = o.b.Init(c.b);
              e.Body().set_language(Object(r.g)(m.d.LANGUAGE));
              const n = 50;
              for (; t.length > 0; ) {
                const s = Math.min(n, t.length),
                  i = t.slice(0, s);
                (t = t.slice(s)), e.Body().set_appids(i);
                const r = yield c.g.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e
                );
                1 == r.GetEResult()
                  ? this.OnGetAppsResponse(r)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${r.GetEResult()}, AppIDs:`,
                      i
                    );
              }
            }
            0 == --this.m_cAppInfoRequestsInFlight &&
              0 == this.m_setPendingAppInfo.size &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          });
        }
        OnGetAppsResponse(e) {
          let t = [];
          for (let n of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(n.appid());
            Object(h.a)(
              e,
              `Got AppInfo response for unrequested AppID: ${n.appid()}`
            ),
              e &&
                ((e = new a.a(n.appid())),
                e.DeserializeFromMessage(n),
                this.m_mapAppInfo.set(n.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new a.a(t.appid());
            e.DeserializeFromAppOverview(t),
              this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return Object(s.a)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let n = this.m_mapAppInfo.get(e);
                n
                  ? n.is_valid || (t = !0)
                  : ((n = new a.a(e)),
                    this.m_mapAppInfo.set(e, n),
                    this.QueueAppInfoRequest(e),
                    (t = !0));
              }),
              t && void 0 !== this.m_PendingAppInfoPromise
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          });
        }
        SetCacheStorage(e) {
          this.m_CacheStorage = e;
        }
        GetCacheKeyForAppID(e) {
          return "APPINFO_" + e;
        }
        LoadAppInfoBatchFromLocalCache(e) {
          return Object(s.a)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              n = (e) =>
                Object(s.a)(this, void 0, void 0, function* () {
                  const n = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!n) return e;
                  let s = this.m_mapAppInfo.get(e);
                  return (
                    Object(h.a)(
                      s,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    s
                      ? ((s = new a.a(e)),
                        s.DeserializeFromCacheObject(n),
                        s.is_initialized
                          ? (this.m_mapAppInfo.set(e, s),
                            s.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              n
                            ),
                            e))
                      : e
                  );
                });
            let i = e.map((e) => n(e));
            return (yield Promise.all(i)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return Object(s.a)(this, void 0, void 0, function* () {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                e.map((e) => e.appid)
              );
              for (const t of e) {
                const e = t.SerializeToCacheObject();
                e &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(t.appid),
                    e
                  );
              }
            }
          });
        }
        Localize(e, t, n) {
          const s = this.GetRichPresenceLoc(e);
          return s
            ? s.Localize(t, n)
            : 1 != m.d.EUNIVERSE
            ? (console.log(
                `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`
              ),
              t)
            : "";
        }
        GetRichPresenceLoc(e) {
          if (this.m_mapRichPresenceLoc.has(e.toString())) {
            let t = this.m_mapRichPresenceLoc.get(e.toString());
            return (
              t.m_nLastUpdated + 6e4 * a.b < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new p.a(e);
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
            for (let e of n.tokens()) s.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = o.b.Init(c.a);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(m.d.LANGUAGE),
                    c.g.GetAppRichPresenceLocalization(
                      this.m_CMInterface.GetServiceTransport(),
                      t
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
                          t.Body().token_lists()
                        ),
                        Promise.resolve(e))
                  )
                )),
              e.m_fetching.catch(() => {
                e.m_fetching = null;
              })),
            e.m_fetching
          );
        }
      }
      Object(s.b)([i.k], u.prototype, "OnGetAppsResponse", null),
        Object(s.b)([i.k], u.prototype, "OnRichPresenceLocUpdate", null);
      const f = new u();
    },
    Gcny: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var s = n("mrSG"),
        i = n("q1tI"),
        r = n("hCpY");
      n("f5iL");
      class o extends i.Component {
        constructor(e) {
          super(e),
            (this.m_refImage = i.createRef()),
            (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const e = this.props,
            { src: t, rgSources: n, onIncrementalError: r, onError: o } = e,
            a = Object(s.c)(e, [
              "src",
              "rgSources",
              "onIncrementalError",
              "onError",
            ]),
            p = this.src;
          return i.createElement(
            "img",
            Object.assign({ src: p, ref: this.m_refImage }, a, {
              onError: this.OnImageError,
            })
          );
        }
      }
      Object(s.b)([r.b], o.prototype, "OnImageError", null);
    },
    d4Nf: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return p;
        });
      var s = n("/Q1a"),
        i = (n("2vnA"), n("6iBs"), n("xH93")),
        r = (n("QAsS"), n("8G9o"), n("f5iL"));
      const o = "061818254b2c99ac49e6626adb128ed1282a392f",
        a = 120;
      class p {
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
        get header_image_url() {
          return s.d.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, o);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, o);
        }
        get logo_url() {
          return (
            s.d.MEDIA_CDN_URL +
            `steam/apps/${this.m_unAppID}/capsule_231x87.jpg`
          );
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, t) {
          return e
            ? s.d.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : Object(i.a)(t);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
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
          } catch (e) {}
        }
        SerializeToCacheObject() {
          return (
            Object(r.a)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!"
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
    xH93: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var s = n("/Q1a");
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(e, t) {
        let n = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = i),
          44 == e.length && ((n = e.substr(-4)), (e = e.substr(0, 40)));
        let r = s.d.AVATAR_BASE_URL;
        return (
          r ||
            ((r = s.d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (r += e.substr(0, 2) + "/")),
          (r += e),
          t && "small" != t && (r += "_" + t),
          (r += n),
          r
        );
      }
    },
    y0CV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var s = n("mrSG"),
        i = n("q1tI"),
        r = n("rSrx"),
        o = n("hCpY");
      class a extends i.Component {
        constructor() {
          super(...arguments),
            (this.m_observer = null),
            (this.m_refElement = i.createRef()),
            (this.m_elTracked = null),
            (this.m_bPreviouslyIntersecting = !1);
        }
        static GetScrollableClassname() {
          return "vt-scrollable";
        }
        BTriggerOnce() {
          return "once" == (this.props.trigger || "once");
        }
        GetBoundingClientRect() {
          return this.m_refElement.current
            ? this.m_refElement.current.getBoundingClientRect()
            : null;
        }
        DestroyObserver() {
          this.m_observer &&
            (this.m_observer.disconnect(),
            (this.m_observer = null),
            (this.m_elTracked = null));
        }
        componentWillUnmount() {
          this.DestroyObserver();
        }
        componentDidMount() {
          this.UpdateObserver(null);
        }
        componentDidUpdate(e) {
          this.UpdateObserver(e);
        }
        UpdateObserver(e) {
          if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
          this.m_observer &&
            e &&
            e.rootMargin != this.m_observer.rootMargin &&
            this.DestroyObserver();
          let t = this.m_refElement.current;
          if (
            (this.m_observer &&
              t != this.m_elTracked &&
              (this.m_observer.unobserve(this.m_elTracked),
              (this.m_elTracked = null)),
            !this.m_observer && t)
          ) {
            let e = { root: this.FindScrollableAncestor(t) };
            this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
              (this.m_observer = new IntersectionObserver(
                this.OnIntersection,
                e
              ));
          }
          this.m_observer &&
            t &&
            t != this.m_elTracked &&
            (this.m_observer.observe(t), (this.m_elTracked = t));
        }
        FindScrollableAncestor(e) {
          return r.l(e, (e) => {
            const t = this.props.bHorizontal
              ? window.getComputedStyle(e).overflowX
              : window.getComputedStyle(e).overflowY;
            return (
              "scroll" == t ||
              "auto" == t ||
              !!e.classList.contains(a.GetScrollableClassname())
            );
          });
        }
        OnIntersection(e, t) {
          let n = !1;
          for (const t of e)
            if (t.isIntersecting) {
              n = !0;
              break;
            }
          this.m_bPreviouslyIntersecting != n &&
            ((this.m_bPreviouslyIntersecting = n),
            this.props.onVisibilityChange && this.props.onVisibilityChange(n),
            n && this.BTriggerOnce() && this.DestroyObserver());
        }
        render() {
          let e = this.props,
            {
              onVisibilityChange: t,
              rootMargin: n,
              trigger: r,
              bHorizontal: o,
            } = e,
            a = Object(s.c)(e, [
              "onVisibilityChange",
              "rootMargin",
              "trigger",
              "bHorizontal",
            ]);
          return i.createElement(
            "div",
            Object.assign({ ref: this.m_refElement }, a),
            this.props.children
          );
        }
      }
      Object(s.b)([o.b], a.prototype, "OnIntersection", null);
    },
  },
]);

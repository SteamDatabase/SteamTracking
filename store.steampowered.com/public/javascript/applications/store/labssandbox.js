/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    "1wed": function (e, t, a) {
      e.exports = {
        EntryError: "tagclustering_EntryError_1UGoD",
        ClusterConfig: "tagclustering_ClusterConfig_3Qp2u",
        PlaytimeCluster: "tagclustering_PlaytimeCluster_2qGfq",
        ClusterInfo: "tagclustering_ClusterInfo_20dmp",
        ClusterMembers: "tagclustering_ClusterMembers_VeQtF",
        SimilarTitle: "tagclustering_SimilarTitle_gRxJT",
      };
    },
    "6iBs": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var s = a("/Q1a"),
        r = (a("msu0"), a("2vnA"));
      class i {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = r.C.map()),
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
          let a = s.d.LANGUAGE;
          return n(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let a = s.d.LANGUAGE;
          return o(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function n(e, t, a, r, i) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let n = e;
        e = e.toLowerCase();
        let l = "";
        if (
          (t && t.has(e) && (l = t.get(e)),
          !l && a && a.has(e) && (l = a.get(e)),
          l)
        )
          l = o(l, t, a, r, i);
        else if (
          ((t || a) &&
            console.log(
              "No loc found for appid",
              r,
              n,
              "Tokens:",
              t,
              "Fallback:",
              a
            ),
          t && 1 != s.d.EUNIVERSE)
        )
          return e;
        return l;
      }
      function o(e, t, a, s, r) {
        let i = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (i)
          for (let o of i) {
            let i = n(l(o.slice(1, -1), r), t, a, s, r);
            if (!i) return "";
            e = e.replace(o, i);
          }
        return (e = l(e, r));
      }
      function l(e, t) {
        let a = e.match(/%[A-Za-z0-9_:]+%/g);
        if (a)
          for (let s of a) {
            let a = s.slice(1, -1).toLowerCase(),
              r = t.get(a);
            null == r
              ? console.log("No rich presence found for", a)
              : (e = e.replace(s, r));
          }
        return e;
      }
    },
    FKEV: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      var s = a("mrSG"),
        r = a("2vnA"),
        i = (a("aoTL"), a("msu0")),
        n = a("9XWO"),
        o = a("d4Nf"),
        l = a("6iBs"),
        p = (a("8G9o"), a("KjDl")),
        c = a("f5iL"),
        d = a("3u1o"),
        m = a("/Q1a");
      class h {
        constructor() {
          (this.m_mapAppInfo = r.C.map()),
            (this.m_mapRichPresenceLoc = r.C.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new d.a());
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
              Object(c.a)(
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
            (Object(c.a)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init"
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new o.a(e);
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
              let e = n.b.Init(p.b);
              e.Body().set_language(Object(i.g)(m.d.LANGUAGE));
              const a = 50;
              for (; t.length > 0; ) {
                const s = Math.min(a, t.length),
                  r = t.slice(0, s);
                (t = t.slice(s)), e.Body().set_appids(r);
                const i = yield p.g.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e
                );
                1 == i.GetEResult()
                  ? this.OnGetAppsResponse(i)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${i.GetEResult()}, AppIDs:`,
                      r
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
          for (let a of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(a.appid());
            Object(c.a)(
              e,
              `Got AppInfo response for unrequested AppID: ${a.appid()}`
            ),
              e &&
                ((e = new o.a(a.appid())),
                e.DeserializeFromMessage(a),
                this.m_mapAppInfo.set(a.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.a(t.appid());
            e.DeserializeFromAppOverview(t),
              this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return Object(s.a)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let a = this.m_mapAppInfo.get(e);
                a
                  ? a.is_valid || (t = !0)
                  : ((a = new o.a(e)),
                    this.m_mapAppInfo.set(e, a),
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
              a = (e) =>
                Object(s.a)(this, void 0, void 0, function* () {
                  const a = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!a) return e;
                  let s = this.m_mapAppInfo.get(e);
                  return (
                    Object(c.a)(
                      s,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    s
                      ? ((s = new o.a(e)),
                        s.DeserializeFromCacheObject(a),
                        s.is_initialized
                          ? (this.m_mapAppInfo.set(e, s),
                            s.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              a
                            ),
                            e))
                      : e
                  );
                });
            let r = e.map((e) => a(e));
            return (yield Promise.all(r)).filter((e) => null !== e);
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
        Localize(e, t, a) {
          const s = this.GetRichPresenceLoc(e);
          return s
            ? s.Localize(t, a)
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
              t.m_nLastUpdated + 6e4 * o.b < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new l.a(e);
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
          for (let a of t) {
            let t = a.language(),
              s = e.m_mapLanguages.get(t);
            s
              ? s.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (s = e.m_mapLanguages.get(t)));
            for (let e of a.tokens()) s.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = n.b.Init(p.a);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(m.d.LANGUAGE),
                    p.g.GetAppRichPresenceLocalization(
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
      Object(s.b)([r.k], h.prototype, "OnGetAppsResponse", null),
        Object(s.b)([r.k], h.prototype, "OnRichPresenceLocUpdate", null);
      const u = new h();
    },
    JO2d: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return be;
        });
      var s = a("1fPh"),
        r = a("mrSG"),
        i = a("FKEV"),
        n = a("rmVU"),
        o = a("/Q1a"),
        l = a("2vnA"),
        p = a("hCpY"),
        c = a("vDqi"),
        d = a.n(c);
      a("erV9");
      class m {
        constructor() {
          this.rgModelNames = [];
        }
        Init() {
          i.a.Init(new n.a(o.d.WEBAPI_BASE_URL, o.k.webapi_token));
          const e = `${o.d.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
          d.a.get(e).then((e) => {
            if (e.data) {
              let t = [];
              for (const a of e.data) "default" != a && t.push(a);
              t.sort(), (t = ["default", ...t]), (this.rgModelNames = t);
            }
          });
        }
        ComputePathBetweenApps(e, t, a, s, i, n, o) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const l = Math.acos(a);
            let p = new u(
                (e) =>
                  Object(r.a)(this, void 0, void 0, function* () {
                    let t = yield this.GetNeighbors(e),
                      a = [];
                    for (let e = 0; e < t.length; e++) {
                      const r = t[e];
                      if (
                        (!s || a.length > s) &&
                        (r.cost > l || (i && a.length >= i))
                      )
                        break;
                      a.push(r);
                    }
                    return a;
                  }),
                this.EstimateCosts,
                (e, t) => e == t,
                o
              ),
              c = yield p.FindPath(e, t, n || 10);
            if (c.path) {
              let e = [],
                t = 0;
              for (let a = 0; a < c.path.length; a++) {
                const s = c.path[a],
                  r = s.cost - t;
                (t = s.cost),
                  e.push({ appid: s.node, similarity: Math.cos(r) });
              }
              return e;
            }
            throw new Error("Unable to compute path.");
          });
        }
        GetNeighbors(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const t = `${o.d.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let a = yield d.a.get(t),
              s = [];
            if (a.data && a.data.appid == e)
              for (let e = 0; e < a.data.similar_appids.length; e++)
                s.push({
                  node: a.data.similar_appids[e],
                  cost: Math.acos(a.data.similarity_scores[e]),
                });
            return s;
          });
        }
        EstimateCosts(e, t) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const a = `${
              o.d.STORE_BASE_URL
            }labs/ajaxgetappsimilarities?appidtarget=${t}&${e
              .map((e) => "appid[]=" + e.toString())
              .join("&")}`;
            let s = yield d.a.get(a);
            if (s.data && s.data.similarity_scores)
              return s.data.similarity_scores.map((e) =>
                Math.acos(parseFloat(e))
              );
            throw new Error("Unable to fetch cost estimates");
          });
        }
      }
      Object(r.b)([l.C], m.prototype, "rgModelNames", void 0),
        Object(r.b)([p.b], m.prototype, "GetNeighbors", null),
        Object(r.b)([p.b], m.prototype, "EstimateCosts", null);
      class h {
        constructor(e) {
          (this.m_Heap = []), (this.m_Length = 0), (this.m_fnCompare = e);
        }
        get length() {
          return this.m_Length;
        }
        Clear() {
          (this.m_Heap = []), (this.m_Length = 0);
        }
        Peek() {
          return this.m_Length > 0 ? this.m_Heap[0] : void 0;
        }
        Pop() {
          if (0 != this.m_Length) {
            const e = this.m_Heap[0];
            return (
              (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
              this.m_Length--,
              this.BubbleDown(),
              e
            );
          }
        }
        Push(e) {
          this.m_Heap.length == this.m_Length
            ? this.m_Heap.push(e)
            : (this.m_Heap[this.m_Length] = e),
            this.m_Length++,
            this.BubbleUp();
        }
        FindElement(e) {
          for (let t = 0; t < this.m_Length; t++)
            if (e(this.m_Heap[t])) return { index: t, element: this.m_Heap[t] };
        }
        LowerPriorityOfElement(e, t) {
          (this.m_Heap[e] = t), this.BubbleUp(e);
        }
        BubbleDown() {
          let e = 0;
          do {
            const t = 2 * e + 1,
              a = 2 * e + 2;
            let s = e;
            if (
              (t < this.m_Length &&
                this.m_fnCompare(this.m_Heap[s], this.m_Heap[t]) > 0 &&
                (s = t),
              a < this.m_Length &&
                this.m_fnCompare(this.m_Heap[s], this.m_Heap[a]) > 0 &&
                (s = a),
              s == e)
            )
              break;
            {
              const t = this.m_Heap[e];
              (this.m_Heap[e] = this.m_Heap[s]), (this.m_Heap[s] = t), (e = s);
            }
          } while (e < this.m_Length);
        }
        BubbleUp(e) {
          let t = e || this.m_Length - 1;
          for (; t > 0; ) {
            const e = (t - 1) >> 1;
            if (!(this.m_fnCompare(this.m_Heap[e], this.m_Heap[t]) > 0)) break;
            {
              const a = this.m_Heap[e];
              (this.m_Heap[e] = this.m_Heap[t]), (this.m_Heap[t] = a), (t = e);
            }
          }
        }
      }
      class u {
        constructor(e, t, a, s) {
          (this.m_fnGetNeighbors = e),
            (this.m_fnEstimateCosts = t),
            (this.m_fnEquality = a),
            (this.m_fnIterationCallback = s);
        }
        FindPath(e, t, a) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let s = new h((e, t) => e.cost - t.cost),
              r = new Set();
            s.Push({ node: e, cost: 0 });
            let i = new Map(),
              n = new Map(),
              o = new Map(),
              l = (yield this.m_fnEstimateCosts([e], t))[0];
            i.set(e, l), n.set(e, 0);
            let p = 0;
            for (; s.length > 0 && p < a; ) {
              let e = s.Pop();
              if (this.m_fnEquality(e.node, t)) {
                let t = [],
                  a = e.node;
                for (; o.has(a); ) t.push(a), (a = o.get(a));
                let s = [];
                for (let e = t.length - 1; e >= 0; e--)
                  s.push({ node: t[e], cost: n.get(t[e]) });
                return { path: s };
              }
              r.add(e.node);
              let a = yield this.m_fnGetNeighbors(e.node);
              if (a.length > 0) {
                let l = yield this.m_fnEstimateCosts(
                  a.map((e) => e.node),
                  t
                );
                if (l.length != a.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding."
                    ),
                    {}
                  );
                let p = n.get(e.node);
                for (let t = 0; t < a.length; t++) {
                  const c = a[t];
                  let d = p + c.cost;
                  if (
                    (!n.has(c.node) || d < n.get(c.node)) &&
                    (o.set(c.node, e.node),
                    n.set(c.node, d),
                    i.set(c.node, c.cost + l[t]),
                    !r.has(c.node))
                  ) {
                    const e = c.cost + l[t];
                    let a = s.FindElement((e) => e.node == c.node);
                    a
                      ? a.element.cost > e &&
                        s.LowerPriorityOfElement(a.index, {
                          node: c.node,
                          cost: e,
                        })
                      : s.Push({ node: c.node, cost: e });
                  }
                }
              }
              p++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          });
        }
      }
      const _ = new m();
      window.g_LabsSandbox = _;
      var b = a("q1tI"),
        f = a.n(b),
        g = a("55Ip"),
        y = a("EC67"),
        S = a("PXMQ"),
        A = a("7ast"),
        I = a("Zdsb"),
        O = a("TyAF"),
        E = a("GbHM");
      class v extends f.a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              appid: 0,
              appinfo: null,
              mode: "display",
              strSearch: "",
              rgSuggestions: [],
            }),
            (this.m_currentRequest = 0),
            this.props.appidInitial &&
              (i.a
                .EnsureAppInfoForAppIDs([this.props.appidInitial])
                .then(() => {
                  i.a.GetAppInfo(this.props.appidInitial);
                  this.setState({
                    appid: this.props.appidInitial,
                    appinfo: i.a.GetAppInfo(this.props.appidInitial),
                  });
                }),
              (this.state.appid = this.props.appidInitial));
        }
        OnDisplayClicked() {
          this.setState({ mode: "select" });
        }
        UpdateAppSuggestions(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const t = e.target.value && e.target.value.trim();
            (null == t ? void 0 : t.length)
              ? (window.clearTimeout(this.m_currentRequest),
                (this.m_currentRequest = window.setTimeout(
                  () =>
                    Object(r.a)(this, void 0, void 0, function* () {
                      var e;
                      const a = {
                          cc: o.d.COUNTRY,
                          l: o.d.LANGUAGE,
                          realm: I.h.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: t.replace(" ", "+"),
                          require_type: "game",
                          excluded_tags: [],
                          excluded_content_descriptors: [],
                        },
                        s = `${o.d.STORE_BASE_URL}search/suggest`,
                        r = yield d.a.get(s, {
                          params: a,
                          withCredentials: !0,
                        });
                      let i;
                      (i = (
                        null === (e = null == r ? void 0 : r.data) ||
                        void 0 === e
                          ? void 0
                          : e.length
                      )
                        ? r.data.map((e) =>
                            f.a.createElement(
                              "div",
                              {
                                className: S.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              f.a.createElement("img", {
                                src: e.img,
                                className: S.LogoImage,
                              }),
                              f.a.createElement(
                                "div",
                                { className: S.AppName },
                                e.name +
                                  (this.props.showAppIds ? ` (${e.id})` : "")
                              )
                            )
                          )
                        : []),
                        this.setState({ strSearch: t, rgSuggestions: i });
                    }),
                  250
                )))
              : this.setState({ strSearch: "", rgSuggestions: null });
          });
        }
        SetSelectedApp(e) {
          e && 0 != e
            ? i.a.EnsureAppInfoForAppIDs([e]).then(() => {
                i.a.GetAppInfo(e);
                this.setState({
                  appid: e,
                  appinfo: i.a.GetAppInfo(e),
                  mode: "display",
                }),
                  this.props.fnOnSelection && this.props.fnOnSelection(e, this);
              })
            : this.setState({ appid: 0, appinfo: null, mode: "display" });
        }
        OnKeyUp(e) {
          27 == e.keyCode && this.setState({ mode: "display" });
        }
        render() {
          var e, t;
          const a =
            null !== (e = this.props.classOverride) && void 0 !== e
              ? e
              : S.AppSelector;
          let s = null;
          const r = f.a.createElement(A.z, {
            type: "text",
            onChange: this.UpdateAppSuggestions,
          });
          if ("display" == this.state.mode) {
            const e = this.state.appinfo
              ? this.state.appinfo.name +
                (this.props.showAppIds ? ` (${this.state.appid})` : "")
              : null !== (t = this.props.strPrompt) && void 0 !== t
              ? t
              : "Select game";
            s = f.a.createElement(
              "div",
              { className: S.AppDisplay },
              this.state.appinfo &&
                f.a.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: S.LogoImage,
                }),
              f.a.createElement("div", { className: S.AppName }, e)
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            s = f.a.createElement(
              "div",
              { className: S.AppSelect },
              r,
              e &&
                f.a.createElement(
                  "div",
                  { className: S.Suggestions },
                  this.state.rgSuggestions
                )
            );
          }
          return f.a.createElement(
            "div",
            {
              className: a,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
            },
            s
          );
        }
      }
      Object(r.b)([p.b], v.prototype, "OnDisplayClicked", null),
        Object(r.b)([p.b], v.prototype, "UpdateAppSuggestions", null),
        Object(r.b)([p.b], v.prototype, "OnKeyUp", null);
      class C extends f.a.Component {
        render() {
          if (0 == this.props.appid)
            return f.a.createElement("div", { className: S.SimilarApp });
          {
            const e = i.a.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return f.a.createElement("div", { className: S.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                f.a.createElement("div", {
                  className: S.Spacer,
                  key: "score-spacer",
                })
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                f.a.createElement(
                  "div",
                  { className: S.Score, key: "score-value" },
                  e
                )
              );
            }
            const a = e.name + " (" + this.props.appid.toString() + ")",
              s = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return f.a.createElement(
              "div",
              { className: S.SimilarApp, onClick: () => s(this.props.appid) },
              f.a.createElement("img", {
                src: e.header_image_url,
                className: S.LogoImage,
              }),
              f.a.createElement("div", { className: S.AppName }, a),
              t
            );
          }
        }
      }
      class w extends f.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {}),
            (this.ref_app_a = f.a.createRef()),
            (this.ref_app_b = f.a.createRef());
        }
        componentDidMount() {
          this.OnAppSelected();
        }
        OnAppSelected() {
          if (
            this.ref_app_a.current &&
            this.ref_app_b.current &&
            this.ref_app_a.current.state.appid &&
            this.ref_app_b.current.state.appid
          ) {
            const e = this.ref_app_a.current.state.appid,
              t = this.ref_app_b.current.state.appid,
              a = `${o.d.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
            d.a.get(a).then((e) => {
              e.data && e.data.similarity_scores
                ? this.setState({ score: e.data.similarity_scores[0] })
                : this.setState({ score: null });
            });
          }
        }
        render() {
          const e = this.state.score
            ? (100 * this.state.score).toFixed(1) + "%"
            : "";
          return f.a.createElement(
            "div",
            { className: S.LabsSimilarity },
            f.a.createElement(v, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            f.a.createElement("div", { className: S.HorizontalSpacer }),
            f.a.createElement("div", { className: S.Score }, e),
            f.a.createElement("div", { className: S.HorizontalSpacer }),
            f.a.createElement(v, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            })
          );
        }
      }
      Object(r.b)([p.b], w.prototype, "OnAppSelected", null);
      let B = class extends f.a.Component {
        constructor(e) {
          super(e),
            (this.selected_app = 0),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.similarity_model = "default"),
            (this.app_selector_ref = f.a.createRef()),
            e.default_app && this.SetSelectedApp(e.default_app);
        }
        componentDidMount() {
          this.app_selector_ref.current &&
            this.SetSelectedApp(this.app_selector_ref.current.state.appid);
        }
        OnSelectedApp(e) {
          e && this.SetSelectedApp(e);
        }
        SetSelectedApp(e, t) {
          if (t || e != this.selected_app) {
            (this.similar_apps = []),
              (this.selected_app = e),
              this.app_selector_ref.current &&
                this.app_selector_ref.current.SetSelectedApp(e);
            const t = `${o.d.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}&model=${this.similarity_model}`;
            d.a.get(t).then((e) => {
              if (e.data && e.data.appid == this.selected_app) {
                let t = new Set(
                  e.data.similar_appids.slice(0, this.props.max_similar)
                );
                t.add(e.data.appid),
                  i.a.EnsureAppInfoForAppIDs(t).then(() => {
                    (this.similar_apps = e.data.similar_appids),
                      (this.similarity_scores = e.data.similarity_scores);
                  });
              }
            });
          }
        }
        OnModelChanged(e, t) {
          (this.similarity_model = e.data),
            this.SetSelectedApp(this.selected_app, !0);
        }
        render() {
          let e,
            t = [];
          const a = Math.min(
            this.similar_apps.length,
            this.similarity_scores.length,
            this.props.max_similar
          );
          for (e = 0; e < a; e++) {
            const a = this.similar_apps[e],
              s = this.similarity_scores[e];
            t.push(
              f.a.createElement(C, {
                appid: a,
                score: s,
                key: a,
                fnOnSelected: this.SetSelectedApp,
              })
            );
          }
          let s = [];
          for (const e of _.rgModelNames) {
            let t = { label: f.a.createElement("div", { key: e }, e), data: e };
            s.push(t);
          }
          return f.a.createElement(
            "div",
            { className: S.LabsSimilarGames },
            f.a.createElement(A.n, {
              rgOptions: s,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            f.a.createElement("h1", null, "Games similar to:"),
            f.a.createElement(v, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            f.a.createElement("div", { className: S.SimilarApps }, t)
          );
        }
      };
      Object(r.b)([l.C], B.prototype, "selected_app", void 0),
        Object(r.b)([l.C], B.prototype, "similar_apps", void 0),
        Object(r.b)([l.C], B.prototype, "similarity_scores", void 0),
        Object(r.b)([l.C], B.prototype, "similarity_model", void 0),
        Object(r.b)([p.b], B.prototype, "OnSelectedApp", null),
        Object(r.b)([p.b], B.prototype, "SetSelectedApp", null),
        Object(r.b)([p.b], B.prototype, "OnModelChanged", null),
        (B = Object(r.b)([O.a], B));
      let R = class extends f.a.Component {
        constructor(e) {
          super(e),
            (this.selected_app = e.app),
            (this.selected_operator = e.operator);
        }
        OnSelectedApp(e) {
          e &&
            e != this.selected_app &&
            ((this.selected_app = e),
            this.props.fnOnChange && this.props.fnOnChange());
        }
        OnSelectedOperator(e, t) {
          (this.selected_operator = e.data),
            this.props.fnOnChange && this.props.fnOnChange();
        }
        render() {
          let e = [
            {
              label: f.a.createElement("div", { key: "Plus" }, "Plus"),
              data: "Plus",
            },
            {
              label: f.a.createElement("div", { key: "Minus" }, "Minus"),
              data: "Minus",
            },
          ];
          return f.a.createElement(
            "div",
            { className: S.Operand },
            f.a.createElement(
              "div",
              { className: S.OperatorSelect },
              f.a.createElement(A.n, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              })
            ),
            f.a.createElement(v, { fnOnSelection: this.OnSelectedApp })
          );
        }
      };
      Object(r.b)([l.C], R.prototype, "selected_app", void 0),
        Object(r.b)([l.C], R.prototype, "selected_operator", void 0),
        Object(r.b)([p.b], R.prototype, "OnSelectedApp", null),
        Object(r.b)([p.b], R.prototype, "OnSelectedOperator", null),
        (R = Object(r.b)([O.a], R));
      let L = class extends f.a.Component {
        constructor(e) {
          super(e),
            (this.operands = []),
            (this.similarity_model = "default"),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.operand_refs = []);
          for (let t = 0; t < e.max_operands; t++)
            this.operand_refs.push(f.a.createRef());
        }
        OnModelChanged(e, t) {
          (this.similarity_model = e.data), this.RecomputeExpression();
        }
        OnAddOperand() {
          this.operands.length < this.props.max_operands &&
            this.operands.push({
              app: 0,
              operator: this.operands.length > 0 ? "Plus" : void 0,
            });
        }
        OnOperandChanged() {
          for (let e = 0; e < this.operands.length; e++) {
            const t = this.operand_refs[e].current;
            (this.operands[e].app = t.selected_app),
              (this.operands[e].operator = t.selected_operator);
          }
          this.RecomputeExpression();
        }
        RecomputeExpression() {
          if (0 == this.operands.length) return;
          const e = this.operands.map((e) => "appid[]=" + e.app.toString()),
            t = `${o.d.STORE_BASE_URL}labs/ajaxgetappvectors?${e.join(
              "&"
            )}&model=${this.similarity_model}`;
          d.a.get(t).then((e) => {
            if (
              ((this.similar_apps = []),
              (this.similarity_scores = []),
              e.data && e.data.length == this.operands.length)
            ) {
              let t = e.data[0].components.map((e) => parseFloat(e));
              for (let a = 1; a < this.operands.length; a++) {
                const s = e.data[a].components.map((e) => parseFloat(e));
                "Plus" == this.operands[a].operator
                  ? (t = t.map((e, t) => e + s[t]))
                  : "Minus" == this.operands[a].operator
                  ? (t = t.map((e, t) => e - s[t]))
                  : console.log(
                      "Unexpected operator " + this.operands[a].operator
                    );
              }
              const a = t.map((e) => e * e).reduce((e, t) => e + t, 0),
                s = Math.sqrt(a);
              if (s > 1e-4) {
                const e = t
                    .map((e) => e / s)
                    .map((e) => "x[]=" + e)
                    .join("&"),
                  a = `${o.d.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
                d.a.get(a).then((e) => {
                  let t = new Set(
                    e.data.similar_appids.slice(0, this.props.max_similar)
                  );
                  i.a.EnsureAppInfoForAppIDs(t).then(() => {
                    (this.similar_apps = e.data.similar_appids),
                      (this.similarity_scores = e.data.similarity_scores);
                  });
                });
              }
            }
          });
        }
        render() {
          let e = [];
          for (const t of _.rgModelNames) {
            let a = { label: f.a.createElement("div", { key: t }, t), data: t };
            e.push(a);
          }
          let t = [],
            a = 0;
          for (const e of this.operands)
            t.push(
              f.a.createElement(R, {
                app: e.app,
                operator: e.operator,
                key: a,
                fnOnChange: this.OnOperandChanged,
                ref: this.operand_refs[a],
              })
            ),
              a++;
          let s = null;
          this.operands.length < this.props.max_operands &&
            (s = f.a.createElement(
              "div",
              { className: S.AddOperand, onClick: this.OnAddOperand },
              "+"
            ));
          let r = [];
          const i = Math.min(
            this.similar_apps.length,
            this.similarity_scores.length,
            this.props.max_similar
          );
          for (let e = 0; e < i; e++) {
            const t = this.similar_apps[e],
              a = this.similarity_scores[e];
            r.push(f.a.createElement(C, { appid: t, score: a, key: t }));
          }
          return f.a.createElement(
            "div",
            { className: S.LabsMixer },
            f.a.createElement(A.n, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            f.a.createElement("h1", null, "Mixture"),
            t,
            s,
            f.a.createElement("h1", null, "Games similar to mixture"),
            f.a.createElement("div", { className: S.SimilarApps }, r)
          );
        }
      };
      Object(r.b)([l.C], L.prototype, "operands", void 0),
        Object(r.b)([l.C], L.prototype, "similarity_model", void 0),
        Object(r.b)([l.C], L.prototype, "similar_apps", void 0),
        Object(r.b)([l.C], L.prototype, "similarity_scores", void 0),
        Object(r.b)([p.b], L.prototype, "OnModelChanged", null),
        Object(r.b)([p.b], L.prototype, "OnAddOperand", null),
        Object(r.b)([p.b], L.prototype, "OnOperandChanged", null),
        (L = Object(r.b)([O.a], L));
      let P = class extends f.a.Component {
        constructor() {
          super(...arguments),
            (this.app_start = 0),
            (this.app_end = 0),
            (this.in_progress = !1),
            (this.progress_iteration = 0),
            (this.found_path = void 0);
        }
        IterationCallback() {
          this.progress_iteration++;
        }
        Pathfind() {
          this.in_progress ||
            ((this.in_progress = !0),
            (this.progress_iteration = 0),
            (this.found_path = void 0),
            _.ComputePathBetweenApps(
              this.app_start,
              this.app_end,
              0.75,
              3,
              10,
              200,
              this.IterationCallback
            )
              .then((e) => {
                (this.in_progress = !1),
                  i.a.EnsureAppInfoForAppIDs(e.map((e) => e.appid)).then(() => {
                    this.found_path = e;
                  });
              })
              .catch((e) => {
                console.warn(
                  "Caught pathfinding failure because: " + e.toString()
                ),
                  (this.in_progress = !1),
                  (this.found_path = void 0);
              }));
        }
        OnSelectedStartApp(e) {
          i.a.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_start = e;
          });
        }
        OnSelectedEndApp(e) {
          i.a.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_end = e;
          });
        }
        render() {
          const e =
              0 != this.app_start &&
              0 != this.app_end &&
              !this.in_progress &&
              this.app_start != this.app_end,
            t = e ? S.ComputeButton : Object(E.a)(S.ComputeButton, S.Disable);
          let a = null;
          a = this.in_progress
            ? f.a.createElement(
                "div",
                { className: S.ProgressMessage },
                "Finding path, step " + this.progress_iteration
              )
            : this.found_path
            ? f.a.createElement(
                "div",
                { className: S.ProgressMessage },
                "Found path"
              )
            : f.a.createElement(
                "div",
                { className: S.ProgressMessage },
                "No path found"
              );
          let s = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              s.push(
                f.a.createElement(C, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                })
              );
            }
          return f.a.createElement(
            "div",
            { className: S.LabsPathfinder },
            f.a.createElement(
              "div",
              { className: S.SelectEndpoints },
              f.a.createElement(v, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              f.a.createElement(v, {
                fnOnSelection: this.OnSelectedEndApp,
                strPrompt: "Select end game",
              })
            ),
            f.a.createElement(
              "div",
              { className: t, onClick: e ? this.Pathfind : () => {} },
              "Pathfind!"
            ),
            a,
            f.a.createElement("div", { className: S.Path }, s)
          );
        }
      };
      function M() {
        return f.a.createElement(
          f.a.Fragment,
          null,
          f.a.createElement("h1", null, "Similar Games"),
          f.a.createElement(B, { max_similar: 10 }),
          f.a.createElement("div", { className: S.Spacer }),
          f.a.createElement("h1", null, "Similarity"),
          f.a.createElement(w, null),
          f.a.createElement("div", { className: S.Spacer }),
          f.a.createElement("h1", null, "Mixer"),
          f.a.createElement(L, { max_similar: 10, max_operands: 6 }),
          f.a.createElement("div", { className: S.Spacer }),
          f.a.createElement("h1", null, "Pathfinder"),
          f.a.createElement(P, null)
        );
      }
      Object(r.b)([l.C], P.prototype, "app_start", void 0),
        Object(r.b)([l.C], P.prototype, "app_end", void 0),
        Object(r.b)([l.C], P.prototype, "in_progress", void 0),
        Object(r.b)([l.C], P.prototype, "progress_iteration", void 0),
        Object(r.b)([l.C], P.prototype, "found_path", void 0),
        Object(r.b)([p.b], P.prototype, "IterationCallback", null),
        Object(r.b)([p.b], P.prototype, "Pathfind", null),
        Object(r.b)([p.b], P.prototype, "OnSelectedStartApp", null),
        Object(r.b)([p.b], P.prototype, "OnSelectedEndApp", null),
        (P = Object(r.b)([O.a], P));
      var j = a("oleE"),
        z = (a("XThB"), a("3u1o")),
        N = a("9XWO"),
        x = a("hRO2"),
        F = a("3dpo"),
        k = a("yfxr");
      const U = x.Message;
      class D extends U {
        constructor(e = null) {
          super(),
            D.prototype.items || F.a(D.M()),
            U.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { items: { n: 1, c: T, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = F.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return F.g(D.M(), e, t);
        }
        static fromObject(e) {
          return F.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new D();
          return D.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return F.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          F.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
        }
      }
      class T extends U {
        constructor(e = null) {
          super(),
            T.prototype.id || F.a(T.M()),
            U.initialize(this, e, 0, -1, [50], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  id: { n: 1, c: k.g },
                  already_owned: { n: 2, br: F.d.readBool, bw: F.h.writeBool },
                  weight: { n: 3, br: F.d.readDouble, bw: F.h.writeDouble },
                  weight_before_dedupe: {
                    n: 4,
                    br: F.d.readDouble,
                    bw: F.h.writeDouble,
                  },
                  debug_matches: { n: 50, c: G, r: !0, q: !0 },
                  debug_popularity: { n: 51, c: W },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = F.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return F.g(T.M(), e, t);
        }
        static fromObject(e) {
          return F.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new T();
          return T.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return F.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          F.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
        }
      }
      class G extends U {
        constructor(e = null) {
          super(),
            G.prototype.source_app || F.a(G.M()),
            U.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  source_app: { n: 1, br: F.d.readInt32, bw: F.h.writeInt32 },
                  weight: { n: 2, br: F.d.readDouble, bw: F.h.writeDouble },
                  similarity: { n: 3, br: F.d.readDouble, bw: F.h.writeDouble },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = F.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return F.g(G.M(), e, t);
        }
        static fromObject(e) {
          return F.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new G();
          return G.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return F.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          F.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
        }
      }
      class W extends U {
        constructor(e = null) {
          super(),
            W.prototype.rank || F.a(W.M()),
            U.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  rank: { n: 1, br: F.d.readUint32, bw: F.h.writeUint32 },
                  popularity_factor: {
                    n: 2,
                    br: F.d.readDouble,
                    bw: F.h.writeDouble,
                  },
                  weight_before_popularity: {
                    n: 3,
                    br: F.d.readDouble,
                    bw: F.h.writeDouble,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = F.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return F.g(W.M(), e, t);
        }
        static fromObject(e) {
          return F.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new W();
          return W.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return F.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          F.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
        }
      }
      class q extends U {
        constructor(e = null) {
          super(),
            q.prototype.steamid || F.a(q.M()),
            U.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  steamid: {
                    n: 1,
                    br: F.d.readFixed64String,
                    bw: F.h.writeFixed64String,
                  },
                  sort: { n: 2, d: 1, br: F.d.readEnum, bw: F.h.writeEnum },
                  clusters_to_return: {
                    n: 3,
                    br: F.d.readInt32,
                    bw: F.h.writeInt32,
                  },
                  cluster_index: {
                    n: 4,
                    br: F.d.readInt32,
                    bw: F.h.writeInt32,
                  },
                  context: { n: 10, c: k.c },
                  data_request: { n: 11, c: k.d },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = F.e(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return F.g(q.M(), e, t);
        }
        static fromObject(e) {
          return F.c(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new q();
          return q.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return F.b(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          F.f(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
        }
      }
      class H extends U {
        constructor(e = null) {
          super(),
            H.prototype.clusters || F.a(H.M()),
            U.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { clusters: { n: 1, c: $, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = F.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return F.g(H.M(), e, t);
        }
        static fromObject(e) {
          return F.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new H();
          return H.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return F.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          F.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
        }
      }
      class $ extends U {
        constructor(e = null) {
          super(),
            $.prototype.cluster_id || F.a($.M()),
            U.initialize(this, e, 0, -1, [5, 6, 7], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  cluster_id: { n: 1, br: F.d.readInt32, bw: F.h.writeInt32 },
                  playtime_forever: {
                    n: 2,
                    br: F.d.readInt32,
                    bw: F.h.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: F.d.readInt32,
                    bw: F.h.writeInt32,
                  },
                  last_played: {
                    n: 4,
                    br: F.d.readUint32,
                    bw: F.h.writeUint32,
                  },
                  played_appids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: F.d.readInt32,
                    bw: F.h.writeRepeatedInt32,
                  },
                  similar_items_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: F.d.readInt32,
                    bw: F.h.writeRepeatedInt32,
                  },
                  similar_items: { n: 7, c: k.f, r: !0, q: !0 },
                  similar_item_popularity_score: {
                    n: 8,
                    br: F.d.readDouble,
                    bw: F.h.writeDouble,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = F.e($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return F.g($.M(), e, t);
        }
        static fromObject(e) {
          return F.c($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new $();
          return $.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return F.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          F.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
        }
      }
      var Q;
      !(function (e) {
        (e.PrioritizeAppsForUser = function (e, t) {
          return e.SendMsg("StoreAppSimilarity.PrioritizeAppsForUser#1", t, D, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.IdentifyClustersFromPlaytime = function (e, t) {
            return e.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              t,
              H,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 }
            );
          });
      })(Q || (Q = {}));
      var V = a("FQoL"),
        K = (a("X/lQ"), a("Ys0h"));
      class X {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        LoadPlaytimeClusters(e, t, a, s) {
          return new J(this.m_SteamInterface, e, t, a, s);
        }
      }
      class J {
        constructor(e, t, a, s, r) {
          this.m_callbacksLoaded = new z.a();
          const i = N.b.Init(q);
          Object(V.a)(i),
            r && Object(V.b)(i, r),
            i.Body().set_steamid(t || o.k.steamid),
            s && i.Body().set_clusters_to_return(s),
            i.Body().set_sort(a),
            Q.IdentifyClustersFromPlaytime(e.GetServiceTransport(), i).then(
              (e) => {
                const t = e.Body();
                this.m_rgClusters = [];
                for (const e of t.clusters())
                  this.m_rgClusters.push(this.ReadCluster(e, r));
                this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
              }
            );
        }
        ReadCluster(e, t) {
          let a;
          return (
            t && (a = e.similar_items().map((e) => K.a.Get().ReadItem(e, t))),
            {
              nClusterID: e.cluster_id(),
              nPlaytimeMinutes: e.playtime_forever(),
              nPlaytimeMinutes2Weeks: e.playtime_2weeks(),
              rtLastPlayed: e.last_played(),
              rgAppIDsPlayed: e.played_appids(),
              rgSimilarItems: a.filter((e) => !!e),
              rgSimilarAppIDs: e.similar_items_appids(),
              flPopularityScore: e.similar_item_popularity_score(),
            }
          );
        }
        RegisterOnReadyCallback(e) {
          const t = this.m_callbacksLoaded.Register(e);
          return (
            void 0 !== this.m_rgClusters &&
              window.setTimeout(() => e(this.m_rgClusters), 0),
            t
          );
        }
      }
      var Y = a("kWcV"),
        Z = a("GXif"),
        ee = a("1wed"),
        te = a("RrtU"),
        ae = a("uuth"),
        se = a("+aRA");
      function re(e) {
        const { SteamInterface: t } = e,
          a = b.useRef();
        return (
          a.current || (a.current = new X(t)),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(
              "div",
              null,
              b.createElement(
                "p",
                null,
                "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters."
              ),
              b.createElement(
                "p",
                null,
                "You can also ",
                b.createElement(
                  "a",
                  {
                    href: "http://store-tc.k.steam.net/graph",
                    target: "_blank",
                  },
                  "browse the cluster data graphically"
                ),
                " (requires Rack VPN)."
              )
            ),
            b.createElement(ne, { SimilarityStore: a.current })
          )
        );
      }
      const ie = {
        3: "Total Playtime",
        2: "Number of Played Games",
        1: "Most Recently Played",
      };
      function ne(e) {
        const { SimilarityStore: t } = e,
          [a, s] = b.useState(o.k.steamid),
          [r, i] = b.useState("10"),
          [n, l] = b.useState(1),
          p = b.useCallback((e) => s(e.currentTarget.value), [s]),
          c = b.useCallback((e) => i(e.currentTarget.value), [i]),
          d = b.useCallback((e) => l(e.data), [l]);
        let m = !1;
        const h = b.useRef(o.k.steamid),
          u = a && new j.a(a);
        let _;
        u &&
          u.BIsValid() &&
          u.BIsIndividualAccount() &&
          ((h.current = u.ConvertTo64BitString()), (m = !0)),
          r && !isNaN(parseInt(r)) && (_ = parseInt(r));
        const f = b.useMemo(() => {
            let e = [];
            for (let t in ie) e.push({ data: Number(t), label: ie[t] });
            return e;
          }, []),
          g = (function (e, t, a, s = 1, r = null, i = []) {
            const [n, o] = b.useState(null);
            return (
              b.useEffect(() => {
                if ((o(null), a))
                  return e
                    .LoadPlaytimeClusters(a, s, r, t)
                    .RegisterOnReadyCallback(o).Unregister;
              }, [a, s, r, ...i]),
              n
            );
          })(
            t,
            { include_assets: !0, include_basic_info: !0 },
            h.current,
            n,
            _
          );
        return b.createElement(
          "div",
          null,
          b.createElement(
            A.d,
            { className: ee.ClusterConfig },
            b.createElement(A.z, {
              label: "SteamID",
              type: "text",
              value: a,
              onChange: p,
              description: !m && "Invalid SteamID",
            }),
            b.createElement(A.z, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: r,
              onChange: c,
            }),
            b.createElement(A.n, {
              label: "Sort clusters by",
              rgOptions: f,
              selectedOption: n,
              onChange: d,
            })
          ),
          m && !g && b.createElement(Y.a, null),
          g && b.createElement(oe, { rgPlaytimeClusters: g })
        );
      }
      function oe(e) {
        const { rgPlaytimeClusters: t } = e;
        return b.createElement(
          "div",
          null,
          t.map((e) =>
            b.createElement(
              se.a,
              { key: e.nClusterID },
              b.createElement(le, { cluster: e })
            )
          )
        );
      }
      function le(e) {
        const { cluster: t } = e,
          [a, s] = b.useState(!1),
          r = b.useCallback(() => s(!0), [s]),
          [i, n] = b.useState(!1),
          o = b.useCallback(() => n(!0), [n]);
        return b.createElement(
          ae.a,
          { onEnter: o },
          b.createElement(
            "div",
            { className: ee.PlaytimeCluster },
            b.createElement(
              "div",
              { className: ee.ClusterInfo },
              b.createElement("h1", null, "Cluster ", t.nClusterID),
              b.createElement(
                se.a,
                null,
                b.createElement(
                  "div",
                  { className: ee.Overview },
                  b.createElement(
                    "div",
                    null,
                    b.createElement("b", null, "Total Playtime:"),
                    " ",
                    Math.floor(t.nPlaytimeMinutes / 6) / 10,
                    "hr"
                  ),
                  b.createElement(
                    "div",
                    null,
                    b.createElement("b", null, "Last Played:"),
                    " ",
                    Object(Z.n)(t.rtLastPlayed),
                    " "
                  ),
                  b.createElement(
                    "div",
                    null,
                    b.createElement("b", null, "Games played:"),
                    " ",
                    i &&
                      t.rgAppIDsPlayed.map((e) =>
                        b.createElement(
                          b.Fragment,
                          { key: e },
                          b.createElement(ce, { appid: e }),
                          ", "
                        )
                      )
                  ),
                  b.createElement(
                    "div",
                    null,
                    b.createElement("b", null, "Popularity Score:"),
                    " ",
                    Math.floor(100 * t.flPopularityScore),
                    "%  ",
                    b.createElement(
                      "span",
                      {
                        title:
                          "Based on the top four items; we might decide not to show clusters if this score is less than some threshold, maybe 90%",
                        style: { cursor: "default" },
                      },
                      "(?)"
                    )
                  )
                )
              )
            ),
            b.createElement(
              "div",
              { className: ee.ClusterMembers },
              b.createElement("h3", null, "Similar titles:"),
              b.createElement(
                se.a,
                null,
                b.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map((e, t) =>
                    a || t < 4
                      ? b.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          b.createElement(de, { item: e })
                        )
                      : null
                  )
                )
              ),
              !a &&
                b.createElement(
                  A.f,
                  { onClick: r },
                  "Show all ",
                  t.rgSimilarItems.length
                )
            )
          )
        );
      }
      const pe = {};
      function ce(e) {
        const { appid: t } = e,
          [a] = Object(te.b)(t, pe);
        return a
          ? b.createElement(
              "a",
              { className: ee.PlayedGame, href: a.GetStorePageURL() },
              a.GetName()
            )
          : null;
      }
      function de(e) {
        const { item: t } = e;
        return b.createElement(
          "a",
          { className: ee.SimilarTitle, href: t.GetStorePageURL() },
          b.createElement("img", {
            src: t.GetAssets().GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName()
        );
      }
      var me = a("pVzq");
      const he = [
        {
          path: "similarity",
          render: () => f.a.createElement(M, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            f.a.createElement(re, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      let ue = Object(o.h)("labs", "application_config"),
        _e = new n.a(o.d.WEBAPI_BASE_URL, ue.webapi_token);
      function be(e) {
        const [t, a] = f.a.useState(!1),
          r = !!ue.webapi_token;
        if (
          (Object(b.useEffect)(() => {
            _.Init(), a(!0);
          }, []),
          !t)
        )
          return f.a.createElement("div", { className: S.App });
        const i = { SteamInterface: _e };
        return f.a.createElement(
          "div",
          { className: S.App },
          f.a.createElement(
            "div",
            { className: S.Container },
            f.a.createElement(
              "div",
              { className: S.TopSection },
              f.a.createElement("div", { className: S.Header }, "Labs Sandbox"),
              f.a.createElement(
                "div",
                { className: S.Body },
                "Internal testbed page for Steam Labs experiments"
              )
            ),
            f.a.createElement(
              "div",
              { className: S.Tabs },
              he.map((e) =>
                f.a.createElement(
                  g.c,
                  {
                    key: e.path,
                    to: `${s.b.LabsSandbox()}/${e.path}`,
                    className: S.Tab,
                    activeClassName: S.Active,
                  },
                  e.name
                )
              )
            ),
            f.a.createElement(
              "div",
              { className: S.SandboxSection },
              f.a.createElement(
                se.a,
                null,
                f.a.createElement(
                  y.d,
                  null,
                  he.map((e, t) =>
                    f.a.createElement(y.b, {
                      key: e.path,
                      path: `${s.b.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || r
                          ? e.render(Object.assign(Object.assign({}, t), i))
                          : f.a.createElement(fe, null),
                    })
                  )
                )
              )
            )
          )
        );
      }
      function fe() {
        return f.a.createElement(
          "div",
          null,
          f.a.createElement("h3", null, "Please login to view this page."),
          f.a.createElement(me.a, {
            baseURL: o.d.STORE_BASE_URL,
            onLoginComplete: () => window.location.reload(),
          })
        );
      }
    },
    PXMQ: function (e, t, a) {
      e.exports = {
        AppSelector: "labssandbox_AppSelector_2Fikz",
        AppDisplay: "labssandbox_AppDisplay_3m6Sh",
        LogoImage: "labssandbox_LogoImage_3l4Ih",
        AppName: "labssandbox_AppName_3kXBT",
        AppSelect: "labssandbox_AppSelect_2VQ8j",
        Suggestions: "labssandbox_Suggestions_102W4",
        Suggestion: "labssandbox_Suggestion_3VfDL",
        SimilarApp: "labssandbox_SimilarApp_3yV0M",
        Spacer: "labssandbox_Spacer_1lpCS",
        Score: "labssandbox_Score_14zV9",
        App: "labssandbox_App_3xv8n",
        Container: "labssandbox_Container_3r507",
        TopSection: "labssandbox_TopSection_ZS7Sf",
        Header: "labssandbox_Header_3PXzQ",
        Body: "labssandbox_Body_LfOIb",
        SandboxSection: "labssandbox_SandboxSection_-FZSw",
        LabsSimilarGames: "labssandbox_LabsSimilarGames_3OMnQ",
        AppSelection: "labssandbox_AppSelection_1U331",
        SimilarApps: "labssandbox_SimilarApps_3RByY",
        LabsSimilarity: "labssandbox_LabsSimilarity_32kTJ",
        HorizontalSpacer: "labssandbox_HorizontalSpacer_1FnF8",
        LabsPathfinder: "labssandbox_LabsPathfinder_1w-DU",
        SelectEndpoints: "labssandbox_SelectEndpoints_3QMII",
        ComputeButton: "labssandbox_ComputeButton_230zD",
        Disabled: "labssandbox_Disabled_3o1uE",
        ProgressMessage: "labssandbox_ProgressMessage_2IvW-",
        Path: "labssandbox_Path_V_RIv",
        LabsMixer: "labssandbox_LabsMixer_1Cns3",
        Operand: "labssandbox_Operand_hILAx",
        OperatorSelect: "labssandbox_OperatorSelect_EM51K",
        AddOperand: "labssandbox_AddOperand_tZPTB",
        Tabs: "labssandbox_Tabs_3Uckh",
        Tab: "labssandbox_Tab_16ebk",
        Active: "labssandbox_Active_2J9Kx",
      };
    },
    d4Nf: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return o;
      }),
        a.d(t, "a", function () {
          return l;
        });
      var s = a("/Q1a"),
        r = (a("2vnA"), a("6iBs"), a("xH93")),
        i = (a("QAsS"), a("8G9o"), a("f5iL"));
      const n = "061818254b2c99ac49e6626adb128ed1282a392f",
        o = 120;
      class l {
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
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, n);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, n);
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
            : Object(r.a)(t);
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
            Object(i.a)(
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
    xH93: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return r;
      }),
        a.d(t, "a", function () {
          return i;
        });
      var s = a("/Q1a");
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function i(e, t) {
        let a = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((a = e.substr(-4)), (e = e.substr(0, 40)));
        let i = s.d.AVATAR_BASE_URL;
        return (
          i ||
            ((i = s.d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (i += e.substr(0, 2) + "/")),
          (i += e),
          t && "small" != t && (i += "_" + t),
          (i += a),
          i
        );
      }
    },
  },
]);

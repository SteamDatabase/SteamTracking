/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [35],
  {
    "1TsT": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      });
      var r = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var i = void 0;
      function s() {
        return (
          void 0 === i &&
            (i = (function () {
              if (!r) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  a = function () {};
                window.addEventListener("testPassiveEventSupport", a, t),
                  window.removeEventListener("testPassiveEventSupport", a, t);
              } catch (e) {}
              return e;
            })()),
          i
        );
      }
      function n(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function o(e) {
        (this.target = e), (this.events = {});
      }
      (o.prototype.getEventHandlers = function (e, t) {
        var a,
          r =
            String(e) +
            " " +
            String(
              (a = t)
                ? !0 === a
                  ? 100
                  : (a.capture << 0) + (a.passive << 1) + (a.once << 2)
                : 0
            );
        return (
          this.events[r] ||
            ((this.events[r] = { handlers: [], handleEvent: void 0 }),
            (this.events[r].nextHandlers = this.events[r].handlers)),
          this.events[r]
        );
      }),
        (o.prototype.handleEvent = function (e, t, a) {
          var r = this.getEventHandlers(e, t);
          (r.handlers = r.nextHandlers),
            r.handlers.forEach(function (e) {
              e && e(a);
            });
        }),
        (o.prototype.add = function (e, t, a) {
          var r = this,
            i = this.getEventHandlers(e, a);
          n(i),
            0 === i.nextHandlers.length &&
              ((i.handleEvent = this.handleEvent.bind(this, e, a)),
              this.target.addEventListener(e, i.handleEvent, a)),
            i.nextHandlers.push(t);
          var s = !0;
          return function () {
            if (s) {
              (s = !1), n(i);
              var o = i.nextHandlers.indexOf(t);
              i.nextHandlers.splice(o, 1),
                0 === i.nextHandlers.length &&
                  (r.target &&
                    r.target.removeEventListener(e, i.handleEvent, a),
                  (i.handleEvent = void 0));
            }
          };
        });
      var l = "__consolidated_events_handlers__";
      function p(e, t, a, r) {
        e[l] || (e[l] = new o(e));
        var i = (function (e) {
          if (e) return s() ? e : !!e.capture;
        })(r);
        return e[l].add(t, a, i);
      }
    },
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
        return s;
      });
      var r = a("/Q1a"),
        i = (a("msu0"), a("2vnA"));
      class s {
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
          let a = r.d.LANGUAGE;
          return n(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let a = r.d.LANGUAGE;
          return o(
            e,
            this.GetTokenList(a),
            "english" != a ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function n(e, t, a, i, s) {
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
          l = o(l, t, a, i, s);
        else if (
          ((t || a) &&
            console.log(
              "No loc found for appid",
              i,
              n,
              "Tokens:",
              t,
              "Fallback:",
              a
            ),
          t && 1 != r.d.EUNIVERSE)
        )
          return e;
        return l;
      }
      function o(e, t, a, r, i) {
        let s = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (s)
          for (let o of s) {
            let s = n(l(o.slice(1, -1), i), t, a, r, i);
            if (!s) return "";
            e = e.replace(o, s);
          }
        return (e = l(e, i));
      }
      function l(e, t) {
        let a = e.match(/%[A-Za-z0-9_:]+%/g);
        if (a)
          for (let r of a) {
            let a = r.slice(1, -1).toLowerCase(),
              i = t.get(a);
            null == i
              ? console.log("No rich presence found for", a)
              : (e = e.replace(r, i));
          }
        return e;
      }
    },
    FKEV: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return h;
      });
      var r = a("mrSG"),
        i = a("2vnA"),
        s = (a("aoTL"), a("msu0")),
        n = a("9XWO"),
        o = a("d4Nf"),
        l = a("6iBs"),
        p = (a("8G9o"), a("KjDl")),
        c = a("f5iL"),
        d = a("3u1o"),
        m = a("/Q1a");
      class u {
        constructor() {
          (this.m_mapAppInfo = i.C.map()),
            (this.m_mapRichPresenceLoc = i.C.map()),
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
          return Object(r.a)(this, void 0, void 0, function* () {
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
          return Object(r.a)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = n.b.Init(p.b);
              e.Body().set_language(Object(s.g)(m.d.LANGUAGE));
              const a = 50;
              for (; t.length > 0; ) {
                const r = Math.min(a, t.length),
                  i = t.slice(0, r);
                (t = t.slice(r)), e.Body().set_appids(i);
                const s = yield p.g.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  e
                );
                1 == s.GetEResult()
                  ? this.OnGetAppsResponse(s)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${s.GetEResult()}, AppIDs:`,
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
          return Object(r.a)(this, void 0, void 0, function* () {
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
          return Object(r.a)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              a = (e) =>
                Object(r.a)(this, void 0, void 0, function* () {
                  const a = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!a) return e;
                  let r = this.m_mapAppInfo.get(e);
                  return (
                    Object(c.a)(
                      r,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    r
                      ? ((r = new o.a(e)),
                        r.DeserializeFromCacheObject(a),
                        r.is_initialized
                          ? (this.m_mapAppInfo.set(e, r),
                            r.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              a
                            ),
                            e))
                      : e
                  );
                });
            let i = e.map((e) => a(e));
            return (yield Promise.all(i)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
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
          const r = this.GetRichPresenceLoc(e);
          return r
            ? r.Localize(t, a)
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
              r = e.m_mapLanguages.get(t);
            r
              ? r.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (r = e.m_mapLanguages.get(t)));
            for (let e of a.tokens()) r.set(e.name().toLowerCase(), e.value());
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
      Object(r.b)([i.k], u.prototype, "OnGetAppsResponse", null),
        Object(r.b)([i.k], u.prototype, "OnRichPresenceLocUpdate", null);
      const h = new u();
    },
    JO2d: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return _e;
        });
      var r = a("1fPh"),
        i = a("mrSG"),
        s = a("FKEV"),
        n = a("rmVU"),
        o = a("/Q1a"),
        l = a("2vnA"),
        p = a("hCpY"),
        c = a("vDqi"),
        d = a.n(c);
      class m {
        constructor() {
          this.rgModelNames = [];
        }
        Init() {
          s.a.Init(new n.a(o.d.WEBAPI_BASE_URL, o.l.webapi_token));
          const e = `${o.d.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
          d.a.get(e).then((e) => {
            if (e.data) {
              let t = [];
              for (const a of e.data) "default" != a && t.push(a);
              t.sort(), (t = ["default", ...t]), (this.rgModelNames = t);
            }
          });
        }
        ComputePathBetweenApps(e, t, a, r, s, n, o) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const l = Math.acos(a);
            let p = new h(
                (e) =>
                  Object(i.a)(this, void 0, void 0, function* () {
                    let t = yield this.GetNeighbors(e),
                      a = [];
                    for (let e = 0; e < t.length; e++) {
                      const i = t[e];
                      if (
                        (!r || a.length > r) &&
                        (i.cost > l || (s && a.length >= s))
                      )
                        break;
                      a.push(i);
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
                const r = c.path[a],
                  i = r.cost - t;
                (t = r.cost),
                  e.push({ appid: r.node, similarity: Math.cos(i) });
              }
              return e;
            }
            throw new Error("Unable to compute path.");
          });
        }
        GetNeighbors(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const t = `${o.d.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let a = yield d.a.get(t),
              r = [];
            if (a.data && a.data.appid == e)
              for (let e = 0; e < a.data.similar_appids.length; e++)
                r.push({
                  node: a.data.similar_appids[e],
                  cost: Math.acos(a.data.similarity_scores[e]),
                });
            return r;
          });
        }
        EstimateCosts(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const a = `${
              o.d.STORE_BASE_URL
            }labs/ajaxgetappsimilarities?appidtarget=${t}&${e
              .map((e) => "appid[]=" + e.toString())
              .join("&")}`;
            let r = yield d.a.get(a);
            if (r.data && r.data.similarity_scores)
              return r.data.similarity_scores.map((e) =>
                Math.acos(parseFloat(e))
              );
            throw new Error("Unable to fetch cost estimates");
          });
        }
      }
      Object(i.b)([l.C], m.prototype, "rgModelNames", void 0),
        Object(i.b)([p.b], m.prototype, "GetNeighbors", null),
        Object(i.b)([p.b], m.prototype, "EstimateCosts", null);
      class u {
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
            let r = e;
            if (
              (t < this.m_Length &&
                this.m_fnCompare(this.m_Heap[r], this.m_Heap[t]) > 0 &&
                (r = t),
              a < this.m_Length &&
                this.m_fnCompare(this.m_Heap[r], this.m_Heap[a]) > 0 &&
                (r = a),
              r == e)
            )
              break;
            {
              const t = this.m_Heap[e];
              (this.m_Heap[e] = this.m_Heap[r]), (this.m_Heap[r] = t), (e = r);
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
      class h {
        constructor(e, t, a, r) {
          (this.m_fnGetNeighbors = e),
            (this.m_fnEstimateCosts = t),
            (this.m_fnEquality = a),
            (this.m_fnIterationCallback = r);
        }
        FindPath(e, t, a) {
          return Object(i.a)(this, void 0, void 0, function* () {
            let r = new u((e, t) => e.cost - t.cost),
              i = new Set();
            r.Push({ node: e, cost: 0 });
            let s = new Map(),
              n = new Map(),
              o = new Map(),
              l = (yield this.m_fnEstimateCosts([e], t))[0];
            s.set(e, l), n.set(e, 0);
            let p = 0;
            for (; r.length > 0 && p < a; ) {
              let e = r.Pop();
              if (this.m_fnEquality(e.node, t)) {
                let t = [],
                  a = e.node;
                for (; o.has(a); ) t.push(a), (a = o.get(a));
                let r = [];
                for (let e = t.length - 1; e >= 0; e--)
                  r.push({ node: t[e], cost: n.get(t[e]) });
                return { path: r };
              }
              i.add(e.node);
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
                    s.set(c.node, c.cost + l[t]),
                    !i.has(c.node))
                  ) {
                    const e = c.cost + l[t];
                    let a = r.FindElement((e) => e.node == c.node);
                    a
                      ? a.element.cost > e &&
                        r.LowerPriorityOfElement(a.index, {
                          node: c.node,
                          cost: e,
                        })
                      : r.Push({ node: c.node, cost: e });
                  }
                }
              }
              p++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          });
        }
      }
      const f = new m();
      window.g_LabsSandbox = f;
      var _ = a("q1tI"),
        b = a.n(_),
        g = a("55Ip"),
        y = a("EC67"),
        v = a("PXMQ"),
        S = a("7ast"),
        w = a("Zdsb"),
        A = a("TyAF"),
        O = a("GbHM");
      class E extends b.a.Component {
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
              (s.a
                .EnsureAppInfoForAppIDs([this.props.appidInitial])
                .then(() => {
                  s.a.GetAppInfo(this.props.appidInitial);
                  this.setState({
                    appid: this.props.appidInitial,
                    appinfo: s.a.GetAppInfo(this.props.appidInitial),
                  });
                }),
              (this.state.appid = this.props.appidInitial));
        }
        OnDisplayClicked() {
          this.setState({ mode: "select" });
        }
        UpdateAppSuggestions(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const t = e.target.value && e.target.value.trim();
            (null == t ? void 0 : t.length)
              ? (window.clearTimeout(this.m_currentRequest),
                (this.m_currentRequest = window.setTimeout(
                  () =>
                    Object(i.a)(this, void 0, void 0, function* () {
                      var e;
                      const a = {
                          cc: o.d.COUNTRY,
                          l: o.d.LANGUAGE,
                          realm: w.h.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: t.replace(" ", "+"),
                          require_type: "game",
                          excluded_tags: [],
                          excluded_content_descriptors: [],
                        },
                        r = `${o.d.STORE_BASE_URL}search/suggest`,
                        i = yield d.a.get(r, {
                          params: a,
                          withCredentials: !0,
                        });
                      let s;
                      (s = (
                        null === (e = null == i ? void 0 : i.data) ||
                        void 0 === e
                          ? void 0
                          : e.length
                      )
                        ? i.data.map((e) =>
                            b.a.createElement(
                              "div",
                              {
                                className: v.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              b.a.createElement("img", {
                                src: e.img,
                                className: v.LogoImage,
                              }),
                              b.a.createElement(
                                "div",
                                { className: v.AppName },
                                e.name +
                                  (this.props.showAppIds ? ` (${e.id})` : "")
                              )
                            )
                          )
                        : []),
                        this.setState({ strSearch: t, rgSuggestions: s });
                    }),
                  250
                )))
              : this.setState({ strSearch: "", rgSuggestions: null });
          });
        }
        SetSelectedApp(e) {
          e && 0 != e
            ? s.a.EnsureAppInfoForAppIDs([e]).then(() => {
                s.a.GetAppInfo(e);
                this.setState({
                  appid: e,
                  appinfo: s.a.GetAppInfo(e),
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
              : v.AppSelector;
          let r = null;
          const i = b.a.createElement(S.z, {
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
            r = b.a.createElement(
              "div",
              { className: v.AppDisplay },
              this.state.appinfo &&
                b.a.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: v.LogoImage,
                }),
              b.a.createElement("div", { className: v.AppName }, e)
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            r = b.a.createElement(
              "div",
              { className: v.AppSelect },
              i,
              e &&
                b.a.createElement(
                  "div",
                  { className: v.Suggestions },
                  this.state.rgSuggestions
                )
            );
          }
          return b.a.createElement(
            "div",
            {
              className: a,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
            },
            r
          );
        }
      }
      Object(i.b)([p.b], E.prototype, "OnDisplayClicked", null),
        Object(i.b)([p.b], E.prototype, "UpdateAppSuggestions", null),
        Object(i.b)([p.b], E.prototype, "OnKeyUp", null);
      class I extends b.a.Component {
        render() {
          if (0 == this.props.appid)
            return b.a.createElement("div", { className: v.SimilarApp });
          {
            const e = s.a.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return b.a.createElement("div", { className: v.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                b.a.createElement("div", {
                  className: v.Spacer,
                  key: "score-spacer",
                })
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                b.a.createElement(
                  "div",
                  { className: v.Score, key: "score-value" },
                  e
                )
              );
            }
            const a = e.name + " (" + this.props.appid.toString() + ")",
              r = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return b.a.createElement(
              "div",
              { className: v.SimilarApp, onClick: () => r(this.props.appid) },
              b.a.createElement("img", {
                src: e.header_image_url,
                className: v.LogoImage,
              }),
              b.a.createElement("div", { className: v.AppName }, a),
              t
            );
          }
        }
      }
      class C extends b.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {}),
            (this.ref_app_a = b.a.createRef()),
            (this.ref_app_b = b.a.createRef());
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
          return b.a.createElement(
            "div",
            { className: v.LabsSimilarity },
            b.a.createElement(E, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            b.a.createElement("div", { className: v.HorizontalSpacer }),
            b.a.createElement("div", { className: v.Score }, e),
            b.a.createElement("div", { className: v.HorizontalSpacer }),
            b.a.createElement(E, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            })
          );
        }
      }
      Object(i.b)([p.b], C.prototype, "OnAppSelected", null);
      let B = class extends b.a.Component {
        constructor(e) {
          super(e),
            (this.selected_app = 0),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.similarity_model = "default"),
            (this.app_selector_ref = b.a.createRef()),
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
                  s.a.EnsureAppInfoForAppIDs(t).then(() => {
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
              r = this.similarity_scores[e];
            t.push(
              b.a.createElement(I, {
                appid: a,
                score: r,
                key: a,
                fnOnSelected: this.SetSelectedApp,
              })
            );
          }
          let r = [];
          for (const e of f.rgModelNames) {
            let t = { label: b.a.createElement("div", { key: e }, e), data: e };
            r.push(t);
          }
          return b.a.createElement(
            "div",
            { className: v.LabsSimilarGames },
            b.a.createElement(S.m, {
              rgOptions: r,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            b.a.createElement("h1", null, "Games similar to:"),
            b.a.createElement(E, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            b.a.createElement("div", { className: v.SimilarApps }, t)
          );
        }
      };
      Object(i.b)([l.C], B.prototype, "selected_app", void 0),
        Object(i.b)([l.C], B.prototype, "similar_apps", void 0),
        Object(i.b)([l.C], B.prototype, "similarity_scores", void 0),
        Object(i.b)([l.C], B.prototype, "similarity_model", void 0),
        Object(i.b)([p.b], B.prototype, "OnSelectedApp", null),
        Object(i.b)([p.b], B.prototype, "SetSelectedApp", null),
        Object(i.b)([p.b], B.prototype, "OnModelChanged", null),
        (B = Object(i.b)([A.a], B));
      let R = class extends b.a.Component {
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
              label: b.a.createElement("div", { key: "Plus" }, "Plus"),
              data: "Plus",
            },
            {
              label: b.a.createElement("div", { key: "Minus" }, "Minus"),
              data: "Minus",
            },
          ];
          return b.a.createElement(
            "div",
            { className: v.Operand },
            b.a.createElement(
              "div",
              { className: v.OperatorSelect },
              b.a.createElement(S.m, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              })
            ),
            b.a.createElement(E, { fnOnSelection: this.OnSelectedApp })
          );
        }
      };
      Object(i.b)([l.C], R.prototype, "selected_app", void 0),
        Object(i.b)([l.C], R.prototype, "selected_operator", void 0),
        Object(i.b)([p.b], R.prototype, "OnSelectedApp", null),
        Object(i.b)([p.b], R.prototype, "OnSelectedOperator", null),
        (R = Object(i.b)([A.a], R));
      let L = class extends b.a.Component {
        constructor(e) {
          super(e),
            (this.operands = []),
            (this.similarity_model = "default"),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.operand_refs = []);
          for (let t = 0; t < e.max_operands; t++)
            this.operand_refs.push(b.a.createRef());
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
                const r = e.data[a].components.map((e) => parseFloat(e));
                "Plus" == this.operands[a].operator
                  ? (t = t.map((e, t) => e + r[t]))
                  : "Minus" == this.operands[a].operator
                  ? (t = t.map((e, t) => e - r[t]))
                  : console.log(
                      "Unexpected operator " + this.operands[a].operator
                    );
              }
              const a = t.map((e) => e * e).reduce((e, t) => e + t, 0),
                r = Math.sqrt(a);
              if (r > 1e-4) {
                const e = t
                    .map((e) => e / r)
                    .map((e) => "x[]=" + e)
                    .join("&"),
                  a = `${o.d.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
                d.a.get(a).then((e) => {
                  let t = new Set(
                    e.data.similar_appids.slice(0, this.props.max_similar)
                  );
                  s.a.EnsureAppInfoForAppIDs(t).then(() => {
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
          for (const t of f.rgModelNames) {
            let a = { label: b.a.createElement("div", { key: t }, t), data: t };
            e.push(a);
          }
          let t = [],
            a = 0;
          for (const e of this.operands)
            t.push(
              b.a.createElement(R, {
                app: e.app,
                operator: e.operator,
                key: a,
                fnOnChange: this.OnOperandChanged,
                ref: this.operand_refs[a],
              })
            ),
              a++;
          let r = null;
          this.operands.length < this.props.max_operands &&
            (r = b.a.createElement(
              "div",
              { className: v.AddOperand, onClick: this.OnAddOperand },
              "+"
            ));
          let i = [];
          const s = Math.min(
            this.similar_apps.length,
            this.similarity_scores.length,
            this.props.max_similar
          );
          for (let e = 0; e < s; e++) {
            const t = this.similar_apps[e],
              a = this.similarity_scores[e];
            i.push(b.a.createElement(I, { appid: t, score: a, key: t }));
          }
          return b.a.createElement(
            "div",
            { className: v.LabsMixer },
            b.a.createElement(S.m, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            b.a.createElement("h1", null, "Mixture"),
            t,
            r,
            b.a.createElement("h1", null, "Games similar to mixture"),
            b.a.createElement("div", { className: v.SimilarApps }, i)
          );
        }
      };
      Object(i.b)([l.C], L.prototype, "operands", void 0),
        Object(i.b)([l.C], L.prototype, "similarity_model", void 0),
        Object(i.b)([l.C], L.prototype, "similar_apps", void 0),
        Object(i.b)([l.C], L.prototype, "similarity_scores", void 0),
        Object(i.b)([p.b], L.prototype, "OnModelChanged", null),
        Object(i.b)([p.b], L.prototype, "OnAddOperand", null),
        Object(i.b)([p.b], L.prototype, "OnOperandChanged", null),
        (L = Object(i.b)([A.a], L));
      let P = class extends b.a.Component {
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
            f
              .ComputePathBetweenApps(
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
                  s.a.EnsureAppInfoForAppIDs(e.map((e) => e.appid)).then(() => {
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
          s.a.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_start = e;
          });
        }
        OnSelectedEndApp(e) {
          s.a.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_end = e;
          });
        }
        render() {
          const e =
              0 != this.app_start &&
              0 != this.app_end &&
              !this.in_progress &&
              this.app_start != this.app_end,
            t = e ? v.ComputeButton : Object(O.a)(v.ComputeButton, v.Disable);
          let a = null;
          a = this.in_progress
            ? b.a.createElement(
                "div",
                { className: v.ProgressMessage },
                "Finding path, step " + this.progress_iteration
              )
            : this.found_path
            ? b.a.createElement(
                "div",
                { className: v.ProgressMessage },
                "Found path"
              )
            : b.a.createElement(
                "div",
                { className: v.ProgressMessage },
                "No path found"
              );
          let r = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              r.push(
                b.a.createElement(I, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                })
              );
            }
          return b.a.createElement(
            "div",
            { className: v.LabsPathfinder },
            b.a.createElement(
              "div",
              { className: v.SelectEndpoints },
              b.a.createElement(E, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              b.a.createElement(E, {
                fnOnSelection: this.OnSelectedEndApp,
                strPrompt: "Select end game",
              })
            ),
            b.a.createElement(
              "div",
              { className: t, onClick: e ? this.Pathfind : () => {} },
              "Pathfind!"
            ),
            a,
            b.a.createElement("div", { className: v.Path }, r)
          );
        }
      };
      function M() {
        return b.a.createElement(
          b.a.Fragment,
          null,
          b.a.createElement("h1", null, "Similar Games"),
          b.a.createElement(B, { max_similar: 10 }),
          b.a.createElement("div", { className: v.Spacer }),
          b.a.createElement("h1", null, "Similarity"),
          b.a.createElement(C, null),
          b.a.createElement("div", { className: v.Spacer }),
          b.a.createElement("h1", null, "Mixer"),
          b.a.createElement(L, { max_similar: 10, max_operands: 6 }),
          b.a.createElement("div", { className: v.Spacer }),
          b.a.createElement("h1", null, "Pathfinder"),
          b.a.createElement(P, null)
        );
      }
      Object(i.b)([l.C], P.prototype, "app_start", void 0),
        Object(i.b)([l.C], P.prototype, "app_end", void 0),
        Object(i.b)([l.C], P.prototype, "in_progress", void 0),
        Object(i.b)([l.C], P.prototype, "progress_iteration", void 0),
        Object(i.b)([l.C], P.prototype, "found_path", void 0),
        Object(i.b)([p.b], P.prototype, "IterationCallback", null),
        Object(i.b)([p.b], P.prototype, "Pathfind", null),
        Object(i.b)([p.b], P.prototype, "OnSelectedStartApp", null),
        Object(i.b)([p.b], P.prototype, "OnSelectedEndApp", null),
        (P = Object(i.b)([A.a], P));
      var j = a("oleE"),
        x = (a("XThB"), a("3u1o")),
        T = a("9XWO"),
        N = a("hRO2"),
        z = a("3dpo"),
        F = a("yfxr");
      const k = N.Message;
      class U extends k {
        constructor(e = null) {
          super(),
            U.prototype.items || z.a(U.M()),
            k.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { items: { n: 1, c: D, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = z.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return z.g(U.M(), e, t);
        }
        static fromObject(e) {
          return z.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new N.BinaryReader(e),
            a = new U();
          return U.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return z.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new N.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          z.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new N.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
        }
      }
      class D extends k {
        constructor(e = null) {
          super(),
            D.prototype.id || z.a(D.M()),
            k.initialize(this, e, 0, -1, [50], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  id: { n: 1, c: F.g },
                  already_owned: { n: 2, br: z.d.readBool, bw: z.h.writeBool },
                  weight: { n: 3, br: z.d.readDouble, bw: z.h.writeDouble },
                  weight_before_dedupe: {
                    n: 4,
                    br: z.d.readDouble,
                    bw: z.h.writeDouble,
                  },
                  debug_matches: { n: 50, c: G, r: !0, q: !0 },
                  debug_popularity: { n: 51, c: W },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = z.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return z.g(D.M(), e, t);
        }
        static fromObject(e) {
          return z.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new N.BinaryReader(e),
            a = new D();
          return D.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return z.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new N.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          z.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new N.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
        }
      }
      class G extends k {
        constructor(e = null) {
          super(),
            G.prototype.source_app || z.a(G.M()),
            k.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  source_app: { n: 1, br: z.d.readInt32, bw: z.h.writeInt32 },
                  weight: { n: 2, br: z.d.readDouble, bw: z.h.writeDouble },
                  similarity: { n: 3, br: z.d.readDouble, bw: z.h.writeDouble },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = z.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return z.g(G.M(), e, t);
        }
        static fromObject(e) {
          return z.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new N.BinaryReader(e),
            a = new G();
          return G.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return z.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new N.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          z.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new N.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
        }
      }
      class W extends k {
        constructor(e = null) {
          super(),
            W.prototype.rank || z.a(W.M()),
            k.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  rank: { n: 1, br: z.d.readUint32, bw: z.h.writeUint32 },
                  popularity_factor: {
                    n: 2,
                    br: z.d.readDouble,
                    bw: z.h.writeDouble,
                  },
                  weight_before_popularity: {
                    n: 3,
                    br: z.d.readDouble,
                    bw: z.h.writeDouble,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = z.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return z.g(W.M(), e, t);
        }
        static fromObject(e) {
          return z.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new N.BinaryReader(e),
            a = new W();
          return W.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return z.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new N.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          z.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new N.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
        }
      }
      class H extends k {
        constructor(e = null) {
          super(),
            H.prototype.steamid || z.a(H.M()),
            k.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: z.d.readFixed64String,
                    bw: z.h.writeFixed64String,
                  },
                  sort: { n: 2, d: 1, br: z.d.readEnum, bw: z.h.writeEnum },
                  clusters_to_return: {
                    n: 3,
                    br: z.d.readInt32,
                    bw: z.h.writeInt32,
                  },
                  cluster_index: {
                    n: 4,
                    br: z.d.readInt32,
                    bw: z.h.writeInt32,
                  },
                  context: { n: 10, c: F.c },
                  data_request: { n: 11, c: F.d },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = z.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return z.g(H.M(), e, t);
        }
        static fromObject(e) {
          return z.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new N.BinaryReader(e),
            a = new H();
          return H.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return z.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new N.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          z.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new N.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
        }
      }
      class q extends k {
        constructor(e = null) {
          super(),
            q.prototype.clusters || z.a(q.M()),
            k.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { clusters: { n: 1, c: $, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = z.e(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return z.g(q.M(), e, t);
        }
        static fromObject(e) {
          return z.c(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new N.BinaryReader(e),
            a = new q();
          return q.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return z.b(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new N.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          z.f(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new N.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
        }
      }
      class $ extends k {
        constructor(e = null) {
          super(),
            $.prototype.cluster_id || z.a($.M()),
            k.initialize(this, e, 0, -1, [5, 6, 7], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  cluster_id: { n: 1, br: z.d.readInt32, bw: z.h.writeInt32 },
                  playtime_forever: {
                    n: 2,
                    br: z.d.readInt32,
                    bw: z.h.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: z.d.readInt32,
                    bw: z.h.writeInt32,
                  },
                  last_played: {
                    n: 4,
                    br: z.d.readUint32,
                    bw: z.h.writeUint32,
                  },
                  played_appids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: z.d.readInt32,
                    bw: z.h.writeRepeatedInt32,
                  },
                  similar_items_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: z.d.readInt32,
                    bw: z.h.writeRepeatedInt32,
                  },
                  similar_items: { n: 7, c: F.f, r: !0, q: !0 },
                  similar_item_popularity_score: {
                    n: 8,
                    br: z.d.readDouble,
                    bw: z.h.writeDouble,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = z.e($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return z.g($.M(), e, t);
        }
        static fromObject(e) {
          return z.c($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new N.BinaryReader(e),
            a = new $();
          return $.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return z.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new N.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          z.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new N.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
        }
      }
      var Q;
      !(function (e) {
        (e.PrioritizeAppsForUser = function (e, t) {
          return e.SendMsg("StoreAppSimilarity.PrioritizeAppsForUser#1", t, U, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.IdentifyClustersFromPlaytime = function (e, t) {
            return e.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              t,
              q,
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
        LoadPlaytimeClusters(e, t, a, r) {
          return new J(this.m_SteamInterface, e, t, a, r);
        }
      }
      class J {
        constructor(e, t, a, r, i) {
          this.m_callbacksLoaded = new x.a();
          const s = T.b.Init(H);
          Object(V.b)(s),
            i && Object(V.c)(s, i),
            s.Body().set_steamid(t || o.l.steamid),
            r && s.Body().set_clusters_to_return(r),
            s.Body().set_sort(a),
            Q.IdentifyClustersFromPlaytime(e.GetServiceTransport(), s).then(
              (e) => {
                const t = e.Body();
                this.m_rgClusters = [];
                for (const e of t.clusters())
                  this.m_rgClusters.push(this.ReadCluster(e, i));
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
        re = a("+aRA");
      function ie(e) {
        const { SteamInterface: t } = e,
          a = _.useRef();
        return (
          a.current || (a.current = new X(t)),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "div",
              null,
              _.createElement(
                "p",
                null,
                "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters."
              ),
              _.createElement(
                "p",
                null,
                "You can also ",
                _.createElement(
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
            _.createElement(ne, { SimilarityStore: a.current })
          )
        );
      }
      const se = {
        3: "Total Playtime",
        2: "Number of Played Games",
        1: "Most Recently Played",
      };
      function ne(e) {
        const { SimilarityStore: t } = e,
          [a, r] = _.useState(o.l.steamid),
          [i, s] = _.useState("10"),
          [n, l] = _.useState(1),
          p = _.useCallback((e) => r(e.currentTarget.value), [r]),
          c = _.useCallback((e) => s(e.currentTarget.value), [s]),
          d = _.useCallback((e) => l(e.data), [l]);
        let m = !1;
        const u = _.useRef(o.l.steamid),
          h = a && new j.a(a);
        let f;
        h &&
          h.BIsValid() &&
          h.BIsIndividualAccount() &&
          ((u.current = h.ConvertTo64BitString()), (m = !0)),
          i && !isNaN(parseInt(i)) && (f = parseInt(i));
        const b = _.useMemo(() => {
            let e = [];
            for (let t in se) e.push({ data: Number(t), label: se[t] });
            return e;
          }, []),
          g = (function (e, t, a, r = 1, i = null, s = []) {
            const [n, o] = _.useState(null);
            return (
              _.useEffect(() => {
                if ((o(null), a))
                  return e
                    .LoadPlaytimeClusters(a, r, i, t)
                    .RegisterOnReadyCallback(o).Unregister;
              }, [a, r, i, ...s]),
              n
            );
          })(
            t,
            { include_assets: !0, include_basic_info: !0 },
            u.current,
            n,
            f
          );
        return _.createElement(
          "div",
          null,
          _.createElement(
            S.c,
            { className: ee.ClusterConfig },
            _.createElement(S.z, {
              label: "SteamID",
              type: "text",
              value: a,
              onChange: p,
              description: !m && "Invalid SteamID",
            }),
            _.createElement(S.z, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: i,
              onChange: c,
            }),
            _.createElement(S.m, {
              label: "Sort clusters by",
              rgOptions: b,
              selectedOption: n,
              onChange: d,
            })
          ),
          m && !g && _.createElement(Y.a, null),
          g && _.createElement(oe, { rgPlaytimeClusters: g })
        );
      }
      function oe(e) {
        const { rgPlaytimeClusters: t } = e;
        return _.createElement(
          "div",
          null,
          t.map((e) =>
            _.createElement(
              re.a,
              { key: e.nClusterID },
              _.createElement(le, { cluster: e })
            )
          )
        );
      }
      function le(e) {
        const { cluster: t } = e,
          [a, r] = _.useState(!1),
          i = _.useCallback(() => r(!0), [r]),
          [s, n] = _.useState(!1),
          o = _.useCallback(() => n(!0), [n]);
        return _.createElement(
          ae.a,
          { onEnter: o },
          _.createElement(
            "div",
            { className: ee.PlaytimeCluster },
            _.createElement(
              "div",
              { className: ee.ClusterInfo },
              _.createElement("h1", null, "Cluster ", t.nClusterID),
              _.createElement(
                re.a,
                null,
                _.createElement(
                  "div",
                  { className: ee.Overview },
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Total Playtime:"),
                    " ",
                    Math.floor(t.nPlaytimeMinutes / 6) / 10,
                    "hr"
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Last Played:"),
                    " ",
                    Object(Z.q)(t.rtLastPlayed),
                    " "
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Games played:"),
                    " ",
                    s &&
                      t.rgAppIDsPlayed.map((e) =>
                        _.createElement(
                          _.Fragment,
                          { key: e },
                          _.createElement(ce, { appid: e }),
                          ", "
                        )
                      )
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Popularity Score:"),
                    " ",
                    Math.floor(100 * t.flPopularityScore),
                    "%  ",
                    _.createElement(
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
            _.createElement(
              "div",
              { className: ee.ClusterMembers },
              _.createElement("h3", null, "Similar titles:"),
              _.createElement(
                re.a,
                null,
                _.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map((e, t) =>
                    a || t < 4
                      ? _.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          _.createElement(de, { item: e })
                        )
                      : null
                  )
                )
              ),
              !a &&
                _.createElement(
                  S.e,
                  { onClick: i },
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
          ? _.createElement(
              "a",
              { className: ee.PlayedGame, href: a.GetStorePageURL() },
              a.GetName()
            )
          : null;
      }
      function de(e) {
        const { item: t } = e;
        return _.createElement(
          "a",
          { className: ee.SimilarTitle, href: t.GetStorePageURL() },
          _.createElement("img", {
            src: t.GetAssets().GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName()
        );
      }
      var me = a("pVzq");
      const ue = [
        {
          path: "similarity",
          render: () => b.a.createElement(M, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            b.a.createElement(ie, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      let he = Object(o.h)("labs", "application_config"),
        fe = new n.a(o.d.WEBAPI_BASE_URL, he.webapi_token);
      function _e(e) {
        const [t, a] = b.a.useState(!1),
          i = !!he.webapi_token;
        if (
          (Object(_.useEffect)(() => {
            f.Init(), a(!0);
          }, []),
          !t)
        )
          return b.a.createElement("div", { className: v.App });
        const s = { SteamInterface: fe };
        return b.a.createElement(
          "div",
          { className: v.App },
          b.a.createElement(
            "div",
            { className: v.Container },
            b.a.createElement(
              "div",
              { className: v.TopSection },
              b.a.createElement("div", { className: v.Header }, "Labs Sandbox"),
              b.a.createElement(
                "div",
                { className: v.Body },
                "Internal testbed page for Steam Labs experiments"
              )
            ),
            b.a.createElement(
              "div",
              { className: v.Tabs },
              ue.map((e) =>
                b.a.createElement(
                  g.c,
                  {
                    key: e.path,
                    to: `${r.b.LabsSandbox()}/${e.path}`,
                    className: v.Tab,
                    activeClassName: v.Active,
                  },
                  e.name
                )
              )
            ),
            b.a.createElement(
              "div",
              { className: v.SandboxSection },
              b.a.createElement(
                re.a,
                null,
                b.a.createElement(
                  y.d,
                  null,
                  ue.map((e, t) =>
                    b.a.createElement(y.b, {
                      key: e.path,
                      path: `${r.b.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || i
                          ? e.render(Object.assign(Object.assign({}, t), s))
                          : b.a.createElement(be, null),
                    })
                  )
                )
              )
            )
          )
        );
      }
      function be() {
        return b.a.createElement(
          "div",
          null,
          b.a.createElement("h3", null, "Please login to view this page."),
          b.a.createElement(me.a, {
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
      var r = a("/Q1a"),
        i = (a("2vnA"), a("6iBs"), a("xH93")),
        s = (a("QAsS"), a("8G9o"), a("f5iL"));
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
          return r.d.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, n);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, n);
        }
        get logo_url() {
          return (
            r.d.MEDIA_CDN_URL +
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
            ? r.d.MEDIA_CDN_COMMUNITY_URL +
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
            Object(s.a)(
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
    uuth: function (e, t, a) {
      "use strict";
      (function (e) {
        a.d(t, "a", function () {
          return w;
        });
        var r = a("1TsT"),
          i = (a("17x9"), a("q1tI")),
          s = a.n(i),
          n = a("TOwV");
        function o(e, t) {
          for (var a = 0; a < t.length; a++) {
            var r = t[a];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function l(e) {
          return (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function p(e, t) {
          return (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function c(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function d(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var a,
              r = l(e);
            if (t) {
              var i = l(this).constructor;
              a = Reflect.construct(r, arguments, i);
            } else a = r.apply(this, arguments);
            return c(this, a);
          };
        }
        function m(e, t) {
          var a,
            r =
              ((a = e),
              !isNaN(parseFloat(a)) && isFinite(a)
                ? parseFloat(a)
                : "px" === a.slice(-2)
                ? parseFloat(a.slice(0, -2))
                : void 0);
          if ("number" == typeof r) return r;
          var i = (function (e) {
            if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
          })(e);
          return "number" == typeof i ? i * t : void 0;
        }
        var u = "above",
          h = "inside",
          f = "below",
          _ = "invisible";
        function b(e) {
          return "string" == typeof e.type;
        }
        var g;
        var y = [];
        function v(e) {
          y.push(e),
            g ||
              (g = setTimeout(function () {
                var e;
                for (g = null; (e = y.shift()); ) e();
              }, 0));
          var t = !0;
          return function () {
            if (t) {
              t = !1;
              var a = y.indexOf(e);
              -1 !== a &&
                (y.splice(a, 1),
                !y.length && g && (clearTimeout(g), (g = null)));
            }
          };
        }
        var S = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: "0px",
            bottomOffset: "0px",
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          w = (function (t) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && p(e, t);
            })(g, t);
            var a,
              i,
              l,
              c = d(g);
            function g(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, g),
                ((t = c.call(this, e)).refElement = function (e) {
                  t._ref = e;
                }),
                t
              );
            }
            return (
              (a = g),
              (i = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    g.getWindow() &&
                      (this.cancelOnNextTick = v(function () {
                        e.cancelOnNextTick = null;
                        var t = e.props,
                          a = t.children;
                        t.debug,
                          (function (e, t) {
                            if (e && !b(e) && !t)
                              throw new Error(
                                "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info."
                              );
                          })(a, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(r.a)(
                            e.scrollableAncestor,
                            "scroll",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          (e.resizeEventListenerUnsubscribe = Object(r.a)(
                            window,
                            "resize",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          e._handleScroll(null);
                      }));
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var e = this;
                    g.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = v(function () {
                          (e.cancelOnNextTick = null), e._handleScroll(null);
                        })));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    g.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick());
                  },
                },
                {
                  key: "_findScrollableAncestor",
                  value: function () {
                    var t = this.props,
                      a = t.horizontal,
                      r = t.scrollableAncestor;
                    if (r)
                      return (function (t) {
                        return "window" === t ? e.window : t;
                      })(r);
                    for (var i = this._ref; i.parentNode; ) {
                      if ((i = i.parentNode) === document.body) return window;
                      var s = window.getComputedStyle(i),
                        n =
                          (a
                            ? s.getPropertyValue("overflow-x")
                            : s.getPropertyValue("overflow-y")) ||
                          s.getPropertyValue("overflow");
                      if ("auto" === n || "scroll" === n || "overlay" === n)
                        return i;
                    }
                    return window;
                  },
                },
                {
                  key: "_handleScroll",
                  value: function (e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        a = (function (e) {
                          return e.viewportBottom - e.viewportTop == 0
                            ? _
                            : (e.viewportTop <= e.waypointTop &&
                                e.waypointTop <= e.viewportBottom) ||
                              (e.viewportTop <= e.waypointBottom &&
                                e.waypointBottom <= e.viewportBottom) ||
                              (e.waypointTop <= e.viewportTop &&
                                e.viewportBottom <= e.waypointBottom)
                            ? h
                            : e.viewportBottom < e.waypointTop
                            ? f
                            : e.waypointTop < e.viewportTop
                            ? u
                            : _;
                        })(t),
                        r = this._previousPosition,
                        i = this.props,
                        s = (i.debug, i.onPositionChange),
                        n = i.onEnter,
                        o = i.onLeave,
                        l = i.fireOnRapidScroll;
                      if (((this._previousPosition = a), r !== a)) {
                        var p = {
                          currentPosition: a,
                          previousPosition: r,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        };
                        s.call(this, p),
                          a === h
                            ? n.call(this, p)
                            : r === h && o.call(this, p),
                          l &&
                            ((r === f && a === u) || (r === u && a === f)) &&
                            (n.call(this, {
                              currentPosition: h,
                              previousPosition: r,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            o.call(this, {
                              currentPosition: a,
                              previousPosition: h,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }));
                      }
                    }
                  },
                },
                {
                  key: "_getBounds",
                  value: function () {
                    var e,
                      t,
                      a = this.props,
                      r = a.horizontal,
                      i = (a.debug, this._ref.getBoundingClientRect()),
                      s = i.left,
                      n = i.top,
                      o = i.right,
                      l = i.bottom,
                      p = r ? s : n,
                      c = r ? o : l;
                    this.scrollableAncestor === window
                      ? ((e = r ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = r
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = r
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top));
                    var d = this.props,
                      u = d.bottomOffset;
                    return {
                      waypointTop: p,
                      waypointBottom: c,
                      viewportTop: t + m(d.topOffset, e),
                      viewportBottom: t + e - m(u, e),
                    };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.children;
                    return t
                      ? b(t) || Object(n.isForwardRef)(t)
                        ? s.a.cloneElement(t, {
                            ref: function (a) {
                              e.refElement(a),
                                t.ref &&
                                  ("function" == typeof t.ref
                                    ? t.ref(a)
                                    : (t.ref.current = a));
                            },
                          })
                        : s.a.cloneElement(t, { innerRef: this.refElement })
                      : s.a.createElement("span", {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        });
                  },
                },
              ]) && o(a.prototype, i),
              l && o(a, l),
              g
            );
          })(s.a.PureComponent);
        (w.above = u),
          (w.below = f),
          (w.inside = h),
          (w.invisible = _),
          (w.getWindow = function () {
            if ("undefined" != typeof window) return window;
          }),
          (w.defaultProps = S),
          (w.displayName = "Waypoint");
      }.call(this, a("yLpj")));
    },
    xH93: function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return i;
      }),
        a.d(t, "a", function () {
          return s;
        });
      var r = a("/Q1a");
      const i = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function s(e, t) {
        let a = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = i),
          44 == e.length && ((a = e.substr(-4)), (e = e.substr(0, 40)));
        let s = r.d.AVATAR_BASE_URL;
        return (
          s ||
            ((s = r.d.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (s += e.substr(0, 2) + "/")),
          (s += e),
          t && "small" != t && (s += "_" + t),
          (s += a),
          s
        );
      }
    },
  },
]);

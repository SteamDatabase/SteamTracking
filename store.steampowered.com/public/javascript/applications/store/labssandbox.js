/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2814],
  {
    72781: (e) => {
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
    203: (e) => {
      e.exports = {
        EntryError: "tagclustering_EntryError_1UGoD",
        ClusterConfig: "tagclustering_ClusterConfig_3Qp2u",
        PlaytimeCluster: "tagclustering_PlaytimeCluster_2qGfq",
        ClusterInfo: "tagclustering_ClusterInfo_20dmp",
        ClusterMembers: "tagclustering_ClusterMembers_VeQtF",
        SimilarTitle: "tagclustering_SimilarTitle_gRxJT",
      };
    },
    40252: (e, t, s) => {
      "use strict";
      s.d(t, { Am: () => l, x3: () => o });
      var a = s(90666),
        r = (s(22188), s(22154), s(43359)),
        i = (s(39799), s(64010), s(77520));
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
          return a.De.MEDIA_CDN_URL + `steam/apps/${this.m_unAppID}/header.jpg`;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, n);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, n);
        }
        get logo_url() {
          return (
            a.De.MEDIA_CDN_URL +
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
            ? a.De.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, r.U)(t);
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
            (0, i.X)(
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
    86605: (e, t, s) => {
      "use strict";
      s.d(t, { Q8: () => u });
      var a = s(70655),
        r = s(22188),
        i = s(26149),
        n = s(58114),
        o = s(40252),
        l = s(22154),
        p = (s(64010), s(68002)),
        c = s(77520),
        m = s(99533),
        d = s(90666);
      class h {
        constructor() {
          (this.m_mapAppInfo = r.LO.map()),
            (this.m_mapRichPresenceLoc = r.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new m.pB());
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
              (0, c.X)(
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
            ((0, c.X)(
              this.m_CMInterface,
              "CAppInfoStore.GetAppInfo called before Init"
            ),
            !this.m_mapAppInfo.has(e))
          ) {
            let t = new o.Am(e);
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
          return (0, a.mG)(this, void 0, void 0, function* () {
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
          return (0, a.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = n.gA.Init(p.Fi);
              e.Body().set_language((0, i.jM)(d.De.LANGUAGE));
              const s = 50;
              for (; t.length > 0; ) {
                const a = Math.min(s, t.length),
                  r = t.slice(0, a);
                (t = t.slice(a)), e.Body().set_appids(r);
                const i = yield p.AE.GetApps(
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
          for (let s of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(s.appid());
            (0, c.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${s.appid()}`
            ),
              e &&
                ((e = new o.Am(s.appid())),
                e.DeserializeFromMessage(s),
                this.m_mapAppInfo.set(s.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let s = this.m_mapAppInfo.get(e);
                s
                  ? s.is_valid || (t = !0)
                  : ((s = new o.Am(e)),
                    this.m_mapAppInfo.set(e, s),
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
          return (0, a.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              s = (e) =>
                (0, a.mG)(this, void 0, void 0, function* () {
                  const s = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!s) return e;
                  let a = this.m_mapAppInfo.get(e);
                  return (
                    (0, c.X)(
                      a,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    a
                      ? ((a = new o.Am(e)),
                        a.DeserializeFromCacheObject(s),
                        a.is_initialized
                          ? (this.m_mapAppInfo.set(e, a),
                            a.time_updated_from_server < t ? e : null)
                          : (console.warn(
                              "Failed to deserialize cached App Info: ",
                              e,
                              s
                            ),
                            e))
                      : e
                  );
                });
            let r = e.map((e) => s(e));
            return (yield Promise.all(r)).filter((e) => null !== e);
          });
        }
        SaveAppInfoBatchToLocalCache(e) {
          return (0, a.mG)(this, void 0, void 0, function* () {
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
        Localize(e, t, s) {
          const a = this.GetRichPresenceLoc(e);
          return a
            ? a.Localize(t, s)
            : 1 != d.De.EUNIVERSE
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
              t.m_nLastUpdated + 6e4 * o.x3 < Date.now() &&
                this.QueueRichPresenceLocRequest(t),
              t
            );
          }
          let t = new l.v(e);
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
          for (let s of t) {
            let t = s.language(),
              a = e.m_mapLanguages.get(t);
            a
              ? a.clear()
              : (e.m_mapLanguages.set(t, new Map()),
                (a = e.m_mapLanguages.get(t)));
            for (let e of s.tokens()) a.set(e.name().toLowerCase(), e.value());
          }
        }
        QueueRichPresenceLocRequest(e) {
          return (
            e.m_fetching ||
              ((e.m_fetching = this.m_CMInterface
                .WaitUntilLoggedOn()
                .then(() => {
                  let t = n.gA.Init(p.tj);
                  return (
                    t.Body().set_appid(e.GetAppID()),
                    t.Body().set_language(d.De.LANGUAGE),
                    p.AE.GetAppRichPresenceLocalization(
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
      (0, a.gn)([r.aD], h.prototype, "OnGetAppsResponse", null),
        (0, a.gn)([r.aD], h.prototype, "OnRichPresenceLocUpdate", null);
      const u = new h();
    },
    22154: (e, t, s) => {
      "use strict";
      s.d(t, { v: () => i });
      var a = s(90666),
        r = (s(26149), s(22188));
      class i {
        constructor(e) {
          (this.m_nLastUpdated = 0),
            (this.m_mapLanguages = r.LO.map()),
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
          let s = a.De.LANGUAGE;
          return n(
            e,
            this.GetTokenList(s),
            "english" != s ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
        SubstituteParams(e, t) {
          let s = a.De.LANGUAGE;
          return o(
            e,
            this.GetTokenList(s),
            "english" != s ? this.GetTokenList("english") : null,
            this.m_appid,
            t
          );
        }
      }
      function n(e, t, s, r, i) {
        if (!e.startsWith("#"))
          return console.log("Token doesn't start with #:", e), "";
        let n = e;
        e = e.toLowerCase();
        let l = "";
        if (
          (t && t.has(e) && (l = t.get(e)),
          !l && s && s.has(e) && (l = s.get(e)),
          l)
        )
          l = o(l, t, s, r, i);
        else if (
          ((t || s) &&
            console.log(
              "No loc found for appid",
              r,
              n,
              "Tokens:",
              t,
              "Fallback:",
              s
            ),
          t && 1 != a.De.EUNIVERSE)
        )
          return e;
        return l;
      }
      function o(e, t, s, a, r) {
        let i = e.match(/{[A-za-z0-9_%#:]+}/g);
        if (i)
          for (let o of i) {
            let i = n(l(o.slice(1, -1), r), t, s, a, r);
            if (!i) return "";
            e = e.replace(o, i);
          }
        return (e = l(e, r));
      }
      function l(e, t) {
        let s = e.match(/%[A-Za-z0-9_:]+%/g);
        if (s)
          for (let a of s) {
            let s = a.slice(1, -1).toLowerCase(),
              r = t.get(s);
            null == r
              ? console.log("No rich presence found for", s)
              : (e = e.replace(a, r));
          }
        return e;
      }
    },
    43359: (e, t, s) => {
      "use strict";
      s.d(t, { U: () => i, W: () => r });
      var a = s(90666);
      const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function i(e, t) {
        let s = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = r),
          44 == e.length && ((s = e.substr(-4)), (e = e.substr(0, 40)));
        let i = a.De.AVATAR_BASE_URL;
        return (
          i ||
            ((i = a.De.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (i += e.substr(0, 2) + "/")),
          (i += e),
          t && "small" != t && (i += "_" + t),
          (i += s),
          i
        );
      }
    },
    93609: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => _e });
      var a = s(9355),
        r = s(70655),
        i = s(86605),
        n = s(65902),
        o = s(90666),
        l = s(22188),
        p = s(64839),
        c = s(9669),
        m = s.n(c);
      class d {
        constructor() {
          this.rgModelNames = [];
        }
        Init() {
          i.Q8.Init(new n.J(o.De.WEBAPI_BASE_URL, o.L7.webapi_token));
          const e = `${o.De.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
          m()
            .get(e)
            .then((e) => {
              if (e.data) {
                let t = [];
                for (const s of e.data) "default" != s && t.push(s);
                t.sort(), (t = ["default", ...t]), (this.rgModelNames = t);
              }
            });
        }
        ComputePathBetweenApps(e, t, s, a, i, n, o) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const l = Math.acos(s);
            let p = new u(
                (e) =>
                  (0, r.mG)(this, void 0, void 0, function* () {
                    let t = yield this.GetNeighbors(e),
                      s = [];
                    for (let e = 0; e < t.length; e++) {
                      const r = t[e];
                      if (
                        (!a || s.length > a) &&
                        (r.cost > l || (i && s.length >= i))
                      )
                        break;
                      s.push(r);
                    }
                    return s;
                  }),
                this.EstimateCosts,
                (e, t) => e == t,
                o
              ),
              c = yield p.FindPath(e, t, n || 10);
            if (c.path) {
              let e = [],
                t = 0;
              for (let s = 0; s < c.path.length; s++) {
                const a = c.path[s],
                  r = a.cost - t;
                (t = a.cost),
                  e.push({ appid: a.node, similarity: Math.cos(r) });
              }
              return e;
            }
            throw new Error("Unable to compute path.");
          });
        }
        GetNeighbors(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = `${o.De.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let s = yield m().get(t),
              a = [];
            if (s.data && s.data.appid == e)
              for (let e = 0; e < s.data.similar_appids.length; e++)
                a.push({
                  node: s.data.similar_appids[e],
                  cost: Math.acos(s.data.similarity_scores[e]),
                });
            return a;
          });
        }
        EstimateCosts(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const s = `${
              o.De.STORE_BASE_URL
            }labs/ajaxgetappsimilarities?appidtarget=${t}&${e
              .map((e) => "appid[]=" + e.toString())
              .join("&")}`;
            let a = yield m().get(s);
            if (a.data && a.data.similarity_scores)
              return a.data.similarity_scores.map((e) =>
                Math.acos(parseFloat(e))
              );
            throw new Error("Unable to fetch cost estimates");
          });
        }
      }
      (0, r.gn)([l.LO], d.prototype, "rgModelNames", void 0),
        (0, r.gn)([p.ak], d.prototype, "GetNeighbors", null),
        (0, r.gn)([p.ak], d.prototype, "EstimateCosts", null);
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
              s = 2 * e + 2;
            let a = e;
            if (
              (t < this.m_Length &&
                this.m_fnCompare(this.m_Heap[a], this.m_Heap[t]) > 0 &&
                (a = t),
              s < this.m_Length &&
                this.m_fnCompare(this.m_Heap[a], this.m_Heap[s]) > 0 &&
                (a = s),
              a == e)
            )
              break;
            {
              const t = this.m_Heap[e];
              (this.m_Heap[e] = this.m_Heap[a]), (this.m_Heap[a] = t), (e = a);
            }
          } while (e < this.m_Length);
        }
        BubbleUp(e) {
          let t = e || this.m_Length - 1;
          for (; t > 0; ) {
            const e = (t - 1) >> 1;
            if (!(this.m_fnCompare(this.m_Heap[e], this.m_Heap[t]) > 0)) break;
            {
              const s = this.m_Heap[e];
              (this.m_Heap[e] = this.m_Heap[t]), (this.m_Heap[t] = s), (t = e);
            }
          }
        }
      }
      class u {
        constructor(e, t, s, a) {
          (this.m_fnGetNeighbors = e),
            (this.m_fnEstimateCosts = t),
            (this.m_fnEquality = s),
            (this.m_fnIterationCallback = a);
        }
        FindPath(e, t, s) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let a = new h((e, t) => e.cost - t.cost),
              r = new Set();
            a.Push({ node: e, cost: 0 });
            let i = new Map(),
              n = new Map(),
              o = new Map(),
              l = (yield this.m_fnEstimateCosts([e], t))[0];
            i.set(e, l), n.set(e, 0);
            let p = 0;
            for (; a.length > 0 && p < s; ) {
              let e = a.Pop();
              if (this.m_fnEquality(e.node, t)) {
                let t = [],
                  s = e.node;
                for (; o.has(s); ) t.push(s), (s = o.get(s));
                let a = [];
                for (let e = t.length - 1; e >= 0; e--)
                  a.push({ node: t[e], cost: n.get(t[e]) });
                return { path: a };
              }
              r.add(e.node);
              let s = yield this.m_fnGetNeighbors(e.node);
              if (s.length > 0) {
                let l = yield this.m_fnEstimateCosts(
                  s.map((e) => e.node),
                  t
                );
                if (l.length != s.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding."
                    ),
                    {}
                  );
                let p = n.get(e.node);
                for (let t = 0; t < s.length; t++) {
                  const c = s[t];
                  let m = p + c.cost;
                  if (
                    (!n.has(c.node) || m < n.get(c.node)) &&
                    (o.set(c.node, e.node),
                    n.set(c.node, m),
                    i.set(c.node, c.cost + l[t]),
                    !r.has(c.node))
                  ) {
                    const e = c.cost + l[t];
                    let s = a.FindElement((e) => e.node == c.node);
                    s
                      ? s.element.cost > e &&
                        a.LowerPriorityOfElement(s.index, {
                          node: c.node,
                          cost: e,
                        })
                      : a.Push({ node: c.node, cost: e });
                  }
                }
              }
              p++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          });
        }
      }
      const _ = new d();
      window.g_LabsSandbox = _;
      var g = s(67294),
        f = s(73727),
        b = s(78587),
        y = s(72781),
        S = s(48341),
        A = s(54698),
        I = s(29323),
        E = s(7573);
      class v extends g.Component {
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
              (i.Q8.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(
                () => {
                  i.Q8.GetAppInfo(this.props.appidInitial);
                  this.setState({
                    appid: this.props.appidInitial,
                    appinfo: i.Q8.GetAppInfo(this.props.appidInitial),
                  });
                }
              ),
              (this.state.appid = this.props.appidInitial));
        }
        OnDisplayClicked() {
          this.setState({ mode: "select" });
        }
        UpdateAppSuggestions(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = e.target.value && e.target.value.trim();
            (null == t ? void 0 : t.length)
              ? (window.clearTimeout(this.m_currentRequest),
                (this.m_currentRequest = window.setTimeout(
                  () =>
                    (0, r.mG)(this, void 0, void 0, function* () {
                      var e;
                      const s = {
                          cc: o.De.COUNTRY,
                          l: o.De.LANGUAGE,
                          realm: A.IN.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: t.replace(" ", "+"),
                          require_type: "game",
                          excluded_tags: [],
                          excluded_content_descriptors: [],
                        },
                        a = `${o.De.STORE_BASE_URL}search/suggest`,
                        r = yield m().get(a, {
                          params: s,
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
                            g.createElement(
                              "div",
                              {
                                className: y.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              g.createElement("img", {
                                src: e.img,
                                className: y.LogoImage,
                              }),
                              g.createElement(
                                "div",
                                { className: y.AppName },
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
            ? i.Q8.EnsureAppInfoForAppIDs([e]).then(() => {
                i.Q8.GetAppInfo(e);
                this.setState({
                  appid: e,
                  appinfo: i.Q8.GetAppInfo(e),
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
          const s =
            null !== (e = this.props.classOverride) && void 0 !== e
              ? e
              : y.AppSelector;
          let a = null;
          const r = g.createElement(S.II, {
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
            a = g.createElement(
              "div",
              { className: y.AppDisplay },
              this.state.appinfo &&
                g.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: y.LogoImage,
                }),
              g.createElement("div", { className: y.AppName }, e)
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            a = g.createElement(
              "div",
              { className: y.AppSelect },
              r,
              e &&
                g.createElement(
                  "div",
                  { className: y.Suggestions },
                  this.state.rgSuggestions
                )
            );
          }
          return g.createElement(
            "div",
            {
              className: s,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
            },
            a
          );
        }
      }
      (0, r.gn)([p.ak], v.prototype, "OnDisplayClicked", null),
        (0, r.gn)([p.ak], v.prototype, "UpdateAppSuggestions", null),
        (0, r.gn)([p.ak], v.prototype, "OnKeyUp", null);
      class C extends g.Component {
        render() {
          if (0 == this.props.appid)
            return g.createElement("div", { className: y.SimilarApp });
          {
            const e = i.Q8.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return g.createElement("div", { className: y.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                g.createElement("div", {
                  className: y.Spacer,
                  key: "score-spacer",
                })
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                g.createElement(
                  "div",
                  { className: y.Score, key: "score-value" },
                  e
                )
              );
            }
            const s = e.name + " (" + this.props.appid.toString() + ")",
              a = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return g.createElement(
              "div",
              { className: y.SimilarApp, onClick: () => a(this.props.appid) },
              g.createElement("img", {
                src: e.header_image_url,
                className: y.LogoImage,
              }),
              g.createElement("div", { className: y.AppName }, s),
              t
            );
          }
        }
      }
      class O extends g.Component {
        constructor() {
          super(...arguments),
            (this.state = {}),
            (this.ref_app_a = g.createRef()),
            (this.ref_app_b = g.createRef());
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
              s = `${o.De.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
            m()
              .get(s)
              .then((e) => {
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
          return g.createElement(
            "div",
            { className: y.LabsSimilarity },
            g.createElement(v, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            g.createElement("div", { className: y.HorizontalSpacer }),
            g.createElement("div", { className: y.Score }, e),
            g.createElement("div", { className: y.HorizontalSpacer }),
            g.createElement(v, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            })
          );
        }
      }
      (0, r.gn)([p.ak], O.prototype, "OnAppSelected", null);
      let B = class extends g.Component {
        constructor(e) {
          super(e),
            (this.selected_app = 0),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.similarity_model = "default"),
            (this.app_selector_ref = g.createRef()),
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
            const t = `${o.De.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}&model=${this.similarity_model}`;
            m()
              .get(t)
              .then((e) => {
                if (e.data && e.data.appid == this.selected_app) {
                  let t = new Set(
                    e.data.similar_appids.slice(0, this.props.max_similar)
                  );
                  t.add(e.data.appid),
                    i.Q8.EnsureAppInfoForAppIDs(t).then(() => {
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
          const s = Math.min(
            this.similar_apps.length,
            this.similarity_scores.length,
            this.props.max_similar
          );
          for (e = 0; e < s; e++) {
            const s = this.similar_apps[e],
              a = this.similarity_scores[e];
            t.push(
              g.createElement(C, {
                appid: s,
                score: a,
                key: s,
                fnOnSelected: this.SetSelectedApp,
              })
            );
          }
          let a = [];
          for (const e of _.rgModelNames) {
            let t = { label: g.createElement("div", { key: e }, e), data: e };
            a.push(t);
          }
          return g.createElement(
            "div",
            { className: y.LabsSimilarGames },
            g.createElement(S.ry, {
              rgOptions: a,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.createElement("h1", null, "Games similar to:"),
            g.createElement(v, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            g.createElement("div", { className: y.SimilarApps }, t)
          );
        }
      };
      (0, r.gn)([l.LO], B.prototype, "selected_app", void 0),
        (0, r.gn)([l.LO], B.prototype, "similar_apps", void 0),
        (0, r.gn)([l.LO], B.prototype, "similarity_scores", void 0),
        (0, r.gn)([l.LO], B.prototype, "similarity_model", void 0),
        (0, r.gn)([p.ak], B.prototype, "OnSelectedApp", null),
        (0, r.gn)([p.ak], B.prototype, "SetSelectedApp", null),
        (0, r.gn)([p.ak], B.prototype, "OnModelChanged", null),
        (B = (0, r.gn)([I.Pi], B));
      let L = class extends g.Component {
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
              label: g.createElement("div", { key: "Plus" }, "Plus"),
              data: "Plus",
            },
            {
              label: g.createElement("div", { key: "Minus" }, "Minus"),
              data: "Minus",
            },
          ];
          return g.createElement(
            "div",
            { className: y.Operand },
            g.createElement(
              "div",
              { className: y.OperatorSelect },
              g.createElement(S.ry, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              })
            ),
            g.createElement(v, { fnOnSelection: this.OnSelectedApp })
          );
        }
      };
      (0, r.gn)([l.LO], L.prototype, "selected_app", void 0),
        (0, r.gn)([l.LO], L.prototype, "selected_operator", void 0),
        (0, r.gn)([p.ak], L.prototype, "OnSelectedApp", null),
        (0, r.gn)([p.ak], L.prototype, "OnSelectedOperator", null),
        (L = (0, r.gn)([I.Pi], L));
      let R = class extends g.Component {
        constructor(e) {
          super(e),
            (this.operands = []),
            (this.similarity_model = "default"),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.operand_refs = []);
          for (let t = 0; t < e.max_operands; t++)
            this.operand_refs.push(g.createRef());
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
            t = `${o.De.STORE_BASE_URL}labs/ajaxgetappvectors?${e.join(
              "&"
            )}&model=${this.similarity_model}`;
          m()
            .get(t)
            .then((e) => {
              if (
                ((this.similar_apps = []),
                (this.similarity_scores = []),
                e.data && e.data.length == this.operands.length)
              ) {
                let t = e.data[0].components.map((e) => parseFloat(e));
                for (let s = 1; s < this.operands.length; s++) {
                  const a = e.data[s].components.map((e) => parseFloat(e));
                  "Plus" == this.operands[s].operator
                    ? (t = t.map((e, t) => e + a[t]))
                    : "Minus" == this.operands[s].operator
                    ? (t = t.map((e, t) => e - a[t]))
                    : console.log(
                        "Unexpected operator " + this.operands[s].operator
                      );
                }
                const s = t.map((e) => e * e).reduce((e, t) => e + t, 0),
                  a = Math.sqrt(s);
                if (a > 1e-4) {
                  const e = t
                      .map((e) => e / a)
                      .map((e) => "x[]=" + e)
                      .join("&"),
                    s = `${o.De.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
                  m()
                    .get(s)
                    .then((e) => {
                      let t = new Set(
                        e.data.similar_appids.slice(0, this.props.max_similar)
                      );
                      i.Q8.EnsureAppInfoForAppIDs(t).then(() => {
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
            let s = { label: g.createElement("div", { key: t }, t), data: t };
            e.push(s);
          }
          let t = [],
            s = 0;
          for (const e of this.operands)
            t.push(
              g.createElement(L, {
                app: e.app,
                operator: e.operator,
                key: s,
                fnOnChange: this.OnOperandChanged,
                ref: this.operand_refs[s],
              })
            ),
              s++;
          let a = null;
          this.operands.length < this.props.max_operands &&
            (a = g.createElement(
              "div",
              { className: y.AddOperand, onClick: this.OnAddOperand },
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
              s = this.similarity_scores[e];
            r.push(g.createElement(C, { appid: t, score: s, key: t }));
          }
          return g.createElement(
            "div",
            { className: y.LabsMixer },
            g.createElement(S.ry, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.createElement("h1", null, "Mixture"),
            t,
            a,
            g.createElement("h1", null, "Games similar to mixture"),
            g.createElement("div", { className: y.SimilarApps }, r)
          );
        }
      };
      (0, r.gn)([l.LO], R.prototype, "operands", void 0),
        (0, r.gn)([l.LO], R.prototype, "similarity_model", void 0),
        (0, r.gn)([l.LO], R.prototype, "similar_apps", void 0),
        (0, r.gn)([l.LO], R.prototype, "similarity_scores", void 0),
        (0, r.gn)([p.ak], R.prototype, "OnModelChanged", null),
        (0, r.gn)([p.ak], R.prototype, "OnAddOperand", null),
        (0, r.gn)([p.ak], R.prototype, "OnOperandChanged", null),
        (R = (0, r.gn)([I.Pi], R));
      let w = class extends g.Component {
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
                  i.Q8.EnsureAppInfoForAppIDs(e.map((e) => e.appid)).then(
                    () => {
                      this.found_path = e;
                    }
                  );
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
          i.Q8.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_start = e;
          });
        }
        OnSelectedEndApp(e) {
          i.Q8.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_end = e;
          });
        }
        render() {
          const e =
              0 != this.app_start &&
              0 != this.app_end &&
              !this.in_progress &&
              this.app_start != this.app_end,
            t = e ? y.ComputeButton : (0, E.Z)(y.ComputeButton, y.Disable);
          let s = null;
          s = this.in_progress
            ? g.createElement(
                "div",
                { className: y.ProgressMessage },
                "Finding path, step " + this.progress_iteration
              )
            : this.found_path
            ? g.createElement(
                "div",
                { className: y.ProgressMessage },
                "Found path"
              )
            : g.createElement(
                "div",
                { className: y.ProgressMessage },
                "No path found"
              );
          let a = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              a.push(
                g.createElement(C, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                })
              );
            }
          return g.createElement(
            "div",
            { className: y.LabsPathfinder },
            g.createElement(
              "div",
              { className: y.SelectEndpoints },
              g.createElement(v, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              g.createElement(v, {
                fnOnSelection: this.OnSelectedEndApp,
                strPrompt: "Select end game",
              })
            ),
            g.createElement(
              "div",
              { className: t, onClick: e ? this.Pathfind : () => {} },
              "Pathfind!"
            ),
            s,
            g.createElement("div", { className: y.Path }, a)
          );
        }
      };
      function P() {
        return g.createElement(
          g.Fragment,
          null,
          g.createElement("h1", null, "Similar Games"),
          g.createElement(B, { max_similar: 10 }),
          g.createElement("div", { className: y.Spacer }),
          g.createElement("h1", null, "Similarity"),
          g.createElement(O, null),
          g.createElement("div", { className: y.Spacer }),
          g.createElement("h1", null, "Mixer"),
          g.createElement(R, { max_similar: 10, max_operands: 6 }),
          g.createElement("div", { className: y.Spacer }),
          g.createElement("h1", null, "Pathfinder"),
          g.createElement(w, null)
        );
      }
      (0, r.gn)([l.LO], w.prototype, "app_start", void 0),
        (0, r.gn)([l.LO], w.prototype, "app_end", void 0),
        (0, r.gn)([l.LO], w.prototype, "in_progress", void 0),
        (0, r.gn)([l.LO], w.prototype, "progress_iteration", void 0),
        (0, r.gn)([l.LO], w.prototype, "found_path", void 0),
        (0, r.gn)([p.ak], w.prototype, "IterationCallback", null),
        (0, r.gn)([p.ak], w.prototype, "Pathfind", null),
        (0, r.gn)([p.ak], w.prototype, "OnSelectedStartApp", null),
        (0, r.gn)([p.ak], w.prototype, "OnSelectedEndApp", null),
        (w = (0, r.gn)([I.Pi], w));
      var M = s(3389),
        F = s(99533),
        D = s(58114),
        z = s(33019),
        N = s(40110),
        k = s(990);
      const x = z.Message;
      class T extends x {
        constructor(e = null) {
          super(),
            T.prototype.items || N.aR(T.M()),
            x.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { items: { n: 1, c: U, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = N.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return N.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return N.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            s = new T();
          return T.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return N.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          N.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
        }
      }
      class U extends x {
        constructor(e = null) {
          super(),
            U.prototype.id || N.aR(U.M()),
            x.initialize(this, e, 0, -1, [50], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  id: { n: 1, c: k.oY },
                  already_owned: {
                    n: 2,
                    br: N.FE.readBool,
                    bw: N.Xc.writeBool,
                  },
                  weight: { n: 3, br: N.FE.readDouble, bw: N.Xc.writeDouble },
                  weight_before_dedupe: {
                    n: 4,
                    br: N.FE.readDouble,
                    bw: N.Xc.writeDouble,
                  },
                  debug_matches: { n: 50, c: G, r: !0, q: !0 },
                  debug_popularity: { n: 51, c: j },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = N.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return N.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return N.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            s = new U();
          return U.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return N.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          N.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
        }
      }
      class G extends x {
        constructor(e = null) {
          super(),
            G.prototype.source_app || N.aR(G.M()),
            x.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  source_app: { n: 1, br: N.FE.readInt32, bw: N.Xc.writeInt32 },
                  weight: { n: 2, br: N.FE.readDouble, bw: N.Xc.writeDouble },
                  similarity: {
                    n: 3,
                    br: N.FE.readDouble,
                    bw: N.Xc.writeDouble,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = N.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return N.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return N.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            s = new G();
          return G.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return N.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          N.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
        }
      }
      class j extends x {
        constructor(e = null) {
          super(),
            j.prototype.rank || N.aR(j.M()),
            x.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  rank: { n: 1, br: N.FE.readUint32, bw: N.Xc.writeUint32 },
                  popularity_factor: {
                    n: 2,
                    br: N.FE.readDouble,
                    bw: N.Xc.writeDouble,
                  },
                  weight_before_popularity: {
                    n: 3,
                    br: N.FE.readDouble,
                    bw: N.Xc.writeDouble,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = N.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return N.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return N.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            s = new j();
          return j.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return N.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          N.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
        }
      }
      class W extends x {
        constructor(e = null) {
          super(),
            W.prototype.steamid || N.aR(W.M()),
            x.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: N.FE.readFixed64String,
                    bw: N.Xc.writeFixed64String,
                  },
                  sort: { n: 2, d: 1, br: N.FE.readEnum, bw: N.Xc.writeEnum },
                  clusters_to_return: {
                    n: 3,
                    br: N.FE.readInt32,
                    bw: N.Xc.writeInt32,
                  },
                  cluster_index: {
                    n: 4,
                    br: N.FE.readInt32,
                    bw: N.Xc.writeInt32,
                  },
                  context: { n: 10, c: k.WJ },
                  data_request: { n: 11, c: k.Qn },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = N.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return N.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return N.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            s = new W();
          return W.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return N.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          N.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
        }
      }
      class q extends x {
        constructor(e = null) {
          super(),
            q.prototype.clusters || N.aR(q.M()),
            x.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { clusters: { n: 1, c: H, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = N.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return N.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return N.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            s = new q();
          return q.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return N.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          N.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
        }
      }
      class H extends x {
        constructor(e = null) {
          super(),
            H.prototype.cluster_id || N.aR(H.M()),
            x.initialize(this, e, 0, -1, [5, 6, 7], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  cluster_id: { n: 1, br: N.FE.readInt32, bw: N.Xc.writeInt32 },
                  playtime_forever: {
                    n: 2,
                    br: N.FE.readInt32,
                    bw: N.Xc.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: N.FE.readInt32,
                    bw: N.Xc.writeInt32,
                  },
                  last_played: {
                    n: 4,
                    br: N.FE.readUint32,
                    bw: N.Xc.writeUint32,
                  },
                  played_appids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: N.FE.readInt32,
                    pbr: N.FE.readPackedInt32,
                    bw: N.Xc.writeRepeatedInt32,
                  },
                  similar_items_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: N.FE.readInt32,
                    pbr: N.FE.readPackedInt32,
                    bw: N.Xc.writeRepeatedInt32,
                  },
                  similar_items: { n: 7, c: k.VL, r: !0, q: !0 },
                  similar_item_popularity_score: {
                    n: 8,
                    br: N.FE.readDouble,
                    bw: N.Xc.writeDouble,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = N.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return N.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return N.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new z.BinaryReader(e),
            s = new H();
          return H.deserializeBinaryFromReader(s, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return N.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new z.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          N.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new z.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
        }
      }
      var $;
      !(function (e) {
        (e.PrioritizeAppsForUser = function (e, t) {
          return e.SendMsg("StoreAppSimilarity.PrioritizeAppsForUser#1", t, T, {
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
      })($ || ($ = {}));
      var Q = s(32367),
        X = (s(14146), s(159));
      class V {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        LoadPlaytimeClusters(e, t, s, a) {
          return new K(this.m_SteamInterface, e, t, s, a);
        }
      }
      class K {
        constructor(e, t, s, a, r) {
          this.m_callbacksLoaded = new F.pB();
          const i = D.gA.Init(W);
          (0, Q.pA)(i),
            r && (0, Q.De)(i, r),
            i.Body().set_steamid(t || o.L7.steamid),
            a && i.Body().set_clusters_to_return(a),
            i.Body().set_sort(s),
            $.IdentifyClustersFromPlaytime(e.GetServiceTransport(), i).then(
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
          let s;
          return (
            t && (s = e.similar_items().map((e) => X.Z.Get().ReadItem(e, t))),
            {
              nClusterID: e.cluster_id(),
              nPlaytimeMinutes: e.playtime_forever(),
              nPlaytimeMinutes2Weeks: e.playtime_2weeks(),
              rtLastPlayed: e.last_played(),
              rgAppIDsPlayed: e.played_appids(),
              rgSimilarItems: s.filter((e) => !!e),
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
      var Z = s(13596),
        J = s(41311),
        Y = s(203),
        ee = s(52114),
        te = s(80533),
        se = s(32548);
      function ae(e) {
        const { SteamInterface: t } = e,
          s = g.useRef();
        return (
          s.current || (s.current = new V(t)),
          g.createElement(
            g.Fragment,
            null,
            g.createElement(
              "div",
              null,
              g.createElement(
                "p",
                null,
                "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters."
              ),
              g.createElement(
                "p",
                null,
                "You can also ",
                g.createElement(
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
            g.createElement(ie, { SimilarityStore: s.current })
          )
        );
      }
      const re = {
        3: "Total Playtime",
        2: "Number of Played Games",
        1: "Most Recently Played",
      };
      function ie(e) {
        const { SimilarityStore: t } = e,
          [s, a] = g.useState(o.L7.steamid),
          [r, i] = g.useState("10"),
          [n, l] = g.useState(1),
          p = g.useCallback((e) => a(e.currentTarget.value), [a]),
          c = g.useCallback((e) => i(e.currentTarget.value), [i]),
          m = g.useCallback((e) => l(e.data), [l]);
        let d = !1;
        const h = g.useRef(o.L7.steamid),
          u = s && new M.K(s);
        let _;
        u &&
          u.BIsValid() &&
          u.BIsIndividualAccount() &&
          ((h.current = u.ConvertTo64BitString()), (d = !0)),
          r && !isNaN(parseInt(r)) && (_ = parseInt(r));
        const f = g.useMemo(() => {
            let e = [];
            for (let t in re) e.push({ data: Number(t), label: re[t] });
            return e;
          }, []),
          b = (function (e, t, s, a = 1, r = null, i = []) {
            const [n, o] = g.useState(null);
            return (
              g.useEffect(() => {
                if ((o(null), s))
                  return e
                    .LoadPlaytimeClusters(s, a, r, t)
                    .RegisterOnReadyCallback(o).Unregister;
              }, [s, a, r, ...i]),
              n
            );
          })(
            t,
            { include_assets: !0, include_basic_info: !0 },
            h.current,
            n,
            _
          );
        return g.createElement(
          "div",
          null,
          g.createElement(
            S.uT,
            { className: Y.ClusterConfig },
            g.createElement(S.II, {
              label: "SteamID",
              type: "text",
              value: s,
              onChange: p,
              description: !d && "Invalid SteamID",
            }),
            g.createElement(S.II, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: r,
              onChange: c,
            }),
            g.createElement(S.ry, {
              label: "Sort clusters by",
              rgOptions: f,
              selectedOption: n,
              onChange: m,
            })
          ),
          d && !b && g.createElement(Z.V, null),
          b && g.createElement(ne, { rgPlaytimeClusters: b })
        );
      }
      function ne(e) {
        const { rgPlaytimeClusters: t } = e;
        return g.createElement(
          "div",
          null,
          t.map((e) =>
            g.createElement(
              se.S,
              { key: e.nClusterID },
              g.createElement(oe, { cluster: e })
            )
          )
        );
      }
      function oe(e) {
        const { cluster: t } = e,
          [s, a] = g.useState(!1),
          r = g.useCallback(() => a(!0), [a]),
          [i, n] = g.useState(!1),
          o = g.useCallback(() => n(!0), [n]);
        return g.createElement(
          te.h,
          { onEnter: o },
          g.createElement(
            "div",
            { className: Y.PlaytimeCluster },
            g.createElement(
              "div",
              { className: Y.ClusterInfo },
              g.createElement("h1", null, "Cluster ", t.nClusterID),
              g.createElement(
                se.S,
                null,
                g.createElement(
                  "div",
                  { className: Y.Overview },
                  g.createElement(
                    "div",
                    null,
                    g.createElement("b", null, "Total Playtime:"),
                    " ",
                    Math.floor(t.nPlaytimeMinutes / 6) / 10,
                    "hr"
                  ),
                  g.createElement(
                    "div",
                    null,
                    g.createElement("b", null, "Last Played:"),
                    " ",
                    (0, J.vX)(t.rtLastPlayed),
                    " "
                  ),
                  g.createElement(
                    "div",
                    null,
                    g.createElement("b", null, "Games played:"),
                    " ",
                    i &&
                      t.rgAppIDsPlayed.map((e) =>
                        g.createElement(
                          g.Fragment,
                          { key: e },
                          g.createElement(pe, { appid: e }),
                          ", "
                        )
                      )
                  ),
                  g.createElement(
                    "div",
                    null,
                    g.createElement("b", null, "Popularity Score:"),
                    " ",
                    Math.floor(100 * t.flPopularityScore),
                    "%  ",
                    g.createElement(
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
            g.createElement(
              "div",
              { className: Y.ClusterMembers },
              g.createElement("h3", null, "Similar titles:"),
              g.createElement(
                se.S,
                null,
                g.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map((e, t) =>
                    s || t < 4
                      ? g.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          g.createElement(ce, { item: e })
                        )
                      : null
                  )
                )
              ),
              !s &&
                g.createElement(
                  S.zx,
                  { onClick: r },
                  "Show all ",
                  t.rgSimilarItems.length
                )
            )
          )
        );
      }
      const le = {};
      function pe(e) {
        const { appid: t } = e,
          [s] = (0, ee.vs)(t, le);
        return s
          ? g.createElement(
              "a",
              { className: Y.PlayedGame, href: s.GetStorePageURL() },
              s.GetName()
            )
          : null;
      }
      function ce(e) {
        const { item: t } = e;
        return g.createElement(
          "a",
          { className: Y.SimilarTitle, href: t.GetStorePageURL() },
          g.createElement("img", {
            src: t.GetAssets().GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName()
        );
      }
      var me = s(3786);
      const de = [
        {
          path: "similarity",
          render: () => g.createElement(P, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            g.createElement(ae, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      let he = (0, o.kQ)("labs", "application_config"),
        ue = new n.J(o.De.WEBAPI_BASE_URL, he.webapi_token);
      function _e(e) {
        const [t, s] = g.useState(!1),
          r = !!he.webapi_token;
        if (
          ((0, g.useEffect)(() => {
            _.Init(), s(!0);
          }, []),
          !t)
        )
          return g.createElement("div", { className: y.App });
        const i = { SteamInterface: ue };
        return g.createElement(
          "div",
          { className: y.App },
          g.createElement(
            "div",
            { className: y.Container },
            g.createElement(
              "div",
              { className: y.TopSection },
              g.createElement("div", { className: y.Header }, "Labs Sandbox"),
              g.createElement(
                "div",
                { className: y.Body },
                "Internal testbed page for Steam Labs experiments"
              )
            ),
            g.createElement(
              "div",
              { className: y.Tabs },
              de.map((e) =>
                g.createElement(
                  f.OL,
                  {
                    key: e.path,
                    to: `${a.Z.LabsSandbox()}/${e.path}`,
                    className: y.Tab,
                    activeClassName: y.Active,
                  },
                  e.name
                )
              )
            ),
            g.createElement(
              "div",
              { className: y.SandboxSection },
              g.createElement(
                se.S,
                null,
                g.createElement(
                  b.rs,
                  null,
                  de.map((e, t) =>
                    g.createElement(b.AW, {
                      key: e.path,
                      path: `${a.Z.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || r
                          ? e.render(Object.assign(Object.assign({}, t), i))
                          : g.createElement(ge, null),
                    })
                  )
                )
              )
            )
          )
        );
      }
      function ge() {
        return g.createElement(
          "div",
          null,
          g.createElement("h3", null, "Please login to view this page."),
          g.createElement(me.f, {
            baseURL: o.De.STORE_BASE_URL,
            onLoginComplete: () => window.location.reload(),
          })
        );
      }
    },
  },
]);

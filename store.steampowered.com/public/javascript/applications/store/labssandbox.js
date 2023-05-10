/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2814],
  {
    36025: (e) => {
      e.exports = {
        LoginDialog: "login_LoginDialog_2y6W_",
        AccountPasswordPanel: "login_AccountPasswordPanel_3hiT2",
        LoginPanelBackground: "login_LoginPanelBackground_3rFou",
        LoginPanelContent: "login_LoginPanelContent_1dgRm",
        ErrorMessage: "login_ErrorMessage_Xp7bS",
        AccountPasswordForm: "login_AccountPasswordForm_3M0na",
        AuthenticationPanel: "login_AuthenticationPanel_1mvos",
        AccountNameLabel: "login_AccountNameLabel_2mGS5",
        MedName: "login_MedName_2J9dc",
        LargeName: "login_LargeName_26ejp",
        PasswordDots: "login_PasswordDots_2hvaY",
        MedPass: "login_MedPass_3dfHR",
        LargePass: "login_LargePass_3iXGb",
        AccountFieldHeader: "login_AccountFieldHeader_ItWep",
        PasswordFieldHeader: "login_PasswordFieldHeader_2GJed",
        NeedHelpLink: "login_NeedHelpLink_3nqR4",
        NeedHelpHighlight: "login_NeedHelpHighlight_25N0C",
        CreateAccountLink: "login_CreateAccountLink_r1OCj",
        LoginCreateSeperator: "login_LoginCreateSeperator_25iPN",
        RefreshCaptchaText: "login_RefreshCaptchaText_28Gin",
        SigningInAccountName: "login_SigningInAccountName_2Bjab",
        SigninTitle: "login_SigninTitle_Pk26-",
        RememberMeCheck: "login_RememberMeCheck_zkf30",
        SteamUpsellContainer: "login_SteamUpsellContainer_1bNqn",
        SteamUpsell: "login_SteamUpsell_3MQ_K",
        CaptchaContainer: "login_CaptchaContainer_2nqhJ",
        CaptchaBlock: "login_CaptchaBlock_1iLPO",
        CaptchaImageAndInput: "login_CaptchaImageAndInput_2Frvv",
        CaptchaImageBox: "login_CaptchaImageBox_uMoA_",
        CaptchaImage: "login_CaptchaImage_2tJ2w",
        CaptchaInput: "login_CaptchaInput_1hrke",
        AuthenticatorInputcontainer: "login_AuthenticatorInputcontainer_2YRk7",
        Highlight: "login_Highlight_1Ea3M",
        LoginComplete: "login_LoginComplete_KmQja",
      };
    },
    65889: (e) => {
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
    76339: (e) => {
      e.exports = {
        EntryError: "tagclustering_EntryError_1UGoD",
        ClusterConfig: "tagclustering_ClusterConfig_3Qp2u",
        PlaytimeCluster: "tagclustering_PlaytimeCluster_2qGfq",
        ClusterInfo: "tagclustering_ClusterInfo_20dmp",
        ClusterMembers: "tagclustering_ClusterMembers_VeQtF",
        SimilarTitle: "tagclustering_SimilarTitle_gRxJT",
      };
    },
    88337: (e, t, a) => {
      "use strict";
      a.d(t, { Q8: () => u });
      var s = a(33940),
        r = a(50265),
        i = a(46132),
        n = a(54856),
        o = a(57361),
        l = a(56373),
        p = (a(56020), a(53236)),
        m = a(23801),
        c = a(85246),
        d = a(32765);
      class h {
        constructor() {
          (this.m_mapAppInfo = r.LO.map()),
            (this.m_mapRichPresenceLoc = r.LO.map()),
            (this.m_cAppInfoRequestsInFlight = 0),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_CacheStorage = null),
            (this.m_fnCallbackOnAppInfoLoaded = new c.pB());
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
              (0, m.X)(
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
            ((0, m.X)(
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
          return (0, s.mG)(this, void 0, void 0, function* () {
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            this.m_cAppInfoRequestsInFlight++;
            let t = yield this.LoadAppInfoBatchFromLocalCache(e);
            if (t.length) {
              console.log("Loading batch of App Info from Steam: ", t),
                yield this.m_CMInterface.WaitUntilLoggedOn();
              let e = n.gA.Init(p.Fi);
              e.Body().set_language((0, i.jM)(d.De.LANGUAGE));
              const a = 50;
              for (; t.length > 0; ) {
                const s = Math.min(a, t.length),
                  r = t.slice(0, s);
                (t = t.slice(s)), e.Body().set_appids(r);
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
          for (let a of e.Body().apps()) {
            let e = this.m_mapAppInfo.get(a.appid());
            (0, m.X)(
              e,
              `Got AppInfo response for unrequested AppID: ${a.appid()}`
            ),
              e &&
                ((e = new o.Am(a.appid())),
                e.DeserializeFromMessage(a),
                this.m_mapAppInfo.set(a.appid(), e),
                t.push(e));
          }
          this.SaveAppInfoBatchToLocalCache(t);
        }
        OnAppOverviewChange(e) {
          for (let t of e) {
            const e = new o.Am(t.appid());
            e.DeserializeFromAppOverview(t),
              e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
          }
        }
        EnsureAppInfoForAppIDs(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            let t = !1;
            return (
              e.forEach((e) => {
                let a = this.m_mapAppInfo.get(e);
                a
                  ? a.is_valid || (t = !0)
                  : ((a = new o.Am(e)),
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (!this.m_CacheStorage) return e;
            console.log("Loading batch of App Info from Local Cache: ", e);
            const t = new Date(new Date().getTime() - 12096e5),
              a = (e) =>
                (0, s.mG)(this, void 0, void 0, function* () {
                  const a = yield this.m_CacheStorage.GetObject(
                    this.GetCacheKeyForAppID(e)
                  );
                  if (!a) return e;
                  let s = this.m_mapAppInfo.get(e);
                  return (
                    (0, m.X)(
                      s,
                      "Didn't find AppInfo in our map when loading from cache but it should've been there?"
                    ),
                    s
                      ? ((s = new o.Am(e)),
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
          return (0, s.mG)(this, void 0, void 0, function* () {
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
      (0, s.gn)([r.aD], h.prototype, "OnGetAppsResponse", null),
        (0, s.gn)([r.aD], h.prototype, "OnRichPresenceLocUpdate", null);
      const u = new h();
    },
    4472: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => we });
      var s = a(96927),
        r = a(33940),
        i = a(88337),
        n = a(36597),
        o = a(32765),
        l = a(50265),
        p = a(4306),
        m = a(52868),
        c = a.n(m);
      class d {
        constructor() {
          this.rgModelNames = [];
        }
        Init() {
          i.Q8.Init(new n.J(o.De.WEBAPI_BASE_URL, o.L7.webapi_token));
          const e = `${o.De.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
          c()
            .get(e)
            .then((e) => {
              if (e.data) {
                let t = [];
                for (const a of e.data) "default" != a && t.push(a);
                t.sort(), (t = ["default", ...t]), (this.rgModelNames = t);
              }
            });
        }
        ComputePathBetweenApps(e, t, a, s, i, n, o) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            const l = Math.acos(a);
            let p = new u(
                (e) =>
                  (0, r.mG)(this, void 0, void 0, function* () {
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
              m = yield p.FindPath(e, t, n || 10);
            if (m.path) {
              let e = [],
                t = 0;
              for (let a = 0; a < m.path.length; a++) {
                const s = m.path[a],
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            const t = `${o.De.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let a = yield c().get(t),
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
          return (0, r.mG)(this, void 0, void 0, function* () {
            const a = `${
              o.De.STORE_BASE_URL
            }labs/ajaxgetappsimilarities?appidtarget=${t}&${e
              .map((e) => "appid[]=" + e.toString())
              .join("&")}`;
            let s = yield c().get(a);
            if (s.data && s.data.similarity_scores)
              return s.data.similarity_scores.map((e) =>
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
          return (0, r.mG)(this, void 0, void 0, function* () {
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
                  const m = a[t];
                  let c = p + m.cost;
                  if (
                    (!n.has(m.node) || c < n.get(m.node)) &&
                    (o.set(m.node, e.node),
                    n.set(m.node, c),
                    i.set(m.node, m.cost + l[t]),
                    !r.has(m.node))
                  ) {
                    const e = m.cost + l[t];
                    let a = s.FindElement((e) => e.node == m.node);
                    a
                      ? a.element.cost > e &&
                        s.LowerPriorityOfElement(a.index, {
                          node: m.node,
                          cost: e,
                        })
                      : s.Push({ node: m.node, cost: e });
                  }
                }
              }
              p++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          });
        }
      }
      const g = new d();
      window.g_LabsSandbox = g;
      var _ = a(89526),
        f = a(565),
        b = a(59934),
        S = a(65889),
        C = a(57605),
        y = a(51637),
        E = a(88464),
        A = a(19304);
      class I extends _.Component {
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
                      const a = {
                          cc: o.De.COUNTRY,
                          l: o.De.LANGUAGE,
                          realm: y.IN.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: t.replace(" ", "+"),
                          require_type: "game",
                          excluded_tags: [],
                          excluded_content_descriptors: [],
                        },
                        s = `${o.De.STORE_BASE_URL}search/suggest`,
                        r = yield c().get(s, {
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
                            _.createElement(
                              "div",
                              {
                                className: S.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              _.createElement("img", {
                                src: e.img,
                                className: S.LogoImage,
                              }),
                              _.createElement(
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
          const a =
            null !== (e = this.props.classOverride) && void 0 !== e
              ? e
              : S.AppSelector;
          let s = null;
          const r = _.createElement(C.II, {
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
            s = _.createElement(
              "div",
              { className: S.AppDisplay },
              this.state.appinfo &&
                _.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: S.LogoImage,
                }),
              _.createElement("div", { className: S.AppName }, e)
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            s = _.createElement(
              "div",
              { className: S.AppSelect },
              r,
              e &&
                _.createElement(
                  "div",
                  { className: S.Suggestions },
                  this.state.rgSuggestions
                )
            );
          }
          return _.createElement(
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
      (0, r.gn)([p.ak], I.prototype, "OnDisplayClicked", null),
        (0, r.gn)([p.ak], I.prototype, "UpdateAppSuggestions", null),
        (0, r.gn)([p.ak], I.prototype, "OnKeyUp", null);
      class v extends _.Component {
        render() {
          if (0 == this.props.appid)
            return _.createElement("div", { className: S.SimilarApp });
          {
            const e = i.Q8.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return _.createElement("div", { className: S.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                _.createElement("div", {
                  className: S.Spacer,
                  key: "score-spacer",
                })
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                _.createElement(
                  "div",
                  { className: S.Score, key: "score-value" },
                  e
                )
              );
            }
            const a = e.name + " (" + this.props.appid.toString() + ")",
              s = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return _.createElement(
              "div",
              { className: S.SimilarApp, onClick: () => s(this.props.appid) },
              _.createElement("img", {
                src: e.header_image_url,
                className: S.LogoImage,
              }),
              _.createElement("div", { className: S.AppName }, a),
              t
            );
          }
        }
      }
      class L extends _.Component {
        constructor() {
          super(...arguments),
            (this.state = {}),
            (this.ref_app_a = _.createRef()),
            (this.ref_app_b = _.createRef());
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
              a = `${o.De.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
            c()
              .get(a)
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
          return _.createElement(
            "div",
            { className: S.LabsSimilarity },
            _.createElement(I, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            _.createElement("div", { className: S.HorizontalSpacer }),
            _.createElement("div", { className: S.Score }, e),
            _.createElement("div", { className: S.HorizontalSpacer }),
            _.createElement(I, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            })
          );
        }
      }
      (0, r.gn)([p.ak], L.prototype, "OnAppSelected", null);
      let w = class extends _.Component {
        constructor(e) {
          super(e),
            (this.selected_app = 0),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.similarity_model = "default"),
            (this.app_selector_ref = _.createRef()),
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
            c()
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
          const a = Math.min(
            this.similar_apps.length,
            this.similarity_scores.length,
            this.props.max_similar
          );
          for (e = 0; e < a; e++) {
            const a = this.similar_apps[e],
              s = this.similarity_scores[e];
            t.push(
              _.createElement(v, {
                appid: a,
                score: s,
                key: a,
                fnOnSelected: this.SetSelectedApp,
              })
            );
          }
          let s = [];
          for (const e of g.rgModelNames) {
            let t = { label: _.createElement("div", { key: e }, e), data: e };
            s.push(t);
          }
          return _.createElement(
            "div",
            { className: S.LabsSimilarGames },
            _.createElement(C.ry, {
              rgOptions: s,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            _.createElement("h1", null, "Games similar to:"),
            _.createElement(I, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            _.createElement("div", { className: S.SimilarApps }, t)
          );
        }
      };
      (0, r.gn)([l.LO], w.prototype, "selected_app", void 0),
        (0, r.gn)([l.LO], w.prototype, "similar_apps", void 0),
        (0, r.gn)([l.LO], w.prototype, "similarity_scores", void 0),
        (0, r.gn)([l.LO], w.prototype, "similarity_model", void 0),
        (0, r.gn)([p.ak], w.prototype, "OnSelectedApp", null),
        (0, r.gn)([p.ak], w.prototype, "SetSelectedApp", null),
        (0, r.gn)([p.ak], w.prototype, "OnModelChanged", null),
        (w = (0, r.gn)([E.Pi], w));
      let R = class extends _.Component {
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
              label: _.createElement("div", { key: "Plus" }, "Plus"),
              data: "Plus",
            },
            {
              label: _.createElement("div", { key: "Minus" }, "Minus"),
              data: "Minus",
            },
          ];
          return _.createElement(
            "div",
            { className: S.Operand },
            _.createElement(
              "div",
              { className: S.OperatorSelect },
              _.createElement(C.ry, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              })
            ),
            _.createElement(I, { fnOnSelection: this.OnSelectedApp })
          );
        }
      };
      (0, r.gn)([l.LO], R.prototype, "selected_app", void 0),
        (0, r.gn)([l.LO], R.prototype, "selected_operator", void 0),
        (0, r.gn)([p.ak], R.prototype, "OnSelectedApp", null),
        (0, r.gn)([p.ak], R.prototype, "OnSelectedOperator", null),
        (R = (0, r.gn)([E.Pi], R));
      let O = class extends _.Component {
        constructor(e) {
          super(e),
            (this.operands = []),
            (this.similarity_model = "default"),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.operand_refs = []);
          for (let t = 0; t < e.max_operands; t++)
            this.operand_refs.push(_.createRef());
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
          c()
            .get(t)
            .then((e) => {
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
                    a = `${o.De.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
                  c()
                    .get(a)
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
          for (const t of g.rgModelNames) {
            let a = { label: _.createElement("div", { key: t }, t), data: t };
            e.push(a);
          }
          let t = [],
            a = 0;
          for (const e of this.operands)
            t.push(
              _.createElement(R, {
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
            (s = _.createElement(
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
            r.push(_.createElement(v, { appid: t, score: a, key: t }));
          }
          return _.createElement(
            "div",
            { className: S.LabsMixer },
            _.createElement(C.ry, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            _.createElement("h1", null, "Mixture"),
            t,
            s,
            _.createElement("h1", null, "Games similar to mixture"),
            _.createElement("div", { className: S.SimilarApps }, r)
          );
        }
      };
      (0, r.gn)([l.LO], O.prototype, "operands", void 0),
        (0, r.gn)([l.LO], O.prototype, "similarity_model", void 0),
        (0, r.gn)([l.LO], O.prototype, "similar_apps", void 0),
        (0, r.gn)([l.LO], O.prototype, "similarity_scores", void 0),
        (0, r.gn)([p.ak], O.prototype, "OnModelChanged", null),
        (0, r.gn)([p.ak], O.prototype, "OnAddOperand", null),
        (0, r.gn)([p.ak], O.prototype, "OnOperandChanged", null),
        (O = (0, r.gn)([E.Pi], O));
      let P = class extends _.Component {
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
            g
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
            t = e ? S.ComputeButton : (0, A.Z)(S.ComputeButton, S.Disable);
          let a = null;
          a = this.in_progress
            ? _.createElement(
                "div",
                { className: S.ProgressMessage },
                "Finding path, step " + this.progress_iteration
              )
            : this.found_path
            ? _.createElement(
                "div",
                { className: S.ProgressMessage },
                "Found path"
              )
            : _.createElement(
                "div",
                { className: S.ProgressMessage },
                "No path found"
              );
          let s = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              s.push(
                _.createElement(v, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                })
              );
            }
          return _.createElement(
            "div",
            { className: S.LabsPathfinder },
            _.createElement(
              "div",
              { className: S.SelectEndpoints },
              _.createElement(I, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              _.createElement(I, {
                fnOnSelection: this.OnSelectedEndApp,
                strPrompt: "Select end game",
              })
            ),
            _.createElement(
              "div",
              { className: t, onClick: e ? this.Pathfind : () => {} },
              "Pathfind!"
            ),
            a,
            _.createElement("div", { className: S.Path }, s)
          );
        }
      };
      function B() {
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("h1", null, "Similar Games"),
          _.createElement(w, { max_similar: 10 }),
          _.createElement("div", { className: S.Spacer }),
          _.createElement("h1", null, "Similarity"),
          _.createElement(L, null),
          _.createElement("div", { className: S.Spacer }),
          _.createElement("h1", null, "Mixer"),
          _.createElement(O, { max_similar: 10, max_operands: 6 }),
          _.createElement("div", { className: S.Spacer }),
          _.createElement("h1", null, "Pathfinder"),
          _.createElement(P, null)
        );
      }
      (0, r.gn)([l.LO], P.prototype, "app_start", void 0),
        (0, r.gn)([l.LO], P.prototype, "app_end", void 0),
        (0, r.gn)([l.LO], P.prototype, "in_progress", void 0),
        (0, r.gn)([l.LO], P.prototype, "progress_iteration", void 0),
        (0, r.gn)([l.LO], P.prototype, "found_path", void 0),
        (0, r.gn)([p.ak], P.prototype, "IterationCallback", null),
        (0, r.gn)([p.ak], P.prototype, "Pathfind", null),
        (0, r.gn)([p.ak], P.prototype, "OnSelectedStartApp", null),
        (0, r.gn)([p.ak], P.prototype, "OnSelectedEndApp", null),
        (P = (0, r.gn)([E.Pi], P));
      var F = a(47165),
        N = (a(3641), a(85246)),
        M = a(54856),
        x = a(45878),
        k = a(29063),
        D = a(53143);
      const G = x.Message;
      class T extends G {
        constructor(e = null) {
          super(),
            T.prototype.items || k.aR(T.M()),
            G.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { items: { n: 1, c: z, r: !0, q: !0 } },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = k.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(T.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new T();
          return T.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
        }
      }
      class z extends G {
        constructor(e = null) {
          super(),
            z.prototype.id || k.aR(z.M()),
            G.initialize(this, e, 0, -1, [50], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  id: { n: 1, c: D.oY },
                  already_owned: {
                    n: 2,
                    br: k.FE.readBool,
                    bw: k.Xc.writeBool,
                  },
                  weight: { n: 3, br: k.FE.readDouble, bw: k.Xc.writeDouble },
                  weight_before_dedupe: {
                    n: 4,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                  debug_matches: { n: 50, c: U, r: !0, q: !0 },
                  debug_popularity: { n: 51, c: j },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = k.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(z.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new z();
          return z.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
        }
      }
      class U extends G {
        constructor(e = null) {
          super(),
            U.prototype.source_app || k.aR(U.M()),
            G.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  source_app: { n: 1, br: k.FE.readInt32, bw: k.Xc.writeInt32 },
                  weight: { n: 2, br: k.FE.readDouble, bw: k.Xc.writeDouble },
                  similarity: {
                    n: 3,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = k.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(U.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new U();
          return U.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
        }
      }
      class j extends G {
        constructor(e = null) {
          super(),
            j.prototype.rank || k.aR(j.M()),
            G.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  rank: { n: 1, br: k.FE.readUint32, bw: k.Xc.writeUint32 },
                  popularity_factor: {
                    n: 2,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                  weight_before_popularity: {
                    n: 3,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = k.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(j.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new j();
          return j.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
        }
      }
      class H extends G {
        constructor(e = null) {
          super(),
            H.prototype.steamid || k.aR(H.M()),
            G.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: k.FE.readFixed64String,
                    bw: k.Xc.writeFixed64String,
                  },
                  sort: { n: 2, d: 1, br: k.FE.readEnum, bw: k.Xc.writeEnum },
                  clusters_to_return: {
                    n: 3,
                    br: k.FE.readInt32,
                    bw: k.Xc.writeInt32,
                  },
                  cluster_index: {
                    n: 4,
                    br: k.FE.readInt32,
                    bw: k.Xc.writeInt32,
                  },
                  context: { n: 10, c: D.WJ },
                  data_request: { n: 11, c: D.Qn },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = k.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(H.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new H();
          return H.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
        }
      }
      class q extends G {
        constructor(e = null) {
          super(),
            q.prototype.clusters || k.aR(q.M()),
            G.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { clusters: { n: 1, c: W, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = k.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(q.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new q();
          return q.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
        }
      }
      class W extends G {
        constructor(e = null) {
          super(),
            W.prototype.cluster_id || k.aR(W.M()),
            G.initialize(this, e, 0, -1, [5, 6, 7], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  cluster_id: { n: 1, br: k.FE.readInt32, bw: k.Xc.writeInt32 },
                  playtime_forever: {
                    n: 2,
                    br: k.FE.readInt32,
                    bw: k.Xc.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: k.FE.readInt32,
                    bw: k.Xc.writeInt32,
                  },
                  last_played: {
                    n: 4,
                    br: k.FE.readUint32,
                    bw: k.Xc.writeUint32,
                  },
                  played_appids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: k.FE.readInt32,
                    pbr: k.FE.readPackedInt32,
                    bw: k.Xc.writeRepeatedInt32,
                  },
                  similar_items_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: k.FE.readInt32,
                    pbr: k.FE.readPackedInt32,
                    bw: k.Xc.writeRepeatedInt32,
                  },
                  similar_items: { n: 7, c: D.VL, r: !0, q: !0 },
                  similar_item_popularity_score: {
                    n: 8,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = k.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(W.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new x.BinaryReader(e),
            a = new W();
          return W.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new x.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new x.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
        }
      }
      var X;
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
      })(X || (X = {}));
      var Q = a(11195),
        $ = (a(36704), a(57858));
      class V {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        LoadPlaytimeClusters(e, t, a, s) {
          return new K(this.m_SteamInterface, e, t, a, s);
        }
      }
      class K {
        constructor(e, t, a, s, r) {
          this.m_callbacksLoaded = new N.pB();
          const i = M.gA.Init(H);
          (0, Q.pA)(i),
            r && (0, Q.De)(i, r),
            i.Body().set_steamid(t || o.L7.steamid),
            s && i.Body().set_clusters_to_return(s),
            i.Body().set_sort(a),
            X.IdentifyClustersFromPlaytime(e.GetServiceTransport(), i).then(
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
            t && (a = e.similar_items().map((e) => $.Z.Get().ReadItem(e, t))),
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
      var Z = a(69338),
        J = a(14826),
        Y = a(76339),
        ee = a(25871),
        te = a(74802),
        ae = a(17547);
      function se(e) {
        const { SteamInterface: t } = e,
          a = _.useRef();
        return (
          a.current || (a.current = new V(t)),
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
            _.createElement(ie, { SimilarityStore: a.current })
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
          [a, s] = _.useState(o.L7.steamid),
          [r, i] = _.useState("10"),
          [n, l] = _.useState(1),
          p = _.useCallback((e) => s(e.currentTarget.value), [s]),
          m = _.useCallback((e) => i(e.currentTarget.value), [i]),
          c = _.useCallback((e) => l(e.data), [l]);
        let d = !1;
        const h = _.useRef(o.L7.steamid),
          u = a && new F.K(a);
        let g;
        u &&
          u.BIsValid() &&
          u.BIsIndividualAccount() &&
          ((h.current = u.ConvertTo64BitString()), (d = !0)),
          r && !isNaN(parseInt(r)) && (g = parseInt(r));
        const f = _.useMemo(() => {
            let e = [];
            for (let t in re) e.push({ data: Number(t), label: re[t] });
            return e;
          }, []),
          b = (function (e, t, a, s = 1, r = null, i = []) {
            const [n, o] = _.useState(null);
            return (
              _.useEffect(() => {
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
            g
          );
        return _.createElement(
          "div",
          null,
          _.createElement(
            C.uT,
            { className: Y.ClusterConfig },
            _.createElement(C.II, {
              label: "SteamID",
              type: "text",
              value: a,
              onChange: p,
              description: !d && "Invalid SteamID",
            }),
            _.createElement(C.II, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: r,
              onChange: m,
            }),
            _.createElement(C.ry, {
              label: "Sort clusters by",
              rgOptions: f,
              selectedOption: n,
              onChange: c,
            })
          ),
          d && !b && _.createElement(Z.V, null),
          b && _.createElement(ne, { rgPlaytimeClusters: b })
        );
      }
      function ne(e) {
        const { rgPlaytimeClusters: t } = e;
        return _.createElement(
          "div",
          null,
          t.map((e) =>
            _.createElement(
              ae.SV,
              { key: e.nClusterID },
              _.createElement(oe, { cluster: e })
            )
          )
        );
      }
      function oe(e) {
        const { cluster: t } = e,
          [a, s] = _.useState(!1),
          r = _.useCallback(() => s(!0), [s]),
          [i, n] = _.useState(!1),
          o = _.useCallback(() => n(!0), [n]);
        return _.createElement(
          te.h,
          { onEnter: o },
          _.createElement(
            "div",
            { className: Y.PlaytimeCluster },
            _.createElement(
              "div",
              { className: Y.ClusterInfo },
              _.createElement("h1", null, "Cluster ", t.nClusterID),
              _.createElement(
                ae.SV,
                null,
                _.createElement(
                  "div",
                  { className: Y.Overview },
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
                    (0, J.vX)(t.rtLastPlayed),
                    " "
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Games played:"),
                    " ",
                    i &&
                      t.rgAppIDsPlayed.map((e) =>
                        _.createElement(
                          _.Fragment,
                          { key: e },
                          _.createElement(pe, { appid: e }),
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
              { className: Y.ClusterMembers },
              _.createElement("h3", null, "Similar titles:"),
              _.createElement(
                ae.SV,
                null,
                _.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map((e, t) =>
                    a || t < 4
                      ? _.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          _.createElement(me, { item: e })
                        )
                      : null
                  )
                )
              ),
              !a &&
                _.createElement(
                  C.zx,
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
          [a] = (0, ee.vs)(t, le);
        return a
          ? _.createElement(
              "a",
              { className: Y.PlayedGame, href: a.GetStorePageURL() },
              a.GetName()
            )
          : null;
      }
      function me(e) {
        const { item: t } = e;
        return _.createElement(
          "a",
          { className: Y.SimilarTitle, href: t.GetStorePageURL() },
          _.createElement("img", {
            src: t.GetAssets().GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName()
        );
      }
      var ce = a(701),
        de = a(36025),
        he = a.n(de),
        ue = a(97277),
        ge = a(26464);
      var _e, fe;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.AccountName = 1)] = "AccountName"),
          (e[(e.EmailCode = 2)] = "EmailCode"),
          (e[(e.TwoFactorCode = 3)] = "TwoFactorCode"),
          (e[(e.Complete = 4)] = "Complete");
      })(_e || (_e = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.InvalidCode = 1)] = "InvalidCode");
        })(fe || (fe = {}));
      class be {
        constructor(e, t) {
          (this.m_strBaseURL = ""),
            (this.m_strOAuthClientID = ""),
            (this.m_fnLoginComplete = null),
            (this.m_bRequestInFlight = !1),
            (this.m_eCurrentStep = _e.AccountName),
            (this.m_strErrorMessage = ""),
            (this.m_strEmailDomain = ""),
            (this.m_strCaptchaURL = ""),
            (this.m_eSteamGuardCodeError = fe.None),
            (this.m_strBaseURL = e),
            (this.m_strOAuthClientID = t),
            (this.m_userFields = {
              strUserName: "",
              strPassword: "",
              strTwoFactorCode: "",
              strEmailAuthCode: "",
              emailSteamID: "",
              gidCaptcha: "",
              strCaptchaText: "",
              bRememberLogin: !1,
            });
        }
        Shutdown() {
          this.m_fnLoginComplete = null;
        }
        SetLoginCompleteCallback(e) {
          this.m_fnLoginComplete = e;
        }
        SetUserName(e) {
          this.m_userFields.strUserName = e;
        }
        GetUserName() {
          return this.m_userFields.strUserName;
        }
        SetPassword(e) {
          this.m_userFields.strPassword = e;
        }
        GetPassword() {
          return this.m_userFields.strPassword;
        }
        SetRememberPassword(e) {
          this.m_userFields.bRememberLogin = e;
        }
        GetRememberPassword() {
          return this.m_userFields.bRememberLogin;
        }
        SetEmailAuthCode(e) {
          this.m_userFields.strEmailAuthCode = e;
        }
        GetEmailAuthCode() {
          return this.m_userFields.strEmailAuthCode;
        }
        GetEmailDomain() {
          return this.m_strEmailDomain;
        }
        SetTwoFactorCode(e) {
          this.m_userFields.strTwoFactorCode = e;
        }
        GetTwoFactorCode() {
          return this.m_userFields.strTwoFactorCode;
        }
        SetCaptchaText(e) {
          this.m_userFields.strCaptchaText = e;
        }
        GetCaptchaText() {
          return this.m_userFields.strCaptchaText;
        }
        IsRequestInFlight() {
          return this.m_bRequestInFlight;
        }
        GetCurrentStep() {
          return this.m_eCurrentStep;
        }
        GetErrorMessage() {
          return this.m_strErrorMessage;
        }
        SetInitialErrorMessage(e) {
          this.m_strErrorMessage = e;
        }
        GetSteamGuardCodeError() {
          return this.m_eSteamGuardCodeError;
        }
        GetCaptchaURL() {
          return this.m_strCaptchaURL;
        }
        DoLogin() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (this.m_bRequestInFlight) return;
            (0, l.z)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = yield (0, ue.He)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields
            );
            (0, l.z)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(e);
            });
          });
        }
        UpdateLoginResult(e) {
          if (!e)
            return (
              console.log("Login timeout"),
              void (this.m_strErrorMessage = (0, J.Xx)(
                "#ConnectionTrouble_FailedToConnect"
              ))
            );
          if (e.login_complete) {
            if (((this.m_eCurrentStep = _e.Complete), this.m_fnLoginComplete)) {
              let t = {
                steamID: e.oauth ? e.oauth.steamid : "",
                strAccountName: e.oauth ? e.oauth.account_name : "",
                strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
              };
              this.m_fnLoginComplete(t);
            }
          } else
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = fe.None),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL("-1"),
                  this.m_eCurrentStep != _e.TwoFactorCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, J.Xx)(
                      "#MobileLogin_IncorrectSteamGuard"
                    )),
                    (this.m_eSteamGuardCodeError = fe.InvalidCode),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = _e.TwoFactorCode))
                : e.captcha_needed && e.captcha_gid
                ? ((this.m_eCurrentStep = _e.AccountName),
                  this.UpdateCaptchaURL(e.captcha_gid))
                : e.emailauth_needed
                ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                  e.emailsteamid &&
                    (this.m_userFields.emailSteamID = e.emailsteamid),
                  this.m_eCurrentStep != _e.EmailCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, J.Xx)(
                      "#MobileLogin_IncorrectSteamGuard"
                    )),
                    (this.m_eSteamGuardCodeError = fe.InvalidCode),
                    (this.m_userFields.strEmailAuthCode = "")),
                  (this.m_eCurrentStep = _e.EmailCode))
                : e.agreement_session_url
                ? (this.Shutdown(),
                  console.log(window.location.href),
                  (window.location.href =
                    e.agreement_session_url + "&redir=" + window.location.href))
                : console.log("Unhandled login error");
        }
        RefreshCaptcha() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = yield (0, ue.p1)(this.m_strBaseURL);
            e ? this.UpdateCaptchaURL(e) : console.log("Failed to get captcha");
          });
        }
        UpdateCaptchaURL(e) {
          (this.m_userFields.gidCaptcha = e),
            (this.m_userFields.strCaptchaText = ""),
            (this.m_strCaptchaURL =
              "-1" != e ? (0, ue.yI)(this.m_strBaseURL, e) : "");
        }
      }
      (0, r.gn)([l.LO], be.prototype, "m_bRequestInFlight", void 0),
        (0, r.gn)([l.LO], be.prototype, "m_userFields", void 0),
        (0, r.gn)([l.LO], be.prototype, "m_eCurrentStep", void 0),
        (0, r.gn)([l.LO], be.prototype, "m_strErrorMessage", void 0),
        (0, r.gn)([l.LO], be.prototype, "m_strEmailDomain", void 0),
        (0, r.gn)([l.LO], be.prototype, "m_strCaptchaURL", void 0),
        (0, r.gn)([l.LO], be.prototype, "m_eSteamGuardCodeError", void 0),
        (0, r.gn)([ge.a], be.prototype, "DoLogin", null),
        (0, r.gn)([l.aD.bound], be.prototype, "UpdateCaptchaURL", null);
      let Se = class extends _.Component {
        constructor(e) {
          super(e),
            (this.m_manager = new be(this.props.baseURL)),
            this.props.onLoginComplete &&
              this.m_manager.SetLoginCompleteCallback(
                this.props.onLoginComplete
              );
        }
        componentWillUnmount() {
          this.m_manager.Shutdown();
        }
        render() {
          let e = this.props,
            { baseURL: t, onLoginComplete: a, className: s } = e,
            i = (0, r._T)(e, ["baseURL", "onLoginComplete", "className"]),
            n = (0, A.Z)(he().LoginDialog, s),
            o = this.m_manager.GetCurrentStep(),
            l = this.m_manager.GetErrorMessage();
          return _.createElement(
            "div",
            Object.assign({ className: n }, i),
            _.createElement(
              "div",
              { className: he().LoginPanelBackground },
              _.createElement(ce.ui7, null)
            ),
            _.createElement(
              "div",
              { className: he().LoginPanelContent },
              l && _.createElement(Ce, { text: l }),
              o == _e.AccountName &&
                _.createElement(ye, {
                  manager: this.m_manager,
                  autoFocus: this.props.autoFocus,
                }),
              o == _e.TwoFactorCode &&
                _.createElement(Ae, {
                  manager: this.m_manager,
                  authtype: _e.TwoFactorCode,
                }),
              o == _e.EmailCode &&
                _.createElement(Ae, {
                  manager: this.m_manager,
                  authtype: _e.EmailCode,
                }),
              o == _e.Complete &&
                _.createElement(
                  "div",
                  { className: he().LoginComplete },
                  _.createElement(Z.V, null)
                )
            )
          );
        }
      };
      function Ce(e) {
        return _.createElement("div", { className: he().ErrorMessage }, e.text);
      }
      Se = (0, r.gn)([E.Pi], Se);
      let ye = class extends _.Component {
        constructor(e) {
          super(e), (this.state = { nNameSize: 0, nPassSize: 0 });
        }
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeName(e) {
          let t = e.target.value || "";
          this.props.manager.SetUserName(e.target.value),
            t.length > 24 && t.length < 39
              ? this.setState({ nNameSize: 1 })
              : t.length > 38
              ? this.setState({ nNameSize: 2 })
              : this.setState({ nNameSize: 0 });
        }
        OnChangePassword(e) {
          let t = e.target.value || "";
          (t = t.replace(/[^\x00-\x7F]/g, "")),
            this.props.manager.SetPassword(t),
            t.length > 19 && t.length < 39
              ? this.setState({ nPassSize: 1 })
              : t.length > 38
              ? this.setState({ nPassSize: 2 })
              : this.setState({ nPassSize: 0 });
        }
        OnChangeRememberPass(e) {
          this.props.manager.SetRememberPassword(e.target.checked);
        }
        render() {
          let e,
            t,
            a = this.props.manager;
          return (
            (t =
              1 == this.state.nPassSize
                ? he().MedPass
                : 2 == this.state.nPassSize
                ? he().LargePass
                : he().DefaultPass),
            (e =
              1 == this.state.nNameSize
                ? he().MedName
                : 2 == this.state.nNameSize
                ? he().LargeName
                : he().DefaultNAme),
            _.createElement(
              "div",
              { className: he().AccountPasswordPanel },
              _.createElement(
                "div",
                { className: he().SigninTitle },
                (0, J.Xx)("#Login_SignIn")
              ),
              _.createElement(
                "form",
                {
                  className: he().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                _.createElement(C.II, {
                  autoFocus: this.props.autoFocus,
                  className: (0, A.Z)(he().AccountNameLabel, e),
                  label: (0, J.Xx)("#Login_AccountName"),
                  type: "text",
                  value: a.GetUserName(),
                  focusOnMount: !0,
                  maxLength: 64,
                  onChange: this.OnChangeName,
                }),
                _.createElement(C.II, {
                  className: (0, A.Z)(he().PasswordDots, t),
                  label: (0, J.Xx)("#Login_Password"),
                  type: "password",
                  autoComplete: "off",
                  maxLength: 64,
                  size: 64,
                  value: a.GetPassword(),
                  onChange: this.OnChangePassword,
                }),
                _.createElement(C.ji, {
                  className: he().RememberMeCheck,
                  label: (0, J.Xx)("#Login_RememberMe"),
                  disabled: !1,
                  onChange: () => this.OnChangeRememberPass,
                  checked: a.GetRememberPassword(),
                }),
                a.GetCaptchaURL() && _.createElement(Ee, { manager: a }),
                _.createElement(
                  C.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, J.Xx)("#Login_SignIn").toLocaleUpperCase()
                )
              ),
              _.createElement(
                "a",
                { className: he().NeedHelpLink, href: o.De.HELP_BASE_URL },
                (0, J.Xx)("#Login_ForgotPassword")
              ),
              _.createElement("div", { className: he().LoginCreateSeperator }),
              _.createElement(
                "div",
                { className: he().SteamUpsellContainer },
                _.createElement(
                  "div",
                  { className: he().SteamUpsell },
                  (0, J.Xx)("#Login_NoSteamAccount")
                ),
                _.createElement(
                  "div",
                  { className: he().CreateAccountLink },
                  _.createElement(
                    "a",
                    { href: `${o.De.STORE_BASE_URL}join/` },
                    (0, J.Xx)("#Login_CreateAccount")
                  )
                )
              )
            )
          );
        }
      };
      (0, r.gn)([p.ak], ye.prototype, "OnSubmit", null),
        (0, r.gn)([p.ak], ye.prototype, "OnChangeName", null),
        (0, r.gn)([p.ak], ye.prototype, "OnChangePassword", null),
        (0, r.gn)([p.ak], ye.prototype, "OnChangeRememberPass", null),
        (ye = (0, r.gn)([E.Pi], ye));
      let Ee = class extends _.Component {
        OnCaptchaText(e) {
          this.props.manager.SetCaptchaText(e.target.value);
        }
        RefreshCaptcha(e) {
          this.props.manager.RefreshCaptcha();
        }
        render() {
          let e = this.props.manager;
          return _.createElement(
            "div",
            { className: he().CaptchaContainer },
            _.createElement(
              "div",
              { className: he().CaptchaBlock },
              _.createElement(
                "div",
                { className: he().CaptchaImageAndInput },
                _.createElement(
                  "div",
                  { className: he().CaptchaImageBox },
                  _.createElement("img", {
                    className: he().CaptchaImage,
                    src: e.GetCaptchaURL(),
                  })
                ),
                _.createElement(C.II, {
                  className: he().CaptchaInput,
                  type: "text",
                  autoComplete: "off",
                  maxLength: 6,
                  value: e.GetCaptchaText(),
                  onChange: this.OnCaptchaText,
                })
              ),
              _.createElement(
                "div",
                { className: he().ErrorMessage },
                (0, J.Xx)("#Login_CaptchaVerification")
              )
            ),
            _.createElement(
              "div",
              null,
              _.createElement(
                "span",
                {
                  className: he().RefreshCaptchaText,
                  onClick: this.RefreshCaptcha,
                },
                (0, J.Xx)("#Login_RefreshCaptcha")
              )
            )
          );
        }
      };
      (0, r.gn)([p.ak], Ee.prototype, "OnCaptchaText", null),
        (0, r.gn)([p.ak], Ee.prototype, "RefreshCaptcha", null),
        (Ee = (0, r.gn)([E.Pi], Ee));
      let Ae = class extends _.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeAuthCode(e) {
          this.props.authtype == _e.TwoFactorCode
            ? this.props.manager.SetTwoFactorCode(e.target.value)
            : this.props.manager.SetEmailAuthCode(e.target.value);
        }
        render() {
          let e,
            t = this.props.manager,
            a = "",
            s = null,
            r = "",
            i = t.GetSteamGuardCodeError() == fe.InvalidCode;
          switch (this.props.authtype) {
            case _e.TwoFactorCode:
              (a = t.GetTwoFactorCode()),
                (s = (0, J.Xx)("#Login_Enter2FA")),
                (e = _.createElement(ce.vT2, null)),
                (r = (0, J.Xx)("#Login_Enter2FAHelp"));
              break;
            case _e.EmailCode:
              (a = t.GetEmailAuthCode()),
                (s = (0, J.kQ)(
                  "#Login_SentSteamguard",
                  _.createElement(
                    "span",
                    { className: he().Highlight },
                    "@",
                    t.GetEmailDomain()
                  )
                )),
                (r = (0, J.Xx)("#Login_EnterSteamguard")),
                (e = _.createElement(ce.wr9, null));
          }
          return _.createElement(
            "div",
            { className: he().AuthenticationPanel },
            _.createElement(C.__, null, (0, J.Xx)("#Login_SigningIn")),
            _.createElement(
              "div",
              { className: he().SigningInAccountName },
              t.GetUserName()
            ),
            _.createElement(C.Ac, null, s),
            _.createElement(
              "div",
              { className: he().AuthenticatorInputcontainer },
              e,
              _.createElement(
                "form",
                {
                  className: he().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                _.createElement(C.II, {
                  className: (0, A.Z)(he().AccountName),
                  label: "Steam Guard Code",
                  type: "text",
                  autoComplete: "off",
                  focusOnMount: !0,
                  maxLength: 64,
                  value: a,
                  onChange: this.OnChangeAuthCode,
                }),
                _.createElement(
                  C.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, J.Xx)("#Login_SteamguardSubmit").toLocaleUpperCase()
                )
              )
            ),
            _.createElement(
              "a",
              {
                className: (0, A.Z)(
                  he().NeedHelpLink,
                  i ? he().NeedHelpHighlight : null
                ),
                href: "http://help.steampowered.com/",
              },
              r
            )
          );
        }
      };
      (0, r.gn)([p.ak], Ae.prototype, "OnSubmit", null),
        (0, r.gn)([p.ak], Ae.prototype, "OnChangeAuthCode", null),
        (Ae = (0, r.gn)([E.Pi], Ae));
      const Ie = [
        {
          path: "similarity",
          render: () => _.createElement(B, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            _.createElement(se, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      let ve = (0, o.kQ)("labs", "application_config"),
        Le = new n.J(o.De.WEBAPI_BASE_URL, ve.webapi_token);
      function we(e) {
        const [t, a] = _.useState(!1),
          r = !!ve.webapi_token;
        if (
          ((0, _.useEffect)(() => {
            g.Init(), a(!0);
          }, []),
          !t)
        )
          return _.createElement("div", { className: S.App });
        const i = { SteamInterface: Le };
        return _.createElement(
          "div",
          { className: S.App },
          _.createElement(
            "div",
            { className: S.Container },
            _.createElement(
              "div",
              { className: S.TopSection },
              _.createElement("div", { className: S.Header }, "Labs Sandbox"),
              _.createElement(
                "div",
                { className: S.Body },
                "Internal testbed page for Steam Labs experiments"
              )
            ),
            _.createElement(
              "div",
              { className: S.Tabs },
              Ie.map((e) =>
                _.createElement(
                  f.OL,
                  {
                    key: e.path,
                    to: `${s.Z.LabsSandbox()}/${e.path}`,
                    className: S.Tab,
                    activeClassName: S.Active,
                  },
                  e.name
                )
              )
            ),
            _.createElement(
              "div",
              { className: S.SandboxSection },
              _.createElement(
                ae.SV,
                null,
                _.createElement(
                  b.rs,
                  null,
                  Ie.map((e, t) =>
                    _.createElement(b.AW, {
                      key: e.path,
                      path: `${s.Z.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || r
                          ? e.render(Object.assign(Object.assign({}, t), i))
                          : _.createElement(Re, null),
                    })
                  )
                )
              )
            )
          )
        );
      }
      function Re() {
        return _.createElement(
          "div",
          null,
          _.createElement("h3", null, "Please login to view this page."),
          _.createElement(Se, {
            baseURL: o.De.STORE_BASE_URL,
            onLoginComplete: () => window.location.reload(),
          })
        );
      }
    },
  },
]);

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2814],
  {
    39042: (e) => {
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
    95184: (e) => {
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
    94344: (e) => {
      e.exports = {
        EntryError: "tagclustering_EntryError_1UGoD",
        ClusterConfig: "tagclustering_ClusterConfig_3Qp2u",
        PlaytimeCluster: "tagclustering_PlaytimeCluster_2qGfq",
        ClusterInfo: "tagclustering_ClusterInfo_20dmp",
        ClusterMembers: "tagclustering_ClusterMembers_VeQtF",
        SimilarTitle: "tagclustering_SimilarTitle_gRxJT",
      };
    },
    25871: (e, t, a) => {
      "use strict";
      a.d(t, {
        Vm: () => u,
        Y0: () => s,
        ie: () => h,
        jk: () => m,
        oA: () => S,
        vs: () => d,
        wZ: () => g,
      });
      var s,
        n = a(52868),
        r = a.n(n),
        i = a(89526),
        o = (a(24174), a(42735)),
        l = a(68562),
        p = a(4306),
        c = a(92616);
      function m(e, t, a, n) {
        const l = (0, i.useRef)(),
          m = (0, i.useRef)(void 0),
          d = (0, p.NW)();
        l.current = e;
        const [h, u] = (0, i.useState)(void 0),
          {
            include_assets: _,
            include_release: g,
            include_platforms: S,
            include_all_purchase_options: C,
            include_screenshots: E,
            include_trailers: f,
            include_ratings: b,
            include_tag_count: v,
            include_reviews: y,
            include_basic_info: L,
            include_supported_languages: I,
            include_full_description: A,
            include_included_items: N,
          } = a;
        if (
          ((0, i.useEffect)(() => {
            const a = {
              include_assets: _,
              include_release: g,
              include_platforms: S,
              include_all_purchase_options: C,
              include_screenshots: E,
              include_trailers: f,
              include_ratings: b,
              include_tag_count: v,
              include_reviews: y,
              include_basic_info: L,
              include_supported_languages: I,
              include_full_description: A,
              include_included_items: N,
            };
            let s = null;
            return (
              !e ||
                c.Z.Get().BHasStoreItem(e, t, a) ||
                (void 0 !== h && n && n == m.current) ||
                (n !== m.current && (u(void 0), (m.current = n)),
                (s = r().CancelToken.source()),
                c.Z.Get()
                  .QueueStoreItemRequest(e, t, a)
                  .then((t) => {
                    s.token.reason ||
                      l.current !== e ||
                      u(t == o.s.k_EResultOK),
                      d();
                  })),
              () => s && s.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, n, h, _, g, S, C, E, f, b, v, y, L, I, A, N, d]),
          !e)
        )
          return [null, s.k_EStoreItemCacheState_Unavailable];
        if (!1 === h) return [void 0, s.k_EStoreItemCacheState_Unavailable];
        if (c.Z.Get().BIsStoreItemMissing(e, t))
          return [void 0, s.k_EStoreItemCacheState_Unavailable];
        if (!c.Z.Get().BHasStoreItem(e, t, a))
          return [void 0, s.k_EStoreItemCacheState_Loading];
        const k = c.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return k
          ? [k, s.k_EStoreItemCacheState_Found]
          : [null, s.k_EStoreItemCacheState_Unavailable];
      }
      function d(e, t, a) {
        return m(e, l.vn.k_EStoreItemType_App, t, a);
      }
      function h(e, t, a) {
        return m(e, l.vn.k_EStoreItemType_Package, t, a);
      }
      function u(e, t, a) {
        const [s, n] = m(e, t, a),
          [o, p] = (0, i.useState)(null),
          [c, h] = d(o, a);
        return (
          (0, i.useEffect)(() => {
            var e;
            const t = r().CancelToken.source();
            if (
              (null == s ? void 0 : s.GetStoreItemType()) ==
                l.vn.k_EStoreItemType_Package &&
              1 == (null == s ? void 0 : s.GetIncludedAppIDs().length)
            ) {
              const a = s.GetIncludedAppIDs()[0];
              o != a &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  p(a));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [o, s]),
          o ? [c, h] : [s, n]
        );
      }
      function _(e, t, a, n) {
        const o = (0, p.NW)(),
          {
            include_assets: l,
            include_release: m,
            include_platforms: d,
            include_all_purchase_options: h,
            include_screenshots: u,
            include_trailers: _,
            include_ratings: g,
            include_tag_count: S,
            include_reviews: C,
            include_basic_info: E,
            include_supported_languages: f,
            include_full_description: b,
            include_included_items: v,
          } = a;
        if (
          ((0, i.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const a = {
                include_assets: l,
                include_release: m,
                include_platforms: d,
                include_all_purchase_options: h,
                include_screenshots: u,
                include_trailers: _,
                include_ratings: g,
                include_tag_count: S,
                include_reviews: C,
                include_basic_info: E,
                include_supported_languages: f,
                include_full_description: b,
                include_included_items: v,
              },
              s = e.filter(
                (e) =>
                  !(
                    c.Z.Get().BHasStoreItem(e, t, a) ||
                    c.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == s.length) return;
            const n = r().CancelToken.source(),
              i = s.map((e) => c.Z.Get().QueueStoreItemRequest(e, t, a));
            return (
              Promise.all(i).then(() => {
                n.token.reason || o();
              }),
              () => n.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, n, o, l, m, d, h, u, _, g, S, C, E, f, b, v]),
          !e)
        )
          return s.k_EStoreItemCacheState_Unavailable;
        if (
          !e.every(
            (e) =>
              c.Z.Get().BHasStoreItem(e, t, a) ||
              c.Z.Get().BIsStoreItemMissing(e, t),
          )
        )
          return s.k_EStoreItemCacheState_Loading;
        return e.every((e) =>
          c.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? s.k_EStoreItemCacheState_Found
          : s.k_EStoreItemCacheState_Unavailable;
      }
      function g(e, t, a) {
        return _(e, l.vn.k_EStoreItemType_App, t, a);
      }
      function S() {
        i.useEffect(
          () => (
            c.Z.Get().SetReturnUnavailableItems(!0),
            () => c.Z.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
      !(function (e) {
        (e[(e.k_EStoreItemCacheState_Loading = 1)] =
          "k_EStoreItemCacheState_Loading"),
          (e[(e.k_EStoreItemCacheState_Unavailable = 2)] =
            "k_EStoreItemCacheState_Unavailable"),
          (e[(e.k_EStoreItemCacheState_Found = 3)] =
            "k_EStoreItemCacheState_Found");
      })(s || (s = {}));
    },
    88930: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => _e });
      var s = a(96927),
        n = a(33940),
        r = a(58961),
        i = a(19094),
        o = a(32765),
        l = a(50265),
        p = a(4306),
        c = a(52868),
        m = a.n(c);
      class d {
        constructor() {
          this.rgModelNames = [];
        }
        Init() {
          r.Q8.Init(new i.J(o.De.WEBAPI_BASE_URL, o.L7.webapi_token));
          const e = `${o.De.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
          m()
            .get(e)
            .then((e) => {
              if (e.data) {
                let t = [];
                for (const a of e.data) "default" != a && t.push(a);
                t.sort(), (t = ["default", ...t]), (this.rgModelNames = t);
              }
            });
        }
        ComputePathBetweenApps(e, t, a, s, r, i, o) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const l = Math.acos(a);
            let p = new u(
                (e) =>
                  (0, n.mG)(this, void 0, void 0, function* () {
                    let t = yield this.GetNeighbors(e),
                      a = [];
                    for (let e = 0; e < t.length; e++) {
                      const n = t[e];
                      if (
                        (!s || a.length > s) &&
                        (n.cost > l || (r && a.length >= r))
                      )
                        break;
                      a.push(n);
                    }
                    return a;
                  }),
                this.EstimateCosts,
                (e, t) => e == t,
                o,
              ),
              c = yield p.FindPath(e, t, i || 10);
            if (c.path) {
              let e = [],
                t = 0;
              for (let a = 0; a < c.path.length; a++) {
                const s = c.path[a],
                  n = s.cost - t;
                (t = s.cost),
                  e.push({ appid: s.node, similarity: Math.cos(n) });
              }
              return e;
            }
            throw new Error("Unable to compute path.");
          });
        }
        GetNeighbors(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = `${o.De.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let a = yield m().get(t),
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = `${
              o.De.STORE_BASE_URL
            }labs/ajaxgetappsimilarities?appidtarget=${t}&${e
              .map((e) => "appid[]=" + e.toString())
              .join("&")}`;
            let s = yield m().get(a);
            if (s.data && s.data.similarity_scores)
              return s.data.similarity_scores.map((e) =>
                Math.acos(parseFloat(e)),
              );
            throw new Error("Unable to fetch cost estimates");
          });
        }
      }
      (0, n.gn)([l.LO], d.prototype, "rgModelNames", void 0),
        (0, n.gn)([p.ak], d.prototype, "GetNeighbors", null),
        (0, n.gn)([p.ak], d.prototype, "EstimateCosts", null);
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            let s = new h((e, t) => e.cost - t.cost),
              n = new Set();
            s.Push({ node: e, cost: 0 });
            let r = new Map(),
              i = new Map(),
              o = new Map(),
              l = (yield this.m_fnEstimateCosts([e], t))[0];
            r.set(e, l), i.set(e, 0);
            let p = 0;
            for (; s.length > 0 && p < a; ) {
              let e = s.Pop();
              if (this.m_fnEquality(e.node, t)) {
                let t = [],
                  a = e.node;
                for (; o.has(a); ) t.push(a), (a = o.get(a));
                let s = [];
                for (let e = t.length - 1; e >= 0; e--)
                  s.push({ node: t[e], cost: i.get(t[e]) });
                return { path: s };
              }
              n.add(e.node);
              let a = yield this.m_fnGetNeighbors(e.node);
              if (a.length > 0) {
                let l = yield this.m_fnEstimateCosts(
                  a.map((e) => e.node),
                  t,
                );
                if (l.length != a.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding.",
                    ),
                    {}
                  );
                let p = i.get(e.node);
                for (let t = 0; t < a.length; t++) {
                  const c = a[t];
                  let m = p + c.cost;
                  if (
                    (!i.has(c.node) || m < i.get(c.node)) &&
                    (o.set(c.node, e.node),
                    i.set(c.node, m),
                    r.set(c.node, c.cost + l[t]),
                    !n.has(c.node))
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
      const _ = new d();
      window.g_LabsSandbox = _;
      var g = a(89526),
        S = a(565),
        C = a(59934),
        E = a(95184),
        f = a(57605),
        b = a(63903),
        v = a(88464),
        y = a(19304);
      class L extends g.Component {
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
              (r.Q8.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(
                () => {
                  r.Q8.GetAppInfo(this.props.appidInitial);
                  this.setState({
                    appid: this.props.appidInitial,
                    appinfo: r.Q8.GetAppInfo(this.props.appidInitial),
                  });
                },
              ),
              (this.state.appid = this.props.appidInitial));
        }
        OnDisplayClicked() {
          this.setState({ mode: "select" });
        }
        UpdateAppSuggestions(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const t = e.target.value && e.target.value.trim();
            (null == t ? void 0 : t.length)
              ? (window.clearTimeout(this.m_currentRequest),
                (this.m_currentRequest = window.setTimeout(
                  () =>
                    (0, n.mG)(this, void 0, void 0, function* () {
                      var e;
                      const a = {
                          cc: o.De.COUNTRY,
                          l: o.De.LANGUAGE,
                          realm: b.IN.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: t.replace(" ", "+"),
                          require_type: "game",
                          excluded_tags: [],
                          excluded_content_descriptors: [],
                        },
                        s = `${o.De.STORE_BASE_URL}search/suggest`,
                        n = yield m().get(s, {
                          params: a,
                          withCredentials: !0,
                        });
                      let r;
                      (r = (
                        null === (e = null == n ? void 0 : n.data) ||
                        void 0 === e
                          ? void 0
                          : e.length
                      )
                        ? n.data.map((e) =>
                            g.createElement(
                              "div",
                              {
                                className: E.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              g.createElement("img", {
                                src: e.img,
                                className: E.LogoImage,
                              }),
                              g.createElement(
                                "div",
                                { className: E.AppName },
                                e.name +
                                  (this.props.showAppIds ? ` (${e.id})` : ""),
                              ),
                            ),
                          )
                        : []),
                        this.setState({ strSearch: t, rgSuggestions: r });
                    }),
                  250,
                )))
              : this.setState({ strSearch: "", rgSuggestions: null });
          });
        }
        SetSelectedApp(e) {
          e && 0 != e
            ? r.Q8.EnsureAppInfoForAppIDs([e]).then(() => {
                r.Q8.GetAppInfo(e);
                this.setState({
                  appid: e,
                  appinfo: r.Q8.GetAppInfo(e),
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
              : E.AppSelector;
          let s = null;
          const n = g.createElement(f.II, {
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
            s = g.createElement(
              "div",
              { className: E.AppDisplay },
              this.state.appinfo &&
                g.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: E.LogoImage,
                }),
              g.createElement("div", { className: E.AppName }, e),
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            s = g.createElement(
              "div",
              { className: E.AppSelect },
              n,
              e &&
                g.createElement(
                  "div",
                  { className: E.Suggestions },
                  this.state.rgSuggestions,
                ),
            );
          }
          return g.createElement(
            "div",
            {
              className: a,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
            },
            s,
          );
        }
      }
      (0, n.gn)([p.ak], L.prototype, "OnDisplayClicked", null),
        (0, n.gn)([p.ak], L.prototype, "UpdateAppSuggestions", null),
        (0, n.gn)([p.ak], L.prototype, "OnKeyUp", null);
      class I extends g.Component {
        render() {
          if (0 == this.props.appid)
            return g.createElement("div", { className: E.SimilarApp });
          {
            const e = r.Q8.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return g.createElement("div", { className: E.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                g.createElement("div", {
                  className: E.Spacer,
                  key: "score-spacer",
                }),
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                g.createElement(
                  "div",
                  { className: E.Score, key: "score-value" },
                  e,
                ),
              );
            }
            const a = e.name + " (" + this.props.appid.toString() + ")",
              s = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return g.createElement(
              "div",
              { className: E.SimilarApp, onClick: () => s(this.props.appid) },
              g.createElement("img", {
                src: e.header_image_url,
                className: E.LogoImage,
              }),
              g.createElement("div", { className: E.AppName }, a),
              t,
            );
          }
        }
      }
      class A extends g.Component {
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
              a = `${o.De.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
            m()
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
          return g.createElement(
            "div",
            { className: E.LabsSimilarity },
            g.createElement(L, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            g.createElement("div", { className: E.HorizontalSpacer }),
            g.createElement("div", { className: E.Score }, e),
            g.createElement("div", { className: E.HorizontalSpacer }),
            g.createElement(L, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            }),
          );
        }
      }
      (0, n.gn)([p.ak], A.prototype, "OnAppSelected", null);
      let N = class extends g.Component {
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
                    e.data.similar_appids.slice(0, this.props.max_similar),
                  );
                  t.add(e.data.appid),
                    r.Q8.EnsureAppInfoForAppIDs(t).then(() => {
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
            this.props.max_similar,
          );
          for (e = 0; e < a; e++) {
            const a = this.similar_apps[e],
              s = this.similarity_scores[e];
            t.push(
              g.createElement(I, {
                appid: a,
                score: s,
                key: a,
                fnOnSelected: this.SetSelectedApp,
              }),
            );
          }
          let s = [];
          for (const e of _.rgModelNames) {
            let t = { label: g.createElement("div", { key: e }, e), data: e };
            s.push(t);
          }
          return g.createElement(
            "div",
            { className: E.LabsSimilarGames },
            g.createElement(f.ry, {
              rgOptions: s,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.createElement("h1", null, "Games similar to:"),
            g.createElement(L, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            g.createElement("div", { className: E.SimilarApps }, t),
          );
        }
      };
      (0, n.gn)([l.LO], N.prototype, "selected_app", void 0),
        (0, n.gn)([l.LO], N.prototype, "similar_apps", void 0),
        (0, n.gn)([l.LO], N.prototype, "similarity_scores", void 0),
        (0, n.gn)([l.LO], N.prototype, "similarity_model", void 0),
        (0, n.gn)([p.ak], N.prototype, "OnSelectedApp", null),
        (0, n.gn)([p.ak], N.prototype, "SetSelectedApp", null),
        (0, n.gn)([p.ak], N.prototype, "OnModelChanged", null),
        (N = (0, n.gn)([v.Pi], N));
      let k = class extends g.Component {
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
            { className: E.Operand },
            g.createElement(
              "div",
              { className: E.OperatorSelect },
              g.createElement(f.ry, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              }),
            ),
            g.createElement(L, { fnOnSelection: this.OnSelectedApp }),
          );
        }
      };
      (0, n.gn)([l.LO], k.prototype, "selected_app", void 0),
        (0, n.gn)([l.LO], k.prototype, "selected_operator", void 0),
        (0, n.gn)([p.ak], k.prototype, "OnSelectedApp", null),
        (0, n.gn)([p.ak], k.prototype, "OnSelectedOperator", null),
        (k = (0, n.gn)([v.Pi], k));
      let O = class extends g.Component {
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
              "&",
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
                for (let a = 1; a < this.operands.length; a++) {
                  const s = e.data[a].components.map((e) => parseFloat(e));
                  "Plus" == this.operands[a].operator
                    ? (t = t.map((e, t) => e + s[t]))
                    : "Minus" == this.operands[a].operator
                    ? (t = t.map((e, t) => e - s[t]))
                    : console.log(
                        "Unexpected operator " + this.operands[a].operator,
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
                  m()
                    .get(a)
                    .then((e) => {
                      let t = new Set(
                        e.data.similar_appids.slice(0, this.props.max_similar),
                      );
                      r.Q8.EnsureAppInfoForAppIDs(t).then(() => {
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
            let a = { label: g.createElement("div", { key: t }, t), data: t };
            e.push(a);
          }
          let t = [],
            a = 0;
          for (const e of this.operands)
            t.push(
              g.createElement(k, {
                app: e.app,
                operator: e.operator,
                key: a,
                fnOnChange: this.OnOperandChanged,
                ref: this.operand_refs[a],
              }),
            ),
              a++;
          let s = null;
          this.operands.length < this.props.max_operands &&
            (s = g.createElement(
              "div",
              { className: E.AddOperand, onClick: this.OnAddOperand },
              "+",
            ));
          let n = [];
          const r = Math.min(
            this.similar_apps.length,
            this.similarity_scores.length,
            this.props.max_similar,
          );
          for (let e = 0; e < r; e++) {
            const t = this.similar_apps[e],
              a = this.similarity_scores[e];
            n.push(g.createElement(I, { appid: t, score: a, key: t }));
          }
          return g.createElement(
            "div",
            { className: E.LabsMixer },
            g.createElement(f.ry, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.createElement("h1", null, "Mixture"),
            t,
            s,
            g.createElement("h1", null, "Games similar to mixture"),
            g.createElement("div", { className: E.SimilarApps }, n),
          );
        }
      };
      (0, n.gn)([l.LO], O.prototype, "operands", void 0),
        (0, n.gn)([l.LO], O.prototype, "similarity_model", void 0),
        (0, n.gn)([l.LO], O.prototype, "similar_apps", void 0),
        (0, n.gn)([l.LO], O.prototype, "similarity_scores", void 0),
        (0, n.gn)([p.ak], O.prototype, "OnModelChanged", null),
        (0, n.gn)([p.ak], O.prototype, "OnAddOperand", null),
        (0, n.gn)([p.ak], O.prototype, "OnOperandChanged", null),
        (O = (0, n.gn)([v.Pi], O));
      let P = class extends g.Component {
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
              this.IterationCallback,
            )
              .then((e) => {
                (this.in_progress = !1),
                  r.Q8.EnsureAppInfoForAppIDs(e.map((e) => e.appid)).then(
                    () => {
                      this.found_path = e;
                    },
                  );
              })
              .catch((e) => {
                console.warn(
                  "Caught pathfinding failure because: " + e.toString(),
                ),
                  (this.in_progress = !1),
                  (this.found_path = void 0);
              }));
        }
        OnSelectedStartApp(e) {
          r.Q8.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_start = e;
          });
        }
        OnSelectedEndApp(e) {
          r.Q8.EnsureAppInfoForAppIDs([e]).then(() => {
            this.app_end = e;
          });
        }
        render() {
          const e =
              0 != this.app_start &&
              0 != this.app_end &&
              !this.in_progress &&
              this.app_start != this.app_end,
            t = e ? E.ComputeButton : (0, y.Z)(E.ComputeButton, E.Disable);
          let a = null;
          a = this.in_progress
            ? g.createElement(
                "div",
                { className: E.ProgressMessage },
                "Finding path, step " + this.progress_iteration,
              )
            : this.found_path
            ? g.createElement(
                "div",
                { className: E.ProgressMessage },
                "Found path",
              )
            : g.createElement(
                "div",
                { className: E.ProgressMessage },
                "No path found",
              );
          let s = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              s.push(
                g.createElement(I, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                }),
              );
            }
          return g.createElement(
            "div",
            { className: E.LabsPathfinder },
            g.createElement(
              "div",
              { className: E.SelectEndpoints },
              g.createElement(L, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              g.createElement(L, {
                fnOnSelection: this.OnSelectedEndApp,
                strPrompt: "Select end game",
              }),
            ),
            g.createElement(
              "div",
              { className: t, onClick: e ? this.Pathfind : () => {} },
              "Pathfind!",
            ),
            a,
            g.createElement("div", { className: E.Path }, s),
          );
        }
      };
      function x() {
        return g.createElement(
          g.Fragment,
          null,
          g.createElement("h1", null, "Similar Games"),
          g.createElement(N, { max_similar: 10 }),
          g.createElement("div", { className: E.Spacer }),
          g.createElement("h1", null, "Similarity"),
          g.createElement(A, null),
          g.createElement("div", { className: E.Spacer }),
          g.createElement("h1", null, "Mixer"),
          g.createElement(O, { max_similar: 10, max_operands: 6 }),
          g.createElement("div", { className: E.Spacer }),
          g.createElement("h1", null, "Pathfinder"),
          g.createElement(P, null),
        );
      }
      (0, n.gn)([l.LO], P.prototype, "app_start", void 0),
        (0, n.gn)([l.LO], P.prototype, "app_end", void 0),
        (0, n.gn)([l.LO], P.prototype, "in_progress", void 0),
        (0, n.gn)([l.LO], P.prototype, "progress_iteration", void 0),
        (0, n.gn)([l.LO], P.prototype, "found_path", void 0),
        (0, n.gn)([p.ak], P.prototype, "IterationCallback", null),
        (0, n.gn)([p.ak], P.prototype, "Pathfind", null),
        (0, n.gn)([p.ak], P.prototype, "OnSelectedStartApp", null),
        (0, n.gn)([p.ak], P.prototype, "OnSelectedEndApp", null),
        (P = (0, n.gn)([v.Pi], P));
      var w = a(47165),
        R = a(85246),
        F = a(67328),
        G = a(83818),
        M = a(11195),
        U = a(92616);
      class T {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        LoadPlaytimeClusters(e, t, a, s) {
          return new D(this.m_SteamInterface, e, t, a, s);
        }
      }
      class D {
        constructor(e, t, a, s, n) {
          this.m_callbacksLoaded = new R.pB();
          const r = F.gA.Init(G.JA);
          (0, M.pA)(r),
            n && (0, M.De)(r, n),
            r.Body().set_steamid(t || o.L7.steamid),
            s && r.Body().set_clusters_to_return(s),
            r.Body().set_sort(a),
            G.qI
              .IdentifyClustersFromPlaytime(e.GetServiceTransport(), r)
              .then((e) => {
                const t = e.Body();
                this.m_rgClusters = [];
                for (const e of t.clusters())
                  this.m_rgClusters.push(this.ReadCluster(e, n));
                this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
              });
        }
        ReadCluster(e, t) {
          let a;
          return (
            t && (a = e.similar_items().map((e) => U.Z.Get().ReadItem(e, t))),
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
      var B = a(3301),
        H = a(14826),
        q = a(94344),
        z = a(25871),
        $ = a(74802),
        Z = a(17547);
      function Q(e) {
        const { SteamInterface: t } = e,
          a = g.useRef();
        return (
          a.current || (a.current = new T(t)),
          g.createElement(
            g.Fragment,
            null,
            g.createElement(
              "div",
              null,
              g.createElement(
                "p",
                null,
                "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.",
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
                  "browse the cluster data graphically",
                ),
                " (requires Rack VPN).",
              ),
            ),
            g.createElement(j, { SimilarityStore: a.current }),
          )
        );
      }
      const X = {
        [G.Y5.k_EClustersFromPlaytimeSort_MostPlaytime]: "Total Playtime",
        [G.Y5.k_EClustersFromPlaytimeSort_MostGames]: "Number of Played Games",
        [G.Y5.k_EClustersFromPlaytimeSort_MostRecent]: "Most Recently Played",
      };
      function j(e) {
        const { SimilarityStore: t } = e,
          [a, s] = g.useState(o.L7.steamid),
          [n, r] = g.useState("10"),
          [i, l] = g.useState(G.Y5.k_EClustersFromPlaytimeSort_MostRecent),
          p = g.useCallback((e) => s(e.currentTarget.value), [s]),
          c = g.useCallback((e) => r(e.currentTarget.value), [r]),
          m = g.useCallback((e) => l(e.data), [l]);
        let d = !1;
        const h = g.useRef(o.L7.steamid),
          u = a && new w.K(a);
        let _;
        u &&
          u.BIsValid() &&
          u.BIsIndividualAccount() &&
          ((h.current = u.ConvertTo64BitString()), (d = !0)),
          n && !isNaN(parseInt(n)) && (_ = parseInt(n));
        const S = g.useMemo(() => {
            let e = [];
            for (let t in X) e.push({ data: Number(t), label: X[t] });
            return e;
          }, []),
          C = (function (
            e,
            t,
            a,
            s = G.Y5.k_EClustersFromPlaytimeSort_MostRecent,
            n = null,
            r = [],
          ) {
            const [i, o] = g.useState(null);
            return (
              g.useEffect(() => {
                if ((o(null), a))
                  return e
                    .LoadPlaytimeClusters(a, s, n, t)
                    .RegisterOnReadyCallback(o).Unregister;
              }, [a, s, n, ...r]),
              i
            );
          })(
            t,
            { include_assets: !0, include_basic_info: !0 },
            h.current,
            i,
            _,
          );
        return g.createElement(
          "div",
          null,
          g.createElement(
            f.uT,
            { className: q.ClusterConfig },
            g.createElement(f.II, {
              label: "SteamID",
              type: "text",
              value: a,
              onChange: p,
              description: !d && "Invalid SteamID",
            }),
            g.createElement(f.II, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: n,
              onChange: c,
            }),
            g.createElement(f.ry, {
              label: "Sort clusters by",
              rgOptions: S,
              selectedOption: i,
              onChange: m,
            }),
          ),
          d && !C && g.createElement(B.V, null),
          C && g.createElement(V, { rgPlaytimeClusters: C }),
        );
      }
      function V(e) {
        const { rgPlaytimeClusters: t } = e;
        return g.createElement(
          "div",
          null,
          t.map((e) =>
            g.createElement(
              Z.SV,
              { key: e.nClusterID },
              g.createElement(W, { cluster: e }),
            ),
          ),
        );
      }
      function W(e) {
        const { cluster: t } = e,
          [a, s] = g.useState(!1),
          n = g.useCallback(() => s(!0), [s]),
          [r, i] = g.useState(!1),
          o = g.useCallback(() => i(!0), [i]);
        return g.createElement(
          $.h,
          { onEnter: o },
          g.createElement(
            "div",
            { className: q.PlaytimeCluster },
            g.createElement(
              "div",
              { className: q.ClusterInfo },
              g.createElement("h1", null, "Cluster ", t.nClusterID),
              g.createElement(
                Z.SV,
                null,
                g.createElement(
                  "div",
                  { className: q.Overview },
                  g.createElement(
                    "div",
                    null,
                    g.createElement("b", null, "Total Playtime:"),
                    " ",
                    Math.floor(t.nPlaytimeMinutes / 6) / 10,
                    "hr",
                  ),
                  g.createElement(
                    "div",
                    null,
                    g.createElement("b", null, "Last Played:"),
                    " ",
                    (0, H.vX)(t.rtLastPlayed),
                    " ",
                  ),
                  g.createElement(
                    "div",
                    null,
                    g.createElement("b", null, "Games played:"),
                    " ",
                    r &&
                      t.rgAppIDsPlayed.map((e) =>
                        g.createElement(
                          g.Fragment,
                          { key: e },
                          g.createElement(Y, { appid: e }),
                          ", ",
                        ),
                      ),
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
                      "(?)",
                    ),
                  ),
                ),
              ),
            ),
            g.createElement(
              "div",
              { className: q.ClusterMembers },
              g.createElement("h3", null, "Similar titles:"),
              g.createElement(
                Z.SV,
                null,
                g.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map((e, t) =>
                    a || t < 4
                      ? g.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          g.createElement(J, { item: e }),
                        )
                      : null,
                  ),
                ),
              ),
              !a &&
                g.createElement(
                  f.zx,
                  { onClick: n },
                  "Show all ",
                  t.rgSimilarItems.length,
                ),
            ),
          ),
        );
      }
      const K = {};
      function Y(e) {
        const { appid: t } = e,
          [a] = (0, z.vs)(t, K);
        return a
          ? g.createElement(
              "a",
              { className: q.PlayedGame, href: a.GetStorePageURL() },
              a.GetName(),
            )
          : null;
      }
      function J(e) {
        const { item: t } = e;
        return g.createElement(
          "a",
          { className: q.SimilarTitle, href: t.GetStorePageURL() },
          g.createElement("img", {
            src: t.GetAssets().GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName(),
        );
      }
      var ee = a(701),
        te = a(39042),
        ae = a.n(te),
        se = a(97277),
        ne = a(26464);
      var re, ie;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.AccountName = 1)] = "AccountName"),
          (e[(e.EmailCode = 2)] = "EmailCode"),
          (e[(e.TwoFactorCode = 3)] = "TwoFactorCode"),
          (e[(e.Complete = 4)] = "Complete");
      })(re || (re = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.InvalidCode = 1)] = "InvalidCode");
        })(ie || (ie = {}));
      class oe {
        constructor(e, t) {
          (this.m_strBaseURL = ""),
            (this.m_strOAuthClientID = ""),
            (this.m_fnLoginComplete = null),
            (this.m_bRequestInFlight = !1),
            (this.m_eCurrentStep = re.AccountName),
            (this.m_strErrorMessage = ""),
            (this.m_strEmailDomain = ""),
            (this.m_strCaptchaURL = ""),
            (this.m_eSteamGuardCodeError = ie.None),
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_bRequestInFlight) return;
            (0, l.z)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = yield (0, se.He)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields,
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
              void (this.m_strErrorMessage = (0, H.Xx)(
                "#ConnectionTrouble_FailedToConnect",
              ))
            );
          if (e.login_complete) {
            if (((this.m_eCurrentStep = re.Complete), this.m_fnLoginComplete)) {
              let t = {
                steamID: e.oauth ? e.oauth.steamid : "",
                strAccountName: e.oauth ? e.oauth.account_name : "",
                strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
              };
              this.m_fnLoginComplete(t);
            }
          } else
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = ie.None),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL("-1"),
                  this.m_eCurrentStep != re.TwoFactorCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, H.Xx)(
                      "#MobileLogin_IncorrectSteamGuard",
                    )),
                    (this.m_eSteamGuardCodeError = ie.InvalidCode),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = re.TwoFactorCode))
                : e.captcha_needed && e.captcha_gid
                ? ((this.m_eCurrentStep = re.AccountName),
                  this.UpdateCaptchaURL(e.captcha_gid))
                : e.emailauth_needed
                ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                  e.emailsteamid &&
                    (this.m_userFields.emailSteamID = e.emailsteamid),
                  this.m_eCurrentStep != re.EmailCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, H.Xx)(
                      "#MobileLogin_IncorrectSteamGuard",
                    )),
                    (this.m_eSteamGuardCodeError = ie.InvalidCode),
                    (this.m_userFields.strEmailAuthCode = "")),
                  (this.m_eCurrentStep = re.EmailCode))
                : e.agreement_session_url
                ? (this.Shutdown(),
                  console.log(window.location.href),
                  (window.location.href =
                    e.agreement_session_url + "&redir=" + window.location.href))
                : console.log("Unhandled login error");
        }
        RefreshCaptcha() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let e = yield (0, se.p1)(this.m_strBaseURL);
            e ? this.UpdateCaptchaURL(e) : console.log("Failed to get captcha");
          });
        }
        UpdateCaptchaURL(e) {
          (this.m_userFields.gidCaptcha = e),
            (this.m_userFields.strCaptchaText = ""),
            (this.m_strCaptchaURL =
              "-1" != e ? (0, se.yI)(this.m_strBaseURL, e) : "");
        }
      }
      (0, n.gn)([l.LO], oe.prototype, "m_bRequestInFlight", void 0),
        (0, n.gn)([l.LO], oe.prototype, "m_userFields", void 0),
        (0, n.gn)([l.LO], oe.prototype, "m_eCurrentStep", void 0),
        (0, n.gn)([l.LO], oe.prototype, "m_strErrorMessage", void 0),
        (0, n.gn)([l.LO], oe.prototype, "m_strEmailDomain", void 0),
        (0, n.gn)([l.LO], oe.prototype, "m_strCaptchaURL", void 0),
        (0, n.gn)([l.LO], oe.prototype, "m_eSteamGuardCodeError", void 0),
        (0, n.gn)([ne.a], oe.prototype, "DoLogin", null),
        (0, n.gn)([l.aD.bound], oe.prototype, "UpdateCaptchaURL", null);
      let le = class extends g.Component {
        constructor(e) {
          super(e),
            (this.m_manager = new oe(this.props.baseURL)),
            this.props.onLoginComplete &&
              this.m_manager.SetLoginCompleteCallback(
                this.props.onLoginComplete,
              );
        }
        componentWillUnmount() {
          this.m_manager.Shutdown();
        }
        render() {
          let e = this.props,
            { baseURL: t, onLoginComplete: a, className: s } = e,
            r = (0, n._T)(e, ["baseURL", "onLoginComplete", "className"]),
            i = (0, y.Z)(ae().LoginDialog, s),
            o = this.m_manager.GetCurrentStep(),
            l = this.m_manager.GetErrorMessage();
          return g.createElement(
            "div",
            Object.assign({ className: i }, r),
            g.createElement(
              "div",
              { className: ae().LoginPanelBackground },
              g.createElement(ee.ui7, null),
            ),
            g.createElement(
              "div",
              { className: ae().LoginPanelContent },
              l && g.createElement(pe, { text: l }),
              o == re.AccountName &&
                g.createElement(ce, {
                  manager: this.m_manager,
                  autoFocus: this.props.autoFocus,
                }),
              o == re.TwoFactorCode &&
                g.createElement(de, {
                  manager: this.m_manager,
                  authtype: re.TwoFactorCode,
                }),
              o == re.EmailCode &&
                g.createElement(de, {
                  manager: this.m_manager,
                  authtype: re.EmailCode,
                }),
              o == re.Complete &&
                g.createElement(
                  "div",
                  { className: ae().LoginComplete },
                  g.createElement(B.V, null),
                ),
            ),
          );
        }
      };
      function pe(e) {
        return g.createElement("div", { className: ae().ErrorMessage }, e.text);
      }
      le = (0, n.gn)([v.Pi], le);
      let ce = class extends g.Component {
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
                ? ae().MedPass
                : 2 == this.state.nPassSize
                ? ae().LargePass
                : ae().DefaultPass),
            (e =
              1 == this.state.nNameSize
                ? ae().MedName
                : 2 == this.state.nNameSize
                ? ae().LargeName
                : ae().DefaultNAme),
            g.createElement(
              "div",
              { className: ae().AccountPasswordPanel },
              g.createElement(
                "div",
                { className: ae().SigninTitle },
                (0, H.Xx)("#Login_SignIn"),
              ),
              g.createElement(
                "form",
                {
                  className: ae().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                g.createElement(f.II, {
                  autoFocus: this.props.autoFocus,
                  className: (0, y.Z)(ae().AccountNameLabel, e),
                  label: (0, H.Xx)("#Login_AccountName"),
                  type: "text",
                  value: a.GetUserName(),
                  focusOnMount: !0,
                  maxLength: 64,
                  onChange: this.OnChangeName,
                }),
                g.createElement(f.II, {
                  className: (0, y.Z)(ae().PasswordDots, t),
                  label: (0, H.Xx)("#Login_Password"),
                  type: "password",
                  autoComplete: "off",
                  maxLength: 64,
                  size: 64,
                  value: a.GetPassword(),
                  onChange: this.OnChangePassword,
                }),
                g.createElement(f.ji, {
                  className: ae().RememberMeCheck,
                  label: (0, H.Xx)("#Login_RememberMe"),
                  disabled: !1,
                  onChange: () => this.OnChangeRememberPass,
                  checked: a.GetRememberPassword(),
                }),
                a.GetCaptchaURL() && g.createElement(me, { manager: a }),
                g.createElement(
                  f.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, H.Xx)("#Login_SignIn").toLocaleUpperCase(),
                ),
              ),
              g.createElement(
                "a",
                { className: ae().NeedHelpLink, href: o.De.HELP_BASE_URL },
                (0, H.Xx)("#Login_ForgotPassword"),
              ),
              g.createElement("div", { className: ae().LoginCreateSeperator }),
              g.createElement(
                "div",
                { className: ae().SteamUpsellContainer },
                g.createElement(
                  "div",
                  { className: ae().SteamUpsell },
                  (0, H.Xx)("#Login_NoSteamAccount"),
                ),
                g.createElement(
                  "div",
                  { className: ae().CreateAccountLink },
                  g.createElement(
                    "a",
                    { href: `${o.De.STORE_BASE_URL}join/` },
                    (0, H.Xx)("#Login_CreateAccount"),
                  ),
                ),
              ),
            )
          );
        }
      };
      (0, n.gn)([p.ak], ce.prototype, "OnSubmit", null),
        (0, n.gn)([p.ak], ce.prototype, "OnChangeName", null),
        (0, n.gn)([p.ak], ce.prototype, "OnChangePassword", null),
        (0, n.gn)([p.ak], ce.prototype, "OnChangeRememberPass", null),
        (ce = (0, n.gn)([v.Pi], ce));
      let me = class extends g.Component {
        OnCaptchaText(e) {
          this.props.manager.SetCaptchaText(e.target.value);
        }
        RefreshCaptcha(e) {
          this.props.manager.RefreshCaptcha();
        }
        render() {
          let e = this.props.manager;
          return g.createElement(
            "div",
            { className: ae().CaptchaContainer },
            g.createElement(
              "div",
              { className: ae().CaptchaBlock },
              g.createElement(
                "div",
                { className: ae().CaptchaImageAndInput },
                g.createElement(
                  "div",
                  { className: ae().CaptchaImageBox },
                  g.createElement("img", {
                    className: ae().CaptchaImage,
                    src: e.GetCaptchaURL(),
                  }),
                ),
                g.createElement(f.II, {
                  className: ae().CaptchaInput,
                  type: "text",
                  autoComplete: "off",
                  maxLength: 6,
                  value: e.GetCaptchaText(),
                  onChange: this.OnCaptchaText,
                }),
              ),
              g.createElement(
                "div",
                { className: ae().ErrorMessage },
                (0, H.Xx)("#Login_CaptchaVerification"),
              ),
            ),
            g.createElement(
              "div",
              null,
              g.createElement(
                "span",
                {
                  className: ae().RefreshCaptchaText,
                  onClick: this.RefreshCaptcha,
                },
                (0, H.Xx)("#Login_RefreshCaptcha"),
              ),
            ),
          );
        }
      };
      (0, n.gn)([p.ak], me.prototype, "OnCaptchaText", null),
        (0, n.gn)([p.ak], me.prototype, "RefreshCaptcha", null),
        (me = (0, n.gn)([v.Pi], me));
      let de = class extends g.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeAuthCode(e) {
          this.props.authtype == re.TwoFactorCode
            ? this.props.manager.SetTwoFactorCode(e.target.value)
            : this.props.manager.SetEmailAuthCode(e.target.value);
        }
        render() {
          let e,
            t = this.props.manager,
            a = "",
            s = null,
            n = "",
            r = t.GetSteamGuardCodeError() == ie.InvalidCode;
          switch (this.props.authtype) {
            case re.TwoFactorCode:
              (a = t.GetTwoFactorCode()),
                (s = (0, H.Xx)("#Login_Enter2FA")),
                (e = g.createElement(ee.vT2, null)),
                (n = (0, H.Xx)("#Login_Enter2FAHelp"));
              break;
            case re.EmailCode:
              (a = t.GetEmailAuthCode()),
                (s = (0, H.kQ)(
                  "#Login_SentSteamguard",
                  g.createElement(
                    "span",
                    { className: ae().Highlight },
                    "@",
                    t.GetEmailDomain(),
                  ),
                )),
                (n = (0, H.Xx)("#Login_EnterSteamguard")),
                (e = g.createElement(ee.wr9, null));
          }
          return g.createElement(
            "div",
            { className: ae().AuthenticationPanel },
            g.createElement(f.__, null, (0, H.Xx)("#Login_SigningIn")),
            g.createElement(
              "div",
              { className: ae().SigningInAccountName },
              t.GetUserName(),
            ),
            g.createElement(f.Ac, null, s),
            g.createElement(
              "div",
              { className: ae().AuthenticatorInputcontainer },
              e,
              g.createElement(
                "form",
                {
                  className: ae().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                g.createElement(f.II, {
                  className: (0, y.Z)(ae().AccountName),
                  label: "Steam Guard Code",
                  type: "text",
                  autoComplete: "off",
                  focusOnMount: !0,
                  maxLength: 64,
                  value: a,
                  onChange: this.OnChangeAuthCode,
                }),
                g.createElement(
                  f.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, H.Xx)("#Login_SteamguardSubmit").toLocaleUpperCase(),
                ),
              ),
            ),
            g.createElement(
              "a",
              {
                className: (0, y.Z)(
                  ae().NeedHelpLink,
                  r ? ae().NeedHelpHighlight : null,
                ),
                href: "http://help.steampowered.com/",
              },
              n,
            ),
          );
        }
      };
      (0, n.gn)([p.ak], de.prototype, "OnSubmit", null),
        (0, n.gn)([p.ak], de.prototype, "OnChangeAuthCode", null),
        (de = (0, n.gn)([v.Pi], de));
      var he = a(27070);
      const ue = [
        {
          path: "similarity",
          render: () => g.createElement(x, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            g.createElement(Q, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      function _e(e) {
        const [t, a] = g.useState(!1),
          n = o.L7.logged_in,
          r = (0, he.lS)();
        if (
          ((0, g.useEffect)(() => {
            _.Init(), a(!0);
          }, []),
          !t)
        )
          return g.createElement("div", { className: E.App });
        const i = { SteamInterface: r };
        return g.createElement(
          "div",
          { className: E.App },
          g.createElement(
            "div",
            { className: E.Container },
            g.createElement(
              "div",
              { className: E.TopSection },
              g.createElement("div", { className: E.Header }, "Labs Sandbox"),
              g.createElement(
                "div",
                { className: E.Body },
                "Internal testbed page for Steam Labs experiments",
              ),
            ),
            g.createElement(
              "div",
              { className: E.Tabs },
              ue.map((e) =>
                g.createElement(
                  S.OL,
                  {
                    key: e.path,
                    to: `${s.Z.LabsSandbox()}/${e.path}`,
                    className: E.Tab,
                    activeClassName: E.Active,
                  },
                  e.name,
                ),
              ),
            ),
            g.createElement(
              "div",
              { className: E.SandboxSection },
              g.createElement(
                Z.SV,
                null,
                g.createElement(
                  C.rs,
                  null,
                  ue.map((e, t) =>
                    g.createElement(C.AW, {
                      key: e.path,
                      path: `${s.Z.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || n
                          ? e.render(Object.assign(Object.assign({}, t), i))
                          : g.createElement(ge, null),
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function ge() {
        return g.createElement(
          "div",
          null,
          g.createElement("h3", null, "Please login to view this page."),
          g.createElement(le, {
            baseURL: o.De.STORE_BASE_URL,
            onLoginComplete: () => window.location.reload(),
          }),
        );
      }
    },
  },
]);

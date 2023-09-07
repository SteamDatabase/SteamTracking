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
        Vm: () => m,
        ie: () => c,
        jk: () => o,
        oA: () => h,
        vs: () => p,
        wZ: () => u,
      });
      var r = a(52868),
        s = a.n(r),
        i = a(89526),
        n = (a(24174), a(4306)),
        l = a(57858);
      function o(e, t, a, r) {
        const o = (0, i.useRef)(),
          p = (0, i.useRef)(void 0),
          c = (0, n.NW)();
        o.current = e;
        const [m, d] = (0, i.useState)(void 0),
          {
            include_assets: u,
            include_release: h,
            include_platforms: _,
            include_all_purchase_options: g,
            include_screenshots: b,
            include_trailers: f,
            include_ratings: S,
            include_tag_count: y,
            include_reviews: C,
            include_basic_info: E,
            include_supported_languages: v,
            include_full_description: I,
          } = a;
        if (
          ((0, i.useEffect)(() => {
            const a = {
              include_assets: u,
              include_release: h,
              include_platforms: _,
              include_all_purchase_options: g,
              include_screenshots: b,
              include_trailers: f,
              include_ratings: S,
              include_tag_count: y,
              include_reviews: C,
              include_basic_info: E,
              include_supported_languages: v,
              include_full_description: I,
            };
            let i = null;
            return (
              !e ||
                l.Z.Get().BHasStoreItem(e, t, a) ||
                (void 0 !== m && r && r == p.current) ||
                (r !== p.current && (d(void 0), (p.current = r)),
                (i = s().CancelToken.source()),
                l.Z.Get()
                  .QueueStoreItemRequest(e, t, a)
                  .then((t) => {
                    i.token.reason || o.current !== e || d(1 == t), c();
                  })),
              () => i && i.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, r, m, u, h, _, g, b, f, S, y, C, E, v, c]),
          !e)
        )
          return [null, 2];
        if (!1 === m) return [void 0, 2];
        if (l.Z.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!l.Z.Get().BHasStoreItem(e, t, a)) return [void 0, 1];
        const w = l.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return w ? [w, 3] : [null, 2];
      }
      function p(e, t, a) {
        return o(e, 0, t, a);
      }
      function c(e, t, a) {
        return o(e, 1, t, a);
      }
      function m(e, t, a) {
        const [r, n] = o(e, t, a),
          [l, c] = (0, i.useState)(null),
          [m, d] = p(l, a);
        return (
          (0, i.useEffect)(() => {
            var e;
            const t = s().CancelToken.source();
            if (
              1 == (null == r ? void 0 : r.GetStoreItemType()) &&
              1 == (null == r ? void 0 : r.GetIncludedAppIDs().length)
            ) {
              const a = r.GetIncludedAppIDs()[0];
              l != a &&
                ((null === (e = null == t ? void 0 : t.token) || void 0 === e
                  ? void 0
                  : e.reason) ||
                  c(a));
            }
            return () =>
              t.cancel("useStoreItemCacheOrPackageSingleApp: unmounting");
          }, [l, r]),
          l ? [m, d] : [r, n]
        );
      }
      function d(e, t, a, r) {
        const o = (0, n.NW)(),
          {
            include_assets: p,
            include_release: c,
            include_platforms: m,
            include_all_purchase_options: d,
            include_screenshots: u,
            include_trailers: h,
            include_ratings: _,
            include_tag_count: g,
            include_reviews: b,
            include_basic_info: f,
            include_supported_languages: S,
            include_full_description: y,
          } = a;
        if (
          ((0, i.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const a = {
                include_assets: p,
                include_release: c,
                include_platforms: m,
                include_all_purchase_options: d,
                include_screenshots: u,
                include_trailers: h,
                include_ratings: _,
                include_tag_count: g,
                include_reviews: b,
                include_basic_info: f,
                include_supported_languages: S,
                include_full_description: y,
              },
              r = e.filter(
                (e) =>
                  !(
                    l.Z.Get().BHasStoreItem(e, t, a) ||
                    l.Z.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == r.length) return;
            const i = s().CancelToken.source(),
              n = r.map((e) => l.Z.Get().QueueStoreItemRequest(e, t, a));
            return (
              Promise.all(n).then(() => {
                i.token.reason || o();
              }),
              () => i.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, r, o, p, c, m, d, u, h, _, g, b, f, S]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              l.Z.Get().BHasStoreItem(e, t, a) ||
              l.Z.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          l.Z.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function u(e, t, a) {
        return d(e, 0, t, a);
      }
      function h() {
        i.useEffect(
          () => (
            l.Z.Get().SetReturnUnavailableItems(!0),
            () => l.Z.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    4472: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Le });
      var r = a(96927),
        s = a(33940),
        i = a(58961),
        n = a(19094),
        l = a(32765),
        o = a(50265),
        p = a(4306),
        c = a(52868),
        m = a.n(c);
      class d {
        constructor() {
          this.rgModelNames = [];
        }
        Init() {
          i.Q8.Init(new n.J(l.De.WEBAPI_BASE_URL, l.L7.webapi_token));
          const e = `${l.De.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
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
        ComputePathBetweenApps(e, t, a, r, i, n, l) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const o = Math.acos(a);
            let p = new h(
                (e) =>
                  (0, s.mG)(this, void 0, void 0, function* () {
                    let t = yield this.GetNeighbors(e),
                      a = [];
                    for (let e = 0; e < t.length; e++) {
                      const s = t[e];
                      if (
                        (!r || a.length > r) &&
                        (s.cost > o || (i && a.length >= i))
                      )
                        break;
                      a.push(s);
                    }
                    return a;
                  }),
                this.EstimateCosts,
                (e, t) => e == t,
                l,
              ),
              c = yield p.FindPath(e, t, n || 10);
            if (c.path) {
              let e = [],
                t = 0;
              for (let a = 0; a < c.path.length; a++) {
                const r = c.path[a],
                  s = r.cost - t;
                (t = r.cost),
                  e.push({ appid: r.node, similarity: Math.cos(s) });
              }
              return e;
            }
            throw new Error("Unable to compute path.");
          });
        }
        GetNeighbors(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = `${l.De.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
            let a = yield m().get(t),
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            const a = `${
              l.De.STORE_BASE_URL
            }labs/ajaxgetappsimilarities?appidtarget=${t}&${e
              .map((e) => "appid[]=" + e.toString())
              .join("&")}`;
            let r = yield m().get(a);
            if (r.data && r.data.similarity_scores)
              return r.data.similarity_scores.map((e) =>
                Math.acos(parseFloat(e)),
              );
            throw new Error("Unable to fetch cost estimates");
          });
        }
      }
      (0, s.gn)([o.LO], d.prototype, "rgModelNames", void 0),
        (0, s.gn)([p.ak], d.prototype, "GetNeighbors", null),
        (0, s.gn)([p.ak], d.prototype, "EstimateCosts", null);
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            let r = new u((e, t) => e.cost - t.cost),
              s = new Set();
            r.Push({ node: e, cost: 0 });
            let i = new Map(),
              n = new Map(),
              l = new Map(),
              o = (yield this.m_fnEstimateCosts([e], t))[0];
            i.set(e, o), n.set(e, 0);
            let p = 0;
            for (; r.length > 0 && p < a; ) {
              let e = r.Pop();
              if (this.m_fnEquality(e.node, t)) {
                let t = [],
                  a = e.node;
                for (; l.has(a); ) t.push(a), (a = l.get(a));
                let r = [];
                for (let e = t.length - 1; e >= 0; e--)
                  r.push({ node: t[e], cost: n.get(t[e]) });
                return { path: r };
              }
              s.add(e.node);
              let a = yield this.m_fnGetNeighbors(e.node);
              if (a.length > 0) {
                let o = yield this.m_fnEstimateCosts(
                  a.map((e) => e.node),
                  t,
                );
                if (o.length != a.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding.",
                    ),
                    {}
                  );
                let p = n.get(e.node);
                for (let t = 0; t < a.length; t++) {
                  const c = a[t];
                  let m = p + c.cost;
                  if (
                    (!n.has(c.node) || m < n.get(c.node)) &&
                    (l.set(c.node, e.node),
                    n.set(c.node, m),
                    i.set(c.node, c.cost + o[t]),
                    !s.has(c.node))
                  ) {
                    const e = c.cost + o[t];
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
      const _ = new d();
      window.g_LabsSandbox = _;
      var g = a(89526),
        b = a(565),
        f = a(59934),
        S = a(95184),
        y = a(57605),
        C = a(36611),
        E = a(88464),
        v = a(19304);
      class I extends g.Component {
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
                },
              ),
              (this.state.appid = this.props.appidInitial));
        }
        OnDisplayClicked() {
          this.setState({ mode: "select" });
        }
        UpdateAppSuggestions(e) {
          return (0, s.mG)(this, void 0, void 0, function* () {
            const t = e.target.value && e.target.value.trim();
            (null == t ? void 0 : t.length)
              ? (window.clearTimeout(this.m_currentRequest),
                (this.m_currentRequest = window.setTimeout(
                  () =>
                    (0, s.mG)(this, void 0, void 0, function* () {
                      var e;
                      const a = {
                          cc: l.De.COUNTRY,
                          l: l.De.LANGUAGE,
                          realm: C.IN.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: t.replace(" ", "+"),
                          require_type: "game",
                          excluded_tags: [],
                          excluded_content_descriptors: [],
                        },
                        r = `${l.De.STORE_BASE_URL}search/suggest`,
                        s = yield m().get(r, {
                          params: a,
                          withCredentials: !0,
                        });
                      let i;
                      (i = (
                        null === (e = null == s ? void 0 : s.data) ||
                        void 0 === e
                          ? void 0
                          : e.length
                      )
                        ? s.data.map((e) =>
                            g.createElement(
                              "div",
                              {
                                className: S.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              g.createElement("img", {
                                src: e.img,
                                className: S.LogoImage,
                              }),
                              g.createElement(
                                "div",
                                { className: S.AppName },
                                e.name +
                                  (this.props.showAppIds ? ` (${e.id})` : ""),
                              ),
                            ),
                          )
                        : []),
                        this.setState({ strSearch: t, rgSuggestions: i });
                    }),
                  250,
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
          let r = null;
          const s = g.createElement(y.II, {
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
            r = g.createElement(
              "div",
              { className: S.AppDisplay },
              this.state.appinfo &&
                g.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: S.LogoImage,
                }),
              g.createElement("div", { className: S.AppName }, e),
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            r = g.createElement(
              "div",
              { className: S.AppSelect },
              s,
              e &&
                g.createElement(
                  "div",
                  { className: S.Suggestions },
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
            r,
          );
        }
      }
      (0, s.gn)([p.ak], I.prototype, "OnDisplayClicked", null),
        (0, s.gn)([p.ak], I.prototype, "UpdateAppSuggestions", null),
        (0, s.gn)([p.ak], I.prototype, "OnKeyUp", null);
      class w extends g.Component {
        render() {
          if (0 == this.props.appid)
            return g.createElement("div", { className: S.SimilarApp });
          {
            const e = i.Q8.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return g.createElement("div", { className: S.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                g.createElement("div", {
                  className: S.Spacer,
                  key: "score-spacer",
                }),
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                g.createElement(
                  "div",
                  { className: S.Score, key: "score-value" },
                  e,
                ),
              );
            }
            const a = e.name + " (" + this.props.appid.toString() + ")",
              r = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return g.createElement(
              "div",
              { className: S.SimilarApp, onClick: () => r(this.props.appid) },
              g.createElement("img", {
                src: e.header_image_url,
                className: S.LogoImage,
              }),
              g.createElement("div", { className: S.AppName }, a),
              t,
            );
          }
        }
      }
      class B extends g.Component {
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
              a = `${l.De.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
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
            { className: S.LabsSimilarity },
            g.createElement(I, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            g.createElement("div", { className: S.HorizontalSpacer }),
            g.createElement("div", { className: S.Score }, e),
            g.createElement("div", { className: S.HorizontalSpacer }),
            g.createElement(I, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            }),
          );
        }
      }
      (0, s.gn)([p.ak], B.prototype, "OnAppSelected", null);
      let A = class extends g.Component {
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
            const t = `${l.De.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}&model=${this.similarity_model}`;
            m()
              .get(t)
              .then((e) => {
                if (e.data && e.data.appid == this.selected_app) {
                  let t = new Set(
                    e.data.similar_appids.slice(0, this.props.max_similar),
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
            this.props.max_similar,
          );
          for (e = 0; e < a; e++) {
            const a = this.similar_apps[e],
              r = this.similarity_scores[e];
            t.push(
              g.createElement(w, {
                appid: a,
                score: r,
                key: a,
                fnOnSelected: this.SetSelectedApp,
              }),
            );
          }
          let r = [];
          for (const e of _.rgModelNames) {
            let t = { label: g.createElement("div", { key: e }, e), data: e };
            r.push(t);
          }
          return g.createElement(
            "div",
            { className: S.LabsSimilarGames },
            g.createElement(y.ry, {
              rgOptions: r,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.createElement("h1", null, "Games similar to:"),
            g.createElement(I, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            g.createElement("div", { className: S.SimilarApps }, t),
          );
        }
      };
      (0, s.gn)([o.LO], A.prototype, "selected_app", void 0),
        (0, s.gn)([o.LO], A.prototype, "similar_apps", void 0),
        (0, s.gn)([o.LO], A.prototype, "similarity_scores", void 0),
        (0, s.gn)([o.LO], A.prototype, "similarity_model", void 0),
        (0, s.gn)([p.ak], A.prototype, "OnSelectedApp", null),
        (0, s.gn)([p.ak], A.prototype, "SetSelectedApp", null),
        (0, s.gn)([p.ak], A.prototype, "OnModelChanged", null),
        (A = (0, s.gn)([E.Pi], A));
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
            { className: S.Operand },
            g.createElement(
              "div",
              { className: S.OperatorSelect },
              g.createElement(y.ry, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              }),
            ),
            g.createElement(I, { fnOnSelection: this.OnSelectedApp }),
          );
        }
      };
      (0, s.gn)([o.LO], L.prototype, "selected_app", void 0),
        (0, s.gn)([o.LO], L.prototype, "selected_operator", void 0),
        (0, s.gn)([p.ak], L.prototype, "OnSelectedApp", null),
        (0, s.gn)([p.ak], L.prototype, "OnSelectedOperator", null),
        (L = (0, s.gn)([E.Pi], L));
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
            t = `${l.De.STORE_BASE_URL}labs/ajaxgetappvectors?${e.join(
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
                  const r = e.data[a].components.map((e) => parseFloat(e));
                  "Plus" == this.operands[a].operator
                    ? (t = t.map((e, t) => e + r[t]))
                    : "Minus" == this.operands[a].operator
                    ? (t = t.map((e, t) => e - r[t]))
                    : console.log(
                        "Unexpected operator " + this.operands[a].operator,
                      );
                }
                const a = t.map((e) => e * e).reduce((e, t) => e + t, 0),
                  r = Math.sqrt(a);
                if (r > 1e-4) {
                  const e = t
                      .map((e) => e / r)
                      .map((e) => "x[]=" + e)
                      .join("&"),
                    a = `${l.De.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
                  m()
                    .get(a)
                    .then((e) => {
                      let t = new Set(
                        e.data.similar_appids.slice(0, this.props.max_similar),
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
            let a = { label: g.createElement("div", { key: t }, t), data: t };
            e.push(a);
          }
          let t = [],
            a = 0;
          for (const e of this.operands)
            t.push(
              g.createElement(L, {
                app: e.app,
                operator: e.operator,
                key: a,
                fnOnChange: this.OnOperandChanged,
                ref: this.operand_refs[a],
              }),
            ),
              a++;
          let r = null;
          this.operands.length < this.props.max_operands &&
            (r = g.createElement(
              "div",
              { className: S.AddOperand, onClick: this.OnAddOperand },
              "+",
            ));
          let s = [];
          const i = Math.min(
            this.similar_apps.length,
            this.similarity_scores.length,
            this.props.max_similar,
          );
          for (let e = 0; e < i; e++) {
            const t = this.similar_apps[e],
              a = this.similarity_scores[e];
            s.push(g.createElement(w, { appid: t, score: a, key: t }));
          }
          return g.createElement(
            "div",
            { className: S.LabsMixer },
            g.createElement(y.ry, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.createElement("h1", null, "Mixture"),
            t,
            r,
            g.createElement("h1", null, "Games similar to mixture"),
            g.createElement("div", { className: S.SimilarApps }, s),
          );
        }
      };
      (0, s.gn)([o.LO], O.prototype, "operands", void 0),
        (0, s.gn)([o.LO], O.prototype, "similarity_model", void 0),
        (0, s.gn)([o.LO], O.prototype, "similar_apps", void 0),
        (0, s.gn)([o.LO], O.prototype, "similarity_scores", void 0),
        (0, s.gn)([p.ak], O.prototype, "OnModelChanged", null),
        (0, s.gn)([p.ak], O.prototype, "OnAddOperand", null),
        (0, s.gn)([p.ak], O.prototype, "OnOperandChanged", null),
        (O = (0, s.gn)([E.Pi], O));
      let F = class extends g.Component {
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
                  i.Q8.EnsureAppInfoForAppIDs(e.map((e) => e.appid)).then(
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
            t = e ? S.ComputeButton : (0, v.Z)(S.ComputeButton, S.Disable);
          let a = null;
          a = this.in_progress
            ? g.createElement(
                "div",
                { className: S.ProgressMessage },
                "Finding path, step " + this.progress_iteration,
              )
            : this.found_path
            ? g.createElement(
                "div",
                { className: S.ProgressMessage },
                "Found path",
              )
            : g.createElement(
                "div",
                { className: S.ProgressMessage },
                "No path found",
              );
          let r = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              r.push(
                g.createElement(w, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                }),
              );
            }
          return g.createElement(
            "div",
            { className: S.LabsPathfinder },
            g.createElement(
              "div",
              { className: S.SelectEndpoints },
              g.createElement(I, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              g.createElement(I, {
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
            g.createElement("div", { className: S.Path }, r),
          );
        }
      };
      function R() {
        return g.createElement(
          g.Fragment,
          null,
          g.createElement("h1", null, "Similar Games"),
          g.createElement(A, { max_similar: 10 }),
          g.createElement("div", { className: S.Spacer }),
          g.createElement("h1", null, "Similarity"),
          g.createElement(B, null),
          g.createElement("div", { className: S.Spacer }),
          g.createElement("h1", null, "Mixer"),
          g.createElement(O, { max_similar: 10, max_operands: 6 }),
          g.createElement("div", { className: S.Spacer }),
          g.createElement("h1", null, "Pathfinder"),
          g.createElement(F, null),
        );
      }
      (0, s.gn)([o.LO], F.prototype, "app_start", void 0),
        (0, s.gn)([o.LO], F.prototype, "app_end", void 0),
        (0, s.gn)([o.LO], F.prototype, "in_progress", void 0),
        (0, s.gn)([o.LO], F.prototype, "progress_iteration", void 0),
        (0, s.gn)([o.LO], F.prototype, "found_path", void 0),
        (0, s.gn)([p.ak], F.prototype, "IterationCallback", null),
        (0, s.gn)([p.ak], F.prototype, "Pathfind", null),
        (0, s.gn)([p.ak], F.prototype, "OnSelectedStartApp", null),
        (0, s.gn)([p.ak], F.prototype, "OnSelectedEndApp", null),
        (F = (0, s.gn)([E.Pi], F));
      var N = a(47165),
        M = a(85246),
        x = a(54856),
        P = a(45878),
        k = a(29063),
        T = a(53143);
      const z = P.Message;
      class D extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.tag_score_factor || k.aR(D.M()),
            z.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  tag_score_factor: {
                    n: 1,
                    d: 1,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                  playtime_max_seconds: {
                    n: 10,
                    d: 36e4,
                    br: k.FE.readInt32,
                    bw: k.Xc.writeInt32,
                  },
                  playtime_max_games: {
                    n: 11,
                    d: 3,
                    br: k.FE.readInt32,
                    bw: k.Xc.writeInt32,
                  },
                  playtime_score_factor: {
                    n: 12,
                    d: 0.9,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                  popularity_factor: {
                    n: 20,
                    d: 5,
                    br: k.FE.readEnum,
                    bw: k.Xc.writeEnum,
                  },
                  popularity_reciprocal: {
                    n: 21,
                    d: 1e4,
                    br: k.FE.readInt32,
                    bw: k.Xc.writeInt32,
                  },
                  popularity_base_score: {
                    n: 22,
                    d: "5000000",
                    br: k.FE.readInt64String,
                    bw: k.Xc.writeInt64String,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = k.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new P.BinaryReader(e),
            a = new D();
          return D.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreAppSimilarityPriorityOptions";
        }
      }
      class G extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.steamid || k.aR(G.M()),
            z.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  steamid: {
                    n: 1,
                    br: k.FE.readFixed64String,
                    bw: k.Xc.writeFixed64String,
                  },
                  country_code: {
                    n: 2,
                    br: k.FE.readString,
                    bw: k.Xc.writeString,
                  },
                  ids: { n: 3, c: T.oY, r: !0, q: !0 },
                  options: { n: 4, c: D },
                  debug: { n: 5, br: k.FE.readBool, bw: k.Xc.writeBool },
                  include_owned_games: {
                    n: 6,
                    br: k.FE.readBool,
                    bw: k.Xc.writeBool,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = k.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new P.BinaryReader(e),
            a = new G();
          return G.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Request";
        }
      }
      class U extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.items || k.aR(U.M()),
            z.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { items: { n: 1, c: W, r: !0, q: !0 } },
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
          let t = new P.BinaryReader(e),
            a = new U();
          return U.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
        }
      }
      class W extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.id || k.aR(W.M()),
            z.initialize(this, e, 0, -1, [50], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  id: { n: 1, c: T.oY },
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
                  debug_matches: { n: 50, c: j, r: !0, q: !0 },
                  debug_popularity: { n: 51, c: H },
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
          let t = new P.BinaryReader(e),
            a = new W();
          return W.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
        }
      }
      class j extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.source_app || k.aR(j.M()),
            z.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
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
          let t = new P.BinaryReader(e),
            a = new j();
          return j.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
        }
      }
      class H extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.rank || k.aR(H.M()),
            z.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
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
          let t = new P.BinaryReader(e),
            a = new H();
          return H.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
        }
      }
      class X extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.steamid || k.aR(X.M()),
            z.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
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
                  context: { n: 10, c: T.WJ },
                  data_request: { n: 11, c: T.Qn },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = k.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA(X.M(), e, t);
        }
        static fromObject(e) {
          return k.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new P.BinaryReader(e),
            a = new X();
          return X.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
        }
      }
      class q extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.clusters || k.aR(q.M()),
            z.initialize(this, e, 0, -1, [1], null);
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
          let t = new P.BinaryReader(e),
            a = new q();
          return q.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
        }
      }
      class $ extends z {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.cluster_id || k.aR($.M()),
            z.initialize(this, e, 0, -1, [5, 6, 7], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
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
                  similar_items: { n: 7, c: T.VL, r: !0, q: !0 },
                  similar_item_popularity_score: {
                    n: 8,
                    br: k.FE.readDouble,
                    bw: k.Xc.writeDouble,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = k.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return k.TA($.M(), e, t);
        }
        static fromObject(e) {
          return k.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new P.BinaryReader(e),
            a = new $();
          return $.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return k.F($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new P.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          k.l2($.M(), e, t);
        }
        serializeBase64String() {
          var e = new P.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
        }
      }
      var Z;
      !(function (e) {
        (e.PrioritizeAppsForUser = function (e, t) {
          return e.SendMsg(
            "StoreAppSimilarity.PrioritizeAppsForUser#1",
            (0, x.MD)(G, t),
            U,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
          );
        }),
          (e.IdentifyClustersFromPlaytime = function (e, t) {
            return e.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              (0, x.MD)(X, t),
              q,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          });
      })(Z || (Z = {}));
      var Q = a(11195),
        V = a(57858);
      class K {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        LoadPlaytimeClusters(e, t, a, r) {
          return new J(this.m_SteamInterface, e, t, a, r);
        }
      }
      class J {
        constructor(e, t, a, r, s) {
          this.m_callbacksLoaded = new M.pB();
          const i = x.gA.Init(X);
          (0, Q.pA)(i),
            s && (0, Q.De)(i, s),
            i.Body().set_steamid(t || l.L7.steamid),
            r && i.Body().set_clusters_to_return(r),
            i.Body().set_sort(a),
            Z.IdentifyClustersFromPlaytime(e.GetServiceTransport(), i).then(
              (e) => {
                const t = e.Body();
                this.m_rgClusters = [];
                for (const e of t.clusters())
                  this.m_rgClusters.push(this.ReadCluster(e, s));
                this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
              },
            );
        }
        ReadCluster(e, t) {
          let a;
          return (
            t && (a = e.similar_items().map((e) => V.Z.Get().ReadItem(e, t))),
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
      var Y = a(3301),
        ee = a(14826),
        te = a(94344),
        ae = a(25871),
        re = a(74802),
        se = a(17547);
      function ie(e) {
        const { SteamInterface: t } = e,
          a = g.useRef();
        return (
          a.current || (a.current = new K(t)),
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
            g.createElement(le, { SimilarityStore: a.current }),
          )
        );
      }
      const ne = {
        3: "Total Playtime",
        2: "Number of Played Games",
        1: "Most Recently Played",
      };
      function le(e) {
        const { SimilarityStore: t } = e,
          [a, r] = g.useState(l.L7.steamid),
          [s, i] = g.useState("10"),
          [n, o] = g.useState(1),
          p = g.useCallback((e) => r(e.currentTarget.value), [r]),
          c = g.useCallback((e) => i(e.currentTarget.value), [i]),
          m = g.useCallback((e) => o(e.data), [o]);
        let d = !1;
        const u = g.useRef(l.L7.steamid),
          h = a && new N.K(a);
        let _;
        h &&
          h.BIsValid() &&
          h.BIsIndividualAccount() &&
          ((u.current = h.ConvertTo64BitString()), (d = !0)),
          s && !isNaN(parseInt(s)) && (_ = parseInt(s));
        const b = g.useMemo(() => {
            let e = [];
            for (let t in ne) e.push({ data: Number(t), label: ne[t] });
            return e;
          }, []),
          f = (function (e, t, a, r = 1, s = null, i = []) {
            const [n, l] = g.useState(null);
            return (
              g.useEffect(() => {
                if ((l(null), a))
                  return e
                    .LoadPlaytimeClusters(a, r, s, t)
                    .RegisterOnReadyCallback(l).Unregister;
              }, [a, r, s, ...i]),
              n
            );
          })(
            t,
            { include_assets: !0, include_basic_info: !0 },
            u.current,
            n,
            _,
          );
        return g.createElement(
          "div",
          null,
          g.createElement(
            y.uT,
            { className: te.ClusterConfig },
            g.createElement(y.II, {
              label: "SteamID",
              type: "text",
              value: a,
              onChange: p,
              description: !d && "Invalid SteamID",
            }),
            g.createElement(y.II, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: s,
              onChange: c,
            }),
            g.createElement(y.ry, {
              label: "Sort clusters by",
              rgOptions: b,
              selectedOption: n,
              onChange: m,
            }),
          ),
          d && !f && g.createElement(Y.V, null),
          f && g.createElement(oe, { rgPlaytimeClusters: f }),
        );
      }
      function oe(e) {
        const { rgPlaytimeClusters: t } = e;
        return g.createElement(
          "div",
          null,
          t.map((e) =>
            g.createElement(
              se.SV,
              { key: e.nClusterID },
              g.createElement(pe, { cluster: e }),
            ),
          ),
        );
      }
      function pe(e) {
        const { cluster: t } = e,
          [a, r] = g.useState(!1),
          s = g.useCallback(() => r(!0), [r]),
          [i, n] = g.useState(!1),
          l = g.useCallback(() => n(!0), [n]);
        return g.createElement(
          re.h,
          { onEnter: l },
          g.createElement(
            "div",
            { className: te.PlaytimeCluster },
            g.createElement(
              "div",
              { className: te.ClusterInfo },
              g.createElement("h1", null, "Cluster ", t.nClusterID),
              g.createElement(
                se.SV,
                null,
                g.createElement(
                  "div",
                  { className: te.Overview },
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
                    (0, ee.vX)(t.rtLastPlayed),
                    " ",
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
                          g.createElement(me, { appid: e }),
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
              { className: te.ClusterMembers },
              g.createElement("h3", null, "Similar titles:"),
              g.createElement(
                se.SV,
                null,
                g.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map((e, t) =>
                    a || t < 4
                      ? g.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          g.createElement(de, { item: e }),
                        )
                      : null,
                  ),
                ),
              ),
              !a &&
                g.createElement(
                  y.zx,
                  { onClick: s },
                  "Show all ",
                  t.rgSimilarItems.length,
                ),
            ),
          ),
        );
      }
      const ce = {};
      function me(e) {
        const { appid: t } = e,
          [a] = (0, ae.vs)(t, ce);
        return a
          ? g.createElement(
              "a",
              { className: te.PlayedGame, href: a.GetStorePageURL() },
              a.GetName(),
            )
          : null;
      }
      function de(e) {
        const { item: t } = e;
        return g.createElement(
          "a",
          { className: te.SimilarTitle, href: t.GetStorePageURL() },
          g.createElement("img", {
            src: t.GetAssets().GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName(),
        );
      }
      var ue = a(701),
        he = a(39042),
        _e = a.n(he),
        ge = a(97277),
        be = a(26464);
      var fe, Se;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.AccountName = 1)] = "AccountName"),
          (e[(e.EmailCode = 2)] = "EmailCode"),
          (e[(e.TwoFactorCode = 3)] = "TwoFactorCode"),
          (e[(e.Complete = 4)] = "Complete");
      })(fe || (fe = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.InvalidCode = 1)] = "InvalidCode");
        })(Se || (Se = {}));
      class ye {
        constructor(e, t) {
          (this.m_strBaseURL = ""),
            (this.m_strOAuthClientID = ""),
            (this.m_fnLoginComplete = null),
            (this.m_bRequestInFlight = !1),
            (this.m_eCurrentStep = fe.AccountName),
            (this.m_strErrorMessage = ""),
            (this.m_strEmailDomain = ""),
            (this.m_strCaptchaURL = ""),
            (this.m_eSteamGuardCodeError = Se.None),
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
          return (0, s.mG)(this, void 0, void 0, function* () {
            if (this.m_bRequestInFlight) return;
            (0, o.z)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let e = yield (0, ge.He)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields,
            );
            (0, o.z)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(e);
            });
          });
        }
        UpdateLoginResult(e) {
          if (!e)
            return (
              console.log("Login timeout"),
              void (this.m_strErrorMessage = (0, ee.Xx)(
                "#ConnectionTrouble_FailedToConnect",
              ))
            );
          if (e.login_complete) {
            if (((this.m_eCurrentStep = fe.Complete), this.m_fnLoginComplete)) {
              let t = {
                steamID: e.oauth ? e.oauth.steamid : "",
                strAccountName: e.oauth ? e.oauth.account_name : "",
                strOAuthToken: e.oauth ? e.oauth.oauth_token : "",
              };
              this.m_fnLoginComplete(t);
            }
          } else
            (this.m_strErrorMessage = e.message || ""),
              (this.m_eSteamGuardCodeError = Se.None),
              e.requires_twofactor
                ? (this.UpdateCaptchaURL("-1"),
                  this.m_eCurrentStep != fe.TwoFactorCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, ee.Xx)(
                      "#MobileLogin_IncorrectSteamGuard",
                    )),
                    (this.m_eSteamGuardCodeError = Se.InvalidCode),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = fe.TwoFactorCode))
                : e.captcha_needed && e.captcha_gid
                ? ((this.m_eCurrentStep = fe.AccountName),
                  this.UpdateCaptchaURL(e.captcha_gid))
                : e.emailauth_needed
                ? (e.emaildomain && (this.m_strEmailDomain = e.emaildomain),
                  e.emailsteamid &&
                    (this.m_userFields.emailSteamID = e.emailsteamid),
                  this.m_eCurrentStep != fe.EmailCode ||
                    this.m_strErrorMessage ||
                    ((this.m_strErrorMessage = (0, ee.Xx)(
                      "#MobileLogin_IncorrectSteamGuard",
                    )),
                    (this.m_eSteamGuardCodeError = Se.InvalidCode),
                    (this.m_userFields.strEmailAuthCode = "")),
                  (this.m_eCurrentStep = fe.EmailCode))
                : e.agreement_session_url
                ? (this.Shutdown(),
                  console.log(window.location.href),
                  (window.location.href =
                    e.agreement_session_url + "&redir=" + window.location.href))
                : console.log("Unhandled login error");
        }
        RefreshCaptcha() {
          return (0, s.mG)(this, void 0, void 0, function* () {
            let e = yield (0, ge.p1)(this.m_strBaseURL);
            e ? this.UpdateCaptchaURL(e) : console.log("Failed to get captcha");
          });
        }
        UpdateCaptchaURL(e) {
          (this.m_userFields.gidCaptcha = e),
            (this.m_userFields.strCaptchaText = ""),
            (this.m_strCaptchaURL =
              "-1" != e ? (0, ge.yI)(this.m_strBaseURL, e) : "");
        }
      }
      (0, s.gn)([o.LO], ye.prototype, "m_bRequestInFlight", void 0),
        (0, s.gn)([o.LO], ye.prototype, "m_userFields", void 0),
        (0, s.gn)([o.LO], ye.prototype, "m_eCurrentStep", void 0),
        (0, s.gn)([o.LO], ye.prototype, "m_strErrorMessage", void 0),
        (0, s.gn)([o.LO], ye.prototype, "m_strEmailDomain", void 0),
        (0, s.gn)([o.LO], ye.prototype, "m_strCaptchaURL", void 0),
        (0, s.gn)([o.LO], ye.prototype, "m_eSteamGuardCodeError", void 0),
        (0, s.gn)([be.a], ye.prototype, "DoLogin", null),
        (0, s.gn)([o.aD.bound], ye.prototype, "UpdateCaptchaURL", null);
      let Ce = class extends g.Component {
        constructor(e) {
          super(e),
            (this.m_manager = new ye(this.props.baseURL)),
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
            { baseURL: t, onLoginComplete: a, className: r } = e,
            i = (0, s._T)(e, ["baseURL", "onLoginComplete", "className"]),
            n = (0, v.Z)(_e().LoginDialog, r),
            l = this.m_manager.GetCurrentStep(),
            o = this.m_manager.GetErrorMessage();
          return g.createElement(
            "div",
            Object.assign({ className: n }, i),
            g.createElement(
              "div",
              { className: _e().LoginPanelBackground },
              g.createElement(ue.ui7, null),
            ),
            g.createElement(
              "div",
              { className: _e().LoginPanelContent },
              o && g.createElement(Ee, { text: o }),
              l == fe.AccountName &&
                g.createElement(ve, {
                  manager: this.m_manager,
                  autoFocus: this.props.autoFocus,
                }),
              l == fe.TwoFactorCode &&
                g.createElement(we, {
                  manager: this.m_manager,
                  authtype: fe.TwoFactorCode,
                }),
              l == fe.EmailCode &&
                g.createElement(we, {
                  manager: this.m_manager,
                  authtype: fe.EmailCode,
                }),
              l == fe.Complete &&
                g.createElement(
                  "div",
                  { className: _e().LoginComplete },
                  g.createElement(Y.V, null),
                ),
            ),
          );
        }
      };
      function Ee(e) {
        return g.createElement("div", { className: _e().ErrorMessage }, e.text);
      }
      Ce = (0, s.gn)([E.Pi], Ce);
      let ve = class extends g.Component {
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
                ? _e().MedPass
                : 2 == this.state.nPassSize
                ? _e().LargePass
                : _e().DefaultPass),
            (e =
              1 == this.state.nNameSize
                ? _e().MedName
                : 2 == this.state.nNameSize
                ? _e().LargeName
                : _e().DefaultNAme),
            g.createElement(
              "div",
              { className: _e().AccountPasswordPanel },
              g.createElement(
                "div",
                { className: _e().SigninTitle },
                (0, ee.Xx)("#Login_SignIn"),
              ),
              g.createElement(
                "form",
                {
                  className: _e().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                g.createElement(y.II, {
                  autoFocus: this.props.autoFocus,
                  className: (0, v.Z)(_e().AccountNameLabel, e),
                  label: (0, ee.Xx)("#Login_AccountName"),
                  type: "text",
                  value: a.GetUserName(),
                  focusOnMount: !0,
                  maxLength: 64,
                  onChange: this.OnChangeName,
                }),
                g.createElement(y.II, {
                  className: (0, v.Z)(_e().PasswordDots, t),
                  label: (0, ee.Xx)("#Login_Password"),
                  type: "password",
                  autoComplete: "off",
                  maxLength: 64,
                  size: 64,
                  value: a.GetPassword(),
                  onChange: this.OnChangePassword,
                }),
                g.createElement(y.ji, {
                  className: _e().RememberMeCheck,
                  label: (0, ee.Xx)("#Login_RememberMe"),
                  disabled: !1,
                  onChange: () => this.OnChangeRememberPass,
                  checked: a.GetRememberPassword(),
                }),
                a.GetCaptchaURL() && g.createElement(Ie, { manager: a }),
                g.createElement(
                  y.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, ee.Xx)("#Login_SignIn").toLocaleUpperCase(),
                ),
              ),
              g.createElement(
                "a",
                { className: _e().NeedHelpLink, href: l.De.HELP_BASE_URL },
                (0, ee.Xx)("#Login_ForgotPassword"),
              ),
              g.createElement("div", { className: _e().LoginCreateSeperator }),
              g.createElement(
                "div",
                { className: _e().SteamUpsellContainer },
                g.createElement(
                  "div",
                  { className: _e().SteamUpsell },
                  (0, ee.Xx)("#Login_NoSteamAccount"),
                ),
                g.createElement(
                  "div",
                  { className: _e().CreateAccountLink },
                  g.createElement(
                    "a",
                    { href: `${l.De.STORE_BASE_URL}join/` },
                    (0, ee.Xx)("#Login_CreateAccount"),
                  ),
                ),
              ),
            )
          );
        }
      };
      (0, s.gn)([p.ak], ve.prototype, "OnSubmit", null),
        (0, s.gn)([p.ak], ve.prototype, "OnChangeName", null),
        (0, s.gn)([p.ak], ve.prototype, "OnChangePassword", null),
        (0, s.gn)([p.ak], ve.prototype, "OnChangeRememberPass", null),
        (ve = (0, s.gn)([E.Pi], ve));
      let Ie = class extends g.Component {
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
            { className: _e().CaptchaContainer },
            g.createElement(
              "div",
              { className: _e().CaptchaBlock },
              g.createElement(
                "div",
                { className: _e().CaptchaImageAndInput },
                g.createElement(
                  "div",
                  { className: _e().CaptchaImageBox },
                  g.createElement("img", {
                    className: _e().CaptchaImage,
                    src: e.GetCaptchaURL(),
                  }),
                ),
                g.createElement(y.II, {
                  className: _e().CaptchaInput,
                  type: "text",
                  autoComplete: "off",
                  maxLength: 6,
                  value: e.GetCaptchaText(),
                  onChange: this.OnCaptchaText,
                }),
              ),
              g.createElement(
                "div",
                { className: _e().ErrorMessage },
                (0, ee.Xx)("#Login_CaptchaVerification"),
              ),
            ),
            g.createElement(
              "div",
              null,
              g.createElement(
                "span",
                {
                  className: _e().RefreshCaptchaText,
                  onClick: this.RefreshCaptcha,
                },
                (0, ee.Xx)("#Login_RefreshCaptcha"),
              ),
            ),
          );
        }
      };
      (0, s.gn)([p.ak], Ie.prototype, "OnCaptchaText", null),
        (0, s.gn)([p.ak], Ie.prototype, "RefreshCaptcha", null),
        (Ie = (0, s.gn)([E.Pi], Ie));
      let we = class extends g.Component {
        OnSubmit(e) {
          e.preventDefault(), this.props.manager.DoLogin();
        }
        OnChangeAuthCode(e) {
          this.props.authtype == fe.TwoFactorCode
            ? this.props.manager.SetTwoFactorCode(e.target.value)
            : this.props.manager.SetEmailAuthCode(e.target.value);
        }
        render() {
          let e,
            t = this.props.manager,
            a = "",
            r = null,
            s = "",
            i = t.GetSteamGuardCodeError() == Se.InvalidCode;
          switch (this.props.authtype) {
            case fe.TwoFactorCode:
              (a = t.GetTwoFactorCode()),
                (r = (0, ee.Xx)("#Login_Enter2FA")),
                (e = g.createElement(ue.vT2, null)),
                (s = (0, ee.Xx)("#Login_Enter2FAHelp"));
              break;
            case fe.EmailCode:
              (a = t.GetEmailAuthCode()),
                (r = (0, ee.kQ)(
                  "#Login_SentSteamguard",
                  g.createElement(
                    "span",
                    { className: _e().Highlight },
                    "@",
                    t.GetEmailDomain(),
                  ),
                )),
                (s = (0, ee.Xx)("#Login_EnterSteamguard")),
                (e = g.createElement(ue.wr9, null));
          }
          return g.createElement(
            "div",
            { className: _e().AuthenticationPanel },
            g.createElement(y.__, null, (0, ee.Xx)("#Login_SigningIn")),
            g.createElement(
              "div",
              { className: _e().SigningInAccountName },
              t.GetUserName(),
            ),
            g.createElement(y.Ac, null, r),
            g.createElement(
              "div",
              { className: _e().AuthenticatorInputcontainer },
              e,
              g.createElement(
                "form",
                {
                  className: _e().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                g.createElement(y.II, {
                  className: (0, v.Z)(_e().AccountName),
                  label: "Steam Guard Code",
                  type: "text",
                  autoComplete: "off",
                  focusOnMount: !0,
                  maxLength: 64,
                  value: a,
                  onChange: this.OnChangeAuthCode,
                }),
                g.createElement(
                  y.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, ee.Xx)("#Login_SteamguardSubmit").toLocaleUpperCase(),
                ),
              ),
            ),
            g.createElement(
              "a",
              {
                className: (0, v.Z)(
                  _e().NeedHelpLink,
                  i ? _e().NeedHelpHighlight : null,
                ),
                href: "http://help.steampowered.com/",
              },
              s,
            ),
          );
        }
      };
      (0, s.gn)([p.ak], we.prototype, "OnSubmit", null),
        (0, s.gn)([p.ak], we.prototype, "OnChangeAuthCode", null),
        (we = (0, s.gn)([E.Pi], we));
      var Be = a(27070);
      const Ae = [
        {
          path: "similarity",
          render: () => g.createElement(R, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            g.createElement(ie, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      function Le(e) {
        const [t, a] = g.useState(!1),
          s = l.L7.logged_in,
          i = (0, Be.lS)();
        if (
          ((0, g.useEffect)(() => {
            _.Init(), a(!0);
          }, []),
          !t)
        )
          return g.createElement("div", { className: S.App });
        const n = { SteamInterface: i };
        return g.createElement(
          "div",
          { className: S.App },
          g.createElement(
            "div",
            { className: S.Container },
            g.createElement(
              "div",
              { className: S.TopSection },
              g.createElement("div", { className: S.Header }, "Labs Sandbox"),
              g.createElement(
                "div",
                { className: S.Body },
                "Internal testbed page for Steam Labs experiments",
              ),
            ),
            g.createElement(
              "div",
              { className: S.Tabs },
              Ae.map((e) =>
                g.createElement(
                  b.OL,
                  {
                    key: e.path,
                    to: `${r.Z.LabsSandbox()}/${e.path}`,
                    className: S.Tab,
                    activeClassName: S.Active,
                  },
                  e.name,
                ),
              ),
            ),
            g.createElement(
              "div",
              { className: S.SandboxSection },
              g.createElement(
                se.SV,
                null,
                g.createElement(
                  f.rs,
                  null,
                  Ae.map((e, t) =>
                    g.createElement(f.AW, {
                      key: e.path,
                      path: `${r.Z.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || s
                          ? e.render(Object.assign(Object.assign({}, t), n))
                          : g.createElement(Oe, null),
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function Oe() {
        return g.createElement(
          "div",
          null,
          g.createElement("h3", null, "Please login to view this page."),
          g.createElement(Ce, {
            baseURL: l.De.STORE_BASE_URL,
            onLoginComplete: () => window.location.reload(),
          }),
        );
      }
    },
  },
]);

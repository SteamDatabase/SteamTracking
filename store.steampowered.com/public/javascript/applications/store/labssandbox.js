/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2814],
  {
    84194: (e) => {
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
    6240: (e) => {
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
    78788: (e) => {
      e.exports = {
        EntryError: "tagclustering_EntryError_1UGoD",
        ClusterConfig: "tagclustering_ClusterConfig_3Qp2u",
        PlaytimeCluster: "tagclustering_PlaytimeCluster_2qGfq",
        ClusterInfo: "tagclustering_ClusterInfo_20dmp",
        ClusterMembers: "tagclustering_ClusterMembers_VeQtF",
        SimilarTitle: "tagclustering_SimilarTitle_gRxJT",
      };
    },
    19952: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => ge });
      var s = a(760),
        n = a(85556),
        r = a(45944),
        i = a(77581),
        o = a(37563),
        l = a(54842),
        p = a(20417),
        m = a(80751),
        c = a.n(m);
      class d {
        constructor() {
          (this.rgModelNames = []), (0, l.rC)(this);
        }
        Init() {
          r.Q8.Init(new i.J(o.De.WEBAPI_BASE_URL, o.L7.webapi_token));
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
              m = yield p.FindPath(e, t, i || 10);
            if (m.path) {
              let e = [],
                t = 0;
              for (let a = 0; a < m.path.length; a++) {
                const s = m.path[a],
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
          return (0, n.mG)(this, void 0, void 0, function* () {
            const a = `${
              o.De.STORE_BASE_URL
            }labs/ajaxgetappsimilarities?appidtarget=${t}&${e
              .map((e) => "appid[]=" + e.toString())
              .join("&")}`;
            let s = yield c().get(a);
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
                  const m = a[t];
                  let c = p + m.cost;
                  if (
                    (!i.has(m.node) || c < i.get(m.node)) &&
                    (o.set(m.node, e.node),
                    i.set(m.node, c),
                    r.set(m.node, m.cost + l[t]),
                    !n.has(m.node))
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
      var _ = a(47427),
        S = a(28017),
        C = a(8285),
        E = a(6240),
        f = a(1485),
        b = a(38071),
        y = a(27605),
        v = a(13129);
      class L extends _.Component {
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
                        n = yield c().get(s, {
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
                            _.createElement(
                              "div",
                              {
                                className: E.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              _.createElement("img", {
                                src: e.img,
                                className: E.LogoImage,
                              }),
                              _.createElement(
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
          const n = _.createElement(f.II, {
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
              { className: E.AppDisplay },
              this.state.appinfo &&
                _.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: E.LogoImage,
                }),
              _.createElement("div", { className: E.AppName }, e),
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            s = _.createElement(
              "div",
              { className: E.AppSelect },
              n,
              e &&
                _.createElement(
                  "div",
                  { className: E.Suggestions },
                  this.state.rgSuggestions,
                ),
            );
          }
          return _.createElement(
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
      class A extends _.Component {
        render() {
          if (0 == this.props.appid)
            return _.createElement("div", { className: E.SimilarApp });
          {
            const e = r.Q8.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return _.createElement("div", { className: E.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                _.createElement("div", {
                  className: E.Spacer,
                  key: "score-spacer",
                }),
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                _.createElement(
                  "div",
                  { className: E.Score, key: "score-value" },
                  e,
                ),
              );
            }
            const a = e.name + " (" + this.props.appid.toString() + ")",
              s = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return _.createElement(
              "div",
              { className: E.SimilarApp, onClick: () => s(this.props.appid) },
              _.createElement("img", {
                src: e.header_image_url,
                className: E.LogoImage,
              }),
              _.createElement("div", { className: E.AppName }, a),
              t,
            );
          }
        }
      }
      class N extends _.Component {
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
            { className: E.LabsSimilarity },
            _.createElement(L, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            _.createElement("div", { className: E.HorizontalSpacer }),
            _.createElement("div", { className: E.Score }, e),
            _.createElement("div", { className: E.HorizontalSpacer }),
            _.createElement(L, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            }),
          );
        }
      }
      (0, n.gn)([p.ak], N.prototype, "OnAppSelected", null);
      let I = class extends _.Component {
        constructor(e) {
          super(e),
            (this.selected_app = 0),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.similarity_model = "default"),
            (this.app_selector_ref = _.createRef()),
            (0, l.rC)(this),
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
              _.createElement(A, {
                appid: a,
                score: s,
                key: a,
                fnOnSelected: this.SetSelectedApp,
              }),
            );
          }
          let s = [];
          for (const e of g.rgModelNames) {
            let t = { label: _.createElement("div", { key: e }, e), data: e };
            s.push(t);
          }
          return _.createElement(
            "div",
            { className: E.LabsSimilarGames },
            _.createElement(f.ry, {
              rgOptions: s,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            _.createElement("h1", null, "Games similar to:"),
            _.createElement(L, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            _.createElement("div", { className: E.SimilarApps }, t),
          );
        }
      };
      (0, n.gn)([l.LO], I.prototype, "selected_app", void 0),
        (0, n.gn)([l.LO], I.prototype, "similar_apps", void 0),
        (0, n.gn)([l.LO], I.prototype, "similarity_scores", void 0),
        (0, n.gn)([l.LO], I.prototype, "similarity_model", void 0),
        (0, n.gn)([p.ak], I.prototype, "OnSelectedApp", null),
        (0, n.gn)([p.ak], I.prototype, "SetSelectedApp", null),
        (0, n.gn)([p.ak], I.prototype, "OnModelChanged", null),
        (I = (0, n.gn)([y.Pi], I));
      let O = class extends _.Component {
        constructor(e) {
          super(e),
            (this.selected_app = void 0),
            (this.selected_operator = void 0),
            (0, l.rC)(this),
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
            { className: E.Operand },
            _.createElement(
              "div",
              { className: E.OperatorSelect },
              _.createElement(f.ry, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              }),
            ),
            _.createElement(L, { fnOnSelection: this.OnSelectedApp }),
          );
        }
      };
      (0, n.gn)([l.LO], O.prototype, "selected_app", void 0),
        (0, n.gn)([l.LO], O.prototype, "selected_operator", void 0),
        (0, n.gn)([p.ak], O.prototype, "OnSelectedApp", null),
        (0, n.gn)([p.ak], O.prototype, "OnSelectedOperator", null),
        (O = (0, n.gn)([y.Pi], O));
      let x = class extends _.Component {
        constructor(e) {
          super(e),
            (this.operands = []),
            (this.similarity_model = "default"),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (0, l.rC)(this),
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
              "&",
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
                  c()
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
          for (const t of g.rgModelNames) {
            let a = { label: _.createElement("div", { key: t }, t), data: t };
            e.push(a);
          }
          let t = [],
            a = 0;
          for (const e of this.operands)
            t.push(
              _.createElement(O, {
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
            (s = _.createElement(
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
            n.push(_.createElement(A, { appid: t, score: a, key: t }));
          }
          return _.createElement(
            "div",
            { className: E.LabsMixer },
            _.createElement(f.ry, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            _.createElement("h1", null, "Mixture"),
            t,
            s,
            _.createElement("h1", null, "Games similar to mixture"),
            _.createElement("div", { className: E.SimilarApps }, n),
          );
        }
      };
      (0, n.gn)([l.LO], x.prototype, "operands", void 0),
        (0, n.gn)([l.LO], x.prototype, "similarity_model", void 0),
        (0, n.gn)([l.LO], x.prototype, "similar_apps", void 0),
        (0, n.gn)([l.LO], x.prototype, "similarity_scores", void 0),
        (0, n.gn)([p.ak], x.prototype, "OnModelChanged", null),
        (0, n.gn)([p.ak], x.prototype, "OnAddOperand", null),
        (0, n.gn)([p.ak], x.prototype, "OnOperandChanged", null),
        (x = (0, n.gn)([y.Pi], x));
      let P = class extends _.Component {
        constructor(e) {
          super(e),
            (this.app_start = 0),
            (this.app_end = 0),
            (this.in_progress = !1),
            (this.progress_iteration = 0),
            (this.found_path = void 0),
            (0, l.rC)(this);
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
            t = e ? E.ComputeButton : (0, v.Z)(E.ComputeButton, E.Disable);
          let a = null;
          a = this.in_progress
            ? _.createElement(
                "div",
                { className: E.ProgressMessage },
                "Finding path, step " + this.progress_iteration,
              )
            : this.found_path
            ? _.createElement(
                "div",
                { className: E.ProgressMessage },
                "Found path",
              )
            : _.createElement(
                "div",
                { className: E.ProgressMessage },
                "No path found",
              );
          let s = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              s.push(
                _.createElement(A, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                }),
              );
            }
          return _.createElement(
            "div",
            { className: E.LabsPathfinder },
            _.createElement(
              "div",
              { className: E.SelectEndpoints },
              _.createElement(L, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              _.createElement(L, {
                fnOnSelection: this.OnSelectedEndApp,
                strPrompt: "Select end game",
              }),
            ),
            _.createElement(
              "div",
              { className: t, onClick: e ? this.Pathfind : () => {} },
              "Pathfind!",
            ),
            a,
            _.createElement("div", { className: E.Path }, s),
          );
        }
      };
      function k() {
        return _.createElement(
          _.Fragment,
          null,
          _.createElement("h1", null, "Similar Games"),
          _.createElement(I, { max_similar: 10 }),
          _.createElement("div", { className: E.Spacer }),
          _.createElement("h1", null, "Similarity"),
          _.createElement(N, null),
          _.createElement("div", { className: E.Spacer }),
          _.createElement("h1", null, "Mixer"),
          _.createElement(x, { max_similar: 10, max_operands: 6 }),
          _.createElement("div", { className: E.Spacer }),
          _.createElement("h1", null, "Pathfinder"),
          _.createElement(P, null),
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
        (P = (0, n.gn)([y.Pi], P));
      var w = a(35427),
        R = a(45492),
        F = a(79545),
        M = a(37038),
        U = a(80998),
        G = a(15690);
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
          const r = F.gA.Init(M.JA);
          (0, U.pA)(r),
            n && (0, U.De)(r, n),
            r.Body().set_steamid(t || o.L7.steamid),
            s && r.Body().set_clusters_to_return(s),
            r.Body().set_sort(a),
            M.qI
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
            t && (a = e.similar_items().map((e) => G.Z.Get().ReadItem(e, t))),
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
      var B = a(46882),
        H = a(31846),
        q = a(78788),
        z = a(80886),
        $ = a(58112),
        X = a(10162);
      function Q(e) {
        const { SteamInterface: t } = e,
          a = _.useRef();
        return (
          a.current || (a.current = new T(t)),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "div",
              null,
              _.createElement(
                "p",
                null,
                "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.",
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
                  "browse the cluster data graphically",
                ),
                " (requires Rack VPN).",
              ),
            ),
            _.createElement(V, { SimilarityStore: a.current }),
          )
        );
      }
      const j = {
        3: "Total Playtime",
        2: "Number of Played Games",
        1: "Most Recently Played",
      };
      function V(e) {
        const { SimilarityStore: t } = e,
          [a, s] = _.useState(o.L7.steamid),
          [n, r] = _.useState("10"),
          [i, l] = _.useState(1),
          p = _.useCallback((e) => s(e.currentTarget.value), [s]),
          m = _.useCallback((e) => r(e.currentTarget.value), [r]),
          c = _.useCallback((e) => l(e.data), [l]);
        let d = !1;
        const h = _.useRef(o.L7.steamid),
          u = a && new w.K(a);
        let g;
        u &&
          u.BIsValid() &&
          u.BIsIndividualAccount() &&
          ((h.current = u.ConvertTo64BitString()), (d = !0)),
          n && !isNaN(parseInt(n)) && (g = parseInt(n));
        const S = _.useMemo(() => {
            let e = [];
            for (let t in j) e.push({ data: Number(t), label: j[t] });
            return e;
          }, []),
          C = (function (e, t, a, s = 1, n = null, r = []) {
            const [i, o] = _.useState(null);
            return (
              _.useEffect(() => {
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
            g,
          );
        return _.createElement(
          "div",
          null,
          _.createElement(
            f.uT,
            { className: q.ClusterConfig },
            _.createElement(f.II, {
              label: "SteamID",
              type: "text",
              value: a,
              onChange: p,
              description: !d && "Invalid SteamID",
            }),
            _.createElement(f.II, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: n,
              onChange: m,
            }),
            _.createElement(f.ry, {
              label: "Sort clusters by",
              rgOptions: S,
              selectedOption: i,
              onChange: c,
            }),
          ),
          d && !C && _.createElement(B.V, null),
          C && _.createElement(Z, { rgPlaytimeClusters: C }),
        );
      }
      function Z(e) {
        const { rgPlaytimeClusters: t } = e;
        return _.createElement(
          "div",
          null,
          t.map((e) =>
            _.createElement(
              X.SV,
              { key: e.nClusterID },
              _.createElement(K, { cluster: e }),
            ),
          ),
        );
      }
      function K(e) {
        const { cluster: t } = e,
          [a, s] = _.useState(!1),
          n = _.useCallback(() => s(!0), [s]),
          [r, i] = _.useState(!1),
          o = _.useCallback(() => i(!0), [i]);
        return _.createElement(
          $.h,
          { onEnter: o },
          _.createElement(
            "div",
            { className: q.PlaytimeCluster },
            _.createElement(
              "div",
              { className: q.ClusterInfo },
              _.createElement("h1", null, "Cluster ", t.nClusterID),
              _.createElement(
                X.SV,
                null,
                _.createElement(
                  "div",
                  { className: q.Overview },
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Total Playtime:"),
                    " ",
                    Math.floor(t.nPlaytimeMinutes / 6) / 10,
                    "hr",
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Last Played:"),
                    " ",
                    (0, H.vX)(t.rtLastPlayed),
                    " ",
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Games played:"),
                    " ",
                    r &&
                      t.rgAppIDsPlayed.map((e) =>
                        _.createElement(
                          _.Fragment,
                          { key: e },
                          _.createElement(W, { appid: e }),
                          ", ",
                        ),
                      ),
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
                      "(?)",
                    ),
                  ),
                ),
              ),
            ),
            _.createElement(
              "div",
              { className: q.ClusterMembers },
              _.createElement("h3", null, "Similar titles:"),
              _.createElement(
                X.SV,
                null,
                _.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map((e, t) =>
                    a || t < 4
                      ? _.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          _.createElement(Y, { item: e }),
                        )
                      : null,
                  ),
                ),
              ),
              !a &&
                _.createElement(
                  f.zx,
                  { onClick: n },
                  "Show all ",
                  t.rgSimilarItems.length,
                ),
            ),
          ),
        );
      }
      const J = {};
      function W(e) {
        const { appid: t } = e,
          [a] = (0, z.vs)(t, J);
        return a
          ? _.createElement(
              "a",
              { className: q.PlayedGame, href: a.GetStorePageURL() },
              a.GetName(),
            )
          : null;
      }
      function Y(e) {
        const { item: t } = e;
        return _.createElement(
          "a",
          { className: q.SimilarTitle, href: t.GetStorePageURL() },
          _.createElement("img", {
            src: t.GetAssets().GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName(),
        );
      }
      var ee = a(62613),
        te = a(84194),
        ae = a.n(te),
        se = a(97247),
        ne = a(16997);
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
            (this.m_userFields = void 0),
            (this.m_eCurrentStep = re.AccountName),
            (this.m_strErrorMessage = ""),
            (this.m_strEmailDomain = ""),
            (this.m_strCaptchaURL = ""),
            (this.m_eSteamGuardCodeError = ie.None),
            (0, l.rC)(this),
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
      let le = class extends _.Component {
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
            i = (0, v.Z)(ae().LoginDialog, s),
            o = this.m_manager.GetCurrentStep(),
            l = this.m_manager.GetErrorMessage();
          return _.createElement(
            "div",
            Object.assign({ className: i }, r),
            _.createElement(
              "div",
              { className: ae().LoginPanelBackground },
              _.createElement(ee.ui7, null),
            ),
            _.createElement(
              "div",
              { className: ae().LoginPanelContent },
              l && _.createElement(pe, { text: l }),
              o == re.AccountName &&
                _.createElement(me, {
                  manager: this.m_manager,
                  autoFocus: this.props.autoFocus,
                }),
              o == re.TwoFactorCode &&
                _.createElement(de, {
                  manager: this.m_manager,
                  authtype: re.TwoFactorCode,
                }),
              o == re.EmailCode &&
                _.createElement(de, {
                  manager: this.m_manager,
                  authtype: re.EmailCode,
                }),
              o == re.Complete &&
                _.createElement(
                  "div",
                  { className: ae().LoginComplete },
                  _.createElement(B.V, null),
                ),
            ),
          );
        }
      };
      function pe(e) {
        return _.createElement("div", { className: ae().ErrorMessage }, e.text);
      }
      le = (0, n.gn)([y.Pi], le);
      let me = class extends _.Component {
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
            _.createElement(
              "div",
              { className: ae().AccountPasswordPanel },
              _.createElement(
                "div",
                { className: ae().SigninTitle },
                (0, H.Xx)("#Login_SignIn"),
              ),
              _.createElement(
                "form",
                {
                  className: ae().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                _.createElement(f.II, {
                  autoFocus: this.props.autoFocus,
                  className: (0, v.Z)(ae().AccountNameLabel, e),
                  label: (0, H.Xx)("#Login_AccountName"),
                  type: "text",
                  value: a.GetUserName(),
                  focusOnMount: !0,
                  maxLength: 64,
                  onChange: this.OnChangeName,
                }),
                _.createElement(f.II, {
                  className: (0, v.Z)(ae().PasswordDots, t),
                  label: (0, H.Xx)("#Login_Password"),
                  type: "password",
                  autoComplete: "off",
                  maxLength: 64,
                  size: 64,
                  value: a.GetPassword(),
                  onChange: this.OnChangePassword,
                }),
                _.createElement(f.ji, {
                  className: ae().RememberMeCheck,
                  label: (0, H.Xx)("#Login_RememberMe"),
                  disabled: !1,
                  onChange: () => this.OnChangeRememberPass,
                  checked: a.GetRememberPassword(),
                }),
                a.GetCaptchaURL() && _.createElement(ce, { manager: a }),
                _.createElement(
                  f.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, H.Xx)("#Login_SignIn").toLocaleUpperCase(),
                ),
              ),
              _.createElement(
                "a",
                { className: ae().NeedHelpLink, href: o.De.HELP_BASE_URL },
                (0, H.Xx)("#Login_ForgotPassword"),
              ),
              _.createElement("div", { className: ae().LoginCreateSeperator }),
              _.createElement(
                "div",
                { className: ae().SteamUpsellContainer },
                _.createElement(
                  "div",
                  { className: ae().SteamUpsell },
                  (0, H.Xx)("#Login_NoSteamAccount"),
                ),
                _.createElement(
                  "div",
                  { className: ae().CreateAccountLink },
                  _.createElement(
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
      (0, n.gn)([p.ak], me.prototype, "OnSubmit", null),
        (0, n.gn)([p.ak], me.prototype, "OnChangeName", null),
        (0, n.gn)([p.ak], me.prototype, "OnChangePassword", null),
        (0, n.gn)([p.ak], me.prototype, "OnChangeRememberPass", null),
        (me = (0, n.gn)([y.Pi], me));
      let ce = class extends _.Component {
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
            { className: ae().CaptchaContainer },
            _.createElement(
              "div",
              { className: ae().CaptchaBlock },
              _.createElement(
                "div",
                { className: ae().CaptchaImageAndInput },
                _.createElement(
                  "div",
                  { className: ae().CaptchaImageBox },
                  _.createElement("img", {
                    className: ae().CaptchaImage,
                    src: e.GetCaptchaURL(),
                  }),
                ),
                _.createElement(f.II, {
                  className: ae().CaptchaInput,
                  type: "text",
                  autoComplete: "off",
                  maxLength: 6,
                  value: e.GetCaptchaText(),
                  onChange: this.OnCaptchaText,
                }),
              ),
              _.createElement(
                "div",
                { className: ae().ErrorMessage },
                (0, H.Xx)("#Login_CaptchaVerification"),
              ),
            ),
            _.createElement(
              "div",
              null,
              _.createElement(
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
      (0, n.gn)([p.ak], ce.prototype, "OnCaptchaText", null),
        (0, n.gn)([p.ak], ce.prototype, "RefreshCaptcha", null),
        (ce = (0, n.gn)([y.Pi], ce));
      let de = class extends _.Component {
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
                (e = _.createElement(ee.vT2, null)),
                (n = (0, H.Xx)("#Login_Enter2FAHelp"));
              break;
            case re.EmailCode:
              (a = t.GetEmailAuthCode()),
                (s = (0, H.kQ)(
                  "#Login_SentSteamguard",
                  _.createElement(
                    "span",
                    { className: ae().Highlight },
                    "@",
                    t.GetEmailDomain(),
                  ),
                )),
                (n = (0, H.Xx)("#Login_EnterSteamguard")),
                (e = _.createElement(ee.wr9, null));
          }
          return _.createElement(
            "div",
            { className: ae().AuthenticationPanel },
            _.createElement(f.__, null, (0, H.Xx)("#Login_SigningIn")),
            _.createElement(
              "div",
              { className: ae().SigningInAccountName },
              t.GetUserName(),
            ),
            _.createElement(f.Ac, null, s),
            _.createElement(
              "div",
              { className: ae().AuthenticatorInputcontainer },
              e,
              _.createElement(
                "form",
                {
                  className: ae().AccountPasswordForm,
                  onSubmit: this.OnSubmit,
                },
                _.createElement(f.II, {
                  className: (0, v.Z)(ae().AccountName),
                  label: "Steam Guard Code",
                  type: "text",
                  autoComplete: "off",
                  focusOnMount: !0,
                  maxLength: 64,
                  value: a,
                  onChange: this.OnChangeAuthCode,
                }),
                _.createElement(
                  f.KM,
                  { disabled: this.props.manager.IsRequestInFlight() },
                  (0, H.Xx)("#Login_SteamguardSubmit").toLocaleUpperCase(),
                ),
              ),
            ),
            _.createElement(
              "a",
              {
                className: (0, v.Z)(
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
        (de = (0, n.gn)([y.Pi], de));
      var he = a(40057);
      const ue = [
        {
          path: "similarity",
          render: () => _.createElement(k, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            _.createElement(Q, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      function ge(e) {
        const [t, a] = _.useState(!1),
          n = o.L7.logged_in,
          r = (0, he.lS)();
        if (
          ((0, _.useEffect)(() => {
            g.Init(), a(!0);
          }, []),
          !t)
        )
          return _.createElement("div", { className: E.App });
        const i = { SteamInterface: r };
        return _.createElement(
          "div",
          { className: E.App },
          _.createElement(
            "div",
            { className: E.Container },
            _.createElement(
              "div",
              { className: E.TopSection },
              _.createElement("div", { className: E.Header }, "Labs Sandbox"),
              _.createElement(
                "div",
                { className: E.Body },
                "Internal testbed page for Steam Labs experiments",
              ),
            ),
            _.createElement(
              "div",
              { className: E.Tabs },
              ue.map((e) =>
                _.createElement(
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
            _.createElement(
              "div",
              { className: E.SandboxSection },
              _.createElement(
                X.SV,
                null,
                _.createElement(
                  C.rs,
                  null,
                  ue.map((e, t) =>
                    _.createElement(C.AW, {
                      key: e.path,
                      path: `${s.Z.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || n
                          ? e.render(Object.assign(Object.assign({}, t), i))
                          : _.createElement(_e, null),
                    }),
                  ),
                ),
              ),
            ),
          ),
        );
      }
      function _e() {
        return _.createElement(
          "div",
          null,
          _.createElement("h3", null, "Please login to view this page."),
          _.createElement(le, {
            baseURL: o.De.STORE_BASE_URL,
            onLoginComplete: () => window.location.reload(),
          }),
        );
      }
    },
  },
]);

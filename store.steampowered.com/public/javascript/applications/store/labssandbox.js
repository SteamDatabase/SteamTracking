/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
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
    JO2d: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return be;
        });
      var s = a("1fPh"),
        r = a("mrSG"),
        i = a("qD+2"),
        n = a("WBba"),
        l = a("lkRc"),
        o = a("2vnA"),
        p = a("opsS"),
        c = a("vDqi"),
        d = a.n(c);
      a("erV9");
      class m {
        constructor() {
          this.rgModelNames = [];
        }
        Init() {
          i.a.Init(new n.a(l.d.WEBAPI_BASE_URL, l.k.webapi_token));
          const e = `${l.d.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
          d.a.get(e).then((e) => {
            if (e.data) {
              let t = [];
              for (const a of e.data) "default" != a && t.push(a);
              t.sort(), (t = ["default", ...t]), (this.rgModelNames = t);
            }
          });
        }
        ComputePathBetweenApps(e, t, a, s, i, n, l) {
          return Object(r.a)(this, void 0, void 0, function* () {
            const o = Math.acos(a);
            let p = new h(
                (e) =>
                  Object(r.a)(this, void 0, void 0, function* () {
                    let t = yield this.GetNeighbors(e),
                      a = [];
                    for (let e = 0; e < t.length; e++) {
                      const r = t[e];
                      if (
                        (!s || a.length > s) &&
                        (r.cost > o || (i && a.length >= i))
                      )
                        break;
                      a.push(r);
                    }
                    return a;
                  }),
                this.EstimateCosts,
                (e, t) => e == t,
                l
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
            const t = `${l.d.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}`;
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
              l.d.STORE_BASE_URL
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
      Object(r.b)([o.C], m.prototype, "rgModelNames", void 0),
        Object(r.b)([p.a], m.prototype, "GetNeighbors", null),
        Object(r.b)([p.a], m.prototype, "EstimateCosts", null);
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
      class h {
        constructor(e, t, a, s) {
          (this.m_fnGetNeighbors = e),
            (this.m_fnEstimateCosts = t),
            (this.m_fnEquality = a),
            (this.m_fnIterationCallback = s);
        }
        FindPath(e, t, a) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let s = new u((e, t) => e.cost - t.cost),
              r = new Set();
            s.Push({ node: e, cost: 0 });
            let i = new Map(),
              n = new Map(),
              l = new Map(),
              o = (yield this.m_fnEstimateCosts([e], t))[0];
            i.set(e, o), n.set(e, 0);
            let p = 0;
            for (; s.length > 0 && p < a; ) {
              let e = s.Pop();
              if (this.m_fnEquality(e.node, t)) {
                let t = [],
                  a = e.node;
                for (; l.has(a); ) t.push(a), (a = l.get(a));
                let s = [];
                for (let e = t.length - 1; e >= 0; e--)
                  s.push({ node: t[e], cost: n.get(t[e]) });
                return { path: s };
              }
              r.add(e.node);
              let a = yield this.m_fnGetNeighbors(e.node);
              if (a.length > 0) {
                let o = yield this.m_fnEstimateCosts(
                  a.map((e) => e.node),
                  t
                );
                if (o.length != a.length)
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
                    (l.set(c.node, e.node),
                    n.set(c.node, d),
                    i.set(c.node, c.cost + o[t]),
                    !r.has(c.node))
                  ) {
                    const e = c.cost + o[t];
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
        g = a.n(b),
        f = a("55Ip"),
        y = a("EC67"),
        S = a("PXMQ"),
        E = a("Mgs7"),
        O = a("kyHq"),
        v = a("TyAF"),
        C = a("exH9");
      class B extends g.a.Component {
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
                          cc: l.d.COUNTRY,
                          l: l.d.LANGUAGE,
                          realm: O.g.k_ESteamRealmGlobal,
                          origin: self.origin,
                          f: "jsonfull",
                          term: t.replace(" ", "+"),
                          require_type: "game",
                          excluded_tags: [],
                          excluded_content_descriptors: [],
                        },
                        s = `${l.d.STORE_BASE_URL}search/suggest`,
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
                            g.a.createElement(
                              "div",
                              {
                                className: S.Suggestion,
                                key: `suggestion-${e.id}`,
                                onClickCapture: () =>
                                  this.SetSelectedApp(parseInt(e.id)),
                              },
                              g.a.createElement("img", {
                                src: e.img,
                                className: S.LogoImage,
                              }),
                              g.a.createElement(
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
          const r = g.a.createElement(E.l, {
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
            s = g.a.createElement(
              "div",
              { className: S.AppDisplay },
              this.state.appinfo &&
                g.a.createElement("img", {
                  src: this.state.appinfo.header_image_url,
                  className: S.LogoImage,
                }),
              g.a.createElement("div", { className: S.AppName }, e)
            );
          } else if ("select" == this.state.mode) {
            const e = this.state.strSearch.length > 0;
            s = g.a.createElement(
              "div",
              { className: S.AppSelect },
              r,
              e &&
                g.a.createElement(
                  "div",
                  { className: S.Suggestions },
                  this.state.rgSuggestions
                )
            );
          }
          return g.a.createElement(
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
      Object(r.b)([p.a], B.prototype, "OnDisplayClicked", null),
        Object(r.b)([p.a], B.prototype, "UpdateAppSuggestions", null),
        Object(r.b)([p.a], B.prototype, "OnKeyUp", null);
      class w extends g.a.Component {
        render() {
          if (0 == this.props.appid)
            return g.a.createElement("div", { className: S.SimilarApp });
          {
            const e = i.a.GetAppInfo(this.props.appid);
            if (!e || !e.is_valid)
              return g.a.createElement("div", { className: S.SimilarApp });
            let t = [];
            if (this.props.score) {
              t.push(
                g.a.createElement("div", {
                  className: S.Spacer,
                  key: "score-spacer",
                })
              );
              const e = Math.round(100 * this.props.score).toString() + "%";
              t.push(
                g.a.createElement(
                  "div",
                  { className: S.Score, key: "score-value" },
                  e
                )
              );
            }
            const a = e.name + " (" + this.props.appid.toString() + ")",
              s = this.props.fnOnSelected ? this.props.fnOnSelected : (e) => {};
            return g.a.createElement(
              "div",
              { className: S.SimilarApp, onClick: () => s(this.props.appid) },
              g.a.createElement("img", {
                src: e.header_image_url,
                className: S.LogoImage,
              }),
              g.a.createElement("div", { className: S.AppName }, a),
              t
            );
          }
        }
      }
      class A extends g.a.Component {
        constructor() {
          super(...arguments),
            (this.state = {}),
            (this.ref_app_a = g.a.createRef()),
            (this.ref_app_b = g.a.createRef());
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
              a = `${l.d.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${e}&appid[]=${t}`;
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
          return g.a.createElement(
            "div",
            { className: S.LabsSimilarity },
            g.a.createElement(B, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_a,
              showAppIds: !0,
              appidInitial: 268500,
              key: "similar_app_a",
            }),
            g.a.createElement("div", { className: S.HorizontalSpacer }),
            g.a.createElement("div", { className: S.Score }, e),
            g.a.createElement("div", { className: S.HorizontalSpacer }),
            g.a.createElement(B, {
              fnOnSelection: this.OnAppSelected,
              ref: this.ref_app_b,
              showAppIds: !0,
              appidInitial: 200510,
              key: "similar_app_b",
            })
          );
        }
      }
      Object(r.b)([p.a], A.prototype, "OnAppSelected", null);
      let I = class extends g.a.Component {
        constructor(e) {
          super(e),
            (this.selected_app = 0),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.similarity_model = "default"),
            (this.app_selector_ref = g.a.createRef()),
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
            const t = `${l.d.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${e}&model=${this.similarity_model}`;
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
              g.a.createElement(w, {
                appid: a,
                score: s,
                key: a,
                fnOnSelected: this.SetSelectedApp,
              })
            );
          }
          let s = [];
          for (const e of _.rgModelNames) {
            let t = { label: g.a.createElement("div", { key: e }, e), data: e };
            s.push(t);
          }
          return g.a.createElement(
            "div",
            { className: S.LabsSimilarGames },
            g.a.createElement(E.h, {
              rgOptions: s,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.a.createElement("h1", null, "Games similar to:"),
            g.a.createElement(B, {
              fnOnSelection: this.OnSelectedApp,
              ref: this.app_selector_ref,
              appidInitial: 268500,
              showAppIds: !0,
            }),
            g.a.createElement("div", { className: S.SimilarApps }, t)
          );
        }
      };
      Object(r.b)([o.C], I.prototype, "selected_app", void 0),
        Object(r.b)([o.C], I.prototype, "similar_apps", void 0),
        Object(r.b)([o.C], I.prototype, "similarity_scores", void 0),
        Object(r.b)([o.C], I.prototype, "similarity_model", void 0),
        Object(r.b)([p.a], I.prototype, "OnSelectedApp", null),
        Object(r.b)([p.a], I.prototype, "SetSelectedApp", null),
        Object(r.b)([p.a], I.prototype, "OnModelChanged", null),
        (I = Object(r.b)([v.a], I));
      let M = class extends g.a.Component {
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
              label: g.a.createElement("div", { key: "Plus" }, "Plus"),
              data: "Plus",
            },
            {
              label: g.a.createElement("div", { key: "Minus" }, "Minus"),
              data: "Minus",
            },
          ];
          return g.a.createElement(
            "div",
            { className: S.Operand },
            g.a.createElement(
              "div",
              { className: S.OperatorSelect },
              g.a.createElement(E.h, {
                rgOptions: e,
                onChange: this.OnSelectedOperator,
                selectedOption: "Plus",
              })
            ),
            g.a.createElement(B, { fnOnSelection: this.OnSelectedApp })
          );
        }
      };
      Object(r.b)([o.C], M.prototype, "selected_app", void 0),
        Object(r.b)([o.C], M.prototype, "selected_operator", void 0),
        Object(r.b)([p.a], M.prototype, "OnSelectedApp", null),
        Object(r.b)([p.a], M.prototype, "OnSelectedOperator", null),
        (M = Object(r.b)([v.a], M));
      let x = class extends g.a.Component {
        constructor(e) {
          super(e),
            (this.operands = []),
            (this.similarity_model = "default"),
            (this.similar_apps = []),
            (this.similarity_scores = []),
            (this.operand_refs = []);
          for (let t = 0; t < e.max_operands; t++)
            this.operand_refs.push(g.a.createRef());
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
            t = `${l.d.STORE_BASE_URL}labs/ajaxgetappvectors?${e.join(
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
                  a = `${l.d.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${e}&model=${this.similarity_model}`;
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
            let a = { label: g.a.createElement("div", { key: t }, t), data: t };
            e.push(a);
          }
          let t = [],
            a = 0;
          for (const e of this.operands)
            t.push(
              g.a.createElement(M, {
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
            (s = g.a.createElement(
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
            r.push(g.a.createElement(w, { appid: t, score: a, key: t }));
          }
          return g.a.createElement(
            "div",
            { className: S.LabsMixer },
            g.a.createElement(E.h, {
              rgOptions: e,
              onChange: this.OnModelChanged,
              selectedOption: "default",
            }),
            g.a.createElement("h1", null, "Mixture"),
            t,
            s,
            g.a.createElement("h1", null, "Games similar to mixture"),
            g.a.createElement("div", { className: S.SimilarApps }, r)
          );
        }
      };
      Object(r.b)([o.C], x.prototype, "operands", void 0),
        Object(r.b)([o.C], x.prototype, "similarity_model", void 0),
        Object(r.b)([o.C], x.prototype, "similar_apps", void 0),
        Object(r.b)([o.C], x.prototype, "similarity_scores", void 0),
        Object(r.b)([p.a], x.prototype, "OnModelChanged", null),
        Object(r.b)([p.a], x.prototype, "OnAddOperand", null),
        Object(r.b)([p.a], x.prototype, "OnOperandChanged", null),
        (x = Object(r.b)([v.a], x));
      let R = class extends g.a.Component {
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
            t = e ? S.ComputeButton : Object(C.a)(S.ComputeButton, S.Disable);
          let a = null;
          a = this.in_progress
            ? g.a.createElement(
                "div",
                { className: S.ProgressMessage },
                "Finding path, step " + this.progress_iteration
              )
            : this.found_path
            ? g.a.createElement(
                "div",
                { className: S.ProgressMessage },
                "Found path"
              )
            : g.a.createElement(
                "div",
                { className: S.ProgressMessage },
                "No path found"
              );
          let s = [];
          if (this.found_path)
            for (let e = 0; e < this.found_path.length; e++) {
              const t = this.found_path[e];
              s.push(
                g.a.createElement(w, {
                  appid: t.appid,
                  score: t.similarity,
                  key: "pathstep" + e,
                })
              );
            }
          return g.a.createElement(
            "div",
            { className: S.LabsPathfinder },
            g.a.createElement(
              "div",
              { className: S.SelectEndpoints },
              g.a.createElement(B, {
                fnOnSelection: this.OnSelectedStartApp,
                strPrompt: "Select start game",
              }),
              g.a.createElement(B, {
                fnOnSelection: this.OnSelectedEndApp,
                strPrompt: "Select end game",
              })
            ),
            g.a.createElement(
              "div",
              { className: t, onClick: e ? this.Pathfind : () => {} },
              "Pathfind!"
            ),
            a,
            g.a.createElement("div", { className: S.Path }, s)
          );
        }
      };
      function j() {
        return g.a.createElement(
          g.a.Fragment,
          null,
          g.a.createElement("h1", null, "Similar Games"),
          g.a.createElement(I, { max_similar: 10 }),
          g.a.createElement("div", { className: S.Spacer }),
          g.a.createElement("h1", null, "Similarity"),
          g.a.createElement(A, null),
          g.a.createElement("div", { className: S.Spacer }),
          g.a.createElement("h1", null, "Mixer"),
          g.a.createElement(x, { max_similar: 10, max_operands: 6 }),
          g.a.createElement("div", { className: S.Spacer }),
          g.a.createElement("h1", null, "Pathfinder"),
          g.a.createElement(R, null)
        );
      }
      Object(r.b)([o.C], R.prototype, "app_start", void 0),
        Object(r.b)([o.C], R.prototype, "app_end", void 0),
        Object(r.b)([o.C], R.prototype, "in_progress", void 0),
        Object(r.b)([o.C], R.prototype, "progress_iteration", void 0),
        Object(r.b)([o.C], R.prototype, "found_path", void 0),
        Object(r.b)([p.a], R.prototype, "IterationCallback", null),
        Object(r.b)([p.a], R.prototype, "Pathfind", null),
        Object(r.b)([p.a], R.prototype, "OnSelectedStartApp", null),
        Object(r.b)([p.a], R.prototype, "OnSelectedEndApp", null),
        (R = Object(r.b)([v.a], R));
      var N = a("kLLr"),
        P = (a("E4Op"), a("qiKp")),
        z = a("bxBv"),
        k = a("hRO2"),
        L = a("OS8t"),
        F = a("sRB7");
      const T = k.Message;
      class D extends T {
        constructor(e = null) {
          super(),
            D.prototype.items || L.a(D.M()),
            T.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { items: { n: 1, c: U, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = L.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return L.g(D.M(), e, t);
        }
        static fromObject(e) {
          return L.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new k.BinaryReader(e),
            a = new D();
          return D.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return L.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new k.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          L.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new k.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
        }
      }
      class U extends T {
        constructor(e = null) {
          super(),
            U.prototype.id || L.a(U.M()),
            T.initialize(this, e, 0, -1, [50], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  id: { n: 1, c: F.g },
                  already_owned: { n: 2, br: L.d.readBool, bw: L.h.writeBool },
                  weight: { n: 3, br: L.d.readDouble, bw: L.h.writeDouble },
                  weight_before_dedupe: {
                    n: 4,
                    br: L.d.readDouble,
                    bw: L.h.writeDouble,
                  },
                  debug_matches: { n: 50, c: W, r: !0, q: !0 },
                  debug_popularity: { n: 51, c: H },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = L.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return L.g(U.M(), e, t);
        }
        static fromObject(e) {
          return L.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new k.BinaryReader(e),
            a = new U();
          return U.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return L.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new k.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          L.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new k.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
        }
      }
      class W extends T {
        constructor(e = null) {
          super(),
            W.prototype.source_app || L.a(W.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  source_app: { n: 1, br: L.d.readInt32, bw: L.h.writeInt32 },
                  weight: { n: 2, br: L.d.readDouble, bw: L.h.writeDouble },
                  similarity: { n: 3, br: L.d.readDouble, bw: L.h.writeDouble },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = L.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return L.g(W.M(), e, t);
        }
        static fromObject(e) {
          return L.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new k.BinaryReader(e),
            a = new W();
          return W.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return L.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new k.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          L.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new k.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
        }
      }
      class H extends T {
        constructor(e = null) {
          super(),
            H.prototype.rank || L.a(H.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  rank: { n: 1, br: L.d.readUint32, bw: L.h.writeUint32 },
                  popularity_factor: {
                    n: 2,
                    br: L.d.readDouble,
                    bw: L.h.writeDouble,
                  },
                  weight_before_popularity: {
                    n: 3,
                    br: L.d.readDouble,
                    bw: L.h.writeDouble,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = L.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return L.g(H.M(), e, t);
        }
        static fromObject(e) {
          return L.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new k.BinaryReader(e),
            a = new H();
          return H.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return L.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new k.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          L.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new k.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
        }
      }
      class G extends T {
        constructor(e = null) {
          super(),
            G.prototype.steamid || L.a(G.M()),
            T.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  steamid: {
                    n: 1,
                    br: L.d.readFixed64String,
                    bw: L.h.writeFixed64String,
                  },
                  sort: { n: 2, d: 1, br: L.d.readEnum, bw: L.h.writeEnum },
                  clusters_to_return: {
                    n: 3,
                    br: L.d.readInt32,
                    bw: L.h.writeInt32,
                  },
                  cluster_index: {
                    n: 4,
                    br: L.d.readInt32,
                    bw: L.h.writeInt32,
                  },
                  context: { n: 10, c: F.c },
                  data_request: { n: 11, c: F.d },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = L.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return L.g(G.M(), e, t);
        }
        static fromObject(e) {
          return L.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new k.BinaryReader(e),
            a = new G();
          return G.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return L.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new k.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          L.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new k.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
        }
      }
      class q extends T {
        constructor(e = null) {
          super(),
            q.prototype.clusters || L.a(q.M()),
            T.initialize(this, e, 0, -1, [1], null);
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
          return q.sm_mbf || (q.sm_mbf = L.e(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return L.g(q.M(), e, t);
        }
        static fromObject(e) {
          return L.c(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new k.BinaryReader(e),
            a = new q();
          return q.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return L.b(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new k.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          L.f(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new k.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
        }
      }
      class $ extends T {
        constructor(e = null) {
          super(),
            $.prototype.cluster_id || L.a($.M()),
            T.initialize(this, e, 0, -1, [5, 6, 7], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  cluster_id: { n: 1, br: L.d.readInt32, bw: L.h.writeInt32 },
                  playtime_forever: {
                    n: 2,
                    br: L.d.readInt32,
                    bw: L.h.writeInt32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: L.d.readInt32,
                    bw: L.h.writeInt32,
                  },
                  last_played: {
                    n: 4,
                    br: L.d.readUint32,
                    bw: L.h.writeUint32,
                  },
                  played_appids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: L.d.readInt32,
                    bw: L.h.writeRepeatedInt32,
                  },
                  similar_items_appids: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: L.d.readInt32,
                    bw: L.h.writeRepeatedInt32,
                  },
                  similar_items: { n: 7, c: F.f, r: !0, q: !0 },
                  similar_item_popularity_score: {
                    n: 8,
                    br: L.d.readDouble,
                    bw: L.h.writeDouble,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = L.e($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return L.g($.M(), e, t);
        }
        static fromObject(e) {
          return L.c($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new k.BinaryReader(e),
            a = new $();
          return $.deserializeBinaryFromReader(a, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return L.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new k.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          L.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new k.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
        }
      }
      var K;
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
              q,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 }
            );
          });
      })(K || (K = {}));
      var V = a("AKiZ"),
        Q = (a("g4bM"), a("C4Nl"));
      class J {
        constructor(e) {
          this.m_SteamInterface = e;
        }
        LoadPlaytimeClusters(e, t, a, s) {
          return new X(this.m_SteamInterface, e, t, a, s);
        }
      }
      class X {
        constructor(e, t, a, s, r) {
          this.m_callbacksLoaded = new P.a();
          const i = z.b.Init(G);
          Object(V.a)(i),
            r && Object(V.b)(i, r),
            i.Body().set_steamid(t || l.k.steamid),
            s && i.Body().set_clusters_to_return(s),
            i.Body().set_sort(a),
            K.IdentifyClustersFromPlaytime(e.GetServiceTransport(), i).then(
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
            t && (a = e.similar_items().map((e) => Q.a.Get().ReadItem(e, t))),
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
      var Z = a("0OaU"),
        Y = a("TLQK"),
        ee = a("1wed"),
        te = a("b3LC"),
        ae = a("uuth"),
        se = a("IjL/");
      function re(e) {
        const { SteamInterface: t } = e,
          a = b.useRef();
        return (
          a.current || (a.current = new J(t)),
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
          [a, s] = b.useState(l.k.steamid),
          [r, i] = b.useState("10"),
          [n, o] = b.useState(1),
          p = b.useCallback((e) => s(e.currentTarget.value), [s]),
          c = b.useCallback((e) => i(e.currentTarget.value), [i]),
          d = b.useCallback((e) => o(e.data), [o]);
        let m = !1;
        const u = b.useRef(l.k.steamid),
          h = a && new N.a(a);
        let _;
        h &&
          h.BIsValid() &&
          h.BIsIndividualAccount() &&
          ((u.current = h.ConvertTo64BitString()), (m = !0)),
          r && !isNaN(parseInt(r)) && (_ = parseInt(r));
        const g = b.useMemo(() => {
            let e = [];
            for (let t in ie) e.push({ data: Number(t), label: ie[t] });
            return e;
          }, []),
          f = (function (e, t, a, s = 1, r = null, i = []) {
            const [n, l] = b.useState(null);
            return (
              b.useEffect(() => {
                if ((l(null), a))
                  return e
                    .LoadPlaytimeClusters(a, s, r, t)
                    .RegisterOnReadyCallback(l).Unregister;
              }, [a, s, r, ...i]),
              n
            );
          })(
            t,
            { include_assets: !0, include_basic_info: !0 },
            u.current,
            n,
            _
          );
        return b.createElement(
          "div",
          null,
          b.createElement(
            E.b,
            { className: ee.ClusterConfig },
            b.createElement(E.l, {
              label: "SteamID",
              type: "text",
              value: a,
              onChange: p,
              explainer: !m && "Invalid SteamID",
            }),
            b.createElement(E.l, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: r,
              onChange: c,
            }),
            b.createElement(E.h, {
              label: "Sort clusters by",
              rgOptions: g,
              selectedOption: n,
              onChange: d,
            })
          ),
          m && !f && b.createElement(Z.a, null),
          f && b.createElement(le, { rgPlaytimeClusters: f })
        );
      }
      function le(e) {
        const { rgPlaytimeClusters: t } = e;
        return b.createElement(
          "div",
          null,
          t.map((e) =>
            b.createElement(
              se.a,
              { key: e.nClusterID },
              b.createElement(oe, { cluster: e })
            )
          )
        );
      }
      function oe(e) {
        const { cluster: t } = e,
          [a, s] = b.useState(!1),
          r = b.useCallback(() => s(!0), [s]),
          [i, n] = b.useState(!1),
          l = b.useCallback(() => n(!0), [n]);
        return b.createElement(
          ae.a,
          { onEnter: l },
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
                    Object(Y.n)(t.rtLastPlayed),
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
                  E.d,
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
      var me = a("vyDT");
      const ue = [
        {
          path: "similarity",
          render: () => g.a.createElement(j, null),
          name: "ML Similarity",
        },
        {
          path: "clustering",
          render: (e) =>
            g.a.createElement(re, { SteamInterface: e.SteamInterface }),
          name: "Tag Clustering",
          requires_login: !0,
        },
      ];
      let he = Object(l.h)("labs", "application_config"),
        _e = new n.a(l.d.WEBAPI_BASE_URL, he.webapi_token);
      function be(e) {
        const [t, a] = g.a.useState(!1),
          r = !!he.webapi_token;
        if (
          (Object(b.useEffect)(() => {
            _.Init(), a(!0);
          }, []),
          !t)
        )
          return g.a.createElement("div", { className: S.App });
        const i = { SteamInterface: _e };
        return g.a.createElement(
          "div",
          { className: S.App },
          g.a.createElement(
            "div",
            { className: S.Container },
            g.a.createElement(
              "div",
              { className: S.TopSection },
              g.a.createElement("div", { className: S.Header }, "Labs Sandbox"),
              g.a.createElement(
                "div",
                { className: S.Body },
                "Internal testbed page for Steam Labs experiments"
              )
            ),
            g.a.createElement(
              "div",
              { className: S.Tabs },
              ue.map((e) =>
                g.a.createElement(
                  f.c,
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
            g.a.createElement(
              "div",
              { className: S.SandboxSection },
              g.a.createElement(
                se.a,
                null,
                g.a.createElement(
                  y.d,
                  null,
                  ue.map((e, t) =>
                    g.a.createElement(y.b, {
                      key: e.path,
                      path: `${s.b.LabsSandbox()}/${e.path}`,
                      render: (t) =>
                        !e.requires_login || r
                          ? e.render(Object.assign(Object.assign({}, t), i))
                          : g.a.createElement(ge, null),
                    })
                  )
                )
              )
            )
          )
        );
      }
      function ge() {
        return g.a.createElement(
          "div",
          null,
          g.a.createElement("h3", null, "Please login to view this page."),
          g.a.createElement(me.a, {
            baseURL: l.d.STORE_BASE_URL,
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
    erV9: function (e) {
      e.exports = JSON.parse("{}");
    },
  },
]);

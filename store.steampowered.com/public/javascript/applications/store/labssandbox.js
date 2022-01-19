/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "1wed": function (e, t, r) {
      e.exports = {
        EntryError: "tagclustering_EntryError_1UGoD",
        ClusterConfig: "tagclustering_ClusterConfig_3Qp2u",
        PlaytimeCluster: "tagclustering_PlaytimeCluster_2qGfq",
        ClusterInfo: "tagclustering_ClusterInfo_20dmp",
        ClusterMembers: "tagclustering_ClusterMembers_VeQtF",
        SimilarTitle: "tagclustering_SimilarTitle_gRxJT",
      };
    },
    JO2d: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return be;
        });
      var a = r("mrSG"),
        n = r("1fPh"),
        i = r("qD+2"),
        s = r("WBba"),
        o = r("lkRc"),
        l = r("2vnA"),
        p = r("opsS"),
        c = r("vDqi"),
        u = r.n(c),
        d =
          (r("erV9"),
          (function () {
            function e() {
              this.rgModelNames = [];
            }
            return (
              (e.prototype.Init = function () {
                var e = this;
                i.a.Init(new s.a(o.d.WEBAPI_BASE_URL, o.k.webapi_token));
                var t = o.d.STORE_BASE_URL + "labs/ajaxgetsimilaritymodelnames";
                u.a.get(t).then(function (t) {
                  if (t.data) {
                    for (var r = [], n = 0, i = t.data; n < i.length; n++) {
                      var s = i[n];
                      "default" != s && r.push(s);
                    }
                    r.sort(),
                      (r = Object(a.g)(["default"], r)),
                      (e.rgModelNames = r);
                  }
                });
              }),
              (e.prototype.ComputePathBetweenApps = function (
                e,
                t,
                r,
                n,
                i,
                s,
                o
              ) {
                return Object(a.b)(this, void 0, void 0, function () {
                  var l,
                    p,
                    c,
                    u,
                    d,
                    m,
                    f,
                    _ = this;
                  return Object(a.e)(this, function (b) {
                    switch (b.label) {
                      case 0:
                        return (
                          (l = Math.acos(r)),
                          [
                            4,
                            new h(
                              function (e) {
                                return Object(a.b)(
                                  _,
                                  void 0,
                                  void 0,
                                  function () {
                                    var t, r, s, o;
                                    return Object(a.e)(this, function (a) {
                                      switch (a.label) {
                                        case 0:
                                          return [4, this.GetNeighbors(e)];
                                        case 1:
                                          for (
                                            t = a.sent(), r = [], s = 0;
                                            s < t.length &&
                                            ((o = t[s]),
                                            (n && !(r.length > n)) ||
                                              !(
                                                o.cost > l ||
                                                (i && r.length >= i)
                                              ));
                                            s++
                                          )
                                            r.push(o);
                                          return [2, r];
                                      }
                                    });
                                  }
                                );
                              },
                              this.EstimateCosts,
                              function (e, t) {
                                return e == t;
                              },
                              o
                            ).FindPath(e, t, s || 10),
                          ]
                        );
                      case 1:
                        if ((p = b.sent()).path) {
                          for (c = [], u = 0, d = 0; d < p.path.length; d++)
                            (m = p.path[d]),
                              (f = m.cost - u),
                              (u = m.cost),
                              c.push({
                                appid: m.node,
                                similarity: Math.cos(f),
                              });
                          return [2, c];
                        }
                        throw new Error("Unable to compute path.");
                    }
                  });
                });
              }),
              (e.prototype.GetNeighbors = function (e) {
                return Object(a.b)(this, void 0, void 0, function () {
                  var t, r, n, i;
                  return Object(a.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (t =
                            o.d.STORE_BASE_URL +
                            "labs/ajaxgetsimilarapps?appid=" +
                            e),
                          [4, u.a.get(t)]
                        );
                      case 1:
                        if (
                          ((r = a.sent()),
                          (n = []),
                          r.data && r.data.appid == e)
                        )
                          for (i = 0; i < r.data.similar_appids.length; i++)
                            n.push({
                              node: r.data.similar_appids[i],
                              cost: Math.acos(r.data.similarity_scores[i]),
                            });
                        return [2, n];
                    }
                  });
                });
              }),
              (e.prototype.EstimateCosts = function (e, t) {
                return Object(a.b)(this, void 0, void 0, function () {
                  var r, n;
                  return Object(a.e)(this, function (a) {
                    switch (a.label) {
                      case 0:
                        return (
                          (r =
                            o.d.STORE_BASE_URL +
                            "labs/ajaxgetappsimilarities?appidtarget=" +
                            t +
                            "&" +
                            e
                              .map(function (e) {
                                return "appid[]=" + e.toString();
                              })
                              .join("&")),
                          [4, u.a.get(r)]
                        );
                      case 1:
                        if ((n = a.sent()).data && n.data.similarity_scores)
                          return [
                            2,
                            n.data.similarity_scores.map(function (e) {
                              return Math.acos(parseFloat(e));
                            }),
                          ];
                        throw new Error("Unable to fetch cost estimates");
                    }
                  });
                });
              }),
              Object(a.c)([l.C], e.prototype, "rgModelNames", void 0),
              Object(a.c)([p.a], e.prototype, "GetNeighbors", null),
              Object(a.c)([p.a], e.prototype, "EstimateCosts", null),
              e
            );
          })()),
        m = (function () {
          function e(e) {
            (this.m_Heap = []), (this.m_Length = 0), (this.m_fnCompare = e);
          }
          return (
            Object.defineProperty(e.prototype, "length", {
              get: function () {
                return this.m_Length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.Clear = function () {
              (this.m_Heap = []), (this.m_Length = 0);
            }),
            (e.prototype.Peek = function () {
              return this.m_Length > 0 ? this.m_Heap[0] : void 0;
            }),
            (e.prototype.Pop = function () {
              if (0 != this.m_Length) {
                var e = this.m_Heap[0];
                return (
                  (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
                  this.m_Length--,
                  this.BubbleDown(),
                  e
                );
              }
            }),
            (e.prototype.Push = function (e) {
              this.m_Heap.length == this.m_Length
                ? this.m_Heap.push(e)
                : (this.m_Heap[this.m_Length] = e),
                this.m_Length++,
                this.BubbleUp();
            }),
            (e.prototype.FindElement = function (e) {
              for (var t = 0; t < this.m_Length; t++)
                if (e(this.m_Heap[t]))
                  return { index: t, element: this.m_Heap[t] };
            }),
            (e.prototype.LowerPriorityOfElement = function (e, t) {
              (this.m_Heap[e] = t), this.BubbleUp(e);
            }),
            (e.prototype.BubbleDown = function () {
              var e = 0;
              do {
                var t = 2 * e + 1,
                  r = 2 * e + 2,
                  a = e;
                if (
                  (t < this.m_Length &&
                    this.m_fnCompare(this.m_Heap[a], this.m_Heap[t]) > 0 &&
                    (a = t),
                  r < this.m_Length &&
                    this.m_fnCompare(this.m_Heap[a], this.m_Heap[r]) > 0 &&
                    (a = r),
                  a == e)
                )
                  break;
                var n = this.m_Heap[e];
                (this.m_Heap[e] = this.m_Heap[a]),
                  (this.m_Heap[a] = n),
                  (e = a);
              } while (e < this.m_Length);
            }),
            (e.prototype.BubbleUp = function (e) {
              for (var t = e || this.m_Length - 1; t > 0; ) {
                var r = (t - 1) >> 1;
                if (!(this.m_fnCompare(this.m_Heap[r], this.m_Heap[t]) > 0))
                  break;
                var a = this.m_Heap[r];
                (this.m_Heap[r] = this.m_Heap[t]),
                  (this.m_Heap[t] = a),
                  (t = r);
              }
            }),
            e
          );
        })(),
        h = (function () {
          function e(e, t, r, a) {
            (this.m_fnGetNeighbors = e),
              (this.m_fnEstimateCosts = t),
              (this.m_fnEquality = r),
              (this.m_fnIterationCallback = a);
          }
          return (
            (e.prototype.FindPath = function (e, t, r) {
              return Object(a.b)(this, void 0, void 0, function () {
                var n, i, s, o, l, p, c, u, d, h, f, _, b, y, g, v;
                return Object(a.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (n = new m(function (e, t) {
                          return e.cost - t.cost;
                        })),
                        (i = new Set()),
                        n.Push({ node: e, cost: 0 }),
                        (s = new Map()),
                        (o = new Map()),
                        (l = new Map()),
                        [4, this.m_fnEstimateCosts([e], t)]
                      );
                    case 1:
                      (p = a.sent()[0]),
                        s.set(e, p),
                        o.set(e, 0),
                        (c = 0),
                        (a.label = 2);
                    case 2:
                      if (!(n.length > 0 && c < r)) return [3, 6];
                      if (((u = n.Pop()), this.m_fnEquality(u.node, t))) {
                        for (d = [], h = u.node; l.has(h); )
                          d.push(h), (h = l.get(h));
                        for (f = [], v = d.length - 1; v >= 0; v--)
                          f.push({ node: d[v], cost: o.get(d[v]) });
                        return [2, { path: f }];
                      }
                      return i.add(u.node), [4, this.m_fnGetNeighbors(u.node)];
                    case 3:
                      return (_ = a.sent()).length > 0
                        ? [
                            4,
                            this.m_fnEstimateCosts(
                              _.map(function (e) {
                                return e.node;
                              }),
                              t
                            ),
                          ]
                        : [3, 5];
                    case 4:
                      if ((b = a.sent()).length != _.length)
                        return (
                          console.warn(
                            "Failed to fetch expected number of cost estimates. Failing pathfinding."
                          ),
                          [2, {}]
                        );
                      for (
                        y = o.get(u.node),
                          g = function (e) {
                            var t = _[e],
                              r = y + t.cost;
                            if (
                              (!o.has(t.node) || r < o.get(t.node)) &&
                              (l.set(t.node, u.node),
                              o.set(t.node, r),
                              s.set(t.node, t.cost + b[e]),
                              !i.has(t.node))
                            ) {
                              var a = t.cost + b[e],
                                p = n.FindElement(function (e) {
                                  return e.node == t.node;
                                });
                              p
                                ? p.element.cost > a &&
                                  n.LowerPriorityOfElement(p.index, {
                                    node: t.node,
                                    cost: a,
                                  })
                                : n.Push({ node: t.node, cost: a });
                            }
                          },
                          v = 0;
                        v < _.length;
                        v++
                      )
                        g(v);
                      a.label = 5;
                    case 5:
                      return (
                        c++,
                        this.m_fnIterationCallback &&
                          this.m_fnIterationCallback(),
                        [3, 2]
                      );
                    case 6:
                      throw new Error("No path found.");
                  }
                });
              });
            }),
            e
          );
        })(),
        f = new d();
      window.g_LabsSandbox = f;
      var _ = r("q1tI"),
        b = r.n(_),
        y = r("55Ip"),
        g = r("EC67"),
        v = r("PXMQ"),
        S = r("Mgs7"),
        O = r("kyHq"),
        E = r("TyAF"),
        C = r("exH9"),
        B = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.state = {
                appid: 0,
                appinfo: null,
                mode: "display",
                strSearch: "",
                rgSuggestions: [],
              }),
              (r.m_currentRequest = 0),
              r.props.appidInitial &&
                (i.a
                  .EnsureAppInfoForAppIDs([r.props.appidInitial])
                  .then(function () {
                    i.a.GetAppInfo(r.props.appidInitial);
                    r.setState({
                      appid: r.props.appidInitial,
                      appinfo: i.a.GetAppInfo(r.props.appidInitial),
                    });
                  }),
                (r.state.appid = r.props.appidInitial)),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnDisplayClicked = function () {
              this.setState({ mode: "select" });
            }),
            (t.prototype.UpdateAppSuggestions = function (e) {
              return Object(a.b)(this, void 0, void 0, function () {
                var t,
                  r = this;
                return Object(a.e)(this, function (n) {
                  return (
                    null == (t = e.target.value && e.target.value.trim())
                      ? void 0
                      : t.length
                  )
                    ? (window.clearTimeout(this.m_currentRequest),
                      (this.m_currentRequest = window.setTimeout(function () {
                        return Object(a.b)(r, void 0, void 0, function () {
                          var e,
                            r,
                            n,
                            i,
                            s,
                            l = this;
                          return Object(a.e)(this, function (a) {
                            switch (a.label) {
                              case 0:
                                return (
                                  (e = {
                                    cc: o.d.COUNTRY,
                                    l: o.d.LANGUAGE,
                                    realm: O.g.k_ESteamRealmGlobal,
                                    origin: self.origin,
                                    f: "jsonfull",
                                    term: t.replace(" ", "+"),
                                    require_type: "game",
                                    excluded_tags: [],
                                    excluded_content_descriptors: [],
                                  }),
                                  (r = o.d.STORE_BASE_URL + "search/suggest"),
                                  [
                                    4,
                                    u.a.get(r, {
                                      params: e,
                                      withCredentials: !0,
                                    }),
                                  ]
                                );
                              case 1:
                                return (
                                  (n = a.sent()),
                                  (i = (
                                    null ===
                                      (s = null == n ? void 0 : n.data) ||
                                    void 0 === s
                                      ? void 0
                                      : s.length
                                  )
                                    ? n.data.map(function (e) {
                                        return b.a.createElement(
                                          "div",
                                          {
                                            className: v.Suggestion,
                                            key: "suggestion-" + e.id,
                                            onClickCapture: function () {
                                              return l.SetSelectedApp(
                                                parseInt(e.id)
                                              );
                                            },
                                          },
                                          b.a.createElement("img", {
                                            src: e.img,
                                            className: v.LogoImage,
                                          }),
                                          b.a.createElement(
                                            "div",
                                            { className: v.AppName },
                                            e.name +
                                              (l.props.showAppIds
                                                ? " (" + e.id + ")"
                                                : "")
                                          )
                                        );
                                      })
                                    : []),
                                  this.setState({
                                    strSearch: t,
                                    rgSuggestions: i,
                                  }),
                                  [2]
                                );
                            }
                          });
                        });
                      }, 250)),
                      [2])
                    : (this.setState({ strSearch: "", rgSuggestions: null }),
                      [2]);
                });
              });
            }),
            (t.prototype.SetSelectedApp = function (e) {
              var t = this;
              e && 0 != e
                ? i.a.EnsureAppInfoForAppIDs([e]).then(function () {
                    i.a.GetAppInfo(e);
                    t.setState({
                      appid: e,
                      appinfo: i.a.GetAppInfo(e),
                      mode: "display",
                    }),
                      t.props.fnOnSelection && t.props.fnOnSelection(e, t);
                  })
                : this.setState({ appid: 0, appinfo: null, mode: "display" });
            }),
            (t.prototype.OnKeyUp = function (e) {
              27 == e.keyCode && this.setState({ mode: "display" });
            }),
            (t.prototype.render = function () {
              var e,
                t,
                r =
                  null !== (e = this.props.classOverride) && void 0 !== e
                    ? e
                    : v.AppSelector,
                a = null,
                n = b.a.createElement(S.l, {
                  type: "text",
                  onChange: this.UpdateAppSuggestions,
                });
              if ("display" == this.state.mode) {
                var i = this.state.appinfo
                  ? this.state.appinfo.name +
                    (this.props.showAppIds ? " (" + this.state.appid + ")" : "")
                  : null !== (t = this.props.strPrompt) && void 0 !== t
                  ? t
                  : "Select game";
                a = b.a.createElement(
                  "div",
                  { className: v.AppDisplay },
                  this.state.appinfo &&
                    b.a.createElement("img", {
                      src: this.state.appinfo.header_image_url,
                      className: v.LogoImage,
                    }),
                  b.a.createElement("div", { className: v.AppName }, i)
                );
              } else if ("select" == this.state.mode) {
                var s = this.state.strSearch.length > 0;
                a = b.a.createElement(
                  "div",
                  { className: v.AppSelect },
                  n,
                  s &&
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
                  className: r,
                  onClick: this.OnDisplayClicked,
                  onKeyUpCapture: this.OnKeyUp,
                },
                a
              );
            }),
            Object(a.c)([p.a], t.prototype, "OnDisplayClicked", null),
            Object(a.c)([p.a], t.prototype, "UpdateAppSuggestions", null),
            Object(a.c)([p.a], t.prototype, "OnKeyUp", null),
            t
          );
        })(b.a.Component),
        w = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.render = function () {
              var e = this;
              if (0 == this.props.appid)
                return b.a.createElement("div", { className: v.SimilarApp });
              var t = i.a.GetAppInfo(this.props.appid);
              if (!t || !t.is_valid)
                return b.a.createElement("div", { className: v.SimilarApp });
              var r = [];
              if (this.props.score) {
                r.push(
                  b.a.createElement("div", {
                    className: v.Spacer,
                    key: "score-spacer",
                  })
                );
                var a = Math.round(100 * this.props.score).toString() + "%";
                r.push(
                  b.a.createElement(
                    "div",
                    { className: v.Score, key: "score-value" },
                    a
                  )
                );
              }
              var n = t.name + " (" + this.props.appid.toString() + ")",
                s = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : function (e) {};
              return b.a.createElement(
                "div",
                {
                  className: v.SimilarApp,
                  onClick: function () {
                    return s(e.props.appid);
                  },
                },
                b.a.createElement("img", {
                  src: t.header_image_url,
                  className: v.LogoImage,
                }),
                b.a.createElement("div", { className: v.AppName }, n),
                r
              );
            }),
            t
          );
        })(b.a.Component),
        A = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = {}),
              (t.ref_app_a = b.a.createRef()),
              (t.ref_app_b = b.a.createRef()),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.OnAppSelected();
            }),
            (t.prototype.OnAppSelected = function () {
              var e = this;
              if (
                this.ref_app_a.current &&
                this.ref_app_b.current &&
                this.ref_app_a.current.state.appid &&
                this.ref_app_b.current.state.appid
              ) {
                var t = this.ref_app_a.current.state.appid,
                  r = this.ref_app_b.current.state.appid,
                  a =
                    o.d.STORE_BASE_URL +
                    "labs/ajaxgetappsimilarities?appidtarget=" +
                    t +
                    "&appid[]=" +
                    r;
                u.a.get(a).then(function (t) {
                  t.data && t.data.similarity_scores
                    ? e.setState({ score: t.data.similarity_scores[0] })
                    : e.setState({ score: null });
                });
              }
            }),
            (t.prototype.render = function () {
              var e = this.state.score
                ? (100 * this.state.score).toFixed(1) + "%"
                : "";
              return b.a.createElement(
                "div",
                { className: v.LabsSimilarity },
                b.a.createElement(B, {
                  fnOnSelection: this.OnAppSelected,
                  ref: this.ref_app_a,
                  showAppIds: !0,
                  appidInitial: 268500,
                  key: "similar_app_a",
                }),
                b.a.createElement("div", { className: v.HorizontalSpacer }),
                b.a.createElement("div", { className: v.Score }, e),
                b.a.createElement("div", { className: v.HorizontalSpacer }),
                b.a.createElement(B, {
                  fnOnSelection: this.OnAppSelected,
                  ref: this.ref_app_b,
                  showAppIds: !0,
                  appidInitial: 200510,
                  key: "similar_app_b",
                })
              );
            }),
            Object(a.c)([p.a], t.prototype, "OnAppSelected", null),
            t
          );
        })(b.a.Component),
        j = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.selected_app = 0),
              (r.similar_apps = []),
              (r.similarity_scores = []),
              (r.similarity_model = "default"),
              (r.app_selector_ref = b.a.createRef()),
              t.default_app && r.SetSelectedApp(t.default_app),
              r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.app_selector_ref.current &&
                this.SetSelectedApp(this.app_selector_ref.current.state.appid);
            }),
            (t.prototype.OnSelectedApp = function (e) {
              e && this.SetSelectedApp(e);
            }),
            (t.prototype.SetSelectedApp = function (e, t) {
              var r = this;
              if (t || e != this.selected_app) {
                (this.similar_apps = []),
                  (this.selected_app = e),
                  this.app_selector_ref.current &&
                    this.app_selector_ref.current.SetSelectedApp(e);
                var a =
                  o.d.STORE_BASE_URL +
                  "labs/ajaxgetsimilarapps?appid=" +
                  e +
                  "&model=" +
                  this.similarity_model;
                u.a.get(a).then(function (e) {
                  if (e.data && e.data.appid == r.selected_app) {
                    var t = new Set(
                      e.data.similar_appids.slice(0, r.props.max_similar)
                    );
                    t.add(e.data.appid),
                      i.a.EnsureAppInfoForAppIDs(t).then(function () {
                        (r.similar_apps = e.data.similar_appids),
                          (r.similarity_scores = e.data.similarity_scores);
                      });
                  }
                });
              }
            }),
            (t.prototype.OnModelChanged = function (e, t) {
              (this.similarity_model = e.data),
                this.SetSelectedApp(this.selected_app, !0);
            }),
            (t.prototype.render = function () {
              var e,
                t = [],
                r = Math.min(
                  this.similar_apps.length,
                  this.similarity_scores.length,
                  this.props.max_similar
                );
              for (e = 0; e < r; e++) {
                var a = this.similar_apps[e],
                  n = this.similarity_scores[e];
                t.push(
                  b.a.createElement(w, {
                    appid: a,
                    score: n,
                    key: a,
                    fnOnSelected: this.SetSelectedApp,
                  })
                );
              }
              for (var i = [], s = 0, o = f.rgModelNames; s < o.length; s++) {
                var l = o[s],
                  p = {
                    label: b.a.createElement("div", { key: l }, l),
                    data: l,
                  };
                i.push(p);
              }
              return b.a.createElement(
                "div",
                { className: v.LabsSimilarGames },
                b.a.createElement(S.h, {
                  rgOptions: i,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                b.a.createElement("h1", null, "Games similar to:"),
                b.a.createElement(B, {
                  fnOnSelection: this.OnSelectedApp,
                  ref: this.app_selector_ref,
                  appidInitial: 268500,
                  showAppIds: !0,
                }),
                b.a.createElement("div", { className: v.SimilarApps }, t)
              );
            }),
            Object(a.c)([l.C], t.prototype, "selected_app", void 0),
            Object(a.c)([l.C], t.prototype, "similar_apps", void 0),
            Object(a.c)([l.C], t.prototype, "similarity_scores", void 0),
            Object(a.c)([l.C], t.prototype, "similarity_model", void 0),
            Object(a.c)([p.a], t.prototype, "OnSelectedApp", null),
            Object(a.c)([p.a], t.prototype, "SetSelectedApp", null),
            Object(a.c)([p.a], t.prototype, "OnModelChanged", null),
            (t = Object(a.c)([E.a], t))
          );
        })(b.a.Component),
        I = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.selected_app = t.app), (r.selected_operator = t.operator), r
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnSelectedApp = function (e) {
              e &&
                e != this.selected_app &&
                ((this.selected_app = e),
                this.props.fnOnChange && this.props.fnOnChange());
            }),
            (t.prototype.OnSelectedOperator = function (e, t) {
              (this.selected_operator = e.data),
                this.props.fnOnChange && this.props.fnOnChange();
            }),
            (t.prototype.render = function () {
              var e = [
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
                  b.a.createElement(S.h, {
                    rgOptions: e,
                    onChange: this.OnSelectedOperator,
                    selectedOption: "Plus",
                  })
                ),
                b.a.createElement(B, { fnOnSelection: this.OnSelectedApp })
              );
            }),
            Object(a.c)([l.C], t.prototype, "selected_app", void 0),
            Object(a.c)([l.C], t.prototype, "selected_operator", void 0),
            Object(a.c)([p.a], t.prototype, "OnSelectedApp", null),
            Object(a.c)([p.a], t.prototype, "OnSelectedOperator", null),
            (t = Object(a.c)([E.a], t))
          );
        })(b.a.Component),
        M = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            (r.operands = []),
              (r.similarity_model = "default"),
              (r.similar_apps = []),
              (r.similarity_scores = []),
              (r.operand_refs = []);
            for (var a = 0; a < t.max_operands; a++)
              r.operand_refs.push(b.a.createRef());
            return r;
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.OnModelChanged = function (e, t) {
              (this.similarity_model = e.data), this.RecomputeExpression();
            }),
            (t.prototype.OnAddOperand = function () {
              this.operands.length < this.props.max_operands &&
                this.operands.push({
                  app: 0,
                  operator: this.operands.length > 0 ? "Plus" : void 0,
                });
            }),
            (t.prototype.OnOperandChanged = function () {
              for (var e = 0; e < this.operands.length; e++) {
                var t = this.operand_refs[e].current;
                (this.operands[e].app = t.selected_app),
                  (this.operands[e].operator = t.selected_operator);
              }
              this.RecomputeExpression();
            }),
            (t.prototype.RecomputeExpression = function () {
              var e = this;
              if (0 != this.operands.length) {
                var t = this.operands.map(function (e) {
                    return "appid[]=" + e.app.toString();
                  }),
                  r =
                    o.d.STORE_BASE_URL +
                    "labs/ajaxgetappvectors?" +
                    t.join("&") +
                    "&model=" +
                    this.similarity_model;
                u.a.get(r).then(function (t) {
                  if (
                    ((e.similar_apps = []),
                    (e.similarity_scores = []),
                    t.data && t.data.length == e.operands.length)
                  ) {
                    for (
                      var r = t.data[0].components.map(function (e) {
                          return parseFloat(e);
                        }),
                        a = function (a) {
                          var n = t.data[a].components.map(function (e) {
                            return parseFloat(e);
                          });
                          "Plus" == e.operands[a].operator
                            ? (r = r.map(function (e, t) {
                                return e + n[t];
                              }))
                            : "Minus" == e.operands[a].operator
                            ? (r = r.map(function (e, t) {
                                return e - n[t];
                              }))
                            : console.log(
                                "Unexpected operator " + e.operands[a].operator
                              );
                        },
                        n = 1;
                      n < e.operands.length;
                      n++
                    )
                      a(n);
                    var s = r
                        .map(function (e) {
                          return e * e;
                        })
                        .reduce(function (e, t) {
                          return e + t;
                        }, 0),
                      l = Math.sqrt(s);
                    if (l > 1e-4) {
                      var p = r
                          .map(function (e) {
                            return e / l;
                          })
                          .map(function (e) {
                            return "x[]=" + e;
                          })
                          .join("&"),
                        c =
                          o.d.STORE_BASE_URL +
                          "labs/ajaxgetmostsimilarappstovector?" +
                          p +
                          "&model=" +
                          e.similarity_model;
                      u.a.get(c).then(function (t) {
                        var r = new Set(
                          t.data.similar_appids.slice(0, e.props.max_similar)
                        );
                        i.a.EnsureAppInfoForAppIDs(r).then(function () {
                          (e.similar_apps = t.data.similar_appids),
                            (e.similarity_scores = t.data.similarity_scores);
                        });
                      });
                    }
                  }
                });
              }
            }),
            (t.prototype.render = function () {
              for (var e = [], t = 0, r = f.rgModelNames; t < r.length; t++) {
                var a = r[t],
                  n = {
                    label: b.a.createElement("div", { key: a }, a),
                    data: a,
                  };
                e.push(n);
              }
              for (
                var i = [], s = 0, o = 0, l = this.operands;
                o < l.length;
                o++
              ) {
                var p = l[o];
                i.push(
                  b.a.createElement(I, {
                    app: p.app,
                    operator: p.operator,
                    key: s,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[s],
                  })
                ),
                  s++;
              }
              var c = null;
              this.operands.length < this.props.max_operands &&
                (c = b.a.createElement(
                  "div",
                  { className: v.AddOperand, onClick: this.OnAddOperand },
                  "+"
                ));
              for (
                var u = [],
                  d = Math.min(
                    this.similar_apps.length,
                    this.similarity_scores.length,
                    this.props.max_similar
                  ),
                  m = 0;
                m < d;
                m++
              ) {
                var h = this.similar_apps[m],
                  _ = this.similarity_scores[m];
                u.push(b.a.createElement(w, { appid: h, score: _, key: h }));
              }
              return b.a.createElement(
                "div",
                { className: v.LabsMixer },
                b.a.createElement(S.h, {
                  rgOptions: e,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                b.a.createElement("h1", null, "Mixture"),
                i,
                c,
                b.a.createElement("h1", null, "Games similar to mixture"),
                b.a.createElement("div", { className: v.SimilarApps }, u)
              );
            }),
            Object(a.c)([l.C], t.prototype, "operands", void 0),
            Object(a.c)([l.C], t.prototype, "similarity_model", void 0),
            Object(a.c)([l.C], t.prototype, "similar_apps", void 0),
            Object(a.c)([l.C], t.prototype, "similarity_scores", void 0),
            Object(a.c)([p.a], t.prototype, "OnModelChanged", null),
            Object(a.c)([p.a], t.prototype, "OnAddOperand", null),
            Object(a.c)([p.a], t.prototype, "OnOperandChanged", null),
            (t = Object(a.c)([E.a], t))
          );
        })(b.a.Component),
        R = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.app_start = 0),
              (t.app_end = 0),
              (t.in_progress = !1),
              (t.progress_iteration = 0),
              (t.found_path = void 0),
              t
            );
          }
          return (
            Object(a.d)(t, e),
            (t.prototype.IterationCallback = function () {
              this.progress_iteration++;
            }),
            (t.prototype.Pathfind = function () {
              var e = this;
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
                  .then(function (t) {
                    (e.in_progress = !1),
                      i.a
                        .EnsureAppInfoForAppIDs(
                          t.map(function (e) {
                            return e.appid;
                          })
                        )
                        .then(function () {
                          e.found_path = t;
                        });
                  })
                  .catch(function (t) {
                    console.warn(
                      "Caught pathfinding failure because: " + t.toString()
                    ),
                      (e.in_progress = !1),
                      (e.found_path = void 0);
                  }));
            }),
            (t.prototype.OnSelectedStartApp = function (e) {
              var t = this;
              i.a.EnsureAppInfoForAppIDs([e]).then(function () {
                t.app_start = e;
              });
            }),
            (t.prototype.OnSelectedEndApp = function (e) {
              var t = this;
              i.a.EnsureAppInfoForAppIDs([e]).then(function () {
                t.app_end = e;
              });
            }),
            (t.prototype.render = function () {
              var e =
                  0 != this.app_start &&
                  0 != this.app_end &&
                  !this.in_progress &&
                  this.app_start != this.app_end,
                t = e
                  ? v.ComputeButton
                  : Object(C.a)(v.ComputeButton, v.Disable),
                r = null;
              r = this.in_progress
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
              var a = [];
              if (this.found_path)
                for (var n = 0; n < this.found_path.length; n++) {
                  var i = this.found_path[n];
                  a.push(
                    b.a.createElement(w, {
                      appid: i.appid,
                      score: i.similarity,
                      key: "pathstep" + n,
                    })
                  );
                }
              return b.a.createElement(
                "div",
                { className: v.LabsPathfinder },
                b.a.createElement(
                  "div",
                  { className: v.SelectEndpoints },
                  b.a.createElement(B, {
                    fnOnSelection: this.OnSelectedStartApp,
                    strPrompt: "Select start game",
                  }),
                  b.a.createElement(B, {
                    fnOnSelection: this.OnSelectedEndApp,
                    strPrompt: "Select end game",
                  })
                ),
                b.a.createElement(
                  "div",
                  { className: t, onClick: e ? this.Pathfind : function () {} },
                  "Pathfind!"
                ),
                r,
                b.a.createElement("div", { className: v.Path }, a)
              );
            }),
            Object(a.c)([l.C], t.prototype, "app_start", void 0),
            Object(a.c)([l.C], t.prototype, "app_end", void 0),
            Object(a.c)([l.C], t.prototype, "in_progress", void 0),
            Object(a.c)([l.C], t.prototype, "progress_iteration", void 0),
            Object(a.c)([l.C], t.prototype, "found_path", void 0),
            Object(a.c)([p.a], t.prototype, "IterationCallback", null),
            Object(a.c)([p.a], t.prototype, "Pathfind", null),
            Object(a.c)([p.a], t.prototype, "OnSelectedStartApp", null),
            Object(a.c)([p.a], t.prototype, "OnSelectedEndApp", null),
            (t = Object(a.c)([E.a], t))
          );
        })(b.a.Component);
      function x() {
        return b.a.createElement(
          b.a.Fragment,
          null,
          b.a.createElement("h1", null, "Similar Games"),
          b.a.createElement(j, { max_similar: 10 }),
          b.a.createElement("div", { className: v.Spacer }),
          b.a.createElement("h1", null, "Similarity"),
          b.a.createElement(A, null),
          b.a.createElement("div", { className: v.Spacer }),
          b.a.createElement("h1", null, "Mixer"),
          b.a.createElement(M, { max_similar: 10, max_operands: 6 }),
          b.a.createElement("div", { className: v.Spacer }),
          b.a.createElement("h1", null, "Pathfinder"),
          b.a.createElement(R, null)
        );
      }
      var N = r("kLLr"),
        P = (r("E4Op"), r("qiKp")),
        z = r("bxBv"),
        k = r("hRO2"),
        L = r("OS8t"),
        F = r("sRB7"),
        T = k.Message;
      var D,
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.items || L.a(t.M()),
              T.initialize(a, r, 0, -1, [1], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { items: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = L.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return L.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return L.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new k.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return L.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new k.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              L.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new k.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
            }),
            t
          );
        })(T),
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.id || L.a(t.M()),
              T.initialize(a, r, 0, -1, [50], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      id: { n: 1, c: F.f },
                      already_owned: {
                        n: 2,
                        br: L.d.readBool,
                        bw: L.h.writeBool,
                      },
                      weight: { n: 3, br: L.d.readDouble, bw: L.h.writeDouble },
                      weight_before_dedupe: {
                        n: 4,
                        br: L.d.readDouble,
                        bw: L.h.writeDouble,
                      },
                      debug_matches: { n: 50, c: H, r: !0, q: !0 },
                      debug_popularity: { n: 51, c: G },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = L.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return L.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return L.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new k.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return L.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new k.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              L.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new k.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
            }),
            t
          );
        })(T),
        H = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.source_app || L.a(t.M()),
              T.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      source_app: {
                        n: 1,
                        br: L.d.readInt32,
                        bw: L.h.writeInt32,
                      },
                      weight: { n: 2, br: L.d.readDouble, bw: L.h.writeDouble },
                      similarity: {
                        n: 3,
                        br: L.d.readDouble,
                        bw: L.h.writeDouble,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = L.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return L.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return L.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new k.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return L.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new k.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              L.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new k.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
            }),
            t
          );
        })(T),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.rank || L.a(t.M()),
              T.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = L.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return L.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return L.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new k.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return L.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new k.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              L.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new k.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
            }),
            t
          );
        })(T),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.steamid || L.a(t.M()),
              T.initialize(a, r, 0, -1, void 0, null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                      context: { n: 10, c: F.b },
                      data_request: { n: 11, c: F.c },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = L.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return L.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return L.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new k.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return L.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new k.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              L.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new k.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
            }),
            t
          );
        })(T),
        K = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.clusters || L.a(t.M()),
              T.initialize(a, r, 0, -1, [1], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { clusters: { n: 1, c: V, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = L.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return L.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return L.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new k.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return L.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new k.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              L.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new k.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
            }),
            t
          );
        })(T),
        V = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var a = e.call(this) || this;
            return (
              t.prototype.cluster_id || L.a(t.M()),
              T.initialize(a, r, 0, -1, [5, 6, 7], null),
              a
            );
          }
          return (
            Object(a.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      cluster_id: {
                        n: 1,
                        br: L.d.readInt32,
                        bw: L.h.writeInt32,
                      },
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
                      similar_items: { n: 7, c: F.e, r: !0, q: !0 },
                      similar_item_popularity_score: {
                        n: 8,
                        br: L.d.readDouble,
                        bw: L.h.writeDouble,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = L.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return L.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return L.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new k.BinaryReader(e),
                a = new t();
              return t.deserializeBinaryFromReader(a, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return L.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new k.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              L.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new k.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
            }),
            t
          );
        })(T);
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
              K,
              { ePrivilege: 2, eWebAPIKeyRequirement: 2 }
            );
          });
      })(D || (D = {}));
      var Q = r("AKiZ"),
        J = (r("g4bM"), r("C4Nl")),
        X = (function () {
          function e(e) {
            this.m_SteamInterface = e;
          }
          return (
            (e.prototype.LoadPlaytimeClusters = function (e, t, r, a) {
              return new Z(this.m_SteamInterface, e, t, r, a);
            }),
            e
          );
        })(),
        Z = (function () {
          function e(e, t, r, a, n) {
            var i = this;
            this.m_callbacksLoaded = new P.a();
            var s = z.b.Init(q);
            Object(Q.a)(s),
              n && Object(Q.b)(s, n),
              s.Body().set_steamid(t || o.k.steamid),
              a && s.Body().set_clusters_to_return(a),
              s.Body().set_sort(r),
              D.IdentifyClustersFromPlaytime(e.GetServiceTransport(), s).then(
                function (e) {
                  var t = e.Body();
                  i.m_rgClusters = [];
                  for (var r = 0, a = t.clusters(); r < a.length; r++) {
                    var s = a[r];
                    i.m_rgClusters.push(i.ReadCluster(s, n));
                  }
                  i.m_callbacksLoaded.Dispatch(i.m_rgClusters);
                }
              );
          }
          return (
            (e.prototype.ReadCluster = function (e, t) {
              var r;
              return (
                t &&
                  (r = e.similar_items().map(function (e) {
                    return J.a.Get().ReadItem(e, t);
                  })),
                {
                  nClusterID: e.cluster_id(),
                  nPlaytimeMinutes: e.playtime_forever(),
                  nPlaytimeMinutes2Weeks: e.playtime_2weeks(),
                  rtLastPlayed: e.last_played(),
                  rgAppIDsPlayed: e.played_appids(),
                  rgSimilarItems: r.filter(function (e) {
                    return !!e;
                  }),
                  rgSimilarAppIDs: e.similar_items_appids(),
                  flPopularityScore: e.similar_item_popularity_score(),
                }
              );
            }),
            (e.prototype.RegisterOnReadyCallback = function (e) {
              var t = this,
                r = this.m_callbacksLoaded.Register(e);
              return (
                void 0 !== this.m_rgClusters &&
                  window.setTimeout(function () {
                    return e(t.m_rgClusters);
                  }, 0),
                r
              );
            }),
            e
          );
        })();
      var Y,
        $ = r("0OaU"),
        ee = r("TLQK"),
        te = r("1wed"),
        re = r("b3LC"),
        ae = r("uuth"),
        ne = r("IjL/");
      function ie(e) {
        var t = e.SteamInterface,
          r = _.useRef();
        return (
          r.current || (r.current = new X(t)),
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
            _.createElement(oe, { SimilarityStore: r.current })
          )
        );
      }
      var se =
        (((Y = {})[3] = "Total Playtime"),
        (Y[2] = "Number of Played Games"),
        (Y[1] = "Most Recently Played"),
        Y);
      function oe(e) {
        var t = e.SimilarityStore,
          r = _.useState(o.k.steamid),
          n = r[0],
          i = r[1],
          s = _.useState("10"),
          l = s[0],
          p = s[1],
          c = _.useState(1),
          u = c[0],
          d = c[1],
          m = _.useCallback(
            function (e) {
              return i(e.currentTarget.value);
            },
            [i]
          ),
          h = _.useCallback(
            function (e) {
              return p(e.currentTarget.value);
            },
            [p]
          ),
          f = _.useCallback(
            function (e) {
              return d(e.data);
            },
            [d]
          ),
          b = !1,
          y = _.useRef(o.k.steamid),
          g = n && new N.a(n);
        g &&
          g.BIsValid() &&
          g.BIsIndividualAccount() &&
          ((y.current = g.ConvertTo64BitString()), (b = !0));
        var v = void 0;
        l && !isNaN(parseInt(l)) && (v = parseInt(l));
        var O = _.useMemo(function () {
            var e = [];
            for (var t in se) e.push({ data: Number(t), label: se[t] });
            return e;
          }, []),
          E = (function (e, t, r, n, i, s) {
            void 0 === n && (n = 1),
              void 0 === i && (i = null),
              void 0 === s && (s = []);
            var o = _.useState(null),
              l = o[0],
              p = o[1];
            return (
              _.useEffect(function () {
                if ((p(null), r))
                  return e
                    .LoadPlaytimeClusters(r, n, i, t)
                    .RegisterOnReadyCallback(p).Unregister;
              }, Object(a.g)([r, n, i], s)),
              l
            );
          })(
            t,
            { include_assets: !0, include_basic_info: !0 },
            y.current,
            u,
            v
          );
        return _.createElement(
          "div",
          null,
          _.createElement(
            S.b,
            { className: te.ClusterConfig },
            _.createElement(S.l, {
              label: "SteamID",
              type: "text",
              value: n,
              onChange: m,
              explainer: !b && "Invalid SteamID",
            }),
            _.createElement(S.l, {
              label: "Clusters to return (Set to blank for all clusters)",
              type: "text",
              value: l,
              onChange: h,
            }),
            _.createElement(S.h, {
              label: "Sort clusters by",
              rgOptions: O,
              selectedOption: u,
              onChange: f,
            })
          ),
          b && !E && _.createElement($.a, null),
          E && _.createElement(le, { rgPlaytimeClusters: E })
        );
      }
      function le(e) {
        var t = e.rgPlaytimeClusters;
        return _.createElement(
          "div",
          null,
          t.map(function (e) {
            return _.createElement(
              ne.a,
              { key: e.nClusterID },
              _.createElement(pe, { cluster: e })
            );
          })
        );
      }
      function pe(e) {
        var t = e.cluster,
          r = _.useState(!1),
          a = r[0],
          n = r[1],
          i = _.useCallback(
            function () {
              return n(!0);
            },
            [n]
          ),
          s = _.useState(!1),
          o = s[0],
          l = s[1],
          p = _.useCallback(
            function () {
              return l(!0);
            },
            [l]
          );
        return _.createElement(
          ae.a,
          { onEnter: p },
          _.createElement(
            "div",
            { className: te.PlaytimeCluster },
            _.createElement(
              "div",
              { className: te.ClusterInfo },
              _.createElement("h1", null, "Cluster ", t.nClusterID),
              _.createElement(
                ne.a,
                null,
                _.createElement(
                  "div",
                  { className: te.Overview },
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
                    Object(ee.o)(t.rtLastPlayed),
                    " "
                  ),
                  _.createElement(
                    "div",
                    null,
                    _.createElement("b", null, "Games played:"),
                    " ",
                    o &&
                      t.rgAppIDsPlayed.map(function (e) {
                        return _.createElement(
                          _.Fragment,
                          { key: e },
                          _.createElement(ue, { appid: e }),
                          ", "
                        );
                      })
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
              { className: te.ClusterMembers },
              _.createElement("h3", null, "Similar titles:"),
              _.createElement(
                ne.a,
                null,
                _.createElement(
                  "ul",
                  null,
                  t.rgSimilarItems.map(function (e, t) {
                    return a || t < 4
                      ? _.createElement(
                          "li",
                          { key: e.GetUniqueID() },
                          _.createElement(de, { item: e })
                        )
                      : null;
                  })
                )
              ),
              !a &&
                _.createElement(
                  S.d,
                  { onClick: i },
                  "Show all ",
                  t.rgSimilarItems.length
                )
            )
          )
        );
      }
      var ce = {};
      function ue(e) {
        var t = e.appid,
          r = Object(re.b)(t, ce)[0];
        return r
          ? _.createElement(
              "a",
              { className: te.PlayedGame, href: r.GetStorePageURL() },
              r.GetName()
            )
          : null;
      }
      function de(e) {
        var t = e.item;
        return _.createElement(
          "a",
          { className: te.SimilarTitle, href: t.GetStorePageURL() },
          _.createElement("img", {
            src: t.assets.GetSmallCapsuleURL(),
            loading: "lazy",
          }),
          t.GetName()
        );
      }
      var me = r("vyDT"),
        he = [
          {
            path: "similarity",
            render: function () {
              return b.a.createElement(x, null);
            },
            name: "ML Similarity",
          },
          {
            path: "clustering",
            render: function (e) {
              return b.a.createElement(ie, {
                SteamInterface: e.SteamInterface,
              });
            },
            name: "Tag Clustering",
            requires_login: !0,
          },
        ],
        fe = Object(o.h)("labs", "application_config"),
        _e = new s.a(o.d.WEBAPI_BASE_URL, fe.webapi_token);
      function be(e) {
        var t = b.a.useState(!1),
          r = t[0],
          i = t[1],
          s = !!fe.webapi_token;
        if (
          (Object(_.useEffect)(function () {
            f.Init(), i(!0);
          }, []),
          !r)
        )
          return b.a.createElement("div", { className: v.App });
        var o = { SteamInterface: _e };
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
              he.map(function (e) {
                return b.a.createElement(
                  y.c,
                  {
                    key: e.path,
                    to: n.b.LabsSandbox() + "/" + e.path,
                    className: v.Tab,
                    activeClassName: v.Active,
                  },
                  e.name
                );
              })
            ),
            b.a.createElement(
              "div",
              { className: v.SandboxSection },
              b.a.createElement(
                ne.a,
                null,
                b.a.createElement(
                  g.d,
                  null,
                  he.map(function (e, t) {
                    return b.a.createElement(g.b, {
                      key: e.path,
                      path: n.b.LabsSandbox() + "/" + e.path,
                      render: function (t) {
                        return !e.requires_login || s
                          ? e.render(Object(a.a)(Object(a.a)({}, t), o))
                          : b.a.createElement(ye, null);
                      },
                    });
                  })
                )
              )
            )
          )
        );
      }
      function ye() {
        return b.a.createElement(
          "div",
          null,
          b.a.createElement("h3", null, "Please login to view this page."),
          b.a.createElement(me.a, {
            baseURL: o.d.STORE_BASE_URL,
            onLoginComplete: function () {
              return window.location.reload();
            },
          })
        );
      }
    },
    PXMQ: function (e, t, r) {
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

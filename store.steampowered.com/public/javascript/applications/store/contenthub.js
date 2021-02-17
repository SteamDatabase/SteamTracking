/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    j6A3: function (e, t, a) {
      "use strict";
      a.r(t);
      var c = a("q1tI"),
        d = a.n(c),
        m = a("lkRc"),
        g = (function () {
          function e() {
            var t = this;
            (this.m_mapAppLists = new Map()),
              (this.m_rgSections = new Array()),
              (this.m_mapSectionsID = new Map()),
              (this.m_definition = {}),
              (this.m_rgMixIN = new Array()),
              "dev" === m.d.WEB_UNIVERSE && (window.g_ContentHubStore = this);
            var e = Object(m.h)("ch_section_data", "application_config");
            this.ValidateSectionData(e) &&
              ((this.m_rgSections = e),
              this.m_rgSections.forEach(function (e) {
                return t.m_mapSectionsID.set(e.id, e);
              }));
            var a = Object(m.h)("ch_list_data", "application_config");
            this.ValidateAppListData(a) &&
              a.forEach(function (e) {
                t.m_mapAppLists.set(e.id, e),
                  t.m_mapSectionsID.has(e.id) || t.m_rgMixIN.push(e.id);
              }),
              (this.m_definition = Object(m.h)(
                "ch_static_data",
                "application_config"
              ));
          }
          return (
            (e.prototype.GetMainCapsuleLists = function () {
              var t = this;
              return this.m_rgMixIN.map(function (e) {
                return t.m_mapAppLists.get(e);
              });
            }),
            (e.prototype.GetSections = function () {
              return this.m_rgSections;
            }),
            (e.prototype.GetAppListForSection = function (e) {
              return this.m_mapAppLists.get(e);
            }),
            (e.prototype.GetDefinition = function () {
              return this.m_definition;
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  (e.s_globalSingletonStore = new e()),
                e.s_globalSingletonStore
              );
            }),
            (e.prototype.ValidateSectionData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].title &&
                "string" == typeof t[0].id &&
                "string" == typeof t[0].type
              );
            }),
            (e.prototype.ValidateAppListData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].id &&
                Array.isArray(t[0].apps)
              );
            }),
            e
          );
        })(),
        r = a("ee7K"),
        s = a("0OaU"),
        b = a("TLQK"),
        o = a("xVl9"),
        f = a("5eAM"),
        n = a("TyAF"),
        l = a("5L1o");
      function u(e) {
        var t = (function (t) {
            var e = Object(r.b)(),
              a = e[0],
              n = e[1];
            if (a) return [a, null];
            var i = new Array();
            return (
              g
                .Get()
                .GetMainCapsuleLists()
                .forEach(function (e) {
                  e.apps.forEach(function (e) {
                    i.length < t &&
                      e.appid &&
                      (n.BIsGameOwned(e.appid) ||
                        n.BIsGameIgnored(e.appid) ||
                        !f.a.BHasAppLinkLoaded(e.appid) ||
                        i.push(e));
                  });
                }),
              [!1, i]
            );
          })(10),
          a = t[0],
          n = t[1];
        return a
          ? d.a.createElement(s.a, {
              string: Object(b.f)("#Loading"),
              position: "center",
              size: "medium",
            })
          : d.a.createElement(
              o.a,
              { visibleElements: 1 },
              n.map(function (e) {
                return d.a.createElement(i, { key: e.appid, capsule: e });
              })
            );
      }
      var i = Object(n.a)(function (e) {
          var t = e.capsule,
            a = t.appid,
            n = "game";
          return (
            t.bundleid
              ? ((n = "bundle"), (a = t.bundleid))
              : t.packageid
              ? ((n = "sub"), (a = t.packageid))
              : (n = f.a.GetAppLinkInfo(a).type),
            d.a.createElement(
              "div",
              null,
              d.a.createElement(l.h, { id: a, type: n })
            )
          );
        }),
        p = a("MnIK"),
        h = a("dfs5"),
        _ = a("R+8l"),
        T = a("oVVc");
      function v(e, a) {
        var n = new Array();
        return (
          e.forEach(function (e) {
            var t;
            (!a || n.length < a) &&
              (e.appid
                ? (t = f.a.GetAppLinkInfo(e.appid)) &&
                  n.push({ id: e.appid, type: t.type })
                : e.bundleid && _.a.BHasBundleInfoLoaded(e.bundleid)
                ? n.push({ id: e.bundleid, type: "bundle" })
                : e.packageid &&
                  T.b.BHasPackageInfoLoaded(e.packageid) &&
                  n.push({ id: e.packageid, type: "sub" }));
          }),
          n
        );
      }
      function y(e) {
        var t = e.section,
          a = g.Get().GetAppListForSection(t.id);
        if (!a || !a.apps || 0 == a.apps.length) return null;
        var n = null;
        switch (t.type) {
          case "4wide":
            n = d.a.createElement(S, { appList: a });
            break;
          case "creator4wide":
            n = d.a.createElement(E, { appList: a });
            break;
          default:
            n = d.a.createElement("div", null, "Unknown: ", t.type);
        }
        return d.a.createElement(
          h.b,
          { feature: t.id },
          d.a.createElement(
            p.a,
            { placeholderHeight: 250, rootMargin: "0px 0px 100% 0px" },
            d.a.createElement(P, {
              title: t.title,
              description: t.description,
            }),
            n
          )
        );
      }
      var P = function (e) {
          var t = e.title,
            a = e.description;
          return d.a.createElement(
            "div",
            null,
            d.a.createElement("span", null, t),
            Boolean(a) && d.a.createElement("span", null, a)
          );
        },
        S = function (e) {
          var t = v(e.appList.apps, 40);
          return d.a.createElement(
            o.a,
            { visibleElements: 4 },
            t.map(function (e) {
              return d.a.createElement(l.i, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        E = function (e) {
          var t = e.appList,
            a = Object(r.b)(),
            n = a[0];
          a[1];
          if (n)
            return d.a.createElement(s.a, {
              string: Object(b.f)("#Loading"),
              size: "medium",
              position: "center",
            });
          var i = v(t.apps, 40);
          return d.a.createElement(
            o.a,
            { visibleElements: 4 },
            i.map(function (e) {
              return d.a.createElement(l.i, {
                key: e.type + "_" + e.id,
                capsule: e,
                imageType: "header",
              });
            })
          );
        },
        G = a("vDqi"),
        L = a.n(G),
        A = a("mrSG"),
        C = a("2vnA"),
        j = a("bDQf"),
        w = (function () {
          function e() {
            var a = this;
            (this.m_rgTabs = new Array()),
              (this.m_mapTabToPagingData = new Map()),
              (this.m_mapTabToPageList = new Map()),
              (this.m_mapTabToPageListPromises = new Map()),
              (this.m_nCurrentPage = 0),
              "dev" === m.d.WEB_UNIVERSE &&
                (window.g_ContentHubTabStore = this);
            var e = Object(m.h)("ch_tab_data", "application_config");
            this.ValidateTabData(e) &&
              ((this.m_rgTabs = e.filter(function (e) {
                return 0 < e.appids.length;
              })),
              0 < this.m_rgTabs.length &&
                (this.m_SelectedTab = this.m_rgTabs[0]),
              this.m_rgTabs.forEach(function (e) {
                var t = new Array();
                t.push(e.appids),
                  a.m_mapTabToPageList.set(e.name, t),
                  a.m_mapTabToPageListPromises.set(e.name, new Array());
              }));
            var t = Object(m.h)("ch_tab_paging", "application_config");
            this.ValidatePagingData(t) &&
              t.forEach(function (e) {
                return a.m_mapTabToPagingData.set(e.prefix, e);
              });
          }
          return (
            (e.prototype.GetVisibleTabs = function () {
              return this.m_rgTabs;
            }),
            (e.prototype.GetSelectedTab = function () {
              return this.m_SelectedTab;
            }),
            (e.prototype.SetSelectedTab = function (e) {
              (this.m_SelectedTab = e), (this.m_nCurrentPage = 0);
            }),
            (e.prototype.GetSelectedPage = function () {
              return this.m_nCurrentPage;
            }),
            (e.prototype.SetSelectedPage = function (e) {
              this.m_nCurrentPage !== e &&
                ((this.m_nCurrentPage = e),
                this.HintLoadTabPage(this.m_SelectedTab, e));
            }),
            (e.prototype.GetRowsPerPage = function (e) {
              return this.m_mapTabToPagingData.get(e.name).pagesize;
            }),
            (e.prototype.GetTotalMatchingResults = function (e) {
              return this.m_mapTabToPagingData.get(e.name).total_count;
            }),
            (e.prototype.GetNumPages = function (e) {
              var t = this.m_mapTabToPagingData.get(e.name);
              return Math.floor(t.total_count / t.pagesize) + 1;
            }),
            (e.prototype.BHasTabPageLoaded = function (e, t) {
              var a,
                n = this.m_mapTabToPageList.get(e.name);
              return Boolean(
                t < n.length &&
                  0 < (null === (a = n[t]) || void 0 === a ? void 0 : a.length)
              );
            }),
            (e.prototype.GetTabPageApps = function (e, t) {
              return this.m_mapTabToPageList.get(e.name)[t];
            }),
            (e.prototype.HintLoadTabPage = function (a, n) {
              return Object(A.b)(this, void 0, void 0, function () {
                var t;
                return Object(A.e)(this, function (e) {
                  return this.BHasTabPageLoaded(a, n)
                    ? [2, this.GetTabPageApps(a, n)]
                    : ((t = this.m_mapTabToPageListPromises.get(a.name)),
                      (n >= t.length || !t[n]) &&
                        (t[n] = this.InternalLoadTabPage(a, n)),
                      [2, t[n]]);
                });
              });
            }),
            (e.prototype.InternalLoadTabPage = function (c, s) {
              var l, u, p, d;
              return Object(A.b)(this, void 0, void 0, function () {
                var t, a, n, i, r, o;
                return Object(A.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = this.m_mapTabToPagingData.get(c.name)),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (a = {
                          query: "",
                          start: t.pagesize * s,
                          count: t.pagesize,
                          cc: m.d.COUNTRY,
                          l: m.d.LANGUAGE,
                          v: 1,
                          tag: g.Get().GetDefinition().strTag,
                          tagid:
                            null === (l = t.params) || void 0 === l
                              ? void 0
                              : l.tagid,
                          category:
                            null === (u = t.params) || void 0 === u
                              ? void 0
                              : u.category,
                          facet:
                            null === (p = t.params) || void 0 === p
                              ? void 0
                              : p.facet,
                          send_app_data: 1,
                        }),
                        [4, L.a.get(t.url, { params: a, withCredentials: !1 })]
                      );
                    case 2:
                      return (
                        (n = e.sent()),
                        1 ==
                        (null === (d = null == n ? void 0 : n.data) ||
                        void 0 === d
                          ? void 0
                          : d.success)
                          ? (((i = this.m_mapTabToPageList.get(c.name))[s] =
                              n.data.appids),
                            n.data.applinkinfo &&
                              f.a.AddAppLinks(n.data.applinkinfo),
                            [2, i[s]])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (r = e.sent()),
                        (o = Object(j.a)(r)),
                        console.error(
                          "CContentHubTabStore.InternalLoadTabPage: failed with " +
                            o.strErrorMsg,
                          o
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, []];
                  }
                });
              });
            }),
            (e.Get = function () {
              return (
                e.s_globalSingletonStore ||
                  (e.s_globalSingletonStore = new e()),
                e.s_globalSingletonStore
              );
            }),
            (e.prototype.ValidateTabData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].title &&
                "string" == typeof t[0].displaylistname &&
                Array.isArray(t[0].appids)
              );
            }),
            (e.prototype.ValidatePagingData = function (e) {
              var t = e;
              return (
                !!(
                  t &&
                  Array.isArray(t) &&
                  0 < t.length &&
                  "object" == typeof t[0]
                ) &&
                "string" == typeof t[0].url &&
                "string" == typeof t[0].prefix &&
                "number" == typeof t[0].total_count
              );
            }),
            Object(A.c)([C.C], e.prototype, "m_SelectedTab", void 0),
            Object(A.c)([C.C], e.prototype, "m_nCurrentPage", void 0),
            Object(A.c)([C.k], e.prototype, "SetSelectedTab", null),
            e
          );
        })(),
        O = a("Mgs7"),
        k = a("7G5R"),
        N = a("NKJh"),
        D = a.n(N),
        H = a("exH9"),
        I = a("lhLD"),
        B = Object(n.a)(function (e) {
          var t = w.Get().GetVisibleTabs(),
            a = w.Get().GetSelectedTab();
          if (!t || 0 == t.length) return null;
          var n = w.Get().GetSelectedPage();
          return d.a.createElement(
            "div",
            { className: Object(H.a)(I.TabCtn) },
            d.a.createElement(z, null),
            d.a.createElement(V, null),
            d.a.createElement(
              h.b,
              { feature: "tab-" + a.name },
              d.a.createElement(M, { selectedTab: a, nCurPage: n })
            ),
            d.a.createElement(V, null)
          );
        }),
        M = Object(n.a)(function (e) {
          var t = e.selectedTab,
            a = e.nCurPage,
            n = w.Get().BHasTabPageLoaded(t, a),
            i = Object(c.useState)(!n),
            r = i[0],
            o = i[1];
          return (
            Object(c.useEffect)(
              function () {
                var e = L.a.CancelToken.source();
                return (
                  r == n && o(!n),
                  n ||
                    w
                      .Get()
                      .HintLoadTabPage(t, a)
                      .then(function () {
                        r && !e.token.reason && o(!1);
                      }),
                  function () {
                    return e.cancel("unmounting TabDisplayPage");
                  }
                );
              },
              [t, a, n, r]
            ),
            n
              ? d.a.createElement(
                  d.a.Fragment,
                  null,
                  w
                    .Get()
                    .GetTabPageApps(t, a)
                    .map(function (e) {
                      var t;
                      return d.a.createElement(
                        "div",
                        { key: "" + e, className: D.a.SaleItemBrowserRow },
                        d.a.createElement(l.j, {
                          id: e,
                          type:
                            (null === (t = f.a.GetAppLinkInfo(e)) ||
                            void 0 === t
                              ? void 0
                              : t.type) || "game",
                          bShowDemoButton: !1,
                          bLoadShortDescription: !1,
                        })
                      );
                    })
                )
              : d.a.createElement(s.a, {
                  string: Object(b.f)("#Loading"),
                  size: "medium",
                  position: "center",
                })
          );
        }),
        V = Object(n.a)(function (e) {
          var t,
            n = w.Get(),
            a = n.GetSelectedTab(),
            i = n.GetSelectedPage(),
            r = n.GetRowsPerPage(a),
            o = n.GetTotalMatchingResults(a),
            c = r * i + 1,
            s = Math.min(r * (i + 1), o),
            l = Math.floor(o / r);
          if (1 < l) {
            var u = new Set();
            u.add(1), u.add(l);
            for (var p = 0; u.size < 7 && p < 7; ++p)
              0 < i + 1 - p && u.add(i + 1 - p),
                u.size < 7 && i + 1 + p < l && u.add(i + 1 + p);
            t = Array.from(u).sort(function (e, t) {
              return e - t;
            });
          }
          return d.a.createElement(
            "div",
            { className: Object(H.a)(I.PagingCtn) },
            d.a.createElement(
              "div",
              null,
              Object(b.f)("#ContentHub_Paging", c, s, o)
            ),
            Boolean(1 < l) &&
              d.a.createElement(
                "div",
                { className: Object(H.a)(I.PagingNumCtn) },
                Boolean(0 < i) &&
                  d.a.createElement(
                    O.d,
                    {
                      onClick: function () {
                        return n.SetSelectedPage(i - 1);
                      },
                    },
                    "<"
                  ),
                t.map(function (e, t) {
                  var a;
                  return d.a.createElement(
                    "div",
                    { className: I.PageNumCtn, key: "" + e },
                    Boolean(1 === t && 2 !== e) &&
                      d.a.createElement("span", null, "..."),
                    d.a.createElement(
                      "div",
                      {
                        onClick: function () {
                          return n.SetSelectedPage(e - 1);
                        },
                        className: Object(H.a)(
                          (((a = {})[I.PageNumber] = !0),
                          (a[I.PageSelectedNumber] = e === i + 1),
                          a)
                        ),
                      },
                      e
                    ),
                    Boolean(5 === t && e !== l - 1) &&
                      d.a.createElement("span", null, "...")
                  );
                }),
                Boolean(i < l) &&
                  d.a.createElement(
                    O.d,
                    {
                      onClick: function () {
                        return n.SetSelectedPage(i + 1);
                      },
                    },
                    ">"
                  )
              )
          );
        }),
        z = Object(n.a)(function (e) {
          var t = w.Get().GetVisibleTabs(),
            a = w.Get().GetSelectedTab();
          return d.a.createElement(
            k.a,
            { className: I.TabHeaderCtn },
            t.map(function (e) {
              var t;
              return d.a.createElement(
                "div",
                {
                  key: e.displaylistname,
                  className: Object(H.a)(
                    (((t = {})[I.TabHeader] = !0),
                    (t[I.TabHeaderSelected] =
                      (null == e ? void 0 : e.name) ==
                      (null == a ? void 0 : a.name)),
                    t)
                  ),
                  onClick: function () {
                    return w.Get().SetSelectedTab(e);
                  },
                },
                e.title
              );
            })
          );
        }),
        x = a("IjL/");
      t.default = function (e) {
        var t = d.a.useState(!0),
          a = t[0],
          n = t[1];
        if (
          (d.a.useEffect(function () {
            r.a.HintLoad().then(function () {
              return n(!1);
            });
          }, []),
          a)
        )
          return d.a.createElement(s.a, {
            string: Object(b.f)("#Loading"),
            size: "medium",
            position: "center",
          });
        var i = g
          .Get()
          .GetSections()
          .map(function (e) {
            return d.a.createElement(y, { section: e, key: e.id });
          });
        return d.a.createElement(
          "div",
          null,
          d.a.createElement(x.a, null, d.a.createElement(u, null)),
          d.a.createElement(x.a, null, i),
          d.a.createElement(x.a, null, d.a.createElement(B, null))
        );
      };
    },
    lhLD: function (e, t, a) {
      e.exports = {
        TabCtn: "contenthubtabs_TabCtn_2oMA1",
        TabHeaderCtn: "contenthubtabs_TabHeaderCtn_2hDgH",
        TabHeader: "contenthubtabs_TabHeader_uLDXr",
        TabHeaderSelected: "contenthubtabs_TabHeaderSelected_2lb5o",
        PagingCtn: "contenthubtabs_PagingCtn_1z4pT",
        PagingNumCtn: "contenthubtabs_PagingNumCtn_2JUQr",
        PageNumCtn: "contenthubtabs_PageNumCtn_sJmNK",
        PageNumber: "contenthubtabs_PageNumber_1QUSX",
        PageSelectedNumber: "contenthubtabs_PageSelectedNumber_tJc_C",
        PagingButton: "contenthubtabs_PagingButton_J9G7z",
      };
    },
  },
]);

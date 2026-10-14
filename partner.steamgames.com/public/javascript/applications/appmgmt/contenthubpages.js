/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [23025],
    {
      98912: (Y, V, r) => {
        "use strict";
        r.r(V), r.d(V, { ContentHubRoutes: () => pe, default: () => xe });
        var e = r(7850),
          d = r(90783),
          G = r(17083),
          w = r(92757),
          A = r(85873),
          y = r(18210);
        function c(l) {
          const s = (t) =>
            (0, A.tV)() ? (0, y.we)("#Generel_Discard_Warning") : !0;
          return (0, e.jsx)(w.XG, { message: s });
        }
        var a = r(58732),
          O = r(58952),
          h = r(18735),
          j = r(31553),
          x = r(90626),
          ee = r(77411),
          ae = r(45737),
          H = r.n(ae),
          S = r(58534),
          $ = r(2801),
          te = r(88003),
          F = r(91512),
          ue = r(36118),
          K = r(85599),
          ie = r(41735),
          ge = r(3166),
          he = r(72609);
        const ne = null;
        function _() {
          return ne.includes(UserConfig.country_code);
        }
        const q = [h.ED, h.M, h.mx, h.T4, h.u7];
        function Ce(l) {
          let s = [];
          switch (l) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              s.push(
                EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore,
              ),
                s.push(
                  EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
                );
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              s.push(
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
              );
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              s.push(
                EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
              );
              break;
          }
          return s;
        }
        let J = new Map();
        J.set(h.M, h.ED),
          J.set(h.mx, h.ED),
          J.set(h.T4, h.mx),
          J.set(h.u7, h.T4);
        function z(l) {
          let s = [],
            t = J.get(l);
          return t && (s.push(t), s.push(...z(t))), s;
        }
        function me(l) {
          return useQuery({
            queryKey: [
              "examples_for_content_descriptor",
              l === null ? null : l.valueOf(),
            ],
            queryFn: async () => {
              if (l === null) return [];
              const s = new URLSearchParams();
              return (
                s.append("filter", "examplesforcontentdescriptors"),
                s.append("ignore_preferences", "1"),
                s.append("category1", "992,994,998"),
                s.append("descids", l.valueOf().toString()),
                s.append("json", "1"),
                (
                  await axios({
                    url: `${Config.STORE_BASE_URL}search/results/?${s.toString()}`,
                    method: "GET",
                    responseType: "json",
                  })
                ).data.items
              );
            },
          });
        }
        function le(l) {
          let s = null;
          switch (l) {
            case h.ED:
              s = "#ContentDescriptor_GeneralMatureContent";
              break;
            case h.M:
              s = "#ContentDescriptor_FrequentViolenceOrGore";
              break;
            case h.mx:
              s = "#ContentDescriptor_NudityOrSexualContent";
              break;
            case h.T4:
              s = "#ContentDescriptor_GratuitousNudityOrSexualContent";
              break;
            case h.u7:
              s = "#ContentDescriptor_AdultOnlySexualContent";
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (0, y.we)(s);
        }
        function g(l, s = !1) {
          let t = "";
          switch (l) {
            case EContentDescriptorID.k_EContentDescriptor_AnyMatureContent:
              t += Localize(
                "#ContentDescriptor_GeneralMatureContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_FrequentViolenceOrGore:
              t += Localize(
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent:
              t += Localize(
                "#ContentDescriptor_NudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent:
              t += Localize(
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              );
              break;
            case EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent:
              t += Localize(
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              );
              break;
            default:
              throw "Invalid content descriptor.";
          }
          return (
            s &&
              (l ===
                EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent ||
                l ===
                  EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent) &&
              (t += " " + Localize("#ContentDescriptor_Affirm18YearsOld")),
            t
          );
        }
        function C() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
            EContentDescriptorID.k_EContentDescriptor_NudityOrSexualContent,
          ];
        }
        function m() {
          return [
            EContentDescriptorID.k_EContentDescriptor_AdultOnlySexualContent,
            EContentDescriptorID.k_EContentDescriptor_GratuitousSexualContent,
          ];
        }
        function P(l) {
          return !UserConfig.logged_in ||
            !l ||
            !l.content_descriptors_to_exclude
            ? C()
            : l.content_descriptors_to_exclude.map(
                (s) => s.content_descriptorid,
              );
        }
        var B = r(22880),
          M = r(54963),
          N = r(98609),
          v = r(39077),
          I = r(92237),
          T = r(4940),
          i = r.n(T),
          E = r(179);
        const b = x.memo(function () {
          const [s, t] = x.useState(),
            [n, o] = x.useState(!1),
            [p, D] = x.useState(!1),
            [f, u] = x.useState(!1);
          x.useEffect(() => {
            (0, A.GX)().then((W) => {
              t(W.rgCategories), u(W.bHasUnpublishedChanges), o(!0);
            });
          }, []);
          const L = x.useCallback((W) => {
            t(W), D(!0);
          }, []);
          return n
            ? (0, e.jsxs)("div", {
                className: H().AdminPageCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: H().PageTitle,
                    children: "Content Hub Categories",
                  }),
                  (0, e.jsx)("hr", { className: i().TitleHR }),
                  (0, e.jsxs)("p", {
                    children: [
                      "This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale ",
                      (0, e.jsx)("a", {
                        href: `${N.TS.PARTNER_BASE_URL}promotion/planning/themes`,
                        children: "here.",
                      }),
                    ],
                  }),
                  (0, e.jsx)("a", {
                    href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                    target: "_blank",
                    children: "Content Hub Graphana Stats Page",
                  }),
                  (0, e.jsx)("div", {
                    className: H().PageSubTitle,
                    children: "Categories",
                  }),
                  f &&
                    (0, e.jsx)("div", {
                      className: i().UnpublishedChangesNotice,
                      children:
                        "You have unpublished changes. Click Publish below to publish and make them available to users.",
                    }),
                  (0, e.jsx)(U, { categories: s, onUpdate: L }),
                  (0, e.jsxs)("div", {
                    className: i().ActionButtonCtn,
                    children: [
                      (0, e.jsx)(S.jn, {
                        onClick: () =>
                          (0, te.pg)(
                            (0, e.jsx)(Ae, {
                              categories: s,
                              onSave: () => {
                                D(!1), u(!0);
                              },
                            }),
                            window,
                          ),
                        children: p
                          ? (0, e.jsx)(e.Fragment, { children: "Save" })
                          : (0, e.jsxs)(e.Fragment, {
                              children: [(0, e.jsx)(ue.Jlk, {}), "Saved"],
                            }),
                      }),
                      (0, e.jsx)(S.$n, {
                        onClick: () =>
                          (0, te.pg)(
                            (0, e.jsx)(ye, { onPublish: () => u(!1) }),
                            window,
                          ),
                        children: "Publish",
                      }),
                    ],
                  }),
                ],
              })
            : (0, e.jsx)(K.t, { size: "medium", position: "center" });
        });
        function U(l) {
          const { categories: s, onUpdate: t } = l,
            { rgTags: n } = (0, A.DT)(),
            [o] = (0, E.QD)("edit");
          if (!s)
            return (0, e.jsx)("div", { children: "No categories defined." });
          const p = () => {
              t((u) => {
                let L = 0;
                for (const W of u)
                  W.id && Number(W.id) > L && (L = Number(W.id));
                return [...u, { handle: "new_category_" + s.length, id: ++L }];
              });
            },
            D = (u) => {
              t((L) => L.filter((W, R) => R != u));
            },
            f = (u) => {
              t((L) => L.map((W) => (W.id === u.id ? u : W)));
            };
          return (0, e.jsxs)("div", {
            className: i().CategoriesList,
            children: [
              (0, e.jsx)(F.A, {
                bDisabled: !0,
                items: s,
                onDelete: D,
                render: (u) =>
                  (0, e.jsx)(
                    Q,
                    {
                      item: u,
                      rgTags: n,
                      fnSaveCategory: f,
                      bOpenEditor: o?.toLowerCase() == u.handle,
                    },
                    u.id,
                  ),
              }),
              (0, e.jsx)(S.$n, { onClick: p, children: "Add Category" }),
            ],
          });
        }
        function X(l) {
          const { rgTags: s, replacesTags: t } = l,
            n = (0, x.useMemo)(
              () =>
                t
                  ?.map(
                    (o) =>
                      (s?.find((f) => f.tagid === o.id)?.name ||
                        "Unknown tag") +
                      " (" +
                      String(o.id) +
                      ")",
                  )
                  .join(", "),
              [t, s],
            );
          return n
            ? (0, e.jsx)("span", { children: "Replaces tags: " + n })
            : (0, e.jsx)("span", {});
        }
        function Q(l) {
          const { item: s, rgTags: t, fnSaveCategory: n, bOpenEditor: o } = l,
            [p, D, f] = (0, M.uD)(o),
            u = (L, W) => {
              L.preventDefault(), L.stopPropagation(), D();
            };
          return (0, e.jsx)("div", {
            className: i().CategoryCtn,
            children: (0, e.jsxs)("div", {
              className: i().Category,
              children: [
                (0, e.jsxs)("a", {
                  onClick: (L) => u(L, s),
                  children: [
                    (0, e.jsx)("b", {
                      children: s.loc_token ? (0, y.we)(s.loc_token) : "",
                    }),
                    s.loc_token ? " (" + s.handle + ")" : s.handle,
                  ],
                }),
                (0, e.jsx)("div", {
                  className: i().CategoryType,
                  children:
                    s.type === "tagids"
                      ? "Tags"
                      : s.type === "category"
                        ? "Category"
                        : s.type === "contenthub"
                          ? "Hardcoded Filter"
                          : "Special",
                }),
                (0, e.jsx)("div", {
                  className: i().ExcludedFromSearch,
                  children:
                    s.exclude_from_search === !0 ? "Excluded from search" : "",
                }),
                (0, e.jsx)("div", {
                  className: i().ReplacesTags,
                  children: (0, e.jsx)(X, {
                    rgTags: t,
                    replacesTags: s.replaces_tags,
                  }),
                }),
                (0, e.jsx)($.EN, {
                  active: p,
                  children: (0, e.jsx)(ce, {
                    category: s,
                    fnSaveCategory: n,
                    closeModal: f,
                  }),
                }),
              ],
            }),
          });
        }
        function ce(l) {
          const { fnSaveCategory: s, closeModal: t } = l,
            [n, o] = x.useState(l.category),
            p = x.useMemo(
              () => [
                { data: "tagids", label: "Tag Hub" },
                { data: "category", label: "Categories" },
                { data: "contenthub", label: "Hardcoded Filter Hub" },
              ],
              [],
            ),
            D = x.useCallback(
              (f) => o((u) => ({ ...u, content_descriptors: f })),
              [o],
            );
          return (0, e.jsxs)($.eV, {
            title: `Edit Category (ID ${n.id})`,
            bAllowFullSize: !0,
            onCancel: t,
            closeModal: t,
            children: [
              (0, e.jsx)(S.nB, {
                children: (0, e.jsxs)("div", {
                  className: i().CategoryEditor,
                  children: [
                    (0, e.jsx)(S.pd, {
                      label: "Handle",
                      tooltip:
                        "This forms the end of the URL. It must be unique",
                      value: n.handle,
                      onChange: (f) =>
                        o((u) => ({ ...u, handle: f.target.value })),
                    }),
                    (0, e.jsxs)("div", {
                      className: i().CategoryCtn,
                      children: [
                        (0, e.jsx)(S.pd, {
                          label: "Loc Token",
                          tooltip:
                            "Token only needed if we wish to expose this hub to customers",
                          value: n.loc_token,
                          onChange: (f) =>
                            o((u) => ({ ...u, loc_token: f.target.value })),
                        }),
                        n.loc_token &&
                          (0, e.jsx)(S.a3, {
                            children: (0, y.we)(n.loc_token),
                          }),
                        (0, e.jsx)(S.pd, {
                          label: "Description Loc Token",
                          tooltip:
                            "A localized token explaining this content hub to customers",
                          value: n.description_loc_token,
                          onChange: (f) =>
                            o((u) => ({
                              ...u,
                              description_loc_token: f.target.value,
                            })),
                        }),
                        n.description_loc_token &&
                          (0, e.jsx)(S.a3, {
                            children: (0, y.we)(n.description_loc_token),
                          }),
                      ],
                    }),
                    (0, e.jsx)(S.Yh, {
                      label: "Use As A Heading ",
                      tooltip:
                        "Only used for establishing headings used on the main store drop-down menu",
                      checked: n.heading,
                      onChange: (f) => o((u) => ({ ...u, heading: f })),
                    }),
                    (0, e.jsx)(S.Yh, {
                      label: "Exclude from search ",
                      tooltip: "Do not show this category in store search",
                      checked: n.exclude_from_search,
                      onChange: (f) =>
                        o((u) => ({ ...u, exclude_from_search: f })),
                    }),
                    (0, e.jsx)(S.pd, {
                      label: "Search aliases",
                      tooltip: "Comma separated search aliases",
                      value: n.search_alias,
                      onChange: (f) =>
                        o((u) => ({ ...u, search_alias: f.target.value })),
                    }),
                    (0, e.jsx)(S.m, {
                      label: "Type",
                      rgOptions: p,
                      selectedOption: n.type,
                      onChange: (f) => o((u) => ({ ...u, type: f.data })),
                    }),
                    (0, e.jsx)(k, {
                      rgContentDescriptors: n.content_descriptors ?? [],
                      setContentDescriptors: D,
                    }),
                    (n.type === "tagids" ||
                      n.type === "category" ||
                      n.type == "contenthub") &&
                      (0, e.jsx)(fe, { category: n, setCategory: o }),
                  ],
                }),
              }),
              (0, e.jsx)(S.wi, {
                children: (0, e.jsx)(S.CB, {
                  onCancel: t,
                  onOK: () => {
                    s(n), t();
                  },
                  strOKText: "Save",
                }),
              }),
            ],
          });
        }
        const k = x.memo(function (s) {
          const { rgContentDescriptors: t, setContentDescriptors: n } = s,
            o = x.useMemo(() => [h.M, h.mx, h.T4, h.u7], []);
          return (0, e.jsx)(S.mq, {
            label: "Content Descriptors",
            children: (0, e.jsx)(O.uh, {
              selectedValue: t,
              onSelectionChange: n,
              options: o,
              getOptionLabel: (p) => le(p),
            }),
          });
        });
        function fe(l) {
          const { category: s, setCategory: t } = l,
            [n, o] = (0, x.useState)(!1),
            [p, D] = (0, x.useState)(0);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (s.type == "tagids" || s.type == "category") &&
                (0, e.jsx)("div", {
                  className: i().CategoryCtn,
                  children: (0, e.jsxs)("div", {
                    className: i().Category,
                    children: [
                      (0, e.jsx)(se, {
                        category: s,
                        setCategory: t,
                        list: "must",
                        title: "Must have all of these tags",
                      }),
                      (0, e.jsx)(se, {
                        category: s,
                        setCategory: t,
                        list: "any",
                        title: "Must have one of these tags",
                      }),
                      (0, e.jsx)(se, {
                        category: s,
                        setCategory: t,
                        list: "mustnot",
                        title: "Must not have any of these tags",
                      }),
                    ],
                  }),
                }),
              (s.type == "tagids" ||
                s.type == "category" ||
                s.type == "contenthub") &&
                (0, e.jsxs)("div", {
                  className: i().CategoryCtn,
                  children: [
                    (0, e.jsx)(se, {
                      category: s,
                      setCategory: t,
                      list: "replaces_tags",
                      title:
                        "The following Tags should redirect to this category page",
                    }),
                    (0, e.jsx)("p", {
                      children:
                        'This is only needed if this category is similar in name to an existing tag, such as "Sports" where the category is better than the individual tag.',
                    }),
                  ],
                }),
              n
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(S.$n, {
                        onClick: () => D(p + 1),
                        children: "Refresh Stats",
                      }),
                      (0, e.jsx)(De, { category: s }),
                    ],
                  })
                : (0, e.jsx)(
                    S.Yh,
                    {
                      checked: n,
                      onChange: (f) => o(f),
                      label: "Show Category Sale Stats",
                    },
                    "info" + p,
                  ),
            ],
          });
        }
        function De(l) {
          const { category: s } = l,
            t = (0, j.p$)(s.must, s.any, s.mustnot);
          if (!t)
            return (0, e.jsx)(K.t, {
              string: (0, y.we)("#Loading"),
              position: "center",
              size: "medium",
            });
          const n = t.total_games > v.iT && t.total_games <= v.hp;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(S.$n, {
                onClick: () => {
                  const o = [];
                  o.push(["AppID", "Sale Rank"]),
                    t.top_games.forEach((D) => {
                      o.push(["" + D.appid, "" + D.long_term_sale_rank]);
                    });
                  const p = (s.handle || "top100").replace(" ", "_") + ".csv";
                  B.g.WriteCSVToFile(o, p);
                },
                children: "Download Top 100 Games",
              }),
              (0, e.jsx)(S.$n, {
                onClick: () => {
                  const o = [];
                  o.push(["AppID"]),
                    t.all_appid.forEach((D) => {
                      o.push(["" + D]);
                    });
                  const p = (s.handle || "allgames").replace(" ", "_") + ".csv";
                  B.g.WriteCSVToFile(o, p);
                },
                children: "Download All Games",
              }),
              (0, e.jsxs)("div", {
                className: I.ThemeRow,
                children: [
                  (0, e.jsxs)("div", {
                    className: I.ThemeDefinitionCtn,
                    children: [
                      "Summary: ",
                      (0, e.jsx)(v.KU, { nTotalGames: t.total_games }),
                      !!n && (0, e.jsx)(Se, { category: s }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: I.TopGamesCtn,
                    children: [
                      (0, e.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                      (0, e.jsx)("div", {
                        className: I.GamesColumn,
                        children: t.top_games
                          ?.slice(0, 10)
                          .map((o) =>
                            (0, e.jsx)(
                              v.W7,
                              { info: o, category: s, bSaleSummary: n },
                              o.appid,
                            ),
                          ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function Se(l) {
          const { category: s } = l,
            t = (0, j.eX)(s.must, s.any, s.mustnot),
            n = (0, j.mg)(s.must, s.any, s.mustnot);
          return (0, e.jsx)(v.ny, { saleSummary: t, topAppSummary: n });
        }
        const se = x.memo(function (s) {
          const { category: t, setCategory: n, list: o, title: p } = s,
            { rgTags: D, rgCategories: f } = (0, A.DT)(),
            u = (R) => {
              n((oe) => ({ ...oe, [o]: R(oe[o]) }));
            },
            L =
              D?.map((R) => ({
                value: R.tagid,
                label: `${R.name} (${R.tagid})`,
              })) || [],
            W =
              f?.map((R) => ({
                value: R.categoryid,
                label: `${R.name} (${R.categoryid})`,
              })) || [];
          return (0, e.jsxs)("div", {
            className: i().TagOrCategoryList,
            children: [
              (0, e.jsx)(S.JU, { children: p }),
              (0, e.jsx)(F.A, {
                bDisabled: !0,
                items: t[o] ?? [],
                onDelete: (R) => u((oe) => oe.filter((Z, de) => de != R)),
                render: (R, oe) =>
                  t.type === "tagids" || o === "replaces_tags"
                    ? (0, e.jsxs)("div", {
                        className: i().IDSelector,
                        children: [
                          (0, e.jsx)(S.pd, {
                            value: R.id,
                            onChange: (Z) =>
                              u((de) =>
                                de.map((re, ve) =>
                                  ve == oe
                                    ? { ...re, id: parseInt(Z.target.value) }
                                    : re,
                                ),
                              ),
                          }),
                          (0, e.jsx)(ee.Ay, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: L,
                            value: L.find((Z) => Z.value === R.id),
                            onChange: (Z) =>
                              u((de) =>
                                de.map((re, ve) =>
                                  ve == oe ? { ...re, id: Z.value } : re,
                                ),
                              ),
                          }),
                        ],
                      })
                    : t.type === "category"
                      ? (0, e.jsx)("div", {
                          className: i().IDSelector,
                          children: (0, e.jsx)(ee.Ay, {
                            className: "react-select-container",
                            classNamePrefix: "react-select",
                            isSearchable: !0,
                            options: W,
                            value: W.find((Z) => Z.value === R.id),
                            onChange: (Z) =>
                              u((de) =>
                                de.map((re, ve) =>
                                  ve == oe ? { ...re, id: Z.value } : re,
                                ),
                              ),
                          }),
                        })
                      : null,
              }),
              (0, e.jsx)(S.$n, {
                onClick: () => u((R) => (R ? [...R, { id: 0 }] : [{ id: 0 }])),
                children: "Add",
              }),
            ],
          });
        });
        function Ae(l) {
          const { categories: s, onSave: t, closeModal: n } = l,
            [o, p] = x.useState();
          return (
            x.useEffect(() => {
              (0, A.fT)(s).then((D) => {
                D ? p(D.strErrorMsg) : (t(), n && n());
              });
            }, [s, n, t]),
            (0, e.jsx)($.o0, {
              strTitle: "Saving",
              bAlertDialog: !0,
              bDisableBackgroundDismiss: !0,
              bHideCloseIcon: !0,
              closeModal: n,
              children: o
                ? (0, e.jsxs)("div", { children: ["Error: ", o] })
                : (0, e.jsx)(K.t, { size: "medium", position: "center" }),
            })
          );
        }
        function ye(l) {
          const { onPublish: s, closeModal: t } = l,
            [n, o] = x.useState(!1),
            [p, D] = x.useState();
          return (
            x.useEffect(() => {
              n &&
                (0, A.LD)().then((f) => {
                  f ? D(f.strErrorMsg) : (s(), o(!1), t && t());
                });
            }, [n, t, s]),
            (0, e.jsx)($.o0, {
              strTitle: n ? "Publishing" : "Really Publish?",
              strDescription:
                !n &&
                "Publishing will make your changes immediately visible to users.",
              bAlertDialog: n,
              bDisableBackgroundDismiss: n,
              bHideCloseIcon: n,
              onOK: () => {
                n ? t && t() : o(!0);
              },
              onCancel: () => {
                t && t();
              },
              children:
                n &&
                (0, e.jsx)(e.Fragment, {
                  children: p
                    ? (0, e.jsxs)("div", { children: ["Error: ", p] })
                    : (0, e.jsx)(K.t, { size: "medium", position: "center" }),
                }),
            })
          );
        }
        const pe = { ContentHubCategories: () => "/categories/" };
        function xe(l) {
          return (0, e.jsxs)(G.Kd, {
            basename: (0, a.C)() + "admin/store/contenthub/",
            children: [
              (0, e.jsx)(c, {}),
              (0, e.jsxs)(w.dO, {
                children: [
                  (0, e.jsx)(w.qh, {
                    path: pe.ContentHubCategories(),
                    component: b,
                  }),
                  (0, e.jsx)(w.qh, { component: d.a }),
                ],
              }),
            ],
          });
        }
      },
      58952: (Y, V, r) => {
        "use strict";
        r.d(V, { WM: () => K, l6: () => _, uh: () => z });
        var e = r(7850),
          d = r(90626),
          G = r(92142),
          w = r(86946),
          A = r(12204),
          y = r(15252),
          c = r(63029),
          a = r(76854),
          O = r(39790),
          h = r(85367),
          j = r(68031),
          x = r(80549),
          ee = r(58017),
          ae = r(64415);
        function H(g) {
          const {
              children: C,
              state: m,
              placement: P = "bottom-end",
              popoverWidth: B = "dropdown",
              popoverMaxHeight: M,
              popoverPresentation: N,
              popoverLabel: v,
              ...I
            } = g,
            [T, i] = (0, d.useState)(null),
            [E, b] = (0, d.useState)(null),
            U = (0, d.useMemo)(
              () =>
                m.rgOptions.findIndex((k) =>
                  m.multiselect
                    ? m.selectedValue.includes(k)
                    : k === m.selectedValue,
                ),
              [m.selectedValue, m.rgOptions, m.multiselect],
            ),
            X = (0, d.useRef)(null),
            Q = {
              ...m,
              ...I,
              focusedValue: T,
              onFocusChange: i,
              refPopover: X,
              popoverLabel: v,
              setOpen: (k) => {
                k && i(m.multiselect ? m.selectedValue[0] : m.selectedValue),
                  m.setOpen(k);
              },
              focusedIndex: E,
              onFocusedIndexChange: b,
            },
            ce = (0, G.T)({
              open: m.bOpen,
              onOpenChange: m.setOpen,
              width: B,
              maxHeight: M,
              placement: P,
              presentation: N,
              selectedIndex: U,
              setSelectedIndex: (k) => m.onItemSelectionChange(m.rgOptions[k]),
              activeIndex: E,
              setActiveIndex: b,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, e.jsx)(me.Provider, {
            value: Q,
            children: (0, e.jsx)(G.k.Root, { state: ce, children: C }),
          });
        }
        function S(g) {
          const { refPopover: C, popoverLabel: m } = le("<Select.Options>");
          return (0, e.jsx)(G.k.Positioner, {
            ref: C,
            label: m,
            children: g.children,
          });
        }
        function $(g) {
          const { value: C, children: m, disabled: P, ...B } = g,
            {
              onItemSelectionChange: M,
              multiselect: N,
              selectedValue: v,
              maxSelected: I,
            } = le("<SelectTrigger>"),
            T = typeof C == "string" ? C : void 0;
          let i = !1,
            E = !1;
          N
            ? ((i = Array.isArray(v) && v.includes(C)),
              (E = !!I && Array.isArray(v) && v.length >= I))
            : (i = C === v);
          const b = P || (E && !i);
          return (0, e.jsxs)(G.k.Item, {
            label: T,
            onSelect: () => M(C),
            selected: i,
            disabled: b,
            ...B,
            children: [
              N &&
                (0, e.jsxs)(j.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, e.jsx)(h.S, { checked: i, variant: "dark" }),
                    m,
                  ],
                }),
              !N && m,
            ],
          });
        }
        function te(g) {
          const { children: C, render: m } = g,
            {
              bOpen: P,
              setOpen: B,
              selectedValue: M,
              variant: N,
              size: v,
              radius: I,
              status: T,
              color: i,
              rgOptions: E,
              multiselect: b,
              onClear: U,
              focusedValue: X,
              onFocusChange: Q,
              onSelectionChange: ce,
              clearable: k,
              focusedIndex: fe,
              onItemSelectionChange: De,
              onFocusedIndexChange: Se,
              refPopover: se,
              popoverLabel: Ae,
              placeholder: ye,
              maxSelected: pe,
              ...xe
            } = le("<SelectTrigger>"),
            l = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => B(!P),
              children: C,
            },
            s = b ? Array.isArray(M) && M.length > 0 : !!M,
            t = s && k,
            n = t
              ? (0, e.jsx)(c.g, { onClick: U, cursor: "pointer", hitSlop: !0 })
              : (0, e.jsx)(A.V, {}),
            o = t
              ? {
                  onSecondaryButton: U,
                  actionDescriptionMap: {
                    [ae.pR.SECONDARY]: ee.T.Localize("#Clear"),
                  },
                }
              : void 0,
            p = (0, x.f)("Select", N),
            D = (0, e.jsx)(w.j, {
              afterContent: n,
              variant: p,
              size: v,
              radius: I,
              status: T,
              color: i,
              hasValue: s,
              tabIndex: 0,
              cursor: "pointer",
              navProps: o,
              ...xe,
            }),
            f = (0, a.Q)(m, D, l, void 0);
          return (0, e.jsx)(G.k.Anchor, { children: f });
        }
        function F(g) {
          return (0, e.jsx)(y.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: g.children,
          });
        }
        function ue(g) {
          return (0, e.jsx)(y.EY, {
            contrast: "description",
            truncate: !0,
            children: g.children,
          });
        }
        function K(g) {
          return ie(g, !1);
        }
        function ie(g, C) {
          const { onSelectionChange: m, selectedValue: P, ...B } = g,
            [M, N] = (0, d.useState)(!1),
            v = (0, d.useCallback)(
              (i) => {
                m(i), C || N(!1);
              },
              [m, C],
            ),
            I = (0, d.useCallback)(
              (i) => {
                v(C ? [] : null), i?.stopPropagation(), i?.preventDefault();
              },
              [v, C],
            ),
            T = (0, d.useCallback)(
              (i) => {
                if (!C) v(i);
                else {
                  const E = P,
                    b = E.indexOf(i);
                  if (b === -1) v(E.concat(i));
                  else return v(E.slice(0, b).concat(E.slice(b + 1)));
                }
              },
              [v, P, C],
            );
          return {
            onSelectionChange: v,
            onItemSelectionChange: T,
            onClear: I,
            bOpen: M,
            setOpen: N,
            multiselect: C,
            selectedValue: P,
            ...B,
          };
        }
        const ge = {
          Root: H,
          Option: $,
          Options: S,
          Trigger: te,
          Value: F,
          Placeholder: ue,
        };
        function he(g) {
          return typeof g == "string"
            ? g
            : typeof g == "number"
              ? g.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  g,
                ),
                "");
        }
        function ne(g) {
          const {
              selectedValue: C,
              onSelectionChange: m,
              options: P,
              placeholder: B,
              getOptionLabel: M = he,
              ...N
            } = g,
            v = K({
              onSelectionChange: m,
              selectedValue: C,
              rgOptions: P,
              placeholder: B,
            }),
            I = C != null,
            T = I ? M(C) : "";
          return (0, e.jsxs)(_.Root, {
            state: v,
            ...N,
            children: [
              (0, e.jsxs)(_.Trigger, {
                children: [
                  I && (0, e.jsx)(_.Value, { children: T }),
                  !I && (0, e.jsx)(_.Placeholder, { children: B }),
                ],
              }),
              (0, e.jsx)(_.Options, {
                children: v.rgOptions.map((i, E) =>
                  (0, e.jsx)(_.Option, { value: i, children: M(i) }, E),
                ),
              }),
            ],
          });
        }
        const _ = Object.assign(ne, ge);
        function q(g) {
          return ie(g, !0);
        }
        const Ce = ge;
        function J(g) {
          const {
              selectedValue: C,
              onSelectionChange: m,
              options: P,
              placeholder: B,
              getOptionLabel: M = he,
              maxSelected: N,
              ...v
            } = g,
            I = q({
              onSelectionChange: m,
              selectedValue: C,
              rgOptions: P,
              placeholder: B,
              maxSelected: N,
            }),
            T = Array.isArray(C) && C.length > 0;
          let i = "";
          if (T) {
            const E = C.map((b) => M(b));
            "ListFormat" in Intl
              ? (i = new Intl.ListFormat((0, O.ZO)().strISOCode).format(E))
              : (i = E.join(", "));
          }
          return (0, e.jsxs)(z.Root, {
            state: I,
            ...v,
            children: [
              (0, e.jsxs)(z.Trigger, {
                children: [
                  T && (0, e.jsx)(z.Value, { children: i }),
                  !T && (0, e.jsx)(z.Placeholder, { children: B }),
                ],
              }),
              (0, e.jsx)(z.Options, {
                children: I.rgOptions.map((E, b) =>
                  (0, e.jsx)(z.Option, { value: E, children: M(E) }, b),
                ),
              }),
            ],
          });
        }
        const z = Object.assign(J, Ce),
          me = (0, d.createContext)(null);
        function le(g) {
          const C = (0, d.useContext)(me);
          return C || console.error(`${g} must be used within a <Select>!`), C;
        }
      },
      91512: (Y, V, r) => {
        "use strict";
        r.d(V, { A: () => S });
        var e = r(7850),
          d = r(90626),
          G = r(54963);
        const w =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
        var A = r(44894),
          y = r(41635),
          c = r(41609),
          a = r.n(c),
          O = r(64641),
          h = r.n(O),
          j = r(36118),
          x = r(41735),
          ee = r.n(x),
          ae = r(13854),
          H = r(36707);
        function S(te) {
          const {
              items: F,
              render: ue,
              onDelete: K,
              onEdit: ie,
              onReorder: ge,
              onMove: he,
              bDisabled: ne,
              rowClassName: _,
            } = te,
            [q, Ce] = d.useState(!1),
            [J, z] = d.useState(void 0),
            [me, le] = d.useState(void 0),
            [g, C] = d.useState(-1),
            [m, P] = d.useState(void 0),
            [B, M] = d.useState(0),
            [N, v] = d.useState(0),
            [I, T] = d.useState(void 0),
            [i, E] = d.useState(""),
            b = d.useRef(void 0),
            U = d.useRef([]),
            X = d.useRef([]),
            Q = d.useMemo(() => ee().CancelToken.source(), []),
            ce = () => {
              b.current?.firstElementChild &&
                (M(b.current.firstElementChild.getBoundingClientRect().height),
                v(b.current.firstElementChild.getBoundingClientRect().width));
            };
          d.useEffect(() => {
            ce();
          }, []),
            d.useEffect(
              () => () => Q.cancel("ReorderableList unmounting"),
              [Q],
            );
          const k = (t, n) => {
              const o = U.current[t]?.current;
              if (!o) {
                console.error(
                  "start element grab missing element at index " + t,
                );
                return;
              }
              Ce(!0), C(t), T(void 0), P(t);
              const p = n.clientX - o.getBoundingClientRect().left;
              z(p);
              const D = n.clientY - o.getBoundingClientRect().top;
              le(D),
                (o.style.position = "fixed"),
                (o.style.left = n.clientX - p + "px"),
                (o.style.top = n.clientY - D + "px"),
                (o.style.zIndex = "1");
            },
            fe = d.useCallback(
              (t) => {
                const n = U.current[g]?.current;
                if (!n) {
                  console.error("update grab element missing element");
                  return;
                }
                (n.style.left = t.clientX - J + "px"),
                  (n.style.top = t.clientY - me + "px");
              },
              [g, J, me],
            ),
            De = d.useCallback(() => {
              const t = U.current[g]?.current;
              t
                ? ((t.style.position = ""), (t.style.zIndex = ""))
                : console.error("end element drag missing element"),
                Ce(!1),
                C(-1),
                T(void 0),
                P(void 0);
            }, [g]),
            Se = (t, n) => {
              Q.token.reason ||
                (b.current.firstElementChild?.getBoundingClientRect().height >
                  0 &&
                  B !=
                    b.current.firstElementChild.getBoundingClientRect()
                      .height &&
                  ce(),
                k(n, t),
                t.preventDefault());
            },
            se = (t, n) => {
              const o = ae.OQ(n > t ? n - 1 : n, 0, F.length - 1);
              t != o && (he ? he(t, o) : (0, y.yY)(F, t, o), s(o), ge && ge(F));
            },
            Ae = (t) => {
              !q || Q.token.reason || (De(), se(g, m));
            },
            ye = d.useCallback(
              (t) => {
                if (!q || Q.token.reason) return;
                const n = t.clientY;
                let o;
                for (let p = 0; p < X.current.length; p++) {
                  const D = X.current[p].current.getBoundingClientRect().top,
                    f = X.current[p].current.getBoundingClientRect().bottom,
                    u = (D + f * 2) / 3;
                  if (n < u) {
                    o = p;
                    break;
                  }
                }
                P(o ?? X.current.length), fe(t);
              },
              [q, Q, fe],
            );
          (0, G.l6)(window, "mousemove", q ? ye : void 0),
            (0, G.l6)(window, "mouseup", q ? Ae : void 0),
            d.useEffect(() => {
              for (let t = U.current.length; t < F.length; t++)
                U.current.push(d.createRef()), X.current.push(d.createRef());
            }, [F.length]);
          const pe = (t) => {
              T(void 0);
              const n = i?.trim(),
                o = Number.parseInt(n);
              if (n.length == 0 || isNaN(o)) return;
              const p = o - 1;
              t != p && se(t, p);
            },
            xe = (t, n) => {
              t.key === "Enter" && (pe(n), t.currentTarget.blur());
            },
            [l, s] = d.useState(void 0);
          return (0, e.jsx)("div", {
            className: a().WhitelistCtn,
            ref: b,
            children: F.map((t, n) =>
              (0, e.jsxs)(
                "div",
                {
                  ref: X.current[n],
                  children: [
                    n == m && (0, e.jsx)($, { width: N }),
                    (0, e.jsx)("div", {
                      ref: U.current[n],
                      className: a().DragGhost,
                      children:
                        n == g &&
                        (0, e.jsxs)("div", {
                          className: (0, H.A)(a().WhitelistRow, _),
                          children: [
                            (0, e.jsx)("img", {
                              className: (0, H.A)(
                                a().WhitelistAvatar,
                                a().Grabbing,
                              ),
                              src: w,
                            }),
                            (0, e.jsx)("input", {
                              className: (0, H.A)(
                                a().WhitelistNumber,
                                a().Disabled,
                                a().Grabbing,
                              ),
                              type: "text",
                              value: (m > n ? m - 1 : m) + 1,
                              disabled: !0,
                            }),
                            ue(t, n),
                          ],
                        }),
                    }),
                    (0, e.jsxs)("div", {
                      className: (0, H.A)(
                        a().WhitelistRow,
                        _,
                        q && a().DragActive,
                        n == g && a().BeingDragged,
                        l == n && a().Dropped,
                      ),
                      onAnimationEnd: () => s(void 0),
                      children: [
                        (0, e.jsx)("img", {
                          className: (0, H.A)(
                            a().WhitelistAvatar,
                            a().Grabbable,
                            ne && a().DisabledGrab,
                          ),
                          src: w,
                          onMouseDown: ne ? void 0 : (o) => Se(o, n),
                        }),
                        (0, e.jsx)("input", {
                          className: (0, H.A)(
                            a().WhitelistNumber,
                            ne && a().Disabled,
                          ),
                          type: "text",
                          value: I == n ? i : n + 1,
                          disabled: ne || n == g,
                          onChange: (o) => E(o.target.value),
                          onKeyDown: (o) => xe(o, n),
                          onFocus: (o) => {
                            T(n), E(o.target.value);
                          },
                          onBlur: () => pe(n),
                        }),
                        ue(t, n),
                        n != g &&
                          !!(ie || K) &&
                          (0, e.jsxs)("div", {
                            className: a().ButtonCtn,
                            children: [
                              !!ie &&
                                (0, e.jsx)("div", {
                                  className: h().RemoveIcon,
                                  onClick: (o) => ie(n, o),
                                  children: (0, e.jsx)(j.ffu, {}),
                                }),
                              !!K &&
                                (0, e.jsx)("img", {
                                  className: h().RemoveIcon,
                                  src: A.A,
                                  onClick: (o) => K(n, o),
                                }),
                            ],
                          }),
                      ],
                    }),
                    m == F.length &&
                      n == F.length - 1 &&
                      (0, e.jsx)($, { width: N }),
                  ],
                },
                n,
              ),
            ),
          });
        }
        function $(te) {
          const { width: F } = te;
          return (0, e.jsx)("div", {
            className: a().DragHighlightContainer,
            children: (0, e.jsx)("div", {
              className: a().DragHighlight,
              style: { width: F },
            }),
          });
        }
      },
      22880: (Y, V, r) => {
        "use strict";
        r.d(V, { g: () => G });
        var e = r(40323),
          d = r.n(e);
        class G {
          static ParseCSVFile(A, y) {
            return new Promise((c, a) => {
              const h = {
                header: !0,
                skipEmptyLines: "greedy",
                complete: c,
                error: (j) => a({ errors: [j] }),
                transformHeader: y,
              };
              d().parse(A, h);
            });
          }
          static ReadFile(A) {
            return new Promise((y, c) => {
              const a = new FileReader();
              (a.onload = () => y(a.result ?? "")), a.readAsText(A);
            });
          }
          static WriteFile(A, y) {
            let c = document.createElement("a");
            if (navigator.msSaveBlob) navigator.msSaveBlob(A, y);
            else {
              const a = window.URL.createObjectURL(A);
              c.href = a;
            }
            c.setAttribute("download", y), c.click();
            try {
              document.removeChild(c);
            } catch {}
          }
          static WriteCSVToFile(A, y, c, a) {
            const O = a
                ? d().unparse({ fields: a, data: A }, { header: !0 })
                : d().unparse(A, { header: !0 }),
              h = c == !0 ? ["\uFEFF" + O] : [O];
            G.WriteFile(new Blob(h, { type: "text/csv:charset=utf-8;" }), y);
          }
          static m_DummyValueForQuestionHack = 0;
          static WriteXMLToFile(A, y) {
            const c = () =>
              this.m_DummyValueForQuestionHack ? "never returned" : "?";
            let a =
              "<" +
              c() +
              'xml version="1.0" encoding="UTF-8" ' +
              c() +
              `>
`;
            (a += new XMLSerializer().serializeToString(A)),
              G.WriteFile(
                new Blob([a], { type: "application/xml:charset=utf-8;" }),
                y,
              );
          }
        }
      },
      19730: (Y, V, r) => {
        "use strict";
        r.d(V, { Dq: () => A, NO: () => y, dm: () => w });
        var e = r(84346),
          d = r(39905);
        function G(c, a) {
          const O = a.bUseBinary1K ? 1024 : 1e3,
            h = O * O,
            j = h * O,
            x = j * O;
          return c > x
            ? { nNum: c / x, strPrefix: "Tera" }
            : c > j
              ? { nNum: c / j, strPrefix: "Giga" }
              : c > h
                ? { nNum: c / h, strPrefix: "Mega" }
                : c > O
                  ? { nNum: c / O, strPrefix: "Kilo" }
                  : { nNum: c, strPrefix: "" };
        }
        function w(c, a, O, h) {
          let j = a;
          typeof j == "number"
            ? (j = {
                nDigitsAfterDecimal: a,
                bUseBinary1K: O || O === void 0,
                bValueIsInBytes: !h,
                bValueIsRate: h,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (j = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...j,
              });
          const { nNum: x, strPrefix: ee } = G(c, j),
            ae = `#${ee}${j.bValueIsInBytes ? "bytes" : "bits"}${j.bValueIsRate ? "_PerSecond" : ""}`;
          return d.Z.Localize(
            ae,
            x.toLocaleString((0, e.J)(), {
              minimumFractionDigits: j.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: j.nDigitsAfterDecimal,
            }),
          );
        }
        function A(c, a = 0) {
          let O;
          return (
            a && (O = { maximumFractionDigits: a }),
            c ? c.toLocaleString((0, e.J)(), O) : "" + c
          );
        }
        function y(c) {
          return c > 1e9
            ? Math.trunc(c / 1e9).toString() + "B"
            : c > 1e6
              ? Math.trunc(c / 1e6).toString() + "M"
              : c > 1e3
                ? Math.trunc(c / 1e3).toString() + "K"
                : c.toString();
        }
      },
      4940: (Y) => {
        Y.exports = {
          TitleHR: "_1rdzNwXOoo1-LmnB-gVa8L",
          ActionButtonCtn: "_7a7-wklt6L9bHpSe8uw95",
          CategoriesList: "YMtVaSAftRDKdmUzno1V-",
          CategoryCtn: "_1vjux5UePGI2QR8pgGS5s9",
          Category: "_12BB3TMamY8yT5zyDnNr5Y",
          CategoryType: "_2rg93RSnGgt35AemsbS3XN",
          ExcludedFromSearch: "_1qSt9f_EVF7MmpIxINFOnq",
          ReplacesTags: "_2VMbzBly9fJ6k58VPyo5Dw",
          CategoryEditor: "hDZX9jvA2yVDsxIl25krT",
          TagOrCategoryList: "_33SvLrTusAraXr9O6rG1RK",
          IDSelector: "_1COCuEUNPkqoSthDBf5dKb",
          CategorySummary: "_1h-LQnwvNcayOGn1YjEAw8",
          Clause: "_17Lm214eZBjzdDsBlWCP0y",
          Item: "uZOnNO-9GSMjuZg73yUDz",
          UnpublishedChangesNotice: "_3IZil2pI21oJCdU0WQn6Z3",
        };
      },
      41609: (Y) => {
        Y.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
      64641: (Y) => {
        Y.exports = {
          v6: "_2LxgdMcpWJRjkxZKbmeEEb",
          SubText: "vg0EOhKTLB3tLvshHMr7l",
          AvatarImageContainer: "_33hdFBTwBs64Fcp-bPdf4E",
          GameImageContainer: "_2OYADGuBPiyF7h50OJ0P1B",
          AvatarImage: "_2CQYcCggCXwVzZj2GWng5-",
          STV_HomeGridPreviewDetails: "Yncr-T63YFSJ46cq4Z2BJ",
          ChatAvatarImage: "_1cUR_vD8IvfJgOK1r89j4o",
          EditButton: "VsZ-bdWSNpnM9Vg6gkSyD",
          Small: "_3M4j828iWSVEZZAkypcBi1",
          FlexCenter: "_1R3ycnbAGUAy01o0TW7NNo",
          ThrobberCtn: "_3m7p67FD1Ynjm3BnyyjSSS",
          MarkdownLink: "_1WqumifyJucGDxm2oI6yRQ",
          SummaryTextArea: "cNMZ-dcMVhaQJFes_Ivwo",
          RemoveIcon: "_3NeLW5LAka4S9__PaMFE_J",
        };
      },
      44894: (Y, V, r) => {
        "use strict";
        r.d(V, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();

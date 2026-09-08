/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3025],
  {
    4940: (e) => {
      e.exports = {
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
    64641: (e) => {
      e.exports = {
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
    70740: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { ContentHubRoutes: () => H, default: () => J });
      var a = s(7850),
        n = s(97058),
        o = s(17083),
        r = s(92757),
        i = s(562),
        l = s(61859);
      function c(e) {
        return (0, a.jsx)(r.XG, {
          message: (e) => !(0, i.tV)() || (0, l.we)("#Generel_Discard_Warning"),
        });
      }
      var d = s(43527),
        g = s(11967),
        h = s(71150),
        u = s(31376),
        m = s(90626),
        p = s(77411),
        x = s(45737),
        C = s.n(x),
        j = s(16676),
        y = s(9154),
        b = s(738),
        S = s(56654),
        v = s(12155),
        A = s(22797);
      s(41735), s(78327), s(66418);
      h.ED, h.M, h.mx, h.T4, h.u7;
      let f = new Map();
      f.set(h.M, h.ED), f.set(h.mx, h.ED), f.set(h.T4, h.mx), f.set(h.u7, h.T4);
      var _ = s(9161),
        T = s(73745),
        k = s(30470),
        D = s(74810),
        N = s(92237),
        w = s(4940),
        E = s.n(w),
        G = s(95034);
      const M = m.memo(function () {
        const [e, t] = m.useState(),
          [s, n] = m.useState(!1),
          [o, r] = m.useState(!1),
          [l, c] = m.useState(!1);
        m.useEffect(() => {
          (0, i.GX)().then((e) => {
            t(e.rgCategories), c(e.bHasUnpublishedChanges), n(!0);
          });
        }, []);
        const d = m.useCallback((e) => {
          t(e), r(!0);
        }, []);
        return s
          ? (0, a.jsxs)("div", {
              className: C().AdminPageCtn,
              children: [
                (0, a.jsx)("div", {
                  className: C().PageTitle,
                  children: "Content Hub Categories",
                }),
                (0, a.jsx)("hr", { className: E().TitleHR }),
                (0, a.jsxs)("p", {
                  children: [
                    "This page lets you review and edit existing categories. Click on their titles.  At the bottom there is controls to create a new category. To see the hubs performance related to making a theme sale ",
                    (0, a.jsx)("a", {
                      href: `${k.TS.PARTNER_BASE_URL}promotion/planning/themes`,
                      children: "here.",
                    }),
                  ],
                }),
                (0, a.jsx)("a", {
                  href: "https://grafana.valve.org/steam/d/RoUHA6bWk/tag-hubs?orgId=2&refresh=5m",
                  target: "_blank",
                  children: "Content Hub Graphana Stats Page",
                }),
                (0, a.jsx)("div", {
                  className: C().PageSubTitle,
                  children: "Categories",
                }),
                l &&
                  (0, a.jsx)("div", {
                    className: E().UnpublishedChangesNotice,
                    children:
                      "You have unpublished changes. Click Publish below to publish and make them available to users.",
                  }),
                (0, a.jsx)(B, { categories: e, onUpdate: d }),
                (0, a.jsxs)("div", {
                  className: E().ActionButtonCtn,
                  children: [
                    (0, a.jsx)(j.jn, {
                      onClick: () =>
                        (0, b.pg)(
                          (0, a.jsx)(W, {
                            categories: e,
                            onSave: () => {
                              r(!1), c(!0);
                            },
                          }),
                          window,
                        ),
                      children: o
                        ? (0, a.jsx)(a.Fragment, { children: "Save" })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(v.Jlk, {}), "Saved"],
                          }),
                    }),
                    (0, a.jsx)(j.$n, {
                      onClick: () =>
                        (0, b.pg)(
                          (0, a.jsx)(Z, { onPublish: () => c(!1) }),
                          window,
                        ),
                      children: "Publish",
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsx)(A.t, { size: "medium", position: "center" });
      });
      function B(e) {
        const { categories: t, onUpdate: s } = e,
          { rgTags: n } = (0, i.DT)(),
          [o] = (0, G.QD)("edit");
        if (!t)
          return (0, a.jsx)("div", { children: "No categories defined." });
        const r = (e) => {
          s((t) => t.map((t) => (t.id === e.id ? e : t)));
        };
        return (0, a.jsxs)("div", {
          className: E().CategoriesList,
          children: [
            (0, a.jsx)(S.A, {
              bDisabled: !0,
              items: t,
              onDelete: (e) => {
                s((t) => t.filter((t, s) => s != e));
              },
              render: (e) =>
                (0, a.jsx)(
                  R,
                  {
                    item: e,
                    rgTags: n,
                    fnSaveCategory: r,
                    bOpenEditor: o?.toLowerCase() == e.handle,
                  },
                  e.id,
                ),
            }),
            (0, a.jsx)(j.$n, {
              onClick: () => {
                s((e) => {
                  let s = 0;
                  for (const t of e)
                    t.id && Number(t.id) > s && (s = Number(t.id));
                  return [
                    ...e,
                    { handle: "new_category_" + t.length, id: ++s },
                  ];
                });
              },
              children: "Add Category",
            }),
          ],
        });
      }
      function I(e) {
        const { rgTags: t, replacesTags: s } = e,
          n = (0, m.useMemo)(
            () =>
              s
                ?.map((e) => {
                  const s = t?.find((t) => t.tagid === e.id);
                  return (s?.name || "Unknown tag") + " (" + String(e.id) + ")";
                })
                .join(", "),
            [s, t],
          );
        return n
          ? (0, a.jsx)("span", { children: "Replaces tags: " + n })
          : (0, a.jsx)("span", {});
      }
      function R(e) {
        const { item: t, rgTags: s, fnSaveCategory: n, bOpenEditor: o } = e,
          [r, i, c] = (0, T.uD)(o);
        return (0, a.jsx)("div", {
          className: E().CategoryCtn,
          children: (0, a.jsxs)("div", {
            className: E().Category,
            children: [
              (0, a.jsxs)("a", {
                onClick: (e) =>
                  ((e) => {
                    e.preventDefault(), e.stopPropagation(), i();
                  })(e),
                children: [
                  (0, a.jsx)("b", {
                    children: t.loc_token ? (0, l.we)(t.loc_token) : "",
                  }),
                  t.loc_token ? " (" + t.handle + ")" : t.handle,
                ],
              }),
              (0, a.jsx)("div", {
                className: E().CategoryType,
                children:
                  "tagids" === t.type
                    ? "Tags"
                    : "category" === t.type
                      ? "Category"
                      : "contenthub" === t.type
                        ? "Hardcoded Filter"
                        : "Special",
              }),
              (0, a.jsx)("div", {
                className: E().ExcludedFromSearch,
                children:
                  !0 === t.exclude_from_search ? "Excluded from search" : "",
              }),
              (0, a.jsx)("div", {
                className: E().ReplacesTags,
                children: (0, a.jsx)(I, {
                  rgTags: s,
                  replacesTags: t.replaces_tags,
                }),
              }),
              (0, a.jsx)(y.EN, {
                active: r,
                children: (0, a.jsx)(P, {
                  category: t,
                  fnSaveCategory: n,
                  closeModal: c,
                }),
              }),
            ],
          }),
        });
      }
      function P(e) {
        const { fnSaveCategory: t, closeModal: s } = e,
          [n, o] = m.useState(e.category),
          r = m.useMemo(
            () => [
              { data: "tagids", label: "Tag Hub" },
              { data: "category", label: "Categories" },
              { data: "contenthub", label: "Hardcoded Filter Hub" },
            ],
            [],
          ),
          i = m.useCallback(
            (e) => o((t) => ({ ...t, content_descriptors: e })),
            [o],
          );
        return (0, a.jsxs)(y.eV, {
          title: `Edit Category (ID ${n.id})`,
          bAllowFullSize: !0,
          onCancel: s,
          closeModal: s,
          children: [
            (0, a.jsx)(j.nB, {
              children: (0, a.jsxs)("div", {
                className: E().CategoryEditor,
                children: [
                  (0, a.jsx)(j.pd, {
                    label: "Handle",
                    tooltip: "This forms the end of the URL. It must be unique",
                    value: n.handle,
                    onChange: (e) =>
                      o((t) => ({ ...t, handle: e.target.value })),
                  }),
                  (0, a.jsxs)("div", {
                    className: E().CategoryCtn,
                    children: [
                      (0, a.jsx)(j.pd, {
                        label: "Loc Token",
                        tooltip:
                          "Token only needed if we wish to expose this hub to customers",
                        value: n.loc_token,
                        onChange: (e) =>
                          o((t) => ({ ...t, loc_token: e.target.value })),
                      }),
                      n.loc_token &&
                        (0, a.jsx)(j.a3, { children: (0, l.we)(n.loc_token) }),
                      (0, a.jsx)(j.pd, {
                        label: "Description Loc Token",
                        tooltip:
                          "A localized token explaining this content hub to customers",
                        value: n.description_loc_token,
                        onChange: (e) =>
                          o((t) => ({
                            ...t,
                            description_loc_token: e.target.value,
                          })),
                      }),
                      n.description_loc_token &&
                        (0, a.jsx)(j.a3, {
                          children: (0, l.we)(n.description_loc_token),
                        }),
                    ],
                  }),
                  (0, a.jsx)(j.Yh, {
                    label: "Use As A Heading ",
                    tooltip:
                      "Only used for establishing headings used on the main store drop-down menu",
                    checked: n.heading,
                    onChange: (e) => o((t) => ({ ...t, heading: e })),
                  }),
                  (0, a.jsx)(j.Yh, {
                    label: "Exclude from search ",
                    tooltip: "Do not show this category in store search",
                    checked: n.exclude_from_search,
                    onChange: (e) =>
                      o((t) => ({ ...t, exclude_from_search: e })),
                  }),
                  (0, a.jsx)(j.pd, {
                    label: "Search aliases",
                    tooltip: "Comma separated search aliases",
                    value: n.search_alias,
                    onChange: (e) =>
                      o((t) => ({ ...t, search_alias: e.target.value })),
                  }),
                  (0, a.jsx)(j.m, {
                    label: "Type",
                    rgOptions: r,
                    selectedOption: n.type,
                    onChange: (e) => o((t) => ({ ...t, type: e.data })),
                  }),
                  (0, a.jsx)(U, {
                    rgContentDescriptors: n.content_descriptors ?? [],
                    setContentDescriptors: i,
                  }),
                  ("tagids" === n.type ||
                    "category" === n.type ||
                    "contenthub" == n.type) &&
                    (0, a.jsx)(F, { category: n, setCategory: o }),
                ],
              }),
            }),
            (0, a.jsx)(j.wi, {
              children: (0, a.jsx)(j.CB, {
                onCancel: s,
                onOK: () => {
                  t(n), s();
                },
                strOKText: "Save",
              }),
            }),
          ],
        });
      }
      const U = m.memo(function (e) {
        const { rgContentDescriptors: t, setContentDescriptors: s } = e,
          n = m.useMemo(() => [h.M, h.mx, h.T4, h.u7], []);
        return (0, a.jsx)(j.mq, {
          label: "Content Descriptors",
          children: (0, a.jsx)(g.uh, {
            selectedValue: t,
            onSelectionChange: s,
            options: n,
            getOptionLabel: (e) =>
              (function (e) {
                let t = null;
                switch (e) {
                  case h.ED:
                    t = "#ContentDescriptor_GeneralMatureContent";
                    break;
                  case h.M:
                    t = "#ContentDescriptor_FrequentViolenceOrGore";
                    break;
                  case h.mx:
                    t = "#ContentDescriptor_NudityOrSexualContent";
                    break;
                  case h.T4:
                    t = "#ContentDescriptor_GratuitousNudityOrSexualContent";
                    break;
                  case h.u7:
                    t = "#ContentDescriptor_AdultOnlySexualContent";
                    break;
                  default:
                    throw "Invalid content descriptor.";
                }
                return (0, l.we)(t);
              })(e),
          }),
        });
      });
      function F(e) {
        const { category: t, setCategory: s } = e,
          [n, o] = (0, m.useState)(!1),
          [r, i] = (0, m.useState)(0);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            ("tagids" == t.type || "category" == t.type) &&
              (0, a.jsx)("div", {
                className: E().CategoryCtn,
                children: (0, a.jsxs)("div", {
                  className: E().Category,
                  children: [
                    (0, a.jsx)(V, {
                      category: t,
                      setCategory: s,
                      list: "must",
                      title: "Must have all of these tags",
                    }),
                    (0, a.jsx)(V, {
                      category: t,
                      setCategory: s,
                      list: "any",
                      title: "Must have one of these tags",
                    }),
                    (0, a.jsx)(V, {
                      category: t,
                      setCategory: s,
                      list: "mustnot",
                      title: "Must not have any of these tags",
                    }),
                  ],
                }),
              }),
            ("tagids" == t.type ||
              "category" == t.type ||
              "contenthub" == t.type) &&
              (0, a.jsxs)("div", {
                className: E().CategoryCtn,
                children: [
                  (0, a.jsx)(V, {
                    category: t,
                    setCategory: s,
                    list: "replaces_tags",
                    title:
                      "The following Tags should redirect to this category page",
                  }),
                  (0, a.jsx)("p", {
                    children:
                      'This is only needed if this category is similar in name to an existing tag, such as "Sports" where the category is better than the individual tag.',
                  }),
                ],
              }),
            Boolean(n)
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(j.$n, {
                      onClick: () => i(r + 1),
                      children: "Refresh Stats",
                    }),
                    (0, a.jsx)(L, { category: t }),
                  ],
                })
              : (0, a.jsx)(
                  j.Yh,
                  {
                    checked: n,
                    onChange: (e) => o(e),
                    label: "Show Category Sale Stats",
                  },
                  "info" + r,
                ),
          ],
        });
      }
      function L(e) {
        const { category: t } = e,
          s = (0, u.p$)(t.must, t.any, t.mustnot);
        if (!s)
          return (0, a.jsx)(A.t, {
            string: (0, l.we)("#Loading"),
            position: "center",
            size: "medium",
          });
        const n = s.total_games > D.iT && s.total_games <= D.hp;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(j.$n, {
              onClick: () => {
                const e = [];
                e.push(["AppID", "Sale Rank"]),
                  s.top_games.forEach((t) => {
                    e.push(["" + t.appid, "" + t.long_term_sale_rank]);
                  });
                const a = (t.handle || "top100").replace(" ", "_") + ".csv";
                _.g.WriteCSVToFile(e, a);
              },
              children: "Download Top 100 Games",
            }),
            (0, a.jsx)(j.$n, {
              onClick: () => {
                const e = [];
                e.push(["AppID"]),
                  s.all_appid.forEach((t) => {
                    e.push(["" + t]);
                  });
                const a = (t.handle || "allgames").replace(" ", "_") + ".csv";
                _.g.WriteCSVToFile(e, a);
              },
              children: "Download All Games",
            }),
            (0, a.jsxs)("div", {
              className: N.ThemeRow,
              children: [
                (0, a.jsxs)("div", {
                  className: N.ThemeDefinitionCtn,
                  children: [
                    "Summary: ",
                    (0, a.jsx)(D.KU, { nTotalGames: s.total_games }),
                    Boolean(n) && (0, a.jsx)(O, { category: t }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: N.TopGamesCtn,
                  children: [
                    (0, a.jsx)("div", { children: "Top 10 Games non-F2P:" }),
                    (0, a.jsx)("div", {
                      className: N.GamesColumn,
                      children: s.top_games
                        ?.slice(0, 10)
                        .map((e) =>
                          (0, a.jsx)(
                            D.W7,
                            { info: e, category: t, bSaleSummary: n },
                            e.appid,
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
      function O(e) {
        const { category: t } = e,
          s = (0, u.eX)(t.must, t.any, t.mustnot),
          n = (0, u.mg)(t.must, t.any, t.mustnot);
        return (0, a.jsx)(D.ny, { saleSummary: s, topAppSummary: n });
      }
      const V = m.memo(function (e) {
        const { category: t, setCategory: s, list: n, title: o } = e,
          { rgTags: r, rgCategories: l } = (0, i.DT)(),
          c = (e) => {
            s((t) => ({ ...t, [n]: e(t[n]) }));
          },
          d =
            r?.map((e) => ({
              value: e.tagid,
              label: `${e.name} (${e.tagid})`,
            })) || [],
          g =
            l?.map((e) => ({
              value: e.categoryid,
              label: `${e.name} (${e.categoryid})`,
            })) || [];
        return (0, a.jsxs)("div", {
          className: E().TagOrCategoryList,
          children: [
            (0, a.jsx)(j.JU, { children: o }),
            (0, a.jsx)(S.A, {
              bDisabled: !0,
              items: t[n] ?? [],
              onDelete: (e) => c((t) => t.filter((t, s) => s != e)),
              render: (e, s) =>
                "tagids" === t.type || "replaces_tags" === n
                  ? (0, a.jsxs)("div", {
                      className: E().IDSelector,
                      children: [
                        (0, a.jsx)(j.pd, {
                          value: e.id,
                          onChange: (e) =>
                            c((t) =>
                              t.map((t, a) =>
                                a == s
                                  ? { ...t, id: parseInt(e.target.value) }
                                  : t,
                              ),
                            ),
                        }),
                        (0, a.jsx)(p.Ay, {
                          className: "react-select-container",
                          classNamePrefix: "react-select",
                          isSearchable: !0,
                          options: d,
                          value: d.find((t) => t.value === e.id),
                          onChange: (e) =>
                            c((t) =>
                              t.map((t, a) =>
                                a == s ? { ...t, id: e.value } : t,
                              ),
                            ),
                        }),
                      ],
                    })
                  : "category" === t.type
                    ? (0, a.jsx)("div", {
                        className: E().IDSelector,
                        children: (0, a.jsx)(p.Ay, {
                          className: "react-select-container",
                          classNamePrefix: "react-select",
                          isSearchable: !0,
                          options: g,
                          value: g.find((t) => t.value === e.id),
                          onChange: (e) =>
                            c((t) =>
                              t.map((t, a) =>
                                a == s ? { ...t, id: e.value } : t,
                              ),
                            ),
                        }),
                      })
                    : null,
            }),
            (0, a.jsx)(j.$n, {
              onClick: () => c((e) => (e ? [...e, { id: 0 }] : [{ id: 0 }])),
              children: "Add",
            }),
          ],
        });
      });
      function W(e) {
        const { categories: t, onSave: s, closeModal: n } = e,
          [o, r] = m.useState();
        return (
          m.useEffect(() => {
            (0, i.fT)(t).then((e) => {
              e ? r(e.strErrorMsg) : (s(), n && n());
            });
          }, [t, n, s]),
          (0, a.jsx)(y.o0, {
            strTitle: "Saving",
            bAlertDialog: !0,
            bDisableBackgroundDismiss: !0,
            bHideCloseIcon: !0,
            closeModal: n,
            children: Boolean(o)
              ? (0, a.jsxs)("div", { children: ["Error: ", o] })
              : (0, a.jsx)(A.t, { size: "medium", position: "center" }),
          })
        );
      }
      function Z(e) {
        const { onPublish: t, closeModal: s } = e,
          [n, o] = m.useState(!1),
          [r, l] = m.useState();
        return (
          m.useEffect(() => {
            n &&
              (0, i.LD)().then((e) => {
                e ? l(e.strErrorMsg) : (t(), o(!1), s && s());
              });
          }, [n, s, t]),
          (0, a.jsx)(y.o0, {
            strTitle: n ? "Publishing" : "Really Publish?",
            strDescription:
              !n &&
              "Publishing will make your changes immediately visible to users.",
            bAlertDialog: n,
            bDisableBackgroundDismiss: n,
            bHideCloseIcon: n,
            onOK: () => {
              n ? s && s() : o(!0);
            },
            onCancel: () => {
              s && s();
            },
            children:
              n &&
              (0, a.jsx)(a.Fragment, {
                children: Boolean(r)
                  ? (0, a.jsxs)("div", { children: ["Error: ", r] })
                  : (0, a.jsx)(A.t, { size: "medium", position: "center" }),
              }),
          })
        );
      }
      const H = { ContentHubCategories: () => "/categories/" };
      function J(e) {
        return (0, a.jsxs)(o.Kd, {
          basename: (0, d.C)() + "admin/store/contenthub/",
          children: [
            (0, a.jsx)(c, {}),
            (0, a.jsxs)(r.dO, {
              children: [
                (0, a.jsx)(r.qh, {
                  path: H.ContentHubCategories(),
                  component: M,
                }),
                (0, a.jsx)(r.qh, { component: n.a }),
              ],
            }),
          ],
        });
      }
    },
    44894: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      const a =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);

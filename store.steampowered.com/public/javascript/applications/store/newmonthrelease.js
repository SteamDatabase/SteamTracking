/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7278],
  {
    95863: (e) => {
      e.exports = {
        narrowWidth: "500px",
        CalendarBtn: "_6LCq5awwJWbT0WLusE-as",
      };
    },
    27221: (e) => {
      e.exports = {
        narrowWidth: "500px",
        ImagesCtn: "_3C3Hy1Ldb_j8FpXikuio9T",
        AllImagesCtn: "Y8NVLbtTPQh9gVfG4V_tl",
        FadeInTiles: "_3HscHWkOLtsK-kzGBMVI2Y",
        AllImages: "_1DF4gfqbWS61FaehmUYkuU",
        ImageTint: "_1uXifcwYEEZepZq9GX0pf0",
        Wide2: "_11TDFqeudgrq4D6KFL1Hs3",
      };
    },
    578: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => ge });
      var r = a(79785),
        n = a(68527),
        o = a(90626),
        s = a(92757),
        l = a(17083),
        i = a(44165),
        u = a(82097),
        c = a(55263),
        p = a(52038),
        m = a(22797),
        _ = a(61859),
        g = a(27221),
        d = a.n(g);
      function f(e) {
        const { rgAppIDs: t, children: a, nMonth: r } = e,
          n = (0, o.useMemo)(
            () => t.map((e) => u.A.Get().GetApp(e)).filter(Boolean),
            [t],
          );
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: (0, p.A)(d().ImagesCtn) },
            o.createElement(
              "div",
              { className: d().AllImagesCtn },
              o.createElement(
                "div",
                { className: d().AllImages },
                o.createElement(
                  "div",
                  {
                    className: (0, p.A)({
                      [d().ImageTint]: !0,
                      [`Month${r}`]: !0,
                      [d().Wide2]: n.length <= 10,
                      [d().Wide3]: n.length <= 20,
                    }),
                  },
                  n.map((e) =>
                    o.createElement("img", {
                      key: "bg_" + e.GetAppID(),
                      src: e.GetAssets().GetHeaderURL(),
                    }),
                  ),
                ),
              ),
            ),
          ),
          a,
        );
      }
      var h = a(89921),
        y = a.n(h),
        T = a(74812),
        C = a.n(T),
        E = a(82715),
        S = a(22837),
        w = a(8527),
        F = a(20194),
        A = a(77516),
        b = a(30894),
        v = a(17720);
      let D = 1234;
      function M(e, t) {
        return {
          unique_id: D++,
          capsules: null,
          events: null,
          links: null,
          section_type: e,
          localized_label: [],
          default_label: t,
        };
      }
      const N = "socialcontent_";
      var I = a(40353),
        G = a(89766),
        L = a(99487),
        k = a(30470);
      const P = [
          null,
          "rgba(249, 202, 111, 1)",
          "rgba(156, 159, 164, 1)",
          "rgba(214, 153, 95, 1)",
        ],
        V = [
          null,
          "rgba(55, 44, 24, 1)",
          "rgba(41, 41, 43, 1)",
          "rgba(52, 37, 24, 1)",
        ];
      function x(e, t, a, r, n) {
        const o = (function (e, t) {
            const a = new A.lh();
            return (
              (a.clanSteamID = v.b.InitFromClanID(e)),
              (a.GID = "fakeevent_" + D++),
              (a.jsondata.bSaleEnabled = !0),
              (a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
              (a.jsondata.sale_vanity_id = t),
              a
            );
          })(A.wv, e),
          s = [...n, ...a],
          l = new Set(n);
        if (
          ((o.jsondata.sale_sections = [
            {
              ...M("trailercarousel", ""),
              capsules: a.map((e) => ({
                id: e,
                type: l.has(e) ? "dlc" : "game",
              })),
              use_random_order: !0,
              trailer_carousel_auto_advance_msec: 1e4,
              trailer_carousel_allow_apps_without_trailers: !0,
            },
          ]),
          w.iA.logged_in)
        ) {
          const e = b.Fm.Get(),
            t = s.filter((t) => e.BIsGameWishlisted(t));
          t?.length > 0 &&
            o.jsondata.sale_sections.push({
              ...M("items", "#Sale_OnWishlist"),
              capsules: t.map((e) => ({
                id: e,
                type: l.has(e) ? "dlc" : "game",
              })),
              capsules_per_row_array: [5],
              carousel_rows: 1,
              capsule_style_per_row_array: ["tall"],
              random_from_entire_set: !0,
            });
          const a = s.filter((t) => e.BIsGameRecommended(t));
          if (a?.length > 0) {
            const e = a.length;
            o.jsondata.sale_sections.push({
              ...M("items", "#Sale_default_label_RecommendedForYou"),
              capsules: a.map((e) => ({
                id: e,
                type: l.has(e) ? "dlc" : "game",
              })),
              capsules_per_row_array: 2 == e ? [2] : [3, 2],
              carousel_rows: 2,
              show_as_carousel: !0,
              capsule_style_per_row_array: 2 == e ? ["grid"] : ["tall", "grid"],
            });
          }
          const r = n.filter((t) => {
            if (!e.BIsGameOwned(t)) {
              const a = u.A.Get().GetApp(t);
              return e.BIsGameOwned(a.GetParentAppID());
            }
            return !1;
          });
          r.length > 0 &&
            o.jsondata.sale_sections.push({
              ...M("dlc_for_you", "#Sale_default_label_246"),
              capsules: r.map((e) => ({ id: e, type: "dlc" })),
              dlc_for_you_data: {
                group_by_parent_app: !0,
                hide_dlc_stats: !0,
                parent_app_page_size: 5,
                hide_dlc_grouping: !0,
              },
              capsules_per_row_array: [3],
              show_as_carousel: !0,
            });
        }
        if (a?.length > 25)
          for (let e in r) {
            const t = r[e];
            o.jsondata.sale_sections.push({
              ...M("items", "#SteamCharts_Monthly_Rank_" + e),
              capsules: t.map((e) => ({ id: e, type: "game" })),
              capsules_per_row_array: [2, 3],
              show_as_carousel: !1,
              use_random_order: !0,
              background_gradient_top: P[e],
              background_gradient_bottom: V[e],
            });
          }
        return (
          o.jsondata.sale_sections.push({
            ...M("items", "#Sale_default_label_148"),
            capsules: a.map((e) => ({
              id: e,
              type: l.has(e) ? "dlc" : "game",
            })),
            capsules_per_row_array: [1],
            show_as_carousel: !1,
            carousel_rows: 1,
            single_item_style: "library",
            use_random_order: !0,
            cap_section_content: !1,
            cap_section_row_count: 50,
            enable_faceted_browsing: !0,
            min_capsule_matches_for_facet_values: 5,
            max_facet_values_for_facet: 5,
            facet_sort_order: 1,
            cap_item_count: 0,
            facets: t,
          }),
          o.jsondata.sale_sections.push({
            ...M("social_share", "#EventDisplay_Share_WithFriendsHeader"),
            social_share: {
              platforms: [
                { label: A.Zf.Steam, checked: !0 },
                { label: A.Zf.Facebook, checked: !0 },
                { label: A.Zf.Twitter, checked: !0 },
                { label: A.Zf.Reddit, checked: !0 },
              ],
              doorsEnabled: !1,
              content_options: [
                {
                  unique_id: N + Math.floor(1e6 * Math.random()),
                  door: void 0,
                  twitter_card: A.jR.SummaryLargeImage,
                  localized_option_fields: {
                    localized_header: [],
                    title: [],
                    description: [],
                    image: [],
                  },
                },
              ],
            },
          }),
          o
        );
      }
      const R = (0, s.y)(G.H);
      function O(e) {
        const {
            rgFilteredDLCsAppIDs: t,
            rgFilteredCombinedAppsAndDLC: a,
            promotionName: r,
            rgFilteredAppIDByTier: n,
            facets: s,
          } = e,
          l = (function (e, t, a, r, n) {
            const { data: o } = (0, F.I)({
              queryKey: [e],
              queryFn: () => x(e, t, a, r, n),
            });
            return o;
          })(r, s, a, n, t),
          [i] = (0, o.useState)(new L.y(null, 0));
        return l
          ? o.createElement(
              "div",
              null,
              l.jsondata.sale_sections.map((e) =>
                o.createElement(
                  E.tH,
                  { key: r + "_" + e.unique_id },
                  o.createElement(R, {
                    section: e,
                    event: l,
                    language: (0, S.sf)(k.TS.LANGUAGE),
                    promotionName: r,
                    nSaleDayIndex: 0,
                    ePreviewMode: I.S.EPreviewMode_Enabled,
                    activeTab: i,
                    appVisibilityTracker: null,
                  }),
                ),
              ),
            )
          : o.createElement(m.t, {
              string: (0, _.we)("#Loading"),
              position: "center",
            });
      }
      var z = a(57876),
        B = a(41735),
        j = a.n(B),
        H = a(68797),
        Y = a(78327);
      const U = new (class {
        m_rgCategoriesForTagID = null;
        m_rgTagNameForTagID = null;
        m_rgLocalizedCategoryNames = null;
        m_rgLocalizedTagNames = null;
        m_rgLanguages = null;
        constructor(e = null) {
          e && this.ParseResponse(e);
        }
        GetCategoriesForTagID() {
          return this.m_rgCategoriesForTagID;
        }
        GetTagNameForTagID() {
          return this.m_rgTagNameForTagID;
        }
        GetLocalizedCategoryNames() {
          return this.m_rgLocalizedCategoryNames;
        }
        GetLocalizedTagNames() {
          return this.m_rgLocalizedTagNames;
        }
        GetLanguages() {
          return this.m_rgLanguages;
        }
        AutoGenerateFacets() {
          const e = this.ComputeLocalizedCategoryNames(),
            t = this.ComputeLocalizedTagNames(),
            a = this.ComputeCategoryToTagMap(),
            r = this.ComputeFacetCategoryToTagMap(a);
          return this.ComputeFacets(r, e, t);
        }
        async AutoGenerateFacetsAsync() {
          return await this.EnsureLoaded(), this.AutoGenerateFacets();
        }
        ParseResponse(e) {
          (this.m_rgCategoriesForTagID = new Map()),
            (this.m_rgTagNameForTagID = new Map()),
            (this.m_rgLocalizedCategoryNames = new Map()),
            (this.m_rgLocalizedTagNames = new Map()),
            (this.m_rgLanguages = new Array());
          for (const t of Object.keys(e.rgCategoriesByTag))
            this.m_rgCategoriesForTagID.set(
              Number(t),
              Array.from(e.rgCategoriesByTag[t]),
            );
          for (const t of Object.keys(e.rgTagNames))
            this.m_rgTagNameForTagID.set(Number(t), e.rgTagNames[t]);
          for (const t of Object.keys(e.rgLocalizedCategoryNames))
            this.m_rgLocalizedCategoryNames.set(
              t,
              Array.from(e.rgLocalizedCategoryNames[t]),
            );
          for (const t of Object.keys(e.rgLocalizedTagNames))
            this.m_rgLocalizedTagNames.set(
              Number(t),
              Array.from(e.rgLocalizedTagNames[t]),
            );
          this.m_rgLanguages = Array.from(e.rgLanguages);
        }
        async EnsureLoaded() {
          if (this.m_rgCategoriesForTagID) return;
          const e = await this.Load();
          this.ParseResponse(e);
        }
        async Load() {
          let e = null;
          try {
            if (
              ((e = (
                await j().get(
                  `${Y.TS.COMMUNITY_BASE_URL}sale/ajaxgetcategoriesbytag`,
                )
              ).data),
              1 !== e?.success)
            )
              return (
                console.error(
                  "Unable to load tag category data: " + e?.success,
                ),
                null
              );
          } catch (e) {
            return (
              console.error(
                "Unable to load tag category data: " + (0, H.H)(e).strErrorMsg,
              ),
              null
            );
          }
          return e;
        }
        ComputeCategoryToTagMap() {
          const e = new Map();
          return (
            this.m_rgCategoriesForTagID.forEach((t, a) => {
              if (t)
                for (const r of t)
                  e.has(r) || e.set(r, new Array()), e.get(r).push(a);
            }),
            e
          );
        }
        ComputeFacetCategoryToTagMap(e) {
          const t = [
              "supergenre",
              "genre",
              "subgenre",
              "visuals",
              "theme_mood",
              "feature",
              "players",
            ],
            a = new Set(),
            r = new Map(),
            n = (t, n) => {
              const o = e.get(n);
              for (const e of o) a.has(e) || (a.add(e), r.get(t).push(e));
            };
          for (const e of t)
            r.set(e, new Array()),
              "theme_mood" === e ? (n(e, "theme"), n(e, "mood")) : n(e, e);
          return r;
        }
        ComputeLocalizedCategoryNames() {
          const e = new Map();
          e.set("supergenre", "#App_Taxonomy_Survey_QSuperGenreTitle"),
            e.set("genre", "#App_Taxonomy_Survey_QGenreTitle"),
            e.set("subgenre", "#App_Taxonomy_Survey_QSubGenreTitle"),
            e.set("visuals", "#App_Taxonomy_Survey_QVisualsTitle"),
            e.set("theme_mood", "#App_Taxonomy_Survey_QThemeMoodTitle"),
            e.set("feature", "#App_Taxonomy_Survey_QFeaturesTitle"),
            e.set("players", "#App_Taxonomy_Survey_QPlayersTitle");
          const t = new Map();
          return (
            this.m_rgLocalizedCategoryNames.forEach((a, r) => {
              const n = new Array(31);
              (n[0] = e.get(r)), t.set(r, n);
            }),
            t
          );
        }
        ComputeLocalizedTagNames() {
          const e = new Map();
          return (
            this.m_rgLocalizedTagNames.forEach((t, a) => {
              const r = t,
                n = new Array(31);
              n.fill(""),
                this.m_rgLanguages.forEach((e, t) => {
                  const a = (0, S.sf)(e, -1);
                  -1 === a
                    ? console.warn("Unrecognized language: " + e)
                    : 0 <= a && a < 31 && (n[a] = r[t]);
                }),
                e.set(a, n);
            }),
            e
          );
        }
        ComputeFacets(e, t, a) {
          const r = new Array();
          return (
            e.forEach((e, n) => {
              const o = {
                  name: t.get(n),
                  facetValues: new Array(),
                  logical_and: !0,
                },
                s = Array();
              for (const t of e) {
                if (!a.get(t)) {
                  s.push(t);
                  continue;
                }
                const e = {
                  name: a.get(t),
                  subtitle: new Array(),
                  rgStoreTagFilter: {
                    type: A.EE.k_EStoreFilterClauseTypeAnd,
                    rgSubexpressions: [
                      {
                        type: A.EE.k_EStoreFilterClauseTypeOr,
                        rgSubexpressions: [
                          {
                            type: A.EE.k_EStoreFilterClauseTypeStoreTag,
                            value: t,
                          },
                        ],
                      },
                    ],
                  },
                  nAtomicStoreTagID: t,
                  filter: null,
                };
                o.facetValues.push(e);
              }
              s.length > 0 &&
                console.warn(
                  "No name information found for tag count " +
                    s.length +
                    ", skipping.",
                  s,
                ),
                r.push(o);
            }),
            r
          );
        }
      })();
      var W;
      function q(e, t) {
        return "[" + t + "] " + e;
      }
      async function X(e) {
        const t = await U.AutoGenerateFacetsAsync();
        return (
          (function (e) {
            const t = U.GetTagNameForTagID();
            for (const a of e)
              for (const e of a.facetValues) {
                const a = e.nAtomicStoreTagID;
                let r = [t.get(a)];
                (r = r.map((e) => Q(e))),
                  (e.type = A.GE.k_ESaleTagFilter),
                  (e.filter = { clauses: [{ type: "Must have", or_tags: r }] });
              }
          })(t),
          e.bForceFeatureTagForFullController &&
            (function (e) {
              e.forEach((e) => {
                e.facetValues.forEach((e) => {
                  e.type === A.GE.k_ESaleTagFilter &&
                    e.filter.clauses.forEach((e) => {
                      e.or_tags.forEach((t, a) => {
                        const r = (function (e) {
                            const t = /^\[(.+)\]/.exec(e);
                            return t ? t[1] : void 0;
                          })(t),
                          n = (function (e) {
                            return e.replace(/^\[(.+)\]/, "").trim();
                          })(t).toLocaleLowerCase();
                        r === W.Store &&
                          "controller" === n &&
                          (e.or_tags[a] = q("Full Controller", W.Feature));
                      });
                    });
                });
              });
            })(t),
          (function (e) {
            for (const t of e)
              if ("#App_Taxonomy_Survey_QVisualsTitle" === t.name[0]) {
                t.facetValues.push({
                  name: ["#Store_HDRSupported"],
                  type: A.GE.k_ESaleTagFilter,
                  filter: {
                    clauses: [
                      { type: "Must have", or_tags: [q("HDR", W.Feature)] },
                    ],
                  },
                  rgStoreTagFilter: null,
                });
                break;
              }
          })(t),
          (function (e) {
            const t = {
                name: ["#AppTypeLabelTitle"],
                facetValues: [],
                logical_and: !1,
              },
              a = [
                "game",
                "software",
                "dlc",
                "demo",
                "music",
                "video",
                "hardware",
              ];
            for (const e of a)
              t.facetValues.push({
                name: ["#AppTypeLabel_" + e],
                type: A.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [{ type: "Must have", or_tags: [q(e, W.AppType)] }],
                },
                rgStoreTagFilter: null,
              });
            e.push(t);
          })(t),
          (function (e) {
            const t = {
                name: ["#ControllerSupportLabelTitle"],
                facetValues: [],
                logical_and: !1,
              },
              a = [
                {
                  name: "#Store_ControllerSupport_FullController",
                  value: "Full Controller",
                },
                {
                  name: "#Store_ControllerSupport_Xbox",
                  value: "Xbox Controller",
                },
                {
                  name: "#Store_ControllerSupport_PS4",
                  value: "PS4 Controller",
                },
                {
                  name: "#Store_ControllerSupport_PS5",
                  value: "PS5 Controller",
                },
                {
                  name: "#Store_ControllerSupport_SIAPI",
                  value: "Steam Input API",
                },
                {
                  name: "#Store_ControllerSupport_GamepadRequired",
                  value: "Gamepad Preferred",
                },
              ];
            for (const e of a)
              t.facetValues.push({
                name: [e.name],
                type: A.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    { type: "Must have", or_tags: [q(e.value, W.Feature)] },
                  ],
                },
                rgStoreTagFilter: null,
              });
            e.push(t);
          })(t),
          (function (e) {
            const t = { name: ["#Platform"], facetValues: [], logical_and: !1 };
            t.facetValues.push({
              name: ["#Platform_Windows"],
              type: A.GE.k_ESaleTagFilter,
              filter: {
                clauses: [
                  { type: "Must have", or_tags: ["[Feature] Windows"] },
                ],
              },
              rgStoreTagFilter: null,
            }),
              t.facetValues.push({
                name: ["#Platform_Linux"],
                type: A.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    { type: "Must have", or_tags: ["[Feature] Linux"] },
                  ],
                },
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#Platform_Mac"],
                type: A.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [{ type: "Must have", or_tags: ["[Feature] Mac"] }],
                },
                rgStoreTagFilter: null,
              }),
              e.push(t);
          })(t),
          (function (e) {
            const t = {
              name: ["#LanguageTitle"],
              facetValues: [],
              logical_and: !1,
            };
            for (let e = 0; e < 31; ++e)
              t.facetValues.push({
                name: ["#language_selection_" + (0, S.Lg)(e)],
                type: A.GE.k_ELanguage,
                language: e,
                filter: null,
                rgStoreTagFilter: null,
              });
            e.push(t);
          })(t),
          (function (e) {
            const t = {
              name: ["#ContentDescriptor"],
              facetValues: [],
              logical_and: !1,
            };
            t.facetValues.push({
              name: ["#ContentDescriptor_GeneralMatureContent"],
              type: A.GE.k_EContentDescriptor,
              contentDescriptor: 5,
              filter: null,
              rgStoreTagFilter: null,
            }),
              t.facetValues.push({
                name: ["#ContentDescriptor_FrequentViolenceOrGore"],
                type: A.GE.k_EContentDescriptor,
                contentDescriptor: 2,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#ContentDescriptor_NudityOrSexualContent"],
                type: A.GE.k_EContentDescriptor,
                contentDescriptor: 1,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#ContentDescriptor_GratuitousNudityOrSexualContent"],
                type: A.GE.k_EContentDescriptor,
                contentDescriptor: 4,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#ContentDescriptor_AdultOnlySexualContent"],
                type: A.GE.k_EContentDescriptor,
                contentDescriptor: 3,
                filter: null,
                rgStoreTagFilter: null,
              }),
              e.push(t);
          })(t),
          t.push({
            name: ["#Sale_BrowserSortOption_Price"],
            facetValues: [
              {
                name: ["#Sale_BrowserSortOption_Price"],
                type: A.GE.k_EPrice,
                filter: null,
                rgStoreTagFilter: null,
              },
              {
                name: ["#Sale_BrowserSortOption_PopularPurchasedDiscounted"],
                type: A.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    {
                      type: "Must have",
                      or_tags: [q("Discounted", W.Feature)],
                    },
                  ],
                },
                rgStoreTagFilter: null,
              },
            ],
          }),
          (function (e) {
            const t = { name: ["#Sale_Preferences"], facetValues: [] };
            t.facetValues.push({
              name: ["#UserPreference_HideOwnedItems"],
              type: A.GE.k_EUserPreference,
              userPreference: A.yX.k_EHideOwnedItems,
              filter: null,
              rgStoreTagFilter: null,
            }),
              t.facetValues.push({
                name: ["#UserPreference_HideWishlistedItems"],
                type: A.GE.k_EUserPreference,
                userPreference: A.yX.k_EHideWishlistedItems,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#UserPreference_HideIgnoredItems"],
                type: A.GE.k_EUserPreference,
                userPreference: A.yX.k_EHideIgnoredItems,
                bEnabledByDefault: !0,
                filter: null,
                rgStoreTagFilter: null,
              }),
              e.push(t);
          })(t),
          t
        );
      }
      function Q(e) {
        return q(e, W.Store);
      }
      !(function (e) {
        (e.Store = "Store"),
          (e.Feature = "Feature"),
          (e.OptIn = "Opt"),
          (e.Auto = "Auto"),
          (e.Custom = "Custom"),
          (e.AppType = "AppType");
      })(W || (W = {}));
      var Z = a(32630),
        $ = a(32754),
        K = a(12155),
        J = a(92298),
        ee = a.n(J),
        te = a(19367),
        ae = a.n(te),
        re = a(88997),
        ne = a(68451),
        oe = a(95863),
        se = a.n(oe);
      function le(e) {
        const { toolTipContent: t } = e,
          a =
            ((r = { ...e }),
            (0, o.useCallback)(
              (e, t) => {
                const a = o.createElement(ie, { ...r });
                (0, re.lX)(a, e, t);
              },
              [r],
            ));
        var r;
        return o.createElement(
          $.Gq,
          { toolTipContent: t },
          o.createElement(
            "div",
            {
              className: se().CalendarBtn,
              onClick: (e) =>
                a(e, { bDisableMouseOverlay: !0, bAlwaysOnTop: !0 }),
            },
            o.createElement(K.VvS, null),
          ),
        );
      }
      function ie(e) {
        const { value: t, fnOnUpdate: a, minDate: r, maxDate: n } = e,
          s = (0, o.useRef)(),
          l = (0, o.useRef)(null);
        console.log(ae().unix(t).format(), t);
        const i = (0, o.useCallback)(
            (e) => {
              const t = ae().unix(r),
                a = ae().unix(n);
              return (
                e.isSameOrAfter(t, "month") && e.isSameOrBefore(a, "month")
              );
            },
            [r, n],
          ),
          u = (0, o.useCallback)(
            (e) => {
              a(e.unix()), s.current.Hide();
            },
            [a],
          );
        return o.createElement(
          ne.tz,
          { refInstance: s },
          o.createElement(
            ne.kt,
            { onSelected: () => {} },
            o.createElement(
              "div",
              {
                onClick: (e) => {
                  e.preventDefault(), e.stopPropagation();
                },
              },
              o.createElement(ee(), {
                ref: l,
                value: ae().unix(t),
                onChange: u,
                dateFormat: "YYYY-MM",
                timeFormat: !1,
                closeOnSelect: !0,
                isValidDate: i,
                input: !1,
              }),
            ),
          ),
        );
      }
      var ue = a(44691),
        ce = a(52745),
        pe = a(76222);
      function me(e) {
        const t = new Date(e > 1e12 ? e : 1e3 * e),
          a =
            (new Intl.DateTimeFormat("en-US", {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }).format(t),
            new Date(
              t.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
            )),
          r = a.getMonth(),
          n = a.getFullYear(),
          o = a.getDate(),
          s = a.getHours();
        let l, i;
        for (l = o > 15 || (15 === o && s >= 10) ? r - 1 : r - 2; l < 0; )
          (l += 12), (i = (i ?? n) - 1);
        i = i ?? n;
        const u = new Date(Date.UTC(i, l, 15, 17, 0));
        return Math.floor(u.getTime() / 1e3);
      }
      function _e(e, t) {
        if (t < 0 || t > 11)
          throw new Error("Invalid month index. Must be between 0 and 11.");
        return `${["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"][t]}_${e}`;
      }
      function ge(e) {
        const t = r.ZQ.Get(),
          { salePagename: a } = (0, s.g)(),
          n = (0, i.f1)(),
          { dtMidMonth: l, dtTestMonth: u } = (function (e) {
            const [t, a] = e.split("_");
            let r = parseInt(a, 10),
              n = {
                january: 0,
                february: 1,
                march: 2,
                april: 3,
                may: 4,
                june: 5,
                july: 6,
                august: 7,
                september: 8,
                october: 9,
                november: 10,
                december: 11,
              }[t.toLowerCase()];
            if (void 0 === n) return { dtMidMonth: null, dtTestMonth: null };
            let o = n,
              s = r;
            return (
              11 == n ? ((o = 0), (s += 1)) : (o += 1),
              {
                dtMidMonth: new Date(r, n, 15),
                dtTestMonth: new Date(s, o, 15),
              }
            );
          })(a);
        return !l ||
          Math.floor(u.getTime() / 1e3) > n ||
          l.getFullYear() < ye ||
          (l.getFullYear() == ye && l.getMonth() < Te)
          ? o.createElement(
              "div",
              null,
              (0, _.we)("#DateTimePicker_Fallback_Invalid_DateTime"),
            )
          : o.createElement(
              Z.Ay,
              { method: "topnewreleases" },
              o.createElement(
                E.tH,
                null,
                o.createElement(fe, {
                  TopMonthlyReleasesStore: t,
                  nMonth: l.getMonth(),
                  nYear: l.getFullYear(),
                  promotionName: a,
                }),
              ),
            );
      }
      const de = { ...z.Xh, apply_user_filters: !0 };
      function fe(e) {
        const {
            TopMonthlyReleasesStore: t,
            nYear: a,
            nMonth: n,
            promotionName: s,
          } = e,
          [l, i] = (0, o.useState)(null),
          [p, g] = (0, o.useState)(null),
          d = (0, r.f7)(t, a, n),
          h = (0, o.useMemo)(
            () =>
              d
                ? [
                    ...(d.top_app_releases?.map((e) => e.appid) || []),
                    ...(d.top_dlc_releases?.map((e) => e.appid) || []),
                    ...(d.top_combined_app_and_dlc_releases?.map(
                      (e) => e.appid,
                    ) || []),
                  ]
                : (g(null), []),
            [d],
          ),
          T = (0, c.zX)(h, de),
          C = (0, o.useMemo)(
            () =>
              d && 1 != T
                ? d.top_dlc_releases
                    ?.filter((e) => !u.A.Get().BIsAppMissing(e.appid))
                    .map((e) => e.appid)
                : [],
            [d, T],
          ),
          { rgFilteredCombinedAppsAndDLC: E, rgFilteredAppIDByTier: S } = (0,
          o.useMemo)(() => {
            if (!d || 1 == T)
              return {
                rgFilteredCombinedAppsAndDLC: [],
                rgFilteredAppIDByTier: [],
              };
            const e =
                d.top_app_releases?.length > 0
                  ? d.top_app_releases
                  : d.top_combined_app_and_dlc_releases,
              t = [];
            return {
              rgFilteredCombinedAppsAndDLC: e
                .filter((e) => !u.A.Get().BIsAppMissing(e.appid))
                .map((e) => {
                  const a = e.app_release_rank;
                  return t[a] || (t[a] = []), t[a].push(e.appid), e.appid;
                }),
              rgFilteredAppIDByTier: t,
            };
          }, [T, d]);
        return (
          (0, o.useEffect)(() => {
            l || X({ bForceFeatureTagForFullController: !1 }).then(i);
          }, [l]),
          (0, o.useEffect)(() => {
            if (null == p && 1 != T) {
              const e = (function (e) {
                const t = b.Fm.Get(),
                  a = e
                    .filter((e) => {
                      if (!t.BIsGameOwned(e)) {
                        const a = u.A.Get().GetApp(e);
                        return (
                          a &&
                          a.BIsVisible() &&
                          t.BIsGameOwned(a.GetParentAppID())
                        );
                      }
                      return !1;
                    })
                    .map((e) => u.A.Get().GetApp(e).GetParentAppID())
                    .filter(Boolean);
                return Array.from(new Set(a));
              })(C);
              e?.length > 0
                ? u.A.Get()
                    .HintLoadStoreApps(e, z.Xh)
                    .then(() => g(e))
                : g([]);
            }
          }, [l, T, C, p]),
          d && 1 != T && l && null != p && h
            ? 0 == h.length
              ? o.createElement(
                  "div",
                  { className: y().ChartPage },
                  o.createElement(Ee, { nMonth: n, nYear: a }),
                  o.createElement(
                    "div",
                    null,
                    (0, _.we)(
                      d.bSQLError
                        ? "#Error_ErrorCommunicatingWithNetwork"
                        : "#SteamCharts_NewMonth_NoRelease",
                    ),
                  ),
                )
              : o.createElement(
                  "div",
                  { className: y().ChartPage },
                  o.createElement(
                    f,
                    { rgAppIDs: E, nMonth: n },
                    o.createElement(Ee, { nMonth: n, nYear: a }),
                  ),
                  o.createElement(O, {
                    promotionName: s,
                    rgFilteredCombinedAppsAndDLC: E,
                    rgFilteredAppIDByTier: S,
                    rgFilteredDLCsAppIDs: C,
                    facets: l,
                  }),
                )
            : o.createElement(
                "div",
                { className: y().ChartPage },
                o.createElement(Ee, { nMonth: n, nYear: a }),
                o.createElement(m.t, {
                  string: (0, _.we)("#Loading"),
                  position: "center",
                }),
              )
        );
      }
      function he(e, t) {
        return (
          (0, _.we)(
            "#SteamCharts_Monthly_ForMonth",
            (0, _.we)("#Sale_Reservation_MonthNoun_" + (e + 1)),
          ) +
          ", " +
          t
        );
      }
      const ye = 2003,
        Te = 8,
        Ce = 1063584e3;
      function Ee(e) {
        const { nMonth: t, nYear: a } = e,
          u = (0, s.W6)(),
          c = (0, ce.yk)() || (0, pe.tx)(window),
          m = (0, i.f1)(),
          g = t > 0 ? a : a - 1,
          d = t > 0 ? t - 1 : 11,
          f = _e(g, d),
          h = a > ye || t > Te,
          y = t < 11 ? a : a + 1,
          T = t < 11 ? t + 1 : 0,
          E = _e(y, T),
          S = new Date(11 == T ? a + 1 : a, 11 == T ? 0 : T + 1, 15),
          w = Math.floor(S.getTime() / 1e3) < m,
          F = (0, o.useCallback)(
            (e) => {
              c.active_modal ||
                (e && w
                  ? u.push(n.SteamChartsRoutes.TopNewReleasesNew(E))
                  : !e &&
                    h &&
                    u.push(n.SteamChartsRoutes.TopNewReleasesNew(f)));
            },
            [c.active_modal, w, h, u, E, f],
          );
        return (
          (0, ue.E)("ArrowLeft", () => F(!1), !0, !0),
          (0, ue.E)("Left", () => F(!1), !0, !0),
          (0, ue.E)("ArrowRight", () => F(!0), !0, !0),
          (0, ue.E)("Right", () => F(!0), !0, !0),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: (0, p.A)(C().HeaderCtn, C().WithSubtitle) },
              o.createElement(
                "h1",
                null,
                (0, _.we)("#SteamCharts_Monthly_Title"),
              ),
            ),
            o.createElement(
              "div",
              { className: (0, p.A)(C().PageSubtitle) },
              (0, _.we)("#SteamCharts_Monthly_SubTitle", (0, r.Jk)(a)),
            ),
            o.createElement(
              "div",
              { className: C().ChartRangeCtn },
              o.createElement(
                $.Gq,
                { toolTipContent: he(d, g) },
                o.createElement(
                  "div",
                  {
                    className: (0, p.A)({
                      [C().ChartNavCtn]: !0,
                      [C().Disabled]: !h,
                    }),
                  },
                  o.createElement(
                    l.N_,
                    {
                      to: h ? n.SteamChartsRoutes.TopNewReleasesNew(f) : void 0,
                    },
                    o.createElement(
                      "div",
                      { className: C().ChartNavPrev },
                      " ",
                    ),
                  ),
                ),
              ),
              o.createElement(
                $.Gq,
                { toolTipContent: he(T, y) },
                o.createElement(
                  "div",
                  {
                    className: (0, p.A)({
                      [C().ChartNavCtn]: !0,
                      [C().Disabled]: !w,
                    }),
                  },
                  o.createElement(
                    l.N_,
                    { to: w ? n.SteamChartsRoutes.TopNewReleasesNew(E) : null },
                    o.createElement(
                      "div",
                      { className: C().ChartNavNext },
                      " ",
                    ),
                  ),
                ),
              ),
              o.createElement(
                "div",
                { className: C().ChartRangeText },
                he(t, a),
              ),
              o.createElement(le, {
                toolTipContent: (0, _.we)("#SteamCharts_Monthly_Calendar"),
                minDate: Ce,
                maxDate: me(m),
                value: Math.floor(new Date(a, t, 15, 12, 0, 0).getTime() / 1e3),
                fnOnUpdate: (e) => {
                  const t = new Date(1e3 * e),
                    a = _e(t.getFullYear(), t.getMonth());
                  u.push(n.SteamChartsRoutes.TopNewReleasesNew(a));
                },
              }),
            ),
          )
        );
      }
    },
  },
]);

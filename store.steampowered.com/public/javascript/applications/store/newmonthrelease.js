/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7278],
  {
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
    93844: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => Z });
      var r = a(79785),
        n = a(68527),
        o = a(90626),
        s = a(92757),
        l = a(17083),
        u = a(44165),
        i = a(82097),
        c = a(55263),
        p = a(52038),
        _ = a(22797),
        m = a(61859),
        g = a(27221),
        d = a.n(g);
      function f(e) {
        const { rgAppIDs: t, children: a } = e,
          r = (0, o.useMemo)(
            () => t.map((e) => i.A.Get().GetApp(e)).filter(Boolean),
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
                      [d().Wide2]: r.length <= 10,
                      [d().Wide3]: r.length <= 20,
                    }),
                  },
                  r.map((e) =>
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
        S = a.n(T),
        E = a(82715),
        C = a(22837),
        F = a(8527),
        w = a(20194),
        v = a(77516),
        A = a(30894),
        b = a(17720);
      let G = 1234;
      function N(e, t) {
        return {
          unique_id: G++,
          capsules: null,
          events: null,
          links: null,
          section_type: e,
          localized_label: [],
          default_label: t,
        };
      }
      const M = "socialcontent_";
      var I = a(40353),
        D = a(89766),
        L = a(99487),
        k = a(30470);
      function P(e, t, a, r) {
        const n = (function (e, t) {
            const a = new v.lh();
            return (
              (a.clanSteamID = b.b.InitFromClanID(e)),
              (a.GID = "fakeevent_" + G++),
              (a.jsondata.bSaleEnabled = !0),
              (a.jsondata.sale_vanity_id_valve_approved_for_sale_subpath = !0),
              (a.jsondata.sale_vanity_id = t),
              a
            );
          })(v.wv, e),
          o = [...r, ...a],
          s = new Set(r);
        if (
          ((n.jsondata.sale_sections = [
            {
              ...N("trailercarousel", ""),
              capsules: a.map((e) => ({ id: e, type: "game" })),
              use_random_order: !0,
              trailer_carousel_auto_advance_msec: 1e4,
            },
          ]),
          F.iA.logged_in)
        ) {
          const e = A.Fm.Get(),
            t = o.filter((t) => e.BIsGameWishlisted(t));
          t?.length > 0 &&
            n.jsondata.sale_sections.push({
              ...N("items", "#Sale_OnWishlist"),
              capsules: t.map((e) => ({
                id: e,
                type: s.has(e) ? "dlc" : "game",
              })),
              capsules_per_row_array: [5],
              carousel_rows: 1,
              capsule_style_per_row_array: ["tall"],
              random_from_entire_set: !0,
            });
          const a = o.filter((t) => e.BIsGameRecommended(t));
          if (a?.length > 0) {
            const e = a.length;
            n.jsondata.sale_sections.push({
              ...N("items", "#Sale_default_label_RecommendedForYou"),
              capsules: a.map((e) => ({
                id: e,
                type: s.has(e) ? "dlc" : "game",
              })),
              capsules_per_row_array: 2 == e ? [2] : [3, 2],
              carousel_rows: 2,
              show_as_carousel: !0,
              capsule_style_per_row_array: 2 == e ? ["grid"] : ["tall", "grid"],
            });
          }
          const l = r.filter((t) => {
            if (!e.BIsGameOwned(t)) {
              const a = i.A.Get().GetApp(t);
              return e.BIsGameOwned(a.GetParentAppID());
            }
            return !1;
          });
          l.length > 0 &&
            n.jsondata.sale_sections.push({
              ...N("dlc_for_you", "#Sale_default_label_246"),
              capsules: l.map((e) => ({ id: e, type: "dlc" })),
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
        return (
          n.jsondata.sale_sections.push({
            ...N("items", "#Sale_default_label_148"),
            capsules: a.map((e) => ({ id: e, type: "game" })),
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
          n.jsondata.sale_sections.push({
            ...N("items", "#Sale_default_label_280"),
            capsules: r.map((e) => ({ id: e, type: "dlc" })),
            capsules_per_row_array: [2, 3, 4, 3],
            show_as_carousel: !1,
            show_parent_app: !0,
            cap_section_content: !0,
            cap_section_row_count: 4,
          }),
          n.jsondata.sale_sections.push({
            ...N("social_share", "#EventDisplay_Share_WithFriendsHeader"),
            social_share: {
              platforms: [
                { label: v.Zf.Steam, checked: !0 },
                { label: v.Zf.Facebook, checked: !0 },
                { label: v.Zf.Twitter, checked: !0 },
                { label: v.Zf.Reddit, checked: !0 },
              ],
              doorsEnabled: !1,
              content_options: [
                {
                  unique_id: M + Math.floor(1e6 * Math.random()),
                  door: void 0,
                  twitter_card: v.jR.SummaryLargeImage,
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
          n
        );
      }
      const V = (0, s.y)(D.H);
      function z(e) {
        const {
            rgFilteredDLCsAppIDs: t,
            rgFilteredFullApps: a,
            promotionName: r,
            facets: n,
          } = e,
          s = (function (e, t, a, r) {
            const { data: n } = (0, w.I)({
              queryKey: [e],
              queryFn: () => P(e, t, a, r),
            });
            return n;
          })(r, n, a, t),
          [l] = (0, o.useState)(new L.y(null, 0));
        return s
          ? o.createElement(
              "div",
              null,
              s.jsondata.sale_sections.map((e) =>
                o.createElement(
                  E.tH,
                  { key: r + "_" + e.unique_id },
                  o.createElement(V, {
                    section: e,
                    event: s,
                    language: (0, C.sf)(k.TS.LANGUAGE),
                    promotionName: r,
                    nSaleDayIndex: 0,
                    ePreviewMode: I.S.EPreviewMode_Enabled,
                    activeTab: l,
                    appVisibilityTracker: null,
                  }),
                ),
              ),
            )
          : o.createElement(_.t, {
              string: (0, m.we)("#Loading"),
              position: "center",
            });
      }
      var x = a(57876),
        j = a(41735),
        O = a.n(j),
        R = a(68797),
        H = a(78327);
      const B = new (class {
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
                await O().get(
                  `${H.TS.COMMUNITY_BASE_URL}sale/ajaxgetcategoriesbytag`,
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
                "Unable to load tag category data: " + (0, R.H)(e).strErrorMsg,
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
                  const a = (0, C.sf)(e, -1);
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
                    type: v.EE.k_EStoreFilterClauseTypeAnd,
                    rgSubexpressions: [
                      {
                        type: v.EE.k_EStoreFilterClauseTypeOr,
                        rgSubexpressions: [
                          {
                            type: v.EE.k_EStoreFilterClauseTypeStoreTag,
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
      var U;
      function Y(e, t) {
        return "[" + t + "] " + e;
      }
      async function W(e) {
        const t = await B.AutoGenerateFacetsAsync();
        return (
          (function (e) {
            const t = B.GetTagNameForTagID();
            for (const a of e)
              for (const e of a.facetValues) {
                const a = e.nAtomicStoreTagID;
                let r = [t.get(a)];
                (r = r.map((e) => q(e))),
                  (e.type = v.GE.k_ESaleTagFilter),
                  (e.filter = { clauses: [{ type: "Must have", or_tags: r }] });
              }
          })(t),
          e.bForceFeatureTagForFullController &&
            (function (e) {
              e.forEach((e) => {
                e.facetValues.forEach((e) => {
                  e.type === v.GE.k_ESaleTagFilter &&
                    e.filter.clauses.forEach((e) => {
                      e.or_tags.forEach((t, a) => {
                        const r = (function (e) {
                            const t = /^\[(.+)\]/.exec(e);
                            return t ? t[1] : void 0;
                          })(t),
                          n = (function (e) {
                            return e.replace(/^\[(.+)\]/, "").trim();
                          })(t).toLocaleLowerCase();
                        r === U.Store &&
                          "controller" === n &&
                          (e.or_tags[a] = Y("Full Controller", U.Feature));
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
                  type: v.GE.k_ESaleTagFilter,
                  filter: {
                    clauses: [
                      { type: "Must have", or_tags: [Y("HDR", U.Feature)] },
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
                type: v.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [{ type: "Must have", or_tags: [Y(e, U.AppType)] }],
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
                type: v.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    { type: "Must have", or_tags: [Y(e.value, U.Feature)] },
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
              type: v.GE.k_ESaleTagFilter,
              filter: {
                clauses: [
                  { type: "Must have", or_tags: ["[Feature] Windows"] },
                ],
              },
              rgStoreTagFilter: null,
            }),
              t.facetValues.push({
                name: ["#Platform_Linux"],
                type: v.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    { type: "Must have", or_tags: ["[Feature] Linux"] },
                  ],
                },
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#Platform_Mac"],
                type: v.GE.k_ESaleTagFilter,
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
                name: ["#language_selection_" + (0, C.Lg)(e)],
                type: v.GE.k_ELanguage,
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
              type: v.GE.k_EContentDescriptor,
              contentDescriptor: 5,
              filter: null,
              rgStoreTagFilter: null,
            }),
              t.facetValues.push({
                name: ["#ContentDescriptor_FrequentViolenceOrGore"],
                type: v.GE.k_EContentDescriptor,
                contentDescriptor: 2,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#ContentDescriptor_NudityOrSexualContent"],
                type: v.GE.k_EContentDescriptor,
                contentDescriptor: 1,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#ContentDescriptor_GratuitousNudityOrSexualContent"],
                type: v.GE.k_EContentDescriptor,
                contentDescriptor: 4,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#ContentDescriptor_AdultOnlySexualContent"],
                type: v.GE.k_EContentDescriptor,
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
                type: v.GE.k_EPrice,
                filter: null,
                rgStoreTagFilter: null,
              },
              {
                name: ["#Sale_BrowserSortOption_PopularPurchasedDiscounted"],
                type: v.GE.k_ESaleTagFilter,
                filter: {
                  clauses: [
                    {
                      type: "Must have",
                      or_tags: [Y("Discounted", U.Feature)],
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
              type: v.GE.k_EUserPreference,
              userPreference: v.yX.k_EHideOwnedItems,
              filter: null,
              rgStoreTagFilter: null,
            }),
              t.facetValues.push({
                name: ["#UserPreference_HideWishlistedItems"],
                type: v.GE.k_EUserPreference,
                userPreference: v.yX.k_EHideWishlistedItems,
                filter: null,
                rgStoreTagFilter: null,
              }),
              t.facetValues.push({
                name: ["#UserPreference_HideIgnoredItems"],
                type: v.GE.k_EUserPreference,
                userPreference: v.yX.k_EHideIgnoredItems,
                bEnabledByDefault: !0,
                filter: null,
                rgStoreTagFilter: null,
              }),
              e.push(t);
          })(t),
          t
        );
      }
      function q(e) {
        return Y(e, U.Store);
      }
      !(function (e) {
        (e.Store = "Store"),
          (e.Feature = "Feature"),
          (e.OptIn = "Opt"),
          (e.Auto = "Auto"),
          (e.Custom = "Custom"),
          (e.AppType = "AppType");
      })(U || (U = {}));
      var X = a(32630),
        Q = a(32754);
      function Z(e) {
        const t = r.Z.Get(),
          { salePagename: a } = (0, s.g)(),
          n = (0, u.f1)(),
          { dtMidMonth: l, dtTestMonth: i } = (function (e) {
            const [t, a] = e.split("_");
            let r = parseInt(a, 10);
            let n = {
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
            11 == n ? ((o = 0), (s += 1)) : (o += 1);
            return {
              dtMidMonth: new Date(r, n, 15),
              dtTestMonth: new Date(s, o, 15),
            };
          })(a);
        return !l ||
          Math.floor(i.getTime() / 1e3) > n ||
          l.getFullYear() < ee ||
          (l.getFullYear() == ee && l.getMonth() < te)
          ? o.createElement(
              "div",
              null,
              (0, m.we)("#DateTimePicker_Fallback_Invalid_DateTime"),
            )
          : o.createElement(
              X.A,
              { method: "topnewreleases" },
              o.createElement(
                E.tH,
                null,
                o.createElement($, {
                  TopMonthlyReleasesStore: t,
                  nMonth: l.getMonth(),
                  nYear: l.getFullYear(),
                  promotionName: a,
                }),
              ),
            );
      }
      const K = { ...x.Xh, apply_user_filters: !0 };
      function $(e) {
        const {
            TopMonthlyReleasesStore: t,
            nYear: a,
            nMonth: n,
            promotionName: s,
          } = e,
          [l, u] = (0, o.useState)(null),
          [p, g] = (0, o.useState)(null),
          d = (0, r.f)(t, a, n),
          h = (0, o.useMemo)(
            () =>
              d
                ? [
                    ...(d.top_app_releases?.map((e) => e.appid) || []),
                    ...(d.top_dlc_releases?.map((e) => e.appid) || []),
                  ]
                : (g(null), []),
            [d],
          ),
          T = (0, c.zX)(h, K),
          S = (0, o.useMemo)(
            () =>
              d && 1 != T
                ? d.top_dlc_releases
                    ?.filter((e) => !i.A.Get().BIsAppMissing(e.appid))
                    .map((e) => e.appid)
                : [],
            [d, T],
          ),
          E = (0, o.useMemo)(
            () =>
              d && 1 != T
                ? d.top_app_releases
                    .filter((e) => !i.A.Get().BIsAppMissing(e.appid))
                    .map((e) => e.appid)
                : [],
            [T, d],
          );
        return (
          (0, o.useEffect)(() => {
            l || W({ bForceFeatureTagForFullController: !1 }).then(u);
          }, [l]),
          (0, o.useEffect)(() => {
            if (null == p && 1 != T) {
              const e = (function (e) {
                const t = A.Fm.Get(),
                  a = e
                    .filter((e) => {
                      if (!t.BIsGameOwned(e)) {
                        const a = i.A.Get().GetApp(e);
                        return (
                          a &&
                          a.BIsVisible() &&
                          t.BIsGameOwned(a.GetParentAppID())
                        );
                      }
                      return !1;
                    })
                    .map((e) => i.A.Get().GetApp(e).GetParentAppID())
                    .filter(Boolean);
                return Array.from(new Set(a));
              })(S);
              e?.length > 0
                ? i.A.Get()
                    .HintLoadStoreApps(e, x.Xh)
                    .then(() => g(e))
                : g([]);
            }
          }, [l, T, S, p]),
          d && 1 != T && l && null != p && h
            ? 0 == h.length
              ? o.createElement(
                  "div",
                  { className: y().ChartPage },
                  o.createElement(ae, { nMonth: n, nYear: a }),
                  o.createElement(
                    "div",
                    null,
                    (0, m.we)("#SteamCharts_NewMonth_NoRelease"),
                  ),
                )
              : o.createElement(
                  "div",
                  { className: y().ChartPage },
                  o.createElement(
                    f,
                    { rgAppIDs: E },
                    o.createElement(ae, { nMonth: n, nYear: a }),
                  ),
                  o.createElement(z, {
                    promotionName: s,
                    rgFilteredFullApps: E,
                    rgFilteredDLCsAppIDs: S,
                    facets: l,
                  }),
                )
            : o.createElement(
                "div",
                { className: y().ChartPage },
                o.createElement(ae, { nMonth: n, nYear: a }),
                o.createElement(_.t, {
                  string: (0, m.we)("#Loading"),
                  position: "center",
                }),
              )
        );
      }
      function J(e, t) {
        return (
          (0, m.we)(
            "#SteamCharts_Monthly_ForMonth",
            (0, m.we)("#Sale_Reservation_MonthNoun_" + (e + 1)),
          ) +
          ", " +
          t
        );
      }
      const ee = 2003,
        te = 8;
      function ae(e) {
        const { nMonth: t, nYear: a } = e,
          r = (0, u.f1)(),
          s = t > 0 ? a : a - 1,
          i = t > 0 ? t - 1 : 11,
          c = re(s, i),
          _ = a > ee || t > te,
          g = t < 11 ? a : a + 1,
          d = t < 11 ? t + 1 : 0,
          f = re(g, d),
          h = new Date(11 == d ? a + 1 : a, 11 == d ? 0 : d + 1, 15),
          y = Math.floor(h.getTime() / 1e3) < r;
        return o.createElement(
          o.Fragment,
          null,
          o.createElement(
            "div",
            { className: (0, p.A)(S().HeaderCtn, S().WithSubtitle) },
            o.createElement(
              "h1",
              null,
              (0, m.we)("#SteamCharts_Monthly_Title"),
            ),
          ),
          o.createElement(
            "div",
            { className: (0, p.A)(S().PageSubtitle) },
            (0, m.we)("#SteamCharts_Monthly_SubTitle"),
          ),
          o.createElement(
            "div",
            { className: S().ChartRangeCtn },
            o.createElement(
              Q.Gq,
              { toolTipContent: J(i, s) },
              o.createElement(
                "div",
                {
                  className: (0, p.A)({
                    [S().ChartNavCtn]: !0,
                    [S().Disabled]: !_,
                  }),
                },
                o.createElement(
                  l.N_,
                  { to: _ ? n.SteamChartsRoutes.TopNewReleasesNew(c) : void 0 },
                  o.createElement("div", { className: S().ChartNavPrev }, " "),
                ),
              ),
            ),
            o.createElement(
              Q.Gq,
              { toolTipContent: J(d, g) },
              o.createElement(
                "div",
                {
                  className: (0, p.A)({
                    [S().ChartNavCtn]: !0,
                    [S().Disabled]: !y,
                  }),
                },
                o.createElement(
                  l.N_,
                  { to: y ? n.SteamChartsRoutes.TopNewReleasesNew(f) : null },
                  o.createElement("div", { className: S().ChartNavNext }, " "),
                ),
              ),
            ),
            o.createElement("div", { className: S().ChartRangeText }, J(t, a)),
          ),
        );
      }
      function re(e, t) {
        if (t < 0 || t > 11)
          throw new Error("Invalid month index. Must be between 0 and 11.");
        return `${["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"][t]}_${e}`;
      }
    },
  },
]);

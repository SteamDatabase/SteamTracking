/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [1849],
  {
    9722: (e, a, t) => {
      t.r(a),
        t.d(a, { default: () => G, useFilteredYearlyTopReleases: () => U });
      var r = t(68561),
        s = t(98256),
        l = t(64559),
        n = t(89921),
        i = t.n(n),
        o = t(74812),
        p = t.n(o),
        _ = t(90626),
        c = t(92757),
        d = t(17083),
        m = t(57876),
        u = t(44165),
        h = t(91155),
        C = t(82097),
        b = t(55263),
        g = t(95034),
        T = t(52745),
        y = t(76222),
        S = t(22797),
        A = t(32754),
        E = t(52038),
        N = t(61859),
        f = t(44691),
        v = t(70610),
        w = t(64963),
        Y = t(22837),
        D = t(20194),
        F = t(89128),
        k = t(96859),
        I = t(56330),
        R = t(5719),
        L = t(30470),
        B = t(94218);
      function M(e, a, t) {
        const { data: r } = (0, D.I)({
          queryKey: ["useYearEventModel", e],
          queryFn: () => {
            try {
              return (function (e, a, t) {
                const r = (0, k.U)(F.wv, `bestofyear${e}`),
                  s = !0,
                  l = { ...(0, k.Sm)("tabs", ""), tabs: [] };
                return (
                  t.forEach((e, a) => {
                    l.tabs.push({
                      unique_id: a + 1,
                      default_label: e.strTabTitleToken,
                      localized_label: [],
                      capsules: [],
                    });
                  }),
                  (r.jsondata.sale_sections = [l]),
                  t.forEach((t, n) => {
                    const {
                        rgFilteredCombinedAppsAndDLC: i,
                        rgFilteredAppIDByTier: o,
                        rgFilteredDLCsAppIDs: p,
                      } = t,
                      _ = new Set(p),
                      c = [...p, ...i];
                    r.jsondata.sale_sections.push({
                      ...(0, k.Sm)("text_section", ""),
                      text_section_contents: [
                        (0, N.we)(t.strTabSubTitleToken, e, e + 1),
                      ],
                      show_on_tabs: [n + 1],
                      show_deck_compability_details: Boolean(t.bShowDeckCompat),
                      prefer_assets_without_overrides: s,
                    });
                    for (let e in o) {
                      const a = o[e];
                      r.jsondata.sale_sections.push({
                        ...(0, k.Sm)("items", "#SteamCharts_Yearly_Rank_" + e),
                        capsules: a.map((e) => ({
                          id: e,
                          type: _.has(e) ? "dlc" : "game",
                        })),
                        capsules_per_row_array:
                          "3" == e || "0" == e ? [4] : [3],
                        capsule_style_per_row_array:
                          "0" == e ? ["tall"] : ["grid"],
                        show_as_carousel: !1,
                        use_random_order: !0,
                        border_width: 1,
                        default_subtitle:
                          "#SteamCharts_Yearly_Rank_" + e + "_subtitle",
                        show_on_tabs: [l.tabs[n].unique_id],
                        sale_section_classname: (0, B.wH)(Number.parseInt(e)),
                        prefer_assets_without_overrides: s,
                      });
                    }
                    (0, B.wg)(r, c, p, _, s, l.tabs[n].unique_id),
                      (0, B.OI)(r, i, o, _, s, l.tabs[n].unique_id),
                      (0, B.rM)(r, i, a, _, s, l.tabs[n].unique_id);
                  }),
                  r.jsondata.sale_sections.push({
                    ...(0, k.Sm)(
                      "social_share",
                      "#EventDisplay_Share_WithFriendsHeader",
                    ),
                    social_share: (0, k.r3)(),
                  }),
                  r
                );
              })(e, a, t);
            } catch (a) {
              return (
                console.error(`Yearly new release: ${e} failed: `, a), null
              );
            }
          },
        });
        return r;
      }
      function P(e) {
        const { rgTabsData: a, nYear: t, facets: r } = e,
          s = M(t, r, a),
          l = (0, Y.sf)(L.TS.LANGUAGE),
          n = (0, k.oR)();
        return !s || n
          ? null === s
            ? _.createElement(
                "div",
                { className: I.ErrorStylesWithIcon },
                (0, N.we)("#Error_ErrorCommunicatingWithNetwork"),
              )
            : _.createElement(S.t, {
                string: (0, N.we)("#Loading"),
                position: "center",
              })
          : _.createElement(R._, {
              eventModel: s,
              language: l,
              bIsPreview: !1,
              bDynamicallyCreatedSale: !0,
            });
      }
      function G(e) {
        const { salePageName: a, TopYearlyReleasesStore: t } = e,
          s = (0, u.f1)(),
          l = Number.parseInt(a);
        return (0, r.I)(l, s, !0)
          ? _.createElement(W, { nYear: l, TopYearlyReleasesStore: t })
          : _.createElement(
              "div",
              null,
              (0, N.we)("#SteamCharts_Yearly_Unavailable"),
            );
      }
      const q = {
        ...m.Xh,
        apply_user_filters: !0,
        include_assets_without_overrides: !0,
      };
      function H(e, a, t, r) {
        const s = r.filter((a) => a.type == e),
          l = [],
          n = [];
        return {
          strTabTitleToken: a,
          strTabSubTitleToken: t,
          rgFilteredCombinedAppsAndDLC: s
            .filter((e) => !C.A.Get().BIsAppMissing(e.appid))
            .map((e) => {
              let a = e.app_release_rank;
              return (
                4 == a && (a = 0),
                l[a] || (l[a] = []),
                l[a].push(e.appid),
                4 == C.A.Get().GetApp(e.appid)?.GetAppType() && n.push(e.appid),
                e.appid
              );
            }),
          rgFilteredAppIDByTier: l,
          rgFilteredDLCsAppIDs: n,
        };
      }
      function x(e, a) {
        const t = e + 1,
          r = new Date(Date.UTC(t, 0, 15, 1, 0, 0)),
          s = new Intl.DateTimeFormat("en-US", {
            timeZone: "America/Los_Angeles",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: !1,
          }).formatToParts(r),
          l = (e) => Number(s.find((a) => a.type === e).value),
          n = Date.UTC(
            l("year"),
            l("month") - 1,
            l("day"),
            l("hour"),
            l("minute"),
            l("second"),
          );
        return Math.floor(n / 1e3);
      }
      function U(e, a, t) {
        const r = (0, u.f1)(),
          l = r < x(a),
          n = r < x(a),
          i = (0, s.Y)(e, a),
          o = (0, _.useMemo)(
            () =>
              i
                ? Array.from(
                    new Set([
                      ...(i.top_dlc_releases?.map((e) => e.appid) || []),
                      ...(i.top_combined_app_and_dlc_releases?.map(
                        (e) => e.appid,
                      ) || []),
                      ...(i.top_app_list?.map((e) => e.appid) || []),
                    ]),
                  )
                : (t && t(null), []),
            [i, t],
          ),
          p = (0, b.zX)(o, q),
          c = (0, _.useMemo)(() => {
            if (!i || 1 == p) return [];
            const e = [],
              a = (i?.top_combined_app_and_dlc_releases || [])
                .filter((e) => !C.A.Get().BIsAppMissing(e.appid))
                .map((a) => {
                  let t = a.app_release_rank;
                  return (
                    4 == t && (t = 0),
                    e[t] || (e[t] = []),
                    e[t].push(a.appid),
                    a.appid
                  );
                });
            let t = [
                {
                  strTabTitleToken: "#SteamCharts_Yearly_Tab_NewReleases",
                  strTabSubTitleToken: n
                    ? "#SteamCharts_Yearly_Tab_NewReleases_desc_pre"
                    : "#SteamCharts_Yearly_Tab_NewReleases_desc",
                  rgFilteredDLCsAppIDs:
                    i.top_dlc_releases
                      ?.filter((e) => !C.A.Get().BIsAppMissing(e.appid))
                      .map((e) => e.appid) || [],
                  rgFilteredCombinedAppsAndDLC: a,
                  rgFilteredAppIDByTier: e,
                },
              ],
              r = H(
                1,
                "#SteamCharts_Yearly_Tab_TopSellers",
                l
                  ? "#SteamCharts_Yearly_Tab_TopSellers_desc_pre"
                  : "#SteamCharts_Yearly_Tab_TopSellers_desc",
                i.top_app_list,
              );
            return (
              r.rgFilteredCombinedAppsAndDLC?.length > 0 && t.push(r),
              (r = H(
                2,
                "#SteamCharts_Yearly_Tab_MostPlayed",
                "#SteamCharts_Yearly_Tab_MostPlayed_desc",
                i.top_app_list,
              )),
              r.rgFilteredCombinedAppsAndDLC?.length > 0 && t.push(r),
              (r = H(
                3,
                "#SteamCharts_Yearly_Tab_SteamDeck",
                "#SteamCharts_Yearly_Tab_SteamDeck_desc",
                i.top_app_list,
              )),
              r.rgFilteredCombinedAppsAndDLC?.length > 0 &&
                ((r.bShowDeckCompat = !0), t.push(r)),
              (r = H(
                4,
                "#SteamCharts_Yearly_Tab_Controller",
                "#SteamCharts_Yearly_Tab_Controller_desc",
                i.top_app_list,
              )),
              r.rgFilteredCombinedAppsAndDLC?.length > 0 && t.push(r),
              (r = H(
                5,
                "#SteamCharts_Yearly_Tab_VR",
                "#SteamCharts_Yearly_Tab_VR_desc",
                i.top_app_list,
              )),
              r.rgFilteredCombinedAppsAndDLC?.length > 0 && t.push(r),
              t
            );
          }, [i, p, l, n]);
        return {
          rgAppIDs: o,
          rgYearlyReleases: i,
          rgTabsData: c,
          loadState: p,
        };
      }
      function W(e) {
        const { nYear: a, TopYearlyReleasesStore: t } = e,
          [r, s] = (0, _.useState)(null),
          [l, n] = (0, _.useState)(null),
          {
            rgAppIDs: o,
            rgYearlyReleases: p,
            rgTabsData: c,
            loadState: d,
          } = U(t, a);
        return (
          (0, _.useEffect)(() => {
            l || (0, h.$R)({ bForceFeatureTagForFullController: !1 }).then(n);
          }, [l]),
          (0, w.f)(r, s, c?.[0]?.rgFilteredDLCsAppIDs, d),
          p && 1 != d && l && null != r && o
            ? 0 == o.length
              ? _.createElement(
                  "div",
                  { className: i().ChartPage },
                  _.createElement(O, { nYear: a }),
                  _.createElement(
                    "div",
                    { className: i().NoticeBox },
                    (0, N.we)(
                      p.bSQLError
                        ? "#Error_ErrorCommunicatingWithNetwork"
                        : "#SteamCharts_NewMonth_NoRelease",
                    ),
                  ),
                )
              : _.createElement(
                  "div",
                  { className: i().ChartPage },
                  _.createElement(
                    v.Z,
                    {
                      rgAppIDs: c[0].rgFilteredCombinedAppsAndDLC,
                      bTallCapsule: !0,
                      bBlurCapsules: !1,
                    },
                    _.createElement(O, { nYear: a }),
                  ),
                  _.createElement(P, { facets: l, nYear: a, rgTabsData: c }),
                )
            : _.createElement(
                "div",
                { className: i().ChartPage },
                _.createElement(O, { nYear: a }),
                _.createElement(S.t, {
                  string: (0, N.we)("#Loading"),
                  position: "center",
                }),
              )
        );
      }
      function O(e) {
        const { nYear: a } = e,
          t = (0, c.W6)(),
          s = (0, u.f1)(),
          [n] = (0, g.QD)("tab", 1),
          i = a + 1,
          o = (0, r.I)(i, s, !0),
          m = a - 1,
          h = (0, r.I)(m, s, !0),
          C = (0, T.yk)() || (0, y.tx)(window),
          b = (0, _.useCallback)(
            (e) => {
              C.active_modal ||
                (e && o
                  ? t.push(l.SteamChartsRoutes.BestOfYear("" + i))
                  : !e && h && t.push(l.SteamChartsRoutes.BestOfYear("" + m)));
            },
            [C.active_modal, o, h, t, i, m],
          );
        (0, f.E)("ArrowLeft", () => b(!1), !0, !0),
          (0, f.E)("Left", () => b(!1), !0, !0),
          (0, f.E)("ArrowRight", () => b(!0), !0, !0),
          (0, f.E)("Right", () => b(!0), !0, !0);
        const S = 1 != n ? `?tab=${n}` : "";
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            { className: p().YearlyHeaderCtn },
            _.createElement(
              "svg",
              { viewBox: "0 0 100 100", className: p().Triangle },
              _.createElement("polygon", { points: "50,35 100,100 0,100" }),
            ),
            _.createElement(
              "div",
              { className: (0, E.A)(p().HeaderCtn, p().WithSubtitle) },
              _.createElement(
                "h1",
                null,
                (0, N.we)("#SteamCharts_Yearly_Title", a),
              ),
            ),
            _.createElement(
              "div",
              { className: (0, E.A)(p().PageSubtitle) },
              (0, N.we)("#SteamCharts_Yearly_SubTitle", 100),
              _.createElement("br", null),
            ),
          ),
          _.createElement(
            "div",
            { className: (0, E.A)(p().ChartRangeCtn, p().AnnualChart) },
            _.createElement(
              A.Gq,
              { toolTipContent: (0, N.we)("#SteamCharts_Yearly_Title", m) },
              _.createElement(
                "div",
                {
                  className: (0, E.A)({
                    [p().ChartNavCtn]: !0,
                    [p().Disabled]: !h,
                  }),
                },
                h
                  ? _.createElement(
                      d.N_,
                      {
                        to: l.SteamChartsRoutes.BestOfYear("" + m) + S,
                        className: p().ChartNavHitArea,
                      },
                      _.createElement(
                        "div",
                        { className: p().ChartNavPrev },
                        " ",
                      ),
                    )
                  : _.createElement(
                      "div",
                      { className: p().ChartNavHitArea },
                      _.createElement(
                        "div",
                        { className: p().ChartNavPrev },
                        " ",
                      ),
                    ),
              ),
            ),
            _.createElement(
              A.Gq,
              { toolTipContent: (0, N.we)("#SteamCharts_Yearly_Title", i) },
              _.createElement(
                "div",
                {
                  className: (0, E.A)({
                    [p().ChartNavCtn]: !0,
                    [p().Disabled]: !o,
                  }),
                },
                o
                  ? _.createElement(
                      d.N_,
                      {
                        to: l.SteamChartsRoutes.BestOfYear("" + i) + S,
                        className: p().ChartNavHitArea,
                      },
                      _.createElement(
                        "div",
                        { className: p().ChartNavNext },
                        " ",
                      ),
                    )
                  : _.createElement(
                      "div",
                      { className: p().ChartNavHitArea },
                      _.createElement(
                        "div",
                        { className: p().ChartNavNext },
                        " ",
                      ),
                    ),
              ),
            ),
          ),
        );
      }
    },
  },
]);

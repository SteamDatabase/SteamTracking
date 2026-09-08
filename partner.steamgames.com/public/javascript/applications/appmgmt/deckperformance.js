/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [906],
  {
    7878: (e) => {
      e.exports = {
        PerformanceContainer: "_3SS4MYcpRbsOo9iGYIYFTr",
        FeedbackContainer: "_3cVL8Lt1OMroMTVCMlr_1o",
        FrameRateContainer: "_3iH3NPfTuZEgKkeMZSIHMN",
        DescriptionContainer: "_1XOEGQOlJQVwkWxEVhS-U2",
        DescriptionSection: "_1C4uPBMaD8hewNntz_uA3F",
        PerformanceSectionTitle: "_3RgwExAFwWbutDA-nZwOCK",
        DescriptionDetails: "nL0dzsDcGMBJXrt6KYm5N",
        TabContainer: "F0acTKwTPFIdDYfsMFzbD",
        FrameRateValue: "_2B6juattDAX-hilEh3Rt_B",
        DescriptionEmphasis: "ina27Iss3Cu6uQV6muq16",
        FeedbackAgree: "_1hAFmIlqGPHT1w7at0haFP",
        Percentage: "_37Q42KiUq40QU4jHr7ABSq",
        Beta: "_2tlJ__d3Y6cO8vwDClUB_C",
        FeedbackSummaryTable: "IjK2dzEOTlknwfRiGZs_-",
        FeedbackPerformance: "_1w05HAsWlfzr6UkMnXzd7F",
        FeedbackLegibility: "_2X08Zf_f23vHyJAxwwf-TO",
        FeedbackStability: "Mqd_gJMUlMmJ4UMXHVew_",
        FeedbackInput: "O_CUn7Mt_mLUBjBALiV7I",
        FeedbackOther: "_2qfV7V9Hcm-IbWZ2jMulQX",
        FeedbackTableHeader: "_2RNTmni7sGrUo6vvhW9r9l",
        FeedbackChartContainer: "_2h_JKiy1-oqTL5oobp5fGl",
        FrameRateTabs: "_2WkkV2Wg0u_3QDy9g6Q4yY",
        TabActive: "_78FuQRakVNuz-fNPKM9m_",
        TabInactive: "_2Hr7ssx_b-MrYZee0bQcdh",
        HistogramContainer: "_3WBxQEY65qUzlWxin28Vtk",
        Chart: "_1MTZOaNYA30CHWXAvcI8gL",
        ChartBar: "_1Xg8jwpB60j3CS1RAvy12d",
        ChartBarLabel: "_2nV2VeXYF3zU1RRW-66tLK",
        Labels: "_27ILhiLpeZOcytOo5xl-ul",
        LabelContainer: "_1VQCzz-bKmYHtp8Tm5KQzP",
        Tick: "_2qB7E_nIxNYaX35EBnRISc",
        TickHidden: "_1Ep0gM0lRnWp7uhUCmssnW",
        Label: "_317oB8prBfarBhyivc4bkB",
        TopLabel: "_12RkB0ye7r5ZCa4og8tbWC",
        ValveOnly: "GBy50vuPi8ifA3M3YvGUB",
      };
    },
    67406: (e, a, t) => {
      "use strict";
      t.d(a, { E: () => l });
      var r = t(98403),
        i = t(20283),
        s = t(90150),
        n = t(73077),
        c = t(12260),
        l = (0, r.gu)({
          chartName: "BarChart",
          GraphicalChild: i.y,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            { axisType: "xAxis", AxisComp: s.W },
            { axisType: "yAxis", AxisComp: n.h },
          ],
          formatAxisMap: c.pr,
        });
    },
    11577: (e, a, t) => {
      "use strict";
      t.d(a, { T: () => m, m: () => o });
      var r = t(90626),
        i = t(96059),
        s = t(16021),
        n = t(81393),
        c = t(78327),
        l = t(63664);
      function o(e) {
        const [a, t] = (0, r.useState)(!1),
          [i] = (0, r.useState)(() => d()),
          n = (0, r.useMemo)(
            () => ({
              country: c.TS.COUNTRY,
              language: c.TS.LANGUAGE,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, r.useEffect)(
            () => (
              t(!0),
              (function (e) {
                return s.A.Initialize(
                  e.GetServiceTransport(),
                  c.iA.is_partner_member,
                );
              })(i)
            ),
            [i],
          ),
          a
            ? (0, r.createElement)(l.V3, {
                context: n,
                serviceTransportOverride: i.GetServiceTransport(),
                children: e.children,
              })
            : null
        );
      }
      function m(e) {
        const [a] = (0, r.useState)(() => d()),
          t = (0, r.useMemo)(
            () => ({
              country: c.TS.COUNTRY,
              language: c.TS.LANGUAGE,
              bUsePartnerAPI: !0,
              bIncludeUnpublished: e.bIncludeUnpublished,
            }),
            [e.bIncludeUnpublished],
          );
        return (0, r.createElement)(l.V3, {
          context: t,
          serviceTransportOverride: a.GetServiceTransport(),
          children: e.children,
        });
      }
      function d() {
        const e = (0, c.Tc)("partnerbrowse_webapi_token", "application_config");
        (0, n.wT)(Boolean(e), "require partnerbrowse_webapi_token");
        return new i.D(c.TS.WEBAPI_BASE_URL, e);
      }
    },
    58776: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, { HardwarePerformance: () => F, default: () => T });
      var r = t(7850),
        i = t(90626),
        s = t(7878),
        n = t(32671),
        c = t(67406),
        l = t(90150),
        o = t(73077),
        m = t(30230),
        d = t(20283),
        f = t(75620),
        h = t(61141),
        _ = t(58661),
        u = t(90865),
        p = t(6083),
        x = t(39832),
        b = t(11577),
        g = t(52038),
        v = t(26408),
        j = t(78686),
        k = t(84811),
        y = t(76217),
        N = t(45699);
      const S = 4;
      function T(e) {
        const { dataprops: a, appId: t } = e;
        return a?.framerate || a?.feedback
          ? (0, r.jsx)(b.m, {
              children: (0, r.jsx)(k.tH, {
                children: (0, r.jsx)(F, { appId: t, dataprops: a }),
              }),
            })
          : (0, r.jsx)(r.Fragment, {});
      }
      function F(e) {
        const { dataprops: a, appName: t, histogramData: i } = e;
        return a?.framerate || a?.feedback
          ? (0, r.jsxs)("div", {
              className: s.PerformanceContainer,
              children: [
                Boolean(a?.framerate) &&
                  (0, r.jsx)(G, {
                    appId: Number(e.appId),
                    appName: t,
                    histogramData: i,
                    frameRateData: a.framerate,
                  }),
                Boolean(a?.feedback) &&
                  (0, r.jsx)(P, {
                    appId: Number(e.appId),
                    feedbackData: a.feedback,
                  }),
              ],
            })
          : (0, r.jsx)(r.Fragment, {});
      }
      function P(e) {
        const { feedbackData: a } = e;
        if (!a || !a.daily?.length)
          return (0, r.jsx)("div", {
            className: s.FrameRateContainer,
            children: (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: s.PerformanceSectionTitle,
                  children: j.Z.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, r.jsx)("div", {
                  children: j.Z.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        const t = [
            {
              fill: "#ffc82c",
              key: "disagree_performance",
              name: j.Z.Localize("#GamePerformanceStats_Performance"),
            },
            {
              fill: "#59bf40",
              key: "disagree_legibility",
              name: j.Z.Localize("#GamePerformanceStats_Legibility"),
            },
            {
              fill: "#1a9fff",
              key: "disagree_stability",
              name: j.Z.Localize("#GamePerformanceStats_Stability"),
            },
            {
              fill: "#ad66bb",
              key: "disagree_input",
              name: j.Z.Localize("#GamePerformanceStats_Input"),
            },
            {
              fill: "#dcdedf",
              key: "disagree_other",
              name: j.Z.Localize("#GamePerformanceStats_Other"),
            },
          ],
          i = Number(a.total?.agree) + Number(a.total?.disagree),
          h = (Number(a.total?.agree) / i) * 100,
          _ = [...a.daily];
        return (0, r.jsxs)("div", {
          className: s.FeedbackContainer,
          children: [
            (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: s.PerformanceSectionTitle,
                  children: j.Z.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, r.jsx)(D, { nAgreePercent: h }),
                (0, r.jsx)("div", {
                  children: j.Z.Localize(
                    "#GamePerformanceStats_NumberOfReports",
                    (0, p.D)(i),
                    a.daily.length,
                  ),
                }),
                (0, r.jsx)("div", {
                  className: s.DescriptionSection,
                  children: j.Z.LocalizeReact(
                    "#GamePerformanceStats_WhyDisagree",
                    (0, r.jsx)("span", {
                      children: j.Z.Localize(
                        "#GamePerformanceStats_DidNotAgree",
                      ),
                    }),
                    (0, r.jsx)("span", {
                      children: j.Z.Localize(
                        "#SteamDeckVerified_Category_Verified",
                      ),
                    }),
                  ),
                }),
                (0, r.jsx)(R, { feedback: a }),
              ],
            }),
            (0, r.jsx)(n.u, {
              width: "100%",
              minWidth: 600,
              minHeight: 300,
              className: s.FeedbackChartContainer,
              children: (0, r.jsxs)(c.E, {
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                data: _.sort((e, a) => e.date - a.date),
                children: [
                  (0, r.jsx)(l.W, {
                    dataKey: "date",
                    tickFormatter: Z,
                    stroke: "white",
                  }),
                  (0, r.jsx)(o.h, {
                    stroke: "white",
                    domain: [() => 0, (e) => Math.max(e, 20)],
                  }),
                  (0, r.jsx)(m.m, { labelFormatter: Z }),
                  t.map((e) =>
                    (0, r.jsx)(
                      d.y,
                      {
                        shape: (0, r.jsx)(A, { fill: e.fill }),
                        fill: e.fill,
                        dataKey: e.key,
                        stackId: "day",
                        name: e.name,
                      },
                      e.key,
                    ),
                  ),
                  (0, r.jsx)(f.s, {}),
                ],
              }),
            }),
          ],
        });
      }
      const L = new Map([
          [3, "LCD"],
          [S, "OLED"],
        ]),
        C = new Array(
          { name: L.get(S), key: L.get(S), contents: null },
          { name: L.get(3), key: L.get(3), contents: null },
        );
      function G(e) {
        const { appName: a, frameRateData: t, histogramData: c } = e,
          [d, f] = i.useState(void 0),
          p = i.useMemo(() => {
            let e = [];
            return (
              t?.frame_rate_clusters &&
                t?.frame_rate_clusters.length > 0 &&
                t.frame_rate_clusters.forEach((a) => {
                  if (!a.clusterid || !L.get(a.clusterid)) return;
                  let t = {
                    tab: L.get(a.clusterid),
                    clusterid: a.clusterid ?? 0,
                    mean_frame_rate: a.mean_frame_rate,
                    report_days: a.report_days ?? 0,
                    data: [],
                  };
                  a.daily_frame_rates?.map((e) => {
                    const a = parseInt("" + e.mean_frame_rate),
                      r = parseInt("" + e.mean_frame_rate_stddev);
                    return t.data.push({
                      date: e.date,
                      mean: a,
                      range: [a + r, a - r],
                    });
                  }),
                    t.data.sort((e, a) => e.date - a.date),
                    e.push(t);
                }),
              e
            );
          }, [t]),
          x = i.useMemo(() => {
            const e = L.get(S);
            return p.some((a) => a.tab == e && a.data.length > 0)
              ? e
              : (p.find((e) => e.data.length > 0)?.tab ?? e);
          }, [p]);
        if (!t?.frame_rate_clusters?.length)
          return (0, r.jsx)("div", {
            className: s.FrameRateContainer,
            children: (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsx)("div", {
                  className: s.PerformanceSectionTitle,
                  children: j.Z.Localize(
                    "#GamePerformanceStats_AverageFrameRate_Title",
                  ),
                }),
                (0, r.jsx)("div", {
                  children: j.Z.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        let b,
          v = (0, r.jsx)("div", {
            children: j.Z.Localize("#GamePerformanceStats_NoData"),
          });
        const k = d ?? x,
          N = [...L.entries()].find(([e, a]) => a === k)[0],
          T = p.find((e) => e.clusterid == N);
        if (T) {
          const e = Number(T.mean_frame_rate ?? 0).toFixed(0),
            t = (0, r.jsx)("span", {
              className: s.FrameRateValue,
              children: j.Z.Localize("#GamePerformanceStats_FPS", e),
            });
          (b = a
            ? j.Z.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate_Device",
                a,
                k,
                t,
              )
            : j.Z.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate_ThisGame_Device",
                k,
                t,
              )),
            (v = (0, r.jsx)(n.u, {
              width: "100%",
              minWidth: 600,
              height: 300,
              children: (0, r.jsxs)(h.X, {
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                data: T.data,
                children: [
                  (0, r.jsx)(_.d, { strokeDasharray: "3 3", color: "red" }),
                  (0, r.jsx)(l.W, {
                    dataKey: "date",
                    tickFormatter: Z,
                    stroke: "white",
                  }),
                  (0, r.jsx)(o.h, {
                    stroke: "white",
                    domain: [() => 0, (e) => Math.max(e, 100)],
                  }),
                  (0, r.jsx)(m.m, { labelFormatter: Z }),
                  (0, r.jsx)(u.N, {
                    type: "natural",
                    dataKey: "mean",
                    name: "average",
                    stroke: "#4477EE",
                  }),
                  !1,
                ],
              }),
            }));
        }
        let F,
          P = !1,
          G = (0, r.jsx)("div", {
            children: j.Z.Localize("#GamePerformanceStats_NoData"),
          });
        const D = c ? c.find((e) => e.clusterID == N) : void 0;
        if (D) {
          const e = Math.max(...D.rgResults);
          if (((P = e > 0), P)) {
            let t = 0,
              n = 1;
            const c = 200;
            (n = (0.9 * c) / e), (t = D.rgResults.indexOf(e));
            let l = 0;
            D.rgResults.forEach((e, a) => {
              Math.floor(100 * e) > 0 && (l = a);
            });
            const o = D.rgResults.slice(0, l + 1);
            (F = a
              ? j.Z.LocalizeReact(
                  "#GamePerformanceStats_FrameRateHistogram_Device",
                  a,
                  k,
                )
              : j.Z.LocalizeReact(
                  "#GamePerformanceStats_FrameRateHistogram_ThisGame_Device",
                  k,
                )),
              (G = (0, r.jsxs)(i.Fragment, {
                children: [
                  (0, r.jsx)(y.Z, {
                    className: s.Chart,
                    children: o.map((e, a) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: s.ChartBar,
                          style: { height: e * n, marginTop: c - e * n },
                          children: (0, r.jsx)("div", {
                            className: s.ChartBarLabel,
                            children:
                              t == a ? `${(100 * e).toFixed(1)}%` : null,
                          }),
                        },
                        `bar_${a}`,
                      ),
                    ),
                  }),
                  (0, r.jsx)(y.Z, {
                    className: s.Labels,
                    children: o.map((e, a) => {
                      const t = 15 + 5 * a,
                        i = t % 10 == 0;
                      return (0, r.jsxs)(
                        "div",
                        {
                          className: s.LabelContainer,
                          children: [
                            (0, r.jsx)("div", {
                              className: (0, g.A)(s.Tick, !i && s.TickHidden),
                              children: "",
                            }),
                            (0, r.jsx)(
                              "div",
                              { className: s.Label, children: i ? t : "" },
                              `label_${a}`,
                            ),
                          ],
                        },
                        a,
                      );
                    }),
                  }),
                ],
              }));
          }
        }
        return (0, r.jsxs)("div", {
          className: s.FrameRateContainer,
          children: [
            (0, r.jsxs)("div", {
              className: s.DescriptionContainer,
              children: [
                (0, r.jsxs)("div", {
                  className: s.PerformanceSectionTitle,
                  children: [
                    j.Z.Localize(
                      "#GamePerformanceStats_AverageFrameRate_Title",
                    ),
                    (0, r.jsx)("span", {
                      className: s.Beta,
                      children: j.Z.Localize("#NewToolTitleSuffix_Beta"),
                    }),
                  ],
                }),
                (0, r.jsx)("div", { children: b }),
                Boolean(T?.report_days) &&
                  (0, r.jsx)("div", {
                    className: s.DescriptionSection,
                    children: j.Z.Localize(
                      "#GamePerformanceStats_FrameRateDataBasedOn",
                      T?.report_days ?? 0,
                    ),
                  }),
                (0, r.jsx)("div", {
                  className: s.DescriptionSection,
                  children: j.Z.Localize(
                    "#GamePerformanceStats_FrameRateMoreInfo",
                  ),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: s.TabContainer,
              children: [
                (0, r.jsx)(y.Z, {
                  className: s.FrameRateTabs,
                  children: C.map((e) =>
                    (0, r.jsx)(
                      z,
                      {
                        active: e.key === k,
                        locToken: e.name,
                        onClick: () => f(e.key),
                      },
                      e.key,
                    ),
                  ),
                }),
                v,
              ],
            }),
            P &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className: s.DescriptionContainer,
                    children: [
                      (0, r.jsxs)("div", {
                        className: s.PerformanceSectionTitle,
                        children: [
                          j.Z.Localize(
                            "#GamePerformanceStats_FrameRateHistogram_Title",
                          ),
                          " ",
                          (0, r.jsx)("span", {
                            className: s.ValveOnly,
                            children: "(VO)",
                          }),
                          (0, r.jsx)("span", {
                            className: s.Beta,
                            children: j.Z.Localize("#NewToolTitleSuffix_Beta"),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", { children: F }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: s.HistogramContainer,
                    children: G,
                  }),
                ],
              }),
          ],
        });
      }
      function z(e) {
        return (0, r.jsx)(N.Ii, {
          className: e.active ? s.TabActive : s.TabInactive,
          onClick: e.onClick,
          children: e.locToken,
        });
      }
      function Z(e) {
        return (0, x._l)(e);
      }
      function D(e) {
        const { nAgreePercent: a } = e;
        return (0, r.jsxs)("div", {
          className: s.FeedbackAgree,
          children: [
            j.Z.LocalizeReact(
              "#GamePerformanceStats_Feedback_Agree",
              (0, r.jsx)("span", {
                className: (0, g.A)(s.Percentage, s.DescriptionEmphasis),
                children: j.Z.LocalizeReact(
                  "#GamePerformanceStats_Feedback_AgreePercentage",
                  a.toFixed(0),
                ),
              }),
              (0, r.jsx)("span", {
                children: j.Z.Localize("#SteamDeckVerified_Category_Verified"),
              }),
            ),
            (0, r.jsx)(v.o, {
              tooltip: (0, r.jsx)("div", {
                children: j.Z.Localize(
                  "#GamePerformanceStats_Feedback_PercentageTooltip",
                ),
              }),
            }),
          ],
        });
      }
      function R(e) {
        const { feedback: a } = e;
        let t = new Array(
          {
            display: j.Z.Localize("#GamePerformanceStats_Input"),
            value: a.total.disagree_input,
            class: s.FeedbackInput,
          },
          {
            display: j.Z.Localize("#GamePerformanceStats_Legibility"),
            value: a.total.disagree_legibility,
            class: s.FeedbackLegibility,
          },
          {
            display: j.Z.Localize("#GamePerformanceStats_Performance"),
            value: a.total.disagree_performance,
            class: s.FeedbackPerformance,
          },
          {
            display: j.Z.Localize("#GamePerformanceStats_Stability"),
            value: a.total.disagree_stability,
            class: s.FeedbackStability,
          },
          {
            display: j.Z.Localize("#GamePerformanceStats_Other"),
            value: a.total.disagree_other,
            class: s.FeedbackOther,
          },
        );
        return (
          t.sort((e, a) =>
            e.class == s.FeedbackOther ? 1 : a.value - e.value,
          ),
          (0, r.jsxs)("div", {
            className: s.FeedbackSummaryTable,
            children: [
              (0, r.jsx)("div", {
                className: s.FeedbackTableHeader,
                children: j.Z.Localize("#GamePerformance_Reason"),
              }),
              (0, r.jsx)("div", {
                className: s.FeedbackTableHeader,
                children: j.Z.Localize("#GamePerformance_NumResponses"),
              }),
              t.map((e, a) =>
                (0, r.jsxs)(
                  i.Fragment,
                  {
                    children: [
                      (0, r.jsx)("div", {
                        className: e.class,
                        children: e.display,
                      }),
                      (0, r.jsx)("div", { children: e.value }),
                    ],
                  },
                  "reason_" + a,
                ),
              ),
            ],
          })
        );
      }
      const A = (e) => {
        const { fill: a, x: t, y: i, width: s, height: n } = e;
        return (0, r.jsx)("rect", { x: t, y: i, width: s, height: n, fill: a });
      };
    },
  },
]);

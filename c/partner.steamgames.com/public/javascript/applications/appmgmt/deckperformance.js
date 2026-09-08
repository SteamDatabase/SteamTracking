(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [906],
  {
    chunkid: (module) => {
      module.exports = {
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (0, _._)({
          chartName: "BarChart",
          GraphicalChild: _._,
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: ["axis", "item"],
          axisComponents: [
            {
              axisType: "xAxis",
              AxisComp: _._,
            },
            {
              axisType: "yAxis",
              AxisComp: _._,
            },
          ],
          formatAxisMap: _._,
        });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const [_, _] = (0, _.useState)(!1),
          [_] = (0, _.useState)(() => _()),
          _ = (0, _.useMemo)(
            () => ({
              country: _._.COUNTRY,
              language: _._.LANGUAGE,
              bUsePartnerAPI: !0,
            }),
            [],
          );
        return (
          (0, _.useEffect)(
            () => (
              __webpack_require__(!0),
              (function (_) {
                return _._.Initialize(
                  _.GetServiceTransport(),
                  _._.is_partner_member,
                );
              })(_)
            ),
            [_],
          ),
          _
            ? (0, _.createElement)(_._, {
                context: _,
                serviceTransportOverride: _.GetServiceTransport(),
                children: _.children,
              })
            : null
        );
      }
      function _(_) {
        const [_] = (0, _.useState)(() => _()),
          _ = (0, _.useMemo)(
            () => ({
              country: _._.COUNTRY,
              language: _._.LANGUAGE,
              bUsePartnerAPI: !0,
              bIncludeUnpublished: _.bIncludeUnpublished,
            }),
            [_.bIncludeUnpublished],
          );
        return (0, _.createElement)(_._, {
          context: _,
          serviceTransportOverride: _.GetServiceTransport(),
          children: _.children,
        });
      }
      function _() {
        const _ = (0, _._)("partnerbrowse_webapi_token", "application_config");
        (0, _._)(Boolean(_), "require partnerbrowse_webapi_token");
        return new _._(_._.WEBAPI_BASE_URL, _);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          HardwarePerformance: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 4;
      function _(_) {
        const { dataprops: _, appId: _ } = _;
        return _?.framerate || _?.feedback
          ? (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  appId: _,
                  dataprops: _,
                }),
              }),
            })
          : (0, _.jsx)(_.Fragment, {});
      }
      function _(_) {
        const { dataprops: _, appName: _, histogramData: _ } = _;
        return _?.framerate || _?.feedback
          ? (0, _.jsxs)("div", {
              className: _.PerformanceContainer,
              children: [
                Boolean(_?.framerate) &&
                  (0, _.jsx)(_, {
                    appId: Number(_.appId),
                    appName: _,
                    histogramData: _,
                    frameRateData: _.framerate,
                  }),
                Boolean(_?.feedback) &&
                  (0, _.jsx)(_, {
                    appId: Number(_.appId),
                    feedbackData: _.feedback,
                  }),
              ],
            })
          : (0, _.jsx)(_.Fragment, {});
      }
      function _(_) {
        const { feedbackData: _ } = _;
        if (!_ || !_.daily?.length)
          return (0, _.jsx)("div", {
            className: _.FrameRateContainer,
            children: (0, _.jsxs)("div", {
              className: _.DescriptionContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _.PerformanceSectionTitle,
                  children: _._.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, _.jsx)("div", {
                  children: _._.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        const _ = [
            {
              fill: "#ffc82c",
              key: "disagree_performance",
              name: _._.Localize("#GamePerformanceStats_Performance"),
            },
            {
              fill: "#59bf40",
              key: "disagree_legibility",
              name: _._.Localize("#GamePerformanceStats_Legibility"),
            },
            {
              fill: "#1a9fff",
              key: "disagree_stability",
              name: _._.Localize("#GamePerformanceStats_Stability"),
            },
            {
              fill: "#ad66bb",
              key: "disagree_input",
              name: _._.Localize("#GamePerformanceStats_Input"),
            },
            {
              fill: "#dcdedf",
              key: "disagree_other",
              name: _._.Localize("#GamePerformanceStats_Other"),
            },
          ],
          _ = Number(_.total?.agree) + Number(_.total?.disagree),
          _ = (Number(_.total?.agree) / _) * 100,
          _ = [..._.daily];
        return (0, _.jsxs)("div", {
          className: _.FeedbackContainer,
          children: [
            (0, _.jsxs)("div", {
              className: _.DescriptionContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _.PerformanceSectionTitle,
                  children: _._.Localize(
                    "#GamePerformanceStats_CustomerFeedback",
                  ),
                }),
                (0, _.jsx)(_, {
                  nAgreePercent: _,
                }),
                (0, _.jsx)("div", {
                  children: _._.Localize(
                    "#GamePerformanceStats_NumberOfReports",
                    (0, _._)(_),
                    _.daily.length,
                  ),
                }),
                (0, _.jsx)("div", {
                  className: _.DescriptionSection,
                  children: _._.LocalizeReact(
                    "#GamePerformanceStats_WhyDisagree",
                    (0, _.jsx)("span", {
                      children: _._.Localize(
                        "#GamePerformanceStats_DidNotAgree",
                      ),
                    }),
                    (0, _.jsx)("span", {
                      children: _._.Localize(
                        "#SteamDeckVerified_Category_Verified",
                      ),
                    }),
                  ),
                }),
                (0, _.jsx)(_, {
                  feedback: _,
                }),
              ],
            }),
            (0, _.jsx)(_._, {
              width: "100%",
              minWidth: 600,
              minHeight: 300,
              className: _.FeedbackChartContainer,
              children: (0, _.jsxs)(_._, {
                margin: {
                  top: 25,
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
                data: _.sort((_, _) => _.date - _.date),
                children: [
                  (0, _.jsx)(_._, {
                    dataKey: "date",
                    tickFormatter: _,
                    stroke: "white",
                  }),
                  (0, _.jsx)(_._, {
                    stroke: "white",
                    domain: [() => 0, (_) => Math.max(_, 20)],
                  }),
                  (0, _.jsx)(_._, {
                    labelFormatter: _,
                  }),
                  __webpack_require__.map((_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        shape: (0, _.jsx)(_, {
                          fill: _.fill,
                        }),
                        fill: _.fill,
                        dataKey: _.key,
                        stackId: "day",
                        name: _.name,
                      },
                      _.key,
                    ),
                  ),
                  (0, _.jsx)(_._, {}),
                ],
              }),
            }),
          ],
        });
      }
      const _ = new Map([
          [3, "LCD"],
          [_, "OLED"],
        ]),
        _ = new Array(
          {
            name: _.get(_),
            key: _.get(_),
            contents: null,
          },
          {
            name: _.get(3),
            key: _.get(3),
            contents: null,
          },
        );
      function _(_) {
        const { appName: _, frameRateData: _, histogramData: _ } = _,
          [_, _] = _.useState(void 0),
          _ = _.useMemo(() => {
            let _ = [];
            return (
              _?.frame_rate_clusters &&
                _?.frame_rate_clusters.length > 0 &&
                _.frame_rate_clusters.forEach((_) => {
                  if (!_.clusterid || !_.get(_.clusterid)) return;
                  let _ = {
                    tab: _.get(_.clusterid),
                    clusterid: _.clusterid ?? 0,
                    mean_frame_rate: _.mean_frame_rate,
                    report_days: _.report_days ?? 0,
                    data: [],
                  };
                  _.daily_frame_rates?.map((_) => {
                    const _ = parseInt("" + _.mean_frame_rate),
                      _ = parseInt("" + _.mean_frame_rate_stddev);
                    return _.data.push({
                      date: _.date,
                      mean: _,
                      range: [_ + _, _ - _],
                    });
                  }),
                    _.data.sort((_, _) => _.date - _.date),
                    _.push(_);
                }),
              _
            );
          }, [_]),
          _ = _.useMemo(() => {
            const _ = _.get(_);
            return _.some((_) => _.tab == _ && _.data.length > 0)
              ? _
              : (_.find((_) => _.data.length > 0)?.tab ?? _);
          }, [_]);
        if (!_?.frame_rate_clusters?.length)
          return (0, _.jsx)("div", {
            className: _.FrameRateContainer,
            children: (0, _.jsxs)("div", {
              className: _.DescriptionContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _.PerformanceSectionTitle,
                  children: _._.Localize(
                    "#GamePerformanceStats_AverageFrameRate_Title",
                  ),
                }),
                (0, _.jsx)("div", {
                  children: _._.Localize("#GamePerformanceStats_NoData"),
                }),
              ],
            }),
          });
        let _,
          _ = (0, _.jsx)("div", {
            children: _._.Localize("#GamePerformanceStats_NoData"),
          });
        const _ = _ ?? _,
          _ = [..._.entries()].find(([_, _]) => _ === _)[0],
          _ = _.find((_) => _.clusterid == _);
        if (_) {
          const _ = Number(_.mean_frame_rate ?? 0).toFixed(0),
            _ = (0, _.jsx)("span", {
              className: _.FrameRateValue,
              children: _._.Localize("#GamePerformanceStats_FPS", _),
            });
          (_ = _
            ? _._.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate_Device",
                _,
                _,
                _,
              )
            : _._.LocalizeReact(
                "#GamePerformanceStats_AverageFrameRate_ThisGame_Device",
                _,
                _,
              )),
            (_ = (0, _.jsx)(_._, {
              width: "100%",
              minWidth: 600,
              height: 300,
              children: (0, _.jsxs)(_._, {
                margin: {
                  top: 25,
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
                data: _.data,
                children: [
                  (0, _.jsx)(_._, {
                    strokeDasharray: "3 3",
                    color: "red",
                  }),
                  (0, _.jsx)(_._, {
                    dataKey: "date",
                    tickFormatter: _,
                    stroke: "white",
                  }),
                  (0, _.jsx)(_._, {
                    stroke: "white",
                    domain: [() => 0, (_) => Math.max(_, 100)],
                  }),
                  (0, _.jsx)(_._, {
                    labelFormatter: _,
                  }),
                  (0, _.jsx)(_._, {
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
        let _,
          _ = !1,
          _ = (0, _.jsx)("div", {
            children: _._.Localize("#GamePerformanceStats_NoData"),
          });
        const _ = _ ? _.find((_) => _.clusterID == _) : void 0;
        if (_) {
          const _ = Math.max(..._.rgResults);
          if (((_ = _ > 0), _)) {
            let _ = 0,
              _ = 1;
            const _ = 200;
            (_ = (0.9 * _) / _), (_ = _.rgResults.indexOf(_));
            let _ = 0;
            _.rgResults.forEach((_, _) => {
              Math.floor(100 * _) > 0 && (_ = _);
            });
            const _ = _.rgResults.slice(0, _ + 1);
            (_ = _
              ? _._.LocalizeReact(
                  "#GamePerformanceStats_FrameRateHistogram_Device",
                  _,
                  _,
                )
              : _._.LocalizeReact(
                  "#GamePerformanceStats_FrameRateHistogram_ThisGame_Device",
                  _,
                )),
              (_ = (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    className: _.Chart,
                    children: _.map((_, _) =>
                      (0, _.jsx)(
                        "div",
                        {
                          className: _.ChartBar,
                          style: {
                            height: _ * _,
                            marginTop: _ - _ * _,
                          },
                          children: (0, _.jsx)("div", {
                            className: _.ChartBarLabel,
                            children:
                              _ == _ ? `${(100 * _).toFixed(1)}%` : null,
                          }),
                        },
                        `bar_${_}`,
                      ),
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    className: _.Labels,
                    children: _.map((_, _) => {
                      const _ = 15 + 5 * _,
                        _ = _ % 10 == 0;
                      return (0, _.jsxs)(
                        "div",
                        {
                          className: _.LabelContainer,
                          children: [
                            (0, _.jsx)("div", {
                              className: (0, _._)(_.Tick, !_ && _.TickHidden),
                              children: "",
                            }),
                            (0, _.jsx)(
                              "div",
                              {
                                className: _.Label,
                                children: _ ? _ : "",
                              },
                              `label_${_}`,
                            ),
                          ],
                        },
                        _,
                      );
                    }),
                  }),
                ],
              }));
          }
        }
        return (0, _.jsxs)("div", {
          className: _.FrameRateContainer,
          children: [
            (0, _.jsxs)("div", {
              className: _.DescriptionContainer,
              children: [
                (0, _.jsxs)("div", {
                  className: _.PerformanceSectionTitle,
                  children: [
                    _._.Localize(
                      "#GamePerformanceStats_AverageFrameRate_Title",
                    ),
                    (0, _.jsx)("span", {
                      className: _.Beta,
                      children: _._.Localize("#NewToolTitleSuffix_Beta"),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  children: _,
                }),
                Boolean(_?.report_days) &&
                  (0, _.jsx)("div", {
                    className: _.DescriptionSection,
                    children: _._.Localize(
                      "#GamePerformanceStats_FrameRateDataBasedOn",
                      _?.report_days ?? 0,
                    ),
                  }),
                (0, _.jsx)("div", {
                  className: _.DescriptionSection,
                  children: _._.Localize(
                    "#GamePerformanceStats_FrameRateMoreInfo",
                  ),
                }),
              ],
            }),
            (0, _.jsxs)("div", {
              className: _.TabContainer,
              children: [
                (0, _.jsx)(_._, {
                  className: _.FrameRateTabs,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        active: _.key === _,
                        locToken: _.name,
                        onClick: () => _(_.key),
                      },
                      _.key,
                    ),
                  ),
                }),
                _,
              ],
            }),
            _ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)("div", {
                    className: _.DescriptionContainer,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.PerformanceSectionTitle,
                        children: [
                          _._.Localize(
                            "#GamePerformanceStats_FrameRateHistogram_Title",
                          ),
                          " ",
                          (0, _.jsx)("span", {
                            className: _.ValveOnly,
                            children: "(VO)",
                          }),
                          (0, _.jsx)("span", {
                            className: _.Beta,
                            children: _._.Localize("#NewToolTitleSuffix_Beta"),
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _.HistogramContainer,
                    children: _,
                  }),
                ],
              }),
          ],
        });
      }
      function _(_) {
        return (0, _.jsx)(_._, {
          className: _.active ? _.TabActive : _.TabInactive,
          onClick: _.onClick,
          children: _.locToken,
        });
      }
      function _(_) {
        return (0, _._)(_);
      }
      function _(_) {
        const { nAgreePercent: _ } = _;
        return (0, _.jsxs)("div", {
          className: _.FeedbackAgree,
          children: [
            _._.LocalizeReact(
              "#GamePerformanceStats_Feedback_Agree",
              (0, _.jsx)("span", {
                className: (0, _._)(_.Percentage, _.DescriptionEmphasis),
                children: _._.LocalizeReact(
                  "#GamePerformanceStats_Feedback_AgreePercentage",
                  _.toFixed(0),
                ),
              }),
              (0, _.jsx)("span", {
                children: _._.Localize("#SteamDeckVerified_Category_Verified"),
              }),
            ),
            (0, _.jsx)(_._, {
              tooltip: (0, _.jsx)("div", {
                children: _._.Localize(
                  "#GamePerformanceStats_Feedback_PercentageTooltip",
                ),
              }),
            }),
          ],
        });
      }
      function _(_) {
        const { feedback: _ } = _;
        let _ = new Array(
          {
            display: _._.Localize("#GamePerformanceStats_Input"),
            value: _.total.disagree_input,
            class: _.FeedbackInput,
          },
          {
            display: _._.Localize("#GamePerformanceStats_Legibility"),
            value: _.total.disagree_legibility,
            class: _.FeedbackLegibility,
          },
          {
            display: _._.Localize("#GamePerformanceStats_Performance"),
            value: _.total.disagree_performance,
            class: _.FeedbackPerformance,
          },
          {
            display: _._.Localize("#GamePerformanceStats_Stability"),
            value: _.total.disagree_stability,
            class: _.FeedbackStability,
          },
          {
            display: _._.Localize("#GamePerformanceStats_Other"),
            value: _.total.disagree_other,
            class: _.FeedbackOther,
          },
        );
        return (
          __webpack_require__.sort((_, _) =>
            _.class == _.FeedbackOther ? 1 : _.value - _.value,
          ),
          (0, _.jsxs)("div", {
            className: _.FeedbackSummaryTable,
            children: [
              (0, _.jsx)("div", {
                className: _.FeedbackTableHeader,
                children: _._.Localize("#GamePerformance_Reason"),
              }),
              (0, _.jsx)("div", {
                className: _.FeedbackTableHeader,
                children: _._.Localize("#GamePerformance_NumResponses"),
              }),
              __webpack_require__.map((_, _) =>
                (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      (0, _.jsx)("div", {
                        className: _.class,
                        children: _.display,
                      }),
                      (0, _.jsx)("div", {
                        children: _.value,
                      }),
                    ],
                  },
                  "reason_" + _,
                ),
              ),
            ],
          })
        );
      }
      const _ = (_) => {
        const { fill: _, _: _, _: _, width: _, height: _ } = _;
        return (0, _.jsx)("rect", {
          _: _,
          _: _,
          width: _,
          height: _,
          fill: _,
        });
      };
    },
  },
]);

(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [5027],
  {
    chunkid: (module) => {
      module.exports = {
        SDRConnectionsAppCtn: "_3Vqm_VeN4ssp-Plt0sq9f-",
        SDRConnectionsAppTitle: "_1VJcGIkGXCYh0gu5XTfN8F",
        SearchParamsCtr: "_1iOSDTa4VQiMZClYcvyBqJ",
        ConnectionKindGroup: "_2nfRCSDfwq2_xoi3dB77TJ",
        AppFieldPair: "JhdeVCLD5Nn-qer67zICK",
        SubmitButtonCtn: "_1m5EkOjBrsq1TFE-Qr82zi",
        ErrorMsg: "_15kPlJ6rH5w4pXTrO43FBC",
        SearchResultsCtr: "xl0L8ayTr8Vlmddp5nsh_",
        SearchResultsTitle: "_2zXcRle-2BH9RfK4FpK91K",
        ConnectionCtr: "_33Z20EyKgVCf_gw2o-dJuM",
        ConnectionHeader: "_2Ckxnlhp2zC2AmsUxs9hA4",
        CxnSummary: "ZLIDfPw1nsKeKLQOzyQE2",
        GenericLabeledItem: "_3owUM5gBDF_RV2qXJQkvk1",
        CxnPeersCtr: "_2TCo_v6vmEUfdrfY3CtWUY",
        ConnectionClientInfo: "_29nFZnfU1pSV_mKnl52iO0",
        host_id: "_2gxSU_PX9i6fvFKON5GOU3",
        GameServerDataCenter: "gwTmZ9cblfSJQBeTcVIru",
        HostIsGameserver: "_15b6hVfpkp4nmpIuuvLB0-",
        HostIDInfo: "vm4PN6HoaCpN0n0Lf8aEI",
        CxnGenericData: "ftpouOEdAxieFE50x58Ch",
        ExpandDetailsCheckbox: "Pf2peEv8e7v8NNd8Ox_O9",
        SessionsGroupHeader: "_2PkRiRECyXwIWMFEHjLMZN",
        QualityFlowPairCtr: "_2mXRDHNOp7hGPyN9lhRXBL",
        QualityFlowPairTitle: "_2_XypEUOV9pIm-K7QPo37N",
        FlowQualityStats: "_2CrTqNU0Ug9ThuaEAR2o-0",
        RelaySessionCtr: "_3Ny56nIakjtPWa2rTo_ECO",
        CxnCloseInfo: "_19mRGkz4pJX0woMGbfouEw",
        AppFieldsCtr: "_2T7Ca6X3HgAneoHL9JkiEs",
        AppFieldsTitle: "_3R8n1GZ3T0u2DTjcj7_1N6",
        FlowSectionTitle: "a0Wxor6TYEbMVH7dLhXwO",
        FlowQualityTitle: "_12x87YD7BQ6cDje5hLvbPv",
        NumPkts: "_3gym37cGwcIsZIB8agk3XK",
        _: "_3i190Q1NF3QOOxp6WbDzRs",
        Pct: "_1fRCeZ2Vze8SX02_f_AK9d",
        FlowPacketCounts: "_2EYOyHKrd9qJ5LIRS6u6T3",
        Spacer: "_29tRzyxxRK94Vgoj1UYbw",
        CxnGenericDataLabel: "_1NnpcKcQDkW2SVMohIW_9R",
        Histogram: "_3SrHBXySCqPbEk7w5T6loT",
        Bar: "_32eimNgIwt059yIMsrVWMf",
        Distribution: "_3guObDjcedjI4d8GUIsFPK",
        NTile: "vT8kyilnaIPZYPGPJCiO8",
        PingBreakdown: "_2jSWoWwbKYvirg5AnaXkGy",
        PingSection: "RIiaSPbcGDEbBV9OkUtmG",
        JitterSection: "_5OEqow5h9FrG38R53xBoS",
        QualityBreakdown: "_1RMOO_UtP0Xm5MO4xO8UHP",
        ClientIPInfo: "_1IW5oJMNg9Ki_RFXk2SgqJ",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
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
      function _(_) {
        return _.createElement(
          "span",
          {
            className: (0, _._)(_.GenericLabeledItem, _.className),
          },
          _.createElement(
            "span",
            {
              className: _.CxnGenericDataLabel,
            },
            _.label,
          ),
          _.createElement(
            "span",
            {
              className: _.CxnGenericData,
            },
            _.children,
          ),
        );
      }
      function _(_) {
        const _ = _.host,
          _ = _.type + ":" + _._;
        let _ = "peer" == _.host_role ? "Peer" : "Client",
          _ = null;
        if (_.data_center)
          (_ = "Gameserver"),
            (_ = _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "span",
                {
                  className: _.host_id,
                },
                _,
              ),
              " in ",
              _.createElement(
                "span",
                {
                  className: _.GameServerDataCenter,
                },
                _.data_center,
              ),
            ));
        else if (_.steam_persona) {
          const _ = _._.COMMUNITY_BASE_URL + "/profiles/" + _._;
          _ = _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "span",
              {
                className: _.host_id,
              },
              _.createElement(
                "a",
                {
                  href: _,
                },
                _.steam_persona,
              ),
            ),
            " (",
            _.createElement(
              "span",
              {
                className: _.host_id,
              },
              _,
            ),
            ")",
          );
        } else
          _ = _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "span",
              {
                className: _.host_id,
              },
              _,
            ),
          );
        return _.createElement(
          "div",
          {
            className: (0, _._)(
              _.ConnectionClientInfo,
              _.data_center && _.HostIsGameserver,
            ),
          },
          _.createElement(
            "div",
            {
              className: _.HostIDAndConnectionCtr,
            },
            _.createElement(
              _,
              {
                className: _.HostIDInfo,
                label: _,
              },
              _,
            ),
            null != _.connection_id &&
              _.createElement(
                _,
                {
                  className: _.HostConnectionID,
                  label: "ConnectionID",
                },
                _.connection_id,
              ),
          ),
          _.createElement(
            "div",
            {
              className: _.ClientIPInfo,
            },
            _.addr &&
              _.createElement(
                _,
                {
                  className: "addr",
                  label: "IP",
                },
                _.addr,
              ),
            _.city_name &&
              _.createElement(
                _,
                {
                  className: "city_name",
                  label: "City",
                },
                _.city_name,
              ),
            _.country_code &&
              _.createElement(
                _,
                {
                  className: "country_code",
                  label: "Country",
                },
                _.country_code,
              ),
            _._ &&
              _.createElement(
                _,
                {
                  className: "as",
                  label: "AS",
                },
                _._,
              ),
          ),
        );
      }
      function _(_, _) {
        return (
          null == _ && (_ = 0),
          _.toLocaleString((0, _._)(), {
            minimumFractionDigits: _,
            maximumFractionDigits: _,
          })
        );
      }
      function _(_) {
        let _ = 1e30,
          _ = -1e30;
        if (_ && _.ping_pctile)
          for (const _ in _.ping_pctile) {
            const _ = parseFloat(_);
            if (_ >= 5 && _ <= 95) {
              const _ = _.ping_pctile[_];
              _ < _ && (_ = _), _ > _ && (_ = _);
            }
          }
        return [_, _];
      }
      function _(_) {
        let _ = 1e30;
        if (_ && _.quality_pctile)
          for (const _ in _.quality_pctile) {
            const _ = parseFloat(_);
            if (_ >= 5 && _ <= 95) {
              const _ = _.quality_pctile[_];
              _ < _ && (_ = _);
            }
          }
        return _;
      }
      function _(_, _, _) {
        const _ = _ > 0 ? _ / _ : 0,
          _ = (100 * _).toFixed(1) + "%";
        return _.createElement(
          "tr",
          {
            key: _,
          },
          _.createElement(
            "th",
            {
              className: _.Label,
            },
            _,
          ),
          _.createElement(
            "td",
            {
              className: _.Pct,
            },
            _,
          ),
          _.createElement(
            "td",
            null,
            _.createElement("span", {
              className: _.Bar,
              style: {
                width: 90 * _ + 1 + "px",
              },
            }),
            _.createElement(
              "span",
              {
                className: _.Num,
              },
              _(_),
            ),
          ),
        );
      }
      function _(_, _) {
        if (!(_ > 0)) return null;
        let _ = [];
        for (let _ = 0; _ < _.length; ++_)
          __webpack_require__.push(_(_[_][0], _[_][1], _));
        return _.createElement(
          "table",
          {
            className: _.Histogram,
          },
          _.createElement("tbody", null, _),
        );
      }
      function _(_) {
        let _ = [];
        for (let _ = 0; _ < _.length; ++_) {
          const [_, _] = _[_];
          null != _ &&
            _.push(
              _.createElement(
                "tr",
                {
                  key: _,
                },
                _.createElement(
                  "th",
                  {
                    className: _.NTile,
                  },
                  _,
                  "% <=",
                ),
                _.createElement(
                  "td",
                  {
                    className: _.Value,
                  },
                  _,
                ),
              ),
            );
        }
        return _.length
          ? _.createElement(
              "table",
              {
                className: _.Distribution,
              },
              _.createElement("tbody", null, _),
            )
          : null;
      }
      function _(_) {
        return _ >= 0 ? _.toFixed(0) + "ms" : "???";
      }
      function _(_) {
        const _ = _.flow;
        return _.createElement(
          "div",
          {
            className: _.FlowQualityStats,
          },
          _.createElement(
            "div",
            {
              className: _.FlowQualityTitle,
            },
            _.title,
          ),
          _
            ? _.createElement(
                _.Fragment,
                null,
                (function (_) {
                  const _ = function (_) {
                      const _ = _ >= 0 ? _(_) : "?";
                      return _.createElement(
                        "td",
                        {
                          className: _.NumPkts,
                        },
                        _ + " pkts",
                      );
                    },
                    _ = function (_) {
                      const _ = _ >= 0 ? _(_) : "?";
                      return _.createElement(
                        "td",
                        {
                          className: _._,
                        },
                        _ + "kb",
                      );
                    },
                    _ = function (_, _) {
                      let _ = "";
                      return (
                        _ > 0 &&
                          _ >= 0 &&
                          (_ = ((_ / _) * 100).toFixed(3) + "%"),
                        _.createElement(
                          "td",
                          {
                            className: _.Pct,
                          },
                          _,
                        )
                      );
                    };
                  return _.createElement(
                    "div",
                    {
                      className: (0, _._)(
                        _.FlowPacketCounts,
                        _.FlowStatsSection,
                      ),
                    },
                    _.createElement(
                      "div",
                      {
                        className: _.FlowSectionTitle,
                      },
                      "Summary counters",
                    ),
                    _.createElement(
                      "table",
                      null,
                      _.createElement(
                        "tbody",
                        null,
                        _.createElement(
                          "tr",
                          null,
                          _.createElement("th", null, "Sent"),
                          _(_.sent_pkt),
                          __webpack_require__(_.sent_kb),
                          _.createElement("td", {
                            className: _.Spacer,
                          }),
                          _.createElement("th", null, "Dropped"),
                          _(_.drop),
                          _(_.drop, _.recv_seq),
                        ),
                        _.createElement(
                          "tr",
                          null,
                          _.createElement("th", null, "Recv"),
                          _(_.recv_pkt),
                          __webpack_require__(_.recv_kb),
                          _.createElement("td", {
                            className: _.Spacer,
                          }),
                          _.createElement("th", null, "Duplicate"),
                          _(_.dup),
                          _(_.dup, _.recv_seq),
                        ),
                        _.createElement(
                          "tr",
                          null,
                          _.createElement("th", null, "Recv w/ seq"),
                          _(_.recv_seq),
                          _.createElement("td", null),
                          _.createElement("td", {
                            className: _.Spacer,
                          }),
                          _.createElement("th", null, "Out of order"),
                          _(_.ooo),
                          _(_.ooo, _.recv_seq),
                        ),
                        _.createElement(
                          "tr",
                          null,
                          _.createElement("th", null, "Summary"),
                          _.createElement(
                            "td",
                            {
                              colSpan: 2,
                              className: _.FlowQualityClass,
                            },
                            _.createElement(
                              "span",
                              {
                                className:
                                  "flowqualityclass_" + _.quality_class,
                              },
                              _.quality_class,
                            ),
                          ),
                          _.createElement("td", {
                            className: _.Spacer,
                          }),
                          _.createElement("th", null, "Seq num lurch"),
                          _(_.seqlurch),
                          _(_.seqlurch, _.recv_seq),
                        ),
                      ),
                    ),
                  );
                })(_),
                (function (_) {
                  let _ = null,
                    _ = null,
                    _ = 0;
                  const _ = _.quality_hist;
                  if (_) {
                    const _ = [
                      ["Perfect", _[100] || 0],
                      [">99%", _[99] || 0],
                      ["97-99%", _[97] || 0],
                      ["95-97%", _[95] || 0],
                      ["90-95%", _[90] || 0],
                      ["75-90%", _[75] || 0],
                      ["50-75%", _[50] || 0],
                      ["<50%", _[1] || 0],
                      ["Dead", _[0] || 0],
                    ];
                    for (let _ = 0; _ < _.length; ++_) _ += _[_][1];
                    _ = _(_, _);
                  }
                  if (_ <= 0) return null;
                  const _ = _.quality_pctile;
                  if (_) {
                    const _ = (_) => (null == _ ? void 0 : _ + "%");
                    _ = _([
                      [50, _(_[50])],
                      [25, _(_[25])],
                      [5, _(_[5])],
                      [2, _(_[2])],
                    ]);
                  }
                  const _ = _(_) + " measurement intervals";
                  return _.createElement(
                    "div",
                    {
                      className: _.QualityBreakdown,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _.FlowSectionTitle,
                      },
                      "Quality interval breakdown",
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _.numSamples,
                      },
                      _,
                    ),
                    _,
                    _,
                  );
                })(_),
                (function (_) {
                  let _ = null;
                  const _ = _.ping_hist;
                  let _ = 0;
                  if (_) {
                    const _ = [
                      [0, _[25] || 0],
                      [25, _[50] || 0],
                      [50, _[75] || 0],
                      [75, _[100] || 0],
                      [100, _[125] || 0],
                      [125, _[150] || 0],
                      [150, _[200] || 0],
                      [200, _[300] || 0],
                      [300, _.max || 0],
                    ];
                    let _,
                      _ = 0;
                    for (let _ = 0; _ < _.length; ++_)
                      _[_][1] > 0 &&
                        (null == _ && (_ = _), (_ = _ + 1), (_ += _[_][1]));
                    if (_ > 0) {
                      (_ = Math.max(0, _ - 2)), (_ = Math.min(_.length, _ + 2));
                      let _ = [];
                      for (let _ = _; _ < _; ++_) {
                        let _,
                          [_, _] = _[_];
                        _ == _ && 0 == _ && (_ = 0),
                          (_ =
                            _ + 1 >= _.length || (_ + 1 >= _ && 0 == _)
                              ? _(_) + "+"
                              : _ + "-" + _(_[_ + 1][0])),
                          __webpack_require__.push(_(_, _, _));
                      }
                      _ = _.createElement(
                        "table",
                        {
                          className: _.Histogram,
                        },
                        _.createElement("tbody", null, _),
                      );
                    }
                  }
                  let _ = null;
                  const _ = _.ping_pctile;
                  if (_) {
                    const _ = (_) => (null == _ ? void 0 : _(_));
                    _ = _([
                      [5, _(_[5])],
                      [50, _(_[50])],
                      [75, _(_[75])],
                      [95, _(_[95])],
                      [98, _(_[98])],
                    ]);
                  }
                  let _ = null,
                    _ = 0;
                  const _ = _.jitter_hist;
                  if (_) {
                    const _ = [
                      ["<1ms", _[0] || 0],
                      ["1-2ms", _[1] || 0],
                      ["2-5ms", _[2] || 0],
                      ["5-10ms", _[5] || 0],
                      ["10-20ms", _[10] || 0],
                      ["20ms+", _[20] || 0],
                    ];
                    for (let _ = 0; _ < _.length; ++_) _ += _[_][1];
                    _ = _(_, _);
                  }
                  if (!_ && !_ && !_) return null;
                  const _ = _(_) + " samples",
                    _ = _(_) + " samples";
                  return _.createElement(
                    "div",
                    {
                      className: _.PingBreakdown,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _.PingSection,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _.FlowSectionTitle,
                        },
                        "Round Trip Latency",
                      ),
                      _.createElement(
                        "div",
                        {
                          className: _.NumSamples,
                        },
                        _,
                      ),
                      _,
                      _,
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _.JitterSection,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _.FlowSectionTitle,
                        },
                        "Jitter",
                      ),
                      _.createElement(
                        "div",
                        {
                          className: _.NumSamples,
                        },
                        _,
                      ),
                      _,
                    ),
                  );
                })(_),
              )
            : _.createElement(
                "div",
                {
                  className: _.NoFlowDataAvailable,
                },
                "(No data available)",
              ),
        );
      }
      function _(_) {
        const _ = _.sess,
          _ = _.cxn;
        let _ = null,
          _ = null;
        if (_.client_front || _.router_front) {
          const _ =
            "ded" == _.kind
              ? "Front side statistics reported by client"
              : "Front side statistics reported by player";
          _ = _.createElement(
            "div",
            {
              className: _.QualityFlowPairCtr,
            },
            _.createElement(_, {
              title: _,
              flow: _.client_front,
            }),
            _.createElement(_, {
              title: "Front side statistics reported by relay",
              flow: _.router_front,
            }),
          );
        }
        return (
          (_.router_back || _.gameserver_back) &&
            (_ = _.createElement(
              "div",
              {
                className: _.QualityFlowPairCtr,
              },
              _.createElement(_, {
                title: "Back side statistics reported by relay",
                flow: _.router_back,
              }),
              _.createElement(_, {
                title: "Back side statistics reported by gameserver",
                flow: _.gameserver_back,
              }),
            )),
          _.createElement(
            "div",
            {
              className: _.RelaySessionCtr,
            },
            _.createElement(
              "div",
              {
                className: _.RelayInfoCtr,
              },
              _.createElement(
                _,
                {
                  label: "Relay address",
                },
                _.client.relay_addr,
              ),
              _.createElement(
                _,
                {
                  label: "Relay POP",
                },
                _.client.relay_cluster,
              ),
              _.createElement(
                _,
                {
                  label: "Active",
                },
                (0, _._)(_.active_time),
              ),
            ),
            _,
            _,
          )
        );
      }
      function _(_) {
        const _ = _.cxn,
          _ = _.client,
          _ = _.peer,
          _ = _.client_e2e,
          _ = _.peer_e2e,
          [_, _] = _.useState(!1),
          _ = (function (_) {
            if (!_ || !_.length) return null;
            let _ = _[0];
            for (let _ = 1; _ < _.length; ++_) {
              const _ = _[_];
              (_.primary > _.primary ||
                (_.primary == _.primary && _.active_time > _.active_time)) &&
                (_ = _);
            }
            return _;
          })(_.client_sessions);
        let _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = [];
        if (_) {
          _ &&
            _.client.connection_id == _.connection_id &&
            (!_ || (_.client.connection_id, _.connection_id));
          if (_.start_time && _.duration) {
            const _ = new Date(1e3 * _.start_time),
              _ = new Date(1e3 * (_.start_time + _.duration)),
              _ = _._.GetPreferredLocales(),
              _ = _.toLocaleString(_, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }),
              _ = _.toLocaleString(_, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              }),
              _ = _.toLocaleString(_, {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZoneName: "short",
              }),
              _ = (0, _._)(_.duration);
            _ = _.createElement(
              "span",
              {
                className: _.CxnTimeAndDuration,
              },
              _.createElement(
                _,
                {
                  label: "Time",
                },
                _,
                " ",
                _,
                "--",
                _,
              ),
              _.createElement(
                _,
                {
                  label: "Duration",
                },
                _,
              ),
            );
          }
          if (
            (_.close_code &&
              (_ = _.createElement(
                _,
                {
                  label: "Closed",
                  className: _.CxnCloseInfo,
                },
                _.close_type,
                " ",
                _.close_msg,
                " (",
                _.close_code,
                ")",
              )),
            _.experience_class)
          ) {
            const _ = _.class_reason ? ` (${_.class_reason})` : "";
            _ = _.createElement(
              _,
              {
                label: "Experience",
              },
              _.createElement(
                "span",
                {
                  className: "experience_" + _.experience_class,
                },
                _.experience_class,
              ),
              _,
            );
          }
        }
        if (_.app) {
          let _ = Object.keys(_.app);
          if (_.length > 0) {
            _.sort();
            let _ = [];
            for (let _ of _)
              __webpack_require__.push(
                _.createElement(
                  _,
                  {
                    label: _,
                  },
                  _.app[_],
                ),
              );
            _ = _.createElement(
              "div",
              {
                className: _.AppFieldsCtr,
              },
              _.createElement(
                "span",
                {
                  className: _.AppFieldsTitle,
                },
                "Application fields:",
              ),
              _,
            );
          }
        }
        if (_ || _) {
          const [_, _] = _(_),
            [_, _] = _(_),
            _ = Math.min(_, _),
            _ = Math.max(_, _);
          if (_ <= _) {
            const _ =
              0.03 * _ + 2 < _
                ? `${_}--${_}ms`
                : Math.floor((_ + _) / 2 + 0.5) + "ms";
            _ = _.createElement(
              _,
              {
                label: "Ping",
              },
              _,
            );
          }
          const _ = _(_),
            _ = _(_),
            _ = Math.min(_, _);
          if (
            (_ >= 0 &&
              _ <= 100 &&
              (_ = _.createElement(
                _,
                {
                  label: "Packet delivery",
                },
                `${_.toFixed(2)}%`,
              )),
            _)
          ) {
            const _ = "End-to-end statistics reported by client",
              _ =
                "ded" == _.kind
                  ? "End-to-end statistics reported by gameserver"
                  : "End-to-end statistics reported by peer";
            _ = _.createElement(
              "div",
              {
                className: _.QualityFlowPairCtr,
              },
              _.createElement(_, {
                title: _,
                flow: _,
              }),
              _.createElement(_, {
                title: _,
                flow: _,
              }),
            );
          }
        }
        if (_) {
          const _ = function (_) {
              let _ = [..._];
              return (
                _.sort((_, _) => (_.active_time || 0) - (_.active_time || 0)), _
              );
            },
            _ = _.client_sessions && _.client_sessions.length > 0,
            _ = _.peer_sessions && _.peer_sessions.length > 0;
          if (_) {
            "p2p" == _.kind || _
              ? _.push(
                  _.createElement(
                    "div",
                    {
                      className: _.SessionsGroupHeader,
                    },
                    "Client relay sessions",
                  ),
                )
              : _.push(
                  _.createElement(
                    "div",
                    {
                      className: _.SessionsGroupHeader,
                    },
                    "Relay sessions",
                  ),
                );
            for (const _ of _(_.client_sessions))
              _.push(
                _.createElement(_, {
                  cxn: _,
                  sess: _,
                  host_role: "client",
                }),
              );
          }
          if (_) {
            _.push(
              _.createElement(
                "div",
                {
                  className: _.SessionsGroupHeader,
                },
                "Peer relay sessions",
              ),
            );
            for (const _ of _(_.peer_sessions))
              _.push(
                _.createElement(_, {
                  cxn: _,
                  sess: _,
                  host_role: "peer",
                }),
              );
          }
        }
        return _.createElement(
          "div",
          {
            className: _.ConnectionCtr,
            key: _.key,
          },
          _.createElement(
            "div",
            {
              className: _.ConnectionHeader,
            },
            _.createElement(
              "div",
              {
                className: _.CxnSummary,
              },
              _,
              _,
              _,
              _,
              _,
              _,
            ),
            _.createElement(_._, {
              className: _.ExpandDetailsCheckbox,
              label: "Details",
              checked: _,
              onChange: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: _.CxnPeersCtr,
            },
            _.createElement(_, {
              host: _.client,
              host_role: "client",
            }),
            _.createElement(_, {
              host: _.peer,
              host_role: "peer",
            }),
          ),
          _,
          _,
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = _.appId,
          [_, _] = _.useState(!1),
          [_, _] = _.useState(""),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(""),
          [_, _] = _.useState(""),
          [_, _] = _.useState(""),
          [_, _] = _.useState(0),
          [_, _] = _.useState(""),
          [_, _] = _.useState("");
        _.useEffect(() => {
          let _ = new URLSearchParams(_.location.search);
          const _ = _.get("client_id") || "",
            _ = _.get("peer_id") || "",
            _ = _.get("kind") || "",
            _ = _.get("app_name1") || "",
            _ = _.get("app_value1") || "";
          if ((_(_), _(_), _(_), _(_), _(_), !_.toString() && 0 == _)) return;
          _(!0), _(""), _ > 0 && _.set("appid", "" + _);
          const _ =
            _._.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + _.toString();
          (async () => {
            try {
              const _ = await _().get(_);
              1 == _?.data?.success
                ? _(_.data.connections)
                : (console.error(
                    "sdrsessionsearch: OnPerformSearch error code  " +
                      _?.data?.success +
                      " msg: " +
                      _?.data?.msg,
                  ),
                  _(_?.data?.success + " msg: " + _?.data?.msg));
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "sdrsessionsearch: OnPerformSearch " + _.strErrorMsg,
                _,
              ),
                _(_.strErrorMsg);
            }
            _(!1);
          })();
        }, [_, _.location, _]);
        let _ = null;
        if (void 0 !== _) {
          let _ = [];
          for (const _ of _) {
            const _ = (_.client._ || "") + "-" + (_.client.connection_id || "");
            _.push(
              _.createElement(_, {
                key: _,
                cxn: _,
              }),
            );
          }
          _ = _.createElement(
            "div",
            {
              className: _.SearchResultsCtr,
            },
            _.createElement(
              "div",
              {
                className: _.SearchResultsTitle,
              },
              "Found ",
              _.length,
              " connection(s)",
            ),
            _,
          );
        }
        const _ = "ded" == _ ? "Gameserver" : "Peer",
          _ = !1,
          _ = _.useId();
        return _.createElement(
          _._,
          null,
          _.createElement(
            "div",
            {
              className: _.SDRConnectionsAppCtn,
            },
            _.createElement(
              "div",
              {
                className: _.SDRConnectionsAppTitle,
              },
              _.createElement(_.Fragment, null, "SDR Connections - "),
              _.appId > 0
                ? _.createElement(_.Fragment, null, "App ", _.appId)
                : _.createElement(_.Fragment, null, "All apps"),
              _.createElement(_.Fragment, null, " [BETA feature]"),
            ),
            _ &&
              _.createElement(
                "div",
                {
                  className: _.ErrMsg,
                },
                _,
              ),
            _.createElement(
              "div",
              {
                className: _.SearchParamsCtr,
              },
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    "DialogInputLabelGroup",
                    _.ConnectionKindGroup,
                  ),
                },
                _.createElement(
                  "div",
                  {
                    _: _,
                    className: "DialogLabel",
                  },
                  "Connection kind",
                ),
                _.createElement(
                  _._,
                  {
                    labelId: _,
                    value: _,
                    onChange: (_) => _(_),
                  },
                  _.createElement(
                    _._,
                    {
                      value: "",
                    },
                    "Any",
                  ),
                  _.createElement(
                    _._,
                    {
                      value: "ded",
                    },
                    "Dedicated server",
                  ),
                  _.createElement(
                    _._,
                    {
                      value: "p2p",
                    },
                    "Peer-to-Peer",
                  ),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _.AppFieldPair,
                },
                _.createElement(_._, {
                  type: "text",
                  value: _,
                  disabled: _,
                  label: "Client",
                  onChange: (_) => _(_.currentTarget.value),
                }),
                _.createElement(_._, {
                  type: "text",
                  value: _,
                  disabled: _,
                  label: _,
                  onChange: (_) => _(_.currentTarget.value),
                }),
              ),
              _.createElement(
                "div",
                {
                  className: _.AppFieldPair,
                },
                _.createElement(_._, {
                  type: "text",
                  value: _,
                  disabled: _,
                  label: "App field name 1",
                  onChange: (_) => _(_.currentTarget.value),
                }),
                _.createElement(_._, {
                  type: "text",
                  value: _,
                  disabled: _,
                  label: "App field value 1",
                  onChange: (_) => _(_.currentTarget.value),
                }),
              ),
              _.createElement(
                "div",
                {
                  className: _.SubmitButtonCtn,
                },
                _.createElement(
                  _._,
                  {
                    onClick: () => {
                      let _ = new URLSearchParams();
                      _ && _.set("client_id", _),
                        _ && _.set("peer_id", _),
                        _ && _.set("kind", _),
                        _ &&
                          _ &&
                          (_.set("app_name1", _), _.set("app_value1", _));
                      let _ = {
                        ..._.location,
                      };
                      (_.search = _.toString()),
                        _ != _.location && _.push(_),
                        _(_ + 1);
                    },
                    disabled: _,
                  },
                  "Search ",
                ),
              ),
            ),
            _ && _.createElement(_._, null),
            _,
          ),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        if (_().isCancel(_))
          return {
            strErrorMsg: "Action Cancelled:" + _,
            errorCode: 52,
          };
        if (
          void 0 !== _.response &&
          _.response.data &&
          "object" == typeof _.response.data
        ) {
          if ("msg" in _.response.data)
            return {
              strErrorMsg: _.response.data.msg,
              errorCode: _.response.data.success,
            };
          if ("err_msg" in _.response.data)
            return {
              strErrorMsg: _.response.data.err_msg,
              errorCode: _.response.data.success,
            };
          if ("message" in _.response.data)
            return {
              strErrorMsg: _.response.data.message,
              errorCode: _.response.data.success,
            };
          if ("success" in _.response.data)
            return {
              strErrorMsg: "error code: " + _.response.data.success,
              errorCode: _.response.data.success,
            };
        } else if ("object" == typeof _.data) {
          if ("msg" in _.data)
            return {
              strErrorMsg: _.data.msg,
              errorCode: _.data.success,
            };
          if ("err_msg" in _.data)
            return {
              strErrorMsg: _.data.err_msg,
              errorCode: _.data.success,
            };
          if ("message" in _.data)
            return {
              strErrorMsg: _.data.message,
              errorCode: _.data.success,
            };
          if ("success" in _.data)
            return {
              strErrorMsg: "error code: " + _.data.success,
              errorCode: _.data.success,
            };
        } else {
          if (void 0 !== _.success && void 0 !== _.msg)
            return {
              strErrorMsg: _.msg,
              errorCode: _.success,
            };
          if (void 0 !== _.success && void 0 !== _.message)
            return {
              strErrorMsg: _.message,
              errorCode: _.success,
            };
          if (void 0 !== _.success && void 0 !== _.err_msg)
            return {
              strErrorMsg: _.err_msg,
              errorCode: _.success,
            };
          if ("string" == typeof _ && _.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(_),
              console.groupEnd();
          else {
            if ("object" == typeof _ && _ instanceof _._)
              return {
                strErrorMsg: "" + _.GetErrorMessage(),
                errorCode: _.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", _);
          }
        }
        return "object" == typeof _ && "status" in _
          ? {
              strErrorMsg: "Unknown Error: " + _ + "\nStatus Code:" + _.status,
              errorCode: 2,
            }
          : {
              strErrorMsg: "Unknown Error: " + _,
              errorCode: 2,
            };
      }
    },
  },
]);

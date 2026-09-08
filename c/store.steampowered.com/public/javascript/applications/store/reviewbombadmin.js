(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [54372],
  {
    chunkid: (module) => {
      module.exports = {
        ReviewBombAdminDialog: "_2lQDxwhbNHmjH31B0a0KoB",
        Body: "XKjt8Kz4bhyBqZxrpK6Af",
        LoadError: "_1ogvTDnbFU4B1hC_s3YUO4",
        Periods: "D82hqMsJhf-6K4RjqShxR",
        Comment: "_3CGYGrKOKn3bIhllSfG4Jq",
        Actions: "npmKyDMK0Cpqi24QIg-gm",
        AddPeriod: "_2o1AY27gzyCbobL2jKfptD",
        ReviewBombPeriodDialog: "_3lipsNsbncd2aIAQ_4CTQR",
        TextArea: "_286KkCsK27JmtcD6E1MF4w",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          ReviewBombAdminDialog: () => _,
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
        _ = __webpack_require__("chunkid");
      const _ = [
        {
          eType: _._._,
          strLabel: "Off-topic",
        },
        {
          eType: _._._,
          strLabel: "Pending Internal Valve Review",
        },
        {
          eType: _._._,
          strLabel: "Testing Only",
        },
      ];
      function _(_) {
        return _
          ? _._.Instant.fromEpochMilliseconds(1e3 * _)
              .toZonedDateTimeISO("UTC")
              .toPlainDate()
          : null;
      }
      function _(_) {
        return ["reviewbombperiods", _];
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = "YYYY-MM-DD",
        _ = "Internal Comment";
      function _(_) {
        try {
          return _._.PlainDate.from(_), !0;
        } catch {
          return !1;
        }
      }
      function _(_) {
        return _ ? (_(_)?.toString() ?? "") : "";
      }
      function _(_) {
        const { period: _, onSubmit: _, onClose: _ } = _,
          [_, _] = _.useState(() => _(_?.nStartDate)),
          [_, _] = _.useState(() => _(_?.nEndDate)),
          [_, _] = _.useState(_?.strInternalComment ?? ""),
          [_, _] = _.useState(_?.eType ?? _[0].eType),
          _ = _.useMemo(
            () =>
              _.map((_) => ({
                label: _.strLabel,
                data: _.eType,
              })),
            [],
          ),
          _ = _(_),
          _ = !_ || _(_),
          _ = _ && _ && _.trim().length > 0,
          _ = _.useCallback((_) => _(_.target.value), []),
          _ = _.useCallback((_) => _(_.target.value), []),
          _ = _.useCallback((_) => _(_.target.value), []),
          _ = _.useCallback((_) => _(_.data), []),
          _ = _.useCallback(() => {
            _ &&
              (__webpack_require__({
                strStartDate: _,
                strEndDate: _,
                strInternalComment: _,
                eType: _,
              }),
              _());
          }, [_, _, _, _, _, _, _]),
          _ = _.useId(),
          _ = _._(_, {
            label: _,
          });
        return (0, _.jsxs)(_._, {
          className: _().ReviewBombPeriodDialog,
          strTitle: _
            ? "Update Review Anomaly Period"
            : "Add New Review Anomaly Period",
          strOKButtonText: _ ? "Update" : "Add",
          bOKDisabled: !_,
          onOK: _,
          onCancel: _,
          closeModal: _,
          children: [
            (0, _.jsx)(_._, {
              label: "Start Date (UTC)",
              description: _,
              value: _,
              onChange: _,
            }),
            (0, _.jsx)(_._, {
              label: "End Date (UTC)",
              description: `${_}, or empty for no end`,
              value: _,
              onChange: _,
            }),
            (0, _.jsx)(_._, {
              label: "Type",
              "aria-label": "Type",
              controlled: !0,
              rgOptions: _,
              selectedOption: _,
              onChange: _,
            }),
            (0, _.jsx)(_._, {
              accessibilityId: _,
              label: _,
              childrenLayout: "below",
              childrenContainerWidth: "max",
              children: (0, _.jsx)(_._, {
                className: _().TextArea,
                ..._,
                value: _,
                onChange: _,
                nMinHeight: 100,
              }),
            }),
          ],
        });
      }
      function _(_, _ = "") {
        return _(_)?.toString() ?? _;
      }
      function _(_) {
        const { nTotal: _, nFromNonSteamPurchase: _ } = _;
        return (0, _.jsxs)(_.Fragment, {
          children: [(0, _._)(_ - _), " [", (0, _._)(_), "]"],
        });
      }
      function _(_) {
        const { period: _ } = _;
        return _.strPersonaName
          ? _.strProfileURL
            ? (0, _.jsx)(_._, {
                href: _.strProfileURL,
                children: _.strPersonaName,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _.strPersonaName,
              })
          : (0, _.jsx)(_.Fragment, {
              children: "Automated",
            });
      }
      function _(_) {
        const { period: _, onEdit: _, onRemove: _ } = _,
          _ = _.useCallback(() => __webpack_require__(_), [_, _]),
          _ = _.useCallback(() => _(_), [_, _]);
        return (0, _.jsxs)("tr", {
          children: [
            (0, _.jsx)("td", {
              children: _.strID,
            }),
            (0, _.jsx)("td", {
              children: _(_.nStartDate),
            }),
            (0, _.jsx)("td", {
              children: _(_.nEndDate, "No End Set"),
            }),
            (0, _.jsx)("td", {
              children:
                ((_ = _.eType),
                _.find((_) => _.eType == _)?.strLabel ?? `Type ${_}`),
            }),
            (0, _.jsx)("td", {
              className: _().Comment,
              children: (0, _.jsx)(_._, {
                text: _.strInternalComment,
              }),
            }),
            (0, _.jsx)("td", {
              children: (0, _.jsx)(_, {
                period: _,
              }),
            }),
            (0, _.jsx)("td", {
              children: (0, _.jsx)(_, {
                nTotal: _.nRecommendationsUp,
                nFromNonSteamPurchase: _.nRecommendationsUpFromNonSteamPurchase,
              }),
            }),
            (0, _.jsx)("td", {
              children: (0, _.jsx)(_, {
                nTotal: _.nRecommendationsDown,
                nFromNonSteamPurchase:
                  _.nRecommendationsDownFromNonSteamPurchase,
              }),
            }),
            (0, _.jsx)("td", {
              children: (0, _.jsxs)("div", {
                className: _().Actions,
                children: [
                  (0, _.jsx)(_._, {
                    size: "1",
                    onClick: _,
                    children: "Edit",
                  }),
                  (0, _.jsx)(_._, {
                    size: "1",
                    color: "error",
                    onClick: _,
                    children: "Remove",
                  }),
                ],
              }),
            }),
          ],
        });
        var _;
      }
      function _(_) {
        const { appid: _, onClose: _ } = _,
          _ = (function (_) {
            return (0, _._)({
              queryKey: _(_),
              queryFn: () =>
                (0, _._)(
                  `${_._.STORE_BASE_URL}ajaxmanagereviewanomalies/${_}/`,
                  "ajaxmanagereviewanomalies",
                  {
                    sessionid: (0, _._)(),
                  },
                ),
              enabled: !!_,
            });
          })(_),
          _ = (function (_) {
            const _ = (0, _._)();
            return (0, _._)({
              mutationFn: async (_) => {
                const _ = {
                  sessionid: (0, _._)(),
                  action: _.action,
                };
                "add" != _.action && (_._ = _.strID),
                  "remove" != _.action &&
                    ((_.start_date = _.strStartDate),
                    (_.end_date = _.strEndDate),
                    (_.internal_comment = _.strInternalComment),
                    (_.type = _.eType)),
                  await (0, _._)(
                    `${_._.STORE_BASE_URL}handlereviewanomaly/${_}/`,
                    "handlereviewanomaly",
                    _,
                  );
              },
              onSuccess: () => {
                _.invalidateQueries({
                  queryKey: _(_),
                });
              },
            });
          })(_),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(""),
          _ = _.useCallback(() => _(null), []),
          _ = _.useCallback((_) => _(_), []),
          _ = _.useCallback((_) => _(_), []),
          _ = _.useCallback(() => _(void 0), []),
          _ = _.useCallback(() => _(void 0), []),
          _ = _.useCallback(() => _(""), []),
          _ = _.useCallback((_, _) => {
            _(
              `Failed to ${_} the review anomaly period. ${_ instanceof Error ? _.message : String(_)}`,
            );
          }, []),
          _ = _.useCallback(
            (_) => {
              const _ = _,
                _ = _
                  ? {
                      action: "update",
                      strID: _.strID,
                      ..._,
                    }
                  : {
                      action: "add",
                      ..._,
                    };
              _.mutate(_, {
                onError: (_) => _(_ ? "update" : "add", _),
              });
            },
            [_, _, _],
          ),
          _ = _.useCallback(() => {
            _ &&
              (_.mutate(
                {
                  action: "remove",
                  strID: _.strID,
                },
                {
                  onError: (_) => _("remove", _),
                },
              ),
              _(void 0));
          }, [_, _, _]),
          _ = _.data?.rgPeriods;
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)(_._, {
              bAlertDialog: !0,
              bAllowFullSize: !0,
              className: _().ReviewBombAdminDialog,
              strTitle: "Manage Review Anomalies",
              closeModal: _,
              onOK: _,
              onCancel: _,
              children: [
                _.isPending && (0, _.jsx)(_._, {}),
                _.isError &&
                  (0, _.jsx)("div", {
                    className: _().LoadError,
                    children:
                      "Could not load this app's review anomaly periods.",
                  }),
                _ &&
                  (0, _.jsxs)("div", {
                    className: _().Body,
                    children: [
                      (0, _.jsxs)("table", {
                        className: _().Periods,
                        children: [
                          (0, _.jsx)("thead", {
                            children: (0, _.jsxs)("tr", {
                              children: [
                                (0, _.jsx)("th", {
                                  children: "ID",
                                }),
                                (0, _.jsx)("th", {
                                  children: "Start",
                                }),
                                (0, _.jsx)("th", {
                                  children: "End",
                                }),
                                (0, _.jsx)("th", {
                                  children: "Type",
                                }),
                                (0, _.jsx)("th", {
                                  children: "Internal Comment",
                                }),
                                (0, _.jsx)("th", {
                                  children: "Account",
                                }),
                                (0, _.jsx)("th", {
                                  children: "Positive Reviews",
                                }),
                                (0, _.jsx)("th", {
                                  children: "Negative Reviews",
                                }),
                                (0, _.jsx)("th", {
                                  children: " ",
                                }),
                              ],
                            }),
                          }),
                          (0, _.jsx)("tbody", {
                            children: _.map((_) =>
                              (0, _.jsx)(
                                _,
                                {
                                  period: _,
                                  onEdit: _,
                                  onRemove: _,
                                },
                                _.strID,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().AddPeriod,
                        children: (0, _.jsx)(_._, {
                          variant: "vibrant",
                          onClick: _,
                          children: "Add New Review Bomb Period",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            (0, _.jsx)(_._, {
              active: void 0 !== _,
              children: (0, _.jsx)(_, {
                period: _ ?? void 0,
                onSubmit: _,
                onClose: _,
              }),
            }),
            (0, _.jsx)(_._, {
              active: !!_,
              children: (0, _.jsx)(_._, {
                bDestructiveWarning: !0,
                strTitle: "Remove Review Anomaly Period?",
                strDescription: `Are you sure you want to remove this review anomaly period? ID: ${_?.strID ?? ""}`,
                strOKButtonText: "Remove",
                closeModal: _,
                onOK: _,
                onCancel: _,
              }),
            }),
            (0, _.jsx)(_._, {
              active: !!_,
              children: (0, _.jsx)(_._, {
                strTitle: "Error",
                strDescription: _,
                closeModal: _,
                onOK: _,
              }),
            }),
          ],
        });
      }
    },
  },
]);

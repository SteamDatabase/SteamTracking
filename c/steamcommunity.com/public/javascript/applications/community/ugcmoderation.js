(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7102],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            UGCBanDialogOnGlobalVariable: () => _,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _._.Localize("#moderation_ugcban_default_note", (0, _._)(_));
        }
        function _() {
          const [_, _] = _.useState(null),
            [_, _] = _.useState(null),
            [_, _] = _.useState(!1),
            [_, _] = _.useState("");
          if (
            (_.useEffect(
              () => (
                (window.ShowUGCBanDialog = (_, _) => {
                  _(null),
                    _(!1),
                    _(""),
                    _({
                      cItems: _.length,
                      fnOnConfirm: _,
                    });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            !_)
          )
            return null;
          const _ = () => _(null),
            _ = () => {
              _ === null || !_.trim() || (_.fnOnConfirm(_, _.trim()), _());
            },
            _ = (_) => {
              _ !== null &&
                ((!_.trim() || (_ !== null && _ === _(_))) && _(_(_)), _(_)),
                _(!1);
            },
            _ = _.cItems > 1 ? `Ban ${_.cItems} items` : "Ban item";
          return (0, _.jsxs)(_._, {
            onClose: _,
            strTitle: _,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  reasons: (0, _._)(),
                  onSelect: _,
                }),
              !_ &&
                (0, _.jsxs)(_._, {
                  direction: "column",
                  gap: "2",
                  minWidth: "400px",
                  children: [
                    (0, _.jsxs)(_._, {
                      direction: "row",
                      gap: "2",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, _.jsx)(_._, {
                          children: "Select a reason:",
                        }),
                        (0, _.jsx)(_._, {
                          size: "1",
                          color: "dull",
                          onClick: () => _(!0),
                          children:
                            _ === null ? "Click to select..." : (0, _._)(_),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children: "Note:",
                    }),
                    (0, _.jsx)(_._, {
                      value: _,
                      onTextChange: (_) => _(_),
                      maxLength: 256,
                    }),
                    (0, _.jsxs)(_._, {
                      direction: "row",
                      gap: "2",
                      justify: "end",
                      marginTop: "3",
                      children: [
                        (0, _.jsx)(_._, {
                          onClick: _,
                          color: "dull",
                          children: "Cancel",
                        }),
                        (0, _.jsx)(_._, {
                          disabled: _ === null || !_.trim(),
                          onClick: _,
                          children: "Ban",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            UGCModerationSubjectPanel: () => _,
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
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return !!_ && _ !== _;
        }
        function _(_) {
          return _(_.status)
            ? (0, _.jsxs)("span", {
                className: _()(_().Pill, _.className),
                children: [_.label, _.status === _ && "?"],
              })
            : null;
        }
        function _(_) {
          return (0, _.jsx)(_, {
            status: _.status,
            className: _().TerrorismPill,
            label: "Terrorism",
          });
        }
        function _(_) {
          return (0, _.jsx)(_, {
            status: _.status,
            className: _().CSAMPill,
            label: "CSAM",
          });
        }
        function _(_) {
          return (0, _.jsx)(_, {
            status: _.status,
            className: _().ViolencePill,
            label: "Violent threat",
          });
        }
        function _(_) {
          const { subject: _ } = _;
          return !_(_.terrorism_status) &&
            !_(_.csam_status) &&
            !_(_.credible_threat_of_violence_status)
            ? null
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(_, {
                    status: _.terrorism_status,
                  }),
                  (0, _.jsx)(_, {
                    status: _.csam_status,
                  }),
                  (0, _.jsx)(_, {
                    status: _.credible_threat_of_violence_status,
                  }),
                ],
              });
        }
        function _(_) {
          return {
            subject_type: _._,
            published_file_id: _,
          };
        }
        function _(_) {
          return (0, _._)(_(_));
        }
        function _(_) {
          var _, _, _;
          const _ = (0, _._)(_(_.publishedFileID)),
            [_, _] = (0, _.useState)(!1);
          if (_.isPending) return null;
          if (_.isError)
            return (0, _.jsx)(_._, {
              children: _._.Localize("#ugcsubjectpanel_error"),
            });
          const _ = (_ = _.data.subjects) == null ? void 0 : _[0];
          return _
            ? (0, _.jsxs)(_._, {
                direction: "column",
                gap: "1",
                children: [
                  (0, _.jsx)(_._, {
                    children: (0, _._)(_),
                  }),
                  (0, _.jsx)(_, {
                    subject: _,
                  }),
                  (0, _.jsx)(_._, {
                    children: _._.Localize(
                      "#forumsubjectlist_subjectreportsummary",
                      (_ = _.unresolved_report_count) != null ? _ : 0,
                      (_ = _.unresolved_dispute_count) != null ? _ : 0,
                    ),
                  }),
                  (0, _.jsxs)(_._, {
                    direction: "row",
                    gap: "2",
                    children: [
                      (0, _.jsx)(_._, {
                        size: "1",
                        color: "dull",
                        onClick: () => _(!0),
                        children: _._.Localize("#ugcsubjectpanel_history"),
                      }),
                      (0, _.jsx)(_, {
                        subject: _,
                      }),
                      (0, _.jsx)(_, {
                        subject: _,
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      subject: _,
                      onClose: () => _(!1),
                    }),
                ],
              })
            : null;
        }
        function _(_) {
          const { subject: _ } = _,
            _ = (0, _._)(_.reported_content_id ? [_.reported_content_id] : []),
            _ =
              !!_.assigned_moderator_steamid &&
              _.assigned_moderator_steamid !== "0";
          return !_.reported_content_id ||
            !_ ||
            _.assigned_moderator_steamid !== _._.steamid
            ? null
            : (0, _.jsx)(_._, {
                size: "1",
                color: "dull",
                loading: _.isPending,
                onClick: () => _.mutate(),
                children: _._.Localize("#ugcsubjectpanel_release"),
              });
        }
        function _(_) {
          const { subject: _ } = _,
            [_, _] = (0, _.useState)(!1);
          return !_.reported_content_id || _.resolved !== _._
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    size: "1",
                    color: "dull",
                    onClick: () => _(!0),
                    children: _._.Localize("#moderation_escalation_escalate"),
                  }),
                  _ &&
                    (0, _.jsx)(_._, {
                      onClose: () => _(!1),
                      strTitle: _._.Localize("#moderation_escalation_escalate"),
                      children: (0, _.jsx)(_._, {
                        reportedContentID: _.reported_content_id,
                        onClose: () => _(!1),
                      }),
                    }),
                ],
              });
        }
        function _(_) {
          const { subject: _, onClose: _ } = _,
            [_, _] = (0, _.useState)("reports");
          return (0, _.jsx)(_._, {
            onClose: _,
            strTitle: _._.Localize("#ugcsubjectpanel_dialogtitle"),
            children: (0, _.jsxs)(_._, {
              direction: "column",
              gap: "2",
              children: [
                (0, _.jsxs)(_._.Root, {
                  value: _,
                  onValueChange: (_) => _(_),
                  children: [
                    (0, _.jsx)(_._.Item, {
                      value: "reports",
                      children: _._.Localize("#ugcsubjectpanel_reports"),
                    }),
                    (0, _.jsx)(_._.Item, {
                      value: "history",
                      children: _._.Localize("#ugcsubjectpanel_history"),
                    }),
                  ],
                }),
                _ === "reports" &&
                  (0, _.jsx)(_._, {
                    subject: _,
                  }),
                _ === "history" &&
                  (0, _.jsx)(_._, {
                    reportedContentID: _.reported_content_id,
                  }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { publishedFileID: _ } = _,
            _ = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              const _ = (_) => {
                var _;
                ((_ = _.detail) == null ? void 0 : _.publishedFileID) == _ &&
                  _.invalidateQueries({
                    queryKey: _(_),
                  });
              };
              return (
                window.addEventListener("ugc-moderation-resolved", _),
                () => window.removeEventListener("ugc-moderation-resolved", _)
              );
            }, [_, _]),
            (0, _.jsx)(_, {
              publishedFileID: _,
            })
          );
        }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)(null);
        function _(_) {
          const {
              variant: _,
              radius: _,
              size: _,
              status: _,
              color: _,
              children: _,
              value: _,
              onValueChange: _,
            } = _,
            [_, _] = (0, _.useState)({}),
            _ = (0, _.useCallback)(
              (_, _) =>
                _((_) => ({
                  ..._,
                  [_]: _,
                })),
              [],
            ),
            _ = (0, _.useCallback)(
              (_, _) =>
                _((_) => {
                  const _ = {
                    ..._,
                  };
                  return _[_] === _ && delete _[_], _;
                }),
              [],
            ),
            _ = (_) => {
              let _ = 0;
              switch (_.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  _ = 1;
                  break;
                case "ArrowLeft":
                  _ = -1;
                  break;
              }
              if (_) {
                const _ = Array.from(Object.values(_)).sort(_);
                let _;
                if (_ === null) _ = _ > 0 ? 0 : _.length - 1;
                else {
                  const _ = _[_],
                    _ = _.findIndex((_) => _ === _);
                  (0, _._)(
                    typeof _ == "number",
                    "Could not find current segmented value position",
                  ),
                    (_ = _ + _);
                }
                const _ = _[_ < 0 ? _.length + _ : _ % _.length],
                  _ = Object.keys(_).find((_) => _[_] === _);
                typeof _ != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (_(_), _.stopPropagation(), _.preventDefault());
              }
            },
            _ = (0, _._)("SegmentedControl", _),
            _ = (0, _.useMemo)(
              () => ({
                value: _,
                onValueChange: _,
                register: _,
                unregister: _,
                radius: _,
                size: _,
              }),
              [_, _, _, _, _, _],
            );
          return (0, _.jsx)(_._, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: _,
            radius: _,
            size: _,
            status: _,
            className: _()(_.SegmentedControlBox, _[`Variant-${_}`]),
            tabIndex: 0,
            onKeyDown: _,
            children: (0, _.jsx)(_.Provider, {
              value: _,
              children: (0, _.jsxs)(_._, {
                className: _.SegmentedControl,
                style: {
                  "--outer-radius": `var(--radius-${_})`,
                },
                children: [
                  _,
                  _ !== null &&
                    (0, _.jsx)(_, {
                      radius: _,
                      color: _,
                    }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const { value: _, children: _, disabled: _ } = _,
            _ = (0, _.useContext)(_),
            [_, _] = (0, _.useState)(),
            { register: _, unregister: _ } = _ || {};
          if (
            ((0, _.useEffect)(
              () => (!_ || !_ || !_ ? () => {} : (_(_, _), () => _(_, _))),
              [_, _, _, _],
            ),
            !_)
          )
            return null;
          const { value: _, onValueChange: _, radius: _, size: _ } = _,
            _ = _ === _,
            _ = (_) => {
              _.stopPropagation(), _.preventDefault(), !(_ || _) && _(_);
            },
            _ = _ === void 0 ? _ : _;
          return (0, _.jsx)(_._, {
            justify: "center",
            align: "center",
            ref: _,
            onClick: _,
            "data-selected": _ ? "true" : "false",
            className: _()(_.Item, _ && _[`Size-${_}`], _ ? _.disabled : ""),
            children: _,
          });
        }
        function _(_) {
          const { options: _, getOptionLabel: _ = (_) => _, ..._ } = _;
          return (0, _.jsx)(_.Root, {
            ..._,
            children: _.map((_) =>
              (0, _.jsx)(
                _.Item,
                {
                  value: _,
                  children: _(_),
                },
                _,
              ),
            ),
          });
        }
        (_.Item = _), (_.Root = _);
        function _(_) {
          const { radius: _, color: _ } = _;
          return (0, _.jsx)(_._, {
            className: _.IndicatorPosition,
            children: (0, _.jsx)("div", {
              className: _.Indicator,
              "data-accent-color": _,
            }),
          });
        }
        function _(_, _) {
          const _ = _.compareDocumentPosition(_);
          return _ & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : _ & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        }
      },
      chunkid: (module) => {
        module.exports = {
          SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
          Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
          SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
          IndicatorPosition: "_1Dgxrv7wtUW1EViSgrdMlA",
          Item: "_2aNlsjcdOdHOtP8uACA3bM",
          "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
          "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
          disabled: "_3gVhaCZ4k3QSnF9WhRZk5m",
          "Variant-basic": "d2NNa31iY_ztalFCMja9O",
          "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
          "Variant-inset-glass": "_1gVVovvLBjwCxSH4wWUabt",
          "Variant-dim": "_3qc1Re1q3AH_JYfN49uj8r",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
          TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
          CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
          ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
        };
      },
    },
  ]);
})();

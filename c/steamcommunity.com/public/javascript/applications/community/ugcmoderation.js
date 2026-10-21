(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [37102],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 73735, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14971, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 37236, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 66898, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 19078, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14875, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 46073, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17822, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 53951, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 71541, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 46145, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 5896, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 23187, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 80081, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 41080, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 99770, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 24306, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 87049, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 70269, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 19226, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 70554, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94900, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 68852, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 98574, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94951, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 43649, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14416, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17324, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 18073, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17153, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 71147, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 1544, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_);
        var _ = __webpack_require__("chunkid");
        const _ = [
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_None",
            },
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_Copyright",
              reasonToken: "#Workshop_ItemAdmin_Ban_Preset_CopyrightReason",
              eModerationReason: _._,
            },
          ],
          _ = [
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_None",
            },
            {
              labelToken: "#Workshop_ItemAdmin_Ban_Preset_NoCounterNotice",
              reasonToken:
                "#Workshop_ItemAdmin_Ban_Preset_NoCounterNoticeReason",
            },
          ],
          _ = ["copyright", "other"],
          _ = ["copyright", "malware", "other"],
          _ = {
            copyright: "#Workshop_ItemAdmin_Ban_Preset_Copyright",
            malware: "#Workshop_ItemAdmin_Ban_Category_Malware",
            other: "#Workshop_ItemAdmin_Ban_Category_Other",
          };
        function _(_) {
          return _._.Localize("#moderation_ugcban_default_note", (0, _._)(_));
        }
        function _(_) {
          const {
              bBanned: _,
              bIsSupport: _,
              bWorkshopContent: _,
              onConfirm: _,
              onError: _,
              onClose: _,
            } = _,
            _ = _ && !_,
            _ = !_ && !_,
            [_, _] = (0, _.useState)(_.strBanReason),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(!1),
            _ = _ ? _ : _,
            _ = _.Localize(
              _
                ? "#Workshop_ItemAdmin_Ban_Unset"
                : "#Workshop_ItemAdmin_Ban_Set",
            ),
            _ =
              !_ &&
              _.trim().length > 1 &&
              !(_ && _ === null) &&
              !(_ && _ && _ === null),
            _ = () => {
              _(!0);
              const _ = _ == "malware" ? _._ : (_ ?? _._);
              Promise.resolve(_(_.trim(), _)).then(_, (_) => {
                _(!1), _?.(_);
              });
            },
            _ = (_) => {
              _ !== null &&
                ((!_.trim() || (_ !== null && _ === _(_))) && _(_(_)), _(_)),
                _(!1);
            },
            _ = (_) => {
              _(_.reasonToken ? _.Localize(_.reasonToken) : ""),
                _.eModerationReason !== void 0 &&
                  _ === null &&
                  _(_.eModerationReason);
            },
            _ = (_) => {
              const _ = _.Localize(
                "#Workshop_ItemAdmin_Ban_Preset_CopyrightReason",
              );
              _ == "copyright" && _.trim().length === 0
                ? _(_)
                : _ === _ && _(""),
                _(_);
            };
          return _
            ? (0, _.jsx)(_._, {
                className: _.BanDialog,
                strTitle: _,
                onClose: _,
                children: (0, _.jsx)(_._, {
                  reasons: (0, _._)(),
                  onSelect: _,
                }),
              })
            : (0, _.jsxs)(_._, {
                className: _.BanDialog,
                strTitle: _,
                onClose: _,
                children: [
                  _ &&
                    (0, _.jsxs)(_._, {
                      direction: "column",
                      gap: "2",
                      marginBottom: "2",
                      children: [
                        _ &&
                          (0, _.jsxs)(_._, {
                            direction: "row",
                            gap: "2",
                            align: "center",
                            children: [
                              (0, _.jsx)(_._, {
                                children: _.Localize(
                                  "#Workshop_ItemAdmin_Ban_Reason",
                                ),
                              }),
                              (0, _.jsx)(_._, {
                                size: "1",
                                color: "dull",
                                onClick: () => _(!0),
                                children:
                                  _ === null
                                    ? _.Localize(
                                        "#Workshop_ItemAdmin_Ban_Reason_Unselected",
                                      )
                                    : (0, _._)(_),
                              }),
                            ],
                          }),
                        (0, _.jsxs)(_._, {
                          direction: "row",
                          gap: "2",
                          align: "center",
                          children: [
                            (0, _.jsx)(_._, {
                              children: _.Localize(
                                "#Workshop_ItemAdmin_Ban_Presets",
                              ),
                            }),
                            (0, _.jsx)(_._, {
                              options: _,
                              getOptionLabel: (_) => _.Localize(_.labelToken),
                              selectedValue: null,
                              placeholder: _.Localize(_[0].labelToken),
                              onSelectionChange: _,
                            }),
                          ],
                        }),
                      ],
                    }),
                  _ &&
                    (0, _.jsxs)(_._, {
                      direction: "column",
                      gap: "2",
                      marginBottom: "2",
                      children: [
                        (0, _.jsxs)(_._, {
                          direction: "row",
                          gap: "2",
                          align: "center",
                          children: [
                            (0, _.jsx)(_._, {
                              children: _.Localize(
                                "#Workshop_ItemAdmin_Ban_Reason",
                              ),
                            }),
                            (0, _.jsx)(_._, {
                              options: _ ? _ : _,
                              getOptionLabel: (_) => _.Localize(_[_]),
                              value: _,
                              onValueChange: _,
                            }),
                          ],
                        }),
                        _ == "malware" &&
                          (0, _.jsx)(_._, {
                            children: _.Localize(
                              "#Workshop_ItemAdmin_Ban_Category_MalwareDesc",
                            ),
                          }),
                      ],
                    }),
                  (0, _.jsx)(_._, {
                    value: _,
                    onTextChange: _,
                    maxLength: 256,
                    rows: 6,
                    resize: "vertical",
                  }),
                  (0, _.jsxs)(_._, {
                    justify: "end",
                    gap: "3",
                    align: "center",
                    marginTop: "3",
                    children: [
                      (0, _.jsx)(_._, {
                        disabled: !_,
                        onClick: _,
                        autoFocus: !0,
                        children: _._.Localize("#Button_OK"),
                      }),
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _.jsx)("span", {
                          children: _._.Localize("#Button_Cancel"),
                        }),
                      }),
                    ],
                  }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid");
        function _() {
          const [_, _] = _.useState(null);
          return (
            _.useEffect(
              () => (
                (window.ShowUGCBanDialog = (_, _) => {
                  _({
                    ..._,
                    key: Date.now(),
                    fnOnConfirm: _,
                  });
                }),
                () => {
                  delete window.ShowUGCBanDialog;
                }
              ),
              [],
            ),
            _
              ? (0, _.jsx)(
                  _,
                  {
                    bBanned: !1,
                    strBanReason: "",
                    bIsSupport: !!_._.is_support,
                    bWorkshopContent: !!_.bWorkshopContent,
                    onConfirm: (_, _) => _.fnOnConfirm(_, _),
                    onClose: () => _(null),
                  },
                  _.key,
                )
              : null
          );
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return !!_ && _ !== _;
        }
        function _(_) {
          return (
            _.subject_type === _._ &&
            _.coordinates?.ugc_content_type === 16 &&
            !!_.reports?.some((_) => _.report_reason === _._)
          );
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
        function _() {
          return (0, _.jsx)("span", {
            className: _()(_().Pill, _().MalwarePill),
            children: "Malware?",
          });
        }
        function _(_) {
          const { subject: _ } = _,
            _ = _(_);
          return !_(_.terrorism_status) &&
            !_(_.csam_status) &&
            !_(_.credible_threat_of_violence_status) &&
            !_
            ? null
            : (0, _.jsxs)(_._, {
                wrap: "wrap",
                gap: "1",
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
                  _ && (0, _.jsx)(_, {}),
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
          const _ = (0, _._)(_(_.publishedFileID)),
            [_, _] = (0, _.useState)(!1);
          if (_.isPending) return null;
          if (_.isError)
            return (0, _.jsx)(_._, {
              children: _._.Localize("#ugcsubjectpanel_error"),
            });
          const _ = _.data.subjects?.[0];
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
                      _.unresolved_report_count ?? 0,
                      _.unresolved_dispute_count ?? 0,
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
          return !_.reported_content_id || !(0, _._)(_)
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
                        eCurrentLevel: _.required_moderator_level,
                        onClose: () => _(!1),
                      }),
                    }),
                ],
              });
        }
        function _(_) {
          const { subject: _ } = _,
            _ = (0, _._)();
          return !!_.reported_content_id &&
            (_.resolved ?? _._) !== _._ &&
            ((_.unresolved_report_count ?? 0) > 0 ||
              (_.unresolved_dispute_count ?? 0) > 0)
            ? (0, _.jsx)(_._, {
                size: "1",
                color: "dull",
                loading: _.isPending,
                onClick: () =>
                  _.mutate({
                    reportedContentID: _.reported_content_id,
                  }),
                children: _._.Localize("#moderation_actions_sustain_short"),
              })
            : null;
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
                _.detail?.publishedFileID == _ &&
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
      chunkid: (module) => {
        module.exports = {
          Pill: "_3EvT6MP5NCj5Ptsctv6H3A",
          TerrorismPill: "_2JGuTxE_EPq5pzUfrneLF-",
          CSAMPill: "_2GfEACqYfP_xZgMYtfZK9-",
          ViolencePill: "_2bDmZI3RxXA50zYGByOynN",
          MalwarePill: "_3_g8g_pUDJsmJaS1K0aRVZ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BanDialog: "_2S6JKTLe0bTYcB5bC8nT3-",
        };
      },
    },
  ]);
})();

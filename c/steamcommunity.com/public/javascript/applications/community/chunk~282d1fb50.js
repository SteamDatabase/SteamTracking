(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [97062],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            ReportedSubjectList: () => _,
            default: () => _,
            useCommentThread: () => _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)({
              subject_type: _._,
              topic: _.gidTopic,
            }),
            _ = _(_.clanSteamID, _._, _.gidForum, _.gidTopic);
          return (0, _.jsx)(_, {
            subjectType: _._,
            subjectGroupQuery: _,
            commentThreadQuery: _,
          });
        }
        function _(_) {
          var _, _, _;
          const { subjectGroupQuery: _ } = _,
            _ = "floatingforumreportedsubjectslist",
            [_, _] = (0, _.useState)(() => localStorage[_] !== void 0);
          if (
            ((0, _.useMemo)(() => {
              var _, _;
              (_ = (_ = _.data) == null ? void 0 : _.subjects) == null ||
                _.sort(_);
            }, [(_ = _.data) == null ? void 0 : _.subjects]),
            !_.isSuccess ||
              !((_ = _.data) != null && _.subjects) ||
              _.data.subjects.length === 0)
          )
            return null;
          const _ = () => {
            _ ? localStorage.removeItem(_) : localStorage.setItem(_, "1"),
              _(!_);
          };
          let _ = 0;
          return (0, _.jsx)("div", {
            className: _
              ? _.FloatingSubjectListCtn
              : (_ = _.inlineClassNames) != null
                ? _
                : "",
            children: (0, _.jsx)("div", {
              className: "rightbox",
              children: (0, _.jsxs)("div", {
                className: "content",
                children: [
                  (0, _.jsx)("div", {
                    className: "rightbox_list_header",
                    children: (0, _.jsxs)("span", {
                      className: _.SplitHeader,
                      children: [
                        (0, _.jsx)("div", {
                          className: "title",
                          children: _._.Localize("#reportedsubjectlist_header"),
                        }),
                        (0, _.jsx)("button", {
                          className: _.PopoutButton,
                          onClick: _,
                          children: (0, _.jsx)(_.YNO, {}),
                        }),
                      ],
                    }),
                  }),
                  _.isError &&
                    (0, _.jsx)("div", {
                      className: "moderatorToolLink",
                      children: "Error",
                    }),
                  _.isLoading && (0, _.jsx)(_._, {}),
                  _.isSuccess &&
                    (0, _.jsx)("div", {
                      style: {
                        maxHeight: "20em",
                        overflowY: "scroll",
                      },
                      children: _.data.subjects.map((_) =>
                        _.coordinates
                          ? (0, _.jsx)(
                              _,
                              {
                                subject: _,
                                commentThreadQuery: _.commentThreadQuery,
                              },
                              _.reported_content_id,
                            )
                          : (0, _.jsx)(
                              "div",
                              {
                                className: (0, _._)(
                                  "moderatorToolLink",
                                  _.ReportedSubjectRow,
                                ),
                                children: "Bug - inform Valve",
                              },
                              `bad-${_++}`,
                            ),
                      ),
                    }),
                ],
              }),
            }),
          });
        }
        function _(_, _) {
          if (_.length !== _.length) return _.length - _.length;
          for (let _ = 0; _ < _.length; _++) {
            const _ = _.charCodeAt(_),
              _ = _.charCodeAt(_);
            if (_ !== _) return _ - _;
          }
          return 0;
        }
        function _(_, _) {
          var _, _, _, _;
          const _ =
            _.unresolved_dispute_count + _.unresolved_report_count > 0 ? 1 : 0;
          return (
            (_.unresolved_dispute_count + _.unresolved_report_count > 0
              ? 1
              : 0) - _ ||
            _.required_moderator_level - _.required_moderator_level ||
            _(
              (_ = (_ = _.coordinates) == null ? void 0 : _.comment) != null
                ? _
                : "",
              (_ = (_ = _.coordinates) == null ? void 0 : _.comment) != null
                ? _
                : "",
            )
          );
        }
        function _(_) {
          for (;;) {
            const _ = _.indexOf("[/quote]");
            if (_ === -1) break;
            _ = _.slice(_ + 8);
          }
          return _.slice(0, 35);
        }
        function _(_) {
          var _, _, _, _;
          const { subject: _, commentThreadQuery: _ } = _,
            _ = (_ = _.coordinates) == null ? void 0 : _.comment;
          let _ = null;
          _ === _._ && (_ = "Topic");
          let _ = "#NA";
          if (_ === null && _.isSuccess) {
            let _ = 1;
            for (const _ of (_ = _.data.comments) != null ? _ : []) {
              if (_.gidcomment === _) {
                (_ = _(_.text)), (_ = `#${_}`);
                break;
              }
              _++;
            }
          }
          if (_ === null && _.isSuccess) {
            if (_.subject_type === _._) _ = "[Deleted]";
            else
              for (const _ of (_ = _.data.deleted_comments) != null ? _ : [])
                if (_.gidcomment === _) {
                  _ = _(_.text);
                  break;
                }
          }
          _ === null && (_ = "[Comment]");
          let _;
          _.subject_type === _._
            ? (_ =
                _ === _._
                  ? `#forum_op_${((_ = _.coordinates)) == null ? void 0 : _.topic}`
                  : `#c${_}`)
            : _.subject_type === _._ && (_ = `#comment_${_}`);
          const _ =
              _.unresolved_dispute_count > 0 || _.unresolved_report_count > 0,
            _ = _.required_moderator_level === _._,
            _ = _.required_moderator_level === _._;
          return (0, _.jsxs)("div", {
            className: (0, _._)("moderatorToolLink", _.ReportedSubjectRow),
            children: [
              (0, _.jsxs)("a", {
                href: _,
                children: [
                  _ &&
                    !_ &&
                    !_ &&
                    (0, _.jsx)("img", {
                      className: _.FlagIcon,
                      src: `${_._.COMMUNITY_BASE_URL}public/images/skin_1/notification_icon_flag.png`,
                    }),
                  !_ &&
                    (0, _.jsx)("span", {
                      className: _.FlagIcon,
                      children: "\xA0",
                    }),
                  _ &&
                    _ &&
                    (0, _.jsx)("span", {
                      className: (0, _._)(_.FlagIcon, _.ValveOnlyFlag),
                      children: "VO",
                    }),
                  _ &&
                    _ &&
                    (0, _.jsx)("span", {
                      className: (0, _._)(_.FlagIcon, _.SupervisorFlag),
                      children: "\u25B2",
                    }),
                  "\xA0",
                  _,
                  "\xA0",
                  _,
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.SubjectReportSummary,
                children: [
                  "\xA0",
                  _._.Localize(
                    "#forumsubjectlist_subjectreportsummary",
                    _.unresolved_report_count,
                    _.unresolved_dispute_count,
                  ),
                ],
              }),
            ],
          });
        }
        function _(_, _, _, _) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: ["comment_thread", _, _, _, _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              return (
                _.Body().set_steamid(_),
                _.Body().set_comment_thread_type(_),
                _ !== -1 && _.Body().set_gidfeature(_),
                _ !== -1 && _.Body().set_gidfeature2(_),
                _.Body().set_include_deleted(!0),
                _.Body().set_oldest_first(!0),
                (await _._.GetCommentThread(_, _)).Body().toObject()
              );
            },
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "get_reported_content",
          _ = "get_reported_content_by_id",
          _ = "get_reported_content_audit_log",
          _ = (_) => [_, JSON.stringify(_)],
          _ = (_) => [_, _],
          _ = (_) => [_, _];
        async function _(_, _) {
          return Promise.all([
            _.invalidateQueries({
              queryKey: [_],
              exact: !1,
            }),
            _.invalidateQueries({
              queryKey: _(_),
            }),
            _.invalidateQueries({
              queryKey: _(_),
            }),
          ]);
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            enabled: (0, _._)(_),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_coordinates(_._.fromObject(_));
              const _ = await _._.GetReportedContent(_, _);
              if (!_.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + _.GetEResult(),
                );
              return _.Body().toObject();
            },
          };
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              _.Body().set_reported_content_id(_);
              const _ = await ContentModerationService.GetReportedContentByID(
                _,
                _,
              );
              if (!_.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    _.GetEResult(),
                );
              return _.Body().toObject();
            },
          };
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (!_) return;
              const _ = _._.Init(_._);
              return (
                _.Body().set_reported_content_id(_),
                (await _._.GetAuditLogByID(_, _)).Body().toObject()
              );
            },
          };
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_reported_content_id(_),
                _.Body().set_new_level(_.eNewLevel),
                _.eReason && _.Body().set_reason(_.eReason),
                _.strNote && _.Body().set_note(_.strNote);
              const _ = await _._.EscalateSubjectByID(_, _);
              if (_.GetEResult() !== _._)
                throw new Error(`Failed to escalate subject: ${_.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                _(_, _),
                _.invalidateQueries({
                  queryKey: ["get_claimed"],
                }),
                _.invalidateQueries({
                  queryKey: ["get_subject_overview"],
                }),
              ]);
            },
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_reported_content_id(_.reportedContentID);
              const _ = await _._.SustainModerationByID(_, _);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
            },
            onSuccess: async (_, _) => {
              await _(_, _.reportedContentID),
                await _.invalidateQueries({
                  queryKey: ["get_claimed"],
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationKey: ["release_subject", ..._],
            mutationFn: async () => {
              const _ = _._.Init(_._);
              for (const _ of _) {
                const _ = new _._();
                _.set_reported_content_id(_),
                  _.Body().add_subjects_to_release(_);
              }
              const _ = await _._.ReleaseSubjects(_, _);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                _.invalidateQueries({
                  queryKey: ["get_claimed"],
                }),
                _.invalidateQueries({
                  queryKey: ["get_subject_overview"],
                }),
                ..._.map((_) => _(_, _)),
              ]);
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_reported_content_id(_), _.Body().set_details(_);
              const _ = await _._.OwnerDisputeModeration(_, _);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
            },
            onSuccess: async () => {
              await _(_, _);
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_reported_content_id(_),
                _.Body().set_owner_dispute_details(_);
              const _ = await _._.UpdateSubjectByID(_, _);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
            },
            onSuccess: async () => {
              await _(_, _);
            },
          });
        }
        function _(_, _) {
          return {
            queryKey: ["reporterstats", _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_);
              const _ = await _._.GetReporterStats(_, _);
              if (!_.BSuccess()) throw new Error("EResult " + _.GetEResult());
              return _.Body().toObject();
            },
          };
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_comment_thread_id(_),
                _.Body().set_gidcomment(_),
                _.Body().set_reason(_.reason),
                _.Body().set_note(_.message);
              for (const _ of _.sanctions) {
                const _ = new _._();
                _.set_sanction(_.sanction),
                  _.days && _.set_days(_.days),
                  _.Body().add_sanctions(_);
              }
              const _ = await _._.SanctionComment(_, _);
              if (!_.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${_.GetEResult()} (${_.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await _.invalidateQueries({
                queryKey: ["get_claimed"],
              });
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_comment_thread_id(_),
                _.Body().set_gidcomment(_),
                _.Body().set_report_action(_._._),
                _.Body().set_resolve(!0),
                await _._.UpdateCommentReportState(_, _);
            },
            onSuccess: async () => {
              await _.invalidateQueries({
                queryKey: ["get_claimed"],
              });
            },
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21;
      },
      chunkid: (module) => {
        module.exports = {
          FloatingSubjectListCtn: "_2Z4y2kIderxN4_alSJYYh8",
          SplitHeader: "_2B88BA7YbropfCtjJdn1yD",
          PopoutButton: "_3cujMozXvwTlTehPQtPJ7F",
          ReportedSubjectRow: "_32u0ZJiVZP0gaSLs5sdhUy",
          SubjectReportSummary: "_9Ygy5gJ500tkoDj_G546U",
          FlagIcon: "_2DMl8RTVaYtsJarLDt3hqF",
          ValveOnlyFlag: "-K7dp4xj1MBriG1APh1f4",
          SupervisorFlag: "_32OXEg2kS_2-BTKOec40kP",
        };
      },
    },
  ]);
})();

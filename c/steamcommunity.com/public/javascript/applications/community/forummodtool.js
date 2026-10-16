(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [30140],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(null),
            _ = (_) => (
              _(!0),
              _.stopPropagation(),
              navigator.clipboard.writeText(_.text),
              setTimeout(() => _(!1), 1e3),
              !1
            );
          return (0, _.jsx)("span", {
            children: (0, _.jsxs)("button", {
              onClick: _,
              className: (0, _._)(
                _.CopyButton,
                _.size === "large" ? _.BigButton : _.NormalButton,
              ),
              ref: _,
              title: _.text,
              children: [
                _ &&
                  _.current &&
                  (0, _.jsx)(_._, {
                    target: _.current,
                    direction: "bottom",
                    children: (0, _.jsx)("div", {
                      className: _.CopiedNotice,
                      children: "Copied.",
                    }),
                  }),
                (0, _.jsx)(_.cKB, {}),
              ],
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
            useAcquitForumComment: () => _,
            useSanctionForumComment: () => _,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          var _, _;
          const _ = (
              (_ =
                (_ = (0, _._)({
                  subject_type: _._,
                  topic: _.topicId,
                }).data) == null
                  ? void 0
                  : _.subjects) != null
                ? _
                : []
            ).find((_) => {
              var _;
              return (
                ((_ = _.coordinates) == null ? void 0 : _.comment) ===
                _.subjectId
              );
            }),
            _ = _(
              _.clanSteamId,
              _.forumId,
              _.topicId,
              _.subjectId,
              _ == null ? void 0 : _.reported_content_id,
            ),
            _ = _(
              _.clanSteamId,
              _.forumId,
              _.topicId,
              _.subjectId,
              _ == null ? void 0 : _.reported_content_id,
            );
          return (0, _.jsx)(_._, {
            sanctionMutation: _,
            acquitMutation: _,
            subject: _,
            eSubjectType: _._,
            gidComment: _.subjectId,
            authorSteamID: _.authorSteamId,
            clanSteamID: _.clanSteamId,
            children: (0, _.jsx)(_, {
              ..._,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)("table", {
            children: (0, _.jsxs)("tbody", {
              children: [
                (0, _.jsxs)("tr", {
                  children: [
                    (0, _.jsx)("td", {
                      children: "Clan SteamID:",
                    }),
                    (0, _.jsxs)("td", {
                      children: [
                        _.clanSteamId,
                        " ",
                        (0, _.jsx)(_._, {
                          text: _.clanSteamId,
                          size: "small",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)("tr", {
                  children: [
                    (0, _.jsx)("td", {
                      children: "Forum GID:",
                    }),
                    (0, _.jsxs)("td", {
                      children: [
                        _.forumId,
                        " ",
                        (0, _.jsx)(_._, {
                          text: _.forumId,
                          size: "small",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)("tr", {
                  children: [
                    (0, _.jsx)("td", {
                      children: "Topic GID:",
                    }),
                    (0, _.jsxs)("td", {
                      children: [
                        _.topicId,
                        " ",
                        (0, _.jsx)(_._, {
                          text: _.topicId,
                          size: "small",
                        }),
                      ],
                    }),
                  ],
                }),
                _.subjectId !== _._ &&
                  (0, _.jsxs)("tr", {
                    children: [
                      (0, _.jsx)("td", {
                        children: "Comment GID:",
                      }),
                      (0, _.jsxs)("td", {
                        children: [
                          _.subjectId,
                          " ",
                          (0, _.jsx)(_._, {
                            text: _.subjectId,
                            size: "small",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function _(_, _, _, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_gidforum(_),
                _.Body().set_gidtopic(_),
                _.Body().set_gidpost(_);
              const _ = await _._.ResolveReportedPost(_, _);
              if (!_.BSuccess())
                throw new Error(
                  "Failed to acquit forum comment: " + _.GetEMsg(),
                );
            },
            onSuccess: async (_) => {
              await (0, _._)(_, _);
            },
          });
        }
        function _(_, _, _, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_gidforum(_),
                _.Body().set_gidtopic(_),
                _.Body().set_gidpost(_),
                _.Body().set_reason(_.reason),
                _.Body().set_note(_.message);
              for (const _ of _.sanctions) {
                const _ = new _._();
                _.set_sanction(_.sanction),
                  _.days !== void 0 && _.set_days(_.days),
                  _.Body().add_sanctions(_);
              }
              const _ = await _._.SanctionReportedPost(_, _);
              if (!_.BSuccess())
                throw new Error(
                  "Failed to sanction forum comment: (" +
                    _.GetEResult() +
                    ") " +
                    _.GetErrorMessage(),
                );
            },
            onSuccess: async (_) => {
              await (0, _._)(_, _);
            },
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
          CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
          BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
          NormalButton: "TLP9bd53vhNfYhUroF4Np",
        };
      },
    },
  ]);
})();

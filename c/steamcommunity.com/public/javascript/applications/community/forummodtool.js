(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [140],
  {
    chunkid: (module) => {
      module.exports = {
        CopyButton: "_2IGMSIG6hbIQPg-K1KoY-W",
        CopiedNotice: "_1G568MNm7rDJNLFkzReXEc",
        BigButton: "_3QFnwUCRHpPU2YWoxMv2b8",
        NormalButton: "TLP9bd53vhNfYhUroF4Np",
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const [_, _] = (0, _.useState)(!1),
          _ = (0, _.useRef)(null);
        return (0, _.jsx)("span", {
          children: (0, _.jsxs)("button", {
            onClick: (_) => (
              __webpack_require__(!0),
              _.stopPropagation(),
              navigator.clipboard.writeText(_.text),
              setTimeout(() => __webpack_require__(!1), 1e3),
              !1
            ),
            className: (0, _._)(
              _.CopyButton,
              "large" === _.size ? _.BigButton : _.NormalButton,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        var _, _;
        const _ = (0, _._)(_._, _.topicId),
          _ = _(_.clanSteamId, _.forumId, _.topicId, _.subjectId),
          _ = _(_.clanSteamId, _.forumId, _.topicId, _.subjectId),
          _ = {
            subject_type: _._,
            subject_group_id: _.topicId,
            subject_id: _.subjectId,
          },
          _ = (
            null !==
              (_ =
                null === (_ = _.data) || void 0 === _ ? void 0 : _.subjects) &&
            void 0 !== _
              ? _
              : []
          ).find((_) => _.subject_id === _.subjectId);
        return (0, _.jsx)(_._, {
          sanctionMutation: _,
          acquitMutation: _,
          subjectKey: _,
          subject: _,
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
              "0" !== _.subjectId &&
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
      function _(_, _, _, _) {
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
              throw new Error("Failed to acquit forum comment: " + _.GetEMsg());
          },
          onSuccess: async (_) => {
            await (0, _._)(_, _._, _, _);
          },
        });
      }
      function _(_, _, _, _) {
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
                void 0 !== _.days && _.set_days(_.days),
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
            await (0, _._)(_, _._, _, _);
          },
        });
      }
    },
  },
]);

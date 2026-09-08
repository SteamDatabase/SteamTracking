"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2345],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        var _, _;
        const {
            steamid: _,
            commentThreadID: _,
            gidComment: _,
            authorSteamID: _,
          } = _,
          _ = (0, _._)(_._, _),
          _ = (0, _._)(_, _, _),
          _ = (0, _._)(_, _, _),
          _ = {
            subject_type: _._,
            subject_group_id: _,
            subject_id: _,
          },
          _ = (
            null !==
              (_ =
                null === (_ = _.data) || void 0 === _ ? void 0 : _.subjects) &&
            void 0 !== _
              ? _
              : []
          ).find((_) => _.subject_id === _);
        return (0, _.jsx)(_._, {
          sanctionMutation: _,
          acquitMutation: _,
          subjectKey: _,
          subject: _,
          authorSteamID: _,
          children: (0, _.jsx)(_, {
            ..._,
          }),
        });
      }
      function _(_) {
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)("div", {
              children: ["SteamID: ", _.steamid],
            }),
            (0, _.jsxs)("div", {
              children: ["CommentThreadID: ", _.commentThreadID],
            }),
            (0, _.jsxs)("div", {
              children: ["CommentGID: ", _.gidComment],
            }),
          ],
        });
      }
    },
  },
]);

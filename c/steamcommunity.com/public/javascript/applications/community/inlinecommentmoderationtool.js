"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [32345],
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
            _ = (0, _._)({
              subject_type: _._,
              comment_thread_id: _,
            }),
            _ = (0, _._)(_, _, _),
            _ = (0, _._)(_, _, _),
            _ = (
              (_ = (_ = _.data) == null ? void 0 : _.subjects) != null ? _ : []
            ).find((_) => {
              var _;
              return ((_ = _.coordinates) == null ? void 0 : _.comment) === _;
            });
          return (0, _.jsx)(_._, {
            sanctionMutation: _,
            acquitMutation: _,
            subject: _,
            eSubjectType: _._,
            gidComment: _,
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
})();

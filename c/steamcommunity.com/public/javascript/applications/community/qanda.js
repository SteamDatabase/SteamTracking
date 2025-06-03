"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          QAndARoutes: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        Dashboard: (_) => `/questions/${_}/dashboard`,
        FullPageView: (_, _) => `/questions/${_}/view/${_}`,
      };
      const _ = function (_) {
        return _.createElement(
          _._,
          null,
          _.createElement(_._, {
            path: _.Dashboard(":vanity_str"),
            render: (_) =>
              _.createElement(_._, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: _ } = _.match.params;
                    return _.createElement(_._, {
                      vanity_str: _,
                    });
                  },
                },
              }),
          }),
          _.createElement(_._, {
            path: _.FullPageView(":vanity_str", ":session_gid"),
            render: (_) =>
              _.createElement(_._, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: _, session_gid: __webpack_require__ } =
                      _.match.params;
                    return _.createElement(_._, {
                      gidSession: __webpack_require__,
                    });
                  },
                },
              }),
          }),
          _.createElement(_._, {
            component: _._,
          }),
        );
      };
    },
  },
]);

(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7108],
  {
    chunkid: (module) => {
      module.exports = {
        Table: "_2H4PpVokNS3DA0bvEZgYk3",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { creatorHomes: _ } = _,
          [_, _] = _.useState(!0),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(0);
        return (
          _.useEffect(() => {
            if (!_) return;
            (async () => {
              const _ = [];
              for (let _ = 0; _ < _.length; _ += 10) {
                const _ = _.slice(_, _ + 10).map((_) =>
                    _._.fetchQuery((0, _._)(Number(_.accountid))),
                  ),
                  _ = await Promise.all(_);
                _.push(..._);
                const _ = [..._].sort(
                  (_, _) => _.GetNumFollowers() - _.GetNumFollowers(),
                );
                _(_), _(_);
              }
              _(!1);
            })();
          }, [_]),
          _ && _
            ? (0, _.jsxs)(_._, {
                children: [
                  _ &&
                    (0, _.jsxs)("span", {
                      children: [
                        (0, _.jsx)("span", {
                          children: "Loading: ",
                        }),
                        (0, _.jsxs)("span", {
                          children: [_ + 1, " / ", _.length],
                        }),
                        (0, _.jsx)(_._, {
                          size: "small",
                        }),
                      ],
                    }),
                  (0, _.jsxs)("table", {
                    className: _().Table,
                    children: [
                      (0, _.jsx)("thead", {
                        children: (0, _.jsxs)("tr", {
                          children: [
                            (0, _.jsx)("th", {
                              children: "Name",
                            }),
                            (0, _.jsx)("th", {
                              children: "Followers",
                            }),
                          ],
                        }),
                      }),
                      (0, _.jsx)("tbody", {
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              creatorHome: _,
                            },
                            _.GetClanAccountID(),
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, _.jsx)(_._, {})
        );
      }
      function _(_) {
        const { creatorHome: _ } = _;
        return (0, _.jsxs)("tr", {
          children: [
            (0, _.jsx)("td", {
              children: (0, _.jsx)("a", {
                href: _.GetCreatorHomeURL("developer"),
                target: "_blank",
                rel: "noopener noreferrer",
                children: _.GetName(),
              }),
            }),
            (0, _.jsx)("td", {
              children: _.GetNumFollowers(),
            }),
          ],
        });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      function _(_, _) {
        "undefined" != typeof window && (window[_] = _);
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
  },
]);

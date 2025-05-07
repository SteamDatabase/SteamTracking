(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7383],
  {
    chunkid: () => {},
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _.useMemo)(() => {
            if (_) {
              const _ = Math.floor(Date.now() / 1e3) - 345600,
                _ = _ + 1728e3;
              return _.filter(
                (_) =>
                  _.start_date > _ &&
                  _.start_date < _ &&
                  ((!_.owner_account_id &&
                    _.creator_account_id == _._.accountid) ||
                    _.owner_account_id == _._.accountid ||
                    (_.artwork_owner_account_id == _._.accountid &&
                      !_.artwork_completed_time) ||
                    _.operator_account_id == _._.accountid ||
                    _.watch_list?.includes(_._.accountid)),
              ).map((_) => _._);
            }
            return null;
          }, [_]);
        return _._.is_support
          ? _ && 0 != _.length
            ? 0 == _.length
              ? _.createElement(
                  "div",
                  null,
                  "You're all good! Nothing of yours needs attention :)",
                )
              : _.createElement(
                  "div",
                  {
                    className: _.Ctn,
                  },
                  _.createElement(_._, {
                    planIDs: _,
                    bExcludeHideButton: !0,
                    bHideTypeField: !0,
                    bHideDoneByDefault: !0,
                  }),
                )
            : _.createElement(_._, {
                string: "loading",
                size: "medium",
                position: "center",
              })
          : null;
      }
    },
  },
]);

(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [6966],
    {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { redirectUrl: _ = _._.COMMUNITY_BASE_URL } = _,
            [_] = (0, _.useState)(
              new _._(
                new _._(_._.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _ == _._.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
            };
          return (0, _.jsx)("div", {
            className: _.LoginContainer,
            children: _
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  transport: _,
                  platform: _._._,
                  onComplete: _,
                  redirectUrl: _,
                }),
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          let _;
          if (typeof _ == "string") _ = _;
          else if ("location" in _) _ = _.location.search;
          else if ("search" in _) _ = _.search;
          else return;
          const _ = new URLSearchParams(_.substring(1));
          if (_.has(_)) {
            const _ = _.getAll(_);
            return _[_.length - 1];
          }
        }
        function _(_, _, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          if (_ != null && _ != null) {
            if (_.get(_) == _) return;
            _.set(_, _);
          } else {
            if (!_.has(_)) return;
            _.delete(_);
          }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _, _) {
          _(_, _, _, !0);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _.useMemo)(() => {
              const _ = _(_.search, _);
              return _ != null && _ != null
                ? _ != null && _ != null
                  ? typeof _ == "boolean"
                    ? _.constructor(_ !== "false")
                    : _.constructor(_)
                  : _
                : _;
            }, [_.search, _, _]),
            _ = (0, _.useCallback)(
              (_, _ = !1) => {
                _(_, _, _ != null && _ != null ? String(_) : null, _);
              },
              [_, _],
            );
          return [_, _];
        }
        function _(_, _, _ = !1) {
          const _ = new URLSearchParams(_.location.search.substring(1));
          for (const _ in _)
            if (_.hasOwnProperty(_)) {
              const _ = _[_];
              _.delete(_), _ != null && _ != null && _.append(_, _);
            }
          _
            ? _.replace(`?${_.toString()}`, {
                ..._.location.state,
              })
            : _.push(`?${_.toString()}`);
        }
        function _(_, _) {
          _(_, _, !0);
        }
      },
      chunkid: (module) => {
        module.exports = {
          LoginContainer: "_2vAS_iK_bJ7iv_7pRL7Zdk",
        };
      },
    },
  ]);
})();

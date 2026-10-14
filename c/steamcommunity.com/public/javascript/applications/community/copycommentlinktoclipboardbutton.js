(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2606],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = "floatingforumreportedsubjectslist",
            [_, _] = (0, _.useState)(() => localStorage[_] !== void 0),
            _ = (0, _.useMemo)(() => {
              let _ = window.location.href.split("#")[0];
              return _.gidcomment !== null && (_ += "#c" + _.gidcomment), _;
            }, [_.gidcomment]);
          return (0, _.jsx)(_._, {
            text: _,
            size: _ ? "large" : "small",
          });
        }
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

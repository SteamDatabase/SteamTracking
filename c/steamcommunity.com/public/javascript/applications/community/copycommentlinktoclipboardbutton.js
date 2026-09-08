(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2606],
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
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const [_, _] = (0, _.useState)(
            () => void 0 !== localStorage.floatingforumreportedsubjectslist,
          ),
          _ = (0, _.useMemo)(() => {
            let _ = window.location.href.split("#")[0];
            return null !== _.gidcomment && (_ += "#c" + _.gidcomment), _;
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
  },
]);

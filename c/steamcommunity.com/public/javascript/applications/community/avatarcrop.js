(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5278],
  {
    chunkid: (module) => {
      module.exports = {
        AvatarCrop: "UVQKcPi5M7xfkxGQGiesv",
        AvatarCropBound: "t4p1Ec6lMuoroo13jMEgH",
        AvatarCropImg: "JxmP84JNqiT4jGVeYsQti",
        AvatarLoading: "_2HcWfCd15FR0zxzO3g4QQ9",
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = 184,
        _ = 5,
        _ = 1048576,
        _ = _.forwardRef(function (_, _) {
          const {
            isLoading: __webpack_require__,
            imageRef: _,
            loaderRef: _,
            getBlob: _,
          } = (function (_) {
            const [_, __webpack_require__] = _.useState(!0),
              _ = _.useRef(void 0),
              _ = _.useRef(void 0),
              _ = _.useRef(null);
            return (
              _.useEffect(() => {
                __webpack_require__(!0),
                  _.current &&
                    _.current.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    }),
                  _(_.current, _).then(() => {
                    __webpack_require__(!1),
                      (_.current = new (_())(_.current, {
                        viewMode: 1,
                        background: !1,
                        dragMode: "move",
                        aspectRatio: 1,
                        preview: `.${_.AvatarCropPreview}`,
                        rotatable: !1,
                        checkOrientation: !1,
                        toggleDragModeOnDblclick: !1,
                        ready: () => {
                          const _ = _.current,
                            _ = _.getData(),
                            _ = Math.min(_._, _._);
                          _ > 0 &&
                            _.setData({
                              _: _._ - _,
                              _: _._ - _,
                              width: _.width + _ + _,
                              height: _.height + _ + _,
                            });
                        },
                      }));
                  });
                const _ = _.current;
                return () => {
                  _.current.destroy(), URL.revokeObjectURL(_.src), (_.src = "");
                };
              }, [_]),
              {
                isLoading: _,
                imageRef: _,
                loaderRef: _,
                getBlob: () => _(_.current, _.current),
              }
            );
          })(_.imageData);
          return (
            _.useImperativeHandle(_, () => ({
              getBlob: _,
            })),
            _.createElement(
              "div",
              {
                className: _.AvatarCrop,
              },
              _.createElement(
                "div",
                {
                  className: _.AvatarCropBound,
                },
                _.createElement("img", {
                  ref: _,
                  className: _.AvatarCropImg,
                }),
                _.createElement(
                  "div",
                  {
                    ref: _,
                    className: _.AvatarLoading,
                    style: {
                      display: __webpack_require__ ? "" : "none",
                    },
                  },
                  (0, _._)("#Loading"),
                ),
              ),
            )
          );
        });
      async function _(_, _) {
        const _ = new Image(),
          _ = (0, _._)(_, "load");
        (_.src = URL.createObjectURL(_)), await _;
        const _ = document.createElement("canvas");
        (_.width = _.width), (_.height = _.height);
        const _ = _.getContext("2d");
        _.rect(0, 0, _.width, _.height),
          (_.fillStyle = "black"),
          _.fill(),
          _.drawImage(_, 0, 0),
          URL.revokeObjectURL(_.src);
        const _ = (0, _._)(_, "load");
        (_.src = URL.createObjectURL(await _(_))), await _;
      }
      async function _(_, _) {
        const _ = _.getData();
        let _ = _;
        for (;;) {
          const _ = await _(
            _(_, {
              left: _._,
              top: _._,
              size: _.width,
              maxSize: _ * _,
            }),
          );
          if (1 === _ || _.size < _) return _;
          _--;
        }
      }
      function _(_, _) {
        const _ = Math.min(Math.max(_, _.size), _.maxSize),
          _ = document.createElement("canvas");
        (_.width = _), (_.height = _);
        const _ = _.getContext("2d");
        return (
          (_.imageSmoothingEnabled = !0),
          (_.imageSmoothingQuality = "high"),
          _.rect(0, 0, _, _),
          (_.fillStyle = "black"),
          _.fill(),
          _.drawImage(_, _.left, _.top, _.size, _.size, 0, 0, _, _),
          _
        );
      }
      async function _(_, _, _) {
        return new Promise((_) => _.toBlob(_, _, _));
      }
    },
  },
]);

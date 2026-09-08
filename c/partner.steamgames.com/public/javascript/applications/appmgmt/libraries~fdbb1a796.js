"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [616],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        let { reference: _, floating: _ } = _;
        const _ = (0, _._)(_),
          _ = (0, _._)(_),
          _ = (0, _._)(_),
          _ = (0, _._)(_),
          _ = "y" === _,
          _ = _._ + _.width / 2 - _.width / 2,
          _ = _._ + _.height / 2 - _.height / 2,
          _ = _[_] / 2 - _[_] / 2;
        let _;
        switch (_) {
          case "top":
            _ = {
              _: _,
              _: _._ - _.height,
            };
            break;
          case "bottom":
            _ = {
              _: _,
              _: _._ + _.height,
            };
            break;
          case "right":
            _ = {
              _: _._ + _.width,
              _: _,
            };
            break;
          case "left":
            _ = {
              _: _._ - _.width,
              _: _,
            };
            break;
          default:
            _ = {
              _: _._,
              _: _._,
            };
        }
        const _ = (0, _._)(_);
        return _ && (_[_] += _ * ("end" === _ ? 1 : -1) * (_ && _ ? -1 : 1)), _;
      }
      async function _(_, _) {
        var _;
        void 0 === _ && (_ = {});
        const {
            _: _,
            _: _,
            platform: _,
            rects: _,
            elements: _,
            strategy: _,
          } = _,
          {
            boundary: _ = "clippingAncestors",
            rootBoundary: _ = "viewport",
            elementContext: _ = "floating",
            altBoundary: _ = !1,
            padding: _ = 0,
          } = (0, _._)(_, _),
          _ = (0, _._)(_),
          _ = _[_ ? ("floating" === _ ? "reference" : "floating") : _],
          _ = (0, _._)(
            await _.getClippingRect({
              element:
                null ==
                  (_ = await (null == _.isElement ? void 0 : _.isElement(_))) ||
                _
                  ? _
                  : _.contextElement ||
                    (await (null == _.getDocumentElement
                      ? void 0
                      : _.getDocumentElement(_.floating))),
              boundary: _,
              rootBoundary: _,
              strategy: _,
            }),
          ),
          _ =
            "floating" === _
              ? {
                  _: _,
                  _: _,
                  width: _.floating.width,
                  height: _.floating.height,
                }
              : _.reference,
          _ = await (null == _.getOffsetParent
            ? void 0
            : _.getOffsetParent(_.floating)),
          _ = ((await (null == _.isElement ? void 0 : _.isElement(_))) &&
            (await (null == _.getScale ? void 0 : _.getScale(_)))) || {
            _: 1,
            _: 1,
          },
          _ = (0, _._)(
            _.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await _.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: _,
                  rect: _,
                  offsetParent: _,
                  strategy: _,
                })
              : _,
          );
        return {
          top: (_.top - _.top + _.top) / _._,
          bottom: (_.bottom - _.bottom + _.bottom) / _._,
          left: (_.left - _.left + _.left) / _._,
          right: (_.right - _.right + _.right) / _._,
        };
      }
      const _ = new Set(["left", "top"]);
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = (0, _._)(_);
        let _ = parseFloat(_.width) || 0,
          _ = parseFloat(_.height) || 0;
        const _ = (0, _._)(_),
          _ = _ ? _.offsetWidth : _,
          _ = _ ? _.offsetHeight : _,
          _ = (0, _._)(_) !== _ || (0, _._)(_) !== _;
        return (
          _ && ((_ = _), (_ = _)),
          {
            width: _,
            height: _,
            _: _,
          }
        );
      }
      function _(_) {
        return (0, _._)(_) ? _ : _.contextElement;
      }
      function _(_) {
        const _ = _(_);
        if (!(0, _._)(_)) return (0, _._)(1);
        const _ = _.getBoundingClientRect(),
          { width: _, height: _, _: _ } = _(_);
        let _ = (_ ? (0, _._)(_.width) : _.width) / _,
          _ = (_ ? (0, _._)(_.height) : _.height) / _;
        return (
          (_ && Number.isFinite(_)) || (_ = 1),
          (_ && Number.isFinite(_)) || (_ = 1),
          {
            _: _,
            _: _,
          }
        );
      }
      const _ = (0, _._)(0);
      function _(_) {
        const _ = (0, _._)(_);
        return (0, _._)() && _.visualViewport
          ? {
              _: _.visualViewport.offsetLeft,
              _: _.visualViewport.offsetTop,
            }
          : _;
      }
      function _(_, _, _, _) {
        void 0 === _ && (_ = !1), void 0 === _ && (_ = !1);
        const _ = _.getBoundingClientRect(),
          _ = _(_);
        let _ = (0, _._)(1);
        _ && (_ ? (0, _._)(_) && (_ = _(_)) : (_ = _(_)));
        const _ = (function (_, _, _) {
          return void 0 === _ && (_ = !1), !!_ && _ && _ === (0, _._)(_);
        })(_, _, _)
          ? _(_)
          : (0, _._)(0);
        let _ = (_.left + _._) / _._,
          _ = (_.top + _._) / _._,
          _ = _.width / _._,
          _ = _.height / _._;
        if (_ && _) {
          const _ = (0, _._)(_),
            _ = (0, _._)(_) ? (0, _._)(_) : _;
          let _ = _,
            _ = (0, _._)(_);
          for (; _ && _ !== _; ) {
            const _ = _(_),
              _ = _.getBoundingClientRect(),
              _ = (0, _._)(_),
              _ = _.left + (_.clientLeft + parseFloat(_.paddingLeft)) * _._,
              _ = _.top + (_.clientTop + parseFloat(_.paddingTop)) * _._;
            (_ *= _._),
              (_ *= _._),
              (_ *= _._),
              (_ *= _._),
              (_ += _),
              (_ += _),
              (_ = (0, _._)(_)),
              (_ = (0, _._)(_));
          }
        }
        return (0, _._)({
          width: _,
          height: _,
          _: _,
          _: _,
        });
      }
      function _(_, _) {
        const _ = (0, _._)(_).scrollLeft;
        return _ ? _.left + _ : _((0, _._)(_)).left + _;
      }
      function _(_, _) {
        const _ = _.getBoundingClientRect();
        return {
          _: _.left + _.scrollLeft - _(_, _),
          _: _.top + _.scrollTop,
        };
      }
      function _(_, _, _) {
        let _;
        if ("viewport" === _ || "layoutViewport" === _)
          _ = (function (_, _, _) {
            void 0 === _ && (_ = "viewport");
            const _ = "layoutViewport" === _,
              _ = (0, _._)(_),
              _ = (0, _._)(_),
              _ = _.visualViewport;
            let _ = _.clientWidth,
              _ = _.clientHeight,
              _ = 0,
              _ = 0;
            if (_) {
              const _ = !(0, _._)() || "fixed" === _;
              _
                ? _ || ((_ = -_.offsetLeft), (_ = -_.offsetTop))
                : ((_ = _.width),
                  (_ = _.height),
                  _ && ((_ = _.offsetLeft), (_ = _.offsetTop)));
            }
            if (_(_) <= 0) {
              const _ = _.ownerDocument,
                _ = _.body,
                _ = getComputedStyle(_),
                _ =
                  ("CSS1Compat" === _.compatMode &&
                    parseFloat(_.marginLeft) + parseFloat(_.marginRight)) ||
                  0,
                _ = Math.abs(_.clientWidth - _.clientWidth - _),
                _ =
                  "stable both-edges" === getComputedStyle(_).scrollbarGutter
                    ? _ / 2
                    : _;
              _ <= 25 && (_ -= _);
            }
            return {
              width: _,
              height: _,
              _: _,
              _: _,
            };
          })(_, _, _);
        else if ("document" === _)
          _ = (function (_) {
            const _ = (0, _._)(_),
              _ = _.ownerDocument.body,
              _ = (0, _._)(
                _.scrollWidth,
                _.clientWidth,
                _.scrollWidth,
                _.clientWidth,
              ),
              _ = (0, _._)(
                _.scrollHeight,
                _.clientHeight,
                _.scrollHeight,
                _.clientHeight,
              );
            let _ = -_.scrollLeft + _(_);
            const _ = -_.scrollTop;
            return (
              "rtl" === (0, _._)(_).direction &&
                (_ += (0, _._)(_.clientWidth, _.clientWidth) - _),
              {
                width: _,
                height: _,
                _: _,
                _: _,
              }
            );
          })((0, _._)(_));
        else if ((0, _._)(_))
          _ = (function (_, _) {
            const _ = _(_, !0, "fixed" === _),
              _ = _.top + _.clientTop,
              _ = _.left + _.clientLeft,
              _ = _(_);
            return {
              width: _.clientWidth * _._,
              height: _.clientHeight * _._,
              _: _ * _._,
              _: _ * _._,
            };
          })(_, _);
        else {
          const _ = _(_);
          _ = {
            _: _._ - _._,
            _: _._ - _._,
            width: _.width,
            height: _.height,
          };
        }
        return (0, _._)(_);
      }
      function _(_, _, _) {
        const _ = (0, _._)(_),
          _ = (0, _._)(_),
          _ = "fixed" === _,
          _ = _(_, !0, _, _);
        let _ = {
          scrollLeft: 0,
          scrollTop: 0,
        };
        const _ = (0, _._)(0);
        if (
          (_ || !_) &&
          (("body" !== (0, _._)(_) || (0, _._)(_)) && (_ = (0, _._)(_)), _)
        ) {
          const _ = _(_, !0, _, _);
          (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
        }
        !_ && _ && (_._ = _(_));
        const _ = !_ || _ || _ ? (0, _._)(0) : _(_, _);
        return {
          _: _.left + _.scrollLeft - _._ - _._,
          _: _.top + _.scrollTop - _._ - _._,
          width: _.width,
          height: _.height,
        };
      }
      function _(_) {
        return "static" === (0, _._)(_).position;
      }
      function _(_, _) {
        if (!(0, _._)(_) || "fixed" === (0, _._)(_).position) return null;
        if (_) return _(_);
        let _ = _.offsetParent;
        return (0, _._)(_) === _ && (_ = _.ownerDocument.body), _;
      }
      function _(_, _) {
        const _ = (0, _._)(_);
        if ((0, _._)(_)) return _;
        if (!(0, _._)(_)) {
          let _ = (0, _._)(_);
          for (; _ && !(0, _._)(_); ) {
            if ((0, _._)(_) && !_(_)) return _;
            _ = (0, _._)(_);
          }
          return _;
        }
        let _ = _(_, _);
        for (; _ && (0, _._)(_) && _(_); ) _ = _(_, _);
        return _ && (0, _._)(_) && _(_) && !(0, _._)(_)
          ? _
          : _ || (0, _._)(_) || _;
      }
      const _ = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (_) {
          let { elements: _, rect: _, offsetParent: _, strategy: _ } = _;
          const _ = "fixed" === _,
            _ = (0, _._)(_),
            _ = !!_ && (0, _._)(_.floating);
          if (_ === _ || (_ && _)) return _;
          let _ = {
              scrollLeft: 0,
              scrollTop: 0,
            },
            _ = (0, _._)(1);
          const _ = (0, _._)(0),
            _ = (0, _._)(_);
          if (
            (_ || !_) &&
            (("body" !== (0, _._)(_) || (0, _._)(_)) && (_ = (0, _._)(_)), _)
          ) {
            const _ = _(_);
            (_ = _(_)), (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
          }
          const _ = !_ || _ || _ ? (0, _._)(0) : _(_, _);
          return {
            width: _.width * _._,
            height: _.height * _._,
            _: _._ * _._ - _.scrollLeft * _._ + _._ + _._,
            _: _._ * _._ - _.scrollTop * _._ + _._ + _._,
          };
        },
        getDocumentElement: _._,
        getClippingRect: function (_) {
          let { element: _, boundary: _, rootBoundary: _, strategy: _ } = _;
          const _ = [
              ...("clippingAncestors" === _
                ? (0, _._)(_)
                  ? []
                  : (function (_, _) {
                      const _ = _.get(_);
                      if (_) return _;
                      let _ = (0, _._)(_, [], !1).filter(
                          (_) => (0, _._)(_) && "body" !== (0, _._)(_),
                        ),
                        _ = null;
                      const _ = "fixed" === (0, _._)(_).position;
                      let _ = _ ? (0, _._)(_) : _;
                      for (; (0, _._)(_) && !(0, _._)(_); ) {
                        const _ = (0, _._)(_),
                          _ = (0, _._)(_),
                          _ = _ ? _.position : _ ? "fixed" : "";
                        _ ||
                        ("fixed" !== _ &&
                          ("absolute" !== _ || "static" !== _.position))
                          ? (_ = _)
                          : (_ = _.filter((_) => _ !== _)),
                          (_ = (0, _._)(_));
                      }
                      return _.set(_, _), _;
                    })(_, this._)
                : [].concat(_)),
              _,
            ],
            _ = _(_, _[0], _);
          let _ = _.top,
            _ = _.right,
            _ = _.bottom,
            _ = _.left;
          for (let _ = 1; _ < _.length; _++) {
            const _ = _(_, _[_], _);
            (_ = (0, _._)(_.top, _)),
              (_ = (0, _._)(_.right, _)),
              (_ = (0, _._)(_.bottom, _)),
              (_ = (0, _._)(_.left, _));
          }
          return {
            width: _ - _,
            height: _ - _,
            _: _,
            _: _,
          };
        },
        getOffsetParent: _,
        getElementRects: async function (_) {
          const _ = this.getOffsetParent || _,
            _ = this.getDimensions,
            _ = await __webpack_require__(_.floating);
          return {
            reference: _(_.reference, await _(_.floating), _.strategy),
            floating: {
              _: 0,
              _: 0,
              width: _.width,
              height: _.height,
            },
          };
        },
        getClientRects: function (_) {
          return _.getClientRects ? Array.from(_.getClientRects()) : [];
        },
        getDimensions: function (_) {
          const { width: _, height: _ } = _(_);
          return {
            width: _,
            height: _,
          };
        },
        getScale: _,
        isElement: _._,
        isRTL: function (_) {
          return "rtl" === (0, _._)(_).direction;
        },
      };
      function _(_, _) {
        return (
          _._ === _._ &&
          _._ === _._ &&
          _.width === _.width &&
          _.height === _.height
        );
      }
      function _(_, _, _, _) {
        void 0 === _ && (_ = {});
        const {
            ancestorScroll: _ = !0,
            ancestorResize: _ = !0,
            elementResize: _ = "function" == typeof ResizeObserver,
            layoutShift: _ = "function" == typeof IntersectionObserver,
            animationFrame: _ = !1,
          } = _,
          _ = _(_),
          _ =
            _ || _
              ? [...(_ ? (0, _._)(_) : []), ...(_ ? (0, _._)(_) : [])]
              : [];
        _.forEach((_) => {
          _ && _.addEventListener("scroll", _),
            _ && _.addEventListener("resize", _);
        });
        const _ =
          _ && _
            ? (function (_, _, _) {
                let _,
                  _ = null;
                const _ = (0, _._)(_);
                function _() {
                  var _;
                  clearTimeout(_),
                    null == (_ = _) || _.disconnect(),
                    (_ = null);
                }
                function _(_, _) {
                  void 0 === _ && (_ = !1), void 0 === _ && (_ = 1), _();
                  const _ = _.getBoundingClientRect(),
                    { left: _, top: _, width: _, height: _ } = _;
                  if ((_ || _(), !_ || !_)) return;
                  const _ = {
                    rootMargin:
                      -(0, _._)(_) +
                      "px " +
                      -(0, _._)(_.clientWidth - (_ + _)) +
                      "px " +
                      -(0, _._)(_.clientHeight - (_ + _)) +
                      "px " +
                      -(0, _._)(_) +
                      "px",
                    threshold: (0, _._)(0, (0, _._)(1, _)) || 1,
                  };
                  let _ = !0;
                  function _(_) {
                    const _ = _[0].intersectionRatio;
                    if (!_(_, _.getBoundingClientRect())) return _();
                    if (_ !== _) {
                      if (!_) return _();
                      _
                        ? _(!1, _)
                        : (_ = setTimeout(() => {
                            _(!1, 1e-7);
                          }, 1e3));
                    }
                    _ = !1;
                  }
                  try {
                    _ = new IntersectionObserver(_, {
                      ..._,
                      root: _.ownerDocument,
                    });
                  } catch (_) {
                    _ = new IntersectionObserver(_, _);
                  }
                  _.observe(_);
                }
                const _ = (0, _._)(_),
                  _ = () => _(_);
                return (
                  _.addEventListener("resize", _),
                  _(!0),
                  () => {
                    _.removeEventListener("resize", _), _();
                  }
                );
              })(_, _, _)
            : null;
        let _,
          _ = -1,
          _ = null;
        _ &&
          ((_ = new ResizeObserver((_) => {
            let [_] = _;
            _ &&
              _.target === _ &&
              _ &&
              _ &&
              (_.unobserve(_),
              cancelAnimationFrame(_),
              (_ = requestAnimationFrame(() => {
                var _;
                null == (_ = _) || _.observe(_);
              }))),
              __webpack_require__();
          })),
          _ && !_ && _.observe(_),
          _ && _.observe(_));
        let _ = _ ? _(_) : null;
        return (
          _ &&
            (function _() {
              const _ = _(_);
              _ && !_(_, _) && __webpack_require__();
              (_ = _), (_ = requestAnimationFrame(_));
            })(),
          __webpack_require__(),
          () => {
            var _;
            _.forEach((_) => {
              _ && _.removeEventListener("scroll", _),
                _ && _.removeEventListener("resize", _);
            }),
              null == _ || _(),
              null == (_ = _) || _.disconnect(),
              (_ = null),
              _ && cancelAnimationFrame(_);
          }
        );
      }
      const _ = function (_) {
          return (
            void 0 === _ && (_ = 0),
            {
              name: "offset",
              options: _,
              async _(_) {
                var _, _;
                const { _: _, _: _, placement: _, middlewareData: _ } = _,
                  _ = await (async function (_, _) {
                    const { placement: _, platform: _, elements: _ } = _,
                      _ = await (null == _.isRTL
                        ? void 0
                        : _.isRTL(_.floating)),
                      _ = (0, _._)(_),
                      _ = (0, _._)(_),
                      _ = "y" === (0, _._)(_),
                      _ = _.has(_) ? -1 : 1,
                      _ = _ && _ ? -1 : 1,
                      _ = (0, _._)(_, _);
                    let {
                      mainAxis: _,
                      crossAxis: _,
                      alignmentAxis: _,
                    } = "number" == typeof _
                      ? {
                          mainAxis: _,
                          crossAxis: 0,
                          alignmentAxis: null,
                        }
                      : {
                          mainAxis: _.mainAxis || 0,
                          crossAxis: _.crossAxis || 0,
                          alignmentAxis: _.alignmentAxis,
                        };
                    return (
                      _ &&
                        "number" == typeof _ &&
                        (_ = "end" === _ ? -1 * _ : _),
                      _
                        ? {
                            _: _ * _,
                            _: _ * _,
                          }
                        : {
                            _: _ * _,
                            _: _ * _,
                          }
                    );
                  })(_, _);
                return _ === (null == (_ = _.offset) ? void 0 : _.placement) &&
                  null != (_ = _.arrow) &&
                  _.alignmentOffset
                  ? {}
                  : {
                      _: _ + _._,
                      _: _ + _._,
                      data: {
                        ..._,
                        placement: _,
                      },
                    };
              },
            }
          );
        },
        _ = function (_) {
          return (
            void 0 === _ && (_ = {}),
            {
              name: "shift",
              options: _,
              async _(_) {
                const { _: _, _: _, placement: _, platform: _ } = _,
                  {
                    mainAxis: _ = !0,
                    crossAxis: _ = !1,
                    limiter: _ = {
                      _: (_) => {
                        let { _: _, _: _ } = _;
                        return {
                          _: _,
                          _: _,
                        };
                      },
                    },
                    ..._
                  } = (0, _._)(_, _),
                  _ = {
                    _: _,
                    _: _,
                  },
                  _ = await _.detectOverflow(_, _),
                  _ = (0, _._)(_),
                  _ = (0, _._)(_);
                let _ = _[_],
                  _ = _[_];
                const _ = (_, _) =>
                  (0, _._)(
                    _ + _["y" === _ ? "top" : "left"],
                    _,
                    _ - _["y" === _ ? "bottom" : "right"],
                  );
                _ && (_ = _(_, _)), _ && (_ = _(_, _));
                const _ = _._({
                  ..._,
                  [_]: _,
                  [_]: _,
                });
                return {
                  ..._,
                  data: {
                    _: _._ - _,
                    _: _._ - _,
                    enabled: {
                      [_]: _,
                      [_]: _,
                    },
                  },
                };
              },
            }
          );
        },
        _ = function (_) {
          return (
            void 0 === _ && (_ = {}),
            {
              name: "flip",
              options: _,
              async _(_) {
                var _, _;
                const {
                    placement: _,
                    middlewareData: _,
                    rects: _,
                    initialPlacement: _,
                    platform: _,
                    elements: _,
                  } = _,
                  {
                    mainAxis: _ = !0,
                    crossAxis: _ = !0,
                    fallbackPlacements: _,
                    fallbackStrategy: _ = "bestFit",
                    fallbackAxisSideDirection: _ = "none",
                    flipAlignment: _ = !0,
                    ..._
                  } = (0, _._)(_, _);
                if (null != (_ = _.arrow) && _.alignmentOffset) return {};
                const _ = (0, _._)(_),
                  _ = (0, _._)(_),
                  _ = (0, _._)(_) === _,
                  _ = await (null == _.isRTL ? void 0 : _.isRTL(_.floating)),
                  _ = _ || (_ || !_ ? [(0, _._)(_)] : (0, _._)(_)),
                  _ = "none" !== _;
                !_ && _ && _.push(...(0, _._)(_, _, _, _));
                const _ = [_, ..._],
                  _ = await _.detectOverflow(_, _),
                  _ = [];
                let _ = (null == (_ = _.flip) ? void 0 : _.overflows) || [];
                if ((_ && _.push(_[_]), _)) {
                  const _ = (0, _._)(_, _, _);
                  _.push(_[_[0]], _[_[1]]);
                }
                if (
                  ((_ = [
                    ..._,
                    {
                      placement: _,
                      overflows: _,
                    },
                  ]),
                  !_.every((_) => _ <= 0))
                ) {
                  var _, _;
                  const _ =
                      ((null == (_ = _.flip) ? void 0 : _.index) || 0) + 1,
                    _ = _[_];
                  if (_) {
                    if (
                      !("alignment" === _ && _ !== (0, _._)(_)) ||
                      _.every(
                        (_) =>
                          (0, _._)(_.placement) !== _ || _.overflows[0] > 0,
                      )
                    )
                      return {
                        data: {
                          index: _,
                          overflows: _,
                        },
                        reset: {
                          placement: _,
                        },
                      };
                  }
                  let _ =
                    null ==
                    (_ = _.filter((_) => _.overflows[0] <= 0).sort(
                      (_, _) => _.overflows[1] - _.overflows[1],
                    )[0])
                      ? void 0
                      : _.placement;
                  if (!_)
                    switch (_) {
                      case "bestFit": {
                        var _;
                        const _ =
                          null ==
                          (_ = _.filter((_) => {
                            if (_) {
                              const _ = (0, _._)(_.placement);
                              return _ === _ || "y" === _;
                            }
                            return !0;
                          })
                            .map((_) => [
                              _.placement,
                              _.overflows
                                .filter((_) => _ > 0)
                                .reduce((_, _) => _ + _, 0),
                            ])
                            .sort((_, _) => _[1] - _[1])[0])
                            ? void 0
                            : _[0];
                        _ && (_ = _);
                        break;
                      }
                      case "initialPlacement":
                        _ = _;
                    }
                  if (_ !== _)
                    return {
                      reset: {
                        placement: _,
                      },
                    };
                }
                return {};
              },
            }
          );
        },
        _ = function (_) {
          return (
            void 0 === _ && (_ = {}),
            {
              name: "size",
              options: _,
              async _(_) {
                const { placement: _, rects: _, platform: _, elements: _ } = _,
                  { apply: _ = () => {}, ..._ } = (0, _._)(_, _),
                  _ = await _.detectOverflow(_, _),
                  _ = (0, _._)(_),
                  _ = (0, _._)(_),
                  _ = "y" === (0, _._)(_),
                  { width: _, height: _ } = _.floating;
                let _, _;
                "top" === _ || "bottom" === _
                  ? ((_ = _),
                    (_ =
                      _ ===
                      ((await (null == _.isRTL ? void 0 : _.isRTL(_.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((_ = _), (_ = "end" === _ ? "top" : "bottom"));
                const _ = _ - _.top - _.bottom,
                  _ = _ - _.left - _.right,
                  _ = (0, _._)(_ - _[_], _),
                  _ = (0, _._)(_ - _[_], _),
                  _ = _.middlewareData.shift,
                  _ = !_;
                let _ = _,
                  _ = _;
                null != _ && _.enabled._ && (_ = _),
                  null != _ && _.enabled._ && (_ = _),
                  _ &&
                    !_ &&
                    (_
                      ? (_ = _ - 2 * (0, _._)(_.left, _.right))
                      : (_ = _ - 2 * (0, _._)(_.top, _.bottom))),
                  await _({
                    ..._,
                    availableWidth: _,
                    availableHeight: _,
                  });
                const _ = await _.getDimensions(_.floating);
                return _ !== _.width || _ !== _.height
                  ? {
                      reset: {
                        rects: !0,
                      },
                    }
                  : {};
              },
            }
          );
        },
        _ = (_, _, _) => {
          const _ = new Map(),
            _ = null != _ ? _ : {},
            _ = {
              ..._,
              ..._.platform,
              _: _,
            };
          return (async (_, _, _) => {
            const {
                placement: _ = "bottom",
                strategy: _ = "absolute",
                middleware: _ = [],
                platform: _,
              } = _,
              _ = _.detectOverflow
                ? _
                : {
                    ..._,
                    detectOverflow: _,
                  },
              _ = await (null == _.isRTL ? void 0 : _.isRTL(_));
            let _ = await _.getElementRects({
                reference: _,
                floating: _,
                strategy: _,
              }),
              { _: _, _: _ } = _(_, _, _),
              _ = _,
              _ = 0;
            const _ = {};
            for (let _ = 0; _ < _.length; _++) {
              const _ = _[_];
              if (!_) continue;
              const { name: _, _: _ } = _,
                {
                  _: _,
                  _: _,
                  data: _,
                  reset: _,
                } = await _({
                  _: _,
                  _: _,
                  initialPlacement: _,
                  placement: _,
                  strategy: _,
                  middlewareData: _,
                  rects: _,
                  platform: _,
                  elements: {
                    reference: _,
                    floating: _,
                  },
                });
              (_ = null != _ ? _ : _),
                (_ = null != _ ? _ : _),
                (_[_] = {
                  ..._[_],
                  ..._,
                }),
                _ &&
                  _ < 50 &&
                  (_++,
                  "object" == typeof _ &&
                    (_.placement && (_ = _.placement),
                    _.rects &&
                      (_ =
                        !0 === _.rects
                          ? await _.getElementRects({
                              reference: _,
                              floating: _,
                              strategy: _,
                            })
                          : _.rects),
                    ({ _: _, _: _ } = _(_, _, _))),
                  (_ = -1));
            }
            return {
              _: _,
              _: _,
              placement: _,
              strategy: _,
              middlewareData: _,
            };
          })(_, _, {
            ..._,
            platform: _,
          });
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _() {
        return "undefined" != typeof window;
      }
      function _(_) {
        return _(_) ? (_.nodeName || "").toLowerCase() : "#document";
      }
      function _(_) {
        var _;
        return (
          (null == _ || null == (_ = _.ownerDocument)
            ? void 0
            : _.defaultView) || window
        );
      }
      function _(_) {
        var _;
        return null ==
          (_ = (_(_) ? _.ownerDocument : _.document) || window.document)
          ? void 0
          : _.documentElement;
      }
      function _(_) {
        return !!_() && (_ instanceof Node || _ instanceof _(_).Node);
      }
      function _(_) {
        return !!_() && (_ instanceof Element || _ instanceof _(_).Element);
      }
      function _(_) {
        return (
          !!_() && (_ instanceof HTMLElement || _ instanceof _(_).HTMLElement)
        );
      }
      function _(_) {
        return (
          !(!_() || "undefined" == typeof ShadowRoot) &&
          (_ instanceof ShadowRoot || _ instanceof _(_).ShadowRoot)
        );
      }
      function _(_) {
        const { overflow: _, overflowX: _, overflowY: _, display: _ } = _(_);
        return (
          /auto|scroll|overlay|hidden|clip/.test(_ + _ + _) &&
          "inline" !== _ &&
          "contents" !== _
        );
      }
      function _(_) {
        return /^(table|td|th)$/.test(_(_));
      }
      function _(_) {
        try {
          if (_.matches(":popover-open")) return !0;
        } catch (_) {}
        try {
          return _.matches(":modal");
        } catch (_) {
          return !1;
        }
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      const _ = /transform|translate|scale|rotate|perspective|filter/,
        _ = /paint|layout|strict|content/,
        _ = (_) => !!_ && "none" !== _;
      let _;
      function _(_) {
        const _ = _(_) ? _(_) : _;
        return (
          _(_.transform) ||
          _(_.translate) ||
          _(_.scale) ||
          _(_.rotate) ||
          _(_.perspective) ||
          (!_() && (_(_.backdropFilter) || _(_.filter))) ||
          _.test(_.willChange || "") ||
          _.test(_.contain || "")
        );
      }
      function _(_) {
        let _ = _(_);
        for (; _(_) && !_(_); ) {
          if (_(_)) return _;
          if (_(_)) return null;
          _ = _(_);
        }
        return null;
      }
      function _() {
        return (
          null == _ &&
            (_ =
              "undefined" != typeof CSS &&
              CSS.supports &&
              CSS.supports("-webkit-backdrop-filter", "none")),
          _
        );
      }
      function _(_) {
        return /^(html|body|#document)$/.test(_(_));
      }
      function _(_) {
        return _(_).getComputedStyle(_);
      }
      function _(_) {
        return _(_)
          ? {
              scrollLeft: _.scrollLeft,
              scrollTop: _.scrollTop,
            }
          : {
              scrollLeft: _.scrollX,
              scrollTop: _.scrollY,
            };
      }
      function _(_) {
        if ("html" === _(_)) return _;
        const _ = _.assignedSlot || _.parentNode || (_(_) && _.host) || _(_);
        return _(_) ? _.host : _;
      }
      function _(_) {
        const _ = _(_);
        return _(_) ? (_.ownerDocument || _).body : _(_) && _(_) ? _ : _(_);
      }
      function _(_, _, _) {
        var _;
        void 0 === _ && (_ = []), void 0 === _ && (_ = !0);
        const _ = _(_),
          _ = _ === (null == (_ = _.ownerDocument) ? void 0 : _.body),
          _ = _(_);
        if (_) {
          const _ = _(_);
          return _.concat(
            _,
            _.visualViewport || [],
            _(_) ? _ : [],
            _ && _ ? _(_) : [],
          );
        }
        return _.concat(_, _(_, [], _));
      }
      function _(_) {
        return _.parent && Object.getPrototypeOf(_.parent)
          ? _.frameElement
          : null;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      const _ = Math.min,
        _ = Math.max,
        _ = Math.round,
        _ = Math.floor,
        _ = (_) => ({
          _: _,
          _: _,
        }),
        _ = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom",
        };
      function _(_, _, _) {
        return _(_, _(_, _));
      }
      function _(_, _) {
        return "function" == typeof _ ? _(_) : _;
      }
      function _(_) {
        return _.split("-")[0];
      }
      function _(_) {
        return _.split("-")[1];
      }
      function _(_) {
        return "x" === _ ? "y" : "x";
      }
      function _(_) {
        return "y" === _ ? "height" : "width";
      }
      function _(_) {
        const _ = _[0];
        return "t" === _ || "b" === _ ? "y" : "x";
      }
      function _(_) {
        return _(_(_));
      }
      function _(_, _, _) {
        void 0 === _ && (_ = !1);
        const _ = _(_),
          _ = _(_),
          _ = _(_);
        let _ =
          "x" === _
            ? _ === (_ ? "end" : "start")
              ? "right"
              : "left"
            : "start" === _
              ? "bottom"
              : "top";
        return _.reference[_] > _.floating[_] && (_ = _(_)), [_, _(_)];
      }
      function _(_) {
        const _ = _(_);
        return [_(_), _, _(_)];
      }
      function _(_) {
        return _.includes("start")
          ? _.replace("start", "end")
          : _.replace("end", "start");
      }
      const _ = ["left", "right"],
        _ = ["right", "left"],
        _ = ["top", "bottom"],
        _ = ["bottom", "top"];
      function _(_, _, _, _) {
        const _ = _(_);
        let _ = (function (_, _, _) {
          switch (_) {
            case "top":
            case "bottom":
              return _ ? (_ ? _ : _) : _ ? _ : _;
            case "left":
            case "right":
              return _ ? _ : _;
            default:
              return [];
          }
        })(_(_), "start" === _, _);
        return (
          _ && ((_ = _.map((_) => _ + "-" + _)), _ && (_ = _.concat(_.map(_)))),
          _
        );
      }
      function _(_) {
        const _ = _(_);
        return _[_] + _.slice(_.length);
      }
      function _(_) {
        return "number" != typeof _
          ? (function (_) {
              var _, _, _, _;
              return {
                top: null != (_ = _.top) ? _ : 0,
                right: null != (_ = _.right) ? _ : 0,
                bottom: null != (_ = _.bottom) ? _ : 0,
                left: null != (_ = _.left) ? _ : 0,
              };
            })(_)
          : {
              top: _,
              right: _,
              bottom: _,
              left: _,
            };
      }
      function _(_) {
        const { _: _, _: _, width: _, height: _ } = _;
        return {
          width: _,
          height: _,
          top: _,
          left: _,
          right: _ + _,
          bottom: _ + _,
          _: _,
          _: _,
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        return (
          (_ = (0, _._)(_)) in _
            ? Object.defineProperty(_, _, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (_[_] = _),
          _
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _) {
        var _ = Object.keys(_);
        if (Object.getOwnPropertySymbols) {
          var _ = Object.getOwnPropertySymbols(_);
          _ &&
            (_ = _.filter(function (_) {
              return Object.getOwnPropertyDescriptor(_, _).enumerable;
            })),
            _.push.apply(_, _);
        }
        return _;
      }
      function _(_) {
        for (var _ = 1; _ < arguments.length; _++) {
          var _ = null != arguments[_] ? arguments[_] : {};
          _ % 2
            ? _(Object(_), !0).forEach(function (_) {
                (0, _._)(_, _, _[_]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(_))
              : _(Object(_)).forEach(function (_) {
                  Object.defineProperty(
                    _,
                    _,
                    Object.getOwnPropertyDescriptor(_, _),
                  );
                });
        }
        return _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_) {
        var _ = (function (_, _) {
          if ("object" != (0, _._)(_) || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (void 0 !== _) {
            var _ = __webpack_require__.call(_, _ || "default");
            if ("object" != (0, _._)(_)) return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === _ ? String : Number)(_);
        })(_, "string");
        return "symbol" == (0, _._)(_) ? _ : _ + "";
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_) {
        return (
          (_ =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (_) {
                  return typeof _;
                }
              : function (_) {
                  return _ &&
                    "function" == typeof Symbol &&
                    _.constructor === Symbol &&
                    _ !== Symbol.prototype
                    ? "symbol"
                    : typeof _;
                }),
          _(_)
        );
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
  },
]);

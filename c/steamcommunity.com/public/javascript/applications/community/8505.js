"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8505],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
        switch ((0, _._)(_)) {
          case "start":
            _[_] -= _ * (_ && _ ? -1 : 1);
            break;
          case "end":
            _[_] += _ * (_ && _ ? -1 : 1);
        }
        return _;
      }
      const _ = async (_, _, _) => {
        const {
            placement: _ = "bottom",
            strategy: _ = "absolute",
            middleware: _ = [],
            platform: _,
          } = _,
          _ = _.filter(Boolean),
          _ = await (null == _.isRTL ? void 0 : _.isRTL(_));
        let _ = await _.getElementRects({
            reference: _,
            floating: _,
            strategy: _,
          }),
          { _: _, _: _ } = _(_, _, _),
          _ = _,
          _ = {},
          _ = 0;
        for (let _ = 0; _ < _.length; _++) {
          const { name: _, _: _ } = _[_],
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
            (_ = {
              ..._,
              [_]: {
                ..._[_],
                ..._,
              },
            }),
            _ &&
              _ <= 50 &&
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
      };
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
                  ..._.floating,
                  _: _,
                  _: _,
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
      const _ = function (_) {
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
                _ = (0, _._)(_) === _,
                _ = await (null == _.isRTL ? void 0 : _.isRTL(_.floating)),
                _ = _ || (_ || !_ ? [(0, _._)(_)] : (0, _._)(_));
              _ || "none" === _ || _.push(...(0, _._)(_, _, _, _));
              const _ = [_, ..._],
                _ = await _(_, _),
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
                const _ = ((null == (_ = _.flip) ? void 0 : _.index) || 0) + 1,
                  _ = _[_];
                if (_)
                  return {
                    data: {
                      index: _,
                      overflows: _,
                    },
                    reset: {
                      placement: _,
                    },
                  };
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
                        (_ = _.map((_) => [
                          _.placement,
                          _.overflows
                            .filter((_) => _ > 0)
                            .reduce((_, _) => _ + _, 0),
                        ]).sort((_, _) => _[1] - _[1])[0])
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
      };
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
                      _ = ["left", "top"].includes(_) ? -1 : 1,
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
                          mainAxis: 0,
                          crossAxis: 0,
                          alignmentAxis: null,
                          ..._,
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
              name: "size",
              options: _,
              async _(_) {
                const {
                    placement: __webpack_require__,
                    rects: _,
                    platform: _,
                    elements: _,
                  } = _,
                  { apply: _ = () => {}, ..._ } = (0, _._)(_, _),
                  _ = await _(_, _),
                  _ = (0, _._)(__webpack_require__),
                  _ = (0, _._)(__webpack_require__),
                  _ = "y" === (0, _._)(__webpack_require__),
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
                const _ = _ - _[_],
                  _ = _ - _[_],
                  _ = !_.middlewareData.shift;
                let _ = _,
                  _ = _;
                if (_) {
                  const _ = _ - _.left - _.right;
                  _ = _ || _ ? (0, _._)(_, _) : _;
                } else {
                  const _ = _ - _.top - _.bottom;
                  _ = _ || _ ? (0, _._)(_, _) : _;
                }
                if (_ && !_) {
                  const _ = (0, _._)(_.left, 0),
                    _ = (0, _._)(_.right, 0),
                    _ = (0, _._)(_.top, 0),
                    _ = (0, _._)(_.bottom, 0);
                  _
                    ? (_ =
                        _ -
                        2 *
                          (0 !== _ || 0 !== _
                            ? _ + _
                            : (0, _._)(_.left, _.right)))
                    : (_ =
                        _ -
                        2 *
                          (0 !== _ || 0 !== _
                            ? _ + _
                            : (0, _._)(_.top, _.bottom)));
                }
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
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
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
          return (
            void 0 === _ && (_ = !1), !(!_ || (_ && _ !== (0, _._)(_))) && _
          );
        })(_, _, _)
          ? _(_)
          : (0, _._)(0);
        let _ = (_.left + _._) / _._,
          _ = (_.top + _._) / _._,
          _ = _.width / _._,
          _ = _.height / _._;
        if (_) {
          const _ = (0, _._)(_),
            _ = _ && (0, _._)(_) ? (0, _._)(_) : _;
          let _ = _.frameElement;
          for (; _ && _ && _ !== _; ) {
            const _ = _(_),
              _ = __webpack_require__.getBoundingClientRect(),
              _ = (0, _._)(_),
              _ = _.left + (_.clientLeft + parseFloat(_.paddingLeft)) * _._,
              _ = _.top + (_.clientTop + parseFloat(_.paddingTop)) * _._;
            (_ *= _._),
              (_ *= _._),
              (_ *= _._),
              (_ *= _._),
              (_ += _),
              (_ += _),
              (_ = (0, _._)(_).frameElement);
          }
        }
        return (0, _._)({
          width: _,
          height: _,
          _: _,
          _: _,
        });
      }
      function _(_) {
        return _((0, _._)(_)).left + (0, _._)(_).scrollLeft;
      }
      function _(_, _, _) {
        let _;
        if ("viewport" === _)
          _ = (function (_, _) {
            const _ = (0, _._)(_),
              _ = (0, _._)(_),
              _ = _.visualViewport;
            let _ = _.clientWidth,
              _ = _.clientHeight,
              _ = 0,
              _ = 0;
            if (_) {
              (_ = _.width), (_ = _.height);
              const _ = (0, _._)();
              (!_ || (_ && "fixed" === _)) &&
                ((_ = _.offsetLeft), (_ = _.offsetTop));
            }
            return {
              width: _,
              height: _,
              _: _,
              _: _,
            };
          })(_, _);
        else if ("document" === _)
          _ = (function (_) {
            const _ = (0, _._)(_),
              _ = (0, _._)(_),
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
              _ = (0, _._)(_) ? _(_) : (0, _._)(1);
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
            ..._,
            _: _._ - _._,
            _: _._ - _._,
          };
        }
        return (0, _._)(_);
      }
      function _(_, _) {
        const _ = (0, _._)(_);
        return (
          !(_ === _ || !(0, _._)(_) || (0, _._)(_)) &&
          ("fixed" === (0, _._)(_).position || _(_, _))
        );
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
        if (_ || (!_ && !_))
          if (
            (("body" !== (0, _._)(_) || (0, _._)(_)) && (_ = (0, _._)(_)), _)
          ) {
            const _ = _(_, !0, _, _);
            (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
          } else _ && (_._ = _(_));
        return {
          _: _.left + _.scrollLeft - _._,
          _: _.top + _.scrollTop - _._,
          width: _.width,
          height: _.height,
        };
      }
      function _(_, _) {
        return (0, _._)(_) && "fixed" !== (0, _._)(_).position
          ? _
            ? _(_)
            : _.offsetParent
          : null;
      }
      function _(_, _) {
        const _ = (0, _._)(_);
        if (!(0, _._)(_)) return _;
        let _ = _(_, _);
        for (; _ && (0, _._)(_) && "static" === (0, _._)(_).position; )
          _ = _(_, _);
        return _ &&
          ("html" === (0, _._)(_) ||
            ("body" === (0, _._)(_) &&
              "static" === (0, _._)(_).position &&
              !(0, _._)(_)))
          ? _
          : _ || (0, _._)(_) || _;
      }
      const _ = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (_) {
          let { rect: _, offsetParent: __webpack_require__, strategy: _ } = _;
          const _ = (0, _._)(__webpack_require__),
            _ = (0, _._)(__webpack_require__);
          if (__webpack_require__ === _) return _;
          let _ = {
              scrollLeft: 0,
              scrollTop: 0,
            },
            _ = (0, _._)(1);
          const _ = (0, _._)(0);
          if (
            (_ || (!_ && "fixed" !== _)) &&
            (("body" !== (0, _._)(__webpack_require__) || (0, _._)(_)) &&
              (_ = (0, _._)(__webpack_require__)),
            (0, _._)(__webpack_require__))
          ) {
            const _ = _(__webpack_require__);
            (_ = _(__webpack_require__)),
              (_._ = _._ + __webpack_require__.clientLeft),
              (_._ = _._ + __webpack_require__.clientTop);
          }
          return {
            width: _.width * _._,
            height: _.height * _._,
            _: _._ * _._ - _.scrollLeft * _._ + _._,
            _: _._ * _._ - _.scrollTop * _._ + _._,
          };
        },
        getDocumentElement: _._,
        getClippingRect: function (_) {
          let {
            element: _,
            boundary: __webpack_require__,
            rootBoundary: _,
            strategy: _,
          } = _;
          const _ = [
              ...("clippingAncestors" === __webpack_require__
                ? (function (_, _) {
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
                        _ = (0, _._)(_);
                      _ || "fixed" !== _.position || (_ = null),
                        (
                          _
                            ? !_ && !_
                            : (!_ &&
                                "static" === _.position &&
                                _ &&
                                ["absolute", "fixed"].includes(_.position)) ||
                              ((0, _._)(_) && !_ && _(_, _))
                        )
                          ? (_ = _.filter((_) => _ !== _))
                          : (_ = _),
                        (_ = (0, _._)(_));
                    }
                    return _.set(_, _), _;
                  })(_, this._)
                : [].concat(__webpack_require__)),
              _,
            ],
            _ = _[0],
            _ = _.reduce(
              (_, _) => {
                const _ = _(_, _, _);
                return (
                  (_.top = (0, _._)(_.top, _.top)),
                  (_.right = (0, _._)(_.right, _.right)),
                  (_.bottom = (0, _._)(_.bottom, _.bottom)),
                  (_.left = (0, _._)(_.left, _.left)),
                  _
                );
              },
              _(_, _, _),
            );
          return {
            width: _.right - _.left,
            height: _.bottom - _.top,
            _: _.left,
            _: _.top,
          };
        },
        getOffsetParent: _,
        getElementRects: async function (_) {
          let { reference: _, floating: __webpack_require__, strategy: _ } = _;
          const _ = this.getOffsetParent || _,
            _ = this.getDimensions;
          return {
            reference: _(_, await _(__webpack_require__), _),
            floating: {
              _: 0,
              _: 0,
              ...(await _(__webpack_require__)),
            },
          };
        },
        getClientRects: function (_) {
          return Array.from(_.getClientRects());
        },
        getDimensions: function (_) {
          const { width: _, height: __webpack_require__ } = _(_);
          return {
            width: _,
            height: __webpack_require__,
          };
        },
        getScale: _,
        isElement: _._,
        isRTL: function (_) {
          return "rtl" === (0, _._)(_).direction;
        },
      };
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
          _ = _ || _ ? [...(_ ? (0, _._)(_) : []), ...(0, _._)(_)] : [];
        _.forEach((_) => {
          _ &&
            _.addEventListener("scroll", _, {
              passive: !0,
            }),
            _ && _.addEventListener("resize", _);
        });
        const _ =
          _ && _
            ? (function (_, _) {
                let _,
                  _ = null;
                const _ = (0, _._)(_);
                function _() {
                  clearTimeout(_), _ && _.disconnect(), (_ = null);
                }
                return (
                  (function _(_, _) {
                    void 0 === _ && (_ = !1), void 0 === _ && (_ = 1), _();
                    const {
                      left: _,
                      top: _,
                      width: _,
                      height: _,
                    } = _.getBoundingClientRect();
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
                      if (_ !== _) {
                        if (!_) return _();
                        _
                          ? _(!1, _)
                          : (_ = setTimeout(() => {
                              _(!1, 1e-7);
                            }, 100));
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
                  })(!0),
                  _
                );
              })(_, _)
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
              (_.unobserve(_),
              cancelAnimationFrame(_),
              (_ = requestAnimationFrame(() => {
                _ && _.observe(_);
              }))),
              __webpack_require__();
          })),
          _ && !_ && _.observe(_),
          _.observe(_));
        let _ = _ ? _(_) : null;
        return (
          _ &&
            (function _() {
              const _ = _(_);
              !_ ||
                (_._ === _._ &&
                  _._ === _._ &&
                  _.width === _.width &&
                  _.height === _.height) ||
                __webpack_require__();
              (_ = _), (_ = requestAnimationFrame(_));
            })(),
          __webpack_require__(),
          () => {
            _.forEach((_) => {
              _ && _.removeEventListener("scroll", _),
                _ && _.removeEventListener("resize", _);
            }),
              _ && _(),
              _ && _.disconnect(),
              (_ = null),
              _ && cancelAnimationFrame(_);
          }
        );
      }
      const _ = _._,
        _ = _._,
        _ = (_, _, _) => {
          const _ = new Map(),
            _ = {
              platform: _,
              ..._,
            },
            _ = {
              ..._.platform,
              _: _,
            };
          return (0, _._)(_, _, {
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
        const {
          overflow: _,
          overflowX: __webpack_require__,
          overflowY: _,
          display: _,
        } = _(_);
        return (
          /auto|scroll|overlay|hidden|clip/.test(_ + _ + __webpack_require__) &&
          !["inline", "contents"].includes(_)
        );
      }
      function _(_) {
        return ["table", "td", "th"].includes(_(_));
      }
      function _(_) {
        return [":popover-open", ":modal"].some((_) => {
          try {
            return _.matches(_);
          } catch (_) {
            return !1;
          }
        });
      }
      function _(_) {
        const _ = _(),
          _ = _(_) ? _(_) : _;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (_) => !!_[_] && "none" !== _[_],
          ) ||
          (!!_.containerType && "normal" !== _.containerType) ||
          (!_ && !!_.backdropFilter && "none" !== _.backdropFilter) ||
          (!_ && !!_.filter && "none" !== _.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((_) => (_.willChange || "").includes(_)) ||
          ["paint", "layout", "strict", "content"].some((_) =>
            (_.contain || "").includes(_),
          )
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
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function _(_) {
        return ["html", "body", "#document"].includes(_(_));
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
        return _(_)
          ? _.ownerDocument
            ? _.ownerDocument.body
            : _.body
          : _(_) && _(_)
            ? _
            : _(_);
      }
      function _(_, _, _) {
        var _;
        void 0 === _ && (_ = []), void 0 === _ && (_ = !0);
        const _ = _(_),
          _ = _ === (null == (_ = _.ownerDocument) ? void 0 : _.body),
          _ = _(_);
        if (_) {
          const _ = (function (_) {
            return _.parent && Object.getPrototypeOf(_.parent)
              ? _.frameElement
              : null;
          })(_);
          return _.concat(
            _,
            _.visualViewport || [],
            _(_) ? _ : [],
            _ && _ ? _(_) : [],
          );
        }
        return _.concat(_, _(_, [], _));
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
      });
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
        },
        _ = {
          start: "end",
          end: "start",
        };
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
        return "y" === _ ? "height" : "width";
      }
      function _(_) {
        return ["top", "bottom"].includes(_(_)) ? "y" : "x";
      }
      function _(_) {
        return "x" === _(_) ? "y" : "x";
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
        return _.replace(/start|end/g, (_) => _[_]);
      }
      function _(_, _, _, _) {
        const _ = _(_);
        let _ = (function (_, _, _) {
          const _ = ["left", "right"],
            _ = ["right", "left"],
            _ = ["top", "bottom"],
            _ = ["bottom", "top"];
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
        return _.replace(/left|right|bottom|top/g, (_) => _[_]);
      }
      function _(_) {
        return "number" != typeof _
          ? (function (_) {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                ..._,
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
        const { _: _, _: __webpack_require__, width: _, height: _ } = _;
        return {
          width: _,
          height: _,
          top: __webpack_require__,
          left: _,
          right: _ + _,
          bottom: __webpack_require__ + _,
          _: _,
          _: __webpack_require__,
        };
      }
    },
  },
]);

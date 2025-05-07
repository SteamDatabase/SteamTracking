(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2450],
  {
    chunkid: (_, _) => {
      var _;
      !(function () {
        "use strict";
        var _ = {}.hasOwnProperty;
        function _() {
          for (var _ = [], _ = 0; _ < arguments.length; _++) {
            var _ = arguments[_];
            if (_) {
              var _ = typeof _;
              if ("string" === _ || "number" === _) _.push(_);
              else if (Array.isArray(_)) {
                if (_.length) {
                  var _ = _.apply(null, _);
                  _ && _.push(_);
                }
              } else if ("object" === _) {
                if (
                  _.toString !== Object.prototype.toString &&
                  !_.toString.toString().includes("[native code]")
                ) {
                  _.push(__webpack_require__.toString());
                  continue;
                }
                for (var _ in _) _.call(_, _) && _[_] && _.push(_);
              }
            }
          }
          return _.join(" ");
        }
        _.exports
          ? ((_.default = _), (_.exports = _))
          : void 0 ===
              (_ = function () {
                return _;
              }.apply(_, [])) || (_.exports = _);
      })();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = "undefined" != typeof document ? _.useLayoutEffect : _.useEffect;
      function _(_, _) {
        if (_ === _) return !0;
        if (typeof _ != typeof _) return !1;
        if ("function" == typeof _ && _.toString() === _.toString()) return !0;
        let _, _, _;
        if (_ && _ && "object" == typeof _) {
          if (Array.isArray(_)) {
            if (((_ = _.length), _ !== _.length)) return !1;
            for (_ = _; 0 != _--; ) if (!_(_[_], _[_])) return !1;
            return !0;
          }
          if (
            ((_ = Object.keys(_)), (_ = _.length), _ !== Object.keys(_).length)
          )
            return !1;
          for (_ = _; 0 != _--; )
            if (!{}.hasOwnProperty.call(_, _[_])) return !1;
          for (_ = _; 0 != _--; ) {
            const _ = _[_];
            if (("_owner" !== _ || !_.$$typeof) && !_(_[_], _[_])) return !1;
          }
          return !0;
        }
        return _ != _ && _ != _;
      }
      function _(_) {
        if ("undefined" == typeof window) return 1;
        return (_.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function _(_, _) {
        const _ = _(_);
        return Math.round(_ * _) / _;
      }
      function _(_) {
        const _ = _.useRef(_);
        return (
          _(() => {
            _.current = _;
          }),
          _
        );
      }
      function _(_) {
        void 0 === _ && (_ = {});
        const {
            placement: _ = "bottom",
            strategy: __webpack_require__ = "absolute",
            middleware: _ = [],
            platform: _,
            elements: { reference: _, floating: _ } = {},
            transform: _ = !0,
            whileElementsMounted: _,
            open: _,
          } = _,
          [_, _] = _.useState({
            _: 0,
            _: 0,
            strategy: __webpack_require__,
            placement: _,
            middlewareData: {},
            isPositioned: !1,
          }),
          [_, _] = _.useState(_);
        _(_, _) || _(_);
        const [_, _] = _.useState(null),
          [_, _] = _.useState(null),
          _ = _.useCallback((_) => {
            _ !== _.current && ((_.current = _), _(_));
          }, []),
          _ = _.useCallback((_) => {
            _ !== _.current && ((_.current = _), _(_));
          }, []),
          _ = _ || _,
          _ = _ || _,
          _ = _.useRef(null),
          _ = _.useRef(null),
          _ = _.useRef(_),
          _ = null != _,
          _ = _(_),
          _ = _(_),
          _ = _(_),
          _ = _.useCallback(() => {
            if (!_.current || !_.current) return;
            const _ = {
              placement: _,
              strategy: __webpack_require__,
              middleware: _,
            };
            _.current && (_.platform = _.current),
              (0, _._)(_.current, _.current, _).then((_) => {
                const _ = {
                  ..._,
                  isPositioned: !1 !== _.current,
                };
                _.current &&
                  !_(_.current, _) &&
                  ((_.current = _),
                  _.flushSync(() => {
                    _(_);
                  }));
              });
          }, [_, _, __webpack_require__, _, _]);
        _(() => {
          !1 === _ &&
            _.current.isPositioned &&
            ((_.current.isPositioned = !1),
            _((_) => ({
              ..._,
              isPositioned: !1,
            })));
        }, [_]);
        const _ = _.useRef(!1);
        _(
          () => (
            (_.current = !0),
            () => {
              _.current = !1;
            }
          ),
          [],
        ),
          _(() => {
            if ((_ && (_.current = _), _ && (_.current = _), _ && _)) {
              if (_.current) return _.current(_, _, _);
              _();
            }
          }, [_, _, _, _, _]);
        const _ = _.useMemo(
            () => ({
              reference: _,
              floating: _,
              setReference: _,
              setFloating: _,
            }),
            [_, _],
          ),
          _ = _.useMemo(
            () => ({
              reference: _,
              floating: _,
            }),
            [_, _],
          ),
          _ = _.useMemo(() => {
            const _ = {
              position: __webpack_require__,
              left: 0,
              top: 0,
            };
            if (!_.floating) return _;
            const _ = _(_.floating, _._),
              _ = _(_.floating, _._);
            return _
              ? {
                  ..._,
                  transform: "translate(" + _ + "px, " + _ + "px)",
                  ...(_(_.floating) >= 1.5 && {
                    willChange: "transform",
                  }),
                }
              : {
                  position: __webpack_require__,
                  left: _,
                  top: _,
                };
          }, [__webpack_require__, _, _.floating, _._, _._]);
        return _.useMemo(
          () => ({
            ..._,
            update: _,
            refs: _,
            elements: _,
            floatingStyles: _,
          }),
          [_, _, _, _, _],
        );
      }
      const _ = (_, _) => ({
          ...(0, _._)(_),
          options: [_, _],
        }),
        _ = (_, _) => ({
          ...(0, _._)(_),
          options: [_, _],
        });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_, 2),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        if (!_ || !_) return !1;
        const _ = null == _.getRootNode ? void 0 : _.getRootNode();
        if (_.contains(_)) return !0;
        if (_ && (0, _._)(_)) {
          let _ = _;
          for (; _; ) {
            if (_ === _) return !0;
            _ = _.parentNode || _.host;
          }
        }
        return !1;
      }
      function _(_) {
        return (null == _ ? void 0 : _.ownerDocument) || document;
      }
      function _(_, _) {
        if (null == _) return !1;
        if ("composedPath" in _) return _.composedPath().includes(_);
        const _ = _;
        return null != _.target && _.contains(_.target);
      }
      function _(_) {
        return "composedPath" in _ ? _.composedPath()[0] : _.target;
      }
      __webpack_require__("chunkid"), __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = _.useRef(void 0),
          _ = _.useCallback((_) => {
            const _ = _.map((_) => {
              if (null != _) {
                if ("function" == typeof _) {
                  const _ = _,
                    _ = __webpack_require__(_);
                  return "function" == typeof _
                    ? _
                    : () => {
                        __webpack_require__(null);
                      };
                }
                return (
                  (_.current = _),
                  () => {
                    _.current = null;
                  }
                );
              }
            });
            return () => {
              __webpack_require__.forEach((_) => (null == _ ? void 0 : _()));
            };
          }, _);
        return _.useMemo(
          () =>
            _.every((_) => null == _)
              ? null
              : (_) => {
                  _.current && (_.current(), (_.current = void 0)),
                    null != _ && (_.current = __webpack_require__(_));
                },
          _,
        );
      }
      const _ = {
          ..._,
        },
        _ = _.useInsertionEffect || ((_) => _());
      function _(_) {
        const _ = _.useRef(() => {
          0;
        });
        return (
          _(() => {
            _.current = _;
          }),
          _.useCallback(function () {
            for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
              _[_] = arguments[_];
            return null == _.current ? void 0 : _.current(..._);
          }, [])
        );
      }
      const _ = "ArrowUp",
        _ = "ArrowDown",
        _ = "ArrowLeft",
        _ = "ArrowRight";
      var _ = "undefined" != typeof document ? _.useLayoutEffect : _.useEffect;
      const _ = [_, _],
        _ = [_, _];
      let _ = !1,
        _ = 0;
      const _ = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + _++;
      const _ =
        _.useId ||
        function () {
          const [_, _] = _.useState(() => (_ ? _() : void 0));
          return (
            _(() => {
              null == _ && _(_());
            }, []),
            _.useEffect(() => {
              _ = !0;
            }, []),
            _
          );
        };
      function _() {
        const _ = new Map();
        return {
          emit(_, _) {
            var _;
            null == (_ = _.get(_)) || _.forEach((_) => _(_));
          },
          _(_, _) {
            _.set(_, [...(_.get(_) || []), _]);
          },
          off(_, _) {
            var _;
            _.set(
              _,
              (null == (_ = _.get(_)) ? void 0 : _.filter((_) => _ !== _)) ||
                [],
            );
          },
        };
      }
      const _ = _.createContext(null),
        _ = _.createContext(null),
        _ = () => {
          var _;
          return (null == (_ = _.useContext(_)) ? void 0 : _._) || null;
        },
        _ = () => _.useContext(_);
      function _(_) {
        return "data-floating-ui-" + _;
      }
      function _(_, _) {
        let _ = _.filter((_) => {
            var _;
            return (
              _.parentId === _ && (null == (_ = _.context) ? void 0 : _.open)
            );
          }),
          _ = _;
        for (; _.length; )
          (_ = _.filter((_) => {
            var _;
            return null == (_ = _)
              ? void 0
              : _.some((_) => {
                  var _;
                  return (
                    _.parentId === _._ &&
                    (null == (_ = _.context) ? void 0 : _.open)
                  );
                });
          })),
            (_ = __webpack_require__.concat(_));
        return _;
      }
      const _ = "data-floating-ui-focusable";
      const _ = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        _ = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        _ = (_) => {
          var _, _;
          return {
            escapeKey:
              "boolean" == typeof _
                ? _
                : null != (_ = null == _ ? void 0 : _.escapeKey) && _,
            outsidePress:
              "boolean" == typeof _
                ? _
                : null == (_ = null == _ ? void 0 : _.outsidePress) || _,
          };
        };
      function _(_, _) {
        void 0 === _ && (_ = {});
        const {
            open: __webpack_require__,
            onOpenChange: _,
            elements: _,
            dataRef: _,
          } = _,
          {
            enabled: _ = !0,
            escapeKey: _ = !0,
            outsidePress: _ = !0,
            outsidePressEvent: _ = "pointerdown",
            referencePress: _ = !1,
            referencePressEvent: _ = "pointerdown",
            ancestorScroll: _ = !1,
            bubbles: _,
            capture: _,
          } = _,
          _ = _(),
          _ = _("function" == typeof _ ? _ : () => !1),
          _ = "function" == typeof _ ? _ : _,
          _ = _.useRef(!1),
          _ = _.useRef(!1),
          { escapeKey: _, outsidePress: _ } = _(_),
          { escapeKey: _, outsidePress: _ } = _(_),
          _ = _.useRef(!1),
          _ = _((_) => {
            var _;
            if (!__webpack_require__ || !_ || !_ || "Escape" !== _.key) return;
            if (_.current) return;
            const _ =
                null == (_ = _.current.floatingContext) ? void 0 : _.nodeId,
              _ = _ ? _(_.nodesRef.current, _) : [];
            if (!_ && (_.stopPropagation(), _.length > 0)) {
              let _ = !0;
              if (
                (_.forEach((_) => {
                  var _;
                  null == (_ = _.context) ||
                    !_.open ||
                    _.context.dataRef.current.__escapeKeyBubbles ||
                    (_ = !1);
                }),
                !_)
              )
                return;
            }
            _(
              !1,
              (function (_) {
                return "nativeEvent" in _;
              })(_)
                ? _.nativeEvent
                : _,
              "escape-key",
            );
          }),
          _ = _((_) => {
            var _;
            const _ = () => {
              var _;
              _(_), null == (_ = _(_)) || _.removeEventListener("keydown", _);
            };
            null == (_ = _(_)) || _.addEventListener("keydown", _);
          }),
          _ = _((_) => {
            var _;
            const _ = _.current;
            _.current = !1;
            const _ = _.current;
            if (((_.current = !1), "click" === _ && _)) return;
            if (_) return;
            if ("function" == typeof _ && !_(_)) return;
            const _ = _(_),
              _ = "[" + _("inert") + "]",
              _ = _(_.floating).querySelectorAll(_);
            let _ = (0, _._)(_) ? _ : null;
            for (; _ && !(0, _._)(_); ) {
              const _ = (0, _._)(_);
              if ((0, _._)(_) || !(0, _._)(_)) break;
              _ = _;
            }
            if (
              _.length &&
              (0, _._)(_) &&
              !_.matches("html,body") &&
              !_(_, _.floating) &&
              Array.from(_).every((_) => !_(_, _))
            )
              return;
            if ((0, _._)(_) && _) {
              const _ = (0, _._)(_),
                _ = (0, _._)(_),
                _ = /auto|scroll/,
                _ = _ || _.test(_.overflowX),
                _ = _ || _.test(_.overflowY),
                _ = _ && _.clientWidth > 0 && _.scrollWidth > _.clientWidth,
                _ = _ && _.clientHeight > 0 && _.scrollHeight > _.clientHeight,
                _ = "rtl" === _.direction,
                _ =
                  _ &&
                  (_
                    ? _.offsetX <= _.offsetWidth - _.clientWidth
                    : _.offsetX > _.clientWidth),
                _ = _ && _.offsetY > _.clientHeight;
              if (_ || _) return;
            }
            const _ =
                null == (_ = _.current.floatingContext) ? void 0 : _.nodeId,
              _ =
                _ &&
                _(_.nodesRef.current, _).some((_) => {
                  var _;
                  return _(
                    _,
                    null == (_ = _.context) ? void 0 : _.elements.floating,
                  );
                });
            if (_(_, _.floating) || _(_, _.domReference) || _) return;
            const _ = _ ? _(_.nodesRef.current, _) : [];
            if (_.length > 0) {
              let _ = !0;
              if (
                (_.forEach((_) => {
                  var _;
                  null == (_ = _.context) ||
                    !_.open ||
                    _.context.dataRef.current.__outsidePressBubbles ||
                    (_ = !1);
                }),
                !_)
              )
                return;
            }
            _(!1, _, "outside-press");
          }),
          _ = _((_) => {
            var _;
            const _ = () => {
              var _;
              _(_), null == (_ = _(_)) || _.removeEventListener(_, _);
            };
            null == (_ = _(_)) || _.addEventListener(_, _);
          });
        _.useEffect(() => {
          if (!__webpack_require__ || !_) return;
          (_.current.__escapeKeyBubbles = _),
            (_.current.__outsidePressBubbles = _);
          let _ = -1;
          function _(_) {
            _(!1, _, "ancestor-scroll");
          }
          function _() {
            window.clearTimeout(_), (_.current = !0);
          }
          function _() {
            _ = window.setTimeout(
              () => {
                _.current = !1;
              },
              (0, _._)() ? 5 : 0,
            );
          }
          const _ = _(_.floating);
          _ &&
            (_.addEventListener("keydown", _ ? _ : _, _),
            _.addEventListener("compositionstart", _),
            _.addEventListener("compositionend", _)),
            _ && _.addEventListener(_, _ ? _ : _, _);
          let _ = [];
          return (
            _ &&
              ((0, _._)(_.domReference) && (_ = (0, _._)(_.domReference)),
              (0, _._)(_.floating) && (_ = _.concat((0, _._)(_.floating))),
              !(0, _._)(_.reference) &&
                _.reference &&
                _.reference.contextElement &&
                (_ = _.concat((0, _._)(_.reference.contextElement)))),
            (_ = _.filter((_) => {
              var _;
              return (
                _ !== (null == (_ = _.defaultView) ? void 0 : _.visualViewport)
              );
            })),
            _.forEach((_) => {
              _.addEventListener("scroll", _, {
                passive: !0,
              });
            }),
            () => {
              _ &&
                (_.removeEventListener("keydown", _ ? _ : _, _),
                _.removeEventListener("compositionstart", _),
                _.removeEventListener("compositionend", _)),
                _ && _.removeEventListener(_, _ ? _ : _, _),
                _.forEach((_) => {
                  _.removeEventListener("scroll", _);
                }),
                window.clearTimeout(_);
            }
          );
        }, [
          _,
          _,
          _,
          _,
          _,
          __webpack_require__,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
          _,
        ]),
          _.useEffect(() => {
            _.current = !1;
          }, [_, _]);
        const _ = _.useMemo(
            () => ({
              onKeyDown: _,
              ...(_ && {
                [_[_]]: (_) => {
                  _(!1, _.nativeEvent, "reference-press");
                },
                ...("click" !== _ && {
                  onClick(_) {
                    _(!1, _.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [_, _, _, _],
          ),
          _ = _.useMemo(
            () => ({
              onKeyDown: _,
              onMouseDown() {
                _.current = !0;
              },
              onMouseUp() {
                _.current = !0;
              },
              [_[_]]: () => {
                _.current = !0;
              },
            }),
            [_, _],
          );
        return _.useMemo(
          () =>
            _
              ? {
                  reference: _,
                  floating: _,
                }
              : {},
          [_, _, _],
        );
      }
      function _(_) {
        void 0 === _ && (_ = {});
        const { nodeId: _ } = _,
          _ = (function (_) {
            const { open: _ = !1, onOpenChange: _, elements: _ } = _,
              _ = _(),
              _ = _.useRef({}),
              [_] = _.useState(() => _()),
              _ = null != _(),
              [_, _] = _.useState(_.reference),
              _ = _((_, _, _) => {
                (_.current.openEvent = _ ? _ : void 0),
                  _.emit("openchange", {
                    open: _,
                    event: _,
                    reason: _,
                    nested: _,
                  }),
                  null == _ || __webpack_require__(_, _, _);
              }),
              _ = _.useMemo(
                () => ({
                  setPositionReference: _,
                }),
                [],
              ),
              _ = _.useMemo(
                () => ({
                  reference: _ || _.reference || null,
                  floating: _.floating || null,
                  domReference: _.reference,
                }),
                [_, _.reference, _.floating],
              );
            return _.useMemo(
              () => ({
                dataRef: _,
                open: _,
                onOpenChange: _,
                elements: _,
                events: _,
                floatingId: _,
                refs: _,
              }),
              [_, _, _, _, _, _],
            );
          })({
            ..._,
            elements: {
              reference: null,
              floating: null,
              ..._.elements,
            },
          }),
          _ = _.rootContext || _,
          _ = _.elements,
          [_, _] = _.useState(null),
          [_, _] = _.useState(null),
          _ = (null == _ ? void 0 : _.domReference) || _,
          _ = _.useRef(null),
          _ = _();
        _(() => {
          _ && (_.current = _);
        }, [_]);
        const _ = (0, _._)({
            ..._,
            elements: {
              ..._,
              ...(_ && {
                reference: _,
              }),
            },
          }),
          _ = _.useCallback(
            (_) => {
              const _ = (0, _._)(_)
                ? {
                    getBoundingClientRect: () => _.getBoundingClientRect(),
                    contextElement: _,
                  }
                : _;
              _(_), _.refs.setReference(_);
            },
            [_.refs],
          ),
          _ = _.useCallback(
            (_) => {
              ((0, _._)(_) || null === _) && ((_.current = _), _(_)),
                ((0, _._)(_.refs.reference.current) ||
                  null === _.refs.reference.current ||
                  (null !== _ && !(0, _._)(_))) &&
                  _.refs.setReference(_);
            },
            [_.refs],
          ),
          _ = _.useMemo(
            () => ({
              ..._.refs,
              setReference: _,
              setPositionReference: _,
              domReference: _,
            }),
            [_.refs, _, _],
          ),
          _ = _.useMemo(
            () => ({
              ..._.elements,
              domReference: _,
            }),
            [_.elements, _],
          ),
          _ = _.useMemo(
            () => ({
              ..._,
              ..._,
              refs: _,
              elements: _,
              nodeId: _,
            }),
            [_, _, _, _, _],
          );
        return (
          _(() => {
            _.dataRef.current.floatingContext = _;
            const _ =
              null == _ ? void 0 : _.nodesRef.current.find((_) => _._ === _);
            _ && (_.context = _);
          }),
          _.useMemo(
            () => ({
              ..._,
              context: _,
              refs: _,
              elements: _,
            }),
            [_, _, _, _],
          )
        );
      }
      const _ = "active",
        _ = "selected";
      function _(_, _, _) {
        const _ = new Map(),
          _ = "item" === _;
        let _ = _;
        if (_ && _) {
          const { [_]: _, [_]: _, ..._ } = _;
          _ = _;
        }
        return {
          ...("floating" === _ && {
            tabIndex: -1,
            [_]: "",
          }),
          ..._,
          ..._.map((_) => {
            const _ = _ ? _[_] : null;
            return "function" == typeof _ ? (_ ? _(_) : null) : _;
          })
            .concat(_)
            .reduce(
              (_, _) =>
                _
                  ? (Object.entries(_).forEach((_) => {
                      let [_, _] = _;
                      var _;
                      (_ && [_, _].includes(_)) ||
                        (0 === __webpack_require__.indexOf("on")
                          ? (_.has(_) || _.set(_, []),
                            "function" == typeof _ &&
                              (null == (_ = _.get(_)) || _.push(_),
                              (_[_] = function () {
                                for (
                                  var _,
                                    _ = arguments.length,
                                    _ = new Array(_),
                                    _ = 0;
                                  _ < _;
                                  _++
                                )
                                  _[_] = arguments[_];
                                return null == (_ = _.get(_))
                                  ? void 0
                                  : _.map((_) => _(..._)).find(
                                      (_) => void 0 !== _,
                                    );
                              })))
                          : (_[_] = _));
                    }),
                    _)
                  : _,
              {},
            ),
        };
      }
      function _(_) {
        void 0 === _ && (_ = []);
        const _ = _.map((_) => (null == _ ? void 0 : _.reference)),
          _ = _.map((_) => (null == _ ? void 0 : _.floating)),
          _ = _.map((_) => (null == _ ? void 0 : _.item)),
          _ = _.useCallback((_) => _(_, _, "reference"), _),
          _ = _.useCallback((_) => _(_, _, "floating"), _),
          _ = _.useCallback((_) => _(_, _, "item"), _);
        return _.useMemo(
          () => ({
            getReferenceProps: _,
            getFloatingProps: _,
            getItemProps: _,
          }),
          [_, _, _],
        );
      }
    },
  },
]);

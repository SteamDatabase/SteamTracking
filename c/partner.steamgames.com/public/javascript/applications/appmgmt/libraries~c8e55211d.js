"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8310],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      let _ = function (_) {
        _();
      };
      const _ = () => _,
        _ = Symbol.for("react-redux-context"),
        _ = "undefined" != typeof globalThis ? globalThis : {};
      function _() {
        var _;
        if (!_.createContext) return {};
        const _ = null != (_ = _[_]) ? _ : (_[_] = new Map());
        let _ = _.get(_.createContext);
        return _ || ((_ = _.createContext(null)), _.set(_.createContext, _)), _;
      }
      const _ = _();
      let _ = null;
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      const _ = [
        "initMapStateToProps",
        "initMapDispatchToProps",
        "initMergeProps",
      ];
      function _(
        _,
        _,
        _,
        _,
        { areStatesEqual: _, areOwnPropsEqual: _, areStatePropsEqual: _ },
      ) {
        let _,
          _,
          _,
          _,
          _,
          _ = !1;
        function _(_, _) {
          const _ = !_(_, _),
            _ = !_(_, _, _, _);
          return (
            (_ = _),
            (_ = _),
            _ && _
              ? ((_ = _(_, _)),
                _.dependsOnOwnProps && (_ = _(_, _)),
                (_ = __webpack_require__(_, _, _)),
                _)
              : _
                ? (_.dependsOnOwnProps && (_ = _(_, _)),
                  _.dependsOnOwnProps && (_ = _(_, _)),
                  (_ = __webpack_require__(_, _, _)),
                  _)
                : _
                  ? (function () {
                      const _ = _(_, _),
                        _ = !_(_, _);
                      return (
                        (_ = _), _ && (_ = __webpack_require__(_, _, _)), _
                      );
                    })()
                  : _
          );
        }
        return function (_, _) {
          return _
            ? _(_, _)
            : ((_ = _),
              (_ = _),
              (_ = _(_, _)),
              (_ = _(_, _)),
              (_ = __webpack_require__(_, _, _)),
              (_ = !0),
              _);
        };
      }
      function _(_) {
        return function (_) {
          const _ = _(_);
          function _() {
            return _;
          }
          return (_.dependsOnOwnProps = !1), _;
        };
      }
      function _(_) {
        return _.dependsOnOwnProps
          ? Boolean(_.dependsOnOwnProps)
          : 1 !== _.length;
      }
      function _(_, _) {
        return function (_, { displayName: _ }) {
          const _ = function (_, _) {
            return _.dependsOnOwnProps
              ? _.mapToProps(_, _)
              : _.mapToProps(_, void 0);
          };
          return (
            (_.dependsOnOwnProps = !0),
            (_.mapToProps = function (_, _) {
              (_.mapToProps = _), (_.dependsOnOwnProps = _(_));
              let _ = _(_, _);
              return (
                "function" == typeof _ &&
                  ((_.mapToProps = _),
                  (_.dependsOnOwnProps = _(_)),
                  (_ = _(_, _))),
                _
              );
            }),
            _
          );
        };
      }
      function _(_, _) {
        return (_, _) => {
          throw new Error(
            `Invalid value of type ${typeof _} for ${_} argument when connecting component ${_.wrappedComponentName}.`,
          );
        };
      }
      function _(_, _, _) {
        return (0, _._)({}, _, _, _);
      }
      const _ = {
        notify() {},
        get: () => [],
      };
      function _(_, _) {
        let _,
          _ = _,
          _ = 0,
          _ = !1;
        function _() {
          _.onStateChange && _.onStateChange();
        }
        function _() {
          _++,
            _ ||
              ((_ = _ ? _.addNestedSub(_) : _.subscribe(_)),
              (_ = (function () {
                const _ = _();
                let _ = null,
                  _ = null;
                return {
                  clear() {
                    (_ = null), (_ = null);
                  },
                  notify() {
                    _(() => {
                      let _ = _;
                      for (; _; ) _.callback(), (_ = _.next);
                    });
                  },
                  get() {
                    let _ = [],
                      _ = _;
                    for (; _; ) _.push(_), (_ = _.next);
                    return _;
                  },
                  subscribe(_) {
                    let _ = !0,
                      _ = (_ = {
                        callback: _,
                        next: null,
                        prev: _,
                      });
                    return (
                      _.prev ? (_.prev.next = _) : (_ = _),
                      function () {
                        _ &&
                          null !== _ &&
                          ((_ = !1),
                          _.next ? (_.next.prev = _.prev) : (_ = _.prev),
                          _.prev ? (_.prev.next = _.next) : (_ = _.next));
                      }
                    );
                  },
                };
              })()));
        }
        function _() {
          _--,
            _ &&
              0 === _ &&
              (__webpack_require__(), (_ = void 0), _.clear(), (_ = _));
        }
        const _ = {
          addNestedSub: function (_) {
            _();
            const _ = _.subscribe(_);
            let _ = !1;
            return () => {
              _ || ((_ = !0), _(), _());
            };
          },
          notifyNestedSubs: function () {
            _.notify();
          },
          handleChangeWrapper: _,
          isSubscribed: function () {
            return _;
          },
          trySubscribe: function () {
            _ || ((_ = !0), _());
          },
          tryUnsubscribe: function () {
            _ && ((_ = !1), _());
          },
          getListeners: () => _,
        };
        return _;
      }
      const _ = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      )
        ? _.useLayoutEffect
        : _.useEffect;
      function _(_, _) {
        return _ === _
          ? 0 !== _ || 0 !== _ || 1 / _ == 1 / _
          : _ != _ && _ != _;
      }
      function _(_, _) {
        if (_(_, _)) return !0;
        if (
          "object" != typeof _ ||
          null === _ ||
          "object" != typeof _ ||
          null === _
        )
          return !1;
        const _ = Object.keys(_),
          _ = Object.keys(_);
        if (_.length !== _.length) return !1;
        for (let _ = 0; _ < _.length; _++)
          if (
            !Object.prototype.hasOwnProperty.call(_, _[_]) ||
            !_(_[_[_]], _[_[_]])
          )
            return !1;
        return !0;
      }
      const _ = ["reactReduxForwardedRef"];
      let _ = () => {
        throw new Error("uSES not initialized!");
      };
      const _ = [null, null];
      function _(_, _, _, _, _, _) {
        (_.current = _),
          (_.current = !1),
          _.current && ((_.current = null), _());
      }
      function _(_, _) {
        return _ === _;
      }
      const _ = function (
        _,
        _,
        _,
        {
          pure: _,
          areStatesEqual: _ = _,
          areOwnPropsEqual: _ = _,
          areStatePropsEqual: _ = _,
          areMergedPropsEqual: _ = _,
          forwardRef: _ = !1,
          context: _ = _,
        } = {},
      ) {
        const _ = _,
          _ = (function (_) {
            return _
              ? "function" == typeof _
                ? _(_)
                : _(_, "mapStateToProps")
              : _(() => ({}));
          })(_),
          _ = (function (_) {
            return _ && "object" == typeof _
              ? _((_) =>
                  (function (_, _) {
                    const _ = {};
                    for (const _ in _) {
                      const _ = _[_];
                      "function" == typeof _ && (_[_] = (..._) => _(_(..._)));
                    }
                    return _;
                  })(_, _),
                )
              : _
                ? "function" == typeof _
                  ? _(_)
                  : _(_, "mapDispatchToProps")
                : _((_) => ({
                    dispatch: _,
                  }));
          })(_),
          _ = (function (_) {
            return _
              ? "function" == typeof _
                ? (function (_) {
                    return function (
                      _,
                      { displayName: _, areMergedPropsEqual: _ },
                    ) {
                      let _,
                        _ = !1;
                      return function (_, _, _) {
                        const _ = _(_, _, _);
                        return _ ? _(_, _) || (_ = _) : ((_ = !0), (_ = _)), _;
                      };
                    };
                  })(_)
                : _(_, "mergeProps")
              : () => _;
          })(_),
          _ = Boolean(_);
        return (_) => {
          const _ = _.displayName || _.name || "Component",
            _ = `Connect(${_})`,
            _ = {
              shouldHandleStateChanges: _,
              displayName: _,
              wrappedComponentName: _,
              WrappedComponent: _,
              initMapStateToProps: _,
              initMapDispatchToProps: _,
              initMergeProps: _,
              areStatesEqual: _,
              areStatePropsEqual: _,
              areOwnPropsEqual: _,
              areMergedPropsEqual: _,
            };
          function _(_) {
            const [_, _, _] = _.useMemo(() => {
                const { reactReduxForwardedRef: _ } = _,
                  _ = (0, _._)(_, _);
                return [_.context, _, _];
              }, [_]),
              _ = _.useMemo(
                () =>
                  _ &&
                  _.Consumer &&
                  (0, _.isContextConsumer)(_.createElement(_.Consumer, null))
                    ? _
                    : _,
                [_, _],
              ),
              _ = _.useContext(_),
              _ =
                Boolean(_.store) &&
                Boolean(_.store.getState) &&
                Boolean(_.store.dispatch),
              _ = Boolean(_) && Boolean(_.store);
            const _ = _ ? _.store : _.store,
              _ = _ ? _.getServerState : _.getState,
              _ = _.useMemo(
                () =>
                  (function (_, _) {
                    let {
                        initMapStateToProps: _,
                        initMapDispatchToProps: _,
                        initMergeProps: _,
                      } = _,
                      _ = (0, _._)(_, _);
                    return _(__webpack_require__(_, _), _(_, _), _(_, _), _, _);
                  })(_.dispatch, _),
                [_],
              ),
              [_, _] = _.useMemo(() => {
                if (!_) return _;
                const _ = _(_, _ ? void 0 : _.subscription),
                  _ = _.notifyNestedSubs.bind(_);
                return [_, _];
              }, [_, _, _]),
              _ = _.useMemo(
                () =>
                  _
                    ? _
                    : (0, _._)({}, _, {
                        subscription: _,
                      }),
                [_, _, _],
              ),
              _ = _.useRef(),
              _ = _.useRef(_),
              _ = _.useRef(),
              _ = _.useRef(!1),
              _ = (_.useRef(!1), _.useRef(!1)),
              _ = _.useRef();
            _(
              () => (
                (_.current = !0),
                () => {
                  _.current = !1;
                }
              ),
              [],
            );
            const _ = _.useMemo(
                () => () =>
                  _.current && _ === _.current ? _.current : _(_.getState(), _),
                [_, _],
              ),
              _ = _.useMemo(
                () => (_) =>
                  _
                    ? (function (_, _, _, _, _, _, _, _, _, _, _) {
                        if (!_) return () => {};
                        let _ = !1,
                          _ = null;
                        const _ = () => {
                          if (_ || !_.current) return;
                          const _ = _.getState();
                          let _, _;
                          try {
                            _ = _(_, _.current);
                          } catch (_) {
                            (_ = _), (_ = _);
                          }
                          _ || (_ = null),
                            _ === _.current
                              ? _.current || _()
                              : ((_.current = _),
                                (_.current = _),
                                (_.current = !0),
                                _());
                        };
                        return (
                          (_.onStateChange = _),
                          __webpack_require__.trySubscribe(),
                          _(),
                          () => {
                            if (
                              ((_ = !0),
                              __webpack_require__.tryUnsubscribe(),
                              (_.onStateChange = null),
                              _)
                            )
                              throw _;
                          }
                        );
                      })(_, _, _, _, _, _, _, _, _, _, _)
                    : () => {},
                [_],
              );
            var _, _, _;
            let _;
            (_ = _), (_ = [_, _, _, _, _, _]), _(() => _(..._), _);
            try {
              _ = _(_, _, _ ? () => _(_(), _) : _);
            } catch (_) {
              throw (
                (_.current &&
                  (_.message += `\nThe error may be correlated with this previous error:\n${_.current.stack}\n\n`),
                _)
              );
            }
            _(() => {
              (_.current = void 0), (_.current = void 0), (_.current = _);
            });
            const _ = _.useMemo(
              () =>
                _.createElement(
                  _,
                  (0, _._)({}, _, {
                    ref: _,
                  }),
                ),
              [_, _, _],
            );
            return _.useMemo(
              () =>
                _
                  ? _.createElement(
                      _.Provider,
                      {
                        value: _,
                      },
                      _,
                    )
                  : _,
              [_, _, _],
            );
          }
          const _ = _.memo(_);
          if (
            ((_.WrappedComponent = _), (_.displayName = _.displayName = _), _)
          ) {
            const _ = _.forwardRef(function (_, _) {
              return _.createElement(
                _,
                (0, _._)({}, _, {
                  reactReduxForwardedRef: _,
                }),
              );
            });
            return (_.displayName = _), (_.WrappedComponent = _), _()(_, _);
          }
          return _()(_, _);
        };
      };
      const _ = function ({
        store: _,
        context: _,
        children: _,
        serverState: _,
        stabilityCheck: _ = "once",
        noopCheck: _ = "once",
      }) {
        const _ = _.useMemo(() => {
            const _ = _(_);
            return {
              store: _,
              subscription: _,
              getServerState: _ ? () => _ : void 0,
              stabilityCheck: _,
              noopCheck: _,
            };
          }, [_, _, _, _]),
          _ = _.useMemo(() => _.getState(), [_]);
        _(() => {
          const { subscription: _ } = _;
          return (
            (_.onStateChange = _.notifyNestedSubs),
            _.trySubscribe(),
            _ !== _.getState() && _.notifyNestedSubs(),
            () => {
              _.tryUnsubscribe(), (_.onStateChange = void 0);
            }
          );
        }, [_, _]);
        const _ = _ || _;
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _,
        );
      };
      var _, _;
      (_ = _.useSyncExternalStoreWithSelector),
        (_ = _),
        ((_) => {
          _ = _;
        })(_.useSyncExternalStore),
        (_ = _.unstable_batchedUpdates),
        (_ = _);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ =
          Number.isNaN ||
          function (_) {
            return "number" == typeof _ && _ != _;
          };
      function _(_, _) {
        return _ === _ || !(!_(_) || !_(_));
      }
      function _(_, _) {
        if (_.length !== _.length) return !1;
        for (var _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
        return !0;
      }
      function _(_, _) {
        void 0 === _ && (_ = _);
        var _ = null;
        function _() {
          for (var _ = [], _ = 0; _ < arguments.length; _++)
            _[_] = arguments[_];
          if (_ && _.lastThis === this && _(_, _.lastArgs)) return _.lastResult;
          var _ = _.apply(this, _);
          return (
            (_ = {
              lastResult: _,
              lastArgs: _,
              lastThis: this,
            }),
            _
          );
        }
        return (
          (_.clear = function () {
            _ = null;
          }),
          _
        );
      }
      var _ = __webpack_require__("chunkid");
      function _(_, _) {}
      _.bind(null, "warn"), _.bind(null, "error");
      function _() {}
      function _(_, _, _) {
        const _ = _.map((_) => {
          const _ = (function (_, _) {
            return {
              ..._,
              ..._,
            };
          })(_, _.options);
          return (
            _.addEventListener(_.eventName, _._, _),
            function () {
              _.removeEventListener(_.eventName, _._, _);
            }
          );
        });
        return function () {
          _.forEach((_) => {
            _();
          });
        };
      }
      const _ = !0,
        _ = "Invariant failed";
      class _ extends Error {}
      function _(_, _) {
        if (!_) throw new _(_ ? _ : `${_}: ${_ || ""}`);
      }
      _.prototype.toString = function () {
        return this.message;
      };
      class _ extends _.Component {
        constructor(..._) {
          super(..._),
            (this.callbacks = null),
            (this.unbind = _),
            (this.onWindowError = (_) => {
              const _ = this.getCallbacks();
              _.isDragging() && _.tryAbort();
              _.error instanceof _ && _.preventDefault();
            }),
            (this.getCallbacks = () => {
              if (!this.callbacks)
                throw new Error(
                  "Unable to find AppCallbacks in <ErrorBoundary/>",
                );
              return this.callbacks;
            }),
            (this.setCallbacks = (_) => {
              this.callbacks = _;
            });
        }
        componentDidMount() {
          this.unbind = _(window, [
            {
              eventName: "error",
              _: this.onWindowError,
            },
          ]);
        }
        componentDidCatch(_) {
          if (!(_ instanceof _)) throw _;
          this.setState({});
        }
        componentWillUnmount() {
          this.unbind();
        }
        render() {
          return this.props.children(this.setCallbacks);
        }
      }
      const _ = (_) => _ + 1,
        _ = (_, _) => {
          const _ = _.droppableId === _.droppableId,
            _ = _(_.index),
            _ = _(_.index);
          return _
            ? `\n      You have moved the item from position ${_}\n      to position ${_}\n    `
            : `\n    You have moved the item from position ${_}\n    in list ${_.droppableId}\n    to list ${_.droppableId}\n    in position ${_}\n  `;
        },
        _ = (_, _, _) =>
          _.droppableId === _.droppableId
            ? `\n      The item ${_}\n      has been combined with ${_.draggableId}`
            : `\n      The item ${_}\n      in list ${_.droppableId}\n      has been combined with ${_.draggableId}\n      in list ${_.droppableId}\n    `,
        _ = (_) =>
          `\n  The item has returned to its starting position\n  of ${_(_.index)}\n`,
        _ = {
          dragHandleUsageInstructions:
            "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
          onDragStart: (_) =>
            `\n  You have lifted an item in position ${_(_.source.index)}\n`,
          onDragUpdate: (_) => {
            const _ = _.destination;
            if (_) return _(_.source, _);
            const _ = _.combine;
            return _
              ? _(_.draggableId, _.source, _)
              : "You are over an area that cannot be dropped on";
          },
          onDragEnd: (_) => {
            if ("CANCEL" === _.reason)
              return `\n      Movement cancelled.\n      ${_(_.source)}\n    `;
            const _ = _.destination,
              _ = _.combine;
            return _
              ? `\n      You have dropped the item.\n      ${_(_.source, _)}\n    `
              : _
                ? `\n      You have dropped the item.\n      ${_(_.draggableId, _.source, _)}\n    `
                : `\n    The item has been dropped while not over a drop area.\n    ${_(_.source)}\n  `;
          },
        };
      var _ = _;
      const _ = {
          _: 0,
          _: 0,
        },
        _ = (_, _) => ({
          _: _._ + _._,
          _: _._ + _._,
        }),
        _ = (_, _) => ({
          _: _._ - _._,
          _: _._ - _._,
        }),
        _ = (_, _) => _._ === _._ && _._ === _._,
        _ = (_) => ({
          _: 0 !== _._ ? -_._ : 0,
          _: 0 !== _._ ? -_._ : 0,
        }),
        _ = (_, _, _ = 0) =>
          "x" === _
            ? {
                _: _,
                _: _,
              }
            : {
                _: _,
                _: _,
              },
        _ = (_, _) => Math.sqrt((_._ - _._) ** 2 + (_._ - _._) ** 2),
        _ = (_, _) => Math.min(..._.map((_) => _(_, _))),
        _ = (_) => (_) => ({
          _: _(_._),
          _: _(_._),
        });
      const _ = (_, _) => ({
          top: _.top + _._,
          left: _.left + _._,
          bottom: _.bottom + _._,
          right: _.right + _._,
        }),
        _ = (_) => [
          {
            _: _.left,
            _: _.top,
          },
          {
            _: _.right,
            _: _.top,
          },
          {
            _: _.left,
            _: _.bottom,
          },
          {
            _: _.right,
            _: _.bottom,
          },
        ],
        _ = (_, _) =>
          _ && _.shouldClipSubject
            ? ((_, _) => {
                const _ = (0, _._)({
                  top: Math.max(_.top, _.top),
                  right: Math.min(_.right, _.right),
                  bottom: Math.min(_.bottom, _.bottom),
                  left: Math.max(_.left, _.left),
                });
                return _.width <= 0 || _.height <= 0 ? null : _;
              })(_.pageMarginBox, _)
            : (0, _._)(_);
      var _ = ({ page: _, withPlaceholder: _, axis: _, frame: _ }) => {
          const _ = ((_, _) => (_ ? _(_, _.scroll.diff.displacement) : _))(
              _.marginBox,
              _,
            ),
            _ = ((_, _, _) =>
              _ && _.increasedBy
                ? {
                    ..._,
                    [_.end]: _[_.end] + _.increasedBy[_.line],
                  }
                : _)(_, _, _);
          return {
            page: _,
            withPlaceholder: _,
            active: _(_, _),
          };
        },
        _ = (_, _) => {
          _.frame || _(!1);
          const _ = _.frame,
            _ = _(_, _.scroll.initial),
            _ = _(_),
            _ = {
              ..._,
              scroll: {
                initial: _.scroll.initial,
                current: _,
                diff: {
                  value: _,
                  displacement: _,
                },
                max: _.scroll.max,
              },
            },
            _ = _({
              page: _.subject.page,
              withPlaceholder: _.subject.withPlaceholder,
              axis: _.axis,
              frame: _,
            });
          return {
            ..._,
            frame: _,
            subject: _,
          };
        };
      const _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
        _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
        _ = _((_) => Object.values(_)),
        _ = _((_) => Object.values(_));
      var _ = _((_, _) => {
        const _ = _(_)
          .filter((_) => _ === _.descriptor.droppableId)
          .sort((_, _) => _.descriptor.index - _.descriptor.index);
        return _;
      });
      function _(_) {
        return _._ && "REORDER" === _._.type ? _._.destination : null;
      }
      function _(_) {
        return _._ && "COMBINE" === _._.type ? _._.combine : null;
      }
      var _ = _((_, _) => _.filter((_) => _.descriptor._ !== _.descriptor._)),
        _ = (_, _) => _.descriptor.droppableId === _.descriptor._;
      const _ = {
          point: _,
          value: 0,
        },
        _ = {
          invisible: {},
          visible: {},
          all: [],
        };
      var _ = {
          displaced: _,
          displacedBy: _,
          _: null,
        },
        _ = (_, _) => (_) => _ <= _ && _ <= _,
        _ = (_) => {
          const _ = _(_.top, _.bottom),
            _ = _(_.left, _.right);
          return (_) => {
            if (
              _(_.top) &&
              _(_.bottom) &&
              __webpack_require__(_.left) &&
              __webpack_require__(_.right)
            )
              return !0;
            const _ = _(_.top) || _(_.bottom),
              _ = __webpack_require__(_.left) || __webpack_require__(_.right);
            if (_ && _) return !0;
            const _ = _.top < _.top && _.bottom > _.bottom,
              _ = _.left < _.left && _.right > _.right;
            if (_ && _) return !0;
            return (_ && _) || (_ && _);
          };
        },
        _ = (_) => {
          const _ = _(_.top, _.bottom),
            _ = _(_.left, _.right);
          return (_) =>
            _(_.top) &&
            _(_.bottom) &&
            __webpack_require__(_.left) &&
            __webpack_require__(_.right);
        };
      const _ = {
          direction: "vertical",
          line: "y",
          crossAxisLine: "x",
          start: "top",
          end: "bottom",
          size: "height",
          crossAxisStart: "left",
          crossAxisEnd: "right",
          crossAxisSize: "width",
        },
        _ = {
          direction: "horizontal",
          line: "x",
          crossAxisLine: "y",
          start: "left",
          end: "right",
          size: "width",
          crossAxisStart: "top",
          crossAxisEnd: "bottom",
          crossAxisSize: "height",
        };
      const _ = ({
          target: _,
          destination: _,
          viewport: _,
          withDroppableDisplacement: _,
          isVisibleThroughFrameFn: _,
        }) => {
          const _ = _
            ? ((_, _) => {
                const _ = _.frame ? _.frame.scroll.diff.displacement : _;
                return _(_, _);
              })(_, _)
            : _;
          return (
            ((_, _, _) =>
              !!_.subject.active && __webpack_require__(_.subject.active)(_))(
              _,
              _,
              _,
            ) && ((_, _, _) => __webpack_require__(_)(_))(_, _, _)
          );
        },
        _ = (_) =>
          _({
            ..._,
            isVisibleThroughFrameFn: _,
          });
      function _({
        afterDragging: _,
        destination: _,
        displacedBy: _,
        viewport: _,
        forceShouldAnimate: _,
        last: _,
      }) {
        return _.reduce(
          function (_, _) {
            const _ = (function (_, _) {
                const _ = _.page.marginBox,
                  _ = {
                    top: _.point._,
                    right: 0,
                    bottom: 0,
                    left: _.point._,
                  };
                return (0, _._)((0, _._)(_, _));
              })(_, _),
              _ = _.descriptor._;
            _.all.push(_);
            var _;
            if (
              !((_ = {
                target: _,
                destination: _,
                viewport: _,
                withDroppableDisplacement: !0,
              }),
              _({
                ..._,
                isVisibleThroughFrameFn: _,
              }))
            )
              return (_.invisible[_.descriptor._] = !0), _;
            const _ = ((_, _, _) => {
                if ("boolean" == typeof _) return _;
                if (!_) return !0;
                const { invisible: _, visible: _ } = _;
                if (_[_]) return !1;
                const _ = _[_];
                return !_ || _.shouldAnimate;
              })(_, _, _),
              _ = {
                draggableId: _,
                shouldAnimate: _,
              };
            return (_.visible[_] = _), _;
          },
          {
            all: [],
            visible: {},
            invisible: {},
          },
        );
      }
      function _({
        insideDestination: _,
        inHomeList: _,
        displacedBy: _,
        destination: _,
      }) {
        const _ = (function (_, _) {
          if (!_.length) return 0;
          const _ = _[_.length - 1].descriptor.index;
          return _.inHomeList ? _ : _ + 1;
        })(_, {
          inHomeList: _,
        });
        return {
          displaced: _,
          displacedBy: _,
          _: {
            type: "REORDER",
            destination: {
              droppableId: _.descriptor._,
              index: _,
            },
          },
        };
      }
      function _({
        draggable: _,
        insideDestination: _,
        destination: _,
        viewport: _,
        displacedBy: _,
        last: _,
        index: _,
        forceShouldAnimate: _,
      }) {
        const _ = _(_, _);
        if (null == _)
          return _({
            insideDestination: _,
            inHomeList: _,
            displacedBy: _,
            destination: _,
          });
        const _ = _.find((_) => _.descriptor.index === _);
        if (!_)
          return _({
            insideDestination: _,
            inHomeList: _,
            displacedBy: _,
            destination: _,
          });
        const _ = _(_, _),
          _ = _.indexOf(_);
        return {
          displaced: _({
            afterDragging: _.slice(_),
            destination: _,
            displacedBy: _,
            last: _,
            viewport: _.frame,
            forceShouldAnimate: _,
          }),
          displacedBy: _,
          _: {
            type: "REORDER",
            destination: {
              droppableId: _.descriptor._,
              index: _,
            },
          },
        };
      }
      function _(_, _) {
        return Boolean(_.effected[_]);
      }
      var _ = ({
          isMovingForward: _,
          isInHomeList: _,
          draggable: _,
          draggables: _,
          destination: _,
          insideDestination: _,
          previousImpact: _,
          viewport: _,
          afterCritical: _,
        }) => {
          const _ = _._;
          if ((_ || _(!1), "REORDER" === _.type)) {
            const _ = (({
              isMovingForward: _,
              isInHomeList: _,
              insideDestination: _,
              location: _,
            }) => {
              if (!_.length) return null;
              const _ = _.index,
                _ = _ ? _ + 1 : _ - 1,
                _ = _[0].descriptor.index,
                _ = _[_.length - 1].descriptor.index;
              return _ < _ || _ > (_ ? _ : _ + 1) ? null : _;
            })({
              isMovingForward: _,
              isInHomeList: _,
              location: _.destination,
              insideDestination: _,
            });
            return null == _
              ? null
              : _({
                  draggable: _,
                  insideDestination: _,
                  destination: _,
                  viewport: _,
                  last: _.displaced,
                  displacedBy: _.displacedBy,
                  index: _,
                });
          }
          const _ = (({
            isMovingForward: _,
            destination: _,
            draggables: _,
            combine: _,
            afterCritical: _,
          }) => {
            if (!_.isCombineEnabled) return null;
            const _ = _.draggableId,
              _ = _[_].descriptor.index;
            return _(_, _) ? (_ ? _ : _ - 1) : _ ? _ + 1 : _;
          })({
            isMovingForward: _,
            destination: _,
            displaced: _.displaced,
            draggables: _,
            combine: _.combine,
            afterCritical: _,
          });
          return null == _
            ? null
            : _({
                draggable: _,
                insideDestination: _,
                destination: _,
                viewport: _,
                last: _.displaced,
                displacedBy: _.displacedBy,
                index: _,
              });
        },
        _ = ({ afterCritical: _, impact: _, draggables: _ }) => {
          const _ = _(_);
          _ || _(!1);
          const _ = _.draggableId,
            _ = _[_].page.borderBox.center,
            _ = (({
              displaced: _,
              afterCritical: _,
              combineWith: _,
              displacedBy: _,
            }) => {
              const _ = Boolean(_.visible[_] || _.invisible[_]);
              return _(_, _) ? (_ ? _ : _(_.point)) : _ ? _.point : _;
            })({
              displaced: _.displaced,
              afterCritical: _,
              combineWith: _,
              displacedBy: _.displacedBy,
            });
          return _(_, _);
        };
      const _ = (_, _) => _.margin[_.start] + _.borderBox[_.size] / 2,
        _ = (_, _, _) =>
          _[_.crossAxisStart] +
          _.margin[_.crossAxisStart] +
          _.borderBox[_.crossAxisSize] / 2,
        _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
          _(_.line, _.marginBox[_.end] + _(_, _), _(_, _.marginBox, _)),
        _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
          _(
            _.line,
            _.marginBox[_.start] -
              ((_, _) => _.margin[_.end] + _.borderBox[_.size] / 2)(_, _),
            _(_, _.marginBox, _),
          );
      var _ = ({
          impact: _,
          draggable: _,
          draggables: _,
          droppable: _,
          afterCritical: _,
        }) => {
          const _ = _(_.descriptor._, _),
            _ = _.page,
            _ = _.axis;
          if (!_.length)
            return (({ axis: _, moveInto: _, isMoving: _ }) =>
              _(
                _.line,
                _.contentBox[_.start] + _(_, _),
                _(_, _.contentBox, _),
              ))({
              axis: _,
              moveInto: _.page,
              isMoving: _,
            });
          const { displaced: _, displacedBy: _ } = _,
            _ = _.all[0];
          if (_) {
            const _ = _[_];
            if (_(_, _))
              return _({
                axis: _,
                moveRelativeTo: _.page,
                isMoving: _,
              });
            const _ = (0, _._)(_.page, _.point);
            return _({
              axis: _,
              moveRelativeTo: _,
              isMoving: _,
            });
          }
          const _ = _[_.length - 1];
          if (_.descriptor._ === _.descriptor._) return _.borderBox.center;
          if (_(_.descriptor._, _)) {
            const _ = (0, _._)(_.page, _(_.displacedBy.point));
            return _({
              axis: _,
              moveRelativeTo: _,
              isMoving: _,
            });
          }
          return _({
            axis: _,
            moveRelativeTo: _.page,
            isMoving: _,
          });
        },
        _ = (_, _) => {
          const _ = _.frame;
          return _ ? _(_, _.scroll.diff.displacement) : _;
        };
      var _ = (_) => {
          const _ = (({
              impact: _,
              draggable: _,
              droppable: _,
              draggables: _,
              afterCritical: _,
            }) => {
              const _ = _.page.borderBox.center,
                _ = _._;
              return _ && _
                ? "REORDER" === _.type
                  ? _({
                      impact: _,
                      draggable: _,
                      draggables: _,
                      droppable: _,
                      afterCritical: _,
                    })
                  : _({
                      impact: _,
                      draggables: _,
                      afterCritical: _,
                    })
                : _;
            })(_),
            _ = _.droppable;
          return _ ? _(_, _) : _;
        },
        _ = (_, _) => {
          const _ = _(_, _.scroll.initial),
            _ = _(_);
          return {
            frame: (0, _._)({
              top: _._,
              bottom: _._ + _.frame.height,
              left: _._,
              right: _._ + _.frame.width,
            }),
            scroll: {
              initial: _.scroll.initial,
              max: _.scroll.max,
              current: _,
              diff: {
                value: _,
                displacement: _,
              },
            },
          };
        };
      function _(_, _) {
        return _.map((_) => _[_]);
      }
      var _ = ({ pageBorderBoxCenter: _, draggable: _, viewport: _ }) => {
          const _ = ((_, _) => _(_.scroll.diff.displacement, _))(_, _),
            _ = _(_, _.page.borderBox.center);
          return _(_.client.borderBox.center, _);
        },
        _ = ({
          draggable: _,
          destination: _,
          newPageBorderBoxCenter: _,
          viewport: _,
          withDroppableDisplacement: _,
          onlyOnMainAxis: _ = !1,
        }) => {
          const _ = _(_, _.page.borderBox.center),
            _ = {
              target: _(_.page.borderBox, _),
              destination: _,
              withDroppableDisplacement: _,
              viewport: _,
            };
          return _
            ? ((_) => {
                return _({
                  ..._,
                  isVisibleThroughFrameFn:
                    ((_ = _.destination.axis),
                    (_) => {
                      const _ = _(_.top, _.bottom),
                        _ = _(_.left, _.right);
                      return (_) =>
                        _ === _
                          ? __webpack_require__(_.top) &&
                            __webpack_require__(_.bottom)
                          : _(_.left) && _(_.right);
                    }),
                });
                var _;
              })(_)
            : _(_);
        },
        _ = ({
          isMovingForward: _,
          draggable: _,
          destination: _,
          draggables: _,
          previousImpact: _,
          viewport: _,
          previousPageBorderBoxCenter: _,
          previousClientSelection: _,
          afterCritical: _,
        }) => {
          if (!_.isEnabled) return null;
          const _ = _(_.descriptor._, _),
            _ = _(_, _),
            _ =
              (({
                isMovingForward: _,
                draggable: _,
                destination: _,
                insideDestination: _,
                previousImpact: _,
              }) => {
                if (!_.isCombineEnabled) return null;
                if (!_(_)) return null;
                function _(_) {
                  const _ = {
                    type: "COMBINE",
                    combine: {
                      draggableId: _,
                      droppableId: _.descriptor._,
                    },
                  };
                  return {
                    ..._,
                    _: _,
                  };
                }
                const _ = _.displaced.all,
                  _ = _.length ? _[0] : null;
                if (_) return _ ? _(_) : null;
                const _ = _(_, _);
                if (!_)
                  return _.length ? _(_[_.length - 1].descriptor._) : null;
                const _ = _.findIndex((_) => _.descriptor._ === _);
                -1 === _ && _(!1);
                const _ = _ - 1;
                return _ < 0 ? null : _(_[_].descriptor._);
              })({
                isMovingForward: _,
                draggable: _,
                destination: _,
                insideDestination: _,
                previousImpact: _,
              }) ||
              _({
                isMovingForward: _,
                isInHomeList: _,
                draggable: _,
                draggables: _,
                destination: _,
                insideDestination: _,
                previousImpact: _,
                viewport: _,
                afterCritical: _,
              });
          if (!_) return null;
          const _ = _({
            impact: _,
            draggable: _,
            droppable: _,
            draggables: _,
            afterCritical: _,
          });
          if (
            _({
              draggable: _,
              destination: _,
              newPageBorderBoxCenter: _,
              viewport: _.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0,
            })
          ) {
            return {
              clientSelection: _({
                pageBorderBoxCenter: _,
                draggable: _,
                viewport: _,
              }),
              impact: _,
              scrollJumpRequest: null,
            };
          }
          const _ = _(_, _),
            _ = (({
              impact: _,
              viewport: _,
              destination: _,
              draggables: _,
              maxScrollChange: _,
            }) => {
              const _ = _(_, _(_.scroll.current, _)),
                _ = _.frame ? _(_, _(_.frame.scroll.current, _)) : _,
                _ = _.displaced,
                _ = _({
                  afterDragging: _(_.all, _),
                  destination: _,
                  displacedBy: _.displacedBy,
                  viewport: _.frame,
                  last: _,
                  forceShouldAnimate: !1,
                }),
                _ = _({
                  afterDragging: _(_.all, _),
                  destination: _,
                  displacedBy: _.displacedBy,
                  viewport: _.frame,
                  last: _,
                  forceShouldAnimate: !1,
                }),
                _ = {},
                _ = {},
                _ = [_, _, _];
              return (
                _.all.forEach((_) => {
                  const _ = (function (_, _) {
                    for (let _ = 0; _ < _.length; _++) {
                      const _ = _[_].visible[_];
                      if (_) return _;
                    }
                    return null;
                  })(_, _);
                  _ ? (_[_] = _) : (_[_] = !0);
                }),
                {
                  ..._,
                  displaced: {
                    all: _.all,
                    invisible: _,
                    visible: _,
                  },
                }
              );
            })({
              impact: _,
              viewport: _,
              destination: _,
              draggables: _,
              maxScrollChange: _,
            });
          return {
            clientSelection: _,
            impact: _,
            scrollJumpRequest: _,
          };
        };
      const _ = (_) => {
        const _ = _.subject.active;
        return _ || _(!1), _;
      };
      const _ = (_, _) => {
          const _ = _.page.borderBox.center;
          return _(_.descriptor._, _) ? _(_, _.displacedBy.point) : _;
        },
        _ = (_, _) => {
          const _ = _.page.borderBox;
          return _(_.descriptor._, _) ? _(_, _(_.displacedBy.point)) : _;
        };
      var _ = _(function (_, _) {
        const _ = _[_.line];
        return {
          value: _,
          point: _(_.line, _),
        };
      });
      const _ = (_, _) => ({
          ..._,
          scroll: {
            ..._.scroll,
            max: _,
          },
        }),
        _ = (_, _, _) => {
          const _ = _.frame;
          _(_, _) && _(!1), _.subject.withPlaceholder && _(!1);
          const _ = _(_.axis, _.displaceBy).point,
            _ = ((_, _, _) => {
              const _ = _.axis;
              if ("virtual" === _.descriptor.mode) return _(_.line, _[_.line]);
              const _ = _.subject.page.contentBox[_.size],
                _ =
                  _(_.descriptor._, _).reduce(
                    (_, _) => _ + _.client.marginBox[_.size],
                    0,
                  ) +
                  _[_.line] -
                  _;
              return _ <= 0 ? null : _(_.line, _);
            })(_, _, _),
            _ = {
              placeholderSize: _,
              increasedBy: _,
              oldFrameMaxScroll: _.frame ? _.frame.scroll.max : null,
            };
          if (!_) {
            const _ = _({
              page: _.subject.page,
              withPlaceholder: _,
              axis: _.axis,
              frame: _.frame,
            });
            return {
              ..._,
              subject: _,
            };
          }
          const _ = _ ? _(_.scroll.max, _) : _.scroll.max,
            _ = _(_, _),
            _ = _({
              page: _.subject.page,
              withPlaceholder: _,
              axis: _.axis,
              frame: _,
            });
          return {
            ..._,
            subject: _,
            frame: _,
          };
        };
      var _ = ({
          isMovingForward: _,
          previousPageBorderBoxCenter: _,
          draggable: _,
          isOver: _,
          draggables: _,
          droppables: _,
          viewport: _,
          afterCritical: _,
        }) => {
          const _ = (({
            isMovingForward: _,
            pageBorderBoxCenter: _,
            source: _,
            droppables: _,
            viewport: _,
          }) => {
            const _ = _.subject.active;
            if (!_) return null;
            const _ = _.axis,
              _ = _(_[_.start], _[_.end]),
              _ = _(_)
                .filter((_) => _ !== _)
                .filter((_) => _.isEnabled)
                .filter((_) => Boolean(_.subject.active))
                .filter((_) => _(_.frame)(_(_)))
                .filter((_) => {
                  const _ = _(_);
                  return _
                    ? _[_.crossAxisEnd] < _[_.crossAxisEnd]
                    : _[_.crossAxisStart] < _[_.crossAxisStart];
                })
                .filter((_) => {
                  const _ = _(_),
                    _ = _(_[_.start], _[_.end]);
                  return (
                    _(_[_.start]) ||
                    _(_[_.end]) ||
                    __webpack_require__(_[_.start]) ||
                    __webpack_require__(_[_.end])
                  );
                })
                .sort((_, _) => {
                  const _ = _(_)[_.crossAxisStart],
                    _ = _(_)[_.crossAxisStart];
                  return _ ? _ - _ : _ - _;
                })
                .filter(
                  (_, _, _) =>
                    _(_)[_.crossAxisStart] === _(_[0])[_.crossAxisStart],
                );
            if (!_.length) return null;
            if (1 === _.length) return _[0];
            const _ = _.filter((_) => _(_(_)[_.start], _(_)[_.end])(_[_.line]));
            return 1 === _.length
              ? _[0]
              : _.length > 1
                ? _.sort((_, _) => _(_)[_.start] - _(_)[_.start])[0]
                : _.sort((_, _) => {
                    const _ = _(_, _(_(_))),
                      _ = _(_, _(_(_)));
                    return _ !== _ ? _ - _ : _(_)[_.start] - _(_)[_.start];
                  })[0];
          })({
            isMovingForward: _,
            pageBorderBoxCenter: _,
            source: _,
            droppables: _,
            viewport: _,
          });
          if (!_) return null;
          const _ = _(_.descriptor._, _),
            _ = (({
              pageBorderBoxCenter: _,
              viewport: _,
              destination: _,
              insideDestination: _,
              afterCritical: _,
            }) => {
              const _ = _.filter((_) =>
                _({
                  target: _(_, _),
                  destination: _,
                  viewport: _.frame,
                  withDroppableDisplacement: !0,
                }),
              ).sort((_, _) => {
                const _ = _(_, _(_, _(_, _))),
                  _ = _(_, _(_, _(_, _)));
                return _ < _
                  ? -1
                  : _ < _
                    ? 1
                    : _.descriptor.index - _.descriptor.index;
              });
              return _[0] || null;
            })({
              pageBorderBoxCenter: _,
              viewport: _,
              destination: _,
              insideDestination: _,
              afterCritical: _,
            }),
            _ = (({
              previousPageBorderBoxCenter: _,
              moveRelativeTo: _,
              insideDestination: _,
              draggable: _,
              draggables: _,
              destination: _,
              viewport: _,
              afterCritical: _,
            }) => {
              if (!_) {
                if (_.length) return null;
                const _ = {
                    displaced: _,
                    displacedBy: _,
                    _: {
                      type: "REORDER",
                      destination: {
                        droppableId: _.descriptor._,
                        index: 0,
                      },
                    },
                  },
                  _ = _({
                    impact: _,
                    draggable: _,
                    droppable: _,
                    draggables: _,
                    afterCritical: _,
                  }),
                  _ = _(_, _) ? _ : _(_, _, _);
                return _({
                  draggable: _,
                  destination: _,
                  newPageBorderBoxCenter: _,
                  viewport: _.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0,
                })
                  ? _
                  : null;
              }
              const _ = Boolean(
                  _[_.axis.line] <= _.page.borderBox.center[_.axis.line],
                ),
                _ = (() => {
                  const _ = _.descriptor.index;
                  return _.descriptor._ === _.descriptor._ || _ ? _ : _ + 1;
                })(),
                _ = _(_.axis, _.displaceBy);
              return _({
                draggable: _,
                insideDestination: _,
                destination: _,
                viewport: _,
                displacedBy: _,
                last: _,
                index: _,
              });
            })({
              previousPageBorderBoxCenter: _,
              destination: _,
              draggable: _,
              draggables: _,
              moveRelativeTo: _,
              insideDestination: _,
              viewport: _,
              afterCritical: _,
            });
          if (!_) return null;
          const _ = _({
            impact: _,
            draggable: _,
            droppable: _,
            draggables: _,
            afterCritical: _,
          });
          return {
            clientSelection: _({
              pageBorderBoxCenter: _,
              draggable: _,
              viewport: _,
            }),
            impact: _,
            scrollJumpRequest: null,
          };
        },
        _ = (_) => {
          const _ = _._;
          return _
            ? "REORDER" === _.type
              ? _.destination.droppableId
              : _.combine.droppableId
            : null;
        };
      var _ = ({ state: _, type: _ }) => {
        const _ = ((_, _) => {
            const _ = _(_);
            return _ ? _[_] : null;
          })(_.impact, _.dimensions.droppables),
          _ = Boolean(_),
          _ = _.dimensions.droppables[_.critical.droppable._],
          _ = _ || _,
          _ = _.axis.direction,
          _ =
            ("vertical" === _ && ("MOVE_UP" === _ || "MOVE_DOWN" === _)) ||
            ("horizontal" === _ && ("MOVE_LEFT" === _ || "MOVE_RIGHT" === _));
        if (_ && !_) return null;
        const _ = "MOVE_DOWN" === _ || "MOVE_RIGHT" === _,
          _ = _.dimensions.draggables[_.critical.draggable._],
          _ = _.current.page.borderBoxCenter,
          { draggables: _, droppables: _ } = _.dimensions;
        return _
          ? _({
              isMovingForward: _,
              previousPageBorderBoxCenter: _,
              draggable: _,
              destination: _,
              draggables: _,
              viewport: _.viewport,
              previousClientSelection: _.current.client.selection,
              previousImpact: _.impact,
              afterCritical: _.afterCritical,
            })
          : _({
              isMovingForward: _,
              previousPageBorderBoxCenter: _,
              draggable: _,
              isOver: _,
              draggables: _,
              droppables: _,
              viewport: _.viewport,
              afterCritical: _.afterCritical,
            });
      };
      function _(_) {
        return "DRAGGING" === _.phase || "COLLECTING" === _.phase;
      }
      function _(_) {
        const _ = _(_.top, _.bottom),
          _ = _(_.left, _.right);
        return function (_) {
          return _(_._) && __webpack_require__(_._);
        };
      }
      function _({ pageBorderBox: _, draggable: _, droppables: _ }) {
        const _ = _(_).filter((_) => {
          if (!_.isEnabled) return !1;
          const _ = _.subject.active;
          if (!_) return !1;
          if (
            ((_ = _),
            !(
              (_ = _).left < _.right &&
              _.right > _.left &&
              _.top < _.bottom &&
              _.bottom > _.top
            ))
          )
            return !1;
          var _, _;
          if (_(_)(_.center)) return !0;
          const _ = _.axis,
            _ = _.center[_.crossAxisLine],
            _ = _[_.crossAxisStart],
            _ = _[_.crossAxisEnd],
            _ = _(_[_.crossAxisStart], _[_.crossAxisEnd]),
            _ = _(_),
            _ = _(_);
          return (!_ && !_) || (_ ? _ < _ : _ > _);
        });
        return _.length
          ? 1 === _.length
            ? _[0].descriptor._
            : (function ({ pageBorderBox: _, draggable: _, candidates: _ }) {
                const _ = _.page.borderBox.center,
                  _ = __webpack_require__
                    .map((_) => {
                      const _ = _.axis,
                        _ = _(
                          _.axis.line,
                          _.center[_.line],
                          _.page.borderBox.center[_.crossAxisLine],
                        );
                      return {
                        _: _.descriptor._,
                        distance: _(_, _),
                      };
                    })
                    .sort((_, _) => _.distance - _.distance);
                return _[0] ? _[0]._ : null;
              })({
                pageBorderBox: _,
                draggable: _,
                candidates: _,
              })
          : null;
      }
      const _ = (_, _) => (0, _._)(_(_, _));
      function _({ displaced: _, _: _ }) {
        return Boolean(_.visible[_] || _.invisible[_]);
      }
      var _ = ({
          pageOffset: _,
          draggable: _,
          draggables: _,
          droppables: _,
          previousImpact: _,
          viewport: _,
          afterCritical: _,
        }) => {
          const _ = _(_.page.borderBox, _),
            _ = _({
              pageBorderBox: _,
              draggable: _,
              droppables: _,
            });
          if (!_) return _;
          const _ = _[_],
            _ = _(_.descriptor._, _),
            _ = ((_, _) => {
              const _ = _.frame;
              return _ ? _(_, _.scroll.diff.value) : _;
            })(_, _);
          return (
            (({
              draggable: _,
              pageBorderBoxWithDroppableScroll: _,
              previousImpact: _,
              destination: _,
              insideDestination: _,
              afterCritical: _,
            }) => {
              if (!_.isCombineEnabled) return null;
              const _ = _.axis,
                _ = _(_.axis, _.displaceBy),
                _ = _.value,
                _ = _[_.start],
                _ = _[_.end],
                _ = _(_, _).find((_) => {
                  const _ = _.descriptor._,
                    _ = _.page.borderBox,
                    _ = _[_.size] / 4,
                    _ = _(_, _),
                    _ = _({
                      displaced: _.displaced,
                      _: _,
                    });
                  return _
                    ? _
                      ? _ > _[_.start] + _ && _ < _[_.end] - _
                      : _ > _[_.start] - _ + _ && _ < _[_.end] - _ - _
                    : _
                      ? _ > _[_.start] + _ + _ && _ < _[_.end] + _ - _
                      : _ > _[_.start] + _ && _ < _[_.end] - _;
                });
              return _
                ? {
                    displacedBy: _,
                    displaced: _.displaced,
                    _: {
                      type: "COMBINE",
                      combine: {
                        draggableId: _.descriptor._,
                        droppableId: _.descriptor._,
                      },
                    },
                  }
                : null;
            })({
              pageBorderBoxWithDroppableScroll: _,
              draggable: _,
              previousImpact: _,
              destination: _,
              insideDestination: _,
              afterCritical: _,
            }) ||
            (({
              pageBorderBoxWithDroppableScroll: _,
              draggable: _,
              destination: _,
              insideDestination: _,
              last: _,
              viewport: _,
              afterCritical: _,
            }) => {
              const _ = _.axis,
                _ = _(_.axis, _.displaceBy),
                _ = _.value,
                _ = _[_.start],
                _ = _[_.end],
                _ = (function ({ draggable: _, closest: _, inHomeList: _ }) {
                  return _
                    ? _ && _.descriptor.index > _.descriptor.index
                      ? _.descriptor.index - 1
                      : _.descriptor.index
                    : null;
                })({
                  draggable: _,
                  closest:
                    _(_, _).find((_) => {
                      const _ = _.descriptor._,
                        _ = _.page.borderBox.center[_.line],
                        _ = _(_, _),
                        _ = _({
                          displaced: _,
                          _: _,
                        });
                      return _
                        ? _
                          ? _ <= _
                          : _ < _ - _
                        : _
                          ? _ <= _ + _
                          : _ < _;
                    }) || null,
                  inHomeList: _(_, _),
                });
              return _({
                draggable: _,
                insideDestination: _,
                destination: _,
                viewport: _,
                last: _,
                displacedBy: _,
                index: _,
              });
            })({
              pageBorderBoxWithDroppableScroll: _,
              draggable: _,
              destination: _,
              insideDestination: _,
              last: _.displaced,
              viewport: _,
              afterCritical: _,
            })
          );
        },
        _ = (_, _) => ({
          ..._,
          [_.descriptor._]: _,
        });
      const _ = ({ previousImpact: _, impact: _, droppables: _ }) => {
        const _ = _(_),
          _ = _(_);
        if (!_) return _;
        if (_ === _) return _;
        const _ = _[_];
        if (!_.subject.withPlaceholder) return _;
        const _ = ((_) => {
          const _ = _.subject.withPlaceholder;
          _ || _(!1);
          const _ = _.frame;
          if (!_) {
            const _ = _({
              page: _.subject.page,
              axis: _.axis,
              frame: null,
              withPlaceholder: null,
            });
            return {
              ..._,
              subject: _,
            };
          }
          const _ = _.oldFrameMaxScroll;
          _ || _(!1);
          const _ = _(_, _),
            _ = _({
              page: _.subject.page,
              axis: _.axis,
              frame: _,
              withPlaceholder: null,
            });
          return {
            ..._,
            subject: _,
            frame: _,
          };
        })(_);
        return _(_, _);
      };
      var _ = ({
        state: _,
        clientSelection: _,
        dimensions: _,
        viewport: _,
        impact: _,
        scrollJumpRequest: _,
      }) => {
        const _ = _ || _.viewport,
          _ = _ || _.dimensions,
          _ = _ || _.current.client.selection,
          _ = _(_, _.initial.client.selection),
          _ = {
            offset: _,
            selection: _,
            borderBoxCenter: _(_.initial.client.borderBoxCenter, _),
          },
          _ = {
            selection: _(_.selection, _.scroll.current),
            borderBoxCenter: _(_.borderBoxCenter, _.scroll.current),
            offset: _(_.offset, _.scroll.diff.value),
          },
          _ = {
            client: _,
            page: _,
          };
        if ("COLLECTING" === _.phase)
          return {
            ..._,
            dimensions: _,
            viewport: _,
            current: _,
          };
        const _ = _.draggables[_.critical.draggable._],
          _ =
            _ ||
            _({
              pageOffset: _.offset,
              draggable: _,
              draggables: _.draggables,
              droppables: _.droppables,
              previousImpact: _.impact,
              viewport: _,
              afterCritical: _.afterCritical,
            }),
          _ = (({
            draggable: _,
            draggables: _,
            droppables: _,
            previousImpact: _,
            impact: _,
          }) => {
            const _ = _({
                previousImpact: _,
                impact: _,
                droppables: _,
              }),
              _ = _(_);
            if (!_) return _;
            const _ = _[_];
            if (_(_, _)) return _;
            if (_.subject.withPlaceholder) return _;
            const _ = _(_, _, _);
            return _(_, _);
          })({
            draggable: _,
            impact: _,
            previousImpact: _.impact,
            draggables: _.draggables,
            droppables: _.droppables,
          });
        return {
          ..._,
          current: _,
          dimensions: {
            draggables: _.draggables,
            droppables: _,
          },
          impact: _,
          viewport: _,
          scrollJumpRequest: _ || null,
          forceShouldAnimate: !_ && null,
        };
      };
      var _ = ({
          impact: _,
          viewport: _,
          draggables: _,
          destination: _,
          forceShouldAnimate: _,
        }) => {
          const _ = _.displaced,
            _ = (function (_, _) {
              return _.map((_) => _[_]);
            })(_.all, _),
            _ = _({
              afterDragging: _,
              destination: _,
              displacedBy: _.displacedBy,
              viewport: _.frame,
              forceShouldAnimate: _,
              last: _,
            });
          return {
            ..._,
            displaced: _,
          };
        },
        _ = ({
          impact: _,
          draggable: _,
          droppable: _,
          draggables: _,
          viewport: _,
          afterCritical: _,
        }) => {
          const _ = _({
            impact: _,
            draggable: _,
            draggables: _,
            droppable: _,
            afterCritical: _,
          });
          return _({
            pageBorderBoxCenter: _,
            draggable: _,
            viewport: _,
          });
        },
        _ = ({ state: _, dimensions: _, viewport: _ }) => {
          "SNAP" !== _.movementMode && _(!1);
          const _ = _.impact,
            _ = _ || _.viewport,
            _ = _ || _.dimensions,
            { draggables: _, droppables: _ } = _,
            _ = _[_.critical.draggable._],
            _ = _(_);
          _ || _(!1);
          const _ = _[_],
            _ = _({
              impact: _,
              viewport: _,
              destination: _,
              draggables: _,
            }),
            _ = _({
              impact: _,
              draggable: _,
              droppable: _,
              draggables: _,
              viewport: _,
              afterCritical: _.afterCritical,
            });
          return _({
            impact: _,
            clientSelection: _,
            state: _,
            dimensions: _,
            viewport: _,
          });
        },
        _ = ({ draggable: _, home: _, draggables: _, viewport: _ }) => {
          const _ = _(_.axis, _.displaceBy),
            _ = _(_.descriptor._, _),
            _ = _.indexOf(_);
          -1 === _ && _(!1);
          const _ = _.slice(_ + 1),
            _ = _.reduce((_, _) => ((_[_.descriptor._] = !0), _), {}),
            _ = {
              inVirtualList: "virtual" === _.descriptor.mode,
              displacedBy: _,
              effected: _,
            };
          var _;
          return {
            impact: {
              displaced: _({
                afterDragging: _,
                destination: _,
                displacedBy: _,
                last: null,
                viewport: _.frame,
                forceShouldAnimate: !1,
              }),
              displacedBy: _,
              _: {
                type: "REORDER",
                destination:
                  ((_ = _.descriptor),
                  {
                    index: _.index,
                    droppableId: _.droppableId,
                  }),
              },
            },
            afterCritical: _,
          };
        };
      const _ = (_) => {
          0;
        },
        _ = (_) => {
          0;
        };
      var _ = ({ additions: _, updatedDroppables: _, viewport: _ }) => {
        const _ = _.scroll.diff.value;
        return _.map((_) => {
          const _ = _.descriptor.droppableId,
            _ = ((_) => {
              const _ = _.frame;
              return _ || _(!1), _;
            })(_[_]),
            _ = _.scroll.diff.value,
            _ = (({ draggable: _, offset: _, initialWindowScroll: _ }) => {
              const _ = (0, _._)(_.client, _),
                _ = (0, _._)(_, _);
              return {
                ..._,
                placeholder: {
                  ..._.placeholder,
                  client: _,
                },
                client: _,
                page: _,
              };
            })({
              draggable: _,
              offset: _(_, _),
              initialWindowScroll: _.scroll.initial,
            });
          return _;
        });
      };
      const _ = (_) => "SNAP" === _.movementMode,
        _ = (_, _, _) => {
          const _ = ((_, _) => ({
            draggables: _.draggables,
            droppables: _(_.droppables, _),
          }))(_.dimensions, _);
          return !_(_) || _
            ? _({
                state: _,
                dimensions: _,
              })
            : _({
                state: _,
                dimensions: _,
              });
        };
      function _(_) {
        return _.isDragging && "SNAP" === _.movementMode
          ? {
              ..._,
              scrollJumpRequest: null,
            }
          : _;
      }
      const _ = {
        phase: "IDLE",
        completed: null,
        shouldFlush: !1,
      };
      var _ = (_ = _, _) => {
        if ("FLUSH" === _.type)
          return {
            ..._,
            shouldFlush: !0,
          };
        if ("INITIAL_PUBLISH" === _.type) {
          "IDLE" !== _.phase && _(!1);
          const {
              critical: _,
              clientSelection: _,
              viewport: _,
              dimensions: _,
              movementMode: _,
            } = _.payload,
            _ = _.draggables[_.draggable._],
            _ = _.droppables[_.droppable._],
            _ = {
              selection: _,
              borderBoxCenter: _.client.borderBox.center,
              offset: _,
            },
            _ = {
              client: _,
              page: {
                selection: _(_.selection, _.scroll.initial),
                borderBoxCenter: _(_.selection, _.scroll.initial),
                offset: _(_.selection, _.scroll.diff.value),
              },
            },
            _ = _(_.droppables).every((_) => !_.isFixedOnPage),
            { impact: _, afterCritical: _ } = _({
              draggable: _,
              home: _,
              draggables: _.draggables,
              viewport: _,
            });
          return {
            phase: "DRAGGING",
            isDragging: !0,
            critical: _,
            movementMode: _,
            dimensions: _,
            initial: _,
            current: _,
            isWindowScrollAllowed: _,
            impact: _,
            afterCritical: _,
            onLiftImpact: _,
            viewport: _,
            scrollJumpRequest: null,
            forceShouldAnimate: null,
          };
        }
        if ("COLLECTION_STARTING" === _.type) {
          if ("COLLECTING" === _.phase || "DROP_PENDING" === _.phase) return _;
          "DRAGGING" !== _.phase && _(!1);
          return {
            ..._,
            phase: "COLLECTING",
          };
        }
        if ("PUBLISH_WHILE_DRAGGING" === _.type)
          return (
            "COLLECTING" !== _.phase && "DROP_PENDING" !== _.phase && _(!1),
            (({ state: _, published: _ }) => {
              _();
              const _ = _.modified.map((_) => {
                  const _ = _.dimensions.droppables[_.droppableId];
                  return _(_, _.scroll);
                }),
                _ = {
                  ..._.dimensions.droppables,
                  ..._(_),
                },
                _ = _(
                  _({
                    additions: _.additions,
                    updatedDroppables: _,
                    viewport: _.viewport,
                  }),
                ),
                _ = {
                  ..._.dimensions.draggables,
                  ..._,
                };
              _.removals.forEach((_) => {
                delete _[_];
              });
              const _ = {
                  droppables: _,
                  draggables: _,
                },
                _ = _(_.impact),
                _ = _ ? _.droppables[_] : null,
                _ = _.draggables[_.critical.draggable._],
                _ = _.droppables[_.critical.droppable._],
                { impact: _, afterCritical: _ } = _({
                  draggable: _,
                  home: _,
                  draggables: _,
                  viewport: _.viewport,
                }),
                _ = _ && _.isCombineEnabled ? _.impact : _,
                _ = _({
                  pageOffset: _.current.page.offset,
                  draggable: _.draggables[_.critical.draggable._],
                  draggables: _.draggables,
                  droppables: _.droppables,
                  previousImpact: _,
                  viewport: _.viewport,
                  afterCritical: _,
                });
              _();
              const _ = {
                ..._,
                phase: "DRAGGING",
                impact: _,
                onLiftImpact: _,
                dimensions: _,
                afterCritical: _,
                forceShouldAnimate: !1,
              };
              return "COLLECTING" === _.phase
                ? _
                : {
                    ..._,
                    phase: "DROP_PENDING",
                    reason: _.reason,
                    isWaiting: !1,
                  };
            })({
              state: _,
              published: _.payload,
            })
          );
        if ("MOVE" === _.type) {
          if ("DROP_PENDING" === _.phase) return _;
          _(_) || _(!1);
          const { client: _ } = _.payload;
          return _(_, _.current.client.selection)
            ? _
            : _({
                state: _,
                clientSelection: _,
                impact: _(_) ? _.impact : null,
              });
        }
        if ("UPDATE_DROPPABLE_SCROLL" === _.type) {
          if ("DROP_PENDING" === _.phase) return _(_);
          if ("COLLECTING" === _.phase) return _(_);
          _(_) || _(!1);
          const { _: _, newScroll: _ } = _.payload,
            _ = _.dimensions.droppables[_];
          if (!_) return _;
          const _ = _(_, _);
          return _(_, _, !1);
        }
        if ("UPDATE_DROPPABLE_IS_ENABLED" === _.type) {
          if ("DROP_PENDING" === _.phase) return _;
          _(_) || _(!1);
          const { _: _, isEnabled: _ } = _.payload,
            _ = _.dimensions.droppables[_];
          _ || _(!1), _.isEnabled === _ && _(!1);
          const _ = {
            ..._,
            isEnabled: _,
          };
          return _(_, _, !0);
        }
        if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === _.type) {
          if ("DROP_PENDING" === _.phase) return _;
          _(_) || _(!1);
          const { _: _, isCombineEnabled: _ } = _.payload,
            _ = _.dimensions.droppables[_];
          _ || _(!1), _.isCombineEnabled === _ && _(!1);
          const _ = {
            ..._,
            isCombineEnabled: _,
          };
          return _(_, _, !0);
        }
        if ("MOVE_BY_WINDOW_SCROLL" === _.type) {
          if ("DROP_PENDING" === _.phase || "DROP_ANIMATING" === _.phase)
            return _;
          _(_) || _(!1), _.isWindowScrollAllowed || _(!1);
          const _ = _.payload.newScroll;
          if (_(_.viewport.scroll.current, _)) return _(_);
          const _ = _(_.viewport, _);
          return _(_)
            ? _({
                state: _,
                viewport: _,
              })
            : _({
                state: _,
                viewport: _,
              });
        }
        if ("UPDATE_VIEWPORT_MAX_SCROLL" === _.type) {
          if (!_(_)) return _;
          const _ = _.payload.maxScroll;
          if (_(_, _.viewport.scroll.max)) return _;
          const _ = {
            ..._.viewport,
            scroll: {
              ..._.viewport.scroll,
              max: _,
            },
          };
          return {
            ..._,
            viewport: _,
          };
        }
        if (
          "MOVE_UP" === _.type ||
          "MOVE_DOWN" === _.type ||
          "MOVE_LEFT" === _.type ||
          "MOVE_RIGHT" === _.type
        ) {
          if ("COLLECTING" === _.phase || "DROP_PENDING" === _.phase) return _;
          "DRAGGING" !== _.phase && _(!1);
          const _ = _({
            state: _,
            type: _.type,
          });
          return _
            ? _({
                state: _,
                impact: _.impact,
                clientSelection: _.clientSelection,
                scrollJumpRequest: _.scrollJumpRequest,
              })
            : _;
        }
        if ("DROP_PENDING" === _.type) {
          const _ = _.payload.reason;
          "COLLECTING" !== _.phase && _(!1);
          return {
            ..._,
            phase: "DROP_PENDING",
            isWaiting: !0,
            reason: _,
          };
        }
        if ("DROP_ANIMATE" === _.type) {
          const {
            completed: _,
            dropDuration: _,
            newHomeClientOffset: _,
          } = _.payload;
          "DRAGGING" !== _.phase && "DROP_PENDING" !== _.phase && _(!1);
          return {
            phase: "DROP_ANIMATING",
            completed: _,
            dropDuration: _,
            newHomeClientOffset: _,
            dimensions: _.dimensions,
          };
        }
        if ("DROP_COMPLETE" === _.type) {
          const { completed: _ } = _.payload;
          return {
            phase: "IDLE",
            completed: _,
            shouldFlush: !1,
          };
        }
        return _;
      };
      const _ = (_) => ({
          type: "LIFT",
          payload: _,
        }),
        _ = (_) => ({
          type: "PUBLISH_WHILE_DRAGGING",
          payload: _,
        }),
        _ = () => ({
          type: "COLLECTION_STARTING",
          payload: null,
        }),
        _ = (_) => ({
          type: "UPDATE_DROPPABLE_SCROLL",
          payload: _,
        }),
        _ = (_) => ({
          type: "UPDATE_DROPPABLE_IS_ENABLED",
          payload: _,
        }),
        _ = (_) => ({
          type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
          payload: _,
        }),
        _ = (_) => ({
          type: "MOVE",
          payload: _,
        }),
        _ = () => ({
          type: "MOVE_UP",
          payload: null,
        }),
        _ = () => ({
          type: "MOVE_DOWN",
          payload: null,
        }),
        _ = () => ({
          type: "MOVE_RIGHT",
          payload: null,
        }),
        _ = () => ({
          type: "MOVE_LEFT",
          payload: null,
        }),
        _ = () => ({
          type: "FLUSH",
          payload: null,
        }),
        _ = (_) => ({
          type: "DROP_COMPLETE",
          payload: _,
        }),
        _ = (_) => ({
          type: "DROP",
          payload: _,
        }),
        _ = () => ({
          type: "DROP_ANIMATION_FINISHED",
          payload: null,
        });
      const _ = "cubic-bezier(.2,1,.1,1)",
        _ = {
          drop: 0,
          combining: 0.7,
        },
        _ = {
          drop: 0.75,
        },
        _ = {
          outOfTheWay: 0.2,
          minDropTime: 0.33,
          maxDropTime: 0.55,
        },
        _ = `${_.outOfTheWay}s ${"cubic-bezier(0.2, 0, 0, 1)"}`,
        _ = {
          fluid: `opacity ${_}`,
          snap: `transform ${_}, opacity ${_}`,
          drop: (_) => {
            const _ = `${_}s ${_}`;
            return `transform ${_}, opacity ${_}`;
          },
          outOfTheWay: `transform ${_}`,
          placeholder: `height ${_}, width ${_}, margin ${_}`,
        },
        _ = (_) => (_(_, _) ? void 0 : `translate(${_._}px, ${_._}px)`),
        _ = _,
        _ = (_, _) => {
          const _ = _(_);
          if (_) return _ ? `${_} scale(${_.drop})` : _;
        },
        { minDropTime: _, maxDropTime: _ } = _,
        _ = _ - _;
      var _ =
          ({ getState: _, dispatch: _ }) =>
          (_) =>
          (_) => {
            if ("DROP" !== _.type) return void __webpack_require__(_);
            const _ = _(),
              _ = _.payload.reason;
            if ("COLLECTING" === _.phase)
              return void _(
                ((_) => ({
                  type: "DROP_PENDING",
                  payload: _,
                }))({
                  reason: _,
                }),
              );
            if ("IDLE" === _.phase) return;
            "DROP_PENDING" === _.phase && _.isWaiting && _(!1),
              "DRAGGING" !== _.phase && "DROP_PENDING" !== _.phase && _(!1);
            const _ = _.critical,
              _ = _.dimensions,
              _ = _.draggables[_.critical.draggable._],
              { impact: _, didDropInsideDroppable: _ } = (({
                draggables: _,
                reason: _,
                lastImpact: _,
                home: _,
                viewport: _,
                onLiftImpact: _,
              }) => {
                if (!_._ || "DROP" !== _)
                  return {
                    impact: _({
                      draggables: _,
                      impact: _,
                      destination: _,
                      viewport: _,
                      forceShouldAnimate: !0,
                    }),
                    didDropInsideDroppable: !1,
                  };
                return "REORDER" === _._.type
                  ? {
                      impact: _,
                      didDropInsideDroppable: !0,
                    }
                  : {
                      impact: {
                        ..._,
                        displaced: _,
                      },
                      didDropInsideDroppable: !0,
                    };
              })({
                reason: _,
                lastImpact: _.impact,
                afterCritical: _.afterCritical,
                onLiftImpact: _.onLiftImpact,
                home: _.dimensions.droppables[_.critical.droppable._],
                viewport: _.viewport,
                draggables: _.dimensions.draggables,
              }),
              _ = _ ? _(_) : null,
              _ = _ ? _(_) : null,
              _ = {
                index: _.draggable.index,
                droppableId: _.droppable._,
              },
              _ = {
                draggableId: _.descriptor._,
                type: _.descriptor.type,
                source: _,
                reason: _,
                mode: _.movementMode,
                destination: _,
                combine: _,
              },
              _ = (({
                impact: _,
                draggable: _,
                dimensions: _,
                viewport: _,
                afterCritical: _,
              }) => {
                const { draggables: _, droppables: _ } = _,
                  _ = _(_),
                  _ = _ ? _[_] : null,
                  _ = _[_.descriptor.droppableId],
                  _ = _({
                    impact: _,
                    draggable: _,
                    draggables: _,
                    afterCritical: _,
                    droppable: _ || _,
                    viewport: _,
                  });
                return _(_, _.client.borderBox.center);
              })({
                impact: _,
                draggable: _,
                dimensions: _,
                viewport: _.viewport,
                afterCritical: _.afterCritical,
              }),
              _ = {
                critical: _.critical,
                afterCritical: _.afterCritical,
                result: _,
                impact: _,
              };
            if (!(!_(_.current.client.offset, _) || Boolean(_.combine)))
              return void _(
                _({
                  completed: _,
                }),
              );
            const _ = (({ current: _, destination: _, reason: _ }) => {
              const _ = _(_, _);
              if (_ <= 0) return _;
              if (_ >= 1500) return _;
              const _ = _ + _ * (_ / 1500);
              return Number(("CANCEL" === _ ? 0.6 * _ : _).toFixed(2));
            })({
              current: _.current.client.offset,
              destination: _,
              reason: _,
            });
            _(
              ((_) => ({
                type: "DROP_ANIMATE",
                payload: _,
              }))({
                newHomeClientOffset: _,
                dropDuration: _,
                completed: _,
              }),
            );
          },
        _ = () => ({
          _: window.pageXOffset,
          _: window.pageYOffset,
        });
      function _({ onWindowScroll: _ }) {
        const _ = (0, _._)(function () {
            _(_());
          }),
          _ = (function (_) {
            return {
              eventName: "scroll",
              options: {
                passive: !0,
                capture: !1,
              },
              _: (_) => {
                (_.target !== window && _.target !== window.document) || _();
              },
            };
          })(_);
        let _ = _;
        function _() {
          return _ !== _;
        }
        return {
          start: function () {
            _() && _(!1), (_ = _(window, [_]));
          },
          stop: function () {
            _() || _(!1), _.cancel(), _(), (_ = _);
          },
          isActive: _,
        };
      }
      var _ = (_) => {
          const _ = _({
            onWindowScroll: (_) => {
              _.dispatch({
                type: "MOVE_BY_WINDOW_SCROLL",
                payload: {
                  newScroll: _,
                },
              });
            },
          });
          return (_) => (_) => {
            _.isActive() || "INITIAL_PUBLISH" !== _.type || _.start(),
              _.isActive() &&
                ((_) =>
                  "DROP_COMPLETE" === _.type ||
                  "DROP_ANIMATE" === _.type ||
                  "FLUSH" === _.type)(_) &&
                _.stop(),
              _(_);
          };
        },
        _ = () => {
          const _ = [];
          return {
            add: (_) => {
              const _ = setTimeout(() =>
                  ((_) => {
                    const _ = _.findIndex((_) => _.timerId === _);
                    -1 === _ && _(!1);
                    const [_] = _.splice(_, 1);
                    _.callback();
                  })(_),
                ),
                _ = {
                  timerId: _,
                  callback: _,
                };
              _.push(_);
            },
            flush: () => {
              if (!_.length) return;
              const _ = [..._];
              (_.length = 0),
                _.forEach((_) => {
                  clearTimeout(_.timerId), _.callback();
                });
            },
          };
        };
      const _ = (_, _) => {
          _(), _(), _();
        },
        _ = (_, _) => ({
          draggableId: _.draggable._,
          type: _.droppable.type,
          source: {
            droppableId: _.droppable._,
            index: _.draggable.index,
          },
          mode: _,
        });
      function _(_, _, _, _) {
        if (!_) return void __webpack_require__(_(_));
        const _ = ((_) => {
          let _ = !1,
            _ = !1;
          const _ = setTimeout(() => {
              _ = !0;
            }),
            _ = (_) => {
              _ || _ || ((_ = !0), _(_), clearTimeout(_));
            };
          return (_.wasCalled = () => _), _;
        })(_);
        _(_, {
          announce: _,
        }),
          _.wasCalled() || __webpack_require__(_(_));
      }
      var _ = (_, _) => {
        const _ = ((_, _) => {
          const _ = _();
          let _ = null;
          const _ = (_) => {
            _ || _(!1),
              (_ = null),
              _(0, () => _(_().onDragEnd, _, _, _.onDragEnd));
          };
          return {
            beforeCapture: (_, _) => {
              _ && _(!1),
                _(0, () => {
                  const _ = _().onBeforeCapture;
                  _ &&
                    _({
                      draggableId: _,
                      mode: _,
                    });
                });
            },
            beforeStart: (_, _) => {
              _ && _(!1),
                _(0, () => {
                  const _ = _().onBeforeDragStart;
                  _ && _(_(_, _));
                });
            },
            start: (_, _) => {
              _ && _(!1);
              const _ = _(_, _);
              (_ = {
                mode: _,
                lastCritical: _,
                lastLocation: _.source,
                lastCombine: null,
              }),
                __webpack_require__.add(() => {
                  _(0, () => _(_().onDragStart, _, _, _.onDragStart));
                });
            },
            update: (_, _) => {
              const _ = _(_),
                _ = _(_);
              _ || _(!1);
              const _ = !((_, _) => {
                if (_ === _) return !0;
                const _ =
                    _.draggable._ === _.draggable._ &&
                    _.draggable.droppableId === _.draggable.droppableId &&
                    _.draggable.type === _.draggable.type &&
                    _.draggable.index === _.draggable.index,
                  _ =
                    _.droppable._ === _.droppable._ &&
                    _.droppable.type === _.droppable.type;
                return _ && _;
              })(_, _.lastCritical);
              _ && (_.lastCritical = _);
              const _ =
                ((_ = _),
                !(
                  (null == (_ = _.lastLocation) && null == _) ||
                  (null != _ &&
                    null != _ &&
                    _.droppableId === _.droppableId &&
                    _.index === _.index)
                ));
              var _, _;
              _ && (_.lastLocation = _);
              const _ = !((_, _) =>
                (null == _ && null == _) ||
                (null != _ &&
                  null != _ &&
                  _.draggableId === _.draggableId &&
                  _.droppableId === _.droppableId))(_.lastCombine, _);
              if ((_ && (_.lastCombine = _), !_ && !_ && !_)) return;
              const _ = {
                ..._(_, _.mode),
                combine: _,
                destination: _,
              };
              __webpack_require__.add(() => {
                _(0, () => _(_().onDragUpdate, _, _, _.onDragUpdate));
              });
            },
            flush: () => {
              _ || _(!1), __webpack_require__.flush();
            },
            drop: _,
            abort: () => {
              if (!_) return;
              const _ = {
                ..._(_.lastCritical, _.mode),
                combine: null,
                destination: null,
                reason: "CANCEL",
              };
              _(_);
            },
          };
        })(_, _);
        return (_) => (_) => (_) => {
          if ("BEFORE_INITIAL_CAPTURE" === _.type)
            return void __webpack_require__.beforeCapture(
              _.payload.draggableId,
              _.payload.movementMode,
            );
          if ("INITIAL_PUBLISH" === _.type) {
            const _ = _.payload.critical;
            return (
              __webpack_require__.beforeStart(_, _.payload.movementMode),
              _(_),
              void __webpack_require__.start(_, _.payload.movementMode)
            );
          }
          if ("DROP_COMPLETE" === _.type) {
            const _ = _.payload.completed.result;
            return (
              __webpack_require__.flush(),
              _(_),
              void __webpack_require__.drop(_)
            );
          }
          if ((_(_), "FLUSH" === _.type))
            return void __webpack_require__.abort();
          const _ = _.getState();
          "DRAGGING" === _.phase &&
            __webpack_require__.update(_.critical, _.impact);
        };
      };
      var _ = (_) => (_) => (_) => {
        if ("DROP_ANIMATION_FINISHED" !== _.type) return void _(_);
        const _ = _.getState();
        "DROP_ANIMATING" !== _.phase && _(!1),
          _.dispatch(
            _({
              completed: _.completed,
            }),
          );
      };
      var _ = (_) => {
        let _ = null,
          _ = null;
        return (_) => (_) => {
          if (
            (("FLUSH" !== _.type &&
              "DROP_COMPLETE" !== _.type &&
              "DROP_ANIMATION_FINISHED" !== _.type) ||
              (_ && (cancelAnimationFrame(_), (_ = null)),
              _ && (_(), (_ = null))),
            _(_),
            "DROP_ANIMATE" !== _.type)
          )
            return;
          const _ = {
            eventName: "scroll",
            options: {
              capture: !0,
              passive: !1,
              once: !0,
            },
            _: function () {
              "DROP_ANIMATING" === _.getState().phase &&
                _.dispatch({
                  type: "DROP_ANIMATION_FINISHED",
                  payload: null,
                });
            },
          };
          _ = requestAnimationFrame(() => {
            (_ = null), (_ = _(window, [_]));
          });
        };
      };
      var _ = (_) => (_) => (_) => {
        if ((_(_), "PUBLISH_WHILE_DRAGGING" !== _.type)) return;
        const _ = _.getState();
        "DROP_PENDING" === _.phase &&
          (_.isWaiting ||
            _.dispatch(
              _({
                reason: _.reason,
              }),
            ));
      };
      const _ = _._;
      var _ = ({
        dimensionMarshal: _,
        focusMarshal: _,
        styleMarshal: _,
        getResponders: _,
        announce: _,
        autoScroller: _,
      }) => {
        return (0, _._)(
          _,
          _(
            (0, _._)(
              ((_ = _),
              () => (_) => (_) => {
                "INITIAL_PUBLISH" === _.type && _.dragging(),
                  "DROP_ANIMATE" === _.type &&
                    _.dropping(_.payload.completed.result.reason),
                  ("FLUSH" !== _.type && "DROP_COMPLETE" !== _.type) ||
                    _.resting(),
                  _(_);
              }),
              ((_) => () => (_) => (_) => {
                ("DROP_COMPLETE" !== _.type &&
                  "FLUSH" !== _.type &&
                  "DROP_ANIMATE" !== _.type) ||
                  _.stopPublishing(),
                  _(_);
              })(_),
              (
                (_) =>
                ({ getState: _, dispatch: _ }) =>
                (_) =>
                (_) => {
                  if ("LIFT" !== _.type) return void _(_);
                  const {
                      _: _,
                      clientSelection: _,
                      movementMode: _,
                    } = _.payload,
                    _ = _();
                  "DROP_ANIMATING" === _.phase &&
                    __webpack_require__(
                      _({
                        completed: _.completed,
                      }),
                    ),
                    "IDLE" !== _().phase && _(!1),
                    __webpack_require__(_()),
                    __webpack_require__({
                      type: "BEFORE_INITIAL_CAPTURE",
                      payload: {
                        draggableId: _,
                        movementMode: _,
                      },
                    });
                  const _ = {
                      draggableId: _,
                      scrollOptions: {
                        shouldPublishImmediately: "SNAP" === _,
                      },
                    },
                    {
                      critical: _,
                      dimensions: _,
                      viewport: _,
                    } = _.startPublishing(_);
                  __webpack_require__({
                    type: "INITIAL_PUBLISH",
                    payload: {
                      critical: _,
                      dimensions: _,
                      clientSelection: _,
                      movementMode: _,
                      viewport: _,
                    },
                  });
                }
              )(_),
              _,
              _,
              _,
              _,
              ((_) => (_) => (_) => (_) => {
                if (
                  ((_) =>
                    "DROP_COMPLETE" === _.type ||
                    "DROP_ANIMATE" === _.type ||
                    "FLUSH" === _.type)(_)
                )
                  return _.stop(), void __webpack_require__(_);
                if ("INITIAL_PUBLISH" === _.type) {
                  __webpack_require__(_);
                  const _ = _.getState();
                  return "DRAGGING" !== _.phase && _(!1), void _.start(_);
                }
                __webpack_require__(_), _.scroll(_.getState());
              })(_),
              _,
              ((_) => {
                let _ = !1;
                return () => (_) => (_) => {
                  if ("INITIAL_PUBLISH" === _.type)
                    return (
                      (_ = !0),
                      _.tryRecordFocus(_.payload.critical.draggable._),
                      __webpack_require__(_),
                      void _.tryRestoreFocusRecorded()
                    );
                  if ((__webpack_require__(_), _)) {
                    if ("FLUSH" === _.type)
                      return (_ = !1), void _.tryRestoreFocusRecorded();
                    if ("DROP_COMPLETE" === _.type) {
                      _ = !1;
                      const _ = _.payload.completed.result;
                      _.combine &&
                        _.tryShiftRecord(_.draggableId, _.combine.draggableId),
                        _.tryRestoreFocusRecorded();
                    }
                  }
                };
              })(_),
              _(_, _),
            ),
          ),
        );
        var _;
      };
      var _ = ({ scrollHeight: _, scrollWidth: _, height: _, width: _ }) => {
          const _ = _(
            {
              _: _,
              _: _,
            },
            {
              _: _,
              _: _,
            },
          );
          return {
            _: Math.max(0, _._),
            _: Math.max(0, _._),
          };
        },
        _ = () => {
          const _ = document.documentElement;
          return _ || _(!1), _;
        },
        _ = () => {
          const _ = _();
          return _({
            scrollHeight: _.scrollHeight,
            scrollWidth: _.scrollWidth,
            width: _.clientWidth,
            height: _.clientHeight,
          });
        },
        _ = ({ critical: _, scrollOptions: _, registry: _ }) => {
          _();
          const _ = (() => {
              const _ = _(),
                _ = _(),
                _ = _._,
                _ = _._,
                _ = _(),
                _ = _ + _.clientWidth,
                _ = _ + _.clientHeight;
              return {
                frame: (0, _._)({
                  top: _,
                  left: _,
                  right: _,
                  bottom: _,
                }),
                scroll: {
                  initial: _,
                  current: _,
                  max: _,
                  diff: {
                    value: _,
                    displacement: _,
                  },
                },
              };
            })(),
            _ = _.scroll.current,
            _ = _.droppable,
            _ = _.droppable
              .getAllByType(_.type)
              .map((_) => _.callbacks.getDimensionAndWatchScroll(_, _)),
            _ = _.draggable
              .getAllByType(_.draggable.type)
              .map((_) => _.getDimension(_)),
            _ = {
              draggables: _(_),
              droppables: _(_),
            };
          _();
          return {
            dimensions: _,
            critical: _,
            viewport: _,
          };
        };
      function _(_, _, _) {
        if (_.descriptor._ === _._) return !1;
        if (_.descriptor.type !== _.type) return !1;
        return (
          "virtual" ===
          _.droppable.getById(_.descriptor.droppableId).descriptor.mode
        );
      }
      var _ = (_, _) => {
          let _ = null;
          const _ = (function ({ registry: _, callbacks: _ }) {
              let _ = {
                  additions: {},
                  removals: {},
                  modified: {},
                },
                _ = null;
              const _ = () => {
                _ ||
                  (_.collectionStarting(),
                  (_ = requestAnimationFrame(() => {
                    (_ = null), _();
                    const { additions: _, removals: _, modified: _ } = _,
                      _ = Object.keys(_)
                        .map((_) => _.draggable.getById(_).getDimension(_))
                        .sort(
                          (_, _) => _.descriptor.index - _.descriptor.index,
                        ),
                      _ = Object.keys(_).map((_) => ({
                        droppableId: _,
                        scroll: _.droppable
                          .getById(_)
                          .callbacks.getScrollWhileDragging(),
                      })),
                      _ = {
                        additions: _,
                        removals: Object.keys(_),
                        modified: _,
                      };
                    (_ = {
                      additions: {},
                      removals: {},
                      modified: {},
                    }),
                      _(),
                      _.publish(_);
                  })));
              };
              return {
                add: (_) => {
                  const _ = _.descriptor._;
                  (_.additions[_] = _),
                    (_.modified[_.descriptor.droppableId] = !0),
                    _.removals[_] && delete _.removals[_],
                    _();
                },
                remove: (_) => {
                  const _ = _.descriptor;
                  (_.removals[_._] = !0),
                    (_.modified[_.droppableId] = !0),
                    _.additions[_._] && delete _.additions[_._],
                    _();
                },
                stop: () => {
                  _ &&
                    (cancelAnimationFrame(_),
                    (_ = null),
                    (_ = {
                      additions: {},
                      removals: {},
                      modified: {},
                    }));
                },
              };
            })({
              callbacks: {
                publish: _.publishWhileDragging,
                collectionStarting: _.collectionStarting,
              },
              registry: _,
            }),
            _ = (_) => {
              _ || _(!1);
              const _ = _.critical.draggable;
              "ADDITION" === _.type && _(_, _, _.value) && _.add(_.value),
                "REMOVAL" === _.type && _(_, _, _.value) && _.remove(_.value);
            },
            _ = {
              updateDroppableIsEnabled: (_, _) => {
                _.droppable.exists(_) || _(!1),
                  _ &&
                    _.updateDroppableIsEnabled({
                      _: _,
                      isEnabled: _,
                    });
              },
              updateDroppableIsCombineEnabled: (_, _) => {
                _ &&
                  (_.droppable.exists(_) || _(!1),
                  _.updateDroppableIsCombineEnabled({
                    _: _,
                    isCombineEnabled: _,
                  }));
              },
              scrollDroppable: (_, _) => {
                _ && _.droppable.getById(_).callbacks.scroll(_);
              },
              updateDroppableScroll: (_, _) => {
                _ &&
                  (_.droppable.exists(_) || _(!1),
                  _.updateDroppableScroll({
                    _: _,
                    newScroll: _,
                  }));
              },
              startPublishing: (_) => {
                _ && _(!1);
                const _ = _.draggable.getById(_.draggableId),
                  _ = _.droppable.getById(_.descriptor.droppableId),
                  _ = {
                    draggable: _.descriptor,
                    droppable: _.descriptor,
                  },
                  _ = _.subscribe(_);
                return (
                  (_ = {
                    critical: _,
                    unsubscribe: _,
                  }),
                  _({
                    critical: _,
                    registry: _,
                    scrollOptions: _.scrollOptions,
                  })
                );
              },
              stopPublishing: () => {
                if (!_) return;
                _.stop();
                const _ = _.critical.droppable;
                _.droppable
                  .getAllByType(_.type)
                  .forEach((_) => _.callbacks.dragStopped()),
                  __webpack_require__.unsubscribe(),
                  (_ = null);
              },
            };
          return _;
        },
        _ = (_, _) =>
          "IDLE" === _.phase ||
          ("DROP_ANIMATING" === _.phase &&
            _.completed.result.draggableId !== _ &&
            "DROP" === _.completed.result.reason),
        _ = (_) => {
          window.scrollBy(_._, _._);
        };
      const _ = _((_) => _(_).filter((_) => !!_.isEnabled && !!_.frame));
      var _ = ({ center: _, destination: _, droppables: _ }) => {
        if (_) {
          const _ = _[_];
          return _.frame ? _ : null;
        }
        const _ = ((_, _) => {
          const _ =
            _(_).find((_) => (_.frame || _(!1), _(_.frame.pageMarginBox)(_))) ||
            null;
          return _;
        })(_, _);
        return _;
      };
      const _ = {
        startFromPercentage: 0.25,
        maxScrollAtPercentage: 0.05,
        maxPixelScroll: 28,
        ease: (_) => _ ** 2,
        durationDampening: {
          stopDampeningAt: 1200,
          accelerateAt: 360,
        },
        disabled: !1,
      };
      var _ = ({ startOfRange: _, endOfRange: _, current: _ }) => {
          const _ = _ - _;
          if (0 === _) return 0;
          return (_ - _) / _;
        },
        _ = ({
          distanceToEdge: _,
          thresholds: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        }) => {
          const _ = ((_, _, _ = () => _) => {
            const _ = __webpack_require__();
            if (_ > _.startScrollingFrom) return 0;
            if (_ <= _.maxScrollValueAt) return _.maxPixelScroll;
            if (_ === _.startScrollingFrom) return 1;
            const _ =
                1 -
                _({
                  startOfRange: _.maxScrollValueAt,
                  endOfRange: _.startScrollingFrom,
                  current: _,
                }),
              _ = _.maxPixelScroll * _.ease(_);
            return Math.ceil(_);
          })(_, _, _);
          return 0 === _
            ? 0
            : _
              ? Math.max(
                  ((_, _, _) => {
                    const _ = __webpack_require__(),
                      _ = _.durationDampening.accelerateAt,
                      _ = _.durationDampening.stopDampeningAt,
                      _ = _,
                      _ = _,
                      _ = Date.now() - _;
                    if (_ >= _) return _;
                    if (_ < _) return 1;
                    const _ = _({
                        startOfRange: _,
                        endOfRange: _,
                        current: _,
                      }),
                      _ = _ * _.ease(_);
                    return Math.ceil(_);
                  })(_, _, _),
                  1,
                )
              : _;
        },
        _ = ({
          container: _,
          distanceToEdges: _,
          dragStartTime: _,
          axis: _,
          shouldUseTimeDampening: _,
          getAutoScrollerOptions: _,
        }) => {
          const _ = ((_, _, _ = () => _) => {
            const _ = __webpack_require__();
            return {
              startScrollingFrom: _[_.size] * _.startFromPercentage,
              maxScrollValueAt: _[_.size] * _.maxScrollAtPercentage,
            };
          })(_, _, _);
          return _[_.end] < _[_.start]
            ? _({
                distanceToEdge: _[_.end],
                thresholds: _,
                dragStartTime: _,
                shouldUseTimeDampening: _,
                getAutoScrollerOptions: _,
              })
            : -1 *
                _({
                  distanceToEdge: _[_.start],
                  thresholds: _,
                  dragStartTime: _,
                  shouldUseTimeDampening: _,
                  getAutoScrollerOptions: _,
                });
        };
      const _ = _((_) => (0 === _ ? 0 : _));
      var _ = ({
        dragStartTime: _,
        container: _,
        subject: _,
        center: _,
        shouldUseTimeDampening: _,
        getAutoScrollerOptions: _,
      }) => {
        const _ = {
            top: _._ - _.top,
            right: _.right - _._,
            bottom: _.bottom - _._,
            left: _._ - _.left,
          },
          _ = _({
            container: _,
            distanceToEdges: _,
            dragStartTime: _,
            axis: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          }),
          _ = _({
            container: _,
            distanceToEdges: _,
            dragStartTime: _,
            axis: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          }),
          _ = _({
            _: _,
            _: _,
          });
        if (_(_, _)) return null;
        const _ = (({ container: _, subject: _, proposedScroll: _ }) => {
          const _ = _.height > _.height,
            _ = _.width > _.width;
          return _ || _
            ? _ && _
              ? null
              : {
                  _: _ ? 0 : _._,
                  _: _ ? 0 : _._,
                }
            : _;
        })({
          container: _,
          subject: _,
          proposedScroll: _,
        });
        return _ ? (_(_, _) ? null : _) : null;
      };
      const _ = _((_) => (0 === _ ? 0 : _ > 0 ? 1 : -1)),
        _ = (() => {
          const _ = (_, _) => (_ < 0 ? _ : _ > _ ? _ - _ : 0);
          return ({ current: _, max: _, change: _ }) => {
            const _ = _(_, _),
              _ = {
                _: _(_._, _._),
                _: _(_._, _._),
              };
            return _(_, _) ? null : _;
          };
        })(),
        _ = ({ max: _, current: _, change: _ }) => {
          const _ = {
              _: Math.max(_._, _._),
              _: Math.max(_._, _._),
            },
            _ = _(_),
            _ = _({
              max: _,
              current: _,
              change: _,
            });
          return !_ || (0 !== _._ && 0 === _._) || (0 !== _._ && 0 === _._);
        },
        _ = (_, _) =>
          _({
            current: _.scroll.current,
            max: _.scroll.max,
            change: _,
          }),
        _ = (_, _) => {
          const _ = _.frame;
          return (
            !!_ &&
            _({
              current: _.scroll.current,
              max: _.scroll.max,
              change: _,
            })
          );
        };
      var _ = ({
          state: _,
          dragStartTime: _,
          shouldUseTimeDampening: _,
          scrollWindow: _,
          scrollDroppable: _,
          getAutoScrollerOptions: _,
        }) => {
          const _ = _.current.page.borderBoxCenter,
            _ = _.dimensions.draggables[_.critical.draggable._].page.marginBox;
          if (_.isWindowScrollAllowed) {
            const _ = (({
              viewport: _,
              subject: _,
              center: _,
              dragStartTime: _,
              shouldUseTimeDampening: _,
              getAutoScrollerOptions: _,
            }) => {
              const _ = _({
                dragStartTime: _,
                container: _.frame,
                subject: _,
                center: _,
                shouldUseTimeDampening: _,
                getAutoScrollerOptions: _,
              });
              return _ && _(_, _) ? _ : null;
            })({
              dragStartTime: _,
              viewport: _.viewport,
              subject: _,
              center: _,
              shouldUseTimeDampening: _,
              getAutoScrollerOptions: _,
            });
            if (_) return void _(_);
          }
          const _ = _({
            center: _,
            destination: _(_.impact),
            droppables: _.dimensions.droppables,
          });
          if (!_) return;
          const _ = (({
            droppable: _,
            subject: _,
            center: _,
            dragStartTime: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          }) => {
            const _ = _.frame;
            if (!_) return null;
            const _ = _({
              dragStartTime: _,
              container: _.pageMarginBox,
              subject: _,
              center: _,
              shouldUseTimeDampening: _,
              getAutoScrollerOptions: _,
            });
            return _ && _(_, _) ? _ : null;
          })({
            dragStartTime: _,
            droppable: _,
            subject: _,
            center: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          });
          _ && _(_.descriptor._, _);
        },
        _ = ({ move: _, scrollDroppable: _, scrollWindow: _ }) => {
          const _ = (_, _) => {
              if (!_(_, _)) return _;
              const _ = ((_, _) => {
                const _ = _.frame;
                return _ && _(_, _)
                  ? _({
                      current: _.scroll.current,
                      max: _.scroll.max,
                      change: _,
                    })
                  : null;
              })(_, _);
              if (!_) return _(_.descriptor._, _), null;
              const _ = _(_, _);
              _(_.descriptor._, _);
              return _(_, _);
            },
            _ = (_, _, _) => {
              if (!_) return _;
              if (!_(_, _)) return _;
              const _ = ((_, _) => {
                if (!_(_, _)) return null;
                const _ = _.scroll.max,
                  _ = _.scroll.current;
                return _({
                  current: _,
                  max: _,
                  change: _,
                });
              })(_, _);
              if (!_) return __webpack_require__(_), null;
              const _ = _(_, _);
              __webpack_require__(_);
              return _(_, _);
            };
          return (_) => {
            const _ = _.scrollJumpRequest;
            if (!_) return;
            const _ = _(_.impact);
            _ || _(!1);
            const _ = _(_.dimensions.droppables[_], _);
            if (!_) return;
            const _ = _.viewport,
              _ = _(_.isWindowScrollAllowed, _, _);
            _ &&
              ((_, _) => {
                const _ = _(_.current.client.selection, _);
                _({
                  client: _,
                });
              })(_, _);
          };
        },
        _ = ({
          scrollDroppable: _,
          scrollWindow: _,
          move: _,
          getAutoScrollerOptions: _,
        }) => {
          const _ = (({
              scrollWindow: _,
              scrollDroppable: _,
              getAutoScrollerOptions: _ = () => _,
            }) => {
              const _ = (0, _._)(_),
                _ = (0, _._)(_);
              let _ = null;
              const _ = (_) => {
                _ || _(!1);
                const { shouldUseTimeDampening: _, dragStartTime: _ } = _;
                _({
                  state: _,
                  scrollWindow: _,
                  scrollDroppable: _,
                  dragStartTime: _,
                  shouldUseTimeDampening: _,
                  getAutoScrollerOptions: _,
                });
              };
              return {
                start: (_) => {
                  _(), _ && _(!1);
                  const _ = Date.now();
                  let _ = !1;
                  const _ = () => {
                    _ = !0;
                  };
                  _({
                    state: _,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: _,
                    scrollDroppable: _,
                    getAutoScrollerOptions: _,
                  }),
                    (_ = {
                      dragStartTime: _,
                      shouldUseTimeDampening: _,
                    }),
                    _(),
                    _ && _(_);
                },
                stop: () => {
                  _ && (_.cancel(), _.cancel(), (_ = null));
                },
                scroll: _,
              };
            })({
              scrollWindow: _,
              scrollDroppable: _,
              getAutoScrollerOptions: _,
            }),
            _ = _({
              move: _,
              scrollWindow: _,
              scrollDroppable: _,
            });
          return {
            scroll: (_) => {
              _().disabled ||
                "DRAGGING" !== _.phase ||
                ("FLUID" !== _.movementMode
                  ? _.scrollJumpRequest && _(_)
                  : _.scroll(_));
            },
            start: _.start,
            stop: _.stop,
          };
        };
      const _ = "data-rfd",
        _ = (() => {
          const _ = `${_}-drag-handle`;
          return {
            base: _,
            draggableId: `${_}-draggable-id`,
            contextId: `${_}-context-id`,
          };
        })(),
        _ = (() => {
          const _ = `${_}-draggable`;
          return {
            base: _,
            contextId: `${_}-context-id`,
            _: `${_}-id`,
          };
        })(),
        _ = (() => {
          const _ = `${_}-droppable`;
          return {
            base: _,
            contextId: `${_}-context-id`,
            _: `${_}-id`,
          };
        })(),
        _ = {
          contextId: `${_}-scroll-container-context-id`,
        },
        _ = (_, _) =>
          _.map((_) => {
            const _ = _.styles[_];
            return _ ? `${_.selector} { ${_} }` : "";
          }).join(" ");
      var _ = (_) => {
        const _ = ((_ = _), (_) => `[${_}="${_}"]`);
        var _;
        const _ = (() => {
            const _ =
              "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ";
            return {
              selector: _(_.contextId),
              styles: {
                always:
                  "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                resting: _,
                dragging: "pointer-events: none;",
                dropAnimating: _,
              },
            };
          })(),
          _ = [
            (() => {
              const _ = `\n      transition: ${_.outOfTheWay};\n    `;
              return {
                selector: _(_.contextId),
                styles: {
                  dragging: _,
                  dropAnimating: _,
                  userCancel: _,
                },
              };
            })(),
            _,
            {
              selector: _(_.contextId),
              styles: {
                always: "overflow-anchor: none;",
              },
            },
            {
              selector: "body",
              styles: {
                dragging:
                  "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ",
              },
            },
          ];
        return {
          always: _(_, "always"),
          resting: _(_, "resting"),
          dragging: _(_, "dragging"),
          dropAnimating: _(_, "dropAnimating"),
          userCancel: _(_, "userCancel"),
        };
      };
      var _ =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement
          ? _.useLayoutEffect
          : _.useEffect;
      const _ = () => {
          const _ = document.querySelector("head");
          return _ || _(!1), _;
        },
        _ = (_) => {
          const _ = document.createElement("style");
          return _ && _.setAttribute("nonce", _), (_.type = "text/css"), _;
        };
      function _(_, _) {
        return Array.from(_.querySelectorAll(_));
      }
      var _ = (_) =>
        _ && _.ownerDocument && _.ownerDocument.defaultView
          ? _.ownerDocument.defaultView
          : window;
      function _(_) {
        return _ instanceof _(_).HTMLElement;
      }
      function _(_, _) {
        const _ = `[${_.contextId}="${_}"]`,
          _ = _(document, _);
        if (!_.length) return null;
        const _ = _.find((_) => _.getAttribute(_.draggableId) === _);
        return _ && _(_) ? _ : null;
      }
      function _() {
        const _ = {
            draggables: {},
            droppables: {},
          },
          _ = [];
        function _(_) {
          _.length && _.forEach((_) => _(_));
        }
        function _(_) {
          return _.draggables[_] || null;
        }
        function _(_) {
          return _.droppables[_] || null;
        }
        return {
          draggable: {
            register: (_) => {
              (_.draggables[_.descriptor._] = _),
                __webpack_require__({
                  type: "ADDITION",
                  value: _,
                });
            },
            update: (_, _) => {
              const _ = _.draggables[_.descriptor._];
              _ &&
                _.uniqueId === _.uniqueId &&
                (delete _.draggables[_.descriptor._],
                (_.draggables[_.descriptor._] = _));
            },
            unregister: (_) => {
              const _ = _.descriptor._,
                _ = _(_);
              _ &&
                _.uniqueId === _.uniqueId &&
                (delete _.draggables[_],
                _.droppables[_.descriptor.droppableId] &&
                  __webpack_require__({
                    type: "REMOVAL",
                    value: _,
                  }));
            },
            getById: function (_) {
              const _ = _(_);
              return _ || _(!1), _;
            },
            findById: _,
            exists: (_) => Boolean(_(_)),
            getAllByType: (_) =>
              Object.values(_.draggables).filter(
                (_) => _.descriptor.type === _,
              ),
          },
          droppable: {
            register: (_) => {
              _.droppables[_.descriptor._] = _;
            },
            unregister: (_) => {
              const _ = _(_.descriptor._);
              _ &&
                _.uniqueId === _.uniqueId &&
                delete _.droppables[_.descriptor._];
            },
            getById: function (_) {
              const _ = _(_);
              return _ || _(!1), _;
            },
            findById: _,
            exists: (_) => Boolean(_(_)),
            getAllByType: (_) =>
              Object.values(_.droppables).filter(
                (_) => _.descriptor.type === _,
              ),
          },
          subscribe: function (_) {
            return (
              _.push(_),
              function () {
                const _ = _.indexOf(_);
                -1 !== _ && _.splice(_, 1);
              }
            );
          },
          clean: function () {
            (_.draggables = {}), (_.droppables = {}), (_.length = 0);
          },
        };
      }
      var _ = _.createContext(null),
        _ = () => {
          const _ = document.body;
          return _ || _(!1), _;
        };
      var _ = {
        position: "absolute",
        width: "1px",
        height: "1px",
        margin: "-1px",
        border: "0",
        padding: "0",
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
        "clip-path": "inset(100%)",
      };
      const _ = (_) => `rfd-announcement-${_}`;
      const _ = {
        separator: "::",
      };
      var _ = function (_, _ = _) {
        const _ = _.useId();
        return (0, _._)(() => `${_}${_.separator}${_}`, [_.separator, _, _]);
      };
      var _ = _.createContext(null);
      function _(_) {
        0;
      }
      function _(_, _) {
        _();
      }
      function _(_) {
        const _ = (0, _.useRef)(_);
        return (
          (0, _.useEffect)(() => {
            _.current = _;
          }),
          _
        );
      }
      function _(_) {
        return (
          "IDLE" !== _.phase && "DROP_ANIMATING" !== _.phase && _.isDragging
        );
      }
      const _ = 9,
        _ = 13,
        _ = 33,
        _ = 34,
        _ = 35,
        _ = 36,
        _ = {
          [_]: !0,
          [_]: !0,
        };
      var _ = (_) => {
        _[_.keyCode] && _.preventDefault();
      };
      var _ = (() => {
        const _ = "visibilitychange";
        if ("undefined" == typeof document) return _;
        return (
          [_, `ms${_}`, `webkit${_}`, `moz${_}`, `o${_}`].find(
            (_) => `on${_}` in document,
          ) || _
        );
      })();
      const _ = {
        type: "IDLE",
      };
      function _({ cancel: _, completed: _, getPhase: _, setPhase: _ }) {
        return [
          {
            eventName: "mousemove",
            _: (_) => {
              const { button: _, clientX: _, clientY: _ } = _;
              if (0 !== _) return;
              const _ = {
                  _: _,
                  _: _,
                },
                _ = __webpack_require__();
              if ("DRAGGING" === _.type)
                return _.preventDefault(), void _.actions.move(_);
              "PENDING" !== _.type && _(!1);
              const _ = _.point;
              if (
                ((_ = _),
                (_ = _),
                !(Math.abs(_._ - _._) >= 5 || Math.abs(_._ - _._) >= 5))
              )
                return;
              var _, _;
              _.preventDefault();
              const _ = _.actions.fluidLift(_);
              _({
                type: "DRAGGING",
                actions: _,
              });
            },
          },
          {
            eventName: "mouseup",
            _: (_) => {
              const _ = __webpack_require__();
              "DRAGGING" === _.type
                ? (_.preventDefault(),
                  _.actions.drop({
                    shouldBlockNextClick: !0,
                  }),
                  _())
                : _();
            },
          },
          {
            eventName: "mousedown",
            _: (_) => {
              "DRAGGING" === __webpack_require__().type && _.preventDefault(),
                _();
            },
          },
          {
            eventName: "keydown",
            _: (_) => {
              if ("PENDING" !== __webpack_require__().type)
                return 27 === _.keyCode
                  ? (_.preventDefault(), void _())
                  : void _(_);
              _();
            },
          },
          {
            eventName: "resize",
            _: _,
          },
          {
            eventName: "scroll",
            options: {
              passive: !0,
              capture: !1,
            },
            _: () => {
              "PENDING" === __webpack_require__().type && _();
            },
          },
          {
            eventName: "webkitmouseforcedown",
            _: (_) => {
              const _ = __webpack_require__();
              "IDLE" === _.type && _(!1),
                _.actions.shouldRespectForcePress() ? _() : _.preventDefault();
            },
          },
          {
            eventName: _,
            _: _,
          },
        ];
      }
      function _() {}
      const _ = {
        [_]: !0,
        [_]: !0,
        [_]: !0,
        [_]: !0,
      };
      function _(_, _) {
        function _() {
          _(), _.cancel();
        }
        return [
          {
            eventName: "keydown",
            _: (_) =>
              27 === _.keyCode
                ? (_.preventDefault(), void __webpack_require__())
                : 32 === _.keyCode
                  ? (_.preventDefault(), _(), void _.drop())
                  : 40 === _.keyCode
                    ? (_.preventDefault(), void _.moveDown())
                    : 38 === _.keyCode
                      ? (_.preventDefault(), void _.moveUp())
                      : 39 === _.keyCode
                        ? (_.preventDefault(), void _.moveRight())
                        : 37 === _.keyCode
                          ? (_.preventDefault(), void _.moveLeft())
                          : void (_[_.keyCode] ? _.preventDefault() : _(_)),
          },
          {
            eventName: "mousedown",
            _: _,
          },
          {
            eventName: "mouseup",
            _: _,
          },
          {
            eventName: "click",
            _: _,
          },
          {
            eventName: "touchstart",
            _: _,
          },
          {
            eventName: "resize",
            _: _,
          },
          {
            eventName: "wheel",
            _: _,
            options: {
              passive: !0,
            },
          },
          {
            eventName: _,
            _: _,
          },
        ];
      }
      const _ = {
        type: "IDLE",
      };
      const _ = [
        "input",
        "button",
        "textarea",
        "select",
        "option",
        "optgroup",
        "video",
        "audio",
      ];
      function _(_, _) {
        if (null == _) return !1;
        if (_.includes(_.tagName.toLowerCase())) return !0;
        const _ = _.getAttribute("contenteditable");
        return "true" === _ || "" === _ || (_ !== _ && _(_, _.parentElement));
      }
      function _(_, _) {
        const _ = _.target;
        return !!_(_) && _(_, _);
      }
      var _ = (_) => (0, _._)(_.getBoundingClientRect()).center;
      const _ = (() => {
        const _ = "matches";
        if ("undefined" == typeof document) return _;
        return (
          [_, "msMatchesSelector", "webkitMatchesSelector"].find(
            (_) => _ in Element.prototype,
          ) || _
        );
      })();
      function _(_, _) {
        return null == _ ? null : _[_](_) ? _ : _(_.parentElement, _);
      }
      function _(_, _) {
        return _.closest ? _.closest(_) : _(_, _);
      }
      function _(_, _) {
        const _ = _.target;
        if (!((_ = _) instanceof _(_).Element)) return null;
        var _;
        const _ = (function (_) {
            return `[${_.contextId}="${_}"]`;
          })(_),
          _ = _(_, _);
        return _ && _(_) ? _ : null;
      }
      function _(_) {
        _.preventDefault();
      }
      function _({ expected: _, phase: _, isLockActive: _, shouldWarn: _ }) {
        return !!__webpack_require__() && _ === _;
      }
      function _({ lockAPI: _, store: _, registry: _, draggableId: _ }) {
        if (_.isClaimed()) return !1;
        const _ = _.draggable.findById(_);
        return !!_ && !!_.options.isEnabled && !!_(_.getState(), _);
      }
      function _({
        lockAPI: _,
        contextId: _,
        store: _,
        registry: _,
        draggableId: _,
        forceSensorStop: _,
        sourceEvent: _,
      }) {
        if (
          !_({
            lockAPI: _,
            store: _,
            registry: _,
            draggableId: _,
          })
        )
          return null;
        const _ = _.draggable.getById(_),
          _ = (function (_, _) {
            const _ = `[${_.contextId}="${_}"]`,
              _ = _(document, _).find((_) => _.getAttribute(_._) === _);
            return _ && _(_) ? _ : null;
          })(_, _.descriptor._);
        if (!_) return null;
        if (_ && !_.options.canDragInteractiveElements && _(_, _)) return null;
        const _ = _.claim(_ || _);
        let _ = "PRE_DRAG";
        function _() {
          return _.options.shouldRespectForcePress;
        }
        function _() {
          return _.isActive(_);
        }
        const _ = function (_, _) {
          _({
            expected: _,
            phase: _,
            isLockActive: _,
            shouldWarn: !0,
          }) && __webpack_require__.dispatch(_());
        }.bind(null, "DRAGGING");
        function _(_) {
          function _() {
            _.release(), (_ = "COMPLETED");
          }
          function _(
            _,
            _ = {
              shouldBlockNextClick: !1,
            },
          ) {
            if ((_.cleanup(), _.shouldBlockNextClick)) {
              const _ = _(window, [
                {
                  eventName: "click",
                  _: _,
                  options: {
                    once: !0,
                    passive: !1,
                    capture: !0,
                  },
                },
              ]);
              setTimeout(_);
            }
            _(),
              __webpack_require__.dispatch(
                _({
                  reason: _,
                }),
              );
          }
          return (
            "PRE_DRAG" !== _ && (_(), _(!1)),
            __webpack_require__.dispatch(_(_.liftActionArgs)),
            (_ = "DRAGGING"),
            {
              isActive: () =>
                _({
                  expected: "DRAGGING",
                  phase: _,
                  isLockActive: _,
                  shouldWarn: !1,
                }),
              shouldRespectForcePress: _,
              drop: (_) => _("DROP", _),
              cancel: (_) => _("CANCEL", _),
              ..._.actions,
            }
          );
        }
        return {
          isActive: () =>
            _({
              expected: "PRE_DRAG",
              phase: _,
              isLockActive: _,
              shouldWarn: !1,
            }),
          shouldRespectForcePress: _,
          fluidLift: function (_) {
            const _ = (0, _._)((_) => {
              _(() =>
                _({
                  client: _,
                }),
              );
            });
            return {
              ..._({
                liftActionArgs: {
                  _: _,
                  clientSelection: _,
                  movementMode: "FLUID",
                },
                cleanup: () => _.cancel(),
                actions: {
                  move: _,
                },
              }),
              move: _,
            };
          },
          snapLift: function () {
            const _ = {
              moveUp: () => _(_),
              moveRight: () => _(_),
              moveDown: () => _(_),
              moveLeft: () => _(_),
            };
            return _({
              liftActionArgs: {
                _: _,
                clientSelection: _(_),
                movementMode: "SNAP",
              },
              cleanup: _,
              actions: _,
            });
          },
          abort: function () {
            _({
              expected: "PRE_DRAG",
              phase: _,
              isLockActive: _,
              shouldWarn: !0,
            }) && _.release();
          },
        };
      }
      const _ = [
        function (_) {
          const _ = (0, _.useRef)(_),
            _ = (0, _.useRef)(_),
            _ = (0, _._)(
              () => ({
                eventName: "mousedown",
                _: function (_) {
                  if (_.defaultPrevented) return;
                  if (0 !== _.button) return;
                  if (_.ctrlKey || _.metaKey || _.shiftKey || _.altKey) return;
                  const _ = _.findClosestDraggableId(_);
                  if (!_) return;
                  const _ = _.tryGetLock(_, _, {
                    sourceEvent: _,
                  });
                  if (!_) return;
                  _.preventDefault();
                  const _ = {
                    _: _.clientX,
                    _: _.clientY,
                  };
                  __webpack_require__.current(), _(_, _);
                },
              }),
              [_],
            ),
            _ = (0, _._)(
              () => ({
                eventName: "webkitmouseforcewillbegin",
                _: (_) => {
                  if (_.defaultPrevented) return;
                  const _ = _.findClosestDraggableId(_);
                  if (!_) return;
                  const _ = _.findOptionsForDraggable(_);
                  _ &&
                    (_.shouldRespectForcePress ||
                      (_.canGetLock(_) && _.preventDefault()));
                },
              }),
              [_],
            ),
            _ = (0, _._)(
              function () {
                _.current = _(window, [_, _], {
                  passive: !1,
                  capture: !0,
                });
              },
              [_, _],
            ),
            _ = (0, _._)(() => {
              "IDLE" !== _.current.type &&
                ((_.current = _), __webpack_require__.current(), _());
            }, [_]),
            _ = (0, _._)(() => {
              const _ = _.current;
              _(),
                "DRAGGING" === _.type &&
                  _.actions.cancel({
                    shouldBlockNextClick: !0,
                  }),
                "PENDING" === _.type && _.actions.abort();
            }, [_]),
            _ = (0, _._)(
              function () {
                const _ = _({
                  cancel: _,
                  completed: _,
                  getPhase: () => _.current,
                  setPhase: (_) => {
                    _.current = _;
                  },
                });
                _.current = _(window, _, {
                  capture: !0,
                  passive: !1,
                });
              },
              [_, _],
            ),
            _ = (0, _._)(
              function (_, _) {
                "IDLE" !== _.current.type && _(!1),
                  (_.current = {
                    type: "PENDING",
                    point: _,
                    actions: _,
                  }),
                  _();
              },
              [_],
            );
          _(
            function () {
              return (
                _(),
                function () {
                  __webpack_require__.current();
                }
              );
            },
            [_],
          );
        },
        function (_) {
          const _ = (0, _.useRef)(_),
            _ = (0, _._)(
              () => ({
                eventName: "keydown",
                _: function (_) {
                  if (_.defaultPrevented) return;
                  if (32 !== _.keyCode) return;
                  const _ = _.findClosestDraggableId(_);
                  if (!_) return;
                  const _ = _.tryGetLock(_, _, {
                    sourceEvent: _,
                  });
                  if (!_) return;
                  __webpack_require__.preventDefault();
                  let _ = !0;
                  const _ = _.snapLift();
                  function _() {
                    _ || _(!1), (_ = !1), _.current(), _();
                  }
                  _.current(),
                    (_.current = _(window, _(_, _), {
                      capture: !0,
                      passive: !1,
                    }));
                },
              }),
              [_],
            ),
            _ = (0, _._)(
              function () {
                _.current = _(window, [_], {
                  passive: !1,
                  capture: !0,
                });
              },
              [_],
            );
          _(
            function () {
              return (
                _(),
                function () {
                  _.current();
                }
              );
            },
            [_],
          );
        },
        function (_) {
          const _ = (0, _.useRef)(_),
            _ = (0, _.useRef)(_),
            _ = (0, _._)(function () {
              return _.current;
            }, []),
            _ = (0, _._)(function (_) {
              _.current = _;
            }, []),
            _ = (0, _._)(
              () => ({
                eventName: "touchstart",
                _: function (_) {
                  if (_.defaultPrevented) return;
                  const _ = _.findClosestDraggableId(_);
                  if (!_) return;
                  const _ = _.tryGetLock(_, _, {
                    sourceEvent: _,
                  });
                  if (!_) return;
                  const _ = _.touches[0],
                    { clientX: _, clientY: _ } = _,
                    _ = {
                      _: _,
                      _: _,
                    };
                  __webpack_require__.current(), _(_, _);
                },
              }),
              [_],
            ),
            _ = (0, _._)(
              function () {
                _.current = _(window, [_], {
                  capture: !0,
                  passive: !1,
                });
              },
              [_],
            ),
            _ = (0, _._)(() => {
              const _ = _.current;
              "IDLE" !== _.type &&
                ("PENDING" === _.type && clearTimeout(_.longPressTimerId),
                _(_),
                __webpack_require__.current(),
                _());
            }, [_, _]),
            _ = (0, _._)(() => {
              const _ = _.current;
              _(),
                "DRAGGING" === _.type &&
                  _.actions.cancel({
                    shouldBlockNextClick: !0,
                  }),
                "PENDING" === _.type && _.actions.abort();
            }, [_]),
            _ = (0, _._)(
              function () {
                const _ = {
                    capture: !0,
                    passive: !1,
                  },
                  _ = {
                    cancel: _,
                    completed: _,
                    getPhase: _,
                  },
                  _ = _(
                    window,
                    (function ({ cancel: _, completed: _, getPhase: _ }) {
                      return [
                        {
                          eventName: "touchmove",
                          options: {
                            capture: !1,
                          },
                          _: (_) => {
                            const _ = __webpack_require__();
                            if ("DRAGGING" !== _.type) return void _();
                            _.hasMoved = !0;
                            const { clientX: _, clientY: _ } = _.touches[0],
                              _ = {
                                _: _,
                                _: _,
                              };
                            _.preventDefault(), _.actions.move(_);
                          },
                        },
                        {
                          eventName: "touchend",
                          _: (_) => {
                            const _ = __webpack_require__();
                            "DRAGGING" === _.type
                              ? (_.preventDefault(),
                                _.actions.drop({
                                  shouldBlockNextClick: !0,
                                }),
                                _())
                              : _();
                          },
                        },
                        {
                          eventName: "touchcancel",
                          _: (_) => {
                            "DRAGGING" === __webpack_require__().type
                              ? (_.preventDefault(), _())
                              : _();
                          },
                        },
                        {
                          eventName: "touchforcechange",
                          _: (_) => {
                            const _ = __webpack_require__();
                            "IDLE" === _.type && _(!1);
                            const _ = _.touches[0];
                            if (!_) return;
                            if (!(_.force >= 0.15)) return;
                            const _ = _.actions.shouldRespectForcePress();
                            if ("PENDING" !== _.type)
                              return _
                                ? _.hasMoved
                                  ? void _.preventDefault()
                                  : void _()
                                : void _.preventDefault();
                            _ && _();
                          },
                        },
                        {
                          eventName: _,
                          _: _,
                        },
                      ];
                    })(_),
                    _,
                  ),
                  _ = _(
                    window,
                    (function ({ cancel: _, getPhase: _ }) {
                      return [
                        {
                          eventName: "orientationchange",
                          _: _,
                        },
                        {
                          eventName: "resize",
                          _: _,
                        },
                        {
                          eventName: "contextmenu",
                          _: (_) => {
                            _.preventDefault();
                          },
                        },
                        {
                          eventName: "keydown",
                          _: (_) => {
                            "DRAGGING" === _().type
                              ? (27 === _.keyCode &&
                                  __webpack_require__.preventDefault(),
                                _())
                              : _();
                          },
                        },
                        {
                          eventName: _,
                          _: _,
                        },
                      ];
                    })(_),
                    _,
                  );
                _.current = function () {
                  _(), _();
                };
              },
              [_, _, _],
            ),
            _ = (0, _._)(
              function () {
                const _ = _();
                "PENDING" !== _.type && _(!1);
                const _ = _.actions.fluidLift(_.point);
                _({
                  type: "DRAGGING",
                  actions: _,
                  hasMoved: !1,
                });
              },
              [_, _],
            ),
            _ = (0, _._)(
              function (_, _) {
                "IDLE" !== _().type && _(!1);
                const _ = setTimeout(_, 120);
                _({
                  type: "PENDING",
                  point: _,
                  actions: _,
                  longPressTimerId: _,
                }),
                  _();
              },
              [_, _, _, _],
            );
          _(
            function () {
              return (
                _(),
                function () {
                  __webpack_require__.current();
                  const _ = _();
                  "PENDING" === _.type &&
                    (clearTimeout(_.longPressTimerId), _(_));
                }
              );
            },
            [_, _, _],
          ),
            _(function () {
              return _(window, [
                {
                  eventName: "touchmove",
                  _: () => {},
                  options: {
                    capture: !1,
                    passive: !1,
                  },
                },
              ]);
            }, []);
        },
      ];
      function _({
        contextId: _,
        store: _,
        registry: _,
        customSensors: _,
        enableDefaultSensors: _,
      }) {
        const _ = [...(_ ? _ : []), ...(_ || [])],
          _ = (0, _.useState)(() =>
            (function () {
              let _ = null;
              function _() {
                _ || _(!1), (_ = null);
              }
              return {
                isClaimed: function () {
                  return Boolean(_);
                },
                isActive: function (_) {
                  return _ === _;
                },
                claim: function (_) {
                  _ && _(!1);
                  const _ = {
                    abandon: _,
                  };
                  return (_ = _), _;
                },
                release: _,
                tryAbandon: function () {
                  _ && (_.abandon(), _());
                },
              };
            })(),
          )[0],
          _ = (0, _._)(
            function (_, _) {
              _(_) && !_(_) && _.tryAbandon();
            },
            [_],
          );
        _(
          function () {
            let _ = _.getState();
            return _.subscribe(() => {
              const _ = _.getState();
              _(_, _), (_ = _);
            });
          },
          [_, _, _],
        ),
          _(() => _.tryAbandon, [_.tryAbandon]);
        const _ = (0, _._)(
            (_) =>
              _({
                lockAPI: _,
                registry: _,
                store: _,
                draggableId: _,
              }),
            [_, _, _],
          ),
          _ = (0, _._)(
            (_, _, _) =>
              _({
                lockAPI: _,
                registry: _,
                contextId: _,
                store: _,
                draggableId: _,
                forceSensorStop: _ || null,
                sourceEvent: _ && _.sourceEvent ? _.sourceEvent : null,
              }),
            [_, _, _, _],
          ),
          _ = (0, _._)(
            (_) =>
              (function (_, _) {
                const _ = _(_, _);
                return _
                  ? __webpack_require__.getAttribute(_.draggableId)
                  : null;
              })(_, _),
            [_],
          ),
          _ = (0, _._)(
            (_) => {
              const _ = _.draggable.findById(_);
              return _ ? _.options : null;
            },
            [_.draggable],
          ),
          _ = (0, _._)(
            function () {
              _.isClaimed() &&
                (_.tryAbandon(),
                "IDLE" !== _.getState().phase && _.dispatch(_()));
            },
            [_, _],
          ),
          _ = (0, _._)(() => _.isClaimed(), [_]),
          _ = (0, _._)(
            () => ({
              canGetLock: _,
              tryGetLock: _,
              findClosestDraggableId: _,
              findOptionsForDraggable: _,
              tryReleaseLock: _,
              isLockClaimed: _,
            }),
            [_, _, _, _, _, _],
          );
        _();
        for (let _ = 0; _ < _.length; _++) _[_](_);
      }
      const _ = (_) => ({
          onBeforeCapture: (_) => {
            const _ = () => {
              _.onBeforeCapture && _.onBeforeCapture(_);
            };
            _.version.startsWith("16") || _.version.startsWith("17")
              ? __webpack_require__()
              : (0, _.flushSync)(_);
          },
          onBeforeDragStart: _.onBeforeDragStart,
          onDragStart: _.onDragStart,
          onDragEnd: _.onDragEnd,
          onDragUpdate: _.onDragUpdate,
        }),
        _ = (_) => ({
          ..._,
          ..._.autoScrollerOptions,
          durationDampening: {
            ..._.durationDampening,
            ..._.autoScrollerOptions,
          },
        });
      function _(_) {
        return _.current || _(!1), _.current;
      }
      function _(_) {
        const {
            contextId: _,
            setCallbacks: _,
            sensors: _,
            nonce: _,
            dragHandleUsageInstructions: _,
          } = _,
          _ = (0, _.useRef)(null);
        _();
        const _ = _(_),
          _ = (0, _._)(() => _(_.current), [_]),
          _ = (0, _._)(() => _(_.current), [_]),
          _ = (function (_) {
            const _ = (0, _._)(() => _(_), [_]),
              _ = (0, _.useRef)(null);
            return (
              (0, _.useEffect)(
                function () {
                  const _ = document.createElement("div");
                  return (
                    (_.current = _),
                    (_._ = _),
                    _.setAttribute("aria-live", "assertive"),
                    _.setAttribute("aria-atomic", "true"),
                    (0, _._)(_.style, _),
                    _().appendChild(_),
                    function () {
                      setTimeout(function () {
                        const _ = _();
                        _.contains(_) && _.removeChild(_),
                          _ === _.current && (_.current = null);
                      });
                    }
                  );
                },
                [_],
              ),
              (0, _._)((_) => {
                const _ = _.current;
                _ && (_.textContent = _);
              }, [])
            );
          })(_),
          _ = (function ({ contextId: _, text: _ }) {
            const _ = _("hidden-text", {
                separator: "-",
              }),
              _ = (0, _._)(
                () =>
                  (function ({ contextId: _, uniqueId: _ }) {
                    return `rfd-hidden-text-${_}-${_}`;
                  })({
                    contextId: _,
                    uniqueId: _,
                  }),
                [_, _],
              );
            return (
              (0, _.useEffect)(
                function () {
                  const _ = document.createElement("div");
                  return (
                    (_._ = _),
                    (_.textContent = _),
                    (_.style.display = "none"),
                    _().appendChild(_),
                    function () {
                      const _ = _();
                      _.contains(_) && _.removeChild(_);
                    }
                  );
                },
                [_, _],
              ),
              _
            );
          })({
            contextId: _,
            text: _,
          }),
          _ = (function (_, _) {
            const _ = (0, _._)(() => _(_), [_]),
              _ = (0, _.useRef)(null),
              _ = (0, _.useRef)(null),
              _ = (0, _._)(
                _((_) => {
                  const _ = _.current;
                  _ || _(!1), (_.textContent = _);
                }),
                [],
              ),
              _ = (0, _._)((_) => {
                const _ = _.current;
                _ || _(!1), (_.textContent = _);
              }, []);
            _(() => {
              (_.current || _.current) && _(!1);
              const _ = _(_),
                _ = _(_);
              return (
                (_.current = _),
                (_.current = _),
                _.setAttribute(`${_}-always`, _),
                _.setAttribute(`${_}-dynamic`, _),
                _().appendChild(_),
                _().appendChild(_),
                _(_.always),
                _(_.resting),
                () => {
                  const _ = (_) => {
                    const _ = _.current;
                    _ || _(!1), _().removeChild(_), (_.current = null);
                  };
                  _(_), _(_);
                }
              );
            }, [_, _, _, _.always, _.resting, _]);
            const _ = (0, _._)(() => _(_.dragging), [_, _.dragging]),
              _ = (0, _._)(
                (_) => {
                  _("DROP" !== _ ? _.userCancel : _.dropAnimating);
                },
                [_, _.dropAnimating, _.userCancel],
              ),
              _ = (0, _._)(() => {
                _.current && _(_.resting);
              }, [_, _.resting]);
            return (0, _._)(
              () => ({
                dragging: _,
                dropping: _,
                resting: _,
              }),
              [_, _, _],
            );
          })(_, _),
          _ = (0, _._)((_) => {
            _(_).dispatch(_);
          }, []),
          _ = (0, _._)(
            () =>
              (0, _._)(
                {
                  publishWhileDragging: _,
                  updateDroppableScroll: _,
                  updateDroppableIsEnabled: _,
                  updateDroppableIsCombineEnabled: _,
                  collectionStarting: _,
                },
                _,
              ),
            [_],
          ),
          _ = (function () {
            const _ = (0, _._)(_, []);
            return (
              (0, _.useEffect)(
                () =>
                  function () {
                    _.version.startsWith("16") || _.version.startsWith("17")
                      ? requestAnimationFrame(_.clean)
                      : _.clean();
                  },
                [_],
              ),
              _
            );
          })(),
          _ = (0, _._)(() => _(_, _), [_, _]),
          _ = (0, _._)(
            () =>
              _({
                scrollWindow: _,
                scrollDroppable: _.scrollDroppable,
                getAutoScrollerOptions: _,
                ...(0, _._)(
                  {
                    move: _,
                  },
                  _,
                ),
              }),
            [_.scrollDroppable, _, _],
          ),
          _ = (function (_) {
            const _ = (0, _.useRef)({}),
              _ = (0, _.useRef)(null),
              _ = (0, _.useRef)(null),
              _ = (0, _.useRef)(!1),
              _ = (0, _._)(function (_, _) {
                const _ = {
                  _: _,
                  focus: _,
                };
                return (
                  (_.current[_] = _),
                  function () {
                    const _ = _.current;
                    _[_] !== _ && delete _[_];
                  }
                );
              }, []),
              _ = (0, _._)(
                function (_) {
                  const _ = _(_, _);
                  _ &&
                    _ !== document.activeElement &&
                    __webpack_require__.focus();
                },
                [_],
              ),
              _ = (0, _._)(function (_, _) {
                _.current === _ && (_.current = _);
              }, []),
              _ = (0, _._)(
                function () {
                  _.current ||
                    (_.current &&
                      (_.current = requestAnimationFrame(() => {
                        _.current = null;
                        const _ = _.current;
                        _ && _(_);
                      })));
                },
                [_],
              ),
              _ = (0, _._)(function (_) {
                _.current = null;
                const _ = document.activeElement;
                _ && _.getAttribute(_.draggableId) === _ && (_.current = _);
              }, []);
            return (
              _(
                () => (
                  (_.current = !0),
                  function () {
                    _.current = !1;
                    const _ = _.current;
                    _ && cancelAnimationFrame(_);
                  }
                ),
                [],
              ),
              (0, _._)(
                () => ({
                  register: _,
                  tryRecordFocus: _,
                  tryRestoreFocusRecorded: _,
                  tryShiftRecord: _,
                }),
                [_, _, _, _],
              )
            );
          })(_),
          _ = (0, _._)(
            () =>
              _({
                announce: _,
                autoScroller: _,
                dimensionMarshal: _,
                focusMarshal: _,
                getResponders: _,
                styleMarshal: _,
              }),
            [_, _, _, _, _, _],
          );
        _.current = _;
        const _ = (0, _._)(() => {
            const _ = _(_);
            "IDLE" !== _.getState().phase && _.dispatch(_());
          }, []),
          _ = (0, _._)(() => {
            const _ = _(_).getState();
            return (
              "DROP_ANIMATING" === _.phase ||
              ("IDLE" !== _.phase && _.isDragging)
            );
          }, []);
        __webpack_require__(
          (0, _._)(
            () => ({
              isDragging: _,
              tryAbort: _,
            }),
            [_, _],
          ),
        );
        const _ = (0, _._)((_) => _(_(_).getState(), _), []),
          _ = (0, _._)(() => _(_(_).getState()), []),
          _ = (0, _._)(
            () => ({
              marshal: _,
              focus: _,
              contextId: _,
              canLift: _,
              isMovementAllowed: _,
              dragHandleUsageInstructionsId: _,
              registry: _,
            }),
            [_, _, _, _, _, _, _],
          );
        return (
          _({
            contextId: _,
            store: _,
            registry: _,
            customSensors: _ || null,
            enableDefaultSensors: !1 !== _.enableDefaultSensors,
          }),
          (0, _.useEffect)(() => _, [_]),
          _.createElement(
            _.Provider,
            {
              value: _,
            },
            _.createElement(
              _,
              {
                context: _,
                store: _,
              },
              _.children,
            ),
          )
        );
      }
      var _ = function () {
        return _.useId();
      };
      function _(_) {
        const _ = _(),
          _ = _.dragHandleUsageInstructions || _.dragHandleUsageInstructions;
        return _.createElement(_, null, (_) =>
          _.createElement(
            _,
            {
              nonce: _.nonce,
              contextId: _,
              setCallbacks: _,
              dragHandleUsageInstructions: _,
              enableDefaultSensors: _.enableDefaultSensors,
              sensors: _.sensors,
              onBeforeCapture: _.onBeforeCapture,
              onBeforeDragStart: _.onBeforeDragStart,
              onDragStart: _.onDragStart,
              onDragUpdate: _.onDragUpdate,
              onDragEnd: _.onDragEnd,
              autoScrollerOptions: _.autoScrollerOptions,
            },
            _.children,
          ),
        );
      }
      const _ = 5e3,
        _ = 4500,
        _ = (_, _) => (_ ? _.drop(_.duration) : _ ? _.snap : _.fluid),
        _ = (_, _) => {
          if (_) return _ ? _.drop : _.combining;
        };
      function _(_) {
        return "DRAGGING" === _.type
          ? (function (_) {
              const _ = _.dimension.client,
                { offset: _, combineWith: _, dropping: _ } = _,
                _ = Boolean(_),
                _ = ((_) =>
                  null != _.forceShouldAnimate
                    ? _.forceShouldAnimate
                    : "SNAP" === _.mode)(_),
                _ = Boolean(_),
                _ = _ ? _(_, _) : _(_);
              return {
                position: "fixed",
                top: _.marginBox.top,
                left: _.marginBox.left,
                boxSizing: "border-box",
                width: _.borderBox.width,
                height: _.borderBox.height,
                transition: _(_, _),
                transform: _,
                opacity: _(_, _),
                zIndex: _ ? _ : _,
                pointerEvents: "none",
              };
            })(_)
          : {
              transform: _((_ = _).offset),
              transition: _.shouldAnimateDisplacement ? void 0 : "none",
            };
        var _;
      }
      function _(_) {
        const _ = _("draggable"),
          {
            descriptor: _,
            registry: _,
            getDraggableRef: _,
            canDragInteractiveElements: _,
            shouldRespectForcePress: _,
            isEnabled: _,
          } = _,
          _ = (0, _._)(
            () => ({
              canDragInteractiveElements: _,
              shouldRespectForcePress: _,
              isEnabled: _,
            }),
            [_, _, _],
          ),
          _ = (0, _._)(
            (_) => {
              const _ = _();
              return (
                _ || _(!1),
                (function (_, _, _ = _) {
                  const _ = window.getComputedStyle(_),
                    _ = _.getBoundingClientRect(),
                    _ = (0, _._)(_, _),
                    _ = (0, _._)(_, _);
                  return {
                    descriptor: _,
                    placeholder: {
                      client: _,
                      tagName: _.tagName.toLowerCase(),
                      display: _.display,
                    },
                    displaceBy: {
                      _: _.marginBox.width,
                      _: _.marginBox.height,
                    },
                    client: _,
                    page: _,
                  };
                })(_, _, _)
              );
            },
            [_, _],
          ),
          _ = (0, _._)(
            () => ({
              uniqueId: _,
              descriptor: _,
              options: _,
              getDimension: _,
            }),
            [_, _, _, _],
          ),
          _ = (0, _.useRef)(_),
          _ = (0, _.useRef)(!0);
        _(
          () => (
            _.draggable.register(_.current),
            () => _.draggable.unregister(_.current)
          ),
          [_.draggable],
        ),
          _(() => {
            if (_.current) return void (_.current = !1);
            const _ = _.current;
            (_.current = _), _.draggable.update(_, _);
          }, [_, _.draggable]);
      }
      var _ = _.createContext(null);
      function _(_) {
        const _ = (0, _.useContext)(_);
        return _ || _(!1), _;
      }
      function _(_) {
        _.preventDefault();
      }
      var _ = (_) => {
          const _ = (0, _.useRef)(null),
            _ = (0, _._)((_ = null) => {
              _.current = _;
            }, []),
            _ = (0, _._)(() => _.current, []),
            {
              contextId: _,
              dragHandleUsageInstructionsId: _,
              registry: _,
            } = _(_),
            { type: _, droppableId: _ } = _(_),
            _ = (0, _._)(
              () => ({
                _: _.draggableId,
                index: _.index,
                type: _,
                droppableId: _,
              }),
              [_.draggableId, _.index, _, _],
            ),
            {
              children: _,
              draggableId: _,
              isEnabled: _,
              shouldRespectForcePress: _,
              canDragInteractiveElements: _,
              isClone: _,
              mapped: _,
              dropAnimationFinished: _,
            } = _;
          if ((_(), _(), !_)) {
            _(
              (0, _._)(
                () => ({
                  descriptor: _,
                  registry: _,
                  getDraggableRef: _,
                  canDragInteractiveElements: _,
                  shouldRespectForcePress: _,
                  isEnabled: _,
                }),
                [_, _, _, _, _, _],
              ),
            );
          }
          const _ = (0, _._)(
              () =>
                _
                  ? {
                      tabIndex: 0,
                      role: "button",
                      "aria-describedby": _,
                      "data-rfd-drag-handle-draggable-id": _,
                      "data-rfd-drag-handle-context-id": _,
                      draggable: !1,
                      onDragStart: _,
                    }
                  : null,
              [_, _, _, _],
            ),
            _ = (0, _._)(
              (_) => {
                "DRAGGING" === _.type &&
                  _.dropping &&
                  "transform" === _.propertyName &&
                  (_.version.startsWith("16") || _.version.startsWith("17")
                    ? _()
                    : (0, _.flushSync)(_));
              },
              [_, _],
            ),
            _ = (0, _._)(() => {
              const _ = _(_),
                _ = "DRAGGING" === _.type && _.dropping ? _ : void 0;
              return {
                innerRef: _,
                draggableProps: {
                  "data-rfd-draggable-context-id": _,
                  "data-rfd-draggable-id": _,
                  style: _,
                  onTransitionEnd: _,
                },
                dragHandleProps: _,
              };
            }, [_, _, _, _, _, _]),
            _ = (0, _._)(
              () => ({
                draggableId: _._,
                type: _.type,
                source: {
                  index: _.index,
                  droppableId: _.droppableId,
                },
              }),
              [_.droppableId, _._, _.index, _.type],
            );
          return _.createElement(_.Fragment, null, _(_, _.snapshot, _));
        },
        _ = (_, _) => _ === _,
        _ = (_) => {
          const { combine: _, destination: _ } = _;
          return _ ? _.droppableId : _ ? _.droppableId : null;
        };
      function _(_ = null) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: _,
          combineWith: null,
        };
      }
      const _ = {
        mapped: {
          type: "SECONDARY",
          offset: _,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: _(null),
        },
      };
      const _ = _(
        () => {
          const _ = (function () {
              const _ = _((_, _) => ({
                  _: _,
                  _: _,
                })),
                _ = _((_, _, _ = null, _ = null, _ = null) => ({
                  isDragging: !0,
                  isClone: _,
                  isDropAnimating: Boolean(_),
                  dropAnimation: _,
                  mode: _,
                  draggingOver: _,
                  combineWith: _,
                  combineTargetFor: null,
                })),
                _ = _((_, _, _, _, _ = null, _ = null, _ = null) => ({
                  mapped: {
                    type: "DRAGGING",
                    dropping: null,
                    draggingOver: _,
                    combineWith: _,
                    mode: _,
                    offset: _,
                    dimension: _,
                    forceShouldAnimate: _,
                    snapshot: _(_, _, _, _, null),
                  },
                }));
              return (_, _) => {
                if (_(_)) {
                  if (_.critical.draggable._ !== _.draggableId) return null;
                  const _ = _.current.client.offset,
                    _ = _.dimensions.draggables[_.draggableId],
                    _ = _(_.impact),
                    _ =
                      (_ = _.impact)._ && "COMBINE" === _._.type
                        ? _._.combine.draggableId
                        : null,
                    _ = _.forceShouldAnimate;
                  return __webpack_require__(
                    _(_._, _._),
                    _.movementMode,
                    _,
                    _.isClone,
                    _,
                    _,
                    _,
                  );
                }
                var _;
                if ("DROP_ANIMATING" === _.phase) {
                  const _ = _.completed;
                  if (_.result.draggableId !== _.draggableId) return null;
                  const _ = _.isClone,
                    _ = _.dimensions.draggables[_.draggableId],
                    _ = _.result,
                    _ = _.mode,
                    _ = _(_),
                    _ = ((_) => (_.combine ? _.combine.draggableId : null))(_),
                    _ = {
                      duration: _.dropDuration,
                      curve: _,
                      moveTo: _.newHomeClientOffset,
                      opacity: _ ? _.drop : null,
                      scale: _ ? _.drop : null,
                    };
                  return {
                    mapped: {
                      type: "DRAGGING",
                      offset: _.newHomeClientOffset,
                      dimension: _,
                      dropping: _,
                      draggingOver: _,
                      combineWith: _,
                      mode: _,
                      forceShouldAnimate: null,
                      snapshot: _(_, _, _, _, _),
                    },
                  };
                }
                return null;
              };
            })(),
            _ = (function () {
              const _ = _((_, _) => ({
                  _: _,
                  _: _,
                })),
                _ = _(_),
                _ = _((_, _ = null, _) => ({
                  mapped: {
                    type: "SECONDARY",
                    offset: _,
                    combineTargetFor: _,
                    shouldAnimateDisplacement: _,
                    snapshot: _(_),
                  },
                })),
                _ = (_) => (_ ? __webpack_require__(_, _, !0) : null),
                _ = (_, _, _, _) => {
                  const _ = _.displaced.visible[_],
                    _ = Boolean(_.inVirtualList && _.effected[_]),
                    _ = _(_),
                    _ = _ && _.draggableId === _ ? _ : null;
                  if (!_) {
                    if (!_) return _(_);
                    if (_.displaced.invisible[_]) return null;
                    const _ = _(_.displacedBy.point),
                      _ = _(_._, _._);
                    return __webpack_require__(_, _, !0);
                  }
                  if (_) return _(_);
                  const _ = _.displacedBy.point,
                    _ = _(_._, _._);
                  return __webpack_require__(_, _, _.shouldAnimate);
                };
              return (_, _) => {
                if (_(_))
                  return _.critical.draggable._ === _.draggableId
                    ? null
                    : _(
                        _.draggableId,
                        _.critical.draggable._,
                        _.impact,
                        _.afterCritical,
                      );
                if ("DROP_ANIMATING" === _.phase) {
                  const _ = _.completed;
                  return _.result.draggableId === _.draggableId
                    ? null
                    : _(
                        _.draggableId,
                        _.result.draggableId,
                        _.impact,
                        _.afterCritical,
                      );
                }
                return null;
              };
            })();
          return (_, _) => _(_, _) || _(_, _) || _;
        },
        {
          dropAnimationFinished: _,
        },
        null,
        {
          context: _,
          areStatePropsEqual: _,
        },
      )(_);
      var _ = _;
      function _(_) {
        return _(_).isUsingCloneFor !== _.draggableId || _.isClone
          ? _.createElement(_, _)
          : null;
      }
      function _(_) {
        const _ = "boolean" != typeof _.isDragDisabled || !_.isDragDisabled,
          _ = Boolean(_.disableInteractiveElementBlocking),
          _ = Boolean(_.shouldRespectForcePress);
        return _.createElement(
          _,
          (0, _._)({}, _, {
            isClone: !1,
            isEnabled: _,
            canDragInteractiveElements: _,
            shouldRespectForcePress: _,
          }),
        );
      }
      const _ = (_) => (_) => _ === _,
        _ = _("scroll"),
        _ = _("auto"),
        _ = (_("visible"), (_, _) => _(_.overflowX) || _(_.overflowY)),
        _ = (_) => {
          const _ = window.getComputedStyle(_),
            _ = {
              overflowX: _.overflowX,
              overflowY: _.overflowY,
            };
          return _(_, _) || _(_, _);
        },
        _ = (_) =>
          null == _ || _ === document.body || _ === document.documentElement
            ? null
            : _(_)
              ? _
              : _(_.parentElement);
      var _ = (_) => ({
        _: _.scrollLeft,
        _: _.scrollTop,
      });
      const _ = (_) => {
        if (!_) return !1;
        return (
          "fixed" === window.getComputedStyle(_).position || _(_.parentElement)
        );
      };
      var _ = ({
        ref: _,
        descriptor: _,
        env: _,
        windowScroll: _,
        direction: _,
        isDropDisabled: _,
        isCombineEnabled: _,
        shouldClipSubject: _,
      }) => {
        const _ = _.closestScrollable,
          _ = ((_, _) => {
            const _ = (0, _._)(_);
            if (!_) return _;
            if (_ !== _) return _;
            const _ = _.paddingBox.top - _.scrollTop,
              _ = _.paddingBox.left - _.scrollLeft,
              _ = _ + _.scrollHeight,
              _ = {
                top: _,
                right: _ + _.scrollWidth,
                bottom: _,
                left: _,
              },
              _ = (0, _._)(_, _.border);
            return (0, _._)({
              borderBox: _,
              margin: _.margin,
              border: _.border,
              padding: _.padding,
            });
          })(_, _),
          _ = (0, _._)(_, _),
          _ = (() => {
            if (!_) return null;
            const _ = (0, _._)(_),
              _ = {
                scrollHeight: _.scrollHeight,
                scrollWidth: _.scrollWidth,
              };
            return {
              client: _,
              page: (0, _._)(_, _),
              scroll: _(_),
              scrollSize: _,
              shouldClipSubject: _,
            };
          })(),
          _ = (({
            descriptor: _,
            isEnabled: _,
            isCombineEnabled: _,
            isFixedOnPage: _,
            direction: _,
            client: _,
            page: _,
            closest: _,
          }) => {
            const _ = (() => {
                if (!_) return null;
                const { scrollSize: _, client: _ } = _,
                  _ = _({
                    scrollHeight: _.scrollHeight,
                    scrollWidth: _.scrollWidth,
                    height: _.paddingBox.height,
                    width: _.paddingBox.width,
                  });
                return {
                  pageMarginBox: _.page.marginBox,
                  frameClient: _,
                  scrollSize: _,
                  shouldClipSubject: _.shouldClipSubject,
                  scroll: {
                    initial: _.scroll,
                    current: _.scroll,
                    max: _,
                    diff: {
                      value: _,
                      displacement: _,
                    },
                  },
                };
              })(),
              _ = "vertical" === _ ? _ : _;
            return {
              descriptor: _,
              isCombineEnabled: _,
              isFixedOnPage: _,
              axis: _,
              isEnabled: _,
              client: _,
              page: _,
              frame: _,
              subject: _({
                page: _,
                withPlaceholder: null,
                axis: _,
                frame: _,
              }),
            };
          })({
            descriptor: _,
            isEnabled: !_,
            isCombineEnabled: _,
            isFixedOnPage: _.isFixedOnPage,
            direction: _,
            client: _,
            page: _,
            closest: _,
          });
        return _;
      };
      const _ = {
          passive: !1,
        },
        _ = {
          passive: !0,
        };
      var _ = (_) => (_.shouldPublishImmediately ? _ : _);
      const _ = (_) => (_ && _.env.closestScrollable) || null;
      function _(_) {
        const _ = (0, _.useRef)(null),
          _ = _(_),
          _ = _("droppable"),
          { registry: _, marshal: _ } = _,
          _ = _(_),
          _ = (0, _._)(
            () => ({
              _: _.droppableId,
              type: _.type,
              mode: _.mode,
            }),
            [_.droppableId, _.mode, _.type],
          ),
          _ = (0, _.useRef)(_),
          _ = (0, _._)(
            () =>
              _((_, _) => {
                _.current || _(!1);
                const _ = {
                  _: _,
                  _: _,
                };
                _.updateDroppableScroll(_._, _);
              }),
            [_._, _],
          ),
          _ = (0, _._)(() => {
            const _ = _.current;
            return _ && _.env.closestScrollable
              ? _(_.env.closestScrollable)
              : _;
          }, []),
          _ = (0, _._)(() => {
            const _ = _();
            _(_._, _._);
          }, [_, _]),
          _ = (0, _._)(() => (0, _._)(_), [_]),
          _ = (0, _._)(() => {
            const _ = _.current,
              _ = _(_);
            (_ && _) || _(!1);
            _.scrollOptions.shouldPublishImmediately ? _() : _();
          }, [_, _]),
          _ = (0, _._)(
            (_, _) => {
              _.current && _(!1);
              const _ = _.current,
                _ = _.getDroppableRef();
              _ || _(!1);
              const _ = ((_) => ({
                  closestScrollable: _(_),
                  isFixedOnPage: _(_),
                }))(_),
                _ = {
                  ref: _,
                  descriptor: _,
                  env: _,
                  scrollOptions: _,
                };
              _.current = _;
              const _ = _({
                  ref: _,
                  descriptor: _,
                  env: _,
                  windowScroll: _,
                  direction: _.direction,
                  isDropDisabled: _.isDropDisabled,
                  isCombineEnabled: _.isCombineEnabled,
                  shouldClipSubject: !_.ignoreContainerClipping,
                }),
                _ = _.closestScrollable;
              return (
                _ &&
                  (_.setAttribute(_.contextId, _.contextId),
                  _.addEventListener("scroll", _, _(_.scrollOptions))),
                _
              );
            },
            [_.contextId, _, _, _],
          ),
          _ = (0, _._)(() => {
            const _ = _.current,
              _ = _(_);
            return (_ && _) || _(!1), _(_);
          }, []),
          _ = (0, _._)(() => {
            const _ = _.current;
            _ || _(!1);
            const _ = _(_);
            (_.current = null),
              _ &&
                (_.cancel(),
                __webpack_require__.removeAttribute(_.contextId),
                __webpack_require__.removeEventListener(
                  "scroll",
                  _,
                  _(_.scrollOptions),
                ));
          }, [_, _]),
          _ = (0, _._)((_) => {
            const _ = _.current;
            _ || _(!1);
            const _ = _(_);
            _ || _(!1), (_.scrollTop += _._), (_.scrollLeft += _._);
          }, []),
          _ = (0, _._)(
            () => ({
              getDimensionAndWatchScroll: _,
              getScrollWhileDragging: _,
              dragStopped: _,
              scroll: _,
            }),
            [_, _, _, _],
          ),
          _ = (0, _._)(
            () => ({
              uniqueId: _,
              descriptor: _,
              callbacks: _,
            }),
            [_, _, _],
          );
        _(
          () => (
            (_.current = _.descriptor),
            _.droppable.register(_),
            () => {
              _.current && _(), _.droppable.unregister(_);
            }
          ),
          [_, _, _, _, _, _.droppable],
        ),
          _(() => {
            _.current &&
              _.updateDroppableIsEnabled(_.current._, !_.isDropDisabled);
          }, [_.isDropDisabled, _]),
          _(() => {
            _.current &&
              _.updateDroppableIsCombineEnabled(
                _.current._,
                _.isCombineEnabled,
              );
          }, [_.isCombineEnabled, _]);
      }
      function _() {}
      const _ = {
          width: 0,
          height: 0,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) => {
          const _ = (({
            isAnimatingOpenOnMount: _,
            placeholder: _,
            animate: _,
          }) =>
            _ || "close" === _
              ? _
              : {
                  height: _.client.borderBox.height,
                  width: _.client.borderBox.width,
                  margin: _.client.margin,
                })({
            isAnimatingOpenOnMount: _,
            placeholder: _,
            animate: _,
          });
          return {
            display: _.display,
            boxSizing: "border-box",
            width: _.width,
            height: _.height,
            marginTop: _.margin.top,
            marginRight: _.margin.right,
            marginBottom: _.margin.bottom,
            marginLeft: _.margin.left,
            flexShrink: "0",
            flexGrow: "0",
            pointerEvents: "none",
            transition: "none" !== _ ? _.placeholder : null,
          };
        };
      var _ = _.memo((_) => {
        const _ = (0, _.useRef)(null),
          _ = (0, _._)(() => {
            _.current && (clearTimeout(_.current), (_.current = null));
          }, []),
          { animate: _, onTransitionEnd: _, onClose: _, contextId: _ } = _,
          [_, _] = (0, _.useState)("open" === _.animate);
        (0, _.useEffect)(
          () =>
            _
              ? "open" !== _
                ? (__webpack_require__(), _(!1), _)
                : _.current
                  ? _
                  : ((_.current = setTimeout(() => {
                      (_.current = null), _(!1);
                    })),
                    _)
              : _,
          [_, _, _],
        );
        const _ = (0, _._)(
            (_) => {
              "height" === _.propertyName && (_(), "close" === _ && _());
            },
            [_, _, _],
          ),
          _ = _({
            isAnimatingOpenOnMount: _,
            animate: _.animate,
            placeholder: _.placeholder,
          });
        return _.createElement(_.placeholder.tagName, {
          style: _,
          "data-rfd-placeholder-context-id": _,
          onTransitionEnd: _,
          ref: _.innerRef,
        });
      });
      class _ extends _.PureComponent {
        constructor(..._) {
          super(..._),
            (this.state = {
              isVisible: Boolean(this.props._),
              data: this.props._,
              animate:
                this.props.shouldAnimate && this.props._ ? "open" : "none",
            }),
            (this.onClose = () => {
              "close" === this.state.animate &&
                this.setState({
                  isVisible: !1,
                });
            });
        }
        static getDerivedStateFromProps(_, _) {
          return _.shouldAnimate
            ? _._
              ? {
                  isVisible: !0,
                  data: _._,
                  animate: "open",
                }
              : _.isVisible
                ? {
                    isVisible: !0,
                    data: _.data,
                    animate: "close",
                  }
                : {
                    isVisible: !1,
                    animate: "close",
                    data: null,
                  }
            : {
                isVisible: Boolean(_._),
                data: _._,
                animate: "none",
              };
        }
        render() {
          if (!this.state.isVisible) return null;
          const _ = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate,
          };
          return this.props.children(_);
        }
      }
      var _ = (_) => {
        const _ = (0, _.useContext)(_);
        _ || _(!1);
        const { contextId: _, isMovementAllowed: _ } = _,
          _ = (0, _.useRef)(null),
          _ = (0, _.useRef)(null),
          {
            children: _,
            droppableId: _,
            type: _,
            mode: _,
            direction: _,
            ignoreContainerClipping: _,
            isDropDisabled: _,
            isCombineEnabled: _,
            snapshot: _,
            useClone: _,
            updateViewportMaxScroll: _,
            getContainerForClone: _,
          } = _,
          _ = (0, _._)(() => _.current, []),
          _ = (0, _._)((_ = null) => {
            _.current = _;
          }, []),
          _ =
            ((0, _._)(() => _.current, []),
            (0, _._)((_ = null) => {
              _.current = _;
            }, []));
        _();
        const _ = (0, _._)(() => {
          _() &&
            _({
              maxScroll: _(),
            });
        }, [_, _]);
        _({
          droppableId: _,
          type: _,
          mode: _,
          direction: _,
          isDropDisabled: _,
          isCombineEnabled: _,
          ignoreContainerClipping: _,
          getDroppableRef: _,
        });
        const _ = (0, _._)(
            () =>
              _.createElement(
                _,
                {
                  _: _.placeholder,
                  shouldAnimate: _.shouldAnimatePlaceholder,
                },
                ({ onClose: _, data: _, animate: _ }) =>
                  _.createElement(_, {
                    placeholder: _,
                    onClose: _,
                    innerRef: _,
                    animate: _,
                    contextId: _,
                    onTransitionEnd: _,
                  }),
              ),
            [_, _, _.placeholder, _.shouldAnimatePlaceholder, _],
          ),
          _ = (0, _._)(
            () => ({
              innerRef: _,
              placeholder: _,
              droppableProps: {
                "data-rfd-droppable-id": _,
                "data-rfd-droppable-context-id": _,
              },
            }),
            [_, _, _, _],
          ),
          _ = _ ? _.dragging.draggableId : null,
          _ = (0, _._)(
            () => ({
              droppableId: _,
              type: _,
              isUsingCloneFor: _,
            }),
            [_, _, _],
          );
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _(_, _),
          (function () {
            if (!_) return null;
            const { dragging: _, render: _ } = _,
              _ = _.createElement(
                _,
                {
                  draggableId: _.draggableId,
                  index: _.source.index,
                  isClone: !0,
                  isEnabled: !0,
                  shouldRespectForcePress: !1,
                  canDragInteractiveElements: !0,
                },
                (_, _) => _(_, _, _),
              );
            return _.createPortal(_, _());
          })(),
        );
      };
      const _ = {
          mode: "standard",
          type: "DEFAULT",
          direction: "vertical",
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || _(!1), document.body;
          },
        },
        _ = (_) => {
          let _,
            _ = {
              ..._,
            };
          for (_ in _)
            void 0 === _[_] &&
              (_ = {
                ..._,
                [_]: _[_],
              });
          return _;
        },
        _ = (_, _) => _ === _.droppable.type,
        _ = (_, _) => _.draggables[_.draggable._];
      var _ = _(
        () => {
          const _ = {
              placeholder: null,
              shouldAnimatePlaceholder: !0,
              snapshot: {
                isDraggingOver: !1,
                draggingOverWith: null,
                draggingFromThisWith: null,
                isUsingPlaceholder: !1,
              },
              useClone: null,
            },
            _ = {
              ..._,
              shouldAnimatePlaceholder: !1,
            },
            _ = _((_) => ({
              draggableId: _._,
              type: _.type,
              source: {
                index: _.index,
                droppableId: _.droppableId,
              },
            })),
            _ = _((_, _, _, _, _, _) => {
              const _ = _.descriptor._;
              if (_.descriptor.droppableId === _) {
                const _ = _
                    ? {
                        render: _,
                        dragging: __webpack_require__(_.descriptor),
                      }
                    : null,
                  _ = {
                    isDraggingOver: _,
                    draggingOverWith: _ ? _ : null,
                    draggingFromThisWith: _,
                    isUsingPlaceholder: !0,
                  };
                return {
                  placeholder: _.placeholder,
                  shouldAnimatePlaceholder: !1,
                  snapshot: _,
                  useClone: _,
                };
              }
              if (!_) return _;
              if (!_) return _;
              const _ = {
                isDraggingOver: _,
                draggingOverWith: _,
                draggingFromThisWith: null,
                isUsingPlaceholder: !0,
              };
              return {
                placeholder: _.placeholder,
                shouldAnimatePlaceholder: !0,
                snapshot: _,
                useClone: null,
              };
            });
          return (_, _) => {
            const _ = _(_),
              _ = _.droppableId,
              _ = _.type,
              _ = !_.isDropDisabled,
              _ = _.renderClone;
            if (_(_)) {
              const _ = _.critical;
              if (!_(_, _)) return _;
              const _ = _(_, _.dimensions),
                _ = _(_.impact) === _;
              return _(_, _, _, _, _, _);
            }
            if ("DROP_ANIMATING" === _.phase) {
              const _ = _.completed;
              if (!_(_, _.critical)) return _;
              const _ = _(_.critical, _.dimensions);
              return _(_, _, _(_.result) === _, _(_.impact) === _, _, _);
            }
            if ("IDLE" === _.phase && _.completed && !_.shouldFlush) {
              const _ = _.completed;
              if (!_(_, _.critical)) return _;
              const _ = _(_.impact) === _,
                _ = Boolean(_.impact._ && "COMBINE" === _.impact._.type),
                _ = _.critical.droppable._ === _;
              return _ ? (_ ? _ : _) : _ ? _ : _;
            }
            return _;
          };
        },
        {
          updateViewportMaxScroll: (_) => ({
            type: "UPDATE_VIEWPORT_MAX_SCROLL",
            payload: _,
          }),
        },
        (_, _, _) => ({
          ..._(_),
          ..._,
          ..._,
        }),
        {
          context: _,
          areStatePropsEqual: _,
        },
      )(_);
    },
    chunkid: (_, _) => {
      var _,
        _ = Symbol.for("react.element"),
        _ = Symbol.for("react.portal"),
        _ = Symbol.for("react.fragment"),
        _ = Symbol.for("react.strict_mode"),
        _ = Symbol.for("react.profiler"),
        _ = Symbol.for("react.provider"),
        _ = Symbol.for("react.context"),
        _ = Symbol.for("react.server_context"),
        _ = Symbol.for("react.forward_ref"),
        _ = Symbol.for("react.suspense"),
        _ = Symbol.for("react.suspense_list"),
        _ = Symbol.for("react.memo"),
        _ = Symbol.for("react.lazy"),
        _ = Symbol.for("react.offscreen");
      function _(_) {
        if ("object" == typeof _ && null !== _) {
          var _ = _.$$typeof;
          switch (_) {
            case _:
              switch ((_ = _.type)) {
                case _:
                case _:
                case _:
                case _:
                case _:
                  return _;
                default:
                  switch ((_ = _ && _.$$typeof)) {
                    case _:
                    case _:
                    case _:
                    case _:
                    case _:
                    case _:
                      return _;
                    default:
                      return _;
                  }
              }
            case _:
              return _;
          }
        }
      }
      (_ = Symbol.for("react.module.reference")),
        (_.isContextConsumer = function (_) {
          return _(_) === _;
        }),
        (_.isFragment = function (_) {
          return _(_) === _;
        });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      module.exports = __webpack_require__("chunkid");
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        YOg: () => _,
        rLB: () => _,
        auy: () => _,
        k5n: () => _,
        Whr: () => _,
        euz: () => _,
        aig: () => _,
        Ikc: () => _,
        A$I: () => _,
        YjP: () => _,
        uEf: () => _,
        ZSL: () => _,
      });
      var _ = {};
      __webpack_require__._(_),
        __webpack_require__._(_, {
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
      var _ = {};
      __webpack_require__._(_),
        __webpack_require__._(_, {
          bigint: () => _,
          boolean: () => _,
          date: () => _,
          number: () => _,
          string: () => _,
        });
      var _ = __webpack_require__("chunkid");
      const _ = /^[cC][0-9a-z]{6,}$/,
        _ = /^[0-9a-z]+$/,
        _ = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
        _ = /^[0-9a-vA-V]{20}$/,
        _ = /^[A-Za-z0-9]{27}$/,
        _ = /^[a-zA-Z0-9_-]{21}$/,
        _ =
          /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
        _ =
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
        _ = (_) =>
          _
            ? new RegExp(
                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${_}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        _ =
          /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
        _ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
      function _() {
        return new RegExp(_, "u");
      }
      const _ =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        _ =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        _ =
          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
        _ =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        _ =
          /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
        _ = /^[A-Za-z0-9_-]*$/,
        _ = /^https?$/,
        _ = /^\+[1-9]\d{6,14}$/,
        _ =
          "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        _ = new RegExp(`^${_}$`);
      function _(_) {
        const _ = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof _.precision
          ? -1 === _.precision
            ? `${_}`
            : 0 === _.precision
              ? `${_}:[0-5]\\d`
              : `${_}:[0-5]\\d\\.\\d{${_.precision}}`
          : `${_}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      }
      function _(_) {
        return new RegExp(`^${_(_)}$`);
      }
      function _(_) {
        const _ = _({
            precision: _.precision,
          }),
          _ = ["Z"];
        _.local && __webpack_require__.push(""),
          _.offset &&
            __webpack_require__.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        const _ = `${_}(?:${__webpack_require__.join("|")})`;
        return new RegExp(`^${_}T(?:${_})$`);
      }
      const _ = (_) =>
          new RegExp(
            `^${_ ? `[\\s\\S]{${_?.minimum ?? 0},${_?.maximum ?? ""}}` : "[\\s\\S]*"}$`,
          ),
        _ = /^-?\d+n?$/,
        _ = /^-?\d+$/,
        _ = /^-?\d+(?:\.\d+)?$/,
        _ = /^(?:true|false)$/i,
        _ = /^[^A-Z]*$/,
        _ = /^[^a-z]*$/;
      var _ = __webpack_require__("chunkid");
      const _ = _._("$ZodCheck", (_, _) => {
          var _;
          _._zod ?? (_._zod = {}),
            (_._zod.def = _),
            (_ = _._zod).onattach ?? (_.onattach = []);
        }),
        _ = {
          number: "number",
          bigint: "bigint",
          object: "date",
        },
        _ = _._("$ZodCheckLessThan", (_, _) => {
          _.init(_, _);
          const _ = _[typeof _.value];
          _._zod.onattach.push((_) => {
            const _ = _._zod.bag,
              _ =
                (_.inclusive ? _.maximum : _.exclusiveMaximum) ??
                Number.POSITIVE_INFINITY;
            _.value < _ &&
              (_.inclusive
                ? (_.maximum = _.value)
                : (_.exclusiveMaximum = _.value));
          }),
            (_._zod.check = (_) => {
              (_.inclusive ? _.value <= _.value : _.value < _.value) ||
                _.issues.push({
                  origin: _,
                  code: "too_big",
                  maximum:
                    "object" == typeof _.value ? _.value.getTime() : _.value,
                  input: _.value,
                  inclusive: _.inclusive,
                  inst: _,
                  continue: !_.abort,
                });
            });
        }),
        _ = _._("$ZodCheckGreaterThan", (_, _) => {
          _.init(_, _);
          const _ = _[typeof _.value];
          _._zod.onattach.push((_) => {
            const _ = _._zod.bag,
              _ =
                (_.inclusive ? _.minimum : _.exclusiveMinimum) ??
                Number.NEGATIVE_INFINITY;
            _.value > _ &&
              (_.inclusive
                ? (_.minimum = _.value)
                : (_.exclusiveMinimum = _.value));
          }),
            (_._zod.check = (_) => {
              (_.inclusive ? _.value >= _.value : _.value > _.value) ||
                _.issues.push({
                  origin: _,
                  code: "too_small",
                  minimum:
                    "object" == typeof _.value ? _.value.getTime() : _.value,
                  input: _.value,
                  inclusive: _.inclusive,
                  inst: _,
                  continue: !_.abort,
                });
            });
        }),
        _ = _._("$ZodCheckMultipleOf", (_, _) => {
          _.init(_, _),
            _._zod.onattach.push((_) => {
              var _;
              (_ = _._zod.bag).multipleOf ?? (_.multipleOf = _.value);
            }),
            (_._zod.check = (_) => {
              if (typeof _.value != typeof _.value)
                throw new Error(
                  "Cannot mix number and bigint in multiple_of check.",
                );
              ("bigint" == typeof _.value
                ? _.value % _.value === BigInt(0)
                : 0 === _._(_.value, _.value)) ||
                _.issues.push({
                  origin: typeof _.value,
                  code: "not_multiple_of",
                  divisor: _.value,
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
            });
        }),
        _ = _._("$ZodCheckNumberFormat", (_, _) => {
          _.init(_, _), (_.format = _.format || "float64");
          const _ = _.format?.includes("int"),
            _ = _ ? "int" : "number",
            [_, _] = _._[_.format];
          _._zod.onattach.push((_) => {
            const _ = _._zod.bag;
            (_.format = _.format),
              (_.minimum = _),
              (_.maximum = _),
              _ && (_.pattern = _);
          }),
            (_._zod.check = (_) => {
              const _ = _.value;
              if (_) {
                if (!Number.isInteger(_))
                  return void _.issues.push({
                    expected: _,
                    format: _.format,
                    code: "invalid_type",
                    continue: !1,
                    input: _,
                    inst: _,
                  });
                if (!Number.isSafeInteger(_))
                  return void (_ > 0
                    ? _.issues.push({
                        input: _,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: _,
                        origin: _,
                        inclusive: !0,
                        continue: !_.abort,
                      })
                    : _.issues.push({
                        input: _,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: _,
                        origin: _,
                        inclusive: !0,
                        continue: !_.abort,
                      }));
              }
              _ < _ &&
                _.issues.push({
                  origin: "number",
                  input: _,
                  code: "too_small",
                  minimum: _,
                  inclusive: !0,
                  inst: _,
                  continue: !_.abort,
                }),
                _ > _ &&
                  _.issues.push({
                    origin: "number",
                    input: _,
                    code: "too_big",
                    maximum: _,
                    inclusive: !0,
                    inst: _,
                    continue: !_.abort,
                  });
            });
        }),
        _ = _._("$ZodCheckMaxLength", (_, _) => {
          var _;
          _.init(_, _),
            (_ = _._zod.def).when ??
              (_.when = (_) => {
                const _ = _.value;
                return !_._(_) && void 0 !== _.length;
              }),
            _._zod.onattach.push((_) => {
              const _ = _._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
              _.maximum < _ && (_._zod.bag.maximum = _.maximum);
            }),
            (_._zod.check = (_) => {
              const _ = _.value;
              if (_.length <= _.maximum) return;
              const _ = _._(_);
              _.issues.push({
                origin: _,
                code: "too_big",
                maximum: _.maximum,
                inclusive: !0,
                input: _,
                inst: _,
                continue: !_.abort,
              });
            });
        }),
        _ = _._("$ZodCheckMinLength", (_, _) => {
          var _;
          _.init(_, _),
            (_ = _._zod.def).when ??
              (_.when = (_) => {
                const _ = _.value;
                return !_._(_) && void 0 !== _.length;
              }),
            _._zod.onattach.push((_) => {
              const _ = _._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
              _.minimum > _ && (_._zod.bag.minimum = _.minimum);
            }),
            (_._zod.check = (_) => {
              const _ = _.value;
              if (_.length >= _.minimum) return;
              const _ = _._(_);
              _.issues.push({
                origin: _,
                code: "too_small",
                minimum: _.minimum,
                inclusive: !0,
                input: _,
                inst: _,
                continue: !_.abort,
              });
            });
        }),
        _ = _._("$ZodCheckLengthEquals", (_, _) => {
          var _;
          _.init(_, _),
            (_ = _._zod.def).when ??
              (_.when = (_) => {
                const _ = _.value;
                return !_._(_) && void 0 !== _.length;
              }),
            _._zod.onattach.push((_) => {
              const _ = _._zod.bag;
              (_.minimum = _.length),
                (_.maximum = _.length),
                (_.length = _.length);
            }),
            (_._zod.check = (_) => {
              const _ = _.value,
                _ = _.length;
              if (_ === _.length) return;
              const _ = _._(_),
                _ = _ > _.length;
              _.issues.push({
                origin: _,
                ...(_
                  ? {
                      code: "too_big",
                      maximum: _.length,
                    }
                  : {
                      code: "too_small",
                      minimum: _.length,
                    }),
                inclusive: !0,
                exact: !0,
                input: _.value,
                inst: _,
                continue: !_.abort,
              });
            });
        }),
        _ = _._("$ZodCheckStringFormat", (_, _) => {
          var _, _;
          _.init(_, _),
            _._zod.onattach.push((_) => {
              const _ = _._zod.bag;
              (_.format = _.format),
                _.pattern &&
                  (_.patterns ?? (_.patterns = new Set()),
                  _.patterns.add(_.pattern));
            }),
            _.pattern
              ? ((_ = _._zod).check ??
                (_.check = (_) => {
                  (_.pattern.lastIndex = 0),
                    _.pattern.test(_.value) ||
                      _.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: _.format,
                        input: _.value,
                        ...(_.pattern
                          ? {
                              pattern: _.pattern.toString(),
                            }
                          : {}),
                        inst: _,
                        continue: !_.abort,
                      });
                }))
              : ((_ = _._zod).check ?? (_.check = () => {}));
        }),
        _ = _._("$ZodCheckRegex", (_, _) => {
          _.init(_, _),
            (_._zod.check = (_) => {
              (_.pattern.lastIndex = 0),
                _.pattern.test(_.value) ||
                  _.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "regex",
                    input: _.value,
                    pattern: _.pattern.toString(),
                    inst: _,
                    continue: !_.abort,
                  });
            });
        }),
        _ = _._("$ZodCheckLowerCase", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodCheckUpperCase", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodCheckIncludes", (_, _) => {
          _.init(_, _);
          const _ = _._(_.includes),
            _ = new RegExp(
              "number" == typeof _.position ? `^.{${_.position}}${_}` : _,
            );
          (_.pattern = _),
            _._zod.onattach.push((_) => {
              const _ = _._zod.bag;
              _.patterns ?? (_.patterns = new Set()), _.patterns.add(_);
            }),
            (_._zod.check = (_) => {
              _.value.includes(_.includes, _.position) ||
                _.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "includes",
                  includes: _.includes,
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
            });
        }),
        _ = _._("$ZodCheckStartsWith", (_, _) => {
          _.init(_, _);
          const _ = new RegExp(`^${_._(_.prefix)}.*`);
          _.pattern ?? (_.pattern = _),
            _._zod.onattach.push((_) => {
              const _ = _._zod.bag;
              _.patterns ?? (_.patterns = new Set()), _.patterns.add(_);
            }),
            (_._zod.check = (_) => {
              _.value.startsWith(_.prefix) ||
                _.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "starts_with",
                  prefix: _.prefix,
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
            });
        }),
        _ = _._("$ZodCheckEndsWith", (_, _) => {
          _.init(_, _);
          const _ = new RegExp(`.*${_._(_.suffix)}$`);
          _.pattern ?? (_.pattern = _),
            _._zod.onattach.push((_) => {
              const _ = _._zod.bag;
              _.patterns ?? (_.patterns = new Set()), _.patterns.add(_);
            }),
            (_._zod.check = (_) => {
              _.value.endsWith(_.suffix) ||
                _.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "ends_with",
                  suffix: _.suffix,
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
            });
        });
      const _ = _._("$ZodCheckOverwrite", (_, _) => {
        _.init(_, _),
          (_._zod.check = (_) => {
            _.value = _._(_.value);
          });
      });
      class _ {
        constructor(_ = []) {
          (this.content = []), (this.indent = 0), this && (this.args = _);
        }
        indented(_) {
          (this.indent += 1), _(this), (this.indent -= 1);
        }
        write(_) {
          if ("function" == typeof _)
            return (
              _(this, {
                execution: "sync",
              }),
              void _(this, {
                execution: "async",
              })
            );
          const _ = _.split("\n").filter((_) => _),
            _ = Math.min(..._.map((_) => _.length - _.trimStart().length)),
            _ = _.map((_) => _.slice(_)).map(
              (_) => " ".repeat(2 * this.indent) + _,
            );
          for (const _ of _) this.content.push(_);
        }
        compile() {
          const _ = Function,
            _ = this?.args;
          return new _(
            ..._,
            [...(this?.content ?? [""]).map((_) => `  ${_}`)].join("\n"),
          );
        }
      }
      const _ = (_, _) => {
          (_.name = "$ZodError"),
            Object.defineProperty(_, "_zod", {
              value: _._zod,
              enumerable: !1,
            }),
            Object.defineProperty(_, "issues", {
              value: _,
              enumerable: !1,
            }),
            (_.message = JSON.stringify(_, _._, 2)),
            Object.defineProperty(_, "toString", {
              value: () => _.message,
              enumerable: !1,
            });
        },
        _ = (0, _._)("$ZodError", _),
        _ = (0, _._)("$ZodError", _, {
          Parent: Error,
        });
      const _ = (_) => (_, _, _, _) => {
          const _ = _
              ? {
                  ..._,
                  async: !1,
                }
              : {
                  async: !1,
                },
            _ = _._zod.run(
              {
                value: _,
                issues: [],
              },
              _,
            );
          if (_ instanceof Promise) throw new _._();
          if (_.issues.length) {
            const _ = new (_?.Err ?? _)(_.issues.map((_) => _._(_, _, _._())));
            throw (_._(_, _?.callee), _);
          }
          return _.value;
        },
        _ = (_) => async (_, _, _, _) => {
          const _ = _
            ? {
                ..._,
                async: !0,
              }
            : {
                async: !0,
              };
          let _ = _._zod.run(
            {
              value: _,
              issues: [],
            },
            _,
          );
          if ((_ instanceof Promise && (_ = await _), _.issues.length)) {
            const _ = new (_?.Err ?? _)(_.issues.map((_) => _._(_, _, _._())));
            throw (_._(_, _?.callee), _);
          }
          return _.value;
        },
        _ = (_) => (_, _, _) => {
          const _ = _
              ? {
                  ..._,
                  async: !1,
                }
              : {
                  async: !1,
                },
            _ = _._zod.run(
              {
                value: _,
                issues: [],
              },
              _,
            );
          if (_ instanceof Promise) throw new _._();
          return _.issues.length
            ? {
                success: !1,
                error: new (_ ?? _)(_.issues.map((_) => _._(_, _, _._()))),
              }
            : {
                success: !0,
                data: _.value,
              };
        },
        _ = _(_),
        _ = (_) => async (_, _, _) => {
          const _ = _
            ? {
                ..._,
                async: !0,
              }
            : {
                async: !0,
              };
          let _ = _._zod.run(
            {
              value: _,
              issues: [],
            },
            _,
          );
          return (
            _ instanceof Promise && (_ = await _),
            _.issues.length
              ? {
                  success: !1,
                  error: new _(_.issues.map((_) => _._(_, _, _._()))),
                }
              : {
                  success: !0,
                  data: _.value,
                }
          );
        },
        _ = _(_),
        _ = (_) => (_, _, _) => {
          const _ = _
            ? {
                ..._,
                direction: "backward",
              }
            : {
                direction: "backward",
              };
          return _(_)(_, _, _);
        },
        _ = (_) => (_, _, _) => _(_)(_, _, _),
        _ = (_) => async (_, _, _) => {
          const _ = _
            ? {
                ..._,
                direction: "backward",
              }
            : {
                direction: "backward",
              };
          return _(_)(_, _, _);
        },
        _ = (_) => async (_, _, _) => _(_)(_, _, _),
        _ = (_) => (_, _, _) => {
          const _ = _
            ? {
                ..._,
                direction: "backward",
              }
            : {
                direction: "backward",
              };
          return _(_)(_, _, _);
        },
        _ = (_) => (_, _, _) => _(_)(_, _, _),
        _ = (_) => async (_, _, _) => {
          const _ = _
            ? {
                ..._,
                direction: "backward",
              }
            : {
                direction: "backward",
              };
          return _(_)(_, _, _);
        },
        _ = (_) => async (_, _, _) => _(_)(_, _, _),
        _ = {
          major: 4,
          minor: 4,
          patch: 3,
        },
        _ = _._("$ZodType", (_, _) => {
          var _;
          _ ?? (_ = {}),
            (_._zod.def = _),
            (_._zod.bag = _._zod.bag || {}),
            (_._zod.version = _);
          const _ = [...(_._zod.def.checks ?? [])];
          _._zod.traits.has("$ZodCheck") && _.unshift(_);
          for (const _ of _)
            for (const _ of _._zod.onattach) __webpack_require__(_);
          if (0 === _.length)
            (_ = _._zod).deferred ?? (_.deferred = []),
              _._zod.deferred?.push(() => {
                _._zod.run = _._zod.parse;
              });
          else {
            const _ = (_, _, _) => {
                let _,
                  _ = _._(_);
                for (const _ of _) {
                  if (_._zod.def.when) {
                    if (_._(_)) continue;
                    if (!_._zod.def.when(_)) continue;
                  } else if (_) continue;
                  const _ = _.issues.length,
                    _ = _._zod.check(_);
                  if (_ instanceof Promise && !1 === _?.async) throw new _._();
                  if (_ || _ instanceof Promise)
                    _ = (_ ?? Promise.resolve()).then(async () => {
                      await _;
                      _.issues.length !== _ && (_ || (_ = _._(_, _)));
                    });
                  else {
                    if (_.issues.length === _) continue;
                    _ || (_ = _._(_, _));
                  }
                }
                return _ ? _.then(() => _) : _;
              },
              _ = (_, _, _) => {
                if (_._(_)) return (_.aborted = !0), _;
                const _ = _(_, _, _);
                if (_ instanceof Promise) {
                  if (!1 === _.async) throw new _._();
                  return _.then((_) => _._zod.parse(_, _));
                }
                return _._zod.parse(_, _);
              };
            _._zod.run = (_, _) => {
              if (_.skipChecks) return _._zod.parse(_, _);
              if ("backward" === _.direction) {
                const _ = _._zod.parse(
                  {
                    value: _.value,
                    issues: [],
                  },
                  {
                    ..._,
                    skipChecks: !0,
                  },
                );
                return _ instanceof Promise
                  ? _.then((_) => __webpack_require__(_, _, _))
                  : __webpack_require__(_, _, _);
              }
              const _ = _._zod.parse(_, _);
              if (_ instanceof Promise) {
                if (!1 === _.async) throw new _._();
                return _.then((_) => _(_, _, _));
              }
              return _(_, _, _);
            };
          }
          _._(_, "~standard", () => ({
            validate: (_) => {
              try {
                const _ = _(_, _);
                return _.success
                  ? {
                      value: _.data,
                    }
                  : {
                      issues: _.error?.issues,
                    };
              } catch (_) {
                return _(_, _).then((_) =>
                  _.success
                    ? {
                        value: _.data,
                      }
                    : {
                        issues: _.error?.issues,
                      },
                );
              }
            },
            vendor: "zod",
            version: 1,
          }));
        }),
        _ = _._("$ZodString", (_, _) => {
          _.init(_, _),
            (_._zod.pattern =
              [...(_?._zod.bag?.patterns ?? [])].pop() ?? _(_._zod.bag)),
            (_._zod.parse = (_, _) => {
              if (_.coerce)
                try {
                  _.value = String(_.value);
                } catch (_) {}
              return (
                "string" == typeof _.value ||
                  _.issues.push({
                    expected: "string",
                    code: "invalid_type",
                    input: _.value,
                    inst: _,
                  }),
                _
              );
            });
        }),
        _ = _._("$ZodStringFormat", (_, _) => {
          _.init(_, _), _.init(_, _);
        }),
        _ = _._("$ZodGUID", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodUUID", (_, _) => {
          if (_.version) {
            const _ = {
              _: 1,
              _: 2,
              _: 3,
              _: 4,
              _: 5,
              _: 6,
              _: 7,
              _: 8,
            }[_.version];
            if (void 0 === _)
              throw new Error(`Invalid UUID version: "${_.version}"`);
            _.pattern ?? (_.pattern = _(_));
          } else _.pattern ?? (_.pattern = _());
          _.init(_, _);
        }),
        _ = _._("$ZodEmail", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodURL", (_, _) => {
          _.init(_, _),
            (_._zod.check = (_) => {
              try {
                const _ = _.value.trim();
                if (
                  !_.normalize &&
                  _.protocol?.source === _.source &&
                  !/^https?:\/\//i.test(_)
                )
                  return void _.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: _.value,
                    inst: _,
                    continue: !_.abort,
                  });
                const _ = new URL(_);
                return (
                  _.hostname &&
                    ((_.hostname.lastIndex = 0),
                    _.hostname.test(_.hostname) ||
                      _.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid hostname",
                        pattern: _.hostname.source,
                        input: _.value,
                        inst: _,
                        continue: !_.abort,
                      })),
                  _.protocol &&
                    ((_.protocol.lastIndex = 0),
                    _.protocol.test(
                      _.protocol.endsWith(":")
                        ? _.protocol.slice(0, -1)
                        : _.protocol,
                    ) ||
                      _.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: _.protocol.source,
                        input: _.value,
                        inst: _,
                        continue: !_.abort,
                      })),
                  void (_.normalize ? (_.value = _.href) : (_.value = _))
                );
              } catch (_) {
                _.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
              }
            });
        }),
        _ = _._("$ZodEmoji", (_, _) => {
          _.pattern ?? (_.pattern = _()), _.init(_, _);
        }),
        _ = _._("$ZodNanoID", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodCUID", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodCUID2", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodULID", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodXID", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodKSUID", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodISODateTime", (_, _) => {
          _.pattern ?? (_.pattern = _(_)), _.init(_, _);
        }),
        _ = _._("$ZodISODate", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodISOTime", (_, _) => {
          _.pattern ?? (_.pattern = _(_)), _.init(_, _);
        }),
        _ = _._("$ZodISODuration", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodIPv4", (_, _) => {
          _.pattern ?? (_.pattern = _),
            _.init(_, _),
            (_._zod.bag.format = "ipv4");
        }),
        _ = _._("$ZodIPv6", (_, _) => {
          _.pattern ?? (_.pattern = _),
            _.init(_, _),
            (_._zod.bag.format = "ipv6"),
            (_._zod.check = (_) => {
              try {
                new URL(`http://[${_.value}]`);
              } catch {
                _.issues.push({
                  code: "invalid_format",
                  format: "ipv6",
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
              }
            });
        }),
        _ = _._("$ZodCIDRv4", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        }),
        _ = _._("$ZodCIDRv6", (_, _) => {
          _.pattern ?? (_.pattern = _),
            _.init(_, _),
            (_._zod.check = (_) => {
              const _ = _.value.split("/");
              try {
                if (2 !== _.length) throw new Error();
                const [_, _] = _;
                if (!_) throw new Error();
                const _ = Number(_);
                if (`${_}` !== _) throw new Error();
                if (_ < 0 || _ > 128) throw new Error();
                new URL(`http://[${_}]`);
              } catch {
                _.issues.push({
                  code: "invalid_format",
                  format: "cidrv6",
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
              }
            });
        });
      function _(_) {
        if ("" === _) return !0;
        if (/\s/.test(_)) return !1;
        if (_.length % 4 != 0) return !1;
        try {
          return atob(_), !0;
        } catch {
          return !1;
        }
      }
      const _ = _._("$ZodBase64", (_, _) => {
        _.pattern ?? (_.pattern = _),
          _.init(_, _),
          (_._zod.bag.contentEncoding = "base64"),
          (_._zod.check = (_) => {
            _(_.value) ||
              _.issues.push({
                code: "invalid_format",
                format: "base64",
                input: _.value,
                inst: _,
                continue: !_.abort,
              });
          });
      });
      const _ = _._("$ZodBase64URL", (_, _) => {
          _.pattern ?? (_.pattern = _),
            _.init(_, _),
            (_._zod.bag.contentEncoding = "base64url"),
            (_._zod.check = (_) => {
              (function (_) {
                if (!_.test(_)) return !1;
                const _ = _.replace(/[-_]/g, (_) => ("-" === _ ? "+" : "/"));
                return _(_.padEnd(4 * Math.ceil(_.length / 4), "="));
              })(_.value) ||
                _.issues.push({
                  code: "invalid_format",
                  format: "base64url",
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
            });
        }),
        _ = _._("$ZodE164", (_, _) => {
          _.pattern ?? (_.pattern = _), _.init(_, _);
        });
      const _ = _._("$ZodJWT", (_, _) => {
          _.init(_, _),
            (_._zod.check = (_) => {
              (function (_, _ = null) {
                try {
                  const _ = _.split(".");
                  if (3 !== _.length) return !1;
                  const [_] = _;
                  if (!_) return !1;
                  const _ = JSON.parse(atob(_));
                  return !(
                    ("typ" in _ && "JWT" !== _?.typ) ||
                    !_.alg ||
                    (_ && (!("alg" in _) || _.alg !== _))
                  );
                } catch {
                  return !1;
                }
              })(_.value, _.alg) ||
                _.issues.push({
                  code: "invalid_format",
                  format: "jwt",
                  input: _.value,
                  inst: _,
                  continue: !_.abort,
                });
            });
        }),
        _ = _._("$ZodNumber", (_, _) => {
          _.init(_, _),
            (_._zod.pattern = _._zod.bag.pattern ?? _),
            (_._zod.parse = (_, _) => {
              if (_.coerce)
                try {
                  _.value = Number(_.value);
                } catch (_) {}
              const _ = _.value;
              if (
                "number" == typeof _ &&
                !Number.isNaN(_) &&
                Number.isFinite(_)
              )
                return _;
              const _ =
                "number" == typeof _
                  ? Number.isNaN(_)
                    ? "NaN"
                    : Number.isFinite(_)
                      ? void 0
                      : "Infinity"
                  : void 0;
              return (
                _.issues.push({
                  expected: "number",
                  code: "invalid_type",
                  input: _,
                  inst: _,
                  ...(_
                    ? {
                        received: _,
                      }
                    : {}),
                }),
                _
              );
            });
        }),
        _ = _._("$ZodNumberFormat", (_, _) => {
          _.init(_, _), _.init(_, _);
        }),
        _ = _._("$ZodBoolean", (_, _) => {
          _.init(_, _),
            (_._zod.pattern = _),
            (_._zod.parse = (_, _) => {
              if (_.coerce)
                try {
                  _.value = Boolean(_.value);
                } catch (_) {}
              const _ = _.value;
              return (
                "boolean" == typeof _ ||
                  _.issues.push({
                    expected: "boolean",
                    code: "invalid_type",
                    input: _,
                    inst: _,
                  }),
                _
              );
            });
        }),
        _ = _._("$ZodBigInt", (_, _) => {
          _.init(_, _),
            (_._zod.pattern = _),
            (_._zod.parse = (_, _) => {
              if (_.coerce)
                try {
                  _.value = BigInt(_.value);
                } catch (_) {}
              return (
                "bigint" == typeof _.value ||
                  _.issues.push({
                    expected: "bigint",
                    code: "invalid_type",
                    input: _.value,
                    inst: _,
                  }),
                _
              );
            });
        }),
        _ = _._("$ZodUnknown", (_, _) => {
          _.init(_, _), (_._zod.parse = (_) => _);
        }),
        _ = _._("$ZodNever", (_, _) => {
          _.init(_, _),
            (_._zod.parse = (_, _) => (
              _.issues.push({
                expected: "never",
                code: "invalid_type",
                input: _.value,
                inst: _,
              }),
              _
            ));
        }),
        _ = _._("$ZodDate", (_, _) => {
          _.init(_, _),
            (_._zod.parse = (_, _) => {
              if (_.coerce)
                try {
                  _.value = new Date(_.value);
                } catch (_) {}
              const _ = _.value,
                _ = _ instanceof Date;
              return (
                (_ && !Number.isNaN(_.getTime())) ||
                  _.issues.push({
                    expected: "date",
                    code: "invalid_type",
                    input: _,
                    ...(_
                      ? {
                          received: "Invalid Date",
                        }
                      : {}),
                    inst: _,
                  }),
                _
              );
            });
        });
      function _(_, _, _) {
        _.issues.length && _.issues.push(..._._(_, _.issues)),
          (_.value[_] = _.value);
      }
      const _ = _._("$ZodArray", (_, _) => {
        _.init(_, _),
          (_._zod.parse = (_, _) => {
            const _ = _.value;
            if (!Array.isArray(_))
              return (
                _.issues.push({
                  expected: "array",
                  code: "invalid_type",
                  input: _,
                  inst: _,
                }),
                _
              );
            _.value = Array(_.length);
            const _ = [];
            for (let _ = 0; _ < _.length; _++) {
              const _ = _[_],
                _ = _.element._zod.run(
                  {
                    value: _,
                    issues: [],
                  },
                  _,
                );
              _ instanceof Promise
                ? _.push(_.then((_) => _(_, _, _)))
                : _(_, _, _);
            }
            return _.length ? Promise.all(_).then(() => _) : _;
          });
      });
      function _(_, _, _, _, _, _) {
        const _ = _ in _;
        if (_.issues.length) {
          if (_ && _ && !_) return;
          _.issues.push(..._._(_, _.issues));
        }
        _ || _
          ? void 0 === _.value
            ? _ && (_.value[_] = void 0)
            : (_.value[_] = _.value)
          : _.issues.length ||
            _.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: void 0,
              path: [_],
            });
      }
      function _(_) {
        const _ = Object.keys(_.shape);
        for (const _ of _)
          if (!_.shape?.[_]?._zod?.traits?.has("$ZodType"))
            throw new Error(
              `Invalid element at key "${_}": expected a Zod schema`,
            );
        const _ = _._(_.shape);
        return {
          ..._,
          keys: _,
          keySet: new Set(_),
          numKeys: _.length,
          optionalKeys: new Set(_),
        };
      }
      function _(_, _, _, _, _, _) {
        const _ = [],
          _ = _.keySet,
          _ = _.catchall._zod,
          _ = _.def.type,
          _ = "optional" === _.optin,
          _ = "optional" === _.optout;
        for (const _ in _) {
          if ("__proto__" === _) continue;
          if (_.has(_)) continue;
          if ("never" === _) {
            _.push(_);
            continue;
          }
          const _ = _.run(
            {
              value: _[_],
              issues: [],
            },
            _,
          );
          _ instanceof Promise
            ? _.push(_.then((_) => _(_, _, _, _, _, _)))
            : _(_, _, _, _, _, _);
        }
        return (
          _.length &&
            _.issues.push({
              code: "unrecognized_keys",
              keys: _,
              input: _,
              inst: _,
            }),
          _.length ? Promise.all(_).then(() => _) : _
        );
      }
      const _ = _._("$ZodObject", (_, _) => {
          _.init(_, _);
          const _ = Object.getOwnPropertyDescriptor(_, "shape");
          if (!_?.get) {
            const _ = _.shape;
            Object.defineProperty(_, "shape", {
              get: () => {
                const _ = {
                  ..._,
                };
                return (
                  Object.defineProperty(_, "shape", {
                    value: _,
                  }),
                  _
                );
              },
            });
          }
          const _ = _._(() => _(_));
          _._(_._zod, "propValues", () => {
            const _ = _.shape,
              _ = {};
            for (const _ in _) {
              const _ = _[_]._zod;
              if (_.values) {
                _[_] ?? (_[_] = new Set());
                for (const _ of _.values) _[_].add(_);
              }
            }
            return _;
          });
          const _ = _._,
            _ = _.catchall;
          let _;
          _._zod.parse = (_, _) => {
            _ ?? (_ = _.value);
            const _ = _.value;
            if (!_(_))
              return (
                _.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: _,
                  inst: _,
                }),
                _
              );
            _.value = {};
            const _ = [],
              _ = _.shape;
            for (const _ of _.keys) {
              const _ = _[_],
                _ = "optional" === _._zod.optin,
                _ = "optional" === _._zod.optout,
                _ = _._zod.run(
                  {
                    value: _[_],
                    issues: [],
                  },
                  _,
                );
              _ instanceof Promise
                ? _.push(_.then((_) => _(_, _, _, _, _, _)))
                : _(_, _, _, _, _, _);
            }
            return _
              ? _(_, _, _, _, _.value, _)
              : _.length
                ? Promise.all(_).then(() => _)
                : _;
          };
        }),
        _ = _._("$ZodObjectJIT", (_, _) => {
          _.init(_, _);
          const _ = _._zod.parse,
            _ = _._(() => _(_));
          let _;
          const _ = _._,
            _ = !_._.jitless,
            _ = _._,
            _ = _ && _.value,
            _ = _.catchall;
          let _;
          _._zod.parse = (_, _) => {
            _ ?? (_ = _.value);
            const _ = _.value;
            return _(_)
              ? _ && _ && !1 === _?.async && !0 !== _.jitless
                ? (_ ||
                    (_ = ((_) => {
                      const _ = new _(["shape", "payload", "ctx"]),
                        _ = _.value,
                        _ = (_) => {
                          const _ = _._(_);
                          return `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`;
                        };
                      _.write("const input = payload.value;");
                      const _ = Object.create(null);
                      let _ = 0;
                      for (const _ of _.keys) _[_] = "key_" + _++;
                      _.write("const newResult = {};");
                      for (const _ of _.keys) {
                        const _ = _[_],
                          _ = _._(_),
                          _ = _[_],
                          _ = "optional" === _?._zod?.optin,
                          _ = "optional" === _?._zod?.optout;
                        _.write(`const ${_} = ${_(_)};`),
                          _ && _
                            ? _.write(
                                `\n        if (${_}.issues.length) {\n          if (${_} in input) {\n            payload.issues = payload.issues.concat(${_}.issues.map(iss => ({\n              ...iss,\n              path: iss.path ? [${_}, ...iss.path] : [${_}]\n            })));\n          }\n        }\n        \n        if (${_}.value === undefined) {\n          if (${_} in input) {\n            newResult[${_}] = undefined;\n          }\n        } else {\n          newResult[${_}] = ${_}.value;\n        }\n        \n      `,
                              )
                            : _
                              ? _.write(
                                  `\n        if (${_}.issues.length) {\n          payload.issues = payload.issues.concat(${_}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${_}, ...iss.path] : [${_}]\n          })));\n        }\n        \n        if (${_}.value === undefined) {\n          if (${_} in input) {\n            newResult[${_}] = undefined;\n          }\n        } else {\n          newResult[${_}] = ${_}.value;\n        }\n        \n      `,
                                )
                              : _.write(
                                  `\n        const ${_}_present = ${_} in input;\n        if (${_}.issues.length) {\n          payload.issues = payload.issues.concat(${_}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${_}, ...iss.path] : [${_}]\n          })));\n        }\n        if (!${_}_present && !${_}.issues.length) {\n          payload.issues.push({\n            code: "invalid_type",\n            expected: "nonoptional",\n            input: undefined,\n            path: [${_}]\n          });\n        }\n\n        if (${_}_present) {\n          if (${_}.value === undefined) {\n            newResult[${_}] = undefined;\n          } else {\n            newResult[${_}] = ${_}.value;\n          }\n        }\n\n      `,
                                );
                      }
                      _.write("payload.value = newResult;"),
                        _.write("return payload;");
                      const _ = _.compile();
                      return (_, _) => _(_, _, _);
                    })(_.shape)),
                  (_ = _(_, _)),
                  _ ? _([], _, _, _, _, _) : _)
                : __webpack_require__(_, _)
              : (_.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: _,
                  inst: _,
                }),
                _);
          };
        });
      function _(_, _, _, _) {
        for (const _ of _)
          if (0 === _.issues.length) return (_.value = _.value), _;
        const _ = _.filter((_) => !_._(_));
        return 1 === _.length
          ? ((_.value = _[0].value), _[0])
          : (_.issues.push({
              code: "invalid_union",
              input: _.value,
              inst: _,
              errors: _.map((_) => _.issues.map((_) => _._(_, _, _._()))),
            }),
            _);
      }
      const _ = _._("$ZodUnion", (_, _) => {
        _.init(_, _),
          _._(_._zod, "optin", () =>
            _.options.some((_) => "optional" === _._zod.optin)
              ? "optional"
              : void 0,
          ),
          _._(_._zod, "optout", () =>
            _.options.some((_) => "optional" === _._zod.optout)
              ? "optional"
              : void 0,
          ),
          _._(_._zod, "values", () => {
            if (_.options.every((_) => _._zod.values))
              return new Set(
                _.options.flatMap((_) => Array.from(_._zod.values)),
              );
          }),
          _._(_._zod, "pattern", () => {
            if (_.options.every((_) => _._zod.pattern)) {
              const _ = _.options.map((_) => _._zod.pattern);
              return new RegExp(`^(${_.map((_) => _._(_.source)).join("|")})$`);
            }
          });
        const _ = 1 === _.options.length ? _.options[0]._zod.run : null;
        _._zod.parse = (_, _) => {
          if (_) return __webpack_require__(_, _);
          let _ = !1;
          const _ = [];
          for (const _ of _.options) {
            const _ = _._zod.run(
              {
                value: _.value,
                issues: [],
              },
              _,
            );
            if (_ instanceof Promise) _.push(_), (_ = !0);
            else {
              if (0 === _.issues.length) return _;
              _.push(_);
            }
          }
          return _ ? Promise.all(_).then((_) => _(_, _, _, _)) : _(_, _, _, _);
        };
      });
      const _ = _._("$ZodIntersection", (_, _) => {
        _.init(_, _),
          (_._zod.parse = (_, _) => {
            const _ = _.value,
              _ = _.left._zod.run(
                {
                  value: _,
                  issues: [],
                },
                _,
              ),
              _ = _.right._zod.run(
                {
                  value: _,
                  issues: [],
                },
                _,
              );
            return _ instanceof Promise || _ instanceof Promise
              ? Promise.all([_, _]).then(([_, _]) => _(_, _, _))
              : _(_, _, _);
          });
      });
      function _(_, _) {
        if (_ === _)
          return {
            valid: !0,
            data: _,
          };
        if (_ instanceof Date && _ instanceof Date && +_ === +_)
          return {
            valid: !0,
            data: _,
          };
        if (_._(_) && _._(_)) {
          const _ = Object.keys(_),
            _ = Object.keys(_).filter(
              (_) => -1 !== __webpack_require__.indexOf(_),
            ),
            _ = {
              ..._,
              ..._,
            };
          for (const _ of _) {
            const _ = _(_[_], _[_]);
            if (!_.valid)
              return {
                valid: !1,
                mergeErrorPath: [_, ..._.mergeErrorPath],
              };
            _[_] = _.data;
          }
          return {
            valid: !0,
            data: _,
          };
        }
        if (Array.isArray(_) && Array.isArray(_)) {
          if (_.length !== _.length)
            return {
              valid: !1,
              mergeErrorPath: [],
            };
          const _ = [];
          for (let _ = 0; _ < _.length; _++) {
            const _ = _(_[_], _[_]);
            if (!_.valid)
              return {
                valid: !1,
                mergeErrorPath: [_, ..._.mergeErrorPath],
              };
            __webpack_require__.push(_.data);
          }
          return {
            valid: !0,
            data: _,
          };
        }
        return {
          valid: !1,
          mergeErrorPath: [],
        };
      }
      function _(_, _, _) {
        const _ = new Map();
        let _;
        for (const _ of _.issues)
          if ("unrecognized_keys" === _.code) {
            _ ?? (_ = _);
            for (const _ of _.keys) _.has(_) || _.set(_, {}), (_.get(_)._ = !0);
          } else _.issues.push(_);
        for (const _ of _.issues)
          if ("unrecognized_keys" === _.code)
            for (const _ of _.keys) _.has(_) || _.set(_, {}), (_.get(_)._ = !0);
          else _.issues.push(_);
        const _ = [..._].filter(([, _]) => _._ && _._).map(([_]) => _);
        if (
          (_.length &&
            _ &&
            _.issues.push({
              ..._,
              keys: _,
            }),
          _._(_))
        )
          return _;
        const _ = _(_.value, _.value);
        if (!_.valid)
          throw new Error(
            `Unmergable intersection. Error path: ${JSON.stringify(_.mergeErrorPath)}`,
          );
        return (_.value = _.data), _;
      }
      const _ = _._("$ZodEnum", (_, _) => {
          _.init(_, _);
          const _ = _._(_.entries),
            _ = new Set(_);
          (_._zod.values = _),
            (_._zod.pattern = new RegExp(
              `^(${__webpack_require__
                .filter((_) => _._.has(typeof _))
                .map((_) => ("string" == typeof _ ? _._(_) : _.toString()))
                .join("|")})$`,
            )),
            (_._zod.parse = (_, _) => {
              const _ = _.value;
              return (
                _.has(_) ||
                  _.issues.push({
                    code: "invalid_value",
                    values: _,
                    input: _,
                    inst: _,
                  }),
                _
              );
            });
        }),
        _ = _._("$ZodLiteral", (_, _) => {
          if ((_.init(_, _), 0 === _.values.length))
            throw new Error(
              "Cannot create literal schema with no valid values",
            );
          const _ = new Set(_.values);
          (_._zod.values = _),
            (_._zod.pattern = new RegExp(
              `^(${_.values.map((_) => ("string" == typeof _ ? _._(_) : _ ? _._(_.toString()) : String(_))).join("|")})$`,
            )),
            (_._zod.parse = (_, _) => {
              const _ = _.value;
              return (
                __webpack_require__.has(_) ||
                  _.issues.push({
                    code: "invalid_value",
                    values: _.values,
                    input: _,
                    inst: _,
                  }),
                _
              );
            });
        }),
        _ = _._("$ZodTransform", (_, _) => {
          _.init(_, _),
            (_._zod.optin = "optional"),
            (_._zod.parse = (_, _) => {
              if ("backward" === _.direction) throw new _._(_.constructor.name);
              const _ = _.transform(_.value, _);
              if (_.async) {
                return (_ instanceof Promise ? _ : Promise.resolve(_)).then(
                  (_) => ((_.value = _), (_.fallback = !0), _),
                );
              }
              if (_ instanceof Promise) throw new _._();
              return (_.value = _), (_.fallback = !0), _;
            });
        });
      function _(_, _) {
        return void 0 === _ && (_.issues.length || _.fallback)
          ? {
              issues: [],
              value: void 0,
            }
          : _;
      }
      const _ = _._("$ZodOptional", (_, _) => {
          _.init(_, _),
            (_._zod.optin = "optional"),
            (_._zod.optout = "optional"),
            _._(_._zod, "values", () =>
              _.innerType._zod.values
                ? new Set([..._.innerType._zod.values, void 0])
                : void 0,
            ),
            _._(_._zod, "pattern", () => {
              const _ = _.innerType._zod.pattern;
              return _ ? new RegExp(`^(${_._(_.source)})?$`) : void 0;
            }),
            (_._zod.parse = (_, _) => {
              if ("optional" === _.innerType._zod.optin) {
                const _ = _.value,
                  _ = _.innerType._zod.run(_, _);
                return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
              }
              return void 0 === _.value ? _ : _.innerType._zod.run(_, _);
            });
        }),
        _ = _._("$ZodExactOptional", (_, _) => {
          _.init(_, _),
            _._(_._zod, "values", () => _.innerType._zod.values),
            _._(_._zod, "pattern", () => _.innerType._zod.pattern),
            (_._zod.parse = (_, _) => _.innerType._zod.run(_, _));
        }),
        _ = _._("$ZodNullable", (_, _) => {
          _.init(_, _),
            _._(_._zod, "optin", () => _.innerType._zod.optin),
            _._(_._zod, "optout", () => _.innerType._zod.optout),
            _._(_._zod, "pattern", () => {
              const _ = _.innerType._zod.pattern;
              return _ ? new RegExp(`^(${_._(_.source)}|null)$`) : void 0;
            }),
            _._(_._zod, "values", () =>
              _.innerType._zod.values
                ? new Set([..._.innerType._zod.values, null])
                : void 0,
            ),
            (_._zod.parse = (_, _) =>
              null === _.value ? _ : _.innerType._zod.run(_, _));
        }),
        _ = _._("$ZodDefault", (_, _) => {
          _.init(_, _),
            (_._zod.optin = "optional"),
            _._(_._zod, "values", () => _.innerType._zod.values),
            (_._zod.parse = (_, _) => {
              if ("backward" === _.direction) return _.innerType._zod.run(_, _);
              if (void 0 === _.value) return (_.value = _.defaultValue), _;
              const _ = _.innerType._zod.run(_, _);
              return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
            });
        });
      function _(_, _) {
        return void 0 === _.value && (_.value = _.defaultValue), _;
      }
      const _ = _._("$ZodPrefault", (_, _) => {
          _.init(_, _),
            (_._zod.optin = "optional"),
            _._(_._zod, "values", () => _.innerType._zod.values),
            (_._zod.parse = (_, _) => (
              "backward" === _.direction ||
                (void 0 === _.value && (_.value = _.defaultValue)),
              _.innerType._zod.run(_, _)
            ));
        }),
        _ = _._("$ZodNonOptional", (_, _) => {
          _.init(_, _),
            _._(_._zod, "values", () => {
              const _ = _.innerType._zod.values;
              return _ ? new Set([..._].filter((_) => void 0 !== _)) : void 0;
            }),
            (_._zod.parse = (_, _) => {
              const _ = _.innerType._zod.run(_, _);
              return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
            });
        });
      function _(_, _) {
        return (
          _.issues.length ||
            void 0 !== _.value ||
            _.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: _.value,
              inst: _,
            }),
          _
        );
      }
      const _ = _._("$ZodCatch", (_, _) => {
          _.init(_, _),
            (_._zod.optin = "optional"),
            _._(_._zod, "optout", () => _.innerType._zod.optout),
            _._(_._zod, "values", () => _.innerType._zod.values),
            (_._zod.parse = (_, _) => {
              if ("backward" === _.direction) return _.innerType._zod.run(_, _);
              const _ = _.innerType._zod.run(_, _);
              return _ instanceof Promise
                ? _.then(
                    (_) => (
                      (_.value = _.value),
                      _.issues.length &&
                        ((_.value = _.catchValue({
                          ..._,
                          error: {
                            issues: _.issues.map((_) => _._(_, _, _._())),
                          },
                          input: _.value,
                        })),
                        (_.issues = []),
                        (_.fallback = !0)),
                      _
                    ),
                  )
                : ((_.value = _.value),
                  _.issues.length &&
                    ((_.value = _.catchValue({
                      ..._,
                      error: {
                        issues: _.issues.map((_) => _._(_, _, _._())),
                      },
                      input: _.value,
                    })),
                    (_.issues = []),
                    (_.fallback = !0)),
                  _);
            });
        }),
        _ = _._("$ZodPipe", (_, _) => {
          _.init(_, _),
            _._(_._zod, "values", () => _._._zod.values),
            _._(_._zod, "optin", () => _._._zod.optin),
            _._(_._zod, "optout", () => _.out._zod.optout),
            _._(_._zod, "propValues", () => _._._zod.propValues),
            (_._zod.parse = (_, _) => {
              if ("backward" === _.direction) {
                const _ = _.out._zod.run(_, _);
                return _ instanceof Promise
                  ? _.then((_) => _(_, _._, _))
                  : _(_, _._, _);
              }
              const _ = _._._zod.run(_, _);
              return _ instanceof Promise
                ? _.then((_) => _(_, _.out, _))
                : _(_, _.out, _);
            });
        });
      function _(_, _, _) {
        return _.issues.length
          ? ((_.aborted = !0), _)
          : _._zod.run(
              {
                value: _.value,
                issues: _.issues,
                fallback: _.fallback,
              },
              _,
            );
      }
      const _ = _._("$ZodCodec", (_, _) => {
        _.init(_, _),
          _._(_._zod, "values", () => _._._zod.values),
          _._(_._zod, "optin", () => _._._zod.optin),
          _._(_._zod, "optout", () => _.out._zod.optout),
          _._(_._zod, "propValues", () => _._._zod.propValues),
          (_._zod.parse = (_, _) => {
            if ("forward" === (_.direction || "forward")) {
              const _ = _._._zod.run(_, _);
              return _ instanceof Promise
                ? _.then((_) => _(_, _, _))
                : _(_, _, _);
            }
            {
              const _ = _.out._zod.run(_, _);
              return _ instanceof Promise
                ? _.then((_) => _(_, _, _))
                : _(_, _, _);
            }
          });
      });
      function _(_, _, _) {
        if (_.issues.length) return (_.aborted = !0), _;
        if ("forward" === (_.direction || "forward")) {
          const _ = _.transform(_.value, _);
          return _ instanceof Promise
            ? _.then((_) => _(_, _, _.out, _))
            : _(_, _, _.out, _);
        }
        {
          const _ = _.reverseTransform(_.value, _);
          return _ instanceof Promise
            ? _.then((_) => _(_, _, _._, _))
            : _(_, _, _._, _);
        }
      }
      function _(_, _, _, _) {
        return _.issues.length
          ? ((_.aborted = !0), _)
          : _._zod.run(
              {
                value: _,
                issues: _.issues,
              },
              _,
            );
      }
      const _ = _._("$ZodReadonly", (_, _) => {
        _.init(_, _),
          _._(_._zod, "propValues", () => _.innerType._zod.propValues),
          _._(_._zod, "values", () => _.innerType._zod.values),
          _._(_._zod, "optin", () => _.innerType?._zod?.optin),
          _._(_._zod, "optout", () => _.innerType?._zod?.optout),
          (_._zod.parse = (_, _) => {
            if ("backward" === _.direction) return _.innerType._zod.run(_, _);
            const _ = _.innerType._zod.run(_, _);
            return _ instanceof Promise ? _.then(_) : _(_);
          });
      });
      function _(_) {
        return (_.value = Object.freeze(_.value)), _;
      }
      const _ = _._("$ZodCustom", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.parse = (_, _) => _),
          (_._zod.check = (_) => {
            const _ = _.value,
              _ = _._(_);
            if (_ instanceof Promise) return _.then((_) => _(_, _, _, _));
            _(_, _, _, _);
          });
      });
      function _(_, _, _, _) {
        if (!_) {
          const _ = {
            code: "custom",
            input: _,
            inst: _,
            path: [...(_._zod.def.path ?? [])],
            continue: !_._zod.def.abort,
          };
          _._zod.def.params && (_.params = _._zod.def.params),
            _.issues.push(_._(_));
        }
      }
      var _;
      Symbol("ZodOutput"), Symbol("ZodInput");
      class _ {
        constructor() {
          (this._map = new WeakMap()), (this._idmap = new Map());
        }
        add(_, ..._) {
          const _ = _[0];
          return (
            this._map.set(_, _),
            _ && "object" == typeof _ && "id" in _ && this._idmap.set(_._, _),
            this
          );
        }
        clear() {
          return (this._map = new WeakMap()), (this._idmap = new Map()), this;
        }
        remove(_) {
          const _ = this._map.get(_);
          return (
            _ && "object" == typeof _ && "id" in _ && this._idmap.delete(_._),
            this._map.delete(_),
            this
          );
        }
        get(_) {
          const _ = _._zod.parent;
          if (_) {
            const _ = {
              ...(this.get(_) ?? {}),
            };
            delete _._;
            const _ = {
              ..._,
              ...this._map.get(_),
            };
            return Object.keys(_).length ? _ : void 0;
          }
          return this._map.get(_);
        }
        has(_) {
          return this._map.has(_);
        }
      }
      (_ = globalThis).__zod_globalRegistry ??
        (_.__zod_globalRegistry = new _());
      const _ = globalThis.__zod_globalRegistry;
      function _(_, _) {
        return new _({
          type: "string",
          format: "guid",
          check: "string_format",
          abort: !1,
          ..._._(_),
        });
      }
      function _(_, _) {
        return new _({
          check: "less_than",
          ..._._(_),
          value: _,
          inclusive: !1,
        });
      }
      function _(_, _) {
        return new _({
          check: "less_than",
          ..._._(_),
          value: _,
          inclusive: !0,
        });
      }
      function _(_, _) {
        return new _({
          check: "greater_than",
          ..._._(_),
          value: _,
          inclusive: !1,
        });
      }
      function _(_, _) {
        return new _({
          check: "greater_than",
          ..._._(_),
          value: _,
          inclusive: !0,
        });
      }
      function _(_, _) {
        return new _({
          check: "multiple_of",
          ..._._(_),
          value: _,
        });
      }
      function _(_, _) {
        return new _({
          check: "max_length",
          ..._._(_),
          maximum: _,
        });
      }
      function _(_, _) {
        return new _({
          check: "min_length",
          ..._._(_),
          minimum: _,
        });
      }
      function _(_, _) {
        return new _({
          check: "length_equals",
          ..._._(_),
          length: _,
        });
      }
      function _(_) {
        return new _({
          check: "overwrite",
          _: _,
        });
      }
      function _(_, _) {
        const _ = (function (_, _) {
          const _ = new _({
            check: "custom",
            ..._._(_),
          });
          return (_._zod.check = _), _;
        })(
          (_) => (
            (_.addIssue = (_) => {
              if ("string" == typeof _)
                _.issues.push(_._(_, _.value, _._zod.def));
              else {
                const _ = _;
                _.fatal && (_.continue = !1),
                  _.code ?? (_.code = "custom"),
                  _.input ?? (_.input = _.value),
                  _.inst ?? (_.inst = _),
                  _.continue ?? (_.continue = !_._zod.def.abort),
                  _.issues.push(_._(_));
              }
            }),
            _(_.value, _)
          ),
          _,
        );
        return _;
      }
      function _(_) {
        let _ = _?.target ?? "draft-2020-12";
        return (
          "draft-4" === _ && (_ = "draft-04"),
          "draft-7" === _ && (_ = "draft-07"),
          {
            processors: _.processors ?? {},
            metadataRegistry: _?.metadata ?? _,
            target: _,
            unrepresentable: _?.unrepresentable ?? "throw",
            override: _?.override ?? (() => {}),
            _: _?._ ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: _?.cycles ?? "ref",
            reused: _?.reused ?? "inline",
            external: _?.external ?? void 0,
          }
        );
      }
      function _(
        _,
        _,
        _ = {
          path: [],
          schemaPath: [],
        },
      ) {
        var _;
        const _ = _._zod.def,
          _ = _.seen.get(_);
        if (_) {
          _.count++;
          return _.schemaPath.includes(_) && (_.cycle = _.path), _.schema;
        }
        const _ = {
          schema: {},
          count: 1,
          cycle: void 0,
          path: _.path,
        };
        _.seen.set(_, _);
        const _ = _._zod.toJSONSchema?.();
        if (_) _.schema = _;
        else {
          const _ = {
            ..._,
            schemaPath: [..._.schemaPath, _],
            path: _.path,
          };
          if (_._zod.processJSONSchema)
            _._zod.processJSONSchema(_, _.schema, _);
          else {
            const _ = _.schema,
              _ = _.processors[_.type];
            if (!_)
              throw new Error(
                `[toJSONSchema]: Non-representable type encountered: ${_.type}`,
              );
            _(_, _, _, _);
          }
          const _ = _._zod.parent;
          _ &&
            (_.ref || (_.ref = _), _(_, _, _), (_.seen.get(_).isParent = !0));
        }
        const _ = _.metadataRegistry.get(_);
        _ && Object.assign(_.schema, _),
          "input" === _._ &&
            _(_) &&
            (delete _.schema.examples, delete _.schema.default),
          "input" === _._ &&
            "_prefault" in _.schema &&
            ((_ = _.schema).default ?? (_.default = _.schema._prefault)),
          delete _.schema._prefault;
        return _.seen.get(_).schema;
      }
      function _(_, _) {
        const _ = _.seen.get(_);
        if (!_) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const _ = new Map();
        for (const _ of _.seen.entries()) {
          const _ = _.metadataRegistry.get(_[0])?._;
          if (_) {
            const _ = _.get(_);
            if (_ && _ !== _[0])
              throw new Error(
                `Duplicate schema id "${_}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
              );
            _.set(_, _[0]);
          }
        }
        const _ = (_) => {
          if (_[1].schema.$ref) return;
          const _ = _[1],
            { ref: _, defId: _ } = ((_) => {
              const _ = "draft-2020-12" === _.target ? "$defs" : "definitions";
              if (_.external) {
                const _ = _.external.registry.get(_[0])?._,
                  _ = _.external.uri ?? ((_) => _);
                if (_)
                  return {
                    ref: _(_),
                  };
                const _ = _[1].defId ?? _[1].schema._ ?? "schema" + _.counter++;
                return (
                  (_[1].defId = _),
                  {
                    defId: _,
                    ref: `${_("__shared")}#/${_}/${_}`,
                  }
                );
              }
              if (_[1] === _)
                return {
                  ref: "#",
                };
              const _ = `#/${_}/`,
                _ = _[1].schema._ ?? "__schema" + _.counter++;
              return {
                defId: _,
                ref: _ + _,
              };
            })(_);
          (_.def = {
            ..._.schema,
          }),
            _ && (_.defId = _);
          const _ = _.schema;
          for (const _ in _) delete _[_];
          _.$ref = _;
        };
        if ("throw" === _.cycles)
          for (const _ of _.seen.entries()) {
            const _ = _[1];
            if (_.cycle)
              throw new Error(
                `Cycle detected: #/${_.cycle?.join("/")}/<root>\n\nSet the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`,
              );
          }
        for (const _ of _.seen.entries()) {
          const _ = _[1];
          if (_ === _[0]) {
            _(_);
            continue;
          }
          if (_.external) {
            const _ = _.external.registry.get(_[0])?._;
            if (_ !== _[0] && _) {
              _(_);
              continue;
            }
          }
          const _ = _.metadataRegistry.get(_[0])?._;
          _ ? _(_) : (_.cycle || (_.count > 1 && "ref" === _.reused)) && _(_);
        }
      }
      function _(_, _) {
        const _ = _.seen.get(_);
        if (!_) throw new Error("Unprocessed schema. This is a bug in Zod.");
        const _ = (_) => {
          const _ = _.seen.get(_);
          if (null === _.ref) return;
          const _ = _.def ?? _.schema,
            _ = {
              ..._,
            },
            _ = _.ref;
          if (((_.ref = null), _)) {
            _(_);
            const _ = _.seen.get(_),
              _ = _.schema;
            !_.$ref ||
            ("draft-07" !== _.target &&
              "draft-04" !== _.target &&
              "openapi-3.0" !== _.target)
              ? Object.assign(_, _)
              : ((_.allOf = _.allOf ?? []), _.allOf.push(_)),
              Object.assign(_, _);
            if (_._zod.parent === _)
              for (const _ in _)
                "$ref" !== _ && "allOf" !== _ && (_ in _ || delete _[_]);
            if (_.$ref && _.def)
              for (const _ in _)
                "$ref" !== _ &&
                  "allOf" !== _ &&
                  _ in _.def &&
                  JSON.stringify(_[_]) === JSON.stringify(_.def[_]) &&
                  delete _[_];
          }
          const _ = _._zod.parent;
          if (_ && _ !== _) {
            _(_);
            const _ = _.seen.get(_);
            if (_?.schema.$ref && ((_.$ref = _.schema.$ref), _.def))
              for (const _ in _)
                "$ref" !== _ &&
                  "allOf" !== _ &&
                  _ in _.def &&
                  JSON.stringify(_[_]) === JSON.stringify(_.def[_]) &&
                  delete _[_];
          }
          _.override({
            zodSchema: _,
            jsonSchema: _,
            path: _.path ?? [],
          });
        };
        for (const _ of [..._.seen.entries()].reverse()) _(_[0]);
        const _ = {};
        if (
          ("draft-2020-12" === _.target
            ? (_.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === _.target
              ? (_.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === _.target
                ? (_.$schema = "http://json-schema.org/draft-04/schema#")
                : _.target,
          _.external?.uri)
        ) {
          const _ = _.external.registry.get(_)?._;
          if (!_) throw new Error("Schema is missing an `id` property");
          _.$id = _.external.uri(_);
        }
        Object.assign(_, _.def ?? _.schema);
        const _ = _.metadataRegistry.get(_)?._;
        void 0 !== _ && _._ === _ && delete _._;
        const _ = _.external?.defs ?? {};
        for (const _ of _.seen.entries()) {
          const _ = _[1];
          _.def &&
            _.defId &&
            (_.def._ === _.defId && delete _.def._, (_[_.defId] = _.def));
        }
        _.external ||
          (Object.keys(_).length > 0 &&
            ("draft-2020-12" === _.target
              ? (_.$defs = _)
              : (_.definitions = _)));
        try {
          const _ = JSON.parse(JSON.stringify(_));
          return (
            Object.defineProperty(_, "~standard", {
              value: {
                ..._["~standard"],
                jsonSchema: {
                  input: _(_, "input", _.processors),
                  output: _(_, "output", _.processors),
                },
              },
              enumerable: !1,
              writable: !1,
            }),
            _
          );
        } catch (_) {
          throw new Error("Error converting schema to JSON.");
        }
      }
      function _(_, _) {
        const _ = _ ?? {
          seen: new Set(),
        };
        if (_.seen.has(_)) return !1;
        _.seen.add(_);
        const _ = _._zod.def;
        if ("transform" === _.type) return !0;
        if ("array" === _.type) return _(_.element, _);
        if ("set" === _.type) return _(_.valueType, _);
        if ("lazy" === _.type) return _(_.getter(), _);
        if (
          "promise" === _.type ||
          "optional" === _.type ||
          "nonoptional" === _.type ||
          "nullable" === _.type ||
          "readonly" === _.type ||
          "default" === _.type ||
          "prefault" === _.type
        )
          return _(_.innerType, _);
        if ("intersection" === _.type) return _(_.left, _) || _(_.right, _);
        if ("record" === _.type || "map" === _.type)
          return _(_.keyType, _) || _(_.valueType, _);
        if ("pipe" === _.type)
          return !!_._zod.traits.has("$ZodCodec") || _(_._, _) || _(_.out, _);
        if ("object" === _.type) {
          for (const _ in _.shape) if (_(_.shape[_], _)) return !0;
          return !1;
        }
        if ("union" === _.type) {
          for (const _ of _.options) if (_(_, _)) return !0;
          return !1;
        }
        if ("tuple" === _.type) {
          for (const _ of _.items) if (_(_, _)) return !0;
          return !(!_.rest || !_(_.rest, _));
        }
        return !1;
      }
      const _ =
          (_, _, _ = {}) =>
          (_) => {
            const { libraryOptions: _, target: _ } = _ ?? {},
              _ = _({
                ...(_ ?? {}),
                target: _,
                _: _,
                processors: _,
              });
            return _(_, _), _(_, _), _(_, _);
          },
        _ = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: "",
        },
        _ = (_, _, _, _) => {
          const _ = _;
          _.type = "string";
          const {
            minimum: _,
            maximum: _,
            format: _,
            patterns: _,
            contentEncoding: _,
          } = _._zod.bag;
          if (
            ("number" == typeof _ && (_.minLength = _),
            "number" == typeof _ && (_.maxLength = _),
            _ &&
              ((_.format = _[_] ?? _),
              "" === _.format && delete _.format,
              "time" === _ && delete _.format),
            _ && (_.contentEncoding = _),
            _ && _.size > 0)
          ) {
            const _ = [..._];
            1 === _.length
              ? (_.pattern = _[0].source)
              : _.length > 1 &&
                (_.allOf = [
                  ..._.map((_) => ({
                    ...("draft-07" === _.target ||
                    "draft-04" === _.target ||
                    "openapi-3.0" === _.target
                      ? {
                          type: "string",
                        }
                      : {}),
                    pattern: _.source,
                  })),
                ]);
          }
        },
        _ = (_, _, _, _) => {
          const _ = _,
            {
              minimum: _,
              maximum: _,
              format: _,
              multipleOf: _,
              exclusiveMaximum: _,
              exclusiveMinimum: _,
            } = _._zod.bag;
          "string" == typeof _ && _.includes("int")
            ? (_.type = "integer")
            : (_.type = "number");
          const _ =
              "number" == typeof _ && _ >= (_ ?? Number.NEGATIVE_INFINITY),
            _ = "number" == typeof _ && _ <= (_ ?? Number.POSITIVE_INFINITY),
            _ = "draft-04" === _.target || "openapi-3.0" === _.target;
          _
            ? _
              ? ((_.minimum = _), (_.exclusiveMinimum = !0))
              : (_.exclusiveMinimum = _)
            : "number" == typeof _ && (_.minimum = _),
            _
              ? _
                ? ((_.maximum = _), (_.exclusiveMaximum = !0))
                : (_.exclusiveMaximum = _)
              : "number" == typeof _ && (_.maximum = _),
            "number" == typeof _ && (_.multipleOf = _);
        },
        _ = (_, _, _, _) => {
          _.type = "boolean";
        },
        _ = (_, _, _, _) => {
          if ("throw" === _.unrepresentable)
            throw new Error("BigInt cannot be represented in JSON Schema");
        },
        _ = (_, _, _, _) => {
          _.not = {};
        },
        _ = (_, _, _, _) => {
          if ("throw" === _.unrepresentable)
            throw new Error("Date cannot be represented in JSON Schema");
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def,
            _ = (0, _._)(_.entries);
          _.every((_) => "number" == typeof _) && (_.type = "number"),
            _.every((_) => "string" == typeof _) && (_.type = "string"),
            (_.enum = _);
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def,
            _ = [];
          for (const _ of _.values)
            if (void 0 === _) {
              if ("throw" === _.unrepresentable)
                throw new Error(
                  "Literal `undefined` cannot be represented in JSON Schema",
                );
            } else if ("bigint" == typeof _) {
              if ("throw" === _.unrepresentable)
                throw new Error(
                  "BigInt literals cannot be represented in JSON Schema",
                );
              _.push(Number(_));
            } else _.push(_);
          if (0 === _.length);
          else if (1 === _.length) {
            const _ = _[0];
            (_.type = null === _ ? "null" : typeof _),
              "draft-04" === _.target || "openapi-3.0" === _.target
                ? (_.enum = [_])
                : (_.const = _);
          } else
            _.every((_) => "number" == typeof _) && (_.type = "number"),
              _.every((_) => "string" == typeof _) && (_.type = "string"),
              _.every((_) => "boolean" == typeof _) && (_.type = "boolean"),
              _.every((_) => null === _) && (_.type = "null"),
              (_.enum = _);
        },
        _ = (_, _, _, _) => {
          if ("throw" === _.unrepresentable)
            throw new Error(
              "Custom types cannot be represented in JSON Schema",
            );
        },
        _ = (_, _, _, _) => {
          if ("throw" === _.unrepresentable)
            throw new Error("Transforms cannot be represented in JSON Schema");
        },
        _ = (_, _, _, _) => {
          const _ = _,
            _ = _._zod.def,
            { minimum: _, maximum: _ } = _._zod.bag;
          "number" == typeof _ && (_.minItems = _),
            "number" == typeof _ && (_.maxItems = _),
            (_.type = "array"),
            (_.items = _(_.element, _, {
              ..._,
              path: [..._.path, "items"],
            }));
        },
        _ = (_, _, _, _) => {
          const _ = _,
            _ = _._zod.def;
          (_.type = "object"), (_.properties = {});
          const _ = _.shape;
          for (const _ in _)
            _.properties[_] = _(_[_], _, {
              ..._,
              path: [..._.path, "properties", _],
            });
          const _ = new Set(Object.keys(_)),
            _ = new Set(
              [..._].filter((_) => {
                const _ = _.shape[_]._zod;
                return "input" === _._
                  ? void 0 === _.optin
                  : void 0 === _.optout;
              }),
            );
          _.size > 0 && (_.required = Array.from(_)),
            "never" === _.catchall?._zod.def.type
              ? (_.additionalProperties = !1)
              : _.catchall
                ? _.catchall &&
                  (_.additionalProperties = _(_.catchall, _, {
                    ..._,
                    path: [..._.path, "additionalProperties"],
                  }))
                : "output" === _._ && (_.additionalProperties = !1);
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def,
            _ = !1 === _.inclusive,
            _ = _.options.map((_, _) =>
              _(_, _, {
                ..._,
                path: [..._.path, _ ? "oneOf" : "anyOf", _],
              }),
            );
          _ ? (_.oneOf = _) : (_.anyOf = _);
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def,
            _ = _(_.left, _, {
              ..._,
              path: [..._.path, "allOf", 0],
            }),
            _ = _(_.right, _, {
              ..._,
              path: [..._.path, "allOf", 1],
            }),
            _ = (_) => "allOf" in _ && 1 === Object.keys(_).length,
            _ = [...(_(_) ? _.allOf : [_]), ...(_(_) ? _.allOf : [_])];
          _.allOf = _;
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def,
            _ = _(_.innerType, _, _),
            _ = _.seen.get(_);
          "openapi-3.0" === _.target
            ? ((_.ref = _.innerType), (_.nullable = !0))
            : (_.anyOf = [
                _,
                {
                  type: "null",
                },
              ]);
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def;
          _(_.innerType, _, _);
          _.seen.get(_).ref = _.innerType;
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def;
          _(_.innerType, _, _);
          (_.seen.get(_).ref = _.innerType),
            (_.default = JSON.parse(JSON.stringify(_.defaultValue)));
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def;
          _(_.innerType, _, _);
          (_.seen.get(_).ref = _.innerType),
            "input" === _._ &&
              (_._prefault = JSON.parse(JSON.stringify(_.defaultValue)));
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def;
          _(_.innerType, _, _);
          let _;
          _.seen.get(_).ref = _.innerType;
          try {
            _ = _.catchValue(void 0);
          } catch {
            throw new Error(
              "Dynamic catch values are not supported in JSON Schema",
            );
          }
          _.default = _;
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def,
            _ = _._._zod.traits.has("$ZodTransform"),
            _ = "input" === _._ ? (_ ? _.out : _._) : _.out;
          _(_, _, _);
          _.seen.get(_).ref = _;
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def;
          _(_.innerType, _, _);
          (_.seen.get(_).ref = _.innerType), (_.readOnly = !0);
        },
        _ = (_, _, _, _) => {
          const _ = _._zod.def;
          _(_.innerType, _, _);
          _.seen.get(_).ref = _.innerType;
        };
      const _ = _._("ZodISODateTime", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "string",
            format: "datetime",
            check: "string_format",
            offset: !1,
            local: !1,
            precision: null,
            ..._._(_),
          });
        })(_, _);
      }
      const _ = _._("ZodISODate", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "string",
            format: "date",
            check: "string_format",
            ..._._(_),
          });
        })(_, _);
      }
      const _ = _._("ZodISOTime", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "string",
            format: "time",
            check: "string_format",
            precision: null,
            ..._._(_),
          });
        })(_, _);
      }
      const _ = _._("ZodISODuration", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "string",
            format: "duration",
            check: "string_format",
            ..._._(_),
          });
        })(_, _);
      }
      const _ = (_, _) => {
          _.init(_, _),
            (_.name = "ZodError"),
            Object.defineProperties(_, {
              format: {
                value: (_) =>
                  (function (_, _ = (_) => _.message) {
                    const _ = {
                        _errors: [],
                      },
                      _ = (_, _ = []) => {
                        for (const _ of _.issues)
                          if ("invalid_union" === _.code && _.errors.length)
                            _.errors.map((_) =>
                              _(
                                {
                                  issues: _,
                                },
                                [..._, ..._.path],
                              ),
                            );
                          else if ("invalid_key" === _.code)
                            _(
                              {
                                issues: _.issues,
                              },
                              [..._, ..._.path],
                            );
                          else if ("invalid_element" === _.code)
                            _(
                              {
                                issues: _.issues,
                              },
                              [..._, ..._.path],
                            );
                          else {
                            const _ = [..._, ..._.path];
                            if (0 === _.length) _._errors.push(_(_));
                            else {
                              let _ = _,
                                _ = 0;
                              for (; _ < _.length; ) {
                                const _ = _[_];
                                _ === _.length - 1
                                  ? ((_[_] = _[_] || {
                                      _errors: [],
                                    }),
                                    _[_]._errors.push(_(_)))
                                  : (_[_] = _[_] || {
                                      _errors: [],
                                    }),
                                  (_ = _[_]),
                                  _++;
                              }
                            }
                          }
                      };
                    return _(_), _;
                  })(_, _),
              },
              flatten: {
                value: (_) =>
                  (function (_, _ = (_) => _.message) {
                    const _ = {},
                      _ = [];
                    for (const _ of _.issues)
                      _.path.length > 0
                        ? ((_[_.path[0]] = _[_.path[0]] || []),
                          _[_.path[0]].push(_(_)))
                        : _.push(_(_));
                    return {
                      formErrors: _,
                      fieldErrors: _,
                    };
                  })(_, _),
              },
              addIssue: {
                value: (_) => {
                  _.issues.push(_),
                    (_.message = JSON.stringify(_.issues, _._, 2));
                },
              },
              addIssues: {
                value: (_) => {
                  _.issues.push(..._),
                    (_.message = JSON.stringify(_.issues, _._, 2));
                },
              },
              isEmpty: {
                get: () => 0 === _.issues.length,
              },
            });
        },
        _ = _._("ZodError", _, {
          Parent: Error,
        }),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = _(_),
        _ = new WeakMap();
      function _(_, _, _) {
        const _ = Object.getPrototypeOf(_);
        let _ = _.get(_);
        if ((_ || ((_ = new Set()), _.set(_, _)), !_.has(_))) {
          _.add(_);
          for (const _ in _) {
            const _ = _[_];
            Object.defineProperty(_, _, {
              configurable: !0,
              enumerable: !1,
              get() {
                const _ = _.bind(this);
                return (
                  Object.defineProperty(this, _, {
                    configurable: !0,
                    writable: !0,
                    enumerable: !0,
                    value: _,
                  }),
                  _
                );
              },
              set(_) {
                Object.defineProperty(this, _, {
                  configurable: !0,
                  writable: !0,
                  enumerable: !0,
                  value: _,
                });
              },
            });
          }
        }
      }
      const _ = _._(
          "ZodType",
          (_, _) => (
            _.init(_, _),
            Object.assign(_["~standard"], {
              jsonSchema: {
                input: _(_, "input"),
                output: _(_, "output"),
              },
            }),
            (_.toJSONSchema = (
              (_, _ = {}) =>
              (_) => {
                const _ = _({
                  ..._,
                  processors: _,
                });
                return _(_, _), _(_, _), _(_, _);
              }
            )(_, {})),
            (_.def = _),
            (_.type = _.type),
            Object.defineProperty(_, "_def", {
              value: _,
            }),
            (_.parse = (_, _) =>
              _(_, _, _, {
                callee: _.parse,
              })),
            (_.safeParse = (_, _) => _(_, _, _)),
            (_.parseAsync = async (_, _) =>
              _(_, _, _, {
                callee: _.parseAsync,
              })),
            (_.safeParseAsync = async (_, _) => _(_, _, _)),
            (_.spa = _.safeParseAsync),
            (_.encode = (_, _) => _(_, _, _)),
            (_.decode = (_, _) => _(_, _, _)),
            (_.encodeAsync = async (_, _) => _(_, _, _)),
            (_.decodeAsync = async (_, _) => _(_, _, _)),
            (_.safeEncode = (_, _) => _(_, _, _)),
            (_.safeDecode = (_, _) => _(_, _, _)),
            (_.safeEncodeAsync = async (_, _) => _(_, _, _)),
            (_.safeDecodeAsync = async (_, _) => _(_, _, _)),
            _(_, "ZodType", {
              check(..._) {
                const _ = this.def;
                return this.clone(
                  _._(_, {
                    checks: [
                      ...(_.checks ?? []),
                      ..._.map((_) =>
                        "function" == typeof _
                          ? {
                              _zod: {
                                check: _,
                                def: {
                                  check: "custom",
                                },
                                onattach: [],
                              },
                            }
                          : _,
                      ),
                    ],
                  }),
                  {
                    parent: !0,
                  },
                );
              },
              with(..._) {
                return this.check(..._);
              },
              clone(_, _) {
                return _._(this, _, _);
              },
              brand() {
                return this;
              },
              register(_, _) {
                return _.add(this, _), this;
              },
              refine(_, _) {
                return this.check(
                  (function (_, _ = {}) {
                    return (function (_, _, _) {
                      return new _({
                        type: "custom",
                        check: "custom",
                        _: _,
                        ..._._(_),
                      });
                    })(_, _, _);
                  })(_, _),
                );
              },
              superRefine(_, _) {
                return this.check(
                  (function (_, _) {
                    return _(_, _);
                  })(_, _),
                );
              },
              overwrite(_) {
                return this.check(_(_));
              },
              optional() {
                return _(this);
              },
              exactOptional() {
                return new _({
                  type: "optional",
                  innerType: this,
                });
              },
              nullable() {
                return _(this);
              },
              nullish() {
                return _(_(this));
              },
              nonoptional(_) {
                return (function (_, _) {
                  return new _({
                    type: "nonoptional",
                    innerType: _,
                    ..._._(_),
                  });
                })(this, _);
              },
              array() {
                return _(this);
              },
              _(_) {
                return _([this, _]);
              },
              and(_) {
                return new _({
                  type: "intersection",
                  left: this,
                  right: _,
                });
              },
              transform(_) {
                return _(this, _(_));
              },
              default(_) {
                return (
                  (_ = _),
                  new _({
                    type: "default",
                    innerType: this,
                    get defaultValue() {
                      return "function" == typeof _ ? _() : _._(_);
                    },
                  })
                );
                var _;
              },
              prefault(_) {
                return (
                  (_ = _),
                  new _({
                    type: "prefault",
                    innerType: this,
                    get defaultValue() {
                      return "function" == typeof _ ? _() : _._(_);
                    },
                  })
                );
                var _;
              },
              catch(_) {
                return new _({
                  type: "catch",
                  innerType: this,
                  catchValue: "function" == typeof (_ = _) ? _ : () => _,
                });
                var _;
              },
              pipe(_) {
                return _(this, _);
              },
              readonly() {
                return new _({
                  type: "readonly",
                  innerType: this,
                });
              },
              describe(_) {
                const _ = this.clone();
                return (
                  _.add(_, {
                    description: _,
                  }),
                  _
                );
              },
              meta(..._) {
                if (0 === _.length) return _.get(this);
                const _ = this.clone();
                return _.add(_, _[0]), _;
              },
              isOptional() {
                return this.safeParse(void 0).success;
              },
              isNullable() {
                return this.safeParse(null).success;
              },
              apply(_) {
                return _(this);
              },
            }),
            Object.defineProperty(_, "description", {
              get: () => _.get(_)?.description,
              configurable: !0,
            }),
            _
          ),
        ),
        _ = _._("_ZodString", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _));
          const _ = _._zod.bag;
          (_.format = _.format ?? null),
            (_.minLength = _.minimum ?? null),
            (_.maxLength = _.maximum ?? null),
            _(_, "_ZodString", {
              regex(..._) {
                return this.check(
                  (function (_, _) {
                    return new _({
                      check: "string_format",
                      format: "regex",
                      ..._._(_),
                      pattern: _,
                    });
                  })(..._),
                );
              },
              includes(..._) {
                return this.check(
                  (function (_, _) {
                    return new _({
                      check: "string_format",
                      format: "includes",
                      ..._._(_),
                      includes: _,
                    });
                  })(..._),
                );
              },
              startsWith(..._) {
                return this.check(
                  (function (_, _) {
                    return new _({
                      check: "string_format",
                      format: "starts_with",
                      ..._._(_),
                      prefix: _,
                    });
                  })(..._),
                );
              },
              endsWith(..._) {
                return this.check(
                  (function (_, _) {
                    return new _({
                      check: "string_format",
                      format: "ends_with",
                      ..._._(_),
                      suffix: _,
                    });
                  })(..._),
                );
              },
              min(..._) {
                return this.check(_(..._));
              },
              max(..._) {
                return this.check(_(..._));
              },
              length(..._) {
                return this.check(_(..._));
              },
              nonempty(..._) {
                return this.check(_(1, ..._));
              },
              lowercase(_) {
                return this.check(
                  (function (_) {
                    return new _({
                      check: "string_format",
                      format: "lowercase",
                      ..._._(_),
                    });
                  })(_),
                );
              },
              uppercase(_) {
                return this.check(
                  (function (_) {
                    return new _({
                      check: "string_format",
                      format: "uppercase",
                      ..._._(_),
                    });
                  })(_),
                );
              },
              trim() {
                return this.check(_((_) => _.trim()));
              },
              normalize(..._) {
                return this.check(
                  (function (_) {
                    return _((_) => _.normalize(_));
                  })(..._),
                );
              },
              toLowerCase() {
                return this.check(_((_) => _.toLowerCase()));
              },
              toUpperCase() {
                return this.check(_((_) => _.toUpperCase()));
              },
              slugify() {
                return this.check(_((_) => _._(_)));
              },
            });
        }),
        _ = _._("ZodString", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_.email = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "email",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.url = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "url",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.jwt = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "jwt",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.emoji = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "emoji",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.guid = (_) => _.check(_(_, _))),
            (_.uuid = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.uuidv4 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    version: "v4",
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.uuidv6 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    version: "v6",
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.uuidv7 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "uuid",
                    check: "string_format",
                    abort: !1,
                    version: "v7",
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.nanoid = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "nanoid",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.guid = (_) => _.check(_(_, _))),
            (_.cuid = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "cuid",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.cuid2 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "cuid2",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.ulid = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "ulid",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.base64 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "base64",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.base64url = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "base64url",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.xid = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "xid",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.ksuid = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "ksuid",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.ipv4 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "ipv4",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.ipv6 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "ipv6",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.cidrv4 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "cidrv4",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.cidrv6 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "cidrv6",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.e164 = (_) =>
              _.check(
                (function (_, _) {
                  return new _({
                    type: "string",
                    format: "e164",
                    check: "string_format",
                    abort: !1,
                    ..._._(_),
                  });
                })(_, _),
              )),
            (_.datetime = (_) => _.check(_(_))),
            (_.date = (_) => _.check(_(_))),
            (_.time = (_) => _.check(_(_))),
            (_.duration = (_) => _.check(_(_)));
        });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "string",
            ..._._(_),
          });
        })(_, _);
      }
      const _ = _._("ZodStringFormat", (_, _) => {
          _.init(_, _), _.init(_, _);
        }),
        _ = _._("ZodEmail", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
      const _ = _._("ZodGUID", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodUUID", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodURL", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodEmoji", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodNanoID", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodCUID", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodCUID2", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodULID", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodXID", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodKSUID", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodIPv4", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodIPv6", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodCIDRv4", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodCIDRv6", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodBase64", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodBase64URL", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodE164", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodJWT", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      const _ = _._("ZodNumber", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _)),
          _(_, "ZodNumber", {
            _(_, _) {
              return this.check(_(_, _));
            },
            gte(_, _) {
              return this.check(_(_, _));
            },
            min(_, _) {
              return this.check(_(_, _));
            },
            _(_, _) {
              return this.check(_(_, _));
            },
            lte(_, _) {
              return this.check(_(_, _));
            },
            max(_, _) {
              return this.check(_(_, _));
            },
            int(_) {
              return this.check(_(_));
            },
            safe(_) {
              return this.check(_(_));
            },
            positive(_) {
              return this.check(_(0, _));
            },
            nonnegative(_) {
              return this.check(_(0, _));
            },
            negative(_) {
              return this.check(_(0, _));
            },
            nonpositive(_) {
              return this.check(_(0, _));
            },
            multipleOf(_, _) {
              return this.check(_(_, _));
            },
            step(_, _) {
              return this.check(_(_, _));
            },
            finite() {
              return this;
            },
          });
        const _ = _._zod.bag;
        (_.minValue =
          Math.max(
            _.minimum ?? Number.NEGATIVE_INFINITY,
            _.exclusiveMinimum ?? Number.NEGATIVE_INFINITY,
          ) ?? null),
          (_.maxValue =
            Math.min(
              _.maximum ?? Number.POSITIVE_INFINITY,
              _.exclusiveMaximum ?? Number.POSITIVE_INFINITY,
            ) ?? null),
          (_.isInt =
            (_.format ?? "").includes("int") ||
            Number.isSafeInteger(_.multipleOf ?? 0.5)),
          (_.isFinite = !0),
          (_.format = _.format ?? null);
      });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "number",
            checks: [],
            ..._._(_),
          });
        })(_, _);
      }
      const _ = _._("ZodNumberFormat", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "safeint",
            ..._._(_),
          });
        })(_, _);
      }
      const _ = _._("ZodBoolean", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(0, 0, _));
      });
      const _ = _._("ZodBigInt", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(0, _)),
          (_.gte = (_, _) => _.check(_(_, _))),
          (_.min = (_, _) => _.check(_(_, _))),
          (_._ = (_, _) => _.check(_(_, _))),
          (_.gte = (_, _) => _.check(_(_, _))),
          (_.min = (_, _) => _.check(_(_, _))),
          (_._ = (_, _) => _.check(_(_, _))),
          (_.lte = (_, _) => _.check(_(_, _))),
          (_.max = (_, _) => _.check(_(_, _))),
          (_.positive = (_) => _.check(_(BigInt(0), _))),
          (_.negative = (_) => _.check(_(BigInt(0), _))),
          (_.nonpositive = (_) => _.check(_(BigInt(0), _))),
          (_.nonnegative = (_) => _.check(_(BigInt(0), _))),
          (_.multipleOf = (_, _) => _.check(_(_, _)));
        const _ = _._zod.bag;
        (_.minValue = _.minimum ?? null),
          (_.maxValue = _.maximum ?? null),
          (_.format = _.format ?? null);
      });
      const _ = _._("ZodUnknown", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => {});
      });
      function _() {
        return new _({
          type: "unknown",
        });
      }
      const _ = _._("ZodNever", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(0, 0, _));
      });
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "never",
            ..._._(_),
          });
        })(_, _);
      }
      const _ = _._("ZodDate", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(0, _)),
          (_.min = (_, _) => _.check(_(_, _))),
          (_.max = (_, _) => _.check(_(_, _)));
        const _ = _._zod.bag;
        (_.minDate = _.minimum ? new Date(_.minimum) : null),
          (_.maxDate = _.maximum ? new Date(_.maximum) : null);
      });
      const _ = _._("ZodArray", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          (_.element = _.element),
          _(_, "ZodArray", {
            min(_, _) {
              return this.check(_(_, _));
            },
            nonempty(_) {
              return this.check(_(1, _));
            },
            max(_, _) {
              return this.check(_(_, _));
            },
            length(_, _) {
              return this.check(_(_, _));
            },
            unwrap() {
              return this.element;
            },
          });
      });
      function _(_, _) {
        return (function (_, _, _) {
          return new _({
            type: "array",
            element: _,
            ..._._(_),
          });
        })(_, _, _);
      }
      const _ = _._("ZodObject", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          _._(_, "shape", () => _.shape),
          _(_, "ZodObject", {
            keyof() {
              return _(Object.keys(this._zod.def.shape));
            },
            catchall(_) {
              return this.clone({
                ...this._zod.def,
                catchall: _,
              });
            },
            passthrough() {
              return this.clone({
                ...this._zod.def,
                catchall: _(),
              });
            },
            loose() {
              return this.clone({
                ...this._zod.def,
                catchall: _(),
              });
            },
            strict() {
              return this.clone({
                ...this._zod.def,
                catchall: _(),
              });
            },
            strip() {
              return this.clone({
                ...this._zod.def,
                catchall: void 0,
              });
            },
            extend(_) {
              return _._(this, _);
            },
            safeExtend(_) {
              return _._(this, _);
            },
            merge(_) {
              return _._(this, _);
            },
            pick(_) {
              return _._(this, _);
            },
            omit(_) {
              return _._(this, _);
            },
            partial(..._) {
              return _._(_, this, _[0]);
            },
            required(..._) {
              return _._(_, this, _[0]);
            },
          });
      });
      function _(_, _) {
        const _ = {
          type: "object",
          shape: _ ?? {},
          ..._._(_),
        };
        return new _(_);
      }
      const _ = _._("ZodUnion", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          (_.options = _.options);
      });
      function _(_, _) {
        return new _({
          type: "union",
          options: _,
          ..._._(_),
        });
      }
      const _ = _._("ZodIntersection", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _));
      });
      const _ = _._("ZodEnum", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, 0, _)),
          (_.enum = _.entries),
          (_.options = Object.values(_.entries));
        const _ = new Set(Object.keys(_.entries));
        (_.extract = (_, _) => {
          const _ = {};
          for (const _ of _) {
            if (!__webpack_require__.has(_))
              throw new Error(`Key ${_} not found in enum`);
            _[_] = _.entries[_];
          }
          return new _({
            ..._,
            checks: [],
            ..._._(_),
            entries: _,
          });
        }),
          (_.exclude = (_, _) => {
            const _ = {
              ..._.entries,
            };
            for (const _ of _) {
              if (!__webpack_require__.has(_))
                throw new Error(`Key ${_} not found in enum`);
              delete _[_];
            }
            return new _({
              ..._,
              checks: [],
              ..._._(_),
              entries: _,
            });
          });
      });
      function _(_, _) {
        const _ = Array.isArray(_)
          ? Object.fromEntries(_.map((_) => [_, _]))
          : _;
        return new _({
          type: "enum",
          entries: _,
          ..._._(_),
        });
      }
      const _ = _._("ZodLiteral", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _)),
          (_.values = new Set(_.values)),
          Object.defineProperty(_, "value", {
            get() {
              if (_.values.length > 1)
                throw new Error(
                  "This schema contains multiple valid literal values. Use `.values` instead.",
                );
              return _.values[0];
            },
          });
      });
      function _(_, _) {
        return new _({
          type: "literal",
          values: Array.isArray(_) ? _ : [_],
          ..._._(_),
        });
      }
      const _ = _._("ZodTransform", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(0, _)),
          (_._zod.parse = (_, _) => {
            if ("backward" === _.direction) throw new _._(_.constructor.name);
            _.addIssue = (_) => {
              if ("string" == typeof _) _.issues.push(_._(_, _.value, _));
              else {
                const _ = _;
                _.fatal && (_.continue = !1),
                  _.code ?? (_.code = "custom"),
                  _.input ?? (_.input = _.value),
                  _.inst ?? (_.inst = _),
                  _.issues.push(_._(_));
              }
            };
            const _ = _.transform(_.value, _);
            return _ instanceof Promise
              ? _.then((_) => ((_.value = _), (_.fallback = !0), _))
              : ((_.value = _), (_.fallback = !0), _);
          });
      });
      function _(_) {
        return new _({
          type: "transform",
          transform: _,
        });
      }
      const _ = _._("ZodOptional", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, 0, _)),
          (_.unwrap = () => _._zod.def.innerType);
      });
      function _(_) {
        return new _({
          type: "optional",
          innerType: _,
        });
      }
      const _ = _._("ZodExactOptional", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, 0, _)),
          (_.unwrap = () => _._zod.def.innerType);
      });
      const _ = _._("ZodNullable", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          (_.unwrap = () => _._zod.def.innerType);
      });
      function _(_) {
        return new _({
          type: "nullable",
          innerType: _,
        });
      }
      const _ = _._("ZodDefault", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          (_.unwrap = () => _._zod.def.innerType),
          (_.removeDefault = _.unwrap);
      });
      const _ = _._("ZodPrefault", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          (_.unwrap = () => _._zod.def.innerType);
      });
      const _ = _._("ZodNonOptional", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, 0, _)),
          (_.unwrap = () => _._zod.def.innerType);
      });
      const _ = _._("ZodCatch", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          (_.unwrap = () => _._zod.def.innerType),
          (_.removeCatch = _.unwrap);
      });
      const _ = _._("ZodPipe", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, 0, _)),
          (_._ = _._),
          (_.out = _.out);
      });
      function _(_, _) {
        return new _({
          type: "pipe",
          _: _,
          out: _,
        });
      }
      const _ = _._("ZodCodec", (_, _) => {
        _.init(_, _), _.init(_, _);
      });
      function _(_, _, _) {
        return new _({
          type: "pipe",
          _: _,
          out: _,
          transform: _.decode,
          reverseTransform: _.encode,
        });
      }
      const _ = _._("ZodReadonly", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
          (_.unwrap = () => _._zod.def.innerType);
      });
      const _ = _._("ZodCustom", (_, _) => {
        _.init(_, _),
          _.init(_, _),
          (_._zod.processJSONSchema = (_, _, _) => _(0, _));
      });
      const _ = (..._) =>
        (function (_, _) {
          const _ = _._(_);
          let _ = _.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            _ = _.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
          "sensitive" !== _.case &&
            ((_ = _.map((_) => ("string" == typeof _ ? _.toLowerCase() : _))),
            (_ = _.map((_) => ("string" == typeof _ ? _.toLowerCase() : _))));
          const _ = new Set(_),
            _ = new Set(_),
            _ = _.Codec ?? _,
            _ = _.Boolean ?? _,
            _ = new _({
              type: "pipe",
              _: new (_.String ?? _)({
                type: "string",
                error: _.error,
              }),
              out: new _({
                type: "boolean",
                error: _.error,
              }),
              transform: (_, _) => {
                let _ = _;
                return (
                  "sensitive" !== _.case && (_ = _.toLowerCase()),
                  !!_.has(_) ||
                    (!_.has(_) &&
                      (_.issues.push({
                        code: "invalid_value",
                        expected: "stringbool",
                        values: [..._, ..._],
                        input: _.value,
                        inst: _,
                        continue: !1,
                      }),
                      {}))
                );
              },
              reverseTransform: (_, _) =>
                !0 === _ ? _[0] || "true" : _[0] || "false",
              error: _.error,
            });
          return _;
        })(
          {
            Codec: _,
            Boolean: _,
            String: _,
          },
          ..._,
        );
      var _ = __webpack_require__("chunkid");
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "string",
            coerce: !0,
            ..._._(_),
          });
        })(_, _);
      }
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "number",
            coerce: !0,
            checks: [],
            ..._._(_),
          });
        })(_, _);
      }
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "boolean",
            coerce: !0,
            ..._._(_),
          });
        })(_, _);
      }
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "bigint",
            coerce: !0,
            ..._._(_),
          });
        })(_, _);
      }
      function _(_) {
        return (function (_, _) {
          return new _({
            type: "date",
            coerce: !0,
            ..._._(_),
          });
        })(_, _);
      }
      (0, _._)((0, _._)());
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _;
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      function _(_, _, _) {
        function _(_, _) {
          if (
            (_._zod ||
              Object.defineProperty(_, "_zod", {
                value: {
                  def: _,
                  constr: _,
                  traits: new Set(),
                },
                enumerable: !1,
              }),
            _._zod.traits.has(_))
          )
            return;
          _._zod.traits.add(_), _(_, _);
          const _ = _.prototype,
            _ = Object.keys(_);
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            _ in _ || (_[_] = _[_].bind(_));
          }
        }
        const _ = _?.Parent ?? Object;
        class _ extends _ {}
        function _(_) {
          var _;
          const _ = _?.Parent ? new _() : this;
          _(_, _), (_ = _._zod).deferred ?? (_.deferred = []);
          for (const _ of _._zod.deferred) _();
          return _;
        }
        return (
          Object.defineProperty(_, "name", {
            value: _,
          }),
          Object.defineProperty(_, "init", {
            value: _,
          }),
          Object.defineProperty(_, Symbol.hasInstance, {
            value: (_) =>
              !!(_?.Parent && _ instanceof _.Parent) || _?._zod?.traits?.has(_),
          }),
          Object.defineProperty(_, "name", {
            value: _,
          }),
          _
        );
      }
      Symbol("zod_brand");
      class _ extends Error {
        constructor() {
          super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
          );
        }
      }
      class _ extends Error {
        constructor(_) {
          super(`Encountered unidirectional transform during encode: ${_}`),
            (this.name = "ZodEncodeError");
        }
      }
      (_ = globalThis).__zod_globalConfig ?? (_.__zod_globalConfig = {});
      const _ = globalThis.__zod_globalConfig;
      function _(_) {
        return _ && Object.assign(_, _), _;
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
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = Object.values(_).filter((_) => "number" == typeof _);
        return Object.entries(_)
          .filter(([_, _]) => -1 === _.indexOf(+_))
          .map(([_, _]) => _);
      }
      function _(_, _ = "|") {
        return _.map((_) => _(_)).join(_);
      }
      function _(_, _) {
        return "bigint" == typeof _ ? _.toString() : _;
      }
      function _(_) {
        return {
          get value() {
            {
              const _ = _();
              return (
                Object.defineProperty(this, "value", {
                  value: _,
                }),
                _
              );
            }
          },
        };
      }
      function _(_) {
        return null == _;
      }
      function _(_) {
        const _ = _.startsWith("^") ? 1 : 0,
          _ = _.endsWith("$") ? _.length - 1 : _.length;
        return _.slice(_, _);
      }
      function _(_, _) {
        const _ = _ / _,
          _ = Math.round(_),
          _ = Number.EPSILON * Math.max(Math.abs(_), 1);
        return Math.abs(_ - _) < _ ? 0 : _ - _;
      }
      const _ = Symbol("evaluating");
      function _(_, _, _) {
        let _;
        Object.defineProperty(_, _, {
          get() {
            if (_ !== _)
              return void 0 === _ && ((_ = _), (_ = __webpack_require__())), _;
          },
          set(_) {
            Object.defineProperty(_, _, {
              value: _,
            });
          },
          configurable: !0,
        });
      }
      function _(_, _, _) {
        Object.defineProperty(_, _, {
          value: _,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      function _(..._) {
        const _ = {};
        for (const _ of _) {
          const _ = Object.getOwnPropertyDescriptors(_);
          Object.assign(_, _);
        }
        return Object.defineProperties({}, _);
      }
      function _(_) {
        return JSON.stringify(_);
      }
      function _(_) {
        return _.toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
      const _ =
        "captureStackTrace" in Error ? Error.captureStackTrace : (..._) => {};
      function _(_) {
        return "object" == typeof _ && null !== _ && !Array.isArray(_);
      }
      const _ = _(() => {
        if (_._.jitless) return !1;
        if (
          "undefined" != typeof navigator &&
          navigator?.userAgent?.includes("Cloudflare")
        )
          return !1;
        try {
          return new Function(""), !0;
        } catch (_) {
          return !1;
        }
      });
      function _(_) {
        if (!1 === _(_)) return !1;
        const _ = _.constructor;
        if (void 0 === _) return !0;
        if ("function" != typeof _) return !0;
        const _ = _.prototype;
        return (
          !1 !== _(_) &&
          !1 !== Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
        );
      }
      function _(_) {
        return _(_)
          ? {
              ..._,
            }
          : Array.isArray(_)
            ? [..._]
            : _ instanceof Map
              ? new Map(_)
              : _ instanceof Set
                ? new Set(_)
                : _;
      }
      const _ = new Set(["string", "number", "symbol"]);
      function _(_) {
        return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function _(_, _, _) {
        const _ = new _._zod.constr(_ ?? _._zod.def);
        return (_ && !_?.parent) || (_._zod.parent = _), _;
      }
      function _(_) {
        const _ = _;
        if (!_) return {};
        if ("string" == typeof _)
          return {
            error: () => _,
          };
        if (void 0 !== _?.message) {
          if (void 0 !== _?.error)
            throw new Error("Cannot specify both `message` and `error` params");
          _.error = _.message;
        }
        return (
          delete _.message,
          "string" == typeof _.error
            ? {
                ..._,
                error: () => _.error,
              }
            : _
        );
      }
      function _(_) {
        return "bigint" == typeof _
          ? _.toString() + "n"
          : "string" == typeof _
            ? `"${_}"`
            : `${_}`;
      }
      function _(_) {
        return Object.keys(_).filter(
          (_) =>
            "optional" === _[_]._zod.optin && "optional" === _[_]._zod.optout,
        );
      }
      const _ = {
        safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      };
      function _(_, _) {
        const _ = _._zod.def,
          _ = _.checks;
        if (_ && _.length > 0)
          throw new Error(
            ".pick() cannot be used on object schemas containing refinements",
          );
        return _(
          _,
          _(_._zod.def, {
            get shape() {
              const _ = {};
              for (const _ in _) {
                if (!(_ in _.shape))
                  throw new Error(`Unrecognized key: "${_}"`);
                _[_] && (_[_] = _.shape[_]);
              }
              return _(this, "shape", _), _;
            },
            checks: [],
          }),
        );
      }
      function _(_, _) {
        const _ = _._zod.def,
          _ = _.checks;
        if (_ && _.length > 0)
          throw new Error(
            ".omit() cannot be used on object schemas containing refinements",
          );
        const _ = _(_._zod.def, {
          get shape() {
            const _ = {
              ..._._zod.def.shape,
            };
            for (const _ in _) {
              if (!(_ in _.shape)) throw new Error(`Unrecognized key: "${_}"`);
              _[_] && delete _[_];
            }
            return _(this, "shape", _), _;
          },
          checks: [],
        });
        return _(_, _);
      }
      function _(_, _) {
        if (!_(_))
          throw new Error("Invalid input to extend: expected a plain object");
        const _ = _._zod.def.checks;
        if (_ && _.length > 0) {
          const _ = _._zod.def.shape;
          for (const _ in _)
            if (void 0 !== Object.getOwnPropertyDescriptor(_, _))
              throw new Error(
                "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
              );
        }
        const _ = _(_._zod.def, {
          get shape() {
            const _ = {
              ..._._zod.def.shape,
              ..._,
            };
            return _(this, "shape", _), _;
          },
        });
        return _(_, _);
      }
      function _(_, _) {
        if (!_(_))
          throw new Error(
            "Invalid input to safeExtend: expected a plain object",
          );
        const _ = _(_._zod.def, {
          get shape() {
            const _ = {
              ..._._zod.def.shape,
              ..._,
            };
            return _(this, "shape", _), _;
          },
        });
        return _(_, _);
      }
      function _(_, _) {
        if (_._zod.def.checks?.length)
          throw new Error(
            ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
          );
        const _ = _(_._zod.def, {
          get shape() {
            const _ = {
              ..._._zod.def.shape,
              ..._._zod.def.shape,
            };
            return _(this, "shape", _), _;
          },
          get catchall() {
            return _._zod.def.catchall;
          },
          checks: _._zod.def.checks ?? [],
        });
        return _(_, _);
      }
      function _(_, _, _) {
        const _ = _._zod.def.checks;
        if (_ && _.length > 0)
          throw new Error(
            ".partial() cannot be used on object schemas containing refinements",
          );
        const _ = _(_._zod.def, {
          get shape() {
            const _ = _._zod.def.shape,
              _ = {
                ..._,
              };
            if (_)
              for (const _ in _) {
                if (!(_ in _)) throw new Error(`Unrecognized key: "${_}"`);
                _[_] &&
                  (_[_] = _
                    ? new _({
                        type: "optional",
                        innerType: _[_],
                      })
                    : _[_]);
              }
            else
              for (const _ in _)
                _[_] = _
                  ? new _({
                      type: "optional",
                      innerType: _[_],
                    })
                  : _[_];
            return _(this, "shape", _), _;
          },
          checks: [],
        });
        return _(_, _);
      }
      function _(_, _, _) {
        const _ = _(_._zod.def, {
          get shape() {
            const _ = _._zod.def.shape,
              _ = {
                ..._,
              };
            if (_)
              for (const _ in _) {
                if (!(_ in _)) throw new Error(`Unrecognized key: "${_}"`);
                _[_] &&
                  (_[_] = new _({
                    type: "nonoptional",
                    innerType: _[_],
                  }));
              }
            else
              for (const _ in _)
                _[_] = new _({
                  type: "nonoptional",
                  innerType: _[_],
                });
            return _(this, "shape", _), _;
          },
        });
        return _(_, _);
      }
      function _(_, _ = 0) {
        if (!0 === _.aborted) return !0;
        for (let _ = _; _ < _.issues.length; _++)
          if (!0 !== _.issues[_]?.continue) return !0;
        return !1;
      }
      function _(_, _ = 0) {
        if (!0 === _.aborted) return !0;
        for (let _ = _; _ < _.issues.length; _++)
          if (!1 === _.issues[_]?.continue) return !0;
        return !1;
      }
      function _(_, _) {
        return _.map((_) => {
          var _;
          return (_ = _).path ?? (_.path = []), _.path.unshift(_), _;
        });
      }
      function _(_) {
        return "string" == typeof _ ? _ : _?.message;
      }
      function _(_, _, _) {
        const _ = _.message
            ? _.message
            : (_(_.inst?._zod.def?.error?.(_)) ??
              _(_?.error?.(_)) ??
              _(__webpack_require__.customError?.(_)) ??
              _(__webpack_require__.localeError?.(_)) ??
              "Invalid input"),
          { inst: _, continue: _, input: _, ..._ } = _;
        return (
          _.path ?? (_.path = []),
          (_.message = _),
          _?.reportInput && (_.input = _),
          _
        );
      }
      function _(_) {
        return Array.isArray(_)
          ? "array"
          : "string" == typeof _
            ? "string"
            : "unknown";
      }
      function _(_) {
        const _ = typeof _;
        switch (_) {
          case "number":
            return Number.isNaN(_) ? "nan" : "number";
          case "object": {
            if (null === _) return "null";
            if (Array.isArray(_)) return "array";
            const _ = _;
            if (
              _ &&
              Object.getPrototypeOf(_) !== Object.prototype &&
              "constructor" in _ &&
              _.constructor
            )
              return _.constructor.name;
          }
        }
        return _;
      }
      function _(..._) {
        const [_, _, _] = _;
        return "string" == typeof _
          ? {
              message: _,
              code: "custom",
              input: _,
              inst: _,
            }
          : {
              ..._,
            };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = () => {
        const _ = {
          string: {
            unit: "characters",
            verb: "to have",
          },
          file: {
            unit: "bytes",
            verb: "to have",
          },
          array: {
            unit: "items",
            verb: "to have",
          },
          set: {
            unit: "items",
            verb: "to have",
          },
          map: {
            unit: "entries",
            verb: "to have",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "input",
            email: "email address",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datetime",
            date: "ISO date",
            time: "ISO time",
            duration: "ISO duration",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            mac: "MAC address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input);
              return `Invalid input: expected ${_}, received ${_[_] ?? _}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Invalid input: expected ${_._(_.values[0])}`
                : `Invalid option: expected one of ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Too big: expected ${_.origin ?? "value"} to have ${_}${_.maximum.toString()} ${_.unit ?? "elements"}`
                : `Too big: expected ${_.origin ?? "value"} to be ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Too small: expected ${_.origin} to have ${_}${_.minimum.toString()} ${_.unit}`
                : `Too small: expected ${_.origin} to be ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Invalid string: must start with "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Invalid string: must end with "${_.suffix}"`
                  : "includes" === _.format
                    ? `Invalid string: must include "${_.includes}"`
                    : "regex" === _.format
                      ? `Invalid string: must match pattern ${_.pattern}`
                      : `Invalid ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Invalid number: must be a multiple of ${_.divisor}`;
            case "unrecognized_keys":
              return `Unrecognized key${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Invalid key in ${_.origin}`;
            case "invalid_union":
              if (
                _.options &&
                Array.isArray(_.options) &&
                _.options.length > 0
              ) {
                return `Invalid discriminator value. Expected ${_.options.map((_) => `'${_}'`).join(" | ")}`;
              }
              return "Invalid input";
            case "invalid_element":
              return `Invalid value in ${_.origin}`;
            default:
              return "Invalid input";
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
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
          _: () => _._,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          frCA: () => _,
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
          ota: () => _,
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
          zhCN: () => _,
          zhTW: () => _,
        });
      var _ = __webpack_require__("chunkid");
      const _ = () => {
        const _ = {
          string: {
            unit: "حرف",
            verb: "أن يحوي",
          },
          file: {
            unit: "بايت",
            verb: "أن يحوي",
          },
          array: {
            unit: "عنصر",
            verb: "أن يحوي",
          },
          set: {
            unit: "عنصر",
            verb: "أن يحوي",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "مدخل",
            email: "بريد إلكتروني",
            url: "رابط",
            emoji: "إيموجي",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "تاريخ ووقت بمعيار ISO",
            date: "تاريخ بمعيار ISO",
            time: "وقت بمعيار ISO",
            duration: "مدة بمعيار ISO",
            ipv4: "عنوان IPv4",
            ipv6: "عنوان IPv6",
            cidrv4: "مدى عناوين بصيغة IPv4",
            cidrv6: "مدى عناوين بصيغة IPv6",
            base64: "نَص بترميز base64-encoded",
            base64url: "نَص بترميز base64url-encoded",
            json_string: "نَص على هيئة JSON",
            e164: "رقم هاتف بمعيار E.164",
            jwt: "JWT",
            template_literal: "مدخل",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${_.expected}، ولكن تم إدخال ${_}`
                : `مدخلات غير مقبولة: يفترض إدخال ${_}، ولكن تم إدخال ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `مدخلات غير مقبولة: يفترض إدخال ${_._(_.values[0])}`
                : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? ` أكبر من اللازم: يفترض أن تكون ${_.origin ?? "القيمة"} ${_} ${_.maximum.toString()} ${_.unit ?? "عنصر"}`
                : `أكبر من اللازم: يفترض أن تكون ${_.origin ?? "القيمة"} ${_} ${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `أصغر من اللازم: يفترض لـ ${_.origin} أن يكون ${_} ${_.minimum.toString()} ${_.unit}`
                : `أصغر من اللازم: يفترض لـ ${_.origin} أن يكون ${_} ${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `نَص غير مقبول: يجب أن يبدأ بـ "${_.prefix}"`
                : "ends_with" === _.format
                  ? `نَص غير مقبول: يجب أن ينتهي بـ "${_.suffix}"`
                  : "includes" === _.format
                    ? `نَص غير مقبول: يجب أن يتضمَّن "${_.includes}"`
                    : "regex" === _.format
                      ? `نَص غير مقبول: يجب أن يطابق النمط ${_.pattern}`
                      : `${_[_.format] ?? _.format} غير مقبول`;
            }
            case "not_multiple_of":
              return `رقم غير مقبول: يجب أن يكون من مضاعفات ${_.divisor}`;
            case "unrecognized_keys":
              return `معرف${_.keys.length > 1 ? "ات" : ""} غريب${_.keys.length > 1 ? "ة" : ""}: ${_._(_.keys, "، ")}`;
            case "invalid_key":
              return `معرف غير مقبول في ${_.origin}`;
            case "invalid_union":
            default:
              return "مدخل غير مقبول";
            case "invalid_element":
              return `مدخل غير مقبول في ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "simvol",
            verb: "olmalıdır",
          },
          file: {
            unit: "bayt",
            verb: "olmalıdır",
          },
          array: {
            unit: "element",
            verb: "olmalıdır",
          },
          set: {
            unit: "element",
            verb: "olmalıdır",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "input",
            email: "email address",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datetime",
            date: "ISO date",
            time: "ISO time",
            duration: "ISO duration",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded string",
            base64url: "base64url-encoded string",
            json_string: "JSON string",
            e164: "E.164 number",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Yanlış dəyər: gözlənilən instanceof ${_.expected}, daxil olan ${_}`
                : `Yanlış dəyər: gözlənilən ${_}, daxil olan ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Yanlış dəyər: gözlənilən ${_._(_.values[0])}`
                : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Çox böyük: gözlənilən ${_.origin ?? "dəyər"} ${_}${_.maximum.toString()} ${_.unit ?? "element"}`
                : `Çox böyük: gözlənilən ${_.origin ?? "dəyər"} ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Çox kiçik: gözlənilən ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
                : `Çox kiçik: gözlənilən ${_.origin} ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Yanlış mətn: "${_.prefix}" ilə başlamalıdır`
                : "ends_with" === _.format
                  ? `Yanlış mətn: "${_.suffix}" ilə bitməlidir`
                  : "includes" === _.format
                    ? `Yanlış mətn: "${_.includes}" daxil olmalıdır`
                    : "regex" === _.format
                      ? `Yanlış mətn: ${_.pattern} şablonuna uyğun olmalıdır`
                      : `Yanlış ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Yanlış ədəd: ${_.divisor} ilə bölünə bilən olmalıdır`;
            case "unrecognized_keys":
              return `Tanınmayan açar${_.keys.length > 1 ? "lar" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `${_.origin} daxilində yanlış açar`;
            case "invalid_union":
            default:
              return "Yanlış dəyər";
            case "invalid_element":
              return `${_.origin} daxilində yanlış dəyər`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      function _(_, _, _, _) {
        const _ = Math.abs(_),
          _ = _ % 10,
          _ = _ % 100;
        return _ >= 11 && _ <= 19 ? _ : 1 === _ ? _ : _ >= 2 && _ <= 4 ? _ : _;
      }
      const _ = () => {
        const _ = {
          string: {
            unit: {
              one: "сімвал",
              few: "сімвалы",
              many: "сімвалаў",
            },
            verb: "мець",
          },
          array: {
            unit: {
              one: "элемент",
              few: "элементы",
              many: "элементаў",
            },
            verb: "мець",
          },
          set: {
            unit: {
              one: "элемент",
              few: "элементы",
              many: "элементаў",
            },
            verb: "мець",
          },
          file: {
            unit: {
              one: "байт",
              few: "байты",
              many: "байтаў",
            },
            verb: "мець",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "увод",
            email: "email адрас",
            url: "URL",
            emoji: "эмодзі",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO дата і час",
            date: "ISO дата",
            time: "ISO час",
            duration: "ISO працягласць",
            ipv4: "IPv4 адрас",
            ipv6: "IPv6 адрас",
            cidrv4: "IPv4 дыяпазон",
            cidrv6: "IPv6 дыяпазон",
            base64: "радок у фармаце base64",
            base64url: "радок у фармаце base64url",
            json_string: "JSON радок",
            e164: "нумар E.164",
            jwt: "JWT",
            template_literal: "увод",
          },
          _ = {
            nan: "NaN",
            number: "лік",
            array: "масіў",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Няправільны ўвод: чакаўся instanceof ${_.expected}, атрымана ${_}`
                : `Няправільны ўвод: чакаўся ${_}, атрымана ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Няправільны ўвод: чакалася ${_._(_.values[0])}`
                : `Няправільны варыянт: чакаўся адзін з ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              if (_) {
                const _ = _(
                  Number(_.maximum),
                  _.unit.one,
                  _.unit.few,
                  _.unit.many,
                );
                return `Занадта вялікі: чакалася, што ${_.origin ?? "значэнне"} павінна ${_.verb} ${_}${_.maximum.toString()} ${_}`;
              }
              return `Занадта вялікі: чакалася, што ${_.origin ?? "значэнне"} павінна быць ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              if (_) {
                const _ = _(
                  Number(_.minimum),
                  _.unit.one,
                  _.unit.few,
                  _.unit.many,
                );
                return `Занадта малы: чакалася, што ${_.origin} павінна ${_.verb} ${_}${_.minimum.toString()} ${_}`;
              }
              return `Занадта малы: чакалася, што ${_.origin} павінна быць ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Няправільны радок: павінен пачынацца з "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Няправільны радок: павінен заканчвацца на "${_.suffix}"`
                  : "includes" === _.format
                    ? `Няправільны радок: павінен змяшчаць "${_.includes}"`
                    : "regex" === _.format
                      ? `Няправільны радок: павінен адпавядаць шаблону ${_.pattern}`
                      : `Няправільны ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Няправільны лік: павінен быць кратным ${_.divisor}`;
            case "unrecognized_keys":
              return `Нераспазнаны ${_.keys.length > 1 ? "ключы" : "ключ"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Няправільны ключ у ${_.origin}`;
            case "invalid_union":
            default:
              return "Няправільны ўвод";
            case "invalid_element":
              return `Няправільнае значэнне ў ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "символа",
            verb: "да съдържа",
          },
          file: {
            unit: "байта",
            verb: "да съдържа",
          },
          array: {
            unit: "елемента",
            verb: "да съдържа",
          },
          set: {
            unit: "елемента",
            verb: "да съдържа",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "вход",
            email: "имейл адрес",
            url: "URL",
            emoji: "емоджи",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO време",
            date: "ISO дата",
            time: "ISO време",
            duration: "ISO продължителност",
            ipv4: "IPv4 адрес",
            ipv6: "IPv6 адрес",
            cidrv4: "IPv4 диапазон",
            cidrv6: "IPv6 диапазон",
            base64: "base64-кодиран низ",
            base64url: "base64url-кодиран низ",
            json_string: "JSON низ",
            e164: "E.164 номер",
            jwt: "JWT",
            template_literal: "вход",
          },
          _ = {
            nan: "NaN",
            number: "число",
            array: "масив",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Невалиден вход: очакван instanceof ${_.expected}, получен ${_}`
                : `Невалиден вход: очакван ${_}, получен ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Невалиден вход: очакван ${_._(_.values[0])}`
                : `Невалидна опция: очаквано едно от ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Твърде голямо: очаква се ${_.origin ?? "стойност"} да съдържа ${_}${_.maximum.toString()} ${_.unit ?? "елемента"}`
                : `Твърде голямо: очаква се ${_.origin ?? "стойност"} да бъде ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Твърде малко: очаква се ${_.origin} да съдържа ${_}${_.minimum.toString()} ${_.unit}`
                : `Твърде малко: очаква се ${_.origin} да бъде ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              if ("starts_with" === _.format)
                return `Невалиден низ: трябва да започва с "${_.prefix}"`;
              if ("ends_with" === _.format)
                return `Невалиден низ: трябва да завършва с "${_.suffix}"`;
              if ("includes" === _.format)
                return `Невалиден низ: трябва да включва "${_.includes}"`;
              if ("regex" === _.format)
                return `Невалиден низ: трябва да съвпада с ${_.pattern}`;
              let _ = "Невалиден";
              return (
                "emoji" === _.format && (_ = "Невалидно"),
                "datetime" === _.format && (_ = "Невалидно"),
                "date" === _.format && (_ = "Невалидна"),
                "time" === _.format && (_ = "Невалидно"),
                "duration" === _.format && (_ = "Невалидна"),
                `${_} ${_[_.format] ?? _.format}`
              );
            }
            case "not_multiple_of":
              return `Невалидно число: трябва да бъде кратно на ${_.divisor}`;
            case "unrecognized_keys":
              return `Неразпознат${_.keys.length > 1 ? "и" : ""} ключ${_.keys.length > 1 ? "ове" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Невалиден ключ в ${_.origin}`;
            case "invalid_union":
            default:
              return "Невалиден вход";
            case "invalid_element":
              return `Невалидна стойност в ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "caràcters",
            verb: "contenir",
          },
          file: {
            unit: "bytes",
            verb: "contenir",
          },
          array: {
            unit: "elements",
            verb: "contenir",
          },
          set: {
            unit: "elements",
            verb: "contenir",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "entrada",
            email: "adreça electrònica",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data i hora ISO",
            date: "data ISO",
            time: "hora ISO",
            duration: "durada ISO",
            ipv4: "adreça IPv4",
            ipv6: "adreça IPv6",
            cidrv4: "rang IPv4",
            cidrv6: "rang IPv6",
            base64: "cadena codificada en base64",
            base64url: "cadena codificada en base64url",
            json_string: "cadena JSON",
            e164: "número E.164",
            jwt: "JWT",
            template_literal: "entrada",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Tipus invàlid: s'esperava instanceof ${_.expected}, s'ha rebut ${_}`
                : `Tipus invàlid: s'esperava ${_}, s'ha rebut ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Valor invàlid: s'esperava ${_._(_.values[0])}`
                : `Opció invàlida: s'esperava una de ${_._(_.values, " o ")}`;
            case "too_big": {
              const _ = _.inclusive ? "com a màxim" : "menys de",
                _ = _(_.origin);
              return _
                ? `Massa gran: s'esperava que ${_.origin ?? "el valor"} contingués ${_} ${_.maximum.toString()} ${_.unit ?? "elements"}`
                : `Massa gran: s'esperava que ${_.origin ?? "el valor"} fos ${_} ${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? "com a mínim" : "més de",
                _ = _(_.origin);
              return _
                ? `Massa petit: s'esperava que ${_.origin} contingués ${_} ${_.minimum.toString()} ${_.unit}`
                : `Massa petit: s'esperava que ${_.origin} fos ${_} ${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Format invàlid: ha de començar amb "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Format invàlid: ha d'acabar amb "${_.suffix}"`
                  : "includes" === _.format
                    ? `Format invàlid: ha d'incloure "${_.includes}"`
                    : "regex" === _.format
                      ? `Format invàlid: ha de coincidir amb el patró ${_.pattern}`
                      : `Format invàlid per a ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Número invàlid: ha de ser múltiple de ${_.divisor}`;
            case "unrecognized_keys":
              return `Clau${_.keys.length > 1 ? "s" : ""} no reconeguda${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Clau invàlida a ${_.origin}`;
            case "invalid_union":
            default:
              return "Entrada invàlida";
            case "invalid_element":
              return `Element invàlid a ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "znaků",
            verb: "mít",
          },
          file: {
            unit: "bajtů",
            verb: "mít",
          },
          array: {
            unit: "prvků",
            verb: "mít",
          },
          set: {
            unit: "prvků",
            verb: "mít",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "regulární výraz",
            email: "e-mailová adresa",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "datum a čas ve formátu ISO",
            date: "datum ve formátu ISO",
            time: "čas ve formátu ISO",
            duration: "doba trvání ISO",
            ipv4: "IPv4 adresa",
            ipv6: "IPv6 adresa",
            cidrv4: "rozsah IPv4",
            cidrv6: "rozsah IPv6",
            base64: "řetězec zakódovaný ve formátu base64",
            base64url: "řetězec zakódovaný ve formátu base64url",
            json_string: "řetězec ve formátu JSON",
            e164: "číslo E.164",
            jwt: "JWT",
            template_literal: "vstup",
          },
          _ = {
            nan: "NaN",
            number: "číslo",
            string: "řetězec",
            function: "funkce",
            array: "pole",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Neplatný vstup: očekáváno instanceof ${_.expected}, obdrženo ${_}`
                : `Neplatný vstup: očekáváno ${_}, obdrženo ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Neplatný vstup: očekáváno ${_._(_.values[0])}`
                : `Neplatná možnost: očekávána jedna z hodnot ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Hodnota je příliš velká: ${_.origin ?? "hodnota"} musí mít ${_}${_.maximum.toString()} ${_.unit ?? "prvků"}`
                : `Hodnota je příliš velká: ${_.origin ?? "hodnota"} musí být ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Hodnota je příliš malá: ${_.origin ?? "hodnota"} musí mít ${_}${_.minimum.toString()} ${_.unit ?? "prvků"}`
                : `Hodnota je příliš malá: ${_.origin ?? "hodnota"} musí být ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Neplatný řetězec: musí začínat na "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Neplatný řetězec: musí končit na "${_.suffix}"`
                  : "includes" === _.format
                    ? `Neplatný řetězec: musí obsahovat "${_.includes}"`
                    : "regex" === _.format
                      ? `Neplatný řetězec: musí odpovídat vzoru ${_.pattern}`
                      : `Neplatný formát ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Neplatné číslo: musí být násobkem ${_.divisor}`;
            case "unrecognized_keys":
              return `Neznámé klíče: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Neplatný klíč v ${_.origin}`;
            case "invalid_union":
            default:
              return "Neplatný vstup";
            case "invalid_element":
              return `Neplatná hodnota v ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "tegn",
            verb: "havde",
          },
          file: {
            unit: "bytes",
            verb: "havde",
          },
          array: {
            unit: "elementer",
            verb: "indeholdt",
          },
          set: {
            unit: "elementer",
            verb: "indeholdt",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "input",
            email: "e-mailadresse",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO dato- og klokkeslæt",
            date: "ISO-dato",
            time: "ISO-klokkeslæt",
            duration: "ISO-varighed",
            ipv4: "IPv4-område",
            ipv6: "IPv6-område",
            cidrv4: "IPv4-spektrum",
            cidrv6: "IPv6-spektrum",
            base64: "base64-kodet streng",
            base64url: "base64url-kodet streng",
            json_string: "JSON-streng",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
            string: "streng",
            number: "tal",
            boolean: "boolean",
            array: "liste",
            object: "objekt",
            set: "sæt",
            file: "fil",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Ugyldigt input: forventede instanceof ${_.expected}, fik ${_}`
                : `Ugyldigt input: forventede ${_}, fik ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Ugyldig værdi: forventede ${_._(_.values[0])}`
                : `Ugyldigt valg: forventede en af følgende ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin),
                _ = _[_.origin] ?? _.origin;
              return _
                ? `For stor: forventede ${_ ?? "value"} ${_.verb} ${_} ${_.maximum.toString()} ${_.unit ?? "elementer"}`
                : `For stor: forventede ${_ ?? "value"} havde ${_} ${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin),
                _ = _[_.origin] ?? _.origin;
              return _
                ? `For lille: forventede ${_} ${_.verb} ${_} ${_.minimum.toString()} ${_.unit}`
                : `For lille: forventede ${_} havde ${_} ${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Ugyldig streng: skal starte med "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Ugyldig streng: skal ende med "${_.suffix}"`
                  : "includes" === _.format
                    ? `Ugyldig streng: skal indeholde "${_.includes}"`
                    : "regex" === _.format
                      ? `Ugyldig streng: skal matche mønsteret ${_.pattern}`
                      : `Ugyldig ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Ugyldigt tal: skal være deleligt med ${_.divisor}`;
            case "unrecognized_keys":
              return `${_.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Ugyldig nøgle i ${_.origin}`;
            case "invalid_union":
              return "Ugyldigt input: matcher ingen af de tilladte typer";
            case "invalid_element":
              return `Ugyldig værdi i ${_.origin}`;
            default:
              return "Ugyldigt input";
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "Zeichen",
            verb: "zu haben",
          },
          file: {
            unit: "Bytes",
            verb: "zu haben",
          },
          array: {
            unit: "Elemente",
            verb: "zu haben",
          },
          set: {
            unit: "Elemente",
            verb: "zu haben",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "Eingabe",
            email: "E-Mail-Adresse",
            url: "URL",
            emoji: "Emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-Datum und -Uhrzeit",
            date: "ISO-Datum",
            time: "ISO-Uhrzeit",
            duration: "ISO-Dauer",
            ipv4: "IPv4-Adresse",
            ipv6: "IPv6-Adresse",
            cidrv4: "IPv4-Bereich",
            cidrv6: "IPv6-Bereich",
            base64: "Base64-codierter String",
            base64url: "Base64-URL-codierter String",
            json_string: "JSON-String",
            e164: "E.164-Nummer",
            jwt: "JWT",
            template_literal: "Eingabe",
          },
          _ = {
            nan: "NaN",
            number: "Zahl",
            array: "Array",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Ungültige Eingabe: erwartet instanceof ${_.expected}, erhalten ${_}`
                : `Ungültige Eingabe: erwartet ${_}, erhalten ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Ungültige Eingabe: erwartet ${_._(_.values[0])}`
                : `Ungültige Option: erwartet eine von ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Zu groß: erwartet, dass ${_.origin ?? "Wert"} ${_}${_.maximum.toString()} ${_.unit ?? "Elemente"} hat`
                : `Zu groß: erwartet, dass ${_.origin ?? "Wert"} ${_}${_.maximum.toString()} ist`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Zu klein: erwartet, dass ${_.origin} ${_}${_.minimum.toString()} ${_.unit} hat`
                : `Zu klein: erwartet, dass ${_.origin} ${_}${_.minimum.toString()} ist`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Ungültiger String: muss mit "${_.prefix}" beginnen`
                : "ends_with" === _.format
                  ? `Ungültiger String: muss mit "${_.suffix}" enden`
                  : "includes" === _.format
                    ? `Ungültiger String: muss "${_.includes}" enthalten`
                    : "regex" === _.format
                      ? `Ungültiger String: muss dem Muster ${_.pattern} entsprechen`
                      : `Ungültig: ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Ungültige Zahl: muss ein Vielfaches von ${_.divisor} sein`;
            case "unrecognized_keys":
              return `${_.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Ungültiger Schlüssel in ${_.origin}`;
            case "invalid_union":
            default:
              return "Ungültige Eingabe";
            case "invalid_element":
              return `Ungültiger Wert in ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "χαρακτήρες",
            verb: "να έχει",
          },
          file: {
            unit: "bytes",
            verb: "να έχει",
          },
          array: {
            unit: "στοιχεία",
            verb: "να έχει",
          },
          set: {
            unit: "στοιχεία",
            verb: "να έχει",
          },
          map: {
            unit: "καταχωρήσεις",
            verb: "να έχει",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "είσοδος",
            email: "διεύθυνση email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO ημερομηνία και ώρα",
            date: "ISO ημερομηνία",
            time: "ISO ώρα",
            duration: "ISO διάρκεια",
            ipv4: "διεύθυνση IPv4",
            ipv6: "διεύθυνση IPv6",
            mac: "διεύθυνση MAC",
            cidrv4: "εύρος IPv4",
            cidrv6: "εύρος IPv6",
            base64: "συμβολοσειρά κωδικοποιημένη σε base64",
            base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
            json_string: "συμβολοσειρά JSON",
            e164: "αριθμός E.164",
            jwt: "JWT",
            template_literal: "είσοδος",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return "string" == typeof _.expected && /^[A-Z]/.test(_.expected)
                ? `Μη έγκυρη είσοδος: αναμενόταν instanceof ${_.expected}, λήφθηκε ${_}`
                : `Μη έγκυρη είσοδος: αναμενόταν ${_}, λήφθηκε ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Μη έγκυρη είσοδος: αναμενόταν ${_._(_.values[0])}`
                : `Μη έγκυρη επιλογή: αναμενόταν ένα από ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Πολύ μεγάλο: αναμενόταν ${_.origin ?? "τιμή"} να έχει ${_}${_.maximum.toString()} ${_.unit ?? "στοιχεία"}`
                : `Πολύ μεγάλο: αναμενόταν ${_.origin ?? "τιμή"} να είναι ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Πολύ μικρό: αναμενόταν ${_.origin} να έχει ${_}${_.minimum.toString()} ${_.unit}`
                : `Πολύ μικρό: αναμενόταν ${_.origin} να είναι ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${_.suffix}"`
                  : "includes" === _.format
                    ? `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${_.includes}"`
                    : "regex" === _.format
                      ? `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${_.pattern}`
                      : `Μη έγκυρο: ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${_.divisor}`;
            case "unrecognized_keys":
              return `Άγνωστ${_.keys.length > 1 ? "α" : "ο"} κλειδ${_.keys.length > 1 ? "ιά" : "ί"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Μη έγκυρο κλειδί στο ${_.origin}`;
            case "invalid_union":
            default:
              return "Μη έγκυρη είσοδος";
            case "invalid_element":
              return `Μη έγκυρη τιμή στο ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      var _ = __webpack_require__("chunkid");
      const _ = () => {
        const _ = {
          string: {
            unit: "karaktrojn",
            verb: "havi",
          },
          file: {
            unit: "bajtojn",
            verb: "havi",
          },
          array: {
            unit: "elementojn",
            verb: "havi",
          },
          set: {
            unit: "elementojn",
            verb: "havi",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "enigo",
            email: "retadreso",
            url: "URL",
            emoji: "emoĝio",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-datotempo",
            date: "ISO-dato",
            time: "ISO-tempo",
            duration: "ISO-daŭro",
            ipv4: "IPv4-adreso",
            ipv6: "IPv6-adreso",
            cidrv4: "IPv4-rango",
            cidrv6: "IPv6-rango",
            base64: "64-ume kodita karaktraro",
            base64url: "URL-64-ume kodita karaktraro",
            json_string: "JSON-karaktraro",
            e164: "E.164-nombro",
            jwt: "JWT",
            template_literal: "enigo",
          },
          _ = {
            nan: "NaN",
            number: "nombro",
            array: "tabelo",
            null: "senvalora",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Nevalida enigo: atendiĝis instanceof ${_.expected}, riceviĝis ${_}`
                : `Nevalida enigo: atendiĝis ${_}, riceviĝis ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Nevalida enigo: atendiĝis ${_._(_.values[0])}`
                : `Nevalida opcio: atendiĝis unu el ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Tro granda: atendiĝis ke ${_.origin ?? "valoro"} havu ${_}${_.maximum.toString()} ${_.unit ?? "elementojn"}`
                : `Tro granda: atendiĝis ke ${_.origin ?? "valoro"} havu ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Tro malgranda: atendiĝis ke ${_.origin} havu ${_}${_.minimum.toString()} ${_.unit}`
                : `Tro malgranda: atendiĝis ke ${_.origin} estu ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Nevalida karaktraro: devas komenciĝi per "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Nevalida karaktraro: devas finiĝi per "${_.suffix}"`
                  : "includes" === _.format
                    ? `Nevalida karaktraro: devas inkluzivi "${_.includes}"`
                    : "regex" === _.format
                      ? `Nevalida karaktraro: devas kongrui kun la modelo ${_.pattern}`
                      : `Nevalida ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Nevalida nombro: devas esti oblo de ${_.divisor}`;
            case "unrecognized_keys":
              return `Nekonata${_.keys.length > 1 ? "j" : ""} ŝlosilo${_.keys.length > 1 ? "j" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Nevalida ŝlosilo en ${_.origin}`;
            case "invalid_union":
            default:
              return "Nevalida enigo";
            case "invalid_element":
              return `Nevalida valoro en ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "caracteres",
            verb: "tener",
          },
          file: {
            unit: "bytes",
            verb: "tener",
          },
          array: {
            unit: "elementos",
            verb: "tener",
          },
          set: {
            unit: "elementos",
            verb: "tener",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "entrada",
            email: "dirección de correo electrónico",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "fecha y hora ISO",
            date: "fecha ISO",
            time: "hora ISO",
            duration: "duración ISO",
            ipv4: "dirección IPv4",
            ipv6: "dirección IPv6",
            cidrv4: "rango IPv4",
            cidrv6: "rango IPv6",
            base64: "cadena codificada en base64",
            base64url: "URL codificada en base64",
            json_string: "cadena JSON",
            e164: "número E.164",
            jwt: "JWT",
            template_literal: "entrada",
          },
          _ = {
            nan: "NaN",
            string: "texto",
            number: "número",
            boolean: "booleano",
            array: "arreglo",
            object: "objeto",
            set: "conjunto",
            file: "archivo",
            date: "fecha",
            bigint: "número grande",
            symbol: "símbolo",
            undefined: "indefinido",
            null: "nulo",
            function: "función",
            map: "mapa",
            record: "registro",
            tuple: "tupla",
            enum: "enumeración",
            union: "unión",
            literal: "literal",
            promise: "promesa",
            void: "vacío",
            never: "nunca",
            unknown: "desconocido",
            any: "cualquiera",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Entrada inválida: se esperaba instanceof ${_.expected}, recibido ${_}`
                : `Entrada inválida: se esperaba ${_}, recibido ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Entrada inválida: se esperaba ${_._(_.values[0])}`
                : `Opción inválida: se esperaba una de ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin),
                _ = _[_.origin] ?? _.origin;
              return _
                ? `Demasiado grande: se esperaba que ${_ ?? "valor"} tuviera ${_}${_.maximum.toString()} ${_.unit ?? "elementos"}`
                : `Demasiado grande: se esperaba que ${_ ?? "valor"} fuera ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin),
                _ = _[_.origin] ?? _.origin;
              return _
                ? `Demasiado pequeño: se esperaba que ${_} tuviera ${_}${_.minimum.toString()} ${_.unit}`
                : `Demasiado pequeño: se esperaba que ${_} fuera ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Cadena inválida: debe comenzar con "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Cadena inválida: debe terminar en "${_.suffix}"`
                  : "includes" === _.format
                    ? `Cadena inválida: debe incluir "${_.includes}"`
                    : "regex" === _.format
                      ? `Cadena inválida: debe coincidir con el patrón ${_.pattern}`
                      : `Inválido ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Número inválido: debe ser múltiplo de ${_.divisor}`;
            case "unrecognized_keys":
              return `Llave${_.keys.length > 1 ? "s" : ""} desconocida${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Llave inválida en ${_[_.origin] ?? _.origin}`;
            case "invalid_union":
            default:
              return "Entrada inválida";
            case "invalid_element":
              return `Valor inválido en ${_[_.origin] ?? _.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "کاراکتر",
            verb: "داشته باشد",
          },
          file: {
            unit: "بایت",
            verb: "داشته باشد",
          },
          array: {
            unit: "آیتم",
            verb: "داشته باشد",
          },
          set: {
            unit: "آیتم",
            verb: "داشته باشد",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "ورودی",
            email: "آدرس ایمیل",
            url: "URL",
            emoji: "ایموجی",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "تاریخ و زمان ایزو",
            date: "تاریخ ایزو",
            time: "زمان ایزو",
            duration: "مدت زمان ایزو",
            ipv4: "IPv4 آدرس",
            ipv6: "IPv6 آدرس",
            cidrv4: "IPv4 دامنه",
            cidrv6: "IPv6 دامنه",
            base64: "base64-encoded رشته",
            base64url: "base64url-encoded رشته",
            json_string: "JSON رشته",
            e164: "E.164 عدد",
            jwt: "JWT",
            template_literal: "ورودی",
          },
          _ = {
            nan: "NaN",
            number: "عدد",
            array: "آرایه",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `ورودی نامعتبر: می‌بایست instanceof ${_.expected} می‌بود، ${_} دریافت شد`
                : `ورودی نامعتبر: می‌بایست ${_} می‌بود، ${_} دریافت شد`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `ورودی نامعتبر: می‌بایست ${_._(_.values[0])} می‌بود`
                : `گزینه نامعتبر: می‌بایست یکی از ${_._(_.values, "|")} می‌بود`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `خیلی بزرگ: ${_.origin ?? "مقدار"} باید ${_}${_.maximum.toString()} ${_.unit ?? "عنصر"} باشد`
                : `خیلی بزرگ: ${_.origin ?? "مقدار"} باید ${_}${_.maximum.toString()} باشد`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `خیلی کوچک: ${_.origin} باید ${_}${_.minimum.toString()} ${_.unit} باشد`
                : `خیلی کوچک: ${_.origin} باید ${_}${_.minimum.toString()} باشد`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `رشته نامعتبر: باید با "${_.prefix}" شروع شود`
                : "ends_with" === _.format
                  ? `رشته نامعتبر: باید با "${_.suffix}" تمام شود`
                  : "includes" === _.format
                    ? `رشته نامعتبر: باید شامل "${_.includes}" باشد`
                    : "regex" === _.format
                      ? `رشته نامعتبر: باید با الگوی ${_.pattern} مطابقت داشته باشد`
                      : `${_[_.format] ?? _.format} نامعتبر`;
            }
            case "not_multiple_of":
              return `عدد نامعتبر: باید مضرب ${_.divisor} باشد`;
            case "unrecognized_keys":
              return `کلید${_.keys.length > 1 ? "های" : ""} ناشناس: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `کلید ناشناس در ${_.origin}`;
            case "invalid_union":
            default:
              return "ورودی نامعتبر";
            case "invalid_element":
              return `مقدار نامعتبر در ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "merkkiä",
            subject: "merkkijonon",
          },
          file: {
            unit: "tavua",
            subject: "tiedoston",
          },
          array: {
            unit: "alkiota",
            subject: "listan",
          },
          set: {
            unit: "alkiota",
            subject: "joukon",
          },
          number: {
            unit: "",
            subject: "luvun",
          },
          bigint: {
            unit: "",
            subject: "suuren kokonaisluvun",
          },
          int: {
            unit: "",
            subject: "kokonaisluvun",
          },
          date: {
            unit: "",
            subject: "päivämäärän",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "säännöllinen lauseke",
            email: "sähköpostiosoite",
            url: "URL-osoite",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-aikaleima",
            date: "ISO-päivämäärä",
            time: "ISO-aika",
            duration: "ISO-kesto",
            ipv4: "IPv4-osoite",
            ipv6: "IPv6-osoite",
            cidrv4: "IPv4-alue",
            cidrv6: "IPv6-alue",
            base64: "base64-koodattu merkkijono",
            base64url: "base64url-koodattu merkkijono",
            json_string: "JSON-merkkijono",
            e164: "E.164-luku",
            jwt: "JWT",
            template_literal: "templaattimerkkijono",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Virheellinen tyyppi: odotettiin instanceof ${_.expected}, oli ${_}`
                : `Virheellinen tyyppi: odotettiin ${_}, oli ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Virheellinen syöte: täytyy olla ${_._(_.values[0])}`
                : `Virheellinen valinta: täytyy olla yksi seuraavista: ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Liian suuri: ${_.subject} täytyy olla ${_}${_.maximum.toString()} ${_.unit}`.trim()
                : `Liian suuri: arvon täytyy olla ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Liian pieni: ${_.subject} täytyy olla ${_}${_.minimum.toString()} ${_.unit}`.trim()
                : `Liian pieni: arvon täytyy olla ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Virheellinen syöte: täytyy alkaa "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Virheellinen syöte: täytyy loppua "${_.suffix}"`
                  : "includes" === _.format
                    ? `Virheellinen syöte: täytyy sisältää "${_.includes}"`
                    : "regex" === _.format
                      ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${_.pattern}`
                      : `Virheellinen ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Virheellinen luku: täytyy olla luvun ${_.divisor} monikerta`;
            case "unrecognized_keys":
              return `${_.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return "Virheellinen avain tietueessa";
            case "invalid_union":
              return "Virheellinen unioni";
            case "invalid_element":
              return "Virheellinen arvo joukossa";
            default:
              return "Virheellinen syöte";
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "caractères",
            verb: "avoir",
          },
          file: {
            unit: "octets",
            verb: "avoir",
          },
          array: {
            unit: "éléments",
            verb: "avoir",
          },
          set: {
            unit: "éléments",
            verb: "avoir",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "entrée",
            email: "adresse e-mail",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "date et heure ISO",
            date: "date ISO",
            time: "heure ISO",
            duration: "durée ISO",
            ipv4: "adresse IPv4",
            ipv6: "adresse IPv6",
            cidrv4: "plage IPv4",
            cidrv6: "plage IPv6",
            base64: "chaîne encodée en base64",
            base64url: "chaîne encodée en base64url",
            json_string: "chaîne JSON",
            e164: "numéro E.164",
            jwt: "JWT",
            template_literal: "entrée",
          },
          _ = {
            string: "chaîne",
            number: "nombre",
            int: "entier",
            boolean: "booléen",
            bigint: "grand entier",
            symbol: "symbole",
            undefined: "indéfini",
            null: "null",
            never: "jamais",
            void: "vide",
            date: "date",
            array: "tableau",
            object: "objet",
            tuple: "tuple",
            record: "enregistrement",
            map: "carte",
            set: "ensemble",
            file: "fichier",
            nonoptional: "non-optionnel",
            nan: "NaN",
            function: "fonction",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Entrée invalide : instanceof ${_.expected} attendu, ${_} reçu`
                : `Entrée invalide : ${_} attendu, ${_} reçu`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Entrée invalide : ${_._(_.values[0])} attendu`
                : `Option invalide : une valeur parmi ${_._(_.values, "|")} attendue`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Trop grand : ${_[_.origin] ?? "valeur"} doit ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "élément(s)"}`
                : `Trop grand : ${_[_.origin] ?? "valeur"} doit être ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Trop petit : ${_[_.origin] ?? "valeur"} doit ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                : `Trop petit : ${_[_.origin] ?? "valeur"} doit être ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Chaîne invalide : doit commencer par "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Chaîne invalide : doit se terminer par "${_.suffix}"`
                  : "includes" === _.format
                    ? `Chaîne invalide : doit inclure "${_.includes}"`
                    : "regex" === _.format
                      ? `Chaîne invalide : doit correspondre au modèle ${_.pattern}`
                      : `${_[_.format] ?? _.format} invalide`;
            }
            case "not_multiple_of":
              return `Nombre invalide : doit être un multiple de ${_.divisor}`;
            case "unrecognized_keys":
              return `Clé${_.keys.length > 1 ? "s" : ""} non reconnue${_.keys.length > 1 ? "s" : ""} : ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Clé invalide dans ${_.origin}`;
            case "invalid_union":
            default:
              return "Entrée invalide";
            case "invalid_element":
              return `Valeur invalide dans ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "caractères",
            verb: "avoir",
          },
          file: {
            unit: "octets",
            verb: "avoir",
          },
          array: {
            unit: "éléments",
            verb: "avoir",
          },
          set: {
            unit: "éléments",
            verb: "avoir",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "entrée",
            email: "adresse courriel",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "date-heure ISO",
            date: "date ISO",
            time: "heure ISO",
            duration: "durée ISO",
            ipv4: "adresse IPv4",
            ipv6: "adresse IPv6",
            cidrv4: "plage IPv4",
            cidrv6: "plage IPv6",
            base64: "chaîne encodée en base64",
            base64url: "chaîne encodée en base64url",
            json_string: "chaîne JSON",
            e164: "numéro E.164",
            jwt: "JWT",
            template_literal: "entrée",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Entrée invalide : attendu instanceof ${_.expected}, reçu ${_}`
                : `Entrée invalide : attendu ${_}, reçu ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Entrée invalide : attendu ${_._(_.values[0])}`
                : `Option invalide : attendu l'une des valeurs suivantes ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "≤" : "<",
                _ = _(_.origin);
              return _
                ? `Trop grand : attendu que ${_.origin ?? "la valeur"} ait ${_}${_.maximum.toString()} ${_.unit}`
                : `Trop grand : attendu que ${_.origin ?? "la valeur"} soit ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? "≥" : ">",
                _ = _(_.origin);
              return _
                ? `Trop petit : attendu que ${_.origin} ait ${_}${_.minimum.toString()} ${_.unit}`
                : `Trop petit : attendu que ${_.origin} soit ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Chaîne invalide : doit commencer par "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Chaîne invalide : doit se terminer par "${_.suffix}"`
                  : "includes" === _.format
                    ? `Chaîne invalide : doit inclure "${_.includes}"`
                    : "regex" === _.format
                      ? `Chaîne invalide : doit correspondre au motif ${_.pattern}`
                      : `${_[_.format] ?? _.format} invalide`;
            }
            case "not_multiple_of":
              return `Nombre invalide : doit être un multiple de ${_.divisor}`;
            case "unrecognized_keys":
              return `Clé${_.keys.length > 1 ? "s" : ""} non reconnue${_.keys.length > 1 ? "s" : ""} : ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Clé invalide dans ${_.origin}`;
            case "invalid_union":
            default:
              return "Entrée invalide";
            case "invalid_element":
              return `Valeur invalide dans ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
            string: {
              label: "מחרוזת",
              gender: "f",
            },
            number: {
              label: "מספר",
              gender: "m",
            },
            boolean: {
              label: "ערך בוליאני",
              gender: "m",
            },
            bigint: {
              label: "BigInt",
              gender: "m",
            },
            date: {
              label: "תאריך",
              gender: "m",
            },
            array: {
              label: "מערך",
              gender: "m",
            },
            object: {
              label: "אובייקט",
              gender: "m",
            },
            null: {
              label: "ערך ריק (null)",
              gender: "m",
            },
            undefined: {
              label: "ערך לא מוגדר (undefined)",
              gender: "m",
            },
            symbol: {
              label: "סימבול (Symbol)",
              gender: "m",
            },
            function: {
              label: "פונקציה",
              gender: "f",
            },
            map: {
              label: "מפה (Map)",
              gender: "f",
            },
            set: {
              label: "קבוצה (Set)",
              gender: "f",
            },
            file: {
              label: "קובץ",
              gender: "m",
            },
            promise: {
              label: "Promise",
              gender: "m",
            },
            NaN: {
              label: "NaN",
              gender: "m",
            },
            unknown: {
              label: "ערך לא ידוע",
              gender: "m",
            },
            value: {
              label: "ערך",
              gender: "m",
            },
          },
          _ = {
            string: {
              unit: "תווים",
              shortLabel: "קצר",
              longLabel: "ארוך",
            },
            file: {
              unit: "בייטים",
              shortLabel: "קטן",
              longLabel: "גדול",
            },
            array: {
              unit: "פריטים",
              shortLabel: "קטן",
              longLabel: "גדול",
            },
            set: {
              unit: "פריטים",
              shortLabel: "קטן",
              longLabel: "גדול",
            },
            number: {
              unit: "",
              shortLabel: "קטן",
              longLabel: "גדול",
            },
          },
          _ = (_) => (_ ? _[_] : void 0),
          _ = (_) => {
            const _ = __webpack_require__(_);
            return _ ? _.label : (_ ?? _.unknown.label);
          },
          _ = (_) => `ה${_(_)}`,
          _ = (_) => {
            const _ = __webpack_require__(_);
            return "f" === (_?.gender ?? "m") ? "צריכה להיות" : "צריך להיות";
          },
          _ = (_) => (_ ? (_[_] ?? null) : null),
          _ = {
            regex: {
              label: "קלט",
              gender: "m",
            },
            email: {
              label: "כתובת אימייל",
              gender: "f",
            },
            url: {
              label: "כתובת רשת",
              gender: "f",
            },
            emoji: {
              label: "אימוג'י",
              gender: "m",
            },
            uuid: {
              label: "UUID",
              gender: "m",
            },
            nanoid: {
              label: "nanoid",
              gender: "m",
            },
            guid: {
              label: "GUID",
              gender: "m",
            },
            cuid: {
              label: "cuid",
              gender: "m",
            },
            cuid2: {
              label: "cuid2",
              gender: "m",
            },
            ulid: {
              label: "ULID",
              gender: "m",
            },
            xid: {
              label: "XID",
              gender: "m",
            },
            ksuid: {
              label: "KSUID",
              gender: "m",
            },
            datetime: {
              label: "תאריך וזמן ISO",
              gender: "m",
            },
            date: {
              label: "תאריך ISO",
              gender: "m",
            },
            time: {
              label: "זמן ISO",
              gender: "m",
            },
            duration: {
              label: "משך זמן ISO",
              gender: "m",
            },
            ipv4: {
              label: "כתובת IPv4",
              gender: "f",
            },
            ipv6: {
              label: "כתובת IPv6",
              gender: "f",
            },
            cidrv4: {
              label: "טווח IPv4",
              gender: "m",
            },
            cidrv6: {
              label: "טווח IPv6",
              gender: "m",
            },
            base64: {
              label: "מחרוזת בבסיס 64",
              gender: "f",
            },
            base64url: {
              label: "מחרוזת בבסיס 64 לכתובות רשת",
              gender: "f",
            },
            json_string: {
              label: "מחרוזת JSON",
              gender: "f",
            },
            e164: {
              label: "מספר E.164",
              gender: "m",
            },
            jwt: {
              label: "JWT",
              gender: "m",
            },
            ends_with: {
              label: "קלט",
              gender: "m",
            },
            includes: {
              label: "קלט",
              gender: "m",
            },
            lowercase: {
              label: "קלט",
              gender: "m",
            },
            starts_with: {
              label: "קלט",
              gender: "m",
            },
            uppercase: {
              label: "קלט",
              gender: "m",
            },
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _.expected,
                _ = _[_ ?? ""] ?? _(_),
                _ = _._(_.input),
                _ = _[_] ?? _[_]?.label ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `קלט לא תקין: צריך להיות instanceof ${_.expected}, התקבל ${_}`
                : `קלט לא תקין: צריך להיות ${_}, התקבל ${_}`;
            }
            case "invalid_value": {
              if (1 === _.values.length)
                return `ערך לא תקין: הערך חייב להיות ${_._(_.values[0])}`;
              const _ = _.values.map((_) => _._(_));
              if (2 === _.values.length)
                return `ערך לא תקין: האפשרויות המתאימות הן ${_[0]} או ${_[1]}`;
              const _ = _[_.length - 1];
              return `ערך לא תקין: האפשרויות המתאימות הן ${_.slice(0, -1).join(", ")} או ${_}`;
            }
            case "too_big": {
              const _ = _(_.origin),
                _ = _(_.origin ?? "value");
              if ("string" === _.origin)
                return `${_?.longLabel ?? "ארוך"} מדי: ${_} צריכה להכיל ${_.maximum.toString()} ${_?.unit ?? ""} ${_.inclusive ? "או פחות" : "לכל היותר"}`.trim();
              if ("number" === _.origin) {
                return `גדול מדי: ${_} צריך להיות ${_.inclusive ? `קטן או שווה ל-${_.maximum}` : `קטן מ-${_.maximum}`}`;
              }
              if ("array" === _.origin || "set" === _.origin) {
                return `גדול מדי: ${_} ${"set" === _.origin ? "צריכה" : "צריך"} להכיל ${_.inclusive ? `${_.maximum} ${_?.unit ?? ""} או פחות` : `פחות מ-${_.maximum} ${_?.unit ?? ""}`}`.trim();
              }
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin ?? "value");
              return _?.unit
                ? `${_.longLabel} מדי: ${_} ${_} ${_}${_.maximum.toString()} ${_.unit}`
                : `${_?.longLabel ?? "גדול"} מדי: ${_} ${_} ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _(_.origin),
                _ = _(_.origin ?? "value");
              if ("string" === _.origin)
                return `${_?.shortLabel ?? "קצר"} מדי: ${_} צריכה להכיל ${_.minimum.toString()} ${_?.unit ?? ""} ${_.inclusive ? "או יותר" : "לפחות"}`.trim();
              if ("number" === _.origin) {
                return `קטן מדי: ${_} צריך להיות ${_.inclusive ? `גדול או שווה ל-${_.minimum}` : `גדול מ-${_.minimum}`}`;
              }
              if ("array" === _.origin || "set" === _.origin) {
                const _ = "set" === _.origin ? "צריכה" : "צריך";
                if (1 === _.minimum && _.inclusive) {
                  return `קטן מדי: ${_} ${_} להכיל ${(_.origin, "לפחות פריט אחד")}`;
                }
                return `קטן מדי: ${_} ${_} להכיל ${_.inclusive ? `${_.minimum} ${_?.unit ?? ""} או יותר` : `יותר מ-${_.minimum} ${_?.unit ?? ""}`}`.trim();
              }
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin ?? "value");
              return _?.unit
                ? `${_.shortLabel} מדי: ${_} ${_} ${_}${_.minimum.toString()} ${_.unit}`
                : `${_?.shortLabel ?? "קטן"} מדי: ${_} ${_} ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              if ("starts_with" === _.format)
                return `המחרוזת חייבת להתחיל ב "${_.prefix}"`;
              if ("ends_with" === _.format)
                return `המחרוזת חייבת להסתיים ב "${_.suffix}"`;
              if ("includes" === _.format)
                return `המחרוזת חייבת לכלול "${_.includes}"`;
              if ("regex" === _.format)
                return `המחרוזת חייבת להתאים לתבנית ${_.pattern}`;
              const _ = _[_.format];
              return `${_?.label ?? _.format} לא ${"f" === (_?.gender ?? "m") ? "תקינה" : "תקין"}`;
            }
            case "not_multiple_of":
              return `מספר לא תקין: חייב להיות מכפלה של ${_.divisor}`;
            case "unrecognized_keys":
              return `מפתח${_.keys.length > 1 ? "ות" : ""} לא מזוה${_.keys.length > 1 ? "ים" : "ה"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return "שדה לא תקין באובייקט";
            case "invalid_union":
            default:
              return "קלט לא תקין";
            case "invalid_element":
              return `ערך לא תקין ב${_(_.origin ?? "array")}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "znakova",
            verb: "imati",
          },
          file: {
            unit: "bajtova",
            verb: "imati",
          },
          array: {
            unit: "stavki",
            verb: "imati",
          },
          set: {
            unit: "stavki",
            verb: "imati",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "unos",
            email: "email adresa",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datum i vrijeme",
            date: "ISO datum",
            time: "ISO vrijeme",
            duration: "ISO trajanje",
            ipv4: "IPv4 adresa",
            ipv6: "IPv6 adresa",
            cidrv4: "IPv4 raspon",
            cidrv6: "IPv6 raspon",
            base64: "base64 kodirani tekst",
            base64url: "base64url kodirani tekst",
            json_string: "JSON tekst",
            e164: "E.164 broj",
            jwt: "JWT",
            template_literal: "unos",
          },
          _ = {
            nan: "NaN",
            string: "tekst",
            number: "broj",
            boolean: "boolean",
            array: "niz",
            object: "objekt",
            set: "skup",
            file: "datoteka",
            date: "datum",
            bigint: "bigint",
            symbol: "simbol",
            undefined: "undefined",
            null: "null",
            function: "funkcija",
            map: "mapa",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Neispravan unos: očekuje se instanceof ${_.expected}, a primljeno je ${_}`
                : `Neispravan unos: očekuje se ${_}, a primljeno je ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Neispravna vrijednost: očekivano ${_._(_.values[0])}`
                : `Neispravna opcija: očekivano jedno od ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin),
                _ = _[_.origin] ?? _.origin;
              return _
                ? `Preveliko: očekivano da ${_ ?? "vrijednost"} ima ${_}${_.maximum.toString()} ${_.unit ?? "elemenata"}`
                : `Preveliko: očekivano da ${_ ?? "vrijednost"} bude ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin),
                _ = _[_.origin] ?? _.origin;
              return _
                ? `Premalo: očekivano da ${_} ima ${_}${_.minimum.toString()} ${_.unit}`
                : `Premalo: očekivano da ${_} bude ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Neispravan tekst: mora započinjati s "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Neispravan tekst: mora završavati s "${_.suffix}"`
                  : "includes" === _.format
                    ? `Neispravan tekst: mora sadržavati "${_.includes}"`
                    : "regex" === _.format
                      ? `Neispravan tekst: mora odgovarati uzorku ${_.pattern}`
                      : `Neispravna ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Neispravan broj: mora biti višekratnik od ${_.divisor}`;
            case "unrecognized_keys":
              return `Neprepoznat${_.keys.length > 1 ? "i ključevi" : " ključ"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Neispravan ključ u ${_[_.origin] ?? _.origin}`;
            case "invalid_union":
            default:
              return "Neispravan unos";
            case "invalid_element":
              return `Neispravna vrijednost u ${_[_.origin] ?? _.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "karakter",
            verb: "legyen",
          },
          file: {
            unit: "byte",
            verb: "legyen",
          },
          array: {
            unit: "elem",
            verb: "legyen",
          },
          set: {
            unit: "elem",
            verb: "legyen",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "bemenet",
            email: "email cím",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO időbélyeg",
            date: "ISO dátum",
            time: "ISO idő",
            duration: "ISO időintervallum",
            ipv4: "IPv4 cím",
            ipv6: "IPv6 cím",
            cidrv4: "IPv4 tartomány",
            cidrv6: "IPv6 tartomány",
            base64: "base64-kódolt string",
            base64url: "base64url-kódolt string",
            json_string: "JSON string",
            e164: "E.164 szám",
            jwt: "JWT",
            template_literal: "bemenet",
          },
          _ = {
            nan: "NaN",
            number: "szám",
            array: "tömb",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Érvénytelen bemenet: a várt érték instanceof ${_.expected}, a kapott érték ${_}`
                : `Érvénytelen bemenet: a várt érték ${_}, a kapott érték ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Érvénytelen bemenet: a várt érték ${_._(_.values[0])}`
                : `Érvénytelen opció: valamelyik érték várt ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Túl nagy: ${_.origin ?? "érték"} mérete túl nagy ${_}${_.maximum.toString()} ${_.unit ?? "elem"}`
                : `Túl nagy: a bemeneti érték ${_.origin ?? "érték"} túl nagy: ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Túl kicsi: a bemeneti érték ${_.origin} mérete túl kicsi ${_}${_.minimum.toString()} ${_.unit}`
                : `Túl kicsi: a bemeneti érték ${_.origin} túl kicsi ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Érvénytelen string: "${_.prefix}" értékkel kell kezdődnie`
                : "ends_with" === _.format
                  ? `Érvénytelen string: "${_.suffix}" értékkel kell végződnie`
                  : "includes" === _.format
                    ? `Érvénytelen string: "${_.includes}" értéket kell tartalmaznia`
                    : "regex" === _.format
                      ? `Érvénytelen string: ${_.pattern} mintának kell megfelelnie`
                      : `Érvénytelen ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Érvénytelen szám: ${_.divisor} többszörösének kell lennie`;
            case "unrecognized_keys":
              return `Ismeretlen kulcs${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Érvénytelen kulcs ${_.origin}`;
            case "invalid_union":
            default:
              return "Érvénytelen bemenet";
            case "invalid_element":
              return `Érvénytelen érték: ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      function _(_, _, _) {
        return 1 === Math.abs(_) ? _ : _;
      }
      function _(_) {
        if (!_) return "";
        const _ = _[_.length - 1];
        return (
          _ + (["ա", "ե", "ը", "ի", "ո", "ու", "օ"].includes(_) ? "ն" : "ը")
        );
      }
      const _ = () => {
        const _ = {
          string: {
            unit: {
              one: "նշան",
              many: "նշաններ",
            },
            verb: "ունենալ",
          },
          file: {
            unit: {
              one: "բայթ",
              many: "բայթեր",
            },
            verb: "ունենալ",
          },
          array: {
            unit: {
              one: "տարր",
              many: "տարրեր",
            },
            verb: "ունենալ",
          },
          set: {
            unit: {
              one: "տարր",
              many: "տարրեր",
            },
            verb: "ունենալ",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "մուտք",
            email: "էլ. հասցե",
            url: "URL",
            emoji: "էմոջի",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO ամսաթիվ և ժամ",
            date: "ISO ամսաթիվ",
            time: "ISO ժամ",
            duration: "ISO տևողություն",
            ipv4: "IPv4 հասցե",
            ipv6: "IPv6 հասցե",
            cidrv4: "IPv4 միջակայք",
            cidrv6: "IPv6 միջակայք",
            base64: "base64 ձևաչափով տող",
            base64url: "base64url ձևաչափով տող",
            json_string: "JSON տող",
            e164: "E.164 համար",
            jwt: "JWT",
            template_literal: "մուտք",
          },
          _ = {
            nan: "NaN",
            number: "թիվ",
            array: "զանգված",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${_.expected}, ստացվել է ${_}`
                : `Սխալ մուտքագրում․ սպասվում էր ${_}, ստացվել է ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Սխալ մուտքագրում․ սպասվում էր ${_._(_.values[1])}`
                : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              if (_) {
                const _ = _(Number(_.maximum), _.unit.one, _.unit.many);
                return `Չափազանց մեծ արժեք․ սպասվում է, որ ${_(_.origin ?? "արժեք")} կունենա ${_}${_.maximum.toString()} ${_}`;
              }
              return `Չափազանց մեծ արժեք․ սպասվում է, որ ${_(_.origin ?? "արժեք")} լինի ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              if (_) {
                const _ = _(Number(_.minimum), _.unit.one, _.unit.many);
                return `Չափազանց փոքր արժեք․ սպասվում է, որ ${_(_.origin)} կունենա ${_}${_.minimum.toString()} ${_}`;
              }
              return `Չափազանց փոքր արժեք․ սպասվում է, որ ${_(_.origin)} լինի ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Սխալ տող․ պետք է սկսվի "${_.prefix}"-ով`
                : "ends_with" === _.format
                  ? `Սխալ տող․ պետք է ավարտվի "${_.suffix}"-ով`
                  : "includes" === _.format
                    ? `Սխալ տող․ պետք է պարունակի "${_.includes}"`
                    : "regex" === _.format
                      ? `Սխալ տող․ պետք է համապատասխանի ${_.pattern} ձևաչափին`
                      : `Սխալ ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${_.divisor}-ի`;
            case "unrecognized_keys":
              return `Չճանաչված բանալի${_.keys.length > 1 ? "ներ" : ""}. ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Սխալ բանալի ${_(_.origin)}-ում`;
            case "invalid_union":
            default:
              return "Սխալ մուտքագրում";
            case "invalid_element":
              return `Սխալ արժեք ${_(_.origin)}-ում`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "karakter",
            verb: "memiliki",
          },
          file: {
            unit: "byte",
            verb: "memiliki",
          },
          array: {
            unit: "item",
            verb: "memiliki",
          },
          set: {
            unit: "item",
            verb: "memiliki",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "input",
            email: "alamat email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "tanggal dan waktu format ISO",
            date: "tanggal format ISO",
            time: "jam format ISO",
            duration: "durasi format ISO",
            ipv4: "alamat IPv4",
            ipv6: "alamat IPv6",
            cidrv4: "rentang alamat IPv4",
            cidrv6: "rentang alamat IPv6",
            base64: "string dengan enkode base64",
            base64url: "string dengan enkode base64url",
            json_string: "string JSON",
            e164: "angka E.164",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Input tidak valid: diharapkan instanceof ${_.expected}, diterima ${_}`
                : `Input tidak valid: diharapkan ${_}, diterima ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Input tidak valid: diharapkan ${_._(_.values[0])}`
                : `Pilihan tidak valid: diharapkan salah satu dari ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Terlalu besar: diharapkan ${_.origin ?? "value"} memiliki ${_}${_.maximum.toString()} ${_.unit ?? "elemen"}`
                : `Terlalu besar: diharapkan ${_.origin ?? "value"} menjadi ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Terlalu kecil: diharapkan ${_.origin} memiliki ${_}${_.minimum.toString()} ${_.unit}`
                : `Terlalu kecil: diharapkan ${_.origin} menjadi ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `String tidak valid: harus dimulai dengan "${_.prefix}"`
                : "ends_with" === _.format
                  ? `String tidak valid: harus berakhir dengan "${_.suffix}"`
                  : "includes" === _.format
                    ? `String tidak valid: harus menyertakan "${_.includes}"`
                    : "regex" === _.format
                      ? `String tidak valid: harus sesuai pola ${_.pattern}`
                      : `${_[_.format] ?? _.format} tidak valid`;
            }
            case "not_multiple_of":
              return `Angka tidak valid: harus kelipatan dari ${_.divisor}`;
            case "unrecognized_keys":
              return `Kunci tidak dikenali ${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Kunci tidak valid di ${_.origin}`;
            case "invalid_union":
            default:
              return "Input tidak valid";
            case "invalid_element":
              return `Nilai tidak valid di ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "stafi",
            verb: "að hafa",
          },
          file: {
            unit: "bæti",
            verb: "að hafa",
          },
          array: {
            unit: "hluti",
            verb: "að hafa",
          },
          set: {
            unit: "hluti",
            verb: "að hafa",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "gildi",
            email: "netfang",
            url: "vefslóð",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO dagsetning og tími",
            date: "ISO dagsetning",
            time: "ISO tími",
            duration: "ISO tímalengd",
            ipv4: "IPv4 address",
            ipv6: "IPv6 address",
            cidrv4: "IPv4 range",
            cidrv6: "IPv6 range",
            base64: "base64-encoded strengur",
            base64url: "base64url-encoded strengur",
            json_string: "JSON strengur",
            e164: "E.164 tölugildi",
            jwt: "JWT",
            template_literal: "gildi",
          },
          _ = {
            nan: "NaN",
            number: "númer",
            array: "fylki",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Rangt gildi: Þú slóst inn ${_} þar sem á að vera instanceof ${_.expected}`
                : `Rangt gildi: Þú slóst inn ${_} þar sem á að vera ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Rangt gildi: gert ráð fyrir ${_._(_.values[0])}`
                : `Ógilt val: má vera eitt af eftirfarandi ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Of stórt: gert er ráð fyrir að ${_.origin ?? "gildi"} hafi ${_}${_.maximum.toString()} ${_.unit ?? "hluti"}`
                : `Of stórt: gert er ráð fyrir að ${_.origin ?? "gildi"} sé ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Of lítið: gert er ráð fyrir að ${_.origin} hafi ${_}${_.minimum.toString()} ${_.unit}`
                : `Of lítið: gert er ráð fyrir að ${_.origin} sé ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Ógildur strengur: verður að byrja á "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Ógildur strengur: verður að enda á "${_.suffix}"`
                  : "includes" === _.format
                    ? `Ógildur strengur: verður að innihalda "${_.includes}"`
                    : "regex" === _.format
                      ? `Ógildur strengur: verður að fylgja mynstri ${_.pattern}`
                      : `Rangt ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Röng tala: verður að vera margfeldi af ${_.divisor}`;
            case "unrecognized_keys":
              return `Óþekkt ${_.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Rangur lykill í ${_.origin}`;
            case "invalid_union":
            default:
              return "Rangt gildi";
            case "invalid_element":
              return `Rangt gildi í ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "caratteri",
            verb: "avere",
          },
          file: {
            unit: "byte",
            verb: "avere",
          },
          array: {
            unit: "elementi",
            verb: "avere",
          },
          set: {
            unit: "elementi",
            verb: "avere",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "input",
            email: "indirizzo email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data e ora ISO",
            date: "data ISO",
            time: "ora ISO",
            duration: "durata ISO",
            ipv4: "indirizzo IPv4",
            ipv6: "indirizzo IPv6",
            cidrv4: "intervallo IPv4",
            cidrv6: "intervallo IPv6",
            base64: "stringa codificata in base64",
            base64url: "URL codificata in base64",
            json_string: "stringa JSON",
            e164: "numero E.164",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
            number: "numero",
            array: "vettore",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Input non valido: atteso instanceof ${_.expected}, ricevuto ${_}`
                : `Input non valido: atteso ${_}, ricevuto ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Input non valido: atteso ${_._(_.values[0])}`
                : `Opzione non valida: atteso uno tra ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Troppo grande: ${_.origin ?? "valore"} deve avere ${_}${_.maximum.toString()} ${_.unit ?? "elementi"}`
                : `Troppo grande: ${_.origin ?? "valore"} deve essere ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Troppo piccolo: ${_.origin} deve avere ${_}${_.minimum.toString()} ${_.unit}`
                : `Troppo piccolo: ${_.origin} deve essere ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Stringa non valida: deve iniziare con "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Stringa non valida: deve terminare con "${_.suffix}"`
                  : "includes" === _.format
                    ? `Stringa non valida: deve includere "${_.includes}"`
                    : "regex" === _.format
                      ? `Stringa non valida: deve corrispondere al pattern ${_.pattern}`
                      : `Input non valido: ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Numero non valido: deve essere un multiplo di ${_.divisor}`;
            case "unrecognized_keys":
              return `Chiav${_.keys.length > 1 ? "i" : "e"} non riconosciut${_.keys.length > 1 ? "e" : "a"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Chiave non valida in ${_.origin}`;
            case "invalid_union":
            default:
              return "Input non valido";
            case "invalid_element":
              return `Valore non valido in ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "文字",
            verb: "である",
          },
          file: {
            unit: "バイト",
            verb: "である",
          },
          array: {
            unit: "要素",
            verb: "である",
          },
          set: {
            unit: "要素",
            verb: "である",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "入力値",
            email: "メールアドレス",
            url: "URL",
            emoji: "絵文字",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO日時",
            date: "ISO日付",
            time: "ISO時刻",
            duration: "ISO期間",
            ipv4: "IPv4アドレス",
            ipv6: "IPv6アドレス",
            cidrv4: "IPv4範囲",
            cidrv6: "IPv6範囲",
            base64: "base64エンコード文字列",
            base64url: "base64urlエンコード文字列",
            json_string: "JSON文字列",
            e164: "E.164番号",
            jwt: "JWT",
            template_literal: "入力値",
          },
          _ = {
            nan: "NaN",
            number: "数値",
            array: "配列",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `無効な入力: instanceof ${_.expected}が期待されましたが、${_}が入力されました`
                : `無効な入力: ${_}が期待されましたが、${_}が入力されました`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `無効な入力: ${_._(_.values[0])}が期待されました`
                : `無効な選択: ${_._(_.values, "、")}のいずれかである必要があります`;
            case "too_big": {
              const _ = _.inclusive ? "以下である" : "より小さい",
                _ = _(_.origin);
              return _
                ? `大きすぎる値: ${_.origin ?? "値"}は${_.maximum.toString()}${_.unit ?? "要素"}${_}必要があります`
                : `大きすぎる値: ${_.origin ?? "値"}は${_.maximum.toString()}${_}必要があります`;
            }
            case "too_small": {
              const _ = _.inclusive ? "以上である" : "より大きい",
                _ = _(_.origin);
              return _
                ? `小さすぎる値: ${_.origin}は${_.minimum.toString()}${_.unit}${_}必要があります`
                : `小さすぎる値: ${_.origin}は${_.minimum.toString()}${_}必要があります`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `無効な文字列: "${_.prefix}"で始まる必要があります`
                : "ends_with" === _.format
                  ? `無効な文字列: "${_.suffix}"で終わる必要があります`
                  : "includes" === _.format
                    ? `無効な文字列: "${_.includes}"を含む必要があります`
                    : "regex" === _.format
                      ? `無効な文字列: パターン${_.pattern}に一致する必要があります`
                      : `無効な${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `無効な数値: ${_.divisor}の倍数である必要があります`;
            case "unrecognized_keys":
              return `認識されていないキー${_.keys.length > 1 ? "群" : ""}: ${_._(_.keys, "、")}`;
            case "invalid_key":
              return `${_.origin}内の無効なキー`;
            case "invalid_union":
            default:
              return "無効な入力";
            case "invalid_element":
              return `${_.origin}内の無効な値`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "სიმბოლო",
            verb: "უნდა შეიცავდეს",
          },
          file: {
            unit: "ბაიტი",
            verb: "უნდა შეიცავდეს",
          },
          array: {
            unit: "ელემენტი",
            verb: "უნდა შეიცავდეს",
          },
          set: {
            unit: "ელემენტი",
            verb: "უნდა შეიცავდეს",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "შეყვანა",
            email: "ელ-ფოსტის მისამართი",
            url: "URL",
            emoji: "ემოჯი",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "თარიღი-დრო",
            date: "თარიღი",
            time: "დრო",
            duration: "ხანგრძლივობა",
            ipv4: "IPv4 მისამართი",
            ipv6: "IPv6 მისამართი",
            cidrv4: "IPv4 დიაპაზონი",
            cidrv6: "IPv6 დიაპაზონი",
            base64: "base64-კოდირებული ველი",
            base64url: "base64url-კოდირებული ველი",
            json_string: "JSON ველი",
            e164: "E.164 ნომერი",
            jwt: "JWT",
            template_literal: "შეყვანა",
          },
          _ = {
            nan: "NaN",
            number: "რიცხვი",
            string: "ველი",
            boolean: "ბულეანი",
            function: "ფუნქცია",
            array: "მასივი",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${_.expected}, მიღებული ${_}`
                : `არასწორი შეყვანა: მოსალოდნელი ${_}, მიღებული ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `არასწორი შეყვანა: მოსალოდნელი ${_._(_.values[0])}`
                : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${_._(_.values, "|")}-დან`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `ზედმეტად დიდი: მოსალოდნელი ${_.origin ?? "მნიშვნელობა"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit}`
                : `ზედმეტად დიდი: მოსალოდნელი ${_.origin ?? "მნიშვნელობა"} იყოს ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `ზედმეტად პატარა: მოსალოდნელი ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                : `ზედმეტად პატარა: მოსალოდნელი ${_.origin} იყოს ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `არასწორი ველი: უნდა იწყებოდეს "${_.prefix}"-ით`
                : "ends_with" === _.format
                  ? `არასწორი ველი: უნდა მთავრდებოდეს "${_.suffix}"-ით`
                  : "includes" === _.format
                    ? `არასწორი ველი: უნდა შეიცავდეს "${_.includes}"-ს`
                    : "regex" === _.format
                      ? `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${_.pattern}`
                      : `არასწორი ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `არასწორი რიცხვი: უნდა იყოს ${_.divisor}-ის ჯერადი`;
            case "unrecognized_keys":
              return `უცნობი გასაღებ${_.keys.length > 1 ? "ები" : "ი"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `არასწორი გასაღები ${_.origin}-ში`;
            case "invalid_union":
            default:
              return "არასწორი შეყვანა";
            case "invalid_element":
              return `არასწორი მნიშვნელობა ${_.origin}-ში`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "តួអក្សរ",
            verb: "គួរមាន",
          },
          file: {
            unit: "បៃ",
            verb: "គួរមាន",
          },
          array: {
            unit: "ធាតុ",
            verb: "គួរមាន",
          },
          set: {
            unit: "ធាតុ",
            verb: "គួរមាន",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "ទិន្នន័យបញ្ចូល",
            email: "អាសយដ្ឋានអ៊ីមែល",
            url: "URL",
            emoji: "សញ្ញាអារម្មណ៍",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
            date: "កាលបរិច្ឆេទ ISO",
            time: "ម៉ោង ISO",
            duration: "រយៈពេល ISO",
            ipv4: "អាសយដ្ឋាន IPv4",
            ipv6: "អាសយដ្ឋាន IPv6",
            cidrv4: "ដែនអាសយដ្ឋាន IPv4",
            cidrv6: "ដែនអាសយដ្ឋាន IPv6",
            base64: "ខ្សែអក្សរអ៊ិកូដ base64",
            base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
            json_string: "ខ្សែអក្សរ JSON",
            e164: "លេខ E.164",
            jwt: "JWT",
            template_literal: "ទិន្នន័យបញ្ចូល",
          },
          _ = {
            nan: "NaN",
            number: "លេខ",
            array: "អារេ (Array)",
            null: "គ្មានតម្លៃ (null)",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${_.expected} ប៉ុន្តែទទួលបាន ${_}`
                : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${_} ប៉ុន្តែទទួលបាន ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${_._(_.values[0])}`
                : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `ធំពេក៖ ត្រូវការ ${_.origin ?? "តម្លៃ"} ${_} ${_.maximum.toString()} ${_.unit ?? "ធាតុ"}`
                : `ធំពេក៖ ត្រូវការ ${_.origin ?? "តម្លៃ"} ${_} ${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `តូចពេក៖ ត្រូវការ ${_.origin} ${_} ${_.minimum.toString()} ${_.unit}`
                : `តូចពេក៖ ត្រូវការ ${_.origin} ${_} ${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${_.prefix}"`
                : "ends_with" === _.format
                  ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${_.suffix}"`
                  : "includes" === _.format
                    ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${_.includes}"`
                    : "regex" === _.format
                      ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${_.pattern}`
                      : `មិនត្រឹមត្រូវ៖ ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${_.divisor}`;
            case "unrecognized_keys":
              return `រកឃើញសោមិនស្គាល់៖ ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `សោមិនត្រឹមត្រូវនៅក្នុង ${_.origin}`;
            case "invalid_union":
            default:
              return "ទិន្នន័យមិនត្រឹមត្រូវ";
            case "invalid_element":
              return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      function _() {
        return _();
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "문자",
            verb: "to have",
          },
          file: {
            unit: "바이트",
            verb: "to have",
          },
          array: {
            unit: "개",
            verb: "to have",
          },
          set: {
            unit: "개",
            verb: "to have",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "입력",
            email: "이메일 주소",
            url: "URL",
            emoji: "이모지",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO 날짜시간",
            date: "ISO 날짜",
            time: "ISO 시간",
            duration: "ISO 기간",
            ipv4: "IPv4 주소",
            ipv6: "IPv6 주소",
            cidrv4: "IPv4 범위",
            cidrv6: "IPv6 범위",
            base64: "base64 인코딩 문자열",
            base64url: "base64url 인코딩 문자열",
            json_string: "JSON 문자열",
            e164: "E.164 번호",
            jwt: "JWT",
            template_literal: "입력",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `잘못된 입력: 예상 타입은 instanceof ${_.expected}, 받은 타입은 ${_}입니다`
                : `잘못된 입력: 예상 타입은 ${_}, 받은 타입은 ${_}입니다`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `잘못된 입력: 값은 ${_._(_.values[0])} 이어야 합니다`
                : `잘못된 옵션: ${_._(_.values, "또는 ")} 중 하나여야 합니다`;
            case "too_big": {
              const _ = _.inclusive ? "이하" : "미만",
                _ = "미만" === _ ? "이어야 합니다" : "여야 합니다",
                _ = _(_.origin),
                _ = _?.unit ?? "요소";
              return _
                ? `${_.origin ?? "값"}이 너무 큽니다: ${_.maximum.toString()}${_} ${_}${_}`
                : `${_.origin ?? "값"}이 너무 큽니다: ${_.maximum.toString()} ${_}${_}`;
            }
            case "too_small": {
              const _ = _.inclusive ? "이상" : "초과",
                _ = "이상" === _ ? "이어야 합니다" : "여야 합니다",
                _ = _(_.origin),
                _ = _?.unit ?? "요소";
              return _
                ? `${_.origin ?? "값"}이 너무 작습니다: ${_.minimum.toString()}${_} ${_}${_}`
                : `${_.origin ?? "값"}이 너무 작습니다: ${_.minimum.toString()} ${_}${_}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `잘못된 문자열: "${_.prefix}"(으)로 시작해야 합니다`
                : "ends_with" === _.format
                  ? `잘못된 문자열: "${_.suffix}"(으)로 끝나야 합니다`
                  : "includes" === _.format
                    ? `잘못된 문자열: "${_.includes}"을(를) 포함해야 합니다`
                    : "regex" === _.format
                      ? `잘못된 문자열: 정규식 ${_.pattern} 패턴과 일치해야 합니다`
                      : `잘못된 ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `잘못된 숫자: ${_.divisor}의 배수여야 합니다`;
            case "unrecognized_keys":
              return `인식할 수 없는 키: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `잘못된 키: ${_.origin}`;
            case "invalid_union":
            default:
              return "잘못된 입력";
            case "invalid_element":
              return `잘못된 값: ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = (_) => _.charAt(0).toUpperCase() + _.slice(1);
      function _(_) {
        const _ = Math.abs(_),
          _ = _ % 10,
          _ = _ % 100;
        return (_ >= 11 && _ <= 19) || 0 === _
          ? "many"
          : 1 === _
            ? "one"
            : "few";
      }
      const _ = () => {
        const _ = {
          string: {
            unit: {
              one: "simbolis",
              few: "simboliai",
              many: "simbolių",
            },
            verb: {
              smaller: {
                inclusive: "turi būti ne ilgesnė kaip",
                notInclusive: "turi būti trumpesnė kaip",
              },
              bigger: {
                inclusive: "turi būti ne trumpesnė kaip",
                notInclusive: "turi būti ilgesnė kaip",
              },
            },
          },
          file: {
            unit: {
              one: "baitas",
              few: "baitai",
              many: "baitų",
            },
            verb: {
              smaller: {
                inclusive: "turi būti ne didesnis kaip",
                notInclusive: "turi būti mažesnis kaip",
              },
              bigger: {
                inclusive: "turi būti ne mažesnis kaip",
                notInclusive: "turi būti didesnis kaip",
              },
            },
          },
          array: {
            unit: {
              one: "elementą",
              few: "elementus",
              many: "elementų",
            },
            verb: {
              smaller: {
                inclusive: "turi turėti ne daugiau kaip",
                notInclusive: "turi turėti mažiau kaip",
              },
              bigger: {
                inclusive: "turi turėti ne mažiau kaip",
                notInclusive: "turi turėti daugiau kaip",
              },
            },
          },
          set: {
            unit: {
              one: "elementą",
              few: "elementus",
              many: "elementų",
            },
            verb: {
              smaller: {
                inclusive: "turi turėti ne daugiau kaip",
                notInclusive: "turi turėti mažiau kaip",
              },
              bigger: {
                inclusive: "turi turėti ne mažiau kaip",
                notInclusive: "turi turėti daugiau kaip",
              },
            },
          },
        };
        function _(_, _, _, _) {
          const _ = _[_] ?? null;
          return null === _
            ? _
            : {
                unit: _.unit[_],
                verb: _.verb[_][_ ? "inclusive" : "notInclusive"],
              };
        }
        const _ = {
            regex: "įvestis",
            email: "el. pašto adresas",
            url: "URL",
            emoji: "jaustukas",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO data ir laikas",
            date: "ISO data",
            time: "ISO laikas",
            duration: "ISO trukmė",
            ipv4: "IPv4 adresas",
            ipv6: "IPv6 adresas",
            cidrv4: "IPv4 tinklo prefiksas (CIDR)",
            cidrv6: "IPv6 tinklo prefiksas (CIDR)",
            base64: "base64 užkoduota eilutė",
            base64url: "base64url užkoduota eilutė",
            json_string: "JSON eilutė",
            e164: "E.164 numeris",
            jwt: "JWT",
            template_literal: "įvestis",
          },
          _ = {
            nan: "NaN",
            number: "skaičius",
            bigint: "sveikasis skaičius",
            string: "eilutė",
            boolean: "loginė reikšmė",
            undefined: "neapibrėžta reikšmė",
            function: "funkcija",
            symbol: "simbolis",
            array: "masyvas",
            object: "objektas",
            null: "nulinė reikšmė",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Gautas tipas ${_}, o tikėtasi - instanceof ${_.expected}`
                : `Gautas tipas ${_}, o tikėtasi - ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Privalo būti ${_._(_.values[0])}`
                : `Privalo būti vienas iš ${_._(_.values, "|")} pasirinkimų`;
            case "too_big": {
              const _ = _[_.origin] ?? _.origin,
                _ = _(
                  _.origin,
                  _(Number(_.maximum)),
                  _.inclusive ?? !1,
                  "smaller",
                );
              if (_?.verb)
                return `${_(_ ?? _.origin ?? "reikšmė")} ${_.verb} ${_.maximum.toString()} ${_.unit ?? "elementų"}`;
              const _ = _.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
              return `${_(_ ?? _.origin ?? "reikšmė")} turi būti ${_} ${_.maximum.toString()} ${_?.unit}`;
            }
            case "too_small": {
              const _ = _[_.origin] ?? _.origin,
                _ = _(
                  _.origin,
                  _(Number(_.minimum)),
                  _.inclusive ?? !1,
                  "bigger",
                );
              if (_?.verb)
                return `${_(_ ?? _.origin ?? "reikšmė")} ${_.verb} ${_.minimum.toString()} ${_.unit ?? "elementų"}`;
              const _ = _.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
              return `${_(_ ?? _.origin ?? "reikšmė")} turi būti ${_} ${_.minimum.toString()} ${_?.unit}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Eilutė privalo prasidėti "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Eilutė privalo pasibaigti "${_.suffix}"`
                  : "includes" === _.format
                    ? `Eilutė privalo įtraukti "${_.includes}"`
                    : "regex" === _.format
                      ? `Eilutė privalo atitikti ${_.pattern}`
                      : `Neteisingas ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Skaičius privalo būti ${_.divisor} kartotinis.`;
            case "unrecognized_keys":
              return `Neatpažint${_.keys.length > 1 ? "i" : "as"} rakt${_.keys.length > 1 ? "ai" : "as"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return "Rastas klaidingas raktas";
            case "invalid_union":
            default:
              return "Klaidinga įvestis";
            case "invalid_element": {
              const _ = _[_.origin] ?? _.origin;
              return `${_(_ ?? _.origin ?? "reikšmė")} turi klaidingą įvestį`;
            }
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "знаци",
            verb: "да имаат",
          },
          file: {
            unit: "бајти",
            verb: "да имаат",
          },
          array: {
            unit: "ставки",
            verb: "да имаат",
          },
          set: {
            unit: "ставки",
            verb: "да имаат",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "внес",
            email: "адреса на е-пошта",
            url: "URL",
            emoji: "емоџи",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO датум и време",
            date: "ISO датум",
            time: "ISO време",
            duration: "ISO времетраење",
            ipv4: "IPv4 адреса",
            ipv6: "IPv6 адреса",
            cidrv4: "IPv4 опсег",
            cidrv6: "IPv6 опсег",
            base64: "base64-енкодирана низа",
            base64url: "base64url-енкодирана низа",
            json_string: "JSON низа",
            e164: "E.164 број",
            jwt: "JWT",
            template_literal: "внес",
          },
          _ = {
            nan: "NaN",
            number: "број",
            array: "низа",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Грешен внес: се очекува instanceof ${_.expected}, примено ${_}`
                : `Грешен внес: се очекува ${_}, примено ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Invalid input: expected ${_._(_.values[0])}`
                : `Грешана опција: се очекува една ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Премногу голем: се очекува ${_.origin ?? "вредноста"} да има ${_}${_.maximum.toString()} ${_.unit ?? "елементи"}`
                : `Премногу голем: се очекува ${_.origin ?? "вредноста"} да биде ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Премногу мал: се очекува ${_.origin} да има ${_}${_.minimum.toString()} ${_.unit}`
                : `Премногу мал: се очекува ${_.origin} да биде ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Неважечка низа: мора да започнува со "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Неважечка низа: мора да завршува со "${_.suffix}"`
                  : "includes" === _.format
                    ? `Неважечка низа: мора да вклучува "${_.includes}"`
                    : "regex" === _.format
                      ? `Неважечка низа: мора да одгоара на патернот ${_.pattern}`
                      : `Invalid ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Грешен број: мора да биде делив со ${_.divisor}`;
            case "unrecognized_keys":
              return `${_.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Грешен клуч во ${_.origin}`;
            case "invalid_union":
            default:
              return "Грешен внес";
            case "invalid_element":
              return `Грешна вредност во ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "aksara",
            verb: "mempunyai",
          },
          file: {
            unit: "bait",
            verb: "mempunyai",
          },
          array: {
            unit: "elemen",
            verb: "mempunyai",
          },
          set: {
            unit: "elemen",
            verb: "mempunyai",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "input",
            email: "alamat e-mel",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "tarikh masa ISO",
            date: "tarikh ISO",
            time: "masa ISO",
            duration: "tempoh ISO",
            ipv4: "alamat IPv4",
            ipv6: "alamat IPv6",
            cidrv4: "julat IPv4",
            cidrv6: "julat IPv6",
            base64: "string dikodkan base64",
            base64url: "string dikodkan base64url",
            json_string: "string JSON",
            e164: "nombor E.164",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
            number: "nombor",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Input tidak sah: dijangka instanceof ${_.expected}, diterima ${_}`
                : `Input tidak sah: dijangka ${_}, diterima ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Input tidak sah: dijangka ${_._(_.values[0])}`
                : `Pilihan tidak sah: dijangka salah satu daripada ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Terlalu besar: dijangka ${_.origin ?? "nilai"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "elemen"}`
                : `Terlalu besar: dijangka ${_.origin ?? "nilai"} adalah ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Terlalu kecil: dijangka ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                : `Terlalu kecil: dijangka ${_.origin} adalah ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `String tidak sah: mesti bermula dengan "${_.prefix}"`
                : "ends_with" === _.format
                  ? `String tidak sah: mesti berakhir dengan "${_.suffix}"`
                  : "includes" === _.format
                    ? `String tidak sah: mesti mengandungi "${_.includes}"`
                    : "regex" === _.format
                      ? `String tidak sah: mesti sepadan dengan corak ${_.pattern}`
                      : `${_[_.format] ?? _.format} tidak sah`;
            }
            case "not_multiple_of":
              return `Nombor tidak sah: perlu gandaan ${_.divisor}`;
            case "unrecognized_keys":
              return `Kunci tidak dikenali: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Kunci tidak sah dalam ${_.origin}`;
            case "invalid_union":
            default:
              return "Input tidak sah";
            case "invalid_element":
              return `Nilai tidak sah dalam ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "tekens",
            verb: "heeft",
          },
          file: {
            unit: "bytes",
            verb: "heeft",
          },
          array: {
            unit: "elementen",
            verb: "heeft",
          },
          set: {
            unit: "elementen",
            verb: "heeft",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "invoer",
            email: "emailadres",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datum en tijd",
            date: "ISO datum",
            time: "ISO tijd",
            duration: "ISO duur",
            ipv4: "IPv4-adres",
            ipv6: "IPv6-adres",
            cidrv4: "IPv4-bereik",
            cidrv6: "IPv6-bereik",
            base64: "base64-gecodeerde tekst",
            base64url: "base64 URL-gecodeerde tekst",
            json_string: "JSON string",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "invoer",
          },
          _ = {
            nan: "NaN",
            number: "getal",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Ongeldige invoer: verwacht instanceof ${_.expected}, ontving ${_}`
                : `Ongeldige invoer: verwacht ${_}, ontving ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Ongeldige invoer: verwacht ${_._(_.values[0])}`
                : `Ongeldige optie: verwacht één van ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin),
                _ =
                  "date" === _.origin
                    ? "laat"
                    : "string" === _.origin
                      ? "lang"
                      : "groot";
              return _
                ? `Te ${_}: verwacht dat ${_.origin ?? "waarde"} ${_}${_.maximum.toString()} ${_.unit ?? "elementen"} ${_.verb}`
                : `Te ${_}: verwacht dat ${_.origin ?? "waarde"} ${_}${_.maximum.toString()} is`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin),
                _ =
                  "date" === _.origin
                    ? "vroeg"
                    : "string" === _.origin
                      ? "kort"
                      : "klein";
              return _
                ? `Te ${_}: verwacht dat ${_.origin} ${_}${_.minimum.toString()} ${_.unit} ${_.verb}`
                : `Te ${_}: verwacht dat ${_.origin} ${_}${_.minimum.toString()} is`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Ongeldige tekst: moet met "${_.prefix}" beginnen`
                : "ends_with" === _.format
                  ? `Ongeldige tekst: moet op "${_.suffix}" eindigen`
                  : "includes" === _.format
                    ? `Ongeldige tekst: moet "${_.includes}" bevatten`
                    : "regex" === _.format
                      ? `Ongeldige tekst: moet overeenkomen met patroon ${_.pattern}`
                      : `Ongeldig: ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Ongeldig getal: moet een veelvoud van ${_.divisor} zijn`;
            case "unrecognized_keys":
              return `Onbekende key${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Ongeldige key in ${_.origin}`;
            case "invalid_union":
            default:
              return "Ongeldige invoer";
            case "invalid_element":
              return `Ongeldige waarde in ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "tegn",
            verb: "å ha",
          },
          file: {
            unit: "bytes",
            verb: "å ha",
          },
          array: {
            unit: "elementer",
            verb: "å inneholde",
          },
          set: {
            unit: "elementer",
            verb: "å inneholde",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "input",
            email: "e-postadresse",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO dato- og klokkeslett",
            date: "ISO-dato",
            time: "ISO-klokkeslett",
            duration: "ISO-varighet",
            ipv4: "IPv4-område",
            ipv6: "IPv6-område",
            cidrv4: "IPv4-spekter",
            cidrv6: "IPv6-spekter",
            base64: "base64-enkodet streng",
            base64url: "base64url-enkodet streng",
            json_string: "JSON-streng",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
            number: "tall",
            array: "liste",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Ugyldig input: forventet instanceof ${_.expected}, fikk ${_}`
                : `Ugyldig input: forventet ${_}, fikk ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Ugyldig verdi: forventet ${_._(_.values[0])}`
                : `Ugyldig valg: forventet en av ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `For stor(t): forventet ${_.origin ?? "value"} til å ha ${_}${_.maximum.toString()} ${_.unit ?? "elementer"}`
                : `For stor(t): forventet ${_.origin ?? "value"} til å ha ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `For lite(n): forventet ${_.origin} til å ha ${_}${_.minimum.toString()} ${_.unit}`
                : `For lite(n): forventet ${_.origin} til å ha ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Ugyldig streng: må starte med "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Ugyldig streng: må ende med "${_.suffix}"`
                  : "includes" === _.format
                    ? `Ugyldig streng: må inneholde "${_.includes}"`
                    : "regex" === _.format
                      ? `Ugyldig streng: må matche mønsteret ${_.pattern}`
                      : `Ugyldig ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Ugyldig tall: må være et multiplum av ${_.divisor}`;
            case "unrecognized_keys":
              return `${_.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Ugyldig nøkkel i ${_.origin}`;
            case "invalid_union":
            default:
              return "Ugyldig input";
            case "invalid_element":
              return `Ugyldig verdi i ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "harf",
            verb: "olmalıdır",
          },
          file: {
            unit: "bayt",
            verb: "olmalıdır",
          },
          array: {
            unit: "unsur",
            verb: "olmalıdır",
          },
          set: {
            unit: "unsur",
            verb: "olmalıdır",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "giren",
            email: "epostagâh",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO hengâmı",
            date: "ISO tarihi",
            time: "ISO zamanı",
            duration: "ISO müddeti",
            ipv4: "IPv4 nişânı",
            ipv6: "IPv6 nişânı",
            cidrv4: "IPv4 menzili",
            cidrv6: "IPv6 menzili",
            base64: "base64-şifreli metin",
            base64url: "base64url-şifreli metin",
            json_string: "JSON metin",
            e164: "E.164 sayısı",
            jwt: "JWT",
            template_literal: "giren",
          },
          _ = {
            nan: "NaN",
            number: "numara",
            array: "saf",
            null: "gayb",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Fâsit giren: umulan instanceof ${_.expected}, alınan ${_}`
                : `Fâsit giren: umulan ${_}, alınan ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Fâsit giren: umulan ${_._(_.values[0])}`
                : `Fâsit tercih: mûteberler ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Fazla büyük: ${_.origin ?? "value"}, ${_}${_.maximum.toString()} ${_.unit ?? "elements"} sahip olmalıydı.`
                : `Fazla büyük: ${_.origin ?? "value"}, ${_}${_.maximum.toString()} olmalıydı.`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Fazla küçük: ${_.origin}, ${_}${_.minimum.toString()} ${_.unit} sahip olmalıydı.`
                : `Fazla küçük: ${_.origin}, ${_}${_.minimum.toString()} olmalıydı.`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Fâsit metin: "${_.prefix}" ile başlamalı.`
                : "ends_with" === _.format
                  ? `Fâsit metin: "${_.suffix}" ile bitmeli.`
                  : "includes" === _.format
                    ? `Fâsit metin: "${_.includes}" ihtivâ etmeli.`
                    : "regex" === _.format
                      ? `Fâsit metin: ${_.pattern} nakşına uymalı.`
                      : `Fâsit ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Fâsit sayı: ${_.divisor} katı olmalıydı.`;
            case "unrecognized_keys":
              return `Tanınmayan anahtar ${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `${_.origin} için tanınmayan anahtar var.`;
            case "invalid_union":
              return "Giren tanınamadı.";
            case "invalid_element":
              return `${_.origin} için tanınmayan kıymet var.`;
            default:
              return "Kıymet tanınamadı.";
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "توکي",
            verb: "ولري",
          },
          file: {
            unit: "بایټس",
            verb: "ولري",
          },
          array: {
            unit: "توکي",
            verb: "ولري",
          },
          set: {
            unit: "توکي",
            verb: "ولري",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "ورودي",
            email: "بریښنالیک",
            url: "یو آر ال",
            emoji: "ایموجي",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "نیټه او وخت",
            date: "نېټه",
            time: "وخت",
            duration: "موده",
            ipv4: "د IPv4 پته",
            ipv6: "د IPv6 پته",
            cidrv4: "د IPv4 ساحه",
            cidrv6: "د IPv6 ساحه",
            base64: "base64-encoded متن",
            base64url: "base64url-encoded متن",
            json_string: "JSON متن",
            e164: "د E.164 شمېره",
            jwt: "JWT",
            template_literal: "ورودي",
          },
          _ = {
            nan: "NaN",
            number: "عدد",
            array: "ارې",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `ناسم ورودي: باید instanceof ${_.expected} وای, مګر ${_} ترلاسه شو`
                : `ناسم ورودي: باید ${_} وای, مګر ${_} ترلاسه شو`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `ناسم ورودي: باید ${_._(_.values[0])} وای`
                : `ناسم انتخاب: باید یو له ${_._(_.values, "|")} څخه وای`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `ډیر لوی: ${_.origin ?? "ارزښت"} باید ${_}${_.maximum.toString()} ${_.unit ?? "عنصرونه"} ولري`
                : `ډیر لوی: ${_.origin ?? "ارزښت"} باید ${_}${_.maximum.toString()} وي`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `ډیر کوچنی: ${_.origin} باید ${_}${_.minimum.toString()} ${_.unit} ولري`
                : `ډیر کوچنی: ${_.origin} باید ${_}${_.minimum.toString()} وي`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `ناسم متن: باید د "${_.prefix}" سره پیل شي`
                : "ends_with" === _.format
                  ? `ناسم متن: باید د "${_.suffix}" سره پای ته ورسيږي`
                  : "includes" === _.format
                    ? `ناسم متن: باید "${_.includes}" ولري`
                    : "regex" === _.format
                      ? `ناسم متن: باید د ${_.pattern} سره مطابقت ولري`
                      : `${_[_.format] ?? _.format} ناسم دی`;
            }
            case "not_multiple_of":
              return `ناسم عدد: باید د ${_.divisor} مضرب وي`;
            case "unrecognized_keys":
              return `ناسم ${_.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `ناسم کلیډ په ${_.origin} کې`;
            case "invalid_union":
            default:
              return "ناسمه ورودي";
            case "invalid_element":
              return `ناسم عنصر په ${_.origin} کې`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "znaków",
            verb: "mieć",
          },
          file: {
            unit: "bajtów",
            verb: "mieć",
          },
          array: {
            unit: "elementów",
            verb: "mieć",
          },
          set: {
            unit: "elementów",
            verb: "mieć",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "wyrażenie",
            email: "adres email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data i godzina w formacie ISO",
            date: "data w formacie ISO",
            time: "godzina w formacie ISO",
            duration: "czas trwania ISO",
            ipv4: "adres IPv4",
            ipv6: "adres IPv6",
            cidrv4: "zakres IPv4",
            cidrv6: "zakres IPv6",
            base64: "ciąg znaków zakodowany w formacie base64",
            base64url: "ciąg znaków zakodowany w formacie base64url",
            json_string: "ciąg znaków w formacie JSON",
            e164: "liczba E.164",
            jwt: "JWT",
            template_literal: "wejście",
          },
          _ = {
            nan: "NaN",
            number: "liczba",
            array: "tablica",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${_.expected}, otrzymano ${_}`
                : `Nieprawidłowe dane wejściowe: oczekiwano ${_}, otrzymano ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Nieprawidłowe dane wejściowe: oczekiwano ${_._(_.values[0])}`
                : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Za duża wartość: oczekiwano, że ${_.origin ?? "wartość"} będzie mieć ${_}${_.maximum.toString()} ${_.unit ?? "elementów"}`
                : `Zbyt duż(y/a/e): oczekiwano, że ${_.origin ?? "wartość"} będzie wynosić ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Za mała wartość: oczekiwano, że ${_.origin ?? "wartość"} będzie mieć ${_}${_.minimum.toString()} ${_.unit ?? "elementów"}`
                : `Zbyt mał(y/a/e): oczekiwano, że ${_.origin ?? "wartość"} będzie wynosić ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${_.suffix}"`
                  : "includes" === _.format
                    ? `Nieprawidłowy ciąg znaków: musi zawierać "${_.includes}"`
                    : "regex" === _.format
                      ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${_.pattern}`
                      : `Nieprawidłow(y/a/e) ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Nieprawidłowa liczba: musi być wielokrotnością ${_.divisor}`;
            case "unrecognized_keys":
              return `Nierozpoznane klucze${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Nieprawidłowy klucz w ${_.origin}`;
            case "invalid_union":
            default:
              return "Nieprawidłowe dane wejściowe";
            case "invalid_element":
              return `Nieprawidłowa wartość w ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "caracteres",
            verb: "ter",
          },
          file: {
            unit: "bytes",
            verb: "ter",
          },
          array: {
            unit: "itens",
            verb: "ter",
          },
          set: {
            unit: "itens",
            verb: "ter",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "padrão",
            email: "endereço de e-mail",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "data e hora ISO",
            date: "data ISO",
            time: "hora ISO",
            duration: "duração ISO",
            ipv4: "endereço IPv4",
            ipv6: "endereço IPv6",
            cidrv4: "faixa de IPv4",
            cidrv6: "faixa de IPv6",
            base64: "texto codificado em base64",
            base64url: "URL codificada em base64",
            json_string: "texto JSON",
            e164: "número E.164",
            jwt: "JWT",
            template_literal: "entrada",
          },
          _ = {
            nan: "NaN",
            number: "número",
            null: "nulo",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Tipo inválido: esperado instanceof ${_.expected}, recebido ${_}`
                : `Tipo inválido: esperado ${_}, recebido ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Entrada inválida: esperado ${_._(_.values[0])}`
                : `Opção inválida: esperada uma das ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Muito grande: esperado que ${_.origin ?? "valor"} tivesse ${_}${_.maximum.toString()} ${_.unit ?? "elementos"}`
                : `Muito grande: esperado que ${_.origin ?? "valor"} fosse ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Muito pequeno: esperado que ${_.origin} tivesse ${_}${_.minimum.toString()} ${_.unit}`
                : `Muito pequeno: esperado que ${_.origin} fosse ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Texto inválido: deve começar com "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Texto inválido: deve terminar com "${_.suffix}"`
                  : "includes" === _.format
                    ? `Texto inválido: deve incluir "${_.includes}"`
                    : "regex" === _.format
                      ? `Texto inválido: deve corresponder ao padrão ${_.pattern}`
                      : `${_[_.format] ?? _.format} inválido`;
            }
            case "not_multiple_of":
              return `Número inválido: deve ser múltiplo de ${_.divisor}`;
            case "unrecognized_keys":
              return `Chave${_.keys.length > 1 ? "s" : ""} desconhecida${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Chave inválida em ${_.origin}`;
            case "invalid_union":
              return "Entrada inválida";
            case "invalid_element":
              return `Valor inválido em ${_.origin}`;
            default:
              return "Campo inválido";
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "caractere",
            verb: "să aibă",
          },
          file: {
            unit: "octeți",
            verb: "să aibă",
          },
          array: {
            unit: "elemente",
            verb: "să aibă",
          },
          set: {
            unit: "elemente",
            verb: "să aibă",
          },
          map: {
            unit: "intrări",
            verb: "să aibă",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "intrare",
            email: "adresă de email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "dată și oră ISO",
            date: "dată ISO",
            time: "oră ISO",
            duration: "durată ISO",
            ipv4: "adresă IPv4",
            ipv6: "adresă IPv6",
            mac: "adresă MAC",
            cidrv4: "interval IPv4",
            cidrv6: "interval IPv6",
            base64: "șir codat base64",
            base64url: "șir codat base64url",
            json_string: "șir JSON",
            e164: "număr E.164",
            jwt: "JWT",
            template_literal: "intrare",
          },
          _ = {
            nan: "NaN",
            string: "șir",
            number: "număr",
            boolean: "boolean",
            function: "funcție",
            array: "matrice",
            object: "obiect",
            undefined: "nedefinit",
            symbol: "simbol",
            bigint: "număr mare",
            void: "void",
            never: "never",
            map: "hartă",
            set: "set",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input);
              return `Intrare invalidă: așteptat ${_}, primit ${_[_] ?? _}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Intrare invalidă: așteptat ${_._(_.values[0])}`
                : `Opțiune invalidă: așteptat una dintre ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Prea mare: așteptat ca ${_.origin ?? "valoarea"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "elemente"}`
                : `Prea mare: așteptat ca ${_.origin ?? "valoarea"} să fie ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Prea mic: așteptat ca ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                : `Prea mic: așteptat ca ${_.origin} să fie ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Șir invalid: trebuie să înceapă cu "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Șir invalid: trebuie să se termine cu "${_.suffix}"`
                  : "includes" === _.format
                    ? `Șir invalid: trebuie să includă "${_.includes}"`
                    : "regex" === _.format
                      ? `Șir invalid: trebuie să se potrivească cu modelul ${_.pattern}`
                      : `Format invalid: ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Număr invalid: trebuie să fie multiplu de ${_.divisor}`;
            case "unrecognized_keys":
              return `Chei nerecunoscute: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Cheie invalidă în ${_.origin}`;
            case "invalid_union":
            default:
              return "Intrare invalidă";
            case "invalid_element":
              return `Valoare invalidă în ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      function _(_, _, _, _) {
        const _ = Math.abs(_),
          _ = _ % 10,
          _ = _ % 100;
        return _ >= 11 && _ <= 19 ? _ : 1 === _ ? _ : _ >= 2 && _ <= 4 ? _ : _;
      }
      const _ = () => {
        const _ = {
          string: {
            unit: {
              one: "символ",
              few: "символа",
              many: "символов",
            },
            verb: "иметь",
          },
          file: {
            unit: {
              one: "байт",
              few: "байта",
              many: "байт",
            },
            verb: "иметь",
          },
          array: {
            unit: {
              one: "элемент",
              few: "элемента",
              many: "элементов",
            },
            verb: "иметь",
          },
          set: {
            unit: {
              one: "элемент",
              few: "элемента",
              many: "элементов",
            },
            verb: "иметь",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "ввод",
            email: "email адрес",
            url: "URL",
            emoji: "эмодзи",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO дата и время",
            date: "ISO дата",
            time: "ISO время",
            duration: "ISO длительность",
            ipv4: "IPv4 адрес",
            ipv6: "IPv6 адрес",
            cidrv4: "IPv4 диапазон",
            cidrv6: "IPv6 диапазон",
            base64: "строка в формате base64",
            base64url: "строка в формате base64url",
            json_string: "JSON строка",
            e164: "номер E.164",
            jwt: "JWT",
            template_literal: "ввод",
          },
          _ = {
            nan: "NaN",
            number: "число",
            array: "массив",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Неверный ввод: ожидалось instanceof ${_.expected}, получено ${_}`
                : `Неверный ввод: ожидалось ${_}, получено ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Неверный ввод: ожидалось ${_._(_.values[0])}`
                : `Неверный вариант: ожидалось одно из ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              if (_) {
                const _ = _(
                  Number(_.maximum),
                  _.unit.one,
                  _.unit.few,
                  _.unit.many,
                );
                return `Слишком большое значение: ожидалось, что ${_.origin ?? "значение"} будет иметь ${_}${_.maximum.toString()} ${_}`;
              }
              return `Слишком большое значение: ожидалось, что ${_.origin ?? "значение"} будет ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              if (_) {
                const _ = _(
                  Number(_.minimum),
                  _.unit.one,
                  _.unit.few,
                  _.unit.many,
                );
                return `Слишком маленькое значение: ожидалось, что ${_.origin} будет иметь ${_}${_.minimum.toString()} ${_}`;
              }
              return `Слишком маленькое значение: ожидалось, что ${_.origin} будет ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Неверная строка: должна начинаться с "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Неверная строка: должна заканчиваться на "${_.suffix}"`
                  : "includes" === _.format
                    ? `Неверная строка: должна содержать "${_.includes}"`
                    : "regex" === _.format
                      ? `Неверная строка: должна соответствовать шаблону ${_.pattern}`
                      : `Неверный ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Неверное число: должно быть кратным ${_.divisor}`;
            case "unrecognized_keys":
              return `Нераспознанн${_.keys.length > 1 ? "ые" : "ый"} ключ${_.keys.length > 1 ? "и" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Неверный ключ в ${_.origin}`;
            case "invalid_union":
            default:
              return "Неверные входные данные";
            case "invalid_element":
              return `Неверное значение в ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "znakov",
            verb: "imeti",
          },
          file: {
            unit: "bajtov",
            verb: "imeti",
          },
          array: {
            unit: "elementov",
            verb: "imeti",
          },
          set: {
            unit: "elementov",
            verb: "imeti",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "vnos",
            email: "e-poštni naslov",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO datum in čas",
            date: "ISO datum",
            time: "ISO čas",
            duration: "ISO trajanje",
            ipv4: "IPv4 naslov",
            ipv6: "IPv6 naslov",
            cidrv4: "obseg IPv4",
            cidrv6: "obseg IPv6",
            base64: "base64 kodiran niz",
            base64url: "base64url kodiran niz",
            json_string: "JSON niz",
            e164: "E.164 številka",
            jwt: "JWT",
            template_literal: "vnos",
          },
          _ = {
            nan: "NaN",
            number: "število",
            array: "tabela",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Neveljaven vnos: pričakovano instanceof ${_.expected}, prejeto ${_}`
                : `Neveljaven vnos: pričakovano ${_}, prejeto ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Neveljaven vnos: pričakovano ${_._(_.values[0])}`
                : `Neveljavna možnost: pričakovano eno izmed ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Preveliko: pričakovano, da bo ${_.origin ?? "vrednost"} imelo ${_}${_.maximum.toString()} ${_.unit ?? "elementov"}`
                : `Preveliko: pričakovano, da bo ${_.origin ?? "vrednost"} ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Premajhno: pričakovano, da bo ${_.origin} imelo ${_}${_.minimum.toString()} ${_.unit}`
                : `Premajhno: pričakovano, da bo ${_.origin} ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Neveljaven niz: mora se začeti z "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Neveljaven niz: mora se končati z "${_.suffix}"`
                  : "includes" === _.format
                    ? `Neveljaven niz: mora vsebovati "${_.includes}"`
                    : "regex" === _.format
                      ? `Neveljaven niz: mora ustrezati vzorcu ${_.pattern}`
                      : `Neveljaven ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Neveljavno število: mora biti večkratnik ${_.divisor}`;
            case "unrecognized_keys":
              return `Neprepoznan${_.keys.length > 1 ? "i ključi" : " ključ"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Neveljaven ključ v ${_.origin}`;
            case "invalid_union":
            default:
              return "Neveljaven vnos";
            case "invalid_element":
              return `Neveljavna vrednost v ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "tecken",
            verb: "att ha",
          },
          file: {
            unit: "bytes",
            verb: "att ha",
          },
          array: {
            unit: "objekt",
            verb: "att innehålla",
          },
          set: {
            unit: "objekt",
            verb: "att innehålla",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "reguljärt uttryck",
            email: "e-postadress",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO-datum och tid",
            date: "ISO-datum",
            time: "ISO-tid",
            duration: "ISO-varaktighet",
            ipv4: "IPv4-intervall",
            ipv6: "IPv6-intervall",
            cidrv4: "IPv4-spektrum",
            cidrv6: "IPv6-spektrum",
            base64: "base64-kodad sträng",
            base64url: "base64url-kodad sträng",
            json_string: "JSON-sträng",
            e164: "E.164-nummer",
            jwt: "JWT",
            template_literal: "mall-literal",
          },
          _ = {
            nan: "NaN",
            number: "antal",
            array: "lista",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Ogiltig inmatning: förväntat instanceof ${_.expected}, fick ${_}`
                : `Ogiltig inmatning: förväntat ${_}, fick ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Ogiltig inmatning: förväntat ${_._(_.values[0])}`
                : `Ogiltigt val: förväntade en av ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `För stor(t): förväntade ${_.origin ?? "värdet"} att ha ${_}${_.maximum.toString()} ${_.unit ?? "element"}`
                : `För stor(t): förväntat ${_.origin ?? "värdet"} att ha ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `För lite(t): förväntade ${_.origin ?? "värdet"} att ha ${_}${_.minimum.toString()} ${_.unit}`
                : `För lite(t): förväntade ${_.origin ?? "värdet"} att ha ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Ogiltig sträng: måste börja med "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Ogiltig sträng: måste sluta med "${_.suffix}"`
                  : "includes" === _.format
                    ? `Ogiltig sträng: måste innehålla "${_.includes}"`
                    : "regex" === _.format
                      ? `Ogiltig sträng: måste matcha mönstret "${_.pattern}"`
                      : `Ogiltig(t) ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Ogiltigt tal: måste vara en multipel av ${_.divisor}`;
            case "unrecognized_keys":
              return `${_.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Ogiltig nyckel i ${_.origin ?? "värdet"}`;
            case "invalid_union":
            default:
              return "Ogiltig input";
            case "invalid_element":
              return `Ogiltigt värde i ${_.origin ?? "värdet"}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "எழுத்துக்கள்",
            verb: "கொண்டிருக்க வேண்டும்",
          },
          file: {
            unit: "பைட்டுகள்",
            verb: "கொண்டிருக்க வேண்டும்",
          },
          array: {
            unit: "உறுப்புகள்",
            verb: "கொண்டிருக்க வேண்டும்",
          },
          set: {
            unit: "உறுப்புகள்",
            verb: "கொண்டிருக்க வேண்டும்",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "உள்ளீடு",
            email: "மின்னஞ்சல் முகவரி",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO தேதி நேரம்",
            date: "ISO தேதி",
            time: "ISO நேரம்",
            duration: "ISO கால அளவு",
            ipv4: "IPv4 முகவரி",
            ipv6: "IPv6 முகவரி",
            cidrv4: "IPv4 வரம்பு",
            cidrv6: "IPv6 வரம்பு",
            base64: "base64-encoded சரம்",
            base64url: "base64url-encoded சரம்",
            json_string: "JSON சரம்",
            e164: "E.164 எண்",
            jwt: "JWT",
            template_literal: "input",
          },
          _ = {
            nan: "NaN",
            number: "எண்",
            array: "அணி",
            null: "வெறுமை",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${_.expected}, பெறப்பட்டது ${_}`
                : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${_}, பெறப்பட்டது ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${_._(_.values[0])}`
                : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${_._(_.values, "|")} இல் ஒன்று`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${_.origin ?? "மதிப்பு"} ${_}${_.maximum.toString()} ${_.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்`
                : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${_.origin ?? "மதிப்பு"} ${_}${_.maximum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${_.origin} ${_}${_.minimum.toString()} ${_.unit} ஆக இருக்க வேண்டும்`
                : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${_.origin} ${_}${_.minimum.toString()} ஆக இருக்க வேண்டும்`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `தவறான சரம்: "${_.prefix}" இல் தொடங்க வேண்டும்`
                : "ends_with" === _.format
                  ? `தவறான சரம்: "${_.suffix}" இல் முடிவடைய வேண்டும்`
                  : "includes" === _.format
                    ? `தவறான சரம்: "${_.includes}" ஐ உள்ளடக்க வேண்டும்`
                    : "regex" === _.format
                      ? `தவறான சரம்: ${_.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்`
                      : `தவறான ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `தவறான எண்: ${_.divisor} இன் பலமாக இருக்க வேண்டும்`;
            case "unrecognized_keys":
              return `அடையாளம் தெரியாத விசை${_.keys.length > 1 ? "கள்" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `${_.origin} இல் தவறான விசை`;
            case "invalid_union":
            default:
              return "தவறான உள்ளீடு";
            case "invalid_element":
              return `${_.origin} இல் தவறான மதிப்பு`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "ตัวอักษร",
            verb: "ควรมี",
          },
          file: {
            unit: "ไบต์",
            verb: "ควรมี",
          },
          array: {
            unit: "รายการ",
            verb: "ควรมี",
          },
          set: {
            unit: "รายการ",
            verb: "ควรมี",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "ข้อมูลที่ป้อน",
            email: "ที่อยู่อีเมล",
            url: "URL",
            emoji: "อิโมจิ",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "วันที่เวลาแบบ ISO",
            date: "วันที่แบบ ISO",
            time: "เวลาแบบ ISO",
            duration: "ช่วงเวลาแบบ ISO",
            ipv4: "ที่อยู่ IPv4",
            ipv6: "ที่อยู่ IPv6",
            cidrv4: "ช่วง IP แบบ IPv4",
            cidrv6: "ช่วง IP แบบ IPv6",
            base64: "ข้อความแบบ Base64",
            base64url: "ข้อความแบบ Base64 สำหรับ URL",
            json_string: "ข้อความแบบ JSON",
            e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
            jwt: "โทเคน JWT",
            template_literal: "ข้อมูลที่ป้อน",
          },
          _ = {
            nan: "NaN",
            number: "ตัวเลข",
            array: "อาร์เรย์ (Array)",
            null: "ไม่มีค่า (null)",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${_.expected} แต่ได้รับ ${_}`
                : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${_} แต่ได้รับ ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `ค่าไม่ถูกต้อง: ควรเป็น ${_._(_.values[0])}`
                : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "ไม่เกิน" : "น้อยกว่า",
                _ = _(_.origin);
              return _
                ? `เกินกำหนด: ${_.origin ?? "ค่า"} ควรมี${_} ${_.maximum.toString()} ${_.unit ?? "รายการ"}`
                : `เกินกำหนด: ${_.origin ?? "ค่า"} ควรมี${_} ${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? "อย่างน้อย" : "มากกว่า",
                _ = _(_.origin);
              return _
                ? `น้อยกว่ากำหนด: ${_.origin} ควรมี${_} ${_.minimum.toString()} ${_.unit}`
                : `น้อยกว่ากำหนด: ${_.origin} ควรมี${_} ${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${_.prefix}"`
                : "ends_with" === _.format
                  ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${_.suffix}"`
                  : "includes" === _.format
                    ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${_.includes}" อยู่ในข้อความ`
                    : "regex" === _.format
                      ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${_.pattern}`
                      : `รูปแบบไม่ถูกต้อง: ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${_.divisor} ได้ลงตัว`;
            case "unrecognized_keys":
              return `พบคีย์ที่ไม่รู้จัก: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `คีย์ไม่ถูกต้องใน ${_.origin}`;
            case "invalid_union":
              return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
            case "invalid_element":
              return `ข้อมูลไม่ถูกต้องใน ${_.origin}`;
            default:
              return "ข้อมูลไม่ถูกต้อง";
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "karakter",
            verb: "olmalı",
          },
          file: {
            unit: "bayt",
            verb: "olmalı",
          },
          array: {
            unit: "öğe",
            verb: "olmalı",
          },
          set: {
            unit: "öğe",
            verb: "olmalı",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "girdi",
            email: "e-posta adresi",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO tarih ve saat",
            date: "ISO tarih",
            time: "ISO saat",
            duration: "ISO süre",
            ipv4: "IPv4 adresi",
            ipv6: "IPv6 adresi",
            cidrv4: "IPv4 aralığı",
            cidrv6: "IPv6 aralığı",
            base64: "base64 ile şifrelenmiş metin",
            base64url: "base64url ile şifrelenmiş metin",
            json_string: "JSON dizesi",
            e164: "E.164 sayısı",
            jwt: "JWT",
            template_literal: "Şablon dizesi",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Geçersiz değer: beklenen instanceof ${_.expected}, alınan ${_}`
                : `Geçersiz değer: beklenen ${_}, alınan ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Geçersiz değer: beklenen ${_._(_.values[0])}`
                : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Çok büyük: beklenen ${_.origin ?? "değer"} ${_}${_.maximum.toString()} ${_.unit ?? "öğe"}`
                : `Çok büyük: beklenen ${_.origin ?? "değer"} ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Çok küçük: beklenen ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
                : `Çok küçük: beklenen ${_.origin} ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Geçersiz metin: "${_.prefix}" ile başlamalı`
                : "ends_with" === _.format
                  ? `Geçersiz metin: "${_.suffix}" ile bitmeli`
                  : "includes" === _.format
                    ? `Geçersiz metin: "${_.includes}" içermeli`
                    : "regex" === _.format
                      ? `Geçersiz metin: ${_.pattern} desenine uymalı`
                      : `Geçersiz ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Geçersiz sayı: ${_.divisor} ile tam bölünebilmeli`;
            case "unrecognized_keys":
              return `Tanınmayan anahtar${_.keys.length > 1 ? "lar" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `${_.origin} içinde geçersiz anahtar`;
            case "invalid_union":
            default:
              return "Geçersiz değer";
            case "invalid_element":
              return `${_.origin} içinde geçersiz değer`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "символів",
            verb: "матиме",
          },
          file: {
            unit: "байтів",
            verb: "матиме",
          },
          array: {
            unit: "елементів",
            verb: "матиме",
          },
          set: {
            unit: "елементів",
            verb: "матиме",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "вхідні дані",
            email: "адреса електронної пошти",
            url: "URL",
            emoji: "емодзі",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "дата та час ISO",
            date: "дата ISO",
            time: "час ISO",
            duration: "тривалість ISO",
            ipv4: "адреса IPv4",
            ipv6: "адреса IPv6",
            cidrv4: "діапазон IPv4",
            cidrv6: "діапазон IPv6",
            base64: "рядок у кодуванні base64",
            base64url: "рядок у кодуванні base64url",
            json_string: "рядок JSON",
            e164: "номер E.164",
            jwt: "JWT",
            template_literal: "вхідні дані",
          },
          _ = {
            nan: "NaN",
            number: "число",
            array: "масив",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Неправильні вхідні дані: очікується instanceof ${_.expected}, отримано ${_}`
                : `Неправильні вхідні дані: очікується ${_}, отримано ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Неправильні вхідні дані: очікується ${_._(_.values[0])}`
                : `Неправильна опція: очікується одне з ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Занадто велике: очікується, що ${_.origin ?? "значення"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "елементів"}`
                : `Занадто велике: очікується, що ${_.origin ?? "значення"} буде ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Занадто мале: очікується, що ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                : `Занадто мале: очікується, що ${_.origin} буде ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Неправильний рядок: повинен починатися з "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Неправильний рядок: повинен закінчуватися на "${_.suffix}"`
                  : "includes" === _.format
                    ? `Неправильний рядок: повинен містити "${_.includes}"`
                    : "regex" === _.format
                      ? `Неправильний рядок: повинен відповідати шаблону ${_.pattern}`
                      : `Неправильний ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Неправильне число: повинно бути кратним ${_.divisor}`;
            case "unrecognized_keys":
              return `Нерозпізнаний ключ${_.keys.length > 1 ? "і" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Неправильний ключ у ${_.origin}`;
            case "invalid_union":
            default:
              return "Неправильні вхідні дані";
            case "invalid_element":
              return `Неправильне значення у ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      function _() {
        return _();
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "حروف",
            verb: "ہونا",
          },
          file: {
            unit: "بائٹس",
            verb: "ہونا",
          },
          array: {
            unit: "آئٹمز",
            verb: "ہونا",
          },
          set: {
            unit: "آئٹمز",
            verb: "ہونا",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "ان پٹ",
            email: "ای میل ایڈریس",
            url: "یو آر ایل",
            emoji: "ایموجی",
            uuid: "یو یو آئی ڈی",
            uuidv4: "یو یو آئی ڈی وی 4",
            uuidv6: "یو یو آئی ڈی وی 6",
            nanoid: "نینو آئی ڈی",
            guid: "جی یو آئی ڈی",
            cuid: "سی یو آئی ڈی",
            cuid2: "سی یو آئی ڈی 2",
            ulid: "یو ایل آئی ڈی",
            xid: "ایکس آئی ڈی",
            ksuid: "کے ایس یو آئی ڈی",
            datetime: "آئی ایس او ڈیٹ ٹائم",
            date: "آئی ایس او تاریخ",
            time: "آئی ایس او وقت",
            duration: "آئی ایس او مدت",
            ipv4: "آئی پی وی 4 ایڈریس",
            ipv6: "آئی پی وی 6 ایڈریس",
            cidrv4: "آئی پی وی 4 رینج",
            cidrv6: "آئی پی وی 6 رینج",
            base64: "بیس 64 ان کوڈڈ سٹرنگ",
            base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
            json_string: "جے ایس او این سٹرنگ",
            e164: "ای 164 نمبر",
            jwt: "جے ڈبلیو ٹی",
            template_literal: "ان پٹ",
          },
          _ = {
            nan: "NaN",
            number: "نمبر",
            array: "آرے",
            null: "نل",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `غلط ان پٹ: instanceof ${_.expected} متوقع تھا، ${_} موصول ہوا`
                : `غلط ان پٹ: ${_} متوقع تھا، ${_} موصول ہوا`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `غلط ان پٹ: ${_._(_.values[0])} متوقع تھا`
                : `غلط آپشن: ${_._(_.values, "|")} میں سے ایک متوقع تھا`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `بہت بڑا: ${_.origin ?? "ویلیو"} کے ${_}${_.maximum.toString()} ${_.unit ?? "عناصر"} ہونے متوقع تھے`
                : `بہت بڑا: ${_.origin ?? "ویلیو"} کا ${_}${_.maximum.toString()} ہونا متوقع تھا`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `بہت چھوٹا: ${_.origin} کے ${_}${_.minimum.toString()} ${_.unit} ہونے متوقع تھے`
                : `بہت چھوٹا: ${_.origin} کا ${_}${_.minimum.toString()} ہونا متوقع تھا`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `غلط سٹرنگ: "${_.prefix}" سے شروع ہونا چاہیے`
                : "ends_with" === _.format
                  ? `غلط سٹرنگ: "${_.suffix}" پر ختم ہونا چاہیے`
                  : "includes" === _.format
                    ? `غلط سٹرنگ: "${_.includes}" شامل ہونا چاہیے`
                    : "regex" === _.format
                      ? `غلط سٹرنگ: پیٹرن ${_.pattern} سے میچ ہونا چاہیے`
                      : `غلط ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `غلط نمبر: ${_.divisor} کا مضاعف ہونا چاہیے`;
            case "unrecognized_keys":
              return `غیر تسلیم شدہ کی${_.keys.length > 1 ? "ز" : ""}: ${_._(_.keys, "، ")}`;
            case "invalid_key":
              return `${_.origin} میں غلط کی`;
            case "invalid_union":
            default:
              return "غلط ان پٹ";
            case "invalid_element":
              return `${_.origin} میں غلط ویلیو`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "belgi",
            verb: "bo‘lishi kerak",
          },
          file: {
            unit: "bayt",
            verb: "bo‘lishi kerak",
          },
          array: {
            unit: "element",
            verb: "bo‘lishi kerak",
          },
          set: {
            unit: "element",
            verb: "bo‘lishi kerak",
          },
          map: {
            unit: "yozuv",
            verb: "bo‘lishi kerak",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "kirish",
            email: "elektron pochta manzili",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO sana va vaqti",
            date: "ISO sana",
            time: "ISO vaqt",
            duration: "ISO davomiylik",
            ipv4: "IPv4 manzil",
            ipv6: "IPv6 manzil",
            mac: "MAC manzil",
            cidrv4: "IPv4 diapazon",
            cidrv6: "IPv6 diapazon",
            base64: "base64 kodlangan satr",
            base64url: "base64url kodlangan satr",
            json_string: "JSON satr",
            e164: "E.164 raqam",
            jwt: "JWT",
            template_literal: "kirish",
          },
          _ = {
            nan: "NaN",
            number: "raqam",
            array: "massiv",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Noto‘g‘ri kirish: kutilgan instanceof ${_.expected}, qabul qilingan ${_}`
                : `Noto‘g‘ri kirish: kutilgan ${_}, qabul qilingan ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Noto‘g‘ri kirish: kutilgan ${_._(_.values[0])}`
                : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Juda katta: kutilgan ${_.origin ?? "qiymat"} ${_}${_.maximum.toString()} ${_.unit} ${_.verb}`
                : `Juda katta: kutilgan ${_.origin ?? "qiymat"} ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Juda kichik: kutilgan ${_.origin} ${_}${_.minimum.toString()} ${_.unit} ${_.verb}`
                : `Juda kichik: kutilgan ${_.origin} ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Noto‘g‘ri satr: "${_.prefix}" bilan boshlanishi kerak`
                : "ends_with" === _.format
                  ? `Noto‘g‘ri satr: "${_.suffix}" bilan tugashi kerak`
                  : "includes" === _.format
                    ? `Noto‘g‘ri satr: "${_.includes}" ni o‘z ichiga olishi kerak`
                    : "regex" === _.format
                      ? `Noto‘g‘ri satr: ${_.pattern} shabloniga mos kelishi kerak`
                      : `Noto‘g‘ri ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Noto‘g‘ri raqam: ${_.divisor} ning karralisi bo‘lishi kerak`;
            case "unrecognized_keys":
              return `Noma’lum kalit${_.keys.length > 1 ? "lar" : ""}: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `${_.origin} dagi kalit noto‘g‘ri`;
            case "invalid_union":
            default:
              return "Noto‘g‘ri kirish";
            case "invalid_element":
              return `${_.origin} da noto‘g‘ri qiymat`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "ký tự",
            verb: "có",
          },
          file: {
            unit: "byte",
            verb: "có",
          },
          array: {
            unit: "phần tử",
            verb: "có",
          },
          set: {
            unit: "phần tử",
            verb: "có",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "đầu vào",
            email: "địa chỉ email",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ngày giờ ISO",
            date: "ngày ISO",
            time: "giờ ISO",
            duration: "khoảng thời gian ISO",
            ipv4: "địa chỉ IPv4",
            ipv6: "địa chỉ IPv6",
            cidrv4: "dải IPv4",
            cidrv6: "dải IPv6",
            base64: "chuỗi mã hóa base64",
            base64url: "chuỗi mã hóa base64url",
            json_string: "chuỗi JSON",
            e164: "số E.164",
            jwt: "JWT",
            template_literal: "đầu vào",
          },
          _ = {
            nan: "NaN",
            number: "số",
            array: "mảng",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Đầu vào không hợp lệ: mong đợi instanceof ${_.expected}, nhận được ${_}`
                : `Đầu vào không hợp lệ: mong đợi ${_}, nhận được ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Đầu vào không hợp lệ: mong đợi ${_._(_.values[0])}`
                : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Quá lớn: mong đợi ${_.origin ?? "giá trị"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "phần tử"}`
                : `Quá lớn: mong đợi ${_.origin ?? "giá trị"} ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Quá nhỏ: mong đợi ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                : `Quá nhỏ: mong đợi ${_.origin} ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Chuỗi không hợp lệ: phải kết thúc bằng "${_.suffix}"`
                  : "includes" === _.format
                    ? `Chuỗi không hợp lệ: phải bao gồm "${_.includes}"`
                    : "regex" === _.format
                      ? `Chuỗi không hợp lệ: phải khớp với mẫu ${_.pattern}`
                      : `${_[_.format] ?? _.format} không hợp lệ`;
            }
            case "not_multiple_of":
              return `Số không hợp lệ: phải là bội số của ${_.divisor}`;
            case "unrecognized_keys":
              return `Khóa không được nhận dạng: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Khóa không hợp lệ trong ${_.origin}`;
            case "invalid_union":
            default:
              return "Đầu vào không hợp lệ";
            case "invalid_element":
              return `Giá trị không hợp lệ trong ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "字符",
            verb: "包含",
          },
          file: {
            unit: "字节",
            verb: "包含",
          },
          array: {
            unit: "项",
            verb: "包含",
          },
          set: {
            unit: "项",
            verb: "包含",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "输入",
            email: "电子邮件",
            url: "URL",
            emoji: "表情符号",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO日期时间",
            date: "ISO日期",
            time: "ISO时间",
            duration: "ISO时长",
            ipv4: "IPv4地址",
            ipv6: "IPv6地址",
            cidrv4: "IPv4网段",
            cidrv6: "IPv6网段",
            base64: "base64编码字符串",
            base64url: "base64url编码字符串",
            json_string: "JSON字符串",
            e164: "E.164号码",
            jwt: "JWT",
            template_literal: "输入",
          },
          _ = {
            nan: "NaN",
            number: "数字",
            array: "数组",
            null: "空值(null)",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `无效输入：期望 instanceof ${_.expected}，实际接收 ${_}`
                : `无效输入：期望 ${_}，实际接收 ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `无效输入：期望 ${_._(_.values[0])}`
                : `无效选项：期望以下之一 ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `数值过大：期望 ${_.origin ?? "值"} ${_}${_.maximum.toString()} ${_.unit ?? "个元素"}`
                : `数值过大：期望 ${_.origin ?? "值"} ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `数值过小：期望 ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
                : `数值过小：期望 ${_.origin} ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `无效字符串：必须以 "${_.prefix}" 开头`
                : "ends_with" === _.format
                  ? `无效字符串：必须以 "${_.suffix}" 结尾`
                  : "includes" === _.format
                    ? `无效字符串：必须包含 "${_.includes}"`
                    : "regex" === _.format
                      ? `无效字符串：必须满足正则表达式 ${_.pattern}`
                      : `无效${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `无效数字：必须是 ${_.divisor} 的倍数`;
            case "unrecognized_keys":
              return `出现未知的键(key): ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `${_.origin} 中的键(key)无效`;
            case "invalid_union":
            default:
              return "无效输入";
            case "invalid_element":
              return `${_.origin} 中包含无效值(value)`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "字元",
            verb: "擁有",
          },
          file: {
            unit: "位元組",
            verb: "擁有",
          },
          array: {
            unit: "項目",
            verb: "擁有",
          },
          set: {
            unit: "項目",
            verb: "擁有",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "輸入",
            email: "郵件地址",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "ISO 日期時間",
            date: "ISO 日期",
            time: "ISO 時間",
            duration: "ISO 期間",
            ipv4: "IPv4 位址",
            ipv6: "IPv6 位址",
            cidrv4: "IPv4 範圍",
            cidrv6: "IPv6 範圍",
            base64: "base64 編碼字串",
            base64url: "base64url 編碼字串",
            json_string: "JSON 字串",
            e164: "E.164 數值",
            jwt: "JWT",
            template_literal: "輸入",
          },
          _ = {
            nan: "NaN",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `無效的輸入值：預期為 instanceof ${_.expected}，但收到 ${_}`
                : `無效的輸入值：預期為 ${_}，但收到 ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `無效的輸入值：預期為 ${_._(_.values[0])}`
                : `無效的選項：預期為以下其中之一 ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `數值過大：預期 ${_.origin ?? "值"} 應為 ${_}${_.maximum.toString()} ${_.unit ?? "個元素"}`
                : `數值過大：預期 ${_.origin ?? "值"} 應為 ${_}${_.maximum.toString()}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `數值過小：預期 ${_.origin} 應為 ${_}${_.minimum.toString()} ${_.unit}`
                : `數值過小：預期 ${_.origin} 應為 ${_}${_.minimum.toString()}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `無效的字串：必須以 "${_.prefix}" 開頭`
                : "ends_with" === _.format
                  ? `無效的字串：必須以 "${_.suffix}" 結尾`
                  : "includes" === _.format
                    ? `無效的字串：必須包含 "${_.includes}"`
                    : "regex" === _.format
                      ? `無效的字串：必須符合格式 ${_.pattern}`
                      : `無效的 ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `無效的數字：必須為 ${_.divisor} 的倍數`;
            case "unrecognized_keys":
              return `無法識別的鍵值${_.keys.length > 1 ? "們" : ""}：${_._(_.keys, "、")}`;
            case "invalid_key":
              return `${_.origin} 中有無效的鍵值`;
            case "invalid_union":
            default:
              return "無效的輸入值";
            case "invalid_element":
              return `${_.origin} 中有無效的值`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
      const _ = () => {
        const _ = {
          string: {
            unit: "àmi",
            verb: "ní",
          },
          file: {
            unit: "bytes",
            verb: "ní",
          },
          array: {
            unit: "nkan",
            verb: "ní",
          },
          set: {
            unit: "nkan",
            verb: "ní",
          },
        };
        function _(_) {
          return _[_] ?? null;
        }
        const _ = {
            regex: "ẹ̀rọ ìbáwọlé",
            email: "àdírẹ́sì ìmẹ́lì",
            url: "URL",
            emoji: "emoji",
            uuid: "UUID",
            uuidv4: "UUIDv4",
            uuidv6: "UUIDv6",
            nanoid: "nanoid",
            guid: "GUID",
            cuid: "cuid",
            cuid2: "cuid2",
            ulid: "ULID",
            xid: "XID",
            ksuid: "KSUID",
            datetime: "àkókò ISO",
            date: "ọjọ́ ISO",
            time: "àkókò ISO",
            duration: "àkókò tó pé ISO",
            ipv4: "àdírẹ́sì IPv4",
            ipv6: "àdírẹ́sì IPv6",
            cidrv4: "àgbègbè IPv4",
            cidrv6: "àgbègbè IPv6",
            base64: "ọ̀rọ̀ tí a kọ́ ní base64",
            base64url: "ọ̀rọ̀ base64url",
            json_string: "ọ̀rọ̀ JSON",
            e164: "nọ́mbà E.164",
            jwt: "JWT",
            template_literal: "ẹ̀rọ ìbáwọlé",
          },
          _ = {
            nan: "NaN",
            number: "nọ́mbà",
            array: "akopọ",
          };
        return (_) => {
          switch (_.code) {
            case "invalid_type": {
              const _ = _[_.expected] ?? _.expected,
                _ = _._(_.input),
                _ = _[_] ?? _;
              return /^[A-Z]/.test(_.expected)
                ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${_.expected}, àmọ̀ a rí ${_}`
                : `Ìbáwọlé aṣìṣe: a ní láti fi ${_}, àmọ̀ a rí ${_}`;
            }
            case "invalid_value":
              return 1 === _.values.length
                ? `Ìbáwọlé aṣìṣe: a ní láti fi ${_._(_.values[0])}`
                : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${_._(_.values, "|")}`;
            case "too_big": {
              const _ = _.inclusive ? "<=" : "<",
                _ = _(_.origin);
              return _
                ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${_.origin ?? "iye"} ${_.verb} ${_}${_.maximum} ${_.unit}`
                : `Tó pọ̀ jù: a ní láti jẹ́ ${_}${_.maximum}`;
            }
            case "too_small": {
              const _ = _.inclusive ? ">=" : ">",
                _ = _(_.origin);
              return _
                ? `Kéré ju: a ní láti jẹ́ pé ${_.origin} ${_.verb} ${_}${_.minimum} ${_.unit}`
                : `Kéré ju: a ní láti jẹ́ ${_}${_.minimum}`;
            }
            case "invalid_format": {
              const _ = _;
              return "starts_with" === _.format
                ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${_.prefix}"`
                : "ends_with" === _.format
                  ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${_.suffix}"`
                  : "includes" === _.format
                    ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${_.includes}"`
                    : "regex" === _.format
                      ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${_.pattern}`
                      : `Aṣìṣe: ${_[_.format] ?? _.format}`;
            }
            case "not_multiple_of":
              return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${_.divisor}`;
            case "unrecognized_keys":
              return `Bọtìnì àìmọ̀: ${_._(_.keys, ", ")}`;
            case "invalid_key":
              return `Bọtìnì aṣìṣe nínú ${_.origin}`;
            case "invalid_union":
            default:
              return "Ìbáwọlé aṣìṣe";
            case "invalid_element":
              return `Iye aṣìṣe nínú ${_.origin}`;
          }
        };
      };
      function _() {
        return {
          localeError: _(),
        };
      }
    },
  },
]);

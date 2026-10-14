(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [78310],
    {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          _();
        }
        let _ = _;
        const _ = (_) => (_ = _),
          _ = () => _,
          _ = Symbol.for("react-redux-context"),
          _ = typeof globalThis < "u" ? globalThis : {};
        function _() {
          var _;
          if (!_.createContext) return {};
          const _ = (_ = _[_]) != null ? _ : (_[_] = new Map());
          let _ = _.get(_.createContext);
          return (
            _ || ((_ = _.createContext(null)), _.set(_.createContext, _)), _
          );
        }
        const _ = _(),
          _ = null;
        function _(_ = ReactReduxContext) {
          return function () {
            return useContext(_);
          };
        }
        const _ = null;
        let _ = null;
        const _ = (_) => {
            _ = _;
          },
          _ = (_, _) => _ === _;
        function _(_ = ReactReduxContext) {
          const _ =
            _ === ReactReduxContext
              ? useDefaultReduxContext
              : createReduxContextHook(_);
          return function (_, _ = {}) {
            const {
                equalityFn: _ = _,
                stabilityCheck: _ = void 0,
                noopCheck: _ = void 0,
              } = typeof _ == "function"
                ? {
                    equalityFn: _,
                  }
                : _,
              {
                store: _,
                subscription: _,
                getServerState: _,
                stabilityCheck: _,
                noopCheck: _,
              } = _(),
              _ = useRef(!0),
              _ = useCallback(
                {
                  [_.name](_) {
                    return _(_);
                  },
                }[_.name],
                [_, _, _],
              ),
              _ = _(_.addNestedSub, _.getState, _ || _.getState, _, _);
            return useDebugValue(_), _;
          };
        }
        const _ = null;
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
          let _ = !1,
            _,
            _,
            _,
            _,
            _;
          function _(_, _) {
            return (
              (_ = _),
              (_ = _),
              (_ = _(_, _)),
              (_ = _(_, _)),
              (_ = _(_, _, _)),
              (_ = !0),
              _
            );
          }
          function _() {
            return (
              (_ = _(_, _)),
              _.dependsOnOwnProps && (_ = _(_, _)),
              (_ = _(_, _, _)),
              _
            );
          }
          function _() {
            return (
              _.dependsOnOwnProps && (_ = _(_, _)),
              _.dependsOnOwnProps && (_ = _(_, _)),
              (_ = _(_, _, _)),
              _
            );
          }
          function _() {
            const _ = _(_, _),
              _ = !_(_, _);
            return (_ = _), _ && (_ = _(_, _, _)), _;
          }
          function _(_, _) {
            const _ = !_(_, _),
              _ = !_(_, _, _, _);
            return (_ = _), (_ = _), _ && _ ? _() : _ ? _() : _ ? _() : _;
          }
          return function (_, _) {
            return _ ? _(_, _) : _(_, _);
          };
        }
        function _(_, _) {
          let {
              initMapStateToProps: _,
              initMapDispatchToProps: _,
              initMergeProps: _,
            } = _,
            _ = (0, _._)(_, _);
          const _ = _(_, _),
            _ = _(_, _),
            _ = _(_, _);
          return _(_, _, _, _, _);
        }
        function _(_, _) {
          const _ = {};
          for (const _ in _) {
            const _ = _[_];
            typeof _ == "function" && (_[_] = (..._) => _(_(..._)));
          }
          return _;
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
          return _.dependsOnOwnProps ? !!_.dependsOnOwnProps : _.length !== 1;
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
                  typeof _ == "function" &&
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
        function _(_) {
          return _ && typeof _ == "object"
            ? _((_) => _(_, _))
            : _
              ? typeof _ == "function"
                ? _(_, "mapDispatchToProps")
                : _(_, "mapDispatchToProps")
              : _((_) => ({
                  dispatch: _,
                }));
        }
        function _(_) {
          return _
            ? typeof _ == "function"
              ? _(_, "mapStateToProps")
              : _(_, "mapStateToProps")
            : _(() => ({}));
        }
        function _(_, _, _) {
          return (0, _._)({}, _, _, _);
        }
        function _(_) {
          return function (_, { displayName: _, areMergedPropsEqual: _ }) {
            let _ = !1,
              _;
            return function (_, _, _) {
              const _ = _(_, _, _);
              return _ ? _(_, _) || (_ = _) : ((_ = !0), (_ = _)), _;
            };
          };
        }
        function _(_) {
          return _
            ? typeof _ == "function"
              ? _(_)
              : _(_, "mergeProps")
            : () => _;
        }
        function _() {
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
                  !_ ||
                    _ === null ||
                    ((_ = !1),
                    _.next ? (_.next.prev = _.prev) : (_ = _.prev),
                    _.prev ? (_.prev.next = _.next) : (_ = _.next));
                }
              );
            },
          };
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
          function _(_) {
            _();
            const _ = _.subscribe(_);
            let _ = !1;
            return () => {
              _ || ((_ = !0), _(), _());
            };
          }
          function _() {
            _.notify();
          }
          function _() {
            _.onStateChange && _.onStateChange();
          }
          function _() {
            return _;
          }
          function _() {
            _++, _ || ((_ = _ ? _.addNestedSub(_) : _.subscribe(_)), (_ = _()));
          }
          function _() {
            _--, _ && _ === 0 && (_(), (_ = void 0), _.clear(), (_ = _));
          }
          function _() {
            _ || ((_ = !0), _());
          }
          function _() {
            _ && ((_ = !1), _());
          }
          const _ = {
            addNestedSub: _,
            notifyNestedSubs: _,
            handleChangeWrapper: _,
            isSubscribed: _,
            trySubscribe: _,
            tryUnsubscribe: _,
            getListeners: () => _,
          };
          return _;
        }
        const _ =
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof window.document.createElement < "u"
            ? _.useLayoutEffect
            : _.useEffect;
        function _(_, _) {
          return _ === _
            ? _ !== 0 || _ !== 0 || 1 / _ === 1 / _
            : _ !== _ && _ !== _;
        }
        function _(_, _) {
          if (_(_, _)) return !0;
          if (
            typeof _ != "object" ||
            _ === null ||
            typeof _ != "object" ||
            _ === null
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
        const _ = () => {
            throw new Error("uSES not initialized!");
          },
          _ = ["reactReduxForwardedRef"];
        let _ = _;
        const _ = (_) => {
            _ = _;
          },
          _ = null,
          _ = [null, null],
          _ = (_) => {
            try {
              return JSON.stringify(_);
            } catch {
              return String(_);
            }
          };
        function _(_, _, _) {
          _(() => _(..._), _);
        }
        function _(_, _, _, _, _, _) {
          (_.current = _),
            (_.current = !1),
            _.current && ((_.current = null), _());
        }
        function _(_, _, _, _, _, _, _, _, _, _, _) {
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
                : ((_.current = _), (_.current = _), (_.current = !0), _());
          };
          return (
            (_.onStateChange = _),
            _.trySubscribe(),
            _(),
            () => {
              if (((_ = !0), _.tryUnsubscribe(), (_.onStateChange = null), _))
                throw _;
            }
          );
        }
        const _ = () => _;
        function _(_, _) {
          return _ === _;
        }
        let _ = !1;
        function _(
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
            _ = _(_),
            _ = _(_),
            _ = _(_),
            _ = !!_;
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
                _ = !!_.store && !!_.store.getState && !!_.store.dispatch,
                _ = !!_ && !!_.store,
                _ = _ ? _.store : _.store,
                _ = _ ? _.getServerState : _.getState,
                _ = _.useMemo(() => _(_.dispatch, _), [_]),
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
                _ = _.useRef(!1),
                _ = _.useRef(!1),
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
                    _.current && _ === _.current
                      ? _.current
                      : _(_.getState(), _),
                  [_, _],
                ),
                _ = _.useMemo(
                  () => (_) =>
                    _ ? _(_, _, _, _, _, _, _, _, _, _, _) : () => {},
                  [_],
                );
              _(_, [_, _, _, _, _, _]);
              let _;
              try {
                _ = _(_, _, _ ? () => _(_(), _) : _);
              } catch (_) {
                throw (
                  (_.current &&
                    (_.message += `
The error may be correlated with this previous error:
${_.current.stack}

`),
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
        }
        const _ = _;
        function _({
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
        }
        const _ = _;
        function _(_ = ReactReduxContext) {
          const _ =
            _ === ReactReduxContext
              ? useDefaultReduxContext
              : createReduxContextHook(_);
          return function () {
            const { store: _ } = _();
            return _;
          };
        }
        const _ = null;
        function _(_ = ReactReduxContext) {
          const _ =
            _ === ReactReduxContext ? useDefaultStore : createStoreHook(_);
          return function () {
            return _().dispatch;
          };
        }
        const _ = null;
        _(_.useSyncExternalStoreWithSelector),
          _(_.useSyncExternalStore),
          _(_.unstable_batchedUpdates);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ =
            Number.isNaN ||
            function (_) {
              return typeof _ == "number" && _ !== _;
            };
        function _(_, _) {
          return !!(_ === _ || (_(_) && _(_)));
        }
        function _(_, _) {
          if (_.length !== _.length) return !1;
          for (var _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
          return !0;
        }
        function _(_, _) {
          _ === void 0 && (_ = _);
          var _ = null;
          function _() {
            for (var _ = [], _ = 0; _ < arguments.length; _++)
              _[_] = arguments[_];
            if (_ && _.lastThis === this && _(_, _.lastArgs))
              return _.lastResult;
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
        const _ = !0,
          _ = /[ \t]{2,}/g,
          _ = /^[ \t]*/gm,
          _ = (_) => _.replace(_, " ").replace(_, "").trim(),
          _ = (_) =>
            _(`
  %c@hello-pangea/dnd

  %c${_(_)}

  %c\u{1F477}\u200D This is a development only message. It will be removed in production builds.
`),
          _ = (_) => [
            _(_),
            "color: #00C584; font-size: 1.2em; font-weight: bold;",
            "line-height: 1.5",
            "color: #723874;",
          ],
          _ = "__@hello-pangea/dnd-disable-dev-warnings";
        function _(_, _) {
          _ || (typeof window < "u" && window[_]) || console[_](..._(_));
        }
        const _ = _.bind(null, "warn"),
          _ = _.bind(null, "error");
        function _() {}
        function _(_, _) {
          return {
            ..._,
            ..._,
          };
        }
        function _(_, _, _) {
          const _ = _.map((_) => {
            const _ = _(_, _.options);
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
        _.prototype.toString = function () {
          return this.message;
        };
        function _(_, _) {
          if (!_) throw _ ? new _(_) : new _(`${_}: ${_ || ""}`);
        }
        class _ extends _.Component {
          constructor(..._) {
            super(..._),
              (this.callbacks = null),
              (this.unbind = _),
              (this.onWindowError = (_) => {
                const _ = this.getCallbacks();
                _.isDragging() && _.tryAbort(),
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
            if (_ instanceof _) {
              this.setState({});
              return;
            }
            throw _;
          }
          componentWillUnmount() {
            this.unbind();
          }
          render() {
            return this.props.children(this.setCallbacks);
          }
        }
        const _ = `
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,
          _ = (_) => _ + 1,
          _ = (_) => `
  You have lifted an item in position ${_(_.source.index)}
`,
          _ = (_, _) => {
            const _ = _.droppableId === _.droppableId,
              _ = _(_.index),
              _ = _(_.index);
            return _
              ? `
      You have moved the item from position ${_}
      to position ${_}
    `
              : `
    You have moved the item from position ${_}
    in list ${_.droppableId}
    to list ${_.droppableId}
    in position ${_}
  `;
          },
          _ = (_, _, _) =>
            _.droppableId === _.droppableId
              ? `
      The item ${_}
      has been combined with ${_.draggableId}`
              : `
      The item ${_}
      in list ${_.droppableId}
      has been combined with ${_.draggableId}
      in list ${_.droppableId}
    `,
          _ = (_) => {
            const _ = _.destination;
            if (_) return _(_.source, _);
            const _ = _.combine;
            return _
              ? _(_.draggableId, _.source, _)
              : "You are over an area that cannot be dropped on";
          },
          _ = (_) => `
  The item has returned to its starting position
  of ${_(_.index)}
`;
        var _ = {
          dragHandleUsageInstructions: _,
          onDragStart: _,
          onDragUpdate: _,
          onDragEnd: (_) => {
            if (_.reason === "CANCEL")
              return `
      Movement cancelled.
      ${_(_.source)}
    `;
            const _ = _.destination,
              _ = _.combine;
            return _
              ? `
      You have dropped the item.
      ${_(_.source, _)}
    `
              : _
                ? `
      You have dropped the item.
      ${_(_.draggableId, _.source, _)}
    `
                : `
    The item has been dropped while not over a drop area.
    ${_(_.source)}
  `;
          },
        };
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
            _: _._ !== 0 ? -_._ : 0,
            _: _._ !== 0 ? -_._ : 0,
          }),
          _ = (_, _, _ = 0) =>
            _ === "x"
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
        var _ = (_, _) => {
          const _ = (0, _._)({
            top: Math.max(_.top, _.top),
            right: Math.min(_.right, _.right),
            bottom: Math.min(_.bottom, _.bottom),
            left: Math.max(_.left, _.left),
          });
          return _.width <= 0 || _.height <= 0 ? null : _;
        };
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
          _ = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
          _ = (_, _) => (_ ? _(_, _.scroll.diff.displacement) : _),
          _ = (_, _, _) =>
            _ && _.increasedBy
              ? {
                  ..._,
                  [_.end]: _[_.end] + _.increasedBy[_.line],
                }
              : _,
          _ = (_, _) =>
            _ && _.shouldClipSubject ? _(_.pageMarginBox, _) : (0, _._)(_);
        var _ = ({ page: _, withPlaceholder: _, axis: _, frame: _ }) => {
            const _ = _(_.marginBox, _),
              _ = _(_, _, _),
              _ = _(_, _);
            return {
              page: _,
              withPlaceholder: _,
              active: _,
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
        const _ = _((_) =>
            _.reduce((_, _) => ((_[_.descriptor._] = _), _), {}),
          ),
          _ = _((_) => _.reduce((_, _) => ((_[_.descriptor._] = _), _), {})),
          _ = _((_) => Object.values(_)),
          _ = _((_) => Object.values(_));
        var _ = _((_, _) =>
          _(_)
            .filter((_) => _ === _.descriptor.droppableId)
            .sort((_, _) => _.descriptor.index - _.descriptor.index),
        );
        function _(_) {
          return _._ && _._.type === "REORDER" ? _._.destination : null;
        }
        function _(_) {
          return _._ && _._.type === "COMBINE" ? _._.combine : null;
        }
        var _ = _((_, _) => _.filter((_) => _.descriptor._ !== _.descriptor._)),
          _ = ({
            isMovingForward: _,
            draggable: _,
            destination: _,
            insideDestination: _,
            previousImpact: _,
          }) => {
            if (!_.isCombineEnabled || !_(_)) return null;
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
            if (!_) {
              if (!_.length) return null;
              const _ = _[_.length - 1];
              return _(_.descriptor._);
            }
            const _ = _.findIndex((_) => _.descriptor._ === _);
            _ === -1 && _(!1);
            const _ = _ - 1;
            if (_ < 0) return null;
            const _ = _[_];
            return _(_.descriptor._);
          },
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
              if (_(_.top) && _(_.bottom) && _(_.left) && _(_.right)) return !0;
              const _ = _(_.top) || _(_.bottom),
                _ = _(_.left) || _(_.right);
              if (_ && _) return !0;
              const _ = _.top < _.top && _.bottom > _.bottom,
                _ = _.left < _.left && _.right > _.right;
              return _ && _ ? !0 : (_ && _) || (_ && _);
            };
          },
          _ = (_) => {
            const _ = _(_.top, _.bottom),
              _ = _(_.left, _.right);
            return (_) => _(_.top) && _(_.bottom) && _(_.left) && _(_.right);
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
        var _ = (_) => (_) => {
          const _ = _(_.top, _.bottom),
            _ = _(_.left, _.right);
          return (_) =>
            _ === _ ? _(_.top) && _(_.bottom) : _(_.left) && _(_.right);
        };
        const _ = (_, _) => {
            const _ = _.frame ? _.frame.scroll.diff.displacement : _;
            return _(_, _);
          },
          _ = (_, _, _) => (_.subject.active ? _(_.subject.active)(_) : !1),
          _ = (_, _, _) => _(_)(_),
          _ = ({
            target: _,
            destination: _,
            viewport: _,
            withDroppableDisplacement: _,
            isVisibleThroughFrameFn: _,
          }) => {
            const _ = _ ? _(_, _) : _;
            return _(_, _, _) && _(_, _, _);
          },
          _ = (_) =>
            _({
              ..._,
              isVisibleThroughFrameFn: _,
            }),
          _ = (_) =>
            _({
              ..._,
              isVisibleThroughFrameFn: _,
            }),
          _ = (_) =>
            _({
              ..._,
              isVisibleThroughFrameFn: _(_.destination.axis),
            }),
          _ = (_, _, _) => {
            if (typeof _ == "boolean") return _;
            if (!_) return !0;
            const { invisible: _, visible: _ } = _;
            if (_[_]) return !1;
            const _ = _[_];
            return _ ? _.shouldAnimate : !0;
          };
        function _(_, _) {
          const _ = _.page.marginBox,
            _ = {
              top: _.point._,
              right: 0,
              bottom: 0,
              left: _.point._,
            };
          return (0, _._)((0, _._)(_, _));
        }
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
              const _ = _(_, _),
                _ = _.descriptor._;
              if (
                (_.all.push(_),
                !_({
                  target: _,
                  destination: _,
                  viewport: _,
                  withDroppableDisplacement: !0,
                }))
              )
                return (_.invisible[_.descriptor._] = !0), _;
              const _ = _(_, _, _),
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
        function _(_, _) {
          if (!_.length) return 0;
          const _ = _[_.length - 1].descriptor.index;
          return _.inHomeList ? _ : _ + 1;
        }
        function _({
          insideDestination: _,
          inHomeList: _,
          displacedBy: _,
          destination: _,
        }) {
          const _ = _(_, {
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
          if (_ == null)
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
            _ = _.indexOf(_),
            _ = _.slice(_);
          return {
            displaced: _({
              afterDragging: _,
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
          return !!_.effected[_];
        }
        var _ = ({
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
          },
          _ = ({
            isMovingForward: _,
            isInHomeList: _,
            insideDestination: _,
            location: _,
          }) => {
            if (!_.length) return null;
            const _ = _.index,
              _ = _ ? _ + 1 : _ - 1,
              _ = _[0].descriptor.index,
              _ = _[_.length - 1].descriptor.index,
              _ = _ ? _ : _ + 1;
            return _ < _ || _ > _ ? null : _;
          },
          _ = ({
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
            if ((_ || _(!1), _.type === "REORDER")) {
              const _ = _({
                isMovingForward: _,
                isInHomeList: _,
                location: _.destination,
                insideDestination: _,
              });
              return _ == null
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
            const _ = _({
              isMovingForward: _,
              destination: _,
              displaced: _.displaced,
              draggables: _,
              combine: _.combine,
              afterCritical: _,
            });
            return _ == null
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
          _ = ({
            displaced: _,
            afterCritical: _,
            combineWith: _,
            displacedBy: _,
          }) => {
            const _ = !!(_.visible[_] || _.invisible[_]);
            return _(_, _) ? (_ ? _ : _(_.point)) : _ ? _.point : _;
          },
          _ = ({ afterCritical: _, impact: _, draggables: _ }) => {
            const _ = _(_);
            _ || _(!1);
            const _ = _.draggableId,
              _ = _[_].page.borderBox.center,
              _ = _({
                displaced: _.displaced,
                afterCritical: _,
                combineWith: _,
                displacedBy: _.displacedBy,
              });
            return _(_, _);
          };
        const _ = (_, _) => _.margin[_.start] + _.borderBox[_.size] / 2,
          _ = (_, _) => _.margin[_.end] + _.borderBox[_.size] / 2,
          _ = (_, _, _) =>
            _[_.crossAxisStart] +
            _.margin[_.crossAxisStart] +
            _.borderBox[_.crossAxisSize] / 2,
          _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
            _(_.line, _.marginBox[_.end] + _(_, _), _(_, _.marginBox, _)),
          _ = ({ axis: _, moveRelativeTo: _, isMoving: _ }) =>
            _(_.line, _.marginBox[_.start] - _(_, _), _(_, _.marginBox, _)),
          _ = ({ axis: _, moveInto: _, isMoving: _ }) =>
            _(_.line, _.contentBox[_.start] + _(_, _), _(_, _.contentBox, _));
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
              return _({
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
        const _ = ({
          impact: _,
          draggable: _,
          droppable: _,
          draggables: _,
          afterCritical: _,
        }) => {
          const _ = _.page.borderBox.center,
            _ = _._;
          return !_ || !_
            ? _
            : _.type === "REORDER"
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
                });
        };
        var _ = (_) => {
            const _ = _(_),
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
        function _(_, _) {
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_].visible[_];
            if (_) return _;
          }
          return null;
        }
        var _ = ({
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
                const _ = _(_, _);
                if (_) {
                  _[_] = _;
                  return;
                }
                _[_] = !0;
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
          },
          _ = (_, _) => _(_.scroll.diff.displacement, _),
          _ = ({ pageBorderBoxCenter: _, draggable: _, viewport: _ }) => {
            const _ = _(_, _),
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
            return _ ? _(_) : _(_);
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
                _({
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
            )
              return {
                clientSelection: _({
                  pageBorderBoxCenter: _,
                  draggable: _,
                  viewport: _,
                }),
                impact: _,
                scrollJumpRequest: null,
              };
            const _ = _(_, _),
              _ = _({
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
        var _ = ({
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
              .filter((_) => !!_.subject.active)
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
                  _(_[_.start]) || _(_[_.end]) || _(_[_.start]) || _(_[_.end])
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
          if (_.length === 1) return _[0];
          const _ = _.filter((_) => _(_(_)[_.start], _(_)[_.end])(_[_.line]));
          return _.length === 1
            ? _[0]
            : _.length > 1
              ? _.sort((_, _) => _(_)[_.start] - _(_)[_.start])[0]
              : _.sort((_, _) => {
                  const _ = _(_, _(_(_))),
                    _ = _(_, _(_(_)));
                  return _ !== _ ? _ - _ : _(_)[_.start] - _(_)[_.start];
                })[0];
        };
        const _ = (_, _) => {
            const _ = _.page.borderBox.center;
            return _(_.descriptor._, _) ? _(_, _.displacedBy.point) : _;
          },
          _ = (_, _) => {
            const _ = _.page.borderBox;
            return _(_.descriptor._, _) ? _(_, _(_.displacedBy.point)) : _;
          };
        var _ = ({
            pageBorderBoxCenter: _,
            viewport: _,
            destination: _,
            insideDestination: _,
            afterCritical: _,
          }) =>
            _.filter((_) =>
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
            })[0] || null,
          _ = _(function (_, _) {
            const _ = _[_.line];
            return {
              value: _,
              point: _(_.line, _),
            };
          });
        const _ = (_, _, _) => {
            const _ = _.axis;
            if (_.descriptor.mode === "virtual") return _(_.line, _[_.line]);
            const _ = _.subject.page.contentBox[_.size],
              _ =
                _(_.descriptor._, _).reduce(
                  (_, _) => _ + _.client.marginBox[_.size],
                  0,
                ) +
                _[_.line] -
                _;
            return _ <= 0 ? null : _(_.line, _);
          },
          _ = (_, _) => ({
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
              _ = _(_, _, _),
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
          },
          _ = (_) => {
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
          };
        var _ = ({
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
            const _ = _[_.axis.line] <= _.page.borderBox.center[_.axis.line],
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
          },
          _ = ({
            isMovingForward: _,
            previousPageBorderBoxCenter: _,
            draggable: _,
            isOver: _,
            draggables: _,
            droppables: _,
            viewport: _,
            afterCritical: _,
          }) => {
            const _ = _({
              isMovingForward: _,
              pageBorderBoxCenter: _,
              source: _,
              droppables: _,
              viewport: _,
            });
            if (!_) return null;
            const _ = _(_.descriptor._, _),
              _ = _({
                pageBorderBoxCenter: _,
                viewport: _,
                destination: _,
                insideDestination: _,
                afterCritical: _,
              }),
              _ = _({
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
              ? _.type === "REORDER"
                ? _.destination.droppableId
                : _.combine.droppableId
              : null;
          };
        const _ = (_, _) => {
          const _ = _(_);
          return _ ? _[_] : null;
        };
        var _ = ({ state: _, type: _ }) => {
          const _ = _(_.impact, _.dimensions.droppables),
            _ = !!_,
            _ = _.dimensions.droppables[_.critical.droppable._],
            _ = _ || _,
            _ = _.axis.direction,
            _ =
              (_ === "vertical" && (_ === "MOVE_UP" || _ === "MOVE_DOWN")) ||
              (_ === "horizontal" && (_ === "MOVE_LEFT" || _ === "MOVE_RIGHT"));
          if (_ && !_) return null;
          const _ = _ === "MOVE_DOWN" || _ === "MOVE_RIGHT",
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
          return _.phase === "DRAGGING" || _.phase === "COLLECTING";
        }
        function _(_) {
          const _ = _(_.top, _.bottom),
            _ = _(_.left, _.right);
          return function (_) {
            return _(_._) && _(_._);
          };
        }
        function _(_, _) {
          return (
            _.left < _.right &&
            _.right > _.left &&
            _.top < _.bottom &&
            _.bottom > _.top
          );
        }
        function _({ pageBorderBox: _, draggable: _, candidates: _ }) {
          const _ = _.page.borderBox.center,
            _ = _.map((_) => {
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
            }).sort((_, _) => _.distance - _.distance);
          return _[0] ? _[0]._ : null;
        }
        function _({ pageBorderBox: _, draggable: _, droppables: _ }) {
          const _ = _(_).filter((_) => {
            if (!_.isEnabled) return !1;
            const _ = _.subject.active;
            if (!_ || !_(_, _)) return !1;
            if (_(_)(_.center)) return !0;
            const _ = _.axis,
              _ = _.center[_.crossAxisLine],
              _ = _[_.crossAxisStart],
              _ = _[_.crossAxisEnd],
              _ = _(_[_.crossAxisStart], _[_.crossAxisEnd]),
              _ = _(_),
              _ = _(_);
            return !_ && !_ ? !0 : _ ? _ < _ : _ > _;
          });
          return _.length
            ? _.length === 1
              ? _[0].descriptor._
              : _({
                  pageBorderBox: _,
                  draggable: _,
                  candidates: _,
                })
            : null;
        }
        const _ = (_, _) => (0, _._)(_(_, _));
        var _ = (_, _) => {
          const _ = _.frame;
          return _ ? _(_, _.scroll.diff.value) : _;
        };
        function _({ displaced: _, _: _ }) {
          return !!(_.visible[_] || _.invisible[_]);
        }
        function _({ draggable: _, closest: _, inHomeList: _ }) {
          return _
            ? _ && _.descriptor.index > _.descriptor.index
              ? _.descriptor.index - 1
              : _.descriptor.index
            : null;
        }
        var _ = ({
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
            _ =
              _(_, _).find((_) => {
                const _ = _.descriptor._,
                  _ = _.page.borderBox.center[_.line],
                  _ = _(_, _),
                  _ = _({
                    displaced: _,
                    _: _,
                  });
                return _ ? (_ ? _ <= _ : _ < _ - _) : _ ? _ <= _ + _ : _ < _;
              }) || null,
            _ = _({
              draggable: _,
              closest: _,
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
        };
        const _ = 4;
        var _ = ({
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
                  _ = _[_.size] / _,
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
          },
          _ = ({
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
              _ = _(_, _);
            return (
              _({
                pageBorderBoxWithDroppableScroll: _,
                draggable: _,
                previousImpact: _,
                destination: _,
                insideDestination: _,
                afterCritical: _,
              }) ||
              _({
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
          if (!_ || _ === _) return _;
          const _ = _[_];
          if (!_.subject.withPlaceholder) return _;
          const _ = _(_);
          return _(_, _);
        };
        var _ = ({
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
            if (_(_, _) || _.subject.withPlaceholder) return _;
            const _ = _(_, _, _);
            return _(_, _);
          },
          _ = ({
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
            if (_.phase === "COLLECTING")
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
              _ = _({
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
              forceShouldAnimate: _ ? !1 : null,
            };
          };
        function _(_, _) {
          return _.map((_) => _[_]);
        }
        var _ = ({
            impact: _,
            viewport: _,
            draggables: _,
            destination: _,
            forceShouldAnimate: _,
          }) => {
            const _ = _.displaced,
              _ = _(_.all, _),
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
            _.movementMode !== "SNAP" && _(!1);
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
          _ = (_) => ({
            index: _.index,
            droppableId: _.droppableId,
          }),
          _ = ({ draggable: _, home: _, draggables: _, viewport: _ }) => {
            const _ = _(_.axis, _.displaceBy),
              _ = _(_.descriptor._, _),
              _ = _.indexOf(_);
            _ === -1 && _(!1);
            const _ = _.slice(_ + 1),
              _ = _.reduce((_, _) => ((_[_.descriptor._] = !0), _), {}),
              _ = {
                inVirtualList: _.descriptor.mode === "virtual",
                displacedBy: _,
                effected: _,
              };
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
                  destination: _(_.descriptor),
                },
              },
              afterCritical: _,
            };
          },
          _ = (_, _) => ({
            draggables: _.draggables,
            droppables: _(_.droppables, _),
          });
        const _ = (_) => {},
          _ = (_) => {};
        var _ = ({ draggable: _, offset: _, initialWindowScroll: _ }) => {
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
          },
          _ = (_) => {
            const _ = _.frame;
            return _ || _(!1), _;
          },
          _ = ({ additions: _, updatedDroppables: _, viewport: _ }) => {
            const _ = _.scroll.diff.value;
            return _.map((_) => {
              const _ = _.descriptor.droppableId,
                _ = _[_],
                _ = _(_).scroll.diff.value,
                _ = _(_, _);
              return _({
                draggable: _,
                offset: _,
                initialWindowScroll: _.scroll.initial,
              });
            });
          };
        const _ = "Processing dynamic changes";
        var _ = ({ state: _, published: _ }) => {
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
          _(_);
          const _ = {
            ..._,
            phase: "DRAGGING",
            impact: _,
            onLiftImpact: _,
            dimensions: _,
            afterCritical: _,
            forceShouldAnimate: !1,
          };
          return _.phase === "COLLECTING"
            ? _
            : {
                ..._,
                phase: "DROP_PENDING",
                reason: _.reason,
                isWaiting: !1,
              };
        };
        const _ = (_) => _.movementMode === "SNAP",
          _ = (_, _, _) => {
            const _ = _(_.dimensions, _);
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
          return _.isDragging && _.movementMode === "SNAP"
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
          if (_.type === "FLUSH")
            return {
              ..._,
              shouldFlush: !0,
            };
          if (_.type === "INITIAL_PUBLISH") {
            _.phase !== "IDLE" && _(!1);
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
          if (_.type === "COLLECTION_STARTING")
            return _.phase === "COLLECTING" || _.phase === "DROP_PENDING"
              ? _
              : (_.phase !== "DRAGGING" && _(!1),
                {
                  ..._,
                  phase: "COLLECTING",
                });
          if (_.type === "PUBLISH_WHILE_DRAGGING")
            return (
              _.phase === "COLLECTING" || _.phase === "DROP_PENDING" || _(!1),
              _({
                state: _,
                published: _.payload,
              })
            );
          if (_.type === "MOVE") {
            if (_.phase === "DROP_PENDING") return _;
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
          if (_.type === "UPDATE_DROPPABLE_SCROLL") {
            if (_.phase === "DROP_PENDING" || _.phase === "COLLECTING")
              return _(_);
            _(_) || _(!1);
            const { _: _, newScroll: _ } = _.payload,
              _ = _.dimensions.droppables[_];
            if (!_) return _;
            const _ = _(_, _);
            return _(_, _, !1);
          }
          if (_.type === "UPDATE_DROPPABLE_IS_ENABLED") {
            if (_.phase === "DROP_PENDING") return _;
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
          if (_.type === "UPDATE_DROPPABLE_IS_COMBINE_ENABLED") {
            if (_.phase === "DROP_PENDING") return _;
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
          if (_.type === "MOVE_BY_WINDOW_SCROLL") {
            if (_.phase === "DROP_PENDING" || _.phase === "DROP_ANIMATING")
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
          if (_.type === "UPDATE_VIEWPORT_MAX_SCROLL") {
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
            _.type === "MOVE_UP" ||
            _.type === "MOVE_DOWN" ||
            _.type === "MOVE_LEFT" ||
            _.type === "MOVE_RIGHT"
          ) {
            if (_.phase === "COLLECTING" || _.phase === "DROP_PENDING")
              return _;
            _.phase !== "DRAGGING" && _(!1);
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
          if (_.type === "DROP_PENDING") {
            const _ = _.payload.reason;
            return (
              _.phase !== "COLLECTING" && _(!1),
              {
                ..._,
                phase: "DROP_PENDING",
                isWaiting: !0,
                reason: _,
              }
            );
          }
          if (_.type === "DROP_ANIMATE") {
            const {
              completed: _,
              dropDuration: _,
              newHomeClientOffset: _,
            } = _.payload;
            return (
              _.phase === "DRAGGING" || _.phase === "DROP_PENDING" || _(!1),
              {
                phase: "DROP_ANIMATING",
                completed: _,
                dropDuration: _,
                newHomeClientOffset: _,
                dimensions: _.dimensions,
              }
            );
          }
          if (_.type === "DROP_COMPLETE") {
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
            type: "BEFORE_INITIAL_CAPTURE",
            payload: _,
          }),
          _ = (_) => ({
            type: "LIFT",
            payload: _,
          }),
          _ = (_) => ({
            type: "INITIAL_PUBLISH",
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
          _ = (_) => ({
            type: "MOVE_BY_WINDOW_SCROLL",
            payload: _,
          }),
          _ = (_) => ({
            type: "UPDATE_VIEWPORT_MAX_SCROLL",
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
            type: "DROP_ANIMATE",
            payload: _,
          }),
          _ = (_) => ({
            type: "DROP_COMPLETE",
            payload: _,
          }),
          _ = (_) => ({
            type: "DROP",
            payload: _,
          }),
          _ = (_) => ({
            type: "DROP_PENDING",
            payload: _,
          }),
          _ = () => ({
            type: "DROP_ANIMATION_FINISHED",
            payload: null,
          });
        function _(_) {
          if (_.length <= 1) return;
          const _ = _.map((_) => _.descriptor.index),
            _ = {};
          for (let _ = 1; _ < _.length; _++) {
            const _ = _[_],
              _ = _[_ - 1];
            _ !== _ + 1 && (_[_] = !0);
          }
          if (!Object.keys(_).length) return;
          const _ = _.map((_) => (!!_[_] ? `[\u{1F525}${_}]` : `${_}`)).join(
            ", ",
          );
        }
        function _(_, _) {}
        var _ =
            (_) =>
            ({ getState: _, dispatch: _ }) =>
            (_) =>
            (_) => {
              if (_.type !== "LIFT") {
                _(_);
                return;
              }
              const { _: _, clientSelection: _, movementMode: _ } = _.payload,
                _ = _();
              _.phase === "DROP_ANIMATING" &&
                _(
                  _({
                    completed: _.completed,
                  }),
                ),
                _().phase !== "IDLE" && _(!1),
                _(_()),
                _(
                  _({
                    draggableId: _,
                    movementMode: _,
                  }),
                );
              const _ = {
                  draggableId: _,
                  scrollOptions: {
                    shouldPublishImmediately: _ === "SNAP",
                  },
                },
                {
                  critical: _,
                  dimensions: _,
                  viewport: _,
                } = _.startPublishing(_);
              _(
                _({
                  critical: _,
                  dimensions: _,
                  clientSelection: _,
                  movementMode: _,
                  viewport: _,
                }),
              );
            },
          _ = (_) => () => (_) => (_) => {
            _.type === "INITIAL_PUBLISH" && _.dragging(),
              _.type === "DROP_ANIMATE" &&
                _.dropping(_.payload.completed.result.reason),
              (_.type === "FLUSH" || _.type === "DROP_COMPLETE") && _.resting(),
              _(_);
          };
        const _ = {
            outOfTheWay: "cubic-bezier(0.2, 0, 0, 1)",
            drop: "cubic-bezier(.2,1,.1,1)",
          },
          _ = {
            opacity: {
              drop: 0,
              combining: 0.7,
            },
            scale: {
              drop: 0.75,
            },
          },
          _ = {
            outOfTheWay: 0.2,
            minDropTime: 0.33,
            maxDropTime: 0.55,
          },
          _ = `${_.outOfTheWay}s ${_.outOfTheWay}`,
          _ = {
            fluid: `opacity ${_}`,
            snap: `transform ${_}, opacity ${_}`,
            drop: (_) => {
              const _ = `${_}s ${_.drop}`;
              return `transform ${_}, opacity ${_}`;
            },
            outOfTheWay: `transform ${_}`,
            placeholder: `height ${_}, width ${_}, margin ${_}`,
          },
          _ = (_) => (_(_, _) ? void 0 : `translate(${_._}px, ${_._}px)`),
          _ = {
            moveTo: _,
            drop: (_, _) => {
              const _ = _(_);
              if (_) return _ ? `${_} scale(${_.scale.drop})` : _;
            },
          },
          { minDropTime: _, maxDropTime: _ } = _,
          _ = _ - _,
          _ = 1500,
          _ = 0.6;
        var _ = ({ current: _, destination: _, reason: _ }) => {
            const _ = _(_, _);
            if (_ <= 0) return _;
            if (_ >= _) return _;
            const _ = _ / _,
              _ = _ + _ * _,
              _ = _ === "CANCEL" ? _ * _ : _;
            return Number(_.toFixed(2));
          },
          _ = ({
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
          },
          _ = ({
            draggables: _,
            reason: _,
            lastImpact: _,
            home: _,
            viewport: _,
            onLiftImpact: _,
          }) =>
            !_._ || _ !== "DROP"
              ? {
                  impact: _({
                    draggables: _,
                    impact: _,
                    destination: _,
                    viewport: _,
                    forceShouldAnimate: !0,
                  }),
                  didDropInsideDroppable: !1,
                }
              : _._.type === "REORDER"
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
                  },
          _ =
            ({ getState: _, dispatch: _ }) =>
            (_) =>
            (_) => {
              if (_.type !== "DROP") {
                _(_);
                return;
              }
              const _ = _(),
                _ = _.payload.reason;
              if (_.phase === "COLLECTING") {
                _(
                  _({
                    reason: _,
                  }),
                );
                return;
              }
              if (_.phase === "IDLE") return;
              _.phase === "DROP_PENDING" && _.isWaiting && _(!1),
                _.phase === "DRAGGING" || _.phase === "DROP_PENDING" || _(!1);
              const _ = _.critical,
                _ = _.dimensions,
                _ = _.draggables[_.critical.draggable._],
                { impact: _, didDropInsideDroppable: _ } = _({
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
                _ = _({
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
              if (!(!_(_.current.client.offset, _) || !!_.combine)) {
                _(
                  _({
                    completed: _,
                  }),
                );
                return;
              }
              const _ = _({
                current: _.current.client.offset,
                destination: _,
                reason: _,
              });
              _(
                _({
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
        function _(_) {
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
        }
        function _({ onWindowScroll: _ }) {
          function _() {
            _(_());
          }
          const _ = (0, _._)(_),
            _ = _(_);
          let _ = _;
          function _() {
            return _ !== _;
          }
          function _() {
            _() && _(!1), (_ = _(window, [_]));
          }
          function _() {
            _() || _(!1), _.cancel(), _(), (_ = _);
          }
          return {
            start: _,
            stop: _,
            isActive: _,
          };
        }
        const _ = (_) =>
          _.type === "DROP_COMPLETE" ||
          _.type === "DROP_ANIMATE" ||
          _.type === "FLUSH";
        var _ = (_) => {
            const _ = _({
              onWindowScroll: (_) => {
                _.dispatch(
                  _({
                    newScroll: _,
                  }),
                );
              },
            });
            return (_) => (_) => {
              !_.isActive() && _.type === "INITIAL_PUBLISH" && _.start(),
                _.isActive() && _(_) && _.stop(),
                _(_);
            };
          },
          _ = (_) => {
            let _ = !1,
              _ = !1;
            const _ = setTimeout(() => {
                _ = !0;
              }),
              _ = (_) => {
                _ || _ || ((_ = !0), _(_), clearTimeout(_));
              };
            return (_.wasCalled = () => _), _;
          },
          _ = () => {
            const _ = [],
              _ = (_) => {
                const _ = _.findIndex((_) => _.timerId === _);
                _ === -1 && _(!1);
                const [_] = _.splice(_, 1);
                _.callback();
              };
            return {
              add: (_) => {
                const _ = setTimeout(() => _(_)),
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
        const _ = (_, _) =>
            _ == null && _ == null
              ? !0
              : _ == null || _ == null
                ? !1
                : _.droppableId === _.droppableId && _.index === _.index,
          _ = (_, _) =>
            _ == null && _ == null
              ? !0
              : _ == null || _ == null
                ? !1
                : _.draggableId === _.draggableId &&
                  _.droppableId === _.droppableId,
          _ = (_, _) => {
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
          },
          _ = (_, _) => {
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
          if (!_) {
            _(_(_));
            return;
          }
          const _ = _(_);
          _(_, {
            announce: _,
          }),
            _.wasCalled() || _(_(_));
        }
        var _ = (_, _) => {
            const _ = _();
            let _ = null;
            const _ = (_, _) => {
                _ && _(!1),
                  _("onBeforeCapture", () => {
                    const _ = _().onBeforeCapture;
                    _ &&
                      _({
                        draggableId: _,
                        mode: _,
                      });
                  });
              },
              _ = (_, _) => {
                _ && _(!1),
                  _("onBeforeDragStart", () => {
                    const _ = _().onBeforeDragStart;
                    _ && _(_(_, _));
                  });
              },
              _ = (_, _) => {
                _ && _(!1);
                const _ = _(_, _);
                (_ = {
                  mode: _,
                  lastCritical: _,
                  lastLocation: _.source,
                  lastCombine: null,
                }),
                  _.add(() => {
                    _("onDragStart", () =>
                      _(_().onDragStart, _, _, _.onDragStart),
                    );
                  });
              },
              _ = (_, _) => {
                const _ = _(_),
                  _ = _(_);
                _ || _(!1);
                const _ = !_(_, _.lastCritical);
                _ && (_.lastCritical = _);
                const _ = !_(_.lastLocation, _);
                _ && (_.lastLocation = _);
                const _ = !_(_.lastCombine, _);
                if ((_ && (_.lastCombine = _), !_ && !_ && !_)) return;
                const _ = {
                  ..._(_, _.mode),
                  combine: _,
                  destination: _,
                };
                _.add(() => {
                  _("onDragUpdate", () =>
                    _(_().onDragUpdate, _, _, _.onDragUpdate),
                  );
                });
              },
              _ = () => {
                _ || _(!1), _.flush();
              },
              _ = (_) => {
                _ || _(!1),
                  (_ = null),
                  _("onDragEnd", () => _(_().onDragEnd, _, _, _.onDragEnd));
              };
            return {
              beforeCapture: _,
              beforeStart: _,
              start: _,
              update: _,
              flush: _,
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
          },
          _ = (_, _) => {
            const _ = _(_, _);
            return (_) => (_) => (_) => {
              if (_.type === "BEFORE_INITIAL_CAPTURE") {
                _.beforeCapture(_.payload.draggableId, _.payload.movementMode);
                return;
              }
              if (_.type === "INITIAL_PUBLISH") {
                const _ = _.payload.critical;
                _.beforeStart(_, _.payload.movementMode),
                  _(_),
                  _.start(_, _.payload.movementMode);
                return;
              }
              if (_.type === "DROP_COMPLETE") {
                const _ = _.payload.completed.result;
                _.flush(), _(_), _.drop(_);
                return;
              }
              if ((_(_), _.type === "FLUSH")) {
                _.abort();
                return;
              }
              const _ = _.getState();
              _.phase === "DRAGGING" && _.update(_.critical, _.impact);
            };
          },
          _ = (_) => (_) => (_) => {
            if (_.type !== "DROP_ANIMATION_FINISHED") {
              _(_);
              return;
            }
            const _ = _.getState();
            _.phase !== "DROP_ANIMATING" && _(!1),
              _.dispatch(
                _({
                  completed: _.completed,
                }),
              );
          },
          _ = (_) => {
            let _ = null,
              _ = null;
            function _() {
              _ && (cancelAnimationFrame(_), (_ = null)),
                _ && (_(), (_ = null));
            }
            return (_) => (_) => {
              if (
                ((_.type === "FLUSH" ||
                  _.type === "DROP_COMPLETE" ||
                  _.type === "DROP_ANIMATION_FINISHED") &&
                  _(),
                _(_),
                _.type !== "DROP_ANIMATE")
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
                  _.getState().phase === "DROP_ANIMATING" && _.dispatch(_());
                },
              };
              _ = requestAnimationFrame(() => {
                (_ = null), (_ = _(window, [_]));
              });
            };
          },
          _ = (_) => () => (_) => (_) => {
            (_.type === "DROP_COMPLETE" ||
              _.type === "FLUSH" ||
              _.type === "DROP_ANIMATE") &&
              _.stopPublishing(),
              _(_);
          },
          _ = (_) => {
            let _ = !1;
            return () => (_) => (_) => {
              if (_.type === "INITIAL_PUBLISH") {
                (_ = !0),
                  _.tryRecordFocus(_.payload.critical.draggable._),
                  _(_),
                  _.tryRestoreFocusRecorded();
                return;
              }
              if ((_(_), !!_)) {
                if (_.type === "FLUSH") {
                  (_ = !1), _.tryRestoreFocusRecorded();
                  return;
                }
                if (_.type === "DROP_COMPLETE") {
                  _ = !1;
                  const _ = _.payload.completed.result;
                  _.combine &&
                    _.tryShiftRecord(_.draggableId, _.combine.draggableId),
                    _.tryRestoreFocusRecorded();
                }
              }
            };
          };
        const _ = (_) =>
          _.type === "DROP_COMPLETE" ||
          _.type === "DROP_ANIMATE" ||
          _.type === "FLUSH";
        var _ = (_) => (_) => (_) => (_) => {
            if (_(_)) {
              _.stop(), _(_);
              return;
            }
            if (_.type === "INITIAL_PUBLISH") {
              _(_);
              const _ = _.getState();
              _.phase !== "DRAGGING" && _(!1), _.start(_);
              return;
            }
            _(_), _.scroll(_.getState());
          },
          _ = (_) => (_) => (_) => {
            if ((_(_), _.type !== "PUBLISH_WHILE_DRAGGING")) return;
            const _ = _.getState();
            _.phase === "DROP_PENDING" &&
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
        }) =>
          (0, _._)(
            _,
            _((0, _._)(_(_), _(_), _(_), _, _, _, _, _(_), _, _(_), _(_, _))),
          );
        const _ = () => ({
          additions: {},
          removals: {},
          modified: {},
        });
        function _({ registry: _, callbacks: _ }) {
          let _ = _(),
            _ = null;
          const _ = () => {
            _ ||
              (_.collectionStarting(),
              (_ = requestAnimationFrame(() => {
                (_ = null), _();
                const { additions: _, removals: _, modified: _ } = _,
                  _ = Object.keys(_)
                    .map((_) => _.draggable.getById(_).getDimension(_))
                    .sort((_, _) => _.descriptor.index - _.descriptor.index),
                  _ = Object.keys(_).map((_) => {
                    const _ = _.droppable
                      .getById(_)
                      .callbacks.getScrollWhileDragging();
                    return {
                      droppableId: _,
                      scroll: _,
                    };
                  }),
                  _ = {
                    additions: _,
                    removals: Object.keys(_),
                    modified: _,
                  };
                (_ = _()), _(), _.publish(_);
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
              _ && (cancelAnimationFrame(_), (_ = null), (_ = _()));
            },
          };
        }
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
          _ = () => {
            const _ = _(),
              _ = _(),
              _ = _._,
              _ = _._,
              _ = _(),
              _ = _.clientWidth,
              _ = _.clientHeight,
              _ = _ + _,
              _ = _ + _;
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
          },
          _ = ({ critical: _, scrollOptions: _, registry: _ }) => {
            _();
            const _ = _(),
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
            return (
              _(),
              {
                dimensions: _,
                critical: _,
                viewport: _,
              }
            );
          };
        function _(_, _, _) {
          return !(
            _.descriptor._ === _._ ||
            _.descriptor.type !== _.type ||
            _.droppable.getById(_.descriptor.droppableId).descriptor.mode !==
              "virtual"
          );
        }
        var _ = (_, _) => {
            let _ = null;
            const _ = _({
                callbacks: {
                  publish: _.publishWhileDragging,
                  collectionStarting: _.collectionStarting,
                },
                registry: _,
              }),
              _ = (_, _) => {
                _.droppable.exists(_) || _(!1),
                  _ &&
                    _.updateDroppableIsEnabled({
                      _: _,
                      isEnabled: _,
                    });
              },
              _ = (_, _) => {
                _ &&
                  (_.droppable.exists(_) || _(!1),
                  _.updateDroppableIsCombineEnabled({
                    _: _,
                    isCombineEnabled: _,
                  }));
              },
              _ = (_, _) => {
                _ &&
                  (_.droppable.exists(_) || _(!1),
                  _.updateDroppableScroll({
                    _: _,
                    newScroll: _,
                  }));
              },
              _ = (_, _) => {
                _ && _.droppable.getById(_).callbacks.scroll(_);
              },
              _ = () => {
                if (!_) return;
                _.stop();
                const _ = _.critical.droppable;
                _.droppable
                  .getAllByType(_.type)
                  .forEach((_) => _.callbacks.dragStopped()),
                  _.unsubscribe(),
                  (_ = null);
              },
              _ = (_) => {
                _ || _(!1);
                const _ = _.critical.draggable;
                _.type === "ADDITION" && _(_, _, _.value) && _.add(_.value),
                  _.type === "REMOVAL" && _(_, _, _.value) && _.remove(_.value);
              };
            return {
              updateDroppableIsEnabled: _,
              updateDroppableIsCombineEnabled: _,
              scrollDroppable: _,
              updateDroppableScroll: _,
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
              stopPublishing: _,
            };
          },
          _ = (_, _) =>
            _.phase === "IDLE"
              ? !0
              : _.phase !== "DROP_ANIMATING" ||
                  _.completed.result.draggableId === _
                ? !1
                : _.completed.result.reason === "DROP",
          _ = (_) => {
            window.scrollBy(_._, _._);
          };
        const _ = _((_) => _(_).filter((_) => !(!_.isEnabled || !_.frame))),
          _ = (_, _) =>
            _(_).find((_) => (_.frame || _(!1), _(_.frame.pageMarginBox)(_))) ||
            null;
        var _ = ({ center: _, destination: _, droppables: _ }) => {
          if (_) {
            const _ = _[_];
            return _.frame ? _ : null;
          }
          return _(_, _);
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
        var _ = (_, _, _ = () => _) => {
            const _ = _(),
              _ = _[_.size] * _.startFromPercentage,
              _ = _[_.size] * _.maxScrollAtPercentage;
            return {
              startScrollingFrom: _,
              maxScrollValueAt: _,
            };
          },
          _ = ({ startOfRange: _, endOfRange: _, current: _ }) => {
            const _ = _ - _;
            return _ === 0 ? 0 : (_ - _) / _;
          },
          _ = 1,
          _ = (_, _, _ = () => _) => {
            const _ = _();
            if (_ > _.startScrollingFrom) return 0;
            if (_ <= _.maxScrollValueAt) return _.maxPixelScroll;
            if (_ === _.startScrollingFrom) return _;
            const _ =
                1 -
                _({
                  startOfRange: _.maxScrollValueAt,
                  endOfRange: _.startScrollingFrom,
                  current: _,
                }),
              _ = _.maxPixelScroll * _.ease(_);
            return Math.ceil(_);
          },
          _ = (_, _, _) => {
            const _ = _(),
              _ = _.durationDampening.accelerateAt,
              _ = _.durationDampening.stopDampeningAt,
              _ = _,
              _ = _,
              _ = Date.now() - _;
            if (_ >= _) return _;
            if (_ < _) return _;
            const _ = _({
                startOfRange: _,
                endOfRange: _,
                current: _,
              }),
              _ = _ * _.ease(_);
            return Math.ceil(_);
          },
          _ = ({
            distanceToEdge: _,
            thresholds: _,
            dragStartTime: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          }) => {
            const _ = _(_, _, _);
            return _ === 0 ? 0 : _ ? Math.max(_(_, _, _), _) : _;
          },
          _ = ({
            container: _,
            distanceToEdges: _,
            dragStartTime: _,
            axis: _,
            shouldUseTimeDampening: _,
            getAutoScrollerOptions: _,
          }) => {
            const _ = _(_, _, _);
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
          },
          _ = ({ container: _, subject: _, proposedScroll: _ }) => {
            const _ = _.height > _.height,
              _ = _.width > _.width;
            return !_ && !_
              ? _
              : _ && _
                ? null
                : {
                    _: _ ? 0 : _._,
                    _: _ ? 0 : _._,
                  };
          };
        const _ = _((_) => (_ === 0 ? 0 : _));
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
          const _ = _({
            container: _,
            subject: _,
            proposedScroll: _,
          });
          return _ ? (_(_, _) ? null : _) : null;
        };
        const _ = _((_) => (_ === 0 ? 0 : _ > 0 ? 1 : -1)),
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
            return !_ || (_._ !== 0 && _._ === 0) || (_._ !== 0 && _._ === 0);
          },
          _ = (_, _) =>
            _({
              current: _.scroll.current,
              max: _.scroll.max,
              change: _,
            }),
          _ = (_, _) => {
            if (!_(_, _)) return null;
            const _ = _.scroll.max,
              _ = _.scroll.current;
            return _({
              current: _,
              max: _,
              change: _,
            });
          },
          _ = (_, _) => {
            const _ = _.frame;
            return _
              ? _({
                  current: _.scroll.current,
                  max: _.scroll.max,
                  change: _,
                })
              : !1;
          },
          _ = (_, _) => {
            const _ = _.frame;
            return !_ || !_(_, _)
              ? null
              : _({
                  current: _.scroll.current,
                  max: _.scroll.max,
                  change: _,
                });
          };
        var _ = ({
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
          },
          _ = ({
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
          },
          _ = ({
            state: _,
            dragStartTime: _,
            shouldUseTimeDampening: _,
            scrollWindow: _,
            scrollDroppable: _,
            getAutoScrollerOptions: _,
          }) => {
            const _ = _.current.page.borderBoxCenter,
              _ =
                _.dimensions.draggables[_.critical.draggable._].page.marginBox;
            if (_.isWindowScrollAllowed) {
              const _ = _.viewport,
                _ = _({
                  dragStartTime: _,
                  viewport: _,
                  subject: _,
                  center: _,
                  shouldUseTimeDampening: _,
                  getAutoScrollerOptions: _,
                });
              if (_) {
                _(_);
                return;
              }
            }
            const _ = _({
              center: _,
              destination: _(_.impact),
              droppables: _.dimensions.droppables,
            });
            if (!_) return;
            const _ = _({
              dragStartTime: _,
              droppable: _,
              subject: _,
              center: _,
              shouldUseTimeDampening: _,
              getAutoScrollerOptions: _,
            });
            _ && _(_.descriptor._, _);
          },
          _ = ({
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
          },
          _ = ({ move: _, scrollDroppable: _, scrollWindow: _ }) => {
            const _ = (_, _) => {
                const _ = _(_.current.client.selection, _);
                _({
                  client: _,
                });
              },
              _ = (_, _) => {
                if (!_(_, _)) return _;
                const _ = _(_, _);
                if (!_) return _(_.descriptor._, _), null;
                const _ = _(_, _);
                return _(_.descriptor._, _), _(_, _);
              },
              _ = (_, _, _) => {
                if (!_ || !_(_, _)) return _;
                const _ = _(_, _);
                if (!_) return _(_), null;
                const _ = _(_, _);
                return _(_), _(_, _);
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
              _ && _(_, _);
            };
          },
          _ = ({
            scrollDroppable: _,
            scrollWindow: _,
            move: _,
            getAutoScrollerOptions: _,
          }) => {
            const _ = _({
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
                if (!(_().disabled || _.phase !== "DRAGGING")) {
                  if (_.movementMode === "FLUID") {
                    _.scroll(_);
                    return;
                  }
                  _.scrollJumpRequest && _(_);
                }
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
          _ = (_) => (_) => `[${_}="${_}"]`,
          _ = (_, _) =>
            _.map((_) => {
              const _ = _.styles[_];
              return _ ? `${_.selector} { ${_} }` : "";
            }).join(" "),
          _ = "pointer-events: none;";
        var _ = (_) => {
            const _ = _(_),
              _ = (() => {
                const _ = `
      cursor: -webkit-grab;
      cursor: grab;
    `;
                return {
                  selector: _(_.contextId),
                  styles: {
                    always: `
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,
                    resting: _,
                    dragging: _,
                    dropAnimating: _,
                  },
                };
              })(),
              _ = (() => {
                const _ = `
      transition: ${_.outOfTheWay};
    `;
                return {
                  selector: _(_.contextId),
                  styles: {
                    dragging: _,
                    dropAnimating: _,
                    userCancel: _,
                  },
                };
              })(),
              _ = {
                selector: _(_.contextId),
                styles: {
                  always: "overflow-anchor: none;",
                },
              },
              _ = [
                _,
                _,
                _,
                {
                  selector: "body",
                  styles: {
                    dragging: `
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `,
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
          },
          _ =
            typeof window < "u" &&
            typeof window.document < "u" &&
            typeof window.document.createElement < "u"
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
            (!_.current && !_.current) || _(!1);
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
                if (_ === "DROP") {
                  _(_.dropAnimating);
                  return;
                }
                _(_.userCancel);
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
        }
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
          return !_ || !_(_) ? null : _;
        }
        function _(_) {
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
                _ && _ !== document.activeElement && _.focus();
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
        }
        function _() {
          const _ = {
              draggables: {},
              droppables: {},
            },
            _ = [];
          function _(_) {
            return (
              _.push(_),
              function () {
                const _ = _.indexOf(_);
                _ !== -1 && _.splice(_, 1);
              }
            );
          }
          function _(_) {
            _.length && _.forEach((_) => _(_));
          }
          function _(_) {
            return _.draggables[_] || null;
          }
          function _(_) {
            const _ = _(_);
            return _ || _(!1), _;
          }
          const _ = {
            register: (_) => {
              (_.draggables[_.descriptor._] = _),
                _({
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
                  _({
                    type: "REMOVAL",
                    value: _,
                  }));
            },
            getById: _,
            findById: _,
            exists: (_) => !!_(_),
            getAllByType: (_) =>
              Object.values(_.draggables).filter(
                (_) => _.descriptor.type === _,
              ),
          };
          function _(_) {
            return _.droppables[_] || null;
          }
          function _(_) {
            const _ = _(_);
            return _ || _(!1), _;
          }
          const _ = {
            register: (_) => {
              _.droppables[_.descriptor._] = _;
            },
            unregister: (_) => {
              const _ = _(_.descriptor._);
              _ &&
                _.uniqueId === _.uniqueId &&
                delete _.droppables[_.descriptor._];
            },
            getById: _,
            findById: _,
            exists: (_) => !!_(_),
            getAllByType: (_) =>
              Object.values(_.droppables).filter(
                (_) => _.descriptor.type === _,
              ),
          };
          function _() {
            (_.draggables = {}), (_.droppables = {}), (_.length = 0);
          }
          return {
            draggable: _,
            droppable: _,
            subscribe: _,
            clean: _,
          };
        }
        function _() {
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
        }
        var _ = _.createContext(null),
          _ = () => {
            const _ = document.body;
            return _ || _(!1), _;
          },
          _ = {
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
        function _(_) {
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
              if (_) {
                _.textContent = _;
                return;
              }
            }, [])
          );
        }
        let _ = 0;
        const _ = {
          separator: "::",
        };
        function _() {
          _ = 0;
        }
        function _(_, _ = _) {
          return (0, _._)(() => `${_}${_.separator}${_++}`, [_.separator, _]);
        }
        function _(_, _ = _) {
          const _ = _.useId();
          return (0, _._)(() => `${_}${_.separator}${_}`, [_.separator, _, _]);
        }
        var _ = _;
        function _({ contextId: _, uniqueId: _ }) {
          return `rfd-hidden-text-${_}-${_}`;
        }
        function _({ contextId: _, text: _ }) {
          const _ = _("hidden-text", {
              separator: "-",
            }),
            _ = (0, _._)(
              () =>
                _({
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
        }
        var _ = _.createContext(null),
          _ = {
            react: "^16.8.5 || ^17.0.0 || ^18.0.0",
            "react-dom": "^16.8.5 || ^17.0.0 || ^18.0.0",
          };
        const _ = /(\d+)\.(\d+)\.(\d+)/,
          _ = (_) => {
            const _ = _.exec(_);
            _ == null && _(!1);
            const _ = Number(_[1]),
              _ = Number(_[2]),
              _ = Number(_[3]);
            return {
              major: _,
              minor: _,
              patch: _,
              raw: _,
            };
          },
          _ = (_, _) =>
            _.major > _.major
              ? !0
              : _.major < _.major
                ? !1
                : _.minor > _.minor
                  ? !0
                  : _.minor < _.minor
                    ? !1
                    : _.patch >= _.patch;
        var _ = (_, _) => {
          const _ = _(_),
            _ = _(_);
          _(_, _);
        };
        const _ = null;
        var _ = (_) => {
          const _ = _.doctype;
          _ && (_.name.toLowerCase(), _.publicId);
        };
        function _(_) {}
        function _(_, _) {}
        function _() {
          _(() => {
            _(_.react, _.version), _(document);
          }, []);
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
        function _() {
          let _ = null;
          function _() {
            return !!_;
          }
          function _(_) {
            return _ === _;
          }
          function _(_) {
            _ && _(!1);
            const _ = {
              abandon: _,
            };
            return (_ = _), _;
          }
          function _() {
            _ || _(!1), (_ = null);
          }
          function _() {
            _ && (_.abandon(), _());
          }
          return {
            isClaimed: _,
            isActive: _,
            claim: _,
            release: _,
            tryAbandon: _,
          };
        }
        function _(_) {
          return _.phase === "IDLE" || _.phase === "DROP_ANIMATING"
            ? !1
            : _.isDragging;
        }
        const _ = 9,
          _ = 13,
          _ = 27,
          _ = 32,
          _ = 33,
          _ = 34,
          _ = 35,
          _ = 36,
          _ = 37,
          _ = 38,
          _ = 39,
          _ = 40,
          _ = {
            [_]: !0,
            [_]: !0,
          };
        var _ = (_) => {
            _[_.keyCode] && _.preventDefault();
          },
          _ = (() => {
            const _ = "visibilitychange";
            return typeof document > "u"
              ? _
              : [_, `ms${_}`, `webkit${_}`, `moz${_}`, `o${_}`].find(
                  (_) => `on${_}` in document,
                ) || _;
          })();
        const _ = 0,
          _ = 5;
        function _(_, _) {
          return Math.abs(_._ - _._) >= _ || Math.abs(_._ - _._) >= _;
        }
        const _ = {
          type: "IDLE",
        };
        function _({ cancel: _, completed: _, getPhase: _, setPhase: _ }) {
          return [
            {
              eventName: "mousemove",
              _: (_) => {
                const { button: _, clientX: _, clientY: _ } = _;
                if (_ !== _) return;
                const _ = {
                    _: _,
                    _: _,
                  },
                  _ = _();
                if (_.type === "DRAGGING") {
                  _.preventDefault(), _.actions.move(_);
                  return;
                }
                _.type !== "PENDING" && _(!1);
                const _ = _.point;
                if (!_(_, _)) return;
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
                const _ = _();
                if (_.type !== "DRAGGING") {
                  _();
                  return;
                }
                _.preventDefault(),
                  _.actions.drop({
                    shouldBlockNextClick: !0,
                  }),
                  _();
              },
            },
            {
              eventName: "mousedown",
              _: (_) => {
                _().type === "DRAGGING" && _.preventDefault(), _();
              },
            },
            {
              eventName: "keydown",
              _: (_) => {
                if (_().type === "PENDING") {
                  _();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _();
                  return;
                }
                _(_);
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
                _().type === "PENDING" && _();
              },
            },
            {
              eventName: "webkitmouseforcedown",
              _: (_) => {
                const _ = _();
                if (
                  (_.type === "IDLE" && _(!1),
                  _.actions.shouldRespectForcePress())
                ) {
                  _();
                  return;
                }
                _.preventDefault();
              },
            },
            {
              eventName: _,
              _: _,
            },
          ];
        }
        function _(_) {
          const _ = (0, _.useRef)(_),
            _ = (0, _.useRef)(_),
            _ = (0, _._)(
              () => ({
                eventName: "mousedown",
                _: function (_) {
                  if (
                    _.defaultPrevented ||
                    _.button !== _ ||
                    _.ctrlKey ||
                    _.metaKey ||
                    _.shiftKey ||
                    _.altKey
                  )
                    return;
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
                  _.current(), _(_, _);
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
                const _ = {
                  passive: !1,
                  capture: !0,
                };
                _.current = _(window, [_, _], _);
              },
              [_, _],
            ),
            _ = (0, _._)(() => {
              _.current.type !== "IDLE" && ((_.current = _), _.current(), _());
            }, [_]),
            _ = (0, _._)(() => {
              const _ = _.current;
              _(),
                _.type === "DRAGGING" &&
                  _.actions.cancel({
                    shouldBlockNextClick: !0,
                  }),
                _.type === "PENDING" && _.actions.abort();
            }, [_]),
            _ = (0, _._)(
              function () {
                const _ = {
                    capture: !0,
                    passive: !1,
                  },
                  _ = _({
                    cancel: _,
                    completed: _,
                    getPhase: () => _.current,
                    setPhase: (_) => {
                      _.current = _;
                    },
                  });
                _.current = _(window, _, _);
              },
              [_, _],
            ),
            _ = (0, _._)(
              function (_, _) {
                _.current.type !== "IDLE" && _(!1),
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
                  _.current();
                }
              );
            },
            [_],
          );
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
          function _() {
            _(), _.drop();
          }
          return [
            {
              eventName: "keydown",
              _: (_) => {
                if (_.keyCode === _) {
                  _.preventDefault(), _();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveDown();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveUp();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveRight();
                  return;
                }
                if (_.keyCode === _) {
                  _.preventDefault(), _.moveLeft();
                  return;
                }
                if (_[_.keyCode]) {
                  _.preventDefault();
                  return;
                }
                _(_);
              },
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
        function _(_) {
          const _ = (0, _.useRef)(_),
            _ = (0, _._)(
              () => ({
                eventName: "keydown",
                _: function (_) {
                  if (_.defaultPrevented || _.keyCode !== _) return;
                  const _ = _.findClosestDraggableId(_);
                  if (!_) return;
                  const _ = _.tryGetLock(_, _, {
                    sourceEvent: _,
                  });
                  if (!_) return;
                  _.preventDefault();
                  let _ = !0;
                  const _ = _.snapLift();
                  _.current();
                  function _() {
                    _ || _(!1), (_ = !1), _.current(), _();
                  }
                  _.current = _(window, _(_, _), {
                    capture: !0,
                    passive: !1,
                  });
                },
              }),
              [_],
            ),
            _ = (0, _._)(
              function () {
                const _ = {
                  passive: !1,
                  capture: !0,
                };
                _.current = _(window, [_], _);
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
        }
        const _ = {
            type: "IDLE",
          },
          _ = 120,
          _ = 0.15;
        function _({ cancel: _, getPhase: _ }) {
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
                if (_().type !== "DRAGGING") {
                  _();
                  return;
                }
                _.keyCode === _ && _.preventDefault(), _();
              },
            },
            {
              eventName: _,
              _: _,
            },
          ];
        }
        function _({ cancel: _, completed: _, getPhase: _ }) {
          return [
            {
              eventName: "touchmove",
              options: {
                capture: !1,
              },
              _: (_) => {
                const _ = _();
                if (_.type !== "DRAGGING") {
                  _();
                  return;
                }
                _.hasMoved = !0;
                const { clientX: _, clientY: _ } = _.touches[0],
                  _ = {
                    _: _,
                    _,
                  };
                _.preventDefault(), _.actions.move(_);
              },
            },
            {
              eventName: "touchend",
              _: (_) => {
                const _ = _();
                if (_.type !== "DRAGGING") {
                  _();
                  return;
                }
                _.preventDefault(),
                  _.actions.drop({
                    shouldBlockNextClick: !0,
                  }),
                  _();
              },
            },
            {
              eventName: "touchcancel",
              _: (_) => {
                if (_().type !== "DRAGGING") {
                  _();
                  return;
                }
                _.preventDefault(), _();
              },
            },
            {
              eventName: "touchforcechange",
              _: (_) => {
                const _ = _();
                _.type === "IDLE" && _(!1);
                const _ = _.touches[0];
                if (!_ || !(_.force >= _)) return;
                const _ = _.actions.shouldRespectForcePress();
                if (_.type === "PENDING") {
                  _ && _();
                  return;
                }
                if (_) {
                  if (_.hasMoved) {
                    _.preventDefault();
                    return;
                  }
                  _();
                  return;
                }
                _.preventDefault();
              },
            },
            {
              eventName: _,
              _: _,
            },
          ];
        }
        function _(_) {
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
                  _.current(), _(_, _);
                },
              }),
              [_],
            ),
            _ = (0, _._)(
              function () {
                const _ = {
                  capture: !0,
                  passive: !1,
                };
                _.current = _(window, [_], _);
              },
              [_],
            ),
            _ = (0, _._)(() => {
              const _ = _.current;
              _.type !== "IDLE" &&
                (_.type === "PENDING" && clearTimeout(_.longPressTimerId),
                _(_),
                _.current(),
                _());
            }, [_, _]),
            _ = (0, _._)(() => {
              const _ = _.current;
              _(),
                _.type === "DRAGGING" &&
                  _.actions.cancel({
                    shouldBlockNextClick: !0,
                  }),
                _.type === "PENDING" && _.actions.abort();
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
                  _ = _(window, _(_), _),
                  _ = _(window, _(_), _);
                _.current = function () {
                  _(), _();
                };
              },
              [_, _, _],
            ),
            _ = (0, _._)(
              function () {
                const _ = _();
                _.type !== "PENDING" && _(!1);
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
                _().type !== "IDLE" && _(!1);
                const _ = setTimeout(_, _);
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
                  _.current();
                  const _ = _();
                  _.type === "PENDING" &&
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
        }
        function _(_) {}
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
          if (_ == null) return !1;
          if (_.includes(_.tagName.toLowerCase())) return !0;
          const _ = _.getAttribute("contenteditable");
          return _ === "true" || _ === ""
            ? !0
            : _ === _
              ? !1
              : _(_, _.parentElement);
        }
        function _(_, _) {
          const _ = _.target;
          return _(_) ? _(_, _) : !1;
        }
        var _ = (_) => (0, _._)(_.getBoundingClientRect()).center;
        function _(_) {
          return _ instanceof _(_).Element;
        }
        const _ = (() => {
          const _ = "matches";
          return typeof document > "u"
            ? _
            : [_, "msMatchesSelector", "webkitMatchesSelector"].find(
                (_) => _ in Element.prototype,
              ) || _;
        })();
        function _(_, _) {
          return _ == null ? null : _[_](_) ? _ : _(_.parentElement, _);
        }
        function _(_, _) {
          return _.closest ? _.closest(_) : _(_, _);
        }
        function _(_) {
          return `[${_.contextId}="${_}"]`;
        }
        function _(_, _) {
          const _ = _.target;
          if (!_(_)) return null;
          const _ = _(_),
            _ = _(_, _);
          return !_ || !_(_) ? null : _;
        }
        function _(_, _) {
          const _ = _(_, _);
          return _ ? _.getAttribute(_.draggableId) : null;
        }
        function _(_, _) {
          const _ = `[${_.contextId}="${_}"]`,
            _ = _(document, _).find((_) => _.getAttribute(_._) === _);
          return !_ || !_(_) ? null : _;
        }
        function _(_) {
          _.preventDefault();
        }
        function _({ expected: _, phase: _, isLockActive: _, shouldWarn: _ }) {
          return !(!_() || _ !== _);
        }
        function _({ lockAPI: _, store: _, registry: _, draggableId: _ }) {
          if (_.isClaimed()) return !1;
          const _ = _.draggable.findById(_);
          return !(!_ || !_.options.isEnabled || !_(_.getState(), _));
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
            _ = _(_, _.descriptor._);
          if (!_ || (_ && !_.options.canDragInteractiveElements && _(_, _)))
            return null;
          const _ = _.claim(_ || _);
          let _ = "PRE_DRAG";
          function _() {
            return _.options.shouldRespectForcePress;
          }
          function _() {
            return _.isActive(_);
          }
          function _(_, _) {
            _({
              expected: _,
              phase: _,
              isLockActive: _,
              shouldWarn: !0,
            }) && _.dispatch(_());
          }
          const _ = _.bind(null, "DRAGGING");
          function _(_) {
            function _() {
              _.release(), (_ = "COMPLETED");
            }
            _ !== "PRE_DRAG" && (_(), _(!1)),
              _.dispatch(_(_.liftActionArgs)),
              (_ = "DRAGGING");
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
                _.dispatch(
                  _({
                    reason: _,
                  }),
                );
            }
            return {
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
            };
          }
          function _(_) {
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
          }
          function _() {
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
          }
          function _() {
            _({
              expected: "PRE_DRAG",
              phase: _,
              isLockActive: _,
              shouldWarn: !0,
            }) && _.release();
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
            fluidLift: _,
            snapLift: _,
            abort: _,
          };
        }
        const _ = [_, _, _];
        function _({
          contextId: _,
          store: _,
          registry: _,
          customSensors: _,
          enableDefaultSensors: _,
        }) {
          const _ = [...(_ ? _ : []), ...(_ || [])],
            _ = (0, _.useState)(() => _())[0],
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
            _ = (0, _._)((_) => _(_, _), [_]),
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
                  _.getState().phase !== "IDLE" && _.dispatch(_()));
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
          _(_);
          for (let _ = 0; _ < _.length; _++) _[_](_);
        }
        const _ = (_) => ({
            onBeforeCapture: (_) => {
              const _ = () => {
                _.onBeforeCapture && _.onBeforeCapture(_);
              };
              _.version.startsWith("16") || _.version.startsWith("17")
                ? _()
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
            _ = _(_),
            _ = _({
              contextId: _,
              text: _,
            }),
            _ = _(_, _),
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
            _ = _(),
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
            _ = _(_),
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
              _.getState().phase !== "IDLE" && _.dispatch(_());
            }, []),
            _ = (0, _._)(() => {
              const _ = _(_).getState();
              return _.phase === "DROP_ANIMATING"
                ? !0
                : _.phase === "IDLE"
                  ? !1
                  : _.isDragging;
            }, []),
            _ = (0, _._)(
              () => ({
                isDragging: _,
                tryAbort: _,
              }),
              [_, _],
            );
          _(_);
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
              enableDefaultSensors: _.enableDefaultSensors !== !1,
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
        let _ = 0;
        function _() {
          _ = 0;
        }
        function _() {
          return (0, _._)(() => `${_++}`, []);
        }
        function _() {
          return _.useId();
        }
        var _ = _;
        function _() {
          "useId" in React || (_(), _());
        }
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
        const _ = {
            dragging: 5e3,
            dropAnimating: 4500,
          },
          _ = (_, _) => (_ ? _.drop(_.duration) : _ ? _.snap : _.fluid),
          _ = (_, _) => {
            if (_) return _ ? _.opacity.drop : _.opacity.combining;
          },
          _ = (_) =>
            _.forceShouldAnimate != null
              ? _.forceShouldAnimate
              : _.mode === "SNAP";
        function _(_) {
          const _ = _.dimension.client,
            { offset: _, combineWith: _, dropping: _ } = _,
            _ = !!_,
            _ = _(_),
            _ = !!_,
            _ = _ ? _.drop(_, _) : _.moveTo(_);
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
            zIndex: _ ? _.dropAnimating : _.dragging,
            pointerEvents: "none",
          };
        }
        function _(_) {
          return {
            transform: _.moveTo(_.offset),
            transition: _.shouldAnimateDisplacement ? void 0 : "none",
          };
        }
        function _(_) {
          return _.type === "DRAGGING" ? _(_) : _(_);
        }
        function _(_, _, _ = _) {
          const _ = window.getComputedStyle(_),
            _ = _.getBoundingClientRect(),
            _ = (0, _._)(_, _),
            _ = (0, _._)(_, _),
            _ = {
              client: _,
              tagName: _.tagName.toLowerCase(),
              display: _.display,
            },
            _ = {
              _: _.marginBox.width,
              _: _.marginBox.height,
            };
          return {
            descriptor: _,
            placeholder: _,
            displaceBy: _,
            client: _,
            page: _,
          };
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
                return _ || _(!1), _(_, _, _);
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
              if (_.current) {
                _.current = !1;
                return;
              }
              const _ = _.current;
              (_.current = _), _.draggable.update(_, _);
            }, [_, _.draggable]);
        }
        var _ = _.createContext(null);
        function _(_) {
          (_ && _(_)) || _(!1);
        }
        function _(_, _, _) {
          _(() => {
            function _(_) {
              return `Draggable[id: ${_}]: `;
            }
            const _ = _.draggableId;
            _ || _(!1),
              typeof _ != "string" && _(!1),
              Number.isInteger(_.index) || _(!1),
              _.mapped.type !== "DRAGGING" &&
                (_(_()), _.isEnabled && (_(_, _) || _(!1)));
          });
        }
        function _(_) {}
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
            if ((_(_, _, _), _(_), !_)) {
              const _ = (0, _._)(
                () => ({
                  descriptor: _,
                  registry: _,
                  getDraggableRef: _,
                  canDragInteractiveElements: _,
                  shouldRespectForcePress: _,
                  isEnabled: _,
                }),
                [_, _, _, _, _, _],
              );
              _(_);
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
                  _.type === "DRAGGING" &&
                    _.dropping &&
                    _.propertyName === "transform" &&
                    (_.version.startsWith("16") || _.version.startsWith("17")
                      ? _()
                      : (0, _.flushSync)(_));
                },
                [_, _],
              ),
              _ = (0, _._)(() => {
                const _ = _(_),
                  _ = _.type === "DRAGGING" && _.dropping ? _ : void 0;
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
        const _ = (_) => (_.combine ? _.combine.draggableId : null),
          _ = (_) =>
            _._ && _._.type === "COMBINE" ? _._.combine.draggableId : null;
        function _() {
          const _ = _((_, _) => ({
              _: _,
              _: _,
            })),
            _ = _((_, _, _ = null, _ = null, _ = null) => ({
              isDragging: !0,
              isClone: _,
              isDropAnimating: !!_,
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
                _ = _(_.impact),
                _ = _.forceShouldAnimate;
              return _(_(_._, _._), _.movementMode, _, _.isClone, _, _, _);
            }
            if (_.phase === "DROP_ANIMATING") {
              const _ = _.completed;
              if (_.result.draggableId !== _.draggableId) return null;
              const _ = _.isClone,
                _ = _.dimensions.draggables[_.draggableId],
                _ = _.result,
                _ = _.mode,
                _ = _(_),
                _ = _(_),
                _ = {
                  duration: _.dropDuration,
                  curve: _.drop,
                  moveTo: _.newHomeClientOffset,
                  opacity: _ ? _.opacity.drop : null,
                  scale: _ ? _.scale.drop : null,
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
        }
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
        function _() {
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
            _ = (_) => (_ ? _(_, _, !0) : null),
            _ = (_, _, _, _) => {
              const _ = _.displaced.visible[_],
                _ = !!(_.inVirtualList && _.effected[_]),
                _ = _(_),
                _ = _ && _.draggableId === _ ? _ : null;
              if (!_) {
                if (!_) return _(_);
                if (_.displaced.invisible[_]) return null;
                const _ = _(_.displacedBy.point),
                  _ = _(_._, _._);
                return _(_, _, !0);
              }
              if (_) return _(_);
              const _ = _.displacedBy.point,
                _ = _(_._, _._);
              return _(_, _, _.shouldAnimate);
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
            if (_.phase === "DROP_ANIMATING") {
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
        }
        var _ = _(
          () => {
            const _ = _(),
              _ = _();
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
        function _(_) {
          return _(_).isUsingCloneFor === _.draggableId && !_.isClone
            ? null
            : _.createElement(_, _);
        }
        function _(_) {
          const _ =
              typeof _.isDragDisabled == "boolean" ? !_.isDragDisabled : !0,
            _ = !!_.disableInteractiveElementBlocking,
            _ = !!_.shouldRespectForcePress;
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
          _ = _("visible"),
          _ = (_, _) => _(_.overflowX) || _(_.overflowY),
          _ = (_, _) => _(_.overflowX) && _(_.overflowY),
          _ = (_) => {
            const _ = window.getComputedStyle(_),
              _ = {
                overflowX: _.overflowX,
                overflowY: _.overflowY,
              };
            return _(_, _) || _(_, _);
          },
          _ = () => !1,
          _ = (_) =>
            _ == null
              ? null
              : _ === document.body
                ? _()
                  ? _
                  : null
                : _ === document.documentElement
                  ? null
                  : _(_)
                    ? _
                    : _(_.parentElement);
        var _ = (_) => {
            !_ || _(_.parentElement);
          },
          _ = (_) => ({
            _: _.scrollLeft,
            _: _.scrollTop,
          });
        const _ = (_) =>
          _
            ? window.getComputedStyle(_).position === "fixed"
              ? !0
              : _(_.parentElement)
            : !1;
        var _ = (_) => {
            const _ = _(_),
              _ = _(_);
            return {
              closestScrollable: _,
              isFixedOnPage: _,
            };
          },
          _ = ({
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
              _ = _ === "vertical" ? _ : _,
              _ = _({
                page: _,
                withPlaceholder: null,
                axis: _,
                frame: _,
              });
            return {
              descriptor: _,
              isCombineEnabled: _,
              isFixedOnPage: _,
              axis: _,
              isEnabled: _,
              client: _,
              page: _,
              frame: _,
              subject: _,
            };
          };
        const _ = (_, _) => {
          const _ = (0, _._)(_);
          if (!_ || _ !== _) return _;
          const _ = _.paddingBox.top - _.scrollTop,
            _ = _.paddingBox.left - _.scrollLeft,
            _ = _ + _.scrollHeight,
            _ = _ + _.scrollWidth,
            _ = {
              top: _,
              right: _,
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
            _ = _(_, _),
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
            })();
          return _({
            descriptor: _,
            isEnabled: !_,
            isCombineEnabled: _,
            isFixedOnPage: _.isFixedOnPage,
            direction: _,
            client: _,
            page: _,
            closest: _,
          });
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
              return !_ || !_.env.closestScrollable
                ? _
                : _(_.env.closestScrollable);
            }, []),
            _ = (0, _._)(() => {
              const _ = _();
              _(_._, _._);
            }, [_, _]),
            _ = (0, _._)(() => (0, _._)(_), [_]),
            _ = (0, _._)(() => {
              const _ = _.current,
                _ = _(_);
              if (
                ((_ && _) || _(!1), _.scrollOptions.shouldPublishImmediately)
              ) {
                _();
                return;
              }
              _();
            }, [_, _]),
            _ = (0, _._)(
              (_, _) => {
                _.current && _(!1);
                const _ = _.current,
                  _ = _.getDroppableRef();
                _ || _(!1);
                const _ = _(_),
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
                  _.removeAttribute(_.contextId),
                  _.removeEventListener("scroll", _, _(_.scrollOptions)));
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
            margin: _,
          },
          _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) =>
            _ || _ === "close"
              ? _
              : {
                  height: _.client.borderBox.height,
                  width: _.client.borderBox.width,
                  margin: _.client.margin,
                },
          _ = ({ isAnimatingOpenOnMount: _, placeholder: _, animate: _ }) => {
            const _ = _({
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
              transition: _ !== "none" ? _.placeholder : null,
            };
          },
          _ = (_) => {
            const _ = (0, _.useRef)(null),
              _ = (0, _._)(() => {
                _.current && (clearTimeout(_.current), (_.current = null));
              }, []),
              { animate: _, onTransitionEnd: _, onClose: _, contextId: _ } = _,
              [_, _] = (0, _.useState)(_.animate === "open");
            (0, _.useEffect)(
              () =>
                _
                  ? _ !== "open"
                    ? (_(), _(!1), _)
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
                  _.propertyName === "height" && (_(), _ === "close" && _());
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
          };
        var _ = _.memo(_);
        function _(_) {
          return typeof _ == "boolean";
        }
        function _(_, _) {
          _.forEach((_) => _(_));
        }
        const _ = [
            function ({ props: _ }) {
              _.droppableId || _(!1), typeof _.droppableId != "string" && _(!1);
            },
            function ({ props: _ }) {
              _(_.isDropDisabled) || _(!1),
                _(_.isCombineEnabled) || _(!1),
                _(_.ignoreContainerClipping) || _(!1);
            },
            function ({ getDroppableRef: _ }) {
              _(_());
            },
          ],
          _ = [
            function ({ props: _, getPlaceholderRef: _ }) {
              !_.placeholder || _();
            },
          ],
          _ = [
            function ({ props: _ }) {
              _.renderClone || _(!1);
            },
            function ({ getPlaceholderRef: _ }) {
              _() && _(!1);
            },
          ];
        function _(_) {
          _(() => {
            _(_, _),
              _.props.mode === "standard" && _(_, _),
              _.props.mode === "virtual" && _(_, _);
          });
        }
        class _ extends _.PureComponent {
          constructor(..._) {
            super(..._),
              (this.state = {
                isVisible: !!this.props._,
                data: this.props._,
                animate:
                  this.props.shouldAnimate && this.props._ ? "open" : "none",
              }),
              (this.onClose = () => {
                this.state.animate === "close" &&
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
                  isVisible: !!_._,
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
            _ = (0, _._)(() => _.current, []),
            _ = (0, _._)((_ = null) => {
              _.current = _;
            }, []);
          _({
            props: _,
            getDroppableRef: _,
            getPlaceholderRef: _,
          });
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
          function _() {
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
          }
          return _.createElement(
            _.Provider,
            {
              value: _,
            },
            _(_, _),
            _(),
          );
        };
        function _() {
          return document.body || _(!1), document.body;
        }
        const _ = {
            mode: "standard",
            type: "DEFAULT",
            direction: "vertical",
            isDropDisabled: !1,
            isCombineEnabled: !1,
            ignoreContainerClipping: !1,
            renderClone: null,
            getContainerForClone: _,
          },
          _ = (_) => {
            let _ = {
                ..._,
              },
              _;
            for (_ in _)
              _[_] === void 0 &&
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
                          dragging: _(_.descriptor),
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
              if (_.phase === "DROP_ANIMATING") {
                const _ = _.completed;
                if (!_(_, _.critical)) return _;
                const _ = _(_.critical, _.dimensions);
                return _(_, _, _(_.result) === _, _(_.impact) === _, _, _);
              }
              if (_.phase === "IDLE" && _.completed && !_.shouldFlush) {
                const _ = _.completed;
                if (!_(_, _.critical)) return _;
                const _ = _(_.impact) === _,
                  _ = !!(_.impact._ && _.impact._.type === "COMBINE"),
                  _ = _.critical.droppable._ === _;
                return _ ? (_ ? _ : _) : _ ? _ : _;
              }
              return _;
            };
          },
          {
            updateViewportMaxScroll: _,
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
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        var _;
        const _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ =
            typeof Symbol == "function" && typeof Symbol.for == "function"
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        (module_exports._ = _), (_ = _), (module_exports._ = 50);
        const _ = 2147483647;
        (_ = _),
          (_.TYPED_ARRAY_SUPPORT = _()),
          !_.TYPED_ARRAY_SUPPORT &&
            typeof console < "u" &&
            typeof console.error == "function" &&
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
            );
        function _() {
          try {
            const _ = new Uint8Array(1),
              _ = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(_, Uint8Array.prototype),
              Object.setPrototypeOf(_, _),
              _.foo() === 42
            );
          } catch {
            return !1;
          }
        }
        Object.defineProperty(_.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (_.isBuffer(this)) return this.buffer;
          },
        }),
          Object.defineProperty(_.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (_.isBuffer(this)) return this.byteOffset;
            },
          });
        function _(_) {
          if (_ > _)
            throw new RangeError(
              'The value "' + _ + '" is invalid for option "size"',
            );
          const _ = new Uint8Array(_);
          return Object.setPrototypeOf(_, _.prototype), _;
        }
        function _(_, _, _) {
          if (typeof _ == "number") {
            if (typeof _ == "string")
              throw new TypeError(
                'The "string" argument must be of type string. Received type number',
              );
            return _(_);
          }
          return _(_, _, _);
        }
        _.poolSize = 8192;
        function _(_, _, _) {
          if (typeof _ == "string") return _(_, _);
          if (ArrayBuffer.isView(_)) return _(_);
          if (_ == null)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof _,
            );
          if (
            _(_, ArrayBuffer) ||
            (_ && _(_.buffer, ArrayBuffer)) ||
            (typeof SharedArrayBuffer < "u" &&
              (_(_, SharedArrayBuffer) ||
                (_ && _(_.buffer, SharedArrayBuffer))))
          )
            return _(_, _, _);
          if (typeof _ == "number")
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number',
            );
          const _ = _.valueOf && _.valueOf();
          if (_ != null && _ !== _) return _.from(_, _, _);
          const _ = _(_);
          if (_) return _;
          if (
            typeof Symbol < "u" &&
            Symbol.toPrimitive != null &&
            typeof _[Symbol.toPrimitive] == "function"
          )
            return _.from(_[Symbol.toPrimitive]("string"), _, _);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof _,
          );
        }
        (_.from = function (_, _, _) {
          return _(_, _, _);
        }),
          Object.setPrototypeOf(_.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(_, Uint8Array);
        function _(_) {
          if (typeof _ != "number")
            throw new TypeError('"size" argument must be of type number');
          if (_ < 0)
            throw new RangeError(
              'The value "' + _ + '" is invalid for option "size"',
            );
        }
        function _(_, _, _) {
          return (
            _(_),
            _ <= 0
              ? _(_)
              : _ !== void 0
                ? typeof _ == "string"
                  ? _(_).fill(_, _)
                  : _(_).fill(_)
                : _(_)
          );
        }
        _.alloc = function (_, _, _) {
          return _(_, _, _);
        };
        function _(_) {
          return _(_), _(_ < 0 ? 0 : _(_) | 0);
        }
        (_.allocUnsafe = function (_) {
          return _(_);
        }),
          (_.allocUnsafeSlow = function (_) {
            return _(_);
          });
        function _(_, _) {
          if (
            ((typeof _ != "string" || _ === "") && (_ = "utf8"),
            !_.isEncoding(_))
          )
            throw new TypeError("Unknown encoding: " + _);
          const _ = _(_, _) | 0;
          let _ = _(_);
          const _ = _.write(_, _);
          return _ !== _ && (_ = _.slice(0, _)), _;
        }
        function _(_) {
          const _ = _.length < 0 ? 0 : _(_.length) | 0,
            _ = _(_);
          for (let _ = 0; _ < _; _ += 1) _[_] = _[_] & 255;
          return _;
        }
        function _(_) {
          if (_(_, Uint8Array)) {
            const _ = new Uint8Array(_);
            return _(_.buffer, _.byteOffset, _.byteLength);
          }
          return _(_);
        }
        function _(_, _, _) {
          if (_ < 0 || _.byteLength < _)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (_.byteLength < _ + (_ || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let _;
          return (
            _ === void 0 && _ === void 0
              ? (_ = new Uint8Array(_))
              : _ === void 0
                ? (_ = new Uint8Array(_, _))
                : (_ = new Uint8Array(_, _, _)),
            Object.setPrototypeOf(_, _.prototype),
            _
          );
        }
        function _(_) {
          if (_.isBuffer(_)) {
            const _ = _(_.length) | 0,
              _ = _(_);
            return _.length === 0 || _.copy(_, 0, 0, _), _;
          }
          if (_.length !== void 0)
            return typeof _.length != "number" || _(_.length) ? _(0) : _(_);
          if (_.type === "Buffer" && Array.isArray(_.data)) return _(_.data);
        }
        function _(_) {
          if (_ >= _)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                _.toString(16) +
                " bytes",
            );
          return _ | 0;
        }
        function _(_) {
          return +_ != _ && (_ = 0), _.alloc(+_);
        }
        (_.isBuffer = function (_) {
          return _ != null && _._isBuffer === !0 && _ !== _.prototype;
        }),
          (_.compare = function (_, _) {
            if (
              (_(_, Uint8Array) && (_ = _.from(_, _.offset, _.byteLength)),
              _(_, Uint8Array) && (_ = _.from(_, _.offset, _.byteLength)),
              !_.isBuffer(_) || !_.isBuffer(_))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
              );
            if (_ === _) return 0;
            let _ = _.length,
              _ = _.length;
            for (let _ = 0, _ = Math.min(_, _); _ < _; ++_)
              if (_[_] !== _[_]) {
                (_ = _[_]), (_ = _[_]);
                break;
              }
            return _ < _ ? -1 : _ < _ ? 1 : 0;
          }),
          (_.isEncoding = function (_) {
            switch (String(_).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (_.concat = function (_, _) {
            if (!Array.isArray(_))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            if (_.length === 0) return _.alloc(0);
            let _;
            if (_ === void 0)
              for (_ = 0, _ = 0; _ < _.length; ++_) _ += _[_].length;
            const _ = _.allocUnsafe(_);
            let _ = 0;
            for (_ = 0; _ < _.length; ++_) {
              let _ = _[_];
              if (_(_, Uint8Array))
                _ + _.length > _.length
                  ? (_.isBuffer(_) || (_ = _.from(_)), _.copy(_, _))
                  : Uint8Array.prototype.set.call(_, _, _);
              else if (_.isBuffer(_)) _.copy(_, _);
              else
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              _ += _.length;
            }
            return _;
          });
        function _(_, _) {
          if (_.isBuffer(_)) return _.length;
          if (ArrayBuffer.isView(_) || _(_, ArrayBuffer)) return _.byteLength;
          if (typeof _ != "string")
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof _,
            );
          const _ = _.length,
            _ = arguments.length > 2 && arguments[2] === !0;
          if (!_ && _ === 0) return 0;
          let _ = !1;
          for (;;)
            switch (_) {
              case "ascii":
              case "latin1":
              case "binary":
                return _;
              case "utf8":
              case "utf-8":
                return _(_).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _ * 2;
              case "hex":
                return _ >>> 1;
              case "base64":
                return _(_).length;
              default:
                if (_) return _ ? -1 : _(_).length;
                (_ = ("" + _).toLowerCase()), (_ = !0);
            }
        }
        _.byteLength = _;
        function _(_, _, _) {
          let _ = !1;
          if (
            ((_ === void 0 || _ < 0) && (_ = 0),
            _ > this.length ||
              ((_ === void 0 || _ > this.length) && (_ = this.length),
              _ <= 0) ||
              ((_ >>>= 0), (_ >>>= 0), _ <= _))
          )
            return "";
          for (_ || (_ = "utf8"); ; )
            switch (_) {
              case "hex":
                return _(this, _, _);
              case "utf8":
              case "utf-8":
                return _(this, _, _);
              case "ascii":
                return _(this, _, _);
              case "latin1":
              case "binary":
                return _(this, _, _);
              case "base64":
                return _(this, _, _);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _(this, _, _);
              default:
                if (_) throw new TypeError("Unknown encoding: " + _);
                (_ = (_ + "").toLowerCase()), (_ = !0);
            }
        }
        _.prototype._isBuffer = !0;
        function _(_, _, _) {
          const _ = _[_];
          (_[_] = _[_]), (_[_] = _);
        }
        (_.prototype.swap16 = function () {
          const _ = this.length;
          if (_ % 2 !== 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (let _ = 0; _ < _; _ += 2) _(this, _, _ + 1);
          return this;
        }),
          (_.prototype.swap32 = function () {
            const _ = this.length;
            if (_ % 4 !== 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let _ = 0; _ < _; _ += 4)
              _(this, _, _ + 3), _(this, _ + 1, _ + 2);
            return this;
          }),
          (_.prototype.swap64 = function () {
            const _ = this.length;
            if (_ % 8 !== 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let _ = 0; _ < _; _ += 8)
              _(this, _, _ + 7),
                _(this, _ + 1, _ + 6),
                _(this, _ + 2, _ + 5),
                _(this, _ + 3, _ + 4);
            return this;
          }),
          (_.prototype.toString = function () {
            const _ = this.length;
            return _ === 0
              ? ""
              : arguments.length === 0
                ? _(this, 0, _)
                : _.apply(this, arguments);
          }),
          (_.prototype.toLocaleString = _.prototype.toString),
          (_.prototype.equals = function (_) {
            if (!_.isBuffer(_))
              throw new TypeError("Argument must be a Buffer");
            return this === _ ? !0 : _.compare(this, _) === 0;
          }),
          (_.prototype.inspect = function () {
            let _ = "";
            const _ = _._;
            return (
              (_ = this.toString("hex", 0, _)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > _ && (_ += " ... "),
              "<Buffer " + _ + ">"
            );
          }),
          _ && (_.prototype[_] = _.prototype.inspect),
          (_.prototype.compare = function (_, _, _, _, _) {
            if (
              (_(_, Uint8Array) && (_ = _.from(_, _.offset, _.byteLength)),
              !_.isBuffer(_))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof _,
              );
            if (
              (_ === void 0 && (_ = 0),
              _ === void 0 && (_ = _ ? _.length : 0),
              _ === void 0 && (_ = 0),
              _ === void 0 && (_ = this.length),
              _ < 0 || _ > _.length || _ < 0 || _ > this.length)
            )
              throw new RangeError("out of range index");
            if (_ >= _ && _ >= _) return 0;
            if (_ >= _) return -1;
            if (_ >= _) return 1;
            if (((_ >>>= 0), (_ >>>= 0), (_ >>>= 0), (_ >>>= 0), this === _))
              return 0;
            let _ = _ - _,
              _ = _ - _;
            const _ = Math.min(_, _),
              _ = this.slice(_, _),
              _ = _.slice(_, _);
            for (let _ = 0; _ < _; ++_)
              if (_[_] !== _[_]) {
                (_ = _[_]), (_ = _[_]);
                break;
              }
            return _ < _ ? -1 : _ < _ ? 1 : 0;
          });
        function _(_, _, _, _, _) {
          if (_.length === 0) return -1;
          if (
            (typeof _ == "string"
              ? ((_ = _), (_ = 0))
              : _ > 2147483647
                ? (_ = 2147483647)
                : _ < -2147483648 && (_ = -2147483648),
            (_ = +_),
            _(_) && (_ = _ ? 0 : _.length - 1),
            _ < 0 && (_ = _.length + _),
            _ >= _.length)
          ) {
            if (_) return -1;
            _ = _.length - 1;
          } else if (_ < 0)
            if (_) _ = 0;
            else return -1;
          if ((typeof _ == "string" && (_ = _.from(_, _)), _.isBuffer(_)))
            return _.length === 0 ? -1 : _(_, _, _, _, _);
          if (typeof _ == "number")
            return (
              (_ = _ & 255),
              typeof Uint8Array.prototype.indexOf == "function"
                ? _
                  ? Uint8Array.prototype.indexOf.call(_, _, _)
                  : Uint8Array.prototype.lastIndexOf.call(_, _, _)
                : _(_, [_], _, _, _)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function _(_, _, _, _, _) {
          let _ = 1,
            _ = _.length,
            _ = _.length;
          if (
            _ !== void 0 &&
            ((_ = String(_).toLowerCase()),
            _ === "ucs2" ||
              _ === "ucs-2" ||
              _ === "utf16le" ||
              _ === "utf-16le")
          ) {
            if (_.length < 2 || _.length < 2) return -1;
            (_ = 2), (_ /= 2), (_ /= 2), (_ /= 2);
          }
          function _(_, _) {
            return _ === 1 ? _[_] : _.readUInt16BE(_ * _);
          }
          let _;
          if (_) {
            let _ = -1;
            for (_ = _; _ < _; _++)
              if (_(_, _) === _(_, _ === -1 ? 0 : _ - _)) {
                if ((_ === -1 && (_ = _), _ - _ + 1 === _)) return _ * _;
              } else _ !== -1 && (_ -= _ - _), (_ = -1);
          } else
            for (_ + _ > _ && (_ = _ - _), _ = _; _ >= 0; _--) {
              let _ = !0;
              for (let _ = 0; _ < _; _++)
                if (_(_, _ + _) !== _(_, _)) {
                  _ = !1;
                  break;
                }
              if (_) return _;
            }
          return -1;
        }
        (_.prototype.includes = function (_, _, _) {
          return this.indexOf(_, _, _) !== -1;
        }),
          (_.prototype.indexOf = function (_, _, _) {
            return _(this, _, _, _, !0);
          }),
          (_.prototype.lastIndexOf = function (_, _, _) {
            return _(this, _, _, _, !1);
          });
        function _(_, _, _, _) {
          _ = Number(_) || 0;
          const _ = _.length - _;
          _ ? ((_ = Number(_)), _ > _ && (_ = _)) : (_ = _);
          const _ = _.length;
          _ > _ / 2 && (_ = _ / 2);
          let _;
          for (_ = 0; _ < _; ++_) {
            const _ = parseInt(_.substr(_ * 2, 2), 16);
            if (_(_)) return _;
            _[_ + _] = _;
          }
          return _;
        }
        function _(_, _, _, _) {
          return _(_(_, _.length - _), _, _, _);
        }
        function _(_, _, _, _) {
          return _(_(_), _, _, _);
        }
        function _(_, _, _, _) {
          return _(_(_), _, _, _);
        }
        function _(_, _, _, _) {
          return _(_(_, _.length - _), _, _, _);
        }
        (_.prototype.write = function (_, _, _, _) {
          if (_ === void 0) (_ = "utf8"), (_ = this.length), (_ = 0);
          else if (_ === void 0 && typeof _ == "string")
            (_ = _), (_ = this.length), (_ = 0);
          else if (isFinite(_))
            (_ = _ >>> 0),
              isFinite(_)
                ? ((_ = _ >>> 0), _ === void 0 && (_ = "utf8"))
                : ((_ = _), (_ = void 0));
          else
            throw new Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported",
            );
          const _ = this.length - _;
          if (
            ((_ === void 0 || _ > _) && (_ = _),
            (_.length > 0 && (_ < 0 || _ < 0)) || _ > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          _ || (_ = "utf8");
          let _ = !1;
          for (;;)
            switch (_) {
              case "hex":
                return _(this, _, _, _);
              case "utf8":
              case "utf-8":
                return _(this, _, _, _);
              case "ascii":
              case "latin1":
              case "binary":
                return _(this, _, _, _);
              case "base64":
                return _(this, _, _, _);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _(this, _, _, _);
              default:
                if (_) throw new TypeError("Unknown encoding: " + _);
                (_ = ("" + _).toLowerCase()), (_ = !0);
            }
        }),
          (_.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function _(_, _, _) {
          return _ === 0 && _ === _.length
            ? _.fromByteArray(_)
            : _.fromByteArray(_.slice(_, _));
        }
        function _(_, _, _) {
          _ = Math.min(_.length, _);
          const _ = [];
          let _ = _;
          for (; _ < _; ) {
            const _ = _[_];
            let _ = null,
              _ = _ > 239 ? 4 : _ > 223 ? 3 : _ > 191 ? 2 : 1;
            if (_ + _ <= _) {
              let _, _, _, _;
              switch (_) {
                case 1:
                  _ < 128 && (_ = _);
                  break;
                case 2:
                  (_ = _[_ + 1]),
                    (_ & 192) === 128 &&
                      ((_ = ((_ & 31) << 6) | (_ & 63)), _ > 127 && (_ = _));
                  break;
                case 3:
                  (_ = _[_ + 1]),
                    (_ = _[_ + 2]),
                    (_ & 192) === 128 &&
                      (_ & 192) === 128 &&
                      ((_ = ((_ & 15) << 12) | ((_ & 63) << 6) | (_ & 63)),
                      _ > 2047 && (_ < 55296 || _ > 57343) && (_ = _));
                  break;
                case 4:
                  (_ = _[_ + 1]),
                    (_ = _[_ + 2]),
                    (_ = _[_ + 3]),
                    (_ & 192) === 128 &&
                      (_ & 192) === 128 &&
                      (_ & 192) === 128 &&
                      ((_ =
                        ((_ & 15) << 18) |
                        ((_ & 63) << 12) |
                        ((_ & 63) << 6) |
                        (_ & 63)),
                      _ > 65535 && _ < 1114112 && (_ = _));
              }
            }
            _ === null
              ? ((_ = 65533), (_ = 1))
              : _ > 65535 &&
                ((_ -= 65536),
                _.push(((_ >>> 10) & 1023) | 55296),
                (_ = 56320 | (_ & 1023))),
              _.push(_),
              (_ += _);
          }
          return _(_);
        }
        const _ = 4096;
        function _(_) {
          const _ = _.length;
          if (_ <= _) return String.fromCharCode.apply(String, _);
          let _ = "",
            _ = 0;
          for (; _ < _; )
            _ += String.fromCharCode.apply(String, _.slice(_, (_ += _)));
          return _;
        }
        function _(_, _, _) {
          let _ = "";
          _ = Math.min(_.length, _);
          for (let _ = _; _ < _; ++_) _ += String.fromCharCode(_[_] & 127);
          return _;
        }
        function _(_, _, _) {
          let _ = "";
          _ = Math.min(_.length, _);
          for (let _ = _; _ < _; ++_) _ += String.fromCharCode(_[_]);
          return _;
        }
        function _(_, _, _) {
          const _ = _.length;
          (!_ || _ < 0) && (_ = 0), (!_ || _ < 0 || _ > _) && (_ = _);
          let _ = "";
          for (let _ = _; _ < _; ++_) _ += _[_[_]];
          return _;
        }
        function _(_, _, _) {
          const _ = _.slice(_, _);
          let _ = "";
          for (let _ = 0; _ < _.length - 1; _ += 2)
            _ += String.fromCharCode(_[_] + _[_ + 1] * 256);
          return _;
        }
        _.prototype.slice = function (_, _) {
          const _ = this.length;
          (_ = ~~_),
            (_ = _ === void 0 ? _ : ~~_),
            _ < 0 ? ((_ += _), _ < 0 && (_ = 0)) : _ > _ && (_ = _),
            _ < 0 ? ((_ += _), _ < 0 && (_ = 0)) : _ > _ && (_ = _),
            _ < _ && (_ = _);
          const _ = this.subarray(_, _);
          return Object.setPrototypeOf(_, _.prototype), _;
        };
        function _(_, _, _) {
          if (_ % 1 !== 0 || _ < 0) throw new RangeError("offset is not uint");
          if (_ + _ > _)
            throw new RangeError("Trying to access beyond buffer length");
        }
        (_.prototype.readUintLE = _.prototype.readUIntLE =
          function (_, _, _) {
            (_ = _ >>> 0), (_ = _ >>> 0), _ || _(_, _, this.length);
            let _ = this[_],
              _ = 1,
              _ = 0;
            for (; ++_ < _ && (_ *= 256); ) _ += this[_ + _] * _;
            return _;
          }),
          (_.prototype.readUintBE = _.prototype.readUIntBE =
            function (_, _, _) {
              (_ = _ >>> 0), (_ = _ >>> 0), _ || _(_, _, this.length);
              let _ = this[_ + --_],
                _ = 1;
              for (; _ > 0 && (_ *= 256); ) _ += this[_ + --_] * _;
              return _;
            }),
          (_.prototype.readUint8 = _.prototype.readUInt8 =
            function (_, _) {
              return (_ = _ >>> 0), _ || _(_, 1, this.length), this[_];
            }),
          (_.prototype.readUint16LE = _.prototype.readUInt16LE =
            function (_, _) {
              return (
                (_ = _ >>> 0),
                _ || _(_, 2, this.length),
                this[_] | (this[_ + 1] << 8)
              );
            }),
          (_.prototype.readUint16BE = _.prototype.readUInt16BE =
            function (_, _) {
              return (
                (_ = _ >>> 0),
                _ || _(_, 2, this.length),
                (this[_] << 8) | this[_ + 1]
              );
            }),
          (_.prototype.readUint32LE = _.prototype.readUInt32LE =
            function (_, _) {
              return (
                (_ = _ >>> 0),
                _ || _(_, 4, this.length),
                (this[_] | (this[_ + 1] << 8) | (this[_ + 2] << 16)) +
                  this[_ + 3] * 16777216
              );
            }),
          (_.prototype.readUint32BE = _.prototype.readUInt32BE =
            function (_, _) {
              return (
                (_ = _ >>> 0),
                _ || _(_, 4, this.length),
                this[_] * 16777216 +
                  ((this[_ + 1] << 16) | (this[_ + 2] << 8) | this[_ + 3])
              );
            }),
          (_.prototype.readBigUInt64LE = _(function (_) {
            (_ = _ >>> 0), _(_, "offset");
            const _ = this[_],
              _ = this[_ + 7];
            (_ === void 0 || _ === void 0) && _(_, this.length - 8);
            const _ =
                _ +
                this[++_] * 2 ** 8 +
                this[++_] * 2 ** 16 +
                this[++_] * 2 ** 24,
              _ =
                this[++_] +
                this[++_] * 2 ** 8 +
                this[++_] * 2 ** 16 +
                _ * 2 ** 24;
            return BigInt(_) + (BigInt(_) << BigInt(32));
          })),
          (_.prototype.readBigUInt64BE = _(function (_) {
            (_ = _ >>> 0), _(_, "offset");
            const _ = this[_],
              _ = this[_ + 7];
            (_ === void 0 || _ === void 0) && _(_, this.length - 8);
            const _ =
                _ * 2 ** 24 +
                this[++_] * 2 ** 16 +
                this[++_] * 2 ** 8 +
                this[++_],
              _ =
                this[++_] * 2 ** 24 +
                this[++_] * 2 ** 16 +
                this[++_] * 2 ** 8 +
                _;
            return (BigInt(_) << BigInt(32)) + BigInt(_);
          })),
          (_.prototype.readIntLE = function (_, _, _) {
            (_ = _ >>> 0), (_ = _ >>> 0), _ || _(_, _, this.length);
            let _ = this[_],
              _ = 1,
              _ = 0;
            for (; ++_ < _ && (_ *= 256); ) _ += this[_ + _] * _;
            return (_ *= 128), _ >= _ && (_ -= Math.pow(2, 8 * _)), _;
          }),
          (_.prototype.readIntBE = function (_, _, _) {
            (_ = _ >>> 0), (_ = _ >>> 0), _ || _(_, _, this.length);
            let _ = _,
              _ = 1,
              _ = this[_ + --_];
            for (; _ > 0 && (_ *= 256); ) _ += this[_ + --_] * _;
            return (_ *= 128), _ >= _ && (_ -= Math.pow(2, 8 * _)), _;
          }),
          (_.prototype.readInt8 = function (_, _) {
            return (
              (_ = _ >>> 0),
              _ || _(_, 1, this.length),
              this[_] & 128 ? (255 - this[_] + 1) * -1 : this[_]
            );
          }),
          (_.prototype.readInt16LE = function (_, _) {
            (_ = _ >>> 0), _ || _(_, 2, this.length);
            const _ = this[_] | (this[_ + 1] << 8);
            return _ & 32768 ? _ | 4294901760 : _;
          }),
          (_.prototype.readInt16BE = function (_, _) {
            (_ = _ >>> 0), _ || _(_, 2, this.length);
            const _ = this[_ + 1] | (this[_] << 8);
            return _ & 32768 ? _ | 4294901760 : _;
          }),
          (_.prototype.readInt32LE = function (_, _) {
            return (
              (_ = _ >>> 0),
              _ || _(_, 4, this.length),
              this[_] |
                (this[_ + 1] << 8) |
                (this[_ + 2] << 16) |
                (this[_ + 3] << 24)
            );
          }),
          (_.prototype.readInt32BE = function (_, _) {
            return (
              (_ = _ >>> 0),
              _ || _(_, 4, this.length),
              (this[_] << 24) |
                (this[_ + 1] << 16) |
                (this[_ + 2] << 8) |
                this[_ + 3]
            );
          }),
          (_.prototype.readBigInt64LE = _(function (_) {
            (_ = _ >>> 0), _(_, "offset");
            const _ = this[_],
              _ = this[_ + 7];
            (_ === void 0 || _ === void 0) && _(_, this.length - 8);
            const _ =
              this[_ + 4] +
              this[_ + 5] * 2 ** 8 +
              this[_ + 6] * 2 ** 16 +
              (_ << 24);
            return (
              (BigInt(_) << BigInt(32)) +
              BigInt(
                _ +
                  this[++_] * 2 ** 8 +
                  this[++_] * 2 ** 16 +
                  this[++_] * 2 ** 24,
              )
            );
          })),
          (_.prototype.readBigInt64BE = _(function (_) {
            (_ = _ >>> 0), _(_, "offset");
            const _ = this[_],
              _ = this[_ + 7];
            (_ === void 0 || _ === void 0) && _(_, this.length - 8);
            const _ =
              (_ << 24) + this[++_] * 2 ** 16 + this[++_] * 2 ** 8 + this[++_];
            return (
              (BigInt(_) << BigInt(32)) +
              BigInt(
                this[++_] * 2 ** 24 +
                  this[++_] * 2 ** 16 +
                  this[++_] * 2 ** 8 +
                  _,
              )
            );
          })),
          (_.prototype.readFloatLE = function (_, _) {
            return (
              (_ = _ >>> 0),
              _ || _(_, 4, this.length),
              _.read(this, _, !0, 23, 4)
            );
          }),
          (_.prototype.readFloatBE = function (_, _) {
            return (
              (_ = _ >>> 0),
              _ || _(_, 4, this.length),
              _.read(this, _, !1, 23, 4)
            );
          }),
          (_.prototype.readDoubleLE = function (_, _) {
            return (
              (_ = _ >>> 0),
              _ || _(_, 8, this.length),
              _.read(this, _, !0, 52, 8)
            );
          }),
          (_.prototype.readDoubleBE = function (_, _) {
            return (
              (_ = _ >>> 0),
              _ || _(_, 8, this.length),
              _.read(this, _, !1, 52, 8)
            );
          });
        function _(_, _, _, _, _, _) {
          if (!_.isBuffer(_))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (_ > _ || _ < _)
            throw new RangeError('"value" argument is out of bounds');
          if (_ + _ > _.length) throw new RangeError("Index out of range");
        }
        (_.prototype.writeUintLE = _.prototype.writeUIntLE =
          function (_, _, _, _) {
            if (((_ = +_), (_ = _ >>> 0), (_ = _ >>> 0), !_)) {
              const _ = Math.pow(2, 8 * _) - 1;
              _(this, _, _, _, _, 0);
            }
            let _ = 1,
              _ = 0;
            for (this[_] = _ & 255; ++_ < _ && (_ *= 256); )
              this[_ + _] = (_ / _) & 255;
            return _ + _;
          }),
          (_.prototype.writeUintBE = _.prototype.writeUIntBE =
            function (_, _, _, _) {
              if (((_ = +_), (_ = _ >>> 0), (_ = _ >>> 0), !_)) {
                const _ = Math.pow(2, 8 * _) - 1;
                _(this, _, _, _, _, 0);
              }
              let _ = _ - 1,
                _ = 1;
              for (this[_ + _] = _ & 255; --_ >= 0 && (_ *= 256); )
                this[_ + _] = (_ / _) & 255;
              return _ + _;
            }),
          (_.prototype.writeUint8 = _.prototype.writeUInt8 =
            function (_, _, _) {
              return (
                (_ = +_),
                (_ = _ >>> 0),
                _ || _(this, _, _, 1, 255, 0),
                (this[_] = _ & 255),
                _ + 1
              );
            }),
          (_.prototype.writeUint16LE = _.prototype.writeUInt16LE =
            function (_, _, _) {
              return (
                (_ = +_),
                (_ = _ >>> 0),
                _ || _(this, _, _, 2, 65535, 0),
                (this[_] = _ & 255),
                (this[_ + 1] = _ >>> 8),
                _ + 2
              );
            }),
          (_.prototype.writeUint16BE = _.prototype.writeUInt16BE =
            function (_, _, _) {
              return (
                (_ = +_),
                (_ = _ >>> 0),
                _ || _(this, _, _, 2, 65535, 0),
                (this[_] = _ >>> 8),
                (this[_ + 1] = _ & 255),
                _ + 2
              );
            }),
          (_.prototype.writeUint32LE = _.prototype.writeUInt32LE =
            function (_, _, _) {
              return (
                (_ = +_),
                (_ = _ >>> 0),
                _ || _(this, _, _, 4, 4294967295, 0),
                (this[_ + 3] = _ >>> 24),
                (this[_ + 2] = _ >>> 16),
                (this[_ + 1] = _ >>> 8),
                (this[_] = _ & 255),
                _ + 4
              );
            }),
          (_.prototype.writeUint32BE = _.prototype.writeUInt32BE =
            function (_, _, _) {
              return (
                (_ = +_),
                (_ = _ >>> 0),
                _ || _(this, _, _, 4, 4294967295, 0),
                (this[_] = _ >>> 24),
                (this[_ + 1] = _ >>> 16),
                (this[_ + 2] = _ >>> 8),
                (this[_ + 3] = _ & 255),
                _ + 4
              );
            });
        function _(_, _, _, _, _) {
          _(_, _, _, _, _, 7);
          let _ = Number(_ & BigInt(4294967295));
          (_[_++] = _),
            (_ = _ >> 8),
            (_[_++] = _),
            (_ = _ >> 8),
            (_[_++] = _),
            (_ = _ >> 8),
            (_[_++] = _);
          let _ = Number((_ >> BigInt(32)) & BigInt(4294967295));
          return (
            (_[_++] = _),
            (_ = _ >> 8),
            (_[_++] = _),
            (_ = _ >> 8),
            (_[_++] = _),
            (_ = _ >> 8),
            (_[_++] = _),
            _
          );
        }
        function _(_, _, _, _, _) {
          _(_, _, _, _, _, 7);
          let _ = Number(_ & BigInt(4294967295));
          (_[_ + 7] = _),
            (_ = _ >> 8),
            (_[_ + 6] = _),
            (_ = _ >> 8),
            (_[_ + 5] = _),
            (_ = _ >> 8),
            (_[_ + 4] = _);
          let _ = Number((_ >> BigInt(32)) & BigInt(4294967295));
          return (
            (_[_ + 3] = _),
            (_ = _ >> 8),
            (_[_ + 2] = _),
            (_ = _ >> 8),
            (_[_ + 1] = _),
            (_ = _ >> 8),
            (_[_] = _),
            _ + 8
          );
        }
        (_.prototype.writeBigUInt64LE = _(function (_, _ = 0) {
          return _(this, _, _, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
          (_.prototype.writeBigUInt64BE = _(function (_, _ = 0) {
            return _(this, _, _, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (_.prototype.writeIntLE = function (_, _, _, _) {
            if (((_ = +_), (_ = _ >>> 0), !_)) {
              const _ = Math.pow(2, 8 * _ - 1);
              _(this, _, _, _, _ - 1, -_);
            }
            let _ = 0,
              _ = 1,
              _ = 0;
            for (this[_] = _ & 255; ++_ < _ && (_ *= 256); )
              _ < 0 && _ === 0 && this[_ + _ - 1] !== 0 && (_ = 1),
                (this[_ + _] = (((_ / _) >> 0) - _) & 255);
            return _ + _;
          }),
          (_.prototype.writeIntBE = function (_, _, _, _) {
            if (((_ = +_), (_ = _ >>> 0), !_)) {
              const _ = Math.pow(2, 8 * _ - 1);
              _(this, _, _, _, _ - 1, -_);
            }
            let _ = _ - 1,
              _ = 1,
              _ = 0;
            for (this[_ + _] = _ & 255; --_ >= 0 && (_ *= 256); )
              _ < 0 && _ === 0 && this[_ + _ + 1] !== 0 && (_ = 1),
                (this[_ + _] = (((_ / _) >> 0) - _) & 255);
            return _ + _;
          }),
          (_.prototype.writeInt8 = function (_, _, _) {
            return (
              (_ = +_),
              (_ = _ >>> 0),
              _ || _(this, _, _, 1, 127, -128),
              _ < 0 && (_ = 255 + _ + 1),
              (this[_] = _ & 255),
              _ + 1
            );
          }),
          (_.prototype.writeInt16LE = function (_, _, _) {
            return (
              (_ = +_),
              (_ = _ >>> 0),
              _ || _(this, _, _, 2, 32767, -32768),
              (this[_] = _ & 255),
              (this[_ + 1] = _ >>> 8),
              _ + 2
            );
          }),
          (_.prototype.writeInt16BE = function (_, _, _) {
            return (
              (_ = +_),
              (_ = _ >>> 0),
              _ || _(this, _, _, 2, 32767, -32768),
              (this[_] = _ >>> 8),
              (this[_ + 1] = _ & 255),
              _ + 2
            );
          }),
          (_.prototype.writeInt32LE = function (_, _, _) {
            return (
              (_ = +_),
              (_ = _ >>> 0),
              _ || _(this, _, _, 4, 2147483647, -2147483648),
              (this[_] = _ & 255),
              (this[_ + 1] = _ >>> 8),
              (this[_ + 2] = _ >>> 16),
              (this[_ + 3] = _ >>> 24),
              _ + 4
            );
          }),
          (_.prototype.writeInt32BE = function (_, _, _) {
            return (
              (_ = +_),
              (_ = _ >>> 0),
              _ || _(this, _, _, 4, 2147483647, -2147483648),
              _ < 0 && (_ = 4294967295 + _ + 1),
              (this[_] = _ >>> 24),
              (this[_ + 1] = _ >>> 16),
              (this[_ + 2] = _ >>> 8),
              (this[_ + 3] = _ & 255),
              _ + 4
            );
          }),
          (_.prototype.writeBigInt64LE = _(function (_, _ = 0) {
            return _(
              this,
              _,
              _,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff"),
            );
          })),
          (_.prototype.writeBigInt64BE = _(function (_, _ = 0) {
            return _(
              this,
              _,
              _,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff"),
            );
          }));
        function _(_, _, _, _, _, _) {
          if (_ + _ > _.length) throw new RangeError("Index out of range");
          if (_ < 0) throw new RangeError("Index out of range");
        }
        function _(_, _, _, _, _) {
          return (
            (_ = +_),
            (_ = _ >>> 0),
            _ || _(_, _, _, 4, 34028234663852886e22, -34028234663852886e22),
            _.write(_, _, _, _, 23, 4),
            _ + 4
          );
        }
        (_.prototype.writeFloatLE = function (_, _, _) {
          return _(this, _, _, !0, _);
        }),
          (_.prototype.writeFloatBE = function (_, _, _) {
            return _(this, _, _, !1, _);
          });
        function _(_, _, _, _, _) {
          return (
            (_ = +_),
            (_ = _ >>> 0),
            _ || _(_, _, _, 8, 17976931348623157e292, -17976931348623157e292),
            _.write(_, _, _, _, 52, 8),
            _ + 8
          );
        }
        (_.prototype.writeDoubleLE = function (_, _, _) {
          return _(this, _, _, !0, _);
        }),
          (_.prototype.writeDoubleBE = function (_, _, _) {
            return _(this, _, _, !1, _);
          }),
          (_.prototype.copy = function (_, _, _, _) {
            if (!_.isBuffer(_))
              throw new TypeError("argument should be a Buffer");
            if (
              (_ || (_ = 0),
              !_ && _ !== 0 && (_ = this.length),
              _ >= _.length && (_ = _.length),
              _ || (_ = 0),
              _ > 0 && _ < _ && (_ = _),
              _ === _ || _.length === 0 || this.length === 0)
            )
              return 0;
            if (_ < 0) throw new RangeError("targetStart out of bounds");
            if (_ < 0 || _ >= this.length)
              throw new RangeError("Index out of range");
            if (_ < 0) throw new RangeError("sourceEnd out of bounds");
            _ > this.length && (_ = this.length),
              _.length - _ < _ - _ && (_ = _.length - _ + _);
            const _ = _ - _;
            return (
              this === _ && typeof Uint8Array.prototype.copyWithin == "function"
                ? this.copyWithin(_, _, _)
                : Uint8Array.prototype.set.call(_, this.subarray(_, _), _),
              _
            );
          }),
          (_.prototype.fill = function (_, _, _, _) {
            if (typeof _ == "string") {
              if (
                (typeof _ == "string"
                  ? ((_ = _), (_ = 0), (_ = this.length))
                  : typeof _ == "string" && ((_ = _), (_ = this.length)),
                _ !== void 0 && typeof _ != "string")
              )
                throw new TypeError("encoding must be a string");
              if (typeof _ == "string" && !_.isEncoding(_))
                throw new TypeError("Unknown encoding: " + _);
              if (_.length === 1) {
                const _ = _.charCodeAt(0);
                ((_ === "utf8" && _ < 128) || _ === "latin1") && (_ = _);
              }
            } else
              typeof _ == "number"
                ? (_ = _ & 255)
                : typeof _ == "boolean" && (_ = Number(_));
            if (_ < 0 || this.length < _ || this.length < _)
              throw new RangeError("Out of range index");
            if (_ <= _) return this;
            (_ = _ >>> 0),
              (_ = _ === void 0 ? this.length : _ >>> 0),
              _ || (_ = 0);
            let _;
            if (typeof _ == "number") for (_ = _; _ < _; ++_) this[_] = _;
            else {
              const _ = _.isBuffer(_) ? _ : _.from(_, _),
                _ = _.length;
              if (_ === 0)
                throw new TypeError(
                  'The value "' + _ + '" is invalid for argument "value"',
                );
              for (_ = 0; _ < _ - _; ++_) this[_ + _] = _[_ % _];
            }
            return this;
          });
        const _ = {};
        function _(_, _, _) {
          _[_] = class extends _ {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: _.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${_}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return _;
            }
            set code(_) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: _,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${_}]: ${this.message}`;
            }
          };
        }
        _(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (_) {
            return _
              ? `${_} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError,
        ),
          _(
            "ERR_INVALID_ARG_TYPE",
            function (_, _) {
              return `The "${_}" argument must be of type number. Received type ${typeof _}`;
            },
            TypeError,
          ),
          _(
            "ERR_OUT_OF_RANGE",
            function (_, _, _) {
              let _ = `The value of "${_}" is out of range.`,
                _ = _;
              return (
                Number.isInteger(_) && Math.abs(_) > 2 ** 32
                  ? (_ = _(String(_)))
                  : typeof _ == "bigint" &&
                    ((_ = String(_)),
                    (_ > BigInt(2) ** BigInt(32) ||
                      _ < -(BigInt(2) ** BigInt(32))) &&
                      (_ = _(_)),
                    (_ += "n")),
                (_ += ` It must be ${_}. Received ${_}`),
                _
              );
            },
            RangeError,
          );
        function _(_) {
          let _ = "",
            _ = _.length;
          const _ = _[0] === "-" ? 1 : 0;
          for (; _ >= _ + 4; _ -= 3) _ = `_${_.slice(_ - 3, _)}${_}`;
          return `${_.slice(0, _)}${_}`;
        }
        function _(_, _, _) {
          _(_, "offset"),
            (_[_] === void 0 || _[_ + _] === void 0) &&
              _(_, _.length - (_ + 1));
        }
        function _(_, _, _, _, _, _) {
          if (_ > _ || _ < _) {
            const _ = typeof _ == "bigint" ? "n" : "";
            let _;
            throw (
              (_ > 3
                ? _ === 0 || _ === BigInt(0)
                  ? (_ = `>= 0${_} and < 2${_} ** ${(_ + 1) * 8}${_}`)
                  : (_ = `>= -(2${_} ** ${(_ + 1) * 8 - 1}${_}) and < 2 ** ${(_ + 1) * 8 - 1}${_}`)
                : (_ = `>= ${_}${_} and <= ${_}${_}`),
              new _.ERR_OUT_OF_RANGE("value", _, _))
            );
          }
          _(_, _, _);
        }
        function _(_, _) {
          if (typeof _ != "number")
            throw new _.ERR_INVALID_ARG_TYPE(_, "number", _);
        }
        function _(_, _, _) {
          throw Math.floor(_) !== _
            ? (_(_, _), new _.ERR_OUT_OF_RANGE(_ || "offset", "an integer", _))
            : _ < 0
              ? new _.ERR_BUFFER_OUT_OF_BOUNDS()
              : new _.ERR_OUT_OF_RANGE(
                  _ || "offset",
                  `>= ${_ ? 1 : 0} and <= ${_}`,
                  _,
                );
        }
        const _ = /[^+/0-9A-Za-z-_]/g;
        function _(_) {
          if (
            ((_ = _.split("=")[0]), (_ = _.trim().replace(_, "")), _.length < 2)
          )
            return "";
          for (; _.length % 4 !== 0; ) _ = _ + "=";
          return _;
        }
        function _(_, _) {
          _ = _ || 1 / 0;
          let _;
          const _ = _.length;
          let _ = null;
          const _ = [];
          for (let _ = 0; _ < _; ++_) {
            if (((_ = _.charCodeAt(_)), _ > 55295 && _ < 57344)) {
              if (!_) {
                if (_ > 56319) {
                  (_ -= 3) > -1 && _.push(239, 191, 189);
                  continue;
                } else if (_ + 1 === _) {
                  (_ -= 3) > -1 && _.push(239, 191, 189);
                  continue;
                }
                _ = _;
                continue;
              }
              if (_ < 56320) {
                (_ -= 3) > -1 && _.push(239, 191, 189), (_ = _);
                continue;
              }
              _ = (((_ - 55296) << 10) | (_ - 56320)) + 65536;
            } else _ && (_ -= 3) > -1 && _.push(239, 191, 189);
            if (((_ = null), _ < 128)) {
              if ((_ -= 1) < 0) break;
              _.push(_);
            } else if (_ < 2048) {
              if ((_ -= 2) < 0) break;
              _.push((_ >> 6) | 192, (_ & 63) | 128);
            } else if (_ < 65536) {
              if ((_ -= 3) < 0) break;
              _.push((_ >> 12) | 224, ((_ >> 6) & 63) | 128, (_ & 63) | 128);
            } else if (_ < 1114112) {
              if ((_ -= 4) < 0) break;
              _.push(
                (_ >> 18) | 240,
                ((_ >> 12) & 63) | 128,
                ((_ >> 6) & 63) | 128,
                (_ & 63) | 128,
              );
            } else throw new Error("Invalid code point");
          }
          return _;
        }
        function _(_) {
          const _ = [];
          for (let _ = 0; _ < _.length; ++_) _.push(_.charCodeAt(_) & 255);
          return _;
        }
        function _(_, _) {
          let _, _, _;
          const _ = [];
          for (let _ = 0; _ < _.length && !((_ -= 2) < 0); ++_)
            (_ = _.charCodeAt(_)),
              (_ = _ >> 8),
              (_ = _ % 256),
              _.push(_),
              _.push(_);
          return _;
        }
        function _(_) {
          return _.toByteArray(_(_));
        }
        function _(_, _, _, _) {
          let _;
          for (_ = 0; _ < _ && !(_ + _ >= _.length || _ >= _.length); ++_)
            _[_ + _] = _[_];
          return _;
        }
        function _(_, _) {
          return (
            _ instanceof _ ||
            (_ != null &&
              _.constructor != null &&
              _.constructor.name != null &&
              _.constructor.name === _.name)
          );
        }
        function _(_) {
          return _ !== _;
        }
        const _ = (function () {
          const _ = "0123456789abcdef",
            _ = new Array(256);
          for (let _ = 0; _ < 16; ++_) {
            const _ = _ * 16;
            for (let _ = 0; _ < 16; ++_) _[_ + _] = _[_] + _[_];
          }
          return _;
        })();
        function _(_) {
          return typeof BigInt > "u" ? _ : _;
        }
        function _() {
          throw new Error("BigInt not supported");
        }
      },
      chunkid: (_, _) => {
        (_.read = function (_, _, _, _, _) {
          var _,
            _,
            _ = _ * 8 - _ - 1,
            _ = (1 << _) - 1,
            _ = _ >> 1,
            _ = -7,
            _ = _ ? _ - 1 : 0,
            _ = _ ? -1 : 1,
            _ = _[_ + _];
          for (
            _ += _, _ = _ & ((1 << -_) - 1), _ >>= -_, _ += _;
            _ > 0;
            _ = _ * 256 + _[_ + _], _ += _, _ -= 8
          );
          for (
            _ = _ & ((1 << -_) - 1), _ >>= -_, _ += _;
            _ > 0;
            _ = _ * 256 + _[_ + _], _ += _, _ -= 8
          );
          if (_ === 0) _ = 1 - _;
          else {
            if (_ === _) return _ ? NaN : (_ ? -1 : 1) * (1 / 0);
            (_ = _ + Math.pow(2, _)), (_ = _ - _);
          }
          return (_ ? -1 : 1) * _ * Math.pow(2, _ - _);
        }),
          (_.write = function (_, _, _, _, _, _) {
            var _,
              _,
              _,
              _ = _ * 8 - _ - 1,
              _ = (1 << _) - 1,
              _ = _ >> 1,
              _ = _ === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              _ = _ ? 0 : _ - 1,
              _ = _ ? 1 : -1,
              _ = _ < 0 || (_ === 0 && 1 / _ < 0) ? 1 : 0;
            for (
              _ = Math.abs(_),
                isNaN(_) || _ === 1 / 0
                  ? ((_ = isNaN(_) ? 1 : 0), (_ = _))
                  : ((_ = Math.floor(Math.log(_) / Math.LN2)),
                    _ * (_ = Math.pow(2, -_)) < 1 && (_--, (_ *= 2)),
                    _ + _ >= 1 ? (_ += _ / _) : (_ += _ * Math.pow(2, 1 - _)),
                    _ * _ >= 2 && (_++, (_ /= 2)),
                    _ + _ >= _
                      ? ((_ = 0), (_ = _))
                      : _ + _ >= 1
                        ? ((_ = (_ * _ - 1) * Math.pow(2, _)), (_ = _ + _))
                        : ((_ = _ * Math.pow(2, _ - 1) * Math.pow(2, _)),
                          (_ = 0)));
              _ >= 8;
              _[_ + _] = _ & 255, _ += _, _ /= 256, _ -= 8
            );
            for (
              _ = (_ << _) | _, _ += _;
              _ > 0;
              _[_ + _] = _ & 255, _ += _, _ /= 256, _ -= 8
            );
            _[_ + _ - _] |= _ * 128;
          });
      },
      chunkid: (_, _) => {
        "use strict";
        var _;
        var _ = Symbol.for("react.element"),
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
          _ = Symbol.for("react.offscreen"),
          _;
        _ = Symbol.for("react.module.reference");
        function _(_) {
          if (typeof _ == "object" && _ !== null) {
            var _ = _.$$typeof;
            switch (_) {
              case _:
                switch (((_ = _.type), _)) {
                  case _:
                  case _:
                  case _:
                  case _:
                  case _:
                    return _;
                  default:
                    switch (((_ = _ && _.$$typeof), _)) {
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
        (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = _),
          (_ = function () {
            return !1;
          }),
          (_ = function () {
            return !1;
          }),
          (_.isContextConsumer = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return typeof _ == "object" && _ !== null && _.$$typeof === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_.isFragment = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return _(_) === _;
          }),
          (_ = function (_) {
            return (
              typeof _ == "string" ||
              typeof _ == "function" ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              _ === _ ||
              (typeof _ == "object" &&
                _ !== null &&
                (_.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.$$typeof === _ ||
                  _.getModuleId !== void 0))
            );
          }),
          (_ = _);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__("chunkid");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return (
            (_ === _ && (_ !== 0 || 1 / _ === 1 / _)) || (_ !== _ && _ !== _)
          );
        }
        var _ = typeof Object._ == "function" ? Object._ : _,
          _ = _.useSyncExternalStore,
          _ = _.useRef,
          _ = _.useEffect,
          _ = _.useMemo,
          _ = _.useDebugValue;
        module_exports.useSyncExternalStoreWithSelector = function (
          _,
          _,
          _,
          _,
          _,
        ) {
          var _ = _(null);
          if (_.current === null) {
            var _ = {
              hasValue: !1,
              value: null,
            };
            _.current = _;
          } else _ = _.current;
          _ = _(
            function () {
              function _(_) {
                if (!_) {
                  if (
                    ((_ = !0), (_ = _), (_ = _(_)), _ !== void 0 && _.hasValue)
                  ) {
                    var _ = _.value;
                    if (_(_, _)) return (_ = _);
                  }
                  return (_ = _);
                }
                if (((_ = _), _(_, _))) return _;
                var _ = _(_);
                return _ !== void 0 && _(_, _)
                  ? ((_ = _), _)
                  : ((_ = _), (_ = _));
              }
              var _ = !1,
                _,
                _,
                _ = _ === void 0 ? null : _;
              return [
                function () {
                  return _(_());
                },
                _ === null
                  ? void 0
                  : function () {
                      return _(_());
                    },
              ];
            },
            [_, _, _, _],
          );
          var _ = _(_, _[0], _[1]);
          return (
            _(
              function () {
                (_.hasValue = !0), (_.value = _);
              },
              [_],
            ),
            _(_),
            _
          );
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        module.exports = __webpack_require__("chunkid");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
            /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
          _ =
            /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
          _ = (_) =>
            _
              ? new RegExp(
                  `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${_}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
                )
              : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
          _ = null,
          _ = null,
          _ = null,
          _ =
            /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
          _ =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          _ =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          _ = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
          _ = null,
          _ =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          _ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
        function _() {
          return new RegExp(_, "u");
        }
        const _ =
            /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
          _ =
            /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
          _ = (_) => {
            const _ = util.escapeRegex(_ ?? ":");
            return new RegExp(
              `^(?:[0-9A-F]{2}${_}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${_}){5}[0-9a-f]{2}$`,
            );
          },
          _ =
            /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
          _ =
            /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
          _ =
            /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
          _ = /^[A-Za-z0-9_-]*$/,
          _ =
            /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
          _ =
            /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
          _ = /^https?$/,
          _ = /^\+[1-9]\d{6,14}$/,
          _ =
            "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
          _ = new RegExp(`^${_}$`);
        function _(_) {
          const _ = "(?:[01]\\d|2[0-3]):[0-5]\\d";
          return typeof _.precision == "number"
            ? _.precision === -1
              ? `${_}`
              : _.precision === 0
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
          _.local && _.push(""),
            _.offset && _.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
          const _ = `${_}(?:${_.join("|")})`;
          return new RegExp(`^${_}T(?:${_})$`);
        }
        const _ = (_) => {
            const _ = _
              ? `[\\s\\S]{${_?.minimum ?? 0},${_?.maximum ?? ""}}`
              : "[\\s\\S]*";
            return new RegExp(`^${_}$`);
          },
          _ = /^-?\d+n?$/,
          _ = /^-?\d+$/,
          _ = /^-?\d+(?:\.\d+)?$/,
          _ = /^(?:true|false)$/i,
          _ = /^null$/i,
          _ = /^undefined$/i,
          _ = /^[^A-Z]*$/,
          _ = /^[^a-z]*$/,
          _ = /^[0-9a-fA-F]*$/;
        function _(_, _) {
          return new RegExp(`^[A-Za-z0-9+/]{${_}}${_}$`);
        }
        function _(_) {
          return new RegExp(`^[A-Za-z0-9_-]{${_}}$`);
        }
        const _ = /^[0-9a-fA-F]{32}$/,
          _ = null,
          _ = null,
          _ = /^[0-9a-fA-F]{40}$/,
          _ = null,
          _ = null,
          _ = /^[0-9a-fA-F]{64}$/,
          _ = null,
          _ = null,
          _ = /^[0-9a-fA-F]{96}$/,
          _ = null,
          _ = null,
          _ = /^[0-9a-fA-F]{128}$/,
          _ = null,
          _ = null;
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
                      typeof _.value == "object" ? _.value.getTime() : _.value,
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
                      typeof _.value == "object" ? _.value.getTime() : _.value,
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
                (typeof _.value == "bigint"
                  ? _.value % _.value === BigInt(0)
                  : _._(_.value, _.value) === 0) ||
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
                  if (!Number.isInteger(_)) {
                    _.issues.push({
                      expected: _,
                      format: _.format,
                      code: "invalid_type",
                      continue: !1,
                      input: _,
                      inst: _,
                    });
                    return;
                  }
                  if (!Number.isSafeInteger(_)) {
                    _ > 0
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
                        });
                    return;
                  }
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
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = _._("$ZodCheckMaxLength", (_, _) => {
            var _;
            _.init(_, _),
              (_ = _._zod.def).when ??
                (_.when = (_) => {
                  const _ = _.value;
                  return !_._(_) && _.length !== void 0;
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
                  return !_._(_) && _.length !== void 0;
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
                  return !_._(_) && _.length !== void 0;
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
                      !_.pattern.test(_.value) &&
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
                  !_.pattern.test(_.value) &&
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
                typeof _.position == "number" ? `^.{${_.position}}${_}` : _,
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
        function _(_, _, _) {
          _.issues.length && _.issues.push(...util.prefixIssues(_, _.issues));
        }
        const _ = null,
          _ = null,
          _ = _._("$ZodCheckOverwrite", (_, _) => {
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
            if (typeof _ == "function") {
              _(this, {
                execution: "sync",
              }),
                _(this, {
                  execution: "async",
                });
              return;
            }
            const _ = _.split(`
`).filter((_) => _),
              _ = Math.min(..._.map((_) => _.length - _.trimStart().length)),
              _ = _.map((_) => _.slice(_)).map(
                (_) => " ".repeat(this.indent * 2) + _,
              );
            for (const _ of _) this.content.push(_);
          }
          compile() {
            const _ = Function,
              _ = this?.args,
              _ = [...(this?.content ?? [""]).map((_) => `  ${_}`)];
            return new _(
              ..._,
              _.join(`
`),
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
        function _(_, _ = (_) => _.message) {
          const _ = {},
            _ = [];
          for (const _ of _.issues)
            _.path.length > 0
              ? ((_[_.path[0]] = _[_.path[0]] || []), _[_.path[0]].push(_(_)))
              : _.push(_(_));
          return {
            formErrors: _,
            fieldErrors: _,
          };
        }
        function _(_, _ = (_) => _.message) {
          const _ = {
              _errors: [],
            },
            _ = (_, _ = []) => {
              for (const _ of _.issues)
                if (_.code === "invalid_union" && _.errors.length)
                  _.errors.map((_) =>
                    _(
                      {
                        issues: _,
                      },
                      [..._, ..._.path],
                    ),
                  );
                else if (_.code === "invalid_key")
                  _(
                    {
                      issues: _.issues,
                    },
                    [..._, ..._.path],
                  );
                else if (_.code === "invalid_element")
                  _(
                    {
                      issues: _.issues,
                    },
                    [..._, ..._.path],
                  );
                else {
                  const _ = [..._, ..._.path];
                  if (_.length === 0) _._errors.push(_(_));
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
        }
        function _(_, _ = (_) => _.message) {
          const _ = {
              errors: [],
            },
            _ = (_, _ = []) => {
              var _, _;
              for (const _ of _.issues)
                if (_.code === "invalid_union" && _.errors.length)
                  _.errors.map((_) =>
                    _(
                      {
                        issues: _,
                      },
                      [..._, ..._.path],
                    ),
                  );
                else if (_.code === "invalid_key")
                  _(
                    {
                      issues: _.issues,
                    },
                    [..._, ..._.path],
                  );
                else if (_.code === "invalid_element")
                  _(
                    {
                      issues: _.issues,
                    },
                    [..._, ..._.path],
                  );
                else {
                  const _ = [..._, ..._.path];
                  if (_.length === 0) {
                    _.errors.push(_(_));
                    continue;
                  }
                  let _ = _,
                    _ = 0;
                  for (; _ < _.length; ) {
                    const _ = _[_],
                      _ = _ === _.length - 1;
                    typeof _ == "string"
                      ? (_.properties ?? (_.properties = {}),
                        (_ = _.properties)[_] ??
                          (_[_] = {
                            errors: [],
                          }),
                        (_ = _.properties[_]))
                      : (_.items ?? (_.items = []),
                        (_ = _.items)[_] ??
                          (_[_] = {
                            errors: [],
                          }),
                        (_ = _.items[_])),
                      _ && _.errors.push(_(_)),
                      _++;
                  }
                }
            };
          return _(_), _;
        }
        function _(_) {
          const _ = [],
            _ = _.map((_) => (typeof _ == "object" ? _.key : _));
          for (const _ of _)
            typeof _ == "number"
              ? _.push(`[${_}]`)
              : typeof _ == "symbol"
                ? _.push(`[${JSON.stringify(String(_))}]`)
                : /[^\w$]/.test(_)
                  ? _.push(`[${JSON.stringify(_)}]`)
                  : (_.length && _.push("."), _.push(_));
          return _.join("");
        }
        function _(_) {
          const _ = [],
            _ = [..._.issues].sort(
              (_, _) => (_.path ?? []).length - (_.path ?? []).length,
            );
          for (const _ of _)
            _.push(`\u2716 ${_.message}`),
              _.path?.length && _.push(`  \u2192 at ${_(_.path)}`);
          return _.join(`
`);
        }
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
              const _ = new (_?.Err ?? _)(
                _.issues.map((_) => _._(_, _, _._())),
              );
              throw (_._(_, _?.callee), _);
            }
            return _.value;
          },
          _ = _(_),
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
              const _ = new (_?.Err ?? _)(
                _.issues.map((_) => _._(_, _, _._())),
              );
              throw (_._(_, _?.callee), _);
            }
            return _.value;
          },
          _ = _(_),
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
          _ = _(_),
          _ = (_) => (_, _, _) => _(_)(_, _, _),
          _ = _(_),
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
          _ = _(_),
          _ = (_) => async (_, _, _) => _(_)(_, _, _),
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
          _ = _(_),
          _ = (_) => (_, _, _) => _(_)(_, _, _),
          _ = _(_),
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
          _ = _(_),
          _ = (_) => async (_, _, _) => _(_)(_, _, _),
          _ = _(_),
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
            for (const _ of _) for (const _ of _._zod.onattach) _(_);
            if (_.length === 0)
              (_ = _._zod).deferred ?? (_.deferred = []),
                _._zod.deferred?.push(() => {
                  _._zod.run = _._zod.parse;
                });
            else {
              const _ = (_, _, _) => {
                  let _ = _._(_),
                    _;
                  for (const _ of _) {
                    if (_._zod.def.when) {
                      if (_._(_) || !_._zod.def.when(_)) continue;
                    } else if (_) continue;
                    const _ = _.issues.length,
                      _ = _._zod.check(_);
                    if (_ instanceof Promise && _?.async === !1)
                      throw new _._();
                    if (_ || _ instanceof Promise)
                      _ = (_ ?? Promise.resolve()).then(async () => {
                        await _,
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
                    if (_.async === !1) throw new _._();
                    return _.then((_) => _._zod.parse(_, _));
                  }
                  return _._zod.parse(_, _);
                };
              _._zod.run = (_, _) => {
                if (_.skipChecks) return _._zod.parse(_, _);
                if (_.direction === "backward") {
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
                    ? _.then((_) => _(_, _, _))
                    : _(_, _, _);
                }
                const _ = _._zod.parse(_, _);
                if (_ instanceof Promise) {
                  if (_.async === !1) throw new _._();
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
                } catch {
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
                  } catch {}
                return (
                  typeof _.value == "string" ||
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
              if (_ === void 0)
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
                  ) {
                    _.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid URL format",
                      input: _.value,
                      inst: _,
                      continue: !_.abort,
                    });
                    return;
                  }
                  const _ = new URL(_);
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
                    _.normalize ? (_.value = _.href) : (_.value = _);
                  return;
                } catch {
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
          _ = null,
          _ = _._("$ZodCIDRv4", (_, _) => {
            _.pattern ?? (_.pattern = _), _.init(_, _);
          }),
          _ = _._("$ZodCIDRv6", (_, _) => {
            _.pattern ?? (_.pattern = _),
              _.init(_, _),
              (_._zod.check = (_) => {
                const _ = _.value.split("/");
                try {
                  if (_.length !== 2) throw new Error();
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
          if (_ === "") return !0;
          if (/\s/.test(_) || _.length % 4 !== 0) return !1;
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
        function _(_) {
          if (!_.test(_)) return !1;
          const _ = _.replace(/[-_]/g, (_) => (_ === "-" ? "+" : "/")),
            _ = _.padEnd(Math.ceil(_.length / 4) * 4, "=");
          return _(_);
        }
        const _ = _._("$ZodBase64URL", (_, _) => {
            _.pattern ?? (_.pattern = _),
              _.init(_, _),
              (_._zod.bag.contentEncoding = "base64url"),
              (_._zod.check = (_) => {
                _(_.value) ||
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
        function _(_, _ = null) {
          try {
            const _ = _.split(".");
            if (_.length !== 3) return !1;
            const [_] = _;
            if (!_) return !1;
            const _ = JSON.parse(atob(_));
            return !(
              ("typ" in _ && _?.typ !== "JWT") ||
              !_.alg ||
              (_ && (!("alg" in _) || _.alg !== _))
            );
          } catch {
            return !1;
          }
        }
        const _ = _._("$ZodJWT", (_, _) => {
            _.init(_, _),
              (_._zod.check = (_) => {
                _(_.value, _.alg) ||
                  _.issues.push({
                    code: "invalid_format",
                    format: "jwt",
                    input: _.value,
                    inst: _,
                    continue: !_.abort,
                  });
              });
          }),
          _ = null,
          _ = _._("$ZodNumber", (_, _) => {
            _.init(_, _),
              (_._zod.pattern = _._zod.bag.pattern ?? _),
              (_._zod.parse = (_, _) => {
                if (_.coerce)
                  try {
                    _.value = Number(_.value);
                  } catch {}
                const _ = _.value;
                if (
                  typeof _ == "number" &&
                  !Number.isNaN(_) &&
                  Number.isFinite(_)
                )
                  return _;
                const _ =
                  typeof _ == "number"
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
                    _.value = !!_.value;
                  } catch {}
                const _ = _.value;
                return (
                  typeof _ == "boolean" ||
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
                  } catch {}
                return (
                  typeof _.value == "bigint" ||
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
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
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
          _ = null,
          _ = _._("$ZodDate", (_, _) => {
            _.init(_, _),
              (_._zod.parse = (_, _) => {
                if (_.coerce)
                  try {
                    _.value = new Date(_.value);
                  } catch {}
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
          if (!_ && !_) {
            _.issues.length ||
              _.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: void 0,
                path: [_],
              });
            return;
          }
          _.value === void 0
            ? _ && (_.value[_] = void 0)
            : (_.value[_] = _.value);
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
            _ = _.optin === "optional",
            _ = _.optout === "optional";
          for (const _ in _) {
            if (_ === "__proto__" || _.has(_)) continue;
            if (_ === "never") {
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
            if (
              (_.init(_, _), !Object.getOwnPropertyDescriptor(_, "shape")?.get)
            ) {
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
                  _ = _._zod.optin === "optional",
                  _ = _._zod.optout === "optional",
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
              _ = _._(() => _(_)),
              _ = (_) => {
                const _ = new _(["shape", "payload", "ctx"]),
                  _ = _.value,
                  _ = (_) => {
                    const _ = _._(_);
                    return `shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`;
                  };
                _.write("const input = payload.value;");
                const _ = Object.create(null);
                let _ = 0;
                for (const _ of _.keys) _[_] = `key_${_++}`;
                _.write("const newResult = {};");
                for (const _ of _.keys) {
                  const _ = _[_],
                    _ = _._(_),
                    _ = _[_],
                    _ = _?._zod?.optin === "optional",
                    _ = _?._zod?.optout === "optional";
                  _.write(`const ${_} = ${_(_)};`),
                    _ && _
                      ? _.write(`
        if (${_}.issues.length) {
          if (${_} in input) {
            payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${_}, ...iss.path] : [${_}]
            })));
          }
        }
        
        if (${_}.value === undefined) {
          if (${_} in input) {
            newResult[${_}] = undefined;
          }
        } else {
          newResult[${_}] = ${_}.value;
        }
        
      `)
                      : _
                        ? _.write(`
        if (${_}.issues.length) {
          payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${_}, ...iss.path] : [${_}]
          })));
        }
        
        if (${_}.value === undefined) {
          if (${_} in input) {
            newResult[${_}] = undefined;
          }
        } else {
          newResult[${_}] = ${_}.value;
        }
        
      `)
                        : _.write(`
        const ${_}_present = ${_} in input;
        if (${_}.issues.length) {
          payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${_}, ...iss.path] : [${_}]
          })));
        }
        if (!${_}_present && !${_}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${_}]
          });
        }

        if (${_}_present) {
          if (${_}.value === undefined) {
            newResult[${_}] = undefined;
          } else {
            newResult[${_}] = ${_}.value;
          }
        }

      `);
                }
                _.write("payload.value = newResult;"),
                  _.write("return payload;");
                const _ = _.compile();
                return (_, _) => _(_, _, _);
              };
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
                ? _ && _ && _?.async === !1 && _.jitless !== !0
                  ? (_ || (_ = _(_.shape)),
                    (_ = _(_, _)),
                    _ ? _([], _, _, _, _, _) : _)
                  : _(_, _)
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
            if (_.issues.length === 0) return (_.value = _.value), _;
          const _ = _.filter((_) => !_._(_));
          return _.length === 1
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
              _.options.some((_) => _._zod.optin === "optional")
                ? "optional"
                : void 0,
            ),
            _._(_._zod, "optout", () =>
              _.options.some((_) => _._zod.optout === "optional")
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
                return new RegExp(
                  `^(${_.map((_) => _._(_.source)).join("|")})$`,
                );
              }
            });
          const _ = _.options.length === 1 ? _.options[0]._zod.run : null;
          _._zod.parse = (_, _) => {
            if (_) return _(_, _);
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
                if (_.issues.length === 0) return _;
                _.push(_);
              }
            }
            return _
              ? Promise.all(_).then((_) => _(_, _, _, _))
              : _(_, _, _, _);
          };
        });
        function _(_, _, _, _) {
          const _ = _.filter((_) => _.issues.length === 0);
          return _.length === 1
            ? ((_.value = _[0].value), _)
            : (_.length === 0
                ? _.issues.push({
                    code: "invalid_union",
                    input: _.value,
                    inst: _,
                    errors: _.map((_) =>
                      _.issues.map((_) =>
                        util.finalizeIssue(_, _, core.config()),
                      ),
                    ),
                  })
                : _.issues.push({
                    code: "invalid_union",
                    input: _.value,
                    inst: _,
                    errors: [],
                    inclusive: !1,
                  }),
              _);
        }
        const _ = null,
          _ = null,
          _ = _._("$ZodIntersection", (_, _) => {
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
          if (_ instanceof Date && _ instanceof Date && +_ == +_)
            return {
              valid: !0,
              data: _,
            };
          if (_._(_) && _._(_)) {
            const _ = Object.keys(_),
              _ = Object.keys(_).filter((_) => _.indexOf(_) !== -1),
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
              const _ = _[_],
                _ = _[_],
                _ = _(_, _);
              if (!_.valid)
                return {
                  valid: !1,
                  mergeErrorPath: [_, ..._.mergeErrorPath],
                };
              _.push(_.data);
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
            if (_.code === "unrecognized_keys") {
              _ ?? (_ = _);
              for (const _ of _.keys)
                _.has(_) || _.set(_, {}), (_.get(_)._ = !0);
            } else _.issues.push(_);
          for (const _ of _.issues)
            if (_.code === "unrecognized_keys")
              for (const _ of _.keys)
                _.has(_) || _.set(_, {}), (_.get(_)._ = !0);
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
        const _ = null;
        function _(_, _) {
          for (let _ = _.length - 1; _ >= 0; _--)
            if (_[_]._zod[_] !== "optional") return _ + 1;
          return 0;
        }
        function _(_, _, _) {
          _.issues.length && _.issues.push(...util.prefixIssues(_, _.issues)),
            (_.value[_] = _.value);
        }
        function _(_, _, _, _, _) {
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_],
              _ = _ < _.length;
            if (_.issues.length) {
              if (!_ && _ >= _) {
                _.value.length = _;
                break;
              }
              _.issues.push(...util.prefixIssues(_, _.issues));
            }
            _.value[_] = _.value;
          }
          for (
            let _ = _.value.length - 1;
            _ >= _.length &&
            _[_]._zod.optout === "optional" &&
            _.value[_] === void 0;
            _--
          )
            _.value.length = _;
          return _;
        }
        const _ = null,
          _ = null;
        function _(_, _, _, _, _, _, _) {
          _.issues.length &&
            (util.propertyKeyTypes.has(typeof _)
              ? _.issues.push(...util.prefixIssues(_, _.issues))
              : _.issues.push({
                  code: "invalid_key",
                  origin: "map",
                  input: _,
                  inst: _,
                  issues: _.issues.map((_) =>
                    util.finalizeIssue(_, _, core.config()),
                  ),
                })),
            _.issues.length &&
              (util.propertyKeyTypes.has(typeof _)
                ? _.issues.push(...util.prefixIssues(_, _.issues))
                : _.issues.push({
                    origin: "map",
                    code: "invalid_element",
                    input: _,
                    inst: _,
                    key: _,
                    issues: _.issues.map((_) =>
                      util.finalizeIssue(_, _, core.config()),
                    ),
                  })),
            _.value.set(_.value, _.value);
        }
        const _ = null;
        function _(_, _) {
          _.issues.length && _.issues.push(..._.issues), _.value.add(_.value);
        }
        const _ = _._("$ZodEnum", (_, _) => {
            _.init(_, _);
            const _ = _._(_.entries),
              _ = new Set(_);
            (_._zod.values = _),
              (_._zod.pattern = new RegExp(
                `^(${_.filter((_) => _._.has(typeof _))
                  .map((_) => (typeof _ == "string" ? _._(_) : _.toString()))
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
            if ((_.init(_, _), _.values.length === 0))
              throw new Error(
                "Cannot create literal schema with no valid values",
              );
            const _ = new Set(_.values);
            (_._zod.values = _),
              (_._zod.pattern = new RegExp(
                `^(${_.values.map((_) => (typeof _ == "string" ? _._(_) : _ ? _._(_.toString()) : String(_))).join("|")})$`,
              )),
              (_._zod.parse = (_, _) => {
                const _ = _.value;
                return (
                  _.has(_) ||
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
          _ = null,
          _ = _._("$ZodTransform", (_, _) => {
            _.init(_, _),
              (_._zod.optin = "optional"),
              (_._zod.parse = (_, _) => {
                if (_.direction === "backward")
                  throw new _._(_.constructor.name);
                const _ = _.transform(_.value, _);
                if (_.async)
                  return (_ instanceof Promise ? _ : Promise.resolve(_)).then(
                    (_) => ((_.value = _), (_.fallback = !0), _),
                  );
                if (_ instanceof Promise) throw new _._();
                return (_.value = _), (_.fallback = !0), _;
              });
          });
        function _(_, _) {
          return _ === void 0 && (_.issues.length || _.fallback)
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
                if (_.innerType._zod.optin === "optional") {
                  const _ = _.value,
                    _ = _.innerType._zod.run(_, _);
                  return _ instanceof Promise
                    ? _.then((_) => _(_, _))
                    : _(_, _);
                }
                return _.value === void 0 ? _ : _.innerType._zod.run(_, _);
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
                _.value === null ? _ : _.innerType._zod.run(_, _));
          }),
          _ = _._("$ZodDefault", (_, _) => {
            _.init(_, _),
              (_._zod.optin = "optional"),
              _._(_._zod, "values", () => _.innerType._zod.values),
              (_._zod.parse = (_, _) => {
                if (_.direction === "backward")
                  return _.innerType._zod.run(_, _);
                if (_.value === void 0) return (_.value = _.defaultValue), _;
                const _ = _.innerType._zod.run(_, _);
                return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
              });
          });
        function _(_, _) {
          return _.value === void 0 && (_.value = _.defaultValue), _;
        }
        const _ = _._("$ZodPrefault", (_, _) => {
            _.init(_, _),
              (_._zod.optin = "optional"),
              _._(_._zod, "values", () => _.innerType._zod.values),
              (_._zod.parse = (_, _) => (
                _.direction === "backward" ||
                  (_.value === void 0 && (_.value = _.defaultValue)),
                _.innerType._zod.run(_, _)
              ));
          }),
          _ = _._("$ZodNonOptional", (_, _) => {
            _.init(_, _),
              _._(_._zod, "values", () => {
                const _ = _.innerType._zod.values;
                return _ ? new Set([..._].filter((_) => _ !== void 0)) : void 0;
              }),
              (_._zod.parse = (_, _) => {
                const _ = _.innerType._zod.run(_, _);
                return _ instanceof Promise ? _.then((_) => _(_, _)) : _(_, _);
              });
          });
        function _(_, _) {
          return (
            !_.issues.length &&
              _.value === void 0 &&
              _.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: _.value,
                inst: _,
              }),
            _
          );
        }
        const _ = null,
          _ = _._("$ZodCatch", (_, _) => {
            _.init(_, _),
              (_._zod.optin = "optional"),
              _._(_._zod, "optout", () => _.innerType._zod.optout),
              _._(_._zod, "values", () => _.innerType._zod.values),
              (_._zod.parse = (_, _) => {
                if (_.direction === "backward")
                  return _.innerType._zod.run(_, _);
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
          _ = null,
          _ = _._("$ZodPipe", (_, _) => {
            _.init(_, _),
              _._(_._zod, "values", () => _._._zod.values),
              _._(_._zod, "optin", () => _._._zod.optin),
              _._(_._zod, "optout", () => _.out._zod.optout),
              _._(_._zod, "propValues", () => _._._zod.propValues),
              (_._zod.parse = (_, _) => {
                if (_.direction === "backward") {
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
              if ((_.direction || "forward") === "forward") {
                const _ = _._._zod.run(_, _);
                return _ instanceof Promise
                  ? _.then((_) => _(_, _, _))
                  : _(_, _, _);
              } else {
                const _ = _.out._zod.run(_, _);
                return _ instanceof Promise
                  ? _.then((_) => _(_, _, _))
                  : _(_, _, _);
              }
            });
        });
        function _(_, _, _) {
          if (_.issues.length) return (_.aborted = !0), _;
          if ((_.direction || "forward") === "forward") {
            const _ = _.transform(_.value, _);
            return _ instanceof Promise
              ? _.then((_) => _(_, _, _.out, _))
              : _(_, _, _.out, _);
          } else {
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
        const _ = null,
          _ = _._("$ZodReadonly", (_, _) => {
            _.init(_, _),
              _._(_._zod, "propValues", () => _.innerType._zod.propValues),
              _._(_._zod, "values", () => _.innerType._zod.values),
              _._(_._zod, "optin", () => _.innerType?._zod?.optin),
              _._(_._zod, "optout", () => _.innerType?._zod?.optout),
              (_._zod.parse = (_, _) => {
                if (_.direction === "backward")
                  return _.innerType._zod.run(_, _);
                const _ = _.innerType._zod.run(_, _);
                return _ instanceof Promise ? _.then(_) : _(_);
              });
          });
        function _(_) {
          return (_.value = Object.freeze(_.value)), _;
        }
        const _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = _._("$ZodCustom", (_, _) => {
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
        const _ = Symbol("ZodOutput"),
          _ = Symbol("ZodInput");
        class _ {
          constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
          }
          add(_, ..._) {
            const _ = _[0];
            return (
              this._map.set(_, _),
              _ && typeof _ == "object" && "id" in _ && this._idmap.set(_._, _),
              this
            );
          }
          clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
          }
          remove(_) {
            const _ = this._map.get(_);
            return (
              _ && typeof _ == "object" && "id" in _ && this._idmap.delete(_._),
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
        function _() {
          return new _();
        }
        (_ = globalThis).__zod_globalRegistry ?? (_.__zod_globalRegistry = _());
        const _ = globalThis.__zod_globalRegistry;
        function _(_, _) {
          return new _({
            type: "string",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            coerce: !0,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "email",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
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
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v4",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v6",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "uuid",
            check: "string_format",
            abort: !1,
            version: "v7",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "url",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "emoji",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "nanoid",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "cuid",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "cuid2",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "ulid",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "xid",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "ksuid",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "ipv4",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "ipv6",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "mac",
            check: "string_format",
            abort: !1,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "cidrv4",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "cidrv6",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "base64",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "base64url",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "e164",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "jwt",
            check: "string_format",
            abort: !1,
            ..._._(_),
          });
        }
        const _ = {
          Any: null,
          Minute: -1,
          Second: 0,
          Millisecond: 3,
          Microsecond: 6,
        };
        function _(_, _) {
          return new _({
            type: "string",
            format: "datetime",
            check: "string_format",
            offset: !1,
            local: !1,
            precision: null,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "date",
            check: "string_format",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "time",
            check: "string_format",
            precision: null,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "string",
            format: "duration",
            check: "string_format",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "number",
            checks: [],
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "number",
            coerce: !0,
            checks: [],
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "safeint",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "float32",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "float64",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "int32",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "number",
            check: "number_format",
            abort: !1,
            format: "uint32",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "boolean",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "boolean",
            coerce: !0,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "bigint",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "bigint",
            coerce: !0,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "bigint",
            check: "bigint_format",
            abort: !1,
            format: "int64",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "bigint",
            check: "bigint_format",
            abort: !1,
            format: "uint64",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "symbol",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "undefined",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "null",
            ...util.normalizeParams(_),
          });
        }
        function _(_) {
          return new _({
            type: "any",
          });
        }
        function _(_) {
          return new _({
            type: "unknown",
          });
        }
        function _(_, _) {
          return new _({
            type: "never",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "void",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "date",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "date",
            coerce: !0,
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "nan",
            ...util.normalizeParams(_),
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
        function _(_) {
          return _(0, _);
        }
        function _(_) {
          return _(0, _);
        }
        function _(_) {
          return _(0, _);
        }
        function _(_) {
          return _(0, _);
        }
        function _(_, _) {
          return new _({
            check: "multiple_of",
            ..._._(_),
            value: _,
          });
        }
        function _(_, _) {
          return new checks.$ZodCheckMaxSize({
            check: "max_size",
            ...util.normalizeParams(_),
            maximum: _,
          });
        }
        function _(_, _) {
          return new checks.$ZodCheckMinSize({
            check: "min_size",
            ...util.normalizeParams(_),
            minimum: _,
          });
        }
        function _(_, _) {
          return new checks.$ZodCheckSizeEquals({
            check: "size_equals",
            ...util.normalizeParams(_),
            size: _,
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
        function _(_, _) {
          return new _({
            check: "string_format",
            format: "regex",
            ..._._(_),
            pattern: _,
          });
        }
        function _(_) {
          return new _({
            check: "string_format",
            format: "lowercase",
            ..._._(_),
          });
        }
        function _(_) {
          return new _({
            check: "string_format",
            format: "uppercase",
            ..._._(_),
          });
        }
        function _(_, _) {
          return new _({
            check: "string_format",
            format: "includes",
            ..._._(_),
            includes: _,
          });
        }
        function _(_, _) {
          return new _({
            check: "string_format",
            format: "starts_with",
            ..._._(_),
            prefix: _,
          });
        }
        function _(_, _) {
          return new _({
            check: "string_format",
            format: "ends_with",
            ..._._(_),
            suffix: _,
          });
        }
        function _(_, _, _) {
          return new checks.$ZodCheckProperty({
            check: "property",
            property: _,
            schema: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new checks.$ZodCheckMimeType({
            check: "mime_type",
            mime: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_) {
          return new _({
            check: "overwrite",
            _: _,
          });
        }
        function _(_) {
          return _((_) => _.normalize(_));
        }
        function _() {
          return _((_) => _.trim());
        }
        function _() {
          return _((_) => _.toLowerCase());
        }
        function _() {
          return _((_) => _.toUpperCase());
        }
        function _() {
          return _((_) => _._(_));
        }
        function _(_, _, _) {
          return new _({
            type: "array",
            element: _,
            ..._._(_),
          });
        }
        function _(_, _, _) {
          return new _({
            type: "union",
            options: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _) {
          return new _({
            type: "union",
            options: _,
            inclusive: !1,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _, _) {
          return new _({
            type: "union",
            options: _,
            discriminator: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _) {
          return new _({
            type: "intersection",
            left: _,
            right: _,
          });
        }
        function _(_, _, _, _) {
          const _ = _ instanceof schemas.$ZodType,
            _ = _ ? _ : _,
            _ = _ ? _ : null;
          return new _({
            type: "tuple",
            items: _,
            rest: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _, _) {
          return new _({
            type: "record",
            keyType: _,
            valueType: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _, _) {
          return new _({
            type: "map",
            keyType: _,
            valueType: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _) {
          return new _({
            type: "set",
            valueType: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _) {
          const _ = Array.isArray(_)
            ? Object.fromEntries(_.map((_) => [_, _]))
            : _;
          return new _({
            type: "enum",
            entries: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _) {
          return new _({
            type: "enum",
            entries: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _, _) {
          return new _({
            type: "literal",
            values: Array.isArray(_) ? _ : [_],
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "file",
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "transform",
            transform: _,
          });
        }
        function _(_, _) {
          return new _({
            type: "optional",
            innerType: _,
          });
        }
        function _(_, _) {
          return new _({
            type: "nullable",
            innerType: _,
          });
        }
        function _(_, _, _) {
          return new _({
            type: "default",
            innerType: _,
            get defaultValue() {
              return typeof _ == "function" ? _() : util.shallowClone(_);
            },
          });
        }
        function _(_, _, _) {
          return new _({
            type: "nonoptional",
            innerType: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "success",
            innerType: _,
          });
        }
        function _(_, _, _) {
          return new _({
            type: "catch",
            innerType: _,
            catchValue: typeof _ == "function" ? _ : () => _,
          });
        }
        function _(_, _, _) {
          return new _({
            type: "pipe",
            _: _,
            out: _,
          });
        }
        function _(_, _) {
          return new _({
            type: "readonly",
            innerType: _,
          });
        }
        function _(_, _, _) {
          return new _({
            type: "template_literal",
            parts: _,
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "lazy",
            getter: _,
          });
        }
        function _(_, _) {
          return new _({
            type: "promise",
            innerType: _,
          });
        }
        function _(_, _, _) {
          const _ = util.normalizeParams(_);
          return (
            _.abort ?? (_.abort = !0),
            new _({
              type: "custom",
              check: "custom",
              _: _,
              ..._,
            })
          );
        }
        function _(_, _, _) {
          return new _({
            type: "custom",
            check: "custom",
            _: _,
            ..._._(_),
          });
        }
        function _(_, _) {
          const _ = _(
            (_) => (
              (_.addIssue = (_) => {
                if (typeof _ == "string")
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
        function _(_, _) {
          const _ = new _({
            check: "custom",
            ..._._(_),
          });
          return (_._zod.check = _), _;
        }
        function _(_) {
          const _ = new _({
            check: "describe",
          });
          return (
            (_._zod.onattach = [
              (_) => {
                const _ = _.get(_) ?? {};
                _.add(_, {
                  ..._,
                  description: _,
                });
              },
            ]),
            (_._zod.check = () => {}),
            _
          );
        }
        function _(_) {
          const _ = new _({
            check: "meta",
          });
          return (
            (_._zod.onattach = [
              (_) => {
                const _ = _.get(_) ?? {};
                _.add(_, {
                  ..._,
                  ..._,
                });
              },
            ]),
            (_._zod.check = () => {}),
            _
          );
        }
        function _(_, _) {
          const _ = _._(_);
          let _ = _.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            _ = _.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
          _.case !== "sensitive" &&
            ((_ = _.map((_) => (typeof _ == "string" ? _.toLowerCase() : _))),
            (_ = _.map((_) => (typeof _ == "string" ? _.toLowerCase() : _))));
          const _ = new Set(_),
            _ = new Set(_),
            _ = _.Codec ?? _,
            _ = _.Boolean ?? _,
            _ = _.String ?? _,
            _ = new _({
              type: "string",
              error: _.error,
            }),
            _ = new _({
              type: "boolean",
              error: _.error,
            }),
            _ = new _({
              type: "pipe",
              _: _,
              out: _,
              transform: (_, _) => {
                let _ = _;
                return (
                  _.case !== "sensitive" && (_ = _.toLowerCase()),
                  _.has(_)
                    ? !0
                    : _.has(_)
                      ? !1
                      : (_.issues.push({
                          code: "invalid_value",
                          expected: "stringbool",
                          values: [..._, ..._],
                          input: _.value,
                          inst: _,
                          continue: !1,
                        }),
                        {})
                );
              },
              reverseTransform: (_, _) =>
                _ === !0 ? _[0] || "true" : _[0] || "false",
              error: _.error,
            });
          return _;
        }
        function _(_, _, _, _ = {}) {
          const _ = util.normalizeParams(_),
            _ = {
              ...util.normalizeParams(_),
              check: "string_format",
              type: "string",
              format: _,
              _: typeof _ == "function" ? _ : (_) => _.test(_),
              ..._,
            };
          return _ instanceof RegExp && (_.pattern = _), new _(_);
        }
        function _(_) {
          let _ = _?.target ?? "draft-2020-12";
          return (
            _ === "draft-4" && (_ = "draft-04"),
            _ === "draft-7" && (_ = "draft-07"),
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
          if (_)
            return (
              _.count++,
              _.schemaPath.includes(_) && (_.cycle = _.path),
              _.schema
            );
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
          return (
            _ && Object.assign(_.schema, _),
            _._ === "input" &&
              _(_) &&
              (delete _.schema.examples, delete _.schema.default),
            _._ === "input" &&
              "_prefault" in _.schema &&
              ((_ = _.schema).default ?? (_.default = _.schema._prefault)),
            delete _.schema._prefault,
            _.seen.get(_).schema
          );
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
              const _ = _.target === "draft-2020-12" ? "$defs" : "definitions";
              if (_.external) {
                const _ = _.external.registry.get(_[0])?._,
                  _ = _.external.uri ?? ((_) => _);
                if (_)
                  return {
                    ref: _(_),
                  };
                const _ = _[1].defId ?? _[1].schema._ ?? `schema${_.counter++}`;
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
                _ = _[1].schema._ ?? `__schema${_.counter++}`;
              return {
                defId: _,
                ref: _ + _,
              };
            },
            _ = (_) => {
              if (_[1].schema.$ref) return;
              const _ = _[1],
                { ref: _, defId: _ } = _(_);
              (_.def = {
                ..._.schema,
              }),
                _ && (_.defId = _);
              const _ = _.schema;
              for (const _ in _) delete _[_];
              _.$ref = _;
            };
          if (_.cycles === "throw")
            for (const _ of _.seen.entries()) {
              const _ = _[1];
              if (_.cycle)
                throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
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
            if (_.metadataRegistry.get(_[0])?._) {
              _(_);
              continue;
            }
            if (_.cycle) {
              _(_);
              continue;
            }
            if (_.count > 1 && _.reused === "ref") {
              _(_);
              continue;
            }
          }
        }
        function _(_, _) {
          const _ = _.seen.get(_);
          if (!_) throw new Error("Unprocessed schema. This is a bug in Zod.");
          const _ = (_) => {
            const _ = _.seen.get(_);
            if (_.ref === null) return;
            const _ = _.def ?? _.schema,
              _ = {
                ..._,
              },
              _ = _.ref;
            if (((_.ref = null), _)) {
              _(_);
              const _ = _.seen.get(_),
                _ = _.schema;
              if (
                (_.$ref &&
                (_.target === "draft-07" ||
                  _.target === "draft-04" ||
                  _.target === "openapi-3.0")
                  ? ((_.allOf = _.allOf ?? []), _.allOf.push(_))
                  : Object.assign(_, _),
                Object.assign(_, _),
                _._zod.parent === _)
              )
                for (const _ in _)
                  _ === "$ref" || _ === "allOf" || _ in _ || delete _[_];
              if (_.$ref && _.def)
                for (const _ in _)
                  _ === "$ref" ||
                    _ === "allOf" ||
                    (_ in _.def &&
                      JSON.stringify(_[_]) === JSON.stringify(_.def[_]) &&
                      delete _[_]);
            }
            const _ = _._zod.parent;
            if (_ && _ !== _) {
              _(_);
              const _ = _.seen.get(_);
              if (_?.schema.$ref && ((_.$ref = _.schema.$ref), _.def))
                for (const _ in _)
                  _ === "$ref" ||
                    _ === "allOf" ||
                    (_ in _.def &&
                      JSON.stringify(_[_]) === JSON.stringify(_.def[_]) &&
                      delete _[_]);
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
            (_.target === "draft-2020-12"
              ? (_.$schema = "https://json-schema.org/draft/2020-12/schema")
              : _.target === "draft-07"
                ? (_.$schema = "http://json-schema.org/draft-07/schema#")
                : _.target === "draft-04"
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
          _ !== void 0 && _._ === _ && delete _._;
          const _ = _.external?.defs ?? {};
          for (const _ of _.seen.entries()) {
            const _ = _[1];
            _.def &&
              _.defId &&
              (_.def._ === _.defId && delete _.def._, (_[_.defId] = _.def));
          }
          _.external ||
            (Object.keys(_).length > 0 &&
              (_.target === "draft-2020-12"
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
          } catch {
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
          if (_.type === "transform") return !0;
          if (_.type === "array") return _(_.element, _);
          if (_.type === "set") return _(_.valueType, _);
          if (_.type === "lazy") return _(_.getter(), _);
          if (
            _.type === "promise" ||
            _.type === "optional" ||
            _.type === "nonoptional" ||
            _.type === "nullable" ||
            _.type === "readonly" ||
            _.type === "default" ||
            _.type === "prefault"
          )
            return _(_.innerType, _);
          if (_.type === "intersection") return _(_.left, _) || _(_.right, _);
          if (_.type === "record" || _.type === "map")
            return _(_.keyType, _) || _(_.valueType, _);
          if (_.type === "pipe")
            return _._zod.traits.has("$ZodCodec")
              ? !0
              : _(_._, _) || _(_.out, _);
          if (_.type === "object") {
            for (const _ in _.shape) if (_(_.shape[_], _)) return !0;
            return !1;
          }
          if (_.type === "union") {
            for (const _ of _.options) if (_(_, _)) return !0;
            return !1;
          }
          if (_.type === "tuple") {
            for (const _ of _.items) if (_(_, _)) return !0;
            return !!(_.rest && _(_.rest, _));
          }
          return !1;
        }
        const _ =
            (_, _ = {}) =>
            (_) => {
              const _ = _({
                ..._,
                processors: _,
              });
              return _(_, _), _(_, _), _(_, _);
            },
          _ =
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
              (typeof _ == "number" && (_.minLength = _),
              typeof _ == "number" && (_.maxLength = _),
              _ &&
                ((_.format = _[_] ?? _),
                _.format === "" && delete _.format,
                _ === "time" && delete _.format),
              _ && (_.contentEncoding = _),
              _ && _.size > 0)
            ) {
              const _ = [..._];
              _.length === 1
                ? (_.pattern = _[0].source)
                : _.length > 1 &&
                  (_.allOf = [
                    ..._.map((_) => ({
                      ...(_.target === "draft-07" ||
                      _.target === "draft-04" ||
                      _.target === "openapi-3.0"
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
            typeof _ == "string" && _.includes("int")
              ? (_.type = "integer")
              : (_.type = "number");
            const _ =
                typeof _ == "number" && _ >= (_ ?? Number.NEGATIVE_INFINITY),
              _ = typeof _ == "number" && _ <= (_ ?? Number.POSITIVE_INFINITY),
              _ = _.target === "draft-04" || _.target === "openapi-3.0";
            _
              ? _
                ? ((_.minimum = _), (_.exclusiveMinimum = !0))
                : (_.exclusiveMinimum = _)
              : typeof _ == "number" && (_.minimum = _),
              _
                ? _
                  ? ((_.maximum = _), (_.exclusiveMaximum = !0))
                  : (_.exclusiveMaximum = _)
                : typeof _ == "number" && (_.maximum = _),
              typeof _ == "number" && (_.multipleOf = _);
          },
          _ = (_, _, _, _) => {
            _.type = "boolean";
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            _.target === "openapi-3.0"
              ? ((_.type = "string"), (_.nullable = !0), (_.enum = [null]))
              : (_.type = "null");
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            _.not = {};
          },
          _ = (_, _, _, _) => {},
          _ = (_, _, _, _) => {},
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def,
              _ = (0, _._)(_.entries);
            _.every((_) => typeof _ == "number") && (_.type = "number"),
              _.every((_) => typeof _ == "string") && (_.type = "string"),
              (_.enum = _);
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def,
              _ = [];
            for (const _ of _.values)
              if (_ === void 0) {
                if (_.unrepresentable === "throw")
                  throw new Error(
                    "Literal `undefined` cannot be represented in JSON Schema",
                  );
              } else if (typeof _ == "bigint") {
                if (_.unrepresentable === "throw")
                  throw new Error(
                    "BigInt literals cannot be represented in JSON Schema",
                  );
                _.push(Number(_));
              } else _.push(_);
            if (_.length !== 0)
              if (_.length === 1) {
                const _ = _[0];
                (_.type = _ === null ? "null" : typeof _),
                  _.target === "draft-04" || _.target === "openapi-3.0"
                    ? (_.enum = [_])
                    : (_.const = _);
              } else
                _.every((_) => typeof _ == "number") && (_.type = "number"),
                  _.every((_) => typeof _ == "string") && (_.type = "string"),
                  _.every((_) => typeof _ == "boolean") && (_.type = "boolean"),
                  _.every((_) => _ === null) && (_.type = "null"),
                  (_.enum = _);
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            const _ = _,
              _ = _._zod.pattern;
            if (!_) throw new Error("Pattern not found in template literal");
            (_.type = "string"), (_.pattern = _.source);
          },
          _ = (_, _, _, _) => {
            const _ = _,
              _ = {
                type: "string",
                format: "binary",
                contentEncoding: "binary",
              },
              { minimum: _, maximum: _, mime: _ } = _._zod.bag;
            _ !== void 0 && (_.minLength = _),
              _ !== void 0 && (_.maxLength = _),
              _
                ? _.length === 1
                  ? ((_.contentMediaType = _[0]), Object.assign(_, _))
                  : (Object.assign(_, _),
                    (_.anyOf = _.map((_) => ({
                      contentMediaType: _,
                    }))))
                : Object.assign(_, _);
          },
          _ = (_, _, _, _) => {
            _.type = "boolean";
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error(
                "Custom types cannot be represented in JSON Schema",
              );
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error(
                "Function types cannot be represented in JSON Schema",
              );
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error(
                "Transforms cannot be represented in JSON Schema",
              );
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            if (_.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
          },
          _ = (_, _, _, _) => {
            const _ = _,
              _ = _._zod.def,
              { minimum: _, maximum: _ } = _._zod.bag;
            typeof _ == "number" && (_.minItems = _),
              typeof _ == "number" && (_.maxItems = _),
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
                  return _._ === "input"
                    ? _.optin === void 0
                    : _.optout === void 0;
                }),
              );
            _.size > 0 && (_.required = Array.from(_)),
              _.catchall?._zod.def.type === "never"
                ? (_.additionalProperties = !1)
                : _.catchall
                  ? _.catchall &&
                    (_.additionalProperties = _(_.catchall, _, {
                      ..._,
                      path: [..._.path, "additionalProperties"],
                    }))
                  : _._ === "output" && (_.additionalProperties = !1);
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def,
              _ = _.inclusive === !1,
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
              _ = (_) => "allOf" in _ && Object.keys(_).length === 1,
              _ = [...(_(_) ? _.allOf : [_]), ...(_(_) ? _.allOf : [_])];
            _.allOf = _;
          },
          _ = (_, _, _, _) => {
            const _ = _,
              _ = _._zod.def;
            _.type = "array";
            const _ = _.target === "draft-2020-12" ? "prefixItems" : "items",
              _ =
                _.target === "draft-2020-12" || _.target === "openapi-3.0"
                  ? "items"
                  : "additionalItems",
              _ = _.items.map((_, _) =>
                _(_, _, {
                  ..._,
                  path: [..._.path, _, _],
                }),
              ),
              _ = _.rest
                ? _(_.rest, _, {
                    ..._,
                    path: [
                      ..._.path,
                      _,
                      ...(_.target === "openapi-3.0" ? [_.items.length] : []),
                    ],
                  })
                : null;
            _.target === "draft-2020-12"
              ? ((_.prefixItems = _), _ && (_.items = _))
              : _.target === "openapi-3.0"
                ? ((_.items = {
                    anyOf: _,
                  }),
                  _ && _.items.anyOf.push(_),
                  (_.minItems = _.length),
                  _ || (_.maxItems = _.length))
                : ((_.items = _), _ && (_.additionalItems = _));
            const { minimum: _, maximum: _ } = _._zod.bag;
            typeof _ == "number" && (_.minItems = _),
              typeof _ == "number" && (_.maxItems = _);
          },
          _ = (_, _, _, _) => {
            const _ = _,
              _ = _._zod.def;
            _.type = "object";
            const _ = _.keyType,
              _ = _._zod.bag?.patterns;
            if (_.mode === "loose" && _ && _.size > 0) {
              const _ = _(_.valueType, _, {
                ..._,
                path: [..._.path, "patternProperties", "*"],
              });
              _.patternProperties = {};
              for (const _ of _) _.patternProperties[_.source] = _;
            } else
              (_.target === "draft-07" || _.target === "draft-2020-12") &&
                (_.propertyNames = _(_.keyType, _, {
                  ..._,
                  path: [..._.path, "propertyNames"],
                })),
                (_.additionalProperties = _(_.valueType, _, {
                  ..._,
                  path: [..._.path, "additionalProperties"],
                }));
            const _ = _._zod.values;
            if (_) {
              const _ = [..._].filter(
                (_) => typeof _ == "string" || typeof _ == "number",
              );
              _.length > 0 && (_.required = _);
            }
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def,
              _ = _(_.innerType, _, _),
              _ = _.seen.get(_);
            _.target === "openapi-3.0"
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
            const _ = _.seen.get(_);
            _.ref = _.innerType;
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def;
            _(_.innerType, _, _);
            const _ = _.seen.get(_);
            (_.ref = _.innerType),
              (_.default = JSON.parse(JSON.stringify(_.defaultValue)));
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def;
            _(_.innerType, _, _);
            const _ = _.seen.get(_);
            (_.ref = _.innerType),
              _._ === "input" &&
                (_._prefault = JSON.parse(JSON.stringify(_.defaultValue)));
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def;
            _(_.innerType, _, _);
            const _ = _.seen.get(_);
            _.ref = _.innerType;
            let _;
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
              _ = _._ === "input" ? (_ ? _.out : _._) : _.out;
            _(_, _, _);
            const _ = _.seen.get(_);
            _.ref = _;
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def;
            _(_.innerType, _, _);
            const _ = _.seen.get(_);
            (_.ref = _.innerType), (_.readOnly = !0);
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def;
            _(_.innerType, _, _);
            const _ = _.seen.get(_);
            _.ref = _.innerType;
          },
          _ = (_, _, _, _) => {
            const _ = _._zod.def;
            _(_.innerType, _, _);
            const _ = _.seen.get(_);
            _.ref = _.innerType;
          },
          _ = {
            string: _,
            number: _,
            boolean: _,
            bigint: _,
            symbol: _,
            null: _,
            undefined: _,
            void: _,
            never: _,
            any: _,
            unknown: _,
            date: _,
            enum: _,
            literal: _,
            nan: _,
            template_literal: _,
            file: _,
            success: _,
            custom: _,
            function: _,
            transform: _,
            map: _,
            set: _,
            array: _,
            object: _,
            union: _,
            intersection: _,
            tuple: _,
            record: _,
            nullable: _,
            nonoptional: _,
            default: _,
            prefault: _,
            catch: _,
            pipe: _,
            readonly: _,
            promise: _,
            optional: _,
            lazy: (_, _, _, _) => {
              const _ = _._zod.innerType;
              _(_, _, _);
              const _ = _.seen.get(_);
              _.ref = _;
            },
          };
        function _(_, _) {
          if ("_idmap" in _) {
            const _ = _,
              _ = initializeContext({
                ..._,
                processors: _,
              }),
              _ = {};
            for (const _ of _._idmap.entries()) {
              const [_, _] = _;
              process(_, _);
            }
            const _ = {},
              _ = {
                registry: _,
                uri: _?.uri,
                defs: _,
              };
            _.external = _;
            for (const _ of _._idmap.entries()) {
              const [_, _] = _;
              extractDefs(_, _), (_[_] = finalize(_, _));
            }
            if (Object.keys(_).length > 0) {
              const _ = _.target === "draft-2020-12" ? "$defs" : "definitions";
              _.__shared = {
                [_]: _,
              };
            }
            return {
              schemas: _,
            };
          }
          const _ = initializeContext({
            ..._,
            processors: _,
          });
          return process(_, _), extractDefs(_, _), finalize(_, _);
        }
        const _ = _._("ZodISODateTime", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return _(_, _);
        }
        const _ = _._("ZodISODate", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return _(_, _);
        }
        const _ = _._("ZodISOTime", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return _(_, _);
        }
        const _ = _._("ZodISODuration", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return _(_, _);
        }
        const _ = (_, _) => {
            _.init(_, _),
              (_.name = "ZodError"),
              Object.defineProperties(_, {
                format: {
                  value: (_) => _(_, _),
                },
                flatten: {
                  value: (_) => _(_, _),
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
                  get() {
                    return _.issues.length === 0;
                  },
                },
              });
          },
          _ = null,
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
              (_.toJSONSchema = _(_, {})),
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
                          typeof _ == "function"
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
                  return this.check(_(_, _));
                },
                superRefine(_, _) {
                  return this.check(_(_, _));
                },
                overwrite(_) {
                  return this.check(_(_));
                },
                optional() {
                  return _(this);
                },
                exactOptional() {
                  return _(this);
                },
                nullable() {
                  return _(this);
                },
                nullish() {
                  return _(_(this));
                },
                nonoptional(_) {
                  return _(this, _);
                },
                array() {
                  return _(this);
                },
                _(_) {
                  return _([this, _]);
                },
                and(_) {
                  return _(this, _);
                },
                transform(_) {
                  return _(this, _(_));
                },
                default(_) {
                  return _(this, _);
                },
                prefault(_) {
                  return _(this, _);
                },
                catch(_) {
                  return _(this, _);
                },
                pipe(_) {
                  return _(this, _);
                },
                readonly() {
                  return _(this);
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
                  if (_.length === 0) return _.get(this);
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
                get() {
                  return _.get(_)?.description;
                },
                configurable: !0,
              }),
              _
            ),
          ),
          _ = _._("_ZodString", (_, _) => {
            _.init(_, _),
              _.init(_, _),
              (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _));
            const _ = _._zod.bag;
            (_.format = _.format ?? null),
              (_.minLength = _.minimum ?? null),
              (_.maxLength = _.maximum ?? null),
              _(_, "_ZodString", {
                regex(..._) {
                  return this.check(_(..._));
                },
                includes(..._) {
                  return this.check(_(..._));
                },
                startsWith(..._) {
                  return this.check(_(..._));
                },
                endsWith(..._) {
                  return this.check(_(..._));
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
                  return this.check(_(_));
                },
                uppercase(_) {
                  return this.check(_(_));
                },
                trim() {
                  return this.check(_());
                },
                normalize(..._) {
                  return this.check(_(..._));
                },
                toLowerCase() {
                  return this.check(_());
                },
                toUpperCase() {
                  return this.check(_());
                },
                slugify() {
                  return this.check(_());
                },
              });
          }),
          _ = _._("ZodString", (_, _) => {
            _.init(_, _),
              _.init(_, _),
              (_.email = (_) => _.check(_(_, _))),
              (_.url = (_) => _.check(_(_, _))),
              (_.jwt = (_) => _.check(_(_, _))),
              (_.emoji = (_) => _.check(_(_, _))),
              (_.guid = (_) => _.check(_(_, _))),
              (_.uuid = (_) => _.check(_(_, _))),
              (_.uuidv4 = (_) => _.check(_(_, _))),
              (_.uuidv6 = (_) => _.check(_(_, _))),
              (_.uuidv7 = (_) => _.check(_(_, _))),
              (_.nanoid = (_) => _.check(_(_, _))),
              (_.guid = (_) => _.check(_(_, _))),
              (_.cuid = (_) => _.check(_(_, _))),
              (_.cuid2 = (_) => _.check(_(_, _))),
              (_.ulid = (_) => _.check(_(_, _))),
              (_.base64 = (_) => _.check(_(_, _))),
              (_.base64url = (_) => _.check(_(_, _))),
              (_.xid = (_) => _.check(_(_, _))),
              (_.ksuid = (_) => _.check(_(_, _))),
              (_.ipv4 = (_) => _.check(_(_, _))),
              (_.ipv6 = (_) => _.check(_(_, _))),
              (_.cidrv4 = (_) => _.check(_(_, _))),
              (_.cidrv6 = (_) => _.check(_(_, _))),
              (_.e164 = (_) => _.check(_(_, _))),
              (_.datetime = (_) => _.check(_(_))),
              (_.date = (_) => _.check(_(_))),
              (_.time = (_) => _.check(_(_))),
              (_.duration = (_) => _.check(_(_)));
          });
        function _(_) {
          return _(_, _);
        }
        const _ = _._("ZodStringFormat", (_, _) => {
            _.init(_, _), _.init(_, _);
          }),
          _ = _._("ZodEmail", (_, _) => {
            _.init(_, _), _.init(_, _);
          });
        function _(_) {
          return core._email(_, _);
        }
        const _ = _._("ZodGUID", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._guid(_, _);
        }
        const _ = _._("ZodUUID", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._uuid(_, _);
        }
        function _(_) {
          return core._uuidv4(_, _);
        }
        function _(_) {
          return core._uuidv6(_, _);
        }
        function _(_) {
          return core._uuidv7(_, _);
        }
        const _ = _._("ZodURL", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._url(_, _);
        }
        function _(_) {
          return core._url(_, {
            protocol: core.regexes.httpProtocol,
            hostname: core.regexes.domain,
            ...util.normalizeParams(_),
          });
        }
        const _ = _._("ZodEmoji", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._emoji(_, _);
        }
        const _ = _._("ZodNanoID", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._nanoid(_, _);
        }
        const _ = _._("ZodCUID", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._cuid(_, _);
        }
        const _ = _._("ZodCUID2", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._cuid2(_, _);
        }
        const _ = _._("ZodULID", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._ulid(_, _);
        }
        const _ = _._("ZodXID", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._xid(_, _);
        }
        const _ = _._("ZodKSUID", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._ksuid(_, _);
        }
        const _ = _._("ZodIPv4", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._ipv4(_, _);
        }
        const _ = null;
        function _(_) {
          return core._mac(_, _);
        }
        const _ = _._("ZodIPv6", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._ipv6(_, _);
        }
        const _ = _._("ZodCIDRv4", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._cidrv4(_, _);
        }
        const _ = _._("ZodCIDRv6", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._cidrv6(_, _);
        }
        const _ = _._("ZodBase64", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._base64(_, _);
        }
        const _ = _._("ZodBase64URL", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._base64url(_, _);
        }
        const _ = _._("ZodE164", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._e164(_, _);
        }
        const _ = _._("ZodJWT", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return core._jwt(_, _);
        }
        const _ = null;
        function _(_, _, _ = {}) {
          return core._stringFormat(_, _, _, _);
        }
        function _(_) {
          return core._stringFormat(_, "hostname", core.regexes.hostname, _);
        }
        function _(_) {
          return core._stringFormat(_, "hex", core.regexes.hex, _);
        }
        function _(_, _) {
          const _ = _?.enc ?? "hex",
            _ = `${_}_${_}`,
            _ = core.regexes[_];
          if (!_) throw new Error(`Unrecognized hash format: ${_}`);
          return core._stringFormat(_, _, _, _);
        }
        const _ = _._("ZodNumber", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
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
          return _(_, _);
        }
        const _ = _._("ZodNumberFormat", (_, _) => {
          _.init(_, _), _.init(_, _);
        });
        function _(_) {
          return _(_, _);
        }
        function _(_) {
          return core._float32(_, _);
        }
        function _(_) {
          return core._float64(_, _);
        }
        function _(_) {
          return core._int32(_, _);
        }
        function _(_) {
          return core._uint32(_, _);
        }
        const _ = _._("ZodBoolean", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _));
        });
        function _(_) {
          return core._boolean(_, _);
        }
        const _ = _._("ZodBigInt", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
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
        function _(_) {
          return core._bigint(_, _);
        }
        const _ = null;
        function _(_) {
          return core._int64(_, _);
        }
        function _(_) {
          return core._uint64(_, _);
        }
        const _ = null;
        function _(_) {
          return core._symbol(_, _);
        }
        const _ = null;
        function _(_) {
          return core._undefined(_, _);
        }
        const _ = null;
        function _(_) {
          return core._null(_, _);
        }
        const _ = null;
        function _() {
          return core._any(_);
        }
        const _ = _._("ZodUnknown", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _));
        });
        function _() {
          return _(_);
        }
        const _ = _._("ZodNever", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _));
        });
        function _(_) {
          return _(_, _);
        }
        const _ = null;
        function _(_) {
          return core._void(_, _);
        }
        const _ = _._("ZodDate", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_.min = (_, _) => _.check(_(_, _))),
            (_.max = (_, _) => _.check(_(_, _)));
          const _ = _._zod.bag;
          (_.minDate = _.minimum ? new Date(_.minimum) : null),
            (_.maxDate = _.maximum ? new Date(_.maximum) : null);
        });
        function _(_) {
          return core._date(_, _);
        }
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
          return _(_, _, _);
        }
        function _(_) {
          const _ = _._zod.def.shape;
          return _(Object.keys(_));
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
        function _(_, _) {
          return new _({
            type: "object",
            shape: _,
            catchall: _(),
            ...util.normalizeParams(_),
          });
        }
        function _(_, _) {
          return new _({
            type: "object",
            shape: _,
            catchall: _(),
            ...util.normalizeParams(_),
          });
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
        const _ = null;
        function _(_, _) {
          return new _({
            type: "union",
            options: _,
            inclusive: !1,
            ...util.normalizeParams(_),
          });
        }
        const _ = null;
        function _(_, _, _) {
          return new _({
            type: "union",
            options: _,
            discriminator: _,
            ...util.normalizeParams(_),
          });
        }
        const _ = _._("ZodIntersection", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _));
        });
        function _(_, _) {
          return new _({
            type: "intersection",
            left: _,
            right: _,
          });
        }
        const _ = null;
        function _(_, _, _) {
          const _ = _ instanceof core.$ZodType,
            _ = _ ? _ : _,
            _ = _ ? _ : null;
          return new _({
            type: "tuple",
            items: _,
            rest: _,
            ...util.normalizeParams(_),
          });
        }
        const _ = null;
        function _(_, _, _) {
          return !_ || !_._zod
            ? new _({
                type: "record",
                keyType: _(),
                valueType: _,
                ...util.normalizeParams(_),
              })
            : new _({
                type: "record",
                keyType: _,
                valueType: _,
                ...util.normalizeParams(_),
              });
        }
        function _(_, _, _) {
          const _ = core.clone(_);
          return (
            (_._zod.values = void 0),
            new _({
              type: "record",
              keyType: _,
              valueType: _,
              ...util.normalizeParams(_),
            })
          );
        }
        function _(_, _, _) {
          return new _({
            type: "record",
            keyType: _,
            valueType: _,
            mode: "loose",
            ...util.normalizeParams(_),
          });
        }
        const _ = null;
        function _(_, _, _) {
          return new _({
            type: "map",
            keyType: _,
            valueType: _,
            ...util.normalizeParams(_),
          });
        }
        const _ = null;
        function _(_, _) {
          return new _({
            type: "set",
            valueType: _,
            ...util.normalizeParams(_),
          });
        }
        const _ = _._("ZodEnum", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_.enum = _.entries),
            (_.options = Object.values(_.entries));
          const _ = new Set(Object.keys(_.entries));
          (_.extract = (_, _) => {
            const _ = {};
            for (const _ of _)
              if (_.has(_)) _[_] = _.entries[_];
              else throw new Error(`Key ${_} not found in enum`);
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
              for (const _ of _)
                if (_.has(_)) delete _[_];
                else throw new Error(`Key ${_} not found in enum`);
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
        function _(_, _) {
          return new _({
            type: "enum",
            entries: _,
            ...util.normalizeParams(_),
          });
        }
        const _ = _._("ZodLiteral", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
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
        const _ = null;
        function _(_) {
          return core._file(_, _);
        }
        const _ = _._("ZodTransform", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_._zod.parse = (_, _) => {
              if (_.direction === "backward") throw new _._(_.constructor.name);
              _.addIssue = (_) => {
                if (typeof _ == "string") _.issues.push(_._(_, _.value, _));
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
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
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
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_.unwrap = () => _._zod.def.innerType);
        });
        function _(_) {
          return new _({
            type: "optional",
            innerType: _,
          });
        }
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
        function _(_) {
          return _(_(_));
        }
        const _ = _._("ZodDefault", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_.unwrap = () => _._zod.def.innerType),
            (_.removeDefault = _.unwrap);
        });
        function _(_, _) {
          return new _({
            type: "default",
            innerType: _,
            get defaultValue() {
              return typeof _ == "function" ? _() : _._(_);
            },
          });
        }
        const _ = _._("ZodPrefault", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_.unwrap = () => _._zod.def.innerType);
        });
        function _(_, _) {
          return new _({
            type: "prefault",
            innerType: _,
            get defaultValue() {
              return typeof _ == "function" ? _() : _._(_);
            },
          });
        }
        const _ = _._("ZodNonOptional", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_.unwrap = () => _._zod.def.innerType);
        });
        function _(_, _) {
          return new _({
            type: "nonoptional",
            innerType: _,
            ..._._(_),
          });
        }
        const _ = null;
        function _(_) {
          return new _({
            type: "success",
            innerType: _,
          });
        }
        const _ = _._("ZodCatch", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
            (_.unwrap = () => _._zod.def.innerType),
            (_.removeCatch = _.unwrap);
        });
        function _(_, _) {
          return new _({
            type: "catch",
            innerType: _,
            catchValue: typeof _ == "function" ? _ : () => _,
          });
        }
        const _ = null;
        function _(_) {
          return core._nan(_, _);
        }
        const _ = _._("ZodPipe", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
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
        function _(_) {
          const _ = _._zod.def;
          return new _({
            type: "pipe",
            _: _.out,
            out: _._,
            transform: _.reverseTransform,
            reverseTransform: _.transform,
          });
        }
        const _ = null,
          _ = _._("ZodReadonly", (_, _) => {
            _.init(_, _),
              _.init(_, _),
              (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _)),
              (_.unwrap = () => _._zod.def.innerType);
          });
        function _(_) {
          return new _({
            type: "readonly",
            innerType: _,
          });
        }
        const _ = null;
        function _(_, _) {
          return new _({
            type: "template_literal",
            parts: _,
            ...util.normalizeParams(_),
          });
        }
        const _ = null;
        function _(_) {
          return new _({
            type: "lazy",
            getter: _,
          });
        }
        const _ = null;
        function _(_) {
          return new _({
            type: "promise",
            innerType: _,
          });
        }
        const _ = null;
        function _(_) {
          return new _({
            type: "function",
            input: Array.isArray(_?.input) ? _(_?.input) : (_?.input ?? _(_())),
            output: _?.output ?? _(),
          });
        }
        const _ = _._("ZodCustom", (_, _) => {
          _.init(_, _),
            _.init(_, _),
            (_._zod.processJSONSchema = (_, _, _) => _(_, _, _, _));
        });
        function _(_) {
          const _ = new core.$ZodCheck({
            check: "custom",
          });
          return (_._zod.check = _), _;
        }
        function _(_, _) {
          return core._custom(_, _ ?? (() => !0), _);
        }
        function _(_, _ = {}) {
          return _(_, _, _);
        }
        function _(_, _) {
          return _(_, _);
        }
        const _ = _,
          _ = _;
        function _(_, _ = {}) {
          const _ = new _({
            type: "custom",
            check: "custom",
            _: (_) => _ instanceof _,
            abort: !0,
            ...util.normalizeParams(_),
          });
          return (
            (_._zod.bag.Class = _),
            (_._zod.check = (_) => {
              _.value instanceof _ ||
                _.issues.push({
                  code: "invalid_type",
                  expected: _.name,
                  input: _.value,
                  inst: _,
                  path: [...(_._zod.def.path ?? [])],
                });
            }),
            _
          );
        }
        const _ = (..._) =>
          _(
            {
              Codec: _,
              Boolean: _,
              String: _,
            },
            ..._,
          );
        function _(_) {
          const _ = _(() => _([_(_), _(), _(), _(), _(_), _(_(), _)]));
          return _;
        }
        function _(_, _) {
          return new _({
            type: "pipe",
            _: _(_),
            out: _,
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return _(_, _);
        }
        function _(_) {
          return _(_, _);
        }
        function _(_) {
          return _(_, _);
        }
        function _(_) {
          return _(_, _);
        }
        function _(_) {
          return _(_, _);
        }
        (0, _._)((0, _._)());
        const _ = null;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _;
        const _ = Object.freeze({
          status: "aborted",
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
          Object.defineProperty(_, "name", {
            value: _,
          });
          function _(_) {
            var _;
            const _ = _?.Parent ? new _() : this;
            _(_, _), (_ = _._zod).deferred ?? (_.deferred = []);
            for (const _ of _._zod.deferred) _();
            return _;
          }
          return (
            Object.defineProperty(_, "init", {
              value: _,
            }),
            Object.defineProperty(_, Symbol.hasInstance, {
              value: (_) =>
                _?.Parent && _ instanceof _.Parent
                  ? !0
                  : _?._zod?.traits?.has(_),
            }),
            Object.defineProperty(_, "name", {
              value: _,
            }),
            _
          );
        }
        const _ = Symbol("zod_brand");
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
        "use strict";
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
          return _;
        }
        function _(_) {
          return _;
        }
        function _(_) {}
        function _(_) {
          throw new Error("Unexpected value in exhaustive check");
        }
        function _(_) {}
        function _(_) {
          const _ = Object.values(_).filter((_) => typeof _ == "number");
          return Object.entries(_)
            .filter(([_, _]) => _.indexOf(+_) === -1)
            .map(([_, _]) => _);
        }
        function _(_, _ = "|") {
          return _.map((_) => _(_)).join(_);
        }
        function _(_, _) {
          return typeof _ == "bigint" ? _.toString() : _;
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
              throw new Error("cached value already set");
            },
          };
        }
        function _(_) {
          return _ == null;
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
              if (_ !== _) return _ === void 0 && ((_ = _), (_ = _())), _;
            },
            set(_) {
              Object.defineProperty(_, _, {
                value: _,
              });
            },
            configurable: !0,
          });
        }
        function _(_) {
          return Object.create(
            Object.getPrototypeOf(_),
            Object.getOwnPropertyDescriptors(_),
          );
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
          return _(_._zod.def);
        }
        function _(_, _) {
          return _ ? _.reduce((_, _) => _?.[_], _) : _;
        }
        function _(_) {
          const _ = Object.keys(_),
            _ = _.map((_) => _[_]);
          return Promise.all(_).then((_) => {
            const _ = {};
            for (let _ = 0; _ < _.length; _++) _[_[_]] = _[_];
            return _;
          });
        }
        function _(_ = 10) {
          const _ = "abcdefghijklmnopqrstuvwxyz";
          let _ = "";
          for (let _ = 0; _ < _; _++)
            _ += _[Math.floor(Math.random() * _.length)];
          return _;
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
          return typeof _ == "object" && _ !== null && !Array.isArray(_);
        }
        const _ = _(() => {
          if (
            _._.jitless ||
            (typeof navigator < "u" &&
              navigator?.userAgent?.includes("Cloudflare"))
          )
            return !1;
          try {
            const _ = Function;
            return new _(""), !0;
          } catch {
            return !1;
          }
        });
        function _(_) {
          if (_(_) === !1) return !1;
          const _ = _.constructor;
          if (_ === void 0 || typeof _ != "function") return !0;
          const _ = _.prototype;
          return !(
            _(_) === !1 ||
            Object.prototype.hasOwnProperty.call(_, "isPrototypeOf") === !1
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
        function _(_) {
          let _ = 0;
          for (const _ in _) Object.prototype.hasOwnProperty.call(_, _) && _++;
          return _;
        }
        const _ = (_) => {
            const _ = typeof _;
            switch (_) {
              case "undefined":
                return "undefined";
              case "string":
                return "string";
              case "number":
                return Number.isNaN(_) ? "nan" : "number";
              case "boolean":
                return "boolean";
              case "function":
                return "function";
              case "bigint":
                return "bigint";
              case "symbol":
                return "symbol";
              case "object":
                return Array.isArray(_)
                  ? "array"
                  : _ === null
                    ? "null"
                    : _.then &&
                        typeof _.then == "function" &&
                        _.catch &&
                        typeof _.catch == "function"
                      ? "promise"
                      : typeof Map < "u" && _ instanceof Map
                        ? "map"
                        : typeof Set < "u" && _ instanceof Set
                          ? "set"
                          : typeof Date < "u" && _ instanceof Date
                            ? "date"
                            : typeof File < "u" && _ instanceof File
                              ? "file"
                              : "object";
              default:
                throw new Error(`Unknown data type: ${_}`);
            }
          },
          _ = new Set(["string", "number", "symbol"]),
          _ = new Set([
            "string",
            "number",
            "bigint",
            "boolean",
            "symbol",
            "undefined",
          ]);
        function _(_) {
          return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
        function _(_, _, _) {
          const _ = new _._zod.constr(_ ?? _._zod.def);
          return (!_ || _?.parent) && (_._zod.parent = _), _;
        }
        function _(_) {
          const _ = _;
          if (!_) return {};
          if (typeof _ == "string")
            return {
              error: () => _,
            };
          if (_?.message !== void 0) {
            if (_?.error !== void 0)
              throw new Error(
                "Cannot specify both `message` and `error` params",
              );
            _.error = _.message;
          }
          return (
            delete _.message,
            typeof _.error == "string"
              ? {
                  ..._,
                  error: () => _.error,
                }
              : _
          );
        }
        function _(_) {
          let _;
          return new Proxy(
            {},
            {
              get(_, _, _) {
                return _ ?? (_ = _()), Reflect.get(_, _, _);
              },
              set(_, _, _, _) {
                return _ ?? (_ = _()), Reflect.set(_, _, _, _);
              },
              has(_, _) {
                return _ ?? (_ = _()), Reflect.has(_, _);
              },
              deleteProperty(_, _) {
                return _ ?? (_ = _()), Reflect.deleteProperty(_, _);
              },
              ownKeys(_) {
                return _ ?? (_ = _()), Reflect.ownKeys(_);
              },
              getOwnPropertyDescriptor(_, _) {
                return _ ?? (_ = _()), Reflect.getOwnPropertyDescriptor(_, _);
              },
              defineProperty(_, _, _) {
                return _ ?? (_ = _()), Reflect.defineProperty(_, _, _);
              },
            },
          );
        }
        function _(_) {
          return typeof _ == "bigint"
            ? _.toString() + "n"
            : typeof _ == "string"
              ? `"${_}"`
              : `${_}`;
        }
        function _(_) {
          return Object.keys(_).filter(
            (_) =>
              _[_]._zod.optin === "optional" && _[_]._zod.optout === "optional",
          );
        }
        const _ = {
            safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
            int32: [-2147483648, 2147483647],
            uint32: [0, 4294967295],
            float32: [-34028234663852886e22, 34028234663852886e22],
            float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
          },
          _ = {
            int64: [
              BigInt("-9223372036854775808"),
              BigInt("9223372036854775807"),
            ],
            uint64: [BigInt(0), BigInt("18446744073709551615")],
          };
        function _(_, _) {
          const _ = _._zod.def,
            _ = _.checks;
          if (_ && _.length > 0)
            throw new Error(
              ".pick() cannot be used on object schemas containing refinements",
            );
          const _ = _(_._zod.def, {
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
          });
          return _(_, _);
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
                if (!(_ in _.shape))
                  throw new Error(`Unrecognized key: "${_}"`);
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
              if (Object.getOwnPropertyDescriptor(_, _) !== void 0)
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
          if (_.aborted === !0) return !0;
          for (let _ = _; _ < _.issues.length; _++)
            if (_.issues[_]?.continue !== !0) return !0;
          return !1;
        }
        function _(_, _ = 0) {
          if (_.aborted === !0) return !0;
          for (let _ = _; _ < _.issues.length; _++)
            if (_.issues[_]?.continue === !1) return !0;
          return !1;
        }
        function _(_, _) {
          return _.map((_) => {
            var _;
            return (_ = _).path ?? (_.path = []), _.path.unshift(_), _;
          });
        }
        function _(_) {
          return typeof _ == "string" ? _ : _?.message;
        }
        function _(_, _, _) {
          const _ = _.message
              ? _.message
              : (_(_.inst?._zod.def?.error?.(_)) ??
                _(_?.error?.(_)) ??
                _(_.customError?.(_)) ??
                _(_.localeError?.(_)) ??
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
          return _ instanceof Set
            ? "set"
            : _ instanceof Map
              ? "map"
              : _ instanceof File
                ? "file"
                : "unknown";
        }
        function _(_) {
          return Array.isArray(_)
            ? "array"
            : typeof _ == "string"
              ? "string"
              : "unknown";
        }
        function _(_) {
          const _ = typeof _;
          switch (_) {
            case "number":
              return Number.isNaN(_) ? "nan" : "number";
            case "object": {
              if (_ === null) return "null";
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
          return typeof _ == "string"
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
        function _(_) {
          return Object.entries(_)
            .filter(([_, _]) => Number.isNaN(Number.parseInt(_, 10)))
            .map((_) => _[1]);
        }
        function _(_) {
          const _ = atob(_),
            _ = new Uint8Array(_.length);
          for (let _ = 0; _ < _.length; _++) _[_] = _.charCodeAt(_);
          return _;
        }
        function _(_) {
          let _ = "";
          for (let _ = 0; _ < _.length; _++) _ += String.fromCharCode(_[_]);
          return btoa(_);
        }
        function _(_) {
          const _ = _.replace(/-/g, "+").replace(/_/g, "/"),
            _ = "=".repeat((4 - (_.length % 4)) % 4);
          return _(_ + _);
        }
        function _(_) {
          return _(_).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
        function _(_) {
          const _ = _.replace(/^0x/, "");
          if (_.length % 2 !== 0) throw new Error("Invalid hex string length");
          const _ = new Uint8Array(_.length / 2);
          for (let _ = 0; _ < _.length; _ += 2)
            _[_ / 2] = Number.parseInt(_.slice(_, _ + 2), 16);
          return _;
        }
        function _(_) {
          return Array.from(_)
            .map((_) => _.toString(16).padStart(2, "0"))
            .join("");
        }
        class _ {
          constructor(..._) {}
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return `Invalid input: expected ${_}, received ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
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
                return _.format === "starts_with"
                  ? `Invalid string: must start with "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Invalid string: must end with "${_.suffix}"`
                    : _.format === "includes"
                      ? `Invalid string: must include "${_.includes}"`
                      : _.format === "regex"
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
                return _.options &&
                  Array.isArray(_.options) &&
                  _.options.length > 0
                  ? `Invalid discriminator value. Expected ${_.options.map((_) => `'${_}'`).join(" | ")}`
                  : "Invalid input";
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
        "use strict";
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
              unit: "\u062D\u0631\u0641",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            file: {
              unit: "\u0628\u0627\u064A\u062A",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            array: {
              unit: "\u0639\u0646\u0635\u0631",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
            set: {
              unit: "\u0639\u0646\u0635\u0631",
              verb: "\u0623\u0646 \u064A\u062D\u0648\u064A",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0645\u062F\u062E\u0644",
              email:
                "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
              url: "\u0631\u0627\u0628\u0637",
              emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
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
              datetime:
                "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              duration:
                "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
              ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
              ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
              cidrv4:
                "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
              cidrv6:
                "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
              base64:
                "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
              base64url:
                "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
              json_string:
                "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
              e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
              jwt: "JWT",
              template_literal: "\u0645\u062F\u062E\u0644",
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
                  ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${_.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${_}`
                  : `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${_}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${_._(_.values[0])}`
                  : `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${_.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${_} ${_.maximum.toString()} ${_.unit ?? "\u0639\u0646\u0635\u0631"}`
                  : `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${_.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${_} ${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${_.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${_} ${_.minimum.toString()} ${_.unit}`
                  : `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${_.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${_} ${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${_.includes}"`
                      : _.format === "regex"
                        ? `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${_.pattern}`
                        : `${_[_.format] ?? _.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
              }
              case "not_multiple_of":
                return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${_.divisor}`;
              case "unrecognized_keys":
                return `\u0645\u0639\u0631\u0641${_.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${_.keys.length > 1 ? "\u0629" : ""}: ${_._(_.keys, "\u060C ")}`;
              case "invalid_key":
                return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${_.origin}`;
              case "invalid_union":
                return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
              case "invalid_element":
                return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${_.origin}`;
              default:
                return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
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
              verb: "olmal\u0131d\u0131r",
            },
            file: {
              unit: "bayt",
              verb: "olmal\u0131d\u0131r",
            },
            array: {
              unit: "element",
              verb: "olmal\u0131d\u0131r",
            },
            set: {
              unit: "element",
              verb: "olmal\u0131d\u0131r",
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
                  ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${_.expected}, daxil olan ${_}`
                  : `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${_}, daxil olan ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${_._(_.values[0])}`
                  : `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${_.origin ?? "d\u0259y\u0259r"} ${_}${_.maximum.toString()} ${_.unit ?? "element"}`
                  : `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${_.origin ?? "d\u0259y\u0259r"} ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
                  : `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${_.origin} ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Yanl\u0131\u015F m\u0259tn: "${_.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`
                  : _.format === "ends_with"
                    ? `Yanl\u0131\u015F m\u0259tn: "${_.suffix}" il\u0259 bitm\u0259lidir`
                    : _.format === "includes"
                      ? `Yanl\u0131\u015F m\u0259tn: "${_.includes}" daxil olmal\u0131d\u0131r`
                      : _.format === "regex"
                        ? `Yanl\u0131\u015F m\u0259tn: ${_.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`
                        : `Yanl\u0131\u015F ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Yanl\u0131\u015F \u0259d\u0259d: ${_.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan a\xE7ar${_.keys.length > 1 ? "lar" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `${_.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
              case "invalid_union":
                return "Yanl\u0131\u015F d\u0259y\u0259r";
              case "invalid_element":
                return `${_.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
              default:
                return "Yanl\u0131\u015F d\u0259y\u0259r";
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
          return _ >= 11 && _ <= 19
            ? _
            : _ === 1
              ? _
              : _ >= 2 && _ <= 4
                ? _
                : _;
        }
        const _ = () => {
          const _ = {
            string: {
              unit: {
                one: "\u0441\u0456\u043C\u0432\u0430\u043B",
                few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
                many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            array: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            set: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
            file: {
              unit: {
                one: "\u0431\u0430\u0439\u0442",
                few: "\u0431\u0430\u0439\u0442\u044B",
                many: "\u0431\u0430\u0439\u0442\u0430\u045E",
              },
              verb: "\u043C\u0435\u0446\u044C",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0443\u0432\u043E\u0434",
              email: "email \u0430\u0434\u0440\u0430\u0441",
              url: "URL",
              emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
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
              datetime:
                "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0447\u0430\u0441",
              duration:
                "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
              ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
              cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
              base64:
                "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
              base64url:
                "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
              json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
              e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
              jwt: "JWT",
              template_literal: "\u0443\u0432\u043E\u0434",
            },
            _ = {
              nan: "NaN",
              number: "\u043B\u0456\u043A",
              array: "\u043C\u0430\u0441\u0456\u045E",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${_.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${_}`
                  : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${_}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${_._(_.values[0])}`
                  : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                if (_) {
                  const _ = Number(_.maximum),
                    _ = _(_, _.unit.one, _.unit.few, _.unit.many);
                  return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${_.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${_.verb} ${_}${_.maximum.toString()} ${_}`;
                }
                return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${_.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                if (_) {
                  const _ = Number(_.minimum),
                    _ = _(_, _.unit.one, _.unit.few, _.unit.many);
                  return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${_.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${_.verb} ${_}${_.minimum.toString()} ${_}`;
                }
                return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${_.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${_.includes}"`
                      : _.format === "regex"
                        ? `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_.pattern}`
                        : `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${_.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${_.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${_.origin}`;
              case "invalid_union":
                return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
              case "invalid_element":
                return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${_.origin}`;
              default:
                return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
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
              unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            file: {
              unit: "\u0431\u0430\u0439\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            array: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
            set: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
              verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0432\u0445\u043E\u0434",
              email:
                "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
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
              datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0432\u0440\u0435\u043C\u0435",
              duration:
                "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
              cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              base64:
                "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
              base64url:
                "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
              json_string: "JSON \u043D\u0438\u0437",
              e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
              jwt: "JWT",
              template_literal: "\u0432\u0445\u043E\u0434",
            },
            _ = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0438\u0432",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${_.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${_}`
                  : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${_}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${_._(_.values[0])}`
                  : `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${_.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${_}${_.maximum.toString()} ${_.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`
                  : `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${_.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${_.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${_}${_.minimum.toString()} ${_.unit}`
                  : `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${_.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                if (_.format === "starts_with")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${_.prefix}"`;
                if (_.format === "ends_with")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${_.suffix}"`;
                if (_.format === "includes")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${_.includes}"`;
                if (_.format === "regex")
                  return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${_.pattern}`;
                let _ =
                  "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
                return (
                  _.format === "emoji" &&
                    (_ =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  _.format === "datetime" &&
                    (_ =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  _.format === "date" &&
                    (_ =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
                  _.format === "time" &&
                    (_ =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),
                  _.format === "duration" &&
                    (_ =
                      "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),
                  `${_} ${_[_.format] ?? _.format}`
                );
              }
              case "not_multiple_of":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${_.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${_.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${_.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${_.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
              case "invalid_element":
                return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${_.origin}`;
              default:
                return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
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
              unit: "car\xE0cters",
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
              email: "adre\xE7a electr\xF2nica",
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
              ipv4: "adre\xE7a IPv4",
              ipv6: "adre\xE7a IPv6",
              cidrv4: "rang IPv4",
              cidrv6: "rang IPv6",
              base64: "cadena codificada en base64",
              base64url: "cadena codificada en base64url",
              json_string: "cadena JSON",
              e164: "n\xFAmero E.164",
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
                  ? `Tipus inv\xE0lid: s'esperava instanceof ${_.expected}, s'ha rebut ${_}`
                  : `Tipus inv\xE0lid: s'esperava ${_}, s'ha rebut ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Valor inv\xE0lid: s'esperava ${_._(_.values[0])}`
                  : `Opci\xF3 inv\xE0lida: s'esperava una de ${_._(_.values, " o ")}`;
              case "too_big": {
                const _ = _.inclusive ? "com a m\xE0xim" : "menys de",
                  _ = _(_.origin);
                return _
                  ? `Massa gran: s'esperava que ${_.origin ?? "el valor"} contingu\xE9s ${_} ${_.maximum.toString()} ${_.unit ?? "elements"}`
                  : `Massa gran: s'esperava que ${_.origin ?? "el valor"} fos ${_} ${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? "com a m\xEDnim" : "m\xE9s de",
                  _ = _(_.origin);
                return _
                  ? `Massa petit: s'esperava que ${_.origin} contingu\xE9s ${_} ${_.minimum.toString()} ${_.unit}`
                  : `Massa petit: s'esperava que ${_.origin} fos ${_} ${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Format inv\xE0lid: ha de comen\xE7ar amb "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Format inv\xE0lid: ha d'acabar amb "${_.suffix}"`
                    : _.format === "includes"
                      ? `Format inv\xE0lid: ha d'incloure "${_.includes}"`
                      : _.format === "regex"
                        ? `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${_.pattern}`
                        : `Format inv\xE0lid per a ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${_.divisor}`;
              case "unrecognized_keys":
                return `Clau${_.keys.length > 1 ? "s" : ""} no reconeguda${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Clau inv\xE0lida a ${_.origin}`;
              case "invalid_union":
                return "Entrada inv\xE0lida";
              case "invalid_element":
                return `Element inv\xE0lid a ${_.origin}`;
              default:
                return "Entrada inv\xE0lida";
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
              unit: "znak\u016F",
              verb: "m\xEDt",
            },
            file: {
              unit: "bajt\u016F",
              verb: "m\xEDt",
            },
            array: {
              unit: "prvk\u016F",
              verb: "m\xEDt",
            },
            set: {
              unit: "prvk\u016F",
              verb: "m\xEDt",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "regul\xE1rn\xED v\xFDraz",
              email: "e-mailov\xE1 adresa",
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
              datetime: "datum a \u010Das ve form\xE1tu ISO",
              date: "datum ve form\xE1tu ISO",
              time: "\u010Das ve form\xE1tu ISO",
              duration: "doba trv\xE1n\xED ISO",
              ipv4: "IPv4 adresa",
              ipv6: "IPv6 adresa",
              cidrv4: "rozsah IPv4",
              cidrv6: "rozsah IPv6",
              base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
              base64url:
                "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
              json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
              e164: "\u010D\xEDslo E.164",
              jwt: "JWT",
              template_literal: "vstup",
            },
            _ = {
              nan: "NaN",
              number: "\u010D\xEDslo",
              string: "\u0159et\u011Bzec",
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
                  ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${_.expected}, obdr\u017Eeno ${_}`
                  : `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${_}, obdr\u017Eeno ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${_._(_.values[0])}`
                  : `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${_.origin ?? "hodnota"} mus\xED m\xEDt ${_}${_.maximum.toString()} ${_.unit ?? "prvk\u016F"}`
                  : `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${_.origin ?? "hodnota"} mus\xED b\xFDt ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${_.origin ?? "hodnota"} mus\xED m\xEDt ${_}${_.minimum.toString()} ${_.unit ?? "prvk\u016F"}`
                  : `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${_.origin ?? "hodnota"} mus\xED b\xFDt ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${_.suffix}"`
                    : _.format === "includes"
                      ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${_.includes}"`
                      : _.format === "regex"
                        ? `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${_.pattern}`
                        : `Neplatn\xFD form\xE1t ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${_.divisor}`;
              case "unrecognized_keys":
                return `Nezn\xE1m\xE9 kl\xED\u010De: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Neplatn\xFD kl\xED\u010D v ${_.origin}`;
              case "invalid_union":
                return "Neplatn\xFD vstup";
              case "invalid_element":
                return `Neplatn\xE1 hodnota v ${_.origin}`;
              default:
                return "Neplatn\xFD vstup";
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
              datetime: "ISO dato- og klokkesl\xE6t",
              date: "ISO-dato",
              time: "ISO-klokkesl\xE6t",
              duration: "ISO-varighed",
              ipv4: "IPv4-omr\xE5de",
              ipv6: "IPv6-omr\xE5de",
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
              set: "s\xE6t",
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
                return _.values.length === 1
                  ? `Ugyldig v\xE6rdi: forventede ${_._(_.values[0])}`
                  : `Ugyldigt valg: forventede en af f\xF8lgende ${_._(_.values, "|")}`;
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
                return _.format === "starts_with"
                  ? `Ugyldig streng: skal starte med "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Ugyldig streng: skal ende med "${_.suffix}"`
                    : _.format === "includes"
                      ? `Ugyldig streng: skal indeholde "${_.includes}"`
                      : _.format === "regex"
                        ? `Ugyldig streng: skal matche m\xF8nsteret ${_.pattern}`
                        : `Ugyldig ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Ugyldigt tal: skal v\xE6re deleligt med ${_.divisor}`;
              case "unrecognized_keys":
                return `${_.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Ugyldig n\xF8gle i ${_.origin}`;
              case "invalid_union":
                return "Ugyldigt input: matcher ingen af de tilladte typer";
              case "invalid_element":
                return `Ugyldig v\xE6rdi i ${_.origin}`;
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
                  ? `Ung\xFCltige Eingabe: erwartet instanceof ${_.expected}, erhalten ${_}`
                  : `Ung\xFCltige Eingabe: erwartet ${_}, erhalten ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Ung\xFCltige Eingabe: erwartet ${_._(_.values[0])}`
                  : `Ung\xFCltige Option: erwartet eine von ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Zu gro\xDF: erwartet, dass ${_.origin ?? "Wert"} ${_}${_.maximum.toString()} ${_.unit ?? "Elemente"} hat`
                  : `Zu gro\xDF: erwartet, dass ${_.origin ?? "Wert"} ${_}${_.maximum.toString()} ist`;
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
                return _.format === "starts_with"
                  ? `Ung\xFCltiger String: muss mit "${_.prefix}" beginnen`
                  : _.format === "ends_with"
                    ? `Ung\xFCltiger String: muss mit "${_.suffix}" enden`
                    : _.format === "includes"
                      ? `Ung\xFCltiger String: muss "${_.includes}" enthalten`
                      : _.format === "regex"
                        ? `Ung\xFCltiger String: muss dem Muster ${_.pattern} entsprechen`
                        : `Ung\xFCltig: ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Ung\xFCltige Zahl: muss ein Vielfaches von ${_.divisor} sein`;
              case "unrecognized_keys":
                return `${_.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Ung\xFCltiger Schl\xFCssel in ${_.origin}`;
              case "invalid_union":
                return "Ung\xFCltige Eingabe";
              case "invalid_element":
                return `Ung\xFCltiger Wert in ${_.origin}`;
              default:
                return "Ung\xFCltige Eingabe";
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
              unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            file: {
              unit: "bytes",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            array: {
              unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            set: {
              unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
            map: {
              unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2",
              verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
              email:
                "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
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
              datetime:
                "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
              date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
              time: "ISO \u03CE\u03C1\u03B1",
              duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
              ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
              ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
              mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
              cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
              cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
              base64:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
              base64url:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
              json_string:
                "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
              e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
              jwt: "JWT",
              template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
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
                return typeof _.expected == "string" &&
                  /^[A-Z]/.test(_.expected)
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${_.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${_}`
                  : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${_}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${_._(_.values[0])}`
                  : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${_.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${_}${_.maximum.toString()} ${_.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`
                  : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${_.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${_.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${_}${_.minimum.toString()} ${_.unit}`
                  : `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${_.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${_.includes}"`
                      : _.format === "regex"
                        ? `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${_.pattern}`
                        : `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${_.divisor}`;
              case "unrecognized_keys":
                return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${_.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${_.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${_.origin}`;
              case "invalid_union":
                return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
              case "invalid_element":
                return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${_.origin}`;
              default:
                return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
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
              emoji: "emo\u011Dio",
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
              duration: "ISO-da\u016Dro",
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
                  ? `Nevalida enigo: atendi\u011Dis instanceof ${_.expected}, ricevi\u011Dis ${_}`
                  : `Nevalida enigo: atendi\u011Dis ${_}, ricevi\u011Dis ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Nevalida enigo: atendi\u011Dis ${_._(_.values[0])}`
                  : `Nevalida opcio: atendi\u011Dis unu el ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Tro granda: atendi\u011Dis ke ${_.origin ?? "valoro"} havu ${_}${_.maximum.toString()} ${_.unit ?? "elementojn"}`
                  : `Tro granda: atendi\u011Dis ke ${_.origin ?? "valoro"} havu ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Tro malgranda: atendi\u011Dis ke ${_.origin} havu ${_}${_.minimum.toString()} ${_.unit}`
                  : `Tro malgranda: atendi\u011Dis ke ${_.origin} estu ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Nevalida karaktraro: devas komenci\u011Di per "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Nevalida karaktraro: devas fini\u011Di per "${_.suffix}"`
                    : _.format === "includes"
                      ? `Nevalida karaktraro: devas inkluzivi "${_.includes}"`
                      : _.format === "regex"
                        ? `Nevalida karaktraro: devas kongrui kun la modelo ${_.pattern}`
                        : `Nevalida ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Nevalida nombro: devas esti oblo de ${_.divisor}`;
              case "unrecognized_keys":
                return `Nekonata${_.keys.length > 1 ? "j" : ""} \u015Dlosilo${_.keys.length > 1 ? "j" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Nevalida \u015Dlosilo en ${_.origin}`;
              case "invalid_union":
                return "Nevalida enigo";
              case "invalid_element":
                return `Nevalida valoro en ${_.origin}`;
              default:
                return "Nevalida enigo";
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
              email: "direcci\xF3n de correo electr\xF3nico",
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
              duration: "duraci\xF3n ISO",
              ipv4: "direcci\xF3n IPv4",
              ipv6: "direcci\xF3n IPv6",
              cidrv4: "rango IPv4",
              cidrv6: "rango IPv6",
              base64: "cadena codificada en base64",
              base64url: "URL codificada en base64",
              json_string: "cadena JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            _ = {
              nan: "NaN",
              string: "texto",
              number: "n\xFAmero",
              boolean: "booleano",
              array: "arreglo",
              object: "objeto",
              set: "conjunto",
              file: "archivo",
              date: "fecha",
              bigint: "n\xFAmero grande",
              symbol: "s\xEDmbolo",
              undefined: "indefinido",
              null: "nulo",
              function: "funci\xF3n",
              map: "mapa",
              record: "registro",
              tuple: "tupla",
              enum: "enumeraci\xF3n",
              union: "uni\xF3n",
              literal: "literal",
              promise: "promesa",
              void: "vac\xEDo",
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
                  ? `Entrada inv\xE1lida: se esperaba instanceof ${_.expected}, recibido ${_}`
                  : `Entrada inv\xE1lida: se esperaba ${_}, recibido ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Entrada inv\xE1lida: se esperaba ${_._(_.values[0])}`
                  : `Opci\xF3n inv\xE1lida: se esperaba una de ${_._(_.values, "|")}`;
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
                  ? `Demasiado peque\xF1o: se esperaba que ${_} tuviera ${_}${_.minimum.toString()} ${_.unit}`
                  : `Demasiado peque\xF1o: se esperaba que ${_} fuera ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Cadena inv\xE1lida: debe comenzar con "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Cadena inv\xE1lida: debe terminar en "${_.suffix}"`
                    : _.format === "includes"
                      ? `Cadena inv\xE1lida: debe incluir "${_.includes}"`
                      : _.format === "regex"
                        ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${_.pattern}`
                        : `Inv\xE1lido ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${_.divisor}`;
              case "unrecognized_keys":
                return `Llave${_.keys.length > 1 ? "s" : ""} desconocida${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Llave inv\xE1lida en ${_[_.origin] ?? _.origin}`;
              case "invalid_union":
                return "Entrada inv\xE1lida";
              case "invalid_element":
                return `Valor inv\xE1lido en ${_[_.origin] ?? _.origin}`;
              default:
                return "Entrada inv\xE1lida";
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
              unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            file: {
              unit: "\u0628\u0627\u06CC\u062A",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            array: {
              unit: "\u0622\u06CC\u062A\u0645",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
            set: {
              unit: "\u0622\u06CC\u062A\u0645",
              verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0648\u0631\u0648\u062F\u06CC",
              email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
              url: "URL",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
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
              datetime:
                "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
              time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              duration:
                "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
              ipv4: "IPv4 \u0622\u062F\u0631\u0633",
              ipv6: "IPv6 \u0622\u062F\u0631\u0633",
              cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
              cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
              base64: "base64-encoded \u0631\u0634\u062A\u0647",
              base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
              json_string: "JSON \u0631\u0634\u062A\u0647",
              e164: "E.164 \u0639\u062F\u062F",
              jwt: "JWT",
              template_literal: "\u0648\u0631\u0648\u062F\u06CC",
            },
            _ = {
              nan: "NaN",
              number: "\u0639\u062F\u062F",
              array: "\u0622\u0631\u0627\u06CC\u0647",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${_.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${_} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`
                  : `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${_} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${_} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${_._(_.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`
                  : `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${_._(_.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${_.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${_}${_.maximum.toString()} ${_.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`
                  : `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${_.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${_}${_.maximum.toString()} \u0628\u0627\u0634\u062F`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${_.origin} \u0628\u0627\u06CC\u062F ${_}${_.minimum.toString()} ${_.unit} \u0628\u0627\u0634\u062F`
                  : `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${_.origin} \u0628\u0627\u06CC\u062F ${_}${_.minimum.toString()} \u0628\u0627\u0634\u062F`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`
                  : _.format === "ends_with"
                    ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`
                    : _.format === "includes"
                      ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${_.includes}" \u0628\u0627\u0634\u062F`
                      : _.format === "regex"
                        ? `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${_.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`
                        : `${_[_.format] ?? _.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
              }
              case "not_multiple_of":
                return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${_.divisor} \u0628\u0627\u0634\u062F`;
              case "unrecognized_keys":
                return `\u06A9\u0644\u06CC\u062F${_.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${_.origin}`;
              case "invalid_union":
                return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
              case "invalid_element":
                return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${_.origin}`;
              default:
                return "\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631";
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
              unit: "merkki\xE4",
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
              subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "s\xE4\xE4nn\xF6llinen lauseke",
              email: "s\xE4hk\xF6postiosoite",
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
              date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
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
                return _.values.length === 1
                  ? `Virheellinen sy\xF6te: t\xE4ytyy olla ${_._(_.values[0])}`
                  : `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Liian suuri: ${_.subject} t\xE4ytyy olla ${_}${_.maximum.toString()} ${_.unit}`.trim()
                  : `Liian suuri: arvon t\xE4ytyy olla ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Liian pieni: ${_.subject} t\xE4ytyy olla ${_}${_.minimum.toString()} ${_.unit}`.trim()
                  : `Liian pieni: arvon t\xE4ytyy olla ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Virheellinen sy\xF6te: t\xE4ytyy loppua "${_.suffix}"`
                    : _.format === "includes"
                      ? `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${_.includes}"`
                      : _.format === "regex"
                        ? `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${_.pattern}`
                        : `Virheellinen ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Virheellinen luku: t\xE4ytyy olla luvun ${_.divisor} monikerta`;
              case "unrecognized_keys":
                return `${_.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return "Virheellinen avain tietueessa";
              case "invalid_union":
                return "Virheellinen unioni";
              case "invalid_element":
                return "Virheellinen arvo joukossa";
              default:
                return "Virheellinen sy\xF6te";
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
              unit: "caract\xE8res",
              verb: "avoir",
            },
            file: {
              unit: "octets",
              verb: "avoir",
            },
            array: {
              unit: "\xE9l\xE9ments",
              verb: "avoir",
            },
            set: {
              unit: "\xE9l\xE9ments",
              verb: "avoir",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "entr\xE9e",
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
              duration: "dur\xE9e ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "cha\xEEne encod\xE9e en base64",
              base64url: "cha\xEEne encod\xE9e en base64url",
              json_string: "cha\xEEne JSON",
              e164: "num\xE9ro E.164",
              jwt: "JWT",
              template_literal: "entr\xE9e",
            },
            _ = {
              string: "cha\xEEne",
              number: "nombre",
              int: "entier",
              boolean: "bool\xE9en",
              bigint: "grand entier",
              symbol: "symbole",
              undefined: "ind\xE9fini",
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
                  ? `Entr\xE9e invalide : instanceof ${_.expected} attendu, ${_} re\xE7u`
                  : `Entr\xE9e invalide : ${_} attendu, ${_} re\xE7u`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Entr\xE9e invalide : ${_._(_.values[0])} attendu`
                  : `Option invalide : une valeur parmi ${_._(_.values, "|")} attendue`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Trop grand : ${_[_.origin] ?? "valeur"} doit ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "\xE9l\xE9ment(s)"}`
                  : `Trop grand : ${_[_.origin] ?? "valeur"} doit \xEAtre ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Trop petit : ${_[_.origin] ?? "valeur"} doit ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                  : `Trop petit : ${_[_.origin] ?? "valeur"} doit \xEAtre ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Cha\xEEne invalide : doit commencer par "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Cha\xEEne invalide : doit se terminer par "${_.suffix}"`
                    : _.format === "includes"
                      ? `Cha\xEEne invalide : doit inclure "${_.includes}"`
                      : _.format === "regex"
                        ? `Cha\xEEne invalide : doit correspondre au mod\xE8le ${_.pattern}`
                        : `${_[_.format] ?? _.format} invalide`;
              }
              case "not_multiple_of":
                return `Nombre invalide : doit \xEAtre un multiple de ${_.divisor}`;
              case "unrecognized_keys":
                return `Cl\xE9${_.keys.length > 1 ? "s" : ""} non reconnue${_.keys.length > 1 ? "s" : ""} : ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Cl\xE9 invalide dans ${_.origin}`;
              case "invalid_union":
                return "Entr\xE9e invalide";
              case "invalid_element":
                return `Valeur invalide dans ${_.origin}`;
              default:
                return "Entr\xE9e invalide";
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
              unit: "caract\xE8res",
              verb: "avoir",
            },
            file: {
              unit: "octets",
              verb: "avoir",
            },
            array: {
              unit: "\xE9l\xE9ments",
              verb: "avoir",
            },
            set: {
              unit: "\xE9l\xE9ments",
              verb: "avoir",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "entr\xE9e",
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
              duration: "dur\xE9e ISO",
              ipv4: "adresse IPv4",
              ipv6: "adresse IPv6",
              cidrv4: "plage IPv4",
              cidrv6: "plage IPv6",
              base64: "cha\xEEne encod\xE9e en base64",
              base64url: "cha\xEEne encod\xE9e en base64url",
              json_string: "cha\xEEne JSON",
              e164: "num\xE9ro E.164",
              jwt: "JWT",
              template_literal: "entr\xE9e",
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
                  ? `Entr\xE9e invalide : attendu instanceof ${_.expected}, re\xE7u ${_}`
                  : `Entr\xE9e invalide : attendu ${_}, re\xE7u ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Entr\xE9e invalide : attendu ${_._(_.values[0])}`
                  : `Option invalide : attendu l'une des valeurs suivantes ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "\u2264" : "<",
                  _ = _(_.origin);
                return _
                  ? `Trop grand : attendu que ${_.origin ?? "la valeur"} ait ${_}${_.maximum.toString()} ${_.unit}`
                  : `Trop grand : attendu que ${_.origin ?? "la valeur"} soit ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? "\u2265" : ">",
                  _ = _(_.origin);
                return _
                  ? `Trop petit : attendu que ${_.origin} ait ${_}${_.minimum.toString()} ${_.unit}`
                  : `Trop petit : attendu que ${_.origin} soit ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Cha\xEEne invalide : doit commencer par "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Cha\xEEne invalide : doit se terminer par "${_.suffix}"`
                    : _.format === "includes"
                      ? `Cha\xEEne invalide : doit inclure "${_.includes}"`
                      : _.format === "regex"
                        ? `Cha\xEEne invalide : doit correspondre au motif ${_.pattern}`
                        : `${_[_.format] ?? _.format} invalide`;
              }
              case "not_multiple_of":
                return `Nombre invalide : doit \xEAtre un multiple de ${_.divisor}`;
              case "unrecognized_keys":
                return `Cl\xE9${_.keys.length > 1 ? "s" : ""} non reconnue${_.keys.length > 1 ? "s" : ""} : ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Cl\xE9 invalide dans ${_.origin}`;
              case "invalid_union":
                return "Entr\xE9e invalide";
              case "invalid_element":
                return `Valeur invalide dans ${_.origin}`;
              default:
                return "Entr\xE9e invalide";
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
                label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA",
                gender: "f",
              },
              number: {
                label: "\u05DE\u05E1\u05E4\u05E8",
                gender: "m",
              },
              boolean: {
                label:
                  "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9",
                gender: "m",
              },
              bigint: {
                label: "BigInt",
                gender: "m",
              },
              date: {
                label: "\u05EA\u05D0\u05E8\u05D9\u05DA",
                gender: "m",
              },
              array: {
                label: "\u05DE\u05E2\u05E8\u05DA",
                gender: "m",
              },
              object: {
                label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8",
                gender: "m",
              },
              null: {
                label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)",
                gender: "m",
              },
              undefined: {
                label:
                  "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)",
                gender: "m",
              },
              symbol: {
                label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)",
                gender: "m",
              },
              function: {
                label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4",
                gender: "f",
              },
              map: {
                label: "\u05DE\u05E4\u05D4 (Map)",
                gender: "f",
              },
              set: {
                label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)",
                gender: "f",
              },
              file: {
                label: "\u05E7\u05D5\u05D1\u05E5",
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
                label:
                  "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2",
                gender: "m",
              },
              value: {
                label: "\u05E2\u05E8\u05DA",
                gender: "m",
              },
            },
            _ = {
              string: {
                unit: "\u05EA\u05D5\u05D5\u05D9\u05DD",
                shortLabel: "\u05E7\u05E6\u05E8",
                longLabel: "\u05D0\u05E8\u05D5\u05DA",
              },
              file: {
                unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              array: {
                unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              set: {
                unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
              number: {
                unit: "",
                shortLabel: "\u05E7\u05D8\u05DF",
                longLabel: "\u05D2\u05D3\u05D5\u05DC",
              },
            },
            _ = (_) => (_ ? _[_] : void 0),
            _ = (_) => {
              const _ = _(_);
              return _ ? _.label : (_ ?? _.unknown.label);
            },
            _ = (_) => `\u05D4${_(_)}`,
            _ = (_) =>
              (_(_)?.gender ?? "m") === "f"
                ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA"
                : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA",
            _ = (_) => (_ ? (_[_] ?? null) : null),
            _ = {
              regex: {
                label: "\u05E7\u05DC\u05D8",
                gender: "m",
              },
              email: {
                label:
                  "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC",
                gender: "f",
              },
              url: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA",
                gender: "f",
              },
              emoji: {
                label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9",
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
                label:
                  "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO",
                gender: "m",
              },
              date: {
                label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO",
                gender: "m",
              },
              time: {
                label: "\u05D6\u05DE\u05DF ISO",
                gender: "m",
              },
              duration: {
                label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO",
                gender: "m",
              },
              ipv4: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4",
                gender: "f",
              },
              ipv6: {
                label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6",
                gender: "f",
              },
              cidrv4: {
                label: "\u05D8\u05D5\u05D5\u05D7 IPv4",
                gender: "m",
              },
              cidrv6: {
                label: "\u05D8\u05D5\u05D5\u05D7 IPv6",
                gender: "m",
              },
              base64: {
                label:
                  "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64",
                gender: "f",
              },
              base64url: {
                label:
                  "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA",
                gender: "f",
              },
              json_string: {
                label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON",
                gender: "f",
              },
              e164: {
                label: "\u05DE\u05E1\u05E4\u05E8 E.164",
                gender: "m",
              },
              jwt: {
                label: "JWT",
                gender: "m",
              },
              ends_with: {
                label: "\u05E7\u05DC\u05D8",
                gender: "m",
              },
              includes: {
                label: "\u05E7\u05DC\u05D8",
                gender: "m",
              },
              lowercase: {
                label: "\u05E7\u05DC\u05D8",
                gender: "m",
              },
              starts_with: {
                label: "\u05E7\u05DC\u05D8",
                gender: "m",
              },
              uppercase: {
                label: "\u05E7\u05DC\u05D8",
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
                  ? `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${_.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${_}`
                  : `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${_}, \u05D4\u05EA\u05E7\u05D1\u05DC ${_}`;
              }
              case "invalid_value": {
                if (_.values.length === 1)
                  return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${_._(_.values[0])}`;
                const _ = _.values.map((_) => _._(_));
                if (_.values.length === 2)
                  return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${_[0]} \u05D0\u05D5 ${_[1]}`;
                const _ = _[_.length - 1];
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${_.slice(0, -1).join(", ")} \u05D0\u05D5 ${_}`;
              }
              case "too_big": {
                const _ = _(_.origin),
                  _ = _(_.origin ?? "value");
                if (_.origin === "string")
                  return `${_?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${_} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${_.maximum.toString()} ${_?.unit ?? ""} ${_.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
                if (_.origin === "number") {
                  const _ = _.inclusive
                    ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${_.maximum}`
                    : `\u05E7\u05D8\u05DF \u05DE-${_.maximum}`;
                  return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${_} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${_}`;
                }
                if (_.origin === "array" || _.origin === "set") {
                  const _ =
                      _.origin === "set"
                        ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
                        : "\u05E6\u05E8\u05D9\u05DA",
                    _ = _.inclusive
                      ? `${_.maximum} ${_?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA`
                      : `\u05E4\u05D7\u05D5\u05EA \u05DE-${_.maximum} ${_?.unit ?? ""}`;
                  return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${_} ${_} \u05DC\u05D4\u05DB\u05D9\u05DC ${_}`.trim();
                }
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin ?? "value");
                return _?.unit
                  ? `${_.longLabel} \u05DE\u05D3\u05D9: ${_} ${_} ${_}${_.maximum.toString()} ${_.unit}`
                  : `${_?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${_} ${_} ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _(_.origin),
                  _ = _(_.origin ?? "value");
                if (_.origin === "string")
                  return `${_?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${_} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${_.minimum.toString()} ${_?.unit ?? ""} ${_.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
                if (_.origin === "number") {
                  const _ = _.inclusive
                    ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${_.minimum}`
                    : `\u05D2\u05D3\u05D5\u05DC \u05DE-${_.minimum}`;
                  return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${_} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${_}`;
                }
                if (_.origin === "array" || _.origin === "set") {
                  const _ =
                    _.origin === "set"
                      ? "\u05E6\u05E8\u05D9\u05DB\u05D4"
                      : "\u05E6\u05E8\u05D9\u05DA";
                  if (_.minimum === 1 && _.inclusive) {
                    const _ =
                      (_.origin === "set",
                      "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3");
                    return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${_} ${_} \u05DC\u05D4\u05DB\u05D9\u05DC ${_}`;
                  }
                  const _ = _.inclusive
                    ? `${_.minimum} ${_?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8`
                    : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${_.minimum} ${_?.unit ?? ""}`;
                  return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${_} ${_} \u05DC\u05D4\u05DB\u05D9\u05DC ${_}`.trim();
                }
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin ?? "value");
                return _?.unit
                  ? `${_.shortLabel} \u05DE\u05D3\u05D9: ${_} ${_} ${_}${_.minimum.toString()} ${_.unit}`
                  : `${_?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${_} ${_} ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                if (_.format === "starts_with")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${_.prefix}"`;
                if (_.format === "ends_with")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${_.suffix}"`;
                if (_.format === "includes")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${_.includes}"`;
                if (_.format === "regex")
                  return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${_.pattern}`;
                const _ = _[_.format],
                  _ = _?.label ?? _.format,
                  _ =
                    (_?.gender ?? "m") === "f"
                      ? "\u05EA\u05E7\u05D9\u05E0\u05D4"
                      : "\u05EA\u05E7\u05D9\u05DF";
                return `${_} \u05DC\u05D0 ${_}`;
              }
              case "not_multiple_of":
                return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${_.divisor}`;
              case "unrecognized_keys":
                return `\u05DE\u05E4\u05EA\u05D7${_.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${_.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return "\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8";
              case "invalid_union":
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
              case "invalid_element":
                return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${_(_.origin ?? "array")}`;
              default:
                return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
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
                  ? `Neispravan unos: o\u010Dekuje se instanceof ${_.expected}, a primljeno je ${_}`
                  : `Neispravan unos: o\u010Dekuje se ${_}, a primljeno je ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Neispravna vrijednost: o\u010Dekivano ${_._(_.values[0])}`
                  : `Neispravna opcija: o\u010Dekivano jedno od ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin),
                  _ = _[_.origin] ?? _.origin;
                return _
                  ? `Preveliko: o\u010Dekivano da ${_ ?? "vrijednost"} ima ${_}${_.maximum.toString()} ${_.unit ?? "elemenata"}`
                  : `Preveliko: o\u010Dekivano da ${_ ?? "vrijednost"} bude ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin),
                  _ = _[_.origin] ?? _.origin;
                return _
                  ? `Premalo: o\u010Dekivano da ${_} ima ${_}${_.minimum.toString()} ${_.unit}`
                  : `Premalo: o\u010Dekivano da ${_} bude ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Neispravan tekst: mora zapo\u010Dinjati s "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Neispravan tekst: mora zavr\u0161avati s "${_.suffix}"`
                    : _.format === "includes"
                      ? `Neispravan tekst: mora sadr\u017Eavati "${_.includes}"`
                      : _.format === "regex"
                        ? `Neispravan tekst: mora odgovarati uzorku ${_.pattern}`
                        : `Neispravna ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Neispravan broj: mora biti vi\u0161ekratnik od ${_.divisor}`;
              case "unrecognized_keys":
                return `Neprepoznat${_.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Neispravan klju\u010D u ${_[_.origin] ?? _.origin}`;
              case "invalid_union":
                return "Neispravan unos";
              case "invalid_element":
                return `Neispravna vrijednost u ${_[_.origin] ?? _.origin}`;
              default:
                return "Neispravan unos";
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
              email: "email c\xEDm",
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
              datetime: "ISO id\u0151b\xE9lyeg",
              date: "ISO d\xE1tum",
              time: "ISO id\u0151",
              duration: "ISO id\u0151intervallum",
              ipv4: "IPv4 c\xEDm",
              ipv6: "IPv6 c\xEDm",
              cidrv4: "IPv4 tartom\xE1ny",
              cidrv6: "IPv6 tartom\xE1ny",
              base64: "base64-k\xF3dolt string",
              base64url: "base64url-k\xF3dolt string",
              json_string: "JSON string",
              e164: "E.164 sz\xE1m",
              jwt: "JWT",
              template_literal: "bemenet",
            },
            _ = {
              nan: "NaN",
              number: "sz\xE1m",
              array: "t\xF6mb",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${_.expected}, a kapott \xE9rt\xE9k ${_}`
                  : `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${_}, a kapott \xE9rt\xE9k ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${_._(_.values[0])}`
                  : `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `T\xFAl nagy: ${_.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${_}${_.maximum.toString()} ${_.unit ?? "elem"}`
                  : `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${_.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${_.origin} m\xE9rete t\xFAl kicsi ${_}${_.minimum.toString()} ${_.unit}`
                  : `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${_.origin} t\xFAl kicsi ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\xC9rv\xE9nytelen string: "${_.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`
                  : _.format === "ends_with"
                    ? `\xC9rv\xE9nytelen string: "${_.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`
                    : _.format === "includes"
                      ? `\xC9rv\xE9nytelen string: "${_.includes}" \xE9rt\xE9ket kell tartalmaznia`
                      : _.format === "regex"
                        ? `\xC9rv\xE9nytelen string: ${_.pattern} mint\xE1nak kell megfelelnie`
                        : `\xC9rv\xE9nytelen ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\xC9rv\xE9nytelen sz\xE1m: ${_.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
              case "unrecognized_keys":
                return `Ismeretlen kulcs${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\xC9rv\xE9nytelen kulcs ${_.origin}`;
              case "invalid_union":
                return "\xC9rv\xE9nytelen bemenet";
              case "invalid_element":
                return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${_.origin}`;
              default:
                return "\xC9rv\xE9nytelen bemenet";
            }
          };
        };
        function _() {
          return {
            localeError: _(),
          };
        }
        function _(_, _, _) {
          return Math.abs(_) === 1 ? _ : _;
        }
        function _(_) {
          if (!_) return "";
          const _ = [
              "\u0561",
              "\u0565",
              "\u0568",
              "\u056B",
              "\u0578",
              "\u0578\u0582",
              "\u0585",
            ],
            _ = _[_.length - 1];
          return _ + (_.includes(_) ? "\u0576" : "\u0568");
        }
        const _ = () => {
          const _ = {
            string: {
              unit: {
                one: "\u0576\u0577\u0561\u0576",
                many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            file: {
              unit: {
                one: "\u0562\u0561\u0575\u0569",
                many: "\u0562\u0561\u0575\u0569\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            array: {
              unit: {
                one: "\u057F\u0561\u0580\u0580",
                many: "\u057F\u0561\u0580\u0580\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
            set: {
              unit: {
                one: "\u057F\u0561\u0580\u0580",
                many: "\u057F\u0561\u0580\u0580\u0565\u0580",
              },
              verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0574\u0578\u0582\u057F\u0584",
              email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
              url: "URL",
              emoji: "\u0567\u0574\u0578\u057B\u056B",
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
              datetime:
                "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
              date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
              time: "ISO \u056A\u0561\u0574",
              duration:
                "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
              ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
              ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
              cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
              cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
              base64:
                "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
              base64url:
                "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
              json_string: "JSON \u057F\u0578\u0572",
              e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
              jwt: "JWT",
              template_literal: "\u0574\u0578\u0582\u057F\u0584",
            },
            _ = {
              nan: "NaN",
              number: "\u0569\u056B\u057E",
              array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${_.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${_}`
                  : `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${_}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${_._(_.values[1])}`
                  : `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                if (_) {
                  const _ = Number(_.maximum),
                    _ = _(_, _.unit.one, _.unit.many);
                  return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${_(_.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${_}${_.maximum.toString()} ${_}`;
                }
                return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${_(_.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                if (_) {
                  const _ = Number(_.minimum),
                    _ = _(_, _.unit.one, _.unit.many);
                  return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${_(_.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${_}${_.minimum.toString()} ${_}`;
                }
                return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${_(_.origin)} \u056C\u056B\u0576\u056B ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${_.prefix}"-\u0578\u057E`
                  : _.format === "ends_with"
                    ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${_.suffix}"-\u0578\u057E`
                    : _.format === "includes"
                      ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${_.includes}"`
                      : _.format === "regex"
                        ? `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${_.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`
                        : `\u054D\u056D\u0561\u056C ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${_.divisor}-\u056B`;
              case "unrecognized_keys":
                return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${_.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${_(_.origin)}-\u0578\u0582\u0574`;
              case "invalid_union":
                return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
              case "invalid_element":
                return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${_(_.origin)}-\u0578\u0582\u0574`;
              default:
                return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
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
                return _.values.length === 1
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
                return _.format === "starts_with"
                  ? `String tidak valid: harus dimulai dengan "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `String tidak valid: harus berakhir dengan "${_.suffix}"`
                    : _.format === "includes"
                      ? `String tidak valid: harus menyertakan "${_.includes}"`
                      : _.format === "regex"
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
                return "Input tidak valid";
              case "invalid_element":
                return `Nilai tidak valid di ${_.origin}`;
              default:
                return "Input tidak valid";
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
              verb: "a\xF0 hafa",
            },
            file: {
              unit: "b\xE6ti",
              verb: "a\xF0 hafa",
            },
            array: {
              unit: "hluti",
              verb: "a\xF0 hafa",
            },
            set: {
              unit: "hluti",
              verb: "a\xF0 hafa",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "gildi",
              email: "netfang",
              url: "vefsl\xF3\xF0",
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
              datetime: "ISO dagsetning og t\xEDmi",
              date: "ISO dagsetning",
              time: "ISO t\xEDmi",
              duration: "ISO t\xEDmalengd",
              ipv4: "IPv4 address",
              ipv6: "IPv6 address",
              cidrv4: "IPv4 range",
              cidrv6: "IPv6 range",
              base64: "base64-encoded strengur",
              base64url: "base64url-encoded strengur",
              json_string: "JSON strengur",
              e164: "E.164 t\xF6lugildi",
              jwt: "JWT",
              template_literal: "gildi",
            },
            _ = {
              nan: "NaN",
              number: "n\xFAmer",
              array: "fylki",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `Rangt gildi: \xDE\xFA sl\xF3st inn ${_} \xFEar sem \xE1 a\xF0 vera instanceof ${_.expected}`
                  : `Rangt gildi: \xDE\xFA sl\xF3st inn ${_} \xFEar sem \xE1 a\xF0 vera ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Rangt gildi: gert r\xE1\xF0 fyrir ${_._(_.values[0])}`
                  : `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${_.origin ?? "gildi"} hafi ${_}${_.maximum.toString()} ${_.unit ?? "hluti"}`
                  : `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${_.origin ?? "gildi"} s\xE9 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${_.origin} hafi ${_}${_.minimum.toString()} ${_.unit}`
                  : `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${_.origin} s\xE9 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${_.includes}"`
                      : _.format === "regex"
                        ? `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${_.pattern}`
                        : `Rangt ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${_.divisor}`;
              case "unrecognized_keys":
                return `\xD3\xFEekkt ${_.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Rangur lykill \xED ${_.origin}`;
              case "invalid_union":
                return "Rangt gildi";
              case "invalid_element":
                return `Rangt gildi \xED ${_.origin}`;
              default:
                return "Rangt gildi";
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
                return _.values.length === 1
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
                return _.format === "starts_with"
                  ? `Stringa non valida: deve iniziare con "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Stringa non valida: deve terminare con "${_.suffix}"`
                    : _.format === "includes"
                      ? `Stringa non valida: deve includere "${_.includes}"`
                      : _.format === "regex"
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
                return "Input non valido";
              case "invalid_element":
                return `Valore non valido in ${_.origin}`;
              default:
                return "Input non valido";
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
              unit: "\u6587\u5B57",
              verb: "\u3067\u3042\u308B",
            },
            file: {
              unit: "\u30D0\u30A4\u30C8",
              verb: "\u3067\u3042\u308B",
            },
            array: {
              unit: "\u8981\u7D20",
              verb: "\u3067\u3042\u308B",
            },
            set: {
              unit: "\u8981\u7D20",
              verb: "\u3067\u3042\u308B",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u5165\u529B\u5024",
              email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
              url: "URL",
              emoji: "\u7D75\u6587\u5B57",
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
              datetime: "ISO\u65E5\u6642",
              date: "ISO\u65E5\u4ED8",
              time: "ISO\u6642\u523B",
              duration: "ISO\u671F\u9593",
              ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
              ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
              cidrv4: "IPv4\u7BC4\u56F2",
              cidrv6: "IPv6\u7BC4\u56F2",
              base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
              base64url:
                "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
              json_string: "JSON\u6587\u5B57\u5217",
              e164: "E.164\u756A\u53F7",
              jwt: "JWT",
              template_literal: "\u5165\u529B\u5024",
            },
            _ = {
              nan: "NaN",
              number: "\u6570\u5024",
              array: "\u914D\u5217",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u7121\u52B9\u306A\u5165\u529B: instanceof ${_.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${_}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`
                  : `\u7121\u52B9\u306A\u5165\u529B: ${_}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${_}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u7121\u52B9\u306A\u5165\u529B: ${_._(_.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`
                  : `\u7121\u52B9\u306A\u9078\u629E: ${_._(_.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              case "too_big": {
                const _ = _.inclusive
                    ? "\u4EE5\u4E0B\u3067\u3042\u308B"
                    : "\u3088\u308A\u5C0F\u3055\u3044",
                  _ = _(_.origin);
                return _
                  ? `\u5927\u304D\u3059\u304E\u308B\u5024: ${_.origin ?? "\u5024"}\u306F${_.maximum.toString()}${_.unit ?? "\u8981\u7D20"}${_}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : `\u5927\u304D\u3059\u304E\u308B\u5024: ${_.origin ?? "\u5024"}\u306F${_.maximum.toString()}${_}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              }
              case "too_small": {
                const _ = _.inclusive
                    ? "\u4EE5\u4E0A\u3067\u3042\u308B"
                    : "\u3088\u308A\u5927\u304D\u3044",
                  _ = _(_.origin);
                return _
                  ? `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${_.origin}\u306F${_.minimum.toString()}${_.unit}${_}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${_.origin}\u306F${_.minimum.toString()}${_}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                  : _.format === "ends_with"
                    ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                    : _.format === "includes"
                      ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                      : _.format === "regex"
                        ? `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${_.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`
                        : `\u7121\u52B9\u306A${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u7121\u52B9\u306A\u6570\u5024: ${_.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
              case "unrecognized_keys":
                return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${_.keys.length > 1 ? "\u7FA4" : ""}: ${_._(_.keys, "\u3001")}`;
              case "invalid_key":
                return `${_.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
              case "invalid_union":
                return "\u7121\u52B9\u306A\u5165\u529B";
              case "invalid_element":
                return `${_.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
              default:
                return "\u7121\u52B9\u306A\u5165\u529B";
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
              unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            file: {
              unit: "\u10D1\u10D0\u10D8\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            array: {
              unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
            set: {
              unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8",
              verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
              email:
                "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              url: "URL",
              emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
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
              datetime:
                "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
              date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
              time: "\u10D3\u10E0\u10DD",
              duration:
                "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
              ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
              cidrv4:
                "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
              cidrv6:
                "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
              base64:
                "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
              base64url:
                "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
              json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
              e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
              jwt: "JWT",
              template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
            },
            _ = {
              nan: "NaN",
              number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
              string: "\u10D5\u10D4\u10DA\u10D8",
              boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
              function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
              array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${_.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${_}`
                  : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${_}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${_._(_.values[0])}`
                  : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${_._(_.values, "|")}-\u10D3\u10D0\u10DC`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${_.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit}`
                  : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${_.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                  : `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${_.origin} \u10D8\u10E7\u10DD\u10E1 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_.prefix}"-\u10D8\u10D7`
                  : _.format === "ends_with"
                    ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_.suffix}"-\u10D8\u10D7`
                    : _.format === "includes"
                      ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${_.includes}"-\u10E1`
                      : _.format === "regex"
                        ? `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${_.pattern}`
                        : `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${_.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
              case "unrecognized_keys":
                return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${_.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${_.origin}-\u10E8\u10D8`;
              case "invalid_union":
                return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
              case "invalid_element":
                return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${_.origin}-\u10E8\u10D8`;
              default:
                return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
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
              unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            file: {
              unit: "\u1794\u17C3",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            array: {
              unit: "\u1792\u17B6\u178F\u17BB",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
            set: {
              unit: "\u1792\u17B6\u178F\u17BB",
              verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex:
                "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
              email:
                "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
              url: "URL",
              emoji:
                "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
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
              datetime:
                "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
              date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
              time: "\u1798\u17C9\u17C4\u1784 ISO",
              duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
              ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
              ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
              cidrv4:
                "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
              cidrv6:
                "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
              base64:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
              base64url:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
              json_string:
                "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
              e164: "\u179B\u17C1\u1781 E.164",
              jwt: "JWT",
              template_literal:
                "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
            },
            _ = {
              nan: "NaN",
              number: "\u179B\u17C1\u1781",
              array: "\u17A2\u17B6\u179A\u17C1 (Array)",
              null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${_.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${_}`
                  : `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${_} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${_._(_.values[0])}`
                  : `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${_.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${_} ${_.maximum.toString()} ${_.unit ?? "\u1792\u17B6\u178F\u17BB"}`
                  : `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${_.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${_} ${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${_.origin} ${_} ${_.minimum.toString()} ${_.unit}`
                  : `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${_.origin} ${_} ${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${_.includes}"`
                      : _.format === "regex"
                        ? `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${_.pattern}`
                        : `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${_.divisor}`;
              case "unrecognized_keys":
                return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${_.origin}`;
              case "invalid_union":
                return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
              case "invalid_element":
                return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${_.origin}`;
              default:
                return "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C";
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
              unit: "\uBB38\uC790",
              verb: "to have",
            },
            file: {
              unit: "\uBC14\uC774\uD2B8",
              verb: "to have",
            },
            array: {
              unit: "\uAC1C",
              verb: "to have",
            },
            set: {
              unit: "\uAC1C",
              verb: "to have",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\uC785\uB825",
              email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
              url: "URL",
              emoji: "\uC774\uBAA8\uC9C0",
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
              datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
              date: "ISO \uB0A0\uC9DC",
              time: "ISO \uC2DC\uAC04",
              duration: "ISO \uAE30\uAC04",
              ipv4: "IPv4 \uC8FC\uC18C",
              ipv6: "IPv6 \uC8FC\uC18C",
              cidrv4: "IPv4 \uBC94\uC704",
              cidrv6: "IPv6 \uBC94\uC704",
              base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
              base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
              json_string: "JSON \uBB38\uC790\uC5F4",
              e164: "E.164 \uBC88\uD638",
              jwt: "JWT",
              template_literal: "\uC785\uB825",
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
                  ? `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${_.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${_}\uC785\uB2C8\uB2E4`
                  : `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${_}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${_}\uC785\uB2C8\uB2E4`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${_._(_.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`
                  : `\uC798\uBABB\uB41C \uC635\uC158: ${_._(_.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
              case "too_big": {
                const _ = _.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC",
                  _ =
                    _ === "\uBBF8\uB9CC"
                      ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
                      : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
                  _ = _(_.origin),
                  _ = _?.unit ?? "\uC694\uC18C";
                return _
                  ? `${_.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${_.maximum.toString()}${_} ${_}${_}`
                  : `${_.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${_.maximum.toString()} ${_}${_}`;
              }
              case "too_small": {
                const _ = _.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC",
                  _ =
                    _ === "\uC774\uC0C1"
                      ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"
                      : "\uC5EC\uC57C \uD569\uB2C8\uB2E4",
                  _ = _(_.origin),
                  _ = _?.unit ?? "\uC694\uC18C";
                return _
                  ? `${_.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${_.minimum.toString()}${_} ${_}${_}`
                  : `${_.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${_.minimum.toString()} ${_}${_}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`
                  : _.format === "ends_with"
                    ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`
                    : _.format === "includes"
                      ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`
                      : _.format === "regex"
                        ? `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${_.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`
                        : `\uC798\uBABB\uB41C ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\uC798\uBABB\uB41C \uC22B\uC790: ${_.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
              case "unrecognized_keys":
                return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\uC798\uBABB\uB41C \uD0A4: ${_.origin}`;
              case "invalid_union":
                return "\uC798\uBABB\uB41C \uC785\uB825";
              case "invalid_element":
                return `\uC798\uBABB\uB41C \uAC12: ${_.origin}`;
              default:
                return "\uC798\uBABB\uB41C \uC785\uB825";
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
          return (_ >= 11 && _ <= 19) || _ === 0
            ? "many"
            : _ === 1
              ? "one"
              : "few";
        }
        const _ = () => {
          const _ = {
            string: {
              unit: {
                one: "simbolis",
                few: "simboliai",
                many: "simboli\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
                  notInclusive: "turi b\u016Bti trumpesn\u0117 kaip",
                },
                bigger: {
                  inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
                  notInclusive: "turi b\u016Bti ilgesn\u0117 kaip",
                },
              },
            },
            file: {
              unit: {
                one: "baitas",
                few: "baitai",
                many: "bait\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi b\u016Bti ne didesnis kaip",
                  notInclusive: "turi b\u016Bti ma\u017Eesnis kaip",
                },
                bigger: {
                  inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
                  notInclusive: "turi b\u016Bti didesnis kaip",
                },
              },
            },
            array: {
              unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi tur\u0117ti ne daugiau kaip",
                  notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
                },
                bigger: {
                  inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                  notInclusive: "turi tur\u0117ti daugiau kaip",
                },
              },
            },
            set: {
              unit: {
                one: "element\u0105",
                few: "elementus",
                many: "element\u0173",
              },
              verb: {
                smaller: {
                  inclusive: "turi tur\u0117ti ne daugiau kaip",
                  notInclusive: "turi tur\u0117ti ma\u017Eiau kaip",
                },
                bigger: {
                  inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
                  notInclusive: "turi tur\u0117ti daugiau kaip",
                },
              },
            },
          };
          function _(_, _, _, _) {
            const _ = _[_] ?? null;
            return _ === null
              ? _
              : {
                  unit: _.unit[_],
                  verb: _.verb[_][_ ? "inclusive" : "notInclusive"],
                };
          }
          const _ = {
              regex: "\u012Fvestis",
              email: "el. pa\u0161to adresas",
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
              duration: "ISO trukm\u0117",
              ipv4: "IPv4 adresas",
              ipv6: "IPv6 adresas",
              cidrv4: "IPv4 tinklo prefiksas (CIDR)",
              cidrv6: "IPv6 tinklo prefiksas (CIDR)",
              base64: "base64 u\u017Ekoduota eilut\u0117",
              base64url: "base64url u\u017Ekoduota eilut\u0117",
              json_string: "JSON eilut\u0117",
              e164: "E.164 numeris",
              jwt: "JWT",
              template_literal: "\u012Fvestis",
            },
            _ = {
              nan: "NaN",
              number: "skai\u010Dius",
              bigint: "sveikasis skai\u010Dius",
              string: "eilut\u0117",
              boolean: "login\u0117 reik\u0161m\u0117",
              undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
              function: "funkcija",
              symbol: "simbolis",
              array: "masyvas",
              object: "objektas",
              null: "nulin\u0117 reik\u0161m\u0117",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `Gautas tipas ${_}, o tik\u0117tasi - instanceof ${_.expected}`
                  : `Gautas tipas ${_}, o tik\u0117tasi - ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Privalo b\u016Bti ${_._(_.values[0])}`
                  : `Privalo b\u016Bti vienas i\u0161 ${_._(_.values, "|")} pasirinkim\u0173`;
              case "too_big": {
                const _ = _[_.origin] ?? _.origin,
                  _ = _(
                    _.origin,
                    _(Number(_.maximum)),
                    _.inclusive ?? !1,
                    "smaller",
                  );
                if (_?.verb)
                  return `${_(_ ?? _.origin ?? "reik\u0161m\u0117")} ${_.verb} ${_.maximum.toString()} ${_.unit ?? "element\u0173"}`;
                const _ = _.inclusive
                  ? "ne didesnis kaip"
                  : "ma\u017Eesnis kaip";
                return `${_(_ ?? _.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${_} ${_.maximum.toString()} ${_?.unit}`;
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
                  return `${_(_ ?? _.origin ?? "reik\u0161m\u0117")} ${_.verb} ${_.minimum.toString()} ${_.unit ?? "element\u0173"}`;
                const _ = _.inclusive
                  ? "ne ma\u017Eesnis kaip"
                  : "didesnis kaip";
                return `${_(_ ?? _.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${_} ${_.minimum.toString()} ${_?.unit}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Eilut\u0117 privalo prasid\u0117ti "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Eilut\u0117 privalo pasibaigti "${_.suffix}"`
                    : _.format === "includes"
                      ? `Eilut\u0117 privalo \u012Ftraukti "${_.includes}"`
                      : _.format === "regex"
                        ? `Eilut\u0117 privalo atitikti ${_.pattern}`
                        : `Neteisingas ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Skai\u010Dius privalo b\u016Bti ${_.divisor} kartotinis.`;
              case "unrecognized_keys":
                return `Neatpa\u017Eint${_.keys.length > 1 ? "i" : "as"} rakt${_.keys.length > 1 ? "ai" : "as"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return "Rastas klaidingas raktas";
              case "invalid_union":
                return "Klaidinga \u012Fvestis";
              case "invalid_element": {
                const _ = _[_.origin] ?? _.origin;
                return `${_(_ ?? _.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
              }
              default:
                return "Klaidinga \u012Fvestis";
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
              unit: "\u0437\u043D\u0430\u0446\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            file: {
              unit: "\u0431\u0430\u0458\u0442\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            array: {
              unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
            set: {
              unit: "\u0441\u0442\u0430\u0432\u043A\u0438",
              verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0432\u043D\u0435\u0441",
              email:
                "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u045F\u0438",
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
              datetime:
                "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
              date: "ISO \u0434\u0430\u0442\u0443\u043C",
              time: "ISO \u0432\u0440\u0435\u043C\u0435",
              duration:
                "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
              cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
              cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
              base64:
                "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
              base64url:
                "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
              json_string: "JSON \u043D\u0438\u0437\u0430",
              e164: "E.164 \u0431\u0440\u043E\u0458",
              jwt: "JWT",
              template_literal: "\u0432\u043D\u0435\u0441",
            },
            _ = {
              nan: "NaN",
              number: "\u0431\u0440\u043E\u0458",
              array: "\u043D\u0438\u0437\u0430",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${_.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${_}`
                  : `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${_}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Invalid input: expected ${_._(_.values[0])}`
                  : `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${_.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${_}${_.maximum.toString()} ${_.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`
                  : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${_.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${_.origin} \u0434\u0430 \u0438\u043C\u0430 ${_}${_.minimum.toString()} ${_.unit}`
                  : `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${_.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${_.includes}"`
                      : _.format === "regex"
                        ? `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${_.pattern}`
                        : `Invalid ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${_.divisor}`;
              case "unrecognized_keys":
                return `${_.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${_.origin}`;
              case "invalid_union":
                return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
              case "invalid_element":
                return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${_.origin}`;
              default:
                return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
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
                return _.values.length === 1
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
                return _.format === "starts_with"
                  ? `String tidak sah: mesti bermula dengan "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `String tidak sah: mesti berakhir dengan "${_.suffix}"`
                    : _.format === "includes"
                      ? `String tidak sah: mesti mengandungi "${_.includes}"`
                      : _.format === "regex"
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
                return "Input tidak sah";
              case "invalid_element":
                return `Nilai tidak sah dalam ${_.origin}`;
              default:
                return "Input tidak sah";
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
                return _.values.length === 1
                  ? `Ongeldige invoer: verwacht ${_._(_.values[0])}`
                  : `Ongeldige optie: verwacht \xE9\xE9n van ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin),
                  _ =
                    _.origin === "date"
                      ? "laat"
                      : _.origin === "string"
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
                    _.origin === "date"
                      ? "vroeg"
                      : _.origin === "string"
                        ? "kort"
                        : "klein";
                return _
                  ? `Te ${_}: verwacht dat ${_.origin} ${_}${_.minimum.toString()} ${_.unit} ${_.verb}`
                  : `Te ${_}: verwacht dat ${_.origin} ${_}${_.minimum.toString()} is`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Ongeldige tekst: moet met "${_.prefix}" beginnen`
                  : _.format === "ends_with"
                    ? `Ongeldige tekst: moet op "${_.suffix}" eindigen`
                    : _.format === "includes"
                      ? `Ongeldige tekst: moet "${_.includes}" bevatten`
                      : _.format === "regex"
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
                return "Ongeldige invoer";
              case "invalid_element":
                return `Ongeldige waarde in ${_.origin}`;
              default:
                return "Ongeldige invoer";
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
              verb: "\xE5 ha",
            },
            file: {
              unit: "bytes",
              verb: "\xE5 ha",
            },
            array: {
              unit: "elementer",
              verb: "\xE5 inneholde",
            },
            set: {
              unit: "elementer",
              verb: "\xE5 inneholde",
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
              ipv4: "IPv4-omr\xE5de",
              ipv6: "IPv6-omr\xE5de",
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
                return _.values.length === 1
                  ? `Ugyldig verdi: forventet ${_._(_.values[0])}`
                  : `Ugyldig valg: forventet en av ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `For stor(t): forventet ${_.origin ?? "value"} til \xE5 ha ${_}${_.maximum.toString()} ${_.unit ?? "elementer"}`
                  : `For stor(t): forventet ${_.origin ?? "value"} til \xE5 ha ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `For lite(n): forventet ${_.origin} til \xE5 ha ${_}${_.minimum.toString()} ${_.unit}`
                  : `For lite(n): forventet ${_.origin} til \xE5 ha ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Ugyldig streng: m\xE5 starte med "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Ugyldig streng: m\xE5 ende med "${_.suffix}"`
                    : _.format === "includes"
                      ? `Ugyldig streng: m\xE5 inneholde "${_.includes}"`
                      : _.format === "regex"
                        ? `Ugyldig streng: m\xE5 matche m\xF8nsteret ${_.pattern}`
                        : `Ugyldig ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${_.divisor}`;
              case "unrecognized_keys":
                return `${_.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Ugyldig n\xF8kkel i ${_.origin}`;
              case "invalid_union":
                return "Ugyldig input";
              case "invalid_element":
                return `Ugyldig verdi i ${_.origin}`;
              default:
                return "Ugyldig input";
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
              verb: "olmal\u0131d\u0131r",
            },
            file: {
              unit: "bayt",
              verb: "olmal\u0131d\u0131r",
            },
            array: {
              unit: "unsur",
              verb: "olmal\u0131d\u0131r",
            },
            set: {
              unit: "unsur",
              verb: "olmal\u0131d\u0131r",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "giren",
              email: "epostag\xE2h",
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
              datetime: "ISO heng\xE2m\u0131",
              date: "ISO tarihi",
              time: "ISO zaman\u0131",
              duration: "ISO m\xFCddeti",
              ipv4: "IPv4 ni\u015F\xE2n\u0131",
              ipv6: "IPv6 ni\u015F\xE2n\u0131",
              cidrv4: "IPv4 menzili",
              cidrv6: "IPv6 menzili",
              base64: "base64-\u015Fifreli metin",
              base64url: "base64url-\u015Fifreli metin",
              json_string: "JSON metin",
              e164: "E.164 say\u0131s\u0131",
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
                  ? `F\xE2sit giren: umulan instanceof ${_.expected}, al\u0131nan ${_}`
                  : `F\xE2sit giren: umulan ${_}, al\u0131nan ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `F\xE2sit giren: umulan ${_._(_.values[0])}`
                  : `F\xE2sit tercih: m\xFBteberler ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Fazla b\xFCy\xFCk: ${_.origin ?? "value"}, ${_}${_.maximum.toString()} ${_.unit ?? "elements"} sahip olmal\u0131yd\u0131.`
                  : `Fazla b\xFCy\xFCk: ${_.origin ?? "value"}, ${_}${_.maximum.toString()} olmal\u0131yd\u0131.`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Fazla k\xFC\xE7\xFCk: ${_.origin}, ${_}${_.minimum.toString()} ${_.unit} sahip olmal\u0131yd\u0131.`
                  : `Fazla k\xFC\xE7\xFCk: ${_.origin}, ${_}${_.minimum.toString()} olmal\u0131yd\u0131.`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `F\xE2sit metin: "${_.prefix}" ile ba\u015Flamal\u0131.`
                  : _.format === "ends_with"
                    ? `F\xE2sit metin: "${_.suffix}" ile bitmeli.`
                    : _.format === "includes"
                      ? `F\xE2sit metin: "${_.includes}" ihtiv\xE2 etmeli.`
                      : _.format === "regex"
                        ? `F\xE2sit metin: ${_.pattern} nak\u015F\u0131na uymal\u0131.`
                        : `F\xE2sit ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `F\xE2sit say\u0131: ${_.divisor} kat\u0131 olmal\u0131yd\u0131.`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar ${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `${_.origin} i\xE7in tan\u0131nmayan anahtar var.`;
              case "invalid_union":
                return "Giren tan\u0131namad\u0131.";
              case "invalid_element":
                return `${_.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
              default:
                return "K\u0131ymet tan\u0131namad\u0131.";
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
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
            file: {
              unit: "\u0628\u0627\u06CC\u067C\u0633",
              verb: "\u0648\u0644\u0631\u064A",
            },
            array: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
            set: {
              unit: "\u062A\u0648\u06A9\u064A",
              verb: "\u0648\u0644\u0631\u064A",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0648\u0631\u0648\u062F\u064A",
              email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
              url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
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
              datetime:
                "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
              date: "\u0646\u06D0\u067C\u0647",
              time: "\u0648\u062E\u062A",
              duration: "\u0645\u0648\u062F\u0647",
              ipv4: "\u062F IPv4 \u067E\u062A\u0647",
              ipv6: "\u062F IPv6 \u067E\u062A\u0647",
              cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
              cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
              base64: "base64-encoded \u0645\u062A\u0646",
              base64url: "base64url-encoded \u0645\u062A\u0646",
              json_string: "JSON \u0645\u062A\u0646",
              e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
              jwt: "JWT",
              template_literal: "\u0648\u0631\u0648\u062F\u064A",
            },
            _ = {
              nan: "NaN",
              number: "\u0639\u062F\u062F",
              array: "\u0627\u0631\u06D0",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${_.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${_} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`
                  : `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${_} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${_} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${_._(_.values[0])} \u0648\u0627\u06CC`
                  : `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${_._(_.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${_.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${_}${_.maximum.toString()} ${_.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`
                  : `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${_.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${_}${_.maximum.toString()} \u0648\u064A`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${_.origin} \u0628\u0627\u06CC\u062F ${_}${_.minimum.toString()} ${_.unit} \u0648\u0644\u0631\u064A`
                  : `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${_.origin} \u0628\u0627\u06CC\u062F ${_}${_.minimum.toString()} \u0648\u064A`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`
                  : _.format === "ends_with"
                    ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`
                    : _.format === "includes"
                      ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${_.includes}" \u0648\u0644\u0631\u064A`
                      : _.format === "regex"
                        ? `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${_.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`
                        : `${_[_.format] ?? _.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
              }
              case "not_multiple_of":
                return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${_.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
              case "unrecognized_keys":
                return `\u0646\u0627\u0633\u0645 ${_.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${_.origin} \u06A9\u06D0`;
              case "invalid_union":
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
              case "invalid_element":
                return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${_.origin} \u06A9\u06D0`;
              default:
                return "\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A";
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
              unit: "znak\xF3w",
              verb: "mie\u0107",
            },
            file: {
              unit: "bajt\xF3w",
              verb: "mie\u0107",
            },
            array: {
              unit: "element\xF3w",
              verb: "mie\u0107",
            },
            set: {
              unit: "element\xF3w",
              verb: "mie\u0107",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "wyra\u017Cenie",
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
              base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
              base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
              json_string: "ci\u0105g znak\xF3w w formacie JSON",
              e164: "liczba E.164",
              jwt: "JWT",
              template_literal: "wej\u015Bcie",
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
                  ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${_.expected}, otrzymano ${_}`
                  : `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${_}, otrzymano ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${_._(_.values[0])}`
                  : `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${_.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${_}${_.maximum.toString()} ${_.unit ?? "element\xF3w"}`
                  : `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${_.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${_.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${_}${_.minimum.toString()} ${_.unit ?? "element\xF3w"}`
                  : `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${_.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${_.suffix}"`
                    : _.format === "includes"
                      ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${_.includes}"`
                      : _.format === "regex"
                        ? `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${_.pattern}`
                        : `Nieprawid\u0142ow(y/a/e) ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${_.divisor}`;
              case "unrecognized_keys":
                return `Nierozpoznane klucze${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Nieprawid\u0142owy klucz w ${_.origin}`;
              case "invalid_union":
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
              case "invalid_element":
                return `Nieprawid\u0142owa warto\u015B\u0107 w ${_.origin}`;
              default:
                return "Nieprawid\u0142owe dane wej\u015Bciowe";
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
              regex: "padr\xE3o",
              email: "endere\xE7o de e-mail",
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
              duration: "dura\xE7\xE3o ISO",
              ipv4: "endere\xE7o IPv4",
              ipv6: "endere\xE7o IPv6",
              cidrv4: "faixa de IPv4",
              cidrv6: "faixa de IPv6",
              base64: "texto codificado em base64",
              base64url: "URL codificada em base64",
              json_string: "texto JSON",
              e164: "n\xFAmero E.164",
              jwt: "JWT",
              template_literal: "entrada",
            },
            _ = {
              nan: "NaN",
              number: "n\xFAmero",
              null: "nulo",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `Tipo inv\xE1lido: esperado instanceof ${_.expected}, recebido ${_}`
                  : `Tipo inv\xE1lido: esperado ${_}, recebido ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Entrada inv\xE1lida: esperado ${_._(_.values[0])}`
                  : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${_._(_.values, "|")}`;
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
                return _.format === "starts_with"
                  ? `Texto inv\xE1lido: deve come\xE7ar com "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Texto inv\xE1lido: deve terminar com "${_.suffix}"`
                    : _.format === "includes"
                      ? `Texto inv\xE1lido: deve incluir "${_.includes}"`
                      : _.format === "regex"
                        ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${_.pattern}`
                        : `${_[_.format] ?? _.format} inv\xE1lido`;
              }
              case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${_.divisor}`;
              case "unrecognized_keys":
                return `Chave${_.keys.length > 1 ? "s" : ""} desconhecida${_.keys.length > 1 ? "s" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Chave inv\xE1lida em ${_.origin}`;
              case "invalid_union":
                return "Entrada inv\xE1lida";
              case "invalid_element":
                return `Valor inv\xE1lido em ${_.origin}`;
              default:
                return "Campo inv\xE1lido";
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
              verb: "s\u0103 aib\u0103",
            },
            file: {
              unit: "octe\u021Bi",
              verb: "s\u0103 aib\u0103",
            },
            array: {
              unit: "elemente",
              verb: "s\u0103 aib\u0103",
            },
            set: {
              unit: "elemente",
              verb: "s\u0103 aib\u0103",
            },
            map: {
              unit: "intr\u0103ri",
              verb: "s\u0103 aib\u0103",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "intrare",
              email: "adres\u0103 de email",
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
              datetime: "dat\u0103 \u0219i or\u0103 ISO",
              date: "dat\u0103 ISO",
              time: "or\u0103 ISO",
              duration: "durat\u0103 ISO",
              ipv4: "adres\u0103 IPv4",
              ipv6: "adres\u0103 IPv6",
              mac: "adres\u0103 MAC",
              cidrv4: "interval IPv4",
              cidrv6: "interval IPv6",
              base64: "\u0219ir codat base64",
              base64url: "\u0219ir codat base64url",
              json_string: "\u0219ir JSON",
              e164: "num\u0103r E.164",
              jwt: "JWT",
              template_literal: "intrare",
            },
            _ = {
              nan: "NaN",
              string: "\u0219ir",
              number: "num\u0103r",
              boolean: "boolean",
              function: "func\u021Bie",
              array: "matrice",
              object: "obiect",
              undefined: "nedefinit",
              symbol: "simbol",
              bigint: "num\u0103r mare",
              void: "void",
              never: "never",
              map: "hart\u0103",
              set: "set",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return `Intrare invalid\u0103: a\u0219teptat ${_}, primit ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Intrare invalid\u0103: a\u0219teptat ${_._(_.values[0])}`
                  : `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Prea mare: a\u0219teptat ca ${_.origin ?? "valoarea"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "elemente"}`
                  : `Prea mare: a\u0219teptat ca ${_.origin ?? "valoarea"} s\u0103 fie ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Prea mic: a\u0219teptat ca ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                  : `Prea mic: a\u0219teptat ca ${_.origin} s\u0103 fie ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u0218ir invalid: trebuie s\u0103 se termine cu "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${_.includes}"`
                      : _.format === "regex"
                        ? `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${_.pattern}`
                        : `Format invalid: ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${_.divisor}`;
              case "unrecognized_keys":
                return `Chei nerecunoscute: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Cheie invalid\u0103 \xEEn ${_.origin}`;
              case "invalid_union":
                return "Intrare invalid\u0103";
              case "invalid_element":
                return `Valoare invalid\u0103 \xEEn ${_.origin}`;
              default:
                return "Intrare invalid\u0103";
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
          return _ >= 11 && _ <= 19
            ? _
            : _ === 1
              ? _
              : _ >= 2 && _ <= 4
                ? _
                : _;
        }
        const _ = () => {
          const _ = {
            string: {
              unit: {
                one: "\u0441\u0438\u043C\u0432\u043E\u043B",
                few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
                many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            file: {
              unit: {
                one: "\u0431\u0430\u0439\u0442",
                few: "\u0431\u0430\u0439\u0442\u0430",
                many: "\u0431\u0430\u0439\u0442",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            array: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
            set: {
              unit: {
                one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
                few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
                many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432",
              },
              verb: "\u0438\u043C\u0435\u0442\u044C",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0432\u0432\u043E\u0434",
              email: "email \u0430\u0434\u0440\u0435\u0441",
              url: "URL",
              emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
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
              datetime:
                "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
              date: "ISO \u0434\u0430\u0442\u0430",
              time: "ISO \u0432\u0440\u0435\u043C\u044F",
              duration:
                "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
              ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
              ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
              cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
              base64:
                "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
              base64url:
                "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
              json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
              e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
              jwt: "JWT",
              template_literal: "\u0432\u0432\u043E\u0434",
            },
            _ = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0441\u0438\u0432",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${_.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${_}`
                  : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${_}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${_._(_.values[0])}`
                  : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                if (_) {
                  const _ = Number(_.maximum),
                    _ = _(_, _.unit.one, _.unit.few, _.unit.many);
                  return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${_.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${_}${_.maximum.toString()} ${_}`;
                }
                return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${_.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                if (_) {
                  const _ = Number(_.minimum),
                    _ = _(_, _.unit.one, _.unit.few, _.unit.many);
                  return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${_.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${_}${_.minimum.toString()} ${_}`;
                }
                return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${_.origin} \u0431\u0443\u0434\u0435\u0442 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${_.includes}"`
                      : _.format === "regex"
                        ? `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_.pattern}`
                        : `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${_.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${_.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${_.keys.length > 1 ? "\u0438" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${_.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
              case "invalid_element":
                return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${_.origin}`;
              default:
                return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
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
              email: "e-po\u0161tni naslov",
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
              datetime: "ISO datum in \u010Das",
              date: "ISO datum",
              time: "ISO \u010Das",
              duration: "ISO trajanje",
              ipv4: "IPv4 naslov",
              ipv6: "IPv6 naslov",
              cidrv4: "obseg IPv4",
              cidrv6: "obseg IPv6",
              base64: "base64 kodiran niz",
              base64url: "base64url kodiran niz",
              json_string: "JSON niz",
              e164: "E.164 \u0161tevilka",
              jwt: "JWT",
              template_literal: "vnos",
            },
            _ = {
              nan: "NaN",
              number: "\u0161tevilo",
              array: "tabela",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `Neveljaven vnos: pri\u010Dakovano instanceof ${_.expected}, prejeto ${_}`
                  : `Neveljaven vnos: pri\u010Dakovano ${_}, prejeto ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Neveljaven vnos: pri\u010Dakovano ${_._(_.values[0])}`
                  : `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Preveliko: pri\u010Dakovano, da bo ${_.origin ?? "vrednost"} imelo ${_}${_.maximum.toString()} ${_.unit ?? "elementov"}`
                  : `Preveliko: pri\u010Dakovano, da bo ${_.origin ?? "vrednost"} ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Premajhno: pri\u010Dakovano, da bo ${_.origin} imelo ${_}${_.minimum.toString()} ${_.unit}`
                  : `Premajhno: pri\u010Dakovano, da bo ${_.origin} ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Neveljaven niz: mora se za\u010Deti z "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Neveljaven niz: mora se kon\u010Dati z "${_.suffix}"`
                    : _.format === "includes"
                      ? `Neveljaven niz: mora vsebovati "${_.includes}"`
                      : _.format === "regex"
                        ? `Neveljaven niz: mora ustrezati vzorcu ${_.pattern}`
                        : `Neveljaven ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Neveljavno \u0161tevilo: mora biti ve\u010Dkratnik ${_.divisor}`;
              case "unrecognized_keys":
                return `Neprepoznan${_.keys.length > 1 ? "i klju\u010Di" : " klju\u010D"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Neveljaven klju\u010D v ${_.origin}`;
              case "invalid_union":
                return "Neveljaven vnos";
              case "invalid_element":
                return `Neveljavna vrednost v ${_.origin}`;
              default:
                return "Neveljaven vnos";
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
              verb: "att inneh\xE5lla",
            },
            set: {
              unit: "objekt",
              verb: "att inneh\xE5lla",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "regulj\xE4rt uttryck",
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
              base64: "base64-kodad str\xE4ng",
              base64url: "base64url-kodad str\xE4ng",
              json_string: "JSON-str\xE4ng",
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
                  ? `Ogiltig inmatning: f\xF6rv\xE4ntat instanceof ${_.expected}, fick ${_}`
                  : `Ogiltig inmatning: f\xF6rv\xE4ntat ${_}, fick ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Ogiltig inmatning: f\xF6rv\xE4ntat ${_._(_.values[0])}`
                  : `Ogiltigt val: f\xF6rv\xE4ntade en av ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `F\xF6r stor(t): f\xF6rv\xE4ntade ${_.origin ?? "v\xE4rdet"} att ha ${_}${_.maximum.toString()} ${_.unit ?? "element"}`
                  : `F\xF6r stor(t): f\xF6rv\xE4ntat ${_.origin ?? "v\xE4rdet"} att ha ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `F\xF6r lite(t): f\xF6rv\xE4ntade ${_.origin ?? "v\xE4rdet"} att ha ${_}${_.minimum.toString()} ${_.unit}`
                  : `F\xF6r lite(t): f\xF6rv\xE4ntade ${_.origin ?? "v\xE4rdet"} att ha ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Ogiltig str\xE4ng: m\xE5ste b\xF6rja med "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Ogiltig str\xE4ng: m\xE5ste sluta med "${_.suffix}"`
                    : _.format === "includes"
                      ? `Ogiltig str\xE4ng: m\xE5ste inneh\xE5lla "${_.includes}"`
                      : _.format === "regex"
                        ? `Ogiltig str\xE4ng: m\xE5ste matcha m\xF6nstret "${_.pattern}"`
                        : `Ogiltig(t) ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Ogiltigt tal: m\xE5ste vara en multipel av ${_.divisor}`;
              case "unrecognized_keys":
                return `${_.keys.length > 1 ? "Ok\xE4nda nycklar" : "Ok\xE4nd nyckel"}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Ogiltig nyckel i ${_.origin ?? "v\xE4rdet"}`;
              case "invalid_union":
                return "Ogiltig input";
              case "invalid_element":
                return `Ogiltigt v\xE4rde i ${_.origin ?? "v\xE4rdet"}`;
              default:
                return "Ogiltig input";
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
              unit: "\u0B8E\u0BB4\u0BC1\u0BA4\u0BCD\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            file: {
              unit: "\u0BAA\u0BC8\u0B9F\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            array: {
              unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
            set: {
              unit: "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD",
              verb: "\u0B95\u0BCA\u0BA3\u0BCD\u0B9F\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1",
              email:
                "\u0BAE\u0BBF\u0BA9\u0BCD\u0BA9\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
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
              datetime:
                "ISO \u0BA4\u0BC7\u0BA4\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
              date: "ISO \u0BA4\u0BC7\u0BA4\u0BBF",
              time: "ISO \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
              duration: "ISO \u0B95\u0BBE\u0BB2 \u0B85\u0BB3\u0BB5\u0BC1",
              ipv4: "IPv4 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
              ipv6: "IPv6 \u0BAE\u0BC1\u0B95\u0BB5\u0BB0\u0BBF",
              cidrv4: "IPv4 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
              cidrv6: "IPv6 \u0BB5\u0BB0\u0BAE\u0BCD\u0BAA\u0BC1",
              base64: "base64-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
              base64url: "base64url-encoded \u0B9A\u0BB0\u0BAE\u0BCD",
              json_string: "JSON \u0B9A\u0BB0\u0BAE\u0BCD",
              e164: "E.164 \u0B8E\u0BA3\u0BCD",
              jwt: "JWT",
              template_literal: "input",
            },
            _ = {
              nan: "NaN",
              number: "\u0B8E\u0BA3\u0BCD",
              array: "\u0B85\u0BA3\u0BBF",
              null: "\u0BB5\u0BC6\u0BB1\u0BC1\u0BAE\u0BC8",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 instanceof ${_.expected}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_}`
                  : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_}, \u0BAA\u0BC6\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_._(_.values[0])}`
                  : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BAE\u0BCD: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_._(_.values, "|")} \u0B87\u0BB2\u0BCD \u0B92\u0BA9\u0BCD\u0BB1\u0BC1`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${_}${_.maximum.toString()} ${_.unit ?? "\u0B89\u0BB1\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD"} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : `\u0BAE\u0BBF\u0B95 \u0BAA\u0BC6\u0BB0\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_.origin ?? "\u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1"} ${_}${_.maximum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_.origin} ${_}${_.minimum.toString()} ${_.unit} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : `\u0BAE\u0BBF\u0B95\u0B9A\u0BCD \u0B9A\u0BBF\u0BB1\u0BBF\u0BAF\u0BA4\u0BC1: \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BBE\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F\u0BA4\u0BC1 ${_.origin} ${_}${_.minimum.toString()} \u0B86\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_.prefix}" \u0B87\u0BB2\u0BCD \u0BA4\u0BCA\u0B9F\u0B99\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                  : _.format === "ends_with"
                    ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_.suffix}" \u0B87\u0BB2\u0BCD \u0BAE\u0BC1\u0B9F\u0BBF\u0BB5\u0B9F\u0BC8\u0BAF \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                    : _.format === "includes"
                      ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: "${_.includes}" \u0B90 \u0B89\u0BB3\u0BCD\u0BB3\u0B9F\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                      : _.format === "regex"
                        ? `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B9A\u0BB0\u0BAE\u0BCD: ${_.pattern} \u0BAE\u0BC1\u0BB1\u0BC8\u0BAA\u0BBE\u0B9F\u0BCD\u0B9F\u0BC1\u0B9F\u0BA9\u0BCD \u0BAA\u0BCA\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`
                        : `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B8E\u0BA3\u0BCD: ${_.divisor} \u0B87\u0BA9\u0BCD \u0BAA\u0BB2\u0BAE\u0BBE\u0B95 \u0B87\u0BB0\u0BC1\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD`;
              case "unrecognized_keys":
                return `\u0B85\u0B9F\u0BC8\u0BAF\u0BBE\u0BB3\u0BAE\u0BCD \u0BA4\u0BC6\u0BB0\u0BBF\u0BAF\u0BBE\u0BA4 \u0BB5\u0BBF\u0B9A\u0BC8${_.keys.length > 1 ? "\u0B95\u0BB3\u0BCD" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `${_.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BB5\u0BBF\u0B9A\u0BC8`;
              case "invalid_union":
                return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
              case "invalid_element":
                return `${_.origin} \u0B87\u0BB2\u0BCD \u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1`;
              default:
                return "\u0BA4\u0BB5\u0BB1\u0BBE\u0BA9 \u0B89\u0BB3\u0BCD\u0BB3\u0BC0\u0B9F\u0BC1";
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
              unit: "\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            file: {
              unit: "\u0E44\u0E1A\u0E15\u0E4C",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            array: {
              unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
            set: {
              unit: "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23",
              verb: "\u0E04\u0E27\u0E23\u0E21\u0E35",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex:
                "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
              email:
                "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E2D\u0E35\u0E40\u0E21\u0E25",
              url: "URL",
              emoji: "\u0E2D\u0E34\u0E42\u0E21\u0E08\u0E34",
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
              datetime:
                "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              date: "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E41\u0E1A\u0E1A ISO",
              time: "\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              duration:
                "\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E41\u0E1A\u0E1A ISO",
              ipv4: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv4",
              ipv6: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 IPv6",
              cidrv4: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv4",
              cidrv6: "\u0E0A\u0E48\u0E27\u0E07 IP \u0E41\u0E1A\u0E1A IPv6",
              base64:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64",
              base64url:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A Base64 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A URL",
              json_string:
                "\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E41\u0E1A\u0E1A JSON",
              e164: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 (E.164)",
              jwt: "\u0E42\u0E17\u0E40\u0E04\u0E19 JWT",
              template_literal:
                "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E1B\u0E49\u0E2D\u0E19",
            },
            _ = {
              nan: "NaN",
              number: "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02",
              array: "\u0E2D\u0E32\u0E23\u0E4C\u0E40\u0E23\u0E22\u0E4C (Array)",
              null: "\u0E44\u0E21\u0E48\u0E21\u0E35\u0E04\u0E48\u0E32 (null)",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 instanceof ${_.expected} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${_}`
                  : `\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${_} \u0E41\u0E15\u0E48\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u0E04\u0E48\u0E32\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 ${_._(_.values[0])}`
                  : `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2B\u0E19\u0E36\u0E48\u0E07\u0E43\u0E19 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive
                    ? "\u0E44\u0E21\u0E48\u0E40\u0E01\u0E34\u0E19"
                    : "\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32",
                  _ = _(_.origin);
                return _
                  ? `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${_.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${_} ${_.maximum.toString()} ${_.unit ?? "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"}`
                  : `\u0E40\u0E01\u0E34\u0E19\u0E01\u0E33\u0E2B\u0E19\u0E14: ${_.origin ?? "\u0E04\u0E48\u0E32"} \u0E04\u0E27\u0E23\u0E21\u0E35${_} ${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive
                    ? "\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E19\u0E49\u0E2D\u0E22"
                    : "\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32",
                  _ = _(_.origin);
                return _
                  ? `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${_.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${_} ${_.minimum.toString()} ${_.unit}`
                  : `\u0E19\u0E49\u0E2D\u0E22\u0E01\u0E27\u0E48\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14: ${_.origin} \u0E04\u0E27\u0E23\u0E21\u0E35${_} ${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E02\u0E36\u0E49\u0E19\u0E15\u0E49\u0E19\u0E14\u0E49\u0E27\u0E22 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E25\u0E07\u0E17\u0E49\u0E32\u0E22\u0E14\u0E49\u0E27\u0E22 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E21\u0E35 "${_.includes}" \u0E2D\u0E22\u0E39\u0E48\u0E43\u0E19\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21`
                      : _.format === "regex"
                        ? `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14 ${_.pattern}`
                        : `\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u0E15\u0E31\u0E27\u0E40\u0E25\u0E02\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E15\u0E49\u0E2D\u0E07\u0E40\u0E1B\u0E47\u0E19\u0E08\u0E33\u0E19\u0E27\u0E19\u0E17\u0E35\u0E48\u0E2B\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22 ${_.divisor} \u0E44\u0E14\u0E49\u0E25\u0E07\u0E15\u0E31\u0E27`;
              case "unrecognized_keys":
                return `\u0E1E\u0E1A\u0E04\u0E35\u0E22\u0E4C\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E23\u0E39\u0E49\u0E08\u0E31\u0E01: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u0E04\u0E35\u0E22\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${_.origin}`;
              case "invalid_union":
                return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07: \u0E44\u0E21\u0E48\u0E15\u0E23\u0E07\u0E01\u0E31\u0E1A\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E22\u0E39\u0E40\u0E19\u0E35\u0E22\u0E19\u0E17\u0E35\u0E48\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E27\u0E49";
              case "invalid_element":
                return `\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E19 ${_.origin}`;
              default:
                return "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07";
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
              verb: "olmal\u0131",
            },
            file: {
              unit: "bayt",
              verb: "olmal\u0131",
            },
            array: {
              unit: "\xF6\u011Fe",
              verb: "olmal\u0131",
            },
            set: {
              unit: "\xF6\u011Fe",
              verb: "olmal\u0131",
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
              duration: "ISO s\xFCre",
              ipv4: "IPv4 adresi",
              ipv6: "IPv6 adresi",
              cidrv4: "IPv4 aral\u0131\u011F\u0131",
              cidrv6: "IPv6 aral\u0131\u011F\u0131",
              base64: "base64 ile \u015Fifrelenmi\u015F metin",
              base64url: "base64url ile \u015Fifrelenmi\u015F metin",
              json_string: "JSON dizesi",
              e164: "E.164 say\u0131s\u0131",
              jwt: "JWT",
              template_literal: "\u015Eablon dizesi",
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
                  ? `Ge\xE7ersiz de\u011Fer: beklenen instanceof ${_.expected}, al\u0131nan ${_}`
                  : `Ge\xE7ersiz de\u011Fer: beklenen ${_}, al\u0131nan ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Ge\xE7ersiz de\u011Fer: beklenen ${_._(_.values[0])}`
                  : `Ge\xE7ersiz se\xE7enek: a\u015Fa\u011F\u0131dakilerden biri olmal\u0131: ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\xC7ok b\xFCy\xFCk: beklenen ${_.origin ?? "de\u011Fer"} ${_}${_.maximum.toString()} ${_.unit ?? "\xF6\u011Fe"}`
                  : `\xC7ok b\xFCy\xFCk: beklenen ${_.origin ?? "de\u011Fer"} ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\xC7ok k\xFC\xE7\xFCk: beklenen ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
                  : `\xC7ok k\xFC\xE7\xFCk: beklenen ${_.origin} ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Ge\xE7ersiz metin: "${_.prefix}" ile ba\u015Flamal\u0131`
                  : _.format === "ends_with"
                    ? `Ge\xE7ersiz metin: "${_.suffix}" ile bitmeli`
                    : _.format === "includes"
                      ? `Ge\xE7ersiz metin: "${_.includes}" i\xE7ermeli`
                      : _.format === "regex"
                        ? `Ge\xE7ersiz metin: ${_.pattern} desenine uymal\u0131`
                        : `Ge\xE7ersiz ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Ge\xE7ersiz say\u0131: ${_.divisor} ile tam b\xF6l\xFCnebilmeli`;
              case "unrecognized_keys":
                return `Tan\u0131nmayan anahtar${_.keys.length > 1 ? "lar" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `${_.origin} i\xE7inde ge\xE7ersiz anahtar`;
              case "invalid_union":
                return "Ge\xE7ersiz de\u011Fer";
              case "invalid_element":
                return `${_.origin} i\xE7inde ge\xE7ersiz de\u011Fer`;
              default:
                return "Ge\xE7ersiz de\u011Fer";
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
              unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            file: {
              unit: "\u0431\u0430\u0439\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            array: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
            set: {
              unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432",
              verb: "\u043C\u0430\u0442\u0438\u043C\u0435",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex:
                "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
              email:
                "\u0430\u0434\u0440\u0435\u0441\u0430 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0457 \u043F\u043E\u0448\u0442\u0438",
              url: "URL",
              emoji: "\u0435\u043C\u043E\u0434\u0437\u0456",
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
              datetime:
                "\u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441 ISO",
              date: "\u0434\u0430\u0442\u0430 ISO",
              time: "\u0447\u0430\u0441 ISO",
              duration:
                "\u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C ISO",
              ipv4: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv4",
              ipv6: "\u0430\u0434\u0440\u0435\u0441\u0430 IPv6",
              cidrv4: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv4",
              cidrv6: "\u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D IPv6",
              base64:
                "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64",
              base64url:
                "\u0440\u044F\u0434\u043E\u043A \u0443 \u043A\u043E\u0434\u0443\u0432\u0430\u043D\u043D\u0456 base64url",
              json_string: "\u0440\u044F\u0434\u043E\u043A JSON",
              e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
              jwt: "JWT",
              template_literal:
                "\u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456",
            },
            _ = {
              nan: "NaN",
              number: "\u0447\u0438\u0441\u043B\u043E",
              array: "\u043C\u0430\u0441\u0438\u0432",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F instanceof ${_.expected}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${_}`
                  : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${_}, \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043E ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F ${_._(_.values[0])}`
                  : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0430 \u043E\u043F\u0446\u0456\u044F: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F \u043E\u0434\u043D\u0435 \u0437 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${_.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0456\u0432"}`
                  : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u0432\u0435\u043B\u0438\u043A\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${_.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F"} \u0431\u0443\u0434\u0435 ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                  : `\u0417\u0430\u043D\u0430\u0434\u0442\u043E \u043C\u0430\u043B\u0435: \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F, \u0449\u043E ${_.origin} \u0431\u0443\u0434\u0435 ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438\u0441\u044F \u0437 "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u043C\u0456\u0441\u0442\u0438\u0442\u0438 "${_.includes}"`
                      : _.format === "regex"
                        ? `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u0440\u044F\u0434\u043E\u043A: \u043F\u043E\u0432\u0438\u043D\u0435\u043D \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_.pattern}`
                        : `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0447\u0438\u0441\u043B\u043E: \u043F\u043E\u0432\u0438\u043D\u043D\u043E \u0431\u0443\u0442\u0438 \u043A\u0440\u0430\u0442\u043D\u0438\u043C ${_.divisor}`;
              case "unrecognized_keys":
                return `\u041D\u0435\u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u043D\u0438\u0439 \u043A\u043B\u044E\u0447${_.keys.length > 1 ? "\u0456" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u044E\u0447 \u0443 ${_.origin}`;
              case "invalid_union":
                return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
              case "invalid_element":
                return `\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0443 ${_.origin}`;
              default:
                return "\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0456 \u0432\u0445\u0456\u0434\u043D\u0456 \u0434\u0430\u043D\u0456";
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
              unit: "\u062D\u0631\u0648\u0641",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            file: {
              unit: "\u0628\u0627\u0626\u0679\u0633",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            array: {
              unit: "\u0622\u0626\u0679\u0645\u0632",
              verb: "\u06C1\u0648\u0646\u0627",
            },
            set: {
              unit: "\u0622\u0626\u0679\u0645\u0632",
              verb: "\u06C1\u0648\u0646\u0627",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0627\u0646 \u067E\u0679",
              email:
                "\u0627\u06CC \u0645\u06CC\u0644 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              url: "\u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644",
              emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
              uuid: "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              uuidv4:
                "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 4",
              uuidv6:
                "\u06CC\u0648 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC \u0648\u06CC 6",
              nanoid:
                "\u0646\u06CC\u0646\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              guid: "\u062C\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              cuid: "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              cuid2:
                "\u0633\u06CC \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC 2",
              ulid: "\u06CC\u0648 \u0627\u06CC\u0644 \u0622\u0626\u06CC \u0688\u06CC",
              xid: "\u0627\u06CC\u06A9\u0633 \u0622\u0626\u06CC \u0688\u06CC",
              ksuid:
                "\u06A9\u06D2 \u0627\u06CC\u0633 \u06CC\u0648 \u0622\u0626\u06CC \u0688\u06CC",
              datetime:
                "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0688\u06CC\u0679 \u0679\u0627\u0626\u0645",
              date: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u062A\u0627\u0631\u06CC\u062E",
              time: "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0648\u0642\u062A",
              duration:
                "\u0622\u0626\u06CC \u0627\u06CC\u0633 \u0627\u0648 \u0645\u062F\u062A",
              ipv4: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              ipv6: "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0627\u06CC\u0688\u0631\u06CC\u0633",
              cidrv4:
                "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 4 \u0631\u06CC\u0646\u062C",
              cidrv6:
                "\u0622\u0626\u06CC \u067E\u06CC \u0648\u06CC 6 \u0631\u06CC\u0646\u062C",
              base64:
                "\u0628\u06CC\u0633 64 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
              base64url:
                "\u0628\u06CC\u0633 64 \u06CC\u0648 \u0622\u0631 \u0627\u06CC\u0644 \u0627\u0646 \u06A9\u0648\u0688\u0688 \u0633\u0679\u0631\u0646\u06AF",
              json_string:
                "\u062C\u06D2 \u0627\u06CC\u0633 \u0627\u0648 \u0627\u06CC\u0646 \u0633\u0679\u0631\u0646\u06AF",
              e164: "\u0627\u06CC 164 \u0646\u0645\u0628\u0631",
              jwt: "\u062C\u06D2 \u0688\u0628\u0644\u06CC\u0648 \u0679\u06CC",
              template_literal: "\u0627\u0646 \u067E\u0679",
            },
            _ = {
              nan: "NaN",
              number: "\u0646\u0645\u0628\u0631",
              array: "\u0622\u0631\u06D2",
              null: "\u0646\u0644",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: instanceof ${_.expected} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${_} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`
                  : `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${_} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627\u060C ${_} \u0645\u0648\u0635\u0648\u0644 \u06C1\u0648\u0627`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679: ${_._(_.values[0])} \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`
                  : `\u063A\u0644\u0637 \u0622\u067E\u0634\u0646: ${_._(_.values, "|")} \u0645\u06CC\u06BA \u0633\u06D2 \u0627\u06CC\u06A9 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u0628\u06C1\u062A \u0628\u0691\u0627: ${_.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u06D2 ${_}${_.maximum.toString()} ${_.unit ?? "\u0639\u0646\u0627\u0635\u0631"} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
                  : `\u0628\u06C1\u062A \u0628\u0691\u0627: ${_.origin ?? "\u0648\u06CC\u0644\u06CC\u0648"} \u06A9\u0627 ${_}${_.maximum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${_.origin} \u06A9\u06D2 ${_}${_.minimum.toString()} ${_.unit} \u06C1\u0648\u0646\u06D2 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u06D2`
                  : `\u0628\u06C1\u062A \u0686\u06BE\u0648\u0679\u0627: ${_.origin} \u06A9\u0627 ${_}${_.minimum.toString()} \u06C1\u0648\u0646\u0627 \u0645\u062A\u0648\u0642\u0639 \u062A\u06BE\u0627`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_.prefix}" \u0633\u06D2 \u0634\u0631\u0648\u0639 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                  : _.format === "ends_with"
                    ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_.suffix}" \u067E\u0631 \u062E\u062A\u0645 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                    : _.format === "includes"
                      ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: "${_.includes}" \u0634\u0627\u0645\u0644 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                      : _.format === "regex"
                        ? `\u063A\u0644\u0637 \u0633\u0679\u0631\u0646\u06AF: \u067E\u06CC\u0679\u0631\u0646 ${_.pattern} \u0633\u06D2 \u0645\u06CC\u0686 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`
                        : `\u063A\u0644\u0637 ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u063A\u0644\u0637 \u0646\u0645\u0628\u0631: ${_.divisor} \u06A9\u0627 \u0645\u0636\u0627\u0639\u0641 \u06C1\u0648\u0646\u0627 \u0686\u0627\u06C1\u06CC\u06D2`;
              case "unrecognized_keys":
                return `\u063A\u06CC\u0631 \u062A\u0633\u0644\u06CC\u0645 \u0634\u062F\u06C1 \u06A9\u06CC${_.keys.length > 1 ? "\u0632" : ""}: ${_._(_.keys, "\u060C ")}`;
              case "invalid_key":
                return `${_.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u06A9\u06CC`;
              case "invalid_union":
                return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
              case "invalid_element":
                return `${_.origin} \u0645\u06CC\u06BA \u063A\u0644\u0637 \u0648\u06CC\u0644\u06CC\u0648`;
              default:
                return "\u063A\u0644\u0637 \u0627\u0646 \u067E\u0679";
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
              verb: "bo\u2018lishi kerak",
            },
            file: {
              unit: "bayt",
              verb: "bo\u2018lishi kerak",
            },
            array: {
              unit: "element",
              verb: "bo\u2018lishi kerak",
            },
            set: {
              unit: "element",
              verb: "bo\u2018lishi kerak",
            },
            map: {
              unit: "yozuv",
              verb: "bo\u2018lishi kerak",
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
                  ? `Noto\u2018g\u2018ri kirish: kutilgan instanceof ${_.expected}, qabul qilingan ${_}`
                  : `Noto\u2018g\u2018ri kirish: kutilgan ${_}, qabul qilingan ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `Noto\u2018g\u2018ri kirish: kutilgan ${_._(_.values[0])}`
                  : `Noto\u2018g\u2018ri variant: quyidagilardan biri kutilgan ${_._(_.values, "|")}`;
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
                return _.format === "starts_with"
                  ? `Noto\u2018g\u2018ri satr: "${_.prefix}" bilan boshlanishi kerak`
                  : _.format === "ends_with"
                    ? `Noto\u2018g\u2018ri satr: "${_.suffix}" bilan tugashi kerak`
                    : _.format === "includes"
                      ? `Noto\u2018g\u2018ri satr: "${_.includes}" ni o\u2018z ichiga olishi kerak`
                      : _.format === "regex"
                        ? `Noto\u2018g\u2018ri satr: ${_.pattern} shabloniga mos kelishi kerak`
                        : `Noto\u2018g\u2018ri ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `Noto\u2018g\u2018ri raqam: ${_.divisor} ning karralisi bo\u2018lishi kerak`;
              case "unrecognized_keys":
                return `Noma\u2019lum kalit${_.keys.length > 1 ? "lar" : ""}: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `${_.origin} dagi kalit noto\u2018g\u2018ri`;
              case "invalid_union":
                return "Noto\u2018g\u2018ri kirish";
              case "invalid_element":
                return `${_.origin} da noto\u2018g\u2018ri qiymat`;
              default:
                return "Noto\u2018g\u2018ri kirish";
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
              unit: "k\xFD t\u1EF1",
              verb: "c\xF3",
            },
            file: {
              unit: "byte",
              verb: "c\xF3",
            },
            array: {
              unit: "ph\u1EA7n t\u1EED",
              verb: "c\xF3",
            },
            set: {
              unit: "ph\u1EA7n t\u1EED",
              verb: "c\xF3",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u0111\u1EA7u v\xE0o",
              email: "\u0111\u1ECBa ch\u1EC9 email",
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
              datetime: "ng\xE0y gi\u1EDD ISO",
              date: "ng\xE0y ISO",
              time: "gi\u1EDD ISO",
              duration: "kho\u1EA3ng th\u1EDDi gian ISO",
              ipv4: "\u0111\u1ECBa ch\u1EC9 IPv4",
              ipv6: "\u0111\u1ECBa ch\u1EC9 IPv6",
              cidrv4: "d\u1EA3i IPv4",
              cidrv6: "d\u1EA3i IPv6",
              base64: "chu\u1ED7i m\xE3 h\xF3a base64",
              base64url: "chu\u1ED7i m\xE3 h\xF3a base64url",
              json_string: "chu\u1ED7i JSON",
              e164: "s\u1ED1 E.164",
              jwt: "JWT",
              template_literal: "\u0111\u1EA7u v\xE0o",
            },
            _ = {
              nan: "NaN",
              number: "s\u1ED1",
              array: "m\u1EA3ng",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i instanceof ${_.expected}, nh\u1EADn \u0111\u01B0\u1EE3c ${_}`
                  : `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${_}, nh\u1EADn \u0111\u01B0\u1EE3c ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i ${_._(_.values[0])}`
                  : `T\xF9y ch\u1ECDn kh\xF4ng h\u1EE3p l\u1EC7: mong \u0111\u1EE3i m\u1ED9t trong c\xE1c gi\xE1 tr\u1ECB ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${_.origin ?? "gi\xE1 tr\u1ECB"} ${_.verb} ${_}${_.maximum.toString()} ${_.unit ?? "ph\u1EA7n t\u1EED"}`
                  : `Qu\xE1 l\u1EDBn: mong \u0111\u1EE3i ${_.origin ?? "gi\xE1 tr\u1ECB"} ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${_.origin} ${_.verb} ${_}${_.minimum.toString()} ${_.unit}`
                  : `Qu\xE1 nh\u1ECF: mong \u0111\u1EE3i ${_.origin} ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i k\u1EBFt th\xFAc b\u1EB1ng "${_.suffix}"`
                    : _.format === "includes"
                      ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i bao g\u1ED3m "${_.includes}"`
                      : _.format === "regex"
                        ? `Chu\u1ED7i kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i kh\u1EDBp v\u1EDBi m\u1EABu ${_.pattern}`
                        : `${_[_.format] ?? _.format} kh\xF4ng h\u1EE3p l\u1EC7`;
              }
              case "not_multiple_of":
                return `S\u1ED1 kh\xF4ng h\u1EE3p l\u1EC7: ph\u1EA3i l\xE0 b\u1ED9i s\u1ED1 c\u1EE7a ${_.divisor}`;
              case "unrecognized_keys":
                return `Kh\xF3a kh\xF4ng \u0111\u01B0\u1EE3c nh\u1EADn d\u1EA1ng: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `Kh\xF3a kh\xF4ng h\u1EE3p l\u1EC7 trong ${_.origin}`;
              case "invalid_union":
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
              case "invalid_element":
                return `Gi\xE1 tr\u1ECB kh\xF4ng h\u1EE3p l\u1EC7 trong ${_.origin}`;
              default:
                return "\u0110\u1EA7u v\xE0o kh\xF4ng h\u1EE3p l\u1EC7";
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
              unit: "\u5B57\u7B26",
              verb: "\u5305\u542B",
            },
            file: {
              unit: "\u5B57\u8282",
              verb: "\u5305\u542B",
            },
            array: {
              unit: "\u9879",
              verb: "\u5305\u542B",
            },
            set: {
              unit: "\u9879",
              verb: "\u5305\u542B",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u8F93\u5165",
              email: "\u7535\u5B50\u90AE\u4EF6",
              url: "URL",
              emoji: "\u8868\u60C5\u7B26\u53F7",
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
              datetime: "ISO\u65E5\u671F\u65F6\u95F4",
              date: "ISO\u65E5\u671F",
              time: "ISO\u65F6\u95F4",
              duration: "ISO\u65F6\u957F",
              ipv4: "IPv4\u5730\u5740",
              ipv6: "IPv6\u5730\u5740",
              cidrv4: "IPv4\u7F51\u6BB5",
              cidrv6: "IPv6\u7F51\u6BB5",
              base64: "base64\u7F16\u7801\u5B57\u7B26\u4E32",
              base64url: "base64url\u7F16\u7801\u5B57\u7B26\u4E32",
              json_string: "JSON\u5B57\u7B26\u4E32",
              e164: "E.164\u53F7\u7801",
              jwt: "JWT",
              template_literal: "\u8F93\u5165",
            },
            _ = {
              nan: "NaN",
              number: "\u6570\u5B57",
              array: "\u6570\u7EC4",
              null: "\u7A7A\u503C(null)",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B instanceof ${_.expected}\uFF0C\u5B9E\u9645\u63A5\u6536 ${_}`
                  : `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${_}\uFF0C\u5B9E\u9645\u63A5\u6536 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u65E0\u6548\u8F93\u5165\uFF1A\u671F\u671B ${_._(_.values[0])}`
                  : `\u65E0\u6548\u9009\u9879\uFF1A\u671F\u671B\u4EE5\u4E0B\u4E4B\u4E00 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${_.origin ?? "\u503C"} ${_}${_.maximum.toString()} ${_.unit ?? "\u4E2A\u5143\u7D20"}`
                  : `\u6570\u503C\u8FC7\u5927\uFF1A\u671F\u671B ${_.origin ?? "\u503C"} ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${_.origin} ${_}${_.minimum.toString()} ${_.unit}`
                  : `\u6570\u503C\u8FC7\u5C0F\uFF1A\u671F\u671B ${_.origin} ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_.prefix}" \u5F00\u5934`
                  : _.format === "ends_with"
                    ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u4EE5 "${_.suffix}" \u7ED3\u5C3E`
                    : _.format === "includes"
                      ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u5305\u542B "${_.includes}"`
                      : _.format === "regex"
                        ? `\u65E0\u6548\u5B57\u7B26\u4E32\uFF1A\u5FC5\u987B\u6EE1\u8DB3\u6B63\u5219\u8868\u8FBE\u5F0F ${_.pattern}`
                        : `\u65E0\u6548${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u65E0\u6548\u6570\u5B57\uFF1A\u5FC5\u987B\u662F ${_.divisor} \u7684\u500D\u6570`;
              case "unrecognized_keys":
                return `\u51FA\u73B0\u672A\u77E5\u7684\u952E(key): ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `${_.origin} \u4E2D\u7684\u952E(key)\u65E0\u6548`;
              case "invalid_union":
                return "\u65E0\u6548\u8F93\u5165";
              case "invalid_element":
                return `${_.origin} \u4E2D\u5305\u542B\u65E0\u6548\u503C(value)`;
              default:
                return "\u65E0\u6548\u8F93\u5165";
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
              unit: "\u5B57\u5143",
              verb: "\u64C1\u6709",
            },
            file: {
              unit: "\u4F4D\u5143\u7D44",
              verb: "\u64C1\u6709",
            },
            array: {
              unit: "\u9805\u76EE",
              verb: "\u64C1\u6709",
            },
            set: {
              unit: "\u9805\u76EE",
              verb: "\u64C1\u6709",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u8F38\u5165",
              email: "\u90F5\u4EF6\u5730\u5740",
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
              datetime: "ISO \u65E5\u671F\u6642\u9593",
              date: "ISO \u65E5\u671F",
              time: "ISO \u6642\u9593",
              duration: "ISO \u671F\u9593",
              ipv4: "IPv4 \u4F4D\u5740",
              ipv6: "IPv6 \u4F4D\u5740",
              cidrv4: "IPv4 \u7BC4\u570D",
              cidrv6: "IPv6 \u7BC4\u570D",
              base64: "base64 \u7DE8\u78BC\u5B57\u4E32",
              base64url: "base64url \u7DE8\u78BC\u5B57\u4E32",
              json_string: "JSON \u5B57\u4E32",
              e164: "E.164 \u6578\u503C",
              jwt: "JWT",
              template_literal: "\u8F38\u5165",
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
                  ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA instanceof ${_.expected}\uFF0C\u4F46\u6536\u5230 ${_}`
                  : `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${_}\uFF0C\u4F46\u6536\u5230 ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\u7121\u6548\u7684\u8F38\u5165\u503C\uFF1A\u9810\u671F\u70BA ${_._(_.values[0])}`
                  : `\u7121\u6548\u7684\u9078\u9805\uFF1A\u9810\u671F\u70BA\u4EE5\u4E0B\u5176\u4E2D\u4E4B\u4E00 ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${_.origin ?? "\u503C"} \u61C9\u70BA ${_}${_.maximum.toString()} ${_.unit ?? "\u500B\u5143\u7D20"}`
                  : `\u6578\u503C\u904E\u5927\uFF1A\u9810\u671F ${_.origin ?? "\u503C"} \u61C9\u70BA ${_}${_.maximum.toString()}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${_.origin} \u61C9\u70BA ${_}${_.minimum.toString()} ${_.unit}`
                  : `\u6578\u503C\u904E\u5C0F\uFF1A\u9810\u671F ${_.origin} \u61C9\u70BA ${_}${_.minimum.toString()}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_.prefix}" \u958B\u982D`
                  : _.format === "ends_with"
                    ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u4EE5 "${_.suffix}" \u7D50\u5C3E`
                    : _.format === "includes"
                      ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u5305\u542B "${_.includes}"`
                      : _.format === "regex"
                        ? `\u7121\u6548\u7684\u5B57\u4E32\uFF1A\u5FC5\u9808\u7B26\u5408\u683C\u5F0F ${_.pattern}`
                        : `\u7121\u6548\u7684 ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `\u7121\u6548\u7684\u6578\u5B57\uFF1A\u5FC5\u9808\u70BA ${_.divisor} \u7684\u500D\u6578`;
              case "unrecognized_keys":
                return `\u7121\u6CD5\u8B58\u5225\u7684\u9375\u503C${_.keys.length > 1 ? "\u5011" : ""}\uFF1A${_._(_.keys, "\u3001")}`;
              case "invalid_key":
                return `${_.origin} \u4E2D\u6709\u7121\u6548\u7684\u9375\u503C`;
              case "invalid_union":
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
              case "invalid_element":
                return `${_.origin} \u4E2D\u6709\u7121\u6548\u7684\u503C`;
              default:
                return "\u7121\u6548\u7684\u8F38\u5165\u503C";
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
              unit: "\xE0mi",
              verb: "n\xED",
            },
            file: {
              unit: "bytes",
              verb: "n\xED",
            },
            array: {
              unit: "nkan",
              verb: "n\xED",
            },
            set: {
              unit: "nkan",
              verb: "n\xED",
            },
          };
          function _(_) {
            return _[_] ?? null;
          }
          const _ = {
              regex: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
              email: "\xE0d\xEDr\u1EB9\u0301s\xEC \xECm\u1EB9\u0301l\xEC",
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
              datetime: "\xE0k\xF3k\xF2 ISO",
              date: "\u1ECDj\u1ECD\u0301 ISO",
              time: "\xE0k\xF3k\xF2 ISO",
              duration: "\xE0k\xF3k\xF2 t\xF3 p\xE9 ISO",
              ipv4: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv4",
              ipv6: "\xE0d\xEDr\u1EB9\u0301s\xEC IPv6",
              cidrv4: "\xE0gb\xE8gb\xE8 IPv4",
              cidrv6: "\xE0gb\xE8gb\xE8 IPv6",
              base64:
                "\u1ECD\u0300r\u1ECD\u0300 t\xED a k\u1ECD\u0301 n\xED base64",
              base64url: "\u1ECD\u0300r\u1ECD\u0300 base64url",
              json_string: "\u1ECD\u0300r\u1ECD\u0300 JSON",
              e164: "n\u1ECD\u0301mb\xE0 E.164",
              jwt: "JWT",
              template_literal: "\u1EB9\u0300r\u1ECD \xECb\xE1w\u1ECDl\xE9",
            },
            _ = {
              nan: "NaN",
              number: "n\u1ECD\u0301mb\xE0",
              array: "akop\u1ECD",
            };
          return (_) => {
            switch (_.code) {
              case "invalid_type": {
                const _ = _[_.expected] ?? _.expected,
                  _ = _._(_.input),
                  _ = _[_] ?? _;
                return /^[A-Z]/.test(_.expected)
                  ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi instanceof ${_.expected}, \xE0m\u1ECD\u0300 a r\xED ${_}`
                  : `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${_}, \xE0m\u1ECD\u0300 a r\xED ${_}`;
              }
              case "invalid_value":
                return _.values.length === 1
                  ? `\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e: a n\xED l\xE1ti fi ${_._(_.values[0])}`
                  : `\xC0\u1E63\xE0y\xE0n a\u1E63\xEC\u1E63e: yan \u1ECD\u0300kan l\xE1ra ${_._(_.values, "|")}`;
              case "too_big": {
                const _ = _.inclusive ? "<=" : "<",
                  _ = _(_.origin);
                return _
                  ? `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${_.origin ?? "iye"} ${_.verb} ${_}${_.maximum} ${_.unit}`
                  : `T\xF3 p\u1ECD\u0300 j\xF9: a n\xED l\xE1ti j\u1EB9\u0301 ${_}${_.maximum}`;
              }
              case "too_small": {
                const _ = _.inclusive ? ">=" : ">",
                  _ = _(_.origin);
                return _
                  ? `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 p\xE9 ${_.origin} ${_.verb} ${_}${_.minimum} ${_.unit}`
                  : `K\xE9r\xE9 ju: a n\xED l\xE1ti j\u1EB9\u0301 ${_}${_.minimum}`;
              }
              case "invalid_format": {
                const _ = _;
                return _.format === "starts_with"
                  ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\u1EB9\u0300r\u1EB9\u0300 p\u1EB9\u0300l\xFA "${_.prefix}"`
                  : _.format === "ends_with"
                    ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 par\xED p\u1EB9\u0300l\xFA "${_.suffix}"`
                    : _.format === "includes"
                      ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 n\xED "${_.includes}"`
                      : _.format === "regex"
                        ? `\u1ECC\u0300r\u1ECD\u0300 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 b\xE1 \xE0p\u1EB9\u1EB9r\u1EB9 mu ${_.pattern}`
                        : `A\u1E63\xEC\u1E63e: ${_[_.format] ?? _.format}`;
              }
              case "not_multiple_of":
                return `N\u1ECD\u0301mb\xE0 a\u1E63\xEC\u1E63e: gb\u1ECD\u0301d\u1ECD\u0300 j\u1EB9\u0301 \xE8y\xE0 p\xEDp\xEDn ti ${_.divisor}`;
              case "unrecognized_keys":
                return `B\u1ECDt\xECn\xEC \xE0\xECm\u1ECD\u0300: ${_._(_.keys, ", ")}`;
              case "invalid_key":
                return `B\u1ECDt\xECn\xEC a\u1E63\xEC\u1E63e n\xEDn\xFA ${_.origin}`;
              case "invalid_union":
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
              case "invalid_element":
                return `Iye a\u1E63\xEC\u1E63e n\xEDn\xFA ${_.origin}`;
              default:
                return "\xCCb\xE1w\u1ECDl\xE9 a\u1E63\xEC\u1E63e";
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
})();

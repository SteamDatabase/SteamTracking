"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5836],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          QAndARoutes: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
        Dashboard: (_) => `/questions/${_}/dashboard`,
        FullPageView: (_, _) => `/questions/${_}/view/${_}`,
      };
      const _ = function (_) {
        return _.createElement(
          _._,
          null,
          _.createElement(_._, {
            path: _.Dashboard(":vanity_str"),
            render: (_) =>
              _.createElement(_._, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: _ } = _.match.params;
                    return _.createElement(_._, {
                      vanity_str: _,
                    });
                  },
                },
              }),
          }),
          _.createElement(_._, {
            path: _.FullPageView(":vanity_str", ":session_gid"),
            render: (_) =>
              _.createElement(_._, {
                config: {
                  "qanda-root": () => {
                    const { vanity_str: _, session_gid: __webpack_require__ } =
                      _.match.params;
                    return _.createElement(_._, {
                      gidSession: __webpack_require__,
                    });
                  },
                },
              }),
          }),
          _.createElement(_._, {
            component: _._,
          }),
        );
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
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
        _,
        _,
        _,
        _,
        _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return _.filter((_) => !_.includes(_));
      }
      var _ = class extends _._ {
        constructor(_, _, _) {
          super(),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, void 0),
            (0, _._)(this, _, _),
            (0, _._)(this, _, _),
            (0, _._)(this, _, []),
            (0, _._)(this, _, []),
            (0, _._)(this, _, []),
            this.setQueries(_);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (0, _._)(this, _).forEach((_) => {
              _.subscribe((_) => {
                (0, _._)(this, _, _).call(this, _, _);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            (0, _._)(this, _).forEach((_) => {
              _.destroy();
            });
        }
        setQueries(_, _, _) {
          (0, _._)(this, _, _),
            (0, _._)(this, _, _),
            _._.batch(() => {
              const _ = (0, _._)(this, _),
                _ = (0, _._)(this, _, _).call(this, (0, _._)(this, _));
              _.forEach((_) =>
                _.observer.setOptions(_.defaultedQueryOptions, _),
              );
              const _ = _.map((_) => _.observer),
                _ = _.map((_) => _.getCurrentResult()),
                _ = _.some((_, _) => _ !== _[_]);
              (_.length !== _.length || _) &&
                ((0, _._)(this, _, _),
                (0, _._)(this, _, _),
                this.hasListeners() &&
                  (_(_, _).forEach((_) => {
                    _.destroy();
                  }),
                  _(_, _).forEach((_) => {
                    _.subscribe((_) => {
                      (0, _._)(this, _, _).call(this, _, _);
                    });
                  }),
                  (0, _._)(this, _, _).call(this)));
            });
        }
        getCurrentResult() {
          return (0, _._)(this, _);
        }
        getQueries() {
          return (0, _._)(this, _).map((_) => _.getCurrentQuery());
        }
        getObservers() {
          return (0, _._)(this, _);
        }
        getOptimisticResult(_, _) {
          const _ = (0, _._)(this, _, _)
            .call(this, _)
            .map((_) =>
              _.observer.getOptimisticResult(_.defaultedQueryOptions),
            );
          return [
            _,
            (_) => (0, _._)(this, _, _).call(this, _ ?? _, _),
            () => (0, _._)(this, _, _).call(this, _, _),
          ];
        }
      };
      (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakMap()),
        (_ = new WeakSet()),
        (_ = function (_, _) {
          const _ = (0, _._)(this, _, _).call(this, _);
          return __webpack_require__.map((_, _) => {
            const _ = _[_];
            return _.defaultedQueryOptions.notifyOnChangeProps
              ? _
              : _.observer.trackResult(_, (_) => {
                  __webpack_require__.forEach((_) => {
                    _.observer.trackProp(_);
                  });
                });
          });
        }),
        (_ = new WeakSet()),
        (_ = function (_, _) {
          return _
            ? (((0, _._)(this, _) &&
                (0, _._)(this, _) === (0, _._)(this, _) &&
                _ === (0, _._)(this, _)) ||
                ((0, _._)(this, _, _),
                (0, _._)(this, _, (0, _._)(this, _)),
                (0, _._)(this, _, (0, _._)((0, _._)(this, _), _(_)))),
              (0, _._)(this, _))
            : _;
        }),
        (_ = new WeakSet()),
        (_ = function (_) {
          const _ = new Map(
              (0, _._)(this, _).map((_) => [_.options.queryHash, _]),
            ),
            _ = [];
          return (
            _.forEach((_) => {
              const _ = (0, _._)(this, _).defaultQueryOptions(_),
                _ = _.get(_.queryHash);
              if (_)
                __webpack_require__.push({
                  defaultedQueryOptions: _,
                  observer: _,
                });
              else {
                const _ = (0, _._)(this, _).find(
                  (_) => _.options.queryHash === _.queryHash,
                );
                __webpack_require__.push({
                  defaultedQueryOptions: _,
                  observer: _ ?? new _._((0, _._)(this, _), _),
                });
              }
            }),
            __webpack_require__.sort(
              (_, _) =>
                _.findIndex(
                  (_) => _.queryHash === _.defaultedQueryOptions.queryHash,
                ) -
                _.findIndex(
                  (_) => _.queryHash === _.defaultedQueryOptions.queryHash,
                ),
            )
          );
        }),
        (_ = new WeakSet()),
        (_ = function (_, _) {
          const _ = (0, _._)(this, _).indexOf(_);
          -1 !== _ &&
            ((0, _._)(
              this,
              _,
              (function (_, _, _) {
                const _ = _.slice(0);
                return (_[_] = _), _;
              })((0, _._)(this, _), _, _),
            ),
            (0, _._)(this, _, _).call(this));
        }),
        (_ = new WeakSet()),
        (_ = function () {
          var _;
          if (this.hasListeners()) {
            (0, _._)(this, _) !==
              (0, _._)(this, _, _).call(
                this,
                (0, _._)(this, _, _).call(
                  this,
                  (0, _._)(this, _),
                  (0, _._)(this, _),
                ),
                null == (_ = (0, _._)(this, _)) ? void 0 : _.combine,
              ) &&
              _._.batch(() => {
                this.listeners.forEach((_) => {
                  _((0, _._)(this, _));
                });
              });
          }
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _({ queries: _, ..._ }, _) {
        const _ = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _.useMemo(
            () =>
              _.map((_) => {
                const _ = _.defaultQueryOptions(_);
                return (
                  (_._optimisticResults = _ ? "isRestoring" : "optimistic"), _
                );
              }),
            [_, _, _],
          );
        _.forEach((_) => {
          (0, _._)(_), (0, _._)(_, _);
        }),
          (0, _._)(_);
        const [_] = _.useState(() => new _(_, _, _)),
          [_, _, _] = _.getOptimisticResult(_, _.combine);
        _.useSyncExternalStore(
          _.useCallback(
            (_) => (_ ? _._ : _.subscribe(_._.batchCalls(_))),
            [_, _],
          ),
          () => _.getCurrentResult(),
          () => _.getCurrentResult(),
        ),
          _.useEffect(() => {
            _.setQueries(_, _, {
              listeners: !1,
            });
          }, [_, _, _]);
        const _ = _.some((_, _) => (0, _._)(_[_], _))
          ? _.flatMap((_, _) => {
              const _ = _[_];
              if (_) {
                const _ = new _._(_, _);
                if ((0, _._)(_, _)) return (0, _._)(_, _, _);
                (0, _._)(_, _) && (0, _._)(_, _, _);
              }
              return [];
            })
          : [];
        if (_.length > 0) throw Promise.all(_);
        const _ = _.find((_, _) => {
          const _ = _[_];
          return (
            _ &&
            (0, _._)({
              result: _,
              errorResetBoundary: _,
              throwOnError: _.throwOnError,
              query: _.getQueryCache().get(_.queryHash),
            })
          );
        });
        if (null == _ ? void 0 : _.error) throw _.error;
        return _(_());
      }
    },
  },
]);

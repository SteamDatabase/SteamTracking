"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [2770],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      _.Component;
      _.Component;
      var _ = function (_, _) {
          return "function" == typeof _ ? _(_) : _;
        },
        _ = function (_, _) {
          return "string" == typeof _ ? (0, _._)(_, null, null, _) : _;
        },
        _ = function (_) {
          return _;
        },
        _ = _.forwardRef;
      void 0 === _ && (_ = _);
      var _ = _(function (_, _) {
        var _ = _.innerRef,
          _ = _.navigate,
          _ = _.onClick,
          _ = (0, _._)(_, ["innerRef", "navigate", "onClick"]),
          _ = _.target,
          _ = (0, _._)({}, _, {
            onClick: function (_) {
              try {
                _ && _(_);
              } catch (_) {
                throw (_.preventDefault(), _);
              }
              _.defaultPrevented ||
                0 !== _.button ||
                (_ && "_self" !== _) ||
                (function (_) {
                  return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
                })(_) ||
                (_.preventDefault(), _());
            },
          });
        return (_.ref = (_ !== _ && _) || _), _.createElement("a", _);
      });
      var _ = _(function (_, _) {
          var _ = _.component,
            _ = void 0 === _ ? _ : _,
            _ = _.replace,
            _ = _._,
            _ = _.innerRef,
            _ = (0, _._)(_, ["component", "replace", "to", "innerRef"]);
          return _.createElement(_._.Consumer, null, function (_) {
            _ || (0, _._)(!1);
            var _ = _.history,
              _ = _(_(_, _.location), _.location),
              _ = _ ? __webpack_require__.createHref(_) : "",
              _ = (0, _._)({}, _, {
                href: _,
                navigate: function () {
                  var _ = _(_, _.location),
                    _ = (0, _._)(_.location) === (0, _._)(_(_));
                  (_ || _ ? _.replace : _.push)(_);
                },
              });
            return (
              _ !== _ ? (_.ref = _ || _) : (_.innerRef = _),
              _.createElement(_, _)
            );
          });
        }),
        _ = function (_) {
          return _;
        },
        _ = _.forwardRef;
      void 0 === _ && (_ = _);
      var _ = _(function (_, _) {
        var _ = _["aria-current"],
          _ = void 0 === _ ? "page" : _,
          _ = _.activeClassName,
          _ = void 0 === _ ? "active" : _,
          _ = _.activeStyle,
          _ = _.className,
          _ = _.exact,
          _ = _.isActive,
          _ = _.location,
          _ = _.sensitive,
          _ = _.strict,
          _ = _.style,
          _ = _._,
          _ = _.innerRef,
          _ = (0, _._)(_, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return _.createElement(_._.Consumer, null, function (_) {
          _ || (0, _._)(!1);
          var _ = _ || _.location,
            _ = _(_(_, _), _),
            _ = _.pathname,
            _ = _ && _.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            _ = _
              ? (0, _._)(_.pathname, {
                  path: _,
                  exact: _,
                  sensitive: _,
                  strict: _,
                })
              : null,
            _ = !!(_ ? _(_, _) : _),
            _ = "function" == typeof _ ? _(_) : _,
            _ = "function" == typeof _ ? _(_) : _;
          _ &&
            ((_ = (function () {
              for (
                var _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return _.filter(function (_) {
                return _;
              }).join(" ");
            })(_, _)),
            (_ = (0, _._)({}, _, _)));
          var _ = (0, _._)(
            {
              "aria-current": (_ && _) || null,
              className: _,
              style: _,
              _: _,
            },
            _,
          );
          return (
            _ !== _ ? (_.ref = _ || _) : (_.innerRef = _), _.createElement(_, _)
          );
        });
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return _.filter((_) => !_.includes(_));
      }
      var _ = class extends _._ {
          #e;
          #t;
          #s;
          #r;
          #n;
          #i;
          #o;
          #u;
          constructor(_, _, _) {
            super(),
              (this.#e = _),
              (this.#r = _),
              (this.#s = []),
              (this.#n = []),
              (this.#t = []),
              this.setQueries(_);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#n.forEach((_) => {
                _.subscribe((_) => {
                  this.#a(_, _);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#n.forEach((_) => {
                _.destroy();
              });
          }
          setQueries(_, _, _) {
            (this.#s = _),
              (this.#r = _),
              _._.batch(() => {
                const _ = this.#n,
                  _ = this.#c(this.#s);
                _.forEach((_) =>
                  _.observer.setOptions(_.defaultedQueryOptions, _),
                );
                const _ = _.map((_) => _.observer),
                  _ = _.map((_) => _.getCurrentResult()),
                  _ = _.some((_, _) => _ !== _[_]);
                (_.length !== _.length || _) &&
                  ((this.#n = _),
                  (this.#t = _),
                  this.hasListeners() &&
                    (_(_, _).forEach((_) => {
                      _.destroy();
                    }),
                    _(_, _).forEach((_) => {
                      _.subscribe((_) => {
                        this.#a(_, _);
                      });
                    }),
                    this.#l()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#n.map((_) => _.getCurrentQuery());
          }
          getObservers() {
            return this.#n;
          }
          getOptimisticResult(_, _) {
            const _ = this.#c(_).map((_) =>
              _.observer.getOptimisticResult(_.defaultedQueryOptions),
            );
            return [_, (_) => this.#h(_ ?? _, _), () => this.#f(_, _)];
          }
          #f(_, _) {
            const _ = this.#c(_);
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
          }
          #h(_, _) {
            return _
              ? ((this.#i && this.#t === this.#u && _ === this.#o) ||
                  ((this.#o = _),
                  (this.#u = this.#t),
                  (this.#i = (0, _._)(this.#i, _(_)))),
                this.#i)
              : _;
          }
          #c(_) {
            const _ = new Map(this.#n.map((_) => [_.options.queryHash, _])),
              _ = [];
            return (
              _.forEach((_) => {
                const _ = this.#e.defaultQueryOptions(_),
                  _ = _.get(_.queryHash);
                if (_)
                  __webpack_require__.push({
                    defaultedQueryOptions: _,
                    observer: _,
                  });
                else {
                  const _ = this.#n.find(
                    (_) => _.options.queryHash === _.queryHash,
                  );
                  __webpack_require__.push({
                    defaultedQueryOptions: _,
                    observer: _ ?? new _._(this.#e, _),
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
          }
          #a(_, _) {
            const _ = this.#n.indexOf(_);
            -1 !== _ &&
              ((this.#t = (function (_, _, _) {
                const _ = _.slice(0);
                return (_[_] = _), _;
              })(this.#t, _, _)),
              this.#l());
          }
          #l() {
            if (this.hasListeners()) {
              this.#i !==
                this.#h(this.#f(this.#t, this.#s), this.#r?.combine) &&
                _._.batch(() => {
                  this.listeners.forEach((_) => {
                    _(this.#t);
                  });
                });
            }
          }
        },
        _ = __webpack_require__("chunkid"),
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
        if (_?.error) throw _.error;
        return _(_());
      }
    },
  },
]);

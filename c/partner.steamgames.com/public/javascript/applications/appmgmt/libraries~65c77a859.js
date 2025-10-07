(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6995],
  {
    chunkid: () => {},
    chunkid: () => {},
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
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
          #n;
          #r;
          #o;
          #i;
          #s;
          #l;
          constructor(_, _, _) {
            super(),
              (this.#e = _),
              (this.#r = _),
              (this.#n = []),
              (this.#o = []),
              (this.#t = []),
              this.setQueries(_);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#o.forEach((_) => {
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
              this.#o.forEach((_) => {
                _.destroy();
              });
          }
          setQueries(_, _, _) {
            (this.#n = _),
              (this.#r = _),
              _._.batch(() => {
                const _ = this.#o,
                  _ = this.#c(this.#n);
                _.forEach((_) =>
                  _.observer.setOptions(_.defaultedQueryOptions, _),
                );
                const _ = _.map((_) => _.observer),
                  _ = _.map((_) => _.getCurrentResult()),
                  _ = _.some((_, _) => _ !== _[_]);
                (_.length !== _.length || _) &&
                  ((this.#o = _),
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
                    this.#h()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#o.map((_) => _.getCurrentQuery());
          }
          getObservers() {
            return this.#o;
          }
          getOptimisticResult(_, _) {
            const _ = this.#c(_).map((_) =>
              _.observer.getOptimisticResult(_.defaultedQueryOptions),
            );
            return [_, (_) => this.#d(_ ?? _, _), () => this.#p(_, _)];
          }
          #p(_, _) {
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
          #d(_, _) {
            return _
              ? ((this.#i && this.#t === this.#l && _ === this.#s) ||
                  ((this.#s = _),
                  (this.#l = this.#t),
                  (this.#i = (0, _._)(this.#i, _(_)))),
                this.#i)
              : _;
          }
          #c(_) {
            const _ = new Map(this.#o.map((_) => [_.options.queryHash, _])),
              _ = [];
            return (
              _.forEach((_) => {
                const _ = this.#e.defaultQueryOptions(_),
                  _ = _.get(_.queryHash);
                _
                  ? __webpack_require__.push({
                      defaultedQueryOptions: _,
                      observer: _,
                    })
                  : __webpack_require__.push({
                      defaultedQueryOptions: _,
                      observer: new _._(this.#e, _),
                    });
              }),
              _
            );
          }
          #a(_, _) {
            const _ = this.#o.indexOf(_);
            -1 !== _ &&
              ((this.#t = (function (_, _, _) {
                const _ = _.slice(0);
                return (_[_] = _), _;
              })(this.#t, _, _)),
              this.#h());
          }
          #h() {
            if (this.hasListeners()) {
              this.#i !==
                this.#d(this.#p(this.#t, this.#n), this.#r?.combine) &&
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
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_, _) =>
        !_.selection.empty &&
        (_ && _(_._.deleteSelection().scrollIntoView()), !0);
      function _(_, _) {
        let { $cursor: __webpack_require__ } = _.selection;
        return !__webpack_require__ ||
          (_
            ? !_.endOfTextblock("backward", _)
            : __webpack_require__.parentOffset > 0)
          ? null
          : __webpack_require__;
      }
      function _(_, _, __webpack_require__ = !1) {
        for (let _ = _; _; _ = "start" == _ ? _.firstChild : _.lastChild) {
          if (_.isTextblock) return !0;
          if (__webpack_require__ && 1 != _.childCount) return !1;
        }
        return !1;
      }
      function _(_) {
        if (!_.parent.type.spec.isolating)
          for (let _ = _.depth - 1; _ >= 0; _--) {
            if (_.index(_) > 0) return _.doc.resolve(_.before(_ + 1));
            if (_.node(_).type.spec.isolating) break;
          }
        return null;
      }
      function _(_, _) {
        let { $cursor: __webpack_require__ } = _.selection;
        return !__webpack_require__ ||
          (_
            ? !_.endOfTextblock("forward", _)
            : __webpack_require__.parentOffset <
              __webpack_require__.parent.content.size)
          ? null
          : __webpack_require__;
      }
      function _(_) {
        if (!_.parent.type.spec.isolating)
          for (let _ = _.depth - 1; _ >= 0; _--) {
            let _ = _.node(_);
            if (_.index(_) + 1 < _.childCount)
              return _.doc.resolve(_.after(_ + 1));
            if (_.type.spec.isolating) break;
          }
        return null;
      }
      function _(_) {
        for (let _ = 0; _ < _.edgeCount; _++) {
          let { type: __webpack_require__ } = _.edge(_);
          if (
            __webpack_require__.isTextblock &&
            !__webpack_require__.hasRequiredAttrs()
          )
            return __webpack_require__;
        }
        return null;
      }
      const _ = (_, _) => {
        let { $head: __webpack_require__, $anchor: _ } = _.selection;
        if (
          !__webpack_require__.parent.type.spec.code ||
          !__webpack_require__.sameParent(_)
        )
          return !1;
        let _ = __webpack_require__.node(-1),
          _ = __webpack_require__.indexAfter(-1),
          _ = _(_.contentMatchAt(_));
        if (!_ || !_.canReplaceWith(_, _, _)) return !1;
        if (_) {
          let _ = __webpack_require__.after(),
            _ = _._.replaceWith(_, _, _.createAndFill());
          _.setSelection(_._.near(_.doc.resolve(_), 1)), _(_.scrollIntoView());
        }
        return !0;
      };
      const _ = (_, _) => {
        let { $from: __webpack_require__, $to: _ } = _.selection;
        if (_.selection instanceof _._ && _.selection.node.isBlock)
          return !(
            !__webpack_require__.parentOffset ||
            !(0, _._)(_.doc, __webpack_require__.pos) ||
            (_ && _(_._.split(__webpack_require__.pos).scrollIntoView()), 0)
          );
        if (!__webpack_require__.parent.isBlock) return !1;
        if (_) {
          let _ = _.parentOffset == _.parent.content.size,
            _ = _._;
          (_.selection instanceof _._ || _.selection instanceof _._) &&
            _.deleteSelection();
          let _ =
              0 == __webpack_require__.depth
                ? null
                : _(
                    __webpack_require__
                      .node(-1)
                      .contentMatchAt(__webpack_require__.indexAfter(-1)),
                  ),
            _ = _ && _(_.parent, _),
            _ = _
              ? [_]
              : _ && _
                ? [
                    {
                      type: _,
                    },
                  ]
                : void 0,
            _ = (0, _._)(_.doc, _.mapping.map(__webpack_require__.pos), 1, _);
          if (
            (_ ||
              _ ||
              !(0, _._)(
                _.doc,
                _.mapping.map(__webpack_require__.pos),
                1,
                _
                  ? [
                      {
                        type: _,
                      },
                    ]
                  : void 0,
              ) ||
              (_ &&
                (_ = [
                  {
                    type: _,
                  },
                ]),
              (_ = !0)),
            _ &&
              (_.split(_.mapping.map(__webpack_require__.pos), 1, _),
              !_ &&
                !__webpack_require__.parentOffset &&
                __webpack_require__.parent.type != _))
          ) {
            let _ = _.mapping.map(__webpack_require__.before()),
              _ = _.doc.resolve(_);
            _ &&
              __webpack_require__
                .node(-1)
                .canReplaceWith(_.index(), _.index() + 1, _) &&
              _.setNodeMarkup(_.mapping.map(__webpack_require__.before()), _);
          }
          _(_.scrollIntoView());
        }
        return !0;
      };
      var _;
      const _ = (_, _) => {
        let _,
          { $from: _, _: _ } = _.selection,
          _ = _.sharedDepth(_);
        return (
          0 != _ &&
          ((_ = _.before(_)),
          _ && _(_._.setSelection(_._.create(_.doc, _))),
          !0)
        );
      };
      function _(_, _, _) {
        let _,
          _,
          _ = _.nodeBefore,
          _ = _.nodeAfter;
        if (_.type.spec.isolating || _.type.spec.isolating) return !1;
        if (
          (function (_, _, _) {
            let _ = _.nodeBefore,
              _ = _.nodeAfter,
              _ = _.index();
            return !(
              !(_ && _ && _.type.compatibleContent(_.type)) ||
              (!_.content.size && _.parent.canReplace(_ - 1, _)
                ? (_ &&
                    __webpack_require__(
                      _._.delete(_.pos - _.nodeSize, _.pos).scrollIntoView(),
                    ),
                  0)
                : !_.parent.canReplace(_, _ + 1) ||
                  (!_.isTextblock && !(0, _._)(_.doc, _.pos)) ||
                  (_ &&
                    __webpack_require__(
                      _._.clearIncompatible(
                        _.pos,
                        _.type,
                        _.contentMatchAt(_.childCount),
                      )
                        .join(_.pos)
                        .scrollIntoView(),
                    ),
                  0))
            );
          })(_, _, _)
        )
          return !0;
        let _ = _.parent.canReplace(_.index(), _.index() + 1);
        if (
          _ &&
          (_ = (_ = _.contentMatchAt(_.childCount)).findWrapping(_.type)) &&
          _.matchType(_[0] || _.type).validEnd
        ) {
          if (_) {
            let _ = _.pos + _.nodeSize,
              _ = _._.empty;
            for (let _ = _.length - 1; _ >= 0; _--)
              _ = _._.from(_[_].create(null, _));
            _ = _._.from(_.copy(_));
            let _ = _._.step(
                new _._(_.pos - 1, _, _.pos, _, new _._(_, 1, 0), _.length, !0),
              ),
              _ = _ + 2 * _.length;
            (0, _._)(_.doc, _) && _.join(_),
              __webpack_require__(_.scrollIntoView());
          }
          return !0;
        }
        let _ = _._.findFrom(_, 1),
          _ = _ && _.$from.blockRange(_.$to),
          _ = _ && (0, _._)(_);
        if (null != _ && _ >= _.depth)
          return _ && __webpack_require__(_._.lift(_, _).scrollIntoView()), !0;
        if (_ && _(_, "start", !0) && _(_, "end")) {
          let _ = _,
            _ = [];
          for (; _.push(_), !_.isTextblock; ) _ = _.lastChild;
          let _ = _,
            _ = 1;
          for (; !_.isTextblock; _ = _.firstChild) _++;
          if (_.canReplace(_.childCount, _.childCount, _.content)) {
            if (_) {
              let _ = _._.empty;
              for (let _ = _.length - 1; _ >= 0; _--)
                _ = _._.from(_[_].copy(_));
              __webpack_require__(
                _._.step(
                  new _._(
                    _.pos - _.length,
                    _.pos + _.nodeSize,
                    _.pos + _,
                    _.pos + _.nodeSize - _,
                    new _._(_, _.length, 0),
                    0,
                    !0,
                  ),
                ).scrollIntoView(),
              );
            }
            return !0;
          }
        }
        return !1;
      }
      function _(_) {
        return function (_, _) {
          let _ = _.selection,
            _ = _ < 0 ? _.$from : _.$to,
            _ = _.depth;
          for (; _.node(_).isInline; ) {
            if (!_) return !1;
            _--;
          }
          return (
            !!_.node(_).isTextblock &&
            (_ &&
              __webpack_require__(
                _._.setSelection(
                  _._.create(_.doc, _ < 0 ? _.start(_) : _.end(_)),
                ),
              ),
            !0)
          );
        };
      }
      const _ = _(-1),
        _ = _(1);
      function _(_, _ = null) {
        return function (_, _) {
          let _ = !1;
          for (let _ = 0; _ < _.selection.ranges.length && !_; _++) {
            let {
              $from: { pos: _ },
              $to: { pos: _ },
            } = _.selection.ranges[_];
            _.doc.nodesBetween(_, _, (_, _) => {
              if (_) return !1;
              if (_.isTextblock && !_.hasMarkup(_, _))
                if (_.type == _) _ = !0;
                else {
                  let _ = _.doc.resolve(_),
                    _ = _.index();
                  _ = _.parent.canReplaceWith(_, _ + 1, _);
                }
            });
          }
          if (!_) return !1;
          if (_) {
            let _ = _._;
            for (let _ = 0; _ < _.selection.ranges.length; _++) {
              let {
                $from: { pos: _ },
                $to: { pos: _ },
              } = _.selection.ranges[_];
              _.setBlockType(_, _, _, _);
            }
            _(_.scrollIntoView());
          }
          return !0;
        };
      }
      function _(_, _ = null) {
        return function (_, _) {
          let { empty: _, $cursor: _, ranges: _ } = _.selection;
          if (
            (_ && !_) ||
            !(function (_, _, _) {
              for (let _ = 0; _ < _.length; _++) {
                let { $from: _, $to: _ } = _[_],
                  _ =
                    0 == _.depth && _.inlineContent && _.type.allowsMarkType(_);
                if (
                  (_.nodesBetween(_.pos, _.pos, (_) => {
                    if (_) return !1;
                    _ = _.inlineContent && _.type.allowsMarkType(_);
                  }),
                  _)
                )
                  return !0;
              }
              return !1;
            })(_.doc, _, _)
          )
            return !1;
          if (_)
            if (_)
              _.isInSet(_.storedMarks || _.marks())
                ? _(_._.removeStoredMark(_))
                : _(_._.addStoredMark(_.create(_)));
            else {
              let _ = !1,
                _ = _._;
              for (let _ = 0; !_ && _ < _.length; _++) {
                let { $from: _, $to: _ } = _[_];
                _ = _.doc.rangeHasMark(_.pos, _.pos, _);
              }
              for (let _ = 0; _ < _.length; _++) {
                let { $from: _, $to: _ } = _[_];
                if (_) _.removeMark(_.pos, _.pos, _);
                else {
                  let _ = _.pos,
                    _ = _.pos,
                    _ = _.nodeAfter,
                    _ = _.nodeBefore,
                    _ = _ && _.isText ? /^\s*/.exec(_.text)[0].length : 0,
                    _ = _ && _.isText ? /\s*$/.exec(_.text)[0].length : 0;
                  _ + _ < _ && ((_ += _), (_ -= _)),
                    _.addMark(_, _, _.create(_));
                }
              }
              _(_.scrollIntoView());
            }
          return !0;
        };
      }
      function _(..._) {
        return function (_, _, _) {
          for (let _ = 0; _ < _.length; _++) if (_[_](_, _, _)) return !0;
          return !1;
        };
      }
      let _ = _(
          _,
          (_, _, _) => {
            let _ = _(_, _);
            if (!_) return !1;
            let _ = _(_);
            if (!_) {
              let _ = _.blockRange(),
                _ = _ && (0, _._)(_);
              return null != _ && (_ && _(_._.lift(_, _).scrollIntoView()), !0);
            }
            let _ = _.nodeBefore;
            if (!_.type.spec.isolating && _(_, _, _)) return !0;
            if (
              0 == _.parent.content.size &&
              (_(_, "end") || _._.isSelectable(_))
            ) {
              let _ = (0, _._)(_.doc, _.before(), _.after(), _._.empty);
              if (_ && _.slice.size < _._ - _.from) {
                if (_) {
                  let _ = _._.step(_);
                  _.setSelection(
                    _(_, "end")
                      ? _._.findFrom(
                          _.doc.resolve(_.mapping.map(_.pos, -1)),
                          -1,
                        )
                      : _._.create(_.doc, _.pos - _.nodeSize),
                  ),
                    _(_.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!_.isAtom || _.depth != _.depth - 1) &&
              (_ && _(_._.delete(_.pos - _.nodeSize, _.pos).scrollIntoView()),
              !0)
            );
          },
          (_, _, _) => {
            let { $head: _, empty: _ } = _.selection,
              _ = _;
            if (!_) return !1;
            if (_.parent.isTextblock) {
              if (
                _
                  ? !__webpack_require__.endOfTextblock("backward", _)
                  : _.parentOffset > 0
              )
                return !1;
              _ = _(_);
            }
            let _ = _ && _.nodeBefore;
            return (
              !(!_ || !_._.isSelectable(_)) &&
              (_ &&
                _(
                  _._.setSelection(
                    _._.create(_.doc, _.pos - _.nodeSize),
                  ).scrollIntoView(),
                ),
              !0)
            );
          },
        ),
        _ = _(
          _,
          (_, _, _) => {
            let _ = _(_, _);
            if (!_) return !1;
            let _ = _(_);
            if (!_) return !1;
            let _ = _.nodeAfter;
            if (_(_, _, _)) return !0;
            if (
              0 == _.parent.content.size &&
              (_(_, "start") || _._.isSelectable(_))
            ) {
              let _ = (0, _._)(_.doc, _.before(), _.after(), _._.empty);
              if (_ && _.slice.size < _._ - _.from) {
                if (_) {
                  let _ = _._.step(_);
                  _.setSelection(
                    _(_, "start")
                      ? _._.findFrom(_.doc.resolve(_.mapping.map(_.pos)), 1)
                      : _._.create(_.doc, _.mapping.map(_.pos)),
                  ),
                    _(_.scrollIntoView());
                }
                return !0;
              }
            }
            return (
              !(!_.isAtom || _.depth != _.depth - 1) &&
              (_ && _(_._.delete(_.pos, _.pos + _.nodeSize).scrollIntoView()),
              !0)
            );
          },
          (_, _, _) => {
            let { $head: _, empty: _ } = _.selection,
              _ = _;
            if (!_) return !1;
            if (_.parent.isTextblock) {
              if (
                _
                  ? !__webpack_require__.endOfTextblock("forward", _)
                  : _.parentOffset < _.parent.content.size
              )
                return !1;
              _ = _(_);
            }
            let _ = _ && _.nodeAfter;
            return (
              !(!_ || !_._.isSelectable(_)) &&
              (_ &&
                _(_._.setSelection(_._.create(_.doc, _.pos)).scrollIntoView()),
              !0)
            );
          },
        );
      const _ = {
          Enter: _(
            (_, _) => {
              let { $head: __webpack_require__, $anchor: _ } = _.selection;
              return (
                !(
                  !__webpack_require__.parent.type.spec.code ||
                  !__webpack_require__.sameParent(_)
                ) && (_ && _(_._.insertText("\n").scrollIntoView()), !0)
              );
            },
            (_, _) => {
              let _ = _.selection,
                { $from: _, $to: _ } = _;
              if (
                _ instanceof _._ ||
                _.parent.inlineContent ||
                _.parent.inlineContent
              )
                return !1;
              let _ = _(_.parent.contentMatchAt(_.indexAfter()));
              if (!_ || !_.isTextblock) return !1;
              if (_) {
                let _ = (
                    !_.parentOffset && _.index() < _.parent.childCount ? _ : _
                  ).pos,
                  _ = _._.insert(_, _.createAndFill());
                _.setSelection(_._.create(_.doc, _ + 1)), _(_.scrollIntoView());
              }
              return !0;
            },
            (_, _) => {
              let { $cursor: __webpack_require__ } = _.selection;
              if (
                !__webpack_require__ ||
                __webpack_require__.parent.content.size
              )
                return !1;
              if (
                __webpack_require__.depth > 1 &&
                __webpack_require__.after() != __webpack_require__.end(-1)
              ) {
                let _ = __webpack_require__.before();
                if ((0, _._)(_.doc, _))
                  return _ && _(_._.split(_).scrollIntoView()), !0;
              }
              let _ = __webpack_require__.blockRange(),
                _ = _ && (0, _._)(_);
              return null != _ && (_ && _(_._.lift(_, _).scrollIntoView()), !0);
            },
            _,
          ),
          "Mod-Enter": _,
          Backspace: _,
          "Mod-Backspace": _,
          "Shift-Backspace": _,
          Delete: _,
          "Mod-Delete": _,
          "Mod-a": (_, _) => (_ && _(_._.setSelection(new _._(_.doc))), !0),
        },
        _ = {
          "Ctrl-h": _.Backspace,
          "Alt-Backspace": _["Mod-Backspace"],
          "Ctrl-d": _.Delete,
          "Ctrl-Alt-Backspace": _["Mod-Delete"],
          "Alt-Delete": _["Mod-Delete"],
          "Alt-d": _["Mod-Delete"],
          "Ctrl-a": _,
          "Ctrl-e": _,
        };
      for (let _ in _) _[_] = _[_];
      const _ = (
        "undefined" != typeof navigator
          ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
          : !("undefined" == typeof _ || !_.platform) &&
            "darwin" == _.platform()
      )
        ? _
        : _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_, _);
        }
        map(_, _) {
          let _ = _.resolve(_.map(this.head));
          return _.valid(_) ? new _(_) : _._.near(_);
        }
        content() {
          return _._.empty;
        }
        eq(_) {
          return _ instanceof _ && _.head == this.head;
        }
        toJSON() {
          return {
            type: "gapcursor",
            pos: this.head,
          };
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.pos)
            throw new RangeError("Invalid input for GapCursor.fromJSON");
          return new _(_.resolve(_.pos));
        }
        getBookmark() {
          return new _(this.anchor);
        }
        static valid(_) {
          let _ = _.parent;
          if (
            _.isTextblock ||
            !(function (_) {
              for (let _ = _.depth; _ >= 0; _--) {
                let _ = _.index(_),
                  _ = _.node(_);
                if (0 != _)
                  for (let _ = _.child(_ - 1); ; _ = _.lastChild) {
                    if (
                      (0 == _.childCount && !_.inlineContent) ||
                      _.isAtom ||
                      _.type.spec.isolating
                    )
                      return !0;
                    if (_.inlineContent) return !1;
                  }
                else if (_.type.spec.isolating) return !0;
              }
              return !0;
            })(_) ||
            !(function (_) {
              for (let _ = _.depth; _ >= 0; _--) {
                let _ = _.indexAfter(_),
                  _ = _.node(_);
                if (_ != _.childCount)
                  for (let _ = _.child(_); ; _ = _.firstChild) {
                    if (
                      (0 == _.childCount && !_.inlineContent) ||
                      _.isAtom ||
                      _.type.spec.isolating
                    )
                      return !0;
                    if (_.inlineContent) return !1;
                  }
                else if (_.type.spec.isolating) return !0;
              }
              return !0;
            })(_)
          )
            return !1;
          let _ = _.type.spec.allowGapCursor;
          if (null != _) return _;
          let _ = _.contentMatchAt(_.index()).defaultType;
          return _ && _.isTextblock;
        }
        static findGapCursorFrom(_, _, __webpack_require__ = !1) {
          _: for (;;) {
            if (!__webpack_require__ && _.valid(_)) return _;
            let _ = _.pos,
              _ = null;
            for (let _ = _.depth; ; _--) {
              let _ = _.node(_);
              if (_ > 0 ? _.indexAfter(_) < _.childCount : _.index(_) > 0) {
                _ = _.child(_ > 0 ? _.indexAfter(_) : _.index(_) - 1);
                break;
              }
              if (0 == _) return null;
              _ += _;
              let _ = _.doc.resolve(_);
              if (_.valid(_)) return _;
            }
            for (;;) {
              let _ = _ > 0 ? _.firstChild : _.lastChild;
              if (!_) {
                if (_.isAtom && !_.isText && !_._.isSelectable(_)) {
                  (_ = _.doc.resolve(_ + _.nodeSize * _)), (_ = !1);
                  continue _;
                }
                break;
              }
              (_ = _), (_ += _);
              let _ = _.doc.resolve(_);
              if (_.valid(_)) return _;
            }
            return null;
          }
        }
      }
      (_.prototype.visible = !1),
        (_.findFrom = _.findGapCursorFrom),
        _._.jsonID("gapcursor", _);
      class _ {
        constructor(_) {
          this.pos = _;
        }
        map(_) {
          return new _(_.map(this.pos));
        }
        resolve(_) {
          let _ = _.resolve(this.pos);
          return _.valid(_) ? new _(_) : _._.near(_);
        }
      }
      function _() {
        return new _._({
          props: {
            decorations: _,
            createSelectionBetween: (_, _, _) =>
              _.pos == _.pos && _.valid(_) ? new _(_) : null,
            handleClick: _,
            handleKeyDown: _,
            handleDOMEvents: {
              beforeinput: _,
            },
          },
        });
      }
      const _ = (0, _._)({
        ArrowLeft: _("horiz", -1),
        ArrowRight: _("horiz", 1),
        ArrowUp: _("vert", -1),
        ArrowDown: _("vert", 1),
      });
      function _(_, _) {
        const _ =
          "vert" == _ ? (_ > 0 ? "down" : "up") : _ > 0 ? "right" : "left";
        return function (_, _, _) {
          let _ = _.selection,
            _ = _ > 0 ? _.$to : _.$from,
            _ = _.empty;
          if (_ instanceof _._) {
            if (!_.endOfTextblock(_) || 0 == _.depth) return !1;
            (_ = !1), (_ = _.doc.resolve(_ > 0 ? _.after() : _.before()));
          }
          let _ = _.findGapCursorFrom(_, _, _);
          return !!_ && (_ && _(_._.setSelection(new _(_))), !0);
        };
      }
      function _(_, _, _) {
        if (!_ || !_.editable) return !1;
        let _ = _.state.doc.resolve(_);
        if (!_.valid(_)) return !1;
        let _ = _.posAtCoords({
          left: _.clientX,
          top: _.clientY,
        });
        return (
          !(
            _ &&
            _.inside > -1 &&
            _._.isSelectable(_.state.doc.nodeAt(_.inside))
          ) && (_.dispatch(_.state._.setSelection(new _(_))), !0)
        );
      }
      function _(_, _) {
        if (
          "insertCompositionText" != _.inputType ||
          !(_.state.selection instanceof _)
        )
          return !1;
        let { $from: __webpack_require__ } = _.state.selection,
          _ = __webpack_require__.parent
            .contentMatchAt(__webpack_require__.index())
            .findWrapping(_.state.schema.nodes.text);
        if (!_) return !1;
        let _ = _._.empty;
        for (let _ = _.length - 1; _ >= 0; _--)
          _ = _._.from(_[_].createAndFill(null, _));
        let _ = _.state._.replace(
          __webpack_require__.pos,
          __webpack_require__.pos,
          new _._(_, 0, 0),
        );
        return (
          _.setSelection(_._.near(_.doc.resolve(__webpack_require__.pos + 1))),
          _.dispatch(_),
          !1
        );
      }
      function _(_) {
        if (!(_.selection instanceof _)) return null;
        let _ = document.createElement("div");
        return (
          (_.className = "ProseMirror-gapcursor"),
          _._.create(_.doc, [
            _._.widget(_.selection.head, _, {
              key: "gapcursor",
            }),
          ])
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      for (
        var _ = {
            8: "Backspace",
            9: "Tab",
            10: "Enter",
            12: "NumLock",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            44: "PrintScreen",
            45: "Insert",
            46: "Delete",
            59: ";",
            61: "=",
            91: "Meta",
            92: "Meta",
            106: "*",
            107: "+",
            108: ",",
            109: "-",
            110: ".",
            111: "/",
            144: "NumLock",
            145: "ScrollLock",
            160: "Shift",
            161: "Shift",
            162: "Control",
            163: "Control",
            164: "Alt",
            165: "Alt",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'",
          },
          _ = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "(",
            59: ":",
            61: "+",
            173: "_",
            186: ":",
            187: "+",
            188: "<",
            189: "_",
            190: ">",
            191: "?",
            192: "~",
            219: "{",
            220: "|",
            221: "}",
            222: '"',
          },
          _ = "undefined" != typeof navigator && /Mac/.test(navigator.platform),
          _ =
            "undefined" != typeof navigator &&
            /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
              navigator.userAgent,
            ),
          _ = 0;
        _ < 10;
        _++
      )
        _[48 + _] = _[96 + _] = String(_);
      for (_ = 1; _ <= 24; _++) _[_ + 111] = "F" + _;
      for (_ = 65; _ <= 90; _++)
        (_[_] = String.fromCharCode(_ + 32)), (_[_] = String.fromCharCode(_));
      for (var _ in _) _.hasOwnProperty(_) || (_[_] = _[_]);
      var _ = __webpack_require__("chunkid");
      const _ =
        "undefined" != typeof navigator &&
        /Mac|iP(hone|[oa]d)/.test(navigator.platform);
      function _(_) {
        let _,
          _,
          _,
          _,
          _ = _.split(/-(?!$)/),
          _ = _[_.length - 1];
        "Space" == _ && (_ = " ");
        for (let _ = 0; _ < _.length - 1; _++) {
          let _ = _[_];
          if (/^(cmd|meta|m)$/i.test(_)) _ = !0;
          else if (/^a(lt)?$/i.test(_)) _ = !0;
          else if (/^(c|ctrl|control)$/i.test(_)) _ = !0;
          else if (/^s(hift)?$/i.test(_)) _ = !0;
          else {
            if (!/^mod$/i.test(_))
              throw new Error("Unrecognized modifier name: " + _);
            _ ? (_ = !0) : (_ = !0);
          }
        }
        return (
          _ && (_ = "Alt-" + _),
          _ && (_ = "Ctrl-" + _),
          _ && (_ = "Meta-" + _),
          _ && (_ = "Shift-" + _),
          _
        );
      }
      function _(_, _, __webpack_require__ = !0) {
        return (
          _.altKey && (_ = "Alt-" + _),
          _.ctrlKey && (_ = "Ctrl-" + _),
          _.metaKey && (_ = "Meta-" + _),
          __webpack_require__ && _.shiftKey && (_ = "Shift-" + _),
          _
        );
      }
      function _(_) {
        return new _._({
          props: {
            handleKeyDown: _(_),
          },
        });
      }
      function _(_) {
        let _ = (function (_) {
          let _ = Object.create(null);
          for (let _ in _) _[_(_)] = _[_];
          return _;
        })(_);
        return function (_, _) {
          let _,
            _ = (function (_) {
              var _ =
                (!(
                  (_ && _.metaKey && _.shiftKey && !_.ctrlKey && !_.altKey) ||
                  (_ && _.shiftKey && _.key && 1 == _.key.length) ||
                  "Unidentified" == _.key
                ) &&
                  _.key) ||
                (_.shiftKey ? _ : _)[_.keyCode] ||
                _.key ||
                "Unidentified";
              return (
                "Esc" == _ && (_ = "Escape"),
                "Del" == _ && (_ = "Delete"),
                "Left" == _ && (_ = "ArrowLeft"),
                "Up" == _ && (_ = "ArrowUp"),
                "Right" == _ && (_ = "ArrowRight"),
                "Down" == _ && (_ = "ArrowDown"),
                _
              );
            })(_),
            _ = _[_(_, _)];
          if (_ && _(_.state, _.dispatch, _)) return !0;
          if (1 == _.length && " " != _) {
            if (_.shiftKey) {
              let _ = _[_(_, _, !1)];
              if (_ && _(_.state, _.dispatch, _)) return !0;
            }
            if (
              (_.shiftKey || _.altKey || _.metaKey || _.charCodeAt(0) > 127) &&
              (_ = _[_.keyCode]) &&
              _ != _
            ) {
              let _ = _[_(_, _)];
              if (_ && _(_.state, _.dispatch, _)) return !0;
            }
          }
          return !1;
        };
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      function _(_) {
        this.content = _;
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
      }),
        (_.prototype = {
          constructor: _,
          find: function (_) {
            for (var _ = 0; _ < this.content.length; _ += 2)
              if (this.content[_] === _) return _;
            return -1;
          },
          get: function (_) {
            var _ = this.find(_);
            return -1 == _ ? void 0 : this.content[_ + 1];
          },
          update: function (_, _, _) {
            var _ = _ && _ != _ ? this.remove(_) : this,
              _ = _.find(_),
              _ = _.content.slice();
            return (
              -1 == _ ? _.push(_ || _, _) : ((_[_ + 1] = _), _ && (_[_] = _)),
              new _(_)
            );
          },
          remove: function (_) {
            var _ = this.find(_);
            if (-1 == _) return this;
            var _ = this.content.slice();
            return __webpack_require__.splice(_, 2), new _(_);
          },
          addToStart: function (_, _) {
            return new _([_, _].concat(this.remove(_).content));
          },
          addToEnd: function (_, _) {
            var _ = this.remove(_).content.slice();
            return __webpack_require__.push(_, _), new _(_);
          },
          addBefore: function (_, _, _) {
            var _ = this.remove(_),
              _ = _.content.slice(),
              _ = _.find(_);
            return _.splice(-1 == _ ? _.length : _, 0, _, _), new _(_);
          },
          forEach: function (_) {
            for (var _ = 0; _ < this.content.length; _ += 2)
              _(this.content[_], this.content[_ + 1]);
          },
          prepend: function (_) {
            return (_ = _.from(_)).size
              ? new _(_.content.concat(this.subtract(_).content))
              : this;
          },
          append: function (_) {
            return (_ = _.from(_)).size
              ? new _(this.subtract(_).content.concat(_.content))
              : this;
          },
          subtract: function (_) {
            var _ = this;
            _ = _.from(_);
            for (var _ = 0; _ < _.content.length; _ += 2)
              _ = _.remove(_.content[_]);
            return _;
          },
          toObject: function () {
            var _ = {};
            return (
              this.forEach(function (_, _) {
                _[_] = _;
              }),
              _
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
        (_.from = function (_) {
          if (_ instanceof _) return _;
          var _ = [];
          if (_) for (var _ in _) _.push(_, _[_]);
          return new _(_);
        });
      const _ = _;
      function _(_, _, _) {
        for (let _ = 0; ; _++) {
          if (_ == _.childCount || _ == _.childCount)
            return _.childCount == _.childCount ? null : _;
          let _ = _.child(_),
            _ = _.child(_);
          if (_ != _) {
            if (!_.sameMarkup(_)) return _;
            if (_.isText && _.text != _.text) {
              for (let _ = 0; _.text[_] == _.text[_]; _++) _++;
              return _;
            }
            if (_.content.size || _.content.size) {
              let _ = _(_.content, _.content, _ + 1);
              if (null != _) return _;
            }
            _ += _.nodeSize;
          } else _ += _.nodeSize;
        }
      }
      function _(_, _, _, _) {
        for (let _ = _.childCount, _ = _.childCount; ; ) {
          if (0 == _ || 0 == _)
            return _ == _
              ? null
              : {
                  _: _,
                  _: _,
                };
          let _ = _.child(--_),
            _ = _.child(--_),
            _ = _.nodeSize;
          if (_ != _) {
            if (!_.sameMarkup(_))
              return {
                _: _,
                _: _,
              };
            if (_.isText && _.text != _.text) {
              let _ = 0,
                _ = Math.min(_.text.length, _.text.length);
              for (
                ;
                _ < _ &&
                _.text[_.text.length - _ - 1] == _.text[_.text.length - _ - 1];
              )
                _++, _--, _--;
              return {
                _: _,
                _: _,
              };
            }
            if (_.content.size || _.content.size) {
              let _ = _(_.content, _.content, _ - 1, _ - 1);
              if (_) return _;
            }
            (_ -= _), (_ -= _);
          } else (_ -= _), (_ -= _);
        }
      }
      class _ {
        constructor(_, _) {
          if (((this.content = _), (this.size = _ || 0), null == _))
            for (let _ = 0; _ < _.length; _++) this.size += _[_].nodeSize;
        }
        nodesBetween(_, _, _, _ = 0, _) {
          for (let _ = 0, _ = 0; _ < _; _++) {
            let _ = this.content[_],
              _ = _ + _.nodeSize;
            if (
              _ > _ &&
              !1 !== __webpack_require__(_, _ + _, _ || null, _) &&
              _.content.size
            ) {
              let _ = _ + 1;
              _.nodesBetween(
                Math.max(0, _ - _),
                Math.min(_.content.size, _ - _),
                _,
                _ + _,
              );
            }
            _ = _;
          }
        }
        descendants(_) {
          this.nodesBetween(0, this.size, _);
        }
        textBetween(_, _, _, _) {
          let _ = "",
            _ = !0;
          return (
            this.nodesBetween(
              _,
              _,
              (_, _) => {
                let _ = _.isText
                  ? _.text.slice(Math.max(_, _) - _, _ - _)
                  : _.isLeaf
                    ? _
                      ? "function" == typeof _
                        ? _(_)
                        : _
                      : _.type.spec.leafText
                        ? _.type.spec.leafText(_)
                        : ""
                    : "";
                _.isBlock &&
                  ((_.isLeaf && _) || _.isTextblock) &&
                  _ &&
                  (_ ? (_ = !1) : (_ += _)),
                  (_ += _);
              },
              0,
            ),
            _
          );
        }
        append(_) {
          if (!_.size) return this;
          if (!this.size) return _;
          let _ = this.lastChild,
            _ = _.firstChild,
            _ = this.content.slice(),
            _ = 0;
          for (
            _.isText &&
            _.sameMarkup(_) &&
            ((_[_.length - 1] = _.withText(_.text + _.text)), (_ = 1));
            _ < _.content.length;
            _++
          )
            _.push(_.content[_]);
          return new _(_, this.size + _.size);
        }
        cut(_, _ = this.size) {
          if (0 == _ && _ == this.size) return this;
          let _ = [],
            _ = 0;
          if (_ > _)
            for (let _ = 0, _ = 0; _ < _; _++) {
              let _ = this.content[_],
                _ = _ + _.nodeSize;
              _ > _ &&
                ((_ < _ || _ > _) &&
                  (_ = _.isText
                    ? _.cut(Math.max(0, _ - _), Math.min(_.text.length, _ - _))
                    : _.cut(
                        Math.max(0, _ - _ - 1),
                        Math.min(_.content.size, _ - _ - 1),
                      )),
                __webpack_require__.push(_),
                (_ += _.nodeSize)),
                (_ = _);
            }
          return new _(_, _);
        }
        cutByIndex(_, _) {
          return _ == _
            ? _.empty
            : 0 == _ && _ == this.content.length
              ? this
              : new _(this.content.slice(_, _));
        }
        replaceChild(_, _) {
          let _ = this.content[_];
          if (_ == _) return this;
          let _ = this.content.slice(),
            _ = this.size + _.nodeSize - _.nodeSize;
          return (_[_] = _), new _(_, _);
        }
        addToStart(_) {
          return new _([_].concat(this.content), this.size + _.nodeSize);
        }
        addToEnd(_) {
          return new _(this.content.concat(_), this.size + _.nodeSize);
        }
        eq(_) {
          if (this.content.length != _.content.length) return !1;
          for (let _ = 0; _ < this.content.length; _++)
            if (!this.content[_]._(_.content[_])) return !1;
          return !0;
        }
        get firstChild() {
          return this.content.length ? this.content[0] : null;
        }
        get lastChild() {
          return this.content.length
            ? this.content[this.content.length - 1]
            : null;
        }
        get childCount() {
          return this.content.length;
        }
        child(_) {
          let _ = this.content[_];
          if (!_)
            throw new RangeError("Index " + _ + " out of range for " + this);
          return _;
        }
        maybeChild(_) {
          return this.content[_] || null;
        }
        forEach(_) {
          for (let _ = 0, _ = 0; _ < this.content.length; _++) {
            let _ = this.content[_];
            _(_, _, _), (_ += _.nodeSize);
          }
        }
        findDiffStart(_, _ = 0) {
          return _(this, _, _);
        }
        findDiffEnd(_, _ = this.size, __webpack_require__ = _.size) {
          return _(this, _, _, __webpack_require__);
        }
        findIndex(_, _ = -1) {
          if (0 == _) return _(0, _);
          if (_ == this.size) return _(this.content.length, _);
          if (_ > this.size || _ < 0)
            throw new RangeError(`Position ${_} outside of fragment (${this})`);
          for (let _ = 0, _ = 0; ; _++) {
            let _ = _ + this.child(_).nodeSize;
            if (_ >= _) return _ == _ || _ > 0 ? _(_ + 1, _) : _(_, _);
            _ = _;
          }
        }
        toString() {
          return "<" + this.toStringInner() + ">";
        }
        toStringInner() {
          return this.content.join(", ");
        }
        toJSON() {
          return this.content.length
            ? this.content.map((_) => _.toJSON())
            : null;
        }
        static fromJSON(_, _) {
          if (!_) return _.empty;
          if (!Array.isArray(_))
            throw new RangeError("Invalid input for Fragment.fromJSON");
          return new _(_.map(_.nodeFromJSON));
        }
        static fromArray(_) {
          if (!_.length) return _.empty;
          let _,
            _ = 0;
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_];
            (_ += _.nodeSize),
              _ && _.isText && _[_ - 1].sameMarkup(_)
                ? (_ || (_ = _.slice(0, _)),
                  (_[_.length - 1] = _.withText(_[_.length - 1].text + _.text)))
                : _ && _.push(_);
          }
          return new _(_ || _, _);
        }
        static from(_) {
          if (!_) return _.empty;
          if (_ instanceof _) return _;
          if (Array.isArray(_)) return this.fromArray(_);
          if (_.attrs) return new _([_], _.nodeSize);
          throw new RangeError(
            "Can not convert " +
              _ +
              " to a Fragment" +
              (_.nodesBetween
                ? " (looks like multiple versions of prosemirror-model were loaded)"
                : ""),
          );
        }
      }
      _.empty = new _([], 0);
      const _ = {
        index: 0,
        offset: 0,
      };
      function _(_, _) {
        return (_.index = _), (_.offset = _), _;
      }
      function _(_, _) {
        if (_ === _) return !0;
        if (!_ || "object" != typeof _ || !_ || "object" != typeof _) return !1;
        let _ = Array.isArray(_);
        if (Array.isArray(_) != _) return !1;
        if (_) {
          if (_.length != _.length) return !1;
          for (let _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
        } else {
          for (let _ in _) if (!(_ in _) || !_(_[_], _[_])) return !1;
          for (let _ in _) if (!(_ in _)) return !1;
        }
        return !0;
      }
      class _ {
        constructor(_, _) {
          (this.type = _), (this.attrs = _);
        }
        addToSet(_) {
          let _,
            _ = !1;
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_];
            if (this._(_)) return _;
            if (this.type.excludes(_.type)) _ || (_ = _.slice(0, _));
            else {
              if (_.type.excludes(this.type)) return _;
              !_ &&
                _.type.rank > this.type.rank &&
                (_ || (_ = _.slice(0, _)), _.push(this), (_ = !0)),
                _ && _.push(_);
            }
          }
          return _ || (_ = _.slice()), _ || _.push(this), _;
        }
        removeFromSet(_) {
          for (let _ = 0; _ < _.length; _++)
            if (this._(_[_])) return _.slice(0, _).concat(_.slice(_ + 1));
          return _;
        }
        isInSet(_) {
          for (let _ = 0; _ < _.length; _++) if (this._(_[_])) return !0;
          return !1;
        }
        eq(_) {
          return this == _ || (this.type == _.type && _(this.attrs, _.attrs));
        }
        toJSON() {
          let _ = {
            type: this.type.name,
          };
          for (let _ in this.attrs) {
            _.attrs = this.attrs;
            break;
          }
          return _;
        }
        static fromJSON(_, _) {
          if (!_) throw new RangeError("Invalid input for Mark.fromJSON");
          let _ = _.marks[_.type];
          if (!_)
            throw new RangeError(
              `There is no mark type ${_.type} in this schema`,
            );
          return __webpack_require__.create(_.attrs);
        }
        static sameSet(_, _) {
          if (_ == _) return !0;
          if (_.length != _.length) return !1;
          for (let _ = 0; _ < _.length; _++) if (!_[_]._(_[_])) return !1;
          return !0;
        }
        static setFrom(_) {
          if (!_ || (Array.isArray(_) && 0 == _.length)) return _.none;
          if (_ instanceof _) return [_];
          let _ = _.slice();
          return _.sort((_, _) => _.type.rank - _.type.rank), _;
        }
      }
      _.none = [];
      class _ extends Error {}
      class _ {
        constructor(_, _, _) {
          (this.content = _), (this.openStart = _), (this.openEnd = _);
        }
        get size() {
          return this.content.size - this.openStart - this.openEnd;
        }
        insertAt(_, _) {
          let _ = _(this.content, _ + this.openStart, _);
          return _ && new _(_, this.openStart, this.openEnd);
        }
        removeBetween(_, _) {
          return new _(
            _(this.content, _ + this.openStart, _ + this.openStart),
            this.openStart,
            this.openEnd,
          );
        }
        eq(_) {
          return (
            this.content._(_.content) &&
            this.openStart == _.openStart &&
            this.openEnd == _.openEnd
          );
        }
        toString() {
          return this.content + "(" + this.openStart + "," + this.openEnd + ")";
        }
        toJSON() {
          if (!this.content.size) return null;
          let _ = {
            content: this.content.toJSON(),
          };
          return (
            this.openStart > 0 && (_.openStart = this.openStart),
            this.openEnd > 0 && (_.openEnd = this.openEnd),
            _
          );
        }
        static fromJSON(_, _) {
          if (!_) return _.empty;
          let _ = _.openStart || 0,
            _ = _.openEnd || 0;
          if ("number" != typeof _ || "number" != typeof _)
            throw new RangeError("Invalid input for Slice.fromJSON");
          return new _(_.fromJSON(_, _.content), _, _);
        }
        static maxOpen(_, _ = !0) {
          let _ = 0,
            _ = 0;
          for (
            let _ = _.firstChild;
            _ && !_.isLeaf && (_ || !_.type.spec.isolating);
            _ = _.firstChild
          )
            _++;
          for (
            let _ = _.lastChild;
            _ && !_.isLeaf && (_ || !_.type.spec.isolating);
            _ = _.lastChild
          )
            _++;
          return new _(_, _, _);
        }
      }
      function _(_, _, _) {
        let { index: _, offset: _ } = _.findIndex(_),
          _ = _.maybeChild(_),
          { index: _, offset: _ } = _.findIndex(_);
        if (_ == _ || _.isText) {
          if (_ != _ && !_.child(_).isText)
            throw new RangeError("Removing non-flat range");
          return _.cut(0, _).append(_.cut(_));
        }
        if (_ != _) throw new RangeError("Removing non-flat range");
        return _.replaceChild(_, _.copy(_(_.content, _ - _ - 1, _ - _ - 1)));
      }
      function _(_, _, _, _) {
        let { index: _, offset: _ } = _.findIndex(_),
          _ = _.maybeChild(_);
        if (_ == _ || _.isText)
          return _ && !_.canReplace(_, _, _)
            ? null
            : _.cut(0, _).append(_).append(_.cut(_));
        let _ = _(_.content, _ - _ - 1, _);
        return _ && _.replaceChild(_, _.copy(_));
      }
      function _(_, _, _) {
        if (_.openStart > _.depth)
          throw new _("Inserted content deeper than insertion position");
        if (_.depth - _.openStart != _.depth - _.openEnd)
          throw new _("Inconsistent open depths");
        return _(_, _, _, 0);
      }
      function _(_, _, _, _) {
        let _ = _.index(_),
          _ = _.node(_);
        if (_ == _.index(_) && _ < _.depth - _.openStart) {
          let _ = _(_, _, _, _ + 1);
          return _.copy(_.content.replaceChild(_, _));
        }
        if (_.content.size) {
          if (_.openStart || _.openEnd || _.depth != _ || _.depth != _) {
            let { start: _, end: _ } = (function (_, _) {
              let _ = _.depth - _.openStart,
                _ = _.node(_).copy(_.content);
              for (let _ = _ - 1; _ >= 0; _--) _ = _.node(_).copy(_.from(_));
              return {
                start: _.resolveNoCache(_.openStart + _),
                end: _.resolveNoCache(_.content.size - _.openEnd - _),
              };
            })(_, _);
            return _(_, _(_, _, _, _, _));
          }
          {
            let _ = _.parent,
              _ = _.content;
            return _(
              _,
              _.cut(0, _.parentOffset)
                .append(_.content)
                .append(_.cut(_.parentOffset)),
            );
          }
        }
        return _(_, _(_, _, _));
      }
      function _(_, _) {
        if (!_.type.compatibleContent(_.type))
          throw new _("Cannot join " + _.type.name + " onto " + _.type.name);
      }
      function _(_, _, _) {
        let _ = _.node(_);
        return _(_, _.node(_)), _;
      }
      function _(_, _) {
        let _ = _.length - 1;
        _ >= 0 && _.isText && _.sameMarkup(_[_])
          ? (_[_] = _.withText(_[_].text + _.text))
          : _.push(_);
      }
      function _(_, _, _, _) {
        let _ = (_ || _).node(_),
          _ = 0,
          _ = _ ? _.index(_) : _.childCount;
        _ &&
          ((_ = _.index(_)),
          _.depth > _ ? _++ : _.textOffset && (_(_.nodeAfter, _), _++));
        for (let _ = _; _ < _; _++) _(_.child(_), _);
        _ && _.depth == _ && _.textOffset && _(_.nodeBefore, _);
      }
      function _(_, _) {
        return _.type.checkContent(_), _.copy(_);
      }
      function _(_, _, _, _, _) {
        let _ = _.depth > _ && _(_, _, _ + 1),
          _ = _.depth > _ && _(_, _, _ + 1),
          _ = [];
        return (
          _(null, _, _, _),
          _ && _ && _.index(_) == __webpack_require__.index(_)
            ? (_(_, _), _(_(_, _(_, _, _, _, _ + 1)), _))
            : (_ && _(_(_, _(_, _, _ + 1)), _),
              _(_, _, _, _),
              _ && _(_(_, _(_, _, _ + 1)), _)),
          _(_, null, _, _),
          new _(_)
        );
      }
      function _(_, _, _) {
        let _ = [];
        if ((_(null, _, _, _), _.depth > _)) {
          _(_(_(_, _, _ + 1), _(_, _, _ + 1)), _);
        }
        return _(_, null, _, _), new _(_);
      }
      _.empty = new _(_.empty, 0, 0);
      class _ {
        constructor(_, _, _) {
          (this.pos = _),
            (this.path = _),
            (this.parentOffset = _),
            (this.depth = _.length / 3 - 1);
        }
        resolveDepth(_) {
          return null == _ ? this.depth : _ < 0 ? this.depth + _ : _;
        }
        get parent() {
          return this.node(this.depth);
        }
        get doc() {
          return this.node(0);
        }
        node(_) {
          return this.path[3 * this.resolveDepth(_)];
        }
        index(_) {
          return this.path[3 * this.resolveDepth(_) + 1];
        }
        indexAfter(_) {
          return (
            (_ = this.resolveDepth(_)),
            this.index(_) + (_ != this.depth || this.textOffset ? 1 : 0)
          );
        }
        start(_) {
          return 0 == (_ = this.resolveDepth(_)) ? 0 : this.path[3 * _ - 1] + 1;
        }
        end(_) {
          return (
            (_ = this.resolveDepth(_)),
            this.start(_) + this.node(_).content.size
          );
        }
        before(_) {
          if (!(_ = this.resolveDepth(_)))
            throw new RangeError(
              "There is no position before the top-level node",
            );
          return _ == this.depth + 1 ? this.pos : this.path[3 * _ - 1];
        }
        after(_) {
          if (!(_ = this.resolveDepth(_)))
            throw new RangeError(
              "There is no position after the top-level node",
            );
          return _ == this.depth + 1
            ? this.pos
            : this.path[3 * _ - 1] + this.path[3 * _].nodeSize;
        }
        get textOffset() {
          return this.pos - this.path[this.path.length - 1];
        }
        get nodeAfter() {
          let _ = this.parent,
            _ = this.index(this.depth);
          if (_ == _.childCount) return null;
          let _ = this.pos - this.path[this.path.length - 1],
            _ = _.child(_);
          return _ ? _.child(_).cut(_) : _;
        }
        get nodeBefore() {
          let _ = this.index(this.depth),
            _ = this.pos - this.path[this.path.length - 1];
          return _
            ? this.parent.child(_).cut(0, _)
            : 0 == _
              ? null
              : this.parent.child(_ - 1);
        }
        posAtIndex(_, _) {
          _ = this.resolveDepth(_);
          let _ = this.path[3 * _],
            _ = 0 == _ ? 0 : this.path[3 * _ - 1] + 1;
          for (let _ = 0; _ < _; _++)
            _ += __webpack_require__.child(_).nodeSize;
          return _;
        }
        marks() {
          let _ = this.parent,
            _ = this.index();
          if (0 == _.content.size) return _.none;
          if (this.textOffset) return _.child(_).marks;
          let _ = _.maybeChild(_ - 1),
            _ = _.maybeChild(_);
          if (!_) {
            let _ = _;
            (_ = _), (_ = _);
          }
          let _ = _.marks;
          for (var _ = 0; _ < _.length; _++)
            !1 !== _[_].type.spec.inclusive ||
              (_ && _[_].isInSet(_.marks)) ||
              (_ = _[_--].removeFromSet(_));
          return _;
        }
        marksAcross(_) {
          let _ = this.parent.maybeChild(this.index());
          if (!_ || !_.isInline) return null;
          let _ = _.marks,
            _ = _.parent.maybeChild(_.index());
          for (var _ = 0; _ < _.length; _++)
            !1 !== _[_].type.spec.inclusive ||
              (_ && _[_].isInSet(_.marks)) ||
              (_ = _[_--].removeFromSet(_));
          return _;
        }
        sharedDepth(_) {
          for (let _ = this.depth; _ > 0; _--)
            if (this.start(_) <= _ && this.end(_) >= _) return _;
          return 0;
        }
        blockRange(_ = this, _) {
          if (_.pos < this.pos) return _.blockRange(this);
          for (
            let _ =
              this.depth -
              (this.parent.inlineContent || this.pos == _.pos ? 1 : 0);
            _ >= 0;
            _--
          )
            if (_.pos <= this.end(_) && (!_ || _(this.node(_))))
              return new _(this, _, _);
          return null;
        }
        sameParent(_) {
          return this.pos - this.parentOffset == _.pos - _.parentOffset;
        }
        max(_) {
          return _.pos > this.pos ? _ : this;
        }
        min(_) {
          return _.pos < this.pos ? _ : this;
        }
        toString() {
          let _ = "";
          for (let _ = 1; _ <= this.depth; _++)
            _ +=
              (_ ? "/" : "") + this.node(_).type.name + "_" + this.index(_ - 1);
          return _ + ":" + this.parentOffset;
        }
        static resolve(_, _) {
          if (!(_ >= 0 && _ <= _.content.size))
            throw new RangeError("Position " + _ + " out of range");
          let _ = [],
            _ = 0,
            _ = _;
          for (let _ = _; ; ) {
            let { index: _, offset: _ } = _.content.findIndex(_),
              _ = _ - _;
            if ((__webpack_require__.push(_, _, _ + _), !_)) break;
            if (((_ = _.child(_)), _.isText)) break;
            (_ = _ - 1), (_ += _ + 1);
          }
          return new _(_, _, _);
        }
        static resolveCached(_, _) {
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_];
            if (_.pos == _ && _.doc == _) return _;
          }
          let _ = (_[_] = _.resolve(_, _));
          return (_ = (_ + 1) % _), _;
        }
      }
      let _ = [],
        _ = 0,
        _ = 12;
      class _ {
        constructor(_, _, _) {
          (this.$from = _), (this.$to = _), (this.depth = _);
        }
        get start() {
          return this.$from.before(this.depth + 1);
        }
        get end() {
          return this.$to.after(this.depth + 1);
        }
        get parent() {
          return this.$from.node(this.depth);
        }
        get startIndex() {
          return this.$from.index(this.depth);
        }
        get endIndex() {
          return this.$to.indexAfter(this.depth);
        }
      }
      const _ = Object.create(null);
      class _ {
        constructor(_, _, _, _ = _.none) {
          (this.type = _),
            (this.attrs = _),
            (this.marks = _),
            (this.content = _ || _.empty);
        }
        get nodeSize() {
          return this.isLeaf ? 1 : 2 + this.content.size;
        }
        get childCount() {
          return this.content.childCount;
        }
        child(_) {
          return this.content.child(_);
        }
        maybeChild(_) {
          return this.content.maybeChild(_);
        }
        forEach(_) {
          this.content.forEach(_);
        }
        nodesBetween(_, _, _, _ = 0) {
          this.content.nodesBetween(_, _, _, _, this);
        }
        descendants(_) {
          this.nodesBetween(0, this.content.size, _);
        }
        get textContent() {
          return this.isLeaf && this.type.spec.leafText
            ? this.type.spec.leafText(this)
            : this.textBetween(0, this.content.size, "");
        }
        textBetween(_, _, _, _) {
          return this.content.textBetween(_, _, _, _);
        }
        get firstChild() {
          return this.content.firstChild;
        }
        get lastChild() {
          return this.content.lastChild;
        }
        eq(_) {
          return this == _ || (this.sameMarkup(_) && this.content._(_.content));
        }
        sameMarkup(_) {
          return this.hasMarkup(_.type, _.attrs, _.marks);
        }
        hasMarkup(_, _, _) {
          return (
            this.type == _ &&
            _(this.attrs, _ || _.defaultAttrs || _) &&
            _.sameSet(this.marks, _ || _.none)
          );
        }
        copy(_ = null) {
          return _ == this.content
            ? this
            : new _(this.type, this.attrs, _, this.marks);
        }
        mark(_) {
          return _ == this.marks
            ? this
            : new _(this.type, this.attrs, this.content, _);
        }
        cut(_, _ = this.content.size) {
          return 0 == _ && _ == this.content.size
            ? this
            : this.copy(this.content.cut(_, _));
        }
        slice(_, _ = this.content.size, __webpack_require__ = !1) {
          if (_ == _) return _.empty;
          let _ = this.resolve(_),
            _ = this.resolve(_),
            _ = __webpack_require__ ? 0 : _.sharedDepth(_),
            _ = _.start(_),
            _ = _.node(_).content.cut(_.pos - _, _.pos - _);
          return new _(_, _.depth - _, _.depth - _);
        }
        replace(_, _, _) {
          return _(this.resolve(_), this.resolve(_), _);
        }
        nodeAt(_) {
          for (let _ = this; ; ) {
            let { index: __webpack_require__, offset: _ } =
              _.content.findIndex(_);
            if (((_ = _.maybeChild(__webpack_require__)), !_)) return null;
            if (_ == _ || _.isText) return _;
            _ -= _ + 1;
          }
        }
        childAfter(_) {
          let { index: _, offset: __webpack_require__ } =
            this.content.findIndex(_);
          return {
            node: this.content.maybeChild(_),
            index: _,
            offset: __webpack_require__,
          };
        }
        childBefore(_) {
          if (0 == _)
            return {
              node: null,
              index: 0,
              offset: 0,
            };
          let { index: _, offset: __webpack_require__ } =
            this.content.findIndex(_);
          if (__webpack_require__ < _)
            return {
              node: this.content.child(_),
              index: _,
              offset: __webpack_require__,
            };
          let _ = this.content.child(_ - 1);
          return {
            node: _,
            index: _ - 1,
            offset: __webpack_require__ - _.nodeSize,
          };
        }
        resolve(_) {
          return _.resolveCached(this, _);
        }
        resolveNoCache(_) {
          return _.resolve(this, _);
        }
        rangeHasMark(_, _, _) {
          let _ = !1;
          return (
            _ > _ &&
              this.nodesBetween(
                _,
                _,
                (_) => (__webpack_require__.isInSet(_.marks) && (_ = !0), !_),
              ),
            _
          );
        }
        get isBlock() {
          return this.type.isBlock;
        }
        get isTextblock() {
          return this.type.isTextblock;
        }
        get inlineContent() {
          return this.type.inlineContent;
        }
        get isInline() {
          return this.type.isInline;
        }
        get isText() {
          return this.type.isText;
        }
        get isLeaf() {
          return this.type.isLeaf;
        }
        get isAtom() {
          return this.type.isAtom;
        }
        toString() {
          if (this.type.spec.toDebugString)
            return this.type.spec.toDebugString(this);
          let _ = this.type.name;
          return (
            this.content.size &&
              (_ += "(" + this.content.toStringInner() + ")"),
            _(this.marks, _)
          );
        }
        contentMatchAt(_) {
          let _ = this.type.contentMatch.matchFragment(this.content, 0, _);
          if (!_)
            throw new Error(
              "Called contentMatchAt on a node with invalid content",
            );
          return _;
        }
        canReplace(
          _,
          _,
          __webpack_require__ = _.empty,
          _ = 0,
          _ = __webpack_require__.childCount,
        ) {
          let _ = this.contentMatchAt(_).matchFragment(
              __webpack_require__,
              _,
              _,
            ),
            _ = _ && _.matchFragment(this.content, _);
          if (!_ || !_.validEnd) return !1;
          for (let _ = _; _ < _; _++)
            if (!this.type.allowsMarks(__webpack_require__.child(_).marks))
              return !1;
          return !0;
        }
        canReplaceWith(_, _, _, _) {
          if (_ && !this.type.allowsMarks(_)) return !1;
          let _ = this.contentMatchAt(_).matchType(_),
            _ = _ && _.matchFragment(this.content, _);
          return !!_ && _.validEnd;
        }
        canAppend(_) {
          return _.content.size
            ? this.canReplace(this.childCount, this.childCount, _.content)
            : this.type.compatibleContent(_.type);
        }
        check() {
          this.type.checkContent(this.content);
          let _ = _.none;
          for (let _ = 0; _ < this.marks.length; _++)
            _ = this.marks[_].addToSet(_);
          if (!_.sameSet(_, this.marks))
            throw new RangeError(
              `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((_) => _.type.name)}`,
            );
          this.content.forEach((_) => _.check());
        }
        toJSON() {
          let _ = {
            type: this.type.name,
          };
          for (let _ in this.attrs) {
            _.attrs = this.attrs;
            break;
          }
          return (
            this.content.size && (_.content = this.content.toJSON()),
            this.marks.length && (_.marks = this.marks.map((_) => _.toJSON())),
            _
          );
        }
        static fromJSON(_, _) {
          if (!_) throw new RangeError("Invalid input for Node.fromJSON");
          let _ = null;
          if (_.marks) {
            if (!Array.isArray(_.marks))
              throw new RangeError("Invalid mark data for Node.fromJSON");
            _ = _.marks.map(_.markFromJSON);
          }
          if ("text" == _.type) {
            if ("string" != typeof _.text)
              throw new RangeError("Invalid text node in JSON");
            return _.text(_.text, _);
          }
          let _ = _.fromJSON(_, _.content);
          return _.nodeType(_.type).create(_.attrs, _, _);
        }
      }
      _.prototype.text = void 0;
      class _ extends _ {
        constructor(_, _, _, _) {
          if ((super(_, _, null, _), !_))
            throw new RangeError("Empty text nodes are not allowed");
          this.text = _;
        }
        toString() {
          return this.type.spec.toDebugString
            ? this.type.spec.toDebugString(this)
            : _(this.marks, JSON.stringify(this.text));
        }
        get textContent() {
          return this.text;
        }
        textBetween(_, _) {
          return this.text.slice(_, _);
        }
        get nodeSize() {
          return this.text.length;
        }
        mark(_) {
          return _ == this.marks
            ? this
            : new _(this.type, this.attrs, this.text, _);
        }
        withText(_) {
          return _ == this.text
            ? this
            : new _(this.type, this.attrs, _, this.marks);
        }
        cut(_ = 0, _ = this.text.length) {
          return 0 == _ && _ == this.text.length
            ? this
            : this.withText(this.text.slice(_, _));
        }
        eq(_) {
          return this.sameMarkup(_) && this.text == _.text;
        }
        toJSON() {
          let _ = super.toJSON();
          return (_.text = this.text), _;
        }
      }
      function _(_, _) {
        for (let _ = _.length - 1; _ >= 0; _--)
          _ = _[_].type.name + "(" + _ + ")";
        return _;
      }
      class _ {
        constructor(_) {
          (this.validEnd = _), (this.next = []), (this.wrapCache = []);
        }
        static parse(_, _) {
          let _ = new _(_, _);
          if (null == _.next) return _.empty;
          let _ = _(_);
          _.next && __webpack_require__.err("Unexpected trailing text");
          let _ = (function (_) {
            let _ = Object.create(null);
            return __webpack_require__(_(_, 0));
            function _(_) {
              let _ = [];
              _.forEach((_) => {
                _[_].forEach(({ term: _, _: _ }) => {
                  if (!_) return;
                  let _;
                  for (let _ = 0; _ < _.length; _++)
                    _[_][0] == _ && (_ = _[_][1]);
                  _(_, _).forEach((_) => {
                    _ || _.push([_, (_ = [])]), -1 == _.indexOf(_) && _.push(_);
                  });
                });
              });
              let _ = (_[_.join(",")] = new _(_.indexOf(_.length - 1) > -1));
              for (let _ = 0; _ < _.length; _++) {
                let _ = _[_][1].sort(_);
                _.next.push({
                  type: _[_][0],
                  next: _[_.join(",")] || __webpack_require__(_),
                });
              }
              return _;
            }
          })(
            (function (_) {
              let _ = [[]];
              return _(_(_, 0), __webpack_require__()), _;
              function _() {
                return _.push([]) - 1;
              }
              function _(_, _, _) {
                let _ = {
                  term: _,
                  _: _,
                };
                return _[_].push(_), _;
              }
              function _(_, _) {
                _.forEach((_) => (_._ = _));
              }
              function _(_, _) {
                if ("choice" == _.type)
                  return _.exprs.reduce((_, _) => _.concat(_(_, _)), []);
                if ("seq" != _.type) {
                  if ("star" == _.type) {
                    let _ = __webpack_require__();
                    return _(_, _), _(_(_.expr, _), _), [_(_)];
                  }
                  if ("plus" == _.type) {
                    let _ = __webpack_require__();
                    return _(_(_.expr, _), _), _(_(_.expr, _), _), [_(_)];
                  }
                  if ("opt" == _.type) return [_(_)].concat(_(_.expr, _));
                  if ("range" == _.type) {
                    let _ = _;
                    for (let _ = 0; _ < _.min; _++) {
                      let _ = __webpack_require__();
                      _(_(_.expr, _), _), (_ = _);
                    }
                    if (-1 == _.max) _(_(_.expr, _), _);
                    else
                      for (let _ = _.min; _ < _.max; _++) {
                        let _ = __webpack_require__();
                        _(_, _), _(_(_.expr, _), _), (_ = _);
                      }
                    return [_(_)];
                  }
                  if ("name" == _.type) return [_(_, void 0, _.value)];
                  throw new Error("Unknown expr type");
                }
                for (let _ = 0; ; _++) {
                  let _ = _(_.exprs[_], _);
                  if (_ == _.exprs.length - 1) return _;
                  _(_, (_ = __webpack_require__()));
                }
              }
            })(_),
          );
          return (
            (function (_, _) {
              for (let _ = 0, _ = [_]; _ < _.length; _++) {
                let _ = _[_],
                  _ = !_.validEnd,
                  _ = [];
                for (let _ = 0; _ < _.next.length; _++) {
                  let { type: _, next: _ } = _.next[_];
                  _.push(_.name),
                    !_ ||
                      _.isText ||
                      __webpack_require__.hasRequiredAttrs() ||
                      (_ = !1),
                    -1 == _.indexOf(_) && _.push(_);
                }
                _ &&
                  _.err(
                    "Only non-generatable nodes (" +
                      _.join(", ") +
                      ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
                  );
              }
            })(_, _),
            _
          );
        }
        matchType(_) {
          for (let _ = 0; _ < this.next.length; _++)
            if (this.next[_].type == _) return this.next[_].next;
          return null;
        }
        matchFragment(_, _ = 0, __webpack_require__ = _.childCount) {
          let _ = this;
          for (let _ = _; _ && _ < __webpack_require__; _++)
            _ = _.matchType(_.child(_).type);
          return _;
        }
        get inlineContent() {
          return 0 != this.next.length && this.next[0].type.isInline;
        }
        get defaultType() {
          for (let _ = 0; _ < this.next.length; _++) {
            let { type: _ } = this.next[_];
            if (!_.isText && !_.hasRequiredAttrs()) return _;
          }
          return null;
        }
        compatible(_) {
          for (let _ = 0; _ < this.next.length; _++)
            for (let _ = 0; _ < _.next.length; _++)
              if (this.next[_].type == _.next[_].type) return !0;
          return !1;
        }
        fillBefore(_, _ = !1, __webpack_require__ = 0) {
          let _ = [this];
          return (function _(_, _) {
            let _ = _.matchFragment(_, __webpack_require__);
            if (_ && (!_ || _.validEnd))
              return _.from(_.map((_) => _.createAndFill()));
            for (let _ = 0; _ < _.next.length; _++) {
              let { type: _, next: __webpack_require__ } = _.next[_];
              if (
                !_.isText &&
                !_.hasRequiredAttrs() &&
                -1 == _.indexOf(__webpack_require__)
              ) {
                _.push(__webpack_require__);
                let _ = _(__webpack_require__, _.concat(_));
                if (_) return _;
              }
            }
            return null;
          })(this, []);
        }
        findWrapping(_) {
          for (let _ = 0; _ < this.wrapCache.length; _ += 2)
            if (this.wrapCache[_] == _) return this.wrapCache[_ + 1];
          let _ = this.computeWrapping(_);
          return this.wrapCache.push(_, _), _;
        }
        computeWrapping(_) {
          let _ = Object.create(null),
            _ = [
              {
                match: this,
                type: null,
                via: null,
              },
            ];
          for (; _.length; ) {
            let _ = __webpack_require__.shift(),
              _ = _.match;
            if (_.matchType(_)) {
              let _ = [];
              for (let _ = _; _.type; _ = _.via) _.push(_.type);
              return _.reverse();
            }
            for (let _ = 0; _ < _.next.length; _++) {
              let { type: _, next: _ } = _.next[_];
              _.isLeaf ||
                _.hasRequiredAttrs() ||
                _.name in _ ||
                (_.type && !_.validEnd) ||
                (__webpack_require__.push({
                  match: _.contentMatch,
                  type: _,
                  via: _,
                }),
                (_[_.name] = !0));
            }
          }
          return null;
        }
        get edgeCount() {
          return this.next.length;
        }
        edge(_) {
          if (_ >= this.next.length)
            throw new RangeError(
              `There's no ${_}th edge in this content match`,
            );
          return this.next[_];
        }
        toString() {
          let _ = [];
          return (
            (function _(_) {
              _.push(_);
              for (let _ = 0; _ < _.next.length; _++)
                -1 == _.indexOf(_.next[_].next) && _(_.next[_].next);
            })(this),
            _.map((_, _) => {
              let _ = _ + (_.validEnd ? "*" : " ") + " ";
              for (let _ = 0; _ < _.next.length; _++)
                _ +=
                  (_ ? ", " : "") +
                  _.next[_].type.name +
                  "->" +
                  _.indexOf(_.next[_].next);
              return _;
            }).join("\n")
          );
        }
      }
      _.empty = new _(!0);
      class _ {
        constructor(_, _) {
          (this.string = _),
            (this.nodeTypes = _),
            (this.inline = null),
            (this.pos = 0),
            (this.tokens = _.split(/\s*(?=\b|\W|$)/)),
            "" == this.tokens[this.tokens.length - 1] && this.tokens.pop(),
            "" == this.tokens[0] && this.tokens.shift();
        }
        get next() {
          return this.tokens[this.pos];
        }
        eat(_) {
          return this.next == _ && (this.pos++ || !0);
        }
        err(_) {
          throw new SyntaxError(
            _ + " (in content expression '" + this.string + "')",
          );
        }
      }
      function _(_) {
        let _ = [];
        do {
          _.push(_(_));
        } while (_.eat("|"));
        return 1 == _.length
          ? _[0]
          : {
              type: "choice",
              exprs: _,
            };
      }
      function _(_) {
        let _ = [];
        do {
          _.push(_(_));
        } while (_.next && ")" != _.next && "|" != _.next);
        return 1 == _.length
          ? _[0]
          : {
              type: "seq",
              exprs: _,
            };
      }
      function _(_) {
        let _ = (function (_) {
          if (_.eat("(")) {
            let _ = _(_);
            return _.eat(")") || _.err("Missing closing paren"), _;
          }
          if (!/\W/.test(_.next)) {
            let _ = (function (_, _) {
              let _ = _.nodeTypes,
                _ = _[_];
              if (_) return [_];
              let _ = [];
              for (let _ in _) {
                let _ = _[_];
                _.groups.indexOf(_) > -1 && _.push(_);
              }
              0 == _.length && _.err("No node type or group '" + _ + "' found");
              return _;
            })(_, _.next).map(
              (_) => (
                null == _.inline
                  ? (_.inline = _.isInline)
                  : _.inline != _.isInline &&
                    _.err("Mixing inline and block content"),
                {
                  type: "name",
                  value: _,
                }
              ),
            );
            return (
              _.pos++,
              1 == _.length
                ? _[0]
                : {
                    type: "choice",
                    exprs: _,
                  }
            );
          }
          _.err("Unexpected token '" + _.next + "'");
        })(_);
        for (;;)
          if (_.eat("+"))
            _ = {
              type: "plus",
              expr: _,
            };
          else if (_.eat("*"))
            _ = {
              type: "star",
              expr: _,
            };
          else if (_.eat("?"))
            _ = {
              type: "opt",
              expr: _,
            };
          else {
            if (!_.eat("{")) break;
            _ = _(_, _);
          }
        return _;
      }
      function _(_) {
        /\D/.test(_.next) && _.err("Expected number, got '" + _.next + "'");
        let _ = Number(_.next);
        return _.pos++, _;
      }
      function _(_, _) {
        let _ = _(_),
          _ = _;
        return (
          _.eat(",") && (_ = "}" != _.next ? _(_) : -1),
          _.eat("}") || _.err("Unclosed braced range"),
          {
            type: "range",
            min: _,
            max: _,
            expr: _,
          }
        );
      }
      function _(_, _) {
        return _ - _;
      }
      function _(_, _) {
        let _ = [];
        return (
          (function _(_) {
            let _ = _[_];
            if (1 == _.length && !_[0].term) return _(_[0]._);
            __webpack_require__.push(_);
            for (let _ = 0; _ < _.length; _++) {
              let { term: _, _: _ } = _[_];
              _ || -1 != __webpack_require__.indexOf(_) || _(_);
            }
          })(_),
          __webpack_require__.sort(_)
        );
      }
      function _(_) {
        let _ = Object.create(null);
        for (let _ in _) {
          let _ = _[_];
          if (!_.hasDefault) return null;
          _[_] = _.default;
        }
        return _;
      }
      function _(_, _) {
        let _ = Object.create(null);
        for (let _ in _) {
          let _ = _ && _[_];
          if (void 0 === _) {
            let _ = _[_];
            if (!_.hasDefault)
              throw new RangeError("No value supplied for attribute " + _);
            _ = _.default;
          }
          _[_] = _;
        }
        return _;
      }
      function _(_) {
        let _ = Object.create(null);
        if (_) for (let _ in _) _[_] = new _(_[_]);
        return _;
      }
      class _ {
        constructor(_, _, _) {
          (this.name = _),
            (this.schema = _),
            (this.spec = _),
            (this.markSet = null),
            (this.groups = _.group ? _.group.split(" ") : []),
            (this.attrs = _(_.attrs)),
            (this.defaultAttrs = _(this.attrs)),
            (this.contentMatch = null),
            (this.inlineContent = null),
            (this.isBlock = !(_.inline || "text" == _)),
            (this.isText = "text" == _);
        }
        get isInline() {
          return !this.isBlock;
        }
        get isTextblock() {
          return this.isBlock && this.inlineContent;
        }
        get isLeaf() {
          return this.contentMatch == _.empty;
        }
        get isAtom() {
          return this.isLeaf || !!this.spec.atom;
        }
        get whitespace() {
          return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
        }
        hasRequiredAttrs() {
          for (let _ in this.attrs) if (this.attrs[_].isRequired) return !0;
          return !1;
        }
        compatibleContent(_) {
          return this == _ || this.contentMatch.compatible(_.contentMatch);
        }
        computeAttrs(_) {
          return !_ && this.defaultAttrs ? this.defaultAttrs : _(this.attrs, _);
        }
        create(_ = null, _, _) {
          if (this.isText)
            throw new Error("NodeType.create can't construct text nodes");
          return new _(this, this.computeAttrs(_), _.from(_), _.setFrom(_));
        }
        createChecked(_ = null, _, _) {
          return (
            (_ = _.from(_)),
            this.checkContent(_),
            new _(this, this.computeAttrs(_), _, _.setFrom(_))
          );
        }
        createAndFill(_ = null, _, _) {
          if (((_ = this.computeAttrs(_)), (_ = _.from(_)).size)) {
            let _ = this.contentMatch.fillBefore(_);
            if (!_) return null;
            _ = _.append(_);
          }
          let _ = this.contentMatch.matchFragment(_),
            _ = _ && _.fillBefore(_.empty, !0);
          return _ ? new _(this, _, _.append(_), _.setFrom(_)) : null;
        }
        validContent(_) {
          let _ = this.contentMatch.matchFragment(_);
          if (!_ || !_.validEnd) return !1;
          for (let _ = 0; _ < _.childCount; _++)
            if (!this.allowsMarks(_.child(_).marks)) return !1;
          return !0;
        }
        checkContent(_) {
          if (!this.validContent(_))
            throw new RangeError(
              `Invalid content for node ${this.name}: ${_.toString().slice(0, 50)}`,
            );
        }
        allowsMarkType(_) {
          return null == this.markSet || this.markSet.indexOf(_) > -1;
        }
        allowsMarks(_) {
          if (null == this.markSet) return !0;
          for (let _ = 0; _ < _.length; _++)
            if (!this.allowsMarkType(_[_].type)) return !1;
          return !0;
        }
        allowedMarks(_) {
          if (null == this.markSet) return _;
          let _;
          for (let _ = 0; _ < _.length; _++)
            this.allowsMarkType(_[_].type)
              ? _ && _.push(_[_])
              : _ || (_ = _.slice(0, _));
          return _ ? (_.length ? _ : _.none) : _;
        }
        static compile(_, _) {
          let _ = Object.create(null);
          _.forEach((_, _) => (_[_] = new _(_, _, _)));
          let _ = _.spec.topNode || "doc";
          if (!_[_])
            throw new RangeError(
              "Schema is missing its top node type ('" + _ + "')",
            );
          if (!_.text) throw new RangeError("Every schema needs a 'text' type");
          for (let _ in _.text.attrs)
            throw new RangeError(
              "The text node type should not have attributes",
            );
          return _;
        }
      }
      class _ {
        constructor(_) {
          (this.hasDefault = Object.prototype.hasOwnProperty.call(
            _,
            "default",
          )),
            (this.default = _.default);
        }
        get isRequired() {
          return !this.hasDefault;
        }
      }
      class _ {
        constructor(_, _, _, _) {
          (this.name = _),
            (this.rank = _),
            (this.schema = _),
            (this.spec = _),
            (this.attrs = _(_.attrs)),
            (this.excluded = null);
          let _ = _(this.attrs);
          this.instance = _ ? new _(this, _) : null;
        }
        create(_ = null) {
          return !_ && this.instance
            ? this.instance
            : new _(this, _(this.attrs, _));
        }
        static compile(_, _) {
          let _ = Object.create(null),
            _ = 0;
          return _.forEach((_, _) => (_[_] = new _(_, _++, _, _))), _;
        }
        removeFromSet(_) {
          for (var _ = 0; _ < _.length; _++)
            _[_].type == this &&
              ((_ = _.slice(0, _).concat(_.slice(_ + 1))), _--);
          return _;
        }
        isInSet(_) {
          for (let _ = 0; _ < _.length; _++) if (_[_].type == this) return _[_];
        }
        excludes(_) {
          return this.excluded.indexOf(_) > -1;
        }
      }
      class _ {
        constructor(_) {
          (this.linebreakReplacement = null),
            (this.cached = Object.create(null));
          let _ = (this.spec = {});
          for (let _ in _) _[_] = _[_];
          (_.nodes = _.from(_.nodes)),
            (_.marks = _.from(_.marks || {})),
            (this.nodes = _.compile(this.spec.nodes, this)),
            (this.marks = _.compile(this.spec.marks, this));
          let _ = Object.create(null);
          for (let _ in this.nodes) {
            if (_ in this.marks)
              throw new RangeError(_ + " can not be both a node and a mark");
            let _ = this.nodes[_],
              _ = _.spec.content || "",
              _ = _.spec.marks;
            if (
              ((_.contentMatch = _[_] || (_[_] = _.parse(_, this.nodes))),
              (_.inlineContent = _.contentMatch.inlineContent),
              _.spec.linebreakReplacement)
            ) {
              if (this.linebreakReplacement)
                throw new RangeError("Multiple linebreak nodes defined");
              if (!_.isInline || !_.isLeaf)
                throw new RangeError(
                  "Linebreak replacement nodes must be inline leaf nodes",
                );
              this.linebreakReplacement = _;
            }
            _.markSet =
              "_" == _
                ? null
                : _
                  ? _(this, _.split(" "))
                  : "" != _ && _.inlineContent
                    ? null
                    : [];
          }
          for (let _ in this.marks) {
            let _ = this.marks[_],
              _ = _.spec.excludes;
            _.excluded =
              null == _
                ? [_]
                : "" == _
                  ? []
                  : _(this, __webpack_require__.split(" "));
          }
          (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
            (this.markFromJSON = this.markFromJSON.bind(this)),
            (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
            (this.cached.wrappings = Object.create(null));
        }
        node(_, _ = null, _, _) {
          if ("string" == typeof _) _ = this.nodeType(_);
          else {
            if (!(_ instanceof _))
              throw new RangeError("Invalid node type: " + _);
            if (_.schema != this)
              throw new RangeError(
                "Node type from different schema used (" + _.name + ")",
              );
          }
          return _.createChecked(_, _, _);
        }
        text(_, _) {
          let _ = this.nodes.text;
          return new _(_, _.defaultAttrs, _, _.setFrom(_));
        }
        mark(_, _) {
          return "string" == typeof _ && (_ = this.marks[_]), _.create(_);
        }
        nodeFromJSON(_) {
          return _.fromJSON(this, _);
        }
        markFromJSON(_) {
          return _.fromJSON(this, _);
        }
        nodeType(_) {
          let _ = this.nodes[_];
          if (!_) throw new RangeError("Unknown node type: " + _);
          return _;
        }
      }
      function _(_, _) {
        let _ = [];
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _.marks[_],
            _ = _;
          if (_) __webpack_require__.push(_);
          else
            for (let _ in _.marks) {
              let _ = _.marks[_];
              ("_" == _ ||
                (_.spec.group && _.spec.group.split(" ").indexOf(_) > -1)) &&
                __webpack_require__.push((_ = _));
            }
          if (!_) throw new SyntaxError("Unknown mark type: '" + _[_] + "'");
        }
        return _;
      }
      class _ {
        constructor(_, _) {
          (this.schema = _),
            (this.rules = _),
            (this.tags = []),
            (this.styles = []),
            _.forEach((_) => {
              !(function (_) {
                return null != _.tag;
              })(_)
                ? (function (_) {
                    return null != _.style;
                  })(_) && this.styles.push(_)
                : this.tags.push(_);
            }),
            (this.normalizeLists = !this.tags.some((_) => {
              if (!/^(ul|ol)\b/.test(_.tag) || !_.node) return !1;
              let _ = _.nodes[_.node];
              return _.contentMatch.matchType(_);
            }));
        }
        parse(_, _ = {}) {
          let _ = new _(this, _, !1);
          return (
            __webpack_require__.addAll(_, _.from, _._),
            __webpack_require__.finish()
          );
        }
        parseSlice(_, _ = {}) {
          let _ = new _(this, _, !0);
          return (
            __webpack_require__.addAll(_, _.from, _._),
            _.maxOpen(__webpack_require__.finish())
          );
        }
        matchTag(_, _, _) {
          for (
            let _ = _ ? this.tags.indexOf(_) + 1 : 0;
            _ < this.tags.length;
            _++
          ) {
            let _ = this.tags[_];
            if (
              _(_, _.tag) &&
              (void 0 === _.namespace || _.namespaceURI == _.namespace) &&
              (!_.context || _.matchesContext(_.context))
            ) {
              if (_.getAttrs) {
                let _ = __webpack_require__.getAttrs(_);
                if (!1 === _) continue;
                _.attrs = _ || void 0;
              }
              return _;
            }
          }
        }
        matchStyle(_, _, _, _) {
          for (
            let _ = _ ? this.styles.indexOf(_) + 1 : 0;
            _ < this.styles.length;
            _++
          ) {
            let _ = this.styles[_],
              _ = _.style;
            if (
              !(
                0 != _.indexOf(_) ||
                (_.context && !__webpack_require__.matchesContext(_.context)) ||
                (_.length > _.length &&
                  (61 != _.charCodeAt(_.length) || _.slice(_.length + 1) != _))
              )
            ) {
              if (_.getAttrs) {
                let _ = _.getAttrs(_);
                if (!1 === _) continue;
                _.attrs = _ || void 0;
              }
              return _;
            }
          }
        }
        static schemaRules(_) {
          let _ = [];
          function _(_) {
            let _ = null == _.priority ? 50 : _.priority,
              _ = 0;
            for (; _ < _.length; _++) {
              let _ = _[_];
              if ((null == _.priority ? 50 : _.priority) < _) break;
            }
            _.splice(_, 0, _);
          }
          for (let _ in _.marks) {
            let _ = _.marks[_].spec.parseDOM;
            _ &&
              _.forEach((_) => {
                __webpack_require__((_ = _(_))),
                  _.mark || _.ignore || _.clearMark || (_.mark = _);
              });
          }
          for (let _ in _.nodes) {
            let _ = _.nodes[_].spec.parseDOM;
            _ &&
              _.forEach((_) => {
                __webpack_require__((_ = _(_))),
                  _.node || _.ignore || _.mark || (_.node = _);
              });
          }
          return _;
        }
        static fromSchema(_) {
          return (
            _.cached.domParser ||
            (_.cached.domParser = new _(_, _.schemaRules(_)))
          );
        }
      }
      const _ = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          _: !0,
          div: !0,
          _: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          _: !0,
          _: !0,
          _: !0,
          _: !0,
          _: !0,
          _: !0,
          header: !0,
          hgroup: !0,
          _: !0,
          _: !0,
          noscript: !0,
          _: !0,
          output: !0,
          _: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          _: !0,
        },
        _ = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0,
        },
        _ = {
          _: !0,
          _: !0,
        };
      function _(_, _, _) {
        return null != _
          ? (_ ? 1 : 0) | ("full" === _ ? 2 : 0)
          : _ && "pre" == _.whitespace
            ? 3
            : -5 & _;
      }
      class _ {
        constructor(_, _, _, _, _, _, _) {
          (this.type = _),
            (this.attrs = _),
            (this.marks = _),
            (this.pendingMarks = _),
            (this.solid = _),
            (this.options = _),
            (this.content = []),
            (this.activeMarks = _.none),
            (this.stashMarks = []),
            (this.match = _ || (4 & _ ? null : _.contentMatch));
        }
        findWrapping(_) {
          if (!this.match) {
            if (!this.type) return [];
            let _ = this.type.contentMatch.fillBefore(_.from(_));
            if (!_) {
              let _,
                _ = this.type.contentMatch;
              return (_ = __webpack_require__.findWrapping(_.type))
                ? ((this.match = _), _)
                : null;
            }
            this.match = this.type.contentMatch.matchFragment(_);
          }
          return this.match.findWrapping(_.type);
        }
        finish(_) {
          if (!(1 & this.options)) {
            let _,
              _ = this.content[this.content.length - 1];
            if (_ && _.isText && (_ = /[ \t\r\n\u000c]+$/.exec(_.text))) {
              let _ = _;
              _.text.length == _[0].length
                ? this.content.pop()
                : (this.content[this.content.length - 1] =
                    __webpack_require__.withText(
                      _.text.slice(0, _.text.length - _[0].length),
                    ));
            }
          }
          let _ = _.from(this.content);
          return (
            !_ &&
              this.match &&
              (_ = _.append(this.match.fillBefore(_.empty, !0))),
            this.type ? this.type.create(this.attrs, _, this.marks) : _
          );
        }
        popFromStashMark(_) {
          for (let _ = this.stashMarks.length - 1; _ >= 0; _--)
            if (_._(this.stashMarks[_])) return this.stashMarks.splice(_, 1)[0];
        }
        applyPending(_) {
          for (let _ = 0, _ = this.pendingMarks; _ < _.length; _++) {
            let _ = _[_];
            (this.type ? this.type.allowsMarkType(_.type) : _(_.type, _)) &&
              !_.isInSet(this.activeMarks) &&
              ((this.activeMarks = _.addToSet(this.activeMarks)),
              (this.pendingMarks = _.removeFromSet(this.pendingMarks)));
          }
        }
        inlineContext(_) {
          return this.type
            ? this.type.inlineContent
            : this.content.length
              ? this.content[0].isInline
              : _.parentNode &&
                !_.hasOwnProperty(_.parentNode.nodeName.toLowerCase());
        }
      }
      class _ {
        constructor(_, _, _) {
          (this.parser = _),
            (this.options = _),
            (this.isOpen = _),
            (this.open = 0);
          let _,
            _ = _.topNode,
            _ = _(null, _.preserveWhitespace, 0) | (_ ? 4 : 0);
          (_ = _
            ? new _(
                _.type,
                _.attrs,
                _.none,
                _.none,
                !0,
                _.topMatch || _.type.contentMatch,
                _,
              )
            : new _(
                _ ? null : _.schema.topNodeType,
                null,
                _.none,
                _.none,
                !0,
                null,
                _,
              )),
            (this.nodes = [_]),
            (this.find = _.findPositions),
            (this.needsBlock = !1);
        }
        get top() {
          return this.nodes[this.open];
        }
        addDOM(_) {
          3 == _.nodeType
            ? this.addTextNode(_)
            : 1 == _.nodeType && this.addElement(_);
        }
        withStyleRules(_, _) {
          let _ = _.getAttribute("style");
          if (!_) return _();
          let _ = this.readStyles(
            (function (_) {
              let _,
                _ = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                _ = [];
              for (; (_ = __webpack_require__.exec(_)); )
                _.push(_[1], _[2].trim());
              return _;
            })(_),
          );
          if (!_) return;
          let [_, _] = _,
            _ = this.top;
          for (let _ = 0; _ < _.length; _++) this.removePendingMark(_[_], _);
          for (let _ = 0; _ < _.length; _++) this.addPendingMark(_[_]);
          _();
          for (let _ = 0; _ < _.length; _++) this.removePendingMark(_[_], _);
          for (let _ = 0; _ < _.length; _++) this.addPendingMark(_[_]);
        }
        addTextNode(_) {
          let _ = _.nodeValue,
            _ = this.top;
          if (
            2 & _.options ||
            __webpack_require__.inlineContext(_) ||
            /[^ \t\r\n\u000c]/.test(_)
          ) {
            if (1 & _.options)
              _ =
                2 & _.options
                  ? _.replace(/\r\n?/g, "\n")
                  : _.replace(/\r?\n|\r/g, " ");
            else if (
              ((_ = _.replace(/[ \t\r\n\u000c]+/g, " ")),
              /^[ \t\r\n\u000c]/.test(_) && this.open == this.nodes.length - 1)
            ) {
              let _ = _.content[_.content.length - 1],
                _ = _.previousSibling;
              (!_ ||
                (_ && "BR" == _.nodeName) ||
                (_.isText && /[ \t\r\n\u000c]$/.test(_.text))) &&
                (_ = _.slice(1));
            }
            _ && this.insertNode(this.parser.schema.text(_)),
              this.findInText(_);
          } else this.findInside(_);
        }
        addElement(_, _) {
          let _,
            _ = _.nodeName.toLowerCase();
          _.hasOwnProperty(_) &&
            this.parser.normalizeLists &&
            (function (_) {
              for (let _ = _.firstChild, _ = null; _; _ = _.nextSibling) {
                let _ = 1 == _.nodeType ? _.nodeName.toLowerCase() : null;
                _ && _.hasOwnProperty(_) && _
                  ? (__webpack_require__.appendChild(_), (_ = _))
                  : "li" == _
                    ? (_ = _)
                    : _ && (_ = null);
              }
            })(_);
          let _ =
            (this.options.ruleFromNode && this.options.ruleFromNode(_)) ||
            (_ = this.parser.matchTag(_, this, _));
          if (_ ? _.ignore : _.hasOwnProperty(_))
            this.findInside(_), this.ignoreFallback(_);
          else if (!_ || _.skip || _.closeParent) {
            _ && _.closeParent
              ? (this.open = Math.max(0, this.open - 1))
              : _ && _.skip.nodeType && (_ = _.skip);
            let _,
              _ = this.top,
              _ = this.needsBlock;
            if (_.hasOwnProperty(_))
              _.content.length &&
                _.content[0].isInline &&
                this.open &&
                (this.open--, (_ = this.top)),
                (_ = !0),
                _.type || (this.needsBlock = !0);
            else if (!_.firstChild) return void this.leafFallback(_);
            _ && _.skip
              ? this.addAll(_)
              : this.withStyleRules(_, () => this.addAll(_)),
              _ && this.sync(_),
              (this.needsBlock = _);
          } else
            this.withStyleRules(_, () => {
              this.addElementByRule(_, _, !1 === _.consuming ? _ : void 0);
            });
        }
        leafFallback(_) {
          "BR" == _.nodeName &&
            this.top.type &&
            this.top.type.inlineContent &&
            this.addTextNode(_.ownerDocument.createTextNode("\n"));
        }
        ignoreFallback(_) {
          "BR" != _.nodeName ||
            (this.top.type && this.top.type.inlineContent) ||
            this.findPlace(this.parser.schema.text("-"));
        }
        readStyles(_) {
          let _ = _.none,
            _ = _.none;
          for (let _ = 0; _ < _.length; _ += 2)
            for (let _; ; ) {
              let _ = this.parser.matchStyle(_[_], _[_ + 1], this, _);
              if (!_) break;
              if (_.ignore) return null;
              if (
                (_.clearMark
                  ? this.top.pendingMarks
                      .concat(this.top.activeMarks)
                      .forEach((_) => {
                        _.clearMark(_) && (_ = _.addToSet(_));
                      })
                  : (_ = this.parser.schema.marks[_.mark]
                      .create(_.attrs)
                      .addToSet(_)),
                !1 !== _.consuming)
              )
                break;
              _ = _;
            }
          return [_, _];
        }
        addElementByRule(_, _, _) {
          let _, _, _;
          if (_.node)
            (_ = this.parser.schema.nodes[_.node]),
              _.isLeaf
                ? this.insertNode(_.create(_.attrs)) || this.leafFallback(_)
                : (_ = this.enter(_, _.attrs || null, _.preserveWhitespace));
          else {
            (_ = this.parser.schema.marks[_.mark].create(_.attrs)),
              this.addPendingMark(_);
          }
          let _ = this.top;
          if (_ && _.isLeaf) this.findInside(_);
          else if (_) this.addElement(_, _);
          else if (_.getContent)
            this.findInside(_),
              _.getContent(_, this.parser.schema).forEach((_) =>
                this.insertNode(_),
              );
          else {
            let _ = _;
            "string" == typeof _.contentElement
              ? (_ = _.querySelector(_.contentElement))
              : "function" == typeof _.contentElement
                ? (_ = _.contentElement(_))
                : _.contentElement && (_ = _.contentElement),
              this.findAround(_, _, !0),
              this.addAll(_);
          }
          _ && this.sync(_) && this.open--, _ && this.removePendingMark(_, _);
        }
        addAll(_, _, _) {
          let _ = _ || 0;
          for (
            let _ = _ ? _.childNodes[_] : _.firstChild,
              _ = null == _ ? null : _.childNodes[_];
            _ != _;
            _ = _.nextSibling, ++_
          )
            this.findAtPoint(_, _), this.addDOM(_);
          this.findAtPoint(_, _);
        }
        findPlace(_) {
          let _, _;
          for (let _ = this.open; _ >= 0; _--) {
            let _ = this.nodes[_],
              _ = _.findWrapping(_);
            if (
              _ &&
              (!_ || _.length > _.length) &&
              ((_ = _), (_ = _), !_.length)
            )
              break;
            if (_.solid) break;
          }
          if (!_) return !1;
          this.sync(_);
          for (let _ = 0; _ < _.length; _++) this.enterInner(_[_], null, !1);
          return !0;
        }
        insertNode(_) {
          if (_.isInline && this.needsBlock && !this.top.type) {
            let _ = this.textblockFromContext();
            _ && this.enterInner(_);
          }
          if (this.findPlace(_)) {
            this.closeExtra();
            let _ = this.top;
            _.applyPending(_.type),
              _.match && (_.match = _.match.matchType(_.type));
            let _ = _.activeMarks;
            for (let _ = 0; _ < _.marks.length; _++)
              (_.type && !_.type.allowsMarkType(_.marks[_].type)) ||
                (_ = _.marks[_].addToSet(_));
            return _.content.push(_.mark(_)), !0;
          }
          return !1;
        }
        enter(_, _, _) {
          let _ = this.findPlace(_.create(_));
          return _ && this.enterInner(_, _, !0, _), _;
        }
        enterInner(_, _ = null, __webpack_require__ = !1, _) {
          this.closeExtra();
          let _ = this.top;
          _.applyPending(_), (_.match = _.match && _.match.matchType(_));
          let _ = _(_, _, _.options);
          4 & _.options && 0 == _.content.length && (_ |= 4),
            this.nodes.push(
              new _(
                _,
                _,
                _.activeMarks,
                _.pendingMarks,
                __webpack_require__,
                null,
                _,
              ),
            ),
            this.open++;
        }
        closeExtra(_ = !1) {
          let _ = this.nodes.length - 1;
          if (_ > this.open) {
            for (; _ > this.open; _--)
              this.nodes[_ - 1].content.push(this.nodes[_].finish(_));
            this.nodes.length = this.open + 1;
          }
        }
        finish() {
          return (
            (this.open = 0),
            this.closeExtra(this.isOpen),
            this.nodes[0].finish(this.isOpen || this.options.topOpen)
          );
        }
        sync(_) {
          for (let _ = this.open; _ >= 0; _--)
            if (this.nodes[_] == _) return (this.open = _), !0;
          return !1;
        }
        get currentPos() {
          this.closeExtra();
          let _ = 0;
          for (let _ = this.open; _ >= 0; _--) {
            let _ = this.nodes[_].content;
            for (let _ = _.length - 1; _ >= 0; _--) _ += _[_].nodeSize;
            _ && _++;
          }
          return _;
        }
        findAtPoint(_, _) {
          if (this.find)
            for (let _ = 0; _ < this.find.length; _++)
              this.find[_].node == _ &&
                this.find[_].offset == _ &&
                (this.find[_].pos = this.currentPos);
        }
        findInside(_) {
          if (this.find)
            for (let _ = 0; _ < this.find.length; _++)
              null == this.find[_].pos &&
                1 == _.nodeType &&
                _.contains(this.find[_].node) &&
                (this.find[_].pos = this.currentPos);
        }
        findAround(_, _, _) {
          if (_ != _ && this.find)
            for (let _ = 0; _ < this.find.length; _++)
              if (
                null == this.find[_].pos &&
                1 == _.nodeType &&
                _.contains(this.find[_].node)
              ) {
                _.compareDocumentPosition(this.find[_].node) & (_ ? 2 : 4) &&
                  (this.find[_].pos = this.currentPos);
              }
        }
        findInText(_) {
          if (this.find)
            for (let _ = 0; _ < this.find.length; _++)
              this.find[_].node == _ &&
                (this.find[_].pos =
                  this.currentPos - (_.nodeValue.length - this.find[_].offset));
        }
        matchesContext(_) {
          if (_.indexOf("|") > -1)
            return _.split(/\s*\|\s*/).some(this.matchesContext, this);
          let _ = _.split("/"),
            _ = this.options.context,
            _ = !(this.isOpen || (_ && _.parent.type != this.nodes[0].type)),
            _ = -(_ ? _.depth + 1 : 0) + (_ ? 0 : 1),
            _ = (_, _) => {
              for (; _ >= 0; _--) {
                let _ = _[_];
                if ("" == _) {
                  if (_ == _.length - 1 || 0 == _) continue;
                  for (; _ >= _; _--) if (_(_ - 1, _)) return !0;
                  return !1;
                }
                {
                  let _ =
                    _ > 0 || (0 == _ && _)
                      ? this.nodes[_].type
                      : _ && _ >= _
                        ? __webpack_require__.node(_ - _).type
                        : null;
                  if (!_ || (_.name != _ && -1 == _.groups.indexOf(_)))
                    return !1;
                  _--;
                }
              }
              return !0;
            };
          return _(_.length - 1, this.open);
        }
        textblockFromContext() {
          let _ = this.options.context;
          if (_)
            for (let _ = _.depth; _ >= 0; _--) {
              let _ = _.node(_).contentMatchAt(_.indexAfter(_)).defaultType;
              if (_ && _.isTextblock && _.defaultAttrs) return _;
            }
          for (let _ in this.parser.schema.nodes) {
            let _ = this.parser.schema.nodes[_];
            if (_.isTextblock && _.defaultAttrs) return _;
          }
        }
        addPendingMark(_) {
          let _ = (function (_, _) {
            for (let _ = 0; _ < _.length; _++) if (_._(_[_])) return _[_];
          })(_, this.top.pendingMarks);
          _ && this.top.stashMarks.push(_),
            (this.top.pendingMarks = _.addToSet(this.top.pendingMarks));
        }
        removePendingMark(_, _) {
          for (let _ = this.open; _ >= 0; _--) {
            let _ = this.nodes[_];
            if (_.pendingMarks.lastIndexOf(_) > -1)
              _.pendingMarks = _.removeFromSet(_.pendingMarks);
            else {
              _.activeMarks = _.removeFromSet(_.activeMarks);
              let _ = _.popFromStashMark(_);
              _ &&
                _.type &&
                _.type.allowsMarkType(_.type) &&
                (_.activeMarks = _.addToSet(_.activeMarks));
            }
            if (_ == _) break;
          }
        }
      }
      function _(_, _) {
        return (
          _.matches ||
          _.msMatchesSelector ||
          _.webkitMatchesSelector ||
          _.mozMatchesSelector
        ).call(_, _);
      }
      function _(_) {
        let _ = {};
        for (let _ in _) _[_] = _[_];
        return _;
      }
      function _(_, _) {
        let _ = _.schema.nodes;
        for (let _ in _) {
          let _ = _[_];
          if (!_.allowsMarkType(_)) continue;
          let _ = [],
            _ = (_) => {
              _.push(_);
              for (let _ = 0; _ < _.edgeCount; _++) {
                let { type: _, next: _ } = _.edge(_);
                if (_ == _) return !0;
                if (_.indexOf(_) < 0 && _(_)) return !0;
              }
            };
          if (_(_.contentMatch)) return !0;
        }
      }
      class _ {
        constructor(_, _) {
          (this.nodes = _), (this.marks = _);
        }
        serializeFragment(_, _ = {}, _) {
          _ || (_ = _(_).createDocumentFragment());
          let _ = _,
            _ = [];
          return (
            _.forEach((_) => {
              if (_.length || _.marks.length) {
                let _ = 0,
                  _ = 0;
                for (; _ < _.length && _ < _.marks.length; ) {
                  let _ = _.marks[_];
                  if (this.marks[_.type.name]) {
                    if (!_._(_[_][0]) || !1 === _.type.spec.spanning) break;
                    _++, _++;
                  } else _++;
                }
                for (; _ < _.length; ) _ = _.pop()[1];
                for (; _ < _.marks.length; ) {
                  let _ = _.marks[_++],
                    _ = this.serializeMark(_, _.isInline, _);
                  _ &&
                    (_.push([_, _]),
                    _.appendChild(_.dom),
                    (_ = _.contentDOM || _.dom));
                }
              }
              _.appendChild(this.serializeNodeInner(_, _));
            }),
            _
          );
        }
        serializeNodeInner(_, _) {
          let { dom: __webpack_require__, contentDOM: _ } = _.renderSpec(
            _(_),
            this.nodes[_.type.name](_),
          );
          if (_) {
            if (_.isLeaf)
              throw new RangeError(
                "Content hole not allowed in a leaf node spec",
              );
            this.serializeFragment(_.content, _, _);
          }
          return __webpack_require__;
        }
        serializeNode(_, _ = {}) {
          let _ = this.serializeNodeInner(_, _);
          for (let _ = _.marks.length - 1; _ >= 0; _--) {
            let _ = this.serializeMark(_.marks[_], _.isInline, _);
            _ && ((_.contentDOM || _.dom).appendChild(_), (_ = _.dom));
          }
          return _;
        }
        serializeMark(_, _, __webpack_require__ = {}) {
          let _ = this.marks[_.type.name];
          return _ && _.renderSpec(_(__webpack_require__), _(_, _));
        }
        static renderSpec(_, _, __webpack_require__ = null) {
          if ("string" == typeof _)
            return {
              dom: _.createTextNode(_),
            };
          if (null != _.nodeType)
            return {
              dom: _,
            };
          if (_.dom && null != _.dom.nodeType) return _;
          let _,
            _ = _[0],
            _ = _.indexOf(" ");
          _ > 0 &&
            ((__webpack_require__ = _.slice(0, _)), (_ = _.slice(_ + 1)));
          let _ = __webpack_require__
              ? _.createElementNS(__webpack_require__, _)
              : _.createElement(_),
            _ = _[1],
            _ = 1;
          if (
            _ &&
            "object" == typeof _ &&
            null == _.nodeType &&
            !Array.isArray(_)
          ) {
            _ = 2;
            for (let _ in _)
              if (null != _[_]) {
                let _ = _.indexOf(" ");
                _ > 0
                  ? _.setAttributeNS(_.slice(0, _), _.slice(_ + 1), _[_])
                  : _.setAttribute(_, _[_]);
              }
          }
          for (let _ = _; _ < _.length; _++) {
            let _ = _[_];
            if (0 === _) {
              if (_ < _.length - 1 || _ > _)
                throw new RangeError(
                  "Content hole must be the only child of its parent node",
                );
              return {
                dom: _,
                contentDOM: _,
              };
            }
            {
              let { dom: _, contentDOM: _ } = _.renderSpec(
                _,
                _,
                __webpack_require__,
              );
              if ((_.appendChild(_), _)) {
                if (_) throw new RangeError("Multiple content holes");
                _ = _;
              }
            }
          }
          return {
            dom: _,
            contentDOM: _,
          };
        }
        static fromSchema(_) {
          return (
            _.cached.domSerializer ||
            (_.cached.domSerializer = new _(
              this.nodesFromSchema(_),
              this.marksFromSchema(_),
            ))
          );
        }
        static nodesFromSchema(_) {
          let _ = _(_.nodes);
          return _.text || (_.text = (_) => _.text), _;
        }
        static marksFromSchema(_) {
          return _(_.marks);
        }
      }
      function _(_) {
        let _ = {};
        for (let _ in _) {
          let _ = _[_].spec.toDOM;
          _ && (_[_] = _);
        }
        return _;
      }
      function _(_) {
        return _.document || window.document;
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = ["ol", 0],
        _ = ["ul", 0],
        _ = ["li", 0],
        _ = {
          attrs: {
            order: {
              default: 1,
            },
          },
          parseDOM: [
            {
              tag: "ol",
              getAttrs: (_) => ({
                order: _.hasAttribute("start") ? +_.getAttribute("start") : 1,
              }),
            },
          ],
          toDOM: (_) =>
            1 == _.attrs.order
              ? _
              : [
                  "ol",
                  {
                    start: _.attrs.order,
                  },
                  0,
                ],
        },
        _ = {
          parseDOM: [
            {
              tag: "ul",
            },
          ],
          toDOM: () => _,
        },
        _ = {
          parseDOM: [
            {
              tag: "li",
            },
          ],
          toDOM: () => _,
          defining: !0,
        };
      function _(_, _ = null) {
        return function (_, _) {
          let { $from: _, $to: _ } = _.selection,
            _ = _.blockRange(_),
            _ = !1,
            _ = _;
          if (!_) return !1;
          if (
            _.depth >= 2 &&
            _.node(_.depth - 1).type.compatibleContent(_) &&
            0 == _.startIndex
          ) {
            if (0 == _.index(_.depth - 1)) return !1;
            let _ = _.doc.resolve(_.start - 2);
            (_ = new _._(_, _, _.depth)),
              _.endIndex < _.parent.childCount &&
                (_ = new _._(_, _.doc.resolve(_.end(_.depth)), _.depth)),
              (_ = !0);
          }
          let _ = (0, _._)(_, _, _, _);
          return (
            !!_ &&
            (_ &&
              _(
                (function (_, _, _, _, _) {
                  let _ = _._.empty;
                  for (let _ = _.length - 1; _ >= 0; _--)
                    _ = _._.from(_[_].type.create(_[_].attrs, _));
                  _.step(
                    new _._(
                      _.start - (_ ? 2 : 0),
                      _.end,
                      _.start,
                      _.end,
                      new _._(_, 0, 0),
                      _.length,
                      !0,
                    ),
                  );
                  let _ = 0;
                  for (let _ = 0; _ < _.length; _++)
                    _[_].type == _ && (_ = _ + 1);
                  let _ = _.length - _,
                    _ = _.start + _.length - (_ ? 2 : 0),
                    _ = _.parent;
                  for (
                    let _ = _.startIndex, _ = _.endIndex, _ = !0;
                    _ < _;
                    _++, _ = !1
                  )
                    !_ &&
                      (0, _._)(_.doc, _, _) &&
                      (_.split(_, _), (_ += 2 * _)),
                      (_ += _.child(_).nodeSize);
                  return _;
                })(_._, _, _, _, _).scrollIntoView(),
              ),
            !0)
          );
        };
      }
      function _(_, _) {
        return function (_, _) {
          let { $from: _, $to: _, node: _ } = _.selection;
          if ((_ && _.isBlock) || _.depth < 2 || !_.sameParent(_)) return !1;
          let _ = _.node(-1);
          if (_.type != _) return !1;
          if (
            0 == _.parent.content.size &&
            _.node(-1).childCount == _.indexAfter(-1)
          ) {
            if (
              3 == _.depth ||
              _.node(-3).type != _ ||
              _.index(-2) != _.node(-2).childCount - 1
            )
              return !1;
            if (_) {
              let _ = _._.empty,
                _ = _.index(-1) ? 1 : _.index(-2) ? 2 : 3;
              for (let _ = _.depth - _; _ >= _.depth - 3; _--)
                _ = _._.from(_.node(_).copy(_));
              let _ =
                _.indexAfter(-1) < _.node(-2).childCount
                  ? 1
                  : _.indexAfter(-2) < _.node(-3).childCount
                    ? 2
                    : 3;
              _ = _.append(_._.from(_.createAndFill()));
              let _ = _.before(_.depth - (_ - 1)),
                _ = _._.replace(_, _.after(-_), new _._(_, 4 - _, 0)),
                _ = -1;
              _.doc.nodesBetween(_, _.doc.content.size, (_, _) => {
                if (_ > -1) return !1;
                _.isTextblock && 0 == _.content.size && (_ = _ + 1);
              }),
                _ > -1 && _.setSelection(_._.near(_.doc.resolve(_))),
                _(_.scrollIntoView());
            }
            return !0;
          }
          let _ = _.pos == _.end() ? _.contentMatchAt(0).defaultType : null,
            _ = _._.delete(_.pos, _.pos),
            _ = _
              ? [
                  _
                    ? {
                        type: _,
                        attrs: _,
                      }
                    : null,
                  {
                    type: _,
                  },
                ]
              : void 0;
          return (
            !!(0, _._)(_.doc, _.pos, 2, _) &&
            (_ && _(_.split(_.pos, 2, _).scrollIntoView()), !0)
          );
        };
      }
      function _(_) {
        return function (_, _) {
          let { $from: _, $to: _ } = _.selection,
            _ = _.blockRange(
              _,
              (_) => _.childCount > 0 && _.firstChild.type == _,
            );
          return (
            !!_ &&
            (!_ ||
              (_.node(_.depth - 1).type == _
                ? (function (_, _, _, _) {
                    let _ = _._,
                      _ = _.end,
                      _ = _.$to.end(_.depth);
                    _ < _ &&
                      (_.step(
                        new _._(
                          _ - 1,
                          _,
                          _,
                          _,
                          new _._(
                            _._.from(
                              __webpack_require__.create(null, _.parent.copy()),
                            ),
                            1,
                            0,
                          ),
                          1,
                          !0,
                        ),
                      ),
                      (_ = new _._(
                        _.doc.resolve(_.$from.pos),
                        _.doc.resolve(_),
                        _.depth,
                      )));
                    const _ = (0, _._)(_);
                    if (null == _) return !1;
                    _.lift(_, _);
                    let _ = _.mapping.map(_, -1) - 1;
                    (0, _._)(_.doc, _) && _.join(_);
                    return _(_.scrollIntoView()), !0;
                  })(_, _, _, _)
                : (function (_, _, _) {
                    let _ = _._,
                      _ = _.parent;
                    for (
                      let _ = _.end, _ = _.endIndex - 1, _ = _.startIndex;
                      _ > _;
                      _--
                    )
                      (_ -= _.child(_).nodeSize), _.delete(_ - 1, _ + 1);
                    let _ = _.doc.resolve(_.start),
                      _ = _.nodeAfter;
                    if (_.mapping.map(_.end) != _.start + _.nodeAfter.nodeSize)
                      return !1;
                    let _ = 0 == _.startIndex,
                      _ = _.endIndex == _.childCount,
                      _ = _.node(-1),
                      _ = _.index(-1);
                    if (
                      !_.canReplace(
                        _ + (_ ? 0 : 1),
                        _ + 1,
                        _.content.append(_ ? _._.empty : _._.from(_)),
                      )
                    )
                      return !1;
                    let _ = _.pos,
                      _ = _ + _.nodeSize;
                    return (
                      _.step(
                        new _._(
                          _ - (_ ? 1 : 0),
                          _ + (_ ? 1 : 0),
                          _ + 1,
                          _ - 1,
                          new _._(
                            (_
                              ? _._.empty
                              : _._.from(_.copy(_._.empty))
                            ).append(
                              _ ? _._.empty : _._.from(_.copy(_._.empty)),
                            ),
                            _ ? 0 : 1,
                            _ ? 0 : 1,
                          ),
                          _ ? 0 : 1,
                        ),
                      ),
                      _(_.scrollIntoView()),
                      !0
                    );
                  })(_, _, _)))
          );
        };
      }
      function _(_) {
        return function (_, _) {
          let { $from: _, $to: _ } = _.selection,
            _ = _.blockRange(
              _,
              (_) => _.childCount > 0 && _.firstChild.type == _,
            );
          if (!_) return !1;
          let _ = _.startIndex;
          if (0 == _) return !1;
          let _ = _.parent,
            _ = _.child(_ - 1);
          if (_.type != _) return !1;
          if (_) {
            let _ = _.lastChild && _.lastChild.type == _.type,
              _ = _._.from(_ ? _.create() : null),
              _ = new _._(
                _._.from(_.create(null, _._.from(_.type.create(null, _)))),
                _ ? 3 : 1,
                0,
              ),
              _ = _.start,
              _ = _.end;
            __webpack_require__(
              _._.step(
                new _._(_ - (_ ? 3 : 1), _, _, _, _, 1, !0),
              ).scrollIntoView(),
            );
          }
          return !0;
        };
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = Object.create(null);
      class _ {
        constructor(_, _, _) {
          (this.$anchor = _),
            (this.$head = _),
            (this.ranges = _ || [new _(_.min(_), _.max(_))]);
        }
        get anchor() {
          return this.$anchor.pos;
        }
        get head() {
          return this.$head.pos;
        }
        get from() {
          return this.$from.pos;
        }
        get to() {
          return this.$to.pos;
        }
        get $from() {
          return this.ranges[0].$from;
        }
        get $to() {
          return this.ranges[0].$to;
        }
        get empty() {
          let _ = this.ranges;
          for (let _ = 0; _ < _.length; _++)
            if (_[_].$from.pos != _[_].$to.pos) return !1;
          return !0;
        }
        content() {
          return this.$from.doc.slice(this.from, this._, !0);
        }
        replace(_, _ = _._.empty) {
          let _ = _.content.lastChild,
            _ = null;
          for (let _ = 0; _ < _.openEnd; _++) (_ = _), (_ = _.lastChild);
          let _ = _.steps.length,
            _ = this.ranges;
          for (let _ = 0; _ < _.length; _++) {
            let { $from: _, $to: _ } = _[_],
              _ = _.mapping.slice(_);
            _.replaceRange(_.map(_.pos), _.map(_.pos), _ ? _._.empty : _),
              0 == _ && _(_, _, (_ ? _.isInline : _ && _.isTextblock) ? -1 : 1);
          }
        }
        replaceWith(_, _) {
          let _ = _.steps.length,
            _ = this.ranges;
          for (let _ = 0; _ < _.length; _++) {
            let { $from: _, $to: _ } = _[_],
              _ = _.mapping.slice(_),
              _ = _.map(_.pos),
              _ = _.map(_.pos);
            _
              ? _.deleteRange(_, _)
              : (_.replaceRangeWith(_, _, _), _(_, _, _.isInline ? -1 : 1));
          }
        }
        static findFrom(_, _, __webpack_require__ = !1) {
          let _ = _.parent.inlineContent
            ? new _(_)
            : _(_.node(0), _.parent, _.pos, _.index(), _, __webpack_require__);
          if (_) return _;
          for (let _ = _.depth - 1; _ >= 0; _--) {
            let _ =
              _ < 0
                ? _(
                    _.node(0),
                    _.node(_),
                    _.before(_ + 1),
                    _.index(_),
                    _,
                    __webpack_require__,
                  )
                : _(
                    _.node(0),
                    _.node(_),
                    _.after(_ + 1),
                    _.index(_) + 1,
                    _,
                    __webpack_require__,
                  );
            if (_) return _;
          }
          return null;
        }
        static near(_, _ = 1) {
          return (
            this.findFrom(_, _) || this.findFrom(_, -_) || new _(_.node(0))
          );
        }
        static atStart(_) {
          return _(_, _, 0, 0, 1) || new _(_);
        }
        static atEnd(_) {
          return _(_, _, _.content.size, _.childCount, -1) || new _(_);
        }
        static fromJSON(_, _) {
          if (!_ || !_.type)
            throw new RangeError("Invalid input for Selection.fromJSON");
          let _ = _[_.type];
          if (!_) throw new RangeError(`No selection type ${_.type} defined`);
          return __webpack_require__.fromJSON(_, _);
        }
        static jsonID(_, _) {
          if (_ in _)
            throw new RangeError("Duplicate use of selection JSON ID " + _);
          return (_[_] = _), (_.prototype.jsonID = _), _;
        }
        getBookmark() {
          return _.between(this.$anchor, this.$head).getBookmark();
        }
      }
      _.prototype.visible = !0;
      class _ {
        constructor(_, _) {
          (this.$from = _), (this.$to = _);
        }
      }
      let _ = !1;
      function _(_) {
        _ ||
          _.parent.inlineContent ||
          ((_ = !0),
          console.warn(
            "TextSelection endpoint not pointing into a node with inline content (" +
              _.parent.type.name +
              ")",
          ));
      }
      class _ extends _ {
        constructor(_, _ = _) {
          _(_), _(_), super(_, _);
        }
        get $cursor() {
          return this.$anchor.pos == this.$head.pos ? this.$head : null;
        }
        map(_, _) {
          let _ = _.resolve(_.map(this.head));
          if (!_.parent.inlineContent) return _.near(_);
          let _ = _.resolve(_.map(this.anchor));
          return new _(_.parent.inlineContent ? _ : _, _);
        }
        replace(_, _ = _._.empty) {
          if ((super.replace(_, _), _ == _._.empty)) {
            let _ = this.$from.marksAcross(this.$to);
            _ && _.ensureMarks(_);
          }
        }
        eq(_) {
          return (
            _ instanceof _ && _.anchor == this.anchor && _.head == this.head
          );
        }
        getBookmark() {
          return new _(this.anchor, this.head);
        }
        toJSON() {
          return {
            type: "text",
            anchor: this.anchor,
            head: this.head,
          };
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.anchor || "number" != typeof _.head)
            throw new RangeError("Invalid input for TextSelection.fromJSON");
          return new _(_.resolve(_.anchor), _.resolve(_.head));
        }
        static create(_, _, __webpack_require__ = _) {
          let _ = _.resolve(_);
          return new this(
            _,
            __webpack_require__ == _ ? _ : _.resolve(__webpack_require__),
          );
        }
        static between(_, _, _) {
          let _ = _.pos - _.pos;
          if (((_ && !_) || (_ = _ >= 0 ? 1 : -1), !_.parent.inlineContent)) {
            let _ = _.findFrom(_, _, !0) || _.findFrom(_, -_, !0);
            if (!_) return _.near(_, _);
            _ = _.$head;
          }
          return (
            _.parent.inlineContent ||
              ((0 == _ ||
                (_ = (_.findFrom(_, -_, !0) || _.findFrom(_, _, !0)).$anchor)
                  .pos <
                  _.pos !=
                  _ < 0) &&
                (_ = _)),
            new _(_, _)
          );
        }
      }
      _.jsonID("text", _);
      class _ {
        constructor(_, _) {
          (this.anchor = _), (this.head = _);
        }
        map(_) {
          return new _(_.map(this.anchor), _.map(this.head));
        }
        resolve(_) {
          return _.between(_.resolve(this.anchor), _.resolve(this.head));
        }
      }
      class _ extends _ {
        constructor(_) {
          let _ = _.nodeAfter,
            _ = _.node(0).resolve(_.pos + _.nodeSize);
          super(_, _), (this.node = _);
        }
        map(_, _) {
          let { deleted: __webpack_require__, pos: _ } = _.mapResult(
              this.anchor,
            ),
            _ = _.resolve(_);
          return __webpack_require__ ? _.near(_) : new _(_);
        }
        content() {
          return new _._(_._.from(this.node), 0, 0);
        }
        eq(_) {
          return _ instanceof _ && _.anchor == this.anchor;
        }
        toJSON() {
          return {
            type: "node",
            anchor: this.anchor,
          };
        }
        getBookmark() {
          return new _(this.anchor);
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.anchor)
            throw new RangeError("Invalid input for NodeSelection.fromJSON");
          return new _(_.resolve(_.anchor));
        }
        static create(_, _) {
          return new _(_.resolve(_));
        }
        static isSelectable(_) {
          return !_.isText && !1 !== _.type.spec.selectable;
        }
      }
      (_.prototype.visible = !1), _.jsonID("node", _);
      class _ {
        constructor(_) {
          this.anchor = _;
        }
        map(_) {
          let { deleted: _, pos: __webpack_require__ } = _.mapResult(
            this.anchor,
          );
          return _
            ? new _(__webpack_require__, __webpack_require__)
            : new _(__webpack_require__);
        }
        resolve(_) {
          let _ = _.resolve(this.anchor),
            _ = _.nodeAfter;
          return _ && _.isSelectable(_) ? new _(_) : _.near(_);
        }
      }
      class _ extends _ {
        constructor(_) {
          super(_.resolve(0), _.resolve(_.content.size));
        }
        replace(_, _ = _._.empty) {
          if (_ == _._.empty) {
            _.delete(0, _.doc.content.size);
            let _ = _.atStart(_.doc);
            _._(_.selection) || _.setSelection(_);
          } else super.replace(_, _);
        }
        toJSON() {
          return {
            type: "all",
          };
        }
        static fromJSON(_) {
          return new _(_);
        }
        map(_) {
          return new _(_);
        }
        eq(_) {
          return _ instanceof _;
        }
        getBookmark() {
          return _;
        }
      }
      _.jsonID("all", _);
      const _ = {
        map() {
          return this;
        },
        resolve: (_) => new _(_),
      };
      function _(_, _, _, _, _, _ = !1) {
        if (_.inlineContent) return _.create(_, _);
        for (
          let _ = _ - (_ > 0 ? 0 : 1);
          _ > 0 ? _ < _.childCount : _ >= 0;
          _ += _
        ) {
          let _ = _.child(_);
          if (_.isAtom) {
            if (!_ && _.isSelectable(_))
              return _.create(_, _ - (_ < 0 ? _.nodeSize : 0));
          } else {
            let _ = _(_, _, _ + _, _ < 0 ? _.childCount : 0, _, _);
            if (_) return _;
          }
          _ += _.nodeSize * _;
        }
        return null;
      }
      function _(_, _, _) {
        let _ = _.steps.length - 1;
        if (_ < _) return;
        let _,
          _ = _.steps[_];
        (_ instanceof _._ || _ instanceof _._) &&
          (_.mapping.maps[_].forEach((_, _, _, _) => {
            null == _ && (_ = _);
          }),
          _.setSelection(_.near(_.doc.resolve(_), _)));
      }
      class _ extends _._ {
        constructor(_) {
          super(_.doc),
            (this.curSelectionFor = 0),
            (this.updated = 0),
            (this.meta = Object.create(null)),
            (this.time = Date.now()),
            (this.curSelection = _.selection),
            (this.storedMarks = _.storedMarks);
        }
        get selection() {
          return (
            this.curSelectionFor < this.steps.length &&
              ((this.curSelection = this.curSelection.map(
                this.doc,
                this.mapping.slice(this.curSelectionFor),
              )),
              (this.curSelectionFor = this.steps.length)),
            this.curSelection
          );
        }
        setSelection(_) {
          if (_.$from.doc != this.doc)
            throw new RangeError(
              "Selection passed to setSelection must point at the current document",
            );
          return (
            (this.curSelection = _),
            (this.curSelectionFor = this.steps.length),
            (this.updated = -3 & (1 | this.updated)),
            (this.storedMarks = null),
            this
          );
        }
        get selectionSet() {
          return (1 & this.updated) > 0;
        }
        setStoredMarks(_) {
          return (this.storedMarks = _), (this.updated |= 2), this;
        }
        ensureMarks(_) {
          return (
            _._.sameSet(this.storedMarks || this.selection.$from.marks(), _) ||
              this.setStoredMarks(_),
            this
          );
        }
        addStoredMark(_) {
          return this.ensureMarks(
            _.addToSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        removeStoredMark(_) {
          return this.ensureMarks(
            _.removeFromSet(this.storedMarks || this.selection.$head.marks()),
          );
        }
        get storedMarksSet() {
          return (2 & this.updated) > 0;
        }
        addStep(_, _) {
          super.addStep(_, _),
            (this.updated = -3 & this.updated),
            (this.storedMarks = null);
        }
        setTime(_) {
          return (this.time = _), this;
        }
        replaceSelection(_) {
          return this.selection.replace(this, _), this;
        }
        replaceSelectionWith(_, _ = !0) {
          let _ = this.selection;
          return (
            _ &&
              (_ = _.mark(
                this.storedMarks ||
                  (_.empty
                    ? _.$from.marks()
                    : _.$from.marksAcross(_.$to) || _._.none),
              )),
            __webpack_require__.replaceWith(this, _),
            this
          );
        }
        deleteSelection() {
          return this.selection.replace(this), this;
        }
        insertText(_, _, _) {
          let _ = this.doc.type.schema;
          if (null == _)
            return _
              ? this.replaceSelectionWith(_.text(_), !0)
              : this.deleteSelection();
          {
            if ((null == _ && (_ = _), (_ = null == _ ? _ : _), !_))
              return this.deleteRange(_, _);
            let _ = this.storedMarks;
            if (!_) {
              let _ = this.doc.resolve(_);
              _ = _ == _ ? _.marks() : _.marksAcross(this.doc.resolve(_));
            }
            return (
              this.replaceRangeWith(_, _, _.text(_, _)),
              this.selection.empty ||
                this.setSelection(_.near(this.selection.$to)),
              this
            );
          }
        }
        setMeta(_, _) {
          return (this.meta["string" == typeof _ ? _ : _.key] = _), this;
        }
        getMeta(_) {
          return this.meta["string" == typeof _ ? _ : _.key];
        }
        get isGeneric() {
          for (let _ in this.meta) return !1;
          return !0;
        }
        scrollIntoView() {
          return (this.updated |= 4), this;
        }
        get scrolledIntoView() {
          return (4 & this.updated) > 0;
        }
      }
      function _(_, _) {
        return _ && _ ? _.bind(_) : _;
      }
      class _ {
        constructor(_, _, _) {
          (this.name = _),
            (this.init = _(_.init, _)),
            (this.apply = _(_.apply, _));
        }
      }
      const _ = [
        new _("doc", {
          init: (_) => _.doc || _.schema.topNodeType.createAndFill(),
          apply: (_) => _.doc,
        }),
        new _("selection", {
          init: (_, _) => _.selection || _.atStart(_.doc),
          apply: (_) => _.selection,
        }),
        new _("storedMarks", {
          init: (_) => _.storedMarks || null,
          apply: (_, _, _, _) => (_.selection.$cursor ? _.storedMarks : null),
        }),
        new _("scrollToSelection", {
          init: () => 0,
          apply: (_, _) => (_.scrolledIntoView ? _ + 1 : _),
        }),
      ];
      class _ {
        constructor(_, _) {
          (this.schema = _),
            (this.plugins = []),
            (this.pluginsByKey = Object.create(null)),
            (this.fields = _.slice()),
            _ &&
              _.forEach((_) => {
                if (this.pluginsByKey[_.key])
                  throw new RangeError(
                    "Adding different instances of a keyed plugin (" +
                      _.key +
                      ")",
                  );
                this.plugins.push(_),
                  (this.pluginsByKey[_.key] = _),
                  _.spec.state &&
                    this.fields.push(new _(_.key, _.spec.state, _));
              });
        }
      }
      class _ {
        constructor(_) {
          this.config = _;
        }
        get schema() {
          return this.config.schema;
        }
        get plugins() {
          return this.config.plugins;
        }
        apply(_) {
          return this.applyTransaction(_).state;
        }
        filterTransaction(_, _ = -1) {
          for (let _ = 0; _ < this.config.plugins.length; _++)
            if (_ != _) {
              let _ = this.config.plugins[_];
              if (
                _.spec.filterTransaction &&
                !_.spec.filterTransaction.call(_, _, this)
              )
                return !1;
            }
          return !0;
        }
        applyTransaction(_) {
          if (!this.filterTransaction(_))
            return {
              state: this,
              transactions: [],
            };
          let _ = [_],
            _ = this.applyInner(_),
            _ = null;
          for (;;) {
            let _ = !1;
            for (let _ = 0; _ < this.config.plugins.length; _++) {
              let _ = this.config.plugins[_];
              if (_.spec.appendTransaction) {
                let _ = _ ? _[_]._ : 0,
                  _ = _ ? _[_].state : this,
                  _ =
                    _ < _.length &&
                    _.spec.appendTransaction.call(_, _ ? _.slice(_) : _, _, _);
                if (_ && __webpack_require__.filterTransaction(_, _)) {
                  if ((_.setMeta("appendedTransaction", _), !_)) {
                    _ = [];
                    for (let _ = 0; _ < this.config.plugins.length; _++)
                      _.push(
                        _ < _
                          ? {
                              state: _,
                              _: _.length,
                            }
                          : {
                              state: this,
                              _: 0,
                            },
                      );
                  }
                  _.push(_), (_ = __webpack_require__.applyInner(_)), (_ = !0);
                }
                _ &&
                  (_[_] = {
                    state: _,
                    _: _.length,
                  });
              }
            }
            if (!_)
              return {
                state: _,
                transactions: _,
              };
          }
        }
        applyInner(_) {
          if (!_.before._(this.doc))
            throw new RangeError("Applying a mismatched transaction");
          let _ = new _(this.config),
            _ = this.config.fields;
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_];
            _[_.name] = _.apply(_, this[_.name], this, _);
          }
          return _;
        }
        get tr() {
          return new _(this);
        }
        static create(_) {
          let _ = new _(_.doc ? _.doc.type.schema : _.schema, _.plugins),
            _ = new _(_);
          for (let _ = 0; _ < _.fields.length; _++)
            _[_.fields[_].name] = _.fields[_].init(_, _);
          return _;
        }
        reconfigure(_) {
          let _ = new _(this.schema, _.plugins),
            _ = _.fields,
            _ = new _(_);
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_].name;
            _[_] = this.hasOwnProperty(_) ? this[_] : _[_].init(_, _);
          }
          return _;
        }
        toJSON(_) {
          let _ = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON(),
          };
          if (
            (this.storedMarks &&
              (_.storedMarks = this.storedMarks.map((_) => _.toJSON())),
            _ && "object" == typeof _)
          )
            for (let _ in _) {
              if ("doc" == _ || "selection" == _)
                throw new RangeError(
                  "The JSON fields `doc` and `selection` are reserved",
                );
              let _ = _[_],
                _ = _.spec.state;
              _ && _.toJSON && (_[_] = _.toJSON.call(_, this[_.key]));
            }
          return _;
        }
        static fromJSON(_, _, _) {
          if (!_)
            throw new RangeError("Invalid input for EditorState.fromJSON");
          if (!_.schema)
            throw new RangeError("Required config field 'schema' missing");
          let _ = new _(_.schema, _.plugins),
            _ = new _(_);
          return (
            _.fields.forEach((_) => {
              if ("doc" == _.name) _.doc = _._.fromJSON(_.schema, _.doc);
              else if ("selection" == _.name)
                _.selection = _.fromJSON(_.doc, _.selection);
              else if ("storedMarks" == _.name)
                _.storedMarks &&
                  (_.storedMarks = _.storedMarks.map(_.schema.markFromJSON));
              else {
                if (_)
                  for (let _ in _) {
                    let _ = _[_],
                      _ = _.spec.state;
                    if (
                      _.key == _.name &&
                      _ &&
                      _.fromJSON &&
                      Object.prototype.hasOwnProperty.call(_, _)
                    )
                      return void (_[_.name] = _.fromJSON.call(_, _, _[_], _));
                  }
                _[_.name] = _.init(_, _);
              }
            }),
            _
          );
        }
      }
      function _(_, _, _) {
        for (let _ in _) {
          let _ = _[_];
          _ instanceof Function
            ? (_ = _.bind(_))
            : "handleDOMEvents" == _ && (_ = _(_, _, {})),
            (_[_] = _);
        }
        return _;
      }
      class _ {
        constructor(_) {
          (this.spec = _),
            (this.props = {}),
            _.props && _(_.props, this, this.props),
            (this.key = _.key ? _.key.key : _("plugin"));
        }
        getState(_) {
          return _[this.key];
        }
      }
      const _ = Object.create(null);
      function _(_) {
        return _ in _ ? _ + "$" + ++_[_] : ((_[_] = 0), _ + "$");
      }
      class _ {
        constructor(_ = "key") {
          this.key = _(_);
        }
        get(_) {
          return _.config.pluginsByKey[this.key];
        }
        getState(_) {
          return _[this.key];
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      if ("undefined" != typeof WeakMap) {
        let _ = new WeakMap();
        (_ = (_) => _.get(_)), (_ = (_, _) => (_.set(_, _), _));
      } else {
        const _ = [],
          _ = 10;
        let _ = 0;
        (_ = (_) => {
          for (let _ = 0; _ < _.length; _ += 2) if (_[_] == _) return _[_ + 1];
        }),
          (_ = (_, _) => (_ == _ && (_ = 0), (_[_++] = _), (_[_++] = _)));
      }
      var _ = class {
        constructor(_, _, _, _) {
          (this.width = _),
            (this.height = _),
            (this.map = _),
            (this.problems = _);
        }
        findCell(_) {
          for (let _ = 0; _ < this.map.length; _++) {
            const _ = this.map[_];
            if (_ != _) continue;
            const _ = _ % this.width,
              _ = (_ / this.width) | 0;
            let _ = _ + 1,
              _ = _ + 1;
            for (let _ = 1; _ < this.width && this.map[_ + _] == _; _++) _++;
            for (
              let _ = 1;
              _ < this.height && this.map[_ + this.width * _] == _;
              _++
            )
              _++;
            return {
              left: _,
              top: _,
              right: _,
              bottom: _,
            };
          }
          throw new RangeError(`No cell with offset ${_} found`);
        }
        colCount(_) {
          for (let _ = 0; _ < this.map.length; _++)
            if (this.map[_] == _) return _ % this.width;
          throw new RangeError(`No cell with offset ${_} found`);
        }
        nextCell(_, _, _) {
          const { left: _, right: _, top: _, bottom: _ } = this.findCell(_);
          return "horiz" == _
            ? (_ < 0 ? 0 == _ : _ == this.width)
              ? null
              : this.map[_ * this.width + (_ < 0 ? _ - 1 : _)]
            : (_ < 0 ? 0 == _ : _ == this.height)
              ? null
              : this.map[_ + this.width * (_ < 0 ? _ - 1 : _)];
        }
        rectBetween(_, _) {
          const { left: _, right: _, top: _, bottom: _ } = this.findCell(_),
            { left: _, right: _, top: _, bottom: _ } = this.findCell(_);
          return {
            left: Math.min(_, _),
            top: Math.min(_, _),
            right: Math.max(_, _),
            bottom: Math.max(_, _),
          };
        }
        cellsInRect(_) {
          const _ = [],
            _ = {};
          for (let _ = _.top; _ < _.bottom; _++)
            for (let _ = _.left; _ < _.right; _++) {
              const _ = _ * this.width + _,
                _ = this.map[_];
              _[_] ||
                ((_[_] = !0),
                (_ == _.left && _ && this.map[_ - 1] == _) ||
                  (_ == _.top && _ && this.map[_ - this.width] == _) ||
                  _.push(_));
            }
          return _;
        }
        positionAt(_, _, _) {
          for (let _ = 0, _ = 0; ; _++) {
            const _ = _ + __webpack_require__.child(_).nodeSize;
            if (_ == _) {
              let _ = _ + _ * this.width;
              const _ = (_ + 1) * this.width;
              for (; _ < _ && this.map[_] < _; ) _++;
              return _ == _ ? _ - 1 : this.map[_];
            }
            _ = _;
          }
        }
        static get(_) {
          return (
            _(_) ||
            _(
              _,
              (function (_) {
                if ("table" != _.type.spec.tableRole)
                  throw new RangeError("Not a table node: " + _.type.name);
                const _ = (function (_) {
                    let _ = -1,
                      _ = !1;
                    for (let _ = 0; _ < _.childCount; _++) {
                      const _ = _.child(_);
                      let _ = 0;
                      if (_)
                        for (let _ = 0; _ < _; _++) {
                          const _ = _.child(_);
                          for (let _ = 0; _ < _.childCount; _++) {
                            const _ = __webpack_require__.child(_);
                            _ + _.attrs.rowspan > _ && (_ += _.attrs.colspan);
                          }
                        }
                      for (let _ = 0; _ < _.childCount; _++) {
                        const _ = _.child(_);
                        (_ += _.attrs.colspan), _.attrs.rowspan > 1 && (_ = !0);
                      }
                      -1 == _ ? (_ = _) : _ != _ && (_ = Math.max(_, _));
                    }
                    return _;
                  })(_),
                  _ = _.childCount,
                  _ = [];
                let _ = 0,
                  _ = null;
                const _ = [];
                for (let _ = 0, _ = _ * _; _ < _; _++) _[_] = 0;
                for (let _ = 0, _ = 0; _ < _; _++) {
                  const _ = _.child(_);
                  _++;
                  for (let _ = 0; ; _++) {
                    for (; _ < _.length && 0 != _[_]; ) _++;
                    if (_ == _.childCount) break;
                    const _ = _.child(_),
                      { colspan: _, rowspan: _, colwidth: _ } = _.attrs;
                    for (let _ = 0; _ < _; _++) {
                      if (_ + _ >= _) {
                        (_ || (_ = [])).push({
                          type: "overlong_rowspan",
                          pos: _,
                          _: _ - _,
                        });
                        break;
                      }
                      const _ = _ + _ * _;
                      for (let _ = 0; _ < _; _++) {
                        0 == _[_ + _]
                          ? (_[_ + _] = _)
                          : (_ || (_ = [])).push({
                              type: "collision",
                              row: _,
                              pos: _,
                              _: _ - _,
                            });
                        const _ = _ && _[_];
                        if (_) {
                          const _ = ((_ + _) % _) * 2,
                            _ = _[_];
                          null == _ || (_ != _ && 1 == _[_ + 1])
                            ? ((_[_] = _), (_[_ + 1] = 1))
                            : _ == _ && _[_ + 1]++;
                        }
                      }
                    }
                    (_ += _), (_ += _.nodeSize);
                  }
                  const _ = (_ + 1) * _;
                  let _ = 0;
                  for (; _ < _; ) 0 == _[_++] && _++;
                  _ &&
                    (_ || (_ = [])).push({
                      type: "missing",
                      row: _,
                      _: _,
                    }),
                    _++;
                }
                const _ = new _(_, _, _, _);
                let _ = !1;
                for (let _ = 0; !_ && _ < _.length; _ += 2)
                  null != _[_] && _[_ + 1] < _ && (_ = !0);
                _ &&
                  (function (_, _, _) {
                    _.problems || (_.problems = []);
                    const _ = {};
                    for (let _ = 0; _ < _.map.length; _++) {
                      const _ = _.map[_];
                      if (_[_]) continue;
                      _[_] = !0;
                      const _ = __webpack_require__.nodeAt(_);
                      if (!_)
                        throw new RangeError(`No cell with offset ${_} found`);
                      let _ = null;
                      const _ = _.attrs;
                      for (let _ = 0; _ < _.colspan; _++) {
                        const _ = _[2 * ((_ + _) % _.width)];
                        null == _ ||
                          (_.colwidth && _.colwidth[_] == _) ||
                          ((_ || (_ = _(_)))[_] = _);
                      }
                      _ &&
                        _.problems.unshift({
                          type: "colwidth mismatch",
                          pos: _,
                          colwidth: _,
                        });
                    }
                  })(_, _, _);
                return _;
              })(_),
            )
          );
        }
      };
      function _(_) {
        if (_.colwidth) return _.colwidth.slice();
        const _ = [];
        for (let _ = 0; _ < _.colspan; _++) _.push(0);
        return _;
      }
      function _(_, _) {
        if ("string" == typeof _) return {};
        const _ = _.getAttribute("data-colwidth"),
          _ =
            _ && /^\d+(,\d+)*$/.test(_)
              ? __webpack_require__.split(",").map((_) => Number(_))
              : null,
          _ = Number(_.getAttribute("colspan") || 1),
          _ = {
            colspan: _,
            rowspan: Number(_.getAttribute("rowspan") || 1),
            colwidth: _ && _.length == _ ? _ : null,
          };
        for (const _ in _) {
          const _ = _[_].getFromDOM,
            _ = _ && _(_);
          null != _ && (_[_] = _);
        }
        return _;
      }
      function _(_, _) {
        const _ = {};
        1 != _.attrs.colspan && (_.colspan = _.attrs.colspan),
          1 != _.attrs.rowspan && (_.rowspan = _.attrs.rowspan),
          _.attrs.colwidth && (_["data-colwidth"] = _.attrs.colwidth.join(","));
        for (const _ in _) {
          const _ = _[_].setDOMAttr;
          _ && _(_.attrs[_], _);
        }
        return _;
      }
      function _(_) {
        const _ = _.cellAttributes || {},
          _ = {
            colspan: {
              default: 1,
            },
            rowspan: {
              default: 1,
            },
            colwidth: {
              default: null,
            },
          };
        for (const _ in _)
          _[_] = {
            default: _[_].default,
          };
        return {
          table: {
            content: "table_row+",
            tableRole: "table",
            isolating: !0,
            group: _.tableGroup,
            parseDOM: [
              {
                tag: "table",
              },
            ],
            toDOM: () => ["table", ["tbody", 0]],
          },
          table_row: {
            content: "(table_cell | table_header)*",
            tableRole: "row",
            parseDOM: [
              {
                tag: "tr",
              },
            ],
            toDOM: () => ["tr", 0],
          },
          table_cell: {
            content: _.cellContent,
            attrs: _,
            tableRole: "cell",
            isolating: !0,
            parseDOM: [
              {
                tag: "td",
                getAttrs: (_) => _(_, _),
              },
            ],
            toDOM: (_) => ["td", _(_, _), 0],
          },
          table_header: {
            content: _.cellContent,
            attrs: _,
            tableRole: "header_cell",
            isolating: !0,
            parseDOM: [
              {
                tag: "th",
                getAttrs: (_) => _(_, _),
              },
            ],
            toDOM: (_) => ["th", _(_, _), 0],
          },
        };
      }
      function _(_) {
        let _ = _.cached.tableNodeTypes;
        if (!_) {
          _ = _.cached.tableNodeTypes = {};
          for (const _ in _.nodes) {
            const _ = _.nodes[_],
              _ = _.spec.tableRole;
            _ && (_[_] = _);
          }
        }
        return _;
      }
      var _ = new _._("selectingCells");
      function _(_) {
        for (let _ = _.depth - 1; _ > 0; _--)
          if ("row" == _.node(_).type.spec.tableRole)
            return _.node(0).resolve(_.before(_ + 1));
        return null;
      }
      function _(_) {
        const _ = _.selection.$head;
        for (let _ = _.depth; _ > 0; _--)
          if ("row" == _.node(_).type.spec.tableRole) return !0;
        return !1;
      }
      function _(_) {
        const _ = _.selection;
        if ("$anchorCell" in _ && _.$anchorCell)
          return _.$anchorCell.pos > _.$headCell.pos
            ? _.$anchorCell
            : _.$headCell;
        if ("node" in _ && _.node && "cell" == _.node.type.spec.tableRole)
          return _.$anchor;
        const _ =
          _(_.$head) ||
          (function (_) {
            for (let _ = _.nodeAfter, _ = _.pos; _; _ = _.firstChild, _++) {
              const _ = _.type.spec.tableRole;
              if ("cell" == _ || "header_cell" == _) return _.doc.resolve(_);
            }
            for (let _ = _.nodeBefore, _ = _.pos; _; _ = _.lastChild, _--) {
              const _ = _.type.spec.tableRole;
              if ("cell" == _ || "header_cell" == _)
                return _.doc.resolve(_ - _.nodeSize);
            }
          })(_.$head);
        if (_) return _;
        throw new RangeError(`No cell found around position ${_.head}`);
      }
      function _(_) {
        return "row" == _.parent.type.spec.tableRole && !!_.nodeAfter;
      }
      function _(_, _) {
        return _.depth == _.depth && _.pos >= _.start(-1) && _.pos <= _.end(-1);
      }
      function _(_, _, _) {
        const _ = _.node(-1),
          _ = _.get(_),
          _ = _.start(-1),
          _ = _.nextCell(_.pos - _, _, _);
        return null == _ ? null : _.node(0).resolve(_ + _);
      }
      function _(_, _, _ = 1) {
        const _ = {
          ..._,
          colspan: _.colspan - _,
        };
        return (
          _.colwidth &&
            ((_.colwidth = _.colwidth.slice()),
            _.colwidth.splice(_, _),
            _.colwidth.some((_) => _ > 0) || (_.colwidth = null)),
          _
        );
      }
      var _ = class _ extends _._ {
        constructor(_, _ = _) {
          const _ = _.node(-1),
            _ = _.get(_),
            _ = _.start(-1),
            _ = _.rectBetween(_.pos - _, _.pos - _),
            _ = _.node(0),
            _ = _.cellsInRect(_).filter((_) => _ != _.pos - _);
          _.unshift(_.pos - _);
          const _ = _.map((_) => {
            const _ = __webpack_require__.nodeAt(_);
            if (!_) throw RangeError(`No cell with offset ${_} found`);
            const _ = _ + _ + 1;
            return new _._(_.resolve(_), _.resolve(_ + _.content.size));
          });
          super(_[0].$from, _[0].$to, _),
            (this.$anchorCell = _),
            (this.$headCell = _);
        }
        map(_, _) {
          const _ = _.resolve(__webpack_require__.map(this.$anchorCell.pos)),
            _ = _.resolve(__webpack_require__.map(this.$headCell.pos));
          if (_(_) && _(_) && _(_, _)) {
            const _ = this.$anchorCell.node(-1) != _.node(-1);
            return _ && this.isRowSelection()
              ? _.rowSelection(_, _)
              : _ && this.isColSelection()
                ? _.colSelection(_, _)
                : new _(_, _);
          }
          return _._.between(_, _);
        }
        content() {
          const _ = this.$anchorCell.node(-1),
            _ = _.get(_),
            _ = this.$anchorCell.start(-1),
            _ = _.rectBetween(this.$anchorCell.pos - _, this.$headCell.pos - _),
            _ = {},
            _ = [];
          for (let _ = _.top; _ < _.bottom; _++) {
            const _ = [];
            for (
              let _ = _ * _.width + _.left, _ = _.left;
              _ < _.right;
              _++, _++
            ) {
              const _ = _.map[_];
              if (_[_]) continue;
              _[_] = !0;
              const _ = _.findCell(_);
              let _ = _.nodeAt(_);
              if (!_) throw RangeError(`No cell with offset ${_} found`);
              const _ = _.left - _.left,
                _ = _.right - _.right;
              if (_ > 0 || _ > 0) {
                let _ = _.attrs;
                if (
                  (_ > 0 && (_ = _(_, 0, _)),
                  _ > 0 && (_ = _(_, _.colspan - _, _)),
                  _.left < _.left)
                ) {
                  if (((_ = _.type.createAndFill(_)), !_))
                    throw RangeError(
                      `Could not create cell with attrs ${JSON.stringify(_)}`,
                    );
                } else _ = _.type.create(_, _.content);
              }
              if (_.top < _.top || _.bottom > _.bottom) {
                const _ = {
                  ..._.attrs,
                  rowspan:
                    Math.min(_.bottom, _.bottom) - Math.max(_.top, _.top),
                };
                _ =
                  _.top < _.top
                    ? _.type.createAndFill(_)
                    : _.type.create(_, _.content);
              }
              _.push(_);
            }
            _.push(_.child(_).copy(_._.from(_)));
          }
          const _ = this.isColSelection() && this.isRowSelection() ? _ : _;
          return new _._(_._.from(_), 1, 1);
        }
        replace(_, _ = _._.empty) {
          const _ = _.steps.length,
            _ = this.ranges;
          for (let _ = 0; _ < _.length; _++) {
            const { $from: _, $to: _ } = _[_],
              _ = _.mapping.slice(_);
            _.replace(_.map(_.pos), _.map(_.pos), _ ? _._.empty : _);
          }
          const _ = _._.findFrom(
            _.doc.resolve(_.mapping.slice(_).map(this._)),
            -1,
          );
          _ && _.setSelection(_);
        }
        replaceWith(_, _) {
          this.replace(_, new _._(_._.from(_), 0, 0));
        }
        forEachCell(_) {
          const _ = this.$anchorCell.node(-1),
            _ = _.get(_),
            _ = this.$anchorCell.start(-1),
            _ = __webpack_require__.cellsInRect(
              __webpack_require__.rectBetween(
                this.$anchorCell.pos - _,
                this.$headCell.pos - _,
              ),
            );
          for (let _ = 0; _ < _.length; _++) _(_.nodeAt(_[_]), _ + _[_]);
        }
        isColSelection() {
          const _ = this.$anchorCell.index(-1),
            _ = this.$headCell.index(-1);
          if (Math.min(_, _) > 0) return !1;
          const _ = _ + this.$anchorCell.nodeAfter.attrs.rowspan,
            _ = _ + this.$headCell.nodeAfter.attrs.rowspan;
          return Math.max(_, _) == this.$headCell.node(-1).childCount;
        }
        static colSelection(_, _ = _) {
          const _ = _.node(-1),
            _ = _.get(_),
            _ = _.start(-1),
            _ = _.findCell(_.pos - _),
            _ = _.findCell(_.pos - _),
            _ = _.node(0);
          return (
            _.top <= _.top
              ? (_.top > 0 && (_ = _.resolve(_ + _.map[_.left])),
                _.bottom < _.height &&
                  (_ = _.resolve(
                    _ + _.map[_.width * (_.height - 1) + _.right - 1],
                  )))
              : (_.top > 0 && (_ = _.resolve(_ + _.map[_.left])),
                _.bottom < _.height &&
                  (_ = _.resolve(
                    _ + _.map[_.width * (_.height - 1) + _.right - 1],
                  ))),
            new _(_, _)
          );
        }
        isRowSelection() {
          const _ = this.$anchorCell.node(-1),
            _ = _.get(_),
            _ = this.$anchorCell.start(-1),
            _ = _.colCount(this.$anchorCell.pos - _),
            _ = _.colCount(this.$headCell.pos - _);
          if (Math.min(_, _) > 0) return !1;
          const _ = _ + this.$anchorCell.nodeAfter.attrs.colspan,
            _ = _ + this.$headCell.nodeAfter.attrs.colspan;
          return Math.max(_, _) == _.width;
        }
        eq(_) {
          return (
            _ instanceof _ &&
            _.$anchorCell.pos == this.$anchorCell.pos &&
            _.$headCell.pos == this.$headCell.pos
          );
        }
        static rowSelection(_, _ = _) {
          const _ = _.node(-1),
            _ = _.get(_),
            _ = _.start(-1),
            _ = _.findCell(_.pos - _),
            _ = _.findCell(_.pos - _),
            _ = _.node(0);
          return (
            _.left <= _.left
              ? (_.left > 0 && (_ = _.resolve(_ + _.map[_.top * _.width])),
                _.right < _.width &&
                  (_ = _.resolve(_ + _.map[_.width * (_.top + 1) - 1])))
              : (_.left > 0 && (_ = _.resolve(_ + _.map[_.top * _.width])),
                _.right < _.width &&
                  (_ = _.resolve(_ + _.map[_.width * (_.top + 1) - 1]))),
            new _(_, _)
          );
        }
        toJSON() {
          return {
            type: "cell",
            anchor: this.$anchorCell.pos,
            head: this.$headCell.pos,
          };
        }
        static fromJSON(_, _) {
          return new _(_.resolve(_.anchor), _.resolve(_.head));
        }
        static create(_, _, _ = _) {
          return new _(_.resolve(_), _.resolve(_));
        }
        getBookmark() {
          return new _(this.$anchorCell.pos, this.$headCell.pos);
        }
      };
      (_.prototype.visible = !1), _._.jsonID("cell", _);
      var _ = class _ {
        constructor(_, _) {
          (this.anchor = _), (this.head = _);
        }
        map(_) {
          return new _(_.map(this.anchor), _.map(this.head));
        }
        resolve(_) {
          const _ = _.resolve(this.anchor),
            _ = _.resolve(this.head);
          return "row" == _.parent.type.spec.tableRole &&
            "row" == _.parent.type.spec.tableRole &&
            _.index() < _.parent.childCount &&
            __webpack_require__.index() < _.parent.childCount &&
            _(_, _)
            ? new _(_, _)
            : _._.near(_, 1);
        }
      };
      function _(_) {
        if (!(_.selection instanceof _)) return null;
        const _ = [];
        return (
          _.selection.forEachCell((_, _) => {
            _.push(
              _._.node(_, _ + _.nodeSize, {
                class: "selectedCell",
              }),
            );
          }),
          _._.create(_.doc, _)
        );
      }
      var _ = new _._("fix-tables");
      function _(_, _, _, _) {
        const _ = _.childCount,
          _ = _.childCount;
        _: for (let _ = 0, _ = 0; _ < _; _++) {
          const _ = _.child(_);
          for (let _ = _, _ = Math.min(_, _ + 3); _ < _; _++)
            if (_.child(_) == _) {
              (_ = _ + 1), (_ += _.nodeSize);
              continue _;
            }
          _(_, _),
            _ < _ && _.child(_).sameMarkup(_)
              ? _(_.child(_), _, _ + 1, _)
              : _.nodesBetween(0, _.content.size, _, _ + 1),
            (_ += _.nodeSize);
        }
      }
      function _(_, _) {
        let _;
        const _ = (_, _) => {
          "table" == _.type.spec.tableRole &&
            (_ = (function (_, _, _, _) {
              const _ = _.get(_);
              if (!_.problems) return _;
              _ || (_ = _._);
              const _ = [];
              for (let _ = 0; _ < _.height; _++) _.push(0);
              for (let _ = 0; _ < _.problems.length; _++) {
                const _ = _.problems[_];
                if ("collision" == _.type) {
                  const _ = _.nodeAt(_.pos);
                  if (!_) continue;
                  const _ = _.attrs;
                  for (let _ = 0; _ < _.rowspan; _++) _[_.row + _] += _._;
                  _.setNodeMarkup(
                    _.mapping.map(_ + 1 + _.pos),
                    null,
                    _(_, _.colspan - _._, _._),
                  );
                } else if ("missing" == _.type) _[_.row] += _._;
                else if ("overlong_rowspan" == _.type) {
                  const _ = _.nodeAt(_.pos);
                  if (!_) continue;
                  _.setNodeMarkup(_.mapping.map(_ + 1 + _.pos), null, {
                    ..._.attrs,
                    rowspan: _.attrs.rowspan - _._,
                  });
                } else if ("colwidth mismatch" == _.type) {
                  const _ = _.nodeAt(_.pos);
                  if (!_) continue;
                  _.setNodeMarkup(_.mapping.map(_ + 1 + _.pos), null, {
                    ..._.attrs,
                    colwidth: _.colwidth,
                  });
                }
              }
              let _, _;
              for (let _ = 0; _ < _.length; _++)
                _[_] && (null == _ && (_ = _), (_ = _));
              for (let _ = 0, _ = _ + 1; _ < _.height; _++) {
                const _ = _.child(_),
                  _ = _ + _.nodeSize,
                  _ = _[_];
                if (_ > 0) {
                  let _ = "cell";
                  _.firstChild && (_ = _.firstChild.type.spec.tableRole);
                  const _ = [];
                  for (let _ = 0; _ < _; _++) {
                    const _ = _(_.schema)[_].createAndFill();
                    _ && _.push(_);
                  }
                  const _ = (0 != _ && _ != _ - 1) || _ != _ ? _ - 1 : _ + 1;
                  _.insert(_.mapping.map(_), _);
                }
                _ = _;
              }
              return _.setMeta(_, {
                fixTables: !0,
              });
            })(_, _, _, _));
        };
        return (
          _ ? _.doc != _.doc && _(_.doc, _.doc, 0, _) : _.doc.descendants(_), _
        );
      }
      function _(_) {
        const _ = _.selection,
          _ = _(_),
          _ = __webpack_require__.node(-1),
          _ = __webpack_require__.start(-1),
          _ = _.get(_);
        return {
          ...(_ instanceof _
            ? _.rectBetween(_.$anchorCell.pos - _, _.$headCell.pos - _)
            : _.findCell(_.pos - _)),
          tableStart: _,
          map: _,
          table: _,
        };
      }
      function _(_, _, _) {
        const _ = _.map.cellsInRect({
          left: 0,
          top: 0,
          right: "row" == _ ? _.map.width : 1,
          bottom: "column" == _ ? _.map.height : 1,
        });
        for (let _ = 0; _ < _.length; _++) {
          const _ = _.table.nodeAt(_[_]);
          if (_ && _.type !== _.header_cell) return !1;
        }
        return !0;
      }
      function _(_, _) {
        return (_ = _ || {
          useDeprecatedLogic: !1,
        }).useDeprecatedLogic
          ? (function (_) {
              return function (_, _) {
                if (!_(_)) return !1;
                if (_) {
                  const _ = _(_.schema),
                    _ = _(_),
                    _ = _._,
                    _ = _.map.cellsInRect(
                      "column" == _
                        ? {
                            left: _.left,
                            top: 0,
                            right: _.right,
                            bottom: _.map.height,
                          }
                        : "row" == _
                          ? {
                              left: 0,
                              top: _.top,
                              right: _.map.width,
                              bottom: _.bottom,
                            }
                          : _,
                    ),
                    _ = _.map((_) => _.table.nodeAt(_));
                  for (let _ = 0; _ < _.length; _++)
                    _[_].type == _.header_cell &&
                      _.setNodeMarkup(_.tableStart + _[_], _.cell, _[_].attrs);
                  if (0 == _.steps.length)
                    for (let _ = 0; _ < _.length; _++)
                      _.setNodeMarkup(
                        _.tableStart + _[_],
                        _.header_cell,
                        _[_].attrs,
                      );
                  __webpack_require__(_);
                }
                return !0;
              };
            })(_)
          : function (_, _) {
              if (!_(_)) return !1;
              if (_) {
                const _ = _(_.schema),
                  _ = _(_),
                  _ = _._,
                  _ = _("row", _, _),
                  _ = _("column", _, _),
                  _ = ("column" === _ ? _ : "row" === _ && _) ? 1 : 0,
                  _ =
                    "column" == _
                      ? {
                          left: 0,
                          top: _,
                          right: 1,
                          bottom: _.map.height,
                        }
                      : "row" == _
                        ? {
                            left: _,
                            top: 0,
                            right: _.map.width,
                            bottom: 1,
                          }
                        : _,
                  _ =
                    "column" == _
                      ? _
                        ? _.cell
                        : _.header_cell
                      : "row" == _
                        ? _
                          ? _.cell
                          : _.header_cell
                        : _.cell;
                _.map.cellsInRect(_).forEach((_) => {
                  const _ = _ + _.tableStart,
                    _ = _.doc.nodeAt(_);
                  _ && _.setNodeMarkup(_, _, _.attrs);
                }),
                  __webpack_require__(_);
              }
              return !0;
            };
      }
      _("row", {
        useDeprecatedLogic: !0,
      }),
        _("column", {
          useDeprecatedLogic: !0,
        }),
        _("cell", {
          useDeprecatedLogic: !0,
        });
      function _(_, _) {
        const _ = _.selection;
        if (!(_ instanceof _)) return !1;
        if (_) {
          const _ = _._,
            _ = _(_.schema).cell.createAndFill().content;
          __webpack_require__.forEachCell((_, _) => {
            _.content._(_) ||
              _.replace(
                _.mapping.map(_ + 1),
                _.mapping.map(_ + _.nodeSize - 1),
                new _._(_, 0, 0),
              );
          }),
            _.docChanged && _(_);
        }
        return !0;
      }
      function _(_) {
        if (!_.size) return null;
        let { content: _, openStart: _, openEnd: _ } = _;
        for (
          ;
          1 == _.childCount &&
          ((_ > 0 && _ > 0) || "table" == _.child(0).type.spec.tableRole);
        )
          _--, _--, (_ = _.child(0).content);
        const _ = _.child(0),
          _ = _.type.spec.tableRole,
          _ = _.type.schema,
          _ = [];
        if ("row" == _)
          for (let _ = 0; _ < _.childCount; _++) {
            let _ = _.child(_).content;
            const _ = _ ? 0 : Math.max(0, _ - 1),
              _ = _ < _.childCount - 1 ? 0 : Math.max(0, _ - 1);
            (_ || _) && (_ = _(_(_).row, new _._(_, _, _)).content), _.push(_);
          }
        else {
          if ("cell" != _ && "header_cell" != _) return null;
          _.push(_ || _ ? _(_(_).row, new _._(_, _, _)).content : _);
        }
        return (function (_, _) {
          const _ = [];
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            for (let _ = _.childCount - 1; _ >= 0; _--) {
              const { rowspan: _, colspan: _ } = _.child(_).attrs;
              for (let _ = _; _ < _ + _; _++) _[_] = (_[_] || 0) + _;
            }
          }
          let _ = 0;
          for (let _ = 0; _ < _.length; _++) _ = Math.max(_, _[_]);
          for (let _ = 0; _ < _.length; _++)
            if ((_ >= _.length && _.push(_._.empty), _[_] < _)) {
              const _ = _(_).cell.createAndFill(),
                _ = [];
              for (let _ = _[_]; _ < _; _++) _.push(_);
              _[_] = _[_].append(_._.from(_));
            }
          return {
            height: _.length,
            width: _,
            rows: _,
          };
        })(_, _);
      }
      function _(_, _) {
        const _ = _.createAndFill();
        return new _._(_).replace(0, _.content.size, _).doc;
      }
      function _(_, _, _, _, _, _, _, _) {
        if (0 == _ || _ == _.height) return !1;
        let _ = !1;
        for (let _ = _; _ < _; _++) {
          const _ = _ * _.width + _,
            _ = _.map[_];
          if (_.map[_ - _.width] == _) {
            _ = !0;
            const _ = __webpack_require__.nodeAt(_),
              { top: _, left: _ } = _.findCell(_);
            _.setNodeMarkup(_.mapping.slice(_).map(_ + _), null, {
              ..._.attrs,
              rowspan: _ - _,
            }),
              _.insert(
                _.mapping.slice(_).map(_.positionAt(_, _, _)),
                _.type.createAndFill({
                  ..._.attrs,
                  rowspan: _ + _.attrs.rowspan - _,
                }),
              ),
              (_ += _.attrs.colspan - 1);
          }
        }
        return _;
      }
      function _(_, _, _, _, _, _, _, _) {
        if (0 == _ || _ == _.width) return !1;
        let _ = !1;
        for (let _ = _; _ < _; _++) {
          const _ = _ * _.width + _,
            _ = _.map[_];
          if (_.map[_ - 1] == _) {
            _ = !0;
            const _ = __webpack_require__.nodeAt(_),
              _ = _.colCount(_),
              _ = _.mapping.slice(_).map(_ + _);
            _.setNodeMarkup(
              _,
              null,
              _(_.attrs, _ - _, _.attrs.colspan - (_ - _)),
            ),
              _.insert(
                _ + _.nodeSize,
                _.type.createAndFill(_(_.attrs, 0, _ - _)),
              ),
              (_ += _.attrs.rowspan - 1);
          }
        }
        return _;
      }
      function _(_, _, _, _, _) {
        let _ = _ ? _.doc.nodeAt(_ - 1) : _.doc;
        if (!_) throw new Error("No table found");
        let _ = _.get(_);
        const { top: _, left: _ } = _,
          _ = _ + _.width,
          _ = _ + _.height,
          _ = _._;
        let _ = 0;
        function _() {
          if (((_ = _ ? _.doc.nodeAt(_ - 1) : _.doc), !_))
            throw new Error("No table found");
          (_ = _.get(_)), (_ = _.mapping.maps.length);
        }
        (function (_, _, _, _, _, _, _) {
          const _ = _(_.doc.type.schema);
          let _, _;
          if (_ > _.width)
            for (let _ = 0, _ = 0; _ < _.height; _++) {
              const _ = __webpack_require__.child(_);
              _ += _.nodeSize;
              const _ = [];
              let _;
              _ =
                null == _.lastChild || _.lastChild.type == _.cell
                  ? _ || (_ = _.cell.createAndFill())
                  : _ || (_ = _.header_cell.createAndFill());
              for (let _ = _.width; _ < _; _++) _.push(_);
              _.insert(_.mapping.slice(_).map(_ - 1 + _), _);
            }
          if (_ > _.height) {
            const _ = [];
            for (
              let _ = 0, _ = (_.height - 1) * _.width;
              _ < Math.max(_.width, _);
              _++
            ) {
              const _ =
                !(_ >= _.width) &&
                __webpack_require__.nodeAt(_.map[_ + _]).type == _.header_cell;
              _.push(
                _
                  ? _ || (_ = _.header_cell.createAndFill())
                  : _ || (_ = _.cell.createAndFill()),
              );
            }
            const _ = _.row.create(null, _._.from(_)),
              _ = [];
            for (let _ = _.height; _ < _; _++) _.push(_);
            _.insert(_.mapping.slice(_).map(_ + _.nodeSize - 2), _);
          }
          return !(!_ && !_);
        })(_, _, _, _, _, _, _) && _(),
          _(_, _, _, _, _, _, _, _) && _(),
          _(_, _, _, _, _, _, _, _) && _(),
          _(_, _, _, _, _, _, _, _) && _(),
          _(_, _, _, _, _, _, _, _) && _();
        for (let _ = _; _ < _; _++) {
          const _ = _.positionAt(_, _, _),
            _ = _.positionAt(_, _, _);
          _.replace(
            _.mapping.slice(_).map(_ + _),
            _.mapping.slice(_).map(_ + _),
            new _._(_.rows[_ - _], 0, 0),
          );
        }
        _(),
          _.setSelection(
            new _(
              _.doc.resolve(_ + _.positionAt(_, _, _)),
              _.doc.resolve(_ + _.positionAt(_ - 1, _ - 1, _)),
            ),
          ),
          _(_);
      }
      var _ = (0, _._)({
        ArrowLeft: _("horiz", -1),
        ArrowRight: _("horiz", 1),
        ArrowUp: _("vert", -1),
        ArrowDown: _("vert", 1),
        "Shift-ArrowLeft": _("horiz", -1),
        "Shift-ArrowRight": _("horiz", 1),
        "Shift-ArrowUp": _("vert", -1),
        "Shift-ArrowDown": _("vert", 1),
        Backspace: _,
        "Mod-Backspace": _,
        Delete: _,
        "Mod-Delete": _,
      });
      function _(_, _, _) {
        return (
          !__webpack_require__._(_.selection) &&
          (_ && _(_._.setSelection(_).scrollIntoView()), !0)
        );
      }
      function _(_, _) {
        return (_, _, _) => {
          if (!_) return !1;
          const _ = _.selection;
          if (_ instanceof _) return _(_, _, _._.near(_.$headCell, _));
          if ("horiz" != _ && !_.empty) return !1;
          const _ = _(_, _, _);
          if (null == _) return !1;
          if ("horiz" == _)
            return _(_, _, _._.near(_.doc.resolve(_.head + _), _));
          {
            const _ = _.doc.resolve(_),
              _ = _(_, _, _);
            let _;
            return (
              (_ = _
                ? _._.near(_, 1)
                : _ < 0
                  ? _._.near(_.doc.resolve(_.before(-1)), -1)
                  : _._.near(_.doc.resolve(_.after(-1)), 1)),
              _(_, _, _)
            );
          }
        };
      }
      function _(_, _) {
        return (_, _, _) => {
          if (!_) return !1;
          const _ = _.selection;
          let _;
          if (_ instanceof _) _ = _;
          else {
            const _ = _(_, _, _);
            if (null == _) return !1;
            _ = new _(_.doc.resolve(_));
          }
          const _ = _(_.$headCell, _, _);
          return !!_ && _(_, _, new _(_.$anchorCell, _));
        };
      }
      function _(_, _) {
        const _ = _(_.state.doc.resolve(_));
        return !!_ && (_.dispatch(_.state._.setSelection(new _(_))), !0);
      }
      function _(_, _, _) {
        if (!_(_.state)) return !1;
        let _ = _(_);
        const _ = _.state.selection;
        if (_ instanceof _) {
          _ ||
            (_ = {
              width: 1,
              height: 1,
              rows: [_._.from(_(_(_.state.schema).cell, _))],
            });
          const _ = _.$anchorCell.node(-1),
            _ = _.$anchorCell.start(-1),
            _ = _.get(_).rectBetween(
              _.$anchorCell.pos - _,
              _.$headCell.pos - _,
            );
          return (
            (_ = (function ({ width: _, height: _, rows: _ }, _, _) {
              if (_ != _) {
                const _ = [],
                  _ = [];
                for (let _ = 0; _ < _.length; _++) {
                  const _ = _[_],
                    _ = [];
                  for (let _ = _[_] || 0, _ = 0; _ < _; _++) {
                    let _ = _.child(_ % _.childCount);
                    _ + _.attrs.colspan > _ &&
                      (_ = _.type.createChecked(
                        _(_.attrs, _.attrs.colspan, _ + _.attrs.colspan - _),
                        _.content,
                      )),
                      _.push(_),
                      (_ += _.attrs.colspan);
                    for (let _ = 1; _ < _.attrs.rowspan; _++)
                      _[_ + _] = (_[_ + _] || 0) + _.attrs.colspan;
                  }
                  _.push(_._.from(_));
                }
                (_ = _), (_ = _);
              }
              if (_ != _) {
                const _ = [];
                for (let _ = 0, _ = 0; _ < _; _++, _++) {
                  const _ = [],
                    _ = _[_ % _];
                  for (let _ = 0; _ < _.childCount; _++) {
                    let _ = _.child(_);
                    _ + _.attrs.rowspan > _ &&
                      (_ = _.type.create(
                        {
                          ..._.attrs,
                          rowspan: Math.max(1, _ - _.attrs.rowspan),
                        },
                        _.content,
                      )),
                      _.push(_);
                  }
                  _.push(_._.from(_));
                }
                (_ = _), (_ = _);
              }
              return {
                width: _,
                height: _,
                rows: _,
              };
            })(_, _.right - _.left, _.bottom - _.top)),
            _(_.state, _.dispatch, _, _, _),
            !0
          );
        }
        if (_) {
          const _ = _(_.state),
            _ = _.start(-1);
          return (
            _(_.state, _.dispatch, _, _.get(_.node(-1)).findCell(_.pos - _), _),
            !0
          );
        }
        return !1;
      }
      function _(_, _) {
        var _;
        if (_.ctrlKey || _.metaKey) return;
        const _ = _(_, _.target);
        let _;
        if (_.shiftKey && _.state.selection instanceof _)
          _(_.state.selection.$anchorCell, _), _.preventDefault();
        else if (
          _.shiftKey &&
          _ &&
          null != (_ = _(_.state.selection.$anchor)) &&
          (null == (_ = _(_, _)) ? void 0 : _.pos) != _.pos
        )
          _(_, _), _.preventDefault();
        else if (!_) return;
        function _(_, _) {
          let _ = _(_, _);
          const _ = null == _.getState(_.state);
          if (!_ || !_(_, _)) {
            if (!_) return;
            _ = _;
          }
          const _ = new _(_, _);
          if (_ || !_.state.selection._(_)) {
            const _ = _.state._.setSelection(_);
            _ && __webpack_require__.setMeta(_, _.pos), _.dispatch(_);
          }
        }
        function _() {
          _.root.removeEventListener("mouseup", _),
            _.root.removeEventListener("dragstart", _),
            _.root.removeEventListener("mousemove", _),
            null != _.getState(_.state) && _.dispatch(_.state._.setMeta(_, -1));
        }
        function _(_) {
          const _ = _,
            _ = _.getState(_.state);
          let _;
          if (null != _) _ = _.state.doc.resolve(_);
          else if (_(_, _.target) != _ && ((_ = _(_, _)), !_)) return _();
          _ && _(_, _);
        }
        _.root.addEventListener("mouseup", _),
          _.root.addEventListener("dragstart", _),
          _.root.addEventListener("mousemove", _);
      }
      function _(_, _, _) {
        if (!(_.state.selection instanceof _._)) return null;
        const { $head: _ } = _.state.selection;
        for (let _ = _.depth - 1; _ >= 0; _--) {
          const _ = _.node(_);
          if (
            (_ < 0 ? _.index(_) : _.indexAfter(_)) != (_ < 0 ? 0 : _.childCount)
          )
            return null;
          if (
            "cell" == _.type.spec.tableRole ||
            "header_cell" == _.type.spec.tableRole
          ) {
            const _ = _.before(_),
              _ =
                "vert" == _
                  ? _ > 0
                    ? "down"
                    : "up"
                  : _ > 0
                    ? "right"
                    : "left";
            return _.endOfTextblock(_) ? _ : null;
          }
        }
        return null;
      }
      function _(_, _) {
        for (; _ && _ != _.dom; _ = _.parentNode)
          if ("TD" == _.nodeName || "TH" == _.nodeName) return _;
        return null;
      }
      function _(_, _) {
        const _ = _.posAtCoords({
          left: _.clientX,
          top: _.clientY,
        });
        return _ && _ ? _(_.state.doc.resolve(_.pos)) : null;
      }
      var _ = class {
        constructor(_, _) {
          (this.node = _),
            (this.defaultCellMinWidth = _),
            (this.dom = document.createElement("div")),
            (this.dom.className = "tableWrapper"),
            (this.table = this.dom.appendChild(
              document.createElement("table"),
            )),
            this.table.style.setProperty("--default-cell-min-width", `${_}px`),
            (this.colgroup = this.table.appendChild(
              document.createElement("colgroup"),
            )),
            _(_, this.colgroup, this.table, _),
            (this.contentDOM = this.table.appendChild(
              document.createElement("tbody"),
            ));
        }
        update(_) {
          return (
            _.type == this.node.type &&
            ((this.node = _),
            _(_, this.colgroup, this.table, this.defaultCellMinWidth),
            !0)
          );
        }
        ignoreMutation(_) {
          return (
            "attributes" == _.type &&
            (_.target == this.table || this.colgroup.contains(_.target))
          );
        }
      };
      function _(_, _, _, _, _, _) {
        var _;
        let _ = 0,
          _ = !0,
          _ = _.firstChild;
        const _ = _.firstChild;
        if (_) {
          for (let _ = 0, _ = 0; _ < _.childCount; _++) {
            const { colspan: _, colwidth: _ } = _.child(_).attrs;
            for (let _ = 0; _ < _; _++, _++) {
              const _ = _ == _ ? _ : _ && _[_],
                _ = _ ? _ + "px" : "";
              if (((_ += _ || _), _ || (_ = !1), _))
                _.style.width != _ && (_.style.width = _), (_ = _.nextSibling);
              else {
                const _ = document.createElement("col");
                (_.style.width = _), _.appendChild(_);
              }
            }
          }
          for (; _; ) {
            const _ = _.nextSibling;
            null == (_ = _.parentNode) || _.removeChild(_), (_ = _);
          }
          _
            ? ((_.style.width = _ + "px"), (_.style.minWidth = ""))
            : ((_.style.width = ""), (_.style.minWidth = _ + "px"));
        }
      }
      var _ = new _._("tableColumnResizing");
      function _({
        handleWidth: _ = 5,
        cellMinWidth: _ = 25,
        defaultCellMinWidth: _ = 100,
        View: _ = _,
        lastColumnResizable: _ = !0,
      } = {}) {
        const _ = new _._({
          key: _,
          state: {
            init(_, _) {
              var _, _;
              const _ =
                  null == (_ = null == (_ = _.spec) ? void 0 : _.props)
                    ? void 0
                    : _.nodeViews,
                _ = _(_.schema).table.name;
              return _ && _ && (_[_] = (_, _) => new _(_, _, _)), new _(-1, !1);
            },
            apply: (_, _) => _.apply(_),
          },
          props: {
            attributes: (_) => {
              const _ = _.getState(_);
              return _ && _.activeHandle > -1
                ? {
                    class: "resize-cursor",
                  }
                : {};
            },
            handleDOMEvents: {
              mousemove: (_, _) => {
                !(function (_, _, _, _) {
                  const _ = _.getState(_.state);
                  if (!_) return;
                  if (!_.dragging) {
                    const _ = (function (_) {
                      for (; _ && "TD" != _.nodeName && "TH" != _.nodeName; )
                        _ =
                          _.classList && _.classList.contains("ProseMirror")
                            ? null
                            : _.parentNode;
                      return _;
                    })(_.target);
                    let _ = -1;
                    if (_) {
                      const { left: _, right: _ } = _.getBoundingClientRect();
                      _.clientX - _ <= _
                        ? (_ = _(_, _, "left", _))
                        : _ - _.clientX <= _ && (_ = _(_, _, "right", _));
                    }
                    if (_ != _.activeHandle) {
                      if (!_ && -1 !== _) {
                        const _ = _.state.doc.resolve(_),
                          _ = _.node(-1),
                          _ = _.get(_),
                          _ = _.start(-1);
                        if (
                          _.colCount(_.pos - _) +
                            _.nodeAfter.attrs.colspan -
                            1 ==
                          _.width - 1
                        )
                          return;
                      }
                      _(_, _);
                    }
                  }
                })(_, _, _, _);
              },
              mouseleave: (_) => {
                !(function (_) {
                  const _ = _.getState(_.state);
                  _ && _.activeHandle > -1 && !_.dragging && _(_, -1);
                })(_);
              },
              mousedown: (_, _) => {
                !(function (_, _, _, _) {
                  var _;
                  const _ =
                      null != (_ = _.dom.ownerDocument.defaultView)
                        ? _
                        : window,
                    _ = _.getState(_.state);
                  if (!_ || -1 == _.activeHandle || _.dragging) return !1;
                  const _ = _.state.doc.nodeAt(_.activeHandle),
                    _ = (function (_, _, { colspan: _, colwidth: _ }) {
                      const _ = _ && _[_.length - 1];
                      if (_) return _;
                      const _ = _.domAtPos(_);
                      let _ = _.node.childNodes[_.offset].offsetWidth,
                        _ = _;
                      if (_)
                        for (let _ = 0; _ < _; _++) _[_] && ((_ -= _[_]), _--);
                      return _ / _;
                    })(_, _.activeHandle, _.attrs);
                  function _(_) {
                    _.removeEventListener("mouseup", _),
                      _.removeEventListener("mousemove", _);
                    const _ = _.getState(_.state);
                    (null == _ ? void 0 : _.dragging) &&
                      (!(function (_, _, _) {
                        const _ = _.state.doc.resolve(_),
                          _ = _.node(-1),
                          _ = _.get(_),
                          _ = _.start(-1),
                          _ =
                            _.colCount(_.pos - _) +
                            _.nodeAfter.attrs.colspan -
                            1,
                          _ = _.state._;
                        for (let _ = 0; _ < _.height; _++) {
                          const _ = _ * _.width + _;
                          if (_ && _.map[_] == _.map[_ - _.width]) continue;
                          const _ = _.map[_],
                            _ = _.nodeAt(_).attrs,
                            _ = 1 == _.colspan ? 0 : _ - _.colCount(_);
                          if (_.colwidth && _.colwidth[_] == _) continue;
                          const _ = _.colwidth
                            ? _.colwidth.slice()
                            : _(_.colspan);
                          (_[_] = _),
                            _.setNodeMarkup(_ + _, null, {
                              ..._,
                              colwidth: _,
                            });
                        }
                        _.docChanged && _.dispatch(_);
                      })(_, _.activeHandle, _(_.dragging, _, _)),
                      _.dispatch(
                        _.state._.setMeta(_, {
                          setDragging: null,
                        }),
                      ));
                  }
                  function _(_) {
                    if (!_.which) return _(_);
                    const _ = _.getState(_.state);
                    if (_ && _.dragging) {
                      const _ = _(_.dragging, _, _);
                      _(_, _.activeHandle, _, _);
                    }
                  }
                  _.dispatch(
                    _.state._.setMeta(_, {
                      setDragging: {
                        startX: _.clientX,
                        startWidth: _,
                      },
                    }),
                  ),
                    _(_, _.activeHandle, _, _),
                    _.addEventListener("mouseup", _),
                    _.addEventListener("mousemove", _),
                    _.preventDefault();
                })(_, _, _, _);
              },
            },
            decorations: (_) => {
              const _ = _.getState(_);
              if (_ && _.activeHandle > -1)
                return (function (_, _) {
                  var _;
                  const _ = [],
                    _ = _.doc.resolve(_),
                    _ = _.node(-1);
                  if (!_) return _._.empty;
                  const _ = _.get(_),
                    _ = _.start(-1),
                    _ = _.colCount(_.pos - _) + _.nodeAfter.attrs.colspan - 1;
                  for (let _ = 0; _ < _.height; _++) {
                    const _ = _ + _ * _.width;
                    if (
                      !(
                        (_ != _.width - 1 && _.map[_] == _.map[_ + 1]) ||
                        (0 != _ && _.map[_] == _.map[_ - _.width])
                      )
                    ) {
                      const _ = _.map[_],
                        _ = _ + _ + _.nodeAt(_).nodeSize - 1,
                        _ = document.createElement("div");
                      (_.className = "column-resize-handle"),
                        (null == (_ = _.getState(_)) ? void 0 : _.dragging) &&
                          _.push(
                            _._.node(_ + _, _ + _ + _.nodeAt(_).nodeSize, {
                              class: "column-resize-dragging",
                            }),
                          ),
                        _.push(_._.widget(_, _));
                    }
                  }
                  return _._.create(_.doc, _);
                })(_, _.activeHandle);
            },
            nodeViews: {},
          },
        });
        return _;
      }
      var _ = class _ {
        constructor(_, _) {
          (this.activeHandle = _), (this.dragging = _);
        }
        apply(_) {
          const _ = this,
            _ = _.getMeta(_);
          if (_ && null != _.setHandle) return new _(_.setHandle, !1);
          if (_ && void 0 !== _.setDragging)
            return new _(_.activeHandle, _.setDragging);
          if (_.activeHandle > -1 && _.docChanged) {
            let _ = _.mapping.map(_.activeHandle, -1);
            return _(_.doc.resolve(_)) || (_ = -1), new _(_, _.dragging);
          }
          return _;
        }
      };
      function _(_, _, _, _) {
        const _ = "right" == _ ? -_ : _,
          _ = _.posAtCoords({
            left: _.clientX + _,
            top: _.clientY,
          });
        if (!_) return -1;
        const { pos: _ } = _,
          _ = _(_.state.doc.resolve(_));
        if (!_) return -1;
        if ("right" == _) return _.pos;
        const _ = _.get(_.node(-1)),
          _ = _.start(-1),
          _ = _.map.indexOf(_.pos - _);
        return _ % _.width == 0 ? -1 : _ + _.map[_ - 1];
      }
      function _(_, _, _) {
        const _ = _.clientX - _.startX;
        return Math.max(_, _.startWidth + _);
      }
      function _(_, _) {
        _.dispatch(
          _.state._.setMeta(_, {
            setHandle: _,
          }),
        );
      }
      function _(_, _, _, _) {
        const _ = _.state.doc.resolve(_),
          _ = _.node(-1),
          _ = _.start(-1),
          _ = _.get(_).colCount(_.pos - _) + _.nodeAfter.attrs.colspan - 1;
        let _ = _.domAtPos(_.start(-1)).node;
        for (; _ && "TABLE" != _.nodeName; ) _ = _.parentNode;
        _ && _(_, _.firstChild, _, _, _, _);
      }
      function _(_) {
        return Array(_).fill(0);
      }
      function _({ allowTableNodeSelection: _ = !1 } = {}) {
        return new _._({
          key: _,
          state: {
            init: () => null,
            apply(_, _) {
              const _ = _.getMeta(_);
              if (null != _) return -1 == _ ? null : _;
              if (null == _ || !_.docChanged) return _;
              const { deleted: _, pos: _ } = _.mapping.mapResult(_);
              return _ ? null : _;
            },
          },
          props: {
            decorations: _,
            handleDOMEvents: {
              mousedown: _,
            },
            createSelectionBetween: (_) =>
              null != _.getState(_.state) ? _.state.selection : null,
            handleTripleClick: _,
            handleKeyDown: _,
            handlePaste: _,
          },
          appendTransaction: (_, _, _) =>
            (function (_, _, _) {
              const _ = (_ || _).selection,
                _ = (_ || _).doc;
              let _, _;
              if (_ instanceof _._ && (_ = _.node.type.spec.tableRole)) {
                if ("cell" == _ || "header_cell" == _) _ = _.create(_, _.from);
                else if ("row" == _) {
                  const _ = _.resolve(_.from + 1);
                  _ = _.rowSelection(_, _);
                } else if (!_) {
                  const _ = _.get(_.node),
                    _ = _.from + 1,
                    _ = _ + _.map[_.width * _.height - 1];
                  _ = _.create(_, _ + 1, _);
                }
              } else
                _ instanceof _._ &&
                (function ({ $from: _, $to: _ }) {
                  if (_.pos == _.pos || _.pos < _.pos - 6) return !1;
                  let _ = _.pos,
                    _ = _.pos,
                    _ = _.depth;
                  for (; _ >= 0 && !(_.after(_ + 1) < _.end(_)); _--, _++);
                  for (
                    let _ = _.depth;
                    _ >= 0 && !(_.before(_ + 1) > _.start(_));
                    _--, _--
                  );
                  return (
                    _ == _ && /row|table/.test(_.node(_).type.spec.tableRole)
                  );
                })(_)
                  ? (_ = _._.create(_, _.from))
                  : _ instanceof _._ &&
                    (function ({ $from: _, $to: _ }) {
                      let _, _;
                      for (let _ = _.depth; _ > 0; _--) {
                        const _ = _.node(_);
                        if (
                          "cell" === _.type.spec.tableRole ||
                          "header_cell" === _.type.spec.tableRole
                        ) {
                          _ = _;
                          break;
                        }
                      }
                      for (let _ = _.depth; _ > 0; _--) {
                        const _ = _.node(_);
                        if (
                          "cell" === _.type.spec.tableRole ||
                          "header_cell" === _.type.spec.tableRole
                        ) {
                          _ = _;
                          break;
                        }
                      }
                      return _ !== _ && 0 === _.parentOffset;
                    })(_) &&
                    (_ = _._.create(_, _.$from.start(), _.$from.end()));
              return _ && (_ || (_ = _._)).setSelection(_), _;
            })(_, _(_, _), _),
        });
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
      });
      var _ = __webpack_require__("chunkid");
      const _ = Math.pow(2, 16);
      function _(_) {
        return 65535 & _;
      }
      class _ {
        constructor(_, _, _) {
          (this.pos = _), (this.delInfo = _), (this.recover = _);
        }
        get deleted() {
          return (8 & this.delInfo) > 0;
        }
        get deletedBefore() {
          return (5 & this.delInfo) > 0;
        }
        get deletedAfter() {
          return (6 & this.delInfo) > 0;
        }
        get deletedAcross() {
          return (4 & this.delInfo) > 0;
        }
      }
      class _ {
        constructor(_, _ = !1) {
          if (((this.ranges = _), (this.inverted = _), !_.length && _.empty))
            return _.empty;
        }
        recover(_) {
          let _ = 0,
            _ = _(_);
          if (!this.inverted)
            for (let _ = 0; _ < _; _++)
              _ += this.ranges[3 * _ + 2] - this.ranges[3 * _ + 1];
          return (
            this.ranges[3 * _] +
            _ +
            (function (_) {
              return (_ - (65535 & _)) / _;
            })(_)
          );
        }
        mapResult(_, _ = 1) {
          return this._map(_, _, !1);
        }
        map(_, _ = 1) {
          return this._map(_, _, !0);
        }
        _map(_, _, _) {
          let _ = 0,
            _ = this.inverted ? 2 : 1,
            _ = this.inverted ? 1 : 2;
          for (let _ = 0; _ < this.ranges.length; _ += 3) {
            let _ = this.ranges[_] - (this.inverted ? _ : 0);
            if (_ > _) break;
            let _ = this.ranges[_ + _],
              _ = this.ranges[_ + _],
              _ = _ + _;
            if (_ <= _) {
              let _ =
                _ + _ + ((_ ? (_ == _ ? -1 : _ == _ ? 1 : _) : _) < 0 ? 0 : _);
              if (_) return _;
              let _ = _ == (_ < 0 ? _ : _) ? null : _ / 3 + (_ - _) * _,
                _ = _ == _ ? 2 : _ == _ ? 1 : 4;
              return (_ < 0 ? _ != _ : _ != _) && (_ |= 8), new _(_, _, _);
            }
            _ += _ - _;
          }
          return _ ? _ + _ : new _(_ + _, 0, null);
        }
        touches(_, _) {
          let _ = 0,
            _ = _(_),
            _ = this.inverted ? 2 : 1,
            _ = this.inverted ? 1 : 2;
          for (let _ = 0; _ < this.ranges.length; _ += 3) {
            let _ = this.ranges[_] - (this.inverted ? _ : 0);
            if (_ > _) break;
            let _ = this.ranges[_ + _];
            if (_ <= _ + _ && _ == 3 * _) return !0;
            _ += this.ranges[_ + _] - _;
          }
          return !1;
        }
        forEach(_) {
          let _ = this.inverted ? 2 : 1,
            _ = this.inverted ? 1 : 2;
          for (let _ = 0, _ = 0; _ < this.ranges.length; _ += 3) {
            let _ = this.ranges[_],
              _ = _ - (this.inverted ? _ : 0),
              _ = _ + (this.inverted ? 0 : _),
              _ = this.ranges[_ + _],
              _ = this.ranges[_ + _];
            _(_, _ + _, _, _ + _), (_ += _ - _);
          }
        }
        invert() {
          return new _(this.ranges, !this.inverted);
        }
        toString() {
          return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
        }
        static offset(_) {
          return 0 == _ ? _.empty : new _(_ < 0 ? [0, -_, 0] : [0, 0, _]);
        }
      }
      _.empty = new _([]);
      class _ {
        constructor(_ = [], _, __webpack_require__ = 0, _ = _.length) {
          (this.maps = _),
            (this.mirror = _),
            (this.from = __webpack_require__),
            (this._ = _);
        }
        slice(_ = 0, _ = this.maps.length) {
          return new _(this.maps, this.mirror, _, _);
        }
        copy() {
          return new _(
            this.maps.slice(),
            this.mirror && this.mirror.slice(),
            this.from,
            this._,
          );
        }
        appendMap(_, _) {
          (this._ = this.maps.push(_)),
            null != _ && this.setMirror(this.maps.length - 1, _);
        }
        appendMapping(_) {
          for (let _ = 0, _ = this.maps.length; _ < _.maps.length; _++) {
            let _ = _.getMirror(_);
            this.appendMap(_.maps[_], null != _ && _ < _ ? _ + _ : void 0);
          }
        }
        getMirror(_) {
          if (this.mirror)
            for (let _ = 0; _ < this.mirror.length; _++)
              if (this.mirror[_] == _) return this.mirror[_ + (_ % 2 ? -1 : 1)];
        }
        setMirror(_, _) {
          this.mirror || (this.mirror = []), this.mirror.push(_, _);
        }
        appendMappingInverted(_) {
          for (
            let _ = _.maps.length - 1, _ = this.maps.length + _.maps.length;
            _ >= 0;
            _--
          ) {
            let _ = _.getMirror(_);
            this.appendMap(
              _.maps[_].invert(),
              null != _ && _ > _ ? _ - _ - 1 : void 0,
            );
          }
        }
        invert() {
          let _ = new _();
          return _.appendMappingInverted(this), _;
        }
        map(_, _ = 1) {
          if (this.mirror) return this._map(_, _, !0);
          for (let _ = this.from; _ < this._; _++) _ = this.maps[_].map(_, _);
          return _;
        }
        mapResult(_, _ = 1) {
          return this._map(_, _, !1);
        }
        _map(_, _, _) {
          let _ = 0;
          for (let _ = this.from; _ < this._; _++) {
            let _ = this.maps[_].mapResult(_, _);
            if (null != _.recover) {
              let _ = this.getMirror(_);
              if (null != _ && _ > _ && _ < this._) {
                (_ = _), (_ = this.maps[_].recover(_.recover));
                continue;
              }
            }
            (_ |= _.delInfo), (_ = _.pos);
          }
          return _ ? _ : new _(_, _, null);
        }
      }
      const _ = Object.create(null);
      class _ {
        getMap() {
          return _.empty;
        }
        merge(_) {
          return null;
        }
        static fromJSON(_, _) {
          if (!_ || !_.stepType)
            throw new RangeError("Invalid input for Step.fromJSON");
          let _ = _[_.stepType];
          if (!_) throw new RangeError(`No step type ${_.stepType} defined`);
          return __webpack_require__.fromJSON(_, _);
        }
        static jsonID(_, _) {
          if (_ in _)
            throw new RangeError("Duplicate use of step JSON ID " + _);
          return (_[_] = _), (_.prototype.jsonID = _), _;
        }
      }
      class _ {
        constructor(_, _) {
          (this.doc = _), (this.failed = _);
        }
        static ok(_) {
          return new _(_, null);
        }
        static fail(_) {
          return new _(null, _);
        }
        static fromReplace(_, _, _, _) {
          try {
            return _._(_.replace(_, _, _));
          } catch (_) {
            if (_ instanceof _._) return _.fail(_.message);
            throw _;
          }
        }
      }
      function _(_, _, _) {
        let _ = [];
        for (let _ = 0; _ < _.childCount; _++) {
          let _ = _.child(_);
          _.content.size && (_ = _.copy(_(_.content, _, _))),
            _.isInline && (_ = _(_, _, _)),
            _.push(_);
        }
        return _._.fromArray(_);
      }
      class _ extends _ {
        constructor(_, _, _) {
          super(), (this.from = _), (this._ = _), (this.mark = _);
        }
        apply(_) {
          let _ = _.slice(this.from, this._),
            _ = _.resolve(this.from),
            _ = __webpack_require__.node(
              __webpack_require__.sharedDepth(this._),
            ),
            _ = new _._(
              _(
                _.content,
                (_, _) =>
                  _.isAtom && _.type.allowsMarkType(this.mark.type)
                    ? _.mark(this.mark.addToSet(_.marks))
                    : _,
                _,
              ),
              _.openStart,
              _.openEnd,
            );
          return _.fromReplace(_, this.from, this._, _);
        }
        invert() {
          return new _(this.from, this._, this.mark);
        }
        map(_) {
          let _ = _.mapResult(this.from, 1),
            _ = _.mapResult(this._, -1);
          return (_.deleted && _.deleted) || _.pos >= _.pos
            ? null
            : new _(_.pos, _.pos, this.mark);
        }
        merge(_) {
          return _ instanceof _ &&
            _.mark._(this.mark) &&
            this.from <= _._ &&
            this._ >= _.from
            ? new _(
                Math.min(this.from, _.from),
                Math.max(this._, _._),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            _: this._,
          };
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.from || "number" != typeof _._)
            throw new RangeError("Invalid input for AddMarkStep.fromJSON");
          return new _(_.from, _._, _.markFromJSON(_.mark));
        }
      }
      _.jsonID("addMark", _);
      class _ extends _ {
        constructor(_, _, _) {
          super(), (this.from = _), (this._ = _), (this.mark = _);
        }
        apply(_) {
          let _ = _.slice(this.from, this._),
            _ = new _._(
              _(_.content, (_) => _.mark(this.mark.removeFromSet(_.marks)), _),
              _.openStart,
              _.openEnd,
            );
          return _.fromReplace(_, this.from, this._, _);
        }
        invert() {
          return new _(this.from, this._, this.mark);
        }
        map(_) {
          let _ = _.mapResult(this.from, 1),
            _ = _.mapResult(this._, -1);
          return (_.deleted && _.deleted) || _.pos >= _.pos
            ? null
            : new _(_.pos, _.pos, this.mark);
        }
        merge(_) {
          return _ instanceof _ &&
            _.mark._(this.mark) &&
            this.from <= _._ &&
            this._ >= _.from
            ? new _(
                Math.min(this.from, _.from),
                Math.max(this._, _._),
                this.mark,
              )
            : null;
        }
        toJSON() {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            _: this._,
          };
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.from || "number" != typeof _._)
            throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
          return new _(_.from, _._, _.markFromJSON(_.mark));
        }
      }
      _.jsonID("removeMark", _);
      class _ extends _ {
        constructor(_, _) {
          super(), (this.pos = _), (this.mark = _);
        }
        apply(_) {
          let _ = _.nodeAt(this.pos);
          if (!_) return _.fail("No node at mark step's position");
          let _ = _.type.create(_.attrs, null, this.mark.addToSet(_.marks));
          return _.fromReplace(
            _,
            this.pos,
            this.pos + 1,
            new _._(_._.from(_), 0, _.isLeaf ? 0 : 1),
          );
        }
        invert(_) {
          let _ = _.nodeAt(this.pos);
          if (_) {
            let _ = this.mark.addToSet(_.marks);
            if (_.length == _.marks.length) {
              for (let _ = 0; _ < _.marks.length; _++)
                if (!_.marks[_].isInSet(_)) return new _(this.pos, _.marks[_]);
              return new _(this.pos, this.mark);
            }
          }
          return new _(this.pos, this.mark);
        }
        map(_) {
          let _ = _.mapResult(this.pos, 1);
          return _.deletedAfter ? null : new _(_.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.pos)
            throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
          return new _(_.pos, _.markFromJSON(_.mark));
        }
      }
      _.jsonID("addNodeMark", _);
      class _ extends _ {
        constructor(_, _) {
          super(), (this.pos = _), (this.mark = _);
        }
        apply(_) {
          let _ = _.nodeAt(this.pos);
          if (!_) return _.fail("No node at mark step's position");
          let _ = _.type.create(
            _.attrs,
            null,
            this.mark.removeFromSet(_.marks),
          );
          return _.fromReplace(
            _,
            this.pos,
            this.pos + 1,
            new _._(_._.from(_), 0, _.isLeaf ? 0 : 1),
          );
        }
        invert(_) {
          let _ = _.nodeAt(this.pos);
          return _ && this.mark.isInSet(_.marks)
            ? new _(this.pos, this.mark)
            : this;
        }
        map(_) {
          let _ = _.mapResult(this.pos, 1);
          return _.deletedAfter ? null : new _(_.pos, this.mark);
        }
        toJSON() {
          return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON(),
          };
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.pos)
            throw new RangeError(
              "Invalid input for RemoveNodeMarkStep.fromJSON",
            );
          return new _(_.pos, _.markFromJSON(_.mark));
        }
      }
      _.jsonID("removeNodeMark", _);
      class _ extends _ {
        constructor(_, _, _, _ = !1) {
          super(),
            (this.from = _),
            (this._ = _),
            (this.slice = _),
            (this.structure = _);
        }
        apply(_) {
          return this.structure && _(_, this.from, this._)
            ? _.fail("Structure replace would overwrite content")
            : _.fromReplace(_, this.from, this._, this.slice);
        }
        getMap() {
          return new _([this.from, this._ - this.from, this.slice.size]);
        }
        invert(_) {
          return new _(
            this.from,
            this.from + this.slice.size,
            _.slice(this.from, this._),
          );
        }
        map(_) {
          let _ = _.mapResult(this.from, 1),
            _ = _.mapResult(this._, -1);
          return _.deletedAcross && _.deletedAcross
            ? null
            : new _(_.pos, Math.max(_.pos, _.pos), this.slice);
        }
        merge(_) {
          if (!(_ instanceof _) || _.structure || this.structure) return null;
          if (
            this.from + this.slice.size != _.from ||
            this.slice.openEnd ||
            _.slice.openStart
          ) {
            if (_._ != this.from || this.slice.openStart || _.slice.openEnd)
              return null;
            {
              let _ =
                this.slice.size + _.slice.size == 0
                  ? _._.empty
                  : new _._(
                      _.slice.content.append(this.slice.content),
                      _.slice.openStart,
                      this.slice.openEnd,
                    );
              return new _(_.from, this._, _, this.structure);
            }
          }
          {
            let _ =
              this.slice.size + _.slice.size == 0
                ? _._.empty
                : new _._(
                    this.slice.content.append(_.slice.content),
                    this.slice.openStart,
                    _.slice.openEnd,
                  );
            return new _(this.from, this._ + (_._ - _.from), _, this.structure);
          }
        }
        toJSON() {
          let _ = {
            stepType: "replace",
            from: this.from,
            _: this._,
          };
          return (
            this.slice.size && (_.slice = this.slice.toJSON()),
            this.structure && (_.structure = !0),
            _
          );
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.from || "number" != typeof _._)
            throw new RangeError("Invalid input for ReplaceStep.fromJSON");
          return new _(_.from, _._, _._.fromJSON(_, _.slice), !!_.structure);
        }
      }
      _.jsonID("replace", _);
      class _ extends _ {
        constructor(_, _, _, _, _, _, _ = !1) {
          super(),
            (this.from = _),
            (this._ = _),
            (this.gapFrom = _),
            (this.gapTo = _),
            (this.slice = _),
            (this.insert = _),
            (this.structure = _);
        }
        apply(_) {
          if (
            this.structure &&
            (_(_, this.from, this.gapFrom) || _(_, this.gapTo, this._))
          )
            return _.fail("Structure gap-replace would overwrite content");
          let _ = _.slice(this.gapFrom, this.gapTo);
          if (_.openStart || _.openEnd)
            return _.fail("Gap is not a flat range");
          let _ = this.slice.insertAt(this.insert, _.content);
          return _
            ? _.fromReplace(_, this.from, this._, _)
            : _.fail("Content does not fit in gap");
        }
        getMap() {
          return new _([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this._ - this.gapTo,
            this.slice.size - this.insert,
          ]);
        }
        invert(_) {
          let _ = this.gapTo - this.gapFrom;
          return new _(
            this.from,
            this.from + this.slice.size + _,
            this.from + this.insert,
            this.from + this.insert + _,
            _.slice(this.from, this._).removeBetween(
              this.gapFrom - this.from,
              this.gapTo - this.from,
            ),
            this.gapFrom - this.from,
            this.structure,
          );
        }
        map(_) {
          let _ = _.mapResult(this.from, 1),
            _ = _.mapResult(this._, -1),
            _ = this.from == this.gapFrom ? _.pos : _.map(this.gapFrom, -1),
            _ = this._ == this.gapTo ? _.pos : _.map(this.gapTo, 1);
          return (_.deletedAcross && _.deletedAcross) || _ < _.pos || _ > _.pos
            ? null
            : new _(
                _.pos,
                _.pos,
                _,
                _,
                this.slice,
                this.insert,
                this.structure,
              );
        }
        toJSON() {
          let _ = {
            stepType: "replaceAround",
            from: this.from,
            _: this._,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert,
          };
          return (
            this.slice.size && (_.slice = this.slice.toJSON()),
            this.structure && (_.structure = !0),
            _
          );
        }
        static fromJSON(_, _) {
          if (
            "number" != typeof _.from ||
            "number" != typeof _._ ||
            "number" != typeof _.gapFrom ||
            "number" != typeof _.gapTo ||
            "number" != typeof _.insert
          )
            throw new RangeError(
              "Invalid input for ReplaceAroundStep.fromJSON",
            );
          return new _(
            _.from,
            _._,
            _.gapFrom,
            _.gapTo,
            _._.fromJSON(_, _.slice),
            _.insert,
            !!_.structure,
          );
        }
      }
      function _(_, _, _) {
        let _ = _.resolve(_),
          _ = _ - _,
          _ = _.depth;
        for (; _ > 0 && _ > 0 && _.indexAfter(_) == _.node(_).childCount; )
          _--, _--;
        if (_ > 0) {
          let _ = _.node(_).maybeChild(_.indexAfter(_));
          for (; _ > 0; ) {
            if (!_ || _.isLeaf) return !0;
            (_ = _.firstChild), _--;
          }
        }
        return !1;
      }
      function _(_, _, _, _ = _.contentMatch, _ = !0) {
        let _ = _.doc.nodeAt(_),
          _ = [],
          _ = _ + 1;
        for (let _ = 0; _ < _.childCount; _++) {
          let _ = _.child(_),
            _ = _ + _.nodeSize,
            _ = _.matchType(_.type);
          if (_) {
            _ = _;
            for (let _ = 0; _ < _.marks.length; _++)
              __webpack_require__.allowsMarkType(_.marks[_].type) ||
                _.step(new _(_, _, _.marks[_]));
            if (_ && _.isText && "pre" != _.whitespace) {
              let _,
                _,
                _ = /\r?\n|\r/g;
              for (; (_ = _.exec(_.text)); )
                _ ||
                  (_ = new _._(
                    _._.from(
                      _.schema.text(
                        " ",
                        __webpack_require__.allowedMarks(_.marks),
                      ),
                    ),
                    0,
                    0,
                  )),
                  _.push(new _(_ + _.index, _ + _.index + _[0].length, _));
            }
          } else _.push(new _(_, _, _._.empty));
          _ = _;
        }
        if (!_.validEnd) {
          let _ = _.fillBefore(_._.empty, !0);
          _.replace(_, _, new _._(_, 0, 0));
        }
        for (let _ = _.length - 1; _ >= 0; _--) _.step(_[_]);
      }
      function _(_, _, _) {
        return (
          (0 == _ || _.canReplace(_, _.childCount)) &&
          (_ == _.childCount || _.canReplace(0, _))
        );
      }
      function _(_) {
        let _ = _.parent.content.cutByIndex(_.startIndex, _.endIndex);
        for (let _ = _.depth; ; --_) {
          let _ = _.$from.node(_),
            _ = _.$from.index(_),
            _ = _.$to.indexAfter(_);
          if (_ < _.depth && _.canReplace(_, _, _)) return _;
          if (0 == _ || _.type.spec.isolating || !_(_, _, _)) break;
        }
        return null;
      }
      function _(_, _, __webpack_require__ = null, _ = _) {
        let _ = (function (_, _) {
            let { parent: __webpack_require__, startIndex: _, endIndex: _ } = _,
              _ = __webpack_require__.contentMatchAt(_).findWrapping(_);
            if (!_) return null;
            let _ = _.length ? _[0] : _;
            return __webpack_require__.canReplaceWith(_, _, _) ? _ : null;
          })(_, _),
          _ =
            _ &&
            (function (_, _) {
              let {
                  parent: __webpack_require__,
                  startIndex: _,
                  endIndex: _,
                } = _,
                _ = __webpack_require__.child(_),
                _ = _.contentMatch.findWrapping(_.type);
              if (!_) return null;
              let _ = (_.length ? _[_.length - 1] : _).contentMatch;
              for (let _ = _; _ && _ < _; _++)
                _ = _.matchType(__webpack_require__.child(_).type);
              return _ && _.validEnd ? _ : null;
            })(_, _);
        return _
          ? _.map(_)
              .concat({
                type: _,
                attrs: __webpack_require__,
              })
              .concat(_.map(_))
          : null;
      }
      function _(_) {
        return {
          type: _,
          attrs: null,
        };
      }
      function _(_, _, __webpack_require__ = 1, _) {
        let _ = _.resolve(_),
          _ = _.depth - __webpack_require__,
          _ = (_ && _[_.length - 1]) || _.parent;
        if (
          _ < 0 ||
          _.parent.type.spec.isolating ||
          !_.parent.canReplace(_.index(), _.parent.childCount) ||
          !_.type.validContent(
            _.parent.content.cutByIndex(_.index(), _.parent.childCount),
          )
        )
          return !1;
        for (
          let _ = _.depth - 1, _ = __webpack_require__ - 2;
          _ > _;
          _--, _--
        ) {
          let _ = _.node(_),
            _ = _.index(_);
          if (_.type.spec.isolating) return !1;
          let _ = _.content.cutByIndex(_, _.childCount),
            _ = _ && _[_ + 1];
          _ && (_ = _.replaceChild(0, _.type.create(_.attrs)));
          let _ = (_ && _[_]) || _;
          if (
            !__webpack_require__.canReplace(_ + 1, _.childCount) ||
            !_.type.validContent(_)
          )
            return !1;
        }
        let _ = _.indexAfter(_),
          _ = _ && _[0];
        return _.node(_).canReplaceWith(_, _, _ ? _.type : _.node(_ + 1).type);
      }
      function _(_, _) {
        let _ = _.resolve(_),
          _ = __webpack_require__.index();
        return _(_.nodeBefore, _.nodeAfter) && _.parent.canReplace(_, _ + 1);
      }
      function _(_, _) {
        return !(!_ || !_ || _.isLeaf || !_.canAppend(_));
      }
      function _(_, _, _) {
        let _ = _.resolve(_);
        if (!_.content.size) return _;
        let _ = _.content;
        for (let _ = 0; _ < _.openStart; _++) _ = _.firstChild.content;
        for (let _ = 1; _ <= (0 == _.openStart && _.size ? 2 : 1); _++)
          for (let _ = _.depth; _ >= 0; _--) {
            let _ =
                _ == _.depth
                  ? 0
                  : _.pos <= (_.start(_ + 1) + _.end(_ + 1)) / 2
                    ? -1
                    : 1,
              _ = _.index(_) + (_ > 0 ? 1 : 0),
              _ = _.node(_),
              _ = !1;
            if (1 == _) _ = _.canReplace(_, _, _);
            else {
              let _ = _.contentMatchAt(_).findWrapping(_.firstChild.type);
              _ = _ && _.canReplaceWith(_, _, _[0]);
            }
            if (_)
              return 0 == _ ? _.pos : _ < 0 ? _.before(_ + 1) : _.after(_ + 1);
          }
        return null;
      }
      function _(_, _, __webpack_require__ = _, _ = _._.empty) {
        if (_ == __webpack_require__ && !_.size) return null;
        let _ = _.resolve(_),
          _ = _.resolve(__webpack_require__);
        return _(_, _, _)
          ? new _(_, __webpack_require__, _)
          : new _(_, _, _).fit();
      }
      function _(_, _, _) {
        return (
          !_.openStart &&
          !_.openEnd &&
          _.start() == _.start() &&
          _.parent.canReplace(_.index(), _.index(), _.content)
        );
      }
      _.jsonID("replaceAround", _);
      class _ {
        constructor(_, _, _) {
          (this.$from = _),
            (this.$to = _),
            (this.unplaced = _),
            (this.frontier = []),
            (this.placed = _._.empty);
          for (let _ = 0; _ <= _.depth; _++) {
            let _ = _.node(_);
            this.frontier.push({
              type: _.type,
              match: __webpack_require__.contentMatchAt(_.indexAfter(_)),
            });
          }
          for (let _ = _.depth; _ > 0; _--)
            this.placed = _._.from(_.node(_).copy(this.placed));
        }
        get depth() {
          return this.frontier.length - 1;
        }
        fit() {
          for (; this.unplaced.size; ) {
            let _ = this.findFittable();
            _ ? this.placeNodes(_) : this.openMore() || this.dropNode();
          }
          let _ = this.mustMoveInline(),
            _ = this.placed.size - this.depth - this.$from.depth,
            _ = this.$from,
            _ = this.close(_ < 0 ? this.$to : _.doc.resolve(_));
          if (!_) return null;
          let _ = this.placed,
            _ = _.depth,
            _ = _.depth;
          for (; _ && _ && 1 == _.childCount; )
            (_ = _.firstChild.content), _--, _--;
          let _ = new _._(_, _, _);
          return _ > -1
            ? new _(_.pos, _, this.$to.pos, this.$to.end(), _, _)
            : _.size || _.pos != this.$to.pos
              ? new _(_.pos, _.pos, _)
              : null;
        }
        findFittable() {
          let _ = this.unplaced.openStart;
          for (
            let _ = this.unplaced.content, _ = 0, _ = this.unplaced.openEnd;
            _ < _;
            _++
          ) {
            let _ = _.firstChild;
            if (
              (_.childCount > 1 && (_ = 0), _.type.spec.isolating && _ <= _)
            ) {
              _ = _;
              break;
            }
            _ = _.content;
          }
          for (let _ = 1; _ <= 2; _++)
            for (let _ = 1 == _ ? _ : this.unplaced.openStart; _ >= 0; _--) {
              let _,
                _ = null;
              _
                ? ((_ = _(this.unplaced.content, _ - 1).firstChild),
                  (_ = _.content))
                : (_ = this.unplaced.content);
              let _ = _.firstChild;
              for (let _ = this.depth; _ >= 0; _--) {
                let _,
                  { type: _, match: _ } = this.frontier[_],
                  _ = null;
                if (
                  1 == _ &&
                  (_
                    ? _.matchType(_.type) || (_ = _.fillBefore(_._.from(_), !1))
                    : _ && _.compatibleContent(_.type))
                )
                  return {
                    sliceDepth: _,
                    frontierDepth: _,
                    parent: _,
                    inject: _,
                  };
                if (2 == _ && _ && (_ = _.findWrapping(_.type)))
                  return {
                    sliceDepth: _,
                    frontierDepth: _,
                    parent: _,
                    wrap: _,
                  };
                if (_ && _.matchType(_.type)) break;
              }
            }
        }
        openMore() {
          let {
              content: _,
              openStart: _,
              openEnd: __webpack_require__,
            } = this.unplaced,
            _ = _(_, _);
          return (
            !(!_.childCount || _.firstChild.isLeaf) &&
            ((this.unplaced = new _._(
              _,
              _ + 1,
              Math.max(
                __webpack_require__,
                _.size + _ >= _.size - __webpack_require__ ? _ + 1 : 0,
              ),
            )),
            !0)
          );
        }
        dropNode() {
          let {
              content: _,
              openStart: _,
              openEnd: __webpack_require__,
            } = this.unplaced,
            _ = _(_, _);
          if (_.childCount <= 1 && _ > 0) {
            let _ = _.size - _ <= _ + _.size;
            this.unplaced = new _._(
              _(_, _ - 1, 1),
              _ - 1,
              _ ? _ - 1 : __webpack_require__,
            );
          } else this.unplaced = new _._(_(_, _, 1), _, __webpack_require__);
        }
        placeNodes({
          sliceDepth: _,
          frontierDepth: _,
          parent: __webpack_require__,
          inject: _,
          wrap: _,
        }) {
          for (; this.depth > _; ) this.closeFrontierNode();
          if (_) for (let _ = 0; _ < _.length; _++) this.openFrontierNode(_[_]);
          let _ = this.unplaced,
            _ = __webpack_require__ ? __webpack_require__.content : _.content,
            _ = _.openStart - _,
            _ = 0,
            _ = [],
            { match: _, type: _ } = this.frontier[_];
          if (_) {
            for (let _ = 0; _ < _.childCount; _++) _.push(_.child(_));
            _ = _.matchFragment(_);
          }
          let _ = _.size + _ - (_.content.size - _.openEnd);
          for (; _ < _.childCount; ) {
            let _ = _.child(_),
              _ = _.matchType(_.type);
            if (!_) break;
            _++,
              (_ > 1 || 0 == _ || _.content.size) &&
                ((_ = _),
                _.push(
                  _(
                    _.mark(_.allowedMarks(_.marks)),
                    1 == _ ? _ : 0,
                    _ == _.childCount ? _ : -1,
                  ),
                ));
          }
          let _ = _ == _.childCount;
          _ || (_ = -1),
            (this.placed = _(this.placed, _, _._.from(_))),
            (this.frontier[_].match = _),
            _ &&
              _ < 0 &&
              __webpack_require__ &&
              __webpack_require__.type == this.frontier[this.depth].type &&
              this.frontier.length > 1 &&
              this.closeFrontierNode();
          for (let _ = 0, _ = _; _ < _; _++) {
            let _ = _.lastChild;
            this.frontier.push({
              type: _.type,
              match: _.contentMatchAt(_.childCount),
            }),
              (_ = _.content);
          }
          this.unplaced = _
            ? 0 == _
              ? _._.empty
              : new _._(
                  _(_.content, _ - 1, 1),
                  _ - 1,
                  _ < 0 ? _.openEnd : _ - 1,
                )
            : new _._(_(_.content, _, _), _.openStart, _.openEnd);
        }
        mustMoveInline() {
          if (!this.$to.parent.isTextblock) return -1;
          let _,
            _ = this.frontier[this.depth];
          if (
            !_.type.isTextblock ||
            !_(this.$to, this.$to.depth, _.type, _.match, !1) ||
            (this.$to.depth == this.depth &&
              (_ = this.findCloseLevel(this.$to)) &&
              _.depth == this.depth)
          )
            return -1;
          let { depth: __webpack_require__ } = this.$to,
            _ = this.$to.after(__webpack_require__);
          for (
            ;
            __webpack_require__ > 1 && _ == this.$to.end(--__webpack_require__);
          )
            ++_;
          return _;
        }
        findCloseLevel(_) {
          _: for (let _ = Math.min(this.depth, _.depth); _ >= 0; _--) {
            let { match: __webpack_require__, type: _ } = this.frontier[_],
              _ = _ < _.depth && _.end(_ + 1) == _.pos + (_.depth - (_ + 1)),
              _ = _(_, _, _, __webpack_require__, _);
            if (_) {
              for (let _ = _ - 1; _ >= 0; _--) {
                let { match: _, type: _ } = this.frontier[_],
                  _ = _(_, _, _, _, !0);
                if (!_ || _.childCount) continue _;
              }
              return {
                depth: _,
                fit: _,
                move: _ ? _.doc.resolve(_.after(_ + 1)) : _,
              };
            }
          }
        }
        close(_) {
          let _ = this.findCloseLevel(_);
          if (!_) return null;
          for (; this.depth > _.depth; ) this.closeFrontierNode();
          _.fit.childCount && (this.placed = _(this.placed, _.depth, _.fit)),
            (_ = _.move);
          for (let _ = _.depth + 1; _ <= _.depth; _++) {
            let _ = _.node(_),
              _ = _.type.contentMatch.fillBefore(_.content, !0, _.index(_));
            this.openFrontierNode(_.type, _.attrs, _);
          }
          return _;
        }
        openFrontierNode(_, _ = null, _) {
          let _ = this.frontier[this.depth];
          (_.match = _.match.matchType(_)),
            (this.placed = _(
              this.placed,
              this.depth,
              _._.from(_.create(_, _)),
            )),
            this.frontier.push({
              type: _,
              match: _.contentMatch,
            });
        }
        closeFrontierNode() {
          let _ = this.frontier.pop().match.fillBefore(_._.empty, !0);
          _.childCount &&
            (this.placed = _(this.placed, this.frontier.length, _));
        }
      }
      function _(_, _, _) {
        return 0 == _
          ? _.cutByIndex(_, _.childCount)
          : _.replaceChild(
              0,
              _.firstChild.copy(_(_.firstChild.content, _ - 1, _)),
            );
      }
      function _(_, _, _) {
        return 0 == _
          ? _.append(_)
          : _.replaceChild(
              _.childCount - 1,
              _.lastChild.copy(_(_.lastChild.content, _ - 1, _)),
            );
      }
      function _(_, _) {
        for (let _ = 0; _ < _; _++) _ = _.firstChild.content;
        return _;
      }
      function _(_, _, _) {
        if (_ <= 0) return _;
        let _ = _.content;
        return (
          _ > 1 &&
            (_ = _.replaceChild(
              0,
              _(_.firstChild, _ - 1, 1 == _.childCount ? _ - 1 : 0),
            )),
          _ > 0 &&
            ((_ = _.type.contentMatch.fillBefore(_).append(_)),
            _ <= 0 &&
              (_ = _.append(
                _.type.contentMatch.matchFragment(_).fillBefore(_._.empty, !0),
              ))),
          _.copy(_)
        );
      }
      function _(_, _, _, _, _) {
        let _ = _.node(_),
          _ = _ ? _.indexAfter(_) : _.index(_);
        if (_ == _.childCount && !__webpack_require__.compatibleContent(_.type))
          return null;
        let _ = _.fillBefore(_.content, !0, _);
        return _ &&
          !(function (_, _, _) {
            for (let _ = _; _ < _.childCount; _++)
              if (!_.allowsMarks(_.child(_).marks)) return !0;
            return !1;
          })(_, _.content, _)
          ? _
          : null;
      }
      function _(_, _, _, _, _) {
        if (_ < _) {
          let _ = _.firstChild;
          _ = _.replaceChild(0, _.copy(_(_.content, _ + 1, _, _, _)));
        }
        if (_ > _) {
          let _ = _.contentMatchAt(0),
            _ = _.fillBefore(_).append(_);
          _ = __webpack_require__.append(
            _.matchFragment(_).fillBefore(_._.empty, !0),
          );
        }
        return _;
      }
      function _(_, _) {
        let _ = [];
        for (let _ = Math.min(_.depth, _.depth); _ >= 0; _--) {
          let _ = _.start(_);
          if (
            _ < _.pos - (_.depth - _) ||
            _.end(_) > _.pos + (_.depth - _) ||
            _.node(_).type.spec.isolating ||
            _.node(_).type.spec.isolating
          )
            break;
          (_ == _.start(_) ||
            (_ == _.depth &&
              _ == _.depth &&
              _.parent.inlineContent &&
              _.parent.inlineContent &&
              _ &&
              _.start(_ - 1) == _ - 1)) &&
            __webpack_require__.push(_);
        }
        return _;
      }
      class _ extends _ {
        constructor(_, _, _) {
          super(), (this.pos = _), (this.attr = _), (this.value = _);
        }
        apply(_) {
          let _ = _.nodeAt(this.pos);
          if (!_) return _.fail("No node at attribute step's position");
          let _ = Object.create(null);
          for (let _ in _.attrs) _[_] = _.attrs[_];
          _[this.attr] = this.value;
          let _ = _.type.create(_, null, _.marks);
          return _.fromReplace(
            _,
            this.pos,
            this.pos + 1,
            new _._(_._.from(_), 0, _.isLeaf ? 0 : 1),
          );
        }
        getMap() {
          return _.empty;
        }
        invert(_) {
          return new _(
            this.pos,
            this.attr,
            _.nodeAt(this.pos).attrs[this.attr],
          );
        }
        map(_) {
          let _ = _.mapResult(this.pos, 1);
          return _.deletedAfter ? null : new _(_.pos, this.attr, this.value);
        }
        toJSON() {
          return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(_, _) {
          if ("number" != typeof _.pos || "string" != typeof _.attr)
            throw new RangeError("Invalid input for AttrStep.fromJSON");
          return new _(_.pos, _.attr, _.value);
        }
      }
      _.jsonID("attr", _);
      class _ extends _ {
        constructor(_, _) {
          super(), (this.attr = _), (this.value = _);
        }
        apply(_) {
          let _ = Object.create(null);
          for (let _ in _.attrs) _[_] = _.attrs[_];
          _[this.attr] = this.value;
          let _ = _.type.create(_, _.content, _.marks);
          return _._(_);
        }
        getMap() {
          return _.empty;
        }
        invert(_) {
          return new _(this.attr, _.attrs[this.attr]);
        }
        map(_) {
          return this;
        }
        toJSON() {
          return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value,
          };
        }
        static fromJSON(_, _) {
          if ("string" != typeof _.attr)
            throw new RangeError("Invalid input for DocAttrStep.fromJSON");
          return new _(_.attr, _.value);
        }
      }
      _.jsonID("docAttr", _);
      let _ = class extends Error {};
      (_ = function _(_) {
        let _ = Error.call(this, _);
        return (_.__proto__ = _.prototype), _;
      }),
        ((_.prototype = Object.create(Error.prototype)).constructor = _),
        (_.prototype.name = "TransformError");
      class _ {
        constructor(_) {
          (this.doc = _),
            (this.steps = []),
            (this.docs = []),
            (this.mapping = new _());
        }
        get before() {
          return this.docs.length ? this.docs[0] : this.doc;
        }
        step(_) {
          let _ = this.maybeStep(_);
          if (_.failed) throw new _(_.failed);
          return this;
        }
        maybeStep(_) {
          let _ = _.apply(this.doc);
          return _.failed || this.addStep(_, _.doc), _;
        }
        get docChanged() {
          return this.steps.length > 0;
        }
        addStep(_, _) {
          this.docs.push(this.doc),
            this.steps.push(_),
            this.mapping.appendMap(_.getMap()),
            (this.doc = _);
        }
        replace(_, _ = _, __webpack_require__ = _._.empty) {
          let _ = _(this.doc, _, _, __webpack_require__);
          return _ && this.step(_), this;
        }
        replaceWith(_, _, _) {
          return this.replace(_, _, new _._(_._.from(_), 0, 0));
        }
        delete(_, _) {
          return this.replace(_, _, _._.empty);
        }
        insert(_, _) {
          return this.replaceWith(_, _, _);
        }
        replaceRange(_, _, _) {
          return (
            (function (_, _, _, _) {
              if (!_.size) return _.deleteRange(_, _);
              let _ = _.doc.resolve(_),
                _ = _.doc.resolve(_);
              if (_(_, _, _)) return _.step(new _(_, _, _));
              let _ = _(_, _.doc.resolve(_));
              0 == _[_.length - 1] && _.pop();
              let _ = -(_.depth + 1);
              _.unshift(_);
              for (let _ = _.depth, _ = _.pos - 1; _ > 0; _--, _--) {
                let _ = _.node(_).type.spec;
                if (_.defining || _.definingAsContext || _.isolating) break;
                _.indexOf(_) > -1
                  ? (_ = _)
                  : _.before(_) == _ && _.splice(1, 0, -_);
              }
              let _ = _.indexOf(_),
                _ = [],
                _ = _.openStart;
              for (let _ = _.content, _ = 0; ; _++) {
                let _ = _.firstChild;
                if ((_.push(_), _ == _.openStart)) break;
                _ = _.content;
              }
              for (let _ = _ - 1; _ >= 0; _--) {
                let _ = _[_],
                  _ = (_ = _.type).spec.defining || _.spec.definingForContent;
                if (_ && !_.sameMarkup(_.node(Math.abs(_) - 1))) _ = _;
                else if (_ || !_.type.isTextblock) break;
              }
              var _;
              for (let _ = _.openStart; _ >= 0; _--) {
                let _ = (_ + _ + 1) % (_.openStart + 1),
                  _ = _[_];
                if (_)
                  for (let _ = 0; _ < _.length; _++) {
                    let _ = _[(_ + _) % _.length],
                      _ = !0;
                    _ < 0 && ((_ = !1), (_ = -_));
                    let _ = _.node(_ - 1),
                      _ = _.index(_ - 1);
                    if (_.canReplaceWith(_, _, _.type, _.marks))
                      return _.replace(
                        _.before(_),
                        _ ? _.after(_) : _,
                        new _._(_(_.content, 0, _.openStart, _), _, _.openEnd),
                      );
                  }
              }
              let _ = _.steps.length;
              for (
                let _ = _.length - 1;
                _ >= 0 && (_.replace(_, _, _), !(_.steps.length > _));
                _--
              ) {
                let _ = _[_];
                _ < 0 || ((_ = _.before(_)), (_ = _.after(_)));
              }
            })(this, _, _, _),
            this
          );
        }
        replaceRangeWith(_, _, _) {
          return (
            (function (_, _, _, _) {
              if (
                !_.isInline &&
                _ == _ &&
                _.doc.resolve(_).parent.content.size
              ) {
                let _ = (function (_, _, _) {
                  let _ = _.resolve(_);
                  if (_.parent.canReplaceWith(_.index(), _.index(), _))
                    return _;
                  if (0 == _.parentOffset)
                    for (let _ = _.depth - 1; _ >= 0; _--) {
                      let _ = _.index(_);
                      if (_.node(_).canReplaceWith(_, _, _))
                        return _.before(_ + 1);
                      if (_ > 0) return null;
                    }
                  if (_.parentOffset == _.parent.content.size)
                    for (let _ = _.depth - 1; _ >= 0; _--) {
                      let _ = _.indexAfter(_);
                      if (_.node(_).canReplaceWith(_, _, _))
                        return _.after(_ + 1);
                      if (_ < _.node(_).childCount) return null;
                    }
                  return null;
                })(_.doc, _, _.type);
                null != _ && (_ = _ = _);
              }
              _.replaceRange(_, _, new _._(_._.from(_), 0, 0));
            })(this, _, _, _),
            this
          );
        }
        deleteRange(_, _) {
          return (
            (function (_, _, _) {
              let _ = _.doc.resolve(_),
                _ = _.doc.resolve(_),
                _ = _(_, _);
              for (let _ = 0; _ < _.length; _++) {
                let _ = _[_],
                  _ = _ == _.length - 1;
                if ((_ && 0 == _) || _.node(_).type.contentMatch.validEnd)
                  return _.delete(_.start(_), _.end(_));
                if (
                  _ > 0 &&
                  (_ ||
                    _.node(_ - 1).canReplace(
                      _.index(_ - 1),
                      _.indexAfter(_ - 1),
                    ))
                )
                  return _.delete(_.before(_), _.after(_));
              }
              for (let _ = 1; _ <= _.depth && _ <= _.depth; _++)
                if (
                  _ - _.start(_) == _.depth - _ &&
                  _ > _.end(_) &&
                  _.end(_) - _ != _.depth - _
                )
                  return _.delete(_.before(_), _);
              _.delete(_, _);
            })(this, _, _),
            this
          );
        }
        lift(_, _) {
          return (
            (function (_, _, _) {
              let { $from: _, $to: _, depth: _ } = _,
                _ = _.before(_ + 1),
                _ = _.after(_ + 1),
                _ = _,
                _ = _,
                _ = _._.empty,
                _ = 0;
              for (let _ = _, _ = !1; _ > _; _--)
                _ || _.index(_) > 0
                  ? ((_ = !0), (_ = _._.from(_.node(_).copy(_))), _++)
                  : _--;
              let _ = _._.empty,
                _ = 0;
              for (let _ = _, _ = !1; _ > _; _--)
                _ || _.after(_ + 1) < _.end(_)
                  ? ((_ = !0), (_ = _._.from(_.node(_).copy(_))), _++)
                  : _++;
              _.step(
                new _(_, _, _, _, new _._(_.append(_), _, _), _.size - _, !0),
              );
            })(this, _, _),
            this
          );
        }
        join(_, _ = 1) {
          return (
            (function (_, _, _) {
              let _ = new _(_ - _, _ + _, _._.empty, !0);
              _.step(_);
            })(this, _, _),
            this
          );
        }
        wrap(_, _) {
          return (
            (function (_, _, _) {
              let _ = _._.empty;
              for (let _ = _.length - 1; _ >= 0; _--) {
                if (_.size) {
                  let _ = _[_].type.contentMatch.matchFragment(_);
                  if (!_ || !_.validEnd)
                    throw new RangeError(
                      "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
                    );
                }
                _ = _._.from(_[_].type.create(_[_].attrs, _));
              }
              let _ = _.start,
                _ = _.end;
              _.step(new _(_, _, _, _, new _._(_, 0, 0), _.length, !0));
            })(this, _, _),
            this
          );
        }
        setBlockType(_, _ = _, _, _ = null) {
          return (
            (function (_, _, _, _, _) {
              if (!_.isTextblock)
                throw new RangeError(
                  "Type given to setBlockType should be a textblock",
                );
              let _ = _.steps.length;
              _.doc.nodesBetween(_, _, (_, _) => {
                if (
                  _.isTextblock &&
                  !_.hasMarkup(_, _) &&
                  (function (_, _, _) {
                    let _ = _.resolve(_),
                      _ = _.index();
                    return _.parent.canReplaceWith(_, _ + 1, _);
                  })(_.doc, _.mapping.slice(_).map(_), _)
                ) {
                  let _ = null;
                  if (_.schema.linebreakReplacement) {
                    let _ = "pre" == _.whitespace,
                      _ = !!_.contentMatch.matchType(
                        _.schema.linebreakReplacement,
                      );
                    _ && !_ ? (_ = !1) : !_ && _ && (_ = !0);
                  }
                  !1 === _ &&
                    (function (_, _, _, _) {
                      _.forEach((_, _) => {
                        if (_.type == _.type.schema.linebreakReplacement) {
                          let _ = _.mapping.slice(_).map(_ + 1 + _);
                          _.replaceWith(_, _ + 1, _.type.schema.text("\n"));
                        }
                      });
                    })(_, _, _, _),
                    _(_, _.mapping.slice(_).map(_, 1), _, void 0, null === _);
                  let _ = _.mapping.slice(_),
                    _ = _.map(_, 1),
                    _ = _.map(_ + _.nodeSize, 1);
                  return (
                    _.step(
                      new _(
                        _,
                        _,
                        _ + 1,
                        _ - 1,
                        new _._(_._.from(_.create(_, null, _.marks)), 0, 0),
                        1,
                        !0,
                      ),
                    ),
                    !0 === _ &&
                      (function (_, _, _, _) {
                        _.forEach((_, _) => {
                          if (_.isText) {
                            let _,
                              _ = /\r?\n|\r/g;
                            for (; (_ = _.exec(_.text)); ) {
                              let _ = _.mapping
                                .slice(_)
                                .map(_ + 1 + _ + _.index);
                              _.replaceWith(
                                _,
                                _ + 1,
                                _.type.schema.linebreakReplacement.create(),
                              );
                            }
                          }
                        });
                      })(_, _, _, _),
                    !1
                  );
                }
              });
            })(this, _, _, _, _),
            this
          );
        }
        setNodeMarkup(_, _, __webpack_require__ = null, _) {
          return (
            (function (_, _, _, _, _) {
              let _ = _.doc.nodeAt(_);
              if (!_) throw new RangeError("No node at given position");
              _ || (_ = _.type);
              let _ = __webpack_require__.create(_, null, _ || _.marks);
              if (_.isLeaf) return _.replaceWith(_, _ + _.nodeSize, _);
              if (!__webpack_require__.validContent(_.content))
                throw new RangeError("Invalid content for node type " + _.name);
              _.step(
                new _(
                  _,
                  _ + _.nodeSize,
                  _ + 1,
                  _ + _.nodeSize - 1,
                  new _._(_._.from(_), 0, 0),
                  1,
                  !0,
                ),
              );
            })(this, _, _, __webpack_require__, _),
            this
          );
        }
        setNodeAttribute(_, _, _) {
          return this.step(new _(_, _, _)), this;
        }
        setDocAttribute(_, _) {
          return this.step(new _(_, _)), this;
        }
        addNodeMark(_, _) {
          return this.step(new _(_, _)), this;
        }
        removeNodeMark(_, _) {
          if (!(_ instanceof _._)) {
            let _ = this.doc.nodeAt(_);
            if (!_) throw new RangeError("No node at position " + _);
            if (!(_ = _.isInSet(_.marks))) return this;
          }
          return this.step(new _(_, _)), this;
        }
        split(_, _ = 1, _) {
          return (
            (function (_, _, _ = 1, _) {
              let _ = _.doc.resolve(_),
                _ = _._.empty,
                _ = _._.empty;
              for (
                let _ = _.depth, _ = _.depth - _, _ = _ - 1;
                _ > _;
                _--, _--
              ) {
                _ = _._.from(_.node(_).copy(_));
                let _ = _ && _[_];
                _ = _._.from(_ ? _.type.create(_.attrs, _) : _.node(_).copy(_));
              }
              _.step(new _(_, _, new _._(_.append(_), _, _), !0));
            })(this, _, _, _),
            this
          );
        }
        addMark(_, _, _) {
          return (
            (function (_, _, _, _) {
              let _,
                _,
                _ = [],
                _ = [];
              _.doc.nodesBetween(_, _, (_, _, _) => {
                if (!_.isInline) return;
                let _ = _.marks;
                if (!_.isInSet(_) && _.type.allowsMarkType(_.type)) {
                  let _ = Math.max(_, _),
                    _ = Math.min(_ + _.nodeSize, _),
                    _ = _.addToSet(_);
                  for (let _ = 0; _ < _.length; _++)
                    _[_].isInSet(_) ||
                      (_ && _._ == _ && _.mark._(_[_])
                        ? (_._ = _)
                        : _.push((_ = new _(_, _, _[_]))));
                  _ && _._ == _ ? (_._ = _) : _.push((_ = new _(_, _, _)));
                }
              }),
                _.forEach((_) => _.step(_)),
                _.forEach((_) => _.step(_));
            })(this, _, _, _),
            this
          );
        }
        removeMark(_, _, _) {
          return (
            (function (_, _, _, _) {
              let _ = [],
                _ = 0;
              _.doc.nodesBetween(_, _, (_, _) => {
                if (!_.isInline) return;
                _++;
                let _ = null;
                if (_ instanceof _._) {
                  let _,
                    _ = _.marks;
                  for (; (_ = _.isInSet(_)); )
                    (_ || (_ = [])).push(_), (_ = _.removeFromSet(_));
                } else _ ? _.isInSet(_.marks) && (_ = [_]) : (_ = _.marks);
                if (_ && _.length) {
                  let _ = Math.min(_ + _.nodeSize, _);
                  for (let _ = 0; _ < _.length; _++) {
                    let _,
                      _ = _[_];
                    for (let _ = 0; _ < _.length; _++) {
                      let _ = _[_];
                      _.step == _ - 1 && _._(_[_].style) && (_ = _);
                    }
                    _
                      ? ((_._ = _), (_.step = _))
                      : _.push({
                          style: _,
                          from: Math.max(_, _),
                          _: _,
                          step: _,
                        });
                  }
                }
              }),
                _.forEach((_) => _.step(new _(_.from, _._, _.style)));
            })(this, _, _, _),
            this
          );
        }
        clearIncompatible(_, _, _) {
          return _(this, _, _, _), this;
        }
      }
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
        _ = __webpack_require__("chunkid");
      const _ = function (_) {
          for (var _ = 0; ; _++) if (!(_ = _.previousSibling)) return _;
        },
        _ = function (_) {
          let _ = _.assignedSlot || _.parentNode;
          return _ && 11 == _.nodeType ? _.host : _;
        };
      let _ = null;
      const _ = function (_, _, _) {
          let _ = _ || (_ = document.createRange());
          return (
            _.setEnd(_, null == _ ? _.nodeValue.length : _),
            _.setStart(_, _ || 0),
            _
          );
        },
        _ = function (_, _, _, _) {
          return _ && (_(_, _, _, _, -1) || _(_, _, _, _, 1));
        },
        _ = /^(img|br|input|textarea|hr)$/i;
      function _(_, _, _, _, _) {
        for (;;) {
          if (_ == _ && _ == _) return !0;
          if (_ == (_ < 0 ? 0 : _(_))) {
            let _ = _.parentNode;
            if (
              !_ ||
              1 != _.nodeType ||
              _(_) ||
              _.test(_.nodeName) ||
              "false" == _.contentEditable
            )
              return !1;
            (_ = _(_) + (_ < 0 ? 0 : 1)), (_ = _);
          } else {
            if (1 != _.nodeType) return !1;
            if (
              "false" ==
              (_ = _.childNodes[_ + (_ < 0 ? -1 : 0)]).contentEditable
            )
              return !1;
            _ = _ < 0 ? _(_) : 0;
          }
        }
      }
      function _(_) {
        return 3 == _.nodeType ? _.nodeValue.length : _.childNodes.length;
      }
      function _(_) {
        let _;
        for (let _ = _; _ && !(_ = _.pmViewDesc); _ = _.parentNode);
        return (
          _ && _.node && _.node.isBlock && (_.dom == _ || _.contentDOM == _)
        );
      }
      const _ = function (_) {
        return (
          _.focusNode &&
          _(_.focusNode, _.focusOffset, _.anchorNode, _.anchorOffset)
        );
      };
      function _(_, _) {
        let _ = document.createEvent("Event");
        return (
          __webpack_require__.initEvent("keydown", !0, !0),
          (_.keyCode = _),
          (_.key = _.code = _),
          _
        );
      }
      const _ = "undefined" != typeof navigator ? navigator : null,
        _ = "undefined" != typeof document ? document : null,
        _ = (_ && _.userAgent) || "",
        _ = /Edge\/(\d+)/.exec(_),
        _ = /MSIE \d/.exec(_),
        _ = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(_),
        _ = !!(_ || _ || _),
        _ = _ ? document.documentMode : _ ? +_[1] : _ ? +_[1] : 0,
        _ = !_ && /gecko\/(\d+)/i.test(_);
      _ && (/Firefox\/(\d+)/.exec(_) || [0, 0])[1];
      const _ = !_ && /Chrome\/(\d+)/.exec(_),
        _ = !!_,
        _ = _ ? +_[1] : 0,
        _ = !_ && !!_ && /Apple Computer/.test(_.vendor),
        _ = _ && (/Mobile\/\w+/.test(_) || (!!_ && _.maxTouchPoints > 2)),
        _ = _ || (!!_ && /Mac/.test(_.platform)),
        _ = !!_ && /Win/.test(_.platform),
        _ = /Android \d/.test(_),
        _ = !!_ && "webkitFontSmoothing" in _.documentElement.style,
        _ = _
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0;
      function _(_) {
        let _ = _.defaultView && _.defaultView.visualViewport;
        return _
          ? {
              left: 0,
              right: _.width,
              top: 0,
              bottom: _.height,
            }
          : {
              left: 0,
              right: _.documentElement.clientWidth,
              top: 0,
              bottom: _.documentElement.clientHeight,
            };
      }
      function _(_, _) {
        return "number" == typeof _ ? _ : _[_];
      }
      function _(_) {
        let _ = _.getBoundingClientRect(),
          _ = _.width / _.offsetWidth || 1,
          _ = _.height / _.offsetHeight || 1;
        return {
          left: _.left,
          right: _.left + _.clientWidth * _,
          top: _.top,
          bottom: _.top + _.clientHeight * _,
        };
      }
      function _(_, _, _) {
        let _ = _.someProp("scrollThreshold") || 0,
          _ = _.someProp("scrollMargin") || 5,
          _ = _.dom.ownerDocument;
        for (let _ = _ || _.dom; _; _ = _(_)) {
          if (1 != _.nodeType) continue;
          let _ = _,
            _ = _ == _.body,
            _ = _ ? _(_) : _(_),
            _ = 0,
            _ = 0;
          if (
            (_.top < _.top + _(_, "top")
              ? (_ = -(_.top - _.top + _(_, "top")))
              : _.bottom > _.bottom - _(_, "bottom") &&
                (_ =
                  _.bottom - _.top > _.bottom - _.top
                    ? _.top + _(_, "top") - _.top
                    : _.bottom - _.bottom + _(_, "bottom")),
            _.left < _.left + _(_, "left")
              ? (_ = -(_.left - _.left + _(_, "left")))
              : _.right > _.right - _(_, "right") &&
                (_ = _.right - _.right + _(_, "right")),
            _ || _)
          )
            if (_) _.defaultView.scrollBy(_, _);
            else {
              let _ = _.scrollLeft,
                _ = _.scrollTop;
              _ && (_.scrollTop += _), _ && (_.scrollLeft += _);
              let _ = _.scrollLeft - _,
                _ = _.scrollTop - _;
              _ = {
                left: _.left - _,
                top: _.top - _,
                right: _.right - _,
                bottom: _.bottom - _,
              };
            }
          if (_ || /^(fixed|sticky)$/.test(getComputedStyle(_).position)) break;
        }
      }
      function _(_) {
        let _ = [],
          _ = _.ownerDocument;
        for (
          let _ = _;
          _ &&
          (_.push({
            dom: _,
            top: _.scrollTop,
            left: _.scrollLeft,
          }),
          _ != _);
          _ = _(_)
        );
        return _;
      }
      function _(_, _) {
        for (let _ = 0; _ < _.length; _++) {
          let { dom: _, top: _, left: _ } = _[_];
          _.scrollTop != _ + _ && (_.scrollTop = _ + _),
            _.scrollLeft != _ && (_.scrollLeft = _);
        }
      }
      let _ = null;
      function _(_, _) {
        let _,
          _,
          _,
          _,
          _ = 2e8,
          _ = 0,
          _ = _.top,
          _ = _.top;
        for (let _ = _.firstChild, _ = 0; _; _ = _.nextSibling, _++) {
          let _;
          if (1 == _.nodeType) _ = _.getClientRects();
          else {
            if (3 != _.nodeType) continue;
            _ = _(_).getClientRects();
          }
          for (let _ = 0; _ < _.length; _++) {
            let _ = _[_];
            if (_.top <= _ && _.bottom >= _) {
              (_ = Math.max(_.bottom, _)), (_ = Math.min(_.top, _));
              let _ =
                _.left > _.left
                  ? _.left - _.left
                  : _.right < _.left
                    ? _.left - _.right
                    : 0;
              if (_ < _) {
                (_ = _),
                  (_ = _),
                  (_ =
                    _ && 3 == _.nodeType
                      ? {
                          left: _.right < _.left ? _.right : _.left,
                          top: _.top,
                        }
                      : _),
                  1 == _.nodeType &&
                    _ &&
                    (_ = _ + (_.left >= (_.left + _.right) / 2 ? 1 : 0));
                continue;
              }
            } else
              _.top > _.top &&
                !_ &&
                _.left <= _.left &&
                _.right >= _.left &&
                ((_ = _),
                (_ = {
                  left: Math.max(_.left, Math.min(_.right, _.left)),
                  top: _.top,
                }));
            !_ &&
              ((_.left >= _.right && _.top >= _.top) ||
                (_.left >= _.left && _.top >= _.bottom)) &&
              (_ = _ + 1);
          }
        }
        return (
          !_ && _ && ((_ = _), (_ = _), (_ = 0)),
          _ && 3 == _.nodeType
            ? (function (_, _) {
                let _ = _.nodeValue.length,
                  _ = document.createRange();
                for (let _ = 0; _ < _; _++) {
                  _.setEnd(_, _ + 1), _.setStart(_, _);
                  let _ = _(_, 1);
                  if (_.top != _.bottom && _(_, _))
                    return {
                      node: _,
                      offset: _ + (_.left >= (_.left + _.right) / 2 ? 1 : 0),
                    };
                }
                return {
                  node: _,
                  offset: 0,
                };
              })(_, _)
            : !_ || (_ && 1 == _.nodeType)
              ? {
                  node: _,
                  offset: _,
                }
              : _(_, _)
        );
      }
      function _(_, _) {
        return (
          _.left >= _.left - 1 &&
          _.left <= _.right + 1 &&
          _.top >= _.top - 1 &&
          _.top <= _.bottom + 1
        );
      }
      function _(_, _, _) {
        let _ = _.childNodes.length;
        if (_ && _.top < _.bottom)
          for (
            let _ = Math.max(
                0,
                Math.min(
                  _ - 1,
                  Math.floor((_ * (_.top - _.top)) / (_.bottom - _.top)) - 2,
                ),
              ),
              _ = _;
            ;
          ) {
            let _ = _.childNodes[_];
            if (1 == _.nodeType) {
              let _ = __webpack_require__.getClientRects();
              for (let _ = 0; _ < _.length; _++) {
                let _ = _[_];
                if (_(_, _)) return _(_, _, _);
              }
            }
            if ((_ = (_ + 1) % _) == _) break;
          }
        return _;
      }
      function _(_, _) {
        let _,
          _ = _.dom.ownerDocument,
          _ = 0,
          _ = (function (_, _, _) {
            if (_.caretPositionFromPoint)
              try {
                let _ = _.caretPositionFromPoint(_, _);
                if (_)
                  return {
                    node: _.offsetNode,
                    offset: _.offset,
                  };
              } catch (_) {}
            if (_.caretRangeFromPoint) {
              let _ = _.caretRangeFromPoint(_, _);
              if (_)
                return {
                  node: _.startContainer,
                  offset: _.startOffset,
                };
            }
          })(_, _.left, _.top);
        _ && ({ node: _, offset: _ } = _);
        let _,
          _ = (_.root.elementFromPoint ? _.root : _).elementFromPoint(
            _.left,
            _.top,
          );
        if (!_ || !_.dom.contains(1 != _.nodeType ? _.parentNode : _)) {
          let _ = _.dom.getBoundingClientRect();
          if (!_(_, _)) return null;
          if (((_ = _(_.dom, _, _)), !_)) return null;
        }
        if (_) for (let _ = _; _ && _; _ = _(_)) _.draggable && (_ = void 0);
        if (
          ((_ = (function (_, _) {
            let _ = _.parentNode;
            return _ &&
              /^li$/i.test(_.nodeName) &&
              _.left < _.getBoundingClientRect().left
              ? _
              : _;
          })(_, _)),
          _)
        ) {
          if (
            _ &&
            1 == _.nodeType &&
            ((_ = Math.min(_, _.childNodes.length)), _ < _.childNodes.length)
          ) {
            let _,
              _ = _.childNodes[_];
            "IMG" == _.nodeName &&
              (_ = _.getBoundingClientRect()).right <= _.left &&
              _.bottom > _.top &&
              _++;
          }
          let _;
          _ &&
            _ &&
            1 == _.nodeType &&
            1 == (_ = _.childNodes[_ - 1]).nodeType &&
            "false" == _.contentEditable &&
            _.getBoundingClientRect().top >= _.top &&
            _--,
            _ == _.dom &&
            _ == _.childNodes.length - 1 &&
            1 == _.lastChild.nodeType &&
            _.top > _.lastChild.getBoundingClientRect().bottom
              ? (_ = _.state.doc.content.size)
              : (0 != _ &&
                  1 == _.nodeType &&
                  "BR" == _.childNodes[_ - 1].nodeName) ||
                (_ = (function (_, _, _, _) {
                  let _ = -1;
                  for (let _ = _, _ = !1; _ != _.dom; ) {
                    let _ = _.docView.nearestDesc(_, !0);
                    if (!_) return null;
                    if (
                      1 == _.dom.nodeType &&
                      ((_.node.isBlock && _.parent && !_) || !_.contentDOM)
                    ) {
                      let _ = _.dom.getBoundingClientRect();
                      if (
                        (_.node.isBlock &&
                          _.parent &&
                          !_ &&
                          ((_ = !0),
                          _.left > _.left || _.top > _.top
                            ? (_ = _.posBefore)
                            : (_.right < _.left || _.bottom < _.top) &&
                              (_ = _.posAfter)),
                        !_.contentDOM && _ < 0 && !_.node.isText)
                      )
                        return (
                          _.node.isBlock
                            ? _.top < (_.top + _.bottom) / 2
                            : _.left < (_.left + _.right) / 2
                        )
                          ? _.posBefore
                          : _.posAfter;
                    }
                    _ = _.dom.parentNode;
                  }
                  return _ > -1 ? _ : _.docView.posFromDOM(_, _, -1);
                })(_, _, _, _));
        }
        null == _ &&
          (_ = (function (_, _, _) {
            let { node: _, offset: _ } = _(_, _),
              _ = -1;
            if (1 == _.nodeType && !_.firstChild) {
              let _ = _.getBoundingClientRect();
              _ = _.left != _.right && _.left > (_.left + _.right) / 2 ? 1 : -1;
            }
            return _.docView.posFromDOM(_, _, _);
          })(_, _, _));
        let _ = _.docView.nearestDesc(_, !0);
        return {
          pos: _,
          inside: _ ? _.posAtStart - _.border : -1,
        };
      }
      function _(_) {
        return _.top < _.bottom || _.left < _.right;
      }
      function _(_, _) {
        let _ = _.getClientRects();
        if (_.length) {
          let _ = _[_ < 0 ? 0 : _.length - 1];
          if (_(_)) return _;
        }
        return Array.prototype.find.call(_, _) || _.getBoundingClientRect();
      }
      const _ = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      function _(_, _, _) {
        let {
            node: _,
            offset: _,
            atom: _,
          } = _.docView.domFromPos(_, _ < 0 ? -1 : 1),
          _ = _ || _;
        if (3 == _.nodeType) {
          if (
            !_ ||
            (!_.test(_.nodeValue) && (_ < 0 ? _ : _ != _.nodeValue.length))
          ) {
            let _ = _,
              _ = _,
              _ = _ < 0 ? 1 : -1;
            return (
              _ < 0 && !_
                ? (_++, (_ = -1))
                : _ >= 0 && _ == _.nodeValue.length
                  ? (_--, (_ = 1))
                  : _ < 0
                    ? _--
                    : _++,
              _(_(_(_, _, _), _), _ < 0)
            );
          }
          {
            let _ = _(_(_, _, _), _);
            if (
              _ &&
              _ &&
              /\s/.test(_.nodeValue[_ - 1]) &&
              _ < _.nodeValue.length
            ) {
              let _ = _(_(_, _ - 1, _ - 1), -1);
              if (_.top == _.top) {
                let _ = _(_(_, _, _ + 1), -1);
                if (_.top != _.top) return _(_, _.left < _.left);
              }
            }
            return _;
          }
        }
        if (!_.state.doc.resolve(_ - (_ || 0)).parent.inlineContent) {
          if (null == _ && _ && (_ < 0 || _ == _(_))) {
            let _ = _.childNodes[_ - 1];
            if (1 == _.nodeType) return _(_.getBoundingClientRect(), !1);
          }
          if (null == _ && _ < _(_)) {
            let _ = _.childNodes[_];
            if (1 == _.nodeType) return _(_.getBoundingClientRect(), !0);
          }
          return _(_.getBoundingClientRect(), _ >= 0);
        }
        if (null == _ && _ && (_ < 0 || _ == _(_))) {
          let _ = _.childNodes[_ - 1],
            _ =
              3 == _.nodeType
                ? _(_, _(_) - (_ ? 0 : 1))
                : 1 != _.nodeType || ("BR" == _.nodeName && _.nextSibling)
                  ? null
                  : _;
          if (_) return _(_(_, 1), !1);
        }
        if (null == _ && _ < _(_)) {
          let _ = _.childNodes[_];
          for (; _.pmViewDesc && _.pmViewDesc.ignoreForCoords; )
            _ = _.nextSibling;
          let _ = _
            ? 3 == _.nodeType
              ? _(_, 0, _ ? 0 : 1)
              : 1 == _.nodeType
                ? _
                : null
            : null;
          if (_) return _(_(_, -1), !0);
        }
        return _(_(3 == _.nodeType ? _(_) : _, -_), _ >= 0);
      }
      function _(_, _) {
        if (0 == _.width) return _;
        let _ = _ ? _.left : _.right;
        return {
          top: _.top,
          bottom: _.bottom,
          left: _,
          right: _,
        };
      }
      function _(_, _) {
        if (0 == _.height) return _;
        let _ = _ ? _.top : _.bottom;
        return {
          top: _,
          bottom: _,
          left: _.left,
          right: _.right,
        };
      }
      function _(_, _, _) {
        let _ = _.state,
          _ = _.root.activeElement;
        _ != _ && _.updateState(_), _ != _.dom && _.focus();
        try {
          return __webpack_require__();
        } finally {
          _ != _ && _.updateState(_), _ != _.dom && _ && _.focus();
        }
      }
      const _ = /[\u0590-\u08ac]/;
      let _ = null,
        _ = null,
        _ = !1;
      function _(_, _, _) {
        return _ == _ && _ == _
          ? _
          : ((_ = _),
            (_ = _),
            (_ =
              "up" == _ || "down" == _
                ? (function (_, _, _) {
                    let _ = _.selection,
                      _ = "up" == _ ? _.$from : _.$to;
                    return _(_, _, () => {
                      let { node: _ } = _.docView.domFromPos(
                        _.pos,
                        "up" == _ ? -1 : 1,
                      );
                      for (;;) {
                        let _ = _.docView.nearestDesc(_, !0);
                        if (!_) break;
                        if (_.node.isBlock) {
                          _ = _.contentDOM || _.dom;
                          break;
                        }
                        _ = _.dom.parentNode;
                      }
                      let _ = _(_, _.pos, 1);
                      for (let _ = _.firstChild; _; _ = _.nextSibling) {
                        let _;
                        if (1 == _.nodeType) _ = _.getClientRects();
                        else {
                          if (3 != _.nodeType) continue;
                          _ = _(_, 0, _.nodeValue.length).getClientRects();
                        }
                        for (let _ = 0; _ < _.length; _++) {
                          let _ = _[_];
                          if (
                            _.bottom > _.top + 1 &&
                            ("up" == _
                              ? _.top - _.top > 2 * (_.bottom - _.top)
                              : _.bottom - _.bottom > 2 * (_.bottom - _.top))
                          )
                            return !1;
                        }
                      }
                      return !0;
                    });
                  })(_, _, _)
                : (function (_, _, _) {
                    let { $head: _ } = _.selection;
                    if (!_.parent.isTextblock) return !1;
                    let _ = _.parentOffset,
                      _ = !_,
                      _ = _ == _.parent.content.size,
                      _ = _.domSelection();
                    return _.test(_.parent.textContent) && _.modify
                      ? _(_, _, () => {
                          let {
                              focusNode: _,
                              focusOffset: _,
                              anchorNode: _,
                              anchorOffset: _,
                            } = _.domSelectionRange(),
                            _ = _.caretBidiLevel;
                          _.modify("move", _, "character");
                          let _ = _.depth
                              ? _.docView.domAfterPos(_.before())
                              : _.dom,
                            { focusNode: _, focusOffset: _ } =
                              _.domSelectionRange(),
                            _ =
                              (_ &&
                                !_.contains(
                                  1 == _.nodeType ? _ : _.parentNode,
                                )) ||
                              (_ == _ && _ == _);
                          try {
                            _.collapse(_, _),
                              _ &&
                                (_ != _ || _ != _) &&
                                _.extend &&
                                _.extend(_, _);
                          } catch (_) {}
                          return null != _ && (_.caretBidiLevel = _), _;
                        })
                      : "left" == _ || "backward" == _
                        ? _
                        : _;
                  })(_, _, _)));
      }
      class _ {
        constructor(_, _, _, _) {
          (this.parent = _),
            (this.children = _),
            (this.dom = _),
            (this.contentDOM = _),
            (this.dirty = 0),
            (_.pmViewDesc = this);
        }
        matchesWidget(_) {
          return !1;
        }
        matchesMark(_) {
          return !1;
        }
        matchesNode(_, _, _) {
          return !1;
        }
        matchesHack(_) {
          return !1;
        }
        parseRule() {
          return null;
        }
        stopEvent(_) {
          return !1;
        }
        get size() {
          let _ = 0;
          for (let _ = 0; _ < this.children.length; _++)
            _ += this.children[_].size;
          return _;
        }
        get border() {
          return 0;
        }
        destroy() {
          (this.parent = void 0),
            this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
          for (let _ = 0; _ < this.children.length; _++)
            this.children[_].destroy();
        }
        posBeforeChild(_) {
          for (let _ = 0, _ = this.posAtStart; ; _++) {
            let _ = this.children[_];
            if (_ == _) return _;
            _ += _.size;
          }
        }
        get posBefore() {
          return this.parent.posBeforeChild(this);
        }
        get posAtStart() {
          return this.parent
            ? this.parent.posBeforeChild(this) + this.border
            : 0;
        }
        get posAfter() {
          return this.posBefore + this.size;
        }
        get posAtEnd() {
          return this.posAtStart + this.size - 2 * this.border;
        }
        localPosFromDOM(_, _, _) {
          if (
            this.contentDOM &&
            this.contentDOM.contains(1 == _.nodeType ? _ : _.parentNode)
          ) {
            if (_ < 0) {
              let _, _;
              if (_ == this.contentDOM) _ = _.childNodes[_ - 1];
              else {
                for (; _.parentNode != this.contentDOM; ) _ = _.parentNode;
                _ = _.previousSibling;
              }
              for (; _ && (!(_ = _.pmViewDesc) || _.parent != this); )
                _ = _.previousSibling;
              return _ ? this.posBeforeChild(_) + _.size : this.posAtStart;
            }
            {
              let _, _;
              if (_ == this.contentDOM) _ = _.childNodes[_];
              else {
                for (; _.parentNode != this.contentDOM; ) _ = _.parentNode;
                _ = _.nextSibling;
              }
              for (; _ && (!(_ = _.pmViewDesc) || _.parent != this); )
                _ = _.nextSibling;
              return _ ? this.posBeforeChild(_) : this.posAtEnd;
            }
          }
          let _;
          if (_ == this.dom && this.contentDOM) _ = _ > _(this.contentDOM);
          else if (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            this.dom.contains(this.contentDOM)
          )
            _ = 2 & _.compareDocumentPosition(this.contentDOM);
          else if (this.dom.firstChild) {
            if (0 == _)
              for (let _ = _; ; _ = _.parentNode) {
                if (_ == this.dom) {
                  _ = !1;
                  break;
                }
                if (_.previousSibling) break;
              }
            if (null == _ && _ == _.childNodes.length)
              for (let _ = _; ; _ = _.parentNode) {
                if (_ == this.dom) {
                  _ = !0;
                  break;
                }
                if (_.nextSibling) break;
              }
          }
          return (null == _ ? _ > 0 : _) ? this.posAtEnd : this.posAtStart;
        }
        nearestDesc(_, _ = !1) {
          for (let _ = !0, _ = _; _; _ = _.parentNode) {
            let _,
              _ = this.getDesc(_);
            if (_ && (!_ || _.node)) {
              if (
                !_ ||
                !(_ = _.nodeDOM) ||
                (1 == _.nodeType
                  ? _.contains(1 == _.nodeType ? _ : _.parentNode)
                  : _ == _)
              )
                return _;
              _ = !1;
            }
          }
        }
        getDesc(_) {
          let _ = _.pmViewDesc;
          for (let _ = _; _; _ = _.parent) if (_ == this) return _;
        }
        posFromDOM(_, _, _) {
          for (let _ = _; _; _ = _.parentNode) {
            let _ = this.getDesc(_);
            if (_) return _.localPosFromDOM(_, _, _);
          }
          return -1;
        }
        descAt(_) {
          for (let _ = 0, _ = 0; _ < this.children.length; _++) {
            let _ = this.children[_],
              _ = _ + _.size;
            if (_ == _ && _ != _) {
              for (; !_.border && _.children.length; ) _ = _.children[0];
              return _;
            }
            if (_ < _) return _.descAt(_ - _ - _.border);
            _ = _;
          }
        }
        domFromPos(_, _) {
          if (!this.contentDOM)
            return {
              node: this.dom,
              offset: 0,
              atom: _ + 1,
            };
          let _ = 0,
            _ = 0;
          for (let _ = 0; _ < this.children.length; _++) {
            let _ = this.children[_],
              _ = _ + _.size;
            if (_ > _ || _ instanceof _) {
              _ = _ - _;
              break;
            }
            _ = _;
          }
          if (_)
            return this.children[_].domFromPos(_ - this.children[_].border, _);
          for (
            let _;
            _ &&
            !(_ = this.children[_ - 1]).size &&
            _ instanceof _ &&
            _.side >= 0;
            _--
          );
          if (_ <= 0) {
            let _,
              _ = !0;
            for (
              ;
              (_ = _ ? this.children[_ - 1] : null),
                _ && _.dom.parentNode != this.contentDOM;
              _--, _ = !1
            );
            return _ && _ && _ && !_.border && !_.domAtom
              ? _.domFromPos(_.size, _)
              : {
                  node: this.contentDOM,
                  offset: _ ? _(_.dom) + 1 : 0,
                };
          }
          {
            let _,
              _ = !0;
            for (
              ;
              (_ = _ < this.children.length ? this.children[_] : null),
                _ && _.dom.parentNode != this.contentDOM;
              _++, _ = !1
            );
            return _ && _ && !_.border && !_.domAtom
              ? _.domFromPos(0, _)
              : {
                  node: this.contentDOM,
                  offset: _ ? _(_.dom) : this.contentDOM.childNodes.length,
                };
          }
        }
        parseRange(_, _, __webpack_require__ = 0) {
          if (0 == this.children.length)
            return {
              node: this.contentDOM,
              from: _,
              _: _,
              fromOffset: 0,
              toOffset: this.contentDOM.childNodes.length,
            };
          let _ = -1,
            _ = -1;
          for (let _ = __webpack_require__, _ = 0; ; _++) {
            let _ = this.children[_],
              _ = _ + _.size;
            if (-1 == _ && _ <= _) {
              let _ = _ + _.border;
              if (
                _ >= _ &&
                _ <= _ - _.border &&
                _.node &&
                _.contentDOM &&
                this.contentDOM.contains(_.contentDOM)
              )
                return __webpack_require__.parseRange(_, _, _);
              _ = _;
              for (let _ = _; _ > 0; _--) {
                let _ = this.children[_ - 1];
                if (
                  _.size &&
                  _.dom.parentNode == this.contentDOM &&
                  !__webpack_require__.emptyChildAt("chunkid")
                ) {
                  _ = _(_.dom) + 1;
                  break;
                }
                _ -= _.size;
              }
              -1 == _ && (_ = 0);
            }
            if (_ > -1 && (_ > _ || _ == this.children.length - 1)) {
              _ = _;
              for (let _ = _ + 1; _ < this.children.length; _++) {
                let _ = this.children[_];
                if (
                  _.size &&
                  _.dom.parentNode == this.contentDOM &&
                  !__webpack_require__.emptyChildAt(-1)
                ) {
                  _ = _(_.dom);
                  break;
                }
                _ += _.size;
              }
              -1 == _ && (_ = this.contentDOM.childNodes.length);
              break;
            }
            _ = _;
          }
          return {
            node: this.contentDOM,
            from: _,
            _: _,
            fromOffset: _,
            toOffset: _,
          };
        }
        emptyChildAt(_) {
          if (this.border || !this.contentDOM || !this.children.length)
            return !1;
          let _ = this.children[_ < 0 ? 0 : this.children.length - 1];
          return 0 == _.size || _.emptyChildAt(_);
        }
        domAfterPos(_) {
          let { node: _, offset: __webpack_require__ } = this.domFromPos(_, 0);
          if (1 != _.nodeType || __webpack_require__ == _.childNodes.length)
            throw new RangeError("No node after pos " + _);
          return _.childNodes[__webpack_require__];
        }
        setSelection(_, _, _, _ = !1) {
          let _ = Math.min(_, _),
            _ = Math.max(_, _);
          for (let _ = 0, _ = 0; _ < this.children.length; _++) {
            let _ = this.children[_],
              _ = _ + _.size;
            if (_ > _ && _ < _)
              return _.setSelection(_ - _ - _.border, _ - _ - _.border, _, _);
            _ = _;
          }
          let _ = this.domFromPos(_, _ ? -1 : 1),
            _ = _ == _ ? _ : this.domFromPos(_, _ ? -1 : 1),
            _ = __webpack_require__.getSelection(),
            _ = !1;
          if ((_ || _) && _ == _) {
            let { node: _, offset: _ } = _;
            if (3 == _.nodeType) {
              if (
                ((_ = !(!_ || "\n" != _.nodeValue[_ - 1])),
                _ && _ == _.nodeValue.length)
              )
                for (let _, _ = _; _; _ = _.parentNode) {
                  if ((_ = _.nextSibling)) {
                    "BR" == _.nodeName &&
                      (_ = _ =
                        {
                          node: _.parentNode,
                          offset: _(_) + 1,
                        });
                    break;
                  }
                  let _ = _.pmViewDesc;
                  if (_ && _.node && _.node.isBlock) break;
                }
            } else {
              let _ = _.childNodes[_ - 1];
              _ = _ && ("BR" == _.nodeName || "false" == _.contentEditable);
            }
          }
          if (
            _ &&
            _.focusNode &&
            _.focusNode != _.node &&
            1 == _.focusNode.nodeType
          ) {
            let _ = _.focusNode.childNodes[_.focusOffset];
            _ && "false" == _.contentEditable && (_ = !0);
          }
          if (
            !(_ || (_ && _)) &&
            _(_.node, _.offset, _.anchorNode, _.anchorOffset) &&
            _(_.node, _.offset, _.focusNode, _.focusOffset)
          )
            return;
          let _ = !1;
          if ((_.extend || _ == _) && !_) {
            _.collapse(_.node, _.offset);
            try {
              _ != _ && _.extend(_.node, _.offset), (_ = !0);
            } catch (_) {}
          }
          if (!_) {
            if (_ > _) {
              let _ = _;
              (_ = _), (_ = _);
            }
            let _ = document.createRange();
            __webpack_require__.setEnd(_.node, _.offset),
              __webpack_require__.setStart(_.node, _.offset),
              _.removeAllRanges(),
              _.addRange(_);
          }
        }
        ignoreMutation(_) {
          return !this.contentDOM && "selection" != _.type;
        }
        get contentLost() {
          return (
            this.contentDOM &&
            this.contentDOM != this.dom &&
            !this.dom.contains(this.contentDOM)
          );
        }
        markDirty(_, _) {
          for (let _ = 0, _ = 0; _ < this.children.length; _++) {
            let _ = this.children[_],
              _ = _ + _.size;
            if (_ == _ ? _ <= _ && _ >= _ : _ < _ && _ > _) {
              let _ = _ + _.border,
                _ = _ - _.border;
              if (_ >= _ && _ <= _)
                return (
                  (this.dirty = _ == _ || _ == _ ? 2 : 1),
                  void (_ != _ ||
                  _ != _ ||
                  (!_.contentLost && _.dom.parentNode == this.contentDOM)
                    ? _.markDirty(_ - _, _ - _)
                    : (_.dirty = 3))
                );
              _.dirty =
                _.dom != _.contentDOM ||
                _.dom.parentNode != this.contentDOM ||
                _.children.length
                  ? 3
                  : 2;
            }
            _ = _;
          }
          this.dirty = 2;
        }
        markParentsDirty() {
          let _ = 1;
          for (let _ = this.parent; _; _ = _.parent, _++) {
            let _ = 1 == _ ? 2 : 1;
            _.dirty < _ && (_.dirty = _);
          }
        }
        get domAtom() {
          return !1;
        }
        get ignoreForCoords() {
          return !1;
        }
        isText(_) {
          return !1;
        }
      }
      class _ extends _ {
        constructor(_, _, _, _) {
          let _,
            _ = _.type.toDOM;
          if (
            ("function" == typeof _ &&
              (_ = _(_, () =>
                _ ? (_.parent ? _.parent.posBeforeChild(_) : void 0) : _,
              )),
            !_.type.spec.raw)
          ) {
            if (1 != _.nodeType) {
              let _ = document.createElement("span");
              _.appendChild(_), (_ = _);
            }
            (_.contentEditable = "false"),
              _.classList.add("ProseMirror-widget");
          }
          super(_, [], _, null),
            (this.widget = _),
            (this.widget = _),
            (_ = this);
        }
        matchesWidget(_) {
          return 0 == this.dirty && _.type._(this.widget.type);
        }
        parseRule() {
          return {
            ignore: !0,
          };
        }
        stopEvent(_) {
          let _ = this.widget.spec.stopEvent;
          return !!_ && _(_);
        }
        ignoreMutation(_) {
          return "selection" != _.type || this.widget.spec.ignoreSelection;
        }
        destroy() {
          this.widget.type.destroy(this.dom), super.destroy();
        }
        get domAtom() {
          return !0;
        }
        get side() {
          return this.widget.type.side;
        }
      }
      class _ extends _ {
        constructor(_, _, _, _) {
          super(_, [], _, null), (this.textDOM = _), (this.text = _);
        }
        get size() {
          return this.text.length;
        }
        localPosFromDOM(_, _) {
          return _ != this.textDOM
            ? this.posAtStart + (_ ? this.size : 0)
            : this.posAtStart + _;
        }
        domFromPos(_) {
          return {
            node: this.textDOM,
            offset: _,
          };
        }
        ignoreMutation(_) {
          return "characterData" === _.type && _.target.nodeValue == _.oldValue;
        }
      }
      class _ extends _ {
        constructor(_, _, _, _) {
          super(_, [], _, _), (this.mark = _);
        }
        static create(_, _, _, _) {
          let _ = _.nodeViews[_.type.name],
            _ = _ && _(_, _, _);
          return (
            (_ && _.dom) ||
              (_ = _._.renderSpec(document, _.type.spec.toDOM(_, _))),
            new _(_, _, _.dom, _.contentDOM || _.dom)
          );
        }
        parseRule() {
          return 3 & this.dirty || this.mark.type.spec.reparseInView
            ? null
            : {
                mark: this.mark.type.name,
                attrs: this.mark.attrs,
                contentElement: this.contentDOM,
              };
        }
        matchesMark(_) {
          return 3 != this.dirty && this.mark._(_);
        }
        markDirty(_, _) {
          if ((super.markDirty(_, _), 0 != this.dirty)) {
            let _ = this.parent;
            for (; !_.node; ) _ = _.parent;
            _.dirty < this.dirty && (_.dirty = this.dirty), (this.dirty = 0);
          }
        }
        slice(_, _, _) {
          let _ = _.create(this.parent, this.mark, !0, _),
            _ = this.children,
            _ = this.size;
          _ < _ && (_ = _(_, _, _, _)), _ > 0 && (_ = _(_, 0, _, _));
          for (let _ = 0; _ < _.length; _++) _[_].parent = _;
          return (_.children = _), _;
        }
      }
      class _ extends _ {
        constructor(_, _, _, _, _, _, _, _, _) {
          super(_, [], _, _),
            (this.node = _),
            (this.outerDeco = _),
            (this.innerDeco = _),
            (this.nodeDOM = _);
        }
        static create(_, _, _, _, _, _) {
          let _,
            _ = _.nodeViews[_.type.name],
            _ =
              _ &&
              _(
                _,
                _,
                () =>
                  _ ? (_.parent ? _.parent.posBeforeChild(_) : void 0) : _,
                _,
                _,
              ),
            _ = _ && _.dom,
            _ = _ && _.contentDOM;
          if (_.isText)
            if (_) {
              if (3 != _.nodeType)
                throw new RangeError(
                  "Text must be rendered as a DOM text node",
                );
            } else _ = document.createTextNode(_.text);
          else
            _ ||
              ({ dom: _, contentDOM: _ } = _._.renderSpec(
                document,
                _.type.spec.toDOM(_),
              ));
          _ ||
            _.isText ||
            "BR" == _.nodeName ||
            (_.hasAttribute("contenteditable") || (_.contentEditable = "false"),
            _.type.spec.draggable && (_.draggable = !0));
          let _ = _;
          return (
            (_ = _(_, _, _)),
            _
              ? (_ = new _(_, _, _, _, _, _ || null, _, _, _, _ + 1))
              : _.isText
                ? new _(_, _, _, _, _, _, _)
                : new _(_, _, _, _, _, _ || null, _, _, _ + 1)
          );
        }
        parseRule() {
          if (this.node.type.spec.reparseInView) return null;
          let _ = {
            node: this.node.type.name,
            attrs: this.node.attrs,
          };
          if (
            ("pre" == this.node.type.whitespace &&
              (_.preserveWhitespace = "full"),
            this.contentDOM)
          )
            if (this.contentLost) {
              for (let _ = this.children.length - 1; _ >= 0; _--) {
                let _ = this.children[_];
                if (this.dom.contains(_.dom.parentNode)) {
                  _.contentElement = _.dom.parentNode;
                  break;
                }
              }
              _.contentElement || (_.getContent = () => _._.empty);
            } else _.contentElement = this.contentDOM;
          else _.getContent = () => this.node.content;
          return _;
        }
        matchesNode(_, _, _) {
          return (
            0 == this.dirty &&
            _._(this.node) &&
            _(_, this.outerDeco) &&
            __webpack_require__._(this.innerDeco)
          );
        }
        get size() {
          return this.node.nodeSize;
        }
        get border() {
          return this.node.isLeaf ? 0 : 1;
        }
        updateChildren(_, _) {
          let _ = this.node.inlineContent,
            _ = _,
            _ = _.composing ? this.localCompositionInfo(_, _) : null,
            _ = _ && _.pos > -1 ? _ : null,
            _ = _ && _.pos < 0,
            _ = new _(this, _ && _.node, _);
          !(function (_, _, _, _) {
            let _ = _.locals(_),
              _ = 0;
            if (0 == _.length) {
              for (let _ = 0; _ < _.childCount; _++) {
                let _ = _.child(_);
                _(_, _, _.forChild(_, _), _), (_ += _.nodeSize);
              }
              return;
            }
            let _ = 0,
              _ = [],
              _ = null;
            for (let _ = 0; ; ) {
              let _, _, _, _;
              for (; _ < _.length && _[_]._ == _; ) {
                let _ = _[_++];
                _.widget && (_ ? (_ || (_ = [_])).push(_) : (_ = _));
              }
              if (_)
                if (_) {
                  _.sort(_);
                  for (let _ = 0; _ < _.length; _++)
                    __webpack_require__(_[_], _, !!_);
                } else __webpack_require__(_, _, !!_);
              if (_) (_ = -1), (_ = _), (_ = null);
              else {
                if (!(_ < _.childCount)) break;
                (_ = _), (_ = _.child(_++));
              }
              for (let _ = 0; _ < _.length; _++)
                _[_]._ <= _ && _.splice(_--, 1);
              for (; _ < _.length && _[_].from <= _ && _[_]._ > _; )
                _.push(_[_++]);
              let _ = _ + _.nodeSize;
              if (_.isText) {
                let _ = _;
                _ < _.length && _[_].from < _ && (_ = _[_].from);
                for (let _ = 0; _ < _.length; _++) _[_]._ < _ && (_ = _[_]._);
                _ < _ &&
                  ((_ = _.cut(_ - _)),
                  (_ = _.cut(0, _ - _)),
                  (_ = _),
                  (_ = -1));
              } else for (; _ < _.length && _[_]._ < _; ) _++;
              _(
                _,
                _.isInline && !_.isLeaf
                  ? _.filter((_) => !_.inline)
                  : _.slice(),
                _.forChild(_, _),
                _,
              ),
                (_ = _);
            }
          })(
            this.node,
            this.innerDeco,
            (_, _, _) => {
              _.spec.marks
                ? _.syncToMarks(_.spec.marks, _, _)
                : _.type.side >= 0 &&
                  !_ &&
                  _.syncToMarks(
                    _ == this.node.childCount
                      ? _._.none
                      : this.node.child(_).marks,
                    _,
                    _,
                  ),
                _.placeWidget(_, _, _);
            },
            (_, _, _, _) => {
              let _;
              _.syncToMarks(_.marks, _, _),
                _.findNodeMatch(_, _, _, _) ||
                  (_ &&
                    _.state.selection.from > _ &&
                    _.state.selection._ < _ + _.nodeSize &&
                    (_ = _.findIndexWithChild(_.node)) > -1 &&
                    _.updateNodeAt(_, _, _, _, _)) ||
                  _.updateNextNode(_, _, _, _, _, _) ||
                  _.addNode(_, _, _, _, _),
                (_ += _.nodeSize);
            },
          ),
            _.syncToMarks([], _, _),
            this.node.isTextblock && _.addTextblockHacks(),
            _.destroyRest(),
            (_.changed || 2 == this.dirty) &&
              (_ && this.protectLocalComposition(_, _),
              _(this.contentDOM, this.children, _),
              _ &&
                (function (_) {
                  if ("UL" == _.nodeName || "OL" == _.nodeName) {
                    let _ = _.style.cssText;
                    (_.style.cssText = _ + "; list-style: square !important"),
                      window.getComputedStyle(_).listStyle,
                      (_.style.cssText = _);
                  }
                })(this.dom));
        }
        localCompositionInfo(_, _) {
          let { from: __webpack_require__, _: _ } = _.state.selection;
          if (
            !(_.state.selection instanceof _._) ||
            __webpack_require__ < _ ||
            _ > _ + this.node.content.size
          )
            return null;
          let _ = _.input.compositionNode;
          if (!_ || !this.dom.contains(_.parentNode)) return null;
          if (this.node.inlineContent) {
            let _ = _.nodeValue,
              _ = (function (_, _, _, _) {
                for (let _ = 0, _ = 0; _ < _.childCount && _ <= _; ) {
                  let _ = _.child(_++),
                    _ = _;
                  if (((_ += _.nodeSize), !_.isText)) continue;
                  let _ = _.text;
                  for (; _ < _.childCount; ) {
                    let _ = _.child(_++);
                    if (((_ += _.nodeSize), !_.isText)) break;
                    _ += _.text;
                  }
                  if (_ >= _) {
                    if (_ >= _ && _.slice(_ - _.length - _, _ - _) == _)
                      return _ - _.length;
                    let _ = _ < _ ? _.lastIndexOf(_, _ - _ - 1) : -1;
                    if (_ >= 0 && _ + _.length + _ >= _) return _ + _;
                    if (
                      _ == _ &&
                      _.length >= _ + _.length - _ &&
                      _.slice(_ - _, _ - _ + _.length) == _
                    )
                      return _;
                  }
                }
                return -1;
              })(this.node.content, _, __webpack_require__ - _, _ - _);
            return _ < 0
              ? null
              : {
                  node: _,
                  pos: _,
                  text: _,
                };
          }
          return {
            node: _,
            pos: -1,
            text: "",
          };
        }
        protectLocalComposition(
          _,
          { node: _, pos: __webpack_require__, text: _ },
        ) {
          if (this.getDesc(_)) return;
          let _ = _;
          for (; _.parentNode != this.contentDOM; _ = _.parentNode) {
            for (; _.previousSibling; )
              _.parentNode.removeChild(_.previousSibling);
            for (; _.nextSibling; ) _.parentNode.removeChild(_.nextSibling);
            _.pmViewDesc && (_.pmViewDesc = void 0);
          }
          let _ = new _(this, _, _, _);
          _.input.compositionNodes.push(_),
            (this.children = _(
              this.children,
              __webpack_require__,
              __webpack_require__ + _.length,
              _,
              _,
            ));
        }
        update(_, _, _, _) {
          return (
            !(3 == this.dirty || !_.sameMarkup(this.node)) &&
            (this.updateInner(_, _, _, _), !0)
          );
        }
        updateInner(_, _, _, _) {
          this.updateOuterDeco(_),
            (this.node = _),
            (this.innerDeco = _),
            this.contentDOM && this.updateChildren(_, this.posAtStart),
            (this.dirty = 0);
        }
        updateOuterDeco(_) {
          if (_(_, this.outerDeco)) return;
          let _ = 1 != this.nodeDOM.nodeType,
            _ = this.dom;
          (this.dom = _(
            this.dom,
            this.nodeDOM,
            _(this.outerDeco, this.node, _),
            _(_, this.node, _),
          )),
            this.dom != _ &&
              ((_.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
            (this.outerDeco = _);
        }
        selectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.add("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              (this.dom.draggable = !0);
        }
        deselectNode() {
          1 == this.nodeDOM.nodeType &&
            this.nodeDOM.classList.remove("ProseMirror-selectednode"),
            (!this.contentDOM && this.node.type.spec.draggable) ||
              this.dom.removeAttribute("draggable");
        }
        get domAtom() {
          return this.node.isAtom;
        }
      }
      function _(_, _, _, _, _) {
        _(_, _, _);
        let _ = new _(void 0, _, _, _, _, _, _, _, 0);
        return _.contentDOM && _.updateChildren(_, 0), _;
      }
      class _ extends _ {
        constructor(_, _, _, _, _, _, _) {
          super(_, _, _, _, _, null, _, _, 0);
        }
        parseRule() {
          let _ = this.nodeDOM.parentNode;
          for (; _ && _ != this.dom && !_.pmIsDeco; ) _ = _.parentNode;
          return {
            skip: _ || !0,
          };
        }
        update(_, _, _, _) {
          return (
            !(
              3 == this.dirty ||
              (0 != this.dirty && !this.inParent()) ||
              !_.sameMarkup(this.node)
            ) &&
            (this.updateOuterDeco(_),
            (0 == this.dirty && _.text == this.node.text) ||
              _.text == this.nodeDOM.nodeValue ||
              ((this.nodeDOM.nodeValue = _.text),
              _.trackWrites == this.nodeDOM && (_.trackWrites = null)),
            (this.node = _),
            (this.dirty = 0),
            !0)
          );
        }
        inParent() {
          let _ = this.parent.contentDOM;
          for (let _ = this.nodeDOM; _; _ = _.parentNode) if (_ == _) return !0;
          return !1;
        }
        domFromPos(_) {
          return {
            node: this.nodeDOM,
            offset: _,
          };
        }
        localPosFromDOM(_, _, _) {
          return _ == this.nodeDOM
            ? this.posAtStart + Math.min(_, this.node.text.length)
            : super.localPosFromDOM(_, _, _);
        }
        ignoreMutation(_) {
          return "characterData" != _.type && "selection" != _.type;
        }
        slice(_, _, _) {
          let _ = this.node.cut(_, _),
            _ = document.createTextNode(_.text);
          return new _(this.parent, _, this.outerDeco, this.innerDeco, _, _, _);
        }
        markDirty(_, _) {
          super.markDirty(_, _),
            this.dom == this.nodeDOM ||
              (0 != _ && _ != this.nodeDOM.nodeValue.length) ||
              (this.dirty = 3);
        }
        get domAtom() {
          return !1;
        }
        isText(_) {
          return this.node.text == _;
        }
      }
      class _ extends _ {
        parseRule() {
          return {
            ignore: !0,
          };
        }
        matchesHack(_) {
          return 0 == this.dirty && this.dom.nodeName == _;
        }
        get domAtom() {
          return !0;
        }
        get ignoreForCoords() {
          return "IMG" == this.dom.nodeName;
        }
      }
      class _ extends _ {
        constructor(_, _, _, _, _, _, _, _, _, _) {
          super(_, _, _, _, _, _, _, _, _), (this.spec = _);
        }
        update(_, _, _, _) {
          if (3 == this.dirty) return !1;
          if (this.spec.update) {
            let _ = this.spec.update(_, _, _);
            return _ && this.updateInner(_, _, _, _), _;
          }
          return !(!this.contentDOM && !_.isLeaf) && super.update(_, _, _, _);
        }
        selectNode() {
          this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
        }
        deselectNode() {
          this.spec.deselectNode
            ? this.spec.deselectNode()
            : super.deselectNode();
        }
        setSelection(_, _, _, _) {
          this.spec.setSelection
            ? this.spec.setSelection(_, _, _)
            : super.setSelection(_, _, _, _);
        }
        destroy() {
          this.spec.destroy && this.spec.destroy(), super.destroy();
        }
        stopEvent(_) {
          return !!this.spec.stopEvent && this.spec.stopEvent(_);
        }
        ignoreMutation(_) {
          return this.spec.ignoreMutation
            ? this.spec.ignoreMutation(_)
            : super.ignoreMutation(_);
        }
      }
      function _(_, _, _) {
        let _ = _.firstChild,
          _ = !1;
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _.dom;
          if (_.parentNode == _) {
            for (; _ != _; ) (_ = _(_)), (_ = !0);
            _ = _.nextSibling;
          } else (_ = !0), _.insertBefore(_, _);
          if (_ instanceof _) {
            let _ = _ ? _.previousSibling : _.lastChild;
            _(_.contentDOM, _.children, _),
              (_ = _ ? _.nextSibling : _.firstChild);
          }
        }
        for (; _; ) (_ = _(_)), (_ = !0);
        _ && _.trackWrites == _ && (_.trackWrites = null);
      }
      const _ = function (_) {
        _ && (this.nodeName = _);
      };
      _.prototype = Object.create(null);
      const _ = [new _()];
      function _(_, _, _) {
        if (0 == _.length) return _;
        let _ = _ ? _[0] : new _(),
          _ = [_];
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_].type.attrs;
          if (_) {
            _.nodeName && _.push((_ = new _(_.nodeName)));
            for (let _ in _) {
              let _ = _[_];
              null != _ &&
                (_ &&
                  1 == _.length &&
                  _.push((_ = new _(_.isInline ? "span" : "div"))),
                "class" == _
                  ? (_.class = (_.class ? _.class + " " : "") + _)
                  : "style" == _
                    ? (_.style = (_.style ? _.style + ";" : "") + _)
                    : "nodeName" != _ && (_[_] = _));
            }
          }
        }
        return _;
      }
      function _(_, _, _, _) {
        if (_ == _ && _ == _) return _;
        let _ = _;
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _[_];
          if (_) {
            let _;
            (_ &&
              _.nodeName == _.nodeName &&
              _ != _ &&
              (_ = _.parentNode) &&
              _.nodeName.toLowerCase() == _.nodeName) ||
              ((_ = document.createElement(_.nodeName)),
              (_.pmIsDeco = !0),
              _.appendChild(_),
              (_ = _[0])),
              (_ = _);
          }
          _(_, _ || _[0], _);
        }
        return _;
      }
      function _(_, _, _) {
        for (let _ in _)
          "class" == _ ||
            "style" == _ ||
            "nodeName" == _ ||
            _ in _ ||
            _.removeAttribute(_);
        for (let _ in _)
          "class" != _ &&
            "style" != _ &&
            "nodeName" != _ &&
            _[_] != _[_] &&
            _.setAttribute(_, _[_]);
        if (_.class != _.class) {
          let _ = _.class ? _.class.split(" ").filter(Boolean) : [],
            _ = _.class ? _.class.split(" ").filter(Boolean) : [];
          for (let _ = 0; _ < _.length; _++)
            -1 == _.indexOf(_[_]) && _.classList.remove(_[_]);
          for (let _ = 0; _ < _.length; _++)
            -1 == _.indexOf(_[_]) && _.classList.add(_[_]);
          0 == _.classList.length && _.removeAttribute("class");
        }
        if (_.style != _.style) {
          if (_.style) {
            let _,
              _ =
                /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
            for (; (_ = _.exec(_.style)); ) _.style.removeProperty(_[1]);
          }
          _.style && (_.style.cssText += _.style);
        }
      }
      function _(_, _, _) {
        return _(_, _, _, _(_, _, 1 != _.nodeType));
      }
      function _(_, _) {
        if (_.length != _.length) return !1;
        for (let _ = 0; _ < _.length; _++)
          if (!_[_].type._(_[_].type)) return !1;
        return !0;
      }
      function _(_) {
        let _ = _.nextSibling;
        return _.parentNode.removeChild(_), _;
      }
      class _ {
        constructor(_, _, _) {
          (this.lock = _),
            (this.view = _),
            (this.index = 0),
            (this.stack = []),
            (this.changed = !1),
            (this.top = _),
            (this.preMatch = (function (_, _) {
              let _ = _,
                _ = _.children.length,
                _ = _.childCount,
                _ = new Map(),
                _ = [];
              _: for (; _ > 0; ) {
                let _;
                for (;;)
                  if (_) {
                    let _ = _.children[_ - 1];
                    if (!(_ instanceof _)) {
                      (_ = _), _--;
                      break;
                    }
                    (_ = _), (_ = _.children.length);
                  } else {
                    if (_ == _) break _;
                    (_ = _.parent.children.indexOf(_)), (_ = _.parent);
                  }
                let _ = _.node;
                if (_) {
                  if (_ != _.child(_ - 1)) break;
                  --_, _.set(_, _), _.push(_);
                }
              }
              return {
                index: _,
                matched: _,
                matches: _.reverse(),
              };
            })(_.node.content, _));
        }
        destroyBetween(_, _) {
          if (_ != _) {
            for (let _ = _; _ < _; _++) this.top.children[_].destroy();
            this.top.children.splice(_, _ - _), (this.changed = !0);
          }
        }
        destroyRest() {
          this.destroyBetween(this.index, this.top.children.length);
        }
        syncToMarks(_, _, _) {
          let _ = 0,
            _ = this.stack.length >> 1,
            _ = Math.min(_, _.length);
          for (
            ;
            _ < _ &&
            (_ == _ - 1 ? this.top : this.stack[(_ + 1) << 1]).matchesMark(
              _[_],
            ) &&
            !1 !== _[_].type.spec.spanning;
          )
            _++;
          for (; _ < _; )
            this.destroyRest(),
              (this.top.dirty = 0),
              (this.index = this.stack.pop()),
              (this.top = this.stack.pop()),
              _--;
          for (; _ < _.length; ) {
            this.stack.push(this.top, this.index + 1);
            let _ = -1;
            for (
              let _ = this.index;
              _ < Math.min(this.index + 3, this.top.children.length);
              _++
            ) {
              let _ = this.top.children[_];
              if (
                __webpack_require__.matchesMark(_[_]) &&
                !this.isLocked(_.dom)
              ) {
                _ = _;
                break;
              }
            }
            if (_ > -1)
              _ > this.index &&
                ((this.changed = !0), this.destroyBetween(this.index, _)),
                (this.top = this.top.children[this.index]);
            else {
              let _ = _.create(this.top, _[_], _, _);
              this.top.children.splice(this.index, 0, _),
                (this.top = _),
                (this.changed = !0);
            }
            (this.index = 0), _++;
          }
        }
        findNodeMatch(_, _, _, _) {
          let _,
            _ = -1;
          if (
            _ >= this.preMatch.index &&
            (_ = this.preMatch.matches[_ - this.preMatch.index]).parent ==
              this.top &&
            _.matchesNode(_, _, _)
          )
            _ = this.top.children.indexOf(_, this.index);
          else
            for (
              let _ = this.index, _ = Math.min(this.top.children.length, _ + 5);
              _ < _;
              _++
            ) {
              let _ = this.top.children[_];
              if (_.matchesNode(_, _, _) && !this.preMatch.matched.has(_)) {
                _ = _;
                break;
              }
            }
          return (
            !(_ < 0) && (this.destroyBetween(this.index, _), this.index++, !0)
          );
        }
        updateNodeAt(_, _, _, _, _) {
          let _ = this.top.children[_];
          return (
            3 == _.dirty && _.dom == _.contentDOM && (_.dirty = 2),
            !!_.update(_, _, _, _) &&
              (this.destroyBetween(this.index, _), this.index++, !0)
          );
        }
        findIndexWithChild(_) {
          for (;;) {
            let _ = _.parentNode;
            if (!_) return -1;
            if (_ == this.top.contentDOM) {
              let _ = _.pmViewDesc;
              if (_)
                for (let _ = this.index; _ < this.top.children.length; _++)
                  if (this.top.children[_] == _) return _;
              return -1;
            }
            _ = _;
          }
        }
        updateNextNode(_, _, _, _, _, _) {
          for (let _ = this.index; _ < this.top.children.length; _++) {
            let _ = this.top.children[_];
            if (_ instanceof _) {
              let _ = this.preMatch.matched.get(_);
              if (null != _ && _ != _) return !1;
              let _,
                _ = _.dom,
                _ =
                  this.isLocked(_) &&
                  !(
                    _.isText &&
                    _.node &&
                    _.node.isText &&
                    _.nodeDOM.nodeValue == _.text &&
                    3 != _.dirty &&
                    _(_, _.outerDeco)
                  );
              if (!_ && _.update(_, _, _, _))
                return (
                  this.destroyBetween(this.index, _),
                  _.dom != _ && (this.changed = !0),
                  this.index++,
                  !0
                );
              if (!_ && (_ = this.recreateWrapper(_, _, _, _, _, _)))
                return (
                  (this.top.children[this.index] = _),
                  _.contentDOM &&
                    ((_.dirty = 2), _.updateChildren(_, _ + 1), (_.dirty = 0)),
                  (this.changed = !0),
                  this.index++,
                  !0
                );
              break;
            }
          }
          return !1;
        }
        recreateWrapper(_, _, _, _, _, _) {
          if (
            _.dirty ||
            _.isAtom ||
            !_.children.length ||
            !_.node.content._(_.content)
          )
            return null;
          let _ = _.create(this.top, _, _, _, _, _);
          if (_.contentDOM) {
            (_.children = _.children), (_.children = []);
            for (let _ of _.children) _.parent = _;
          }
          return _.destroy(), _;
        }
        addNode(_, _, _, _, _) {
          let _ = _.create(this.top, _, _, _, _, _);
          _.contentDOM && _.updateChildren(_, _ + 1),
            this.top.children.splice(this.index++, 0, _),
            (this.changed = !0);
        }
        placeWidget(_, _, _) {
          let _ =
            this.index < this.top.children.length
              ? this.top.children[this.index]
              : null;
          if (
            !_ ||
            !_.matchesWidget(_) ||
            (_ != _.widget && _.widget.type.toDOM.parentNode)
          ) {
            let _ = new _(this.top, _, _, _);
            this.top.children.splice(this.index++, 0, _), (this.changed = !0);
          } else this.index++;
        }
        addTextblockHacks() {
          let _ = this.top.children[this.index - 1],
            _ = this.top;
          for (; _ instanceof _; )
            (_ = _), (_ = _.children[_.children.length - 1]);
          (!_ ||
            !(_ instanceof _) ||
            /\n$/.test(_.node.text) ||
            (this.view.requiresGeckoHackNode && /\s$/.test(_.node.text))) &&
            ((_ || _) &&
              _ &&
              "false" == _.dom.contentEditable &&
              this.addHackNode("IMG", _),
            this.addHackNode("BR", this.top));
        }
        addHackNode(_, _) {
          if (
            _ == this.top &&
            this.index < _.children.length &&
            _.children[this.index].matchesHack(_)
          )
            this.index++;
          else {
            let _ = document.createElement(_);
            "IMG" == _ &&
              ((_.className = "ProseMirror-separator"), (_.alt = "")),
              "BR" == _ && (_.className = "ProseMirror-trailingBreak");
            let _ = new _(this.top, [], _, null);
            _ != this.top
              ? _.children.push(_)
              : _.children.splice(this.index++, 0, _),
              (this.changed = !0);
          }
        }
        isLocked(_) {
          return (
            this.lock &&
            (_ == this.lock ||
              (1 == _.nodeType && _.contains(this.lock.parentNode)))
          );
        }
      }
      function _(_, _) {
        return _.type.side - _.type.side;
      }
      function _(_, _, _, _, _) {
        let _ = [];
        for (let _ = 0, _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _,
            _ = (_ += _.size);
          _ >= _ || _ <= _
            ? _.push(_)
            : (_ < _ && _.push(_.slice(0, _ - _, _)),
              _ && (_.push(_), (_ = void 0)),
              _ > _ && _.push(_.slice(_ - _, _.size, _)));
        }
        return _;
      }
      function _(_, _ = null) {
        let _ = _.domSelectionRange(),
          _ = _.state.doc;
        if (!_.focusNode) return null;
        let _ = _.docView.nearestDesc(_.focusNode),
          _ = _ && 0 == _.size,
          _ = _.docView.posFromDOM(_.focusNode, _.focusOffset, 1);
        if (_ < 0) return null;
        let _,
          _,
          _ = _.resolve(_);
        if (_(_)) {
          for (_ = _; _ && !_.node; ) _ = _.parent;
          let _ = _.node;
          if (
            _ &&
            _.isAtom &&
            _._.isSelectable(_) &&
            _.parent &&
            (!_.isInline ||
              !(function (_, _, _) {
                for (let _ = 0 == _, _ = _ == _(_); _ || _; ) {
                  if (_ == _) return !0;
                  let _ = _(_);
                  if (!(_ = _.parentNode)) return !1;
                  (_ = _ && 0 == _), (_ = _ && _ == _(_));
                }
              })(_.focusNode, _.focusOffset, _.dom))
          ) {
            let _ = _.posBefore;
            _ = new _._(_ == _ ? _ : _.resolve(_));
          }
        } else {
          let _ = _.docView.posFromDOM(_.anchorNode, _.anchorOffset, 1);
          if (_ < 0) return null;
          _ = _.resolve(_);
        }
        if (!_) {
          _ = _(
            _,
            _,
            _,
            "pointer" == _ || (_.state.selection.head < _.pos && !_) ? 1 : -1,
          );
        }
        return _;
      }
      function _(_) {
        return _.editable
          ? _.hasFocus()
          : _(_) &&
              document.activeElement &&
              document.activeElement.contains(_.dom);
      }
      function _(_, _ = !1) {
        let _ = _.state.selection;
        if ((_(_, _), _(_))) {
          if (!_ && _.input.mouseDown && _.input.mouseDown.allowDefault && _) {
            let _ = _.domSelectionRange(),
              _ = _.domObserver.currentSelection;
            if (
              _.anchorNode &&
              _.anchorNode &&
              _(_.anchorNode, _.anchorOffset, _.anchorNode, _.anchorOffset)
            )
              return (
                (_.input.mouseDown.delayedSelectionSync = !0),
                void _.domObserver.setCurSelection()
              );
          }
          if ((_.domObserver.disconnectSelection(), _.cursorWrapper))
            !(function (_) {
              let _ = _.domSelection(),
                _ = document.createRange(),
                _ = _.cursorWrapper.dom,
                _ = "IMG" == _.nodeName;
              _
                ? __webpack_require__.setEnd(_.parentNode, _(_) + 1)
                : __webpack_require__.setEnd(_, 0);
              __webpack_require__.collapse(!1),
                _.removeAllRanges(),
                _.addRange(_),
                !_ &&
                  !_.state.selection.visible &&
                  _ &&
                  _ <= 11 &&
                  ((_.disabled = !0), (_.disabled = !1));
            })(_);
          else {
            let _,
              _,
              { anchor: _, head: _ } = _;
            !_ ||
              _ instanceof _._ ||
              (_.$from.parent.inlineContent || (_ = _(_, _.from)),
              _.empty || _.$from.parent.inlineContent || (_ = _(_, _._))),
              _.docView.setSelection(_, _, _.root, _),
              _ && (_ && _(_), _ && _(_)),
              _.visible
                ? _.dom.classList.remove("ProseMirror-hideselection")
                : (_.dom.classList.add("ProseMirror-hideselection"),
                  "onselectionchange" in document &&
                    (function (_) {
                      let _ = _.dom.ownerDocument;
                      _.removeEventListener(
                        "selectionchange",
                        _.input.hideSelectionGuard,
                      );
                      let _ = _.domSelectionRange(),
                        _ = _.anchorNode,
                        _ = _.anchorOffset;
                      _.addEventListener(
                        "selectionchange",
                        (_.input.hideSelectionGuard = () => {
                          (_.anchorNode == _ && _.anchorOffset == _) ||
                            (_.removeEventListener(
                              "selectionchange",
                              _.input.hideSelectionGuard,
                            ),
                            setTimeout(() => {
                              (_(_) && !_.state.selection.visible) ||
                                _.dom.classList.remove(
                                  "ProseMirror-hideselection",
                                );
                            }, 20));
                        }),
                      );
                    })(_));
          }
          _.domObserver.setCurSelection(), _.domObserver.connectSelection();
        }
      }
      const _ = _ || (_ && _ < 63);
      function _(_, _) {
        let { node: __webpack_require__, offset: _ } = _.docView.domFromPos(
            _,
            0,
          ),
          _ =
            _ < __webpack_require__.childNodes.length
              ? __webpack_require__.childNodes[_]
              : null,
          _ = _ ? __webpack_require__.childNodes[_ - 1] : null;
        if (_ && _ && "false" == _.contentEditable) return _(_);
        if (
          !(
            (_ && "false" != _.contentEditable) ||
            (_ && "false" != _.contentEditable)
          )
        ) {
          if (_) return _(_);
          if (_) return _(_);
        }
      }
      function _(_) {
        return (
          (_.contentEditable = "true"),
          _ && _.draggable && ((_.draggable = !1), (_.wasDraggable = !0)),
          _
        );
      }
      function _(_) {
        (_.contentEditable = "false"),
          _.wasDraggable && ((_.draggable = !0), (_.wasDraggable = null));
      }
      function _(_, _) {
        if (_ instanceof _._) {
          let _ = _.docView.descAt(_.from);
          _ != _.lastSelectedViewDesc &&
            (_(_),
            _ && __webpack_require__.selectNode(),
            (_.lastSelectedViewDesc = _));
        } else _(_);
      }
      function _(_) {
        _.lastSelectedViewDesc &&
          (_.lastSelectedViewDesc.parent &&
            _.lastSelectedViewDesc.deselectNode(),
          (_.lastSelectedViewDesc = void 0));
      }
      function _(_, _, _, _) {
        return (
          _.someProp("createSelectionBetween", (_) => _(_, _, _)) ||
          _._.between(_, _, _)
        );
      }
      function _(_) {
        return !(_.editable && !_.hasFocus()) && _(_);
      }
      function _(_) {
        let _ = _.domSelectionRange();
        if (!_.anchorNode) return !1;
        try {
          return (
            _.dom.contains(
              3 == _.anchorNode.nodeType
                ? _.anchorNode.parentNode
                : _.anchorNode,
            ) &&
            (_.editable ||
              _.dom.contains(
                3 == _.focusNode.nodeType
                  ? _.focusNode.parentNode
                  : _.focusNode,
              ))
          );
        } catch (_) {
          return !1;
        }
      }
      function _(_, _) {
        let { $anchor: __webpack_require__, $head: _ } = _.selection,
          _ = _ > 0 ? __webpack_require__.max(_) : __webpack_require__.min(_),
          _ = _.parent.inlineContent
            ? _.depth
              ? _.doc.resolve(_ > 0 ? _.after() : _.before())
              : null
            : _;
        return _ && _._.findFrom(_, _);
      }
      function _(_, _) {
        return _.dispatch(_.state._.setSelection(_).scrollIntoView()), !0;
      }
      function _(_, _, _) {
        let _ = _.state.selection;
        if (!(_ instanceof _._)) {
          if (_ instanceof _._ && _.node.isInline)
            return _(_, new _._(_ > 0 ? _.$to : _.$from));
          {
            let _ = _(_.state, _);
            return !!_ && _(_, _);
          }
        }
        if (__webpack_require__.indexOf("s") > -1) {
          let { $head: _ } = _,
            _ = _.textOffset ? null : _ < 0 ? _.nodeBefore : _.nodeAfter;
          if (!_ || _.isText || !_.isLeaf) return !1;
          let _ = _.state.doc.resolve(_.pos + _.nodeSize * (_ < 0 ? -1 : 1));
          return _(_, new _._(_.$anchor, _));
        }
        if (!_.empty) return !1;
        if (_.endOfTextblock(_ > 0 ? "forward" : "backward")) {
          let _ = _(_.state, _);
          return !!(_ && _ instanceof _._) && _(_, _);
        }
        if (!(_ && __webpack_require__.indexOf("m") > -1)) {
          let _,
            _ = _.$head,
            _ = _.textOffset ? null : _ < 0 ? _.nodeBefore : _.nodeAfter;
          if (!_ || _.isText) return !1;
          let _ = _ < 0 ? _.pos - _.nodeSize : _.pos;
          return (
            !!(_.isAtom || ((_ = _.docView.descAt(_)) && !_.contentDOM)) &&
            (_._.isSelectable(_)
              ? _(
                  _,
                  new _._(_ < 0 ? _.state.doc.resolve(_.pos - _.nodeSize) : _),
                )
              : !!_ &&
                _(_, new _._(_.state.doc.resolve(_ < 0 ? _ : _ + _.nodeSize))))
          );
        }
      }
      function _(_) {
        return 3 == _.nodeType ? _.nodeValue.length : _.childNodes.length;
      }
      function _(_, _) {
        let _ = _.pmViewDesc;
        return (
          _ && 0 == _.size && (_ < 0 || _.nextSibling || "BR" != _.nodeName)
        );
      }
      function _(_, _) {
        return _ < 0
          ? (function (_) {
              let _ = _.domSelectionRange(),
                _ = _.focusNode,
                _ = _.focusOffset;
              if (!_) return;
              let _,
                _,
                _ = !1;
              _ &&
                1 == _.nodeType &&
                _ < _(_) &&
                _(_.childNodes[_], -1) &&
                (_ = !0);
              for (;;)
                if (_ > 0) {
                  if (1 != _.nodeType) break;
                  {
                    let _ = _.childNodes[_ - 1];
                    if (_(_, -1)) (_ = _), (_ = --_);
                    else {
                      if (3 != _.nodeType) break;
                      (_ = _), (_ = _.nodeValue.length);
                    }
                  }
                } else {
                  if (_(_)) break;
                  {
                    let _ = _.previousSibling;
                    for (; _ && _(_, -1); )
                      (_ = _.parentNode), (_ = _(_)), (_ = _.previousSibling);
                    if (_) (_ = _), (_ = _(_));
                    else {
                      if (((_ = _.parentNode), _ == _.dom)) break;
                      _ = 0;
                    }
                  }
                }
              _ ? _(_, _, _) : _ && _(_, _, _);
            })(_)
          : (function (_) {
              let _ = _.domSelectionRange(),
                _ = _.focusNode,
                _ = _.focusOffset;
              if (!_) return;
              let _,
                _,
                _ = _(_);
              for (;;)
                if (_ < _) {
                  if (1 != _.nodeType) break;
                  if (!_(_.childNodes[_], 1)) break;
                  (_ = _), (_ = ++_);
                } else {
                  if (_(_)) break;
                  {
                    let _ = _.nextSibling;
                    for (; _ && _(_, 1); )
                      (_ = _.parentNode), (_ = _(_) + 1), (_ = _.nextSibling);
                    if (_) (_ = _), (_ = 0), (_ = _(_));
                    else {
                      if (((_ = _.parentNode), _ == _.dom)) break;
                      _ = _ = 0;
                    }
                  }
                }
              _ && _(_, _, _);
            })(_);
      }
      function _(_) {
        let _ = _.pmViewDesc;
        return _ && _.node && _.node.isBlock;
      }
      function _(_, _, _) {
        if (3 != _.nodeType) {
          let _, _;
          (_ = (function (_, _) {
            for (; _ && _ == _.childNodes.length && !_(_); )
              (_ = _(_) + 1), (_ = _.parentNode);
            for (; _ && _ < _.childNodes.length; ) {
              let _ = _.childNodes[_];
              if (3 == _.nodeType) return _;
              if (1 == _.nodeType && "false" == _.contentEditable) break;
              (_ = _), (_ = 0);
            }
          })(_, _))
            ? ((_ = _), (_ = 0))
            : (_ = (function (_, _) {
                for (; _ && !_ && !_(_); ) (_ = _(_)), (_ = _.parentNode);
                for (; _ && _; ) {
                  let _ = _.childNodes[_ - 1];
                  if (3 == _.nodeType) return _;
                  if (1 == _.nodeType && "false" == _.contentEditable) break;
                  _ = (_ = _).childNodes.length;
                }
              })(_, _)) && ((_ = _), (_ = _.nodeValue.length));
        }
        let _ = _.domSelection();
        if (_(_)) {
          let _ = document.createRange();
          _.setEnd(_, _), _.setStart(_, _), _.removeAllRanges(), _.addRange(_);
        } else _.extend && _.extend(_, _);
        _.domObserver.setCurSelection();
        let { state: _ } = _;
        setTimeout(() => {
          _.state == _ && _(_);
        }, 50);
      }
      function _(_, _) {
        let _ = _.state.doc.resolve(_);
        if (!_ && !_ && _.parent.inlineContent) {
          let _ = _.coordsAtPos(_);
          if (_ > __webpack_require__.start()) {
            let _ = _.coordsAtPos(_ - 1),
              _ = (_.top + _.bottom) / 2;
            if (_ > _.top && _ < _.bottom && Math.abs(_.left - _.left) > 1)
              return _.left < _.left ? "ltr" : "rtl";
          }
          if (_ < __webpack_require__.end()) {
            let _ = _.coordsAtPos(_ + 1),
              _ = (_.top + _.bottom) / 2;
            if (_ > _.top && _ < _.bottom && Math.abs(_.left - _.left) > 1)
              return _.left > _.left ? "ltr" : "rtl";
          }
        }
        return "rtl" == getComputedStyle(_.dom).direction ? "rtl" : "ltr";
      }
      function _(_, _, _) {
        let _ = _.state.selection;
        if (
          (_ instanceof _._ && !_.empty) ||
          __webpack_require__.indexOf("s") > -1
        )
          return !1;
        if (_ && __webpack_require__.indexOf("m") > -1) return !1;
        let { $from: _, $to: _ } = _;
        if (
          !_.parent.inlineContent ||
          _.endOfTextblock(_ < 0 ? "up" : "down")
        ) {
          let _ = _(_.state, _);
          if (_ && _ instanceof _._) return _(_, _);
        }
        if (!_.parent.inlineContent) {
          let _ = _ < 0 ? _ : _,
            _ = _ instanceof _._ ? _._.near(_, _) : _._.findFrom(_, _);
          return !!_ && _(_, _);
        }
        return !1;
      }
      function _(_, _) {
        if (!(_.state.selection instanceof _._)) return !0;
        let {
          $head: __webpack_require__,
          $anchor: _,
          empty: _,
        } = _.state.selection;
        if (!__webpack_require__.sameParent(_)) return !0;
        if (!_) return !1;
        if (_.endOfTextblock(_ > 0 ? "forward" : "backward")) return !0;
        let _ =
          !__webpack_require__.textOffset &&
          (_ < 0
            ? __webpack_require__.nodeBefore
            : __webpack_require__.nodeAfter);
        if (_ && !_.isText) {
          let _ = _.state._;
          return (
            _ < 0
              ? _.delete(
                  __webpack_require__.pos - _.nodeSize,
                  __webpack_require__.pos,
                )
              : _.delete(
                  __webpack_require__.pos,
                  __webpack_require__.pos + _.nodeSize,
                ),
            _.dispatch(_),
            !0
          );
        }
        return !1;
      }
      function _(_, _, _) {
        _.domObserver.stop(), (_.contentEditable = _), _.domObserver.start();
      }
      function _(_, _) {
        let _ = _.keyCode,
          _ = (function (_) {
            let _ = "";
            return (
              _.ctrlKey && (_ += "c"),
              _.metaKey && (_ += "m"),
              _.altKey && (_ += "a"),
              _.shiftKey && (_ += "s"),
              _
            );
          })(_);
        if (8 == _ || (_ && 72 == _ && "c" == _)) return _(_, -1) || _(_, -1);
        if ((46 == _ && !_.shiftKey) || (_ && 68 == _ && "c" == _))
          return _(_, 1) || _(_, 1);
        if (13 == _ || 27 == _) return !0;
        if (37 == _ || (_ && 66 == _ && "c" == _)) {
          let _ =
            37 == _ ? ("ltr" == _(_, _.state.selection.from) ? -1 : 1) : -1;
          return _(_, _, _) || _(_, _);
        }
        if (39 == _ || (_ && 70 == _ && "c" == _)) {
          let _ =
            39 == _ ? ("ltr" == _(_, _.state.selection.from) ? 1 : -1) : 1;
          return _(_, _, _) || _(_, _);
        }
        return 38 == _ || (_ && 80 == _ && "c" == _)
          ? _(_, -1, _) || _(_, -1)
          : 40 == _ || (_ && 78 == _ && "c" == _)
            ? (function (_) {
                if (!_ || _.state.selection.$head.parentOffset > 0) return !1;
                let { focusNode: _, focusOffset: _ } = _.domSelectionRange();
                if (
                  _ &&
                  1 == _.nodeType &&
                  0 == _ &&
                  _.firstChild &&
                  "false" == _.firstChild.contentEditable
                ) {
                  let _ = _.firstChild;
                  _(_, _, "true"), setTimeout(() => _(_, _, "false"), 20);
                }
                return !1;
              })(_) ||
              _(_, 1, _) ||
              _(_, 1)
            : _ == (_ ? "m" : "c") &&
              (66 == _ || 73 == _ || 89 == _ || 90 == _);
      }
      function _(_, _) {
        _.someProp("transformCopied", (_) => {
          _ = __webpack_require__(_, _);
        });
        let _ = [],
          { content: _, openStart: _, openEnd: _ } = _;
        for (
          ;
          _ > 1 && _ > 1 && 1 == _.childCount && 1 == _.firstChild.childCount;
        ) {
          _--, _--;
          let _ = _.firstChild;
          __webpack_require__.push(
            _.type.name,
            _.attrs != _.type.defaultAttrs ? _.attrs : null,
          ),
            (_ = _.content);
        }
        let _ =
            _.someProp("clipboardSerializer") || _._.fromSchema(_.state.schema),
          _ = _(),
          _ = _.createElement("div");
        _.appendChild(
          _.serializeFragment(_, {
            document: _,
          }),
        );
        let _,
          _ = _.firstChild,
          _ = 0;
        for (; _ && 1 == _.nodeType && (_ = _[_.nodeName.toLowerCase()]); ) {
          for (let _ = _.length - 1; _ >= 0; _--) {
            let _ = _.createElement(_[_]);
            for (; _.firstChild; ) _.appendChild(_.firstChild);
            _.appendChild(_), _++;
          }
          _ = _.firstChild;
        }
        return (
          _ &&
            1 == _.nodeType &&
            _.setAttribute(
              "data-pm-slice",
              `${_} ${_}${_ ? ` -${_}` : ""} ${JSON.stringify(_)}`,
            ),
          {
            dom: _,
            text:
              _.someProp("clipboardTextSerializer", (_) =>
                __webpack_require__(_, _),
              ) || _.content.textBetween(0, _.content.size, "\n\n"),
            slice: _,
          }
        );
      }
      function _(_, _, _, _, _) {
        let _,
          _,
          _ = _.parent.type.spec.code;
        if (!_ && !_) return null;
        let _ = _ && (_ || _ || !_);
        if (_) {
          if (
            (_.someProp("transformPastedText", (_) => {
              _ = __webpack_require__(_, _ || _, _);
            }),
            _)
          )
            return _
              ? new _._(
                  _._.from(_.state.schema.text(_.replace(/\r\n?/g, "\n"))),
                  0,
                  0,
                )
              : _._.empty;
          let _ = _.someProp("clipboardTextParser", (_) =>
            __webpack_require__(_, _, _, _),
          );
          if (_) _ = _;
          else {
            let _ = _.marks(),
              { schema: _ } = _.state,
              _ = _._.fromSchema(_);
            (_ = document.createElement("div")),
              _.split(/(?:\r\n?|\n)+/).forEach((_) => {
                let _ = _.appendChild(document.createElement("p"));
                _ && _.appendChild(_.serializeNode(_.text(_, _)));
              });
          }
        } else
          _.someProp("transformPastedHTML", (_) => {
            _ = _(_, _);
          }),
            (_ = (function (_) {
              let _ = /^(\s*<meta [^>]*>)*/.exec(_);
              _ && (_ = _.slice(_[0].length));
              let _,
                _ = _().createElement("div"),
                _ = /<([a-z][^>\s]+)/i.exec(_);
              (_ = _ && _[_[1].toLowerCase()]) &&
                (_ =
                  __webpack_require__.map((_) => "<" + _ + ">").join("") +
                  _ +
                  __webpack_require__
                    .map((_) => "</" + _ + ">")
                    .reverse()
                    .join(""));
              if (((_.innerHTML = _), _))
                for (let _ = 0; _ < _.length; _++)
                  _ = _.querySelector(_[_]) || _;
              return _;
            })(_)),
            _ &&
              (function (_) {
                let _ = _.querySelectorAll(
                  _
                    ? "span:not([class]):not([style])"
                    : "span.Apple-converted-space",
                );
                for (let _ = 0; _ < _.length; _++) {
                  let _ = _[_];
                  1 == _.childNodes.length &&
                    " " == _.textContent &&
                    _.parentNode &&
                    _.parentNode.replaceChild(
                      _.ownerDocument.createTextNode(" "),
                      _,
                    );
                }
              })(_);
        let _ = _ && _.querySelector("[data-pm-slice]"),
          _ =
            _ &&
            /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
              _.getAttribute("data-pm-slice") || "",
            );
        if (_ && _[3])
          for (let _ = +_[3]; _ > 0; _--) {
            let _ = _.firstChild;
            for (; _ && 1 != _.nodeType; ) _ = _.nextSibling;
            if (!_) break;
            _ = _;
          }
        if (!_) {
          let _ =
            _.someProp("clipboardParser") ||
            _.someProp("domParser") ||
            _._.fromSchema(_.state.schema);
          _ = _.parseSlice(_, {
            preserveWhitespace: !(!_ && !_),
            context: _,
            ruleFromNode: (_) =>
              "BR" != _.nodeName ||
              _.nextSibling ||
              !_.parentNode ||
              _.test(_.parentNode.nodeName)
                ? null
                : {
                    ignore: !0,
                  },
          });
        }
        if (_)
          _ = (function (_, _) {
            if (!_.size) return _;
            let _,
              _ = _.content.firstChild.type.schema;
            try {
              _ = JSON.parse(_);
            } catch (_) {
              return _;
            }
            let { content: _, openStart: _, openEnd: _ } = _;
            for (let _ = _.length - 2; _ >= 0; _ -= 2) {
              let _ = _.nodes[_[_]];
              if (!_ || _.hasRequiredAttrs()) break;
              (_ = _._.from(_.create(_[_ + 1], _))), _++, _++;
            }
            return new _._(_, _, _);
          })(_(_, +_[1], +_[2]), _[4]);
        else if (
          ((_ = _._.maxOpen(
            (function (_, _) {
              if (_.childCount < 2) return _;
              for (let _ = _.depth; _ >= 0; _--) {
                let _,
                  _ = _.node(_).contentMatchAt(_.index(_)),
                  _ = [];
                if (
                  (_.forEach((_) => {
                    if (!_) return;
                    let _,
                      _ = _.findWrapping(_.type);
                    if (!_) return (_ = null);
                    if (
                      (_ =
                        _.length && _.length && _(_, _, _, _[_.length - 1], 0))
                    )
                      _[_.length - 1] = _;
                    else {
                      _.length &&
                        (_[_.length - 1] = _(_[_.length - 1], _.length));
                      let _ = _(_, _);
                      _.push(_), (_ = _.matchType(_.type)), (_ = _);
                    }
                  }),
                  _)
                )
                  return _._.from(_);
              }
              return _;
            })(_.content, _),
            !0,
          )),
          _.openStart || _.openEnd)
        ) {
          let _ = 0,
            _ = 0;
          for (
            let _ = _.content.firstChild;
            _ < _.openStart && !_.type.spec.isolating;
            _++, _ = _.firstChild
          );
          for (
            let _ = _.content.lastChild;
            _ < _.openEnd && !_.type.spec.isolating;
            _++, _ = _.lastChild
          );
          _ = _(_, _, _);
        }
        return (
          _.someProp("transformPasted", (_) => {
            _ = _(_, _);
          }),
          _
        );
      }
      const _ =
        /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
      function _(_, _, __webpack_require__ = 0) {
        for (let _ = _.length - 1; _ >= __webpack_require__; _--)
          _ = _[_].create(null, _._.from(_));
        return _;
      }
      function _(_, _, _, _, _) {
        if (_ < _.length && _ < _.length && _[_] == _[_]) {
          let _ = _(_, _, _, _.lastChild, _ + 1);
          if (_) return _.copy(_.content.replaceChild(_.childCount - 1, _));
          if (
            _.contentMatchAt(_.childCount).matchType(
              _ == _.length - 1 ? _.type : _[_ + 1],
            )
          )
            return _.copy(_.content.append(_._.from(_(_, _, _ + 1))));
        }
      }
      function _(_, _) {
        if (0 == _) return _;
        let _ = _.content.replaceChild(_.childCount - 1, _(_.lastChild, _ - 1)),
          _ = _.contentMatchAt(_.childCount).fillBefore(_._.empty, !0);
        return _.copy(__webpack_require__.append(_));
      }
      function _(_, _, _, _, _, _) {
        let _ = _ < 0 ? _.firstChild : _.lastChild,
          _ = _.content;
        return (
          _.childCount > 1 && (_ = 0),
          _ < _ - 1 && (_ = _(_, _, _, _, _ + 1, _)),
          _ >= _ &&
            (_ =
              _ < 0
                ? _.contentMatchAt(0)
                    .fillBefore(_, _ <= _)
                    .append(_)
                : _.append(
                    _.contentMatchAt(_.childCount).fillBefore(_._.empty, !0),
                  )),
          _.replaceChild(_ < 0 ? 0 : _.childCount - 1, _.copy(_))
        );
      }
      function _(_, _, _) {
        return (
          _ < _.openStart &&
            (_ = new _._(
              _(_.content, -1, _, _.openStart, 0, _.openEnd),
              _,
              _.openEnd,
            )),
          _ < _.openEnd &&
            (_ = new _._(_(_.content, 1, _, _.openEnd, 0, 0), _.openStart, _)),
          _
        );
      }
      const _ = {
        thead: ["table"],
        tbody: ["table"],
        tfoot: ["table"],
        caption: ["table"],
        colgroup: ["table"],
        col: ["table", "colgroup"],
        _: ["table", "tbody"],
        _: ["table", "tbody", "tr"],
        _: ["table", "tbody", "tr"],
      };
      let _ = null;
      function _() {
        return _ || (_ = document.implementation.createHTMLDocument("title"));
      }
      const _ = {},
        _ = {},
        _ = {
          touchstart: !0,
          touchmove: !0,
        };
      class _ {
        constructor() {
          (this.shiftKey = !1),
            (this.mouseDown = null),
            (this.lastKeyCode = null),
            (this.lastKeyCodeTime = 0),
            (this.lastClick = {
              time: 0,
              _: 0,
              _: 0,
              type: "",
            }),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastIOSEnter = 0),
            (this.lastIOSEnterFallbackTimeout = -1),
            (this.lastFocus = 0),
            (this.lastTouch = 0),
            (this.lastAndroidDelete = 0),
            (this.composing = !1),
            (this.compositionNode = null),
            (this.composingTimeout = -1),
            (this.compositionNodes = []),
            (this.compositionEndedAt = -2e8),
            (this.compositionID = 1),
            (this.compositionPendingChanges = 0),
            (this.domChangeCount = 0),
            (this.eventHandlers = Object.create(null)),
            (this.hideSelectionGuard = null);
        }
      }
      function _(_, _) {
        (_.input.lastSelectionOrigin = _),
          (_.input.lastSelectionTime = Date.now());
      }
      function _(_) {
        _.someProp("handleDOMEvents", (_) => {
          for (let _ in _)
            _.input.eventHandlers[_] ||
              _.dom.addEventListener(
                _,
                (_.input.eventHandlers[_] = (_) => _(_, _)),
              );
        });
      }
      function _(_, _) {
        return _.someProp("handleDOMEvents", (_) => {
          let _ = _[_.type];
          return !!_ && (_(_, _) || _.defaultPrevented);
        });
      }
      function _(_, _) {
        if (!_.bubbles) return !0;
        if (_.defaultPrevented) return !1;
        for (let _ = _.target; _ != _.dom; _ = _.parentNode)
          if (
            !_ ||
            11 == _.nodeType ||
            (_.pmViewDesc && _.pmViewDesc.stopEvent(_))
          )
            return !1;
        return !0;
      }
      function _(_) {
        return {
          left: _.clientX,
          top: _.clientY,
        };
      }
      function _(_, _, _, _, _) {
        if (-1 == _) return !1;
        let _ = _.state.doc.resolve(_);
        for (let _ = _.depth + 1; _ > 0; _--)
          if (
            _.someProp(_, (_) =>
              _ > _.depth
                ? _(_, _, _.nodeAfter, _.before(_), _, !0)
                : _(_, _, _.node(_), _.before(_), _, !1),
            )
          )
            return !0;
        return !1;
      }
      function _(_, _, _) {
        _.focused || _.focus();
        let _ = _.state._.setSelection(_);
        "pointer" == _ && _.setMeta("pointer", !0), _.dispatch(_);
      }
      function _(_, _, _, _, _) {
        return (
          _(_, "handleClickOn", _, _, _) ||
          _.someProp("handleClick", (_) => __webpack_require__(_, _, _)) ||
          (_
            ? (function (_, _) {
                if (-1 == _) return !1;
                let _,
                  _,
                  _ = _.state.selection;
                _ instanceof _._ && (_ = _.node);
                let _ = _.state.doc.resolve(_);
                for (let _ = _.depth + 1; _ > 0; _--) {
                  let _ = _ > _.depth ? _.nodeAfter : _.node(_);
                  if (_._.isSelectable(_)) {
                    _ =
                      _ &&
                      _.$from.depth > 0 &&
                      _ >= _.$from.depth &&
                      _.before(_.$from.depth + 1) == _.$from.pos
                        ? _.before(_.$from.depth)
                        : _.before(_);
                    break;
                  }
                }
                return (
                  null != _ && (_(_, _._.create(_.state.doc, _), "pointer"), !0)
                );
              })(_, _)
            : (function (_, _) {
                if (-1 == _) return !1;
                let _ = _.state.doc.resolve(_),
                  _ = _.nodeAfter;
                return (
                  !!(_ && _.isAtom && _._.isSelectable(_)) &&
                  (_(_, new _._(_), "pointer"), !0)
                );
              })(_, _))
        );
      }
      function _(_, _, _, _) {
        return (
          _(_, "handleDoubleClickOn", _, _, _) ||
          _.someProp("handleDoubleClick", (_) => __webpack_require__(_, _, _))
        );
      }
      function _(_, _, _, _) {
        return (
          _(_, "handleTripleClickOn", _, _, _) ||
          _.someProp("handleTripleClick", (_) =>
            __webpack_require__(_, _, _),
          ) ||
          (function (_, _, _) {
            if (0 != _.button) return !1;
            let _ = _.state.doc;
            if (-1 == _)
              return (
                !!_.inlineContent &&
                (_(_, _._.create(_, 0, _.content.size), "pointer"), !0)
              );
            let _ = _.resolve(_);
            for (let _ = _.depth + 1; _ > 0; _--) {
              let _ = _ > _.depth ? _.nodeAfter : _.node(_),
                _ = _.before(_);
              if (_.inlineContent)
                _(_, _._.create(_, _ + 1, _ + 1 + _.content.size), "pointer");
              else {
                if (!_._.isSelectable(_)) continue;
                _(_, _._.create(_, _), "pointer");
              }
              return !0;
            }
          })(_, _, _)
        );
      }
      function _(_) {
        return _(_);
      }
      (_.keydown = (_, _) => {
        let _ = _;
        if (
          ((_.input.shiftKey = 16 == _.keyCode || _.shiftKey),
          !_(_, _) &&
            ((_.input.lastKeyCode = _.keyCode),
            (_.input.lastKeyCodeTime = Date.now()),
            !_ || !_ || 13 != _.keyCode))
        )
          if (
            (229 != _.keyCode && _.domObserver.forceFlush(),
            !_ || 13 != _.keyCode || _.ctrlKey || _.altKey || _.metaKey)
          )
            _.someProp("handleKeyDown", (_) => _(_, _)) || _(_, _)
              ? __webpack_require__.preventDefault()
              : _(_, "key");
          else {
            let _ = Date.now();
            (_.input.lastIOSEnter = _),
              (_.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                _.input.lastIOSEnter == _ &&
                  (_.someProp("handleKeyDown", (_) => _(_, _(13, "Enter"))),
                  (_.input.lastIOSEnter = 0));
              }, 200));
          }
      }),
        (_.keyup = (_, _) => {
          16 == _.keyCode && (_.input.shiftKey = !1);
        }),
        (_.keypress = (_, _) => {
          let _ = _;
          if (
            _(_, _) ||
            !_.charCode ||
            (_.ctrlKey && !_.altKey) ||
            (_ && _.metaKey)
          )
            return;
          if (_.someProp("handleKeyPress", (_) => _(_, _)))
            return void __webpack_require__.preventDefault();
          let _ = _.state.selection;
          if (!(_ instanceof _._ && _.$from.sameParent(_.$to))) {
            let _ = String.fromCharCode(_.charCode);
            /[\r\n]/.test(_) ||
              _.someProp("handleTextInput", (_) =>
                __webpack_require__(_, _.$from.pos, _.$to.pos, _),
              ) ||
              _.dispatch(_.state._.insertText(_).scrollIntoView()),
              __webpack_require__.preventDefault();
          }
        });
      const _ = _ ? "metaKey" : "ctrlKey";
      _.mousedown = (_, _) => {
        let _ = _;
        _.input.shiftKey = _.shiftKey;
        let _ = _(_),
          _ = Date.now(),
          _ = "singleClick";
        _ - _.input.lastClick.time < 500 &&
          (function (_, _) {
            let _ = _._ - _.clientX,
              _ = _._ - _.clientY;
            return _ * _ + _ * _ < 100;
          })(_, _.input.lastClick) &&
          !_[_] &&
          ("singleClick" == _.input.lastClick.type
            ? (_ = "doubleClick")
            : "doubleClick" == _.input.lastClick.type && (_ = "tripleClick")),
          (_.input.lastClick = {
            time: _,
            _: _.clientX,
            _: _.clientY,
            type: _,
          });
        let _ = _.posAtCoords(_(_));
        _ &&
          ("singleClick" == _
            ? (_.input.mouseDown && _.input.mouseDown.done(),
              (_.input.mouseDown = new _(_, _, _, !!_)))
            : ("doubleClick" == _ ? _ : _)(_, _.pos, _.inside, _)
              ? __webpack_require__.preventDefault()
              : _(_, "pointer"));
      };
      class _ {
        constructor(_, _, _, _) {
          let _, _;
          if (
            ((this.view = _),
            (this.pos = _),
            (this.event = _),
            (this.flushed = _),
            (this.delayedSelectionSync = !1),
            (this.mightDrag = null),
            (this.startDoc = _.state.doc),
            (this.selectNode = !!_[_]),
            (this.allowDefault = _.shiftKey),
            _.inside > -1)
          )
            (_ = _.state.doc.nodeAt(_.inside)), (_ = _.inside);
          else {
            let _ = _.state.doc.resolve(_.pos);
            (_ = _.parent), (_ = _.depth ? __webpack_require__.before() : 0);
          }
          const _ = _ ? null : _.target,
            _ = _ ? _.docView.nearestDesc(_, !0) : null;
          this.target = _ ? _.dom : null;
          let { selection: _ } = _.state;
          ((0 == _.button &&
            _.type.spec.draggable &&
            !1 !== _.type.spec.selectable) ||
            (_ instanceof _._ && _.from <= _ && _._ > _)) &&
            (this.mightDrag = {
              node: _,
              pos: _,
              addAttr: !(!this.target || this.target.draggable),
              setUneditable: !(
                !this.target ||
                !_ ||
                this.target.hasAttribute("contentEditable")
              ),
            }),
            this.target &&
              this.mightDrag &&
              (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr && (this.target.draggable = !0),
              this.mightDrag.setUneditable &&
                setTimeout(() => {
                  this.view.input.mouseDown == this &&
                    this.target.setAttribute("contentEditable", "false");
                }, 20),
              this.view.domObserver.start()),
            _.root.addEventListener("mouseup", (this._ = this._.bind(this))),
            _.root.addEventListener(
              "mousemove",
              (this.move = this.move.bind(this)),
            ),
            _(_, "pointer");
        }
        done() {
          this.view.root.removeEventListener("mouseup", this._),
            this.view.root.removeEventListener("mousemove", this.move),
            this.mightDrag &&
              this.target &&
              (this.view.domObserver.stop(),
              this.mightDrag.addAttr &&
                this.target.removeAttribute("draggable"),
              this.mightDrag.setUneditable &&
                this.target.removeAttribute("contentEditable"),
              this.view.domObserver.start()),
            this.delayedSelectionSync && setTimeout(() => _(this.view)),
            (this.view.input.mouseDown = null);
        }
        up(_) {
          if ((this.done(), !this.view.dom.contains(_.target))) return;
          let _ = this.pos;
          this.view.state.doc != this.startDoc &&
            (_ = this.view.posAtCoords(_(_))),
            this.updateAllowDefault(_),
            this.allowDefault || !_
              ? _(this.view, "pointer")
              : _(this.view, _.pos, _.inside, _, this.selectNode)
                ? _.preventDefault()
                : 0 == _.button &&
                    (this.flushed ||
                      (_ && this.mightDrag && !this.mightDrag.node.isAtom) ||
                      (_ &&
                        !this.view.state.selection.visible &&
                        Math.min(
                          Math.abs(_.pos - this.view.state.selection.from),
                          Math.abs(_.pos - this.view.state.selection._),
                        ) <= 2))
                  ? (_(
                      this.view,
                      _._.near(this.view.state.doc.resolve(_.pos)),
                      "pointer",
                    ),
                    _.preventDefault())
                  : _(this.view, "pointer");
        }
        move(_) {
          this.updateAllowDefault(_),
            _(this.view, "pointer"),
            0 == _.buttons && this.done();
        }
        updateAllowDefault(_) {
          !this.allowDefault &&
            (Math.abs(this.event._ - _.clientX) > 4 ||
              Math.abs(this.event._ - _.clientY) > 4) &&
            (this.allowDefault = !0);
        }
      }
      function _(_, _) {
        return (
          !!_.composing ||
          (!!(_ && Math.abs(_.timeStamp - _.input.compositionEndedAt) < 500) &&
            ((_.input.compositionEndedAt = -2e8), !0))
        );
      }
      (_.touchstart = (_) => {
        (_.input.lastTouch = Date.now()), _(_), _(_, "pointer");
      }),
        (_.touchmove = (_) => {
          (_.input.lastTouch = Date.now()), _(_, "pointer");
        }),
        (_.contextmenu = (_) => _(_));
      const _ = _ ? 5e3 : -1;
      function _(_, _) {
        clearTimeout(_.input.composingTimeout),
          _ > -1 && (_.input.composingTimeout = setTimeout(() => _(_), _));
      }
      function _(_) {
        for (
          _.composing &&
          ((_.input.composing = !1),
          (_.input.compositionEndedAt = (function () {
            let _ = document.createEvent("Event");
            return _.initEvent("event", !0, !0), _.timeStamp;
          })()));
          _.input.compositionNodes.length > 0;
        )
          _.input.compositionNodes.pop().markParentsDirty();
      }
      function _(_) {
        let _ = _.domSelectionRange();
        if (!_.focusNode) return null;
        let _ = (function (_, _) {
            for (;;) {
              if (3 == _.nodeType && _) return _;
              if (1 == _.nodeType && _ > 0) {
                if ("false" == _.contentEditable) return null;
                _ = _((_ = _.childNodes[_ - 1]));
              } else {
                if (!_.parentNode || _(_)) return null;
                (_ = _(_)), (_ = _.parentNode);
              }
            }
          })(_.focusNode, _.focusOffset),
          _ = (function (_, _) {
            for (;;) {
              if (3 == _.nodeType && _ < _.nodeValue.length) return _;
              if (1 == _.nodeType && _ < _.childNodes.length) {
                if ("false" == _.contentEditable) return null;
                (_ = _.childNodes[_]), (_ = 0);
              } else {
                if (!_.parentNode || _(_)) return null;
                (_ = _(_) + 1), (_ = _.parentNode);
              }
            }
          })(_.focusNode, _.focusOffset);
        if (_ && _ && _ != _) {
          let _ = _.pmViewDesc;
          if (!_ || !_.isText(_.nodeValue)) return _;
          if (_.input.compositionNode == _) {
            let _ = _.pmViewDesc;
            if (_ && _.isText(_.nodeValue)) return _;
          }
        }
        return _ || _;
      }
      function _(_, _ = !1) {
        if (!(_ && _.domObserver.flushingSoon >= 0)) {
          if (
            (_.domObserver.forceFlush(),
            _(_),
            _ || (_.docView && _.docView.dirty))
          ) {
            let _ = _(_);
            return (
              _ && !_._(_.state.selection)
                ? _.dispatch(_.state._.setSelection(_))
                : _.updateState(_.state),
              !0
            );
          }
          return !1;
        }
      }
      (_.compositionstart = _.compositionupdate =
        (_) => {
          if (!_.composing) {
            _.domObserver.flush();
            let { state: _ } = _,
              _ = _.selection.$from;
            if (
              _.selection.empty &&
              (_.storedMarks ||
                (!_.textOffset &&
                  _.parentOffset &&
                  _.nodeBefore.marks.some((_) => !1 === _.type.spec.inclusive)))
            )
              (_.markCursor =
                _.state.storedMarks || __webpack_require__.marks()),
                _(_, !0),
                (_.markCursor = null);
            else if (
              (_(_),
              _ &&
                _.selection.empty &&
                _.parentOffset &&
                !_.textOffset &&
                _.nodeBefore.marks.length)
            ) {
              let _ = _.domSelectionRange();
              for (
                let _ = _.focusNode, _ = _.focusOffset;
                _ && 1 == _.nodeType && 0 != _;
              ) {
                let _ = _ < 0 ? _.lastChild : _.childNodes[_ - 1];
                if (!_) break;
                if (3 == _.nodeType) {
                  _.domSelection().collapse(_, _.nodeValue.length);
                  break;
                }
                (_ = _), (_ = -1);
              }
            }
            _.input.composing = !0;
          }
          _(_, _);
        }),
        (_.compositionend = (_, _) => {
          _.composing &&
            ((_.input.composing = !1),
            (_.input.compositionEndedAt = _.timeStamp),
            (_.input.compositionPendingChanges = _.domObserver.pendingRecords()
              .length
              ? _.input.compositionID
              : 0),
            (_.input.compositionNode = null),
            _.input.compositionPendingChanges &&
              Promise.resolve().then(() => _.domObserver.flush()),
            _.input.compositionID++,
            _(_, 20));
        });
      const _ = (_ && _ < 15) || (_ && _ < 604);
      function _(_, _, _, _, _) {
        let _ = _(_, _, _, _, _.state.selection.$from);
        if (_.someProp("handlePaste", (_) => _(_, _, _ || _._.empty)))
          return !0;
        if (!_) return !1;
        let _ = (function (_) {
            return 0 == _.openStart &&
              0 == _.openEnd &&
              1 == _.content.childCount
              ? _.content.firstChild
              : null;
          })(_),
          _ = _
            ? _.state._.replaceSelectionWith(_, _)
            : _.state._.replaceSelection(_);
        return (
          _.dispatch(
            _.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste"),
          ),
          !0
        );
      }
      function _(_) {
        let _ = _.getData("text/plain") || _.getData("Text");
        if (_) return _;
        let _ = _.getData("text/uri-list");
        return _ ? __webpack_require__.replace(/\r?\n/g, " ") : "";
      }
      (_.copy = _.cut =
        (_, _) => {
          let _ = _,
            _ = _.state.selection,
            _ = "cut" == _.type;
          if (_.empty) return;
          let _ = _ ? null : _.clipboardData,
            _ = _.content(),
            { dom: _, text: _ } = _(_, _);
          _
            ? (__webpack_require__.preventDefault(),
              _.clearData(),
              _.setData("text/html", _.innerHTML),
              _.setData("text/plain", _))
            : (function (_, _) {
                if (!_.dom.parentNode) return;
                let _ = _.dom.parentNode.appendChild(
                  document.createElement("div"),
                );
                __webpack_require__.appendChild(_),
                  (_.style.cssText =
                    "position: fixed; left: -10000px; top: 10px");
                let _ = getSelection(),
                  _ = document.createRange();
                _.selectNodeContents(_),
                  _.dom.blur(),
                  _.removeAllRanges(),
                  _.addRange(_),
                  setTimeout(() => {
                    _.parentNode && _.parentNode.removeChild(_), _.focus();
                  }, 50);
              })(_, _),
            _ &&
              _.dispatch(
                _.state._.deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut"),
              );
        }),
        (_.paste = (_, _) => {
          let _ = _;
          if (_.composing && !_) return;
          let _ = _ ? null : _.clipboardData,
            _ = _.input.shiftKey && 45 != _.input.lastKeyCode;
          _ && _(_, _(_), _.getData("text/html"), _, _)
            ? __webpack_require__.preventDefault()
            : (function (_, _) {
                if (!_.dom.parentNode) return;
                let _ =
                    _.input.shiftKey ||
                    _.state.selection.$from.parent.type.spec.code,
                  _ = _.dom.parentNode.appendChild(
                    document.createElement(_ ? "textarea" : "div"),
                  );
                _ || (_.contentEditable = "true"),
                  (_.style.cssText =
                    "position: fixed; left: -10000px; top: 10px"),
                  _.focus();
                let _ = _.input.shiftKey && 45 != _.input.lastKeyCode;
                setTimeout(() => {
                  _.focus(),
                    _.parentNode && _.parentNode.removeChild(_),
                    _
                      ? _(_, _.value, null, _, _)
                      : _(_, _.textContent, _.innerHTML, _, _);
                }, 50);
              })(_, _);
        });
      class _ {
        constructor(_, _, _) {
          (this.slice = _), (this.move = _), (this.node = _);
        }
      }
      const _ = _ ? "altKey" : "ctrlKey";
      (_.dragstart = (_, _) => {
        let _ = _,
          _ = _.input.mouseDown;
        if ((_ && _.done(), !_.dataTransfer)) return;
        let _,
          _ = _.state.selection,
          _ = _.empty ? null : _.posAtCoords(_(_));
        if (
          _ &&
          _.pos >= _.from &&
          _.pos <= (_ instanceof _._ ? _._ - 1 : _._)
        );
        else if (_ && _.mightDrag) _ = _._.create(_.state.doc, _.mightDrag.pos);
        else if (_.target && 1 == _.target.nodeType) {
          let _ = _.docView.nearestDesc(_.target, !0);
          _ &&
            _.node.type.spec.draggable &&
            _ != _.docView &&
            (_ = _._.create(_.state.doc, _.posBefore));
        }
        let _ = (_ || _.state.selection).content(),
          { dom: _, text: _, slice: _ } = _(_, _);
        _.dataTransfer.clearData(),
          _.dataTransfer.setData(_ ? "Text" : "text/html", _.innerHTML),
          (_.dataTransfer.effectAllowed = "copyMove"),
          _ || _.dataTransfer.setData("text/plain", _),
          (_.dragging = new _(_, !_[_], _));
      }),
        (_.dragend = (_) => {
          let _ = _.dragging;
          window.setTimeout(() => {
            _.dragging == _ && (_.dragging = null);
          }, 50);
        }),
        (_.dragover = _.dragenter = (_, _) => _.preventDefault()),
        (_.drop = (_, _) => {
          let _ = _,
            _ = _.dragging;
          if (((_.dragging = null), !_.dataTransfer)) return;
          let _ = _.posAtCoords(_(_));
          if (!_) return;
          let _ = _.state.doc.resolve(_.pos),
            _ = _ && _.slice;
          _
            ? _.someProp("transformPasted", (_) => {
                _ = _(_, _);
              })
            : (_ = _(
                _,
                _(_.dataTransfer),
                _ ? null : _.dataTransfer.getData("text/html"),
                !1,
                _,
              ));
          let _ = !(!_ || _[_]);
          if (_.someProp("handleDrop", (_) => _(_, _, _ || _._.empty, _)))
            return void __webpack_require__.preventDefault();
          if (!_) return;
          __webpack_require__.preventDefault();
          let _ = _ ? (0, _._)(_.state.doc, _.pos, _) : _.pos;
          null == _ && (_ = _.pos);
          let _ = _.state._;
          if (_) {
            let { node: _ } = _;
            _ ? _.replace(_) : _.deleteSelection();
          }
          let _ = _.mapping.map(_),
            _ = 0 == _.openStart && 0 == _.openEnd && 1 == _.content.childCount,
            _ = _.doc;
          if (
            (_
              ? _.replaceRangeWith(_, _, _.content.firstChild)
              : _.replaceRange(_, _, _),
            _.doc._(_))
          )
            return;
          let _ = _.doc.resolve(_);
          if (
            _ &&
            _._.isSelectable(_.content.firstChild) &&
            _.nodeAfter &&
            _.nodeAfter.sameMarkup(_.content.firstChild)
          )
            _.setSelection(new _._(_));
          else {
            let _ = _.mapping.map(_);
            _.mapping.maps[_.mapping.maps.length - 1].forEach(
              (_, _, _, _) => (_ = _),
            ),
              _.setSelection(_(_, _, _.doc.resolve(_)));
          }
          _.focus(), _.dispatch(_.setMeta("uiEvent", "drop"));
        }),
        (_.focus = (_) => {
          (_.input.lastFocus = Date.now()),
            _.focused ||
              (_.domObserver.stop(),
              _.dom.classList.add("ProseMirror-focused"),
              _.domObserver.start(),
              (_.focused = !0),
              setTimeout(() => {
                _.docView &&
                  _.hasFocus() &&
                  !_.domObserver.currentSelection._(_.domSelectionRange()) &&
                  _(_);
              }, 20));
        }),
        (_.blur = (_, _) => {
          let _ = _;
          _.focused &&
            (_.domObserver.stop(),
            _.dom.classList.remove("ProseMirror-focused"),
            _.domObserver.start(),
            _.relatedTarget &&
              _.dom.contains(_.relatedTarget) &&
              _.domObserver.currentSelection.clear(),
            (_.focused = !1));
        }),
        (_.beforeinput = (_, _) => {
          if (_ && _ && "deleteContentBackward" == _.inputType) {
            _.domObserver.flushSoon();
            let { domChangeCount: _ } = _.input;
            setTimeout(() => {
              if (_.input.domChangeCount != _) return;
              if (
                (_.dom.blur(),
                _.focus(),
                _.someProp("handleKeyDown", (_) => _(_, _(8, "Backspace"))))
              )
                return;
              let { $cursor: __webpack_require__ } = _.state.selection;
              __webpack_require__ &&
                __webpack_require__.pos > 0 &&
                _.dispatch(
                  _.state._.delete(
                    __webpack_require__.pos - 1,
                    __webpack_require__.pos,
                  ).scrollIntoView(),
                );
            }, 50);
          }
        });
      for (let _ in _) _[_] = _[_];
      function _(_, _) {
        if (_ == _) return !0;
        for (let _ in _) if (_[_] !== _[_]) return !1;
        for (let _ in _) if (!(_ in _)) return !1;
        return !0;
      }
      class _ {
        constructor(_, _) {
          (this.toDOM = _),
            (this.spec = _ || _),
            (this.side = this.spec.side || 0);
        }
        map(_, _, _, _) {
          let { pos: _, deleted: _ } = _.mapResult(
            _.from + _,
            this.side < 0 ? -1 : 1,
          );
          return _ ? null : new _(_ - _, _ - _, this);
        }
        valid() {
          return !0;
        }
        eq(_) {
          return (
            this == _ ||
            (_ instanceof _ &&
              ((this.spec.key && this.spec.key == _.spec.key) ||
                (this.toDOM == _.toDOM && _(this.spec, _.spec))))
          );
        }
        destroy(_) {
          this.spec.destroy && this.spec.destroy(_);
        }
      }
      class _ {
        constructor(_, _) {
          (this.attrs = _), (this.spec = _ || _);
        }
        map(_, _, _, _) {
          let _ = _.map(_.from + _, this.spec.inclusiveStart ? -1 : 1) - _,
            _ = _.map(_._ + _, this.spec.inclusiveEnd ? 1 : -1) - _;
          return _ >= _ ? null : new _(_, _, this);
        }
        valid(_, _) {
          return _.from < _._;
        }
        eq(_) {
          return (
            this == _ ||
            (_ instanceof _ && _(this.attrs, _.attrs) && _(this.spec, _.spec))
          );
        }
        static is(_) {
          return _.type instanceof _;
        }
        destroy() {}
      }
      class _ {
        constructor(_, _) {
          (this.attrs = _), (this.spec = _ || _);
        }
        map(_, _, _, _) {
          let _ = _.mapResult(_.from + _, 1);
          if (_.deleted) return null;
          let _ = _.mapResult(_._ + _, -1);
          return _.deleted || _.pos <= _.pos
            ? null
            : new _(_.pos - _, _.pos - _, this);
        }
        valid(_, _) {
          let _,
            { index: _, offset: _ } = _.content.findIndex(_.from);
          return (
            _ == _.from && !(_ = _.child(_)).isText && _ + _.nodeSize == _._
          );
        }
        eq(_) {
          return (
            this == _ ||
            (_ instanceof _ && _(this.attrs, _.attrs) && _(this.spec, _.spec))
          );
        }
        destroy() {}
      }
      class _ {
        constructor(_, _, _) {
          (this.from = _), (this._ = _), (this.type = _);
        }
        copy(_, _) {
          return new _(_, _, this.type);
        }
        eq(_, _ = 0) {
          return (
            this.type._(_.type) && this.from + _ == _.from && this._ + _ == _._
          );
        }
        map(_, _, _) {
          return this.type.map(_, this, _, _);
        }
        static widget(_, _, _) {
          return new _(_, _, new _(_, _));
        }
        static inline(_, _, _, _) {
          return new _(_, _, new _(_, _));
        }
        static node(_, _, _, _) {
          return new _(_, _, new _(_, _));
        }
        get spec() {
          return this.type.spec;
        }
        get inline() {
          return this.type instanceof _;
        }
        get widget() {
          return this.type instanceof _;
        }
      }
      const _ = [],
        _ = {};
      class _ {
        constructor(_, _) {
          (this.local = _.length ? _ : _), (this.children = _.length ? _ : _);
        }
        static create(_, _) {
          return _.length ? _(_, _, 0, _) : _;
        }
        find(_, _, _) {
          let _ = [];
          return (
            this.findInner(null == _ ? 0 : _, null == _ ? 1e9 : _, _, 0, _), _
          );
        }
        findInner(_, _, _, _, _) {
          for (let _ = 0; _ < this.local.length; _++) {
            let _ = this.local[_];
            _.from <= _ &&
              _._ >= _ &&
              (!_ || _(_.spec)) &&
              __webpack_require__.push(_.copy(_.from + _, _._ + _));
          }
          for (let _ = 0; _ < this.children.length; _ += 3)
            if (this.children[_] < _ && this.children[_ + 1] > _) {
              let _ = this.children[_] + 1;
              this.children[_ + 2].findInner(_ - _, _ - _, _, _ + _, _);
            }
        }
        map(_, _, _) {
          return this == _ || 0 == _.maps.length
            ? this
            : this.mapInner(_, _, 0, 0, _ || _);
        }
        mapInner(_, _, _, _, _) {
          let _;
          for (let _ = 0; _ < this.local.length; _++) {
            let _ = this.local[_].map(_, _, _);
            _ && _.type.valid(_, _)
              ? (_ || (_ = [])).push(_)
              : _.onRemove && _.onRemove(this.local[_].spec);
          }
          return this.children.length
            ? (function (_, _, _, _, _, _, _) {
                let _ = _.slice();
                for (let _ = 0, _ = _; _ < _.maps.length; _++) {
                  let _ = 0;
                  _.maps[_].forEach((_, _, _, _) => {
                    let _ = _ - _ - (_ - _);
                    for (let _ = 0; _ < _.length; _ += 3) {
                      let _ = _[_ + 1];
                      if (_ < 0 || _ > _ + _ - _) continue;
                      let _ = _[_] + _ - _;
                      _ >= _
                        ? (_[_ + 1] = _ <= _ ? -2 : -1)
                        : _ >= _ && _ && ((_[_] += _), (_[_ + 1] += _));
                    }
                    _ += _;
                  }),
                    (_ = _.maps[_].map(_, -1));
                }
                let _ = !1;
                for (let _ = 0; _ < _.length; _ += 3)
                  if (_[_ + 1] < 0) {
                    if (-2 == _[_ + 1]) {
                      (_ = !0), (_[_ + 1] = -1);
                      continue;
                    }
                    let _ = __webpack_require__.map(_[_] + _),
                      _ = _ - _;
                    if (_ < 0 || _ >= _.content.size) {
                      _ = !0;
                      continue;
                    }
                    let _ = __webpack_require__.map(_[_ + 1] + _, -1) - _,
                      { index: _, offset: _ } = _.content.findIndex(_),
                      _ = _.maybeChild(_);
                    if (_ && _ == _ && _ + _.nodeSize == _) {
                      let _ = _[_ + 2].mapInner(_, _, _ + 1, _[_] + _ + 1, _);
                      _ != _
                        ? ((_[_] = _), (_[_ + 1] = _), (_[_ + 2] = _))
                        : ((_[_ + 1] = -2), (_ = !0));
                    } else _ = !0;
                  }
                if (_) {
                  let _ = (function (_, _, _, _, _, _, _) {
                      function _(_, _) {
                        for (let _ = 0; _ < _.local.length; _++) {
                          let _ = _.local[_].map(_, _, _);
                          _
                            ? __webpack_require__.push(_)
                            : _.onRemove && _.onRemove(_.local[_].spec);
                        }
                        for (let _ = 0; _ < _.children.length; _ += 3)
                          _(_.children[_ + 2], _.children[_] + _ + 1);
                      }
                      for (let _ = 0; _ < _.length; _ += 3)
                        -1 == _[_ + 1] && _(_[_ + 2], _[_] + _ + 1);
                      return _;
                    })(_, _, _, _, _, _, _),
                    _ = _(_, _, 0, _);
                  _ = _.local;
                  for (let _ = 0; _ < _.length; _ += 3)
                    _[_ + 1] < 0 && (_.splice(_, 3), (_ -= 3));
                  for (let _ = 0, _ = 0; _ < _.children.length; _ += 3) {
                    let _ = _.children[_];
                    for (; _ < _.length && _[_] < _; ) _ += 3;
                    _.splice(
                      _,
                      0,
                      _.children[_],
                      _.children[_ + 1],
                      _.children[_ + 2],
                    );
                  }
                }
                return new _(_.sort(_), _);
              })(this.children, _ || [], _, _, _, _, _)
            : _
              ? new _(_.sort(_), _)
              : _;
        }
        add(_, _) {
          return _.length
            ? this == _
              ? _.create(_, _)
              : this.addInner(_, _, 0)
            : this;
        }
        addInner(_, _, _) {
          let _,
            _ = 0;
          _.forEach((_, _) => {
            let _,
              _ = _ + _;
            if ((_ = _(_, _, _))) {
              for (_ || (_ = this.children.slice()); _ < _.length && _[_] < _; )
                _ += 3;
              _[_] == _
                ? (_[_ + 2] = _[_ + 2].addInner(_, _, _ + 1))
                : _.splice(_, 0, _, _ + _.nodeSize, _(_, _, _ + 1, _)),
                (_ += 3);
            }
          });
          let _ = _(_ ? _(_) : _, -_);
          for (let _ = 0; _ < _.length; _++)
            _[_].type.valid(_, _[_]) || _.splice(_--, 1);
          return new _(
            _.length ? this.local.concat(_).sort(_) : this.local,
            _ || this.children,
          );
        }
        remove(_) {
          return 0 == _.length || this == _ ? this : this.removeInner(_, 0);
        }
        removeInner(_, _) {
          let _ = this.children,
            _ = this.local;
          for (let _ = 0; _ < _.length; _ += 3) {
            let _,
              _ = _[_] + _,
              _ = _[_ + 1] + _;
            for (let _, _ = 0; _ < _.length; _++)
              (_ = _[_]) &&
                _.from > _ &&
                _._ < _ &&
                ((_[_] = null), (_ || (_ = [])).push(_));
            if (!_) continue;
            _ == this.children && (_ = this.children.slice());
            let _ = _[_ + 2].removeInner(_, _ + 1);
            _ != _
              ? (_[_ + 2] = _)
              : (__webpack_require__.splice(_, 3), (_ -= 3));
          }
          if (_.length)
            for (let _, _ = 0; _ < _.length; _++)
              if ((_ = _[_]))
                for (let _ = 0; _ < _.length; _++)
                  _[_]._(_, _) &&
                    (_ == this.local && (_ = this.local.slice()),
                    _.splice(_--, 1));
          return _ == this.children && _ == this.local
            ? this
            : _.length || _.length
              ? new _(_, _)
              : _;
        }
        forChild(_, _) {
          if (this == _) return this;
          if (_.isLeaf) return _.empty;
          let _, _;
          for (let _ = 0; _ < this.children.length; _ += 3)
            if (this.children[_] >= _) {
              this.children[_] == _ && (_ = this.children[_ + 2]);
              break;
            }
          let _ = _ + 1,
            _ = _ + _.content.size;
          for (let _ = 0; _ < this.local.length; _++) {
            let _ = this.local[_];
            if (_.from < _ && _._ > _ && _.type instanceof _) {
              let _ = Math.max(_, _.from) - _,
                _ = Math.min(_, _._) - _;
              _ < _ && (_ || (_ = [])).push(_.copy(_, _));
            }
          }
          if (_) {
            let _ = new _(_.sort(_), _);
            return _ ? new _([_, _]) : _;
          }
          return _ || _;
        }
        eq(_) {
          if (this == _) return !0;
          if (
            !(_ instanceof _) ||
            this.local.length != _.local.length ||
            this.children.length != _.children.length
          )
            return !1;
          for (let _ = 0; _ < this.local.length; _++)
            if (!this.local[_]._(_.local[_])) return !1;
          for (let _ = 0; _ < this.children.length; _ += 3)
            if (
              this.children[_] != _.children[_] ||
              this.children[_ + 1] != _.children[_ + 1] ||
              !this.children[_ + 2]._(_.children[_ + 2])
            )
              return !1;
          return !0;
        }
        locals(_) {
          return _(this.localsInner(_));
        }
        localsInner(_) {
          if (this == _) return _;
          if (_.inlineContent || !this.local.some(_._)) return this.local;
          let _ = [];
          for (let _ = 0; _ < this.local.length; _++)
            this.local[_].type instanceof _ || _.push(this.local[_]);
          return _;
        }
      }
      (_.empty = new _([], [])), (_.removeOverlap = _);
      const _ = _.empty;
      class _ {
        constructor(_) {
          this.members = _;
        }
        map(_, _) {
          const _ = this.members.map((_) => __webpack_require__.map(_, _, _));
          return _.from(_);
        }
        forChild(_, _) {
          if (_.isLeaf) return _.empty;
          let _ = [];
          for (let _ = 0; _ < this.members.length; _++) {
            let _ = this.members[_].forChild(_, _);
            _ != _ &&
              (_ instanceof _
                ? (_ = __webpack_require__.concat(_.members))
                : __webpack_require__.push(_));
          }
          return _.from(_);
        }
        eq(_) {
          if (!(_ instanceof _) || _.members.length != this.members.length)
            return !1;
          for (let _ = 0; _ < this.members.length; _++)
            if (!this.members[_]._(_.members[_])) return !1;
          return !0;
        }
        locals(_) {
          let _,
            _ = !0;
          for (let _ = 0; _ < this.members.length; _++) {
            let _ = this.members[_].localsInner(_);
            if (_.length)
              if (_) {
                _ && ((_ = _.slice()), (_ = !1));
                for (let _ = 0; _ < _.length; _++) _.push(_[_]);
              } else _ = _;
          }
          return _ ? _(_ ? _ : _.sort(_)) : _;
        }
        static from(_) {
          switch (_.length) {
            case 0:
              return _;
            case 1:
              return _[0];
            default:
              return new _(
                _.every((_) => _ instanceof _)
                  ? _
                  : _.reduce(
                      (_, _) => _.concat(_ instanceof _ ? _ : _.members),
                      [],
                    ),
              );
          }
        }
      }
      function _(_, _) {
        if (!_ || !_.length) return _;
        let _ = [];
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          __webpack_require__.push(new _(_.from + _, _._ + _, _.type));
        }
        return _;
      }
      function _(_, _, _) {
        if (_.isLeaf) return null;
        let _ = _ + _.nodeSize,
          _ = null;
        for (let _, _ = 0; _ < _.length; _++)
          (_ = _[_]) &&
            _.from > _ &&
            _._ < _ &&
            ((_ || (_ = [])).push(_), (_[_] = null));
        return _;
      }
      function _(_) {
        let _ = [];
        for (let _ = 0; _ < _.length; _++) null != _[_] && _.push(_[_]);
        return _;
      }
      function _(_, _, _, _) {
        let _ = [],
          _ = !1;
        _.forEach((_, _) => {
          let _ = _(_, _, _ + _);
          if (_) {
            _ = !0;
            let _ = _(_, _, _ + _ + 1, _);
            _ != _ && _.push(_, _ + _.nodeSize, _);
          }
        });
        let _ = _(_ ? _(_) : _, -_).sort(_);
        for (let _ = 0; _ < _.length; _++)
          _[_].type.valid(_, _[_]) ||
            (_.onRemove && _.onRemove(_[_].spec), _.splice(_--, 1));
        return _.length || _.length ? new _(_, _) : _;
      }
      function _(_, _) {
        return _.from - _.from || _._ - _._;
      }
      function _(_) {
        let _ = _;
        for (let _ = 0; _ < _.length - 1; _++) {
          let _ = _[_];
          if (_.from != _._)
            for (let _ = _ + 1; _ < _.length; _++) {
              let _ = _[_];
              if (_.from != _.from) {
                _.from < _._ &&
                  (_ == _ && (_ = _.slice()),
                  (_[_] = _.copy(_.from, _.from)),
                  _(_, _, _.copy(_.from, _._)));
                break;
              }
              _._ != _._ &&
                (_ == _ && (_ = _.slice()),
                (_[_] = _.copy(_.from, _._)),
                _(_, _ + 1, _.copy(_._, _._)));
            }
        }
        return _;
      }
      function _(_, _, _) {
        for (; _ < _.length && _(_, _[_]) > 0; ) _++;
        _.splice(_, 0, _);
      }
      function _(_) {
        let _ = [];
        return (
          _.someProp("decorations", (_) => {
            let _ = __webpack_require__(_.state);
            _ && _ != _ && _.push(_);
          }),
          _.cursorWrapper &&
            _.push(_.create(_.state.doc, [_.cursorWrapper.deco])),
          _.from(_)
        );
      }
      const _ = {
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
          attributes: !0,
          attributeOldValue: !0,
          subtree: !0,
        },
        _ = _ && _ <= 11;
      class _ {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        set(_) {
          (this.anchorNode = _.anchorNode),
            (this.anchorOffset = _.anchorOffset),
            (this.focusNode = _.focusNode),
            (this.focusOffset = _.focusOffset);
        }
        clear() {
          this.anchorNode = this.focusNode = null;
        }
        eq(_) {
          return (
            _.anchorNode == this.anchorNode &&
            _.anchorOffset == this.anchorOffset &&
            _.focusNode == this.focusNode &&
            _.focusOffset == this.focusOffset
          );
        }
      }
      class _ {
        constructor(_, _) {
          (this.view = _),
            (this.handleDOMChange = _),
            (this.queue = []),
            (this.flushingSoon = -1),
            (this.observer = null),
            (this.currentSelection = new _()),
            (this.onCharData = null),
            (this.suppressingSelectionUpdates = !1),
            (this.observer =
              window.MutationObserver &&
              new window.MutationObserver((_) => {
                for (let _ = 0; _ < _.length; _++) this.queue.push(_[_]);
                _ &&
                _ <= 11 &&
                _.some(
                  (_) =>
                    ("childList" == _.type && _.removedNodes.length) ||
                    ("characterData" == _.type &&
                      _.oldValue.length > _.target.nodeValue.length),
                )
                  ? this.flushSoon()
                  : this.flush();
              })),
            _ &&
              (this.onCharData = (_) => {
                this.queue.push({
                  target: _.target,
                  type: "characterData",
                  oldValue: _.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this));
        }
        flushSoon() {
          this.flushingSoon < 0 &&
            (this.flushingSoon = window.setTimeout(() => {
              (this.flushingSoon = -1), this.flush();
            }, 20));
        }
        forceFlush() {
          this.flushingSoon > -1 &&
            (window.clearTimeout(this.flushingSoon),
            (this.flushingSoon = -1),
            this.flush());
        }
        start() {
          this.observer &&
            (this.observer.takeRecords(),
            this.observer.observe(this.view.dom, _)),
            this.onCharData &&
              this.view.dom.addEventListener(
                "DOMCharacterDataModified",
                this.onCharData,
              ),
            this.connectSelection();
        }
        stop() {
          if (this.observer) {
            let _ = this.observer.takeRecords();
            if (_.length) {
              for (let _ = 0; _ < _.length; _++) this.queue.push(_[_]);
              window.setTimeout(() => this.flush(), 20);
            }
            this.observer.disconnect();
          }
          this.onCharData &&
            this.view.dom.removeEventListener(
              "DOMCharacterDataModified",
              this.onCharData,
            ),
            this.disconnectSelection();
        }
        connectSelection() {
          this.view.dom.ownerDocument.addEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        disconnectSelection() {
          this.view.dom.ownerDocument.removeEventListener(
            "selectionchange",
            this.onSelectionChange,
          );
        }
        suppressSelectionUpdates() {
          (this.suppressingSelectionUpdates = !0),
            setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
        }
        onSelectionChange() {
          if (_(this.view)) {
            if (this.suppressingSelectionUpdates) return _(this.view);
            if (_ && _ <= 11 && !this.view.state.selection.empty) {
              let _ = this.view.domSelectionRange();
              if (
                _.focusNode &&
                _(_.focusNode, _.focusOffset, _.anchorNode, _.anchorOffset)
              )
                return this.flushSoon();
            }
            this.flush();
          }
        }
        setCurSelection() {
          this.currentSelection.set(this.view.domSelectionRange());
        }
        ignoreSelectionChange(_) {
          if (!_.focusNode) return !0;
          let _,
            _ = new Set();
          for (let _ = _.focusNode; _; _ = _(_)) __webpack_require__.add(_);
          for (let _ = _.anchorNode; _; _ = _(_))
            if (__webpack_require__.has(_)) {
              _ = _;
              break;
            }
          let _ = _ && this.view.docView.nearestDesc(_);
          return _ &&
            _.ignoreMutation({
              type: "selection",
              target: 3 == _.nodeType ? _.parentNode : _,
            })
            ? (this.setCurSelection(), !0)
            : void 0;
        }
        pendingRecords() {
          if (this.observer)
            for (let _ of this.observer.takeRecords()) this.queue.push(_);
          return this.queue;
        }
        flush() {
          let { view: _ } = this;
          if (!_.docView || this.flushingSoon > -1) return;
          let _ = this.pendingRecords();
          _.length && (this.queue = []);
          let _ = _.domSelectionRange(),
            _ =
              !this.suppressingSelectionUpdates &&
              !this.currentSelection._(_) &&
              _(_) &&
              !this.ignoreSelectionChange(_),
            _ = -1,
            _ = -1,
            _ = !1,
            _ = [];
          if (_.editable)
            for (let _ = 0; _ < _.length; _++) {
              let _ = this.registerMutation(_[_], _);
              _ &&
                ((_ = _ < 0 ? _.from : Math.min(_.from, _)),
                (_ = _ < 0 ? _._ : Math.max(_._, _)),
                _.typeOver && (_ = !0));
            }
          if (_ && _.length > 1) {
            let _ = _.filter((_) => "BR" == _.nodeName);
            if (2 == _.length) {
              let _ = _[0],
                _ = _[1];
              _.parentNode && _.parentNode.parentNode == _.parentNode
                ? __webpack_require__.remove()
                : _.remove();
            }
          }
          let _ = null;
          _ < 0 &&
          _ &&
          _.input.lastFocus > Date.now() - 200 &&
          Math.max(_.input.lastTouch, _.input.lastClick.time) <
            Date.now() - 300 &&
          _(_) &&
          (_ = _(_)) &&
          _._(_._.near(_.state.doc.resolve(0), 1))
            ? ((_.input.lastFocus = 0),
              _(_),
              this.currentSelection.set(_),
              _.scrollToSelection())
            : (_ > -1 || _) &&
              (_ > -1 &&
                (_.docView.markDirty(_, _),
                (function (_) {
                  if (_.has(_)) return;
                  if (
                    (_.set(_, null),
                    -1 !==
                      ["normal", "nowrap", "pre-line"].indexOf(
                        getComputedStyle(_.dom).whiteSpace,
                      ))
                  ) {
                    if (((_.requiresGeckoHackNode = _), _)) return;
                    console.warn(
                      "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
                    ),
                      (_ = !0);
                  }
                })(_)),
              this.handleDOMChange(_, _, _, _),
              _.docView && _.docView.dirty
                ? _.updateState(_.state)
                : this.currentSelection._(_) || _(_),
              this.currentSelection.set(_));
        }
        registerMutation(_, _) {
          if (_.indexOf(_.target) > -1) return null;
          let _ = this.view.docView.nearestDesc(_.target);
          if (
            "attributes" == _.type &&
            (_ == this.view.docView ||
              "contenteditable" == _.attributeName ||
              ("style" == _.attributeName &&
                !_.oldValue &&
                !_.target.getAttribute("style")))
          )
            return null;
          if (!_ || __webpack_require__.ignoreMutation(_)) return null;
          if ("childList" == _.type) {
            for (let _ = 0; _ < _.addedNodes.length; _++)
              _.push(_.addedNodes[_]);
            if (
              _.contentDOM &&
              _.contentDOM != _.dom &&
              !_.contentDOM.contains(_.target)
            )
              return {
                from: _.posBefore,
                _: _.posAfter,
              };
            let _ = _.previousSibling,
              _ = _.nextSibling;
            if (_ && _ <= 11 && _.addedNodes.length)
              for (let _ = 0; _ < _.addedNodes.length; _++) {
                let { previousSibling: _, nextSibling: _ } = _.addedNodes[_];
                (!_ || Array.prototype.indexOf.call(_.addedNodes, _) < 0) &&
                  (_ = _),
                  (!_ || Array.prototype.indexOf.call(_.addedNodes, _) < 0) &&
                    (_ = _);
              }
            let _ = _ && _.parentNode == _.target ? _(_) + 1 : 0,
              _ = __webpack_require__.localPosFromDOM(_.target, _, -1),
              _ =
                _ && _.parentNode == _.target
                  ? _(_)
                  : _.target.childNodes.length;
            return {
              from: _,
              _: __webpack_require__.localPosFromDOM(_.target, _, 1),
            };
          }
          return "attributes" == _.type
            ? {
                from: _.posAtStart - _.border,
                _: _.posAtEnd + _.border,
              }
            : {
                from: _.posAtStart,
                _: _.posAtEnd,
                typeOver: _.target.nodeValue == _.oldValue,
              };
        }
      }
      let _ = new WeakMap(),
        _ = !1;
      function _(_, _) {
        let _ = _.startContainer,
          _ = _.startOffset,
          _ = _.endContainer,
          _ = _.endOffset,
          _ = _.domAtPos(_.state.selection.anchor);
        return (
          _(_.node, _.offset, _, _) && ([_, _, _, _] = [_, _, _, _]),
          {
            anchorNode: _,
            anchorOffset: _,
            focusNode: _,
            focusOffset: _,
          }
        );
      }
      function _(_) {
        let _ = _.pmViewDesc;
        if (_) return _.parseRule();
        if ("BR" == _.nodeName && _.parentNode) {
          if (_ && /^(ul|ol)$/i.test(_.parentNode.nodeName)) {
            let _ = document.createElement("div");
            return (
              _.appendChild(document.createElement("li")),
              {
                skip: _,
              }
            );
          }
          if (
            _.parentNode.lastChild == _ ||
            (_ && /^(tr|table)$/i.test(_.parentNode.nodeName))
          )
            return {
              ignore: !0,
            };
        } else if ("IMG" == _.nodeName && _.getAttribute("mark-placeholder"))
          return {
            ignore: !0,
          };
        return null;
      }
      const _ =
        /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
      function _(_, _, _, _, _) {
        let _ =
          _.input.compositionPendingChanges ||
          (_.composing ? _.input.compositionID : 0);
        if (((_.input.compositionPendingChanges = 0), _ < 0)) {
          let _ =
              _.input.lastSelectionTime > Date.now() - 50
                ? _.input.lastSelectionOrigin
                : null,
            _ = _(_, _);
          if (_ && !_.state.selection._(_)) {
            if (
              _ &&
              _ &&
              13 === _.input.lastKeyCode &&
              Date.now() - 100 < _.input.lastKeyCodeTime &&
              _.someProp("handleKeyDown", (_) => _(_, _(13, "Enter")))
            )
              return;
            let _ = _.state._.setSelection(_);
            "pointer" == _
              ? _.setMeta("pointer", !0)
              : "key" == _ && _.scrollIntoView(),
              _ && _.setMeta("composition", _),
              _.dispatch(_);
          }
          return;
        }
        let _ = _.state.doc.resolve(_),
          _ = _.sharedDepth(_);
        (_ = _.before(_ + 1)), (_ = _.state.doc.resolve(_).after(_ + 1));
        let _,
          _,
          _ = _.state.selection,
          _ = (function (_, _, _) {
            let _,
              {
                node: _,
                fromOffset: _,
                toOffset: _,
                from: _,
                _: _,
              } = _.docView.parseRange(_, _),
              _ = _.domSelectionRange(),
              _ = _.anchorNode;
            if (
              (_ &&
                _.dom.contains(1 == _.nodeType ? _ : _.parentNode) &&
                ((_ = [
                  {
                    node: _,
                    offset: _.anchorOffset,
                  },
                ]),
                _(_) ||
                  _.push({
                    node: _.focusNode,
                    offset: _.focusOffset,
                  })),
              _ && 8 === _.input.lastKeyCode)
            )
              for (let _ = _; _ > _; _--) {
                let _ = _.childNodes[_ - 1],
                  _ = _.pmViewDesc;
                if ("BR" == _.nodeName && !_) {
                  _ = _;
                  break;
                }
                if (!_ || _.size) break;
              }
            let _ = _.state.doc,
              _ = _.someProp("domParser") || _._.fromSchema(_.state.schema),
              _ = _.resolve(_),
              _ = null,
              _ = _.parse(_, {
                topNode: _.parent,
                topMatch: _.parent.contentMatchAt(_.index()),
                topOpen: !0,
                from: _,
                _: _,
                preserveWhitespace: "pre" != _.parent.type.whitespace || "full",
                findPositions: _,
                ruleFromNode: _,
                context: _,
              });
            if (_ && null != _[0].pos) {
              let _ = _[0].pos,
                _ = _[1] && _[1].pos;
              null == _ && (_ = _),
                (_ = {
                  anchor: _ + _,
                  head: _ + _,
                });
            }
            return {
              doc: _,
              sel: _,
              from: _,
              _: _,
            };
          })(_, _, _),
          _ = _.state.doc,
          _ = _.slice(_.from, _._);
        8 === _.input.lastKeyCode && Date.now() - 100 < _.input.lastKeyCodeTime
          ? ((_ = _.state.selection._), (_ = "end"))
          : ((_ = _.state.selection.from), (_ = "start")),
          (_.input.lastKeyCode = null);
        let _ = (function (_, _, _, _, _) {
          let _ = _.findDiffStart(_, _);
          if (null == _) return null;
          let { _: _, _: _ } = _.findDiffEnd(_, _ + _.size, _ + _.size);
          if ("end" == _) {
            _ -= _ + Math.max(0, _ - Math.min(_, _)) - _;
          }
          if (_ < _ && _.size < _.size) {
            let _ = _ <= _ && _ >= _ ? _ - _ : 0;
            (_ -= _),
              _ &&
                _ < _.size &&
                _(_.textBetween(_ - 1, _ + 1)) &&
                (_ += _ ? 1 : -1),
              (_ = _ + (_ - _)),
              (_ = _);
          } else if (_ < _) {
            let _ = _ <= _ && _ >= _ ? _ - _ : 0;
            (_ -= _),
              _ &&
                _ < _.size &&
                _(_.textBetween(_ - 1, _ + 1)) &&
                (_ += _ ? 1 : -1),
              (_ = _ + (_ - _)),
              (_ = _);
          }
          return {
            start: _,
            endA: _,
            endB: _,
          };
        })(_.content, _.doc.content, _.from, _, _);
        if (
          ((_ && _.input.lastIOSEnter > Date.now() - 225) || _) &&
          _.some((_) => 1 == _.nodeType && !_.test(_.nodeName)) &&
          (!_ || _.endA >= _.endB) &&
          _.someProp("handleKeyDown", (_) => _(_, _(13, "Enter")))
        )
          return void (_.input.lastIOSEnter = 0);
        if (!_) {
          if (
            !(
              _ &&
              _ instanceof _._ &&
              !_.empty &&
              _.$head.sameParent(_.$anchor)
            ) ||
            _.composing ||
            (_.sel && _.sel.anchor != _.sel.head)
          ) {
            if (_.sel) {
              let _ = _(_, _.state.doc, _.sel);
              if (_ && !_._(_.state.selection)) {
                let _ = _.state._.setSelection(_);
                _ && __webpack_require__.setMeta("composition", _),
                  _.dispatch(_);
              }
            }
            return;
          }
          _ = {
            start: _.from,
            endA: _._,
            endB: _._,
          };
        }
        _.input.domChangeCount++,
          _.state.selection.from < _.state.selection._ &&
            _.start == _.endB &&
            _.state.selection instanceof _._ &&
            (_.start > _.state.selection.from &&
            _.start <= _.state.selection.from + 2 &&
            _.state.selection.from >= _.from
              ? (_.start = _.state.selection.from)
              : _.endA < _.state.selection._ &&
                _.endA >= _.state.selection._ - 2 &&
                _.state.selection._ <= _._ &&
                ((_.endB += _.state.selection._ - _.endA),
                (_.endA = _.state.selection._))),
          _ &&
            _ <= 11 &&
            _.endB == _.start + 1 &&
            _.endA == _.start &&
            _.start > _.from &&
            "  " ==
              _.doc.textBetween(_.start - _.from - 1, _.start - _.from + 1) &&
            (_.start--, _.endA--, _.endB--);
        let _,
          _ = _.doc.resolveNoCache(_.start - _.from),
          _ = _.doc.resolveNoCache(_.endB - _.from),
          _ = _.resolve(_.start),
          _ = _.sameParent(_) && _.parent.inlineContent && _.end() >= _.endA;
        if (
          ((_ &&
            _.input.lastIOSEnter > Date.now() - 225 &&
            (!_ || _.some((_) => "DIV" == _.nodeName || "P" == _.nodeName))) ||
            (!_ &&
              _.pos < _.doc.content.size &&
              !_.sameParent(_) &&
              (_ = _._.findFrom(_.doc.resolve(_.pos + 1), 1, !0)) &&
              _.head == _.pos)) &&
          _.someProp("handleKeyDown", (_) => _(_, _(13, "Enter")))
        )
          return void (_.input.lastIOSEnter = 0);
        if (
          _.state.selection.anchor > _.start &&
          (function (_, _, _, _, _) {
            if (_ - _ <= _.pos - _.pos || _(_, !0, !1) < _.pos) return !1;
            let _ = _.resolve(_);
            if (!_.parent.isTextblock) {
              let _ = _.nodeAfter;
              return null != _ && _ == _ + _.nodeSize;
            }
            if (_.parentOffset < _.parent.content.size || !_.parent.isTextblock)
              return !1;
            let _ = _.resolve(_(_, !0, !0));
            return (
              !(!_.parent.isTextblock || _.pos > _ || _(_, !0, !1) < _) &&
              _.parent.content.cut(_.parentOffset)._(_.parent.content)
            );
          })(_, _.start, _.endA, _, _) &&
          _.someProp("handleKeyDown", (_) => _(_, _(8, "Backspace")))
        )
          return void (_ && _ && _.domObserver.suppressSelectionUpdates());
        _ && _ && _.endB == _.start && (_.input.lastAndroidDelete = Date.now()),
          _ &&
            !_ &&
            _.start() != _.start() &&
            0 == _.parentOffset &&
            _.depth == _.depth &&
            _.sel &&
            _.sel.anchor == _.sel.head &&
            _.sel.head == _.endA &&
            ((_.endB -= 2),
            (_ = _.doc.resolveNoCache(_.endB - _.from)),
            setTimeout(() => {
              _.someProp("handleKeyDown", function (_) {
                return _(_, _(13, "Enter"));
              });
            }, 20));
        let _,
          _,
          _,
          _ = _.start,
          _ = _.endA;
        if (_)
          if (_.pos == _.pos)
            _ &&
              _ <= 11 &&
              0 == _.parentOffset &&
              (_.domObserver.suppressSelectionUpdates(),
              setTimeout(() => _(_), 20)),
              (_ = _.state._.delete(_, _)),
              (_ = _.resolve(_.start).marksAcross(_.resolve(_.endA)));
          else if (
            _.endA == _.endB &&
            (_ = (function (_, _) {
              let _,
                _,
                _,
                _ = _.firstChild.marks,
                _ = _.firstChild.marks,
                _ = _,
                _ = _;
              for (let _ = 0; _ < _.length; _++) _ = _[_].removeFromSet(_);
              for (let _ = 0; _ < _.length; _++) _ = _[_].removeFromSet(_);
              if (1 == _.length && 0 == _.length)
                (_ = _[0]),
                  (_ = "add"),
                  (_ = (_) => _.mark(_.addToSet(_.marks)));
              else {
                if (0 != _.length || 1 != _.length) return null;
                (_ = _[0]),
                  (_ = "remove"),
                  (_ = (_) => _.mark(_.removeFromSet(_.marks)));
              }
              let _ = [];
              for (let _ = 0; _ < _.childCount; _++) _.push(_(_.child(_)));
              if (_._.from(_)._(_))
                return {
                  mark: _,
                  type: _,
                };
            })(
              _.parent.content.cut(_.parentOffset, _.parentOffset),
              _.parent.content.cut(_.parentOffset, _.endA - _.start()),
            ))
          )
            (_ = _.state._),
              "add" == _.type
                ? _.addMark(_, _, _.mark)
                : _.removeMark(_, _, _.mark);
          else if (
            _.parent.child(_.index()).isText &&
            _.index() == _.index() - (_.textOffset ? 0 : 1)
          ) {
            let _ = _.parent.textBetween(_.parentOffset, _.parentOffset);
            if (
              _.someProp("handleTextInput", (_) =>
                __webpack_require__(_, _, _, _),
              )
            )
              return;
            _ = _.state._.insertText(_, _, _);
          }
        if (
          (_ ||
            (_ = _.state._.replace(
              _,
              _,
              _.doc.slice(_.start - _.from, _.endB - _.from),
            )),
          _.sel)
        ) {
          let _ = _(_, _.doc, _.sel);
          _ &&
            !(
              (_ &&
                _ &&
                _.composing &&
                _.empty &&
                (_.start != _.endB ||
                  _.input.lastAndroidDelete < Date.now() - 100) &&
                (_.head == _ || _.head == _.mapping.map(_) - 1)) ||
              (_ && _.empty && _.head == _)
            ) &&
            _.setSelection(_);
        }
        _ && _.ensureMarks(_),
          _ && _.setMeta("composition", _),
          _.dispatch(_.scrollIntoView());
      }
      function _(_, _, _) {
        return Math.max(_.anchor, _.head) > _.content.size
          ? null
          : _(_, _.resolve(_.anchor), _.resolve(_.head));
      }
      function _(_, _, _) {
        let _ = _.depth,
          _ = _ ? _.end() : _.pos;
        for (; _ > 0 && (_ || _.indexAfter(_) == _.node(_).childCount); )
          _--, _++, (_ = !1);
        if (_) {
          let _ = _.node(_).maybeChild(_.indexAfter(_));
          for (; _ && !_.isLeaf; ) (_ = _.firstChild), _++;
        }
        return _;
      }
      function _(_) {
        if (2 != _.length) return !1;
        let _ = _.charCodeAt(0),
          _ = _.charCodeAt(1);
        return _ >= 56320 && _ <= 57343 && _ >= 55296 && _ <= 56319;
      }
      class _ {
        constructor(_, _) {
          (this._root = null),
            (this.focused = !1),
            (this.trackWrites = null),
            (this.mounted = !1),
            (this.markCursor = null),
            (this.cursorWrapper = null),
            (this.lastSelectedViewDesc = void 0),
            (this.input = new _()),
            (this.prevDirectPlugins = []),
            (this.pluginViews = []),
            (this.requiresGeckoHackNode = !1),
            (this.dragging = null),
            (this._props = _),
            (this.state = _.state),
            (this.directPlugins = _.plugins || []),
            this.directPlugins.forEach(_),
            (this.dispatch = this.dispatch.bind(this)),
            (this.dom = (_ && _.mount) || document.createElement("div")),
            _ &&
              (_.appendChild
                ? _.appendChild(this.dom)
                : "function" == typeof _
                  ? _(this.dom)
                  : _.mount && (this.mounted = !0)),
            (this.editable = _(this)),
            _(this),
            (this.nodeViews = _(this)),
            (this.docView = _(
              this.state.doc,
              _(this),
              _(this),
              this.dom,
              this,
            )),
            (this.domObserver = new _(this, (_, _, _, _) =>
              _(this, _, _, _, _),
            )),
            this.domObserver.start(),
            (function (_) {
              for (let _ in _) {
                let _ = _[_];
                _.dom.addEventListener(
                  _,
                  (_.input.eventHandlers[_] = (_) => {
                    !_(_, _) ||
                      _(_, _) ||
                      (!_.editable && _.type in _) ||
                      __webpack_require__(_, _);
                  }),
                  _[_]
                    ? {
                        passive: !0,
                      }
                    : void 0,
                );
              }
              _ && _.dom.addEventListener("input", () => null), _(_);
            })(this),
            this.updatePluginViews();
        }
        get composing() {
          return this.input.composing;
        }
        get props() {
          if (this._props.state != this.state) {
            let _ = this._props;
            this._props = {};
            for (let _ in _) this._props[_] = _[_];
            this._props.state = this.state;
          }
          return this._props;
        }
        update(_) {
          _.handleDOMEvents != this._props.handleDOMEvents && _(this);
          let _ = this._props;
          (this._props = _),
            _.plugins &&
              (_.plugins.forEach(_), (this.directPlugins = _.plugins)),
            this.updateStateInner(_.state, _);
        }
        setProps(_) {
          let _ = {};
          for (let _ in this._props) _[_] = this._props[_];
          _.state = this.state;
          for (let _ in _) _[_] = _[_];
          this.update(_);
        }
        updateState(_) {
          this.updateStateInner(_, this._props);
        }
        updateStateInner(_, _) {
          var _;
          let _ = this.state,
            _ = !1,
            _ = !1;
          _.storedMarks && this.composing && (_(this), (_ = !0)),
            (this.state = _);
          let _ = _.plugins != _.plugins || this._props.plugins != _.plugins;
          if (
            _ ||
            this._props.plugins != _.plugins ||
            this._props.nodeViews != _.nodeViews
          ) {
            let _ = _(this);
            (function (_, _) {
              let _ = 0,
                _ = 0;
              for (let _ in _) {
                if (_[_] != _[_]) return !0;
                _++;
              }
              for (let _ in _) _++;
              return _ != _;
            })(_, this.nodeViews) && ((this.nodeViews = _), (_ = !0));
          }
          (_ || _.handleDOMEvents != this._props.handleDOMEvents) && _(this),
            (this.editable = _(this)),
            _(this);
          let _ = _(this),
            _ = _(this),
            _ =
              _.plugins == _.plugins || _.doc._(_.doc)
                ? _.scrollToSelection > _.scrollToSelection
                  ? "to selection"
                  : "preserve"
                : "reset",
            _ = _ || !this.docView.matchesNode(_.doc, _, _);
          (!_ && _.selection._(_.selection)) || (_ = !0);
          let _ =
            "preserve" == _ &&
            _ &&
            null == this.dom.style.overflowAnchor &&
            (function (_) {
              let _,
                _,
                _ = _.dom.getBoundingClientRect(),
                _ = Math.max(0, _.top);
              for (
                let _ = (_.left + _.right) / 2, _ = _ + 1;
                _ < Math.min(innerHeight, _.bottom);
                _ += 5
              ) {
                let _ = _.root.elementFromPoint(_, _);
                if (!_ || _ == _.dom || !_.dom.contains(_)) continue;
                let _ = _.getBoundingClientRect();
                if (_.top >= _ - 20) {
                  (_ = _), (_ = _.top);
                  break;
                }
              }
              return {
                refDOM: _,
                refTop: _,
                stack: _(_.dom),
              };
            })(this);
          if (_) {
            this.domObserver.stop();
            let _ =
              _ &&
              (_ || _) &&
              !this.composing &&
              !_.selection.empty &&
              !_.selection.empty &&
              (function (_, _) {
                let _ = Math.min(
                  _.$anchor.sharedDepth(_.head),
                  _.$anchor.sharedDepth(_.head),
                );
                return _.$anchor.start(_) != _.$anchor.start(_);
              })(_.selection, _.selection);
            if (_) {
              let _ = _
                ? (this.trackWrites = this.domSelectionRange().focusNode)
                : null;
              this.composing && (this.input.compositionNode = _(this)),
                (!_ && this.docView.update(_.doc, _, _, this)) ||
                  (this.docView.updateOuterDeco(_),
                  this.docView.destroy(),
                  (this.docView = _(_.doc, _, _, this.dom, this))),
                _ && !this.trackWrites && (_ = !0);
            }
            _ ||
            !(
              this.input.mouseDown &&
              this.domObserver.currentSelection._(this.domSelectionRange()) &&
              (function (_) {
                let _ = _.docView.domFromPos(_.state.selection.anchor, 0),
                  _ = _.domSelectionRange();
                return _(_.node, _.offset, _.anchorNode, _.anchorOffset);
              })(this)
            )
              ? _(this, _)
              : (_(this, _.selection), this.domObserver.setCurSelection()),
              this.domObserver.start();
          }
          this.updatePluginViews(_),
            (null === (_ = this.dragging) || void 0 === _ ? void 0 : _.node) &&
              !_.doc._(_.doc) &&
              this.updateDraggedNode(this.dragging, _),
            "reset" == _
              ? (this.dom.scrollTop = 0)
              : "to selection" == _
                ? this.scrollToSelection()
                : _ &&
                  (function ({ refDOM: _, refTop: _, stack: _ }) {
                    let _ = _ ? _.getBoundingClientRect().top : 0;
                    _(_, 0 == _ ? 0 : _ - _);
                  })(_);
        }
        scrollToSelection() {
          let _ = this.domSelectionRange().focusNode;
          if (this.someProp("handleScrollToSelection", (_) => _(this)));
          else if (this.state.selection instanceof _._) {
            let _ = this.docView.domAfterPos(this.state.selection.from);
            1 == _.nodeType && _(this, _.getBoundingClientRect(), _);
          } else _(this, this.coordsAtPos(this.state.selection.head, 1), _);
        }
        destroyPluginViews() {
          let _;
          for (; (_ = this.pluginViews.pop()); ) _.destroy && _.destroy();
        }
        updatePluginViews(_) {
          if (
            _ &&
            _.plugins == this.state.plugins &&
            this.directPlugins == this.prevDirectPlugins
          )
            for (let _ = 0; _ < this.pluginViews.length; _++) {
              let _ = this.pluginViews[_];
              _.update && __webpack_require__.update(this, _);
            }
          else {
            (this.prevDirectPlugins = this.directPlugins),
              this.destroyPluginViews();
            for (let _ = 0; _ < this.directPlugins.length; _++) {
              let _ = this.directPlugins[_];
              _.spec.view && this.pluginViews.push(_.spec.view(this));
            }
            for (let _ = 0; _ < this.state.plugins.length; _++) {
              let _ = this.state.plugins[_];
              _.spec.view && this.pluginViews.push(_.spec.view(this));
            }
          }
        }
        updateDraggedNode(_, _) {
          let _ = _.node,
            _ = -1;
          if (this.state.doc.nodeAt(_.from) == _.node) _ = _.from;
          else {
            let _ = _.from + (this.state.doc.content.size - _.doc.content.size);
            (_ > 0 && this.state.doc.nodeAt(_)) == _.node && (_ = _);
          }
          this.dragging = new _(
            _.slice,
            _.move,
            _ < 0 ? void 0 : _._.create(this.state.doc, _),
          );
        }
        someProp(_, _) {
          let _,
            _ = this._props && this._props[_];
          if (null != _ && (_ = _ ? _(_) : _)) return _;
          for (let _ = 0; _ < this.directPlugins.length; _++) {
            let _ = this.directPlugins[_].props[_];
            if (null != _ && (_ = _ ? _(_) : _)) return _;
          }
          let _ = this.state.plugins;
          if (_)
            for (let _ = 0; _ < _.length; _++) {
              let _ = _[_].props[_];
              if (null != _ && (_ = _ ? _(_) : _)) return _;
            }
        }
        hasFocus() {
          if (_) {
            let _ = this.root.activeElement;
            if (_ == this.dom) return !0;
            if (!_ || !this.dom.contains(_)) return !1;
            for (; _ && this.dom != _ && this.dom.contains(_); ) {
              if ("false" == _.contentEditable) return !1;
              _ = _.parentElement;
            }
            return !0;
          }
          return this.root.activeElement == this.dom;
        }
        focus() {
          this.domObserver.stop(),
            this.editable &&
              (function (_) {
                if (_.setActive) return _.setActive();
                if (_) return _.focus(_);
                let _ = _(_);
                _.focus(
                  null == _
                    ? {
                        get preventScroll() {
                          return (
                            (_ = {
                              preventScroll: !0,
                            }),
                            !0
                          );
                        },
                      }
                    : void 0,
                ),
                  _ || ((_ = !1), _(_, 0));
              })(this.dom),
            _(this),
            this.domObserver.start();
        }
        get root() {
          let _ = this._root;
          if (null == _)
            for (let _ = this.dom.parentNode; _; _ = _.parentNode)
              if (9 == _.nodeType || (11 == _.nodeType && _.host))
                return (
                  _.getSelection ||
                    (Object.getPrototypeOf(_).getSelection = () =>
                      _.ownerDocument.getSelection()),
                  (this._root = _)
                );
          return _ || document;
        }
        updateRoot() {
          this._root = null;
        }
        posAtCoords(_) {
          return _(this, _);
        }
        coordsAtPos(_, _ = 1) {
          return _(this, _, _);
        }
        domAtPos(_, _ = 0) {
          return this.docView.domFromPos(_, _);
        }
        nodeDOM(_) {
          let _ = this.docView.descAt(_);
          return _ ? _.nodeDOM : null;
        }
        posAtDOM(_, _, __webpack_require__ = -1) {
          let _ = this.docView.posFromDOM(_, _, __webpack_require__);
          if (null == _)
            throw new RangeError("DOM position not inside the editor");
          return _;
        }
        endOfTextblock(_, _) {
          return _(this, _ || this.state, _);
        }
        pasteHTML(_, _) {
          return _(this, "", _, !1, _ || new ClipboardEvent("paste"));
        }
        pasteText(_, _) {
          return _(this, _, null, !0, _ || new ClipboardEvent("paste"));
        }
        destroy() {
          this.docView &&
            (!(function (_) {
              _.domObserver.stop();
              for (let _ in _.input.eventHandlers)
                _.dom.removeEventListener(_, _.input.eventHandlers[_]);
              clearTimeout(_.input.composingTimeout),
                clearTimeout(_.input.lastIOSEnterFallbackTimeout);
            })(this),
            this.destroyPluginViews(),
            this.mounted
              ? (this.docView.update(this.state.doc, [], _(this), this),
                (this.dom.textContent = ""))
              : this.dom.parentNode &&
                this.dom.parentNode.removeChild(this.dom),
            this.docView.destroy(),
            (this.docView = null),
            (_ = null));
        }
        get isDestroyed() {
          return null == this.docView;
        }
        dispatchEvent(_) {
          return (function (_, _) {
            _(_, _) ||
              !_[_.type] ||
              (!_.editable && _.type in _) ||
              _[_.type](_, _);
          })(this, _);
        }
        dispatch(_) {
          let _ = this._props.dispatchTransaction;
          _ ? _.call(this, _) : this.updateState(this.state.apply(_));
        }
        domSelectionRange() {
          let _ = this.domSelection();
          return (
            (_ &&
              11 === this.root.nodeType &&
              (function (_) {
                let _ = _.activeElement;
                for (; _ && _.shadowRoot; ) _ = _.shadowRoot.activeElement;
                return _;
              })(this.dom.ownerDocument) == this.dom &&
              (function (_, _) {
                if (_.getComposedRanges) {
                  let _ = _.getComposedRanges(_.root)[0];
                  if (_) return _(_, _);
                }
                let _;
                function _(_) {
                  _.preventDefault(),
                    _.stopImmediatePropagation(),
                    (_ = _.getTargetRanges()[0]);
                }
                return (
                  _.dom.addEventListener("beforeinput", _, !0),
                  document.execCommand("indent"),
                  _.dom.removeEventListener("beforeinput", _, !0),
                  _ ? _(_, _) : null
                );
              })(this, _)) ||
            _
          );
        }
        domSelection() {
          return this.root.getSelection();
        }
      }
      function _(_) {
        let _ = Object.create(null);
        return (
          (_.class = "ProseMirror"),
          (_.contenteditable = String(_.editable)),
          _.someProp("attributes", (_) => {
            if (
              ("function" == typeof _ && (_ = __webpack_require__(_.state)), _)
            )
              for (let _ in _)
                "class" == _
                  ? (_.class += " " + _[_])
                  : "style" == _
                    ? (_.style = (_.style ? _.style + ";" : "") + _[_])
                    : _[_] ||
                      "contenteditable" == _ ||
                      "nodeName" == _ ||
                      (_[_] = String(_[_]));
          }),
          _.translate || (_.translate = "no"),
          [_.node(0, _.state.doc.content.size, _)]
        );
      }
      function _(_) {
        if (_.markCursor) {
          let _ = document.createElement("img");
          (_.className = "ProseMirror-separator"),
            _.setAttribute("mark-placeholder", "true"),
            _.setAttribute("alt", ""),
            (_.cursorWrapper = {
              dom: _,
              deco: _.widget(_.state.selection.head, _, {
                raw: !0,
                marks: _.markCursor,
              }),
            });
        } else _.cursorWrapper = null;
      }
      function _(_) {
        return !_.someProp("editable", (_) => !1 === _(_.state));
      }
      function _(_) {
        let _ = Object.create(null);
        function _(_) {
          for (let _ in _)
            Object.prototype.hasOwnProperty.call(_, _) || (_[_] = _[_]);
        }
        return _.someProp("nodeViews", _), _.someProp("markViews", _), _;
      }
      function _(_) {
        if (
          _.spec.state ||
          _.spec.filterTransaction ||
          _.spec.appendTransaction
        )
          throw new RangeError(
            "Plugins passed directly to the view must not have a state component",
          );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = 200,
        _ = function () {};
      (_.prototype.append = function (_) {
        return _.length
          ? ((_ = _.from(_)),
            (!this.length && _) ||
              (_.length < _ && this.leafAppend(_)) ||
              (this.length < _ && _.leafPrepend(this)) ||
              this.appendInner(_))
          : this;
      }),
        (_.prototype.prepend = function (_) {
          return _.length ? _.from(_).append(this) : this;
        }),
        (_.prototype.appendInner = function (_) {
          return new _(this, _);
        }),
        (_.prototype.slice = function (_, _) {
          return (
            void 0 === _ && (_ = 0),
            void 0 === _ && (_ = this.length),
            _ >= _
              ? _.empty
              : this.sliceInner(Math.max(0, _), Math.min(this.length, _))
          );
        }),
        (_.prototype.get = function (_) {
          if (!(_ < 0 || _ >= this.length)) return this.getInner(_);
        }),
        (_.prototype.forEach = function (_, _, _) {
          void 0 === _ && (_ = 0),
            void 0 === _ && (_ = this.length),
            _ <= _
              ? this.forEachInner(_, _, _, 0)
              : this.forEachInvertedInner(_, _, _, 0);
        }),
        (_.prototype.map = function (_, _, _) {
          void 0 === _ && (_ = 0), void 0 === _ && (_ = this.length);
          var _ = [];
          return (
            this.forEach(
              function (_, _) {
                return _.push(_(_, _));
              },
              _,
              _,
            ),
            _
          );
        }),
        (_.from = function (_) {
          return _ instanceof _ ? _ : _ && _.length ? new _(_) : _.empty;
        });
      var _ = (function (_) {
        function _(_) {
          _.call(this), (this.values = _);
        }
        _ && (_.__proto__ = _),
          (_.prototype = Object.create(_ && _.prototype)),
          (_.prototype.constructor = _);
        var _ = {
          length: {
            configurable: !0,
          },
          depth: {
            configurable: !0,
          },
        };
        return (
          (_.prototype.flatten = function () {
            return this.values;
          }),
          (_.prototype.sliceInner = function (_, _) {
            return 0 == _ && _ == this.length
              ? this
              : new _(this.values.slice(_, _));
          }),
          (_.prototype.getInner = function (_) {
            return this.values[_];
          }),
          (_.prototype.forEachInner = function (_, _, _, _) {
            for (var _ = _; _ < _; _++)
              if (!1 === _(this.values[_], _ + _)) return !1;
          }),
          (_.prototype.forEachInvertedInner = function (_, _, _, _) {
            for (var _ = _ - 1; _ >= _; _--)
              if (!1 === _(this.values[_], _ + _)) return !1;
          }),
          (_.prototype.leafAppend = function (_) {
            if (this.length + _.length <= _)
              return new _(this.values.concat(_.flatten()));
          }),
          (_.prototype.leafPrepend = function (_) {
            if (this.length + _.length <= _)
              return new _(_.flatten().concat(this.values));
          }),
          (_.length.get = function () {
            return this.values.length;
          }),
          (_.depth.get = function () {
            return 0;
          }),
          Object.defineProperties(_.prototype, _),
          _
        );
      })(_);
      _.empty = new _([]);
      var _ = (function (_) {
        function _(_, _) {
          _.call(this),
            (this.left = _),
            (this.right = _),
            (this.length = _.length + _.length),
            (this.depth = Math.max(_.depth, _.depth) + 1);
        }
        return (
          _ && (_.__proto__ = _),
          (_.prototype = Object.create(_ && _.prototype)),
          (_.prototype.constructor = _),
          (_.prototype.flatten = function () {
            return this.left.flatten().concat(this.right.flatten());
          }),
          (_.prototype.getInner = function (_) {
            return _ < this.left.length
              ? this.left.get(_)
              : this.right.get(_ - this.left.length);
          }),
          (_.prototype.forEachInner = function (_, _, _, _) {
            var _ = this.left.length;
            return (
              !(
                _ < _ && !1 === this.left.forEachInner(_, _, Math.min(_, _), _)
              ) &&
              !(
                _ > _ &&
                !1 ===
                  this.right.forEachInner(
                    _,
                    Math.max(_ - _, 0),
                    Math.min(this.length, _) - _,
                    _ + _,
                  )
              ) &&
              void 0
            );
          }),
          (_.prototype.forEachInvertedInner = function (_, _, _, _) {
            var _ = this.left.length;
            return (
              !(
                _ > _ &&
                !1 ===
                  this.right.forEachInvertedInner(
                    _,
                    _ - _,
                    Math.max(_, _) - _,
                    _ + _,
                  )
              ) &&
              !(
                _ < _ &&
                !1 === this.left.forEachInvertedInner(_, Math.min(_, _), _, _)
              ) &&
              void 0
            );
          }),
          (_.prototype.sliceInner = function (_, _) {
            if (0 == _ && _ == this.length) return this;
            var _ = this.left.length;
            return _ <= _
              ? this.left.slice(_, _)
              : _ >= _
                ? this.right.slice(_ - _, _ - _)
                : this.left.slice(_, _).append(this.right.slice(0, _ - _));
          }),
          (_.prototype.leafAppend = function (_) {
            var _ = this.right.leafAppend(_);
            if (_) return new _(this.left, _);
          }),
          (_.prototype.leafPrepend = function (_) {
            var _ = this.left.leafPrepend(_);
            if (_) return new _(_, this.right);
          }),
          (_.prototype.appendInner = function (_) {
            return this.left.depth >= Math.max(this.right.depth, _.depth) + 1
              ? new _(this.left, new _(this.right, _))
              : new _(this, _);
          }),
          _
        );
      })(_);
      const _ = _;
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor(_, _) {
          (this.items = _), (this.eventCount = _);
        }
        popEvent(_, _) {
          if (0 == this.eventCount) return null;
          let _,
            _,
            _ = this.items.length;
          for (; ; _--) {
            if (this.items.get(_ - 1).selection) {
              --_;
              break;
            }
          }
          _ &&
            ((_ = this.remapping(_, this.items.length)), (_ = _.maps.length));
          let _,
            _,
            _ = _._,
            _ = [],
            _ = [];
          return (
            this.items.forEach(
              (_, _) => {
                if (!_.step)
                  return (
                    _ || ((_ = this.remapping(_, _ + 1)), (_ = _.maps.length)),
                    _--,
                    void _.push(_)
                  );
                if (_) {
                  _.push(new _(_.map));
                  let _,
                    _ = _.step.map(__webpack_require__.slice(_));
                  _ &&
                    _.maybeStep(_).doc &&
                    ((_ = _.mapping.maps[_.mapping.maps.length - 1]),
                    _.push(new _(_, void 0, void 0, _.length + _.length))),
                    _--,
                    _ && __webpack_require__.appendMap(_, _);
                } else _.maybeStep(_.step);
                return _.selection
                  ? ((_ = _
                      ? _.selection.map(__webpack_require__.slice(_))
                      : _.selection),
                    (_ = new _(
                      this.items.slice(0, _).append(_.reverse().concat(_)),
                      this.eventCount - 1,
                    )),
                    !1)
                  : void 0;
              },
              this.items.length,
              0,
            ),
            {
              remaining: _,
              transform: _,
              selection: _,
            }
          );
        }
        addTransform(_, _, _, _) {
          let _ = [],
            _ = this.eventCount,
            _ = this.items,
            _ = !_ && _.length ? _.get(_.length - 1) : null;
          for (let _ = 0; _ < _.steps.length; _++) {
            let _,
              _ = _.steps[_].invert(_.docs[_]),
              _ = new _(_.mapping.maps[_], _, _);
            (_ = _ && _.merge(_)) &&
              ((_ = _), _ ? _.pop() : (_ = _.slice(0, _.length - 1))),
              _.push(_),
              _ && (_++, (_ = void 0)),
              _ || (_ = _);
          }
          let _ = _ - _.depth;
          return (
            _ > _ &&
              ((_ = (function (_, _) {
                let _;
                return (
                  _.forEach((_, _) => {
                    if (_.selection && 0 == _--) return (_ = _), !1;
                  }),
                  _.slice(_)
                );
              })(_, _)),
              (_ -= _)),
            new _(_.append(_), _)
          );
        }
        remapping(_, _) {
          let _ = new _._();
          return (
            this.items.forEach(
              (_, _) => {
                let _ =
                  null != _.mirrorOffset && _ - _.mirrorOffset >= _
                    ? _.maps.length - _.mirrorOffset
                    : void 0;
                __webpack_require__.appendMap(_.map, _);
              },
              _,
              _,
            ),
            _
          );
        }
        addMaps(_) {
          return 0 == this.eventCount
            ? this
            : new _(this.items.append(_.map((_) => new _(_))), this.eventCount);
        }
        rebased(_, _) {
          if (!this.eventCount) return this;
          let _ = [],
            _ = Math.max(0, this.items.length - _),
            _ = _.mapping,
            _ = _.steps.length,
            _ = this.eventCount;
          this.items.forEach((_) => {
            _.selection && _--;
          }, _);
          let _ = _;
          this.items.forEach((_) => {
            let _ = _.getMirror(--_);
            if (null == _) return;
            _ = Math.min(_, _);
            let _ = _.maps[_];
            if (_.step) {
              let _ = _.steps[_].invert(_.docs[_]),
                _ = _.selection && _.selection.map(_.slice(_ + 1, _));
              _ && _++, __webpack_require__.push(new _(_, _, _));
            } else __webpack_require__.push(new _(_));
          }, _);
          let _ = [];
          for (let _ = _; _ < _; _++) _.push(new _(_.maps[_]));
          let _ = this.items.slice(0, _).append(_).append(_),
            _ = new _(_, _);
          return (
            _.emptyItemCount() > 500 &&
              (_ = _.compress(this.items.length - _.length)),
            _
          );
        }
        emptyItemCount() {
          let _ = 0;
          return (
            this.items.forEach((_) => {
              _.step || _++;
            }),
            _
          );
        }
        compress(_ = this.items.length) {
          let _ = this.remapping(0, _),
            _ = _.maps.length,
            _ = [],
            _ = 0;
          return (
            this.items.forEach(
              (_, _) => {
                if (_ >= _) _.push(_), _.selection && _++;
                else if (_.step) {
                  let _ = _.step.map(_.slice(_)),
                    _ = _ && _.getMap();
                  if ((_--, _ && _.appendMap(_, _), _)) {
                    let _ = _.selection && _.selection.map(_.slice(_));
                    _ && _++;
                    let _,
                      _ = new _(_.invert(), _, _),
                      _ = _.length - 1;
                    (_ = _.length && _[_].merge(_)) ? (_[_] = _) : _.push(_);
                  }
                } else _.map && _--;
              },
              this.items.length,
              0,
            ),
            new _(_.from(_.reverse()), _)
          );
        }
      }
      _.empty = new _(_.empty, 0);
      class _ {
        constructor(_, _, _, _) {
          (this.map = _),
            (this.step = _),
            (this.selection = _),
            (this.mirrorOffset = _);
        }
        merge(_) {
          if (this.step && _.step && !_.selection) {
            let _ = _.step.merge(this.step);
            if (_) return new _(_.getMap().invert(), _, this.selection);
          }
        }
      }
      class _ {
        constructor(_, _, _, _, _) {
          (this.done = _),
            (this.undone = _),
            (this.prevRanges = _),
            (this.prevTime = _),
            (this.prevComposition = _);
        }
      }
      const _ = 20;
      function _(_) {
        let _ = [];
        return _.forEach((_, _, _, _) => _.push(_, _)), _;
      }
      function _(_, _) {
        if (!_) return null;
        let _ = [];
        for (let _ = 0; _ < _.length; _ += 2) {
          let _ = _.map(_[_], 1),
            _ = _.map(_[_ + 1], -1);
          _ <= _ && __webpack_require__.push(_, _);
        }
        return _;
      }
      let _ = !1,
        _ = null;
      function _(_) {
        let _ = _.plugins;
        if (_ != _) {
          (_ = !1), (_ = _);
          for (let _ = 0; _ < _.length; _++)
            if (_[_].spec.historyPreserveItems) {
              _ = !0;
              break;
            }
        }
        return _;
      }
      const _ = new _._("history"),
        _ = new _._("closeHistory");
      function _(_ = {}) {
        return (
          (_ = {
            depth: _.depth || 100,
            newGroupDelay: _.newGroupDelay || 500,
          }),
          new _._({
            key: _,
            state: {
              init: () => new _(_.empty, _.empty, null, 0, -1),
              apply: (_, _, _) =>
                (function (_, _, _, _) {
                  let _,
                    _ = __webpack_require__.getMeta(_);
                  if (_) return _.historyState;
                  __webpack_require__.getMeta(_) &&
                    (_ = new _(_.done, _.undone, null, 0, -1));
                  let _ = __webpack_require__.getMeta("appendedTransaction");
                  if (0 == _.steps.length) return _;
                  if (_ && _.getMeta(_))
                    return _.getMeta(_).redo
                      ? new _(
                          _.done.addTransform(_, void 0, _, _(_)),
                          _.undone,
                          _(_.mapping.maps[_.steps.length - 1]),
                          _.prevTime,
                          _.prevComposition,
                        )
                      : new _(
                          _.done,
                          _.undone.addTransform(_, void 0, _, _(_)),
                          null,
                          _.prevTime,
                          _.prevComposition,
                        );
                  if (
                    !1 === __webpack_require__.getMeta("addToHistory") ||
                    (_ && !1 === _.getMeta("addToHistory"))
                  )
                    return (_ = __webpack_require__.getMeta("rebased"))
                      ? new _(
                          _.done.rebased(_, _),
                          _.undone.rebased(_, _),
                          _(_.prevRanges, _.mapping),
                          _.prevTime,
                          _.prevComposition,
                        )
                      : new _(
                          _.done.addMaps(_.mapping.maps),
                          _.undone.addMaps(_.mapping.maps),
                          _(_.prevRanges, _.mapping),
                          _.prevTime,
                          _.prevComposition,
                        );
                  {
                    let _ = __webpack_require__.getMeta("composition"),
                      _ =
                        0 == _.prevTime ||
                        (!_ &&
                          _.prevComposition != _ &&
                          (_.prevTime < (_.time || 0) - _.newGroupDelay ||
                            !(function (_, _) {
                              if (!_) return !1;
                              if (!_.docChanged) return !0;
                              let _ = !1;
                              return (
                                _.mapping.maps[0].forEach((_, _) => {
                                  for (let _ = 0; _ < _.length; _ += 2)
                                    _ <= _[_ + 1] && _ >= _[_] && (_ = !0);
                                }),
                                _
                              );
                            })(_, _.prevRanges))),
                      _ = _
                        ? _(_.prevRanges, _.mapping)
                        : _(_.mapping.maps[_.steps.length - 1]);
                    return new _(
                      _.done.addTransform(
                        _,
                        _ ? _.selection.getBookmark() : void 0,
                        _,
                        _(_),
                      ),
                      _.empty,
                      _,
                      _.time,
                      null == _ ? _.prevComposition : _,
                    );
                  }
                })(_, _, _, _),
            },
            config: _,
            props: {
              handleDOMEvents: {
                beforeinput(_, _) {
                  let _ = _.inputType,
                    _ = "historyUndo" == _ ? _ : "historyRedo" == _ ? _ : null;
                  return !!_ && (_.preventDefault(), _(_.state, _.dispatch));
                },
              },
            },
          })
        );
      }
      function _(_, _) {
        return (_, _) => {
          let _ = _.getState(_);
          if (!_ || 0 == (_ ? _.undone : _.done).eventCount) return !1;
          if (_) {
            let _ = (function (_, _, _) {
              let _ = _(_),
                _ = _.get(_).spec.config,
                _ = (_ ? _.undone : _.done).popEvent(_, _);
              if (!_) return null;
              let _ = _.selection.resolve(_.transform.doc),
                _ = (_ ? _.done : _.undone).addTransform(
                  _.transform,
                  _.selection.getBookmark(),
                  _,
                  _,
                ),
                _ = new _(
                  _ ? _ : _.remaining,
                  _ ? _.remaining : _,
                  null,
                  0,
                  -1,
                );
              return _.transform.setSelection(_).setMeta(_, {
                redo: _,
                historyState: _,
              });
            })(_, _, _);
            _ && _(_ ? _.scrollIntoView() : _);
          }
          return !0;
        };
      }
      const _ = _(!1, !0),
        _ = _(!0, !0);
      _(!1, !1), _(!0, !1);
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor(_, _, __webpack_require__ = {}) {
          var _;
          (this.match = _),
            (this.match = _),
            (this.handler =
              "string" == typeof _
                ? ((_ = _),
                  function (_, _, _, _) {
                    let _ = _;
                    if (_[1]) {
                      let _ = _[0].lastIndexOf(_[1]);
                      _ += _[0].slice(_ + _[1].length);
                      let _ = (_ += _) - _;
                      _ > 0 && ((_ = _[0].slice(_ - _, _) + _), (_ = _));
                    }
                    return _._.insertText(_, _, _);
                  })
                : _),
            (this.undoable = !1 !== __webpack_require__.undoable),
            (this.inCode = __webpack_require__.inCode || !1);
        }
      }
      const _ = 500;
      function _({ rules: _ }) {
        let _ = new _._({
          state: {
            init: () => null,
            apply(_, _) {
              let _ = _.getMeta(this);
              return _ || (_.selectionSet || _.docChanged ? null : _);
            },
          },
          props: {
            handleTextInput: (_, _, _, _) => _(_, _, _, _, _, _),
            handleDOMEvents: {
              compositionend: (_) => {
                setTimeout(() => {
                  let { $cursor: _ } = _.state.selection;
                  _ && _(_, _.pos, _.pos, "", _, _);
                });
              },
            },
          },
          isInputRules: !0,
        });
        return _;
      }
      function _(_, _, _, _, _, _) {
        if (_.composing) return !1;
        let _ = _.state,
          _ = _.doc.resolve(_),
          _ =
            _.parent.textBetween(
              Math.max(0, _.parentOffset - _),
              _.parentOffset,
              null,
              "￼",
            ) + _;
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (_.parent.type.spec.code) {
            if (!_.inCode) continue;
          } else if ("only" === _.inCode) continue;
          let _ = _.match.exec(_),
            _ = _ && _.handler(_, _, _ - (_[0].length - _.length), _);
          if (_)
            return (
              _.undoable &&
                _.setMeta(_, {
                  transform: _,
                  from: _,
                  _: _,
                  text: _,
                }),
              _.dispatch(_),
              !0
            );
        }
        return !1;
      }
      const _ = (_, _) => {
        let _ = _.plugins;
        for (let _ = 0; _ < _.length; _++) {
          let _,
            _ = _[_];
          if (_.spec.isInputRules && (_ = _.getState(_))) {
            if (_) {
              let _ = _._,
                _ = _.transform;
              for (let _ = _.steps.length - 1; _ >= 0; _--)
                __webpack_require__.step(_.steps[_].invert(_.docs[_]));
              if (_.text) {
                let _ = _.doc.resolve(_.from).marks();
                __webpack_require__.replaceWith(
                  _.from,
                  _._,
                  _.schema.text(_.text, _),
                );
              } else __webpack_require__.delete(_.from, _._);
              _(_);
            }
            return !0;
          }
        }
        return !1;
      };
      new _(/--$/, "—"),
        new _(/\.\.\.$/, "…"),
        new _(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "“"),
        new _(/"$/, "”"),
        new _(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "‘"),
        new _(/'$/, "’");
      function _(_, _, __webpack_require__ = null, _) {
        return new _(_, (_, _, _, _) => {
          let _ =
              __webpack_require__ instanceof Function
                ? __webpack_require__(_)
                : __webpack_require__,
            _ = _._.delete(_, _),
            _ = _.doc.resolve(_).blockRange(),
            _ = _ && (0, _._)(_, _, _);
          if (!_) return null;
          _.wrap(_, _);
          let _ = _.doc.resolve(_ - 1).nodeBefore;
          return (
            _ &&
              _.type == _ &&
              (0, _._)(_.doc, _ - 1) &&
              (!_ || _(_, _)) &&
              _.join(_ - 1),
            _
          );
        });
      }
      function _(_, _, __webpack_require__ = null) {
        return new _(_, (_, _, _, _) => {
          let _ = _.doc.resolve(_),
            _ =
              __webpack_require__ instanceof Function
                ? __webpack_require__(_)
                : __webpack_require__;
          return _.node(-1).canReplaceWith(_.index(-1), _.indexAfter(-1), _)
            ? _._.delete(_, _).setBlockType(_, _, _, _)
            : null;
        });
      }
    },
  },
]);

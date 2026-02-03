"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5660],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          this.reactNodes = [];
        }
        AppendText(_, _ = !1) {
          _.length &&
            (_
              ? this.reactNodes.push(
                  _.createElement(
                    "span",
                    {
                      "data-copytext": "",
                      "data-copystyle": "merge-adjacent",
                      "bbcode-text": _,
                    },
                    _,
                  ),
                )
              : this.reactNodes.push(_));
        }
        AppendNode(_) {
          this.reactNodes.push(_);
        }
        GetElements() {
          return this.reactNodes;
        }
      }
      class _ {
        constructor(_) {
          (0, _._)(_, "decorated accumulator cannot be null"),
            (this.m_decoratedAccumulator = _);
        }
        AppendText(_, _ = !1) {
          this.m_decoratedAccumulator.AppendText(_, _);
        }
        AppendNode(_) {
          this.m_decoratedAccumulator.AppendNode(_);
        }
        GetElements() {
          return this.m_decoratedAccumulator.GetElements();
        }
      }
      class _ extends _ {
        constructor(_, _, _) {
          super(_),
            (this.m_nStartCursor = 1),
            (this.m_nStartCursor = void 0 !== _ ? _ : 1);
        }
        AppendText(_) {
          let _ = _;
          const _ = [];
          for (
            let _ = _.indexOf("\n", this.m_nStartCursor);
            -1 !== _;
            _ = _.indexOf("\n")
          )
            __webpack_require__.push(_.substr(0, _)),
              __webpack_require__.push(_.createElement("br")),
              (_ = _.substr(_ + 1));
          _.length && __webpack_require__.push(_),
            __webpack_require__.forEach((_) => {
              super.AppendNode(_);
            });
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      class _ {
        constructor(_, _) {
          _ instanceof Map
            ? (this.m_dictComponents = _)
            : (this.m_dictComponents = new Map(Object.entries(_))),
            (this.m_fnAccumulatorFactory = _);
        }
        Parse(_, _, __webpack_require__ = !0) {
          const _ = (function (_, _) {
            var _, _, _;
            const _ = [];
            let _ = {
                type: 0,
                text: "",
              },
              _ = !1,
              _ = !1,
              _ = !1;
            for (let _ = 0; _ < _.length; _++) {
              const _ = _[_];
              switch (_.type) {
                case 0:
                  "[" == _
                    ? ((_.type = 2), (_ = !0))
                    : ((_.type = 1), "\\" == _ && _ ? (_ = !_) : (_.text += _));
                  break;
                case 2:
                case 3:
                  if ("/" == _ && _) (_.type = 3), (_.text = ""), (_ = !1);
                  else if ("[" != _ || _)
                    if ("]" != _ || _)
                      "\\" == _ && _
                        ? ((_.text += _), (_ = !_), (_ = !1))
                        : ((_.text += _), (_ = !1), (_ = !1));
                    else {
                      const _ =
                          2 == _.type &&
                          "noparse" ==
                            (null === (_ = _.text) || void 0 === _
                              ? void 0
                              : __webpack_require__.toLocaleLowerCase()),
                        _ =
                          3 == _.type &&
                          "noparse" ==
                            (null === (_ = _.text) || void 0 === _
                              ? void 0
                              : _.toLocaleLowerCase());
                      _ || (_ && !_)
                        ? ((_ = _(_)), (_.text += _))
                        : _
                          ? (_ = !0)
                          : _ && (_ = !1),
                        (_ = _(_, _)),
                        (_ = !1);
                    }
                  else (_ = _(_, _(_), 2)), (_ = !0);
                  break;
                case 1:
                  "[" != _ || _
                    ? "\\" == _ && _
                      ? (_ && (_.text += _), (_ = !_))
                      : ((_.text += _), (_ = !1))
                    : ((_ = _(_, _, 2)), (_ = !0));
              }
            }
            0 != _.type &&
              (2 == _.type || 3 == _.type
                ? _.push(_(_))
                : _.push({
                    type: _.type,
                    text: null !== (_ = _.text) && void 0 !== _ ? _ : "",
                  }));
            return _;
          })(_ || "", __webpack_require__);
          return this.Parse_BuildElements(_, _);
        }
        Parse_BuildElements(_, _) {
          let _ = this.m_fnAccumulatorFactory(void 0);
          const _ = [],
            _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
            _ = this.m_dictComponents,
            _ = (_) => {
              var _;
              return !(
                !_.tag ||
                !(null === (_ = _.get(_.tag)) || void 0 === _
                  ? void 0
                  : _.autocloses)
              );
            };
          let _ = !1,
            _ = !0;
          const _ = (_, _) => {
            if (_ && _.node.tag === _.text && _.get(_.node.tag)) {
              const _ = _.get(_.node.tag),
                _ = {
                  tagname: _.node.tag,
                  args: _.node.args,
                  rawargs: _.node.rawargs,
                },
                _ = _(_.Constructor, _, ...__webpack_require__.GetElements());
              (_ = _.accumulator),
                Array.isArray(_)
                  ? _.forEach((_) => __webpack_require__.AppendNode(_))
                  : __webpack_require__.AppendNode(_),
                (_ = !!_.skipFollowingNewline),
                (_ = _.bWrapTextForCopying);
            } else if (_) {
              const _ = _.accumulator;
              _.AppendText("[" + _.node.text + "]", !1),
                __webpack_require__
                  .GetElements()
                  .forEach((_) => _.AppendNode(_)),
                _.AppendText("[/" + _.text + "]", !1),
                (_ = _),
                (_ = _.bWrapTextForCopying);
            }
          };
          for (
            _.forEach((_, _) => {
              var _, _;
              if (1 == _.type) {
                const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                __webpack_require__.AppendText(_, _), (_ = !1);
              } else if (2 == _.type) {
                const _ = _.get(_.tag);
                if (_) {
                  const _ = _();
                  if (void 0 !== _) {
                    const _ = _.get(_.node.tag);
                    _ &&
                      _.autocloses &&
                      _.tag === _.node.tag &&
                      _(_.pop(), _.node);
                  }
                  _.push({
                    accumulator: _,
                    node: _,
                    bWrapTextForCopying: _,
                  }),
                    (_ = this.m_fnAccumulatorFactory(_)),
                    (_ = !!_.skipInternalNewline),
                    (_ =
                      null !== (_ = _.allowWrapTextForCopying) &&
                      void 0 !== _ &&
                      _);
                } else
                  __webpack_require__.AppendText(
                    "[" + _.text + "]",
                    0 == _.length,
                  );
              } else if (3 == _.type) {
                for (; _() && _().node.tag !== _.text && _(_().node); ) {
                  const _ = _.pop();
                  _(_, _.node);
                }
                if (
                  (null === (_ = _()) || void 0 === _ ? void 0 : _.node.tag) ==
                  _.text
                ) {
                  const _ = _.pop();
                  _(_, _);
                } else
                  __webpack_require__.AppendText(
                    "[/" + _.text + "]",
                    0 == _.length,
                  );
              }
            });
            _.length > 0;
          ) {
            const _ = _.pop();
            _(_, _.node);
          }
          return __webpack_require__.GetElements();
        }
      }
      function _(_, _) {
        let _ = "[" + _;
        (null == _ ? void 0 : _[""]) && (_ += `=${_("" + _[""])}`);
        for (const _ in _)
          "" !== _ &&
            (_ += ` ${((_ = _), _.replace(/(\\| |\])/g, "\\$1"))}=${_("" + _[_])}`);
        var _;
        return (_ += "]"), _;
      }
      function _(_) {
        return `"${_.replace(/(\\|"|\])/g, "\\$1")}"`;
      }
      function _(_) {
        return `[/${_}]`;
      }
      function _(_) {
        return _.replace(/(\\|\[)/g, "\\$1");
      }
      function _(_, _, __webpack_require__ = 0) {
        const { type: _, text: _ = "" } = _;
        if (2 == _) {
          let _ = _.indexOf("=");
          const _ = _.indexOf(" ");
          let _, _;
          -1 != _ && (-1 == _ || _ < _) && (_ = _);
          let _ = "";
          _ > 0
            ? ((_ = _.substr(0, _).toLocaleLowerCase()),
              (_ = _.substr(_)),
              (_ = (function (_) {
                if (!_ || _.length < 1) return {};
                const _ = {};
                let _ = "",
                  _ = "",
                  _ = 0,
                  _ = 0;
                "=" == _[0] && (_ = 2);
                let _ = !1;
                for (_++; _ < _.length; _++) {
                  const _ = _[_];
                  let _ = !0,
                    _ = !1;
                  switch (_) {
                    case 0:
                      if ("=" == _) return {};
                      if (" " == _) continue;
                      _ = 1;
                      break;
                    case 1:
                      ("=" != _ && " " != _) ||
                        _ ||
                        (" " == _ ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
                      break;
                    case 2:
                      " " == _
                        ? ((_ = 0), (_ = !1), (_ = !0))
                        : '"' == _
                          ? ((_ = 4), (_ = !1))
                          : (_ = 3);
                      break;
                    case 3:
                    case 4:
                      ((" " == _ && 4 != _ && !_) ||
                        ('"' == _ && 4 == _ && !_)) &&
                        ((_ = 0), (_ = !1), (_ = !0));
                  }
                  if (_)
                    if ("\\" != _ || _)
                      if (((_ = !1), 1 == _)) _ += _;
                      else {
                        if (3 != _ && 4 != _)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + _,
                          );
                        _ += _;
                      }
                    else _ = !0;
                  _ && ((_[_] = _), (_ = ""), (_ = ""));
                }
                0 != _ && (_[_] = _);
                return _;
              })(_)))
            : ((_ = {}), (_ = _.toLocaleLowerCase())),
            _.push({
              type: _,
              text: _,
              tag: _,
              args: _,
              rawargs: _,
            });
        } else
          0 != _ &&
            _.push({
              type: _,
              text: _,
            });
        return {
          type: _,
          text: "",
        };
      }
      function _(_) {
        var _;
        let _ = "";
        return (
          3 == _.type ? (_ = "[/") : 2 == _.type && (_ = "["),
          {
            type: 1,
            text: _ + (null !== (_ = _.text) && void 0 !== _ ? _ : ""),
          }
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_, _, _) {
          super(_, null != _ ? _ : () => new _._()),
            (this.m_renderingLanguage = "string" == typeof _ ? (0, _._)(_) : _);
        }
        UpdateOverrideLanguage(_) {
          this.m_renderingLanguage = _;
        }
        ParseBBCode(_, _, __webpack_require__ = !0) {
          let _ = 0;
          const _ = this.Parse(
            _,
            (_, _, ..._) =>
              _.createElement(
                _,
                {
                  ..._,
                  context: _,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + _++,
                },
                ..._,
              ),
            __webpack_require__,
          );
          return _.length > 1
            ? _.createElement(_.Fragment, null, ..._)
            : 1 == _.length
              ? _[0]
              : null;
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return (0, _._)(
          (_) => {
            if (!_) return;
            const _ = _(_.ownerDocument.defaultView, (_) => {
              _(_[0]);
            });
            return _.observe(_), () => _.unobserve(_);
          },
          [_, _],
        );
      }
      function _(_) {
        return _(
          _,
          _.useCallback(
            (_, _) =>
              _.ResizeObserver
                ? new _.ResizeObserver(_)
                : ((0, _._)(!1, "ResizeObserver is not available"),
                  {
                    observe: () => {},
                    unobserve: () => {},
                    disconnect: () => {},
                  }),
            [],
          ),
        );
      }
      function _(_, _) {
        const _ = _.useRef(void 0);
        return (function (_, _) {
          return _(
            _,
            _.useCallback((_, _) => new _.IntersectionObserver(_, _), [_]),
          );
        })((_) => {
          var _, _, _;
          !_.current &&
            _.isIntersecting &&
            (null === (_ = _.onEnter) || void 0 === _ || _.call(_, _)),
            _.current &&
              !_.isIntersecting &&
              (null === (_ = _.onLeave) || void 0 === _ || _.call(_, _)),
            null === (_ = _.onIntersectionChange) ||
              void 0 === _ ||
              _.call(_, _),
            (_.current = _.isIntersecting);
        }, _);
      }
    },
  },
]);

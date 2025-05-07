"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9236],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ =
          Object.assign ||
          function (_) {
            for (var _ = 1; _ < arguments.length; _++) {
              var _ = arguments[_];
              for (var _ in _)
                Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
            }
            return _;
          },
        _ = (function () {
          function _(_, _) {
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(_, _.key, _);
            }
          }
          return function (_, _, _) {
            return _ && _(_.prototype, _), _ && _(_, _), _;
          };
        })(),
        _ = __webpack_require__("chunkid"),
        _ = _(_),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _ && _.__esModule
          ? _
          : {
              default: _,
            };
      }
      var _ = function () {
          return !0;
        },
        _ = (function (_) {
          function _(_) {
            var _ = _.alwaysRenderSuggestions;
            !(function (_, _) {
              if (!(_ instanceof _))
                throw new TypeError("Cannot call a class as a function");
            })(this, _);
            var _ = (function (_, _) {
              if (!_)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !_ || ("object" != typeof _ && "function" != typeof _)
                ? _
                : _;
            })(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this));
            return (
              _.call(_),
              (_.state = {
                isFocused: !1,
                isCollapsed: !_,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
              }),
              (_.justPressedUpDown = !1),
              (_.justMouseEntered = !1),
              (_.pressedSuggestion = null),
              _
            );
          }
          return (
            (function (_, _) {
              if ("function" != typeof _ && null !== _)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof _,
                );
              (_.prototype = Object.create(_ && _.prototype, {
                constructor: {
                  value: _,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                _ &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(_, _)
                    : (_.__proto__ = _));
            })(_, _),
            _(_, [
              {
                key: "componentDidMount",
                value: function () {
                  document.addEventListener(
                    "mousedown",
                    this.onDocumentMouseDown,
                  ),
                    document.addEventListener(
                      "mouseup",
                      this.onDocumentMouseUp,
                    ),
                    (this.input = this.autowhatever.input),
                    (this.suggestionsContainer =
                      this.autowhatever.itemsContainer);
                },
              },
              {
                key: "componentWillReceiveProps",
                value: function (_) {
                  (0, _.default)(_.suggestions, this.props.suggestions)
                    ? _.highlightFirstSuggestion &&
                      _.suggestions.length > 0 &&
                      !1 === this.justPressedUpDown &&
                      !1 === this.justMouseEntered &&
                      this.highlightFirstSuggestion()
                    : this.willRenderSuggestions(_)
                      ? this.state.isCollapsed &&
                        !this.justSelectedSuggestion &&
                        this.revealSuggestions()
                      : this.resetHighlightedSuggestion();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (_, _) {
                  var _ = this.props,
                    _ = _.suggestions,
                    _ = _.onSuggestionHighlighted,
                    _ = _.highlightFirstSuggestion;
                  if (!(0, _.default)(_, _.suggestions) && _.length > 0 && _)
                    this.highlightFirstSuggestion();
                  else if (_) {
                    var _ = this.getHighlightedSuggestion();
                    _ != _.highlightedSuggestion &&
                      _({
                        suggestion: _,
                      });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.removeEventListener(
                    "mousedown",
                    this.onDocumentMouseDown,
                  ),
                    document.removeEventListener(
                      "mouseup",
                      this.onDocumentMouseUp,
                    );
                },
              },
              {
                key: "updateHighlightedSuggestion",
                value: function (_, _, _) {
                  var _ = this;
                  this.setState(function (_) {
                    var _ = _.valueBeforeUpDown;
                    return (
                      null === _
                        ? (_ = null)
                        : null === _ && void 0 !== _ && (_ = _),
                      {
                        highlightedSectionIndex: _,
                        highlightedSuggestionIndex: _,
                        highlightedSuggestion:
                          null === _ ? null : _.getSuggestion(_, _),
                        valueBeforeUpDown: _,
                      }
                    );
                  });
                },
              },
              {
                key: "resetHighlightedSuggestion",
                value: function () {
                  var _ =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  this.setState(function (_) {
                    var _ = _.valueBeforeUpDown;
                    return {
                      highlightedSectionIndex: null,
                      highlightedSuggestionIndex: null,
                      highlightedSuggestion: null,
                      valueBeforeUpDown: _ ? null : _,
                    };
                  });
                },
              },
              {
                key: "revealSuggestions",
                value: function () {
                  this.setState({
                    isCollapsed: !1,
                  });
                },
              },
              {
                key: "closeSuggestions",
                value: function () {
                  this.setState({
                    highlightedSectionIndex: null,
                    highlightedSuggestionIndex: null,
                    highlightedSuggestion: null,
                    valueBeforeUpDown: null,
                    isCollapsed: !0,
                  });
                },
              },
              {
                key: "getSuggestion",
                value: function (_, _) {
                  var _ = this.props,
                    _ = _.suggestions,
                    _ = _.multiSection,
                    _ = _.getSectionSuggestions;
                  return _ ? _(_[_])[_] : _[_];
                },
              },
              {
                key: "getHighlightedSuggestion",
                value: function () {
                  var _ = this.state,
                    _ = _.highlightedSectionIndex,
                    _ = _.highlightedSuggestionIndex;
                  return null === _ ? null : this.getSuggestion(_, _);
                },
              },
              {
                key: "getSuggestionValueByIndex",
                value: function (_, _) {
                  return (0, this.props.getSuggestionValue)(
                    this.getSuggestion(_, _),
                  );
                },
              },
              {
                key: "getSuggestionIndices",
                value: function (_) {
                  var _ = _.getAttribute("data-section-index"),
                    _ = _.getAttribute("data-suggestion-index");
                  return {
                    sectionIndex: "string" == typeof _ ? parseInt(_, 10) : null,
                    suggestionIndex: parseInt(_, 10),
                  };
                },
              },
              {
                key: "findSuggestionElement",
                value: function (_) {
                  var _ = _;
                  do {
                    if (null !== _.getAttribute("data-suggestion-index"))
                      return _;
                    _ = _.parentNode;
                  } while (null !== _);
                  throw (
                    (console.error("Clicked element:", _),
                    new Error("Couldn't find suggestion element"))
                  );
                },
              },
              {
                key: "maybeCallOnChange",
                value: function (_, _, _) {
                  var _ = this.props.inputProps,
                    _ = _.value,
                    _ = _.onChange;
                  _ !== _ &&
                    _(_, {
                      newValue: _,
                      method: _,
                    });
                },
              },
              {
                key: "willRenderSuggestions",
                value: function (_) {
                  var _ = _.suggestions,
                    _ = _.inputProps,
                    _ = _.shouldRenderSuggestions,
                    _ = _.value;
                  return _.length > 0 && _(_);
                },
              },
              {
                key: "getQuery",
                value: function () {
                  var _ = this.props.inputProps.value,
                    _ = this.state.valueBeforeUpDown;
                  return (null === _ ? _ : _).trim();
                },
              },
              {
                key: "render",
                value: function () {
                  var _ = this,
                    _ = this.props,
                    _ = _.suggestions,
                    _ = _.renderInputComponent,
                    _ = _.onSuggestionsFetchRequested,
                    _ = _.renderSuggestion,
                    _ = _.inputProps,
                    _ = _.multiSection,
                    _ = _.renderSectionTitle,
                    _ = _._,
                    _ = _.getSectionSuggestions,
                    _ = _.theme,
                    _ = _.getSuggestionValue,
                    _ = _.alwaysRenderSuggestions,
                    _ = _.highlightFirstSuggestion,
                    _ = this.state,
                    _ = _.isFocused,
                    _ = _.isCollapsed,
                    _ = _.highlightedSectionIndex,
                    _ = _.highlightedSuggestionIndex,
                    _ = _.valueBeforeUpDown,
                    _ = _ ? _ : this.props.shouldRenderSuggestions,
                    _ = _.value,
                    _ = _.onFocus,
                    _ = _.onKeyDown,
                    _ = this.willRenderSuggestions(this.props),
                    _ = _ || (_ && !_ && _),
                    _ = _ ? _ : [],
                    _ = _({}, _, {
                      onFocus: function (_) {
                        if (
                          !_.justSelectedSuggestion &&
                          !_.justClickedOnSuggestionsContainer
                        ) {
                          var _ = _(_);
                          _.setState({
                            isFocused: !0,
                            isCollapsed: !_,
                          }),
                            _ && _(_),
                            _ &&
                              _({
                                value: _,
                                reason: "input-focused",
                              });
                        }
                      },
                      onBlur: function (_) {
                        _.justClickedOnSuggestionsContainer
                          ? _.input.focus()
                          : ((_.blurEvent = _),
                            _.justSelectedSuggestion ||
                              (_.onBlur(), _.onSuggestionsClearRequested()));
                      },
                      onChange: function (_) {
                        var _ = _.target.value,
                          _ = _(_);
                        _.maybeCallOnChange(_, _, "type"),
                          _.suggestionsContainer &&
                            (_.suggestionsContainer.scrollTop = 0),
                          _.setState(
                            _(
                              {},
                              _
                                ? {}
                                : {
                                    highlightedSectionIndex: null,
                                    highlightedSuggestionIndex: null,
                                    highlightedSuggestion: null,
                                  },
                              {
                                valueBeforeUpDown: null,
                                isCollapsed: !_,
                              },
                            ),
                          ),
                          _
                            ? _({
                                value: _,
                                reason: "input-changed",
                              })
                            : _.onSuggestionsClearRequested();
                      },
                      onKeyDown: function (_, _) {
                        var _ = _.keyCode;
                        switch (_) {
                          case 40:
                          case 38:
                            if (_)
                              _(_) &&
                                (_({
                                  value: _,
                                  reason: "suggestions-revealed",
                                }),
                                _.revealSuggestions());
                            else if (_.length > 0) {
                              var _ = _.newHighlightedSectionIndex,
                                _ = _.newHighlightedItemIndex,
                                _ = void 0;
                              (_ =
                                null === _
                                  ? null === _
                                    ? _
                                    : _
                                  : _.getSuggestionValueByIndex(_, _)),
                                _.updateHighlightedSuggestion(_, _, _),
                                _.maybeCallOnChange(
                                  _,
                                  _,
                                  40 === _ ? "down" : "up",
                                );
                            }
                            _.preventDefault(),
                              (_.justPressedUpDown = !0),
                              setTimeout(function () {
                                _.justPressedUpDown = !1;
                              });
                            break;
                          case 13:
                            if (229 === _.keyCode) break;
                            var _ = _.getHighlightedSuggestion();
                            if ((_ && !_ && _.closeSuggestions(), null != _)) {
                              var _ = _(_);
                              _.maybeCallOnChange(_, _, "enter"),
                                _.onSuggestionSelected(_, {
                                  suggestion: _,
                                  suggestionValue: _,
                                  suggestionIndex: _,
                                  sectionIndex: _,
                                  method: "enter",
                                }),
                                (_.justSelectedSuggestion = !0),
                                setTimeout(function () {
                                  _.justSelectedSuggestion = !1;
                                });
                            }
                            break;
                          case 27:
                            _ && _.preventDefault();
                            var _ = _ && !_;
                            if (null === _) {
                              if (!_) {
                                _.maybeCallOnChange(_, "", "escape"),
                                  _("")
                                    ? _({
                                        value: "",
                                        reason: "escape-pressed",
                                      })
                                    : _.onSuggestionsClearRequested();
                              }
                            } else _.maybeCallOnChange(_, _, "escape");
                            _
                              ? (_.onSuggestionsClearRequested(),
                                _.closeSuggestions())
                              : _.resetHighlightedSuggestion();
                        }
                        _ && _(_);
                      },
                    }),
                    _ = {
                      query: this.getQuery(),
                    };
                  return _.default.createElement(_.default, {
                    multiSection: _,
                    items: _,
                    renderInputComponent: _,
                    renderItemsContainer: this.renderSuggestionsContainer,
                    renderItem: _,
                    renderItemData: _,
                    renderSectionTitle: _,
                    getSectionItems: _,
                    highlightedSectionIndex: _,
                    highlightedItemIndex: _,
                    inputProps: _,
                    itemProps: this.itemProps,
                    theme: (0, _.mapToAutowhateverTheme)(_),
                    _: _,
                    ref: this.storeAutowhateverRef,
                  });
                },
              },
            ]),
            _
          );
        })(_.Component);
      (_.propTypes = {
        suggestions: _.default.array.isRequired,
        onSuggestionsFetchRequested: function (_, _) {
          var _ = _[_];
          if ("function" != typeof _)
            throw new Error(
              "'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp",
            );
        },
        onSuggestionsClearRequested: function (_, _) {
          var _ = _[_];
          if (!1 === _.alwaysRenderSuggestions && "function" != typeof _)
            throw new Error(
              "'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp",
            );
        },
        onSuggestionSelected: _.default.func,
        onSuggestionHighlighted: _.default.func,
        renderInputComponent: _.default.func,
        renderSuggestionsContainer: _.default.func,
        getSuggestionValue: _.default.func.isRequired,
        renderSuggestion: _.default.func.isRequired,
        inputProps: function (_, _) {
          var _ = _[_];
          if (!__webpack_require__.hasOwnProperty("value"))
            throw new Error("'inputProps' must have 'value'.");
          if (!__webpack_require__.hasOwnProperty("onChange"))
            throw new Error("'inputProps' must have 'onChange'.");
        },
        shouldRenderSuggestions: _.default.func,
        alwaysRenderSuggestions: _.default.bool,
        multiSection: _.default.bool,
        renderSectionTitle: function (_, _) {
          var _ = _[_];
          if (!0 === _.multiSection && "function" != typeof _)
            throw new Error(
              "'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp",
            );
        },
        getSectionSuggestions: function (_, _) {
          var _ = _[_];
          if (!0 === _.multiSection && "function" != typeof _)
            throw new Error(
              "'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp",
            );
        },
        focusInputOnSuggestionClick: _.default.bool,
        highlightFirstSuggestion: _.default.bool,
        theme: _.default.object,
        _: _.default.string,
      }),
        (_.defaultProps = {
          renderSuggestionsContainer: function (_) {
            var _ = _.containerProps,
              _ = _.children;
            return _.default.createElement("div", _, _);
          },
          shouldRenderSuggestions: function (_) {
            return _.trim().length > 0;
          },
          alwaysRenderSuggestions: !1,
          multiSection: !1,
          focusInputOnSuggestionClick: !0,
          highlightFirstSuggestion: !1,
          theme: _.defaultTheme,
          _: "1",
        });
      var _ = function () {
        var _ = this;
        (this.onDocumentMouseDown = function (_) {
          _.justClickedOnSuggestionsContainer = !1;
          for (
            var _ = (_.detail && _.detail.target) || _.target;
            null !== _ && _ !== document;
          ) {
            if (
              null !== __webpack_require__.getAttribute("data-suggestion-index")
            )
              return;
            if (_ === _.suggestionsContainer)
              return void (_.justClickedOnSuggestionsContainer = !0);
            _ = _.parentNode;
          }
        }),
          (this.storeAutowhateverRef = function (_) {
            null !== _ && (_.autowhatever = _);
          }),
          (this.onSuggestionMouseEnter = function (_, _) {
            var _ = _.sectionIndex,
              _ = _.itemIndex;
            _.updateHighlightedSuggestion(_, _),
              _.target === _.pressedSuggestion &&
                (_.justSelectedSuggestion = !0),
              (_.justMouseEntered = !0),
              setTimeout(function () {
                _.justMouseEntered = !1;
              });
          }),
          (this.highlightFirstSuggestion = function () {
            _.updateHighlightedSuggestion(_.props.multiSection ? 0 : null, 0);
          }),
          (this.onDocumentMouseUp = function () {
            _.pressedSuggestion && !_.justSelectedSuggestion && _.input.focus(),
              (_.pressedSuggestion = null);
          }),
          (this.onSuggestionMouseDown = function (_) {
            _.justSelectedSuggestion ||
              ((_.justSelectedSuggestion = !0),
              (_.pressedSuggestion = _.target));
          }),
          (this.onSuggestionsClearRequested = function () {
            var _ = _.props.onSuggestionsClearRequested;
            _ && _();
          }),
          (this.onSuggestionSelected = function (_, _) {
            var _ = _.props,
              _ = _.alwaysRenderSuggestions,
              _ = _.onSuggestionSelected,
              _ = _.onSuggestionsFetchRequested;
            _ && _(_, _),
              _
                ? _({
                    value: _.suggestionValue,
                    reason: "suggestion-selected",
                  })
                : _.onSuggestionsClearRequested(),
              _.resetHighlightedSuggestion();
          }),
          (this.onSuggestionClick = function (_) {
            var _ = _.props,
              _ = _.alwaysRenderSuggestions,
              _ = _.focusInputOnSuggestionClick,
              _ = _.getSuggestionIndices(_.findSuggestionElement(_.target)),
              _ = _.sectionIndex,
              _ = _.suggestionIndex,
              _ = _.getSuggestion(_, _),
              _ = _.props.getSuggestionValue(_);
            _.maybeCallOnChange(_, _, "click"),
              _.onSuggestionSelected(_, {
                suggestion: _,
                suggestionValue: _,
                suggestionIndex: _,
                sectionIndex: _,
                method: "click",
              }),
              _ || _.closeSuggestions(),
              !0 === _ ? _.input.focus() : _.onBlur(),
              setTimeout(function () {
                _.justSelectedSuggestion = !1;
              });
          }),
          (this.onBlur = function () {
            var _ = _.props,
              _ = _.inputProps,
              _ = _.shouldRenderSuggestions,
              _ = _.value,
              _ = _.onBlur,
              _ = _.getHighlightedSuggestion(),
              _ = _(_);
            _.setState({
              isFocused: !1,
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null,
              valueBeforeUpDown: null,
              isCollapsed: !_,
            }),
              _ &&
                _(_.blurEvent, {
                  highlightedSuggestion: _,
                });
          }),
          (this.onSuggestionMouseLeave = function (_) {
            _.resetHighlightedSuggestion(!1),
              _.justSelectedSuggestion &&
                _.target === _.pressedSuggestion &&
                (_.justSelectedSuggestion = !1);
          }),
          (this.onSuggestionTouchStart = function () {
            _.justSelectedSuggestion = !0;
          }),
          (this.onSuggestionTouchMove = function () {
            (_.justSelectedSuggestion = !1),
              (_.pressedSuggestion = null),
              _.input.focus();
          }),
          (this.itemProps = function (_) {
            return {
              "data-section-index": _.sectionIndex,
              "data-suggestion-index": _.itemIndex,
              onMouseEnter: _.onSuggestionMouseEnter,
              onMouseLeave: _.onSuggestionMouseLeave,
              onMouseDown: _.onSuggestionMouseDown,
              onTouchStart: _.onSuggestionTouchStart,
              onTouchMove: _.onSuggestionTouchMove,
              onClick: _.onSuggestionClick,
            };
          }),
          (this.renderSuggestionsContainer = function (_) {
            var _ = _.containerProps,
              _ = _.children;
            return (0, _.props.renderSuggestionsContainer)({
              containerProps: _,
              children: _,
              query: _.getQuery(),
            });
          });
      };
      module_exports.default = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      module.exports = __webpack_require__("chunkid").default;
    },
    chunkid: (_, _) => {
      Object.defineProperty(_, "__esModule", {
        value: !0,
      });
      (_.defaultTheme = {
        container: "react-autosuggest__container",
        containerOpen: "react-autosuggest__container--open",
        input: "react-autosuggest__input",
        inputOpen: "react-autosuggest__input--open",
        inputFocused: "react-autosuggest__input--focused",
        suggestionsContainer: "react-autosuggest__suggestions-container",
        suggestionsContainerOpen:
          "react-autosuggest__suggestions-container--open",
        suggestionsList: "react-autosuggest__suggestions-list",
        suggestion: "react-autosuggest__suggestion",
        suggestionFirst: "react-autosuggest__suggestion--first",
        suggestionHighlighted: "react-autosuggest__suggestion--highlighted",
        sectionContainer: "react-autosuggest__section-container",
        sectionContainerFirst: "react-autosuggest__section-container--first",
        sectionTitle: "react-autosuggest__section-title",
      }),
        (_.mapToAutowhateverTheme = function (_) {
          var _ = {};
          for (var _ in _)
            switch (_) {
              case "suggestionsContainer":
                _.itemsContainer = _[_];
                break;
              case "suggestionsContainerOpen":
                _.itemsContainerOpen = _[_];
                break;
              case "suggestion":
                _.item = _[_];
                break;
              case "suggestionFirst":
                _.itemFirst = _[_];
                break;
              case "suggestionHighlighted":
                _.itemHighlighted = _[_];
                break;
              case "suggestionsList":
                _.itemsList = _[_];
                break;
              default:
                _[_] = _[_];
            }
          return _;
        });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ =
          Object.assign ||
          function (_) {
            for (var _ = 1; _ < arguments.length; _++) {
              var _ = arguments[_];
              for (var _ in _)
                Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
            }
            return _;
          },
        _ = function (_, _) {
          if (Array.isArray(_)) return _;
          if (Symbol.iterator in Object(_))
            return (function (_, _) {
              var _ = [],
                _ = !0,
                _ = !1,
                _ = void 0;
              try {
                for (
                  var _, _ = _[Symbol.iterator]();
                  !(_ = (_ = _.next()).done) &&
                  (__webpack_require__.push(_.value), !_ || _.length !== _);
                  _ = !0
                );
              } catch (_) {
                (_ = !0), (_ = _);
              } finally {
                try {
                  !_ && _.return && _.return();
                } finally {
                  if (_) throw _;
                }
              }
              return _;
            })(_, _);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance",
          );
        },
        _ = (function () {
          function _(_, _) {
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(_, _.key, _);
            }
          }
          return function (_, _, _) {
            return _ && _(_.prototype, _), _ && _(_, _), _;
          };
        })(),
        _ = __webpack_require__("chunkid"),
        _ = _(_),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid"));
      function _(_) {
        return _ && _.__esModule
          ? _
          : {
              default: _,
            };
      }
      var _ = {},
        _ = (function (_) {
          function _(_) {
            !(function (_, _) {
              if (!(_ instanceof _))
                throw new TypeError("Cannot call a class as a function");
            })(this, _);
            var _ = (function (_, _) {
              if (!_)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !_ || ("object" != typeof _ && "function" != typeof _)
                ? _
                : _;
            })(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, _));
            return (
              (_.storeInputReference = function (_) {
                null !== _ && (_.input = _);
              }),
              (_.storeItemsContainerReference = function (_) {
                null !== _ && (_.itemsContainer = _);
              }),
              (_.onHighlightedItemChange = function (_) {
                _.highlightedItem = _;
              }),
              (_.getItemId = function (_, _) {
                return null === _
                  ? null
                  : "react-autowhatever-" +
                      _.props._ +
                      "-" +
                      (null === _ ? "" : "section-" + _) +
                      "-item-" +
                      _;
              }),
              (_.onFocus = function (_) {
                var _ = _.props.inputProps;
                __webpack_require__.setState({
                  isInputFocused: !0,
                }),
                  _.onFocus && _.onFocus(_);
              }),
              (_.onBlur = function (_) {
                var _ = _.props.inputProps;
                __webpack_require__.setState({
                  isInputFocused: !1,
                }),
                  _.onBlur && _.onBlur(_);
              }),
              (_.onKeyDown = function (_) {
                var _ = _.props,
                  _ = _.inputProps,
                  _ = _.highlightedSectionIndex,
                  _ = _.highlightedItemIndex;
                switch (_.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    var _ = "ArrowDown" === _.key ? "next" : "prev",
                      _ = _.sectionIterator[_]([_, _]),
                      _ = _(_, 2),
                      _ = _[0],
                      _ = _[1];
                    _.onKeyDown(_, {
                      newHighlightedSectionIndex: _,
                      newHighlightedItemIndex: _,
                    });
                    break;
                  default:
                    _.onKeyDown(_, {
                      highlightedSectionIndex: _,
                      highlightedItemIndex: _,
                    });
                }
              }),
              (_.highlightedItem = null),
              (_.state = {
                isInputFocused: !1,
              }),
              __webpack_require__.setSectionsItems(_),
              __webpack_require__.setSectionIterator(_),
              __webpack_require__.setTheme(_),
              _
            );
          }
          return (
            (function (_, _) {
              if ("function" != typeof _ && null !== _)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof _,
                );
              (_.prototype = Object.create(_ && _.prototype, {
                constructor: {
                  value: _,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                _ &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(_, _)
                    : (_.__proto__ = _));
            })(_, _),
            _(_, [
              {
                key: "componentDidMount",
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (_) {
                  _.items !== this.props.items && this.setSectionsItems(_),
                    (_.items === this.props.items &&
                      _.multiSection === this.props.multiSection) ||
                      this.setSectionIterator(_),
                    _.theme !== this.props.theme && this.setTheme(_);
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: "setSectionsItems",
                value: function (_) {
                  _.multiSection &&
                    ((this.sectionsItems = _.items.map(function (_) {
                      return _.getSectionItems(_);
                    })),
                    (this.sectionsLengths = this.sectionsItems.map(
                      function (_) {
                        return _.length;
                      },
                    )),
                    (this.allSectionsAreEmpty = this.sectionsLengths.every(
                      function (_) {
                        return 0 === _;
                      },
                    )));
                },
              },
              {
                key: "setSectionIterator",
                value: function (_) {
                  this.sectionIterator = (0, _.default)({
                    multiSection: _.multiSection,
                    data: _.multiSection
                      ? this.sectionsLengths
                      : _.items.length,
                  });
                },
              },
              {
                key: "setTheme",
                value: function (_) {
                  this.theme = (0, _.default)(_.theme);
                },
              },
              {
                key: "renderSections",
                value: function () {
                  var _ = this;
                  if (this.allSectionsAreEmpty) return null;
                  var _ = this.theme,
                    _ = this.props,
                    _ = _._,
                    _ = _.items,
                    _ = _.renderItem,
                    _ = _.renderItemData,
                    _ = _.renderSectionTitle,
                    _ = _.highlightedSectionIndex,
                    _ = _.highlightedItemIndex,
                    _ = _.itemProps;
                  return _.map(function (_, _) {
                    var _ = "react-autowhatever-" + _ + "-",
                      _ = _ + "section-" + _ + "-",
                      _ = 0 === _;
                    return _.default.createElement(
                      "div",
                      _(
                        _ + "container",
                        "sectionContainer",
                        _ && "sectionContainerFirst",
                      ),
                      _.default.createElement(_.default, {
                        section: _,
                        renderSectionTitle: _,
                        theme: _,
                        sectionKeyPrefix: _,
                      }),
                      _.default.createElement(_.default, {
                        items: _.sectionsItems[_],
                        itemProps: _,
                        renderItem: _,
                        renderItemData: _,
                        sectionIndex: _,
                        highlightedItemIndex: _ === _ ? _ : null,
                        onHighlightedItemChange: _.onHighlightedItemChange,
                        getItemId: _.getItemId,
                        theme: _,
                        keyPrefix: _,
                        ref: _.storeItemsListReference,
                      }),
                    );
                  });
                },
              },
              {
                key: "renderItems",
                value: function () {
                  var _ = this.props.items;
                  if (0 === _.length) return null;
                  var _ = this.theme,
                    _ = this.props,
                    _ = _._,
                    _ = _.renderItem,
                    _ = _.renderItemData,
                    _ = _.highlightedSectionIndex,
                    _ = _.highlightedItemIndex,
                    _ = _.itemProps;
                  return _.default.createElement(_.default, {
                    items: _,
                    itemProps: _,
                    renderItem: _,
                    renderItemData: _,
                    highlightedItemIndex: null === _ ? _ : null,
                    onHighlightedItemChange: this.onHighlightedItemChange,
                    getItemId: this.getItemId,
                    theme: _,
                    keyPrefix: "react-autowhatever-" + _ + "-",
                  });
                },
              },
              {
                key: "ensureHighlightedItemIsVisible",
                value: function () {
                  var _ = this.highlightedItem;
                  if (_) {
                    var _ = this.itemsContainer,
                      _ =
                        _.offsetParent === _
                          ? _.offsetTop
                          : _.offsetTop - _.offsetTop,
                      _ = _.scrollTop;
                    _ < _
                      ? (_ = _)
                      : _ + _.offsetHeight > _ + _.offsetHeight &&
                        (_ = _ + _.offsetHeight - _.offsetHeight),
                      _ !== _.scrollTop && (_.scrollTop = _);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var _ = this.theme,
                    _ = this.props,
                    _ = _._,
                    _ = _.multiSection,
                    _ = _.renderInputComponent,
                    _ = _.renderItemsContainer,
                    _ = _.highlightedSectionIndex,
                    _ = _.highlightedItemIndex,
                    _ = this.state.isInputFocused,
                    _ = _ ? this.renderSections() : this.renderItems(),
                    _ = null !== _,
                    _ = this.getItemId(_, _),
                    _ = "react-autowhatever-" + _,
                    _ = _(
                      {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-owns": _,
                        "aria-expanded": _,
                      },
                      _(
                        "react-autowhatever-" + _ + "-container",
                        "container",
                        _ && "containerOpen",
                      ),
                      this.props.containerProps,
                    ),
                    _ = _(
                      _(
                        {
                          type: "text",
                          value: "",
                          autoComplete: "off",
                          "aria-autocomplete": "list",
                          "aria-controls": _,
                          "aria-activedescendant": _,
                        },
                        _(
                          "react-autowhatever-" + _ + "-input",
                          "input",
                          _ && "inputOpen",
                          _ && "inputFocused",
                        ),
                        this.props.inputProps,
                        {
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown:
                            this.props.inputProps.onKeyDown && this.onKeyDown,
                          ref: this.storeInputReference,
                        },
                      ),
                    ),
                    _ = _({
                      containerProps: _(
                        {
                          _: _,
                          role: "listbox",
                        },
                        _(
                          "react-autowhatever-" + _ + "-items-container",
                          "itemsContainer",
                          _ && "itemsContainerOpen",
                        ),
                        {
                          ref: this.storeItemsContainerReference,
                        },
                      ),
                      children: _,
                    });
                  return _.default.createElement("div", _, _, _);
                },
              },
            ]),
            _
          );
        })(_.Component);
      (_.propTypes = {
        _: _.default.string,
        multiSection: _.default.bool,
        renderInputComponent: _.default.func,
        renderItemsContainer: _.default.func,
        items: _.default.array.isRequired,
        renderItem: _.default.func,
        renderItemData: _.default.object,
        renderSectionTitle: _.default.func,
        getSectionItems: _.default.func,
        containerProps: _.default.object,
        inputProps: _.default.object,
        itemProps: _.default.oneOfType([_.default.object, _.default.func]),
        highlightedSectionIndex: _.default.number,
        highlightedItemIndex: _.default.number,
        theme: _.default.oneOfType([_.default.object, _.default.array]),
      }),
        (_.defaultProps = {
          _: "1",
          multiSection: !1,
          renderInputComponent: function (_) {
            return _.default.createElement("input", _);
          },
          renderItemsContainer: function (_) {
            var _ = _.containerProps,
              _ = _.children;
            return _.default.createElement("div", _, _);
          },
          renderItem: function () {
            throw new Error("`renderItem` must be provided");
          },
          renderItemData: _,
          renderSectionTitle: function () {
            throw new Error("`renderSectionTitle` must be provided");
          },
          getSectionItems: function () {
            throw new Error("`getSectionItems` must be provided");
          },
          containerProps: _,
          inputProps: _,
          itemProps: _,
          highlightedSectionIndex: null,
          highlightedItemIndex: null,
          theme: {
            container: "react-autowhatever__container",
            containerOpen: "react-autowhatever__container--open",
            input: "react-autowhatever__input",
            inputOpen: "react-autowhatever__input--open",
            inputFocused: "react-autowhatever__input--focused",
            itemsContainer: "react-autowhatever__items-container",
            itemsContainerOpen: "react-autowhatever__items-container--open",
            itemsList: "react-autowhatever__items-list",
            item: "react-autowhatever__item",
            itemFirst: "react-autowhatever__item--first",
            itemHighlighted: "react-autowhatever__item--highlighted",
            sectionContainer: "react-autowhatever__section-container",
            sectionContainerFirst:
              "react-autowhatever__section-container--first",
            sectionTitle: "react-autowhatever__section-title",
          },
        }),
        (module_exports.default = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      Object.defineProperty(module_exports, "__esModule", {
        value: !0,
      });
      var _ =
          Object.assign ||
          function (_) {
            for (var _ = 1; _ < arguments.length; _++) {
              var _ = arguments[_];
              for (var _ in _)
                Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
            }
            return _;
          },
        _ = (function () {
          function _(_, _) {
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(_, _.key, _);
            }
          }
          return function (_, _, _) {
            return _ && _(_.prototype, _), _ && _(_, _), _;
          };
        })(),
        _ = __webpack_require__("chunkid"),
        _ = _(_),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid"));
      function _(_) {
        return _ && _.__esModule
          ? _
          : {
              default: _,
            };
      }
      function _(_, _) {
        if (!_)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !_ || ("object" != typeof _ && "function" != typeof _) ? _ : _;
      }
      var _ = (function (_) {
        function _() {
          var _, _, _;
          !(function (_, _) {
            if (!(_ instanceof _))
              throw new TypeError("Cannot call a class as a function");
          })(this, _);
          for (var _ = arguments.length, _ = Array(_), _ = 0; _ < _; _++)
            _[_] = arguments[_];
          return (
            (_ = _ =
              _(
                this,
                (_ = _.__proto__ || Object.getPrototypeOf(_)).call.apply(
                  _,
                  [this].concat(_),
                ),
              )),
            (_.storeItemReference = function (_) {
              null !== _ && (_.item = _);
            }),
            (_.onMouseEnter = function (_) {
              var _ = _.props,
                _ = _.sectionIndex,
                _ = _.itemIndex;
              _.props.onMouseEnter(_, {
                sectionIndex: _,
                itemIndex: _,
              });
            }),
            (_.onMouseLeave = function (_) {
              var _ = _.props,
                _ = _.sectionIndex,
                _ = _.itemIndex;
              _.props.onMouseLeave(_, {
                sectionIndex: _,
                itemIndex: _,
              });
            }),
            (_.onMouseDown = function (_) {
              var _ = _.props,
                _ = _.sectionIndex,
                _ = _.itemIndex;
              _.props.onMouseDown(_, {
                sectionIndex: _,
                itemIndex: _,
              });
            }),
            (_.onClick = function (_) {
              var _ = _.props,
                _ = _.sectionIndex,
                _ = _.itemIndex;
              _.props.onClick(_, {
                sectionIndex: _,
                itemIndex: _,
              });
            }),
            _(_, _)
          );
        }
        return (
          (function (_, _) {
            if ("function" != typeof _ && null !== _)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof _,
              );
            (_.prototype = Object.create(_ && _.prototype, {
              constructor: {
                value: _,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              _ &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(_, _)
                  : (_.__proto__ = _));
          })(_, _),
          _(_, [
            {
              key: "shouldComponentUpdate",
              value: function (_) {
                return (0, _.default)(_, this.props, ["renderItemData"]);
              },
            },
            {
              key: "render",
              value: function () {
                var _ = this.props,
                  _ = _.isHighlighted,
                  _ = _.item,
                  _ = _.renderItem,
                  _ = _.renderItemData,
                  _ = (function (_, _) {
                    var _ = {};
                    for (var _ in _)
                      _.indexOf(_) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(_, _) &&
                          (_[_] = _[_]));
                    return _;
                  })(_, [
                    "isHighlighted",
                    "item",
                    "renderItem",
                    "renderItemData",
                  ]);
                return (
                  delete _.sectionIndex,
                  delete _.itemIndex,
                  "function" == typeof _.onMouseEnter &&
                    (_.onMouseEnter = this.onMouseEnter),
                  "function" == typeof _.onMouseLeave &&
                    (_.onMouseLeave = this.onMouseLeave),
                  "function" == typeof _.onMouseDown &&
                    (_.onMouseDown = this.onMouseDown),
                  "function" == typeof _.onClick && (_.onClick = this.onClick),
                  _.default.createElement(
                    "li",
                    _(
                      {
                        role: "option",
                      },
                      _,
                      {
                        ref: this.storeItemReference,
                      },
                    ),
                    _(
                      _,
                      _(
                        {
                          isHighlighted: _,
                        },
                        _,
                      ),
                    ),
                  )
                );
              },
            },
          ]),
          _
        );
      })(_.Component);
      (_.propTypes = {
        sectionIndex: _.default.number,
        isHighlighted: _.default.bool.isRequired,
        itemIndex: _.default.number.isRequired,
        item: _.default.any.isRequired,
        renderItem: _.default.func.isRequired,
        renderItemData: _.default.object.isRequired,
        onMouseEnter: _.default.func,
        onMouseLeave: _.default.func,
        onMouseDown: _.default.func,
        onClick: _.default.func,
      }),
        (module_exports.default = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      Object.defineProperty(module_exports, "__esModule", {
        value: !0,
      });
      var _ =
          Object.assign ||
          function (_) {
            for (var _ = 1; _ < arguments.length; _++) {
              var _ = arguments[_];
              for (var _ in _)
                Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
            }
            return _;
          },
        _ = (function () {
          function _(_, _) {
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(_, _.key, _);
            }
          }
          return function (_, _, _) {
            return _ && _(_.prototype, _), _ && _(_, _), _;
          };
        })(),
        _ = __webpack_require__("chunkid"),
        _ = _(_),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid"));
      function _(_) {
        return _ && _.__esModule
          ? _
          : {
              default: _,
            };
      }
      function _(_, _) {
        if (!_)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !_ || ("object" != typeof _ && "function" != typeof _) ? _ : _;
      }
      var _ = (function (_) {
        function _() {
          var _, _, _;
          !(function (_, _) {
            if (!(_ instanceof _))
              throw new TypeError("Cannot call a class as a function");
          })(this, _);
          for (var _ = arguments.length, _ = Array(_), _ = 0; _ < _; _++)
            _[_] = arguments[_];
          return (
            (_ = _ =
              _(
                this,
                (_ = _.__proto__ || Object.getPrototypeOf(_)).call.apply(
                  _,
                  [this].concat(_),
                ),
              )),
            (_.storeHighlightedItemReference = function (_) {
              _.props.onHighlightedItemChange(null === _ ? null : _.item);
            }),
            _(_, _)
          );
        }
        return (
          (function (_, _) {
            if ("function" != typeof _ && null !== _)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof _,
              );
            (_.prototype = Object.create(_ && _.prototype, {
              constructor: {
                value: _,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              _ &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(_, _)
                  : (_.__proto__ = _));
          })(_, _),
          _(_, [
            {
              key: "shouldComponentUpdate",
              value: function (_) {
                return (0, _.default)(_, this.props, ["itemProps"]);
              },
            },
            {
              key: "render",
              value: function () {
                var _ = this,
                  _ = this.props,
                  _ = _.items,
                  _ = _.itemProps,
                  _ = _.renderItem,
                  _ = _.renderItemData,
                  _ = _.sectionIndex,
                  _ = _.highlightedItemIndex,
                  _ = _.getItemId,
                  _ = _.theme,
                  _ = _.keyPrefix,
                  _ = null === _ ? _ : _ + "section-" + _ + "-",
                  _ = "function" == typeof _;
                return _.default.createElement(
                  "ul",
                  _(
                    {
                      role: "listbox",
                    },
                    _(_ + "items-list", "itemsList"),
                  ),
                  __webpack_require__.map(function (_, _) {
                    var _ = 0 === _,
                      _ = _ === _,
                      _ = _ + "item-" + _,
                      _ = _
                        ? _({
                            sectionIndex: _,
                            itemIndex: _,
                          })
                        : _,
                      _ = _(
                        {
                          _: _(_, _),
                          "aria-selected": _,
                        },
                        _(_, "item", _ && "itemFirst", _ && "itemHighlighted"),
                        _,
                      );
                    return (
                      _ && (_.ref = _.storeHighlightedItemReference),
                      _.default.createElement(
                        _.default,
                        _({}, _, {
                          sectionIndex: _,
                          isHighlighted: _,
                          itemIndex: _,
                          item: _,
                          renderItem: _,
                          renderItemData: _,
                        }),
                      )
                    );
                  }),
                );
              },
            },
          ]),
          _
        );
      })(_.Component);
      (_.propTypes = {
        items: _.default.array.isRequired,
        itemProps: _.default.oneOfType([_.default.object, _.default.func]),
        renderItem: _.default.func.isRequired,
        renderItemData: _.default.object.isRequired,
        sectionIndex: _.default.number,
        highlightedItemIndex: _.default.number,
        onHighlightedItemChange: _.default.func.isRequired,
        getItemId: _.default.func.isRequired,
        theme: _.default.func.isRequired,
        keyPrefix: _.default.string.isRequired,
      }),
        (_.defaultProps = {
          sectionIndex: null,
        }),
        (module_exports.default = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      Object.defineProperty(module_exports, "__esModule", {
        value: !0,
      });
      var _ = (function () {
          function _(_, _) {
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(_, _.key, _);
            }
          }
          return function (_, _, _) {
            return _ && _(_.prototype, _), _ && _(_, _), _;
          };
        })(),
        _ = __webpack_require__("chunkid"),
        _ = _(_),
        _ = _(__webpack_require__("chunkid")),
        _ = _(__webpack_require__("chunkid"));
      function _(_) {
        return _ && _.__esModule
          ? _
          : {
              default: _,
            };
      }
      var _ = (function (_) {
        function _() {
          return (
            (function (_, _) {
              if (!(_ instanceof _))
                throw new TypeError("Cannot call a class as a function");
            })(this, _),
            (function (_, _) {
              if (!_)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !_ || ("object" != typeof _ && "function" != typeof _)
                ? _
                : _;
            })(
              this,
              (_.__proto__ || Object.getPrototypeOf(_)).apply(this, arguments),
            )
          );
        }
        return (
          (function (_, _) {
            if ("function" != typeof _ && null !== _)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof _,
              );
            (_.prototype = Object.create(_ && _.prototype, {
              constructor: {
                value: _,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              _ &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(_, _)
                  : (_.__proto__ = _));
          })(_, _),
          _(_, [
            {
              key: "shouldComponentUpdate",
              value: function (_) {
                return (0, _.default)(_, this.props);
              },
            },
            {
              key: "render",
              value: function () {
                var _ = this.props,
                  _ = _.section,
                  _ = _.renderSectionTitle,
                  _ = _.theme,
                  _ = _.sectionKeyPrefix,
                  _ = __webpack_require__(_);
                return _
                  ? _.default.createElement(
                      "div",
                      _(_ + "title", "sectionTitle"),
                      _,
                    )
                  : null;
              },
            },
          ]),
          _
        );
      })(_.Component);
      (_.propTypes = {
        section: _.default.any.isRequired,
        renderSectionTitle: _.default.func.isRequired,
        theme: _.default.func.isRequired,
        sectionKeyPrefix: _.default.string.isRequired,
      }),
        (module_exports.default = _);
    },
    chunkid: (_, _) => {
      Object.defineProperty(_, "__esModule", {
        value: !0,
      });
      var _ =
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
            };
      _.default = function (_, _) {
        var _ =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (_ === _) return !1;
        var _ = Object.keys(_),
          _ = Object.keys(_);
        if (_.length !== _.length) return !0;
        var _ = {},
          _ = void 0,
          _ = void 0;
        for (_ = 0, _ = _.length; _ < _; _++) _[_[_]] = !0;
        for (_ = 0, _ = _.length; _ < _; _++) {
          var _ = _[_],
            _ = _[_],
            _ = _[_];
          if (_ !== _) {
            if (
              !_[_] ||
              null === _ ||
              null === _ ||
              "object" !==
                (void 0 === _ ? "undefined" : __webpack_require__(_)) ||
              "object" !== (void 0 === _ ? "undefined" : __webpack_require__(_))
            )
              return !0;
            var _ = Object.keys(_),
              _ = Object.keys(_);
            if (_.length !== _.length) return !0;
            for (var _ = 0, _ = _.length; _ < _; _++) {
              var _ = _[_];
              if (_[_] !== _[_]) return !0;
            }
          }
        }
        return !1;
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      module.exports = __webpack_require__("chunkid").default;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      Object.defineProperty(module_exports, "__esModule", {
        value: !0,
      });
      var _ = function (_, _) {
        if (Array.isArray(_)) return _;
        if (Symbol.iterator in Object(_))
          return (function (_, _) {
            var _ = [],
              _ = !0,
              _ = !1,
              _ = void 0;
            try {
              for (
                var _, _ = _[Symbol.iterator]();
                !(_ = (_ = _.next()).done) &&
                (__webpack_require__.push(_.value), !_ || _.length !== _);
                _ = !0
              );
            } catch (_) {
              (_ = !0), (_ = _);
            } finally {
              try {
                !_ && _.return && _.return();
              } finally {
                if (_) throw _;
              }
            }
            return _;
          })(_, _);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance",
        );
      };
      function _(_) {
        if (Array.isArray(_)) {
          for (var _ = 0, _ = Array(_.length); _ < _.length; _++) _[_] = _[_];
          return _;
        }
        return Array.from(_);
      }
      var _,
        _ = __webpack_require__("chunkid"),
        _ =
          (_ = _) && _.__esModule
            ? _
            : {
                default: _,
              },
        _ = function (_) {
          return _;
        };
      (module_exports.default = function (_) {
        var _ = Array.isArray(_) && 2 === _.length ? _ : [_, null],
          _ = _(_, 2),
          _ = _[0],
          _ = _[1];
        return function (_) {
          for (
            var _ = arguments.length, _ = Array(_ > 1 ? _ - 1 : 0), _ = 1;
            _ < _;
            _++
          )
            _[_ - 1] = arguments[_];
          var _ = __webpack_require__
            .map(function (_) {
              return _[_];
            })
            .filter(_);
          return "string" == typeof _[0] || "function" == typeof _
            ? {
                key: _,
                className: _ ? _.apply(void 0, _(_)) : _.join(" "),
              }
            : {
                key: _,
                style: _.default.apply(void 0, [{}].concat(_(_))),
              };
        };
      }),
        (module.exports = module_exports.default);
    },
    chunkid: (module) => {
      var _ = Object.prototype.propertyIsEnumerable;
      function _(_) {
        var _ = Object.getOwnPropertyNames(_);
        return (
          Object.getOwnPropertySymbols &&
            (_ = __webpack_require__.concat(Object.getOwnPropertySymbols(_))),
          __webpack_require__.filter(function (_) {
            return _.call(_, _);
          })
        );
      }
      module.exports =
        Object.assign ||
        function (_, _) {
          for (
            var _,
              _,
              _ = (function (_) {
                if (null == _)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined",
                  );
                return Object(_);
              })(_),
              _ = 1;
            _ < arguments.length;
            _++
          ) {
            (_ = arguments[_]), (_ = __webpack_require__(Object(_)));
            for (var _ = 0; _ < _.length; _++) _[_[_]] = _[_[_]];
          }
          return _;
        };
    },
    chunkid: (module) => {
      var _ = function (_, _) {
        if (Array.isArray(_)) return _;
        if (Symbol.iterator in Object(_))
          return (function (_, _) {
            var _ = [],
              _ = !0,
              _ = !1,
              _ = void 0;
            try {
              for (
                var _, _ = _[Symbol.iterator]();
                !(_ = (_ = _.next()).done) &&
                (__webpack_require__.push(_.value), !_ || _.length !== _);
                _ = !0
              );
            } catch (_) {
              (_ = !0), (_ = _);
            } finally {
              try {
                !_ && _.return && _.return();
              } finally {
                if (_) throw _;
              }
            }
            return _;
          })(_, _);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance",
        );
      };
      module.exports = function (_) {
        var _ = _.data,
          _ = _.multiSection;
        function _(_) {
          var _ = _(_, 2),
            _ = _[0],
            _ = _[1];
          return _
            ? null === _ || _ === _[_] - 1
              ? null ===
                (_ = (function (_) {
                  for (null === _ ? (_ = 0) : _++; _ < _.length && 0 === _[_]; )
                    _++;
                  return _ === _.length ? null : _;
                })(_))
                ? [null, null]
                : [_, 0]
              : [_, _ + 1]
            : 0 === _ || _ === _ - 1
              ? [null, null]
              : null === _
                ? [null, 0]
                : [null, _ + 1];
        }
        return {
          next: _,
          prev: function (_) {
            var _ = _(_, 2),
              _ = _[0],
              _ = _[1];
            return _
              ? null === _ || 0 === _
                ? null ===
                  (_ = (function (_) {
                    for (
                      null === _ ? (_ = _.length - 1) : _--;
                      _ >= 0 && 0 === _[_];
                    )
                      _--;
                    return -1 === _ ? null : _;
                  })(_))
                  ? [null, null]
                  : [_, _[_] - 1]
                : [_, _ - 1]
              : 0 === _ || 0 === _
                ? [null, null]
                : null === _
                  ? [null, _ - 1]
                  : [null, _ - 1];
          },
          isLast: function (_) {
            return null === _(_)[1];
          },
        };
      };
    },
    chunkid: (module) => {
      module.exports = function (_, _) {
        if (_ === _) return !0;
        if (!_ || !_) return !1;
        var _ = _.length;
        if (_.length !== _) return !1;
        for (var _ = 0; _ < _; _++) if (_[_] !== _[_]) return !1;
        return !0;
      };
    },
  },
]);

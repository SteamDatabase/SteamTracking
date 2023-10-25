/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7200],
  {
    34641: (e, t, n) => {
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r = n(89526),
        u = c(r),
        s = c(n(2652)),
        a = c(n(55153)),
        l = c(n(25098)),
        g = n(64298);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var d = function () {
          return !0;
        },
        h = (function (e) {
          function t(e) {
            var n = e.alwaysRenderSuggestions;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var o = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              f.call(o),
              (o.state = {
                isFocused: !1,
                isCollapsed: !n,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
              }),
              (o.justPressedUpDown = !1),
              (o.justMouseEntered = !1),
              (o.pressedSuggestion = null),
              o
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            i(t, [
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
                value: function (e) {
                  (0, a.default)(e.suggestions, this.props.suggestions)
                    ? e.highlightFirstSuggestion &&
                      e.suggestions.length > 0 &&
                      !1 === this.justPressedUpDown &&
                      !1 === this.justMouseEntered &&
                      this.highlightFirstSuggestion()
                    : this.willRenderSuggestions(e)
                    ? this.state.isCollapsed &&
                      !this.justSelectedSuggestion &&
                      this.revealSuggestions()
                    : this.resetHighlightedSuggestion();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this.props,
                    o = n.suggestions,
                    i = n.onSuggestionHighlighted,
                    r = n.highlightFirstSuggestion;
                  if (!(0, a.default)(o, e.suggestions) && o.length > 0 && r)
                    this.highlightFirstSuggestion();
                  else if (i) {
                    var u = this.getHighlightedSuggestion();
                    u != t.highlightedSuggestion && i({ suggestion: u });
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
                value: function (e, t, n) {
                  var o = this;
                  this.setState(function (i) {
                    var r = i.valueBeforeUpDown;
                    return (
                      null === t
                        ? (r = null)
                        : null === r && void 0 !== n && (r = n),
                      {
                        highlightedSectionIndex: e,
                        highlightedSuggestionIndex: t,
                        highlightedSuggestion:
                          null === t ? null : o.getSuggestion(e, t),
                        valueBeforeUpDown: r,
                      }
                    );
                  });
                },
              },
              {
                key: "resetHighlightedSuggestion",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  this.setState(function (t) {
                    var n = t.valueBeforeUpDown;
                    return {
                      highlightedSectionIndex: null,
                      highlightedSuggestionIndex: null,
                      highlightedSuggestion: null,
                      valueBeforeUpDown: e ? null : n,
                    };
                  });
                },
              },
              {
                key: "revealSuggestions",
                value: function () {
                  this.setState({ isCollapsed: !1 });
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
                value: function (e, t) {
                  var n = this.props,
                    o = n.suggestions,
                    i = n.multiSection,
                    r = n.getSectionSuggestions;
                  return i ? r(o[e])[t] : o[t];
                },
              },
              {
                key: "getHighlightedSuggestion",
                value: function () {
                  var e = this.state,
                    t = e.highlightedSectionIndex,
                    n = e.highlightedSuggestionIndex;
                  return null === n ? null : this.getSuggestion(t, n);
                },
              },
              {
                key: "getSuggestionValueByIndex",
                value: function (e, t) {
                  return (0, this.props.getSuggestionValue)(
                    this.getSuggestion(e, t),
                  );
                },
              },
              {
                key: "getSuggestionIndices",
                value: function (e) {
                  var t = e.getAttribute("data-section-index"),
                    n = e.getAttribute("data-suggestion-index");
                  return {
                    sectionIndex: "string" == typeof t ? parseInt(t, 10) : null,
                    suggestionIndex: parseInt(n, 10),
                  };
                },
              },
              {
                key: "findSuggestionElement",
                value: function (e) {
                  var t = e;
                  do {
                    if (null !== t.getAttribute("data-suggestion-index"))
                      return t;
                    t = t.parentNode;
                  } while (null !== t);
                  throw (
                    (console.error("Clicked element:", e),
                    new Error("Couldn't find suggestion element"))
                  );
                },
              },
              {
                key: "maybeCallOnChange",
                value: function (e, t, n) {
                  var o = this.props.inputProps,
                    i = o.value,
                    r = o.onChange;
                  t !== i && r(e, { newValue: t, method: n });
                },
              },
              {
                key: "willRenderSuggestions",
                value: function (e) {
                  var t = e.suggestions,
                    n = e.inputProps,
                    o = e.shouldRenderSuggestions,
                    i = n.value;
                  return t.length > 0 && o(i);
                },
              },
              {
                key: "getQuery",
                value: function () {
                  var e = this.props.inputProps.value,
                    t = this.state.valueBeforeUpDown;
                  return (null === t ? e : t).trim();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.suggestions,
                    i = t.renderInputComponent,
                    r = t.onSuggestionsFetchRequested,
                    s = t.renderSuggestion,
                    a = t.inputProps,
                    c = t.multiSection,
                    h = t.renderSectionTitle,
                    f = t.id,
                    p = t.getSectionSuggestions,
                    m = t.theme,
                    v = t.getSuggestionValue,
                    S = t.alwaysRenderSuggestions,
                    y = t.highlightFirstSuggestion,
                    I = this.state,
                    b = I.isFocused,
                    w = I.isCollapsed,
                    C = I.highlightedSectionIndex,
                    _ = I.highlightedSuggestionIndex,
                    x = I.valueBeforeUpDown,
                    O = S ? d : this.props.shouldRenderSuggestions,
                    j = a.value,
                    P = a.onFocus,
                    k = a.onKeyDown,
                    R = this.willRenderSuggestions(this.props),
                    E = S || (b && !w && R),
                    D = E ? n : [],
                    T = o({}, a, {
                      onFocus: function (t) {
                        if (
                          !e.justSelectedSuggestion &&
                          !e.justClickedOnSuggestionsContainer
                        ) {
                          var n = O(j);
                          e.setState({ isFocused: !0, isCollapsed: !n }),
                            P && P(t),
                            n && r({ value: j, reason: "input-focused" });
                        }
                      },
                      onBlur: function (t) {
                        e.justClickedOnSuggestionsContainer
                          ? e.input.focus()
                          : ((e.blurEvent = t),
                            e.justSelectedSuggestion ||
                              (e.onBlur(), e.onSuggestionsClearRequested()));
                      },
                      onChange: function (t) {
                        var n = t.target.value,
                          i = O(n);
                        e.maybeCallOnChange(t, n, "type"),
                          e.suggestionsContainer &&
                            (e.suggestionsContainer.scrollTop = 0),
                          e.setState(
                            o(
                              {},
                              y
                                ? {}
                                : {
                                    highlightedSectionIndex: null,
                                    highlightedSuggestionIndex: null,
                                    highlightedSuggestion: null,
                                  },
                              { valueBeforeUpDown: null, isCollapsed: !i },
                            ),
                          ),
                          i
                            ? r({ value: n, reason: "input-changed" })
                            : e.onSuggestionsClearRequested();
                      },
                      onKeyDown: function (t, o) {
                        var i = t.keyCode;
                        switch (i) {
                          case 40:
                          case 38:
                            if (w)
                              O(j) &&
                                (r({
                                  value: j,
                                  reason: "suggestions-revealed",
                                }),
                                e.revealSuggestions());
                            else if (n.length > 0) {
                              var u = o.newHighlightedSectionIndex,
                                s = o.newHighlightedItemIndex,
                                a = void 0;
                              (a =
                                null === s
                                  ? null === x
                                    ? j
                                    : x
                                  : e.getSuggestionValueByIndex(u, s)),
                                e.updateHighlightedSuggestion(u, s, j),
                                e.maybeCallOnChange(
                                  t,
                                  a,
                                  40 === i ? "down" : "up",
                                );
                            }
                            t.preventDefault(),
                              (e.justPressedUpDown = !0),
                              setTimeout(function () {
                                e.justPressedUpDown = !1;
                              });
                            break;
                          case 13:
                            if (229 === t.keyCode) break;
                            var l = e.getHighlightedSuggestion();
                            if ((E && !S && e.closeSuggestions(), null != l)) {
                              var g = v(l);
                              e.maybeCallOnChange(t, g, "enter"),
                                e.onSuggestionSelected(t, {
                                  suggestion: l,
                                  suggestionValue: g,
                                  suggestionIndex: _,
                                  sectionIndex: C,
                                  method: "enter",
                                }),
                                (e.justSelectedSuggestion = !0),
                                setTimeout(function () {
                                  e.justSelectedSuggestion = !1;
                                });
                            }
                            break;
                          case 27:
                            E && t.preventDefault();
                            var c = E && !S;
                            if (null === x) {
                              if (!c) {
                                e.maybeCallOnChange(t, "", "escape"),
                                  O("")
                                    ? r({ value: "", reason: "escape-pressed" })
                                    : e.onSuggestionsClearRequested();
                              }
                            } else e.maybeCallOnChange(t, x, "escape");
                            c
                              ? (e.onSuggestionsClearRequested(),
                                e.closeSuggestions())
                              : e.resetHighlightedSuggestion();
                        }
                        k && k(t);
                      },
                    }),
                    M = { query: this.getQuery() };
                  return u.default.createElement(l.default, {
                    multiSection: c,
                    items: D,
                    renderInputComponent: i,
                    renderItemsContainer: this.renderSuggestionsContainer,
                    renderItem: s,
                    renderItemData: M,
                    renderSectionTitle: h,
                    getSectionItems: p,
                    highlightedSectionIndex: C,
                    highlightedItemIndex: _,
                    inputProps: T,
                    itemProps: this.itemProps,
                    theme: (0, g.mapToAutowhateverTheme)(m),
                    id: f,
                    ref: this.storeAutowhateverRef,
                  });
                },
              },
            ]),
            t
          );
        })(r.Component);
      (h.propTypes = {
        suggestions: s.default.array.isRequired,
        onSuggestionsFetchRequested: function (e, t) {
          var n = e[t];
          if ("function" != typeof n)
            throw new Error(
              "'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp",
            );
        },
        onSuggestionsClearRequested: function (e, t) {
          var n = e[t];
          if (!1 === e.alwaysRenderSuggestions && "function" != typeof n)
            throw new Error(
              "'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp",
            );
        },
        onSuggestionSelected: s.default.func,
        onSuggestionHighlighted: s.default.func,
        renderInputComponent: s.default.func,
        renderSuggestionsContainer: s.default.func,
        getSuggestionValue: s.default.func.isRequired,
        renderSuggestion: s.default.func.isRequired,
        inputProps: function (e, t) {
          var n = e[t];
          if (!n.hasOwnProperty("value"))
            throw new Error("'inputProps' must have 'value'.");
          if (!n.hasOwnProperty("onChange"))
            throw new Error("'inputProps' must have 'onChange'.");
        },
        shouldRenderSuggestions: s.default.func,
        alwaysRenderSuggestions: s.default.bool,
        multiSection: s.default.bool,
        renderSectionTitle: function (e, t) {
          var n = e[t];
          if (!0 === e.multiSection && "function" != typeof n)
            throw new Error(
              "'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp",
            );
        },
        getSectionSuggestions: function (e, t) {
          var n = e[t];
          if (!0 === e.multiSection && "function" != typeof n)
            throw new Error(
              "'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp",
            );
        },
        focusInputOnSuggestionClick: s.default.bool,
        highlightFirstSuggestion: s.default.bool,
        theme: s.default.object,
        id: s.default.string,
      }),
        (h.defaultProps = {
          renderSuggestionsContainer: function (e) {
            var t = e.containerProps,
              n = e.children;
            return u.default.createElement("div", t, n);
          },
          shouldRenderSuggestions: function (e) {
            return e.trim().length > 0;
          },
          alwaysRenderSuggestions: !1,
          multiSection: !1,
          focusInputOnSuggestionClick: !0,
          highlightFirstSuggestion: !1,
          theme: g.defaultTheme,
          id: "1",
        });
      var f = function () {
        var e = this;
        (this.onDocumentMouseDown = function (t) {
          e.justClickedOnSuggestionsContainer = !1;
          for (
            var n = (t.detail && t.detail.target) || t.target;
            null !== n && n !== document;

          ) {
            if (null !== n.getAttribute("data-suggestion-index")) return;
            if (n === e.suggestionsContainer)
              return void (e.justClickedOnSuggestionsContainer = !0);
            n = n.parentNode;
          }
        }),
          (this.storeAutowhateverRef = function (t) {
            null !== t && (e.autowhatever = t);
          }),
          (this.onSuggestionMouseEnter = function (t, n) {
            var o = n.sectionIndex,
              i = n.itemIndex;
            e.updateHighlightedSuggestion(o, i),
              t.target === e.pressedSuggestion &&
                (e.justSelectedSuggestion = !0),
              (e.justMouseEntered = !0),
              setTimeout(function () {
                e.justMouseEntered = !1;
              });
          }),
          (this.highlightFirstSuggestion = function () {
            e.updateHighlightedSuggestion(e.props.multiSection ? 0 : null, 0);
          }),
          (this.onDocumentMouseUp = function () {
            e.pressedSuggestion && !e.justSelectedSuggestion && e.input.focus(),
              (e.pressedSuggestion = null);
          }),
          (this.onSuggestionMouseDown = function (t) {
            e.justSelectedSuggestion ||
              ((e.justSelectedSuggestion = !0),
              (e.pressedSuggestion = t.target));
          }),
          (this.onSuggestionsClearRequested = function () {
            var t = e.props.onSuggestionsClearRequested;
            t && t();
          }),
          (this.onSuggestionSelected = function (t, n) {
            var o = e.props,
              i = o.alwaysRenderSuggestions,
              r = o.onSuggestionSelected,
              u = o.onSuggestionsFetchRequested;
            r && r(t, n),
              i
                ? u({ value: n.suggestionValue, reason: "suggestion-selected" })
                : e.onSuggestionsClearRequested(),
              e.resetHighlightedSuggestion();
          }),
          (this.onSuggestionClick = function (t) {
            var n = e.props,
              o = n.alwaysRenderSuggestions,
              i = n.focusInputOnSuggestionClick,
              r = e.getSuggestionIndices(e.findSuggestionElement(t.target)),
              u = r.sectionIndex,
              s = r.suggestionIndex,
              a = e.getSuggestion(u, s),
              l = e.props.getSuggestionValue(a);
            e.maybeCallOnChange(t, l, "click"),
              e.onSuggestionSelected(t, {
                suggestion: a,
                suggestionValue: l,
                suggestionIndex: s,
                sectionIndex: u,
                method: "click",
              }),
              o || e.closeSuggestions(),
              !0 === i ? e.input.focus() : e.onBlur(),
              setTimeout(function () {
                e.justSelectedSuggestion = !1;
              });
          }),
          (this.onBlur = function () {
            var t = e.props,
              n = t.inputProps,
              o = t.shouldRenderSuggestions,
              i = n.value,
              r = n.onBlur,
              u = e.getHighlightedSuggestion(),
              s = o(i);
            e.setState({
              isFocused: !1,
              highlightedSectionIndex: null,
              highlightedSuggestionIndex: null,
              highlightedSuggestion: null,
              valueBeforeUpDown: null,
              isCollapsed: !s,
            }),
              r && r(e.blurEvent, { highlightedSuggestion: u });
          }),
          (this.onSuggestionMouseLeave = function (t) {
            e.resetHighlightedSuggestion(!1),
              e.justSelectedSuggestion &&
                t.target === e.pressedSuggestion &&
                (e.justSelectedSuggestion = !1);
          }),
          (this.onSuggestionTouchStart = function () {
            e.justSelectedSuggestion = !0;
          }),
          (this.onSuggestionTouchMove = function () {
            (e.justSelectedSuggestion = !1),
              (e.pressedSuggestion = null),
              e.input.focus();
          }),
          (this.itemProps = function (t) {
            return {
              "data-section-index": t.sectionIndex,
              "data-suggestion-index": t.itemIndex,
              onMouseEnter: e.onSuggestionMouseEnter,
              onMouseLeave: e.onSuggestionMouseLeave,
              onMouseDown: e.onSuggestionMouseDown,
              onTouchStart: e.onSuggestionTouchStart,
              onTouchMove: e.onSuggestionTouchMove,
              onClick: e.onSuggestionClick,
            };
          }),
          (this.renderSuggestionsContainer = function (t) {
            var n = t.containerProps,
              o = t.children;
            return (0, e.props.renderSuggestionsContainer)({
              containerProps: n,
              children: o,
              query: e.getQuery(),
            });
          });
      };
      t.default = h;
    },
    80292: (e, t, n) => {
      e.exports = n(34641).default;
    },
    64298: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.defaultTheme = {
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
        (t.mapToAutowhateverTheme = function (e) {
          var t = {};
          for (var n in e)
            switch (n) {
              case "suggestionsContainer":
                t.itemsContainer = e[n];
                break;
              case "suggestionsContainerOpen":
                t.itemsContainerOpen = e[n];
                break;
              case "suggestion":
                t.item = e[n];
                break;
              case "suggestionFirst":
                t.itemFirst = e[n];
                break;
              case "suggestionHighlighted":
                t.itemHighlighted = e[n];
                break;
              case "suggestionsList":
                t.itemsList = e[n];
                break;
              default:
                t[n] = e[n];
            }
          return t;
        });
    },
    22799: (e, t, n) => {
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        i = function (e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, t) {
              var n = [],
                o = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var u, s = e[Symbol.iterator]();
                  !(o = (u = s.next()).done) &&
                  (n.push(u.value), !t || n.length !== t);
                  o = !0
                );
              } catch (e) {
                (i = !0), (r = e);
              } finally {
                try {
                  !o && s.return && s.return();
                } finally {
                  if (i) throw r;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance",
          );
        },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        u = n(89526),
        s = h(u),
        a = h(n(2652)),
        l = h(n(73209)),
        g = h(n(1336)),
        c = h(n(22958)),
        d = h(n(63731));
      function h(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = {},
        p = (function (e) {
          function t(e) {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var n = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
              (n.storeInputReference = function (e) {
                null !== e && (n.input = e);
              }),
              (n.storeItemsContainerReference = function (e) {
                null !== e && (n.itemsContainer = e);
              }),
              (n.onHighlightedItemChange = function (e) {
                n.highlightedItem = e;
              }),
              (n.getItemId = function (e, t) {
                return null === t
                  ? null
                  : "react-autowhatever-" +
                      n.props.id +
                      "-" +
                      (null === e ? "" : "section-" + e) +
                      "-item-" +
                      t;
              }),
              (n.onFocus = function (e) {
                var t = n.props.inputProps;
                n.setState({ isInputFocused: !0 }), t.onFocus && t.onFocus(e);
              }),
              (n.onBlur = function (e) {
                var t = n.props.inputProps;
                n.setState({ isInputFocused: !1 }), t.onBlur && t.onBlur(e);
              }),
              (n.onKeyDown = function (e) {
                var t = n.props,
                  o = t.inputProps,
                  r = t.highlightedSectionIndex,
                  u = t.highlightedItemIndex;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    var s = "ArrowDown" === e.key ? "next" : "prev",
                      a = n.sectionIterator[s]([r, u]),
                      l = i(a, 2),
                      g = l[0],
                      c = l[1];
                    o.onKeyDown(e, {
                      newHighlightedSectionIndex: g,
                      newHighlightedItemIndex: c,
                    });
                    break;
                  default:
                    o.onKeyDown(e, {
                      highlightedSectionIndex: r,
                      highlightedItemIndex: u,
                    });
                }
              }),
              (n.highlightedItem = null),
              (n.state = { isInputFocused: !1 }),
              n.setSectionsItems(e),
              n.setSectionIterator(e),
              n.setTheme(e),
              n
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t,
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            r(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  e.items !== this.props.items && this.setSectionsItems(e),
                    (e.items === this.props.items &&
                      e.multiSection === this.props.multiSection) ||
                      this.setSectionIterator(e),
                    e.theme !== this.props.theme && this.setTheme(e);
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
                value: function (e) {
                  e.multiSection &&
                    ((this.sectionsItems = e.items.map(function (t) {
                      return e.getSectionItems(t);
                    })),
                    (this.sectionsLengths = this.sectionsItems.map(
                      function (e) {
                        return e.length;
                      },
                    )),
                    (this.allSectionsAreEmpty = this.sectionsLengths.every(
                      function (e) {
                        return 0 === e;
                      },
                    )));
                },
              },
              {
                key: "setSectionIterator",
                value: function (e) {
                  this.sectionIterator = (0, l.default)({
                    multiSection: e.multiSection,
                    data: e.multiSection
                      ? this.sectionsLengths
                      : e.items.length,
                  });
                },
              },
              {
                key: "setTheme",
                value: function (e) {
                  this.theme = (0, g.default)(e.theme);
                },
              },
              {
                key: "renderSections",
                value: function () {
                  var e = this;
                  if (this.allSectionsAreEmpty) return null;
                  var t = this.theme,
                    n = this.props,
                    o = n.id,
                    i = n.items,
                    r = n.renderItem,
                    u = n.renderItemData,
                    a = n.renderSectionTitle,
                    l = n.highlightedSectionIndex,
                    g = n.highlightedItemIndex,
                    h = n.itemProps;
                  return i.map(function (n, i) {
                    var f = "react-autowhatever-" + o + "-",
                      p = f + "section-" + i + "-",
                      m = 0 === i;
                    return s.default.createElement(
                      "div",
                      t(
                        p + "container",
                        "sectionContainer",
                        m && "sectionContainerFirst",
                      ),
                      s.default.createElement(c.default, {
                        section: n,
                        renderSectionTitle: a,
                        theme: t,
                        sectionKeyPrefix: p,
                      }),
                      s.default.createElement(d.default, {
                        items: e.sectionsItems[i],
                        itemProps: h,
                        renderItem: r,
                        renderItemData: u,
                        sectionIndex: i,
                        highlightedItemIndex: l === i ? g : null,
                        onHighlightedItemChange: e.onHighlightedItemChange,
                        getItemId: e.getItemId,
                        theme: t,
                        keyPrefix: f,
                        ref: e.storeItemsListReference,
                      }),
                    );
                  });
                },
              },
              {
                key: "renderItems",
                value: function () {
                  var e = this.props.items;
                  if (0 === e.length) return null;
                  var t = this.theme,
                    n = this.props,
                    o = n.id,
                    i = n.renderItem,
                    r = n.renderItemData,
                    u = n.highlightedSectionIndex,
                    a = n.highlightedItemIndex,
                    l = n.itemProps;
                  return s.default.createElement(d.default, {
                    items: e,
                    itemProps: l,
                    renderItem: i,
                    renderItemData: r,
                    highlightedItemIndex: null === u ? a : null,
                    onHighlightedItemChange: this.onHighlightedItemChange,
                    getItemId: this.getItemId,
                    theme: t,
                    keyPrefix: "react-autowhatever-" + o + "-",
                  });
                },
              },
              {
                key: "ensureHighlightedItemIsVisible",
                value: function () {
                  var e = this.highlightedItem;
                  if (e) {
                    var t = this.itemsContainer,
                      n =
                        e.offsetParent === t
                          ? e.offsetTop
                          : e.offsetTop - t.offsetTop,
                      o = t.scrollTop;
                    n < o
                      ? (o = n)
                      : n + e.offsetHeight > o + t.offsetHeight &&
                        (o = n + e.offsetHeight - t.offsetHeight),
                      o !== t.scrollTop && (t.scrollTop = o);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.theme,
                    t = this.props,
                    n = t.id,
                    i = t.multiSection,
                    r = t.renderInputComponent,
                    u = t.renderItemsContainer,
                    a = t.highlightedSectionIndex,
                    l = t.highlightedItemIndex,
                    g = this.state.isInputFocused,
                    c = i ? this.renderSections() : this.renderItems(),
                    d = null !== c,
                    h = this.getItemId(a, l),
                    f = "react-autowhatever-" + n,
                    p = o(
                      {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-owns": f,
                        "aria-expanded": d,
                      },
                      e(
                        "react-autowhatever-" + n + "-container",
                        "container",
                        d && "containerOpen",
                      ),
                      this.props.containerProps,
                    ),
                    m = r(
                      o(
                        {
                          type: "text",
                          value: "",
                          autoComplete: "off",
                          "aria-autocomplete": "list",
                          "aria-controls": f,
                          "aria-activedescendant": h,
                        },
                        e(
                          "react-autowhatever-" + n + "-input",
                          "input",
                          d && "inputOpen",
                          g && "inputFocused",
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
                    v = u({
                      containerProps: o(
                        { id: f, role: "listbox" },
                        e(
                          "react-autowhatever-" + n + "-items-container",
                          "itemsContainer",
                          d && "itemsContainerOpen",
                        ),
                        { ref: this.storeItemsContainerReference },
                      ),
                      children: c,
                    });
                  return s.default.createElement("div", p, m, v);
                },
              },
            ]),
            t
          );
        })(u.Component);
      (p.propTypes = {
        id: a.default.string,
        multiSection: a.default.bool,
        renderInputComponent: a.default.func,
        renderItemsContainer: a.default.func,
        items: a.default.array.isRequired,
        renderItem: a.default.func,
        renderItemData: a.default.object,
        renderSectionTitle: a.default.func,
        getSectionItems: a.default.func,
        containerProps: a.default.object,
        inputProps: a.default.object,
        itemProps: a.default.oneOfType([a.default.object, a.default.func]),
        highlightedSectionIndex: a.default.number,
        highlightedItemIndex: a.default.number,
        theme: a.default.oneOfType([a.default.object, a.default.array]),
      }),
        (p.defaultProps = {
          id: "1",
          multiSection: !1,
          renderInputComponent: function (e) {
            return s.default.createElement("input", e);
          },
          renderItemsContainer: function (e) {
            var t = e.containerProps,
              n = e.children;
            return s.default.createElement("div", t, n);
          },
          renderItem: function () {
            throw new Error("`renderItem` must be provided");
          },
          renderItemData: f,
          renderSectionTitle: function () {
            throw new Error("`renderSectionTitle` must be provided");
          },
          getSectionItems: function () {
            throw new Error("`getSectionItems` must be provided");
          },
          containerProps: f,
          inputProps: f,
          itemProps: f,
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
        (t.default = p);
    },
    15428: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r = n(89526),
        u = l(r),
        s = l(n(2652)),
        a = l(n(8313));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function g(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var c = (function (e) {
        function t() {
          var e, n, o;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var i = arguments.length, r = Array(i), u = 0; u < i; u++)
            r[u] = arguments[u];
          return (
            (n = o =
              g(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(r),
                ),
              )),
            (o.storeItemReference = function (e) {
              null !== e && (o.item = e);
            }),
            (o.onMouseEnter = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                i = t.itemIndex;
              o.props.onMouseEnter(e, { sectionIndex: n, itemIndex: i });
            }),
            (o.onMouseLeave = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                i = t.itemIndex;
              o.props.onMouseLeave(e, { sectionIndex: n, itemIndex: i });
            }),
            (o.onMouseDown = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                i = t.itemIndex;
              o.props.onMouseDown(e, { sectionIndex: n, itemIndex: i });
            }),
            (o.onClick = function (e) {
              var t = o.props,
                n = t.sectionIndex,
                i = t.itemIndex;
              o.props.onClick(e, { sectionIndex: n, itemIndex: i });
            }),
            g(o, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (0, a.default)(e, this.props, ["renderItemData"]);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.isHighlighted,
                  n = e.item,
                  i = e.renderItem,
                  r = e.renderItemData,
                  s = (function (e, t) {
                    var n = {};
                    for (var o in e)
                      t.indexOf(o) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, o) &&
                          (n[o] = e[o]));
                    return n;
                  })(e, [
                    "isHighlighted",
                    "item",
                    "renderItem",
                    "renderItemData",
                  ]);
                return (
                  delete s.sectionIndex,
                  delete s.itemIndex,
                  "function" == typeof s.onMouseEnter &&
                    (s.onMouseEnter = this.onMouseEnter),
                  "function" == typeof s.onMouseLeave &&
                    (s.onMouseLeave = this.onMouseLeave),
                  "function" == typeof s.onMouseDown &&
                    (s.onMouseDown = this.onMouseDown),
                  "function" == typeof s.onClick && (s.onClick = this.onClick),
                  u.default.createElement(
                    "li",
                    o({ role: "option" }, s, { ref: this.storeItemReference }),
                    i(n, o({ isHighlighted: t }, r)),
                  )
                );
              },
            },
          ]),
          t
        );
      })(r.Component);
      (c.propTypes = {
        sectionIndex: s.default.number,
        isHighlighted: s.default.bool.isRequired,
        itemIndex: s.default.number.isRequired,
        item: s.default.any.isRequired,
        renderItem: s.default.func.isRequired,
        renderItemData: s.default.object.isRequired,
        onMouseEnter: s.default.func,
        onMouseLeave: s.default.func,
        onMouseDown: s.default.func,
        onClick: s.default.func,
      }),
        (t.default = c);
    },
    63731: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r = n(89526),
        u = g(r),
        s = g(n(2652)),
        a = g(n(15428)),
        l = g(n(8313));
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var d = (function (e) {
        function t() {
          var e, n, o;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var i = arguments.length, r = Array(i), u = 0; u < i; u++)
            r[u] = arguments[u];
          return (
            (n = o =
              c(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(r),
                ),
              )),
            (o.storeHighlightedItemReference = function (e) {
              o.props.onHighlightedItemChange(null === e ? null : e.item);
            }),
            c(o, n)
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (0, l.default)(e, this.props, ["itemProps"]);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.items,
                  i = t.itemProps,
                  r = t.renderItem,
                  s = t.renderItemData,
                  l = t.sectionIndex,
                  g = t.highlightedItemIndex,
                  c = t.getItemId,
                  d = t.theme,
                  h = t.keyPrefix,
                  f = null === l ? h : h + "section-" + l + "-",
                  p = "function" == typeof i;
                return u.default.createElement(
                  "ul",
                  o({ role: "listbox" }, d(f + "items-list", "itemsList")),
                  n.map(function (t, n) {
                    var h = 0 === n,
                      m = n === g,
                      v = f + "item-" + n,
                      S = p ? i({ sectionIndex: l, itemIndex: n }) : i,
                      y = o(
                        { id: c(l, n), "aria-selected": m },
                        d(v, "item", h && "itemFirst", m && "itemHighlighted"),
                        S,
                      );
                    return (
                      m && (y.ref = e.storeHighlightedItemReference),
                      u.default.createElement(
                        a.default,
                        o({}, y, {
                          sectionIndex: l,
                          isHighlighted: m,
                          itemIndex: n,
                          item: t,
                          renderItem: r,
                          renderItemData: s,
                        }),
                      )
                    );
                  }),
                );
              },
            },
          ]),
          t
        );
      })(r.Component);
      (d.propTypes = {
        items: s.default.array.isRequired,
        itemProps: s.default.oneOfType([s.default.object, s.default.func]),
        renderItem: s.default.func.isRequired,
        renderItemData: s.default.object.isRequired,
        sectionIndex: s.default.number,
        highlightedItemIndex: s.default.number,
        onHighlightedItemChange: s.default.func.isRequired,
        getItemId: s.default.func.isRequired,
        theme: s.default.func.isRequired,
        keyPrefix: s.default.string.isRequired,
      }),
        (d.defaultProps = { sectionIndex: null }),
        (t.default = d);
    },
    22958: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        i = n(89526),
        r = a(i),
        u = a(n(2652)),
        s = a(n(8313));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var l = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments),
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (0, s.default)(e, this.props);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.section,
                  n = e.renderSectionTitle,
                  o = e.theme,
                  i = e.sectionKeyPrefix,
                  u = n(t);
                return u
                  ? r.default.createElement(
                      "div",
                      o(i + "title", "sectionTitle"),
                      u,
                    )
                  : null;
              },
            },
          ]),
          t
        );
      })(i.Component);
      (l.propTypes = {
        section: u.default.any.isRequired,
        renderSectionTitle: u.default.func.isRequired,
        theme: u.default.func.isRequired,
        sectionKeyPrefix: u.default.string.isRequired,
      }),
        (t.default = l);
    },
    8313: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            };
      t.default = function (e, t) {
        var o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (e === t) return !1;
        var i = Object.keys(e),
          r = Object.keys(t);
        if (i.length !== r.length) return !0;
        var u = {},
          s = void 0,
          a = void 0;
        for (s = 0, a = o.length; s < a; s++) u[o[s]] = !0;
        for (s = 0, a = i.length; s < a; s++) {
          var l = i[s],
            g = e[l],
            c = t[l];
          if (g !== c) {
            if (
              !u[l] ||
              null === g ||
              null === c ||
              "object" !== (void 0 === g ? "undefined" : n(g)) ||
              "object" !== (void 0 === c ? "undefined" : n(c))
            )
              return !0;
            var d = Object.keys(g),
              h = Object.keys(c);
            if (d.length !== h.length) return !0;
            for (var f = 0, p = d.length; f < p; f++) {
              var m = d[f];
              if (g[m] !== c[m]) return !0;
            }
          }
        }
        return !1;
      };
    },
    25098: (e, t, n) => {
      e.exports = n(22799).default;
    },
    1336: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              o = !0,
              i = !1,
              r = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(o = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (i = !0), (r = e);
            } finally {
              try {
                !o && s.return && s.return();
              } finally {
                if (i) throw r;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance",
        );
      };
      function i(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var r,
        u = n(99813),
        s = (r = u) && r.__esModule ? r : { default: r },
        a = function (e) {
          return e;
        };
      (t.default = function (e) {
        var t = Array.isArray(e) && 2 === e.length ? e : [e, null],
          n = o(t, 2),
          r = n[0],
          u = n[1];
        return function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          var l = n
            .map(function (e) {
              return r[e];
            })
            .filter(a);
          return "string" == typeof l[0] || "function" == typeof u
            ? { key: e, className: u ? u.apply(void 0, i(l)) : l.join(" ") }
            : { key: e, style: s.default.apply(void 0, [{}].concat(i(l))) };
        };
      }),
        (e.exports = t.default);
    },
    73209: (e) => {
      var t = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              o = !0,
              i = !1,
              r = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(o = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (i = !0), (r = e);
            } finally {
              try {
                !o && s.return && s.return();
              } finally {
                if (i) throw r;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance",
        );
      };
      e.exports = function (e) {
        var n = e.data,
          o = e.multiSection;
        function i(e) {
          var i = t(e, 2),
            r = i[0],
            u = i[1];
          return o
            ? null === u || u === n[r] - 1
              ? null ===
                (r = (function (e) {
                  for (null === e ? (e = 0) : e++; e < n.length && 0 === n[e]; )
                    e++;
                  return e === n.length ? null : e;
                })(r))
                ? [null, null]
                : [r, 0]
              : [r, u + 1]
            : 0 === n || u === n - 1
            ? [null, null]
            : null === u
            ? [null, 0]
            : [null, u + 1];
        }
        return {
          next: i,
          prev: function (e) {
            var i = t(e, 2),
              r = i[0],
              u = i[1];
            return o
              ? null === u || 0 === u
                ? null ===
                  (r = (function (e) {
                    for (
                      null === e ? (e = n.length - 1) : e--;
                      e >= 0 && 0 === n[e];

                    )
                      e--;
                    return -1 === e ? null : e;
                  })(r))
                  ? [null, null]
                  : [r, n[r] - 1]
                : [r, u - 1]
              : 0 === n || 0 === u
              ? [null, null]
              : null === u
              ? [null, n - 1]
              : [null, u - 1];
          },
          isLast: function (e) {
            return null === i(e)[1];
          },
        };
      };
    },
    55153: (e) => {
      e.exports = function (e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = e.length;
        if (t.length !== n) return !1;
        for (var o = 0; o < n; o++) if (e[o] !== t[o]) return !1;
        return !0;
      };
    },
  },
]);

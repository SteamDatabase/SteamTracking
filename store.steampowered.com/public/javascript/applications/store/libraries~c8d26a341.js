/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9236],
  {
    49742: (e, t, n) => {
      t.default = void 0;
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== l(e) && "function" != typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(90626)),
        o = a(n(61410)),
        i = a(n(54863)),
        u = a(n(90652)),
        s = n(1224);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function c() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l(e) {
        return (
          (l =
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
                }),
          l(e)
        );
      }
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e) {
        return function () {
          var t,
            n = y(e);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var r = y(this).constructor;
            t = Reflect.construct(n, arguments, r);
          } else t = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === l(t) || "function" == typeof t)) return t;
            return h(e);
          })(this, t);
        };
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function v(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var b = function () {
          return !0;
        },
        S = "suggestions-revealed",
        O = "input-focused",
        w = "input-changed",
        I = "escape-pressed",
        j = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && m(e, t);
          })(c, e);
          var t,
            n,
            o,
            a = d(c);
          function c(e) {
            var t,
              n = e.alwaysRenderSuggestions;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, c),
              v(h((t = a.call(this))), "onDocumentMouseDown", function (e) {
                t.justClickedOnSuggestionsContainer = !1;
                for (
                  var n = (e.detail && e.detail.target) || e.target;
                  null !== n && n !== document;
                ) {
                  if (
                    n.getAttribute &&
                    null !== n.getAttribute("data-suggestion-index")
                  )
                    return;
                  if (n === t.suggestionsContainer)
                    return void (t.justClickedOnSuggestionsContainer = !0);
                  n = n.parentNode;
                }
              }),
              v(h(t), "storeAutowhateverRef", function (e) {
                null !== e && (t.autowhatever = e);
              }),
              v(h(t), "onSuggestionMouseEnter", function (e, n) {
                var r = n.sectionIndex,
                  o = n.itemIndex;
                t.updateHighlightedSuggestion(r, o),
                  e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !0),
                  (t.justMouseEntered = !0),
                  setTimeout(function () {
                    t.justMouseEntered = !1;
                  });
              }),
              v(h(t), "highlightFirstSuggestion", function () {
                t.updateHighlightedSuggestion(
                  t.props.multiSection ? 0 : null,
                  0,
                );
              }),
              v(h(t), "onDocumentMouseUp", function () {
                t.pressedSuggestion &&
                  !t.justSelectedSuggestion &&
                  t.input.focus(),
                  (t.pressedSuggestion = null);
              }),
              v(h(t), "onSuggestionMouseDown", function (e) {
                t.justSelectedSuggestion ||
                  ((t.justSelectedSuggestion = !0),
                  (t.pressedSuggestion = e.target));
              }),
              v(h(t), "onSuggestionsClearRequested", function () {
                var e = t.props.onSuggestionsClearRequested;
                e && e();
              }),
              v(h(t), "onSuggestionSelected", function (e, n) {
                var r = t.props,
                  o = r.alwaysRenderSuggestions,
                  i = r.onSuggestionSelected,
                  u = r.onSuggestionsFetchRequested;
                i && i(e, n);
                var s = t.props.shouldKeepSuggestionsOnSelect(n.suggestion);
                o || s
                  ? u({
                      value: n.suggestionValue,
                      reason: "suggestion-selected",
                    })
                  : t.onSuggestionsClearRequested(),
                  t.resetHighlightedSuggestion();
              }),
              v(h(t), "onSuggestionClick", function (e) {
                var n = t.props,
                  r = n.alwaysRenderSuggestions,
                  o = n.focusInputOnSuggestionClick,
                  i = t.getSuggestionIndices(t.findSuggestionElement(e.target)),
                  u = i.sectionIndex,
                  s = i.suggestionIndex,
                  a = t.getSuggestion(u, s),
                  c = t.props.getSuggestionValue(a);
                t.maybeCallOnChange(e, c, "click"),
                  t.onSuggestionSelected(e, {
                    suggestion: a,
                    suggestionValue: c,
                    suggestionIndex: s,
                    sectionIndex: u,
                    method: "click",
                  });
                var l = t.props.shouldKeepSuggestionsOnSelect(a);
                r || l || t.closeSuggestions(),
                  !0 === o ? t.input.focus() : t.onBlur(),
                  setTimeout(function () {
                    t.justSelectedSuggestion = !1;
                  });
              }),
              v(h(t), "onBlur", function () {
                var e = t.props,
                  n = e.inputProps,
                  r = e.shouldRenderSuggestions,
                  o = n.value,
                  i = n.onBlur,
                  u = t.getHighlightedSuggestion(),
                  s = r(o, "input-blurred");
                t.setState({
                  isFocused: !1,
                  highlightedSectionIndex: null,
                  highlightedSuggestionIndex: null,
                  highlightedSuggestion: null,
                  valueBeforeUpDown: null,
                  isCollapsed: !s,
                }),
                  i && i(t.blurEvent, { highlightedSuggestion: u });
              }),
              v(h(t), "onSuggestionMouseLeave", function (e) {
                t.resetHighlightedSuggestion(!1),
                  t.justSelectedSuggestion &&
                    e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !1);
              }),
              v(h(t), "onSuggestionTouchStart", function () {
                t.justSelectedSuggestion = !0;
              }),
              v(h(t), "onSuggestionTouchMove", function () {
                (t.justSelectedSuggestion = !1),
                  (t.pressedSuggestion = null),
                  t.input.focus();
              }),
              v(h(t), "itemProps", function (e) {
                return {
                  "data-section-index": e.sectionIndex,
                  "data-suggestion-index": e.itemIndex,
                  onMouseEnter: t.onSuggestionMouseEnter,
                  onMouseLeave: t.onSuggestionMouseLeave,
                  onMouseDown: t.onSuggestionMouseDown,
                  onTouchStart: t.onSuggestionTouchStart,
                  onTouchMove: t.onSuggestionTouchMove,
                  onClick: t.onSuggestionClick,
                };
              }),
              v(h(t), "renderSuggestionsContainer", function (e) {
                var n = e.containerProps,
                  r = e.children;
                return (0, t.props.renderSuggestionsContainer)({
                  containerProps: n,
                  children: r,
                  query: t.getQuery(),
                });
              }),
              (t.state = {
                isFocused: !1,
                isCollapsed: !n,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
              }),
              (t.justPressedUpDown = !1),
              (t.justMouseEntered = !1),
              (t.pressedSuggestion = null),
              t
            );
          }
          return (
            (t = c),
            (n = [
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
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  var t =
                    0 === this.state.highlightedSuggestionIndex &&
                    this.props.highlightFirstSuggestion &&
                    !e.highlightFirstSuggestion;
                  (0, i.default)(e.suggestions, this.props.suggestions)
                    ? e.highlightFirstSuggestion &&
                      e.suggestions.length > 0 &&
                      !1 === this.justPressedUpDown &&
                      !1 === this.justMouseEntered
                      ? this.highlightFirstSuggestion()
                      : t && this.resetHighlightedSuggestion()
                    : this.willRenderSuggestions(e, "suggestions-updated")
                      ? (this.state.isCollapsed &&
                          !this.justSelectedSuggestion &&
                          this.revealSuggestions(),
                        t && this.resetHighlightedSuggestion())
                      : this.resetHighlightedSuggestion();
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var n = this.props,
                    r = n.suggestions,
                    o = n.onSuggestionHighlighted,
                    u = n.highlightFirstSuggestion;
                  if (!(0, i.default)(r, e.suggestions) && r.length > 0 && u)
                    this.highlightFirstSuggestion();
                  else if (o) {
                    var s = this.getHighlightedSuggestion();
                    s != t.highlightedSuggestion && o({ suggestion: s });
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
                  var r = this;
                  this.setState(function (o) {
                    var i = o.valueBeforeUpDown;
                    return (
                      null === t
                        ? (i = null)
                        : null === i && void 0 !== n && (i = n),
                      {
                        highlightedSectionIndex: e,
                        highlightedSuggestionIndex: t,
                        highlightedSuggestion:
                          null === t ? null : r.getSuggestion(e, t),
                        valueBeforeUpDown: i,
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
                    r = n.suggestions,
                    o = n.multiSection,
                    i = n.getSectionSuggestions;
                  return o ? i(r[e])[t] : r[t];
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
                    if (
                      t.getAttribute &&
                      null !== t.getAttribute("data-suggestion-index")
                    )
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
                  var r = this.props.inputProps,
                    o = r.value,
                    i = r.onChange;
                  t !== o && i(e, { newValue: t, method: n });
                },
              },
              {
                key: "willRenderSuggestions",
                value: function (e, t) {
                  var n = e.suggestions,
                    r = e.inputProps,
                    o = e.shouldRenderSuggestions,
                    i = r.value;
                  return n.length > 0 && o(i, t);
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
                    o = t.renderInputComponent,
                    i = t.onSuggestionsFetchRequested,
                    a = t.renderSuggestion,
                    c = t.inputProps,
                    l = t.multiSection,
                    f = t.renderSectionTitle,
                    p = t.id,
                    d = t.getSectionSuggestions,
                    h = t.theme,
                    y = t.getSuggestionValue,
                    m = t.alwaysRenderSuggestions,
                    v = t.highlightFirstSuggestion,
                    j = t.containerProps,
                    P = this.state,
                    _ = P.isFocused,
                    C = P.isCollapsed,
                    x = P.highlightedSectionIndex,
                    k = P.highlightedSuggestionIndex,
                    D = P.valueBeforeUpDown,
                    R = m ? b : this.props.shouldRenderSuggestions,
                    E = c.value,
                    M = c.onFocus,
                    T = c.onKeyDown,
                    H = this.willRenderSuggestions(this.props, "render"),
                    F = m || (_ && !C && H),
                    q = F ? n : [],
                    A = g({}, c, {
                      onFocus: function (t) {
                        if (
                          !e.justSelectedSuggestion &&
                          !e.justClickedOnSuggestionsContainer
                        ) {
                          var n = R(E, O);
                          e.setState({ isFocused: !0, isCollapsed: !n }),
                            M && M(t),
                            n && i({ value: E, reason: O });
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
                          r = R(n, w);
                        e.maybeCallOnChange(t, n, "type"),
                          e.suggestionsContainer &&
                            (e.suggestionsContainer.scrollTop = 0),
                          e.setState(
                            g(
                              {},
                              v
                                ? {}
                                : {
                                    highlightedSectionIndex: null,
                                    highlightedSuggestionIndex: null,
                                    highlightedSuggestion: null,
                                  },
                              { valueBeforeUpDown: null, isCollapsed: !r },
                            ),
                          ),
                          r
                            ? i({ value: n, reason: w })
                            : e.onSuggestionsClearRequested();
                      },
                      onKeyDown: function (t, r) {
                        var o = t.keyCode;
                        switch (o) {
                          case 40:
                          case 38:
                            if (C)
                              R(E, S) &&
                                (i({ value: E, reason: S }),
                                e.revealSuggestions(),
                                t.preventDefault());
                            else if (n.length > 0) {
                              var u,
                                s = r.newHighlightedSectionIndex,
                                a = r.newHighlightedItemIndex;
                              (u =
                                null === a
                                  ? null === D
                                    ? E
                                    : D
                                  : e.getSuggestionValueByIndex(s, a)),
                                e.updateHighlightedSuggestion(s, a, E),
                                e.maybeCallOnChange(
                                  t,
                                  u,
                                  40 === o ? "down" : "up",
                                ),
                                t.preventDefault();
                            }
                            (e.justPressedUpDown = !0),
                              setTimeout(function () {
                                e.justPressedUpDown = !1;
                              });
                            break;
                          case 13:
                            if (229 === t.keyCode) break;
                            var c = e.getHighlightedSuggestion();
                            if ((F && !m && e.closeSuggestions(), null != c)) {
                              t.preventDefault();
                              var l = y(c);
                              e.maybeCallOnChange(t, l, "enter"),
                                e.onSuggestionSelected(t, {
                                  suggestion: c,
                                  suggestionValue: l,
                                  suggestionIndex: k,
                                  sectionIndex: x,
                                  method: "enter",
                                }),
                                (e.justSelectedSuggestion = !0),
                                setTimeout(function () {
                                  e.justSelectedSuggestion = !1;
                                });
                            }
                            break;
                          case 27:
                            F && t.preventDefault();
                            var f = F && !m;
                            null === D
                              ? f ||
                                (e.maybeCallOnChange(t, "", "escape"),
                                R("", I)
                                  ? i({ value: "", reason: I })
                                  : e.onSuggestionsClearRequested())
                              : e.maybeCallOnChange(t, D, "escape"),
                              f
                                ? (e.onSuggestionsClearRequested(),
                                  e.closeSuggestions())
                                : e.resetHighlightedSuggestion();
                        }
                        T && T(t);
                      },
                    }),
                    U = { query: this.getQuery() };
                  return r.default.createElement(u.default, {
                    multiSection: l,
                    items: q,
                    renderInputComponent: o,
                    renderItemsContainer: this.renderSuggestionsContainer,
                    renderItem: a,
                    renderItemData: U,
                    renderSectionTitle: f,
                    getSectionItems: d,
                    highlightedSectionIndex: x,
                    highlightedItemIndex: k,
                    containerProps: j,
                    inputProps: A,
                    itemProps: this.itemProps,
                    theme: (0, s.mapToAutowhateverTheme)(h),
                    id: p,
                    ref: this.storeAutowhateverRef,
                  });
                },
              },
            ]),
            n && p(t.prototype, n),
            o && p(t, o),
            c
          );
        })(r.Component);
      (t.default = j),
        v(j, "propTypes", {
          suggestions: o.default.array.isRequired,
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
          shouldKeepSuggestionsOnSelect: o.default.func,
          onSuggestionSelected: o.default.func,
          onSuggestionHighlighted: o.default.func,
          renderInputComponent: o.default.func,
          renderSuggestionsContainer: o.default.func,
          getSuggestionValue: o.default.func.isRequired,
          renderSuggestion: o.default.func.isRequired,
          inputProps: function (e, t) {
            var n = e[t];
            if (!n) throw new Error("'inputProps' must be passed.");
            if (!Object.prototype.hasOwnProperty.call(n, "value"))
              throw new Error("'inputProps' must have 'value'.");
            if (!Object.prototype.hasOwnProperty.call(n, "onChange"))
              throw new Error("'inputProps' must have 'onChange'.");
          },
          shouldRenderSuggestions: o.default.func,
          alwaysRenderSuggestions: o.default.bool,
          multiSection: o.default.bool,
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
          focusInputOnSuggestionClick: o.default.bool,
          highlightFirstSuggestion: o.default.bool,
          theme: o.default.object,
          id: o.default.string,
          containerProps: o.default.object,
        }),
        v(j, "defaultProps", {
          renderSuggestionsContainer: function (e) {
            var t = e.containerProps,
              n = e.children;
            return r.default.createElement("div", t, n);
          },
          shouldRenderSuggestions: function (e) {
            return e.trim().length > 0;
          },
          alwaysRenderSuggestions: !1,
          multiSection: !1,
          shouldKeepSuggestionsOnSelect: function () {
            return !1;
          },
          focusInputOnSuggestionClick: !0,
          highlightFirstSuggestion: !1,
          theme: s.defaultTheme,
          id: "1",
          containerProps: {},
        });
    },
    90652: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== h(e) && "function" != typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(90626)),
        o = c(n(61410)),
        i = c(n(40444)),
        u = c(n(62035)),
        s = c(n(86578)),
        a = c(n(48326));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? f(Object(n), !0).forEach(function (t) {
                O(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function p(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return d(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e) {
        return (
          (h =
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
                }),
          h(e)
        );
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function m(e) {
        return function () {
          var t,
            n = b(e);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var r = b(this).constructor;
            t = Reflect.construct(n, arguments, r);
          } else t = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === h(t) || "function" == typeof t)) return t;
            return v(e);
          })(this, t);
        };
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function S(e, t) {
        return (
          (S =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          S(e, t)
        );
      }
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var w = {},
        I = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && S(e, t);
          })(l, e);
          var t,
            n,
            o,
            c = m(l);
          function l(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, l),
              O(v((t = c.call(this, e))), "storeInputReference", function (e) {
                null !== e && (t.input = e);
                var n = t.props.inputProps.ref;
                n &&
                  ("function" == typeof n
                    ? n(e)
                    : "object" === h(n) &&
                      Object.prototype.hasOwnProperty.call(n, "current") &&
                      (n.current = e));
              }),
              O(v(t), "storeItemsContainerReference", function (e) {
                null !== e && (t.itemsContainer = e);
              }),
              O(v(t), "onHighlightedItemChange", function (e) {
                t.highlightedItem = e;
              }),
              O(v(t), "getItemId", function (e, n) {
                if (null === n) return null;
                var r = t.props.id,
                  o = null === e ? "" : "section-".concat(e);
                return "react-autowhatever-"
                  .concat(r, "-")
                  .concat(o, "-item-")
                  .concat(n);
              }),
              O(v(t), "onFocus", function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !0 }), n.onFocus && n.onFocus(e);
              }),
              O(v(t), "onBlur", function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !1 }), n.onBlur && n.onBlur(e);
              }),
              O(v(t), "onKeyDown", function (e) {
                var n = t.props,
                  r = n.inputProps,
                  o = n.highlightedSectionIndex,
                  i = n.highlightedItemIndex,
                  u = e.keyCode;
                switch (u) {
                  case 40:
                  case 38:
                    var s = 40 === u ? "next" : "prev",
                      a = p(t.sectionIterator[s]([o, i]), 2),
                      c = a[0],
                      l = a[1];
                    r.onKeyDown(e, {
                      newHighlightedSectionIndex: c,
                      newHighlightedItemIndex: l,
                    });
                    break;
                  default:
                    r.onKeyDown(e, {
                      highlightedSectionIndex: o,
                      highlightedItemIndex: i,
                    });
                }
              }),
              (t.highlightedItem = null),
              (t.state = { isInputFocused: !1 }),
              t.setSectionsItems(e),
              t.setSectionIterator(e),
              t.setTheme(e),
              t
            );
          }
          return (
            (t = l),
            (n = [
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
                  this.sectionIterator = (0, i.default)({
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
                  this.theme = (0, u.default)(e.theme);
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
                    u = n.renderItem,
                    c = n.renderItemData,
                    l = n.renderSectionTitle,
                    f = n.highlightedSectionIndex,
                    g = n.highlightedItemIndex,
                    p = n.itemProps;
                  return i.map(function (n, i) {
                    var d = "react-autowhatever-".concat(o, "-"),
                      h = "".concat(d, "section-").concat(i, "-"),
                      y = 0 === i;
                    return r.default.createElement(
                      "div",
                      t(
                        "".concat(h, "container"),
                        "sectionContainer",
                        y && "sectionContainerFirst",
                      ),
                      r.default.createElement(s.default, {
                        section: n,
                        renderSectionTitle: l,
                        theme: t,
                        sectionKeyPrefix: h,
                      }),
                      r.default.createElement(a.default, {
                        items: e.sectionsItems[i],
                        itemProps: p,
                        renderItem: u,
                        renderItemData: c,
                        sectionIndex: i,
                        highlightedItemIndex: f === i ? g : null,
                        onHighlightedItemChange: e.onHighlightedItemChange,
                        getItemId: e.getItemId,
                        theme: t,
                        keyPrefix: d,
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
                    u = n.renderItemData,
                    s = n.highlightedSectionIndex,
                    c = n.highlightedItemIndex,
                    l = n.itemProps;
                  return r.default.createElement(a.default, {
                    items: e,
                    itemProps: l,
                    renderItem: i,
                    renderItemData: u,
                    highlightedItemIndex: null === s ? c : null,
                    onHighlightedItemChange: this.onHighlightedItemChange,
                    getItemId: this.getItemId,
                    theme: t,
                    keyPrefix: "react-autowhatever-".concat(o, "-"),
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
                      r = t.scrollTop;
                    n < r
                      ? (r = n)
                      : n + e.offsetHeight > r + t.offsetHeight &&
                        (r = n + e.offsetHeight - t.offsetHeight),
                      r !== t.scrollTop && (t.scrollTop = r);
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.theme,
                    t = this.props,
                    n = t.id,
                    o = t.multiSection,
                    i = t.renderInputComponent,
                    u = t.renderItemsContainer,
                    s = t.highlightedSectionIndex,
                    a = t.highlightedItemIndex,
                    c = this.state.isInputFocused,
                    l = o ? this.renderSections() : this.renderItems(),
                    f = null !== l,
                    p = this.getItemId(s, a),
                    d = "react-autowhatever-".concat(n),
                    h = g(
                      {
                        role: "combobox",
                        "aria-haspopup": "listbox",
                        "aria-owns": d,
                        "aria-expanded": f,
                      },
                      e(
                        "react-autowhatever-".concat(n, "-container"),
                        "container",
                        f && "containerOpen",
                      ),
                      {},
                      this.props.containerProps,
                    ),
                    y = i(
                      g(
                        {
                          type: "text",
                          value: "",
                          autoComplete: "off",
                          "aria-autocomplete": "list",
                          "aria-controls": d,
                          "aria-activedescendant": p,
                        },
                        e(
                          "react-autowhatever-".concat(n, "-input"),
                          "input",
                          f && "inputOpen",
                          c && "inputFocused",
                        ),
                        {},
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
                    m = u({
                      containerProps: g(
                        { id: d, role: "listbox" },
                        e(
                          "react-autowhatever-".concat(n, "-items-container"),
                          "itemsContainer",
                          f && "itemsContainerOpen",
                        ),
                        { ref: this.storeItemsContainerReference },
                      ),
                      children: l,
                    });
                  return r.default.createElement("div", h, y, m);
                },
              },
            ]) && y(t.prototype, n),
            o && y(t, o),
            l
          );
        })(r.Component);
      (t.default = I),
        O(I, "propTypes", {
          id: o.default.string,
          multiSection: o.default.bool,
          renderInputComponent: o.default.func,
          renderItemsContainer: o.default.func,
          items: o.default.array.isRequired,
          renderItem: o.default.func,
          renderItemData: o.default.object,
          renderSectionTitle: o.default.func,
          getSectionItems: o.default.func,
          containerProps: o.default.object,
          inputProps: o.default.object,
          itemProps: o.default.oneOfType([o.default.object, o.default.func]),
          highlightedSectionIndex: o.default.number,
          highlightedItemIndex: o.default.number,
          theme: o.default.oneOfType([o.default.object, o.default.array]),
        }),
        O(I, "defaultProps", {
          id: "1",
          multiSection: !1,
          renderInputComponent: function (e) {
            return r.default.createElement("input", e);
          },
          renderItemsContainer: function (e) {
            var t = e.containerProps,
              n = e.children;
            return r.default.createElement("div", t, n);
          },
          renderItem: function () {
            throw new Error("`renderItem` must be provided");
          },
          renderItemData: w,
          renderSectionTitle: function () {
            throw new Error("`renderSectionTitle` must be provided");
          },
          getSectionItems: function () {
            throw new Error("`getSectionItems` must be provided");
          },
          containerProps: w,
          inputProps: w,
          itemProps: w,
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
        });
    },
    53490: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== a(e) && "function" != typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(90626)),
        o = u(n(61410)),
        i = u(n(14196));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function a(e) {
        return (
          (a =
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
                }),
          a(e)
        );
      }
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          c.apply(this, arguments)
        );
      }
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e) {
        return function () {
          var t,
            n = h(e);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var r = h(this).constructor;
            t = Reflect.construct(n, arguments, r);
          } else t = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === a(t) || "function" == typeof t)) return t;
            return d(e);
          })(this, t);
        };
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function y(e, t) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          y(e, t)
        );
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var v = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && y(e, t);
        })(s, e);
        var t,
          n,
          o,
          u = p(s);
        function s() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, s);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            m(
              d((e = u.call.apply(u, [this].concat(n)))),
              "storeItemReference",
              function (t) {
                null !== t && (e.item = t);
              },
            ),
            m(d(e), "onMouseEnter", function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseEnter(t, { sectionIndex: r, itemIndex: o });
            }),
            m(d(e), "onMouseLeave", function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseLeave(t, { sectionIndex: r, itemIndex: o });
            }),
            m(d(e), "onMouseDown", function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onMouseDown(t, { sectionIndex: r, itemIndex: o });
            }),
            m(d(e), "onClick", function (t) {
              var n = e.props,
                r = n.sectionIndex,
                o = n.itemIndex;
              e.props.onClick(t, { sectionIndex: r, itemIndex: o });
            }),
            e
          );
        }
        return (
          (t = s),
          (n = [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (0, i.default)(e, this.props, ["renderItemData"]);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.isHighlighted,
                  n = e.item,
                  o = e.renderItem,
                  i = e.renderItemData,
                  u = f(e, [
                    "isHighlighted",
                    "item",
                    "renderItem",
                    "renderItemData",
                  ]);
                return (
                  delete u.sectionIndex,
                  delete u.itemIndex,
                  "function" == typeof u.onMouseEnter &&
                    (u.onMouseEnter = this.onMouseEnter),
                  "function" == typeof u.onMouseLeave &&
                    (u.onMouseLeave = this.onMouseLeave),
                  "function" == typeof u.onMouseDown &&
                    (u.onMouseDown = this.onMouseDown),
                  "function" == typeof u.onClick && (u.onClick = this.onClick),
                  r.default.createElement(
                    "li",
                    c({ role: "option" }, u, { ref: this.storeItemReference }),
                    o(
                      n,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? l(Object(n), !0).forEach(function (t) {
                                m(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n),
                                )
                              : l(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t),
                                  );
                                });
                        }
                        return e;
                      })({ isHighlighted: t }, i),
                    ),
                  )
                );
              },
            },
          ]),
          n && g(t.prototype, n),
          o && g(t, o),
          s
        );
      })(r.Component);
      (t.default = v),
        m(v, "propTypes", {
          sectionIndex: o.default.number,
          isHighlighted: o.default.bool.isRequired,
          itemIndex: o.default.number.isRequired,
          item: o.default.any.isRequired,
          renderItem: o.default.func.isRequired,
          renderItemData: o.default.object.isRequired,
          onMouseEnter: o.default.func,
          onMouseLeave: o.default.func,
          onMouseDown: o.default.func,
          onClick: o.default.func,
        });
    },
    48326: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== c(e) && "function" != typeof e))
            return { default: e };
          var t = a();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(90626)),
        o = s(n(61410)),
        i = s(n(53490)),
        u = s(n(14196));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function a() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (a = function () {
            return e;
          }),
          e
        );
      }
      function c(e) {
        return (
          (c =
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
                }),
          c(e)
        );
      }
      function l() {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          l.apply(this, arguments)
        );
      }
      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e) {
        return function () {
          var t,
            n = h(e);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var r = h(this).constructor;
            t = Reflect.construct(n, arguments, r);
          } else t = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === c(t) || "function" == typeof t)) return t;
            return d(e);
          })(this, t);
        };
      }
      function d(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      function y(e, t) {
        return (
          (y =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          y(e, t)
        );
      }
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var v = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function",
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && y(e, t);
        })(a, e);
        var t,
          n,
          o,
          s = p(a);
        function a() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, a);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            m(
              d((e = s.call.apply(s, [this].concat(n)))),
              "storeHighlightedItemReference",
              function (t) {
                e.props.onHighlightedItemChange(null === t ? null : t.item);
              },
            ),
            e
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                return (0, u.default)(e, this.props, ["itemProps"]);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.items,
                  o = t.itemProps,
                  u = t.renderItem,
                  s = t.renderItemData,
                  a = t.sectionIndex,
                  c = t.highlightedItemIndex,
                  g = t.getItemId,
                  p = t.theme,
                  d = t.keyPrefix,
                  h = null === a ? d : "".concat(d, "section-").concat(a, "-"),
                  y = "function" == typeof o;
                return r.default.createElement(
                  "ul",
                  l(
                    { role: "listbox" },
                    p("".concat(h, "items-list"), "itemsList"),
                  ),
                  n.map(function (t, n) {
                    var d = 0 === n,
                      v = n === c,
                      b = "".concat(h, "item-").concat(n),
                      S = y ? o({ sectionIndex: a, itemIndex: n }) : o,
                      O = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? f(Object(n), !0).forEach(function (t) {
                                m(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(n),
                                )
                              : f(Object(n)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(n, t),
                                  );
                                });
                        }
                        return e;
                      })(
                        { id: g(a, n), "aria-selected": v },
                        p(b, "item", d && "itemFirst", v && "itemHighlighted"),
                        {},
                        S,
                      );
                    return (
                      v && (O.ref = e.storeHighlightedItemReference),
                      r.default.createElement(
                        i.default,
                        l({}, O, {
                          sectionIndex: a,
                          isHighlighted: v,
                          itemIndex: n,
                          item: t,
                          renderItem: u,
                          renderItemData: s,
                        }),
                      )
                    );
                  }),
                );
              },
            },
          ]),
          n && g(t.prototype, n),
          o && g(t, o),
          a
        );
      })(r.Component);
      (t.default = v),
        m(v, "propTypes", {
          items: o.default.array.isRequired,
          itemProps: o.default.oneOfType([o.default.object, o.default.func]),
          renderItem: o.default.func.isRequired,
          renderItemData: o.default.object.isRequired,
          sectionIndex: o.default.number,
          highlightedItemIndex: o.default.number,
          onHighlightedItemChange: o.default.func.isRequired,
          getItemId: o.default.func.isRequired,
          theme: o.default.func.isRequired,
          keyPrefix: o.default.string.isRequired,
        }),
        m(v, "defaultProps", { sectionIndex: null });
    },
    86578: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== a(e) && "function" != typeof e))
            return { default: e };
          var t = s();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(n, o, i)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n(90626)),
        o = u(n(61410)),
        i = u(n(14196));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function a(e) {
        return (
          (a =
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
                }),
          a(e)
        );
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function l(e) {
        return function () {
          var t,
            n = f(e);
          if (
            (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function () {}),
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()
          ) {
            var r = f(this).constructor;
            t = Reflect.construct(n, arguments, r);
          } else t = n.apply(this, arguments);
          return (function (e, t) {
            if (t && ("object" === a(t) || "function" == typeof t)) return t;
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e);
          })(this, t);
        };
      }
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          f(e)
        );
      }
      function g(e, t) {
        return (
          (g =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          g(e, t)
        );
      }
      var p,
        d,
        h,
        y = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && g(e, t);
          })(s, e);
          var t,
            n,
            o,
            u = l(s);
          function s() {
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, s),
              u.apply(this, arguments)
            );
          }
          return (
            (t = s),
            (n = [
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  return (0, i.default)(e, this.props);
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
                        o("".concat(i, "title"), "sectionTitle"),
                        u,
                      )
                    : null;
                },
              },
            ]) && c(t.prototype, n),
            o && c(t, o),
            s
          );
        })(r.Component);
      (t.default = y),
        (p = y),
        (d = "propTypes"),
        (h = {
          section: o.default.any.isRequired,
          renderSectionTitle: o.default.func.isRequired,
          theme: o.default.func.isRequired,
          sectionKeyPrefix: o.default.string.isRequired,
        }),
        d in p
          ? Object.defineProperty(p, d, {
              value: h,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (p[d] = h);
    },
    14196: (e, t) => {
      function n(e) {
        return (
          (n =
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
                }),
          n(e)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (e === t) return !1;
          var o = Object.keys(e),
            i = Object.keys(t);
          if (o.length !== i.length) return !0;
          var u,
            s,
            a = {};
          for (u = 0, s = r.length; u < s; u++) a[r[u]] = !0;
          for (u = 0, s = o.length; u < s; u++) {
            var c = o[u],
              l = e[c],
              f = t[c];
            if (l !== f) {
              if (
                !a[c] ||
                null === l ||
                null === f ||
                "object" !== n(l) ||
                "object" !== n(f)
              )
                return !0;
              var g = Object.keys(l),
                p = Object.keys(f);
              if (g.length !== p.length) return !0;
              for (var d = 0, h = g.length; d < h; d++) {
                var y = g[d];
                if (l[y] !== f[y]) return !0;
              }
            }
          }
          return !1;
        });
    },
    26649: (e, t, n) => {
      e.exports = n(49742).default;
    },
    1224: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mapToAutowhateverTheme = t.defaultTheme = void 0);
      t.defaultTheme = {
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
      };
      t.mapToAutowhateverTheme = function (e) {
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
      };
    },
    62035: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance",
        );
      };
      function o(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var i,
        u = n(99317),
        s = (i = u) && i.__esModule ? i : { default: i },
        a = function (e) {
          return e;
        };
      (t.default = function (e) {
        var t = Array.isArray(e) && 2 === e.length ? e : [e, null],
          n = r(t, 2),
          i = n[0],
          u = n[1];
        return function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          var c = n
            .map(function (e) {
              return i[e];
            })
            .filter(a);
          return "string" == typeof c[0] || "function" == typeof u
            ? { key: e, className: u ? u.apply(void 0, o(c)) : c.join(" ") }
            : { key: e, style: s.default.apply(void 0, [{}].concat(o(c))) };
        };
      }),
        (e.exports = t.default);
    },
    99317: (e) => {
      var t = Object.prototype.propertyIsEnumerable;
      function n(e) {
        var n = Object.getOwnPropertyNames(e);
        return (
          Object.getOwnPropertySymbols &&
            (n = n.concat(Object.getOwnPropertySymbols(e))),
          n.filter(function (n) {
            return t.call(e, n);
          })
        );
      }
      e.exports =
        Object.assign ||
        function (e, t) {
          for (
            var r,
              o,
              i = (function (e) {
                if (null == e)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined",
                  );
                return Object(e);
              })(e),
              u = 1;
            u < arguments.length;
            u++
          ) {
            (r = arguments[u]), (o = n(Object(r)));
            for (var s = 0; s < o.length; s++) i[o[s]] = r[o[s]];
          }
          return i;
        };
    },
    40444: (e) => {
      var t = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(r = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
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
          r = e.multiSection;
        function o(e) {
          var o = t(e, 2),
            i = o[0],
            u = o[1];
          return r
            ? null === u || u === n[i] - 1
              ? null ===
                (i = (function (e) {
                  for (null === e ? (e = 0) : e++; e < n.length && 0 === n[e]; )
                    e++;
                  return e === n.length ? null : e;
                })(i))
                ? [null, null]
                : [i, 0]
              : [i, u + 1]
            : 0 === n || u === n - 1
              ? [null, null]
              : null === u
                ? [null, 0]
                : [null, u + 1];
        }
        return {
          next: o,
          prev: function (e) {
            var o = t(e, 2),
              i = o[0],
              u = o[1];
            return r
              ? null === u || 0 === u
                ? null ===
                  (i = (function (e) {
                    for (
                      null === e ? (e = n.length - 1) : e--;
                      e >= 0 && 0 === n[e];
                    )
                      e--;
                    return -1 === e ? null : e;
                  })(i))
                  ? [null, null]
                  : [i, n[i] - 1]
                : [i, u - 1]
              : 0 === n || 0 === u
                ? [null, null]
                : null === u
                  ? [null, n - 1]
                  : [null, u - 1];
          },
          isLast: function (e) {
            return null === o(e)[1];
          },
        };
      };
    },
    54863: (e) => {
      e.exports = function (e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = e.length;
        if (t.length !== n) return !1;
        for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
        return !0;
      };
    },
  },
]);

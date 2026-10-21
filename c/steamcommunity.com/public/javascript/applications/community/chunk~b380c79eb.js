(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [49769],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = Symbol("CoercingTextInputNotParseable");
        function _(_) {
          const {
              value: _,
              onValueChange: _,
              valueToString: _,
              valueFromString: _,
              checkValidText: _,
              onBlur: _,
              onKeyDown: _,
              ..._
            } = _,
            [_, _] = (0, _.useState)(null),
            _ = _ ?? (_ === void 0 ? "" : _(_)),
            _ = (_) => {
              const _ = _(_);
              _ !== _ && _ === _(_) ? (_(null), _(_)) : (!_ || _(_, _)) && _(_);
            },
            _ = () => {
              if (_ !== null) {
                const _ = _(_);
                _ !== _ && _(_), _(null);
              }
            },
            _ = (_) => {
              _(), _ && _(_);
            },
            _ = (_) => {
              _.key === "Enter" && _(), _ && _(_);
            };
          return (0, _.jsx)(_._, {
            value: _,
            onTextChange: _,
            onKeyDown: _,
            onBlur: _,
            ..._,
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              children: _,
              state: _,
              placement: _ = "bottom-end",
              popoverWidth: _ = "dropdown",
              popoverMaxHeight: _,
              popoverPresentation: _,
              popoverLabel: _,
              ..._
            } = _,
            [_, _] = (0, _.useState)(void 0);
          (0, _.useEffect)(() => _(void 0), [_.bOpen]);
          const _ = (0, _._)(),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = (0, _.useMemo)(
              () => _.rgFilteredOptions.findIndex((_) => _ === _.selectedValue),
              [_.selectedValue, _.rgFilteredOptions],
            ),
            _ = (0, _._)({
              open: _.bOpen,
              onOpenChange: _.setOpen,
              width: _,
              maxHeight: _,
              placement: _,
              presentation: _,
              gutter: "4",
              activeIndex: _.activeIndex,
              setActiveIndex: _.setActiveIndex,
              selectedIndex: _,
              setSelectedIndex: (_) =>
                _.onItemSelectionChange(_.rgFilteredOptions[_]),
              interactions: {
                click: !0,
                virtualItemFocus: !_,
              },
              role: "combobox",
              scroll: !1,
            }),
            _ = {
              ..._,
              ..._,
              focusedValue: _,
              onFocusChange: _,
              refPopover: _,
              refScrollElement: _,
              setOpen: (_) => {
                if (_) {
                  let _ = null;
                  _.multiselect
                    ? (_ = Array.isArray(_.selectedValue)
                        ? _.selectedValue[0]
                        : null)
                    : (_ = _.selectedValue),
                    _(_),
                    _.onInputChange("");
                }
                _.setOpen(_);
              },
              onIndexSelected: (_) => {
                const _ = _.elementsRef.current;
                _ && _[_] && _[_].click();
              },
              popoverPlacement: _.floating.placement,
              popoverPresentation: _.presentation,
              popoverLabel: _,
            };
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_._.Root, {
              state: _,
              children: _,
            }),
          });
        }
        function _(_) {
          const {
              refPopover: _,
              inputValue: _,
              onInputChange: _,
              activeIndex: _,
              popoverPlacement: _,
              popoverPresentation: _,
              popoverLabel: _,
              multiselect: _,
              setActiveIndex: _,
              setOpen: _,
              filterPlaceholder: _,
              onIndexSelected: _,
              refScrollElement: _,
            } = _("<Combobox.Options>"),
            _ = (_) => {
              _ &&
                _.focus({
                  preventScroll: !0,
                });
            },
            _ = (_) => {
              _.key === "Enter" &&
                _ !== null &&
                (_(_),
                _ || (_(null), _(!1)),
                _.preventDefault(),
                _.stopPropagation());
            },
            _ = _ === "anchor" && _.startsWith("top"),
            _ = (0, _.jsx)(_._, {
              overflow: "auto",
              ref: _,
              style: {
                overscrollBehavior: "contain",
              },
              children: _.children,
            }),
            _ = (_) => {
              (_.key === "Home" || _.key === "End") && _.stopPropagation();
            };
          return (0, _.jsx)(_._.Positioner, {
            ref: _,
            label: _,
            children: (0, _.jsxs)(_._, {
              direction: "column",
              maxHeight: "var(--popover-max-height)",
              children: [
                _ && _,
                (0, _.jsx)(_._, {
                  flexShrink: "0",
                  className: (0, _._)(_.FilterBorder, _ ? _.Top : _.Bottom),
                  children: (0, _.jsx)(_._, {
                    margin: "3",
                    variant: "inset",
                    radius: "sm",
                    value: _,
                    onTextChange: _,
                    onKeyDown: _,
                    onKeyDownCapture: _,
                    placeholder: _,
                    inputRef: _,
                    autoComplete: "off",
                  }),
                }),
                !_ && _,
              ],
            }),
          });
        }
        const _ = (0, _.createContext)(null);
        function _(_) {
          const { items: _, renderItem: _, overscan: _ = 5, ..._ } = _,
            {
              bOpen: _,
              refPopover: _,
              refScrollElement: _,
            } = _("<ComboboxVirtualizedOptions>"),
            [_, _] = (0, _.useState)(!1),
            _ = _ && !!_.current && !!_.current;
          (0, _.useEffect)(() => {
            _ !== _ && _(_);
          }, [_, _]);
          const _ = (0, _._)({
            count: _ ? _.length : Math.min(_.length, 3),
            getScrollElement: () => _.current,
            enabled: _,
            measureElement: _._,
            ..._,
          });
          return (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              value: _,
              children: (0, _.jsx)(_._, {
                height: `${_.getTotalSize()}px`,
                position: "relative",
                width: "100%",
                children: _.getVirtualItems().map((_) => _(_[_.index], _, _)),
              }),
            }),
          });
        }
        function _(_) {
          const { virtualItem: _, children: _ } = _,
            _ = (0, _.useContext)(_);
          return (
            (0, _._)(_, "Virtual item rendered outside of a virtualizer!"),
            (0, _.jsx)(_._, {
              position: "absolute",
              width: "100%",
              style: {
                top: 0,
                left: 0,
                transform: `translateY(${_.start}px)`,
              },
              ref: _.measureElement,
              "data-index": _.index,
              children: _,
            })
          );
        }
        function _(_) {
          const { virtualItem: _, ..._ } = _;
          return (0, _.jsx)(_, {
            virtualItem: _,
            children: (0, _.jsx)(_, {
              ..._,
            }),
          });
        }
        function _(_) {
          const { virtualItem: _, children: _ } = _;
          return (0, _.jsx)(_, {
            virtualItem: _,
            children: _,
          });
        }
        function _(_) {
          const { value: _, children: _, disabled: _ } = _,
            {
              onItemSelectionChange: _,
              selectedValue: _,
              multiselect: _,
              maxSelected: _,
            } = _("<ComboboxTrigger>");
          let _ = !1,
            _ = !1;
          _
            ? ((_ = Array.isArray(_) && _.includes(_)),
              (_ = !!_ && Array.isArray(_) && _.length >= _))
            : (_ = _ === _);
          const _ = _ || (_ && !_);
          return (0, _.jsxs)(_._.Item, {
            onSelect: () => _(_),
            selected: _,
            disabled: _,
            children: [
              _ &&
                (0, _.jsxs)(_._, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, _.jsx)(_._, {
                      checked: _,
                      variant: "dark",
                    }),
                    _,
                  ],
                }),
              !_ && _,
            ],
          });
        }
        function _(_) {
          const { children: _, beforeContent: _, render: _ } = _,
            {
              bOpen: _,
              setOpen: _,
              inputValue: _,
              onInputChange: _,
              selectedValue: _,
              focusedValue: _,
              refScrollElement: _,
              onItemSelectionChange: _,
              activeIndex: _,
              setActiveIndex: _,
              onFocusChange: _,
              rgFilteredOptions: _,
              onSelectionChange: _,
              multiselect: _,
              onClear: _,
              refPopover: _,
              clearable: _,
              filterPlaceholder: _,
              onIndexSelected: _,
              popoverPlacement: _,
              popoverPresentation: _,
              popoverLabel: _,
              maxSelected: _,
              variant: _,
              ..._
            } = _("<ComboboxTrigger>"),
            _ = {
              tabIndex: 0,
              children: _,
            },
            _ = _ ? Array.isArray(_) && _.length > 0 : !!_,
            _ = _ && _,
            _ = _
              ? (0, _.jsx)(_._, {
                  onClick: _,
                  cursor: "pointer",
                  hitSlop: !0,
                })
              : (0, _.jsx)(_._, {}),
            _ = _
              ? {
                  onSecondaryButton: _,
                  actionDescriptionMap: {
                    [_._.SECONDARY]: _._.Localize("#Clear"),
                  },
                }
              : void 0,
            _ = (0, _._)("Combobox", _),
            _ = (0, _.jsx)(_._, {
              beforeContent: _,
              afterContent: _,
              hasValue: _,
              cursor: "pointer",
              tabIndex: 0,
              variant: _,
              navProps: _,
              ..._,
            }),
            _ = (0, _._)(_, _, _, void 0);
          return (0, _.jsx)(_._.Anchor, {
            children: _,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            ..._,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            contrast: "description",
            truncate: !0,
            ..._,
          });
        }
        function _(_, _) {
          if (typeof _ == "string")
            return _.toLocaleLowerCase().includes(_.toLocaleLowerCase());
          try {
            return JSON.stringify(_)
              .toLocaleLowerCase()
              .includes(_.toLocaleLowerCase());
          } catch {}
          return (
            console.error(
              "Could not use default option filter on provided Comboxbox option. Custom filter function required.",
            ),
            !1
          );
        }
        function _(_) {
          return _(_, !1);
        }
        function _(_, _) {
          const {
              rgOptions: _,
              filter: _ = _,
              filterPlaceholder: _,
              selectedValue: _,
              onSelectionChange: _,
              maxSelected: _,
            } = _,
            [_, _] = (0, _.useState)(""),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            _ = (0, _.useMemo)(() => _.filter((_) => _(_, _)), [_, _, _]),
            _ = typeof _ == "number",
            _ = _.length > 0,
            _ = (0, _.useCallback)(
              (_) => {
                _ && !_ && _ && _(0), _(_);
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _ || _(""), _(_);
              },
              [_],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _(_), _ || _(!1);
              },
              [_, _, _],
            ),
            _ = (_) => {
              _(_ ? [] : null), _?.stopPropagation(), _?.preventDefault();
            },
            _ = (0, _.useCallback)(
              (_) => {
                if (!_) _(_);
                else if (!_) _([_]);
                else {
                  const _ = _,
                    _ = _.indexOf(_);
                  if (_ === -1) _(_.concat(_));
                  else return _(_.slice(0, _).concat(_.slice(_ + 1)));
                }
              },
              [_, _, _],
            );
          return {
            activeIndex: _,
            setActiveIndex: _,
            rgFilteredOptions: _,
            selectedValue: _,
            onSelectionChange: _,
            onItemSelectionChange: _,
            onClear: _,
            inputValue: _,
            onInputChange: _,
            bOpen: _,
            setOpen: _,
            filterPlaceholder: _,
            multiselect: _,
            maxSelected: _,
          };
        }
        const _ = {
          Root: _,
          Option: _,
          Options: _,
          VirtualizedOptions: _,
          VirtualizedOption: _,
          VirtualizedContent: _,
          Trigger: _,
          DefaultOptionFilter: _,
          Value: _,
          Placeholder: _,
        };
        function _(_) {
          return _
            ? typeof _ == "string"
              ? _
              : typeof _ == "number"
                ? _.toString()
                : (console.error(
                    "Could not use default option labeler on Combobox option value. Custom labeler requried",
                    _,
                  ),
                  "")
            : "";
        }
        function _(_) {
          const {
              selectedValue: _,
              onSelectionChange: _,
              options: _,
              filter: _,
              filterPlaceholder: _,
              placeholder: _,
              getOptionLabel: _ = _,
              ..._
            } = _,
            _ = (0, _.useCallback)(
              (_, _) => (_ ? _(_, _) : _(_, _(_))),
              [_, _],
            ),
            _ = _({
              onSelectionChange: _,
              selectedValue: _,
              rgOptions: _,
              filter: _,
              filterPlaceholder: _,
            }),
            _ = _ != null;
          return (0, _.jsxs)(_.Root, {
            state: _,
            ..._,
            children: [
              (0, _.jsxs)(_.Trigger, {
                children: [
                  _ &&
                    (0, _.jsx)(_.Value, {
                      children: _(_),
                    }),
                  !_ &&
                    (0, _.jsx)(_.Placeholder, {
                      children: _,
                    }),
                ],
              }),
              (0, _.jsx)(_.Options, {
                children: _.rgFilteredOptions.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      value: _,
                      children: _(_),
                    },
                    _(_),
                  ),
                ),
              }),
            ],
          });
        }
        const _ = Object.assign(_, _);
        function _(_) {
          return _(_, !0);
        }
        function _(_) {
          const {
              selectedValue: _,
              onSelectionChange: _,
              options: _,
              filter: _,
              filterPlaceholder: _,
              placeholder: _,
              getOptionLabel: _ = _,
              maxSelected: _,
              ..._
            } = _,
            _ = (0, _.useCallback)(
              (_, _) => (_ ? _(_, _) : _(_, _(_))),
              [_, _],
            ),
            _ = _({
              onSelectionChange: _,
              selectedValue: _,
              rgOptions: _,
              filter: _,
              filterPlaceholder: _,
              maxSelected: _,
            }),
            _ = Array.isArray(_) && _.length > 0;
          let _ = "";
          if (_) {
            const _ = _.map((_) => _(_));
            "ListFormat" in Intl
              ? (_ = new Intl.ListFormat((0, _._)().strISOCode).format(_))
              : (_ = _.join(", "));
          }
          return (0, _.jsxs)(_.Root, {
            state: _,
            ..._,
            children: [
              (0, _.jsxs)(_.Trigger, {
                children: [
                  _ &&
                    (0, _.jsx)(_.Value, {
                      children: _,
                    }),
                  !_ &&
                    (0, _.jsx)(_.Placeholder, {
                      children: _,
                    }),
                ],
              }),
              (0, _.jsx)(_.Options, {
                children: _.rgFilteredOptions.map((_) =>
                  (0, _.jsx)(
                    _.Option,
                    {
                      value: _,
                      children: _(_),
                    },
                    _(_),
                  ),
                ),
              }),
            ],
          });
        }
        const _ = Object.assign(_, _),
          _ = (0, _.createContext)(null);
        function _(_) {
          const _ = (0, _.useContext)(_);
          return (
            _ || console.error(`${_} must be used within a <Combobox>!`), _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { extracted: _, remaining: _ } = (0, _._)(_),
            {
              value: _,
              onTextChange: _,
              onTextClear: _,
              clearable: _,
              onChange: _,
              radius: _,
              variant: _,
              size: _,
              beforeContent: _,
              afterContent: _,
              inputRef: _,
              ref: _,
              disabled: _,
              gamepadFocusable: _ = !0,
              status: _,
              ..._
            } = _,
            _ = (0, _._)(),
            _ = (_) => {
              _ || (_(_.target.value), _ && _(_));
            },
            _ = () => {
              _(""), _ && _();
            },
            _ = !!_ && _,
            _ = _
              ? (0, _.jsx)(_._, {
                  onClick: _,
                  cursor: "pointer",
                  hitSlop: !0,
                })
              : _,
            _ = (0, _._)("TextInput", _),
            _ = {
              ..._,
              variant: _,
              size: _,
              radius: _,
              status: _,
              beforeContent: _,
              afterContent: _,
              ref: _,
              disabled: _,
            },
            _ = (0, _.useRef)(null),
            _ = (_) => {
              _.current && _.target !== _.current && _.current.focus();
            },
            _ = _ && _,
            _ = _ ? _ : "input",
            _ =
              _ && _ && !_
                ? {
                    onSecondaryButton: _,
                    actionDescriptionMap: {
                      [_._.SECONDARY]: _._.Localize("#Clear"),
                    },
                  }
                : {};
          return (0, _.jsx)(_._, {
            cursor: "text",
            ..._,
            onClick: _,
            children: (0, _.jsx)(_, {
              ref: (0, _._)(_, _),
              type: "text",
              "aria-disabled": _,
              readOnly: _,
              className: _()((0, _._)(), (0, _._)()),
              value: _ || "",
              onChange: _,
              ..._,
              ..._,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            noFocusRing: !0,
            ..._,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { depth: _ } = useContext(_);
          return jsx(_.Provider, {
            value: {
              depth: _ + 1,
            },
            children: jsx(Box, {
              ..._,
            }),
          });
        }
        const _ = _.createContext({
          depth: 0,
        });
        function _() {
          return (0, _.useContext)(_).depth;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { level: _ = "auto", className: _, color: _ } = _,
            _ = _(),
            _ = _(_, _);
          return (0, _.jsx)(_, {
            ...(0, _._)(
              {
                ..._,
                className: _()((0, _._)(), _.Heading, _),
              },
              _,
            ),
          });
        }
        const _ = [
          ..._._,
          ..._._,
          {
            prop: "size",
            responsive: !0,
            className: (_) => _[`HeadingSize-${_}`],
          },
        ];
        function _(_, _) {
          if (_ === "auto" && _ === 0) return "h1";
          const _ = _ === "auto" ? _.toString() : _;
          return /^[1-6]$/.test(_)
            ? "h" + _
            : _ === "auto"
              ? (console.error(
                  '<Section> nesting has exceeded "h6" for headings.',
                ),
                "h6")
              : (console.error(
                  `Attempt to render invalid heading level, "${_}".`,
                ),
                "h1");
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_, _) {
          return _ === void 0 ? _[""] : _[_];
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          _: {
            Constructor: _,
          },
          _: {
            Constructor: _,
          },
          _: {
            Constructor: _,
          },
          _: {
            Constructor: _,
          },
          strike: {
            Constructor: _,
          },
          color: {
            Constructor: _,
          },
        };
        function _(_) {
          return (0, _.jsx)("b", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("i", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("u", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("code", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("s", {
            children: _.children,
          });
        }
        function _(_) {
          const _ = (0, _._)(_.args),
            _ = {};
          return (
            _ &&
              (_.match(/^#[a-fA-F0-9]+$/) || _.match(/rgba?\([0-9, ]+\)$/)) &&
              (_.color = _),
            (0, _.jsx)("span", {
              style: _,
              children: _.children,
            })
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = {
          _: {
            Constructor: _,
            skipFollowingNewline: !0,
          },
          _: {
            Constructor: _,
            skipFollowingNewline: !0,
          },
          _: {
            Constructor: _,
            skipFollowingNewline: !0,
          },
          code: {
            Constructor: _,
            skipFollowingNewline: !0,
          },
          quote: {
            Constructor: _,
            skipFollowingNewline: !0,
            skipInternalNewline: !0,
          },
          _: {
            Constructor: _,
            skipFollowingNewline: !0,
          },
        };
        function _(_) {
          return (0, _.jsx)("h1", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("h2", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("h3", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("pre", {
            className: _().CodeBlock,
            children: (0, _.jsx)("code", {
              children: _.children,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)("blockquote", {
            children: _.children,
          });
        }
        function _(_) {
          return jsxs(Fragment, {
            children: [
              jsx("div", {
                className: styles.ClearFloat,
              }),
              _.children,
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("hr", {}), _.children],
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.Children.toArray(_)[0];
          return typeof _ == "string" ? _ : void 0;
        }
        function _(_, _) {
          if (!_) return;
          const _ = _.startsWith("steamcommunity.com/") ? "https://" + _ : _;
          if (_.match(/^https?:\/\//))
            return {
              strURL: _,
              bFromBody: !1,
              bHasCustomText: !_?.match(/^https?:\/\//i),
            };
        }
        function _(_) {
          const _ = (0, _._)(_.args) ?? (0, _._)(_.args, "href");
          if (_) return _(_, _(_.children));
          if (typeof _.children == "string") {
            const _ = _.children.trim();
            if (_._.exec(_)?.[0] == _)
              return {
                strURL: _,
                bFromBody: !0,
                bHasCustomText: !1,
              };
          }
        }
        function _(_) {
          const _ = _(_);
          if (!_) return _.children;
          if (_.bFromBody)
            return (0, _.jsx)(_, {
              strURL: _.strURL,
            });
          const _ = (0, _._)(_.strURL) ? (0, _._)(_.strURL) : _.strURL;
          return (0, _.jsx)(_._, {
            target: "_blank",
            href: _,
            underline: "auto",
            contrast: "title",
            children: _.children,
          });
        }
        function _(_) {
          const _ = _.strURL.match(/^[a-z][a-z0-9+.-]*:/i)
              ? _.strURL
              : "http://" + _.strURL,
            _ = (0, _._)(_) ? (0, _._)(_) : _;
          return (0, _.jsx)(_._, {
            target: "_blank",
            href: _,
            underline: "auto",
            contrast: "title",
            children: _.strURL,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = {
          list: {
            Constructor: _,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          olist: {
            Constructor: _,
            skipInternalNewline: !0,
            skipFollowingNewline: !0,
          },
          "*": {
            Constructor: _,
            autocloses: !0,
          },
        };
        function _(_) {
          return (0, _.jsx)("ul", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("ol", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("li", {
            children: _.children,
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          FilterBorder: "_3xFYpKNlOZ6xjQ529ZgRbr",
          Top: "_310cGk80jWCZr6LxeueX_5",
          Bottom: "nLYMJhpffeKLN_8VkTcD_",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Heading: "_12ldq1_X5RuLWAAs_ODwt7",
          "HeadingSize-1": "-YHuRmP6nUp0IqPQ4F3wk",
          "HeadingSize-2": "_20m6yPkrPwQ8XwlhPdMtqu",
          "HeadingSize-3": "_2jvih9p3Mc3zUn2nnxzDv7",
          "HeadingSize-4": "_1zvMJY9dUjwMSI0j5QoEdq",
          "HeadingSize-5": "_1196Oisy8jDA4szPu-KrKP",
          "HeadingSize-6": "R1W-zMFN4WGw9JK48Yqez",
          "HeadingSize-7": "Ena8Nl7MJg7YAYsWql_jo",
          "HeadingSize-8": "jyf9-rlT4iFrHQOAVn298",
          "HeadingSize-9": "_3L0vs4_Y96AtsR3P5GUkUa",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CodeBlock: "OkZ2olcxw9WPWea9VGVr6",
          ClearFloat: "RRZZP47ujIKbmOpZ61w_T",
        };
      },
    },
  ]);
})();

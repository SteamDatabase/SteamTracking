(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [96253],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              checked: _,
              onChange: _,
              disabled: _,
              children: _,
              ref: _,
              variant: _,
              color: _,
              align: _ = "center",
              icon: _,
              ..._
            } = _,
            _ = _ === "indeterminate",
            _ = _ != null ? _ : _ ? _ : _._,
            _ = () => {
              _ || (_ && _(_ ? !0 : !_));
            },
            _ = (_) => {
              _ ||
                (_.key === " " &&
                  (_(), _.preventDefault(), _.stopPropagation()));
            },
            _ = (0, _._)("Checkbox", _);
          return (0, _.jsxs)(_._, {
            align: _,
            ref: _,
            role: "checkbox",
            "aria-checked": _ ? "mixed" : _,
            "data-state": _(_),
            className: _()(_.Root, _[`Variant-${_}`], _ && _.Disabled),
            onClick: _,
            tabIndex: 0,
            onKeyDown: _,
            cursor: "default",
            "aria-disabled": _,
            "data-accent-color": _,
            ..._,
            children: [
              (0, _.jsx)("div", {
                className: _.Checkbox,
                children:
                  _ &&
                  (0, _.jsx)(_, {
                    className: _.Icon,
                  }),
              }),
              _,
            ],
          });
        }
        function _(_) {
          return _ === "indeterminate" ? _ : _ ? "checked" : "unchecked";
        }
        function _(_) {
          return (0, _.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, _.jsx)("path", {
              _: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
              fill: "currentColor",
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              children: _,
              beforeContent: _,
              afterContent: _,
              hasValue: _,
              ..._
            } = _,
            _ = _(_);
          return (0, _.jsxs)(_._, {
            ..._,
            align: "center",
            "data-has-value": !!_,
            minWidth: "0",
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  paddingRight: "2",
                  children: _,
                }),
              (0, _.jsx)(_._, {
                flexGrow: "1",
                minWidth: "0",
                children: _,
              }),
              _ &&
                (0, _.jsx)(_._, {
                  paddingLeft: "2",
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const {
              variant: _ = "basic",
              size: _ = "2",
              radius: _,
              focusable: _ = !0,
              hoverable: _ = !0,
              clickable: _ = !0,
              disabled: _,
              className: _,
              status: _,
              color: _,
              ..._
            } = _,
            _ = _ === "underline" ? "none" : _;
          return (0, _._)(
            {
              ..._,
              radius: _,
              "data-status": _,
              "data-dull-color": _ && _ !== "dull" ? _ : void 0,
              className: _()(
                _.ControlBox,
                _ && !_ && _.Focusable,
                _ && !_ && _.Hoverable,
                _ && !_ && _.Clickable,
                _ && _.Disabled,
                _[`Variant-${_}`],
                _[`Size-${_}`],
                _,
              ),
            },
            _._,
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _() {
          return _.TextEntry;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)(null);
        function _(_) {
          const { children: _, ..._ } = _,
            _ = _(_);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = _.Children.only(_),
            _ = (0, _.useContext)(_);
          return _
            ? _
              ? (0, _.cloneElement)(_, {
                  ..._.getReferenceProps(_.props),
                  ref: (0, _._)(_.props.ref, _.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function _(_) {
          const { children: _, className: _, ref: _, label: _ } = _,
            _ = (0, _.useContext)(_),
            _ = (0, _._)([_, _ == null ? void 0 : _.floating.refs.setFloating]);
          if (!_)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!_.open) return null;
          let _ = _.Children.only(_),
            _ = _.Fragment;
          return (
            _.type == _.FocusManager &&
              ((_ = _.Children.only(_.props.children)), (_ = _)),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_._, {
                presentation: _.presentation,
                sizing: _.sizing,
                floatingRef: _,
                floatingProps: _.getFloatingProps(),
                floatingStyles: _.floating.floatingStyles,
                referenceElement: _.floating.elements.domReference,
                className: _()((0, _._)(), _),
                label: _,
                children: _,
              }),
            })
          );
        }
        function _(_) {
          return (0, _._)()
            ? (0, _.jsx)(_, {
                ..._,
              })
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _.useContext)(_);
          (0, _._)(
            !!_,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const _ = () => _.floating.context.onOpenChange(!1),
            _ = _.useRef(void 0);
          return (
            (0, _._)(_, !0, !0),
            (0, _.jsx)(_._, {
              navID: "Popover",
              onCancelButton: _,
              modal: !0,
              navTreeRef: _,
              children: (0, _.jsx)("div", {
                style: {
                  display: "contents",
                },
                children: (0, _.jsx)(_._, {
                  children: _,
                }),
              }),
            })
          );
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _.useContext)(_);
          return (
            (0, _._)(
              !!_,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, _.jsx)(_._, {
              context: _.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: _,
            })
          );
        }
        function _(_) {
          const {
            open: _,
            interactions: _ = {},
            width: _,
            maxHeight: _,
            gutter: _,
            scroll: _,
          } = _;
          let _ = _;
          const _ = (0, _._)(_.presentation),
            _ = _(_, _, _),
            _ = {
              enabled: !!_.click,
            },
            _ = typeof _.click == "function" ? _.click(_) : _,
            _ = (0, _._)(_.context, _),
            _ = {
              enabled: !!_.focus,
            },
            _ = typeof _.focus == "function" ? _.focus(_) : _,
            _ = (0, _._)(_.context, _),
            _ = {
              handleClose: (0, _._)(),
            },
            _ = typeof _.hover == "function" ? _.hover(_) : _,
            _ = (0, _._)(_.context, {
              enabled: !!_.hover,
              ..._,
            }),
            _ = (0, _._)(_.context),
            { getFloatingProps: _, getReferenceProps: _ } = (0, _._)([
              _,
              _,
              _,
              _,
            ]);
          return {
            floating: _,
            getFloatingProps: _,
            getReferenceProps: _,
            open: _,
            presentation: _,
            sizing: {
              width: _,
              maxHeight: _,
              gutter: _,
              scroll: _,
            },
          };
        }
        function _(_, _, _) {
          const { onOpenChange: _, placement: _ } = _,
            _ = _ === "anchor";
          return (0, _._)({
            open: _,
            onOpenChange: _,
            middleware: _ ? _(_) : [],
            whileElementsMounted: _ ? _._ : void 0,
            placement: _ && typeof _ == "object" ? _.initial : _,
            strategy: "fixed",
            platform: {
              ..._._,
              getOffsetParent: (_) => {
                var _, _;
                return (_ =
                  (_ = _ == null ? void 0 : _.ownerDocument) == null
                    ? void 0
                    : _.defaultView) != null
                  ? _
                  : window;
              },
            },
          });
        }
        function _(_) {
          const { gutter: _ = 0, placement: _ } = _,
            _ = [],
            _ = _ && typeof _ == "object";
          return (
            _ && _.offset
              ? _.push((0, _._)(_.offset))
              : (!_ || _.offset === void 0) && _.push((0, _._)(2)),
            _ && _.flip
              ? _.push((0, _._)(_.flip))
              : (!_ || _.flip === void 0) && _.push((0, _._)()),
            _ && _.shift
              ? _.push((0, _._)(_.shift))
              : (!_ || _.shift === void 0) && _.push((0, _._)()),
            _.push(
              (0, _._)({
                apply: (_) => {
                  const { rects: _, elements: _, availableHeight: _ } = _,
                    _ = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((_.scroll && (_.overflowY = "auto"), _.width)) {
                    case "target": {
                      _.width = `${_.reference.width}px`;
                      break;
                    }
                    case "content": {
                      _.width = `${_.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let _ = _.reference.width;
                      _.floating.width > _ && _ < 200 && (_ = _.floating.width),
                        (_.width = `${_}px`);
                    }
                  }
                  typeof _.width == "function" &&
                    (_.width = _.width({
                      unContentWidth: _.floating.width,
                      unTargetWidth: _.reference.width,
                    }));
                  const _ =
                    typeof _ == "number" ? `${_}px` : `var(--spacing-${_})`;
                  typeof _.maxHeight == "function"
                    ? (_.maxHeight = _.maxHeight({
                        unAvailableHeight: _,
                        gutter: _,
                      }))
                    : typeof _.maxHeight == "number"
                      ? (_.maxHeight = `min( calc( ${_}px - ${_} ), ${_.maxHeight}px )`)
                      : typeof _ == "number"
                        ? (_.maxHeight = `${_ - _}px`)
                        : (_.maxHeight = `calc( ${_}px - var(--spacing-${_}) )`),
                    Object.assign(_.floating.style, _),
                    _.floating.style.setProperty(
                      "--popover-max-height",
                      _.maxHeight,
                    );
                },
              }),
            ),
            _
          );
        }
        const _ = {
          Root: _,
          Anchor: _,
          Positioner: _,
          FocusManager: _,
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          const { render: _, ..._ } = _;
          return (0, _._)(
            _,
            (0, _.jsx)(_._, {
              radius: "sm",
              background: "dull-8",
              className: _.ListBox,
            }),
            {
              role: "listbox",
              ..._,
            },
          );
        }
        function _(_) {
          const {
              selected: _,
              focused: _,
              label: _ = null,
              render: _,
              disabled: _,
              ..._
            } = _,
            _ = _ ? "true" : "false",
            _ = _ ? "true" : void 0;
          return (0, _._)(
            _,
            (0, _.jsx)(_._, {
              focusable: !0,
              "data-selected": _,
              "data-focused": _,
              "aria-disabled": _,
              className: _.ListBoxOption,
              paddingY: "2",
              paddingX: "3",
            }),
            {
              role: "option",
              ..._,
            },
            {
              selected: _,
              focused: _,
              disabled: _,
            },
          );
        }
        const _ = Object.assign(_, {
          Option: _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)(null);
        function _(_) {
          const { children: _, state: _ } = _;
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = _.Children.only(_),
            _ = (0, _.useContext)(_),
            _ = (0, _._)([
              _ == null ? void 0 : _.floating.refs.setReference,
              _ == null ? void 0 : _.props.ref,
            ]);
          if (!_) return null;
          if (!_)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: _, ..._ } = _.props;
          return (0, _.cloneElement)(_, {
            ref: _,
            ..._.getReferenceProps(_),
          });
        }
        function _(_) {
          const { children: _, render: _, ref: _, label: _ } = _,
            _ = (0, _.useContext)(_),
            _ = (0, _._)([_, _ == null ? void 0 : _.floating.refs.setFloating]);
          return _
            ? _.open
              ? (0, _.jsx)(_, {
                  state: _,
                  children: (0, _.jsx)(_._, {
                    presentation: _.presentation,
                    sizing: _.sizing,
                    floatingRef: _,
                    floatingProps: _.getFloatingProps(),
                    floatingStyles: _.floating.floatingStyles,
                    referenceElement: _.floating.elements.domReference,
                    label: _,
                    children: (0, _.jsx)(_, {
                      render: _,
                      children: (0, _.jsx)(_._, {
                        elementsRef: _.elementsRef,
                        labelsRef: _.labelsRef,
                        children: _,
                      }),
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        }
        function _(_) {
          return (0, _._)()
            ? (0, _.jsx)(_, {
                ..._,
              })
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        function _(_) {
          const { state: _, children: _ } = _,
            _ = () => _.floating.context.onOpenChange(!1),
            _ = _.useRef(void 0);
          return (
            (0, _._)(_, !0, !0),
            (0, _.jsx)(_._, {
              navID: "PopoverList",
              onCancelButton: _,
              modal: !0,
              navTreeRef: _,
              children: _,
            })
          );
        }
        function _(_) {
          const { state: _, children: _ } = _;
          return (0, _.jsx)(_._, {
            context: _.floating.context,
            initialFocus: _.initialFocus,
            returnFocus: !1,
            children: _,
          });
        }
        function _(_) {
          const {
              children: _,
              label: _,
              selected: _,
              onSelect: _,
              ref: _,
              disabled: _,
              ..._
            } = _,
            _ = (0, _.useContext)(_),
            { ref: _, index: _ } = (0, _._)({
              label: _,
            }),
            _ = (0, _._)([_, _]);
          if (!_)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const _ = _ === _.activeIndex,
            _ = _ === _.selectedIndex || !!_;
          return (0, _.jsx)(_.Option, {
            ref: _,
            selected: _,
            focused: _,
            role: "option",
            tabIndex: 0,
            ..._.getItemProps({
              onClick: _ ? void 0 : _,
              onKeyDown: (_) => {
                !_ &&
                  (_.key === "Enter" ||
                    (_.key === " " && !_.typingRef.current)) &&
                  (_(_), _.preventDefault(), _.stopPropagation());
              },
              active: _,
              selected: _,
              disabled: _,
              ..._,
            }),
            children: _,
          });
        }
        function _(_) {
          const {
            open: _,
            activeIndex: _,
            setActiveIndex: _,
            selectedIndex: _,
            setSelectedIndex: _,
            interactions: _ = {},
            role: _,
            width: _,
            maxHeight: _,
            gutter: _,
            scroll: _,
          } = _;
          let _ = _;
          const _ = (0, _._)(_.presentation),
            _ = (0, _._)(_, _, _),
            _ = (0, _._)(_.context, {
              enabled: !!_.click,
            }),
            _ = (0, _._)(_.context, {
              enabled: !!_.focus,
            }),
            _ = (0, _._)(_.context),
            _ = (0, _.useRef)([]),
            _ = (0, _._)(_.context, {
              listRef: _,
              activeIndex: _,
              selectedIndex: _,
              onNavigate: _,
              virtual: !!_.virtualItemFocus,
              loop: !0,
              focusItemOnOpen: !1,
            }),
            _ = (0, _.useRef)([]),
            _ = (0, _.useRef)(!1),
            _ = (0, _._)(_.context, {
              enabled: !!_.typeahead,
              listRef: _,
              activeIndex: _,
              selectedIndex: _,
              onMatch: _ ? _ : _,
              onTypingChange: (_) => (_.current = _),
            }),
            _ = (0, _._)(_.context, {
              role: _,
            }),
            {
              getFloatingProps: _,
              getReferenceProps: _,
              getItemProps: _,
            } = (0, _._)([_, _, _, _, _, _]);
          return {
            floating: _,
            getFloatingProps: _,
            getReferenceProps: _,
            getItemProps: _,
            open: _,
            activeIndex: _,
            selectedIndex: _,
            setSelectedIndex: _,
            elementsRef: _,
            labelsRef: _,
            typingRef: _,
            initialFocus: _.virtualItemFocus ? -1 : void 0,
            presentation: _,
            sizing: {
              width: _,
              maxHeight: _,
              gutter: _,
              scroll: _,
            },
          };
        }
        const _ = {
          Root: _,
          Anchor: _,
          Positioner: _,
          Item: _,
        };
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)(null);
        function _(_) {
          const {
              variant: _,
              radius: _,
              size: _,
              status: _,
              color: _,
              children: _,
              value: _,
              onValueChange: _,
            } = _,
            [_, _] = (0, _.useState)({}),
            _ = (0, _.useCallback)(
              (_, _) =>
                _((_) => ({
                  ..._,
                  [_]: _,
                })),
              [],
            ),
            _ = (0, _.useCallback)(
              (_, _) =>
                _((_) => {
                  const _ = {
                    ..._,
                  };
                  return _[_] === _ && delete _[_], _;
                }),
              [],
            ),
            _ = (_) => {
              let _ = 0;
              switch (_.key) {
                case " ":
                case "Enter":
                case "ArrowRight":
                  _ = 1;
                  break;
                case "ArrowLeft":
                  _ = -1;
                  break;
              }
              if (_) {
                const _ = Array.from(Object.values(_)).sort(_);
                let _;
                if (_ === null) _ = _ > 0 ? 0 : _.length - 1;
                else {
                  const _ = _[_],
                    _ = _.findIndex((_) => _ === _);
                  (0, _._)(
                    typeof _ == "number",
                    "Could not find current segmented value position",
                  ),
                    (_ = _ + _);
                }
                const _ = _[_ < 0 ? _.length + _ : _ % _.length],
                  _ = Object.keys(_).find((_) => _[_] === _);
                typeof _ != "string"
                  ? console.error("Could not find next segmeneted value")
                  : (_(_), _.stopPropagation(), _.preventDefault());
              }
            },
            _ = (0, _._)("SegmentedControl", _),
            _ = (0, _.useMemo)(
              () => ({
                value: _,
                onValueChange: _,
                register: _,
                unregister: _,
                radius: _,
                size: _,
              }),
              [_, _, _, _, _, _],
            );
          return (0, _.jsx)(_._, {
            clickable: !1,
            hoverable: !1,
            focusable: !1,
            variant: _,
            radius: _,
            size: _,
            status: _,
            className: _()(_.SegmentedControlBox, _[`Variant-${_}`]),
            tabIndex: 0,
            onKeyDown: _,
            children: (0, _.jsx)(_.Provider, {
              value: _,
              children: (0, _.jsxs)(_._, {
                className: _.SegmentedControl,
                style: {
                  "--outer-radius": `var(--radius-${_})`,
                },
                children: [
                  _,
                  _ !== null &&
                    (0, _.jsx)(_, {
                      radius: _,
                      color: _,
                    }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const { value: _, children: _, disabled: _ } = _,
            _ = (0, _.useContext)(_),
            [_, _] = (0, _.useState)(),
            { register: _, unregister: _ } = _ || {};
          if (
            ((0, _.useEffect)(
              () => (!_ || !_ || !_ ? () => {} : (_(_, _), () => _(_, _))),
              [_, _, _, _],
            ),
            !_)
          )
            return null;
          const { value: _, onValueChange: _, radius: _, size: _ } = _,
            _ = _ === _,
            _ = (_) => {
              _.stopPropagation(), _.preventDefault(), !(_ || _) && _(_);
            },
            _ = _ === void 0 ? _ : _;
          return (0, _.jsx)(_._, {
            justify: "center",
            align: "center",
            ref: _,
            onClick: _,
            "data-selected": _ ? "true" : "false",
            className: _()(_.Item, _ && _[`Size-${_}`], _ ? _.disabled : ""),
            children: _,
          });
        }
        function _(_) {
          const { options: _, getOptionLabel: _ = (_) => _, ..._ } = _;
          return (0, _.jsx)(_.Root, {
            ..._,
            children: _.map((_) =>
              (0, _.jsx)(
                _.Item,
                {
                  value: _,
                  children: _(_),
                },
                _,
              ),
            ),
          });
        }
        (_.Item = _), (_.Root = _);
        function _(_) {
          const { radius: _, color: _ } = _;
          return (0, _.jsx)(_._, {
            className: _.IndicatorPosition,
            children: (0, _.jsx)("div", {
              className: _.Indicator,
              "data-accent-color": _,
            }),
          });
        }
        function _(_, _) {
          const _ = _.compareDocumentPosition(_);
          return _ & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : _ & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
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
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = (0, _.useMemo)(
              () =>
                _.rgOptions.findIndex((_) =>
                  _.multiselect
                    ? _.selectedValue.includes(_)
                    : _ === _.selectedValue,
                ),
              [_.selectedValue, _.rgOptions, _.multiselect],
            ),
            _ = (0, _.useRef)(null),
            _ = {
              ..._,
              ..._,
              focusedValue: _,
              onFocusChange: _,
              refPopover: _,
              popoverLabel: _,
              setOpen: (_) => {
                _ && _(_.multiselect ? _.selectedValue[0] : _.selectedValue),
                  _.setOpen(_);
              },
              focusedIndex: _,
              onFocusedIndexChange: _,
            },
            _ = (0, _._)({
              open: _.bOpen,
              onOpenChange: _.setOpen,
              width: _,
              maxHeight: _,
              placement: _,
              presentation: _,
              selectedIndex: _,
              setSelectedIndex: (_) => _.onItemSelectionChange(_.rgOptions[_]),
              activeIndex: _,
              setActiveIndex: _,
              gutter: "4",
              interactions: {
                click: !0,
                typeahead: !0,
              },
              role: "select",
              scroll: !0,
            });
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)(_._.Root, {
              state: _,
              children: _,
            }),
          });
        }
        function _(_) {
          const { refPopover: _, popoverLabel: _ } = _("<Select.Options>");
          return (0, _.jsx)(_._.Positioner, {
            ref: _,
            label: _,
            children: _.children,
          });
        }
        function _(_) {
          const { value: _, children: _, disabled: _, ..._ } = _,
            {
              onItemSelectionChange: _,
              multiselect: _,
              selectedValue: _,
              maxSelected: _,
            } = _("<SelectTrigger>"),
            _ = typeof _ == "string" ? _ : void 0;
          let _ = !1,
            _ = !1;
          _
            ? ((_ = Array.isArray(_) && _.includes(_)),
              (_ = !!_ && Array.isArray(_) && _.length >= _))
            : (_ = _ === _);
          const _ = _ || (_ && !_);
          return (0, _.jsxs)(_._.Item, {
            label: _,
            onSelect: () => _(_),
            selected: _,
            disabled: _,
            ..._,
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
          const { children: _, render: _ } = _,
            {
              bOpen: _,
              setOpen: _,
              selectedValue: _,
              variant: _,
              size: _,
              radius: _,
              status: _,
              color: _,
              rgOptions: _,
              multiselect: _,
              onClear: _,
              focusedValue: _,
              onFocusChange: _,
              onSelectionChange: _,
              clearable: _,
              focusedIndex: _,
              onItemSelectionChange: _,
              onFocusedIndexChange: _,
              refPopover: _,
              popoverLabel: _,
              placeholder: _,
              maxSelected: _,
              ..._
            } = _("<SelectTrigger>"),
            _ = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => _(!_),
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
            _ = (0, _._)("Select", _),
            _ = (0, _.jsx)(_._, {
              afterContent: _,
              variant: _,
              size: _,
              radius: _,
              status: _,
              color: _,
              hasValue: _,
              tabIndex: 0,
              cursor: "pointer",
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
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            contrast: "description",
            truncate: !0,
            children: _.children,
          });
        }
        function _(_) {
          return _(_, !1);
        }
        function _(_, _) {
          const { onSelectionChange: _, selectedValue: _, ..._ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useCallback)(
              (_) => {
                _(_), _ || _(!1);
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _(_ ? [] : null),
                  _ == null || _.stopPropagation(),
                  _ == null || _.preventDefault();
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                if (!_) _(_);
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
            onSelectionChange: _,
            onItemSelectionChange: _,
            onClear: _,
            bOpen: _,
            setOpen: _,
            multiselect: _,
            selectedValue: _,
            ..._,
          };
        }
        const _ = {
          Root: _,
          Option: _,
          Options: _,
          Trigger: _,
          Value: _,
          Placeholder: _,
        };
        function _(_) {
          return typeof _ == "string"
            ? _
            : typeof _ == "number"
              ? _.toString()
              : (console.error(
                  "Could not use default option labeler on Select option value. Custom labeler requried",
                  _,
                ),
                "");
        }
        function _(_) {
          const {
              selectedValue: _,
              onSelectionChange: _,
              options: _,
              placeholder: _,
              getOptionLabel: _ = _,
              ..._
            } = _,
            _ = _({
              onSelectionChange: _,
              selectedValue: _,
              rgOptions: _,
              placeholder: _,
            }),
            _ = _ != null,
            _ = _ ? _(_) : "";
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
                children: _.rgOptions.map((_, _) =>
                  (0, _.jsx)(
                    _.Option,
                    {
                      value: _,
                      children: _(_),
                    },
                    _,
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
        const _ = _;
        function _(_) {
          const {
              selectedValue: _,
              onSelectionChange: _,
              options: _,
              placeholder: _,
              getOptionLabel: _ = _,
              maxSelected: _,
              ..._
            } = _,
            _ = _({
              onSelectionChange: _,
              selectedValue: _,
              rgOptions: _,
              placeholder: _,
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
                children: _.rgOptions.map((_, _) =>
                  (0, _.jsx)(
                    _.Option,
                    {
                      value: _,
                      children: _(_),
                    },
                    _,
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
          return _ || console.error(`${_} must be used within a <Select>!`), _;
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
          _ = __webpack_require__._(_);
        function _(_) {
          return (0, _.jsx)("svg", {
            ..._(_),
          });
        }
        const _ = [
          ..._._,
          {
            prop: "size",
            responsive: !0,
            className: (_) => _[`IconSize-${_}`],
          },
          {
            prop: "color",
            className: _.Color,
            cssProperty: (_) => ["--icon-color", _(_)],
          },
          {
            prop: "hitSlop",
            className: _.HitSlop,
            cssProperty: (_) => [
              "--hit-slop-custom",
              typeof _ == "string" ? _ : "",
            ],
          },
          _._.find(({ prop: _ }) => _ === "cursor"),
        ];
        function _(_) {
          return !_ || _[0] === "#" ? _ : (0, _._)(_);
        }
        function _(_) {
          const { viewBox: _, ..._ } = _,
            _ = {
              className: _.size ? void 0 : _.IconSizeDefault,
              ..._,
            };
          return _ && (_.viewBox = _(_)), (0, _._)(_, _);
        }
        function _(_) {
          if (_)
            return typeof _ == "number"
              ? `0 0 ${_} ${_}`
              : typeof _ == "string"
                ? _
                : `0 0 ${_.width} ${_.height}`;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_._, {
            ..._,
            viewBox: 16,
            children: (0, _.jsx)("path", {
              _: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
              fill: "currentColor",
            }),
          });
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
          _: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function _(_) {
          const { direction: _ = "down" } = _,
            _ = _[_];
          return (0, _.jsx)(_._, {
            ..._,
            viewBox: 20,
            children: (0, _.jsx)("path", {
              transform: _,
              _: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_._, {
            ..._,
            viewBox: 12,
            children: (0, _.jsx)("path", {
              _: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
              fill: "currentColor",
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 47608, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 29930, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48465, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14027, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 19661, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94654, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 83996, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 47759, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 37140, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81194, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 71744, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 59845, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 30308, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 51380, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 787, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 36691, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 21579, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 83924, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 97284, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 44373, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 32561, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17423, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 52757, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 30175, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 6128, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 41052, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 95773, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 66563, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 75178, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 14028, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 90778, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 1291, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return typeof _ == "function" ? _(_, _) : _.cloneElement(_, _);
        }
        function _(_, _, _, _) {
          return _(_ || _, _, _);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _() {
          return (0, _._)().languages[0];
        }
      },
      chunkid: (module) => {
        module.exports = {
          Root: "_1kIuUssJvopWbHik1IKMG6",
          "Variant-light": "zcrlDqGBY0Lrl7faLFoJI",
          "Variant-dark": "_3b6kFRuG8ILziz88w8GESp",
          "Variant-outline": "wlcXkTKJWe-SE0fCwIRwQ",
          Disabled: "kLcGKsNxkoEqxgok6YzML",
          Checkbox: "_3babFLLB0YYBf8znrlE7Dt",
          Icon: "cngAYeP7ZvFo2pT_v3-xO",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
          "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
          "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
          "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
          Focusable: "_1cd-wdIp5lIWsydAxII-vY",
          "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
          "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
          "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
          "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
          "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
          ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
          Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
          Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
          Disabled: "_2I6xXve3oCxh8fra7SWTnq",
          "Size-1": "_2e1xlPghh48rkP13ydQOPb",
          "Size-2": "B7HtDxiiORArIRcBR9kVB",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
          ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TextEntry: "_1vE-LsK6l_D_5yjbywZV1p",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SegmentedControlBox: "_3tuJ3SHrhBu16Q7GZBtKyt",
          Indicator: "_2OvUYpkiij1e7K-4vW8i9W",
          SegmentedControl: "_3XFGk1-WmLNC9KlGi7IYtN",
          IndicatorPosition: "_1Dgxrv7wtUW1EViSgrdMlA",
          Item: "_2aNlsjcdOdHOtP8uACA3bM",
          "Size-1": "_2Y43gK-c1jI0x35n45iZ0",
          "Size-3": "_3ohjaEz8PkzSzIrIZKEdt9",
          disabled: "_3gVhaCZ4k3QSnF9WhRZk5m",
          "Variant-basic": "d2NNa31iY_ztalFCMja9O",
          "Variant-inset": "_1FRhoIifZWCKbnl4jrnmG2",
          "Variant-inset-glass": "_1gVVovvLBjwCxSH4wWUabt",
          "Variant-dim": "_3qc1Re1q3AH_JYfN49uj8r",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Color: "_2Vc3a-PM4tOhJcD72NEq1U",
          IconSizeDefault: "_20lX82QaoUw-iHboSsmZBI",
          "IconSize-1": "_1zRMg9IjPqEIAejKQDDLYW",
          "IconSize-2": "_3dn_hJnXYKfl38rjqz4y91",
          "IconSize-3": "_2aoIykgGddbEHeCGgMR79l",
          "IconSize-4": "_1Ypu_MleveHHMyLy8PVNy",
          "IconSize-5": "e8vp9esm_uAhUEdfq5zjr",
          "IconSize-6": "hXAsxCohKrk8qBq6Enfgt",
          "IconSize-7": "_5TifSVb5dMP2wAaHIDqM_",
          "IconSize-8": "_32KP-QSJpecoxuWZfWkqmy",
          "IconSize-9": "_3TcYJ4xwprVIVhcdzwF17m",
          HitSlop: "_1tiFDvBjIAQRZDbVwz8k2u",
        };
      },
    },
  ]);
})();

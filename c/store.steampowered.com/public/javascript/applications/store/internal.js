(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [29456],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
        var _ = __webpack_require__("chunkid"),
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
            _ = _ ?? (_ ? _ : _),
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
            _ = (0, _._)([_, _?.floating.refs.setFloating]);
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
              getOffsetParent: (_) => _?.ownerDocument?.defaultView ?? window,
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = Object.assign(_, {
          Root: _,
          Track: _,
          Range: _,
          Handle: _,
        });
        function _(_) {
          const {
              value: _,
              onValueChange: _,
              onValueSettled: _,
              min: _,
              ..._
            } = _,
            _ = [_],
            _ = (0, _.useCallback)((_) => _(_[0]), [_]),
            _ = (0, _.useCallback)((_) => _?.(_[0]), [_]);
          return (0, _.jsxs)(_, {
            ..._,
            min: _,
            onValueChange: _,
            onValueSettled: _,
            value: _,
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  start: _,
                  end: _,
                }),
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _(_) {
          const { value: _ } = _;
          return (0, _.jsxs)(_, {
            ..._,
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  start: _[0],
                  end: _[1],
                }),
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        const _ = (0, _.createContext)(null);
        function _(_) {
          const { children: _, color: _, ..._ } = _,
            {
              min: _,
              max: _,
              onValueChange: _,
              value: _,
              step: _ = 1,
              onValueSettled: _,
            } = _,
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            [_] = (0, _.useState)(() => new Set()),
            [_, _] = (0, _.useState)(!1);
          return (0, _.jsx)(_.Provider, {
            value: {
              ..._,
              handles: _,
              bDragActive: _,
            },
            children: (0, _.jsx)("div", {
              className: _.SliderRoot,
              "data-accent-color": _,
              ref: _,
              onPointerDown: (_) => {
                if (_.current) {
                  if (
                    (_.target.setPointerCapture(_.pointerId),
                    typeof _ != "number")
                  ) {
                    const _ = _.current.getBoundingClientRect(),
                      _ = _(_.clientX - _.left, [0, _.width], [_, _]);
                    _.current = {
                      activeValueIndex: _(_, _),
                      bMoved: !1,
                    };
                  } else
                    _.current = {
                      activeValueIndex: 0,
                      bMoved: !1,
                    };
                  _(!0);
                }
              },
              onPointerUp: (_) => {
                const _ = _.target;
                _.hasPointerCapture(_.pointerId) &&
                  (_.releasePointerCapture(_.pointerId),
                  _ && _.current?.bMoved && _(_),
                  _(!1));
              },
              onPointerMove: (_) => {
                if (
                  _.target.hasPointerCapture(_.pointerId) &&
                  _.current &&
                  _.current
                ) {
                  const _ = _.current.getBoundingClientRect(),
                    _ = _(_.clientX - _.left, [0, _.width], [_, _]),
                    _ = _({
                      value: _,
                      min: _,
                      max: _,
                      step: _,
                    }),
                    _ = [..._];
                  (_[_.current.activeValueIndex] = _),
                    _.sort((_, _) => _ - _),
                    (_.current.activeValueIndex = _.indexOf(_)),
                    (_.current.bMoved = !0),
                    _(_);
                }
              },
              onClick: (_) => {
                if (!_.current || _.current?.bMoved) return;
                const _ = _.current.getBoundingClientRect(),
                  _ = _(_.clientX - _.left, [0, _.width], [_, _]),
                  _ = _({
                    value: _,
                    min: _,
                    max: _,
                    step: _,
                  }),
                  _ = _(_, _),
                  _ = [..._];
                (_[_] = _), _(_), _ && _(_);
              },
              children: (0, _.jsx)("div", {
                className: _.Inner,
                children: _,
              }),
            }),
          });
        }
        function _(_, _) {
          if (_.length <= 1) return _.length - 1;
          let _ = 0,
            _ = Math.abs(_ - _[0]);
          for (let _ = 1; _ < _.length; _++) {
            const _ = Math.abs(_[_] - _);
            _ < _ && ((_ = _), (_ = _));
          }
          return _;
        }
        function _(_) {
          const { render: _, ..._ } = _;
          return (0, _._)(
            _,
            (0, _.jsx)("div", {
              className: _.SliderTrack,
            }),
            _,
            void 0,
          );
        }
        function _(_) {
          const { start: _, end: _, render: _ } = _,
            _ = (0, _.useContext)(_);
          (0, _._)(_, "SliderRange must be used within a SliderRoot!");
          const { min: _, max: _ } = _,
            _ = _(_, _, _),
            _ = 100 - _(_, _, _);
          return (0, _._)(
            _,
            (0, _.jsx)("div", {
              className: _.SliderRange,
              style: {
                "--pct-left": `${_}%`,
                "--pct-right": `${_}%`,
              },
            }),
            {},
            void 0,
          );
        }
        function _(_) {
          const { render: _ } = _,
            _ = (0, _.useContext)(_);
          (0, _._)(_, "SliderHandle must be used within a SliderRoot!");
          const {
              min: _,
              max: _,
              handles: _,
              value: _,
              step: _ = 1,
              onValueChange: _,
              onValueSettled: _,
            } = _,
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(-1);
          (0, _.useEffect)(
            () => (_ ? (_.add(_), _(_.size - 1), () => _.delete(_)) : () => {}),
            [_, _],
          );
          const _ = _ > -1,
            _ = {
              "--handle-pct": `${_(_ ? _[_] : _, _, _)}%`,
            },
            _ = (_) => {
              switch (_.key) {
                case "ArrowRight":
                case "ArrowUp":
                case "ArrowLeft":
                case "ArrowDown": {
                  const _ = _.key === "ArrowRight" || _.key === "ArrowUp",
                    _ = _ * (_ ? 1 : -1),
                    _ = _({
                      value: _[_] + _,
                      min: _,
                      max: _,
                      step: _,
                    }),
                    _ = [..._];
                  (_[_] = _),
                    _(_),
                    _ && _(_),
                    _.preventDefault(),
                    _.stopPropagation();
                  break;
                }
                case "PageUp":
                case "PageDown": {
                  const _ = _.key === "PageUp",
                    _ = Math.round((_ - _) / 10) * (_ ? 1 : -1),
                    _ = _({
                      value: _[_] + _,
                      min: _,
                      max: _,
                      step: _,
                    }),
                    _ = [..._];
                  (_[_] = _),
                    _(_),
                    _ && _(_),
                    _.preventDefault(),
                    _.stopPropagation();
                  break;
                }
              }
            };
          _ || (_.display = "none");
          const _ = {
            ref: _,
            role: "slider",
            "aria-valuenow": _[_],
            "aria-valuemin": _,
            "aria-valuemax": _,
            tabIndex: 0,
            onKeyDown: _,
          };
          return (0, _._)(
            _,
            (0, _.jsx)("span", {
              className: _.SliderHandle,
              style: _,
            }),
            _,
            {
              value: _[_],
              bDragActive: _.bDragActive,
            },
          );
        }
        function _(_, _, _) {
          if (_[0] === _[1] || _[0] === _[1]) return _[0];
          const _ = ((_[1] - _[0]) / (_[1] - _[0])) * (_ - _[0]) + _[0];
          return _._(_, _[0], _[1]);
        }
        function _(_) {
          const { value: _, min: _, max: _, step: _ } = _,
            _ = Math.round((_ - _) / _) / (1 / _);
          return _._(_ + _, _, _);
        }
        function _(_, _, _) {
          return ((_ - _) / (_ - _)) * 100;
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
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { _: _ = "span", ref: _, className: _, ..._ } = _,
            _ = _;
          return (0, _.jsx)(_, {
            ref: _,
            ...(0, _._)(
              {
                ..._,
                className: _()(_.Text, _),
              },
              _,
            ),
          });
        }
        const _ = [
            {
              prop: "weight",
              responsive: !0,
              className: _.TextWeight,
              cssProperty: (_) => ["--text-weight", `var(--font-weight-${_})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: _.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (_, _, _) => [
                "--text-color",
                (0, _._)(_, (0, _._)(_.contrast, _) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (_, _, _) => [
                "--text-color",
                (0, _._)((0, _._)(_.color, _) ?? "text-body", _),
              ],
            },
            {
              prop: "truncate",
              className: _.Truncate,
            },
            {
              prop: "lineClamp",
              responsive: !0,
              className: _.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: _.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          _ = [
            ..._,
            ..._._,
            {
              prop: "size",
              responsive: !0,
              className: (_) => _[`TextSize-${_}`],
            },
          ];
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
          _ = __webpack_require__("chunkid");
        const _ = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_tag_count: 20,
          include_basic_info: !0,
          include_optin_registration_tags: !0,
          include_trailers: !0,
          include_reviews: !0,
          include_screenshots: !0,
          include_supported_languages: !0,
        };
        class _ {
          m_setAlreadyAdded = new Set();
          Reset() {
            this.m_setAlreadyAdded = new Set();
          }
          BHasAppID(_) {
            return this.m_setAlreadyAdded.has("a" + _);
          }
          BHasPackageID(_) {
            return this.m_setAlreadyAdded.has("s" + _);
          }
          BHasBundleID(_) {
            return this.m_setAlreadyAdded.has("b" + _);
          }
          BHasStoreItemKey(_) {
            return this.m_setAlreadyAdded.has(
              this.ConvertStoreItemKeyToUniqueKey(_),
            );
          }
          AddStoreItemKey(_) {
            this.m_setAlreadyAdded.add(this.ConvertStoreItemKeyToUniqueKey(_));
          }
          ConvertStoreItemKeyToUniqueKey(_) {
            switch (_.item_type) {
              default:
              case "app":
                return "a" + _._;
              case "sub":
                return "s" + _._;
              case "bundle":
                return "b" + _._;
            }
          }
        }
        const _ = 4;
        function _(_, _, _, _, _, _) {
          const _ = new Array(),
            _ = new Array(),
            _ = new Array(),
            _ = new Array();
          if (!_ || _.length == 0) return _;
          const _ = [
            _._.k_RejectSupportedLanguage,
            _._.k_RejectAlreadyDisplayed,
            _._.k_RejectNoTrailer,
          ];
          for (let _ of _) {
            let _ = _._,
              _ = _._.k_NotRejected;
            switch (_.item_type) {
              case "sub":
                const _ = _._.Get().GetPackage(_);
                if (_?.GetIncludedAppIDs()?.length !== 1) {
                  _ = _(_, _, _, !0);
                  break;
                }
                _ = _.GetIncludedAppIDs()[0];
              case "app":
                _ = _(_, _, _, _, !0);
                break;
              case "bundle":
                _ = _(_, _, _, !0);
                break;
            }
            if (
              (_ == _._.k_NotRejected
                ? ((_.rejected = _._.k_NotRejected),
                  _.push({
                    ..._,
                    priority: 1,
                  }))
                : _.includes(_)
                  ? ((_.rejected = _._.k_NotRejected), _.push(_))
                  : ((_.rejected = _),
                    _ == _._.k_RejectIgnoredGame ? _.push(_) : _.push(_)),
              _.length > _)
            )
              break;
          }
          return (
            _.length < _ &&
              (_(_, _, _, 2),
              _.length < _ &&
                _.enforce_minimum &&
                (_(_, _, _, 3), _(_, _, _, _))),
            _
          );
        }
        function _(_, _, _, _) {
          for (let _ = 0; _.length < _ && _ < _.length; ++_)
            _.push({
              ..._[_],
              priority: _,
            });
        }
        function _(_, _) {
          const _ = _._.Get();
          if (
            _.only_current_platform &&
            _.BHasPlatformPreferenceSet() &&
            !(
              (_.GetPlatforms()?.windows && _.BIsPreferredPlatform("win")) ||
              (_.GetPlatforms()?.mac && _.BIsPreferredPlatform("mac")) ||
              (_.GetPlatforms()?.steamos_linux &&
                _.BIsPreferredPlatform("linux"))
            )
          )
            return _._.k_RejectWrongPlatform;
          if (!_.prepurchase && _.BIsComingSoon())
            return _._.k_RejectNoComingSoon;
          const _ = _.GetPlatforms();
          return !_.virtual_reality &&
            _ &&
            _.vr_support &&
            _.vr_support.vrhmd_only
            ? _._.k_RejectNoVR
            : _.GetAllCreatorClanIDs()?.some((_) => _.BIsIgnoringCurator(_))
              ? _._.k_RejectCreatorClan
              : _._.k_NotRejected;
        }
        function _(_, _) {
          if (_.localized) {
            const _ = (0, _.sfN)(_._.LANGUAGE);
            if (!_.GetAllLanguagesWithSomeSupport()?.includes(_))
              return _._.k_RejectSupportedLanguage;
          }
          return _._.k_NotRejected;
        }
        function _(_, _, _, _, _) {
          const _ = _._.Get().GetApp(_);
          if (!_) return _._.k_RejectNotLoaded;
          const _ = _(_, _);
          if (_ != _._.k_NotRejected) return _;
          const _ = _._.Get();
          if (_.BIsGameIgnored(_)) return _._.k_RejectIgnoredGame;
          if (_.BExcludeTagIDs(_.GetTagIDs()))
            return _._.k_RejectIgnoreGameTags;
          if (_.BExcludesContentDescriptor(_.GetContentDescriptorIDs()))
            return _._.k_RejectIgnoreContentDescriptors;
          if (!_.early_access && _.BIsEarlyAccess())
            return _._.k_RejectEarlyAccess;
          const _ = _.GetAppType();
          if (!_.software && _ == _._._) return _._.k_RejectSoftware;
          if (_.games_already_in_library && _.BIsGameOwned(_))
            return _._.k_RejectInLibrary;
          if (_.games_not_in_library && !_.BIsGameOwned(_))
            return _._.k_RejectNotInLibrary;
          if (!_.video && [_._._, _._._, _._._].includes(_))
            return _._.k_RejectVideo;
          if (_.has_discount) {
            const _ = _.GetBestPurchaseOption();
            if (!_ || !_.discount_pct) return _._.k_RejectNoDiscount;
          }
          return _ != "adultonly" &&
            _.no_ao_content &&
            (_.HasContentDescriptorID(_._) || _.HasContentDescriptorID(_._))
            ? _._.k_RejectAO
            : _ == _._._ &&
                _.games_already_in_library &&
                _.BIsGameOwned(_.GetParentAppID() || 0)
              ? _._.k_RejectInLibrary
              : _
                ? (_ == _._._ && _.BHasAppID(_.GetParentAppID() || 0)) ||
                  _.BHasAppID(_)
                  ? _._.k_RejectAlreadyDisplayed
                  : _.has_trailer && !_.BHasTrailers(!1)
                    ? _._.k_RejectNoTrailer
                    : _(_, _)
                : _._.k_NotRejected;
        }
        function _(_, _) {
          const _ = _._.Get();
          let _ = !1;
          for (let _ of _) {
            if (_.BIsGameIgnored(_)) return _._.k_RejectIgnoredGame;
            _.BIsGameOwned(_) && (_ = !0);
          }
          return _.games_not_in_library && _
            ? _._.k_RejectInLibrary
            : _.games_not_in_library && !_
              ? _._.k_RejectNotInLibrary
              : _._.k_NotRejected;
        }
        function _(_, _, _, _) {
          const _ = _._.Get().GetPackage(_);
          if (!_) return _._.k_RejectNotLoaded;
          const _ = _(_, _);
          if (_ != _._.k_NotRejected) return _;
          const _ = _(_.GetIncludedAppIDs(), _);
          if (_ != _._.k_NotRejected) return _;
          const _ = _._.Get();
          return _.games_already_in_library && _.BOwnsPackage(_)
            ? _._.k_RejectInLibrary
            : _.BIsPackageIgnored(_)
              ? _._.k_RejectIgnoredGame
              : _
                ? _.BHasPackageID(_)
                  ? _._.k_RejectAlreadyDisplayed
                  : _(_, _)
                : _._.k_NotRejected;
        }
        function _(_, _, _, _) {
          const _ = _._.Get().GetBundle(_);
          if (!_) return _._.k_RejectNotLoaded;
          const _ = _(_, _);
          if (_ != _._.k_NotRejected) return _;
          const _ = _(_.GetIncludedAppIDs(), _);
          return _ != _._.k_NotRejected
            ? _
            : _
              ? _.BHasBundleID(_)
                ? _._.k_RejectAlreadyDisplayed
                : _(_, _)
              : _._.k_NotRejected;
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
        class _ {
          m_nLastUpdated = 0;
          m_mapLanguages = _._.map();
          m_appid;
          m_fetching = null;
          constructor(_) {
            this.m_appid = _;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(_) {
            return this.m_mapLanguages.has(_)
              ? this.m_mapLanguages.get(_)
              : null;
          }
          Localize(_, _) {
            let _ = _._.LANGUAGE,
              _ = this.GetTokenList(_),
              _ = _ != "english" ? this.GetTokenList("english") : null;
            return _(_, _, _, this.m_appid, _);
          }
          SubstituteParams(_, _) {
            let _ = _._.LANGUAGE,
              _ = this.GetTokenList(_),
              _ = _ != "english" ? this.GetTokenList("english") : null;
            return _(_, _, _, this.m_appid, _);
          }
        }
        function _(_, _, _, _, _) {
          if (!_.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                _,
                "appid",
                _,
                "tokens",
                _,
              ),
              ""
            );
          let _ = _;
          _ = _.toLowerCase();
          let _ = "";
          if (
            (_ && _.has(_) && (_ = _.get(_)),
            !_ && _ && _.has(_) && (_ = _.get(_)),
            _)
          )
            _ = _(_, _, _, _, _);
          else if (
            ((_ || _) &&
              console.log(
                "No loc found for appid",
                _,
                _,
                "Tokens:",
                _,
                "Fallback:",
                _,
              ),
            _ && _._.EUNIVERSE != _.wLO)
          )
            return _;
          return _;
        }
        function _(_, _, _, _, _) {
          let _ = /{[A-za-z0-9_%#:]+}/g,
            _ = _.match(_);
          if (_)
            for (let _ of _) {
              let _ = _.slice(1, -1),
                _ = _(_, _),
                _ = _(_, _, _, _, _);
              if (!_) return "";
              _ = _.replace(_, _);
            }
          return (_ = _(_, _)), _;
        }
        function _(_, _) {
          let _ = /%[A-Za-z0-9_:]+%/g,
            _ = _.match(_);
          if (_)
            for (let _ of _) {
              let _ = _.slice(1, -1).toLowerCase(),
                _ = _.get(_);
              _ == null
                ? console.log("No rich presence found for", _)
                : (_ = _.replace(_, _));
            }
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          return useObserver(() => _.GetAppInfo(_));
        }
        function _(_) {
          return useObserver(() => _.map((_) => _.GetAppInfo(_)));
        }
        const _ = 3600 * 24 * 7 * 2;
        class _ {
          m_CMInterface;
          m_mapAppInfo = _._.map();
          m_mapRichPresenceLoc = _._.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new _._();
          constructor() {
            (0, _._)(this);
          }
          Init(_) {
            this.m_CMInterface = _;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(_) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, _._)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                _();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(_);
          }
          IsLoadingAppID(_) {
            return this.m_setPendingAppInfo.has(_);
          }
          GetAppInfo(_) {
            if (
              ((0, _._)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(_))
            ) {
              let _ = new _._(_);
              this.m_mapAppInfo.set(_, _), this.QueueAppInfoRequest(_);
            }
            return this.m_mapAppInfo.get(_);
          }
          QueueAppInfoRequest(_) {
            return _
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (_) => (this.m_PendingAppInfoResolve = _),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(_),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const _ = this.m_PendingAppInfoResolve,
              _ = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(_),
              _?.();
          }
          async LoadAppInfoBatch(_) {
            this.m_cAppInfoRequestsInFlight++;
            let _ = await this.LoadAppInfoBatchFromLocalCache(_);
            if (_.length) {
              console.log("Loading batch of App Info from Steam: ", _),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let _ = _._.Init(_._);
              _.Body().set_language((0, _.sfN)(_._.LANGUAGE));
              const _ = 50;
              for (; _.length > 0; ) {
                const _ = Math.min(_, _.length),
                  _ = _.slice(0, _);
                (_ = _.slice(_)), _.Body().set_appids(_);
                const _ = await _._.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                );
                _.GetEResult() == _._
                  ? this.OnGetAppsResponse(_)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${_.GetEResult()}, AppIDs:`,
                      _,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(_) {
            let _ = [];
            for (let _ of _.Body().apps()) {
              let _ = this.m_mapAppInfo.get(_.appid());
              (0, _._)(
                _,
                `Got AppInfo response for unrequested AppID: ${_.appid()}`,
              ),
                _ &&
                  ((_ = new _._(_.appid())),
                  _.DeserializeFromMessage(_),
                  this.m_mapAppInfo.set(_.appid(), _),
                  _.push(_));
            }
            this.SaveAppInfoBatchToLocalCache(_);
          }
          OnAppOverviewChange(_) {
            for (let _ of _) {
              const _ = new _._(_.appid());
              _.DeserializeFromAppOverview(_),
                _.is_initialized && this.m_mapAppInfo.set(_.appid(), _);
            }
          }
          async EnsureAppInfoForAppIDs(_) {
            let _ = !1;
            return (
              _.forEach((_) => {
                let _ = this.m_mapAppInfo.get(_);
                if (_) {
                  _.is_valid || (_ = !0);
                  return;
                }
                (_ = new _._(_)),
                  this.m_mapAppInfo.set(_, _),
                  this.QueueAppInfoRequest(_),
                  (_ = !0);
              }),
              _ && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(_) {
            this.m_CacheStorage = _;
          }
          GetCacheKeyForAppID(_) {
            return "APPINFO_" + _;
          }
          async LoadAppInfoBatchFromLocalCache(_) {
            if (!this.m_CacheStorage) return _;
            console.log("Loading batch of App Info from Local Cache: ", _);
            const _ = new Date(new Date().getTime() - _ * 1e3),
              _ = async (_) => {
                const _ = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(_),
                );
                if (!_) return _;
                let _ = this.m_mapAppInfo.get(_);
                return (
                  (0, _._)(
                    _,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  _
                    ? ((_ = new _._(_)),
                      _.DeserializeFromCacheObject(_),
                      _.is_initialized
                        ? (this.m_mapAppInfo.set(_, _),
                          _.time_updated_from_server < _ ? _ : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            _,
                            _,
                          ),
                          _))
                    : _
                );
              };
            let _ = _.map((_) => _(_));
            return (await Promise.all(_)).filter((_) => _ !== null);
          }
          async SaveAppInfoBatchToLocalCache(_) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                _.map((_) => _.appid),
              );
              for (const _ of _) {
                const _ = _.SerializeToCacheObject();
                _ &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(_.appid),
                    _,
                  );
              }
            }
          }
          Localize(_, _, _) {
            const _ = this.GetRichPresenceLoc(_);
            return _
              ? _.Localize(_, _)
              : _._.EUNIVERSE != _.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${_} token ${_}, this may not have had a chance to load yet`,
                  ),
                  _)
                : "";
          }
          GetRichPresenceLoc(_) {
            if (this.m_mapRichPresenceLoc.has(_.toString())) {
              let _ = this.m_mapRichPresenceLoc.get(_.toString());
              return (
                _.m_nLastUpdated + 1e3 * 60 * _._ < Date.now() &&
                  this.QueueRichPresenceLocRequest(_),
                _
              );
            }
            let _ = new _(_);
            return (
              this.m_mapRichPresenceLoc.set(_.toString(), _),
              this.QueueRichPresenceLocRequest(_),
              _
            );
          }
          GetRichPresenceLocAsync(_) {
            let _ = this.GetRichPresenceLoc(_);
            return _.m_nLastUpdated ? Promise.resolve(_) : _.m_fetching;
          }
          OnRichPresenceLocUpdate(_, _) {
            _.m_nLastUpdated = Date.now();
            for (let _ of _) {
              let _ = _.language(),
                _ = _.m_mapLanguages.get(_);
              _
                ? _.clear()
                : (_.m_mapLanguages.set(_, new Map()),
                  (_ = _.m_mapLanguages.get(_)));
              for (let _ of _.tokens())
                _?.set(_.name().toLowerCase(), _.value());
            }
          }
          QueueRichPresenceLocRequest(_) {
            return (
              _.m_fetching ||
                ((_.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let _ = _._.Init(_._);
                    return (
                      _.Body().set_appid(_.GetAppID()),
                      _.Body().set_language(_._.LANGUAGE),
                      _._.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        _,
                      )
                    );
                  })
                  .then(
                    (_) => (
                      (_.m_fetching = null),
                      _.GetEResult() != _._
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            _,
                            _.Body().token_lists(),
                          ),
                          Promise.resolve(_))
                    ),
                  )),
                _.m_fetching.catch(() => {
                  _.m_fetching = null;
                })),
              _.m_fetching
            );
          }
        }
        _([_._], _.prototype, "OnGetAppsResponse", 1),
          _([_._], _.prototype, "OnRichPresenceLocUpdate", 1);
        const _ = new _();
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !0) {
          const _ = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = _ || CStoreItemCache.Get().BHasStoreItem(_, _, _) ? _ : null,
            [_, _] = _(_, _, _),
            [_, _] = useState(null),
            [_, _] = _(_, _, _);
          useEffect(() => {
            _?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(_.GetParentAppID());
          }, [_]);
          let _ = _?.GetShortDescription()
            ? StripBBCodeTags(_.GetShortDescription())
            : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ = _?.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "");
          const _ = _ == _ && (!_ || _ == _);
          return [_, _];
        }
        const _ = 1,
          _ = 2,
          _ = 3;
        function _(_, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)();
          _.current = _;
          const [_, _] = (0, _.useState)(void 0),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          if (
            ((0, _.useEffect)(() => {
              const _ = {
                include_assets: _,
                include_release: _,
                include_platforms: _,
                include_all_purchase_options: _,
                include_screenshots: _,
                include_trailers: _,
                include_ratings: _,
                include_tag_count: _,
                include_reviews: _,
                include_basic_info: _,
                include_supported_languages: _,
                include_full_description: _,
                include_included_items: _,
                include_assets_without_overrides: _,
                apply_user_filters: _,
                include_links: _,
                include_extra_details: _,
                include_optin_registration_tags: _,
              };
              let _ = null;
              return (
                !_ ||
                  _ < 0 ||
                  _._.Get().BHasStoreItem(_, _, _) ||
                  (_ !== void 0 && _ && _ == _.current) ||
                  (_ !== _.current && (_(void 0), (_.current = _)),
                  (_ = _().CancelToken.source()),
                  _._.Get()
                    .QueueStoreItemRequest(_, _, _)
                    .then((_) => {
                      !_?.token.reason && _.current === _ && _(_ == _._), _();
                    })),
                () => _?.cancel("useStoreItemCache: unmounting")
              );
            }, [
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
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            !_)
          )
            return [null, _];
          if (_ === !1) return [void 0, _];
          if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, _];
          if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, _];
          const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
          return _ ? [_, _] : [null, _];
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          const [_, _] = _(_, _, _);
          let _;
          _?.GetStoreItemType() == _._._ &&
            !_.GetAssets()?.GetHeaderURL() &&
            _?.GetIncludedAppIDs().length == 1 &&
            (_ = _.GetIncludedAppIDs()[0]);
          const [_, _] = _(_, _);
          return _ && _?.BIsVisible() ? [_, _] : [_, _];
        }
        function _(_, _, _, _) {
          const _ = (0, _._)(),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const _ = {
                  include_assets: _,
                  include_release: _,
                  include_platforms: _,
                  include_all_purchase_options: _,
                  include_screenshots: _,
                  include_trailers: _,
                  include_ratings: _,
                  include_tag_count: _,
                  include_reviews: _,
                  include_basic_info: _,
                  include_supported_languages: _,
                  include_full_description: _,
                  include_included_items: _,
                  include_assets_without_overrides: _,
                  apply_user_filters: _,
                  include_links: _,
                  include_extra_details: _,
                  include_optin_registration_tags: _,
                },
                _ = _.filter(
                  (_) =>
                    !(
                      _._.Get().BHasStoreItem(_, _, _) ||
                      _._.Get().BIsStoreItemMissing(_, _)
                    ),
                );
              if (_.length == 0) return;
              const _ = _().CancelToken.source(),
                _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
              return (
                Promise.all(_).then(() => {
                  _.token.reason || _();
                }),
                () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
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
              _,
              _,
              _,
              _,
              _,
            ]),
            _
              ? _.every(
                  (_) =>
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _),
                )
                ? _.every((_) =>
                    _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
                  )
                  ? _
                  : _
                : _
              : _
          );
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Package, _, _);
        }
        function _() {
          _.useEffect(
            () => (
              _._.Get().SetReturnUnavailableItems(!0),
              () => _._.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          if (!(!_?.asset_url_format || typeof _[_] != "string"))
            return (
              _._.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              _.asset_url_format.replace("${FILENAME}", _[_])
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_._, {
            onEscKeypress: _.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _.redirectURL,
              guestOption: _.guestOption,
            }),
          });
        }
        function _(_) {
          const { redirectURL: _ = window.location.href } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _,
            }),
          });
        }
        function _() {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_, _) {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: _,
              guestOption: _,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_) {
          const { redirectURL: _, guestOption: _ } = _,
            [_] = (0, _.useState)(
              new _._(
                new _._(_._.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _ == _._.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
            };
          return (0, _.jsx)("div", {
            children: _
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  transport: _,
                  platform: _._._,
                  onComplete: _,
                  redirectUrl: _,
                  theme: "modal",
                  children:
                    _ &&
                    (0, _.jsx)(_._, {
                      redirectURL: _,
                    }),
                }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _, _) {
          return (0, _._)(_(_, _, _, _, _));
        }
        function _(_, _, _, _, _) {
          return {
            queryKey: ["gamemixer", _, _, _, _, _],
            queryFn: async () => {
              let _ = {
                appids: _.join(","),
                appweights: _.join(","),
                sessionid: (0, _._)(),
                selffactor: _,
                popularity: _ ? 0 : _,
                scoperange: _ ? 100 : 0,
                scopedecayrange: _ ? 1e3 : 0,
                scopedecaystrength: _ ? 20 : 0,
              };
              const _ = await _().get(
                `${_._.STORE_BASE_URL}gameexplorer/exploreapplist`,
                {
                  params: _,
                  withCredentials: !0,
                  timeout: 1e4,
                },
              );
              if (_.data)
                return Object.entries(_.data)
                  .map(([_, _]) => ({
                    nAppID: Number(_),
                    fDistance: Number(_),
                  }))
                  .filter((_) => _.fDistance > 0 && !_.includes(_.nAppID))
                  .sort((_, _) => _.fDistance - _.fDistance);
              throw "Failed FetchAppValues";
            },
            placeholderData: (_) => _,
          };
        }
        function _() {
          return (0, _._)(_());
        }
        function _() {
          return {
            queryKey: ["gamemixerplayed"],
            queryFn: async () => {
              let _ = {
                sessionid: (0, _._)(),
              };
              const _ = await _().get(
                `${_._.STORE_BASE_URL}gameexplorer/exploreplayedlist`,
                {
                  params: _,
                  withCredentials: !0,
                  timeout: 1e4,
                },
              );
              if (_.data) return _.data;
              throw "Failed FetchAppValues";
            },
            placeholderData: (_) => _,
          };
        }
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
          _ = __webpack_require__("chunkid");
        const _ = {
          arrSelectedAppInfos: [],
          nSelfFactor: 0,
          nPopularity: 0,
          bSimilar: !0,
        };
        function _(_) {
          const _ =
              _.arrSelectedAppInfos.length == 0
                ? "0"
                : _.arrSelectedAppInfos.map((_) => _.nAppID).join(),
            _ =
              _.arrSelectedAppInfos.length == 0
                ? "0"
                : _.arrSelectedAppInfos.map((_) => _.nWeight.toFixed(0)).join();
          return `/gameexplorer/${_}/${_}/${_.nSelfFactor}/${_.nPopularity}/${_.bSimilar}`;
        }
        function _(_) {
          const _ = _.appids?.split(",").filter((_) => _ != "0") ?? [],
            _ = _.weights?.split(",").filter((_) => _ != "0") ?? [];
          return {
            arrSelectedAppInfos: _.map((_) => Number(_)).map((_, _) => ({
              nAppID: _,
              nWeight: Number(_[_]),
            })),
            nSelfFactor: Number(_?.selffactor ?? "0"),
            nPopularity: Number(_?.popularity ?? "0"),
            bSimilar: _?.similar == "true",
          };
        }
        function _() {
          const _ = (0, _._)(),
            _ = _(_),
            [_, _] = _.useState(_),
            [_, _] = _.useState(_),
            _ = (0, _._)(),
            _ = _(
              _.arrSelectedAppInfos.map((_) => _.nAppID),
              _.arrSelectedAppInfos.map((_) => _.nWeight),
              _.nSelfFactor,
              _.nPopularity,
              _.bSimilar,
            ),
            _ = (_, _) => {
              _(_), _ && (_.push(_(_)), _(_));
            },
            _ = (_) => {
              const _ = {
                ..._,
                arrSelectedAppInfos: [
                  {
                    nAppID: _,
                    nWeight: 100,
                  },
                ],
              };
              _(_), _.push(_(_)), _(_);
            };
          return (0, _.jsx)(_._, {
            controller: "gameexplorer",
            method: "default",
            feature: "capsule",
            children: (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                className: (0, _._)(
                  _.GameExplorerApp,
                  _.isFetching && _.Refreshing,
                ),
                children: (0, _.jsxs)(_._, {
                  className: _.GameExplorerContainer,
                  children: [
                    (0, _.jsx)(_, {}),
                    !_._.steamid && (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      state: _,
                      onChange: _,
                    }),
                    _.data &&
                      (0, _.jsx)(_, {
                        arrNearApps: _.data,
                        bIsPending: _.isFetching,
                        fnSetApp: _,
                      }),
                  ],
                }),
              }),
            }),
          });
        }
        function _() {
          return (0, _.jsxs)(_._, {
            className: _.GameExplorerHeader,
            children: [
              (0, _.jsx)(_._, {
                className: _.GameExplorerTitle,
                children: "Game Explorer",
              }),
              (0, _.jsx)(_._, {
                className: _.GameExplorerDescription,
                children: "Explore and Mix Games",
              }),
            ],
          });
        }
        function _(_) {
          const [_] = (0, _._)(_.selectedAppInfo.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!_) return null;
          const _ = _.GetAssetsWithoutOverrides().GetMainCapsuleURL();
          return (0, _.jsxs)("div", {
            className: _.SelectedApp,
            children: [
              (0, _.jsx)("div", {
                className: _.RemoveButttonContainer,
                children: (0, _.jsx)(_._, {
                  size: "1",
                  color: "red",
                  onClick: () => _.onRemove(_.selectedAppInfo.nAppID),
                  children: "X",
                }),
              }),
              (0, _.jsx)("img", {
                className: _.CapsuleImage,
                src: _,
              }),
              (0, _.jsx)("div", {
                className: _.WeightContainer,
                children:
                  _.nNumSelected > 1 &&
                  (0, _.jsx)(_._, {
                    value: _.selectedAppInfo.nWeight,
                    min: 0,
                    max: 100,
                    onValueChange: (_) =>
                      _.onWeightChange(_.selectedAppInfo.nAppID, _, !1),
                    onValueSettled: (_) =>
                      _.onWeightChange(_.selectedAppInfo.nAppID, _, !0),
                  }),
              }),
            ],
          });
        }
        function _(_) {
          if (_.bSimilar) return "Similar";
          switch (_.nPopularity) {
            case 0:
              return "Any";
            case 40:
              return "Popular";
            case 130:
              return "Niche";
          }
          return "";
        }
        function _(_) {
          switch (_.nSelfFactor) {
            case 0:
              return "None";
            case 20:
              return "Some";
            case 40:
              return "Lots";
          }
          return "";
        }
        function _(_) {
          const [_, _] = _.useState(_(_.state)),
            [_, _] = _.useState(_(_.state)),
            _ = (_, _, _) => {
              let _ = _.state.arrSelectedAppInfos.slice();
              _.find((_) => _.nAppID == _) == null &&
                ((_ = 100 / (_.length + 1)),
                _.push({
                  nAppID: _,
                  nWeight: _,
                }));
              let _ = !1;
              if (
                (_ == -1 &&
                  ((_ = 0), (_ = _.filter((_) => _.nAppID != _)), (_ = !0)),
                _.length > 1)
              ) {
                const _ = _.map((_) =>
                    _.nAppID != _ ? _.nWeight : null,
                  ).filter((_) => _ != null),
                  _ = _.reduce((_, _) => _ + _, 0);
                let _ = (100 - _ - _) / (_.length - (_ ? 0 : 1));
                const _ = _.reduce((_, _) => _ + Math.max(0, _ + _ - 100), 0),
                  _ = _.reduce((_, _) => _ + Math.min(0, _ + _), 0);
                (_ += Math.floor(_ / (_.length - 1))),
                  (_ += Math.floor(_ / (_.length - 1))),
                  (_ = _.map((_) => ({
                    nAppID: _.nAppID,
                    nWeight:
                      _.nAppID == _
                        ? _
                        : Math.max(0, Math.min(100, _.nWeight + _)),
                  }))),
                  _.onChange(
                    {
                      ..._.state,
                      arrSelectedAppInfos: _,
                    },
                    _,
                  );
              } else
                _.onChange(
                  {
                    ..._.state,
                    arrSelectedAppInfos: _,
                  },
                  _,
                );
            },
            _ = (_) => {
              _(_, 100, !0);
            },
            _ = (_) => {
              _(_, -1, !0);
            },
            _ = (_) => {
              switch (_) {
                case "None":
                  _.onChange(
                    {
                      ..._.state,
                      nSelfFactor: 0,
                    },
                    !0,
                  );
                  break;
                case "Some":
                  _.onChange(
                    {
                      ..._.state,
                      nSelfFactor: 20,
                    },
                    !0,
                  );
                  break;
                case "Lots":
                  _.onChange(
                    {
                      ..._.state,
                      nSelfFactor: 40,
                    },
                    !0,
                  );
                  break;
              }
              _(_);
            },
            _ = (_) => {
              switch (_) {
                case "Similar":
                  _.onChange(
                    {
                      ..._.state,
                      nPopularity: 0,
                      bSimilar: !0,
                    },
                    !0,
                  );
                  break;
                case "Any":
                  _.onChange(
                    {
                      ..._.state,
                      nPopularity: 0,
                      bSimilar: !1,
                    },
                    !0,
                  );
                  break;
                case "Popular":
                  _.onChange(
                    {
                      ..._.state,
                      nPopularity: 40,
                      bSimilar: !1,
                    },
                    !0,
                  );
                  break;
                case "Niche":
                  _.onChange(
                    {
                      ..._.state,
                      nPopularity: 130,
                      bSimilar: !1,
                    },
                    !0,
                  );
                  break;
              }
              _(_);
            },
            _ = ["Similar", "Any", "Popular", "Niche"],
            _ = ["None", "Some", "Lots"];
          return (0, _.jsx)("div", {
            className: _.GameExplorerKnobs,
            children: (0, _.jsxs)("div", {
              className: _.AppList,
              children: [
                (0, _.jsxs)("div", {
                  className: _.AppRow,
                  children: [
                    _.state.arrSelectedAppInfos.length == 0 &&
                      (0, _.jsx)("div", {
                        className: _.Empty,
                        children: "Add games to start exploring",
                      }),
                    _.state.arrSelectedAppInfos.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          selectedAppInfo: _,
                          onWeightChange: _,
                          onRemove: _,
                          nNumSelected: _.state.arrSelectedAppInfos.length,
                        },
                        _.nAppID,
                      ),
                    ),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.AppSelectors,
                  children: [
                    (0, _.jsx)(_, {
                      fnSelectAppID: _,
                      arrSelectedAppIDs: _.state.arrSelectedAppInfos.map(
                        (_) => _.nAppID,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      fnSelectAppID: _,
                      arrSelectedAppIDs: _.state.arrSelectedAppInfos.map(
                        (_) => _.nAppID,
                      ),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.OtherControls,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _.OtherControl,
                      children: [
                        (0, _.jsx)("div", {
                          className: _.ControlTitle,
                          children: "Popularity",
                        }),
                        (0, _.jsx)(_._, {
                          options: _,
                          value: _,
                          onValueChange: (_) => _(_),
                          radius: "sm",
                        }),
                        (0, _.jsxs)("div", {
                          className: _.ControlDescription,
                          children: [
                            _ == "Similar" &&
                              "Games with similar popularity to your input games",
                            _ == "Any" &&
                              "No popularity restrictions, can be noisy",
                            _ == "Popular" && "Higher popularity games",
                            _ == "Niche" &&
                              "Lower popularity games, can be noisy",
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _.OtherControl,
                      children: [
                        (0, _.jsx)("div", {
                          className: _.ControlTitle,
                          children: "Self Factor",
                        }),
                        (0, _.jsx)(_._, {
                          options: _,
                          value: _,
                          onValueChange: (_) => _(_),
                          radius: "sm",
                        }),
                        (0, _.jsxs)("div", {
                          className: _.ControlDescription,
                          children: [
                            _ == "None" &&
                              "Your game preferences are not factored in",
                            _ == "Some" &&
                              "A bit of your game preferences are mixed in",
                            _ == "Lots" &&
                              "Significantly biased towards your game preferences",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const [_] = (0, _._)(_.nAppID, _._._, _._);
          return _
            ? (0, _.jsxs)("div", {
                className: _.CapsuleContainer,
                children: [
                  (0, _.jsx)(_._, {
                    capsule: {
                      _: _.nAppID,
                    },
                    imageType: "library",
                    nWidthMultiplier: 2,
                    bShowName: !1,
                    bHidePlatforms: !0,
                    bHidePrice: !0,
                    bHideStatusBanners: !0,
                    bShowIgnoreButton: !0,
                    bShowDescriptionInHover: !0,
                    bPreferAssetWithoutOverride: !1,
                  }),
                  (0, _.jsxs)("div", {
                    className: _.Distance,
                    children: [
                      `${(_.fDistance * 100).toFixed(2)}%`,
                      (0, _.jsx)("div", {
                        className: _.StartExplore,
                        children: (0, _.jsx)(_._, {
                          size: "1",
                          color: "green",
                          onClick: () => _.fnSetApp(_.nAppID),
                          children: "Go",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          return _.arrNearApps.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: (0, _._)(
                  _.GameExplorerResults,
                  _.bIsPending && _.Pending,
                ),
                children: _.arrNearApps?.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      nAppID: _.nAppID,
                      fDistance: _.fDistance,
                      fnSetApp: _.fnSetApp,
                    },
                    _.nAppID,
                  ),
                ),
              });
        }
        function _() {
          return (0, _.jsxs)(_._, {
            className: _.PersonalCalendarLoginPrompt,
            children: [
              (0, _._)("#PersonalCalendar_LoginPrompt"),
              (0, _.jsx)("button", {
                onClick: _._,
                className: _.LoginButton,
                children: (0, _._)("#Login_SignIn"),
              }),
            ],
          });
        }
        function _(_) {
          const [_] = (0, _._)(_.nAppID, {
            include_basic_info: !0,
            include_assets_without_overrides: !0,
          });
          if (!_) return null;
          const _ = _.GetAssetsWithoutOverrides().GetSmallCapsuleURL();
          return (0, _.jsxs)("div", {
            className: _.AppSelectorResult,
            onPointerDown: () => _.onClick(_.nAppID),
            children: [
              (0, _.jsx)("img", {
                className: _.Logo,
                src: _,
              }),
              (0, _.jsx)("div", {
                className: _.RightSide,
                children: _.GetName(),
              }),
            ],
          });
        }
        const _ = _.forwardRef(function (_, _) {
            const _ = (0, _._)(_.strSearch, null, 10),
              _ = _.fnSetResultApps;
            return (
              _.useEffect(() => {
                _(_.data?.rgItemIDs.map((_) => _.appid));
              }, [_, _.data]),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _.AppSelectorResults,
                  _.data?.rgItemIDs.length > 0 && _.Show,
                ),
                ref: _,
                children: _.data?.rgItemIDs
                  .filter((_) => !_.arrIgnoreAppIDs.includes(_.appid))
                  .map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        nAppID: _.appid,
                        onClick: _.fnClickApp,
                      },
                      _.appid,
                    ),
                  ),
              })
            );
          }),
          _ = (_) => {
            const [_, _] = _.useState(""),
              [_, _] = _.useState(0),
              [_, _] = _.useState(0),
              [_, _] = _.useState([]),
              _ = _.useRef(_),
              _ = _.useRef(null),
              _ = 300;
            _.useEffect(() => {
              _.current = _;
            }, [_]);
            const _ = () => {
                Date.now() - _.current < _ || (_(0), _([]));
              },
              _ = (_) => {
                _ != _ && (_(_), _(Date.now()), setTimeout(_, _));
              },
              _ = (_) => {
                _.fnSelectAppID(_), _(""), _(0), _([]), _(Date.now());
              },
              _ = (_) => {
                switch (_) {
                  case "Enter": {
                    _.length > 0 && _(_[0]);
                    break;
                  }
                  case "Escape": {
                    _("");
                    break;
                  }
                }
              },
              _ = _.arrSelectedAppIDs.length >= 3;
            return (0, _.jsxs)("div", {
              className: _.AppSelector,
              children: [
                (0, _.jsx)("input", {
                  type: "text",
                  className: (0, _._)(_.ValueInput, _ && _.Disabled),
                  value: _,
                  onChange: (_) => _(_.target.value),
                  onKeyDown: (_) => _(_.key),
                  onBlur: (_) => _(""),
                  placeholder: _ ? "Max three games" : "Type any game name",
                  disabled: _,
                }),
                (0, _.jsx)(_, {
                  strSearch: _,
                  nSelectedResult: _,
                  fnSetResultApps: _,
                  fnClickApp: _,
                  arrIgnoreAppIDs: _.arrSelectedAppIDs,
                  ref: _,
                }),
              ],
            });
          },
          _ = (_) => {
            const _ = _().data,
              _ = _?.appids ?? [];
            return (0, _.jsx)("div", {
              className: _.AppPlayedSelector,
              children: (0, _.jsx)(_._, {
                options: _,
                size: "1",
                selectedValue: 0,
                onSelectionChange: (_) => _.fnSelectAppID(_),
                getOptionLabel: (_) =>
                  _ == 0
                    ? "Select a recent game to add it"
                    : _?.names[_?.appids.indexOf(_)],
              }),
            });
          },
          _ = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          rgModelNames = [];
          constructor() {
            (0, _._)(this);
          }
          Init(_) {
            _._.Init(_);
            const _ = `${_._.STORE_BASE_URL}labs/ajaxgetsimilaritymodelnames`;
            _()
              .get(_)
              .then((_) => {
                if (_.data) {
                  let _ = [];
                  for (const _ of _.data) _ != "default" && _.push(_);
                  _.sort(), (_ = ["default", ..._]), (this.rgModelNames = _);
                }
              });
          }
          async ComputePathBetweenApps(_, _, _, _, _, _, _) {
            const _ = Math.acos(_);
            let _ = async (_) => {
                let _ = await this.GetNeighbors(_),
                  _ = [];
                for (let _ = 0; _ < _.length; _++) {
                  const _ = _[_];
                  if (
                    (!_ || _.length > _) &&
                    (_.cost > _ || (_ && _.length >= _))
                  )
                    break;
                  _.push(_);
                }
                return _;
              },
              _ = await new _(
                _,
                this.EstimateCosts,
                (_, _) => _ == _,
                _,
              ).FindPath(_, _, _ || 10);
            if (_.path) {
              let _ = [],
                _ = 0;
              for (let _ = 0; _ < _.path.length; _++) {
                const _ = _.path[_],
                  _ = _.cost - _;
                (_ = _.cost),
                  _.push({
                    appid: _.node,
                    similarity: Math.cos(_),
                  });
              }
              return _;
            } else throw new Error("Unable to compute path.");
          }
          async GetNeighbors(_) {
            const _ = `${_._.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${_}`;
            let _ = await _().get(_),
              _ = [];
            if (_.data && _.data.appid == _)
              for (let _ = 0; _ < _.data.similar_appids.length; _++)
                _.push({
                  node: _.data.similar_appids[_],
                  cost: Math.acos(_.data.similarity_scores[_]),
                });
            return _;
          }
          async EstimateCosts(_, _) {
            const _ = `${_._.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${_}&${_.map((_) => "appid[]=" + _.toString()).join("&")}`;
            let _ = await _().get(_);
            if (_.data && _.data.similarity_scores)
              return _.data.similarity_scores.map((_) =>
                Math.acos(parseFloat(_)),
              );
            throw new Error("Unable to fetch cost estimates");
          }
        }
        _([_._], _.prototype, "rgModelNames", 2),
          _([_._], _.prototype, "GetNeighbors", 1),
          _([_._], _.prototype, "EstimateCosts", 1);
        class _ {
          m_fnCompare;
          m_Heap = [];
          m_Length = 0;
          constructor(_) {
            this.m_fnCompare = _;
          }
          get length() {
            return this.m_Length;
          }
          Clear() {
            (this.m_Heap = []), (this.m_Length = 0);
          }
          Peek() {
            if (this.m_Length > 0) return this.m_Heap[0];
          }
          Pop() {
            if (this.m_Length != 0) {
              const _ = this.m_Heap[0];
              return (
                (this.m_Heap[0] = this.m_Heap[this.m_Length - 1]),
                this.m_Length--,
                this.BubbleDown(),
                _
              );
            }
          }
          Push(_) {
            this.m_Heap.length == this.m_Length
              ? this.m_Heap.push(_)
              : (this.m_Heap[this.m_Length] = _),
              this.m_Length++,
              this.BubbleUp();
          }
          FindElement(_) {
            for (let _ = 0; _ < this.m_Length; _++)
              if (_(this.m_Heap[_]))
                return {
                  index: _,
                  element: this.m_Heap[_],
                };
          }
          LowerPriorityOfElement(_, _) {
            (this.m_Heap[_] = _), this.BubbleUp(_);
          }
          BubbleDown() {
            let _ = 0;
            do {
              const _ = _ * 2 + 1,
                _ = _ * 2 + 2;
              let _ = _;
              if (
                (_ < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[_], this.m_Heap[_]) > 0 &&
                  (_ = _),
                _ < this.m_Length &&
                  this.m_fnCompare(this.m_Heap[_], this.m_Heap[_]) > 0 &&
                  (_ = _),
                _ != _)
              ) {
                const _ = this.m_Heap[_];
                (this.m_Heap[_] = this.m_Heap[_]),
                  (this.m_Heap[_] = _),
                  (_ = _);
              } else break;
            } while (_ < this.m_Length);
          }
          BubbleUp(_) {
            let _ = _ || this.m_Length - 1;
            for (; _ > 0; ) {
              const _ = (_ - 1) >> 1;
              if (this.m_fnCompare(this.m_Heap[_], this.m_Heap[_]) > 0) {
                const _ = this.m_Heap[_];
                (this.m_Heap[_] = this.m_Heap[_]),
                  (this.m_Heap[_] = _),
                  (_ = _);
              } else break;
            }
          }
        }
        class _ {
          m_fnGetNeighbors;
          m_fnEstimateCosts;
          m_fnEquality;
          m_fnIterationCallback;
          constructor(_, _, _, _) {
            (this.m_fnGetNeighbors = _),
              (this.m_fnEstimateCosts = _),
              (this.m_fnEquality = _),
              (this.m_fnIterationCallback = _);
          }
          async FindPath(_, _, _) {
            let _ = new _((_, _) => _.cost - _.cost),
              _ = new Set();
            _.Push({
              node: _,
              cost: 0,
            });
            let _ = new Map(),
              _ = new Map(),
              _ = new Map(),
              _ = (await this.m_fnEstimateCosts([_], _))[0];
            _.set(_, _), _.set(_, 0);
            let _ = 0;
            for (; _.length > 0 && _ < _; ) {
              let _ = _.Pop();
              if (this.m_fnEquality(_.node, _)) {
                let _ = [],
                  _ = _.node;
                for (; _.has(_); ) _.push(_), (_ = _.get(_));
                let _ = [];
                for (let _ = _.length - 1; _ >= 0; _--)
                  _.push({
                    node: _[_],
                    cost: _.get(_[_]),
                  });
                return {
                  path: _,
                };
              }
              _.add(_.node);
              let _ = await this.m_fnGetNeighbors(_.node);
              if (_.length > 0) {
                let _ = await this.m_fnEstimateCosts(
                  _.map((_) => _.node),
                  _,
                );
                if (_.length != _.length)
                  return (
                    console.warn(
                      "Failed to fetch expected number of cost estimates. Failing pathfinding.",
                    ),
                    {}
                  );
                let _ = _.get(_.node);
                for (let _ = 0; _ < _.length; _++) {
                  const _ = _[_];
                  let _ = _ + _.cost;
                  if (
                    (!_.has(_.node) || _ < _.get(_.node)) &&
                    (_.set(_.node, _.node),
                    _.set(_.node, _),
                    _.set(_.node, _.cost + _[_]),
                    !_.has(_.node))
                  ) {
                    const _ = _.cost + _[_];
                    let _ = _.FindElement((_) => _.node == _.node);
                    _
                      ? _.element.cost > _ &&
                        _.LowerPriorityOfElement(_.index, {
                          node: _.node,
                          cost: _,
                        })
                      : _.Push({
                          node: _.node,
                          cost: _,
                        });
                  }
                }
              }
              _++, this.m_fnIterationCallback && this.m_fnIterationCallback();
            }
            throw new Error("No path found.");
          }
        }
        const _ = new _();
        window.g_LabsSandbox = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ extends _.Component {
          state = {
            appid: 0,
            appinfo: null,
            mode: "display",
            strSearch: "",
            rgSuggestions: [],
          };
          m_currentRequest = 0;
          constructor(_) {
            super(_),
              this.props.appidInitial &&
                (_._.EnsureAppInfoForAppIDs([this.props.appidInitial]).then(
                  () => {
                    const _ = _._.GetAppInfo(this.props.appidInitial);
                    this.setState({
                      appid: this.props.appidInitial,
                      appinfo: _._.GetAppInfo(this.props.appidInitial),
                    });
                  },
                ),
                (this.state.appid = this.props.appidInitial));
          }
          OnDisplayClicked() {
            this.setState({
              mode: "select",
            });
          }
          async UpdateAppSuggestions(_) {
            const _ = _.target.value && _.target.value.trim();
            if (!_?.length) {
              this.setState({
                strSearch: "",
                rgSuggestions: null,
              });
              return;
            }
            window.clearTimeout(this.m_currentRequest),
              (this.m_currentRequest = window.setTimeout(async () => {
                const _ = {
                    _: _._.COUNTRY,
                    _: _._.LANGUAGE,
                    realm: _._.k_ESteamRealmGlobal,
                    origin: self.origin,
                    _: "jsonfull",
                    term: _.replace(" ", "+"),
                    require_type: "game",
                    excluded_tags: [],
                    excluded_content_descriptors: [],
                  },
                  _ = `${_._.STORE_BASE_URL}search/suggest`,
                  _ = await _().get(_, {
                    params: _,
                    withCredentials: !0,
                  });
                let _;
                _?.data?.length
                  ? (_ = _.data.map((_) =>
                      (0, _.jsxs)(
                        "div",
                        {
                          className: _.Suggestion,
                          onClickCapture: () =>
                            this.SetSelectedApp(parseInt(_._)),
                          children: [
                            (0, _.jsx)("img", {
                              src: _.img,
                              className: _.LogoImage,
                            }),
                            (0, _.jsx)("div", {
                              className: _.AppName,
                              children:
                                _.name +
                                (this.props.showAppIds ? ` (${_._})` : ""),
                            }),
                          ],
                        },
                        `suggestion-${_._}`,
                      ),
                    ))
                  : (_ = []),
                  this.setState({
                    strSearch: _,
                    rgSuggestions: _,
                  });
              }, 250));
          }
          SetSelectedApp(_) {
            _ && _ != 0
              ? _._.EnsureAppInfoForAppIDs([_]).then(() => {
                  const _ = _._.GetAppInfo(_);
                  this.setState({
                    appid: _,
                    appinfo: _._.GetAppInfo(_),
                    mode: "display",
                  }),
                    this.props.fnOnSelection &&
                      this.props.fnOnSelection(_, this);
                })
              : this.setState({
                  appid: 0,
                  appinfo: null,
                  mode: "display",
                });
          }
          OnKeyUp(_) {
            _.keyCode == 27 &&
              this.setState({
                mode: "display",
              });
          }
          render() {
            const _ = this.props.classOverride ?? _.AppSelector;
            let _ = null;
            const _ = (0, _.jsx)(_._, {
              type: "text",
              onChange: this.UpdateAppSuggestions,
            });
            if (this.state.mode == "display") {
              const _ = this.state.appinfo
                ? this.state.appinfo.name +
                  (this.props.showAppIds ? ` (${this.state.appid})` : "")
                : (this.props.strPrompt ?? "Select game");
              _ = (0, _.jsx)("div", {
                className: _.AppDisplay,
                children: (0, _.jsx)("div", {
                  className: _.AppName,
                  children: _,
                }),
              });
            } else if (this.state.mode == "select") {
              const _ = this.state.strSearch.length > 0;
              _ = (0, _.jsxs)("div", {
                className: _.AppSelect,
                children: [
                  _,
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.Suggestions,
                      children: this.state.rgSuggestions,
                    }),
                ],
              });
            }
            return (0, _.jsx)("div", {
              className: _,
              onClick: this.OnDisplayClicked,
              onKeyUpCapture: this.OnKeyUp,
              children: _,
            });
          }
        }
        _([_._], _.prototype, "OnDisplayClicked", 1),
          _([_._], _.prototype, "UpdateAppSuggestions", 1),
          _([_._], _.prototype, "OnKeyUp", 1);
        class _ extends _.Component {
          render() {
            if (this.props.appid == 0)
              return (0, _.jsx)("div", {
                className: _.SimilarApp,
              });
            {
              const _ = _._.GetAppInfo(this.props.appid);
              if (!_ || !_.is_valid)
                return (0, _.jsx)("div", {
                  className: _.SimilarApp,
                });
              let _ = [];
              if (this.props.score) {
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      className: _.Spacer,
                    },
                    "score-spacer",
                  ),
                );
                const _ = Math.round(this.props.score * 100).toString() + "%";
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      className: _.Score,
                      children: _,
                    },
                    "score-value",
                  ),
                );
              }
              const _ = _.name + " (" + this.props.appid.toString() + ")",
                _ = this.props.fnOnSelected
                  ? this.props.fnOnSelected
                  : (_) => {};
              return (0, _.jsxs)("div", {
                className: _.SimilarApp,
                onClick: () => _(this.props.appid),
                children: [
                  (0, _.jsx)("div", {
                    className: _.AppName,
                    children: _,
                  }),
                  _,
                ],
              });
            }
          }
        }
        class _ extends _.Component {
          state = {};
          ref_app_a = _.createRef();
          ref_app_b = _.createRef();
          componentDidMount() {
            this.OnAppSelected();
          }
          OnAppSelected() {
            if (
              this.ref_app_a.current &&
              this.ref_app_b.current &&
              this.ref_app_a.current.state.appid &&
              this.ref_app_b.current.state.appid
            ) {
              const _ = this.ref_app_a.current.state.appid,
                _ = this.ref_app_b.current.state.appid,
                _ = `${_._.STORE_BASE_URL}labs/ajaxgetappsimilarities?appidtarget=${_}&appid[]=${_}`;
              _()
                .get(_)
                .then((_) => {
                  _.data && _.data.similarity_scores
                    ? this.setState({
                        score: _.data.similarity_scores[0],
                      })
                    : this.setState({
                        score: null,
                      });
                });
            }
          }
          render() {
            const _ = this.state.score
              ? (this.state.score * 100).toFixed(1) + "%"
              : "";
            return (0, _.jsxs)("div", {
              className: _.LabsSimilarity,
              children: [
                (0, _.jsx)(
                  _,
                  {
                    fnOnSelection: this.OnAppSelected,
                    ref: this.ref_app_a,
                    showAppIds: !0,
                    appidInitial: 268500,
                  },
                  "similar_app_a",
                ),
                (0, _.jsx)("div", {
                  className: _.HorizontalSpacer,
                }),
                (0, _.jsx)("div", {
                  className: _.Score,
                  children: _,
                }),
                (0, _.jsx)("div", {
                  className: _.HorizontalSpacer,
                }),
                (0, _.jsx)(
                  _,
                  {
                    fnOnSelection: this.OnAppSelected,
                    ref: this.ref_app_b,
                    showAppIds: !0,
                    appidInitial: 200510,
                  },
                  "similar_app_b",
                ),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnAppSelected", 1);
        let _ = class extends _.Component {
          selected_app = 0;
          similar_apps = [];
          similarity_scores = [];
          similarity_model = "default";
          app_selector_ref = _.createRef();
          constructor(_) {
            super(_),
              (0, _._)(this),
              _.default_app && this.SetSelectedApp(_.default_app);
          }
          componentDidMount() {
            this.app_selector_ref.current &&
              this.SetSelectedApp(this.app_selector_ref.current.state.appid);
          }
          OnSelectedApp(_) {
            _ && this.SetSelectedApp(_);
          }
          SetSelectedApp(_, _) {
            if (_ || _ != this.selected_app) {
              (this.similar_apps = []),
                (this.selected_app = _),
                this.app_selector_ref.current &&
                  this.app_selector_ref.current.SetSelectedApp(_);
              const _ = `${_._.STORE_BASE_URL}labs/ajaxgetsimilarapps?appid=${_}&model=${this.similarity_model}`;
              _()
                .get(_)
                .then((_) => {
                  if (_.data && _.data.appid == this.selected_app) {
                    let _ = new Set(
                      _.data.similar_appids.slice(0, this.props.max_similar),
                    );
                    _.add(_.data.appid),
                      _._.EnsureAppInfoForAppIDs(_).then(() => {
                        (this.similar_apps = _.data.similar_appids),
                          (this.similarity_scores = _.data.similarity_scores);
                      });
                  }
                });
            }
          }
          OnModelChanged(_, _) {
            (this.similarity_model = _.data),
              this.SetSelectedApp(this.selected_app, !0);
          }
          render() {
            let _ = [],
              _;
            const _ = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (_ = 0; _ < _; _++) {
              const _ = this.similar_apps[_],
                _ = this.similarity_scores[_];
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    score: _,
                    fnOnSelected: this.SetSelectedApp,
                  },
                  _,
                ),
              );
            }
            let _ = [];
            for (const _ of _.rgModelNames) {
              let _ = {
                label: (0, _.jsx)(
                  "div",
                  {
                    children: _,
                  },
                  _,
                ),
                data: _,
              };
              _.push(_);
            }
            return (0, _.jsxs)("div", {
              className: _.LabsSimilarGames,
              children: [
                (0, _.jsx)(_._, {
                  rgOptions: _,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, _.jsx)("h1", {
                  children: "Games similar to:",
                }),
                (0, _.jsx)(_, {
                  fnOnSelection: this.OnSelectedApp,
                  ref: this.app_selector_ref,
                  appidInitial: 268500,
                  showAppIds: !0,
                }),
                (0, _.jsx)("div", {
                  className: _.SimilarApps,
                  children: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "selected_app", 2),
          _([_._], _.prototype, "similar_apps", 2),
          _([_._], _.prototype, "similarity_scores", 2),
          _([_._], _.prototype, "similarity_model", 2),
          _([_._], _.prototype, "OnSelectedApp", 1),
          _([_._], _.prototype, "SetSelectedApp", 1),
          _([_._], _.prototype, "OnModelChanged", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          selected_app = void 0;
          selected_operator = void 0;
          constructor(_) {
            super(_),
              (0, _._)(this),
              (this.selected_app = _.app),
              (this.selected_operator = _.operator);
          }
          OnSelectedApp(_) {
            _ &&
              _ != this.selected_app &&
              ((this.selected_app = _),
              this.props.fnOnChange && this.props.fnOnChange());
          }
          OnSelectedOperator(_, _) {
            (this.selected_operator = _.data),
              this.props.fnOnChange && this.props.fnOnChange();
          }
          render() {
            let _ = [
              {
                label: (0, _.jsx)(
                  "div",
                  {
                    children: "Plus",
                  },
                  "Plus",
                ),
                data: "Plus",
              },
              {
                label: (0, _.jsx)(
                  "div",
                  {
                    children: "Minus",
                  },
                  "Minus",
                ),
                data: "Minus",
              },
            ];
            return (0, _.jsxs)("div", {
              className: _.Operand,
              children: [
                (0, _.jsx)("div", {
                  className: _.OperatorSelect,
                  children: (0, _.jsx)(_._, {
                    rgOptions: _,
                    onChange: this.OnSelectedOperator,
                    selectedOption: "Plus",
                  }),
                }),
                (0, _.jsx)(_, {
                  fnOnSelection: this.OnSelectedApp,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "selected_app", 2),
          _([_._], _.prototype, "selected_operator", 2),
          _([_._], _.prototype, "OnSelectedApp", 1),
          _([_._], _.prototype, "OnSelectedOperator", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          operands = [];
          similarity_model = "default";
          similar_apps = [];
          similarity_scores = [];
          operand_refs;
          constructor(_) {
            super(_), (0, _._)(this), (this.operand_refs = []);
            for (let _ = 0; _ < _.max_operands; _++)
              this.operand_refs.push(_.createRef());
          }
          OnModelChanged(_, _) {
            (this.similarity_model = _.data), this.RecomputeExpression();
          }
          OnAddOperand() {
            this.operands.length < this.props.max_operands &&
              this.operands.push({
                app: 0,
                operator: this.operands.length > 0 ? "Plus" : void 0,
              });
          }
          OnOperandChanged() {
            for (let _ = 0; _ < this.operands.length; _++) {
              const _ = this.operand_refs[_].current;
              (this.operands[_].app = _.selected_app),
                (this.operands[_].operator = _.selected_operator);
            }
            this.RecomputeExpression();
          }
          RecomputeExpression() {
            if (this.operands.length == 0) return;
            const _ = this.operands.map((_) => "appid[]=" + _.app.toString()),
              _ = `${_._.STORE_BASE_URL}labs/ajaxgetappvectors?${_.join("&")}&model=${this.similarity_model}`;
            _()
              .get(_)
              .then((_) => {
                if (
                  ((this.similar_apps = []),
                  (this.similarity_scores = []),
                  _.data && _.data.length == this.operands.length)
                ) {
                  let _ = _.data[0].components.map((_) => parseFloat(_));
                  for (let _ = 1; _ < this.operands.length; _++) {
                    const _ = _.data[_].components.map((_) => parseFloat(_));
                    this.operands[_].operator == "Plus"
                      ? (_ = _.map((_, _) => _ + _[_]))
                      : this.operands[_].operator == "Minus"
                        ? (_ = _.map((_, _) => _ - _[_]))
                        : console.log(
                            "Unexpected operator " + this.operands[_].operator,
                          );
                  }
                  const _ = _.map((_) => _ * _).reduce((_, _) => _ + _, 0),
                    _ = Math.sqrt(_);
                  if (_ > 1e-4) {
                    const _ = _.map((_) => _ / _)
                        .map((_) => "x[]=" + _)
                        .join("&"),
                      _ = `${_._.STORE_BASE_URL}labs/ajaxgetmostsimilarappstovector?${_}&model=${this.similarity_model}`;
                    _()
                      .get(_)
                      .then((_) => {
                        let _ = new Set(
                          _.data.similar_appids.slice(
                            0,
                            this.props.max_similar,
                          ),
                        );
                        _._.EnsureAppInfoForAppIDs(_).then(() => {
                          (this.similar_apps = _.data.similar_appids),
                            (this.similarity_scores = _.data.similarity_scores);
                        });
                      });
                  }
                }
              });
          }
          render() {
            let _ = [];
            for (const _ of _.rgModelNames) {
              let _ = {
                label: (0, _.jsx)(
                  "div",
                  {
                    children: _,
                  },
                  _,
                ),
                data: _,
              };
              _.push(_);
            }
            let _ = [],
              _ = 0;
            for (const _ of this.operands)
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    app: _.app,
                    operator: _.operator,
                    fnOnChange: this.OnOperandChanged,
                    ref: this.operand_refs[_],
                  },
                  _,
                ),
              ),
                _++;
            let _ = null;
            this.operands.length < this.props.max_operands &&
              (_ = (0, _.jsx)("div", {
                className: _.AddOperand,
                onClick: this.OnAddOperand,
                children: "+",
              }));
            let _ = [];
            const _ = Math.min(
              this.similar_apps.length,
              this.similarity_scores.length,
              this.props.max_similar,
            );
            for (let _ = 0; _ < _; _++) {
              const _ = this.similar_apps[_],
                _ = this.similarity_scores[_];
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    score: _,
                  },
                  _,
                ),
              );
            }
            return (0, _.jsxs)("div", {
              className: _.LabsMixer,
              children: [
                (0, _.jsx)(_._, {
                  rgOptions: _,
                  onChange: this.OnModelChanged,
                  selectedOption: "default",
                }),
                (0, _.jsx)("h1", {
                  children: "Mixture",
                }),
                _,
                _,
                (0, _.jsx)("h1", {
                  children: "Games similar to mixture",
                }),
                (0, _.jsx)("div", {
                  className: _.SimilarApps,
                  children: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "operands", 2),
          _([_._], _.prototype, "similarity_model", 2),
          _([_._], _.prototype, "similar_apps", 2),
          _([_._], _.prototype, "similarity_scores", 2),
          _([_._], _.prototype, "OnModelChanged", 1),
          _([_._], _.prototype, "OnAddOperand", 1),
          _([_._], _.prototype, "OnOperandChanged", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this);
          }
          app_start = 0;
          app_end = 0;
          in_progress = !1;
          progress_iteration = 0;
          found_path = void 0;
          IterationCallback() {
            this.progress_iteration++;
          }
          Pathfind() {
            this.in_progress ||
              ((this.in_progress = !0),
              (this.progress_iteration = 0),
              (this.found_path = void 0),
              _.ComputePathBetweenApps(
                this.app_start,
                this.app_end,
                0.75,
                3,
                10,
                200,
                this.IterationCallback,
              )
                .then((_) => {
                  (this.in_progress = !1),
                    _._.EnsureAppInfoForAppIDs(_.map((_) => _.appid)).then(
                      () => {
                        this.found_path = _;
                      },
                    );
                })
                .catch((_) => {
                  console.warn(
                    "Caught pathfinding failure because: " + _.toString(),
                  ),
                    (this.in_progress = !1),
                    (this.found_path = void 0);
                }));
          }
          OnSelectedStartApp(_) {
            _._.EnsureAppInfoForAppIDs([_]).then(() => {
              this.app_start = _;
            });
          }
          OnSelectedEndApp(_) {
            _._.EnsureAppInfoForAppIDs([_]).then(() => {
              this.app_end = _;
            });
          }
          render() {
            const _ =
                this.app_start != 0 &&
                this.app_end != 0 &&
                !this.in_progress &&
                this.app_start != this.app_end,
              _ = _ ? _.ComputeButton : (0, _._)(_.ComputeButton, _.Disable);
            let _ = null;
            this.in_progress
              ? (_ = (0, _.jsx)("div", {
                  className: _.ProgressMessage,
                  children: "Finding path, step " + this.progress_iteration,
                }))
              : this.found_path
                ? (_ = (0, _.jsx)("div", {
                    className: _.ProgressMessage,
                    children: "Found path",
                  }))
                : (_ = (0, _.jsx)("div", {
                    className: _.ProgressMessage,
                    children: "No path found",
                  }));
            let _ = [];
            if (this.found_path)
              for (let _ = 0; _ < this.found_path.length; _++) {
                const _ = this.found_path[_];
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      appid: _.appid,
                      score: _.similarity,
                    },
                    "pathstep" + _,
                  ),
                );
              }
            return (0, _.jsxs)("div", {
              className: _.LabsPathfinder,
              children: [
                (0, _.jsxs)("div", {
                  className: _.SelectEndpoints,
                  children: [
                    (0, _.jsx)(_, {
                      fnOnSelection: this.OnSelectedStartApp,
                      strPrompt: "Select start game",
                    }),
                    (0, _.jsx)(_, {
                      fnOnSelection: this.OnSelectedEndApp,
                      strPrompt: "Select end game",
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _,
                  onClick: _ ? this.Pathfind : () => {},
                  children: "Pathfind!",
                }),
                _,
                (0, _.jsx)("div", {
                  className: _.Path,
                  children: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "app_start", 2),
          _([_._], _.prototype, "app_end", 2),
          _([_._], _.prototype, "in_progress", 2),
          _([_._], _.prototype, "progress_iteration", 2),
          _([_._], _.prototype, "found_path", 2),
          _([_._], _.prototype, "IterationCallback", 1),
          _([_._], _.prototype, "Pathfind", 1),
          _([_._], _.prototype, "OnSelectedStartApp", 1),
          _([_._], _.prototype, "OnSelectedEndApp", 1),
          (_ = _([_._], _));
        function _() {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("h1", {
                children: "Similar Games",
              }),
              (0, _.jsx)(_, {
                max_similar: 10,
              }),
              (0, _.jsx)("div", {
                className: _.Spacer,
              }),
              (0, _.jsx)("h1", {
                children: "Similarity",
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)("div", {
                className: _.Spacer,
              }),
              (0, _.jsx)("h1", {
                children: "Mixer",
              }),
              (0, _.jsx)(_, {
                max_similar: 10,
                max_operands: 6,
              }),
              (0, _.jsx)("div", {
                className: _.Spacer,
              }),
              (0, _.jsx)("h1", {
                children: "Pathfinder",
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        function _(_) {
          return "unknown EStoreAppSimilarityPopularityFactor ( " + _ + " )";
        }
        function _(_) {
          return "unknown EClustersFromPlaytimeSort ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.tag_score_factor || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    tag_score_factor: {
                      _: 1,
                      _: 1,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    playtime_max_seconds: {
                      _: 10,
                      _: 36e4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    playtime_max_games: {
                      _: 11,
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    playtime_score_factor: {
                      _: 12,
                      _: 0.9,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    popularity_factor: {
                      _: 20,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    popularity_reciprocal: {
                      _: 21,
                      _: 1e4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    popularity_base_score: {
                      _: 22,
                      _: "5000000",
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    played_since: {
                      _: 23,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "StoreAppSimilarityPriorityOptions";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    country_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    ids: {
                      _: 3,
                      _: _._,
                      _: !0,
                      _: !0,
                    },
                    options: {
                      _: 4,
                      _: _,
                    },
                    debug: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_owned_games: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.items || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    items: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [50], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._,
                    },
                    already_owned: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    weight: {
                      _: 3,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    weight_before_dedupe: {
                      _: 4,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    debug_matches: {
                      _: 50,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    debug_popularity: {
                      _: 51,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.source_app || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    source_app: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    weight: {
                      _: 2,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    similarity: {
                      _: 3,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_MatchDebugInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rank || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rank: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    popularity_factor: {
                      _: 2,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    weight_before_popularity: {
                      _: 3,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_PrioritizeAppsForUser_Response_ResultItem_PopularityDebugInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    sort: {
                      _: 2,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    clusters_to_return: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cluster_index: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    context: {
                      _: 10,
                      _: _._,
                    },
                    data_request: {
                      _: 11,
                      _: _._,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clusters || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clusters: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cluster_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cluster_id: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    playtime_forever: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    playtime_2weeks: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    last_played: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    played_appids: {
                      _: 5,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    similar_items_appids: {
                      _: 6,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    similar_items: {
                      _: 7,
                      _: _._,
                      _: !0,
                      _: !0,
                    },
                    similar_item_popularity_score: {
                      _: 8,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreAppSimilarity_IdentifyClustersFromPlaytime_Response_Cluster";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "StoreAppSimilarity.PrioritizeAppsForUser#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.PrioritizeAppsForUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "StoreAppSimilarity.IdentifyClustersFromPlaytime#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.IdentifyClustersFromPlaytime = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          m_SteamInterface;
          constructor(_) {
            this.m_SteamInterface = _;
          }
          LoadPlaytimeClusters(_, _, _, _) {
            return new _(this.m_SteamInterface, _, _, _, _);
          }
        }
        class _ {
          m_callbacksLoaded = new _._();
          m_rgClusters;
          constructor(_, _, _, _, _) {
            const _ = _._.Init(_);
            (0, _._)(_),
              _ && (0, _._)(_, _),
              _.Body().set_steamid(_ || _._.steamid),
              _ && _.Body().set_clusters_to_return(_),
              _.Body().set_sort(_),
              _.IdentifyClustersFromPlaytime(_.GetServiceTransport(), _).then(
                (_) => {
                  const _ = _.Body();
                  this.m_rgClusters = [];
                  for (const _ of _.clusters())
                    this.m_rgClusters.push(this.ReadCluster(_, _));
                  this.m_callbacksLoaded.Dispatch(this.m_rgClusters);
                },
              );
          }
          ReadCluster(_, _) {
            let _;
            return (
              _ && (_ = _.similar_items().map((_) => _._.Get().ReadItem(_, _))),
              {
                nClusterID: _.cluster_id(),
                nPlaytimeMinutes: _.playtime_forever(),
                nPlaytimeMinutes2Weeks: _.playtime_2weeks(),
                rtLastPlayed: _.last_played(),
                rgAppIDsPlayed: _.played_appids(),
                rgSimilarItems: _.filter((_) => !!_),
                rgSimilarAppIDs: _.similar_items_appids(),
                flPopularityScore: _.similar_item_popularity_score(),
              }
            );
          }
          RegisterOnReadyCallback(_) {
            const _ = this.m_callbacksLoaded.Register(_);
            return (
              this.m_rgClusters !== void 0 &&
                window.setTimeout(() => _(this.m_rgClusters), 0),
              _
            );
          }
        }
        function _(_, _, _, _ = _, _ = null, _ = []) {
          const [_, _] = _.useState(null);
          return (
            _.useEffect(
              () => (
                _(null),
                _
                  ? _.LoadPlaytimeClusters(_, _, _, _).RegisterOnReadyCallback(
                      _,
                    ).Unregister
                  : void 0
              ),
              [_, _, _, ..._],
            ),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { SteamInterface: _ } = _,
            _ = _.useRef(void 0);
          return (
            _.current || (_.current = new _(_)),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsx)("p", {
                      children:
                        "This data is generated by analyzing games based on similar tags, and generating clusters from that.  We then look at your playtime history to see what games are in clusters together, and suggest other popular games in those clusters.",
                    }),
                    (0, _.jsxs)("p", {
                      children: [
                        "You can also ",
                        (0, _.jsx)("a", {
                          href: "http://store-tc.k.steam.net/graph",
                          target: "_blank",
                          children: "browse the cluster data graphically",
                        }),
                        " (requires Rack VPN).",
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  SimilarityStore: _.current,
                }),
              ],
            })
          );
        }
        const _ = {
          [_]: "Total Playtime",
          [_]: "Number of Played Games",
          [_]: "Most Recently Played",
        };
        function _(_) {
          const { SimilarityStore: _ } = _,
            [_, _] = _.useState(_._.steamid),
            [_, _] = _.useState("10"),
            [_, _] = _.useState(_),
            _ = _.useCallback((_) => _(_.currentTarget.value), [_]),
            _ = _.useCallback((_) => _(_.currentTarget.value), [_]),
            _ = _.useCallback((_) => _(_.data), [_]);
          let _ = !1;
          const _ = _.useRef(_._.steamid),
            _ = _ && new _._(_);
          _ &&
            _.BIsValid() &&
            _.BIsIndividualAccount() &&
            ((_.current = _.ConvertTo64BitString()), (_ = !0));
          let _;
          _ && !isNaN(parseInt(_)) && (_ = parseInt(_));
          const _ = _.useMemo(() => {
              let _ = [];
              for (let _ in _)
                _.push({
                  data: Number(_),
                  label: _[_],
                });
              return _;
            }, []),
            _ = _(
              _,
              {
                include_assets: !0,
                include_basic_info: !0,
              },
              _.current,
              _,
              _,
            );
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsxs)(_._, {
                className: _.ClusterConfig,
                children: [
                  (0, _.jsx)(_._, {
                    label: "SteamID",
                    type: "text",
                    value: _,
                    onChange: _,
                    description: !_ && "Invalid SteamID",
                  }),
                  (0, _.jsx)(_._, {
                    label: "Clusters to return (Set to blank for all clusters)",
                    type: "text",
                    value: _,
                    onChange: _,
                  }),
                  (0, _.jsx)(_._, {
                    label: "Sort clusters by",
                    rgOptions: _,
                    selectedOption: _,
                    onChange: _,
                  }),
                ],
              }),
              _ && !_ && (0, _.jsx)(_._, {}),
              _ &&
                (0, _.jsx)(_, {
                  rgPlaytimeClusters: _,
                }),
            ],
          });
        }
        function _(_) {
          const { rgPlaytimeClusters: _ } = _;
          return (0, _.jsx)("div", {
            children: _.map((_) =>
              (0, _.jsx)(
                _._,
                {
                  children: (0, _.jsx)(_, {
                    cluster: _,
                  }),
                },
                _.nClusterID,
              ),
            ),
          });
        }
        function _(_) {
          const { cluster: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _(!0), [_]),
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _(!0), [_]),
            _ = (0, _._)({
              onEnter: _,
            });
          return (0, _.jsxs)("div", {
            ref: _,
            className: _.PlaytimeCluster,
            children: [
              (0, _.jsxs)("div", {
                className: _.ClusterInfo,
                children: [
                  (0, _.jsxs)("h1", {
                    children: ["Cluster ", _.nClusterID],
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsxs)("div", {
                      className: _.Overview,
                      children: [
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)("b", {
                              children: "Total Playtime:",
                            }),
                            " ",
                            Math.floor(_.nPlaytimeMinutes / 6) / 10,
                            "hr",
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)("b", {
                              children: "Last Played:",
                            }),
                            " ",
                            (0, _._)(_.rtLastPlayed),
                            " ",
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)("b", {
                              children: "Games played:",
                            }),
                            " ",
                            _ &&
                              _.rgAppIDsPlayed.map((_) =>
                                (0, _.jsxs)(
                                  _.Fragment,
                                  {
                                    children: [
                                      (0, _.jsx)(_, {
                                        appid: _,
                                      }),
                                      ", ",
                                    ],
                                  },
                                  _,
                                ),
                              ),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)("b", {
                              children: "Popularity Score:",
                            }),
                            " ",
                            Math.floor(_.flPopularityScore * 100),
                            "% \xA0",
                            (0, _.jsx)("span", {
                              title:
                                "Based on the top four items; we might decide not to show clusters if this score is less than some threshold, maybe 90%",
                              style: {
                                cursor: "default",
                              },
                              children: "(?)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.ClusterMembers,
                children: [
                  (0, _.jsx)("h3", {
                    children: "Similar titles:",
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)("ul", {
                      children: _.rgSimilarItems.map((_, _) =>
                        _ || _ < 4
                          ? (0, _.jsx)(
                              "li",
                              {
                                children: (0, _.jsx)(_, {
                                  item: _,
                                }),
                              },
                              _.GetUniqueID(),
                            )
                          : null,
                      ),
                    }),
                  }),
                  !_ &&
                    (0, _.jsxs)(_._, {
                      onClick: _,
                      children: ["Show all ", _.rgSimilarItems.length],
                    }),
                ],
              }),
            ],
          });
        }
        const _ = {};
        function _(_) {
          const { appid: _ } = _,
            [_] = (0, _._)(_, _);
          return _
            ? (0, _.jsx)("a", {
                className: _.PlayedGame,
                href: _.GetStorePageURL(),
                children: _.GetName(),
              })
            : null;
        }
        function _(_) {
          const { item: _ } = _;
          return (0, _.jsxs)("a", {
            className: _.SimilarTitle,
            href: _.GetStorePageURL(),
            children: [
              (0, _.jsx)("img", {
                src: _.GetAssets().GetSmallCapsuleURL(),
                loading: "lazy",
              }),
              _.GetName(),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = "-1";
        var _ = ((_) => (
            (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.AccountName = 1)] = "AccountName"),
            (_[(_.EmailCode = 2)] = "EmailCode"),
            (_[(_.TwoFactorCode = 3)] = "TwoFactorCode"),
            (_[(_.Complete = 4)] = "Complete"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.None = 0)] = "None"),
            (_[(_.InvalidCode = 1)] = "InvalidCode"),
            _
          ))(_ || {});
        class _ {
          m_strBaseURL = "";
          m_strOAuthClientID = "";
          m_fnLoginComplete = null;
          m_bRequestInFlight = !1;
          m_userFields = {
            strUserName: "",
            strPassword: "",
            strTwoFactorCode: "",
            strEmailAuthCode: "",
            emailSteamID: "",
            gidCaptcha: "",
            strCaptchaText: "",
            bRememberLogin: !1,
          };
          m_eCurrentStep = 1;
          m_strErrorMessage = "";
          m_strEmailDomain = "";
          m_strCaptchaURL = "";
          m_eSteamGuardCodeError = 0;
          constructor(_, _) {
            (0, _._)(this),
              (this.m_strBaseURL = _),
              (this.m_strOAuthClientID = _ ?? "");
          }
          Shutdown() {
            this.m_fnLoginComplete = null;
          }
          SetLoginCompleteCallback(_) {
            this.m_fnLoginComplete = _;
          }
          SetUserName(_) {
            this.m_userFields.strUserName = _;
          }
          GetUserName() {
            return this.m_userFields.strUserName;
          }
          SetPassword(_) {
            this.m_userFields.strPassword = _;
          }
          GetPassword() {
            return this.m_userFields.strPassword;
          }
          SetRememberPassword(_) {
            this.m_userFields.bRememberLogin = _;
          }
          GetRememberPassword() {
            return this.m_userFields.bRememberLogin;
          }
          SetEmailAuthCode(_) {
            this.m_userFields.strEmailAuthCode = _;
          }
          GetEmailAuthCode() {
            return this.m_userFields.strEmailAuthCode;
          }
          GetEmailDomain() {
            return this.m_strEmailDomain;
          }
          SetTwoFactorCode(_) {
            this.m_userFields.strTwoFactorCode = _;
          }
          GetTwoFactorCode() {
            return this.m_userFields.strTwoFactorCode;
          }
          SetCaptchaText(_) {
            this.m_userFields.strCaptchaText = _;
          }
          GetCaptchaText() {
            return this.m_userFields.strCaptchaText;
          }
          IsRequestInFlight() {
            return this.m_bRequestInFlight;
          }
          GetCurrentStep() {
            return this.m_eCurrentStep;
          }
          GetErrorMessage() {
            return this.m_strErrorMessage;
          }
          SetInitialErrorMessage(_) {
            this.m_strErrorMessage = _;
          }
          GetSteamGuardCodeError() {
            return this.m_eSteamGuardCodeError;
          }
          GetCaptchaURL() {
            return this.m_strCaptchaURL;
          }
          async DoLogin() {
            if (this.m_bRequestInFlight) return;
            (0, _._)(() => {
              (this.m_bRequestInFlight = !0), (this.m_strErrorMessage = "");
            });
            let _ = await (0, _._)(
              this.m_strBaseURL,
              this.m_strOAuthClientID,
              this.m_userFields,
            );
            (0, _._)(() => {
              (this.m_bRequestInFlight = !1), this.UpdateLoginResult(_);
            });
          }
          UpdateLoginResult(_) {
            if (!_) {
              console.log("Login timeout"),
                (this.m_strErrorMessage = (0, _._)(
                  "#ConnectionTrouble_FailedToConnect",
                ));
              return;
            }
            if (_.login_complete) {
              if (((this.m_eCurrentStep = 4), this.m_fnLoginComplete)) {
                let _ = {
                  steamID: _.oauth ? _.oauth.steamid : "",
                  strAccountName: _.oauth ? _.oauth.account_name : "",
                  strOAuthToken: _.oauth ? _.oauth.oauth_token : "",
                };
                this.m_fnLoginComplete(_);
              }
              return;
            }
            (this.m_strErrorMessage = _.message || ""),
              (this.m_eSteamGuardCodeError = 0),
              _.requires_twofactor
                ? (this.UpdateCaptchaURL(_),
                  this.m_eCurrentStep == 3 &&
                    !this.m_strErrorMessage &&
                    ((this.m_strErrorMessage = (0, _._)(
                      "#MobileLogin_IncorrectSteamGuard",
                    )),
                    (this.m_eSteamGuardCodeError = 1),
                    (this.m_userFields.strTwoFactorCode = "")),
                  (this.m_eCurrentStep = 3))
                : _.captcha_needed && _.captcha_gid
                  ? ((this.m_eCurrentStep = 1),
                    this.UpdateCaptchaURL(_.captcha_gid))
                  : _.emailauth_needed
                    ? (_.emaildomain && (this.m_strEmailDomain = _.emaildomain),
                      _.emailsteamid &&
                        (this.m_userFields.emailSteamID = _.emailsteamid),
                      this.m_eCurrentStep == 2 &&
                        !this.m_strErrorMessage &&
                        ((this.m_strErrorMessage = (0, _._)(
                          "#MobileLogin_IncorrectSteamGuard",
                        )),
                        (this.m_eSteamGuardCodeError = 1),
                        (this.m_userFields.strEmailAuthCode = "")),
                      (this.m_eCurrentStep = 2))
                    : _.agreement_session_url
                      ? (this.Shutdown(),
                        console.log(window.location.href),
                        (window.location.href =
                          _.agreement_session_url +
                          "&redir=" +
                          window.location.href))
                      : console.log("Unhandled login error");
          }
          async RefreshCaptcha() {
            let _ = await (0, _._)(this.m_strBaseURL);
            if (!_) {
              console.log("Failed to get captcha");
              return;
            }
            this.UpdateCaptchaURL(_);
          }
          UpdateCaptchaURL(_) {
            if (
              ((this.m_userFields.gidCaptcha = _),
              (this.m_userFields.strCaptchaText = ""),
              _ == _)
            ) {
              this.m_strCaptchaURL = "";
              return;
            }
            this.m_strCaptchaURL = (0, _._)(this.m_strBaseURL, _);
          }
        }
        _([_._], _.prototype, "m_bRequestInFlight", 2),
          _([_._], _.prototype, "m_userFields", 2),
          _([_._], _.prototype, "m_eCurrentStep", 2),
          _([_._], _.prototype, "m_strErrorMessage", 2),
          _([_._], _.prototype, "m_strEmailDomain", 2),
          _([_._], _.prototype, "m_strCaptchaURL", 2),
          _([_._], _.prototype, "m_eSteamGuardCodeError", 2),
          _([_._], _.prototype, "DoLogin", 1),
          _([_._.bound], _.prototype, "UpdateCaptchaURL", 1);
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        let _ = class extends _.Component {
          m_manager;
          constructor(_) {
            super(_),
              (this.m_manager = new _(this.props.baseURL)),
              this.props.onLoginComplete &&
                this.m_manager.SetLoginCompleteCallback(
                  this.props.onLoginComplete,
                );
          }
          componentWillUnmount() {
            this.m_manager.Shutdown();
          }
          render() {
            let {
                baseURL: _,
                onLoginComplete: _,
                className: _,
                ..._
              } = this.props,
              _ = (0, _._)(_().LoginDialog, _),
              _ = this.m_manager.GetCurrentStep(),
              _ = this.m_manager.GetErrorMessage();
            return (0, _.jsxs)("div", {
              className: _,
              ..._,
              children: [
                (0, _.jsx)("div", {
                  className: _().LoginPanelBackground,
                  children: (0, _.jsx)(_.Qte, {}),
                }),
                (0, _.jsxs)("div", {
                  className: _().LoginPanelContent,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        text: _,
                      }),
                    _ == _.AccountName &&
                      (0, _.jsx)(_, {
                        manager: this.m_manager,
                        autoFocus: this.props.autoFocus,
                      }),
                    _ == _.TwoFactorCode &&
                      (0, _.jsx)(_, {
                        manager: this.m_manager,
                        authtype: _.TwoFactorCode,
                      }),
                    _ == _.EmailCode &&
                      (0, _.jsx)(_, {
                        manager: this.m_manager,
                        authtype: _.EmailCode,
                      }),
                    _ == _.Complete &&
                      (0, _.jsx)("div", {
                        className: _().LoginComplete,
                        children: (0, _.jsx)(_._, {}),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().ErrorMessage,
            children: _.text,
          });
        }
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                nNameSize: 0,
                nPassSize: 0,
              });
          }
          OnSubmit(_) {
            _.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeName(_) {
            let _ = _.target.value || "";
            this.props.manager.SetUserName(_.target.value),
              _.length > 24 && _.length < 39
                ? this.setState({
                    nNameSize: 1,
                  })
                : _.length > 38
                  ? this.setState({
                      nNameSize: 2,
                    })
                  : this.setState({
                      nNameSize: 0,
                    });
          }
          OnChangePassword(_) {
            let _ = _.target.value || "";
            (_ = _.replace(/[^\x00-\x7F]/g, "")),
              this.props.manager.SetPassword(_),
              _.length > 19 && _.length < 39
                ? this.setState({
                    nPassSize: 1,
                  })
                : _.length > 38
                  ? this.setState({
                      nPassSize: 2,
                    })
                  : this.setState({
                      nPassSize: 0,
                    });
          }
          OnChangeRememberPass(_) {
            this.props.manager.SetRememberPassword(_.target.checked);
          }
          render() {
            let _ = this.props.manager,
              _,
              _;
            return (
              this.state.nPassSize == 1
                ? (_ = _().MedPass)
                : this.state.nPassSize == 2
                  ? (_ = _().LargePass)
                  : (_ = _().DefaultPass),
              this.state.nNameSize == 1
                ? (_ = _().MedName)
                : this.state.nNameSize == 2
                  ? (_ = _().LargeName)
                  : (_ = _().DefaultNAme),
              (0, _.jsxs)("div", {
                className: _().AccountPasswordPanel,
                children: [
                  (0, _.jsx)("div", {
                    className: _().SigninTitle,
                    children: (0, _._)("#Login_SignInTitle"),
                  }),
                  (0, _.jsxs)("form", {
                    className: _().AccountPasswordForm,
                    onSubmit: this.OnSubmit,
                    children: [
                      (0, _.jsx)(_._, {
                        autoFocus: this.props.autoFocus,
                        className: (0, _._)(_().AccountNameLabel, _),
                        label: (0, _._)("#Login_AccountName"),
                        type: "text",
                        value: _.GetUserName(),
                        focusOnMount: !0,
                        maxLength: 64,
                        onChange: this.OnChangeName,
                      }),
                      (0, _.jsx)(_._, {
                        className: (0, _._)(_().PasswordDots, _),
                        label: (0, _._)("#Login_Password"),
                        type: "password",
                        autoComplete: "off",
                        maxLength: 64,
                        size: 64,
                        value: _.GetPassword(),
                        onChange: this.OnChangePassword,
                      }),
                      (0, _.jsx)(_._, {
                        className: _().RememberMeCheck,
                        label: (0, _._)("#Login_RememberMe"),
                        disabled: !1,
                        onChange: () => this.OnChangeRememberPass,
                        checked: _.GetRememberPassword(),
                      }),
                      _.GetCaptchaURL() &&
                        (0, _.jsx)(_, {
                          manager: _,
                        }),
                      (0, _.jsx)(_._, {
                        disabled: this.props.manager.IsRequestInFlight(),
                        children: (0, _._)("#Login_SignIn").toLocaleUpperCase(),
                      }),
                    ],
                  }),
                  (0, _.jsx)("a", {
                    className: _().NeedHelpLink,
                    href: _._.HELP_BASE_URL,
                    children: (0, _._)("#Login_ForgotPassword"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().LoginCreateSeperator,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SteamUpsellContainer,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().SteamUpsell,
                        children: (0, _._)("#Login_NoSteamAccount"),
                      }),
                      (0, _.jsx)("div", {
                        className: _().CreateAccountLink,
                        children: (0, _.jsx)("a", {
                          href: `${_._.STORE_BASE_URL}join/`,
                          children: (0, _._)("#Login_CreateAccount"),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          }
        };
        _([_._], _.prototype, "OnSubmit", 1),
          _([_._], _.prototype, "OnChangeName", 1),
          _([_._], _.prototype, "OnChangePassword", 1),
          _([_._], _.prototype, "OnChangeRememberPass", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          OnCaptchaText(_) {
            this.props.manager.SetCaptchaText(_.target.value);
          }
          RefreshCaptcha(_) {
            this.props.manager.RefreshCaptcha();
          }
          render() {
            let _ = this.props.manager;
            return (0, _.jsxs)("div", {
              className: _().CaptchaContainer,
              children: [
                (0, _.jsxs)("div", {
                  className: _().CaptchaBlock,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().CaptchaImageAndInput,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().CaptchaImageBox,
                          children: (0, _.jsx)("img", {
                            className: _().CaptchaImage,
                            src: _.GetCaptchaURL(),
                          }),
                        }),
                        (0, _.jsx)(_._, {
                          className: _().CaptchaInput,
                          type: "text",
                          autoComplete: "off",
                          maxLength: 6,
                          value: _.GetCaptchaText(),
                          onChange: this.OnCaptchaText,
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _().ErrorMessage,
                      children: (0, _._)("#Login_CaptchaVerification"),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  children: (0, _.jsx)("span", {
                    className: _().RefreshCaptchaText,
                    onClick: this.RefreshCaptcha,
                    children: (0, _._)("#Login_RefreshCaptcha"),
                  }),
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnCaptchaText", 1),
          _([_._], _.prototype, "RefreshCaptcha", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          OnSubmit(_) {
            _.preventDefault(), this.props.manager.DoLogin();
          }
          OnChangeAuthCode(_) {
            this.props.authtype == _.TwoFactorCode
              ? this.props.manager.SetTwoFactorCode(_.target.value)
              : this.props.manager.SetEmailAuthCode(_.target.value);
          }
          render() {
            let _ = this.props.manager,
              _ = "",
              _ = null,
              _ = "",
              _,
              _ = _.GetSteamGuardCodeError() == _.InvalidCode;
            switch (this.props.authtype) {
              case _.TwoFactorCode:
                (_ = _.GetTwoFactorCode()),
                  (_ = (0, _._)("#Login_Enter2FA")),
                  (_ = (0, _.jsx)(_.kaY, {})),
                  (_ = (0, _._)("#Login_Enter2FAHelp"));
                break;
              case _.EmailCode:
                (_ = _.GetEmailAuthCode()),
                  (_ = (0, _._)(
                    "#Login_SentSteamguard",
                    (0, _.jsxs)("span", {
                      className: _().Highlight,
                      children: ["@", _.GetEmailDomain()],
                    }),
                  )),
                  (_ = (0, _._)("#Login_EnterSteamguard")),
                  (_ = (0, _.jsx)(_.Lh2, {}));
                break;
              default:
                break;
            }
            return (0, _.jsxs)("div", {
              className: _().AuthenticationPanel,
              children: [
                (0, _.jsx)(_._, {
                  children: (0, _._)("#Login_SigningIn"),
                }),
                (0, _.jsx)("div", {
                  className: _().SigningInAccountName,
                  children: _.GetUserName(),
                }),
                (0, _.jsx)(_._, {
                  children: _,
                }),
                (0, _.jsxs)("div", {
                  className: _().AuthenticatorInputcontainer,
                  children: [
                    _,
                    (0, _.jsxs)("form", {
                      className: _().AccountPasswordForm,
                      onSubmit: this.OnSubmit,
                      children: [
                        (0, _.jsx)(_._, {
                          className: (0, _._)(_().AccountName),
                          label: "Steam Guard Code",
                          type: "text",
                          autoComplete: "off",
                          focusOnMount: !0,
                          maxLength: 64,
                          value: _,
                          onChange: this.OnChangeAuthCode,
                        }),
                        (0, _.jsx)(_._, {
                          disabled: this.props.manager.IsRequestInFlight(),
                          children: (0, _._)(
                            "#Login_SteamguardSubmit",
                          ).toLocaleUpperCase(),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)("a", {
                  className: (0, _._)(
                    _().NeedHelpLink,
                    _ ? _().NeedHelpHighlight : null,
                  ),
                  href: "http://help.steampowered.com/",
                  children: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnSubmit", 1),
          _([_._], _.prototype, "OnChangeAuthCode", 1),
          (_ = _([_._], _));
        var _ = __webpack_require__("chunkid");
        const _ = [
          {
            path: "similarity",
            render: () => (0, _.jsx)(_, {}),
            name: "ML Similarity",
          },
          {
            path: "clustering",
            render: (_) =>
              (0, _.jsx)(_, {
                SteamInterface: _.SteamInterface,
              }),
            name: "Tag Clustering",
            requires_login: !0,
          },
        ];
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _._.logged_in,
            _ = (0, _._)();
          if (
            ((0, _.useEffect)(() => {
              _.Init(_), _(!0);
            }, [_]),
            !_)
          )
            return (0, _.jsx)("div", {
              className: _.App,
            });
          const _ = {
            SteamInterface: _,
          };
          return (0, _.jsx)("div", {
            className: _.App,
            children: (0, _.jsxs)("div", {
              className: _.Container,
              children: [
                (0, _.jsxs)("div", {
                  className: _.TopSection,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.Header,
                      children: "Labs Sandbox",
                    }),
                    (0, _.jsx)("div", {
                      className: _.Body,
                      children:
                        "Internal testbed page for Steam Labs experiments",
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _.Tabs,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        _: `${_._.LabsSandbox()}/${_.path}`,
                        className: _.Tab,
                        activeClassName: _.Active,
                        children: _.name,
                      },
                      _.path,
                    ),
                  ),
                }),
                (0, _.jsx)("div", {
                  className: _.SandboxSection,
                  children: (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_._, {
                      children: _.map((_, _) =>
                        (0, _.jsx)(
                          _._,
                          {
                            path: `${_._.LabsSandbox()}/${_.path}`,
                            render: (_) =>
                              !_.requires_login || _
                                ? _.render({
                                    ..._,
                                    ..._,
                                  })
                                : (0, _.jsx)(_, {}),
                          },
                          _.path,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("h3", {
                children: "Please login to view this page.",
              }),
              (0, _.jsx)(_, {
                baseURL: _._.STORE_BASE_URL,
                onLoginComplete: () => window.location.reload(),
              }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = (_) => {
            const _ = (0, _._)(_.nAppID),
              _ = (0, _._)(_),
              _ = (0, _._)(_);
            if (!_.data || !_.data) return null;
            const _ = (0, _._)(_.data, "header");
            return (0, _.jsxs)("div", {
              className: _.AppCapsule,
              children: [
                (0, _.jsx)(_._, {
                  _: _,
                  children: (0, _.jsx)("img", {
                    className: _.Image,
                    src: _,
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _.UnderInfo,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.Name,
                      children: _.data.name,
                    }),
                    _.fWeight &&
                      (0, _.jsx)("div", {
                        className: _.Weight,
                        children: `${(_.fWeight * 100).toFixed(2)}%`,
                      }),
                  ],
                }),
              ],
            });
          },
          _ = (_) => {
            const [_, _] = _.useState([]),
              [_, _] = _.useState([]);
            return (
              _.useEffect(() => {
                (async () => {
                  const _ = {
                    rec: _.strName,
                    max: 40,
                    exclude: _.bExclude ? 1 : 0,
                    accountid: _.nAccountID,
                  };
                  try {
                    const _ = await _().get(
                      `${_._.STORE_BASE_URL}recommenderdemos/getlist`,
                      {
                        params: _,
                        timeout: 1e4,
                      },
                    );
                    _(_.data.appids), _(_.data.weights);
                  } catch (_) {
                    console.error("Error fetching data", _);
                  }
                })();
              }, [_.strName, _.nAccountID, _.bExclude]),
              (0, _.jsxs)("div", {
                className: _.RecommenderList,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Title,
                    children: _.strTitle,
                  }),
                  (0, _.jsx)("div", {
                    className: _.SubTitle,
                    children: _.strSubtitle,
                  }),
                  (0, _.jsx)("div", {
                    className: _.CapsuleList,
                    children: _?.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          nAppID: _,
                          fWeight: _[_],
                        },
                        `${_.strName}_${_}`,
                      ),
                    ),
                  }),
                ],
              })
            );
          },
          _ = (_) =>
            (0, _.jsxs)("div", {
              className: _.RecommenderList,
              children: [
                (0, _.jsx)("div", {
                  className: _.Title,
                  children: _.strName,
                }),
                (0, _.jsx)("div", {
                  className: _.SubTitle,
                  children: (0, _._)("#RecommenderDemos_ReleasedGames"),
                }),
                (0, _.jsx)("div", {
                  className: _.CapsuleList,
                  children: _.arrPlaytimeAppIDs.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        nAppID: _,
                      },
                      `${_.strName}_${_}`,
                    ),
                  ),
                }),
                (0, _.jsx)("div", {
                  className: _.Spacer,
                }),
                (0, _.jsx)("div", {
                  className: _.SubTitle,
                  children: (0, _._)("#RecommenderDemos_UnreleasedGames"),
                }),
                (0, _.jsx)("div", {
                  className: _.CapsuleList,
                  children: _.arrWishlistAppIDs.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        nAppID: _,
                      },
                      `${_.strName}_${_}`,
                    ),
                  ),
                }),
              ],
            }),
          _ = (_) => {
            const [_, _] = _.useState(void 0);
            return (
              _.useEffect(() => {
                (async () => {
                  const _ = {
                    max: 40,
                    exclude: _.bExclude ? 1 : 0,
                    accountid: _.nAccountID,
                  };
                  try {
                    const _ = await _().get(
                      `${_._.STORE_BASE_URL}recommenderdemos/getfests`,
                      {
                        params: _,
                        timeout: 1e4,
                      },
                    );
                    _(_.data);
                  } catch (_) {
                    console.error("Error fetching data", _);
                  }
                })();
              }, [_.bExclude, _.nAccountID]),
              (0, _.jsx)("div", {
                className: _.RecommenderFests,
                children: _?.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      strName: _.title,
                      nStartTime: _.start_date,
                      nEndTime: _.end_date,
                      arrPlaytimeAppIDs: _.playtime_appids,
                      arrWishlistAppIDs: _.wishlist_appids,
                    },
                    `Fest_${_.name}`,
                  ),
                ),
              })
            );
          },
          _ = () => {
            const [_, _] = _.useState(!1),
              [_, _] = _.useState(0),
              [_, _] = _.useState(""),
              [_, _] = _.useState(!0);
            if (!_._.logged_in)
              return (0, _.jsx)("div", {
                className: _.App,
                children: (0, _.jsxs)("div", {
                  className: _.Login,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.Text,
                      children: (0, _._)("#LoginText"),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        "btn_green_white_innerfade",
                        " btn_medium",
                      ),
                      onClick: _._,
                      children: (0, _.jsx)("span", {
                        children: (0, _._)("#LoginButton"),
                      }),
                    }),
                  ],
                }),
              });
            const _ = () => {
                isNaN(parseInt(_)) || (_(!0), _(parseInt(_)));
              },
              _ = () => {
                _(!1), _(0), _("");
              };
            return (0, _.jsx)(_._, {
              controller: "recommenderdemos",
              method: "default",
              feature: "capsule",
              children: (0, _.jsxs)("div", {
                className: _.RecommenderDemosApp,
                children: [
                  (0, _.jsx)("div", {
                    className: _.ValveOnly,
                    children: "(Valve-Only)",
                  }),
                  (0, _.jsxs)("div", {
                    className: _.TopControls,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.AccountIDControl,
                        children: [
                          (0, _.jsx)("input", {
                            type: "text",
                            value: _,
                            onChange: (_) => _(_.target.value),
                          }),
                          (0, _.jsx)(_._, {
                            className: _.RecDemoButton,
                            onClick: _,
                            children: "Use AccountID",
                          }),
                          (0, _.jsx)(_._, {
                            disabled: !_,
                            className: _.RecDemoButton,
                            onClick: _,
                            children: "Clear",
                          }),
                        ],
                      }),
                      _ &&
                        (0, _.jsxs)("div", {
                          className: _.AccountIDOverride,
                          children: [
                            (0, _._)("#RecommenderDemos_OverrideAccountID"),
                            (0, _.jsx)("div", {
                              className: _.AccountID,
                              children: _,
                            }),
                          ],
                        }),
                      (0, _.jsxs)("div", {
                        className: _.CheckBox,
                        children: [
                          (0, _.jsx)("input", {
                            type: "checkbox",
                            _: "exclude_owned_wishlisted",
                            checked: _,
                            onChange: () => _(!_),
                          }),
                          (0, _.jsx)("label", {
                            htmlFor: "exclude_owned_wishlisted",
                            children: (0, _._)("#RecommenderDemos_Exclude"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "WishlistsOneWeek",
                    strTitle: (0, _._)("#RecommenderDemos_HotWishlists"),
                    strSubtitle: (0, _._)(
                      "#RecommenderDemos_HotWishlists_Desc",
                    ),
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "NextFest",
                    strTitle: (0, _._)("#RecommenderDemos_NextFest"),
                    strSubtitle: (0, _._)("#RecommenderDemos_NextFestDesc"),
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "RecAllTime",
                    strTitle: (0, _._)("#RecommenderDemos_RecAllTime"),
                    strSubtitle: (0, _._)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "RecFiveYear",
                    strTitle: (0, _._)("#RecommenderDemos_RecFiveYear"),
                    strSubtitle: (0, _._)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "RecTwoYear",
                    strTitle: (0, _._)("#RecommenderDemos_RecTwoYear"),
                    strSubtitle: (0, _._)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "RecOneYear",
                    strTitle: (0, _._)("#RecommenderDemos_RecOneYear"),
                    strSubtitle: (0, _._)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "RecSixMonths",
                    strTitle: (0, _._)("#RecommenderDemos_RecSixMonths"),
                    strSubtitle: (0, _._)("#RecommenderDemos_Rec_Desc"),
                  }),
                  (0, _.jsx)(_, {
                    nAccountID: _,
                    bExclude: _,
                    strName: "RecEmbedding",
                    strTitle: (0, _._)("#RecommenderDemos_RecEmbedding"),
                    strSubtitle: "",
                  }),
                ],
              }),
            });
          };
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
          SliderRoot: "Ib6RCjwueJUjl7aWNipFW",
          Inner: "-nNjOur8lh62cpxs1Jnth",
          SliderTrack: "_32V6MAuLhIp8s5_OPJxur1",
          SliderRange: "_1S38a0lsWaX1bdlroIEyXQ",
          SliderHandle: "_1VoJsIZhjVss7lO_vZxCFC",
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
      chunkid: (module) => {
        module.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoginDialog: "_1bOMwjEv0VPnCbCIXHn0MU",
          AccountPasswordPanel: "_2TsLG2tMkE37m-BNbHvrJc",
          LoginPanelBackground: "_2mIGMF-Jdi_N_9coPKVNFM",
          LoginPanelContent: "_2MS2ZoNZh_oqiVvUGyHh9m",
          ErrorMessage: "_3BmMF6pRx0W94B97vZTvdb",
          AccountPasswordForm: "_1DnlW0kDl6u10k3Ppayvmb",
          AuthenticationPanel: "_3Z8nzLnUEyfz2WMqJj1cd2",
          AccountNameLabel: "_2U77IHTKBoUJ38DNPYVfvH",
          MedName: "_20Gi0qD50szEeLj06XsZ3Z",
          LargeName: "x37D-phxaGSNsZi6mpzQI",
          PasswordDots: "_3jUHPnnvk2AXDp1iFHGxd1",
          MedPass: "_2Hps1hH56vBFJJgXHkqljj",
          LargePass: "tQnGPct_al8-iUWQuf6kv",
          AccountFieldHeader: "HtxVN4b9fPDuS7W0FaLqi",
          PasswordFieldHeader: "_1t03SX5MJ0b8jWS4fxbDTi",
          NeedHelpLink: "_1GdK5C1JWAky1kjS70NvQN",
          NeedHelpHighlight: "_3gBu02N3S9pnzvYTbzfR77",
          CreateAccountLink: "_3bVw0PeUPTcTsuPlkTPGpI",
          LoginCreateSeperator: "_35t4P-snn6716mxGm-Ki9b",
          RefreshCaptchaText: "_1ZDJKWpT_nU_GDved7bxnd",
          SigningInAccountName: "Qcb1FAzMpsqlSJNAV-1A",
          SigninTitle: "_1ggRhTaLVqzY1PPxtIZTpI",
          RememberMeCheck: "_2HTA85PF5pO-46JTcGI1gU",
          SteamUpsellContainer: "_1q-Uirii8tDfKC6VRY61ei",
          SteamUpsell: "_1dYtgxWsKDglJEujOvh1jE",
          CaptchaContainer: "_3Uug3Nm1kL0c3e5-RM5da9",
          CaptchaBlock: "_2kgp38GTVvClMxe5fyBft4",
          CaptchaImageAndInput: "_2U0LTOvZ_ZfYJLZLcMrpSR",
          CaptchaImageBox: "SsNXaiO0GRLZB04nZNff",
          CaptchaImage: "_1G5YT_SnRKsL0Yh3OjU7Ke",
          CaptchaInput: "_Gu34_OCHk02Dl6H9m-Oy",
          AuthenticatorInputcontainer: "_1I7osrv3QXG9Py9FQWCb5G",
          Highlight: "_2q3gmJ7JH65Nef8rMUAS32",
          LoginComplete: "_1tujkMc7mFdQhTGXN_Nr7w",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GameExplorerApp: "_2YcjZUwjuk8bOScBI3CVix",
          GameExplorerContainer: "_2kqrC47lN71rDA7qxkvL7_",
          GameExplorerHeader: "_1WmCPc_AXRMWszlD7_0M_R",
          GameExplorerTitle: "_1_GGYKaf1G0MFTbrsZVM5x",
          GameExplorerDescription: "_3-0-0bjJzzp0wfZm6ObSXB",
          AppSelectors: "_1w_B8c3g-Xsw9heb2BTnCe",
          AppSelector: "_2D5U16jQrYU81Ch4jVymz7",
          ValueInput: "ihYu1w0pq4dUgUnGycLAk",
          Disabled: "_1Lbg7xK-rfphRUEsyWlxyS",
          AppSelectorResults: "_1pSCVPfk-I7z5cbU-qD7W6",
          Show: "_3MxGERvYfz6dfYOEqyGZma",
          AppSelectorResult: "MaxWBJJButh54DgnMY7TN",
          Logo: "_1TVDEYVA-ckujFOOVEdYm",
          RightSide: "_2qVSpkO1TYHXyYes3TgXLv",
          GameExplorerKnobs: "_1DrliTdL4oqZrcVy0JvPRT",
          AppList: "EMVrWDjVq2HuZkDTLZAP1",
          AppRow: "PQTV5wUjtOMlNoZq9OsoB",
          OtherControls: "_87nwNPJlVpkWBsBVupwAa",
          OtherControl: "_9nG2DtrSmTLKkooDe3Qj3",
          ControlTitle: "_203QCiIvvdFK5KOzd-OjLx",
          ControlDescription: "_3SJWSctED3DIUsdAb55J-y",
          Empty: "_8nGWcDkZ_reQznWJdiy-U",
          SelectedApp: "Wg6n7Ab6nMu1ZJe0yuSLV",
          WeightContainer: "_3iB_ItjvKnG544Uo3sEzl0",
          RemoveButttonContainer: "_2OgYrDkvm0p7Zlj9z-YBO6",
          GameExplorerResults: "_2SQb_tBJWtFz5SIeGyc-kp",
          Pending: "_3EGRvr5Jj24mLnonIcR5-B",
          CapsuleContainer: "_3OpOkSMqPjZSJIm_M3ZP-T",
          Distance: "_3FraUXDt867xR543irvayh",
          StartExplore: "_1DP_jO_QaoNtSbLKbZe9Cq",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppSelector: "_2Fikzdx2lTWapJ8oB4VH_E",
          AppDisplay: "_3m6Shao1IRPuuFr0l_7k9l",
          LogoImage: "_3l4Ih5v0fiCKKodcEeMBx6",
          AppName: "_3kXBTGAEHZo3GGTE00v7fR",
          AppSelect: "_2VQ8j1BdC_eQDU74NrrgUf",
          Suggestions: "_102W4ows0_RdyFP6UygrQQ",
          Suggestion: "_3VfDLdhp_ip5SSQIxRvaP1",
          SimilarApp: "_3yV0M5fd6S0GJGbQUVr8v3",
          Spacer: "_1lpCSiBFFQ4eBhiy7uq863",
          Score: "_14zV9TivPpwwriU27MDzcJ",
          App: "_3xv8nd-XJp9gt6KQvKZz1e",
          Container: "_3r507eIQieIortWRpL_p-",
          TopSection: "ZS7SfmqvYN35Oo34Nulf3",
          Header: "_3PXzQH1cJBNzpq8n3h9tLj",
          Body: "LfOIb2hPYOsOlKu2fmCFl",
          SandboxSection: "-FZSwdssB08COThIQfMK8",
          LabsSimilarGames: "_3OMnQ2qb57wpm5YKWrF4mm",
          AppSelection: "_1U3311x5ZUGW7vJEJuzEH2",
          SimilarApps: "_3RByYPiaYU6aep4DLeH_TE",
          LabsSimilarity: "_32kTJnPnuMfAoOdT68EFxE",
          HorizontalSpacer: "_1FnF8c6Og53-dJM6GBdLWa",
          LabsPathfinder: "_1w-DUXN6LIasN_6v55P0_Y",
          SelectEndpoints: "_3QMIIB-guv958P7vast3i_",
          ComputeButton: "_230zDsKb1Xla9fd990J5-j",
          Disabled: "_3o1uEPeXS7kmhPp5j0fXKJ",
          ProgressMessage: "_2IvW-N7lSTGREjL8L5k6XC",
          Path: "V_RIvT-OYDPkuCbfdK2G2",
          LabsMixer: "_1Cns3SI2_c6tbhS9Ib5ZVE",
          Operand: "hILAxewgNwvhHBnXev-nT",
          OperatorSelect: "EM51KAc64W5DNP-imMK-P",
          AddOperand: "tZPTBtDnIu5m3W0blxApx",
          Tabs: "_3Uckh2jP7zKyhdyy5hM3LG",
          Tab: "_16ebkTYinAkWPZmoHK2c9y",
          Active: "_2J9KxT9Uk8my9bIJ76ab_v",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EntryError: "_1UGoDpJ7HCnew3ISiLQi2r",
          ClusterConfig: "_3Qp2uY9UVYYKnJ-ptgEj0R",
          PlaytimeCluster: "_2qGfqWVATJJ7JZzV8beQLg",
          ClusterInfo: "_20dmpyf2P2BqcyJ1-ACi27",
          ClusterMembers: "VeQtFevYOvbG2bHTuR6U2",
          SimilarTitle: "gRxJTbzwDdBRGFpeDab1C",
        };
      },
      chunkid: (module) => {
        module.exports = {
          smallentrywidth: "600px",
          optionswrapwidth: "777px",
          ValveOnly: "_3BlEI-AzJaZZmX2NYANWUM",
          RecommenderDemosApp: "Yd0GQ7ZuwBZvFndfWls_V",
          TopControls: "_3pk8aklP1QvRisTxx7jKBk",
          AccountIDControl: "NHix7NSJXYUhKUfq37DfV",
          AccountIDOverride: "i650fxK7SwDP8ncETkWfc",
          AccountID: "_1KvFAONiSWym2s89il4uOT",
          RecDemoButton: "_1-j6-lkyQZPPLjcvFUqtRg",
          RecommenderList: "_2SWgrCnfJv-YVMkRUaHonC",
          Title: "_1sEvnBlkzKtI80ZZnT4MVY",
          SubTitle: "_1jf-uvxuqKuz8FYMHvlhIm",
          CheckBox: "_5aGW9oecPhpwTUVGvj3lg",
          Spacer: "_1kIkFPfBO9A3hDohTT_hoK",
          CapsuleList: "iWS569Edm4Rgt09fYlY2v",
          AppCapsule: "_2ZKToqUzsdeaKKdDTtGZkD",
          UnderInfo: "_3pPpZh7mj-S7Lxj6yU4Fzl",
          Name: "_1EvKcr6zM__ELCD8Hf9S8y",
          Weight: "_2akgNsqkbts6rIO2OMHPNR",
          Image: "_3VtsIJqlIPDKUx2pCA9kyh",
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = (function (_) {
            (0, _._)(_, _);
            function _() {
              for (
                var _, _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return (
                (_ = _.call.apply(_, [this].concat(_)) || this),
                (_.history = (0, _._)(_.props)),
                _
              );
            }
            var _ = _.prototype;
            return (
              (_.render = function () {
                return _.createElement(_._, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              _
            );
          })(_.Component),
          _ = (function (_) {
            (0, _._)(_, _);
            function _() {
              for (
                var _, _ = arguments.length, _ = new Array(_), _ = 0;
                _ < _;
                _++
              )
                _[_] = arguments[_];
              return (
                (_ = _.call.apply(_, [this].concat(_)) || this),
                (_.history = (0, _._)(_.props)),
                _
              );
            }
            var _ = _.prototype;
            return (
              (_.render = function () {
                return _.createElement(_._, {
                  history: this.history,
                  children: this.props.children,
                });
              }),
              _
            );
          })(_.Component),
          _ = function (_, _) {
            return typeof _ == "function" ? _(_) : _;
          },
          _ = function (_, _) {
            return typeof _ == "string" ? (0, _._)(_, null, null, _) : _;
          },
          _ = function (_) {
            return _;
          },
          _ = _.forwardRef;
        typeof _ > "u" && (_ = _);
        function _(_) {
          return !!(_.metaKey || _.altKey || _.ctrlKey || _.shiftKey);
        }
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
                  !_.defaultPrevented &&
                    _.button === 0 &&
                    (!_ || _ === "_self") &&
                    !_(_) &&
                    (_.preventDefault(), _());
                },
              });
            return (
              _ !== _ ? (_.ref = _ || _) : (_.ref = _), _.createElement("a", _)
            );
          }),
          _ = _(function (_, _) {
            var _ = _.component,
              _ = _ === void 0 ? _ : _,
              _ = _.replace,
              _ = _._,
              _ = _.innerRef,
              _ = (0, _._)(_, ["component", "replace", "to", "innerRef"]);
            return _.createElement(_._.Consumer, null, function (_) {
              _ || (0, _._)(!1);
              var _ = _.history,
                _ = _(_(_, _.location), _.location),
                _ = _ ? _.createHref(_) : "",
                _ = (0, _._)({}, _, {
                  href: _,
                  navigate: function () {
                    var _ = _(_, _.location),
                      _ = (0, _._)(_.location) === (0, _._)(_(_)),
                      _ = _ || _ ? _.replace : _.push;
                    _(_);
                  },
                });
              return (
                _ !== _ ? (_.ref = _ || _) : (_.innerRef = _),
                _.createElement(_, _)
              );
            });
          });
        if (0) var _, _;
        var _ = function (_) {
            return _;
          },
          _ = _.forwardRef;
        typeof _ > "u" && (_ = _);
        function _() {
          for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
            _[_] = arguments[_];
          return _.filter(function (_) {
            return _;
          }).join(" ");
        }
        var _ = _(function (_, _) {
          var _ = _["aria-current"],
            _ = _ === void 0 ? "page" : _,
            _ = _.activeClassName,
            _ = _ === void 0 ? "active" : _,
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
              _ = typeof _ == "function" ? _(_) : _,
              _ = typeof _ == "function" ? _(_) : _;
            _ && ((_ = _(_, _)), (_ = (0, _._)({}, _, _)));
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
              _ !== _ ? (_.ref = _ || _) : (_.innerRef = _),
              _.createElement(_, _)
            );
          });
        });
        if (0) var _;
      },
    },
  ]);
})();

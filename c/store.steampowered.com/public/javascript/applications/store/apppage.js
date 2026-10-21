(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [57333, 38843, 4874],
    {
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
          _ = __webpack_require__._(_);
        const _ = 10;
        function _(_) {
          return _ === void 0 ? !1 : _ <= _;
        }
        const _ = new WeakMap();
        function _(_, _) {
          for (const _ of _.groups) {
            let _ = _.get(_.achievements);
            _ ||
              ((_ = new Map(
                _.achievements.map((_) => [_.api_name, _.internal_key]),
              )),
              _.set(_.achievements, _));
            const _ = _.get(_);
            if (_ !== void 0) return _;
          }
        }
        function _(_) {
          return (_?.groups_achievable?.total ?? 0) != 0;
        }
        function _(_, _, _) {
          return _.achievements.some(
            (_) => (!_.archived && !_.archived) || _(_, _, _),
          );
        }
        function _(_, _, _) {
          return (
            _?.achievements[_.internal_key]?.unlocked == !0 ||
            (_?.some((_) => _?.achievements[_.internal_key]?.unlocked == !0) ??
              !1)
          );
        }
        function _(_, _) {
          if (Array.isArray(_))
            return (
              _.length > 1 ||
              (_.length == 1 && _[0] !== k_DefaultAchievementGroup)
            );
          {
            const _ = _.groups.filter((_) => _(_, _));
            return (
              _.length > 1 ||
              (_.length == 1 && _[0]._ !== k_DefaultAchievementGroup)
            );
          }
        }
        function _(_, _) {
          return new Intl.DateTimeFormat(GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: _ ? "h23" : void 0,
          }).format(new Date(_ * 1e3));
        }
        function _(_, _) {
          return AchievementsLocalization.Localize(
            "#Achievements_PercentFormat",
            _.toLocaleString(GetPreferredLocales(), _),
          );
        }
        function _(_, _) {
          const _ = _ > 0 ? _ / _ : 0,
            _ = _(_ * 100, {
              maximumFractionDigits: _ > 100 ? 1 : 0,
            });
          return {
            percentUnlocked: _,
            percentUnlockedStr: _,
          };
        }
        function _(_) {
          return _ === void 0
            ? ""
            : _(_, {
                maximumFractionDigits: 1,
                minimumFractionDigits: 1,
              });
        }
        function _(_) {
          return AchievementsLocalization.Localize(
            "#Achievements_Tooltip_GlobalUnlockPercent",
            _(_),
          );
        }
        function _(_, _) {
          return _
            ? {
                name: AchievementsLocalization.Localize(
                  "#AchievementSpoilerName",
                ),
                description: AchievementsLocalization.Localize(
                  "#AchievementSpoilerDescription",
                ),
              }
            : {
                name: _.name ?? "",
                description: _.description ?? "",
              };
        }
        function _(_) {
          return _ >= 17891964e-1;
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          if (_ !== void 0)
            return {
              "--icon-size": _ == "fill" ? "100%" : `${_}px`,
            };
        }
        function _(_) {
          const {
              imgURL: _,
              glow: _,
              pauseAnimation: _,
              hidden: _,
              alt: _,
              hideNativeTooltip: _ = !1,
              className: _,
              size: _,
              ..._
            } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              _ &&
                (_.complete
                  ? _(!0)
                  : (_.onload = () => {
                      _(!0);
                    }));
            }, []),
            _ = _ && (_ || _),
            _ = _(_);
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().AchievementIconWrapper,
              _,
              _ && _().RareAchievementNoAnimation,
            ),
            style: _,
            ..._,
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _().RareAchievementIconGlowContainerRoot,
                  children: (0, _.jsx)("div", {
                    className: _().RareAchievementIconGlowContainer,
                    children: (0, _.jsx)("div", {
                      className: _().RareAchievementIconGlow,
                    }),
                  }),
                }),
              _
                ? (0, _.jsx)("div", {
                    className: (0, _._)(_().HiddenLabel, _ && _().IconGlow),
                    children: "?",
                  })
                : (0, _.jsx)("img", {
                    ref: _,
                    className: (0, _._)(_().Icon, _ && _().IconGlow),
                    src: _ == "" ? void 0 : _,
                    loading: "lazy",
                    alt: _,
                    title: _ ? void 0 : _,
                  }),
            ],
          });
        }
        function _(_) {
          const {
              achievement: _,
              globalUnlockPercentage: _,
              unlocked: _,
              forceVisible: _ = !1,
              hidden: _,
              ..._
            } = _,
            _ = _ ?? (_ ? !1 : !_ && _.hidden),
            _ = (_ ? _.icon_achieved : _.icon_unachieved) ?? "",
            _ = _ && _(_),
            _ = _ ? _._.Localize("#AchievementSpoilerName") : (_.name ?? " ");
          return (0, _.jsx)(_, {
            hidden: _,
            imgURL: _,
            glow: _,
            alt: _,
            ..._,
          });
        }
        function _(_) {
          const {
              hidden: _,
              forceVisible: _,
              size: _,
              className: _,
              style: _,
              onClick: _,
              unlocked: _,
              ..._
            } = _,
            { appid: _, achievement: _, progress: _ } = _,
            _ = useGlobalAchievementPercentage(_, _.internal_key);
          return jsx(AchievementToolTip, {
            ..._,
            children: jsx(_, {
              achievement: _,
              globalUnlockPercentage: _,
              unlocked: _ ?? _?.unlocked ?? !1,
              hidden: _,
              forceVisible: _,
              size: _,
              className: _,
              style: _,
              onClick: _,
              hideNativeTooltip: !0,
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
        function _(_) {
          const { appid: _, profileUrl: _, dlc: _ } = _,
            _ = _
              ? `${_}/achievements/${_}`
              : `${_._.COMMUNITY_BASE_URL}achievements/${_}`;
          return _ !== void 0 ? `${_}?dlc=${_}` : _;
        }
        function _(_) {
          return _(_);
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
          __webpack_require__._("chunkid").then(_._.bind(_, 94507, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 29815, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79200, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81142, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 42394, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 80559, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 92885, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 22754, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 89627, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 8281, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 53749, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 88180, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 13303, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 28757, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 88468, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 82558, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 3894, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 35957, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 43081, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 63822, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 16470, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 46488, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 50272, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 88794, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 15171, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 34341, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 61844, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 71088, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 49829, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 95917, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 15151, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 53460, 19)));
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const _ = (0, _._)(
            {
              ..._,
              className: _.className,
            },
            _,
          );
          return (0, _.jsx)("img", {
            ..._,
          });
        }
        const _ = [
          ..._._,
          {
            prop: "objectFit",
            className: _.ObjectFit,
            cssProperty: "--object-fit",
          },
          {
            prop: "objectPosition",
            className: _.ObjectPosition,
            cssProperty: "--object-position",
          },
        ];
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
          _ = __webpack_require__._(_);
        function _(_) {
          const { orientation: _ = "horizontal", size: _ = "1", ..._ } = _;
          return (0, _.jsx)("div", {
            role: "separator",
            "aria-orientation": _,
            ...(0, _._)(
              {
                ..._,
                size: _,
                className: _.Separator,
              },
              _,
            ),
          });
        }
        const _ = [
          ..._._,
          {
            prop: "size",
            className: (_) => _[`Size-${_}`],
            responsive: !0,
          },
          {
            prop: "color",
            cssProperty: (_) => ["--separator-color", (0, _._)(_)],
          },
        ];
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _ = "div", ref: _, focusable: _, navProps: _, ..._ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(
              {
                ..._,
                className: _()(_.Grid, _.className),
              },
              _,
            ),
            _ = _ ?? _?.focusable ?? !!_.onClick,
            _ = (0, _.jsx)(_, {
              ref: _,
              ..._,
            });
          return _
            ? (0, _.jsx)(_._, {
                "flow-children": "grid",
                ...(_ || {}),
                focusable: _,
                children: _,
              })
            : _;
        }
        const _ = [
          ..._._,
          {
            prop: "display",
            responsive: !0,
            className: _.Display,
            cssProperty: "--grid-display",
          },
          {
            prop: "columns",
            responsive: !0,
            className: _.Columns,
            cssProperty: "--grid-columns",
          },
          {
            prop: "rows",
            responsive: !0,
            className: _.Rows,
            cssProperty: "--grid-rows",
          },
          {
            prop: "autoColumns",
            responsive: !0,
            className: _.AutoColumns,
            cssProperty: "--grid-auto-columns",
          },
          {
            prop: "autoRows",
            responsive: !0,
            className: _.AutoRows,
            cssProperty: "--grid-auto-rows",
          },
          {
            prop: "autoFlow",
            responsive: !0,
            className: _.AutoFlow,
            cssProperty: "--grid-auto-flow",
          },
          {
            prop: "areas",
            responsive: !0,
            className: _.Areas,
            cssProperty: "--grid-areas",
          },
          {
            prop: "flow",
            responsive: !0,
            className: _.Flow,
            cssProperty: "--grid-flow",
          },
          {
            prop: "alignContent",
            responsive: !0,
            className: _.AlignContent,
            cssProperty: "--grid-align-content",
          },
          {
            prop: "justifyContent",
            responsive: !0,
            className: _.JustifyContent,
            cssProperty: "--grid-justify-content",
          },
          {
            prop: "alignItems",
            responsive: !0,
            className: _.AlignItems,
            cssProperty: "--grid-align-items",
          },
          {
            prop: "justifyItems",
            responsive: !0,
            className: _.JustifyItems,
            cssProperty: "--grid-justify-items",
          },
          {
            prop: "gap",
            responsive: !0,
            className: _.Gap,
            cssProperty: (_) => ["--grid-gap", `var(--spacing-${_})`],
          },
          {
            prop: "gapX",
            responsive: !0,
            className: _.Gap,
            cssProperty: (_) => ["--grid-gap-x", `var(--spacing-${_})`],
          },
          {
            prop: "gapY",
            responsive: !0,
            className: _.Gap,
            cssProperty: (_) => ["--grid-gap-y", `var(--spacing-${_})`],
          },
        ];
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, ..._) {
          const _ = [],
            _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let _ = 0,
            _;
          for (; (_ = _.exec(_)); ) {
            (_ += _[0].length), _.push(_[1]);
            const _ = parseInt(_[2]),
              _ = _[3] || "",
              _ = _(_, ..._),
              _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
                ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
                : _;
            _.push(_);
          }
          return _.push(_.substr(_)), _.createElement(_.Fragment, null, ..._);
        }
        function _(_, _ = ["b", "i", "br"]) {
          const _ = _.join("|"),
            _ = [],
            _ = new RegExp(
              `(?<before>.*?)<(?<tagname>${_})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let _ = 0,
            _;
          for (; (_ = _.exec(_)); ) {
            if (!_.groups) continue;
            if (!_.groups?.endtag) {
              const _ = _.groups.before.length + _.groups.tagname.length + 2;
              (_ += _), (_.lastIndex = _.index + _), _.push(_.groups.before);
              const _ = _[2],
                _ = _.createElement(_);
              _.push(_);
              continue;
            }
            (_ += _[0].length), _.push(_.groups.before);
            const _ = _.groups.tagname,
              _ = _.groups.contents || "";
            let _ = null;
            _ && (_ = _(_, _));
            const _ = _.createElement(_, {}, _);
            _.push(_);
          }
          return _.push(_.slice(_)), _.createElement(_.Fragment, null, ..._);
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = Object.assign(_, {
          Root: _,
          Content: _,
        });
        function _(_) {
          const { children: _, className: _, ..._ } = _;
          return (0, _.jsx)(_.Root, {
            ..._,
            children: (0, _.jsx)(_.Content, {
              className: _,
              children: _,
            }),
          });
        }
        function _(_) {
          const {
              onClose: _,
              className: _,
              navID: _,
              children: _,
              allowScrollBehind: _,
              ..._
            } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback((_) => {
              _ &&
                (_.showModal(),
                _.ownerDocument.defaultView &&
                  _(
                    _.ownerDocument.body.scrollHeight >
                      _.ownerDocument.defaultView.innerHeight,
                  ));
            }, []),
            _ = _.useCallback(
              (_) => {
                _.target == _.currentTarget && _("backdropclick");
              },
              [_],
            );
          return (0, _.jsx)(_, {
            navID: _ ?? "ModalDialog",
            onClose: _,
            children: (0, _.jsx)("dialog", {
              ref: _,
              className: _()(_.ModalDialog, !_ && _ && _.PreventScroll, _),
              onClose: () => _("onclose"),
              onClick: _,
              ..._,
              children: (0, _.jsx)(_._, {
                children: _,
              }),
            }),
          });
        }
        function _(_) {
          const { navID: _, onClose: _, children: _ } = _,
            _ = _.useCallback(() => _("cancelbutton"), [_]),
            _ = _.useRef(void 0);
          return (
            (0, _._)(_, !0, !0),
            (0, _._)()
              ? (0, _.jsx)(_._, {
                  navID: _ ?? "ModalDialog",
                  onCancelButton: _,
                  modal: !0,
                  navTreeRef: _,
                  children: _,
                })
              : (0, _.jsx)(_.Fragment, {
                  children: _,
                })
          );
        }
        function _(_) {
          const { className: _, children: _ } = _;
          return (0, _.jsx)("div", {
            className: _()(_.ModalDialogContent, _),
            onClick: (_) => _.stopPropagation(),
            children: _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
            onClose: _,
            className: _,
            navID: _,
            children: _,
            strTitle: _,
            wideMode: _,
            ..._
          } = _;
          return (0, _.jsx)(_._, {
            onClose: _,
            navID: _ ?? "SimpleModalDialog",
            ..._,
            children: (0, _.jsxs)("div", {
              className: _()(_, _().SimpleModalDialog, _ && _().WideMode),
              children: [
                " ",
                (0, _.jsxs)(_._, {
                  className: _().SimpleModalDialogHeader,
                  children: [
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().SimpleModalDialogTitle,
                        children: _,
                      }),
                    (0, _.jsx)("button", {
                      onClick: (_) => (_("xclick"), _.preventDefault(), !1),
                      className: _().XButton,
                      children: (0, _.jsx)(_.tmm, {}),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().SimpleModalContentCtn,
                  children: _,
                }),
              ],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return {
            store_page_asset_url: `${_._.BASE_URL_SHARED_CDN}store_item_assets/steam/apps/${_}/%s?t=${_}`,
          };
        }
        const _ = _.createContext({
          store_page_asset_url: "",
        });
        function _(_) {
          const _ =
            _.store_page_asset_url !== void 0
              ? {
                  store_page_asset_url: _.store_page_asset_url,
                }
              : _(_.appid, _.app_last_modified);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _.children,
          });
        }
        const _ = () => _.useContext(_);
        function _() {
          const { store_page_asset_url: _ } = _();
          return _.useCallback(
            (_) => {
              if (_)
                if (_.startsWith(_._ + "/")) {
                  const _ = _.replace(_._ + "/", "");
                  return _.replace("%s", _);
                } else return _;
            },
            [_],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            GameRatingBlock: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 3143, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 38043, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 60308, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 99922, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 32134, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 47899, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 31513, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 86910, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 67007, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 84597, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79169, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 28968, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17427, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 65521, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 49560, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 68858, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 73682, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 20073, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 93341, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48634, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 64794, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 3380, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 37940, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 72910, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 3431, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 12737, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 61123, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 25804, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 25401, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 2593, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94219, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 95784, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9;
        function _(_) {
          return "unknown ERatingAgency ( " + _ + " )";
        }
        function _(_) {
          return "unknown EAppRatingSource ( " + _ + " )";
        }
        function _(_) {
          return "unknown ERatingDescriptorImage ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.descriptors || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    descriptors: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    interactive_elements: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    official_id: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    esrb_online_music_not_rated: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    esrb_online_interactions_not_rated: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    descriptor_images: {
                      _: 6,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
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
            return "AppRatingAuxData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rating_agency || _._(_._()),
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
                    rating_agency: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    rating: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    source: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    banned: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    required_age: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    use_age_gate: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    aux_data: {
                      _: 7,
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
            return "AppRating";
          }
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown EContentSurveyMatureTag ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.elanguage || _._(_._()),
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
                    elanguage: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    text: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "ContentSurveyLocalizedText";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.customer_notes || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    customer_notes: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    customer_notes_ai: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    mature_tags: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
                    },
                    has_mature_content: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    ai_external_service_name: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    ai_external_service_url: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "ContentSurveyDisclosure";
          }
        }
        const _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = 22,
          _ = 23,
          _ = 24,
          _ = 25,
          _ = 26,
          _ = 27,
          _ = 28,
          _ = 29,
          _ = 30,
          _ = 31,
          _ = 32,
          _ = 33,
          _ = 34,
          _ = 35,
          _ = 36,
          _ = 37,
          _ = 38,
          _ = 39,
          _ = 40,
          _ = 41,
          _ = 42,
          _ = 43,
          _ = 44,
          _ = 45,
          _ = 46,
          _ = 47,
          _ = 48,
          _ = 49,
          _ = 50,
          _ = 60,
          _ = 61,
          _ = 62,
          _ = 63,
          _ = 64,
          _ = 80,
          _ = 81,
          _ = 82,
          _ = 83,
          _ = 90,
          _ = 91,
          _ = 95;
        function _(_) {
          return "unknown EPriceConversionMethod ( " + _ + " )";
        }
        function _(_) {
          return "unknown EProtoBillingType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EProtoActivationCode ( " + _ + " )";
        }
        function _(_) {
          return "unknown EProtoProposalState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EContentDescriptorSurveyState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ERatingQuestionaireCategory ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGeneratedGameRatingVersion ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGameContentCategory ( " + _ + " )";
        }
        function _(_) {
          return "unknown EContentSurveySection ( " + _ + " )";
        }
        function _(_) {
          return "unknown EContentSurveySource ( " + _ + " )";
        }
        function _(_) {
          return "unknown EContentSurveyChildAppType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EContentSurveyInheritAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGeneratedAIContentType ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.method || _._(_._()),
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
                    method: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "CProductInfo_ForceEmitPriceConversion";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.survey_section || _._(_._()),
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
                    survey_section: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_reviewed: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    accountid_reviewer: {
                      _: 3,
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
            return "SurveySectionReviewed";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content_category || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    content_category: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    questionaire_categories: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
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
            return "GeneratedGameContent";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rating_agency || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rating_agency: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rating: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    required_age: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    descriptors: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    banned: {
                      _: 5,
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
            return "GeneratedGameRating";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timestamp_generated || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timestamp_generated: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    generated_version: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    ratings: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    content_categories: {
                      _: 4,
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
            return "GeneratedGameRatings";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.desc_code_generated || _._(_._()),
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
                    desc_code_generated: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    desc_copyright_infringement_guarantee: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    desc_content_moderation_strategy: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    external_service_name: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    external_service_url: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    desc_external_service_how_content_available_to_players: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    desc_external_service_monetization: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "AIContentSurvey";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.disclosure || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    disclosure: {
                      _: 1,
                      _: _,
                    },
                    interactive_elements: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
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
            return "ContentSurveyAuxData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
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
                    _: {
                      _: 1,
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
            return "ContentDescriptor";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.surveyid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3, 11, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    surveyid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    state: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    descriptors: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    timestamp_started: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    timestamp_updated: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    timestamp_finished: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    accountid: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    developer_notes: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    keyvalues: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    ratings: {
                      _: 10,
                      _: _,
                    },
                    categories: {
                      _: 11,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
                    },
                    ai_survey: {
                      _: 12,
                      _: _,
                    },
                    internal_notes: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    all_ratings: {
                      _: 14,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    sections_reviewed: {
                      _: 15,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    disclosure: {
                      _: 16,
                      _: _,
                    },
                    inherited_surveyid: {
                      _: 17,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    started_from_scratch: {
                      _: 18,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    survey_aux_data: {
                      _: 19,
                      _: _,
                    },
                    source: {
                      _: 20,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    flags: {
                      _: 21,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
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
            return "ContentDescriptorSurvey";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    include_descriptors: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_keyvalues: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_categories: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_ai_survey: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_all_ratings: {
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
            return "CAppContentDescriptors_GetActiveSurvey_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    include_descriptors: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_keyvalues: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_categories: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_ai_survey: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_all_ratings: {
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
            return "CAppContentDescriptors_GetWorkingSurvey_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.surveyid || _._(_._()),
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
                    surveyid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    survey: {
                      _: 2,
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
            return "CAppContentDescriptors_GetSurvey_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "AppContentDescriptor.GetActiveSurvey#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 7,
              },
            );
          }
          _.GetActiveSurvey = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AppContentDescriptor.GetWorkingSurvey#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 7,
              },
            );
          }
          _.GetWorkingSurvey = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        const _ = new Map([
            [_, "esrb"],
            [_, "pegi"],
            [_, "bbfc"],
            [_, "usk"],
            [_, "oflc"],
            [_, "nzoflc"],
            [_, "cero"],
            [_, "kgrb"],
            [_, "gmedia"],
            [_, "dejus"],
            [_, "mda"],
            [_, "fpb"],
            [_, "csrr"],
            [_, "crl"],
            [_, "agcom"],
            [_, "igrs"],
            [_, "steam_germany"],
            [_, "steam_australia"],
            [_, "cadpa"],
          ]),
          _ = "crl",
          _ = "dejus",
          _ = "0",
          _ = "pending";
        function _(_) {
          return _.get(_) ?? "";
        }
        function _(_) {
          return _ ? _.Localize("#GameRating_Agency_" + _.toUpperCase()) : "";
        }
        function _(_, _) {
          return !_ || !_
            ? ""
            : _.Localize("#GameRating_Rating_" + _ + "_" + _);
        }
        function _(_) {
          return _.Localize("#GameRating_RARSText_" + _);
        }
        const _ = new Map([
          [
            _,
            {
              strFile: "love",
              strToken: "#GameRating_DescriptorImage_CERO_Love",
            },
          ],
          [
            _,
            {
              strFile: "sexual_content",
              strToken: "#GameRating_DescriptorImage_CERO_SexualContent",
            },
          ],
          [
            _,
            {
              strFile: "violence",
              strToken: "#GameRating_DescriptorImage_CERO_Violence",
            },
          ],
          [
            _,
            {
              strFile: "horror",
              strToken: "#GameRating_DescriptorImage_CERO_Horror",
            },
          ],
          [
            _,
            {
              strFile: "drinking_smoking",
              strToken: "#GameRating_DescriptorImage_CERO_DrinkingSmoking",
            },
          ],
          [
            _,
            {
              strFile: "gambling",
              strToken: "#GameRating_DescriptorImage_CERO_Gambling",
            },
          ],
          [
            _,
            {
              strFile: "crime",
              strToken: "#GameRating_DescriptorImage_CERO_Crime",
            },
          ],
          [
            _,
            {
              strFile: "drugs",
              strToken: "#GameRating_DescriptorImage_CERO_Drugs",
            },
          ],
          [
            _,
            {
              strFile: "language",
              strToken: "#GameRating_DescriptorImage_CERO_Language",
            },
          ],
        ]);
        function _(_) {
          const _ = _.get(_);
          if (_)
            return {
              strURL: `${_._.STORE_CDN_URL}public/shared/images/game_ratings/CERO/descriptors/${_.strFile}.png`,
              strAlt: _.Localize(_.strToken),
            };
        }
        function _(_) {
          const _ = _.get(_);
          if (_)
            return `[img]${Config.MEDIA_CDN_URL}store/Ratings/CERO/${_.strFile}.png[/img]`;
        }
        function _(_) {
          const _ = [];
          for (const _ of _) {
            const _ = _.toLowerCase();
            for (const [_, _] of _)
              if (_.includes(`cero/${_.strFile}.png`)) {
                _.push(_);
                break;
              }
          }
          return _;
        }
        const _ = new Map([
          [_, "#GameRating_ContentCategoryDescriptor_60"],
          [_, "#GameRating_ContentCategoryDescriptor_61"],
          [_, "#GameRating_ContentCategoryDescriptor_62"],
          [_, "#GameRating_ContentCategoryDescriptor_63"],
        ]);
        function _(_) {
          return _.map((_) => _.get(_))
            .filter((_) => _ !== void 0)
            .map((_) => _.Localize(_));
        }
        const _ = new Map([
          ["in-game purchases", _],
          ["in-game purchases (includes random items)", _],
          ["users interact", _],
        ]);
        function _(_) {
          const _ = [];
          for (const _ of _) {
            const _ = _.trim();
            if (!_) continue;
            const _ = _.get(_.toLowerCase()),
              _ = _ !== void 0 ? _([_])[0] : _;
            _.includes(_) || _.push(_);
          }
          return _;
        }
        const _ = new Map([
          [_, "#GameRating_ContentCategoryDescriptor_60"],
          [_, "#GameRating_ContentCategoryDescriptor_61"],
          [_, "#GameRating_ContentCategoryDescriptor_62"],
          [_, "#GameRating_ContentCategoryDescriptor_63"],
          [_, "#GameRating_ContentCategoryDescriptor_64"],
        ]);
        function _(_) {
          const _ = [];
          for (const _ of _)
            if (
              _.content_category ===
              EGameContentCategory.k_EGameContentCategory_InteractiveElements
            )
              for (const _ of _.questionaire_categories ?? []) {
                const _ = _.get(_);
                _ && _.push(GameRatingLocalization.Localize(_));
              }
          return _;
        }
        function _(_) {
          const { rating: _ } = _,
            { strType: _, strRating: _ } = _;
          if (_ === _)
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().GameRating, "GameRating"),
              children: [
                (0, _.jsx)(_._, {
                  direction: "row",
                  justify: "between",
                  className: _().Title,
                  children: _.Localize("#GameRating_Pending"),
                }),
                (0, _.jsx)(_, {
                  strType: _,
                }),
              ],
            });
          const _ = _ === _ ? [_(_)] : _.rgDescriptors,
            _ = _.bOnlineMusicNotRated || _.bOnlineInteractionsNotRated;
          return (0, _.jsxs)(_._, {
            direction: "column",
            gap: "3",
            className: _().GameRating,
            children: [
              _ === _
                ? _.nRequiredAge > 0 &&
                  (0, _.jsx)(_._, {
                    size: "3",
                    contrast: "title",
                    className: (0, _._)(_().RequiredAge, "RequiredAge"),
                    children: _.Localize(
                      "#GameRating_Age_DEJUS",
                      _.nRequiredAge,
                    ),
                  })
                : _.bBanned && (0, _.jsx)(_, {}),
              !_.bBanned &&
                (0, _.jsxs)(_._, {
                  direction: "row",
                  gap: "3",
                  className: _().Details,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().Icon,
                      children: (0, _.jsx)(_, {
                        rating: _,
                      }),
                    }),
                    (0, _.jsxs)(_._, {
                      direction: "column",
                      gap: "2",
                      children: [
                        _.length > 0 &&
                          (0, _.jsx)(_._, {
                            _: "p",
                            contrast: "body",
                            className: _().DescriptorText,
                            children: _.join(`
`),
                          }),
                        (0, _.jsx)(_, {
                          rating: _,
                        }),
                        _ &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              _.bOnlineMusicNotRated &&
                                (0, _.jsx)(_._, {
                                  _: "p",
                                  contrast: "body",
                                  className: _().DescriptorText,
                                  children: _.Localize(
                                    "#GameRating_OnlineMusicNotice",
                                  ),
                                }),
                              _.bOnlineInteractionsNotRated &&
                                (0, _.jsx)(_._, {
                                  _: "p",
                                  contrast: "body",
                                  className: _().DescriptorText,
                                  children: _.Localize(
                                    "#GameRating_OnlineInteractionsNotice",
                                  ),
                                }),
                            ],
                          }),
                        (0, _.jsx)(_, {
                          rating: _,
                        }),
                      ],
                    }),
                  ],
                }),
              (0, _.jsx)(_, {
                strType: _,
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsx)(_._, {
            direction: "row",
            justify: "between",
            className: _().Title,
            children: _.LocalizeReact(
              "#GameRating_ContentClassification",
              (0, _.jsx)("span", {
                className: _().Banned,
                children: _.Localize("#GameRating_Banned"),
              }),
            ),
          });
        }
        function _(_) {
          const {
            strType: _,
            strRating: _,
            strImageURL: _,
            strImageTarget: _,
          } = _.rating;
          if (_ === _)
            return (0, _.jsx)("div", {
              className: _().AllAges,
              children: _.Localize("#GameRating_AllAges"),
            });
          if (!_) return null;
          const _ = _(_, _);
          return _
            ? (0, _.jsx)(_._, {
                href: _,
                onOKActionDescription: _,
                children: (0, _.jsx)(_._, {
                  src: _,
                  alt: _,
                }),
              })
            : (0, _.jsx)(_._, {
                src: _,
                alt: _,
              });
        }
        function _(_) {
          const _ = (_.rating.rgDescriptorImages ?? [])
            .map((_) => _(_))
            .filter((_) => _ !== void 0);
          return _.length === 0
            ? null
            : (0, _.jsx)(_._, {
                direction: "row",
                wrap: "wrap",
                align: "start",
                gap: "1",
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _._,
                    {
                      src: _.strURL,
                      alt: _.strAlt,
                      title: _.strAlt,
                    },
                    _,
                  ),
                ),
              });
        }
        function _(_) {
          const {
              rgRatingInteractiveElements: _,
              rgSurveyInteractiveElements: _,
            } = _.rating,
            _ = _.length > 0,
            _ = _ ? _ : _;
          return _.length === 0
            ? null
            : (0, _.jsx)(_, {
                strTitle: _.Localize(
                  _
                    ? "#GameRating_InteractiveElements_Title"
                    : "#GameRating_ContentCategory_InteractiveElements",
                ),
                rgElements: _,
              });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _().GameRating,
            children: [
              (0, _.jsx)("div", {
                className: _().Title,
                children: _.Localize("#GameRating_ContentCategories_Title"),
              }),
              (0, _.jsx)(_, {
                strTitle: _.Localize(
                  "#GameRating_ContentCategory_InteractiveElements",
                ),
                rgElements: _.rgInteractiveElements,
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                _: "p",
                contrast: "note",
                children: _.strTitle,
              }),
              (0, _.jsx)(_._, {
                _: "p",
                contrast: "body",
                className: _().DescriptorText,
                children: _.rgElements.join(
                  _.Localize("#GameRating_ListDelimiter"),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const _ = _(_.strType);
          return _
            ? (0, _.jsx)(_._, {
                contrast: "body",
                size: "2",
                className: "Agency",
                children: _.Localize("#GameRating_RatingBy", _),
              })
            : null;
        }
        function _(_) {
          return {
            strType: _.type || (_.agency !== void 0 ? _(_.agency) : ""),
            strRating: _.rating ?? "",
            bBanned: !!_.banned,
            nRequiredAge: _.required_age ?? 0,
            rgDescriptors: _.descriptors ?? [],
            rgDescriptorImages: _.descriptor_images ?? [],
            bOnlineMusicNotRated: !!_.esrb_online_music_not_rated,
            bOnlineInteractionsNotRated: !!_.esrb_online_interactions_not_rated,
            rgRatingInteractiveElements: _(
              (_.interactive_elements ?? "").split(/[\r\n,]+/),
            ),
            rgSurveyInteractiveElements: _(_.survey_interactive_elements ?? []),
            strImageURL: _(_),
            strImageTarget: _.image_target || void 0,
          };
        }
        function _(_) {
          if (_.image_url)
            return `${_._.STORE_CDN_URL}${_.image_url}?${_.image_target ? "v=3" : "v=2"}`;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              _: _,
              eLayout: _ = "rightcolumn",
              bRatingAllowed: _,
              bHideRatingTitle: _,
            } = _,
            { data: _, isPending: _ } = (0, _._)(_ ? _ : void 0),
            _ = _ && _,
            _ = _ && !!_?.rating,
            _ = _(_ || _ ? void 0 : _),
            _ = (0, _._)();
          if ((_.use(_.Ready()), _)) return null;
          const _ = _ === "details";
          let _ = _ ? "block app_ratings_block" : "block";
          return (
            _ && (_ = "game_rating_area details_block"),
            _ && _
              ? (0, _.jsxs)("div", {
                  className: _,
                  children: [
                    !_ &&
                      (0, _.jsx)("div", {
                        className: "responsive_block_header ratings_title",
                        style: _
                          ? {
                              display: "none",
                            }
                          : void 0,
                        children: _.Localize("#GameRating_Ratings_Title"),
                      }),
                    (0, _.jsx)(_, {
                      rating: _(_),
                    }),
                  ],
                })
              : _.length === 0
                ? null
                : (0, _.jsx)("div", {
                    className: _,
                    children: (0, _.jsx)(_, {
                      rgInteractiveElements: _,
                    }),
                  })
          );
        }
        function _(_) {
          const { data: _ } = (0, _._)(_);
          return _(_?.interactive_elements ?? []);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return new _._(new _._());
        }
        function _(_) {
          const _ = new Map([
            ...Array.from(_._.entries()),
            [
              "img",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "sup",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "h6",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
          ]);
          return (
            _ &&
              _.set("url", {
                Constructor: _,
                autocloses: !1,
              }),
            _
          );
        }
        function _(_) {
          return (0, _.jsx)("sup", {
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("h6", {
            children: _.children,
          });
        }
        function _(_) {
          let _ = (0, _._)(_._(_.args));
          return (
            !_ &&
              typeof _.children == "string" &&
              (0, _._)(_.children) &&
              (_ = (0, _._)(_.children)),
            _
              ? (0, _.jsx)(_._, {
                  href: _,
                  children: _.children,
                })
              : _.children || ""
          );
        }
        function _(_) {
          const { text: _, languageOverride: _, bBypassLinkFilter: _ } = _,
            [_] = (0, _.useState)(new _._(_(_), _, _ || _.Bhc));
          return (0, _.jsx)("div", {
            className: _().StorePageBBCode,
            children: _.ParseBBCode(_, {}, !0),
          });
        }
        function _(_) {
          const { showErrorInfo: _ } = _.context,
            _ = (0, _._)(),
            _ = _.args.alt ?? "";
          if (!!_.args.mp4 || _.args.webm) {
            const _ = _(_.args.webm),
              _ = _(_.args.mp4),
              _ = _(_.args.poster),
              _ = (0, _._)() || (0, _._)(),
              _ = (_) => {
                const _ = _.currentTarget;
                _.paused ? _.play() : _.pause();
              };
            return (0, _.jsxs)("video", {
              className: _().StoreVideo,
              poster: _,
              "aria-label": _,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              onClick: _,
              children: [
                _ &&
                  !_ &&
                  (0, _.jsx)("source", {
                    src: _,
                    type: "video/webm",
                  }),
                _ &&
                  !_._.IN_CLIENT &&
                  (0, _.jsx)("source", {
                    src: _,
                    type: "video/mp4",
                  }),
              ],
            });
          } else {
            const _ = _(_.args.src);
            return _
              ? (0, _.jsx)(_._, {
                  className: _().StoreImage,
                  src: _,
                })
              : (0, _.jsx)("img", {
                  className: _().StoreImage,
                  src: _,
                  alt: _,
                });
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
        const _ = (_, _) =>
            _ === void 0
              ? ["get_family_group_for_user ", _]
              : ["get_family_group_for_user ", _, _],
          _ = (_) => ["get_family_group", _],
          _ = (_) => ["get_family_history", _],
          _ = (_) => ["get_users_sharing_device", _],
          _ = (_) => ["get_shopping_cart_contents", _],
          _ = (_) => ["recent_playtime_sessions", _],
          _ = (_) => ["get_playtime_summary", _],
          _ = (_, _) => ["get_invite_check_results", _, _];
        function _(_, _, _) {
          return _
            ? ["get_purchase_requests", _, _, _]
            : _
              ? ["get_purchase_requests", _, _]
              : ["get_purchase_requests", _];
        }
        function _(_, _) {
          if (_ != _._) throw _;
        }
        const _ = _.createContext({
          staleTimeMs: 1 / 0,
        });
        function _(_) {
          const { staleTimeMs: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                staleTimeMs: _ ?? 3e3,
              }),
              [_],
            );
          return _.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        function _(_ = !1) {
          return _((0, _._)(), _);
        }
        function _(_, _ = !1) {
          const _ = (0, _._)(),
            _ = (0, _.useContext)(_).staleTimeMs;
          return (0, _._)({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_steamid(_),
                _.Body().set_include_family_group_response(_);
              const _ = await _._.GetFamilyGroupForUser(_, _);
              return _(_.GetEResult(), "GetFamilyGroupForUser"), _.Body();
            },
            staleTime: _,
            enabled: !!_,
            placeholderData: _ ? void 0 : new _._(),
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _.useContext)(_).staleTimeMs;
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              if (_) {
                const _ = _._.Init(_._);
                _.Body().set_family_groupid(_);
                const _ = await _._.GetFamilyGroup(_, _);
                return _(_.GetEResult(), "GetFamilyGroup"), _.Body();
              } else throw _._;
            },
            staleTime: _,
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_name(_);
              const _ = await _._.CreateFamilyGroup(_, _);
              return _(_.GetEResult(), "CreateFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.DeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "DeleteFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().set_name(_);
              const _ = await _._.ModifyFamilyGroupDetails(_, _);
              return _(_.GetEResult(), "ModifyFamilyGroupDetails"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_receiver_steamid(_),
                _.Body().set_receiver_role(_);
              const _ = await _._.InviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "InviteToFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.JoinFamilyGroup(_, _);
              return _(_.GetEResult(), "JoinFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_cancel(_);
              const _ = await _._.CancelFamilyGroupInvite(_, _);
              return _(_.GetEResult(), "CancelFamilyGroupInvite"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_remove(_);
              const _ = await _._.RemoveFromFamilyGroup(_, _);
              return _(_.GetEResult(), "RemoveFromFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              const _ = (0, _._)("clientsessionid"),
                _ = _ && BigInt("0x" + _).toString(),
                _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_client_instance_id(_ ?? void 0);
              const _ = await _._.GetUsersSharingDevice(_, _);
              return _(_.GetEResult(), "GetUsersSharingDevice"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = (0, _._)();
          return _(_)
            .data?.members()
            .find((_) => _.steamid() == _)
            ?.role();
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_use_account_cart(!0),
                _.Body().set_store_country_code(_);
              const _ = await _._.RequestPurchase(_, _);
              return _(_.GetEResult(), "RequestPurchase"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _ !== void 0 && _.Body().set_rt_include_completed_since(_);
              const _ = await _._.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_, _, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_), _.Body().add_request_ids(_);
              const _ = await _._.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
            select: (_) =>
              _.toObject().requests?.find(({ request_id: _ }) => _ === _),
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_request_id(_),
                _.Body().set_action(_);
              const _ = await _._.RespondToRequestedPurchase(_, _);
              return _(_.GetEResult(), "RespondToRequestedPurchase"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        const _ = (0, _.createContext)({
          errorMessage: null,
          setErrorMessage: (_) => {},
        });
        function _(_, _) {
          return _;
        }
        var _ = ((_) => (
          (_[(_.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (_[(_.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (_[(_.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (_[(_.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (_[(_.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (_[(_.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (_[(_.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (_[(_.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (_[(_.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (_[(_.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (_[(_.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (_[(_.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (_[(_.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (_[(_.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (_[(_.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (_[(_.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (_[(_.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          _
        ))(_ || {});
        const _ = {
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_AccessDenied",
          [_._]: "#FamilyManagement_ErrorNoMatch",
          [_._]: "#FamilyManagement_ErrorAccountDisabled",
          [_._]: "#FamilyManagement_ErrorNoActiveInvite",
          [_._]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [_._]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [_._]: "#FamilyManagement_ErrorLimitExceeded",
          [_._]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [_._]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [_._]: {
            5: "#FamilyManagement_RateLimitExceeded_CreateFamily",
          },
          [_._]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [_._]: {
            2: "#FamilyManagement_Household_JoinFamily",
          },
          [_._]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [_._]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [_._]: {
            4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
          },
        };
        function _(_, _, _, _) {
          let _ = "";
          if (_ in _) {
            const _ = _[_];
            if (typeof _ == "string") _ = (0, _._)(_, ..._);
            else {
              const _ = _;
              _ in _ && (_ = (0, _._)(_[_], ..._));
            }
          }
          return _((0, _._)(_, _), _);
        }
        function _() {
          const { setErrorMessage: _ } = (0, _.useContext)(_);
          return {
            setErrorMessage: _,
          };
        }
        function _(_, _, _) {
          const { setErrorMessage: _ } = _(),
            { isError: _, error: _ } = _,
            _ = _();
          (0, _.useEffect)(() => {
            if (_) {
              const _ = _,
                _ = [];
              if (_ === _._ || _ === _._) {
                let _;
                _.isSuccess &&
                  _.data &&
                  (_ = _.data.cooldown_seconds_remaining()),
                  _.push(_(_));
              }
              _(_(_, _, _, _));
            }
          }, [_, _, _, _, _, _.isSuccess, _.data]);
        }
        function _(_) {
          if (!_) return (0, _._)("#FamilyManagement_LoadingPlaceholder");
          const _ = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return (0, _._)(Date.now() / 1e3 + _, _);
        }
        function _(_, _) {
          const { setErrorMessage: _ } = _();
          (0, _.useEffect)(() => {
            _.isError && _((0, _._)(_));
          }, [_, _.isError, _]);
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.GetChangeLog(_, _);
              return (
                _(_.GetEResult(), "GetFamilyGroupChangeLog"), _.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              _.Body().set_gidshoppingcart(_);
              const _ = await ShoppingCartService.GetShoppingCartContents(_, _);
              return _(_.GetEResult(), "GetShoppingCartContents"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_cooldown_count(_);
              const _ =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(_, _);
              return _(_.GetEResult(), "SetFamilyCooldownOverrides"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          return `${_._.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
        }
        function _(_) {
          return `${_._.STORE_BASE_URL}cart/purchaserequested/${_}`;
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              _.Body().set_steamid(_), _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.CreateFamilyGroup(_, _);
              return (
                _(_.GetEResult(), "ForceCreateFamilyGroup"),
                _.Body().family_groupid()
              );
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        function _(_, _, _, _) {
          return [
            "get_shared_library_apps",
            _,
            _?.bIncludeOwn,
            _?.bIncludeExcluded,
            _?.bIncludeNonGames,
            _?.for_account_id,
            _,
            _,
          ];
        }
        function _(_, _) {
          const _ = (0, _._)(),
            { settings: _, mapAppsAllowed: _ } = (0, _._)(_).data,
            _ = (0, _._)(),
            _ = (0, _._)(),
            {
              bIncludeOwn: _,
              bIncludeExcluded: _,
              bIncludeNonGames: _,
              for_account_id: _,
            } = _ ?? {},
            _ = _?.enabled !== void 0 ? _.enabled : !0,
            _ = _(_, _, _, _),
            _ = (_) => !(0, _._)(_.appid(), _, _, _);
          return (0, _._)({
            queryKey: _,
            queryFn: async () => {
              const _ = _._.Init(_._);
              if (
                (_.Body().set_family_groupid(_),
                _.Body().set_include_own(_),
                _.Body().set_include_excluded(_),
                _.Body().set_language(_._.LANGUAGE),
                _.Body().set_include_non_games(_),
                _)
              ) {
                const _ = _._.InitFromAccountID(_, _._.EUNIVERSE);
                _.Body().set_steamid(_.ConvertTo64BitString());
              }
              const _ = await _._.GetSharedLibraryApps(_, _);
              return (
                _(_.GetEResult(), "GetSharedLibraryApps"),
                _.Body()
                  .apps()
                  .filter(_)
                  .map((_) => _.toObject())
              );
            },
            enabled: !!_ && _,
            placeholderData: _._,
            select: _?.select,
          });
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            { settings: _ } = (0, _._)(_).data ?? {},
            _ = (0, _._)(),
            _ = _(_, _, _, _);
          return (0, _.useCallback)(() => {
            _.invalidateQueries({
              queryKey: _,
            });
          }, [_, _]);
        }
        function _(_, _) {
          let _ = _.sort_as || _.name,
            _ = _.sort_as || _.name;
          return (0, _._)(_, _);
        }
        function _(_, _) {
          return _.rt_time_acquired - _.rt_time_acquired || _(_, _);
        }
        function _(_, _, _) {
          if (!_ && _.length === 0) return !0;
          const _ = _.name?.toLocaleLowerCase(),
            _ = _.toLocaleLowerCase(),
            _ = _?.includes(_) || _.appid?.toString() == _;
          let _ = !0;
          if (_.content_descriptors) {
            for (const _ of _)
              if (!_.content_descriptors.includes(_)) {
                _ = !1;
                break;
              }
          }
          return _ && _;
        }
        function _(_, _, _, _ = []) {
          const _ = (0, _.useMemo)(
              () => _?.filter((_) => _(_, _, _)) || [],
              [_, _, _],
            ),
            _ = (0, _.useCallback)(
              (_, _) => {
                let _ = _;
                switch (_) {
                  case "alpha-asc":
                    _ = _;
                    break;
                  case "alpha-desc":
                    _ = (_, _) => _(_, _);
                    break;
                  case "date_acquired-asc":
                    _ = (_, _) => _(_, _);
                    break;
                  case "date_acquired-desc":
                    _ = _;
                    break;
                }
                return _(_, _);
              },
              [_],
            );
          return (0, _.useMemo)(() => _.slice().sort(_), [_, _]);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ = await _._.ConfirmJoinFamilyGroup(_, _);
              return _(_.GetEResult(), "ConfirmJoinFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ = await _._.ConfirmInviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "ConfirmInviteToFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  _,
                  _,
                );
              return _(_.GetEResult(), "ResendInvitationToFamilyGroup"), _;
            },
          });
        }
        function _(_) {
          let _ = [];
          _.sort((_, _) => _.time_start - _.time_start);
          let _ = new Map();
          for (const _ of _) {
            let _ = _.get(_.appid);
            _ === void 0
              ? _.set(_.appid, _)
              : _.time_start <= _.time_end
                ? (_.time_end = Math.max(_.time_end, _.time_end))
                : (_.push(_), _.set(_.appid, _));
          }
          for (const _ of _.values()) _.push(_);
          return _.sort((_, _) => _.time_start - _.time_start), _;
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              const _ = _._.Init(_.m8g);
              _.Body().set_steamid(_);
              const _ = await _.xtC.GetRecentPlaytimeSessionsForChild(_, _);
              _(_.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let _ = _.Body().toObject().sessions || [];
              return _(_);
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.GetPlaytimeSummary(_, _);
              _(_.GetEResult(), "GetPlaytimeSummary");
              let _ = _.Body().toObject().entries ?? [];
              _.sort((_, _) => _.seconds_played - _.seconds_played);
              let _ = _.Body().toObject().entries_by_owner ?? [];
              return (
                _.sort((_, _) => _.seconds_played - _.seconds_played),
                {
                  borrowed: _,
                  loaned: _,
                }
              );
            },
            enabled: _ !== "0",
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_family_groupid(_);
              const _ = await _._.UndeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "UndeleteFamilyGroup"), _;
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.ForceAcceptInvite(_, _);
              return _(_.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.GetInviteCheckResults(
                _,
                _,
              );
              return (
                _(_.GetEResult(), "GetInviteCheckResults"), _.Body().toObject()
              );
            },
          });
        }
        function _(_, _) {
          return _.members().find((_) => _.steamid() == _);
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return ["AppRelevanceStore", "FriendsRecommended", _];
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: () => _(_, _),
            enabled: _._.logged_in,
          });
        }
        function _() {
          const _ = (0, _._)();
          return _.useCallback(
            (_, _) => {
              _.setQueryData(_(_), _);
            },
            [_],
          );
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["AppRelevanceStore", "StoreRelevance", _],
            queryFn: () => _(_),
            enabled: _._.logged_in,
          });
        }
        function _() {
          return (0, _._)("App Relevance Store Top Sellers", {
            sort: _._._,
            start: 0,
            count: 100,
          });
        }
        function _() {
          const { data: _ } = _();
          return _;
        }
        async function _(_, _) {
          const _ = _._.Init(_._);
          _.Body().set_appid(_);
          const _ = await _._.GetFriendsRecommendedApp(_, _),
            _ = _.GetEResult();
          if (_ == _._) return _.Body().toObject();
          throw `Error ${_} failed to call GetFriendsRecommendedApp ${_}`;
        }
        async function _(_) {
          let _ = {
              appid: _,
            },
            _ = {
              arrSimilarPlayedApps: [],
              bRecommendedByIR: !1,
            };
          const _ = (
            await _().get(
              `${_._.STORE_BASE_URL}explore/ajaxgetstorerelevancedata`,
              {
                params: _,
                withCredentials: !0,
                timeout: 1e4,
              },
            )
          ).data;
          return (
            _ &&
              _.success == _._ &&
              (_.results.similar_played_apps &&
                (_.arrSimilarPlayedApps = _.results.similar_played_apps.map(
                  (_) => ({
                    appid: _.appid,
                    playtimeForever: _.playtime_forever,
                  }),
                )),
              _.results.recommended_by_ir && (_.bRecommendedByIR = !0)),
            _
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
          m_ItemDefinition = null;
          m_ItemKV = null;
          constructor(_, _) {
            (0, _._)(this), this.LoadItemDefinition(_, _);
          }
          LoadItemDefinition(_, _) {
            _
              ? (this.m_ItemDefinition = {
                  item_type: _.item_type,
                  item_class: _.item_class,
                  item_description: _.item_description,
                  editor_accountid: _.editor_accountid,
                  deleted: _.deleted,
                  active: _.active,
                  appid: _.appid,
                  item_image_composed: _.item_image_composed,
                  item_image_large: _.item_image_large,
                  item_image_small: _.item_image_small,
                  item_key_values: _.item_key_values,
                  item_movie_mp4: _.item_movie_mp4,
                  item_movie_mp4_small: _.item_movie_mp4_small,
                  item_internal_name: _.item_name,
                  item_series: _.item_series,
                  item_movie_webm: _.item_movie_webm,
                  item_movie_webm_small: _.item_movie_webm_small,
                  item_image_composed_foil: _.item_image_composed_foil,
                  item_last_changed: _.item_last_changed,
                  broadcast_channel_id: _.broadcast_channel_id,
                })
              : (this.m_ItemDefinition = _),
              (this.m_ItemKV = JSON.parse(
                this.m_ItemDefinition.item_key_values,
              ));
          }
          get AppID() {
            return this.m_ItemDefinition.appid;
          }
          get BIsActive() {
            return this.m_ItemDefinition.active;
          }
          get ItemID() {
            return this.m_ItemDefinition.item_type;
          }
          get BIsDeleted() {
            return this.m_ItemDefinition.deleted;
          }
          get ItemClass() {
            return this.m_ItemDefinition.item_class;
          }
          get CommunityItemDef() {
            return this.m_ItemDefinition;
          }
        }
        _([_._], _.prototype, "m_ItemDefinition", 2),
          _([_._], _.prototype, "m_ItemKV", 2);
        function _(_, _) {
          return `${_._.COMMUNITY_ASSETS_BASE_URL}images/items/${_}/${_}`;
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
          _ = __webpack_require__("chunkid");
        const _ = "PlaytestInvites";
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = _._.Init(_._),
                _ = await _._.GetInvites(_, _);
              if (_.GetEResult() != _._)
                throw new Error(
                  `Error from usePlaytestInvite: ${_.GetEResult()} ${_.GetErrorMessage()}`,
                );
              return _.Body()?.toObject().invites ?? [];
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().add_invite_ids(_),
                _.Body().set_status(_.bAccept ? _._._ : _._._);
              const _ = await _._.UpdateInvites(_, _);
              if (_.GetEResult() != _._)
                throw {
                  result: _.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${_.GetErrorMessage()} ( ${_.GetEResult()} )`,
                };
            },
            onSuccess: (_, _) => {
              _.setQueryData([_], (_) =>
                _.map((_) =>
                  _.invite_id === _
                    ? {
                        ..._,
                        status: _.bAccept ? _._._ : _._._,
                      }
                    : _,
                ),
              );
            },
            onError: () => {
              _.invalidateQueries({
                queryKey: [_],
              });
            },
          });
        }
        function _(_) {
          return ["PlaytestUserStatus", _];
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              if (_._.logged_in) {
                const _ = _._.Init(_._);
                _ && _.Body().set_appid(_);
                const _ = await _._.GetUserStatus(_, _);
                if (_.GetEResult() != _._)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${_.GetEResult()} ${_.GetErrorMessage()}`,
                  );
                return _.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function _() {
          const _ = (0, _._)();
          return _.useCallback(
            (_, _) => {
              _.setQueryData(_(_), _);
            },
            [_],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            OpenInDesktopClient: () => _,
            default: () => _,
            useOpenWebInSteamClient: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)(function (_) {
          const { fnOpenInSteamClient: _ } = _();
          return (0, _.jsx)("div", {
            className: _.OpenInBannerContainer,
            children: (0, _.jsxs)("div", {
              className: _.OpenInBannerContent,
              children: [
                (0, _.jsx)("div", {
                  className: _.BannerButtonContainer,
                  children: (0, _.jsx)("div", {
                    onClick: _,
                    className: _.BannerButton,
                    children: (0, _._)("#OpenInDesktopAppBanner_OpenAppButton"),
                  }),
                }),
                (0, _.jsx)("div", {
                  className: _.BannerMessage,
                  children: (0, _.jsxs)("div", {
                    className: _.BannerTitle,
                    children: [
                      (0, _.jsx)("b", {
                        children: (0, _._)(
                          "#OpenInDesktopAppBanner_NotSignedIn",
                        ),
                      }),
                      (0, _.jsx)("br", {}),
                      (0, _._)("#OpenInDesktopAppBanner_Body"),
                    ],
                  }),
                }),
              ],
            }),
          });
        });
        function _() {
          return {
            fnOpenInSteamClient: _.useCallback(() => {
              let _ = `${(0, _._)()}//openurl/`;
              const _ = (0, _._)("browserid");
              if (_) {
                const _ = new URL(window.location.href),
                  _ = new URLSearchParams(_.search);
                _.set("utm_bid", _),
                  (_ += _.origin + _.pathname + "?" + _.toString() + _.hash);
              } else _ += window.location.href;
              window.location.href = _;
            }, []),
          };
        }
        const _ = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            AccessibilityFeatureDisplay: () => _,
            AccessibilityFeaturesFromCategories: () => _,
            AccessibilityIcon: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
            bAccessibilityDifficultyLevels:
              "#Accessibility_Feature_AdjustableDifficulty",
            bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
            bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
            bAccessibilityBackgroundVolumeControls:
              "#Accessibility_Feature_CustomVolumeControls",
            bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
            bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
            bAccessibilityResizableUI:
              "#Accessibility_Feature_AdjustableTextSize",
            bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
            bAccessibilityColorAlternatives:
              "#Accessibility_Feature_ColorAlternatives",
            bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
            bAccessibilityKeyboardOnlyOption:
              "#Accessibility_Feature_KeyboardOnlyOption",
            bAccessibilityMouseOnlyOption:
              "#Accessibility_Feature_MouseOnlyOption",
            bAccessibilityTouchOnlyOption:
              "#Accessibility_Feature_TouchOnlyOption",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "#Accessibility_Feature_WithoutQuickTimeEvents",
            bAccessibilityChatTexttoSpeech:
              "#Accessibility_Feature_TextToSpeech",
            bAccessibilityChatSpeechtoText:
              "#Accessibility_Feature_SpeechToText",
            bAccessibilityPlayableAtYourOwnPace:
              "#Accessibility_Feature_PlayableAtYourOwnPace",
            bAccessibilityPlayableWithoutVision:
              "#Accessibility_Feature_PlayableWithoutVision",
            bAccessibilityContrastControls:
              "#Accessibility_Feature_ContrastControls",
          },
          _ = {
            bAccessibilityDifficultyLevels: "adjustable_difficulty",
            bAccessibilitySaveAnytime: "save_anytime",
            bAccessibilityNarratedMenus: "narrated_game_menus",
            bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
            bAccessibilityStereoSound: "stereo_sound",
            bAccessibilitySurroundSound: "surround_sound",
            bAccessibilityResizableUI: "adjustable_text_size",
            bAccessibilitySubtitles: "subtitle_options",
            bAccessibilityColorAlternatives: "color_alternatives",
            bAccessibilityCameraComfort: "camera_comfort",
            bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
            bAccessibilityMouseOnlyOption: "mouse_only_option",
            bAccessibilityTouchOnlyOption: "touch_only_option",
            bAccessibilityPlayableWithoutQuicktimeEvents:
              "playable_without_timed_input",
            bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
            bAccessibilityChatSpeechtoText: "chat_speech_to_text",
            bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
            bAccessibilityPlayableWithoutVision: "playable_without_vision",
            bAccessibilityContrastControls: "contrast_controls",
          };
        var _ = ((_) => (
          (_.Gameplay = "gameplay"),
          (_.Visual = "visual"),
          (_.Audio = "audio"),
          (_.Input = "input"),
          _
        ))(_ || {});
        const _ = {
            bAccessibilityDifficultyLevels: "gameplay",
            bAccessibilitySaveAnytime: "gameplay",
            bAccessibilityNarratedMenus: "audio",
            bAccessibilityBackgroundVolumeControls: "audio",
            bAccessibilityStereoSound: "audio",
            bAccessibilitySurroundSound: "audio",
            bAccessibilityResizableUI: "visual",
            bAccessibilitySubtitles: "visual",
            bAccessibilityColorAlternatives: "visual",
            bAccessibilityCameraComfort: "visual",
            bAccessibilityPlayableWithoutVision: "visual",
            bAccessibilityContrastControls: "visual",
            bAccessibilityKeyboardOnlyOption: "input",
            bAccessibilityMouseOnlyOption: "input",
            bAccessibilityTouchOnlyOption: "input",
            bAccessibilityPlayableWithoutQuicktimeEvents: "input",
            bAccessibilityChatTexttoSpeech: "input",
            bAccessibilityChatSpeechtoText: "input",
            bAccessibilityPlayableAtYourOwnPace: "input",
          },
          _ = {
            gameplay: "#Accessibility_Group_Gameplay",
            visual: "#Accessibility_Group_Visual",
            audio: "#Accessibility_Group_Audio",
            input: "#Accessibility_Group_Input",
          };
        function _(_) {
          return {
            bAccessibilityResizableUI: _.includes(_.mWc),
            bAccessibilitySubtitles: _.includes(_.sCr),
            bAccessibilityColorAlternatives: _.includes(_.eEM),
            bAccessibilityCameraComfort: _.includes(_.YAh),
            bAccessibilityBackgroundVolumeControls: _.includes(_.Tby),
            bAccessibilityStereoSound: _.includes(_.a2r),
            bAccessibilitySurroundSound: _.includes(_.Obu),
            bAccessibilityNarratedMenus: _.includes(_.C0f),
            bAccessibilityChatSpeechtoText: _.includes(_.FpT),
            bAccessibilityChatTexttoSpeech: _.includes(_.r_E),
            bAccessibilityPlayableWithoutQuicktimeEvents: _.includes(_.eY9),
            bAccessibilityKeyboardOnlyOption: _.includes(_.TQL),
            bAccessibilityMouseOnlyOption: _.includes(_.beA),
            bAccessibilityTouchOnlyOption: _.includes(_.Pw_),
            bAccessibilityDifficultyLevels: _.includes(_.j2d),
            bAccessibilitySaveAnytime: _.includes(_.Rnx),
            bAccessibilityPlayableAtYourOwnPace: _.includes(_.eAR),
            bAccessibilityPlayableWithoutVision: _.includes(_.tIg),
            bAccessibilityContrastControls: _.includes(_.vVO),
          };
        }
        function _(_) {
          const [_, _] = (0, _.useState)(_.initialOpen ?? !1),
            _ = _.useId(),
            _ = Object.entries(_.features)
              .filter(([_, _]) => _)
              .map(([_]) => _);
          if (_.length === 0) return null;
          const _ = {};
          _.forEach((_) => {
            const _ = _[_];
            (_[_] ??= []), _[_].push(_);
          });
          const _ = Object.keys(_).length > 1;
          return (0, _.jsxs)("details", {
            className: _().Details,
            open: _,
            onToggle: (_) => _(_.currentTarget.open),
            children: [
              (0, _.jsxs)(_._, {
                className: _().Summary,
                children: [
                  (0, _.jsx)("div", {
                    className: _().ImageContainer,
                    children: (0, _.jsx)(_, {
                      className: _().CategoryIcon,
                      "aria-label": "",
                    }),
                  }),
                  (0, _.jsxs)("span", {
                    className: _().FeatureNameContainer,
                    _: _,
                    children: [
                      (0, _.jsx)("span", {
                        className: _().FeatureName,
                        children: _
                          ? (0, _._)("#AccessibilityFeatures")
                          : (0, _._)(
                              "#AccessibilityFeaturesWithCount",
                              _.length,
                            ),
                      }),
                      (0, _.jsx)("a", {
                        className: _().InfoLink,
                        href: `${_._.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                        target: "_blank",
                        children: "?",
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsxs)("ul", {
                className: _().FeatureList,
                "aria-labelledby": _,
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        _.gameplay &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "gameplay",
                              features: _.gameplay,
                              open: _,
                            }),
                          }),
                        _.visual &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "visual",
                              features: _.visual,
                              open: _,
                            }),
                          }),
                        _.audio &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "audio",
                              features: _.audio,
                              open: _,
                            }),
                          }),
                        _.input &&
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              group: "input",
                              features: _.input,
                              open: _,
                            }),
                          }),
                      ],
                    }),
                  !_ &&
                    _.map((_) =>
                      (0, _.jsx)(
                        "li",
                        {
                          children: (0, _.jsx)(_, {
                            feature: _,
                            open: _,
                          }),
                        },
                        _,
                      ),
                    ),
                ],
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            viewBox: "0 0 1200 1200",
            ..._,
            children: [
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
                fillRule: "evenodd",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
                fillRule: "evenodd",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
                fillRule: "evenodd",
              }),
            ],
          });
        }
        function _(_) {
          const _ = _.useId();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                className: _().GroupLabel,
                _: _,
                children: (0, _._)(_[_.group]),
              }),
              (0, _.jsx)("ul", {
                className: _().FeatureGroupItems,
                "aria-labelledby": _,
                children: _.features.map((_) =>
                  (0, _.jsx)(
                    "li",
                    {
                      children: (0, _.jsx)(_, {
                        feature: _,
                        open: _.open,
                      }),
                    },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            href: `${_._.STORE_BASE_URL}category/${_[_.feature]}`,
            className: _().InfoRow,
            focusable: _.open,
            children: (0, _.jsx)("span", {
              className: _().FeatureNameContainer,
              children: (0, _.jsx)("span", {
                className: _().FeatureName,
                children: (0, _._)(_[_.feature]),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              title: _,
              navKey: _,
              seeAllLink: _,
              appIDs: _,
              sortOrder: _,
              scorePenaltyIfOwned: _,
              capsuleSize: _,
              bFullWidth: _,
            } = _,
            _ = (0, _._)(),
            { bShowSeeMoreHint: _, panelProps: _ } = (0, _._)(_);
          return (0, _.jsx)(_._, {
            className: (0, _._)(_().StoreItemsCarousel, _ && _().FullWidth),
            navEntryPreferPosition: _._.PREFERRED_CHILD,
            ..._,
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsxs)("div", {
                  className: _().Header,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().Title,
                      children: _,
                    }),
                    !_ &&
                      (0, _.jsx)(_._, {
                        url: _,
                      }),
                    _ &&
                      (0, _.jsx)(_._, {
                        label: (0, _._)("#StoreApp_SeeAll"),
                        shown: _,
                      }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  preferredFocus: !0,
                  children: (0, _.jsx)(_._, {
                    navKey: _,
                    classes: _().StorePageCarousel,
                    appIDs: _,
                    maxItemCount: 4,
                    sortOrder: _,
                    scorePenaltyIfOwned: _,
                    capsuleSize: _,
                  }),
                }),
              ],
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
          _ = __webpack_require__._(_);
        const _ = -1,
          _ = parseInt(_().strScrollSnapCarouselItemHeight),
          _ = 250;
        function _(_) {
          const {
              navKey: _,
              classes: _,
              appIDs: _,
              sortOrder: _,
              scorePenaltyIfOwned: _,
              capsuleSize: _,
              maxItemCount: _,
              mapAppToCreatorClan: _,
              strFeatureFirstAppMsg: _,
              setNumberVisibleItems: _,
            } = _,
            _ = (0, _._)(910),
            _ = (0, _._)(),
            [_, _] = (0, _._)(),
            [_, _] = _.useState(_),
            _ = (0, _._)(_, _._),
            [_, _] = _.useState(null);
          _.useEffect(() => {
            if (_ == _._) return;
            const _ = _.filter((_) => !_._.Get().BIsStoreItemMissing(_, _._._));
            if (_ && _ && !_ && _.length > 0 && _[0] == _[0]) {
              const _ = [_[0], _, ..._.slice(1)];
              _(_), _(_), _?.(_.length);
            } else _(_), _?.(_.length);
          }, [_, _, _, _, _, _]);
          const _ = _;
          return (0, _.jsx)(_._, {
            className: (0, _._)(_, {
              SaleSectionCarousel: !0,
              [_().Carousel]: !0,
            }),
            visibleElements: _,
            useTestScrollbar: !0,
            bLazyRenderChildren: !0,
            lazyRenderPlaceholderHeight: _,
            lazyRenderPlaceholderWidth: _,
            gap: 12,
            hideArrows: !1,
            screenIsWide: _,
            navKey: _,
            bForceSimpleCarousel: _,
            children: _(_, _, _ ?? "none", _ ?? 3).map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  appID: _,
                  size: _,
                  creatorClanAccountID: _?.get(_),
                  strFeaturingMsg: _ == 0 && _ ? _ : void 0,
                },
                _,
              ),
            ),
          });
        }
        function _(_) {
          const {
              appID: _,
              size: _,
              creatorClanAccountID: _,
              strFeaturingMsg: _,
            } = _,
            [_] = (0, _._)(_, _._._, _._);
          if (_ == _)
            return (0, _.jsx)("div", {
              className: (0, _._)({
                [_().Capsule]: !0,
                [_().Small]: _ == "small",
              }),
            });
          if (!_)
            return (0, _.jsx)("div", {
              className: (0, _._)(_().Capsule, _().Placeholder),
            });
          const _ = (0, _._)(_.GetStoreItemType(), _.GetAppType()),
            _ = {
              _: _.GetID(),
              type: _,
            },
            _ = !!_;
          return (0, _.jsx)("div", {
            className: (0, _._)({
              [_().Capsule]: !0,
              [_().TwoWide]: _,
              [_().Small]: _ == "small",
            }),
            children: (0, _.jsx)(_._, {
              capsule: _,
              imageType: "header",
              bHidePlatforms: !0,
              bHideStoreHover: _,
              creatorAccountID: _,
              strDoubleCapsuleMessage: _ ? (0, _._)(_) : void 0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
        function _(_, _, _, _) {
          const _ = _.useMemo(
              () => _.filter((_) => !_.BIsGameIgnored(_)),
              [_, _],
            ),
            _ = _.useMemo(
              () =>
                Array.from(
                  {
                    length: _.length,
                  },
                  () => Math.random(),
                ),
              [_.length],
            );
          return _ == "shuffle"
            ? _.map((_, _) => {
                const _ =
                  (_.BIsGameOwned(_) ? _ : 0) +
                  (Math.sqrt(_) + 2) * _[_] +
                  Math.sqrt(_);
                return {
                  _: _,
                  score: _,
                };
              })
                .sort((_, _) => _.score - _.score)
                .map((_) => _._)
            : _ == "scored"
              ? _.map((_, _) => ({
                  _: _,
                  score: _.BIsGameOwned(_) ? _ + _ : _,
                }))
                  .sort((_, _) => _.score - _.score)
                  .map((_) => _._)
              : _;
        }
        function _(_) {
          const { url: _ } = _;
          return _
            ? (0, _.jsx)(_._, {
                href: _,
                className: (0, _._)(
                  _().SeeAllLink,
                  "btnv6_grey_black btn_medium",
                ),
                children: (0, _.jsx)("span", {
                  children: (0, _._)("#StoreApp_SeeAll"),
                }),
              })
            : void 0;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            AppGameInterestCacheInit: () => _,
            AppStoreBrowseCacheInit: () => _,
            default: () => _,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _.LatestUpdateButtonCtn,
            children: [
              (0, _.jsx)("div", {
                className: _.LatestUpdateIcon,
                children: (0, _.jsx)(_.UTF, {
                  role: "presentation",
                }),
              }),
              (0, _.jsx)(_._, {
                className: _.LatestUpdateButton,
                onClick: _.onClick,
                children: _._.Localize(
                  "#EventBrowse_LatestUpdateTime_Button",
                  (0, _._)(_.nUpdateTime),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { nUpdateTime: _, announcementGID: _, onClick: _ } = _,
            _ = _ ? _._.GetClanEventFromAnnouncementGID(_) : null,
            _ = _._;
          return (0, _.jsxs)("div", {
            className: _.Container,
            children: [
              (0, _.jsxs)("h2", {
                children: [
                  (0, _._)("#EventBrowse_LastUpdateDate", (0, _._)(_)),
                  (0, _.jsx)(_._, {
                    className: _.SectionButton,
                    onClick: (_) => {
                      _?.(), _.stopPropagation(), _.preventDefault();
                    },
                    children: (0, _._)("#EventBrowse_MoreEventsBtn"),
                  }),
                ],
              }),
              !!_ &&
                (0, _.jsx)(_._, {
                  className: _.EventsSummariesCtn,
                  "flow-children": "column",
                  navEntryPreferPosition: _._.PREFERRED_CHILD,
                  children: (0, _.jsx)(_, {
                    event: _,
                    onClick: (_) => {
                      _?.(), _.stopPropagation(), _.preventDefault();
                    },
                  }),
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 500;
        function _(_) {
          const {
              strClassName: _,
              rgEvents: _,
              fnEventShowModal: _,
              elPostRowElement: _,
              bViewAllShowInfiniteScroll: _,
              nSummaryMaxLength: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          let _ = 2,
            _ = _ + 1;
          return (
            _.ownerWindow.window
              ? (_ = _.ownerWindow.window.innerWidth)
              : _.viewportWidth && (_ = _.viewportWidth.value),
            (_ = _ <= _ ? 1 : 2),
            _ && _.length == 0 && !_
              ? null
              : (0, _.jsxs)(_._, {
                  className: _,
                  "flow-children": "row",
                  children: [
                    !!_ &&
                      _.length > 0 &&
                      (0, _.jsx)("div", {
                        className: _.Container,
                        children: (0, _.jsxs)(_._, {
                          children: [
                            (0, _.jsxs)("h2", {
                              children: [
                                _._.Localize("#EventBrowse_RecentEvents"),
                                !_ &&
                                  !!_ &&
                                  (0, _.jsx)(_.Fragment, {
                                    children:
                                      _ && _
                                        ? (0, _.jsx)(_._, {
                                            className: _.SectionButton,
                                            onClick: () => _(_[0]),
                                            children: _._.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          })
                                        : (0, _.jsx)(_._, {
                                            eventModel: _[0],
                                            route: _._.k_eViewWebSiteHub,
                                            className: _.SectionButton,
                                            children: _._.Localize(
                                              "#EventBrowse_MoreEventsBtn",
                                            ),
                                          }),
                                  }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: _.EventsSummariesCtn,
                              children: _.slice(0, _).map((_) => {
                                const _ =
                                  _ && !(0, _._)()
                                    ? (_) => {
                                        _(_),
                                          _.stopPropagation(),
                                          _.preventDefault();
                                      }
                                    : void 0;
                                return (0, _.jsx)(
                                  _._,
                                  {
                                    event: _,
                                    onClick: _,
                                    nSummaryMaxLength: _,
                                  },
                                  _.GID,
                                );
                              }),
                            }),
                          ],
                        }),
                      }),
                    _,
                  ],
                })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              trackingLocation: _,
              strClassName: _,
              bViewAllShowInfiniteScroll: _,
            } = _,
            [_, _, _] = (0, _._)(),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(void 0),
            _ = (0, _._)(),
            _ = (0, _.useCallback)(() => {
              _(null), _();
            }, [_]),
            _ = (0, _.useCallback)(
              (_) => {
                _ &&
                  _ &&
                  _.BIsPartnerEvent() &&
                  _.MarkEventRead(_.GID, _.clanSteamID.GetAccountID(), _) &&
                  _.Flush(),
                  _(_),
                  _(void 0),
                  _();
              },
              [_, _, _],
            ),
            { last_update_event: _, rgEvents: _ } = _({
              ..._,
              fnEventShowModal: _,
            }),
            _ = (0, _.useCallback)(() => {
              const {
                event_gid: _,
                announcement_gid: _,
                clan_account_id: _,
              } = _;
              _ && _ && _.MarkEventRead(_, _, _) && _.Flush(),
                _(_),
                _(null),
                _();
            }, [_, _, _, _]);
          (0, _.useEffect)(
            () => (
              (window.fnPartnerEvent_ShowInfiniteScroll = (_, _) => {
                _(_), _(null), _(_), _();
              }),
              () => {
                window.fnPartnerEvent_ShowInfiniteScroll &&
                  delete window.fnPartnerEvent_ShowInfiniteScroll;
              }
            ),
            [_],
          );
          const _ = (0, _._)(),
            _ = !!_ && !!_.rtime,
            _ =
              _ && !!_.announcement_gid && (!_ || _.length == 0)
                ? _.announcement_gid
                : void 0;
          let _;
          return (
            _ && _
              ? (_ = (0, _.jsx)(_, {
                  nUpdateTime: _.rtime,
                  announcementGID: _,
                  onClick: _,
                }))
              : _ &&
                !_ &&
                !_ &&
                (_ = (0, _.jsx)(_, {
                  nUpdateTime: _.rtime,
                  onClick: _,
                })),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    ..._,
                    announcementGID: _ || _?.AnnouncementGID,
                    eventModel: _,
                    closeModal: _,
                  }),
                }),
                (0, _.jsx)(_, {
                  elPostRowElement: _,
                  rgEvents: _,
                  fnEventShowModal: _,
                  bViewAllShowInfiniteScroll: _,
                  strClassName: _,
                }),
              ],
            })
          );
        }
        function _(_) {
          const {
              appid: _,
              event_customization: _,
              partnerEventStore: _,
              trackingLocation: _,
              fnEventShowModal: _,
            } = _,
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = (0, _._)(),
            [_] = (0, _._)("emgid", void 0),
            [_] = (0, _._)("announce_gid", void 0);
          return (
            (0, _.useEffect)(() => {
              const _ = (0, _._)("EventWebRowEmbed");
              let _ = !1;
              if (_(_)) {
                (_ = _.bPreLoaded), _(_.last_update_event);
                const _ = [];
                _.announcementGIDList.forEach((_) => {
                  const _ = _._.GetClanEventFromAnnouncementGID(_);
                  _ && _.push(_);
                }),
                  _(_);
              }
              _ ||
                (async () => {
                  const _ = await _.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    _,
                    0,
                    2,
                    _,
                  );
                  _(_),
                    _ &&
                      _ &&
                      _.length > 0 &&
                      (_.filter((_) => _.BIsPartnerEvent()).forEach((_) =>
                        _.MarkEventShown(
                          _.GID,
                          _.clanSteamID.GetAccountID(),
                          _,
                        ),
                      ),
                      _.Flush());
                })();
            }, [_, _, _, _, _, _]),
            (0, _.useEffect)(() => {
              if (_ != null && (_ || _)) {
                const _ = _.find((_) => _.GID === _ || _.AnnouncementGID == _);
                _
                  ? _(_)
                  : (async () => {
                      const _ = _
                        ? await _.LoadPartnerEventFromClanEventGID(_, _, 0)
                        : await _.LoadPartnerEventFromAnnoucementGID(_, _, 0);
                      _ && _([..._, _]);
                    })();
              }
            }, [_, _, _, _, _, _, _]),
            {
              last_update_event: _,
              rgEvents: _,
            }
          );
        }
        function _(_) {
          const _ = _;
          return _ && typeof _ == "object"
            ? _.bPreLoaded !== void 0 &&
                typeof _.bPreLoaded == "boolean" &&
                Array.isArray(_.announcementGIDList)
            : !1;
        }
        function _(_) {
          const {
              appid: _,
              partnerEventStore: _,
              trackingLocation: _,
              announcementGID: _,
              eventModel: _,
              closeModal: _,
            } = _,
            _ = (0, _._)();
          return (0, _.jsx)(_._, {
            className: _ ? void 0 : _.StoreHeaderAdjust,
            eventClassName: _ ? _.GamePadUIWidthAdjust : void 0,
            appid: _,
            trackingLocation: _,
            announcementGID: _,
            partnerEventStore: _,
            eventModel: _ ?? void 0,
            closeModal: _,
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = new Date(_.setUTCHours(0, 0, 0, 0) - 4320 * 60 * 60 * 1e3),
            _ = Math.floor(_.getTime() / 1e3),
            { appid: _ } = _;
          return (0, _.jsx)(_, {
            appid: _,
            partnerEventStore: _._.Get(),
            event_customization: {
              rtime_oldestevent: _,
              exclude_tags: ["patchnotes", "hide_store", "mod_hide_store"],
              exclude_event_types: [_._._],
            },
            strClassName: "early_access_announcements",
            trackingLocation: _._._,
          });
        }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _.useRef)(null),
            _ = (0, _._)(),
            _ = Number(_.appID),
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            [_, _] = (0, _.useState)(null);
          (0, _.useEffect)(
            () => (
              (async () => {
                const _ = _().CancelToken.source();
                _.current = _.cancel;
                const _ = {
                    exclude_tags: ["steam_game_festival_artist_statement"],
                    require_tags: ["steam_game_festival_broadcast"],
                  },
                  _ = await _._.LoadAdjacentPartnerEvents(
                    void 0,
                    void 0,
                    _,
                    0,
                    1,
                    _,
                  );
                _.token.reason || (_.length > 0 && _(_[0]));
              })(),
              () => {
                _.current && _.current("DemoAndQuickPitch: Unmounting");
              }
            ),
            [_],
          );
          const [_, _, _] = (0, _._)(),
            _ = _ ? _.GetNameWithFallback((0, _.sfN)(_._.LANGUAGE)) : null,
            _ = _ ? _.BHasEventEnded() : !0;
          return !_ ||
            !_.related_items?.demo_appid ||
            _.related_items?.demo_appid.length == 0
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)("div", {
                    className: _.TileContainer,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.TileTitleContainer,
                        children: [
                          (0, _.jsxs)("div", {
                            className: _.TileTitleInnerContainer,
                            children: [
                              (0, _.jsx)("div", {
                                className: _.TileTitle,
                                children: (0, _._)(
                                  "#Sale_DownloadDemo",
                                  _.name || "",
                                ),
                              }),
                              (0, _.jsx)(_._, {
                                _: _,
                              }),
                            ],
                          }),
                          (0, _.jsx)(_._, {
                            _: _,
                            className: _.TileActionButton,
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _.TileActionContainer,
                        children:
                          _ &&
                          _ &&
                          (0, _.jsxs)("div", {
                            className: _.TileActionInnerContainer,
                            children: [
                              _
                                ? (0, _.jsx)("h1", {
                                    children: (0, _._)(
                                      "#EventBrowse_RecentUpdates",
                                    ),
                                  })
                                : (0, _.jsx)("h1", {
                                    children: (0, _._)("#EventCalendar_TuneIn"),
                                  }),
                              (0, _.jsxs)("div", {
                                className: _.TileActionInner,
                                onClick: _,
                                children: [
                                  (0, _.jsx)("div", {
                                    className: _.TileActionInnerTitle,
                                    children: _,
                                  }),
                                  (0, _.jsx)("div", {
                                    className: _.TileActionInnerText,
                                    children: (0, _.jsx)(_._, {
                                      dateAndTime:
                                        _.GetStartTimeAndDateUnixSeconds(),
                                      bSingleLine: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    active: _,
                    children: (0, _.jsx)(_._, {
                      initialEvent: _,
                      bShowOnlyInitialEvent: !1,
                      partnerEventStore: _._,
                      emoticonStore: _,
                      showAppHeader: !0,
                      closeModal: _,
                    }),
                  }),
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
        const _ = new _._();
        var _ = ((_) => (
          (_[(_.EPurchaseNoticeType_ControllerRequired = 0)] =
            "EPurchaseNoticeType_ControllerRequired"),
          (_[(_.EPurchaseNoticeType_VRRequired = 1)] =
            "EPurchaseNoticeType_VRRequired"),
          (_[(_.EPurchaseNoticeType_VRSupported = 2)] =
            "EPurchaseNoticeType_VRSupported"),
          _
        ))(_ || {});
        function _(_) {
          const { appid: _, type: _ } = _;
          switch (_) {
            case 0:
              return (0, _.jsx)(_, {
                appid: _,
                controllerType: _._,
              });
            case 1:
              return (0, _.jsx)(_, {});
            default:
              return (0, _.jsx)(_, {});
          }
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().PurchaseNoticeContainer),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().PurchaseNoticeImageContainer),
                children: (0, _.jsx)(_.xIk, {
                  type: "xbox",
                  className: (0, _._)(_().PurchaseNoticeImage, _().Tilt),
                }),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().PurchaseNoticeLabel),
                children: (0, _._)("#PurchaseNotice_ControllerRequired"),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().PurchaseNoticeContainer),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().PurchaseNoticeImageContainer),
                children: (0, _.jsx)(_.oqe, {
                  className: (0, _._)(_().PurchaseNoticeImage, _().VROnly),
                }),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().PurchaseNoticeLabel),
                children: (0, _._)("#PurchaseNotice_VRRequired"),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().PurchaseNoticeContainer),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().PurchaseNoticeImageContainer,
                  _().VRSupported,
                ),
                children: (0, _.jsx)(_.Kkn, {
                  className: (0, _._)(_().PurchaseNoticeImage, _().VRSupported),
                }),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().PurchaseNoticeLabel),
                children: (0, _._)("#PurchaseNotice_VRSupported"),
              }),
            ],
          });
        }
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_[(_.k_CreatorHomeNone = 0)] = "k_CreatorHomeNone"),
            (_[(_.k_CreatorHomeAll = -1)] = "k_CreatorHomeAll"),
            _
          ))(_ || {}),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              clanID: _,
              title: _,
              seeAllLink: _,
              appIDs: _,
              rgAppIDToCreatorIDs: _,
              rgAllCreatorClanIDs: _,
              strFeatureFirstAppMsg: _,
              bFullWidth: _,
            } = _,
            _ = (0, _._)(_, _._),
            _ = (0, _.useMemo)(() => {
              const _ = new Map(
                Object.entries(_).map(([_, _]) => [Number(_), _]),
              );
              if (_ != _._ && _ == _.k_CreatorHomeAll) {
                const _ = new Set(_);
                _.forEach((_) => {
                  if (!_.has(_)) {
                    const _ = _._.Get().GetApp(_);
                    _ &&
                      _.GetAllCreatorClanIDs()?.some((_) =>
                        _.has(_) ? (_.set(_, _), !0) : !1,
                      );
                  }
                });
              }
              return _;
            }, [_, _, _, _, _]),
            _ = "developer";
          return _.length > 0
            ? (0, _.jsx)(_, {
                creatorHomeType: _,
                clanID: _,
                titleOverride: _,
                seeAllLink: _,
                appIDs: _,
                mapAppIDsToCreatorClanID: _,
                strFeatureFirstAppMsg: _,
                bFullWidth: _,
              })
            : (0, _.jsx)(_, {
                creatorHomeType: _,
                clanID: _,
                bFullWidth: _,
              });
        }
        function _(_) {
          const {
              creatorHomeType: _,
              clanID: _,
              titleOverride: _,
              seeAllLink: _,
              appIDs: _,
              mapAppIDsToCreatorClanID: _,
              strFeatureFirstAppMsg: _,
              bFullWidth: _,
            } = _,
            _ = (0, _._)(),
            [_, _] = (0, _._)(_),
            { creatorHome: _ } = (0, _._)(_),
            _ = _?.GetCreatorHomeURL(_),
            [_, _] = _.useState(void 0),
            { bShowSeeMoreHint: _, panelProps: _ } = (0, _._)(_);
          if (!_) return;
          const _ = !_ && (_ ? _ == 1 : _ <= 2) && _;
          return (0, _.jsx)(_._, {
            className: (0, _._)(
              _().CreatorHomeWithItems,
              _ ? _().WithFollowBtn : "",
              _ && _().FullWidth,
            ),
            navEntryPreferPosition: _._.PREFERRED_CHILD,
            ..._,
            children: (0, _.jsxs)(_._, {
              children: [
                _?.creator_page_bg_url &&
                  (0, _.jsx)("div", {
                    className: _().Background,
                    style: {
                      backgroundImage: `url(${_.creator_page_bg_url})`,
                    },
                  }),
                (0, _.jsxs)(_._, {
                  className: _().Header,
                  "flow-children": "row",
                  children: [
                    (0, _.jsxs)("div", {
                      className: _().ClanInfoRow,
                      children: [
                        !!_ &&
                          (0, _.jsx)("div", {
                            children: (0, _.jsx)(_._, {
                              href: _,
                              focusable: _ !== _,
                              children: (0, _.jsx)("img", {
                                className: _().ClanAvatarImage,
                                src: _.GetAvatarURLFullSize(),
                              }),
                            }),
                          }),
                        (0, _.jsx)("img", {
                          className: _().AvatarBackground,
                          src: _.GetAvatarURLFullSize(),
                        }),
                        (0, _.jsx)("div", {
                          className: _().ClanName,
                          children: (0, _.jsx)("a", {
                            href: _,
                            children: _ || _.GetName(),
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().ButtonContainer,
                      children: [
                        !!(!_ && _ && !_) &&
                          (0, _.jsx)(_._, {
                            className: _().CarouselFollowButton,
                            clanAccountID: _,
                          }),
                        !_ &&
                          (0, _.jsx)(_._, {
                            url: _,
                          }),
                        _ &&
                          (0, _.jsx)(_._, {
                            label: (0, _._)("#StoreApp_SeeAll"),
                            shown: _,
                          }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)(_._, {
                  className: (0, _._)(
                    _().CarouselContentsRow,
                    _ && _().WithFollowSection,
                  ),
                  preferredFocus: !0,
                  children: [
                    (0, _.jsx)(_._, {
                      navKey: "store_page_" + _,
                      classes: _().Carousel,
                      appIDs: _,
                      maxItemCount: _ ? _ : 4,
                      mapAppToCreatorClan: _,
                      strFeatureFirstAppMsg: _,
                      setNumberVisibleItems: _,
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().CarouselFollowSection,
                        children: (0, _.jsx)(_, {
                          clanID: _,
                          creatorName: _.GetName(),
                          creatorUrl: _,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { creatorHomeType: _, clanID: _, bFullWidth: _ } = _,
            [_, _] = (0, _._)(_),
            { creatorHome: _ } = (0, _._)(_),
            _ = _?.GetCreatorHomeURL(_);
          if (_)
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _().CreatorHomeWithoutItems,
                _ && _().FullWidth,
              ),
              children: [
                _?.creator_page_bg_url &&
                  (0, _.jsx)("div", {
                    className: _().Background,
                    style: {
                      backgroundImage: `url(${_.creator_page_bg_url})`,
                    },
                  }),
                (0, _.jsx)("div", {
                  children: (0, _.jsx)("a", {
                    href: _,
                    children: (0, _.jsx)("img", {
                      className: _().ClanAvatarImage,
                      src: _.GetAvatarURLFullSize(),
                    }),
                  }),
                }),
                (0, _.jsx)(_, {
                  clanID: _,
                  creatorName: _.GetName(),
                  creatorUrl: _,
                }),
              ],
            });
        }
        function _(_) {
          const { clanID: _, creatorName: _, creatorUrl: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().ClanInfoColumn,
            children: [
              (0, _.jsx)("div", {
                className: _().ClanFollowTitle,
                children: (0, _.jsx)("a", {
                  href: _,
                  children: (0, _._)("#StoreApp_FollowCreator", _),
                }),
              }),
              (0, _.jsx)("div", {
                className: _().ClanFollowSubtitle,
                children: (0, _._)("#StoreApp_FollowCreatorSubtitle"),
              }),
              (0, _.jsx)("div", {
                className: _().ClanFollowButtonContainer,
                children: (0, _.jsx)(_._, {
                  className: _().FollowButton,
                  clanAccountID: _,
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
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
        function _(_) {
          let {
              _: _,
              dashManifests: _,
              hlsManifest: _,
              screenshot: _,
              title: _,
              category: _,
              statsURL: _,
            } = _,
            _ = _(),
            [_, _, _, _] = (0, _._)(() => [
              !_.BPlayTrailer(_),
              _.BAutoplayEnabled(),
              _.GetPlayerVolume(),
              _.BAudioMuted(),
            ]),
            _ = (0, _.useCallback)(() => {
              _.FireTrailerPlaybackEnded();
            }, [_]);
          return _(_)
            ? (0, _.jsx)(_._, {
                autoplayEnabled: _,
                setAutoplayEnabled: _.GetSetAutoplayEnabled(),
                playerVolume: _,
                setPlayerVolume: _.GetSetPlayerVolume(),
                audioMuted: _,
                setAudioMuted: _.GetSetAudioMuted(),
                children: (0, _.jsx)(_._, {
                  dashManifests: _,
                  hlsManifest: _,
                  screenshot: _,
                  forcePause: _,
                  onPlaybackEnd: _,
                  altText: _,
                  title: _,
                  category: _,
                  statsURL: _,
                }),
              })
            : null;
        }
        function _(_) {
          let _ = _.useRef(!1);
          return _ || (_.current = !0), _.current;
        }
        class _ {
          m_mapTrailerPlay = new Map();
          m_fnOnTrailerEnd;
          m_bAutoplayEnabled = !1;
          m_fnSetAutoplayEnabled;
          m_flPlayerVolume = 1;
          m_fnSetPlayerVolume;
          m_bAudioMuted = !0;
          m_fnSetAudioMuted;
          constructor() {
            (0, _._)(this);
          }
          InitAutoplayMethods(_, _) {
            (this.m_bAutoplayEnabled = _), (this.m_fnSetAutoplayEnabled = _);
          }
          InitPlayerVolumeMethods(_, _) {
            (this.m_flPlayerVolume = _ / 100),
              (this.m_fnSetPlayerVolume = (_) => {
                (_ = _ * 100), _(_);
              });
          }
          InitAudioMutedMethods(_, _) {
            (this.m_bAudioMuted = _), (this.m_fnSetAudioMuted = _);
          }
          UpdateAutoplay(_) {
            this.m_bAutoplayEnabled = _;
          }
          UpdateVolume(_) {
            this.m_flPlayerVolume = _ / 100;
          }
          UpdateMuted(_) {
            this.m_bAudioMuted = _;
          }
          BAutoplayEnabled() {
            return this.m_bAutoplayEnabled;
          }
          GetSetAutoplayEnabled() {
            return this.m_fnSetAutoplayEnabled;
          }
          GetPlayerVolume() {
            return this.m_flPlayerVolume;
          }
          GetSetPlayerVolume() {
            return this.m_fnSetPlayerVolume;
          }
          BAudioMuted() {
            return this.m_bAudioMuted;
          }
          GetSetAudioMuted() {
            return this.m_fnSetAudioMuted;
          }
          SetTrailerState(_, _) {
            this.m_mapTrailerPlay.set(_, _);
          }
          SetTrailerEndCallback(_) {
            this.m_fnOnTrailerEnd = _;
          }
          FireTrailerPlaybackEnded() {
            this.m_fnOnTrailerEnd && this.m_fnOnTrailerEnd();
          }
          BPlayTrailer(_) {
            let _ = this.m_mapTrailerPlay.get(_);
            return _ === void 0 ? !1 : _;
          }
        }
        _([_._], _.prototype, "m_mapTrailerPlay", 2),
          _([_._], _.prototype, "m_bAutoplayEnabled", 2),
          _([_._], _.prototype, "m_flPlayerVolume", 2),
          _([_._], _.prototype, "m_bAudioMuted", 2);
        let _ = null;
        function _() {
          return (
            _ ||
              ((_ = new _()),
              window.dispatchEvent(
                new CustomEvent("valve_gamehighlighttrailers_ready", {
                  detail: _,
                }),
              )),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.strSecondaryCategory
              ? `${_._.STORE_BASE_URL}search/?controllersupport=${_.strCategory}%2C${_.strSecondaryCategory}`
              : `${_._.STORE_BASE_URL}search/?controllersupport=${_.strCategory}`,
            _ = (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _.ImgSection,
                    _.bHightlightRow && _.HighlightRow,
                    _.bHighlightGPRequired && _.GamepadRequired,
                  ),
                  children: _.tagImage,
                }),
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _.LocSection,
                    _.bHighlightText && _.HighlightText,
                    _.bHightlightRow && _.HighlightRow,
                    _.bHighlightGPRequired && _.GamepadRequired,
                  ),
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.LocString,
                        _.bHighlightText && _.HighlightText,
                        _.bHightlightRow && _.HighlightRow,
                        _.bHighlightGPRequired && _.GamepadRequired,
                        _.bPersonalized && _.Personalized,
                      ),
                      children: (0, _._)(_.strLocalizationToken),
                    }),
                    _.strTooltipString &&
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(_.strTooltipString),
                        className: _.ToolTipContainer,
                        children: (0, _.jsx)("span", {
                          className: _.ToolTipControl,
                          children: "?",
                        }),
                      }),
                  ],
                }),
              ],
            });
          return _.strCategory
            ? (0, _.jsx)("a", {
                href: _,
                className: _.InfoRow,
                children: _,
              })
            : (0, _.jsx)("div", {
                className: _.InfoRow,
                children: _,
              });
        }
        function _(_) {
          return jsx("div", {
            className: styles.PreviewContainer,
            children: jsx(_, {
              bPreview: !0,
              ..._,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)(_.Fragment, {
            children:
              (_.bPartialXboxControllerSupport ||
                _.bFullXboxControllerSupport) &&
              (0, _.jsx)("div", {
                className: _.StoreSidebarContainer,
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              }),
          });
        }
        function _() {
          return (0, _.jsx)(_, {
            tagImage: (0, _.jsx)(_.Moo, {
              className: (0, _._)(_.Tilt, _.SmallerSVG),
              role: "presentation",
            }),
            strLocalizationToken: "#Store_ControllerSupport_GamepadRequired",
            bHighlightGPRequired: !0,
            strTooltipString:
              "#Store_ControllerSupport_Tooltip_ControllerRequired",
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.PurchaseNoticeContainer),
            children: [
              (0, _.jsx)(_.Kz1, {
                className: (0, _._)(_.PurchaseNoticeImage),
                role: "presentation",
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.PurchaseNoticeLabel),
                children: (0, _._)("#Store_ControllerSupport_GamepadPreferred"),
              }),
            ],
          });
        }
        function _(_) {
          const { bNoKeyboardSupport: _, bGamepadPreferred: _ } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.NoticeContainer),
            children: [_ && (0, _.jsx)(_, {}), _ && !_ && (0, _.jsx)(_, {})],
          });
        }
        function _(_) {
          const {
            bControllerSupportWizardComplete: _,
            bPS4ControllerSupport: _,
            bPS5ControllerSupport: _,
            bPS4ControllerBTSupport: _,
            bPS5ControllerBTSupport: _,
            bFullXboxControllerSupport: _,
            bPartialXboxControllerSupport: _,
            bSteamInputAPISupport: _,
            bHasOther: _,
            bHasPS4: _,
            bHasPS5: _,
            bHasXbox: _,
            bPreview: _,
          } = _;
          let _ = [];
          if (_ && _ && _ && _) {
            const _ = (0, _.jsx)(_.pcV, {
                className: _.SmallerSVG,
                controllerType: _._,
                partial: !_,
                role: "presentation",
              }),
              _ = _ || _;
            _.push(
              (0, _.jsx)(
                _,
                {
                  tagImage: _,
                  strLocalizationToken: _
                    ? "#Store_ControllerSupport_PS_Personalized"
                    : "#Store_ControllerSupport_PS",
                  bPersonalized: _,
                  strCategory: "55",
                  strSecondaryCategory: "57",
                },
                "1",
              ),
            );
          } else {
            if (_) {
              const _ = (0, _.jsx)(_.pcV, {
                className: _.SmallerSVG,
                controllerType: _._,
                partial: !_,
                role: "presentation",
              });
              _
                ? _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS4_Personalized"
                          : "#Store_ControllerSupport_PS4",
                        bPersonalized: _,
                        strCategory: "55",
                      },
                      "2",
                    ),
                  )
                : _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS4_USB_Personalized"
                          : "#Store_ControllerSupport_PS4_USB",
                        bPersonalized: _,
                        strCategory: "55",
                      },
                      "3",
                    ),
                  );
            }
            if (_) {
              const _ = (0, _.jsx)(_.pcV, {
                className: _.SmallerSVG,
                controllerType: _._,
                partial: !_,
                role: "presentation",
              });
              _
                ? _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS5_Personalized"
                          : "#Store_ControllerSupport_PS5",
                        bPersonalized: _,
                        strCategory: "57",
                      },
                      "4",
                    ),
                  )
                : _.push(
                    (0, _.jsx)(
                      _,
                      {
                        tagImage: _,
                        strLocalizationToken: _
                          ? "#Store_ControllerSupport_PS5_USB_Personalized"
                          : "#Store_ControllerSupport_PS5_USB",
                        bPersonalized: _,
                        strCategory: "57",
                      },
                      "5",
                    ),
                  );
            }
          }
          return (0, _.jsx)(_.Fragment, {
            children:
              (_ || _) &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: _.ControllerSupportLevelString,
                    children: (0, _._)(
                      _
                        ? "#Store_ControllerSupport_FullController"
                        : "#Store_ControllerSupport_PartialController",
                    ),
                  }),
                  (0, _.jsx)(_, {
                    tagImage: (0, _.jsx)(_.pcV, {
                      className: _.SmallerSVG,
                      controllerType: _._,
                      partial: !_,
                      role: "presentation",
                    }),
                    strLocalizationToken: _
                      ? "#Store_ControllerSupport_Xbox_Personalized"
                      : "#Store_ControllerSupport_Xbox",
                    bPersonalized: _,
                    strCategory: "18",
                  }),
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      tagImage: (0, _.jsx)(_.kdM, {
                        className: _.BiggerSVG,
                        bGreyOutRightSide: !_,
                        role: "presentation",
                      }),
                      strLocalizationToken: "#Store_ControllerSupport_SIAPI",
                      strTooltipString:
                        "#Store_ControllerSupport_Tooltip_SIAPI",
                      strCategory: "59",
                    }),
                  ((!_ && !_) || (!_ && _ && !_)) &&
                    (0, _.jsx)(_, {
                      tagImage: (0, _.jsx)(_.vet, {
                        className: _.BiggerSVG,
                        role: "presentation",
                      }),
                      strLocalizationToken:
                        _ || _ || _
                          ? "#Store_ControllerSupport_Unknown_Personalized"
                          : "#Store_ControllerSupport_Unknown",
                      bPersonalized: _ || _ || _,
                    }),
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                ],
              }),
          });
        }
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 70667, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 58167, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 75936, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 67478, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 77178, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 62063, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 91253, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 66690, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 32763, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 82937, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 36501, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 41812, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 35383, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48149, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 89876, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 99089, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 69206, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 74357, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94025, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 92494, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 1481, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48824, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 50208, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 63354, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 63875, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 34053, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 38804, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 48688, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79173, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 75629, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 22319, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 33844, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_),
          _ = new Map([
            [
              2379780,
              {
                strInternalAppName: "Balatro",
                strBannerType: "bus",
              },
            ],
            [
              413150,
              {
                strInternalAppName: "StardewValley",
                strBannerType: "farmer",
              },
            ],
            [
              1086940,
              {
                strInternalAppName: "BaldursGate3",
                strBannerType: "knight",
              },
            ],
            [
              1091500,
              {
                strInternalAppName: "Cyberpunk2077",
                strBannerType: "robot",
              },
            ],
            [
              1245620,
              {
                strInternalAppName: "EldenRing",
                strBannerType: "campfire",
              },
            ],
            [
              1794680,
              {
                strInternalAppName: "VampireSurvivors",
                strBannerType: "zombies",
              },
            ],
            [
              1174180,
              {
                strInternalAppName: "RedDeadRedemption2",
                strBannerType: "campfire",
              },
            ],
            [
              990080,
              {
                strInternalAppName: "HogwartsLegacy",
                strBannerType: "family",
              },
            ],
            [
              1942280,
              {
                strInternalAppName: "Brotato",
                strBannerType: "bus",
              },
            ],
            [
              1868140,
              {
                strInternalAppName: "DaveTheDiver",
                strBannerType: "beach",
              },
            ],
            [
              1145360,
              {
                strInternalAppName: "Hades",
                strBannerType: "campfire",
              },
            ],
            [
              292030,
              {
                strInternalAppName: "TheWitcher3",
                strBannerType: "campfire",
              },
            ],
            [
              646570,
              {
                strInternalAppName: "SlayTheSpire",
                strBannerType: "city",
              },
            ],
            [
              2344520,
              {
                strInternalAppName: "Diablo4",
                strBannerType: "knight",
              },
            ],
            [
              1145350,
              {
                strInternalAppName: "Hades2",
                strBannerType: "campfire",
              },
            ],
            [
              250900,
              {
                strInternalAppName: "TheBindingOfIsaacRebirth",
                strBannerType: "busstop",
              },
            ],
            [
              377160,
              {
                strInternalAppName: "Fallout4",
                strBannerType: "apocalypse",
              },
            ],
            [
              2321470,
              {
                strInternalAppName: "DeepRockGalacticSurvivor",
                strBannerType: "miner",
              },
            ],
            [
              367520,
              {
                strInternalAppName: "HollowKnight",
                strBannerType: "miner",
              },
            ],
            [
              1030300,
              {
                strInternalAppName: "HollowKnightSilksong",
                strBannerType: "knight",
              },
            ],
            [
              2767030,
              {
                strInternalAppName: "MarvelRivals",
                strBannerType: "porch",
              },
            ],
            [
              2679460,
              {
                strInternalAppName: "MetaphorReFantazio",
                strBannerType: "bed",
              },
            ],
            [
              1313140,
              {
                strInternalAppName: "CultOfTheLamb",
                strBannerType: "city",
              },
            ],
            [
              275850,
              {
                strInternalAppName: "NoMansSky",
                strBannerType: "astronaut",
              },
            ],
            [
              2694490,
              {
                strInternalAppName: "PathOfExile2",
                strBannerType: "knight",
              },
            ],
            [
              1687950,
              {
                strInternalAppName: "Persona5Royal",
                strBannerType: "anime",
              },
            ],
            [
              582010,
              {
                strInternalAppName: "MonsterHunterWorld",
                strBannerType: "campfire",
              },
            ],
            [
              2142790,
              {
                strInternalAppName: "FieldsOfMistria",
                strBannerType: "farmer",
              },
            ],
            [
              553850,
              {
                strInternalAppName: "HELLDIVERS2",
                strBannerType: "porch",
              },
            ],
            [
              1623730,
              {
                strInternalAppName: "Palworld",
                strBannerType: "woodsman",
              },
            ],
            [
              588650,
              {
                strInternalAppName: "DeadCells",
                strBannerType: "bus",
              },
            ],
            [
              1903340,
              {
                strInternalAppName: "ClairObscurExpedition33",
                strBannerType: "campfire",
              },
            ],
            [
              2993780,
              {
                strInternalAppName: "FantasyLifei",
                strBannerType: "woodsman",
              },
            ],
            [
              2623190,
              {
                strInternalAppName: "Oblivion",
                strBannerType: "knight",
              },
            ],
            [
              230410,
              {
                strInternalAppName: "Warframe",
                strBannerType: "robot",
              },
            ],
            [
              1551360,
              {
                strInternalAppName: "ForzaHorizon5",
                strBannerType: "car",
              },
            ],
            [
              976730,
              {
                strInternalAppName: "HaloMasterChiefCollection",
                strBannerType: "robot",
              },
            ],
            [
              12210,
              {
                strInternalAppName: "GTAIV",
                strBannerType: "car",
              },
            ],
            [
              1562430,
              {
                strInternalAppName: "Dredge",
                strBannerType: "beach",
              },
            ],
            [
              1446780,
              {
                strInternalAppName: "MonsterHunterRise",
                strBannerType: "campfire",
              },
            ],
            [
              3164500,
              {
                strInternalAppName: "Schedule1",
                strBannerType: "city",
              },
            ],
            [
              1817070,
              {
                strInternalAppName: "SpiderManRemastered",
                strBannerType: "superhero",
              },
            ],
            [
              105600,
              {
                strInternalAppName: "Terraria",
                strBannerType: "miner",
              },
            ],
            [
              1293830,
              {
                strInternalAppName: "ForzaHorizon4",
                strBannerType: "car",
              },
            ],
            [
              3527290,
              {
                strInternalAppName: "Peak",
                strBannerType: "porch",
              },
            ],
            [
              2161700,
              {
                strInternalAppName: "Persona3Reload",
                strBannerType: "anime",
              },
            ],
            [
              1850570,
              {
                strInternalAppName: "DeathStranding",
                strBannerType: "busstop",
              },
            ],
            [
              2552430,
              {
                strInternalAppName: "KingdomHearts",
                strBannerType: "family",
              },
            ],
            [
              504230,
              {
                strInternalAppName: "Celeste",
                strBannerType: "adventurer",
              },
            ],
            [
              632470,
              {
                strInternalAppName: "DiscoElysium",
                strBannerType: "city",
              },
            ],
            [
              227300,
              {
                strInternalAppName: "EuroTruckSimulator2",
                strBannerType: "car",
              },
            ],
            [
              3405340,
              {
                strInternalAppName: "Megabonk",
                strBannerType: "zombies",
              },
            ],
            [
              2062430,
              {
                strInternalAppName: "BallxPit",
                strBannerType: "city",
              },
            ],
            [
              2592160,
              {
                strInternalAppName: "Dispatch",
                strBannerType: "superhero",
              },
            ],
            [
              1771300,
              {
                strInternalAppName: "KingdomComeDeliverance2",
                strBannerType: "knight",
              },
            ],
            [
              3241660,
              {
                strInternalAppName: "REPO",
                strBannerType: "porch",
              },
            ],
            [
              1984270,
              {
                strInternalAppName: "DigimonStoryTimeStranger",
                strBannerType: "anime",
              },
            ],
            [
              2878980,
              {
                strInternalAppName: "NBA2K25",
                strBannerType: "city",
              },
            ],
            [
              108600,
              {
                strInternalAppName: "ProjectZomboid",
                strBannerType: "zombies",
              },
            ],
            [
              381210,
              {
                strInternalAppName: "DeadByDaylight",
                strBannerType: "zombies",
              },
            ],
            [
              1401590,
              {
                strInternalAppName: "DisneyDreamlightValley",
                strBannerType: "family",
              },
            ],
            [
              892970,
              {
                strInternalAppName: "Valheim",
                strBannerType: "knight",
              },
            ],
          ]),
          _ = new Map([
            [
              "adventurer",
              {
                className: _().Adventurer,
              },
            ],
            [
              "anime",
              {
                className: _().Anime,
              },
            ],
            [
              "apocalypse",
              {
                className: _().Apocalypse,
              },
            ],
            [
              "astronaut",
              {
                className: _().Astronaut,
              },
            ],
            [
              "beach",
              {
                className: _().Beach,
              },
            ],
            [
              "bed",
              {
                className: _().Bed,
              },
            ],
            [
              "bus",
              {
                className: _().Bus,
              },
            ],
            [
              "busstop",
              {
                className: _().BusStop,
              },
            ],
            [
              "campfire",
              {
                className: _().Campfire,
              },
            ],
            [
              "car",
              {
                className: _().Car,
              },
            ],
            [
              "city",
              {
                className: _().City,
              },
            ],
            [
              "family",
              {
                className: _().Family,
              },
            ],
            [
              "farmer",
              {
                className: _().Farmer,
              },
            ],
            [
              "knight",
              {
                className: _().Knight,
              },
            ],
            [
              "miner",
              {
                className: _().Miner,
              },
            ],
            [
              "porch",
              {
                className: _().Porch,
              },
            ],
            [
              "robot",
              {
                className: _().Robot,
              },
            ],
            [
              "superhero",
              {
                className: _().Superhero,
              },
            ],
            [
              "woodsman",
              {
                className: _().Woodsman,
              },
            ],
            [
              "zombies",
              {
                className: _().Zombies,
              },
            ],
          ]);
        function _(_) {
          return _.get(_);
        }
        function _(_) {
          return _.get(_);
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = useStoreItemDefaultInfo({
              appid: _,
            }),
            _ = useIsSteamDeckForSaleInUserCountry();
          return !_ || !_.name || !_
            ? null
            : jsx(_, {
                appid: _,
                app_name: _.name,
              });
        }
        function _(_) {
          const { appid: _ } = _,
            _ = _(_);
          return _
            ? (0, _.jsx)(_, {
                appBannerDef: _,
                ..._,
              })
            : null;
        }
        function _(_) {
          const { appid: _, appBannerDef: _, app_name: _ } = _,
            _ = _(_.strBannerType),
            _ = (0, _._)(
              _._.STORE_BASE_URL +
                `app/${_._}?deckapp=${_}&utm_source=topplayed_app_banner&utm_campaign=${_}`,
              "topplayed_app_banner",
              _,
            );
          return _
            ? (0, _.jsxs)("div", {
                className: _().BannerWrapper,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().BannerTitle,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().DeckLogo,
                      }),
                      _.Localize("#DeckTopPlayedAppBanner_Title"),
                    ],
                  }),
                  (0, _.jsx)("a", {
                    href: _,
                    className: (0, _._)(_().TopPlayedBannerCtn, _.className),
                    children: (0, _.jsxs)("div", {
                      className: _().BannerRightContent,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().BannerHeader,
                          children: _.Localize(
                            "#DeckTopPlayedAppBanner_Header",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().BannerGameText,
                          children: _.LocalizeReact(
                            "#DeckTopPlayedAppBanner_GameText",
                            (0, _.jsx)("span", {
                              children: _,
                            }),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : (console.warn(`No banner type found for ${_.strBannerType}`),
              null);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_);
          return !_ || !_
            ? null
            : (0, _.jsxs)(_._, {
                focusable: !0,
                className: _().ParentWidgetContainer,
                onActivate: () => {
                  window.location.href = _;
                },
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().ParentCapsuleImageContainer),
                    children: (0, _.jsx)("a", {
                      href: _,
                      children: (0, _.jsx)("img", {
                        className: _().ParentCapsuleImage,
                        src: (0, _._)(_, "small_capsule"),
                      }),
                    }),
                  }),
                  (0, _.jsxs)("div", {
                    className: _().AppDetails,
                    children: [
                      (0, _.jsx)("a", {
                        className: (0, _._)(_().GameName),
                        href: _,
                        children: _.name,
                      }),
                      (0, _.jsxs)("div", {
                        className: _().PriceContainer,
                        children: [
                          (0, _.jsx)(_._, {
                            _: _,
                          }),
                          (0, _.jsx)(_._, {
                            appid: _,
                            className: _().AddToWishlistButton,
                            bTextMode: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return (0, _.useMemo)(() => {
            let _ = [],
              _ = new Map();
            for (let _ of _)
              if (
                (_.featured &&
                  (_.push({
                    type: "trailer",
                    key: `t_${_._}`,
                    data: _,
                  }),
                  _.set(_._, !0)),
                _.length >= 2)
              )
                break;
            for (let _ of _)
              _.push({
                type: "screenshot",
                key: `s_${_.name}`,
                data: _,
              });
            for (let _ of _)
              _.has(_._) ||
                _.push({
                  type: "trailer",
                  key: `t_${_._}`,
                  data: _,
                });
            return _;
          }, [_, _]);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, bSelfPurchaseOption: _, bHideNewTag: _ } = _,
            { data: _ } = (0, _._)(_);
          return _
            ? (0, _.jsx)(_._, {
                _: _,
                bPurchaseOptionDisplay: !0,
                bHidePrePurchase: !0,
                bSelfPurchaseOption: _,
                bHideNewTag: _,
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new _._("GameInterest");
        function _(_, _) {
          return ["GameInterest", _, _];
        }
        function _(_, _, _, _) {
          _.setQueryData(_(_, _), _);
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (
            _.useEffect(() => {
              const { appid: _, userInterest: _, markReady: _ } = _;
              _(_, _, _, _), _();
            }, [_, _, _]),
            null
          );
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_, _),
            enabled: !!_,
            queryFn: async () => {
              throw (
                (_.Info(
                  "Fetching user game interest from the back end for ",
                  _,
                ),
                new Error("Fetching user game interest is not yet supported"))
              );
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationKey: [_, ..._(_, _)],
            mutationFn: async (_) => {
              _.Info(`Mutating ${_} for ${_}`, _);
              const _ = new FormData();
              _.set("sessionid", (0, _._)()),
                _.set("appid", _.toString()),
                _.set("snr", _);
              const { url: _, new_interest: _ } = _(_, _);
              _.Info(" new interest before backend call", _),
                _.setQueryData(_(_, _), _);
              try {
                const _ = await fetch(_, {
                  method: "POST",
                  body: _,
                });
                return _._
                  ? !0
                  : (_.Info(`request to ${_} ${_} failed with ${_}`, _), !1);
              } catch (_) {
                return _.Info(`request to ${_} ${_} failed with ${_}`, _), !1;
              }
            },
            onSuccess: (_, _) => {
              _ || _.setQueryData(_(_, _), _.old_interest);
            },
            onError: (_, _, _) => {
              _.setQueryData(_(_, _), _.old_interest);
            },
          });
        }
        function _(_) {
          return _(_, "wishlist", (_, _) => {
            const { wishlist: _, old_interest: _ } = _,
              _ = {
                ..._,
                wishlist: _,
              },
              _ = _
                ? `${_._.STORE_BASE_URL}api/addtowishlist`
                : `${_._.STORE_BASE_URL}api/removefromwishlist`;
            return {
              new_interest: _,
              url: _,
            };
          });
        }
        function _(_) {
          return _(_, "ignore", (_, _) => {
            const { ignored: _, ignored_reason: _, old_interest: _ } = _,
              _ = {
                ..._,
                ignored: _,
                ignored_reason: _,
              };
            _ && _ !== void 0
              ? _.set("ignore_reason", _.toString())
              : _.set("remove", "1");
            const _ = `${_._.STORE_BASE_URL}recommended/ignorerecommendation/`;
            return {
              new_interest: _,
              url: _,
            };
          });
        }
        function _(_) {
          return _(_, "follow", (_, _) => {
            const { following: _, old_interest: _ } = _,
              _ = {
                ..._,
                following: _,
              };
            _ || _.set("unfollow", "1");
            const _ = `${_._.STORE_BASE_URL}explore/followgame/`;
            return {
              new_interest: _,
              url: _,
            };
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          let { trailers: _, screenshots: _, appid: _ } = _;
          return (0, _.jsx)(_._, {
            supportsFullscreen: !1,
            supportsTheater: !0,
            children: (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                trailers: _,
                screenshots: _,
                appid: _,
              }),
            }),
          });
        }
        function _(_) {
          let { trailers: _, screenshots: _, appid: _ } = _,
            _ = (0, _._)(),
            _ = _?.strMode == "theater",
            _ = (0, _._)(_, "theater"),
            _ = (0, _._)(_, "none"),
            _ = (0, _._)(),
            [_, _] = _(_, _),
            _ = _(_, _);
          _(_);
          const _ = _.useCallback(
            (_) => {
              _.refTheater && _.refTheater(_);
            },
            [_],
          );
          if ((_.use(_._.Ready()), _.length == 0)) return null;
          let _ = _.map((_, _) =>
              _.type == "screenshot"
                ? (0, _.jsx)(
                    _,
                    {
                      autoFocus: _ == 0,
                      screenshot: _.data,
                    },
                    _.key,
                  )
                : _.type == "trailer"
                  ? (0, _.jsx)(
                      _,
                      {
                        autoFocus: _ == 0,
                        trailer: _.data,
                      },
                      _.key,
                    )
                  : null,
            ),
            _ = _ ? "" : _._.Localize("#TrailerPlayer_FullScreen_Tooltip");
          return (0, _.jsx)("div", {
            ref: _,
            className: _.TheaterDialog,
            popover: "manual",
            children: (0, _.jsx)("div", {
              className: _.FocusRingClip,
              children: (0, _.jsx)(_._, {
                rootClassName: _.FocusRingRoot,
                disableFocusRing: _,
                children: (0, _.jsxs)(_._, {
                  ref: _.ref,
                  navRef: _.navRef,
                  className: _.GamepadCarousel,
                  "flow-children": "row",
                  navEntryPreferPosition: _._.MAINTAIN_X,
                  onOptionsActionDescription: _,
                  onOptionsButton: _,
                  onCancelButton: _ ? _ : void 0,
                  onGamepadDirection: _,
                  onFocusWithin: _,
                  children: [
                    !!_ &&
                      (0, _.jsx)(_, {
                        appid: _,
                        fnExitTheaterMode: _,
                      }),
                    _,
                  ],
                }),
              }),
            }),
          });
        }
        function _(_) {
          let _ = _.length;
          (0, _.useLayoutEffect)(() => {
            if (_ < 1) return;
            document
              .querySelectorAll(".gamehighlight_gamepadskeleton")
              .forEach((_) => _.remove());
          }, [_]);
        }
        function _(_) {
          let { children: _ } = _,
            _ = (0, _.useCallback)(() => {}, []),
            [_, _] = (0, _.useState)(!0);
          return (0, _.jsx)(_._, {
            autoplayEnabled: !1,
            setAutoplayEnabled: _,
            playerVolume: 1,
            setPlayerVolume: _,
            audioMuted: _,
            setAudioMuted: _,
            children: _,
          });
        }
        function _(_, _) {
          let _ = (0, _.useCallback)(
            (_) => {
              _ && !_ && _();
            },
            [_, _],
          );
          return [(0, _.useCallback)((_) => !!_, [_]), _];
        }
        function _(_) {
          let { screenshot: _, autoFocus: _ } = _,
            _ = (0, _._)(_.CarouselItem, _.Screenshot);
          return (0, _.jsx)(_._, {
            className: _,
            autoFocus: _,
            focusable: !0,
            onOKActionDescription: "",
            children: (0, _.jsx)("img", {
              src: _.full,
              alt: _.altText,
            }),
          });
        }
        function _(_) {
          let { trailer: _, autoFocus: _ } = _;
          return _.dashManifests
            ? (0, _.jsx)(_, {
                trailer: _,
                autoFocus: _,
              })
            : (0, _.jsx)(_, {
                trailer: _,
                autoFocus: _,
              });
        }
        function _(_) {
          let { trailer: _, autoFocus: _ } = _,
            _ = (0, _.useRef)(null),
            [_, _] = _(),
            _ = (0, _._)(_, _),
            [_, _] = _(_),
            _ = _(_),
            _ = _(_),
            _ = (0, _.useCallback)(
              (_) => {
                let _ = _.current;
                if (_.detail.button == _._.TRIGGER_LEFT && _) {
                  (_.currentTime = Math.max(0, _.currentTime - 10)),
                    _.preventDefault(),
                    _.stopPropagation();
                  return;
                }
                if (_.detail.button == _._.TRIGGER_RIGHT && _) {
                  (_.currentTime = Math.min(_.duration, _.currentTime + 10)),
                    _.preventDefault(),
                    _.stopPropagation();
                  return;
                }
              },
              [_],
            );
          if (!_.webmMax) return null;
          let _ = _.poster || "",
            _ = _.bMuted
              ? _._.Localize("#TrailerPlayer_Unmute_Tooltip")
              : _._.Localize("#TrailerPlayer_Mute_Tooltip"),
            _ = _.bPaused
              ? _._.Localize("#TrailerPlayer_Play_Tooltip")
              : _._.Localize("#TrailerPlayer_Pause_Tooltip"),
            _ = (0, _._)(_.CarouselItem, _.SingleFileTrailer);
          return (0, _.jsx)(_._, {
            className: _,
            onActivate: _,
            onOKActionDescription: _,
            ..._,
            onSecondaryButton: _,
            onSecondaryActionDescription: _,
            onButtonDown: _,
            autoFocus: _,
            children: (0, _.jsx)("video", {
              ref: _,
              controls: !0,
              muted: !0,
              disablePictureInPicture: !0,
              controlsList: "nodownload",
              playsInline: !0,
              preload: "none",
              poster: _,
              children: (0, _.jsx)("source", {
                src: _.webmMax,
                type: "video/webm",
              }),
            }),
          });
        }
        function _() {
          let [_, _] = (0, _.useState)({
              bPaused: !0,
              bMuted: !0,
            }),
            _ = (0, _._)(
              (_) => {
                if (!_) return () => {};
                let _ = () => {
                    _((_) => ({
                      ..._,
                      bMuted: _.muted,
                    }));
                  },
                  _ = () => {
                    _((_) => ({
                      ..._,
                      bPaused: !1,
                    }));
                  },
                  _ = () => {
                    _((_) => ({
                      ..._,
                      bPaused: !0,
                    }));
                  };
                return (
                  _.addEventListener("volumechange", _),
                  _.addEventListener("play", _),
                  _.addEventListener("pause", _),
                  () => {
                    _.removeEventListener("volumechange", _),
                      _.removeEventListener("play", _),
                      _.removeEventListener("pause", _);
                  }
                );
              },
              [_],
            );
          return [_, _];
        }
        function _(_) {
          let _ = (0, _.useRef)(!1),
            _ = (0, _.useRef)(null),
            _ = (0, _.useCallback)(
              (_) => {
                let _ = _.current;
                if (_ && ((_.current = _), !_.current)) {
                  if (!_) {
                    _.paused || _.pause();
                    return;
                  }
                  (_.current = _.play()),
                    _.current
                      .then(() => {
                        !_.current && _.current && _.current.pause(),
                          (_.current = null);
                      })
                      .catch(() => {
                        _.current = null;
                      });
                }
              },
              [_],
            ),
            _ = (0, _.useCallback)(() => {
              let _ = _.current;
              _ && _(_.paused);
            }, [_, _]);
          return [_, _];
        }
        function _(_) {
          let _ = (0, _.useCallback)(() => _(!0), [_]),
            _ = (0, _.useCallback)(() => _(!1), [_]);
          return {
            onGamepadFocus: _,
            onGamepadBlur: _,
          };
        }
        function _(_) {
          return (0, _.useCallback)(() => {
            let _ = _.current;
            _ && (_.muted = !_.muted);
          }, [_]);
        }
        function _(_) {
          const { poster: _, bVideoReady: _ } = _;
          return _
            ? (0, _.jsxs)("div", {
                className: (0, _._)(_.StillPoster, _ && _.VideoStarted),
                children: [
                  (0, _.jsx)("img", {
                    className: (0, _._)(_.Poster),
                    src: _,
                    alt: "",
                  }),
                  (0, _.jsx)(_._, {
                    className: _.Icon,
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          let { trailer: _, autoFocus: _ } = _,
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _._)();
          const _ = _.useCallback(() => {
            _(!0);
          }, []);
          let _,
            _ = (0, _._)(_.CarouselItem, _.DashTrailer);
          return (0, _.jsxs)(_._, {
            ref: _,
            className: _,
            onFocusWithin: _,
            autoFocus: _,
            children: [
              (0, _.jsx)(_, {
                poster: _.poster,
                bVideoReady: _,
              }),
              (0, _.jsx)(_._, {
                mode: "JustLoad",
                horizontal: !0,
                holdGamepadFocus: !0,
                children: (0, _.jsx)(_._, {
                  dashManifests: _.dashManifests,
                  hlsManifest: _.hlsManifest,
                  screenshot: _.poster,
                  altText: _.title,
                  forcePause: !_ || !_,
                  onPlaybackEnd: _,
                  onPlaybackStart: _,
                  title: _.title,
                  category: _.category,
                  statsURL: _.statsURL,
                }),
              }),
            ],
          });
        }
        function _(_, _) {
          return _._.STORE_ITEM_BASE_URL + _.replace("${FILENAME}", _);
        }
        function _(_) {
          const { appid: _, fnExitTheaterMode: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = _(_),
            { mutateAsync: _ } = _(_),
            _ = !!_?.wishlist,
            _ = !_?.owned,
            _ = _.useCallback(() => {
              _ &&
                _({
                  wishlist: !_.wishlist,
                  old_interest: _,
                });
            }, [_, _]);
          let _, _;
          _ &&
            _ &&
            ((_ = _._.Localize(
              _ ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
            )),
            (_ = _));
          const _ = _.useCallback(() => {
            window.postMessage({
              method: "FocusPurchaseOptions",
            });
          }, []);
          if (!_) return null;
          let _ = (0, _._)(_.CarouselItem, _.TitleCard);
          return (0, _.jsx)(_._, {
            className: _,
            onActivate: _,
            onSecondaryActionDescription: _,
            onSecondaryButton: _,
            onOptionsActionDescription: null,
            onOptionsButton: () => {},
            onFocus: _,
            children: (0, _.jsxs)(_._, {
              position: "absolute",
              inset: "0 0 0 0",
              direction: "column",
              overflow: "hidden",
              children: [
                (0, _.jsx)("img", {
                  className: _.Header,
                  src: _(_.asset_url_format, _.header),
                  alt: "",
                }),
                (0, _.jsxs)(_._, {
                  className: _.Bottom,
                  flexGrow: "1",
                  flexShrink: "1",
                  direction: "column",
                  overflow: "hidden",
                  padding: "3",
                  paddingTop: "2",
                  children: [
                    (0, _.jsx)(_._, {
                      flexGrow: "0",
                      flexShrink: "0",
                      children: (0, _.jsx)(_._, {
                        contrast: "title",
                        weight: "heavy",
                        size: {
                          initial: "2",
                          _: "4",
                          _: "6",
                        },
                        children: _?.name,
                      }),
                    }),
                    (0, _.jsx)(_._, {
                      flexGrow: "1",
                      overflow: "hidden",
                      children: (0, _.jsx)(_._, {
                        size: {
                          initial: "1",
                          _: "2",
                          _: "4",
                        },
                        lineClamp: 7,
                        contrast: "body",
                        children: _?.short_description,
                      }),
                    }),
                    _?.best_purchase_option &&
                      (0, _.jsxs)(_._, {
                        className: _.BottomRow,
                        flexGrow: "0",
                        flexShrink: "0",
                        children: [
                          (0, _.jsx)(_, {
                            _: {
                              appid: _,
                            },
                            bHideNewTag: !0,
                          }),
                          _ &&
                            (0, _.jsxs)(_._, {
                              className: _.WishlistButton,
                              children: [
                                _
                                  ? (0, _.jsx)(_.qnF, {
                                      className: _.StarIcon,
                                    })
                                  : (0, _.jsx)(_.T4m, {
                                      className: _.StarIcon,
                                    }),
                                (0, _.jsx)(_.xwO, {
                                  button: "X",
                                  className: _.ButtonIcon,
                                }),
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          let _ = document.cookie.match(
            /(^|; )bGameHighlightAutoplayDisabled=([^;]*)/,
          );
          return !(_ && _[2] == "true");
        }
        function _(_) {
          let _ = new Date();
          _.setTime(_.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let _ = _ ? "false" : "true";
          document.cookie = `bGameHighlightAutoplayDisabled=${_}; expires=${_.toUTCString()};path=/`;
        }
        function _() {
          let _ = document.cookie.match(
              /(^|; )flGameHighlightPlayerVolume=([^;]*)/,
            ),
            _ = _ && _[2] ? parseFloat(_[2]) : 80;
          return _ < 0 ? 0 : _ > 100 ? 100 : _;
        }
        function _(_) {
          let _ = new Date();
          _.setTime(_.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10),
            (document.cookie = `flGameHighlightPlayerVolume=${_}; expires=${_.toUTCString()};path=/`);
        }
        function _() {
          let _ = document.cookie.match(
            /(^|; )bGameHighlightAudioEnabled=([^;]*)/,
          );
          return _ && _[2] == "true";
        }
        function _(_) {
          let _ = new Date();
          _.setTime(_.getTime() + 1e3 * 60 * 60 * 24 * 365 * 10);
          let _ = _ ? "true" : "false";
          document.cookie = `bGameHighlightAudioEnabled=${_}; expires=${_.toUTCString()};path=/`;
        }
        function _(_) {
          let { children: _ } = _,
            [_, _] = (0, _.useState)(_),
            _ = (0, _.useCallback)((_) => {
              _(_), _(_);
            }, []),
            [_, _] = (0, _.useState)(_),
            _ = (0, _.useCallback)((_) => {
              (_ = _ * 100), _(_), _(_);
            }, []),
            [_, _] = (0, _.useState)(_),
            _ = (0, _.useCallback)((_) => {
              _(!_), _(!_);
            }, []);
          return (0, _.jsx)(_._, {
            autoplayEnabled: _,
            setAutoplayEnabled: _,
            playerVolume: _ / 100,
            setPlayerVolume: _,
            audioMuted: !_,
            setAudioMuted: _,
            children: _,
          });
        }
        function _() {
          return (0, _._)().m_bAutoplayEnabled ?? !1;
        }
        const _ = (0, _.createContext)(void 0);
        function _(_) {
          let { orderedItems: _, children: _ } = _,
            _ = _(),
            [_, _] = (0, _.useState)(() => _(_, _)),
            _ = (0, _.useMemo)(() => {
              if (_.length == 0)
                return {
                  strActiveID: "",
                  strActiveType: "",
                  strPreviousID: "",
                  strNextID: "",
                  fnSetActive: _,
                };
              let _ = _.findIndex((_) => _.key == _);
              _ = _ || 0;
              let _ = _[_].type,
                _ = _("previous", _, _, _),
                _ = _("next", _, _, _);
              return {
                strActiveID: _,
                strActiveType: _,
                strPreviousID: _,
                strNextID: _,
                fnSetActive: _,
              };
            }, [_, _, _, _]);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          let _ = (0, _.useContext)(_);
          return (
            (0, _._)(
              _ != null,
              "useHighlightContext used outside of HighlightContextProvider",
            ),
            _
          );
        }
        function _(_) {
          let _ = _();
          return _ == _.strActiveID;
        }
        function _(_) {
          let _ = _();
          return _ == _.strNextID;
        }
        function _(_, _) {
          return (
            (0, _._)(_.length > 0, "Unexpected length"),
            _[0].type == "trailer" && !_ ? _("next", _, 0, _) : _[0].key
          );
        }
        function _(_, _, _, _) {
          (0, _._)(_.length > 0, "Unexpected length");
          let _ = _;
          do
            if (
              (_ == "next"
                ? (_ = (_ + 1) % _.length)
                : (_ = (_ - 1 + _.length) % _.length),
              _[_].type != "trailer" || _)
            )
              break;
          while (_ != _);
          return _[_].key;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          let { items: _ } = _,
            {
              refStrip: _,
              refTrack: _,
              refThumb: _,
              fnRegisterItemElement: _,
            } = _(),
            _ = (0, _._)()?.strMode == "theater";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_.StripSkeleton, _ && _.TheaterMode),
                children: [
                  (0, _.jsx)("div", {
                    className: _.Items,
                  }),
                  (0, _.jsx)("div", {
                    className: _.Scrollbar,
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_.Strip, _ && _.TheaterMode),
                children: [
                  (0, _.jsx)(_, {
                    refStrip: _,
                    items: _,
                    registerItemElement: _,
                  }),
                  (0, _.jsx)(_, {
                    refTrack: _,
                    refThumb: _,
                  }),
                ],
              }),
            ],
          });
        }
        function _() {
          let _ = _(),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(void 0);
          _.current || (_.current = new Map()),
            (0, _.useEffect)(() => {
              const _ = _.current,
                _ = _.current,
                _ = _.current;
              if (!_ || !_ || !_) return;
              let _ = _.matches(":dir(rtl)"),
                _ = () => {
                  _.current ||
                    (_.current = requestAnimationFrame(() => {
                      _.current = null;
                      let _ = _.getBoundingClientRect(),
                        _ = _.getBoundingClientRect(),
                        _ = _.width - _.width,
                        _ = _.scrollWidth - _.clientWidth,
                        _;
                      _
                        ? (_ = (0, _._)(_.scrollLeft, -_, 0, -_, 0))
                        : (_ = (0, _._)(_.scrollLeft, 0, _, 0, _)),
                        (_.style.transform = `translateX( ${_}px )`);
                    }));
                };
              return (
                _.addEventListener("scroll", _, {
                  passive: !0,
                }),
                () => {
                  _.removeEventListener("scroll", _),
                    _.current && cancelAnimationFrame(_.current);
                }
              );
            }, []),
            (0, _.useEffect)(() => {
              const _ = _.current,
                _ = _.current,
                _ = _.current;
              if (!_ || !_ || !_) return;
              let _ = null,
                _ = _.matches(":dir(rtl)"),
                _ = (_) => {
                  if (!_) return;
                  let _ = _.clientX - _.nInitialClientX,
                    _ = (0, _._)(_.nInitialPosition + _, 0, _.nTrackWidth),
                    _ = (0, _._)(_, 0, _.nTrackWidth, 0, _.nScrollWidth);
                  _ && (_ = -(_.nScrollWidth - _)),
                    _.scrollTo({
                      left: _,
                      behavior: "auto",
                    });
                },
                _ = (_) => {
                  _.setPointerCapture(_.pointerId);
                  let _ = _.getBoundingClientRect(),
                    _ = _.getBoundingClientRect(),
                    _ = _.width - _.width,
                    _ = _.scrollWidth - _.clientWidth,
                    _ = Math.max(_.left - _.left, 0),
                    _ = _.clientX;
                  _.target != _ &&
                    ((_ = _.clientX - _.left),
                    (_ -= Math.floor(_.width / 2)),
                    (_ = (0, _._)(_, 0, _))),
                    (_ = {
                      nInitialPosition: _,
                      nInitialClientX: _,
                      nTrackWidth: _,
                      nScrollWidth: _,
                    }),
                    (document.body.style.userSelect = "none"),
                    _(_);
                },
                _ = (_) => {
                  (_ = null), (document.body.style.userSelect = "");
                };
              return (
                _.addEventListener("pointerdown", _),
                _.addEventListener("pointermove", _),
                _.addEventListener("lostpointercapture", _),
                () => {
                  _.removeEventListener("pointerdown", _),
                    _.removeEventListener("pointermove", _),
                    _.removeEventListener("lostpointercapture", _);
                }
              );
            }, []);
          let _ = _.strActiveID;
          (0, _.useEffect)(() => {
            let _ = _.current.get(_);
            if (!_) return;
            const _ = _.current;
            if (!_) return;
            let _ = _.getBoundingClientRect(),
              _ = _.getBoundingClientRect();
            if (_.left < _.left || _.right > _.right) {
              let _ = _.left - _.left + _.scrollLeft;
              _.scrollTo({
                left: _,
                behavior: "smooth",
              });
            }
          }, [_]);
          let _ = (0, _.useCallback)(
            (_, _) => {
              _ ? _.current.set(_, _) : _.current.delete(_);
            },
            [_],
          );
          return {
            refStrip: _,
            refTrack: _,
            refThumb: _,
            fnRegisterItemElement: _,
          };
        }
        function _(_) {
          let { refStrip: _, items: _, registerItemElement: _ } = _,
            _ = _(),
            _ = _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  item: _,
                  registerItemElement: _,
                },
                _.key,
              ),
            );
          return (0, _.jsx)("div", {
            ref: _,
            className: _.StripItems,
            onKeyDown: _,
            tabIndex: 0,
            children: _,
          });
        }
        function _() {
          let _ = _();
          return (0, _.useCallback)(
            (_) => {
              _.repeat ||
                (_.code == "ArrowLeft"
                  ? (_.currentTarget.matches(":dir(rtl)")
                      ? _.strNextID && _.fnSetActive(_.strNextID)
                      : _.strPreviousID && _.fnSetActive(_.strPreviousID),
                    _.preventDefault())
                  : _.code == "ArrowRight" &&
                    (_.currentTarget.matches(":dir(rtl)")
                      ? _.strPreviousID && _.fnSetActive(_.strPreviousID)
                      : _.strNextID && _.fnSetActive(_.strNextID),
                    _.preventDefault()));
            },
            [_],
          );
        }
        function _(_) {
          let { item: _, registerItemElement: _ } = _,
            _ = _(),
            _ = _.key == _.strActiveID,
            _ = () => _.fnSetActive(_.key),
            _ = _.key,
            _ = (0, _.useCallback)((_) => _(_, _), [_, _]),
            _ = _.data.thumbnail ? _.data.thumbnail : "",
            _ = (0, _._)(_.Item, _ && _.Active);
          return (0, _.jsxs)("div", {
            ref: _,
            className: _,
            onClick: _,
            children: [
              !!_ &&
                (0, _.jsx)("img", {
                  src: _,
                  alt: "",
                }),
              _.type == "trailer" &&
                (0, _.jsx)("div", {
                  className: _.PlayIcon,
                  children: (0, _.jsx)(_._, {}),
                }),
            ],
          });
        }
        function _(_) {
          let { refTrack: _, refThumb: _ } = _,
            _ = _(),
            _ = _.strPreviousID ? () => _.fnSetActive(_.strPreviousID) : void 0,
            _ = _.strNextID ? () => _.fnSetActive(_.strNextID) : void 0;
          return (0, _.jsxs)("div", {
            className: _.StripScrollbar,
            children: [
              (0, _.jsx)("div", {
                className: _.Arrow,
                onClick: _,
                children: (0, _.jsx)(_, {
                  direction: "left",
                }),
              }),
              (0, _.jsx)("div", {
                ref: _,
                className: _.Track,
                children: (0, _.jsx)("div", {
                  ref: _,
                  className: _.Thumb,
                }),
              }),
              (0, _.jsx)("div", {
                className: _.Arrow,
                onClick: _,
                children: (0, _.jsx)(_, {
                  direction: "right",
                }),
              }),
            ],
          });
        }
        function _(_) {
          let { direction: _ } = _;
          return _ == "right"
            ? (0, _.jsx)("svg", {
                viewBox: "0 0 49 79",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, _.jsx)("path", {
                  _: "M8.81647 0L48 39.5005L8.81647 79L0 70.1124L30.3671 39.4995L0 8.88756L8.81647 0Z",
                  fill: "currentColor",
                }),
              })
            : (0, _.jsx)("svg", {
                viewBox: "0 0 49 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, _.jsx)("path", {
                  _: "M39.3427 79.6279L0.159182 40.1274L39.3427 0.627931L48.1592 9.51549L17.7921 40.1284L48.1592 70.7404L39.3427 79.6279Z",
                  fill: "currentColor",
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 5e3;
        function _(_) {
          let { appName: _, trailers: _, screenshots: _ } = _,
            _ = _(),
            _ = _(_, _);
          return (
            _(_),
            _.length == 0
              ? null
              : (0, _.jsx)(_._, {
                  supportsTheater: !_,
                  supportsFullscreen: (0, _._)(),
                  children: (0, _.jsx)(_, {
                    children: (0, _.jsx)(_, {
                      orderedItems: _,
                      children: (0, _.jsxs)(_, {
                        children: [
                          (0, _.jsx)(_, {
                            appName: _,
                            items: _,
                          }),
                          (0, _.jsx)(_, {
                            items: _,
                          }),
                        ],
                      }),
                    }),
                  }),
                })
          );
        }
        function _() {
          return (
            (0, _._)(`(max-width: ${_.storeNarrowResponsiveWidth})`) ||
            _._.IN_MOBILE_WEBVIEW
          );
        }
        function _(_) {
          let _ = _.length;
          (0, _.useLayoutEffect)(() => {
            if (_ < 1) return;
            document
              .querySelectorAll(".gamehighlight_desktopskeleton")
              .forEach((_) => _.remove());
          }, [_]);
        }
        const _ = (0, _.createContext)(!1);
        function _() {
          return (0, _.useContext)(_);
        }
        function _(_) {
          let { children: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useCallback)((_) => _(_.isIntersecting), []),
            _ = (0, _._)(_),
            { refRoot: _ } = _(_),
            _ = (0, _._)(_, _);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)("div", {
              ref: _,
              children: _,
            }),
          });
        }
        function _(_) {
          let _ = (0, _.useRef)(null),
            _ = (0, _.useRef)(0),
            _ = (0, _.useRef)(!1),
            _ = (0, _.useRef)(_),
            _ = _(),
            _ = (0, _.useRef)(_);
          _.current = _;
          let _ = ((0, _._)()?.strMode ?? "none") != "none",
            _ = (0, _.useRef)(_);
          _.current = _;
          let _ = (0, _.useCallback)(() => {
              if (
                !_.current ||
                _.current.strActiveType != "screenshot" ||
                _.current ||
                _.current ||
                _.current ||
                !_.current
              )
                return;
              let _ = () => {
                (_.current = 0), _.current.fnSetActive(_.current.strNextID);
              };
              _.current = window.setTimeout(_, _);
            }, []),
            _ = (0, _.useCallback)(() => {
              _.current && (window.clearTimeout(_.current), (_.current = 0));
            }, []),
            _ = _.strActiveID;
          return (
            (0, _.useEffect)(() => {
              _();
            }, [_]),
            (0, _.useEffect)(() => {
              _ ? _() : _();
            }, [_]),
            (0, _.useEffect)(() => {
              const _ = _.current;
              if (!_) return;
              let _ = () => {
                  document.visibilityState == "visible" ? _() : _();
                },
                _ = () => {
                  (_.current = !0), _();
                },
                _ = () => {
                  (_.current = !1), _();
                };
              return (
                _.addEventListener("pointerenter", _),
                _.addEventListener("pointerleave", _),
                document.addEventListener("visibilitychange", _),
                () => {
                  _.removeEventListener("pointerenter", _),
                    _.removeEventListener("pointerleave", _),
                    document.addEventListener("visibilitychange", _);
                }
              );
            }, []),
            (0, _.useEffect)(() => {
              (_.current = _), _ ? _() : _();
            }, [_, _, _]),
            {
              refRoot: _,
            }
          );
        }
        function _(_) {
          let { appName: _, items: _ } = _,
            _ = _(),
            _ = _(),
            _ = (0, _._)(),
            _ = _?.strMode == "theater",
            [_, _] = _(),
            [_, _] = (0, _._)(),
            _ = _ ? _.strActiveID : "",
            _ = _(_),
            _ = (0, _._)(_?.refTheater, _),
            _ = _.map((_) =>
              _.type == "screenshot"
                ? (0, _.jsx)(
                    _,
                    {
                      _: _.key,
                      screenshot: _.data,
                      focus: _.key == _,
                    },
                    _.key,
                  )
                : _.type == "trailer"
                  ? (0, _.jsx)(
                      _,
                      {
                        _: _.key,
                        trailer: _.data,
                        focus: _.key == _,
                      },
                      _.key,
                    )
                  : null,
            ),
            _ = _.strPreviousID ? () => _.fnSetActive(_.strPreviousID) : void 0,
            _ = _.strNextID ? () => _.fnSetActive(_.strNextID) : void 0;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                ref: _,
                className: _.TheaterDialog,
                ..._,
                children: (0, _.jsxs)("div", {
                  className: _.TheaterModeFrame,
                  children: [
                    (0, _.jsx)(_, {
                      appName: _,
                    }),
                    (0, _.jsxs)("div", {
                      ref: _?.refFullscreen,
                      className: _.ItemViewArea,
                      ..._,
                      onKeyDown: _,
                      tabIndex: 0,
                      children: [
                        _,
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _.FullscreenArrow,
                            _ && _.Visible,
                            _.Previous,
                          ),
                          onClick: _,
                          "data-keepcontrols": !0,
                          children: (0, _.jsx)(_, {
                            direction: "left",
                          }),
                        }),
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _.FullscreenArrow,
                            _ && _.Visible,
                            _.Next,
                          ),
                          onClick: _,
                          "data-keepcontrols": !0,
                          children: (0, _.jsx)(_, {
                            direction: "right",
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      items: _,
                      activeItem: _.strActiveID,
                    }),
                  ],
                }),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.SkeletonViewArea, _ && _.TheaterMode),
              }),
            ],
          });
        }
        function _(_) {
          let { ref: _, children: _, ..._ } = _,
            _ = (0, _._)(),
            _ = _?.strMode,
            _ = (0, _._)(_, "none"),
            _ = (0, _.useCallback)(
              (_) => {
                _.target === _.currentTarget && _();
              },
              [_],
            );
          return (
            (0, _.useEffect)(() => {
              if (_ != "theater") return;
              let _ = (_) => {
                _.key == "Escape" && !_.repeat && _();
              };
              return (
                window.addEventListener("keydown", _),
                () => window.removeEventListener("keydown", _)
              );
            }, [_, _]),
            (0, _.jsx)("div", {
              ref: _,
              ..._,
              popover: "manual",
              onClick: _,
              children: _,
            })
          );
        }
        function _(_) {
          let _ = (0, _.useCallback)(
            (_) => {
              _ == "left" && _.strNextID
                ? _.fnSetActive(_.strNextID)
                : _ == "right" &&
                  _.strPreviousID &&
                  _.fnSetActive(_.strPreviousID);
            },
            [_],
          );
          return (0, _._)(_);
        }
        function _(_) {
          let { appName: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(_, "none");
          return (0, _.jsxs)("div", {
            className: _.TheaterModeHeader,
            children: [
              (0, _.jsx)("div", {
                className: _.Center,
                children: (0, _._)("#GameHighlight_Theater_Header", _),
              }),
              (0, _.jsx)("div", {
                className: _.Right,
                children: (0, _.jsx)(_.tmm, {
                  onClick: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          let { items: _, activeItem: _ } = _,
            _ = _.findIndex((_) => _ && _.key == _),
            _ = "";
          return (
            _ >= 0 &&
              (_ = (0, _._)(
                "#GameHighlight_Theater_ItemCount",
                _ + 1,
                _.length,
              )),
            (0, _.jsx)("div", {
              className: _.TheaterModeFooter,
              children:
                _.length > 0 &&
                (0, _.jsx)("div", {
                  children: _,
                }),
            })
          );
        }
        function _() {
          let _ = _();
          return (0, _.useCallback)(
            (_) => {
              _.repeat ||
                _.strActiveType == "trailer" ||
                (_.code == "ArrowLeft"
                  ? (_.currentTarget.matches(":dir(rtl)")
                      ? _.strNextID && _.fnSetActive(_.strNextID)
                      : _.strPreviousID && _.fnSetActive(_.strPreviousID),
                    _.preventDefault())
                  : _.code == "ArrowRight" &&
                    (_.currentTarget.matches(":dir(rtl)")
                      ? _.strPreviousID && _.fnSetActive(_.strPreviousID)
                      : _.strNextID && _.fnSetActive(_.strNextID),
                    _.preventDefault()));
            },
            [_],
          );
        }
        function _() {
          let [_, _] = (0, _._)(),
            _ = (0, _.useRef)({
              element: void 0,
              bKeepControls: !1,
            }),
            _ = (0, _.useCallback)(
              (_) => {
                if (_.target == _.current.element) return;
                let _ = (0, _._)(_);
                _.current = {
                  element: _.target,
                  bKeepControls: _,
                };
              },
              [_],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                if (_.current.bKeepControls) {
                  _(!0, 0);
                  return;
                }
                _(!0, _);
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _.pointerType != "touch" && (_(_), _((0, _._)(_)));
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _.pointerType != "touch" && (_(_), _((0, _._)(_)));
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _.pointerType != "touch" &&
                  ((_.current = {
                    element: void 0,
                    bKeepControls: !1,
                  }),
                  _((0, _._)()));
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _((0, _._)(_));
              },
              [_],
            );
          return [
            _,
            {
              onPointerEnter: _,
              onPointerMove: _,
              onPointerLeave: _,
              onPointerDown: _,
            },
          ];
        }
        function _(_) {
          let { _: _, screenshot: _, focus: _ } = _,
            _ = _(_),
            _ = _(_),
            _ = _(_ || _),
            _ = (0, _._)(),
            _ = (0, _._)(_, "theater"),
            _ = !_?.strMode || _.strMode == "none",
            _ = (0, _._)(_);
          if (!_) return null;
          let _ = (0, _._)(
              _.ViewedItem,
              _ && _.Active,
              _.Screenshot,
              _ && _.PageEmbedded,
            ),
            _ = _.full,
            _ = _ ? _ : void 0;
          return (0, _.jsxs)("div", {
            ref: _,
            className: _,
            onClick: _,
            tabIndex: 0,
            children: [
              (0, _.jsx)("img", {
                src: _,
                alt: _.altText,
              }),
              (0, _.jsxs)("div", {
                className: _.Controls,
                children: [
                  _?.bSupportsTheater && (0, _.jsx)(_._, {}),
                  _?.bSupportsFullscreen && (0, _.jsx)(_._, {}),
                ],
              }),
            ],
          });
        }
        function _(_) {
          let { _: _, trailer: _, focus: _ } = _,
            _ = _(_),
            _ = _(_),
            [_, _] = (0, _._)(),
            _ = _(),
            _ = _(),
            _ = (0, _.useCallback)(() => _.fnSetActive(_.strNextID), [_]);
          if (!_) return null;
          let _ = (0, _._)(_.ViewedItem, _ && _.Active, _.Trailer);
          return (0, _.jsx)(_._, {
            drop: !(0, _._)(),
            children: (0, _.jsx)("div", {
              ref: _,
              className: _,
              children: (0, _.jsx)(_._, {
                dashManifests: _.dashManifests,
                hlsManifest: _.hlsManifest,
                screenshot: _.poster,
                altText: _.title,
                forcePause: !_ || !_ || !_,
                onPlaybackEnd: _,
                title: _.title,
                category: _.category,
                statsURL: _.statsURL,
                focus: _,
              }),
            }),
          });
        }
        function _(_) {
          let _ = (0, _.useRef)(!1);
          return _ && (_.current = !0), _.current;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appID: _, results: _, appName: _, tab: _ = _._ } = _,
            _ = (0, _._)();
          let _;
          _ == _._
            ? (_ = (0, _._)(
                "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
              ))
            : _ == _._
              ? (_ = (0, _._)(
                  "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                ))
              : _ == _._
                ? (_ = (0, _._)(
                    "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                  ))
                : (_ = _
                    ? (0, _._)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )
                    : (0, _._)(
                        "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
                      ));
          const _ = _.useId();
          return _
            ? (0, _.jsxs)("div", {
                className: _().BannerContainer,
                role: "group",
                "aria-labelledby": _,
                children: [
                  (0, _.jsx)("div", {
                    className: _().BannerHeader,
                    _: _,
                    children: _,
                  }),
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const {
              appID: _,
              results: _,
              appName: _,
              tab: _ = _._,
              className: _,
            } = _,
            _ = (0, _._)();
          let _, _;
          if (
            (_ == _._
              ? ((_ = (0, _.jsx)(_._, {
                  category: _.steamos_resolved_category,
                })),
                (_ = (0, _.jsx)(_, {
                  category: _.steamos_resolved_category,
                })))
              : _ == _._
                ? ((_ = (0, _.jsx)(_._, {
                    category: _.machine_resolved_category,
                  })),
                  (_ = (0, _.jsx)(_, {
                    category: _.machine_resolved_category,
                  })))
                : _ == _._
                  ? ((_ = (0, _.jsx)(_._, {
                      category: _.frame_resolved_category,
                    })),
                    (_ = (0, _.jsx)(_, {
                      category: _.frame_resolved_category,
                    })))
                  : ((_ = (0, _.jsx)(_._, {
                      category: _.resolved_category,
                    })),
                    (_ = (0, _.jsx)(_, {
                      category: _.resolved_category,
                    }))),
            !_)
          )
            return null;
          const _ = _?.steam_deck_blog_url && _ != _._;
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _ ? _().BannerContent : _().BannerContentDesktop,
              _,
            ),
            children: [
              (0, _.jsxs)("div", {
                children: [_, _],
              }),
              (0, _.jsx)(_, {
                results: _,
                learnMore: (0, _._)(
                  "#SteamDeckVerified_Store_CompatSection_LearnMore",
                ),
                appName: _ || "",
                eStartingTab: _,
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().Divider,
                }),
              _ &&
                (0, _.jsx)(_._, {
                  url: _.steam_deck_blog_url,
                  containerClass: _().DeveloperComments_Anchor,
                  bIncludeIcon: !0,
                }),
            ],
          });
        }
        function _(_) {
          const { category: _ } = _;
          return (0, _.jsx)("span", {
            className: _().CompatibilityDetailRatingDescription,
            children: (0, _._)((0, _._)(_)),
          });
        }
        function _(_) {
          const { category: _ } = _;
          return (0, _.jsx)("span", {
            className: _().CompatibilityDetailRatingDescription,
            children: (0, _._)((0, _._)(_)),
          });
        }
        function _(_) {
          const {
              results: _,
              learnMore: _,
              appName: _,
              eStartingTab: _ = _._,
            } = _,
            [_, _] = (0, _.useState)(!1);
          let _ = _.useCallback(
            (_) => {
              const _ = (0, _._)();
              _ && _.AddEvent(_._._), _(!0);
            },
            [_],
          );
          const _ = () => {
            _(!1);
          };
          let _ = {
            onOKButton: void 0,
            onOKActionDescription: null,
            onCancelActionDescription: _._.Localize("#Button_Close"),
            onCancelButton: () => _(!1),
          };
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_._, {
                className: _().LearnMore,
                onClick: _,
                children: _,
              }),
              (0, _.jsx)(_._, {
                active: _,
                onDismiss: _,
                modalClassName: "DeckVerifiedModalDialog",
                children: (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    results: _,
                    buttonProps: _,
                    appName: _,
                    eStartingTab: _,
                  }),
                }),
              }),
            ],
          });
        }
        const _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "0",
          _ = "-1",
          _ = "wishlistcategories";
        function _(_, _, _) {
          return [_, _, _, _];
        }
        function _(_, _, _, _) {
          return {
            queryKey: _(_, !_ || _ === "0" ? "" : _, _),
            queryFn: () => _(_, _, _, _),
            staleTime: 600 * 1e3,
          };
        }
        async function _(_, _, _, _) {
          if (!_ || (_ != _ && !_)) return [];
          let _ = [];
          if (_) {
            const _ = _._.Init(_._);
            _.Body().set_steamid(_),
              _.Body().set_share_token(_),
              (_ =
                (await _._.GetSharedWishlistCategories(_, _)).Body().toObject()
                  .categories ?? []);
          } else {
            const _ = _._.Init(_._);
            _ =
              (await _._.GetWishlistCategories(_, _)).Body().toObject()
                .categories ?? [];
          }
          return _(_);
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _, _));
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _.useCallback((_) => new Map(_.map((_) => [_._, _])), []);
          return (0, _._)({
            ..._(_, _, _, _),
            select: _,
          });
        }
        const _ = "wishlistappidcategories";
        function _(_, _) {
          return [_, _, _];
        }
        function _(_, _, _) {
          return {
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_appid(_);
              const _ = await _._.GetItemCategories(_, _);
              return _.BSuccess()
                ? _(_.Body().toObject().categories ?? [])
                : [];
            },
            staleTime: 600 * 1e3,
          };
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _, _));
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().set_appid(_.appid),
                _.Body().set_category_name(_.categoryName),
                _.Body().set_categoryid(_.categoryID);
              const _ = await _._.AddWishlistItemCategory(_, _);
              let _ = {
                eresult: _.GetEResult(),
              };
              return (
                _.BSuccess() &&
                  (_.category = {
                    _: _.Body().categoryid(),
                    name: _.Body().name(),
                    cItems: _.Body().item_count(),
                    bNotificationOptIn: !!_.Body().notification_opt_in(),
                  }),
                _
              );
            },
            onSuccess(_, _) {
              _.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", _],
                exact: !1,
              }),
                _.invalidateQueries({
                  queryKey: [_, _],
                  exact: !1,
                }),
                _.invalidateQueries({
                  queryKey: _(_, _.appid),
                });
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              return (
                _.Body().set_appid(_.appid),
                _.Body().set_categoryid(_.categoryID),
                (await _._.RemoveWishlistItemCategory(_, _)).GetEResult()
              );
            },
            onSuccess(_, _) {
              _.invalidateQueries({
                queryKey: ["WishlistSortedFiltered", _],
                exact: !1,
              }),
                _.invalidateQueries({
                  queryKey: [_, _],
                  exact: !1,
                }),
                _.invalidateQueries({
                  queryKey: _(_, _.appid),
                });
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                CWishlist_RenameWishlistCategory_Request,
              );
              return (
                _.Body().set_categoryid(_.categoryID),
                _.Body().set_name(_.name),
                {
                  eresult: (
                    await WishlistService.RenameWishlistCategory(_, _)
                  ).GetEResult(),
                }
              );
            },
            onSuccess() {
              _.invalidateQueries({
                queryKey: [_, _],
                exact: !1,
              }),
                _.invalidateQueries({
                  queryKey: [_, _],
                  exact: !1,
                });
            },
          });
        }
        const _ = 256;
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = {
                eresult: k_EResultOK,
                rgAppIDsUpdated: [],
                rgAppIDsFailed: [],
              };
              if (_.rgAppIDs.length === 0 || (!_.categoryID && !_.categoryName))
                return (_.eresult = k_EResultInvalidParam), _;
              let _ = _.categoryID;
              for (let _ = 0; _ < _.rgAppIDs.length; _ += _) {
                const _ = _.rgAppIDs.slice(_, _ + _),
                  _ = CProtoBufMsg.Init(
                    CWishlist_SetWishlistItemCategoryBulk_Request,
                  );
                for (const _ of _) _.Body().add_appids(_);
                _ && _ !== _
                  ? _.Body().set_categoryid(_)
                  : _.Body().set_category_name(_.categoryName),
                  _.Body().set_remove(!!_.bRemove);
                const _ = await WishlistService.SetWishlistItemCategoryBulk(
                  _,
                  _,
                );
                if (!_.BSuccess()) {
                  (_.eresult = _.GetEResult()),
                    _.rgAppIDsFailed.push(..._.rgAppIDs.slice(_));
                  break;
                }
                const _ = _.Body().toObject();
                _.rgAppIDsUpdated.push(...(_.appids_updated ?? [])),
                  _.rgAppIDsFailed.push(...(_.appids_failed ?? [])),
                  !_.category &&
                    _.category &&
                    ((_.category = _([_.category])[0]),
                    (_ = _ ?? _.category?._));
              }
              return _;
            },
            onSuccess(_) {
              _.rgAppIDsUpdated.length !== 0 &&
                (_.invalidateQueries({
                  queryKey: ["WishlistSortedFiltered", _],
                  exact: !1,
                }),
                _.invalidateQueries({
                  queryKey: [_, _],
                  exact: !1,
                }),
                _.invalidateQueries({
                  queryKey: [_, _],
                  exact: !1,
                }));
            },
          });
        }
        const _ = "wishlist_recent_categories";
        function _(_) {
          return {
            queryKey: [_],
            queryFn: async () => (await _.GetObject(_)) ?? [],
            staleTime: 3600 * 1e3,
          };
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)(_(_));
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = (await _.ensureQueryData(_(_))) ?? [],
                _ = Array.from(new Set([..._.rgCategoryIDs, _])).slice(0, 3);
              return await _.StoreObject(_, _), _;
            },
            onSuccess: async (_) => {
              _.setQueryData([_], _);
            },
          });
        }
        function _(_) {
          return (
            _.map((_) => ({
              _: _.categoryid,
              name: _.name,
              cItems: _.item_count ?? 0,
              bNotificationOptIn: !!_.notification_opt_in,
            })) ?? []
          ).sort((_, _) =>
            _.cItems !== _.cItems
              ? _.cItems - _.cItems
              : _.name.localeCompare(_.name),
          );
        }
        function _(_) {
          const { data: _ } = _(_);
          return _.useMemo(() => {
            let _ = [
              {
                _: _,
                name: (0, _._)("#Wishlist_Categories_Suggested_Birthday"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                _: _,
                name: (0, _._)("#Wishlist_Categories_Suggested_Recommended"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
              {
                _: _,
                name: (0, _._)("#Wishlist_Categories_Suggested_Discount"),
                cItems: 0,
                bNotificationOptIn: !1,
              },
            ];
            for (const _ of _ ?? [])
              _ = _.filter(
                (_) =>
                  _.name.toLocaleLowerCase() !== _.name.toLocaleLowerCase(),
              );
            return _;
          }, [_]);
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = _(_, _, void 0);
          return useMutation({
            mutationFn: async (_) => {
              const _ = await _(_, _);
              if (_ !== k_EResultOK)
                throw new Error(
                  `SetWishlistCategoryNotifications returned EResult ${_}`,
                );
            },
            onMutate: async (_) => {
              await _.cancelQueries({
                queryKey: _,
              }),
                _.setQueryData(_, (_) => {
                  if (!_) return _;
                  const _ = new Map(_.map((_) => [_._, _]));
                  return _.map(
                    (_) =>
                      _.get(_._) ?? {
                        ..._,
                      },
                  );
                });
            },
            onError: () =>
              _.invalidateQueries({
                queryKey: _,
              }),
          });
        }
        async function _(_, _) {
          if (_.length === 0) return k_EResultInvalidParam;
          const _ = CProtoBufMsg.Init(
            CWishlist_SetWishlistCategoryNotifications_Request,
          );
          for (const _ of _) {
            const _ =
              new CWishlist_SetWishlistCategoryNotifications_Request_CategorySettings();
            _.set_categoryid(_._),
              _.set_notification_opt_in(_.bNotificationOptIn),
              _.Body().add_categories(_);
          }
          return (
            await WishlistService.SetWishlistCategoryNotifications(_, _)
          ).GetEResult();
        }
        const _ = parseInt(_.wishlistCategoryMaxDisplayChars);
        var _ = ((_) => (
          (_[(_.k_ECategoryButtonAction_None = 0)] =
            "k_ECategoryButtonAction_None"),
          (_[(_.k_ECategoryButtonAction_Filter = 1)] =
            "k_ECategoryButtonAction_Filter"),
          (_[(_.k_ECategoryButtonAction_Add = 2)] =
            "k_ECategoryButtonAction_Add"),
          (_[(_.k_ECategoryButtonAction_Remove = 3)] =
            "k_ECategoryButtonAction_Remove"),
          (_[(_.k_ECategoryButtonAction_Select = 4)] =
            "k_ECategoryButtonAction_Select"),
          _
        ))(_ || {});
        function _(_) {
          const {
              rgCategories: _,
              header: _,
              onClick: _,
              eAction: _,
              bMultiline: _,
              bShowEmptyLabel: _,
              bShowAllButton: _,
              containerClassName: _,
              size: _,
              bShowCounts: _,
            } = _,
            _ = _.useRef(null),
            _ = _ !== 3 && _ !== 0;
          let _ = [],
            _ = !1;
          for (const _ of _) {
            _.bSelected && (_ = !0);
            const _ = _._ === _ ? _.name : _._,
              _ = (0, _.jsx)(
                _,
                {
                  category: _,
                  selected: _ && !!_.bSelected,
                  onClick: _ ? () => _(_.name, _._) : void 0,
                  eAction: _ ?? 0,
                  bShowCount: _,
                },
                _,
              );
            _.push(_);
          }
          const _ = (0, _._)("#Wishlist_Controls_Categories_All");
          return (
            _.useEffect(() => {
              _.current?.Node().BFocusWithin() &&
                _.current.Node().ForceMeasureFocusRing();
            }, [_]),
            (0, _.jsxs)(_._, {
              className: _()(_.CategoriesCtn, _),
              scrollIntoViewWhenChildFocused: !0,
              children: [
                _ !== null &&
                  (0, _.jsx)("span", {
                    className: _.CategoryListHeader,
                    children:
                      _ ?? (0, _._)("#Wishlist_Controls_Categories_Header"),
                  }),
                (0, _.jsxs)(_._, {
                  className: _()(
                    _.CategoryList,
                    _ && _.Multiline,
                    _ === "small" && _.Small,
                    _ === "default" && _.ForceDefaultSize,
                  ),
                  "flow-children": _ ? "grid" : "row",
                  focusableIfEmpty: _.length > 0,
                  navRef: _,
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        category: {
                          cItems: 0,
                          _: _,
                          name: _,
                          bNotificationOptIn: !1,
                        },
                        selected: !_,
                        onClick: () => _ && _(_, _),
                        onOKActionDescription: (0, _._)(
                          "#Wishlist_Gamepad_Filter_Clear_Category",
                        ),
                      }),
                    _,
                    !_.length &&
                      _ &&
                      (0, _.jsx)("div", {
                        className: _.CategoryListHeader,
                        children: (0, _._)("#Wishlist_Categories_None"),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const {
              category: _,
              selected: _,
              className: _,
              onOKActionDescription: _,
              onClick: _,
              eAction: _,
              bShowCount: _,
            } = _,
            _ = _ === 3,
            _ = _ === 1,
            _ = _.name.length >= _;
          let _ = _;
          _ && !_
            ? (_ = (0, _._)("#Wishlist_Gamepad_Filter_Category"))
            : _ === 2 && !_
              ? (_ = (0, _._)("#Wishlist_Gamepad_Add_Category"))
              : _ === 3 &&
                !_ &&
                (_ = (0, _._)("#Wishlist_Gamepad_Removecategory"));
          const _ = {
              onOKActionDescription: _,
              onOKButton: () => _ && _(),
              focusClassName: _.Focused,
            },
            _ = !!_;
          let _;
          return (
            _
              ? (_ = _.name)
              : _ && _
                ? (_ = (0, _._)("#Wishlist_Controls_Categories_Remove_Tooltip"))
                : _ &&
                  _ &&
                  (_ = (0, _._)(
                    "#Wishlist_Controls_Categories_Filter_Tooltip",
                  )),
            (0, _.jsx)(_._, {
              toolTipContent: _,
              usePointerEvents: !0,
              children: (0, _.jsxs)(_._, {
                className: _()(
                  _.CategoryBtn,
                  _ && _.Removable,
                  _ && _.Selected,
                  !_ && _.NotActionable,
                  _,
                ),
                onClick: _,
                ..._,
                children: [
                  (0, _.jsx)("span", {
                    className: _.CategoryName,
                    children: _.name,
                  }),
                  _ &&
                    _.cItems > 0 &&
                    (0, _.jsxs)("span", {
                      children: ["(", _.cItems, ")"],
                    }),
                  _ && (0, _.jsx)(_.i6V, {}),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { categoryCount: _, onClick: _, bSimulateHover: _ } = _;
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _._)("#Wishlist_Controls_Categories_Manage"),
            usePointerEvents: !0,
            children: (0, _.jsx)(_._, {
              className: _()(
                _.CategoryBtn,
                _.CategorySettingsBtn,
                _ && _.Focused,
              ),
              onClick: _,
              children: _ > 0 ? (0, _.jsx)(_.vmx, {}) : (0, _.jsx)(_.FWt, {}),
            }),
          });
        }
        const _ = 16;
        function _(_) {
          const {
              appid: _,
              steamid: _,
              onClose: _,
              filteredCategoryIDs: _,
              onAdvanced: _,
            } = _,
            [_, _] = _.useState([]),
            _ = _(),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ =
              _ && _.name && _.visible
                ? (0, _._)("#Wishlist_Controls_Categories_Manageitem", _?.name)
                : (0, _._)("#Wishlist_Controls_Categories_Manage"),
            { data: _ } = _(_),
            _ = !!_ && !!_ && _.length > 0,
            _ = _.useCallback(() => {
              _.mutate({
                rgCategoryIDs: _.reverse(),
              }),
                _();
            }, [_, _, _]),
            _ = (_) => {
              _ && _.has(_) && _();
            };
          return (0, _.jsx)(_._, {
            onClose: _,
            strTitle: _,
            navID: "AddWishlistCategoryDialog",
            className: _.DialogContent,
            children: (0, _.jsxs)(_._, {
              "flow-children": "column",
              children: [
                (0, _.jsx)(_, {
                  appid: _,
                  steamid: _,
                  onCategoryAdd: (_) => _([..._, _].slice(-3)),
                  onCategoryRemove: _,
                }),
                (0, _.jsxs)(_._, {
                  className: _.Buttons,
                  children: [
                    _ &&
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)(
                          "#Wishlist_Categories_Dialog_Advanced",
                        ),
                      }),
                    (0, _.jsx)(_._, {
                      onClick: _,
                      children: _._.Localize("#Button_Done"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_, _, _, _) {
          const { data: _ } = _(_, _),
            { data: _ } = _(),
            _ = (_, _) => {
              const _ = new Set(_);
              return [
                ..._.map((_) => _.find((_) => _._ === _)).filter((_) => !!_),
                ..._.filter((_) => !_.has(_._)),
              ];
            };
          return _.useMemo(() => {
            if (!_) return [];
            const _ = new Set(_?.map((_) => _._) ?? []),
              _ = _.filter((_) => !_.has(_._));
            if (!_ || _.length === 0)
              return _(
                _.filter((_) => _.cItems > 0),
                _ ?? [],
              );
            const _ = _.toLocaleLowerCase();
            let _ = !1,
              _ = _.filter((_) => {
                let _ = _.name.toLocaleLowerCase();
                return _ || (_ = _ === _), _.indexOf(_) > -1;
              });
            return (
              (_ = _(_, [])),
              _ ||
                _.unshift({
                  _: _,
                  name: _,
                  cItems: 0,
                  bNotificationOptIn: !1,
                }),
              _
            );
          }, [_, _, _, _]);
        }
        function _(_) {
          const {
              appid: _,
              steamid: _,
              onCategoryAdd: _,
              onCategoryRemove: _,
            } = _,
            [_, _] = _.useState(""),
            [_, _] = _.useState(void 0),
            _ = _(_);
          _.useEffect(() => {
            !_ && _.data && _(_.data);
          }, [_.data, _]);
          const _ = _(_),
            _ = async (_, _) => {
              if (!_ || _ === 0) return;
              const _ = await _.mutateAsync({
                appid: _,
                categoryName: _,
                categoryID: _ ?? _,
              });
              _.eresult === _._ &&
                _.category?._ &&
                (_(_.category._),
                _ &&
                  !_.some((_) => _._ === _.category._) &&
                  _((_) => [..._, _.category]));
            },
            _ = _(_),
            _ = (_) => {
              _ !== 0 &&
                (_.mutate({
                  appid: _,
                  categoryID: _,
                }),
                _(_));
            },
            _ = (_) => {
              _.stopPropagation(),
                _.preventDefault(),
                !(!_ || _.length === 0) && (_(""), _(_));
            },
            { data: _ } = _(_, _),
            _ = _(_),
            _ = _.length > 0,
            _ = _(_ ?? [], _, _, _),
            _ = (0, _._)();
          return (0, _.jsxs)(_._, {
            className: _.CategorySelectorCtn,
            "flow-children": "column",
            children: [
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("div", {
                    className: _.ListHeader,
                    children: (0, _._)(
                      "#Wishlist_Controls_Categories_Header_Current",
                    ),
                  }),
                  (0, _.jsx)(_, {
                    rgCategories: _ ?? [],
                    header: null,
                    eAction: _.k_ECategoryButtonAction_Remove,
                    onClick: (_, _) => _(_),
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: _.DialogCategoryCtn,
                  }),
                  !!_ && _.length >= _ && (0, _.jsx)(_, {}),
                ],
              }),
              (0, _.jsxs)("form", {
                className: _.SearchForm,
                onSubmit: _,
                children: [
                  (0, _.jsx)(_._, {
                    autoFocus: !0,
                    value: _,
                    className: _.SearchInput,
                    type: "search",
                    placeholder: (0, _._)("#Wishlist_Categories_Dialog_Search"),
                    onChange: (_) => _(_.target.value),
                    onOKActionDescription:
                      _.length > 0
                        ? (0, _._)("#Wishlist_Categories_Dialog_Add")
                        : null,
                    maxLength: 500,
                  }),
                  !_ &&
                    (0, _.jsx)("div", {
                      className: _()(
                        _.AddCategoryBtnCtn,
                        _.length > 0 && _.Visible,
                      ),
                      children: (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)("#Wishlist_Categories_Dialog_Add"),
                      }),
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("div", {
                    className: _.ListHeader,
                    children: (0, _._)(
                      "#Wishlist_Controls_Categories_Header_Other",
                    ),
                  }),
                  (0, _.jsx)(_, {
                    rgCategories: _,
                    onClick: _,
                    header: null,
                    bMultiline: !0,
                    bShowEmptyLabel: !0,
                    containerClassName: _.DialogCategoryCtn,
                    eAction: _.k_ECategoryButtonAction_Add,
                  }),
                ],
              }),
              _ &&
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsx)("div", {
                      className: _.ListHeader,
                      children: (0, _._)(
                        "#Wishlist_Controls_Categories_Header_Suggested",
                      ),
                    }),
                    (0, _.jsx)(_, {
                      rgCategories: _,
                      onClick: _,
                      header: null,
                      bMultiline: !0,
                      containerClassName: _()(_.DialogCategoryCtn, _.Suggested),
                    }),
                  ],
                }),
            ],
          });
        }
        function _() {
          return (0, _.jsx)("div", {
            className: _.MaxCategoriesMessage,
            children: (0, _._)("#Wishlist_Categories_Max_Per_App_Reached", _),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          if (!_.current) return;
          const _ = _.current.closest(".queue_menu_flyout");
          _ &&
            (_
              ? _.classList.add("force_expand")
              : _.classList.remove("force_expand"));
        }
        function _(_) {
          const { appid: _ } = _,
            _ = (0, _._)(),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(!1),
            _ = _.useRef(null),
            [_, _] = (0, _._)(),
            { data: _ } = _(_),
            { data: _ } = _(_),
            _ = _(_),
            { data: _ } = _(),
            { data: _ } = _(_, _),
            _ = _(_),
            _ = _(_),
            _ = _(),
            _ = async (_, _) => {
              if (!_) return;
              const _ = _ ? _.find((_) => _._ === _) : void 0;
              if (_?.bSelected)
                _.mutate({
                  appid: _,
                  categoryID: _._,
                }),
                  _(
                    _.map((_) =>
                      _._ === _
                        ? {
                            ..._,
                            bSelected: !1,
                            cItems: Math.max(0, _.cItems - 1),
                          }
                        : _,
                    ),
                  );
              else if (_) {
                const _ = await _.mutateAsync({
                  appid: _,
                  categoryName: _,
                  categoryID: _ ?? _,
                });
                if (_.eresult === _._ && _.category?._) {
                  const _ = {
                    ..._.category,
                    bSelected: !0,
                  };
                  _((_) => _?.map((_) => (_.name === _ ? _ : _)) ?? [_]),
                    _.mutate({
                      rgCategoryIDs: [_.category._],
                    });
                }
              }
            },
            _ = (_) => {
              _.stopPropagation(), _.preventDefault(), _(_, !0), _(!0);
            },
            _ = () => {
              _(!1), _(_, !1), _(void 0);
            },
            _ = 6;
          if (
            (_.useEffect(() => {
              if (_ || !_ || !_ || !_ || !_ || !_) return;
              let _ = new Set(_.map((_) => _._) ?? []),
                _ = _.map((_) => ({
                  ..._,
                  bSelected: !0,
                }));
              const _ = _.map((_) => _.get(_)).filter((_) => !!_);
              for (const _ of [..._, ..._]) {
                if (_.length >= _) break;
                _.has(_._) || (_.push(_), _.add(_._));
              }
              _.length < _ &&
                (_ = [..._, ...(_?.slice(0, _ - _.length) ?? [])]),
                _(_);
            }, [_, _, _, _, _, _]),
            !_ || _.length === 0)
          )
            return null;
          const _ = _.filter((_) => !_.bSelected),
            _ = _.filter((_) => _.bSelected);
          return (0, _.jsxs)("div", {
            className: _.CategoriesMenuOption,
            ref: _,
            children: [
              (0, _.jsxs)(_._, {
                className: _.HeaderCtn,
                ..._,
                onClick: _,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Label,
                    children: (0, _._)("#Wishlist_QuickAdd_Header"),
                  }),
                  (0, _.jsx)(_, {
                    categoryCount: _?.length ?? 0,
                    bSimulateHover: _,
                    onClick: () => {},
                  }),
                ],
              }),
              _.length > 0 &&
                (0, _.jsx)(_, {
                  rgCategories: _,
                  header: null,
                  onClick: _,
                  bMultiline: !0,
                }),
              _.length > 0 &&
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#Wishlist_QuickAdd_RecentAndSuggested",
                      ),
                    }),
                    (0, _.jsx)(_, {
                      rgCategories: _,
                      header: null,
                      onClick: _,
                      bMultiline: !0,
                    }),
                  ],
                }),
              _ &&
                (0, _.jsx)(_, {
                  appid: _,
                  steamid: _,
                  onClose: _,
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _.packageid
            ? {
                packageid: _.packageid,
              }
            : {
                bundleid: _.bundleid,
              };
        }
        function _(_) {
          return (0, _._)(_(_));
        }
        var _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (!_) return new Set();
              const _ = await _(_, _);
              return new Set(_);
            },
            placeholderData: new Set(),
            staleTime: 600 * 1e3,
          };
        }
        function _(_) {
          return ["AccountActiveLicenses", _ ?? 0];
        }
        async function _(_, _) {
          throw new _._(_._, "Not implemented");
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return _.useCallback(
            (_) => {
              _.setQueryData(_(_), () => new Set(_));
            },
            [_, _],
          );
        }
        function _(_, _) {
          return !_?.appid ||
            _.type === _._._ ||
            !_ ||
            !_.included_appids?.length ||
            !_.included_types?.length
            ? !1
            : _.included_appids.length > 1 &&
                !_.included_appids.includes(_.appid) &&
                _.included_types.every((_) => _ === _._._);
        }
        function _(_) {
          const { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.included_items?.included_packages;
          return _.useMemo(() => {
            const _ = new Set();
            for (const _ of _ || []) _._ && _(_, _) && _.add(_._);
            return _;
          }, [_, _]);
        }
        function _(_) {
          const { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _(_),
            _ = _?.purchase_options;
          return _.useMemo(() => {
            if (_)
              return _.filter((_) => _.packageid && _.has(_.packageid)).sort(
                (_, _) =>
                  Number(_.final_price_in_cents || 0) -
                  Number(_.final_price_in_cents || 0),
              );
          }, [_, _]);
        }
        var _ = __webpack_require__("chunkid");
        const _ = _.createContext({
            appid: _._,
            nOptions: 0,
          }),
          _ = _.createContext({
            ShowConfirmDialog: () => {},
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            active: _,
            onOK: _,
            closeModal: _,
            bCloseOnOK: _,
            children: _,
            ..._
          } = _;
          if (!_) return null;
          const _ =
            (typeof _.strTitle == "string" && _.strTitle) ||
            (0, _._)("#Steam_Platform");
          return (0, _.jsx)(_._, {
            onlyPopoutIfNeeded: !0,
            popupHeight: 340,
            popupWidth: 640,
            strTitle: _,
            children: (0, _.jsx)(_._, {
              ..._,
              onCancel: _,
              onOK: () => {
                _(), _ && _();
              },
              children: _,
            }),
          });
        }
        function _(_) {
          const { bCloseOnOK: _ = !0, children: _, ..._ } = _,
            [_, _, _] = (0, _._)();
          return [
            (0, _.jsx)(_, {
              active: _,
              bCloseOnOK: _,
              closeModal: _,
              ..._,
              children: _,
            }),
            _,
            _,
          ];
        }
        function _(_) {
          const [_, _] = _.useState(""),
            [_, _] = _.useState(""),
            [_, _] = _({
              bCloseOnOK: !0,
              bAlertDialog: !0,
              onOK: () => {},
              strTitle: _,
              strDescription: _,
            }),
            _ = _.useCallback(
              (_, _) => {
                _(_), _(_), _();
              },
              [_],
            ),
            _ = _.useMemo(
              () => ({
                ShowConfirmDialog: _,
              }),
              [_],
            );
          return (0, _.jsxs)(_.Provider, {
            value: _,
            children: [_.children, _],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = (_) =>
            (0, _.jsx)(_._, {
              icon: !0,
              ..._,
            }),
          _ = (_) =>
            jsx(ButtonLinkBase, {
              icon: !0,
              ..._,
            });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { color: _, onClick: _, strIconTitle: _, children: _ } = _,
            _ = (_) => {
              _.stopPropagation(), _ && _(_);
            };
          return _
            ? (0, _.jsx)(_, {
                color: _,
                onClick: _,
                title: _,
                width: "36px",
                minWidth: "36px",
                children: _,
              })
            : (0, _.jsx)(_._, {
                color: _,
                onClick: _,
                children: _,
              });
        }
        function _(_) {
          const {
              onActivate: _,
              onOKActionDescription: _,
              onSecondaryButton: _,
              onSecondaryActionDescription: _,
              price: _,
              okIcon: _,
            } = _,
            _ = !1;
          return _ || _ || (_ && _)
            ? (0, _.jsxs)(_._, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "stretch",
                justify: "end",
                gap: "2",
                children: [
                  _,
                  _ &&
                    _ &&
                    (0, _.jsx)(_, {
                      onClick: _,
                      children: (0, _._)(_),
                    }),
                  _ &&
                    (_
                      ? (0, _.jsx)(_, {
                          color: "storegreen",
                          onClick: _,
                          strIconTitle: _,
                          children: _,
                        })
                      : (0, _.jsx)(_, {
                          color: "storegreen",
                          onClick: _,
                          children: _,
                        })),
                ],
              })
            : null;
        }
        function _(_) {
          const { option: _ } = _,
            _ = _.type == "item" && !!_.data.is_edition,
            _ = _.type == "item" && _.data.package_group;
          return jsx(Fragment, {
            children: !1,
          });
        }
        function _(_) {
          const {
              className: _,
              option: _,
              color: _ = "blue",
              allowSingleLine: _,
              allowTwoColumn: _,
              price: _,
              okIcon: _,
              children: _,
              ..._
            } = _,
            { nOptions: _ } = _.useContext(_),
            _ = _ == 1;
          return (0, _.jsx)(_._, {
            rootClassName: _().FocusRing,
            children: (0, _.jsxs)(_._, {
              className: (0, _._)(
                _().PurchaseOption,
                _ == "green" && _().Green,
                _ && _().AllowSingleLine,
                _ && _().AllowTwoColumn,
                _ && _().OnlyChild,
              ),
              focusable: !0,
              ..._,
              children: [
                _ &&
                  _ &&
                  (0, _.jsx)("div", {
                    className: _().LeftColumn,
                    children: _,
                  }),
                !(_ && _) && _,
                (0, _.jsx)(_, {
                  ..._,
                  price: _,
                  okIcon: _,
                }),
                !1,
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)();
          return _.useCallback(() => {
            _.packageid
              ? window.AddItemToCart(_.packageid, void 0, _)
              : _.bundleid && window.AddItemToCart(void 0, _.bundleid, _);
          }, [_, _.packageid, _.bundleid]);
        }
        function _(_, _) {
          return _.useCallback(() => {
            (0, _._)(_, _);
          }, [_, _]);
        }
        function _(_, _) {
          return _.useCallback(() => {
            (0, _._)(_, _);
          }, [_, _]);
        }
        function _(_) {
          const { data: _ } = (0, _._)(_),
            { ShowConfirmDialog: _ } = _.useContext(_),
            { data: _ = new Set() } = _(),
            _ = _(),
            _ = (0, _._)(_);
          return _.useCallback(() => {
            _.mutateAsync().then(([_, _]) => {
              let _,
                _ = _?.name || "";
              if (_ != _._)
                _ = _.Localize(
                  "#AppPage_PurchaseOption_AddToLibraryError",
                  _,
                  _,
                );
              else {
                _ = _.Localize("#AppPage_PurchaseOption_AddedToLibrary", _);
                for (let _ of _.packageids_added || []) _.add(_);
                _(Array.from(_));
              }
              _(_, _);
            });
          }, [_, _, _?.name, _, _]);
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, bPrepurchase: _ } = _,
            { data: _ } = (0, _._)(_);
          return _
            ? _
              ? _.Localize("#AppPage_Prepurchase", _.name)
              : _.name
            : null;
        }
        function _(_) {
          const { _: _, title: _, bPrepurchase: _ = !1, children: _ } = _;
          return (0, _.jsxs)(_._, {
            size: "4",
            weight: "heavy",
            children: [
              _ ||
                (0, _.jsx)(_, {
                  _: _,
                  bPrepurchase: _,
                }),
              _,
            ],
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)(_._, {
            direction: "column",
            flexGrow: "1",
            gap: "2",
            overflow: "hidden",
            children: _,
          });
        }
        function _(_) {
          const { option: _ } = _,
            _ = {
              appid: _.appid,
            },
            { data: _ } = (0, _._)(_),
            _ = _(_),
            _ = (0, _._)(),
            _ = _.bStandalone,
            _ = _.data?.has(_.appid),
            _ = _(_.appid, _?.name ?? ""),
            _ = (0, _._)(_),
            _ = _.useCallback(() => {
              _ && (window.location.href = _);
            }, [_]);
          return _
            ? (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)(_, {
                  color: "green",
                  allowSingleLine: !_.label,
                  allowTwoColumn: !!_.label,
                  option: _,
                  onActivate: _,
                  onOKActionDescription: _.Localize(
                    "#AppPage_PurchaseOption_Download",
                  ),
                  onSecondaryButton: _ ? _ : void 0,
                  onSecondaryActionDescription: _
                    ? _.Localize("#AppPage_PurchaseOption_MoreInfo")
                    : void 0,
                  onOptionsButton: _ ? void 0 : _,
                  onOptionsActionDescription: _
                    ? void 0
                    : _.Localize("#AppPage_PurchaseOption_AddToLibrary"),
                  children: [
                    (0, _.jsx)(_, {
                      title: _.Localize(
                        "#AppPage_PurchaseOption_DownloadDemo",
                        _.name,
                      ),
                    }),
                    (0, _.jsx)(_, {
                      children: (0, _.jsx)(_._, {
                        children: _.label,
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { option: _ } = _,
            _ = _.useContext(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            _ = _(_.appid, _?.name ?? ""),
            _ = (0, _._)(),
            _ =
              _ &&
              _.free_weekend &&
              (_.free_weekend.start_time || 0) <= _ &&
              (_.free_weekend.end_time || 0) > _;
          return _
            ? (0, _.jsxs)(_, {
                option: _,
                color: "green",
                allowSingleLine: !0,
                onActivate: _,
                onOKActionDescription: _.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, _.jsx)(_, {
                    title: _.Localize("#AppPage_PurchaseOption_Play", _.name),
                  }),
                  (0, _.jsxs)(_, {
                    children: [
                      !_ &&
                        (0, _.jsx)(_._, {
                          children: _.Localize(
                            _.type == _._._
                              ? "#AppPage_PurchaseOption_FreeDemo"
                              : "#AppPage_PurchaseOption_FreeToPlay",
                          ),
                        }),
                      _ &&
                        (0, _.jsx)(_._, {
                          children: _.Localize(
                            "#AppPage_PurchaseOption_FreeWeekend",
                            (0, _._)(_.free_weekend.end_time, {
                              weekday: void 0,
                              year: void 0,
                              hour: "numeric",
                              minute: "numeric",
                            }),
                          ),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { text: _, onURLDetected: _ } = _,
            _ = _.useCallback(
              (_) => {
                let _ = (0, _._)(_.args) ?? (0, _._)(_.args, "href");
                return (0, _._)(_) && (_ = (0, _._)(_)), _ && _(_), (0, _._)(_);
              },
              [_],
            );
          return _.useMemo(() => {
            const _ = (_) => new _._(new _._()),
              _ = {
                ..._._,
                ..._._,
                ..._._,
                url: {
                  Constructor: _,
                },
              };
            return new _._(_, _, _._.LANGUAGE);
          }, [_]).ParseBBCode(_, void 0);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { option: _ } = _,
            _ = _(_),
            _ = _.packageid
              ? {
                  packageid: _.packageid,
                }
              : {
                  bundleid: _.bundleid,
                };
          return (0, _.jsxs)(_._, {
            className: _().MenuItem,
            onSelected: _,
            children: [
              (0, _.jsx)("div", {
                className: _().Name,
                children: _.purchase_option_name,
              }),
              (0, _.jsx)("div", {
                className: _().Price,
                children: (0, _.jsx)(_._, {
                  _: _,
                  purchaseOption: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { option: _ } = _;
          return (0, _.jsx)(_._, {
            label: _.data.package_group.dropdown_title,
            children: _.data.items.map((_) =>
              (0, _.jsx)(
                _,
                {
                  option: _,
                },
                _.packageid ?? _.bundleid,
              ),
            ),
          });
        }
        function _(_) {
          if (_.data.package_group.name == "subscriptions") return !0;
          for (let _ of _.data.items)
            if (!_.recurrence_info?.packageid) return !1;
          return !0;
        }
        function _(_) {
          const { option: _ } = _,
            { appid: _ } = _.useContext(_),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _.data.package_group,
            [_, _] = _.useState(""),
            _ = (0, _._)(_),
            _ = _.useCallback(() => {
              _ && (window.location.href = _);
            }, [_, _]),
            _ = _.useCallback(
              (_) => {
                (0, _._)(
                  (0, _.jsx)(_, {
                    option: _,
                  }),
                  _,
                );
              },
              [_],
            );
          return (0, _.jsxs)(_, {
            option: _,
            allowTwoColumn: !0,
            onActivate: _,
            onSecondaryButton: _ ? _ : void 0,
            onSecondaryActionDescription: _
              ? _.Localize("#AppPage_PurchaseOption_MoreInfo")
              : void 0,
            children: [
              (0, _.jsx)(_, {
                title:
                  _.dropdown_title ||
                  _.Localize("#AppPage_Dropdown_DefaultTitle", _?.name),
              }),
              (0, _.jsxs)(_, {
                children: [
                  _.dropdown_description_bbcode &&
                    (0, _.jsx)(_._, {
                      size: "2",
                      children: (0, _.jsx)(_, {
                        text: _.dropdown_description_bbcode,
                        onURLDetected: _,
                      }),
                    }),
                  !_.dropdown_description_bbcode &&
                    _(_) &&
                    (0, _.jsx)(_._, {
                      size: "2",
                      children: _.Localize(
                        "#AppPage_Dropdown_DefaultDescription_Subscription",
                      ),
                    }),
                ],
              }),
              (0, _.jsx)(_._, {
                direction: "row",
                flexGrow: "0",
                flexShrink: "0",
                align: "end",
                justify: "end",
                gap: "2",
                children: (0, _.jsx)(_._, {
                  color: "greyneutral",
                  variant: "dark",
                  children: _.Localize("#AppPage_PurchaseOption_ViewOptions"),
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            });
          if (!_ || !_) return null;
          const _ = (0, _._)(_, "community_icon");
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !1,
              (0, _.jsx)(_._, {
                children: (0, _._)(
                  _.Localize(
                    "#AppPage_PurchaseOption_IncludedWithMasterSub",
                    _.name,
                  ),
                  (0, _.jsx)("b", {}),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { option: _, appidMasterSub: _ } = _,
            _ = _.useContext(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            _ = _(_.appid, _?.name ?? "");
          return _
            ? (0, _.jsxs)(_, {
                option: _,
                color: "green",
                onActivate: _,
                onOKActionDescription: _.Localize(
                  "#AppPage_PurchaseOption_PlayNow",
                ),
                children: [
                  (0, _.jsx)(_, {
                    title: _.Localize("#AppPage_PurchaseOption_Play", _.name),
                  }),
                  (0, _.jsxs)(_, {
                    children: [
                      !_ &&
                        (0, _.jsx)(_._, {
                          children: _.Localize(
                            "#AppPage_PurchaseOption_Play_Description",
                            _.name,
                          ),
                        }),
                      !!_ &&
                        (0, _.jsx)(_, {
                          appid: _,
                        }),
                    ],
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { option: _, appidPlaytest: _, bIsOpen: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(_);
          if (!_ || !_ || !_) return null;
          const _ = _?.[0]?.status || _._._;
          console.log(_, _);
          let _, _, _;
          switch (_) {
            case _._._:
              (_ = "#AppPage_PurchaseOption_JoinPlaytest"),
                _
                  ? (_.steam_release_date || _.TQt) < (0, _._)()
                    ? (_ = "#AppPage_PurchaseOption_Playtest_Open")
                    : (_ = "#AppPage_PurchaseOption_Playtest_Open_Unreleased")
                  : (_ = "#AppPage_PurchaseOption_JoinPlaytest_Description");
              break;
            case _._._:
              (_ = "#AppPage_PurchaseOption_JoinPlaytest"),
                (_ = "#AppPage_PurchaseOption_JoinPlaytest_InvitePending");
              break;
            case _._._:
              (_ = "#AppPage_PurchaseOption_JoinPlaytest"),
                (_ = "#AppPage_PurchaseOption_JoinPlaytest_InvitedByFriend");
              break;
            case _._._:
              (_.steam_release_date || _.TQt) < (0, _._)()
                ? ((_ = "#AppPage_PurchaseOption_Playtest_Accepted_Title"),
                  (_ = "#AppPage_PurchaseOption_Playtest_Accepted"))
                : (_.is_preload,
                  (_ =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable_Title"),
                  (_ =
                    "#AppPage_PurchaseOption_Playtest_Accepted_Unavailable"));
              break;
            default:
              (0, _._)(!1, `Unknown playtest status ${_}`);
          }
          return (
            _ && _._.logged_in,
            _ && _
              ? (0, _.jsxs)(_, {
                  option: _,
                  onActivate: _,
                  children: [
                    (0, _.jsx)(_, {
                      title: _.Localize(_, _.name),
                    }),
                    (0, _.jsx)(_, {
                      children: (0, _.jsx)(_._, {
                        children: _.Localize(_),
                      }),
                    }),
                  ],
                })
              : null
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { option: _ } = _,
            _ = {
              appid: _.appid,
            },
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            _ = _.useCallback(() => {
              _ && (window.location.href = _);
            }, [_]);
          return _
            ? (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)(_, {
                  option: _,
                  onActivate: _,
                  onOKActionDescription: _.Localize(
                    "#AppPage_PurchaseOption_MoreInfo",
                  ),
                  children: [
                    (0, _.jsx)(_, {
                      title: _.title,
                    }),
                    (0, _.jsx)(_, {
                      children: (0, _.jsx)(_._, {
                        size: "2",
                        children: _.description,
                      }),
                    }),
                  ],
                }),
              })
            : null;
        }
        function _(_) {
          const { discount: _ } = _;
          (0, _._)({
            msInterval: 1e3,
          });
          const _ = (0, _._)();
          if (_.discount_end_date <= _) return null;
          const _ = Math.max(_.discount_end_date - _, 0),
            _ = _.discount_description,
            _ = _.Localize(_, (0, _._)(_));
          return _ == _
            ? null
            : (0, _.jsx)(_._, {
                contrast: "body",
                size: "2",
                children: _,
              });
        }
        function _(_) {
          const { option: _ } = _;
          return !_ || !_.discount_pct || _.hide_discount_pct_for_compliance
            ? null
            : _._.country_code == "PL"
              ? (0, _.jsx)(_._, {
                  size: "2",
                  children: _.Localize("#AppPage_Discount_Last30"),
                })
              : null;
        }
        function _(_) {
          const { option: _, discount: _ } = _,
            _ = _.useContext(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            { data: _ } = (0, _._)({
              appid: _.master_sub_appid || _._,
            });
          if (!_ || !_ || _.discount_pct <= 0) return null;
          const _ = _.discount_description,
            _ = _.Localize(_, "", _.discount_pct || 0, _.name, _.name);
          return _ == _
            ? null
            : (0, _.jsx)(_._, {
                contrast: "body",
                size: "2",
                children: _,
              });
        }
        function _(_) {
          const { option: _ } = _;
          if (!_) return null;
          if (_.is_free_to_keep && _.free_to_keep_ends)
            return (0, _.jsx)(_._, {
              contrast: "body",
              size: "2",
              children: _.Localize(
                "#AppPage_PurchaseOption_FreeToKeepDescription",
                (0, _._)(_.free_to_keep_ends, {
                  weekday: void 0,
                  year: void 0,
                  hour: "numeric",
                  minute: "numeric",
                }),
              ),
            });
          if (!_?.active_discounts?.length) return null;
          const _ = (0, _._)(),
            _ = _.active_discounts.reduce((_, _) =>
              _.discount_end_date != _.TQt &&
              (!_ ||
                (_.discount_end_date > _ &&
                  _.discount_end_date < _.discount_end_date))
                ? _
                : _,
            );
          let _ = "";
          if (_.discount_end_date == _.TQt)
            _ = (0, _.jsx)(_, {
              option: _,
              discount: _,
            });
          else if (
            _.discount_end_date != _.TQt &&
            _.discount_end_date - _ > 2880 * 60
          ) {
            const _ = _.discount_description + "_date";
            (_ = _.Localize(
              _,
              (0, _._)(_.discount_end_date, {
                weekday: void 0,
                year: void 0,
              }),
            )),
              _ == _ && (_ = null);
          } else
            return (0, _.jsx)(_, {
              discount: _,
            });
          return _
            ? (0, _.jsx)(_._, {
                contrast: "body",
                size: "2",
                children: _,
              })
            : null;
        }
        function _(_) {
          const { option: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                option: _,
              }),
              (0, _.jsx)(_, {
                option: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { _: _, bSelfPurchaseOption: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = _ && _.item_type == _._._ ? _.self_purchase_option : _;
          return !_?.hide_discount_pct_for_compliance || _.discount_pct <= 0
            ? null
            : (0, _.jsx)("table", {
                className: _().SaleTechPriceGrid,
                children: (0, _.jsxs)("tbody", {
                  children: [
                    (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("th", {
                          children: _._.Localize("#PriceGrid_NormalPrice"),
                        }),
                        (0, _.jsx)("th", {
                          children: _._.Localize("#PriceGrid_RecentPrice"),
                        }),
                        (0, _.jsx)("th", {
                          children: _._.Localize("#PriceGrid_CurrentPrice"),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("tr", {
                      children: [
                        (0, _.jsx)("td", {
                          className: _().OriginalPrice,
                          children: _.formatted_original_price,
                        }),
                        (0, _.jsx)("td", {
                          className: _().LowestRecentPrice,
                          children: _.formatted_lowest_recent_price,
                        }),
                        (0, _.jsx)("td", {
                          className: _().FinalPrice,
                          children: _.formatted_final_price,
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)();
          if (!_ || !_ || !_ || !_) return null;
          const _ = "bundleid" in _ && !_.must_purchase_as_set,
            _ = _?.is_coming_soon && !!_?.advance_access_date;
          let _ = null,
            _,
            _;
          if (_) {
            const _ = _.included_appids?.filter((_) => !_.has(_)) || [];
            _.length > 0 &&
              _.length < (_.included_appids?.length || 0) &&
              ((_ = "slate-12"),
              (_ = "blue-8"),
              (_ = _.Localize(
                "#AppPage_PurchaseOption_CompleteYourCollection",
              )));
          } else if (_) {
            const _ = (0, _._)(_.advance_access_date, {
              weekday: void 0,
              month: "short",
              day: "numeric",
              year: void 0,
            });
            (_ = "slate-12"),
              (_ = "blue-8"),
              (_ = _.Localize("#AppPage_AdvanceAccess_Banner", _));
          }
          return _
            ? (0, _.jsx)(_._, {
                className: _().PurchaseOptionBanner,
                paddingX: "1",
                background: _,
                children: (0, _.jsx)(_._, {
                  size: "1",
                  color: _,
                  contrast: "title",
                  whiteSpace: "nowrap",
                  truncate: !0,
                  children: _,
                }),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return _._.STORE_ITEM_BASE_URL + _.replace("${FILENAME}", _);
        }
        function _(_) {
          const { closeModal: _ } = _,
            _ = _.useContext(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            { data: _ } = (0, _._)({
              appid: _.appid,
            });
          return (0, _.jsxs)(_._, {
            direction: "column",
            height: "90vh",
            overflow: "hidden",
            align: "center",
            gap: "2",
            children: [
              (0, _.jsx)(_._, {
                aspectRatio: "748 / 896",
                flexGrow: "1",
                flexShrink: "1",
                flexBasis: "90%",
                overflow: "hidden",
                children:
                  _ &&
                  _ &&
                  (0, _.jsx)(_._, {
                    width: "100%",
                    src: _(_.asset_url_format, _.edition_comparison),
                    alt: _.name,
                  }),
              }),
              (0, _.jsx)(_._, {
                flexGrow: "0",
                flexShrink: "0",
                children: (0, _.jsx)(_._, {
                  onClick: _,
                  children: _._.Localize("#Button_Close"),
                }),
              }),
            ],
          });
        }
        const _ = new _._("PurchaseOptions");
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          return _?.purchase_description_bbcode
            ? (0, _.jsx)("div", {
                children: (0, _.jsx)(_, {
                  text: _.purchase_description_bbcode,
                }),
              })
            : null;
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = _();
          if (
            !_ ||
            !_.advance_access_date ||
            !_.steam_release_date ||
            !_ ||
            !_.is_coming_soon
          )
            return null;
          const _ = "packageid" in _ && _.has(_.packageid),
            _ = (0, _._)(),
            _ = (0, _._)(_.advance_access_date - _),
            _ = (0, _._)(_.steam_release_date - _.advance_access_date);
          let _;
          return (
            _ > _.advance_access_date
              ? (_ = _
                  ? "#AppPage_AdvanceAccess_Now_Owned"
                  : "#AppPage_AdvanceAccess_Now")
              : (_ = _
                  ? "#AppPage_AdvanceAccess_Starts_Owned"
                  : "#AppPage_AdvanceAccess_Starts"),
            _
              ? (0, _.jsx)(_._, {
                  size: "2",
                  color: "blue-10",
                  children: _.Localize(_, _, _),
                })
              : null
          );
        }
        function _(_) {
          const { _: _, option: _ } = _,
            _ = _.useContext(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            { data: _ } = (0, _._)(_),
            { data: _ } = _(),
            _ = _(_),
            _ = _(_.appid, _?.name ?? "");
          if (!_ || !_ || !_) return null;
          const _ = "packageid" in _ && _.has(_.packageid);
          _.Debug(_);
          let _ = _.self_purchase_option?.packageid
              ? _.self_purchase_option
              : _.best_purchase_option,
            _ = _.Localize("#AppPage_PurchaseOption_GetFreeToKeep", _.name);
          const _ = _ && _?.is_free_to_keep;
          let _ = _ ? _ : _,
            _ = _.Localize(
              _
                ? "#AppPage_PurchaseOption_PlayNow"
                : "#AppPage_PurchaseOption_AddToLibrary",
            );
          return (
            _.Debug(_, _, _),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsxs)(_, {
                  option: _,
                  onActivate: _,
                  onOKActionDescription: _,
                  price: (0, _.jsx)(_, {
                    _: _,
                    bSelfPurchaseOption: !!_.self_purchase_option?.packageid,
                  }),
                  children: [
                    (0, _.jsx)(_, {
                      _: _,
                      title: _,
                      bPrepurchase: (0, _._)(_, _),
                    }),
                    _ &&
                      (0, _.jsx)(_._, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: _.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, _.jsxs)(_, {
                      children: [
                        (0, _.jsx)(_, {
                          _: _,
                          bSelfPurchaseOption:
                            !!_.self_purchase_option?.packageid,
                        }),
                        (0, _.jsx)(_, {
                          _: _,
                        }),
                        (0, _.jsx)(_, {
                          option: _,
                        }),
                        (0, _.jsx)(_, {
                          _: _,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const { _: _, option: _ } = _,
            _ = _.useContext(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            { data: _ } = (0, _._)(_),
            { data: _ } = _(),
            _ = _(_),
            _ = _(_.data),
            [_, _, _] = (0, _._)(!1);
          if (!_ || !_) return null;
          _.Debug(_);
          let _ = _.self_purchase_option?.packageid
            ? _.self_purchase_option
            : _.best_purchase_option;
          if (_?.is_free_to_keep)
            return (0, _.jsx)(_, {
              ..._,
            });
          const _ =
              _.bAvailableForFree &&
              _.data.packageid &&
              !_?.has(_.data.packageid),
            _ = "packageid" in _ && !!_?.has(_.packageid);
          let _, _;
          _.data.is_edition &&
            ((_ = _),
            (_ = _.Localize("#AppPage_PurchaseOption_CompareEditions")));
          let _, _;
          return (
            _ &&
              ((_ = _),
              (_ = _.Localize("#AppPage_PurchaseOption_AddToLibrary"))),
            _.Debug(_, _, _),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsxs)(_, {
                  option: _,
                  allowTwoColumn: !0,
                  onActivate: _,
                  onOKActionDescription: _.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: _,
                  onSecondaryActionDescription: _,
                  onOptionsButton: _,
                  onOptionsActionDescription: _,
                  price: (0, _.jsx)(_, {
                    _: _,
                    bSelfPurchaseOption: !!_.self_purchase_option?.packageid,
                  }),
                  okIcon: (0, _.jsx)(_.JBW, {
                    width: "24",
                    height: "24",
                  }),
                  children: [
                    (0, _.jsx)(_, {
                      _: _,
                      bPrepurchase: (0, _._)(_, _),
                    }),
                    _ &&
                      (0, _.jsx)(_._, {
                        size: "3",
                        weight: "heavy",
                        color: "storegreen-10",
                        children: _.Localize(
                          "#AppPage_PurchaseOption_InLibrary",
                        ),
                      }),
                    (0, _.jsxs)(_, {
                      children: [
                        (0, _.jsx)(_, {
                          _: _,
                          bSelfPurchaseOption:
                            !!_.self_purchase_option?.packageid,
                        }),
                        (0, _.jsx)(_, {
                          _: _,
                        }),
                        (0, _.jsx)(_, {
                          option: _,
                        }),
                        (0, _.jsx)(_, {
                          _: _,
                        }),
                      ],
                    }),
                  ],
                }),
                _ &&
                  _.data.is_edition &&
                  (0, _.jsx)(_._.Root, {
                    onClose: _,
                    children: (0, _.jsx)(_, {
                      closeModal: _,
                    }),
                  }),
              ],
            })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { bComingSoon: _, purchaseOption: _, className: _ } = _;
          return (0, _._)(_, _)
            ? (0, _.jsxs)("div", {
                className: _()(_.PrePurchaseTag, _),
                children: [
                  (0, _.jsx)(_.zD7, {}),
                  _._.Localize("#EventDisplay_CallToAction_Prepurchase_Short"),
                ],
              })
            : null;
        }
        const _ = new _._("PurchaseOptions");
        function _(_) {
          const { _: _, option: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(),
            _ = _(_.data),
            _ = (0, _._)(_),
            _ = _.useCallback(() => {
              _ && (window.location.href = _);
            }, [_]);
          if (!_ || !_) return console.warn("Not ready", _, _, _, _), null;
          const _ = _.included_appids?.length || 0,
            _ = _.included_appids?.filter((_) => !_.has(_)) || [],
            _ = _.included_appids?.filter((_) => _.has(_)) || [];
          let _ = _.length,
            _ =
              _ != _.length
                ? "#AppPage_BuyThisBundle_Partial"
                : "#AppPage_BuyThisBundle";
          return (
            _.length == 0 &&
              ((_ = "#AppPage_CollectionComplete"),
              (_ = _.included_appids?.length || 0)),
            _.Debug(_, _.best_purchase_option, _),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  _: _,
                }),
                (0, _.jsxs)(_, {
                  option: _,
                  onActivate: _,
                  onOKActionDescription: _.Localize(
                    "#AppPage_PurchaseOption_AddToCart",
                  ),
                  onSecondaryButton: _,
                  onSecondaryActionDescription: _.Localize(
                    "#AppPage_PurchaseOption_BundleInfo",
                  ),
                  price: (0, _.jsx)(_, {
                    _: _,
                    bSelfPurchaseOption: !0,
                  }),
                  okIcon: (0, _.jsx)(_.JBW, {
                    width: "24",
                    height: "24",
                  }),
                  children: [
                    (0, _.jsx)(_, {
                      _: _,
                      children: (0, _.jsxs)(_._, {
                        size: "3",
                        color: "blue-8",
                        children: [
                          " ",
                          _.Localize("#AppPage_PurchaseOption_Bundle"),
                        ],
                      }),
                    }),
                    (0, _.jsxs)(_, {
                      children: [
                        (0, _.jsx)(_, {
                          _: _,
                          bSelfPurchaseOption: !0,
                        }),
                        (0, _.jsxs)(_._, {
                          direction: "column",
                          flexGrow: "1",
                          flexShrink: "1",
                          overflow: "hidden",
                          gap: "1",
                          children: [
                            (0, _.jsx)(_, {
                              option: _.best_purchase_option,
                            }),
                            (0, _.jsxs)(_._, {
                              direction: "column",
                              flexGrow: "1",
                              overflow: "hidden",
                              children: [
                                (0, _.jsx)(_._, {
                                  size: "2",
                                  children: _.LocalizePlural(
                                    _,
                                    _,
                                    _.best_purchase_option?.discount_pct ||
                                      _.best_purchase_option
                                        ?.bundle_discount_pct ||
                                      0,
                                  ),
                                }),
                                (0, _.jsx)(_, {
                                  apps: [..._, ..._],
                                  setOwnedApps: _,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const { rgAppids: _ } = _;
          return _.length == 0
            ? null
            : jsx("div", {
                className: styles.AppImages,
                children: _?.map((_) =>
                  jsx(
                    _,
                    {
                      appid: _,
                    },
                    _,
                  ),
                ),
              });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = useStoreItemDefaultInfo({
              appid: _,
            }),
            { data: _ } = useStoreItemAssets({
              appid: _,
            });
          if (!_ || !_) return console.warn("Not ready", _), null;
          const _ = _ && StoreAssetURL(_, "small_capsule");
          return jsx(Fragment, {
            children: jsx("img", {
              src: _,
              alt: "",
            }),
          });
        }
        function _(_) {
          const { apps: _, setOwnedApps: _ } = _,
            _ = 6,
            [_, _] = _.useState(_.length > _ + 1 ? _ : _.length),
            _ = _.useRef(null),
            _ = (0, _._)((_) => {
              if (_.current) {
                const _ = _.contentRect,
                  _ = _.current?.getBoundingClientRect();
                let _ = _.height,
                  _ = 0;
                for (let _ of _.target.children) {
                  if (_.tagName != "LI") continue;
                  const _ = _.getBoundingClientRect();
                  if (
                    (_ != _.length - 1 && _.height < _ - _.height) ||
                    (_ == _.length - 1 && _.height < _)
                  )
                    _++, (_ -= _.height);
                  else break;
                }
                _ != _ && _(_),
                  (_.current.style.opacity = _ == _.length ? "0" : "1");
              }
            });
          if (_.length == 0 || _ == 0) return null;
          const _ = _.length - _;
          return (0, _.jsxs)("ul", {
            className: _().AppList,
            ref: _,
            children: [
              _.slice(0, _).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    appid: _,
                    bOwned: _.has(_),
                  },
                  _,
                ),
              ),
              (0, _.jsx)(_._, {
                _: "div",
                ref: _,
                size: "2",
                children: _.LocalizePlural("#AppPage_AdditionalItem", _),
              }),
            ],
          });
        }
        function _(_) {
          const { appid: _, bOwned: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ =
            (_ && (0, _._)(_, "community_icon")) ||
            (_ && (0, _._)(_, "community_icon"));
          return (0, _.jsxs)("li", {
            className: _().BundleApp,
            children: [
              (0, _.jsx)("div", {
                className: _().AppIcon,
                children:
                  _ &&
                  (0, _.jsx)("img", {
                    src: _,
                    alt: "",
                  }),
              }),
              (0, _.jsxs)("div", {
                className: _().AppText,
                children: [
                  (0, _.jsx)(_._, {
                    size: "2",
                    contrast: _ ? "description" : "subtitle",
                    lineClamp: _ ? 1 : 2,
                    className: _ ? void 0 : _().WrappingName,
                    children: _.name,
                  }),
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "1",
                      weight: "heavy",
                      color: "storegreen-10",
                      className: _().InLibrary,
                      children: (0, _._)("in_library"),
                    }),
                  !_ &&
                    (0, _.jsx)(_, {
                      bComingSoon: _.is_coming_soon,
                      purchaseOption: _.best_purchase_option,
                      className: _().PrePurchase,
                    }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return (0, _.jsx)(_._, {
            storeItem: _,
            children: (0, _.jsx)(_._, {
              size: "2",
              children: _?.name,
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return _
            ? (0, _.jsx)("li", {
                children: (0, _.jsx)(_, {
                  appid: _,
                }),
              })
            : null;
        }
        function _(_) {
          const {
            appid: _,
            strLocTagTitle: _,
            strLocTagBody: _,
            rgAppidParent: _,
            color: _,
          } = _;
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_._, {
              background: _,
              direction: "column",
              padding: "3",
              children: [
                (0, _.jsx)(_._, {
                  size: "5",
                  children: _.Localize(_),
                }),
                _.length == 1 &&
                  (0, _.jsx)(_._, {
                    children: _.LocalizeReact(
                      _,
                      (0, _.jsx)(_, {
                        appid: _[0],
                      }),
                    ),
                  }),
                _.length > 1 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_._, {
                        children: _.Localize("#AppPage_DLCWarning_OneOf"),
                      }),
                      (0, _.jsx)("ul", {
                        className: _().AppList,
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              appid: _,
                            },
                            _,
                          ),
                        ),
                      }),
                    ],
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return !_ ||
            _.type != _._._ ||
            !_.related_items?.parent_appid ||
            _.related_items.parent_appid == _._
            ? null
            : (0, _.jsx)(_, {
                appid: _,
                strLocTagTitle: "#AppPage_DLCWarning_Title_Soundtrack",
                strLocTagBody: "#AppPage_DLCWarning_Soundtrack",
                rgAppidParent: [_.related_items.parent_appid],
                color: "crimson-7",
              });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return !_ || _.type != _._._ || !_.related_items?.parent_appid
            ? null
            : (0, _.jsx)(_, {
                appid: _,
                appidParent: _.related_items.parent_appid,
              });
        }
        function _(_) {
          const { appid: _, appidParent: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            });
          if (!_ || !_ || _.type != _._._) return null;
          const _ =
              _ && _.type == _._._
                ? "#AppPage_DLCWarning_Software"
                : "#AppPage_DLCWarning",
            _ = _.related_items?.dlc_parent_appids?.length
              ? _.related_items?.dlc_parent_appids
              : [_];
          return (0, _.jsx)(_, {
            appid: _,
            strLocTagTitle: "#AppPage_DLCWarning_Title",
            strLocTagBody: _,
            rgAppidParent: _,
            color: "purple-7",
          });
        }
        function _(_) {
          const { appid: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                appid: _,
              }),
              (0, _.jsx)(_, {
                appid: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = (0, _._)(function (_) {
          const {
              appid: _,
              bAllowRemove: _,
              children: _,
              color: _,
              width: _,
            } = _,
            _ = (0, _._)(),
            { data: _ } = _(_),
            _ = _(_),
            [_, _, _] = (0, _._)();
          (0, _.use)(_._.Ready());
          const _ = !!_;
          if (_ && !_) return null;
          const _ = _ && !!_?.wishlist;
          if (_ && !_) return null;
          const _ = () => {
              _.mutateAsync({
                wishlist: !_,
                old_interest: _,
              });
            },
            _ = _ ? "#RemoveFromWishlist_ttip" : "#AddToWishlist_ttip",
            _ = _ ? "#Wishlisted" : "#AddToYourWishlist";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _._.Localize(_),
                children: (0, _.jsx)(_._, {
                  color: _,
                  width: _,
                  onClick: _ ? _ : _,
                  children: _ ? _(_) : _._.Localize(_),
                }),
              }),
              !_ &&
                (0, _.jsx)(_, {
                  active: _,
                  closeModal: _,
                }),
            ],
          });
        });
        function _(_) {
          const { active: _, closeModal: _ } = _,
            { fnOpenInSteamClient: _ } = (0, _.useOpenWebInSteamClient)();
          return (
            (0, _.use)(_.Ready()),
            (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsxs)(_._, {
                strTitle: _.Localize("#OpenInDesktopAppBanner_NotSignedIn"),
                className: _().WishlistModalOverride,
                strDescription: _.Localize("#Wishlist_NotSignedIn"),
                closeModal: _,
                bAlertDialog: !0,
                children: [
                  (0, _.jsxs)(_._, {
                    direction: "row",
                    gap: "4",
                    paddingTop: "4",
                    paddingBottom: "4",
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: _.Localize(
                          "#OpenInDesktopAppBanner_OpenAppButton",
                        ),
                      }),
                      (0, _.jsx)(_._, {
                        color: "dull",
                        onClick: _._,
                        children: _._.Localize("#Login_SignIn"),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _._)(
                      _._.Localize("#GotSteam_NeedSteam"),
                      (0, _.jsx)(_._, {
                        href: `${_._.STORE_BASE_URL}about`,
                      }),
                    ),
                  }),
                ],
              }),
            })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = [];
          return (
            _.windows &&
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    className: _().PlatformIcon,
                    children: (0, _.jsx)(_.eJJ, {}),
                  },
                  "windows",
                ),
              ),
            _.mac &&
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    className: _().PlatformIcon,
                    children: (0, _.jsx)(_.kPc, {}),
                  },
                  "mac",
                ),
              ),
            _.steamos_linux &&
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    className: _().PlatformIcon,
                    children: (0, _.jsx)(_.Qte, {}),
                  },
                  "steamos",
                ),
              ),
            _.length == 0
              ? null
              : (0, _.jsx)("div", {
                  className: _().PlatformIcons,
                  children: _,
                })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_, _) {
          if (_) return "#AppPage_ComingSoon_UnlocksIn_Software";
          switch (_) {
            case _._._:
              return "#AppPage_ComingSoon_UnlocksIn_Video";
            case _._._:
              return "#AppPage_ComingSoon_UnlocksIn_Series";
            case _._._:
              return "#AppPage_ComingSoon_UnlocksIn_DLC";
            default:
              return "#AppPage_ComingSoon_UnlocksIn";
          }
        }
        function _(_, _) {
          return _
            ? _.custom_release_date_message
              ? _.custom_release_date_message
              : _.steam_release_date
                ? (0, _._)(_.steam_release_date)
                : ""
            : "";
        }
        function _(_, _, _) {
          return _ ? _ != "date_full" : _ ? !0 : !_;
        }
        function _(_) {
          const {
              appid: _,
              bHasPrePurchaseSub: _,
              bGetsSoftwareTreatment: _,
              bShowReleaseDateIfComingSoon: _,
              strOffsitePrice: _,
              preload: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)(_);
          if (!_ || !_) return null;
          const _ = _.coming_soon_display,
            _ = _.steam_release_date,
            _ = !!_ && _ < (0, _._)(),
            _ = _ == "text_comingsoon" || _ == "text_tba",
            _ = _ != "text_comingsoon",
            _ = _.type == _._._,
            _ = _ ? _ : _(_, _),
            _ = !!_,
            _ = _ && !_ && _,
            _ = !_ && !!_ && !_(_, _.custom_release_date_message, _);
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsxs)(_._, {
                direction: "row",
                className: _().ComingSoon,
                children: [
                  (0, _.jsxs)(_._, {
                    direction: "column",
                    className: _().Content,
                    children: [
                      _ &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(_._, {
                              size: "5",
                              children: _.Localize("#AppPage_ComingSoon_Title"),
                            }),
                            (0, _.jsx)(_._, {
                              size: "2",
                              color: "greyneutral-11",
                              children: _.Localize(
                                "#AppPage_ComingSoon_ReleaseDatePassed",
                              ),
                            }),
                          ],
                        }),
                      !_ &&
                        _ &&
                        (0, _.jsx)(_._, {
                          size: "5",
                          children: _.Localize(
                            "#AppPage_ComingSoon_ReleasesOn",
                            _,
                          ),
                        }),
                      !_ &&
                        !_ &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)(_._, {
                              size: "2",
                              color: "greyneutral-11",
                              children: _.Localize(
                                _
                                  ? "#AppPage_ComingSoon_NotYetAvailable_DLC"
                                  : "#AppPage_ComingSoon_NotYetAvailable",
                              ),
                            }),
                            _ &&
                              (0, _.jsxs)(_._, {
                                size: "5",
                                children: [
                                  _ &&
                                    `${_.Localize("#AppPage_ComingSoon_IntendedRelease")}: `,
                                  _,
                                ],
                              }),
                          ],
                        }),
                      _ &&
                        (0, _.jsx)(_._, {
                          size: "2",
                          children: _.Localize(
                            _(_.type, _),
                            (0, _._)(_ - (0, _._)(), {
                              eSuffix: _._.None,
                            }),
                          ),
                        }),
                      _ &&
                        (0, _.jsx)(_._, {
                          size: "3",
                          weight: "heavy",
                          className: _().OffsitePrice,
                          children: _,
                        }),
                    ],
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      appid: _,
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  appid: _,
                  preload: _,
                }),
            ],
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = _(_);
          if (!_) return null;
          const _ = _.wishlist;
          return (0, _.jsxs)(_._, {
            direction: "column",
            className: _().Reminder,
            children: [
              (0, _.jsxs)(_._, {
                direction: "column",
                className: _().Note,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "2",
                      children: _.Localize(
                        "#AppPage_ComingSoon_WishlistReminder_On",
                      ),
                    }),
                  !_ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_._, {
                          size: "2",
                          children: _.Localize(
                            "#AppPage_ComingSoon_WishlistPrompt",
                          ),
                        }),
                        (0, _.jsx)(_._, {
                          size: "2",
                          children: _.Localize(
                            "#AppPage_ComingSoon_WishlistReminder",
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_._, {
                  href: `${_._.STORE_BASE_URL}wishlist/`,
                  children: _.Localize("#AppPage_ComingSoon_ViewWishlist"),
                }),
              !_ &&
                (0, _.jsx)(_, {
                  appid: _,
                  color: "storegreen",
                }),
            ],
          });
        }
        function _(_) {
          const { appid: _, preload: _ } = _,
            { subidFreeOnDemand: _, bOwnedPermanent: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)(),
            _ = _?.free_weekend?.appid ?? _,
            _ = _(_, _?.name ?? "");
          if (!_) return null;
          const _ = !!_ && !!_ && !_;
          return (0, _.jsxs)(_._, {
            direction: "column",
            className: _().Preload,
            children: [
              (0, _.jsx)(_, {
                _: {
                  appid: _,
                },
              }),
              (0, _.jsx)(_._, {
                size: "5",
                children: _.Localize(
                  "#AppPage_ComingSoon_PreloadTitle",
                  _.name,
                ),
              }),
              (0, _.jsxs)(_._, {
                direction: "row",
                className: _().PreloadActions,
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _.Localize("#AppPage_ComingSoon_PreloadButton"),
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      subid: _,
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const _ = _({
            packageid: _.subid,
          });
          return (0, _.jsx)(_._, {
            color: "greyneutral",
            onClick: _,
            children: _.Localize("#AppPage_ComingSoon_AddToLibrary"),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = !1,
          _ = [],
          _ = "orange-8",
          _ = "faqs/view/7451-A8FE-3867-6A2E",
          _ = "kb_article.php?ref=1055-ISJM-8568",
          _ = "https://support.apple.com/en-us/HT211814",
          _ = {
            [_._._]: "#AppPage_PurchaseNote_Type_Notice",
            [_._._]: "#AppPage_PurchaseNote_Type_LowViolence",
            [_._._]: "#AppPage_PurchaseNote_Type_CreditCardRequired",
            [_._._]: "#AppPage_PurchaseNote_Type_SystemRequirements",
          };
        function _(_) {
          const {
            appid: _,
            bUnsupportedLanguage: _,
            bAdminExcludedFromDiscovery: _,
            bRetired: _,
            bMac64BitNotice: _,
            bMacAppleSiliconNotice: _,
            b360Video: _,
          } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                appid: _,
              }),
              (_ || _) && (0, _.jsx)(_, {}),
              (_ || _) &&
                (0, _.jsx)(_, {
                  appid: _,
                }),
              (0, _.jsx)(_, {
                appid: _,
                bRetired: _ || _,
                bMac64BitNotice: _ || _,
                bMacAppleSiliconNotice: _ || _,
              }),
              (0, _.jsx)(_, {
                appid: _,
              }),
              (0, _.jsx)(_, {
                appid: _,
                b360Video: _,
              }),
            ],
          });
        }
        function _(_) {
          const { title: _, bHighlight: _, children: _ } = _;
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_._, {
              background: _ ? "sky-4" : void 0,
              borderColor: _ ? void 0 : _,
              direction: "column",
              gap: "2",
              padding: _ ? "4" : "3",
              marginBottom: "3",
              children: [
                _ &&
                  (0, _.jsx)(_._, {
                    size: "4",
                    weight: "heavy",
                    color: _ ? void 0 : _,
                    children: _,
                  }),
                _,
              ],
            }),
          });
        }
        function _(_) {
          const [_, _] = _.useState(!1);
          return (
            _.useEffect(() => {
              if (
                _ != "secureboot_tpm2" ||
                !(0, _._)("Compat.CheckBootProtectionEnabled")
              )
                return;
              let _ = !1;
              return (
                SteamClient.Compat.CheckBootProtectionEnabled("2", !0).then(
                  (_) => {
                    _ || _(!_);
                  },
                ),
                () => {
                  _ = !0;
                }
              );
            }, [_]),
            _
          );
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.anticheat;
          return !_(_?.boot_protection ? _.boot_protection_name : void 0) && !_
            ? null
            : (0, _.jsx)(_, {
                title: _.Localize("#AppPage_PurchaseNote_BootProtection_Title"),
                children: (0, _.jsx)(_._, {
                  children: (0, _._)(
                    _.Localize("#AppPage_PurchaseNote_BootProtection"),
                    (0, _.jsx)(_._, {
                      href: `${_._.HELP_BASE_URL}${_}`,
                      color: "blue-8",
                    }),
                  ),
                }),
              });
        }
        function _() {
          return (0, _.jsxs)(_, {
            title: _.Localize(
              "#AppPage_PurchaseNote_UnsupportedLanguage_Title",
              (0, _._)(`#Language_${_._.LANGUAGE}`),
            ),
            children: [
              (0, _.jsx)(_._, {
                children: _.Localize(
                  "#AppPage_PurchaseNote_UnsupportedLanguage",
                ),
              }),
              _._.logged_in &&
                (0, _.jsx)(_._, {
                  children: (0, _._)(
                    _.Localize(
                      "#AppPage_PurchaseNote_UnsupportedLanguage_Change",
                    ),
                    (0, _.jsx)(_._, {
                      href: `${_._.STORE_BASE_URL}account/preferences`,
                      color: "blue-8",
                    }),
                  ),
                }),
            ],
          });
        }
        function _(_) {
          const { appid: _ } = _;
          return (0, _.jsx)(_, {
            bHighlight: !0,
            children: (0, _.jsx)(_._, {
              size: "4",
              color: "sky-11",
              children: (0, _._)(
                _.Localize("#AppPage_PurchaseNote_ExcludedFromDiscovery"),
                (0, _.jsx)(_._, {
                  size: "5",
                  weight: "medium",
                  contrast: "title",
                }),
                (0, _.jsx)(_._, {
                  color: "valveonly-7",
                }),
                (0, _.jsx)(_._, {
                  href: `${_._.PARTNER_BASE_URL}apps/landing/${_}`,
                  target: "_blank",
                  color: "blue-8",
                }),
              ),
            }),
          });
        }
        function _(_) {
          const {
              appid: _,
              bRetired: _,
              bMac64BitNotice: _,
              bMacAppleSiliconNotice: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          if (!_) return null;
          const _ = (0, _.jsx)(_, {
            strType: _.Localize("#AppPage_PurchaseNote_Type_Notice"),
          });
          let _;
          return (
            _
              ? (_ = _.Localize("#AppPage_PurchaseNote_Retired", _.name ?? ""))
              : _.unlisted &&
                (_ = _.Localize(
                  "#AppPage_PurchaseNote_Unlisted",
                  _.name ?? "",
                )),
            (0, _.jsxs)(_.Fragment, {
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    children: (0, _.jsxs)(_._, {
                      children: [_, _],
                    }),
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    children: (0, _.jsxs)(_._, {
                      children: [
                        _,
                        _.Localize(
                          "#AppPage_PurchaseNote_Unlisted",
                          _.name ?? "",
                        ),
                      ],
                    }),
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    children: (0, _.jsxs)(_._, {
                      children: [
                        _,
                        (0, _._)(
                          _.Localize("#AppPage_PurchaseNote_Mac64Bit"),
                          (0, _.jsx)(_._, {
                            href: `${_._.SUPPORT_BASE_URL}${_}`,
                            color: "blue-8",
                          }),
                        ),
                      ],
                    }),
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    children: (0, _.jsxs)(_._, {
                      children: [
                        _,
                        (0, _._)(
                          _.Localize("#AppPage_PurchaseNote_MacAppleSilicon"),
                          (0, _.jsx)(_._, {
                            href: _,
                            color: "blue-8",
                          }),
                        ),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { note: _ } = _,
            { type: _, highlighted: _, text_bbcode: _ } = _;
          if (!_) return null;
          let _ = _;
          const _ = _ !== void 0 ? _[_] : void 0;
          return (
            _ &&
              (_ = `[b][color=var(--color-${_})][noparse]${_.Localize("#AppPage_PurchaseNote_TypeLabel", _.Localize(_))}[/noparse][/color][/b] ${_}`),
            (0, _.jsx)(_, {
              bHighlight: !!_,
              children: (0, _.jsx)(_._, {
                _: "div",
                size: _ ? "4" : void 0,
                color: _ ? "sky-11" : void 0,
                children: (0, _.jsx)(_._, {
                  text: _,
                }),
              }),
            })
          );
        }
        function _(_) {
          const { strType: _ } = _;
          return (0, _.jsx)(_._, {
            weight: "heavy",
            color: _,
            marginRight: "1",
            children: _.Localize("#AppPage_PurchaseNote_TypeLabel", _),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            });
          let _ = _?.purchase_notes;
          return (
            _ && !_?.length && (_ = _),
            !_ || !_?.length || (_.type == _._._ && !_)
              ? null
              : (0, _.jsx)(_.Fragment, {
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        note: _,
                      },
                      _,
                    ),
                  ),
                })
          );
        }
        function _(_) {
          const { appid: _, b360Video: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.vr_support;
          let _;
          return (
            _?.vrhmd_only && !_
              ? (_ = _.EPurchaseNoticeType_VRRequired)
              : _?.no_mouse_keyboard_support
                ? (_ = _.EPurchaseNoticeType_ControllerRequired)
                : _?.vrhmd &&
                  _.show_optional_vr_mode_notice &&
                  (_ = _.EPurchaseNoticeType_VRSupported),
            _
              ? (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_, {
                      appid: _,
                      type: _.EPurchaseNoticeType_VRRequired,
                    }),
                    (0, _.jsx)(_, {
                      appid: _,
                      type: _.EPurchaseNoticeType_ControllerRequired,
                    }),
                    (0, _.jsx)(_, {
                      appid: _,
                      type: _.EPurchaseNoticeType_VRSupported,
                    }),
                  ],
                })
              : _ === void 0
                ? null
                : (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      appid: _,
                      type: _,
                    }),
                  })
          );
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)(`${_._.STORE_BASE_URL}about/communitymods/`);
          let _ = _?.purchase_notes;
          return (
            _ && !_?.length && (_ = _),
            !_ || (_.type != _._._ && !_) || !_?.[0]?.text_bbcode
              ? null
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _.jsxs)(_._, {
                        className: _().ModBubble,
                        direction: "column",
                        gap: "2",
                        paddingX: "4",
                        paddingY: "3",
                        marginBottom: "3",
                        children: [
                          (0, _.jsx)(_._, {
                            size: "6",
                            weight: "heavy",
                            contrast: "title",
                            children: _.Localize(
                              "#AppPage_PurchaseNote_Mod_Title",
                            ),
                          }),
                          (0, _.jsx)(_._, {
                            _: "div",
                            contrast: "subtitle",
                            children: (0, _.jsx)(_._, {
                              text: _[0].text_bbcode,
                            }),
                          }),
                          (0, _.jsx)(_._, {
                            contrast: "subtitle",
                            children: (0, _._)(
                              _.Localize("#AppPage_PurchaseNote_Mod_LearnMore"),
                              (0, _.jsx)(_._, {
                                href: _,
                                color: "text-body",
                                contrast: "subtitle",
                                underline: "always",
                              }),
                            ),
                          }),
                        ],
                      }),
                    }),
                    _.slice(1).map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          note: _,
                        },
                        _,
                      ),
                    ),
                  ],
                })
          );
        }
        const _ = new _._("PurchaseOptions"),
          _ = !1;
        function _(_) {
          const {
              appid: _,
              rgOwnedApps: _,
              rgOwnedPackages: _,
              playtestStatus: _,
              rgFreePackagesAvailable: _,
              strAccountTypeDescription: _,
              comingSoon: _,
              purchaseNotes: _,
            } = _,
            _ = (0, _._)(!0),
            _ = _(),
            _ = (0, _._)(),
            [_, _] = _.useState(!1);
          return (
            _.useEffect(() => {
              _.Debug("Initializing PurchaseOptions"),
                _.Debug("rgOwnedApps", _),
                _.Debug("rgActiveLicenses", _),
                _.Debug("playtestStatus", _),
                _.Debug("rgFreePackagesAvailable", _),
                _.Debug("strAccountTypeDescription", _),
                _(_),
                _(_),
                _ && _ && _(_.appid, _),
                _(!0);
            }, [_, _, _, _, _, _, _, _, _]),
            _.use(_.Ready()),
            _.use(_._.Ready()),
            _
              ? (0, _.jsx)(_.Suspense, {
                  children: (0, _.jsx)(_, {
                    appid: _,
                    rgPackagesAvailableForFree: _,
                    strAccountTypeDescription: _,
                    comingSoon: _,
                    purchaseNotes: _,
                  }),
                })
              : null
          );
        }
        function _(_, _, _) {
          const { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(),
            _ = _(_),
            _ = _?.purchase_options;
          return (
            _.Debug(_),
            _.useMemo(() => {
              if (!_ || !_ || !_) return null;
              const _ = _.is_free && !_.is_free_temporarily,
                _ = (0, _._)(),
                _ =
                  _.free_weekend &&
                  (_.free_weekend.start_time || 0) <= _ &&
                  (_.free_weekend.end_time || 0) > _,
                _ = new Set(_),
                _ = [];
              if (!_)
                if (_.has(_))
                  _.push({
                    type: "play",
                  });
                else {
                  const _ = (_.purchase_options || [])
                    .map((_) => _.free_with_master_sub_appid)
                    .filter((_) => !!_);
                  _.Debug(_);
                  for (const _ of _)
                    if (_ && _.has(_)) {
                      _.push({
                        type: "play",
                        appidMasterSub: _,
                      });
                      break;
                    }
                }
              if (_) {
                const _ = _.related_items?.playtests || [];
                if (_.length > 0)
                  for (const _ of _)
                    _ &&
                      _.push({
                        type: "playtest",
                        appidPlaytest: _.appid,
                        bIsOpen: !!_.is_open,
                      });
              }
              const _ = new Set(),
                _ = new Set(
                  (_.related_items?.standalone_demos || []).map((_) => _.appid),
                );
              for (let _ of _.related_items?.demos?.filter(
                (_) => _.show_above_purchase,
              ) || [])
                _.has(_.appid) ||
                  (_.push({
                    type: "demo",
                    appid: _.appid,
                    label: _.label,
                    bStandalone: _.has(_.appid),
                  }),
                  _.add(_.appid));
              (_ || _) &&
                _.push({
                  type: "free",
                });
              const _ = new Map();
              for (let _ of _.package_groups || [])
                _.set(_.name, {
                  _: _.name,
                  package_group: _,
                  items: [],
                });
              let _ = !!_.related_items?.related_f2p;
              const _ = new Set(
                _.map((_) => _.free_to_keep_base_package).filter((_) => !!_),
              );
              for (let _ of _)
                _.is_free_license &&
                  !_.package_group &&
                  (_.push({
                    type: "item",
                    data: _,
                    bAvailableForFree: !!_.packageid && _.has(_.packageid),
                  }),
                  _.add(_.packageid));
              let _;
              for (let _ of _)
                if (
                  !_.has(_.packageid) &&
                  !(_.packageid && _.has(_.packageid))
                ) {
                  if (_ && !_.is_edition && _.related_items) {
                    const _ = _.related_items.related_f2p;
                    _.push({
                      type: "related",
                      appid: _.appid,
                      title: _.header_text,
                      description: _.description_text,
                    }),
                      (_ = !1);
                  }
                  _.package_group !== _?._ &&
                    (_.package_group
                      ? ((_ = _.get(_.package_group)),
                        _?.package_group.display_type == _._._ &&
                          _.push({
                            type: "dropdown",
                            data: _,
                          }))
                      : (_ = void 0)),
                    _ && _?.package_group.display_type == _._._
                      ? _.items.push(_)
                      : _.push({
                          type: "item",
                          data: _,
                          bAvailableForFree:
                            !!_.packageid && _.has(_.packageid),
                        });
                }
              return _.Debug(_), _;
            }, [_, _, _, _, _, _, _])
          );
        }
        function _(_) {
          const {
              appid: _,
              rgPackagesAvailableForFree: _,
              strAccountTypeDescription: _,
              comingSoon: _,
              purchaseNotes: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _(_, _, _),
            _ = _.useRef(null),
            _ = _.useCallback((_) => {
              _.data?.method == "FocusPurchaseOptions" &&
                (_.current?.NavTree().Activate(), _.current?.TakeFocus(_._._));
            }, []);
          return (
            _.useEffect(
              () => (
                window.addEventListener("message", _),
                () => window.removeEventListener("message", _)
              ),
              [_],
            ),
            !_ || !_
              ? (_.Warning("Not ready", _), null)
              : (_.Debug(_),
                _.Debug(_),
                (0, _.jsx)(_.Provider, {
                  value: {
                    appid: _,
                    nOptions: _.length,
                  },
                  children: (0, _.jsx)(_, {
                    children: (0, _.jsxs)(_._, {
                      className: _().PurchaseOptionDisplay,
                      navEntryPreferPosition: _._.PREFERRED_CHILD,
                      navRef: _,
                      children: [
                        _ &&
                          (0, _.jsx)(_, {
                            appid: _,
                            ..._,
                          }),
                        (0, _.jsx)(_, {
                          appid: _,
                          ..._,
                        }),
                        (0, _.jsx)(_, {
                          appid: _,
                        }),
                        (0, _.jsx)(_, {
                          appid: _,
                        }),
                        _.length > 0 &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(_._, {
                                children: (0, _.jsx)(_._, {
                                  size: "3",
                                  contrast: "title",
                                  weight: "heavy",
                                  children: _.Localize(
                                    "#AppPage_PurchaseOptions_Title",
                                  ),
                                }),
                              }),
                              _.length > 2 &&
                                (0, _.jsx)(_, {
                                  options: _,
                                }),
                              _.length <= 2 &&
                                (0, _.jsxs)(_._, {
                                  className: (0, _._)(
                                    _().PurchaseOptionCarouselWrapper,
                                    _.length <= 2 && _().NoCarousel,
                                    _.length == 1 && _().Single,
                                  ),
                                  preferredFocus: !0,
                                  children: [
                                    _.length <= 2 &&
                                      (0, _.jsx)(_, {
                                        option: _[0],
                                      }),
                                    _.length == 2 &&
                                      (0, _.jsx)(_, {
                                        option: _[1],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                      ],
                    }),
                  }),
                }))
          );
        }
        function _(_) {
          const { option: _ } = _;
          let _ = null;
          switch (_.type) {
            case "item":
              _.data.packageid
                ? (_ = (0, _.jsx)(_, {
                    _: _(_.data),
                    option: _,
                  }))
                : (_ = (0, _.jsx)(_, {
                    _: _(_.data),
                    option: _,
                  }));
              break;
            case "dropdown":
              _ = (0, _.jsx)(_, {
                option: _,
              });
              break;
            case "demo":
              _ = (0, _.jsx)(_, {
                option: _,
              });
              break;
            case "free":
              _ = (0, _.jsx)(_, {
                option: _,
              });
              break;
            case "play":
              _ = (0, _.jsx)(_, {
                option: _,
                appidMasterSub: _.appidMasterSub,
              });
              break;
            case "playtest":
              _ = (0, _.jsx)(_, {
                option: _,
                appidPlaytest: _.appidPlaytest,
                bIsOpen: _.bIsOpen,
              });
              break;
            case "related":
              _ = (0, _.jsx)(_, {
                option: _,
              });
              break;
            default:
          }
          return _
            ? (0, _.jsx)("div", {
                className: _().PurchaseOptionWrapper,
                children: _,
              })
            : null;
        }
        function _(_) {
          const { options: _ } = _,
            _ = "purchase_options",
            [_, _] = (0, _._)(_),
            _ = 0.96,
            _ = 256,
            _ = 8,
            _ = parseInt(_().CarouselPaddingTop),
            _ = parseInt(_().CarouselPaddingBottom),
            _ = _.useCallback(
              (_, _, _, _) => {
                const _ = _[_];
                return (0, _.jsx)("div", {
                  style: {
                    width: _,
                    height: _,
                  },
                  children: (0, _.jsx)(_, {
                    option: _,
                  }),
                });
              },
              [_],
            ),
            _ = _.useCallback(() => _, [_]),
            _ = _.useCallback(
              (_) => {
                const _ = _[_];
                switch (_.type) {
                  case "item":
                    return _(_.data);
                  case "dropdown":
                    return "dropdown_package_group_" + _.data._;
                  case "demo":
                    return "demo_" + _.appid;
                  case "free":
                    return "free";
                  case "playtest":
                    return "playtest_" + _.appidPlaytest;
                  case "play":
                    return "play_" + _.appidMasterSub;
                  case "related":
                    return "related_" + _.appid;
                  default:
                    return (
                      (0, _._)(!1, "Unknown purchase option type", _.type),
                      "unknown"
                    );
                }
              },
              [_],
            );
          return _.length == 0
            ? null
            : (0, _.jsx)(_._, {
                className: (0, _._)(
                  _().PurchaseOptionCarouselWrapper,
                  _ != 0 && _().NotLeft,
                ),
                preferredFocus: !0,
                children: (0, _.jsx)(_._, {
                  name: _,
                  "aria-label": _.Localize("#AppPage_PurchaseOptions_Title"),
                  className: (0, _._)(
                    _().PurchaseOptionsCarousel,
                    "PurchaseOptions",
                  ),
                  focusedColumn: _,
                  setFocusedColumn: _,
                  nNumItems: _.length,
                  nHeight: _ / _ + _ + _,
                  nItemHeight: _ / _,
                  nItemMarginX: _,
                  fnGetColumnWidth: _,
                  fnGetId: _,
                  fnItemRenderer: _,
                  scrollToAlignment: "center",
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.lazy(() =>
          Promise.all([
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
          ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
        );
        function _(_) {
          const { rgPackageIDs: _, strButtonToken: _ } = _,
            [_, _] = _.useState(void 0),
            _ = _.map((_) => ({
              packageid: _,
            })),
            { mutate: _, isPending: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(),
            _ =
              _ !== void 0 &&
              _.length > 0 &&
              _.every((_) => (0, _._)(_, _, void 0)),
            _ = _.useCallback(() => _(void 0), []),
            _ = _.useCallback(() => {
              _(void 0, {
                onSuccess: (_) => _(_),
              });
            }, [_]);
          return _.length == 0
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  _ &&
                    (0, _.jsx)(_.Suspense, {
                      children: (0, _.jsx)(_, {
                        lineItemIDs: _,
                        closeCart: _,
                      }),
                    }),
                  _
                    ? (0, _.jsx)(_._, {
                        navProps: {
                          preferredFocus: !0,
                        },
                        color: "storegreen",
                        focusable: !0,
                        href: `${_._.STORE_BASE_URL}cart/`,
                        children: _._.Localize("#AddToCartButton_InCart"),
                      })
                    : (0, _.jsx)(_._, {
                        navProps: {
                          preferredFocus: !0,
                        },
                        color: "storegreen",
                        disabled: _,
                        onClick: _,
                        children: _.Localize(_),
                      }),
                ],
              });
        }
        function _(
          _,
          _,
          _ = {
            style: "long",
            type: "conjunction",
          },
        ) {
          const _ = new Intl.ListFormat(_._.GetPreferredLocales(), _)
            .formatToParts(_.map((_, _) => _.toString()))
            .map((_) => {
              if (_.type === "literal") return _.value;
              const _ = Number.parseInt(_.value);
              return _(_[_], _);
            });
          return _.createElement(_.Fragment, null, ..._);
        }
        var _ = __webpack_require__("chunkid");
        const _ = "17px";
        function _(_) {
          const {
            overhang: _ = _,
            marginTop: _,
            marginBottom: _,
            buttonBarContents: _,
            children: _,
          } = _;
          return (0, _.jsxs)(_._, {
            columns: "1fr",
            rows: `auto ${_}`,
            marginTop: _,
            marginBottom: _,
            children: [
              _,
              (0, _.jsx)(_, {
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)(_._, {
            marginX: "4",
            alignSelf: "end",
            justify: "end",
            gap: "1",
            zIndex: "1",
            gridColumn: "1",
            gridRow: "1 / -1",
            navProps: {
              navEntryPreferPosition: _._.PREFERRED_CHILD,
            },
            children: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 6,
          _ = 5,
          _ = 135;
        function _(_) {
          const { appid: _, rgOptions: _ } = _;
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  appid: _,
                  option: _,
                },
                _.packageid,
              ),
            ),
          });
        }
        function _(_) {
          const { appid: _, option: _ } = _,
            _ = _.packageid,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              packageid: _,
            }),
            { data: _ } = _(),
            _ = _.useMemo(() => {
              const _ = new Map();
              for (const _ of _?.included_items?.included_apps || [])
                _._ && _.set(_._, _);
              return (_?.included_appids || [])
                .map((_) => _.get(_))
                .filter((_) => !!_);
            }, [_, _]);
          if (!_) return null;
          const _ = !!_?.has(_),
            _ = !!_.purchase_description_bbcode,
            _ = _.slice(0, _);
          return (0, _.jsx)(_, {
            marginBottom: "4",
            buttonBarContents: (0, _.jsx)(_, {
              pkg: _,
              option: _,
            }),
            children: (0, _.jsxs)(_._, {
              position: "relative",
              gridRow: "1",
              gridColumn: "1",
              padding: "4",
              paddingTop: "2",
              paddingBottom: "5",
              radius: "md",
              className: _().PackBody,
              children: [
                _ &&
                  (0, _.jsx)(_._, {
                    align: "center",
                    gap: "1",
                    position: "absolute",
                    inset: "-8px auto auto 6px",
                    paddingX: "1",
                    className: _().PackInLibrary,
                    children: (0, _._)("in_library"),
                  }),
                (0, _.jsxs)(_._, {
                  justify: "between",
                  align: "center",
                  children: [
                    (0, _.jsx)(_._, {
                      size: "5",
                      children: _.Localize(
                        "#AppPage_Dropdown_DefaultTitle",
                        _.purchase_option_name || _.name || "",
                      ),
                    }),
                    (0, _.jsx)(_._, {
                      marginBottom: "1",
                      children: (0, _.jsx)(_, {
                        _: {
                          packageid: _,
                        },
                      }),
                    }),
                  ],
                }),
                !_ &&
                  _.length > 1 &&
                  (0, _.jsx)(_, {
                    rgApps: _,
                  }),
                _.length > 1 &&
                  (0, _.jsx)(_._, {
                    position: "relative",
                    padding: "2",
                    className: _().PackCapsulesCtn,
                    children: (0, _.jsx)(_._, {
                      className: (0, _._)(
                        _().PackCapsules,
                        _.length >= _ && _().PackCapsulesCollapsed,
                      ),
                      children: _.map((_, _) =>
                        (0, _.jsx)(
                          _,
                          {
                            appid: _._,
                            zIndex: 10 - _,
                          },
                          _._,
                        ),
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { pkg: _, option: _ } = _,
            _ = _.useMemo(() => [_.packageid], [_.packageid]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_._, {
                  focusable: !0,
                  href: (0, _._)(_),
                  children: _.Localize("#AppPage_PurchaseOption_MoreInfo"),
                }),
              }),
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_._, {
                    purchaseOption: _,
                  }),
                  (0, _.jsx)(_, {
                    rgPackageIDs: _,
                    strButtonToken: "#AppPage_PurchaseOption_AddToCart",
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)(_._, {
            align: "center",
            gap: "1",
            zIndex: "1",
            className: _().PackActionGroup,
            children: _,
          });
        }
        function _(_) {
          const { rgApps: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _((_) => !_), []),
            _ = _.useMemo(() => {
              let _ = 0,
                _ = 0;
              for (const _ of _) {
                const _ = (_.name || "").length;
                if (_ > 0 && _ + _ >= _) break;
                (_ += _), _++;
              }
              return _;
            }, [_]),
            _ = _ < _.length,
            _ = _ && !_ ? _.slice(0, _) : _;
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_._, {
              size: "2",
              marginY: "2",
              children: [
                (0, _.jsx)("b", {
                  children: _.LocalizePlural(
                    "#AppPage_DLCPack_IncludesItems",
                    _.length,
                    (0, _._)(_.length),
                  ),
                }),
                " ",
                _(
                  _,
                  (_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        href: (0, _._)(_),
                        whiteSpace: "nowrap",
                        children: _.name,
                      },
                      _._,
                    ),
                  {
                    type: "unit",
                    style: "short",
                  },
                ),
                _ && (_ ? " " : "\u2026 "),
                _ &&
                  (0, _.jsx)(_._, {
                    onClick: _,
                    children: _.Localize(
                      _
                        ? "#AppPage_DLCPack_ShowLess"
                        : "#AppPage_DLCPack_ShowMore",
                    ),
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { appid: _, zIndex: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ =
              _?.asset_url_format && _.small_capsule
                ? _(_.asset_url_format, _.small_capsule)
                : void 0;
          return _
            ? (0, _.jsx)(_._, {
                position: "relative",
                display: "inline-block",
                height: "45px",
                width: "120px",
                overflow: "hidden",
                className: _().PackCapsule,
                style: {
                  zIndex: _,
                },
                children: (0, _.jsx)(_._, {
                  height: "100%",
                  width: "100%",
                  src: _,
                  alt: _?.name || "",
                }),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 5;
        function _(_) {
          switch (_) {
            case _:
              return "#AppPage_DLC_Highlight_New";
            case _:
              return "#AppPage_DLC_Highlight_ComingSoon";
            case _:
              return "#AppPage_DLC_Highlight_PlayerFavorite";
            case _:
              return "#AppPage_DLC_Highlight_Recommended";
            case _:
              return "#AppPage_DLC_Highlight_RecommendedForNewPlayers";
            default:
              return null;
          }
        }
        function _(_) {
          switch (_) {
            case "in_cart":
              return _().FlagInCart;
            case "in_library":
              return _().FlagInLibrary;
            case "on_wishlist":
              return _().FlagOnWishlist;
            case "ignored":
            case "excluded_by_preferences":
              return _().FlagIgnored;
          }
        }
        function _(_) {
          const {
              appid: _,
              rgRows: _,
              nDlcBrowseCount: _,
              nNumDLCExcludedByPreferences: _,
              addAllToCart: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _(!0), []),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _(_);
          if (!_ || (_.length == 0 && _ == 0 && !_?.length)) return null;
          _.use(_.Ready()), _.use(_._.Ready());
          const _ = _.type == _._._,
            _ = !_ && _.length > _,
            _ = _ ? _.slice(0, _) : _;
          return (0, _.jsx)(_.Suspense, {
            children: (0, _.jsxs)(_._, {
              direction: "column",
              gap: "4",
              marginY: "5",
              children: [
                (0, _.jsxs)(_._, {
                  "flow-children": "column",
                  children: [
                    (0, _.jsxs)(_._, {
                      direction: "row",
                      justify: "between",
                      align: "center",
                      marginBottom: "2",
                      children: [
                        (0, _.jsx)(_._, {
                          size: "3",
                          contrast: "title",
                          weight: "heavy",
                          children: _.Localize(
                            _
                              ? "#AppPage_DLC_Header_Software"
                              : "#AppPage_DLC_Header",
                          ),
                        }),
                        _ > 0 &&
                          (0, _.jsx)(_._, {
                            size: "2",
                            href: `${_._.STORE_BASE_URL}dlc/${_}/`,
                            children: _.Localize(
                              "#AppPage_DLC_BrowseAll",
                              (0, _._)(_),
                            ),
                          }),
                      ],
                    }),
                    _ > 0 &&
                      (0, _.jsx)(_._, {
                        padding: "1",
                        paddingStart: "0",
                        marginBottom: "1",
                        children: (0, _.jsx)(_._, {
                          size: "2",
                          color: "greyneutral-11",
                          children: (0, _._)(
                            _.LocalizePlural(
                              "#AppPage_DLC_ExcludedByPreferences",
                              _,
                            ),
                            (0, _.jsx)(_._, {
                              href: `${_._.STORE_BASE_URL}account/preferences/`,
                            }),
                          ),
                        }),
                      }),
                    _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          row: _,
                          bRevealed: _ >= _,
                        },
                        _.appid,
                      ),
                    ),
                    _ &&
                      (0, _.jsxs)(_._, {
                        direction: "row",
                        justify: "between",
                        align: "center",
                        marginTop: "1",
                        className: _().Footer,
                        children: [
                          (0, _.jsx)(_._, {
                            onClick: _,
                            children: _.Localize("#AppPage_DLC_SeeAll"),
                          }),
                          (0, _.jsx)(_._, {
                            size: "2",
                            color: "greyneutral-11",
                            children: _.Localize(
                              "#AppPage_DLC_ShowingResults",
                              "1",
                              (0, _._)(_),
                              (0, _._)(_),
                            ),
                          }),
                        ],
                      }),
                    !_ &&
                      _.length < _ &&
                      (0, _.jsx)(_._, {
                        marginTop: "1",
                        children: (0, _.jsx)(_._, {
                          size: "2",
                          color: "greyneutral-11",
                          className: _().PartialList,
                          children: _.Localize(
                            "#AppPage_DLC_ShowingPartialList",
                            (0, _._)(_.length),
                            (0, _._)(_),
                          ),
                        }),
                      }),
                  ],
                }),
                !_ &&
                  _ &&
                  (0, _.jsxs)(_._, {
                    direction: "row",
                    justify: "between",
                    align: "center",
                    gap: "2",
                    marginTop: "2",
                    padding: "2",
                    className: _().AddAllToCart,
                    children: [
                      (0, _.jsx)(_._, {
                        size: "3",
                        weight: "heavy",
                        children: _.strTotalPrice,
                      }),
                      (0, _.jsx)(_, {
                        rgPackageIDs: _.rgPackageIDs,
                        strButtonToken: "#AppPage_DLC_BuyAll",
                      }),
                    ],
                  }),
                !!_?.length &&
                  (0, _.jsx)(_, {
                    appid: _,
                    rgOptions: _,
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { bRevealed: _ } = _,
            { appid: _, packageid: _, nHighlightReason: _ } = _.row,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(
              _
                ? {
                    packageid: _,
                  }
                : void 0,
            ),
            _ = _ !== _,
            { data: _ } = (0, _._)(
              _
                ? {
                    appid: _,
                  }
                : void 0,
            ),
            _ = (0, _._)({
              appid: _,
            });
          if (!_) return null;
          const _ = _(_),
            _ =
              _?.asset_url_format && _.small_capsule
                ? _(_.asset_url_format, _.small_capsule)
                : void 0;
          return (0, _.jsxs)(_._, {
            storeItem: _,
            className: (0, _._)(_().Row, _ && _().Highlight, _ && _().Revealed),
            children: [
              _ &&
                _ &&
                (0, _.jsx)(_._, {
                  maxHeight: "87px",
                  flexGrow: "0",
                  src: _,
                  alt: _.name,
                }),
              (0, _.jsxs)(_._, {
                direction: "column",
                align: "start",
                gap: "1",
                paddingEnd: "1",
                className: _().Name,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "1",
                      marginBottom: "1",
                      className: (0, _._)(_().Pill, _(_)),
                      children: (0, _._)(_),
                    }),
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "1",
                      className: (0, _._)(_().Pill, _().HighlightReason),
                      children: _.Localize(_),
                    }),
                  (0, _.jsx)(_._, {
                    size: "3",
                    children: _.name,
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                flexShrink: "0",
                textAlign: "end",
                className: _().Price,
                children: [
                  _.is_free &&
                    (0, _.jsx)(_._, {
                      size: "4",
                      children: _.Localize("#AppPage_DLC_Free"),
                    }),
                  !_.is_free &&
                    (0, _.jsx)(_, {
                      bComingSoon: _.is_coming_soon,
                      purchaseOption: _,
                    }),
                  !_.is_free &&
                    _ &&
                    (0, _.jsx)(_._, {
                      purchaseOption: _,
                      size: "inline",
                    }),
                  !_.is_free &&
                    !_ &&
                    (0, _.jsx)(_._, {
                      size: "4",
                      children: _.Localize("#AppPage_DLC_NoPrice"),
                    }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              thisDLC: _,
              rgDependencies: _,
              rgPackageIDsToAdd: _,
              strTotalPrice: _,
            } = _,
            _ = _.length == 1,
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            { data: _ } = (0, _._)(
              _
                ? {
                    appid: _[0].appid,
                  }
                : void 0,
            );
          if (!_ || _.length == 0 || (_ && !_)) return null;
          _.use(_.Ready()), _.use(_._.Ready());
          const _ = _[0].bRequired,
            _ = _
              ? _.Localize(
                  _
                    ? "#AppPage_DLCDependency_RequiredTitle"
                    : "#AppPage_DLCDependency_RecommendedTitle",
                )
              : null,
            _ = _
              ? _.Localize(
                  _
                    ? "#AppPage_DLCDependency_RequiredDesc"
                    : "#AppPage_DLCDependency_RecommendedDesc",
                  _.name || "",
                  _.name || "",
                )
              : _.Localize("#AppPage_DLCDependency_MultipleDesc", _.name || "");
          return (0, _.jsx)(_.Suspense, {
            children: (0, _.jsx)(_, {
              marginTop: "5",
              marginBottom: "5",
              buttonBarContents: (0, _.jsx)(_, {
                rgPackageIDs: _,
                strTotalPrice: _,
              }),
              children: (0, _.jsxs)(_._, {
                "flow-children": "column",
                className: _().Body,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "6",
                      contrast: "title",
                      marginBottom: "2",
                      children: _,
                    }),
                  (0, _.jsx)(_._, {
                    size: "3",
                    children: (0, _._)(
                      _,
                      (0, _.jsx)("b", {}),
                      (0, _.jsx)("b", {}),
                    ),
                  }),
                  (0, _.jsxs)(_._, {
                    "flow-children": "row",
                    className: _().Capsules,
                    children: [
                      (0, _.jsx)(_, {
                        appid: _.appid,
                        packageid: _.packageid,
                        strCallout: _.Localize(
                          "#AppPage_DLCDependency_ThisDLC",
                        ),
                      }),
                      _.map((_) =>
                        (0, _.jsxs)(
                          _.Fragment,
                          {
                            children: [
                              (0, _.jsx)(_._, {
                                "aria-hidden": !0,
                                className: _().Separator,
                                children: "+",
                              }),
                              (0, _.jsx)(_, {
                                appid: _.appid,
                                packageid: _.packageid,
                                strCallout: _.Localize(
                                  _.bRequired
                                    ? "#AppPage_DLCDependency_RequiredTab"
                                    : "#AppPage_DLCDependency_RecommendedTab",
                                ),
                              }),
                            ],
                          },
                          _.appid,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const { rgPackageIDs: _, strTotalPrice: _ } = _;
          return (0, _.jsxs)(_._, {
            align: "center",
            gap: "1",
            className: _().ActionGroup,
            children: [
              (0, _.jsx)(_._, {
                size: "3",
                className: _().Total,
                children: _,
              }),
              (0, _.jsx)(_, {
                rgPackageIDs: _,
                strButtonToken: "#AppPage_DLCDependency_AddAllToCart",
              }),
            ],
          });
        }
        function _(_) {
          const { appid: _, packageid: _, strCallout: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(
              _
                ? {
                    packageid: _,
                  }
                : void 0,
            );
          if (!_) return null;
          const _ =
            _?.asset_url_format && _.small_capsule
              ? _(_.asset_url_format, _.small_capsule)
              : void 0;
          return (0, _.jsxs)(_._, {
            "flow-children": "column",
            className: _().Item,
            children: [
              (0, _.jsx)(_._, {
                justify: "center",
                position: "absolute",
                inset: "-16px 0 auto 0",
                className: _().CalloutRow,
                children: (0, _.jsx)(_._, {
                  size: "1",
                  contrast: "title",
                  className: _().Callout,
                  children: _,
                }),
              }),
              (0, _.jsxs)(_._, {
                storeItem: _,
                className: _().Link,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      display: "block",
                      width: "100%",
                      src: _,
                      alt: _.name || "",
                    }),
                  (0, _.jsxs)(_._, {
                    children: [
                      _.is_free &&
                        (0, _.jsx)(_._, {
                          size: "3",
                          children: _.Localize("#AppPage_DLC_Free"),
                        }),
                      !_.is_free &&
                        _ &&
                        (0, _.jsx)(_._, {
                          purchaseOption: _,
                          size: "inline",
                        }),
                      !_.is_free &&
                        !_ &&
                        (0, _.jsx)(_._, {
                          size: "3",
                          children: _.Localize("#AppPage_DLC_NoPrice"),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              appid: _,
              oTags: _,
              oCreatorLinks: _,
              reviewSummaryRecent: _,
              strIdForReviewSummary: _,
            } = _,
            _ = new Map();
          for (const [_, _] of Object.entries(_)) _.set(_, _);
          const _ = new Map();
          for (const [_, _] of Object.entries(_)) _.set(_, _);
          return (
            _.useLayoutEffect(() => {
              const _ = document.querySelector("#summaryBarTop");
              _ && (_.style.height = "unset");
            }, []),
            _.use(_.Ready()),
            (0, _.jsx)(_.Suspense, {
              children: (0, _.jsxs)(_._, {
                className: _().SummaryBarTop,
                "flow-children": "grid",
                navEntryPreferPosition: _._.MAINTAIN_X,
                resetNavOnEntry: !0,
                children: [
                  (0, _.jsx)(_, {
                    appid: _,
                    recent: _,
                    strIdForReviewSummary: _,
                  }),
                  (0, _.jsx)(_, {
                    appid: _,
                  }),
                  (0, _.jsx)(_, {
                    appid: _,
                    mapTags: _,
                  }),
                  (0, _.jsx)(_, {
                    appid: _,
                    mapCreatorLinks: _,
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)("div", {
            className: _().Title,
            children: (0, _.jsx)(_._, {
              contrast: "title",
              children: _,
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            _ = _.useMemo(
              () => (0, _._)("hardwarecompatibility", "application_config"),
              [],
            ),
            {
              bSteamDeck: _,
              bSteamOS: _,
              bSteamMachine: _,
              bSteamFrame: _,
            } = (0, _._)(),
            [_, _] = _.useMemo(
              () =>
                _
                  ? [_._, _.Localize("#AppPage_SummaryBar_SteamMachineCompat")]
                  : _
                    ? [_._, _.Localize("#AppPage_SummaryBar_SteamFrameCompat")]
                    : _ && !_
                      ? [_._, _.Localize("#AppPage_SummaryBar_SteamOSCompat")]
                      : [
                          _._,
                          _.Localize("#AppPage_SummaryBar_SteamDeckCompat"),
                        ],
              [_, _, _, _],
            );
          return _
            ? (0, _.jsxs)(_._, {
                className: (0, _._)(_().SummaryBarSection, _().SteamDeckCompat),
                children: [
                  (0, _.jsx)(_, {
                    children: _,
                  }),
                  (0, _.jsx)(_, {
                    className: _().SteamDeckCompatContent,
                    appID: _,
                    results: _,
                    tab: _,
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const _ = _.Element?.getBoundingClientRect(),
            _ = _.m_Parent?.Element?.getBoundingClientRect();
          return !_ || !_ ? !1 : _.bottom <= _.bottom;
        }
        function _(_) {
          const { tag: _ } = _,
            _ = (0, _._)(
              _._.STORE_BASE_URL + `tags/${(0, _._)(_._.LANGUAGE)}/${_}`,
            );
          return (0, _.jsx)(_._, {
            className: _().Tag,
            href: _,
            fnCanTakeFocus: _,
            children: (0, _.jsx)(_._, {
              background: "blue-5",
              paddingX: "1",
              paddingY: "0",
              children: (0, _.jsx)(_._, {
                color: "blue-8",
                children: _,
              }),
            }),
          });
        }
        function _(_) {
          const { appid: _, mapTags: _ } = _;
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().SummaryBarSection, _().UserTags),
            focusable: !0,
            children: [
              (0, _.jsx)(_, {
                children: _.Localize("#AppPage_SummaryBar_UserTags"),
              }),
              (0, _.jsx)(_._, {
                className: _().Tags,
                children: Array.from(_.entries()).map(([_, _]) =>
                  (0, _.jsx)(
                    _,
                    {
                      tag: _,
                    },
                    _,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const {
            label: _,
            reviewScoreDescription: _,
            percentage: _,
            count: _,
          } = _;
          return !_ || !_ || _ == null || !_
            ? null
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(_._, {
                    contrast: "body",
                    children: _.Localize(_),
                  }),
                  " ",
                  (0, _.jsx)(_._, {
                    color: "blue-8",
                    children: _,
                  }),
                  " ",
                  (0, _.jsxs)(_._, {
                    contrast: "body",
                    children: [
                      "(",
                      _.Localize("#AppPage_ReviewStats", _, (0, _._)(_)),
                      ")",
                    ],
                  }),
                ],
              });
        }
        function _(_) {
          const { appid: _, recent: _, strIdForReviewSummary: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _.useCallback(() => {
              window.MoveFocusToId(_);
            }, [_]);
          return !_ || !_.summary_filtered?.review_count
            ? null
            : (0, _.jsxs)(_._, {
                className: _().SummaryBarSection,
                onActivate: _,
                children: [
                  (0, _.jsx)(_, {
                    children: _.Localize("#AppPage_SummaryBar_UserReviews"),
                  }),
                  (0, _.jsx)(_, {
                    label: "#AppPage_Reviews_AllTime",
                    reviewScoreDescription:
                      _.summary_filtered?.review_score_label,
                    percentage: _.summary_filtered.percent_positive,
                    count: _.summary_filtered.review_count,
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      label: "#AppPage_Reviews_Recent",
                      reviewScoreDescription: _.description,
                      percentage: _.percentage,
                      count: _.count,
                    }),
                ],
              });
        }
        function _(_) {
          const { appid: _, mapCreatorLinks: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.links_and_info?.manufacturers?.map((_) => ({
              name: _,
            }));
          return _
            ? (0, _.jsxs)(_._, {
                className: (0, _._)(_().SummaryBarSection, _().GameInfo),
                children: [
                  (0, _.jsx)(_, {
                    children: _.Localize("#AppPage_SummaryBar_GameInfo"),
                  }),
                  (0, _.jsx)("table", {
                    children: (0, _.jsxs)("tbody", {
                      children: [
                        (0, _.jsx)(_, {
                          label: "#AppPage_SummaryBar_Developer",
                          strType: "developer",
                          rgCreators: _.developers,
                          mapCreatorLinks: _,
                        }),
                        (0, _.jsx)(_, {
                          label: "#AppPage_SummaryBar_Publisher",
                          strType: "publisher",
                          rgCreators: _.publishers,
                          mapCreatorLinks: _,
                        }),
                        (0, _.jsx)(_, {
                          label: "#AppPage_SummaryBar_Manufacturer",
                          strType: "manufacturer",
                          rgCreators: _,
                        }),
                        !!_?.steam_release_date &&
                          (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)(_._, {
                                  contrast: "body",
                                  children: _.Localize(
                                    "#AppPage_SummaryBar_ReleaseDate",
                                  ),
                                }),
                              }),
                              (0, _.jsx)("td", {
                                children: (0, _.jsx)(_._, {
                                  contrast: "body",
                                  children: (0, _._)(_?.steam_release_date, {
                                    fullmonthname: !1,
                                    bUseRelativeNames: !1,
                                    bIncludeDayName: !1,
                                  }),
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { creator: _, strType: _, mapCreatorLinks: _ } = _,
            _ = (0, _._)(_?.get(_.name)),
            _ = (0, _._)(
              _._.STORE_BASE_URL + `search/?${_}=${encodeURIComponent(_.name)}`,
            ),
            _ = _ || _;
          return (0, _.jsx)(_._, {
            href: _,
            children: (0, _.jsx)(_._, {
              color: "blue-8",
              whiteSpace: "nowrap",
              children: _.name,
            }),
          });
        }
        function _(_) {
          const { label: _, strType: _, rgCreators: _, mapCreatorLinks: _ } = _,
            _ = 4;
          return !_ || _.length == 0
            ? null
            : (0, _.jsxs)("tr", {
                children: [
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)(_._, {
                      contrast: "body",
                      children: _.Localize(_),
                    }),
                  }),
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)(_._, {
                      children: (0, _.jsxs)(_._, {
                        contrast: "body",
                        lineClamp: 3,
                        children: [
                          _(
                            _.slice(0, _),
                            (_) =>
                              (0, _.jsx)(
                                _,
                                {
                                  strType: _,
                                  creator: _,
                                  mapCreatorLinks: _,
                                },
                                _.creator_clan_account_id || _.name,
                              ),
                            {
                              type: "unit",
                              style: "short",
                            },
                          ),
                          _.length > _ &&
                            (0, _.jsx)("span", {
                              children: _.Localize(
                                "#AppPage_SummaryBar_AndMore",
                                _.length - _,
                              ),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              });
        }
        function _(_) {
          const _ = (0, _._)();
          return (
            _.useEffect(() => {
              const { rgPayloads: _, markReady: _ } = _;
              for (let _ of _ || [])
                for (let _ of _.rgStoreItems || [])
                  (0, _._)(_, _, _.dataRequestStoreItems);
              _();
            }, [_, _]),
            null
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { children: _, className: _ } = _,
            {
              setExpanded: _,
              refContents: _,
              bCollapsible: _,
              refPanel: _,
              bExpanded: _,
              bCollapsed: _,
            } = _(),
            _ = _.useCallback(() => {
              _(!_);
            }, [_, _]);
          return (0, _.jsx)(_._, {
            ref: _,
            className: (0, _._)(_().AutoCollapsePanel, _),
            focusableIfEmpty: !0,
            onActivate: _ ? _ : void 0,
            children: (0, _.jsxs)(
              _._,
              {
                focusable: _,
                children: [
                  (0, _.jsx)("div", {
                    ref: _,
                    className: (0, _._)(
                      _().Contents,
                      _ && _().Collapsed,
                      _ && _().Expanded,
                    ),
                    children: _,
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().ReadMore,
                      children: _.Localize(
                        _ ? "#btn_read_less" : "#btn_read_more",
                      ),
                    }),
                ],
              },
              _ ? "collapsed" : "expanded",
            ),
          });
        }
        function _(_) {
          const { children: _, className: _ } = _,
            {
              setExpanded: _,
              refContents: _,
              bCollapsible: _,
              refPanel: _,
              bExpanded: _,
              bCollapsed: _,
            } = _(),
            _ = _.useCallback(
              (_) => {
                _ && _(!0);
              },
              [_],
            ),
            _ = _.useCallback(() => {
              _(!1);
            }, [_]);
          return (0, _.jsxs)(_._, {
            ref: _,
            className: (0, _._)(_().AutoCollapsePanel, _),
            onExplicitFocusLevelChanged: _ ? _ : void 0,
            children: [
              (0, _.jsx)("div", {
                ref: _,
                className: (0, _._)(
                  _().Contents,
                  _ && _().Collapsed,
                  _ && _().Expanded,
                ),
                children: _,
              }),
              _ &&
                !_ &&
                (0, _.jsx)("div", {
                  className: _().ReadMore,
                  children: _.Localize("#btn_read_more"),
                }),
              _ &&
                _ &&
                (0, _.jsx)(_._, {
                  className: _().ReadMore,
                  onActivate: _,
                  children: _.Localize("#btn_read_less"),
                }),
            ],
          });
        }
        function _() {
          const [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            _ = _.useRef(null),
            _ = _.useRef(!1),
            _ = _.useCallback(
              (_) => {
                _ || _(_.target.scrollHeight > _.target.clientHeight);
              },
              [_],
            ),
            _ = (0, _._)(_),
            _ = _ && !_;
          return (
            _.useLayoutEffect(() => {
              _.current &&
                !_ &&
                _.current?.scrollIntoView({
                  block: "nearest",
                }),
                (_.current = !1);
            }, [_]),
            {
              setExpanded: _.useCallback(
                (_) => {
                  _(_), _ || (_.current = !0);
                },
                [_, _],
              ),
              refContents: _,
              refPanel: _,
              bCollapsed: _,
              bExpanded: _,
              bCollapsible: _,
            }
          );
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            });
          return (
            _.use(_.Ready()),
            !_ || _.type == null || !_
              ? null
              : (0, _.jsxs)(_, {
                  className: _().AboutThisGame,
                  "flow-children": "column",
                  children: [
                    (0, _.jsx)("h2", {
                      className: _().Header,
                      children: _.Localize(
                        _.GetAppTypeLocKey("#About_This", _.type),
                      ),
                    }),
                    (0, _.jsx)(_._, {
                      text: _,
                    }),
                  ],
                })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = {
          1: "date_full",
          2: "date_month",
          3: "date_quarter",
          4: "date_year",
        };
        function _(_) {
          const _ = _.release_from_early_access_date,
            _ = _[_.release_from_early_access_style];
          return !_ || !_ ? "" : (0, _._)(_, _);
        }
        function _(_) {
          const { appid: _, staleUpdate: _, bIsAppEditor: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _((_) => !_), []);
          if ((_.use(_.Ready()), !_ || !_)) return null;
          const _ = _.type == _._._,
            _ = !!_.is_coming_soon,
            _ = _(_);
          let _ = "#AppPage_EarlyAccess_Header",
            _ = "#AppPage_EarlyAccess_BannerDesc";
          return (
            _
              ? ((_ = "#AppPage_EarlyAccess_Header_Soon"),
                (_ = "#AppPage_EarlyAccess_BannerDesc_Soon"))
              : _ &&
                ((_ = "#AppPage_EarlyAccess_Header_Software"),
                (_ = "#AppPage_EarlyAccess_BannerDesc_Software")),
            (0, _.jsxs)(_._, {
              className: _().EarlyAccess,
              "flow-children": "column",
              children: [
                !!_ &&
                  (0, _.jsx)("div", {
                    className: _().LeavingEarlyAccess,
                    children: _.Localize("#AppPage_EarlyAccess_LeaveWhen", _),
                  }),
                (0, _.jsxs)(_._, {
                  className: _().Banner,
                  "flow-children": "column",
                  children: [
                    (0, _.jsx)("h2", {
                      className: _().Title,
                      children: _.Localize(_),
                    }),
                    (0, _.jsx)("p", {
                      className: _().Desc,
                      children: _.Localize(_),
                    }),
                    (0, _.jsx)(_._, {
                      onClick: _,
                      children: _.Localize(
                        _
                          ? "#AppPage_EarlyAccess_ShowLess"
                          : "#AppPage_EarlyAccess_ShowMore",
                      ),
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        earlyAccess: _?.early_access,
                        staleUpdate: _,
                        bIsAppEditor: _,
                        bSoftware: _,
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const {
              earlyAccess: _,
              staleUpdate: _,
              bIsAppEditor: _,
              bSoftware: _,
            } = _,
            _ = `${_._.STORE_BASE_URL}earlyaccessfaq/`,
            _ = !!_?.description_bbcode;
          let _;
          _
            ? (_ = [
                {
                  text: _?.description_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_WhatDevsSay",
                },
              ])
            : (_ = [
                {
                  text: _?.why_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Why",
                },
                {
                  text: _?.how_long_bbcode,
                  tokenHeader: _
                    ? "#AppPage_EarlyAccess_HowLong_Software"
                    : "#AppPage_EarlyAccess_HowLong",
                },
                {
                  text: _?.full_version_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_FullVersion",
                },
                {
                  text: _?.current_state_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_CurrentState",
                },
                {
                  text: _?.pricing_bbcode,
                  tokenHeader: _
                    ? "#AppPage_EarlyAccess_Pricing_Software"
                    : "#AppPage_EarlyAccess_Pricing",
                },
                {
                  text: _?.community_bbcode,
                  tokenHeader: "#AppPage_EarlyAccess_Community",
                },
              ]);
          const _ = _.some((_) => !!_.text);
          return (0, _.jsxs)(_._, {
            className: _().Details,
            "flow-children": "column",
            children: [
              (0, _.jsxs)("p", {
                className: _().Warn,
                children: [
                  _.Localize(
                    _
                      ? "#AppPage_EarlyAccess_Warn_Software"
                      : "#AppPage_EarlyAccess_Warn",
                  ),
                  " ",
                  (0, _.jsx)(_._, {
                    className: _().Link,
                    href: _,
                    children: _.Localize("#AppPage_EarlyAccess_LearnMore"),
                  }),
                ],
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  staleUpdate: _,
                  bIsAppEditor: _,
                }),
              _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    !_ &&
                      (0, _.jsx)("div", {
                        className: _().DevsSay,
                        children: _.Localize(
                          "#AppPage_EarlyAccess_WhatDevsSay",
                        ),
                      }),
                    _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          text: _.text,
                          tokenHeader: _.tokenHeader,
                        },
                        _,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { text: _, tokenHeader: _ } = _;
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("h3", {
                    className: _().Question,
                    children: _.Localize(_),
                  }),
                  (0, _.jsx)("div", {
                    className: _().Answer,
                    children: (0, _._)(
                      _.Localize("#AppPage_EarlyAccess_Quote"),
                      (0, _.jsx)(_._, {
                        text: _,
                      }),
                    ),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { staleUpdate: _, bIsAppEditor: _ } = _,
            { nMonthsAgo: _, bNoUpdatesEverPublished: _ } = _;
          let _;
          if (!_ && _) _ = _.Localize("#AppPage_EarlyAccess_NoUpdates");
          else if (_ && _ > 24) {
            const _ = Math.floor(_ / 12);
            _ = _.LocalizePlural("#AppPage_EarlyAccess_StaleYears", _);
          } else _ = _.LocalizePlural("#AppPage_EarlyAccess_StaleMonths", _);
          return (0, _.jsxs)("div", {
            className: _().Stale,
            children: [
              _,
              " ",
              _.Localize("#AppPage_EarlyAccess_StaleWarning2"),
              _ &&
                (0, _.jsx)("div", {
                  className: _().StaleDevs,
                  children: (0, _._)(
                    _.Localize("#AppPage_EarlyAccess_StaleDevs"),
                    (0, _.jsx)(_._, {
                      className: _().Link,
                      href: `${_._.PARTNER_BASE_URL}doc/store/earlyaccess#update_notice`,
                    }),
                  ),
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          _.use(_.Ready());
          const _ = _?.section;
          return _?.length
            ? (0, _.jsx)("div", {
                className: _().PageSections,
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      section: _,
                    },
                    _,
                  ),
                ),
              })
            : null;
        }
        function _(_) {
          const { label: _, content_bbcode: _, banner: _ } = _.section;
          return (0, _.jsxs)(_, {
            className: _().PageSection,
            "flow-children": "column",
            children: [
              _ &&
                (0, _.jsx)("h2", {
                  className: _().Header,
                  children: _,
                }),
              _ &&
                (0, _.jsx)(_._, {
                  text: _,
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return (
            _.use(_.Ready()),
            _?.legal_notice_bbcode
              ? (0, _.jsx)(_, {
                  className: _().LegalNotice,
                  children: (0, _.jsx)(_._, {
                    text: _.legal_notice_bbcode,
                    bBypassLinkFilter: !0,
                  }),
                })
              : null
          );
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.press_review;
          return _?.length
            ? (_.use(_.Ready()),
              (0, _.jsx)(_._, {
                marginTop: "5",
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: _.Localize("#AppPage_PressReviews_Header"),
                    }),
                    _.map((_, _) =>
                      (0, _.jsx)(
                        _,
                        {
                          review: _,
                        },
                        _,
                      ),
                    ),
                  ],
                }),
              }))
            : null;
        }
        function _(_) {
          const { quote: _, score: _, site: _, url: _ } = _.review;
          let _ = _;
          _ && _ && (_ = _.Localize("#AppPage_PressReviews_Quote", _));
          let _ = _;
          _ &&
            _ &&
            (_ = (0, _.jsx)(_._, {
              href: _,
              color: "blue-8",
              children: _,
            }));
          let _ = _;
          return (
            _ && _
              ? (_ = _.LocalizeReact("#AppPage_PressReviews_Attribution", _, _))
              : _ && (_ = _),
            (0, _.jsxs)(_._, {
              marginBottom: "3",
              children: [
                _ &&
                  (0, _.jsx)(_._, {
                    _: "div",
                    size: "2",
                    children: _,
                  }),
                _ &&
                  (0, _.jsx)(_._, {
                    _: "div",
                    size: "2",
                    children: _,
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { strHeading: _, strIntro: _, strBody: _ } = _;
          return (0, _.jsx)(_._, {
            maxWidth: "100%",
            marginTop: "5",
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_._, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: _,
                }),
                (0, _.jsx)(_._, {
                  _: "p",
                  size: "3",
                  marginTop: "3",
                  children: _,
                }),
                (0, _.jsx)(_._, {
                  _: "p",
                  size: "3",
                  whiteSpace: "pre-line",
                  style: {
                    fontStyle: "italic",
                  },
                  children: _,
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.content_survey_ai_notes;
          return _
            ? (_.use(_.Ready()),
              (0, _.jsx)(_, {
                strHeading: _.Localize("#AppPage_AIDisclosure_Header"),
                strIntro: _.Localize("#AppPage_AIDisclosure_Intro"),
                strBody: _,
              }))
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = null,
          _ = [
            {
              descid: _._,
              parentDescID: 0,
              strNameToken: "#ContentDescriptor_GeneralMatureContent",
              strUserDescToken:
                "#ContentDescriptor_GeneralMatureContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: _._,
              parentDescID: _._,
              strNameToken: "#ContentDescriptor_FrequentViolenceOrGore",
              strUserDescToken:
                "#ContentDescriptor_FrequentViolenceOrGore_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: _._,
              parentDescID: _._,
              strNameToken: "#ContentDescriptor_NudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_NudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !1,
            },
            {
              descid: _._,
              parentDescID: _._,
              strNameToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent",
              strUserDescToken:
                "#ContentDescriptor_GratuitousNudityOrSexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
            {
              descid: _._,
              parentDescID: _._,
              strNameToken: "#ContentDescriptor_AdultOnlySexualContent",
              strUserDescToken:
                "#ContentDescriptor_AdultOnlySexualContent_Description",
              bAllowSearch: !0,
              bCustomerFacing: !0,
              bAdultsOnly: !0,
            },
          ];
        function _() {
          return _;
        }
        function _(_) {
          return _.find((_) => _.descid === _);
        }
        function _(_) {
          return _.some((_) => _(_)?.bAdultsOnly);
        }
        function _(_, _) {
          return !_.bAdultsOnly || !_.includes(_);
        }
        function _(_, _) {
          return _.some((_) => {
            const _ = _(_);
            return _ && !_(_, _);
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.content_descriptorids;
          if (
            !_ ||
            _.type == null ||
            !_?.length ||
            _ === void 0 ||
            (0, _._)(_._.EREALM)
          )
            return null;
          _.use(_.Ready()), _.use(_._.Ready());
          let _ = _?.content_survey_notes;
          if (!_) {
            const _ = [];
            for (const _ of _) {
              const _ = _(_);
              _?.bCustomerFacing && _.push(_._.Localize(_.strNameToken));
            }
            _ = _.Localize(
              _.GetAppTypeLocKey("#AppPage_MatureContent_Descriptors", _.type),
              new Intl.ListFormat((0, _._)(), {
                type: "unit",
                style: "short",
              }).format(_),
            );
          }
          return (0, _.jsx)(_, {
            strHeading: _.Localize("#AppPage_MatureContent_Header"),
            strIntro: _.Localize("#AppPage_AgeGate_DescriptorNotes"),
            strBody: _,
          });
        }
        const _ = [
          {
            role: "directors",
            strTitleToken: "#AppPage_CastAndCrew_DirectedBy",
          },
          {
            role: "producers",
            strTitleToken: "#AppPage_CastAndCrew_ProducedBy",
          },
          {
            role: "writers",
            strTitleToken: "#AppPage_CastAndCrew_WrittenBy",
          },
          {
            role: "music",
            strTitleToken: "#AppPage_CastAndCrew_MusicBy",
          },
          {
            role: "actors",
            strTitleToken: "#AppPage_CastAndCrew_Starring",
          },
        ];
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.cast_and_crew,
            _ = _.filter(({ role: _ }) => _?.[_]?.length);
          return !_ || !_.length
            ? null
            : (_.use(_.Ready()),
              (0, _.jsx)(_._, {
                marginTop: "5",
                children: (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_._, {
                      level: "2",
                      size: "2",
                      weight: "heavy",
                      contrast: "title",
                      children: _.Localize("#AppPage_CastAndCrew_Header"),
                    }),
                    (0, _.jsx)(_._, {
                      columns: "150px 1fr",
                      marginTop: "2",
                      children: _.map(({ role: _, strTitleToken: _ }) =>
                        (0, _.jsx)(
                          _,
                          {
                            strTitle: _.Localize(_),
                            rgNames: _[_],
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
              }));
        }
        function _(_) {
          const { strTitle: _, rgNames: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                _: "div",
                size: "4",
                weight: "heavy",
                contrast: "subtitle",
                children: _,
              }),
              (0, _.jsx)(_._, {
                _: "div",
                size: "4",
                contrast: "subtitle",
                children: _(
                  _,
                  (_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        strName: _,
                      },
                      _,
                    ),
                  {
                    type: "unit",
                    style: "short",
                  },
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { strName: _ } = _,
            _ = (0, _._)(
              `${_._.STORE_BASE_URL}search/?term=${encodeURIComponent(_)}`,
            );
          return (0, _.jsx)(_._, {
            href: _,
            contrast: "title",
            children: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = !1) {
          return (_ / 60).toFixed(_ || _ < 1200 ? 1 : 0);
        }
        function _(_) {
          const { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _?.your_info;
          if (!_?.owned || !_.minutes_played_forever) return null;
          const _ = !!_?.categories?.feature_categoryids?.includes(_.Vb8);
          return {
            nMinutesForever: _.minutes_played_forever,
            nMinutesLastTwoWeeks: _.minutes_played ?? 0,
            bShowStatsLinks: _ && !(0, _._)(_._.EREALM),
            nSteamworksAppid: _,
          };
        }
        function _(_) {
          const {
              nMinutesForever: _,
              nMinutesLastTwoWeeks: _,
              bShowStatsLinks: _,
              nSteamworksAppid: _,
            } = _.stats,
            { data: _ } = (0, _._)(_._.steamid);
          _.use(_.Ready());
          const _ = `${(0, _._)(_, _._.steamid)}/stats/appid/${_}`,
            _ = (0, _._)({
              appid: _,
            });
          return (0, _.jsxs)(_._, {
            direction: "column",
            children: [
              (0, _.jsxs)(_._, {
                size: "3",
                color: "slate-11",
                children: [
                  _ > 0 &&
                    `${_.Localize("#AppPage_MyActivity_HoursLastTwoWeeks", _(_))} / `,
                  _.Localize("#AppPage_MyActivity_HoursOnRecord", _(_)),
                ],
              }),
              _ &&
                (0, _.jsxs)(_._, {
                  gap: "2",
                  children: [
                    (0, _.jsx)(_._, {
                      size: "3",
                      color: "blue-8",
                      href: _,
                      children: _.Localize("#AppPage_MyActivity_ViewStats"),
                    }),
                    (0, _.jsx)(_._, {
                      size: "3",
                      color: "blue-8",
                      href: _,
                      children: _.Localize(
                        "#AppPage_MyActivity_ViewGlobalStats",
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return ((0, _._)(_._.EREALM) ? "steamchina://" : "steam://") + _;
        }
        function _(_) {
          const {
              appid: _,
              bOwned: _,
              masterSub: _,
              timedTrial: _,
              playAppid: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _(_);
          if (!_ || (!_ && !_)) return null;
          _.use(_.Ready());
          const _ = _.type == _._._,
            _ = !!_ && _.nSecondsRemaining == 0 && !!_?.subscription,
            _ = _ && !_ && !_;
          return (0, _.jsxs)(_._, {
            direction: "column",
            paddingX: "5",
            paddingY: "3",
            background: "greyneutral-2 80%",
            children: [
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  masterSub: _,
                  bTrial: !!_,
                }),
              _ &&
                !_ &&
                (0, _.jsx)(_, {
                  strAppName: _.name ?? "",
                }),
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  subscription: _.subscription,
                }),
              _ &&
                (0, _.jsx)(_, {
                  strAppName: _.name ?? "",
                  masterSub: _,
                  timedTrial: _,
                }),
              (0, _.jsxs)(_._, {
                className: _().Actions,
                "flow-children": "row",
                children: [
                  _ &&
                    _ !== null &&
                    (0, _.jsx)(_, {
                      appid: _,
                      eType: _.type,
                    }),
                  _ &&
                    !!_ &&
                    (0, _.jsx)(_, {
                      nSecondsRemaining: _.nSecondsRemaining,
                    }),
                  !!_ &&
                    (0, _.jsx)(_, {
                      stats: _,
                    }),
                ],
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)(_._, {
            className: _().InLibraryFlag,
            gap: "1",
            flexShrink: "0",
            align: "center",
            height: "18px",
            paddingX: "1",
            background: "storegreen-10",
            children: [
              (0, _.jsx)(_.wpD, {
                className: _().InLibrarySVG,
              }),
              (0, _.jsx)(_._, {
                size: "1",
                color: "slate-1",
                children: _.Localize("#AppPage_Owned_InLibraryFlag"),
              }),
            ],
          });
        }
        function _(_) {
          const { strAppName: _ } = _;
          return (0, _.jsxs)(_._, {
            gap: "2",
            justify: "between",
            paddingBottom: "3",
            className: _().InLibraryRow,
            children: [
              (0, _.jsx)(_._, {
                size: "4",
                color: "storegreen-10",
                children: _.Localize("#AppPage_Owned_AlreadyInLibrary", _),
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _(_) {
          const { masterSub: _, bTrial: _ } = _,
            { strPackageName: _, subscription: _ } = _,
            _ = _
              ? "#AppPage_Owned_MasterSubTrialHeader"
              : "#AppPage_Owned_MasterSubHeader";
          return (0, _.jsxs)(_._, {
            align: "center",
            gap: "2",
            children: [
              _?.strBadgeImage
                ? (0, _.jsx)(_._, {
                    background: "blue-7",
                    justify: "center",
                    align: "center",
                    paddingY: "1",
                    paddingLeft: "2",
                    paddingRight: "5",
                    children: (0, _.jsx)(_._, {
                      src: _.strBadgeImage,
                      alt: "",
                      height: "18px",
                    }),
                  })
                : (0, _.jsx)(_, {}),
              (0, _.jsx)(_._, {
                flexGrow: "0",
                children: (0, _.jsx)(_._, {
                  size: "4",
                  color: "storegreen-10",
                  children: _.Localize(_, _),
                }),
              }),
              !!_ &&
                (0, _.jsx)(_._, {
                  flexShrink: "0",
                  children: (0, _.jsx)(_._, {
                    href: _.strInfoURL,
                    size: "2",
                    color: "text-light",
                    underline: "always",
                    children: _.Localize(
                      "#AppPage_Owned_MasterSubBrowse",
                      _.strName,
                    ),
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const { strAppName: _, masterSub: _, timedTrial: _ } = _,
            _ = _?.subscription;
          let _ = null;
          if (_) {
            const _ = (0, _._)(_.nSecondsAllowed, {
              eSuffix: _._.None,
            });
            _
              ? (_ = (0, _._)(
                  _.Localize("#AppPage_Owned_TrialWithMasterSub", _, _.strName),
                  (0, _.jsx)(_._, {
                    href: _.strInfoURL,
                  }),
                ))
              : (_ = _.Localize("#AppPage_Owned_TrialFree", _, _));
          } else
            _ &&
              (_ = (0, _._)(
                _.Localize("#AppPage_Owned_MasterSubDesc", _.strName),
                (0, _.jsx)(_._, {
                  href: _.strInfoURL,
                }),
              ));
          return _
            ? (0, _.jsx)(_._, {
                size: "3",
                marginTop: "3",
                children: _,
              })
            : null;
        }
        function _(_) {
          const { subscription: _ } = _;
          return (0, _.jsx)(_._, {
            size: "3",
            marginTop: "3",
            children: (0, _._)(
              _.Localize("#AppPage_Owned_TrialEnded", _.strName),
              (0, _.jsx)(_._, {
                href: _.strInfoURL,
              }),
            ),
          });
        }
        function _(_) {
          const { appid: _, eType: _ } = _;
          let _ = "#AppPage_Owned_Play";
          return (
            _ == _._._
              ? (_ = "#AppPage_Owned_Use")
              : _ == _._._
                ? (_ = "#AppPage_Owned_Watch")
                : _ == _._._ && (_ = "#AppPage_Owned_PlayMusic"),
            (0, _.jsx)(_._, {
              focusable: !0,
              color: "blue",
              href: _(`launch/${_}/Dialog`),
              children: _.Localize(_),
            })
          );
        }
        function _(_) {
          const { nSecondsRemaining: _ } = _;
          return _ <= 0
            ? null
            : (0, _.jsx)(_._, {
                size: "4",
                color: "text-light",
                children: (0, _._)(_, {
                  eSuffix: _._.Remaining,
                }),
              });
        }
        const _ = {
            [_._._]: void 0,
            [_._._]: "#AppPage_Series_Type_Episode",
            [_._._]: "#AppPage_Series_Type_Chapter",
            [_._._]: "#AppPage_Series_Type_Bonus",
            [_._._]: "#AppPage_Series_Type_BehindTheScenes",
            [_._._]: "#AppPage_Series_Type_Deleted",
          },
          _ = {
            [_._._]: "#AppPage_Series_ExtrasNote_Purchase",
            [_._._]: "#AppPage_Series_ExtrasNote_Rental",
            [_._._]: "#AppPage_Series_ExtrasNote_PurchaseRental",
            [_._._]: "#AppPage_Series_ExtrasNote_PurchaseSpecialEdition",
            [_._._]: "#AppPage_Series_ExtrasNote_PurchaseDeluxeEdition",
          };
        function _(_) {
          return _ === _._._ || _ === _._._;
        }
        const _ = {
          "#Season_Number": "#AppPage_Series_SeasonName_Season",
          "#Section_Number": "#AppPage_Series_SeasonName_Section",
          "#Volume_Number": "#AppPage_Series_SeasonName_Volume",
          "#Tutorial_Content": "#AppPage_Series_SeasonName_TutorialContent",
          "#Additional_Content": "#AppPage_Series_SeasonName_AdditionalContent",
          "#Series_Content": "#AppPage_Series_ContentTitle",
          "#Extra_Content": "#AppPage_Series_ExtraContent",
        };
        function _(_) {
          const _ = _.name && _[_.name];
          return _ ? _.Localize(_, _.index || 0) : _.name;
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)({
            queries: _.map((_) => _(_, _)),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { season: _, episode: _ } = (0, _._)();
          return (0, _.jsx)(_, {
            appid: _,
            nRequestedSeason: _ ? Number(_) : void 0,
            nRequestedEpisode: _ ? Number(_) : void 0,
          });
        }
        function _(_) {
          const { appid: _, nRequestedSeason: _, nRequestedEpisode: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.seasons || [],
            [_, _] = _.useState(_.some((_) => _.index === _) ? _ : _[0]?.index),
            [_, _] = _.useState(!1);
          if (!_ || (!_.length && _.type !== _._._)) return null;
          if ((_.use(_.Ready()), !_.length))
            return (0, _.jsxs)(_._, {
              marginTop: "5",
              children: [
                (0, _.jsx)(_._, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children: _.Localize("#AppPage_Series_ContentTitle"),
                }),
                (0, _.jsx)(_._, {
                  _: "p",
                  size: "4",
                  contrast: "subtitle",
                  children: _.Localize("#AppPage_Series_NoContent"),
                }),
              ],
            });
          const _ = _.find((_) => _.index === _) || _[0],
            _ = (_) => {
              _(_), _(!0);
            };
          return (0, _.jsx)(_._, {
            marginTop: "5",
            children: (0, _.jsxs)(_._, {
              "flow-children": "column",
              children: [
                (0, _.jsx)(_._, {
                  level: "2",
                  size: "2",
                  weight: "heavy",
                  contrast: "title",
                  children:
                    _.length > 1
                      ? _.Localize("#AppPage_Series_ContentTitle")
                      : _(_),
                }),
                _.length > 1 &&
                  (0, _.jsx)(_._, {
                    wrap: "wrap",
                    gap: "2",
                    marginTop: "2",
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _._,
                        {
                          variant: _ === _ ? "default" : "outline",
                          onClick: () => _(_.index),
                          children: _(_),
                        },
                        _.index,
                      ),
                    ),
                  }),
                _.type === _._._ &&
                  (0, _.jsx)(_, {
                    appName: _.name,
                    season: _,
                    eNote: _?.video_extras_note,
                  }),
                (0, _.jsx)(
                  _,
                  {
                    season: _,
                    series: _,
                    strSeriesHeaderImage:
                      _?.asset_url_format && _.header
                        ? _(_.asset_url_format, _.header)
                        : void 0,
                    bFocusFirstEpisode: _,
                    nActiveEpisode: !_ && _.index === _ ? (_ ?? 0) : 0,
                  },
                  _.index,
                ),
              ],
            }),
          });
        }
        function _(_) {
          const { appName: _, season: _, eNote: _ } = _,
            _ = _(
              (_.episode_appids || []).map((_) => ({
                appid: _,
              })),
              _._,
            );
          let _ = 0,
            _ = 0;
          for (const { data: _ } of _)
            _?.episode?.type !== void 0 && !_(_.episode.type) && _++,
              (_ += _?.running_time_minutes || 0);
          return (0, _.jsxs)(_._, {
            marginTop: "2",
            children: [
              (0, _.jsx)(_._, {
                _: "div",
                size: "3",
                contrast: "description",
                children: _.LocalizePlural(
                  "#AppPage_Series_ExtrasSummary",
                  _,
                  _,
                ),
              }),
              (0, _.jsx)(_._, {
                _: "div",
                size: "3",
                contrast: "subtitle",
                marginTop: "1",
                children: _.Localize(_[_ ?? _._._], _ || ""),
              }),
            ],
          });
        }
        function _(_) {
          const {
              season: _,
              series: _,
              strSeriesHeaderImage: _,
              bFocusFirstEpisode: _,
              nActiveEpisode: _,
            } = _,
            _ = _.episode_appids || [],
            _ = _(
              _.map((_) => ({
                appid: _,
              })),
              _._,
            );
          return (0, _.jsx)(_._, {
            marginTop: "3",
            children: (0, _.jsxs)(_._, {
              "flow-children": "column",
              children: [
                _.every(({ data: _, isPending: _ }) => !_ && !_?.visible) &&
                  (0, _.jsx)(_._, {
                    _: "div",
                    size: "3",
                    contrast: "subtitle",
                    marginBottom: "2",
                    children: (0, _._)(
                      _.Localize("#AppPage_Series_SeasonNotAvailable"),
                      (0, _.jsx)("b", {}),
                    ),
                  }),
                _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      appid: _,
                      nSeason: _.index || 0,
                      nPosition: _ + 1,
                      series: _,
                      strSeriesHeaderImage: _,
                      bActive: _ + 1 === _,
                      bAutoFocus: _ && _ === 0,
                    },
                    _,
                  ),
                ),
              ],
            }),
          });
        }
        function _(_) {
          const {
              appid: _,
              nSeason: _,
              nPosition: _,
              series: _,
              strSeriesHeaderImage: _,
              bActive: _,
              bAutoFocus: _,
            } = _,
            _ = _.useRef(null),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            });
          _.useEffect(() => {
            _ &&
              _.current?.scrollIntoView({
                block: "center",
              });
          }, [_]);
          const _ = !!_?.visible,
            _ = _?.episode,
            _ = !_ || !!_?.hide_details,
            _ = `${_.name}: `;
          let _ = _?.name || "";
          _.startsWith(_) && (_ = _.slice(_.length));
          let _ = _?.number || String(_);
          _ &&
            ((_ = String(_)),
            (_ = _.Localize(
              "#AppPage_Series_EpisodePlaceholder",
              String(_).padStart(2, "0"),
              String(_).padStart(2, "0"),
            )));
          let _ = _;
          _(_?.type) && (_ = _.Localize("#AppPage_Series_EpisodeName", _, _));
          let _;
          if (_?.type === _._._ && _) {
            const _ = _?.original_release_date || _?.steam_release_date;
            _ &&
              ((_ = (0, _._)(_)),
              _.is_coming_soon &&
                (_ = _.Localize("#AppPage_Series_AvailableOn", _)));
          } else {
            const _ = _?.type !== void 0 ? _[_.type] : void 0;
            _ = _ && _.Localize(_);
          }
          const _ =
            _?.asset_url_format && _.header
              ? _(_.asset_url_format, _.header)
              : _;
          return (0, _.jsxs)(_._, {
            ref: _,
            focusable: !0,
            navProps: {
              autoFocus: _,
            },
            columns: "160px 1fr auto",
            gap: "3",
            padding: "2",
            marginBottom: "2",
            background: _ ? "blue-3 60%" : "greyneutral-3 60%",
            onClick:
              _ && _?.is_free && !_.is_coming_soon
                ? () => {
                    window.location.href = _(`run/${_}`);
                  }
                : void 0,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    src: _,
                    alt: "",
                    width: "100%",
                  }),
                }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    _: "div",
                    size: "4",
                    weight: "heavy",
                    contrast: "title",
                    children: _,
                  }),
                  (0, _.jsxs)(_._, {
                    _: "div",
                    size: "2",
                    contrast: "description",
                    children: [
                      _ &&
                        (0, _.jsx)(_._, {
                          marginEnd: "3",
                          children: _,
                        }),
                      !_ &&
                        !!_?.running_time_minutes &&
                        _.LocalizePlural(
                          "#AppPage_Series_RunningTime",
                          _.running_time_minutes,
                        ),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    _: "div",
                    size: "3",
                    contrast: "body",
                    whiteSpace: "pre-line",
                    marginTop: "1",
                    children: _
                      ? _.Localize("#AppPage_Series_DescriptionNotAvailable")
                      : _?.short_description,
                  }),
                ],
              }),
              _ &&
                _?.is_free &&
                (0, _.jsxs)(_._, {
                  textAlign: "end",
                  children: [
                    (0, _.jsx)(_._, {
                      _: "div",
                      size: "3",
                      contrast: "title",
                      children: _.Localize("#AppPage_Series_Free"),
                    }),
                    _.is_coming_soon
                      ? (0, _.jsx)(_._, {
                          _: "div",
                          size: "3",
                          contrast: "description",
                          marginTop: "1",
                          children: _.Localize("#AppPage_Series_ComingSoon"),
                        })
                      : (0, _.jsx)(_._, {
                          color: "storegreen",
                          focusable: !1,
                          marginTop: "1",
                          children: _.Localize("#AppPage_Series_Watch"),
                        }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return _(_)
            ? (0, _._)("#Language_" + (0, _.LgB)(_.elanguage))
            : _(_)
              ? (0, _._)("#language_ext_" + (0, _.c6v)(_.eadditionallanguage))
              : (0, _._)("#language_selection_none");
        }
        function _(_) {
          if (!_) return [];
          const _ = [];
          for (let _ = 0; _ < _.length; _++)
            _[_.length - _ - 1] == "1" && _.push(_);
          return _;
        }
        function _(_) {
          if (!_) return [];
          const _ = [],
            _ = BigInt(_);
          for (let _ = _.Bhc; _ < _.bP9; _++)
            (_ >> BigInt(_)) & BigInt(1) && _.push(_);
          return _;
        }
        function _(_) {
          return _.elanguage != null && _.elanguage != -1;
        }
        function _(_) {
          return _.eadditionallanguage != null && _.eadditionallanguage != -1;
        }
        function _(_, _) {
          let _;
          if (!_ || !_?.length)
            return {
              rgSorted: [],
              nForceVisible: 0,
              firstPreferredLanguage: _,
            };
          const _ = [],
            _ = [(0, _._)(_), ..._(_.preferences?.secondary_languages)].filter(
              (_) => _ != null,
            ),
            _ = new Set();
          for (const _ of _) {
            const _ = _.findIndex((_) => _.elanguage == _);
            _ != -1 &&
              (_.push({
                ..._[_],
                preferred: !0,
              }),
              _.add(_),
              _ ||
                (_ = {
                  ..._[_],
                  preferred: !0,
                }));
          }
          const _ = _(_.preferences?.additional_languages),
            _ = new Set();
          for (const _ of _) {
            const _ = _.findIndex((_) => _.eadditionallanguage == _);
            _ != -1 &&
              (_.push({
                ..._[_],
                preferred: !0,
              }),
              _.add(_));
          }
          const _ = _.length;
          for (const _ of _)
            if (_(_)) {
              if (_.has(_.elanguage)) continue;
              _.push({
                ..._,
                preferred: !1,
              }),
                _.add(_.elanguage);
            } else if (_(_)) {
              if (_.has(_.elanguage)) continue;
              _.push({
                ..._,
                preferred: !1,
              }),
                _.add(_.eadditionallanguage);
            }
          return {
            rgSorted: _,
            nForceVisible: _,
            firstPreferredLanguage: _,
          };
        }
        function _(_) {
          const { appid: _, initialOpen: _ } = _,
            [_, _] = (0, _.useState)(_ ?? !1),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)("md"),
            _ = _.useId(),
            {
              rgSorted: _,
              nForceVisible: _,
              firstPreferredLanguage: _,
            } = _.useMemo(() => _(_, _ ?? []), [_, _]);
          if (!_.length || !_ || _.type == _._._) return null;
          const _ = _.type == _._._ || _.type == _._._,
            _ = _ ? _().CheckColumn : _().IconColumn,
            _ = _ ? _ : _;
          return (0, _.jsxs)(_._, {
            className: _().Details,
            focusableIfEmpty: !0,
            open: _,
            onToggle: (_) => _(_.currentTarget.open),
            children: [
              (0, _.jsxs)(
                _._,
                {
                  className: _().Summary,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().ImageContainer,
                      children: (0, _.jsx)(_.vCk, {
                        className: _().Image,
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().TextBox,
                      children: [
                        (0, _.jsx)(_._, {
                          color: "blue-8",
                          children: _.Localize(
                            "#languages_supported",
                            _.length,
                          ),
                        }),
                        !_ &&
                          (0, _.jsx)(_, {
                            language: _,
                          }),
                      ],
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().Open,
                        children: "-",
                      }),
                    !_ &&
                      (0, _.jsx)("div", {
                        className: _().Closed,
                        children: "+",
                      }),
                  ],
                },
                _ ? "open" : "closed",
              ),
              (0, _.jsxs)(_._, {
                className: _().LanguageGrid,
                focusable: _,
                children: [
                  !_ &&
                    (0, _.jsxs)("div", {
                      className: _().Legend,
                      children: [
                        (0, _.jsx)(_._, {
                          color: "greyneutral-11",
                          children: _.Localize("#language_header_subtitles"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().LegendIconContainer,
                          children: (0, _.jsx)(_._b5, {
                            className: _().LegendIcon,
                          }),
                        }),
                        (0, _.jsx)(_._, {
                          color: "greyneutral-11",
                          children: _.Localize(
                            "#language_header_full_audio_short",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().LegendIconContainer,
                          children: (0, _.jsx)(_.fSs, {
                            className: _().LegendIcon,
                          }),
                        }),
                      ],
                    }),
                  (0, _.jsxs)("table", {
                    className: _().LanguageTable,
                    children: [
                      (0, _.jsxs)("colgroup", {
                        children: [
                          (0, _.jsx)("col", {
                            className: _().LanguageName,
                          }),
                          (0, _.jsx)("col", {
                            className: _,
                          }),
                          (0, _.jsx)("col", {
                            className: _,
                          }),
                          _ &&
                            (0, _.jsx)("col", {
                              className: _,
                            }),
                        ],
                      }),
                      _ &&
                        (0, _.jsx)("thead", {
                          children: (0, _.jsxs)("tr", {
                            children: [
                              (0, _.jsx)("th", {}),
                              (0, _.jsx)("th", {
                                children: (0, _.jsx)(_._, {
                                  color: "greyneutral-11",
                                  children: _.Localize(
                                    _
                                      ? "#language_header_interface_video"
                                      : "#language_header_interface",
                                  ),
                                }),
                              }),
                              (0, _.jsx)("th", {
                                children: (0, _.jsx)(_._, {
                                  color: "greyneutral-11",
                                  children: _.Localize(
                                    "#language_header_subtitles",
                                  ),
                                }),
                              }),
                              (0, _.jsx)("th", {
                                children: (0, _.jsx)(_._, {
                                  color: "greyneutral-11",
                                  children: _.Localize(
                                    "#language_header_full_audio",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      (0, _.jsx)("tbody", {
                        children: _.map((_, _) =>
                          (0, _.jsx)(
                            _,
                            {
                              language: _,
                            },
                            _,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { language: _ } = _,
            { data: _ } = (0, _._)();
          if (!_) return null;
          if (!_ || (!_.supported && !_.subtitles && !_.full_audio))
            return (0, _.jsx)(_._, {
              color: "blue-8",
              children: (0, _._)("#Language_" + (0, _.LgB)((0, _._)(_))),
            });
          {
            let _;
            return (
              _.full_audio
                ? _.subtitles
                  ? (_ = "#language_supported_subtitles_audio")
                  : (_ = "#language_supported_audio")
                : _.subtitles
                  ? (_ = "#language_supported_subtitles")
                  : (_ = "#language_supported_interface"),
              (0, _.jsx)(_._, {
                color: "storegreen-7",
                children: _.Localize(_, _(_)),
              })
            );
          }
        }
        function _(_) {
          const { language: _ } = _,
            _ = (0, _._)("md");
          return !_.supported && !_.full_audio && !_.subtitles
            ? (0, _.jsxs)("tr", {
                className: (0, _._)(_.preferred && _().Preferred),
                children: [
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)(_._, {
                      color: _.preferred ? "storegreen-7" : "blue-8",
                      children: _(_),
                    }),
                  }),
                  (0, _.jsx)("td", {
                    colSpan: 3,
                    children: _.Localize("#language_not_supported"),
                  }),
                ],
              })
            : (0, _.jsxs)("tr", {
                className: (0, _._)(_.preferred && _().Preferred),
                children: [
                  (0, _.jsx)("td", {
                    className: _().Name,
                    children: _(_),
                  }),
                  (0, _.jsx)("td", {
                    children:
                      (_.supported &&
                        (0, _.jsx)("span", {
                          children: "\u2714",
                        })) ||
                      (0, _.jsx)(_.Fragment, {}),
                  }),
                  (0, _.jsx)("td", {
                    children:
                      (_.subtitles &&
                        (0, _.jsx)("span", {
                          children: "\u2714",
                        })) ||
                      (0, _.jsx)(_.Fragment, {}),
                  }),
                  (0, _.jsx)("td", {
                    children:
                      (_.full_audio &&
                        (0, _.jsx)("span", {
                          children: "\u2714",
                        })) ||
                      (0, _.jsx)(_.Fragment, {}),
                  }),
                ],
              });
        }
        function _(_) {
          const { language: _ } = _;
          return !_.supported && !_.full_audio && !_.subtitles
            ? (0, _.jsx)("tr", {
                className: (0, _._)(_.preferred && _().Preferred),
                children: (0, _.jsx)("td", {
                  colSpan: 3,
                  children: _.Localize("#language_not_supported_inline", _(_)),
                }),
              })
            : (0, _.jsxs)("tr", {
                className: (0, _._)(_.preferred && _().Preferred),
                children: [
                  (0, _.jsx)("td", {
                    className: _().Name,
                    children: _(_),
                  }),
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)("div", {
                      className: _().SmallIcon,
                      children:
                        (_.subtitles && (0, _.jsx)(_._b5, {})) ||
                        (0, _.jsx)(_.Fragment, {}),
                    }),
                  }),
                  (0, _.jsx)("td", {
                    children: (0, _.jsx)("div", {
                      className: _().SmallIcon,
                      children:
                        (_.full_audio && (0, _.jsx)(_.fSs, {})) ||
                        (0, _.jsx)(_.Fragment, {}),
                    }),
                  }),
                ],
              });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            marginBottom: "2",
            children: (0, _.jsx)(_._, {
              contrast: "title",
              size: "2",
              weight: "heavy",
              style: {
                letterSpacing: "0.5px",
              },
              children: _.text,
            }),
          });
        }
        function _(_) {
          const { appid: _, rgCategories: _, controllersUsed: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _.useMemo(() => {
              const _ = new Set(_?.categories?.feature_categoryids ?? []);
              return (
                _?.categories?.supported_player_categoryids?.forEach((_) =>
                  _.add(_),
                ),
                _?.categories?.controller_categoryids?.forEach((_) => _.add(_)),
                _
              );
            }, [_]),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ =
              _?.purchase_options?.find(
                (_) =>
                  _.free_with_master_sub_appid &&
                  _.free_with_master_sub_appid != _._,
              )?.free_with_master_sub_appid ?? _._;
          if (
            (_.use(_.Ready()),
            _.use(_._.Ready()),
            !_ || _.type == null || _?.type == _._._ || !_)
          )
            return null;
          const _ = _.filter((_) => _.has(_.categoryid ?? 0));
          if (_.type == _._._ && _.length == 0) return null;
          const { vetted: _ } = _;
          return (0, _.jsxs)(_._, {
            className: _().CategorySection,
            "flow-children": "column",
            children: [
              (0, _.jsx)(_, {
                text: _.Localize("#AppPage_Features"),
              }),
              (0, _.jsxs)(_._, {
                color: "blue-8",
                size: "2",
                children: [
                  _.length > 0 &&
                    (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)(_._, {
                        className: _().CategoryLinks,
                        "flow-children": "column",
                        children: _.map((_, _) =>
                          (0, _.jsx)(
                            _,
                            {
                              category: _,
                            },
                            _,
                          ),
                        ),
                      }),
                    }),
                  !_ &&
                    (0, _.jsx)(_, {
                      appid: _,
                    }),
                  (0, _.jsx)(_.AccessibilityFeatureDisplay, {
                    features: (0, _.AccessibilityFeaturesFromCategories)(
                      _?.categories?.feature_categoryids ?? [],
                    ),
                  }),
                  (0, _.jsx)(_, {
                    appid: _,
                  }),
                  (0, _.jsx)(_, {
                    ..._(_, _, _, _),
                  }),
                  (0, _.jsxs)(_._, {
                    color: "gold-11",
                    children: [
                      (0, _.jsx)(_, {
                        extraDetails: _,
                      }),
                      (0, _.jsx)(_, {
                        extraDetails: _,
                      }),
                      (0, _.jsx)(_, {
                        extraDetails: _,
                      }),
                      (0, _.jsx)(_, {
                        eulas: _.eula ?? [],
                      }),
                      _ != _._ &&
                        (0, _.jsx)(_, {
                          appid: _,
                        }),
                      (0, _.jsx)(_, {
                        extraDetails: _,
                      }),
                      (0, _.jsx)(_, {
                        extraDetails: _,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          switch (_.categoryid) {
            case _.Wmb:
            case _.q0f:
              return "category1=" + _.categoryid;
            case _.PBc:
              return "vrsupport=401";
            case _.zWR:
              return "vrsupport=402";
            default:
              return "category2=" + _.categoryid;
          }
        }
        function _(_) {
          return (
            _ == _.Y5S ||
            _ == _.mv5 ||
            (_ >= _.KH9 && _ <= _.fui) ||
            (_ >= _.mWc && _ <= _.vVO)
          );
        }
        function _(_) {
          const { category: _ } = _,
            _ = (0, _._)(`${_._.STORE_BASE_URL}search/?${_(_)}`);
          return _(_.categoryid)
            ? null
            : (0, _.jsxs)(_._, {
                href: _,
                className: (0, _._)(_().SearchLink),
                children: [
                  (0, _.jsx)("div", {
                    className: _().IconContainer,
                    children: (0, _.jsx)("img", {
                      className: _().Icon,
                      src: `${_._.IMG_URL}/${_.image_path}`,
                      alt: "",
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    className: _().FeatureString,
                    marginLeft: "2",
                    children: _.Localize(_.display_name),
                  }),
                ],
              });
        }
        const _ = 60;
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            });
          if (!_ || _._.EREALM == _._.k_ESteamRealmChina) return null;
          const _ = _?.steam_release_date ?? 0,
            _ = _ != 0 && Date.now() / 1e3 - _ < 86400 * _;
          let _, _;
          switch (_.type) {
            case _._._:
              (_ = _
                ? "#feature_learning_about_game"
                : "#feature_profile_features_limited"),
                (_ = "#feature_learning_about_desc_game");
              break;
            case _._._:
              (_ = _
                ? "#feature_learning_about_software"
                : "#feature_profile_features_limited"),
                (_ = "#feature_learning_about_desc_software");
              break;
            case _._._:
              (_ = _
                ? "#feature_learning_about_dlc"
                : "#feature_profile_features_limited"),
                (_ = "#feature_learning_about_desc_dlc");
              break;
            case _._._:
              (_ = _
                ? "#feature_learning_about_mod"
                : "#feature_profile_features_limited"),
                (_ = "#feature_learning_about_desc_mod");
              break;
          }
          if (!_ || !_) return null;
          const _ = `${_._.IMG_URL}v6/ico/${_ ? "ico_learning_about_game.png" : "ico_info.png"}`;
          return (0, _.jsxs)(_._, {
            className: _().LearningAbout,
            children: [
              (0, _.jsx)("div", {
                className: _().IconContainer,
                children: (0, _.jsx)("img", {
                  className: _().Icon,
                  src: _,
                  alt: "",
                }),
              }),
              (0, _.jsxs)(_._, {
                className: _().FeatureString,
                marginLeft: "2",
                children: [_.Localize(_), " "],
              }),
            ],
          });
        }
        function _(_, _, _, _) {
          const {
              controller_wizard_complete: _,
              no_mouse_keyboard_support: _,
            } = _,
            _ =
              !!_.has_any_controller &&
              !_.has_ps4_controller &&
              !_.has_ps5_controller &&
              !_.has_xbox_controller;
          return {
            unAppID: _,
            bFullXboxControllerSupport: _.has(_.mv5),
            bPartialXboxControllerSupport: _.has(_.Y5S),
            bPS4ControllerSupport: _.has(_.KH9),
            bPS4ControllerBTSupport: _.has(_.wFw),
            bPS5ControllerSupport: _.has(_.wFw),
            bPS5ControllerBTSupport: _.has(_.lDg),
            bSteamInputAPISupport: _.has(_.R2g),
            bNoKeyboardSupport: _,
            bGamepadPreferred: _.has(_.fui),
            bControllerSupportWizardComplete: _,
            bHasXbox: !!_.has_xbox_controller,
            bHasPS4: !!_.has_ps4_controller,
            bHasPS5: !!_.has_ps5_controller,
            bHasOther: _,
          };
        }
        function _(_) {
          const { activationLimit: _ } = _;
          return _
            ? _ == "Unlimited"
              ? (0, _.jsx)("div", {
                  className: _().ActivationLimit,
                  children: _.Localize(
                    "#feature_machine_activation_limit_unlimited",
                  ),
                })
              : (0, _.jsx)("div", {
                  className: _().ActivationLimit,
                  children: _.Localize("#feature_machine_activation_limit", _),
                })
            : null;
        }
        function _(_) {
          const { extraDetails: _ } = _,
            { drm_third_party_type: _, drm_activation_limit: _ } = _;
          return _
            ? (0, _.jsx)("div", {
                className: _().ThirdPartyNotice,
                children: (0, _.jsxs)(_._, {
                  children: [
                    _.Localize("#feature_third_party_drm", _),
                    (0, _.jsx)(_, {
                      activationLimit: _,
                    }),
                  ],
                }),
              })
            : null;
        }
        function _(_) {
          return _ == "secureboot_tpm2"
            ? _.Localize(
                "#feature_anticheat_bootprotection_secureboottpm2_desc",
              )
            : "";
        }
        function _(_) {
          const { extraDetails: _ } = _,
            { anticheat: _ } = _;
          if (!_) return null;
          const {
            kernel_mode: _,
            boot_protection: _,
            uninstall_completely: _,
            name: _,
            boot_protection_name: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().ThirdPartyNotice, _().Anticheat),
            children: [
              (0, _.jsx)(_._, {
                children: _.Localize(
                  _
                    ? "#feature_includes_kernel_anti_cheat"
                    : "#feature_includes_non_kernel_anti_cheat",
                ),
              }),
              (0, _.jsxs)(_._, {
                color: "bronze-12",
                children: [
                  _,
                  _ &&
                    !_ &&
                    (0, _.jsx)(_._, {
                      children: _.Localize(
                        "#feature_anti_cheat_requires_manual_removal",
                      ),
                    }),
                ],
              }),
              _ &&
                (0, _.jsxs)(_._, {
                  children: [
                    _.Localize("#feature_anticheat_bootprotection"),
                    (0, _.jsx)("div", {
                      className: _().BootProtectionName,
                      children: _(_),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return !_ || !_.name
            ? null
            : (0, _.jsx)(_, {
                appid: _,
                title: _.Localize("#feature_master_sub_app_eula", _.name),
              });
        }
        function _(_) {
          const { appid: _, title: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return _
            ? (0, _.jsx)(_, {
                eulas: _.eula ?? [],
                title: _,
              })
            : null;
        }
        function _(_) {
          const { eulas: _, title: _ } = _;
          if (!_?.length) return null;
          const _ = _ || _.Localize("#feature_third_party_eula");
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().ThirdPartyNotice, _().Eulas),
            children: [
              (0, _.jsxs)(_._, {
                children: [_, " "],
              }),
              _.map((_, _) =>
                (0, _.jsx)(
                  _._,
                  {
                    className: _().Link,
                    href: _.url,
                    children: (0, _.jsx)(_._, {
                      color: "bronze-12",
                      children: _.name,
                    }),
                  },
                  _,
                ),
              ),
            ],
          });
        }
        function _(_) {
          return _.extraDetails.refund_checks_ea_playtime
            ? (0, _.jsx)("div", {
                className: _().ThirdPartyNotice,
                children: (0, _.jsx)(_._, {
                  children: _.Localize("#feature_third_party_refund_playtime"),
                }),
              })
            : null;
        }
        function _(_) {
          const { extraDetails: _ } = _,
            {
              user_account_third_party: _,
              user_account_third_party_link_to_steam: _,
            } = _;
          return _
            ? (0, _.jsx)("div", {
                className: (0, _._)(
                  _().ThirdPartyNotice,
                  _().ThirdPartyAccount,
                ),
                children: (0, _.jsxs)(_._, {
                  children: [
                    _.Localize("#feature_external_account_service", _),
                    !!_ &&
                      (0, _.jsx)(_.Fragment, {
                        children: _.Localize(
                          "#feature_external_account_service_canlink",
                        ),
                      }),
                  ],
                }),
              })
            : null;
        }
        function _(_) {
          const { extraDetails: _ } = _,
            { ai_generation_service: _ } = _;
          return !_ || !_.name
            ? null
            : (0, _.jsx)("div", {
                className: _().ThirdPartyNotice,
                children: (0, _.jsx)(_._, {
                  children: (0, _._)(
                    _.Localize(
                      "#feature_ai_generated_content_external_account_service",
                      _.name,
                    ),
                    (0, _.jsx)(_._, {
                      href: _.url,
                    }),
                  ),
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, tracks: _, metadata: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            [_, _] = _.useState(_[0]?.discNumber ?? 1),
            _ = _.useMemo(() => {
              let _ = new Map();
              for (const _ of _ ?? [])
                _.has(_.discNumber)
                  ? _.get(_.discNumber)?.tracks.push(_)
                  : _.set(_.discNumber, {
                      discNumber: _.discNumber,
                      tracks: [_],
                    });
              return _;
            }, [_]);
          return !_ || _.type == null || !_?.length
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)(_._, {
                    className: _().TrackListContainer,
                    "flow-children": "column",
                    children: [
                      _.size > 1 &&
                        (0, _.jsx)(_._, {
                          "flow-children": "row",
                          className: _().DiscTabs,
                          children: Array.from(_.values()).map((_) =>
                            (0, _.jsx)(
                              _._,
                              {
                                variant:
                                  _.discNumber == _ ? "inverted" : void 0,
                                onClick: () => _(_.discNumber),
                                children: _.Localize(
                                  "#music_disc_tab",
                                  _.discNumber,
                                ),
                              },
                              _.discNumber,
                            ),
                          ),
                        }),
                      (0, _.jsx)(_._, {
                        className: _().TrackList,
                        children: (0, _.jsx)(_, {
                          tracks: _.get(_).tracks,
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    className: _().MetadataContainer,
                    "flow-children": "column",
                    children: (0, _.jsx)(_._, {
                      className: _().Metadata,
                      children: (0, _.jsx)(_, {
                        metadata: _,
                      }),
                    }),
                  }),
                ],
              });
        }
        function _(_) {
          const { tracks: _ } = _;
          return (0, _.jsx)(_._, {
            color: "greyneutral-12",
            children: (0, _.jsxs)("table", {
              className: _().TrackTable,
              children: [
                (0, _.jsxs)("colgroup", {
                  children: [
                    (0, _.jsx)("col", {
                      className: _().Number,
                    }),
                    (0, _.jsx)("col", {
                      className: _().Name,
                    }),
                    (0, _.jsx)("col", {
                      className: _().Length,
                    }),
                  ],
                }),
                (0, _.jsx)("tbody", {
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        track: _,
                        odd: _ % 2 != 0,
                      },
                      _,
                    ),
                  ),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { track: _, odd: _ } = _;
          return (0, _.jsxs)("tr", {
            className: (0, _._)(_ && _().Odd),
            children: [
              (0, _.jsx)("td", {
                children: _.trackNumber,
              }),
              (0, _.jsx)("td", {
                children: _(_),
              }),
              (0, _.jsx)("td", {
                className: _().Length,
                children: _(_),
              }),
            ],
          });
        }
        function _(_) {
          if (!_.originalName || !_.originalNameLanguage)
            return _.internationalName;
          const _ = _._.GetELanguageFallbackOrder()[0] ?? _.Bhc;
          return (0, _.wwZ)(_) == _.originalNameLanguage
            ? (0, _._)(_.originalName)
            : _.Localize(
                "#music_localized_track_name",
                (0, _._)(_.internationalName),
                (0, _._)(_.originalName),
              );
        }
        function _(_) {
          return _.Localize(
            "#music_album_track_duration",
            _.lengthMinutes,
            _.lengthSeconds.toString().padStart(2, "0"),
          );
        }
        function _(_) {
          const { metadata: _ } = _;
          return _
            ? (0, _.jsxs)(_._, {
                direction: "column",
                className: _().Credits,
                marginTop: "4",
                children: [
                  (0, _.jsx)(_._, {
                    size: "5",
                    weight: "heavy",
                    children: _.Localize("#music_album_metadata"),
                  }),
                  (0, _.jsx)(_._, {
                    columns: "max-content max-content",
                    gapX: "2",
                    margin: "2",
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          metadata: _,
                        },
                        _.field,
                      ),
                    ),
                  }),
                ],
              })
            : null;
        }
        function _(_, _) {
          return _.find((_) => _.language == _);
        }
        function _(_) {
          const { metadata: _ } = _;
          if (!_ || !_.values?.length) return null;
          const { field: _, values: _ } = _,
            _ = "#music_album_metadata_key_" + _,
            _ = _._.GetELanguageFallbackOrder()[0] ?? _.Bhc,
            _ = _(_, _) || _(_, _.Bhc);
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    className: _().CreditName,
                    children: _.Localize(_),
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _._)(_.value),
                  }),
                ],
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = new _._("InterestButtons");
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return !_ || _.type == null
            ? null
            : (0, _.jsx)(_._, {
                className: _().ButtonRow,
                "flow-children": "column",
                children: (0, _.jsxs)(_._, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, _.jsx)(_, {
                      appid: _,
                    }),
                    (0, _.jsxs)(_._, {
                      direction: "row",
                      width: "100%",
                      gap: "1",
                      children: [
                        (0, _.jsx)(_, {
                          appid: _,
                        }),
                        (0, _.jsx)(_, {
                          appid: _,
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function _(_) {
          const { options: _, children: _ } = _;
          return (0, _.jsxs)("span", {
            className: _().WidestChildContainer,
            children: [
              _.map((_, _) =>
                (0, _.jsx)(
                  "span",
                  {
                    className: _().Hidden,
                    children: _,
                  },
                  _,
                ),
              ),
              (0, _.jsx)("span", {
                children: _,
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsx)(_._, {
            width: "16px",
            marginRight: "1",
            marginTop: "1",
            children: (0, _.jsx)(_.MGO, {}),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = _(_),
            _ = _(_);
          if (!_) return null;
          const { following: _ = !1 } = _,
            _ = (_) => {
              _.mutateAsync({
                following: _,
                old_interest: _,
              });
            },
            _ = _.Localize("#button_follow"),
            _ = (0, _.jsxs)(_._, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, _.jsx)(_, {}), _.Localize("#button_follow_undo")],
            });
          return (0, _.jsx)(_._, {
            flexGrow: "1",
            children: (0, _.jsxs)(_._, {
              color: "greyneutral",
              onClick: () => _(!_),
              width: "100%",
              children: [
                (0, _.jsx)(_._, {
                  children: _ ? (0, _.jsx)(_.c9e, {}) : (0, _.jsx)(_.pPV, {}),
                }),
                (0, _.jsx)(_, {
                  options: [_, _],
                  children: _ ? _ : _,
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = _(_),
            _ = _(_),
            [_, _] = _.useState(!1);
          if (!_) return null;
          const { ignored: _ = !1, ignored_reason: _ } = _,
            _ = !!_ && (_ ?? !1),
            _ = (_, _) => {
              _.Info("ignoring", _, _),
                _.mutateAsync({
                  ignored: _,
                  ignored_reason: _,
                  old_interest: _,
                });
            },
            _ = (_) => {
              _(_ !== !1, _ === !1 ? void 0 : _), _(!1);
            },
            _ = _.Localize("#button_ignore"),
            _ = (0, _.jsxs)(_._, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [(0, _.jsx)(_, {}), _.Localize("#button_ignore_undo")],
            });
          return (0, _.jsx)(_._, {
            flexGrow: "1",
            children: (0, _.jsxs)(_._.Root, {
              open: _,
              onOpenChange: _,
              children: [
                (0, _.jsx)(_._.Anchor, {
                  children: (0, _.jsx)(_._, {
                    color: "greyneutral",
                    onClick: () => _(!_),
                    width: "100%",
                    children: (0, _.jsx)(_, {
                      options: [_, _],
                      children: _ ? _ : _,
                    }),
                  }),
                }),
                (0, _.jsx)(_._.Positioner, {
                  children: (0, _.jsx)(_._.FocusManager, {
                    children: (0, _.jsx)(_._, {
                      border: "1",
                      borderColor: "blue-7",
                      background: "greyneutral-4",
                      elevation: "1",
                      padding: "1",
                      children: (0, _.jsx)(_._, {
                        children: (0, _.jsxs)(_._, {
                          direction: "column",
                          children: [
                            (0, _.jsx)(_, {
                              type: _._._,
                              currentType: _,
                              select: _,
                            }),
                            (0, _.jsx)(_, {
                              type: _._._,
                              currentType: _,
                              select: _,
                            }),
                            (0, _.jsx)(_, {
                              type: !1,
                              currentType: _,
                              select: _,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          switch (_) {
            default:
            case !1:
              return "#ignore_reason_none_header";
            case _._._:
              return "#ignore_reason_generic_header";
            case _._._:
              return "#ignore_reason_otherstore_header";
          }
        }
        function _(_) {
          switch (_) {
            default:
            case !1:
              return "#ignore_reason_none_desc";
            case _._._:
              return "#ignore_reason_generic_desc";
            case _._._:
              return "#ignore_reason_otherstore_desc";
          }
        }
        function _(_) {
          const { type: _, currentType: _, select: _ } = _;
          return (0, _.jsx)(_._, {
            focusable: !0,
            onActivate: () => _(_),
            autoFocus: _ == _._._,
            children: (0, _.jsxs)(_._, {
              direction: "row",
              padding: "2",
              maxWidth: "275px",
              gap: "2",
              children: [
                (0, _.jsx)(_._, {
                  minWidth: "16px",
                  maxWidth: "16px",
                  children:
                    _ === _ &&
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_.MGO, {}),
                    }),
                }),
                (0, _.jsxs)(_._, {
                  direction: "column",
                  gap: "1",
                  children: [
                    (0, _.jsx)(_._, {
                      color: "greyneutral-12",
                      weight: "heavy",
                      children: _.Localize(_(_)),
                    }),
                    (0, _.jsx)(_._, {
                      color: "greyneutral-11",
                      children: _.Localize(_(_)),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            [_, _] = _.useState(!1),
            _ = (0, _._)(),
            _ = (0, _.jsxs)(_._, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, _.jsx)(_._, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, _.jsx)(_.T4m, {}),
                }),
                _.Localize("#button_wishlist"),
              ],
            }),
            _ = (0, _.jsxs)(_._, {
              direction: "row",
              align: "center",
              gap: "1",
              children: [
                (0, _.jsx)(_._, {
                  width: "20px",
                  marginRight: "1",
                  children: (0, _.jsx)(_.qnF, {}),
                }),
                _.Localize("#button_wishlist_undo"),
              ],
            });
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_._, {
              onSecondaryButton: () => _(!0),
              onSecondaryActionDescription: _.Localize(
                "#wishlist_manage_categories",
              ),
              children: [
                (0, _.jsx)(_, {
                  appid: _,
                  bAllowRemove: !0,
                  width: "100%",
                  children: (_) =>
                    (0, _.jsx)(_, {
                      options: [_, _],
                      children: _ ? _ : _,
                    }),
                }),
                _ &&
                  (0, _.jsx)(_, {
                    appid: _,
                    steamid: _,
                    onClose: () => _(!1),
                  }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return (_ || []).map((_) => ({
            accountid: _._.ToAccountID(_.steamid),
            nMinutesPlayedRecent: _.minutes_played || 0,
            nMinutesPlayedForever: _.minutes_played_forever || 0,
            bInGame: _,
          }));
        }
        function _(_) {
          return _(_.in_wishlist, !1);
        }
        function _(_, _) {
          const _ = _(_.in_game, !0).concat(
            _(_.played_recently, !1),
            _(_.played_ever, !1),
            _(_.owns, !1),
          );
          return _ ? _.filter((_) => _.nMinutesPlayedForever > 0) : _;
        }
        function _(_) {
          const { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(_);
          return _.useMemo(
            () =>
              !_ || !_
                ? null
                : {
                    rgFriendsThatOwn: _(_, !!_.is_free),
                    rgFriendsThatWant: _(_),
                  },
            [_, _],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = (0, _._)(_._.STORE_BASE_URL, _, _._.country_code),
            _ = (await (await fetch(_)).json()).rgCurations[_] || {};
          return Object.entries(_).map((_) => ({
            clan_accountid: Number(_[0]),
            recommendation: _[1],
          }));
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["UserCurations" + _._.accountid],
            queryFn: async () => _(_, _._.accountid),
            enabled: !!_._.accountid,
          });
        }
        function _(_) {
          const { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(),
            { data: _ } = (0, _._)(_._.steamid),
            { data: _ } = (0, _._)(),
            { data: _ } = _(_);
          return _.useMemo(() => {
            if (
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_ ||
              !_
            )
              return null;
            const _ = {
              appid: _,
            };
            (_.nCurrentUserPlaytimeMins =
              _.your_info?.minutes_played_forever || 0),
              (_.bCurrentUserOwns = !!_.your_info?.owned),
              (_.bFromInteractiveRecommender = _.bRecommendedByIR),
              _.bCurrentUserOwns ||
                ((_.rgSimilarApps = _.arrSimilarPlayedApps || []),
                _.rgSimilarApps?.length == 0 &&
                  (_.rgMatchingTagsPlayed =
                    _.filter((_) => _?.find((_) => _.tagid == _.tagid)) || []));
            let _ =
              (_.preferences?.review_score_preference == _._._ &&
                _.summary_unfiltered) ||
              _.summary_filtered;
            const _ = _?.review_score || _._._;
            if (
              ((_.bPositiveReviews = _ > _._._),
              (_.bNegativeReviews = _ > _._._ && _ < _._._),
              (_.eReviewScore = _),
              (_.strReviewScoreLabel = _?.review_score_label),
              _.type != _._._ && _.type != _._._)
            ) {
              const _ = (0, _._)(_);
              _.bUserLanguageSupported = !!_.find((_) => _.elanguage == _);
            } else _.bUserLanguageSupported = !0;
            const _ = _.GetItems().findIndex((_) => _.GetAppID() == _);
            _ != -1 && (_ < 25 ? (_.bTopSeller = !0) : (_.bPopular = !0));
            const _ = !!_.items.find((_) => _.appid == _);
            return (
              (_.bWishlisted = _),
              (_.rgExcludedTags =
                _.tag_preferences?.tags_to_exclude?.filter((_) =>
                  _?.find((_) => _.tagid == _.tagid),
                ) || []),
              (_.rgPublishersFollowed = _.publishers?.filter(
                (_) =>
                  _.creator_clan_account_id &&
                  _?.get(_.creator_clan_account_id)?.is_creator,
              )),
              (_.rgDevelopersFollowed = _.developers?.filter(
                (_) =>
                  _.creator_clan_account_id &&
                  _?.get(_.creator_clan_account_id)?.is_creator,
              )),
              (_.rgFranchisesFollowed = _.franchises?.filter(
                (_) =>
                  _.creator_clan_account_id &&
                  _?.get(_.creator_clan_account_id)?.is_creator,
              )),
              (_.rgPublishersFollowed = _.rgPublishersFollowed?.filter(
                (_) =>
                  !_.rgDevelopersFollowed?.find(
                    (_) =>
                      _.creator_clan_account_id == _.creator_clan_account_id,
                  ),
              )),
              (_.rgCuratorsPositive = _.filter(
                (_) => _.recommendation == _._._,
              ).map((_) => _.clan_accountid)),
              (_.rgCuratorsNegative = _.filter(
                (_) => _.recommendation == _._._,
              ).map((_) => _.clan_accountid)),
              (_.rgFriendsRecommended = _.accountids_recommended || []),
              (_.rgFriendsDisrecommended = _.accountids_not_recommended || []),
              (_.rgFriendsWishlisted = _(_).map((_) => _.accountid)),
              (_.rgFriendsOwned = _(_, !!_.is_free).map((_) => _.accountid)),
              _
            );
          }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _]);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_[(_.Info = 0)] = "Info"),
            (_[(_.Positive = 1)] = "Positive"),
            (_[(_.Negative = 2)] = "Negative"),
            _
          ))(_ || {});
        function _(_) {
          const { type: _, description: _, children: _ } = _;
          let _ = (0, _.jsx)(_.$$j, {});
          return (
            _ == 1
              ? (_ = (0, _.jsx)(_.MGO, {
                  className: _().Positive,
                }))
              : _ == 2 &&
                (_ = (0, _.jsx)(_.tmm, {
                  className: _().Negative,
                })),
            (0, _.jsxs)("div", {
              className: _().Reason,
              children: [
                (0, _.jsxs)("div", {
                  className: _().TopLine,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().Icon,
                      children: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().Description,
                      children: _,
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _().Additional,
                    children: _,
                  }),
                (0, _.jsx)("div", {
                  className: _().Divider,
                }),
              ],
            })
          );
        }
        function _(_) {
          const { description: _, children: _ } = _;
          return (0, _.jsx)(_, {
            type: 0,
            description: _,
            children: _,
          });
        }
        function _(_) {
          const { description: _, children: _ } = _;
          return (0, _.jsx)(_, {
            type: 1,
            description: _,
            children: _,
          });
        }
        function _(_) {
          const { description: _, children: _ } = _;
          return (0, _.jsx)(_, {
            type: 2,
            description: _,
            children: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)(_._, {
            className: _().AvatarList,
            children: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const _ = (0, _._)(),
            { data: _ } = (0, _._)(_);
          return (0, _._)(_, _) + `/friendsthatplay/${_}`;
        }
        function _(_) {
          const { accountid: _, reviewAppId: _, bShowName: _, friend: _ } = _,
            _ = (0, _._)(_);
          if (!_.data || !_.data.public_data) return null;
          const _ =
              _ && _.data ? `${(0, _._)(_.data)}/recommended/${_}` : void 0,
            _ = _.data.public_data.persona_name;
          return (0, _.jsxs)(_._, {
            className: _().FriendAvatarLink,
            href: _ || (0, _._)(_.data),
            "data-miniprofile": _,
            children: [
              (0, _.jsx)(_._, {
                playerLinkDetails: _.data,
                alt: _,
              }),
              _ &&
                _ &&
                (0, _.jsxs)("div", {
                  className: _().Details,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().Name,
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        friend: _,
                      }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { friend: _ } = _;
          let _;
          return (
            _.bInGame
              ? (_ = _.Localize("#AppPage_FriendOwnership_NowPlaying"))
              : _.nMinutesPlayedRecent > 0 &&
                (_ = _.Localize(
                  "#AppPage_FriendOwnership_PlayedHours",
                  _(_.nMinutesPlayedRecent, !0),
                )),
            _
              ? (0, _.jsx)("div", {
                  className: _().Playtime,
                  children: _,
                })
              : null
          );
        }
        function _(_) {
          const { accountid: _, appid: _, bLinkToReview: _ } = _;
          return (0, _.jsx)(_, {
            accountid: _,
            reviewAppId: _ ? _ : void 0,
          });
        }
        function _(_) {
          const { rgFriends: _, appid: _, bLinkToReview: _ } = _;
          return (0, _.jsx)(_, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  accountid: _,
                  appid: _,
                  bLinkToReview: _,
                },
                _,
              ),
            ),
          });
        }
        function _(_) {
          const {
              type: _,
              appid: _,
              strLocTag: _,
              rgFriends: _,
              nMax: _ = 5,
              bLinkToReview: _,
            } = _,
            _ = _(_);
          if (!_ || _.length == 0) return null;
          let _ = (0, _._)(
            _.LocalizePlural(_, _.length),
            (0, _.jsx)(_._, {
              href: _,
            }),
          );
          return (0, _.jsx)(_, {
            type: _,
            description: _,
            children: (0, _.jsx)(_, {
              rgFriends: _.slice(0, _),
              appid: _,
              bLinkToReview: _,
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { url: _, avatarUrl: _, alt: _ } = _;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            children: (0, _.jsx)(_._, {
              href: _,
              children: (0, _.jsx)(_._, {
                avatarURL: _,
                alt: _,
              }),
            }),
          });
        }
        function _(_) {
          const { accountid: _, appid: _, fnURLGenerator: _ } = _,
            _ = (0, _._)(_);
          if (!_.data) return null;
          const _ = _(_.data, _);
          return (0, _.jsx)(_, {
            url: _,
            avatarUrl: _.data.avatar_full_url,
            alt: _.data.group_name,
          });
        }
        function _(_) {
          const { rgCurators: _, appid: _, fnURLGenerator: _ } = _;
          return (0, _.jsx)(_, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  accountid: _,
                  appid: _,
                  fnURLGenerator: _,
                },
                _,
              ),
            ),
          });
        }
        function _(_) {
          const {
              type: _,
              fnURLGenerator: _,
              appid: _,
              strLocTag: _,
              rgCurators: _,
              nMax: _ = 6,
            } = _,
            _ = (0, _._)(
              _._.STORE_BASE_URL + `curators/mycuratorsreviewing/?appid=${_}`,
            );
          if (!_ || _.length == 0) return null;
          let _ = (0, _._)(
            _.Localize(_),
            (0, _.jsx)(_._, {
              href: _,
            }),
          );
          return (0, _.jsx)(_, {
            type: _,
            description: _,
            children: (0, _.jsx)(_, {
              rgCurators: _.slice(0, _),
              appid: _,
              fnURLGenerator: _,
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { tag: _ } = _;
          return (0, _.jsx)(_._, {
            className: _().Tag,
            href: `${_._.STORE_BASE_URL}tags/${(0, _.wwZ)((0, _.sfN)(_._.LANGUAGE))}/${_.name}`,
            children: _.name,
          });
        }
        function _(_) {
          const { rgTags: _ } = _;
          return _.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: _().TagList,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      tag: _,
                    },
                    _.tagid,
                  ),
                ),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            });
          if (!_ || !_) return null;
          const _ = (0, _._)(_, "community_icon");
          return (0, _.jsx)(_._, {
            _: {
              appid: _,
            },
            bPreventNavigation: !0,
            hoverProps: {
              direction: "overlay",
              nBodyAlignment: 1,
              style: {
                minWidth: "320px",
                zIndex: 5e3,
              },
            },
            children: (0, _.jsxs)(_._, {
              className: _().AppIconAndName,
              storeItem: _,
              children: [
                (0, _.jsx)("div", {
                  className: _().AppIcon,
                  children:
                    _ &&
                    (0, _.jsx)("img", {
                      src: _,
                      alt: "",
                    }),
                }),
                (0, _.jsx)("div", {
                  className: _().AppName,
                  children: _.name,
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { rgApps: _ } = _;
          return _.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: _().AppList,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      appid: _.appid,
                    },
                    _.appid,
                  ),
                ),
              });
        }
        function _(_) {
          const { appid: _, friendsRecommended: _, recommendedTags: _ } = _,
            [_, _] = _.useState(!1),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (
            _.useEffect(() => {
              _(_, _), _(_), _(!0);
            }, [_, _, _, _, _]),
            _.use(_.Ready()),
            _.use(_._.Ready()),
            _
              ? (0, _.jsx)(_.Suspense, {
                  children: (0, _.jsx)(_, {
                    appid: _,
                  }),
                })
              : null
          );
        }
        function _(_, _) {
          const { data: _ } = (0, _._)({
            appid: _.appid,
          });
          return _.GetAppTypePluralLocKey(_, _?.type || _._._);
        }
        function _(_, _) {
          const { data: _ } = (0, _._)({
            appid: _.appid,
          });
          return _.GetAppTypeLocKey(_, _?.type || _._._);
        }
        function _(_, _) {
          const _ = _(_, _);
          return _.Localize(_);
        }
        function _(_) {
          const { appid: _ } = _,
            _ = _(_);
          return _
            ? (0, _.jsxs)(_._, {
                className: _().RecommendationReasonsDisplay,
                navEntryPreferPosition: _._.PREFERRED_CHILD,
                children: [
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                  (0, _.jsx)(_, {
                    reasons: _,
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { reasons: _ } = _,
            _ = _("#AppPage_RecommendationReason_Header", _);
          return (0, _.jsx)(_, {
            text: _,
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          if (_.nCurrentUserPlaytimeMins > 0) {
            const _ = _(_.nCurrentUserPlaytimeMins);
            return (0, _.jsx)(_, {
              description: _.Localize(
                "#AppPage_RecommendationReason_Playtime",
                _,
              ),
            });
          } else if (_.bCurrentUserOwns)
            return (0, _.jsx)(_, {
              description: _.Localize(
                "#AppPage_RecommendationReason_InLibrary",
              ),
            });
          return null;
        }
        function _(_) {
          const { reasons: _ } = _,
            _ = _("#AppPage_RecommendationReason_MatchingApps", _);
          return (0, _.jsx)(_, {
            description: _,
            children: (0, _.jsx)(_, {
              rgApps: _.rgSimilarApps,
            }),
          });
        }
        function _(_) {
          const { reasons: _ } = _,
            _ = _("#AppPage_RecommendationReason_MatchingTags", _);
          return (0, _.jsx)(_, {
            description: _,
            children: (0, _.jsx)(_, {
              rgTags: _.rgMatchingTagsPlayed,
            }),
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return _.rgSimilarApps && _.rgSimilarApps.length > 0
            ? (0, _.jsx)(_, {
                reasons: _,
              })
            : _.rgMatchingTagsPlayed && _.rgMatchingTagsPlayed.length > 0
              ? (0, _.jsx)(_, {
                  reasons: _,
                })
              : null;
        }
        function _(_) {
          const { reasons: _ } = _;
          return _.bFromInteractiveRecommender
            ? (0, _.jsx)(_, {
                description: _.Localize(
                  "#AppPage_RecommendationReason_FromInteractiveRecommender",
                ),
              })
            : null;
        }
        function _(_) {
          const { reasons: _ } = _;
          return _.bPositiveReviews || _.bNegativeReviews
            ? (0, _.jsx)(_, {
                type: _.bPositiveReviews ? _.Positive : _.Negative,
                description: (0, _._)(
                  _.Localize(
                    "#AppPage_RecommendationReason_UserReviews",
                    _.strReviewScoreLabel,
                  ),
                  (0, _.jsx)("span", {
                    className: (0, _._)(
                      _().ReviewScore,
                      _.bPositiveReviews ? _().Positive : _().Negative,
                    ),
                  }),
                ),
              })
            : null;
        }
        function _(_) {
          const { reasons: _ } = _;
          return !_.bTopSeller && !_.bPopular
            ? null
            : (0, _.jsx)(_, {
                description: _.Localize(
                  _.bTopSeller
                    ? "#AppPage_RecommendationReason_TopSeller"
                    : "#AppPage_RecommendationReason_Popular",
                ),
              });
        }
        function _(_) {
          const { reasons: _ } = _;
          return _.bUserLanguageSupported
            ? null
            : (0, _.jsx)(_, {
                description: (0, _._)(
                  _.Localize(
                    "#AppPage_RecommendationReason_LanguageUnsupported",
                  ),
                  (0, _.jsx)(_._, {
                    href: `${_._.STORE_BASE_URL}account/languagepreferences/`,
                  }),
                ),
              });
        }
        function _(_) {
          const { reasons: _ } = _,
            _ = (0, _._)(_._.STORE_BASE_URL + "wishlist");
          return _.bWishlisted
            ? (0, _.jsx)(_, {
                description: (0, _._)(
                  _.Localize("#AppPage_RecommendationReason_Wishlisted"),
                  (0, _.jsx)(_._, {
                    href: _,
                  }),
                ),
              })
            : null;
        }
        function _(_) {
          const { reasons: _ } = _;
          return !_.rgExcludedTags || _.rgExcludedTags.length == 0
            ? null
            : (0, _.jsx)(_, {
                description: (0, _._)(
                  _.Localize("#AppPage_RecommendationReason_ExcludedTags"),
                  (0, _.jsx)(_._, {
                    href: `${_._.STORE_BASE_URL}account/preferences`,
                  }),
                ),
                children: (0, _.jsx)(_, {
                  rgTags: _.rgExcludedTags,
                }),
              });
        }
        function _(_, _) {
          return _.vanity_url
            ? `${_._.STORE_BASE_URL}${_}/${_.vanity_url}`
            : `${_._.STORE_BASE_URL}curator/${_.clanAccountID}`;
        }
        function _(_, _, _) {
          return `${_(_, _)}?appid=${_}`;
        }
        function _(_) {
          return _.vanity_url
            ? `${_._.COMMUNITY_BASE_URL}groups/${_.vanity_url}`
            : `${_._.COMMUNITY_BASE_URL}gid/${_.clanSteamID?.ConvertTo64BitString()}`;
        }
        function _(_, _) {
          return `${_(_)}/curation/app/${_}`;
        }
        function _(_) {
          const { reasons: _, type: _, strLocTag: _, rgCreators: _ } = _;
          if (!_ || _.length == 0) return null;
          const _ = (_, _) => _(_, _, _);
          return (0, _.jsx)(_, {
            appid: _.appid,
            type: _.Positive,
            fnURLGenerator: _,
            strLocTag: _,
            rgCurators: _.map((_) => _.creator_clan_account_id),
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return (0, _.jsx)(_, {
            reasons: _,
            type: "developer",
            strLocTag: "#AppPage_RecommendationReason_FollowedDeveloper",
            rgCreators: _?.rgDevelopersFollowed,
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return (0, _.jsx)(_, {
            reasons: _,
            type: "publisher",
            strLocTag: "#AppPage_RecommendationReason_FollowedPublisher",
            rgCreators: _?.rgPublishersFollowed,
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return (0, _.jsx)(_, {
            reasons: _,
            type: "franchise",
            strLocTag: "#AppPage_RecommendationReason_FollowedFranchise",
            rgCreators: _?.rgFranchisesFollowed,
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return (0, _.jsx)(_, {
            appid: _.appid,
            type: _.Positive,
            fnURLGenerator: _,
            strLocTag: "#AppPage_RecommendationReason_CuratorRecommended",
            rgCurators: _.rgCuratorsPositive,
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return (0, _.jsx)(_, {
            appid: _.appid,
            type: _.Negative,
            fnURLGenerator: _,
            strLocTag: "#AppPage_RecommendationReason_CuratorDisrecommended",
            rgCurators: _.rgCuratorsNegative,
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return (0, _.jsx)(_, {
            appid: _.appid,
            type: _.Positive,
            strLocTag: "#AppPage_RecommendationReason_FriendsRecommended",
            rgFriends: _.rgFriendsRecommended,
            bLinkToReview: !0,
          });
        }
        function _(_) {
          const { reasons: _ } = _;
          return (0, _.jsx)(_, {
            appid: _.appid,
            type: _.Negative,
            strLocTag: "#AppPage_RecommendationReason_FriendsDisrecommended",
            rgFriends: _.rgFriendsDisrecommended,
            bLinkToReview: !0,
          });
        }
        function _(_) {
          const { reasons: _ } = _,
            _ = _("#AppPage_RecommendationReason_FriendsWishlisted", _);
          return (0, _.jsx)(_, {
            appid: _.appid,
            type: _.Info,
            strLocTag: _,
            rgFriends: _.rgFriendsWishlisted,
          });
        }
        function _(_) {
          const { reasons: _ } = _,
            _ = _("#AppPage_RecommendationReason_FriendsOwned", _);
          return (0, _.jsx)(_, {
            appid: _.appid,
            type: _.Info,
            strLocTag: _,
            rgFriends: _.rgFriendsOwned,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 6,
          _ = 2;
        function _(_) {
          const { appid: _, bCanShowOwners: _ } = _,
            _ = _(_),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.rgFriendsThatWant || [],
            _ = _ ? _?.rgFriendsThatOwn || [] : [];
          if (_.length == 0 && _.length == 0) return null;
          _.use(_.Ready());
          const _ = _?.type || _._._;
          return (0, _.jsxs)(_._, {
            className: _().FriendOwnership,
            "flow-children": "column",
            children: [
              _.length > 0 &&
                (0, _.jsx)(_, {
                  appid: _,
                  strLocTag: _.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsWishlisted",
                    _,
                  ),
                  rgFriends: _,
                  bShowNames: _.length <= _,
                  bShowPlaytime: !1,
                }),
              _.length > 0 &&
                (0, _.jsx)(_, {
                  appid: _,
                  strLocTag: _.GetAppTypePluralLocKey(
                    "#AppPage_RecommendationReason_FriendsOwned",
                    _,
                  ),
                  rgFriends: _,
                  bShowNames: !0,
                  bShowPlaytime: !0,
                }),
            ],
          });
        }
        function _(_) {
          const {
              appid: _,
              strLocTag: _,
              rgFriends: _,
              bShowNames: _,
              bShowPlaytime: _,
            } = _,
            _ = _(_),
            _ = (0, _._)(
              _.LocalizePlural(_, _.length),
              (0, _.jsx)(_._, {
                href: _,
              }),
            );
          return (0, _.jsx)(_, {
            description: _,
            children: (0, _.jsx)(_._, {
              className: (0, _._)(_().FriendList, _ && _().WithNames),
              "flow-children": _ ? "grid" : "row",
              children: _.slice(0, _).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    accountid: _.accountid,
                    bShowName: _,
                    friend: _ ? _ : void 0,
                  },
                  _.accountid,
                ),
              ),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          if (!_ || !/^https?:/.test(_)) return;
          if (!(0, _._)(_)) return _;
          const _ = (0, _._)(_);
          return _._.IN_CLIENT ? "steam://openurl_external/" + _ : _;
        }
        function _(_) {
          const { curator: _, recommendation: _ } = _,
            _ = _(_.link_url),
            _ = _(_.link_url),
            _ = !!_?.iframe || !!_?.image;
          return (0, _.jsxs)("div", {
            className: _().Container,
            children: [
              (0, _.jsx)("h2", {
                children: _.Localize("#AppPage_Curator_Title"),
              }),
              (0, _.jsxs)(_._, {
                "flow-children": "row",
                className: _().Review,
                children: [
                  _ &&
                    (0, _.jsxs)(_._, {
                      direction: "column",
                      className: _().Video,
                      gap: "1",
                      align: "center",
                      children: [
                        _.iframe &&
                          (0, _.jsx)("iframe", {
                            src: _.iframe,
                            frameBorder: "0",
                            allowFullScreen: !0,
                            title: "referring_curator_video_embed",
                          }),
                        _.image &&
                          (0, _.jsxs)(_._, {
                            href: _,
                            className: _().VideoThumbnail,
                            children: [
                              (0, _.jsx)("img", {
                                src: _.image,
                                alt: _.Localize(
                                  "#AppPage_Curator_VideoThumbnail",
                                ),
                              }),
                              (0, _.jsx)("div", {
                                className: _().PlayOverlay,
                                children: (0, _.jsx)(_.jGG, {}),
                              }),
                            ],
                          }),
                        (0, _.jsx)(_, {
                          ..._,
                        }),
                      ],
                    }),
                  (0, _.jsx)("div", {
                    className: (0, _._)(_().DetailRight, !_ && _().NoVideo),
                    children: (0, _.jsx)("div", {
                      className: _().Blurb,
                      children: (0, _.jsxs)(_._, {
                        direction: "column",
                        gap: "1",
                        children: [
                          (0, _.jsxs)(_._, {
                            direction: "row",
                            gap: "1",
                            children: [
                              (0, _.jsx)("div", {
                                className: _().Avatar,
                                children: (0, _.jsx)("img", {
                                  src: (0, _._)(_.avatar_sha, "full"),
                                  alt: "",
                                }),
                              }),
                              (0, _.jsxs)(_._, {
                                direction: "column",
                                flexGrow: "1",
                                children: [
                                  (0, _.jsx)(_, {
                                    state: _.recommendation_state,
                                  }),
                                  (0, _.jsx)(_._, {
                                    size: "2",
                                    color: "greyneutral-11",
                                    children: (0, _.jsxs)(_._, {
                                      direction: "row",
                                      gap: "1",
                                      children: [
                                        (0, _._)(
                                          _.Localize(
                                            "#AppPage_Curator_By",
                                            _.name,
                                          ),
                                          (0, _.jsx)(_._, {
                                            href: _.link,
                                          }),
                                        ),
                                        (0, _._)(_.time_recommended, {
                                          month: "long",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, _.jsxs)(_._, {
                                direction: "row",
                                children: [
                                  !!_.received_for_free &&
                                    (0, _.jsx)(_, {
                                      strToolTip: _.Localize(
                                        "#AppPage_Curator_ReceivedForFree",
                                      ),
                                      strIcon: "icon_free.png",
                                    }),
                                  !!_.received_compensation &&
                                    (0, _.jsx)(_, {
                                      strToolTip: _.Localize(
                                        "#AppPage_Curator_ReceivedCompensation",
                                      ),
                                      strIcon: "icon_compensation.png",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, _.jsx)(_, {
                            strBlurb: _.blurb,
                          }),
                          !_ &&
                            (0, _.jsx)(_._, {
                              direction: "row",
                              children: (0, _.jsx)(_, {
                                ..._,
                              }),
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { recommendation: _, curator_preferences: _ } = _,
            _ = _(_.link_url),
            _ = _(_.link_url),
            _ = _(_?.discussion_url),
            _ = !!_?.iframe || !!_?.image;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  strURL: _,
                  bPlayIcon: _,
                  strText: _.Localize(
                    _
                      ? "#AppPage_Curator_WatchFullReview"
                      : "#AppPage_Curator_ReadFullReview",
                  ),
                }),
              _ &&
                (0, _.jsx)(_, {
                  strURL: _,
                  strText: _.Localize("#AppPage_Curator_Discuss"),
                }),
            ],
          });
        }
        function _(_) {
          const { strToolTip: _, strIcon: _ } = _;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            children: (0, _.jsx)("div", {
              className: _().CuratorReceived,
              children: (0, _.jsx)("img", {
                src: `${_._.IMG_URL}/curators/${_}`,
                alt: "",
              }),
            }),
          });
        }
        function _(_) {
          switch (_.state) {
            case _._._:
              return (0, _.jsx)("span", {
                className: (0, _._)(_().ReviewTitle, _().Recommended),
                children: _.Localize("#AppPage_Curator_Recommended"),
              });
            case _._._:
              return (0, _.jsx)("span", {
                className: (0, _._)(_().ReviewTitle, _().NotRecommended),
                children: _.Localize("#AppPage_Curator_NotRecommended"),
              });
            case _._._:
              return (0, _.jsx)("span", {
                className: (0, _._)(_().ReviewTitle, _().Informational),
                children: _.Localize("#AppPage_Curator_Informational"),
              });
            default:
              return null;
          }
        }
        function _(_) {
          const _ = (_.strBlurb ?? "").split(`
`);
          return _.length == 0
            ? null
            : ((_[0] = _.Localize("#AppPage_Curator_QuoteLeft") + _[0].trim()),
              (_[_.length - 1] =
                _[_.length - 1].trim() +
                _.Localize("#AppPage_Curator_QuoteRight")),
              (0, _.jsx)(_._, {
                className: _().BlurbText,
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    "div",
                    {
                      children: _,
                    },
                    _,
                  ),
                ),
              }));
        }
        function _(_) {
          const { strURL: _, strText: _, bPlayIcon: _ } = _;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            children: (0, _.jsxs)(_._, {
              href: _,
              openInNewWindow: !0,
              size: "1",
              variant: "inverted",
              color: "sky",
              width: "100%",
              children: [
                _ &&
                  (0, _.jsx)("span", {
                    className: _().PlayIcon,
                    children: (0, _.jsx)(_.jGG, {}),
                  }),
                _,
              ],
            }),
          });
        }
        function _(_) {
          if (!_) return;
          const _ = [
            [
              /(?:youtube\.com|youtu\.be)\/(?:watch)?(?:\?v=)?([a-zA-Z0-9_-]+)/,
              {
                image: "https://img.youtube.com/vi/%s/mqdefault.jpg",
              },
            ],
            [
              /nicovideo\.jp\/watch\/([sm0-9]+)/,
              {
                iframe: "https://embed.nicovideo.jp/watch/%s",
              },
            ],
            [
              /escapistmagazine\.com\/videos\/view\/.+\/([0-9]+)/,
              {
                iframe: "https://www.escapistmagazine.com/videos/embed/%s",
              },
            ],
            [
              /youku\.com\/v_show\/id_([0-9A-z=]+)/,
              {
                iframe: "https://player.youku.com/embed/%s",
              },
            ],
            [
              /bilibili\.com\/video\/av([0-9]+)/,
              {
                iframe:
                  "https://www.bilibili.com/blackboard/player.html?aid=%s",
              },
            ],
          ];
          for (const [_, _] of _) {
            const _ = _.match(_);
            if (_)
              return {
                iframe: _.iframe?.replace("%s", _[1]),
                image: _.image?.replace("%s", _[1]),
              };
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return ["OwnReview", _, _];
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_),
            _ = _(_, _._.steamid, _);
          return (0, _._)(_);
        }
        function _(_, _, _) {
          return {
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = await _._.GetIndividualRecommendations(_, {
                requests: [
                  {
                    steamid: _,
                    appid: _,
                  },
                ],
              });
              if (_.GetEResult() == _._) return null;
              if (_.GetEResult() != _._)
                throw new _._(
                  _.GetEResult(),
                  "Error from GetIndividualRecommendations",
                );
              return _.Body().recommendations()[0]?.toObject() ?? null;
            },
            staleTime: 1 / 0,
          };
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_);
          return _.useCallback(
            (_) => {
              _.setQueryData(_(_._.steamid, _), _);
            },
            [_, _],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { review: _, eAppType: _, nSteamworksAppid: _, onEdit: _ } = _,
            { data: _ } = (0, _._)(_._.steamid);
          _.use(_.Ready());
          const _ = (0, _._)((0, _._)(_, _._.steamid), _),
            _ = _.is_public
              ? "#AppPage_OwnReview_PostedPublic"
              : "#AppPage_OwnReview_PostedFriendsOnly";
          return (0, _.jsxs)(_._, {
            direction: "column",
            padding: "4",
            borderColor: "greyneutral-9 50%",
            children: [
              (0, _.jsx)(_, {
                review: _,
                eAppType: _,
              }),
              (0, _.jsxs)(_._, {
                direction: "column",
                background: "greyneutral-11 14%",
                children: [
                  (0, _.jsx)(_, {
                    review: _,
                  }),
                  (0, _.jsxs)(_._, {
                    direction: "column",
                    gap: "3",
                    padding: "3",
                    children: [
                      (0, _.jsxs)(_._, {
                        gap: "3",
                        align: "center",
                        children: [
                          (0, _.jsx)(_, {
                            bPositive: !!_.voted_up,
                          }),
                          (0, _.jsx)(_._, {
                            flexGrow: "1",
                            children: (0, _.jsx)(_._, {
                              size: "3",
                              color: "slate-11",
                              children: _.Localize(_),
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        review: _,
                      }),
                      (0, _.jsxs)(_._, {
                        gap: "2",
                        justify: "end",
                        children: [
                          (0, _.jsx)(_._, {
                            focusable: !0,
                            color: "blue",
                            onClick: _,
                            children: _.Localize("#AppPage_OwnReview_Edit"),
                          }),
                          (0, _.jsx)(_._, {
                            focusable: !0,
                            color: "blue",
                            href: _,
                            children: _.Localize("#AppPage_OwnReview_View"),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { review: _, eAppType: _ } = _,
            _ = _.GetAppTypeLocKey("#AppPage_OwnReview_Reviewed", _ ?? _._._),
            _ = (0, _._)(_.time_created ?? 0, {
              fullmonthname: !0,
            });
          return (0, _.jsxs)(_._, {
            size: "5",
            weight: "medium",
            color: "text-light",
            contrast: "title",
            marginBottom: "2",
            children: [
              _.Localize(_, _),
              !!_.time_updated &&
                ` (${_.Localize(
                  "#AppPage_OwnReview_Updated",
                  (0, _._)(_.time_updated, {
                    fullmonthname: !0,
                  }),
                )})`,
            ],
          });
        }
        function _(_) {
          const { bPositive: _ } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(_().ThumbIcon, !_ && _().Down),
            children: (0, _.jsx)(_.twC, {}),
          });
        }
        function _(_) {
          const { review: _ } = _,
            _ = _.votes_up ?? 0,
            _ = _.comment_count ?? 0;
          return !_ && !_
            ? null
            : (0, _.jsxs)(_._, {
                gap: "3",
                align: "center",
                paddingX: "4",
                paddingY: "2",
                background: "greyneutral-9 50%",
                children: [
                  _ > 0 &&
                    (0, _.jsx)(_._, {
                      size: "3",
                      children: _.LocalizePlural(
                        "#AppPage_OwnReview_HelpfulCount",
                        _,
                      ),
                    }),
                  _ > 0 &&
                    (0, _.jsxs)(_._, {
                      gap: "1",
                      align: "center",
                      children: [
                        (0, _.jsx)(_._, {
                          size: "3",
                          children: _,
                        }),
                        (0, _.jsx)(_.MwB, {
                          className: _().CommentIcon,
                        }),
                      ],
                    }),
                ],
              });
        }
        function _(_) {
          const { review: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _(!0), []);
          if (!_.developer_response) return null;
          _.use(_._.Ready());
          const _ = (0, _._)(_.time_developer_responded ?? 0, {
            fullmonthname: !0,
            bUseRelativeNames: !1,
          });
          return (0, _.jsxs)(_._, {
            direction: "column",
            gap: "2",
            children: [
              (0, _.jsxs)(_._, {
                gap: "2",
                align: "center",
                wrap: "wrap",
                children: [
                  (0, _.jsx)(_._, {
                    size: "3",
                    color: "slate-11",
                    children: _._.Localize(
                      "#Review_OfficialDeveloperResponseExistsDate",
                      _,
                    ),
                  }),
                  !_ &&
                    (0, _.jsx)(_._, {
                      focusable: !0,
                      size: "1",
                      variant: "ghost",
                      color: "blue",
                      onClick: _,
                      children: _._.Localize(
                        "#Review_OfficialDeveloperResponse_View",
                      ),
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_._, {
                  padding: "3",
                  background: "greyneutral-9 50%",
                  className: (0, _._)(_().BBCodeContent, _().Community),
                  children: (0, _.jsx)(_._, {
                    text: _.developer_response,
                    bBeWary: !0,
                  }),
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return _.TextEntry;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              rows: _ = 3,
              resize: _ = "none",
              ref: _,
              value: _,
              onTextChange: _,
              onChange: _,
              disabled: _,
              variant: _,
              ..._
            } = _,
            _ = (_) => {
              _ || (_(_.target.value), _ && _(_));
            },
            _ = (0, _._)("TextArea", _),
            _ = (0, _._)(),
            _ = (0, _._)({
              ..._,
              className: _()((0, _._)(), _()),
              style: {
                resize: _,
              },
              cursor: "text",
              disabled: _,
              variant: _,
            }),
            _ = _ ? _ : "textarea";
          return (0, _.jsx)(_, {
            ref: _,
            ..._,
            value: _ || "",
            onChange: _,
            rows: _,
            readOnly: _,
            "aria-disabled": _,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            noFocusRing: !0,
            ..._,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = (0, _._)(_),
            _ = (0, _._)("recommend-game");
          return (0, _._)({
            mutationFn: (_) => (_ ? _(_, _) : _(_, _, _, _)),
            onSuccess: () => {
              window.location.reload();
            },
          });
        }
        function _(_) {
          function _(_) {
            return typeof _ == "boolean" || _ === void 0 || _ === null
              ? _
                ? "1"
                : "0"
              : String(_);
          }
          const _ = new FormData();
          return (
            Object.entries(_).forEach(([_, _]) => {
              if (Array.isArray(_)) for (const _ of _) _.append(_ + "[]", _(_));
              else _.append(_, _(_));
            }),
            _
          );
        }
        async function _(_, _, _, _) {
          const _ = await _(`${_._.STORE_BASE_URL}friends/recommendgame`, {
            appid: _,
            steamworksappid: _,
            comment: _.review ?? "",
            rated_up: _.voted_up,
            is_public: _.is_public,
            language: _.language ?? "",
            received_compensation: _.received_compensation,
            disable_comments: _.comments_disabled,
            sessionid: (0, _._)(),
            hide_in_steam_china: !(0, _._)(_._.EREALM),
            saved_hardware_id: _.saved_hardware_id,
            snr: _,
          });
          if (!_.success) throw new Error(_.strError ?? "");
        }
        async function _(_, _) {
          if (
            (
              await _(`${_._.STORE_BASE_URL}userreviews/update/${_}`, {
                review_text: _.review ?? "",
                voted_up: _.voted_up,
                is_public: _.is_public,
                language: _.language ?? "",
                received_compensation: _.received_compensation,
                comments_disabled: _.comments_disabled,
                saved_hardware_id: _.saved_hardware_id,
                sessionid: (0, _._)(),
              })
            ).success != _._
          )
            throw new Error("");
        }
        async function _(_, _) {
          const _ = _(_);
          return await (
            await fetch(_, {
              method: "POST",
              body: _,
              credentials: "include",
            })
          )
            .json()
            .catch(() => ({}));
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown EValveIndexComponent ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFramePromoSerialRedemptionSource ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountid || _._(_._()),
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
                    accountid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    registration_complete: {
                      _: 2,
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
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Accounts";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accounts || _._(_._()),
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
                    accounts: {
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
            return "CAccountHardware_QueryAccountsRegisteredToSerial_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_RegisterSteamController_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamController_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_CompleteSteamControllerRegistration_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_CompleteSteamControllerRegistration_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appidorname || _._(_._()),
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
                    appidorname: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    publishedfileid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    templatename: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_SteamControllerSetConfig_ControllerConfig";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    accountid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    configurations: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    controller_type: {
                      _: 5,
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    only_for_this_serial: {
                      _: 6,
                      _: !1,
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
            return "CAccountHardware_SteamControllerSetConfig_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SteamControllerSetConfig_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    accountid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appidorname: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_type: {
                      _: 5,
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    only_for_this_serial: {
                      _: 6,
                      _: !1,
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
            return "CAccountHardware_SteamControllerGetConfig_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appidorname || _._(_._()),
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
                    appidorname: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    publishedfileid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    templatename: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    serial_number: {
                      _: 4,
                      _: "",
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    autosave: {
                      _: 5,
                      _: !1,
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
            return "CAccountHardware_SteamControllerGetConfig_ControllerConfig";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.configurations || _._(_._()),
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
                    configurations: {
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
            return "CAccountHardware_SteamControllerGetConfig_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    accountid: {
                      _: 3,
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
            return "CAccountHardware_DeRegisterSteamController_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_DeRegisterSteamController_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    publishedfileid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    accountid: {
                      _: 3,
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
            return "CAccountHardware_SetPersonalizationFile_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_SetPersonalizationFile_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    accountid: {
                      _: 2,
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
            return "CAccountHardware_GetPersonalizationFile_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.publishedfileid || _._(_._()),
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
                    publishedfileid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
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
            return "CAccountHardware_GetPersonalizationFile_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.product_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    product_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    values: {
                      _: 2,
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
            return "CAccountHardware_VRCompatibilityCheck_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.key || _._(_._()),
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
                    key: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_VRCompatibilityCheck_Request_Pair";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.values || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    values: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    components: {
                      _: 2,
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
            return "CAccountHardware_VRCompatibilityCheck_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.key || _._(_._()),
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
                    key: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_VRCompatibilityCheck_Response_Pair";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
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
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_VRCompatibilityCheck_Response_ComponentDisplay";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    manufacturer_serial_number: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    component_code: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    component_type: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    estimated_time_registered: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
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
            return "CAccountHardware_RegisterValveIndexComponent_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterValveIndexComponent_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_GetSteamDeckComponents_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.json_components || _._(_._()),
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
                    json_components: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_GetSteamDeckComponents_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.friendly_name || _._(_._()),
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
                    friendly_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    system_info: {
                      _: 2,
                      _: _._,
                    },
                    backfill_user_reviews: {
                      _: 3,
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
            return "CAccountHardware_SaveHardware_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.hardware_id || _._(_._()),
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
                    hardware_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
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
            return "CAccountHardware_SaveHardware_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.hardware_id || _._(_._()),
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
                    hardware_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    friendly_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    timestamp_created: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    hardware_cluster_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    system_info: {
                      _: 5,
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
            return "CAccountHardware_SavedHardware_Details";
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
            return "CAccountHardware_GetSavedHardwareList_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.saved_hardware || _._(_._()),
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
                    saved_hardware: {
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
            return "CAccountHardware_GetSavedHardwareList_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.hardware_id || _._(_._()),
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
                    hardware_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    delete_hardware: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    friendly_name_update: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_ManageSavedHardware_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_ManageSavedHardware_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    machine_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_RegisterSteamMachine_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_RegisterSteamMachine_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.controllers || _._(_._()),
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
                    controllers: {
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
            return "CAccountHardware_UpdateControllerUsageReport_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial_number || _._(_._()),
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
                    serial_number: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardware_UpdateControllerUsageReport_Request_Controller";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardware_UpdateControllerUsageReport_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serial || _._(_._()),
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
                    serial: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    component_serial: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountHardwarePromotions_RedeemFramePromoPackage_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.RegisterSteamController#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RegisterSteamController = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.CompleteSteamControllerRegistration#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.CompleteSteamControllerRegistration = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.QueryAccountsRegisteredToController#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.QueryAccountsRegisteredToController = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.UpdateControllerUsageReport#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UpdateControllerUsageReport = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.SetDesiredControllerConfigForApp#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetDesiredControllerConfigForApp = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.GetDesiredControllerConfigForApp#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetDesiredControllerConfigForApp = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.DeRegisterSteamController#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.DeRegisterSteamController = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.SetControllerPersonalizationFile#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetControllerPersonalizationFile = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.GetControllerPersonalizationFile#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetControllerPersonalizationFile = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.VRCompatibilityCheck#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 0,
              },
            );
          }
          _.VRCompatibilityCheck = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.RegisterValveIndexComponent#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RegisterValveIndexComponent = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.GetSteamDeckComponents#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetSteamDeckComponents = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.SaveHardware#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SaveHardware = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.ManageSavedHardware#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ManageSavedHardware = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.GetSavedHardwareList#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetSavedHardwareList = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardware.RegisterSteamMachine#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RegisterSteamMachine = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "AccountHardwarePromotions.RedeemFramePromoPackage#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RedeemFramePromoPackage = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return ["SavedHardware", _];
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _._.steamid, _));
        }
        function _(_, _, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = await _.GetSavedHardwareList(_, {
                steamid: _,
              });
              if (!_.BSuccess())
                throw new _._(
                  _.GetEResult(),
                  "Error from GetSavedHardwareList",
                );
              return _.Body().toObject().saved_hardware ?? [];
            },
            enabled: _,
            staleTime: 300 * 1e3,
          };
        }
        const _ = 1770934110;
        function _() {
          const _ = (0, _._)(),
            _ = _();
          _.useEffect(() => {
            if (_)
              return SteamClient.BrowserView.RegisterForMessageFromParent(
                (_) => {
                  _ == "OnCloseSaveHardwareDialog" &&
                    _.invalidateQueries({
                      queryKey: _(_._.steamid),
                    });
                },
              ).unregister;
          }, [_, _]);
          const _ = _.useCallback(() => {
            SteamClient.BrowserView.PostMessageToParent(
              "ShowSavedHardwareDialog",
              "",
            );
          }, []);
          return _ ? _ : void 0;
        }
        function _() {
          if (
            !(0, _._)("BrowserView.PostMessageToParent") ||
            !(0, _._)("BrowserView.RegisterForMessageFromParent")
          )
            return !1;
          const _ = (0, _._)();
          return _ == 0 || _ >= _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = "6862-8119-C23E-EA7B",
          _ = 8e3,
          _ = _._.filter((_) => _ != "sc_schinese" && _ != "arabic");
        function _(_) {
          const { appid: _, review: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)(_._.steamid),
            [_, _] = _.useState(() => _(_)),
            [_, _] = _.useState(""),
            _ = _(_, _?.recommendationid),
            _ = _.mutate,
            _ = _.useCallback((_) => {
              _((_) => ({
                ..._,
                ..._,
              }));
            }, []),
            _ = _.useCallback(
              (_) =>
                _({
                  review: _,
                }),
              [_],
            ),
            _ = _?.name ?? "",
            _ = _.useCallback(() => {
              if (!_.review?.trim()) {
                _(_.Localize("#AppPage_WriteReview_ErrorNoText"));
                return;
              }
              if (_.voted_up === void 0) {
                _(_.Localize("#AppPage_WriteReview_ErrorNoRating", _));
                return;
              }
              _(""), _(_);
            }, [_, _, _]);
          if (!_) return null;
          _.use(_.Ready()), _.use(_._.Ready());
          const _ = !!_,
            _ = _.type ?? _._._,
            _ = _.error
              ? _.error.message ||
                _.Localize("#AppPage_WriteReview_ErrorPosting")
              : "";
          return (0, _.jsx)(_._, {
            navEntryPreferPosition: _._.PREFERRED_CHILD,
            children: (0, _.jsxs)(_._, {
              direction: "column",
              gap: "3",
              padding: "4",
              borderColor: "greyneutral-9 50%",
              children: [
                (0, _.jsx)(_, {
                  strAppName: _,
                  eAppType: _,
                  bUpdate: _,
                }),
                (0, _.jsxs)(_._, {
                  gap: "3",
                  children: [
                    !!_ &&
                      (0, _.jsx)(_._, {
                        playerLinkDetails: _,
                        size: "MediumLarge",
                        statusPosition: "border",
                        alt: "",
                      }),
                    (0, _.jsxs)(_._, {
                      direction: "column",
                      gap: "3",
                      flexGrow: "1",
                      navProps: {
                        preferredFocus: !0,
                      },
                      children: [
                        (!!_ || !!_) &&
                          (0, _.jsx)(_._, {
                            size: "3",
                            color: "red-10",
                            children: _ || _,
                          }),
                        (0, _.jsx)(_, {
                          value: _.review ?? "",
                          onTextChange: _,
                          placeholder: _.Localize(
                            "#AppPage_WriteReview_Placeholder",
                          ),
                          rows: 4,
                          maxLength: _,
                        }),
                        (0, _.jsx)(_, {
                          review: _,
                          bFreeApp: !!_.is_free,
                          UpdateForm: _,
                        }),
                        (0, _.jsx)(_, {
                          bVotedUp: _.voted_up,
                          eAppType: _,
                          bUpdate: _,
                          bPosting: _.isPending,
                          UpdateForm: _,
                          OnSubmit: _,
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
          const { strAppName: _, eAppType: _, bUpdate: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                size: "5",
                color: "blue-11",
                children: _.Localize(
                  _
                    ? "#AppPage_WriteReview_TitleUpdate"
                    : "#AppPage_WriteReview_Title",
                  _,
                ),
              }),
              (0, _.jsx)(_._, {
                size: "3",
                color: "greyneutral-11",
                children: (0, _._)(
                  _.Localize(
                    _.GetAppTypeLocKey("#AppPage_WriteReview_Desc", _),
                  ),
                  (0, _.jsx)(_._, {
                    underline: "always",
                    color: "blue-8",
                    href: `${_._.HELP_BASE_URL}faqs/view/${_}`,
                  }),
                ),
              }),
              (0, _._)(_._.EREALM) &&
                (0, _.jsx)(_._, {
                  size: "3",
                  color: "brown-10",
                  children: _.Localize("#AppPage_WriteReview_ChinaDisclaimer"),
                }),
            ],
          });
        }
        function _(_) {
          const { review: _, bFreeApp: _, UpdateForm: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _((_) => !_), []),
            _ = _.useCallback(
              (_) =>
                _({
                  is_public: _.data,
                }),
              [_],
            ),
            _ = _.useCallback(
              (_) =>
                _({
                  language: _.data,
                }),
              [_],
            ),
            _ = _.useCallback(
              (_) =>
                _({
                  comments_disabled: !_,
                }),
              [_],
            ),
            _ = _.useCallback(
              (_) =>
                _({
                  received_compensation: _,
                }),
              [_],
            ),
            _ = _.Localize("#AppPage_WriteReview_Visibility"),
            _ = _.Localize("#AppPage_WriteReview_Language"),
            _ = [
              {
                label: _.Localize("#AppPage_WriteReview_VisibilityPublic"),
                data: !0,
              },
              {
                label: _.Localize("#AppPage_WriteReview_VisibilityFriends"),
                data: !1,
              },
            ],
            _ = _.map((_) => ({
              label: (0, _._)(_),
              data: _,
            }));
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                variant: "basic",
                color: "greyneutral",
                width: "100%",
                focusable: !0,
                onClick: _,
                children: (0, _.jsxs)(_._, {
                  justify: "between",
                  align: "center",
                  width: "100%",
                  children: [
                    _.Localize("#AppPage_WriteReview_Settings"),
                    (0, _.jsx)(_._, {
                      direction: _ ? "up" : "down",
                    }),
                  ],
                }),
              }),
              _ &&
                (0, _.jsxs)(_._, {
                  direction: "column",
                  gap: "2",
                  children: [
                    (0, _.jsxs)(_._, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, _.jsx)(_._, {
                          size: "3",
                          children: _,
                        }),
                        _._.is_limited
                          ? (0, _.jsx)(_._, {
                              size: "3",
                              color: "greyneutral-11",
                              children: _.Localize(
                                "#AppPage_WriteReview_VisibilityLimited",
                              ),
                            })
                          : (0, _.jsx)(_._, {
                              width: "50%",
                              children: (0, _.jsx)(_._, {
                                controlled: !0,
                                rgOptions: _,
                                selectedOption: !!_.is_public,
                                onChange: _,
                                menuLabel: _,
                              }),
                            }),
                      ],
                    }),
                    !(0, _._)(_._.EREALM) &&
                      (0, _.jsxs)(_._, {
                        justify: "between",
                        align: "center",
                        gap: "2",
                        children: [
                          (0, _.jsx)(_._, {
                            size: "3",
                            children: _,
                          }),
                          (0, _.jsx)(_._, {
                            width: "50%",
                            children: (0, _.jsx)(_._, {
                              controlled: !0,
                              rgOptions: _,
                              selectedOption: _.language,
                              onChange: _,
                              menuLabel: _,
                              strDefaultLabel: (0, _._)(_.language ?? ""),
                            }),
                          }),
                        ],
                      }),
                    (0, _.jsx)(_._, {
                      checked: !_.comments_disabled,
                      onChange: _,
                      children: (0, _.jsx)(_._, {
                        size: "3",
                        children: _.Localize(
                          "#AppPage_WriteReview_AllowComments",
                        ),
                      }),
                    }),
                    (0, _.jsx)(_, {
                      strSavedHardwareID: _.saved_hardware_id,
                      UpdateForm: _,
                    }),
                    !_ &&
                      (0, _.jsx)(_._, {
                        checked: !!_.received_compensation,
                        onChange: _,
                        children: (0, _.jsx)(_._, {
                          size: "3",
                          children: _.Localize(
                            "#AppPage_WriteReview_ReceivedFree",
                          ),
                        }),
                      }),
                    (0, _.jsx)(_._, {
                      color: "greyneutral-9 50%",
                      size: "4",
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { strSavedHardwareID: _, UpdateForm: _ } = _,
            [_, _] = _.useState(!!_),
            { data: _, isPending: _ } = _(_),
            _ = _(),
            _ = _.useCallback(
              (_) => {
                _(_),
                  _ ||
                    _({
                      saved_hardware_id: void 0,
                    });
              },
              [_],
            ),
            _ = _.useCallback(
              (_) =>
                _({
                  saved_hardware_id: _.data,
                }),
              [_],
            ),
            _ = _?.[0]?.hardware_id;
          _.useEffect(() => {
            _ &&
              !_ &&
              _ &&
              _({
                saved_hardware_id: _,
              });
          }, [_, _, _, _]);
          const _ = _.Localize("#AppPage_WriteReview_PCSpecs"),
            _ = (_ ?? []).map((_) => ({
              label: _.friendly_name ?? "",
              data: _.hardware_id ?? "",
            }));
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                checked: _,
                onChange: _,
                children: (0, _.jsx)(_._, {
                  size: "3",
                  children: _.Localize("#AppPage_WriteReview_AttachHardware"),
                }),
              }),
              _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsxs)(_._, {
                      justify: "between",
                      align: "center",
                      gap: "2",
                      children: [
                        (0, _.jsx)(_._, {
                          size: "3",
                          children: _,
                        }),
                        (0, _.jsx)(_._, {
                          width: "50%",
                          children: (0, _.jsx)(_._, {
                            controlled: !0,
                            disabled: !_.length,
                            rgOptions: _,
                            selectedOption: _,
                            onChange: _,
                            menuLabel: _,
                            strDefaultLabel: _
                              ? _._.Localize("#Loading")
                              : _.Localize("#AppPage_WriteReview_PCSpecsNone"),
                          }),
                        }),
                      ],
                    }),
                    !!_ &&
                      (0, _.jsx)(_._, {
                        justify: "end",
                        children: (0, _.jsx)(_._, {
                          focusable: !0,
                          variant: "basic",
                          color: "greyneutral",
                          onClick: _,
                          children: _.Localize("#AppPage_WriteReview_AddPC"),
                        }),
                      }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const {
              bVotedUp: _,
              eAppType: _,
              bUpdate: _,
              bPosting: _,
              UpdateForm: _,
              OnSubmit: _,
            } = _,
            _ = _.useCallback(
              () =>
                _({
                  voted_up: !0,
                }),
              [_],
            ),
            _ = _.useCallback(
              () =>
                _({
                  voted_up: !1,
                }),
              [_],
            );
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                direction: "column",
                gap: "2",
                children: [
                  (0, _.jsx)(_._, {
                    size: "4",
                    children: _.Localize(
                      _.GetAppTypeLocKey("#AppPage_WriteReview_Recommend", _),
                    ),
                  }),
                  (0, _.jsxs)(_._, {
                    gap: "2",
                    children: [
                      (0, _.jsx)(_, {
                        bThumbsUp: !0,
                        bSelected: _ === !0,
                        onSelect: _,
                      }),
                      (0, _.jsx)(_, {
                        bThumbsUp: !1,
                        bSelected: _ === !1,
                        onSelect: _,
                      }),
                    ],
                  }),
                ],
              }),
              (0, _.jsx)(_._, {
                justify: "end",
                children: (0, _.jsx)(_._, {
                  focusable: !0,
                  color: "blue",
                  loading: _,
                  onClick: _,
                  children: _.Localize(
                    _
                      ? "#AppPage_WriteReview_Update"
                      : "#AppPage_WriteReview_Post",
                  ),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { bThumbsUp: _, bSelected: _, onSelect: _ } = _;
          return (0, _.jsx)(_._, {
            focusable: !0,
            variant: "basic",
            color: _ ? "blue" : "greyneutral",
            onClick: _,
            children: (0, _.jsxs)(_._, {
              direction: "row",
              gap: "1",
              align: "center",
              children: [
                (0, _.jsx)(_.twC, {
                  className: (0, _._)(
                    _().VerdictIcon,
                    !_ && _().VerdictIconDown,
                  ),
                }),
                (0, _.jsx)(_._, {
                  size: "4",
                  contrast: "title",
                  children: _.Localize(
                    _
                      ? "#AppPage_WriteReview_RecommendYes"
                      : "#AppPage_WriteReview_RecommendNo",
                  ),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const _ = (0, _._)(_._.EREALM);
          return _
            ? {
                ..._,
                language: _ || !_.language ? _() : _.language,
                comments_disabled: _.comments_disabled || _,
                is_public: _.is_public && !_._.is_limited,
              }
            : {
                is_public: !_._.is_limited,
                language: _(),
                comments_disabled: _,
              };
        }
        function _() {
          return (0, _._)(_._.EREALM)
            ? "schinese"
            : _._.LANGUAGE == "korean"
              ? "koreana"
              : _._.LANGUAGE;
        }
        function _(_) {
          const { appid: _, ownReview: _ } = _,
            _ = _(_),
            [_, _] = _.useState(!1);
          return (
            _.useEffect(() => {
              _(_), _(!0);
            }, [_, _]),
            _
              ? (0, _.jsx)(_, {
                  appid: _,
                })
              : null
          );
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = _(_),
            _ = (0, _._)(_),
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => _(!0), []);
          return _
            ? (0, _.jsx)(_._, {
                direction: "column",
                paddingX: "5",
                paddingY: "3",
                background: "greyneutral-2 80%",
                children:
                  _ && !_
                    ? (0, _.jsx)(_, {
                        review: _,
                        eAppType: _.type,
                        nSteamworksAppid: _,
                        onEdit: _,
                      })
                    : (0, _.jsx)(_, {
                        appid: _,
                        review: _ ?? null,
                      }),
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = {
          2023: _().Year2023,
          2024: _().Year2024,
          2025: _().Year2025,
        };
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (_?.steam_award ?? [])
              .filter((_) => !!_.localization?.title && !!_[_.award_year])
              .sort((_, _) => _.award_year - _.award_year);
          return _.length
            ? (0, _.jsx)(_._, {
                direction: "column",
                gap: "4",
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      award: _,
                    },
                    `${_.award_year}_${_.voteid}`,
                  ),
                ),
              })
            : null;
        }
        function _(_) {
          const { award: _ } = _,
            _ = _.award_year,
            _ = (0, _._)(`${_._.STORE_BASE_URL}steamawards/${_}/`);
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().Banner, _[_]),
            href: _,
            children: [
              (0, _.jsxs)("div", {
                className: _().Titles,
                children: [
                  (0, _.jsx)("span", {
                    className: _().AwardsTitle,
                    children: _.Localize("#AppPage_SteamAwards_Title"),
                  }),
                  (0, _.jsx)("span", {
                    className: _().Year,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _().Winner,
                children: _.Localize("#AppPage_SteamAwards_Winner"),
              }),
              (0, _.jsx)("div", {
                className: _().Category,
                children: _.localization.title,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _,
            { metacritic: _, app: _, bShow: _, nScore: _ } = _(_);
          return (
            _.use(_.Ready()),
            !_ || !_
              ? null
              : (0, _.jsxs)(_._, {
                  align: "start",
                  paddingY: "2",
                  direction: "row",
                  children: [
                    (0, _.jsx)(_._, {
                      className: (0, _._)(
                        _().Score,
                        _ > 0 ? _(_, _.type) : _().Low,
                      ),
                      width: "50px",
                      height: "50px",
                      flexShrink: "0",
                      align: "center",
                      justify: "center",
                      children: _ > 0 ? _ : "NA",
                    }),
                    (0, _.jsxs)(_._, {
                      direction: "column",
                      paddingLeft: "2",
                      children: [
                        (0, _.jsx)(_, {}),
                        _ > 0
                          ? _?.url &&
                            (0, _.jsx)(_, {
                              url: _.url,
                            })
                          : (0, _.jsx)(_._, {
                              size: "2",
                              children: _.Localize(
                                "#AppPage_Metacritic_NotReviewed",
                              ),
                            }),
                      ],
                    }),
                  ],
                })
          );
        }
        function _(_) {
          const { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.type === _._._ ? _.related_items?.parent_appid : void 0,
            { data: _ } = (0, _._)(
              _
                ? {
                    appid: _,
                  }
                : void 0,
            );
          if (!_)
            return {
              bShow: !1,
              nScore: 0,
            };
          const _ = _?.metacritic,
            _ = (_ ? _?.metacritic?.score : _?.score) ?? 0;
          return {
            metacritic: _,
            app: _,
            nScore: _,
            bShow: !!_?.always_show || _ > 0,
          };
        }
        function _(_, _) {
          const _ = _ === _._._ || _ === _._._,
            _ = _ ? 61 : 75,
            _ = _ ? 40 : 50;
          return _ >= _ ? _().High : _ >= _ ? _().Medium : _().Low;
        }
        function _(_) {
          const { url: _ } = _;
          return (0, _.jsxs)(_._, {
            size: "2",
            color: "blue-8",
            href: _._.IN_CLIENT ? `steam://openurl/${_}` : _,
            target: _._.IN_CLIENT ? void 0 : "_blank",
            children: [
              _.Localize("#AppPage_Metacritic_ReadCriticReviews"),
              (0, _.jsx)("span", {
                className: _().ExternalIcon,
                children: (0, _.jsx)(_.GrD, {}),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)(_._, {
            direction: "row",
            gap: "1",
            align: "center",
            children: [
              (0, _.jsx)(_._, {
                src: `${_._.IMG_URL}v6/mc_logo_no_text.png`,
                alt: "",
                width: "24px",
                height: "24px",
                flexShrink: "0",
              }),
              (0, _.jsx)(_._, {
                size: "7",
                weight: "heavy",
                contrast: "title",
                children: "metacritic",
              }),
            ],
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { bShow: _ } = _(_);
          _.use(_.Ready());
          const _ =
              _?.partner_awards_bbcode && _.partner_awards_bbcode.length > 0,
            _ = _?.steam_award && _.steam_award.length > 0;
          return !_ && !_ && !_
            ? null
            : (0, _.jsxs)(_, {
                className: _().StoreAwards,
                "flow-children": "column",
                children: [
                  (0, _.jsx)(_, {
                    text: _.Localize("#AppPage_Awards_Header"),
                  }),
                  (0, _.jsx)(_, {
                    appid: _,
                  }),
                  (0, _.jsx)(_, {
                    appid: _,
                  }),
                  _?.partner_awards_bbcode &&
                    (0, _.jsx)(_._, {
                      text: _.partner_awards_bbcode,
                    }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              title: _,
              link_text: _,
              url: _,
              linkType: _ = "inline",
              children: _,
              total_count: _,
              link_footer: _,
              block_footer: _,
            } = _,
            _ = (0, _._)(),
            _ = _
              ? (0, _.jsx)(_._, {
                  contrast: "title",
                  size: "2",
                  weight: "heavy",
                  style: {
                    letterSpacing: "0.5px",
                  },
                  children: _,
                })
              : (0, _.jsx)(_._, {
                  contrast: "body",
                  size: "2",
                  weight: "regular",
                  children: _,
                }),
            _ = _ == "inline" ? _().InlineLink : _().OverlayLink;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                title: _,
                link_text: _ ?? _(_),
                url: _,
              }),
              (0, _.jsx)("div", {
                className: "noOpinionatedGlobalStyles",
                children: (0, _.jsxs)(_._, {
                  direction: "column",
                  gap: "2",
                  className: _().ShopLink,
                  children: [
                    (0, _.jsx)(_._, {
                      className: (0, _._)(_, _().Link),
                      "flow-children": "column",
                      focusClassName: _().ShowLink,
                      focusable: !0,
                      href: _,
                      "aria-label": _(_),
                      children: (0, _.jsxs)(_._, {
                        direction: "column",
                        gap: _ ? "1" : "2",
                        children: [
                          _,
                          (0, _.jsxs)(_._, {
                            autoFlow: "column",
                            autoColumns: "1fr",
                            gap: "2",
                            alignItems: "center",
                            justifyContent: "center",
                            className: _().Items,
                            children: [
                              _,
                              (0, _.jsx)(_, {
                                total_count: _,
                              }),
                            ],
                          }),
                          _ &&
                            (0, _.jsx)("div", {
                              className: _().ActivateLabel,
                              children: (0, _.jsx)(_._, {
                                background: "blue-8",
                                padding: "2",
                                radius: "sm",
                                children: (0, _.jsx)(_._, {
                                  size: "2",
                                  contrast: "title",
                                  children: _,
                                }),
                              }),
                            }),
                          _,
                        ],
                      }),
                    }),
                    _,
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          return _ == null
            ? _.Localize("#ShopLink_ViewAll_NoCount_Narrow")
            : _ >= 1e3
              ? _.Localize(
                  "#ShopLink_ViewAll_NarrowThousands",
                  (_ / 1e3).toFixed(),
                )
              : _.Localize("#ShopLink_ViewAll_NarrowUnderThousand", _);
        }
        function _(_) {
          return _ == null
            ? _.Localize("#ShopLink_ViewAll_NoCount")
            : _ >= 1e3
              ? _.Localize(
                  "#ShopLink_ViewAll_WideThousands",
                  (_ / 1e3).toFixed(),
                )
              : _.Localize("#ShopLink_ViewAll_WideUnderThousand", _);
        }
        function _(_) {
          const { total_count: _ } = _;
          return (0, _.jsx)(_._, {
            className: _().AllText,
            height: "100%",
            background: "greyneutral-5",
            children: (0, _.jsxs)(_._, {
              alignSelf: "center",
              textAlign: "center",
              justifySelf: "center",
              children: [
                (0, _.jsx)(_._, {
                  contrast: "description",
                  className: _().Wide,
                  children: _(_),
                }),
                (0, _.jsx)(_._, {
                  contrast: "description",
                  className: _().Narrow,
                  children: _(_),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { title: _, link_text: _, url: _ } = _;
          return (0, _.jsx)("a", {
            href: _,
            className: _().ResponsiveLink,
            children: (0, _.jsxs)(_._, {
              direction: "row",
              background: "blue-3",
              padding: "2",
              align: "center",
              children: [
                (0, _.jsxs)(_._, {
                  contrast: "subtitle",
                  className: _().Text,
                  children: [_, " - ", _],
                }),
                (0, _.jsx)(_._, {
                  contrast: "subtitle",
                  className: _().Arrow,
                  children: (0, _.jsx)(_.cLJ, {
                    direction: "right",
                  }),
                }),
              ],
            }),
          });
        }
        function _(_, _) {
          switch (_.item_class) {
            case _._:
            case _._:
              return `${_._.COMMUNITY_CDN_URL}economy/profilebackground/items/${_}/${_.image_large}?size=320x200`;
            case _._:
              return (0, _._)(_, _.image_small);
            default:
              return (0, _._)(_, _.image_large);
          }
        }
        function _(_) {
          const { appid: _, items: _, total_count: _, shop_url: _ } = _;
          return (
            _.use(_.Ready()),
            _?.length
              ? (0, _.jsx)(_, {
                  title: _.Localize("#AppPage_PointsShop_Header"),
                  url: _,
                  total_count: _,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        alignSelf: "center",
                        children: (0, _.jsx)(_._, {
                          className: (0, _._)(
                            _().ItemImage,
                            _.item_class == _._ && _().ProfileBackground,
                          ),
                          src: _(_, _),
                          alt: _.title,
                        }),
                      },
                      _.defid,
                    ),
                  ),
                })
              : null
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 256;
        function _(_) {
          const _ = `${_._.COMMUNITY_CDN_URL}economy/image/${_}/${_}fx${_}f`;
          return {
            src: _,
            srcSet: `${_} 1x, ${_}dpx2x 2x`,
          };
        }
        function _(_) {
          const { items: _, shop_url: _ } = _;
          return (
            _.use(_.Ready()),
            _?.length
              ? (0, _.jsx)(_, {
                  title: _.Localize("#AppPage_ItemShop_Header"),
                  link_text: _.Localize("#AppPage_ItemShop_ShopAll"),
                  url: _,
                  linkType: "overlay",
                  children: _.map((_) =>
                    (0, _.jsxs)(
                      _._,
                      {
                        className: _().Item,
                        textAlign: "center",
                        children: [
                          (0, _.jsx)(_._, {
                            className: _().ItemImage,
                            ..._(_.icon_url),
                            alt: _.name,
                          }),
                          (0, _.jsx)(_._, {
                            size: "2",
                            weight: "heavy",
                            className: _().Price,
                            children: _.price,
                          }),
                        ],
                      },
                      _.itemdefid,
                    ),
                  ),
                })
              : null
          );
        }
        const _ = "steamQueryPersist";
        function _(_) {
          return _.meta?.[_];
        }
        const _ = _.createContext(void 0),
          _ = _.Provider;
        function _(_) {
          const { area: _, maxAgeSeconds: _, meta: _, ..._ } = _,
            _ = _.useContext(_),
            _ = _.useMemo(() => _(_, _, _), [_, _, _]);
          return (0, _._)({
            ..._,
            meta: _,
            persister: _?.GetPersister(_),
          });
        }
        function _(_) {
          const _ = React.useContext(_),
            _ = React.useMemo(
              () =>
                _.queries.map((_) => {
                  const { area: _, maxAgeSeconds: _, meta: _, ..._ } = _;
                  return {
                    ..._,
                    meta: _(_, _, _),
                    persister: _?.GetPersister(_),
                  };
                }),
              [_.queries, _],
            );
          return useQueries({
            queries: _,
            combine: _.combine,
          });
        }
        function _(_, _, _) {
          return {
            ..._,
            [_]: {
              area: _,
              maxAgeSeconds: _,
            },
          };
        }
        async function _(_, _) {
          const { area: _, maxAgeSeconds: _, meta: _, ..._ } = _,
            _ = {
              ..._,
              meta: _(_, _, _),
              staleTime: 0,
            },
            _ = _.getQueryState(_.queryKey);
          _ &&
            _.fetchStatus !== "idle" &&
            (await _.fetchQuery(_).catch(() => {})),
            await _.fetchQuery(_);
        }
        const _ = Date.now();
        function _(_) {
          return _ > 0 && _ < _;
        }
        var _ = __webpack_require__("chunkid");
        const _ = 0;
        function _(_, ..._) {
          return ["achievements", _, ..._];
        }
        const _ = (_) => _(_, "schema");
        function _(_, _) {
          if (!(_ === void 0 || _ === ""))
            return `${_._.BASE_URL_SHARED_CDN}community_assets/images/apps/${_}/${_}`;
        }
        async function _(_, _, _) {
          const _ = await _.xtC.GetGameAchievements(_, {
            appid: _,
            language: _,
          });
          if (_.GetEResult() === _._)
            return {
              appid: _,
              language: _,
              groups: [],
              schema_hash: 0,
              schema_version: 0,
            };
          if (_.GetEResult() !== _._)
            throw (
              (console.error(
                "Received error from GetGameAchievements",
                _.GetEResult(),
              ),
              new Error(`Error from GetGameAchievements: ${_.GetEResult()}`))
            );
          const _ = {};
          _[_] = {
            _: _,
            archived: !1,
            developeronly: !1,
            ispublic: !0,
            dlcappid: 0,
            order: -1,
            achievements: [],
          };
          const _ = _.Body().groups().toString();
          _.Body()
            .groups()
            .forEach((_) => {
              const _ = _.groupid();
              _[_] = {
                _: _,
                name: _.localized_name(),
                archived: _.archived() ?? !1,
                ispublic: _.ispublic() ?? !0,
                developeronly: _.developeronly() ?? !1,
                dlcappid: _.dlcappid() ?? 0,
                order: _.order() ?? 0,
                achievements: [],
              };
            }),
            _.Body()
              .toObject()
              ?.achievements?.forEach((_) => {
                const _ = _.groupid ?? _;
                _[_].achievements.push({
                  internal_key: _.internal_key ?? 0,
                  api_name: _.internal_name ?? "",
                  name: _.localized_name,
                  description: _.localized_desc,
                  hidden: _.hidden ?? !1,
                  archived: _.archived ?? !1,
                  icon_achieved: _(_, _.icon),
                  icon_unachieved: _(_, _.icon_gray),
                  groupid: _.groupid ?? _,
                  min_progress: _.min_progress_int ?? _.min_progress_float,
                  max_progress: _.max_progress_int ?? _.max_progress_float,
                });
              });
          const _ = Object.values(_)
            .filter((_) => _.achievements.length > 0)
            .sort((_, _) => _.order - _.order);
          return {
            appid: _,
            language: _,
            groups: _,
            schema_hash: _.Body()?.schema_hash() ?? 0,
            schema_version: _.Body()?.schema_version() ?? 0,
          };
        }
        const _ = (_) => _(_, "globalpercentages");
        async function _(_, _) {
          const _ = await _.xtC.GetGlobalAchievementPercentages(_, {
            appid: _,
          });
          if (_.GetEResult() === _._)
            return {
              percentages: {},
            };
          if (_.GetEResult() !== _._)
            throw (
              (console.error(
                "Received error from GetGlobalAchievementPercentages",
                _.GetEResult(),
              ),
              new Error(
                `Error from GetGlobalAchievementPercentages: ${_.GetEResult()}`,
              ))
            );
          return {
            percentages: _.Body()
              .achievements()
              .reduce((_, _) => {
                const _ = _.internal_key();
                return (
                  _ === void 0 || (_[_] = _.player_percent_unlocked() ?? 0.1), _
                );
              }, {}),
          };
        }
        function _(_, _) {
          return _(_, "user_achievements", _);
        }
        function _(_, _, _, _) {
          const _ = (_?.achievements() ?? []).reduce((_, _) => {
              const _ = _.internal_key();
              return (
                (_[_] = {
                  internal_key: _,
                  unlocked: _.unlocked(),
                  unlock_time: _.unlock_time(),
                  progress: _.progress_int() ?? _.progress_float(),
                }),
                _
              );
            }, {}),
            _ = (_?.groups() ?? []).reduce((_, _) => {
              const _ = _.groupid(),
                _ = _.is_completed(),
                _ = _.time_completed();
              return (
                (_[_] = {
                  groupid: _,
                  is_achievable: _.is_achievable(),
                  completed_achievements: _.completed_achievements() ?? 0,
                  is_completed: _ === void 0 ? !1 : _,
                  time_completed: _ || void 0,
                }),
                _
              );
            }, {});
          return {
            appid: _,
            steamid: _,
            achievements: _,
            groups: _,
            schema_hash: _,
          };
        }
        function _(_, _) {
          if (!_) return _;
          const _ = {
            ..._.groups,
          };
          for (const _ of Object.values(_.groups)) {
            const _ = _.groups[_.groupid];
            _[_.groupid] = {
              ..._,
              is_completed: (_?.is_completed ?? !1) || _.is_completed,
              time_completed: _?.time_completed ?? _.time_completed,
            };
          }
          return {
            ..._,
            achievements: {
              ..._.achievements,
              ..._.achievements,
            },
            groups: _,
          };
        }
        class _ extends Error {
          constructor() {
            super("GetUserAchievements: server unreachable");
          }
        }
        function _(_) {
          const _ = _.Hdr().transport_error();
          return _ === k_ETransportError_RequestNotSent ||
            _ === k_ETransportError_ResponseNotReceived
            ? !0
            : _.GetEResult() === k_EResultNoConnection ||
                _.GetEResult() === k_EResultTimeout;
        }
        async function _(_, _, _) {
          if (_ == "" || _ == "0") return _(_, _, void 0, 0);
          const _ = await PlayerService.GetUserAchievements(_, {
            appid: _,
            steamid: _,
          });
          if (
            _.GetEResult() === k_EResultAccessDenied ||
            _.GetEResult() === k_EResultAccountNotFound
          )
            return _(_, _, void 0, 0);
          if (_(_)) throw new _();
          if (_.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from GetUserAchievements",
                _.GetEResult(),
              ),
              new Error(`Error from GetUserAchievements: ${_.GetEResult()}`))
            );
          return _(_, _, _.Body(), _.Body()?.schema_hash() ?? 0);
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return _?.bNoRetryOnError
            ? {
                retry: !1,
                retryOnMount: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1,
              }
            : {};
        }
        function _(_) {
          return {
            ..._,
            groups: _.groups.map((_) =>
              _._ === _
                ? {
                    ..._,
                    name: _._.Localize("#Achievements_Set_BaseGame"),
                  }
                : _,
            ),
          };
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = _._.LANGUAGE;
              return _(_, _, _);
            },
            select: _,
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function _(_, _) {
          const _ = (0, _._)();
          return _({
            ..._(_, _),
            ..._(_),
          });
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => _(_, _),
            staleTime: 1440 * 60 * 1e3,
            area: "achievements",
          };
        }
        function _(_, _) {
          const _ = (0, _._)();
          return _({
            ..._(_, _),
            ..._(_),
          });
        }
        function _(_, _) {
          const { data: _ } = _(_);
          if (_) return _.percentages[_] ?? void 0;
        }
        function _(_, _) {
          const _ = _(_),
            _ = _(_),
            _ = _.data,
            _ = _.data;
          if (!_ || !_)
            return {
              data: void 0,
              isPending: _.isPending || _.isPending,
            };
          const _ = _ ? GetAchievementInternalKeyByApiName(_, _) : void 0;
          return {
            data: _ === void 0 ? void 0 : (_.percentages[_] ?? void 0),
            isPending: !1,
          };
        }
        function _(_, _, _) {
          return {
            queryKey: GetUserAchievementsQueryKey(_, _),
            queryFn: async () => GetUserAchievements(_, _, _),
            staleTime: 600 * 1e3,
            area: "achievements",
          };
        }
        function _(_, _, _) {
          const { fnFetchLocalUserAchievements: _ } = useAchievementsHost(),
            _ = !!_ && !!_ && _.error instanceof ServerUnreachableError,
            _ = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                _,
                "local_user_achievements",
                _,
                _.errorUpdatedAt,
              ),
              queryFn: async () => (await _(_, _)) ?? null,
              enabled: _,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
            }),
            _ = _ ? _.data : void 0,
            _ = _.dataUpdatedAt;
          return useMemo(
            () =>
              _
                ? {
                    ..._,
                    data: MergeLocalUserAchievements(_.data, _),
                    dataUpdatedAt: Math.max(_.dataUpdatedAt, _),
                  }
                : _,
            [_, _, _],
          );
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = usePersistedQuery(_(_, _, _));
          return _(_, _, _);
        }
        function _(_) {
          return _.map((_) => _.data);
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useMemo(() => _.map((_) => _(_, _, _)), [_, _, _]);
          return usePersistedQueries({
            queries: _,
            combine: _,
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = _(_),
            _ = _(_),
            _ = usePersistedQuery({
              ..._(_, _, _ ?? ""),
              enabled: !!_,
            }),
            _ = _(_, _ ?? "", _),
            _ = !!_,
            _ = _.data,
            _ = _ ? _.data : void 0,
            _ = _ != null && (!_ || _ !== void 0),
            _ = () => (_ ? GetAchievementsSummary(_, _.data, _) : void 0),
            _ = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                _,
                "summary",
                _ ?? "",
                _.dataUpdatedAt,
                _.dataUpdatedAt,
                _ ? _.dataUpdatedAt : 0,
              ),
              queryFn: () => {
                const _ = _();
                if (_ === void 0)
                  throw new Error("No achievements schema to summarize");
                return _;
              },
              initialData: _,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: _,
            }),
            _ = _ ? [_, _] : [_],
            _ = _.find((_) => _.data === void 0),
            _ = _?.isPending ?? !1,
            _ = _.find((_) => _.isError),
            _ = _ ? void 0 : _.data;
          return {
            isPending: _,
            isError: !_ && _ === void 0,
            error: _?.error ?? null,
            data: _,
          };
        }
        function _(_, _) {
          const _ = _(_),
            _ = _(_),
            _ = _(_, _),
            _ = _.data,
            _ = _.data,
            _ = !!_ && !!_,
            _ = () => (_ ? GetAchievementsByStatus(_, _.data, _) : void 0),
            _ = useQuery({
              queryKey: GetAppAchievementsQueryKey(
                _,
                "by_status",
                _,
                _.dataUpdatedAt,
                _.dataUpdatedAt,
                _.dataUpdatedAt,
              ),
              queryFn: () => {
                const _ = _();
                if (_ === void 0)
                  throw new Error("No achievements to split by status");
                return _;
              },
              initialData: _,
              staleTime: 1 / 0,
              gcTime: 60 * 1e3,
              enabled: _,
            });
          return {
            data: _ ? _.data : void 0,
            isPending: !_ && (_.isPending || _.isPending),
          };
        }
        async function _(_, _, _, _) {
          await FetchPersistedQuery(_, _(_, _, _));
        }
        async function _(_, _, _) {
          await FetchPersistedQuery(_, _(_, _));
        }
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          const { data: _ } = _(_);
          if (!_) return;
          const _ = new Set();
          let _ = 0;
          const _ = [];
          for (const _ of _.groups) {
            const _ = _.achievements.filter((_) => !_.archived);
            if (!(!_ || !_?.length || _.archived)) {
              if (_) {
                if (_.dlcappid != _) continue;
              } else if (_.dlcappid) {
                _.add(_.dlcappid);
                continue;
              }
              _.push(..._), _++;
            }
          }
          if (_?.length)
            return {
              achievements: _,
              nDLCCount: _.size,
              nGroupCount: _,
            };
        }
        function _(_) {
          const { appid: _, dlcappid: _, iconCount: _ = 4 } = _;
          _.use(_.Ready());
          const _ = _(_, _),
            _ = _(_),
            _ = (0, _._)();
          if (!_ || _.isPending) return null;
          const { achievements: _, nDLCCount: _, nGroupCount: _ } = _,
            _ = _.sort((_, _) => {
              if (!_.hidden && _.hidden) return -1;
              if (_.hidden && !_.hidden) return 1;
              const _ = _?.data?.percentages?.[_.internal_key] ?? 0;
              return (_?.data?.percentages?.[_.internal_key] ?? 0) - _;
            }).slice(0, _),
            _ = Array(_ - _.length).fill(void 0),
            _ = (0, _._)({
              appid: _,
              dlc: _,
            }),
            _ = (0, _._)({
              appid: _,
              dlc: "all",
            }),
            _ =
              _ == 0 || !_
                ? null
                : (0, _.jsx)(_._, {
                    color: "plum-8",
                    size: "2",
                    children: _.Localize("#AppPage_Achievements_DLCCount", _),
                  }),
            _ =
              _ == 0 || _
                ? null
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      _ > 1 &&
                        (0, _.jsx)(_._, {
                          size: "2",
                          contrast: "title",
                          href: _,
                          children: _.Localize(
                            "#AppPage_Achievements_GroupCount",
                            _,
                          ),
                        }),
                      (0, _.jsx)(_._, {
                        size: "2",
                        color: "plum-8",
                        href: _,
                        children: _.Localize(
                          "#AppPage_Achievements_DLCCount",
                          _,
                        ),
                      }),
                    ],
                  }),
            _ =
              _ <= 1 || !_
                ? void 0
                : _.Localize("#AppPage_Achievements_GroupCount", _);
          return (0, _.jsxs)(_, {
            title: _.Localize(
              _
                ? "#AppPage_Achievements_Header"
                : "#AppPage_Achievements_Header_Desktop",
            ),
            link_text: _,
            total_count: _?.length,
            url: _,
            link_footer: _,
            block_footer: _,
            children: [
              _.map((_, _) => (0, _.jsx)(_._, {}, _)),
              _.map((_, _) =>
                (0, _.jsx)(
                  _._,
                  {
                    achievement: _,
                    unlocked: !_.hidden,
                    size: "fill",
                  },
                  _.api_name,
                ),
              ),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 30,
          _ = [
            {
              eType: _._._,
              strPath: "quickref",
              strLabel: "#AppPage_LinksAndInfo_QuickRef",
            },
            {
              eType: _._._,
              strPath: "manual",
              strLabel: "#AppPage_LinksAndInfo_Manual",
            },
            {
              eType: _._._,
              strPath: "warranty",
              strLabel: "#AppPage_LinksAndInfo_Warranty",
            },
          ];
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)(_);
          if ((_.use(_.Ready()), !_)) return null;
          const _ = _._.EREALM === _._.k_ESteamRealmChina;
          return (0, _.jsxs)(_._, {
            className: _().LinksAndInfo,
            children: [
              (0, _.jsx)(_, {
                text: _.Localize("#AppPage_LinksAndInfo_Header"),
              }),
              (0, _.jsx)(_, {
                url: `${_._.COMMUNITY_BASE_URL}app/${_}`,
                label: "#AppPage_LinksAndInfo_CommunityHub",
              }),
              (!_ || _(_)) &&
                (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    appid: _,
                    steamworksAppID: _,
                    app: _,
                    bSteamChina: _,
                    links: _?.links_and_info,
                    rgSocialLinks: _,
                    bRequiresShipping: !!_?.purchase_options?.some(
                      (_) => _.requires_shipping,
                    ),
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _.useCallback(() => _((_) => !_), []);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                align: "center",
                cursor: "pointer",
                background: "sky-6 50%",
                radius: "sm",
                role: "button",
                onClick: _,
                "aria-expanded": _,
                children: [
                  (0, _.jsx)(_._, {
                    flexGrow: "1",
                    paddingX: "3",
                    paddingY: "2",
                    children: (0, _.jsx)(_._, {
                      size: "2",
                      color: "blue-8",
                      children: _.Localize("#AppPage_LinksAndInfo_MoreLinks"),
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    paddingX: "2",
                    children: (0, _.jsx)(_, {
                      bExpanded: _,
                    }),
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().MoreLinks,
                  children: _.children,
                }),
            ],
          });
        }
        function _(_) {
          const { bExpanded: _ } = _;
          return (0, _.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 18 18",
            fill: "#e5e5e5",
            "aria-hidden": "true",
            children: _
              ? (0, _.jsx)("path", {
                  _: "M9.7,9.7h4.7C14.7,9.7,15,9.4,15,9s-0.3-0.7-0.7-0.7H9.7H8.3H3.7C3.3,8.3,3,8.6,3,9s0.3,0.7,0.7,0.7h4.7H9.7z",
                })
              : (0, _.jsx)("path", {
                  _: "M9.7,3.7C9.7,3.3,9.4,3,9,3S8.3,3.3,8.3,3.7v4.7H3.7C3.3,8.3,3,8.6,3,9s0.3,0.7,0.7,0.7h4.7v4.7C8.3,14.7,8.6,15,9,15s0.7-0.3,0.7-0.7V9.7h4.7C14.7,9.7,15,9.4,15,9s-0.3-0.7-0.7-0.7H9.7V3.7z",
                }),
          });
        }
        function _(_) {
          return _.type != _._._ && _.type != _._._ && _.type != _._._;
        }
        function _(_) {
          const {
              appid: _,
              steamworksAppID: _,
              app: _,
              bSteamChina: _,
              links: _,
              rgSocialLinks: _,
              bRequiresShipping: _,
            } = _,
            _ = !!_.categories?.feature_categoryids?.includes(_);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        url: `${_._.STORE_BASE_URL}hardware_order_terms`,
                        label: "#AppPage_LinksAndInfo_HardwareOrderTerms",
                        bStoreNav: !0,
                      }),
                    (0, _.jsx)(_, {
                      url: _?.website,
                      label: _.Localize("#AppPage_LinksAndInfo_Website"),
                    }),
                    _?.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          social: _,
                        },
                        `${_.link_type}_${_.url ?? _.text}`,
                      ),
                    ),
                    _.filter((_) =>
                      _?.available_documents?.includes(_.eType),
                    ).map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          url: `${_._.STORE_BASE_URL}${_.strPath}/${_}`,
                          label: _.strLabel,
                        },
                        _.eType,
                      ),
                    ),
                    (0, _.jsx)(_, {
                      url: _?.online_manual_url,
                      label: _.Localize("#AppPage_LinksAndInfo_Manual"),
                    }),
                    (0, _.jsx)(_, {
                      url: _?.health_warning_url,
                      label: _.Localize("#AppPage_LinksAndInfo_HealthWarning"),
                    }),
                    (0, _.jsx)(_, {
                      url: _?.privacy_policy_url,
                      label: _.Localize("#AppPage_LinksAndInfo_PrivacyPolicy"),
                    }),
                    (0, _.jsx)(_, {
                      url: _?.stats_url,
                      label: _.Localize("#AppPage_LinksAndInfo_Stats"),
                    }),
                  ],
                }),
              _(_) &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      url: `${_._.STORE_BASE_URL}newshub/?appids=${_}`,
                      label: "#AppPage_LinksAndInfo_UpdateHistory",
                      bStoreNav: !0,
                    }),
                    (0, _.jsx)(_, {
                      url: `${_._.STORE_BASE_URL}newshub/app/${_}`,
                      label: "#AppPage_LinksAndInfo_News",
                      bStoreNav: !0,
                    }),
                  ],
                }),
              !_ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    _ &&
                      (0, _.jsx)(_, {
                        url: `${_._.COMMUNITY_BASE_URL}app/${_}/workshop/`,
                        label: "#AppPage_LinksAndInfo_Workshop",
                      }),
                    _.name &&
                      (0, _.jsx)(_, {
                        url: `${_._.COMMUNITY_BASE_URL}actions/Search?T=ClanAccount&K=${encodeURIComponent(_.name)}`,
                        label: "#AppPage_LinksAndInfo_CommunityGroups",
                      }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const { url: _, label: _, bStoreNav: _ } = _,
            _ = (0, _._)(_ ? _ : void 0);
          return (0, _.jsx)(_._, {
            className: _().LinkRow,
            href: _ || _,
            children: (0, _.jsx)(_._, {
              color: "blue-8",
              children: _.Localize(_),
            }),
          });
        }
        function _(_) {
          const { url: _, label: _ } = _;
          return (0, _.jsxs)(_._, {
            className: _().LinkRow,
            href: _._.IN_CLIENT ? `steam://openurl_external/${_}` : _,
            target: _._.IN_CLIENT ? void 0 : "_blank",
            children: [
              (0, _.jsx)(_._, {
                color: "blue-8",
                children: _.Localize(_),
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _(_) {
          const { url: _, label: _, children: _ } = _,
            _ = _(_);
          return _
            ? (0, _.jsxs)(_._, {
                className: _().LinkRow,
                href: _,
                target: _._.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: [
                  _,
                  (0, _.jsx)(_._, {
                    color: "blue-8",
                    children: _,
                  }),
                  (0, _.jsx)(_, {}),
                ],
              })
            : null;
        }
        function _(_) {
          const { social: _ } = _,
            _ = _.link_type ?? _._._,
            _ = (0, _._)(_);
          if (!_) return null;
          const _ = (0, _._)(`#StoreAdmin_SocialMedia_Type_${_}`),
            _ = (0, _.jsx)(_._, {
              linkType: _,
              className: _().SocialIcon,
            });
          return _.url
            ? (0, _.jsx)(_, {
                url: _.url,
                label: _,
                children: _,
              })
            : (0, _.jsxs)("div", {
                className: _().LinkRow,
                children: [
                  _,
                  (0, _.jsx)(_._, {
                    contrast: "body",
                    children: `${_} ${_.text ?? ""}`,
                  }),
                ],
              });
        }
        function _() {
          return (0, _.jsx)("span", {
            className: _().ExternalIcon,
            children: (0, _.jsx)(_.GrD, {}),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _?.franchises?.find(
              (_) => !!_.creator_clan_account_id,
            )?.creator_clan_account_id,
            _ = _?.type == _._._ || _?.type == _._._,
            _ =
              _ && !_
                ? {
                    creatorid: _,
                  }
                : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _?.name,
            _ = (0, _._)(
              _ && _ ? _(_, _, _?.store_url_slug) : void 0,
              "franchise-home-link",
            );
          if (!_ || !_) return null;
          _.use(_.Ready());
          const _ = _?.creator_home_background,
            _ = _
              ? `${_._.CLAN_CDN_ASSET_URL}images/${_}/${encodeURIComponent(_)}`
              : void 0,
            _ = _.toLowerCase().includes("franchise");
          return (0, _.jsxs)(_._, {
            className: _().FranchiseNotice,
            href: _,
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _().Background,
                  style: {
                    backgroundImage: `url( "${_}" )`,
                  },
                }),
              (0, _.jsx)("div", {
                className: _().Name,
                children: _.Localize(
                  _
                    ? "#AppPage_Franchise_SeeAll_NamedFranchise"
                    : "#AppPage_Franchise_SeeAll",
                  _,
                ),
              }),
            ],
          });
        }
        function _(_, _, _) {
          return _._.EREALM === _._.k_ESteamRealmChina
            ? `${_._.STORE_BASE_URL}search/?franchise=${encodeURIComponent(_)}`
            : _
              ? `${_._.STORE_BASE_URL}franchise/${encodeURIComponent(_)}`
              : `${_._.STORE_BASE_URL}curator/${_}`;
        }
        const _ = _.lazy(() =>
            __webpack_require__
              ._("chunkid")
              .then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          ),
          _ = _.lazy(async () => ({
            default: (
              await __webpack_require__
                ._("chunkid")
                .then(__webpack_require__.bind(__webpack_require__, "chunkid"))
            ).SeasonPassDisplayFromStoreBrowse,
          })),
          _ = _.lazy(() =>
            Promise.all([
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
            ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          ),
          _ = _.lazy(() =>
            Promise.all([
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
            ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          ),
          _ = _.lazy(() =>
            Promise.all([
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
            ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          ),
          _ = _.lazy(async () => ({
            default: (
              await Promise.resolve().then(
                __webpack_require__.bind(__webpack_require__, "chunkid"),
              )
            ).AccessibilityFeatureDisplay,
          }));
        function _(_) {
          const { appid: _ } = _,
            _ = (0, _._)("store_page_asset_url", "application_config");
          return (0, _.jsx)(_._, {
            store_page_asset_url: _,
            children: (0, _.jsx)(_, {
              children: (0, _.jsx)(_, {
                children: (0, _.jsxs)(_._, {
                  eAdultOnlyMediaBehavior: "allowed",
                  children: [
                    (0, _.jsx)(_._, {
                      config: {
                        "events-row": () =>
                          (0, _.jsx)(_._, {
                            children: (0, _.jsx)(_, {
                              appid: _,
                            }),
                          }),
                        "deck-topplayed-banner": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "steamawardsvote-embed": () =>
                          (0, _.jsx)(_, {
                            appID: _,
                          }),
                        "demo-and-quick-pitch": () =>
                          (0, _.jsx)(_._, {
                            children: (0, _.jsx)(_, {
                              appID: _,
                            }),
                          }),
                        "deck-verified-results": (_) =>
                          (0, _.jsx)(_, {
                            appID: _,
                            results: (0, _._)(
                              "hardwarecompatibility",
                              "application_config",
                            ),
                            appName: (0, _._)("appname", "application_config"),
                            ..._,
                          }),
                        "gamehighlight-trailer": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "gamehighlight-gamepadcarousel": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "gamehighlight-desktopcarousel": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "discovery-queue-app-widget": () =>
                          (0, _.jsx)(_, {
                            appID: _,
                          }),
                        "game-notice-controller-required": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                            type: _.EPurchaseNoticeType_ControllerRequired,
                          }),
                        "game-notice-vr-required": () =>
                          (0, _.jsx)(_, {
                            type: _.EPurchaseNoticeType_VRRequired,
                          }),
                        "game-notice-vr-supported": () =>
                          (0, _.jsx)(_, {
                            type: _.EPurchaseNoticeType_VRSupported,
                          }),
                        "season-pass-display": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "season-pass-display-gamepad": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "storeitems-carousel": (_) =>
                          (0, _.jsx)(_._, {
                            feature: "recommended",
                            children: (0, _.jsx)(_.default, {
                              ..._,
                            }),
                          }),
                        "storeitems-carousel-dlc": (_) =>
                          (0, _.jsx)(_._, {
                            feature: "dlc",
                            children: (0, _.jsx)(_.default, {
                              ..._,
                            }),
                          }),
                        "creatorhome-carousel": (_) =>
                          (0, _.jsx)(_._, {
                            feature: "creator",
                            children: (0, _.jsx)(_, {
                              ..._,
                            }),
                          }),
                        parentappwidget: (_) =>
                          (0, _.jsx)(_._, {
                            feature: _.feature,
                            children: (0, _.jsx)(_, {
                              appid: _.appid,
                            }),
                          }),
                        appreviews: (_) =>
                          (0, _.jsx)(_._, {
                            ..._,
                          }),
                        "wishlist-item-categories": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "purchase-options": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "purchase-options-dlc": (_) =>
                          (0, _.jsx)(_._, {
                            feature: "game-purchase-dlc",
                            children: (0, _.jsx)(_, {
                              ..._,
                              appid: _,
                            }),
                          }),
                        "purchase-options-dependent-dlc": (_) =>
                          (0, _.jsx)(_._, {
                            feature: "dlc-dependency",
                            children: (0, _.jsx)(_, {
                              ..._,
                            }),
                          }),
                        "summary-bar-top": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "features-section": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                            appid: _,
                          }),
                        "about-this-game": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "page-sections": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "legal-notice": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "press-reviews": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "ai-disclosure": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "mature-content-description": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "cast-and-crew": () =>
                          (0, _.jsx)(_._, {
                            feature: "cast-and-crew",
                            children: (0, _.jsx)(_, {
                              appid: _,
                            }),
                          }),
                        "series-episodes": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "music-album-details": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                            appid: _,
                          }),
                        "interest-buttons": (_) =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "add-to-wishlist": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                            color: "storegreen",
                          }),
                        "recommendation-reasons": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                            appid: _,
                          }),
                        "friend-ownership": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                            appid: _,
                          }),
                        "referring-curator-review": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "game-rating-block": (_) =>
                          (0, _.jsx)(_.GameRatingBlock, {
                            ..._,
                            _: {
                              appid: _,
                            },
                          }),
                        achievements: (_) =>
                          (0, _.jsx)(_, {
                            appid: _.parent_appid ?? _,
                            dlcappid: _.dlcappid,
                          }),
                        "early-access": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                            appid: _,
                          }),
                        "ownership-banner": (_) =>
                          (0, _.jsx)(_._, {
                            feature: "owned-game",
                            children: (0, _.jsx)(_, {
                              ..._,
                              appid: _,
                            }),
                          }),
                        "store-awards": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "points-shop-items": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "item-shop-items": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                        "links-and-info": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "franchise-notice": () =>
                          (0, _.jsx)(_, {
                            appid: _,
                          }),
                        "write-review": (_) =>
                          (0, _.jsx)(_._, {
                            feature: "owned-game",
                            children: (0, _.jsx)(_, {
                              ..._,
                              appid: _,
                            }),
                          }),
                      },
                    }),
                    (0, _.jsx)(_._, {
                      omitFocusNavTreeBridge: !0,
                      config: {
                        "review-award": () => (0, _.jsx)(_._, {}),
                        "broadcast-embed": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                            appid: _.appid,
                          }),
                        "store-sidebar-accessibility-info": (_) =>
                          (0, _.jsx)(_, {
                            features: _,
                          }),
                        "store-sidebar-controller-support-info": (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }
        function _(_) {
          const { children: _ } = _,
            [_, _] = _.useState(!1);
          return _
            ? _
            : (0, _.jsx)(_._, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-gameinterest-cache": (_) =>
                    (0, _.jsx)(_, {
                      ..._,
                      markReady: () => _(!0),
                    }),
                },
              });
        }
        function _(_) {
          const { children: _ } = _,
            [_, _] = _.useState(!1);
          return _
            ? _
            : (0, _.jsx)(_._, {
                omitFocusNavTreeBridge: !0,
                config: {
                  "apppage-store-browse-cache": (_) =>
                    (0, _.jsx)(_, {
                      ..._,
                      markReady: () => _(!0),
                    }),
                },
              });
        }
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Icon: "M5YgSyrfvCXXY_XYhYzcl",
          AchievementIconWrapper: "_1DmdUWkRKPlUYGtbBrrRtx",
          RareAchievementIconGlowContainerRoot: "_1R1QQtfmrxNkfIGlKSdDqG",
          RareAchievementIconGlowContainer: "kt0NXHlg2kFjVkiN_2eEL",
          rotate: "_1ovVdJrqKKpglnX8FYej3J",
          RareAchievementNoAnimation: "_1mSBKtmFFZvwBLtxBOMwak",
          RareAchievementIconGlow: "_3vFmYitX2pXuOenxR0blk8",
          IconGlow: "_2BCoqu4wd4ehkJkelVhjb3",
          HiddenLabel: "_1smYxH70zcX0D3CUQDwF3o",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ObjectFit: "_NIZ2fYFBu6WSnEE1H6i3",
          ObjectPosition: "_3OZ4rrlKzwAYOKP9HdqUrq",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TextEntry: "_1vE-LsK6l_D_5yjbywZV1p",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Separator: "_2v8lnOhHPKk5DrlAD0yAwc",
          "Size-1": "HA_T1szVWGIw7_cDibhei",
          "Size-2": "oSgUz2qE-NgHuOm4wt_OC",
          "Size-3": "f9Ra4JmQiBJz_dBLijs_x",
          "Size-4": "_1zkUYDDyfzPgesBbGmMsxP",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Grid: "_2IVd64AHN6R428cgcPqW7M",
          Display: "_2PUyyAEGuZenuwES7VJvQO",
          Columns: "_16FZUyKiH6Z7trthKypJwf",
          Rows: "_2QdiX1hDsJmlkrHmcCOMbV",
          AutoColumns: "Cr7YIMQn6_lDRU4-3BR8b",
          AutoRows: "_3kyzvGnYVLT0DW6nzP9n18",
          AutoFlow: "_3AvZKfpfaIQbfczVRBASsX",
          Areas: "_1-yfCTWkj4tOFfb3EKXx6N",
          Flow: "_1yUwWGTk4IX0IhdJiKfFBf",
          AlignContent: "_2Tglp6488nVBhU976Llfpe",
          JustifyContent: "TT1_g1XWXbbLgxOPIpczV",
          AlignItems: "_1ve3GjJA-d6MfYcIiXdqz0",
          JustifyItems: "_2LsmJGVn3g0GHmBPNWVn5T",
          Gap: "c0C2uHpDLCegllhH1rM3M",
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
          GameRating: "dIVKtZR3FPk--WsTHPpCg",
          Title: "g6OWaWhTs7-jMnb_ipVdD",
          Banned: "_2OBX7mi9MwO3wh8vz69RW_",
          RequiredAge: "_3ixbRnhEXoSAFMMOxMR7kP",
          Icon: "_3NX32L22YZdobMQdeHDTRz",
          DescriptorText: "_3x1L_MQDZD6RKFHPJQDmCN",
          AllAges: "_2VePhLetNEJD1gctFnUgIC",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SaleTechPriceGrid: "_14x0A0cAhaV-g8Od_xGbRL",
          LowestRecentPrice: "yLlRefh-UYhYZLE0_k-BK",
          FinalPrice: "_3P_1WcsVP8GJKQ8olprKQ2",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PreventScroll: "ycpazsHLq6lCBFmWPCLCZ",
          ModalDialog: "_1mPKxUDAZ01x-i7612JIsL",
          ModalDialogContent: "_79d7mzfWutbJb1DCbh1Du",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SimpleModalDialog: "_3ej4mcyhVunlvw3BjUXtel",
          WideMode: "_1oLxPrvbIeJJ1d96fhJvOI",
          SimpleModalDialogHeader: "_1w-TUMWBEOX_zsSa-BBhK8",
          SimpleModalDialogTitle: "_2tpBIlq2yGQqKcloht-UiJ",
          XButton: "RC4JznqJb34yCm04FKk0I",
          SimpleModalContentCtn: "_2yRV5HfgoGdJZqs9Fl049T",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          AboutThisGame: "zeZyN-4SGkKN1ukmy4_Ns",
          Header: "_2bGVPSkxnJDt2vN54TTfNK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WishlistModalOverride: "_3V4Y44VzkkQWUAtDh6jQfA",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          AutoCollapsePanel: "_2OFBKij25NOweLoQKnH-Hl",
          Contents: "_3z2f7_LIqrKVFzXn-nSN98",
          Collapsed: "_2EgdWaUHP8QhQdix9MlF0d",
          Expanded: "_35-z7zCVOx1yWKf8cJjZkH",
          ReadMore: "_1qDLg0KVwgnZmMwUt99Egn",
          ReadMoreBorderPulse: "_4w9-SNzzdsOMsBG-Ztqf4",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Container: "_2fN9Ufmh18msZ2F2Tvk4xy",
          Review: "GjOrllO2lWUDh-q5xW-yh",
          Video: "_1B_treg9z5S0DYtv4B2RDc",
          VideoThumbnail: "_3mf5Rtv6HYXZVTxqOYQbBn",
          PlayOverlay: "_1qClaf6FsIipDDUZRsUUbZ",
          PlayIcon: "_2pX0wr8m0s0gCZdHf1uABw",
          DetailRight: "_3glB4FwLdnWk0HbYsZu2CW",
          NoVideo: "_1YdBZgEGPw811XZZnFZf6p",
          Blurb: "_1xWSWeWA0WhhtjcjOw1SKJ",
          Notes: "_2GDWQy36nGG2HVC8I2cHWJ",
          BlurbText: "_2A6WzqPZVha8D0cLveWr_2",
          CuratorReceived: "_2JfTBx-oL3rgrWp-Mcceah",
          Avatar: "_2STaox80L0TUAyTTWvgg7K",
          CuratorInfo: "WDMiZwGT09DlTY2Zolj4H",
          ReviewTitle: "_3Gf4l7NBeeqbvtQVCV1JR4",
          Recommended: "luHN4D2sNDLnLyxeBlF6S",
          NotRecommended: "MScyX4kNlmotUkn4yfT87",
          Informational: "_3xT11pNcMt5vQZZryBo89j",
          Attribution: "Ae6CVnStJmXj4P1nm4fyH",
          ReviewDate: "_1-xxEVmOFH_ALirCqnOMnk",
          ReviewText: "_1bxDLybmzg3qlRHA0uPpgw",
          ActionButtonContainer: "_2DQYZmNg65M853z4QxNcEm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TopPlayedBannerCtn: "_3m4H3O5OzhRFzeMBr1GiJh",
          DeckLogo: "_2fWPD8Bedv6c-yWTvZgAqn",
          BannerTitle: "R1EIDJDmlv3wymunXxGRz",
          BannerRightContent: "_3xmin8LWu9-cWEzsA9HEqJ",
          BannerHeader: "_2qmB_riG0azA3gECMHzEs_",
          BannerGameText: "VTRpu0RD7FA2Cn1UIp_Sn",
          Adventurer: "_2Vfzito2cEHtvOnl6hWD2t",
          Anime: "_1ms_oh1o4LBbEJqlW8N4RN",
          Apocalypse: "_2ba_EyebFU2kLncHcEzoDD",
          Astronaut: "W2X9qKmJY1fAkIM7GsolJ",
          Beach: "_2_LFdeCE0gMxtEUKki5NqO",
          Bed: "_1oByLIlDSo2XnZICLfSwvI",
          Bus: "OB7zhBm37vzrd_8riRWex",
          BusStop: "_2rd1Qm-OWFA2YmwiW-AghQ",
          Campfire: "fWKU1FqjXbYwqp1oB_xBs",
          Car: "GeAKpVY8Ba6-QT7tznVks",
          City: "_2QdugEdfMAb6V79yJPUR9L",
          Family: "_1g6v39jh2MnE5vuJnDagye",
          Farmer: "_3HFHolp6BQ7uMIedbyxc7D",
          Knight: "_2O7EV4jX-WO2knwBjeJz_D",
          Miner: "_13chpvw7DnNOsWqu92qK7_",
          Porch: "_3M4GVoRT9lg9yBm6y1dCSi",
          Robot: "_2RASj4ZnI-VHE5mRp8zKoB",
          Superhero: "_2HvlKfWJXw_ynFe07XKdY8",
          Woodsman: "_1CL5Wdh_nHnOYZvnjVA8YD",
          Zombies: "_3Ox405Kuu5XWIbPA9UvtBS",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Body: "gWQvQ7aZkfTUnQOpDv4Kf",
          Capsules: "_1vjLJiRQDnGVGagJgrX2vw",
          Item: "_2WnGgbEVDGWA6Aiw-Iac2P",
          CalloutRow: "_2wSV8GFu39c1jHvjlHefEk",
          Callout: "_38aaH3e_WuX02rED-F5LmP",
          Link: "_3r5JsPI6ThzHIlTKWEG3hE",
          Separator: "_3P74cVQ7H470Sa83yRrh9a",
          ActionGroup: "_2-u-jSAp9SDeNep-55FcIH",
          Total: "_2b_TYMpDt3KAMX5DUL-a60",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PackBody: "_1zq333d3pW7338j8MOxfoG",
          PackInLibrary: "_1-sgh5Na-U3TZmO_toUckA",
          PackCapsulesCtn: "_2jS1JS0vHcRTtKK5vN9bGo",
          PackCapsules: "CfSj_bx6zkyciRhJhRV4c",
          PackCapsulesCollapsed: "_3BI6mqK_SNTj5MBr8unOIZ",
          PackCapsule: "_3Cmt3xhzt5m1iqRlGl85t2",
          PackActionGroup: "_1_rYPVtMNifGny-euMweMD",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Row: "_3ZALGXUTUz9dMhpygZfEdz",
          FlagInLibrary: "_3J48uHl9Qq29G8SehTatYH",
          FlagOnWishlist: "_32GtArPK5vie6wQkr_eb7v",
          FlagInCart: "K1EJQRP74k3RqoneQCEf0",
          FlagIgnored: "_2_0lJhNfAjXG-HPV-9zVAu",
          Price: "_17AaRdslMVuhHBhcGgPgku",
          Highlight: "fHbnLbbM5MIuAK3uVlGNu",
          Name: "_2yxFkEsqp_Q09rVOSLXhE5",
          HighlightReason: "UyursQIO7t9_SSLgITA19",
          Pill: "_3aNRifG-b3UQH_dr4ksC-T",
          Footer: "_1dVpIbJBuAfOZVuTI3NAbh",
          PartialList: "_3EpqTNpUJjZtEVKKKl3j82",
          AddAllToCart: "_19v2LelCK8HYDasOcWgZXu",
          Revealed: "_3q1MdA6e49037eOZQKOiAq",
          DLCRowReveal: "_3K-29pm9jNOERms32B8gs7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          EarlyAccess: "_1T_V-LxtA8jew8eiZAQrDD",
          LeavingEarlyAccess: "_2rqsrOwTXLhlSthqDd-y0q",
          Banner: "_2YvNHzQ1VSnCS0ReE6v9T-",
          Title: "_3_95-MF8UOtlX2WqBSCPKN",
          Desc: "qt-OB_c0QQpC8k9v0X_dP",
          Details: "_2UGCx9L9_8NyGSgDyiuyLT",
          Warn: "_1GwZ7imQJcMFj_OCNlAY0n",
          Stale: "_1_3oFMPoQlBsbOcivPi9_d",
          StaleDevs: "TdPVzAhAirPmDB4nB3Cnx",
          DevsSay: "_3wEJCC6E8v86rS7edXsnmn",
          Question: "_1CZg_6pRD4X5aFvbD3VXN5",
          Answer: "_3lCa8UpT82vkN-BV_hD_CH",
          Link: "_29rMxnVxsbWIDWSxuA9idP",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CategorySection: "_2LrShr7IWhwfZHCuws5N_O",
          CategoryLinks: "_3vOT4NU0o9mYCU_6o_CCRh",
          SearchLink: "_3-Crx2dI9tgqfo1yOT0jw8",
          FeatureString: "_2OKLR5HZU6R8HIQRFgvQBC",
          IconContainer: "_2prv4ehi70tjwqV7eeUpNn",
          Icon: "_15-uJ3AkgzMBpkybqwjiKt",
          LearningAbout: "pi0uqQekyrRHnJCaUyg1u",
          ThirdPartyNotice: "_3IUbntWc11AYm240qy6cLU",
          Row: "hgTWadPUVdT2y17u5wU7Y",
          Anticheat: "_1diznsEx0RUvdMbTwROVEu",
          Name: "_261S1NxSb_IbVaNg77Y9i5",
          BootProtection: "_1SiKZVlI9CdyQnLvyTUYLy",
          ThirdPartyAccount: "_1oaAmtSoqPhwLiGjQ0Y3OG",
          Type: "_1qNe_uLNeOV6BKlQ09jU3n",
        };
      },
      chunkid: (module) => {
        module.exports = {
          FranchiseNotice: "_3cc4dI9V3PqeoQqj5SxBZz",
          Background: "njXxktHY4WsietvAfQD6Q",
          Name: "zxG9gBQG2fVTPjAa87gWf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          FriendAvatarLink: "_1HwFByD2tVkgQjdeo3upUL",
          Details: "_3pLLJpVOHHWcI5UvltWXQZ",
          Name: "_1MsiMQXdRUXrfqSEZ7ewHM",
          Playtime: "RmetILTrNzddKrz3r4CGf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          FriendOwnership: "q5QNi4yaj2QV4U77xNSKp",
          FriendList: "_1jkvh5RzUyV-afkmRZBsEt",
          WithNames: "_1YludsZff-JSeiUJGTaBFP",
        };
      },
      chunkid: (module) => {
        module.exports = {
          storeNarrowResponsiveWidth: "910px",
          TheaterDialog: "xunB9e_XJHY-ooP2zNKag",
          TheaterModeHeader: "_17YJmMg813A6ympHsbwM7n",
          TheaterModeFooter: "_2469TwTWqAicsI1RnlvsCU",
          TheaterModeFrame: "_35w3v2QgvaAyQ5US4OJOMN",
          Center: "_1nooJM8SlOrumMla-n5kcg",
          Right: "_124rcqdHDS-7ZiS4Ug15rj",
          SkeletonViewArea: "_2Jk5sZuh6Yam81wQzpBUWj",
          TheaterMode: "_1_fv9P3XnAj9M8zRjBUsm0",
          ItemViewArea: "_33i4zSWeCfsTaa25tHu5Us",
          FullscreenArrow: "_258hIVgneRO0dUbgnPZh_R",
          Visible: "_2--1QTPdJLonnu6CEnIlNX",
          Next: "fpXUftvcJkKb5pMG7ctH0",
          Previous: "_1h__Z4jtufgzUAJJ5y1c1v",
          ViewedItem: "_2KIVa7T6PMqAVvVKkwdVZO",
          Active: "_2CZHqKcmYmjWbdMK4aidRV",
          Screenshot: "_2zBrte9SWvr4lSb3lAkNpR",
          PageEmbedded: "TunqbQieNpnpnbQo2LG9Q",
          Controls: "_2h-RE4j4pbuPMtOjZ_fCyr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          StripSkeleton: "_3-9sYm9MJfEc7DUv7-tqG2",
          TheaterMode: "_1l7ZtmzPX6TqB7rvA1wdUR",
          Items: "_2Y9cdZVnoEU6uCzgX9P8gO",
          Scrollbar: "_3uF_Wfs589dYv9BQRlFmZt",
          Strip: "_3CdIWRo2e9D_FxVHjVII7d",
          StripItems: "ZpjLn9D4rTIVnM4axYSoG",
          Item: "_2Ose8zPg3MlKQQeG9nwv24",
          PlayIcon: "_2qzM1XTf6NXdHvCDD9D-PF",
          Active: "_2uCL56lGO9iUUcLEtE83zG",
          StripScrollbar: "_2Z-YccLz9coJD6SBV13Fya",
          Arrow: "_2lIBEOcXRC3KKhDamcV9t",
          Track: "_2SBCUqLfy4PgWdonAHX_fR",
          Thumb: "_3DXmyv2Yx-lnmLz03GryEd",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TheaterDialog: "_1cR7UuAEyt152HSNWylbqz",
          FocusRingRoot: "_3zXPOFGaYWCD3fd-ESi70A",
          FocusRingClip: "_2jZfIoMOoZQx6kdcgBhMHa",
          GamepadCarousel: "PYe6PtelQzh2UB7OtpWMk",
          CarouselItem: "_3ulAzvZbXfVEZatmwdipsk",
          StillPoster: "_3pCSQuZSNLXT9AhGtOXpNb",
          VideoStarted: "_1lbow7a3gRkR7fjSzCyrXr",
          Poster: "_3ExPGBI8XGCQSuFfQ6JAlj",
          Icon: "qcq_UlIfBHLqkTw-IcrR8",
          TitleCard: "_3HXfy0jxwE_OWJIKKyQFUE",
          Bottom: "_1QDEDk1q1y-jG5E4UV5-rC",
          SingleFileTrailer: "_3i1CkfhnBQSj5NuMV9PxnF",
          Screenshot: "p0NZiXp9agvT1BeWoCNDK",
          DashTrailer: "_1B_rAEDcFM9o79CoGmnUgM",
          BottomRow: "_3ZLxtge6-gw9pSzVXTf4gd",
          WishlistButton: "_23N7SSBmU_2S4o8Kc8NBEg",
          StarIcon: "_3LKNblFkXFm-hTnW4lMeOQ",
          ButtonIcon: "FP1PcTBe4kKmycVNKGtk3",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WidestChildContainer: "_3YUWXt-ylyufqMm-YAliva",
          Hidden: "_29niryxpei49tSjYOBokyK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Item: "_2YfN55cMXVU9OD0d3_LoX3",
          ItemImage: "_2Zh_TIIvdD8EtU6ZxtELog",
          Price: "_1Fz-4Scga6rZOdvvmk2jLV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LegalNotice: "_2bOEuokOOajSeGl2yZEcPh",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LinksAndInfo: "_3TuBg7_-ESlXR8VdekZAh6",
          MoreLinks: "_38qMxU84U3MdKhwOyNRvBh",
          LinkRow: "_3Fsj47byOWjgdvPZrMt79B",
          SocialIcon: "_2MvdxngdrJtnwX501aUgFu",
          ExternalIcon: "_2WUly4aWb_9foEZI0ARnK1",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Score: "_3KFgbk3IzIHdQyWbx3ixQd",
          High: "_2gwFIDqCXQrEFHQkkMylvp",
          Medium: "_1WRij-yZeVQrXpyB2BQ5Hu",
          Low: "_20XeCHY1vgYRARXPiXK8qr",
          ExternalIcon: "_2_11-nL5KwLaw57DKAUUxk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          TrackListContainer: "_1B94J6blto63JooX8xE8x2",
          DiscTabs: "_1f6LeASDnCawGhXbVgpGbN",
          TrackList: "_21qq2GkE5LyRbZDBkOQ1li",
          TrackTable: "_23UelU4wgZXygL_sXDYvsg",
          Number: "_3thPgGlKH6Yk_mzgsffxqm",
          Name: "_3uE097OXGUs1NHySOUIIvS",
          Length: "_2X2HpO9BwpkWRjK97-LN0",
          Odd: "_2lXiCmpwORaq53wIqXcIGO",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppList: "_3WieBjkVb28rpePKxyn3gl",
          AppText: "sqjdG_fjedZUmCmzyHdpN",
          InLibrary: "PIsyQ6ew7BEmrOpzzJKCT",
          PrePurchase: "_22HRzKP_R7fYBsp-3dUUfY",
          WrappingName: "eYcltYOCViPqg9Tp6nwGo",
          AppIcon: "_1zJQxJZsmaRcsnMKVsj1SD",
          AppImages: "_2cKkqSc2Aw1kr_8SzTKYNF",
          PlatformIcons: "Wd0ssUN-E1g_6nF5cApwN",
          PlatformIcon: "_2_NmZjBVcuMKTZkfsRP_HD",
          DiscountAndPrice: "_2ooDkAkePuzL0kjqCaU2lR",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PurchaseOptionBanner: "_1P2U635xpdOLT2_aa1xwdL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PurchaseOption: "_3TUpv9-O4TIdg6P4Fx3oE7",
          Green: "PnUl8lQhMsTJfCeDt3Hea",
          OnlyChild: "_1Cty2Al1wcwqrIfgzp797A",
          AllowSingleLine: "zw6LBxJeRCbByX-rRxjyh",
          AllowTwoColumn: "_2AYML2I4RE2b74cxTDrgs",
          LeftColumn: "_2TQm9gAofDprradamqfdnX",
          DebugInfo: "_2CZQTTB4EFxu3TE_6mM47o",
          FocusRing: "_1flB_uKuLjatwxoY8KvUUG",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PlatformIcons: "_34fO3Y9HSHm3JfPdMRIf8m",
          PlatformIcon: "_27rt4wNpnea7jUH3nWwj8m",
        };
      },
      chunkid: (module) => {
        module.exports = {
          MenuItem: "_3VWkkleXCrqxmjyoSCylnk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          InLibraryRow: "_1Ea1bwlHmxO1UmYTEQ8jHC",
          InLibraryFlag: "_2GveL49aC8sm8Mey1StYth",
          InLibrarySVG: "_2HPdYtyoJJ6hsAHw3jTQ10",
          Actions: "_2vmUZW0F1kvoznIng92EOn",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PageSections: "_1_PU6_24UNZMD-aymVilmB",
          PageSection: "_2WpiheNBkhzJpmxQ4Arawu",
          Header: "y5728HUyiI5XdCDBm5D7A",
          Banner: "_3hkPxq8NpEEOtbG7MPXNUy",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ItemImage: "_2emVfokDB6oT4pOU15fVVR",
          ProfileBackground: "_vaAGc8YOYW7s9yJPKtHf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ThumbIcon: "_2lDikjo0mk970SwUm3DRTK",
          Down: "_1Cwc3y07Is4gEGD1Q0zKc_",
          CommentIcon: "_2obrbR9xy_xows-ok2qmxn",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ModBubble: "_2PauZG_yePbl6rC4OejmqF",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CarouselPaddingTop: "8px",
          CarouselPaddingBottom: "8px",
          PurchaseOptionDisplay: "_2zQCVD-7iZA3eShAcWuSrv",
          PurchaseOptionCarouselWrapper: "_2FFRq4AxO47tckosaUvn2X",
          NoCarousel: "_18-XQUf8L7zxxacjLnq08M",
          Single: "_1i8lZsm1WSza_LBo1riVvc",
          PurchaseOptionsCarousel: "_149hLCvHEvVVEn7fORfG75",
          PurchaseOptionWrapper: "_1F2jbNP9IHRfKonl_3baY8",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ComingSoon: "VcfhtxgxhXCS5YBzd4O22",
          OffsitePrice: "_3nVt7tQlJcd-SJe7k_lDmO",
          Content: "yN2IR7l0MpF7rTD6dlS9f",
          Reminder: "_2KJX1jAw_ha_T3Dv2bDULi",
          Note: "rM8RXPAb9DnacUnfXKjkg",
          Preload: "_2uqsForJwTJzUiCcKC6WK7",
          PreloadActions: "_8FtJtmmrluBTGIheOirY_",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppList: "_1MVRGLawsCpcXLFlFkKAGL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          RecommendationReasonsDisplay: "_8A-vhpEBdS-qVF5Jl9jc7",
          ReviewScore: "DpGN2-UG7sEXIZDAb2xtu",
          Positive: "_1kiOvqf3wN3kBFxMVI8w-3",
          Negative: "_1UTMsJhG80MMvkig6Pw7UN",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppList: "_12s81WYtM0B0CmDPB6BMY0",
          AppIconAndName: "_3CcmNvL8ajAAtVfsoFxFRA",
          AppIcon: "_1abKISd0PdmRu72s9yPT6D",
          AppName: "_2VU-DDzaxFtQJqLuyn0IQw",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AvatarList: "fIVYEi9n1QY4vaQuxZYW0",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Reason: "_2m2v9tWbf72NndX7vCQd3D",
          TopLine: "_1-A6rmFS2woZVY0AjEpaRx",
          Icon: "_2DPsFVf6FeqLONYXI_xame",
          Positive: "_2JQ3YzNKEfGoIo7Y4JIPZo",
          Negative: "_3vjAexY4vrU7H4bRPWQS1P",
          Additional: "A9r5gdP2l607_aZQG4U0f",
          Divider: "QsaD3B8iBvo8FI0s8Heyb",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TagList: "_3jV1ymbnCcg8o3qq78ndN7",
          Tag: "gctfUSqAf4-wM1_s7LW7C",
        };
      },
      chunkid: (module) => {
        module.exports = {
          VerdictIcon: "_9yuiPD5NCU4QYi8jzKFrC",
          VerdictIconDown: "_2j8Acce2gU2Mnn4slpUyTf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ShopLink: "lqD2vDqW515szC9Dt3o8c",
          Items: "pge6cRE3xuT4D-kvcijJs",
          ActivateLabel: "Ywd6FXH3HxWEfSO_4XhD",
          Link: "_2773Feh3LQ2SD5dtpRj6hJ",
          AllText: "IfnLtAVfojeH3V-6ObQjr",
          Narrow: "_1ElroLhDfZVa0RFIGapb2J",
          Wide: "_3wGfw-n0Vvme1W7TMRVn1I",
          ShowLink: "_1VS2woF-3sJBcdv8ku8V7m",
          OverlayLink: "_9c2z0an8oHdeFIpJYVdD6",
          InlineLink: "_3qVPPRLyJLnqCVDKgRBYMz",
          ResponsiveLink: "V1oPnW4SHTQZyfLtIOACA",
          Text: "_1VPalkyDcngLWmtdDU2UOT",
          Arrow: "_2UhU5Y9TVx7gCVaf863aKB",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SteamAwards: "jJURdXW1ChOFN-_p287Zm",
          Banner: "FIGm-_qZMzF3jFUHQ3WnL",
          Titles: "_2J_cQuvocvg37gIlzurEay",
          Winner: "n_444AQvZuBuGzXn2ekfZ",
          Category: "_3kIk6XVA93BAg1PpnlC8jR",
          Year: "jlMMBNsV2V8eRl6Kr0Vsn",
          Year2023: "_3QOYUCrBHECSTWOJukosMs",
          Year2024: "_2TAHqCxVB487j7ILyr5mt3",
          Year2025: "_23ICoTwOCxBIpOwj40sp4h",
        };
      },
      chunkid: (module) => {
        module.exports = {
          StoreAwards: "_1CixVKuNHvP6aAZqdbx6nN",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Summary: "_3Prm5m5vhL6ZyDzq9BAi-Q",
          FeatureList: "_3Vfkk-MdImFuKEOrcb0-iS",
          CategoryIcon: "_3q4P9LQHRxDb5N6xxg2cno",
          FeatureNameContainer: "_22m8Q03ftyieJoZUjjJh7f",
          GroupLabel: "_3B6ryPkScWm0fGLpTRaOdy",
          FeatureGroupItems: "_3pZio2UegeDHK5If5lsACR",
          InfoRow: "MebJlVvjledfLjBzNnZks",
          FeatureName: "_2XVo6DmEk_3H8El012J6n3",
          Details: "_3i5pyKjdWnRPqCqWMAmwAb",
          ImageContainer: "_2hLfFwbFsdutlEoG1YjlJe",
          TextBox: "_2_4UfjDA56JkBQwKFByppO",
          Open: "_3qssZq9veZ21NuSSKhTJzE",
          Closed: "HymTK4fzKIl6TGUAtolY6",
          Image: "_33C0hhqH__tmabqGo9QM7O",
          LanguageGrid: "r1YWhYsuFs6pCiaVudl7_",
          LanguageTable: "_1n3a9ye5GfFJ8UdeJ_lC3x",
          LanguageName: "_1gw_w8O9ZchSa2H7_sKPn8",
          CheckColumn: "lPImL9ec29fzNjpS8eeK",
          IconColumn: "_3a5h4jO6SE2kOxAYQfL9Fo",
          SmallIcon: "_2f_urgKOdrn6b3U0a-jFtr",
          Name: "_1J6g7KRhXGw5v-ypP0JKr1",
          Preferred: "_1oX4_5EeXRAXfEE_XiMdjI",
          ShowAll: "_2XP4Qg7E45wuX1whgAsXdH",
          Legend: "_3-IKyLDYxOmAynwPHDVNBL",
          LegendIconContainer: "_2LWUNzwOXwiI1D7TCBxdmE",
          LegendIcon: "_33w2I_6YeeKbxCFtG37Hwh",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          StorePageBBCode: "_3n5Cn3P3AZI_zLOe5_jB9D",
          StoreImage: "L_7jPXkXscN-QxB458CKV",
          StoreVideo: "_1SedSl74BXCZ_7ixbPl5ml",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SummaryBarTop: "_1Som9GnszokLGAScqhSozy",
          SummaryBarSection: "_1eIF6oOHrg65kqvbTZmsnv",
          SteamDeckCompat: "_3q5iA4c82x-s_zPm2_mCo6",
          SteamDeckCompatContent: "_3qJR5P57v1Vom-xKZtX_qF",
          HWCompatWrapper: "U0BM13LMuE54MZPv298tt",
          UserTags: "lNpjDNeYU0mE_mITujuVJ",
          Tags: "A_YEuhEOff4v5HceIOAPP",
          Title: "Iuddf6nrTCmOY1Cgf_Gw_",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CategoriesMenuOption: "_2-cvnCNnFqBG5u89enudpK",
          Label: "KldL9MJqWdVCahi3zvX-E",
          HeaderCtn: "_3WNoErKGw4jngFeVPfTZfs",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PrePurchaseTag: "_3YeaCPVOebCGSdpWg3IN5l",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DialogContent: "_16pXKCOoRIbFwtZHgqjB8K",
          SearchForm: "WKTuaTjd0YaeJa49cFaSk",
          AddCategoryBtnCtn: "_2iyGkBsDUSp94uk2MlLz1W",
          Visible: "_2MUWoUxUqeFYQh8spy5bpH",
          SearchInput: "_3MO9bYl8-oPkXVO9nu_FXh",
          CategorySelectorCtn: "dGWKt0BhpSa4efl8jRzwR",
          ListHeader: "Y4Cx2WnIKvFCo_RLEflGd",
          DialogCategoryCtn: "_1lH7WZP40yb1SOyXWbcjOH",
          Suggested: "_1ma6_Ey6CqTCDCkq0tqrH4",
          MaxCategoriesMessage: "_223Zevm4T9O8RGEnzI5jHT",
          Buttons: "_2_jN6aSsudj0rOSKRlnwP9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          wishlistCategoryMaxDisplayChars: "30",
          CategoriesCtn: "_1Ua4366mxFvXUSFTfIlJ-i",
          CategoryListHeader: "_3Ra2jK42XFbrJlIPtsmMfC",
          CategoryList: "_1FrjJkMKzXxdevx_oYK2Nx",
          Multiline: "_16SkCu-YheGIHn8_WtMVnd",
          ForceDefaultSize: "wxjYffVQAVCuubF0aydb5",
          Small: "Tj_sAx3peeMFFwrrnIjIK",
          CategoryBtn: "_1c0u5zo_wZGsAM08nfEEKu",
          NotActionable: "ySn3WlbDgR3ay1P7i3gjT",
          CategoryName: "_1QX11E_2wBgWuzEO7M7ps9",
          Focused: "_2BMRaClxLpIT5YJoDcejhm",
          Selected: "_2vVKhV_YC031wyUrFu6vJx",
          Removable: "_2rdKi5D2dn1dWLtySZS1w7",
          CategorySettingsBtn: "KA8f-sx_XEMnp78-pwZgl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TileContainer: "_3YSNlqOERJPDvATbhSyba4",
          TileTitleContainer: "huv5kmY_qRW6CUhP41AX4",
          TileTitleInnerContainer: "_3SemwneNsiLL2pOP4TMon4",
          TileTitle: "_3VhToXcFT_z0HLnw5z1X2d",
          TileActionButton: "NxUN-s-MoparNLrvqVXsN",
          TileSubtitle: "_2FwWgtYbin1N6QcDJJEU3v",
          TileActionContainer: "_1AC_XZBw0R_ud0pPAJ1Nln",
          TileActionInnerContainer: "_2H9PUu43H_69AuO6gTZVdC",
          TileActionInner: "_3Fxxrw6yvbcJc-MzPwHIpB",
          TileActionInnerTitle: "zB1xwvSCbLzyQMcJvBafw",
          TileActionInnerText: "-piyES0-cnJFXEv4BGexr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
        };
      },
      chunkid: (module) => {
        module.exports = {
          OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
          OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
          ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
          BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
          BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
          BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
          BannerButton: "_1jso7z80FWGn42k1HP0_cf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          PurchaseNoticeContainer: "_2wT0yS1pvmL0ILuaiLHaBb",
          RightHandImage: "_3G-YXeWc1jffse8M8ct7hJ",
          PurchaseNoticeLabel: "dTa5uAAOq-wFRgQQG7xRm",
          PurchaseNoticeImageContainer: "_3Q2RgkhEvzbM10OBqMeTDB",
          VRSupported: "iqWk_VV3jdvFbRFaBkWRB",
          PurchaseNoticeImage: "_19Tk4I5-EL-sVXsUaa3hwU",
          Tilt: "_3dAAfHHQ8xq74OLmQXo9V4",
          VROnly: "_11BzgaR-a1UCE-aOC3bMCD",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Details: "_8DSX9d1ihrMSeZUFC9elD",
          Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
          FeatureList: "TwihVkmmqI5XLg6P4fpwF",
          CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
          FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
          GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
          FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
          InfoRow: "_1RmibngWLogcFmO93kGFgq",
          FeatureName: "ny6hWVK6ii05H200KRhds",
          ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
          InfoLink: "_2xmH7agKi37v9kwFHi093S",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          ReleaseDateInfoCtn: "_3_BM0Yr1nZHLRCU-YScHph",
          GameEditCtn: "_2atDY79LoAg6W2I3f_ghoe",
          ReleaseDateContent: "_3EqL95FAclb4_KUCViyIy",
          EditButton: "_1nt4AvPVzCcmifUL2j41GY",
          Spacer: "D6yaJy1vHTj3skoSwQCmn",
          Top: "_17TBmwVnz8B0fYk9NMgjcC",
          Bottom: "_1mdhhjdhefzfINtpGJDw_F",
          EditButtonIcon: "_23n7mGKR9t2rn_appk4hc4",
          LabelField: "_1yV1XMUdZdavVgSZ6SzXKj",
          Label: "_2aDfpXF8ktFHq439q_1vAi",
          BigField: "_3K2oJx5qEZyMkC2O7Ib77p",
          Set: "_1CXRFvJ5iqKqlENSWgeHPP",
          DescText: "_3FFbGIjpM4z0O1HfqwwsvR",
          StatusText: "jBW2mrF7D6RVhT2u_ZRXB",
          StartWizardButton: "_1hwFIOidJj1HaD2_cI4NRD",
          ControllerSupportLevelString: "_1mfBI5XbiaKU9vS5WkJALu",
          InfoRow: "_2xZaMR-NKc0LbkeM50cZq8",
          LocSection: "_3KAysk4dlhWETa6ixz7V2j",
          HighlightText: "_2Qr-aCeNvCUkoGKh3ikniD",
          GamepadRequired: "xAMFa9akLaRN7hfkTC8_h",
          Personalized: "_1g3WgidGN68CDX4XQPGnl6",
          HighlightRow: "N97okiqePUqGpdeNrIxUU",
          LocString: "_3FBEGAfvLQj4qYjstmZAPE",
          ImgSection: "dxuI55RF56-dzbuXjj2W0",
          SmallerSVG: "_1LWvkVSCiVeG4Yf5uxtQ28",
          BiggerSVG: "WRiytnKTtULWCkwFVJoTx",
          PreviewContainer: "_13bOrUeolqp9EyK3or-cLt",
          StoreSidebarContainer: "_1CTHwmZmi5YE4kovZH_UIl",
          PurchaseNoticeContainer: "_166hsSkQYxKraMJIx7td91",
          PurchaseNoticeImage: "_3UK9OHyZ3r9rA55mgsnZPD",
          NoticeContainer: "_2IS5rvIlv3ARam8O7b_-po",
          ControllerRequiredImage: "_3YEJ5NoOg1YObev3TXdMi",
          Tilt: "_1NEHd7t-JVZYdk68QMEph-",
          ToolTipControl: "_3vt5rw82YhkhWtu5ld9QeP",
          ToolTipContainer: "_3PRdiJdKKfTnwLnTfbCkEz",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Header: "_1QLD0WY-y0hqefed0ZhMn1",
          FullWidth: "xCXUyx3dF-dUDB7Y3lQp0",
          CarouselContentsRow: "_2CT-9HYp0yLUhxQviGsEM",
          WithFollowSection: "_2qwt8I2HnbOSGvdebzv4hf",
          CreatorHomeWithItems: "XIDYByW4BEOm-YiOiwGmO",
          WithFollowBtn: "Md5hrkaRH5SlzG0VFNLCQ",
          Carousel: "_3FF8OOtLO0K4fsjePly_rQ",
          Background: "_2Tqj7EzRCeIvjCq0R1MZiy",
          AvatarBackground: "_3SJGdY8UrEOW9-M8zAiXEi",
          ClanInfoRow: "_1KPIgTd9QjHihuus7qFfvw",
          ButtonContainer: "_3o1Ri_nyL6GsPbTQZGSZcT",
          CarouselFollowButton: "_33J1_MYWJVjXbCkBFCNr6f",
          ClanName: "_1l0-iEDSNo_iZ95BUT31hW",
          ClanAvatarImage: "PO1KWbUEvLt8ZVYRTAvMt",
          CarouselFollowSection: "_3-Zh-Ypvsn0buzyWGzuOQf",
          ClanInfoColumn: "fL1BVr1TCO7p3NcU6YlxG",
          CreatorHomeWithoutItems: "_24bEdzyRcz_FKDUqulljpX",
          ClanFollowTitle: "cSNCliWjnECzm1QAZPjDw",
          ClanFollowButtonContainer: "_2CipbQE9-jPKtQxmGJxtAs",
          FollowButton: "sAZjP8hrS9narmNgqgbXf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          ParentWidgetContainer: "_2fynndXXlBKZiRaoG9GuDP",
          ParentCapsuleImageContainer: "mcjC8_8ivZdyhU3QKlFrN",
          ParentCapsuleImage: "_2Ti5cIvl7SlIoK7eSIapbL",
          GameName: "_2xz5bttITZV5JH17r1qZsG",
          AppDetails: "IaIxKAMKgbunAgg62ymgi",
          PriceContainer: "_2i6LXaKqXiO0KV4Im0Fw-0",
          AddToWishlistButton: "RccYVBGN6ikWjuKE_Ba6N",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          Header: "kR_xyFf2ghgC-Jexsw_5v",
          FullWidth: "_263kQddRJk-a3OP3ANz0Bv",
          StoreItemsCarousel: "_2BG1JKMgeqn_cr0rbRhRNA",
          StorePageCarousel: "_1wsWr6qsx_k-ElMmSpGcf",
          Title: "_2BGZunVy7Z0-h18owewCzo",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          strScrollSnapCarouselItemHeight: "168px",
          Carousel: "jGiY7rrZh0o9qrh7XNnZU",
          Capsule: "_292IWiCTro5jiTmIxiDfyc",
          Small: "_1mQ-hKJYGkL9gG76spf6uy",
          TwoWide: "_25IMXSN3XeXOPiu-sYHV1U",
          Placeholder: "_1tX6f_kWb07D_qLWgL7-Ah",
          SeeAllLink: "_1SnxJyZ5foWgNRCNLmKm6H",
        };
      },
    },
  ]);
})();

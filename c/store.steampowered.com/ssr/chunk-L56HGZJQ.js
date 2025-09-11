import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _ = class {
  m_Promise;
  m_Value = void 0;
  constructor(_) {
    _(this), (this.promise = _);
  }
  set promise(_) {
    (this.m_Promise = _),
      (this.m_Value = void 0),
      _?.then((_) => {
        this.m_Promise === _ && (this.m_Value = _);
      });
  }
  get promise() {
    return this.m_Promise;
  }
  get value() {
    return this.m_Value;
  }
};
_([_], _.prototype, "m_Value", 2);
function _(_, _, _) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)("div", {
      ..._,
      role: _,
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
function _(_) {
  if (typeof _ != "string") return NaN;
  let _ = !_.includes("ms") && _.includes("s"),
    _ = Number.parseFloat(_);
  return _ && (_ *= 1e3), _;
}
var _ = _(_()),
  _ = _(_());
var _ = _(_());
var _ = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var _ = _(_());
function _(_) {
  let {
      target: _,
      visibilityObserver: _,
      className: _,
      style: _,
      bEnablePointerEvents: _,
      direction: _ = "right",
      nBodyAlignment: _ = 0.5,
      nBodyDistance: _ = 8,
      nAllowOffscreenPx: _ = 10,
      nMaxLateralMoveOnScreen: _ = void 0,
      onNoSpace: _,
      bTopmost: _,
      children: _,
      ..._
    } = _,
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(void 0),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    _ = _.useCallback(() => {
      let _ = _;
      if (!_ || !_ || (_ && _ && !_.visible)) return;
      let _ = _.ownerDocument.defaultView;
      if (!_ || _.closed) return;
      let _ = _.querySelector(".hover_arrow.left"),
        _ = _.querySelector(".hover_arrow.right"),
        _ = _.querySelector(".hover_arrow.top"),
        _ = _.querySelector(".hover_arrow.bottom"),
        _ = _.getBoundingClientRect(),
        _ = _.getBoundingClientRect(),
        _ = _ == "overlay" || _ == "overlay-center";
      _ && _.setAttribute("style", "display: none;"),
        _ && _.setAttribute("style", "display: none;"),
        _ && _.setAttribute("style", "display: none;"),
        _ && _.setAttribute("style", "display: none;");
      let _ = _,
        {
          nLeft: _,
          nTop: _,
          nOverflow: _,
          nLateralOverflow: _,
        } = _(_, _, _, _, _, _.innerWidth, _.innerHeight);
      if (_ > (_ ?? 10) && !_) {
        let _ = _(_ ?? "right"),
          {
            nLeft: _,
            nTop: _,
            nOverflow: _,
            nLateralOverflow: _,
          } = _(_, _, _, _, _, _.innerWidth, _.innerHeight);
        if (
          (_ < _ && ((_ = _), (_ = _), (_ = _), (_ = _), (_ = _)),
          _ > (_ ?? 10))
        ) {
          console.log(
            "Not showing hover because it didn't fit in the main or alt direction",
          ),
            _.setAttribute("style", "display: none;"),
            _(!0),
            _?.();
          return;
        }
      }
      _ !== 0 && !_ && ([_, _] = _(_, _, _ ?? "right", _, _));
      let _ = null;
      switch (_) {
        case "left":
          _ = _;
          break;
        case "right":
          _ = _;
          break;
        case "top":
          _ = _;
          break;
        case "bottom":
          _ = _;
          break;
      }
      _ && _.setAttribute("style", ""),
        _ != _ && _(_),
        _ != _ && _(_),
        _ || _(!0);
    }, [_, _, _, _, _, _, _, _, _, _, _, _]);
  _.useEffect(() => _(), [_]);
  let _ = Object.assign(
      {
        left: _,
        top: _,
      },
      _,
    ),
    _ = !_ || _.visible;
  return (0, _.jsx)("div", {
    className: _(_.HoverPositionOuter, _ && _.HoverAboveModal),
    children: (0, _.jsx)("div", {
      ..._,
      className: _(
        _.HoverPosition,
        _ && _ && _.Ready,
        _ && _.NoSpace,
        _ && _.EnablePointerEvents,
        _,
      ),
      style: _,
      ref: _,
      children: _,
    }),
  });
}
function _(_) {
  switch (_) {
    case "right":
      return "left";
    case "left":
      return "right";
    case "bottom":
      return "top";
    case "top":
      return "bottom";
    case "overlay":
      return "overlay";
    case "overlay-center":
      return "overlay-center";
  }
}
function _(_, _, _, _, _, _, _) {
  let _ = _,
    _ = _,
    _ = 0,
    _ = 0,
    _,
    _,
    _,
    _;
  switch (_) {
    case "right":
      (_ = _.right + _),
        (_ = _(_.top, _.height, _.height, _)),
        (_ = Math.max(0, _ + _.width - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.height - _)]);
      break;
    case "left":
      (_ = _.left - _ - _.width),
        (_ = _(_.top, _.height, _.height, _)),
        (_ = Math.max(0, _ - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.height - _)]);
      break;
    case "bottom":
      (_ = _(_.left, _.width, _.width, _)),
        (_ = _.bottom + _),
        (_ = Math.max(0, _ + _.height - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.width - _)]);
      break;
    case "top":
      (_ = _(_.left, _.width, _.width, _)),
        (_ = _.top - _ - _.height),
        (_ = Math.max(0, _ - _)),
        (_ = [Math.max(0, _ - _), Math.max(0, _ + _.width - _)]);
      break;
    case "overlay":
      (_ = _.left), (_ = _.top), (_ = 0), (_ = [0, 0]);
      break;
    case "overlay-center":
      (_ = _.left + 0.5 * _.width - 0.5 * _.width),
        (_ = _.top + 0.5 * _.height - 0.5 * _.height),
        (_ = 0),
        (_ = [0, 0]);
      break;
  }
  return {
    nLeft: _,
    nTop: _,
    nOverflow: _,
    nLateralOverflow: _,
  };
}
function _(_, _, _, _) {
  return Math.max(0, Math.min(1, _)) * (_ - _) + _;
}
function _(_, _, _, _, _) {
  let _ = Math.max(_[0], _[1]);
  _ !== void 0 && (_ = Math.min(_, _)), (_ = Math.max(0, _));
  let _ = _[0] > _[1] ? _ : -_;
  return _ === "left" || _ === "right" ? (_ += _) : (_ += _), [_, _];
}
var _ = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var _ = _(_()),
  _ = _.createContext({}),
  _ = () => _.useContext(_);
function _(_) {
  let [_, _] = _.useState(null),
    _ = _.useMemo(
      () => ({
        targetElement: _,
      }),
      [_],
    );
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [
      (0, _.jsx)("div", {
        ref: _,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { divProps: _, tooltipProps: _ } = _({
    ..._,
    toolTipContent: _.toolTipContent
      ? (0, _.jsx)(_, {
          children: _(_.toolTipContent),
        })
      : null,
  });
  return (0, _.jsxs)(_, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let { divProps: _, tooltipProps: _ } = _(_);
  return (0, _.jsxs)(_, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: _.bNavStop ?? !!_.onClick,
    ..._,
    children: [
      (0, _.jsx)(_, {
        ..._,
      }),
      _.children,
    ],
  });
}
function _(_) {
  let {
      toolTipContent: _,
      nDelayShowMS: _ = 300,
      bDisabled: _,
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      strTooltipClassname: _,
      bNavStop: _,
      bTopmost: _,
      usePointerEvents: _,
      children: _,
      onMouseLeave: _,
      ..._
    } = _,
    _ = {
      direction: _,
      nBodyAlignment: _,
      nBodyDistance: _,
      nAllowOffscreenPx: _,
      nMaxLateralMoveOnScreen: _,
      className: _,
      bTopmost: _,
    },
    [_, _] = _.useState(!1),
    [_, _] = _.useState(),
    _ = _.useCallback(
      (_) => {
        (_ && "pointerType" in _ && _.pointerType != "mouse") ||
          (_(!0), _(_.currentTarget));
      },
      [_],
    ),
    _ = _.useCallback(() => {
      _(!1);
    }, []),
    _ = {
      active: _ && !_,
      target: _,
      nDelayShowMS: _,
      hoverPositionProps: _,
      children: _,
    },
    _ = {
      ..._,
    };
  return (
    _
      ? ((_.onPointerEnter = _), (_.onPointerLeave = _))
      : ((_.onMouseEnter = _), (_.onMouseLeave = _)),
    {
      divProps: _,
      stateHandlers: {
        setTarget: _,
        setHovered: _,
      },
      tooltipProps: _,
    }
  );
}
function _(_) {
  return typeof _ == "string" ? _.LocalizeIfToken(_, !0) : _;
}
function _(_) {
  return (0, _.jsx)("div", {
    ..._,
    className: _(_.TextToolTip, _.className),
  });
}
function _(_) {
  let {
      active: _,
      target: _,
      nDelayShowMS: _ = 300,
      hoverPositionProps: _,
      children: _,
    } = _,
    [_, _] = _.useState(_),
    _ = _();
  if (
    (_.useEffect(() => {
      if (_)
        if (_) {
          let _ = window.setTimeout(() => _(!0), _);
          return () => window.clearTimeout(_);
        } else {
          _(!0);
          return;
        }
      else {
        _(!1);
        return;
      }
    }, [_]),
    !_ || !_ || !_)
  )
    return null;
  let { targetElement: _ } = _;
  return _.createPortal(
    (0, _.jsx)(_, {
      target: _,
      ..._,
      children: _,
    }),
    _ ?? _.ownerDocument.body,
  );
}
var _ = "me1BHzZX9A0-";
var _ = _(_());
function _(_) {
  let { customTooltip: _, tooltip: _, className: _, icon: _ } = _;
  return (0, _.jsxs)(_ ? _ : _, {
    toolTipContent: _,
    className: _(_, "HelperTooltip", _),
    children: [" ", _ ?? (0, _.jsx)(_, {})],
  });
}
var _ = _(_()),
  _ = _.default.createContext({}),
  _ = () => _.default.useContext(_);
function _(_, _) {
  return _()[_] ?? _;
}
var _ = {
  Toggle: "iht2aUDj9M8-",
  Disabled: "YTEsHaVTRhQ-",
  ToggleRail: "smW0sc5P0Ac-",
  Highlight: "itL3LCJ2LME-",
  _: "cu29JgKd7Ng-",
  Off: "Rre7XjErr1w-",
  ToggleSwitch: "Py0EVswynbg-",
  ToggleRow: "LCqK-Jsy46k-",
  Label: "K-4Bc-GCthE-",
};
var _ = _(_());
function _(_) {
  let _ = _("ToggleControl", _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let { value: _, onChange: _, disabled: _ } = _;
  return (0, _.jsxs)("div", {
    className: _(_.Toggle, _ && _.Disabled),
    onClick: () => !_ && _ && _(!_),
    children: [
      (0, _.jsx)("div", {
        className: _.ToggleRail,
      }),
      (0, _.jsx)("div", {
        className: _(_.ToggleRail, _.Highlight, _ ? _._ : _.Off),
      }),
      (0, _.jsx)("div", {
        className: _(_.ToggleSwitch, _ ? _._ : _.Off),
      }),
    ],
  });
}
var _ = _(_());
function _(_) {
  return _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      ..._,
      className: _(_, _.className),
      ref: _,
    });
  });
}
var _ = _.createContext(null),
  _ = _.forwardRef(function (_, _) {
    let { _: _, className: _, ..._ } = _,
      _ = _.useContext(_)?.setHeaderId,
      _ = _.useId(),
      _ = _ || _;
    return (
      _.useEffect(() => {
        _ && _(_);
      }, [_, _]),
      (0, _.jsx)("div", {
        _: _,
        role: "heading",
        "aria-level": 2,
        ..._,
        className: _("DialogHeader", _),
        ref: _,
      })
    );
  }),
  _ = _("DialogSubHeader", "heading", {
    "aria-level": 3,
  }),
  _ = _("SettingsDialogSubHeader", "heading", {
    "aria-level": 3,
  }),
  _ = _("DialogFooter"),
  _ = _("DialogLabel _DialogLayout"),
  _ = _("DialogBodyText"),
  _ = _("DialogBody"),
  _ = _("DialogBody"),
  _ = _("DialogInnerBody"),
  _ = _("DialogControlsSection"),
  _ = _("DialogControlsSectionHeader", "heading", {
    "aria-level": 3,
  });
var _ = _("DialogTwoColLayout _DialogColLayout"),
  _ = _("DialogThreeColLayout _DialogColLayout"),
  _ = _("DialogTwoThirdColLayout _DialogColLayout"),
  _ = _("DialogColumn _DialogLayout");
function _(_) {
  let _ = _("Content", _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let { children: _, bCenterVertically: _, refElem: _, ..._ } = _,
    _ = "DialogContent _DialogLayout" + (_.className ? " " + _.className : "");
  return (
    _ && (_ += " _DialogCenterVertically"),
    (0, _.jsx)("div", {
      ..._,
      ref: _,
      className: _,
      children: (0, _.jsx)("div", {
        className: "DialogContent_InnerWidth",
        children: _,
      }),
    })
  );
}
var _ = class extends _.Component {
  OnSubmit(_) {
    _.preventDefault(), this.props.onSubmit && this.props.onSubmit(_);
  }
  render() {
    return (0, _.jsx)("form", {
      ...this.props,
      onSubmit: this.OnSubmit,
    });
  }
};
_([_], _.prototype, "OnSubmit", 1);
function _(_) {
  let { classNameContent: _, bCenterVertically: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    bCenterVertically: _,
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_) {
  let { label: _, tooltip: _, className: _, children: _ } = _;
  return (0, _.jsxs)("label", {
    className: _("DialogInputLabelGroup", "_DialogLayout", _),
    children: [
      _ &&
        (0, _.jsxs)(_, {
          children: [
            _,
            " ",
            _ &&
              (0, _.jsx)(_, {
                tooltip: _,
              }),
            " ",
          ],
        }),
      _,
    ],
  });
}
var _ = _.forwardRef(function (_, _) {
    let _ = _(),
      { svgicon: _, ..._ } = _,
      _ = _(
        _.className,
        _ !== void 0 && "hasSVGIcon",
        _.disabled && "Disabled",
        _.strButtonClassName,
      ),
      _ = (_) => {
        if (!(_.disabled || !_))
          return (_) => {
            _.stopPropagation(), _(_);
          };
      };
    return (0, _.jsxs)(_, {
      ref: _,
      onOKActionDescription: _.disabled ? null : void 0,
      noFocusRing: !!_.strButtonClassName,
      ..._,
      className: _,
      disabled: !1,
      onClick: _(_.onClick),
      onPointerDown: _(_.onPointerDown),
      onPointerUp: _(_.onPointerUp),
      onPointerCancel: _(_.onPointerCancel),
      onMouseDown: _(_.onMouseDown),
      onMouseUp: _(_.onMouseUp),
      onTouchStart: _(_.onTouchStart),
      onTouchEnd: _(_.onTouchEnd),
      onTouchCancel: _(_.onTouchCancel),
      onSubmit: _(_.onSubmit),
      children: [_ && _(), _.children],
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      preferredFocus: !0,
      type: _.onClick ? "button" : "submit",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "DialogButton _DialogLayout Small"),
    });
  }),
  _ = _.forwardRef(function (_, _) {
    return (0, _.jsx)(_, {
      type: "button",
      ..._,
      ref: _,
      className: _(_.className, "TextButton"),
    });
  });
function _(_) {
  return (0, _.jsxs)(_, {
    className: _.className,
    children: [
      (0, _.jsxs)(_, {
        onClick: _.onOK,
        disabled: _.bOKDisabled,
        autoFocus: _.focusButton == "primary",
        children: [_.strOKText || _("#Button_Confirm"), " "],
      }),
      (0, _.jsx)(_, {
        onClick: _.onCancel,
        disabled: _.bCancelDisabled,
        autoFocus: _.focusButton == "secondary",
        children: _.strCancelText || _("#Button_Cancel"),
      }),
    ],
  });
}
function _(_) {
  let _ = _.bOKDisabled ? _ : _,
    _ = _.bOKDisabled ? _ : _;
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        onClick: _.onOK,
        disabled: _.bOKDisabled,
        children: [_.strOKText || _("#Button_Confirm"), " "],
      }),
      (0, _.jsxs)(_, {
        onClick: _.onUpdate,
        disabled: _.bUpdateDisabled,
        children: [_.strUpdateText || _("#Button_Update"), " "],
      }),
      (0, _.jsx)(_, {
        onClick: _.onCancel,
        disabled: _.bCancelDisabled,
        children: _.strCancelText || _("#Button_Cancel"),
      }),
    ],
  });
}
var _ = class extends _.Component {
  constructor(_) {
    super(_),
      (this.state = {
        checked: _.checked,
        disabled: _.disabled,
      });
  }
  componentDidUpdate(_) {
    this.props.controlled ||
      (_.checked != this.props.checked &&
        this.props.checked != this.state.checked &&
        this.setState({
          checked: this.props.checked,
        })),
      _.disabled != this.props.disabled &&
        this.props.disabled != this.state.disabled &&
        this.setState({
          disabled: this.props.disabled,
        });
  }
  shouldComponentUpdate(_, _) {
    return !(
      _.label == this.props.label &&
      _.description == this.props.description &&
      _.onChange == this.props.onChange &&
      _.controlled == this.props.controlled &&
      _.disabled == this.props.disabled &&
      _.disabled == this.state.disabled &&
      _.checked == this.checked &&
      _.checked == this.state.checked
    );
  }
  get checked() {
    return this.props.controlled ? this.props.checked : this.state.checked;
  }
  GetPanelElementProps() {
    let {
      onChange: _,
      checked: _,
      label: _,
      description: _,
      tabIndex: _,
      disabled: _,
      className: _,
      tooltip: _,
      color: _,
      highlightColor: _,
      bottomSeparator: _,
      controlled: _,
      ..._
    } = this.props;
    return {
      ..._,
      tabIndex: _ || 0,
      onActivate: this.Toggle,
      onKeyDown: this.KeyDown,
    };
  }
  Toggle() {
    if (this.props.disabled) return;
    let _ = !this.checked;
    this.props.controlled ||
      this.setState({
        checked: _,
      }),
      this.props.onChange && this.props.onChange(_);
  }
  KeyDown(_) {
    _.keyCode == 32 && (this.Toggle(), _.preventDefault(), _.stopPropagation());
  }
  SetChecked(_, _) {
    this.setState({
      checked: _,
    }),
      _ && this.props.onChange && this.props.onChange(_);
  }
};
_([_], _.prototype, "Toggle", 1),
  _([_], _.prototype, "KeyDown", 1),
  _([_], _.prototype, "SetChecked", 1);
var _ = _.forwardRef(function (_, _) {
    let _ = _("ToggleField", _);
    return (0, _.jsx)(_, {
      ref: _,
      ..._,
    });
  }),
  _ = class extends _ {
    OnOffKeyDown(_) {
      (_.keyCode == 37 && this.checked) || (_.keyCode == 39 && !this.checked)
        ? (this.Toggle(), _.preventDefault(), _.stopPropagation())
        : this.KeyDown(_);
    }
    OnNewUIToggle(_) {
      _ !== this.checked && this.Toggle();
    }
    render() {
      let _ =
        "DialogToggleField _DialogInputContainer _DialogLayout " +
        (this.props.className ? this.props.className : "");
      return (
        this.props.disabled && (_ += " Disabled"),
        (0, _.jsxs)("div", {
          className: _,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, _.jsxs)("div", {
              className: "displayColumn alignSelfCenter",
              children: [
                (0, _.jsxs)("div", {
                  className: "DialogToggle_Label",
                  children: [
                    (0, _.jsx)("span", {
                      children: this.props.label,
                    }),
                    this.props.tooltip &&
                      (0, _.jsx)(_, {
                        tooltip: this.props.tooltip,
                      }),
                  ],
                }),
                this.props.description &&
                  (0, _.jsx)("div", {
                    className: "DialogToggle_Description",
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, _.jsx)("div", {
                  className: "DialogToggleField_NewUIContainer",
                  children: (0, _.jsx)(_, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, _.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, _.jsxs)(_, {
                    className: "DialogToggleField_OptionPanel",
                    onOKButton: this.Toggle,
                    children: [
                      (0, _.jsx)("div", {
                        className:
                          "DialogToggleField_Option Off" +
                          (this.checked ? "" : " Active"),
                        children: _("#Dialog_Off"),
                      }),
                      (0, _.jsx)("div", {
                        className:
                          "DialogToggleField_Option On" +
                          (this.checked ? " Active" : ""),
                        children: _("#Dialog_On"),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
_([_], _.prototype, "OnOffKeyDown", 1), _([_], _.prototype, "OnNewUIToggle", 1);
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

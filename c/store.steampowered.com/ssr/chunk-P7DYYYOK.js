import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
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
  let { children: _ } = _,
    { divProps: _, tooltipProps: _ } = _({
      ..._,
      toolTipContent: _.toolTipContent
        ? (0, _.jsx)(_, {
            children: _(_.toolTipContent),
          })
        : null,
    });
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _.cloneElement(_, {
        ..._,
        ..._.props,
      }),
      (0, _.jsx)(_, {
        ..._,
      }),
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
var _ = "tZwK6yclo-4-";
var _ = "_8aXt7kb0jV8-";
var _ = _(_());
function _(_) {
  let { customTooltip: _, tooltip: _, className: _, icon: _, small: _ } = _,
    _ = _ ? _ : _,
    _ = _;
  return (
    (_ ??= _ ? (0, _.jsx)(_, {}) : void 0),
    (_ ??= (0, _.jsxs)(_.Fragment, {
      children: [" ", (0, _.jsx)(_, {})],
    })),
    (0, _.jsx)(_, {
      toolTipContent: _,
      className: _(_, "HelperTooltip", _ && _, _),
      children: _,
    })
  );
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
    _.preventDefault(),
      _.stopPropagation(),
      this.props.onSubmit && this.props.onSubmit(_);
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
var _ = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var _ = _(_());
function _(_) {
  return typeof _ == "object" && "data" in _;
}
function _(_) {
  return typeof _ == "object" && "bIsSeparator" in _;
}
function _(_) {
  return typeof _ == "object" && "options" in _;
}
function _(_, _) {
  if (_ === _) return !0;
  if (!Array.isArray(_) || !Array.isArray(_) || _.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (!_(_[_], _[_])) return !1;
  return !0;
}
function _(_, _) {
  return _ == null || _ == null
    ? _ == _
    : _(_) && _(_)
      ? !0
      : !(
          _(_) ||
          _(_) ||
          typeof _.label != typeof _.label ||
          (typeof _.label == "string" && _.label !== _.label) ||
          _.tooltip !== _.tooltip ||
          _(_) != _(_) ||
          (_(_) && _(_) && !_(_.options, _.options)) ||
          (_(_) && _(_) && _.data !== _.data)
        );
}
function _(_, _) {
  if (_ != null)
    for (let _ = 0; _ < _.length; _++) {
      let _ = _[_];
      if (_(_) && _.data === _) return _;
      if (_(_)) {
        let _ = _(_.options, _);
        if (_ != null) return _;
      }
    }
}
function _(_) {
  let _ = _("DropDownField", _);
  return (0, _.jsx)(_, {
    ..._,
  });
}
function _(_) {
  let {
    label: _,
    tooltip: _,
    strClassName: _,
    dropDownControlRef: _,
    ..._
  } = _;
  return (0, _.jsx)(_, {
    label: _,
    tooltip: _,
    className: _,
    children: (0, _.jsx)(_, {
      menuLabel: _,
      ..._,
      ref: _,
    }),
  });
}
var _ = _.forwardRef(function (_, _) {
    return (0, _.jsxs)(_, {
      _: _._,
      focusable: _.focusable,
      className: _(_.className, "DialogDropDown", "_DialogInputContainer", {
        Active: _.opened,
        Disabled: _.disabled,
      }),
      tabIndex: _.tabIndex,
      onClick: _.onClick,
      onKeyDown: _.onKeyDown,
      disabled: _.disabled,
      type: "button",
      ref: _,
      noFocusRing: _.noFocusRing,
      role: _.role ?? "combobox",
      "aria-controls": _["aria-controls"],
      "aria-expanded": _.opened,
      "aria-label": _["aria-label"],
      "aria-labelledby": _["aria-labelledby"],
      "aria-describedby": _["aria-describedby"],
      children: [
        (0, _.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: _.children,
        }),
        !_.disabled &&
          (0, _.jsx)("div", {
            className: _(_.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, _.jsx)(_, {
              role: "presentation",
            }),
          }),
      ],
    });
  }),
  _ = class extends _.Component {
    static contextType = _;
    m_elInput;
    m_iMenuInstance;
    constructor(_) {
      super(_),
        (this.state = {
          value: _(_.rgOptions, _.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(_) {
      if (this.props.controlled) return;
      let _ = _(this.props.rgOptions, _);
      _(_, this.value) ||
        this.setState({
          value: _,
        });
    }
    get value() {
      return this.props.controlled
        ? _(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(_, _, _) {
      if (
        _.selectedOption !== this.props.selectedOption ||
        _.disabled != this.props.disabled ||
        _.bOpened !== this.state.bOpened ||
        !_(this.props.rgOptions, _.rgOptions) ||
        !_(_.value, this.value)
      )
        return !0;
      let _ = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let _ of _) if (_[_] !== this.props[_]) return !0;
      return !1;
    }
    componentDidUpdate(_, _) {
      _(
        this.props.controlled === _.controlled,
        '"controlled" prop should never change after mount',
      );
      let _ = !_(_.rgOptions, this.props.rgOptions),
        _ = _.selectedOption !== this.props.selectedOption,
        _ = !_(this.value, _.value);
      !this.props.controlled &&
        (_ || _ || _) &&
        (_ || this.value == null
          ? this.SetSelectedOption(this.props.selectedOption)
          : this.SetSelectedOption(this.value.data)),
        (_ || _) &&
          (this.state.bOpened
            ? (this.m_iMenuInstance?.SetOnHideCallback(void 0),
              this.m_iMenuInstance?.Hide(),
              (this.m_iMenuInstance = void 0),
              this.BuildMenu())
            : this.m_iMenuInstance &&
              (this.m_iMenuInstance.SetOnHideCallback(void 0),
              (this.m_iMenuInstance = void 0)));
    }
    OnInputRef(_) {
      _ && (this.m_elInput = _);
    }
    get element() {
      return this.m_elInput;
    }
    ToggleMenu() {
      if (this.state.bOpened) this.HideMenu();
      else {
        if (
          this.props.onMenuWillOpen &&
          this.props.onMenuWillOpen(this.ShowMenu) == !1
        )
          return;
        this.ShowMenu();
      }
    }
    OnValueSelected(_, _) {
      this.HideMenu(),
        this.setState({
          value: _,
        }),
        this.props.onChange && this.props.onChange(_, this, _);
    }
    BuildMenu() {
      let _ = "DialogMenuPosition";
      this.props.strDropDownClassName &&
        (_ += " " + this.props.strDropDownClassName);
      let _ = {
          bOverlapHorizontal: !0,
          bMatchWidth: this.props.bMatchWidth ?? !0,
          bFitToWindow: !0,
          strClassName: _,
          bDisableMouseOverlay: this.props.bDisableMouseOverlay,
          ...this.props.contextMenuPositionOptions,
        },
        _ = this.props.contextMenuPositionOptions?.onCancel;
      (this.m_iMenuInstance = _(
        (0, _.jsx)(_, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: _,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
          _: `dropdownmenu_${this.m_iMenuInstance?.key}`,
        }),
        this.m_elInput,
        _,
      )),
        this.m_iMenuInstance.SetLabel(
          this.props.menuLabel ??
            (typeof this.props.strDefaultLabel == "string" &&
              this.props.strDefaultLabel),
        ),
        this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
    }
    ShowMenu() {
      this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
        this.props.onMenuOpened && this.props.onMenuOpened(),
        this.setState({
          bOpened: !0,
        });
    }
    HideMenu() {
      this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
        this.setState(
          {
            bOpened: !1,
          },
          () => this.m_elInput.focus(),
        );
    }
    OnKeyDown(_) {
      _(_, this.props.rgOptions.filter(_), this.value?.data, (_) =>
        this.OnValueSelected(void 0, _),
      );
    }
    render() {
      let _ = this.value?.label ?? this.props.strDefaultLabel;
      this.props.renderButtonValue != null &&
        (_ = this.props.renderButtonValue(_));
      let _ = this.props.focusable ?? !0,
        _ = this.props.renderButton || this.context.DropDownControlButton || _;
      return (0, _.jsx)(_, {
        focusable: _,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (_ ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        role: "combobox",
        "aria-controls": this.m_iMenuInstance
          ? `dropdownmenu_${this.m_iMenuInstance.key}`
          : void 0,
        "aria-expanded": this.state.bOpened,
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        children: _,
      });
    }
  };
_([_], _.prototype, "OnInputRef", 1),
  _([_], _.prototype, "ToggleMenu", 1),
  _([_], _.prototype, "OnValueSelected", 1),
  _([_], _.prototype, "ShowMenu", 1),
  _([_], _.prototype, "HideMenu", 1),
  _([_], _.prototype, "OnKeyDown", 1);
var _ = _.createContext(null);
function _(_) {
  let _ = _("DropDownMenu", _);
  return (0, _.jsx)(_.Provider, {
    value: {},
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
function _(_, _, _, _) {
  let _;
  if (_.key === "ArrowDown")
    _ = (_.findIndex((_) => _.data === _) + 1) % _.length;
  else if (_.key === "ArrowUp") {
    let _ = _.findIndex((_) => _.data === _);
    _ = _ <= 0 ? _.length - 1 : _ - 1;
  }
  _ !== void 0 && (_(_[_]), _.preventDefault());
}
function _(_) {
  let {
      rgOptions: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      selectedValue: _,
    } = _,
    [_, _] = _.useState(_),
    _ = _.useMemo(() => _.filter(_), [_]),
    _ = _.useCallback(
      (_) => {
        _(_, _, _, (_) => _(_.data));
      },
      [_, _],
    );
  return (0, _.jsx)("div", {
    className: _(
      _.DialogDropDownMenu,
      "_DialogInputContainer",
      _.strDropDownMenuCtnClass,
    ),
    onKeyDown: _,
    children: (0, _.jsx)(_, {
      rgOptions: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      activeValue: _,
      setActiveValue: _,
    }),
  });
}
function _(_) {
  let { rgOptions: _, ..._ } = _;
  return _.map((_, _) =>
    _(_)
      ? (0, _.jsx)(
          "hr",
          {
            className: _(
              _.DialogDropDownMenu_Item,
              _.DialogDropDownMenu_Separator,
            ),
          },
          _,
        )
      : _(_)
        ? (0, _.jsx)(
            _,
            {
              ..._,
              rgOptions: _.options,
            },
            _,
          )
        : (0, _.jsx)(
            _,
            {
              ..._,
              option: _,
            },
            _,
          ),
  );
}
function _(_) {
  let {
      option: _,
      strDropDownItemClassName: _,
      onValueSelected: _,
      activeValue: _,
      setActiveValue: _,
    } = _,
    _ = _.useCallback((_) => _ && _.focus(), []),
    _ = _.useCallback(() => {
      _(_.data);
    }, [_, _]),
    _ = _.data === _;
  return (0, _.jsx)("button", {
    type: "button",
    className: _(
      _.DialogDropDownMenu_Item,
      _,
      _.strOptionClass,
      _ && "ContextMenuAutoFocus",
    ),
    onClick: (_) => _(_, _),
    ref: _ ? _ : void 0,
    onMouseEnter: _,
    role: "option",
    "aria-selected": _,
    children: _.tooltip
      ? (0, _.jsx)(_, {
          toolTipContent: _.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: _.label,
        })
      : (0, _.jsx)("div", {
          children: _.label,
        }),
  });
}
var _ = class extends _.Component {
  state = {
    rgOptions: void 0,
  };
  async OnMenuOpened() {
    if (!this.state.rgOptions) {
      let _ = await this.props.fnLoadOptions();
      this.setState({
        rgOptions: _,
      });
    }
  }
  render() {
    let {
        fnLoadOptions: _,
        strInitialDisplay: _,
        initialValue: _,
        ..._
      } = this.props,
      { rgOptions: _ } = this.state;
    return (
      _ === void 0 &&
        (_ || _
          ? ((_ = [
              {
                label: _,
                data: _,
              },
            ]),
            (_.selectedOption = _))
          : (_ = [])),
      (0, _.jsx)(_, {
        ..._,
        rgOptions: _,
        onMenuOpened: this.OnMenuOpened,
      })
    );
  }
};
_([_], _.prototype, "OnMenuOpened", 1);
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

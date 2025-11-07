import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
if (!_.useState)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!_)
  throw new Error(
    "mobx-react-lite@3 requires mobx at least version 6 to be available",
  );
var _ = _(_());
function _(_) {
  _();
}
function _(_) {
  _ || (_ = _),
    _({
      reactionScheduler: _,
    });
}
var _ = _(_());
function _(_) {
  return _(_);
}
var _ = !1;
function _() {
  return _;
}
var _ = 1e4,
  _ = 1e4,
  _ = (function () {
    function _(_) {
      var _ = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: _,
      }),
        Object.defineProperty(this, "registrations", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: new Map(),
        }),
        Object.defineProperty(this, "sweepTimeout", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "sweep", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function (_) {
            _ === void 0 && (_ = _),
              clearTimeout(_.sweepTimeout),
              (_.sweepTimeout = void 0);
            var _ = Date.now();
            _.registrations.forEach(function (_, _) {
              _ - _.registeredAt >= _ &&
                (_.finalize(_.value), _.registrations.delete(_));
            }),
              _.registrations.size > 0 && _.scheduleSweep();
          },
        }),
        Object.defineProperty(this, "finalizeAllImmediately", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function () {
            _.sweep(0);
          },
        });
    }
    return (
      Object.defineProperty(_.prototype, "register", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_, _, _) {
          this.registrations.set(_, {
            value: _,
            registeredAt: Date.now(),
          }),
            this.scheduleSweep();
        },
      }),
      Object.defineProperty(_.prototype, "unregister", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function (_) {
          this.registrations.delete(_);
        },
      }),
      Object.defineProperty(_.prototype, "scheduleSweep", {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: function () {
          this.sweepTimeout === void 0 &&
            (this.sweepTimeout = setTimeout(this.sweep, _));
        },
      }),
      _
    );
  })();
var _ = typeof FinalizationRegistry < "u" ? FinalizationRegistry : _;
var _ = new _(function (_) {
  var _;
  (_ = _.reaction) === null || _ === void 0 || _.dispose(), (_.reaction = null);
});
var _ = _(_()),
  _ = function () {};
function _(_) {
  _.reaction = new _("observer".concat(_.name), function () {
    var _;
    (_.stateVersion = Symbol()),
      (_ = _.onStoreChange) === null || _ === void 0 || _.call(_);
  });
}
function _(_, _) {
  if ((_ === void 0 && (_ = "observed"), _())) return _();
  var _ = _.default.useRef(null);
  if (!_.current) {
    var _ = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: _,
      subscribe: function (_) {
        return (
          _.unregister(_),
          (_.onStoreChange = _),
          _.reaction || (_(_), (_.stateVersion = Symbol())),
          function () {
            var _;
            (_.onStoreChange = null),
              (_ = _.reaction) === null || _ === void 0 || _.dispose(),
              (_.reaction = null);
          }
        );
      },
      getSnapshot: function () {
        return _.stateVersion;
      },
    };
    _.current = _;
  }
  var _ = _.current;
  _.reaction || (_(_), _.register(_, _, _)),
    _.default.useDebugValue(_.reaction, _),
    (0, _.useSyncExternalStore)(_.subscribe, _.getSnapshot, _);
  var _, _;
  if (
    (_.reaction.track(function () {
      try {
        _ = _();
      } catch (_) {
        _ = _;
      }
    }),
    _)
  )
    throw _;
  return _;
}
var _ = _(_());
var _ = typeof Symbol == "function" && Symbol.for,
  _ = _
    ? Symbol.for("react.forward_ref")
    : typeof _.forwardRef == "function" &&
      (0, _.forwardRef)(function (_) {
        return null;
      }).$$typeof,
  _ = _
    ? Symbol.for("react.memo")
    : typeof _.memo == "function" &&
      (0, _.memo)(function (_) {
        return null;
      }).$$typeof;
function _(_, _) {
  var _;
  if (_ && _.$$typeof === _)
    throw new Error(
      "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
    );
  if (_()) return _;
  var _ = (_ = _?.forwardRef) !== null && _ !== void 0 ? _ : !1,
    _ = _,
    _ = _.displayName || _.name;
  if (
    _ &&
    _.$$typeof === _ &&
    ((_ = !0), (_ = _.render), typeof _ != "function")
  )
    throw new Error(
      "[mobx-react-lite] `render` property of ForwardRef was not a function",
    );
  var _ = function (_, _) {
    return _(function () {
      return _(_, _);
    }, _);
  };
  return (
    (_.displayName = _.displayName),
    Object.defineProperty(_, "name", {
      value: _.name,
      writable: !0,
      configurable: !0,
    }),
    _.contextTypes && (_.contextTypes = _.contextTypes),
    _ && (_ = (0, _.forwardRef)(_)),
    (_ = (0, _.memo)(_)),
    _(_, _),
    _
  );
}
var _ = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  displayName: !0,
};
function _(_, _) {
  Object.keys(_).forEach(function (_) {
    _[_] || Object.defineProperty(_, _, Object.getOwnPropertyDescriptor(_, _));
  });
}
function _(_) {
  var _ = _.children,
    _ = _.render,
    _ = _ || _;
  return typeof _ != "function" ? null : _(_);
}
_.displayName = "Observer";
var _ = _(_());
var _ = _(_());
var _ = _(_());
var _;
_(_.unstable_batchedUpdates);
var _ =
  (_ = _.finalizeAllImmediately) !== null && _ !== void 0 ? _ : function () {};
function _(_, _) {
  return _ === void 0 && (_ = "observed"), _(_, _);
}
var _ = _(_());
function _(_, _) {
  if (_(_, _)) return !0;
  if (typeof _ != "object" || _ === null || typeof _ != "object" || _ === null)
    return !1;
  var _ = Object.keys(_),
    _ = Object.keys(_);
  if (_.length !== _.length) return !1;
  for (var _ = 0; _ < _.length; _++)
    if (!Object.hasOwnProperty.call(_, _[_]) || !_(_[_[_]], _[_[_]])) return !1;
  return !0;
}
function _(_, _) {
  return _ === _ ? _ !== 0 || 1 / _ === 1 / _ : _ !== _ && _ !== _;
}
var _ = Symbol("patchMixins"),
  _ = Symbol("patchedDefinition");
function _(_, _) {
  var _ = (_[_] = _[_] || {}),
    _ = (_[_] = _[_] || {});
  return (_.locks = _.locks || 0), (_.methods = _.methods || []), _;
}
function _(_, _) {
  for (
    var _ = this, _ = arguments.length, _ = new Array(_ > 2 ? _ - 2 : 0), _ = 2;
    _ < _;
    _++
  )
    _[_ - 2] = arguments[_];
  _.locks++;
  try {
    var _;
    return _ != null && (_ = _.apply(this, _)), _;
  } finally {
    _.locks--,
      _.locks === 0 &&
        _.methods.forEach(function (_) {
          _.apply(_, _);
        });
  }
}
function _(_, _) {
  var _ = function () {
    for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
      _[_] = arguments[_];
    _.call.apply(_, [this, _, _].concat(_));
  };
  return _;
}
function _(_, _, _) {
  var _ = _(_, _);
  _.methods.indexOf(_) < 0 && _.methods.push(_);
  var _ = Object.getOwnPropertyDescriptor(_, _);
  if (!(_ && _[_])) {
    var _ = _[_],
      _ = _(_, _, _ ? _.enumerable : void 0, _, _);
    Object.defineProperty(_, _, _);
  }
}
function _(_, _, _, _, _) {
  var _,
    _ = _(_, _);
  return (
    (_ = {}),
    (_[_] = !0),
    (_.get = function () {
      return _;
    }),
    (_.set = function (_) {
      if (this === _) _ = _(_, _);
      else {
        var _ = _(this, _, _, _, _);
        Object.defineProperty(this, _, _);
      }
    }),
    (_.configurable = !0),
    (_.enumerable = _),
    _
  );
}
var _ = Symbol("ObserverAdministration"),
  _ = Symbol("isMobXReactObserver");
function _(_) {
  var _;
  return (_ = _[_]) != null
    ? _
    : (_[_] = {
        reaction: null,
        mounted: !1,
        reactionInvalidatedBeforeMount: !1,
        forceUpdate: null,
        name: _(_.constructor),
        state: void 0,
        props: void 0,
        context: void 0,
      });
}
function _(_) {
  var _ = _.prototype;
  if (_[_]) {
    var _ = _(_);
    throw new Error(
      "The provided component class (" +
        _ +
        ") has already been declared as an observer component.",
    );
  } else _[_] = !0;
  if (_.componentWillReact)
    throw new Error(
      "The componentWillReact life-cycle event is no longer supported",
    );
  if (_.__proto__ !== _.PureComponent) {
    if (!_.shouldComponentUpdate) _.shouldComponentUpdate = _;
    else if (_.shouldComponentUpdate !== _)
      throw new Error(
        "It is not allowed to use shouldComponentUpdate in observer based components.",
      );
  }
  var _ = _.render;
  if (typeof _ != "function") {
    var _ = _(_);
    throw new Error(
      "[mobx-react] class component (" +
        _ +
        ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
    );
  }
  _.render = function () {
    return (
      Object.defineProperty(this, "render", {
        configurable: !1,
        writable: !1,
        value: _() ? _ : _.call(this, _),
      }),
      this.render()
    );
  };
  var _ = _.componentDidMount;
  return (
    (_.componentDidMount = function () {
      var _ = this;
      if (0) var _;
      var _ = _(this);
      return (
        (_.mounted = !0),
        _.unregister(this),
        (_.forceUpdate = function () {
          return _.forceUpdate();
        }),
        (!_.reaction || _.reactionInvalidatedBeforeMount) && _.forceUpdate(),
        _?.apply(this, arguments)
      );
    }),
    _(_, "componentWillUnmount", function () {
      var _;
      if (!_()) {
        var _ = _(this);
        (_ = _.reaction) == null || _.dispose(),
          (_.reaction = null),
          (_.forceUpdate = null),
          (_.mounted = !1),
          (_.reactionInvalidatedBeforeMount = !1);
      }
    }),
    _
  );
}
function _(_) {
  return _.displayName || _.name || "<component>";
}
function _(_) {
  var _ = _.bind(this),
    _ = _(this);
  function _() {
    _.reaction || ((_.reaction = _(_)), _.mounted || _.register(this, _, this));
    var _ = void 0,
      _ = void 0;
    if (
      (_.reaction.track(function () {
        try {
          _ = _(!1, _);
        } catch (_) {
          _ = _;
        }
      }),
      _)
    )
      throw _;
    return _;
  }
  return _;
}
function _(_) {
  return new _(_.name + ".render()", function () {
    if (!_.mounted) {
      _.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      _.forceUpdate == null || _.forceUpdate();
    } catch {
      var _;
      (_ = _.reaction) == null || _.dispose(), (_.reaction = null);
    }
  });
}
function _(_, _) {
  return (
    _() &&
      console.warn(
        "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
      ),
    this.state !== _ ? !0 : !_(this.props, _)
  );
}
function _(_, _) {
  if (_ && _.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return (
    _.isMobxInjector === !0 &&
      console.warn(
        "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
      ),
    Object.prototype.isPrototypeOf.call(_.Component, _) ||
    Object.prototype.isPrototypeOf.call(_.PureComponent, _)
      ? _(_)
      : _(_)
  );
}
function _() {
  return (
    (_ = Object.assign
      ? Object.assign.bind()
      : function (_) {
          for (var _ = 1; _ < arguments.length; _++) {
            var _ = arguments[_];
            for (var _ in _)
              Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
          }
          return _;
        }),
    _.apply(this, arguments)
  );
}
function _(_, _) {
  if (_ == null) return {};
  var _ = {},
    _ = Object.keys(_),
    _,
    _;
  for (_ = 0; _ < _.length; _++)
    (_ = _[_]), !(_.indexOf(_) >= 0) && (_[_] = _[_]);
  return _;
}
var _ = ["children"],
  _ = _.default.createContext({});
function _(_) {
  var _ = _.children,
    _ = _(_, _),
    _ = _.default.useContext(_),
    _ = _.default.useRef(_({}, _, _)),
    _ = _.current;
  if (0) var _;
  return _.default.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
_.displayName = "MobXProvider";
var _ = Number.parseInt(_.default.version.split(".")[0]);
if (!_.Component) throw new Error("mobx-react requires React to be available");
if (!_) throw new Error("mobx-react requires mobx to be available");
var _ = Object.seal({
    onMoveUp: _,
    onMoveDown: _,
  }),
  _ = Object.seal({
    onMoveRight: _,
    onMoveLeft: _,
  });
function _(_, _) {
  if (_.is_repeat) return !1;
  let _ = _.GetRelativeDirection(_.button);
  return _ == 1 ? _.BFocusFirstChild(0) : _ == 2 ? _.BFocusLastChild(0) : !1;
}
var _ = _(_());
var _ = _(_());
var _ = {
  "duration-app-launch": "800ms",
  ContextMenuMouseOverlay: "b7xYZZxB5B4-",
  ContextMenuPosition: "o6fauCzG3J8-",
  contextMenu: "Sax96NMRDNg-",
  ContextMenuPopup: "BPK-2blxjIY-",
  contextMenuContents: "S4vxdXl-Tt4-",
  contextMenuItem: "_9QNF01mSnJo-",
  active: "yQed0a0UPBs-",
  MenuSectionHeader: "g0TN7BV3VaU-",
  ContextMenuSeparator: "spxW2r-GYVk-",
  NoSeparation: "KYihcox8Ecg-",
  UpperCase: "Xf9GISpIH-g-",
  SubMenu: "zdQY8o-cjDw-",
  Label: "bP5c-culAkY-",
  Arrow: "fawTG34m89A-",
  IconContainer: "jkozd0TWs0M-",
  ContextMenuHRSeparator: "_2OCJzZW0nUA-",
  ForceDesktop: "DBVmBIxYzAc-",
  PopoutSubMenu: "MVJ6mtoRVF4-",
  PopoutSubMenuItems: "_3W6Oq18b4G0-",
};
var _ = _(_()),
  _ = _.forwardRef((_, _) => {
    let { className: _, contextMenuStyles: _, disabled: _, ..._ } = _;
    return (0, _.jsx)("div", {
      ..._,
      ref: _,
      className: _(
        _,
        (_ || _).contextMenuItem,
        "contextMenuItem",
        _ && "disabled",
      ),
    });
  });
_.displayName = "MenuItem";
function _(_, _ = !0) {
  return function (_, _, _) {
    let _ = _.value;
    _.value = function (..._) {
      let _ = this[_ + "_DebounceProperties"];
      _ === void 0 &&
        (_ = this[_ + "_DebounceProperties"] =
          {
            hTimer: void 0,
            nPending: 0,
          }),
        _.hTimer === void 0
          ? (_ ? _.apply(this, _) : (_.nPending += 1),
            (_.hTimer = window.setInterval(() => {
              _.nPending > 0
                ? (_.apply(this, _), (_.nPending = 0))
                : (window.clearInterval(_.hTimer), (_.hTimer = void 0));
            }, _)))
          : (_.nPending += 1);
    };
  };
}
var _ = _(_()),
  _ = _.createContext(null),
  _ = class extends _.Component {
    m_navRef = _();
    get instance() {
      return this.context.instance;
    }
    componentDidMount() {
      this.instance.SetLabel(this.props.label),
        this.m_navRef.current?.TakeFocus(),
        _(this.props.refInstance, this.instance);
    }
    componentDidUpdate(_) {
      _.label !== this.props.label &&
        this.context &&
        this.instance.SetLabel(this.props.label);
    }
    HideIfSubmenu() {
      return this.instance.BIsSubMenu() ? (this.instance.HideSelf(), !0) : !1;
    }
    HideMenu() {
      return (
        this.instance.BIsSubMenu()
          ? this.instance.HideSelf()
          : this.instance.Hide(),
        !0
      );
    }
    render() {
      let {
          children: _,
          className: _,
          label: _,
          onCancel: _,
          cancelText: _,
          refInstance: _,
          bForceDesktopPresentation: _,
          footer: _,
          role: _ = "menu",
          labelId: _,
          style: _ = {},
          refScrollable: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _,
        _ = _ ?? "#Button_Cancel";
      if (this.context.presentation == 1 && !_) {
        let _ = () => {
          _ && _(), this.instance.Hide();
        };
        return (
          (_.overflowY = this.instance.BIsSubMenuVisible() ? "hidden" : void 0),
          (0, _.jsxs)(_, {
            ..._,
            className: _(
              _.contextMenuContents,
              {
                [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              },
              _,
            ),
            "flow-children": "column",
            onMoveLeft: this.HideIfSubmenu,
            onCancel: this.instance.BIsSubMenu() ? this.HideMenu : _,
            style: _,
            navEntryPreferPosition: 4,
            navRef: this.m_navRef,
            ref: _,
            role: _,
            "aria-labelledby": _ ? _ : void 0,
            ..._,
            children: [
              _,
              _ &&
                (0, _.jsx)("div", {
                  _: _,
                  style: {
                    display: "none",
                  },
                  children: _,
                }),
              !this.instance.BIsSubMenu() &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {
                      className: _.Cancel,
                      onSelected: _,
                      children: _(_),
                    }),
                    _,
                  ],
                }),
              this.instance.BIsSubMenuVisible() &&
                (0, _.jsx)("div", {
                  className: _.contextMenuFade,
                  onClick: () => this.instance.HideSubMenu(),
                }),
            ],
          })
        );
      } else
        return (0, _.jsx)("div", {
          ref: _,
          style: _,
          ..._,
          className: _(
            {
              [_.contextMenuContents]: !0,
              [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              [_.ForceDesktop]: _,
            },
            _,
          ),
          children: _,
        });
    }
  };
_(_, "contextType", _),
  _([_], _.prototype, "HideIfSubmenu", 1),
  _([_], _.prototype, "HideMenu", 1),
  (_ = _([_], _));
function _(_) {
  let _ = _.useId();
  return (0, _.jsx)(_, {
    labelId: _,
    ..._,
  });
}
var _ = class extends _.PureComponent {
  static contextType = _;
  m_ref = _.createRef();
  m_refDiv = _.createRef();
  get element() {
    return this.m_refDiv.current;
  }
  get instance() {
    return this.context.instance;
  }
  OnClick(_) {
    if (this.props.disabled) {
      this.context.callbacks?.onDisabledItemSelected &&
        this.context.callbacks.onDisabledItemSelected();
      return;
    }
    this.props.onClick && this.props.onClick(_),
      !this.props.bInteractableItem &&
        (this.props.onSelected && this.props.onSelected(_),
        this.context && this.instance.ForceHide());
  }
  OnOKButton(_) {
    this.m_refDiv.current?.click();
  }
  OnMouseEnter(_) {
    this.context.presentation == 0 && this.instance.HideSubMenu();
  }
  Focus() {
    this.m_ref.current
      ? this.m_ref.current.TakeFocus()
      : this.m_refDiv.current && this.m_refDiv.current.focus();
  }
  render() {
    let {
        onSelected: _,
        bInteractableItem: _,
        onMoveRight: _,
        ..._
      } = this.props,
      _ = this.context?.styles ?? _;
    return this.context.presentation == 1
      ? (0, _.jsx)(_, {
          noFocusRing: !0,
          preferredFocus: this.props.selected,
          ref: this.m_refDiv,
          navRef: this.m_ref,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          className: _(
            this.props.className,
            _.contextMenuItem,
            "contextMenuItem",
            this.props.disabled && "disabled",
            this.props.selected && _.Selected,
            this.props.tone == "positive" && _.Positive,
            this.props.tone == "emphasis" && _.Emphasis,
            this.props.tone == "destructive" && _.Destructive,
          ),
          focusClassName: _.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: _,
          unselectable: this.props.unselectable,
          role: _.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        })
      : (0, _.jsx)(_, {
          ref: this.m_refDiv,
          onMouseEnter: this.OnMouseEnter,
          ..._,
          onClick: this.OnClick,
          unselectable: this.props.unselectable,
          className: this.props.className,
          role: _.role ?? "menuitem",
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
_([_], _.prototype, "OnClick", 1),
  _([_], _.prototype, "OnOKButton", 1),
  _([_], _.prototype, "OnMouseEnter", 1),
  _([_], _.prototype, "Focus", 1);
function _(_) {
  let _ = _.useContext(_).styles ?? _;
  return (0, _.jsx)("div", {
    className: _.ContextMenuSeparator,
    role: "separator",
  });
}
var _ = (_) => {
    let _ = _();
    return (0, _.jsx)(_, {
      ..._,
      bInGamepadUI: _,
    });
  },
  _ = class extends _.PureComponent {
    static contextType = _;
    m_refItem = _.createRef();
    constructor(_) {
      super(_),
        (this.state = {
          bActive: !1,
        });
    }
    get instance() {
      return this.context.instance;
    }
    OnSubMenuMouseEnter() {
      this.instance.CancelHideSubMenuTimer();
    }
    OnSubMenuHidden() {
      this.setState({
        bActive: !1,
      }),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.m_refItem.current &&
          this.m_refItem.current.Focus();
    }
    ShowSubMenu(_) {
      let _ = _ || this.m_refItem.current.element,
        _ = this.instance.ShowSubMenu(_, this.RenderSubMenu);
      return _
        ? (this.setState({
            bActive: !0,
          }),
          _.SetOnHideCallback(this.OnSubMenuHidden),
          !0)
        : !1;
    }
    RenderSubMenu() {
      return (0, _.jsx)(_, {
        onMouseEnter: this.OnSubMenuMouseEnter,
        label: this.props.label,
        children: this.props.children,
      });
    }
    OnMouseEnter(_) {
      this.context.presentation == 0 && this.ShowSubMenu(_.currentTarget);
    }
    OnClick(_) {
      this.OnMouseEnter(_),
        this.props.onClick && this.props.onClick(_),
        this.props.bInGamepadUI &&
          this.context.presentation == 1 &&
          this.ShowSubMenu(_.currentTarget);
    }
    render() {
      let {
          label: _,
          selectedWithin: _,
          children: _,
          className: _,
          bInGamepadUI: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _;
      return (0, _.jsxs)(_, {
        ..._,
        ref: this.m_refItem,
        onClick: this.OnClick,
        selected: _ && !this.state.bActive,
        className: _(_, _.SubMenu, this.state.bActive && _.active),
        onMouseEnter: this.OnMouseEnter,
        bInteractableItem: !0,
        onMoveRight: () => this.ShowSubMenu(),
        children: [
          (0, _.jsx)("div", {
            className: _.Label,
            children: _,
          }),
          (0, _.jsx)("div", {
            className: _.Arrow,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      });
    }
  };
_([_], _.prototype, "OnSubMenuMouseEnter", 1),
  _([_], _.prototype, "OnSubMenuHidden", 1),
  _([_], _.prototype, "ShowSubMenu", 1),
  _([_], _.prototype, "RenderSubMenu", 1),
  _([_], _.prototype, "OnMouseEnter", 1),
  _([_], _.prototype, "OnClick", 1);
var _ = class extends _.Component {
  m_elMenu = void 0;
  m_cReenteranceGuard = 1;
  m_mutationObserver;
  constructor(_) {
    super(_),
      (this.state = {
        ready: !1,
        menuLeft: void 0,
        menuTop: void 0,
        menuRight: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      }),
      (this.m_mutationObserver = new MutationObserver(this.OnMenuMutation));
  }
  get parentWin() {
    return (
      this.props.element?.ownerDocument.defaultView || this.props.parentWin
    );
  }
  BindMenuElement(_) {
    this.props.instance.SetElement(_),
      this.m_elMenu &&
        (this.m_mutationObserver.disconnect(),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          this.m_elMenu.ownerDocument.defaultView?.removeEventListener(
            "resize",
            this.OnWindowResize,
          )),
      _ &&
        (this.m_mutationObserver.observe(_, {
          childList: !0,
          subtree: !0,
        }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          _.ownerDocument.defaultView?.addEventListener(
            "resize",
            this.OnWindowResize,
          )),
      (this.m_elMenu = _ || void 0),
      _.IN_CLIENT && this.props.popup && this.m_elMenu
        ? this.m_elMenu.ownerDocument.fonts.ready.then(() => {
            this.PositionMenu();
          })
        : this.PositionMenu(),
      this.state.ready ||
        (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
        this.setState(
          {
            ready: !0,
          },
          () => {
            this.props.options?.bSkipFocusWhenReady || this.TakeFocus();
          },
        ));
  }
  OnMenuMutation(_, _) {
    this.PositionMenu();
  }
  OnWindowResize() {
    this.PositionMenu();
  }
  OnBlur(_) {
    if (
      !(_.relatedTarget && _(_.currentTarget, _.relatedTarget)) &&
      !(
        _.relatedTarget &&
        this.props.instance.BIsElementInMenuHierarchy(_.relatedTarget)
      ) &&
      !this.props.instance.BIsSubMenuVisible() &&
      this.state.ready &&
      this.props.instance.visible
    ) {
      let _ = _() ? 150 : 0;
      this.props.instance.OnCancel(_);
    }
  }
  OnKeyDown(_) {
    _.keyCode == 27 &&
      this.state.ready &&
      (this.props.instance.Hide(), _.preventDefault(), _.stopPropagation());
  }
  componentDidUpdate() {
    this.m_cReenteranceGuard-- > 0
      ? this.PositionMenu()
      : (this.m_cReenteranceGuard = 2);
  }
  TakeFocus() {
    if (
      this.m_elMenu &&
      this.state.ready &&
      this.props.instance.visible &&
      (this.props.popup ||
        !_(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
    ) {
      let _ = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
      _ && _.focus ? _.focus() : this.m_elMenu.focus();
    }
  }
  PositionMenu(_ = !1) {
    let _ = this.props.options,
      _ = this.m_elMenu,
      _ = this.props.element;
    if (!_) return;
    let _ = this.props.popup != null,
      _ = this.parentWin;
    if (!_ || (_ && _.getComputedStyle(_).display === "none")) return;
    let _ = this.props.clientX,
      _ = this.props.clientY,
      _ = 0,
      _ = 0,
      _ = _.innerWidth,
      _ = _.innerHeight,
      _ = _?.getBoundingClientRect();
    if (_)
      if (
        (!_.bScreenCoordinates &&
          _ !== void 0 &&
          _ !== void 0 &&
          ((_ += _.screenLeft), (_ += _.screenTop)),
        _ && (_ = _(_, _)),
        _.targetMonitor)
      )
        (_ = _.targetMonitor.nScreenLeft),
          (_ = _.targetMonitor.nScreenTop),
          (_ = _.targetMonitor.nScreenWidth),
          (_ = _.targetMonitor.nScreenHeight);
      else {
        let _ = _.screen,
          _ = 0,
          _ = 0;
        _.availLeft && (_ = _.availLeft),
          _.availTop && (_ = _.availTop),
          (_ = _),
          (_ = _),
          (_ = _.availWidth),
          (_ = _.availHeight);
      }
    (_.bOverlapHorizontal || _.bOverlapVertical) && (_ = _ = void 0);
    let _ = _.getBoundingClientRect(),
      _ = {
        menuLeft: void 0,
        menuRight: void 0,
        menuTop: void 0,
        menuBottom: void 0,
        menuWidth: void 0,
        menuHeight: void 0,
        menuMinWidth: void 0,
      },
      _ = _ ?? _.left,
      _ = _ ?? _.right,
      _ = _.width;
    _.bMatchWidth && ((_ = _ - _), (_.menuWidth = _)),
      _.bGrowToElementWidth && (_.menuMinWidth = Math.max(_, _ - _));
    let _ = (_.bOverlapHorizontal ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapHorizontal ? _ : _) - _,
      _ = _ > 0,
      _ = _.bPreferPopLeft;
    _?.matches(":dir(rtl)") && (_ = !_);
    let _ = (_ || !_) && _;
    !_ &&
      !_ &&
      ((_ = _ > _),
      _.bFitToWindow && ((_ += (_ ? _ : _) - 8), (_.menuWidth = _))),
      _
        ? (_.menuRight = _ - (_.bOverlapHorizontal ? _ : _))
        : (_.menuLeft = _.bOverlapHorizontal ? _ : _);
    let _ = _ ?? _.top,
      _ = _ ?? _.bottom,
      _ = _.scrollHeight;
    _.bMatchHeight && ((_ = _ - _), (_.menuHeight = _));
    let _ = (_.bOverlapVertical ? _ : _) - _ - _,
      _ = _ > 0,
      _ = _ + _ - (_.bOverlapVertical ? _ : _) - _,
      _ = _ > 0,
      _ = (_.bPreferPopTop || !_) && _ && !_.bDisablePopTop;
    if (!_ && !_) {
      let _ =
        _.bShiftToFitWindow !== void 0
          ? _.bShiftToFitWindow
          : !!_.bFitToWindow && !_.bOverlapHorizontal;
      (_ = _ > _ && !_.bDisablePopTop),
        _ && (_ ? (_.menuTop = 4) : (_.menuBottom = 4)),
        _.bFitToWindow &&
          (_ ? (_ = Math.min(_, _ - 8)) : (_ += _ ? _ : _),
          (_.menuHeight = _ - 8));
    }
    _.menuBottom === void 0 &&
      _.menuTop === void 0 &&
      (_
        ? (_.menuBottom = _ - (_.bOverlapVertical ? _ : _))
        : (_.menuTop = _.bOverlapVertical ? _ : _)),
      _
        ? (_.menuHeight || (_.menuHeight = _.height),
          _.menuWidth || (_.menuWidth = _.width),
          _.menuBottom &&
            !_.menuTop &&
            ((_.menuTop = _ - _.menuBottom - _.menuHeight),
            (_.menuBottom = void 0)),
          _.menuRight &&
            !_.menuLeft &&
            ((_.menuLeft = _ - _.menuRight - _.menuWidth),
            (_.menuRight = void 0)))
        : _.getComputedStyle(_).position != "fixed" &&
          (_.menuLeft && (_.menuLeft += _.scrollX),
          _.menuTop && (_.menuTop += _.scrollY),
          _.menuBottom &&
            (_.menuBottom +=
              _.document.body.clientHeight - _.scrollY - _.innerHeight),
          _.menuRight &&
            (_.menuRight +=
              _.document.body.clientWidth - _.scrollX - _.innerWidth)),
      (_ ||
        _.menuLeft !== this.state.menuLeft ||
        _.menuRight !== this.state.menuRight ||
        _.menuTop !== this.state.menuTop ||
        _.menuBottom !== this.state.menuBottom ||
        _.menuWidth !== this.state.menuWidth ||
        _.menuHeight !== this.state.menuHeight) &&
        this.setState(_);
  }
  PositionPopupWindow() {
    if (
      !(
        this.state.menuLeft !== void 0 &&
        this.state.menuTop !== void 0 &&
        this.state.menuWidth !== void 0 &&
        this.state.menuHeight !== void 0
      )
    )
      return;
    let _ = this.props.popup?.window,
      _ = this.props.options;
    if (_.bScreenCoordinates) {
      let _ =
        _.targetMonitor?.flScaleToTargetMonitor ??
        this.parentWin?.devicePixelRatio;
      _?.SteamClient.Window.MoveTo(
        this.state.menuLeft,
        this.state.menuTop,
        _ ?? !0,
      ),
        _?.SteamClient.Window.ResizeTo(
          this.state.menuWidth,
          this.state.menuHeight,
          _ ?? !0,
        );
      return;
    }
    this.parentWin?.SteamClient.Window.GetWindowRestoreDetails().then((_) => {
      let _ = this.state.menuLeft - this.parentWin.screenX,
        _ = this.state.menuTop - this.parentWin.screenY;
      try {
        _?.SteamClient.Window.PositionWindowRelative(
          _,
          _,
          _,
          this.state.menuWidth,
          this.state.menuHeight,
        );
      } catch (_) {
        console.error(_);
      }
    });
  }
  render() {
    let _ = {
      visibility: this.state.ready ? "visible" : "hidden",
    };
    this.props.options.flElementZoom &&
      this.props.options.flElementZoom > 0 &&
      (_.zoom = this.props.options.flElementZoom),
      this.props.popup
        ? (this.PositionPopupWindow(),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = Math.floor(this.state.menuMinWidth)))
        : (this.state.menuTop !== void 0
            ? (_.top = this.state.menuTop)
            : this.state.menuBottom !== void 0 &&
              (_.bottom = this.state.menuBottom),
          this.state.menuLeft !== void 0
            ? (_.left = this.state.menuLeft)
            : this.state.menuRight !== void 0 &&
              (_.right = this.state.menuRight),
          this.state.menuHeight !== void 0 &&
            (_.height = this.state.menuHeight),
          this.state.menuWidth !== void 0 && (_.width = this.state.menuWidth),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = this.state.menuMinWidth));
    let _ = this.props.options.strClassName || _.contextMenu;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (_ += " visible"),
      this.props.instance.visible && this.state.ready && (_ += " ready"),
      (_ += " " + _.ContextMenuPosition),
      this.props.options.bStandalone && (_ += " " + _.Standalone),
      (0, _.jsx)("div", {
        className: _,
        ref: this.BindMenuElement,
        style: _,
        onBlur: this.OnBlur,
        onKeyDown: this.OnKeyDown,
        tabIndex: 0,
        children: this.props.children,
      })
    );
  }
};
_([_], _.prototype, "BindMenuElement", 1),
  _([_, _(100)], _.prototype, "OnMenuMutation", 1),
  _([_], _.prototype, "OnWindowResize", 1),
  _([_], _.prototype, "OnBlur", 1),
  _([_], _.prototype, "OnKeyDown", 1),
  (_ = _([_], _));
function _(_) {
  return (0, _.jsx)("div", {
    className: _.ContextMenuMouseOverlay,
  });
}
function _(_, _) {
  let _ = _.createEvent("HTMLEvents");
  _.initEvent("change", !0, !1), _.dispatchEvent(_);
}
function _(_) {
  let _ = [],
    _ = _(_),
    _ = _.getSelection(),
    _ = _ && _.rangeCount > 0 && _.toString().length > 0,
    _ = _.target,
    _ = !1,
    _ = _.clientY,
    _ = _.clientX;
  if (
    (_ &&
      "tagName" in _ &&
      (_.tagName == "INPUT" || _.tagName == "TEXTAREA") &&
      (_ = !0),
    _.IN_CLIENT && _ && _(_, "Browser.GetSpellingSuggestions"))
  ) {
    let [_, ..._] = _.SteamClient.Browser.GetSpellingSuggestions(),
      _ = _;
    _ &&
      _.forEach((_, _) => {
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _.setRangeText(_),
                  _(_, _.document),
                  _.setSelectionRange(_.selectionEnd, _.selectionEnd),
                  _.focus();
              },
              className: _.NoSeparation,
              children: _,
            },
            `spelling_${_}_${_}`,
          ),
        );
      }),
      _ &&
        _(_, "Browser.AddWordToDictionary") &&
        ((_ = _.trim()),
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => _.SteamClient.Browser.AddWordToDictionary(_),
              children: _(
                "#ContextMenu_AddToDictionary",
                _.length < 30 ? _ : _.substring(0, 30) + "...",
              ),
            },
            `addtodictionary_${_}`,
          ),
        ));
  }
  if (
    ((_.document.queryCommandEnabled("cut") || (_ && _)) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand("cut");
            },
            children: _("#ContextMenu_Cut"),
          },
          "cut",
        ),
      ),
    (_.document.queryCommandEnabled("copy") || _) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand("copy");
            },
            className: _.NoSeparation,
            children: _("#ContextMenu_Copy"),
          },
          "copy",
        ),
      ),
    _.IN_CLIENT &&
      _ &&
      _(_, "Browser.Paste") &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.Paste();
            },
            className: _.NoSeparation,
            children: _("#ContextMenu_Paste"),
          },
          "paste",
        ),
      ),
    _.IN_CLIENT && _.DEV_MODE)
  ) {
    let _ = [];
    _(_, "Browser.OpenDevTools") &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.OpenDevTools();
            },
            children: "Open Dev Tools",
          },
          "opendevtools",
        ),
      ),
      _(_, "Browser.InspectElement") &&
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _.focus(), _.SteamClient.Browser.InspectElement(_, _);
              },
              className: _.NoSeparation,
              children: "Inspect Element",
            },
            "inspectelement",
          ),
        ),
      _.length > 0 &&
        (_.push((0, _.jsx)(_, {}, "devtools-separator")), _.push(..._));
  }
  if (_.length)
    _(
      (0, _.jsx)(_, {
        children: _,
      }),
      _,
      {
        bRootContextMenu: !0,
      },
    );
  else {
    if (_.shiftKey) return;
    _.preventDefault(), _.stopPropagation();
  }
}
var _ = "EnableContextMenuBlurDelay3";
function _() {
  return (window.localStorage && window.localStorage.getItem(_)) === "true";
}
var _ = class _ {
  static s_nNextKeyValue = 1;
  m_nKey = null;
  m_ContextMenuManager;
  m_bVisible = !1;
  m_fnTakeFocus;
  m_element;
  m_rctElement;
  m_rctLabel = void 0;
  m_popupContextMenu;
  m_timerHideMenu = 0;
  m_options;
  m_position;
  m_submenu;
  m_parentInstance;
  m_elSubmenuItem = null;
  m_timerHideSubMenu = 0;
  m_fnOnHideCallback;
  constructor(_, _) {
    _(this), (this.m_ContextMenuManager = _), (this.m_rctElement = _);
  }
  get Manager() {
    return this.m_ContextMenuManager;
  }
  get key() {
    return (
      this.m_nKey == null &&
        ((this.m_nKey = _.s_nNextKeyValue), _.s_nNextKeyValue++),
      this.m_nKey
    );
  }
  SetElement(_) {
    this.m_element = _;
  }
  SetPopup(_) {
    this.m_popupContextMenu = _;
  }
  get ReactElement() {
    return this.m_rctElement;
  }
  get label() {
    return this.m_rctLabel;
  }
  get submenu() {
    return this.m_submenu;
  }
  get visible() {
    return this.m_bVisible;
  }
  get options() {
    return this.m_options;
  }
  get position() {
    return this.m_position;
  }
  SetOnHideCallback(_) {
    this.m_fnOnHideCallback = _;
  }
  Show() {
    this.CancelHideMenuTimer(),
      (this.m_bVisible = !0),
      this.m_ContextMenuManager.ShowMenu(this);
  }
  OnCancel(_ = 0) {
    this.options?.onCancel && this.options.onCancel(), this.Hide(_);
  }
  Hide(_ = 0) {
    _ > 0
      ? (this.m_timerHideMenu = window.setTimeout(() => {
          (this.m_timerHideMenu = 0), this.InternalHide();
        }, _))
      : this.InternalHide();
  }
  CancelHideMenuTimer() {
    this.m_timerHideMenu > 0 &&
      (clearTimeout(this.m_timerHideMenu), (this.m_timerHideMenu = 0));
  }
  SetPosition(_, _, _) {
    (this.m_options = {
      ...this.m_options,
      ..._,
    }),
      (this.m_position.clientX = _),
      (this.m_position.clientY = _),
      (this.m_position.options = this.m_options);
  }
  ForceHide() {
    this.InternalHide();
  }
  HideIfNotInFocus() {
    !this.BHasFocus() && !this.BIsFocusInChildHierarchy() && this.Hide();
  }
  InternalHide() {
    this.CancelHideMenuTimer(),
      this.m_bVisible &&
        ((this.m_bVisible = !1),
        this.InternalHideSubMenu(),
        this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
        this.m_ContextMenuManager.HideMenu(this));
  }
  SetTakeFocus(_) {
    this.m_fnTakeFocus = _;
  }
  ShowSubMenu(_, _) {
    return this.m_elSubmenuItem == _
      ? (this.CancelHideSubMenuTimer(), this.m_submenu?.TakeFocus(), null)
      : (this.InternalHideSubMenu(),
        (this.m_elSubmenuItem = _),
        (this.m_submenu = new _(this, _(), _, this.m_options.bForcePopup)),
        this.m_submenu.Show(),
        this.m_submenu);
  }
  CancelHideSubMenuTimer() {
    this.m_timerHideSubMenu > 0 &&
      (clearTimeout(this.m_timerHideSubMenu), (this.m_timerHideSubMenu = 0));
  }
  HideSubMenu() {
    if (!this.m_submenu) {
      this.CancelHideSubMenuTimer();
      return;
    }
    if (this.m_timerHideSubMenu > 0) return;
    let _ = 150;
    this.m_timerHideSubMenu = window.setTimeout(() => {
      this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
    }, _);
  }
  OnSubMenuDismissed(_) {
    this.m_submenu == _ && this.InternalHideSubMenu();
  }
  HideSelf() {
    this.m_parentInstance
      ? this.m_parentInstance.OnSubMenuDismissed(this)
      : this.InternalHide();
  }
  InternalHideSubMenu() {
    this.CancelHideSubMenuTimer(),
      this.m_submenu &&
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(1),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        (this.m_submenu = void 0));
  }
  TakeFocus(_ = 1) {
    this.m_popupContextMenu && this.m_popupContextMenu.Focus(_),
      this.m_fnTakeFocus && this.m_fnTakeFocus();
  }
  BInternalElementInParentHierarchy(_) {
    return (
      this.m_parentInstance != null &&
      (this.m_parentInstance.BIsChildElement(_) ||
        this.m_parentInstance.BInternalElementInParentHierarchy(_))
    );
  }
  BInternalElementInChildHierarchy(_) {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BIsChildElement(_) ||
        this.m_submenu.BInternalElementInChildHierarchy(_))
    );
  }
  BIsChildElement(_) {
    return this.m_element
      ? _(this.m_element, _)
      : _(this.m_popupContextMenu?.root_element, _);
  }
  BHasFocus() {
    return this.m_popupContextMenu
      ? this.m_popupContextMenu.focused
      : _(this.m_element, this.m_element?.ownerDocument.activeElement);
  }
  BIsFocusInChildHierarchy() {
    return (
      this.m_submenu != null &&
      (this.m_submenu.BHasFocus() || this.m_submenu.BIsFocusInChildHierarchy())
    );
  }
  BIsElementInMenuHierarchy(_) {
    return (
      this.BInternalElementInParentHierarchy(_) ||
      this.BInternalElementInChildHierarchy(_)
    );
  }
  BIsSubMenuVisible() {
    return !!this.m_submenu;
  }
  SetLabel(_) {
    this.m_rctLabel = _;
  }
};
_([_], _.prototype, "m_bVisible", 2), _([_.ref], _.prototype, "m_rctLabel", 2);
var _ = _,
  _ = class extends _ {
    constructor(_, _, _, _, _, _) {
      super(_, _),
        (this.m_options = _ || {}),
        (this.m_position = {
          element: _,
          clientX: _,
          clientY: _,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
        });
    }
    Show() {
      super.Show();
    }
    Hide(_ = 0) {
      super.Hide(_);
    }
    ForceHide() {
      super.ForceHide();
    }
    BIsSubMenu() {
      return !1;
    }
  },
  _ = class extends _ {
    constructor(_, _, _, _) {
      super(_.Manager, _),
        (this.m_parentInstance = _),
        (this.m_options = {
          bOverlapVertical: !0,
          strClassName: _.options.strClassName,
          bFitToWindow: _.options.bFitToWindow,
          bShiftToFitWindow: _.options.bShiftToFitWindow,
          bForcePopup: _,
        }),
        (this.m_position = {
          element: _,
          clientX: void 0,
          clientY: void 0,
          instance: this,
          options: this.m_options,
          fnOnMenuItemSelected: () => {
            this.Hide();
          },
          bSubmenu: !0,
        });
    }
    Hide() {
      this.m_popupContextMenu
        ? window.setTimeout(() => {
            this.m_parentInstance?.HideIfNotInFocus();
          }, 10)
        : this.m_parentInstance?.Hide();
    }
    ForceHide() {
      this.m_parentInstance?.ForceHide();
    }
    BIsSubMenu() {
      return !0;
    }
  };
var _ = class {
  m_callbacksMenusChanged = new _();
  m_ActiveMenu;
  m_rgActiveSubmenus = [];
  m_setHiddenMenus = new Set();
  constructor() {}
  CreateContextMenuInstance(_, _, _, _, _) {
    let _ = new _(this, _, _, _, _, _);
    return (
      _?.bCreateHidden &&
        (this.m_setHiddenMenus.add(_), this.m_callbacksMenusChanged.Dispatch()),
      _
    );
  }
  get OnMenusChanged() {
    return this.m_callbacksMenusChanged;
  }
  HideActiveMenu() {
    this.m_ActiveMenu?.options.bRetainOnHide
      ? this.m_setHiddenMenus.add(this.m_ActiveMenu)
      : this.m_rgActiveSubmenus.length && (this.m_rgActiveSubmenus = []),
      (this.m_ActiveMenu = void 0);
  }
  get ActiveMenu() {
    return this.m_ActiveMenu;
  }
  GetVisibleMenus() {
    return this.m_ActiveMenu
      ? [this.m_ActiveMenu, ...this.m_rgActiveSubmenus]
      : [];
  }
  GetHiddenMenus() {
    return Array.from(this.m_setHiddenMenus);
  }
  GetAllMenus() {
    let _;
    return (
      this.m_ActiveMenu
        ? (_ = [
            this.m_ActiveMenu,
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ])
        : (_ = [
            ...this.m_rgActiveSubmenus,
            ...Array.from(this.m_setHiddenMenus),
          ]),
      _.sort((_, _) => _.key - _.key)
    );
  }
  BShouldRenderMouseOverlay() {
    return this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay;
  }
  ShowMenu(_) {
    if (_.BIsSubMenu()) this.m_rgActiveSubmenus.push(_);
    else {
      if (_ == this.m_ActiveMenu) return;
      this.m_ActiveMenu &&
        (this.m_ActiveMenu.options.bRetainOnHide &&
          this.m_setHiddenMenus.add(this.m_ActiveMenu),
        this.m_ActiveMenu.Hide()),
        (this.m_ActiveMenu = _),
        this.m_setHiddenMenus.delete(_);
    }
    this.m_callbacksMenusChanged.Dispatch();
  }
  HideMenu(_) {
    _.BIsSubMenu()
      ? _(this.m_rgActiveSubmenus, _) && this.m_callbacksMenusChanged.Dispatch()
      : (_(_ == this.m_ActiveMenu, "Call to hide inactive menu"),
        _ == this.m_ActiveMenu &&
          (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
  }
  ReleaseHiddenMenu(_) {
    this.m_setHiddenMenus.delete(_);
  }
};
var _ = class {
    m_mapManagers = new WeakMap();
    GetContextMenuManagerFromWindow(_) {
      let _ = _?.ownerDocument?.defaultView || window;
      return this.GetContextMenuManager(_);
    }
    GetContextMenuManager(_) {
      let _ = this.m_mapManagers.get(_);
      if (!_) {
        let _ = _;
        for (; !_ && _.opener; )
          (_ = _.opener), (_ = this.m_mapManagers.get(_));
      }
      return _ || ((_ = new _()), this.m_mapManagers.set(_, _)), _;
    }
    SetMenuManager(_, _) {
      _(
        this.m_mapManagers.get(_) === void 0 || !_ || _ == window,
        `Stomping CContextMenuManager for ${_.document.title}!`,
      ),
        this.m_mapManagers.set(_, _);
    }
    RegisterChildWindow(_, _) {
      return (
        this.m_mapManagers.set(_, this.GetContextMenuManager(_)),
        () => this.m_mapManagers.delete(_)
      );
    }
  },
  _ = new _();
function _(_, _, _) {
  let _,
    _,
    _,
    _ = _;
  if (_?.preventDefault && _?.stopPropagation) {
    if (_.shiftKey || (_.altKey && !_?.bRootContextMenu)) return null;
    _.preventDefault(),
      _.stopPropagation(),
      (_ = _.currentTarget),
      (_ = _.clientX),
      (_ = _.clientY);
  } else _ = _;
  let _ = _.GetContextMenuManagerFromWindow(_).CreateContextMenuInstance(
    _,
    _,
    _,
    _,
    _,
  );
  return _.Show(), _?.bCreateHidden && _.Hide(), _;
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

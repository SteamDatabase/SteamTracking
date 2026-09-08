var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = (function (_) {
    return (
      (_[(_.LaunchGame = 0)] = `LaunchGame`),
      (_[(_.FriendMessage = 1)] = `FriendMessage`),
      (_[(_.ChatMention = 2)] = `ChatMention`),
      (_[(_.ChatMessage = 3)] = `ChatMessage`),
      (_[(_.ToastMessage = 4)] = `ToastMessage`),
      (_[(_.ToastAchievement = 5)] = `ToastAchievement`),
      (_[(_.ToastMisc = 6)] = `ToastMisc`),
      (_[(_.ToastMiscShort = 7)] = `ToastMiscShort`),
      (_[(_.FriendOnline = 8)] = `FriendOnline`),
      (_[(_.FriendInGame = 9)] = `FriendInGame`),
      (_[(_.VolSound = 10)] = `VolSound`),
      (_[(_.ShowModal = 11)] = `ShowModal`),
      (_[(_.HideModal = 12)] = `HideModal`),
      (_[(_.IntoGameDetail = 13)] = `IntoGameDetail`),
      (_[(_.OutOfGameDetail = 14)] = `OutOfGameDetail`),
      (_[(_.PagedNavigation = 15)] = `PagedNavigation`),
      (_[(_.ToggleOn = 16)] = `ToggleOn`),
      (_[(_.ToggleOff = 17)] = `ToggleOff`),
      (_[(_.SliderUp = 18)] = `SliderUp`),
      (_[(_.SliderDown = 19)] = `SliderDown`),
      (_[(_.ChangeTabs = 20)] = `ChangeTabs`),
      (_[(_.DefaultOk = 21)] = `DefaultOk`),
      (_[(_.OpenSideMenu = 22)] = `OpenSideMenu`),
      (_[(_.CloseSideMenu = 23)] = `CloseSideMenu`),
      (_[(_.BasicNav = 24)] = `BasicNav`),
      (_[(_.FailedNav = 25)] = `FailedNav`),
      (_[(_.Typing = 26)] = `Typing`),
      (_[(_.TimerExpired = 27)] = `TimerExpired`),
      (_[(_.Screenshot = 28)] = `Screenshot`),
      _
    );
  })({}),
  _ = new (class {
    m_fnCallbackOnPlaySound = new _();
    m_fnCallbackOnSuppressSound = new _();
    RegisterCallbackOnPlaySound(_) {
      return this.m_fnCallbackOnPlaySound.Register(_);
    }
    PlayNavSound(_, _) {
      this.m_fnCallbackOnPlaySound.Dispatch(_, _);
    }
    RegisterCallbackOnSuppressNavImminentSound(_) {
      return this.m_fnCallbackOnSuppressSound.Register(_);
    }
    SuppressImminentNavSound() {
      this.m_fnCallbackOnSuppressSound.Dispatch();
    }
  })(),
  _ = _(),
  _ = new _(`GamepadEvents`).Debug;
function _(_, _, _) {
  _ === void 0 &&
    (_ = [
      _.onButtonDown,
      _.onButtonUp,
      _.onOKButton,
      _.onCancelButton,
      _.onSecondaryButton,
      _.onOptionsButton,
      _.onMenuButton,
      _.onGamepadDirection,
      _.onGamepadFocus,
      _.onGamepadBlur,
    ]),
    _.useEffect(() => {
      let _ = _.current,
        _ = [];
      return (
        _ &&
          (_.onButtonDown && _.push(_(_, _.onButtonDown)),
          _.onButtonUp && _.push(_(_, _.onButtonUp)),
          _.onOKButton && _.push(_(_, _.onOKButton)),
          _.onCancelButton && _.push(_(_, _.onCancelButton)),
          _.onSecondaryButton && _.push(_(_, _.onSecondaryButton)),
          _.onOptionsButton && _.push(_(_, _.onOptionsButton)),
          _.onMenuButton && _.push(_(_, _.onMenuButton)),
          _.onGamepadDirection && _.push(_(_, _.onGamepadDirection)),
          _.onGamepadFocus && _.push(_(_, _.onGamepadFocus)),
          _.onGamepadBlur && _.push(_(_, _.onGamepadBlur))),
        () => _.forEach((_) => _())
      );
    }, _);
}
function _(_) {
  return _.stopPropagation(), !1;
}
function _(_, _, _) {
  let { onButtonDown: _, ..._ } = _,
    _ = _.useCallback(
      (_) => {
        _ && _(_),
          _(
            `Gamepad Event fired:`,
            _.detail.button,
            `, handled:`,
            _ != null,
            `, propagation stopped:`,
            _.cancelBubble,
          ),
          !_.cancelBubble && _.OnRootButtonDown(_);
      },
      [_, _],
    );
  _(_, _),
    _(
      {
        onButtonDown: _,
        onButtonUp: _,
        onOKButton: _,
        onCancelButton: _,
        onSecondaryButton: _,
        onOptionsButton: _,
        onMenuButton: _,
        onGamepadDirection: _,
        onGamepadFocus: _,
        onGamepadBlur: _,
      },
      _,
      [_],
    );
}
function _(_) {
  if (!_) return _.NONE;
  switch (_) {
    case `column`:
      return _.COLUMN;
    case `column-reverse`:
      return _.COLUMN_REVERSE;
    case `row`:
      return _.ROW;
    case `row-reverse`:
      return _.ROW_REVERSE;
    case `grid`:
      return _.GRID;
    case `geometric`:
      return _.GEOMETRIC;
    default:
      return _(_, `Unhandled flow-children: ${_}`), _.NONE;
  }
}
function _(_) {
  let {
    onEnterKeyPress: _,
    strEnterKeyLabel: _,
    onKeyboardNavOut: _,
    onKeyboardShow: _,
    onKeyboardFullyVisible: _,
    onTextEntered: _,
    BIsElementValidForInput: _,
    ..._
  } = _;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: _,
      strEnterKeyLabel: _,
      onKeyboardNavOut: _,
      onKeyboardShow: _,
      onKeyboardFullyVisible: _,
      onTextEntered: _,
      BIsElementValidForInput: _,
    },
    props: _,
  };
}
var _ = _.forwardRef(function (_, _) {
  let {
      navID: _,
      onActivated: _,
      onDeactivated: _,
      navTreeRef: _,
      enabled: _,
      modal: _,
      virtualFocus: _,
      historyMode: _,
      parentEmbeddedNavTree: _,
      onGlobalButtonDown: _,
      disableFocusClasses: _,
      disabledRoot: _,
      excludeFromScrollRegionSearch: _,
      "flow-children": _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_);
  return _()
    ? (0, _.jsx)(_, {
        navID: _,
        onActivated: _,
        onDeactivated: _,
        navTreeRef: _,
        enabled: _,
        modal: _,
        virtualFocus: _,
        historyMode: _,
        parentEmbeddedNavTree: _,
        onGlobalButtonDown: _,
        disableFocusClasses: _,
        disabledRoot: _,
        excludeFromScrollRegionSearch: _,
        "flow-children": _,
        ..._,
        ..._,
        children: (0, _.jsx)(`div`, {
          ..._,
          ref: _,
        }),
      })
    : (0, _.jsx)(`div`, {
        ..._,
        ref: _,
      });
});
function _(_) {
  let {
      navID: _,
      onActivated: _,
      onDeactivated: _,
      navTreeRef: _,
      enabled: _ = !0,
      modal: _ = !1,
      virtualFocus: _ = !1,
      historyMode: _,
      children: _,
      parentEmbeddedNavTree: _,
      onGlobalButtonDown: _,
      disableFocusClasses: _ = !1,
      disabledRoot: _ = !1,
      excludeFromScrollRegionSearch: _ = !1,
      "flow-children": _,
      ..._
    } = _,
    { elemProps: _, navOptions: _, gamepadEvents: _ } = _(_),
    { refDiv: _, tree: _ } = _({
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      enabled: _,
      onGlobalButtonDown: _,
      navTreeRef: _,
      virtualFocus: _,
      modal: _,
      historyMode: _,
      excludeFromScrollRegionSearch: _,
    });
  _(_.OnActivateCallbacks, _),
    _(_.OnDeactivateCallbacks, _),
    _(_, _, _),
    _.useLayoutEffect(() => {
      let _ = _(_);
      _.Root.SetProperties({
        ..._,
        layout: _,
      });
    });
  let _ = _(_, _.props.ref);
  return (0, _.jsx)(_, {
    tree: _ ? null : _,
    disableFocusClasses: _ || _,
    children: (0, _.jsx)(_.Provider, {
      value: _ ? null : _.Root,
      children: _.cloneElement(_, {
        _: _,
        "data-react-nav-root": _,
        ref: _,
      }),
    }),
  });
}
function _(_) {
  let {
      navID: _,
      parentEmbeddedNavTree: _,
      disabledRoot: _,
      excludeFromScrollRegionSearch: _,
      enabled: _,
      navTreeRef: _,
      onGlobalButtonDown: _,
      ..._
    } = _,
    _ = _(),
    _ = _() || _.GetDefaultContext(),
    _ = _.useContext(_),
    [_] = _.useState(() =>
      _.NewGamepadNavigationTree(_, _, _ ?? _?.Tree, {
        ..._,
        bIsEmbeddedInLegacyTree: !!_,
      }),
    ),
    _ = _.useRef(null);
  return (
    _.SetOnGlobalButtonDown(_),
    _.useEffect(() => _.RegisterNavigationItem(_.Root, _.current), [_, _]),
    _.useEffect(() => {
      _.SetIsEnabled(_);
    }, [_, _]),
    _.useEffect(() => {
      _.SetExcludeFromScrollRegionSearch(_);
    }, [_, _]),
    _.useEffect(() => {
      if (!_)
        return _.RegisterGamepadNavigationTree(
          _,
          _.current.ownerDocument.defaultView,
        );
    }, [_, _, _]),
    _.useEffect(() => (_(_, _), () => _(_, null)), [_, _]),
    {
      refDiv: _,
      tree: _,
    }
  );
}
var _ = _.createContext({
  bActiveTree: !1,
  bActiveTreeWithinContext: !1,
  bDisableFocusClasses: !1,
  bIsMounted: !1,
});
function _(_) {
  let { tree: _, disableFocusClasses: _ = !1, children: _ } = _,
    [_, _] = _.useState(_?.BIsActive() || !1),
    [_, _] = _.useState(_?.BIsActiveWithinContext() || !1),
    _ = _(_?.SubscribableIsMounted) ?? !1;
  _.useEffect(() => {
    if (!_) {
      _(!1), _(!1);
      return;
    }
    return (
      _(_.BIsActive()),
      _(_.BIsActiveWithinContext()),
      _.OnActiveStateChangedCallbacks.Register(() => {
        _(_.BIsActive()), _(_.BIsActiveWithinContext());
      }).Unregister
    );
  }, [_]);
  let _ = _.useMemo(
    () => ({
      bActiveTree: _,
      bActiveTreeWithinContext: _,
      bDisableFocusClasses: _,
      bIsMounted: _,
    }),
    [_, _, _, _],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _() {
  return _.useContext(_);
}
var _ = _.createContext(null),
  _ = _.createContext(_);
function _(_, _) {
  let _ = _.useRef(null);
  return (
    _ &&
      (!_.current || _.current.m_Parent != _) &&
      (_.current = _.Tree.CreateNode(_, _)),
    _.current
  );
}
function _(_) {
  let { navRef: _, ..._ } = _,
    _ = _.useRef(null),
    _ = (0, _.useContext)(_),
    _ = _(_, (0, _.useContext)(_));
  return (
    _.useLayoutEffect(() => {
      _ && _.SetProperties(_);
    }),
    _.useLayoutEffect(() => {
      if (!_) return;
      let _ = _.Tree.RegisterNavigationItem(_, _.current);
      return () => {
        _();
      };
    }, [_, _, _]),
    _.useLayoutEffect(() => {
      if (!(!_ || !_)) return _(_, _.CreateHandle()), () => _(_, null);
    }, [_, _]),
    {
      ref: _,
      node: _,
    }
  );
}
function _(_) {
  let _ = _.useRef(null),
    _ = _.useRef(null);
  return (
    _.useEffect(
      () => () => {
        _.current?.();
      },
      [],
    ),
    _.useCallback(
      (_) => {
        _.current !== _ &&
          ((_.current = _),
          _.current?.(),
          (_.current = null),
          _ &&
            (_.current = _(_, (_) =>
              !_ || _.GetFocusable() == `none`
                ? !1
                : _.BTakeFocus(void 0, _.detail.button),
            )));
      },
      [_],
    )
  );
}
function _(_) {
  let {
      onButtonDown: _,
      onButtonUp: _,
      onOKButton: _,
      onCancelButton: _,
      onSecondaryButton: _,
      onOptionsButton: _,
      onGamepadDirection: _,
      onGamepadFocus: _,
      onGamepadBlur: _,
      onMenuButton: _,
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
      ..._
    } = _,
    _ = {};
  return (
    _ !== void 0 && (_.onButtonDown = _),
    _ !== void 0 && (_.onButtonUp = _),
    _ !== void 0 && (_.onOKButton = _),
    _ !== void 0 && (_.onCancelButton = _),
    _ !== void 0 && (_.onSecondaryButton = _),
    _ !== void 0 && (_.onOptionsButton = _),
    _ !== void 0 && (_.onMenuButton = _),
    _ !== void 0 && (_.onGamepadDirection = _),
    _ !== void 0 && (_.onGamepadFocus = _),
    _ !== void 0 && (_.onGamepadBlur = _),
    {
      gamepadEvents: _,
      actionDescriptions: _({
        onOKActionDescription: _,
        onCancelActionDescription: _,
        onSecondaryActionDescription: _,
        onOptionsActionDescription: _,
        onMenuActionDescription: _,
        actionDescriptionMap: _,
      }),
      props: _,
    }
  );
}
function _(_) {
  let {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusRingSizeElementID: _,
      focusable: _,
      navRef: _,
      actionDescriptionMap: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      scrollRegionToStartOrEnd: _,
      ..._
    } = _,
    { gamepadEvents: _, actionDescriptions: _, props: _ } = _(_);
  return {
    elemProps: _,
    navOptions: {
      autoFocus: _,
      preferredFocus: _,
      disableNavSounds: _,
      fnCanTakeFocus: _,
      childFocusDisabled: _,
      focusableIfEmpty: _,
      onFocusWithin: _,
      navKey: _,
      noFocusRing: _,
      focusRingSizeElementID: _,
      focusable: _,
      navRef: _,
      onMoveUp: _,
      onMoveRight: _,
      onMoveDown: _,
      onMoveLeft: _,
      navEntryPreferPosition: _,
      scrollIntoViewWhenChildFocused: _,
      fnScrollIntoViewHandler: _,
      scrollIntoViewType: _,
      resetNavOnEntry: _,
      scrollRegionToStartOrEnd: _,
      actionDescriptionMap: {
        ..._,
        ..._,
      },
    },
    gamepadEvents: _,
  };
}
function _(_) {
  return function (_) {
    let {
        focusClassName: _,
        focusWithinClassName: _,
        bFocusableByDefault: _,
        className: _,
        divRef: _,
        node: _,
        tabIndex: _,
        children: _,
        ..._
      } = _,
      _ = _(),
      _ = _(_.SubscribableHasFocus) && _,
      _ = _(_.SubscribableFocusWithin) && _,
      {
        bActiveTree: _,
        bActiveTreeWithinContext: _,
        bDisableFocusClasses: _,
        bIsMounted: _,
      } = _(),
      _ = _ && !_,
      _ = _ && !_ && (_ !== void 0 || _);
    return _.createElement(
      _,
      {
        ..._,
        className: (0, _.default)(_, _ && _ && _, _ && _ && _),
        tabIndex: _ ? -1 : _,
        ref: _,
      },
      _,
    );
  };
}
var _ = _(`div`);
function _(_) {
  return (
    _.PlayNavSound(_.DefaultOk),
    _(_.currentTarget) && _.currentTarget.click(),
    !0
  );
}
var _ = _.createContext(void 0);
_.Provider;
function _(_, _, _, _, _) {
  let {
      elemProps: { focusClassName: _, children: _, "flow-children": _, ..._ },
      navOptions: _,
      gamepadEvents: _,
    } = _(_),
    {
      bFocusableByDefault: _ = !0,
      bActivateByDefault: _ = !1,
      bDOMElementFocusByDefault: _ = _,
    } = _ || {};
  _.focusable === void 0 && !_.disabled && _ && (_.focusable = !0);
  let { ref: _, node: _ } = _({
    layout: _(_),
    ..._,
  });
  _.onOKButton ||
    (((`onClick` in _ && _.onClick) || (_ && (_ === !0 || _(_)))) &&
      (_.onOKButton = _)),
    _.focusable && !_
      ? (_.tabIndex = _.tabIndex || 0)
      : !_.focusable && _ && (_.tabIndex = _.tabIndex ?? -1),
    _(_, _);
  let _ = _(_, _, _(_)),
    _ = (0, _.useContext)(_)?.Component,
    _ = {
      ..._,
    };
  return (
    `onClick` in _ && (_.role ??= `button`),
    _
      ? ((_ = {
          ..._,
          divRef: _,
          node: _,
          focusClassName: (0, _.default)(_, `gpfocus`),
          focusWithinClassName: `gpfocuswithin`,
          bFocusableByDefault: _,
          className: (0, _.default)(_.className, `Focusable`),
        }),
        (0, _.jsx)(_.Provider, {
          value: _,
          children: _
            ? _.createElement(
                _,
                {
                  ..._,
                  Component: _,
                },
                _,
              )
            : _.createElement(_, _, _),
        }))
      : _.createElement(
          _,
          {
            ..._,
            ref: _,
            className: (0, _.default)(_.className, `Focusable`),
          },
          _,
        )
  );
}
function _(_, _) {
  let _ = _(_);
  return _.forwardRef(function (_, _) {
    return _(_, _, _, _, _);
  });
}
function _(_) {
  let _ = _(_);
  return _.forwardRef(function (_, _) {
    let {
        virtualKeyboardProps: _,
        props: { refKeyboardHandle: _, ..._ },
      } = _(_),
      _ = _(_, _(_, _));
    return _(_, _, _, _);
  });
}
function _() {
  return _.createRef();
}
var _ = _(`div`, {
    bDOMElementFocusByDefault: !1,
  }),
  _ = _(`button`, {
    bActivateByDefault: (_) => _.type === `submit`,
  }),
  _ = _(`a`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _ = _.forwardRef(function (_, _) {
    let { href: _ = `#`, ..._ } = _;
    return (0, _.jsx)(_, {
      ref: _,
      href: _,
      ..._,
    });
  }),
  _ = _(`input`),
  _ = _(`textarea`);
_(`img`, {
  bDOMElementFocusByDefault: !1,
}),
  _(`label`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _(`section`, {
    bFocusableByDefault: !1,
  }),
  _(`form`, {
    bFocusableByDefault: !1,
  }),
  _(`summary`, {
    bActivateByDefault: !0,
  }),
  _(`details`, {
    bFocusableByDefault: !1,
  });
function _(_, _, _ = !1) {
  _.useEffect(() => {
    let _ = _.current;
    _ && (_ ? _.Activate(_) : _.Deactivate());
  }, [_, _, _]);
}
var _ = (0, _.createContext)({
    ownerWindow: window,
  }),
  _ = () => (0, _.useContext)(_);
function _(_) {
  let { ownerWindow: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        ownerWindow: _,
      }),
      [_],
    );
  return (0, _.createElement)(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_) {
  let { ownerWindow: _ } = _(),
    _ = typeof _.matchMedia == `function` ? _.matchMedia : _,
    _ = (0, _.useMemo)(() => _(_), [_, _]),
    [_, _] = (0, _.useState)(_ ? _.matches : !1);
  return (
    (0, _.useEffect)(() => {
      if (!_) return () => {};
      _(_.matches);
      function _(_) {
        _(_.matches);
      }
      return (
        _.addEventListener(`change`, _),
        () => _.removeEventListener(`change`, _)
      );
    }, [_]),
    _
  );
}
function _() {
  return null;
}
function _() {
  let _ = {},
    _ = _(_);
  if (_)
    try {
      let _ = JSON.parse(_);
      _ &&
        typeof _ == `object` &&
        (_(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportWidth = {
            value: _._._,
            source: _._._,
          }),
        _(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportHeight = {
            value: _._._,
            source: _._._,
          }));
    } catch (_) {
      console.error(`Failed to parse existing client hints cookie: "${_}"`);
    }
  return _;
}
function _(_) {
  let _ = {};
  _.viewportWidth &&
    (_._ = {
      _: _.viewportWidth.value,
      _: _.viewportWidth.source,
    }),
    _.viewportHeight &&
      (_._ = {
        _: _.viewportHeight.value,
        _: _.viewportHeight.source,
      }),
    Object.keys(_).length === 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_, _) {
  if (!_ || typeof _ != `object`) return !1;
  let _ = _;
  return typeof _._ != `number` || _._ === void 0
    ? !1
    : typeof _ == `string`
      ? typeof _._ === _
      : _(_._);
}
function _() {
  let _ = _();
  return (
    _.viewportWidth?.source === _.Fallback &&
      (_.viewportWidth.value = window.innerWidth),
    _.viewportHeight?.source === _.Fallback &&
      (_.viewportHeight.value = window.innerHeight),
    _
  );
}
var _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Header = 1)] = `Header`),
      (_[(_.Fallback = 2)] = `Fallback`),
      _
    );
  })({}),
  _ = (0, _.createContext)({});
function _(_) {
  let [_] = (0, _.useState)(_);
  return (
    (0, _.useEffect)(() => {
      let _ = [];
      if (_.viewportWidth?.source === 2 || _.viewportHeight?.source === 2) {
        let _ = () =>
          _({
            ..._,
            viewportWidth:
              _.viewportWidth?.source === 2
                ? {
                    value: window.innerWidth,
                    source: 2,
                  }
                : _.viewportWidth,
            viewportHeight:
              _.viewportHeight?.source === 2
                ? {
                    value: window.innerHeight,
                    source: 2,
                  }
                : _.viewportHeight,
          });
        document.addEventListener(`resize`, _),
          _.push(() => document.removeEventListener(`resize`, _));
      }
      return () => _.forEach((_) => _());
    }, [_]),
    (0, _.jsx)(_, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return (0, _.useContext)(_);
}
var _ = [`initial`, `sm`, `md`, `lg`],
  _ = (0, _.createContext)({
    _: 768,
    _: 940,
    _: 1240,
    _: `lg`,
  });
function _(_) {
  let { children: _, breakpoints: _ = {} } = _,
    _ = (0, _.useContext)(_),
    _ = {
      _: _._ ?? _._,
      _: _._ ?? _._,
      _: _._ ?? _._,
    },
    _ = _(_),
    { _: _, _: _, _: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        _: _,
        _: _,
        _: _,
        _: _,
      }),
      [_, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { formFactor: _, children: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useMemo)(
      () => ({
        ..._,
        _: _ ?? _._,
      }),
      [_, _],
    );
  return _
    ? (0, _.jsx)(_.Provider, {
        value: _,
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_) {
  let _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => _(!0), []);
  let _ = _();
  return _
    ? _
      ? `lg`
      : _
        ? `md`
        : _
          ? `sm`
          : `initial`
    : _.viewportWidth
      ? _.viewportWidth.value >= _._
        ? `lg`
        : _.viewportWidth.value >= _._
          ? `md`
          : _.viewportWidth.value >= _._
            ? `sm`
            : `initial`
      : `lg`;
}
function _() {
  return (0, _.useContext)(_)._;
}
_.reduce((_, _, _) => ((_[_] = _), _), {});
var _ = (0, _.createContext)({
  Button: `basic`,
  Checkbox: `basic`,
  Combobox: `basic`,
  LoadingSpinner: `basic`,
  SegmentedControl: `basic`,
  Select: `basic`,
  TextArea: `basic`,
  TextInput: `basic`,
});
function _(_) {
  let { variants: _ = {}, children: _ } = _,
    _ = (0, _.use)(_);
  return (0, _.jsx)(_, {
    value: {
      ..._,
      ..._,
    },
    children: _,
  });
}
function _(_) {
  return (0, _.use)(_)[_];
}
function _(_, _) {
  let _ = _(_);
  return !_ || _ === "default" ? _ : _;
}
export {
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
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};

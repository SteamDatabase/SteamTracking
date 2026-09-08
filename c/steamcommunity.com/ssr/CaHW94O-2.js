var _ = Object.seal({
  onMoveUp: _,
  onMoveDown: _,
});
Object.seal({
  onMoveRight: _,
  onMoveLeft: _,
});
function _(_, _) {
  if (_.is_repeat) return !1;
  let _ = _.GetRelativeDirection(_.button);
  return _ == _.FORWARD
    ? _.BFocusFirstChild(_.GAMEPAD)
    : _ == _.BACKWARD && _.BFocusLastChild(_.GAMEPAD);
}
var _ = _({
    Arrow: () => _,
    BackgroundAnimation: () => _,
    ContextMenuHRSeparator: () => _,
    ContextMenuMouseOverlay: () => _,
    ContextMenuPopup: () => _,
    ContextMenuPosition: () => _,
    ContextMenuSeparator: () => _,
    ForceDesktop: () => _,
    IconContainer: () => _,
    "ItemFocusAnim-darkGrey": () => _,
    "ItemFocusAnim-darkGreySettings": () => _,
    "ItemFocusAnim-darkerGrey": () => _,
    "ItemFocusAnim-darkerGrey-nocolor": () => _,
    "ItemFocusAnim-green": () => _,
    "ItemFocusAnim-grey": () => _,
    "ItemFocusAnim-translucent-white-10": () => _,
    "ItemFocusAnim-translucent-white-20": () => _,
    "ItemFocusAnimBorder-darkGrey": () => _,
    Label: () => _,
    MenuSectionHeader: () => _,
    NoSeparation: () => _,
    PopoutSubMenu: () => _,
    PopoutSubMenuItems: () => _,
    SubMenu: () => _,
    UpperCase: () => _,
    active: () => _,
    contextMenu: () => _,
    contextMenuContents: () => _,
    contextMenuItem: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    focusAnimation: () => _,
    hoverAnimation: () => _,
  }),
  _ = `800ms`,
  _ = `Sh0nMmOtiGE-`,
  _ = `_0vrlGZS6wmI-`,
  _ = `l39SV-qhMqE-`,
  _ = `PT57ChBwUTo-`,
  _ = `MFfvw00hboM-`,
  _ = `_3YQBiPw99ow-`,
  _ = `bXBe68p03Eg-`,
  _ = `iztQl-5VVEc-`,
  _ = `SNXKQ17UnZs-`,
  _ = `eoswxWmsBhM-`,
  _ = `PwRu0DuFKDA-`,
  _ = `xq09rw7LEzQ-`,
  _ = `_8JIa-ve-pTo-`,
  _ = `hPtVXzKMNSo-`,
  _ = `szfM-Lwvr-I-`,
  _ = `mUg-VUDlsZc-`,
  _ = `Bt-bKSbPJI0-`,
  _ = `l8nElul3pe4-`,
  _ = `M-WJlJuVASk-`,
  _ = `VPqs-CHGadE-`,
  _ = `JYbktHJALW8-`,
  _ = `X-PKt5HEp44-`,
  _ = `Yd9K9B7coH8-`,
  _ = `fQrYNIb71v0-`,
  _ = `_5VQ8GXnqx4E-`,
  _ = `OTI-14yoz6s-`,
  _ = `_5bB4d-7G3Zs-`,
  _ = `emwM5eYFAj4-`,
  _ = `nUW2-A-V3rw-`,
  _ = `_91xOK1nRcXE-`,
  _ = `BIzQwc9BvEQ-`,
  _ = {
    "duration-app-launch": `800ms`,
    ContextMenuMouseOverlay: _,
    ContextMenuPosition: _,
    contextMenu: _,
    ContextMenuPopup: _,
    contextMenuContents: _,
    contextMenuItem: _,
    active: _,
    MenuSectionHeader: _,
    ContextMenuSeparator: _,
    NoSeparation: _,
    UpperCase: _,
    SubMenu: _,
    Label: _,
    Arrow: _,
    IconContainer: _,
    ContextMenuHRSeparator: _,
    ForceDesktop: _,
    PopoutSubMenu: _,
    PopoutSubMenuItems: _,
    BackgroundAnimation: _,
    "ItemFocusAnim-darkerGrey-nocolor": `JYbktHJALW8-`,
    "ItemFocusAnim-darkerGrey": `X-PKt5HEp44-`,
    "ItemFocusAnim-darkGreySettings": `Yd9K9B7coH8-`,
    "ItemFocusAnim-darkGrey": `fQrYNIb71v0-`,
    "ItemFocusAnim-grey": `_5VQ8GXnqx4E-`,
    "ItemFocusAnim-translucent-white-10": `OTI-14yoz6s-`,
    "ItemFocusAnim-translucent-white-20": `_5bB4d-7G3Zs-`,
    "ItemFocusAnimBorder-darkGrey": `emwM5eYFAj4-`,
    "ItemFocusAnim-green": `nUW2-A-V3rw-`,
    focusAnimation: _,
    hoverAnimation: _,
  },
  _ = _(_()),
  _ = _(),
  _ = _.forwardRef((_, _) => {
    let { className: _, contextMenuStyles: _, disabled: _, ..._ } = _;
    return (0, _.jsx)(`div`, {
      ..._,
      ref: _,
      className: _(
        _,
        (_ || _).contextMenuItem,
        `contextMenuItem`,
        _ && `disabled`,
      ),
    });
  });
_.displayName = `MenuItem`;
function _(_, _ = !0) {
  return function (_, _, _) {
    let _ = _.value;
    _.value = function (..._) {
      let _ = this[_ + `_DebounceProperties`];
      _ === void 0 &&
        (_ = this[_ + `_DebounceProperties`] =
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
var _ = _.createContext(null),
  _ = class extends _.Component {
    static contextType = _;
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
          role: _ = `menu`,
          labelId: _,
          style: _ = {},
          refScrollable: _,
          ..._
        } = this.props,
        _ = this.context.styles ?? _,
        _ = _ ?? `#Button_Cancel`;
      if (this.context.presentation == 1 && !_) {
        let _ = () => {
          _ && _(), this.instance.Hide();
        };
        return (
          (_.overflowY = this.instance.BIsSubMenuVisible() ? `hidden` : void 0),
          (0, _.jsxs)(_, {
            ..._,
            className: _(
              _.contextMenuContents,
              {
                [_.hasSubMenu]: this.instance.BIsSubMenuVisible(),
              },
              _,
            ),
            "flow-children": `column`,
            onMoveLeft: this.HideIfSubmenu,
            onCancel: this.instance.BIsSubMenu() ? this.HideMenu : _,
            style: _,
            navEntryPreferPosition: _.PREFERRED_CHILD,
            navRef: this.m_navRef,
            ref: _,
            role: _,
            "aria-labelledby": _ ? _ : void 0,
            ..._,
            children: [
              _,
              _ &&
                (0, _.jsx)(`div`, {
                  _: _,
                  style: {
                    display: `none`,
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
                (0, _.jsx)(`div`, {
                  className: _.contextMenuFade,
                  onClick: () => this.instance.HideSubMenu(),
                }),
            ],
          })
        );
      } else
        return (0, _.jsx)(`div`, {
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
_([_], _.prototype, `HideIfSubmenu`, null),
  _([_], _.prototype, `HideMenu`, null),
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
            `contextMenuItem`,
            this.props.disabled && `disabled`,
            this.props.selected && _.Selected,
            this.props.tone == `positive` && _.Positive,
            this.props.tone == `emphasis` && _.Emphasis,
            this.props.tone == `destructive` && _.Destructive,
          ),
          focusClassName: _.Focused,
          onClick: this.props.disabled ? void 0 : this.OnClick,
          focusable: !this.props.disabled,
          onOKButton: this.OnOKButton,
          onMoveRight: _,
          unselectable: this.props.unselectable,
          role: _.role ?? `menuitem`,
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
          role: _.role ?? `menuitem`,
          "aria-selected": this.props.selected,
          children: this.props.children,
        });
  }
};
_([_], _.prototype, `OnClick`, null),
  _([_], _.prototype, `OnOKButton`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `Focus`, null),
  _.PureComponent,
  _.PureComponent;
function _(_) {
  return (0, _.jsx)(`div`, {
    className: (_.useContext(_).styles ?? _).ContextMenuSeparator,
    role: `separator`,
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
          (0, _.jsx)(`div`, {
            className: _.Label,
            children: _,
          }),
          (0, _.jsx)(`div`, {
            className: _.Arrow,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      });
    }
  };
_([_], _.prototype, `OnSubMenuMouseEnter`, null),
  _([_], _.prototype, `OnSubMenuHidden`, null),
  _([_], _.prototype, `ShowSubMenu`, null),
  _([_], _.prototype, `RenderSubMenu`, null),
  _([_], _.prototype, `OnMouseEnter`, null),
  _([_], _.prototype, `OnClick`, null);
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
            `resize`,
            this.OnWindowResize,
          )),
      _ &&
        (this.m_mutationObserver.observe(_, {
          childList: !0,
          subtree: !0,
        }),
        (!this.props.popup || this.props.options.bScreenCoordinates) &&
          _.ownerDocument.defaultView?.addEventListener(
            `resize`,
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
      let _ = this.m_elMenu.querySelector(`.ContextMenuAutoFocus`);
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
    if (!_ || (_ && _.getComputedStyle(_).display === `none`)) return;
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
        (_ &&= _(_, _)),
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
    _?.matches(`:dir(rtl)`) && (_ = !_);
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
        _.bShiftToFitWindow === void 0
          ? !!_.bFitToWindow && !_.bOverlapHorizontal
          : _.bShiftToFitWindow;
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
        ? ((_.menuHeight ||= _.height),
          (_.menuWidth ||= _.width),
          _.menuBottom &&
            !_.menuTop &&
            ((_.menuTop = _ - _.menuBottom - _.menuHeight),
            (_.menuBottom = void 0)),
          _.menuRight &&
            !_.menuLeft &&
            ((_.menuLeft = _ - _.menuRight - _.menuWidth),
            (_.menuRight = void 0)))
        : _.getComputedStyle(_).position != `fixed` &&
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
      visibility: this.state.ready ? `visible` : `hidden`,
    };
    this.props.options.flElementZoom &&
      this.props.options.flElementZoom > 0 &&
      (_.zoom = this.props.options.flElementZoom),
      this.props.popup
        ? (this.PositionPopupWindow(),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = Math.floor(this.state.menuMinWidth)))
        : (this.state.menuTop === void 0
            ? this.state.menuBottom !== void 0 &&
              (_.bottom = this.state.menuBottom)
            : (_.top = this.state.menuTop),
          this.state.menuLeft === void 0
            ? this.state.menuRight !== void 0 &&
              (_.right = this.state.menuRight)
            : (_.left = this.state.menuLeft),
          this.state.menuHeight !== void 0 &&
            (_.height = this.state.menuHeight),
          this.state.menuWidth !== void 0 && (_.width = this.state.menuWidth),
          this.state.menuMinWidth !== void 0 &&
            (_.minWidth = this.state.menuMinWidth));
    let _ = this.props.options.strClassName || `l39SV-qhMqE-`;
    return (
      (this.props.options.bCreateHidden ||
        (this.props.instance.visible && this.state.ready)) &&
        (_ += ` visible`),
      this.props.instance.visible && this.state.ready && (_ += ` ready`),
      (_ += ` ` + _),
      this.props.options.bStandalone && (_ += ` undefined`),
      (0, _.jsx)(`div`, {
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
_([_], _.prototype, `BindMenuElement`, null),
  _([_, _(100)], _.prototype, `OnMenuMutation`, null),
  _([_], _.prototype, `OnWindowResize`, null),
  _([_], _.prototype, `OnBlur`, null),
  _([_], _.prototype, `OnKeyDown`, null),
  (_ = _([_], _));
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
  });
}
function _(_, _) {
  let _ = _.createEvent(`HTMLEvents`);
  _.initEvent(`change`, !0, !1), _.dispatchEvent(_);
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
      `tagName` in _ &&
      (_.tagName == `INPUT` || _.tagName == `TEXTAREA`) &&
      (_ = !0),
    _.IN_CLIENT && _ && _(_, `Browser.GetSpellingSuggestions`))
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
              className: _,
              children: _,
            },
            `spelling_${_}_${_}`,
          ),
        );
      }),
      _ &&
        _(_, `Browser.AddWordToDictionary`) &&
        ((_ = _.trim()),
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => _.SteamClient.Browser.AddWordToDictionary(_),
              children: _(
                `#ContextMenu_AddToDictionary`,
                _.length < 30 ? _ : _.substring(0, 30) + `...`,
              ),
            },
            `addtodictionary_${_}`,
          ),
        ));
  }
  if (
    ((_.document.queryCommandEnabled(`cut`) || (_ && _)) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand(`cut`);
            },
            children: _(`#ContextMenu_Cut`),
          },
          `cut`,
        ),
      ),
    (_.document.queryCommandEnabled(`copy`) || _) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.document.execCommand(`copy`);
            },
            className: _,
            children: _(`#ContextMenu_Copy`),
          },
          `copy`,
        ),
      ),
    _.IN_CLIENT &&
      _ &&
      _(_, `Browser.Paste`) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.Paste();
            },
            className: _,
            children: _(`#ContextMenu_Paste`),
          },
          `paste`,
        ),
      ),
    _.IN_CLIENT && _.DEV_MODE)
  ) {
    let _ = [];
    _(_, `Browser.OpenDevTools`) &&
      _.push(
        (0, _.jsx)(
          _,
          {
            onSelected: () => {
              _.focus(), _.SteamClient.Browser.OpenDevTools();
            },
            children: `Open Dev Tools`,
          },
          `opendevtools`,
        ),
      ),
      _(_, `Browser.InspectElement`) &&
        _.push(
          (0, _.jsx)(
            _,
            {
              onSelected: () => {
                _.focus(), _.SteamClient.Browser.InspectElement(_, _);
              },
              className: _,
              children: `Inspect Element`,
            },
            `inspectelement`,
          ),
        ),
      _.length > 0 &&
        (_.push((0, _.jsx)(_, {}, `devtools-separator`)), _.push(..._));
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
var _ = `EnableContextMenuBlurDelay3`;
function _() {
  return (window.localStorage && window.localStorage.getItem(_)) === `true`;
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
      this.m_nKey ?? ((this.m_nKey = _.s_nNextKeyValue), _.s_nNextKeyValue++),
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
    this.m_timerHideSubMenu > 0 ||
      (this.m_timerHideSubMenu = window.setTimeout(() => {
        this.InternalHideSubMenu(), (this.m_timerHideSubMenu = 0);
      }, 150));
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
      (this.m_submenu &&=
        (this.m_submenu.m_element &&
          this.BIsFocusInChildHierarchy() &&
          this.TakeFocus(_.k_EWindowBringToFrontAndForceOS),
        (this.m_elSubmenuItem = null),
        this.m_submenu.InternalHide(),
        void 0));
  }
  TakeFocus(_ = _.k_EWindowBringToFrontAndForceOS) {
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
_([_], _.prototype, `m_bVisible`, void 0),
  _([_.ref], _.prototype, `m_rctLabel`, void 0);
var _ = class extends _ {
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
  },
  _ = class {
    m_callbacksMenusChanged = new _();
    m_ActiveMenu;
    m_rgActiveSubmenus = [];
    m_setHiddenMenus = new Set();
    constructor() {}
    CreateContextMenuInstance(_, _, _, _, _) {
      let _ = new _(this, _, _, _, _, _);
      return (
        _?.bCreateHidden &&
          (this.m_setHiddenMenus.add(_),
          this.m_callbacksMenusChanged.Dispatch()),
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
        (_ = this.m_ActiveMenu
          ? [
              this.m_ActiveMenu,
              ...this.m_rgActiveSubmenus,
              ...Array.from(this.m_setHiddenMenus),
            ]
          : [...this.m_rgActiveSubmenus, ...Array.from(this.m_setHiddenMenus)]),
        _.sort((_, _) => _.key - _.key)
      );
    }
    BShouldRenderMouseOverlay() {
      return (
        this.m_ActiveMenu && !this.m_ActiveMenu.options.bDisableMouseOverlay
      );
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
        ? _(this.m_rgActiveSubmenus, _) &&
          this.m_callbacksMenusChanged.Dispatch()
        : (_(_ == this.m_ActiveMenu, `Call to hide inactive menu`),
          _ == this.m_ActiveMenu &&
            (this.HideActiveMenu(), this.m_callbacksMenusChanged.Dispatch()));
    }
    ReleaseHiddenMenu(_) {
      this.m_setHiddenMenus.delete(_);
    }
  },
  _ = new (class {
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
  })();
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
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };

function _(_) {
  return () => (
    (_ = (_ * 1664525 + 1013904223) % 4294967296), (_ >>> 0) / 4294967296
  );
}
function _() {
  return Math.floor(Math.random() * 4294967296);
}
var _ = _(_(), 1),
  _ = _(),
  _ = _(_(), 1),
  _ = new _(`FocusNavigation`).Debug,
  _ = new _(`GamepadEvents`).Debug,
  _ = class {
    m_Controller;
    m_context;
    m_window;
    m_ParentNavTree;
    m_rgChildNavTrees = [];
    m_ID;
    m_valueIsMounted = _(!1);
    m_bIsEnabled = !1;
    m_tsLastActivated;
    m_Root;
    m_onActivateCallbacks = new _();
    m_onDeactivateCallbacks = new _();
    m_onActiveFocusStateChangedCallbacks = new _();
    m_onChildTreesChanged = new _();
    m_Properties;
    m_bExcludeFromScrollRegionSearch = !1;
    m_onGlobalButtonDown;
    m_rgOnUnhandledButton = [];
    m_rgGlobalButtonHandlers = [];
    constructor(_, _, _, _, _) {
      (this.m_Controller = _),
        (this.m_context = _),
        (this.m_ID = _),
        (this.m_ParentNavTree = _),
        (this.m_Root = new _(this, null, null)),
        this.m_Root.SetProperties({
          layout: _.COLUMN,
        }),
        (this.m_Properties = _);
    }
    get id() {
      return this.m_ID;
    }
    get Parent() {
      return this.m_ParentNavTree;
    }
    get ChildTrees() {
      return this.m_rgChildNavTrees;
    }
    get Root() {
      return this.m_Root;
    }
    get Controller() {
      return this.m_Controller;
    }
    get WindowContext() {
      return this.m_context;
    }
    get Window() {
      return this.m_window;
    }
    BUseVirtualFocus() {
      return this.m_Properties.virtualFocus ?? !1;
    }
    BIsModal() {
      return this.m_Properties.modal ?? !1;
    }
    FindModalDescendant() {
      for (let _ of this.m_rgChildNavTrees) {
        if (_.BIsModal() && _.BIsEnabled()) return _;
        let _ = _.FindModalDescendant();
        if (_) return _;
      }
    }
    BIsContextActive() {
      return this.m_Controller.BIsInActiveContext(this);
    }
    CreateNode(_, _) {
      return new _(this, _, _);
    }
    RegisterNavigationItem(_, _) {
      return _.OnMount(_), () => _.OnUnmount();
    }
    OnChildActivated(_) {
      this.m_valueIsMounted.Value &&
        this.m_Controller.OnGamepadNavigationTreeFocused(this, _);
    }
    m_lastFocusNode;
    m_bWasActiveForLastFocusChange;
    m_lastFocusNodeXMovement = new _();
    m_lastFocusNodeYMovement = new _();
    GetLastFocusedNode() {
      return this.m_lastFocusNode;
    }
    GetLastFocusedMovementRect(_) {
      if (_ == `x`) return this.m_lastFocusNodeXMovement.GetRect();
      if (_ == `y`) return this.m_lastFocusNodeYMovement.GetRect();
    }
    get OnActivateCallbacks() {
      return this.m_onActivateCallbacks;
    }
    get OnDeactivateCallbacks() {
      return this.m_onDeactivateCallbacks;
    }
    get OnChildTreesChangedCallbacks() {
      return this.m_onChildTreesChanged;
    }
    get OnActiveStateChangedCallbacks() {
      return this.m_onActiveFocusStateChangedCallbacks;
    }
    OnActivate(_) {
      (this.m_tsLastActivated = performance.now()),
        this.m_onActivateCallbacks.Dispatch(this, _),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
      for (let _ = this.m_lastFocusNode; _; _ = _.Parent) _.SetFocusWithin(!0);
    }
    OnDeactivate(_) {
      this.m_onDeactivateCallbacks.Dispatch(this, _),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
        (this.m_bWasActiveForLastFocusChange = !1);
      for (let _ = this.m_lastFocusNode; _; _ = _.Parent) _.SetFocusWithin(!1);
    }
    OnContextActiveStateChanged(_) {
      this.m_onActiveFocusStateChangedCallbacks.Dispatch(_, this);
    }
    IsActiveFocusNavTree() {
      return this.m_Controller.IsActiveFocusNavTree(this);
    }
    TakeFocus(_, _ = !1) {
      let _ = !1;
      _
        ? (_ = this.Root.BVisibleChildTakeFocus(_))
        : this.m_lastFocusNode && (_ = this.m_lastFocusNode.BTakeFocus(_)),
        (_ ||= this.Root.BTakeFocus(_)),
        _ || this.TransferFocus(_, this.Root);
    }
    Activate(_ = !1) {
      this.m_Controller.OnGamepadNavigationTreeActivated(
        this.FindModalDescendant() ?? this,
        _,
      );
    }
    Deactivate() {
      this.m_Controller.BlurNavTree(this);
    }
    BIsEnabled() {
      return this.m_bIsEnabled;
    }
    get SubscribableIsMounted() {
      return this.m_valueIsMounted;
    }
    BIsActive() {
      return (
        this.m_valueIsMounted.Value &&
        (this.m_Controller.IsActiveNavTree(this) ||
          this.m_Controller.IsActiveFocusNavTree(this))
      );
    }
    BIsActiveFocus() {
      return (
        this.m_valueIsMounted.Value &&
        this.m_Controller.IsActiveFocusNavTree(this)
      );
    }
    BIsActiveWithinContext() {
      return (
        this.m_valueIsMounted.Value &&
        (this.m_context.m_LastActiveNavTree == this ||
          this.m_context.m_LastActiveFocusNavTree == this)
      );
    }
    GetTimeLastActivated() {
      return this.m_tsLastActivated;
    }
    MountNavTree(_) {
      this.m_window = _;
      let _ = this.m_Root.Element;
      (_.__nav_tree = this), _.__nav_wrapper && _.__nav_wrapper.BindTree(this);
      let _ = new _();
      return (
        this.m_valueIsMounted.Set(!0),
        _.Push(() => this.m_valueIsMounted.Set(!1)),
        this.m_ParentNavTree &&
          _.Push(this.m_ParentNavTree.AddChildNavTree(this)),
        this.m_Properties.historyMode == `navigationapi` && _.Push(_(this)),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(
          this.BIsActive(),
          this,
        ),
        _.GetUnregisterFunc()
      );
    }
    SetIsEnabled(_) {
      this.m_bIsEnabled != _ &&
        ((this.m_bIsEnabled = _),
        this.m_bIsEnabled || (this.m_tsLastActivated = void 0));
    }
    GetExcludeFromScrollRegionSearch() {
      return this.m_bExcludeFromScrollRegionSearch;
    }
    SetExcludeFromScrollRegionSearch(_) {
      this.m_bExcludeFromScrollRegionSearch = _;
    }
    GetParentEmbeddedNavTree() {
      return this.m_Properties.bIsEmbeddedInLegacyTree
        ? this.m_ParentNavTree
        : void 0;
    }
    RegisterOnUnhandledButtonCallback(_) {
      return (
        this.m_rgOnUnhandledButton.push(_),
        () => {
          _(this.m_rgOnUnhandledButton, _);
        }
      );
    }
    RegisterGlobalButtonHandler(_, _, _) {
      let _ = {
        button: _,
        fnCallback: _,
        description: _,
      };
      return (
        this.m_rgGlobalButtonHandlers.push(_),
        this.UpdateRootActionDescriptionMap(),
        () => {
          _(this.m_rgGlobalButtonHandlers, _),
            this.UpdateRootActionDescriptionMap();
        }
      );
    }
    UpdateRootActionDescriptionMap() {
      let _ = {};
      for (let { button: _, description: _ } of this.m_rgGlobalButtonHandlers)
        _ && (_[_] = _);
      this.m_Root.SetProperties({
        ...this.m_Root.m_Properties,
        actionDescriptionMap: _,
      });
    }
    SetOnGlobalButtonDown(_) {
      this.m_onGlobalButtonDown = _;
    }
    OnRootButtonDown(_) {
      for (let _ = this; _; _ = _.Parent)
        if (
          (_.m_onGlobalButtonDown && _.m_onGlobalButtonDown(_), _.cancelBubble)
        )
          return !1;
      return this.HandleButtonDownEventAsLogicalEvent(_);
    }
    TryRootButtonListeners(_) {
      for (let { button: _, fnCallback: _ } of this.m_rgGlobalButtonHandlers)
        if (_ == _.detail.button && _(_) !== !1) return !1;
      for (let _ of this.m_rgOnUnhandledButton) if (_(_) !== !1) return !1;
      return !0;
    }
    HandleButtonDownEventAsLogicalEvent(_) {
      let { bUnhandled: _, bHadLogicalEventMapping: _ } = _(_);
      return (
        _(
          `Logical gamepad Event fired: ${_[_.detail.button]}, had logical event: ${_}, was handled: ${!_}`,
        ),
        (_ &&= this.TryRootButtonListeners(_)),
        (_ &&= this.m_Controller.FireUnhandledGamepadEventCallbacks(_)),
        _.stopPropagation(),
        _
      );
    }
    m_DeferredFocus = new _(this);
    get DeferredFocus() {
      return this.m_DeferredFocus;
    }
    AddChildNavTree(_) {
      return (
        this.m_rgChildNavTrees.push(_),
        this.OnChildTreesChangedCallbacks.Dispatch(`add`, _),
        () => {
          _(this.m_rgChildNavTrees, _),
            this.OnChildTreesChangedCallbacks.Dispatch(`remove`, _);
        }
      );
    }
    TransferFocus(_, _, _, _) {
      (_ ??= _.INVALID),
        (_ ??= !1),
        this.m_Controller.BatchedUpdate(() =>
          this.TransferFocusInternal(_, _, _, _),
        );
    }
    TransferFocusInternal(_, _, _, _) {
      let _ = _(_),
        _ = this.m_lastFocusNode;
      if (_ == _ && (this.m_bWasActiveForLastFocusChange || !this.BIsActive()))
        return;
      _(
        `Transfer focus in ${this._}, source: ${_ && _[_]}, from/to:`,
        _?.m_element,
        _?.m_element,
      );
      let _ = {
          blurredNode: _,
          focusedNode: _,
          focusSource: _,
        },
        _ = _(_, _);
      if (_) {
        _.SetHasFocus(!1);
        for (let _ = _; _ && _ != _; _ = _.Parent) _.SetFocusWithin(!1);
      }
      if (_) {
        _.SetHasFocus(!0);
        for (let _ = _; _ && _ != _; _ = _.Parent) _.SetFocusWithin(!0);
      }
      let _ = this.m_context.OnFocusChangeStart(_, this, _, _);
      _ && _.SetDOMFocusAndScroll(_, _, _, _),
        _ &&
          (_(_.Element, `vgp_onblur`, _),
          _.m_FocusRing &&
            (!_ || _.m_FocusRing != _.m_FocusRing) &&
            _.m_FocusRing.OnBlur(_, _, _)),
        _ &&
          (_(_.Element, `vgp_onfocus`, _),
          _.m_FocusRing &&
            (_ && _.m_FocusRing == _.m_FocusRing
              ? _.m_FocusRing.OnFocusChange(_, _, _)
              : _.m_FocusRing.OnFocus(_, _, _))),
        (this.m_lastFocusNode = _),
        (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
        _ == `x`
          ? this.m_lastFocusNodeXMovement.SetNode(_?.Element)
          : _ == `y`
            ? this.m_lastFocusNodeYMovement.SetNode(_?.Element)
            : (this.m_lastFocusNodeXMovement.Reset(),
              this.m_lastFocusNodeYMovement.Reset()),
        this.m_context.OnFocusChangeComplete(_);
    }
  };
function _(_, _) {
  if (!_ || !_) return null;
  let _ = _,
    _ = _;
  for (; _.GetDepth() > _.GetDepth() && _.Parent; ) _ = _.Parent;
  for (; _.GetDepth() > _.GetDepth() && _.Parent; ) _ = _.Parent;
  for (; _ != _ && _ && _; ) (_ = _.Parent), (_ = _.Parent);
  return _;
}
var _ = class {
    m_element;
    m_rect;
    SetNode(_) {
      (this.m_element = _),
        (this.m_rect = _ ? _.getBoundingClientRect() : void 0);
    }
    Reset() {
      this.SetNode(void 0);
    }
    GetRect() {
      return this.m_element?.isConnected
        ? this.m_element.getBoundingClientRect()
        : this.m_rect;
    }
  },
  _ = class {
    m_tree;
    m_target;
    m_interval;
    m_schExecuteQueuedFocus = new _();
    m_bSuppressed = !1;
    constructor(_) {
      this.m_tree = _;
    }
    RequestFocus(_, _) {
      if (!_) {
        this.m_target = void 0;
        return;
      }
      (this.m_target = {
        ..._,
        node: _,
      }),
        !this.m_interval &&
          !this.m_bSuppressed &&
          this.m_schExecuteQueuedFocus.Schedule(1, () => {
            (this.m_interval = void 0), this.ExecuteQueuedFocus();
          });
    }
    BHasQueuedFocusNode() {
      return !!this.m_target;
    }
    BIsQueuedFocusNode(_) {
      return this.m_target && this.m_target.node == _;
    }
    SuppressFocus() {
      (this.m_bSuppressed = !0), this.ClearInterval();
    }
    Reset() {
      (this.m_bSuppressed = !1), (this.m_target = void 0), this.ClearInterval();
    }
    ClearInterval() {
      this.m_schExecuteQueuedFocus.Cancel();
    }
    ExecuteQueuedFocus() {
      if (((this.m_bSuppressed = !1), this.m_target)) {
        let { node: _, bFocusDescendant: _ } = this.m_target;
        (this.m_target = void 0),
          _(
            `DeferredFocus in ${this.m_tree._} - focusing ${_ ? `descendant of` : `node`} ${_.NavKey}`,
          ),
          _
            ? _.BChildTakeFocus(_.AUTOFOCUS) ||
              this.m_tree.TransferFocus(_.AUTOFOCUS, _)
            : _.BTakeFocus(_.AUTOFOCUS) || this.m_tree.TakeFocus(_.AUTOFOCUS);
      }
    }
  },
  _ = new _(`FocusNavigation`).Debug,
  _ = class {
    m_rootWindow;
    m_activeWindow;
    m_activeBrowserView;
    m_valueIsActive = _(!1);
    m_controller;
    m_rgGamepadNavigationTrees = [];
    m_LastActiveNavTree;
    m_LastActiveFocusNavTree;
    m_bMounted = !0;
    m_schDeferredActivate = new _();
    m_FocusChangedCallbacks = new _();
    m_NavTreeActivatedOrReactivatedCallbacks = new _();
    m_bIsGamepadInputSuppressed = !1;
    m_bVR = !1;
    m_fnGetNavTreeToActivateOverride;
    constructor(_, _, _, _) {
      (this.m_controller = _),
        (this.m_rootWindow = _),
        (this.m_activeWindow = _),
        (this.m_bIsGamepadInputSuppressed = _),
        (this.m_bVR = _);
    }
    get RootWindow() {
      return this.m_rootWindow;
    }
    get ActiveWindow() {
      return this.m_activeWindow;
    }
    FindNavTreeInFocusedWindow() {
      for (let _ = this.m_rgGamepadNavigationTrees.length - 1; _ >= 0; _--) {
        let _ = this.m_rgGamepadNavigationTrees[_];
        if (_.Window?.document.hasFocus()) return _;
      }
    }
    FindNavTreeInWindow(_, _ = !0) {
      for (let _ = this.m_rgGamepadNavigationTrees.length - 1; _ >= 0; _--) {
        let _ = this.m_rgGamepadNavigationTrees[_];
        if (!(_ && !_.BIsEnabled()) && _.Window == _) return _;
      }
    }
    OnMount(_) {
      _ == this.m_rootWindow && (this.m_bMounted = !0);
    }
    Destroy(_) {
      _ == this.m_rootWindow
        ? (_(`${this.LogName(_)} Destroying context for window`),
          (this.m_bMounted = !1),
          this.m_schDeferredActivate.Cancel(),
          this.SetActive(!1, _),
          this.m_controller.DestroyContext(this))
        : _(`${this.LogName(_)} Child window destroyed`);
    }
    SetActive(_, _, _ = void 0) {
      this.m_controller.BatchedUpdate(() => {
        if (_ && !this.m_controller.BCanActivateContext(this)) {
          _(
            `${this.LogName(_)} Skipping context activation due to CFocusNavWindowContext`,
          );
          return;
        }
        let _ = this.m_valueIsActive.Value != _;
        _
          ? ((this.m_activeWindow = _),
            (this.m_activeBrowserView = _),
            this.m_controller.OnContextActivated(this))
          : ((this.m_activeBrowserView = void 0),
            this.m_controller.OnContextDeactivated(this, !1)),
          this.m_valueIsActive.Set(_),
          _ && this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(_);
      });
    }
    OnActivate(_) {
      (this.BIsActive() &&
        this.m_activeWindow == _ &&
        this.m_activeBrowserView === void 0) ||
        (_(
          `${this.LogName(_)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
        ),
        this.SetActive(!0, _));
    }
    OnActivateBrowserView(_, _) {
      (this.BIsActive() &&
        this.m_activeWindow == _ &&
        this.m_activeBrowserView == _) ||
        (_(`${this.LogName(_)} Browser View "${_}" activated in context`),
        this.SetActive(!0, _, _));
    }
    OnDeactivate(_) {
      this.m_activeWindow == _
        ? (_(`${this.LogName(_)} Deactivate context for window`),
          this.SetActive(!1, _))
        : _(
            `${this.LogName(_)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
          );
    }
    OnDeactivateBrowserView(_, _) {
      _(`${this.LogName(_)} Browser View "${_}" deactivated in context`),
        this.m_activeBrowserView == _ && this.SetActive(!1, _, _);
    }
    SetGamepadInputSuppressed(_) {
      this.m_bIsGamepadInputSuppressed = _;
    }
    BIsGamepadInputSuppressed() {
      return this.m_bIsGamepadInputSuppressed;
    }
    BIsVR() {
      return this.m_bVR;
    }
    BIsActive() {
      return this.m_valueIsActive.Value;
    }
    get IsActive() {
      return this.m_valueIsActive;
    }
    AddNavTree(_) {
      this.m_rgGamepadNavigationTrees.push(_);
    }
    LogName(_ = void 0) {
      return _ && this.m_rootWindow != _
        ? `(${this.m_rootWindow.name}) > (${_.name})`
        : `(${this.m_rootWindow.name})`;
    }
    SetNavTreeToActivateOverride(_) {
      this.m_fnGetNavTreeToActivateOverride = _;
    }
    FindNavTreeToActivate() {
      let _,
        _ = this.m_fnGetNavTreeToActivateOverride?.();
      if (_?.BIsEnabled()) _ = _;
      else
        for (let _ = this.m_rgGamepadNavigationTrees.length - 1; _ >= 0; _--) {
          let _ = this.m_rgGamepadNavigationTrees[_];
          if (_.BIsEnabled()) {
            _ = _;
            break;
          }
        }
      return _?.FindModalDescendant() ?? _;
    }
    SetActiveNavTree(_, _ = !1) {
      if (_ && this.m_LastActiveNavTree == _) {
        this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(_);
        return;
      }
      let _ = this.m_LastActiveNavTree;
      _ && _(this.m_rgGamepadNavigationTrees, _),
        (_ ||= this.FindNavTreeToActivate());
      let _ = this.m_LastActiveFocusNavTree == _;
      _ && _(this.m_rgGamepadNavigationTrees, _),
        (this.m_LastActiveNavTree = _),
        (!_ || !_.BUseVirtualFocus()) && (this.m_LastActiveFocusNavTree = _),
        _(
          `${this.LogName(_?.Window)} Move from nav tree ${_?._} to nav tree ${_?._} ${_ ? `taking focus` : `no focus`}`,
        ),
        _ && this.m_rgGamepadNavigationTrees.push(_),
        _ &&
          (this.m_rgGamepadNavigationTrees.push(_),
          !_ &&
            _ &&
            !_.DeferredFocus.BHasQueuedFocusNode() &&
            _.DeferredFocus.RequestFocus(_.Root),
          this.m_NavTreeActivatedOrReactivatedCallbacks.Dispatch(_)),
        _ && _ != this.m_LastActiveFocusNavTree && _.OnDeactivate(_),
        _ && !_ && _.OnActivate(_);
    }
    BlurNavTree(_) {
      this.m_LastActiveNavTree == _ && this.SetActiveNavTree(void 0, !0),
        _(this.m_rgGamepadNavigationTrees, _),
        this.m_rgGamepadNavigationTrees.unshift(_);
    }
    async UnregisterGamepadNavigationTree(_) {
      _(this.m_rgGamepadNavigationTrees, _),
        _(
          `(${this.m_rootWindow.name}) Unregister tree ${_?._} ${this.m_LastActiveFocusNavTree == _ ? `(was active)` : `(inactive)`}`,
        ),
        _.SetIsEnabled(!1),
        this.m_LastActiveNavTree == _ &&
          this.m_bMounted &&
          (await this.m_schDeferredActivate.AsyncSchedule(1, () => {
            (!this.m_LastActiveNavTree || this.m_LastActiveNavTree == _) &&
              this.SetActiveNavTree(void 0, !0);
          }));
    }
    get FocusChangedCallbacks() {
      return this.m_FocusChangedCallbacks;
    }
    get NavTreeActivatedOrReactivatedCallbacks() {
      return this.m_NavTreeActivatedOrReactivatedCallbacks;
    }
    m_iFocusChangeStack = 0;
    m_ActiveFocusChange;
    OnFocusChangeStart(_, _, _, _) {
      return (
        this.m_iFocusChangeStack == 0
          ? (this.m_ActiveFocusChange = {
              source: _,
              from: _ || void 0,
              _: _ || void 0,
            })
          : this.m_ActiveFocusChange &&
            (!this.m_ActiveFocusChange.from &&
              _ &&
              (this.m_ActiveFocusChange.from = _),
            _ && (this.m_ActiveFocusChange._ = _)),
        this.m_iFocusChangeStack++
      );
    }
    OnFocusChangeComplete(_) {
      if (
        (this.m_iFocusChangeStack--,
        _(_ == this.m_iFocusChangeStack, `out of order focus pop`),
        this.m_iFocusChangeStack == 0)
      ) {
        let { source: _, from: _, _: _ } = this.m_ActiveFocusChange ?? {};
        this.m_FocusChangedCallbacks.Dispatch(_, _, _);
      }
    }
    get NavigationSourceGlyphInfo() {
      return this.m_controller.NavigationSourceGlyphInfo;
    }
  },
  _ = new _(`FocusNavigation`).Debug,
  _ = new _(`FocusNavigation`).Assert,
  _ = `focus-nav-show-debug-focus-ring`;
function _() {
  return sessionStorage.getItem(_) == `shown`;
}
function _(_) {
  _ ? sessionStorage.setItem(_, `shown`) : sessionStorage.removeItem(_);
}
function _(_, _) {
  return (
    _?.eActivationSourceType === _?.eActivationSourceType &&
    _?.nActiveGamepadIndex === _?.nActiveGamepadIndex &&
    _?.nLastActiveGamepadIndex === _?.nLastActiveGamepadIndex
  );
}
var _ = class {
  m_rgGamepadInputSources = [];
  m_DefaultContext;
  m_rgAllContexts = [];
  m_ActiveContext;
  m_LastActiveContext;
  m_ContextSetChangedCallbacks = new _();
  m_rgCatchAllGamepadInput = [];
  m_UnhandledButtonEventsCallbacks = new _();
  m_navigationSource = _(
    {
      eActivationSourceType: _.UNKNOWN,
      nActiveGamepadIndex: -1,
      nLastActiveGamepadIndex: -1,
    },
    _,
  );
  m_navigationSourceSupportsFocus = _(this.m_navigationSource, (_) =>
    _(_?.eActivationSourceType),
  );
  m_bShowDebugFocusRing = _(!1);
  m_glyphInfo = _({
    nControllerType: 4,
    nControllerStyle: 100,
  });
  m_bRestoringHistory = !1;
  m_fnGamepadEventUpdateBatcher = (_) => _();
  constructor() {
    window.FocusNavController = this;
  }
  Init() {
    this.m_bShowDebugFocusRing.Set(_());
  }
  CreateContext(_, _, _) {
    let _ = new _(this, _, _, _);
    return (
      this.m_rgAllContexts.push(_),
      setTimeout(() => this.m_ContextSetChangedCallbacks.Dispatch(), 0),
      _
    );
  }
  DestroyContext(_) {
    _(this.m_rgAllContexts, _), this.m_ContextSetChangedCallbacks.Dispatch();
  }
  GetDefaultContext() {
    return (
      (this.m_DefaultContext ||= this.CreateContext(window, !1, !1)),
      this.m_DefaultContext
    );
  }
  GetActiveContext() {
    return this.m_ActiveContext;
  }
  BHasVRGamepadNavigationContext() {
    return this.m_rgAllContexts?.some(
      (_) => _.BIsVR() && !_.BIsGamepadInputSuppressed(),
    );
  }
  FindContextForRootWindow(_) {
    return this.m_rgAllContexts?.find((_) => _.RootWindow == _);
  }
  BCanActivateContext(_) {
    return !(!_ || (this.BHasVRGamepadNavigationContext() && !_.BIsVR()));
  }
  FindAnActiveContext() {
    if (!this.m_ActiveContext && this.m_rgAllContexts.length != 0) {
      console.warn(`No active context; finding one`);
      for (let _ of this.m_rgAllContexts) {
        let _ = _.FindNavTreeInFocusedWindow();
        if (_ && this.BCanActivateContext(_)) {
          _(
            `${_.LogName(_.Window)} Found a focused window; setting this context as active.`,
          ),
            (this.m_ActiveContext = _),
            this.m_ActiveContext.OnActivate(_.Window);
          break;
        }
      }
    }
    return (
      !this.m_ActiveContext &&
        this.m_LastActiveContext &&
        this.BCanActivateContext(this.m_LastActiveContext) &&
        (_(
          `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
        ),
        (this.m_ActiveContext = this.m_LastActiveContext),
        this.m_ActiveContext.OnActivate(
          this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
        )),
      this.m_ActiveContext
    );
  }
  SetShowDebugFocusRing(_) {
    this.m_bShowDebugFocusRing.Set(_), _(_);
  }
  GetShowDebugFocusRing() {
    return this.m_bShowDebugFocusRing;
  }
  RegisterInputSource(_) {
    let _ = new _();
    return (
      this.m_rgGamepadInputSources.push(_),
      _.PushArrayRemove(this.m_rgGamepadInputSources, _),
      _.Push(_.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister),
      _.Push(_.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
      _.Push(
        _.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
          .Unregister,
      ),
      _.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
      _.Push(() => _.SetRepeatAllowed()),
      _.GetSourceType() == _.GAMEPAD && this.UpdateSourceToGamepad(),
      _.Push(_.Init(this).Unregister),
      _.GetUnregisterFunc()
    );
  }
  UpdateSourceToGamepad(_ = !1) {
    (this.m_navigationSource.Value.eActivationSourceType == _.UNKNOWN || _) &&
      this.m_navigationSource.Set({
        ...this.m_navigationSource.Value,
        eActivationSourceType: _.GAMEPAD,
      });
  }
  SetGamepadEventUpdateBatcher(_) {
    this.m_fnGamepadEventUpdateBatcher = _;
  }
  get NavigationSource() {
    return this.m_navigationSource;
  }
  get NavigationSourceSupportsFocus() {
    return this.m_navigationSourceSupportsFocus;
  }
  get NavigationSourceGlyphInfo() {
    return this.m_glyphInfo;
  }
  DispatchVirtualButtonClick(_, _, _) {
    let _;
    _ && (_ = this.GetActiveContext() ?? this.FindAnActiveContext()),
      this.OnButtonDown(
        _,
        _ ?? _.GAMEPAD,
        -1,
        void 0,
        void 0,
        void 0,
        _,
        _,
        !0,
      ),
      this.OnButtonUp(_, _ ?? _.GAMEPAD, -1, void 0, void 0, void 0, _, _, !0);
  }
  DispatchVirtualGamepad(_, _) {
    switch (_) {
      case `vgp_onbuttondown`:
        this.OnButtonDown(_.button, _.source, -1, _.is_repeat);
        break;
      case `vgp_onbuttonup`:
        this.OnButtonUp(_.button, _.source, -1);
        break;
    }
  }
  BGlobalGamepadButton(_) {
    return _ === _.STEAM_GUIDE || _ === _.STEAM_QUICK_MENU || _ === _.CANCEL;
  }
  GetEventTarget(_, _, _ = !1) {
    let _ = this.GetActiveContext();
    !_ && _ && (_ = this.FindAnActiveContext());
    let _ = _?.ActiveWindow?.document.activeElement;
    if (_?.m_LastActiveNavTree) {
      if (
        ((_ ||= this.m_navigationSource?.Value?.eActivationSourceType),
        !_.m_LastActiveNavTree.GetLastFocusedNode() &&
          _(_) &&
          (_(
            `GetEventTarget: Context ${_.LogName()} tree ${_.m_LastActiveNavTree._} has no focused node, ${_ ? `finding one` : `will not find one`}`,
          ),
          _ && _.m_LastActiveNavTree.TakeFocus(_.GAMEPAD, !0),
          !this.BGlobalGamepadButton(_)))
      )
        return [void 0, _];
      _.m_LastActiveNavTree.GetLastFocusedNode()
        ? (_ = _.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
        : _(
            `GetEventTarget: Context ${_.LogName()} tree ${_.m_LastActiveNavTree._} still has no focused node - will fall back to document.activeElement`,
          );
    }
    return [_, _];
  }
  ChangeNavigationSource(_, _, _, _) {
    let _ = this.m_navigationSource.Value,
      _ = _.nLastActiveGamepadIndex;
    return (
      _.nActiveGamepadIndex != null &&
        _.nActiveGamepadIndex >= 0 &&
        (_ = _.nActiveGamepadIndex),
      this.m_navigationSource.Set({
        eActivationSourceType: _,
        nActiveGamepadIndex: _,
        nLastActiveGamepadIndex: _,
      }),
      _ &&
        _ &&
        this.m_glyphInfo.Set({
          nControllerType: _,
          nControllerStyle: _,
        }),
      _ != _.MOUSE &&
        _(`Browser.HideCursorUntilMouseEvent`) &&
        SteamClient.Browser.HideCursorUntilMouseEvent(),
      _.eActivationSourceType != _
    );
  }
  OnButtonActionInternal(_, _, _, _, _, _, _, _, _, _) {
    for (let _ = this.m_rgCatchAllGamepadInput.length - 1; _ >= 0; _--)
      if (this.m_rgCatchAllGamepadInput[_](_, _, _ ?? !1)) {
        _ &&
          _(
            `Ignoring button press - gamepad input is suppressed by parent window`,
          );
        return;
      }
    _(
      !!_ == !!_,
      `Must set both overrideContext and overrideElement or neither`,
    );
    let _ = _,
      _ = _;
    if (
      ((_ == null || _ == null) && ([_, _] = this.GetEventTarget(_, _, _)),
      _?.BIsGamepadInputSuppressed() && !_)
    ) {
      _(
        `Suppressing ${_[_]} input on element ${_?.className} because tree ${_?.m_LastActiveNavTree?._} has it disabled`,
      );
      return;
    }
    this.ChangeNavigationSource(_, _, _, _),
      _ && _(`Firing ${_[_]} in tree ${_?.m_LastActiveNavTree?._} at `, _),
      this.BatchedUpdate(() =>
        _(_, _ ? `vgp_onbuttondown` : `vgp_onbuttonup`, {
          button: _,
          source: _,
          is_repeat: _,
        }),
      );
  }
  OnButtonDown(_, _, _, _, _, _, _, _, _) {
    this.OnButtonActionInternal(!0, _, _, _, _, _, _, _, _, _);
  }
  OnButtonUp(_, _, _, _, _, _, _, _, _) {
    this.OnButtonActionInternal(!1, _, _, _, !1, _, _, _, _, _);
  }
  BatchedUpdate(_) {
    this.m_fnGamepadEventUpdateBatcher(_);
  }
  OnNavigationTypeChange(_) {
    if (
      this.ChangeNavigationSource(_, -1) &&
      !(!document.hasFocus() && !this.m_LastActiveContext?.BIsVR()) &&
      (_ == _.MOUSE || _ == _.TOUCH) &&
      this.m_ActiveContext?.m_LastActiveNavTree
    ) {
      let _ = this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
        _ = _(_?.Element) ? _ : null;
      this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(_.APPLICATION, _);
    }
  }
  NewGamepadNavigationTree(_, _, _, _) {
    return new _(this, _, _, _, _);
  }
  RegisterGamepadNavigationTree(_, _) {
    _(`Registering focusnav tree `, _._);
    let _ = _.WindowContext;
    _.AddNavTree(_);
    let _ = _.MountNavTree(_);
    return (
      !_.Parent &&
        _.BIsEnabled() &&
        (this.BCanActivateContext(_) &&
          (this.m_LastActiveContext = this.m_ActiveContext = _),
        _.BIsVR() || _.SetActiveNavTree(_, !0)),
      () => {
        _.UnregisterGamepadNavigationTree(_).then(() => _());
      }
    );
  }
  OnGamepadNavigationTreeActivated(_, _ = !1) {
    _.WindowContext.SetActiveNavTree(_, _);
  }
  OnGamepadNavigationTreeFocused(_, _, _ = !1) {
    let _ = _.WindowContext;
    _ != this.m_ActiveContext &&
      _(`(${_.LogName(_.Window)}) Focus event in inactive window`),
      _ != _.m_LastActiveFocusNavTree &&
        _ != _.m_LastActiveNavTree &&
        (_.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == _ ||
        _.GetParentEmbeddedNavTree() == _.m_LastActiveFocusNavTree
          ? _ == _.AUTOFOCUS && _.m_LastActiveNavTree?.GetLastFocusedNode()
            ? _(
                `There was an autofocus event in ${_._}, but the active nav tree is ${_.m_LastActiveFocusNavTree?._} and we already have something focused.  Source: ${_ && _[_]}.`,
              )
            : (_(
                `There was a focus event in ${_._}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
              ),
              _.Activate())
          : _(
              `There was a focus event in ${_._}, but the active nav tree is ${_.m_LastActiveFocusNavTree?._} so it is being ignored.  Source: ${_ && _[_]}.`,
            ));
  }
  BlurNavTree(_) {
    _.WindowContext.BlurNavTree(_);
  }
  IsActiveFocusNavTree(_) {
    return !!(_ && _ == this.m_ActiveContext?.m_LastActiveFocusNavTree);
  }
  IsActiveNavTree(_) {
    return !!(_ && _ == this.m_ActiveContext?.m_LastActiveNavTree);
  }
  GetActiveNavTree() {
    return this.m_ActiveContext?.m_LastActiveNavTree;
  }
  BIsInActiveContext(_) {
    return !!(_ && _.WindowContext == this.m_ActiveContext);
  }
  RegisterForUnhandledButtonDownEvents(_) {
    return this.m_UnhandledButtonEventsCallbacks.Register(_);
  }
  get ContextSetChangedCallbacks() {
    return this.m_ContextSetChangedCallbacks;
  }
  FireUnhandledGamepadEventCallbacks(_) {
    return this.m_UnhandledButtonEventsCallbacks.CountRegistered()
      ? (this.m_UnhandledButtonEventsCallbacks.Dispatch(_), !1)
      : !0;
  }
  SetCatchAllGamepadInput(_) {
    return (
      this.m_rgCatchAllGamepadInput.push(_),
      {
        Unregister: () => {
          let _ = this.m_rgCatchAllGamepadInput.indexOf(_);
          _ >= 0 && this.m_rgCatchAllGamepadInput.splice(_, 1);
        },
      }
    );
  }
  TakeFocusChangingIFrame() {
    window.focus();
    let _ =
      this.m_ActiveContext?.m_LastActiveFocusNavTree ||
      this.m_ActiveContext?.m_LastActiveNavTree;
    _ && _.TakeFocus(_.APPLICATION);
  }
  OnContextActivated(_) {
    (this.m_ActiveContext = _), (this.m_LastActiveContext = _);
  }
  OnContextDeactivated(_, _) {
    _ &&
      (this.m_LastActiveContext == _ && (this.m_LastActiveContext = void 0),
      this.DestroyContext(_)),
      this.m_ActiveContext == _ && (this.m_ActiveContext = void 0);
  }
  BIsRestoringHistory() {
    return this.m_bRestoringHistory;
  }
  async RestoreHistoryTransaction(_) {
    this.m_bRestoringHistory = !0;
    try {
      await _();
    } finally {
      this.m_bRestoringHistory = !1;
    }
  }
};
_([_], _.prototype, `OnButtonDown`, null),
  _([_], _.prototype, `OnButtonUp`, null),
  _([_], _.prototype, `OnNavigationTypeChange`, null);
function _(_) {
  if (!_(_)) return !1;
  let _ = _.tagName;
  return _(_, _(_) ? _.type : void 0);
}
var _ = `qnZg-WlNYp0-`,
  _ = `NtlIACbluDs-`,
  _ = `kHLroHJHwyA-`;
function _(_) {
  let { gamepadUiTabs: _ } = _;
  if (_.length === 0) return null;
  let _ = [..._]
    .sort((_, _) => _.href.length - _.href.length)
    .find((_) => location.href.startsWith(_.href));
  return (0, _.jsx)(`div`, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: _.map((_) =>
        (0, _.jsx)(
          _,
          {
            gamepadFocusable: !0,
            noFocusRing: !0,
            className: (0, _.default)(
              _,
              _ === _ && `QBY9JOAV0kw-`,
              _.className,
            ),
            snr: !0,
            _: _.href,
            children: _.label,
          },
          _.href,
        ),
      ),
    }),
  });
}
var _ = `nlTg10o51PM-`,
  _ = `endSACxU25k-`,
  _ = `Z0Fc4o3bNoI-`,
  _ = `MhT6639uYT0-`,
  _ = `p7dHTFbUaGA-`,
  _ = `PjCIRmdNpcU-`,
  _ = {};
(_.arabic = () => _(() => import(`./LUwHt1iu.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./B1S9bwXv2.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./DhGH1ox-2.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./DXLvWsQk2.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./Cjb9n6dN2.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./DLIzxHOT2.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./DScfh8Vv2.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./7Fplu1aK2.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./CU0aB5uw2.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./CQ9GHMwO2.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./Bu6Sq0Iw2.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./DCh9iehj2.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./DdGnLc1b2.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./Cp5Z670X2.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./BsYQqo122.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./6ReR-yhY2.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./naFouzaI2.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./GLVAKsG82.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./CmTUWuV92.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./0poaULCJ2.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./BEOXCx762.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./D1NqqEZ32.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./aOGCdsON2.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./HcBFaMdc2.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./DyyQ740z2.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./C2NSXUoB2.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./Ui8l-9442.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./DhNWgfl9.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./DesX7kM7.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./Bvaj__2-.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./BxdXGhky.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./CCCqOCYk.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
async function _(_) {
  let _ = _.STORE_BASE_URL + `account/ajaxsetcookiepreferences`,
    _ = new FormData();
  _.set(`bAllow`, _.toString()), _.set(`sessionId`, _(_));
  let _ = await fetch(_, {
    method: `POST`,
    credentials: `include`,
    body: _,
  });
  if (_._) {
    let _ = await _.json();
    _.transfer_urls &&
      _.transfer_params &&
      _.transfer_urls.forEach(async (_) => {
        let _ = new FormData();
        _.set(`transfer_params`, _.transfer_params),
          fetch(_, {
            method: `POST`,
            credentials: `include`,
            body: _,
          });
      });
  }
}
function _() {
  let _ = (0, _.useRef)(null);
  return (
    (0, _.useEffect)(() => {
      let _ = setTimeout(() => {
        _.current?.show();
      }, 4e3);
      return () => {
        clearTimeout(_);
      };
    }, []),
    (0, _.jsxs)(`dialog`, {
      className: _,
      ref: _,
      children: [
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _.Localize(`#CookiePrefPopup_Title`),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: _(
                _.Localize(`#CookiePrefPopup_Desc`),
                (0, _.jsx)(`a`, {
                  href: _.STORE_BASE_URL + `account/cookiepreferences`,
                }),
                (0, _.jsx)(`a`, {
                  href: _.STORE_BASE_URL + `privacy_agreement`,
                }),
              ),
            }),
          ],
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`button`, {
              className: _,
              onClick: async () => {
                await _(1), _.current?.close();
              },
              children: _.Localize(`#CookiePrefPopup_AcceptAll`),
            }),
            (0, _.jsx)(`button`, {
              className: _,
              onClick: async () => {
                await _(0), _.current?.close();
              },
              children: _.Localize(`#CookiePrefPopup_RejectAll`),
            }),
          ],
        }),
      ],
    })
  );
}
function _() {
  let _ = _();
  return _ && _.preference_state != 4 ? null : (0, _.jsx)(_, {});
}
var _ = `GamepadInput`,
  _ = (function (_) {
    return (
      (_[(_.PageUnloading = 0)] = `PageUnloading`),
      (_[(_.Unknown = 1)] = `Unknown`),
      (_[(_.None = 2)] = `None`),
      (_[(_.Basic = 3)] = `Basic`),
      (_[(_.Full = 4)] = `Full`),
      _
    );
  })({}),
  _ = `PinnedView`,
  _ = class {
    PostMessage(_) {}
    RegisterForMessage(_) {}
  },
  _ = class {
    m_fnCallback = void 0;
    constructor() {
      SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
    }
    RegisterForMessage(_) {
      this.m_fnCallback = _;
    }
    PostMessage(_) {
      let _ = JSON.stringify(_);
      SteamClient.BrowserView.PostMessageToParent(_, _);
    }
    OnMessage(_, _) {
      if (_ == `GamepadInput`) {
        let _ = JSON.parse(_);
        this.m_fnCallback(_);
      } else if (_ == `Checkout`) {
        let _ = JSON.parse(_);
        if (_.action == `paypal_success`)
          try {
            window.OnPayPalSuccess(_.transid);
          } catch {}
        else if (_.action == `paypal_cancel`)
          try {
            window.OnPayPalCancel(_.transid);
          } catch {}
      } else if (_ == _) {
        let _ = JSON.parse(_);
        try {
          window.HandleOverlayWindowPinnedView(
            _.bPinned == 1,
            _.bShowPinnedView == 1,
          );
        } catch {}
      }
    }
  };
_([_], _.prototype, `OnMessage`, null);
var _ = class {
  m_postWindow;
  m_fnCallback = void 0;
  constructor(_) {
    (this.m_postWindow = _), window.addEventListener(`message`, this.OnMessage);
  }
  RegisterForMessage(_) {
    this.m_fnCallback = _;
  }
  PostMessage(_) {
    let _ = JSON.stringify(_);
    this.m_postWindow.postMessage(
      {
        gamepadMessage: _,
        args: _,
      },
      `*`,
    );
  }
  OnMessage(_) {
    let _ = _?.data;
    if (_ && _.gamepadMessage == `GamepadInput` && _.args) {
      let _ = JSON.parse(_.args);
      this.m_fnCallback(_);
    }
  }
};
_([_], _.prototype, `OnMessage`, null);
var _ = class {
  m_NavigationController;
  m_postMessage;
  m_bIsGamepadInputExternallyControlled = !1;
  constructor(_) {
    if (((this.m_NavigationController = _), _()))
      (this.m_bIsGamepadInputExternallyControlled = !0),
        (this.m_postMessage = new _()),
        this.m_NavigationController.UpdateSourceToGamepad();
    else {
      let _ = window.top;
      _ && _ != window.self
        ? ((this.m_bIsGamepadInputExternallyControlled = !0),
          (this.m_postMessage = new _(_)))
        : ((this.m_bIsGamepadInputExternallyControlled = !1),
          (this.m_postMessage = new _()));
    }
    this.m_postMessage.RegisterForMessage(this.OnMessage),
      window.addEventListener(`unload`, this.PostPageUnloading),
      this.m_NavigationController.RegisterForUnhandledButtonDownEvents((_) =>
        this.PostButtonPressToSteam(_.detail.button),
      ),
      this.UpdateActionDescriptions({}),
      this.SendGameInputState(`CGamepadWebBridgeClient constructor`);
  }
  RegisterForFocusChanged(_) {
    return _.FocusChangedCallbacks.Register(this.OnFocusChanged).Unregister;
  }
  BIsGamepadInputExternallyControlled() {
    return this.m_bIsGamepadInputExternallyControlled;
  }
  BFromActiveNavTree(_, _) {
    let _ = _?.Tree;
    return (_ ||= _?.Tree), _ && _.Controller.IsActiveFocusNavTree(_);
  }
  OnFocusChanged(_, _, _) {
    this.BFromActiveNavTree(_, _) && this.OnActionDescriptionTargetChanged(_);
  }
  UpdateActionDescriptions(_) {
    this.m_postMessage.PostMessage({
      type: `UpdateActionDescriptions`,
      data: {
        descriptions: _,
      },
    });
  }
  m_rgCallbackRegistrations = [];
  OnActionDescriptionTargetChanged(_) {
    if (
      (this.m_rgCallbackRegistrations.forEach((_) => _()),
      (this.m_rgCallbackRegistrations = []),
      _)
    ) {
      let _ = () =>
        this.UpdateActionDescriptions(_.GetActiveActionDescriptions() ?? {});
      _();
      for (let _ = _; _ != null; _ = _.Parent)
        this.m_rgCallbackRegistrations.push(
          _.ActionDescriptionChangedCallbackList.Register(_).Unregister,
        );
    } else this.UpdateActionDescriptions({});
  }
  OnMessage(_) {
    switch (_.type) {
      case `TakeFocus`:
        this.m_NavigationController.TakeFocusChangingIFrame();
        break;
      case `ForwardedGameEventDetail`:
        this.m_NavigationController.DispatchVirtualGamepad(
          _.data.event,
          _.data.details,
        );
        break;
    }
  }
  SendGameInputState(_) {
    let _ = _.Basic;
    window.bSupportsGamepadUI && (_ = _.Full),
      this.m_postMessage.PostMessage({
        type: `GameInputState`,
        data: {
          source: _,
          support: _,
        },
      });
  }
  PostButtonPressToSteam(_) {
    this.m_postMessage.PostMessage({
      type: `ButtonPressed`,
      data: {
        button: _,
      },
    });
  }
  PostPageUnloading() {
    this.m_postMessage.PostMessage({
      type: `PageUnloading`,
      data: {
        location: window.location.href,
      },
    });
  }
};
_([_], _.prototype, `OnFocusChanged`, null),
  _([_], _.prototype, `OnMessage`, null),
  _([_], _.prototype, `PostPageUnloading`, null);
function _() {
  return (
    _(`BrowserView.RegisterForMessageFromParent`) &&
    _(`BrowserView.PostMessageToParent`)
  );
}
var _ = [
    {
      index: 0,
      type: _._,
      category: `action`,
    },
    {
      index: 1,
      type: _.CANCEL,
      category: `action`,
    },
    {
      index: 2,
      type: _.SECONDARY,
      category: `action`,
    },
    {
      index: 3,
      type: _.OPTIONS,
      category: `action`,
    },
    {
      index: 4,
      type: _.BUMPER_LEFT,
      category: `action`,
    },
    {
      index: 5,
      type: _.BUMPER_RIGHT,
      category: `action`,
    },
    {
      index: 6,
      type: _.TRIGGER_LEFT,
      category: `action`,
    },
    {
      index: 7,
      type: _.TRIGGER_RIGHT,
      category: `action`,
    },
    {
      index: 8,
      type: _.SELECT,
      category: `action`,
    },
    {
      index: 9,
      type: _.START,
      category: `action`,
    },
    {
      index: 10,
      type: _.LSTICK_CLICK,
      category: `action`,
    },
    {
      index: 11,
      type: _.RSTICK_CLICK,
      category: `action`,
    },
    {
      index: 12,
      type: _.DIR_UP,
      category: `navigation`,
    },
    {
      index: 13,
      type: _.DIR_DOWN,
      category: `navigation`,
    },
    {
      index: 14,
      type: _.DIR_LEFT,
      category: `navigation`,
    },
    {
      index: 15,
      type: _.DIR_RIGHT,
      category: `navigation`,
    },
    {
      index: 16,
      type: _.STEAM_GUIDE,
      category: `action`,
    },
    {
      index: 17,
      type: _.SELECT,
      category: `action`,
    },
  ],
  _ = class extends _ {
    m_rgGamepadStatus = [];
    constructor() {
      super(),
        this.SetSourceType(_.GAMEPAD),
        window.addEventListener(`gamepadconnected`, (_) => {
          this.m_bGamepadDetected ||
            (this.OnGamepadDetected(), this.PollGamepads());
        });
    }
    PollGamepads() {
      let _ = navigator.getGamepads();
      for (let _ = 0; _ < _.length; _++) {
        let _ = _[_];
        if (!_) continue;
        this.m_rgGamepadStatus[_] ||
          (this.m_rgGamepadStatus[_] = {
            buttons: [],
          });
        let _ = this.m_rgGamepadStatus[_];
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_],
            _ = _.index;
          _.buttons[_] &&
            (_.buttons[_].pressed
              ? _.buttons[_] || ((_.buttons[_] = !0), this.OnButtonDown(_.type))
              : _.buttons[_] && (this.OnButtonUp(_.type), (_.buttons[_] = !1)));
        }
      }
      requestAnimationFrame(this.PollGamepads);
    }
  };
_([_], _.prototype, `PollGamepads`, null);
var _ = class extends _ {
  m_lastButtonDown = _.INVALID;
  constructor(_) {
    super(),
      this.SetSourceType(_.KEYBOARD_SIMULATOR),
      _.addEventListener(`keydown`, this.OnKeyDown, {
        capture: !0,
      }),
      _.addEventListener(`keyup`, this.OnKeyUp, {
        capture: !0,
      }),
      _.addEventListener(`blur`, this.Reset);
  }
  OnKeyDown(_) {
    let _ = this.TranslateKey(_);
    _ != _.INVALID &&
      (_.preventDefault(),
      _.stopPropagation(),
      _ != this.m_lastButtonDown &&
        (this.Reset(), this.OnButtonDown(_), (this.m_lastButtonDown = _)));
  }
  OnKeyUp(_) {
    let _ = this.TranslateKey(_);
    _ != _.INVALID &&
      (this.OnButtonUp(_),
      (this.m_lastButtonDown = _.INVALID),
      _.preventDefault(),
      _.stopPropagation());
  }
  Reset() {
    this.m_lastButtonDown != _.INVALID &&
      (this.OnButtonUp(this.m_lastButtonDown),
      (this.m_lastButtonDown = _.INVALID));
  }
  GetKeycodeFromEvent(_) {
    return _.PLATFORM === `linux` && _.key.length > 1
      ? _.key || _.code
      : _.code || _.key;
  }
  BShouldSwallowEventForTextInputWorkaround(_) {
    if (
      !(
        _(_.target) &&
        (_.target.nodeName === `INPUT` ||
          _.target.nodeName === `TEXTAREA` ||
          _.target.hasAttribute(`contenteditable`))
      )
    )
      return !1;
    if (_.target.hasAttribute(`contenteditable`)) return !0;
    let _ = this.GetKeycodeFromEvent(_),
      _ = _.target;
    if (_.type === `range`) return !1;
    let _ = Array.from(_.ownerDocument.getElementsByClassName(`gpfocus`)).some(
      (_) => Array.from(_.classList).some((_) => _.includes(`virtualkeyboard`)),
    );
    switch (_) {
      case `ArrowUp`: {
        if (_) return !0;
        let _ = _?.value.indexOf(`
`);
        return (
          _.target.nodeName === `TEXTAREA` &&
          _ >= 0 &&
          _ < (_?.selectionStart ?? 0)
        );
      }
      case `ArrowDown`: {
        if (_) return !0;
        let _ = _?.value.lastIndexOf(`
`);
        return (
          _.target.nodeName === `TEXTAREA` &&
          _ >= 0 &&
          _ >= (_?.selectionStart ?? 0) &&
          (_?.selectionEnd ?? 0) < _?.value.length
        );
      }
      case `ArrowLeft`:
        return _
          ? !0
          : (_?.selectionStart ?? 0) > 0 && (_?.selectionEnd ?? 0) > 0;
      case `ArrowRight`:
        return _
          ? !0
          : (_?.selectionStart ?? 0) < _?.value.length &&
              (_?.selectionEnd ?? 0) < _?.value.length;
      case `Enter`:
        return !0;
      case `Backspace`:
        return !0;
      default:
        return !1;
    }
  }
  TranslateKey(_) {
    let _ = this.GetKeycodeFromEvent(_);
    if (_.altKey || this.BShouldSwallowEventForTextInputWorkaround(_))
      return _.INVALID;
    if (_.ctrlKey)
      if (_.shiftKey)
        switch (_) {
          case `Digit4`:
            return _.TRIGGER_LEFT;
          case `Digit5`:
            return _.TRIGGER_RIGHT;
          default:
            return _.INVALID;
        }
      else
        switch (_) {
          case `Digit1`:
            return _.STEAM_GUIDE;
          case `Digit2`:
            return _.STEAM_QUICK_MENU;
          case `Digit3`:
            return _.SELECT;
          case `Digit4`:
            return _.BUMPER_LEFT;
          case `Digit5`:
            return _.BUMPER_RIGHT;
          case `Digit6`:
            return _.LSTICK_CLICK;
          case `Digit7`:
            return _.RSTICK_CLICK;
          case `Digit8`:
            return _.OPTIONS;
          case `Digit9`:
            return _.SELECT;
          case `Digit0`:
            return _.START;
        }
    else if (!_.shiftKey)
      switch (_) {
        case `Escape`:
          return _.CANCEL;
        case `Enter`:
          return _._;
        case `Backspace`:
          return _.SECONDARY;
        case `ArrowUp`:
          return _.DIR_UP;
        case `ArrowDown`:
          return _.DIR_DOWN;
        case `ArrowLeft`:
          return _.DIR_LEFT;
        case `ArrowRight`:
          return _.DIR_RIGHT;
      }
    return _.INVALID;
  }
};
_([_], _.prototype, `OnKeyDown`, null),
  _([_], _.prototype, `OnKeyUp`, null),
  _([_], _.prototype, `Reset`, null);
var _ = class extends _ {
  m_nAccumulatedMouseMovement = 0;
  m_bFirstMouseUpdate = !0;
  m_nLastScreenX;
  m_nLastScreenY;
  m_lastButtonDown = _.INVALID;
  constructor(_) {
    super(),
      this.SetSourceType(_.MOUSE),
      _.addEventListener(`mousedown`, this.OnMouseDown),
      _.addEventListener(`mouseup`, this.OnMouseUp),
      _.addEventListener(`mousemove`, this.OnMouseMove),
      _.addEventListener(`blur`, this.Reset);
  }
  TranslateKey(_) {
    switch (_.button) {
      case 3:
        return _.CANCEL;
      default:
        return _.INVALID;
    }
  }
  OnMouseDown(_) {
    if (_.defaultPrevented) return;
    let _ = this.TranslateKey(_);
    _ != _.INVALID &&
      (_.preventDefault(),
      _ != this.m_lastButtonDown &&
        (this.Reset(), this.OnButtonDown(_), (this.m_lastButtonDown = _)),
      this.OnNavigationTypeChanged(_.MOUSE));
  }
  OnMouseUp(_) {
    let _ = this.TranslateKey(_);
    _ != _.INVALID &&
      (this.OnButtonUp(_),
      (this.m_lastButtonDown = _.INVALID),
      _.preventDefault());
  }
  OnMouseMove(_) {
    if (!_.defaultPrevented) {
      if (this.m_bFirstMouseUpdate) {
        (this.m_nLastScreenX = _.screenX),
          (this.m_nLastScreenY = _.screenY),
          (this.m_bFirstMouseUpdate = !1);
        return;
      }
      (this.m_nAccumulatedMouseMovement +=
        Math.abs(_.screenX - this.m_nLastScreenX) +
        Math.abs(_.screenY - this.m_nLastScreenY)),
        this.m_nAccumulatedMouseMovement > 500 &&
          (this.Reset(), this.OnNavigationTypeChanged(_.MOUSE));
    }
  }
  Reset() {
    (this.m_nAccumulatedMouseMovement = 0),
      (this.m_bFirstMouseUpdate = !0),
      this.m_lastButtonDown != _.INVALID &&
        (this.OnButtonUp(this.m_lastButtonDown),
        (this.m_lastButtonDown = _.INVALID));
  }
};
_([_], _.prototype, `TranslateKey`, null),
  _([_], _.prototype, `OnMouseDown`, null),
  _([_], _.prototype, `OnMouseUp`, null),
  _([_], _.prototype, `OnMouseMove`, null),
  _([_], _.prototype, `Reset`, null);
var _ = class extends _ {
  constructor(_) {
    super(),
      this.SetSourceType(_.TOUCH),
      _.addEventListener(`touchstart`, this.OnTouchStart),
      _.addEventListener(`touchend`, this.OnTouchEnd);
  }
  OnTouchStart(_) {
    _.defaultPrevented || this.OnNavigationTypeChanged(_.TOUCH);
  }
  OnTouchEnd(_) {
    _.defaultPrevented || this.OnNavigationTypeChanged(_.TOUCH);
  }
};
_([_], _.prototype, `OnTouchStart`, null),
  _([_], _.prototype, `OnTouchEnd`, null);
var _ = `VirtualKeyboardMessage`;
function _(_) {
  return _ && _.type === _;
}
var _ = class {
  m_ownerWindow;
  constructor() {}
  Init(_) {
    return (
      (this.m_ownerWindow = _),
      this.m_ownerWindow.addEventListener(`message`, this.OnMessage),
      () => {
        this.m_ownerWindow.removeEventListener(`message`, this.OnMessage),
          (this.m_ownerWindow = void 0);
      }
    );
  }
  CreateVirtualKeyboardRef() {
    return {
      ShowVirtualKeyboard: this.ShowVirtualKeyboard,
      ShowModalKeyboard: this.ShowModalKeyboard,
      SetAsCurrentVirtualKeyboardTarget: () => {},
      HideVirtualKeyboard: this.HideVirtualKeyboard,
      DelayHideVirtualKeyboard: this.HideVirtualKeyboard,
      BIsActive: () => !0,
      BIsElementValidForInput: () => !0,
    };
  }
  ShowVirtualKeyboard() {
    this.SendMessage({
      message: `ShowVirtualKeyboard`,
    });
  }
  ShowModalKeyboard() {
    this.SendMessage({
      message: `ShowModalKeyboard`,
    });
  }
  HideVirtualKeyboard(_) {
    this.SendMessage({
      message: `HideVirtualKeyboard`,
      msDelay: _,
    });
  }
  OnBrowserViewMessage(_, _) {
    _ == _ && this.InternalDispatchMessage(JSON.parse(_));
  }
  OnMessage(_) {
    this.InternalDispatchMessage(_.data);
  }
  InternalDispatchMessage(_) {
    if (_(_))
      switch (_.message) {
        case `OnEnterKeyPress`:
          break;
      }
  }
  SendMessage(_) {
    let _ = {
      type: `VirtualKeyboardMessage`,
      ..._,
    };
    _(`BrowserView.PostMessageToParent`)
      ? SteamClient.BrowserView.PostMessageToParent(_.type, JSON.stringify(_))
      : this.m_ownerWindow &&
        (_(
          this.m_ownerWindow.parent &&
            this.m_ownerWindow.parent != this.m_ownerWindow,
          `CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard`,
        ),
        this.m_ownerWindow.parent.postMessage(_, `*`));
  }
};
_([_], _.prototype, `ShowVirtualKeyboard`, null),
  _([_], _.prototype, `ShowModalKeyboard`, null),
  _([_], _.prototype, `HideVirtualKeyboard`, null),
  _([_], _.prototype, `OnBrowserViewMessage`, null),
  _([_], _.prototype, `OnMessage`, null),
  _(
    [_],
    class {
      m_showKeyboard;
      m_showModalKeyboard;
      m_hideKeyboard;
      constructor(_, _, _, _) {
        (this.m_showKeyboard = _),
          (this.m_showModalKeyboard = _),
          (this.m_hideKeyboard = _),
          _._(`message`, this.OnMessage);
      }
      OnMessage(_, _, _) {
        if (_ == _) {
          let _ = JSON.parse(_);
          if (_(_))
            switch (_.message) {
              case `ShowVirtualKeyboard`:
                this.m_showKeyboard();
                break;
              case `ShowModalKeyboard`:
                this.m_showModalKeyboard();
                break;
              case `HideVirtualKeyboard`:
                this.m_hideKeyboard();
                break;
            }
        }
      }
    }.prototype,
    `OnMessage`,
    null,
  );
function _(_) {
  let _ = _(),
    [_] = _.useState(() => {
      let _ = new _();
      return _ && _.UpdateSourceToGamepad(), _;
    }),
    [_, _] = _.useState(),
    [_] = _.useState(() => new _()),
    [_, _] = _.useState(void 0);
  return (
    _.useEffect(() => {
      if (_ && !_) {
        let _ = new _(_);
        _(_), _(_.BIsGamepadInputExternallyControlled());
      }
    }, [_, _, _]),
    _.useEffect(() => {
      if (_) return _.Init(window);
    }, [_, _]),
    (0, _.jsxs)(_, {
      controller: _,
      children: [
        _ === !1 && _ === !0 && (0, _.jsx)(_, {}),
        (_ === !0 || _ === !0) && (0, _.jsx)(_, {}),
        _ && (0, _.jsx)(_, {}),
        (0, _.jsxs)(_, {
          ownerWindow: window,
          children: [
            _ &&
              (0, _.jsx)(_, {
                bridge: _,
              }),
            (0, _.jsx)(_, {
              factory: _,
              children: _.children,
            }),
          ],
        }),
      ],
    })
  );
}
function _(_) {
  let { bridge: _ } = _,
    _ = _();
  return (
    _.useEffect(() => {
      if (!(!_ || !_)) return _.RegisterForFocusChanged(_);
    }, [_, _]),
    null
  );
}
function _() {
  let [_] = _.useState(() => new _());
  return _(_), null;
}
function _(_) {
  let [_, _] = _.useState(void 0);
  _.useEffect(() => _(new _(window)), [_]), _(_);
}
function _() {
  return _(_), null;
}
function _() {
  return _(_), _(_), null;
}
var _ = `SZDk3YnqgsA-`,
  _ = `QWXMPVkRhGI-`,
  _ = `mza1BulfSrM-`,
  _ = `hQKLMdLvxDY-`;
function _() {
  return _(_(_(), _()));
}
function _(_, _) {
  return {
    queryKey: [`FollowedGamesCount`, _],
    queryFn: () => _(_, _),
    staleTime: 600 * 1e3,
    enabled: !!_ && _ != `0`,
  };
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_);
  let _ = await _.GetGamesFollowedCount(_, _);
  if (!_.BSuccess())
    throw `Error loading followed games count: ${_.GetErrorMessage()}`;
  return _.Body().toObject().followed_game_count ?? 0;
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CBilling_GetRecurringSubscriptionsCount_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.active_subscriptions_count || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            active_subscriptions_count: {
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            inactive_subscriptions_count: {
              _: 2,
              _: _.readInt32,
              _: _.writeInt32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CBilling_GetRecurringSubscriptionsCount_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `Billing.GetRecurringSubscriptionsCount#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetRecurringSubscriptionsCount = _;
})((_ ||= {}));
function _() {
  let { data: _ } = _();
  return _.logged_in
    ? _ === void 0
      ? void 0
      : _.active_subscriptions_count > 0 || _.inactive_subscriptions_count > 0
    : !1;
}
function _() {
  return _(_(_()));
}
function _(_) {
  return {
    queryKey: [`RecurringSubscriptionCount`],
    queryFn: () => _(_),
    staleTime: 1 / 0,
    enabled: _.logged_in,
  };
}
async function _(_) {
  let _ = _.Init(_),
    _ = await _.GetRecurringSubscriptionsCount(_, _);
  if (!_.BSuccess())
    throw `Error loading recurring subscription count: ${_.GetErrorMessage()}`;
  return {
    active_subscriptions_count: _.Body().active_subscriptions_count() ?? 0,
    inactive_subscriptions_count: _.Body().inactive_subscriptions_count() ?? 0,
  };
}
function _() {
  let _ = _(),
    { storeBrowseContext: _ } = _({
      include_assets: !0,
    });
  return _({
    ..._(_, _),
    select: (_) => _.total_items_on_sale,
  });
}
async function _(_, _, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_.steamid),
    _(_, _),
    _ &&
      (_(_, _.data_request),
      _.Body().set_sort_order(5),
      _.Body().set_page_size(_.item_count)),
    _.Body().filters(!0).set_min_discount_percent(10);
  let _ = await _.GetWishlistSortedFiltered(_, _);
  if (!_.BSuccess())
    throw `Error from WishlistService.GetWishlistSortedFiltered: ${_.GetErrorMessage()}`;
  return (
    _ &&
      _.Body()
        .items()
        .forEach((_) => {
          let _ = _.store_item(!1);
          _ && _.cacheStoreItemData(_, _.data_request);
        }),
    {
      appids: _
        ? _.Body()
            .items()
            .slice(0, _.item_count)
            .map((_) => _.appid())
        : [],
      total_items_on_sale: _.Body().items().length,
    }
  );
}
function _(_, _, _) {
  return {
    queryKey: [`GetWishlistItemsOnSale`],
    queryFn: () => _(_, _, _),
    staleTime: 900 * 1e3,
    enabled: _.logged_in,
  };
}
function _(_) {
  let {
      children: _,
      hoverContent: _,
      nDelayShowMS: _,
      bTooltipMode: _,
      popoverProps: _,
    } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Root, {
    open: _,
    onOpenChange: _,
    interactions: {
      hover: (_) => {
        let _ = {
          ..._,
          delay: {
            open: _,
            close: 0,
          },
        };
        return (
          _ &&
            (_ = {
              ..._,
              handleClose: null,
            }),
          _
        );
      },
    },
    ..._,
    children: [
      (0, _.jsx)(_.Anchor, {
        children: _,
      }),
      (0, _.jsx)(_.Positioner, {
        children: (0, _.jsx)(_, {
          children: _,
        }),
      }),
    ],
  });
}
var _ = `Z3KlM4Otpc8-`,
  _ = `Oj6f7oEvtuE-`,
  _ = `lE5kWQHyKWU-`;
function _() {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `142`,
    height: `44`,
    viewBox: `0 0 142 44`,
    fill: `#C7C5C2`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M22,0C10.4,0,0.9,8.9,0,20.2l11.8,4.9c1-0.7,2.2-1.1,3.5-1.1c0.1,0,0.2,0,0.3,0l5.3-7.6c0,0,0-0.1,0-0.1    c0-4.6,3.7-8.3,8.3-8.3c4.6,0,8.3,3.7,8.3,8.3s-3.7,8.3-8.3,8.3c-0.1,0-0.1,0-0.2,0L21.6,30c0,0.1,0,0.2,0,0.3    c0,3.4-2.8,6.2-6.2,6.2c-3,0-5.5-2.2-6.1-5L0.8,28C3.4,37.2,11.9,44,22,44C34.2,44,44,34.1,44,22S34.2,0,22,0z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M13.8,33.4l-2.7-1.1c0.5,1,1.3,1.8,2.4,2.3c2.4,1,5.1-0.1,6.1-2.5c0.5-1.1,0.5-2.4,0-3.6    c-0.5-1.2-1.4-2.1-2.5-2.5c-1.1-0.5-2.4-0.5-3.5-0.1l2.8,1.2c1.8,0.7,2.6,2.7,1.9,4.5C17.6,33.3,15.6,34.1,13.8,33.4z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M34.8,16.3c0-3-2.5-5.5-5.5-5.5c-3.1,0-5.5,2.5-5.5,5.5s2.5,5.5,5.5,5.5C32.3,21.9,34.8,19.4,34.8,16.3z     M25.1,16.3c0-2.3,1.9-4.2,4.2-4.2s4.2,1.9,4.2,4.2c0,2.3-1.9,4.2-4.2,4.2S25.1,18.6,25.1,16.3z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M45.9,6.4c0,1.3-1,2.1-2.1,2.1c-1.1,0-2.1-0.8-2.1-2.1s1-2.1,2.1-2.1C44.9,4.3,45.9,5.1,45.9,6.4z M42,6.4    c0,1.1,0.8,1.8,1.8,1.8c1,0,1.8-0.7,1.8-1.8c0-1.1-0.8-1.8-1.8-1.8C42.8,4.6,42,5.3,42,6.4z M43.8,5.3c0.6,0,0.7,0.3,0.7,0.6    c0,0.3-0.2,0.5-0.4,0.6l0.5,0.9h-0.4l-0.4-0.8h-0.5v0.8h-0.3V5.3L43.8,5.3L43.8,5.3z M43.4,6.3h0.4c0.3,0,0.4-0.2,0.4-0.4    c0-0.2-0.1-0.3-0.4-0.3h-0.4V6.3z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M141.9,12.7c0,1.3-1,2.1-2.1,2.1c-1.1,0-2.1-0.8-2.1-2.1s1-2.1,2.1-2.1C141,10.5,141.9,11.4,141.9,12.7z     M138,12.7c0,1.1,0.8,1.8,1.8,1.8c1,0,1.8-0.7,1.8-1.8c0-1.1-0.8-1.8-1.8-1.8C138.8,10.8,138,11.5,138,12.7z M139.8,11.6    c0.6,0,0.7,0.3,0.7,0.6c0,0.3-0.2,0.5-0.4,0.6l0.5,0.9h-0.4l-0.4-0.8h-0.5v0.8h-0.3v-2.1L139.8,11.6L139.8,11.6z M139.4,12.6h0.4    c0.3,0,0.4-0.2,0.4-0.4c0-0.2-0.1-0.3-0.4-0.3h-0.4V12.6z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M65.9,20.5c-1.1,3-3.6,5-6.5,6.1c-0.3-0.6-0.8-1.4-1.3-1.9c1.8-0.5,3.5-1.5,4.6-2.8H59v-1.9h5l0.4-0.1    L65.9,20.5z M58.4,30.6c0.8-0.8,1.7-2,2.2-3l2.1,1c-0.6,1-1.4,2.3-2.2,3.1L58.4,30.6z M62.7,15.8h-4.1v-2.1h4.1v-1.1h2.5v1.1h5.2    v-1.1h2.5v1.1h4.1v2.1h-4.1v1.1h-2.5v-1.1h-5.2v1.1h-2.5V15.8z M61.4,25.6h12.2v2H61.4V25.6z M75.7,20.8c-0.9,0.7-1.9,1.4-2.8,1.9    c1.3,0.6,2.7,1.1,4.2,1.4c-0.5,0.5-1.2,1.4-1.5,2.1c-2.6-0.7-5-2.1-6.7-3.9v1c0,1-0.2,1.5-0.9,1.8c-0.7,0.3-1.6,0.3-2.7,0.3    c-0.1-0.6-0.4-1.3-0.7-1.9c0.7,0,1.4,0,1.6,0c0.2,0,0.3-0.1,0.3-0.3v-2.9c0.7-0.3,1.4-0.7,2.1-1.2h-7.1v-1.9h9.6l0.5-0.1l1.5,1.3    c-0.9,0.7-2.1,1.5-3.3,2.2c0.3,0.4,0.8,0.8,1.3,1.1c0.9-0.6,2-1.5,2.6-2.2L75.7,20.8z M66.2,28.2c0.3,1,0.6,2.3,0.6,3.1l-2.4,0.4    c0-0.8-0.2-2.2-0.5-3.2L66.2,28.2z M70.5,27.9c0.6,0.9,1.1,2.1,1.3,3l-2.2,0.7c-0.1-0.8-0.6-2.1-1.2-3L70.5,27.9z M74.7,27.6    c0.9,0.9,2,2.2,2.5,3.1l-2.2,1c-0.5-0.9-1.5-2.2-2.4-3.2L74.7,27.6z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M82.2,22.2c-0.8-0.6-2.4-1.4-3.6-2l1.3-1.8c1.1,0.5,2.8,1.3,3.6,1.8L82.2,22.2z M79.3,29.7    c1-1.5,2.5-4,3.6-6.3l1.9,1.6c-1,2.1-2.2,4.4-3.3,6.3L79.3,29.7z M83.3,16.8c-0.7-0.6-2.3-1.6-3.5-2.2l1.4-1.8    c1.1,0.5,2.7,1.4,3.5,2L83.3,16.8z M87.1,17.8c-0.5,0.7-0.9,1.2-1.4,1.8c-0.5-0.4-1.4-1.2-2-1.5c1.5-1.3,2.8-3.5,3.5-5.6l2.4,0.6    c-0.2,0.5-0.4,1-0.7,1.5h9v2.1H87.8C87.6,17.1,87.4,17.4,87.1,17.8l9-0.1v2h-9L87.1,17.8L87.1,17.8z M95.7,20.9c0,5,0,8.5,0.7,8.5    c0.2,0,0.3-1.1,0.3-2.6c0.4,0.5,1,1.2,1.4,1.5c-0.2,2.3-0.6,3.4-2,3.4c-2.5,0-2.8-3.4-2.9-8.7h-8.3v-2.1h9.6v0L95.7,20.9    L95.7,20.9z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M118.4,24.9h-8.1v6.8h-2.6v-6.8h-8v-2.5h8v-6.2h-6.9v-2.4h16.4v2.4h-6.9v6.2h8.1V24.9z M104.2,16.8    c0.7,1.3,1.4,3,1.7,4.2l-2.4,0.7c-0.2-1.1-0.8-2.9-1.5-4.3L104.2,16.8z M111.9,21.1c0.7-1.2,1.4-3,1.8-4.3l2.6,0.7    c-0.7,1.6-1.6,3.3-2.3,4.3L111.9,21.1z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M133.2,14.4c1.9,1.8,4.4,4.3,5.4,6l-2.1,1.5c-0.3-0.5-0.6-1-1.1-1.6c-11,0.5-12.4,0.6-13.5,0.9    c-0.1-0.5-0.5-1.7-0.8-2.3c0.5-0.1,1-0.5,1.7-1.2c0.7-0.6,3-3.1,4.4-5.6l2.5,1c-1.3,1.9-2.9,3.7-4.5,5.2l8.5-0.3    c-0.8-0.9-1.6-1.8-2.4-2.5L133.2,14.4z M122.6,22.6h13.9v9h-2.6v-1h-8.7v1h-2.5V22.6z M125.2,25v3.3h8.7V25H125.2z`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `98`,
    height: `34`,
    viewBox: `0 0 98 34`,
    xmlns: `http://www.w3.org/2000/svg`,
    fill: `#C30A14`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M4.61077 4.15321H19.2526V6.65217H23.617V1.26708H14.6418C14.5362 1.0911 14.4658 0.950311 14.3251 0.809524C13.8675 0.31677 13.1284 0 11.7557 0C10.6646 0 9.85507 0.492754 9.46791 1.26708H0.281574V6.68737H4.61077V4.15321ZM75.6377 0.31677V13.6563H77.0807L76.7288 14.6066C76.6936 14.7474 76.4472 15.1346 76.2008 15.3106C75.9897 15.4865 75.4265 15.5921 74.9689 15.5921H74.4058V18.8654H74.6874C77.2215 18.8654 78.0663 18.9358 78.8054 18.3375C79.2629 17.9855 79.6501 17.5631 80.0021 17.1056V20.3789C80.0021 20.5549 79.8261 20.7309 79.6501 20.7309H56.2091C55.8923 20.7309 55.7516 20.5549 55.7164 20.2381V7.4265H57.6874V19.0062H67.8592C71.2733 19.0062 71.6957 17.3168 71.5901 14.8178V7.4265H73.3147V4.08282H71.6253V0.52795H67.7888V4.08282H61.5942V0.52795H57.6874V4.08282H55.7164V0.52795H51.8095V4.08282H50.8592V7.4265H51.8095V20.6253V21.3644C51.8447 23.3354 52.6542 23.9689 54.6253 23.9689H80.1077C83.1346 23.9689 83.7681 22.4907 83.6625 20.0621V15.029H81.058L81.5507 13.6563H90.7371C91.3354 14.8178 91.7226 15.5569 91.6874 15.4161C91.617 15.3106 91.6522 15.3458 91.7226 15.4513H90.7371V23.9337H94.3975V18.6542C94.8551 19.0062 95.207 19.0414 96.087 19.0414H97.8468V15.4865H96.6149C96.2981 15.4865 95.8406 14.7474 95.6646 14.501C95.6294 14.4658 95.4534 14.1843 95.1718 13.6563C95.5942 13.5859 95.9462 13.4099 96.1574 13.1988C96.8613 12.5652 97.0725 11.8965 97.0725 10.9462V0.31677H75.6377ZM61.559 7.4265H67.7184V15.1346C67.7184 15.3458 67.5424 15.4865 67.3665 15.4865H61.559V7.4265ZM84.4017 10.911H79.5093V8.37681H84.4017V10.911ZM84.4369 5.63147H79.5445V3.09731H84.4369V5.63147ZM93.2008 9.92547C93.2008 10.0663 93.0952 10.4534 92.9545 10.6294C92.7785 10.8054 92.7433 10.911 92.2857 10.911H88.0621V8.37681H93.2008V9.92547ZM93.236 5.63147H88.0973V3.09731H93.236V5.63147ZM23.1594 7.07453H0.63354V9.96066H23.1594V7.07453ZM40.441 17.7391H49.0642V15.0642H39.4203C39.4907 14.4658 39.5963 13.8323 39.6315 13.1988H49.0642V10.5238H39.6315V9.04555H49.0642V6.3354H39.6315V4.75155H49.0642V2.0766H46.7412L47.7267 0.351967H42.9752L41.9897 2.0766H32.8737L31.9586 0.351967H27.6646L28.5797 2.0766H26.0455V4.75155H35.0207C35.0207 5.2795 35.0207 5.80745 35.0207 6.3354H26.0807V9.01035H35.0559C35.0559 9.5383 35.0559 10.0311 35.0559 10.4886H26.0807V13.1636H35.0559C35.0559 13.6915 35.0207 14.0083 35.0207 14.0787C35.0207 14.3954 34.9503 14.7122 34.8799 15.029H26.0807V17.7039H33.648C32.6977 19.0766 30.6563 20.6957 24.5321 20.6957C23.3706 20.6957 21.0476 20.6957 18.6542 20.6957V14.7122H23.441V11.8261H0V14.7122H5.20911L0.0351967 23.7578H4.78675L9.96066 14.7474H14.3954V23.7578H24.4265C30.8323 23.7578 33.7536 22.913 36.1822 20.8012C36.6046 20.4493 36.9917 20.1325 37.3085 19.8157L43.0456 23.7578H50.8592V20.5901H44.6646L40.441 17.7391Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M14.9234 29.2835C14.9234 29.2835 12.6004 29.2835 11.7909 29.2835C11.2629 29.2835 10.9462 29.4947 10.735 29.7059C10.8406 28.7204 11.5445 28.0517 12.4244 27.8405C12.8468 27.7349 13.234 27.6997 13.5859 27.6997C14.4658 27.6997 15.0994 27.9461 15.0994 27.9109C15.1698 27.9461 15.2402 27.9461 15.2754 27.9109C15.3106 27.8757 15.3458 27.8405 15.3458 27.7701V26.6438C15.3458 26.5382 15.2402 26.3974 15.0994 26.3622C15.0994 26.3622 14.2195 26.151 13.058 26.151C12.5652 26.151 12.0021 26.1862 11.4741 26.2918C9.96066 26.6086 8.37681 27.6645 8.30642 29.7411C8.30642 30.1635 8.34162 30.5506 8.41201 30.9026C8.76398 32.4864 10.1015 33.296 11.3333 33.5775C11.8261 33.6831 12.354 33.7183 12.8468 33.7183C14.1491 33.7183 15.2754 33.472 15.2754 33.472C15.3458 33.4368 15.4162 33.4016 15.4162 33.296V32.2753C15.4162 32.2049 15.381 32.0993 15.3106 32.0641C15.2754 32.0289 15.205 32.0289 15.1346 32.0289C15.1346 32.0289 14.2195 32.2753 13.234 32.2753C12.8116 32.2753 12.3892 32.2401 12.0373 32.0993C11.3333 31.8529 10.9814 31.3954 10.8054 30.797H15.0642C15.1698 30.797 15.2402 30.7266 15.2402 30.621V29.5651C15.2402 29.4947 15.205 29.4243 15.1346 29.3539C15.0642 29.3187 14.9938 29.2835 14.9234 29.2835ZM23.4058 28.9668C23.4058 28.6852 23.3706 28.4036 23.3002 28.1221C23.089 27.1366 22.2795 26.3974 20.9068 26.2214C20.3085 26.151 19.5694 26.1158 18.8654 26.1158C17.6335 26.1158 16.5072 26.1862 16.5072 26.1862C16.4017 26.1862 16.3313 26.2566 16.3313 26.3622V33.472C16.3313 33.5423 16.3665 33.6127 16.4017 33.6831C16.4721 33.7535 16.5424 33.7535 16.6128 33.7535H18.2671C18.3727 33.7535 18.4431 33.6831 18.4431 33.5775C18.4431 33.5775 18.4431 28.6852 18.4431 27.5941C18.7598 27.5589 19.0414 27.5589 19.2878 27.5589C19.8861 27.5589 20.3085 27.6293 20.5901 27.7701C20.8364 27.9109 20.9772 28.0517 21.0476 28.3684C21.0828 28.5092 21.0828 28.65 21.0828 28.826C21.0476 29.9875 20.6605 30.2691 19.1118 30.3043C19.0062 30.3043 18.9358 30.3746 18.9358 30.4802C18.9358 31.0434 18.9358 31.2546 18.9358 31.2546C18.9358 31.325 18.971 31.3954 19.0062 31.4657C19.0766 31.5361 19.147 31.5713 19.2174 31.5713C19.2174 31.5713 19.3582 31.5713 19.5694 31.5713H19.6046C20.4141 31.6417 20.8012 32.2753 21.0124 33.0496C21.0476 33.1904 21.0828 33.3664 21.0828 33.5072C21.0828 33.5775 21.118 33.6479 21.1884 33.6831C21.2588 33.7183 21.3292 33.7535 21.3644 33.7535H23.3002C23.4058 33.7535 23.5114 33.6479 23.4762 33.5424C23.4762 33.472 23.441 33.3664 23.441 33.296C23.265 32.5568 22.8427 31.6769 22.2091 31.1138C22.9834 30.6914 23.4058 29.8819 23.4058 28.9668ZM7.91926 28.1573C7.70808 27.1366 6.82816 26.3622 5.45549 26.2214C4.85715 26.151 4.04762 26.1158 3.2733 26.1158C1.90062 26.1158 0.598347 26.1862 0.598347 26.1862C0.492757 26.1862 0.422363 26.2566 0.422363 26.3622V33.472C0.422363 33.5423 0.45756 33.6127 0.492757 33.6831C0.56315 33.7535 0.633543 33.7535 0.703937 33.7535H2.56936C2.67495 33.7535 2.74534 33.6831 2.74534 33.5775C2.74534 33.5775 2.74534 32.6272 2.74534 31.5009C2.78054 31.5361 2.85093 31.5713 2.88613 31.5713C2.88613 31.5713 3.41408 31.6065 4.08282 31.6065C4.61077 31.6065 5.20911 31.5713 5.73706 31.5009C7.14493 31.2546 8.02485 30.2691 8.02485 28.9668C8.02485 28.6852 7.98965 28.4388 7.91926 28.1573ZM5.56108 28.826C5.56108 29.4243 5.3851 29.7059 4.99793 29.9171C4.57557 30.1283 3.87164 30.1987 2.81574 30.1987C2.78054 30.1987 2.78054 30.1987 2.74534 30.1987C2.74534 29.0724 2.74534 28.0165 2.74534 27.5589C3.06211 27.5237 3.34369 27.5237 3.59007 27.5237C4.22361 27.5237 4.71636 27.5941 4.99793 27.7701C5.27951 27.9109 5.42029 28.0869 5.52588 28.4036C5.52588 28.5796 5.56108 28.6852 5.56108 28.826ZM45.5797 26.3622C45.5797 26.3622 44.6998 26.151 43.5383 26.151C43.0456 26.151 42.4824 26.1862 41.9545 26.327C40.441 26.6438 38.8571 27.6997 38.7868 29.7763C38.7868 30.1987 38.822 30.5858 38.8923 30.9378C39.2443 32.5216 40.5818 33.3312 41.8137 33.6127C42.3064 33.7183 42.7992 33.7535 43.3271 33.7535C44.5942 33.7535 45.7557 33.5072 45.7557 33.5072C45.8261 33.472 45.8965 33.4368 45.8965 33.3312V32.3457C45.8965 32.2753 45.8613 32.1697 45.7909 32.1345C45.7205 32.0641 45.6501 32.0641 45.5445 32.0641C45.5445 32.0641 44.6294 32.3105 43.6439 32.2753C43.2215 32.2753 42.7992 32.2401 42.4472 32.0993C41.6729 31.8177 41.3209 31.3953 41.1449 30.6914C41.0745 30.445 41.0745 30.1987 41.0745 29.9171C41.0745 28.826 41.9193 28.0869 42.8344 27.8757C43.2567 27.7701 43.6439 27.7349 43.9959 27.7349C44.8758 27.7349 45.5093 27.9813 45.5093 27.9461C45.5797 27.9813 45.6501 27.9813 45.6853 27.9461C45.7205 27.9109 45.7557 27.8757 45.7557 27.8053V26.679C45.8261 26.5382 45.7205 26.3974 45.5797 26.3622ZM53.5694 26.3974C53.499 26.327 53.4286 26.2918 53.3582 26.2918H46.3892C46.2836 26.2918 46.2133 26.3622 46.2133 26.4678V27.5589C46.2133 27.6293 46.2485 27.6997 46.3188 27.7701C46.3892 27.8405 46.4596 27.8757 46.53 27.8757H48.7826V33.472C48.7826 33.5423 48.8178 33.6127 48.8882 33.6831C48.9586 33.7535 49.029 33.7535 49.0994 33.7535H51C51.1056 33.7535 51.176 33.6831 51.176 33.5775V27.8757H53.5342C53.6398 27.8757 53.7102 27.8053 53.7102 27.6997V26.6086C53.675 26.503 53.6398 26.4326 53.5694 26.3974ZM30.6915 29.2835C30.6915 29.2835 28.2981 29.2835 27.4886 29.2835C26.9607 29.2835 26.6439 29.4947 26.4327 29.7059C26.5031 28.474 27.3126 27.5941 28.5797 27.5941H31.1491C31.2547 27.5941 31.3251 27.5237 31.3251 27.4181V26.4326C31.3251 26.3622 31.2899 26.2918 31.2195 26.2214C31.1491 26.151 31.0787 26.1158 31.0083 26.1158H27.383C25.3768 26.1158 24.0041 27.7701 24.0041 29.6707C24.0041 30.9378 24.0041 33.4368 24.0041 33.4368C24.0041 33.5072 24.0393 33.5775 24.1097 33.6479C24.1801 33.7183 24.2505 33.7183 24.3209 33.7183H26.2567C26.3623 33.7183 26.4327 33.6479 26.4327 33.5424C26.4327 31.7825 26.4327 31.1138 26.4327 30.7618H30.8323C30.9379 30.7618 31.0083 30.6914 31.0083 30.5858V29.5299C31.0083 29.4595 30.9731 29.3891 30.9027 29.3187C30.8323 29.3187 30.7619 29.2835 30.6915 29.2835ZM35.4783 27.8757C35.9006 27.7701 36.2878 27.7349 36.6398 27.7349C37.5197 27.7349 38.1532 27.9813 38.1532 27.9461C38.2236 27.9813 38.294 27.9813 38.3292 27.9461C38.3644 27.9109 38.3996 27.8757 38.3996 27.8053V26.679C38.3996 26.5734 38.294 26.4326 38.1532 26.3974C38.1532 26.3974 37.2733 26.1862 36.1118 26.1862C35.6191 26.1862 35.0559 26.2214 34.528 26.327C33.0145 26.6438 31.4306 27.6997 31.3603 29.7763C31.3603 30.1987 31.3955 30.5858 31.4658 30.973C31.8178 32.5568 33.1553 33.3664 34.3872 33.6479C34.8799 33.7535 35.4079 33.7887 35.9006 33.7887C37.2029 33.7887 38.3292 33.5424 38.3292 33.5424C38.3996 33.5072 38.47 33.472 38.47 33.3664V32.3809C38.47 32.3105 38.4348 32.2049 38.3644 32.1697C38.294 32.0993 38.2236 32.0993 38.118 32.0993C38.118 32.0993 37.2029 32.3457 36.2174 32.3457C35.795 32.3457 35.3375 32.3105 35.0207 32.1697C34.3168 31.9233 33.9296 31.4657 33.7184 30.8674H38.0124C38.118 30.8674 38.1884 30.797 38.1884 30.6914V29.6355C38.1884 29.5651 38.1532 29.4947 38.0828 29.4243C38.0124 29.3539 37.942 29.3539 37.8716 29.3539H34.6687C34.1408 29.3539 33.824 29.5651 33.6128 29.7763C33.8944 28.7556 34.6335 28.0869 35.4783 27.8757Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M75.7433 29.1779C75.3913 27.594 74.1242 26.7845 73.0683 26.5381C72.646 26.4325 72.2588 26.3973 71.8364 26.3973C71.4141 26.3973 71.0269 26.4325 70.6046 26.5381C69.3375 26.8549 67.8944 27.8756 67.8944 30.1282C67.8944 30.5857 67.9296 31.0081 68.0352 31.3601C68.352 32.8031 69.4079 33.5423 70.4286 33.8238C70.9213 33.9646 71.4141 34.035 71.9068 34.035C72.3644 34.035 72.8219 33.9646 73.2795 33.859C74.6522 33.5071 75.8841 32.3104 75.8841 30.269C75.8489 29.8466 75.8137 29.4946 75.7433 29.1779ZM73.4907 30.093C73.4907 31.7824 72.5404 32.5568 71.766 32.5216C71.2029 32.5216 70.5694 32.1344 70.323 31.0785C70.2526 30.8321 70.2174 30.5154 70.2174 30.1634C70.2526 28.6147 71.0621 27.8756 71.9068 27.8756C72.5756 27.8756 73.1387 28.298 73.3851 29.2483C73.4555 29.4946 73.4907 29.7762 73.4907 30.093ZM67.1201 26.6085C67.0497 26.5381 66.9793 26.5381 66.9089 26.5381H65.1491C65.0435 26.5381 64.9379 26.6085 64.9379 26.7141C64.9379 26.7141 64.9379 30.7969 64.9379 31.6768C64.9027 32.1696 64.7267 32.3808 64.1636 32.416C63.6356 32.3808 63.6004 32.3456 63.4948 32.064C63.4948 31.9936 63.4948 31.888 63.4948 31.8176V26.8197C63.4948 26.7493 63.4596 26.6789 63.4244 26.6085C63.354 26.5381 63.2837 26.5381 63.2133 26.5381H61.4886C61.383 26.5381 61.2774 26.6085 61.2774 26.7141V31.8176C61.207 32.24 60.9959 32.3808 60.4679 32.3808C59.9752 32.3456 59.94 32.2752 59.8344 31.9936C59.8344 31.9232 59.8344 31.8528 59.8344 31.7472C59.8344 30.8673 59.8344 26.7845 59.8344 26.7845C59.8344 26.7141 59.7992 26.6437 59.764 26.5733C59.6936 26.5029 59.6232 26.5029 59.5528 26.5029H57.793C57.6874 26.5029 57.5818 26.5733 57.5818 26.6789C57.5818 26.6789 57.5818 29.5298 57.5818 30.9025C57.5818 31.2193 57.5818 31.5361 57.6522 31.8176C57.793 32.3456 58.0393 32.8735 58.5673 33.2607C59.06 33.6479 59.7288 33.8238 60.6087 33.8238C61.383 33.8238 61.9462 33.7534 62.4037 33.6127C62.8613 33.7534 63.4244 33.8238 64.1988 33.8238H64.234C66.4514 33.8238 67.1553 32.4512 67.1553 31.0081C67.1553 29.6354 67.1553 26.7845 67.1553 26.7845C67.2257 26.7493 67.1905 26.6789 67.1201 26.6085ZM89.4348 32.2752C89.0124 32.3456 88.6253 32.416 88.3085 32.416C87.3582 32.3808 86.9358 32.1344 86.7598 31.4657C86.7246 31.3249 86.7246 31.1489 86.7246 30.9377C86.7246 30.0578 86.7246 26.7141 86.7246 26.7141C86.7246 26.6437 86.6894 26.5733 86.6542 26.5029C86.5839 26.4325 86.5135 26.3973 86.4431 26.3973H84.5424C84.4369 26.3973 84.3313 26.4677 84.3313 26.5733C84.3313 26.5733 84.3313 29.565 84.3313 30.9377C84.3313 31.2193 84.3313 31.5009 84.4017 31.7824C84.5424 32.3456 84.824 32.8735 85.352 33.2607C85.8799 33.6479 86.6191 33.859 87.5694 33.859C88.4845 33.859 89.0828 33.7534 89.5756 33.6127C89.646 33.5775 89.7164 33.5423 89.7164 33.4367V32.4864C89.7164 32.416 89.6812 32.3456 89.6108 32.2752C89.5756 32.3104 89.5052 32.2752 89.4348 32.2752ZM81.0932 26.5381C80.4948 26.4677 79.7557 26.4325 79.0518 26.4325C77.8199 26.4325 76.6936 26.5029 76.6936 26.5029C76.588 26.5029 76.5176 26.5733 76.5176 26.6789V33.6479C76.5176 33.7183 76.5176 33.7886 76.588 33.859C76.6584 33.9294 76.7288 33.9294 76.7992 33.9294H78.4534C78.559 33.9294 78.6646 33.859 78.6646 33.7534C78.6646 33.7534 78.6646 28.9667 78.6646 27.9108C78.9814 27.8756 79.2629 27.8756 79.5445 27.8756C80.1429 27.8756 80.5652 27.946 80.8468 28.0868C81.0932 28.2276 81.234 28.3684 81.3044 28.6851C81.3395 28.8259 81.3396 28.9667 81.3396 29.1427C81.3044 30.3042 80.882 30.5505 79.3685 30.5857C79.2629 30.5857 79.1926 30.6561 79.1926 30.7617C79.1926 31.3249 79.1926 31.5361 79.1926 31.5361C79.1926 31.6064 79.2277 31.6768 79.2629 31.712C79.3333 31.7824 79.4037 31.7824 79.4741 31.8176C79.4741 31.8176 79.6149 31.8176 79.8261 31.8176C79.8613 31.8176 79.8965 31.8176 79.9669 31.8176C80.7412 31.888 81.058 32.4512 81.234 33.1551C81.2692 33.3311 81.3044 33.5423 81.3044 33.7183C81.3044 33.7886 81.3395 33.859 81.4099 33.8942C81.4803 33.9294 81.5507 33.9646 81.5859 33.9646H83.5217C83.6273 33.9646 83.7329 33.859 83.6977 33.7534C83.6977 33.6831 83.6625 33.5775 83.6625 33.5071C83.4865 32.8031 83.0642 31.9232 82.4306 31.3601C83.205 30.9377 83.5921 30.1634 83.6273 29.2483C83.6273 28.9667 83.5921 28.6851 83.5569 28.4035C83.2754 27.4532 82.4306 26.6789 81.0932 26.5381ZM94.6087 26.5733C93.94 26.4677 92.9193 26.4325 92.0745 26.4325C91.1946 26.4325 90.4555 26.4677 90.4555 26.4677C90.3499 26.4677 90.2795 26.5381 90.2795 26.6437V26.8901V27.8404V33.5775C90.2795 33.6479 90.2795 33.7183 90.3499 33.7886C90.4203 33.859 90.4907 33.859 90.5611 33.859H92.3209C92.4265 33.859 92.4969 33.7886 92.4969 33.6831C92.4969 33.7183 92.5321 33.7534 92.5673 33.7886C92.6377 33.859 92.7081 33.8942 92.7785 33.8942C92.7785 33.8942 92.8841 33.8942 93.06 33.8942C93.588 33.8942 94.6439 33.859 95.3478 33.6831C96.8261 33.2959 97.882 32.24 97.8468 30.0578C97.8468 29.7058 97.8116 29.3891 97.7412 29.1075C97.2836 27.418 95.8406 26.7493 94.6087 26.5733ZM95.383 29.917C95.383 31.4305 94.7847 32.3808 92.6025 32.4864C92.5321 32.4864 92.4969 32.5216 92.4617 32.592V27.946C92.6377 27.946 92.8137 27.946 92.9545 27.946C94.4679 27.9812 95.1014 28.4036 95.3126 29.3187C95.3478 29.4946 95.383 29.6706 95.383 29.917Z`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `100`,
    height: `28`,
    viewBox: `0 0 100 28`,
    fill: `#C30A14`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M30.4,15.3h3.5l-1.8-6.8L30.4,15.3z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M0.7,0.2c0,0,0,18.2,0,27.2c32.2,0,92.8,0,92.8,0V0.2H0.7z M15.8,21.8h-2.9L8.1,5.8h3.2l3.1,12.1l3-12.1h3.3
	L15.8,21.8z M35.6,21.8l-1.1-4.1h-4.8c0,0-0.8,3.2-1,3.9c-1,0.1-3.3,0-3.3,0L30,5.8h4.3l4.5,16.1H35.6z M56.1,21.8h-9.9V5.8h3.2
	v13.3H56L56.1,21.8L56.1,21.8z M67.7,21.8h-2.9L59.9,5.8h3.3l3.1,11.9l3-11.9h3.3L67.7,21.8z M85.9,7.8h-4.3c0,0,0,1.5,0,2.3
	c1.3,0,2.6,0,4,0c0,0.7,0,1.4,0,2.1c-1.3,0-2.6,0-4,0c0,0.8,0,1.6,0,2.4c1.4,0,4.3,0,4.3,0v2.1h-6.7V5.8h6.7V7.8z`,
      }),
      (0, _.jsxs)(`g`, {
        children: [
          (0, _.jsx)(`path`, {
            _: `M94.5,0.4h-0.6V0.2h1.4v0.2h-0.6v1.5h-0.2V0.4z`,
          }),
          (0, _.jsx)(`path`, {
            _: `M97.3,0.2v1.7h-0.2V0.6l-0.6,1.3h-0.2l-0.6-1.3v1.3h-0.2V0.2h0.2l0.7,1.4l0.6-1.4H97.3z`,
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { href: _, ..._ } = _,
    _ = _();
  return (
    _?.startsWith(_.STORE_BASE_URL) && (_ = _(_, _)),
    (0, _.jsx)(_, {
      href: _,
      color: `dull-11`,
      target: `_blank`,
      whiteSpace: `nowrap`,
      ..._,
    })
  );
}
function _(_) {
  let _ = _();
  return _ === `initial` || _ === `sm`
    ? null
    : (0, _.jsx)(`footer`, {
        className: (0, _.default)(_, _.className),
        children: (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsxs)(_, {
              align: `center`,
              justify: `between`,
              children: [
                (0, _.jsx)(_, {
                  href: _.STORE_BASE_URL,
                  children: (0, _.jsx)(_, {}),
                }),
                (0, _.jsxs)(_, {
                  className: _,
                  children: [
                    (0, _.jsx)(_, {
                      href: `https://about.steamchina.com/upgrade_announcement.html`,
                      children: `公告`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(_, {
                      href: _.STORE_BASE_URL + `about`,
                      children: `关于蒸汽平台`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(_, {
                      href: _.STORE_BASE_URL + `steam_refunds`,
                      children: `退款政策`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(_, {
                      href: _.STORE_BASE_URL + `subscriber_agreement`,
                      children: `软件许可服务协议`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(_, {
                      href: _.STORE_BASE_URL + `privacy_agreement`,
                      children: `个人信息保护政策`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(_, {
                      href: _.STORE_BASE_URL + `data_outbound`,
                      children: `个人信息出境告知书`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(_, {
                      href: `https://about.steamchina.com/content_report.html`,
                      children: `不良内容举报投诉`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(`br`, {}),
                    (0, _.jsx)(_, {
                      href: `https://about.steamchina.com/infringement_report.html`,
                      children: `侵权投诉`,
                    }),
                    `\xA0 | \xA0`,
                    (0, _.jsx)(_, {
                      href: `https://about.steamchina.com/parentguardianship_agreement.html`,
                      children: `家长监护`,
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsx)(`hr`, {}),
            (0, _.jsxs)(_, {
              align: `center`,
              justify: `between`,
              children: [
                (0, _.jsxs)(_, {
                  gap: `2`,
                  children: [
                    (0, _.jsx)(_, {
                      href: `https://www.wanmei.com/`,
                      children: (0, _.jsx)(_, {}),
                    }),
                    (0, _.jsx)(_, {
                      href: `https://www.valvesoftware.com`,
                      children: (0, _.jsx)(_, {}),
                    }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  gap: `5`,
                  children: [
                    (0, _.jsx)(_, {
                      hoverContent: (0, _.jsx)(`img`, {
                        alt: ``,
                        src:
                          _.STORE_CDN_URL +
                          `public/shared/images/footer/Weibo-QR.png?v=2`,
                      }),
                      children: (0, _.jsxs)(_, {
                        align: `center`,
                        children: [
                          (0, _.jsx)(`img`, {
                            alt: `微博`,
                            src:
                              _.STORE_CDN_URL +
                              `public/shared/images/footer/weibo_logo.svg?v=1`,
                          }),
                          (0, _.jsx)(_, {
                            children: `微博`,
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)(_, {
                      hoverContent: (0, _.jsx)(`img`, {
                        alt: ``,
                        src:
                          _.STORE_CDN_URL +
                          `public/shared/images/footer/WeChat-QR.png?v=2`,
                      }),
                      children: (0, _.jsxs)(_, {
                        align: `center`,
                        children: [
                          (0, _.jsx)(`img`, {
                            alt: `微信`,
                            src:
                              _.STORE_CDN_URL +
                              `public/shared/images/footer/wechat_logo.svg?v=1`,
                          }),
                          (0, _.jsx)(_, {
                            children: `微信`,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, _.jsxs)(_, {
              align: `center`,
              justify: `between`,
              marginTop: `5`,
              children: [
                (0, _.jsxs)(_, {
                  children: [
                    `© `,
                    new Date().getFullYear(),
                    ` Valve Corporation 版权所有，完美世界已获授权。`,
                    (0, _.jsx)(`br`, {}),
                    `所有商标均属于其在美国或其他国家的拥有者。`,
                  ],
                }),
                (0, _.jsxs)(_, {
                  children: [
                    `© 完美世界征奇(上海)多媒体科技有限公司 版权所有。`,
                    (0, _.jsx)(`br`, {}),
                    (0, _.jsx)(_, {
                      href: `https://beian.miit.gov.cn`,
                      children: `沪ICP备 17051673号-4`,
                    }),
                    (0, _.jsx)(`br`, {}),
                    `增值电信业务经营许可证沪B2-20180406`,
                    (0, _.jsx)(`br`, {}),
                    `沪网文：(2023) 3444-243号`,
                    (0, _.jsx)(`br`, {}),
                    `联网备案号：沪公网安31011002005473号`,
                    (0, _.jsx)(`br`, {}),
                    `举报电话: 021-51796887 举报邮箱: feedback@pwrd.com`,
                  ],
                }),
              ],
            }),
          ],
        }),
      });
}
var _ = {};
(_.arabic = () => _(() => import(`./TrJW4YjE.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./CmSCuj9F.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./Bcqj-yX9.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./C8LMZtdG.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./D8sh6M_E.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./CVdGXsGJ.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./ALw9WebG.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./Z0vaB1X6.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./BmAfZGOx.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./2EtwW25Q.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./D99hloAm.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./TEYaEDzP.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./BXrqjxNe.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./CQn-CF8y.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./U1pv2K3U.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./9BljKl4-.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./CChq3nwH.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./Blu1d9Z5.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./DmqdN3yo.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./KEIVB8aZ.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./Bva7Sidn.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./C-VLbDw-.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./VbPteYh7.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./d4ZYcKYB.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./BVd_xq4v.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./BCw3azU4.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./Cz5kqhv-.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./BGfcOwcC.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./j1LZrmVQ.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./obTdC1je.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./BPDy8dkX.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _() {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `142`,
    height: `34`,
    viewBox: `0 0 142 34`,
    fill: `currentColor`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M16.832 0C7.95936 0 0.690707 6.8414 0 15.5358L9.05289 19.2787C9.81996 18.7541 10.7466 18.4467 11.7436 18.4467C11.8329 18.4467 11.9219 18.4498 12.0101 18.4548L16.0359 12.6194C16.0359 12.5916 16.0356 12.5645 16.0356 12.537C16.0356 9.02463 18.8927 6.16711 22.4054 6.16711C25.9178 6.16711 28.7749 9.02463 28.7749 12.537C28.7749 16.0493 25.9178 18.9072 22.4054 18.9072C22.3569 18.9072 22.3088 18.9061 22.2607 18.9049L16.5189 23.0018C16.522 23.0763 16.5247 23.1523 16.5247 23.2278C16.5247 25.8647 14.38 28.009 11.7436 28.009C9.42936 28.009 7.49431 26.3572 7.05598 24.1698L0.581889 21.4933C2.58643 28.5828 9.09985 33.7805 16.832 33.7805C26.1606 33.7805 33.7225 26.2182 33.7225 16.8908C33.7225 7.56189 26.1602 0 16.832 0Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M10.5846 25.6287L8.50977 24.7715C8.87746 25.537 9.51356 26.1781 10.3581 26.5301C12.184 27.2907 14.2889 26.4244 15.0499 24.597C15.4184 23.7135 15.4207 22.7379 15.0553 21.8521C14.6906 20.9659 14.0026 20.2748 13.1179 19.906C12.2401 19.5406 11.2997 19.5539 10.4735 19.8659L12.6166 20.7521C13.9633 21.3134 14.6001 22.8597 14.0389 24.2064C13.4787 25.5534 11.9312 26.1903 10.5846 25.6287Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M26.6497 12.5368C26.6497 10.1966 24.746 8.29248 22.4054 8.29248C20.0653 8.29248 18.1611 10.1966 18.1611 12.5368C18.1611 14.8773 20.0653 16.7807 22.4054 16.7807C24.746 16.7803 26.6497 14.8769 26.6497 12.5368ZM19.2241 12.5295C19.2241 10.7686 20.6517 9.34133 22.4127 9.34133C24.1736 9.34133 25.6012 10.7686 25.6012 12.5295C25.6012 14.2904 24.1736 15.7177 22.4127 15.7177C20.6517 15.7177 19.2241 14.2901 19.2241 12.5295Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M59.9854 10.1185L58.4527 12.8127C57.2721 11.9879 55.6722 11.4915 54.2754 11.4915C52.6791 11.4915 51.6914 12.1523 51.6914 13.336C51.6914 14.7741 53.446 15.1087 56.0538 16.0447C58.8571 17.036 60.4684 18.201 60.4684 20.7685C60.4684 24.2813 57.706 26.2541 53.7356 26.2541C51.8005 26.2541 49.4663 25.7545 47.6719 24.6629L48.7899 21.6761C50.2476 22.446 51.9913 22.9027 53.5458 22.9027C55.6411 22.9027 56.6371 22.1296 56.6371 20.9867C56.6371 19.679 55.1183 19.286 52.6667 18.4741C49.8727 17.5412 47.9366 16.3172 47.9366 13.4756C47.9366 10.2711 50.5031 8.43066 54.1958 8.43066C56.7695 8.43066 58.838 9.24616 59.9854 10.1185Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M71.9674 11.5261V25.6635H68.3585V11.5261H63.1201V8.43066H77.1903V11.5261H71.9674Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M84.7983 11.5168V15.3998H91.7049V18.4953H84.7983V22.5396H92.8116V25.6635H81.1904V8.43066H92.8116V11.5168H84.7983Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M100.866 22.3173L99.7256 25.6635H95.9424L102.404 8.43066H106.036L112.68 25.663H108.769L107.604 22.3168L100.866 22.3173ZM104.2 12.5412L101.846 19.4411H106.602L104.2 12.5412Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M131.201 15.0916L126.485 25.1614H124.449L119.809 15.1816V25.6635H116.354V8.43066H119.802L125.593 20.8704L131.179 8.43066H134.657V25.6635H131.202L131.201 15.0916Z`,
      }),
      (0, _.jsx)(`path`, {
        _: `M141.634 9.63026C141.634 11.1113 140.525 12.0343 139.251 12.0343C137.973 12.0343 136.86 11.1113 136.86 9.63026C136.86 8.14976 137.973 7.23291 139.251 7.23291C140.525 7.23291 141.634 8.14976 141.634 9.63026ZM137.261 9.63026C137.261 10.8693 138.154 11.6475 139.251 11.6475C140.344 11.6475 141.233 10.8693 141.233 9.63026C141.233 8.38763 140.344 7.62126 139.251 7.62126C138.157 7.62126 137.261 8.39694 137.261 9.63026ZM139.284 8.40521C139.902 8.40521 140.11 8.73203 140.11 9.08522C140.11 9.40893 139.918 9.62612 139.684 9.73678L140.238 10.7746H139.785L139.318 9.85469H138.836V10.7746H138.459V8.40521H139.284ZM138.84 9.5077H139.261C139.533 9.5077 139.694 9.33654 139.694 9.12142C139.694 8.90423 139.579 8.76461 139.26 8.76461H138.839V9.5077H138.84Z`,
      }),
    ],
  });
}
function _() {
  let _ = (0, _.useId)();
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `95`,
    height: `27`,
    viewBox: `0 0 95 27`,
    fill: `currentColor`,
    children: [
      (0, _.jsxs)(`g`, {
        clipPath: `url(#${_})`,
        children: [
          (0, _.jsx)(`path`, {
            _: `M29.1289 15.142H32.6305L30.8018 8.41162L29.1289 15.142Z`,
          }),
          (0, _.jsx)(`path`, {
            _: `M0 27H91.2646V0H0V27ZM14.822 21.4914H11.9334L7.21098 5.58171H10.3333L13.3777 17.591L16.3442 5.58171H19.6172L14.822 21.4914ZM34.3041 21.4914L33.2391 17.5127H28.5218C28.5218 17.5127 27.701 20.7134 27.5347 21.4131C26.584 21.4862 24.2617 21.4131 24.2617 21.4131L28.7504 5.58171H33.0105L37.4992 21.4914H34.3041ZM54.3889 21.4914H44.6478V5.58171H47.7702V18.8128H54.3889V21.4914ZM65.8028 21.4914H62.987L58.1918 5.58171H61.392L64.4365 17.4396L67.4029 5.58171H70.598L65.8028 21.4914ZM83.7627 7.64939H79.5026V9.9416H83.3835V12.0041H79.5026V14.3746H83.7627V16.4423H77.144V5.58171H83.7627V7.64939Z`,
          }),
          (0, _.jsx)(`path`, {
            _: `M93.4622 0C94.3194 0 95 0.699671 95 1.57687C95 2.45407 94.3194 3.15896 93.4518 3.15896C92.5842 3.15896 91.8984 2.46451 91.8984 1.57687C91.8984 0.689228 92.5946 0 93.4518 0H93.457H93.4622ZM93.457 0.245407C92.766 0.245407 92.1998 0.84065 92.1998 1.57687C92.1998 2.31309 92.766 2.91356 93.4622 2.91356C94.1584 2.91878 94.7143 2.32876 94.7143 1.58209C94.7143 0.835428 94.1584 0.245407 93.4622 0.245407H93.457ZM93.1609 2.49062H92.8803V0.736221C93.0258 0.715336 93.1661 0.69445 93.3739 0.69445C93.6388 0.69445 93.8155 0.751886 93.9194 0.824986C94.0233 0.903307 94.0804 1.0234 94.0804 1.19049C94.0804 1.42023 93.9246 1.56121 93.7375 1.61864V1.63431C93.8882 1.66564 93.9973 1.80139 94.0285 2.06246C94.07 2.33398 94.1116 2.43841 94.1428 2.49584H93.8466C93.8051 2.43841 93.7635 2.27654 93.7272 2.0468C93.6856 1.82228 93.5713 1.73874 93.3479 1.73874H93.1557V2.49584L93.1609 2.49062ZM93.1609 1.51944H93.3635C93.5921 1.51944 93.7895 1.43589 93.7895 1.21659C93.7895 1.05995 93.6752 0.908528 93.3635 0.908528C93.2752 0.908528 93.2076 0.91375 93.1609 0.924193V1.51944Z`,
          }),
        ],
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          _: _,
          children: (0, _.jsx)(`rect`, {
            width: `95`,
            height: `27`,
            fill: `white`,
          }),
        }),
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `24`,
    height: `22`,
    viewBox: `0 0 24 22`,
    fill: `currentColor`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M5.20232 2.04977C7.95386 4.13518 10.9135 8.36354 12.0001 10.6327C13.0868 8.3637 16.0462 4.13514 18.7978 2.04977C20.7832 0.545013 24 -0.619279 24 3.08556C24 3.82547 23.5798 9.30116 23.3333 10.1901C22.4767 13.2807 19.355 14.069 16.5782 13.5919C21.432 14.4259 22.6667 17.1884 20.0001 19.9508C14.9357 25.1972 12.7211 18.6345 12.1534 16.9528C12.0494 16.6446 12.0007 16.5003 12 16.623C11.9993 16.5003 11.9506 16.6446 11.8466 16.9528C11.2791 18.6345 9.06454 25.1974 3.99987 19.9508C1.33323 17.1884 2.56794 14.4257 7.42179 13.5919C4.64492 14.069 1.5232 13.2807 0.666658 10.1901C0.420196 9.30108 0 3.82538 0 3.08556C0 -0.619279 3.21689 0.545013 5.20218 2.04977H5.20232Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `22`,
    height: `22`,
    viewBox: `0 0 22 22`,
    fill: `currentColor`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M10.9998 0C4.92482 0 0 4.94301 0 11.0404C0 16.2179 3.55161 20.5625 8.34267 21.7558V14.4144H6.07452V11.0404H8.34267V9.58661C8.34267 5.82889 10.0371 4.08716 13.7128 4.08716C14.4097 4.08716 15.6122 4.2245 16.1041 4.3614V7.4196C15.8445 7.39221 15.3935 7.37853 14.8334 7.37853C13.0299 7.37853 12.333 8.06435 12.333 9.84716V11.0404H15.9259L15.3086 14.4144H12.333V22C17.7796 21.3398 22 16.6851 22 11.0404C21.9996 4.94301 17.0747 0 10.9998 0Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `30`,
    height: `22`,
    viewBox: `0 0 30 22`,
    fill: `currentColor`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M11.9318 6.84835V15.7121L19.7727 11.2801L11.9318 6.84835ZM29.3731 18.5011C29.028 19.7918 28.0114 20.8083 26.7208 21.1533C24.3813 21.7803 14.9999 21.7803 14.9999 21.7803C14.9999 21.7803 5.61873 21.7803 3.27924 21.1533C1.98856 20.8083 0.971973 19.7918 0.626931 18.5011C0 16.1616 0 11.2802 0 11.2802C0 11.2802 0 6.3991 0.626931 4.05945C0.971973 2.76859 1.98843 1.7522 3.27924 1.40697C5.61873 0.780272 14.9999 0.780273 14.9999 0.780273C14.9999 0.780273 24.3813 0.780272 26.7208 1.40697C28.0114 1.7522 29.028 2.76859 29.3731 4.05945C30 6.3991 30 11.2803 30 11.2803C30 11.2803 30 16.1616 29.3731 18.5011Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `20`,
    height: `22`,
    viewBox: `0 0 20 22`,
    fill: `currentColor`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M11.9027 9.45261L19.3482 0.560547H17.5838L11.119 8.2814L5.95547 0.560547H0L7.8082 12.2358L0 21.5605H1.76443L8.59152 13.4071L14.0445 21.5605H20L11.9023 9.45261H11.9027ZM9.48608 12.3387L8.69495 11.1761L2.40018 1.92521H5.11025L10.1902 9.39099L10.9813 10.5536L17.5847 20.2579H14.8746L9.48608 12.3392V12.3387Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    direction: `column`,
    gap: `4`,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    level: `3`,
    color: `dull-12`,
    weight: `heavy`,
    className: _,
    ..._,
  });
}
function _(_) {
  let { href: _, ..._ } = _,
    _ = _();
  return (
    _?.startsWith(_.STORE_BASE_URL) && (_ = _(_, _)),
    (0, _.jsx)(_, {
      href: _,
      color: `dull-11`,
      target: `_blank`,
      whiteSpace: `nowrap`,
      ..._,
    })
  );
}
function _() {
  let _ = _();
  return (0, _.jsxs)(_, {
    gridArea: `main`,
    direction: `column`,
    gap: `5`,
    align: `start`,
    children: [
      (0, _.jsxs)(_, {
        gap: `6`,
        align: `center`,
        children: [
          (0, _.jsx)(_, {
            href: _.STORE_BASE_URL,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            href: `https://valvesoftware.com`,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        _: `p`,
        size: `1`,
        className: _,
        children: _(
          _.Localize(`#footer_legal_notice`, new Date().getFullYear()),
        ),
      }),
      (0, _.jsxs)(_, {
        gap: `6`,
        align: `center`,
        className: _,
        children: [
          (0, _.jsx)(_, {
            href: `https://www.youtube.com/@Steam`,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            href: `https://bsky.app/profile/steampowered.com`,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            href: `https://facebook.com/steam`,
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            href: `https://twitter.com/steam`,
            children: (0, _.jsx)(_, {}),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        gap: `5`,
        children: [
          _ === `initial` &&
            !_.IN_MOBILE_WEBVIEW &&
            (0, _.jsx)(_, {
              href: _.STORE_BASE_URL + `mobile/`,
              children: _.Localize(`#footer_link_get_mobile_apps`),
            }),
          _() &&
            (0, _.jsx)(_, {
              color: `dull`,
              onClick: _,
              children: _.Localize(`#footer_view_mobile_website`),
            }),
        ],
      }),
    ],
  });
}
function _(_) {
  return (
    (0, _.use)(_.Ready()),
    (0, _.jsx)(_, {
      breakpoints: {
        _: 700,
      },
      children: (0, _.jsxs)(_, {
        _: `footer`,
        areas: {
          initial: `"steam valve" "legal more" "main main"`,
          _: `"steam valve legal more" "main main empty empty"`,
          _: `"main steam valve legal more"`,
        },
        columns: {
          initial: `min-content min-content`,
          _: `min-content min-content max-content max-content`,
          _: `fit-content(400px) max-content max-content max-content max-content`,
        },
        className: (0, _.default)(_, _.className),
        justifyContent: {
          initial: `start`,
          _: `start`,
          _: `center`,
        },
        gap: {
          initial: `6`,
          _: `9`,
        },
        padding: `7`,
        zIndex: `1`,
        textAlign: `start`,
        _: `footer`,
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsxs)(_, {
            gridArea: `steam`,
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(`#footer_link_header_steam`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `about/`,
                children: _.Localize(`#footer_link_about_steam`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `subscriber_agreement/`,
                children: _.Localize(`#footer_link_steam_ssa`),
              }),
              (0, _.jsx)(_, {
                href: _.PARTNER_BASE_URL,
                children: _.Localize(`#footer_link_steamworks`),
              }),
              (0, _.jsx)(_, {
                href: _.PARTNER_BASE_URL + `steamdirect`,
                children: _.Localize(`#footer_link_steam_distribution`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `digitalgiftcards/`,
                children: _.Localize(`#footer_link_gift_cards`),
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            gridArea: `valve`,
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(`#footer_link_header_valve`),
              }),
              (0, _.jsx)(_, {
                href: `https://valvesoftware.com/about`,
                children: _.Localize(`#footer_link_about_valve`),
              }),
              (0, _.jsx)(_, {
                href: `https://valvesoftware.com/`,
                children: _.Localize(`#footer_link_jobs`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `hardware/`,
                children: _.Localize(`#footer_link_hardware`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `hardware_recycling/`,
                children: _.Localize(`#footer_link_recycling`),
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            gridArea: `legal`,
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(`#footer_link_header_legal`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `privacy_agreement/`,
                children: _.Localize(`#footer_link_privacy`),
              }),
              (0, _.jsx)(_, {
                href: `https://help.steampowered.com/faqs/view/10BB-D27A-6378-4436`,
                children: _.Localize(`#footer_link_accessibility`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `legal/`,
                children: _.Localize(`#footer_link_notices_and_policies`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `account/cookiepreferences/`,
                children: _.Localize(`#footer_link_cookies`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `steam_refunds/`,
                children: _.Localize(`#footer_link_refunds`),
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            gridArea: `more`,
            children: [
              (0, _.jsx)(_, {
                children: _.Localize(`#footer_link_header_more`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `about/`,
                children: _.Localize(`#footer_link_get_steam`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `mobile/`,
                children: _.Localize(`#footer_link_get_mobile_apps`),
              }),
              (0, _.jsx)(_, {
                href: _.HELP_BASE_URL,
                children: _.Localize(`#footer_link_get_support`),
              }),
              (0, _.jsx)(_, {
                href: _.STORE_BASE_URL + `account/`,
                children: _.Localize(`#footer_link_my_account`),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function _(_) {
  return _()
    ? null
    : (0, _.jsx)(_, {
        controller: `footer`,
        method: `footer`,
        children: _(_.EREALM)
          ? (0, _.jsx)(_, {
              ..._,
            })
          : (0, _.jsx)(_, {
              ..._,
            }),
      });
}
var _ = class extends _ {
  GetString(_) {
    return Promise.resolve(localStorage.getItem(_));
  }
  StoreString(_, _) {
    return localStorage.setItem(_, _), Promise.resolve();
  }
  RemoveObject(_) {
    return localStorage.removeItem(_), Promise.resolve();
  }
};
function _(_) {
  let { steamid: _, children: _ } = _,
    _ = _.useRef(`steamInterface` in _ ? _.steamInterface : void 0),
    _ = _.useRef(void 0),
    _ = `strWebAPIToken` in _ ? _.strWebAPIToken : void 0;
  return (0, _.jsx)(_, {
    useActiveSteamInterface: _.useCallback(
      () => ((_.current ||= new _(_.WEBAPI_BASE_URL, _, !1, _)), _.current),
      [_],
    ),
    useStorage: _.useCallback(() => ((_.current ||= new _()), _.current), []),
    children: (0, _.jsx)(_, {
      steamid: _,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
async function _(_) {
  try {
    let _ = await (
      await fetch(`${_.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
        method: `POST`,
        body: new URLSearchParams({
          redir: window.location.href,
        }),
        credentials: `include`,
        mode: `cors`,
      })
    ).json();
    if (!_ || !_.success)
      return console.error(`ajaxrefresh failed: "${_.error}"`), ``;
    if (_.success) {
      let _ = await (
        await fetch(_.login_url, {
          method: `POST`,
          body: new URLSearchParams({
            ..._,
            prior: _,
          }),
        })
      ).json();
      return !_ || _.result !== 1
        ? (console.error(`Token refresh: failed to set token: ${_.result}`), ``)
        : _.token;
    }
  } catch (_) {
    console.error(`Failed to refresh token: ${_}`);
  }
  return ``;
}
var _ = `46px`,
  _ = `_9ATfP764qCw-`,
  _ = `v3B63V0zBTo-`,
  _ = `rGuH1gD4ryg-`,
  _ = `WCG-2-OYepA-`,
  _ = `_1T0orHOy3Sc-`,
  _ = `_9FBQzVV7laY-`,
  _ = `fqnYTxNXL9w-`,
  _ = `Arq9lUyXVpM-`,
  _ = `_5LVptMyFAZw-`,
  _ = `EYF1OQwj3TE-`,
  _ = `AGqaFbqRVUc-`,
  _ = `dF8HGBmYIK8-`,
  _ = `A6D3N-ewYBQ-`,
  _ = `oWSo9BvK7oY-`,
  _ = `_1ycoUq2K-Kw-`,
  _ = `u5g6D3cfJ40-`,
  _ = `iXv7KYShgr4-`,
  _ = `YKU1J84rUe8-`,
  _ = `XjqMC1cYnuc-`,
  _ = `SSKzoqpi1KQ-`,
  _ = `IG5AcX8yPdI-`,
  _ = `X0fIy6h-IPE-`,
  _ = `jRCjziiURko-`,
  _ = `WiZUnfhfBH0-`,
  _ = `Vo0VtIFAwPU-`,
  _ = `pgtcsG5Yec0-`,
  _ = `m4I0hBuKBB0-`,
  _ = `cKXa1JcaxPQ-`,
  _ = `q-DP3khZsgc-`,
  _ = `uQeikjci8I0-`,
  _ = `hnaLLQmuzWk-`,
  _ = `QTofMVbdGZM-`,
  _ = `y6CSiIugo4o-`,
  _ = `aTVR03O9jUI-`,
  _ = `Iu8tq8U-V3s-`,
  _ = `uWLEkJZTDIY-`,
  _ = `J2HcX9GsO0E-`,
  _ = `PSIUSUPanIQ-`,
  _ = `_3-4UV59DMEc-`,
  _ = `hndIMphess4-`,
  _ = `Ed7vbcFEtbc-`,
  _ = `QtOF4NTnTmU-`,
  _ = `npQclyzVwIk-`,
  _ = `_9nnAWrjSUZE-`,
  _ = `eyl2vUlQWEs-`,
  _ = `_7mI7iawr61I-`,
  _ = `-pd7WaMaCGQ-`,
  _ = `_4-EnX-rx-Bo-`,
  _ = `_58JDtRqWywI-`,
  _ = `AN73Kps5E7k-`,
  _ = `wcV7eyn83wM-`,
  _ = `hwk3XNCq9Fo-`,
  _ = `-RNwc-KlSpA-`,
  _ = `Fp3sktsxh98-`,
  _ = `uE7SRhzps2Q-`,
  _ = `XR-wlKdotHE-`,
  _ = `_5Yw-XyYf4ao-`,
  _ = `b0nTNEz4-gE-`;
function _(_) {
  let _ = _();
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _ && `_3fhicR1HTic-`),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    role: `heading`,
    "aria-level": 2,
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { title: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    className: _,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    className: (0, _.default)(_, _.className),
    children: _.children,
  });
}
function _(_) {
  let { className: _, children: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: (0, _.default)(_, _),
    children: _.children,
  });
}
function _(_) {
  let _ = _(_.href);
  return _.globalOnly && _.EREALM == _.k_ESteamRealmChina
    ? null
    : (0, _.jsx)(_, {
        href: _,
        className: _,
        onClick: _.onClick,
        onOKButton: _.onClick,
        focusable: _.focusable,
        children: _.children,
      });
}
function _(_) {
  let { storeItem: _, feature: _, depth: _, name: _ } = _;
  return _ && !_.visible
    ? null
    : (0, _.jsx)(_, {
        storeItem: _,
        feature: _,
        depth: _,
        className: _,
        children: _ || _?.name,
      });
}
var _ = _.memo(function (_) {
  let { handle: _, globalOnly: _ } = _,
    { data: _ } = _(),
    _ = _?.get(_);
  return _
    ? (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}${_.url_path}`,
        globalOnly: _,
        children: _.display_name,
      })
    : null;
});
function _(_) {
  return (0, _.jsx)(`hr`, {
    className: (0, _.default)(_.className, _),
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: (0, _.default)(_, _),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    "flow-children": `row`,
    navEntryPreferPosition: _.MAINTAIN_X,
    className: _,
    children: _.children,
  });
}
function _(_) {
  let { data: _ } = _(),
    _ = _?.get(_.handle);
  return _
    ? (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}${_.url_path}`,
        name: _.display_name,
        icon: _.icon,
      })
    : null;
}
function _(_) {
  return (0, _.jsxs)(_, {
    href: _(_.href),
    className: (0, _.default)(_, !!_.icon && `ON41YUlrQhE-`),
    children: [
      _.icon &&
        (0, _.jsx)(`span`, {
          className: `mET2oYICpJM-`,
          children: _.icon,
        }),
      (0, _.jsx)(`span`, {
        className: _,
        children: _.name,
      }),
    ],
  });
}
var _ = _.createContext({
  wide: !0,
});
function _(_) {
  let _ = _.useMemo(
    () => ({
      wide: !1,
    }),
    [],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _() {
  let _ = _();
  return _.useContext(_).wide && !_;
}
function _(_) {
  let {
    href: _,
    label: _ = _(`#Menu_Popover_ViewAll`),
    globalOnly: _ = !1,
  } = _;
  return _ && _.EREALM == _.k_ESteamRealmChina
    ? null
    : (0, _.jsxs)(_, {
        className: (0, _.default)(_.className, _),
        href: _,
        children: [_, (0, _.jsx)(_, {})],
      });
}
function _(_) {
  let {
    onClick: _,
    children: _ = (0, _.jsxs)(_.Fragment, {
      children: [_(`#Menu_Popover_ViewAll`), ` `, (0, _.jsx)(_, {})],
    }),
  } = _;
  return (0, _.jsx)(_, {
    className: _,
    onClick: _,
    onOKButton: _,
    children: _,
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 7 11`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M3.41628 5.2L-6.9089e-08 1.58057L1.49186 6.52113e-08L6.4 5.2L1.49186 10.4L-3.85509e-07 8.81943L3.41628 5.2Z`,
    }),
  });
}
function _() {
  let _ = _();
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      children: [(0, _.jsx)(_, {}), _ ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {})],
    }),
  });
}
var _ = {
  include_assets: !0,
};
function _() {
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}charts/`,
        globalOnly: !0,
        children: _(`#Menu_Popover_SteamCharts`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}explore/upcoming`,
        children: _(`#Menu_Popover_Upcoming`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}points/`,
        globalOnly: !0,
        children: _(`#Menu_Popover_PointsShop`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}digitalgiftcards/`,
        globalOnly: !0,
        children: _(`#Menu_Popover_GiftCards`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}news/`,
        children: _(`#Menu_Popover_NewsAndUpdates`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}account/preferences/`,
        children: _(`#Menu_Popover_Preferences`),
      }),
    ],
  });
}
function _() {
  let _ = _(),
    _ = _(),
    _ = !_ && !_,
    { data: _ } = _(),
    _ = _?.get(`freetoplay`),
    _ = _?.get(`demos`);
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          children: _(`#Menu_Section_Browse_Top`),
        }),
      }),
      _ &&
        (0, _.jsxs)(_.Fragment, {
          children: [
            _ &&
              (0, _.jsx)(_, {
                href: `${_.STORE_BASE_URL}${_.url_path}`,
                children: (0, _.jsx)(`div`, {
                  children: _(`#Menu_Section_Browse_FreeToPlay`),
                }),
              }),
            _ &&
              (0, _.jsx)(_, {
                href: `${_.STORE_BASE_URL}${_.url_path}`,
                children: (0, _.jsx)(`div`, {
                  children: _.display_name,
                }),
              }),
          ],
        }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}news/`,
        children: (0, _.jsx)(`div`, {
          children: _(`#Menu_Popover_NewsAndUpdates`),
        }),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}points/`,
        children: (0, _.jsx)(`div`, {
          children: _(`#Menu_Popover_PointsShop`),
        }),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}digitalgiftcards/`,
        globalOnly: !0,
        children: (0, _.jsx)(`div`, {
          children: _(`#Menu_Popover_GiftCards`),
        }),
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          children: _(`#Menu_Section_Browse_MyAccount`),
        }),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}account/preferences/`,
        children: (0, _.jsx)(`div`, {
          children: _(`#Menu_Section_Browse_MyPreferences`),
        }),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}wishlist/`,
        children: _(`#Menu_Section_Browse_MyWishlist`),
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}account/familymanagement/`,
        children: _(`#Menu_Section_Browse_MyFamily`),
      }),
    ],
  });
}
function _() {
  let { data: _ } = _();
  return _
    ? (0, _.jsx)(_, {
        href: `${_.COMMUNITY_BASE_URL}my/followedgames`,
        children: _(`#Menu_Section_Browse_MyFollowedGames`),
      })
    : null;
}
function _() {
  return _()
    ? (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}account/subscriptions/`,
        children: _(`#Menu_Section_Browse_MySubscriptions`),
      })
    : null;
}
function _() {
  return _()
    ? (0, _.jsxs)(_, {
        className: _,
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      });
}
function _() {
  return (
    _(),
    _(
      {
        count: 10,
      },
      _,
    ),
    _(
      {
        count: 10,
      },
      _,
    ),
    _(),
    _(),
    _(),
    null
  );
}
var _ = _();
function _() {
  let { data: _ } = _(),
    _ = _?.get(`freetoplay`),
    _ = _?.get(`demos`),
    _ = _(),
    _ = _();
  return _
    ? (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            children: _(`#Menu_Section_Browse_BrowseTop`),
          }),
          (0, _.jsxs)(_, {
            className: _,
            children: [
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    href: ``,
                    children: (0, _.jsx)(`div`, {
                      className: _,
                      children: _(`#Menu_Popover_StoreHome`),
                    }),
                  }),
                  (0, _.jsx)(_, {
                    href: `greatondeck/`,
                    children: (0, _.jsx)(`div`, {
                      className: _,
                      children: _(`#Menu_Popover_GreatonDeck`),
                    }),
                  }),
                  (0, _.jsx)(_, {
                    href: `explore/new/`,
                    children: (0, _.jsx)(`div`, {
                      className: _,
                      children: _(`#Menu_Section_Browse_NewReleases`),
                    }),
                  }),
                  (0, _.jsx)(_, {}),
                ],
              }),
              (0, _.jsxs)(_, {
                children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
              }),
            ],
          }),
        ],
      })
    : _
      ? (0, _.jsxs)(_, {
          className: _,
          children: [
            (0, _.jsx)(_, {
              children: _(`#Menu_Section_Browse_BrowseTop`),
            }),
            (0, _.jsxs)(_, {
              className: _,
              children: [
                (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_, {
                      href: ``,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: _(`#Menu_Popover_StoreHome`),
                      }),
                    }),
                    (0, _.jsx)(_, {
                      href: `explore/new/`,
                      children: (0, _.jsx)(`div`, {
                        className: _,
                        children: _(`#Menu_Section_Browse_NewReleases`),
                      }),
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        href: _.url_path,
                        children: (0, _.jsx)(`div`, {
                          className: `uWLEkJZTDIY-`,
                          children: _(`#Menu_Section_Browse_FreeToPlay`),
                        }),
                      }),
                    _ &&
                      (0, _.jsx)(_, {
                        href: _.url_path,
                        children: (0, _.jsx)(`div`, {
                          className: `uWLEkJZTDIY-`,
                          children: _.display_name,
                        }),
                      }),
                  ],
                }),
                (0, _.jsxs)(_, {
                  children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
                }),
              ],
            }),
          ],
        })
      : (0, _.jsx)(_, {
          className: _,
          children: (0, _.jsxs)(_, {
            className: (0, _.default)(_, _),
            children: [
              (0, _.jsxs)(_, {
                className: (0, _.default)(_),
                children: [
                  (0, _.jsx)(_, {
                    href: `${_.STORE_BASE_URL}`,
                    children: (0, _.jsx)(`div`, {
                      className: (0, _.default)(_, _, _),
                      children: _(`#Menu_Popover_StoreHome`),
                    }),
                  }),
                  (0, _.jsx)(_, {
                    href: `${_.STORE_BASE_URL}explore/new/`,
                    children: (0, _.jsxs)(`div`, {
                      className: (0, _.default)(_, _),
                      children: [
                        (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#Menu_Section_Browse_NewReleases`),
                        }),
                        (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#Menu_Section_Browse_NewReleases_Desc`),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(_, {
                    href: `${_.STORE_BASE_URL}explore/upcoming`,
                    children: (0, _.jsxs)(`div`, {
                      className: (0, _.default)(_, _),
                      children: [
                        (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#Menu_Popover_Upcoming`),
                        }),
                        (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#Menu_Section_Browse_Upcoming_Desc`),
                        }),
                      ],
                    }),
                  }),
                  (0, _.jsx)(_, {
                    href: `${_.STORE_BASE_URL}charts`,
                    globalOnly: !0,
                    children: (0, _.jsxs)(`div`, {
                      className: (0, _.default)(_, _),
                      children: [
                        (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#Menu_Section_Browse_Charts`),
                        }),
                        (0, _.jsx)(`div`, {
                          className: _,
                          children: _(`#Menu_Section_Browse_Charts_Desc`),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, _.jsxs)(_, {
                children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
              }),
            ],
          }),
        });
}
var _ = 3,
  _ = 3;
function _(_) {
  let { rgItemIDs: _ } = _,
    _ = _(),
    _ = _(),
    { data: _ } = _({
      queryKey: [`CapsuleGrid`, _],
      queryFn: async () =>
        (await Promise.all(_.map((_) => _.fetchQuery(_(_, _))))).filter(
          Boolean,
        ),
    }),
    _ = _.useMemo(() => {
      if (!_ || !_.length) return;
      let _ = _.map((_) => _(_, `header`)).filter(Boolean),
        _ = _ * _,
        _ = [],
        _ = _(_);
      for (; _.length < _; ) _.push(..._(_.slice(0, _ - _.length), 0, _));
      let _ = [];
      for (let _ = 0; _ < _; _++) _.push(_.slice(_ * _, (_ + 1) * _));
      return _;
    }, [_]);
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: _.map((_, _) =>
          (0, _.jsx)(
            `div`,
            {
              className: _,
              children: _.map((_, _) =>
                (0, _.jsx)(
                  `img`,
                  {
                    src: _,
                    alt: ``,
                  },
                  _,
                ),
              ),
            },
            _,
          ),
        ),
      })
    : null;
}
function _() {
  let { data: _ } = _(
      {
        count: 10,
      },
      _,
    ),
    _ = `charts/topselling/`;
  return (
    _.EREALM == _.k_ESteamRealmChina && (_ = `search/?filter=topsellers`),
    (0, _.jsx)(_, {
      label: _(`#Menu_Section_Browse_TopSellers`),
      href: _,
      children:
        _ &&
        (0, _.jsx)(_, {
          rgItemIDs: _.rgItemIDs,
        }),
    })
  );
}
function _() {
  let { data: _ } = _(
    {
      count: 10,
    },
    _,
  );
  return (0, _.jsx)(_, {
    label: _(`#Menu_Section_Browse_Discounts`),
    href: `specials/`,
    children:
      _ &&
      (0, _.jsx)(_, {
        rgItemIDs: _.rgItemIDs,
      }),
  });
}
function _() {
  let { data: _ } = _();
  return (0, _.jsx)(_, {
    href: _ && _ > 0 ? `wishlist/?min_discount=any` : `wishlist/`,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsxs)(`div`, {
        children: [
          _(`#Menu_Section_Browse_Discounts_YourWishlist`),
          _ !== void 0 &&
            _ > 0 &&
            (0, _.jsx)(`div`, {
              className: `LsUtid7lp2U-`,
              children: _(
                `#Menu_Section_Browse_Discounts_YourWishlist_Discounts`,
                _(_),
              ),
            }),
        ],
      }),
    }),
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: (0, _.default)(_, _),
    children: _,
  });
}
function _(_) {
  let { children: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": `grid`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: (0, _.default)(_, _),
    children: _,
  });
}
function _(_) {
  let { label: _, href: _, children: _ } = _,
    _ = _(`${_.STORE_BASE_URL}${_}`);
  return (0, _.jsxs)(_, {
    className: _,
    href: _,
    children: [
      _,
      _ &&
        (0, _.jsx)(`span`, {
          className: `_08QPZ50-kEY-`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let { label: _, href: _, children: _ } = _,
    { data: _ } = _(
      {
        count: 10,
      },
      _,
    ),
    _ = _(`${_.STORE_BASE_URL}${_}`);
  return (0, _.jsxs)(_, {
    className: _,
    href: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          ` `,
          _ &&
            (0, _.jsx)(_, {
              rgItemIDs: _.rgItemIDs,
            }),
        ],
      }),
      _,
      _ &&
        (0, _.jsx)(`span`, {
          className: `_08QPZ50-kEY-`,
          children: _,
        }),
    ],
  });
}
_.memo(function (_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 31 30`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M11.8667 20.8749L14.0834 17.7416V28.3749H5.75004V20.8749H11.8667ZM19.6167 20.8749L17.4167 17.7416V28.3749H25.75V20.8749H19.6167ZM21.575 17.5416H29.9167L25.75 11.7083H17.4167L21.575 17.5416ZM14.075 11.7083H5.75004L1.58337 17.5416H9.91671L14.075 11.7083ZM16.9917 1.70825H14.4917V5.45825C14.4917 5.62311 14.5243 5.78634 14.5876 5.93854C14.651 6.09074 14.7438 6.22891 14.8608 6.3451C14.9777 6.46128 15.1165 6.55318 15.2691 6.6155C15.4217 6.67783 15.5852 6.70935 15.75 6.70825C16.0816 6.70825 16.3995 6.57656 16.6339 6.34214C16.8683 6.10772 17 5.78977 17 5.45825L16.9917 1.70825ZM23.825 5.38325L21.825 3.86659L19.975 6.31658C19.8744 6.44714 19.8005 6.59633 19.7577 6.75555C19.715 6.91477 19.7041 7.08088 19.7258 7.24431C19.7475 7.40774 19.8013 7.56527 19.8841 7.70782C19.9669 7.85037 20.0771 7.97513 20.2084 8.07492C20.4739 8.27518 20.8079 8.36218 21.1374 8.31689C21.4669 8.27161 21.765 8.09772 21.9667 7.83325L23.825 5.38325ZM11.5084 6.31658L9.65837 3.86659L7.65837 5.38325L9.51671 7.83325C9.71836 8.09772 10.0165 8.27161 10.346 8.31689C10.6755 8.36218 11.0095 8.27518 11.275 8.07492C11.4063 7.97513 11.5165 7.85037 11.5993 7.70782C11.6821 7.56527 11.7359 7.40774 11.7576 7.24431C11.7793 7.08088 11.7684 6.91477 11.7257 6.75555C11.6829 6.59633 11.609 6.44714 11.5084 6.31658Z`,
    }),
  });
}),
  _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 30 30`,
      fill: `none`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M28.1504 16.0166L16.0166 28.1504L3.33301 15.4668V3.33301H15.4668L28.1504 16.0166ZM12.4023 11.1221L8.33301 11.6387L11.3105 14.4004L10.5605 18.333L14.167 16.4268L17.7734 18.333L17.0264 14.4004L20 11.6387L15.9307 11.1221L14.167 7.5L12.4023 11.1221Z`,
      }),
    });
  }),
  _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 30 30`,
      fill: `none`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M8.33332 26.5469C14.7106 30.2288 22.8651 28.0438 26.547 21.6665C30.2289 15.2893 28.0439 7.13476 21.6667 3.45286C15.2894 -0.229037 7.13488 1.95596 3.45298 8.3332C-0.228915 14.7104 1.95609 22.865 8.33332 26.5469ZM6.23348 21.3692C3.79844 18.0137 3.41122 13.4055 5.61805 9.5832C7.6228 6.11087 11.2595 4.16821 15 4.16473V9.99903C13.2736 10.0006 11.5951 10.8972 10.6699 12.4999C9.65132 14.264 9.83004 16.3909 10.9539 17.9396L6.23348 21.3692ZM15 25.835C18.7405 25.8315 22.3772 23.8888 24.3819 20.4165C26.5887 16.5942 26.2015 11.9861 23.7666 8.63065L19.0461 12.0602C20.1699 13.6089 20.3486 15.7357 19.3301 17.4999C18.4049 19.1025 16.7264 19.9991 15 20.0007L15 25.835ZM16.25 12.8348C17.4457 13.5252 17.8554 15.0541 17.1651 16.2499C16.4747 17.4456 14.9457 17.8553 13.75 17.1649C12.5543 16.4746 12.1446 14.9456 12.8349 13.7499C13.5253 12.5541 15.0543 12.1444 16.25 12.8348Z`,
      }),
    });
  }),
  _.memo(function (_) {
    return (0, _.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 30 30`,
      fill: `none`,
      ..._,
      children: [
        (0, _.jsx)(`path`, {
          fill: `currentColor`,
          _: `M21.725 15.0001L11.6666 20.8917V9.10841L21.725 15.0001Z`,
        }),
        (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M15 1.66675C12.3629 1.66675 9.78502 2.44873 7.59236 3.91382C5.39971 5.3789 3.69074 7.46129 2.68157 9.89763C1.6724 12.334 1.40836 15.0149 1.92283 17.6013C2.4373 20.1877 3.70717 22.5635 5.57187 24.4282C7.43657 26.2929 9.81235 27.5627 12.3988 28.0772C14.9852 28.5917 17.6661 28.3276 20.1024 27.3185C22.5388 26.3093 24.6211 24.6003 26.0862 22.4077C27.5513 20.215 28.3333 17.6372 28.3333 15.0001C28.3333 13.2491 27.9884 11.5153 27.3184 9.89763C26.6483 8.27996 25.6662 6.8101 24.4281 5.57199C23.1899 4.33388 21.7201 3.35175 20.1024 2.68169C18.4847 2.01162 16.7509 1.66675 15 1.66675ZM9.44426 6.68539C11.0888 5.58657 13.0222 5.00008 15 5.00008C16.3132 5.00008 17.6135 5.25874 18.8268 5.76129C20.0401 6.26383 21.1424 7.00043 22.071 7.92901C22.9996 8.8576 23.7362 9.95999 24.2388 11.1732C24.7413 12.3865 25 13.6869 25 15.0001C25 16.9779 24.4135 18.9113 23.3147 20.5558C22.2158 22.2003 20.6541 23.482 18.8268 24.2389C16.9995 24.9957 14.9889 25.1938 13.0491 24.8079C11.1093 24.4221 9.32742 23.4697 7.9289 22.0711C6.53037 20.6726 5.57796 18.8908 5.19211 16.951C4.80626 15.0112 5.00429 13.0005 5.76117 11.1732C6.51805 9.34599 7.79977 7.7842 9.44426 6.68539Z`,
        }),
      ],
    });
  });
var _ = {};
(_.arabic = () => _(() => import(`./vfjlcG4Q.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./iIBlhzbw.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./Lwp7mNZv.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./xyJW7jPb.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./DhD-JY9j.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./sb6B23y3.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./C8B1tm50.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./LnML93k6.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./9-rJlC5K.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./CkcBG9Ap.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./-8ZEcoco.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./Cxn_5r57.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./BDAtvIfP.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./OowKULyW.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./YHJP9iNF.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./BVIGXBQI.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./C32PZEB8.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./DWSDa6z_.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./DYT-lG_g.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./CYGX-E6O.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./Bq-qJgkr.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./CKB__Rv_.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./BLM7rDMl.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./pw7VSXvQ.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./dft-obEC.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./DW5QCubA.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./CYGOpXNc.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./BQNBXeuY.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./DA8wVBet.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./OxbEM3Gz.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./DNUQZc0K.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./C7El2DYJ.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = _(_());
function _(_) {
  let {
      _: _,
      role: _,
      visible: _ = !0,
      className: _,
      keepMounted: _ = !1,
      expandDirection: _ = `height`,
      msAnimationDuration: _ = 250,
      children: _,
    } = _,
    { style: _, active: _, refDiv: _ } = _(_, _, _);
  return !_ && !_ && !_
    ? null
    : (0, _.jsx)(`div`, {
        _: _,
        role: _,
        className: _,
        ref: _,
        style: _,
        inert: !_,
        children: _,
      });
}
function _(_, _ = `height`, _ = 250) {
  let _ = _.useRef(null),
    _ = _.useRef(!0),
    [_, _] = _.useState(`idle`),
    [_, _] = _.useState(
      _
        ? {}
        : {
            [_]: `0px`,
            overflow: `hidden`,
          },
    ),
    [_, _] = _.useState(_);
  return (
    _.useLayoutEffect(() => {
      _.current || _(`start`), _ && _(_);
    }, [_]),
    _.useLayoutEffect(
      () => (
        (_.current = !1),
        () => {
          _.current = !0;
        }
      ),
      [],
    ),
    _.useLayoutEffect(() => {
      let _ = _.current,
        _ = _ == `height` ? `scrollHeight` : `scrollWidth`,
        _ = () => {
          _.unstable_batchedUpdates(() => {
            _(
              _
                ? {}
                : {
                    [_]: `0px`,
                    overflow: `hidden`,
                  },
            ),
              _(`idle`),
              _(_);
          });
        };
      if (_ == `start`) {
        let _ = _[_];
        _ == 0
          ? _()
          : (_((_) => ({
              [_]: _ ? `0px` : `${_}px`,
              ..._,
              overflow: `hidden`,
            })),
            _(`active`));
      } else if (_ == `active`) {
        _.scrollTop;
        let _ = _[_];
        return (
          _({
            overflow: `hidden`,
            [_]: _ ? `${_}px` : `0px`,
          }),
          _.addEventListener(`transitionend`, _),
          () => {
            _.removeEventListener(`transitionend`, _);
          }
        );
      }
    }, [_, _]),
    {
      style: {
        ..._,
        transition: `${_} ${_}ms`,
      },
      active: _,
      refDiv: _,
    }
  );
}
var _ = [
  {
    rgTagIDs: [19],
    _: `action`,
    strLocToken: `#ContentHubby_Hub_action_menu`,
    strSalePageURL: `category/action`,
  },
  {
    rgTagIDs: [21],
    _: `adventure`,
    strLocToken: `#ContentHubby_Hub_adventure_menu`,
    strSalePageURL: `category/adventure`,
  },
  {
    rgTagIDs: [4085],
    _: `anime`,
    strLocToken: `#ContentHubby_Hub_anime_mild_menu`,
    strSalePageURL: `category/anime`,
  },
  {
    rgTagIDs: [597],
    _: `casual`,
    strLocToken: `#ContentHubby_Hub_casual_menu`,
    strSalePageURL: `category/casual`,
  },
  {
    rgTagIDs: [1695],
    _: `exploration_open_world`,
    strLocToken: `#ContentHubby_Hub_adventure_explore_open_world_menu`,
    strSalePageURL: `category/exploration_open_world`,
  },
  {
    rgTagIDs: [4328, 4736, 6506],
    _: `fighting_martial_arts`,
    strLocToken: `#ContentHubby_Hub_fighting_menu`,
    strSalePageURL: `category/fighting_martial_arts`,
  },
  {
    rgTagIDs: [1667],
    _: `horror`,
    strLocToken: `#ContentHubby_Hub_horror_menu`,
    strSalePageURL: `category/horror`,
  },
  {
    rgTagIDs: [1685],
    _: `multiplayer_coop`,
    strLocToken: `#ContentHubby_Hub_multiplayer_coop_menu`,
    strSalePageURL: `category/multiplayer_coop`,
  },
  {
    rgTagIDs: [1664, 5537, 1665],
    _: `puzzle_matching`,
    strLocToken: `#ContentHubby_Hub_puzzle_menu`,
    strSalePageURL: `category/puzzle_matching/`,
  },
  {
    rgTagIDs: [699, 4102],
    _: `racing`,
    strLocToken: `#ContentHubby_Hub_racing_menu`,
    strSalePageURL: `category/racing`,
  },
  {
    rgTagIDs: [42804],
    _: `rogue_like_rogue_lite`,
    strLocToken: `#ContentHubby_Hub_rogue_like_rogue_lite_menu`,
    strSalePageURL: `category/rogue_like_rogue_lite`,
  },
  {
    rgTagIDs: [112, 4434, 4231],
    _: `rpg`,
    strLocToken: `#ContentHubby_Hub_rpg_menu`,
    strSalePageURL: `category/rpg`,
  },
  {
    rgTagIDs: [3942],
    _: `science_fiction`,
    strLocToken: `#ContentHubby_Hub_science_fiction_menu`,
    strSalePageURL: `category/science_fiction`,
  },
  {
    rgTagIDs: [599, 12472],
    _: `simulation`,
    strLocToken: `#ContentHubby_Hub_simulation_menu`,
    strSalePageURL: `category/simulation`,
  },
  {
    rgTagIDs: [701],
    _: `sports`,
    strLocToken: `#ContentHubby_Hub_sports_menu`,
    strSalePageURL: `category/sports`,
  },
  {
    rgTagIDs: [1742],
    _: `story_rich`,
    strLocToken: `#ContentHubby_Hub_interactive_fiction_menu`,
    strSalePageURL: `category/story_rich`,
  },
  {
    rgTagIDs: [9, 1670, 1676],
    _: `strategy`,
    strLocToken: `#ContentHubby_Hub_strategy_menu`,
    strSalePageURL: `category/strategy`,
  },
  {
    rgTagIDs: [9, 4328, 220585],
    _: `strategy_cities_settlements`,
    strLocToken: `#ContentHubby_Hub_sim_cities_settlements_menu`,
    strSalePageURL: `category/strategy_cities_settlements`,
  },
  {
    rgTagIDs: [1662],
    _: `survival`,
    strLocToken: `#ContentHubby_Hub_survival_menu`,
    strSalePageURL: `category/survival`,
  },
  {
    rgTagIDs: [3799],
    _: `visual_novel`,
    strLocToken: `#ContentHubby_Hub_visual_novel_menu`,
    strSalePageURL: `category/visual_novel`,
  },
  {
    rgTagIDs: [113],
    _: `freetoplay`,
    strLocToken: `#ContentHubby_Hub_free_to_play`,
    strSalePageURL: `genre/Free%20to%20Play`,
  },
  {
    rgTagIDs: [113],
    _: `earlyaccess`,
    strLocToken: `#genre_early_access`,
    strSalePageURL: `genre/Early%20Access`,
  },
];
function _() {
  let _ = _.Localize;
  return _.map((_) => ({
    ..._,
    strName: _(_.strLocToken),
  }));
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    ..._(_, _),
    enabled: !!_,
    initialData: _ ? void 0 : [],
  });
}
function _(_, _) {
  return [`RecommendedTagsForUser`, _, _];
}
function _(_, _) {
  return {
    queryKey: _(_.country, _.language),
    queryFn: () => _(_, _),
    staleTime: 1e3 * 60 * 60 * 24,
  };
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_language(_.language),
    _.Body().set_country_code(_.country),
    _.Body().set_favor_rarer_tags(!0);
  let _ = await _.GetRecommendedTagsForUser(_, _);
  if (!_.BSuccess())
    throw `Error loading recommended tags: ${_.GetErrorMessage()}`;
  return _.Body().toObject().tags || [];
}
function _(_) {
  let { tagid: _, language: _ = _.LANGUAGE } = _;
  return _(_, _) || String(_);
}
function _(_, _ = _.LANGUAGE) {
  let _ = _(_, _);
  return `${_.STORE_BASE_URL}tags/${_(_)}/${_}`;
}
function _(_) {
  let { itemid: _, ..._ } = _;
  return `hubcategoryid` in _
    ? (0, _.jsx)(_, {
        hubcategoryid: _.hubcategoryid,
        ..._,
      })
    : `tagid` in _
      ? (0, _.jsx)(_, {
          tagid: _.tagid,
          ..._,
        })
      : `creatorid` in _
        ? (0, _.jsx)(_, {
            creatorid: _.creatorid,
            ..._,
          })
        : null;
}
function _(_) {
  switch (_) {
    case `square`:
      return `${_.STORE_CDN_URL}categories/image/`;
    case `wide`:
      return `${_.STORE_CDN_URL}categories/searchsuggestionsimage/`;
    default:
      return _(_, `Unknown type: ${_}`), ``;
  }
}
function _(_) {
  let { hubcategoryid: _, type: _ = `square`, className: _ } = _,
    { data: _ } = _(),
    _ = _?.get(_);
  if (_)
    return (0, _.jsx)(`img`, {
      className: _,
      alt: ``,
      src: `${_(_)}category/${_.handle}?cc=${_.COUNTRY}&l=${_.LANGUAGE}`,
    });
}
function _(_) {
  let { category: _, type: _ = `square`, className: _ } = _;
  return (0, _.jsx)(`img`, {
    className: _,
    alt: ``,
    src: `${_(_)}category/${_}?cc=${_.COUNTRY}&l=${_.LANGUAGE}`,
  });
}
function _(_) {
  let { tagid: _, type: _ = `square`, className: _ } = _;
  return (0, _.jsx)(`img`, {
    className: _,
    alt: ``,
    src: `${_(_)}tags/${_}?cc=${_.COUNTRY}&l=${_.LANGUAGE}`,
  });
}
function _(_) {
  let { creatorid: _, type: _ = `square`, className: _ } = _;
  return (0, _.jsx)(`img`, {
    className: _,
    alt: ``,
    src: `${_(_)}creator/${_}?cc=${_.COUNTRY}&l=${_.LANGUAGE}`,
  });
}
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.recent_apps || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            recent_apps: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CUserStoreVisitData`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
              _: 1,
              _: _,
            },
            time_visit: {
              _: 2,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CUserStoreVisitData_RecentApps`;
    }
  },
  _ = class _ extends _.Message {
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
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _;
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {}
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CUserStoreVisit_GetFrequentlyVisitedPages_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.visit_data || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            visit_data: {
              _: 1,
              _: _,
            },
            frequent_hubs: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CUserStoreVisit_GetFrequentlyVisitedPages_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_id || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_id: {
              _: 1,
              _: _,
            },
            time_visit: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            visit_count: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CUserStoreVisit_GetFrequentlyVisitedPages_Response_FrequentHubs`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.context || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            context: {
              _: 1,
              _: _,
            },
            data_request: {
              _: 2,
              _: _,
            },
            count: {
              _: 3,
              _: 10,
              _: _.readUint32,
              _: _.writeUint32,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CUserStoreVisit_GetMostVisitedItemsOnStore_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.item_ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            item_ids: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            items: {
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
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CUserStoreVisit_GetMostVisitedItemsOnStore_Response`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `UserStoreVisit.GetFrequentlyVisitedPages#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetFrequentlyVisitedPages = _;
  function _(_, _, _) {
    return _.SendMsg(
      `UserStoreVisit.GetMostVisitedItemsOnStore#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetMostVisitedItemsOnStore = _;
})((_ ||= {}));
function _(_ = !0) {
  let _ = _(_(), _());
  return _({
    ..._,
    select: (_) => _.visit_data?.recent_apps?.map(({ item_id: _ }) => _) || [],
    enabled: _.enabled && _,
  });
}
function _(_ = !0) {
  let _ = _(_(), _(), _(), _());
  return _({
    ..._,
    enabled: _.enabled && _,
  });
}
function _(_, _, _, _) {
  return {
    queryKey: [`StoreFrequentlyVisitedHubs`, _],
    queryFn: async () => {
      let [_, _] = await Promise.all([
        _.fetchQuery(_(_, _)),
        _.fetchQuery(_(_, _, _, _.excluded_content_descriptors)),
      ]);
      return (_.frequent_hubs || [])
        .map((_) =>
          _.item_id.hubcategoryid
            ? {
                ..._,
                hubconfig: _.get(_.item_id.hubcategoryid),
              }
            : _.item_id.tagid
              ? {
                  ..._,
                  tagid: _.item_id.tagid,
                }
              : null,
        )
        .filter(
          (_) =>
            _ &&
            ((`hubconfig` in _ && _.hubconfig) || (`tagid` in _ && _.tagid)),
        );
    },
    enabled: !!_,
    initialData: _ ? void 0 : [],
    staleTime: 1e3 * 60 * 10,
  };
}
function _(_, _) {
  return {
    queryKey: [`StoreFrequentlyVisited`, _],
    queryFn: () => _(_),
    enabled: !!_ && _ != `0`,
    staleTime: 1e3 * 60 * 10,
  };
}
async function _(_) {
  let _ = _.Init(_),
    _ = await _.GetFrequentlyVisitedPages(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
  return _.Body().toObject();
}
var _ = `_-3FYAnbTP3c-`,
  _ = `_2CkNRBK5B5k-`,
  _ = `_1i-qAoxv0gs-`,
  _ = `OQI7NrDyNQM-`,
  _ = `n7dlzdt47hk-`,
  _ = `-zaVim47mO0-`,
  _ = `_0BeVbyJgjX8-`,
  _ = `GRmUHltqGK4-`,
  _ = `HIS-lBmeobo-`,
  _ = `UhfidmTvKEQ-`,
  _ = `rIDbuv8JKfc-`,
  _ = `cCDwokRcYw0-`,
  _ = `NeEYOjHoAX4-`;
function _() {
  let _ = _(),
    _ = _(),
    _ = _.EREALM != _.k_ESteamRealmChina,
    _ = _ && !_ && !_;
  return (0, _.jsxs)(_, {
    children: [
      _ || !_
        ? (0, _.jsx)(_, {
            children: _(`#Menu_Section_Categories_YourTopCategories`),
          })
        : (0, _.jsx)(_, {
            title: _(`#Menu_Section_Categories_YourTopGenres`),
            children: (0, _.jsx)(_, {
              href: `${_.STORE_BASE_URL}sitemap/#genres`,
              label: _(`#Menu_Section_Categories_ViewAll`),
            }),
          }),
      (0, _.jsxs)(_, {
        children: [(0, _.jsx)(_, {}), _ && (0, _.jsx)(_, {})],
      }),
    ],
  });
}
function _() {
  return _(_.LANGUAGE), _(_.logged_in), _(), null;
}
var _ = _.memo(function () {
    let [_, _] = _();
    return _ === null || _ === null
      ? null
      : (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsx)(_, {
              "flow-children": `row`,
              className: _,
              navEntryPreferPosition: _.MAINTAIN_X,
              children: _.map((_) =>
                _.type === `hub`
                  ? (0, _.jsx)(
                      _,
                      {
                        featuredCategory: _,
                      },
                      _.strHandle,
                    )
                  : (0, _.jsx)(
                      _,
                      {
                        featuredTag: _,
                      },
                      _.unTagID,
                    ),
              ),
            }),
            (0, _.jsxs)(_, {
              "flow-children": `row`,
              className: (0, _.default)(_, _),
              navEntryPreferPosition: _.MAINTAIN_X,
              children: [
                (0, _.jsx)(_, {
                  "flow-children": `row`,
                  className: _,
                  navEntryPreferPosition: _.MAINTAIN_X,
                  children: _.map((_) =>
                    _.type === `hub`
                      ? (0, _.jsx)(
                          _,
                          {
                            featuredLink: _,
                          },
                          _.strHandle,
                        )
                      : (0, _.jsx)(
                          _,
                          {
                            featuredLink: _,
                          },
                          _.unTagID,
                        ),
                  ),
                }),
                (0, _.jsx)(_, {
                  className: _,
                  href: `${_.STORE_BASE_URL}tag/browse/`,
                  label: _(`#Menu_Section_Categories_ViewAllTags`),
                  globalOnly: !0,
                }),
              ],
            }),
          ],
        });
  }),
  _ = _();
function _() {
  let { data: _, isError: _ } = _(),
    { data: _, isError: _ } = _(),
    _ = _(_),
    { data: _ } = _(_.LANGUAGE),
    { data: _ } = _(),
    _ = _.useMemo(() => _(_().slice(), 0, _(_)), []),
    _ = _(),
    _ = _ ? 6 : 4,
    _ = _ ? 12 : 8;
  return _.useMemo(() => {
    let _ = _ ?? (_ ? [] : void 0),
      _ = _ ?? (_ ? [] : void 0);
    if (_ == null || _ == null || !_ || !_ || !_) return [null, null];
    let _ = new Set(),
      _ = new Set(),
      _ = [],
      _ = [],
      _ =
        _.excluded_content_descriptors.includes(3) &&
        _.excluded_content_descriptors.includes(4);
    for (let _ of _(_, _, _)) {
      let _;
      if (_.length < _) _ = _;
      else if (_.length < _) _ = _;
      else break;
      if (_.type == `tag` && _.has(_.unTagID)) {
        let _ = _.get(_.unTagID);
        _ = {
          type: `hub`,
          strHandle: _.handle,
          strName: _.display_name,
          strURLPath: _.url_path,
        };
      }
      _.type == `tag` && (!_ || !_.includes(_.unTagID))
        ? !_.has(_.unTagID) && _.unTagID in _ && (_.add(_.unTagID), _.push(_))
        : _.type == `hub` &&
          (_.has(_.strHandle) || (_.add(_.strHandle), _.push(_)));
    }
    return [_, _];
  }, [_, _, _, _, _, _, _, _, _, _]);
}
function* _(_, _, _) {
  let _ = _.slice(),
    _ = _.slice(),
    _ = _.slice();
  for (; _.length || _.length; ) {
    if (_.length) {
      let _ = _.shift();
      `hubconfig` in _
        ? yield {
            type: `hub`,
            strHandle: _.hubconfig.handle,
            strName: _.hubconfig.display_name,
            strURLPath: _.hubconfig.url_path,
          }
        : yield {
            type: `tag`,
            unTagID: _.tagid,
          };
    }
    _.length &&
      (yield {
        type: `tag`,
        unTagID: _.shift().tagid,
      });
  }
  for (; _.length; ) {
    let _ = _.shift();
    yield {
      type: `hub`,
      strHandle: _._,
      strName: _.Localize(_.strLocToken),
      strURLPath: _.strSalePageURL,
    };
  }
}
function _(_) {
  let { featuredCategory: _ } = _,
    { strHandle: _, strURLPath: _, strName: _ } = _;
  return (0, _.jsx)(_, {
    title: _,
    href: _(`${_.STORE_BASE_URL}${_}`, `big-category-link`),
    children: (0, _.jsx)(_, {
      category: _,
      className: _,
    }),
  });
}
function _(_) {
  let { featuredTag: _ } = _,
    { unTagID: _ } = _,
    _ = _(_(_), `big-category-link`);
  return (0, _.jsx)(_, {
    title: (0, _.jsx)(_, {
      tagid: _,
    }),
    href: _,
    children: (0, _.jsx)(_, {
      tagid: _,
      className: _,
    }),
  });
}
function _(_) {
  let { children: _, title: _, href: _ } = _;
  return (0, _.jsxs)(_, {
    className: _,
    href: _,
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      }),
    ],
  });
}
function _(_) {
  let { featuredLink: _ } = _,
    _ = _(_(_.unTagID), `small-category-link`);
  return (0, _.jsx)(_, {
    className: _,
    href: _,
    fnCanTakeFocus: _,
    children: (0, _.jsx)(_, {
      tagid: _.unTagID,
    }),
  });
}
function _(_) {
  let { featuredLink: _ } = _,
    _ = _(`${_.STORE_BASE_URL}${_.strURLPath}`, `small-category-link`);
  return (0, _.jsx)(_, {
    className: _,
    href: _,
    fnCanTakeFocus: _,
    children: _.strName,
  });
}
function _(_) {
  let _ = _.Element?.getBoundingClientRect(),
    _ = _.m_Parent?.Element?.getBoundingClientRect();
  return !_ || !_ ? !1 : _.top < _.bottom;
}
var _ = `store_menu_categories_expanded`;
function _() {
  let [_, _] = _.useMemo(() => {
      let _ = [],
        _ = {};
      return (
        _.forEach(({ groups: _ }) => {
          _.forEach(({ header: _, items: _ }) => {
            _.push(_), (_[_] = _);
          });
        }),
        [_, _]
      );
    }, []),
    _ = _(),
    [_, _] = _.useState(() => !!window?.sessionStorage.getItem(_));
  return (
    (0, _.useEffect)(() => {
      _
        ? window.sessionStorage.setItem(_, `1`)
        : window.sessionStorage.removeItem(_);
    }, [_]),
    (0, _.jsx)(_.Fragment, {
      children: (0, _.jsxs)(_, {
        className: _,
        "flow-children": `geometric`,
        children: [
          (0, _.jsx)(_, {
            title: _(`#Menu_Section_Categories_GenresAndThemes`),
            children: (0, _.jsxs)(_, {
              onClick: () => _(!_),
              children: [
                _(
                  _
                    ? `#Menu_Section_Categories_Collapse`
                    : `#Menu_Section_Categories_Expand`,
                ),
                (0, _.jsx)(_, {
                  direction: _ ? `up` : `down`,
                }),
              ],
            }),
          }),
          (0, _.jsx)(_, {
            "flow-children": `row`,
            className: _,
            children: _.map((_, _) => {
              if (_ == `social_and_players` && !_) return null;
              let _ = _[_];
              return (0, _.jsx)(
                _,
                {
                  rgCategoryHandles: _,
                  bExpanded: _,
                  bHiddenCategory: _ && _ >= 3,
                },
                _,
              );
            }),
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let { rgCategoryHandles: _, bExpanded: _, bHiddenCategory: _ } = _,
    { data: _ } = _(),
    _ = _.useMemo(() => _.map((_) => _?.get(_)).filter(Boolean), [_, _]),
    _ = _ ? [] : _.slice(0, 3),
    _ = _ ? _ : _.slice(3);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _.map((_) =>
        (0, _.jsx)(
          _,
          {
            category: _,
          },
          _.handle,
        ),
      ),
      (0, _.jsxs)(_, {
        visible: _,
        keepMounted: !0,
        children: [
          ` `,
          (0, _.jsx)(_, {
            className: _,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  category: _,
                  disabled: !_,
                },
                _.handle,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let { category: _, disabled: _ = !1 } = _;
  return (0, _.jsx)(_, {
    href: `${_.STORE_BASE_URL}${_.url_path}`,
    focusable: !_,
    children: _.display_name,
  });
}
function _(_) {
  let { direction: _ } = _,
    _;
  return (
    (_ =
      _ === `up`
        ? `rotate( 180deg )`
        : _ === `left`
          ? `rotate( 90deg )`
          : _ === `right`
            ? `rotate( 270deg )`
            : void 0),
    (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 16 16`,
      fill: `none`,
      style: {
        transform: _,
      },
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M13.7782 9.04948L8.00948 14.667L2.22266 9.04948L3.82433 7.49224L8.00948 11.5525L12.1856 7.49224L13.7782 9.04948ZM12.1765 1.33366L8.00948 5.39392L3.83338 1.33366L2.22266 2.8909L8.00948 8.50841L13.7782 2.8909L12.1765 1.33366Z`,
      }),
    })
  );
}
var _ = `_66RRnbNEtRA-`,
  _ = `aIWefynuRs8-`,
  _ = `-sD18bXsZ8Q-`,
  _ = `A8PCEoDc9TY-`,
  _ = `nJT7XJZ6aB0-`,
  _ = `` + new URL(`assets/C3yxaFO6.png`, import.meta.url).href,
  _ = `` + new URL(`assets/3-iTIaq7.png`, import.meta.url).href,
  _ = `` + new URL(`assets/UEUZGJn2.png`, import.meta.url).href,
  _ = `` + new URL(`assets/BdHLWMHt.png`, import.meta.url).href,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAetJREFUeAHtme1xwjAMhhWu/0s38Ah0g4zQDZoNoBNAN2gngE5QNiDdoBsknaBhAlcC+84EmRZ+9Ez8PnfCTiScWP5SbCIAAAAAAAAAAABki7V2xtLY4dOwPPp6F67yFSdLyounoihevAMaTgzlRccOuPMOsHQ+LcuK0qAivQFXtH9PVc8O2NWf7GVsKBHkXZT3Wwb6UquA6EaRMjuWBcs9S0nptPQ5fAb57qSl4pyJYjO7kh7w7dLGtbwJ9E2/B/gC1K6jPKhJ3AFzd20CR3imfZ1ca0OgPfGsmhKG57Rnl7acrANVy/deA13tFZoDxhTHUMJIlw8uw7y0unE2Ur9J/4+2N4aMUvjEXscc8B50/7l0fTd0m54uOgdYZ1wG+tIej6lBLIM3kTINy8ZeFB8lQxfJHxBzwBCouAElFtiyzGNGQ3aATHar34xGlDlwAGUOHECZo60Csmaulfsyqz7QdVDT8TeND4HNkXUvQIqumS6UTD0S3Jywq/qR4LlDoKOBgUmQMgcOcOlfx/aYBoZfBuWrqXR5mSm/FNtbOtxJkV2WitIgbBjZuJH9v61iNw3ytfz4g5GSk2SWtX+i4v3Bt90Q4ExN+3OAXFhI5SVThHddl5aT05KGSU37yn8QAAAAAAAAAAAAQK78AAT+RfVfmgXsAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAApNJREFUeAHtmY1xqzAMgJV3b4BsUG/weBMknaDZIBmhGyQbtBukG/Q6Ad0AOgF0gmQDVTqci49iI1MMbU/fnQ4ulpARsvwTAEVRFEVRFEVRFEVRlIEg4prkSFJhWgrrx8B3gDtCkuM8HL8aiAV8AXKe0SUnWcJ81CS3i8WihgH8gYHYyD9D+pd/JTmQlJ52Y/sxLTb9UlM5/pYkp4DuHqYCm3Ef4plkRZKR7HB4YSxafouA7gmmAsNffw/dATuhnJOjf7D2jx1tbe5gCjD8RY3HZo8ycpKltXlotXFmLa3kXbaQGnKyQT9VwG6NMrYBm5XTtvPYRxXlIbNAKM1Czg3IyJz7datt49yvoJstpAT7x/K9x65COTleU5zTfmuv7bZOW0gFytOYC9dlHGc4fKVYQVzwL6RZm+DnopSadgAqoZ14GMTWgAymhac/Djpn3iMMqyNBovYCHFr4GZS0N/gvUfwLQvgrCFUPJC8kN9B8CRYD8dlzhmajU1rh+3cSXmhtemwNjA2G53+XzGMfsxosAv3YCZ9xAwJiasA/iRKlXun5vYZxdo6lUG8tUYoJgCSFvZ3zZYYHE2irQYYo2DEBkDzwHGgzEOHLl8KUSeceP1H+YgJgBDqh9BQNIYdQxtTQzywZENKJnQVM14/YrPIkfTECHfk0KHTKFXoH12mLr2+2LTYA/Cy2NdBkj4HrlDoa4oXQD1oEXXilenHbpzT4UPS3EDMEYpFWaykG5iRiFZejc3Izch9iDljHPRdA2Z7+CInBZkldCfryAGOC/WvwClMdRHzuS9+xPGNgbOihTx5nPDwmPSsgf/eBl0/3J4nNhMJ58Rxn+qcWm4OS3Hlxvk9SfxRFURRFURRFURRFUX4NH6D9eWUSMFMJAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAARlJREFUeAHt2sGNwjAQheHn1d53S2BL2AqgA1qADugAOoAOSAtUAFQALVABdBDG4oK4gDHgJPN/0ggORglPmdhRLAEAAAC4p67ridWxbq6lEoWUwfEIar7/EML+0cFf6p6flMFdDCAJAcg5ApBzBCDnCEDOEYCcIwA5RwByjgDkHAHIOQKQcwQg5whAzrkP4Ft5ZlYblfNnNbXq6RNy38S+g53H4Oa8+im/z2mBkzogpwVGlnZ8DX1QOb9Wc2XICSAevFLLtXkWqKwWymzF3FmglCqEMI5frA1X9rHWk9p6BVxvgXF5BcTNWltd/nyxm2BJPaudXoBnAaXZqNliSyStS5L2CUbWe0Nd1gBNtLLZoRMrVAAAAODNztcA6o+RBpmkAAAAAElFTkSuQmCC`,
  _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAhFJREFUeAHt2YFRwjAUANBfJ2CEOgE4gTCBbCBOIE5AmUA3wA3UCcAJ0AnoBrrB9/9rvPPoT0nStFfDf3e53KXAb35/UwgASimllFJKKaWUOjcZBELEKXXcxtQm1HLoT2naK7X3LMs+oC88cWpbHJY9tVsI4FwBFCCnbgPVVR+qktqMKqJ0fYNTAmjyC+oeqY3AzTe1Z9PHsPSMvaYkPEEMNPkC/QWVY8M5zNFfAW3RhywxzA1EhNW6E+LkhcgagubU7cG99P7iVfkO4twCHJ/Xngn44/hXTWtCUwIO0O+jrSs7SsDMdvBCGsRq0cshDXz7TG0HxQqgN3Dph5TcUFmroFYBNHmeeEqTZ9YqkG6Ba0jTWBqUEjCHNE2lQSkBIY+9/0C8rWuLIH97gETRQlib7wWcOU2AMFZCmkppUEpAf7sr/SqlQSkBO0jTThqUEvAJaXqTBm2/BbYw7K0vXyU9AS+lA7anwBq6xb/TectqYfoSulWAL+xu5/dAbXQUKzfjncSDEOakvjAu/ry8x3hoi/fL+kXIbCM9QFyFbXvKjMfZyXWI54wyuMI4TpYivWaE8apgBbFgtTvc9sSc9hkwbAv82D3Ehu0WKq+rgeFVx3+RdbuhQwEWJpALrpqgq+GZhOD/BoNRwAlPDqvH5eFo0nszgRxawKrqNlhPOMd7MTFS3cJTSimllFJKKaWU6sYPmoOPtIp7mO8AAAAASUVORK5CYII=`,
  _ = {
    appid: 1675200,
  },
  _ = {
    appid: 1696780,
  },
  _ = {
    appid: 377490,
  },
  _ = {
    packageid: 354231,
  },
  _ = {
    appid: 4165870,
  },
  _ = {
    appid: 4165910,
  },
  _ = {
    appid: 4165890,
  },
  _ =
    `AT.AU.BE.BG.CY.CZ.DE.DK.EE.ES.FI.FR.GB.GR.HR.HU.IE.IT.LT.LU.LV.MT.NL.PL.PT.RO.SE.SI.SK.US.CA`.split(
      `.`,
    ),
  _ = [`JP`, `TW`, `HK`, `KR`];
function _(_) {
  return _.includes(_) || _.includes(_);
}
function _() {
  let { data: _ } = _(_);
  return !!_ || _.includes(_.country_code);
}
function _() {
  let _ = _();
  return (0, _.jsxs)(_, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          children: _(`#Menu_Section_Hardware`),
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `a-idH5FvWmE-`,
        }),
      (0, _.jsxs)(_, {
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      }),
    ],
  });
}
function _() {
  return _(_), _(_), _(_), _(_), _(_), _(_), _(_), _(), null;
}
function _() {
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _(),
    _ = [
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamDeck`),
      },
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamController`),
      },
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamMachine`),
      },
      {
        storeItem: _ ? _ : void 0,
        image: _(_),
        icon: _(_),
        name: _(`#Menu_Section_Hardware_SteamFrame`),
      },
      {
        storeItem: _,
      },
    ]
      .filter(({ storeItem: _ }) => _ && _.visible)
      .slice(0, 4);
  return (0, _.jsx)(_, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          ..._,
        },
        _.image,
      ),
    ),
  });
}
function _(_) {
  let { storeItem: _, image: _, icon: _, name: _ = _.name } = _;
  return (0, _.jsxs)(_, {
    className: _,
    storeItem: _,
    children: [
      _ &&
        (0, _.jsx)(`img`, {
          className: `xaLlWTq14MU-`,
          src: _,
          alt: _,
        }),
      _ &&
        (0, _.jsx)(`img`, {
          className: `ul7-oxiMBzo-`,
          src: _,
          alt: _,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
      }),
    ],
  });
}
function _() {
  let { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_),
    _ = _();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      _ &&
        (0, _.jsx)(_, {
          storeItem: _,
          name: _(`#Menu_Section_Hardware_Family`),
        }),
      _ &&
        (0, _.jsx)(_, {
          storeItem: _,
        }),
      (0, _.jsx)(_, {
        storeItem: _,
        name: _(`#Menu_Section_Hardware_ValveIndex`),
      }),
      (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          handle: `greatondeck`,
        }),
      (0, _.jsx)(_, {
        handle: `vr`,
      }),
      (0, _.jsx)(_, {
        handle: `controller`,
      }),
    ],
  });
}
var _ = _({
    AccordionSection: () => _,
    AccordionSectionHeader: () => _,
    Active: () => _,
    Chevron: () => _,
    ChevronSpacer: () => _,
    Down: () => _,
    DynamicMenu: () => _,
    Enter: () => _,
    EnterActive: () => _,
    Exit: () => _,
    ExitActive: () => _,
    Label: () => _,
    MenuItem: () => _,
    MenuOptions: () => _,
    MenuSection: () => _,
    MoreMenuAccordion: () => _,
    MoreSectionTransitionContent: () => _,
    SectionTransition: () => _,
    SuppressScrollOnBody: () => _,
    TransitionContainer: () => _,
    _: () => _,
    default: () => _,
    storeMenuResponsiveModeWidth: () => _,
  }),
  _ = `730px`,
  _ = `uubVddXB5kU-`,
  _ = `uY4s6MvOMgg-`,
  _ = `Pfd-5hhiqnQ-`,
  _ = `Ku9EOgxmYlQ-`,
  _ = `_8gSfHm4xLbA-`,
  _ = `_5JSKXoBECls-`,
  _ = `CR2T6JduIBg-`,
  _ = `Ef3OZ3DXNNg-`,
  _ = `kpL-FlO60DA-`,
  _ = `URU1QNgiJoI-`,
  _ = `_7-iC99yYyRM-`,
  _ = `FesdbMHYmHE-`,
  _ = `QvMFXkuuOT0-`,
  _ = `IkA3sG07hBs-`,
  _ = `Q5F9HdAlky4-`,
  _ = `V8LZUVeBm1w-`,
  _ = `FJZra7o0ZeI-`,
  _ = `Qwat2inonJ4-`,
  _ = `_0RyEK-d-Ce0-`,
  _ = `MhZf4xYoNi0-`,
  _ = `ZJFx7XoUqQk-`,
  _ = {
    storeMenuResponsiveModeWidth: _,
    SuppressScrollOnBody: _,
    DynamicMenu: _,
    MenuOptions: _,
    MenuSection: _,
    MenuItem: _,
    ChevronSpacer: _,
    Chevron: _,
    Active: _,
    MoreMenuAccordion: _,
    AccordionSection: _,
    AccordionSectionHeader: _,
    Label: _,
    TransitionContainer: _,
    _: _,
    SectionTransition: _,
    Enter: _,
    EnterActive: _,
    Exit: _,
    ExitActive: _,
    Down: _,
    MoreSectionTransitionContent: _,
  };
function _(_) {
  let [_] = _.useState(_.excludedSections),
    _ = _(_),
    _ = _(),
    [_, _] = _.useState();
  return _
    ? (0, _.jsx)(_, {
        rgSections: _,
        activeSection: _,
        setActiveSection: _,
      })
    : (0, _.jsx)(_, {
        rgSections: _,
        activeSection: _ ?? _[0][0],
        setActiveSection: _,
      });
}
function _(_) {
  let { rgSections: _, activeSection: _, setActiveSection: _ } = _,
    { onMouseLeaveContainer: _, onMouseEnterItem: _ } = _(_, _),
    _ = _(`${_.STORE_BASE_URL}sitemap`);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(_, {
        "flow-children": `row`,
        navEntryPreferPosition: _.MAINTAIN_Y,
        className: _,
        children: [
          (0, _.jsxs)(_, {
            "flow-children": `column`,
            className: _,
            onMouseLeave: _,
            children: [
              _.map(([_, _]) =>
                (0, _.jsx)(
                  _,
                  {
                    active: _ == _,
                    setSection: _,
                    onMouseEnterItem: _,
                    section: _,
                    children: _,
                  },
                  _,
                ),
              ),
              (0, _.jsx)(_, {
                className: _,
                href: _,
                children: _(`#Menu_Popover_ViewAll`),
              }),
            ],
          }),
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              rgSections: _,
              section: _,
            }),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        rgSections: _,
      }),
    ],
  });
}
function _(_) {
  let { rgSections: _, activeSection: _, setActiveSection: _ } = _;
  return (0, _.jsx)(`div`, {
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          rgSection: _,
          active: _[0] === _,
          setActiveSection: _,
        },
        _[0],
      ),
    ),
  });
}
function _(_) {
  let { rgSection: _, active: _, setActiveSection: _ } = _,
    [_, _] = _,
    _ = _.useCallback(() => _((_) => (_ === _ ? void 0 : _)), [_, _]);
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `Ef3OZ3DXNNg-`),
    children: [
      (0, _.jsxs)(`div`, {
        className: (0, _.default)(_, _ && `Ef3OZ3DXNNg-`),
        onClick: _,
        children: [
          (0, _.jsx)(`div`, {
            role: `heading`,
            "aria-level": 3,
            className: _,
            children: _,
          }),
          (0, _.jsx)(_, {
            className: _,
          }),
        ],
      }),
      (0, _.jsx)(_, {
        visible: _,
        keepMounted: !0,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            section: _,
          }),
        }),
      }),
    ],
  });
}
var _ = _.memo(function (_) {
  let { rgSections: _ } = _;
  return _.map((_) =>
    (0, _.jsx)(
      _,
      {
        section: _[0],
      },
      _[0],
    ),
  );
});
function _(_) {
  let _ = _();
  return _.useMemo(
    () => _.filter((_) => _[0] !== `more` && (!_ || !_.has(_[0]))),
    [_, _],
  );
}
var _ = _.memo(function (_) {
    let { rgSections: _, section: _ } = _,
      [_, _] = _.useState(_),
      [_, _] = _.useState(void 0);
    return (
      (0, _.useEffect)(() => {
        let _ = _.findIndex((_) => _[0] == _) || 0,
          _ = _.findIndex((_) => _[0] == _) || 0;
        _(_ < _ ? _ : _ > _ ? _ : void 0), _(_);
      }, [_, _]),
      (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          childrenKey: _,
          childrenClasses: _(_, _),
          directionClass: _,
          animate: !!_,
          sizeClass: _,
          children: (0, _.jsx)(_, {
            section: _,
          }),
        }),
      })
    );
  }),
  _ = 0.25;
function _(_, _) {
  let _ = _.useRef(void 0);
  return (
    (0, _.useEffect)(() => {
      _.current?.section != _ && (_.current = void 0);
    }, [_]),
    {
      onMouseLeaveContainer: _.useCallback(() => (_.current = void 0), []),
      onMouseEnterItem: _.useCallback(
        (_, _) => {
          if (_.current) {
            let { _: _, _: _, section: _ } = _.current,
              _ = _.clientX - _,
              _ = _.clientY - _;
            if (_ == _) {
              _ < 0 &&
                (_.current = {
                  _: _.clientX,
                  _: _.clientY,
                  section: _,
                });
              return;
            }
            if (_ > 0 && (_ == 0 ? 0 : Math.abs(_) / _) < _) return;
          }
          _(_),
            (_.current = {
              _: _.clientX,
              _: _.clientY,
              section: _,
            });
        },
        [_],
      ),
    }
  );
}
function _(_) {
  let {
      setSection: _,
      onMouseEnterItem: _,
      active: _,
      section: _,
      children: _,
    } = _,
    _ = _.useCallback(() => _(_), [_, _]),
    _ = _.useCallback((_) => _(_, _), [_, _]);
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _ && `Ef3OZ3DXNNg-`),
    onClick: _,
    onMouseMove: _,
    onGamepadFocus: _,
    children: [_, ` `, (0, _.jsx)(_, {})],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(`svg`, {
        xmlns: `http://www.w3.org/2000/svg`,
        viewBox: `0 0 12 13`,
        fill: `none`,
        className: _,
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M6.36084 6.68974L3.66211 3.99101L4.84062 2.8125L8.71786 6.68974L4.84062 10.567L3.66211 9.38847L6.36084 6.68974Z`,
        }),
      }),
    ],
  });
}
function _(_, _) {
  return _(_(_(), _(), _(), _, _));
}
function _(_, _, _, _, _) {
  let { storeBrowseContext: _, dataLoader: _, cacheStoreItemData: _ } = _;
  return {
    queryKey: [`PackagePurchaseRecommendations`, _],
    queryFn: async () => {
      let _ = (
          (
            await _.fetchQuery(
              _(
                _,
                _,
                {
                  rgAdditionalRecommendationIDs: _ ?? [],
                },
                _ && {
                  data_request: _,
                  cacheStoreItemData: _,
                },
              ),
            )
          )?.purchase_recommendations || []
        ).map((_) => _.item_id),
        _ = await Promise.all(_.map((_) => _.fetchQuery(_(_, _))));
      return _.filter((_, _) => {
        let _ = _[_];
        return !(_?.already_owned || _?.ignored);
      });
    },
    enabled: _.logged_in,
    staleTime: 600 * 1e3,
  };
}
function _(_, _, _, _) {
  let {
      bIncludeDailyDeals: _ = !1,
      nIncludeTopNSpecials: _ = 0,
      spotlightLocation: _,
      rgAdditionalRecommendationIDs: _,
    } = _,
    _ = {
      bIncludeDailyDeals: _,
      nIncludeTopNSpecials: _,
      spotlightLocation: _,
      rgAdditionalRecommendationIDs: _,
    };
  return {
    queryKey: [`ItemsToFeature`, _],
    queryFn: () => _(_, _, _, _),
    staleTime: 3600 * 1e3,
  };
}
async function _(_, _, _, _) {
  let _ = _.Init(_);
  _(_, _),
    _ && _(_, _.data_request),
    _.bIncludeDailyDeals && _.Body().set_include_dailydeals(!0),
    _.nIncludeTopNSpecials &&
      _.Body().set_include_top_specials_count(_.nIncludeTopNSpecials),
    _.spotlightLocation &&
      _.Body().set_include_spotlights(_.fromObject(_.spotlightLocation)),
    _.rgAdditionalRecommendationIDs !== void 0 &&
      (_.Body().set_include_purchase_recommendations(!0),
      _.rgAdditionalRecommendationIDs.forEach((_) =>
        _.Body().add_additional_purchase_item_ids(_.fromObject(_)),
      ));
  let _ = await _.GetItemsToFeature(_, _);
  if (!_.BSuccess()) throw _.GetErrorMessage();
  if (_) {
    let { cacheStoreItemData: _ } = _,
      _ = {
        ..._.data_request,
        apply_user_filters: !0,
      },
      _ = (_) => _ && _(_, _);
    _.Body()
      .spotlights()
      .forEach((_) => _(_.associated_item(!1))),
      _.Body()
        .daily_deals()
        .forEach((_) => _(_.item(!1))),
      _.Body()
        .specials()
        .forEach((_) => _(_.item(!1))),
      _.Body()
        .purchase_recommendations()
        .forEach((_) => _(_.item(!1)));
  }
  return _.Body().toObject();
}
var _ = `-ql7Gy6zpYM-`,
  _ = `XaUglLvq38c-`,
  _ = `hR30rQ7-vWs-`,
  _ = `_4IEzXSK-SRw-`,
  _ = `EBHTztRtXvI-`,
  _ = `EeXIvUouJ-A-`,
  _ = `pLRN5w2yzas-`,
  _ = `AlN4Tc-zfOE-`;
function _(_) {
  let { data: _ } = _(_);
  if (_(_)) return `in_cart`;
  if (_?.excluded_content_descriptorids?.length)
    return `excluded_by_preferences`;
  if (_?.ignored) return `ignored`;
  if (_?.already_owned) return `in_library`;
  if (_?.on_wishlist) return `on_wishlist`;
}
function _(_) {
  switch (_) {
    case `in_cart`:
      return _(`#ItemFlag_InCart`);
    case `excluded_by_preferences`:
      return _(`#ItemFlag_ExcludedByPreferences`);
    case `ignored`:
      return _(`#ItemFlag_Ignored`);
    case `in_library`:
      return _(`#ItemFlag_InLibrary`);
    case `on_wishlist`:
      return _(`#ItemFlag_OnWishlist`);
  }
}
function _(_) {
  let { itemid: _, children: _, collapse: _ } = _,
    _ = _(_),
    _;
  switch (_) {
    case `in_cart`:
      _ = (0, _.jsx)(_, {});
      break;
    case `excluded_by_preferences`:
      _ = (0, _.jsx)(_, {});
      break;
    case `ignored`:
      _ = (0, _.jsx)(_, {});
      break;
    case `in_library`:
      _ = (0, _.jsx)(_, {});
      break;
    case `on_wishlist`:
      _ = (0, _.jsx)(_, {});
      break;
  }
  if (!_) return _;
  let { className: _, children: _, ..._ } = _.props,
    _ = (0, _.default)(_, _, _ && `-CFYcc7uPls-`);
  return _.cloneElement(
    _,
    {
      ..._,
      className: _,
    },
    _,
    _,
  );
}
function _(_) {
  let { className: _, svg: _, children: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _),
    children: [
      _,
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`in_library`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`on_wishlist`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`in_cart`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`ignored`),
  });
}
function _() {
  return (0, _.jsx)(_, {
    className: _,
    svg: (0, _.jsx)(_, {}),
    children: _(`excluded_by_preferences`),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 15 14`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M14 3H1V1H14V3ZM14 6H1V8H14V6ZM14 11H1V13H14V11Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `11`,
    height: `10`,
    viewBox: `0 0 11 10`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M5.31189 0.0504065L6.54671 3.85081H10.5427L7.30988 6.19959L8.5447 10L5.31189 7.65122L2.07907 10L3.31389 6.19959L0.0810761 3.85081H4.07706L5.31189 0.0504065Z`,
      fill: `currentColor`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    width: `11`,
    height: `11`,
    viewBox: `0 0 11 11`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M10.2758 2.45971L9.20028 6.3586C9.14883 6.55507 9.03359 6.72888 8.87266 6.85277C8.71173 6.97665 8.51421 7.04358 8.31112 7.04304H4.50695C4.309 7.04324 4.11631 6.97935 3.95769 6.86093C3.79906 6.74252 3.68303 6.57593 3.62695 6.3861L2.31 2.45971H0.611115V1.23749H2.53C2.72203 1.23785 2.9091 1.2985 3.0648 1.41089C3.2205 1.52328 3.33697 1.68173 3.39778 1.86388L3.59945 2.47499L10.2758 2.45971ZM4.58334 8.26527C4.43225 8.26527 4.28456 8.31007 4.15894 8.394C4.03332 8.47794 3.93541 8.59724 3.8776 8.73683C3.81978 8.87641 3.80465 9.03 3.83413 9.17818C3.8636 9.32636 3.93635 9.46247 4.04319 9.5693C4.15002 9.67614 4.28613 9.74889 4.43431 9.77837C4.58249 9.80784 4.73608 9.79271 4.87566 9.7349C5.01525 9.67708 5.13455 9.57917 5.21849 9.45355C5.30242 9.32793 5.34723 9.18024 5.34723 9.02915C5.34723 8.82656 5.26675 8.63226 5.12349 8.489C4.98023 8.34575 4.78593 8.26527 4.58334 8.26527ZM8.25 8.26527C8.09892 8.26527 7.95123 8.31007 7.82561 8.394C7.69999 8.47794 7.60208 8.59724 7.54426 8.73683C7.48645 8.87641 7.47132 9.03 7.50079 9.17818C7.53027 9.32636 7.60302 9.46247 7.70985 9.5693C7.81668 9.67614 7.9528 9.74889 8.10098 9.77837C8.24916 9.80784 8.40275 9.79271 8.54233 9.7349C8.68191 9.67708 8.80122 9.57917 8.88515 9.45355C8.96909 9.32793 9.01389 9.18024 9.01389 9.02915C9.01389 8.82656 8.93341 8.63226 8.79016 8.489C8.6469 8.34575 8.4526 8.26527 8.25 8.26527Z`,
      fill: `currentColor`,
    }),
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `11`,
    height: `10`,
    viewBox: `0 0 11 10`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M5 10C4.30833 10 3.65833 9.86875 3.05 9.60625C2.44167 9.34375 1.9125 8.9875 1.4625 8.5375C1.0125 8.0875 0.65625 7.55833 0.39375 6.95C0.13125 6.34167 0 5.69167 0 5C0 4.30833 0.13125 3.65833 0.39375 3.05C0.65625 2.44167 1.0125 1.9125 1.4625 1.4625C1.9125 1.0125 2.44167 0.65625 3.05 0.39375C3.65833 0.13125 4.30833 0 5 0C5.69167 0 6.34167 0.13125 6.95 0.39375C7.55833 0.65625 8.0875 1.0125 8.5375 1.4625C8.9875 1.9125 9.34375 2.44167 9.60625 3.05C9.86875 3.65833 10 4.30833 10 5C10 5.69167 9.86875 6.34167 9.60625 6.95C9.34375 7.55833 8.9875 8.0875 8.5375 8.5375C8.0875 8.9875 7.55833 9.34375 6.95 9.60625C6.34167 9.86875 5.69167 10 5 10ZM5 9C6.11667 9 7.0625 8.6125 7.8375 7.8375C8.6125 7.0625 9 6.11667 9 5C9 3.88333 8.6125 2.9375 7.8375 2.1625C7.0625 1.3875 6.11667 1 5 1C3.88333 1 2.9375 1.3875 2.1625 2.1625C1.3875 2.9375 1 3.88333 1 5C1 6.11667 1.3875 7.0625 2.1625 7.8375C2.9375 8.6125 3.88333 9 5 9Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M7.5 5.75H2.5V4.25H7.5V5.75Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(`svg`, {
    width: `11`,
    height: `10`,
    viewBox: `0 0 11 10`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: [
      (0, _.jsx)(`path`, {
        _: `M5 10C4.30833 10 3.65833 9.86875 3.05 9.60625C2.44167 9.34375 1.9125 8.9875 1.4625 8.5375C1.0125 8.0875 0.65625 7.55833 0.39375 6.95C0.13125 6.34167 0 5.69167 0 5C0 4.30833 0.13125 3.65833 0.39375 3.05C0.65625 2.44167 1.0125 1.9125 1.4625 1.4625C1.9125 1.0125 2.44167 0.65625 3.05 0.39375C3.65833 0.13125 4.30833 0 5 0C5.69167 0 6.34167 0.13125 6.95 0.39375C7.55833 0.65625 8.0875 1.0125 8.5375 1.4625C8.9875 1.9125 9.34375 2.44167 9.60625 3.05C9.86875 3.65833 10 4.30833 10 5C10 5.69167 9.86875 6.34167 9.60625 6.95C9.34375 7.55833 8.9875 8.0875 8.5375 8.5375C8.0875 8.9875 7.55833 9.34375 6.95 9.60625C6.34167 9.86875 5.69167 10 5 10ZM5 9C6.11667 9 7.0625 8.6125 7.8375 7.8375C8.6125 7.0625 9 6.11667 9 5C9 3.88333 8.6125 2.9375 7.8375 2.1625C7.0625 1.3875 6.11667 1 5 1C3.88333 1 2.9375 1.3875 2.1625 2.1625C1.3875 2.9375 1 3.88333 1 5C1 6.11667 1.3875 7.0625 2.1625 7.8375C2.9375 8.6125 3.88333 9 5 9Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M6.36527 7.42592L2.57407 3.63473L3.63474 2.57407L7.42593 6.36526L6.36527 7.42592Z`,
        fill: `currentColor`,
      }),
      (0, _.jsx)(`path`, {
        _: `M3.63473 7.42592L7.42593 3.63473L6.36526 2.57407L2.57407 6.36526L3.63473 7.42592Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
var _ = `qLQjwozYKNA-`,
  _ = `cO0trRuLfzA-`,
  _ = `JImNxATJ1xc-`,
  _ = `_6iY2YwtsQR0-`,
  _ = `kNeH7jZB5vg-`,
  _ = `qy5xFmO5xOU-`,
  _ = `XG3WxbEbgs4-`;
function _(_) {
  let { rgItemIDs: _ } = _;
  return (0, _.jsx)(_, {
    "flow-children": `column`,
    navEntryPreferPosition: _.MAINTAIN_Y,
    className: _,
    children: _.map((_) =>
      (0, _.jsx)(
        _,
        {
          itemid: _,
        },
        _(_),
      ),
    ),
  });
}
var _ = _.memo(function (_) {
  let { itemid: _, active: _, className: _, ..._ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    itemid: _,
    collapse: !0,
    children: (0, _.jsxs)(_, {
      ..._,
      storeItem: _,
      className: (0, _.default)(
        _,
        _ === void 0 && `lyUq2mbGYf4-`,
        _ && `_1lo9weU-WUo-`,
        _,
      ),
      children: [
        (0, _.jsx)(_, {
          itemid: _,
        }),
        (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`div`, {
              className: _,
              children: _?.name,
            }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  storeItem: _,
                  purchaseOption: _,
                }),
                (0, _.jsx)(_, {
                  purchaseOption: _,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
});
function _(_) {
  let { storeItem: _, purchaseOption: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        purchaseOption: _,
        size: `inline`,
        transparentBackground: !0,
      })
    : _?.is_free
      ? _(`#Price_Free`)
      : (0, _.jsx)(_.Fragment, {
          children: `\xA0`,
        });
}
function _(_) {
  let { purchaseOption: _ } = _;
  return !_ || !_.included_game_count || _.included_game_count <= 1
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Menu_IncludesXGames`, _(_.included_game_count)),
      });
}
function _(_) {
  let { itemid: _ } = _,
    { data: _ } = _(_),
    _ = _ && _(_, `small_capsule`);
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, !_ && `_52nLEJcbM8I-`),
    children:
      _ &&
      (0, _.jsx)(`img`, {
        src: _,
        alt: ``,
      }),
  });
}
var _ = `v0pHojvT3mQ-`,
  _ = `IOoSOaGrC7Q-`,
  _ = `YDu9omcur7Q-`,
  _ = `-U8O2frQ6tI-`,
  _ = `awopm9AseKk-`,
  _ = `d30iSoA-0mw-`,
  _ = `-NaokOc2Odw-`,
  _ = `fJyhKfVIRy0-`,
  _ = `LFhJNiM4rc8-`,
  _ = `BidIk2Wi4KU-`,
  _ = `-XHE0JGw-tw-`,
  _ = `XUs1hmYynpc-`,
  _ = `GKTMS0L6Uik-`,
  _ = `Zw0RSNYRvxk-`,
  _ = `ShnNYR4pEXQ-`,
  _ = `Q2UidgicvLo-`;
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1200 1200`,
    ..._,
    children: (0, _.jsx)(`path`, {
      _: `m126.84 1117.1h946.31c37.266-0.046875 67.5-30.281 67.547-67.547v-628.45h-1081.4v628.45c0.046875 37.266 30.281 67.5 67.547 67.547zm435-631.69h76.312c16.172 0.09375 29.297 13.219 29.297 29.391v76.359c0 16.172-13.125 29.25-29.297 29.25h-76.312c-16.172 0-29.297-13.078-29.297-29.25v-76.359c0-16.172 13.125-29.297 29.297-29.391zm198.84 0h76.312c16.172 0.09375 29.297 13.219 29.297 29.391v76.359c0 16.172-13.125 29.25-29.297 29.25h-76.312c-15.938-0.32812-28.688-13.312-28.688-29.25v-76.359c0-16.172 13.078-29.297 29.297-29.391zm-397.69 0h76.312c16.219 0.09375 29.297 13.219 29.297 29.391v76.359c0 16.172-13.125 29.25-29.297 29.25h-76.312c-16.172 0-29.297-13.078-29.297-29.25v-76.359c0-16.172 13.125-29.297 29.297-29.391zm198.84 210.61h76.312c16.172 0 29.297 13.125 29.297 29.297v76.453-0.046875c0 16.172-13.125 29.297-29.297 29.297h-76.312c-16.172 0-29.297-13.125-29.297-29.297v-76.406c0-16.172 13.125-29.297 29.297-29.297zm198.84 0h76.312c16.172 0 29.297 13.125 29.297 29.297v76.453-0.046875c0 16.172-13.125 29.297-29.297 29.297h-76.312c-15.938-0.32812-28.688-13.359-28.688-29.297v-76.406c0-15.938 12.75-28.969 28.688-29.297zm-397.69 0h76.312c16.172 0 29.297 13.125 29.297 29.297v76.453-0.046875c0 16.172-13.125 29.297-29.297 29.297h-76.312c-16.172 0-29.297-13.125-29.297-29.297v-76.406c0-16.172 13.125-29.297 29.297-29.297zm597-210.61h76.312c16.219 0.09375 29.297 13.219 29.297 29.391v76.359c-0.09375 16.125-13.125 29.203-29.297 29.25h-76.312c-16.172 0-29.344-13.078-29.391-29.25v-76.359c0-16.219 13.172-29.391 29.391-29.391zm0 210.61h76.312c16.172 0.046875 29.203 13.125 29.297 29.297v76.453-0.046875c-0.09375 16.172-13.125 29.25-29.297 29.297h-76.312c-16.172 0-29.344-13.078-29.391-29.297v-76.406c0.046874-16.219 13.219-29.297 29.391-29.297zm-795.84 0h75.844c16.172 0 29.344 13.078 29.391 29.297v76.453-0.046875c-0.046875 16.219-13.219 29.297-29.391 29.297h-75.844c-16.125-0.046875-29.203-13.125-29.297-29.297v-76.406c0.09375-16.172 13.172-29.25 29.297-29.297zm397.69 210.61h76.312c7.7812 0 15.234 3.0938 20.766 8.625 5.4844 5.4844 8.5312 12.984 8.5312 20.766v76.312c0 16.172-13.125 29.297-29.297 29.297h-76.312c-16.172 0-29.297-13.125-29.297-29.297v-76.312c0-16.172 13.125-29.297 29.297-29.297zm397.69 0h76.312c7.7812 0 15.234 3.0938 20.766 8.625 5.4844 5.4844 8.5312 12.984 8.5312 20.766v76.312c0 16.172-13.125 29.297-29.297 29.297h-75.844c-16.172 0-29.344-13.078-29.391-29.297v-76.312c0-7.7812 3.0938-15.281 8.625-20.766 5.4844-5.5312 12.984-8.625 20.766-8.625zm-198.84 0h76.312c7.7812 0 15.234 3.0938 20.766 8.625 5.4844 5.4844 8.5312 12.984 8.5312 20.766v76.312c0 16.172-13.125 29.297-29.297 29.297h-76.312c-15.984-0.32812-28.734-13.406-28.688-29.391v-76.219c0-16.172 13.125-29.297 29.297-29.297zm-397.69 0h76.312c7.7812 0 15.281 3.0938 20.766 8.625 5.4844 5.4844 8.5312 12.984 8.5312 20.766v76.312c0 16.172-13.125 29.297-29.297 29.297h-76.312c-16.172 0-29.297-13.125-29.297-29.297v-76.312c0-16.172 13.125-29.297 29.297-29.297zm-198.84 0h75.844c7.875-0.14062 15.469 2.9062 21.094 8.4375s8.7656 13.078 8.7656 20.953v76.312c-0.046874 7.8281-3.2344 15.328-8.8594 20.812-5.5781 5.4844-13.172 8.4844-21 8.3438h-75.844c-16.172 0-29.297-13.078-29.297-29.25v-76.219c0-16.172 13.125-29.297 29.297-29.297zm976.55-507.98v-175.4c-0.23437-37.172-30.375-67.172-67.547-67.219h-111.7v77.391c19.078 24.094 22.734 57 9.3281 84.703-13.359 27.656-41.391 45.281-72.141 45.281s-58.828-17.625-72.188-45.281c-13.406-27.703-9.75-60.609 9.3281-84.703v-77.391h-471.56v77.391c19.078 24.094 22.734 57 9.3281 84.703-13.359 27.656-41.438 45.281-72.188 45.281s-58.781-17.625-72.141-45.281c-13.406-27.703-9.75-60.609 9.3281-84.703v-77.391h-111.7c-37.172 0.046876-67.312 30.047-67.547 67.219v175.4zm-798.94-134.63c0 22.266-18.047 40.312-40.312 40.312-22.266 0-40.312-18.047-40.312-40.312v-140.76c0.046876-10.734 4.3594-21 12-28.547 11.578-11.438 28.875-14.859 43.922-8.625 15.047 6.2344 24.844 20.906 24.938 37.172v140.76zm516-140.63c0-22.266 18.047-40.312 40.312-40.312 10.734 0 20.953 4.3125 28.453 12 7.6406 7.5 11.953 17.812 12 28.547v140.39c-0.046876 10.688-4.4062 20.953-12 28.453-7.5 7.6406-17.719 12-28.453 12-22.078-0.42187-39.797-18.375-39.844-40.453z`,
      fillRule: `evenodd`,
    }),
  });
}
function _() {
  return (0, _.jsx)(_, {
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsxs)(_, {
          className: _,
          children: [
            _.logged_in ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
            (0, _.jsx)(_, {}),
          ],
        }),
        (0, _.jsx)(_, {}),
      ],
    }),
  });
}
function _() {
  return _(_), _(), null;
}
function _() {
  let _ = _();
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      !_ &&
        (0, _.jsx)(_, {
          href: `${_.STORE_BASE_URL}personalcalendar/`,
          children: _(`#Menu_Section_Recommendations_PersonalCalendar`),
        }),
      (0, _.jsx)(_, {
        eStoreDiscoveryQueueType: 0,
        children: _(`#Menu_Section_Recommendations_DiscoveryQueue_Title`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}communityrecommendations/`,
        children: _(`#Menu_Section_Recommendations_CommunityRecommendations`),
      }),
      (0, _.jsx)(_, {
        eStoreDiscoveryQueueType: 3,
        children: _(`#Menu_Section_Recommendations_NewReleasesQueue`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}recommender/`,
        children: _(`#Menu_Section_Recommendations_InteractiveRecommender`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}recommended/friendactivity/`,
        children: _(`#Menu_Section_Recommendations_PopularAmongFriends`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}curators/`,
        children: _(`#Menu_Section_Recommendations_SteamCurators`),
      }),
      (0, _.jsx)(_, {
        href: `${_.STORE_BASE_URL}dlcforyou/`,
        children: _(`#Menu_Section_Recommendations_DLCForYou`),
      }),
    ],
  });
}
function _(_) {
  let _ = _(),
    { showDiscoveryQueue: _ } = _(_),
    _ = _.useCallback(
      (_) => {
        _(), _.preventDefault();
      },
      [_],
    );
  return _ ? _ : void 0;
}
function _(_) {
  let { eStoreDiscoveryQueueType: _, children: _ } = _,
    _ = _(_);
  return (0, _.jsx)(_, {
    href: `${_.STORE_BASE_URL}explore/next/${_}`,
    onClick: _,
    children: _,
  });
}
function _() {
  return _()
    ? (0, _.jsxs)(_, {
        className: (0, _.default)(_, _),
        href: `${_.STORE_BASE_URL}personalcalendar/`,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                style: {
                  backgroundImage: `url('${_.MEDIA_CDN_URL}store/labs/main/images/personal_calendar_menu_bg.png')`,
                },
              }),
              (0, _.jsx)(`div`, {
                className: _,
              }),
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: _(`#Menu_Section_Recommendations_New`),
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`div`, {
                className: _,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsxs)(`div`, {
                className: _,
                children: [
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(
                      `#Menu_Section_Recommendations_PersonalCalendar`,
                    ),
                  }),
                  (0, _.jsx)(`div`, {
                    className: _,
                    children: _(
                      `#Menu_Section_Recommendations_PersonalCalendar_Description`,
                    ),
                  }),
                  (0, _.jsxs)(`div`, {
                    className: _,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: _,
                        children: _(
                          `#Menu_Section_Recommendations_PersonalCalendar_ActionButton`,
                        ),
                      }),
                      (0, _.jsx)(_, {}),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : null;
}
var _ = {
    include_assets: !0,
    apply_user_filters: !0,
  },
  _ = Math.floor(Date.now() / (600 * 1e3));
function _(_) {
  let { rgRecentApps: _ } = _,
    { data: _ } = _(_),
    _ = _.useMemo(() => {
      if (!_) return [];
      let _ = new Set(_?.map(_) || []);
      return _(
        _.slice(0, 10).filter((_) => !_.has(_(_))),
        0,
        _(_),
      ).slice(0, 3);
    }, [_, _]);
  return (0, _.jsx)(_, {
    feature: `package-purchase-recommendations`,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          children: _(`#Menu_Section_Browse_Recommended`),
        }),
        (0, _.jsx)(_, {
          rgItemIDs: _,
        }),
      ],
    }),
  });
}
function _() {
  let { data: _ } = _(
    {
      count: 3,
      name: `Store Menu Top Grossing`,
    },
    _,
  );
  return (0, _.jsx)(_, {
    feature: `topsellers`,
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(_, {
          children: _(`#Menu_TopSellers`),
        }),
        (0, _.jsx)(_, {
          rgItemIDs: _?.rgItemIDs || [],
        }),
      ],
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 18 16`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M11.0941 6.30047L7.19722 2.40354L9.60075 -3.86836e-07L17.6008 8L9.60075 16L7.19722 13.5965L11.0941 9.69958L0.750976 9.69958L0.750976 6.30047L11.0941 6.30047Z`,
    }),
  });
}
var _ = `WyMLWD-8Wnw-`,
  _ = `_5ZHLRq2Su0c-`,
  _ = `SRPvXOCpPl4-`;
function _() {
  let _ = _();
  return (0, _.jsxs)(_, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          children: _(`#Menu_Section_SpecialSections`),
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `wyW5n0va4cs-`,
        }),
      (0, _.jsxs)(_, {
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      }),
    ],
  });
}
function _() {
  return _()
    ? (0, _.jsxs)(_, {
        className: _,
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      })
    : (0, _.jsxs)(_.Fragment, {
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      });
}
function _() {
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        handle: `software`,
      }),
      (0, _.jsx)(_, {
        handle: `soundtracks`,
      }),
      (0, _.jsx)(_, {
        handle: `earlyaccess`,
      }),
      (0, _.jsx)(_, {}),
      (0, _.jsx)(_, {
        handle: `pccafe`,
      }),
      (0, _.jsx)(_, {
        handle: `macos`,
        globalOnly: !0,
      }),
      (0, _.jsx)(_, {
        handle: `linux`,
        globalOnly: !0,
      }),
    ],
  });
}
function _() {
  return _.EREALM == _.k_ESteamRealmChina
    ? null
    : (0, _.jsxs)(_, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}sale/nextfest/`,
            children: _(`#Menu_Section_SpecialSections_NextFest`),
          }),
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}steamawards/archive`,
            children: _(`#Menu_Section_SpecialSections_SteamAwards`),
          }),
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}yearinreview/`,
            children: _(`#Menu_Section_SpecialSections_SteamReplay`),
          }),
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}labs/`,
            children: _(`#Menu_Section_SpecialSections_SteamLabs`),
          }),
        ],
      });
}
function _() {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            handle: `demos`,
            icon: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            href: `${_.STORE_BASE_URL}dlcforyou/`,
            name: _(`#Menu_Section_SpecialSections_DLCForYou`),
            icon: (0, _.jsx)(_, {}),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          href: `${_.STORE_BASE_URL}news/collection/sales/`,
          name: _(`#Menu_Section_SpecialSections_SaleEvents`),
          icon: (0, _.jsx)(_, {}),
        }),
      }),
    ],
  });
}
var _ = _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      fill: `none`,
      ..._,
      preserveAspectRatio: `xMidYMid meet`,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM18 28.54L8.23001 18.77L11.77 15.23L15.5 19V8H20.5V19L24.23 15.27L27.77 18.81L18 28.54Z`,
      }),
    });
  }),
  _ = _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      fill: `none`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M10.8344 3.69379C18.7351 -0.263479 28.3486 2.93369 32.306 10.8344C36.2633 18.7352 33.0661 28.3486 25.1654 32.3061C17.2646 36.2633 7.65117 33.0662 3.69373 25.1655C-0.263515 17.2647 2.93364 7.65123 10.8344 3.69379ZM20.3236 23.5307C19.7603 23.768 19.1784 23.9101 18.5961 23.9682L19.2933 30.9379C20.667 30.8009 22.0391 30.4411 23.3597 29.8422L20.3236 23.5307ZM23.4447 20.5131C22.9403 21.6077 22.1064 22.5573 20.9945 23.1967L24.0336 29.5121C26.671 28.1311 28.6404 25.9659 29.8011 23.4467L23.4447 20.5131ZM20.682 16.6567C20.0778 15.4504 18.7708 14.8291 17.5062 15.0405L17.5052 15.0395C17.2171 15.0877 16.9315 15.1802 16.6566 15.3178C15.3964 15.9491 14.7773 17.3469 15.0765 18.6625C15.0888 18.7162 15.1016 18.7701 15.1166 18.8227H15.1146C15.1651 18.9991 15.2326 19.1732 15.3177 19.3432C15.5654 19.8377 15.933 20.2313 16.3656 20.5121C16.46 20.5738 16.5583 20.6292 16.6595 20.6801C17.4756 21.0874 18.4649 21.1219 19.3431 20.6821C20.0538 20.3261 20.5589 19.7252 20.8129 19.0336C20.8344 18.9756 20.8535 18.9165 20.8715 18.8569C20.8841 18.8145 20.8958 18.7719 20.9066 18.7289C20.9133 18.7026 20.9211 18.6765 20.9271 18.6498C21.0718 17.9999 21.0034 17.2984 20.682 16.6567ZM12.0912 6.42133C9.68701 7.64774 7.82707 9.52186 6.6156 11.7241L12.7455 15.103C13.28 14.1315 14.0879 13.2978 15.1273 12.7319L12.0912 6.42133ZM15.8588 5.17426C14.8144 5.34895 13.7774 5.65575 12.7689 6.10004L15.808 12.4174C16.2033 12.2617 16.6062 12.1503 17.0121 12.0825L15.8588 5.17426Z`,
      }),
    });
  }),
  _ = _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 30 30`,
      fill: `none`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M28.1504 16.0166L16.0166 28.1504L3.33301 15.4668V3.33301H15.4668L28.1504 16.0166ZM12.4023 11.1221L8.33301 11.6387L11.3105 14.4004L10.5605 18.333L14.167 16.4268L17.7734 18.333L17.0264 14.4004L20 11.6387L15.9307 11.1221L14.167 7.5L12.4023 11.1221Z`,
      }),
    });
  });
_.memo(function (_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 36 36`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M14 3C10.6863 3 8 5.68629 8 9V23C8 28.5228 12.4772 33 18 33C23.5228 33 28 28.5228 28 23V9C28 5.68629 25.3137 3 22 3H21V14C21 15.6569 19.6569 17 18 17C16.3431 17 15 15.6569 15 14V3H14Z`,
      }),
      (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M17 5H19V11H17V5Z`,
      }),
    ],
  });
}),
  _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      fill: `none`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        fillRule: `evenodd`,
        clipRule: `evenodd`,
        _: `M31.3191 25.8753C27.1777 33.0485 18.0054 35.5062 10.8322 31.3647C3.65899 27.2233 1.20128 18.051 5.34272 10.8778C9.48417 3.70459 18.6565 1.24687 25.8297 5.38831C33.0029 9.52976 35.4606 18.7021 31.3191 25.8753ZM13.1684 23.2918C12.8141 23.2033 12.4599 23.2033 12.0171 23.2033C10.2458 23.2033 9.19736 24.1772 9.19736 25.417C9.19736 26.6569 10.2461 27.7196 12.0173 27.7196C13.8771 27.7196 15.3825 26.6569 15.3825 25.417V15.9411L22.9101 13.8157V20.5464C22.5558 20.4578 22.2016 20.3693 21.7588 20.3693C19.9875 20.3693 18.9388 21.432 18.9388 22.6718C18.9388 23.9117 19.9875 24.9744 21.7588 24.9744C23.6185 24.9744 25.124 23.9117 25.124 22.6718V9.03351C22.2545 9.94658 19.2887 10.7156 16.333 11.482C15.2752 11.7562 14.2187 12.0302 13.1684 12.3103V23.2918Z`,
      }),
    });
  }),
  _.memo(function (_) {
    return (0, _.jsxs)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      fill: `none`,
      ..._,
      children: [
        (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M24 14.25C26.0711 14.25 27.75 15.9289 27.75 18C27.75 20.0711 26.0711 21.75 24 21.75C21.9289 21.75 20.25 20.0711 20.25 18C20.25 15.9289 21.9289 14.25 24 14.25ZM23 15.5V18.4922L24.9932 20.375L26 19.4219L24.4258 17.9346V15.5H23Z`,
        }),
        (0, _.jsx)(`path`, {
          fill: `currentColor`,
          fillRule: `evenodd`,
          clipRule: `evenodd`,
          _: `M10 11H13V7H34V29H13V25H10V29H2V21C3.65685 21 5 19.6569 5 18C5 16.3431 3.65685 15 2 15V7H10V11ZM24 12C20.6863 12 18 14.6863 18 18C18 21.3137 20.6863 24 24 24C27.3137 24 30 21.3137 30 18C30 14.6863 27.3137 12 24 12ZM10 23H13V19H10V23ZM10 17H13V13H10V17Z`,
        }),
      ],
    });
  });
function _() {
  let _ = _();
  return (0, _.jsxs)(_, {
    children: [
      !_ &&
        (0, _.jsx)(_, {
          children: _(`#Menu_Section_WaysToPlay`),
        }),
      _ &&
        (0, _.jsx)(`div`, {
          className: `wyW5n0va4cs-`,
        }),
      (0, _.jsxs)(_, {
        children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        handle: `multiplayer_lan`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_local_party`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_mmo`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer`,
      }),
      (0, _.jsx)(_, {
        handle: `multiplayer_online_competitive`,
      }),
      (0, _.jsx)(_, {
        handle: `singleplayer`,
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            handle: `greatondeck`,
            icon: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            handle: `remoteplay_hub`,
            icon: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            handle: `vr`,
            icon: (0, _.jsx)(_, {}),
          }),
        ],
      }),
      (0, _.jsxs)(_, {
        children: [
          (0, _.jsx)(_, {
            handle: `controller`,
            icon: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(_, {
            handle: `multiplayer_coop`,
            icon: (0, _.jsx)(_, {}),
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 46 47`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      stroke: `currentColor`,
      fill: `currentColor`,
      _: `M23 7.38892C29.6405 7.38892 34.242 8.69779 37.1699 9.99146C38.6345 10.6386 39.6828 11.2832 40.3604 11.761C40.6989 11.9998 40.9454 12.197 41.1045 12.3323C41.1603 12.3797 41.2056 12.4201 41.2402 12.4514C41.2433 12.4618 41.2466 12.4731 41.25 12.4846C41.2814 12.5922 41.327 12.7511 41.3857 12.9553C41.5034 13.3645 41.6721 13.9564 41.874 14.6848C42.278 16.1422 42.8171 18.1467 43.3555 20.3352C44.4379 24.7353 45.5 29.807 45.5 32.7004C45.4998 34.6845 44.063 36.4077 42.4902 37.6848C41.7174 38.3123 40.942 38.8073 40.3584 39.1458C40.0962 39.2978 39.8734 39.4168 39.709 39.5022L32.1514 31.9446H13.8486L13.7021 32.0911L6.29004 39.5022C6.12571 39.4168 5.90342 39.2976 5.6416 39.1458C5.05803 38.8073 4.28256 38.3123 3.50977 37.6848C1.93696 36.4077 0.500199 34.6845 0.5 32.7004C0.5 29.807 1.56212 24.7353 2.64453 20.3352C3.18289 18.1467 3.72199 16.1422 4.12598 14.6848C4.3279 13.9564 4.49657 13.3645 4.61426 12.9553C4.67299 12.7511 4.71857 12.5922 4.75 12.4846C4.75335 12.4731 4.75578 12.4617 4.75879 12.4514C4.79351 12.42 4.83937 12.38 4.89551 12.3323C5.05464 12.197 5.30107 11.9998 5.63965 11.761C6.31717 11.2832 7.36553 10.6386 8.83008 9.99146C11.758 8.69779 16.3595 7.38892 23 7.38892ZM11 17.8889H7.16699V22.7219H11V26.5559H15.833V22.7219H19.667V17.8889H15.833V14.0559H11V17.8889ZM28.8857 19.4475C28.2109 19.1681 27.4683 19.0952 26.752 19.2375C26.125 19.3623 25.5424 19.6475 25.0605 20.0627L24.8594 20.2483C24.4074 20.7003 24.082 21.2612 23.9121 21.8743L23.8486 22.1409C23.724 22.7678 23.7645 23.4147 23.9639 24.0188L24.0586 24.2747C24.3033 24.8653 24.6968 25.3811 25.1982 25.7727L25.4199 25.9329C26.0274 26.3388 26.742 26.5559 27.4727 26.5559C27.8971 26.5559 28.318 26.4827 28.7168 26.3401L28.8857 26.2747C29.278 26.1122 29.6392 25.8833 29.9531 25.5989L30.085 25.4739C30.3852 25.1736 30.6304 24.8237 30.8115 24.4407L30.8857 24.2747C31.0713 23.8267 31.1669 23.3465 31.167 22.8616C31.167 22.2222 31.0009 21.595 30.6875 21.0413L30.5439 20.8088C30.1888 20.2773 29.7029 19.848 29.1348 19.5618L28.8857 19.4475ZM36.5527 14.3372C35.9619 14.0924 35.3192 14.0055 34.6875 14.0833L34.418 14.1262C33.791 14.251 33.2085 14.536 32.7266 14.9514L32.5264 15.1379C32.0742 15.5901 31.748 16.1506 31.5781 16.7639L31.5156 17.0295C31.391 17.6565 31.4315 18.3033 31.6309 18.9075L31.7256 19.1643C31.9703 19.7548 32.3639 20.2698 32.8652 20.6614L33.0859 20.8215C33.6934 21.2274 34.4081 21.4445 35.1387 21.4446C36.0572 21.4446 36.9405 21.1021 37.6182 20.4885L37.751 20.3625C38.4438 19.6698 38.833 18.73 38.833 17.7502C38.833 17.1109 38.6679 16.4836 38.3545 15.9299L38.2109 15.6975C37.8557 15.1658 37.3692 14.7367 36.8008 14.4504L36.5527 14.3372Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 47 47`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M44.1111 8.16675V38.8334H22.3888V33.7223H38.9999V13.2779H8.33328V19.6667H3.22217V8.16675H44.1111ZM3.22217 23.5001V28.6112C5.93327 28.6112 8.53333 29.6882 10.4504 31.6052C12.3674 33.5223 13.4444 36.1223 13.4444 38.8334H18.5555C18.5555 34.7668 16.94 30.8667 14.0645 27.9911C11.1889 25.1156 7.28882 23.5001 3.22217 23.5001ZM3.22217 32.4445V38.8334H9.61106C9.61106 37.9944 9.4458 37.1636 9.12473 36.3885C8.80366 35.6134 8.33306 34.9091 7.73979 34.3158C7.14653 33.7225 6.44223 33.2519 5.66709 32.9309C4.89195 32.6098 4.06117 32.4445 3.22217 32.4445Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 47 28`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M42.5002 8.49432C42.5147 7.1735 42.1195 5.88065 41.3689 4.79371C40.6184 3.70677 39.5494 2.87919 38.3091 2.42488C33.4448 1.02283 28.394 0.376401 23.3335 0.508213C18.2729 0.376401 13.2222 1.02283 8.35794 2.42488C7.11763 2.87919 6.04862 3.70677 5.29806 4.79371C4.5475 5.88065 4.15229 7.1735 4.16683 8.49432L0.333496 9.45266V17.1193L4.16683 18.0904C4.27554 19.7299 4.82745 21.3091 5.76364 22.6594C6.69984 24.0096 7.98516 25.0803 9.48238 25.7571L13.3157 27.3799C14.0945 27.6992 14.9581 27.7467 15.7672 27.5149C16.5763 27.283 17.2837 26.7853 17.7752 26.1021C18.3811 25.2081 19.2178 24.4949 20.1964 24.0382C21.1751 23.5815 22.2591 23.3984 23.3335 23.5082C24.4131 23.4088 25.4994 23.6048 26.4762 24.0752C27.4531 24.5456 28.2836 25.2727 28.8791 26.1788C29.3705 26.862 30.0779 27.3597 30.887 27.5915C31.6961 27.8234 32.5597 27.7758 33.3385 27.4565L37.1718 25.8338C38.6691 25.157 39.9544 24.0863 40.8906 22.736C41.8268 21.3858 42.3787 19.8066 42.4874 18.1671L46.3207 17.196V9.52932L42.5002 8.49432ZM28.6491 8.11099C27.0968 7.75874 25.5127 7.56607 23.9213 7.53599C21.9373 7.4828 19.9544 7.67594 18.0179 8.11099L17.1491 4.37988C19.4044 3.87493 21.713 3.64751 24.0235 3.70266C25.8737 3.73511 27.7153 3.9621 29.5179 4.37988L28.6491 8.11099Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 46 47`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M0 14.5556C0 13.1442 1.14416 12 2.55556 12H43.4444C44.8558 12 46 13.1442 46 14.5556V31.1667C46 33.2838 44.2838 35 42.1667 35H3.83333C1.71624 35 0 33.2838 0 31.1667V14.5556ZM42.1667 20.9444C42.1667 21.6501 41.5946 22.2222 40.8889 22.2222C40.1832 22.2222 39.6111 21.6501 39.6111 20.9444C39.6111 20.2387 40.1832 19.6667 40.8889 19.6667C41.5946 19.6667 42.1667 20.2387 42.1667 20.9444ZM40.8889 17.1111C41.5946 17.1111 42.1667 16.539 42.1667 15.8333C42.1667 15.1276 41.5946 14.5556 40.8889 14.5556C40.1832 14.5556 39.6111 15.1276 39.6111 15.8333C39.6111 16.539 40.1832 17.1111 40.8889 17.1111ZM44.7222 18.3889C44.7222 19.0946 44.1501 19.6667 43.4444 19.6667C42.7387 19.6667 42.1667 19.0946 42.1667 18.3889C42.1667 17.6832 42.7387 17.1111 43.4444 17.1111C44.1501 17.1111 44.7222 17.6832 44.7222 18.3889ZM38.3333 19.6667C39.039 19.6667 39.6111 19.0946 39.6111 18.3889C39.6111 17.6832 39.039 17.1111 38.3333 17.1111C37.6276 17.1111 37.0556 17.6832 37.0556 18.3889C37.0556 19.0946 37.6276 19.6667 38.3333 19.6667ZM7.66667 18.3889C7.66667 19.8003 6.52251 20.9444 5.11111 20.9444C3.69972 20.9444 2.55556 19.8003 2.55556 18.3889C2.55556 16.9775 3.69972 15.8333 5.11111 15.8333C6.52251 15.8333 7.66667 16.9775 7.66667 18.3889ZM3.05556 27.3333C2.77941 27.3333 2.55556 27.5572 2.55556 27.8333V31.9444C2.55556 32.2206 2.77941 32.4444 3.05556 32.4444H7.16667C7.44281 32.4444 7.66667 32.2206 7.66667 31.9444V27.8333C7.66667 27.5572 7.44281 27.3333 7.16667 27.3333H3.05556ZM38.3333 27.8333C38.3333 27.5572 38.5572 27.3333 38.8333 27.3333H42.9444C43.2206 27.3333 43.4444 27.5572 43.4444 27.8333V31.9444C43.4444 32.2206 43.2206 32.4444 42.9444 32.4444H38.8333C38.5572 32.4444 38.3333 32.2206 38.3333 31.9444V27.8333ZM35.7778 14.5556H10.2222V32.4444H35.7778V14.5556Z`,
    }),
  });
}
function _() {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 40 41`,
    fill: `none`,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M19.9999 29.3888V34.9443H2.22217V29.3888C2.22217 27.0313 3.15867 24.7704 4.82566 23.1034C6.49265 21.4364 8.75358 20.4999 11.1111 20.4999C13.4685 20.4999 15.7295 21.4364 17.3965 23.1034C19.0634 24.7704 19.9999 27.0313 19.9999 29.3888ZM11.1111 17.1666C12.1 17.1666 13.0667 16.8733 13.8889 16.3239C14.7112 15.7745 15.352 14.9936 15.7305 14.08C16.1089 13.1663 16.2079 12.161 16.015 11.1911C15.8221 10.2212 15.3459 9.33029 14.6466 8.63103C13.9473 7.93176 13.0564 7.45556 12.0865 7.26263C11.1166 7.06971 10.1113 7.16872 9.19764 7.54716C8.28401 7.9256 7.50312 8.56646 6.95371 9.38871C6.4043 10.211 6.11106 11.1777 6.11106 12.1666C6.10959 12.8236 6.23792 13.4744 6.48868 14.0817C6.73943 14.689 7.10767 15.2408 7.57226 15.7054C8.03684 16.1699 8.58862 16.5382 9.19591 16.7889C9.8032 17.0397 10.454 17.168 11.1111 17.1666ZM35.1777 20.8777C34.2936 19.9926 33.2327 19.3041 32.0642 18.8572C30.8957 18.4103 29.6461 18.2151 28.397 18.2843C27.1479 18.3535 25.9275 18.6856 24.8156 19.2589C23.7037 19.8321 22.7253 20.6337 21.9444 21.611C23.5779 23.8747 24.453 26.5973 24.4444 29.3888V32.7221H37.7777V27.1666C37.7786 25.9989 37.5495 24.8425 37.1034 23.7635C36.6573 22.6844 36.0029 21.7038 35.1777 20.8777ZM28.8888 14.9443C29.8777 14.9443 30.8444 14.6511 31.6667 14.1017C32.4889 13.5523 33.1298 12.7714 33.5082 11.8578C33.8867 10.9441 33.9857 9.93879 33.7928 8.96889C33.5998 7.99898 33.1236 7.10807 32.4244 6.4088C31.7251 5.70954 30.8342 5.23334 29.8643 5.04041C28.8944 4.84749 27.889 4.9465 26.9754 5.32494C26.0618 5.70338 25.2809 6.34424 24.7315 7.16649C24.1821 7.98873 23.8888 8.95543 23.8888 9.94434C23.8874 10.6014 24.0157 11.2522 24.2665 11.8595C24.5172 12.4668 24.8855 13.0186 25.35 13.4831C25.8146 13.9477 26.3664 14.316 26.9737 14.5667C27.581 14.8175 28.2318 14.9458 28.8888 14.9443Z`,
    }),
  });
}
var _ = `_7Mrf8hy7NkM-`,
  _ = `LJ-XME3yAB0-`,
  _ = `yrsXR1aHEY0-`;
function _(_) {
  let {
      visible: _,
      closePopover: _,
      children: _,
      refPopover: _,
      refActiveButton: _,
      bTallSection: _ = !1,
    } = _,
    _ = _.useCallback(
      (_) => {
        if (
          !(!_.current || !_.current || !document.activeElement) &&
          _.key === `Tab`
        ) {
          let _ = _(_.current),
            _ = _.indexOf(document.activeElement);
          if (_ === -1) return;
          if (
            (_ === 0 && _.shiftKey && (_.current.focus(), _.preventDefault()),
            _ === _.length - 1 && !_.shiftKey && _.current.parentElement)
          ) {
            let _ = _(_.current.parentElement),
              _ = _.indexOf(_.current);
            if (_ !== -1) {
              let _ = _[_ + 1];
              _ && (_.focus(), _.preventDefault());
            }
          }
        }
      },
      [_, _],
    );
  return (
    _(_, _),
    (0, _.jsx)(_, {
      className: _,
      visible: _,
      msAnimationDuration: 100,
      children: (0, _.jsx)(`div`, {
        className: (0, _.default)(
          _,
          _.IN_MOBILE_WEBVIEW && `ea-kRmlaOhA-`,
          _ && `YUWBhMKILnQ-`,
        ),
        children: (0, _.jsx)(_, {
          "flow-children": `row`,
          className: _,
          onCancelButton: _,
          ref: _,
          onKeyDown: _,
          children: _,
        }),
      }),
    })
  );
}
function _() {
  return _.useMemo(() => {
    let _ = _.EREALM == _.k_ESteamRealmChina,
      _ = _(_.country_code);
    return [
      [`browse`, _(`#Menu_Popover_Browse`)],
      !_ && [`recommendations`, _(`#Menu_Popover_Recommendations`)],
      [`categories`, _(`#Menu_Popover_Categories`)],
      !_ && _ && [`hardware`, _(`#Menu_Popover_Hardware`)],
      !_ && [`waystoplay`, _(`#Menu_Popover_WaysToPlay`)],
      [`specialsections`, _(`#Menu_Popover_SpecialSections`)],
      [`more`, _(`#Menu_Popover_More`)],
    ].filter(Boolean);
  }, []);
}
function _(_) {
  let {
      activeSection: _,
      closePopover: _,
      visibleSections: _,
      refPopover: _,
      refActiveButton: _,
    } = _,
    _ = _.useRef(_);
  return (
    _ && (_.current = _),
    (0, _.jsx)(_, {
      visible: _ !== void 0,
      closePopover: _,
      refPopover: _,
      refActiveButton: _,
      bTallSection: _ == `categories`,
      children:
        _.current &&
        (0, _.jsx)(_, {
          section: _.current,
          visibleSections: _,
        }),
    })
  );
}
function _(_) {
  let { section: _, visibleSections: _ } = _;
  return (0, _.jsx)(_, {
    method: _,
    children: _(_, _),
  });
}
function _(_, _) {
  switch (_) {
    case `browse`:
      return (0, _.jsx)(_, {});
    case `recommendations`:
      return (0, _.jsx)(_, {});
    case `categories`:
      return (0, _.jsx)(_, {});
    case `hardware`:
      return (0, _.jsx)(_, {});
    case `waystoplay`:
      return (0, _.jsx)(_, {});
    case `specialsections`:
      return (0, _.jsx)(_, {});
    case `more`:
      return (0, _.jsx)(_, {
        excludedSections: _,
      });
    default:
      return _(_, `unhandled section ${_}`), null;
  }
}
function _(_) {
  let { section: _ } = _;
  switch (_) {
    case `browse`:
      return (0, _.jsx)(_, {});
    case `recommendations`:
      return (0, _.jsx)(_, {});
    case `categories`:
      return (0, _.jsx)(_, {});
    case `hardware`:
      return (0, _.jsx)(_, {});
    case `waystoplay`:
      return null;
    case `specialsections`:
      return null;
    case `more`:
      return null;
    default:
      return _(_, `unhandled section ${_}`), null;
  }
}
var _ = `380px`,
  _ = `TU-7RxpTpy4-`,
  _ = `_5fxF1NcznNc-`,
  _ = `S-0LcpbLAf8-`,
  _ = `-hkvZFcHSmg-`,
  _ = `et-RRc3JMu8-`,
  _ = `ThAcZyxR3bU-`,
  _ = `G5RaJ7H2gkg-`,
  _ = `SdFPqnbn0yI-`,
  _ = `_7gYaw-JAHLI-`,
  _ = `o3-Lb6N8-cY-`,
  _ = `c9zw0GyPYDc-`,
  _ = `OEygWxUcrLo-`,
  _ = `S7h-nmAfrEM-`,
  _ = `S-0da5Ll-j0-`,
  _ = `cZUpBJfM-G4-`,
  _ = `rBOu3e6RgCI-`,
  _ = `J5k5cIOBoX8-`,
  _ = `_9A1kUnDAVGQ-`,
  _ = `-KO7F--HeBE-`,
  _ = `_4ylz-Fyg14c-`,
  _ = `_6r7gSVgjWII-`,
  _ = `teVFxNpDQ1I-`,
  _ = `OcgtiSjfJhw-`;
function _(_, _, _ = 10, _ = void 0) {
  return {
    queryKey: [`MostVisitedItems`, _],
    queryFn: () => _(_, _, _, _),
    staleTime: 300 * 1e3,
  };
}
function _(_ = 10, _ = {}, _ = !0) {
  let _ = _(),
    _ = _(),
    { dataLoader: _, storeBrowseContext: _, cacheStoreItemData: _ } = _();
  return _({
    queryKey: [`MostVisitedItemsFiltered`, _],
    queryFn: async () => {
      let _ = await _.fetchQuery(
          _(_, _, _, {
            cacheStoreItemData: _,
            data_request: {
              ..._,
              apply_user_filters: !0,
            },
          }),
        ),
        _ = await Promise.all(_.map((_) => _.fetchQuery(_(_, _)))),
        _ = new Map();
      for (let _ = 0; _ < _.length; _++) _.set(_[_], _[_]);
      let _ = (_) => {
        let _ = _.get(_);
        return !_ || (_.filter_failure == 10 && _.on_wishlist)
          ? 0
          : _.filter_failure;
      };
      return _.filter((_) => {
        let _ = _.get(_);
        return !_ || _.filter_failure < 40;
      }).sort((_, _) => _(_) - _(_));
    },
    staleTime: 300 * 1e3,
    enabled: _,
  });
}
async function _(_, _, _ = 10, _ = void 0) {
  let _ = _.Init(_);
  _.Body().set_count(_), _(_, _), _ && _(_, _.data_request);
  let _ = await _.GetMostVisitedItemsOnStore(_, _);
  if (!_.BSuccess())
    throw `Error loading most visited items: ${_.GetErrorMessage()}`;
  return (
    _ &&
      _.Body()
        .items()
        .forEach((_) => _.cacheStoreItemData(_, _.data_request)),
    _.Body()
      .item_ids()
      .map((_) => _.toObject())
  );
}
var _ = {
    include_assets: !0,
    apply_user_filters: !0,
  },
  _ = {
    include_tags: !0,
    include_creators: !0,
  };
function _(_) {
  let { list: _, iActiveIndex: _, activeSection: _, getMouseHandlers: _ } = _,
    _,
    _,
    _;
  _.rgMainItems.length
    ? (_ = (0, _.jsx)(_, {
        title: _.strMainTitle,
        children: _.rgMainItems.map(({ item_id: _ }, _) =>
          (0, _.jsx)(
            _,
            {
              itemid: _,
              index: _,
              active: _ == `apps` && _ == _,
              getMouseHandlers: _,
            },
            _(_),
          ),
        ),
      }))
    : _.rgMainItems &&
      _.eListType == `suggestions` &&
      (_ = (0, _.jsx)(_, {
        title: _.strMainTitle,
        children: (0, _.jsx)(_, {}),
      })),
    _.rgTextItems?.length &&
      (_ = (0, _.jsx)(_, {
        title: _.strTextLinks,
        items: _.rgTextItems,
      })),
    _.rgSubSectionItems?.length &&
      (_ =
        _.eListType == `recent`
          ? (0, _.jsx)(_, {
              title: _.strSubSectionTitle,
              horizontal: !0,
              children: _.rgSubSectionItems.map(({ item_id: _ }, _) =>
                (0, _.jsx)(
                  _,
                  {
                    itemid: _,
                    index: _,
                    active: _ == `categories` && _ == _,
                    getMouseHandlers: _,
                  },
                  _(_),
                ),
              ),
            })
          : (0, _.jsx)(_, {
              title: _.strSubSectionTitle,
              children: _.rgSubSectionItems.map(({ item_id: _ }, _) =>
                (0, _.jsx)(
                  _,
                  {
                    itemid: _,
                    index: _,
                    active: _ == `categories` && _ == _,
                    getMouseHandlers: _,
                  },
                  _(_),
                ),
              ),
            }));
  let _, _;
  switch (_.eListType) {
    case `suggestions`:
      _ = `search-suggestion`;
      break;
    case `recent`:
      (_ = `popular`), (_ = `recent`);
      break;
    default:
      _(_.eListType, `Unhandled list type ${_.eListType}`);
  }
  return (0, _.jsxs)(_, {
    controller: `search`,
    method: `suggest`,
    submethod: ``,
    feature: _,
    children: [
      (0, _.jsx)(_, {
        feature: _ ?? _,
        children: _,
      }),
      _,
      _,
      (0, _.jsx)(_, {
        active: _ == `advancedsearch`,
        getMouseHandlers: _,
      }),
    ],
  });
}
function _(_ = !0) {
  return _(10, _, _);
}
function _(_, _, _, _ = !0) {
  let _ = _(_),
    _ = _(),
    _ = _(
      _(
        _,
        5,
        _.useMemo(() => _(_, _), [_]),
      ),
      _ === void 0 ? `` : _,
    ),
    _ = _ && _ == ``,
    { data: _ } = _(_),
    { data: _ } = _(_),
    { data: _ } = _(_ && _);
  return (
    _.useMemo(() => _(_().slice()), []),
    _(
      _.useMemo(() => {
        if (_ && _.data) {
          let [_, _, _] = _(_.data.rgItemIDs);
          return {
            eListType: `suggestions`,
            strMainTitle: _(`#Menu_SearchBar_SearchResults`),
            rgMainItems: _.slice(0, _).map((_) => ({
              item_id: _,
            })),
            strSubSectionTitle: _(`#Menu_SearchBar_BrowseBy`),
            rgSubSectionItems: [..._, ..._].slice(0, 3).map((_) => ({
              item_id: _,
            })),
          };
        } else if (_ || _ || _) {
          let _ = _?.slice(0, _) || [];
          return {
            eListType: `recent`,
            strMainTitle: _(`#Menu_SearchBar_PopularSearches`),
            rgMainItems: _.map((_) => ({
              item_id: _,
            })),
            strTextLinks: _(`#Menu_SearchBar_RecentlyViewed`),
            rgTextItems: _
              ? _?.slice(0, 4).map((_) => ({
                  item_id: _,
                }))
              : void 0,
            strSubSectionTitle: _(`#Menu_SearchBar_YourTopGenres`),
            rgSubSectionItems:
              _?.slice(0, 3).map((_) => ({
                item_id: _.item_id,
              })) || [],
          };
        } else return;
      }, [_, _, _, _, _, _]),
    )
  );
}
function _(_, _) {
  let _ = _(),
    _ = _(),
    _ = _(_, _);
  return _.useCallback(
    async (_) => {
      let _ = await _.fetchQuery(_(_, _));
      return _
        ? ((window.location.href = `${_.STORE_BASE_URL}${_.store_url_path}?snr=${_}`),
          !0)
        : !1;
    },
    [_, _, _],
  );
}
var _ = {
  eListType: `suggestions`,
  strMainTitle: ``,
  rgMainItems: [],
};
function _(_) {
  let [_, _] = _.useState(_ || _),
    [_, _] = _.useState({
      activeSection: `apps`,
      iActiveIndex: void 0,
      eLastInputSource: void 0,
    }),
    _ = _();
  _.useEffect(() => {
    _(_ || _);
  }, [_]);
  let _ =
      (_.activeSection == `apps` ? _.rgMainItems : _.rgSubSectionItems) || [],
    _ = _.eListType == `recent`,
    _ = _.useCallback(
      (_, _) => ({
        onMouseEnter: () => {
          _((_) =>
            _.activeSection === _ && _.iActiveIndex === _
              ? _
              : {
                  activeSection: _,
                  iActiveIndex: _,
                  eLastInputSource: `mouse`,
                },
          );
        },
        onMouseLeave: () => {
          _({
            activeSection: `apps`,
            iActiveIndex: void 0,
            eLastInputSource: `mouse`,
          });
        },
      }),
      [],
    ),
    _ = (_) => _ == `categories` && _,
    _ = (_, _ = !0) => {
      switch (_) {
        case `apps`:
          return _.rgMainItems.length;
        case `categories`: {
          let _ = _.rgSubSectionItems?.length || 0;
          return _ && _ ? +(_ > 0) : _;
        }
        case `advancedsearch`:
          return 1;
        default:
          return _(_, `unknown section ${_}`), 0;
      }
    },
    _ = (_, _ = !1) => {
      let _ = [`apps`, `categories`, `advancedsearch`],
        _ = (_.indexOf(_) + (_ ? -1 : 1) + _.length) % _.length;
      return (
        _(_[_]) == 0 && (_ = (_ + (_ ? -1 : 1) + _.length) % _.length),
        _(_[_]) == 0 ? _ : _[_]
      );
    },
    _ = _.useRef(void 0);
  _.current = (_) => {
    switch (_.key) {
      case `ArrowUp`:
        return (
          _(({ activeSection: _, iActiveIndex: _ }) => {
            let _ = (_ === void 0 || _(_) ? 0 : _) - 1,
              _ = _;
            return (
              _ < 0 && ((_ = _(_, !0)), (_ = _(_) - 1)),
              {
                activeSection: _,
                iActiveIndex: _,
                eLastInputSource: `keyboard`,
              }
            );
          }),
          !0
        );
      case `ArrowDown`:
        return (
          _(({ activeSection: _, iActiveIndex: _ }) => {
            let _ = (_ ?? -1) + 1,
              _ = _;
            return (
              _ >= _(_) && ((_ = _(_)), (_ = 0)),
              {
                activeSection: _,
                iActiveIndex: _,
                eLastInputSource: `keyboard`,
              }
            );
          }),
          !0
        );
      case `ArrowLeft`:
        if (_(_.activeSection))
          return (
            _((_) => {
              let { activeSection: _, iActiveIndex: _ } = _;
              if (_(_)) {
                let _ = _(_, !1);
                return {
                  activeSection: _,
                  iActiveIndex: ((_ ?? 0) + _ - 1) % _,
                  eLastInputSource: `keyboard`,
                };
              } else return _;
            }),
            !0
          );
        break;
      case `ArrowRight`:
        if (_(_.activeSection))
          return (
            _((_) => {
              let { activeSection: _, iActiveIndex: _ } = _;
              if (_(_.activeSection)) {
                let _ = _(_, !1);
                return {
                  activeSection: `categories`,
                  iActiveIndex: ((_ ?? 0) + 1) % _,
                  eLastInputSource: `keyboard`,
                };
              } else return _;
            }),
            !0
          );
        break;
      case `Enter`: {
        let { activeSection: _, iActiveIndex: _, eLastInputSource: _ } = _;
        if (_ == `advancedsearch`) return !1;
        {
          let _ = _ == `apps` ? _.rgMainItems : _.rgSubSectionItems;
          if (_ !== void 0 && _ && _ < _.length && _ === `keyboard`)
            return _(_[_].item_id), !0;
        }
        break;
      }
    }
    return !1;
  };
  let _ = _.useCallback((_) => _.current(_), []);
  return {
    list: _,
    activeSection: _.activeSection,
    iActiveIndex:
      _.iActiveIndex === void 0
        ? void 0
        : Math.max(0, Math.min(_.length - 1, _.iActiveIndex)),
    getMouseHandlers: _,
    onKeyDown: _,
  };
}
function _(_) {
  let { title: _, children: _, horizontal: _ } = _;
  return (0, _.jsxs)(`div`, {
    className: (0, _.default)(_, _ && `pHdGM3zPw30-`),
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _,
      }),
    ],
  });
}
function _(_) {
  let { title: _, items: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_),
    children: (0, _.jsxs)(`div`, {
      className: _,
      children: [
        (0, _.jsx)(`div`, {
          className: _,
          children: _,
        }),
        _.map(({ item_id: _ }, _) =>
          (0, _.jsx)(
            _,
            {
              itemid: _,
              first: _ == 0,
            },
            _(_),
          ),
        ),
      ],
    }),
  });
}
function _(_) {
  let { itemid: _, first: _ } = _,
    { data: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      !_ && `, `,
      (0, _.jsx)(_, {
        className: _,
        storeItem: _,
        feature: `recent`,
        children: _?.name,
      }),
    ],
  });
}
var _ = _.memo(function (_) {
    let { itemid: _, index: _, getMouseHandlers: _, active: _ = !1 } = _;
    return (0, _.jsx)(_, {
      itemid: _,
      active: _,
      ..._.useMemo(() => _(`apps`, _), [_, _]),
    });
  }),
  _ = _.memo(function (_) {
    let { itemid: _, ..._ } = _,
      { data: _ } = _(_),
      _ = _(`${_.STORE_BASE_URL}${_?.store_url_path || `/`}`);
    return `creatorid` in _
      ? (0, _.jsx)(_, {
          className: _,
          itemid: _,
          url: _,
          ..._,
          children: (0, _.jsx)(_, {
            itemid: _,
          }),
        })
      : (0, _.jsx)(_, {
          itemid: _,
          url: _,
          ..._,
          children: (0, _.jsx)(_, {
            itemid: _,
          }),
        });
  });
function _(_) {
  let {
    url: _,
    itemid: _,
    grid: _ = !1,
    className: _,
    index: _,
    getMouseHandlers: _,
    active: _,
    children: _,
  } = _;
  return (0, _.jsxs)(`a`, {
    className: (0, _.default)(_, _ && `btPcx-NCU20-`, _, _ && `mNGHDmmBgX8-`),
    href: _,
    ..._(`categories`, _),
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            itemid: _,
            type: _ ? `square` : `wide`,
          }),
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
      _,
    ],
  });
}
function _(_) {
  let { itemid: _ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _?.clan_avatar &&
        (0, _.jsx)(`img`, {
          className: `kclDvQhb2Zg-`,
          src: _(_.clan_avatar, `Medium`),
          alt: ``,
        }),
      (0, _.jsx)(`div`, {
        className: _,
        children: _?.name,
      }),
      (0, _.jsx)(_, {
        storeItem: _,
      }),
    ],
  });
}
function _(_) {
  let { itemid: _ } = _,
    { data: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children: _?.name,
      }),
      (0, _.jsx)(_, {
        storeItem: _,
      }),
    ],
  });
}
function _(_) {
  let { storeItem: _ } = _;
  return !_ || !_.game_count
    ? null
    : (0, _.jsx)(`div`, {
        className: _,
        children: _(`#Menu_SearchBar_CategoryGameCount`, _(_.game_count)),
      });
}
var _ = _.memo(function (_) {
  let { itemid: _, ..._ } = _,
    { data: _ } = _(_);
  return (0, _.jsx)(_, {
    itemid: _,
    url: _(`${_.STORE_BASE_URL}${_?.store_url_path || `/`}`),
    grid: !0,
    ..._,
    children: (0, _.jsx)(`div`, {
      className: _,
      children: (0, _.jsx)(`div`, {
        children: _?.name,
      }),
    }),
  });
});
function _(_) {
  let { getMouseHandlers: _, active: _ } = _,
    _ = _(`advancedsearch`);
  return (0, _.jsx)(`a`, {
    className: (0, _.default)(_, _ && `mNGHDmmBgX8-`),
    href: _,
    ..._(`advancedsearch`, 0),
    children: (0, _.jsx)(`span`, {
      className: _,
      children: _(`#Menu_SearchBar_AdvancedSearch`),
    }),
  });
}
function _() {
  return (0, _.jsx)(`div`, {
    className: _,
    children: _(`#Menu_SearchBar_NoMatches`),
  });
}
var _ = _.memo(function () {
  let { bBackdropActive: _ } = _(),
    _ = _();
  return (0, _.jsxs)(`div`, {
    className: _,
    children: [
      !_ &&
        (0, _.jsx)(_, {
          bBackdropActive: _,
        }),
      (0, _.jsx)(_, {}),
    ],
  });
});
function _(_) {
  return _.useCallback(
    (_) => {
      let _ = (_) =>
          _.classList.contains(`ThAcZyxR3bU-`) ||
          _.classList.contains(`_5fxF1NcznNc-`),
        _ = _.currentTarget;
      (!_.relatedTarget || !((_) => _(_, _) || _(_, _))(_.relatedTarget)) &&
        _();
    },
    [_],
  );
}
var _ = _.memo(function (_) {
  let { bBackdropActive: _, autoFocus: _ } = _,
    {
      term: _,
      setTerm: _,
      onInputKeyDown: _,
      suggestionsId: _,
      onActive: _,
      bSearchVisible: _,
      openSearch: _,
      closeSearch: _,
    } = _(),
    _ = _(_),
    _ = _.useCallback(() => {
      _(), _();
    }, [_, _]),
    _ = _.useCallback(
      (_) => {
        _(_.currentTarget.value), _();
      },
      [_, _],
    ),
    _ = _.useCallback(() => {
      _(``), _();
    }, [_, _]),
    _ = _.useCallback(
      (_) => {
        _(), _.preventDefault();
      },
      [_],
    ),
    _ = _(`search`);
  return (0, _.jsxs)(`form`, {
    className: (0, _.default)(_, _ && !_ && `VJip-I7fHp0-`),
    role: `search`,
    onMouseEnter: () => _(),
    method: `GET`,
    action: `${_.STORE_BASE_URL}search`,
    onBlur: _,
    children: [
      (0, _.jsx)(`input`, {
        type: `hidden`,
        name: `snr`,
        value: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`input`, {
            className: _,
            name: `term`,
            placeholder: _(`#Menu_SearchPlaceholder`),
            value: _,
            autoFocus: _,
            autoComplete: `off`,
            type: `text`,
            onChange: _,
            onFocus: _,
            onClick: _,
            onKeyDown: _,
            role: `combobox`,
            "aria-expanded": _,
            "aria-autocomplete": `list`,
            "aria-controls": _ ? _ : void 0,
          }),
          _ &&
            (0, _.jsx)(`button`, {
              className: `s96bjJe-F5w-`,
              type: `button`,
              onMouseDown: _,
              onClick: _,
              "aria-label": _(`#Menu_ClearSearchTerm`),
              children: (0, _.jsx)(_, {}),
            }),
        ],
      }),
      (0, _.jsx)(`button`, {
        className: _,
        type: `submit`,
        onClick: _,
        children: (0, _.jsx)(_, {
          "aria-label": _(`#Menu_Search`),
        }),
      }),
    ],
  });
});
function _() {
  let {
      term: _,
      setInputKeyDown: _,
      suggestionsId: _,
      bEverActive: _,
      bSearchVisible: _,
      openSearch: _,
      closeSearch: _,
    } = _(),
    { nBackdropHeight: _ } = _(),
    { onKeyDown: _, ..._ } = _(_, _, _ && _ < 480 ? 3 : 4, !(_ && _ < 450)),
    _ = _(_),
    _ = _.useCallback(
      (_) => {
        if (_ && _(_)) {
          _.preventDefault();
          return;
        }
        _.key === `Escape` ? _() : _.key !== `Tab` && _();
      },
      [_, _, _, _],
    );
  _.useEffect(() => (_(_), () => _(void 0)), [_, _]);
  let _ = _.useRef(null);
  return (
    _(_, _),
    (0, _.jsx)(`div`, {
      className: _,
      onBlur: _,
      ref: _,
      children: (0, _.jsx)(_, {
        visible: _,
        className: _,
        msAnimationDuration: 100,
        keepMounted: !0,
        children: (0, _.jsx)(`div`, {
          className: _,
          _: _,
          children: (0, _.jsx)(_, {
            ..._,
          }),
        }),
      }),
    })
  );
}
var _ = _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 18 18`,
      fill: `none`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M13.8296 12.0786C14.8347 10.6321 15.2623 8.86133 15.0284 7.11496C14.7945 5.36859 13.9159 3.77313 12.5656 2.64269C11.2153 1.51224 9.49114 0.928708 7.73254 1.00696C5.97394 1.08522 4.30831 1.8196 3.06357 3.06552C1.81882 4.31144 1.08514 5.97864 1.00696 7.7389C0.928776 9.49916 1.51176 11.2249 2.64114 12.5765C3.77052 13.9281 5.36446 14.8075 7.10919 15.0417C8.85391 15.2758 10.623 14.8477 12.0682 13.8417L15.2185 17L15.3997 16.8187L16.8188 15.3982L17 15.2168L13.8296 12.0786ZM8.04222 12.5824C7.14643 12.5824 6.27075 12.3165 5.52593 11.8183C4.7811 11.3202 4.20058 10.6122 3.85777 9.78376C3.51497 8.95538 3.42528 8.04384 3.60004 7.16443C3.7748 6.28502 4.20616 5.47723 4.83958 4.84321C5.47301 4.20919 6.28004 3.77742 7.15862 3.60249C8.0372 3.42757 8.94787 3.51734 9.77548 3.86047C10.6031 4.2036 11.3104 4.78467 11.8081 5.5302C12.3058 6.27573 12.5714 7.15223 12.5714 8.04887C12.5714 9.25123 12.0943 10.4043 11.2449 11.2545C10.3955 12.1047 9.24344 12.5824 8.04222 12.5824V12.5824Z`,
      }),
    });
  }),
  _ = _.memo(function (_) {
    return (0, _.jsx)(`svg`, {
      xmlns: `http://www.w3.org/2000/svg`,
      viewBox: `0 0 36 36`,
      fill: `none`,
      ..._,
      children: (0, _.jsx)(`path`, {
        fill: `currentColor`,
        _: `M32.12 7.41L28.59 3.88L18 14.46L7.41 3.88L3.88 7.41L14.46 18L3.88 28.59L7.41 32.12L18 21.54L28.59 32.12L32.12 28.59L21.54 18L32.12 7.41Z`,
      }),
    });
  }),
  _ = _.memo(function (_) {
    let { refPage: _ } = _,
      [_, _] = _.useState(),
      [_, _] = _.useState(() => (_.IN_MOBILE_WEBVIEW ? new Set() : void 0)),
      _ = _(),
      { bSearchVisible: _, openSearch: _, closeSearch: _ } = _(),
      _ = _.useRef(null),
      _ = _(),
      _ = _(),
      _ = _ && _,
      _ = _.useCallback(() => {
        _.current?.TakeFocus(), _(void 0);
      }, []),
      { fnReturnFocusToPage: _ } = _(_),
      _ = _(_),
      _ = _.useCallback(() => {
        _(void 0), _();
      }, [_]),
      _ = _.useCallback(
        (_) => {
          _((_) => (_ === _ ? void 0 : _)), _();
        },
        [_],
      ),
      _ = _.useCallback(() => _(`more`), [_]);
    (0, _.useEffect)(() => {
      _ && _();
    }, [_, _]),
      (0, _.useEffect)(() => _(_), [_]);
    let _ = _.useRef(null),
      _ = _.useRef(null);
    return (0, _.jsxs)(_, {
      controller: `storemenu`,
      method: `default`,
      submethod: ``,
      feature: ``,
      children: [
        (0, _.jsxs)(_, {
          bShowBackdrop: _ || !!_,
          closePopoverAndSearch: _,
          refPage: _,
          onMoveDown: _,
          onMoveUp: _,
          children: [
            _.IN_MOBILE_WEBVIEW
              ? (0, _.jsx)(_, {})
              : (0, _.jsxs)(_, {
                  "flow-children": `row`,
                  className: _,
                  role: `navigation`,
                  "aria-label": _(`#Menu_Label`),
                  navRef: _,
                  onMoveLeft: _,
                  onMoveRight: _,
                  onCancelButton: _,
                  onMenuButton: () => !0,
                  onMenuActionDescription: null,
                  children: [
                    _ && (0, _.jsx)(_, {}),
                    (0, _.jsxs)(_, {
                      openPopover: _,
                      activeSection: _,
                      visibleSections: _,
                      setVisibleSections: _,
                      refPopover: _,
                      refActiveButton: _,
                      children: [
                        _ && (0, _.jsx)(_, {}),
                        !_ &&
                          (0, _.jsx)(`div`, {
                            className: `Knjn-BG7pr4-`,
                          }),
                      ],
                    }),
                    (0, _.jsxs)(`div`, {
                      className: _,
                      children: [
                        !_ && (0, _.jsx)(_, {}),
                        (0, _.jsx)(_, {}),
                        (0, _.jsx)(_, {}),
                      ],
                    }),
                  ],
                }),
            (0, _.jsx)(_, {
              activeSection: _,
              closePopover: _,
              visibleSections: _,
              refPopover: _,
              refActiveButton: _,
            }),
          ],
        }),
        (0, _.jsx)(_, {
          openMoreSection: _,
        }),
      ],
    });
  });
function _(_) {
  let [_, _] = _.useState(),
    _ = _();
  (0, _.useEffect)(() => {
    let _ = _.current;
    if (!_) {
      console.assert(!_, `Expected to have menuNode in gamepadui`);
      return;
    }
    let _ = _.NavTree(),
      _ = _;
    for (; _.GetParentEmbeddedNavTree(); ) _ = _.GetParentEmbeddedNavTree();
    return _.RegisterGlobalButtonHandler(
      _.START,
      (_) => {
        let _ = _.NavTree().Controller.GetActiveNavTree(),
          _ = _?.GetLastFocusedNode() || void 0;
        _(
          _ && {
            tree: _,
            node: _,
          },
        ),
          _ == _
            ? (_(
                _.IsActiveFocusNavTree(),
                `event should have occurred in menu tree`,
              ),
              _.TakeFocus(_.START))
            : _.Activate(!0);
      },
      _(`#Menu_Label`),
    );
  }, [_, _]);
  let _ = _.useCallback(() => {
    if (_) {
      let { tree: _, node: _ } = _;
      return _.Activate(!_), _?.BTakeFocus(), _(void 0), !0;
    }
    return !1;
  }, [_]);
  return {
    fnReturnFocusToPage: _ ? _ : void 0,
  };
}
function _(_) {
  let _ = _();
  return _.useCallback(
    (_, _) => {
      let _ = _.current;
      if (!_)
        return console.assert(!_, `Expected to have menuNode in gamepadui`), !1;
      if (!_.Element?.ownerDocument.defaultView) return !1;
      let _ = new _.Element.ownerDocument.defaultView.CustomEvent(
        `vgp_onbuttondown`,
        {
          bubbles: !0,
          cancelable: !0,
          detail: _,
        },
      );
      return _.NavTree().Controller.FireUnhandledGamepadEventCallbacks(_);
    },
    [_, _],
  );
}
function _(_) {
  let {
      bShowBackdrop: _,
      closePopoverAndSearch: _,
      refPage: _,
      onMoveDown: _,
      onMoveUp: _,
      children: _,
    } = _,
    _ = _(),
    [_, _] = _.useState(`visible`),
    [_, _] = _.useState(),
    [_, _] = _.useState(_),
    [_, _] = _.useState(!1),
    [_, _] = _.useState(!1),
    _ = _.useRef(void 0);
  (_.current ||= new WeakMap()),
    (0, _.useLayoutEffect)(() => {
      _(`visible`);
    }, [_]),
    (0, _.useEffect)(() => {
      document.body.classList.toggle(`store_menu_hidden`, _ === `hidden`),
        _ === `visible` && (_.current = new WeakMap());
    }, [_]);
  let _ = _.useCallback(() => _(_), [_]),
    _ = _.useCallback((_) => {
      let _ = _.current,
        _ = _.get(_),
        _ = `scrollTop` in _ ? _.scrollTop : _.scrollY;
      if ((_(_ > 0), _ !== void 0)) {
        let _ = _ - _;
        if (_ > 90 && _ > 400) _((_) => (_ == `hidden` ? _ : `hide`));
        else if (_ < -30) _((_) => (_ == `visible` ? _ : `show`));
        else return;
      }
      _.set(_, _);
    }, []);
  _(
    window,
    `scroll`,
    _.useCallback((_) => _(window), [_]),
  );
  let _ = _(
      _.useCallback(
        (_) => {
          let _ = _.currentTarget;
          _(_) && _(_);
        },
        [_],
      ),
    ),
    _ = _.useCallback((_) => _(_), []);
  (0, _.useEffect)(() => {
    if (!_ || _ || !_) return;
    let _ = window.setTimeout(() => _(), 1);
    return () => window.clearTimeout(_);
  }, [_, _, _, _]),
    (0, _.useEffect)(() => {
      _ && _((_) => (_ == `visible` ? _ : `show`));
    }, [_]);
  let _ = _(_, _),
    _ = _(
      _.useCallback((_) => {
        _(_.contentBoxSize[0].blockSize);
      }, []),
    ),
    _ = _ != `visible` && !_,
    _ = (0, _.default)(
      _,
      _ && `xTY7OxAXLGQ-`,
      _.IN_MOBILE_WEBVIEW && `KiTOMiOjYsI-`,
      _ == `hide` && `HYxlvQJ2-So-`,
      _ == `hidden` && `lKEa5PNEb-4-`,
      _ == `show` && `sBy0VbFRfVo-`,
    ),
    _;
  _ == `hide`
    ? (_ = () => _((_) => (_ == `hide` ? `hidden` : _)))
    : _ == `show` && (_ = () => _((_) => (_ == `show` ? `visible` : _)));
  let _ = _.useMemo(
    () => ({
      nBackdropHeight: _,
      bBackdropActive: _,
    }),
    [_, _],
  );
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(
      _,
      !_ && `x4-PBPanWEY-`,
      (_ || _) && `XnZs-FpxSXU-`,
    ),
    ref: _,
    children: (0, _.jsxs)(`div`, {
      className: (0, _.default)(
        _,
        _ && `POoDtdN1A2U-`,
        (_ || _) && `XnZs-FpxSXU-`,
      ),
      children: [
        (0, _.jsx)(_, {
          children: (0, _.jsx)(_, {
            className: _,
            ref: _,
            onAnimationEnd: _,
            onFocusWithin: _,
            onMoveDown: _,
            onMoveUp: _,
            children: (0, _.jsx)(_.Provider, {
              value: _,
              children: _,
            }),
          }),
        }),
        (0, _.jsx)(`div`, {
          className: (0, _.default)(_, _ && `NmzlVu-XMK4-`),
          onTransitionEnd: _,
          ref: _,
          onClick: _,
        }),
      ],
    }),
  });
}
function _(_, _) {
  let [_, _] = _.useState(),
    _ = _.useCallback((_) => {
      _(Math.min(_.borderBoxSize[0].blockSize, parseInt(_)));
    }, []);
  return (
    (0, _.useEffect)(() => {
      if (_ === void 0) return;
      let _ = _.current,
        _ = _ || _.IN_MOBILE_WEBVIEW ? 0 : _;
      return (
        _.style.setProperty(
          `--store-menu-overlap-height`,
          _.IN_MOBILE_WEBVIEW ? `0px` : _,
        ),
        _.style.setProperty(`--store-menu-floating-height`, `${_}px`),
        () => {
          _?.style.removeProperty(`--store-menu-overlap-height`),
            _?.style.removeProperty(`--store-menu-floating-height`);
        }
      );
    }, [_, _, _]),
    _(_)
  );
}
function _() {
  return !_();
}
function _(_) {
  let {
      openPopover: _,
      activeSection: _,
      visibleSections: _,
      setVisibleSections: _,
      refPopover: _,
      refActiveButton: _,
      children: _,
    } = _,
    _ = _.useRef([]),
    _ = _();
  _.current.length != _.length && (_.current = _.map(() => _.createRef()));
  let {
      rgButtonWidths: _,
      nContainerWidth: _,
      refDynamicButtonContainer: _,
    } = _(_ !== void 0, _.current),
    _ = _(),
    _ = _(),
    _ = _ && !_;
  _.useLayoutEffect(() => {
    if (!_ || _ === void 0) return;
    let _ = _ ? parseInt(_) : 0,
      _ = _[_.length - 1],
      _ = _.slice(0, -1),
      _ = _ - _,
      _ = [];
    for (let _ = 0; _ < _.length && _[_] < _; _++) (_ -= _[_]), _.push(_[_][0]);
    if (_.length < _.length - 1) {
      for (; _.length && _ < _; ) (_ += _[_.length - 1]), _.pop();
      _.length == 1 && _.splice(0, _.length), _.push(_[_.length - 1][0]);
    }
    _(new Set(_));
  }, [_, _, _, _, _]),
    (0, _.useEffect)(() => {
      if (_) {
        let _ = _.findIndex((_) => _ === _[0]);
        _.current = _.current[_].current;
      } else _.current = null;
    }, [_, _, _]);
  let _,
    _ = (_, _, _ = !1) => {
      let [_, _] = _;
      if (_ && !_.has(_)) return null;
      let _ = _ === _;
      return (
        (_ = _),
        (0, _.jsx)(
          _,
          {
            section: _,
            label: (_ ? _(`#Menu_Popover_Menu`) : void 0) ?? _,
            className: _ ? _ : void 0,
            openPopover: _,
            active: _ === _,
            previousActive: _,
            refButton: _.current[_],
            refPopover: _,
          },
          _,
        )
      );
    },
    _ = _ && _.size == 1,
    _ = _[_.length - 1];
  return (0, _.jsxs)(`div`, {
    className: _,
    ref: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(`div`, {
            className: _,
            children: _.slice(0, -1).map((_, _) => _(_, _)),
          }),
          _(_, _.length - 1, _),
        ],
      }),
      _,
    ],
  });
}
function _(_, _) {
  let [_, _] = _.useState(),
    [_, _] = _.useState();
  return (
    _.useLayoutEffect(() => {
      if (_) return;
      let _ = [];
      for (let _ = 0; _ < _.length; _++)
        _[_].current
          ? _.push(_[_].current.clientWidth)
          : console.assert(!1, `Missing ref button ${_}`);
      _(_);
    }, [_, _]),
    {
      rgButtonWidths: _,
      nContainerWidth: _,
      refDynamicButtonContainer: _(
        _.useCallback((_) => {
          _(_.contentBoxSize[0].inlineSize);
        }, []),
      ),
    }
  );
}
function _(_) {
  let {
      section: _,
      openPopover: _,
      label: _,
      active: _,
      previousActive: _,
      refButton: _,
      refPopover: _,
      className: _,
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useCallback(() => _(_), [_, _]),
    _ = _.useCallback(() => (_ ? (_(void 0), !0) : !1), [_, _]),
    _ = _.useCallback(() => _(!0), []),
    _ = _.useCallback(
      (_) => {
        if (_ && _.key === `Tab` && !_.shiftKey && _.current) {
          let _ = _(_.current);
          _ && (_.focus(), _.preventDefault());
        }
        if (_ && _.key === `Tab` && _.shiftKey && _.current) {
          let _ = _(_.current),
            _ = _[_.length - 1];
          _ && (_.focus(), _.preventDefault());
        }
      },
      [_, _, _],
    );
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _, _ && `NmzlVu-XMK4-`, _),
    focusClassName: _,
    ref: _,
    onClick: _,
    onOKButton: _,
    onCancelButton: _,
    onMouseEnter: _,
    onGamepadFocus: _,
    "aria-expanded": !!_,
    onKeyDown: _,
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _,
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsx)(`div`, {
              className: _,
            }),
          }),
        ],
      }),
      (0, _.jsx)(_, {}),
      _ &&
        (0, _.jsx)(_, {
          section: _,
        }),
    ],
  });
}
function _() {
  let _ = _(`${_.STORE_BASE_URL}search/`);
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_),
    focusClassName: _,
    href: _,
    children: [(0, _.jsx)(_, {}), _.Localize(`#Menu_Search`)],
  });
}
function _() {
  let _ = _(`${_.STORE_BASE_URL}vr/`);
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _, _),
    focusClassName: _,
    href: _,
    children: [
      (0, _.jsx)(_, {
        role: `presentation`,
      }),
      _.Localize(`#Menu_VR`),
    ],
  });
}
function _() {
  let _ = _(),
    { data: _ } = _(_),
    _ = _(`${_.STORE_BASE_URL}wishlist/`);
  return _
    ? (0, _.jsxs)(_, {
        className: (0, _.default)(_, _, _),
        focusClassName: _,
        href: _,
        children: [
          (0, _.jsx)(_, {
            role: `presentation`,
          }),
          _.Localize(`#Menu_Wishlist`),
          _ !== void 0 &&
            _ > 0 &&
            (0, _.jsx)(_, {
              children: _(_),
            }),
        ],
      })
    : null;
}
function _(_) {
  return (0, _.jsx)(`span`, {
    className: (0, _.default)(_, _),
    children: _.children,
  });
}
function _() {
  let { data: _ } = _(),
    _ = _(`${_.STORE_BASE_URL}cart/`);
  return _
    ? (0, _.jsxs)(_, {
        className: (0, _.default)(_, _),
        focusClassName: _,
        href: _,
        children: [
          (0, _.jsx)(_, {}),
          (0, _.jsx)(`div`, {
            className: _,
            children: _.Localize(`#Menu_Cart`),
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children:
              _ > 0 &&
              (0, _.jsx)(_, {
                children: _(_),
              }),
          }),
        ],
      })
    : null;
}
function _(_) {
  return (0, _.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 14 14`,
    fill: `none`,
    ..._,
    children: [
      (0, _.jsx)(`g`, {
        children: (0, _.jsx)(`path`, {
          fill: `currentColor`,
          _: `M7 0L4.88269 4.68067L0 5.348L3.5688 8.918L2.67216 14L7 11.536L11.3278 14L10.4268 8.918L14 5.348L9.11731 4.68067L7 0Z`,
        }),
      }),
      (0, _.jsx)(`defs`, {
        children: (0, _.jsx)(`clipPath`, {
          children: (0, _.jsx)(`rect`, {
            fill: `currentColor`,
            width: `14`,
            height: `14`,
            transform: `matrix(-1 0 0 1 14 0)`,
          }),
        }),
      }),
    ],
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 14 14`,
    fill: `none`,
    ..._,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      _: `M14 4L12.442 9.00854C12.3675 9.29313 12.2005 9.54492 11.9674 9.72437C11.7343 9.90382 11.4482 10.0008 11.154 10H5.64338C5.35664 10.0003 5.07751 9.90773 4.84773 9.7362C4.61796 9.56467 4.44988 9.32336 4.36864 9.04837L2.46095 3.77047H0V2H2.77964C3.0578 2.00052 3.32878 2.08838 3.55432 2.25119C3.77987 2.41399 3.94859 2.64352 4.03667 2.90737L4.3288 4.02213L14 4ZM5.64338 11.7672C5.42452 11.7672 5.21058 11.8321 5.02861 11.9537C4.84664 12.0753 4.70481 12.2481 4.62106 12.4503C4.53731 12.6525 4.5154 12.875 4.55809 13.0897C4.60079 13.3043 4.70618 13.5015 4.86093 13.6562C5.01568 13.811 5.21285 13.9164 5.4275 13.9591C5.64215 14.0018 5.86464 13.9799 6.06683 13.8961C6.26903 13.8123 6.44185 13.6705 6.56343 13.4885C6.68502 13.3066 6.74992 13.0926 6.74992 12.8738C6.74992 12.5803 6.63334 12.2989 6.42582 12.0913C6.2183 11.8838 5.93685 11.7672 5.64338 11.7672ZM10.9548 11.7672C10.7359 11.7672 10.522 11.8321 10.34 11.9537C10.1581 12.0753 10.0162 12.2481 9.93248 12.4503C9.84872 12.6525 9.82681 12.875 9.86951 13.0897C9.9122 13.3043 10.0176 13.5015 10.1723 13.6562C10.3271 13.811 10.5243 13.9164 10.7389 13.9591C10.9536 14.0018 11.1761 13.9799 11.3782 13.8961C11.5804 13.8123 11.7533 13.6705 11.8748 13.4885C11.9964 13.3066 12.0613 13.0926 12.0613 12.8738C12.0613 12.5803 11.9448 12.2989 11.7372 12.0913C11.5297 11.8838 11.2483 11.7672 10.9548 11.7672Z`,
    }),
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 48 48`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M34.5 10H13.5C6.0444 10 0 16.0444 0 23.5C0 30.9556 6.0444 37 13.5 37C20.9556 37 19.4952 29.5 24 29.5C28.5048 29.5 26.8422 37 34.5 37C42.1578 37 48 30.9556 48 23.5C48 16.0444 41.9556 10 34.5 10ZM33 14.5C33 15.3286 32.3286 16 31.5 16H16.5C15.6714 16 15 15.3286 15 14.5C15 13.6714 15.6714 13 16.5 13H31.5C32.3286 13 33 13.6714 33 14.5Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = _.memo(function (_) {
    let { openMoreSection: _ } = _,
      { setTerm: _, openSearch: _, onActive: _, closeSearch: _ } = _(),
      _ = _(`mobilesearch`),
      _ = _.useCallback(
        (_) => {
          try {
            if (_.origin !== ``) return;
            let _ = JSON.parse(_.data);
            if (_ && typeof _ == `object`)
              switch (_.type) {
                case `toggle_header_menu`:
                  _();
                  break;
                case `show_search_results`:
                  window.location.href = _(_.term, _);
                  break;
                case `set_search_query`:
                  _(), _(_.term), _();
                  break;
                case `close_search_results`:
                  window.setTimeout(() => {
                    document.hasFocus() || _();
                  }, 1);
                  break;
              }
          } catch {}
        },
        [_, _, _, _, _, _],
      );
    return (
      _.useEffect(
        () =>
          navigator.userAgent.match(/(android)/i)
            ? (document.addEventListener(`message`, _),
              () => document.removeEventListener(`message`, _))
            : (window.addEventListener(`message`, _),
              () => window.removeEventListener(`message`, _)),
        [_],
      ),
      null
    );
  }),
  _ = `nC-vLIVygz8-`,
  _ = `QuRE4Lucojc-`,
  _ = `CY40d-3UGag-`;
function _(_) {
  return _() ? (0, _.jsx)(_, {}) : _.children;
}
function _(_, _) {
  let _ = _;
  for (; (_ = _.parentElement); ) if (_.classList.contains(_)) return _;
  return null;
}
function _() {
  let _ = _.useCallback((_) => {
    let _ = _(_, `responsive_header_content`);
    if (_)
      return (
        _.classList.add(_),
        _.classList.add(_),
        () => {
          _.classList.remove(_), _.classList.remove(_);
        }
      );
    console.warn(`Couldn't find responsive header menu`);
  }, []);
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_),
    ref: _,
    children: (0, _.jsx)(_, {
      bBackdropActive: !1,
    }),
  });
}
function _() {
  return _.useCallback(
    (_) =>
      (0, _.jsx)(_, {
        children: _,
      }),
    [],
  );
}
var _ = class {
  m_mapAppToSNRs = new Map();
  m_rgImpressionsToAdd = [];
  BIsValid() {
    return !0;
  }
  AddImpression(_, _) {
    if (!_(_)) return;
    let _ = !1;
    this.m_mapAppToSNRs.has(_)
      ? this.m_mapAppToSNRs.get(_).indexOf(_) == -1 &&
        (this.m_mapAppToSNRs.get(_).push(_), (_ = !0))
      : (this.m_mapAppToSNRs.set(_, [_]), (_ = !0)),
      _ &&
        (this.m_rgImpressionsToAdd.push(`${_}@${_}`), this.QueueCookieUpdate());
  }
  m_iUpdateInterval;
  QueueCookieUpdate() {
    this.m_iUpdateInterval ||= window.setTimeout(() => {
      this.UpdateCookie(), (this.m_iUpdateInterval = void 0);
    }, 1e3);
  }
  UpdateCookie() {
    let _ = [_(_) || ``, ...this.m_rgImpressionsToAdd].join(`|`);
    this.m_rgImpressionsToAdd = [];
    let _ = encodeURIComponent(_).length,
      _ = 3200;
    _ <= _
      ? _(_, _)
      : console.warn(
          `Cookie max length exceeded ( ${_} > ${_} ), discarding impressions`,
        );
  }
};
function _(_) {
  let [_] = _.useState(() => new _());
  return (0, _.jsx)(_, {
    ImpressionTracker: _,
    children: _.children,
  });
}
var _ = `t-LlQicBZjE-`,
  _ = `dm2SGcwBwj4-`,
  _ = `r0DFA3TwTH8-`,
  _ = `YdfMraqn-X8-`,
  _ = `jGMVnjZbmZM-`,
  _ = _({
    Component: _,
  });
function _({ children: _ }) {
  let {
      strWebAPIToken: _,
      header: _,
      currentUserLinkDetails: _,
      steamid: _,
      storeBrowseContext: _,
      bShowGlobalHeader: _,
      gamepadUiTabs: _,
      bVirtualizedScrolling: _,
      bUseV7Menu: _,
      bWideStore: _,
      ePreferredHWCompat: _,
      bRenderFooter: _,
      htmlAttributes: _,
      htmlClassname: _,
      cssVars: _,
      spoofing: _,
    } = _.useLoaderData(),
    _ = (0, _.useRef)(null),
    _ = _(),
    _ = _.length > 0,
    _ = _();
  return (
    _ && (window.bSupportsGamepadUI = !0),
    (0, _.jsx)(_, {
      strWebAPIToken: _,
      steamid: _,
      storeBrowseContext: _,
      ePreferredHWCompat: _,
      children: (0, _.jsxs)(`html`, {
        lang: _().strISOCode,
        className: (0, _.default)(_, _, _(_)),
        style: _,
        ..._,
        children: [
          (0, _.jsx)(`head`, {
            children: (0, _.jsx)(_, {}),
          }),
          (0, _.jsx)(`body`, {
            className: (0, _.default)(_, _ && `gamepadui`, _ && `L8aSpDPO27A-`),
            children: (0, _.jsx)(_, {
              navID: `StoreTemplate`,
              disabledRoot: !_,
              historyMode: `navigationapi`,
              children: (0, _.jsx)(`div`, {
                className: (0, _.default)(
                  _,
                  _ && _ && `_1R0ZVF6dgIU-`,
                  _ && `k22cBf82EF4-`,
                ),
                children: (0, _.jsx)(_, {
                  children: (0, _.jsx)(_, {
                    children: (0, _.jsxs)(_, {
                      children: [
                        _ &&
                          _ &&
                          (0, _.jsx)(_.Suspense, {
                            children: (0, _.jsx)(_, {
                              navContent: _.navContent,
                              globalActions: _.globalActions,
                              notifications: _.notifications,
                              userDetails: _,
                              changeLanguagePath: `/account/setlanguage/`,
                              logoutPath: `/logout/`,
                              cartInResponsiveMenu: !0,
                              className: void 0,
                              bWiderHeader: _,
                              fnRenderCustomHeader: _ ? _ : void 0,
                              internalOptionsClassname: `t5vw-35f5J8-`,
                              internalOptionsButtonClassname: `gmfn-yFroqw-`,
                              spoofing: _,
                            }),
                          }),
                        _ &&
                          (0, _.jsx)(_.Suspense, {
                            children: (0, _.jsx)(_, {
                              refPage: _,
                            }),
                          }),
                        (0, _.jsxs)(`section`, {
                          className: _,
                          ref: _,
                          children: [
                            (0, _.jsx)(`div`, {
                              className: _,
                            }),
                            (0, _.jsx)(_, {
                              gamepadUiTabs: _,
                            }),
                            (0, _.jsx)(_, {}),
                            (0, _.jsx)(_, {
                              children: _,
                            }),
                          ],
                        }),
                        _ && (0, _.jsx)(_, {}),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          }),
        ],
      }),
    })
  );
}
function _(_) {
  let {
    strWebAPIToken: _,
    steamid: _,
    storeBrowseContext: _,
    ePreferredHWCompat: _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      strWebAPIToken: _,
      steamid: _,
      children: (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          context: _,
          msDelayBatch: 250,
          children: (0, _.jsx)(_, {
            ePreferredHWCompat: _,
            children: (0, _.jsx)(_, {
              children: _,
            }),
          }),
        }),
      }),
    }),
  });
}
export { _ as route };

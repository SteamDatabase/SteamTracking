var _ = _(_(), 1),
  _ = new _(`FocusHistory`).Debug;
function _(_) {
  let _ = (_) => {
      _(
        `preserving state and suppressing focus for tree ${_._} for navigation type ${_.navigationType}`,
      );
      let _ = window.navigation.currentEntry?.getState() ?? {};
      if (_.navigationType != `replace`) {
        let _ = _(_.Root);
        window.navigation.updateCurrentEntry({
          state: {
            ..._,
            [_(_)]: _,
          },
        });
      } else
        _[_] &&
          _.intercept({
            async handler() {
              let { [_(_)]: _, ..._ } = _.destination.getState() ?? {};
              window.navigation.updateCurrentEntry({
                state: {
                  ..._,
                  [_]: !0,
                },
              });
            },
            focusReset: `manual`,
          });
      _.DeferredFocus.SuppressFocus();
    },
    _ = (_) => {
      _(_) ? _.DeferredFocus.Reset() : _.DeferredFocus.ExecuteQueuedFocus();
    },
    _ = new _();
  return (
    window.navigation.addEventListener(`navigate`, _),
    _.Push(() => window.navigation.removeEventListener(`navigate`, _)),
    window.navigation.addEventListener(`navigatesuccess`, _),
    _.Push(() => window.navigation.removeEventListener(`navigatesuccess`, _)),
    _(),
    _() ? _(_, _) : _(_),
    _.GetUnregisterFunc()
  );
}
function _(_, _) {
  let _ = _ ?? _(_);
  return (
    _(
      `Restoring focus state for ${_._}, ${_ ? `history available` : `no history`}`,
    ),
    _ ? (_(_.Root, _, 0), !0) : !1
  );
}
function _(_) {
  return `FocusHistory_${_._}`;
}
function _(_) {
  return window.navigation.currentEntry?.getState()?.[_(_)];
}
var _;
function _() {
  if (!_) {
    _ = new _();
    let _ = performance.now();
    window.addEventListener(`message`, (_) => {
      typeof _.data == `string` &&
        _.data == `FocusRestoreReady` &&
        (_(
          `Got FocusRestoreReady event from page after ${performance.now() - _}ms, will record in history.  ${_.CountRegistered()} trees waiting.`,
        ),
        _(),
        _.Dispatch(),
        _.ClearAllCallbacks(),
        window.clearTimeout(_));
    });
    let _ = window.setTimeout(() => {
      _.CountRegistered() &&
        (console.warn(`Waited 4000ms for FocusRestoreReady, proceeding`),
        _.Dispatch());
    }, 4e3);
  }
}
function _(_, _) {
  if (window.__bFocusRestoreReady) {
    _(_);
    return;
  }
  _(
    `Wait for page enabled, suppressing focus in ${_._} until we hear that page is ready`,
  ),
    _.DeferredFocus.SuppressFocus();
  let _ = _(_),
    _ = _.Register(() => {
      _(_, _) ? _.DeferredFocus.Reset() : _.DeferredFocus.ExecuteQueuedFocus();
    }).Unregister;
  _.Push(_);
}
var _ = `FocusHistoryWaitForPage`;
function _() {
  let _ = window.navigation.currentEntry?.getState();
  return _(`Wait for page? ${_?.[_] ? `wait` : `no`} `, _), !!_?.[_];
}
function _() {
  window.navigation.updateCurrentEntry({
    state: {
      ...window.navigation.currentEntry?.getState(),
      [_]: !0,
    },
  });
}
var _ = new _(`FocusNavigation`).Debug,
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
var _ = _();
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
export { _ };

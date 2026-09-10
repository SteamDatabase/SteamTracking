const __vite__mapDeps = (
  _,
  _ = __vite__mapDeps,
  _ = _._ ||
    (_._ = [
      "./assets/BryW0eKn.css",
      "./assets/CBgaPm1z.css",
      "./assets/BJs42CxA.css",
      "./assets/YNo6LF5Z.css",
      "./assets/CBv2tb10.css",
    ]),
) => _.map((_) => _[_]);
var _ = _(_(), 1),
  _ = _(),
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
var _ = _.lazy(() =>
  _(() => import(`./BWz1wcKT.js`), __vite__mapDeps([0]), import.meta.url),
);
function _(_) {
  return _().metrics
    ? (0, _.jsx)(_.Suspense, {
        children: (0, _.jsx)(_, {
          ..._,
        }),
      })
    : null;
}
function _() {
  return _(_) === `desktop`;
}
function _() {
  _(_, `desktop`), `location` in window && location.reload();
}
function _() {
  _() && _(_), `location` in window && location.reload();
}
function _(_) {
  let { dynamicImport: _, fallback: _, ..._ } = _,
    [_] = (0, _.useState)(() =>
      _.lazy(async () => ({
        default: await _(),
      })),
    );
  return (0, _.jsx)(_, {
    fallback: _,
    children: (0, _.jsx)(_.Suspense, {
      fallback: _,
      children: (0, _.jsx)(_, {
        ..._,
      }),
    }),
  });
}
var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country_code || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country_code: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CUserAccount_GetAvailableValveDiscountPromotions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.promotions || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            promotions: {
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
      return `CUserAccount_GetAvailableValveDiscountPromotions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.promotionid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            promotionid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            promotion_description: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            minimum_cart_amount: {
              _: 3,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            minimum_cart_amount_for_display: {
              _: 4,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            discount_amount: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            currency_code: {
              _: 6,
              _: _.readInt32,
              _: _.writeInt32,
            },
            available_use_count: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            promotional_discount_type: {
              _: 8,
              _: _.readInt32,
              _: _.writeInt32,
            },
            loyalty_reward_id: {
              _: 9,
              _: _.readInt32,
              _: _.writeInt32,
            },
            localized_name_token: {
              _: 10,
              _: _.readString,
              _: _.writeString,
            },
            max_use_count: {
              _: 11,
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
      return `CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            opt_out_in_library_events: {
              _: 2,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
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
      return `CPerAppEmailOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.clanid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            clanid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            opt_out_in_library_events: {
              _: 2,
              _: !1,
              _: _.readBool,
              _: _.writeBool,
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
      return `CPerClanEmailOptions`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.opt_out_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_out_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CUserAccount_GetOptOutEmailOptions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.email || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 11], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            email: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            opt_out_all: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_sales: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_seasonal_promo: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_releases: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_greenlight_releases: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_curator_connect: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_releases: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_in_library_events: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            per_app_opt_outs: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            per_clan_opt_outs: {
              _: 11,
              _: _,
              _: !0,
              _: !0,
            },
            opt_out_loyalty_awards_received: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_partner_messages: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_year_in_review: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_demo_releases: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_demo_releases: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_next_fest_starts: {
              _: 17,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_theme_sale_starts: {
              _: 18,
              _: !0,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_season_pass_ship: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_roadmap_ship: {
              _: 20,
              _: _.readBool,
              _: _.writeBool,
            },
            is_self: {
              _: 21,
              _: _.readBool,
              _: _.writeBool,
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
      return `CUserAccount_GetOptOutEmailOptions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.opt_out_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, [10, 11], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            opt_out_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            opt_out_all: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_sales: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_seasonal_promo: {
              _: 4,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_releases: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_greenlight_releases: {
              _: 6,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_curator_connect: {
              _: 7,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_releases: {
              _: 8,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_in_library_events: {
              _: 9,
              _: _.readBool,
              _: _.writeBool,
            },
            per_app_opt_outs: {
              _: 10,
              _: _,
              _: !0,
              _: !0,
            },
            per_clan_opt_outs: {
              _: 11,
              _: _,
              _: !0,
              _: !0,
            },
            opt_out_loyalty_awards_received: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_partner_messages: {
              _: 13,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_year_in_review: {
              _: 14,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_wishlist_demo_releases: {
              _: 15,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_creator_home_demo_releases: {
              _: 16,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_next_fest_starts: {
              _: 17,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_theme_sale_starts: {
              _: 18,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_season_pass_ship: {
              _: 19,
              _: _.readBool,
              _: _.writeBool,
            },
            opt_out_roadmap_ship: {
              _: 20,
              _: _.readBool,
              _: _.writeBool,
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
      return `CUserAccount_SetOptOutEmailOptions_Request`;
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
      return `CUserAccount_SetOptOutEmailOptions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.has_wallet || _(_._()),
        _.Message.initialize(this, _, 0, -1, [13], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            has_wallet: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            user_country_code: {
              _: 2,
              _: _.readString,
              _: _.writeString,
            },
            wallet_country_code: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            wallet_state: {
              _: 4,
              _: _.readString,
              _: _.writeString,
            },
            balance: {
              _: 5,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            delayed_balance: {
              _: 6,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            currency_code: {
              _: 7,
              _: _.readInt32,
              _: _.writeInt32,
            },
            time_most_recent_txn: {
              _: 8,
              _: _.readUint32,
              _: _.writeUint32,
            },
            most_recent_txnid: {
              _: 9,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            balance_in_usd: {
              _: 10,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            delayed_balance_in_usd: {
              _: 11,
              _: _.readInt64String,
              _: _.writeInt64String,
            },
            has_wallet_in_other_regions: {
              _: 12,
              _: _.readBool,
              _: _.writeBool,
            },
            other_regions: {
              _: 13,
              _: !0,
              _: !0,
              _: _.readInt32,
              pbr: _.readPackedInt32,
              _: _.writeRepeatedInt32,
            },
            formatted_balance: {
              _: 14,
              _: _.readString,
              _: _.writeString,
            },
            formatted_delayed_balance: {
              _: 15,
              _: _.readString,
              _: _.writeString,
            },
            delayed_balance_available_min_time: {
              _: 16,
              _: _.readInt32,
              _: _.writeInt32,
            },
            delayed_balance_available_max_time: {
              _: 17,
              _: _.readInt32,
              _: _.writeInt32,
            },
            delayed_balance_newest_source: {
              _: 18,
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
      return `CUserAccount_GetWalletDetails_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_balance_in_usd || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            include_balance_in_usd: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            wallet_region: {
              _: 2,
              _: 1,
              _: _.readInt32,
              _: _.writeInt32,
            },
            include_formatted_balance: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
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
      return `CUserAccount_GetClientWalletDetails_Request`;
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
      return `CUserAccount_GetAccountLinkStatus_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.pwid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            pwid: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            identity_verification: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            performed_age_verification: {
              _: 3,
              _: _.readBool,
              _: _.writeBool,
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
      return `CUserAccount_GetAccountLinkStatus_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.appid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            appid: {
              _: 1,
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
      return `CUserAccount_CancelLicenseForApp_Request`;
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
      return `CUserAccount_CancelLicenseForApp_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
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
      return `CUserAccount_GetUserCountry_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.country || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            country: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CUserAccount_GetUserCountry_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_limit || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_limit: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            invite_duration: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            invite_note: {
              _: 3,
              _: _.readString,
              _: _.writeString,
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
      return `CUserAccount_CreateFriendInviteToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
            },
            invite_limit: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_duration: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            time_created: {
              _: 4,
              _: _.readFixed32,
              _: _.writeFixed32,
            },
            valid: {
              _: 5,
              _: _.readBool,
              _: _.writeBool,
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
      return `CUserAccount_CreateFriendInviteToken_Response`;
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
      return `CUserAccount_GetFriendInviteTokens_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tokens || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            tokens: {
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
      return `CUserAccount_GetFriendInviteTokens_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            invite_token: {
              _: 2,
              _: _.readString,
              _: _.writeString,
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
      return `CUserAccount_ViewFriendInviteToken_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.valid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            valid: {
              _: 1,
              _: _.readBool,
              _: _.writeBool,
            },
            steamid: {
              _: 2,
              _: _.readUint64String,
              _: _.writeUint64String,
            },
            invite_duration: {
              _: 3,
              _: _.readUint64String,
              _: _.writeUint64String,
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
      return `CUserAccount_ViewFriendInviteToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            invite_token: {
              _: 2,
              _: _.readString,
              _: _.writeString,
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
      return `CUserAccount_RedeemFriendInviteToken_Request`;
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
      return `CUserAccount_RedeemFriendInviteToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.invite_token || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            invite_token: {
              _: 1,
              _: _.readString,
              _: _.writeString,
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
      return `CUserAccount_RevokeFriendInviteToken_Request`;
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
      return `CUserAccount_RevokeFriendInviteToken_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.compat_tool || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            compat_tool: {
              _: 1,
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
      return `CUserAccount_RegisterCompatTool_Request`;
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
      return `CUserAccount_RegisterCompatTool_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            client_token: {
              _: 2,
              _: _.readBytes,
              _: _.writeBytes,
            },
            expiry: {
              _: 3,
              _: _.readUint32,
              _: _.writeUint32,
            },
            deviceid: {
              _: 4,
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
      return `CEmbeddedClient_Token`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.result || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            result: {
              _: 1,
              _: _.readUint32,
              _: _.writeUint32,
            },
            token: {
              _: 2,
              _: _,
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
      return `CEmbeddedClient_AuthorizeDevice_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.steamid || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            steamid: {
              _: 1,
              _: _.readFixed64String,
              _: _.writeFixed64String,
            },
            appid: {
              _: 2,
              _: _.readUint32,
              _: _.writeUint32,
            },
            device_info: {
              _: 3,
              _: _.readString,
              _: _.writeString,
            },
            deviceid: {
              _: 4,
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
      return `CEmbeddedClient_AuthorizeCurrentDevice_Request`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(
      `UserAccount.GetAvailableValveDiscountPromotions#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 1,
      },
    );
  }
  _.GetAvailableValveDiscountPromotions = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetOptOutEmailOptions#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
    });
  }
  _.GetOptOutEmailOptions = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.SetOptOutEmailOptions#1`, _(_, _, _), _, {
      ePrivilege: 2,
    });
  }
  _.SetOptOutEmailOptions = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetClientWalletDetails#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetClientWalletDetails = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetAccountLinkStatus#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetAccountLinkStatus = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.CancelLicenseForApp#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.CancelLicenseForApp = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetUserCountry#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetUserCountry = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.CreateFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 3,
    });
  }
  _.CreateFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.GetFriendInviteTokens#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.GetFriendInviteTokens = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.ViewFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.ViewFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.RedeemFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RedeemFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.RevokeFriendInviteToken#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RevokeFriendInviteToken = _;
  function _(_, _, _) {
    return _.SendMsg(`UserAccount.RegisterCompatTool#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.RegisterCompatTool = _;
})((_ ||= {}));
var _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`EmbeddedClient.AuthorizeCurrentDevice#1`, _(_, _, _), _, {
      ePrivilege: 1,
    });
  }
  _.AuthorizeCurrentDevice = _;
})((_ ||= {}));
var _ = 1,
  _ = 2;
function _() {
  return [`CurrentUserWalletDetails`, _.accountid];
}
function _(_) {
  return {
    queryKey: _(),
    queryFn: async () => {
      if (!_.accountid) return;
      let _ = _.EREALM === _.k_ESteamRealmChina;
      return (
        await _.GetClientWalletDetails(_, {
          wallet_region: _ ? _ : _,
          include_formatted_balance: !0,
        })
      )
        .Body()
        .toObject();
    },
    staleTime: 600 * 1e3,
  };
}
function _() {
  return _(_(_()));
}
var _ = `USDyb53meAE-`,
  _ = `M6Pai7xYxtg-`,
  _ = `_84yL92kXlzo-`,
  _ = `-QcLqQWGg4g-`,
  _ = `e-j9Y1J8-N8-`;
async function _(_, _) {
  let _ = new FormData();
  _.set(`language`, _);
  let _ = await fetch(_, {
    method: `POST`,
    credentials: `same-origin`,
    body: _,
  });
  if (!_._) throw _;
}
function _(_) {
  let {
      open: _,
      menuAction: _,
      changeLanguagePath: _,
      bLoggedIn: _,
      bSkipLanguagePrefs: _,
      onDismiss: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null);
  (0, _.useEffect)(() => {
    _ ? _.current?.showModal() : _.current?.close();
  }, [_]);
  async function _(_) {
    _(!0);
    try {
      await _(_, _);
    } catch (_) {
      console.error(_), _(!1);
      return;
    }
    _ && !_
      ? (location.href = _.STORE_BASE_URL + `account/languagepreferences/`)
      : _.href
        ? (location.href = _.href)
        : location.reload();
  }
  return (0, _.jsx)(`dialog`, {
    ref: _,
    className: _,
    onMouseDown: (_) => _.target === _.current && _(),
    children: (0, _.jsxs)(`div`, {
      children: [
        (0, _.jsx)(`hr`, {
          className: _,
        }),
        (0, _.jsxs)(`form`, {
          method: `dialog`,
          className: _,
          onSubmit: (_) => _(_.target.elements.namedItem(`language`)?.value),
          children: [
            (0, _.jsx)(`select`, {
              disabled: _,
              name: `language`,
              onChange: (_) => _(_.target.value),
              defaultValue: _().strLanguage,
              children: _.menuAction.children?.map((_) =>
                (0, _.jsx)(
                  `option`,
                  {
                    value: _.action_parameters?.language,
                    children: _.label,
                  },
                  _.label,
                ),
              ),
            }),
            (0, _.jsx)(`div`, {
              className: _,
              children: (0, _.jsx)(`input`, {
                type: `submit`,
                value: `OK`,
                className: _,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var _ = `X-UKhqf-Moc-`,
  _ = `nikULGV-7Q0-`,
  _ = `-yy5spKdnuw-`,
  _ = `YIU8yTvS858-`,
  _ = `QO6CjVPSFuI-`,
  _ = `vTro5UlZ-gU-`,
  _ = `En-WtuWIGUc-`,
  _ = `_6SYP6u3KmrY-`,
  _ = `LxGIxXUwILQ-`,
  _ = `XYfgXgWUac8-`,
  _ = `_7ykpxZ0stGM-`,
  _ = {};
(_.arabic = () => _(() => import(`./CXRh2for.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./DhfZpnGN.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./Db6QlCmU.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./CxYWAkLH.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./D8WlaMGZ.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./CwS32Wby.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./Dpu__Y30.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./DLyCHUL7.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./DlB92d_O.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./CB-Znb8_.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./CbjTV9P92.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./Xxlh2u6E2.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./nVv36xvQ2.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./CTp5PEot2.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./dmz8d30T2.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./BNgmGbLG2.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./D3FXvwLL2.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./DTbQR3hC2.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./DKME1Jev2.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./DkoXIs9D2.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./CN1YlgzX2.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./DirR0TcY2.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./B6pNkZl-2.js`), [], import.meta.url)),
  (_.sc_schinese = () =>
    _(() => import(`./CldGdb6E2.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./W3xbhZ1a2.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./CK6YAZUQ2.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./CoipiwE-2.js`), [], import.meta.url)),
  (_.tchinese = () => _(() => import(`./lCCmLfi-2.js`), [], import.meta.url)),
  (_.thai = () => _(() => import(`./CtxCBZGM2.js`), [], import.meta.url)),
  (_.turkish = () => _(() => import(`./Be-JwR2a2.js`), [], import.meta.url)),
  (_.ukrainian = () => _(() => import(`./BVB0fHBN2.js`), [], import.meta.url)),
  (_.vietnamese = () => _(() => import(`./CZi0kN3X2.js`), [], import.meta.url));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_);
function _(_ = `/logout/`) {
  let _ = document.createElement(`form`);
  (_.action = _), (_.method = `POST`), document.body.appendChild(_), _.submit();
}
var _ = _(_(), 1);
function _(_) {
  let { action: _ } = _,
    _ = (0, _.useContext)(_),
    _ = `span`,
    _ = {};
  return (
    _.href &&
      ((_ = _),
      (_._ = _.href),
      (_.external = !_.ssr),
      _.href.startsWith(_.STORE_BASE_URL) &&
        (_.snr = {
          feature: `globalheader`,
        })),
    _.action &&
      (_.href || (_ = `button`),
      (_.onClick = async function (_) {
        switch ((_.preventDefault(), _.action)) {
          case 1:
            _(_.logoutPath);
            return;
          case 2:
            if (_.action_parameters?.language === void 0)
              throw `Missing language`;
            try {
              await _(_.action_parameters.language, _.changeLanguagePath);
            } catch (_) {
              console.error(_);
              return;
            }
            _.userDetails
              ? (location.href =
                  _.STORE_BASE_URL + `account/languagepreferences/`)
              : _.href
                ? (location.href = _.href)
                : location.reload();
            return;
        }
      })),
    (0, _.jsx)(_, {
      menuTarget: (0, _.jsxs)(_, {
        ..._,
        tabIndex: 0,
        className: _,
        children: [
          _(
            _.label,
            (0, _.jsx)(`span`, {
              className: _,
            }),
          ),
          _.beta &&
            (0, _.jsx)(`span`, {
              className: `_7ngrCnz6jgA-`,
              children: _.Localize(`#beta_tag`),
            }),
        ],
      }),
      direction: `left`,
      className: _,
      children: _.children?.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            action: _,
          },
          _,
        ),
      ),
    })
  );
}
var _ = (0, _.createContext)({});
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.globalActions.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          direction: `down-left`,
          menuTarget: (0, _.jsx)(`button`, {
            className: _,
            children: _.label,
          }),
          className: _,
          interactionMode: 1,
          children: _.children?.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                action: _,
              },
              _,
            ),
          ),
        },
        _,
      ),
    ),
  });
}
function _() {
  let { data: _ } = _();
  return (0, _.jsx)(`div`, {
    className: _,
    children: _?.formatted_balance,
  });
}
function _(_) {
  let { userDetails: _ } = _,
    [_, _] = (0, _.useState)(void 0),
    _ = `/login/${_ ? `?redir=${encodeURIComponent(_)}` : ``}`;
  return (
    (0, _.useEffect)(() => {
      _(location.href);
    }, []),
    _
      ? (0, _.jsxs)(`div`, {
          className: _,
          children: [
            (0, _.jsx)(`a`, {
              className: _,
              href: _.STORE_BASE_URL + `about/`,
              children: _.Localize(`#global_menu_install_steam`),
            }),
            _.notifications &&
              (0, _.jsx)(`div`, {
                className: `PI-IEC-WlRE-`,
                children: (0, _.jsx)(_, {
                  dynamicImport: async () =>
                    (
                      await _(
                        async () => {
                          let { GreenEnvelope: _ } = await import(
                            `./BDIj9ac9.js`
                          );
                          return {
                            GreenEnvelope: _,
                          };
                        },
                        __vite__mapDeps([1, 2, 3, 4]),
                        import.meta.url,
                      )
                    ).GreenEnvelope,
                  fallback: (0, _.jsx)(`div`, {
                    className: `FZlHN3ErsM8-`,
                  }),
                  bResponsiveHeader: !1,
                  notifications: _.notifications,
                }),
              }),
            (0, _.jsxs)(`div`, {
              className: _,
              children: [
                (0, _.jsx)(_, {
                  userDetails: _,
                  globalActions: _.globalActions,
                  changeLanguagePath: _.changeLanguagePath,
                  logoutPath: _.logoutPath,
                }),
                (0, _.jsx)(_, {}),
              ],
            }),
            (0, _.jsx)(`a`, {
              className: _,
              href: _(_),
              children: (0, _.jsx)(_, {
                playerLinkDetails: _,
                statusPosition: `border`,
                alt: ``,
                role: `presentation`,
                size: `Small`,
              }),
            }),
          ],
        })
      : (0, _.jsx)(`div`, {
          className: _,
          children: (0, _.jsxs)(`div`, {
            className: _,
            children: [
              (0, _.jsx)(`a`, {
                className: (0, _.default)(_, _),
                href: _.STORE_BASE_URL + `about/`,
                children: _.Localize(`#global_menu_install_steam`),
              }),
              `\xA0`,
              (0, _.jsx)(`a`, {
                href: _,
                className: _,
                children: _.Localize(`#global_menu_login`),
              }),
              _.globalActions.length > 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    `\xA0\xA0|\xA0\xA0`,
                    (0, _.jsx)(_, {
                      userDetails: _,
                      globalActions: _.globalActions,
                      changeLanguagePath: _.changeLanguagePath,
                      logoutPath: _.logoutPath,
                    }),
                  ],
                }),
            ],
          }),
        })
  );
}
var _ = `_7urhuKLYiUk-`,
  _ = `zugXgzI1-Ig-`,
  _ = `NGjNcNxDz0Y-`,
  _ = `iEaHFy2Quxg-`,
  _ = `LVqCHgnXxYs-`,
  _ = `r0Jn4sdskW4-`,
  _ = `_3xhf62uevQo-`,
  _ = `JHTb0KR9c-o-`,
  _ = `FAoztKwEGgQ-`,
  _ = `JGImopK-SYs-`,
  _ = `KHtcfezTz4s-`,
  _ = (0, _.forwardRef)(function (_, _) {
    let { item: _, responsive: _, className: _, ..._ } = _,
      _ = _.label;
    return (
      _ && (_ = _.label_responsive ?? _.label),
      (0, _.jsx)(_.Fragment, {
        children: (0, _.jsxs)(_, {
          className: (0, _.default)(_, _.valveOnly && `_7WvpcB-dbNc-`),
          _: _.href,
          "aria-current": _.active ? `page` : void 0,
          external: !_.ssr,
          snr: _.href.startsWith(_.STORE_BASE_URL) && {
            feature: `globalheader`,
          },
          ref: _,
          ..._,
          children: [
            _,
            _.new &&
              (0, _.jsx)(`span`, {
                className: `jxJHmxST56Q-`,
                children: _.Localize(`#m_ext_new`),
              }),
          ],
        }),
      })
    );
  });
function _(_) {
  let { navContent: _ } = _;
  return (0, _.jsx)(_, {
    menuTarget: (0, _.jsx)(_, {
      item: _,
      className: _,
    }),
    direction: `right`,
    children: _.children?.map((_, _) =>
      (0, _.jsx)(
        _,
        {
          navContent: _,
        },
        _,
      ),
    ),
  });
}
function _(_) {
  return (0, _.jsx)(`nav`, {
    className: _,
    children: (0, _.jsx)(`ul`, {
      className: _,
      children: _.navContent.map((_, _) =>
        (0, _.jsx)(
          _,
          {
            menuTarget: (0, _.jsx)(_, {
              item: _,
              className: (0, _.default)(_, _.userContent && `Rh10yi6-EHM-`),
            }),
            direction: `down`,
            className: _,
            children: _.children?.map((_, _) =>
              (0, _.jsx)(
                _,
                {
                  navContent: _,
                },
                _,
              ),
            ),
          },
          _,
        ),
      ),
    }),
  });
}
var _ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADUCAYAAACrgw7IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADmNJREFUeNrs3V9MVGcax/F3/mnQkboQC4qLrstWbWuCNli765+GprVpu7JG24uKe+mu7cVettleNE160ZuaNm1smrRuYiBdErGA1ohlu2ETxe3adqf+KaygBWEFRQYpAyMDwz7vMNAzZwZLd3c4L5PvJ3kCZ4aLyfD8zvuec2be4xofH1cAMoObtwAg0AAINAACDYBAAwQaAIEGQKABEGgABBog0AAINAACDYBAAyDQAIEGQKABEGgABBog0AAINAACDYBAAyDQAIEGQKABEGgABBoAgQYyj9fpF1BeXs5/AXNWRUUFgZ7kcrnUnj17ZvKnS6QKpdZJzaONkEYjUueluqS6Z9LDdk7eotlr8BubJbVPaqfUNvoMDmiSOiL1ntQwx9D/veelLku9RZjhoEek3pS6IrWXQP94Hql3pCqlCugnGCJf6rDUQdMP+Uybch+Oj85JCgtXqIKC5crr9dJeSJvR0VHV1dWpOjuvqWg0an96v5o4n/Msgf5hL6cK8693/EZt3bpNZWffQ7dh1nz33XeqsfGv6pPjdfZg75Z6TepVAj29ovibNGXVqp+rPeW/VcuX/5TuwqxbtGiReuaZHWrD+odUZeVh1dp62fr0K1JVUpc4hk7tdeuxSU5Ortq3bz9hhuOWFRSo3/3+RZWXn2992COj9gETX68Jgc6JT2Om6D3jT3Jy6CYYITs7Wz311DOJwXG7t/f39z9IoJPpMHusU+1fbd5CF8Eomzb9Um3cuCnhsaysrF3W3iXQExKuM6+XYxbARGvWrE3Y9nq9JfJjAYFOVGTd+MV999E5MJK+dGqbduuPI/tMGqVNCHSWdWPePD6qDTPJFDvp8Dr+00eggTnG7UmKy+TI7CXQQOZgyg1kEBeBBkCgARBogEADINAACDRgNr34gU2EQCfrs26EBgfpHBhJL3pgNT4+3kugk7VYN1rbWukcGKmtNbE3o9FoK4FO1mjd+PzvZ1Ot5QQ47ty5zxPn25HI6cnBmkB/r05qap59/fq/1SefHKN7YJT6kydUe/u31ofCbW1tJwl0Mh3mt60PHD9Wq86ePUMXwQi6F48ePWIfnQ8FAoFgfHOMQCd6Q9lOjv3p0AexvSLgpM8+a4j1ok2wpaXFuqbYqCmv15SvfQ2Oj48/53K56pXlmyt6r3j58r/UhodKVElJifL5+K400k9fnvryy3Pq3D8+V4HAP+1Pjw0MDLxgGZ31dHvElNfucvLGWvab1ckb+aLX6313ur/3eDyxxfaBdNHncGQ6Pe3z4XD4perqauuQHZYasv4NN6uLq6qqOlhWVtbr9/s/lM2FSbvGsTHV0dFO18EJ4VAotL+mpqbOml1l2E3sjPqkmIzW47W1tUc7Ojq2SHiP0EMwgfTix11dXZttYY4dKiqDznAbN+WeVFlZOV+P0KWlpUW5ubk7ZRr+mNvtLqG1MFui0WhADgFPBYPBuoaGhlR3yBiS3g1LryY94WimTAx0PNR64TW/sqwGkZeXN6+4uHgt7YZ0aW5ubmlvbw/f5U90YELStyPxPjUq0MbeylHesIi8WbfVxLrHsdPbPT09I/X19QHaDg7RIR6W3hwz9QU6PkLPkCceap/JOyFkJH2NORIP84yCzAg9g/MSauJs4vAcfO2Ym8aUYSe8MinQ0+05AViwwAFAoAEw5bZx8uQBwAgNgEADINAACDRAoAEQaAAEGgCBBkCgAQINgEADINAACDQAAg1kKsdXLCkvL+e/gDmroqKCQE+62zK+NkukCqXWqfgKoECa6MUAz0t1SXXPpIftWCQwtSypfVI7pbbRZ3BAk5S+g8t7yrBb3sy1Y+jnpS5LvUWY4aBHpN6UuiK1l0D/eHr97Xek9O0ICugnGCJf6rDUQdMP+Uybch+Oj85JCgoK1NKlS2O3lAXSRd/h9Pr167GKRqP2p/erifM5zxLoH/ZyqjBv375dbdq0SS1atIhuw6wZHBxUTU1N6tNPP7UHe7fUa1KvEujpFcXfpCkrVqxQu3btUsuWLaO7MOv8fr96/PHH1bp161R1dbW6evWq9elXpKqkLhHo1F63HpssXrxY7d27N/YzFb3H1DU6ys0zkF66B/Wl1ffff1/dvHlz8mGP9N8Bt9v9JIFOlhOfxkx54oknksKsr+2Fw2F1584dFYlE6DTMqocfflgdP358alvCvL2/v/9B+fWCSa/ThLPcOswe61R748aNCX+gQ9zX1xc7riHMcMIDDzyg7r///oTHsrKydll7l0BPSLjOrI9Z7CcnBgYGUp1xBGaVHmwSprdeb4mauH85U26LIuvGqlWrpn7XQdajM2CCvLy8xNHQ7dYfR/bFR2kjbgJvwgidZd3w+Xyxn0NDQ4QZRpk/f779oezJtmXKfRf64r4ONGDU8ak7KS4eg2a65gY6FApxZ0rMJR4CPQ0dZKbamGNcBHoaXJYCCDQAEwOtT4gByJBAAyDQAAg08D8dDkYIdLI+68bw8DCdAyPZP+w0Pj7eS6CTtVg3Ojs76RwYyd6b0Wi0lUAna7RuXLhwgU+JwUjNzc2J8+1I5PTkYE2gv1cnNTi50dvbq06fPk33wChnz55V3d0J6+6H29raThLoZDrMb1sf0IG+ePEiXQQj6F5sbGy0j86HAoFAML45RqATvaFsJ8f0ci96rwg46YsvvkhYeigu2NLScsCybczidqZ87WtQjpufc7lc9cryzRW9V9QnIlavXq3Wrl2rV4igw5B2+vKUBFZ98803qrU16bzX2MDAwAuW0VlPt0dMee0uJ09A2W9WNzo6+qKE9t1ppxNut1qyZAkdh7S5devWXVeTDYfDL1VXV39gfUgq4XoWN6uLq6qqOlhWVtbr9/s/lM2F9uf1umI9PT10HZwQDoVC+2tqauqs2VWG3cTOqE+KyWg9Xltbe7Sjo2OLTHuO0EMwZAr+cVdX12ZbmGOHisqgM9zGTbknVVZW6sWbFpaWlhbl5ubulGn4YzLdLqG1MFtkNhiQqfepYDBY19DQkOoOGUPSu2Hp1aQnHM2UiYGOh1ovvOZXltUg8vLy5hUXF6+l3ZAuzc3NLe3t7eG7/IkOTEj6diTep0YF2tjTxvKGReTNuq0m1j2O3SZHjp9H6uvrA7QdHKJDPCy9aeyX9h0foWfIEw+1z+SdEDKSPuUdiYd5RkFmhJ7BeQk1cTZxeA6+dsxNY8qwE16ZFOjp9pwALFjgACDQAJhy2/C9Z4ARGgCBBgg0AAINgEADINAACDRAoAEQaAAEGgCBBgg0AAINgEAD+P9zfMWS8vJy/guYsyoqKgj0pLst42uj739TKLVOxVcABdJELwZ4XqpLqnsmPWzHIoGpZUntk9optY0+gwOapPQdXN5Tht3yZq4dQz8vdVnqLcIMBz0i9abUFam9BPrH0+tvvyOlb0dQQD/BEPlSh6UOmn7IZ9qU+3B8dE6ydOlSde+99yqPx0N7IW30vaFv3Lihuru7Ux0L71cT53OeJdA/7OVUYd726KNqw4YNyu/3022YNUNDQ+rcuXPqb42N9mDvlnpN6lUCPb2i+Js0Zfny5eqpp5/WN6ijuzDrFixYoLZu3arWrFmjTpw4oa51dFiffkWqSuoSgU7tdeuxyT333KN27d6tsrOzp50WjY6OqpGREX2NgO5D2mRlZakdO3aoP3/0kbp169bkw55oNHrA7XY/SaCT5cSnMVO2yJ7RHmY97RkYGFBDoZAaDofpNMyq1atXqzNnzkxtS5i39/f3Pyi/XjDpdZpwlluH2WOdaq9fvz7hDwYHB9W1a9die0jCDCf8bNUqtXLlSvvovcvauwR6QsJ1Zn3MYnWrtzd21lFPsQEn5efnJ05vvd4SNXH/cqbcFkXWjcIVK6Z+10HWozNggpycnMTR0O3WH0f2xUdpI24Cb8IInWXd8Pl8sZ9yfEKYYRTfvKTPlEye6PEx5b6LSCSigsEgHQSjpPgihsegma65gdZh5s6UmEOMOTFm3LetotFo7FM6wFwavBmhpzFMmIHMCfQd/ekvAJkRaK43AxkUaE6GARkUaAAEGkg7fQXGJkKgk/VZN+7w5QsYKmzrTTk87CXQyVqsGz03btA5MNLNmzftI3YrgU7WaN240tbGiTEYqf3bbxPn25HI6cnBmkB/r05q6lsY+ksZ58+fp3tglEsXL6q+voSjw3BbW9tJAp1Mh/lt6wPnv/5aXb1yhS6CEXQvfvXVV/bR+VAgEJj8BtEYgU70hrKdHNPLvei9IuCklubmhKWH4oItLS0HLNvGfBrKlC9nDMpx83Mul6teWb65oveKepGDwsJCtWLlStbkxqzQl6c6Ojpix8ydnZ32p8cGBgZesIzOero9QqBtJMx/GR0d/YPX633X+nhXV1esmpqa9AoRavHixXQc0ub27duxVWWnEw6H/3js2LFTlofumHQMbdTXJ6uqqg6WlZX1+v3+D2VzYao9p+3EBDBbwqFQaH9NTU2d5TEdZKNuYmfUJ8X27NkzXltbe1SmO1tkL3mEHoIJpBc/llniZluYY4eKJo3OsZmuk9d8p7s/dGVl5Xw9QpeWlhbl5ubulGn4YzLdLqG1MIvH0QE5BDwVDAbrGhoaUt0hY0h6Nyy9mvSEo5kyMdDxUOuF1/QNraZWg8jLy5tXXFy8lnZDujQ3N7e0t7ff7fPHOjAh6duReJ8aFWhjb/gub1hE3qzbamLd49hyiz09PSP19fUB2g4O0SEelt4cM/UFOj5Cz5AnHmqfyTshZCR9jTkSD/OMgswIPYPzEmribOLwHHztmJvGlGEnvDIp0NPtOQFYsMABQKABMOW24XvPACM0AAINEGgABBoAgQZAoAEQaIBAAyDQAAg0AAINEGgABBoAgQZAoAEQaIBAAyDQAAg0AAINgEADBBoAgQZAoAEQaIBAAyDQAAg0gPT4jwADAFEL3o+/RT5ZAAAAAElFTkSuQmCC`,
  _ = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='355.666px'%20height='89.333px'%20viewBox='0%200%20355.666%2089.333'%20enable-background='new%200%200%20355.666%2089.333'%20xml:space='preserve'%3e%3cg%3e%3cpath%20fill='%23C5C3C0'%20d='M44.238,0.601C21,0.601,1.963,18.519,0.154,41.29l23.71,9.803c2.009-1.374,4.436-2.179,7.047-2.179%20c0.234,0,0.467,0.008,0.698,0.021l10.544-15.283c0-0.073-0.001-0.144-0.001-0.216c0-9.199,7.483-16.683,16.683-16.683%20c9.199,0,16.682,7.484,16.682,16.683c0,9.199-7.483,16.684-16.682,16.684c-0.127,0-0.253-0.003-0.379-0.006l-15.038,10.73%20c0.008,0.195,0.015,0.394,0.015,0.592c0,6.906-5.617,12.522-12.522,12.522c-6.061,0-11.129-4.326-12.277-10.055L1.678,56.893%20c5.25,18.568,22.309,32.181,42.56,32.181c24.432,0,44.237-19.806,44.237-44.235C88.475,20.406,68.669,0.601,44.238,0.601'/%3e%3cpath%20fill='%23C5C3C0'%20d='M27.875,67.723l-5.434-2.245c0.963,2.005,2.629,3.684,4.841,4.606c4.782,1.992,10.295-0.277,12.288-5.063%20c0.965-2.314,0.971-4.869,0.014-7.189c-0.955-2.321-2.757-4.131-5.074-5.097c-2.299-0.957-4.762-0.922-6.926-0.105l5.613,2.321%20c3.527,1.47,5.195,5.52,3.725,9.047C35.455,67.526,31.402,69.194,27.875,67.723'/%3e%3cpath%20fill='%23C5C3C0'%20d='M69.95,33.436c0-6.129-4.986-11.116-11.116-11.116c-6.129,0-11.116,4.987-11.116,11.116%20c0,6.13,4.987,11.115,11.116,11.115C64.964,44.55,69.95,39.565,69.95,33.436%20M50.502,33.417c0-4.612,3.739-8.35,8.351-8.35%20c4.612,0,8.351,3.738,8.351,8.35s-3.739,8.35-8.351,8.35C54.241,41.767,50.502,38.028,50.502,33.417'/%3e%3cpath%20fill='%23C5C3C0'%20d='M135.718,30.868l-2.964,5.21c-2.283-1.595-5.377-2.555-8.078-2.555c-3.087,0-4.997,1.278-4.997,3.567%20c0,2.781,3.393,3.428,8.436,5.238c5.421,1.917,8.537,4.17,8.537,9.135c0,6.793-5.342,10.608-13.02,10.608%20c-3.742,0-8.256-0.966-11.726-3.077l2.162-5.776c2.819,1.489,6.191,2.372,9.197,2.372c4.052,0,5.978-1.495,5.978-3.705%20c0-2.529-2.937-3.289-7.678-4.859c-5.403-1.804-9.147-4.171-9.147-9.666c0-6.197,4.963-9.756,12.104-9.756%20C129.499,27.604,133.499,29.181,135.718,30.868'/%3e%3cpolygon%20fill='%23C5C3C0'%20points='158.888,34.161%20158.888,61.5%20151.909,61.5%20151.909,34.161%20141.779,34.161%20141.779,28.175%20168.988,28.175%20168.988,34.161%20'/%3e%3cpolygon%20fill='%23C5C3C0'%20points='183.7,34.143%20183.7,41.652%20197.056,41.652%20197.056,47.638%20183.7,47.638%20183.7,55.459%20199.196,55.459%20199.196,61.5%20176.723,61.5%20176.723,28.175%20199.196,28.175%20199.196,34.143%20'/%3e%3cpath%20fill='%23C5C3C0'%20d='M214.773,55.03l-2.206,6.471h-7.316l12.495-33.325h7.025L237.619,61.5h-7.563l-2.254-6.471H214.773z%20M221.219,36.125l-4.551,13.343h9.196L221.219,36.125z'/%3e%3cpolygon%20fill='%23C5C3C0'%20points='273.436,41.056%20264.316,60.529%20260.378,60.529%20251.406,41.23%20251.406,61.5%20244.723,61.5%20244.723,28.175%20251.391,28.175%20262.591,52.231%20273.393,28.175%20280.119,28.175%20280.119,61.5%20273.437,61.5%20'/%3e%3cpath%20fill='%23C5C3C0'%20d='M293.611,32.379c0,2.864-2.146,4.649-4.609,4.649c-2.472,0-4.623-1.785-4.623-4.649%20c0-2.863,2.151-4.636,4.623-4.636C291.466,27.743,293.611,29.516,293.611,32.379%20M285.154,32.379c0,2.396,1.726,3.901,3.848,3.901%20c2.114,0,3.833-1.505,3.833-3.901c0-2.403-1.719-3.885-3.833-3.885C286.886,28.494,285.154,29.994,285.154,32.379%20M289.066,30.01%20c1.195,0,1.597,0.632,1.597,1.315c0,0.626-0.371,1.046-0.823,1.26l1.071,2.007h-0.877l-0.903-1.779H288.2v1.779h-0.73V30.01%20H289.066z%20M288.207,32.142h0.814c0.527,0,0.838-0.331,0.838-0.747c0-0.42-0.223-0.69-0.84-0.69h-0.813V32.142z'/%3e%3c/g%3e%3c/svg%3e`,
  _ = `` + new URL(`assets/mHntPfFv.svg`, import.meta.url).href,
  _ = `` + new URL(`assets/DfnAe-hE.png`, import.meta.url).href,
  _ = `BvATwcUCrt0-`,
  _ = (0, _.createContext)({}),
  _ = (0, _.createContext)(() => {});
function _(_) {
  let [_, _] = (0, _.useState)({});
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
var _ = _.memo(function (_) {
  let {
      defaultTextSize: _,
      accentColor: _ = `blue`,
      dullColor: _ = `greyneutral`,
      successColor: _ = `green`,
      warningColor: _ = `yellow`,
      errorColor: _ = `red`,
      bodyTextColor: _ = `text-light`,
      successTextColor: _ = `text-green`,
      warningTextColor: _ = `text-red`,
      errorTextColor: _ = `text-red`,
      breakpoints: _,
      variants: _,
      children: _,
      zoo: _,
    } = _,
    _;
  return (
    _ &&
      (_ = {
        "--default-font-size": `var(--text-size-${_})`,
        "--default-line-height": `var(--line-height-${_})`,
        "--default-letter-spacing": `var(--letter-spacing-${_})`,
      }),
    (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        breakpoints: _,
        children: (0, _.jsx)(_, {
          children: (0, _.jsx)(`div`, {
            className: (0, _.default)(_, `noOpinionatedGlobalStyles`),
            style: _,
            children: (0, _.jsxs)(_, {
              accentColor: _,
              dullColor: _,
              successColor: _,
              warningColor: _,
              errorColor: _,
              bodyTextColor: _,
              successTextColor: _,
              warningTextColor: _,
              errorTextColor: _,
              variants: _,
              children: [_, !1],
            }),
          }),
        }),
      }),
    })
  );
});
function _(_) {
  let { children: _ } = _,
    { formFactorOverride: _ } = _();
  return (0, _.jsx)(_, {
    formFactor: _,
    children: _,
  });
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 12 12`,
    fill: `none`,
    role: `presentation`,
    className: _.className,
    children: (0, _.jsx)(`path`, {
      fill: `currentColor`,
      fillRule: `evenodd`,
      clipRule: `evenodd`,
      _: `M5.81026 6.36084L8.50899 3.66211L9.6875 4.84062L5.81026 8.71786L1.93302 4.84062L3.11153 3.66211L5.81026 6.36084Z`,
    }),
  });
}
_.createContext({
  nBackdropHeight: void 0,
  bBackdropActive: !1,
}),
  _.createContext(void 0);
var _ = `h3IhvvKqNWg-`,
  _ = `SteamBeta_VOnly_`,
  _ = {
    name: _,
    options: {
      path: `/`,
      secure: !0,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _(_, _) {
  let _ = {
    ..._,
    name: _(_),
  };
  _.default === _ ? _(_) : _(_, _ ? `1` : `0`);
}
function _(_) {
  return `${_}${_.shortName}`;
}
function _(_) {
  let { rgBetas: _, buttonClassName: _ } = _,
    [_, _] = _.useState(!1),
    [_, _] = _.useState(null),
    _ = _({
      open: _,
      onOpenChange: (_) => _(_),
      width: `dropdown`,
      placement: `bottom`,
      activeIndex: _,
      setActiveIndex: (_) => _(_),
      setSelectedIndex: () => _(!1),
      interactions: {
        click: !0,
      },
      role: `select`,
    });
  return (0, _.jsxs)(_.Root, {
    state: _,
    children: [
      (0, _.jsx)(_.Anchor, {
        children: (0, _.jsxs)(`button`, {
          className: (0, _.default)(_, _),
          children: [
            (0, _.jsx)(`span`, {
              children: `admin`,
            }),
            (0, _.jsx)(_, {}),
          ],
        }),
      }),
      (0, _.jsx)(_.Positioner, {
        children: _.map((_) =>
          (0, _.jsx)(
            _,
            {
              beta: _,
            },
            _.shortName,
          ),
        ),
      }),
    ],
  });
}
function _(_) {
  let { beta: _ } = _;
  return (0, _.jsx)(_.Item, {
    onSelect: () => {
      _(_, !(_.enabled ?? _.default)), window.location.reload();
    },
    children: (0, _.jsxs)(`div`, {
      children: [
        (_.enabled ?? _.default) ? `Exit ` : `Enter `,
        ` `,
        _.descriptiveName,
      ],
    }),
  });
}
function _(_) {
  let { rgBetas: _, buttonClassName: _ } = _;
  return _.length === 0
    ? null
    : (0, _.jsx)(_, {
        rgBetas: _,
        buttonClassName: _,
      });
}
var _ = `sBhqQUbkJpI-`,
  _ = `mkVCTsyaxnE-`,
  _ = `Zmd4yCX8src-`,
  _ = () => {
    _(_), window.location.reload();
  };
function _(_) {
  return (0, _.jsxs)(`span`, {
    className: _,
    children: [
      (0, _.jsx)(`span`, {
        className: _,
        children: `You are spoofing another user!`,
      }),
      ` `,
      (0, _.jsx)(`span`, {
        className: _,
        onClick: _,
        children: `end spoofing`,
      }),
    ],
  });
}
function _(_) {
  let { containerClassname: _, buttonClassName: _, rgBetas: _ } = _,
    _ = _().metrics;
  return !_.spoofing && !_
    ? null
    : (0, _.jsxs)(`div`, {
        className: _,
        children: [
          _.spoofing && (0, _.jsx)(_, {}),
          _ &&
            (0, _.jsx)(_, {
              buttonClassName: _.buttonClassName,
            }),
          !!_ &&
            (0, _.jsx)(_, {
              rgBetas: _,
              buttonClassName: _,
            }),
        ],
      });
}
var _ = `_1hK5Pa2qbxc-`,
  _ = `Ufm0QNEexSk-`,
  _ = `t4O8ORpLDqs-`,
  _ = `sm4uEZwjNDE-`,
  _ = `_-02zffUT45Q-`,
  _ = `Pd4GU3H2CTk-`,
  _ = `xAIxVukOqMA-`,
  _ = `a-hmE9BfPIg-`,
  _ = `r0AmiKA39mc-`,
  _ = `VqZq0261-H0-`,
  _ = `rvKsosHxgAE-`,
  _ = `dF3Ge-BMhAM-`,
  _ = `blfsYIXtMMw-`,
  _ = `Fz0HDxt3lDI-`,
  _ = `azd-LnhAMYQ-`,
  _ = `DtHPAA5V4D0-`,
  _ = `h7gD6XW38FA-`,
  _ = `UvgvOr-m4ME-`,
  _ = `s4-cvghgJD8-`,
  _ = `A8krqU5RJ-0-`,
  _ = `T17Yo1S1os8-`,
  _ = `_9ZrfpmnOL3A-`,
  _ = `x6Nn1-lbN9s-`,
  _ = `JMd0Tzl8xas-`;
function _(_) {
  return _.private_data?.persona_state === 0
    ? _
    : _.private_data?.game_id === void 0
      ? _
      : _;
}
function _() {
  let { data: _ } = _();
  return _
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          snr: !0,
          external: !0,
          _: _.STORE_BASE_URL + `cart`,
          className: _,
          children: _.LocalizeReact(
            `#Cart_CountWidget`,
            (0, _.jsx)(`b`, {
              children: _(_),
            }),
          ),
        }),
      })
    : null;
}
function _() {
  let { data: _ } = _();
  return _?.formatted_balance
    ? (0, _.jsx)(`div`, {
        className: _,
        children: (0, _.jsx)(_, {
          snr: !0,
          external: !0,
          _: _.STORE_BASE_URL + `account`,
          className: _,
          children: _.LocalizeReact(
            `#responsive_menu_wallet_balance`,
            (0, _.jsx)(`b`, {
              children: _.formatted_balance,
            }),
          ),
        }),
      })
    : null;
}
function _(_) {
  let { navContent: _, children: _, labelAddition: _ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  if (!_ && (!_.children || _.children.length === 0))
    return (0, _.jsx)(_, {
      item: _,
      className: _,
      responsive: !0,
    });
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight}px`,
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: `forwards`,
        },
      )));
  }
  function _() {
    _.current &&
      (_.current && _.current.cancel(),
      (_.current = _.current.animate(
        {
          height: [
            `${_.current.offsetHeight + _.current.offsetHeight}px`,
            `${_.current.offsetHeight}px`,
          ],
        },
        {
          duration: 250,
          fill: `forwards`,
        },
      )),
      _.current.addEventListener(`finish`, () => {
        _.current && (_.current.open = !1);
      }));
  }
  function _() {
    _.current?.open ? _() : _.current && _();
  }
  return (0, _.jsxs)(`details`, {
    name: `responsive-menu`,
    className: _,
    ref: _,
    onToggle: _,
    children: [
      (0, _.jsxs)(`summary`, {
        className: _,
        ref: _,
        children: [
          _.label_responsive ?? _.label,
          ` `,
          _,
          ` `,
          (0, _.jsx)(`div`, {
            className: _,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        ref: _,
        children: [
          _.children?.map((_, _) =>
            (0, _.jsx)(
              _,
              {
                item: _,
                className: _,
                responsive: !0,
              },
              _,
            ),
          ),
          _,
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `about`,
            children: `关于蒸汽平台`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `steam_refunds`,
            children: `退款政策`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `subscriber_agreement`,
            children: `软件许可服务协议`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `privacy_agreement`,
            children: `个人信息保护政策`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            snr: !0,
            external: !0,
            _: _.STORE_BASE_URL + `data_outbound`,
            children: `个人信息出境告知书`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(`br`, {}),
          (0, _.jsx)(_, {
            _: `https://about.steamchina.com/content_report.html`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `不良内容举报投诉`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            _: `https://about.steamchina.com/infringement_report.html`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `侵权投诉`,
          }),
          `\xA0 | \xA0`,
          (0, _.jsx)(_, {
            _: `https://about.steamchina.com/parentguardianship_agreement.html`,
            target: `_blank`,
            rel: `noreferrer`,
            children: `家长监护`,
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(_, {
            external: !0,
            className: _,
            _: `http://qr.weibo.cn/g/7kla92`,
            target: `_blank`,
            rel: `noreferrer`,
            children: [
              (0, _.jsx)(`img`, {
                alt: `微博`,
                className: _,
                src: `${_.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, _.jsx)(`div`, {
                children: `微博`,
              }),
            ],
          }),
          (0, _.jsxs)(_, {
            external: !0,
            className: _,
            _: `http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_`,
            target: `_blank`,
            rel: `noreferrer`,
            children: [
              (0, _.jsx)(`img`, {
                alt: `微信`,
                className: _,
                src: `${_.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, _.jsx)(`div`, {
                children: `微信`,
              }),
            ],
          }),
        ],
      }),
      (0, _.jsx)(`hr`, {
        className: _,
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsx)(_, {
            external: !0,
            _: `https://www.wanmei.com/`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, _.jsx)(`img`, {
              className: _,
              src: `${_.STORE_CDN_URL}/public/shared/images/footer/pw_logo.svg?v=1`,
              alt: ``,
            }),
          }),
          (0, _.jsx)(_, {
            external: !0,
            _: `https://www.valvesoftware.com`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, _.jsx)(`img`, {
              className: _,
              src: `${_.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: ``,
            }),
          }),
        ],
      }),
      (0, _.jsxs)(`div`, {
        className: _,
        children: [
          (0, _.jsxs)(`div`, {
            children: [
              `© `,
              new Date().getFullYear(),
              ` Valve Corporation 版权所有，完美世界已获授权。`,
              (0, _.jsx)(`br`, {}),
              `所有商标均属于其在美国或其他国家的拥有者。`,
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              `© 完美世界征奇(上海)多媒体科技有限公司 版权所有。`,
              (0, _.jsx)(`br`, {}),
              `增值电信业务经营许可证沪B2-20180406`,
            ],
          }),
        ],
      }),
    ],
  });
}
function _() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(`div`, {
        children: (0, _.jsx)(`img`, {
          src: `${_.STORE_CDN_URL}/public/shared/images/responsive/logo_valve_footer.png`,
          alt: ``,
        }),
      }),
      _.Localize(`#responsive_footer_copyright`),
      ` \xA0`,
      (0, _.jsxs)(`span`, {
        children: [
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + `privacy_agreement/`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_PrivacyPolicy`),
          }),
          `\xA0| \xA0`,
          (0, _.jsx)(_, {
            _: `http://www.valvesoftware.com/legal.htm`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_Legal`),
          }),
          `\xA0| \xA0`,
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + `subscriber_agreement/`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_SSA`),
          }),
          `\xA0| \xA0`,
          (0, _.jsx)(_, {
            _: _.STORE_BASE_URL + `steam_refunds/`,
            target: `_blank`,
            children: _.Localize(`#Common_Footer_Refunds`),
          }),
        ],
      }),
    ],
  });
}
function _(_) {
  let {
      userDetails: _,
      navContent: _,
      globalActions: _,
      changeLanguagePath: _,
      open: _,
      onDismiss: _,
      cartInResponsiveMenu: _,
    } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useRef)(null),
    _ = (0, _.useRef)(void 0);
  (0, _.useEffect)(() => {
    _.current &&
      (_
        ? (_.current?.showModal(),
          _.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: [`translateX(var(--closedX))`, `translateX(0)`],
            },
            {
              duration: 250,
              fill: `forwards`,
              easing: `ease-in-out`,
            },
          )))
        : _.current &&
          (_.current?.cancel(),
          (_.current = _.current.animate(
            {
              transform: [`translateX(0)`, `translateX(var(--closedX))`],
            },
            {
              duration: 250,
              fill: `forwards`,
              easing: `ease-in-out`,
            },
          )),
          _.current.addEventListener(`finish`, () => _.current?.close())));
  }, [_]);
  let _ =
    _.find((_) => _._ === `language`) ??
    _[0]?.children?.find((_) => _._ === `language`);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`dialog`, {
        className: (0, _.default)(_, _(_.EREALM) && `kIikLkWFJTg-`),
        ref: _,
        onMouseDown: (_) => _.target === _.current && _(),
        onKeyDown: (_) => _.key === `Escape` && _(),
        inert: !_,
        children: [
          (0, _.jsxs)(`div`, {
            className: _,
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  className: (0, _.default)(`VqZq0261-H0-`),
                  item: {
                    href: `/login/`,
                    label: _.Localize(`#global_menu_login_caps`),
                  },
                }),
              _ &&
                (0, _.jsxs)(`div`, {
                  className: (0, _.default)(`NB0Mn5wh2Yo-`, _(_)),
                  children: [
                    (0, _.jsxs)(`div`, {
                      className: `dogwewx8C8M-`,
                      children: [
                        (0, _.jsx)(`a`, {
                          className: `Iu4lgIr2a7s-`,
                          href: _(_),
                          children: (0, _.jsx)(_, {
                            playerLinkDetails: _,
                            statusPosition: `border`,
                            alt: ``,
                            role: `presentation`,
                            size: `Small`,
                            className: `WGjJBhzsjsk-`,
                          }),
                        }),
                        `\xA0`,
                        (0, _.jsx)(`a`, {
                          className: `S6zOvIteLXo-`,
                          href: _(_),
                          children: _.public_data?.persona_name,
                        }),
                      ],
                    }),
                    _ && (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              _.notifications &&
                (0, _.jsx)(_, {
                  navContent: {
                    label: `Notifications`,
                    href: ``,
                  },
                  labelAddition: (0, _.jsxs)(`div`, {
                    className: (0, _.default)(
                      `ukx8XIbMbTo-`,
                      _.notifications?.unread_count && `YIoGgjCNvis-`,
                    ),
                    children: [
                      _.notifications.unread_count > 0 &&
                        (0, _.jsx)(`span`, {
                          className: `O4xN7EkLl8M-`,
                        }),
                      (0, _.jsx)(`span`, {
                        className: `kLME5emTJD4-`,
                        children: _(_.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, _.jsx)(_, {
                    dynamicImport: async () =>
                      (
                        await _(
                          async () => {
                            let { GreenEnvelope: _ } = await import(
                              `./BDIj9ac9.js`
                            );
                            return {
                              GreenEnvelope: _,
                            };
                          },
                          __vite__mapDeps([1, 2, 3, 4]),
                          import.meta.url,
                        )
                      ).GreenEnvelope,
                    fallback: (0, _.jsx)(`div`, {}),
                    bResponsiveHeader: !0,
                    notifications: _.notifications,
                  }),
                }),
              _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    navContent: _,
                  },
                  _,
                ),
              ),
              (0, _.jsxs)(`div`, {
                className: `minor_menu_items`,
                children: [
                  _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          className: (0, _.default)(
                            `VqZq0261-H0-`,
                            `bcVkB8xUKZk-`,
                          ),
                          item: {
                            href: _.STORE_BASE_URL + `account`,
                            label: _.Localize(`#global_menu_account_details`),
                          },
                        }),
                        (0, _.jsx)(_, {
                          className: (0, _.default)(
                            `VqZq0261-H0-`,
                            `bcVkB8xUKZk-`,
                          ),
                          item: {
                            href: _.STORE_BASE_URL + `account/preferences`,
                            label: _.Localize(
                              `#global_menu_account_preferences`,
                            ),
                          },
                        }),
                      ],
                    }),
                  !_(_.EREALM) &&
                    (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)(`button`, {
                        className: (0, _.default)(
                          `VqZq0261-H0-`,
                          `bcVkB8xUKZk-`,
                        ),
                        onClick: () => _(!0),
                        children: _.Localize(`#global_menu_change_language`),
                      }),
                    }),
                  _ &&
                    (0, _.jsx)(`button`, {
                      className: (0, _.default)(`VqZq0261-H0-`, `bcVkB8xUKZk-`),
                      onClick: () => _(_.logoutPath),
                      children: _.Localize(`#global_menu_change_user`),
                    }),
                  !_(_.EREALM) &&
                    (0, _.jsx)(_, {
                      className: (0, _.default)(`VqZq0261-H0-`, `bcVkB8xUKZk-`),
                      item: {
                        href: _.STORE_BASE_URL + `mobile`,
                        label: _.Localize(`#global_menu_getmobileapp`),
                      },
                    }),
                  !_() &&
                    (0, _.jsx)(`button`, {
                      className: (0, _.default)(`VqZq0261-H0-`, `bcVkB8xUKZk-`),
                      onClick: _,
                      children: _.Localize(`#global_menu_view_desktop_website`),
                    }),
                ],
              }),
            ],
          }),
          (0, _.jsx)(`footer`, {
            className: _,
            children: _(_.EREALM) ? (0, _.jsx)(_, {}) : (0, _.jsx)(_, {}),
          }),
        ],
      }),
      _ &&
        (0, _.jsx)(_, {
          open: _,
          onDismiss: () => _(!1),
          menuAction: _,
          changeLanguagePath: _,
          bLoggedIn: _ != null,
        }),
    ],
  });
}
function _(_) {
  let { fnRenderCustomHeader: _ = (_) => _ } = _,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsxs)(`header`, {
        className: (0, _.default)(_, _.className),
        children: [
          (0, _.jsxs)(`div`, {
            className: (0, _.default)(_, _.bWiderHeader && `C50-GV7vFck-`),
            children: [
              (0, _.jsx)(`a`, {
                href: _.STORE_BASE_URL,
                "aria-label": _.Localize(`#Aria_Steam_Home_Link`),
                className: _,
                children: (0, _.jsx)(`img`, {
                  src: _(_(_.EREALM) ? _ : _),
                  alt: _.Localize(`#Aria_Steam_Home_Link`),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, _.jsx)(_, {
                navContent: _.navContent,
              }),
              (0, _.jsx)(_, {
                globalActions: _.globalActions,
                userDetails: _.userDetails,
                notifications: _.notifications,
                changeLanguagePath: _.changeLanguagePath,
                logoutPath: _.logoutPath,
              }),
              (0, _.jsx)(_, {
                spoofing: _.spoofing,
                containerClassname: _.internalOptionsClassname,
                buttonClassName: _.internalOptionsButtonClassname,
                rgBetas: _.rgBetas,
              }),
              _.children,
            ],
          }),
          (0, _.jsx)(`div`, {
            className: _,
            children: (0, _.jsxs)(`nav`, {
              children: [
                (0, _.jsxs)(`button`, {
                  className: _,
                  onClick: () => _(!0),
                  "aria-expanded": _,
                  "aria-label": _.Localize(`#Aria_Navigation`),
                  children: [
                    (0, _.jsx)(`img`, {
                      src: _(_),
                      alt: ``,
                      className: _,
                    }),
                    _.notifications?.unread_count !== 0 &&
                      (0, _.jsx)(`div`, {
                        className: `Zw6-HSkC3eM-`,
                        children: (0, _.jsx)(`div`, {
                          className: (0, _.default)(`Pp8YuIWJVEI-`),
                          children: (0, _.jsx)(`span`, {
                            className: `wrP3tE9OJHE-`,
                            children: _(_.notifications?.unread_count ?? 0),
                          }),
                        }),
                      }),
                  ],
                }),
                _(
                  (0, _.jsx)(`a`, {
                    href: _.STORE_BASE_URL,
                    "aria-label": _.Localize(`#Aria_Steam_Home_Link`),
                    className: _,
                    children: (0, _.jsx)(`img`, {
                      src: _(_(_.EREALM) ? _ : _),
                      alt: _.Localize(`#Aria_Steam_Home_Link`),
                      height: 36,
                    }),
                  }),
                ),
              ],
            }),
          }),
        ],
      }),
      (0, _.jsx)(_, {
        ..._,
        open: _,
        onDismiss: () => _(!1),
      }),
    ],
  });
}
var _ = `nlTg10o51PM-`,
  _ = `endSACxU25k-`,
  _ = `Z0Fc4o3bNoI-`,
  _ = `MhT6639uYT0-`,
  _ = `p7dHTFbUaGA-`,
  _ = `PjCIRmdNpcU-`,
  _ = {};
(_.arabic = () => _(() => import(`./LUwHt1iu2.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./B1S9bwXv2.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./DhGH1ox-2.js`), [], import.meta.url)),
  (_.czech = () => _(() => import(`./DXLvWsQk.js`), [], import.meta.url)),
  (_.danish = () => _(() => import(`./Cjb9n6dN.js`), [], import.meta.url)),
  (_.dutch = () => _(() => import(`./DLIzxHOT.js`), [], import.meta.url)),
  (_.english = () => _(() => import(`./DScfh8Vv.js`), [], import.meta.url)),
  (_.finnish = () => _(() => import(`./7Fplu1aK.js`), [], import.meta.url)),
  (_.french = () => _(() => import(`./CU0aB5uw.js`), [], import.meta.url)),
  (_.german = () => _(() => import(`./CQ9GHMwO.js`), [], import.meta.url)),
  (_.greek = () => _(() => import(`./Bu6Sq0Iw.js`), [], import.meta.url)),
  (_.hungarian = () => _(() => import(`./DCh9iehj.js`), [], import.meta.url)),
  (_.indonesian = () => _(() => import(`./DdGnLc1b.js`), [], import.meta.url)),
  (_.italian = () => _(() => import(`./Cp5Z670X.js`), [], import.meta.url)),
  (_.japanese = () => _(() => import(`./BsYQqo12.js`), [], import.meta.url)),
  (_.koreana = () => _(() => import(`./6ReR-yhY.js`), [], import.meta.url)),
  (_.latam = () => _(() => import(`./naFouzaI.js`), [], import.meta.url)),
  (_.malay = () => _(() => import(`./GLVAKsG8.js`), [], import.meta.url)),
  (_.norwegian = () => _(() => import(`./CmTUWuV9.js`), [], import.meta.url)),
  (_.polish = () => _(() => import(`./0poaULCJ.js`), [], import.meta.url)),
  (_.portuguese = () => _(() => import(`./BEOXCx76.js`), [], import.meta.url)),
  (_.romanian = () => _(() => import(`./D1NqqEZ3.js`), [], import.meta.url)),
  (_.russian = () => _(() => import(`./aOGCdsON.js`), [], import.meta.url)),
  (_.sc_schinese = () => _(() => import(`./HcBFaMdc.js`), [], import.meta.url)),
  (_.schinese = () => _(() => import(`./DyyQ740z.js`), [], import.meta.url)),
  (_.spanish = () => _(() => import(`./C2NSXUoB.js`), [], import.meta.url)),
  (_.swedish = () => _(() => import(`./Ui8l-944.js`), [], import.meta.url)),
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
  _ = `hQKLMdLvxDY-`,
  _ = `Z3KlM4Otpc8-`,
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
(_.arabic = () => _(() => import(`./TrJW4YjE2.js`), [], import.meta.url)),
  (_.brazilian = () => _(() => import(`./CmSCuj9F2.js`), [], import.meta.url)),
  (_.bulgarian = () => _(() => import(`./Bcqj-yX92.js`), [], import.meta.url)),
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
  (_.malay = () => _(() => import(`./CCPjqcEe.js`), [], import.meta.url)),
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
var _ = class {
    async GetObject(_) {
      try {
        let _ = await this.GetString(_);
        return _ ? JSON.parse(_) : null;
      } catch {
        return null;
      }
    }
    async StoreObject(_, _) {
      return this.StoreString(_, JSON.stringify(_));
    }
  },
  _ = class extends _ {
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
var _ = _({
    Arrow: () => _,
    BackgroundAnimation: () => _,
    BasicContextMenuContainer: () => _,
    BasicContextMenuHeader: () => _,
    BasicContextMenuHeaderShrinkableSpacing: () => _,
    BasicContextMenuModal: () => _,
    Capitalized: () => _,
    ContextMenuSeparator: () => _,
    Destructive: () => _,
    Emphasis: () => _,
    Focused: () => _,
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
    Positive: () => _,
    Selected: () => _,
    SubMenu: () => _,
    UpperCase: () => _,
    active: () => _,
    contextMenu: () => _,
    contextMenuContents: () => _,
    contextMenuFade: () => _,
    contextMenuItem: () => _,
    default: () => _,
    "duration-app-launch": () => _,
    focusAnimation: () => _,
    hasSubMenu: () => _,
    hoverAnimation: () => _,
    slideInAnimation: () => _,
  }),
  _ = `800ms`,
  _ = `zIqKYLyjLDE-`,
  _ = `QEqisB3QH6Y-`,
  _ = `_10VZDl1S08Y-`,
  _ = `l55Qe9TRfWE-`,
  _ = `P4ZPME0FQ0Q-`,
  _ = `J49QvnbmR4o-`,
  _ = `UsMszraE8Ts-`,
  _ = `_4opXG7WIDiM-`,
  _ = `SY8HeIZAWTY-`,
  _ = `ifEDAYoKQZA-`,
  _ = `c9cBCqvRKIo-`,
  _ = `N94BC56I6uk-`,
  _ = `_4-FaJ3cVKd8-`,
  _ = `_4Z62LmEDnlc-`,
  _ = `Ot2l8QCFbYw-`,
  _ = `O10dnuCtwuk-`,
  _ = `_9kFtKJpEINs-`,
  _ = `Ajs9PcIe9Ak-`,
  _ = `fj-p9B7Ar2Q-`,
  _ = `mZXAxtt8FmM-`,
  _ = `cPv4Xc7IDnQ-`,
  _ = `InE8BB-Fxp8-`,
  _ = `xJCVpcgk4LA-`,
  _ = `m93aoWJlOCE-`,
  _ = `YvNC8luwtfc-`,
  _ = `_5A0hah79ug8-`,
  _ = `Mal6k7DjPUQ-`,
  _ = `CT39We8M7uI-`,
  _ = `bESapfyiJAQ-`,
  _ = `YeVMYyR0HhM-`,
  _ = `_3h1WS4g7IRM-`,
  _ = `UDD33NXGwZo-`,
  _ = `mMTi3RvNMbc-`,
  _ = `HPrMq1RsxVs-`,
  _ = `D0Bepl124b8-`,
  _ = {
    "duration-app-launch": `800ms`,
    BasicContextMenuModal: _,
    BasicContextMenuHeader: _,
    BasicContextMenuHeaderShrinkableSpacing: _,
    BasicContextMenuContainer: _,
    slideInAnimation: _,
    contextMenu: _,
    contextMenuContents: _,
    hasSubMenu: _,
    contextMenuFade: _,
    contextMenuItem: _,
    Destructive: _,
    Positive: _,
    Emphasis: _,
    active: _,
    Selected: _,
    Focused: _,
    Capitalized: _,
    MenuSectionHeader: _,
    UpperCase: _,
    SubMenu: _,
    ContextMenuSeparator: _,
    Label: _,
    Arrow: _,
    BackgroundAnimation: _,
    "ItemFocusAnim-darkerGrey-nocolor": `YvNC8luwtfc-`,
    "ItemFocusAnim-darkerGrey": `_5A0hah79ug8-`,
    "ItemFocusAnim-darkGreySettings": `Mal6k7DjPUQ-`,
    "ItemFocusAnim-darkGrey": `CT39We8M7uI-`,
    "ItemFocusAnim-grey": `bESapfyiJAQ-`,
    "ItemFocusAnim-translucent-white-10": `YeVMYyR0HhM-`,
    "ItemFocusAnim-translucent-white-20": `_3h1WS4g7IRM-`,
    "ItemFocusAnimBorder-darkGrey": `UDD33NXGwZo-`,
    "ItemFocusAnim-green": `mMTi3RvNMbc-`,
    focusAnimation: _,
    hoverAnimation: _,
  };
function _(_) {
  let { managerOverride: _ } = _,
    _ = _(),
    _ = _ ?? _,
    _ = _();
  return (
    _(_.OnMenusChanged, _),
    (0, _.jsx)(_, {
      active: !!_.ActiveMenu,
      children: (0, _.jsx)(_, {
        ActiveMenu: _.ActiveMenu,
      }),
    })
  );
}
function _(_) {
  let { ActiveMenu: _ } = _,
    _ = _.useCallback(() => {
      _?.OnCancel();
    }, [_]);
  _.useEffect(() => () => _?.Hide(), [_]);
  let _ = [],
    _ = null;
  _(() => {
    for (let _ = _; _ && _.visible; _ = _.submenu)
      _.push(
        (0, _.jsx)(
          _,
          {
            instance: _,
          },
          _.key,
        ),
      ),
        (_ = _.label);
  });
  let _ = _.useCallback(
    (_) => {
      _.currentTarget == _.target && _();
    },
    [_],
  );
  return (0, _.jsx)(_, {
    padding: `none`,
    children: (0, _.jsxs)(`div`, {
      onClick: _,
      className: _(`BasicUIContextMenu`, _),
      children: [
        _ &&
          (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)(`div`, {
              className: `QEqisB3QH6Y-`,
              children: _,
            }),
          }),
        (0, _.jsx)(_, {
          className: _,
          onCancelButton: _,
          onClick: _,
          children: _,
        }),
      ],
    }),
  });
}
function _(_) {
  let { instance: _ } = _,
    _ = _(),
    _ = _.useCallback(() => {
      _ && _.PlayNavSound(_.FailedNav);
    }, [_]),
    _ = _.useMemo(
      () => ({
        instance: _,
        styles: _,
        presentation: 1,
        callbacks: {
          onDisabledItemSelected: _,
        },
      }),
      [_, _],
    );
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.ReactElement,
    }),
  });
}
function _() {
  return _.useMemo(() => _(), []);
}
function _() {
  return function (_) {
    let {
        refNavTree: _,
        className: _,
        active: _,
        children: _,
        modalKey: _,
      } = _,
      _ = _.useRef(void 0);
    return (
      _(_, _, !0),
      (0, _.jsx)(_, {
        className: _,
        navTreeRef: _(_, _),
        modal: !0,
        enabled: _,
        navID: `ModalDialogOverlay_${_}`,
        children: _,
      })
    );
  };
}
function _(_) {
  let {
    className: _,
    onEscKeypress: _,
    padding: _ = `standard`,
    bGamepadUIScrollWithin: _,
    children: _,
  } = _;
  return (0, _.jsx)(_, {
    className: _(_, _ == `standard` && `OaiXfc-WlaQ-`, _ && `dz-Wyy2Ybkc-`, _),
    onCancelButton: _,
    focusableIfEmpty: !0,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let _ = _.useMemo(
    () => ({
      ModalPosition: _,
    }),
    [],
  );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.children,
  });
}
function _(_) {
  let _ = _(),
    _ = _.useMemo(
      () => ({
        DropDownMenu: _,
        Content: _,
      }),
      [],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        ..._,
        bUseDialogElement: !1,
        DialogWrapper: _,
        ContextMenuComponent: _,
      }),
    }),
  });
}
function _(_) {
  let _ = _(),
    _ = {
      bRenderOverlayAtRoot: !0,
      bUsePopups: !1,
      ..._,
    };
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
var _ = `t-LlQicBZjE-`,
  _ = `Mp6FkxWGdWs-`,
  _ = `bMvLQ9GXq-E-`,
  _ = `YhgFcZPycbw-`,
  _ = _({
    Component: _,
  });
function _({ children: _ }) {
  let {
      strWebAPIToken: _,
      steamid: _,
      header: _,
      currentUserLinkDetails: _,
      bShowGlobalHeader: _,
      bShowGlobalFooter: _,
      bInsideModal: _,
      strHtmlClass: _,
      cssVars: _,
      spoofing: _,
    } = _.useLoaderData(),
    _ = _();
  return (0, _.jsx)(_, {
    strWebAPIToken: _,
    steamid: _,
    children: (0, _.jsxs)(`html`, {
      lang: _().strISOCode,
      className: _,
      style: _,
      children: [
        (0, _.jsxs)(`head`, {
          children: [
            _ &&
              (0, _.jsx)(`base`, {
                target: `_top`,
              }),
            (0, _.jsx)(_, {}),
          ],
        }),
        (0, _.jsx)(`body`, {
          className: _,
          children: (0, _.jsx)(_, {
            navID: `CommunityTemplate`,
            disabledRoot: !_,
            historyMode: `navigationapi`,
            children: (0, _.jsx)(`div`, {
              className: _,
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
                            cartInResponsiveMenu: !1,
                            changeLanguagePath: `/actions/SetLanguage/`,
                            logoutPath: `/login/logout/`,
                            internalOptionsClassname: `t5vw-35f5J8-`,
                            internalOptionsButtonClassname: `gmfn-yFroqw-`,
                            spoofing: _,
                          }),
                        }),
                      (0, _.jsxs)(`div`, {
                        className: _,
                        children: [
                          (0, _.jsx)(`div`, {
                            className: _,
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
  });
}
function _(_) {
  let { strWebAPIToken: _, steamid: _, children: _ } = _,
    { storeBrowseContext: _ } = _.useLoaderData();
  return (0, _.jsx)(_, {
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        strWebAPIToken: _,
        steamid: _,
        children: (0, _.jsx)(_, {
          context: _,
          msDelayBatch: 250,
          children: _,
        }),
      }),
    }),
  });
}
export { _ as route };

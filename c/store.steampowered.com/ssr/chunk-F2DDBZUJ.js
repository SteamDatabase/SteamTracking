import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = class {
  SyncStore(_) {
    return this.Subscribe(_).Unsubscribe;
  }
  GetValue() {
    return this.Value;
  }
};
_([_], _.prototype, "SyncStore", 1), _([_], _.prototype, "GetValue", 1);
var _ = class extends _ {},
  _ = class extends _ {
    m_callbacks;
    m_currentValue;
    m_fnEquals;
    constructor(_, _) {
      super(),
        (this.m_callbacks = new _()),
        (this.m_currentValue = _),
        (this.m_fnEquals = _);
    }
    Set(_) {
      if (this.m_fnEquals) {
        if (this.m_fnEquals(this.m_currentValue, _)) return !1;
      } else if (this.m_currentValue === _) return !1;
      return (this.m_currentValue = _), this.m_callbacks.Dispatch(_), !0;
    }
    get Value() {
      return this.m_currentValue;
    }
    Subscribe(_) {
      return {
        Unsubscribe: this.m_callbacks.Register(_).Unregister,
      };
    }
    get SubscriberCount() {
      return this.m_callbacks.CountRegistered();
    }
  };
function _(_, _) {
  return new _(_, _);
}
var _ = class extends _ {
  m_fnMap;
  m_originalSubscribableValue;
  m_mappedSubscribableValue;
  m_bMappedValueStale = !1;
  constructor(_, _, _) {
    super(),
      (this.m_originalSubscribableValue = _),
      (this.m_mappedSubscribableValue = new _(_(_.Value), _)),
      (this.m_fnMap = _),
      this.m_originalSubscribableValue.Subscribe(() => {
        this.m_mappedSubscribableValue.SubscriberCount > 0
          ? this.UpdateMappedValue()
          : (this.m_bMappedValueStale = !0);
      });
  }
  get Value() {
    return (
      this.m_bMappedValueStale && this.UpdateMappedValue(),
      this.m_mappedSubscribableValue.Value
    );
  }
  Subscribe(_) {
    return this.m_mappedSubscribableValue.Subscribe(_);
  }
  UpdateMappedValue() {
    this.m_mappedSubscribableValue.Set(
      this.m_fnMap(this.m_originalSubscribableValue.Value),
    ),
      (this.m_bMappedValueStale = !1);
  }
};
function _(_, _, _) {
  return new _(_, _, _);
}
var _ = class {
  m_schTimer;
  m_fnCallback;
  Schedule(_, _) {
    this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = _),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, _));
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    this.m_schTimer &&
      (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
  }
  ScheduledInternal() {
    this.m_schTimer = void 0;
    let _ = this.m_fnCallback;
    (this.m_fnCallback = void 0), _?.();
  }
};
_([_], _.prototype, "ScheduledInternal", 1);
var _ = class {
  m_vecCallbacks = [];
  Push(_) {
    this.m_vecCallbacks.push(_);
  }
  PushArrayRemove(_, _) {
    this.m_vecCallbacks.push(() => _(_, _));
  }
  Unregister() {
    for (let _ of this.m_vecCallbacks) _();
    this.m_vecCallbacks = [];
  }
  GetUnregisterFunc() {
    return this.Unregister;
  }
};
_([_], _.prototype, "Unregister", 1);
export { _, _, _, _ };

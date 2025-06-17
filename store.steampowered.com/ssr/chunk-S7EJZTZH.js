import { j as p, o as l, s as a } from "./chunk-A7IY3ZWU.js";
import { g as n } from "./chunk-V2BZN6OU.js";
var r = class {
  m_callbacks;
  m_currentValue;
  m_fnEquals;
  constructor(e, t) {
    (this.m_callbacks = new l()),
      (this.m_currentValue = e),
      (this.m_fnEquals = t);
  }
  Set(e) {
    if (this.m_fnEquals) {
      if (this.m_fnEquals(this.m_currentValue, e)) return;
    } else if (this.m_currentValue === e) return;
    (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
  }
  get Value() {
    return this.m_currentValue;
  }
  Subscribe(e) {
    return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
  }
  get SubscriberCount() {
    return this.m_callbacks.CountRegistered();
  }
};
function T(i, e) {
  return new r(i, e);
}
var c = class {
  m_fnMap;
  m_originalSubscribableValue;
  m_mappedSubscribableValue;
  m_bMappedValueStale = !1;
  constructor(e, t, s) {
    (this.m_originalSubscribableValue = e),
      (this.m_mappedSubscribableValue = new r(t(e.Value), s)),
      (this.m_fnMap = t),
      this.m_originalSubscribableValue.Subscribe(() => {
        this.m_mappedSubscribableValue.SubscriberCount > 0
          ? this.UpdateMappedValue()
          : (this.m_bMappedValueStale = !0);
      });
  }
  get Value() {
    return (
      this.m_bMappedValueStale && this.UpdateMappedValue(),
      this.m_mappedSubscribableValue?.Value
    );
  }
  Subscribe(e) {
    return this.m_mappedSubscribableValue.Subscribe(e);
  }
  UpdateMappedValue() {
    this.m_mappedSubscribableValue.Set(
      this.m_fnMap(this.m_originalSubscribableValue.Value),
    ),
      (this.m_bMappedValueStale = !1);
  }
};
function v(i, e, t) {
  return new c(i, e, t);
}
var u = class {
  m_schTimer;
  m_fnCallback;
  Schedule(e, t) {
    this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = t),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
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
    let e = this.m_fnCallback;
    (this.m_fnCallback = void 0), e?.();
  }
};
n([a], u.prototype, "ScheduledInternal", 1);
var d = class {
  m_rgListeners = [];
  AddEventListener(e, t, s) {
    e.addEventListener(t, s),
      this.m_rgListeners.push({ element: e, type: t, listener: s });
  }
  Unregister() {
    for (let e of this.m_rgListeners)
      e.element.removeEventListener(e.type, e.listener);
    this.m_rgListeners = [];
  }
};
var b = class {
  m_vecCallbacks = [];
  Push(e) {
    this.m_vecCallbacks.push(e);
  }
  PushArrayRemove(e, t) {
    this.m_vecCallbacks.push(() => p(e, t));
  }
  Unregister() {
    for (let e of this.m_vecCallbacks) e();
    this.m_vecCallbacks = [];
  }
  GetUnregisterFunc() {
    return this.Unregister;
  }
};
n([a], b.prototype, "Unregister", 1);
export { T as a, v as b, u as c, d, b as e };

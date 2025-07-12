import { j as c, o as n, s } from "./chunk-MUQLA4BT.js";
import { g as r } from "./chunk-QFZBH32V.js";
var a = class {
  m_callbacks;
  m_currentValue;
  m_fnEquals;
  constructor(e, t) {
    (this.m_callbacks = new n()),
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
function f(i, e) {
  return new a(i, e);
}
var b = class {
  m_fnMap;
  m_originalSubscribableValue;
  m_mappedSubscribableValue;
  m_bMappedValueStale = !1;
  constructor(e, t, p) {
    (this.m_originalSubscribableValue = e),
      (this.m_mappedSubscribableValue = new a(t(e.Value), p)),
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
function T(i, e, t) {
  return new b(i, e, t);
}
var l = class {
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
r([s], l.prototype, "ScheduledInternal", 1);
var u = class {
  m_vecCallbacks = [];
  Push(e) {
    this.m_vecCallbacks.push(e);
  }
  PushArrayRemove(e, t) {
    this.m_vecCallbacks.push(() => c(e, t));
  }
  Unregister() {
    for (let e of this.m_vecCallbacks) e();
    this.m_vecCallbacks = [];
  }
  GetUnregisterFunc() {
    return this.Unregister;
  }
};
r([s], u.prototype, "Unregister", 1);
export { f as a, T as b, l as c, u as d };

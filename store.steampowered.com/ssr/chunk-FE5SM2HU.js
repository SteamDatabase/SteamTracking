const CLSTAMP = 9493458;

import { i as o, m as u, q as r } from "./chunk-4QLSSORS.js";
import { e as a } from "./chunk-NFYHIITG.js";
var n = class {
  m_callbacks;
  m_currentValue;
  m_fnEquals;
  constructor(e, i) {
    (this.m_callbacks = new u()),
      (this.m_currentValue = e),
      (this.m_fnEquals = i);
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
};
function v(s, e) {
  return new n(s, e);
}
var c = class {
  m_fnMap;
  m_originalSubscribableValue;
  m_mappedSubscribableValue;
  m_mappedUnsubscribe;
  m_subscriptionRefCount = 0;
  constructor(e, i, t) {
    (this.m_originalSubscribableValue = e),
      (this.m_mappedSubscribableValue = new n(i(e.Value), t)),
      (this.m_fnMap = i);
  }
  get Value() {
    return this.m_mappedSubscribableValue?.Value;
  }
  Subscribe(e) {
    this.m_subscriptionRefCount++ === 0 &&
      (this.m_mappedUnsubscribe = this.m_originalSubscribableValue.Subscribe(
        (t) => this.m_mappedSubscribableValue.Set(this.m_fnMap(t)),
      ));
    let i = this.m_mappedSubscribableValue?.Subscribe(e);
    return {
      Unsubscribe: () => {
        i.Unsubscribe(),
          --this.m_subscriptionRefCount === 0 &&
            (this.m_mappedUnsubscribe?.Unsubscribe(),
            (this.m_mappedUnsubscribe = void 0));
      },
    };
  }
};
function S(s, e, i) {
  return new c(s, e, i);
}
var l = class {
  m_schTimer;
  m_fnCallback;
  Schedule(e, i) {
    this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = i),
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
a([r], l.prototype, "ScheduledInternal", 1);
var m = class {
  m_rgListeners = [];
  AddEventListener(e, i, t) {
    e.addEventListener(i, t),
      this.m_rgListeners.push({ element: e, type: i, listener: t });
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
  PushArrayRemove(e, i) {
    this.m_vecCallbacks.push(() => o(e, i));
  }
  Unregister() {
    for (let e of this.m_vecCallbacks) e();
    this.m_vecCallbacks = [];
  }
  GetUnregisterFunc() {
    return this.Unregister;
  }
};
a([r], b.prototype, "Unregister", 1);
export { v as a, S as b, l as c, m as d, b as e };

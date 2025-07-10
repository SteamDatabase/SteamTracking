import {
  a as M,
  b as ae,
  d as rt,
  f as at,
  g as st,
  i as Y,
  k as Q,
  l as be,
  p as ge,
  r as ut,
  w as dt,
  x as pt,
} from "./chunk-B5VZPSA7.js";
import { a as gn } from "./chunk-QMXISNT3.js";
import { a as se, b as lt, c as ve, d as ct } from "./chunk-5ZTPS7CO.js";
import { h as D, k as G, o as f, s as R } from "./chunk-I2IQXERY.js";
import { e as re, p as E } from "./chunk-W7XNMZDG.js";
import { a as W } from "./chunk-KETQW37N.js";
import { e as y, g as I } from "./chunk-22ZGTD3T.js";
var Ke = class {
  m_ActiveInputId;
  m_ActiveInputTimeout;
  m_config;
  constructor(e) {
    this.m_config = e;
  }
  Reset() {
    (this.m_ActiveInputId = void 0),
      this.m_ActiveInputTimeout != null &&
        (clearInterval(this.m_ActiveInputTimeout),
        (this.m_ActiveInputTimeout = void 0));
  }
  HandleInputButtonDown(e, t) {
    if (this.m_ActiveInputId !== e && t != null) {
      this.Reset(), (this.m_ActiveInputId = e);
      let n = () => {
        this.m_ActiveInputTimeout = window.setInterval(() => {
          t();
        }, this.m_config.repeatInterval_ms);
      };
      this.m_config.firstRepeatInterval_ms == null ||
      this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
        ? n()
        : (this.m_ActiveInputTimeout = window.setTimeout(() => {
            t(), n();
          }, this.m_config.firstRepeatInterval_ms));
    }
  }
};
var Ce = class {
  m_config;
  m_inputRepeatGenerator;
  m_repeatOnAxis = 0;
  m_fnRepeatAllowed = () => !0;
  constructor(e) {
    (this.m_config = e), (this.m_inputRepeatGenerator = new Ke(e));
  }
  Reset() {
    this.m_inputRepeatGenerator.Reset();
  }
  SetRepeatAllowed(e) {
    e || (e = () => !0), (this.m_fnRepeatAllowed = e);
  }
  HandleInputButtonDown(e, t, n) {
    this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(e)
      ? this.m_repeatOnAxis == 0 &&
        ((e == 9 || e == 10) && (this.m_repeatOnAxis = 2),
        (e == 11 || e == 12) && (this.m_repeatOnAxis = 1),
        t(),
        this.m_inputRepeatGenerator.HandleInputButtonDown(e, n))
      : (t(), this.m_inputRepeatGenerator.Reset());
  }
  HandleInputButtonUp(e) {
    if (this.m_config.inputsThatRepeat.has(e) && this.m_repeatOnAxis != 0) {
      let t = e == 9 || e == 10,
        n = e == 11 || e == 12;
      ((this.m_repeatOnAxis == 2 && t) || (this.m_repeatOnAxis == 1 && n)) &&
        ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
    } else this.m_inputRepeatGenerator.Reset();
  }
};
var U = ((m) => (
  (m[(m.INVALID = 0)] = "INVALID"),
  (m[(m.OK = 1)] = "OK"),
  (m[(m.CANCEL = 2)] = "CANCEL"),
  (m[(m.SECONDARY = 3)] = "SECONDARY"),
  (m[(m.OPTIONS = 4)] = "OPTIONS"),
  (m[(m.BUMPER_LEFT = 5)] = "BUMPER_LEFT"),
  (m[(m.BUMPER_RIGHT = 6)] = "BUMPER_RIGHT"),
  (m[(m.TRIGGER_LEFT = 7)] = "TRIGGER_LEFT"),
  (m[(m.TRIGGER_RIGHT = 8)] = "TRIGGER_RIGHT"),
  (m[(m.DIR_UP = 9)] = "DIR_UP"),
  (m[(m.DIR_DOWN = 10)] = "DIR_DOWN"),
  (m[(m.DIR_LEFT = 11)] = "DIR_LEFT"),
  (m[(m.DIR_RIGHT = 12)] = "DIR_RIGHT"),
  (m[(m.SELECT = 13)] = "SELECT"),
  (m[(m.START = 14)] = "START"),
  (m[(m.LSTICK_CLICK = 15)] = "LSTICK_CLICK"),
  (m[(m.RSTICK_CLICK = 16)] = "RSTICK_CLICK"),
  (m[(m.LSTICK_TOUCH = 17)] = "LSTICK_TOUCH"),
  (m[(m.RSTICK_TOUCH = 18)] = "RSTICK_TOUCH"),
  (m[(m.LPAD_TOUCH = 19)] = "LPAD_TOUCH"),
  (m[(m.LPAD_CLICK = 20)] = "LPAD_CLICK"),
  (m[(m.RPAD_TOUCH = 21)] = "RPAD_TOUCH"),
  (m[(m.RPAD_CLICK = 22)] = "RPAD_CLICK"),
  (m[(m.REAR_LEFT_UPPER = 23)] = "REAR_LEFT_UPPER"),
  (m[(m.REAR_LEFT_LOWER = 24)] = "REAR_LEFT_LOWER"),
  (m[(m.REAR_RIGHT_UPPER = 25)] = "REAR_RIGHT_UPPER"),
  (m[(m.REAR_RIGHT_LOWER = 26)] = "REAR_RIGHT_LOWER"),
  (m[(m.STEAM_GUIDE = 27)] = "STEAM_GUIDE"),
  (m[(m.STEAM_QUICK_MENU = 28)] = "STEAM_QUICK_MENU"),
  m
))(U || {});
var mt = class {
  m_OnGamepadDetectedCallbacks = new f();
  m_ButtonDownCallbacks = new f();
  m_ButtonUpCallbacks = new f();
  m_AnalogCallbacks = new f();
  m_NavigationTypeChangeCallbacks = new f();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new Ce({
    inputsThatRepeat: new Set([9, 10, 11, 12]),
    firstRepeatInterval_ms: 400,
    repeatInterval_ms: 50,
  });
  m_bGamepadDetected = !1;
  RegisterForGamepadDetected(e) {
    return this.m_OnGamepadDetectedCallbacks.Register(e);
  }
  RegisterForGamepadButtonDown(e) {
    return this.m_ButtonDownCallbacks.Register(e);
  }
  RegisterForGamepadButtonUp(e) {
    return this.m_ButtonUpCallbacks.Register(e);
  }
  RegisterForAnalog(e) {
    return this.m_AnalogCallbacks.Register(e);
  }
  RegisterForNavigationTypeChange(e) {
    return this.m_NavigationTypeChangeCallbacks.Register(e);
  }
  SetSourceType(e) {
    this.m_eNavigationSourceType = e;
  }
  GetSourceType() {
    return this.m_eNavigationSourceType;
  }
  SetControllerActive(e) {
    (this.m_nLastActiveControllerIndex = e),
      (this.m_fLastActiveTime = Date.now());
  }
  GetActiveControllerIndex() {
    return this.m_nLastActiveControllerIndex;
  }
  GetActiveControllerTime() {
    return this.m_fLastActiveTime;
  }
  SetRepeatAllowed(e) {
    this.m_ButtonRepeatHandler.SetRepeatAllowed(e);
  }
  OnGamepadDetected() {
    console.log("Gamepad detected"),
      (this.m_bGamepadDetected = !0),
      this.m_OnGamepadDetectedCallbacks.Dispatch();
  }
  OnButtonDown(e, t) {
    t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonDown(
        e,
        () => this.DispatchButtonDown(e, !1),
        () => this.DispatchButtonDown(e, !0),
      );
  }
  OnButtonUp(e, t) {
    t === void 0 && (t = -1),
      this.SetControllerActive(t),
      this.m_ButtonRepeatHandler.HandleInputButtonUp(e),
      this.m_ButtonUpCallbacks.Dispatch(
        e,
        this.m_eNavigationSourceType,
        this.m_nLastActiveControllerIndex,
      );
  }
  DispatchButtonDown(e, t) {
    this.m_ButtonDownCallbacks.Dispatch(
      e,
      this.m_eNavigationSourceType,
      this.m_nLastActiveControllerIndex,
      t,
    );
  }
  OnAnalogPad(e, t, n, i) {
    i === void 0 && (i = -1),
      this.SetControllerActive(i),
      this.m_AnalogCallbacks.Dispatch(
        e,
        this.m_nLastActiveControllerIndex,
        t,
        n,
      );
  }
  OnNavigationTypeChanged(e) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(e);
  }
};
var J = { x: "y", y: "x" };
function ro() {
  return { x: 0, y: 0 };
}
function Cn(o, e) {
  return o.x * e.x + o.y * e.y;
}
function fn(o, e) {
  return { x: e.x - o.x, y: e.y - o.y };
}
function ao(o, e) {
  let t = fn(o, e);
  return Math.sqrt(Cn(t, t));
}
var fe = class {
  async GetObject(e, t) {
    try {
      let n = await this.GetString(e);
      return n ? JSON.parse(n, t) : null;
    } catch {
      return null;
    }
  }
  async StoreObject(e, t) {
    return this.StoreString(e, JSON.stringify(t));
  }
};
var le = class extends fe {
  GetString(e) {
    return Promise.resolve(localStorage.getItem(e));
  }
  StoreString(e, t) {
    return localStorage.setItem(e, t), Promise.resolve();
  }
  RemoveObject(e) {
    return localStorage.removeItem(e), Promise.resolve();
  }
};
var _ = class {
  m_sName;
  m_fnIdGenerator = void 0;
  constructor(e, t) {
    (this.m_sName = e), (this.m_fnIdGenerator = t), A.Get().RegisterLogName(e);
  }
  Debug(...e) {
    this.Log(0, ...e);
  }
  Info(...e) {
    this.Log(1, ...e);
  }
  Warning(...e) {
    this.Log(2, ...e);
  }
  Error(...e) {
    this.Log(3, ...e);
  }
  Assert(e, ...t) {
    e || this.Log(3, "Assertion failed:", ...t);
  }
  IsDebugEnabled() {
    return A.Get().IsDebugLogEnabled(this.m_sName);
  }
  Log(e, ...t) {
    let n = A.Get().IsDebugLogEnabled(this.m_sName);
    if (e == 0 && !n) return;
    let i = this.m_sName,
      a = this.m_fnIdGenerator?.() ?? null;
    a != null && (i += " (" + a + ")");
    let s = A.Get().IncludeBacktraceInLog;
    bt(e, n, s, i, this.m_sName, ...t);
  }
};
I([R], _.prototype, "Debug", 1),
  I([R], _.prototype, "Info", 1),
  I([R], _.prototype, "Warning", 1),
  I([R], _.prototype, "Error", 1),
  I([R], _.prototype, "Assert", 1);
var A = class o {
  static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
  static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
  static s_Singleton = null;
  m_Storage = null;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_SettingsChangedCallback = new f();
  m_bLoading = !1;
  constructor() {
    (this.m_Storage = new le()), this.LoadSettings();
  }
  LogAsLogManager(...e) {
    bt(1, !0, this.IncludeBacktraceInLog, "LogManager", "LogManager", ...e);
  }
  async LoadSettings() {
    (this.m_bLoading = !0),
      (this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
        o.k_IncludeBacktraceInLog_StorageKey,
      )));
    let e = await this.m_Storage?.GetObject(o.k_EnabledLogNames_StorageKey);
    if (Array.isArray(e)) {
      this.m_setEnabledDebugLogs = new Set(e);
      for (let t of e) this.m_setKnownDebugLogs.add(t);
      this.LogAsLogManager(
        "Loaded debug enabled log names. Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
  }
  async SaveSettings() {
    await this.m_Storage?.StoreObject(
      o.k_EnabledLogNames_StorageKey,
      Array.from(this.m_setEnabledDebugLogs),
    ),
      await this.m_Storage?.StoreObject(
        o.k_IncludeBacktraceInLog_StorageKey,
        this.m_bIncludeBacktraceInLog,
      ),
      this.LogAsLogManager(
        "Saved enabled debug log names. Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  static Get() {
    return o.s_Singleton == null && (o.s_Singleton = new o()), o.s_Singleton;
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(e) {
    this.m_setKnownDebugLogs.add(e);
  }
  IsLogName(e) {
    return this.m_setKnownDebugLogs.has(e);
  }
  IsDebugLogEnabled(e) {
    return this.m_setEnabledDebugLogs.has(e);
  }
  async ToggleDebugLogEnabled(e) {
    this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
  }
  async SetDebugLogEnabled(e, t) {
    t
      ? this.m_setEnabledDebugLogs.add(e)
      : this.m_setEnabledDebugLogs.delete(e),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  async SetAllDebugLogsEnabled(e) {
    (this.m_setEnabledDebugLogs = e
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  RegisterForSettingsChanges(e) {
    return this.m_SettingsChangedCallback.Register(e);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(e) {
    (this.m_bIncludeBacktraceInLog = e),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
};
function hn(o) {
  let e = 0;
  for (let t = 0; t < o.length; t++) e = o.charCodeAt(t) + ((e << 5) - e);
  return [(e >> (0 * 8)) & 255, (e >> (1 * 8)) & 255, (e >> (2 * 8)) & 255];
}
function yn(o) {
  return (o[0] * 299 + o[1] * 587 + o[2] * 114) / 1e3 >= 128;
}
function _n(o) {
  switch (o) {
    case 0:
      return String.fromCodePoint(128027);
    case 1:
      return String.fromCodePoint(8505);
    case 2:
      return String.fromCodePoint(9888);
    case 3:
      return String.fromCodePoint(128165);
  }
}
function bt(o, e, t, n, i, ...a) {
  let r = hn(i).map((b, g) =>
      Math.round(
        Math.max(0, Math.min(255, ((b / 255 - 0.5) * 0.8 + 0.15) * 255)),
      ),
    ),
    l = yn(r),
    u = n;
  t && (u = _n(o) + " " + u);
  let c = a.length >= 1 && typeof a[0] == "string" && a[0].includes("%c"),
    p = c && a.shift(),
    d;
  if (
    (e
      ? (d = [
          `%c${u}%c:${c ? " %c" + p : ""}`,
          `color: ${l ? "black" : "white"}; background: rgb(${r.join(",")}); padding: 0 1ch; border-radius: 3px;`,
          "color: transparent; margin-right: -1ch",
          ...(c ? [""] : []),
          ...a,
        ])
      : (d = a),
    t)
  )
    console.groupCollapsed(...d),
      console.trace("Callstack"),
      console.groupEnd();
  else
    switch (o) {
      case 0:
      case 1:
        console.log(...d);
        break;
      case 2:
        console.warn(...d);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ...d) : console.error(...d);
        break;
    }
}
var vt = () => [...A.Get().LogNames].sort(),
  gt = (o, e) => {
    A.Get().IsLogName(o)
      ? A.Get().SetDebugLogEnabled(o, e)
      : console.warn(`No log named "${o}", available logs:`, vt());
  };
window.DebugLogEnable = (...o) => o.forEach((e) => gt(e, !0));
window.DebugLogDisable = (...o) => o.forEach((e) => gt(e, !1));
window.DebugLogEnableAll = () => A.Get().SetAllDebugLogsEnabled(!0);
window.DebugLogDisableAll = () => A.Get().SetAllDebugLogsEnabled(!1);
window.DebugLogEnableBacktrace = () => A.Get().SetIncludeBacktraceInLog(!0);
window.DebugLogDisableBacktrace = () => A.Get().SetIncludeBacktraceInLog(!1);
window.DebugLogNames = vt;
window.EnableSteamConsole = (o = !0) =>
  A.Get().SetDebugLogEnabled("SteamClient", o);
function Ct(o, e) {
  return o == null || e == null
    ? o === e
    : typeof o != "object" ||
        typeof e != "object" ||
        Object.keys(o).length !== Object.keys(e).length
      ? !1
      : Object.keys(o).every((t) => e.hasOwnProperty(t) && o[t] === e[t]);
}
var Z = ((i) => (
    (i[(i.GAMEPAD = 0)] = "GAMEPAD"),
    (i[(i.KEYBOARD = 1)] = "KEYBOARD"),
    (i[(i.APPLICATION = 2)] = "APPLICATION"),
    (i[(i.BROWSER = 3)] = "BROWSER"),
    i
  ))(Z || {}),
  Sn = {
    1: "vgp_onok",
    2: "vgp_oncancel",
    3: "vgp_onsecondaryaction",
    4: "vgp_onoptions",
    14: "vgp_onmenu",
  };
function N(o, e, t) {
  return o.addEventListener(e, t), () => Fn(o, e, t);
}
function Fn(o, e, t) {
  o.removeEventListener(e, t);
}
function ft(o, e) {
  return N(o, "vgp_onbuttondown", e);
}
function ht(o, e) {
  return N(o, "vgp_onbuttonup", e);
}
function he(o, e) {
  return N(o, "vgp_onok", ee(e));
}
function yt(o, e) {
  return N(o, "vgp_oncancel", ee(e));
}
function _t(o, e) {
  return N(o, "vgp_onsecondaryaction", ee(e));
}
function St(o, e) {
  return N(o, "vgp_onoptions", ee(e));
}
function Ft(o, e) {
  return N(o, "vgp_onmenu", ee(e));
}
function ye(o, e) {
  return N(o, "vgp_ondirection", ee(e));
}
function Tt(o, e) {
  return N(o, "vgp_onfocus", e);
}
function _e(o, e) {
  return N(o, "vgp_onblur", e);
}
function $(o, e, t) {
  let n = o;
  if (!n || !n.ownerDocument || !n.ownerDocument.defaultView) return !0;
  let i = new n.ownerDocument.defaultView.CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: t,
  });
  return n.dispatchEvent(i);
}
function It(o) {
  let e = [9, 10, 11, 12],
    t = !0,
    n = !1,
    i = Sn[o.detail.button];
  return (
    i
      ? ((n = !0), (t = $(o.target, i, o.detail)))
      : e.indexOf(o.detail.button) !== -1 &&
        ((n = !0), (t = $(o.target, "vgp_ondirection", o.detail))),
    { bUnhandled: t, bHadLogicalEventMapping: n }
  );
}
function ee(o) {
  return (e) => {
    o(e) !== !1 && (e.stopPropagation(), e.preventDefault());
  };
}
function Rt(o) {
  let {
      onOKActionDescription: e,
      onCancelActionDescription: t,
      onSecondaryActionDescription: n,
      onOptionsActionDescription: i,
      onMenuActionDescription: a,
      actionDescriptionMap: s,
    } = o,
    r = { ...s };
  return (
    e !== void 0 && (r[1] = e),
    t !== void 0 && (r[2] = t),
    n !== void 0 && (r[3] = n),
    i !== void 0 && (r[4] = i),
    a !== void 0 && (r[14] = a),
    r
  );
}
var w = class o {
  m_root;
  constructor(e) {
    this.m_root = e;
  }
  static SerializeNavState(e, t = !0, n = !0) {
    return { root: o.SerializeNavNode(e, t, n), bHadFocus: e.BFocusWithin() };
  }
  static SerializeNavNode(e, t = !0, n = !0) {
    let i = null,
      [a, s] = e.GetChildren();
    return (
      a.length &&
        s != -1 &&
        t &&
        (i = a.map((r, l) => o.SerializeNavNode(r, l == s || n, n))),
      { sNavKey: e.NavKey, iActiveChild: s, rgChildren: i }
    );
  }
  static RestoreSerializedNavState(e, t, n = 0) {
    let { root: i, bHadFocus: a } = t;
    e.Tree.Controller.RestoreHistoryTransaction(() => {
      o.RestoreSerializedNavNode(e, i),
        (n == 1 || (n == 0 && a)) && e.BTakeFocus(2);
    });
  }
  static RestoreSerializedNavNode(e, t) {
    let { sNavKey: n, iActiveChild: i, rgChildren: a } = t;
    if (
      (n && D(n == e.NavKey, "navkey mismatch"),
      e.SetActiveChild(i),
      a && a.length)
    ) {
      let [s] = e.GetChildren(),
        r = new Map();
      s.forEach((c) => {
        c.NavKey && r.set(c.NavKey, c);
      });
      for (let c of a) {
        if (!c.sNavKey) continue;
        let p = r.get(c.sNavKey);
        p && o.RestoreSerializedNavNode(p, c);
      }
      if (i != -1 && a[i]?.sNavKey) {
        let c = r.get(a[i].sNavKey);
        c && e.SetActiveChild(s.indexOf(c));
      }
      let l = 0,
        u = 0;
      for (; l < s.length && u < a.length; ) {
        for (; l < s.length && s[l].NavKey; ) l++;
        for (; u < a.length && a[u].sNavKey; ) u++;
        if (l >= s.length || u >= a.length) break;
        o.RestoreSerializedNavNode(s[l], a[u]), l++, u++;
      }
    }
  }
};
function Dt(o) {
  return w.SerializeNavState(o, !0, !1);
}
function At(o, e, t = 0) {
  return w.RestoreSerializedNavState(o, e, t);
}
var Se = class extends w {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(w.SerializeNavState(this.m_root));
    }
    PopState(e = 0) {
      this.m_rgHistory.length &&
        w.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
    }
  },
  Fe = class extends w {
    m_mapHistory = new Map();
    SaveState(e) {
      this.m_mapHistory.set(e, w.SerializeNavState(this.m_root));
    }
    RestoreState(e, t = 0) {
      let n = this.m_mapHistory.get(e);
      return n
        ? (console.log(`Restoring history for state ${e}`),
          w.RestoreSerializedNavState(this.m_root, n, t),
          !0)
        : !1;
    }
  };
function Et(o, e) {
  return o ? typeof o.SteamClient == "object" && e in o.SteamClient : !1;
}
function Pt(o, e) {
  if (!o) return !1;
  let [t, n] = e.split(".", 2);
  return t && n && Et(o, t) && n in o.SteamClient[t];
}
function ze(o) {
  return Pt(window, o);
}
var Nt = new _("FocusNavigation").Debug,
  Tn = new _("GamepadEvents").Debug,
  Te = class {
    m_Controller;
    m_context;
    m_window;
    m_ParentNavTree;
    m_rgChildNavTrees = [];
    m_ID;
    m_bIsMounted = !1;
    m_bIsEnabled = !1;
    m_tsLastActivated;
    m_Root;
    m_onActivateCallbacks = new f();
    m_onDeactivateCallbacks = new f();
    m_onActiveFocusStateChangedCallbacks = new f();
    m_onChildTreesChanged = new f();
    m_bVirtualFocus = !1;
    m_bModal = !1;
    m_bIsEmbeddedInLegacyTree = !1;
    m_onGlobalButtonDown;
    m_onUnhandledButton;
    constructor(e, t, n, i) {
      (this.m_Controller = e),
        (this.m_context = t),
        (this.m_ID = n),
        (this.m_ParentNavTree = i),
        (this.m_Root = new ce(this, null, null)),
        this.m_Root.SetProperties({ layout: 1 });
    }
    SetUseVirtualFocus(e) {
      this.m_bVirtualFocus = e;
    }
    SetModal(e) {
      this.m_bModal = e;
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
      return this.m_bVirtualFocus;
    }
    BIsModal() {
      return this.m_bModal;
    }
    FindModalDescendant() {
      for (let e of this.m_rgChildNavTrees) {
        if (e.BIsModal() && e.BIsEnabled()) return e;
        let t = e.FindModalDescendant();
        if (t) return t;
      }
    }
    BIsContextActive() {
      return this.m_Controller.BIsInActiveContext(this);
    }
    CreateNode(e, t) {
      return new ce(this, e, t);
    }
    RegisterNavigationItem(e, t) {
      return e.OnMount(t), () => e.OnUnmount();
    }
    OnChildActivated(e) {
      this.m_bIsMounted &&
        this.m_Controller.OnGamepadNavigationTreeFocused(this, e);
    }
    m_lastFocusNode;
    m_bWasActiveForLastFocusChange;
    m_lastFocusNodeXMovement = new Ie();
    m_lastFocusNodeYMovement = new Ie();
    GetLastFocusedNode() {
      return this.m_lastFocusNode;
    }
    GetLastFocusedMovementRect(e) {
      return e == "x"
        ? this.m_lastFocusNodeXMovement.GetRect()
        : e == "y"
          ? this.m_lastFocusNodeYMovement.GetRect()
          : void 0;
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
    OnActivate(e) {
      (this.m_tsLastActivated = performance.now()),
        this.m_onActivateCallbacks.Dispatch(this, e),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!0, this);
    }
    OnDeactivate(e) {
      this.m_onDeactivateCallbacks.Dispatch(this, e),
        this.m_onActiveFocusStateChangedCallbacks.Dispatch(!1, this),
        (this.m_bWasActiveForLastFocusChange = !1);
    }
    OnContextActiveStateChanged(e) {
      this.m_onActiveFocusStateChangedCallbacks.Dispatch(e, this);
    }
    IsActiveFocusNavTree() {
      return this.m_Controller.IsActiveFocusNavTree(this);
    }
    TakeFocus(e, t = !1) {
      let n = !1;
      t
        ? (n = this.Root.BVisibleChildTakeFocus(e))
        : this.m_lastFocusNode && (n = this.m_lastFocusNode.BTakeFocus(e)),
        n || (n = this.Root.BTakeFocus(e)),
        n || this.TransferFocus(e, this.Root);
    }
    Activate(e = !1) {
      this.m_Controller.OnGamepadNavigationTreeActivated(
        this.FindModalDescendant() ?? this,
        e,
      );
    }
    Deactivate() {
      this.m_Controller.BlurNavTree(this);
    }
    BIsEnabled() {
      return this.m_bIsEnabled;
    }
    BIsActive() {
      return (
        this.m_bIsMounted &&
        (this.m_Controller.IsActiveNavTree(this) ||
          this.m_Controller.IsActiveFocusNavTree(this))
      );
    }
    BIsActiveFocus() {
      return this.m_bIsMounted && this.m_Controller.IsActiveFocusNavTree(this);
    }
    BIsActiveWithinContext() {
      return (
        this.m_bIsMounted &&
        (this.m_context.m_LastActiveNavTree == this ||
          this.m_context.m_LastActiveFocusNavTree == this)
      );
    }
    GetTimeLastActivated() {
      return this.m_tsLastActivated;
    }
    MountNavTree(e) {
      this.m_window = e;
      let t = this.m_Root.Element;
      (t.__nav_tree = this),
        t.__nav_wrapper && t.__nav_wrapper.BindTree(this),
        (this.m_bIsMounted = !0);
      let n = this.m_ParentNavTree
        ? this.m_ParentNavTree.AddChildNavTree(this)
        : void 0;
      return () => {
        (this.m_bIsMounted = !1), n && n();
      };
    }
    SetIsEnabled(e) {
      this.m_bIsEnabled != e &&
        ((this.m_bIsEnabled = e),
        this.m_bIsEnabled || (this.m_tsLastActivated = void 0));
    }
    SetIsEmbeddedInLegacyTree(e) {
      this.m_bIsEmbeddedInLegacyTree = e;
    }
    GetParentEmbeddedNavTree() {
      return this.m_bIsEmbeddedInLegacyTree ? this.m_ParentNavTree : void 0;
    }
    SetOnUnhandledButtonCallback(e) {
      this.m_onUnhandledButton = e;
    }
    SetOnGlobalButtonDown(e) {
      this.m_onGlobalButtonDown = e;
    }
    OnRootButtonDown(e) {
      for (let t = this; t; t = t.Parent)
        if (
          (t.m_onGlobalButtonDown && t.m_onGlobalButtonDown(e), e.cancelBubble)
        )
          return !1;
      return this.HandleButtonDownEventAsLogicalEvent(e);
    }
    HandleButtonDownEventAsLogicalEvent(e) {
      let { bUnhandled: t, bHadLogicalEventMapping: n } = It(e);
      return (
        Tn(
          `Logical gamepad Event fired: ${U[e.detail.button]}, had logical event: ${n}, was handled: ${!t}`,
        ),
        t && this.m_onUnhandledButton && (t = this.m_onUnhandledButton(e)),
        t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
        e.stopPropagation(),
        t
      );
    }
    m_DeferredFocus = new $e(this);
    get DeferredFocus() {
      return this.m_DeferredFocus;
    }
    AddChildNavTree(e) {
      return (
        this.m_rgChildNavTrees.push(e),
        this.OnChildTreesChangedCallbacks.Dispatch("add", e),
        () => {
          G.FindAndRemove(this.m_rgChildNavTrees, e),
            this.OnChildTreesChangedCallbacks.Dispatch("remove", e);
        }
      );
    }
    TransferFocus(e, t, n) {
      this.m_Controller.BatchedUpdate(() =>
        this.TransferFocusInternal(e, t, n),
      );
    }
    TransferFocusInternal(e, t, n) {
      let i = this.m_lastFocusNode;
      if (i == t && (this.m_bWasActiveForLastFocusChange || !this.BIsActive()))
        return;
      Nt(
        `Transfer focus in ${this.id}, source: ${e && Z[e]}, from/to:`,
        i?.m_element,
        t?.m_element,
      );
      let a = { blurredNode: i, focusedNode: t, focusSource: e },
        s = In(i, t);
      if (i) {
        i.SetHasFocus(!1);
        for (let l = i; l && l != s; l = l.Parent) l.SetFocusWithin(!1);
      }
      if (t) {
        t.SetHasFocus(!0);
        for (let l = t; l && l != s; l = l.Parent) l.SetFocusWithin(!0);
      }
      let r = this.m_context.OnFocusChangeStart(e, this, i, t);
      t && t.SetDOMFocusAndScroll(e, i),
        i &&
          ($(i.Element, "vgp_onblur", a),
          i.m_FocusRing &&
            (!t || i.m_FocusRing != t.m_FocusRing) &&
            i.m_FocusRing.OnBlur(e, i, t)),
        t &&
          ($(t.Element, "vgp_onfocus", a),
          t.m_FocusRing &&
            (i && t.m_FocusRing == i.m_FocusRing
              ? t.m_FocusRing.OnFocusChange(e, i, t)
              : t.m_FocusRing.OnFocus(e, t, i))),
        (this.m_lastFocusNode = t),
        (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
        n == "x"
          ? this.m_lastFocusNodeXMovement.SetNode(t?.Element)
          : n == "y"
            ? this.m_lastFocusNodeYMovement.SetNode(t?.Element)
            : (this.m_lastFocusNodeXMovement.Reset(),
              this.m_lastFocusNodeYMovement.Reset()),
        this.m_context.OnFocusChangeComplete(r);
    }
  };
function In(o, e) {
  if (!e || !o) return null;
  let t = e,
    n = o;
  for (; t.GetDepth() > n.GetDepth() && t.Parent; ) t = t.Parent;
  for (; n.GetDepth() > t.GetDepth() && n.Parent; ) n = n.Parent;
  for (; t != n && t && n; ) (t = t.Parent), (n = n.Parent);
  return t;
}
var Ie = class {
    m_element;
    m_rect;
    SetNode(e) {
      (this.m_element = e),
        (this.m_rect = e ? e.getBoundingClientRect() : void 0);
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
  $e = class {
    m_tree;
    m_target;
    m_interval;
    m_schExecuteQueuedFocus = new ve();
    m_bSuppressed = !1;
    constructor(e) {
      this.m_tree = e;
    }
    RequestFocus(e, t) {
      if (!e) {
        this.m_target = void 0;
        return;
      }
      (this.m_target = { ...t, node: e }),
        !this.m_interval &&
          !this.m_bSuppressed &&
          this.m_schExecuteQueuedFocus.Schedule(1, () => {
            (this.m_interval = void 0), this.ExecuteQueuedFocus();
          });
    }
    BHasQueuedFocusNode() {
      return !!this.m_target;
    }
    BIsQueuedFocusNode(e) {
      return this.m_target && this.m_target.node == e;
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
        let { node: e, bFocusDescendant: t } = this.m_target;
        (this.m_target = void 0),
          Nt(
            `DeferredFocus in ${this.m_tree.id} - focusing ${t ? "descendant of" : "node"} ${e.NavKey}`,
          ),
          t
            ? e.BChildTakeFocus(2) || this.m_tree.TransferFocus(2, e)
            : e.BTakeFocus(2);
      }
    }
  };
var B = new _("FocusNavigation").Debug,
  De = class {
    m_rootWindow;
    m_activeWindow;
    m_activeBrowserView;
    m_valueIsActive = se(!1);
    m_controller;
    m_rgGamepadNavigationTrees = [];
    m_LastActiveNavTree;
    m_LastActiveFocusNavTree;
    m_bMounted = !0;
    m_schDeferredActivate = new ve();
    m_FocusChangedCallbacks = new f();
    m_bIsGamepadInputSuppressed = !1;
    constructor(e, t, n) {
      (this.m_controller = e),
        (this.m_rootWindow = t),
        (this.m_activeWindow = t),
        (this.m_bIsGamepadInputSuppressed = n);
    }
    get RootWindow() {
      return this.m_rootWindow;
    }
    get ActiveWindow() {
      return this.m_activeWindow;
    }
    FindNavTreeInFocusedWindow() {
      for (let e = this.m_rgGamepadNavigationTrees.length - 1; e >= 0; e--) {
        let t = this.m_rgGamepadNavigationTrees[e];
        if (t.Window?.document.hasFocus()) return t;
      }
    }
    OnMount(e) {
      e == this.m_rootWindow && (this.m_bMounted = !0);
    }
    Destroy(e) {
      e == this.m_rootWindow
        ? (B(`${this.LogName(e)} Destroying context for window`),
          (this.m_bMounted = !1),
          this.m_schDeferredActivate.Cancel(),
          this.SetActive(!1, e),
          this.m_controller.DestroyContext(this))
        : B(`${this.LogName(e)} Child window destroyed`);
    }
    SetActive(e, t, n = void 0) {
      this.m_controller.BatchedUpdate(() => {
        let i = this.m_valueIsActive.Value != e;
        e
          ? ((this.m_activeWindow = t),
            (this.m_activeBrowserView = n),
            this.m_controller.OnContextActivated(this))
          : ((this.m_activeBrowserView = void 0),
            this.m_controller.OnContextDeactivated(this, !1)),
          this.m_valueIsActive.Set(e),
          i && this.m_LastActiveFocusNavTree?.OnContextActiveStateChanged(e);
      });
    }
    OnActivate(e) {
      (this.BIsActive() &&
        this.m_activeWindow == e &&
        this.m_activeBrowserView === void 0) ||
        (B(
          `${this.LogName(e)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
        ),
        this.SetActive(!0, e));
    }
    OnActivateBrowserView(e, t) {
      (this.BIsActive() &&
        this.m_activeWindow == e &&
        this.m_activeBrowserView == t) ||
        (B(`${this.LogName(e)} Browser View "${t}" activated in context`),
        this.SetActive(!0, e, t));
    }
    OnDeactivate(e) {
      this.m_activeWindow == e
        ? (B(`${this.LogName(e)} Deactivate context for window`),
          this.SetActive(!1, e))
        : B(
            `${this.LogName(e)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
          );
    }
    OnDeactivateBrowserView(e, t) {
      B(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
        this.m_activeBrowserView == t && this.SetActive(!1, e, t);
    }
    BIsGamepadInputSuppressed() {
      return this.m_bIsGamepadInputSuppressed;
    }
    BIsActive() {
      return this.m_valueIsActive.Value;
    }
    get IsActive() {
      return this.m_valueIsActive;
    }
    AddNavTree(e) {
      this.m_rgGamepadNavigationTrees.push(e);
    }
    LogName(e = void 0) {
      return e && this.m_rootWindow != e
        ? `(${this.m_rootWindow.name}) > (${e.name})`
        : `(${this.m_rootWindow.name})`;
    }
    FindNavTreeToActivate() {
      for (let e = this.m_rgGamepadNavigationTrees.length - 1; e >= 0; e--) {
        let t = this.m_rgGamepadNavigationTrees[e];
        if (!t.BIsEnabled()) continue;
        return t.FindModalDescendant() ?? t;
      }
    }
    SetActiveNavTree(e, t = !1) {
      if (e && this.m_LastActiveNavTree == e) return;
      let n = this.m_LastActiveNavTree;
      n && G.FindAndRemove(this.m_rgGamepadNavigationTrees, n),
        e || (e = this.FindNavTreeToActivate());
      let i = this.m_LastActiveFocusNavTree == e;
      e && G.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        (this.m_LastActiveNavTree = e),
        (!e || !e.BUseVirtualFocus()) && (this.m_LastActiveFocusNavTree = e),
        B(
          `${this.LogName(e?.Window)} Move from nav tree ${n?.id} to nav tree ${e?.id} ${t ? "taking focus" : "no focus"}`,
        ),
        n && this.m_rgGamepadNavigationTrees.push(n),
        e &&
          (this.m_rgGamepadNavigationTrees.push(e),
          !i &&
            t &&
            !e.DeferredFocus.BHasQueuedFocusNode() &&
            e.DeferredFocus.RequestFocus(e.Root)),
        n && n != this.m_LastActiveFocusNavTree && n.OnDeactivate(e),
        e && !i && e.OnActivate(n);
    }
    BlurNavTree(e) {
      this.m_LastActiveNavTree == e && this.SetActiveNavTree(void 0, !0),
        G.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        this.m_rgGamepadNavigationTrees.unshift(e);
    }
    UnregisterGamepadNavigationTree(e) {
      G.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        B(
          `(${this.m_rootWindow.name}) Unregister tree ${e?.id} ${this.m_LastActiveFocusNavTree == e ? "(was active)" : "(inactive)"}`,
        ),
        this.m_LastActiveNavTree == e &&
          ((this.m_LastActiveNavTree = void 0),
          this.m_bMounted &&
            this.m_schDeferredActivate.Schedule(1, () => {
              this.m_LastActiveNavTree || this.SetActiveNavTree(void 0, !0);
            }));
    }
    get FocusChangedCallbacks() {
      return this.m_FocusChangedCallbacks;
    }
    m_iFocusChangeStack = 0;
    m_ActiveFocusChange;
    OnFocusChangeStart(e, t, n, i) {
      return (
        this.m_iFocusChangeStack == 0
          ? (this.m_ActiveFocusChange = {
              source: e,
              from: n || void 0,
              to: i || void 0,
            })
          : this.m_ActiveFocusChange &&
            (!this.m_ActiveFocusChange.from &&
              n &&
              (this.m_ActiveFocusChange.from = n),
            i && (this.m_ActiveFocusChange.to = i)),
        this.m_iFocusChangeStack++
      );
    }
    OnFocusChangeComplete(e) {
      if (
        (this.m_iFocusChangeStack--,
        D(e == this.m_iFocusChangeStack, "out of order focus pop"),
        this.m_iFocusChangeStack == 0)
      ) {
        let { source: t, from: n, to: i } = this.m_ActiveFocusChange ?? {};
        this.m_FocusChangedCallbacks.Dispatch(t, n, i);
      }
    }
  };
var k = new _("FocusNavigation").Debug,
  Rn = new _("FocusNavigation").Assert,
  qe = "focus-nav-show-debug-focus-ring";
function Dn() {
  return sessionStorage.getItem(qe) == "shown";
}
function An(o) {
  o ? sessionStorage.setItem(qe, "shown") : sessionStorage.removeItem(qe);
}
function En(o, e) {
  return (
    o?.eActivationSourceType === e?.eActivationSourceType &&
    o?.nActiveGamepadIndex === e?.nActiveGamepadIndex &&
    o?.nLastActiveGamepadIndex === e?.nLastActiveGamepadIndex
  );
}
var ue = class {
  m_rgGamepadInputSources = [];
  m_DefaultContext;
  m_rgAllContexts = [];
  m_ActiveContext;
  m_LastActiveContext;
  m_fnCatchAllGamepadInput = null;
  m_UnhandledButtonEventsCallbacks = new f();
  m_navigationSource = se(
    {
      eActivationSourceType: 0,
      nActiveGamepadIndex: -1,
      nLastActiveGamepadIndex: -1,
    },
    En,
  );
  m_navigationSourceSupportsFocus = lt(
    this.m_navigationSource,
    (e) => e?.eActivationSourceType === 1 || e?.eActivationSourceType === 2,
  );
  m_bShowDebugFocusRing = se(!1);
  m_bRestoringHistory = !1;
  m_fnGamepadEventUpdateBatcher = (e) => e();
  constructor() {
    window.FocusNavController = this;
  }
  Init() {
    this.m_bShowDebugFocusRing.Set(Dn());
  }
  CreateContext(e, t) {
    let n = new De(this, e, t);
    return this.m_rgAllContexts.push(n), n;
  }
  DestroyContext(e) {
    G.FindAndRemove(this.m_rgAllContexts, e);
  }
  GetDefaultContext() {
    return (
      this.m_DefaultContext ||
        (this.m_DefaultContext = this.CreateContext(window, !1)),
      this.m_DefaultContext
    );
  }
  GetActiveContext() {
    return this.m_ActiveContext;
  }
  FindAnActiveContext() {
    if (!this.m_ActiveContext && this.m_rgAllContexts.length != 0) {
      console.warn("No active context; finding one");
      for (let e of this.m_rgAllContexts) {
        let t = e.FindNavTreeInFocusedWindow();
        if (t) {
          k(
            `${e.LogName(t.Window)} Found a focused window; setting this context as active.`,
          ),
            (this.m_ActiveContext = e),
            this.m_ActiveContext.OnActivate(t.Window);
          break;
        }
      }
    }
    return (
      !this.m_ActiveContext &&
        this.m_LastActiveContext &&
        (k(
          `Failed to find an active context, will fall back to ${this.m_LastActiveContext.LogName()}`,
        ),
        (this.m_ActiveContext = this.m_LastActiveContext),
        this.m_ActiveContext.OnActivate(
          this.m_LastActiveContext.m_LastActiveFocusNavTree?.Window,
        )),
      this.m_ActiveContext
    );
  }
  SetShowDebugFocusRing(e) {
    this.m_bShowDebugFocusRing.Set(e), An(e);
  }
  GetShowDebugFocusRing() {
    return this.m_bShowDebugFocusRing;
  }
  RegisterInputSource(e) {
    let t = new ct();
    return (
      this.m_rgGamepadInputSources.push(e),
      t.PushArrayRemove(this.m_rgGamepadInputSources, e),
      t.Push(e.RegisterForGamepadButtonDown(this.OnButtonDown).Unregister),
      t.Push(e.RegisterForGamepadButtonUp(this.OnButtonUp).Unregister),
      t.Push(
        e.RegisterForNavigationTypeChange(this.OnNavigationTypeChange)
          .Unregister,
      ),
      e.SetRepeatAllowed(() => this.m_ActiveContext?.BIsActive() ?? !1),
      t.Push(() => e.SetRepeatAllowed()),
      e.GetSourceType() == 1 && this.UpdateSourceToGamepad(),
      t.GetUnregisterFunc()
    );
  }
  UpdateSourceToGamepad(e = !1) {
    (this.m_navigationSource.Value.eActivationSourceType == 0 || e) &&
      this.m_navigationSource.Set({
        ...this.m_navigationSource.Value,
        eActivationSourceType: 1,
      });
  }
  SetGamepadEventUpdateBatcher(e) {
    this.m_fnGamepadEventUpdateBatcher = e;
  }
  get NavigationSource() {
    return this.m_navigationSource;
  }
  get NavigationSourceSupportsFocus() {
    return this.m_navigationSourceSupportsFocus;
  }
  DispatchVirtualButtonClick(e, t) {
    let n;
    t && (n = this.GetActiveContext() ?? this.FindAnActiveContext()),
      this.OnButtonDown(e, 1, -1, void 0, t, n, !0),
      this.OnButtonUp(e, 1, -1, void 0, t, n, !0);
  }
  DispatchVirtualGamepad(e, t) {
    switch (e) {
      case "vgp_onbuttondown":
        this.OnButtonDown(t.button, t.source, -1, t.is_repeat);
        break;
      case "vgp_onbuttonup":
        this.OnButtonUp(t.button, t.source, -1);
        break;
    }
  }
  BGlobalGamepadButton(e) {
    return e === 27 || e === 28 || e === 2;
  }
  GetEventTarget(e, t, n = !1) {
    let i = this.GetActiveContext();
    !i && n && (i = this.FindAnActiveContext());
    let a = i?.ActiveWindow?.document.activeElement;
    if (i?.m_LastActiveNavTree) {
      if (
        (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
        !i.m_LastActiveNavTree.GetLastFocusedNode() &&
          (t == 1 || t == 2) &&
          (k(
            `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} has no focused node, ${n ? "finding one" : "will not find one"}`,
          ),
          n && i.m_LastActiveNavTree.TakeFocus(0, !0),
          !this.BGlobalGamepadButton(e)))
      )
        return [void 0, i];
      i.m_LastActiveNavTree.GetLastFocusedNode()
        ? (a = i.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
        : k(
            `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
          );
    }
    return [a, i];
  }
  ChangeNavigationSource(e, t) {
    let n = this.m_navigationSource.Value,
      i = n.nLastActiveGamepadIndex;
    return (
      n.nActiveGamepadIndex &&
        n.nActiveGamepadIndex >= 0 &&
        (i = n.nActiveGamepadIndex),
      this.m_navigationSource.Set({
        eActivationSourceType: e,
        nActiveGamepadIndex: t,
        nLastActiveGamepadIndex: i,
      }),
      e != 3 &&
        ze("Browser.HideCursorUntilMouseEvent") &&
        SteamClient.Browser.HideCursorUntilMouseEvent(),
      n.eActivationSourceType != e
    );
  }
  OnButtonActionInternal(e, t, n, i, a, s, r, l) {
    if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t)) {
      e &&
        k(
          "Ignoring button press - gamepad input is suppressed by parent window",
        );
      return;
    }
    Rn(
      !!s == !!r,
      "Must set both overrideContext and overrideElement or neither",
    );
    let u = s,
      c = r;
    if (
      ((u == null || c == null) && ([u, c] = this.GetEventTarget(t, n, e)),
      c?.BIsGamepadInputSuppressed() && !l)
    ) {
      k(
        `Suppressing ${U[t]} input on element ${u?.className} because tree ${c?.m_LastActiveNavTree?.id} has it disabled`,
      );
      return;
    }
    this.ChangeNavigationSource(n, i),
      e && k(`Firing ${U[t]} in tree ${c?.m_LastActiveNavTree?.id} at `, u),
      this.BatchedUpdate(() =>
        $(u, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
          button: t,
          source: n,
          is_repeat: a,
        }),
      );
  }
  OnButtonDown(e, t, n, i, a, s, r) {
    this.OnButtonActionInternal(!0, e, t, n, i, a, s, r);
  }
  OnButtonUp(e, t, n, i, a, s, r) {
    this.OnButtonActionInternal(!1, e, t, n, !1, a, s, r);
  }
  BatchedUpdate(e) {
    this.m_fnGamepadEventUpdateBatcher(e);
  }
  OnNavigationTypeChange(e) {
    if (
      this.ChangeNavigationSource(e, -1) &&
      document.hasFocus() &&
      (e == 3 || e == 4) &&
      this.m_ActiveContext?.m_LastActiveNavTree
    ) {
      let t = this.m_ActiveContext.m_LastActiveNavTree.GetLastFocusedNode(),
        n = Pn(t?.Element) ? t : null;
      this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(2, n);
    }
  }
  NewGamepadNavigationTree(e, t, n) {
    return new Te(this, e, t, n);
  }
  RegisterGamepadNavigationTree(e, t) {
    let n = e.WindowContext;
    n.AddNavTree(e);
    let i = e.MountNavTree(t);
    return (
      !e.Parent &&
        e.BIsEnabled() &&
        (n.SetActiveNavTree(e, !0),
        (this.m_LastActiveContext = this.m_ActiveContext = n)),
      () => {
        i(), n.UnregisterGamepadNavigationTree(e);
      }
    );
  }
  OnGamepadNavigationTreeActivated(e, t = !1) {
    e.WindowContext.SetActiveNavTree(e, t);
  }
  OnGamepadNavigationTreeFocused(e, t, n = !1) {
    let i = e.WindowContext;
    i != this.m_ActiveContext &&
      k(`(${i.LogName(e.Window)}) Focus event in inactive window`),
      e != i.m_LastActiveFocusNavTree &&
        e != i.m_LastActiveNavTree &&
        (i.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
        e.GetParentEmbeddedNavTree() == i.m_LastActiveFocusNavTree
          ? (k(
              `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
            ),
            e.Activate())
          : k(
              `There was a focus event in ${e.id}, but the active nav tree is ${i.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${t && Z[t]}.`,
            ));
  }
  BlurNavTree(e) {
    e.WindowContext.BlurNavTree(e);
  }
  IsActiveFocusNavTree(e) {
    return !!(e && e == this.m_ActiveContext?.m_LastActiveFocusNavTree);
  }
  IsActiveNavTree(e) {
    return !!(e && e == this.m_ActiveContext?.m_LastActiveNavTree);
  }
  BIsInActiveContext(e) {
    return !!(e && e.WindowContext == this.m_ActiveContext);
  }
  RegisterForUnhandledButtonDownEvents(e) {
    return this.m_UnhandledButtonEventsCallbacks.Register(e);
  }
  FireUnhandledGamepadEventCallbacks(e) {
    return this.m_UnhandledButtonEventsCallbacks.CountRegistered()
      ? (this.m_UnhandledButtonEventsCallbacks.Dispatch(e), !1)
      : !0;
  }
  SetSuppressGamepadInput(e) {
    this.m_fnCatchAllGamepadInput = e ? () => !0 : null;
  }
  SetCatchAllGamepadInput(e) {
    this.m_fnCatchAllGamepadInput = e;
  }
  TakeFocusChangingIFrame() {
    window.focus();
    let e =
      this.m_ActiveContext?.m_LastActiveFocusNavTree ||
      this.m_ActiveContext?.m_LastActiveNavTree;
    e && e.TakeFocus(2);
  }
  OnContextActivated(e) {
    (this.m_ActiveContext = e), (this.m_LastActiveContext = e);
  }
  OnContextDeactivated(e, t) {
    t &&
      (this.m_LastActiveContext == e && (this.m_LastActiveContext = void 0),
      this.DestroyContext(e)),
      this.m_ActiveContext == e && (this.m_ActiveContext = void 0);
  }
  BIsRestoringHistory() {
    return this.m_bRestoringHistory;
  }
  async RestoreHistoryTransaction(e) {
    this.m_bRestoringHistory = !0;
    try {
      await e();
    } finally {
      this.m_bRestoringHistory = !1;
    }
  }
};
I([R], ue.prototype, "OnButtonDown", 1),
  I([R], ue.prototype, "OnButtonUp", 1),
  I([R], ue.prototype, "OnNavigationTypeChange", 1);
function Pn(o) {
  if (!ge(o)) return !1;
  let e = o.tagName,
    t = dt(o) ? o.type : void 0;
  return pt(e, t);
}
var Ae = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(e) {
    this.m_node = e;
  }
  TakeFocus(e) {
    return this.m_node.BTakeFocus(e ? 0 : 2, e);
  }
  ParentTakeFocus(e) {
    this.m_node.Parent?.BTakeFocus(e ? 0 : 2, e);
  }
  ChildTakeFocus(e) {
    return this.m_node.BChildTakeFocus(e ? 0 : 2, e);
  }
  FocusVisibleChild(e) {
    return this.m_node.BVisibleChildTakeFocus(e);
  }
  BHasFocus() {
    return this.m_node.BHasFocus();
  }
  BFocusWithin() {
    return this.m_node.BFocusWithin();
  }
  get NavKey() {
    return this.m_node.NavKey;
  }
  PushState() {
    this.m_History || (this.m_History = new Se(this.m_node)),
      this.m_History.PushState();
  }
  PopState(e = 0) {
    this.m_History && this.m_History.PopState(e);
  }
  SaveState(e) {
    this.m_StateHistory || (this.m_StateHistory = new Fe(this.m_node)),
      this.m_StateHistory.SaveState(e);
  }
  RestoreState(e, t = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(e, t) : !1;
  }
  GetFocusSnapshot() {
    return Dt(this.m_node);
  }
  RestoreFocusSnapshot(e, t = 0) {
    return At(this.m_node, e, t);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function Ee(o, e, t, n = 0.001) {
  return o == "x"
    ? e.x + e.width > t.x + n && e.x + n < t.x + t.width
    : o == "y"
      ? e.y + e.height > t.y + n && e.y + n < t.y + t.height
      : (D(!1, `Invalid axis ${o}`), !1);
}
function wt(o, e, t) {
  let n;
  return (
    o == "x"
      ? (n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x))
      : o == "y"
        ? (n = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y))
        : (D(!1, `Invalid axis ${o}`), (n = 0)),
    n < 0 ? 0 : n
  );
}
function Nn(o, e) {
  return o == "x"
    ? { min: e.x, max: e.x + e.width }
    : { min: e.y, max: e.y + e.height };
}
function kt(o, e, t) {
  let n = e[o],
    i = Nn(o, t);
  return n < i.min ? i.min - n : n > i.max ? n - i.max : 0;
}
function xt(o) {
  return { x: o.x, y: o.y };
}
var Lt = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function Gt(o) {
  if (!o) return 0;
  let e = o.ownerDocument.defaultView,
    t = e.getComputedStyle(o);
  if (t.display == "flex")
    switch (t.flexDirection) {
      case "row":
        return t.flexWrap == "wrap" ? 5 : 2;
      case "row-reverse":
        return 4;
      case "column":
        return 1;
      case "column-reverse":
        return 3;
    }
  else {
    if (t.display == "grid") return 5;
    if (o.childElementCount > 0) {
      let n = e.getComputedStyle(o.firstElementChild);
      if (n.float === "left") return 2;
      if (n.float === "right") return 4;
      if (n.display === "inline" || n.display === "inline-block") return 5;
    }
  }
  return 1;
}
function Pe(o) {
  switch (o) {
    case 9:
    case 10:
      return "y";
    case 11:
    case 12:
      return "x";
    default:
      return;
  }
}
function Xe(o, e, t) {
  let n = [],
    [i, a] = o.GetChildren(),
    s = o.GetActiveChild(),
    r,
    l = s ? s.Element?.getBoundingClientRect() : null;
  if (s) {
    let p = Ot(s, e, t);
    if (
      p &&
      !p.offScreen &&
      ((r = Mt(s, p, p.overlap, t)), r && !r.visibility.offScreen)
    )
      return r;
    p && n.push({ child: s, visibility: p });
  }
  let u = t || l;
  for (let p = 0; p < i.length; p++) {
    let d = i[p];
    if (d == s) continue;
    let b = Ot(d, e, u ?? void 0);
    b && n.push({ child: d, visibility: b });
  }
  n.sort(Bt);
  let c;
  for (let p of n) {
    let { child: d, visibility: b } = p;
    if (
      b.offScreen &&
      c &&
      (!c.visibility.offScreen ||
        (b.distance && b.distance > c.visibility.distance))
    )
      break;
    let g = d == s ? r : Mt(d, b, b.overlap || e, u ?? void 0);
    g && (!c || Bt(g, c) < 0) && (c = g);
  }
  return c;
}
function Mt(o, e, t, n) {
  switch (o.GetFocusable()) {
    case "none":
      return;
    case "children":
      return Xe(o, e.overlap || t, n);
    case "self":
      return { child: o, visibility: e };
  }
}
function Bt(o, e) {
  let t = o.visibility,
    n = e.visibility;
  return t.offScreen
    ? n.offScreen
      ? t.distance - n.distance
      : 1
    : n.offScreen
      ? -1
      : t.distance - n.distance;
}
function Ot(o, e, t) {
  let n = o.Element?.getBoundingClientRect(),
    i = o.GetFocusable(),
    a;
  if (i == "none" || !n || !e) return null;
  if (i == "self") {
    if (
      n.top < e.top ||
      n.right > e.right ||
      n.bottom > e.bottom ||
      n.left < e.left
    ) {
      let r = n.top + n.height / 2,
        l = n.left + n.width / 2;
      if (r < e.top) return { offScreen: "top", distance: e.top - r };
      if (l > e.right) return { offScreen: "right", distance: l - e.right };
      if (r > e.bottom) return { offScreen: "bottom", distance: r - e.bottom };
      if (l < e.left) return { offScreen: "left", distance: e.left - l };
    }
    t && (a = ut(n, t));
  } else if (i == "children") {
    let r = o.Element;
    if (!r) return null;
    if (r.scrollHeight > n.height || r.scrollWidth > n.width) {
      let l = r.ownerDocument.defaultView.getComputedStyle(r);
      if (l.overflowX == "visible" || l.overflowY == "visible")
        return { overlap: e };
    }
    if (n.bottom < e.top)
      return { offScreen: "top", distance: e.top - n.bottom };
    if (n.left > e.right)
      return { offScreen: "right", distance: n.left - e.right };
    if (n.top > e.bottom)
      return { offScreen: "bottom", distance: n.top - e.bottom };
    if (n.right < e.left)
      return { offScreen: "left", distance: e.left - n.right };
  }
  return {
    overlap: {
      top: Math.max(n.top, e.top),
      right: Math.min(n.right, e.right),
      bottom: Math.min(n.bottom, e.bottom),
      left: Math.max(n.left, e.left),
    },
    distance: a,
  };
}
function Ht(o) {
  return o != null && o.focus !== void 0;
}
function Ne(o) {
  let e;
  return o && (e = o.ownerDocument.defaultView), e;
}
function Wt(o, e) {
  let t = o?.parentElement;
  for (; t; ) {
    if (Ht(t)) {
      if (!e || e == "x") {
        let n = window.getComputedStyle(t);
        if (
          n.overflowX == "scroll" ||
          n.overflowX == "auto" ||
          n.position == "fixed"
        )
          break;
      }
      if (!e || e == "y") {
        let n = window.getComputedStyle(t);
        if (
          n.overflowY == "scroll" ||
          n.overflowY == "auto" ||
          n.position == "fixed"
        )
          break;
      }
    }
    t = t.parentElement;
  }
  return Ht(t) ? t : null;
}
function je(o, e) {
  if (!("ownerDocument" in o)) return !0;
  let t = o.ownerDocument.defaultView.getComputedStyle(o),
    n = e === "x" ? t.overflowX : t.overflowY;
  return n === "auto" || n === "scroll";
}
var Ut =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
function ni(o) {
  return o.querySelector(Ut);
}
function oi(o) {
  return [...o.querySelectorAll(Ut)];
}
var we = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(e, t) {
      (this.m_window = e), (this.m_options = { timing: "sine", ...t });
    }
    Start() {
      (this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
      let e;
      switch (this.m_options.timing) {
        case "linear":
          e = function (t) {
            return t;
          };
          break;
        case "cubic-in-out":
          e = function (t) {
            return t < 0.5
              ? 4 * t * t * t
              : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          };
          break;
        case "sine":
        default:
          e = function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          };
          break;
      }
      (this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
        this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    BIsActive() {
      return this.m_bActive;
    }
    End() {
      if (this.m_bActive) {
        try {
          this.Update(1);
        } catch {}
        this.ClearInterval(), this.FireOnComplete();
      }
    }
    FireOnComplete() {
      this.m_options.onComplete && this.m_options.onComplete();
    }
    Cancel() {
      this.m_bActive = !1;
    }
    OnInterval(e) {
      if (!this.m_bActive) return;
      let t = performance.now() - this.m_msStart,
        n = !1;
      if (t >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let i = t / this.m_options.msDuration;
      try {
        this.Update(e(i));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  ke = class extends we {
    m_fnCallback;
    constructor(e, t, n) {
      super(e, t), (this.m_fnCallback = n);
    }
    Update(e) {
      this.m_fnCallback(e);
    }
  },
  xe = class extends we {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(e, t, n) {
      super("ownerDocument" in e ? Ne(e) : e, n),
        (this.m_object = e),
        (this.m_propTargets = t);
    }
    Start() {
      this.m_props = {};
      for (let e in this.m_propTargets) {
        let t = parseFloat(this.m_object[e]) || 0,
          n = this.m_propTargets[e];
        t != n && (this.m_props[e] = { start: t, end: n });
      }
      super.Start();
    }
    Update(e) {
      for (let t in this.m_props) {
        let n = this.m_props[t],
          i = n.start + (n.end - n.start) * e;
        this.m_object[t] = i;
      }
    }
  };
var O = new _("ScrollSnap").Debug,
  kn = !1;
var xn = 1.4,
  Ye,
  Ln = 500;
function zt(o, e) {
  let t = o.Element;
  if (!t) return;
  let n = [{ node: o, eScrollType: o.m_Properties?.scrollIntoViewType }];
  for (let i = o.Parent; i; i = i.Parent) {
    let a = i.m_Properties?.scrollIntoViewWhenChildFocused,
      s = i.m_Properties?.scrollIntoViewType;
    if (a) {
      let r = { node: i, eScrollType: s };
      a === "force" ? (n = [r]) : n.push(r);
    }
    if (s !== void 0)
      for (let r = n.length - 1; r >= 0 && n[r].eScrollType === void 0; r--)
        n[r].eScrollType = s;
  }
  for (; n.length; ) {
    let { node: i, eScrollType: a } = n.pop(),
      s = n.length == 0;
    if (
      (a === void 0 && (kn ? (a = 1) : (a = 0)),
      i?.m_Properties?.fnScrollIntoViewHandler &&
        i.m_Properties.fnScrollIntoViewHandler(o, e, i) !== !1)
    )
      continue;
    let r = i.m_element,
      l = a == 1 || a == 2 || !s;
    if (!e)
      O("No previous element for scrolling, will jump"),
        l
          ? Me(t, r, "auto")
          : r?.scrollIntoView({
              behavior: "auto",
              block: "nearest",
              inline: "nearest",
            });
    else {
      let u = l ? de(r) : r.getBoundingClientRect(),
        c = !1,
        p = Math.max((u.bottom - u.top) * xn, 40),
        d = Ye && performance.now() - Ye < Ln;
      (d ||
        u.bottom < -p ||
        u.top > r.ownerDocument.defaultView.innerHeight + p) &&
        ((c = !0),
        d ||
          O(
            `Disabling smooth scrolling, ${u.bottom} < ${-p}, ${u.top} > ${r.ownerDocument.defaultView.innerHeight} + ${p} `,
          ));
      let b = c ? "auto" : "smooth";
      c && (Ye = performance.now()),
        o.Tree.Controller.BIsRestoringHistory() && (b = "auto"),
        l ? Me(t, r, b) : r.scrollIntoView({ behavior: b, block: "nearest" });
    }
  }
}
function de(o) {
  if (!o) return { left: 0, top: 0, right: 0, bottom: 0 };
  if (!("ownerDocument" in o))
    return { left: 0, right: o.innerWidth, top: 0, bottom: o.innerHeight };
  let e = 0,
    t = 0,
    n = o;
  for (
    ;
    n &&
    ((e += n.offsetTop),
    (t += n.offsetLeft),
    !("ownerDocument" in n && window.getComputedStyle(n).position === "fixed"));
  )
    n = n.offsetParent;
  for (n = o?.parentElement; n; ) {
    let { scrollTop: i, scrollLeft: a } = On(n);
    if (
      ((e -= i),
      (t -= a),
      "ownerDocument" in n && window.getComputedStyle(n).position === "fixed")
    )
      break;
    n = n.parentElement;
  }
  return {
    left: t,
    top: e,
    right: t + o.offsetWidth,
    bottom: e + o.offsetHeight,
  };
}
function Qe(o, e) {
  return e == "x"
    ? [o.left, o.right, o.right - o.left]
    : [o.top, o.bottom, o.bottom - o.top];
}
function Vt(o, e, t, n) {
  let [i, a, s] = Qe(o, n),
    [r, l, u] = Qe(e, n),
    [c, p] = Qe(t, n);
  if (i < r && a > l) return 0;
  let d = i - c,
    b = a + p,
    g = s > u;
  return (d < r && !g) || (b > l && g)
    ? d - r
    : (d < r && g) || (b > l && !g)
      ? b - l
      : 0;
}
function V(o) {
  return o == "auto"
    ? 0
    : o.endsWith("px")
      ? parseInt(o)
      : (console.log("Unsupported length", o), 0);
}
function Gn(o) {
  let e;
  return (
    "ownerDocument" in o
      ? (e = o.ownerDocument.defaultView.getComputedStyle(o))
      : (e = o.document.defaultView.getComputedStyle(
          window.document.documentElement,
        )),
    {
      left: V(e.scrollPaddingLeft),
      right: V(e.scrollPaddingRight),
      top: V(e.scrollPaddingTop),
      bottom: V(e.scrollPaddingBottom),
    }
  );
}
function Mn(o) {
  if (!("ownerDocument" in o)) return { left: 0, right: 0, top: 0, bottom: 0 };
  let e = o.ownerDocument.defaultView.getComputedStyle(o);
  return {
    left: V(e.scrollMarginLeft),
    right: V(e.scrollMarginRight),
    top: V(e.scrollMarginTop),
    bottom: V(e.scrollMarginBottom),
  };
}
function Bn(o, e) {
  let t = Gn(o);
  return {
    left: Math.max(0, e.left + t.left),
    right: Math.max(0, e.right - t.right),
    top: Math.max(0, e.top + t.top),
    bottom: Math.max(0, e.bottom - t.bottom),
  };
}
function Le(o) {
  return o > -1 && o < 1;
}
function Me(o, e, t, n, i) {
  O(
    "----------------------------------------------------------------------------------",
  ),
    O("Scrolling Into View:", e);
  let a = [],
    s = e,
    r = de(e),
    l = i ?? Number.MAX_VALUE;
  for (; s; ) {
    let c = Wt(s);
    c || (c = Ne(s));
    let p = Mn(s),
      d = de(c),
      b = Bn(c, d),
      g = Kt(c),
      v = { element: c, left: 0, top: 0 };
    if (
      (O(
        "Checking scroll div",
        c,
        `scroll y:${g.scrollTop} of ${g.MaxScrollTop()}, x:${g.scrollLeft} of ${g.MaxScrollLeft()}, adjusted =>`,
        b,
        "target => ",
        r,
      ),
      (!n || n == "y") &&
        je(c, "y") &&
        ((v.top = Vt(r, b, p, "y")),
        (v.top = re.Clamp(v.top, -g.scrollTop, g.MaxScrollTop() - g.scrollTop)),
        i &&
          ((v.top = Math.min(l, Math.abs(v.top)) * (v.top < 0 ? -1 : 1)),
          (l -= Math.abs(v.top))),
        O(`- checked y: ${v.top}`)),
      (!n || n == "x") &&
        je(c, "x") &&
        ((v.left = Vt(r, b, p, "x")),
        (v.left = re.Clamp(
          v.left,
          -g.scrollLeft,
          g.MaxScrollLeft() - g.scrollLeft,
        )),
        i &&
          ((v.left = Math.min(l, Math.abs(v.left)) * (v.left < 0 ? -1 : 1)),
          (l -= Math.abs(v.left))),
        O(`- checked x: ${v.left}`)),
      a.push(v),
      (i && !l) || !("ownerDocument" in c))
    )
      break;
    let F = window.getComputedStyle(c);
    if (F.position === "fixed" || F.position === "sticky") break;
    (s = c),
      (r = {
        top: r.top - v.top,
        right: r.right - v.left,
        bottom: r.bottom - v.top,
        left: r.left - v.left,
      });
  }
  let u = !1;
  for (let c of a) {
    if (Le(c.left) && Le(c.top)) continue;
    let p = Kt(c.element),
      d = p.scrollTop + c.top,
      b = p.scrollLeft + c.left;
    (b = re.Clamp(b, 0, p.MaxScrollLeft())),
      (d = re.Clamp(d, 0, p.MaxScrollTop())),
      !(Le(p.scrollLeft - b) && Le(p.scrollTop - d)) &&
        (p.scrollTo({ left: b, top: d, behavior: t }),
        u || (O("Scrolling:"), (u = !0)),
        O(`- ${c.top},${c.left} => ${d}, ${b}, behavior: ${t}`, c.element));
  }
}
var Ge = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(e) {
    "ownerDocument" in e
      ? ((this.m_element = e),
        (this.m_fnOriginalScrollTo = e.scrollTo),
        (this.m_element.scrollTo = (t, n) => {
          typeof t == "number"
            ? this.scrollTo({ left: t, top: n })
            : this.scrollTo(t);
        }))
      : ((this.m_window = e), (this.m_element = e.document.documentElement));
  }
  ResetScrollState() {
    (this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = "");
  }
  scrollTo(e) {
    if (e?.behavior != "smooth")
      this.m_animation &&
        (this.m_animation.Cancel(), (this.m_animation = void 0)),
        this.m_window
          ? this.m_window.scrollTo(e)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [e]),
        this.ResetScrollState();
    else {
      let t = e.left ?? this.scrollLeft,
        n = e.top ?? this.scrollTop,
        i = "sine";
      if (
        (this.m_animation && (this.m_animation.Cancel(), (i = "linear")),
        Math.max(
          Math.abs(this.currentScrollTop - n),
          Math.abs(this.currentScrollLeft - t),
        ) > 0)
      ) {
        let r = {
          msDuration: 200,
          timing: i,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let l = this.currentScrollLeft,
            u = this.currentScrollTop;
          this.m_animation = new ke(this.m_window, r, (c) => {
            this.m_window?.scrollTo({
              left: l + (t - l) * c,
              top: u + (n - u) * c,
              behavior: "auto",
            });
          });
        } else
          (this.m_element.style.scrollSnapType = "initial"),
            (this.m_animation = new xe(
              this.m_element,
              { scrollTop: n, scrollLeft: t },
              r,
            ));
        (this.m_scrollLeftTarget = t),
          (this.m_scrollTopTarget = n),
          this.m_animation.Start();
      }
    }
  }
  get clientWidth() {
    return this.m_window
      ? this.m_window.innerWidth
      : this.m_element.clientWidth;
  }
  get clientHeight() {
    return this.m_window
      ? this.m_window.innerHeight
      : this.m_element.clientHeight;
  }
  get currentScrollLeft() {
    return this.m_window ? this.m_window.scrollX : this.m_element.scrollLeft;
  }
  get currentScrollTop() {
    return this.m_window ? this.m_window.scrollY : this.m_element.scrollTop;
  }
  get scrollLeft() {
    return this.m_scrollLeftTarget ?? this.currentScrollLeft;
  }
  get scrollTop() {
    return this.m_scrollTopTarget ?? this.currentScrollTop;
  }
  get scrollWidth() {
    return this.m_element.scrollWidth;
  }
  get scrollHeight() {
    return this.m_element.scrollHeight;
  }
  MaxScrollTop() {
    return this.scrollHeight - this.clientHeight;
  }
  MaxScrollLeft() {
    return this.scrollWidth - this.clientWidth;
  }
};
I([R], Ge.prototype, "ResetScrollState", 1);
var Je = new WeakMap();
function Kt(o) {
  let e = Je.get(o);
  return e || ((e = new Ge(o)), Je.set(o, e)), e;
}
function On(o) {
  let e = Je.get(o);
  return e
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: o.scrollLeft, scrollTop: o.scrollTop };
}
var K = new _("FocusNavigationMovement").Debug,
  Re = ((r) => (
    (r[(r.NONE = 0)] = "NONE"),
    (r[(r.COLUMN = 1)] = "COLUMN"),
    (r[(r.ROW = 2)] = "ROW"),
    (r[(r.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
    (r[(r.ROW_REVERSE = 4)] = "ROW_REVERSE"),
    (r[(r.GRID = 5)] = "GRID"),
    (r[(r.GEOMETRIC = 6)] = "GEOMETRIC"),
    r
  ))(Re || {}),
  $t = ((a) => (
    (a[(a.FIRST = 0)] = "FIRST"),
    (a[(a.LAST = 1)] = "LAST"),
    (a[(a.MAINTAIN_X = 2)] = "MAINTAIN_X"),
    (a[(a.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
    (a[(a.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD"),
    a
  ))($t || {});
var qt = ((n) => (
    (n[(n.INVALID = 0)] = "INVALID"),
    (n[(n.FORWARD = 1)] = "FORWARD"),
    (n[(n.BACKWARD = 2)] = "BACKWARD"),
    n
  ))(qt || {}),
  te = class te {
    m_Tree;
    m_Parent;
    m_rgChildren = [];
    m_ActiveChild;
    m_iLastActiveChildIndex = -1;
    m_Properties;
    m_element;
    m_FocusRing;
    m_bChildrenSorted = !1;
    m_bAutoFocusChild = !1;
    m_bMounted = !1;
    m_nDepth;
    m_bFocused = !1;
    m_FocusCallbackList = new f();
    m_bFocusWithin = !1;
    m_FocusWithinCallbackList = new f();
    m_ActionDescriptionsChangedCallbackList = new f();
    m_RetainFocusParent = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(e, t, n) {
      (this.m_Tree = e),
        (this.m_Parent = t),
        (this.m_FocusRing = n),
        (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
    }
    CreateHandle() {
      return new Ae(this);
    }
    get Tree() {
      return this.m_Tree;
    }
    get NavKey() {
      return this.m_Properties?.navKey
        ? this.m_Properties.navKey
        : this.m_element?.id
          ? this.m_element.id
          : void 0;
    }
    get Element() {
      return this.m_element;
    }
    get Parent() {
      return this.m_Parent;
    }
    SetProperties(e) {
      let t = !Ct(
          this.m_Properties?.actionDescriptionMap,
          e?.actionDescriptionMap,
        ),
        n = this.m_Properties?.retainFocus,
        i = this.m_Properties?.noFocusRing;
      (this.m_Properties = e || {}),
        t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.retainFocus && !n
          ? this.PropagateRetainFocusParentToChildren(this)
          : !this.m_Properties.retainFocus &&
            n &&
            this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
        this.m_Properties.noFocusRing && !i && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(2, this, this)
          : !this.m_Properties.noFocusRing &&
            i &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(2, this, this),
        this.m_element && this.RegisterDOMEvents();
    }
    BWantsAutoFocus() {
      return this.m_Properties?.autoFocus || this.m_bAutoFocusChild;
    }
    BWantsPreferredFocus() {
      return this.m_Properties?.preferredFocus;
    }
    BWantsFocusRing() {
      return (
        !this.m_Properties?.noFocusRing ||
        this.m_Tree.Controller.GetShowDebugFocusRing().Value
      );
    }
    GetBoundingRect() {
      return this.m_element && this.m_element.getBoundingClientRect();
    }
    SetHasFocus(e) {
      e != this.m_bFocused &&
        ((this.m_bFocused = e),
        this.m_FocusCallbackList.Dispatch(this.m_bFocused));
    }
    SetFocusWithin(e) {
      e != this.m_bFocusWithin &&
        ((this.m_bFocusWithin = e),
        this.m_FocusWithinCallbackList.Dispatch(this.m_bFocusWithin),
        this.m_Properties?.onFocusWithin &&
          this.m_Properties.onFocusWithin(this.m_bFocusWithin));
    }
    BHasFocus() {
      return this.m_bFocused;
    }
    BFocusWithin() {
      return this.m_bFocusWithin;
    }
    get FocusCallbackList() {
      return this.m_FocusCallbackList;
    }
    get FocusWithinCallbackList() {
      return this.m_FocusWithinCallbackList;
    }
    ForceMeasureFocusRing() {
      this.m_FocusRing?.OnForceMeasureFocusRing();
    }
    get ActionDescriptionChangedCallbackList() {
      return this.m_ActionDescriptionsChangedCallbackList;
    }
    GetActiveActionDescriptions() {
      return this.BuildConsolidatedActionDescriptionMap({});
    }
    BuildConsolidatedActionDescriptionMap(e) {
      let t = this.m_Properties?.actionDescriptionMap;
      if (t)
        for (let n in t) {
          let i = n;
          e[i] === void 0 && (e[i] = t[i]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(e)
        : e;
    }
    AddChild(e) {
      this.m_rgChildren.push(e),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.retainFocus
          ? e.SetRetainFocusParent(this)
          : this.m_RetainFocusParent &&
            e.SetRetainFocusParent(this.m_RetainFocusParent),
        this.m_bMounted &&
          e.BFocusWithin() &&
          (D(
            !this.m_ActiveChild && this.BFocusWithin(),
            "Invalid focus state in AddChild",
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1));
    }
    OnMount(e) {
      (this.m_element = e),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : D(this == this.m_Tree.Root, "Only root should have no parent"),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents();
      let t = this.m_RetainFocusParent && this.m_RetainFocusParent.BHasFocus(),
        n = this.m_Properties?.autoFocus || t;
      if (this.BWantsAutoFocus() || n) {
        let i = -1;
        this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (i = this.m_rgChildren.findIndex((a) => a.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || n || i !== -1) &&
            (this.SetActiveChild(i),
            !this.m_Parent || this.m_Parent.m_element
              ? t
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_RetainFocusParent,
                    { bFocusDescendant: !0 },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0));
      } else if (this.m_rgChildren.length) {
        let i = this.m_rgChildren.findIndex((a) => a.BFocusWithin());
        i != -1 &&
          (this.SetActiveChild(i),
          D(
            this.m_bFocusWithin,
            "Child has focus, we should be m_bFocusWithin",
          ));
      }
    }
    DEV_SetDebugPropsOnElement() {}
    OnUnmount() {
      this.m_Properties?.retainFocus &&
        this.PropagateRetainFocusParentToChildren(this.m_RetainFocusParent),
        (this.m_bMounted = !1);
      let e = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      (this.m_bFocused || e) &&
        (K(
          `The focused node is unmounting, ${this.m_RetainFocusParent ? "will transfer to retain focus ancestor" : "will blur"}.`,
        ),
        e && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_RetainFocusParent
          ? this.m_RetainFocusParent.OnFocusedDecendantRemoved(this)
          : this.m_bFocused && this.m_Tree.TransferFocus(2, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : D(this == this.m_Tree.Root, "Only root should have no parent");
    }
    RegisterDOMEvents() {
      !this.m_rgNavigationHandlers.length &&
        this.m_element &&
        (this.m_rgChildren.length >= 2 ||
          this.m_Properties?.layout != 0 ||
          this.m_Properties.onMoveUp ||
          this.m_Properties.onMoveRight ||
          this.m_Properties.onMoveDown ||
          this.m_Properties.onMoveLeft) &&
        this.m_rgNavigationHandlers.push(
          ye(this.m_element, this.OnNavigationEvent),
        ),
        (this.m_Properties?.focusable ||
          this.m_Properties?.focusableIfNoChildren ||
          this.m_rgChildren.length == 0) &&
          (this.m_rgFocusHandlers.length ||
            (this.m_element?.addEventListener("focus", this.OnDOMFocus),
            this.m_element?.addEventListener("blur", this.OnDOMBlur),
            this.m_rgFocusHandlers.push(() => {
              this.m_element?.removeEventListener("focus", this.OnDOMFocus),
                this.m_element?.removeEventListener("blur", this.OnDOMBlur);
            })));
    }
    RemoveChild(e) {
      let t = this.m_rgChildren.indexOf(e);
      D(t !== -1, "Child was not found to remove"),
        t !== -1 &&
          (this.m_ActiveChild == e && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(t, 1));
    }
    UnregisterDOMEvents() {
      this.m_rgNavigationHandlers.forEach((e) => e()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((e) => e()),
        (this.m_rgFocusHandlers = []);
    }
    GetActiveDescendant() {
      let e = this.GetActiveChild();
      return e ? e.GetActiveDescendant() : this;
    }
    IsValidChildIndex(e) {
      return e >= 0 && e < this.m_rgChildren.length;
    }
    GetActiveChild() {
      return this.m_ActiveChild
        ? this.m_ActiveChild
        : (this.EnsureChildrenSorted(),
          this.IsValidChildIndex(this.m_iLastActiveChildIndex)
            ? this.m_rgChildren[this.m_iLastActiveChildIndex]
            : null);
    }
    GetActiveChildIndex() {
      if (this.m_ActiveChild) {
        if (
          this.IsValidChildIndex(this.m_iLastActiveChildIndex) &&
          this.m_rgChildren[this.m_iLastActiveChildIndex] == this.m_ActiveChild
        )
          return this.m_iLastActiveChildIndex;
        this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
          this.m_ActiveChild,
        );
      }
      return this.m_iLastActiveChildIndex;
    }
    EnsureChildrenSorted(e = !1) {
      (!this.m_bChildrenSorted || e) &&
        (this.m_rgChildren.sort((t, n) => {
          let i = t.m_element,
            a = n.m_element;
          if (i) {
            if (!a) return -1;
          } else return a ? 1 : 0;
          let s = i.compareDocumentPosition(a);
          return s & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : s & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 0;
        }),
        this.m_ActiveChild &&
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(
            this.m_ActiveChild,
          )),
        (this.m_bChildrenSorted = !0));
    }
    GetLastFocusElement() {
      let e = this.GetActiveChild();
      return e ? e.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(e) {
      if (!this.m_bFocused) {
        if (this.GetFocusable() == "children") {
          let t = this.FindFocusableDescendant();
          if (t && t !== this) {
            K(
              "Browser gave node focus but we are marked focusableIfNoChildren, transfering focus to descendant.",
              this.m_element,
              t.m_element,
            ),
              this.m_Tree.TransferFocus(3, t);
            return;
          }
        }
        this.m_Tree.TransferFocus(3, this);
      }
    }
    OnDOMBlur(e) {
      this.m_bFocused &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(3, null);
    }
    UpdateParentActiveChild() {
      this.m_Parent &&
        (this.m_Parent.SetActiveChild(this),
        this.m_Parent.UpdateParentActiveChild());
    }
    GetFocusable() {
      let {
        focusable: e,
        focusableIfNoChildren: t,
        childFocusDisabled: n,
        fnCanTakeFocus: i,
      } = this.m_Properties;
      return !this.m_bMounted || (i && !i(this))
        ? "none"
        : e || (t && (n || this.m_rgChildren.length == 0))
          ? "self"
          : !n && this.m_rgChildren.length
            ? "children"
            : "none";
    }
    BTakeFocus(e, t) {
      let n = this.FindFocusableNode(t);
      return this.InternalFocusDescendant(n, e, t);
    }
    FindFocusableNode(e, t) {
      switch (this.GetFocusable()) {
        case "none":
          return null;
        case "self":
          return this;
        case "children":
          return this.FindFocusableDescendant(e, t);
      }
    }
    BChildTakeFocus(e, t) {
      let n = this.FindFocusableDescendant(t);
      return this.InternalFocusDescendant(n, e, t);
    }
    BFocusFirstChild(e) {
      let t = this.FindNextFocusableChildInDirection(-1, 1, 0);
      return this.InternalFocusDescendant(t, e);
    }
    BFocusLastChild(e) {
      let t = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        0,
      );
      return this.InternalFocusDescendant(t, e);
    }
    FindFocusableDescendant(e, t) {
      let n = Pe(e),
        { focusableIfNoChildren: i, childFocusDisabled: a } =
          this.m_Properties ?? {};
      if (a) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: s, resetNavOnEntry: r } =
            this.m_Properties ?? {},
          l = this.GetActiveChildIndex();
        if ((r && e !== void 0 && (l = -1), !this.IsValidChildIndex(l))) {
          let c = this.GetLayout();
          l >= this.m_rgChildren.length || c == 4 || c == 3 || s == 1
            ? (l = this.m_rgChildren.length - 1)
            : (l = 0);
        }
        let u;
        if ((s == 2 || s == 3 || t) && n) {
          let c;
          s == 2 ? (c = "x") : s == 3 && (c = "y");
          let p;
          c == J[n] &&
            (p =
              this.m_Tree.GetLastFocusedMovementRect(J[n]) ??
              this.m_Tree.GetLastFocusedNode()?.GetBoundingRect()),
            K(
              `Taking focus while preserving ${s && $t[s]} preserved: ${c} movement: ${n}, node:`,
              p || t,
            );
          let d = this.ComputeRelativeDirection(e, 5);
          if (p || t) {
            let b = d == 2 ? this.m_rgChildren.length - 1 : 0;
            u = this.FindClosestChildInNextAxiallyAlignedSet(
              c || J[n],
              d,
              e,
              p || t,
              b,
              this.m_rgChildren[b].GetBoundingRect(),
            );
          } else if (c != J[n]) {
            let b = d == 2 ? this.m_rgChildren.length : -1;
            u = this.FindNextFocusableChildInDirection(b, d, e);
          }
        } else if (s == 4) {
          for (let c of this.m_rgChildren)
            if (
              ((u = c.BWantsPreferredFocus() ? c.FindFocusableNode(e) : void 0),
              u)
            )
              return u;
        } else
          s == 1 && (u = this.FindNextFocusableChildInDirection(l + 1, 2, e));
        return (
          u || (u = this.FindNextFocusableChildInDirection(l - 1, 1, e)),
          u || (u = this.FindNextFocusableChildInDirection(l, 2, e)),
          u || (i ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(e) {
      let t = this.Element?.ownerDocument?.defaultView ?? window,
        n = { top: 0, left: 0, right: t.innerWidth, bottom: t.innerHeight },
        i = Xe(this, n);
      return (
        K(
          `Focusing visible child, best child match is ${i?.child?.Element?.className} - ${JSON.stringify(i?.visibility)}`,
        ),
        i ? i.child.BTakeFocus(e) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : Gt(this.m_element);
    }
    OnNavigationEvent(e) {
      let t = e.detail.button;
      if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: i,
          onMoveRight: a,
          onMoveDown: s,
          onMoveLeft: r,
        } = this.m_Properties ?? {},
        l = !1;
      switch (t) {
        case 9:
          i && (l = i(e.detail, this));
          break;
        case 12:
          a && (l = a(e.detail, this));
          break;
        case 10:
          s && (l = s(e.detail, this));
          break;
        case 11:
          r && (l = r(e.detail, this));
          break;
      }
      return l;
    }
    InternalFocusDescendant(e, t, n) {
      return e ? (this.m_Tree.TransferFocus(t, e, Pe(n)), !0) : !1;
    }
    BTryInternalNavigation(e, t) {
      let n = this.GetLayout(),
        i = this.ComputeRelativeDirection(e, n);
      if (
        (K(
          `Handling navigation event ${U[e]} - ${Re[n]} - ${qt[i]}`,
          this.m_element,
        ),
        i == 0)
      )
        return !1;
      if (this.m_Properties?.focusable && this.m_bFocused)
        return K("Skipping navigation within focused element"), !1;
      this.EnsureChildrenSorted(!0);
      let a;
      if (n == 5)
        a = this.FindNextFocusableChildInGrid(this.GetActiveChildIndex(), i, e);
      else {
        let s = this.GetActiveChildIndex();
        this.IsValidChildIndex(s) ||
          (s = i == 1 ? -1 : this.m_rgChildren.length),
          (a = this.FindNextFocusableChildInDirection(s, i, e));
      }
      if (a) {
        let s = Pe(e);
        if (this.GetScrollIntoViewType() == 2) {
          let r = a.Element?.ownerDocument.defaultView;
          if (r) {
            let l =
                (s == "y" ? r.innerHeight : r.innerWidth) / (t ? 4.5 : 3.33),
              u = de(a.Element),
              c = !1;
            if (
              (s == "y"
                ? i == 1
                  ? (c = u.top > r.innerHeight && u.bottom > r.innerHeight + l)
                  : i == 2 && (c = u.bottom < 0 && u.top < -l)
                : s == "x" &&
                  (i == 1
                    ? (c = u.left > r.innerWidth && u.right > r.innerWidth + l)
                    : i == 2 && (c = u.right < 0 && u.left < -l)),
              c)
            )
              return (
                K(`Element too far away, scrolling ${l} on ${s} axis `),
                Me(a.Element, a.Element, "smooth", s, l),
                !0
              );
          }
        }
        return this.m_Tree.TransferFocus(0, a, s), !0;
      } else return !1;
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(e) {
      return this.ComputeRelativeDirection(e, this.GetLayout());
    }
    ComputeRelativeDirection(e, t) {
      let n = t == 4 || t == 3;
      switch (t) {
        case 2:
        case 4:
          switch (e) {
            case 11:
              return n ? 1 : 2;
            case 12:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (e) {
            case 9:
              return n ? 1 : 2;
            case 10:
              return n ? 2 : 1;
            default:
              return 0;
          }
        case 5:
          switch (e) {
            case 11:
            case 9:
              return n ? 1 : 2;
            case 12:
            case 10:
              return n ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(e, t) {
      return e + (t == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(e, t, n) {
      let i = t == 1 ? 1 : -1;
      for (let a = e + i; a >= 0 && a < this.m_rgChildren.length; a += i) {
        let s = this.m_rgChildren[a].FindFocusableNode(n);
        if (s) return s;
      }
      return null;
    }
    ScanChildren(e, t, n) {
      let i = t == 1 ? 1 : -1;
      for (let a = e; a >= 0 && a < this.m_rgChildren.length; a += i)
        if (n(this.m_rgChildren[a], a)) return a;
      return -1;
    }
    FindNextFocusableChildInGrid(e, t, n) {
      let i = n == 9 || n == 10,
        a = this.GetLastFocusElement();
      if (!a || a == this.m_element)
        return (
          D(
            !1,
            "No active child for grid navigation",
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            a,
          ),
          this.FindFocusableDescendant(n)
        );
      let s = this.GetActiveDescendant().GetBoundingRect();
      if (n == 9 || n == 10) {
        let r =
          this.m_Tree.GetLastFocusedMovementRect("x") ??
          this.m_Tree.GetLastFocusedNode()?.GetBoundingRect();
        r && ((s.x = r.x), (s.width = r.width));
      }
      if (i) {
        let r = e;
        for (; r != -1; ) {
          let l = this.ScanChildren(
            this.AdvanceIndex(r, t),
            t,
            (u) => !Ee("y", s, u.GetBoundingRect()),
          );
          if (l != -1) {
            let u = this.m_rgChildren[l].GetBoundingRect(),
              c = this.FindClosestChildInNextAxiallyAlignedSet(
                "x",
                t,
                n,
                s,
                l,
                u,
              );
            if (c) return c;
          }
          r = l;
        }
      } else {
        let r = t == 1 ? 1 : -1;
        for (
          let l = this.AdvanceIndex(e, t);
          l >= 0 && l < this.m_rgChildren.length;
          l += r
        ) {
          let u = this.m_rgChildren[l];
          if (!Ee("y", s, u.GetBoundingRect())) return null;
          let c = u.FindFocusableNode(n);
          if (c) return c;
        }
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(e, t, n, i, a, s) {
      (!a || a < 0) && (a = 0);
      let r = [];
      if (!i) return null;
      let l = xt(i);
      this.ScanChildren(a, t, (u) => {
        let c = u.GetBoundingRect();
        return c
          ? s && !Ee(J[e], s, c)
            ? !0
            : (r.push({ child: u, overlap: wt(e, i, c), dist: kt(e, l, c) }),
              !1)
          : !1;
      }),
        t == 2 && r.reverse(),
        r.sort((u, c) => {
          let p = c.overlap - u.overlap;
          return p != 0 ? p : u.dist - c.dist;
        });
      for (let { child: u } of r) {
        let c = u.FindFocusableNode(n, i);
        if (c) return c;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(e) {
      e instanceof te
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = e),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(e)))
        : (this.IsValidChildIndex(e) &&
            (this.m_ActiveChild = this.m_rgChildren[e]),
          (this.m_iLastActiveChildIndex = e));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetRetainFocusParent(e) {
      (this.m_RetainFocusParent = e),
        this.m_Properties?.retainFocus ||
          this.PropagateRetainFocusParentToChildren(e);
    }
    PropagateRetainFocusParentToChildren(e) {
      for (let t = 0; t < this.m_rgChildren.length; t++)
        this.m_rgChildren[t].SetRetainFocusParent(e);
    }
    OnFocusedDecendantRemoved(e) {
      this.m_Tree.DeferredFocus.RequestFocus(this, { bFocusDescendant: !0 });
    }
    SetDOMFocusAndScroll(e, t) {
      this.UpdateParentActiveChild(),
        this.m_Tree.BIsActiveFocus()
          ? (D(
              !this.m_Tree.BUseVirtualFocus(),
              "Virtual focus tree should not have browser focus",
            ),
            this.m_element?.focus({ preventScroll: !0 }))
          : this.m_Tree.BUseVirtualFocus() ||
            K(
              `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
            ),
        zt(this, t),
        this.m_Tree.OnChildActivated(e);
    }
  };
I([R], te.prototype, "OnDOMFocus", 1),
  I([R], te.prototype, "OnDOMBlur", 1),
  I([R], te.prototype, "OnNavigationEvent", 1);
var ce = te;
var T = y(W(), 1);
var pe = y(gn(), 1),
  S = y(W(), 1),
  We = y(W(), 1);
var Ze = class {
    m_fnCallbackOnPlaySound = new f();
    RegisterCallbackOnPlaySound(e) {
      return this.m_fnCallbackOnPlaySound.Register(e);
    }
    PlayNavSound(e, t) {
      this.m_fnCallbackOnPlaySound.Dispatch(e, t);
    }
  },
  Xt = new Ze();
var oe = y(W());
var et = y(W(), 1);
var Wn = y(E(), 1),
  Hn = new _("GamepadEvents").Debug;
function ne(o, e, t) {
  t === void 0 &&
    (t = [
      o.onButtonDown,
      o.onButtonUp,
      o.onOKButton,
      o.onCancelButton,
      o.onSecondaryButton,
      o.onOptionsButton,
      o.onMenuButton,
      o.onGamepadDirection,
      o.onGamepadFocus,
      o.onGamepadBlur,
    ]),
    et.default.useEffect(() => {
      let n = e.current,
        i = [];
      return (
        n &&
          (o.onButtonDown && i.push(ft(n, o.onButtonDown)),
          o.onButtonUp && i.push(ht(n, o.onButtonUp)),
          o.onOKButton && i.push(he(n, o.onOKButton)),
          o.onCancelButton && i.push(yt(n, o.onCancelButton)),
          o.onSecondaryButton && i.push(_t(n, o.onSecondaryButton)),
          o.onOptionsButton && i.push(St(n, o.onOptionsButton)),
          o.onMenuButton && i.push(Ft(n, o.onMenuButton)),
          o.onGamepadDirection && i.push(ye(n, o.onGamepadDirection)),
          o.onGamepadFocus && i.push(Tt(n, o.onGamepadFocus)),
          o.onGamepadBlur && i.push(_e(n, o.onGamepadBlur))),
        () => i.forEach((a) => a())
      );
    }, t);
}
function H(o) {
  return o.stopPropagation(), !1;
}
function jt(o, e, t) {
  let { onButtonDown: n, ...i } = o,
    a = et.default.useCallback(
      (r) => {
        n && n(r),
          Hn(
            "Gamepad Event fired:",
            r.detail.button,
            ", handled:",
            n != null,
            ", propagation stopped:",
            r.cancelBubble,
          ),
          !r.cancelBubble && t.OnRootButtonDown(r);
      },
      [n, t],
    );
  ne(i, e),
    ne(
      {
        onButtonDown: a,
        onButtonUp: H,
        onOKButton: H,
        onCancelButton: H,
        onSecondaryButton: H,
        onOptionsButton: H,
        onMenuButton: H,
        onGamepadDirection: H,
        onGamepadFocus: H,
        onGamepadBlur: H,
      },
      e,
      [a],
    );
}
var x = y(W(), 1);
var q = y(W(), 1);
var Qt = y(E(), 1),
  Yt = q.createContext(void 0);
function Ni(o) {
  let { controller: e } = o;
  return (
    q.useEffect(() => {
      e.Init();
    }, [e]),
    (0, Qt.jsx)(Yt.Provider, { value: e, children: o.children })
  );
}
function X() {
  return q.useContext(Yt);
}
function wi() {
  return be(X()?.GetShowDebugFocusRing()) ?? !1;
}
function ki(o) {
  let e = X();
  q.useEffect(() => {
    if (o) return e.RegisterInputSource(o);
  }, [e, o]);
}
var Oe = y(E(), 1),
  Be = x.default.createContext({ focusNavWindow: null, bSupportsFocus: !0 });
function Un(o) {
  let {
      ownerWindow: e,
      refFocusNavContext: t,
      children: n,
      suppressGamepadInput: i = !1,
    } = o,
    a = X(),
    s = x.default.useContext(Be),
    [r] = x.default.useState(() => s.focusNavWindow || a.CreateContext(e, i)),
    l = be(a.NavigationSourceSupportsFocus) ?? !1;
  x.default.useEffect(
    () => (
      r.OnMount(e),
      e.document.hasFocus() && r.OnActivate(e),
      () => {
        r.Destroy(e);
      }
    ),
    [r, e],
  ),
    at(t, r);
  let u = x.default.useMemo(
    () => ({ focusNavWindow: r, bSupportsFocus: l }),
    [r, l],
  );
  return (0, Oe.jsxs)(Be.Provider, {
    value: u,
    children: [(0, Oe.jsx)(Vn, { ownerWindow: e, context: r }), n],
  });
}
function Vn(o) {
  let { ownerWindow: e, context: t } = o,
    n = x.default.useMemo(() => () => t.OnActivate(e), [t, e]),
    i = x.default.useMemo(() => () => t.OnDeactivate(e), [t, e]);
  return (
    Y(e, "touchstart", n, { capture: !0 }),
    Y(e, "mousedown", n, { capture: !0 }),
    Y(e, "focus", n),
    Y(e.document, "focusin", n),
    Y(e, "blur", i),
    null
  );
}
function Jt() {
  return x.default.useContext(Be)?.focusNavWindow;
}
function tt(o = !0) {
  return x.default.useContext(Be)?.bSupportsFocus ?? o;
}
var Zt = y(E());
function Wi() {
  return oe.default.createRef();
}
var Ui = z("div", { bDOMElementFocusByDefault: !1 }),
  Vi = z("button", { bActivateByDefault: (o) => o.type === "submit" }),
  $n = z("a", { bActivateByDefault: !0 }),
  Ki = oe.default.forwardRef(function (e, t) {
    let { href: n = "#", ...i } = e;
    return (0, Zt.jsx)($n, { ref: t, href: n, ...i });
  }),
  zi = ot("input"),
  $i = ot("textarea"),
  qi = z("img", { bDOMElementFocusByDefault: !1 }),
  Xi = z("label", { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  ji = z("section", { bFocusableByDefault: !1 }),
  Yi = z("form", { bFocusableByDefault: !1 });
function Qi() {
  let { ref: o } = nt({ focusable: !0 });
  return (
    ne(
      { onOKButton: (0, oe.useCallback)(() => (o.current?.click(), !0), [o]) },
      o,
    ),
    o
  );
}
function Ji(o, e, t = !1) {
  oe.default.useEffect(() => {
    let n = o.current;
    n && (e ? n.Activate(t) : n.Deactivate());
  }, [e, t, o]);
}
function He(o) {
  switch (o) {
    case "column":
      return 1;
    case "column-reverse":
      return 3;
    case "row":
      return 2;
    case "row-reverse":
      return 4;
    case "grid":
      return 5;
    default:
      return 0;
  }
}
var L = y(W(), 1);
function qn(o) {
  return {
    ShowVirtualKeyboard: () => {},
    ShowModalKeyboard: () => {},
    SetAsCurrentVirtualKeyboardTarget: () => {},
    HideVirtualKeyboard: () => {},
    DelayHideVirtualKeyboard: () => {},
    BIsActive: () => !1,
    BIsElementValidForInput: () => !1,
  };
}
var en = L.default.createContext(qn);
function rr(o) {
  let { factory: e, children: t } = o,
    n = L.default.useMemo(() => e.CreateVirtualKeyboardRef.bind(e), [e]);
  return L.default.createElement(en.Provider, { value: n }, t);
}
function tn(o, e) {
  let { onTextEntered: t, ...n } = o,
    i = L.default.useRef(null),
    a = L.default.useRef({});
  Object.assign(a.current, {
    ...n,
    BIsElementValidForInput: () =>
      i.current && document.activeElement == i.current,
  });
  let s = Xn(a.current),
    r = L.default.useCallback(
      (u) => {
        if (!(!document.hasFocus() && document.activeElement == i.current)) {
          if (u.currentTarget != i.current) {
            console.warn(
              "keyboard got blur event, but it's not the active element",
            );
            return;
          }
          (!s.BIsActive() && !s.bInVR) || s.DelayHideVirtualKeyboard();
        }
      },
      [s],
    ),
    l = rt(
      (u) => {
        i.current = u;
        let c = [];
        return (
          u &&
            (u.addEventListener("focus", s.SetAsCurrentVirtualKeyboardTarget),
            c.push(() =>
              u.removeEventListener(
                "focus",
                s.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            u.addEventListener("click", s.ShowVirtualKeyboard),
            c.push(() => u.removeEventListener("click", s.ShowVirtualKeyboard)),
            c.push(he(u, s.ShowVirtualKeyboard)),
            c.push(_e(u, r))),
          () => c.forEach((p) => p())
        );
      },
      [r, s],
    );
  return (
    L.default.useLayoutEffect(
      () => (
        M(e, {
          TakeFocusAndShowKeyboard: () => {
            let u = i.current;
            u &&
              (document.activeElement != u && u.focus(),
              s.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            s.HideVirtualKeyboard();
          },
        }),
        () => M(e, null)
      ),
      [s, e],
    ),
    l
  );
}
function Xn(o) {
  let e = L.default.useRef(),
    t = L.default.useContext(en);
  return e.current || (e.current = t(o || {})), e.current;
}
function nn(o) {
  let {
    onEnterKeyPress: e,
    strEnterKeyLabel: t,
    onKeyboardNavOut: n,
    onKeyboardShow: i,
    onKeyboardFullyVisible: a,
    onTextEntered: s,
    BIsElementValidForInput: r,
    ...l
  } = o;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: e,
      strEnterKeyLabel: t,
      onKeyboardNavOut: n,
      onKeyboardShow: i,
      onKeyboardFullyVisible: a,
      onTextEntered: s,
      BIsElementValidForInput: r,
    },
    props: l,
  };
}
var ln = y(E(), 1),
  me = S.createContext(null),
  jn = S.createContext(Lt);
function Yn(o, e) {
  let t = S.useRef(null);
  return (
    o &&
      (!t.current || t.current.m_Parent != o) &&
      (t.current = o.Tree.CreateNode(o, e)),
    t.current
  );
}
function nt(o) {
  let { navRef: e, ...t } = o,
    n = S.useRef(null),
    i = (0, We.useContext)(me),
    a = (0, We.useContext)(jn),
    s = Yn(i, a);
  return (
    S.useLayoutEffect(() => {
      s && s.SetProperties(t);
    }),
    S.useLayoutEffect(() => {
      if (!i) return;
      let r = i.Tree.RegisterNavigationItem(s, n.current);
      return () => {
        r();
      };
    }, [i, s, n]),
    S.useLayoutEffect(() => {
      if (!(!s || !e)) return M(e, s.CreateHandle()), () => M(e, null);
    }, [s, e]),
    { ref: n, node: s }
  );
}
function Qn(o) {
  let {
      onButtonDown: e,
      onButtonUp: t,
      onOKButton: n,
      onCancelButton: i,
      onSecondaryButton: a,
      onOptionsButton: s,
      onGamepadDirection: r,
      onGamepadFocus: l,
      onGamepadBlur: u,
      onMenuButton: c,
      onOKActionDescription: p,
      onCancelActionDescription: d,
      onSecondaryActionDescription: b,
      onOptionsActionDescription: g,
      onMenuActionDescription: v,
      actionDescriptionMap: F,
      ...P
    } = o,
    C = {};
  e !== void 0 && (C.onButtonDown = e),
    t !== void 0 && (C.onButtonUp = t),
    n !== void 0 && (C.onOKButton = n),
    i !== void 0 && (C.onCancelButton = i),
    a !== void 0 && (C.onSecondaryButton = a),
    s !== void 0 && (C.onOptionsButton = s),
    c !== void 0 && (C.onMenuButton = c),
    r !== void 0 && (C.onGamepadDirection = r),
    l !== void 0 && (C.onGamepadFocus = l),
    u !== void 0 && (C.onGamepadBlur = u);
  let h = Rt({
    onOKActionDescription: p,
    onCancelActionDescription: d,
    onSecondaryActionDescription: b,
    onOptionsActionDescription: g,
    onMenuActionDescription: v,
    actionDescriptionMap: F,
  });
  return { gamepadEvents: C, actionDescriptions: h, props: P };
}
function Ue(o) {
  let {
      autoFocus: e,
      preferredFocus: t,
      disableNavSounds: n,
      fnCanTakeFocus: i,
      childFocusDisabled: a,
      retainFocus: s,
      onFocusWithin: r,
      navKey: l,
      noFocusRing: u,
      focusable: c,
      focusableIfNoChildren: p,
      navRef: d,
      actionDescriptionMap: b,
      onMoveUp: g,
      onMoveRight: v,
      onMoveDown: F,
      onMoveLeft: P,
      navEntryPreferPosition: C,
      scrollIntoViewWhenChildFocused: h,
      fnScrollIntoViewHandler: ie,
      scrollIntoViewType: Ve,
      resetNavOnEntry: un,
      ...dn
    } = o,
    { gamepadEvents: pn, actionDescriptions: mn, props: bn } = Qn(dn),
    vn = {
      autoFocus: e,
      preferredFocus: t,
      disableNavSounds: n,
      fnCanTakeFocus: i,
      childFocusDisabled: a,
      retainFocus: s,
      onFocusWithin: r,
      navKey: l,
      noFocusRing: u,
      focusable: c,
      focusableIfNoChildren: p,
      navRef: d,
      onMoveUp: g,
      onMoveRight: v,
      onMoveDown: F,
      onMoveLeft: P,
      navEntryPreferPosition: C,
      scrollIntoViewWhenChildFocused: h,
      fnScrollIntoViewHandler: ie,
      scrollIntoViewType: Ve,
      resetNavOnEntry: un,
      actionDescriptionMap: { ...b, ...mn },
    };
  return { elemProps: bn, navOptions: vn, gamepadEvents: pn };
}
function it(o) {
  return function (t) {
    let {
        focusClassName: n,
        focusWithinClassName: i,
        bFocusableByDefault: a,
        className: s,
        divRef: r,
        node: l,
        tabIndex: u,
        children: c,
        ...p
      } = t,
      d = st(),
      b = tt(),
      g = l.BHasFocus() && b,
      v = l.BFocusWithin() && b,
      {
        bActiveTree: F,
        bActiveTreeWithinContext: P,
        bDisableFocusClasses: C,
      } = rn();
    Q(l.FocusCallbackList, d), Q(l.FocusWithinCallbackList, d);
    let h = F && !C,
      ie = !P && (u !== void 0 || a);
    return S.createElement(
      o,
      {
        ...p,
        className: (0, pe.default)(s, g && h && n, v && h && i),
        tabIndex: ie ? -1 : u,
        ref: r,
      },
      c,
    );
  };
}
var _r = it("div");
function on(o) {
  return (
    Xt.PlayNavSound(21), ge(o.currentTarget) && o.currentTarget.click(), !0
  );
}
var an = S.createContext(void 0),
  zn = an.Provider;
function sn(o, e, t, n, i) {
  let {
      elemProps: { focusClassName: a, children: s, "flow-children": r, ...l },
      navOptions: u,
      gamepadEvents: c,
    } = Ue(t),
    {
      bFocusableByDefault: p = !0,
      bActivateByDefault: d = !1,
      bDOMElementFocusByDefault: b = p,
    } = i || {};
  u.focusable === void 0 && !l.disabled && p && (u.focusable = !0);
  let g = He(r),
    { ref: v, node: F } = nt({ layout: g, ...u });
  c.onOKButton ||
    ((("onClick" in l && l.onClick) || (d && (d === !0 || d(l)))) &&
      (c.onOKButton = on)),
    u.focusable && !b
      ? (l.tabIndex = l.tabIndex || 0)
      : !u.focusable && b && (l.tabIndex = l.tabIndex ?? -1),
    ne(c, v);
  let P = ae(n, v),
    C = (0, We.useContext)(an)?.Component,
    h = { ...l };
  return (
    "onClick" in l && (h.role ??= "button"),
    F
      ? ((h = {
          ...h,
          divRef: P,
          node: F,
          focusClassName: (0, pe.default)(a, "gpfocus"),
          focusWithinClassName: "gpfocuswithin",
          bFocusableByDefault: b,
          className: (0, pe.default)(l.className, "Focusable"),
        }),
        (0, ln.jsx)(me.Provider, {
          value: F,
          children: C
            ? S.createElement(C, { ...h, Component: e }, s)
            : S.createElement(e, h, s),
        }))
      : S.createElement(
          o,
          {
            ...h,
            ref: n,
            className: (0, pe.default)(l.className, "Focusable"),
          },
          s,
        )
  );
}
function z(o, e) {
  let t = it(o);
  return S.forwardRef(function (i, a) {
    return sn(o, t, i, a, e);
  });
}
function ot(o) {
  let e = it(o);
  return S.forwardRef(function (n, i) {
    let {
        virtualKeyboardProps: a,
        props: { refKeyboardHandle: s, ...r },
      } = nn(n),
      l = tn(a, s),
      u = ae(i, l);
    return sn(o, e, r, u);
  });
}
var j = y(E(), 1),
  Kn = T.default.forwardRef(function (e, t) {
    let {
        navID: n,
        onActivated: i,
        onDeactivated: a,
        navTreeRef: s,
        enabled: r,
        modal: l,
        virtualFocus: u,
        parentEmbeddedNavTree: c,
        onGlobalButtonDown: p,
        disableFocusClasses: d,
        disabledRoot: b,
        "flow-children": g,
        ...v
      } = e,
      { elemProps: F, navOptions: P, gamepadEvents: C } = Ue(v);
    return X()
      ? (0, j.jsx)(Jn, {
          navID: n,
          onActivated: i,
          onDeactivated: a,
          navTreeRef: s,
          enabled: r,
          modal: l,
          virtualFocus: u,
          parentEmbeddedNavTree: c,
          onGlobalButtonDown: p,
          disableFocusClasses: d,
          disabledRoot: b,
          "flow-children": g,
          ...P,
          ...C,
          children: (0, j.jsx)("div", { ...F, ref: t }),
        })
      : (0, j.jsx)("div", { ...F, ref: t });
  });
function Jn(o) {
  let {
      navID: e,
      onActivated: t,
      onDeactivated: n,
      navTreeRef: i,
      enabled: a = !0,
      modal: s = !1,
      virtualFocus: r = !1,
      children: l,
      parentEmbeddedNavTree: u,
      onGlobalButtonDown: c,
      disableFocusClasses: p = !1,
      disabledRoot: d = !1,
      "flow-children": b,
      ...g
    } = o,
    { elemProps: v, navOptions: F, gamepadEvents: P } = Ue(g),
    { refDiv: C, tree: h } = Zn({
      navID: e,
      virtualFocus: r,
      parentEmbeddedNavTree: u,
      disabledRoot: d,
      enabled: a,
      modal: s,
      onGlobalButtonDown: c,
      navTreeRef: i,
    });
  Q(h.OnActivateCallbacks, t),
    Q(h.OnDeactivateCallbacks, n),
    jt(P, C, h),
    T.default.useLayoutEffect(() => {
      let Ve = He(b);
      h.Root.SetProperties({ ...F, layout: Ve });
    });
  let ie = ae(C, l.ref);
  return (0, j.jsx)(eo, {
    tree: d ? null : h,
    disableFocusClasses: p || d,
    children: (0, j.jsx)(me.Provider, {
      value: d ? null : h.Root,
      children: T.default.cloneElement(l, {
        id: e,
        "data-react-nav-root": e,
        ref: ie,
      }),
    }),
  });
}
function Zn(o) {
  let {
      navID: e,
      virtualFocus: t,
      parentEmbeddedNavTree: n,
      disabledRoot: i,
      enabled: a,
      modal: s,
      navTreeRef: r,
      onGlobalButtonDown: l,
    } = o,
    u = X(),
    c = Jt() || u.GetDefaultContext(),
    p = T.default.useContext(me),
    [d] = T.default.useState(() =>
      u.NewGamepadNavigationTree(c, e, n ?? p?.Tree),
    ),
    b = T.default.useRef(null);
  return (
    d.SetUseVirtualFocus(t),
    d.SetModal(s),
    d.SetIsEmbeddedInLegacyTree(!!n),
    d.SetOnGlobalButtonDown(l),
    T.default.useEffect(
      () => d.RegisterNavigationItem(d.Root, b.current),
      [d, b],
    ),
    T.default.useEffect(() => {
      d.SetIsEnabled(a);
    }, [d, a]),
    T.default.useEffect(() => {
      if (!i)
        return u.RegisterGamepadNavigationTree(
          d,
          b.current.ownerDocument.defaultView,
        );
    }, [u, d, i]),
    T.default.useEffect(() => (M(r, d), () => M(r, null)), [r, d]),
    { refDiv: b, tree: d }
  );
}
var cn = T.default.createContext({
  bActiveTree: !1,
  bActiveTreeWithinContext: !1,
  bDisableFocusClasses: !1,
});
function eo(o) {
  let { tree: e, disableFocusClasses: t = !1, children: n } = o,
    [i, a] = T.default.useState(e?.BIsActive() || !1),
    [s, r] = T.default.useState(e?.BIsActiveWithinContext() || !1);
  T.default.useEffect(() => {
    if (!e) {
      a(!1), r(!1);
      return;
    }
    return (
      a(e.BIsActive()),
      r(e.BIsActiveWithinContext()),
      e.OnActiveStateChangedCallbacks.Register(() => {
        a(e.BIsActive()), r(e.BIsActiveWithinContext());
      }).Unregister
    );
  }, [e]);
  let l = T.default.useMemo(
    () => ({
      bActiveTree: i,
      bActiveTreeWithinContext: s,
      bDisableFocusClasses: t,
    }),
    [i, t, s],
  );
  return (0, j.jsx)(cn.Provider, { value: l, children: n });
}
function rn() {
  return T.default.useContext(cn);
}
export {
  Xt as a,
  _ as b,
  mt as c,
  ne as d,
  ro as e,
  fn as f,
  ao as g,
  Ht as h,
  Wt as i,
  ni as j,
  oi as k,
  Pt as l,
  ze as m,
  ue as n,
  He as o,
  rr as p,
  Ni as q,
  wi as r,
  ki as s,
  Un as t,
  Jt as u,
  tt as v,
  Kn as w,
  Jn as x,
  rn as y,
  me as z,
  jn as A,
  nt as B,
  Qn as C,
  Ue as D,
  _r as E,
  Wi as F,
  Ui as G,
  Vi as H,
  Ki as I,
  zi as J,
  $i as K,
  Xi as L,
  ji as M,
  Yi as N,
  Qi as O,
  Ji as P,
};

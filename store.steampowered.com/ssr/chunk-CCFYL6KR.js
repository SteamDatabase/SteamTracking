const CLSTAMP = 9511701;

import { a as dt } from "./chunk-OI7DH6IV.js";
import { a as pe, b as pt, c as Se, d as mt } from "./chunk-RODMXZON.js";
import { g as D, j as B, k as de, m as h, q as E } from "./chunk-5GHSG7P2.js";
import { l as x, m as A } from "./chunk-AOQ5VFYG.js";
import { d as g, e as F } from "./chunk-GO2YC36H.js";
var N = g(x());
var k = g(x());
function w(n, e) {
  n != null &&
    (typeof n == "function" ? n(e) : "current" in n && (n.current = e));
}
function W(...n) {
  return k.useCallback((e) => {
    for (let t of n) w(t, e);
  }, n);
}
function co(...n) {
  if (!(!n || n.length === 0))
    return n.length === 1
      ? n[0]
      : (e) =>
          n.forEach((t) => {
            if (t) typeof t == "function" ? t(e) : (t.current = e);
            else return;
          });
}
function Te(n, e) {
  let t = k.useRef();
  return k.useCallback((i) => {
    t.current && t.current(), (t.current = n(i));
  }, e);
}
function uo(n) {
  let e = k.useRef(null),
    t = W(n, e);
  return { refWithValue: e, refForElement: t };
}
function ft(n, e) {
  let t = k.useRef(!1);
  k.useLayoutEffect(
    () => () => {
      t.current && w(n, void 0);
    },
    [n],
  ),
    k.useLayoutEffect(() => {
      (e || t.current) && (w(n, e), (t.current = !!e));
    }, [n, e]);
}
function bt() {
  let [, n] = N.useState(0);
  return N.useCallback(() => n((t) => t + 1), []);
}
function fo(n, e, t) {
  return Te(
    (o) => {
      if (!(!o || !e))
        return o.addEventListener(n, e, t), () => o.removeEventListener(n, e);
    },
    [n, e],
  );
}
function X(n, e, t, o) {
  N.useEffect(() => {
    if (!(!n || !t))
      return n.addEventListener(e, t, o), () => n.removeEventListener(e, t, o);
  }, [n, e, t]);
}
function bo(n, e, t, o) {
  return X(
    n,
    "message",
    function (i) {
      e.includes(i.data) && t(this, i);
    },
    o,
  );
}
function te(n, e) {
  N.useLayoutEffect(() => {
    if (!e || !n) return;
    let t = n.Register(e);
    return () => t.Unregister();
  }, [n, e]);
}
function Re(n) {
  let [e, t] = N.useState(n?.Value);
  return (
    N.useEffect(() => {
      if (n == null) return;
      let o = n.Subscribe(t);
      return t(n.Value), o?.Unsubscribe;
    }, [n]),
    e
  );
}
function _n(n, e) {
  let [t, o] = N.useState(n);
  return (
    N.useEffect(() => {
      if (n) {
        o(!0);
        return;
      } else {
        let i = window.setTimeout(() => o(!1), e);
        return () => window.clearTimeout(i);
      }
    }, [n, e]),
    t
  );
}
function vo(n, e) {
  return _n(n, e) || n;
}
var T = g(x(), 1);
var ye = g(dt(), 1),
  _ = g(x(), 1),
  Ye = g(x(), 1);
var Je = class {
    m_fnCallbackOnPlaySound = new h();
    RegisterCallbackOnPlaySound(e) {
      return this.m_fnCallbackOnPlaySound.Register(e);
    }
    PlayNavSound(e, t) {
      this.m_fnCallbackOnPlaySound.Dispatch(e, t);
    }
  },
  vt = new Je();
function j(n) {
  return n != null && n.focus !== void 0;
}
function Fo(n, e) {
  let t = e;
  for (; t; ) {
    if (
      (t.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (t = t.parentNode.host),
      t == n)
    )
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function gt(n, e) {
  let t = 0,
    o = 0;
  return (
    e.right < n.left
      ? (t = n.left - e.right)
      : e.left > n.right && (t = e.left - n.right),
    e.bottom < n.top
      ? (o = n.top - e.bottom)
      : e.top > n.bottom && (o = e.top - n.bottom),
    Math.sqrt(t * t + o * o)
  );
}
function Eo(n, e) {
  return {
    top: n.screenTop + e.top,
    bottom: n.screenTop + e.bottom,
    left: n.screenLeft + e.left,
    right: n.screenLeft + e.right,
  };
}
function Io(n) {
  let e = 1,
    t = n;
  for (; t != null && t.tagName != "HTML"; ) {
    let o = getComputedStyle(t);
    if (o.zoom) {
      let i = Number.parseFloat(o.zoom);
      isNaN(i) || (e *= i);
    }
    t = t.parentElement;
  }
  return e;
}
function Do(n) {
  let e;
  return (
    n && j(n.currentTarget) && (e = n.currentTarget.ownerDocument.defaultView),
    e
  );
}
function Ao(n) {
  let e;
  return n && (e = n.ownerDocument.defaultView), e;
}
function Ct(n) {
  return n.nodeName === "INPUT";
}
function ht(n, e) {
  switch (n) {
    case "TEXTAREA":
      return !0;
    case "INPUT":
      switch (e) {
        case "date":
        case "datetime-local":
        case "datetime":
        case "email":
        case "month":
        case "number":
        case "password":
        case "search":
        case "tel":
        case "text":
        case "time":
        case "url":
        case "week":
          return !0;
        default:
          return !1;
      }
    default:
      return !1;
  }
}
function Po(n, e) {
  let t = n?.parentElement;
  for (; t; ) {
    if (j(t)) {
      if (!e || e == "x") {
        let o = window.getComputedStyle(t);
        if (
          o.overflowX == "scroll" ||
          o.overflowX == "auto" ||
          o.position == "fixed"
        )
          break;
      }
      if (!e || e == "y") {
        let o = window.getComputedStyle(t);
        if (
          o.overflowY == "scroll" ||
          o.overflowY == "auto" ||
          o.position == "fixed"
        )
          break;
      }
    }
    t = t.parentElement;
  }
  return j(t) ? t : null;
}
function No(n, e) {
  let t = n;
  for (; t; ) {
    if (e(t)) return t;
    t = t.parentElement;
  }
}
function wo() {
  return Sn(document);
}
function Sn(n) {
  let e = {};
  return (
    n.querySelectorAll('link[rel="stylesheet"]').forEach((o) => {
      e[o.href] = o;
    }),
    e
  );
}
function xo(n, e) {
  Tn(n.document, e, !0);
}
function Tn(n, e, t) {
  let o = Object.assign({}, e),
    i = n.getElementsByTagName("head")[0],
    r = i.getElementsByTagName("link"),
    s = r.length;
  for (let l = 0; l < s; ++l) {
    let c = r[l];
    o[c.href] ? delete o[c.href] : t && c.parentNode?.removeChild(c);
  }
  let a = [];
  for (let l in o) {
    let c = o[l],
      u = n.createElement("link");
    for (let p = 0; p < c.attributes.length; p++) {
      let d = c.attributes.item(p);
      u.setAttribute(d.name, d.value);
    }
    a.push(u);
  }
  return i.prepend(...a), a;
}
var ve = g(x());
var et = g(x(), 1);
var Fe = class {
  async GetObject(e, t) {
    try {
      let o = await this.GetString(e);
      return o ? JSON.parse(o, t) : null;
    } catch {
      return null;
    }
  }
  async StoreObject(e, t) {
    return this.StoreString(e, JSON.stringify(t));
  }
};
var me = class extends Fe {
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
var y = class {
  m_sName;
  m_fnIdGenerator = void 0;
  constructor(e, t) {
    (this.m_sName = e), (this.m_fnIdGenerator = t), P.Get().RegisterLogName(e);
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
    return P.Get().IsDebugLogEnabled(this.m_sName);
  }
  Log(e, ...t) {
    let o = P.Get().IsDebugLogEnabled(this.m_sName);
    if (e == 0 && !o) return;
    let i = this.m_sName,
      r = this.m_fnIdGenerator?.() ?? null;
    r != null && (i += " (" + r + ")");
    let s = P.Get().IncludeBacktraceInLog;
    yt(e, o, s, i, this.m_sName, ...t);
  }
};
F([E], y.prototype, "Debug", 1),
  F([E], y.prototype, "Info", 1),
  F([E], y.prototype, "Warning", 1),
  F([E], y.prototype, "Error", 1),
  F([E], y.prototype, "Assert", 1);
var P = class n {
  static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
  static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
  static s_Singleton = null;
  m_Storage = null;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_SettingsChangedCallback = new h();
  m_bLoading = !1;
  constructor() {
    (this.m_Storage = new me()), this.LoadSettings();
  }
  LogAsLogManager(...e) {
    yt(1, !0, this.IncludeBacktraceInLog, "LogManager", "LogManager", ...e);
  }
  async LoadSettings() {
    (this.m_bLoading = !0),
      (this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
        n.k_IncludeBacktraceInLog_StorageKey,
      )));
    let e = await this.m_Storage?.GetObject(n.k_EnabledLogNames_StorageKey);
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
      n.k_EnabledLogNames_StorageKey,
      Array.from(this.m_setEnabledDebugLogs),
    ),
      await this.m_Storage?.StoreObject(
        n.k_IncludeBacktraceInLog_StorageKey,
        this.m_bIncludeBacktraceInLog,
      ),
      this.LogAsLogManager(
        "Saved enabled debug log names. Will print log messages for:",
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  static Get() {
    return n.s_Singleton == null && (n.s_Singleton = new n()), n.s_Singleton;
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
function Rn(n) {
  let e = 0;
  for (let t = 0; t < n.length; t++) e = n.charCodeAt(t) + ((e << 5) - e);
  return [(e >> (0 * 8)) & 255, (e >> (1 * 8)) & 255, (e >> (2 * 8)) & 255];
}
function Fn(n) {
  return (n[0] * 299 + n[1] * 587 + n[2] * 114) / 1e3 >= 128;
}
function En(n) {
  switch (n) {
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
function yt(n, e, t, o, i, ...r) {
  let a = Rn(i).map((f, v) =>
      Math.round(
        Math.max(0, Math.min(255, ((f / 255 - 0.5) * 0.8 + 0.15) * 255)),
      ),
    ),
    l = Fn(a),
    c = o;
  t && (c = En(n) + " " + c);
  let u = r.length >= 1 && typeof r[0] == "string" && r[0].includes("%c"),
    p = u && r.shift(),
    d;
  if (
    (e
      ? (d = [
          `%c${c}%c:${u ? " %c" + p : ""}`,
          `color: ${l ? "black" : "white"}; background: rgb(${a.join(",")}); padding: 0 1ch; border-radius: 3px;`,
          "color: transparent; margin-right: -1ch",
          ...(u ? [""] : []),
          ...r,
        ])
      : (d = r),
    t)
  )
    console.groupCollapsed(...d),
      console.trace("Callstack"),
      console.groupEnd();
  else
    switch (n) {
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
var _t = () => [...P.Get().LogNames].sort(),
  St = (n, e) => {
    P.Get().IsLogName(n)
      ? P.Get().SetDebugLogEnabled(n, e)
      : console.warn(`No log named "${n}", available logs:`, _t());
  };
window.DebugLogEnable = (...n) => n.forEach((e) => St(e, !0));
window.DebugLogDisable = (...n) => n.forEach((e) => St(e, !1));
window.DebugLogEnableAll = () => P.Get().SetAllDebugLogsEnabled(!0);
window.DebugLogDisableAll = () => P.Get().SetAllDebugLogsEnabled(!1);
window.DebugLogEnableBacktrace = () => P.Get().SetIncludeBacktraceInLog(!0);
window.DebugLogDisableBacktrace = () => P.Get().SetIncludeBacktraceInLog(!1);
window.DebugLogNames = _t;
window.EnableSteamConsole = (n = !0) =>
  P.Get().SetDebugLogEnabled("SteamClient", n);
var Ze = class {
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
      let o = () => {
        this.m_ActiveInputTimeout = window.setInterval(() => {
          t();
        }, this.m_config.repeatInterval_ms);
      };
      this.m_config.firstRepeatInterval_ms == null ||
      this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
        ? o()
        : (this.m_ActiveInputTimeout = window.setTimeout(() => {
            t(), o();
          }, this.m_config.firstRepeatInterval_ms));
    }
  }
};
var Ee = class {
  m_config;
  m_inputRepeatGenerator;
  m_repeatOnAxis = 0;
  m_fnRepeatAllowed = () => !0;
  constructor(e) {
    (this.m_config = e), (this.m_inputRepeatGenerator = new Ze(e));
  }
  Reset() {
    this.m_inputRepeatGenerator.Reset();
  }
  SetRepeatAllowed(e) {
    e || (e = () => !0), (this.m_fnRepeatAllowed = e);
  }
  HandleInputButtonDown(e, t, o) {
    this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(e)
      ? this.m_repeatOnAxis == 0 &&
        ((e == 9 || e == 10) && (this.m_repeatOnAxis = 2),
        (e == 11 || e == 12) && (this.m_repeatOnAxis = 1),
        t(),
        this.m_inputRepeatGenerator.HandleInputButtonDown(e, o))
      : (t(), this.m_inputRepeatGenerator.Reset());
  }
  HandleInputButtonUp(e) {
    if (this.m_config.inputsThatRepeat.has(e) && this.m_repeatOnAxis != 0) {
      let t = e == 9 || e == 10,
        o = e == 11 || e == 12;
      ((this.m_repeatOnAxis == 2 && t) || (this.m_repeatOnAxis == 1 && o)) &&
        ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
    } else this.m_inputRepeatGenerator.Reset();
  }
};
var K = ((m) => (
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
))(K || {});
var Tt = class {
  m_OnGamepadDetectedCallbacks = new h();
  m_ButtonDownCallbacks = new h();
  m_ButtonUpCallbacks = new h();
  m_AnalogCallbacks = new h();
  m_NavigationTypeChangeCallbacks = new h();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new Ee({
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
  OnAnalogPad(e, t, o, i) {
    i === void 0 && (i = -1),
      this.SetControllerActive(i),
      this.m_AnalogCallbacks.Dispatch(
        e,
        this.m_nLastActiveControllerIndex,
        t,
        o,
      );
  }
  OnNavigationTypeChanged(e) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(e);
  }
};
var ne = ((i) => (
    (i[(i.GAMEPAD = 0)] = "GAMEPAD"),
    (i[(i.KEYBOARD = 1)] = "KEYBOARD"),
    (i[(i.APPLICATION = 2)] = "APPLICATION"),
    (i[(i.BROWSER = 3)] = "BROWSER"),
    i
  ))(ne || {}),
  In = {
    1: "vgp_onok",
    2: "vgp_oncancel",
    3: "vgp_onsecondaryaction",
    4: "vgp_onoptions",
    14: "vgp_onmenu",
  };
function L(n, e, t) {
  return n.addEventListener(e, t), () => Dn(n, e, t);
}
function Dn(n, e, t) {
  n.removeEventListener(e, t);
}
function Rt(n, e) {
  return L(n, "vgp_onbuttondown", e);
}
function Ft(n, e) {
  return L(n, "vgp_onbuttonup", e);
}
function Ie(n, e) {
  return L(n, "vgp_onok", oe(e));
}
function Et(n, e) {
  return L(n, "vgp_oncancel", oe(e));
}
function It(n, e) {
  return L(n, "vgp_onsecondaryaction", oe(e));
}
function Dt(n, e) {
  return L(n, "vgp_onoptions", oe(e));
}
function At(n, e) {
  return L(n, "vgp_onmenu", oe(e));
}
function De(n, e) {
  return L(n, "vgp_ondirection", oe(e));
}
function Pt(n, e) {
  return L(n, "vgp_onfocus", e);
}
function Ae(n, e) {
  return L(n, "vgp_onblur", e);
}
function Q(n, e, t) {
  let o = n;
  if (!o || !o.ownerDocument || !o.ownerDocument.defaultView) return !0;
  let i = new o.ownerDocument.defaultView.CustomEvent(e, {
    bubbles: !0,
    cancelable: !0,
    detail: t,
  });
  return o.dispatchEvent(i);
}
function Nt(n) {
  let e = [9, 10, 11, 12],
    t = !0,
    o = !1,
    i = In[n.detail.button];
  return (
    i
      ? ((o = !0), (t = Q(n.target, i, n.detail)))
      : e.indexOf(n.detail.button) !== -1 &&
        ((o = !0), (t = Q(n.target, "vgp_ondirection", n.detail))),
    { bUnhandled: t, bHadLogicalEventMapping: o }
  );
}
function oe(n) {
  return (e) => {
    n(e) !== !1 && (e.stopPropagation(), e.preventDefault());
  };
}
function wt(n) {
  let {
      onOKActionDescription: e,
      onCancelActionDescription: t,
      onSecondaryActionDescription: o,
      onOptionsActionDescription: i,
      onMenuActionDescription: r,
      actionDescriptionMap: s,
    } = n,
    a = { ...s };
  return (
    e !== void 0 && (a[1] = e),
    t !== void 0 && (a[2] = t),
    o !== void 0 && (a[3] = o),
    i !== void 0 && (a[4] = i),
    r !== void 0 && (a[14] = r),
    a
  );
}
var Pn = g(A(), 1),
  An = new y("GamepadEvents").Debug;
function z(n, e, t) {
  t === void 0 &&
    (t = [
      n.onButtonDown,
      n.onButtonUp,
      n.onOKButton,
      n.onCancelButton,
      n.onSecondaryButton,
      n.onOptionsButton,
      n.onMenuButton,
      n.onGamepadDirection,
      n.onGamepadFocus,
      n.onGamepadBlur,
    ]),
    et.default.useEffect(() => {
      let o = e.current,
        i = [];
      return (
        o &&
          (n.onButtonDown && i.push(Rt(o, n.onButtonDown)),
          n.onButtonUp && i.push(Ft(o, n.onButtonUp)),
          n.onOKButton && i.push(Ie(o, n.onOKButton)),
          n.onCancelButton && i.push(Et(o, n.onCancelButton)),
          n.onSecondaryButton && i.push(It(o, n.onSecondaryButton)),
          n.onOptionsButton && i.push(Dt(o, n.onOptionsButton)),
          n.onMenuButton && i.push(At(o, n.onMenuButton)),
          n.onGamepadDirection && i.push(De(o, n.onGamepadDirection)),
          n.onGamepadFocus && i.push(Pt(o, n.onGamepadFocus)),
          n.onGamepadBlur && i.push(Ae(o, n.onGamepadBlur))),
        () => i.forEach((r) => r())
      );
    }, t);
}
function U(n) {
  return n.stopPropagation(), !1;
}
function xt(n, e, t) {
  let { onButtonDown: o, ...i } = n,
    r = et.default.useCallback(
      (a) => {
        o && o(a),
          An(
            "Gamepad Event fired:",
            a.detail.button,
            ", handled:",
            o != null,
            ", propagation stopped:",
            a.cancelBubble,
          ),
          !a.cancelBubble && t.OnRootButtonDown(a);
      },
      [o, t],
    );
  z(i, e),
    z(
      {
        onButtonDown: r,
        onButtonUp: U,
        onOKButton: U,
        onCancelButton: U,
        onSecondaryButton: U,
        onOptionsButton: U,
        onMenuButton: U,
        onGamepadDirection: U,
        onGamepadFocus: U,
        onGamepadBlur: U,
      },
      e,
      [r],
    );
}
var M = g(x(), 1);
var J = g(x(), 1);
var Lt = g(A(), 1),
  kt = J.createContext(void 0);
function ei(n) {
  let { controller: e } = n;
  return (
    J.useEffect(() => {
      e.Init();
    }, [e]),
    (0, Lt.jsx)(kt.Provider, { value: e, children: n.children })
  );
}
function ie() {
  return J.useContext(kt);
}
function ti() {
  return Re(ie()?.GetShowDebugFocusRing()) ?? !1;
}
function ni(n) {
  let e = ie();
  J.useEffect(() => {
    if (n) return e.RegisterInputSource(n);
  }, [e, n]);
}
var Ne = g(A(), 1),
  Pe = M.default.createContext({ focusNavWindow: null, bSupportsFocus: !0 });
function Nn(n) {
  let {
      ownerWindow: e,
      refFocusNavContext: t,
      children: o,
      suppressGamepadInput: i = !1,
    } = n,
    r = ie(),
    s = M.default.useContext(Pe),
    [a] = M.default.useState(() => s.focusNavWindow || r.CreateContext(e, i)),
    l = Re(r.NavigationSourceSupportsFocus) ?? !1;
  M.default.useEffect(
    () => (
      a.OnMount(e),
      e.document.hasFocus() && a.OnActivate(e),
      () => {
        a.Destroy(e);
      }
    ),
    [a, e],
  ),
    ft(t, a);
  let c = M.default.useMemo(
    () => ({ focusNavWindow: a, bSupportsFocus: l }),
    [a, l],
  );
  return (0, Ne.jsxs)(Pe.Provider, {
    value: c,
    children: [(0, Ne.jsx)(wn, { ownerWindow: e, context: a }), o],
  });
}
function wn(n) {
  let { ownerWindow: e, context: t } = n,
    o = M.default.useMemo(() => () => t.OnActivate(e), [t, e]),
    i = M.default.useMemo(() => () => t.OnDeactivate(e), [t, e]);
  return (
    X(e, "touchstart", o, { capture: !0 }),
    X(e, "mousedown", o, { capture: !0 }),
    X(e, "focus", o),
    X(e.document, "focusin", o),
    X(e, "blur", i),
    null
  );
}
function Mt() {
  return M.default.useContext(Pe)?.focusNavWindow;
}
function fe(n = !0) {
  return M.default.useContext(Pe)?.bSupportsFocus ?? n;
}
var Ln = g(A());
function ui() {
  return ve.default.createRef();
}
var di = $("div", { bDOMElementFocusByDefault: !1 }),
  pi = $("button", { bActivateByDefault: (n) => n.type === "submit" }),
  mi = $("a", { bActivateByDefault: !0 }),
  fi = tt("input"),
  bi = tt("textarea"),
  vi = $("img", { bDOMElementFocusByDefault: !1 }),
  gi = $("label", { bActivateByDefault: !0, bDOMElementFocusByDefault: !1 }),
  Ci = $("section", { bFocusableByDefault: !1 }),
  hi = $("form", { bFocusableByDefault: !1 });
function yi() {
  let { ref: n } = be({ focusable: !0 });
  return (
    z(
      { onOKButton: (0, ve.useCallback)(() => (n.current?.click(), !0), [n]) },
      n,
    ),
    n
  );
}
function _i(n, e, t = !1) {
  ve.default.useEffect(() => {
    let o = n.current;
    o && (e ? o.Activate(t) : o.Deactivate());
  }, [e, t, n]);
}
var G = class n {
  m_root;
  constructor(e) {
    this.m_root = e;
  }
  static SerializeNavState(e, t = !0, o = !0) {
    return { root: n.SerializeNavNode(e, t, o), bHadFocus: e.BFocusWithin() };
  }
  static SerializeNavNode(e, t = !0, o = !0) {
    let i = null,
      [r, s] = e.GetChildren();
    return (
      r.length &&
        s != -1 &&
        t &&
        (i = r.map((a, l) => n.SerializeNavNode(a, l == s || o, o))),
      { sNavKey: e.NavKey, iActiveChild: s, rgChildren: i }
    );
  }
  static RestoreSerializedNavState(e, t, o = 0) {
    let { root: i, bHadFocus: r } = t;
    e.Tree.Controller.RestoreHistoryTransaction(() => {
      n.RestoreSerializedNavNode(e, i),
        (o == 1 || (o == 0 && r)) && e.BTakeFocus(2);
    });
  }
  static RestoreSerializedNavNode(e, t) {
    let { sNavKey: o, iActiveChild: i, rgChildren: r } = t;
    if (
      (o && D(o == e.NavKey, "navkey mismatch"),
      e.SetActiveChild(i),
      r && r.length)
    ) {
      let [s] = e.GetChildren(),
        a = new Map();
      s.forEach((u) => {
        u.NavKey && a.set(u.NavKey, u);
      });
      for (let u of r) {
        if (!u.sNavKey) continue;
        let p = a.get(u.sNavKey);
        p && n.RestoreSerializedNavNode(p, u);
      }
      if (i != -1 && r[i]?.sNavKey) {
        let u = a.get(r[i].sNavKey);
        u && e.SetActiveChild(s.indexOf(u));
      }
      let l = 0,
        c = 0;
      for (; l < s.length && c < r.length; ) {
        for (; l < s.length && s[l].NavKey; ) l++;
        for (; c < r.length && r[c].sNavKey; ) c++;
        if (l >= s.length || c >= r.length) break;
        n.RestoreSerializedNavNode(s[l], r[c]), l++, c++;
      }
    }
  }
};
function Gt(n) {
  return G.SerializeNavState(n, !0, !1);
}
function Ht(n, e, t = 0) {
  return G.RestoreSerializedNavState(n, e, t);
}
var we = class extends G {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(G.SerializeNavState(this.m_root));
    }
    PopState(e = 0) {
      this.m_rgHistory.length &&
        G.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), e);
    }
  },
  xe = class extends G {
    m_mapHistory = new Map();
    SaveState(e) {
      this.m_mapHistory.set(e, G.SerializeNavState(this.m_root));
    }
    RestoreState(e, t = 0) {
      let o = this.m_mapHistory.get(e);
      return o
        ? (console.log(`Restoring history for state ${e}`),
          G.RestoreSerializedNavState(this.m_root, o, t),
          !0)
        : !1;
    }
  };
var re = { x: "y", y: "x" };
function Ii() {
  return { x: 0, y: 0 };
}
function Mn(n, e) {
  return n.x * e.x + n.y * e.y;
}
function Gn(n, e) {
  return { x: e.x - n.x, y: e.y - n.y };
}
function Di(n, e) {
  let t = Gn(n, e);
  return Math.sqrt(Mn(t, t));
}
function Ot(n, e) {
  return n == null || e == null
    ? n === e
    : typeof n != "object" ||
        typeof e != "object" ||
        Object.keys(n).length !== Object.keys(e).length
      ? !1
      : Object.keys(n).every((t) => e.hasOwnProperty(t) && n[t] === e[t]);
}
function nt(n, e, t) {
  let o = [],
    [i, r] = n.GetChildren(),
    s = n.GetActiveChild(),
    a,
    l = s ? s.Element?.getBoundingClientRect() : null;
  if (s) {
    let p = Ut(s, e, t);
    if (
      p &&
      !p.offScreen &&
      ((a = Bt(s, p, p.overlap, t)), a && !a.visibility.offScreen)
    )
      return a;
    p && o.push({ child: s, visibility: p });
  }
  let c = t || l;
  for (let p = 0; p < i.length; p++) {
    let d = i[p];
    if (d == s) continue;
    let f = Ut(d, e, c ?? void 0);
    f && o.push({ child: d, visibility: f });
  }
  o.sort(Wt);
  let u;
  for (let p of o) {
    let { child: d, visibility: f } = p;
    if (
      f.offScreen &&
      u &&
      (!u.visibility.offScreen ||
        (f.distance && f.distance > u.visibility.distance))
    )
      break;
    let v = d == s ? a : Bt(d, f, f.overlap || e, c ?? void 0);
    v && (!u || Wt(v, u) < 0) && (u = v);
  }
  return u;
}
function Bt(n, e, t, o) {
  switch (n.GetFocusable()) {
    case "none":
      return;
    case "children":
      return nt(n, e.overlap || t, o);
    case "self":
      return { child: n, visibility: e };
  }
}
function Wt(n, e) {
  let t = n.visibility,
    o = e.visibility;
  return t.offScreen
    ? o.offScreen
      ? t.distance - o.distance
      : 1
    : o.offScreen
      ? -1
      : t.distance - o.distance;
}
function Ut(n, e, t) {
  let o = n.Element?.getBoundingClientRect(),
    i = n.GetFocusable(),
    r;
  if (i == "none" || !o || !e) return null;
  if (i == "self") {
    if (
      o.top < e.top ||
      o.right > e.right ||
      o.bottom > e.bottom ||
      o.left < e.left
    ) {
      let a = o.top + o.height / 2,
        l = o.left + o.width / 2;
      if (a < e.top) return { offScreen: "top", distance: e.top - a };
      if (l > e.right) return { offScreen: "right", distance: l - e.right };
      if (a > e.bottom) return { offScreen: "bottom", distance: a - e.bottom };
      if (l < e.left) return { offScreen: "left", distance: e.left - l };
    }
    t && (r = gt(o, t));
  } else if (i == "children") {
    let a = n.Element;
    if (!a) return null;
    if (a.scrollHeight > o.height || a.scrollWidth > o.width) {
      let l = a.ownerDocument.defaultView.getComputedStyle(a);
      if (l.overflowX == "visible" || l.overflowY == "visible")
        return { overlap: e };
    }
    if (o.bottom < e.top)
      return { offScreen: "top", distance: e.top - o.bottom };
    if (o.left > e.right)
      return { offScreen: "right", distance: o.left - e.right };
    if (o.top > e.bottom)
      return { offScreen: "bottom", distance: o.top - e.bottom };
    if (o.right < e.left)
      return { offScreen: "left", distance: e.left - o.right };
  }
  return {
    overlap: {
      top: Math.max(o.top, e.top),
      right: Math.min(o.right, e.right),
      bottom: Math.min(o.bottom, e.bottom),
      left: Math.max(o.left, e.left),
    },
    distance: r,
  };
}
function Vt(n) {
  return n != null && n.focus !== void 0;
}
function ke(n) {
  let e;
  return n && (e = n.ownerDocument.defaultView), e;
}
function Kt(n, e) {
  let t = n?.parentElement;
  for (; t; ) {
    if (Vt(t)) {
      if (!e || e == "x") {
        let o = window.getComputedStyle(t);
        if (
          o.overflowX == "scroll" ||
          o.overflowX == "auto" ||
          o.position == "fixed"
        )
          break;
      }
      if (!e || e == "y") {
        let o = window.getComputedStyle(t);
        if (
          o.overflowY == "scroll" ||
          o.overflowY == "auto" ||
          o.position == "fixed"
        )
          break;
      }
    }
    t = t.parentElement;
  }
  return Vt(t) ? t : null;
}
function ot(n, e) {
  if (!("ownerDocument" in n)) return !0;
  let t = n.ownerDocument.defaultView.getComputedStyle(n),
    o = e === "x" ? t.overflowX : t.overflowY;
  return o === "auto" || o === "scroll";
}
var Le = class {
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
        o = !1;
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
  Me = class extends Le {
    m_fnCallback;
    constructor(e, t, o) {
      super(e, t), (this.m_fnCallback = o);
    }
    Update(e) {
      this.m_fnCallback(e);
    }
  },
  Ge = class extends Le {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(e, t, o) {
      super("ownerDocument" in e ? ke(e) : e, o),
        (this.m_object = e),
        (this.m_propTargets = t);
    }
    Start() {
      this.m_props = {};
      for (let e in this.m_propTargets) {
        let t = parseFloat(this.m_object[e]) || 0,
          o = this.m_propTargets[e];
        t != o && (this.m_props[e] = { start: t, end: o });
      }
      super.Start();
    }
    Update(e) {
      for (let t in this.m_props) {
        let o = this.m_props[t],
          i = o.start + (o.end - o.start) * e;
        this.m_object[t] = i;
      }
    }
  };
var Z = new y("ScrollSnap").Debug,
  On = !1;
var Bn = 1.4,
  it,
  Wn = 500;
function qt(n, e) {
  let t = n.Element;
  if (!t) return;
  let o = [n];
  for (let i = n.Parent; i; i = i.Parent) {
    let r = i.m_Properties?.scrollIntoViewWhenChildFocused;
    r === "force" ? (o = [i]) : r && o.push(i);
  }
  for (; o.length; ) {
    let i = o.pop(),
      r = o.length == 0,
      s = i?.m_Properties?.scrollIntoViewType;
    if (
      (s === void 0 && (On ? (s = 1) : (s = 0)),
      i?.m_Properties?.fnScrollIntoViewHandler &&
        i.m_Properties.fnScrollIntoViewHandler(n, e, i) !== !1)
    )
      continue;
    let a = i.m_element,
      l = s == 1 || s == 2 || !r;
    if (!e)
      l
        ? Be(t, a, "auto")
        : a?.scrollIntoView({
            behavior: "auto",
            block: "nearest",
            inline: "nearest",
          });
    else {
      let c = l ? ge(a) : a.getBoundingClientRect(),
        u = !1,
        p = Math.max((c.bottom - c.top) * Bn, 40);
      ((it && performance.now() - it < Wn) ||
        c.bottom < -p ||
        c.top > window.innerHeight + p) &&
        (u = !0);
      let d = u ? "auto" : "smooth";
      u && (it = performance.now()),
        n.Tree.Controller.BIsRestoringHistory() && (d = "auto"),
        l ? Be(t, a, d) : a.scrollIntoView({ behavior: d, block: "nearest" });
    }
  }
}
function ge(n) {
  if (!n) return { left: 0, top: 0, right: 0, bottom: 0 };
  if (!("ownerDocument" in n))
    return { left: 0, right: n.innerWidth, top: 0, bottom: n.innerHeight };
  let e = 0,
    t = 0,
    o = n;
  for (
    ;
    o &&
    ((e += o.offsetTop),
    (t += o.offsetLeft),
    !("ownerDocument" in o && window.getComputedStyle(o).position === "fixed"));
  )
    o = o.offsetParent;
  for (o = n?.parentElement; o; ) {
    let { scrollTop: i, scrollLeft: r } = zn(o);
    if (
      ((e -= i),
      (t -= r),
      "ownerDocument" in o && window.getComputedStyle(o).position === "fixed")
    )
      break;
    o = o.parentElement;
  }
  return {
    left: t,
    top: e,
    right: t + n.offsetWidth,
    bottom: e + n.offsetHeight,
  };
}
function rt(n, e) {
  return e == "x"
    ? [n.left, n.right, n.right - n.left]
    : [n.top, n.bottom, n.bottom - n.top];
}
function zt(n, e, t, o) {
  let [i, r, s] = rt(n, o),
    [a, l, c] = rt(e, o),
    [u, p] = rt(t, o);
  return i < a && r > l
    ? 0
    : (i < a && s <= c) || (r > l && s > c)
      ? i - a - u
      : (i < a && s > c) || (r > l && s <= c)
        ? r - l + p
        : 0;
}
function q(n) {
  return n == "auto"
    ? 0
    : n.endsWith("px")
      ? parseInt(n)
      : (console.log("Unsupported length", n), 0);
}
function Un(n) {
  let e;
  return (
    "ownerDocument" in n
      ? (e = n.ownerDocument.defaultView.getComputedStyle(n))
      : (e = n.document.defaultView.getComputedStyle(
          window.document.documentElement,
        )),
    {
      left: q(e.scrollPaddingLeft),
      right: q(e.scrollPaddingRight),
      top: q(e.scrollPaddingTop),
      bottom: q(e.scrollPaddingBottom),
    }
  );
}
function Vn(n) {
  if (!("ownerDocument" in n)) return { left: 0, right: 0, top: 0, bottom: 0 };
  let e = n.ownerDocument.defaultView.getComputedStyle(n);
  return {
    left: q(e.scrollMarginLeft),
    right: q(e.scrollMarginRight),
    top: q(e.scrollMarginTop),
    bottom: q(e.scrollMarginBottom),
  };
}
function Kn(n, e) {
  let t = Un(n);
  return {
    left: Math.max(0, e.left + t.left),
    right: Math.max(0, e.right - t.right),
    top: Math.max(0, e.top + t.top),
    bottom: Math.max(0, e.bottom - t.bottom),
  };
}
function He(n) {
  return n > -1 && n < 1;
}
function Be(n, e, t, o, i) {
  Z(
    "----------------------------------------------------------------------------------",
  ),
    Z("Scrolling Into View:", e);
  let r = [],
    s = e,
    a = ge(e),
    l = i ?? Number.MAX_VALUE;
  for (; s; ) {
    let u = Kt(s);
    u || (u = ke(s));
    let p = Vn(s),
      d = ge(u),
      f = Kn(u, d),
      v = $t(u),
      b = { element: u, left: 0, top: 0 };
    if (
      (Z(
        "Checking scroll div",
        u,
        `scroll y:${v.scrollTop} of ${v.MaxScrollTop()}, x:${v.scrollLeft} of ${v.MaxScrollLeft()}, adjusted =>`,
        f,
        "target => ",
        a,
      ),
      (!o || o == "y") &&
        ot(u, "y") &&
        ((b.top = zt(a, f, p, "y")),
        (b.top = de.Clamp(b.top, -v.scrollTop, v.MaxScrollTop() - v.scrollTop)),
        i &&
          ((b.top = Math.min(l, Math.abs(b.top)) * (b.top < 0 ? -1 : 1)),
          (l -= Math.abs(b.top))),
        Z(`- checked y: ${b.top}`)),
      (!o || o == "x") &&
        ot(u, "x") &&
        ((b.left = zt(a, f, p, "x")),
        (b.left = de.Clamp(
          b.left,
          -v.scrollLeft,
          v.MaxScrollLeft() - v.scrollLeft,
        )),
        i &&
          ((b.left = Math.min(l, Math.abs(b.left)) * (b.left < 0 ? -1 : 1)),
          (l -= Math.abs(b.left))),
        Z(`- checked x: ${b.left}`)),
      r.push(b),
      (i && !l) || !("ownerDocument" in u))
    )
      break;
    let S = window.getComputedStyle(u);
    if (S.position === "fixed" || S.position === "sticky") break;
    (s = u),
      (a = {
        top: a.top - b.top,
        right: a.right - b.left,
        bottom: a.bottom - b.top,
        left: a.left - b.left,
      });
  }
  let c = !1;
  for (let u of r) {
    if (He(u.left) && He(u.top)) continue;
    let p = $t(u.element),
      d = p.scrollTop + u.top,
      f = p.scrollLeft + u.left;
    (f = de.Clamp(f, 0, p.MaxScrollLeft())),
      (d = de.Clamp(d, 0, p.MaxScrollTop())),
      !(He(p.scrollLeft - f) && He(p.scrollTop - d)) &&
        (p.scrollTo({ left: f, top: d, behavior: t }),
        c || (Z("Scrolling:"), (c = !0)),
        Z(`- ${u.top},${u.left} => ${d}, ${f}, behavior: ${t}`, u.element));
  }
}
var Oe = class {
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
        (this.m_element.scrollTo = (t, o) => {
          typeof t == "number"
            ? this.scrollTo({ left: t, top: o })
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
        o = e.top ?? this.scrollTop,
        i = "sine";
      if (
        (this.m_animation && (this.m_animation.Cancel(), (i = "linear")),
        Math.max(
          Math.abs(this.currentScrollTop - o),
          Math.abs(this.currentScrollLeft - t),
        ) > 0)
      ) {
        let a = {
          msDuration: 200,
          timing: i,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let l = this.currentScrollLeft,
            c = this.currentScrollTop;
          this.m_animation = new Me(this.m_window, a, (u) => {
            this.m_window?.scrollTo({
              left: l + (t - l) * u,
              top: c + (o - c) * u,
              behavior: "auto",
            });
          });
        } else
          (this.m_element.style.scrollSnapType = "initial"),
            (this.m_animation = new Ge(
              this.m_element,
              { scrollTop: o, scrollLeft: t },
              a,
            ));
        (this.m_scrollLeftTarget = t),
          (this.m_scrollTopTarget = o),
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
F([E], Oe.prototype, "ResetScrollState", 1);
var at = new WeakMap();
function $t(n) {
  let e = at.get(n);
  return e || ((e = new Oe(n)), at.set(n, e)), e;
}
function zn(n) {
  let e = at.get(n);
  return e
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
}
var Y = new y("FocusNavigationMovement").Debug,
  Ve = ((a) => (
    (a[(a.NONE = 0)] = "NONE"),
    (a[(a.COLUMN = 1)] = "COLUMN"),
    (a[(a.ROW = 2)] = "ROW"),
    (a[(a.COLUMN_REVERSE = 3)] = "COLUMN_REVERSE"),
    (a[(a.ROW_REVERSE = 4)] = "ROW_REVERSE"),
    (a[(a.GRID = 5)] = "GRID"),
    (a[(a.GEOMETRIC = 6)] = "GEOMETRIC"),
    a
  ))(Ve || {}),
  Yt = ((r) => (
    (r[(r.FIRST = 0)] = "FIRST"),
    (r[(r.LAST = 1)] = "LAST"),
    (r[(r.MAINTAIN_X = 2)] = "MAINTAIN_X"),
    (r[(r.MAINTAIN_Y = 3)] = "MAINTAIN_Y"),
    (r[(r.PREFERRED_CHILD = 4)] = "PREFERRED_CHILD"),
    r
  ))(Yt || {});
var Xt = ((o) => (
    (o[(o.INVALID = 0)] = "INVALID"),
    (o[(o.FORWARD = 1)] = "FORWARD"),
    (o[(o.BACKWARD = 2)] = "BACKWARD"),
    o
  ))(Xt || {}),
  ae = class ae {
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
    m_FocusCallbackList = new h();
    m_bFocusWithin = !1;
    m_FocusWithinCallbackList = new h();
    m_ActionDescriptionsChangedCallbackList = new h();
    m_RetainFocusParent = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(e, t, o) {
      (this.m_Tree = e),
        (this.m_Parent = t),
        (this.m_FocusRing = o),
        (this.m_nDepth = t ? t.m_nDepth + 1 : 0);
    }
    CreateHandle() {
      return new Ke(this);
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
      let t = !Ot(
          this.m_Properties?.actionDescriptionMap,
          e?.actionDescriptionMap,
        ),
        o = this.m_Properties?.retainFocus,
        i = this.m_Properties?.noFocusRing;
      (this.m_Properties = e || {}),
        t && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.retainFocus && !o
          ? this.PropagateRetainFocusParentToChildren(this)
          : !this.m_Properties.retainFocus &&
            o &&
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
        for (let o in t) {
          let i = o;
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
        o = this.m_Properties?.autoFocus || t;
      if (this.BWantsAutoFocus() || o) {
        let i = -1;
        this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (i = this.m_rgChildren.findIndex((r) => r.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || o || i !== -1) &&
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
        let i = this.m_rgChildren.findIndex((r) => r.BFocusWithin());
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
        (Y(
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
          De(this.m_element, this.OnNavigationEvent),
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
        (this.m_rgChildren.sort((t, o) => {
          let i = t.m_element,
            r = o.m_element;
          if (i) {
            if (!r) return -1;
          } else return r ? 1 : 0;
          let s = i.compareDocumentPosition(r);
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
            Y(
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
        childFocusDisabled: o,
        fnCanTakeFocus: i,
      } = this.m_Properties;
      return !this.m_bMounted || (i && !i(this))
        ? "none"
        : e || (t && (o || this.m_rgChildren.length == 0))
          ? "self"
          : !o && this.m_rgChildren.length
            ? "children"
            : "none";
    }
    BTakeFocus(e, t) {
      let o = this.FindFocusableNode(t);
      return this.InternalFocusDescendant(o, e, t);
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
      let o = this.FindFocusableDescendant(t);
      return this.InternalFocusDescendant(o, e, t);
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
      let o = Ue(e),
        { focusableIfNoChildren: i, childFocusDisabled: r } =
          this.m_Properties ?? {};
      if (r) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: s, resetNavOnEntry: a } =
            this.m_Properties ?? {},
          l = this.GetActiveChildIndex();
        if ((a && e !== void 0 && (l = -1), !this.IsValidChildIndex(l))) {
          let u = this.GetLayout();
          l >= this.m_rgChildren.length || u == 4 || u == 3 || s == 1
            ? (l = this.m_rgChildren.length - 1)
            : (l = 0);
        }
        let c;
        if ((s == 2 || s == 3 || t) && o) {
          let u;
          s == 2 ? (u = "x") : s == 3 && (u = "y");
          let p;
          u == re[o] &&
            (p =
              this.m_Tree.GetLastFocusedMovementRect(re[o]) ??
              this.m_Tree.GetLastFocusedNode()?.GetBoundingRect()),
            Y(
              `Taking focus while preserving ${s && Yt[s]} preserved: ${u} movement: ${o}, node:`,
              p || t,
            );
          let d = this.ComputeRelativeDirection(e, 5);
          if (p || t) {
            let f = d == 2 ? this.m_rgChildren.length - 1 : 0;
            c = this.FindClosestChildInNextAxiallyAlignedSet(
              u || re[o],
              d,
              e,
              p || t,
              f,
              this.m_rgChildren[f].GetBoundingRect(),
            );
          } else if (u != re[o]) {
            let f = d == 2 ? this.m_rgChildren.length : -1;
            c = this.FindNextFocusableChildInDirection(f, d, e);
          }
        } else if (s == 4) {
          for (let u of this.m_rgChildren)
            if (
              ((c = u.BWantsPreferredFocus() ? u.FindFocusableNode(e) : void 0),
              c)
            )
              return c;
        } else
          s == 1 && (c = this.FindNextFocusableChildInDirection(l + 1, 2, e));
        return (
          c || (c = this.FindNextFocusableChildInDirection(l - 1, 1, e)),
          c || (c = this.FindNextFocusableChildInDirection(l, 2, e)),
          c || (i ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(e) {
      let t = this.Element?.ownerDocument?.defaultView ?? window,
        o = { top: 0, left: 0, right: t.innerWidth, bottom: t.innerHeight },
        i = nt(this, o);
      return (
        Y(
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
          : Zt(this.m_element);
    }
    OnNavigationEvent(e) {
      let t = e.detail.button;
      if (this.BTryInternalNavigation(t, e.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: i,
          onMoveRight: r,
          onMoveDown: s,
          onMoveLeft: a,
        } = this.m_Properties ?? {},
        l = !1;
      switch (t) {
        case 9:
          i && (l = i(e.detail, this));
          break;
        case 12:
          r && (l = r(e.detail, this));
          break;
        case 10:
          s && (l = s(e.detail, this));
          break;
        case 11:
          a && (l = a(e.detail, this));
          break;
      }
      return l;
    }
    InternalFocusDescendant(e, t, o) {
      return e ? (this.m_Tree.TransferFocus(t, e, Ue(o)), !0) : !1;
    }
    BTryInternalNavigation(e, t) {
      let o = this.GetLayout(),
        i = this.ComputeRelativeDirection(e, o);
      if (
        (Y(
          `Handling navigation event ${K[e]} - ${Ve[o]} - ${Xt[i]}`,
          this.m_element,
        ),
        i == 0)
      )
        return !1;
      if (this.m_Properties?.focusable && this.m_bFocused)
        return Y("Skipping navigation within focused element"), !1;
      this.EnsureChildrenSorted(!0);
      let r;
      if (o == 5)
        r = this.FindNextFocusableChildInGrid(this.GetActiveChildIndex(), i, e);
      else {
        let s = this.GetActiveChildIndex();
        this.IsValidChildIndex(s) ||
          (s = i == 1 ? -1 : this.m_rgChildren.length),
          (r = this.FindNextFocusableChildInDirection(s, i, e));
      }
      if (r) {
        let s = Ue(e);
        if (this.GetScrollIntoViewType() == 2) {
          let a = r.Element?.ownerDocument.defaultView;
          if (a) {
            let l =
                (s == "y" ? a.innerHeight : a.innerWidth) / (t ? 4.5 : 3.33),
              c = ge(r.Element);
            if (
              (c.top > a.innerHeight && c.bottom > a.innerHeight + l) ||
              (c.bottom < 0 && c.top < -l) ||
              (c.left > a.innerWidth && c.right > a.innerWidth + l) ||
              (c.right < 0 && c.left < -l)
            )
              return (
                Y(`Element too far away, scrolling ${l} on ${s} axis `),
                Be(r.Element, r.Element, "smooth", s, l),
                !0
              );
          }
        }
        return this.m_Tree.TransferFocus(0, r, s), !0;
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
      let o = t == 4 || t == 3;
      switch (t) {
        case 2:
        case 4:
          switch (e) {
            case 11:
              return o ? 1 : 2;
            case 12:
              return o ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (e) {
            case 9:
              return o ? 1 : 2;
            case 10:
              return o ? 2 : 1;
            default:
              return 0;
          }
        case 5:
          switch (e) {
            case 11:
            case 9:
              return o ? 1 : 2;
            case 12:
            case 10:
              return o ? 2 : 1;
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
    FindNextFocusableChildInDirection(e, t, o) {
      let i = t == 1 ? 1 : -1;
      for (let r = e + i; r >= 0 && r < this.m_rgChildren.length; r += i) {
        let s = this.m_rgChildren[r].FindFocusableNode(o);
        if (s) return s;
      }
      return null;
    }
    ScanChildren(e, t, o) {
      let i = t == 1 ? 1 : -1;
      for (let r = e; r >= 0 && r < this.m_rgChildren.length; r += i)
        if (o(this.m_rgChildren[r], r)) return r;
      return -1;
    }
    FindNextFocusableChildInGrid(e, t, o) {
      let i = o == 9 || o == 10,
        r = this.GetLastFocusElement();
      if (!r || r == this.m_element)
        return (
          D(
            !1,
            "No active child for grid navigation",
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            r,
          ),
          this.FindFocusableDescendant(o)
        );
      let s = this.GetActiveDescendant().GetBoundingRect();
      if (o == 9 || o == 10) {
        let a =
          this.m_Tree.GetLastFocusedMovementRect("x") ??
          this.m_Tree.GetLastFocusedNode()?.GetBoundingRect();
        a && ((s.x = a.x), (s.width = a.width));
      }
      if (i) {
        let a = e;
        for (; a != -1; ) {
          let l = this.ScanChildren(
            this.AdvanceIndex(a, t),
            t,
            (c) => !We("y", s, c.GetBoundingRect()),
          );
          if (l != -1) {
            let c = this.m_rgChildren[l].GetBoundingRect(),
              u = this.FindClosestChildInNextAxiallyAlignedSet(
                "x",
                t,
                o,
                s,
                l,
                c,
              );
            if (u) return u;
          }
          a = l;
        }
      } else {
        let a = t == 1 ? 1 : -1;
        for (
          let l = this.AdvanceIndex(e, t);
          l >= 0 && l < this.m_rgChildren.length;
          l += a
        ) {
          let c = this.m_rgChildren[l];
          if (!We("y", s, c.GetBoundingRect())) return null;
          let u = c.FindFocusableNode(o);
          if (u) return u;
        }
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(e, t, o, i, r, s) {
      (!r || r < 0) && (r = 0);
      let a = [];
      if (!i) return null;
      let l = Jt(i);
      this.ScanChildren(r, t, (c) => {
        let u = c.GetBoundingRect();
        return u
          ? s && !We(re[e], s, u)
            ? !0
            : (a.push({ child: c, overlap: jt(e, i, u), dist: Qt(e, l, u) }),
              !1)
          : !1;
      }),
        t == 2 && a.reverse(),
        a.sort((c, u) => {
          let p = u.overlap - c.overlap;
          return p != 0 ? p : c.dist - u.dist;
        });
      for (let { child: c } of a) {
        let u = c.FindFocusableNode(o, i);
        if (u) return u;
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
      e instanceof ae
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
            Y(
              `Didn't move focus to element as tree ${this.m_Tree.id} is not active focus tree`,
            ),
        qt(this, t),
        this.m_Tree.OnChildActivated(e);
    }
  };
F([E], ae.prototype, "OnDOMFocus", 1),
  F([E], ae.prototype, "OnDOMBlur", 1),
  F([E], ae.prototype, "OnNavigationEvent", 1);
var Ce = ae;
function en(n, e) {
  return n ? typeof n.SteamClient == "object" && e in n.SteamClient : !1;
}
function tn(n, e) {
  if (!n) return !1;
  let [t, o] = e.split(".", 2);
  return t && o && en(n, t) && o in n.SteamClient[t];
}
function st(n) {
  return tn(window, n);
}
var nn = new y("FocusNavigation").Debug,
  $n = new y("GamepadEvents").Debug,
  ze = class {
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
    m_onActivateCallbacks = new h();
    m_onDeactivateCallbacks = new h();
    m_onActiveFocusStateChangedCallbacks = new h();
    m_onChildTreesChanged = new h();
    m_bVirtualFocus = !1;
    m_bModal = !1;
    m_bIsEmbeddedInLegacyTree = !1;
    m_onGlobalButtonDown;
    m_onUnhandledButton;
    constructor(e, t, o, i) {
      (this.m_Controller = e),
        (this.m_context = t),
        (this.m_ID = o),
        (this.m_ParentNavTree = i),
        (this.m_Root = new Ce(this, null, null)),
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
      return new Ce(this, e, t);
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
    m_lastFocusNodeXMovement = new $e();
    m_lastFocusNodeYMovement = new $e();
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
      let o = !1;
      t
        ? (o = this.Root.BVisibleChildTakeFocus(e))
        : this.m_lastFocusNode && (o = this.m_lastFocusNode.BTakeFocus(e)),
        o || (o = this.Root.BTakeFocus(e)),
        o || this.TransferFocus(e, this.Root);
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
      let o = this.m_ParentNavTree
        ? this.m_ParentNavTree.AddChildNavTree(this)
        : void 0;
      return () => {
        (this.m_bIsMounted = !1), o && o();
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
      let { bUnhandled: t, bHadLogicalEventMapping: o } = Nt(e);
      return (
        $n(
          `Logical gamepad Event fired: ${K[e.detail.button]}, had logical event: ${o}, was handled: ${!t}`,
        ),
        t && this.m_onUnhandledButton && (t = this.m_onUnhandledButton(e)),
        t && (t = this.m_Controller.FireUnhandledGamepadEventCallbacks(e)),
        e.stopPropagation(),
        t
      );
    }
    m_DeferredFocus = new lt(this);
    get DeferredFocus() {
      return this.m_DeferredFocus;
    }
    AddChildNavTree(e) {
      return (
        this.m_rgChildNavTrees.push(e),
        this.OnChildTreesChangedCallbacks.Dispatch("add", e),
        () => {
          B.FindAndRemove(this.m_rgChildNavTrees, e),
            this.OnChildTreesChangedCallbacks.Dispatch("remove", e);
        }
      );
    }
    TransferFocus(e, t, o) {
      this.m_Controller.BatchedUpdate(() =>
        this.TransferFocusInternal(e, t, o),
      );
    }
    TransferFocusInternal(e, t, o) {
      let i = this.m_lastFocusNode;
      if (i == t && (this.m_bWasActiveForLastFocusChange || !this.BIsActive()))
        return;
      nn(
        `Transfer focus in ${this.id}, source: ${e && ne[e]}, from/to:`,
        i?.m_element,
        t?.m_element,
      );
      let r = { blurredNode: i, focusedNode: t, focusSource: e },
        s = qn(i, t);
      if (i) {
        i.SetHasFocus(!1);
        for (let l = i; l && l != s; l = l.Parent) l.SetFocusWithin(!1);
      }
      if (t) {
        t.SetHasFocus(!0);
        for (let l = t; l && l != s; l = l.Parent) l.SetFocusWithin(!0);
      }
      let a = this.m_context.OnFocusChangeStart(e, this, i, t);
      t && t.SetDOMFocusAndScroll(e, i),
        i &&
          (Q(i.Element, "vgp_onblur", r),
          i.m_FocusRing &&
            (!t || i.m_FocusRing != t.m_FocusRing) &&
            i.m_FocusRing.OnBlur(e, i, t)),
        t &&
          (Q(t.Element, "vgp_onfocus", r),
          t.m_FocusRing &&
            (i && t.m_FocusRing == i.m_FocusRing
              ? t.m_FocusRing.OnFocusChange(e, i, t)
              : t.m_FocusRing.OnFocus(e, t, i))),
        (this.m_lastFocusNode = t),
        (this.m_bWasActiveForLastFocusChange = this.BIsActive()),
        o == "x"
          ? this.m_lastFocusNodeXMovement.SetNode(t?.Element)
          : o == "y"
            ? this.m_lastFocusNodeYMovement.SetNode(t?.Element)
            : (this.m_lastFocusNodeXMovement.Reset(),
              this.m_lastFocusNodeYMovement.Reset()),
        this.m_context.OnFocusChangeComplete(a);
    }
  };
function qn(n, e) {
  if (!e || !n) return null;
  let t = e,
    o = n;
  for (; t.GetDepth() > o.GetDepth() && t.Parent; ) t = t.Parent;
  for (; o.GetDepth() > t.GetDepth() && o.Parent; ) o = o.Parent;
  for (; t != o && t && o; ) (t = t.Parent), (o = o.Parent);
  return t;
}
var $e = class {
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
  lt = class {
    m_tree;
    m_target;
    m_interval;
    m_schExecuteQueuedFocus = new Se();
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
          nn(
            `DeferredFocus in ${this.m_tree.id} - focusing ${t ? "descendant of" : "node"} ${e.NavKey}`,
          ),
          t
            ? e.BChildTakeFocus(2) || this.m_tree.TransferFocus(2, e)
            : e.BTakeFocus(2);
      }
    }
  };
var V = new y("FocusNavigation").Debug,
  qe = class {
    m_rootWindow;
    m_activeWindow;
    m_activeBrowserView;
    m_valueIsActive = pe(!1);
    m_controller;
    m_rgGamepadNavigationTrees = [];
    m_LastActiveNavTree;
    m_LastActiveFocusNavTree;
    m_bMounted = !0;
    m_schDeferredActivate = new Se();
    m_FocusChangedCallbacks = new h();
    m_bIsGamepadInputSuppressed = !1;
    constructor(e, t, o) {
      (this.m_controller = e),
        (this.m_rootWindow = t),
        (this.m_activeWindow = t),
        (this.m_bIsGamepadInputSuppressed = o);
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
        ? (V(`${this.LogName(e)} Destroying context for window`),
          (this.m_bMounted = !1),
          this.m_schDeferredActivate.Cancel(),
          this.SetActive(!1, e))
        : V(`${this.LogName(e)} Child window destroyed`);
    }
    SetActive(e, t, o = void 0) {
      this.m_controller.BatchedUpdate(() => {
        let i = this.m_valueIsActive.Value != e;
        e
          ? ((this.m_activeWindow = t),
            (this.m_activeBrowserView = o),
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
        (V(
          `${this.LogName(e)} Activating context, there are ${this.m_rgGamepadNavigationTrees.length} trees in this context`,
        ),
        this.SetActive(!0, e));
    }
    OnActivateBrowserView(e, t) {
      (this.BIsActive() &&
        this.m_activeWindow == e &&
        this.m_activeBrowserView == t) ||
        (V(`${this.LogName(e)} Browser View "${t}" activated in context`),
        this.SetActive(!0, e, t));
    }
    OnDeactivate(e) {
      this.m_activeWindow == e
        ? (V(`${this.LogName(e)} Deactivate context for window`),
          this.SetActive(!1, e))
        : V(
            `${this.LogName(e)} Blurred, but not deactivating because (${this.m_activeWindow?.name}) has focus.`,
          );
    }
    OnDeactivateBrowserView(e, t) {
      V(`${this.LogName(e)} Browser View "${t}" deactivated in context`),
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
      let o = this.m_LastActiveNavTree;
      o && B.FindAndRemove(this.m_rgGamepadNavigationTrees, o),
        e || (e = this.FindNavTreeToActivate());
      let i = this.m_LastActiveFocusNavTree == e;
      e && B.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        (this.m_LastActiveNavTree = e),
        (!e || !e.BUseVirtualFocus()) && (this.m_LastActiveFocusNavTree = e),
        V(
          `${this.LogName(e?.Window)} Move from nav tree ${o?.id} to nav tree ${e?.id} ${t ? "taking focus" : "no focus"}`,
        ),
        o && this.m_rgGamepadNavigationTrees.push(o),
        e &&
          (this.m_rgGamepadNavigationTrees.push(e),
          !i &&
            t &&
            !e.DeferredFocus.BHasQueuedFocusNode() &&
            e.DeferredFocus.RequestFocus(e.Root)),
        o && o != this.m_LastActiveFocusNavTree && o.OnDeactivate(e),
        e && !i && e.OnActivate(o);
    }
    BlurNavTree(e) {
      this.m_LastActiveNavTree == e && this.SetActiveNavTree(void 0, !0),
        B.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        this.m_rgGamepadNavigationTrees.unshift(e);
    }
    UnregisterGamepadNavigationTree(e) {
      B.FindAndRemove(this.m_rgGamepadNavigationTrees, e),
        V(
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
    OnFocusChangeStart(e, t, o, i) {
      return (
        this.m_iFocusChangeStack == 0
          ? (this.m_ActiveFocusChange = {
              source: e,
              from: o || void 0,
              to: i || void 0,
            })
          : this.m_ActiveFocusChange &&
            (!this.m_ActiveFocusChange.from &&
              o &&
              (this.m_ActiveFocusChange.from = o),
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
        let { source: t, from: o, to: i } = this.m_ActiveFocusChange ?? {};
        this.m_FocusChangedCallbacks.Dispatch(t, o, i);
      }
    }
  };
var H = new y("FocusNavigation").Debug,
  Yn = new y("FocusNavigation").Assert,
  ct = "focus-nav-show-debug-focus-ring";
function Xn() {
  return sessionStorage.getItem(ct) == "shown";
}
function jn(n) {
  n ? sessionStorage.setItem(ct, "shown") : sessionStorage.removeItem(ct);
}
function Qn(n, e) {
  return (
    n?.eActivationSourceType === e?.eActivationSourceType &&
    n?.nActiveGamepadIndex === e?.nActiveGamepadIndex &&
    n?.nLastActiveGamepadIndex === e?.nLastActiveGamepadIndex
  );
}
var he = class {
  m_rgGamepadInputSources = [];
  m_DefaultContext;
  m_rgAllContexts = [];
  m_ActiveContext;
  m_LastActiveContext;
  m_fnCatchAllGamepadInput = null;
  m_UnhandledButtonEventsCallbacks = new h();
  m_navigationSource = pe(
    {
      eActivationSourceType: 0,
      nActiveGamepadIndex: -1,
      nLastActiveGamepadIndex: -1,
    },
    Qn,
  );
  m_navigationSourceSupportsFocus = pt(
    this.m_navigationSource,
    (e) => e?.eActivationSourceType === 1 || e?.eActivationSourceType === 2,
  );
  m_bShowDebugFocusRing = pe(!1);
  m_bRestoringHistory = !1;
  m_fnGamepadEventUpdateBatcher = (e) => e();
  constructor() {
    window.FocusNavController = this;
  }
  Init() {
    this.m_bShowDebugFocusRing.Set(Xn());
  }
  CreateContext(e, t) {
    let o = new qe(this, e, t);
    return this.m_rgAllContexts.push(o), o;
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
          H(
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
        (H(
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
    this.m_bShowDebugFocusRing.Set(e), jn(e);
  }
  GetShowDebugFocusRing() {
    return this.m_bShowDebugFocusRing;
  }
  RegisterInputSource(e) {
    let t = new mt();
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
      e.GetSourceType() == 1 && this.UpdateDefaultSourceToGamepad(),
      t.GetUnregisterFunc()
    );
  }
  UpdateDefaultSourceToGamepad() {
    this.m_navigationSource.Value.eActivationSourceType == 0 &&
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
    let o;
    t && (o = this.GetActiveContext() ?? this.FindAnActiveContext()),
      this.OnButtonDown(e, 1, -1, void 0, t, o, !0),
      this.OnButtonUp(e, 1, -1, void 0, t, o, !0);
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
  GetEventTarget(e, t, o = !1) {
    let i = this.GetActiveContext();
    !i && o && (i = this.FindAnActiveContext());
    let r = i?.ActiveWindow?.document.activeElement;
    if (i?.m_LastActiveNavTree) {
      if (
        (t || (t = this.m_navigationSource?.Value?.eActivationSourceType),
        !i.m_LastActiveNavTree.GetLastFocusedNode() &&
          (t == 1 || t == 2) &&
          (H(
            `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} has no focused node, ${o ? "finding one" : "will not find one"}`,
          ),
          o && i.m_LastActiveNavTree.TakeFocus(0, !0),
          !this.BGlobalGamepadButton(e)))
      )
        return [void 0, i];
      i.m_LastActiveNavTree.GetLastFocusedNode()
        ? (r = i.m_LastActiveNavTree?.GetLastFocusedNode()?.Element)
        : H(
            `GetEventTarget: Context ${i.LogName()} tree ${i.m_LastActiveNavTree.id} still has no focused node - will fall back to document.activeElement`,
          );
    }
    return [r, i];
  }
  ChangeNavigationSource(e, t) {
    let o = this.m_navigationSource.Value,
      i = o.nLastActiveGamepadIndex;
    return (
      o.nActiveGamepadIndex &&
        o.nActiveGamepadIndex >= 0 &&
        (i = o.nActiveGamepadIndex),
      this.m_navigationSource.Set({
        eActivationSourceType: e,
        nActiveGamepadIndex: t,
        nLastActiveGamepadIndex: i,
      }),
      e != 3 &&
        st("Browser.HideCursorUntilMouseEvent") &&
        SteamClient.Browser.HideCursorUntilMouseEvent(),
      o.eActivationSourceType != e
    );
  }
  OnButtonActionInternal(e, t, o, i, r, s, a, l) {
    if (this.m_fnCatchAllGamepadInput && this.m_fnCatchAllGamepadInput(t)) {
      e &&
        H(
          "Ignoring button press - gamepad input is suppressed by parent window",
        );
      return;
    }
    Yn(
      !!s == !!a,
      "Must set both overrideContext and overrideElement or neither",
    );
    let c = s,
      u = a;
    if (
      ((c == null || u == null) && ([c, u] = this.GetEventTarget(t, o, e)),
      u?.BIsGamepadInputSuppressed() && !l)
    ) {
      H(
        `Suppressing ${K[t]} input on element ${c?.className} because tree ${u?.m_LastActiveNavTree?.id} has it disabled`,
      );
      return;
    }
    this.ChangeNavigationSource(o, i),
      e && H(`Firing ${K[t]} in tree ${u?.m_LastActiveNavTree?.id} at `, c),
      this.BatchedUpdate(() =>
        Q(c, e ? "vgp_onbuttondown" : "vgp_onbuttonup", {
          button: t,
          source: o,
          is_repeat: r,
        }),
      );
  }
  OnButtonDown(e, t, o, i, r, s, a) {
    this.OnButtonActionInternal(!0, e, t, o, i, r, s, a);
  }
  OnButtonUp(e, t, o, i, r, s, a) {
    this.OnButtonActionInternal(!1, e, t, o, !1, r, s, a);
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
        o = Jn(t?.Element) ? t : null;
      this.m_ActiveContext.m_LastActiveNavTree?.TransferFocus(2, o);
    }
  }
  NewGamepadNavigationTree(e, t, o) {
    return new ze(this, e, t, o);
  }
  RegisterGamepadNavigationTree(e, t) {
    let o = e.WindowContext;
    o.AddNavTree(e);
    let i = e.MountNavTree(t);
    return (
      !e.Parent &&
        e.BIsEnabled() &&
        (o.SetActiveNavTree(e, !0),
        (this.m_LastActiveContext = this.m_ActiveContext = o)),
      () => {
        i(), o.UnregisterGamepadNavigationTree(e);
      }
    );
  }
  OnGamepadNavigationTreeActivated(e, t = !1) {
    e.WindowContext.SetActiveNavTree(e, t);
  }
  OnGamepadNavigationTreeFocused(e, t, o = !1) {
    let i = e.WindowContext;
    i != this.m_ActiveContext &&
      H(`(${i.LogName(e.Window)}) Focus event in inactive window`),
      e != i.m_LastActiveFocusNavTree &&
        e != i.m_LastActiveNavTree &&
        (i.m_LastActiveFocusNavTree?.GetParentEmbeddedNavTree() == e ||
        e.GetParentEmbeddedNavTree() == i.m_LastActiveFocusNavTree
          ? (H(
              `There was a focus event in ${e.id}, allowing focus transfer to activate nav tree due to parent embedded relationship`,
            ),
            e.Activate())
          : H(
              `There was a focus event in ${e.id}, but the active nav tree is ${i.m_LastActiveFocusNavTree?.id} so it is being ignored.  Source: ${t && ne[t]}.`,
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
      B.FindAndRemove(this.m_rgAllContexts, e)),
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
F([E], he.prototype, "OnButtonDown", 1),
  F([E], he.prototype, "OnButtonUp", 1),
  F([E], he.prototype, "OnNavigationTypeChange", 1);
function Jn(n) {
  if (!j(n)) return !1;
  let e = n.tagName,
    t = Ct(n) ? n.type : void 0;
  return ht(e, t);
}
var Ke = class {
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
    this.m_History || (this.m_History = new we(this.m_node)),
      this.m_History.PushState();
  }
  PopState(e = 0) {
    this.m_History && this.m_History.PopState(e);
  }
  SaveState(e) {
    this.m_StateHistory || (this.m_StateHistory = new xe(this.m_node)),
      this.m_StateHistory.SaveState(e);
  }
  RestoreState(e, t = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(e, t) : !1;
  }
  GetFocusSnapshot() {
    return Gt(this.m_node);
  }
  RestoreFocusSnapshot(e, t = 0) {
    return Ht(this.m_node, e, t);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function We(n, e, t, o = 0.001) {
  return n == "x"
    ? e.x + e.width > t.x + o && e.x + o < t.x + t.width
    : n == "y"
      ? e.y + e.height > t.y + o && e.y + o < t.y + t.height
      : (D(!1, `Invalid axis ${n}`), !1);
}
function jt(n, e, t) {
  let o;
  return (
    n == "x"
      ? (o = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x))
      : n == "y"
        ? (o = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y))
        : (D(!1, `Invalid axis ${n}`), (o = 0)),
    o < 0 ? 0 : o
  );
}
function Zn(n, e) {
  return n == "x"
    ? { min: e.x, max: e.x + e.width }
    : { min: e.y, max: e.y + e.height };
}
function Qt(n, e, t) {
  let o = e[n],
    i = Zn(n, t);
  return o < i.min ? i.min - o : o > i.max ? o - i.max : 0;
}
function Jt(n) {
  return { x: n.x, y: n.y };
}
var on = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function Zt(n) {
  if (!n) return 0;
  let e = n.ownerDocument.defaultView,
    t = e.getComputedStyle(n);
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
    if (n.childElementCount > 0) {
      let o = e.getComputedStyle(n.firstElementChild);
      if (o.float === "left") return 2;
      if (o.float === "right") return 4;
      if (o.display === "inline" || o.display === "inline-block") return 5;
    }
  }
  return 1;
}
function Ue(n) {
  switch (n) {
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
function se(n) {
  switch (n) {
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
var O = g(x(), 1);
function eo(n) {
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
var rn = O.default.createContext(eo);
function xr(n) {
  let { factory: e, children: t } = n,
    o = O.default.useMemo(() => e.CreateVirtualKeyboardRef.bind(e), [e]);
  return O.default.createElement(rn.Provider, { value: o }, t);
}
function an(n, e) {
  let { onTextEntered: t, ...o } = n,
    i = O.default.useRef(null),
    r = O.default.useRef({});
  Object.assign(r.current, {
    ...o,
    BIsElementValidForInput: () =>
      i.current && document.activeElement == i.current,
  });
  let s = to(r.current),
    a = O.default.useCallback(
      (c) => {
        if (!(!document.hasFocus() && document.activeElement == i.current)) {
          if (c.currentTarget != i.current) {
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
    l = Te(
      (c) => {
        i.current = c;
        let u = [];
        return (
          c &&
            (c.addEventListener("focus", s.SetAsCurrentVirtualKeyboardTarget),
            u.push(() =>
              c.removeEventListener(
                "focus",
                s.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            c.addEventListener("click", s.ShowVirtualKeyboard),
            u.push(() => c.removeEventListener("click", s.ShowVirtualKeyboard)),
            u.push(Ie(c, s.ShowVirtualKeyboard)),
            u.push(Ae(c, a))),
          () => u.forEach((p) => p())
        );
      },
      [a, s],
    );
  return (
    O.default.useLayoutEffect(
      () => (
        w(e, {
          TakeFocusAndShowKeyboard: () => {
            let c = i.current;
            c &&
              (document.activeElement != c && c.focus(),
              s.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            s.HideVirtualKeyboard();
          },
        }),
        () => w(e, null)
      ),
      [s, e],
    ),
    l
  );
}
function to(n) {
  let e = O.default.useRef(),
    t = O.default.useContext(rn);
  return e.current || (e.current = t(n || {})), e.current;
}
function sn(n) {
  let {
    onEnterKeyPress: e,
    strEnterKeyLabel: t,
    onKeyboardNavOut: o,
    onKeyboardShow: i,
    onKeyboardFullyVisible: r,
    onTextEntered: s,
    BIsElementValidForInput: a,
    ...l
  } = n;
  return {
    virtualKeyboardProps: {
      onEnterKeyPress: e,
      strEnterKeyLabel: t,
      onKeyboardNavOut: o,
      onKeyboardShow: i,
      onKeyboardFullyVisible: r,
      onTextEntered: s,
      BIsElementValidForInput: a,
    },
    props: l,
  };
}
var mn = g(A(), 1),
  ee = _.createContext(null),
  no = _.createContext(on);
function oo(n, e) {
  let t = _.useRef(null);
  return (
    n &&
      (!t.current || t.current.m_Parent != n) &&
      (t.current = n.Tree.CreateNode(n, e)),
    t.current
  );
}
function be(n) {
  let { navRef: e, ...t } = n,
    o = _.useRef(null),
    i = (0, Ye.useContext)(ee),
    r = (0, Ye.useContext)(no),
    s = oo(i, r);
  return (
    _.useLayoutEffect(() => {
      s && s.SetProperties(t);
    }),
    _.useLayoutEffect(() => {
      if (!i) return;
      let a = i.Tree.RegisterNavigationItem(s, o.current);
      return () => {
        a();
      };
    }, [i, s, o]),
    _.useLayoutEffect(() => {
      if (!(!s || !e)) return w(e, s.CreateHandle()), () => w(e, null);
    }, [s, e]),
    { ref: o, node: s }
  );
}
function io(n) {
  let {
      onButtonDown: e,
      onButtonUp: t,
      onOKButton: o,
      onCancelButton: i,
      onSecondaryButton: r,
      onOptionsButton: s,
      onGamepadDirection: a,
      onGamepadFocus: l,
      onGamepadBlur: c,
      onMenuButton: u,
      onOKActionDescription: p,
      onCancelActionDescription: d,
      onSecondaryActionDescription: f,
      onOptionsActionDescription: v,
      onMenuActionDescription: b,
      actionDescriptionMap: S,
      ...I
    } = n,
    C = {};
  e !== void 0 && (C.onButtonDown = e),
    t !== void 0 && (C.onButtonUp = t),
    o !== void 0 && (C.onOKButton = o),
    i !== void 0 && (C.onCancelButton = i),
    r !== void 0 && (C.onSecondaryButton = r),
    s !== void 0 && (C.onOptionsButton = s),
    u !== void 0 && (C.onMenuButton = u),
    a !== void 0 && (C.onGamepadDirection = a),
    l !== void 0 && (C.onGamepadFocus = l),
    c !== void 0 && (C.onGamepadBlur = c);
  let R = wt({
    onOKActionDescription: p,
    onCancelActionDescription: d,
    onSecondaryActionDescription: f,
    onOptionsActionDescription: v,
    onMenuActionDescription: b,
    actionDescriptionMap: S,
  });
  return { gamepadEvents: C, actionDescriptions: R, props: I };
}
function le(n) {
  let {
      autoFocus: e,
      preferredFocus: t,
      disableNavSounds: o,
      fnCanTakeFocus: i,
      childFocusDisabled: r,
      retainFocus: s,
      onFocusWithin: a,
      navKey: l,
      noFocusRing: c,
      focusable: u,
      focusableIfNoChildren: p,
      navRef: d,
      actionDescriptionMap: f,
      onMoveUp: v,
      onMoveRight: b,
      onMoveDown: S,
      onMoveLeft: I,
      navEntryPreferPosition: C,
      scrollIntoViewWhenChildFocused: R,
      fnScrollIntoViewHandler: ue,
      scrollIntoViewType: Qe,
      resetNavOnEntry: bn,
      ...vn
    } = n,
    { gamepadEvents: gn, actionDescriptions: Cn, props: hn } = io(vn),
    yn = {
      autoFocus: e,
      preferredFocus: t,
      disableNavSounds: o,
      fnCanTakeFocus: i,
      childFocusDisabled: r,
      retainFocus: s,
      onFocusWithin: a,
      navKey: l,
      noFocusRing: c,
      focusable: u,
      focusableIfNoChildren: p,
      navRef: d,
      onMoveUp: v,
      onMoveRight: b,
      onMoveDown: S,
      onMoveLeft: I,
      navEntryPreferPosition: C,
      scrollIntoViewWhenChildFocused: R,
      fnScrollIntoViewHandler: ue,
      scrollIntoViewType: Qe,
      resetNavOnEntry: bn,
      actionDescriptionMap: { ...f, ...Cn },
    };
  return { elemProps: hn, navOptions: yn, gamepadEvents: gn };
}
function ut(n) {
  return function (t) {
    let {
        focusClassName: o,
        focusWithinClassName: i,
        bFocusableByDefault: r,
        className: s,
        divRef: a,
        node: l,
        tabIndex: c,
        children: u,
        ...p
      } = t,
      d = bt(),
      f = fe(),
      v = l.BHasFocus() && f,
      b = l.BFocusWithin() && f,
      {
        bActiveTree: S,
        bActiveTreeWithinContext: I,
        bDisableFocusClasses: C,
      } = cn();
    te(l.FocusCallbackList, d), te(l.FocusWithinCallbackList, d);
    let R = S && !C,
      ue = !I && (c !== void 0 || r);
    return _.createElement(
      n,
      {
        ...p,
        className: (0, ye.default)(s, v && R && o, b && R && i),
        tabIndex: ue ? -1 : c,
        ref: a,
      },
      u,
    );
  };
}
var un = ut("div");
function ln(n) {
  return vt.PlayNavSound(21), j(n.currentTarget) && n.currentTarget.click(), !0;
}
var dn = _.createContext(void 0),
  kn = dn.Provider;
function pn(n, e, t, o, i) {
  let {
      elemProps: { focusClassName: r, children: s, "flow-children": a, ...l },
      navOptions: c,
      gamepadEvents: u,
    } = le(t),
    {
      bFocusableByDefault: p = !0,
      bActivateByDefault: d = !1,
      bDOMElementFocusByDefault: f = p,
    } = i || {};
  c.focusable === void 0 && !l.disabled && p && (c.focusable = !0);
  let v = se(a),
    { ref: b, node: S } = be({ layout: v, ...c });
  u.onOKButton ||
    ((("onClick" in l && l.onClick) || (d && (d === !0 || d(l)))) &&
      (u.onOKButton = ln)),
    c.focusable && !f
      ? (l.tabIndex = l.tabIndex || 0)
      : !c.focusable && f && (l.tabIndex = l.tabIndex ?? -1),
    z(u, b);
  let I = W(o, b),
    C = (0, Ye.useContext)(dn)?.Component;
  if (!S)
    return _.createElement(
      n,
      { ...l, ref: I, className: (0, ye.default)(l.className, "Focusable") },
      s,
    );
  let R = {
    ...l,
    divRef: I,
    node: S,
    focusClassName: (0, ye.default)(r, "gpfocus"),
    focusWithinClassName: "gpfocuswithin",
    bFocusableByDefault: f,
    className: (0, ye.default)(l.className, "Focusable"),
  };
  return (0, mn.jsx)(ee.Provider, {
    value: S,
    children: C
      ? _.createElement(C, { ...R, Component: e }, s)
      : _.createElement(e, R, s),
  });
}
function $(n, e) {
  let t = ut(n);
  return _.forwardRef(function (i, r) {
    return pn(n, t, i, r, e);
  });
}
function tt(n) {
  let e = ut(n);
  return _.forwardRef(function (o, i) {
    let {
        virtualKeyboardProps: r,
        props: { refKeyboardHandle: s, ...a },
      } = sn(o),
      l = an(r, s),
      c = W(i, l);
    return pn(n, e, a, c);
  });
}
var ce = g(A(), 1),
  xn = T.default.forwardRef(function (e, t) {
    let {
        navID: o,
        onActivated: i,
        onDeactivated: r,
        navTreeRef: s,
        enabled: a,
        modal: l,
        virtualFocus: c,
        parentEmbeddedNavTree: u,
        onGlobalButtonDown: p,
        disableFocusClasses: d,
        disabledRoot: f,
        "flow-children": v,
        ...b
      } = e,
      { elemProps: S, navOptions: I, gamepadEvents: C } = le(b);
    return (0, ce.jsx)(ro, {
      navID: o,
      onActivated: i,
      onDeactivated: r,
      navTreeRef: s,
      enabled: a,
      modal: l,
      virtualFocus: c,
      parentEmbeddedNavTree: u,
      onGlobalButtonDown: p,
      disableFocusClasses: d,
      disabledRoot: f,
      "flow-children": v,
      ...I,
      ...C,
      children: (0, ce.jsx)("div", { ...S, ref: t }),
    });
  });
function ro(n) {
  let {
      navID: e,
      onActivated: t,
      onDeactivated: o,
      navTreeRef: i,
      enabled: r = !0,
      modal: s = !1,
      virtualFocus: a = !1,
      children: l,
      parentEmbeddedNavTree: c,
      onGlobalButtonDown: u,
      disableFocusClasses: p = !1,
      disabledRoot: d = !1,
      "flow-children": f,
      ...v
    } = n,
    { elemProps: b, navOptions: S, gamepadEvents: I } = le(v),
    { refDiv: C, tree: R } = ao({
      navID: e,
      virtualFocus: a,
      parentEmbeddedNavTree: c,
      disabledRoot: d,
      enabled: r,
      modal: s,
      onGlobalButtonDown: u,
      navTreeRef: i,
    });
  te(R.OnActivateCallbacks, t),
    te(R.OnDeactivateCallbacks, o),
    xt(I, C, R),
    T.default.useLayoutEffect(() => {
      let Qe = se(f);
      R.Root.SetProperties({ ...S, layout: Qe });
    });
  let ue = W(C, l.ref);
  return (0, ce.jsx)(so, {
    tree: d ? null : R,
    disableFocusClasses: p || d,
    children: (0, ce.jsx)(ee.Provider, {
      value: d ? null : R.Root,
      children: T.default.cloneElement(l, {
        id: e,
        "data-react-nav-root": e,
        ref: ue,
      }),
    }),
  });
}
function ao(n) {
  let {
      navID: e,
      virtualFocus: t,
      parentEmbeddedNavTree: o,
      disabledRoot: i,
      enabled: r,
      modal: s,
      navTreeRef: a,
      onGlobalButtonDown: l,
    } = n,
    c = ie(),
    u = Mt() || c.GetDefaultContext(),
    p = T.default.useContext(ee),
    [d] = T.default.useState(() =>
      c.NewGamepadNavigationTree(u, e, o ?? p?.Tree),
    ),
    f = T.default.useRef(null);
  return (
    d.SetUseVirtualFocus(t),
    d.SetModal(s),
    d.SetIsEmbeddedInLegacyTree(!!o),
    d.SetOnGlobalButtonDown(l),
    T.default.useEffect(
      () => d.RegisterNavigationItem(d.Root, f.current),
      [d, f],
    ),
    T.default.useEffect(() => {
      d.SetIsEnabled(r);
    }, [d, r]),
    T.default.useEffect(() => {
      if (!i)
        return c.RegisterGamepadNavigationTree(
          d,
          f.current.ownerDocument.defaultView,
        );
    }, [c, d, i]),
    T.default.useEffect(() => (w(a, d), () => w(a, null)), [a, d]),
    { refDiv: f, tree: d }
  );
}
var fn = T.default.createContext({
  bActiveTree: !1,
  bActiveTreeWithinContext: !1,
  bDisableFocusClasses: !1,
});
function so(n) {
  let { tree: e, disableFocusClasses: t = !1, children: o } = n,
    [i, r] = T.default.useState(e?.BIsActive() || !1),
    [s, a] = T.default.useState(e?.BIsActiveWithinContext() || !1);
  T.default.useEffect(() => {
    if (!e) {
      r(!1), a(!1);
      return;
    }
    return (
      r(e.BIsActive()),
      a(e.BIsActiveWithinContext()),
      e.OnActiveStateChangedCallbacks.Register(() => {
        r(e.BIsActive()), a(e.BIsActiveWithinContext());
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
  return (0, ce.jsx)(fn.Provider, { value: l, children: o });
}
function cn() {
  return T.default.useContext(fn);
}
var Xe = g(dt()),
  _e = g(x());
var je = g(A()),
  lo = _e.default.createContext({ Component: un });
var ua = _e.default.forwardRef(function (e, t) {
  let {
      "flow-children": o,
      onActivate: i,
      onCancel: r,
      focusClassName: s,
      focusWithinClassName: a,
      ...l
    } = e,
    { elemProps: c, navOptions: u, gamepadEvents: p } = le(l),
    d = {},
    f = se(o);
  f != 0 && (d.layout = f),
    i && ((c.onClick = c.onClick || i), (p.onOKButton = p.onOKButton || i)),
    p.onOKButton &&
      u.focusable === void 0 &&
      u.focusableIfNoChildren === void 0 &&
      (u.focusable = !0),
    r && (p.onCancelButton = p.onCancelButton || r);
  let { ref: v, node: b } = be({ ...d, ...u }),
    S = fe();
  (c.className = (0, Xe.default)(c.className, "Panel", S && "Focusable")),
    z(p, v);
  let I = W(v, t);
  (u.focusable || u.focusableIfNoChildren) &&
    (!b || !b.Tree.BUseVirtualFocus()) &&
    (c.tabIndex = c.tabIndex || 0);
  let C = (0, _e.useContext)(lo).Component;
  return (0, je.jsx)(ee.Provider, {
    value: b,
    children: b
      ? (0, je.jsx)(C, {
          ...c,
          divRef: I,
          node: b,
          focusClassName: (0, Xe.default)(s, "gpfocus"),
          focusWithinClassName: (0, Xe.default)(a, "gpfocuswithin"),
        })
      : (0, je.jsx)("div", { ...c, ref: I }),
  });
});
export {
  w as a,
  W as b,
  co as c,
  Te as d,
  uo as e,
  ft as f,
  bt as g,
  fo as h,
  X as i,
  bo as j,
  te as k,
  vo as l,
  vt as m,
  j as n,
  Fo as o,
  Eo as p,
  Io as q,
  Do as r,
  Ao as s,
  Po as t,
  No as u,
  wo as v,
  xo as w,
  Tn as x,
  y,
  Tt as z,
  Ii as A,
  Gn as B,
  Di as C,
  Kt as D,
  tn as E,
  st as F,
  he as G,
  xr as H,
  ei as I,
  ti as J,
  ni as K,
  Nn as L,
  Mt as M,
  fe as N,
  xn as O,
  ro as P,
  cn as Q,
  no as R,
  io as S,
  ui as T,
  di as U,
  pi as V,
  mi as W,
  fi as X,
  bi as Y,
  gi as Z,
  Ci as _,
  hi as $,
  yi as aa,
  _i as ba,
  ua as ca,
};

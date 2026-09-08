function _(_, _, _) {
  if (_ >= 0 && _ >= 0) {
    let _ = _.splice(_, 1)[0];
    _ >= _.length ? (_[_] = _) : _.splice(_, 0, _);
  }
  return _;
}
function _(_, _) {
  if (!_ && !_) return !0;
  if (!_ || !_ || _.length != _.length) return !1;
  for (let _ = 0; _ < _.length; _++) if (_[_] !== _[_]) return !1;
  return !0;
}
function _(_, _) {
  return _(_, (_) => _ == _);
}
function _(_, _) {
  let _ = _.findIndex(_);
  return _ >= 0 ? (_.splice(_, 1), !0) : !1;
}
function _(_, _, _) {
  return _
    ? _.length < _
      ? _.concat(Array(_ - _.length).fill(_))
      : _
    : (console.error(
        `array should be defined for us to fill in the missing indexes`,
      ),
      []);
}
function _(_, _, _) {
  return {
    get() {
      let _ = _.value.bind(this);
      return (
        Object.prototype.hasOwnProperty.call(this, _) ||
          Object.defineProperty(this, _, {
            value: _,
          }),
        _
      );
    },
  };
}
var _ = class {
    m_vecCallbacks = [];
    Register(_) {
      return (
        this.m_vecCallbacks.push(_),
        {
          Unregister: () => {
            _(this.m_vecCallbacks, _);
          },
        }
      );
    }
    Dispatch(..._) {
      for (let _ of Array.from(this.m_vecCallbacks)) _(..._);
    }
    ClearAllCallbacks() {
      this.m_vecCallbacks = [];
    }
    CountRegistered() {
      return this.m_vecCallbacks.length;
    }
    static PromiseFromAny(_) {
      return new Promise((_) => {
        let _ = [],
          _ = () => {
            _.forEach((_) => _.Unregister()), _();
          };
        for (let _ of _) _.push(_.Register(_));
      });
    }
  },
  _ = _(_(), 1);
function _(_, _, _ = [], _ = !0) {
  let _ = _.useRef(_);
  (_.current = _),
    _.useEffect(() => {
      if (!_.current || !_) return;
      let _ = setInterval(() => {
        _.current && _.current();
      }, _);
      return () => clearInterval(_);
    }, [_, _, ..._]);
}
function _() {
  let [, _] = _.useState(0);
  return _.useCallback(() => _((_) => _ + 1), []);
}
function _(_, _) {
  _.useLayoutEffect(() => {
    if (!_ || !_) return;
    let _ = _.Register(_);
    return () => _.Unregister();
  }, [_, _]);
}
function _(_) {
  return _;
}
function _() {}
function _(_) {
  return _.useSyncExternalStore(
    _ ? _.SyncStore : _,
    _ ? _.GetValue : _,
    _ ? _.GetValue : _,
  );
}
function _(_, _) {
  let [_, _] = _.useState(_);
  return (
    _.useEffect(() => {
      if (_) {
        _(!0);
        return;
      } else {
        let _ = window.setTimeout(() => _(!1), _);
        return () => window.clearTimeout(_);
      }
    }, [_, _]),
    _
  );
}
function _(_, _) {
  return _(_, _) || _;
}
function _(_ = !1) {
  let [_, _] = _.useState(_);
  return [_, _.useCallback(() => _(!0), []), _.useCallback(() => _(!1), [])];
}
function _(_, _, _, _) {
  var _ = arguments.length,
    _ =
      _ < 3 ? _ : _ === null ? (_ = Object.getOwnPropertyDescriptor(_, _)) : _,
    _;
  if (typeof Reflect == `object` && typeof Reflect.decorate == `function`)
    _ = Reflect.decorate(_, _, _, _);
  else
    for (var _ = _.length - 1; _ >= 0; _--)
      (_ = _[_]) && (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
  return _ > 3 && _ && Object.defineProperty(_, _, _), _;
}
var _ = class {
  SyncStore(_) {
    return this.Subscribe(_).Unsubscribe;
  }
  GetValue() {
    return this.Value;
  }
};
_([_], _.prototype, `SyncStore`, null), _([_], _.prototype, `GetValue`, null);
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
  m_fnOnCancel;
  Schedule(_, _) {
    this.IsScheduled() && this.Cancel(),
      (this.m_fnCallback = _),
      (this.m_schTimer = window.setTimeout(this.ScheduledInternal, _));
  }
  AsyncSchedule(_, _) {
    return new Promise((_, _) => {
      this.Schedule(_, () => {
        _(), _();
      }),
        (this.m_fnOnCancel = _);
    });
  }
  IsScheduled() {
    return this.m_schTimer !== void 0;
  }
  Cancel() {
    if (this.m_schTimer) {
      let _ = this.m_fnOnCancel;
      clearTimeout(this.m_schTimer), this.Reset(), _ && _();
    }
  }
  Reset() {
    (this.m_schTimer = void 0),
      (this.m_fnCallback = void 0),
      (this.m_fnOnCancel = void 0);
  }
  ScheduledInternal() {
    let _ = this.m_fnCallback;
    this.Reset(), _?.();
  }
};
_([_], _.prototype, `ScheduledInternal`, null);
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
_([_], _.prototype, `Unregister`, null);
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_, _) {
  let _ = _;
  for (; _; ) {
    if (
      (_.parentNode?.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
        (_ = _.parentNode.host),
      _ == _)
    )
      return !0;
    _ = _.parentElement;
  }
  return !1;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_, _) {
  return {
    top: _.screenTop + _.top,
    bottom: _.screenTop + _.bottom,
    left: _.screenLeft + _.left,
    right: _.screenLeft + _.right,
  };
}
function _(_) {
  let _ = 1,
    _ = _;
  for (; _ != null && _.tagName != `HTML`; ) {
    let _ = getComputedStyle(_);
    if (_.zoom) {
      let _ = Number.parseFloat(_.zoom);
      isNaN(_) || (_ *= _);
    }
    _ = _.parentElement;
  }
  return _;
}
function _(_) {
  let _;
  return (
    _ && _(_.currentTarget) && (_ = _.currentTarget.ownerDocument.defaultView),
    _
  );
}
function _(_) {
  let _;
  return _ && (_ = _.ownerDocument.defaultView), _;
}
function _(_) {
  return _.nodeName === `INPUT`;
}
function _(_, _) {
  switch (_) {
    case `TEXTAREA`:
      return !0;
    case `INPUT`:
      switch (_) {
        case `date`:
        case `datetime-local`:
        case `datetime`:
        case `email`:
        case `month`:
        case `number`:
        case `password`:
        case `search`:
        case `tel`:
        case `text`:
        case `time`:
        case `url`:
        case `week`:
          return !0;
        default:
          return !1;
      }
    default:
      return !1;
  }
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _; ) {
    if (_(_)) {
      if (!_ || _ == `x`) {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowX == `scroll` ||
          _.overflowX == `auto` ||
          _.position == `fixed`
        )
          break;
      }
      if (!_ || _ == `y`) {
        let _ = window.getComputedStyle(_);
        if (
          _.overflowY == `scroll` ||
          _.overflowY == `auto` ||
          _.position == `fixed`
        )
          break;
      }
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _() {
  return _(document);
}
function _(_) {
  let _ = {};
  return (
    _.querySelectorAll(`link[rel="stylesheet"]`).forEach((_) => {
      _[_.href] = _;
    }),
    _
  );
}
function _(_, _) {
  _(_.document, _, !0);
}
function _(_, _, _) {
  let _ = Object.assign({}, _),
    _ = _.getElementsByTagName(`head`)[0],
    _ = _.getElementsByTagName(`link`),
    _ = _.length;
  for (let _ = 0; _ < _; ++_) {
    let _ = _[_];
    _[_.href] ? delete _[_.href] : _ && _.parentNode?.removeChild(_);
  }
  let _ = [];
  for (let _ in _) {
    let _ = _[_],
      _ = _.createElement(`link`);
    for (let _ = 0; _ < _.attributes.length; _++) {
      let _ = _.attributes.item(_);
      _.setAttribute(_.name, _.value);
    }
    _.push(_);
  }
  return _.prepend(..._), _;
}
var _ = class {
  m_sName;
  m_fnIdGenerator = void 0;
  constructor(_, _) {
    (this.m_sName = _), (this.m_fnIdGenerator = _), _.Get().RegisterLogName(_);
  }
  Debug(..._) {
    this.Log(0, ..._);
  }
  Info(..._) {
    this.Log(1, ..._);
  }
  Warning(..._) {
    this.Log(2, ..._);
  }
  Error(..._) {
    this.Log(3, ..._);
  }
  Assert(_, ..._) {
    _ || this.Log(3, `Assertion failed:`, ..._);
  }
  IsDebugEnabled() {
    return _.Get().IsDebugLogEnabled(this.m_sName);
  }
  Log(_, ..._) {
    let _ = _.Get().IsDebugLogEnabled(this.m_sName);
    if (_ == 0 && !_) return;
    let _ = this.m_sName,
      _ = this.m_fnIdGenerator?.() ?? null;
    _ != null && (_ += ` (` + _ + `)`);
    let _ = _.Get().IncludeBacktraceInLog,
      _ = _.Get().AllowCSSInLogStyling;
    _(_, _, _, _, _, this.m_sName, ..._);
  }
};
_([_], _.prototype, `Debug`, null),
  _([_], _.prototype, `Info`, null),
  _([_], _.prototype, `Warning`, null),
  _([_], _.prototype, `Error`, null),
  _([_], _.prototype, `Assert`, null);
var _ = class _ {
  static k_EnabledLogNames_StorageKey = `EnabledWebLogs`;
  static k_IncludeBacktraceInLog_StorageKey = `IncludeBacktraceInLog`;
  static k_AllowCSSInLogColors_StorageKey = `AllowCSSInLogColors`;
  m_setKnownDebugLogs = new Set();
  m_setEnabledDebugLogs = new Set();
  m_bIncludeBacktraceInLog = !1;
  m_bAllowCSSInLogStyling = !0;
  m_SettingsChangedCallback = new _();
  m_bLoading = !0;
  constructor() {
    this.LoadSettings();
  }
  LogAsLogManager(..._) {
    _(
      1,
      !0,
      this.IncludeBacktraceInLog,
      this.AllowCSSInLogStyling,
      `LogManager`,
      `LogManager`,
      ..._,
    );
  }
  async LoadSettings() {
    let _ = (_, _) => {
      try {
        let _ = localStorage.getItem(_);
        return _ ? JSON.parse(_) : _;
      } catch {
        return _;
      }
    };
    (this.m_bIncludeBacktraceInLog = !!_(
      _.k_IncludeBacktraceInLog_StorageKey,
      !1,
    )),
      (this.m_bAllowCSSInLogStyling = !!_(
        _.k_AllowCSSInLogColors_StorageKey,
        !0,
      ));
    let _ = _(_.k_EnabledLogNames_StorageKey, void 0);
    if (Array.isArray(_)) {
      this.m_setEnabledDebugLogs = new Set(_);
      for (let _ of _) this.m_setKnownDebugLogs.add(_);
      this.LogAsLogManager(
        `Loaded debug enabled log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
    }
    (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
  }
  async SaveSettings() {
    localStorage.setItem(
      _.k_EnabledLogNames_StorageKey,
      JSON.stringify(Array.from(this.m_setEnabledDebugLogs)),
    ),
      localStorage.setItem(
        _.k_IncludeBacktraceInLog_StorageKey,
        JSON.stringify(this.m_bIncludeBacktraceInLog),
      ),
      localStorage.setItem(
        _.k_AllowCSSInLogColors_StorageKey,
        JSON.stringify(this.m_bAllowCSSInLogStyling),
      ),
      this.LogAsLogManager(
        `Saved enabled debug log names. Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  PrintEnabledLogs(..._) {
    _ &&
      _.length > 0 &&
      console.warn(
        `Use DebugLogEnable( '${_.join(`', '`)}' ) to enable a log. This function tells you what's enabled.`,
      ),
      this.LogAsLogManager(
        `Will print log messages for:`,
        Array.from(this.m_setEnabledDebugLogs),
      );
  }
  static Get() {
    return (
      window.g_LogManager ?? (window.g_LogManager = new _()),
      window.g_LogManager
    );
  }
  get Loading() {
    return this.m_bLoading;
  }
  get LogNames() {
    return this.m_setKnownDebugLogs.values();
  }
  RegisterLogName(_) {
    this.m_setKnownDebugLogs.add(_);
  }
  IsLogName(_) {
    return this.m_setKnownDebugLogs.has(_);
  }
  IsDebugLogEnabled(_) {
    return this.m_setEnabledDebugLogs.has(_);
  }
  async ToggleDebugLogEnabled(_) {
    this.SetDebugLogEnabled(_, !this.IsDebugLogEnabled(_));
  }
  async SetDebugLogEnabled(_, _) {
    if (!this.IsLogName(_)) {
      console.warn(`No log named "${_}", available logs:`, this.GetLogNames());
      return;
    }
    _
      ? this.m_setEnabledDebugLogs.add(_)
      : this.m_setEnabledDebugLogs.delete(_),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  async SetDebugLogsEnabled(_, ..._) {
    _.forEach((_) => this.SetDebugLogEnabled(_, _));
  }
  async SetAllDebugLogsEnabled(_) {
    (this.m_setEnabledDebugLogs = _
      ? new Set(this.m_setKnownDebugLogs)
      : new Set()),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  RegisterForSettingsChanges(_) {
    return this.m_SettingsChangedCallback.Register(_);
  }
  get IncludeBacktraceInLog() {
    return this.m_bIncludeBacktraceInLog;
  }
  async SetIncludeBacktraceInLog(_) {
    (this.m_bIncludeBacktraceInLog = _),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  get AllowCSSInLogStyling() {
    return this.m_bAllowCSSInLogStyling;
  }
  async SetAllowCSSInLogStyling(_) {
    (this.m_bAllowCSSInLogStyling = _),
      this.m_SettingsChangedCallback.Dispatch(),
      await this.SaveSettings();
  }
  GetLogNames() {
    return Array.from(this.LogNames).sort();
  }
};
function _(_) {
  let _ = 0;
  for (let _ = 0; _ < _.length; _++) _ = _.charCodeAt(_) + ((_ << 5) - _);
  return [(_ >> 0) & 255, (_ >> 8) & 255, (_ >> 16) & 255];
}
function _(_) {
  return (_[0] * 299 + _[1] * 587 + _[2] * 114) / 1e3 >= 128;
}
function _(_) {
  switch (_) {
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
function _(_, _, _, _, _, _, ..._) {
  let _ = _;
  _ && (_ = _(_) + ` ` + _);
  let _;
  if (_ && _) {
    let _ = _(_).map((_, _) =>
        Math.round(
          Math.max(0, Math.min(255, ((_ / 255 - 0.5) * 0.8 + 0.15) * 255)),
        ),
      ),
      _ = _(_),
      _ = _.length >= 1 && typeof _[0] == `string` && _[0].includes(`%c`),
      _ = _ && _.shift();
    _ = [
      `%c${_}%c:${_ ? ` %c` + _ : ``}`,
      `color: ${_ ? `black` : `white`}; background: rgb(${_.join(`,`)}); padding: 0 1ch; border-radius: 3px;`,
      `color: transparent; margin-right: -1ch`,
      ...(_ ? [``] : []),
      ..._,
    ];
  } else _ = [`${_}:`, ..._];
  if (_)
    console.groupCollapsed(..._),
      console.trace(`Callstack`),
      console.groupEnd();
  else
    switch (_) {
      case 0:
      case 1:
        console.log(..._);
        break;
      case 2:
        console.warn(..._);
        break;
      case 3:
        console.clogerror ? console.clogerror(3, ..._) : console.error(..._);
        break;
    }
}
(window.DebugLogEnable = (..._) => _.Get().SetDebugLogsEnabled(!0, ..._)),
  (window.DebugLogDisable = (..._) => _.Get().SetDebugLogsEnabled(!1, ..._)),
  (window.DebugLogEnableAll = () => _.Get().SetAllDebugLogsEnabled(!0)),
  (window.DebugLogDisableAll = () => _.Get().SetAllDebugLogsEnabled(!1)),
  (window.DebugLogEnableBacktrace = () => _.Get().SetIncludeBacktraceInLog(!0)),
  (window.DebugLogDisableBacktrace = () =>
    _.Get().SetIncludeBacktraceInLog(!1)),
  (window.DebugLogNames = () => _.Get().GetLogNames()),
  (window.DebugLogEnabled = (..._) => _.Get().PrintEnabledLogs(..._)),
  (window.EnableSteamConsole = (_ = !0) =>
    _.Get().SetDebugLogEnabled(`SteamClient`, _));
var _ = class {
    m_ActiveInputId;
    m_ActiveInputTimeout;
    m_config;
    constructor(_) {
      this.m_config = _;
    }
    Reset() {
      (this.m_ActiveInputId = void 0),
        this.m_ActiveInputTimeout != null &&
          (clearInterval(this.m_ActiveInputTimeout),
          (this.m_ActiveInputTimeout = void 0));
    }
    HandleInputButtonDown(_, _) {
      if (this.m_ActiveInputId !== _ && _ != null) {
        this.Reset(), (this.m_ActiveInputId = _);
        let _ = () => {
          this.m_ActiveInputTimeout = window.setInterval(() => {
            _();
          }, this.m_config.repeatInterval_ms);
        };
        this.m_config.firstRepeatInterval_ms == null ||
        this.m_config.firstRepeatInterval_ms === this.m_config.repeatInterval_ms
          ? _()
          : (this.m_ActiveInputTimeout = window.setTimeout(() => {
              _(), _();
            }, this.m_config.firstRepeatInterval_ms));
      }
    }
  },
  _ = class {
    m_config;
    m_inputRepeatGenerator;
    m_repeatOnAxis = 0;
    m_fnRepeatAllowed = () => !0;
    constructor(_) {
      (this.m_config = _), (this.m_inputRepeatGenerator = new _(_));
    }
    Reset() {
      this.m_inputRepeatGenerator.Reset();
    }
    SetRepeatAllowed(_) {
      (_ ||= () => !0), (this.m_fnRepeatAllowed = _);
    }
    HandleInputButtonDown(_, _, _) {
      this.m_fnRepeatAllowed() && this.m_config.inputsThatRepeat.has(_)
        ? this.m_repeatOnAxis == 0 &&
          ((_ == _.DIR_UP || _ == _.DIR_DOWN) && (this.m_repeatOnAxis = 2),
          (_ == _.DIR_LEFT || _ == _.DIR_RIGHT) && (this.m_repeatOnAxis = 1),
          _(),
          this.m_inputRepeatGenerator.HandleInputButtonDown(_, _))
        : (_(), this.m_inputRepeatGenerator.Reset());
    }
    HandleInputButtonUp(_) {
      if (this.m_config.inputsThatRepeat.has(_) && this.m_repeatOnAxis != 0) {
        let _ = _ == _.DIR_UP || _ == _.DIR_DOWN,
          _ = _ == _.DIR_LEFT || _ == _.DIR_RIGHT;
        ((this.m_repeatOnAxis == 2 && _) || (this.m_repeatOnAxis == 1 && _)) &&
          ((this.m_repeatOnAxis = 0), this.m_inputRepeatGenerator.Reset());
      } else this.m_inputRepeatGenerator.Reset();
    }
  },
  _ = (function (_) {
    return (
      (_[(_.INVALID = 0)] = `INVALID`),
      (_[(_._ = 1)] = `OK`),
      (_[(_.CANCEL = 2)] = `CANCEL`),
      (_[(_.SECONDARY = 3)] = `SECONDARY`),
      (_[(_.OPTIONS = 4)] = `OPTIONS`),
      (_[(_.BUMPER_LEFT = 5)] = `BUMPER_LEFT`),
      (_[(_.BUMPER_RIGHT = 6)] = `BUMPER_RIGHT`),
      (_[(_.TRIGGER_LEFT = 7)] = `TRIGGER_LEFT`),
      (_[(_.TRIGGER_RIGHT = 8)] = `TRIGGER_RIGHT`),
      (_[(_.DIR_UP = 9)] = `DIR_UP`),
      (_[(_.DIR_DOWN = 10)] = `DIR_DOWN`),
      (_[(_.DIR_LEFT = 11)] = `DIR_LEFT`),
      (_[(_.DIR_RIGHT = 12)] = `DIR_RIGHT`),
      (_[(_.SELECT = 13)] = `SELECT`),
      (_[(_.START = 14)] = `START`),
      (_[(_.LSTICK_CLICK = 15)] = `LSTICK_CLICK`),
      (_[(_.RSTICK_CLICK = 16)] = `RSTICK_CLICK`),
      (_[(_.LSTICK_TOUCH = 17)] = `LSTICK_TOUCH`),
      (_[(_.RSTICK_TOUCH = 18)] = `RSTICK_TOUCH`),
      (_[(_.LPAD_TOUCH = 19)] = `LPAD_TOUCH`),
      (_[(_.LPAD_CLICK = 20)] = `LPAD_CLICK`),
      (_[(_.RPAD_TOUCH = 21)] = `RPAD_TOUCH`),
      (_[(_.RPAD_CLICK = 22)] = `RPAD_CLICK`),
      (_[(_.REAR_LEFT_UPPER = 23)] = `REAR_LEFT_UPPER`),
      (_[(_.REAR_LEFT_LOWER = 24)] = `REAR_LEFT_LOWER`),
      (_[(_.REAR_RIGHT_UPPER = 25)] = `REAR_RIGHT_UPPER`),
      (_[(_.REAR_RIGHT_LOWER = 26)] = `REAR_RIGHT_LOWER`),
      (_[(_.STEAM_GUIDE = 27)] = `STEAM_GUIDE`),
      (_[(_.STEAM_QUICK_MENU = 28)] = `STEAM_QUICK_MENU`),
      (_[(_.DUMMY_INPUT = 29)] = `DUMMY_INPUT`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.UNKNOWN = 0)] = `UNKNOWN`),
      (_[(_.GAMEPAD = 1)] = `GAMEPAD`),
      (_[(_.KEYBOARD_SIMULATOR = 2)] = `KEYBOARD_SIMULATOR`),
      (_[(_.MOUSE = 3)] = `MOUSE`),
      (_[(_.TOUCH = 4)] = `TOUCH`),
      (_[(_.LPAD = 5)] = `LPAD`),
      (_[(_.RPAD = 6)] = `RPAD`),
      _
    );
  })({});
function _(_) {
  return _ === 1 || _ === 2;
}
var _ = class {
  m_OnGamepadDetectedCallbacks = new _();
  m_ButtonDownCallbacks = new _();
  m_ButtonUpCallbacks = new _();
  m_AnalogCallbacks = new _();
  m_NavigationTypeChangeCallbacks = new _();
  m_eNavigationSourceType;
  m_fLastActiveTime;
  m_nLastActiveControllerIndex = -1;
  m_ButtonRepeatHandler = new _({
    inputsThatRepeat: new Set([9, 10, 11, 12]),
    firstRepeatInterval_ms: 400,
    repeatInterval_ms: 50,
  });
  m_bGamepadDetected = !1;
  Init(_) {
    return {
      Unregister: () => {},
    };
  }
  RegisterForGamepadDetected(_) {
    return this.m_OnGamepadDetectedCallbacks.Register(_);
  }
  RegisterForGamepadButtonDown(_) {
    return this.m_ButtonDownCallbacks.Register(_);
  }
  RegisterForGamepadButtonUp(_) {
    return this.m_ButtonUpCallbacks.Register(_);
  }
  RegisterForAnalog(_) {
    return this.m_AnalogCallbacks.Register(_);
  }
  RegisterForNavigationTypeChange(_) {
    return this.m_NavigationTypeChangeCallbacks.Register(_);
  }
  SetSourceType(_) {
    this.m_eNavigationSourceType = _;
  }
  GetSourceType() {
    return this.m_eNavigationSourceType;
  }
  SetControllerActive(_) {
    (this.m_nLastActiveControllerIndex = _),
      (this.m_fLastActiveTime = Date.now());
  }
  GetActiveControllerIndex() {
    return this.m_nLastActiveControllerIndex;
  }
  GetActiveControllerTime() {
    return this.m_fLastActiveTime;
  }
  SetRepeatAllowed(_) {
    this.m_ButtonRepeatHandler.SetRepeatAllowed(_);
  }
  OnGamepadDetected() {
    console.log(`Gamepad detected`),
      (this.m_bGamepadDetected = !0),
      this.m_OnGamepadDetectedCallbacks.Dispatch();
  }
  OnButtonDown(_, _, _, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_ButtonRepeatHandler.HandleInputButtonDown(
        _,
        () => this.DispatchButtonDown(_, !1, _, _),
        () => this.DispatchButtonDown(_, !0, _, _),
      );
  }
  OnButtonUp(_, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_ButtonRepeatHandler.HandleInputButtonUp(_),
      this.m_ButtonUpCallbacks.Dispatch(
        _,
        this.m_eNavigationSourceType,
        this.m_nLastActiveControllerIndex,
      );
  }
  DispatchButtonDown(_, _, _, _) {
    this.m_ButtonDownCallbacks.Dispatch(
      _,
      this.m_eNavigationSourceType,
      this.m_nLastActiveControllerIndex,
      _,
      _,
      _,
    );
  }
  OnAnalogPad(_, _, _, _) {
    _ === void 0 && (_ = -1),
      this.SetControllerActive(_),
      this.m_AnalogCallbacks.Dispatch(
        _,
        this.m_nLastActiveControllerIndex,
        _,
        _,
      );
  }
  OnNavigationTypeChanged(_) {
    this.m_NavigationTypeChangeCallbacks.Dispatch(_);
  }
};
function _(_) {
  return typeof _ == `object` && !!_ && `value` in _;
}
function _(_, _) {
  return _(_) && _(_)
    ? _.value === _.value &&
        !!_.bShowOnLeft == !!_.bShowOnLeft &&
        !!_.bShowOnFloatingVRFooter == !!_.bShowOnFloatingVRFooter
    : _ === _;
}
var _ = (function (_) {
    return (
      (_[(_.GAMEPAD = 0)] = `GAMEPAD`),
      (_[(_.KEYBOARD = 1)] = `KEYBOARD`),
      (_[(_.APPLICATION = 2)] = `APPLICATION`),
      (_[(_.BROWSER = 3)] = `BROWSER`),
      (_[(_.AUTOFOCUS = 4)] = `AUTOFOCUS`),
      _
    );
  })({}),
  _ = {
    [_._]: `vgp_onok`,
    [_.CANCEL]: `vgp_oncancel`,
    [_.SECONDARY]: `vgp_onsecondaryaction`,
    [_.OPTIONS]: `vgp_onoptions`,
    [_.START]: `vgp_onmenu`,
  };
function _(_, _, _) {
  return _.addEventListener(_, _), () => _(_, _, _);
}
function _(_, _, _) {
  _.removeEventListener(_, _);
}
function _(_, _) {
  return _(_, `vgp_onbuttondown`, _);
}
function _(_, _) {
  return _(_, `vgp_onbuttonup`, _);
}
function _(_, _) {
  return _(_, `vgp_onok`, _(_));
}
function _(_, _) {
  return _(_, `vgp_oncancel`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onsecondaryaction`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onoptions`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onmenu`, _(_));
}
function _(_, _) {
  return _(_, `vgp_ondirection`, _(_));
}
function _(_, _) {
  return _(_, `vgp_onfocus`, _);
}
function _(_, _) {
  return _(_, `vgp_onblur`, _);
}
function _(_, _) {
  return _(_, `vgp_requestfocus`, _(_));
}
function _(_, _, _) {
  let _ = _;
  if (!_ || !_.ownerDocument || !_.ownerDocument.defaultView) return !0;
  let _ = new _.ownerDocument.defaultView.CustomEvent(_, {
    bubbles: !0,
    cancelable: !0,
    detail: _,
  });
  return _.dispatchEvent(_);
}
function _(_) {
  let _ = [_.DIR_UP, _.DIR_DOWN, _.DIR_LEFT, _.DIR_RIGHT],
    _ = !0,
    _ = !1,
    _ = _[_.detail.button];
  return (
    _
      ? ((_ = !0), (_ = _(_.target, _, _.detail)))
      : _.indexOf(_.detail.button) !== -1 &&
        ((_ = !0), (_ = _(_.target, `vgp_ondirection`, _.detail))),
    {
      bUnhandled: _,
      bHadLogicalEventMapping: _,
    }
  );
}
function _(_) {
  return (_) => {
    _(_) !== !1 && (_.stopPropagation(), _.preventDefault());
  };
}
function _(_) {
  let {
      onOKActionDescription: _,
      onCancelActionDescription: _,
      onSecondaryActionDescription: _,
      onOptionsActionDescription: _,
      onMenuActionDescription: _,
      actionDescriptionMap: _,
    } = _,
    _ = {
      ..._,
    };
  return (
    _ !== void 0 && (_[_._] = _),
    _ !== void 0 && (_[_.CANCEL] = _),
    _ !== void 0 && (_[_.SECONDARY] = _),
    _ !== void 0 && (_[_.OPTIONS] = _),
    _ !== void 0 && (_[_.START] = _),
    _
  );
}
var _ = new _(`FocusHistory`),
  _ = _.Debug,
  _ = class _ {
    m_root;
    constructor(_) {
      this.m_root = _;
    }
    static SerializeNavState(_, _ = !0, _ = !0) {
      return {
        root: _.SerializeNavNode(_, _, _),
        bHadFocus: _.BFocusWithin() && _.Tree.BIsActiveWithinContext(),
      };
    }
    static SerializeNavNode(_, _ = !0, _ = !0) {
      let _,
        [_, _] = _.GetChildren();
      _.length &&
        _ != -1 &&
        _ &&
        (_ = _.map((_, _) => _.SerializeNavNode(_, _ == _ || _, _)));
      let _ = {
        rgChildren: _,
      };
      return (
        _.NavKey && (_.sNavKey = _.NavKey), _ != -1 && (_.iActiveChild = _), _
      );
    }
    static RestoreSerializedNavState(_, _, _ = 0) {
      let { root: _, bHadFocus: _ } = _;
      _.Tree.Controller.RestoreHistoryTransaction(() => {
        _.RestoreSerializedNavNode(_, _),
          (_ == 1 || (_ == 0 && _)) && _.BTakeFocus(_.APPLICATION);
      });
    }
    static RestoreSerializedNavNode(_, _, _ = 0) {
      let { sNavKey: _, iActiveChild: _ = -1, rgChildren: _ } = _;
      _ && _(_ == _.NavKey, `navkey mismatch`), _.SetActiveChild(_);
      let _ = _.IsDebugEnabled() ? `[${_.Tree._}]${_(_)}` : ``;
      if (_ && _.length) {
        let [_] = _.GetChildren();
        if (_ != -1 && _.IsDebugEnabled()) {
          let _ = _.length != _.length;
          _(
            `${_}Restoring node ${_.NavKey} which had active child ${_} of ${_.length}${_ ? `- now ${_.length} children.` : ``}`,
          );
        }
        let _ = new Map();
        _.forEach((_) => {
          _.NavKey && _.set(_.NavKey, _);
        });
        for (let _ of _) {
          if (!_.sNavKey) continue;
          let _ = _.get(_.sNavKey);
          _ && _.RestoreSerializedNavNode(_, _, _ + 1);
        }
        if (_ != -1 && _[_]?.sNavKey) {
          let _ = _.get(_[_].sNavKey);
          _(
            `${_}Restoring node ${_.NavKey}, child with focus: ${_[_].sNavKey} ${_ === void 0 ? `MISSING!!` : ``}`,
          ),
            _ && _.SetActiveChild(_.indexOf(_));
        }
        let _ = 0,
          _ = 0;
        for (; _ < _.length && _ < _.length; ) {
          for (; _ < _.length && _[_].NavKey; ) _++;
          for (; _ < _.length && _[_].sNavKey; ) _++;
          if (_ >= _.length || _ >= _.length) break;
          _.RestoreSerializedNavNode(_[_], _[_], _ + 1), _++, _++;
        }
      }
    }
  };
function _(_) {
  return _.SerializeNavState(_, !0, !1);
}
function _(_, _, _ = 0) {
  return _.RestoreSerializedNavState(_, _, _);
}
var _ = class extends _ {
    m_rgHistory = [];
    PushState() {
      this.m_rgHistory.push(_.SerializeNavState(this.m_root));
    }
    PopState(_ = 0) {
      this.m_rgHistory.length &&
        _.RestoreSerializedNavState(this.m_root, this.m_rgHistory.pop(), _);
    }
  },
  _ = class extends _ {
    m_mapHistory = new Map();
    SaveState(_) {
      this.m_mapHistory.set(_, _.SerializeNavState(this.m_root));
    }
    RestoreState(_, _ = 0) {
      let _ = this.m_mapHistory.get(_);
      return _
        ? (console.log(`Restoring history for state ${_}`),
          _.RestoreSerializedNavState(this.m_root, _, _),
          !0)
        : !1;
    }
  };
function _(_) {
  if (_ == 0) return ``;
  let _ = ``;
  for (let _ = 0; _ < _; _++) _ += `*`;
  return (_ += ` `), _;
}
function _(_) {
  return _ != null && _.focus !== void 0;
}
function _(_, _) {
  let _ = 0,
    _ = 0;
  return (
    _.right < _.left
      ? (_ = _.left - _.right)
      : _.left > _.right && (_ = _.left - _.right),
    _.bottom < _.top
      ? (_ = _.top - _.bottom)
      : _.top > _.bottom && (_ = _.top - _.bottom),
    Math.sqrt(_ * _ + _ * _)
  );
}
function _(_) {
  let _;
  return _ && (_ = _.ownerDocument.defaultView), _;
}
function _(_, _) {
  let _ = _?.parentElement;
  for (; _; ) {
    if (_(_)) {
      let _ = window.getComputedStyle(_);
      if (
        _.position == `fixed` ||
        _.position == `sticky` ||
        ((!_ || _ == `x`) &&
          (_.overflowX == `scroll` || _.overflowX == `auto`)) ||
        ((!_ || _ == `y`) && (_.overflowY == `scroll` || _.overflowY == `auto`))
      )
        break;
    }
    _ = _.parentElement;
  }
  return _(_) ? _ : null;
}
function _(_, _) {
  if (!(`ownerDocument` in _)) return !0;
  let _ = _.ownerDocument.defaultView.getComputedStyle(_),
    _ = _ === `x` ? _.overflowX : _.overflowY;
  return _ === `auto` || _ === `scroll`;
}
var _ = {
  _: `y`,
  _: `x`,
};
function _() {
  return {
    _: 0,
    _: 0,
  };
}
function _(_, _) {
  return _._ * _._ + _._ * _._;
}
function _(_, _) {
  return {
    _: _._ - _._,
    _: _._ - _._,
  };
}
function _(_, _) {
  let _ = _(_, _);
  return Math.sqrt(_(_, _));
}
function _(_, _, _) {
  return _ == null || _ == null
    ? _ === _
    : typeof _ != `object` ||
        typeof _ != `object` ||
        Object.keys(_).length !== Object.keys(_).length
      ? !1
      : ((_ ??= (_, _) => _ === _),
        Object.keys(_).every((_) => _.hasOwnProperty(_) && _(_[_], _[_])));
}
function _(_, _, _) {
  let _ = [],
    [_, _] = _.GetChildren(),
    _ = _.GetActiveChild(),
    _,
    _ = _ ? _.Element?.getBoundingClientRect() : null;
  if (_) {
    let _ = _(_, _, _);
    if (
      _ &&
      !_.offScreen &&
      ((_ = _(_, _, _.overlap, _)), _ && !_.visibility.offScreen)
    )
      return _;
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  let _ = _ || _;
  for (let _ = 0; _ < _.length; _++) {
    let _ = _[_];
    if (_ == _) continue;
    let _ = _(_, _, _ ?? void 0);
    _ &&
      _.push({
        child: _,
        visibility: _,
      });
  }
  _.sort(_);
  let _;
  for (let _ of _) {
    let { child: _, visibility: _ } = _;
    if (
      _.offScreen &&
      _ &&
      (!_.visibility.offScreen ||
        (_.distance && _.distance > _.visibility.distance))
    )
      break;
    let _ = _ == _ ? _ : _(_, _, _.overlap || _, _ ?? void 0);
    _ && (!_ || _(_, _) < 0) && (_ = _);
  }
  return _;
}
function _(_, _, _, _) {
  switch (_.GetFocusable()) {
    case `none`:
      return;
    case `children`:
      return _(_, _.overlap || _, _);
    case `self`:
      return {
        child: _,
        visibility: _,
      };
  }
}
function _(_, _) {
  let _ = _.visibility,
    _ = _.visibility;
  return _.offScreen
    ? _.offScreen
      ? _.distance - _.distance
      : 1
    : _.offScreen
      ? -1
      : _.distance - _.distance;
}
function _(_, _, _) {
  let _ = _.Element?.getBoundingClientRect(),
    _ = _.GetFocusable(),
    _;
  if (_ == `none` || !_ || !_) return null;
  if (_ == `self`) {
    if (
      _.top < _.top ||
      _.right > _.right ||
      _.bottom > _.bottom ||
      _.left < _.left
    ) {
      let _ = _.top + _.height / 2,
        _ = _.left + _.width / 2;
      if (_ < _.top)
        return {
          offScreen: `top`,
          distance: _.top - _,
        };
      if (_ > _.right)
        return {
          offScreen: `right`,
          distance: _ - _.right,
        };
      if (_ > _.bottom)
        return {
          offScreen: `bottom`,
          distance: _ - _.bottom,
        };
      if (_ < _.left)
        return {
          offScreen: `left`,
          distance: _.left - _,
        };
    }
    _ && (_ = _(_, _));
  } else if (_ == `children`) {
    let _ = _.Element;
    if (!_) return null;
    if (_.scrollHeight > _.height || _.scrollWidth > _.width) {
      let _ = _.ownerDocument.defaultView.getComputedStyle(_);
      if (_.overflowX == `visible` || _.overflowY == `visible`)
        return {
          overlap: _,
        };
    }
    if (_.bottom < _.top)
      return {
        offScreen: `top`,
        distance: _.top - _.bottom,
      };
    if (_.left > _.right)
      return {
        offScreen: `right`,
        distance: _.left - _.right,
      };
    if (_.top > _.bottom)
      return {
        offScreen: `bottom`,
        distance: _.top - _.bottom,
      };
    if (_.right < _.left)
      return {
        offScreen: `left`,
        distance: _.left - _.right,
      };
  }
  return {
    overlap: {
      top: Math.max(_.top, _.top),
      right: Math.min(_.right, _.right),
      bottom: Math.min(_.bottom, _.bottom),
      left: Math.max(_.left, _.left),
    },
    distance: _,
  };
}
var _ = class {
    m_options;
    m_msStart;
    m_msEnd;
    m_bActive = !1;
    m_fnBoundAnimationFunc = void 0;
    m_window;
    constructor(_, _) {
      (this.m_window = _),
        (this.m_options = {
          timing: `sine`,
          ..._,
        });
    }
    Start() {
      (this.m_msStart = performance.now()),
        (this.m_msEnd = this.m_msStart + this.m_options.msDuration);
      let _;
      switch (this.m_options.timing) {
        case `linear`:
          _ = function (_) {
            return _;
          };
          break;
        case `cubic-in-out`:
          _ = function (_) {
            return _ < 0.5
              ? 4 * _ * _ * _
              : (_ - 1) * (2 * _ - 2) * (2 * _ - 2) + 1;
          };
          break;
        default:
          _ = function (_) {
            return 0.5 - Math.cos(_ * Math._) / 2;
          };
          break;
      }
      (this.m_bActive = !0),
        (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, _)),
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
    OnInterval(_) {
      if (!this.m_bActive) return;
      let _ = performance.now() - this.m_msStart;
      if (_ >= this.m_options.msDuration) {
        this.End();
        return;
      }
      let _ = _ / this.m_options.msDuration;
      try {
        this.Update(_(_));
      } catch {}
      this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
    }
    ClearInterval() {
      this.m_bActive = !1;
    }
  },
  _ = class extends _ {
    m_fnCallback;
    constructor(_, _, _) {
      super(_, _), (this.m_fnCallback = _);
    }
    Update(_) {
      this.m_fnCallback(_);
    }
  },
  _ = class extends _ {
    m_object;
    m_propTargets;
    m_props = {};
    constructor(_, _, _) {
      super(`ownerDocument` in _ ? _(_) : _, _),
        (this.m_object = _),
        (this.m_propTargets = _);
    }
    Start() {
      this.m_props = {};
      for (let _ in this.m_propTargets) {
        let _ = parseFloat(this.m_object[_]) || 0,
          _ = this.m_propTargets[_];
        _ != _ &&
          (this.m_props[_] = {
            start: _,
            end: _,
          });
      }
      super.Start();
    }
    Update(_) {
      for (let _ in this.m_props) {
        let _ = this.m_props[_],
          _ = _.start + (_.end - _.start) * _;
        this.m_object[_] = _;
      }
    }
  },
  _ = new _(`ScrollSnap`).Debug,
  _,
  _ = 500;
function _(_, _, _, _, _) {
  let _ = _.Element;
  if (!_) return;
  let _ = [
    {
      node: _,
      eScrollType: _.m_Properties?.scrollIntoViewType,
    },
  ];
  for (let _ = _.Parent; _; _ = _.Parent) {
    let _ = _.m_Properties?.scrollIntoViewWhenChildFocused,
      _ = _.m_Properties?.scrollIntoViewType;
    if (_) {
      let _ = {
        node: _,
        eScrollType: _,
      };
      _ === `force` ? (_ = [_]) : _.push(_);
    }
    if (_ !== void 0)
      for (let _ = _.length - 1; _ >= 0 && _[_].eScrollType === void 0; _--)
        _[_].eScrollType = _;
  }
  for (; _.length; ) {
    let { node: _, eScrollType: _ } = _.pop(),
      _ = _.length == 0;
    if (
      (_ === void 0 && (_ = _.Standard),
      _?.m_Properties?.fnScrollIntoViewHandler &&
        _.m_Properties.fnScrollIntoViewHandler(_, _, _) !== !1)
    )
      continue;
    let _ = _.m_element,
      _ = _ == _.NoTransform || _ == _.NoTransformSparseContent || !_;
    if (!_ && _ !== _.GAMEPAD)
      _(`No previous element for scrolling, will jump`),
        _
          ? _(_, _, `auto`)
          : (_(`Scrolling Into View ('auto' via browser scrollIntoView):`, _),
            _?.scrollIntoView({
              behavior: `auto`,
              block: `nearest`,
              inline: `nearest`,
            }));
    else {
      let _ = _ ? _(_) : _.getBoundingClientRect(),
        _ = _.ownerDocument.defaultView.innerHeight,
        _ = _ ? 40 : Math.max(_ * 0.4, 40),
        _ = !1,
        _ = _ && performance.now() - _ < _;
      (_ || _.bottom < -_ || _.top > _ + _) &&
        ((_ = !0),
        _ ||
          _(
            `Disabling smooth scrolling, ${_.bottom} < ${-_}, ${_.top} > ${_} + ${_} `,
          ));
      let _ = _ ? `auto` : `smooth`;
      _ && (_ = performance.now()),
        _.Tree.Controller.BIsRestoringHistory() && (_ = `auto`),
        _
          ? _(_, _, _)
          : (_(`Scrolling Into View ('${_}' via browser scrollIntoView):`, _),
            _.scrollIntoView({
              behavior: _,
              block: `nearest`,
            }));
    }
  }
  _(_, _);
}
function _(_, _) {
  let _ = _(_);
  if (!_) return;
  let _ = null;
  for (let _ = _; _; _ = _.GetNavParentCrossingTrees())
    _.m_Properties?.scrollRegionToStartOrEnd && (_ = _);
  if (_)
    for (
      let _ = _;
      _ &&
      !(
        _.BHasNavTargetInDirection(_, !0) ||
        (_ != _ &&
          _.Element &&
          _.m_Properties?.scrollRegionToStartOrEnd &&
          _(_.Element, _, _),
        _ == _)
      );
      _ = _.GetNavParentCrossingTrees()
    );
}
function _(_, _, _) {
  let _ = _,
    _ = _.ownerDocument;
  if (
    (_ == _.body && _.defaultView && !_(_, _) && (_ = _.defaultView), !_(_, _))
  )
    return;
  let _ = _(_);
  if (_ == `y`) {
    let _ = _ == _.DIR_DOWN ? _.MaxScrollTop() : 0;
    _.scrollTo({
      top: _,
      behavior: `smooth`,
    });
  } else {
    let _ = _ == _.DIR_RIGHT ? _.MaxScrollLeft() : 0;
    _.scrollTo({
      left: _,
      behavior: `smooth`,
    });
  }
}
function _(_) {
  if (!_)
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    };
  if (!(`ownerDocument` in _))
    return {
      left: 0,
      right: _.innerWidth,
      top: 0,
      bottom: _.innerHeight,
    };
  let _ = 0,
    _ = 0,
    _ = _;
  for (; _; ) {
    if (`ownerDocument` in _) {
      let _ = window.getComputedStyle(_);
      if (_.position === `fixed` || _.position === `sticky`) break;
    }
    (_ += _.offsetTop), (_ += _.offsetLeft), (_ = _.offsetParent);
  }
  for (_ = _?.parentElement; _; ) {
    let { scrollTop: _, scrollLeft: _ } = _(_);
    if (((_ -= _), (_ -= _), `ownerDocument` in _)) {
      let _ = window.getComputedStyle(_);
      if (_.position === `fixed` || _.position === `sticky`) break;
    }
    _ = _.parentElement;
  }
  return {
    left: _,
    top: _,
    right: _ + _.offsetWidth,
    bottom: _ + _.offsetHeight,
  };
}
function _(_, _) {
  return _ == `x`
    ? [_.left, _.right, _.right - _.left]
    : [_.top, _.bottom, _.bottom - _.top];
}
function _(_, _, _, _) {
  let [_, _, _] = _(_, _),
    [_, _, _] = _(_, _),
    [_, _] = _(_, _);
  if (_ < _ && _ > _) return 0;
  let _ = _ - _,
    _ = _ + _,
    _ = _ > _;
  return (_ < _ && !_) || (_ > _ && _)
    ? _ - _
    : (_ < _ && _) || (_ > _ && !_)
      ? _ - _
      : 0;
}
function _(_) {
  return _ == `auto`
    ? 0
    : _.endsWith(`px`)
      ? parseInt(_)
      : (console.log(`Unsupported length`, _), 0);
}
function _(_) {
  let _;
  return (
    (_ =
      `ownerDocument` in _
        ? _.ownerDocument.defaultView.getComputedStyle(_)
        : _.document.defaultView.getComputedStyle(
            window.document.documentElement,
          )),
    {
      left: _(_.scrollPaddingLeft),
      right: _(_.scrollPaddingRight),
      top: _(_.scrollPaddingTop),
      bottom: _(_.scrollPaddingBottom),
    }
  );
}
function _(_) {
  if (!(`ownerDocument` in _))
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    };
  let _ = _.ownerDocument.defaultView.getComputedStyle(_);
  return {
    left: _(_.scrollMarginLeft),
    right: _(_.scrollMarginRight),
    top: _(_.scrollMarginTop),
    bottom: _(_.scrollMarginBottom),
  };
}
function _(_, _) {
  let _ = _(_);
  return {
    left: Math.max(0, _.left + _.left),
    right: Math.max(0, _.right - _.right),
    top: Math.max(0, _.top + _.top),
    bottom: Math.max(0, _.bottom - _.bottom),
  };
}
function _(_) {
  return _ > -1 && _ < 1;
}
function _(_, _, _, _, _) {
  _(
    `----------------------------------------------------------------------------------`,
  ),
    _(`Scrolling Into View (NoTransform):`, _);
  let _ = [],
    _ = _,
    _ = _(_),
    _ = _ ?? Number.MAX_VALUE;
  for (; _; ) {
    let _ = _(_);
    _ ||= _(_);
    let _ = _(_),
      _ = _(_),
      _ = _(_, _),
      _ = _(_),
      _ = {
        element: _,
        left: 0,
        top: 0,
      };
    if (
      (_(
        `Checking scroll div`,
        _,
        `scroll y:${_.scrollTop} of ${_.MaxScrollTop()}, x:${_.scrollLeft} of ${_.MaxScrollLeft()}, adjusted =>`,
        _,
        `target => `,
        _,
      ),
      (!_ || _ == `y`) &&
        _(_, `y`) &&
        ((_.top = _(_, _, _, `y`)),
        (_.top = _(_.top, -_.scrollTop, _.MaxScrollTop() - _.scrollTop)),
        _ &&
          ((_.top = Math.min(_, Math.abs(_.top)) * (_.top < 0 ? -1 : 1)),
          (_ -= Math.abs(_.top))),
        _(`- checked y: ${_.top}`)),
      (!_ || _ == `x`) &&
        _(_, `x`) &&
        ((_.left = _(_, _, _, `x`)),
        (_.left = _(_.left, -_.scrollLeft, _.MaxScrollLeft() - _.scrollLeft)),
        _ &&
          ((_.left = Math.min(_, Math.abs(_.left)) * (_.left < 0 ? -1 : 1)),
          (_ -= Math.abs(_.left))),
        _(`- checked x: ${_.left}`)),
      _.push(_),
      (_ && !_) || !(`ownerDocument` in _))
    )
      break;
    let _ = window.getComputedStyle(_);
    if (_.position === `fixed` || _.position === `sticky`) break;
    (_ = _),
      (_ = {
        top: _.top - _.top,
        right: _.right - _.left,
        bottom: _.bottom - _.top,
        left: _.left - _.left,
      });
  }
  let _ = !1;
  for (let _ of _) {
    if (_(_.left) && _(_.top)) continue;
    let _ = _(_.element),
      _ = _.scrollTop + _.top,
      _ = _.scrollLeft + _.left;
    (_ = _(_, 0, _.MaxScrollLeft())),
      (_ = _(_, 0, _.MaxScrollTop())),
      !(_(_.scrollLeft - _) && _(_.scrollTop - _)) &&
        (_.scrollTo({
          left: _,
          top: _,
          behavior: _,
        }),
        (_ ||= (_(`Scrolling:`), !0)),
        _(`- ${_.top},${_.left} => ${_}, ${_}, behavior: ${_}`, _.element));
  }
}
var _ = class {
  m_element;
  m_fnOriginalScrollTo;
  m_window;
  m_scrollTopTarget = void 0;
  m_scrollLeftTarget = void 0;
  m_animation = void 0;
  constructor(_) {
    `ownerDocument` in _
      ? ((this.m_element = _),
        (this.m_fnOriginalScrollTo = _.scrollTo),
        (this.m_element.scrollTo = (_, _) => {
          typeof _ == `number`
            ? this.scrollTo({
                left: _,
                top: _,
              })
            : this.scrollTo(_);
        }))
      : ((this.m_window = _), (this.m_element = _.document.documentElement));
  }
  ResetScrollState() {
    (this.m_scrollTopTarget = void 0),
      (this.m_scrollLeftTarget = void 0),
      this.m_window || (this.m_element.style.scrollSnapType = ``);
  }
  scrollTo(_) {
    if (_?.behavior != `smooth`)
      (this.m_animation &&= (this.m_animation.Cancel(), void 0)),
        this.m_window
          ? this.m_window.scrollTo(_)
          : this.m_fnOriginalScrollTo?.apply(this.m_element, [_]),
        this.ResetScrollState();
    else {
      let _ = _.left ?? this.scrollLeft,
        _ = _.top ?? this.scrollTop,
        _ = `sine`;
      if (
        (this.m_animation && (this.m_animation.Cancel(), (_ = `linear`)),
        Math.max(
          Math.abs(this.currentScrollTop - _),
          Math.abs(this.currentScrollLeft - _),
        ) > 0)
      ) {
        let _ = {
          msDuration: 200,
          timing: _,
          onComplete: this.ResetScrollState,
        };
        if (this.m_window) {
          let _ = this.currentScrollLeft,
            _ = this.currentScrollTop;
          this.m_animation = new _(this.m_window, _, (_) => {
            this.m_window?.scrollTo({
              left: _ + (_ - _) * _,
              top: _ + (_ - _) * _,
              behavior: `auto`,
            });
          });
        } else
          (this.m_element.style.scrollSnapType = `initial`),
            (this.m_animation = new _(
              this.m_element,
              {
                scrollTop: _,
                scrollLeft: _,
              },
              _,
            ));
        (this.m_scrollLeftTarget = _),
          (this.m_scrollTopTarget = _),
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
_([_], _.prototype, `ResetScrollState`, null);
var _ = new WeakMap();
function _(_) {
  let _ = _.get(_);
  return _ || ((_ = new _(_)), _.set(_, _)), _;
}
function _(_) {
  let _ = _.get(_);
  return _
    ? {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      }
    : {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      };
}
var _ = new _(`FocusNavigationMovement`),
  _ = _.Debug,
  _ = (function (_) {
    return (
      (_[(_.NONE = 0)] = `NONE`),
      (_[(_.COLUMN = 1)] = `COLUMN`),
      (_[(_.ROW = 2)] = `ROW`),
      (_[(_.COLUMN_REVERSE = 3)] = `COLUMN_REVERSE`),
      (_[(_.ROW_REVERSE = 4)] = `ROW_REVERSE`),
      (_[(_.GRID = 5)] = `GRID`),
      (_[(_.GEOMETRIC = 6)] = `GEOMETRIC`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.FIRST = 0)] = `FIRST`),
      (_[(_.LAST = 1)] = `LAST`),
      (_[(_.MAINTAIN_X = 2)] = `MAINTAIN_X`),
      (_[(_.MAINTAIN_Y = 3)] = `MAINTAIN_Y`),
      (_[(_.PREFERRED_CHILD = 4)] = `PREFERRED_CHILD`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.Standard = 0)] = `Standard`),
      (_[(_.NoTransform = 1)] = `NoTransform`),
      (_[(_.NoTransformSparseContent = 2)] = `NoTransformSparseContent`),
      _
    );
  })({}),
  _ = (function (_) {
    return (
      (_[(_.INVALID = 0)] = `INVALID`),
      (_[(_.FORWARD = 1)] = `FORWARD`),
      (_[(_.BACKWARD = 2)] = `BACKWARD`),
      _
    );
  })({}),
  _ = class _ {
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
    m_Focused = _(!1);
    m_FocusWithin = _(!1);
    m_ActionDescriptionsChangedCallbackList = new _();
    m_FocusableIfEmptyAncestor = null;
    m_rgNavigationHandlers = [];
    m_rgFocusHandlers = [];
    constructor(_, _, _) {
      (this.m_Tree = _),
        (this.m_Parent = _),
        (this.m_FocusRing = _),
        (this.m_nDepth = _ ? _.m_nDepth + 1 : 0);
    }
    CreateHandle() {
      return new _(this);
    }
    get Tree() {
      return this.m_Tree;
    }
    get NavKey() {
      if (this.m_Properties?.navKey) return this.m_Properties.navKey;
    }
    get Element() {
      return this.m_element;
    }
    get Parent() {
      return this.m_Parent;
    }
    GetNavParentCrossingTrees() {
      return this.m_Parent
        ? this.m_Parent
        : this.m_Tree.GetParentEmbeddedNavTree() && this.Element
          ? (this.Element.__nav_wrapper ?? null)
          : null;
    }
    GetWrappedTree() {
      return null;
    }
    SetProperties(_) {
      let _ = !_(
          this.m_Properties?.actionDescriptionMap,
          _?.actionDescriptionMap,
          _,
        ),
        _ = this.m_Properties?.focusableIfEmpty,
        _ = this.m_Properties?.noFocusRing;
      (this.m_Properties = _ || {}),
        _ && this.m_ActionDescriptionsChangedCallbackList.Dispatch(),
        this.m_Properties.focusableIfEmpty && !_
          ? this.PropagateFocusableIfEmptyAncestorToDescendants(this)
          : !this.m_Properties.focusableIfEmpty &&
            _ &&
            this.PropagateFocusableIfEmptyAncestorToDescendants(
              this.m_FocusableIfEmptyAncestor,
            ),
        this.m_Properties.noFocusRing && !_ && this.BHasFocus()
          ? this.m_FocusRing?.OnBlur(_.APPLICATION, this, this)
          : !this.m_Properties.noFocusRing &&
            _ &&
            this.BHasFocus() &&
            this.m_FocusRing?.OnFocus(_.APPLICATION, this, this),
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
      return this.m_element?.getBoundingClientRect();
    }
    GetElementForFocusRingMeasure() {
      let _ = this.m_element;
      return this.m_Properties?.focusRingSizeElementID
        ? (_?.ownerDocument?.getElementById(
            this.m_Properties.focusRingSizeElementID,
          ) ?? _)
        : _;
    }
    GetBoundingRectForFocusRing() {
      return this.GetElementForFocusRingMeasure()?.getBoundingClientRect();
    }
    GetBorderRadiusForFocusRing() {
      if (!this.m_Properties?.focusRingSizeElementID) return;
      let _ = this.GetElementForFocusRingMeasure();
      if (!_) return;
      let _ = _.ownerDocument?.defaultView?.getComputedStyle(_);
      if (_)
        return {
          borderTopLeftRadius: _.borderTopLeftRadius,
          borderTopRightRadius: _.borderTopRightRadius,
          borderBottomRightRadius: _.borderBottomRightRadius,
          borderBottomLeftRadius: _.borderBottomLeftRadius,
        };
    }
    SetHasFocus(_) {
      this.m_Focused.Set(_);
    }
    SetFocusWithin(_) {
      this.m_FocusWithin.Set(_) &&
        this.m_Properties?.onFocusWithin &&
        this.m_Properties.onFocusWithin(_);
    }
    get SubscribableHasFocus() {
      return this.m_Focused;
    }
    BHasFocus() {
      return this.m_Focused.Value;
    }
    get SubscribableFocusWithin() {
      return this.m_FocusWithin;
    }
    BFocusWithin() {
      return this.m_FocusWithin.Value;
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
    BuildConsolidatedActionDescriptionMap(_) {
      let _ = this.m_Properties?.actionDescriptionMap;
      if (_)
        for (let _ in _) {
          let _ = _;
          _[_] === void 0 && (_[_] = _[_]);
        }
      return this.m_Parent
        ? this.m_Parent.BuildConsolidatedActionDescriptionMap(_)
        : this.m_Tree.GetParentEmbeddedNavTree()
          ? this.m_Tree
              .GetParentEmbeddedNavTree()
              .Root.BuildConsolidatedActionDescriptionMap(_)
          : _;
    }
    AddChild(_) {
      this.m_rgChildren.push(_),
        (this.m_bChildrenSorted = !1),
        this.m_element && this.RegisterDOMEvents(),
        this.m_Properties?.focusableIfEmpty
          ? _.SetFocusableIfEmptyAncestor(this)
          : this.m_FocusableIfEmptyAncestor &&
            _.SetFocusableIfEmptyAncestor(this.m_FocusableIfEmptyAncestor),
        this.m_bMounted &&
          _.BFocusWithin() &&
          (_(
            !this.m_ActiveChild && this.BFocusWithin(),
            `Invalid focus state in AddChild`,
          ),
          this.SetActiveChild(this.m_rgChildren.length - 1));
    }
    OnMount(_) {
      (this.m_element = _),
        this.m_Parent
          ? this.m_Parent.AddChild(this)
          : _(this == this.m_Tree.Root, `Only root should have no parent`),
        (this.m_bMounted = !0),
        this.RegisterDOMEvents();
      let _ =
          this.m_FocusableIfEmptyAncestor &&
          this.m_FocusableIfEmptyAncestor.BHasFocus(),
        _ = this.m_Properties?.autoFocus || _;
      if (this.BWantsAutoFocus() || _) {
        let _ = -1;
        this.m_rgChildren.length &&
          (this.EnsureChildrenSorted(),
          (_ = this.m_rgChildren.findIndex((_) => _.BWantsAutoFocus()))),
          (this.m_Properties?.autoFocus || _ || _ !== -1) &&
            (this.SetActiveChild(_),
            !this.m_Parent || this.m_Parent.m_element
              ? _
                ? this.m_Tree.DeferredFocus.BHasQueuedFocusNode() ||
                  this.m_Tree.DeferredFocus.RequestFocus(
                    this.m_FocusableIfEmptyAncestor,
                    {
                      bFocusDescendant: !0,
                    },
                  )
                : this.Tree.DeferredFocus.RequestFocus(this)
              : (this.m_Parent.m_bAutoFocusChild = !0));
      } else if (this.m_rgChildren.length) {
        let _ = this.m_rgChildren.findIndex((_) => _.BFocusWithin());
        _ != -1 &&
          (this.SetActiveChild(_),
          _(
            this.BFocusWithin(),
            `Child has focus, we should be m_bFocusWithin`,
          ));
      }
    }
    DEV_SetDebugPropsOnElement() {}
    OnUnmount() {
      this.m_Properties?.focusableIfEmpty &&
        this.PropagateFocusableIfEmptyAncestorToDescendants(
          this.m_FocusableIfEmptyAncestor,
        ),
        (this.m_bMounted = !1);
      let _ = this.Tree.DeferredFocus.BIsQueuedFocusNode(this);
      (this.BHasFocus() || _) &&
        (_(
          `The focused node is unmounting, ${this.m_FocusableIfEmptyAncestor ? `will transfer to retain focus ancestor` : `will blur`}.`,
        ),
        _ && this.Tree.DeferredFocus.RequestFocus(null),
        this.m_FocusableIfEmptyAncestor
          ? this.m_FocusableIfEmptyAncestor.OnFocusedDecendantRemoved(this)
          : this.BHasFocus() && this.m_Tree.TransferFocus(_.APPLICATION, null)),
        this.UnregisterDOMEvents(),
        this.m_Parent
          ? this.m_Parent.RemoveChild(this)
          : _(this == this.m_Tree.Root, `Only root should have no parent`);
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
          _(this.m_element, this.OnNavigationEvent),
        ),
        (this.m_Properties?.focusable ||
          this.m_Properties?.focusableIfEmpty ||
          this.m_rgChildren.length == 0) &&
          (this.m_rgFocusHandlers.length ||
            (this.m_element?.addEventListener(`focus`, this.OnDOMFocus),
            this.m_element?.addEventListener(`blur`, this.OnDOMBlur),
            this.m_rgFocusHandlers.push(() => {
              this.m_element?.removeEventListener(`focus`, this.OnDOMFocus),
                this.m_element?.removeEventListener(`blur`, this.OnDOMBlur);
            })));
    }
    RemoveChild(_) {
      let _ = this.m_rgChildren.indexOf(_);
      _(_ !== -1, `Child was not found to remove`),
        _ !== -1 &&
          (this.m_ActiveChild == _ && (this.m_ActiveChild = void 0),
          this.m_rgChildren.splice(_, 1));
    }
    UnregisterDOMEvents() {
      this.m_rgNavigationHandlers.forEach((_) => _()),
        (this.m_rgNavigationHandlers = []),
        this.m_rgFocusHandlers.forEach((_) => _()),
        (this.m_rgFocusHandlers = []);
    }
    GetActiveDescendant() {
      let _ = this.GetActiveChild();
      return _ ? _.GetActiveDescendant() : this;
    }
    IsValidChildIndex(_) {
      return _ >= 0 && _ < this.m_rgChildren.length;
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
    EnsureChildrenSorted(_ = !1) {
      (!this.m_bChildrenSorted || _) &&
        (this.m_rgChildren.sort((_, _) => {
          let _ = _.m_element,
            _ = _.m_element;
          if (!_ || !_.isConnected) return !_ || !_.isConnected ? 0 : 1;
          if (!_ || !_.isConnected) return -1;
          let _ = _.compareDocumentPosition(_);
          return _ & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : _ & Node.DOCUMENT_POSITION_FOLLOWING
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
      let _ = this.GetActiveChild();
      return _ ? _.GetLastFocusElement() : this.m_element;
    }
    OnDOMFocus(_) {
      if (!this.BHasFocus()) {
        if (this.GetFocusable() == `children`) {
          let _ = this.FindFocusableDescendant();
          if (_ && _ !== this) {
            _(
              `Browser gave node focus but we are marked focusableIfEmpty, transfering focus to descendant.`,
              this.m_element,
              _.m_element,
            ),
              this.m_Tree.TransferFocus(_.BROWSER, _);
            return;
          }
        }
        this.m_Tree.TransferFocus(_.BROWSER, this);
      }
    }
    OnDOMBlur(_) {
      this.BHasFocus() &&
        this.m_element?.ownerDocument.hasFocus() &&
        this.m_Tree.TransferFocus(_.BROWSER, null);
    }
    UpdateParentActiveChild() {
      this.m_Parent &&
        (this.m_Parent.SetActiveChild(this),
        this.m_Parent.UpdateParentActiveChild());
    }
    GetFocusable() {
      let {
        focusable: _,
        focusableIfEmpty: _,
        childFocusDisabled: _,
        fnCanTakeFocus: _,
      } = this.m_Properties;
      return !this.m_bMounted || (_ && !_(this))
        ? `none`
        : _ || (_ && (_ || this.m_rgChildren.length == 0))
          ? `self`
          : !_ && this.m_rgChildren.length
            ? `children`
            : `none`;
    }
    BTakeFocus(_, _) {
      let _ = this.FindFocusableNode(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    FindFocusableNode(_, _) {
      switch (this.GetFocusable()) {
        case `none`:
          return null;
        case `self`:
          return this;
        case `children`:
          return this.FindFocusableDescendant(_, _);
      }
    }
    BChildTakeFocus(_, _) {
      let _ = this.FindFocusableDescendant(_);
      return this.InternalFocusDescendant(_, _, _);
    }
    BFocusFirstChild(_) {
      let _ = this.FindNextFocusableChildInDirection(-1, 1, _.INVALID);
      return this.InternalFocusDescendant(_, _);
    }
    BFocusLastChild(_) {
      let _ = this.FindNextFocusableChildInDirection(
        this.m_rgChildren.length,
        2,
        _.INVALID,
      );
      return this.InternalFocusDescendant(_, _);
    }
    FindFocusableDescendant(_, _) {
      let _ = _(_),
        { focusableIfEmpty: _, childFocusDisabled: _ } =
          this.m_Properties ?? {};
      if (_) return null;
      if (this.m_rgChildren.length) {
        this.EnsureChildrenSorted();
        let { navEntryPreferPosition: _, resetNavOnEntry: _ } =
            this.m_Properties ?? {},
          _ = this.GetActiveChildIndex();
        _ && _ !== void 0 && (_ = -1);
        let _ = this.GetLayout();
        this.IsValidChildIndex(_) ||
          (_ =
            _ >= this.m_rgChildren.length || _ == 4 || _ == 3 || _ == 1
              ? this.m_rgChildren.length - 1
              : 0);
        let _, _;
        if (
          (_ == 2 ? (_ = `x`) : _ == 3 ? (_ = `y`) : _ == 6 && _ && (_ = _[_]),
          (_ || _) && _)
        ) {
          let _ = this.m_Tree.GetLastFocusedNode();
          if (_ || (_ && _ == _[_])) {
            let _ =
              _ ||
              this.AdjustRectForLastMovementOnTangentAxis(
                _.GetBoundingRect(),
                _,
              );
            _(
              `Taking focus while preserving ${_ && _[_]} preserved: ${_} movement: ${_}, node:`,
              _,
            ),
              (_ = this.FindClosestFocusableNodeToRect(_, _));
          } else if (_ != _[_]) {
            let _ = this.ComputeRelativeDirection(_, 5),
              _ = _ == 2 ? this.m_rgChildren.length : -1;
            _ = this.FindNextFocusableChildInDirection(_, _, _);
          }
        } else if (_ == 4) {
          let _ = this.m_rgChildren;
          for (; _.length; ) {
            let _ = [];
            for (let _ of _) {
              if (
                ((_ = _.BWantsPreferredFocus()
                  ? _.FindFocusableNode(_)
                  : void 0),
                _)
              )
                return _;
              _.push(..._.m_rgChildren);
            }
            _ = _;
          }
        } else
          _ == 1 && (_ = this.FindNextFocusableChildInDirection(_ + 1, 2, _));
        return (
          (_ ||= this.FindNextFocusableChildInDirection(_ - 1, 1, _)),
          (_ ||= this.FindNextFocusableChildInDirection(_, 2, _)),
          _ || (_ ? this : null)
        );
      }
      return null;
    }
    BVisibleChildTakeFocus(_) {
      let _ = this.Element?.ownerDocument?.defaultView ?? window,
        _ = {
          top: 0,
          left: 0,
          right: _.innerWidth,
          bottom: _.innerHeight,
        },
        _ = _(this, _);
      return (
        _(
          `Focusing visible child, best child match is ${_?.child?.Element?.className} - ${JSON.stringify(_?.visibility)}`,
        ),
        _ ? _.child.BTakeFocus(_) : !1
      );
    }
    GetLayout() {
      return this.m_Properties?.layout
        ? this.m_Properties.layout
        : this.m_rgChildren.length < 2
          ? 0
          : _(this.m_element);
    }
    OnNavigationEvent(_) {
      let _ = _.detail.button;
      if (this.BTryInternalNavigation(_, _.detail.is_repeat ?? !1)) return !0;
      let {
          onMoveUp: _,
          onMoveRight: _,
          onMoveDown: _,
          onMoveLeft: _,
        } = this.m_Properties ?? {},
        _ = !1;
      switch (_) {
        case _.DIR_UP:
          _ && (_ = _(_.detail, this));
          break;
        case _.DIR_RIGHT:
          _ && (_ = _(_.detail, this));
          break;
        case _.DIR_DOWN:
          _ && (_ = _(_.detail, this));
          break;
        case _.DIR_LEFT:
          _ && (_ = _(_.detail, this));
          break;
      }
      return _;
    }
    InternalFocusDescendant(_, _, _) {
      return _ ? (this.m_Tree.TransferFocus(_, _, _, !1), !0) : !1;
    }
    BHasNavTargetInDirection(_, _) {
      if (this.HasMovementHandler(_)) return !0;
      let _ = this.FindNextFocusableChild(_);
      if (_ && _) {
        let _ = _.GetWrappedTree();
        if (_ && _.GetExcludeFromScrollRegionSearch()) return !1;
      }
      return !!_;
    }
    HasMovementHandler(_) {
      switch (_) {
        case _.DIR_UP:
          return !!this.m_Properties?.onMoveUp;
        case _.DIR_DOWN:
          return !!this.m_Properties?.onMoveDown;
        case _.DIR_LEFT:
          return !!this.m_Properties?.onMoveLeft;
        case _.DIR_RIGHT:
          return !!this.m_Properties?.onMoveRight;
      }
      return !1;
    }
    FindNextFocusableChild(_) {
      let _ = this.GetLayout(),
        _ = this.ComputeRelativeDirection(_, _);
      if (_ == 0 || (this.m_Properties?.focusable && this.BHasFocus()))
        return null;
      if ((this.EnsureChildrenSorted(!0), _ == 5))
        return this.FindNextFocusableChildInGrid(
          this.GetActiveChildIndex(),
          _,
          _,
        );
      if (_ == 6) return this.FindNextFocusableChildGeometric(_, _);
      let _ = this.GetActiveChildIndex();
      return (
        this.IsValidChildIndex(_) ||
          (_ = _ == 1 ? -1 : this.m_rgChildren.length),
        this.FindNextFocusableChildInDirection(_, _, _)
      );
    }
    BTryInternalNavigation(_, _) {
      _(
        `Handling navigation event ${_[_]} - ${_[this.GetLayout()]}`,
        this.m_element,
      );
      let _ = this.FindNextFocusableChild(_);
      if (!_) return !1;
      let _ = _(_),
        _ = this.ComputeRelativeDirection(_, this.GetLayout());
      if (this.GetScrollIntoViewType() == 2 || _.GetScrollIntoViewType() == 2) {
        let _ = _.Element?.ownerDocument.defaultView;
        if (_) {
          let _ = (_ == `y` ? _.innerHeight : _.innerWidth) / (_ ? 4.5 : 3.33),
            _ = _(_.Element),
            _ = !1;
          if (
            (_ == `y`
              ? _ == 1
                ? (_ = _.top > _.innerHeight && _.bottom > _.innerHeight + _)
                : _ == 2 && (_ = _.bottom < 0 && _.top < -_)
              : _ == `x` &&
                (_ == 1
                  ? (_ = _.left > _.innerWidth && _.right > _.innerWidth + _)
                  : _ == 2 && (_ = _.right < 0 && _.left < -_)),
            _)
          )
            return (
              _(`Element too far away, scrolling ${_} on ${_} axis `),
              _(_.Element, _.Element, `smooth`, _, _),
              !0
            );
        }
      }
      return this.m_Tree.TransferFocus(_.GAMEPAD, _, _), !0;
    }
    GetScrollIntoViewType() {
      return this.m_Properties?.scrollIntoViewType !== void 0 &&
        this.m_Properties?.scrollIntoViewType !== null
        ? this.m_Properties.scrollIntoViewType
        : this.m_Parent
          ? this.m_Parent.GetScrollIntoViewType()
          : 0;
    }
    GetRelativeDirection(_) {
      return this.ComputeRelativeDirection(_, this.GetLayout());
    }
    ComputeRelativeDirection(_, _) {
      let _ = _ == 4 || _ == 3;
      switch (_) {
        case 2:
        case 4:
          switch (_) {
            case _.DIR_LEFT:
              return _ ? 1 : 2;
            case _.DIR_RIGHT:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 1:
        case 3:
          switch (_) {
            case _.DIR_UP:
              return _ ? 1 : 2;
            case _.DIR_DOWN:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        case 5:
        case 6:
          switch (_) {
            case _.DIR_LEFT:
            case _.DIR_UP:
              return _ ? 1 : 2;
            case _.DIR_RIGHT:
            case _.DIR_DOWN:
              return _ ? 2 : 1;
            default:
              return 0;
          }
        default:
          return 0;
      }
    }
    AdvanceIndex(_, _) {
      return _ + (_ == 1 ? 1 : -1);
    }
    FindNextFocusableChildInDirection(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _ + _; _ >= 0 && _ < this.m_rgChildren.length; _ += _) {
        let _ = this.m_rgChildren[_].FindFocusableNode(_);
        if (_) return _;
      }
      return null;
    }
    ScanChildren(_, _, _) {
      let _ = _ == 1 ? 1 : -1;
      for (let _ = _; _ >= 0 && _ < this.m_rgChildren.length; _ += _)
        if (_(this.m_rgChildren[_], _)) return _;
      return -1;
    }
    FindNextFocusableChildInGrid(_, _, _) {
      let _ = _ == _.DIR_UP || _ == _.DIR_DOWN,
        _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          _(
            !1,
            `No active child for grid navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = this.GetActiveDescendant().GetBoundingRect();
      if (
        ((_ == _.DIR_UP || _ == _.DIR_DOWN) &&
          (_ = this.AdjustRectForLastMovementOnTangentAxis(_, `y`)),
        _)
      ) {
        let _ = _;
        for (; _ != -1; ) {
          let _ = this.ScanChildren(
            this.AdvanceIndex(_, _),
            _,
            (_) => !_(`y`, _, _.GetBoundingRect()),
          );
          if (_ != -1) {
            let _ = this.m_rgChildren[_].GetBoundingRect(),
              _ = this.FindClosestChildInNextAxiallyAlignedSet(
                `x`,
                _,
                _,
                _,
                _,
                _,
              );
            if (_) return _;
          }
          _ = _;
        }
      } else {
        let _ = _ == 1 ? 1 : -1;
        for (
          let _ = this.AdvanceIndex(_, _);
          _ >= 0 && _ < this.m_rgChildren.length;
          _ += _
        ) {
          let _ = this.m_rgChildren[_];
          if (!_(`y`, _, _.GetBoundingRect())) return null;
          let _ = _.FindFocusableNode(_);
          if (_) return _;
        }
      }
      return null;
    }
    FindNextFocusableChildGeometric(_, _) {
      let _ = this.GetLastFocusElement();
      if (!_ || _ == this.m_element)
        return (
          _(
            !1,
            `No active child for geometric navigation`,
            this.m_iLastActiveChildIndex,
            this.m_rgChildren.length,
            _,
          ),
          this.FindFocusableDescendant(_)
        );
      let _ = _(_);
      if (!_) return null;
      let _ = this.AdjustRectForLastMovementOnTangentAxis(
        this.GetActiveDescendant().GetBoundingRect(),
        _,
      );
      return this.FindClosetChildInDirection(_, _, _, _);
    }
    AdjustRectForLastMovementOnTangentAxis(_, _) {
      let _ = this.m_Tree.GetLastFocusedMovementRect(_[_]);
      return _
        ? _ == `x`
          ? {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
          : {
              left: _.left,
              right: _.right,
              top: _.top,
              bottom: _.bottom,
            }
        : _;
    }
    FindClosestFocusableNodeToRect(_, _) {
      let _ = _(_),
        _ = _ && _[_],
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = _(_, _),
            _ = _ ? _(_, _, _) : 0;
          _.push({
            child: _,
            overlap: _,
            dist: _,
          });
        }
      }
      _.sort((_, _) =>
        _.dist == _.dist ? _.overlap - _.overlap : _.dist - _.dist,
      );
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosetChildInDirection(_, _, _, _) {
      _(
        `Find child closest to rect, rect is at left ${_.left} top ${_.top} right ${_.right} bottom ${_.bottom}`,
      );
      let _ = _(_, _),
        _ = [];
      for (let _ of this.m_rgChildren) {
        let _ = _.GetBoundingRect();
        if (_) {
          let _ = _(_, _),
            _;
          (_ = _ == 1 ? _.min - _.max : _.min - _.max),
            _ >= 0 &&
              _.push({
                child: _,
                overlap: _(_[_], _, _),
                dist: _,
              });
        }
      }
      if (
        (_.sort((_, _) => {
          if (_.overlap) {
            if (!_.overlap) return -1;
          } else if (_.overlap) return 1;
          return _.dist - _.dist || _.overlap - _.overlap;
        }),
        _.IsDebugEnabled())
      ) {
        let _ = _.slice(0, 3).map(
          ({ dist: _, overlap: _, child: _ }) =>
            `[ node: ${_.m_element?.className} dist: ${_} overlap: ${_} ]`,
        );
        _(`Found nodes on axis, top 3 (of ${_.length}: ${_.join(`, `)}`);
      }
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    FindClosestChildInNextAxiallyAlignedSet(_, _, _, _, _, _) {
      (!_ || _ < 0) && (_ = 0);
      let _ = [];
      if (!_) return null;
      let _ = _(_);
      this.ScanChildren(_, _, (_) => {
        let _ = _.GetBoundingRect();
        return _
          ? _ && !_(_[_], _, _)
            ? !0
            : (_.push({
                child: _,
                overlap: _(_, _, _),
                dist: _(_, _, _),
              }),
              !1)
          : !1;
      }),
        _ == 2 && _.reverse(),
        _.sort((_, _) => {
          let _ = _.overlap - _.overlap;
          return _ == 0 ? _.dist - _.dist : _;
        });
      for (let { child: _ } of _) {
        let _ = _.FindFocusableNode(_, _);
        if (_) return _;
      }
      return null;
    }
    GetChildren() {
      return (
        this.EnsureChildrenSorted(),
        [this.m_rgChildren, this.m_iLastActiveChildIndex]
      );
    }
    SetActiveChild(_) {
      _ instanceof _
        ? (this.EnsureChildrenSorted(),
          (this.m_ActiveChild = _),
          (this.m_iLastActiveChildIndex = this.m_rgChildren.indexOf(_)))
        : (this.IsValidChildIndex(_) &&
            (this.m_ActiveChild = this.m_rgChildren[_]),
          (this.m_iLastActiveChildIndex = _));
    }
    GetDepth() {
      return this.m_nDepth;
    }
    SetFocusableIfEmptyAncestor(_) {
      (this.m_FocusableIfEmptyAncestor = _),
        this.m_Properties?.focusableIfEmpty ||
          this.PropagateFocusableIfEmptyAncestorToDescendants(_);
    }
    PropagateFocusableIfEmptyAncestorToDescendants(_) {
      for (let _ = 0; _ < this.m_rgChildren.length; _++)
        this.m_rgChildren[_].SetFocusableIfEmptyAncestor(_);
    }
    OnFocusedDecendantRemoved(_) {
      this.m_Tree.DeferredFocus.RequestFocus(this, {
        bFocusDescendant: !0,
      });
    }
    SetDOMFocusAndScroll(_, _, _, _) {
      this.UpdateParentActiveChild(),
        this.m_Tree.OnChildActivated(_),
        this.m_Tree.BIsActiveFocus()
          ? (_(
              !this.m_Tree.BUseVirtualFocus(),
              `Virtual focus tree should not have browser focus`,
            ),
            this.m_element?.focus({
              preventScroll: !0,
            }))
          : this.m_Tree.BUseVirtualFocus() ||
            _(
              `Didn't move focus to element as tree ${this.m_Tree._} is not active focus tree`,
            ),
        this.m_Tree.BIsActive() && _(this, _, _, _, _);
    }
  };
_([_], _.prototype, `OnDOMFocus`, null),
  _([_], _.prototype, `OnDOMBlur`, null),
  _([_], _.prototype, `OnNavigationEvent`, null);
var _ = class {
  m_node;
  m_History;
  m_StateHistory;
  constructor(_) {
    this.m_node = _;
  }
  TakeFocus(_) {
    return this.m_node.BTakeFocus(_ ? _.GAMEPAD : _.APPLICATION, _);
  }
  ParentTakeFocus(_) {
    this.m_node.Parent?.BTakeFocus(_ ? _.GAMEPAD : _.APPLICATION, _);
  }
  ChildTakeFocus(_) {
    return this.m_node.BChildTakeFocus(_ ? _.GAMEPAD : _.APPLICATION, _);
  }
  FocusVisibleChild(_) {
    return this.m_node.BVisibleChildTakeFocus(_);
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
    (this.m_History ||= new _(this.m_node)), this.m_History.PushState();
  }
  PopState(_ = 0) {
    this.m_History && this.m_History.PopState(_);
  }
  SaveState(_) {
    (this.m_StateHistory ||= new _(this.m_node)),
      this.m_StateHistory.SaveState(_);
  }
  RestoreState(_, _ = 0) {
    return this.m_StateHistory ? this.m_StateHistory.RestoreState(_, _) : !1;
  }
  GetFocusSnapshot() {
    return _(this.m_node);
  }
  RestoreFocusSnapshot(_, _ = 0) {
    return _(this.m_node, _, _);
  }
  NavTree() {
    return this.m_node.Tree;
  }
  Node() {
    return this.m_node;
  }
};
function _(_, _, _, _ = 0.001) {
  return _ == `x`
    ? _.right > _.left + _ && _.left + _ < _.right
    : _ == `y`
      ? _.bottom > _.top + _ && _.top + _ < _.bottom
      : (_(!1, `Invalid axis ${_}`), !1);
}
function _(_, _, _) {
  let _;
  return (
    _ == `x`
      ? (_ = Math.min(_.right, _.right) - Math.max(_.left, _.left))
      : _ == `y`
        ? (_ = Math.min(_.bottom, _.bottom) - Math.max(_.top, _.top))
        : (_(!1, `Invalid axis ${_}`), (_ = 0)),
    _ < 0 ? 0 : _
  );
}
function _(_, _) {
  return _ == `x`
    ? {
        min: _.left,
        max: _.right,
      }
    : {
        min: _.top,
        max: _.bottom,
      };
}
function _(_, _, _) {
  let _ = _[_],
    _ = _(_, _);
  return _ < _.min ? _.min - _ : _ > _.max ? _ - _.max : 0;
}
function _(_) {
  return {
    _: _.left,
    _: _.top,
  };
}
var _ = {
  OnBlur: () => {},
  OnFocus: () => {},
  OnFocusChange: () => {},
  OnForceMeasureFocusRing: () => {},
};
function _(_) {
  if (!_) return _.NONE;
  let _ = _.ownerDocument.defaultView,
    _ = _.getComputedStyle(_);
  if (_.display == `flex`)
    switch (_.flexDirection) {
      case `row`:
        return _.flexWrap == `wrap` ? _.GRID : _.ROW;
      case `row-reverse`:
        return _.ROW_REVERSE;
      case `column`:
        return _.COLUMN;
      case `column-reverse`:
        return _.COLUMN_REVERSE;
    }
  else if (_.display == `grid`)
    return _.gridTemplateAreas === `none` ? _.GRID : _.GEOMETRIC;
  else if (_.childElementCount > 0) {
    let _ = _.getComputedStyle(_.firstElementChild);
    if (_.float === `left`) return _.ROW;
    if (_.float === `right`) return _.ROW_REVERSE;
    if (_.display === `inline` || _.display === `inline-block`) return _.GRID;
  }
  return _.COLUMN;
}
function _(_) {
  switch (_) {
    case _.DIR_UP:
    case _.DIR_DOWN:
      return `y`;
    case _.DIR_LEFT:
    case _.DIR_RIGHT:
      return `x`;
    default:
      return;
  }
}
function _(_) {
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
var _ = _.createContext(_);
function _(_) {
  let { factory: _, children: _ } = _,
    _ = _.useMemo(() => _.CreateVirtualKeyboardRef.bind(_), [_]);
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_, _) {
  let { onTextEntered: _, ..._ } = _,
    _ = _.useRef(null),
    _ = _.useRef({});
  Object.assign(_.current, {
    ..._,
    BIsElementValidForInput: () =>
      _.current && document.activeElement == _.current,
  });
  let _ = _(_.current),
    _ = _.useCallback(
      (_) => {
        if (!(!document.hasFocus() && document.activeElement == _.current)) {
          if (_.currentTarget != _.current) {
            console.warn(
              `keyboard got blur event, but it's not the active element`,
            );
            return;
          }
          _.detail.focusedNode?.Element != _.current &&
            ((!_.BIsActive() && !_.bInVR) || _.DelayHideVirtualKeyboard());
        }
      },
      [_],
    ),
    _ = _(
      (_) => {
        _.current = _;
        let _ = [];
        return (
          _ &&
            (_.addEventListener(`focus`, _.SetAsCurrentVirtualKeyboardTarget),
            _.push(() =>
              _.removeEventListener(
                `focus`,
                _.SetAsCurrentVirtualKeyboardTarget,
              ),
            ),
            _.addEventListener(`click`, _.ShowVirtualKeyboard),
            _.push(() => _.removeEventListener(`click`, _.ShowVirtualKeyboard)),
            _.push(_(_, _.ShowVirtualKeyboard)),
            _.push(_(_, _))),
          () => _.forEach((_) => _())
        );
      },
      [_, _],
    );
  return (
    _.useLayoutEffect(
      () => (
        _(_, {
          TakeFocusAndShowKeyboard: () => {
            let _ = _.current;
            _ &&
              (document.activeElement != _ && _.focus(),
              _.ShowVirtualKeyboard());
          },
          HideVirtualKeyboard: () => {
            _.HideVirtualKeyboard();
          },
        }),
        () => _(_, null)
      ),
      [_, _],
    ),
    _
  );
}
function _(_) {
  let _ = _.useRef(void 0),
    _ = _.useContext(_);
  return (_.current ||= _(_ || {})), _.current;
}
var _ = _(),
  _ = _.createContext(void 0);
function _(_) {
  let { controller: _ } = _;
  return (
    _.useEffect(() => {
      _.Init();
    }, [_]),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return _.useContext(_);
}
function _() {
  return _(_()?.GetShowDebugFocusRing()) ?? !1;
}
function _(_) {
  let _ = _();
  _.useEffect(() => {
    if (_) return _.RegisterInputSource(_);
  }, [_, _]);
}
var _ = _.createContext({
  focusNavWindow: null,
  bSupportsFocus: !0,
});
function _(_) {
  let {
      ownerWindow: _,
      refFocusNavContext: _,
      parentWindowContext: _,
      children: _,
      suppressGamepadInput: _ = !1,
    } = _,
    _ = _(),
    _ = _.useContext(_),
    _ = _(),
    [_] = _.useState(() => _ ?? _.focusNavWindow ?? _.CreateContext(_, _, _)),
    _ = _(_.NavigationSourceSupportsFocus) ?? !1;
  _.useEffect(
    () => (
      _.OnMount(_),
      _.document.hasFocus() && _.OnActivate(_),
      () => {
        _.Destroy(_);
      }
    ),
    [_, _],
  ),
    _(_, _);
  let _ = _.useMemo(
    () => ({
      focusNavWindow: _,
      bSupportsFocus: _,
    }),
    [_, _],
  );
  return (0, _.jsxs)(_.Provider, {
    value: _,
    children: [
      !_?.BIsVR() &&
        (0, _.jsx)(_, {
          ownerWindow: _,
          context: _,
        }),
      _,
    ],
  });
}
function _(_) {
  let { ownerWindow: _, context: _ } = _,
    _ = _.useMemo(() => () => _.OnActivate(_), [_, _]),
    _ = _.useMemo(() => () => _.OnDeactivate(_), [_, _]);
  return (
    _(_, `touchstart`, _, {
      capture: !0,
    }),
    _(_, `mousedown`, _, {
      capture: !0,
    }),
    _(_, `focus`, _),
    _(_?.document, `focusin`, _),
    _(_, `blur`, _),
    null
  );
}
function _() {
  return _.useContext(_)?.focusNavWindow;
}
function _(_ = !0) {
  return _.useContext(_)?.bSupportsFocus ?? _;
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
